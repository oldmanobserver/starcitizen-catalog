# CitizenCon 2951: Gen 12 & The Multicore of Vulkan

**Video:** https://www.youtube.com/watch?v=SV9_chUpDgc
**Date:** 2021-10-09
**Duration:** 28:49

## Transcript

CITIZENCON
GEN 12 AND THE MULTICORE OF VULKAN
- [Ali] Hi, I'm Ali Brown,
Director of Graphics Engineering here at Cloud Imperium Games.
And today, we're going to be talking about Gen12,
our new multicore renderer.
In addition to myself,
we'll also be hearing from Christopher Bolte,
our Core Engine Architect, and Darrell Barnes,
our Graphics Programmer.
And today we're going to be talking about the need for a new
renderer, the architecture, and how it's built,
Vulkan, which is the backend API we use,
and the progress of how we're doing so far,
and then what's next for the graphics team.
So to help understand the need for the Gen12 renderer,
I first want to take a look at the high level structure
of our existing renderer to try and understand how the new
renderer will differ.
So here you see a diagram, very simplified,
of our overall architecture.
And on the left hand side, you can see the 3D engine,
and that is what manages all the visible objects
in the scene, for example, their position, their size.
And ultimately is responsible for the culling of them objects and
deciding what should be send
through on screen each frame to the renderer.
And obviously, the job of renderer is just to feed out the image
at the end of the frame.
And to do this, to manage this process,
all of these objects have to pass through the single
universal pipe, this conduit of information in the center.
And as a result of that,
every object has to come through a certain amount of settings or
paperwork and baggage to describe how they should be configured
and are represented on the diagram
by these switches.
So this type of design, it initially seems very flexible,
having this universal pipe,
you can very easily toggle certain settings and get a very
different rendered result for each object.
But the reality is actually the objects and the renderer both end
up extremely complicated because they have
to decipher this list of instructions and distribute these
objects through the various pipelines and stages
inside the renderer.
And this has to happen for every object, every frame.
And this deciphering ends up resulting
in quite a significant performance problem.
And it also makes the renderer quite inflexible because it's
quite complicated and hard
to change the architecture.
So how does our Gen12 renderer differ from this?
Well, the methodology we're taking on is to try and make
everything as explicit as possible,
and we're trying to minimize all these redundant connections,
and switches, and configuration options,
and try and get these much more streamlined.
So to do this, each object in the world will directly communicate
with the render pass responsible for drawing
that object at startup time.
So when the object is first spawned,
it will communicate directly with the pass responsible for it and
preconfigure everything possible at that stage.
Now this has a bunch of benefits.
So by speaking directly to the thing that's rendering it,
it doesn't have to worry about all the
other rendering systems.
So you end up with a much more limited set of parameters,
both on the object and on the rendering pass.
And all of a sudden, we do have a very relevant for the task,
which makes things much less complicated and it's
easier to optimize, more flexible and more modular.
So each of these passes then goes on to generate low level
commands that are actually going to map directly
to our graphics API,
which is the piece of software that sits just
above your GPU driver.
And this backend collects and executes all of these instructions.
And because there is no high level knowledge of the rendering in
this backend, it is just simply
issuing commands, it ends up very simple and streamlined and much
simpler than the equivalent
on our old renderer.
So the benefit of this simple code is much easier to
multi-thread, which is to say to run on multiple CPU cores
in parallel, something that is crucial for modern CPUs.
So multi-threading is a complex and often misunderstood paradigm,
so I thought it's worth us talking briefly
about how we optimize multi-threaded code.
And for that, I'm going to use an analogy of building a house,
which is another complex engineering
task with dependencies.
So here you can see a list of tasks for a builder, a joiner,
and an electrician, or one after another,
and those dependencies between them shown in red.
And in this example,
the house is equivalent to rendering our frame.
Each tradesman might be a different system.
And then the capacity of three people in our house is equivalent
to the three CPU cores we might have
on our system.
And the occupancy, as in the average number of people in the
house, is effectively the same as the CPU and GPU
utilization numbers you might see in task manager.
So in this example, we can see the project takes 11 units of time
and is on average 60% full for this house.
Now, this occupancy of 60% isn't the direct reason that it takes
11 years of time, and that is in fact
down to the critical path of work where the builder is blocking
the joiner and the joiner is then
blocking the electrician.
So the obvious answer here is that you need another builder or
multiple builders to work on this in parallel
to unblock the joiner and so on.
You can keep on parallelizing this work
to try and reduce the critical path.
And that is our focus when we're optimizing multi-threaded code.
However, not all tasks are trivial to run in parallel,
and sometimes it's impossible to actually run
them in parallel.
So you'll end up with these
unallocated capacity space on these bubbles.
And in this case, if we imagine the electrician was in fact our
GPU, then the fact that it takes longer is just
going to result in a CPU bubble, which is unavoidable.
And this type of thing happens very frequently if you have a
configuration, for example,
a very fast GPU and a very slow CPU,
then unavoidably one of them systems is going to have a bubble.
So we can fill these bubbles with non-critical work like
streaming meshes or textures,
and this can help fill the unused CPU capacity.
And this can be useful to try and get some extra work done,
but it ultimately is not going to improve the
performance of the frame.
And the point I really wanted to drive home was that the
CPU and GPU utilization,
which are often looked at as key indicators of performance,
aren't actually the direct thing we should
be looking at.
They are useful statistics,
but ultimately the frame time is the only thing that matters and
the critical path that resulted in that frame time.
So as we roll out Gen12,
we'll hopefully put in some new statistics in there that the
players can see, to help them understand the performance and
understand these bubbles.
And that should hopefully give a little bit clearer insight into
the performance of the renderer.
So how are we going to
actually achieve this parallelism in practice?
That's going to come down to two major changes.
One is the architectural changes,
which Christopher will talk us through.
And the second is the Vulkan graphics API,
that Darrel is going to talk us through.
- [Christopher] Welcome to the next section
of our Gen12 renderer presentation.
My name is Christopher Bolte,
Core Engine Architect here at Cloud Imperium Games.
And I would like to spend the next few minutes introducing the
high level architecture of our
in-development Gen12 renderer.
For this section, I will focus on the rendering of object
instances in the world.
For example, chairs, worlds, characters, or spaceships.
This part of the rendering pipeline is called scene object
rendering, and has the largest impact
on runtime performance.
There is a lot of work happening on the architecture to manage
operations which work when all pixels
on the screen, so-called post effects, but I won't cover those.
The current slide shows our existing renderer core set up.
We have a main thread, which has all game simulation,
as well as figuring out what objects we should trawl
for every frame.
And we have a render thread,
which takes all of those objects and translates the description
into GPU comments to render them on the screen.
The system is set up to [inaudible] the data.
In other words, the renderers are just working on data from the
previous frame while the main thread produces
data for the next frame.
Such a set up allows easy performance improvements in some
situation, but it has two issues on modern hardware.
First, the rendering code won't scale scan of a multiple CPU
cores, which can result in a
bottleneck during execution.
In other words, every visible object adds a certain cost,
the more objects you render, the higher the cost.
And as a single CPU processes cost, no matter how we optimize,
at some object count,
we will run into performance issues.
Second, since the main thread and the render thread must
synchronize with V-Sync,
we can end up with very bad load balancing.
As shown in the slide,
if the main thread takes longer than render thread,
the render thread has to be idle and wait.
And vice versa, if the render thread takes longer,
then the main thread has to it wait.
Doing such wait time, the CPU is underutilized,
especially if we're waiting for the single core render thread.
One goal for the Gen12 renderer is to remove this kind of
bottleneck and instead add textures to the system
without those waits,
and allowing every operation to utilize all CPU cores.
When we utilize all CPU cores,
you would still have an object limit as every possible object
must be processed, but we can process a high object.
And at the same time,
reduce the latency on the main thread until all
objects are processed.
Hence we would be making better use of modern multicore CPUs.
Let's take a look at some details.
For example, please keep in mind that the size of the sections
are chosen to visualize the cost.
Relation and size doesn't necessarily translate to the same
relation in CPU cost.
When looking at the cost of operations done by the render thread,
a pattern quickly emerges.
You pay a similar cost for every rendered object.
This is called a draw call.
why we draw call?
Some time that is spent inside our own window code,
and some part of it is spent in the CPU driver code.
In the next slide, we will cover all code process,
as well as the next steps to move the 12 core cost
out of the render thread, onto multiple CPU cores.
We already have a level of parallelization on the main thread,
used to find out what objects are visible.
They have used our batchworker job system.
This is a parallelization system to execute the same code on a
different object instance of all CPU cores.
To give an example, checking foreign objects can be spent over 10
threads, but every thread will
process 40 object.
By doing that, latency on the main thread until all foreign
objects are done is divided by the number
of threads, reducing said latency to 40 objects only,
roughly at least.
At the execute system,
several low level factors affect execution,
making the statement not fully true,
but covering those would be out of scope for this presentation.
The visible check itself happens multiple times per object in a
frame, as an object can be visible in the
main camera, but it can either be visible in shadows or via the
remote location rendering,
the so-called render to texture or RTT rendering.
the slide shadows pass is as we can have more than one shadow
pass, for example.
Those visibility checks or culling operations are performed in
all CPU cores with the batchworker system.
When an object is determined to be visible,
its rendering description is copied
into multiple temporary buffers.
Those temporary buffers are processed in the next render thread
frame to submit heavy objects local to the GPU.
In other words, object culling is already at a point where we
want to have to draw call processing.
Right now, we are in the first implementation phase.
We have to find our low level code threading blocks.
In short, our API work and on the process of moving our own
rendering code out of the render thread,
into the existing batchworker execution.
This is a very time consuming refactoring,
as we need to change every rendering feature in a very old
and logical base.
But we have it set up in a way to allow us to quickly move over
paths step by step.
After this operation is done,
we still copy state to a temporary buffer to be processed
by the render thread.
But the state which your copy is prepared in a way that we can
directly send to the GPU with minimal processing
on the render thread.
Doing this step will already give us performance benefits when we
have render thread bound,
as less code would be run on the render thread.
Additionally, this is a necessary stepping
stone for the next phase.
After we manage to move our own rendering code to multiple CPU
cores, we would start to utilize
the working API.
One major selling point of the newest generation of graphics APIs
like Vulkan is the possibility to generate
GPU comments on multiple threads.
That is something which wasn't possible before.
Most of the cores for the existing render are designed to catch
us to allow efficient parallel generation
of GPU comments, the data must be prepared in a certain way.
And that is what we are doing right now as part of porting scene
object rendering to Gen12 and moving our
render code to the batchworker system.
When this is done, we can implement a parallel worker backend and
remove the render thread.
After all that work is done,
our render should be able to process a very high number
of visible objects at lower impact on the frame time.
At the same time, it will make better use of the various CPU
resources and have less idle time when major
systems wait for each other.
Thank you for your time.
Darrell will now take over to cover
the work inside of the Gen12 renderer.
- [Darrell] Hi, my name is Darrell.
I'm a graphics programmer here at Cloud Imperium Games.
And I work closely with Vulkan and our graphics renderer to make
the game look as good as it does.
So what exactly is Vulkan?
Well, Vulkan is a modern graphics API that allows us as
developers to take greater control over what you as a
player sees and also affects performance greatly.
As you know, we already have a
few areas of bottlenecking on the CPU.
But the design of Vulkan allows us to alleviate these bottlenecks
by submitting work in parallel to the GPU.
So I would like to explain a bit more about the software stack
that's involved with our graphics in the engine.
So from the image, you can see that we have a renderer frontend,
a renderer backend, and as well
the graphics driver.
The Vulkan API generally sits at the renderer backend and allows
us a fine grained control over what we develop
and how we develop for it.
It also gives us flexibility for cross-platform,
including Windows and Linux,
and anything we may want to look at in the future.
The graphics driver stage is not managed by us,
but we look at that and we gather information and process any
crashes or any issues that might happen.
And then we can deal with those further down the line.
So you can see now how graphics APIs have changed over time.
We have, of course, in the more modern section where Vulkan is on
feature parity, essentially,
with other APIs such as DirectX 12 Ultimate.
You might also be wondering what our graphics API actually is,
and we see that as a tool that is used
for development that can interface between your graphics card as
a player and us as developers,
so that we can give you the latest and greatest.
Vulkan also has many features and extensions available to it that
we will be exploring in the future,
such as variable rate shading, boundless resources,
and GPU accelerated ray tracing.
To address any issues,
we also need to collect data from our players' hardware,
so that we can use that
to target specific features and extensions.
We're not aware of any large scale multiplayer games that
captures Vulkan data live in the exact same
way we do.
Capturing this data allows us to plan ahead for any optimizations
and then leverage that for the larger
majority of players, so we can bring you the latest and greatest.
On screen at the moment is a diagram that shows the distribution
available for Vulkan API versions
amongst currently active players.
This was captured in the last three months.
And as can be seen, there is 98% of players that are able to use
Vulkan fully in 1.2.
We did see a negligible amount of
1.0 and some that were unavailable.
We are actively looking into these cases,
especially those that cannot currently run Vulkan,
as it is seen as unavailable.
I'd like to take this opportunity to also say,
please update your drivers as we do see a few cases where this
can take you straight to the latest version.
I'd like to now explain a bit more about the render graph,
and how this works hand in hand with the Vulkan API
in order to improve our usage of Vulkan.
So a render graph can be seen as a collection of stages that
depend on each other.
This then determines the ordering, the scheduling,
and the flow of the actual frame.
This allows us also to then achieve any synchronization that we
need to during that frame.
It also helps us from a design point of view,
as we can look at the render graph and see where there may be
issues or potential optimizations.
The render graph also allows us to keep track of any state of
resources, and we can also validate against those
resources as well.
Now I would like to explain the render graph as a whole and give
you an overview of how it works between the
GPU and also how it works in terms of our frame.
So the frame is made up of a collection of passes and sometimes
we require a texture to switch states,
perhaps between read and write.
The graphics driver used to do this for us,
but now with modern APIs such as Vulkan,
we need to carry out this work ourselves.
What the render graph will then do is insert a pipeline barrier
into the render graph and pass this work
along to the GPU, and switch the state.
We can also cache the render graph and use any data we had from a
previous frame or perhaps similar resources
as an optimization.
I'd now like to talk a bit about the synchronization that happens
within the render graph and how
resources change state.
So the idea is that we want to switch the state of a resource as
early as possible.
We need to then also validate that
this resource is in the correct state.
So from the diagram,
we can see that the Depth Prepass writes to image A.
But then later on, we require to
read from image A in the G-Buffer.
So to this end, we insert a pipeline barrier for this transition
between the two passes.
These barriers are scheduled as GPU work,
following a strict ordering dependent on other work that may
have happened previously.
All the work for a single stage within the frame,
can be carried out in a single pipeline barrier.
I'd now like to talk about some of
the more nuanced areas of our Vulkan implementation,
and how this affects us as developers and you as players.
We use the DirectX compiler for our shaders.
And this can compile our HLSL code into SPIR-V.
DXC is a more modern compiler and has features that span both the
D3D set of APIs and Vulkan,
HLSL is a shader programming language that we, as developers,
can utilize and read in order to make work happen
on your GPU.
This HLSL is compiled down then into SPIR-V.
SPIR-V itself is not as readable as it is seen as an intermediate
language between HLSL and shader microcode.
SPIR-V gives us less driver overhead at compile time.
We can use this then to create our shader modules in Vulkan,
and optimize any dead code away.
DXC also gives us shader model 6.
Shader models have progressed over time in HLSL,
with shader model 6 now giving language support
for GPU parallelism, as well as variable rate shading,
amongst many other features.
We can see here now a diagram
of how our shader compilation happens.
It starts at this shader author level.
This is where one of our many developers will write a shader
using HLSL code, with some markup integrated
into that HLSL.
This HLSL is then passed to the preprocessor.
The preprocessor then removes any of the additional code that we
don't need and is dealt with accordingly,
whilst then outputting just HLSL code.
The HLSL code is then passed to DXC,
and DXC will change this into SPIR-V.
It's at this stage that we can carry out any additional compiler
optimizations and improve compile time
performance even more.
SPIR-V is then passed to the driver,
and the driver will then change this into microcode,
which will run specifically on your GPU hardware.
As I've previously mentioned,
there have been several Vulkan core versions over time.
Each one has added new features and extensions for us to reach
into and develop with.
Two of these, I'd like to explain a bit more in detail now,
that we would like to look into and develop
for in the future.
These are both bindless resourcing
and also fragment shading rate.
Fragment shading rate can be seen as the same as variable rate
shading, as you may have already seen.
What this does is works on groups of pixels instead of a singular
pixel at a time within the shader.
This allows less overhead in the frame.
Whilst at the same time,
allowing variable amounts of these groups,
including variable sizes,
in order to have less fidelity where may not be as important
to look at.
Bindless resourcing is where we can take large groups of
textures, for example,
and reach in and grab one of these inside the group.
This gets rid of the overhead of specifically binding two slots
within the shader.
This also extends to other resources, including buffers.
I'd now let's talk a bit about the
video RAM involved in your graphics card.
VRAM used to be managed by your graphics driver,
but with Vulkan and other modern APIs,
this is now managed by the developers.
There are existing solutions towards this.
However, we have decided to use our own implementation.
This is because we know exactly what resources are used upfront
and how much memory these resources use.
Using this, we can potentially beat what the graphics driver used
to be capable of.
As we know all of our resource life cycles,
we can take advantage of that.
From the diagram, we can see memory being paged in and out as it
used to be when it was managed
by the graphics driver.
On the other side, we can see memory being allocated and then
sub-allocated, and we can then offset into the
data from this sub-allocation.
The memory paging of years past,
could potentially result in a performance loss,
because this was seen as a more one size fits all.
We, of course, want to avoid any of that performance loss and the
memory cost involved by offsetting
into these larger buffers.
This can also help mitigate cache misses.
This then leaves us with all of the allocation freeing usage and
reusage of resources.
Thank you for joining me on this
talk on our recent Vulkan implementation.
I'm excited to be at the CitizenCon as it's my first.
And I'm excited to join you as the players,
and seeing how the rest of the talks pan out.
I'd now like to pass you back to Alistair Brown,
the Director of Graphics Engineering.
- Following on from what Darrell explained there,
with the explicit memory management in Vulkan,
we intend to expose some of this memory management to the player
through the advanced graphics options.
We're going to let you tweak the memory assigned to each system
so you can balance the preferred visuals and
performance for your experience.
For example, you may want to balance the output resolution of
your game to a higher resolution,
but then sacrifice some shadow quality.
Or maybe you want to use a lower internal resolution and align
upsampling to achieve higher texture quality.
These options will all be available to you and obviously only
capped by the hardware that you possess.
So to summarize, with our Gen12 renderer,
we're hoping to achieve something that is more efficient,
modular, flexible, and minimal obstruction to the hardware,
and uses modern graphics APIs like Vulkan.
So now you know a bit more about what Gen12 is.
I'll try and let you know where we're up to.
So we've done a huge amount of work already.
The architecture is all in place,
and we're using this hybrid rendering approach where we're
combining elements of the old and new render at the same time to
allow us to move piecemeal to the new system.
All of the post effects,
fog and lighting have been converted over and now all enabled
by default in 3.15.
And the fundamentals of scene and geometry rendering are all in
place, but they're still being worked on.
So our main focus is finishing that off at the moment,
and once that's done,
our focus will shift to the remaining major systems,
which are gas clouds, the render detection system,
and a few special cases for transparency.
After this, that's where we'll
start seeing the public milestones.
And the first of that will be 100% usage
of Gen12 and none of the hybrid approach.
This will still be at DirectX 11,
our current graphics API at this point.
MILESTONE 2 - GEN 12 WITH VULKAN
And then our second milestone will be the Vulkan API release.
That will be optional at first and then mandatory after we've
removed all the bugs.
And then the final milestone will be when we have formed the
optimizations for multithreaded.
So that will only happen once the Vulkan is in place and we can
finally look at the performance on the final
graphics API and optimize all of the remaining code.
So after Gen12, I just briefly wanted to touch on what comes next
for the graphics team.
So a lot of Gen12 has been focused on CPU performance.
So after Gen12, we really want to
start looking at the GPU performance.
UPSCALING [DLSS/FSR]
A SYNC COMPUTE VARIABLE RATE SHADING
The first few things we'd look at here are things that wouldn't
change the visuals, just improve the framework.
Things like DLSS, FSR, async compute, and variable rate shading.
After we've type of improved the GPU performance,
we want to start looking at some of the more
exciting visual features.
So then there is also mesh shaders and primitive shaders,
which is technology we can use
to generate procedural geometry.
And this type of thing could be really exciting for things like
the planets or asteroid fields where procedural
geometry is critical.
And then there's the big one, ray tracing.
We're very excited to get onto ray tracing,
especially to use it for lighting such as globe illumination,
but also reflections and shadow quality.
There's a lot of exciting areas for us to look into,
and we can't wait to get into it.
So that's it.
I just wanted to say a big thanks to everyone who's been involved
in this technology.
It's involved the graphics team, engine team,
VFX and planet tech,
all working together on a huge piece of code.
And we can't wait to get it into your hands as soon as possible.

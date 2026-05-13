# CitizenCon 2951: Gen 12 & The Multicore of Vulkan

**Video:** https://www.youtube.com/watch?v=SV9_chUpDgc
**Date:** 2021-10-09
**Duration:** 28:49

## Transcript

[00:02] CITIZENCON
[00:08] GEN 12 AND THE MULTICORE OF VULKAN
[00:14] - [Ali] Hi, I'm Ali Brown,
Director of Graphics Engineering here at Cloud Imperium Games.
[00:18] And today, we're going to be talking about Gen12,
our new multicore renderer.
[00:22] In addition to myself,
we'll also be hearing from Christopher Bolte,
[00:26] our Core Engine Architect, and Darrell Barnes,
our Graphics Programmer.
[00:29] And today we're going to be talking about the need for a new
renderer, the architecture, and how it's built,
[00:34] Vulkan, which is the backend API we use,
and the progress of how we're doing so far,
[00:40] and then what's next for the graphics team.
[00:48] So to help understand the need for the Gen12 renderer,
I first want to take a look at the high level structure
[00:53] of our existing renderer to try and understand how the new
renderer will differ.
[00:57] So here you see a diagram, very simplified,
of our overall architecture.
[01:01] And on the left hand side, you can see the 3D engine,
and that is what manages all the visible objects
[01:06] in the scene, for example, their position, their size.
[01:09] And ultimately is responsible for the culling of them objects and
deciding what should be send
[01:13] through on screen each frame to the renderer.
[01:15] And obviously, the job of renderer is just to feed out the image
at the end of the frame.
[01:19] And to do this, to manage this process,
all of these objects have to pass through the single
[01:24] universal pipe, this conduit of information in the center.
[01:28] And as a result of that,
every object has to come through a certain amount of settings or
[01:34] paperwork and baggage to describe how they should be configured
and are represented on the diagram
[01:39] by these switches.
[01:40] So this type of design, it initially seems very flexible,
having this universal pipe,
[01:46] you can very easily toggle certain settings and get a very
different rendered result for each object.
[01:50] But the reality is actually the objects and the renderer both end
up extremely complicated because they have
[01:56] to decipher this list of instructions and distribute these
objects through the various pipelines and stages
[02:01] inside the renderer.
[02:02] And this has to happen for every object, every frame.
[02:05] And this deciphering ends up resulting
in quite a significant performance problem.
[02:09] And it also makes the renderer quite inflexible because it's
quite complicated and hard
[02:13] to change the architecture.
[02:16] So how does our Gen12 renderer differ from this?
[02:19] Well, the methodology we're taking on is to try and make
everything as explicit as possible,
[02:23] and we're trying to minimize all these redundant connections,
and switches, and configuration options,
[02:28] and try and get these much more streamlined.
[02:30] So to do this, each object in the world will directly communicate
with the render pass responsible for drawing
[02:36] that object at startup time.
[02:38] So when the object is first spawned,
it will communicate directly with the pass responsible for it and
[02:43] preconfigure everything possible at that stage.
[02:45] Now this has a bunch of benefits.
[02:47] So by speaking directly to the thing that's rendering it,
it doesn't have to worry about all the
[02:52] other rendering systems.
[02:53] So you end up with a much more limited set of parameters,
both on the object and on the rendering pass.
[02:58] And all of a sudden, we do have a very relevant for the task,
which makes things much less complicated and it's
[03:04] easier to optimize, more flexible and more modular.
[03:07] So each of these passes then goes on to generate low level
commands that are actually going to map directly
[03:12] to our graphics API,
which is the piece of software that sits just
[03:15] above your GPU driver.
[03:17] And this backend collects and executes all of these instructions.
[03:22] And because there is no high level knowledge of the rendering in
this backend, it is just simply
[03:26] issuing commands, it ends up very simple and streamlined and much
simpler than the equivalent
[03:31] on our old renderer.
[03:34] So the benefit of this simple code is much easier to
multi-thread, which is to say to run on multiple CPU cores
[03:39] in parallel, something that is crucial for modern CPUs.
[03:42] So multi-threading is a complex and often misunderstood paradigm,
so I thought it's worth us talking briefly
[03:47] about how we optimize multi-threaded code.
[03:50] And for that, I'm going to use an analogy of building a house,
which is another complex engineering
[03:55] task with dependencies.
[03:57] So here you can see a list of tasks for a builder, a joiner,
and an electrician, or one after another,
[04:02] and those dependencies between them shown in red.
[04:04] And in this example,
the house is equivalent to rendering our frame.
[04:08] Each tradesman might be a different system.
[04:10] And then the capacity of three people in our house is equivalent
to the three CPU cores we might have
[04:14] on our system.
[04:16] And the occupancy, as in the average number of people in the
house, is effectively the same as the CPU and GPU
[04:21] utilization numbers you might see in task manager.
[04:24] So in this example, we can see the project takes 11 units of time
and is on average 60% full for this house.
[04:31] Now, this occupancy of 60% isn't the direct reason that it takes
11 years of time, and that is in fact
[04:37] down to the critical path of work where the builder is blocking
the joiner and the joiner is then
[04:41] blocking the electrician.
[04:43] So the obvious answer here is that you need another builder or
multiple builders to work on this in parallel
[04:47] to unblock the joiner and so on.
[04:49] You can keep on parallelizing this work
to try and reduce the critical path.
[04:53] And that is our focus when we're optimizing multi-threaded code.
[04:57] However, not all tasks are trivial to run in parallel,
and sometimes it's impossible to actually run
[05:02] them in parallel.
[05:03] So you'll end up with these
unallocated capacity space on these bubbles.
[05:07] And in this case, if we imagine the electrician was in fact our
GPU, then the fact that it takes longer is just
[05:14] going to result in a CPU bubble, which is unavoidable.
[05:17] And this type of thing happens very frequently if you have a
configuration, for example,
[05:20] a very fast GPU and a very slow CPU,
then unavoidably one of them systems is going to have a bubble.
[05:26] So we can fill these bubbles with non-critical work like
streaming meshes or textures,
[05:30] and this can help fill the unused CPU capacity.
[05:34] And this can be useful to try and get some extra work done,
but it ultimately is not going to improve the
[05:38] performance of the frame.
[05:40] And the point I really wanted to drive home was that the
CPU and GPU utilization,
[05:43] which are often looked at as key indicators of performance,
aren't actually the direct thing we should
[05:47] be looking at.
[05:48] They are useful statistics,
but ultimately the frame time is the only thing that matters and
[05:52] the critical path that resulted in that frame time.
[05:55] So as we roll out Gen12,
we'll hopefully put in some new statistics in there that the
[05:59] players can see, to help them understand the performance and
understand these bubbles.
[06:02] And that should hopefully give a little bit clearer insight into
the performance of the renderer.
[06:06] So how are we going to
actually achieve this parallelism in practice?
[06:09] That's going to come down to two major changes.
[06:11] One is the architectural changes,
which Christopher will talk us through.
[06:14] And the second is the Vulkan graphics API,
that Darrel is going to talk us through.
[06:18] - [Christopher] Welcome to the next section
of our Gen12 renderer presentation.
[06:22] My name is Christopher Bolte,
Core Engine Architect here at Cloud Imperium Games.
[06:27] And I would like to spend the next few minutes introducing the
high level architecture of our
[06:33] in-development Gen12 renderer.
[06:41] For this section, I will focus on the rendering of object
instances in the world.
[06:45] For example, chairs, worlds, characters, or spaceships.
[06:50] This part of the rendering pipeline is called scene object
rendering, and has the largest impact
[06:54] on runtime performance.
[06:58] There is a lot of work happening on the architecture to manage
operations which work when all pixels
[07:03] on the screen, so-called post effects, but I won't cover those.
[07:08] The current slide shows our existing renderer core set up.
[07:11] We have a main thread, which has all game simulation,
as well as figuring out what objects we should trawl
[07:17] for every frame.
[07:20] And we have a render thread,
which takes all of those objects and translates the description
[07:24] into GPU comments to render them on the screen.
[07:28] The system is set up to [inaudible] the data.
[07:30] In other words, the renderers are just working on data from the
previous frame while the main thread produces
[07:36] data for the next frame.
[07:38] Such a set up allows easy performance improvements in some
situation, but it has two issues on modern hardware.
[07:45] First, the rendering code won't scale scan of a multiple CPU
cores, which can result in a
[07:51] bottleneck during execution.
[07:52] In other words, every visible object adds a certain cost,
the more objects you render, the higher the cost.
[08:00] And as a single CPU processes cost, no matter how we optimize,
at some object count,
[08:05] we will run into performance issues.
[08:08] Second, since the main thread and the render thread must
synchronize with V-Sync,
[08:13] we can end up with very bad load balancing.
[08:16] As shown in the slide,
if the main thread takes longer than render thread,
[08:19] the render thread has to be idle and wait.
[08:22] And vice versa, if the render thread takes longer,
then the main thread has to it wait.
[08:27] Doing such wait time, the CPU is underutilized,
especially if we're waiting for the single core render thread.
[08:34] One goal for the Gen12 renderer is to remove this kind of
bottleneck and instead add textures to the system
[08:39] without those waits,
and allowing every operation to utilize all CPU cores.
[08:45] When we utilize all CPU cores,
you would still have an object limit as every possible object
[08:50] must be processed, but we can process a high object.
[08:54] And at the same time,
reduce the latency on the main thread until all
[08:58] objects are processed.
[09:00] Hence we would be making better use of modern multicore CPUs.
[09:03] Let's take a look at some details.
[09:07] For example, please keep in mind that the size of the sections
are chosen to visualize the cost.
[09:12] Relation and size doesn't necessarily translate to the same
relation in CPU cost.
[09:18] When looking at the cost of operations done by the render thread,
a pattern quickly emerges.
[09:23] You pay a similar cost for every rendered object.
[09:25] This is called a draw call.
[09:28] why we draw call?
[09:29] Some time that is spent inside our own window code,
and some part of it is spent in the CPU driver code.
[09:35] In the next slide, we will cover all code process,
as well as the next steps to move the 12 core cost
[09:41] out of the render thread, onto multiple CPU cores.
[09:45] We already have a level of parallelization on the main thread,
used to find out what objects are visible.
[09:52] They have used our batchworker job system.
[09:55] This is a parallelization system to execute the same code on a
different object instance of all CPU cores.
[10:02] To give an example, checking foreign objects can be spent over 10
threads, but every thread will
[10:08] process 40 object.
[10:11] By doing that, latency on the main thread until all foreign
objects are done is divided by the number
[10:16] of threads, reducing said latency to 40 objects only,
roughly at least.
[10:20] At the execute system,
several low level factors affect execution,
[10:26] making the statement not fully true,
but covering those would be out of scope for this presentation.
[10:33] The visible check itself happens multiple times per object in a
frame, as an object can be visible in the
[10:39] main camera, but it can either be visible in shadows or via the
remote location rendering,
[10:45] the so-called render to texture or RTT rendering.
[10:49] the slide shadows pass is as we can have more than one shadow
pass, for example.
[10:56] Those visibility checks or culling operations are performed in
all CPU cores with the batchworker system.
[11:02] When an object is determined to be visible,
its rendering description is copied
[11:07] into multiple temporary buffers.
[11:10] Those temporary buffers are processed in the next render thread
frame to submit heavy objects local to the GPU.
[11:17] In other words, object culling is already at a point where we
want to have to draw call processing.
[11:23] Right now, we are in the first implementation phase.
[11:27] We have to find our low level code threading blocks.
[11:30] In short, our API work and on the process of moving our own
rendering code out of the render thread,
[11:35] into the existing batchworker execution.
[11:38] This is a very time consuming refactoring,
as we need to change every rendering feature in a very old
[11:43] and logical base.
[11:45] But we have it set up in a way to allow us to quickly move over
paths step by step.
[11:50] After this operation is done,
we still copy state to a temporary buffer to be processed
[11:57] by the render thread.
[11:59] But the state which your copy is prepared in a way that we can
directly send to the GPU with minimal processing
[12:05] on the render thread.
[12:07] Doing this step will already give us performance benefits when we
have render thread bound,
[12:12] as less code would be run on the render thread.
[12:16] Additionally, this is a necessary stepping
stone for the next phase.
[12:21] After we manage to move our own rendering code to multiple CPU
cores, we would start to utilize
[12:26] the working API.
[12:27] One major selling point of the newest generation of graphics APIs
like Vulkan is the possibility to generate
[12:34] GPU comments on multiple threads.
[12:37] That is something which wasn't possible before.
[12:40] Most of the cores for the existing render are designed to catch
us to allow efficient parallel generation
[12:46] of GPU comments, the data must be prepared in a certain way.
[12:50] And that is what we are doing right now as part of porting scene
object rendering to Gen12 and moving our
[12:57] render code to the batchworker system.
[13:00] When this is done, we can implement a parallel worker backend and
remove the render thread.
[13:06] After all that work is done,
our render should be able to process a very high number
[13:11] of visible objects at lower impact on the frame time.
[13:14] At the same time, it will make better use of the various CPU
resources and have less idle time when major
[13:21] systems wait for each other.
[13:23] Thank you for your time.
[13:24] Darrell will now take over to cover
the work inside of the Gen12 renderer.
[13:28] - [Darrell] Hi, my name is Darrell.
[13:31] I'm a graphics programmer here at Cloud Imperium Games.
[13:34] And I work closely with Vulkan and our graphics renderer to make
the game look as good as it does.
[13:49] So what exactly is Vulkan?
[13:53] Well, Vulkan is a modern graphics API that allows us as
developers to take greater control over what you as a
[14:01] player sees and also affects performance greatly.
[14:06] As you know, we already have a
few areas of bottlenecking on the CPU.
[14:12] But the design of Vulkan allows us to alleviate these bottlenecks
by submitting work in parallel to the GPU.
[14:21] So I would like to explain a bit more about the software stack
that's involved with our graphics in the engine.
[14:30] So from the image, you can see that we have a renderer frontend,
a renderer backend, and as well
[14:37] the graphics driver.
[14:38] The Vulkan API generally sits at the renderer backend and allows
us a fine grained control over what we develop
[14:49] and how we develop for it.
[14:51] It also gives us flexibility for cross-platform,
including Windows and Linux,
[14:58] and anything we may want to look at in the future.
[15:01] The graphics driver stage is not managed by us,
but we look at that and we gather information and process any
[15:10] crashes or any issues that might happen.
[15:14] And then we can deal with those further down the line.
[15:17] So you can see now how graphics APIs have changed over time.
[15:21] We have, of course, in the more modern section where Vulkan is on
feature parity, essentially,
[15:28] with other APIs such as DirectX 12 Ultimate.
[15:34] You might also be wondering what our graphics API actually is,
and we see that as a tool that is used
[15:41] for development that can interface between your graphics card as
a player and us as developers,
[15:48] so that we can give you the latest and greatest.
[15:51] Vulkan also has many features and extensions available to it that
we will be exploring in the future,
[15:58] such as variable rate shading, boundless resources,
and GPU accelerated ray tracing.
[16:06] To address any issues,
we also need to collect data from our players' hardware,
[16:13] so that we can use that
to target specific features and extensions.
[16:18] We're not aware of any large scale multiplayer games that
captures Vulkan data live in the exact same
[16:25] way we do.
[16:27] Capturing this data allows us to plan ahead for any optimizations
and then leverage that for the larger
[16:34] majority of players, so we can bring you the latest and greatest.
[16:40] On screen at the moment is a diagram that shows the distribution
available for Vulkan API versions
[16:47] amongst currently active players.
[16:50] This was captured in the last three months.
[16:52] And as can be seen, there is 98% of players that are able to use
Vulkan fully in 1.2.
[17:00] We did see a negligible amount of
1.0 and some that were unavailable.
[17:07] We are actively looking into these cases,
especially those that cannot currently run Vulkan,
[17:13] as it is seen as unavailable.
[17:17] I'd like to take this opportunity to also say,
please update your drivers as we do see a few cases where this
[17:24] can take you straight to the latest version.
[17:26] I'd like to now explain a bit more about the render graph,
and how this works hand in hand with the Vulkan API
[17:34] in order to improve our usage of Vulkan.
[17:40] So a render graph can be seen as a collection of stages that
depend on each other.
[17:48] This then determines the ordering, the scheduling,
and the flow of the actual frame.
[17:55] This allows us also to then achieve any synchronization that we
need to during that frame.
[18:03] It also helps us from a design point of view,
as we can look at the render graph and see where there may be
[18:09] issues or potential optimizations.
[18:12] The render graph also allows us to keep track of any state of
resources, and we can also validate against those
[18:22] resources as well.
[18:23] Now I would like to explain the render graph as a whole and give
you an overview of how it works between the
[18:33] GPU and also how it works in terms of our frame.
[18:38] So the frame is made up of a collection of passes and sometimes
we require a texture to switch states,
[18:46] perhaps between read and write.
[18:49] The graphics driver used to do this for us,
but now with modern APIs such as Vulkan,
[18:54] we need to carry out this work ourselves.
[18:57] What the render graph will then do is insert a pipeline barrier
into the render graph and pass this work
[19:06] along to the GPU, and switch the state.
[19:10] We can also cache the render graph and use any data we had from a
previous frame or perhaps similar resources
[19:20] as an optimization.
[19:22] I'd now like to talk a bit about the synchronization that happens
within the render graph and how
[19:28] resources change state.
[19:30] So the idea is that we want to switch the state of a resource as
early as possible.
[19:36] We need to then also validate that
this resource is in the correct state.
[19:42] So from the diagram,
we can see that the Depth Prepass writes to image A.
[19:49] But then later on, we require to
read from image A in the G-Buffer.
[19:54] So to this end, we insert a pipeline barrier for this transition
between the two passes.
[20:03] These barriers are scheduled as GPU work,
following a strict ordering dependent on other work that may
[20:11] have happened previously.
[20:13] All the work for a single stage within the frame,
can be carried out in a single pipeline barrier.
[20:26] I'd now like to talk about some of
the more nuanced areas of our Vulkan implementation,
[20:32] and how this affects us as developers and you as players.
[20:36] We use the DirectX compiler for our shaders.
[20:40] And this can compile our HLSL code into SPIR-V.
[20:45] DXC is a more modern compiler and has features that span both the
D3D set of APIs and Vulkan,
[20:56] HLSL is a shader programming language that we, as developers,
can utilize and read in order to make work happen
[21:05] on your GPU.
[21:08] This HLSL is compiled down then into SPIR-V.
[21:13] SPIR-V itself is not as readable as it is seen as an intermediate
language between HLSL and shader microcode.
[21:23] SPIR-V gives us less driver overhead at compile time.
[21:28] We can use this then to create our shader modules in Vulkan,
and optimize any dead code away.
[21:38] DXC also gives us shader model 6.
[21:41] Shader models have progressed over time in HLSL,
with shader model 6 now giving language support
[21:50] for GPU parallelism, as well as variable rate shading,
amongst many other features.
[21:58] We can see here now a diagram
of how our shader compilation happens.
[22:05] It starts at this shader author level.
[22:08] This is where one of our many developers will write a shader
using HLSL code, with some markup integrated
[22:17] into that HLSL.
[22:19] This HLSL is then passed to the preprocessor.
[22:24] The preprocessor then removes any of the additional code that we
don't need and is dealt with accordingly,
[22:33] whilst then outputting just HLSL code.
[22:37] The HLSL code is then passed to DXC,
and DXC will change this into SPIR-V.
[22:46] It's at this stage that we can carry out any additional compiler
optimizations and improve compile time
[22:54] performance even more.
[22:56] SPIR-V is then passed to the driver,
and the driver will then change this into microcode,
[23:05] which will run specifically on your GPU hardware.
[23:09] As I've previously mentioned,
there have been several Vulkan core versions over time.
[23:16] Each one has added new features and extensions for us to reach
into and develop with.
[23:24] Two of these, I'd like to explain a bit more in detail now,
that we would like to look into and develop
[23:31] for in the future.
[23:33] These are both bindless resourcing
and also fragment shading rate.
[23:40] Fragment shading rate can be seen as the same as variable rate
shading, as you may have already seen.
[23:47] What this does is works on groups of pixels instead of a singular
pixel at a time within the shader.
[23:57] This allows less overhead in the frame.
[24:01] Whilst at the same time,
allowing variable amounts of these groups,
[24:06] including variable sizes,
in order to have less fidelity where may not be as important
[24:13] to look at.
[24:14] Bindless resourcing is where we can take large groups of
textures, for example,
[24:22] and reach in and grab one of these inside the group.
[24:27] This gets rid of the overhead of specifically binding two slots
within the shader.
[24:34] This also extends to other resources, including buffers.
[24:38] I'd now let's talk a bit about the
video RAM involved in your graphics card.
[24:45] VRAM used to be managed by your graphics driver,
but with Vulkan and other modern APIs,
[24:54] this is now managed by the developers.
[24:58] There are existing solutions towards this.
[25:01] However, we have decided to use our own implementation.
[25:04] This is because we know exactly what resources are used upfront
and how much memory these resources use.
[25:12] Using this, we can potentially beat what the graphics driver used
to be capable of.
[25:19] As we know all of our resource life cycles,
we can take advantage of that.
[25:25] From the diagram, we can see memory being paged in and out as it
used to be when it was managed
[25:32] by the graphics driver.
[25:35] On the other side, we can see memory being allocated and then
sub-allocated, and we can then offset into the
[25:44] data from this sub-allocation.
[25:47] The memory paging of years past,
could potentially result in a performance loss,
[25:53] because this was seen as a more one size fits all.
[25:57] We, of course, want to avoid any of that performance loss and the
memory cost involved by offsetting
[26:04] into these larger buffers.
[26:07] This can also help mitigate cache misses.
[26:10] This then leaves us with all of the allocation freeing usage and
reusage of resources.
[26:17] Thank you for joining me on this
talk on our recent Vulkan implementation.
[26:22] I'm excited to be at the CitizenCon as it's my first.
[26:26] And I'm excited to join you as the players,
and seeing how the rest of the talks pan out.
[26:34] I'd now like to pass you back to Alistair Brown,
the Director of Graphics Engineering.
[26:40] - Following on from what Darrell explained there,
with the explicit memory management in Vulkan,
[26:44] we intend to expose some of this memory management to the player
through the advanced graphics options.
[26:49] We're going to let you tweak the memory assigned to each system
so you can balance the preferred visuals and
[26:52] performance for your experience.
[26:54] For example, you may want to balance the output resolution of
your game to a higher resolution,
[26:59] but then sacrifice some shadow quality.
[27:01] Or maybe you want to use a lower internal resolution and align
upsampling to achieve higher texture quality.
[27:07] These options will all be available to you and obviously only
capped by the hardware that you possess.
[27:13] So to summarize, with our Gen12 renderer,
we're hoping to achieve something that is more efficient,
[27:17] modular, flexible, and minimal obstruction to the hardware,
and uses modern graphics APIs like Vulkan.
[27:22] So now you know a bit more about what Gen12 is.
[27:25] I'll try and let you know where we're up to.
[27:27] So we've done a huge amount of work already.
[27:30] The architecture is all in place,
and we're using this hybrid rendering approach where we're
[27:33] combining elements of the old and new render at the same time to
allow us to move piecemeal to the new system.
[27:39] All of the post effects,
fog and lighting have been converted over and now all enabled
[27:42] by default in 3.15.
[27:43] And the fundamentals of scene and geometry rendering are all in
place, but they're still being worked on.
[27:50] So our main focus is finishing that off at the moment,
and once that's done,
[27:53] our focus will shift to the remaining major systems,
which are gas clouds, the render detection system,
[27:58] and a few special cases for transparency.
[28:05] After this, that's where we'll
start seeing the public milestones.
[28:09] And the first of that will be 100% usage
of Gen12 and none of the hybrid approach.
[28:15] This will still be at DirectX 11,
our current graphics API at this point.
[28:18] MILESTONE 2 - GEN 12 WITH VULKAN
[28:24] And then our second milestone will be the Vulkan API release.
[28:27] That will be optional at first and then mandatory after we've
removed all the bugs.
[28:35] And then the final milestone will be when we have formed the
optimizations for multithreaded.
[28:42] So that will only happen once the Vulkan is in place and we can
finally look at the performance on the final
[28:47] graphics API and optimize all of the remaining code.
[28:51] So after Gen12, I just briefly wanted to touch on what comes next
for the graphics team.
[28:55] So a lot of Gen12 has been focused on CPU performance.
[28:58] So after Gen12, we really want to
start looking at the GPU performance.
[29:01] UPSCALING [DLSS/FSR]
A SYNC COMPUTE VARIABLE RATE SHADING
[29:07] The first few things we'd look at here are things that wouldn't
change the visuals, just improve the framework.
[29:11] Things like DLSS, FSR, async compute, and variable rate shading.
[29:16] After we've type of improved the GPU performance,
we want to start looking at some of the more
[29:20] exciting visual features.
[29:22] So then there is also mesh shaders and primitive shaders,
which is technology we can use
[29:25] to generate procedural geometry.
[29:26] And this type of thing could be really exciting for things like
the planets or asteroid fields where procedural
[29:32] geometry is critical.
[29:33] And then there's the big one, ray tracing.
[29:35] We're very excited to get onto ray tracing,
especially to use it for lighting such as globe illumination,
[29:40] but also reflections and shadow quality.
[29:42] There's a lot of exciting areas for us to look into,
and we can't wait to get into it.
[29:45] So that's it.
[29:46] I just wanted to say a big thanks to everyone who's been involved
in this technology.
[29:50] It's involved the graphics team, engine team,
VFX and planet tech,
[29:53] all working together on a huge piece of code.
[29:56] And we can't wait to get it into your hands as soon as possible.

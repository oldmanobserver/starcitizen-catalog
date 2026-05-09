# CitizenCon 2951: Crafting Worlds - Planetary Tools & Tech

**Video:** https://www.youtube.com/watch?v=fQkN1YdT6SI
**Date:** 2021-10-09
**Duration:** 11:41

## Transcript

CITIZENCON
CRAFTING WORLDS:
PLANETARY TOOLS AND TECH
- [Marco] Hello.
I am Marco Corbetta, the VP of technology, and we're
going to talk about some new planet features today.
First, Anis is going to give us an introduction about
Gen 12 and what that means for planets.
Then Will is going to talk about dynamic foliage,
shaders, plants and seasons,
and he is going to show us river demo as well.
Then Marc and Morgan are going to talk about Rastar,
our new base building tool.
So let's get started with Anis.
- [Anis] Hi, my name is Anis and I am the senior engine
programmer here in Cloud Imperium Games.
My main responsibility is the development of Star
Citizen Planetary Technology with a focus
on planetary elements rendering.
GEN12 PLANET RENDERING
While there is another talk dedicated to Gen 12,
I wanted to touch a little bit on how it applies
specifically to Planet Tech.
It's our rendering abstraction layer API.
It aims to provide next generation features for our 3D
engine by reducing some CPU latency and rendering
common submission over it,
which is a significant bottleneck for our game.
Part of our recent efforts have been put to modernize
our old school renderer to shape it in a conformance
modern API rendering style to be suitable for the
newest low overrided APIs such as Vulkan.
Today, I'm going to talk a bit about Gen 12 benefits
for planetary rendering features.
As I said, Gen 12 key aspect is performance.
The way this is achieved is to make common submission
easier for multi-core CPUs.
All giants rendering APIs rely on a single threads in
which you have the view of a single time line where GPU
comments are guaranteed to be executed in order.
The driver does the rest and there's a responsible to
handle memory and synchronization.
Gen 12 can scale much better thanks to the ability to
dispatch and parallel comments that are submitted
from different execution units.
The memory is directly handled by the renderer,
and synchronization primitives are used to make sure
comments dispatched in the right order by considering
cross dependencies between resources.
Since the rendering driver is thinner and more
responsibility is given to game developers,
this opened a new opportunity to forge a new render for
specific needs a game like Star Citizen might have.
Our planetary
technology introduced a new set
of engineering challenges,
so we need to be very creative due to the fact that
most game industry standards techniques are not working
very well for Star Citizen.
Thanks to Gen 12 optimizations,
we can push our planetary rendering computational
budgets to perform more GPU operations.
This translates to better visuals,
more details and less compromises.
As a member of the Planet Tech team,
I will show you some improvements we've recently made
for our planetary terrain rendering pipeline.
We made two important improvements.
The first is a ground skill level,
and the second is for large scale proposals.
Both technique use dynamic tessellation.
Dynamic tessellation is a GPU feature which allows
to increase the triangle count on the fly before the
resolution stage occurs.
The new triangle are then manipulated to shape the
terrain high frequency details and
improve surface visuals.
This new technique is replacing our parallax relief
mapping, which is a per pixel technique,
and instead of creating geometric details like
tessellation does, it works by simulating details
after the rasterization stage with a cheaper approach,
by tracing raised from camera to surface.
The second improvement targets planets
visuals at long distance.
This technique is also tessellation-driven,
and it aims to improve terrain/ocean intersection where
CPU geometric representation lacks for enough control
points in the geometry.
We reached the conclusion.
Thank you very much and enjoy the rest of CitizenCon.
- [Will] Thanks Anis,
I'm Will Hain and I work on the Planet Tech Team.
DYNAMIC ECOSYSTEMS AND MORE
Over the past few months,
I've been working on a number of improvements to our
ecosystem spawning system,
which is the system that spawns all of the objects
on all of the planets.
We've been doing this to give our artists more power
and flexibility, as well as improved performance
for everyone playing the game.
The first thing that I did was a complete overhaul of
how we spawn the objects.
We used to spawn them on each terrain
patch as that terrain patch was created.
But this meant that we were limited in our control in
that we could only spawn new objects when we were
creating new terrain patches.
The new system has an entirely separate grid division
of the planet, and this means that we have a lot more
control over the resolution of our objects when they
spawn and how we spread it across multiple frames,
which means that we get
better performance in the client.
This also means that we were able to add a setting for
the clients to control how far away each
object preset respond.
The next improvement we started to look at is making
the ecosystems react to their situation
and surroundings more.
For example, we can now introduce scaling biases for
temperature and humidity so that certain objects when
in higher humidity can be bigger or smaller and the
same for temperature.
A new system is being designed for animal and entity
spawning using tokens,
which means that we can specialize our object presets
better for different planets.
For example, we have something similar for rocks.
That means if you put a rock on a snowy planet,
it goes snowy.
And if you put it on a sandy planet, it looks sandy.
Now we can do something similar for animals.
We can specify a small herbivore, for example,
and in the snow, this might spawn some sort of Arctic
rabbit, and in the jungle
this might spawn something completely different.
We've also begun to experiment with a new foliage
shader that takes into account the health of the plant
based on its surroundings again and the current season
of the planet.
Though what you're seeing on the
screen is far from final.
In the same vein as that,
we've been working towards having more dynamically
placed biomes around natural areas,
we've created dressing object presets that are
automatically placed around coasts and of course,
my favorite thing to work on rivers.
In the most recent couple of months,
I've been doing more work on the rivers to prepare them
to be closer to what we would consider shapeable so
that we can get them out to the players.
This is included finer control of both the shape of our
rivers as they flow from springs to larger rivers,
but also the objects that spawn around our rivers.
So we have control over what spawns in the water,
what is spawning on the banks of the river,
and what is spawning further away and blending it into
the biome that it flows through.
The other thing that we've added as well is a wet edge
around rocks, both in the sea and in rivers,
which reflects the fact that they were probably wet
from the river.
And so they look a lot more shiny.
We've also been working on introducing basins to the
river system so that we can have more natural pauses
in our river systems and other bodies of water than
just the oceans.
Another major change was to stop using the planet's
ocean mesh and just displacing it up to the river and
instead building specific river mesh
sections around the river.
This means that we can have far more control over the
shape of water, and we can use our own specific river
material and shader,
meaning that we can specify colors,
flow and other properties of the river water separately
to the ocean of that planet.
Rivers aren't done yet,
but they're closer to being used in production
than ever before.
The next steps include a planet populating tool,
so one click to create an entire river system
across the planet and maybe working on
a little bit of lava flow.
But we'll have to see when that comes.
Next is Marc and Morgan.
Thanks, everyone.
- [Morgan] Hi, I'm Morgan.
I'm tools programmer from Planet Tech Team,
and now I'm going to talk about Rastar.
RASTAR: A BASE BUILDING TOOL
What is a Rastar?
Rastar is our work in progress tool for planetary
locations, creation and addition.
The name stands for a mix of RTS, the game giant,
which takes the inspiration from its map editor system
and star as well...you know.
Its goals are to replace our previous
placement system based on prefabs to a better object
container oriented solution.
As our previous system was based on prefabs,
any changes to location was source of issue as it needs
to reenable whole set of data to have things like
missions or shops to work again.
With the new system, any change will be easily
manageable and wont require
us to redo the work when a change is made.
Plus, as now object container oriented, it can be
used for outpost case or even derelicts and more.
It works as a modular system where applications
will in fact be made of small elements that will be
placed just like you do in City
Builder RTS editor.
And in a matter of minutes, we now have a new location
where we can now create a bunch of cool gameplay.
Let's go to Marc who will tell
us about the connector system.
- [Marc] Thanks, Morgan.
So I'm Marc, I'm also a tools developer
for the Planet Tech Team.
Do you know what's better than placing
everything by hand?
Not placing everything by hand.
In order to do that
we use what we call connectors.
Basically, artists create small parts of homesteads
that we can then smack together.
Every part is modular so we can interchange multiple
ones in order to have procedural homesteads.
Every change is very simple.
We can change the whole inside of a homestead or only a
building that is a part of the homestead.
And that way, it's very easy to make a lot
of different buildings.
Once something is connected,
it's considered a part of the whole.
So it moves as one.
It can be deleted and changed
and it's basically all from connectors.
So back to you Morgan.
And last but not least, some of you might have noticed
that the UI is not looking quite like an engine UI.
That's normal, as it's based on our in-game tech
building blocks, and that's for a reason.
Well, today it's being used by our developers.
One day, when it's ready and been thoroughly
tested internally, we'll make a version
available to you, the player.
And Rastar is what will make you a pioneer.
Thank you for watching.
We are very excited about the tech we've shown you today,
and we hope you enjoy the rest of Digital CitizenCon.
- So that was a small sample of
what our team is working on.
I hope you have enjoyed it.
Enjoy the rest of CitizenCon
and thanks for watching

# CitizenCon 2951: Crafting Worlds - Planetary Tools & Tech

**Video:** https://www.youtube.com/watch?v=fQkN1YdT6SI
**Date:** 2021-10-09
**Duration:** 11:41

## Transcript

[00:03] CITIZENCON
[00:08] CRAFTING WORLDS:
PLANETARY TOOLS AND TECH
[00:13] - [Marco] Hello.
[00:14] I am Marco Corbetta, the VP of technology, and we're
going to talk about some new planet features today.
[00:21] First, Anis is going to give us an introduction about
Gen 12 and what that means for planets.
[00:28] Then Will is going to talk about dynamic foliage,
shaders, plants and seasons,
[00:35] and he is going to show us river demo as well.
[00:38] Then Marc and Morgan are going to talk about Rastar,
our new base building tool.
[00:44] So let's get started with Anis.
[00:48] - [Anis] Hi, my name is Anis and I am the senior engine
programmer here in Cloud Imperium Games.
[00:54] My main responsibility is the development of Star
Citizen Planetary Technology with a focus
[00:58] on planetary elements rendering.
[01:01] GEN12 PLANET RENDERING
[01:07] While there is another talk dedicated to Gen 12,
I wanted to touch a little bit on how it applies
[01:12] specifically to Planet Tech.
[01:14] It's our rendering abstraction layer API.
[01:17] It aims to provide next generation features for our 3D
engine by reducing some CPU latency and rendering
[01:24] common submission over it,
which is a significant bottleneck for our game.
[01:30] Part of our recent efforts have been put to modernize
our old school renderer to shape it in a conformance
[01:37] modern API rendering style to be suitable for the
newest low overrided APIs such as Vulkan.
[01:44] Today, I'm going to talk a bit about Gen 12 benefits
for planetary rendering features.
[01:50] As I said, Gen 12 key aspect is performance.
[01:54] The way this is achieved is to make common submission
easier for multi-core CPUs.
[01:59] All giants rendering APIs rely on a single threads in
which you have the view of a single time line where GPU
[02:06] comments are guaranteed to be executed in order.
[02:09] The driver does the rest and there's a responsible to
handle memory and synchronization.
[02:14] Gen 12 can scale much better thanks to the ability to
dispatch and parallel comments that are submitted
[02:19] from different execution units.
[02:22] The memory is directly handled by the renderer,
and synchronization primitives are used to make sure
[02:27] comments dispatched in the right order by considering
cross dependencies between resources.
[02:34] Since the rendering driver is thinner and more
responsibility is given to game developers,
[02:40] this opened a new opportunity to forge a new render for
specific needs a game like Star Citizen might have.
[02:47] Our planetary
technology introduced a new set
[02:51] of engineering challenges,
so we need to be very creative due to the fact that
[02:56] most game industry standards techniques are not working
very well for Star Citizen.
[03:01] Thanks to Gen 12 optimizations,
we can push our planetary rendering computational
[03:06] budgets to perform more GPU operations.
[03:09] This translates to better visuals,
more details and less compromises.
[03:14] As a member of the Planet Tech team,
I will show you some improvements we've recently made
[03:18] for our planetary terrain rendering pipeline.
[03:22] We made two important improvements.
[03:24] The first is a ground skill level,
and the second is for large scale proposals.
[03:29] Both technique use dynamic tessellation.
[03:31] Dynamic tessellation is a GPU feature which allows
[03:36] to increase the triangle count on the fly before the
resolution stage occurs.
[03:42] The new triangle are then manipulated to shape the
terrain high frequency details and
[03:46] improve surface visuals.
[03:49] This new technique is replacing our parallax relief
mapping, which is a per pixel technique,
[03:55] and instead of creating geometric details like
tessellation does, it works by simulating details
[04:00] after the rasterization stage with a cheaper approach,
by tracing raised from camera to surface.
[04:07] The second improvement targets planets
visuals at long distance.
[04:12] This technique is also tessellation-driven,
and it aims to improve terrain/ocean intersection where
[04:17] CPU geometric representation lacks for enough control
points in the geometry.
[04:24] We reached the conclusion.
[04:25] Thank you very much and enjoy the rest of CitizenCon.
[04:29] - [Will] Thanks Anis,
I'm Will Hain and I work on the Planet Tech Team.
[04:31] DYNAMIC ECOSYSTEMS AND MORE
[04:37] Over the past few months,
I've been working on a number of improvements to our
[04:40] ecosystem spawning system,
which is the system that spawns all of the objects
[04:44] on all of the planets.
[04:45] We've been doing this to give our artists more power
and flexibility, as well as improved performance
[04:50] for everyone playing the game.
[04:51] The first thing that I did was a complete overhaul of
how we spawn the objects.
[04:55] We used to spawn them on each terrain
patch as that terrain patch was created.
[04:59] But this meant that we were limited in our control in
that we could only spawn new objects when we were
[05:04] creating new terrain patches.
[05:05] The new system has an entirely separate grid division
of the planet, and this means that we have a lot more
[05:12] control over the resolution of our objects when they
spawn and how we spread it across multiple frames,
[05:17] which means that we get
better performance in the client.
[05:19] This also means that we were able to add a setting for
the clients to control how far away each
[05:25] object preset respond.
[05:27] The next improvement we started to look at is making
the ecosystems react to their situation
[05:32] and surroundings more.
[05:33] For example, we can now introduce scaling biases for
temperature and humidity so that certain objects when
[05:39] in higher humidity can be bigger or smaller and the
same for temperature.
[05:43] A new system is being designed for animal and entity
spawning using tokens,
[05:48] which means that we can specialize our object presets
better for different planets.
[05:52] For example, we have something similar for rocks.
[05:54] That means if you put a rock on a snowy planet,
it goes snowy.
[05:57] And if you put it on a sandy planet, it looks sandy.
[06:00] Now we can do something similar for animals.
[06:02] We can specify a small herbivore, for example,
and in the snow, this might spawn some sort of Arctic
[06:07] rabbit, and in the jungle
this might spawn something completely different.
[06:12] We've also begun to experiment with a new foliage
shader that takes into account the health of the plant
[06:17] based on its surroundings again and the current season
of the planet.
[06:21] Though what you're seeing on the
screen is far from final.
[06:24] In the same vein as that,
we've been working towards having more dynamically
[06:27] placed biomes around natural areas,
we've created dressing object presets that are
[06:32] automatically placed around coasts and of course,
my favorite thing to work on rivers.
[06:38] In the most recent couple of months,
I've been doing more work on the rivers to prepare them
[06:41] to be closer to what we would consider shapeable so
that we can get them out to the players.
[06:46] This is included finer control of both the shape of our
rivers as they flow from springs to larger rivers,
[06:52] but also the objects that spawn around our rivers.
[06:54] So we have control over what spawns in the water,
what is spawning on the banks of the river,
[06:59] and what is spawning further away and blending it into
the biome that it flows through.
[07:04] The other thing that we've added as well is a wet edge
around rocks, both in the sea and in rivers,
[07:09] which reflects the fact that they were probably wet
from the river.
[07:13] And so they look a lot more shiny.
[07:16] We've also been working on introducing basins to the
river system so that we can have more natural pauses
[07:21] in our river systems and other bodies of water than
just the oceans.
[07:26] Another major change was to stop using the planet's
ocean mesh and just displacing it up to the river and
[07:32] instead building specific river mesh
sections around the river.
[07:36] This means that we can have far more control over the
shape of water, and we can use our own specific river
[07:41] material and shader,
meaning that we can specify colors,
[07:44] flow and other properties of the river water separately
to the ocean of that planet.
[07:50] Rivers aren't done yet,
but they're closer to being used in production
[07:53] than ever before.
[07:55] The next steps include a planet populating tool,
so one click to create an entire river system
[08:00] across the planet and maybe working on
a little bit of lava flow.
[08:03] But we'll have to see when that comes.
[08:05] Next is Marc and Morgan.
[08:07] Thanks, everyone.
[08:08] - [Morgan] Hi, I'm Morgan.
[08:11] I'm tools programmer from Planet Tech Team,
and now I'm going to talk about Rastar.
[08:17] RASTAR: A BASE BUILDING TOOL
[08:22] What is a Rastar?
[08:24] Rastar is our work in progress tool for planetary
locations, creation and addition.
[08:30] The name stands for a mix of RTS, the game giant,
which takes the inspiration from its map editor system
[08:38] and star as well...you know.
[08:40] Its goals are to replace our previous
placement system based on prefabs to a better object
[08:46] container oriented solution.
[08:49] As our previous system was based on prefabs,
any changes to location was source of issue as it needs
[08:55] to reenable whole set of data to have things like
missions or shops to work again.
[09:01] With the new system, any change will be easily
manageable and wont require
[09:06] us to redo the work when a change is made.
[09:09] Plus, as now object container oriented, it can be
used for outpost case or even derelicts and more.
[09:18] It works as a modular system where applications
will in fact be made of small elements that will be
[09:24] placed just like you do in City
Builder RTS editor.
[09:28] And in a matter of minutes, we now have a new location
where we can now create a bunch of cool gameplay.
[10:02] Let's go to Marc who will tell
us about the connector system.
[10:06] - [Marc] Thanks, Morgan.
[10:08] So I'm Marc, I'm also a tools developer
for the Planet Tech Team.
[10:12] Do you know what's better than placing
everything by hand?
[10:15] Not placing everything by hand.
[10:17] In order to do that
we use what we call connectors.
[10:21] Basically, artists create small parts of homesteads
that we can then smack together.
[10:26] Every part is modular so we can interchange multiple
[10:30] ones in order to have procedural homesteads.
[10:35] Every change is very simple.
[10:36] We can change the whole inside of a homestead or only a
building that is a part of the homestead.
[10:44] And that way, it's very easy to make a lot
of different buildings.
[10:50] Once something is connected,
it's considered a part of the whole.
[10:54] So it moves as one.
[10:56] It can be deleted and changed
and it's basically all from connectors.
[11:01] So back to you Morgan.
[11:03] And last but not least, some of you might have noticed
that the UI is not looking quite like an engine UI.
[11:09] That's normal, as it's based on our in-game tech
building blocks, and that's for a reason.
[11:15] Well, today it's being used by our developers.
[11:19] One day, when it's ready and been thoroughly
tested internally, we'll make a version
[11:23] available to you, the player.
[11:26] And Rastar is what will make you a pioneer.
[11:52] Thank you for watching.
[11:53] We are very excited about the tech we've shown you today,
and we hope you enjoy the rest of Digital CitizenCon.
[11:59] - So that was a small sample of
what our team is working on.
[12:02] I hope you have enjoyed it.
[12:05] Enjoy the rest of CitizenCon
and thanks for watching

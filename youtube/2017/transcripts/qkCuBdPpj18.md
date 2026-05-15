# Star Citizen: Around the Verse - Upgrading Ships to Item 2.0

**Video:** https://www.youtube.com/watch?v=qkCuBdPpj18
**Date:** 2017-06-02
**Duration:** 38:45

## Transcript

[00:15] Closed Captioning provided by Relay.sc
[00:16] Sandi Gardiner (SG): Hello and welcome to
Around the Verse, our weekly look at the development
[00:19] of Star Citizen.
[00:20] I’m Sandi Gardiner.
[00:21] Eric Kieron Davis (EKD): And I’m Eric Kieron
Davis.
[00:22] SG: While there are a lot of features planned
for the upcoming 3.0 release, one that's been
[00:28] affecting just about every department is item
2.0.
[00:30] EKD: Yeah that’s right and migration every
ship to this new system is an enormous task.
[00:35] So today we’re going to dive in and explore
this new system and the wide ranging effects
[00:39] it will have on all of our ships and vehicles.
[00:41] SG: But first let's go to Austin and Turbulent
for their Studio Updates.
[00:46] [0:46]Studio Update
[00:47] Jake Ross (JR): Hey guys, Jake Ross here,
Producer in Austin.
[00:49] The wheels are in motion on several features
here in Austin, let's dive right in and see
[00:52] what’s been going on this month.
[00:54] Right now the Austin design team is completely
focused on things related to 3.0 or near term
[00:58] goals.
[00:59] The core tasks we’ve been working on mostly
are state machines for the first few NPCs
[01:04] we’ll be implementing, state machines in
organization of animation assets for the mission
[01:08] givers like Miles Eckhart, and the nav beacon
system.
[01:12] The state machines are how we not only visualize
how the NPC will behave, but also informs
[01:17] the animation team when and where our animation
need to transition between each other.
[01:21] We hand off the state machines to the animators
who then approve the behavior or give it back
[01:26] with feedback.
[01:27] Not only does this dreive the animations we
need, but also guides our NPC behavior setup
[01:32] in subsumption.
[01:33] The nav beacon system will allow players to
create their own roads throughout a given
[01:37] star system.
[01:38] These can be used both in the vastness of
space as well as on planetary surfaces.
[01:43] Beacons are physicalized objects that are
deployed from ships and give players visual
[01:47] markers to lock onto for quantum travel, they
also point to and fly towards when used on
[01:53] a planetoid surface.
[01:55] Players will be able to grant use access to
others as well as hack another persons beacon.
[01:59] Both allows you to use someone else's nav
beacon.
[02:02] Over time, beacons need to be serviced by
the owner, restoring their energy source.
[02:07] Finally because they’re a physical object,
you’ll not only be able to find them and
[02:11] destroy someone else's beacon if you so desire.
[02:13] It should make for some fun gameplay decisions.
[02:15] Do I hack it and use it myself?
[02:17] Do I destroy it so others can’t travel?
[02:19] Do I sell it to pirates as a potential ambush
point?
[02:21] There are lots of opportunities for this new
system, we’re excited to work on and see
[02:25] it progress in the future.
[02:26] Finally Miles Eckhart development is in progress.
[02:29] We’ve been organizing this mission givers
assets which are being polished by the animation
[02:33] team in our Derby office.
[02:34] Creating his state machine and getting his
initial behavior setup and running in subsumption.
[02:38] Eckhart will be unlocked to the players by
accumulating reputation with him, earned by
[02:42] completing other available missions.
[02:44] Once unlocked, you can visit him for a wide
variety of missions.
[02:48] The new mission manager will drive his selection
that you will be able to choose from anything
[02:51] he currently has available.
[02:53] We’re really looking forward to getting
Eckhart into your hands in the 3.0 release.
[02:57] The PU Game Director, Tony Zurovec has had
his hands full with several things this month.
[03:01] A major part of which is subsumption.
[03:04] As a reminder, subsumption is the data driven
and highly abstracted foundation on which
[03:08] all the AI and mission logic in Star Citizen
is constructed.
[03:10] Tony’s finished conversion of the subsumption
tech to Linux for integration with our backend
[03:15] services and completed the shopping service
for game code to start hooking the new shopping
[03:19] tech into.
[03:20] He’s reviewed and directed mission scenarios
for 3.0 as well.
[03:24] Ship Artist, Josh Coons has been working on
the ship lods for the Cutlass Black.
[03:27] It’s a very consuming task since our LODs
our mostly handmade and the ship he’s working
[03:32] on is quite large with many pieces that have
to be optimized.
[03:35] In addition to optimizing the mesh, he also
reduces the material IDs as he goes down to
[03:40] LOD chain.
[03:41] This way the mesh will have less draw calls
from a distance and be more efficient.
[03:44] Our server engineers have been working very
hard since our last update.
[03:48] We’ve been providing support for the shopping
service which is a non Diffusion service.
[03:53] This service communicates with Diffusion and
the game systems through our Diffusion gateway.
[03:57] The gateway allows external and non Diffusion
services to communicate with the game as if
[04:02] they were internal Diffusion services.
[04:03] Recently we’ve been focused on integration
of the Diffusion code into the primary game
[04:08] development stream.
[04:10] This will be deployed with 3.0.
[04:12] This was a massive integration with a lot
of moving parts and has required a large amount
[04:16] of collaboration between our server engineering
team and DevOps.
[04:20] The effort has taken a few weeks to get everything
moved over, tested, and in a state where it
[04:24] can be deployed.
[04:25] From an internal perspective, we have been
working on a service creation tool.
[04:29] This tool provides a simple to use UI allowing
engineers to create new services: Add, remove,
[04:35] or modify components and management resource
control.
[04:40] The output of the tool is a basic service
shell and set of source files that are customized
[04:43] for the new service.
[04:45] This is a huge time saver and allows new engineers
to create services without having to worry
[04:49] about any boilerplate work and thus allowing
for rapid service development.
[04:53] We’ve started to add Star Citizen specific
extensions to Ooze.
[04:56] For those who don’t know, Ooze is the language
written by Lead Server Engineer, Jason Ealy.
[05:01] It’s the scripting language that drives
Diffusion.
[05:03] These extensions expose Star Citizen's specific
constructs to Diffusion, allowing services
[05:08] to provide more intricate support for gameplay
features, helping to move the game into a
[05:12] more distributed architecture.
[05:14] Finally there’s been work on the router
mesh functionality.
[05:16] The router mesh distributes services over
multiple router endpoints, improvised redundant
[05:20] communication paths between other services.
[05:23] The mesh will use a technique to isolate high
bandwidth services away from lower bandwidth
[05:28] or more critical services.
[05:29] The primary responsibility of the router mesh
is to provide a high level service availability
[05:35] and performance.
[05:36] This month on the Persistent Universe animation
team, we finished up the two handed carry
[05:40] animations.
[05:41] This includes standing, crouching, and for
zero g.
[05:44] Standing we can pick up 25cm, 50cm, and 75cm
crates.
[05:49] That is the new standard metric for crates
in game that you can pick up.
[05:52] You can pick them up from the floor all the
way to a shelf that’s 175cm high.
[05:58] Crouching we will be able to pick up 25, and
50cm crates from the floor all the way to
[06:02] a ledge that is a 175cm high.
[06:03] In zero g we will be able to grab 25, 50,
and 75cm crates floating around in space.
[06:09] Code and tech has hooked it up so you can
retrieve cargo in zero g, EVA back to your
[06:15] ship, stow your acquired loot in your cargo
bay.
[06:17] We also did a last minute mocap shoot in our
office when Animation Director, Steve Bender
[06:21] stopped by our Austin Studio for a visit.
[06:23] Steve put on the mocap suit and ran around
like a crazy person capturing all of our fps
[06:27] starts and stops for stock rifle locomotion
set.
[06:30] We also took this opportunity to take Sandi
Gardiner in the suit and capture some exercise
[06:34] motion for our female characters when they
decide to do a workout on our exercise useable.
[06:38] In this mocap we stuffed our Lead Animator,
Bryan Brewer in the suit as well because we
[06:42] just about killed Steve Bender on the first
day and captured needed animations for the
[06:46] crouching carry animations.
[06:47] We are starting work on some specific NPCs
so that you can go into a pub, get a drink
[06:51] from an NPC bartender or go into a shop and
buy things from an NPC shopkeeper.
[06:55] Animation is working closely with design to
make this experience a fun experience for
[07:00] all.
[07:01] On the ship animation team we have been continuing
our improvements with the cockpit experience.
[07:05] Working with the U.K.
[07:06] Studio’s design and programming team, we
are in the midst of updating our Gforce blendspace
[07:10] poses, utilizing a low pass filter for smoother,
smarter camera motion as well as adjusting
[07:15] the cockpit geometry to allow for button presses.
[07:18] In addition to this, we are creating the system
that will allow us to make coms calls within
[07:22] the ships during flight.
[07:24] This month the DevOps team has been busy optimizing
the build and publishing systems.
[07:28] The game builds are growing rapidly as content
continues to pour in for 3.0 sp we’re constantly
[07:33] tweaking and tuning to keep up with the demands
of the dev team.
[07:36] Ahmed and his team have been collecting team
feedback on network performance from our three
[07:40] locations and comparing that to internal data
so we can optimize network performance wherever
[07:45] possible.
[07:46] This is an ongoing task, but we’ve also
found some good opportunities for improvement
[07:50] in this area.
[07:52] For May, the Austin QA has been working heavily
on regression of bugs, particularly on a massive
[07:56] sweep through our open bugs to see what items
are still valid given the new systems and
[08:00] tech coming online for both the PU and Squadron
42.
[08:04] This allowed us to eliminate a considerable
number of bugs before they ever reached development,
[08:08] saving our busy developer cohorts time they
would have spent investigating issues that
[08:12] no longer were occurring on the latest build.
[08:15] Major testing items for our groups including
actor serialization, multithreaded resource
[08:19] containers and network transport queue for
the engineering teams.
[08:22] We continue testing the moons in the Stanton
system for any potential issues such as collision
[08:27] and performance testing.
[08:28] New vehicles, ships, and FPS items came online
throughout the month including the Behring
[08:33] P8SC SMG that we were very excited to play
with.
[08:36] In addition to testing the continued item
2.0 implementation all of which have kept
[08:40] our Arena Commander and Star Marine testers
busy.
[08:42] On the new system front we’ve been working
very hard testing the new procedural breathing
[08:46] and stamina system as well as a new air traffic
controller.
[08:49] Other projects we’ve been assisting with
have included testing some updates to our
[08:52] current game launcher.
[08:54] Primarily bugfixes to our players, but also
a few quality of life fixes.
[08:58] We continue providing additional support for
the animation groups here in Austin.
[09:02] Including mocap file cleanup, supporting setup
and teardown for pickup shoots and ingame
[09:06] video captures for final reviews.
[09:08] Regular editor and engine testing has continued
as well with Austin QA completing regular
[09:12] smokes in the subsumption editor, procedural
planet tools as well as our normal editor
[09:16] testing.
[09:17] Player relations team has been extremely busy
preparing for upcoming 3.0 work as well.
[09:21] The biggest item that players will see is
the new player experience that will ultimately
[09:24] go on the website and will match the new content
coming up in the game.
[09:28] They’ll also be adding to the Evocati ranks
in the upcoming weeks and are excited to announce
[09:33] that they’ll be adding headcount in Austin,
Manchester, and Frankfurt.
[09:36] We’re getting more and more excited the
closer we get to 3.0 release.
[09:39] We have a ton of new content we’re pumped
to show off and get into your hands.
[09:44] Thanks for everything you do, keep it up,
we’ll see you around.
[09:47] Benoit Beausejour (BB): Hi guys, here’s
your Star Citizen platform update, but to
[09:51] start somebody you haven’t seen in awhile,
We’ll see Benjamin Fardel to talk to us
[09:55] about other projects here at Turbulent.
[09:57] Benjamin Fardel (BF): Hi I’m Benjamin Fardel
and this is the Turbulent monthly update for
[10:01] the month of May.
[10:02] This month we’ve been working really hard
on redesigning a huge section of the RSI website.
[10:07] What we’re designing now is a consolidated
view of everything that’s currently playable,
[10:13] what you can currently do in the game and
that will hopefully make it more understandable
[10:17] and more useable for any newcomers and existing
players too.
[10:20] Our US and content teams came forward to us
with a lot of examples that we took great
[10:25] inspirations from about websites that felt
particularly immersive of games that were
[10:31] making it easy to get into the universe, their
backstory and get involved into what the game
[10:35] is without actually having played it yuet
and that’s what we’re going for now so
[10:39] that people can come in and know what Star
Citizen is about even before engaging the
[10:45] rest of the community, but what those websites
have in common is they make high use of a
[10:50] clean streamlined design and images and videos
that make you feel like you’re becoming
[10:56] into the game as you watch them.
[10:59] So that’s the inspiration we took from there
is we’re making it all about making Star
[11:04] Citizen shine in the website by showing and
showcasing what it has accomplished so far
[11:08] which is fantastic.
[11:10] We felt that we have more than enough material
to make a compelling view of what Star Citizen
[11:15] is now even that far into the process.
[11:17] We also took a lot of inspiration from what
the community has been producing.
[11:21] We have witnessed a lot of incredible production
from members of the community, videos produced
[11:24] in the director mode, but also tutorial videos
and streams, the whole setups that people
[11:30] have when they broadcast about Star Citizen
and that became a great input in the design
[11:36] that we put for Star Citizen.
[11:38] A new module we’re implementing for this
new release of RSI is a new play guide which
[11:44] is going to be a new module that covers all
the bases you need to know, not necessarily
[11:48] if you want to get good at Star Citizen from
the get go, but if you just want to learn
[11:52] how you start playing the game.
[11:53] So we’re working really closely with all
of the CIG teams in player relations, QA,
[12:01] and marketing so that we can cover all the
bases of everything that new players need
[12:05] to know when they want to start playing the
game and we’re designing this as a modular
[12:10] interface that we can make evolve as new patches
come in and new features come in so that it
[12:15] can become a staple feature of the website
when you want to point to something that’s
[12:21] currently playable in the game.
[12:22] So keep your eyes open for this new and redesigned
Star Citizen website coming in this summer.
[12:27] BB: So in the past few weeks we’ve been
hard at work reviewing the first two months
[12:32] of live operations for our Spectrum Alpha.
[12:34] We’ve been reading all of your feedback
and compiling all of it.
[12:38] We’ve already begun some work, but in this
release that we’re preparing now called
[12:41] 0.3.5.
[12:42] We’ve got major updates and major changes
to the system which I think you guys will
[12:46] like.
[12:47] The first one is we’re transferring the
view preference for threads.
[12:52] So instead of somebody creating a new thread
and choosing which type of discussion, is
[12:55] going to be fully managed by a view mode which
the viewer can decide so you’ll be able
[13:00] to set a global setting to decide if you want
to see threads as nested or chronological
[13:05] or we call them classic now, or you can also
per thread decide that you want to see this
[13:10] thread that’s chronological, but this one
is nested.
[13:13] So we’re going to persist your choice across
sessions and so this basically becomes a completely
[13:17] user preference is hopefully…
[13:20] guys who prefer chronological threads versus
nested will be able to just see chronological
[13:25] across the board and hopefully you guys will
like that.
[13:28] We’ve also done major work in this release
to try and unify what we call the read state
[13:33] which is if you’ve read a thread or a reply
already and so now we’ve changed the UI
[13:40] so that we display a yellow dot for items
you have no read.
[13:44] So this will reflect in your sidebar on the
left, but also on threads and on every reply
[13:48] within a thread.
[13:49] So this will help nested thread users who
want to know if they have read a reply or
[13:54] not through the tree, even if it’s not chronological
you will be able to see, haven’t this reply
[13:59] or have seen it before.
[14:01] One major change that we’re also implementing
is related to tags.
[14:05] So we’re changing the way we’re now surfacing
tags on the community index so that you’ll
[14:12] be able to jump directly from the list of
channels to a tag straight up which is basically
[14:17] much more functional as a subforum.
[14:20] The tags are also now can be set to mandatory
so now when you create a channel you can say:
[14:26] “this channel requires tags or not.”
[14:29] They’re browsable from the community index
and the channel directly.
[14:33] They’re also bookmarkable so you can bookmark
a tag within a channel if that’s what you’re
[14:37] interested in and they’re also now these
bookmarks which are now and this applies for
[14:44] every bookmark, every bookmark are now renamable
so you can go in your managed bookmarks and
[14:49] change the name of your bookmarks to something
that you want, organize your sidebar the way
[14:54] you want.
[14:55] So this applies to tags, but also to every
other type of bookmarks that you’ll store
[14:58] in the sidebar.
[15:00] 0.3.5 also comes with major changes to search.
[15:02] We’re adding new filters that will allow
you to filter by author and by role.
[15:06] So you’ll be able to search by for all staff
posts for example or search for every post
[15:10] from this user within the community or all
communities you have access too.
[15:15] So this will make search more viable.
[15:16] It’s also now accessible on mobile which
it wasn’t before so now if you’re on a
[15:21] mobile screen, the search options will display
and you’ll be able to use them.
[15:24] 0.3.5 also comes with a lot of work behind
the scenes where we’ve been looking at usage
[15:29] patterns over the past few weeks and there’s
a lot of performance updates we’ve done
[15:33] so Spectrum should load faster for you guys.
[15:35] The thread listing should be at least 10 times
faster than it was before.
[15:39] We’ve added a lot of server side reporting
so we can track client crashes and basically
[15:45] try to preempt fixing stuff without having
you guys report them, it’s all automated
[15:50] for us so that’s really great.
[15:51] So this is it for 0.3.5 so a lot of changes
coming up.
[15:54] We’re hoping that by the time you see this
it's already live.
[15:57] It’ll be a matter of day if that’s not
the case so see you guys on zero 0.3.5.
[16:02] In terms of 0.3.6.
[16:03] Which is our next shorter term version.
[16:05] We’re working on revamping the mini profiles
to display more information about you guys.
[16:11] Have a bunch of actions available on the mini
profiles.
[16:14] We’re going to more of a calmer display,
they’ll be able to jump from the miniprofile
[16:18] to a user's post and take action specifically
on that user.
[16:22] This is where we’re going to add later on,
not in this release, but later on all the
[16:25] functions for friends lists, friend system,
blocking will go in that area.
[16:29] The major feature for 0.3.6.
[16:31] is the availability of custom roles and so
we want orgs to be able to add additional
[16:37] roles to their org, assign roles to their
members, all done through the mini profile
[16:43] directly on Spectrum so that’s going to
be a big thing for 0.3.6.
[16:46] There’s also work going on in the editor
for the forums to allow endline images, linked
[16:51] formatting and more formatting options.
[16:53] This is tuning out to be a bigger project
than we thought, but we’re hoping that it’s
[16:57] going to be ready in 0.3.6 for you guys to
use straight on the live site.
[17:01] There’s also group private messaging that
we’re trying to achieve in 0.3.6, though
[17:06] this is more looking like a 3.7 feature, but
we’re still working on it and of course
[17:11] all the background work related to voice transmission
and game integration is ongoing, but you know
[17:17] this is basically what we’re looking for
in Spectrum for 0.3.6
[17:21] [17:22] Back to Studio
[17:23] SG: and it’s great to see subsumption taking
another step forward.
[17:25] The system is the bedrock for so much of the
game so it’s exciting to see it all coming
[17:29] online.
[17:30] EKD: Yeah and the PU Game Director, Tony Zurovec
who is creating the tech is in Los Angeles
[17:34] this week working with the team on subsumption
and many other important features.
[17:39] SG: Another new system that you’ve heard
mentioned in previous studio updates is Item
[17:43] 2.0.
[17:44] It lays the groundwork for swappable ship
component and so much more.
[17:48] Once fully implemented Item 2.0 will provide
the framework for many cool features to come.
[17:52] EKD: Yeah and although converting ships to
this technology is well underway, we thought
[17:57] it would be good to explain the facets of
this system and highlight just how important
[18:01] Item 2.0 will be to improving the overall
Star Citizen experience.
[18:06] [18:08] Ship Migration Part 1
[18:09] Kirk Tome (KT): Hi.
[18:13] I'm Kirk Tome, and I'm the lead technical
designer here at Cloud Imperium Games.
[18:16] Mark Abent (MA): My name's Mark Abent.
[18:17] I'm a senior game-play programmer here, and
I'm also known as the Bugsmasher … -ish
[18:23] [Chuckles] Yes it's that tacky, but it's great.
[18:26] [Laughs]
[18:27] Ashram Kain (AK) Hi.
[18:28] My name's Ashram Kain.
[18:29] I'm a producer here in Los Angeles working
primarily with the engineering and tech design
[18:33] team.
[18:34] So part of my job is working with engineering
and tech design to get all of our ships converted
[18:41] over to a new framework, our Item 2.0 Framework,
which is going to support all of the multitude
[18:47] of features that we want to have in our ships
moving forward in the game.
[18:51] The reason we had to do this conversion to
get all of these ships into this new framework
[18:55] was to support the kind of features we wanted
in the long term.
[18:59] KT: In the case of ships that already existed
we do need to update various components, the
[19:06] seats, the way we enter the ships and the
way we interact with the items and the various
[19:11] systems on the ships so we can make them work
with the new interaction system.
[19:16] In the cases of new systems we need to implement
them in accordance of the new architecture.
[19:23] AK: It's easy enough to make a spaceship and
put it in the game … not that easy, but
[19:28] compared to what we're trying to do it's a
walk in the park.
[19:32] But when you want to have a spaceship with
modular components that's upgradable, swappable,
[19:37] changeable, damageable … when you want to
have ships that die, because components fail
[19:41] inside or ships that explode, because of damage
done to important internal pieces.
[19:47] That's not something you can do with a out-of-the-box
system.
[19:51] That's something you have to build from scratch.
[19:53] Honestly this conversion is involving every
single team in the entire studio.
[19:57] There is not a team that is not part of this,
and I mean everybody from marketing all the
[20:01] way to the physics guys in Germany who are
having to be part of this, because this conversion
[20:06] touches everything.
[20:07] It's primarily being driven by LA Engineering
and LA Tech Design through Mark Abent and
[20:14] Kirk Tome.
[20:15] MA: So as you guys know now the current release
we're using the 1.0 infrastructure, and we've
[20:20] used that since basically we released the
dogfight module way back in … during the
[20:26] dinosaur era.
[20:27] That system worked really, really great for
our single shooter ships where you just have
[20:31] a guy sitting here maybe one copilot, but
when you started having these much more big
[20:37] complex ships and you're just adding a bunch
of items onto there it became a big gigantic
[20:43] behemoth to maintain our item infrastructure.
[20:47] The biggest issue we had is we have our ship
he knows all of the items that are attached
[20:52] onto here, and when you have a guy right here
he gets all of these callbacks and events
[20:57] saying, “Hey this was added”; “this
was added” and “you have control”; “you
[21:00] have control”, but we have another seat,
since that event system was basically on the
[21:05] main route of the ship he would get those
same events.
[21:08] So if you had five seats, they would get events
from everybody else and then every other seat
[21:15] had to figure out who had what control and
where, and then you had a more complex thing
[21:19] because then you had the visor or the HUD
or the UI, you had the AI, you had the different
[21:25] modules all listening for these events trying
to figure out who had control when/how, and
[21:30] then when you add in multiplayer where this
seat could come before the vehicle, and then
[21:35] this item could come, and then we had to reconnect
this here.
[21:38] Anything could come in any order.
[21:40] It just became pure chaos trying to make sure
everything worked in a nice coherent manner.
[21:45] As you can tell we had a lot of fun bugs and
it's also not maintainable, especially since
[21:51] each of those items were their very own special
cupcakes where we had all this logic built
[21:56] in for the weapons, and if we want to use
a single part of it like say we had another
[22:02] type of weapon that didn't shoot projectiles
it shot some … We want to shoot M50s out.
[22:07] You had to basically copy/pasta that logic
into that other item and then you have another
[22:13] set of bugs, because you have to maintain
two sets of logics blocks and this was the
[22:18] whole Item 1.0 infrastructure, so it just
became a mess.
[22:22] Going back to that big logical block we want
to take each of those bits of logic and turn
[22:27] them into these bits of … what we call them
components.
[22:32] This thing handles geometry.
[22:33] We take it out.
[22:34] Stick it in a component that handles geometry.
[22:36] This thing handles physics.
[22:38] Take that out and stick it into a component
that has physics.
[22:40] The idea was we shrink this item into nothing
but it's bare bones and it's just a list of
[22:46] logical blocks or bare components that defined
what the item actually did.
[22:50] So in theory I could take this piece; put
it here.
[22:52] Take this piece; put it here, and now I have
a whole new weapon or I have a whole new logical
[22:58] item that we wanted to do, and that was the
very bare bones Item 2.0 or infrastructure.
[23:05] KT: So the Item 2.0 System comes as a lot
of different components to make ships fit
[23:12] within our new architecture.
[23:14] The items that we're improving the game-play
functionality on are systems like power, cooling,
[23:23] the shield system, utilizing our new room
system when you turn power off to a particular
[23:28] room all the lights that are in there will
automatically turn off, or when you open up
[23:33] a door that's connected to that room entity
we can suck the atmosphere out.
[23:38] Being able to do things like set a door lock
in between those two rooms so that we can
[23:42] simply connect those two rooms utilizing that
airlock, and it knows the states of the atmospheric
[23:50] conditions within their zones and can react
accordingly when you open that airlock implementing
[23:55] new ways in which atmospheric flight affects
your fuel consumption, how those thrusters
[24:01] actually utilize power and fuel to fly, better
systems for functionality such as quantum
[24:07] drives.
[24:08] We're able to balance the fuel consumption
that ships will take to go from one nav-point
[24:15] to another, therefore we can make some other
ships that are larger and perhaps have a larger
[24:21] quantum fuel tank be able to traverse the
… make those trips without running out of
[24:26] fuel whereas some of the smaller ships maybe
they can't, and they must refuel before they
[24:30] can take that next jump.
[24:32] These are all parameters that we are updating
and making it a little bit more transparent
[24:37] for the player to understand what's going
on with them.
[24:40] MA: So now that you have this control, it's
cool and the problem is how do you interact
[24:46] with this control?
[24:47] And that's where we bring in this other set
of technology that we have which is the Interaction
[24:50] System.
[24:51] We had an old interaction system that hit
a button and it did something, but now we
[24:55] have a much more contextual system where you
can register these things called interactions
[25:01] on interaction points, and what that allows
us to do is we can build a list of these things
[25:05] and then the code gets some callbacks and
if I look at say a door I could get two interactions
[25:12] maybe open and close, and then code could
get those and figure out what to do with them.
[25:17] Using this thing with the control thing is
basically we have this thing called a seat
[25:20] access at what seats.
[25:23] Before we have this ship called a Constellation,
and we have these two turrets, and the thing
[25:29] about the turrets is that when one came down
it had to block the other one, but we couldn't
[25:32] do that on the old one.
[25:33] So we kind of had to … you can actually
do this now with the existing system.
[25:37] If you use the top turret you can use the
bottom turret, and you can see the animations
[25:41] messing with each other, because these two
seats don't know about each other.
[25:44] But now we have this thing called a seat access
that is aware of these two.
[25:48] It's basically the state machine for these
two things.
[25:51] So if you want to get into either one, it
will block the other one.
[25:54] And we do that by using the Interactions System.
[25:57] The top one has an interaction to enter/exit.
[25:59] The bottom one has an interaction to enter/exit,
and there's an invisible physics box, but
[26:05] you'll just see a glowing thing saying that
I can enter this turret or enter this turret.
[26:09] You walk up to it and you see the actual floating
text saying, “I want to enter the top”/”I
[26:13] want to enter the bottom”, so when I enter
the top the code will get the callback saying
[26:18] that I should begin to move this one down,
and the seat access will be, “Alright since
[26:23] this one is moving down I can block this one”.
[26:25] So now if someone walks up as you are entering
this guy, he won't get any interactions, because
[26:30] he can't enter this one because he was blocked
until this guy goes up to the top, and then
[26:34] now that interaction will pop up saying, “Hey,
you can enter now”.
[26:37] AK: This isn't simply an engineering task
or a design task.
[26:40] We're having to revisit animations.
[26:42] We're trying to revisit entire structures
inside how ships are built from the ground
[26:46] up which means we are trying to reconsider
how doors, simple doors, are implemented on
[26:51] the interior and exterior of the ship, and
that's art time.
[26:53] That's time that the artists and modelers
have to be involved in, and part of that means
[26:57] we're also having to do rework on some of
the damage materials, the UV2s that we use
[27:01] for our damage states ... literally every
team.
[27:04] One of the biggest impacts is things you wouldn't
think about like the prop team, because we're
[27:08] having to do things like build our power components
and our modular power supplies.
[27:13] That means we need a prop for that, and that
prop needs to be built by somebody.
[27:17] So, all of the sudden things you never really
saw on the ships but we're kinda there, I
[27:21] mean they were a little bit hidden, they're
suddenly going to be there, and as we start
[27:25] rolling out this technology more and more
and implementing it through later iterations
[27:28] in the ships you're going to be able to see
these components inside the ships, and that
[27:32] means we need to have those components to
show.
[27:34] Mark Abent(MA): One awesome example of moving
one of the items to this whole new Item 2.0
[27:41] centric system on the vehicles is we have
these lights on your spaceship, and with our
[27:46] 1.0 or legacy ships, we had an item that attached
to an item port and it would create these
[27:54] things called…
[27:56] basically rendered out all along the ship.
[27:58] It would look cool and I could see the lights
on, problem is I get out of the ship or the
[28:05] wing blows off, lights are technically still
there.
[28:07] We did cheat and listen for when something
blew off but power doesn’t do anything,
[28:14] can’t control them, they’re always kinda
on.
[28:17] So what we did for 2.0 is we have this technology
called an Object Container in the inside of
[28:23] our ships it’s basically a mini level we
can insert into our ships.
[28:27] So we already have that, we’re using it
for Item 1.0 and what we want to do is since
[28:32] designers are placing a bunch of stuff like
beds and all that stuff in there, we wanted
[28:36] them to use that same technology to move…
have lights, the same lights that were defined
[28:42] before.
[28:43] So we basically tossed the old system, allowed
designers to create lights and using this
[28:48] thing called light groups you can designate
that these lights are basically, you know,
[28:53] the interior.
[28:54] These lights are the exterior and a way of
grouping them.
[28:57] When you export that level it creates these
things calls item ports but we attach these
[29:02] lights on the item ports and since they’re
on item ports, the control manager now knows
[29:08] about them.
[29:09] Since they’re an item and they have an item
port, they can get power, they can get control.
[29:15] So now they register to this thing called
the control manager and they register to the
[29:20] item ports and they can actually request to
get power, they can request to get heat and
[29:25] if they don’t get it… we can turn off
the lights.
[29:27] We could do anything we want and we took it
a step further, we have this thing called
[29:33] a light controller, it registers to the control
manager and those lights register to that
[29:38] and if the user sits down in the seat, and
get into the control manager I get a button
[29:43] to turn off those lights that are inside of
the ship that normally don’t spawn in.
[29:48] AK: It’s not something you can just sit
down and say, ‘we’re going to do this
[29:50] ship, the this ship, then this ship’, cause
it doesn’t work like that.
[29:54] Each of these systems is so deeply interconnected
that when we encounter a bug on one ship,
[29:58] we just can’t stop and wait for that bug
to be fixed.
[30:01] We have to move onto another ship that we
can work on, we’re having to work so quickly
[30:05] on so many different complicated pieces and
track all of the bugs that the real challenge
[30:11] is being able to predict where we’re going
to be.
[30:14] The whole point of scheduling isn’t to make
a plan on how to get some place, that’s
[30:19] the easy part.
[30:20] It’s being able to show where we think we’re
going to be based on the work that we’re
[30:23] doing and the work that we’ve done.
[30:24] This work has never been done before, nothing
like this has ever been done before.
[30:28] KT: The other difficult issue is that we do
need to go in and do an entire retrofit of
[30:33] every single ship from step one.
[30:37] Some of the steps include converting the ship’s
seats to the new system, creating a new dashboard
[30:43] element which is the part of the ship when
you’re seated in the cockpit that you interact
[30:48] with so that we can have visual interactions
that allow you to turn power on, engine on
[30:53] and off, set the ship to flight ready.
[30:55] These are interactions that occur automatically
before, now we’re going to give the player
[30:59] a little bit more control to give them a more
visceral feel when they’re in the cockpit.
[31:06] This can also be true for other stations when
you’re seated, get an engineering station
[31:10] going will allow you to aim in a certain direction,
hit a button this does a particular task.
[31:17] Then utilize the screen so that you can divert
power to repairing, swap out individual items
[31:23] on the ship, etc.
[31:24] So in some cases we take the old assets and
then update the code we use to implement them,
[31:30] in other cases we update the assets themselves
so that it’ll adhere to the new code standard
[31:37] that we need but in most cases we’ll do
both.
[31:40] So, we’ll take the dashboard out of the
ship geometry, make it its own item and then
[31:46] set up the interaction points so that when
the player does get seated in the seat…
[31:51] they’ll have an indication of where to look
at to do these interactions.
[31:56] AK: Coordinating all of these teams is a real
challenge because we’re talking about 400
[32:00] people who need to be aware of what’s happening
and the hardest part in coordinating all these
[32:04] teams isn’t necessarily tracking the tasks
or the individual work on any given person.
[32:09] Making sure that all the teams are aware of
what’s happening and what’s coming down
[32:12] the pipeline, we don’t want to break something
that’s going to then prevent one of the
[32:16] teams from being able to work.
[32:17] A good example of this I can give is AI team,
we’re having to be very conscious of delivering
[32:22] components and pieces of this feature in time
for AI to have the opportunity to implement
[32:28] and integrate that with their system.
[32:31] So that, you know, we can have people inside
these ships and they can fly around and interact
[32:36] in all the different game worlds.
[32:37] This is particularly vexing when it gets to
more complicated parts of the interaction
[32:41] system because these ships have a lot of interactions,
so making sure that all the interactions are
[32:46] functioning is sort of the key point to making
sure we can interface with these ships as
[32:50] we change and integrate them into Item System
2.0.
[32:53] Then there’s the tertiary stuff that you
don’t really think about when you’re considering
[32:56] doing all of this stuff.
[32:58] How does this interface with stations?
[33:00] How is this going to work when you go buy,
sell and be cognizant of all of the items
[33:05] inside your ship inventory, your personal
inventory, your player inventory and then
[33:10] where do we want to go with that.
[33:12] How does the economy interface with all these
other pieces.
[33:15] So, maybe you should let everyone who’s
cognizant of the long term goals as well as
[33:20] present in what we’re trying to achieve
for 3.0 and 3.1, that’s the biggest challenge.
[33:24] KT: There will be some balance tweaks that
the player will notice which will incentivize
[33:30] the player to explore upgraded items for example,
especially ships, because we are utilizing
[33:37] the new interaction system.
[33:38] It’s the first thing that they’ll notice
when they walk up to a ship and when they
[33:42] get sat down and look at the cockpit there
will be a noticeable difference.
[33:46] AK: Game play is one of the most interesting
challenges in this conversion because at once
[33:52] we need to maintain game play that the community
loves and the balance and the hard work that
[33:57] the balanced designers implemented on these
ships.
[33:59] So on the other hand we have a to implement
a whole new way of thinking about the ships
[34:03] and the ship balance.
[34:04] We have to implement new ways for the thrusters
to function, we’re rebuilding parts of IFCS
[34:09] and integrating IFCS into the Item Component
System.
[34:13] That means that we have to reconsider that
balance as well.
[34:16] Suddenly a fighter is no longer just a fighter
when you have to worry about managing your
[34:18] shields and your power supply and your weapon
group, really… in real time.
[34:24] With Item System 2.0 we’re going to have
a lot more capacity for multicrew ships as
[34:28] well.
[34:29] It’s no longer going to be, ‘oh I’m
riding around in your Caterpillar’, it’s
[34:32] going to be, ‘I need somebody on the shields
and the power at the engineering station to
[34:37] manage this as I’m in a heavy fight’.
[34:39] MA: One of the big things is probably performance.
[34:44] With this componentized system, each of these
components…
[34:46] so if we have a seat, we can have geometry,
we can have physics, we can have a bunch of
[34:51] other logic.
[34:52] Each one can have their own update but they
can update on this thing called a batch update
[34:56] which means during a specific time in the
frame, we can basically spawn a bunch of threads
[35:02] and say, ‘you’re updating, you’re updating,
you’re updating, you’re updating and you’re
[35:05] updating’.
[35:06] We may do like a couple thousand at one go
and then do another thousand and then do another
[35:10] thousand so that frame update from like this
to like this, and we can do a lot more.
[35:17] One of the biggest improvements we’re hoping
is going to be with John Pritchett’s physics
[35:24] flight controller, the IFCS.
[35:26] We just actually recently moved his update
block from kinda main thread physics call
[35:34] and it was stalling physics and taking that
out and moving it to these batch updates and
[35:39] it will still act the same, it’s now just
spawned off into one of those threads.
[35:44] So we’re pretty much utilizing multicore
systems at this point.
[35:48] AK: This is one of the largest things I’ve
ever worked on and it singularly can be considered
[35:54] one of the largest things that I think has
ever been done in a game, particularly a multiplayer
[36:00] game.
[36:01] This is a system that…
[36:02] I mean think about the multiplayer games that
are out there, I mean you might have a mount
[36:06] in World of Warcraft or Elder Scrolls Online
or a house but you don’t fly your house
[36:12] around.
[36:13] You don’t have twenty houses that you fly
around and you have to worry about them being
[36:16] damaged and the states they’re all going
to be in and how other players are going to
[36:20] interface with them, that’s something we’re
having to consider.
[36:23] When we talk about Item System…
[36:25] Item System is more than just the things in
the ship or the things on the space station
[36:30] or the things on the planet.
[36:32] Its an entire framework for objects and entities
in game persistence being persisted and having
[36:40] actual relevant information to be part of
that player experience.
[36:44] I think players are going to start seeing
an incredible versatility and power to this
[36:49] technology.
[36:50] MA: So that was some of the big architectural
changes we wanted to do but of course changing
[36:55] something huge is going to have some big repercussions.
[36:59] Stay tuned next time where we’ll tell you
about some horrible, horrible fun that we
[37:04] had to do when transitioning from A to B.
[37:08] [37:09] Outro
[37:09] EKD: Thanks guys.
[37:11] Converting the game to Item 2.0 is really
no small task, but it’s an essential one
[37:15] to building the Best Damn Space Sim Ever.
[37:17] SG: Yes and it will add a lot of versatility
to ships and let players interact with them
[37:22] like never before.
[37:23] It should have a significant impact on gameplay.
[37:26] EKD: And that’s it for today’s episode.
[37:28] Please join us tomorrow for Happy Hour Friday
at 12pm Pacific as Mark Abent and Ashram Kain
[37:34] join us to talk more about Item 2.0.
[37:36] SG: And thanks to all of our subscribers who
make shows like ATV, and Happy Hour possible.
[37:40] EKD: And thank you to all of our backers.
[37:42] We really couldn’t build a game with hundreds
of swappable ship components without your
[37:47] support.
[37:48] SG: And that’s all for this week.
[38:01] We will see you…
[38:21] SG/EKD: Around the Verse.

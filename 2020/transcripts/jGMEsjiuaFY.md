# Inside Star Citizen: Interaction in Action | Fall 2020

**Video:** https://www.youtube.com/watch?v=jGMEsjiuaFY
**Date:** 2020-11-05
**Duration:** 9:25

## Transcript

[00:04] [Music]
[00:06] the interactions that we have in our
[00:08] game
[00:09] define how reactive the environment is
[00:13] define how simulated that space feels
[00:17] how real and immersive it reacts
[00:21] and is a big part of driving
[00:24] emergent gameplay of i see a thing
[00:28] i understand it i expect it to behave a
[00:30] certain way
[00:31] and that it does
[00:33] [Music]
[00:36] we make zoos primarily to demonstrate
[00:40] a playground of the functionality that
[00:43] we have and
[00:44] also here is an example
[00:47] setup of how those things are achieved
[00:51] a designer is able to go in and see that
[00:54] if they've had any issue with their own
[00:56] implementation
[00:57] prior to bothering an engineer they can
[01:00] take a look
[01:00] at the gold standard of here's a thing
[01:03] with nothing else
[01:05] working see if that gives you some hints
[01:08] first
[01:09] before we start interrupting an engineer
[01:11] if you go in and you find it broken
[01:13] that's a good that's a good moment to
[01:15] call an engineer
[01:18] all that in mind we've been making an
[01:20] interaction zoo
[01:21] a place to demonstrate all of the
[01:24] different nuanced and complicated
[01:26] interactions that we can get between a
[01:28] bunch of different entities
[01:29] that designers can go take a look at and
[01:32] draw inspiration from
[01:33] to pull into their levels their ships or
[01:36] whatever environments we're making
[01:38] the reason i like zoos philosophically i
[01:40] believe
[01:41] as a game designer the two
[01:44] core parts of gameplay are collision
[01:48] and doors with our doors we've got all
[01:50] these automatic doors and those doors
[01:52] connect between rooms and
[01:53] every time a door doesn't react the way
[01:55] you expect it breaks your immersion and
[01:57] pulls you out of the game
[01:59] even with something simple like a
[02:00] control panel we can explore things like
[02:03] enabling and disabling the proximity
[02:05] sensor so that you have control over
[02:07] whether or not it lets you through
[02:08] automatically or if you have to interact
[02:10] and make sure it's all working properly
[02:14] beyond the control panels there's the
[02:16] doors themselves which give
[02:17] us many opportunities for complex and
[02:20] nuanced behaviors
[02:22] so we've explored things where if you
[02:24] cut the power to a door
[02:26] it'll stop its behavior it'll the lights
[02:29] will go out on the control panel and you
[02:30] won't be able to interact with it in
[02:32] that way anymore
[02:33] but then maybe we make this wedge kit
[02:35] that you
[02:36] physically place on the door which prys
[02:38] it open and
[02:39] which allows you then to sneak through
[02:42] and
[02:43] maybe even past that there's the locks
[02:45] on the door could be
[02:46] physical and have their own state and
[02:49] have their
[02:50] own health and if those things get
[02:52] changed
[02:53] either by some lock-picking gameplay or
[02:55] some damage or
[02:57] some external thing that we could
[02:59] explore even beyond
[03:00] uh that you might trigger an alarm when
[03:03] alarm
[03:04] triggers we want to have that event
[03:08] actually get passed through
[03:09] [Music]
[03:11] the environment and so even
[03:14] just by having a single chain of
[03:17] communication
[03:18] being able to interrupt it at any stage
[03:20] or alter it at any stage
[03:22] creates all this opportunity for
[03:25] subversion
[03:26] reaction for the doors to get locked
[03:29] down
[03:30] and for the alarm lights to go off and
[03:33] start blaring
[03:34] or for those things to fail to happen or
[03:36] get stuck in that state
[03:38] because something went wrong
[03:42] or some sabotage went right
[03:45] as each thing feeds into the next
[03:47] behavior
[03:48] it creates a world that feels real
[03:51] creates a world you can
[03:52] make a plan for in a world you can react
[03:55] to
[03:59] the way in which we interact with
[04:01] objects in the game world
[04:02] is essential to creating an immersive
[04:05] and enjoyable experience
[04:06] and we hope that many of the
[04:08] interactions seen here and
[04:10] quite a few that are maybe a little too
[04:11] early to share will make their way into
[04:14] the persistent universe
[04:15] but before that happens it's time once
[04:17] again for a sprint report
[04:18] so let's get to it now there will be
[04:22] plenty of ship news coming out of iae in
[04:24] the coming weeks
[04:26] but let's go ahead and take a quick look
[04:28] at work from the graphics team
[04:30] on adding iridescence to the hard
[04:32] surface shader
[04:33] seen here on the talon light fighter
[04:36] from asperia
[04:37] now coming from the original concept the
[04:40] iridescent paint allows us to showcase a
[04:43] variety of
[04:44] luminous colors that seemingly change
[04:47] when observed from different angles
[04:49] this isn't necessarily the final look of
[04:51] the ship but only a first implementation
[04:54] of this new aspect of the shader
[04:56] you can bet that we'll be dialing it in
[04:59] further and that we'll see more of the
[05:00] talon in later weeks
[05:02] ahead of its intended release in alpha
[05:04] 3.12
[05:06] as part of an overall effort to revamp
[05:08] and unify the way scanning and radar
[05:10] works for
[05:11] vehicles and fps players alike the
[05:14] vehicle tech team
[05:15] has progressed on what they're calling
[05:17] the radar object collection
[05:19] subsystem now using a temporary back-end
[05:22] ui at the moment while it's still
[05:24] being developed this will eventually
[05:26] form the underlying basis
[05:28] of finding and filtering almost anything
[05:30] with an ambient signature
[05:32] you can see how enabling the resource
[05:34] filter shows minable rocks ahead
[05:36] while toggling the infrared adds the
[05:39] cutlass info that's a bit farther behind
[05:41] them
[05:41] now since not all scanning options will
[05:44] be available in all situations
[05:46] reducing our options down to a simple
[05:48] cross-section scan
[05:49] means that we can see the ship when
[05:51] unobstructed but that scan data is now
[05:54] occluded as asteroids or other items
[05:56] come between you
[05:58] and your target now as this develops it
[06:00] will apply to both
[06:01] ships as well as players or npcs hiding
[06:05] behind large objects
[06:06] walls or even doors
[06:10] meanwhile work on refinery decks
[06:12] continues with this look at some of the
[06:14] exterior infrastructure and how that
[06:16] sits within the upcoming lagrange point
[06:19] gas clouds
[06:21] now this review specifically was to get
[06:23] an early look at what these stations
[06:25] might look like once they're embedded in
[06:27] the upcoming alpha 3.12
[06:29] after some consideration one thought was
[06:32] that maybe a few more asteroids could be
[06:34] used to flesh out
[06:36] and more appropriately theme the
[06:38] exterior of these refinery stations
[06:40] that was an easy call but it will also
[06:43] have to be balanced with our desire to
[06:45] to avoid turning our major trucking
[06:47] lanes into obstacle courses
[06:49] well not all of them anyway and while
[06:52] the look of these are coming along
[06:53] nicely
[06:54] we'll talk more about how actual
[06:56] refining gameplay itself will work
[06:58] next week finally let's check in once
[07:02] again with the ongoing work of our
[07:04] colonial style homesteads
[07:07] last time we saw the 2d concepts turned
[07:10] into 3d concepts
[07:12] and that was a big step in helping us
[07:14] visualize and evaluate
[07:16] the direction we wanted to take them
[07:18] what you're seeing here
[07:19] is the next step in that look dev
[07:21] process where we've now taken the raw
[07:23] very rough 3d concept meshes and brought
[07:26] them
[07:27] down to a planet in engine similar to
[07:29] the way the team reviewed 3d docking
[07:31] concepts
[07:32] by sticking them onto existing space
[07:34] stations
[07:35] now it's important to note here that
[07:37] these are still concepts
[07:39] and that the process of building them
[07:41] into viable in-game assets has not yet
[07:44] begun so let's set our expectations
[07:46] accordingly
[07:48] tests like this are used to help us
[07:50] evaluate things like
[07:51] shape language how the structures feel
[07:55] along or against certain landscapes
[07:58] what kinds of visual stories can be told
[08:00] through placement
[08:01] orientation or combination and even
[08:04] be used to help identify any sort of
[08:07] structure type that might still be
[08:09] missing from the proposed toy box
[08:11] beyond this test it's also just a really
[08:14] cool look into star citizen's future
[08:16] when one day frontier towns full of npcs
[08:19] with jobs or missions can be found
[08:21] throughout the universe
[08:22] and then one day later players
[08:25] themselves creating outposts
[08:26] all their own rest assured that as work
[08:29] progresses
[08:30] we'll keep following
[08:34] so what'd we learn about this week well
[08:36] that there's a lot of potential in the
[08:37] way that we interact with doors
[08:39] airlocks and more in creating new
[08:42] gameplay opportunities
[08:43] that when somebody asks what color your
[08:45] talent is you can
[08:47] kind of say all of them the changes are
[08:50] ahead for scanning and radar
[08:52] and that someday i'm going to be the
[08:54] mayor of my own
[08:55] disco berg or discover
[08:59] dystopia for inside star citizen i'm
[09:03] jared huckaby
[09:04] we'll see you next week
[09:25] you

# Inside Star Citizen: Wear and Tear Affair | Spring 2022

**Video:** https://www.youtube.com/watch?v=Hhy5Ti0o7S8
**Date:** 2022-04-28
**Duration:** 12:20

## Transcript

[00:05] hey all greetings from sunny united
[00:08] kingdom it's a time of change at the
[00:10] moment as i relocate from los angeles
[00:12] and our wimslow and frankfurt offices
[00:14] prepare their move into the new digs
[00:16] over the next coming months
[00:18] that means that this quarter of isc may
[00:20] be a little different a little more run
[00:23] and gun than usual recording from
[00:25] wherever we can week to week whether
[00:27] that's our old wimslow office you're
[00:28] already familiar with sticking our heads
[00:30] into the currently under construction
[00:32] new offices here in manchester or even
[00:35] my new flat that's currently filled with
[00:37] half constructed ikea furniture
[00:40] yes it's an exciting time for isc and
[00:42] for cloud and parent games as a whole as
[00:44] we continue to grow so please uh pardon
[00:48] our desk this quarter as we continue our
[00:50] look inside of star citizen's continuing
[00:52] development and we're going to start
[00:54] things off this new quarter and this new
[00:56] year of the show with a brief look at a
[00:58] presentation given recently by our own
[01:01] forest stefan to directors detailing an
[01:03] evolution of our wear and biome systems
[01:06] we want to put forward into development
[01:08] later this year
[01:22] greetings all forrest here some of you
[01:25] may know this
[01:26] i love playing star citizen i play it on
[01:29] fridays
[01:30] and i was running around microtech when
[01:33] i realized there was a bit of a problem
[01:35] there were some major inconsistencies
[01:38] between the characters the weapons and
[01:41] the environment in regards to the biome
[01:43] accumulation
[01:52] so i try to come up with a solution and
[01:55] then i put together a presentation
[01:57] because before we decide to work on a
[01:58] feature of any kind it is important to
[02:01] make certain we're all on the same page
[02:03] so today i'm going to share with you
[02:06] some of those ideas from the
[02:07] presentation i recently gave to cr and
[02:10] other directors before any of the work
[02:13] it started
[02:14] now disclaimer jared said you'd find it
[02:16] interesting so if it's not
[02:19] blame him
[02:21] so for those of you who don't know biome
[02:24] is weather and accumulation is the
[02:26] effect that that weather has on the
[02:28] materials
[02:32] so if a character walks into a biome
[02:35] that character's shader will reflect the
[02:38] weather
[02:39] [Music]
[02:41] simply put if you walk out in the rain
[02:44] you're gonna get wet
[02:49] [Music]
[02:51] right now when you play the game there's
[02:53] only a single texture handling all
[02:55] accumulation effects per asset
[02:58] so my pitch to chris was let's make it
[03:01] procedural
[03:02] how we did this was we used substance
[03:04] designer to automate any textures needed
[03:08] for any biome required
[03:11] this alleviated all labor off the
[03:14] artists
[03:21] so look when you have a bunch of people
[03:23] creating the same thing you're going to
[03:25] have different results because we all
[03:27] see things differently
[03:29] doing this procedurally solves the
[03:31] visual inconsistencies of biome
[03:34] accumulation
[03:35] and of course with graphic support it's
[03:38] going to be even better
[03:45] all in all the reason this is so
[03:47] important to me is it gives us that
[03:51] immersive planetside experience while
[03:54] playing the game
[03:57] on my friday nights
[04:01] wear and biome accumulation are
[04:02] essential elements in creating a
[04:04] universe that feels simultaneously alive
[04:07] and lived in with its expected and
[04:10] anticipated effects on players buildings
[04:12] and vehicles alike and up next the teams
[04:15] have been busy while we were away so
[04:17] let's check in with the ai and eu
[04:19] sandbox teams in this week's sprint
[04:21] report
[04:22] to get things started this week let's
[04:25] jump into the world of ai with some
[04:27] sprint updates from a variety of tasks
[04:29] the team is tackling for both star
[04:31] citizen and squadron 42. up first is the
[04:35] collision resolver now currently in the
[04:37] claustrophobic corridors of a ship or
[04:39] station npcs will often have no
[04:42] collision so that they can get to where
[04:44] they're going relatively unimpeded but
[04:47] nobody wants characters just walking
[04:49] through other characters so the
[04:51] collision resolver is a new system
[04:53] currently in development that will
[04:55] temporarily shrink the physics bubble of
[04:57] ai and change to the relevant animations
[05:01] allowing them to pass through many
[05:03] situations they currently cannot
[05:07] in addition missions that require ai to
[05:10] come down from orbit and either deliver
[05:12] or pick up the player or goods often
[05:15] follow the terrain just a little too
[05:17] precisely bouncing needlessly up and
[05:20] down over obstacles far far below it
[05:23] making it look well just janky as heck
[05:26] so the ai flight path system is getting
[05:28] new features that allow for both local
[05:31] and look ahead searches to determine not
[05:33] just safe altitudes that they can reach
[05:36] their destinations with but also fly a
[05:38] more smooth and natural motion than ever
[05:41] before
[05:43] this system can also potentially be used
[05:45] to allow npcs to determine their own
[05:48] landing spots using many of the same
[05:50] size and shape and availability
[05:52] judgments the players themselves have to
[05:55] use
[05:56] and that's pretty cool
[05:59] the team is also working to improve down
[06:01] state reactions as you can see here
[06:04] where a group of actors discovers a
[06:06] fallen body
[06:08] in this case they might just rush over
[06:11] investigate and then fan out as seen
[06:13] here
[06:16] or perhaps they'll slowly approach with
[06:19] one person investigating while another
[06:21] stays behind to provide cover
[06:26] and for anyone that's ever done the
[06:27] underground facility mission
[06:29] improved response times for when their
[06:31] investigation of a fallen comrade is
[06:34] interrupted by an uncautious player
[06:37] the ai content folks have also recently
[06:39] completed a sprint on a variety of
[06:42] usables such as these vending machines
[06:45] where ai will ponder their selections
[06:48] use their moby glass to complete the
[06:50] purchase
[06:51] and even get frustrated when it doesn't
[06:53] work out
[06:59] and then you can see here the entire
[07:01] carbonated refreshment flow behavior
[07:03] where we get our drink
[07:05] return to our table
[07:08] consume our drink
[07:10] and then dispose of it in the receptacle
[07:12] where it can be properly despawned to
[07:14] preserve server performance
[07:17] [Music]
[07:20] and before we move on let's go back to
[07:23] that failed reaction from before and see
[07:25] if we can really get inside the head of
[07:27] our ai in this exact moment
[07:31] all right let's see
[07:33] think i'll go for a peach flavor today
[07:36] make my payment
[07:38] boy
[07:39] what gives
[07:41] hello mr machine man
[07:44] oy bruv give me my peaches and prawn
[07:46] delight
[07:48] well that ain't right
[07:50] hey
[07:52] make you wakey
[07:54] i ain't got time for this
[07:56] well maybe just a few minutes more
[07:59] hello
[08:02] boy this thing is really uh
[08:04] really fastened in there
[08:06] doesn't move an inch
[08:08] you know back in my day we used to move
[08:10] these things all over the stand system
[08:13] you're lucky you're not physicalized
[08:15] bruv
[08:18] all right moving along let's check in
[08:20] with the eu sandbox team and their
[08:23] continuing work fleshing out the
[08:24] derelict outposts to be found on the
[08:27] surface of pyro's planets and moons what
[08:29] you're seeing here is a white box
[08:32] traversal test the kind of work often
[08:34] done by level designers to flesh out
[08:36] aspects of the intended gameplay
[08:38] experience before artists come in and
[08:41] finish it out visually
[08:43] and as you can see here these derelict
[08:45] outposts are intended to be canvases to
[08:48] a variety of mission types and emergent
[08:51] opportunities storytelling possibilities
[08:54] and given that it's pyro maybe even some
[08:57] unavoidable pvp firefight eventualities
[09:04] and in addition to working on the
[09:05] colonialism outposts the eu sandbox 01
[09:09] team are also exploring new gameplay
[09:11] opportunities out in the farthest
[09:13] reaches of the upcoming pyro system what
[09:16] you're seeing here is some early
[09:18] pre-production work on larger scale
[09:20] points of interest to be explored
[09:22] throughout the system utilizing debris
[09:25] from capital ships or in this case
[09:28] defunct damaged or destroyed space
[09:31] stations from days gone past
[09:34] the upcoming pyro system is intended to
[09:37] be rich with a history more violent and
[09:40] conflicted than the stanton system
[09:42] you're already familiar with and without
[09:44] the efforts of mega corporations like
[09:46] arccorp hurston microtech and crusader
[09:50] keeping things relatively nice and tidy
[09:54] that means a variety of husks relics and
[09:57] otherwise aging locations to discover
[10:00] from the nearly 500 years of space
[10:03] travel and exploration that have
[10:04] occurred in this lawless frontier
[10:08] this also includes variations with
[10:10] pre-existing pathing solutions intended
[10:13] to guide players safely to their
[10:15] destination through a damaging or
[10:17] otherwise dangerous array of obstacles
[10:20] not unlike the famous coil from squadron
[10:22] 42.
[10:24] yeah they may be lawless out here but
[10:26] nobody wants to die unnecessarily
[10:29] speeding through an array of
[10:30] microasteroids or by losing hull
[10:32] integrity to corrosive agents and the
[10:34] like when making their way from one
[10:36] outpost to another
[10:38] they're outlaws but nobody likes a bad
[10:40] road trip
[10:42] and beyond just being a cool place to
[10:44] explore visually it's important these
[10:47] points of interest provide gameplay
[10:48] opportunities to players within
[10:51] as the mission system spawns its myriad
[10:53] of mission types to explore collect
[10:56] attack rescue salvage repair and more we
[11:00] also want to create environments that
[11:02] provide compelling reasons to leave your
[11:05] larger ships at the outskirts safe from
[11:07] the dangers within where a smaller craft
[11:10] would be perhaps a more tactically sound
[11:12] solution
[11:14] and if you're asking yourself
[11:16] what the heck is this place we're gonna
[11:18] talk more about what you're seeing here
[11:20] later in the year
[11:23] so what we learned this week well we got
[11:25] a glimpse at the earliest stages of
[11:27] feature iteration with a look at the
[11:29] exact same kinds of presentations given
[11:30] internally to directors to scope out
[11:32] work for the months ahead
[11:34] that the ai team continues to push the
[11:37] everyday behaviors of npcs and
[11:39] naturalistic ways in their continuing
[11:41] efforts to create an immersive
[11:42] experience for all players and that
[11:45] traveling through space looks to get
[11:46] just a little more involved and
[11:48] potentially a lot more dangerous as we
[11:51] continue along with our path to pyro
[11:53] that does it for us this week for inside
[11:55] star citizen i'm jared huckaby we'll see
[11:58] you all next week
[12:19] you

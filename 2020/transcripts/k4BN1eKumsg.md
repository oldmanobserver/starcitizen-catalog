# Inside Star Citizen: Stick the Landing | Spring 2020

**Video:** https://www.youtube.com/watch?v=k4BN1eKumsg
**Date:** 2020-06-04
**Duration:** 9:23

## Transcript

[00:03] so what sucks about the current
[00:07] implementation of Porsche carrots is
[00:09] that it's as huge coverall solution the
[00:12] environment team makes these beautiful
[00:13] cities and then we just put this red
[00:16] shader on it which kind of obscures
[00:17] everything they're kind of just in the
[00:19] way they're difficult for us to author
[00:20] there's these complicated shapes to like
[00:22] let you fly into where the landing zones
[00:24] are because we can't cut holes in it and
[00:27] so it's not so clear where the
[00:29] boundaries are and then it just kind of
[00:31] becomes this difficult mess where it's
[00:33] hard to tell where you stand with the
[00:35] restrict areas and they just they just
[00:38] look like they just don't so why do we
[00:45] need restrict areas in the first place
[00:46] well we need it to fit into the lore I
[00:49] mean like real cities and real airports
[00:51] have these restricted area spaces around
[00:54] them just to keep the place orderly and
[00:56] keep it under control so it doesn't get
[00:57] too busy so we want to recreate that and
[01:00] we also want to preserve that player
[01:02] experience of some more walking around
[01:04] in the city like you don't want you
[01:06] don't to be walking around going to
[01:07] shops and having some other player
[01:08] flying and crash into you so we can
[01:10] protect from that there's also just the
[01:13] practical reason that you know the
[01:15] environment team have created this super
[01:16] detailed city and they've done it to the
[01:19] best of their ability but for various
[01:21] reasons it's not as perfect everywhere
[01:24] and so you can make sure that you're
[01:26] seeing the city from the best light
[01:27] possible that said in 3.10 we've been
[01:31] making some changes to the system part
[01:33] of that is introducing landing splines
[01:35] which is a feature that we wanted for a
[01:37] long time the cities that will benefit
[01:40] from the landings plans are cities where
[01:41] the spaceport is right inside the city
[01:44] that's gonna be Louisville and area 18
[01:46] will have this new feature and the idea
[01:49] is that the area surrounding the
[01:52] spaceport is covered in a restricted
[01:54] area all of the time and so we don't
[01:56] have these complicated and shipped area
[01:58] meshes and then when you request landing
[02:00] permission a and an augmented reality
[02:03] path shows up in your HUD that guides
[02:07] you into the spaceport and that will
[02:09] create effectively a tunnel through the
[02:11] restrict area
[02:13] and letting you fly in and get to your
[02:16] your landing spot and the benefits that
[02:18] we get from that are quite numerous
[02:20] because now we don't need these
[02:21] complicated meshes to let you fly to the
[02:23] space for it so we can have these large
[02:25] simple meshes that don't have shader on
[02:28] and then we'll provide you with
[02:30] information through your HUD about your
[02:34] stats relating to that airspace so for
[02:37] example if you fly into the airspace
[02:38] you'll get a notification saying you've
[02:41] entered your Valero Space contact ATC to
[02:43] land and likewise if you get too low we
[02:47] can give you a message saying you know
[02:49] below you is the restrict area
[02:50] don't don't fly any lower and then as
[02:54] you get closer to the spaceport it'll
[02:55] say oh by the way you can't enter this
[02:58] area there's a restrictor in front of
[02:59] you and because these are really simple
[03:01] shapes this holds up a lot better
[03:03] because we don't need to give you this
[03:06] information to navigate a very fancy
[03:07] mesh it's just simple spheres and stuff
[03:10] and so we hope that this will make the
[03:12] experience feel a little bit more
[03:14] natural and less artificial and make it
[03:17] really feel like you're interacting with
[03:19] that airspace so that's what we've
[03:21] gotten 3.10 looking forward we're going
[03:23] to be focusing on users of the
[03:25] improvements so better communication
[03:27] telling you where your your landing spot
[03:30] is telling you where the spline is
[03:32] things like that but we're pretty happy
[03:34] with the progress we've made and so we'd
[03:37] really like to hear any feedback you
[03:39] have for the future this feature
[03:43] when an app Spectre feature is too small
[03:45] too large too early or too busy for an
[03:48] individual segment we like to pull them
[03:50] all together mix them up into a sort of
[03:52] video game gumbo throw in a dash of
[03:55] narration and a heaping pile of work in
[03:57] progress for a thing that we like to
[03:58] call the Sprint Report let's get to it
[04:02] first up is a new generalized layout and
[04:05] drag-and-drop system for building blocks
[04:07] intended to be the basis for potential
[04:09] improvements to the inventory management
[04:11] system the idea here is that each area
[04:13] can be marked as a drop target
[04:15] synchronize with external storage space
[04:18] in your backpack additional spaces on
[04:20] the chest and/or legs and the like and
[04:22] that when an item represented here in a
[04:25] variety of box sizes and shapes is moved
[04:27] from one area to the next
[04:28] they are either displayed on the
[04:30] character in the correct area or hidden
[04:32] within the backpack if placed there but
[04:34] don't get too caught up in the numbers
[04:36] or items you see here as usual any
[04:39] numbers you see here are placeholders
[04:41] designed only to prove out a concept or
[04:43] technology but it's an exciting next
[04:45] step and the further iteration of
[04:47] inventory management for players in the
[04:49] persistent universe we've previously
[04:52] highlighted work by the VFX team on
[04:54] their efforts to create a new gold
[04:56] standard for atmospheric reentry and
[04:58] we've got another update for you
[05:00] work continues using signed distance
[05:03] fields to create effects that systemic
[05:05] Lee use the speed angle and precise
[05:08] shape of a ship to create an effect that
[05:10] is both dynamic and just cool to see and
[05:13] what this latest iteration the work
[05:15] doesn't just benefit those of us who are
[05:17] flying anymore as now re-entry effects
[05:19] from other ships can be seen from as far
[05:21] away as the surface of a planet or moon
[05:23] making for an incredibly cool site up
[05:26] above as you or anyone else is working
[05:28] or exploring down below in other fire
[05:33] related news the VFX team has also been
[05:35] creating the testbed for a voxel based
[05:37] fire system seen here in a very early
[05:40] simple implementation design for
[05:42] prototyping well this will be expanded
[05:45] upon for actual implementation in the
[05:46] future this already has some very useful
[05:49] debug options designed specifically to
[05:52] test propagation in this version the
[05:55] smoke and fire spawn
[05:56] separately within a voxel while each
[05:58] voxel has its own emitters this isn't
[06:01] precisely the way we intend any final
[06:03] implementation to work but it's
[06:05] functional enough for this initial
[06:07] prototype which isn't actually designed
[06:09] to demonstrate or test the quality of
[06:11] fire but instead to determine how many
[06:13] potential propagation of flame might
[06:16] work and for those of you curious about
[06:18] how fire might look or a move with the
[06:21] gravity turned off so are we that's next
[06:24] along with proper entity based fire
[06:26] networking tests and improve propagation
[06:29] all around propagating along two
[06:31] environments first up we have these in
[06:33] progress images of a factory line
[06:35] Microtech corporation's premiere retail
[06:38] store and while there are many other
[06:40] locations throughout the galaxy the
[06:42] flagship store will be found on their
[06:44] own planet with an interior that is
[06:46] sleek simple and intended to be hip and
[06:49] designed eventually players will find
[06:51] retail shopping opportunities for
[06:53] consumer and micro tech products like
[06:55] custom mobile glass a job board and
[06:58] maybe even a service representative or
[07:00] two with missions of their own to
[07:01] fulfill we also have a look at the
[07:05] inside of the current part white box
[07:07] part rain box progress of the upcoming
[07:09] cargo decks currently scheduled to come
[07:12] online later this year as we mentioned
[07:14] in last week's player trading app
[07:16] segment future iterations will tie into
[07:18] game play here where folks will be able
[07:20] to leave things for consignment
[07:22] providing a place for the storing and
[07:24] transfer of goods for both players and
[07:26] NPCs alike cargo decks are intended to
[07:29] be placed among major trading routes or
[07:31] Lagrange points as well as in
[07:33] geostationary orbit above major landing
[07:35] zones to perform their function as both
[07:37] commercial harbours and warehouse for
[07:40] all major trade goods in the universe
[07:42] they're also expected to provide a range
[07:44] of cargo and trade related missions as
[07:47] well as those relating to trade security
[07:49] so there's a little something for
[07:51] everyone here
[07:53] finally we've got this look at work on
[07:56] the new ocean shader improvements you
[07:58] may have seen on the star citizen public
[08:00] roadmap because this has been working to
[08:02] Cepeda by the team for some time the
[08:05] changes have been made without requiring
[08:07] the reauthorization I stay on Hurston
[08:17] the ripples of the oceans actually
[08:19] reacted dynamically with the wind
[08:21] overhead becoming more turbulent or less
[08:24] to pass to us with the wind sir
[08:32] so what we learn this week well we
[08:34] learned that while necessary to serve a
[08:36] number of functions I think everybody is
[08:38] happy to revisit restricted areas and
[08:40] make them less obtrusive less ugly and
[08:42] easier to work with than ever before
[08:44] that inventory improvements are on the
[08:46] way along with a fair amount of fire and
[08:49] that new areas aren't just pretty to
[08:51] look at some come with the promise of
[08:52] new gameplay opportunities like factory
[08:54] line and cargo decks I'm gonna ask
[08:57] around about the ocean stuff for inside
[08:59] star citizen I'm Jared Huckaby we'll see
[09:02] you next week
[09:15] you

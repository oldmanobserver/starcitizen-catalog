# Inside Star Citizen: The Cargo Show | Fall 2022

**Video:** https://www.youtube.com/watch?v=pSsWaTw4n8s
**Date:** 2022-11-03
**Duration:** 11:12

## Transcript

[00:00] [Music]
[00:02] in 318 the future is bright for cargo
[00:06] for moving away from the simplistic
[00:09] implementation that we had before into
[00:11] something that's more of a real
[00:13] simulation
[00:14] with the new physicalized cargo it opens
[00:17] doors for us to give some new gameplay
[00:21] [Music]
[00:23] cargo today is pretty basic you go to a
[00:26] kiosk you use an interface you load your
[00:29] ship it automatically loads getting that
[00:31] ship you drive that ship to a port and
[00:33] then you sell what you bought but
[00:35] there's not a lot of interesting choices
[00:36] there
[00:37] with the current implementation whenever
[00:40] we designed it we did not have the
[00:43] tractor beans that we have now what that
[00:45] meant is that you're not able to pick up
[00:47] and manipulate the larger 1su boxes at
[00:51] the time all that you could do was pick
[00:53] up the smaller 1 8 Su boxes but this
[00:56] gave us a problem for piracy and looting
[00:59] in general in that the really valuable
[01:01] things are sold and bought in these 1su
[01:04] boxes and higher volumes but the only
[01:07] thing the player can actually pick up
[01:08] are the smaller ones so what we had to
[01:10] do is a kind of hack and the cargo
[01:13] system such that when a vehicle explodes
[01:16] instead of generating the larger 1su
[01:19] boxes on destruction it actually
[01:21] generates the smaller ones in this kind
[01:23] of gamey magical way so that the player
[01:26] can actually go pick up some of the
[01:28] boxes from the destruction
[01:31] all right let me give you an example
[01:34] the C2 has 696 SCU which equates to
[01:39] 5568 1 8 SCU boxes that you have to loot
[01:42] but the ship exploding should damage
[01:45] some of those boxes and we want to have
[01:47] about 40 to 50 percent survive that
[01:49] explosion so that's still about 2 000 1
[01:51] 8 Su boxes but then there's server
[01:55] performance issues to consider so what
[01:57] we've actually been doing is tapping
[01:59] that at 10 boxes being generated however
[02:03] on top of that it's an incredibly
[02:05] tedious experience because now that's if
[02:08] you were to do the math about 400 boxes
[02:10] that you have to go pick up and
[02:12] collecting all of those by hand without
[02:13] a tractor beam
[02:15] with the new system we've gotten rid of
[02:18] the 1 8 SCU cargo containers everything
[02:20] is one SCU cargo containers so in the
[02:23] case of uh the C2 with the six uh 696 Su
[02:28] that would be 696 one SCU boxes rather
[02:32] than 5000 plus every single one of those
[02:35] boxes is a real entity in the game like
[02:38] any other entity in the game it is
[02:40] tracked in the database as a persistent
[02:42] entity now that we have the new
[02:43] persistent entity streaming architecture
[02:46] and it means that now that there are
[02:48] entities that are persistent they can be
[02:50] interactable so now you can do things
[02:52] like use the tractor beams to pull them
[02:54] out of the cargo hold or put them into a
[02:56] cargo hold it also means that whenever
[02:59] we do shift destruction with the new
[03:01] system we don't have to generate
[03:02] anything instead all that we do is we
[03:04] take the entities that were already
[03:06] created and we just simply detach them
[03:08] from the cargo hold and let them float
[03:12] in space now we still want to have some
[03:14] of that explosive destruction so there's
[03:17] a certain amount of variable amount of
[03:20] that cargo that is destroyed on ship
[03:21] destruction actually giving you back
[03:23] somewhere it's actually zero to ninety
[03:25] percent uh but that's calculated every
[03:28] time your ship explodes so what happens
[03:31] then is now we're still now we're
[03:33] actually hitting that 40 to 50 number on
[03:35] average this means that both four
[03:37] players that want to reclaim the cargo
[03:39] that they lost on ship destruction or
[03:41] for pirates that want to scoop up their
[03:43] their ill-gotten gains then they'll have
[03:46] an easier time to get at it and they'll
[03:47] be more value there when they try to do
[03:49] so there's also the new commodity kiosk
[03:52] flow which is a step in the right
[03:54] direction for helping you understand
[03:55] what you're buying and what you're
[03:56] selling and what's available at the
[03:58] places where you buy and sell
[03:59] Commodities there's a new UI it's the
[04:02] new building block UI so it should be a
[04:04] lot easier to understand and gives you a
[04:06] graphical representation as you're
[04:08] buying and selling of how much space
[04:09] that you have on the ship that you're
[04:11] buying and selling into
[04:13] 318 is not the uh the end of the cargo
[04:16] refactor there's lots of stuff that
[04:18] we're you know in the design process for
[04:19] right now including manual loading and
[04:22] unloading as well as automatic loading
[04:24] and unloading
[04:25] um we're also looking at some big box
[04:27] cargo missions that separate the the
[04:30] cargo from the hauling professions so
[04:33] that's something to look forward to we
[04:35] have a lot more content coming that use
[04:37] these new features we hope you enjoy it
[04:39] in 318.
[04:41] and as a coded to all of that Chris
[04:43] Roberts actually came by my desk the
[04:45] other day and we talked a bit how it was
[04:48] unfortunate that we even have to allow
[04:50] players to lose 40 to 50 percent of the
[04:53] cargo and we talked and decided that we
[04:55] would try to come up with an interim
[04:57] Solution on our path to physicalize
[04:59] damage that would allow us to leave the
[05:02] husks of ships behind on vehicle
[05:04] destruction instead of just exploding
[05:06] them and erasing all the contents this
[05:08] would allow players to explore the ships
[05:11] and find the cargo and physically move
[05:13] it off the husks of the ships rather
[05:16] than just generating a percentage of the
[05:19] boxes on destruction
[05:21] like every other aspect of star citizens
[05:23] continuing development the cargo
[05:25] refactor isn't a one drop and it's done
[05:28] kind of feature and the first
[05:30] implementation much like persistent
[05:32] entity streaming alongside it in the
[05:33] upcoming Alpha 318 is about rebuilding
[05:36] existing functionality within an
[05:38] entirely New Foundation that will now
[05:41] set the stage for the persistent
[05:42] Universe to reach its fullest potential
[05:44] and subsequent patches to come and while
[05:47] we're here talking about new
[05:49] technologies designed to be built upon
[05:51] from one patch to the next let's chat us
[05:54] up some rastar the internal tool that
[05:56] we've been developing now that's
[05:57] currently in use placing outposts
[06:00] throughout both the Stanton and Pyro
[06:02] systems
[06:03] foreign
[06:06] is to make the thing easier for the devs
[06:09] to place location at the surface of a
[06:11] planet and in the end they will be used
[06:14] as the system for player to build their
[06:17] phases
[06:20] we have Rasta because the previous
[06:23] system based on prefab was quite uh hard
[06:27] to use and not up to scale for the for
[06:30] the scale and the scope we want for our
[06:33] planet density any changes to the
[06:36] planetary generation like for example
[06:38] you just change a canyon you add a
[06:41] canyon to the planet you'll have to
[06:42] adopt every modules at the surface of a
[06:46] planet to be sure they are well aligned
[06:48] with the new terrain and the new
[06:49] modifications of the terrain rasa makes
[06:52] that better by allowing first of all the
[06:55] ability to directly follow the
[06:58] modification of terrain topology so we
[07:00] don't have to refresh anything plus it
[07:03] gives us more granularity and modularity
[07:06] on the locations
[07:11] [Music]
[07:13] because she'd be caring about the rasta
[07:17] and all this improvements because that's
[07:19] the way we will be able to give you the
[07:23] players
[07:24] the most dense area we can imagine to
[07:28] keep in line and have all the planets
[07:30] all the moons filled with POI and things
[07:33] to do on the surface and maybe later in
[07:37] orbit of this planet and moons
[07:41] citizencon
[07:42] 2951 it changed not much in terms of
[07:46] visual mostly UI rework but features are
[07:51] all there just a lot of internal work to
[07:54] allowed the new build location to fits
[07:58] more and be more productive so now we
[08:02] can have modules and elements that are
[08:06] nested and indented so we better
[08:08] understand what depends on what and we
[08:11] also added the ability to collapse parts
[08:14] parts of the tool so
[08:15] to have a better understanding and more
[08:18] focused work on some parts of the tool
[08:20] we also worked on better tools
[08:23] Integrations so now we are able to use
[08:26] the base tools of the editors such as
[08:29] gizmos or roller bar to modify some
[08:32] elements of raster which was not
[08:34] possible previously due to some breaking
[08:38] while doing so and to keep consistency
[08:40] with the with the raster flow but with
[08:44] that changes now most of the
[08:48] in edited tools are usable with Rasta
[08:51] without any risk we also moved the
[08:54] object containers used for raster to
[08:57] streaming object containers to keep in
[08:59] line with the whole streaming process of
[09:02] the network system so now we gave the
[09:04] ability for the server to load and spawn
[09:07] and despawn some locations and elements
[09:11] at will to avoid crowding the whole
[09:15] server memory
[09:18] and we also now converted the whole
[09:22] connector system that was presented
[09:24] during the last citizen con to item
[09:27] ports
[09:28] so now again to keep in line with the
[09:31] in-house way we do things and to better
[09:36] integrate some elements such as the
[09:39] Resource Network that will later be
[09:41] available on their locations
[09:44] I'm quite happy with the result of rasta
[09:46] there is quite some work to do on it
[09:50] but the result is surmising and I'm
[09:52] pretty sure you're gonna love the
[09:54] location where you will roll out with
[09:56] Rasta
[09:57] [Music]
[10:00] so what did we learn this week well we
[10:02] learned that the cargo Factor will
[10:04] physicalize the manner in which we
[10:05] transport Goods in such a way that makes
[10:07] retrieval after disaster or collection
[10:10] after piracy easier and more rewarding
[10:12] than ever before that it's the new
[10:15] foundation for an entirely new trade
[10:17] experience that will continue to develop
[10:19] over subsequent patches that it may yet
[10:21] have some fortunate side effects on
[10:23] vehicle destruction ship husks and
[10:25] Salvage in the not too distant future
[10:27] and that the rastar tool first
[10:29] introduced a last year's citizen gun is
[10:31] already being used to populate the
[10:33] planets of pyro in next year's 4.0 and
[10:36] Stanton in this December's upcoming
[10:38] Alpha 318. now don't forget that this
[10:40] year's Intergalactic Aerospace Expo is
[10:42] right around the corner you can go to
[10:44] the robertspace industries.com website
[10:46] to find out all the details for inside
[10:48] Star Citizen I'm Jared Huckabee we'll
[10:50] see you all here next week
[10:54] foreign

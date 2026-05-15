# Inside Star Citizen: Plan and Scan | Spring 2021

**Video:** https://www.youtube.com/watch?v=clmYOcBhLMs
**Date:** 2021-05-07
**Duration:** 12:03

## Transcript

[00:07] we actually have three terms in our
[00:08] system we have
[00:10] radar we have ping and we have scanning
[00:13] radar is in a sense your passive
[00:15] detection that is i'm flying around
[00:17] things pop up on my radar and i can see
[00:19] them then you have ping
[00:21] where you have to physically hit a
[00:23] button basically pulsates a ping
[00:26] out into the world and i can see things
[00:27] much further out
[00:30] scanning is the layer where once you see
[00:33] an object
[00:34] you can scan it and retrieve information
[00:36] on it
[00:39] what i like about the current
[00:40] implementation of radar is the dynamic
[00:43] signatures
[00:44] they fluctuate in and out depending upon
[00:46] what you're doing
[00:48] and because of that you could actually
[00:49] go into your like ui
[00:51] and see your ir and em fluctuate that
[00:54] flexibility
[00:55] is really cool because you could turn on
[00:57] and off stuff and that changes your
[00:59] signature and your strength
[01:00] and how far someone can see you
[01:04] something we don't like is the uh the
[01:07] absence of any
[01:08] information about how well you're
[01:11] detectable
[01:12] by either other players or ai at the
[01:14] moment
[01:17] for the current implementation of the
[01:18] scanner it's really awesome to be able
[01:21] to scan
[01:21] ships right now and see if they have any
[01:24] cargo especially with the lost system we
[01:27] could determine if they have any illegal
[01:29] cargo
[01:29] it opens up immersion gameplay where i
[01:31] could fly around scan some things and go
[01:33] oh
[01:34] that guy has some illegal things should
[01:36] i be nefarious and
[01:37] try to steal them or should i try to
[01:39] shoot him and give him a warning
[01:42] we want to improve the ping system so
[01:44] that it gives you like a rough idea of
[01:46] hey there might be some ships
[01:47] maybe some bounties that you might want
[01:50] to go after
[01:51] and because we'll give you that info uh
[01:54] at a further distance
[01:56] it really allows you to make some uh
[01:58] against player agency and
[02:00] allows you to determine whether you want
[02:01] to even investigate it or not
[02:03] or you want to look in a different
[02:04] direction so that's kind of how our
[02:07] existing system
[02:08] works um you know there's things that
[02:09] were we really really like and of course
[02:12] there's things that we want to improve
[02:13] on and even flush out even further
[02:16] and that's exactly where this new work
[02:18] comes into play
[02:20] with the new radar we've tweaked how
[02:23] things get detected
[02:24] so it's no longer two spheres colliding
[02:27] it's just
[02:28] to put it simply if your signature is
[02:30] overlapping with somebody they're going
[02:31] to see you
[02:32] one thing we want to prove is to make
[02:34] sure that we get proper query feedback
[02:35] so
[02:36] you know that if you're in a very high
[02:38] ambient
[02:40] signature area like a gas cloud it could
[02:42] be hidden
[02:43] and therefore make better use of the
[02:44] spaces that we provide in the universe
[02:50] sean tracy liked the idea of you know if
[02:52] you have a bunch of capital ships
[02:54] and a couple frigates that maybe you
[02:56] can't see
[02:58] some of those smaller ships what happens
[03:00] if we had that moment where you could
[03:01] have
[03:02] some ships hide within the bigger ships
[03:05] so when you're far away you're like okay
[03:07] there's an idris maybe i could take it
[03:08] out you get a little bit closer you
[03:10] realize that there's a whole
[03:11] fleet so it's going with that balance of
[03:14] how do we hide things and how do we show
[03:17] things so that we can get big amazing
[03:19] moments and even stealth gameplay
[03:22] so with scanning uh we want to increase
[03:23] the granularity of the information you
[03:25] get from scanning so
[03:27] pilot the other players or ai that
[03:30] are going to be on the ship um what type
[03:32] of hormone it has when it's carrying its
[03:34] cargo
[03:35] going back to the other example with the
[03:36] idris with a bunch of ships out there
[03:38] you can scan it and go
[03:40] i know that's a ship what ship is it i
[03:42] scan from afar and go oh it's an idris
[03:44] cool i don't see anybody else because i
[03:46] have to get closer you get closer and
[03:48] you start seeing other contacts pop up
[03:50] you can take a deeper dive into what the
[03:53] contents of that ship are so before
[03:56] you're too far
[03:57] back and you're like okay that's an
[03:58] idris now you're close up and go oh
[04:00] that's an idris with a
[04:02] gigantic gatling gun that shoots auroras
[04:05] doesn't exist but i like to pretend it
[04:07] does
[04:08] also we want to expose more interesting
[04:11] information
[04:12] we want to let you know that there's a
[04:14] wanted person on board we want to let
[04:15] you know
[04:16] that maybe there's some volatile cargo
[04:18] on board we want to let you know that
[04:19] there's something interesting
[04:21] relative to your specialization of the
[04:23] ship it also
[04:25] unlocks more stuff for the designers to
[04:28] say
[04:29] this type of scanner is going to be more
[04:30] for medical use this type of scanner is
[04:32] going to be more
[04:33] for criminality or something like that
[04:36] what we're doing with ping is uh for the
[04:38] first time we're going to actually allow
[04:40] you to
[04:40] not only get the blob information which
[04:42] gives you the rough
[04:44] uh you know direction and size of the
[04:47] entities that may be contained within
[04:49] the blob so it gives you like
[04:50] a rough area of where you might want to
[04:52] investigate but
[04:54] if the signatures are high enough then
[04:56] you can actually scan the contents of
[04:57] that blob
[04:58] which is something we weren't able to do
[05:00] before you won't see a lot of these
[05:02] things
[05:02] happen all the same time it opens up the
[05:05] doors so that we could push things in
[05:07] through patches and through waves what
[05:09] we're looking for is a
[05:11] fun player experience for finding things
[05:14] ultimately players want to be able to
[05:18] look out in the best into space and then
[05:20] determine hey
[05:22] this is something interesting that i
[05:23] want to do and this is the direction i
[05:25] need to go to
[05:26] go experience that that fun thing um
[05:30] that's what we're working toward as part
[05:32] of our road to invictus
[05:34] this brief primer on the future of radar
[05:36] and scanning demonstrates an essential
[05:38] component in creating a dynamic and
[05:41] engaging sense of exploration
[05:44] and danger for spacecraft in the
[05:46] persistent universe in squadron 42 alike
[05:49] and we're going to learn more about how
[05:50] it all works tomorrow on star citizen
[05:53] live when sean tracy and members of the
[05:55] vehicle tech team
[05:56] join us to answer your questions live
[05:59] but up next
[06:00] it's that time let's jump into another
[06:02] sprint report
[06:06] up first let's take a look at some
[06:08] recent progress on hospitals
[06:10] starting with these myriad hospital
[06:12] props like
[06:13] tables for the waiting area and medical
[06:16] trolleys you can expect to see rolling
[06:18] through the hallways
[06:19] there was even a recent concept for this
[06:21] high-tech gurney
[06:23] and when i think about the the push-pull
[06:25] possibilities here
[06:26] it reminds me of the first time i was
[06:28] kicked out of a hospital
[06:30] and the second the team also progressed
[06:34] on the gray box for new babbage's
[06:36] emergency drop-off hangar
[06:38] which needs to be cleaned up a little
[06:40] bit
[06:42] one of the various medical rooms the
[06:45] exterior vistas outside the windows
[06:49] and then dropping in some placeholder
[06:51] signage as guides
[06:52] for other artists when it comes time to
[06:54] really dress this place up
[06:57] in addition to the first pass signage
[06:59] first pass greenery has begun
[07:01] and the thinking is already that we need
[07:03] much more verticality with the plants
[07:05] so they'll be trying that next there's
[07:08] also a look at the gray box nurses
[07:10] station in the ward area
[07:11] the team is currently thinking that this
[07:13] will be the first area taken to final
[07:15] art
[07:15] so that it serves as visual guidance for
[07:17] the remaining sections
[07:19] of brentworth hospital ores in general
[07:22] is also coming to the end of gray box
[07:24] with this look at the lobby
[07:26] assurance booths and other areas we're
[07:29] gonna we're gonna let you discover for
[07:31] yourself
[07:32] when auras in general here enters final
[07:34] art we expect to see much more of the
[07:37] glass and special lighting effects you
[07:39] saw
[07:39] in our look at the commercial platform
[07:41] arcade last quarter
[07:44] heading now to outer space some of our
[07:46] space gaping artists created some
[07:48] early warm-up tests for the creation of
[07:51] gas
[07:51] clouds that will encompass the jump
[07:53] point from stanton to pyro
[07:55] beginning with the work already created
[07:57] for citizencon 2949
[07:59] it needed to be updated with all the new
[08:02] technical advancements made since then
[08:04] and better extrapolated out into
[08:06] three-dimensional space
[08:08] so that it can be approached from any
[08:09] direction
[08:11] we've not quite got back that beautiful
[08:13] butterfly shape we had
[08:15] but we'll be checking in again later as
[08:17] it further progresses
[08:21] those who have already jumped into alpha
[08:23] 313-1
[08:24] currently available on the public test
[08:26] universe know that
[08:27] ship the station docking is coming along
[08:29] with invictus launch week later this
[08:31] month
[08:33] and here you can see some of the final
[08:35] lighting passes being done for the
[08:36] various rest stop
[08:38] and security station docking areas now i
[08:40] haven't seen this yet
[08:41] so i'm just gonna watch along with you
[08:54] oh that's cool
[09:14] oh yeah
[09:19] following up on some of the armor
[09:20] concepts we saw last week
[09:22] here's a look at the high heat refinery
[09:24] worker that's currently making its way
[09:26] through the character pipeline
[09:28] the text branding you're seeing here is
[09:29] modular so it can represent
[09:31] any company that's appropriate for the
[09:33] location at hand
[09:35] as is the helmet with multiple
[09:37] variations to add variety to the npcs
[09:40] milling about
[09:41] and because it was important not to have
[09:43] any exposed skin in an environment as
[09:45] hot as this
[09:46] there's also a neat way to access the
[09:48] mobi glass so they can still check their
[09:50] messages when needed
[09:52] and last week subscribers got their
[09:54] first look at new armor from tehachapi
[09:57] a brand new small-scale manufacturer
[10:00] that has burst onto the scene
[10:01] and begun taking the markets by storm
[10:04] now you can learn more about this new
[10:06] manufacturer and their offerings in the
[10:08] latest edition of jump point magazine
[10:12] [Music]
[10:14] finally let's take another look at the
[10:16] habitation platform of orizon
[10:18] the upcoming landing zone for the gas
[10:20] giant crusader
[10:24] we definitely want to preserve the full
[10:26] reveal of everything that makes up this
[10:28] amazing landing zone
[10:30] for when you first visited in game i
[10:33] think we can maybe share this brief
[10:35] sprint on updating the cypress trees
[10:37] that will find their way throughout the
[10:39] [Music]
[10:44] platform
[10:51] and finally back to the hab rooms
[10:52] themselves a much requested feature
[10:55] many of the rooms come with windows to
[10:57] the outside world
[11:01] so what did we learn this week well we
[11:03] learned that the next evolution of radar
[11:05] and scanning
[11:06] aims to put systemic tools in the hands
[11:08] of our designers
[11:10] to enable the exploration and discovery
[11:12] of more than just spacecraft
[11:14] and vehicles that hospitals are still
[11:16] the harbinger of new medical gameplay
[11:18] scheduled to come online in alpha 314
[11:21] and that before all that happens
[11:23] we're on the road to invictus with the
[11:25] upcoming edition of ship to station
[11:27] docking
[11:27] and all the potential that brings here
[11:30] there
[11:30] might even be a capital-sized tour
[11:33] coming
[11:35] check out the schedule on the rsi
[11:36] website if you haven't already
[11:38] for inside star citizen i'm jared
[11:40] huckaby we'll see you all next week
[12:02] you

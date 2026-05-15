# 10 for the Developers: Episode 08

**Video:** https://www.youtube.com/watch?v=j02lrXo3fXA
**Date:** 2016-05-03
**Duration:** 43:45

## Transcript

[00:00] [Music]
[00:14] [Music]
[00:26] hey how's it going everybody uh thanks
[00:27] for joining uh myself for Stefan uh CG
[00:31] supervisor and Sean Tracy Tech director
[00:34] Tech Conta director director of tech
[00:37] content director all things technical um
[00:39] so U he's going to help us answer help
[00:42] me answer some questions CU we' got some
[00:44] great questions this week um i' like to
[00:46] thank the uh
[00:48] subscribers uh for making this show
[00:50] possible um because without you all uh
[00:53] there would have nothing there'd be
[00:55] nothing for us to work on no no and we
[00:57] wouldn't have this awesome platform to
[00:59] to speak and explain and all the stuff
[01:00] that we're doing behind the scenes to
[01:02] give them the uh best an ever and to
[01:05] give progress on where we're at because
[01:06] there's so many things and so many
[01:08] moving Parts happening at all the time
[01:09] oh right all right well I'm going to go
[01:11] ahead and get started our first question
[01:13] is Daz given that procedural planets oh
[01:16] awesome topic given that procedural
[01:18] planets are generated from a seed if we
[01:20] go down to a planet and mine a location
[01:23] and it becomes depleted what happens
[01:26] after we leave and this is a two-parter
[01:29] is the planet permanently altered or
[01:31] would that location regenerate creating
[01:33] an area that we can constantly go back
[01:35] to and exploit well it's an awesome
[01:38] question and uh first things first just
[01:40] wanted to explain because I I tend to um
[01:43] end up answering a lot of questions
[01:44] related to the procedural Planet stuff
[01:46] but the the big brains that are really
[01:49] working on the procedural Planet
[01:50] technology Are all uh within Frankfurt
[01:53] so uh guys like Marco corbetta uh Carson
[01:56] wiel Sasha hoba um Pascal Mueller uh
[01:59] they're all working pretty much
[02:01] full-time on the procedural planets now
[02:03] we get a lot of oversight on them we've
[02:05] got to blend them into the game uh where
[02:06] they're working on the tech so um just
[02:09] consider that uh when I answer any
[02:10] questions regarding it is that yeah I'm
[02:12] I'm trying to represent as best as I can
[02:14] we just get to play with it right but
[02:16] they're really they're driving all the
[02:17] tuch that's right they're driving
[02:18] everything that goes through so to get
[02:21] to the actual question um it's a really
[02:24] good question because yes the planets
[02:26] are generated from a seed but consider
[02:28] that our game is multiplayer um we can't
[02:30] generate a different seed for every
[02:32] single player that goes down to the
[02:33] planet so um me and Forest can't be
[02:36] flying towards a planet he sees a
[02:37] mountain I don't see a mountain I end up
[02:39] flying through it or whatever um so
[02:42] that's got to already be kind of set in
[02:44] stone so when we generate this planet
[02:46] originally um as a developer yes we will
[02:49] have a seed um but once you see it as a
[02:51] player you're always going to see the
[02:53] same thing now when it comes down to
[02:55] actually permanently altering the
[02:57] surface of it what's likely to happen is
[02:59] is that uh when we do do mining it's
[03:01] going to be an it's going to be another
[03:03] object on top of the planet it's not
[03:05] going to be the planet itself um so no
[03:08] you probably won't alter the actual
[03:10] Planet geometry itself or or any of the
[03:13] seats related to it but you'll alter a
[03:15] different object that's actually placed
[03:16] on top of the planet so just to give a
[03:18] you know really out there example you've
[03:20] got a big block of ice right that big
[03:22] block of ice is sitting there on the
[03:23] planet you fly down you're mining water
[03:26] out of the ice let's say that ice
[03:28] disappears now the question is will that
[03:31] ice then regenerate well it's it's a
[03:33] design question it's really going to be
[03:34] up to the designers there's no technical
[03:36] reason why it can't uh but likely what's
[03:39] going to be happening is that we've got
[03:40] an area of ice right there's going to be
[03:42] a certain number of minerals within a
[03:44] certain uh pretty large area um and
[03:47] you're not going to get the exact same
[03:48] ice blocking the exact that's where the
[03:50] seed kicks in right so it's not you know
[03:52] you get the initial Planet generated but
[03:54] then the objects on the planet that
[03:55] you're Mining and stuff maybe those have
[03:57] you know multiple seeds so when it
[03:59] regenerates itself if it regenerates
[04:01] itself which I why not that would be
[04:03] kind of and that's something that we
[04:04] want to control because it's really
[04:06] important that we control the
[04:07] Commodities within our world economics
[04:10] of the whole thing exactly so you know
[04:12] it's kind of a long answer to whether it
[04:14] regenerates or not I would say no it
[04:16] doesn't actually regenerate but it will
[04:18] be somewhere else um but the seeds are
[04:20] all shared so everybody will see the
[04:22] same thing exactly awesome all right um
[04:26] tranon asks are there any new animations
[04:29] or physic effects that you have been
[04:31] working on and the challenges that you
[04:33] have encountered there's so much right
[04:35] there's so much to do with animations
[04:37] and physics together um It's A system
[04:40] that is completely interwoven um Evo
[04:42] herzeg does a lot of work on this
[04:44] particular system as well as a gentleman
[04:46] by the name of Chris reain so um what
[04:49] we've been working on constantly is the
[04:52] uh Zerg um driven ragd doll kind of
[04:55] Technology um this is pretty unique uh
[04:57] to our game um and and The Driven ragd
[05:00] doll itself isn't unique but the
[05:02] transition between like an animated
[05:04] character to driven ragd doll back and
[05:06] forth and back and forth and going
[05:07] within physics grid and things like this
[05:09] um there's a lot of problems uh and a
[05:11] lot of challenges that that brings um it
[05:14] might not be super obvious to the
[05:16] players that we are that we are working
[05:17] on things within there because from what
[05:19] they see oh yeah it all works um but
[05:21] there's little things that we want to
[05:22] fix uh within
[05:24] that so um the other uh the other sort
[05:26] of portion of this that's that's been
[05:28] very tricky actually to be working on is
[05:31] the uh skeleton extension portion of
[05:33] this so has a little bit to do with the
[05:35] new item Port system but what happens
[05:38] with the new item Port system is that um
[05:39] you start as a base skeleton and then
[05:41] you add on let's say a head or a helmet
[05:44] um and that skeleton actually extends so
[05:46] we have a skeleton within the head um
[05:48] that has a shared root and then that
[05:50] actually extends into um as the base
[05:53] skeleton um then we just deal with it as
[05:56] a as a normal character so what's tricky
[05:58] about that is that we've got to figure
[06:00] out a way and and and we've worked on it
[06:01] quite a bit uh last week before Evo uh
[06:04] went on holidays um to rebuild that
[06:07] physic skeleton without completely
[06:08] rebuilding it because it's one of the
[06:10] things that takes the longest time on
[06:11] the on the CPU and then thus to be um uh
[06:14] synchronized to all the players so uh
[06:17] yeah that's kind of what we're working
[06:18] on within there uh we want that driven
[06:20] ragal to be affected we want um as we
[06:23] add different skeleton extensions on to
[06:25] extend the skeleton physically as well
[06:27] there's just so much to think about I
[06:28] mean you know you're one physics
[06:30] environment then when you enter a ship
[06:31] you enter another physics environment
[06:33] right then what happens if you're ragd
[06:34] doing from one physics environment into
[06:36] the next physics environment and then
[06:37] you betweene back into your regular
[06:38] animation right so exactly there just so
[06:40] much to the relative space of that moves
[06:42] so often like we have a world space then
[06:44] we have the local grid space then we
[06:46] have a Zone space um so yeah there's a
[06:48] lot of transitioning between different
[06:50] uh we call them partitioning grids right
[06:52] it's just so cool though yep all right
[06:54] uh next question the uh Orion mining
[06:58] ship has a large laser for dissecting
[07:01] asteroids into smaller chunks everyone's
[07:04] I mean mining is just super cool
[07:06] dissecting asteroids that's a good way
[07:07] to put it dissect cuz you're like
[07:09] getting getting inside how do you
[07:11] implement a continuous beam weapon like
[07:13] that is it mostly animation while using
[07:15] a ultra high rate of fire and ultra low
[07:18] DPS or is it an actual beam uh this is
[07:22] actually a really really good question
[07:23] and this um this comes up a lot in games
[07:27] actually when you're going to have
[07:28] something like a like a P laser that's
[07:30] that's really just a glorified machine
[07:32] gun or if you have a beam laser weapon
[07:35] and as everybody knows we don't really
[07:37] have a beam weapon uh within Star
[07:39] Citizen yet um we solved this problem on
[07:43] an earlier project that I had worked on
[07:44] a little modic project called Mech warar
[07:46] Living Legends um we had um they weren't
[07:49] they weren't continuous beams but they
[07:50] were they were there for quite some time
[07:52] so the problems you've got to solve um
[07:54] is not necessarily having having a long
[07:57] beam because we have different levels of
[07:59] casting that we can do but continuous
[08:01] segments where you know where to break
[08:03] the beam so you know where it stops when
[08:04] a ray cast we got to we've got to show
[08:06] it somehow right it's got to we've got
[08:08] to be able to one author the geometry so
[08:11] it looks good um and then second we've
[08:13] got to be able to uh change the length
[08:15] of that geometry now does it make sense
[08:17] to have one piece of geometry that just
[08:19] draws until two km long well think of
[08:21] the bounding box of something like this
[08:22] right so that's going to call out as
[08:23] soon as you look away and things like
[08:25] that so that doesn't really work out
[08:26] well so what we did on the mear project
[08:28] was we actually had little segments just
[08:31] kep stacking on top throughout and then
[08:33] stack on top but then you've got other
[08:35] problems with that um that comes to do
[08:37] with draw calls so you've got one object
[08:39] two draw calls another object two draw
[08:42] two objects another draw call and if
[08:44] you've got 2,000 or something yeah what
[08:46] happens exactly so the best way to do
[08:48] something like this is not necessarily
[08:49] to have like a uh uh uh like a really a
[08:53] continuous rate of fire um is to do that
[08:55] Ray cast you do that Ray check um every
[08:58] couple second every every couple
[08:59] milliseconds anyways not every frame um
[09:02] because there's no reason really to do
[09:03] it every frame um but to actually extend
[09:05] those verts you control the verts on the
[09:08] effect itself so that it does the exact
[09:10] same length of that Ray and then you
[09:11] grab those few verts and you move it
[09:13] back move it forward move back kind of
[09:14] Arty how our projectile system works
[09:17] currently for those that don't know in
[09:18] the original trailer I made a bunch of
[09:20] particle effects and then and I gave
[09:22] them damage and they physics and all
[09:23] that stuff but once we actually um you
[09:27] know came out Arena commander and needed
[09:28] a more sophisticated solution to support
[09:30] you know networking and all this stuff
[09:31] right uh we actually decided to switch
[09:34] from just a a particle effect over to a
[09:36] cylinder a capsule right and then that
[09:38] capsule would draw and Shrink depending
[09:40] on you know its velocity and all these
[09:43] all these effects and then we would
[09:44] attach it a particle effect on top of
[09:46] that including uh with an additional
[09:49] glow Shader so we rendered the capsule
[09:51] as this type of glow which we have all
[09:52] these Shader effects on it and then we
[09:53] could also attach a particle effect on
[09:55] top of that for additional effects and
[09:57] then the verts actually can move and
[09:58] stuff so
[10:00] um that's going to be a super fun uh
[10:02] it's going to be NE looking forward and
[10:04] actually what's really cool is that
[10:05] we've already got all the all the um uh
[10:09] the actual weapon fire the weapon type
[10:11] uh we've got that all in place all the
[10:13] code in place it's just really a matter
[10:14] of having the visuals uh that that that
[10:17] come alongside it um you know there'll
[10:19] be cool things like um when we have um
[10:22] um scrap or U when you're trying to
[10:25] actually pull out you know minerals and
[10:26] things like that from a ship uh when
[10:28] you're trying to get uh we're calling it
[10:30] scrap I think or something like this um
[10:32] but we're going to need a beam weapon
[10:33] for that we're going to need some sort
[10:34] of beam uh for repair we're going to
[10:36] need some sort of Beam for mining um uh
[10:39] so we need these beams anyways and again
[10:41] the the game code is pretty much done
[10:42] for that we just need uh we just need a
[10:44] nice effect um so that's kind of next
[10:46] upep for some of the VFX guys all right
[10:48] yeah so that's going to be uh I'm
[10:49] looking forward to seeing what the the
[10:51] team comes up with that one cuz uh we're
[10:53] getting close I think yeah definitely
[10:55] will planets uh oh was a good one will
[10:58] planets have variant biomes and or
[11:02] weather regions or will each planet be
[11:04] uniform do you think current procedural
[11:07] Tech will be capable of generating Flora
[11:10] which is like plants right uh and Faun
[11:14] which is animals living living things at
[11:17] a Fidelity close enough to Art you are
[11:21] producing that's a great question so
[11:23] there's actually two questions within
[11:24] here right so the first one that I want
[11:26] to I want to deal with is Will planets
[11:28] have VAR B
[11:29] of course we have to I mean otherwise
[11:31] you're going to end up with planets that
[11:33] all look rocky planets that all look
[11:35] Frozen planets that all look and we've
[11:37] got some of the best um um atmosphere
[11:40] technology that I've ever seen um it's
[11:43] it's it's absolutely phenomenal um we've
[11:46] got uh I don't know how much we're we're
[11:47] talking about this yet but we've solved
[11:50] all kinds of lighting um uh challenges
[11:54] let's say so things like GI on the
[11:56] planets um there's a there's there's
[11:59] there's some good Solutions already in
[12:00] place so I don't see any reason why we
[12:03] wouldn't have variant biomes um now if
[12:05] he's talking about variant biomes within
[12:07] the planet itself so you've got a planet
[12:10] up north is going to be the polar ice
[12:11] caps on the south is is going to be
[12:13] polar ice caps but in the middle does it
[12:15] get like absolutely there's no reason
[12:17] why we can't do this weather regions is
[12:20] a bit of a different story um that's a
[12:21] lot harder because um sure we can do all
[12:25] all levels of code we know where you are
[12:27] on the planet we know what sector you're
[12:28] in um um what's around you but how do we
[12:32] communicate that over to the player and
[12:34] how deep do you go with the design you
[12:35] have it where when you go to that
[12:36] location it's always raining or do you
[12:38] do it where there's actually some kind
[12:39] of weather happening I mean so I think
[12:41] there's a lot of uh things to solve with
[12:44] the with the weather give you an idea
[12:45] these are the things we're thinking
[12:46] about so the Fidelity of our planets are
[12:48] going to be such that you've not seen
[12:50] this before um there's no question
[12:52] absolutely I'm now whether you have
[12:54] moving weather and things like that on
[12:55] it it's a problem that we're not yet
[12:57] ready to to solve and they're already
[12:59] taking a look at it so things like U
[13:01] volumetric clouds and all this kind of
[13:02] stuff um but to have moving weather
[13:05] patterns and things like that within the
[13:06] planets uh that'll be something for
[13:08] another time I think um but I do think
[13:10] that that's going to be one of the one
[13:11] of the pieces we want to do um I I think
[13:14] it'll be amazing so the second piece of
[13:16] this question is
[13:18] um do I think that the current
[13:19] procedural Tech will be capable of
[13:21] generating the Flor and fauna at the
[13:23] Fidelity that we are um yeah absolutely
[13:25] that's the goal the art is still making
[13:27] the asset so the Fidelity will be
[13:30] it's just a matter of this procedural
[13:31] Tech deciding to poate the plants and
[13:35] the animals right but I don't see any
[13:37] reason that we can't have the same
[13:38] visual Fidelity that we have for the
[13:39] rest of the game and and that's that's
[13:41] the drive that's the direction right and
[13:43] and all of us had worked on we've all
[13:45] worked on uh you know little levels that
[13:47] have been hand authored so much and our
[13:49] goal with this whole system is to be
[13:51] able to make an entire world at that
[13:54] same level of fidelity right um we want
[13:57] to have um you know trees that look like
[14:00] Crisis we want to have we want to have
[14:02] um um animals and things like that
[14:04] within them um absolutely we want them
[14:07] to be at that exact same Fidelity and do
[14:09] I think it's possible absolutely with
[14:11] most of the stuff that we've seen in the
[14:12] last little while absolutely just have
[14:15] to be smart about how you author your
[14:16] art and as long as you go for you know a
[14:18] very technical practical approach and
[14:21] optimized approach I think uh it's
[14:23] really quite no and that's it and to be
[14:26] honest too U the other thing with it is
[14:28] that you know generating um um forests
[14:31] trees uh even animals and things like
[14:33] that and getting them all placed on the
[14:34] planet is difficult yes but there's
[14:37] harder types of planets to do one of the
[14:39] more one of the more difficult and
[14:40] you've worked on things around this um
[14:42] is like a procedural City type Planet so
[14:45] what what then do we do and how do we
[14:48] keep that Fidelity for a planet that's
[14:50] covered in an entire city um that's a
[14:53] lot trickier um I think anyways yeah
[14:56] well you know it's just AAG you make
[14:58] everything as modulars possible and then
[15:00] you could you know who knows what you
[15:01] can do right exactly um with the right
[15:03] gameplay code so I hope that answer the
[15:04] question I know we're being a bit obtuse
[15:06] um but it's only because we
[15:08] haven't yeah yeah and they're all you
[15:11] know they're happening it's it's it's
[15:13] all a moving product um all right now
[15:16] we're going to get to a more difficult
[15:18] uh question and a long one so stay with
[15:20] me with localized physics grids being in
[15:22] the game have you considered using them
[15:24] uh for more unorthodox means oh that's
[15:27] cool for example spaceships are stations
[15:29] with varing directions of gravity all of
[15:32] a sudden I think A Space Odyssey you
[15:34] know when you're like the EXA um I'd be
[15:36] thinking of something like circular
[15:38] space stations or space stations where
[15:39] the ground just continues up a wall uh
[15:42] Inception style or spaceships where one
[15:44] uh one deck and uh the direction of
[15:46] gravity would Point outwards so the hall
[15:49] would act as the floor how cool would it
[15:51] be to look up and see people hanging
[15:53] from the ceiling doing their normal
[15:54] business speaking of circular gravity
[15:57] are planets going to be basically
[15:59] enormous localized physics grids or is
[16:02] there more to them if so can you explain
[16:04] a bit about how they are going to work
[16:06] in that regard all right so these guys
[16:08] are always sneaking two questions in
[16:10] aren't they there's always like a
[16:12] there's there's like a main one oh but
[16:14] by the way 20 for theed Planet something
[16:16] right well it's such a co question and
[16:18] you can see why it spawns more questions
[16:19] yeah I'm super happy uh um that
[16:21] everybody's so into into the planets
[16:23] because that's going to be such a huge
[16:25] unique point to Star Citizen anyways um
[16:28] so the first question question really is
[16:29] about localized physics grids and using
[16:31] them in a more unorthodox way uh we've
[16:34] done this internally a lot actually uh
[16:36] you can have a lot of fun with the
[16:37] physics grids um doing a circular space
[16:39] station is very much possible um so that
[16:41] way you can have a localized direction
[16:43] of gravity all throughout the localized
[16:45] physics grid which is quite cool the
[16:46] other thing again this is something that
[16:48] Chris Rain had worked a lot on um is
[16:50] that we've got a sparse voxal
[16:51] representation of the physics grid
[16:53] meaning uh we can shape it how we want
[16:55] um so we do give we we give the system a
[16:58] model gets as close as possible to this
[17:00] particular piece of geometry now uh the
[17:02] higher poy that geometry is the more
[17:04] expensive uh the more difficult that
[17:05] check is to make um but absolutely we've
[17:08] done this kind of stuff internally we've
[17:10] even messed with uh you know magnetic
[17:12] boots grab boots y so so and I think we
[17:15] actually took them out of the build for
[17:16] a little while just because the
[17:17] animations look so weird on them um but
[17:20] we'll be putting those right back in so
[17:22] not only will you have the localized
[17:23] physics rate of say just like he's
[17:25] talking about like a like a circular
[17:27] space station or something like this but
[17:29] you'll also be able to uh uh
[17:30] magnetically connect yourself via your
[17:33] mag boots or whatever which is probably
[17:34] super helpful on the outside of the ship
[17:36] right to get around especially for the
[17:38] bigger ships sure totally um and it's
[17:40] also kind of fun I mean it's it's a neat
[17:41] thing to mess around with just like he
[17:43] says you know somebody's just going
[17:44] about their day-to-day business and
[17:45] they're hanging upside down from you or
[17:47] something like this um but yeah that
[17:48] technology lets us do all that all this
[17:50] kind of work um and then speaking of
[17:53] circular gravities are planets going to
[17:55] be basically enormous localized physical
[17:56] grids or is there a lot is there
[17:58] something more to them there's a lot
[18:00] more um to the planets one of the one of
[18:03] the tricky Parts again um and I think I
[18:05] talked about this in another tend for
[18:07] the developers is that we can't possibly
[18:10] store every single um um piece of
[18:12] physics Collision on the server all the
[18:14] time right so this is something that
[18:16] we've got to generate at at on the
[18:18] client side at runtime somehow um so
[18:21] they're not big physics grids
[18:22] essentially um they've got to
[18:25] have they they have their own gravity
[18:28] it's completely implemented
[18:29] independently of a physics grid uses the
[18:31] same concept I suppose uh but it's not a
[18:34] physics grid um entirely it' be far too
[18:37] large um and uh yeah it's not even close
[18:40] to as granular as as what we it's
[18:42] different than what when you enter a
[18:43] ship for example right where you set up
[18:45] your your box it's very very different
[18:47] and again like if you think about it
[18:49] right you've got a you've got a very
[18:51] different shape you've got a sphere and
[18:53] everything's got to be a a local gravity
[18:56] to to the center of the sphere whereas
[18:57] in a local physics
[19:00] or you
[19:01] can and then everything is just going
[19:04] that direction but uh yeah it's a little
[19:06] bit more difficult to do on a uh on a
[19:08] planetary scale but it's not a big
[19:09] physics grid um it's a it's a lot it's
[19:12] and not to not to be condescending at
[19:14] all it's a lot more complicated
[19:15] unfortunately than that um I wish it was
[19:17] easy is enough as just making a big
[19:19] physics grid um but that wouldn't really
[19:21] work for what we need definitely not all
[19:23] right um what sort of navigation can we
[19:27] expect for planets Maps GPS beacons uh
[19:30] and that's asked by armored uh citizen
[19:33] um that's a cool name I'd imagine
[19:36] probably all the above right yeah we're
[19:38] going to need all the above like um and
[19:39] I consider sort of maps and GPS kind of
[19:41] the same sort of thing GPS is just a
[19:43] function within a map yeah right so it's
[19:45] just telling you where you are within
[19:46] these Maps uh beacons absolutely so so
[19:49] you guys get an idea we're working on
[19:50] all the gameplay related to this so the
[19:52] first step of that gameplay and it's
[19:53] something that I showed in the
[19:54] procedural planic Tech demo um is the
[19:57] approach I mean uh if if Landing is
[19:59] going to take you 30 35 minutes uh
[20:02] because I mean we looked up how long an
[20:04] actual transition between uh for Earth
[20:06] Landings right how long atmosphere to
[20:09] ground really takes and it takes a long
[20:10] time um if if we make it take that exact
[20:13] same amount of time oh you're going to
[20:15] land one time and you'll never do it
[20:17] again over um there'll be you just
[20:19] you're going to need half an hour of
[20:20] gameplay just to get down to the planet
[20:22] surface so that do really work out so
[20:24] one of the things that we're working on
[20:25] is is the Quantum travel beacons uh
[20:28] where you end up with uh where you end
[20:30] up close to the planet enough that you
[20:32] can land within a reasonable amount of
[20:34] time how many beacons we put on whether
[20:36] that's automatic whether you whether you
[20:38] manually do this all yourself since it's
[20:40] all completely seamless of course we
[20:42] want it to be manual but we also don't
[20:44] want it to take so long to do that
[20:46] you'll never want a hind to your
[20:48] gameplay right exactly so then once you
[20:50] get on the planet right we need some
[20:52] level of um where are you I mean Global
[20:55] M isn't that the hardest thing is it's
[20:57] huge and even when you're working on it
[20:59] you get lost sometimes and I put my own
[21:02] in there sometimes I'm just put around
[21:05] right so we're going to need uh all
[21:06] these um and we've talked a lot about
[21:09] this and really what it's going to come
[21:10] down to is really our first gameplay
[21:12] implementation of all of it uh which has
[21:14] happening as we speak so uh this is
[21:16] something that we're working on
[21:17] internally I don't know when you're
[21:18] going to see it um but we're basically
[21:20] solving all these problems right now
[21:22] like as simple as okay you're in zero g
[21:25] with your ship you've transitioned now
[21:26] into gravity where the have local
[21:29] gravity now and you've got physics and
[21:30] everything so how does the ship flight
[21:31] change how does it feel right is it fun
[21:35] um that's really what matters so once we
[21:37] get there then we'll be giving you your
[21:39] Maps GPS's beacons all over the planet
[21:41] things like this so I expect that you'll
[21:43] have that your map changes too cuz you
[21:44] go from space which is there is no
[21:46] ground to yeah and it's all 3D uh it's
[21:48] like a 3D map to to needing some have a
[21:52] horizon to where I am yeah exactly so
[21:55] cool all right next question which
[21:57] upcoming feature gives you the biggest
[21:59] headache so far which will probably be
[22:02] the hardest nut to crack except the new
[22:05] except the new item system are you
[22:07] serious put the guy knew the guy knew
[22:09] he's like they're going to answer it
[22:11] it's the new item system I mean it's so
[22:13] I wonder is the guy's name Drew or drug
[22:15] or du D Dr Dr Dru Dru Dru I don't know I
[22:20] could barely read awful um okay so which
[22:24] uh features Beyond item Port because the
[22:27] item Port one is really tricky and yeah
[22:29] I'm trying to answer with item Port
[22:30] right well I'm just going to go ahead
[22:31] and do it uh it's the item Port system
[22:34] and we can go into other the new but I
[22:36] want to talk about it anyways because it
[22:38] is the biggest headache so far because
[22:39] we're working on it all the time and
[22:41] you're working on it constantly so the
[22:43] biggest thing that we're deing with
[22:44] right now is all the characters for
[22:46] example are going through a major
[22:47] transitional phase they're going from
[22:50] what uh krych used as cdfs which is a
[22:53] type of uh XML where you tie all your
[22:55] items together into a uh sophisticated
[22:58] item support system and you've currently
[23:00] been working with the engineers on
[23:02] building this tool and uh so now we're
[23:04] going to be able to build uh characters
[23:06] as items uh with this new um item Port
[23:08] system which is super helpful but at the
[23:10] same time it's difficult because you're
[23:10] trying to support everything that
[23:12] previously existed because you don't
[23:14] want to break everything for design and
[23:16] cinematics but yet you want to push
[23:18] forward and use the new tech so like
[23:19] there's it's kind of difficult to
[23:21] support both you do have to make the
[23:22] transition right it's one of those
[23:23] Infamous problems where where you've
[23:26] done everything right when you have
[23:27] exactly what you start started with with
[23:30] which seems to make no sense so like
[23:31] visually right um and and and and Forest
[23:34] Nails the hits the nail right on the
[23:36] head with this one um again the the the
[23:39] CDF setup was was great for krych um
[23:42] it's it's really hard to maintain you
[23:44] know hundreds of characters with that
[23:46] sort of system the the other thing that
[23:48] didn't work for us on a on a on a coding
[23:50] side on a programming side is that the
[23:53] um every independent uh piece of the
[23:55] character actually needs some sort of
[23:57] component code to go with it and it
[23:59] needs persistence right and it needs
[24:00] persistence exactly so um because of the
[24:03] new item uh layout uh we can actually
[24:05] have different code running on different
[24:08] functions running on different um pieces
[24:10] of the of the character itself rather
[24:12] than you being one character as a whole
[24:14] you're actually a collection of a a lot
[24:15] of different uh gameplay components that
[24:17] are being updated uh differently than
[24:19] than other things so we kind of didn't
[24:22] really answer his question except the
[24:23] new item system so beyond the new item
[24:25] system what else kind of hurts us like
[24:27] the character one is though um I would
[24:31] honestly say just the full scale um
[24:33] because we're doing the full scale uh
[24:34] solar systems now um and that's
[24:36] something that I really think is going
[24:38] to end up out to the community uh sooner
[24:41] rather than later um is the full sizee
[24:44] solar system itself um I think that's
[24:47] going to be the the hardest nut to crack
[24:49] um we've already got all the support in
[24:51] it but it's all the extraneous stuff
[24:53] that we haven't thought of yet or we
[24:54] haven't even seen um so we've got QA
[24:57] starting to run it through these full
[24:58] scales tests and then not only will we
[25:01] have full scale but likely at somewhat I
[25:03] I don't know if it's going to be the
[25:04] same time but I'd like to see this
[25:07] happen kind of all together is we put
[25:09] one of the procedural planets within
[25:10] there now I call it procedural it's
[25:12] going to be like the designer control
[25:14] Planet so we put one of the planets in
[25:16] to the full solar scale the full solar
[25:21] system scale Call It Whatever um and
[25:24] then we see all the problems that that
[25:25] brings right and we've got to start
[25:27] we're combining fixing these full
[25:29] systems or full solar systems with
[25:32] procedural planets with the player
[25:34] customization and and the back end right
[25:37] that persistence so your your character
[25:39] is your character you know going forward
[25:41] um and all these things comeing together
[25:42] once which are all 100% necessary for
[25:44] this project but how awesome will that
[25:46] be because that how great is it going to
[25:48] be cuz that's really we've done so much
[25:50] of the of you know of the development
[25:52] for art and the content and sure and
[25:54] we're always do all this stuff a smaller
[25:55] scale version right smaller scale this
[25:57] is this is finally this is what brings
[25:59] it together right all takes all these
[26:01] things we working on the last couple
[26:02] years and finally exactly puts those
[26:04] final pieces together so it's super
[26:06] excited but we like anything we know
[26:08] it's not going to be easy it it will be
[26:09] a headache and it will be difficult but
[26:11] we will achieve it and it will and it
[26:13] will um it will be conquered and it will
[26:16] be awesome um but you know there will be
[26:18] problems uh yeah but you guys will seen
[26:20] this sooner rather than later for sure
[26:22] yeah cuz we're doing the testing now
[26:24] yeah we're doing the testing now awesome
[26:26] um any chance you could how did they
[26:28] know about the new item system I want to
[26:30] ask I'm going to ask you first I bet you
[26:32] Chris talks about it all the time you
[26:33] think this one of our Turtle plays asked
[26:34] this question just to mess with us oh
[26:36] you think so maybe I would think so
[26:39] probably ex here's another internal
[26:41] question potentially no I'm just joking
[26:43] this one was by
[26:45] Solas
[26:48] Solas um any chance you can give an
[26:50] update on the female model what has
[26:53] caused him to be held up for so long
[26:55] after the male model was released what
[26:57] are the current issues that stop the
[26:59] models from being available in the verse
[27:03] so I can blame all kinds of departments
[27:05] if you want I mean I mean Steve will be
[27:07] super happy so Steve Bender right now is
[27:09] in Frankfurt you know my partner in
[27:11] crime there we all we all have a office
[27:13] that it's all sort of shared so I'm
[27:15] going to blame Steve on this one I'm
[27:16] going to say that animation is behind no
[27:19] um and that's not really the problem
[27:21] actually we've had there's a lot of
[27:22] hurdles a couple different things on the
[27:24] mesh which I'll let Forest answer but on
[27:26] the uh on the animation techn ology sort
[27:28] of side uh what we really want is a
[27:30] completely finished mail um and and that
[27:33] doesn't mean mesh that doesn't mean
[27:35] necessarily uh um uh like outfits and
[27:38] things like this what it means is
[27:40] everything to do with animation so um
[27:43] we've got most of it right we've got
[27:45] lots of firsters stuff holding weapons
[27:47] we've got cover we've finally now got
[27:50] mantling and vating so basically one's
[27:53] mantling vating cover Locomotion ships
[27:58] uh what else am I missing I'm missing
[28:00] something and AI sort of interactions
[28:02] anyways once those are all done for the
[28:04] mail then we can basically just plug a
[28:07] female into it um there's a there's a
[28:10] there's a technical implementation side
[28:11] of this where um we actually have to
[28:13] plug the whole bunch of stuff within
[28:15] mannequin if any of the asset names are
[28:17] different between a male and a female
[28:18] and sometimes we've done this uh that's
[28:20] going to cause a problem within
[28:21] mannequin but we actually want to use
[28:23] the exact same logic that a male does to
[28:25] the female cuz we don't want to be
[28:27] fixing two different bugs
[28:28] and here's the thing right we yeah
[28:30] exactly we don't want to make the same
[28:31] mistake twice and we don't want to make
[28:33] the same mistake in parallel with each
[28:35] other and that's it so uh the one thing
[28:37] that we are doing is we are figuring out
[28:40] every single thing that goes right and
[28:42] goes wrong and figuring out our complete
[28:44] process and then uh taking the female
[28:47] character and having a much smoother
[28:49] transition and making sure that
[28:51] everything works properly with
[28:52] everything we've learned from the the m
[28:54] exctly and then that way a female
[28:56] implementation is easy um it does
[28:58] doesn't take us nearly as much time
[29:00] because a lot of it is oh how do we do
[29:01] the mail okay let's do it the same oh
[29:03] how do we do the mail okay let's do it
[29:05] the same so that's what's going to solve
[29:06] all our problems for that uh the other
[29:08] thing that this gives us a huge benefit
[29:10] for is the vuel it's going to be the
[29:11] exact same process um so once that male
[29:14] is completely locked down U for the
[29:16] Squad 42 aspect of it vaulting manling
[29:19] all the animation then
[29:21] females you know it's it's not done but
[29:24] um we've got all the assets it's just a
[29:26] matter of plugging it in yeah and uh you
[29:28] know we we're still doing some Polish to
[29:30] the actual female uh herself the body
[29:33] you know that's you know we want to make
[29:34] sure that that corre 4K nether region
[29:37] texture map really oh never Outsource
[29:40] that was an interesting never Outsource
[29:41] characters yeah if you Outsource
[29:43] characters just be prepared to get stuff
[29:45] back you never know what you're going to
[29:46] get expecting they don't want me to talk
[29:48] about it but a 4K nether region I think
[29:50] you can figure out what that means 4K
[29:53] texture for that I just don't get
[29:55] it um and then there's the obviously you
[29:58] know you know the rigs and everything
[30:00] that you got to solve so yes um but the
[30:02] the female model is is coming along and
[30:04] I'm personally very excited to have it
[30:06] cuz we've already had some clothing made
[30:07] for it and we want to get that um and I
[30:10] think that's going to you know kind of
[30:11] fall into the customization too we had
[30:13] to figure out how the players are going
[30:15] to uh be able to customize themselves
[30:17] with all their items and stuff and uh
[30:18] the Mel had a series of clothes already
[30:20] so we're were able to tackle that
[30:22] challenge and figure it out and uh now
[30:24] we can move on to the female so I'm
[30:25] super excited that is coming very soon
[30:28] right and just to give you a you know uh
[30:30] a full sort of a look on this um you
[30:32] know the females uh we've already got
[30:34] them locomoting around uh we've got a
[30:36] bunch within Squadron 42 that are that
[30:38] are that are specific to Squadron 42 so
[30:40] they all work um it's just a matter of
[30:42] you not having seen them within the
[30:44] persistent Universe yet because when we
[30:46] give them to you we want to have the
[30:47] customization like you said we want to
[30:49] have all the same outfits as the male we
[30:51] basically don't want to take anything
[30:53] away from the female right and then
[30:54] there's the whole you know we have all
[30:55] our heads right so we've been solving
[30:57] you know you have your body but then you
[30:59] have these head scans how do the head
[31:01] scans fit on the body you have to match
[31:03] up the topology the skin the skin tone
[31:06] which is a whole which is a challenge so
[31:07] there's just a lot of things and you
[31:09] know we're trying to do it one step at a
[31:10] time and make sure that we don't make
[31:11] the you know same mistake twice sure and
[31:14] as efficient as possible yeah when they
[31:15] come online you know uh they'll be fully
[31:17] featured so we won't just kind of build
[31:18] them up slowly it just be all at once
[31:20] yeah exactly all right will there be
[31:23] barber shops in game or places to alter
[31:26] our character's appearance for aesthetic
[31:28] purposes or in a ex an expanded capacity
[31:33] a not so legal purpose that sounds
[31:36] Shady so legal purpose so is that like
[31:39] change your appearance so you can get
[31:40] away with a crime yeah right or is that
[31:43] like you
[31:44] know I don't know I think that there
[31:46] will be I we've been working a lot on
[31:49] hair uh you know recently that's that's
[31:51] been a big topic because no matter how
[31:53] great your head scans look you still
[31:54] need hair right and that's well that's
[31:56] our biggest problem right the current
[31:57] hair
[31:58] that we had worked on and even some of
[32:00] the tech we're fighting with a bit um is
[32:02] is that's what's bringing not down but
[32:06] uh lowering the quality yeah I mean
[32:08] Bringing Down the heads a little bit
[32:10] right you take a look at the head you
[32:11] take a look at the the the face texture
[32:13] we've got of the crazy wrinkles we've
[32:14] got por mapping we've got all this crazy
[32:16] stuff um and then you've kind of got
[32:19] hair which is
[32:20] has on it maybe some directional maps
[32:23] that uh just can't you know you know
[32:25] there's a lot of elements still missing
[32:26] right you know get that nice Rim
[32:28] lighting you know I'm sure we've all
[32:30] seen the Paragon demo where they have
[32:31] all the hair strands well they got this
[32:32] awesome spline stuff that looks just
[32:34] amazing I love I love to look one of
[32:36] those things you always want you know
[32:38] all this Tech but you know you still
[32:40] have to uh commit to um where you're at
[32:42] and work with the tools that you have
[32:44] right and then to get it done and then
[32:46] you know further down the road map you
[32:47] can always try to you know stay on top
[32:49] of um what everybody else is doing and
[32:51] and um you know keep to the same uh
[32:54] technical standards that the visual
[32:58] standards really right I mean we've got
[32:59] to be up um and you know we've got to be
[33:01] one of the best games out there and uh
[33:03] we don't want to give you any old
[33:04] technology kind of the thing and we
[33:06] don't want to we don't want to make the
[33:08] the the faces that we spent so so long
[33:10] on right look look worse um so the
[33:12] actual question is is you know are there
[33:15] going to be barber shops that's a design
[33:17] question I have no idea about barber
[33:19] shops what I do know is that you'll be
[33:21] modifying your face uh in a medical
[33:23] facility of some sort right yeah like
[33:24] reconstructive surgery exactly so
[33:27] whether whether you're doing your hair
[33:28] at the same time uh that's a great
[33:30] question probably I would guess I would
[33:32] imagine anything like you know that has
[33:35] to do with the head with with your face
[33:36] so facial hair or whatever else so I
[33:38] guess you have to get plastic surgery to
[33:39] shave maybe fair enough I mean yeah we
[33:43] are in La kind of pretty normal um but
[33:46] there there's a lot of problems to solve
[33:48] uh with the hair like uh like forest was
[33:50] saying um even down to just having
[33:52] different head sizes I mean all the
[33:54] heads are a different size so how do you
[33:56] stop yourself from making every single
[34:00] um haircut for every single head so if I
[34:02] have one haircut made for one head but
[34:04] obviously when you are customizing your
[34:07] character you're going to want to have
[34:08] access to all the different hair but
[34:11] what if you chose MPC shaped head n as
[34:14] opposed to MPC head 55 or even if you've
[34:17] controlled it through a modifier or
[34:19] something or a blend shape whatever we
[34:20] end up doing how do you make sure that
[34:21] the hair stays attached to the head when
[34:23] the head changes size that's the thing
[34:26] um and and those are those are those are
[34:27] problems that we're solving and to give
[34:28] you an idea of that particular one uh
[34:30] how we want to do this is that we have a
[34:32] we have an actual Scout Map we hold all
[34:35] the morph targets for every single head
[34:36] within the scal map or we keep offsets
[34:39] of every single joint that we need to
[34:41] offset when we're customizing the face
[34:43] so that we actually only make one model
[34:45] that contains all the morph targets for
[34:46] every single head uh and then the hair
[34:48] cards on top of that um those are going
[34:50] to have to move around and we've kind of
[34:51] started playing around with it right
[34:52] like we we realized very early you know
[34:54] eyelashes for example right you make
[34:56] eyelashes and you're like wait a minute
[34:58] everyone has a slightly different size
[34:59] socket for you know in the head right so
[35:01] how do you make you can't just make we
[35:03] have 120 heads you can't just make one
[35:04] set of eyelashes to fit all the eye
[35:07] shapes right so all of a sudden you got
[35:08] to figure out that's where our technical
[35:10] animators come in yeah and you know the
[35:13] technical art team we've got a really
[35:14] awesome technical art team and one of
[35:16] the one of the things that our team is
[35:17] the best at um and I you know I say this
[35:20] and I'm super proud of the guys for
[35:21] being able to always do this is these
[35:24] massive script updates that will affect
[35:27] all the assets together so one of the
[35:29] hardest things about this game is the
[35:31] sheer scope of it right like how many
[35:32] heads we've got we got over 100 heads
[35:34] how many character bodies we got we've
[35:35] got hundreds of these um you can't go in
[35:39] manually open up Maya tweak one close it
[35:42] save there's too much you open up my
[35:44] closet safe it would take you all year
[35:47] um but we've got guys like Mark McCall
[35:49] John rigs Gage um uh matat TR writing
[35:53] scripts that that are that are a batch
[35:55] uh that are a batch process to it so to
[35:58] give you an example Mark McCall made the
[35:59] eyelashes right so one thing we don't
[36:01] get delivered eyelashes with the faces
[36:04] it's a problem because they look pretty
[36:05] funny without eyelashes um especially
[36:07] the females right so what he's done is
[36:09] he has actually got a script that builds
[36:11] the eyelash geometry not only does it
[36:13] build the eyelash geometry but it checks
[36:15] the head that it's working on builds the
[36:16] geometry skins it on exports the process
[36:19] puts it into a CDF and it's done that's
[36:21] how you manage right CU you want to have
[36:23] your artist spend the time on and
[36:25] eyelashes because if you could have them
[36:27] spend time on one eyelash they're going
[36:29] to look really good if they have to
[36:30] spend their time on 120 eyelashes you're
[36:32] going to have a very low quality right
[36:35] set of ey and you're going to have an
[36:36] artist that's going to want and we have
[36:38] this visual bar so yeah totally so you
[36:40] want to you want to have you know
[36:42] artists concentrate on single elements
[36:44] and then you have your technical artists
[36:46] populate those single elements in a very
[36:48] smart approach to save the labor time so
[36:51] we can concentrate on the visual
[36:52] Fidelity and not the uh the art labor
[36:55] actual labor labor itself right sure but
[36:58] this is where bugs come from so to give
[37:00] you guys an idea asset bugs this is
[37:02] usually what happens so like you'll do a
[37:04] batch process like this you'll check you
[37:06] have to spot check a whole bunch of them
[37:07] you'll maybe have QA check every single
[37:09] one of them uh but you'll spot check a
[37:10] couple and then there'll be one that
[37:11] didn't work correctly or uh one that you
[37:14] know somebody's PC lagged out for half a
[37:16] second or whatever I mean um this is
[37:18] where the asset bugs come from it's not
[37:20] like somebody was sitting there they
[37:22] looked at it it's you know whatever the
[37:23] faces exploded and they're like yeah
[37:25] that's good you know and exported it
[37:27] it's usually something that somebody
[37:28] hasn't actually physically touched yeah
[37:30] yeah totally all right cool uh we got
[37:33] one more question by Fallon just curious
[37:36] about how procedural generation more
[37:39] procedural Planet question and I love
[37:41] that will work on planets with large
[37:43] bodies of waters oceans and how will
[37:46] that affect performance is it hard to
[37:48] render so much water or easier on the
[37:51] side of the player also space Wells
[37:55] excellent question
[37:57] the space Wells but I do know working
[37:59] with oceans in the past it is Shader
[38:01] driven so I think that it is uh
[38:05] achievable with without killing
[38:06] performance yeah absolutely and um again
[38:09] um the Carson wiel is one of the U I
[38:12] mean he's he's he's unsung uh he's very
[38:16] quiet um unless he's very angry uh but
[38:20] he's written he's written white papers
[38:21] for the engine he was there from the
[38:23] gecko and he's actually working within
[38:25] this he's actually training uh one of
[38:27] the one of our Junior Graphics
[38:28] programmers to do this particular
[38:30] Implement implementation so him and a a
[38:32] gentleman by the name of Thiago who went
[38:34] to ID software I believe and worked on
[38:36] the worked on Doom um worked on our
[38:39] oceans originally within the cry engine
[38:41] right and I I I think I can go out on a
[38:44] limb and say the oceans within the cry
[38:46] engine were one of the biggest the best
[38:48] features within the engine it looked the
[38:50] best we had scattering through the waves
[38:51] all this crazy stuff that that
[38:53] eventually you know go under water the
[38:55] volumetrics oh so I think you can um
[38:59] expect at least that level of fidelity
[39:02] um but what's tricky again about water
[39:04] is how um uh first of all the Highlight
[39:07] changes at a distance so when you're
[39:09] approaching a planet the water's got to
[39:11] got to highlight it's got to it's got to
[39:12] react very different specularity wise to
[39:15] the actual surface of is just exactly um
[39:18] then when you get up close right you
[39:20] want to see waves but you don't want to
[39:21] see it tiling everywhere right um so
[39:24] we've got this real big scale problem
[39:26] that we're going to have to deal with
[39:27] damic desolation on the stuff um being
[39:29] able to have displaced waves and things
[39:31] like this and then additionally if we
[39:33] want to go under the water which a ship
[39:36] to design should be able to do right
[39:38] let's hope that design says that ships
[39:41] are submarines also to me to me if a
[39:45] ship can go into outer space it can go
[39:47] under freaking water right I think it
[39:50] should be able to go under water but
[39:51] whatever I mean we'll we'll see where
[39:53] that goes with the design that's a
[39:54] design thing um but I think that should
[39:56] happen I'm going to get back to my desk
[39:58] if you go underwater space I'm going to
[40:01] have a task to get back to my desk to
[40:02] make sure that the jetpack is uh
[40:04] supports underwater as well oh oh that's
[40:07] a good point right and then oh wow
[40:09] because I mean what a Pandora's box
[40:11] right because you get under and it's
[40:12] like you open the back of the cutless
[40:14] what happens right shouldn't water flow
[40:16] in right but is a local physics rid like
[40:18] like pushing water out I don't know
[40:20] there's all sorts of crazy suine though
[40:22] is is built to withstand the extreme
[40:24] weight and pressure that the water puts
[40:26] on and I don't think that a ship needs
[40:28] to withstand that same amount of
[40:29] pressure in out of space yeah I'm not
[40:31] sure wouldn't you think that a missile
[40:33] hitting the side of your ship has a lot
[40:34] of pressure feel like
[40:37] a blows it up right I don't know anyways
[40:40] I don't know so whether or not you go
[40:42] under waterer I don't know ABS did it to
[40:43] the Enterprise I think it was kind of
[40:45] dumb what what put it underwater yeah I
[40:48] think that was fine it's got Shields are
[40:50] you talking about Voyager home yeah no
[40:52] the one where uh uh isn't Voyager home
[40:55] it's underwater no no yeah that's shot
[40:58] that's shot when he's coming out of the
[41:00] water the new the new Star J did with
[41:03] the enterpris hiding under water yeah
[41:06] and then it comes out of it and yeah it
[41:08] was cool but it didn't make any sense um
[41:10] but it didn't make any sense fair enough
[41:12] um sorry so can chips go underwater if
[41:14] the Enterprise can do it I'll show you
[41:16] yeah right and again this will be a
[41:18] design debate and as you see there's a
[41:20] couple different couple different
[41:21] mindsets I'm sure all the players are
[41:22] going to go yeah absolutely they need to
[41:24] go underwater right CU other people be
[41:26] like no finish the game n we can do like
[41:28] hunt for ated October things one ping
[41:30] only I'm more interested in the space
[41:31] Wells personally yeah and the space
[41:33] Wells right um we talked a little bit
[41:35] earlier in a different different
[41:37] question about fauna anyways so space
[41:39] whales Mega fauna I think we're going to
[41:41] have to support something like this
[41:43] right um whether it's whether it's
[41:44] whales or big big things on the on the
[41:46] on the ground uh walking around yeah
[41:49] sure space whales do it you heard it
[41:54] here so so that put pretty much like
[41:57] pushes CH you want to hear my my uh
[41:59] space well joke yeah I do so a space
[42:03] well walks into a bar and he sits down
[42:06] to against next to another space wall
[42:08] yeah and the the space wall
[42:18] goes okay and then the Spaceball looks
[42:20] over he goes man you are
[42:23] wasted you're wasted all right thank you
[42:26] for to another episode of 10 for the
[42:29] developers Sean Tracy for Stefan um we'd
[42:33] like to thank the uh subscribers uh over
[42:36] and over and over again because we love
[42:37] you and again without you we would not
[42:40] be here so thank you so much for
[42:41] everything and your contributions and
[42:43] we're going to get back to work and keep
[42:45] making this game for you hell yeah we'll
[42:47] get the females done right now let's go
[42:49] do it and the space wealth thank you so
[42:51] much all right thank you thanks guys
[42:55] [Music]
[43:02] hey guys thanks for watching um temp for
[43:05] the chairman uh if you guys would like
[43:06] to uh see more episodes go here if you
[43:09] guys would like to subscribe to our
[43:11] YouTube channel and always keep up to
[43:12] date with all our video content go here
[43:15] and uh if you guys would like to watch
[43:16] episodes of around the verse go here
[43:18] please and I will see you in the verse
[43:23] [Applause]

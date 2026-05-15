# Star Citizen Live Gamedev: Derelict Outposts

**Video:** https://www.youtube.com/watch?v=LcScCp5_uUc
**Date:** 2022-05-13
**Duration:** 1:04:09

## Transcript

[00:01] [Music]
[00:03] hello everybody welcome to star citizen
[00:06] live game dev colonialism outposts i'm
[00:09] your host jared huckabee and we are once
[00:12] again uh in my home welcome to my home
[00:15] uh here in
[00:16] manchester united kingdom
[00:19] uh on if you've never seen star citizen
[00:21] live uh before it's where we take about
[00:24] an hour out of the end of our week
[00:26] and
[00:29] we do stuff uh sometimes we we do q and
[00:31] a's where we answer questions and put
[00:33] our developers on the spot like last
[00:35] week's uh show with the graphics and
[00:37] engine guys
[00:38] and other times we take us through take
[00:40] you through our process uh show you a
[00:42] bit about how we work uh and uh usually
[00:45] make fun of somebody while they do it uh
[00:48] that's what we're doing today
[00:50] uh with members of our esteemed uh
[00:52] modular content team let's bring them on
[00:54] here we've got uh joel say hi joel hi we
[00:58] got cairo
[01:00] hey everybody
[01:01] and eddie
[01:02] hello
[01:03] eddie why are you in like four threes
[01:05] penance again
[01:06] i do not know
[01:09] it's like watching an old vhs i'm pretty
[01:11] sure my webcam is 780p so i'm not sure
[01:13] why i'm uh yeah four by three it's
[01:16] reminiscing yeah yeah yeah better times
[01:19] the nostalgia thing it's like we rented
[01:20] you from the blockbuster we're just
[01:22] watching you on an old school vhs yeah i
[01:23] need some scan lines and stuff so
[01:27] uh
[01:28] the modular con is that still the
[01:29] modular content because i know there's
[01:30] been some reorganization we sort of dub
[01:33] ourselves the sandbox one team these
[01:35] days um yeah because we have multiple
[01:37] sandbox teams so yes but we are
[01:40] responsible for these slightly
[01:42] smaller more modular
[01:44] um and things that get scattered all
[01:47] over the place kind of content rather
[01:49] than the sort of more bespoke landing
[01:51] zone content yeah
[01:53] and uh your job on the team what what
[01:55] what's your title and what do you do
[01:56] eddie
[01:58] uh i am senior lead on the team so um
[02:01] yeah i um organize things and make sure
[02:05] everyone's happy and try my best to get
[02:08] things out for
[02:09] when uh when we need them out
[02:11] essentially
[02:13] uh cairo this is your first video for
[02:15] star citizen either pre-recorded or live
[02:17] welcome to the show who are you
[02:20] what do you do for
[02:22] uh yeah i'm cairo i'm an environment
[02:24] artist too i just joined the team in
[02:27] january and i'm all the way here from
[02:29] south africa so yeah it's been a good
[02:31] time enjoying it and i will say cairo
[02:34] has been killing it since pretty much
[02:35] day one so
[02:37] you started in january you said
[02:40] yeah i think i got your new year's day
[02:42] started on the 10th something like that
[02:45] we
[02:45] we actually legitimately have a
[02:47] six-month moratorium period we usually
[02:49] don't have people on the show in the
[02:51] first six months we don't we try not to
[02:52] scare them away basically it's it's it's
[02:54] not official it's a deal that i have
[02:56] made with all the leads and directors
[02:58] that i won't scare their new hires away
[03:00] in the first six months uh by going that
[03:03] but uh so we're skirting that just a
[03:04] little bit but i appreciate you being
[03:06] here um and then uh joel uh no stranger
[03:09] to star citizen uh uh videos uh
[03:12] citizencon isc seos before but it's it's
[03:16] somebody's first show so who are you
[03:18] what do you do for star citizen
[03:20] yeah i'm joel i'm a senior environment
[03:23] artist too on the sandbox one team
[03:26] and i just do the art and i do level
[03:29] setup
[03:30] and i just do the art
[03:33] yeah just do it
[03:35] that's simple
[03:36] i mean yeah slightly down playing joel's
[03:39] role yeah i would say but you know
[03:42] he's a modest guy what can i say
[03:44] all right so this is our this is a game
[03:46] dev uh show this week uh where we're
[03:48] going to showcase some some process uh
[03:50] eddie why don't you want you want to
[03:52] tease up what are we doing today
[03:54] um so we're gonna have a look at
[03:57] something we've been sort of working on
[03:59] in parallel with the colonial outposts
[04:01] which is ruined versions of the colonial
[04:03] outposts
[04:04] the colonial outposts have been
[04:07] around in law for a long time um in
[04:11] terms of like the
[04:12] the age of a lot of the systems that
[04:14] we're looking at because these are sort
[04:16] of ideally the sort of first
[04:18] explorers into the sort of systems it's
[04:21] like when we say colonialism you know um
[04:24] it's the sort of first intrepid
[04:26] explorers the frontiersmen who've come
[04:27] in so obviously we wanted to have a look
[04:30] at some
[04:31] sort of smaller ruined versions of these
[04:34] at the same time i was looking at the
[04:35] more complete ones that we've also
[04:36] thought everyone sort of saw in sitcom
[04:39] citizencon last year
[04:41] um so joel and cairo have been so
[04:43] informing a little strike team to look
[04:45] at these
[04:46] and we're going to go through today and
[04:48] build
[04:49] uh what we'd call a module so a lot of
[04:51] these most of these are sort of built as
[04:53] sort of individual module that can
[04:55] modules that men can come there that
[04:58] then
[04:58] uh sort of combined into sort of
[05:00] locations by sort of using them in
[05:03] different combinations of things
[05:05] each module has a basically a foundation
[05:07] which is what you're looking at now and
[05:09] that foundation is quite bare bones
[05:11] and then we add an overlay to that
[05:14] module
[05:15] which gives that module its theme and
[05:17] today we're going to look at what we're
[05:18] calling an occupied module
[05:21] so the first version of these there'll
[05:23] be two there'll be sort of just a ruined
[05:25] which is kind of the default
[05:26] overlay theme and then we've also got
[05:29] some a bit more occupied as if um
[05:32] the idea is as if there's some bad guys
[05:34] or whatever who's sort of just using
[05:36] this area
[05:38] this ruin as sort of a temporary sort of
[05:41] forward operating base or maybe there's
[05:42] been a heist and they've come back here
[05:44] to sort of just
[05:46] re uh regroup before the next one a
[05:49] little hideouty kind of vibe yeah right
[05:52] well uh joel we've got your screen up on
[05:55] the show now so uh you can go ahead if
[05:58] you want to take it away uh we do have
[06:00] the first question from the chat already
[06:03] um just looking at your toolbar at the
[06:05] top uh what the hell is wrong with you
[06:08] uh so this is just to carry over from
[06:11] too many viruses on internet explorer
[06:16] you know the ask g's toolbar and stuff
[06:18] uh no i'm a glutton for punishment uh
[06:24] these are just
[06:25] some handy little tools um that you can
[06:28] use you know debug um
[06:31] albedo mode and whatnot um
[06:39] i can certainly talk through the
[06:40] toolbars if you want to get started i'm
[06:42] actually building some job
[06:46] um but yeah so so basically
[06:50] you know this is the that base module
[06:53] that eddie was talking about um
[06:55] you know it's bare bones
[06:57] um and you know that's for a reason
[06:59] because we build on top of that and then
[07:02] the stuff that we build on top of that
[07:04] can be swapped out for different things
[07:06] built on top of it so
[07:08] um
[07:09] they vary in kind of levels of
[07:11] complexity like how much is
[07:13] is you know hard placed in these and
[07:16] can't be changed
[07:17] um
[07:18] and mainly they're there for that reason
[07:20] like we don't want that element to
[07:22] change to be changed but um
[07:25] because yeah these are simple kind of
[07:26] locations or elements that make up a
[07:29] larger location
[07:31] um we're quite happy for a lot of it to
[07:33] be changed up so
[07:35] we generally just keep like the
[07:36] footprint of what was once a building um
[07:40] in the main main pass and then we do
[07:43] everything on top of it so
[07:45] it just like we we get some wild
[07:48] variations between the modules um
[07:52] yeah so that's what we're looking at now
[07:54] um
[07:55] i basically i've got like a little kit
[07:57] library here um
[08:00] pre ready to go and this is generally
[08:02] the stuff that we've been using to
[08:05] kind of start dressing and building up
[08:06] these uh these modules uh
[08:09] so my first step is gonna be
[08:12] i need to sell
[08:14] uh
[08:15] some of the destruction of
[08:18] this uh module i it has been a very long
[08:21] time so there is gonna be elements that
[08:23] have just
[08:24] gone to time but you know
[08:26] uh
[08:27] when things are destroyed they often
[08:30] leave stuff behind and so i'm gonna just
[08:32] start placing some of these pieces from
[08:34] over here um
[08:36] to kind of hint at that that damage
[08:39] that's fallen off
[08:40] these walls
[08:42] um
[08:43] so yeah you know
[08:45] just start getting some of these rubble
[08:47] piles
[08:49] um i'm just gonna grab all these
[08:52] because i know i'm gonna use all of them
[08:56] move it to the proper layer
[09:01] yes i mean so what joel was saying about
[09:03] the the how much is in the sort of base
[09:06] module versus how much becomes in the
[09:08] overlay the ratio obviously with these
[09:10] is
[09:11] very strongly towards what's in the
[09:13] overlay versus what's in the base module
[09:14] but if you take our other the more
[09:16] intact outposts you'll find there's a
[09:18] lot more basically the architecture of
[09:21] the thing is in the base module those
[09:24] are the sort of basic walls floors and
[09:26] ceilings that don't change between each
[09:28] overlay and the overlay brings in the
[09:30] theme so the overlay brings in the
[09:33] the dressing the lighting the vfx the
[09:37] the sort of um all the props all the
[09:40] furniture all that stuff all the stuff
[09:41] that brings the sort of
[09:43] the life to the bare walls essentially
[09:46] and it just it's a quick way that we use
[09:48] to sort of get another get multiple
[09:52] themes within the same space so that we
[09:54] don't have to like create a different
[09:56] variation of the same thing every time
[09:59] we keep the things that should stay the
[10:00] same the same between each we don't have
[10:02] to like touch them after we've made the
[10:04] base version we just create more and
[10:06] more overlays with different variations
[10:08] to get a quick variety of things
[10:10] so i'm gonna i'm gonna step in and i'm
[10:12] gonna interrupt here real quick uh
[10:13] whichever one of you has your discord
[10:15] open we're hearing your your
[10:17] notifications
[10:21] no
[10:22] i don't know
[10:23] just checking i don't think i have
[10:25] discord
[10:27] i think it's just good
[10:29] you're right it was discord it wasn't me
[10:31] but it was definitely the discord nice
[10:37] continue
[10:42] uh yeah so
[10:44] a little bit about um
[10:46] [Music]
[10:47] you know
[10:48] you know why i'm deciding to place one
[10:49] place and where um
[10:52] generally just kind of want to hit uh
[10:54] you know the hierarchy of like big
[10:56] shapes medium shapes and small shapes
[10:58] and kind of like feather them out so
[11:00] you know you got these big rubble piles
[11:03] um
[11:03] and then i'm just supplementing them
[11:05] with you know some of the these smaller
[11:07] piles
[11:08] um just so like that the transition um
[11:10] with the terrain is a lot a lot nicer
[11:13] um and we just don't just like
[11:17] have just large details like right at
[11:19] you
[11:22] um and these these brushes are using the
[11:25] organic shader which has some um
[11:29] weld aligned uh texture and tiling
[11:32] behavior so
[11:33] uh we could scale these quite liberally
[11:36] um as you see me i'm going to show you
[11:38] that do you want to show that skill like
[11:39] massive gel
[11:40] because like so you maintain basically
[11:44] the texture detail no matter how big you
[11:46] scale these up and down obviously at
[11:48] some point this thing's going to get too
[11:50] big to be in any way believable but um
[11:52] yeah it's pretty cool
[11:55] so yeah i could i could take what would
[11:57] be like a large shape and then bring it
[12:00] down to like a medium shape as well um
[12:02] it's just super handy um
[12:05] and these uh
[12:07] you know they're quite dark at the
[12:08] moment that's just our um
[12:11] terrain color pickup uh
[12:14] text for on the shader um
[12:17] obviously there's no planet in this
[12:19] level so it's just defaulting to to a
[12:21] black value but once we drop this down
[12:24] onto a planet we'll start seeing it pick
[12:26] up some of the
[12:27] planets colors
[12:32] uh
[12:33] i think you know that that's pretty good
[12:35] for now i'm definitely going to add more
[12:37] like once i start adding like some of
[12:39] the
[12:41] uh some of the hard surface elements
[12:43] definitely want to add some some rubble
[12:45] there as well um you know like the
[12:48] wind's kind of like blown it and it's
[12:50] kind of pulled and collected near these
[12:52] these elements um maybe something in
[12:55] this corner as well
[13:02] that should be good uh for now
[13:05] um
[13:08] and
[13:08] uh
[13:10] the next part i want to look at is
[13:13] getting some interest and
[13:15] um break up on the
[13:17] structure itself uh like little bits and
[13:21] pieces uh fallen off but some have maybe
[13:23] stuck together and start hinting at you
[13:25] know some of the construction properties
[13:27] that were used um
[13:29] to to build the structure uh
[13:32] from like a law perspective um
[13:34] [Music]
[13:35] um that's definitely you know a part of
[13:37] our art direction you know the
[13:40] the elements that have made up the walls
[13:43] um
[13:43] you'll you'll see some of that hinted at
[13:45] in
[13:46] the main uh outposts
[13:49] um
[13:50] and uh you know we're trying to
[13:52] we're trying to show you like what that
[13:54] um what those elements like on down to
[13:58] uh kind of thing
[14:00] um
[14:01] so i'm just gonna
[14:04] do that real quick so
[14:06] you know we got some rebar pieces
[14:09] um
[14:10] some concrete uh slabs
[14:14] some more rebar so i'm gonna grab all
[14:15] these
[14:17] um
[14:19] i like these floors as well i mean
[14:22] but they're for the age of them like it
[14:24] doesn't quite make sense that some of
[14:25] these tiles are as intact and um you
[14:29] know are still there
[14:31] um
[14:32] but i think it's the term used the other
[14:34] day uh eddie like the rule of call like
[14:37] of course it just looks cool um it adds
[14:40] some visual interest to the ground um
[14:43] not just walking on like the fresh
[14:45] terrain with the wall jutting out of it
[14:47] we always play this game with the
[14:49] environment a lot of the time it's like
[14:51] yes we want to make everything realistic
[14:53] we want to make everything feel
[14:54] believable and the player kind of needs
[14:56] those familiar
[14:59] like landmarks to be able to say oh i
[15:01] recognize what this thing once was
[15:04] but
[15:05] um you can push that thing too far into
[15:07] the realism side oh this you know
[15:09] physically wouldn't be able to happen
[15:10] this technically wouldn't be able to
[15:12] happen because this thing but ultimately
[15:14] like you've got to sort of find those
[15:15] compromises a lot of the time with stuff
[15:18] you see all the time like well that's
[15:20] fine maybe it wouldn't happen in reality
[15:22] but is it fun does it look cool then
[15:25] yeah then maybe we'll sort of make that
[15:27] you know you know i mean there is the
[15:28] rule of call as we call it quite a lot
[15:31] ian likes to use it a lot um
[15:33] when we're talking about the art
[15:34] direction sort of things like at some
[15:36] point you just have to do well that's
[15:37] paul so we're going to keep it in
[15:39] because you know it makes sense there's
[15:41] the rule of cool and then there's also
[15:43] the
[15:44] uh
[15:45] how you balance between this is supposed
[15:47] to be 930 years in the future
[15:50] versus things that are going to be
[15:52] recognizable
[15:54] to players today it's like like like
[15:57] somebody somebody can go to spectrum and
[15:59] make an argument about how whatever
[16:01] floor tiling like this you know
[16:04] should be indestructible 900 you know
[16:06] almost a millennium in the future
[16:09] like this but you have to
[16:11] you have to
[16:13] make things that
[16:14] connect to the people today
[16:16] yeah and a whole sort of vibe with all
[16:18] of the um sort of more rustic stuff that
[16:21] we've been doing for a little while now
[16:22] on our team is
[16:24] is like there would be there is always
[16:27] that kind of like
[16:29] sci-fi element to everything there is
[16:31] always that kind of like oh yeah i don't
[16:33] recognize this it's a lot but then if
[16:35] you don't like interspersa family with
[16:37] all that it just ends up feeling like a
[16:38] fantasy game and that's not what we're
[16:40] making we want to make something that is
[16:41] feel grounded it does feel real real to
[16:44] the player you know um the player today
[16:46] so yeah and it's a it's a con yeah
[16:48] exactly it needs to be sort of at least
[16:49] somewhat recognized there needs to be
[16:50] these little landmarks everywhere like
[16:52] oh well i mean and ultimately like
[16:54] a bathtub still going to be a bathtub
[16:56] but a lamppost is still going to be that
[16:58] a door is still going to be a door
[16:59] because humans are
[17:01] built in certain ways and they like
[17:03] certain things and even in like however
[17:05] many thousands of years that that
[17:06] stuff's not going to change too much you
[17:08] know
[17:09] one of my one of my favorites is always
[17:10] trying to figure out how
[17:12] language changes in a thousand years i
[17:15] think that would be yeah that would be
[17:17] insanely different wouldn't it i mean
[17:18] heck just you know just like english a
[17:20] thousand years ago with like the old you
[17:22] know canterbury tales and the
[17:24] middle english you know
[17:26] with the show
[17:28] you know like what is that like that's
[17:29] english
[17:41] i agree
[17:42] yeah i had a major in college
[17:51] oh i had a creative writing uh yeah
[17:54] thing in
[17:55] university it didn't really help me in
[17:57] real life either
[17:58] it was fun though
[18:02] i expect pay attention
[18:04] [Laughter]
[18:06] he does at every opportunity
[18:10] now i can't do piglet
[18:12] actually i don't know why i've got a
[18:15] i've tried i've you know you went for
[18:17] the sophisticated middle english instead
[18:19] i don't know why i just it's just though
[18:21] it's
[18:22] it just doesn't work in my brain
[18:32] so it's this kind of stuff this kind of
[18:34] bedding in and this kind of like
[18:35] attention to detail that separates the
[18:38] sort of
[18:39] you know it's it's really important i
[18:41] game it it pushes everything
[18:43] that stage further it's just about
[18:46] attention to detail after you've got the
[18:47] big shape sorted out it makes a huge
[18:49] difference to things
[18:52] so glad we're still using rebar
[18:55] a thousand years ago yeah it's a plastic
[18:57] or composite something
[19:01] well i think the idea is a lot of this
[19:02] stuff i think when when the first
[19:04] colonists would arrive they would they
[19:06] would come down in their ships and
[19:07] whatever but they'd also just like use
[19:09] whatever's available on the land to
[19:11] actually make their yeah i'm sorry
[19:14] germinator is correct it's space rebar
[19:16] space repair exactly
[19:18] they're very different
[19:20] yeah
[19:22] they would stuff
[19:23] yeah exactly they would use the cheapest
[19:25] methods like maybe these things were
[19:27] extruded originally maybe like there was
[19:28] some kind of like weird 3d printing
[19:30] machine but they'd still be built out of
[19:32] like whatever the cheapest materials
[19:34] were available on the planet that they
[19:35] landed on i like the idea that there
[19:37] could be something that was like
[19:40] creating this to form or like you know
[19:42] there'd be ships that could sort of
[19:44] process local or into sort of usable
[19:47] materials and things like that um you
[19:50] know but i don't think like
[19:52] these are not supposed to be rich or
[19:54] affluent or particularly like these are
[19:55] like hard scrabble
[19:57] kind of colonists frontiers people so
[20:00] they just use whatever's available
[20:06] so i'm going to use these uh these big
[20:08] pieces are well as well because some of
[20:10] the these um
[20:13] some of these like scatter assets they
[20:15] can go out get quite like high frequency
[20:18] um and it's good to have like some
[20:19] visual rest now and then um so i like to
[20:22] use these these pieces just to sit on
[20:25] top of them to to knock down the
[20:27] frequency
[20:28] a bit and i'm also going to use
[20:32] some of the small bits to supplement
[20:34] some of these like rebar like
[20:37] you know it's in the process of falling
[20:39] down and
[20:40] it just hasn't quite detached from the
[20:43] the rebar yet
[20:45] um
[20:46] it will start breaking up some of these
[20:48] these surfaces
[20:50] and it's a super good example of
[20:53] well the whole scene is coming together
[20:54] but like
[20:55] primary secondary tertiary reads is
[20:56] something else we also talk about a lot
[20:58] in environment are you've got to get
[21:00] those big forms in first and make sure
[21:02] that those look good and are right
[21:04] before you really concentrate on the
[21:06] sort of secondary and tertiary but of
[21:09] like they're all equally important to
[21:11] that final read it's just about how
[21:12] they're distributed and the ratios of
[21:14] each so ira you could you can't cover
[21:18] surfaces in just
[21:20] visual noise it looks terrible you need
[21:22] those spaces of irs do you need those
[21:24] moments of rest and usually what you'll
[21:27] you'll split things up into sort of
[21:28] sensible sort of almost like 70 30
[21:31] ratios of things to to sort of
[21:34] just ultimately like lead to a pleasing
[21:37] a pleasing
[21:38] final read on things
[21:46] yeah it's not so much about like it's
[21:49] not just the geometry as well like
[21:51] because these are old locations like
[21:53] there's a lot of um
[21:55] there's a lot of wear and and
[21:58] on the material side of things as well
[22:00] so
[22:00] you know it's a combination of you know
[22:03] the geometry frequency but it's also the
[22:05] frequency of the textures and the
[22:07] environment it's going to be sitting on
[22:09] so
[22:10] uh we'll see in a bit like
[22:12] popping this down on planet um
[22:14] it's good to work in these construct
[22:16] levels but like as soon as you can you
[22:18] need to start seeing it in situation
[22:20] yeah um
[22:22] so you can really validate like the
[22:23] experience with like all the other
[22:25] disciplines kind of involved
[22:28] um because that's just one piece of the
[22:30] puzzle at the end of the day yeah
[22:33] we can show you some of the sort of
[22:35] little
[22:36] physics stuff we've been looking at as
[22:38] well and just it's not even really i
[22:40] wouldn't even call it like puzzles in
[22:42] the traditional sense it's just more
[22:43] like things we can add to the
[22:44] environment to make it feel and behave a
[22:46] little more dynamically as well because
[22:48] things like
[22:49] movement and
[22:50] thing and stuff like that are also
[22:52] really important to to bringing an
[22:54] environment to life and obviously like
[22:56] joel said we're building out of context
[22:58] with where the final actual placement on
[23:00] the planet is going to be right now so
[23:01] that's something you also have to have
[23:03] in the back of your mind while you're
[23:04] building something like this is like
[23:06] you know
[23:07] you know i'm also going to be
[23:08] introducing like a whole bunch of trees
[23:11] and rocks and landscape into the reed of
[23:13] the scene as a whole at some point as
[23:15] well
[23:19] joel there's some
[23:21] conversation in the chat about uh where
[23:23] your accent originates do you want to
[23:24] reveal that
[23:26] i do uh i'm from australia
[23:30] melbourne australia
[23:34] australia australia okay
[23:37] and honestly gradually joel's been
[23:40] introducing all of the australian slang
[23:42] to the team to the point where
[23:45] we now we now use it regularly and
[23:48] people look at it strangely when we use
[23:49] it
[23:50] uh yeah
[23:51] who
[23:53] we've got a good good quota of
[23:54] australian guys on the team actually
[23:56] do gradually taking over
[23:59] yeah you know we've got studios in
[24:02] in
[24:04] five studios in four countries around
[24:06] the world but
[24:07] you know the uh the international nature
[24:09] of our development team cannot be
[24:11] understated that you you go to those
[24:13] studios then you find people from all
[24:15] over
[24:16] oh yeah no absolutely a place we've been
[24:17] brought in like we we will we'll take
[24:19] the talent from wherever we can get it
[24:22] angel
[24:24] um
[24:29] [Music]
[24:32] yeah i think
[24:35] obviously you know it's not done but i
[24:37] think you know we're starting to get a
[24:40] decent picture of
[24:42] of like the footprint and um
[24:46] what was once
[24:47] a
[24:48] a building uh kind of thing
[24:51] so we could probably
[24:54] just get rid of these so we don't
[24:57] accidentally export them out with the
[25:00] oc
[25:02] but what i want to do now
[25:05] is i just want to get this
[25:07] little
[25:09] cover mesh block i have
[25:11] 1.25 crouch cover um i just kind of want
[25:15] to start thinking about uh because this
[25:17] is going to be uh occupied overlay
[25:20] um
[25:22] where some some areas uh that i could
[25:24] potentially
[25:26] tweak to to get the cover height um so
[25:30] you're not just a sitting duck explorer
[25:32] in this area or
[25:34] you know if someone's here
[25:36] um
[25:37] and you want what they got you can
[25:39] approach
[25:40] uh tactically and not just be deleted as
[25:44] you uh approach
[25:46] um so some of these areas are good um
[25:49] and i just want to figure out you know
[25:50] do i want to just
[25:52] add some more of this uh
[25:55] structural stuff to up to cover high or
[25:57] maybe do i want to leave it for some of
[25:59] the
[26:00] the man-made stuff and
[26:03] i think
[26:05] uh i mean obviously i think here
[26:08] is quite cover height
[26:10] uh just need to think about
[26:14] uh that peaking angle
[26:16] can i
[26:17] peak this angle and engage whoever's
[26:20] behind it um
[26:22] fairly maybe this area
[26:26] this this this little uh
[26:29] um
[26:30] nook in the in the structure that that
[26:32] could be like a little
[26:34] nice
[26:35] uh shooting gully kind of thing so i
[26:37] might just move some of this rock out
[26:39] the way
[26:42] we like as artists we like pushing rocks
[26:45] and things up against
[26:46] the
[26:47] bottoms of walls quite a lot
[26:50] just because that beds everything into
[26:52] the environment right and you don't see
[26:53] those polygons clipping straight through
[26:56] like floor like floor wall like straight
[26:58] polygons but that also means that
[27:00] designers showers there's quite a lot
[27:02] because
[27:03] obviously you want as a designer to
[27:05] stack up clean against that wall and be
[27:07] able to peek over it and know that
[27:08] that's all along that wall is going to
[27:10] be like a good crouch cover height so
[27:12] it's one of those things we have
[27:13] conversations with can you just move
[27:16] this rock that you put in the way of my
[27:17] nice cover please and that's exactly why
[27:19] we do this kind of pass as well like
[27:20] obviously environments are not built
[27:23] just as art we work very closely with
[27:25] the designers as we're putting one
[27:27] together to make sure they work from
[27:28] both so we both kind of are growing grow
[27:32] to understand one another's requirements
[27:34] for an environment as well
[27:36] i'm going to take this moment here real
[27:38] quick you guys keep working i'm going to
[27:39] take this moment here oh that's too
[27:41] close
[27:42] uh i want to shout out uh not boof in
[27:45] the chat right now uh not boof knows
[27:47] better he knows that
[27:50] environment artists don't work on login
[27:51] servers but he knows that ai programmers
[27:54] and physics programmers don't work on
[27:56] login servers too but he's acting like
[27:58] he doesn't in the chat you know and it's
[28:00] making for a lively conversation uh you
[28:02] can keep doing that or you can enjoy the
[28:05] show i'd recommend enjoying the show
[28:08] get back to the show
[28:11] what is a login server
[28:20] we only speak in terms of rocks and
[28:23] poly counts
[28:31] um
[28:32] yeah while i'm doing this just uh to
[28:34] make you know some conversation um
[28:39] so you know obviously dressing
[28:41] uh
[28:42] building up the location and dressing
[28:44] it's like
[28:46] kind of one of the last hurdles of the
[28:48] location but um
[28:50] you know as as we're starting uh you
[28:53] know a location like this
[28:56] um
[28:57] they obviously do the the usual you know
[29:00] white box gray box pipeline and stuff
[29:02] like that
[29:03] um
[29:04] but when it comes to like producing the
[29:06] content um
[29:08] you know a little bit about that
[29:10] process uh
[29:11] [Music]
[29:12] we kind of stop and we we think uh you
[29:15] know how do we want to break this up
[29:17] like who do we want on
[29:19] on what um
[29:20] you know that could be down to
[29:23] people's preference what they want to
[29:25] work on their strengths etc
[29:27] um
[29:28] and then we break it down from there and
[29:30] then
[29:31] so like in this case uh
[29:34] you know cairo uh handled all the
[29:37] the structural elements which you know
[29:39] he's going to show
[29:40] hopefully later on a bit about that
[29:42] process as well
[29:43] [Music]
[29:45] and
[29:46] i focus mainly on materials and some of
[29:48] the structure kit over here
[29:50] but you know as we're working uh
[29:53] you know it's it's constant
[29:54] communication like oh hey
[29:57] uh could i get this this kind of asset
[29:59] because at the end of the day you know
[30:01] we're trying to make a content kit
[30:04] uh that a lot of different disciplines
[30:06] and people can can get in and
[30:09] and start building these locations maybe
[30:11] maybe this part might be a bit too meta
[30:14] um but definitely like placing down the
[30:16] locations and stuff like that so
[30:18] um
[30:20] it's important that the content is
[30:21] robust and you know it works well for
[30:23] everyone so
[30:24] you know that constant communication is
[30:26] is great
[30:27] um an entire skill in itself yeah
[30:30] absolutely just uh did you like
[30:33] it's like
[30:34] it's like building with lego but you've
[30:36] also got to decide what shape and form
[30:38] all the bricks take as well uh you know
[30:40] from the get-go as well so it's about
[30:42] constant particularly at the start when
[30:44] you're white boxing you're basically
[30:46] just throwing in loads of shapes in
[30:48] quite a broad kind of sense and then
[30:51] it's about breaking those shapes down
[30:52] into sensible things that can be
[30:54] combined and recombined in different
[30:56] ways and then it's about figuring out
[30:58] like the final look of all those things
[30:59] and making them all sit together as a
[31:01] kit at the same time it's then been
[31:03] building the actual locations themselves
[31:05] so yeah it's a it's quite a long process
[31:07] actually especially when you're starting
[31:09] with nothing you might just be starting
[31:10] with some concept art and sometimes
[31:12] that's quite loose concept art to then
[31:14] break that whole thing down into like
[31:16] usable kits and stuff is is quite a long
[31:19] job
[31:21] yeah i think we had uh
[31:23] you had fred on last time he was going
[31:25] over some of the concept art for this
[31:30] maybe last time all the time before that
[31:32] oh gosh
[31:34] and it's hard to remember
[31:36] you do too many of these i won't
[31:38] complain we do a lot of these i've also
[31:41] done also too many a lot well don't have
[31:44] too many of these the the fever that
[31:46] started during last week's show
[31:49] turned into like one of the worst colds
[31:51] of my life last week i'm just coming out
[31:53] of it now
[31:54] uh two days ago we were thinking we were
[31:56] gonna have to cancel the show because my
[31:57] voice sounded like deckard kane
[31:59] diablo
[32:01] should take a lot of relationships but a
[32:03] fever broke yesterday which was nice
[32:10] folks who watched yesterday's isc
[32:13] uh
[32:14] i was that was that was a lot of cough
[32:16] drops and a lot of uh
[32:18] syrup
[32:19] going to get that show recorded
[32:24] it's not as bad as a
[32:25] citizencon
[32:27] uh 2019
[32:30] we had to do that you know the whole 10
[32:32] hours on the stage and
[32:34] sent out
[32:35] sent out a volunteer for for for cough
[32:38] medication he came back with a bottle of
[32:40] stuff and i took a couple of sips i'm
[32:42] like oh yeah this will work go get me
[32:43] more and it comes back with a bunch of
[32:44] bottles and it's about halfway through
[32:46] the show
[32:47] we're about five hours into the show at
[32:49] this point uh during during during the
[32:51] cosplay contest and i'm starting to get
[32:54] a little wobbly and i'm like
[32:56] am i lit
[32:58] and i look at the bottle and it's it's
[32:59] yeah it's got alcohol in it and i'm like
[33:01] oh
[33:02] i've been i've been pre-gaming the
[33:04] entire show haven't i
[33:06] but then i got like the last hour of
[33:08] citizencon in 2019 i was like super
[33:11] paranoid that consummate professional
[33:13] that that i was just like does everybody
[33:16] know does everybody know i'm i'm just
[33:19] borderline drunk at this point
[33:21] uh because of the coffee maybe i'm not
[33:23] supposed to would be admitting those
[33:24] things but
[33:29] so important bit here like validation
[33:32] from a first person point of view like
[33:34] super important we have like scale
[33:37] references as well that we use quite a
[33:38] lot for human scale
[33:40] super important
[33:42] otherwise you'd end up making things far
[33:43] too big or far too small so getting in
[33:45] and actually dropping down and and
[33:47] playing the game um
[33:49] it's really just that constant iteration
[33:51] i swear to god if it has my face i'm
[33:52] shutting this show down
[33:55] no unfortunately they are generic grey
[33:58] people
[33:59] one team of professionals in this
[34:01] company
[34:03] glad we're here with him today
[34:07] like that come on
[34:14] yeah just uh finding any clipping issues
[34:17] as well like
[34:19] jumping into into game
[34:21] making sure you know i got the scale
[34:23] because it's one thing
[34:25] you know
[34:26] zooming up here
[34:28] like a demigod um but it's a
[34:31] completely different story at human
[34:33] height so just want to make sure you
[34:35] know the ratio
[34:36] like the size of these these rubble
[34:38] piles are not too big
[34:40] uh
[34:41] they're believable because i you know if
[34:42] they're any bigger they'd be actual
[34:45] pieces of the wall kind of thing
[34:48] um
[34:49] and i think uh you know this is a good
[34:52] base uh so if you know this was an
[34:55] unoccupied you know this would probably
[34:57] be where it's at uh
[34:59] you know we'd work with design to add
[35:01] some loot crates um
[35:04] uh
[35:05] potentially uh you know other
[35:08] interactable spots etc uh but it you
[35:11] know it would be fairly unoccupied
[35:14] it's been gone for a long time and
[35:17] you're probably the first to stumble
[35:18] across it in quite some time
[35:20] uh
[35:21] but as we said we're going to make an
[35:23] occupied overlay um so you know the
[35:25] premise of that is
[35:27] uh
[35:29] you know a certain
[35:31] type of uh npcs has come along um
[35:35] and they're kind of hunkering down here
[35:36] maybe they're hiding from their law
[35:38] and they kind of want to
[35:40] you know set up shop somewhere uh that's
[35:43] you know defensible uh with with kind of
[35:46] minimum requirements of materials um
[35:49] [Music]
[35:51] uh or you know
[35:54] explorers who have you know kind of
[35:56] making camp here um you know so that
[35:59] occupied is is kind of like a broad
[36:01] spectrum uh it doesn't always have to be
[36:04] you know a hostile encounter
[36:06] it could yeah as i said like an explorer
[36:08] it's just i know i've been trekking you
[36:11] know i'm gonna pop a sleeping bag down
[36:13] here and
[36:15] have a little kip under the stars
[36:18] um
[36:19] but i think i think we'll go with
[36:22] er maybe a combat
[36:24] encounter for this one
[36:27] um
[36:27] [Music]
[36:28] just cause
[36:30] it'll be cool
[36:32] um
[36:33] and
[36:34] i think you know that makes a lot more
[36:36] use of uh this kit where
[36:39] they've kind of salvaged uh some
[36:41] scrap parts from
[36:43] you know around the planet of
[36:45] you know some some of the metal elements
[36:48] that were once in the outpost they've
[36:50] kind of retrofitted into like some
[36:52] sheets and to use this cover or
[36:55] makeshift structures kind of thing
[36:57] um so i'm just going to grab a couple of
[37:00] these
[37:01] and i think i'm going to start blocking
[37:03] out um some of those these cover areas
[37:07] i was talking about before okay and even
[37:10] with the like the just the pure ruined
[37:13] ones you'd still see some of this stuff
[37:14] we want to build up layers of history
[37:16] it's not like a single thing happened to
[37:18] this outpost that caused it to collapse
[37:20] and that's how it's been left maybe like
[37:22] 50 years ago someone came in for a while
[37:24] and then left again so it's about
[37:26] building up some layers to the to the
[37:28] sort of story of the location as well
[37:30] and not just being a bit like one note
[37:31] about it
[37:34] yeah
[37:35] uh you've also got uh about 20 minutes
[37:37] left
[37:38] 20 minutes yeah i know mate
[37:40] i was just looking at the clock
[37:43] i'm going to start spray bottles
[37:47] yeah and to answer uh there's some chat
[37:49] there's some chat going on about the uh
[37:50] the frame rate you're seeing uh this is
[37:52] because we're all in four distinct
[37:54] locations and we're screen sharing over
[37:56] zoom
[37:57] zoom has basically two screen sharing
[37:59] modes one where it's high frame rate but
[38:01] it's low picture quality and one where
[38:03] it's a slightly lower frame rate but it
[38:04] gives you a higher picture quality and
[38:06] in the testing we were doing before the
[38:08] show we opted to maintain the higher
[38:10] picture quality at the lower frame rate
[38:12] so yeah that's what you see you can see
[38:14] that it only really suffers when it's
[38:16] actually moving the camera around yeah
[38:18] it's moving fine for joel on his end
[38:20] yeah this is just
[38:22] when you're scaling stuff and rotating
[38:23] stuff you're like you're fine really i'm
[38:25] soon
[38:34] that was not benny hill music
[38:36] who knows what that music was from
[38:39] i'm in the chat somebody in the chat had
[38:40] to recognize that
[38:42] somebody very old
[38:44] so i think what i might do is uh i'll do
[38:47] like one area here
[38:50] um
[38:51] and then i think we'll give kyrie some
[38:53] time to to show
[38:55] yeah uh what he was on and then in the
[38:57] background i'll continue and then maybe
[39:00] if there's some time at the end we can
[39:01] kind of jump back to it and
[39:03] show you where where i got up to kind of
[39:05] thing
[39:06] we kind of want to
[39:08] put this on a planet as a sort of
[39:10] final thing anyway just so you can see
[39:12] it all in context but yeah we won't have
[39:14] time to probably build
[39:16] what we normally might call a full a
[39:18] full one today yeah maybe if it's not
[39:20] too far along i i guess we will we could
[39:23] use one of the existing ones uh we're
[39:25] just very weary about you know spoiling
[39:29] too much of it but i'll just give joel a
[39:31] task to finish this off
[39:33] next week we'll get in
[39:38] hey i gotta do these shows every week
[39:39] you wanna come
[39:40] back parked it
[39:43] you just needed jiren for it
[39:48] otherwise my producer shouts at me
[39:57] maybe we need the pressure of a twitch
[39:58] audience for everything we do i think we
[40:01] might maybe we'd get
[40:03] stuff done a bit quicker
[40:07] that has not been my experience
[40:13] besides we need all those
[40:15] uh we need all those devs dedicated to
[40:17] uh bed sheet deformation
[40:30] you know i think
[40:32] you know for this little area this might
[40:34] be enough
[40:36] have we got terrain modifiers in this
[40:38] already joel oh we do
[40:40] oh we do oh that's nice i did a pass
[40:42] before beforehand
[40:44] good
[40:46] because obviously we're building on a
[40:47] we're building on a flat surface right
[40:48] now but when we get onto the planet no
[40:51] planets a flat surface so we have the
[40:53] terrain modification volumes which will
[40:55] give us a nice flat
[40:57] uh it'll deform the verts of the terrain
[40:59] event essentially to give us a nice flat
[41:02] place to put this on
[41:10] and also we've got exclusion volumes
[41:12] because um
[41:14] you could also put this in the middle of
[41:16] a bunch of rocks and trees and the
[41:18] exclusion volumes will cut out the
[41:19] scattered assets of the of the planet
[41:22] um we kind of need to make a lot of
[41:24] these a little bit far
[41:26] fire and forget because we
[41:28] have a lot of them we want to use them
[41:29] over and over and over in different
[41:31] combinations
[41:32] uh becomes very hard to manually manage
[41:35] each individual location as you can
[41:36] probably imagine so like the more
[41:39] automated we can the more safe we can
[41:41] make these to place anywhere on a planet
[41:43] the better for us um
[41:46] yeah fewer bugs and all that stuff
[41:53] just thinking about adding some side
[41:55] cover here
[42:04] you guys aren't hearing me cough right
[42:05] i'm rocking the mute button
[42:07] okay maybe caught the tail end of that
[42:09] last one
[42:17] that that seems uh
[42:20] about right
[42:21] uh
[42:23] you know so that would be
[42:24] you know it doesn't need to be much more
[42:26] than that um
[42:29] at the moment
[42:30] um
[42:32] so yeah i guess if we want to uh
[42:35] switch over and kyra can go over some of
[42:38] the asset creation
[42:39] side of stuff
[42:41] um
[42:42] i'll continue working this up in the
[42:44] background
[42:45] you won't you're maybe um maybe get it
[42:47] on planet yes you want to tag out and uh
[42:51] cairo you started your screen share
[42:54] yeah can do that
[42:58] yeah it was uh
[43:00] i don't remember who it was but uh it
[43:01] was it was the match game
[43:07] cool
[43:10] uh
[43:10] yeah
[43:13] all right cool and we'll switch to
[43:15] cairo's uh the screen change
[43:20] so
[43:21] joel was talking a little bit about
[43:23] earlier at the beginning of when he was
[43:24] building a scene of those sort of
[43:26] bare-bones strip-backed
[43:28] structures that we're making that we
[43:30] then
[43:31] you know build our kits on top of and
[43:33] sort of supplement and add secondary and
[43:35] tertiary details to
[43:37] so i'm just going to demonstrate with
[43:39] our houdini tool how we would go about
[43:42] making one of those structures and also
[43:44] introducing some damage for that and how
[43:46] about and how we do that in a procedural
[43:48] way so that we can knock out quite a few
[43:51] of these and get them done in a
[43:53] relatively short time frame
[43:56] so
[43:57] what's cool about houdini is it's very
[43:59] much a node based software and it's very
[44:00] much non-destructive so basically
[44:02] anything we do here can be replicated so
[44:05] that i don't have to go into max and
[44:07] make another broken wall
[44:09] so
[44:11] you can either
[44:12] for this tool you can give it a
[44:15] mesh input and then that's going to be
[44:19] what's going to be damaged and deformed
[44:21] or you can give it a profile input which
[44:24] is what we're going to do in this case
[44:26] so i think
[44:28] this is the one so this is the
[44:30] pretty recognizable profile of the
[44:32] buildings that we have for the
[44:33] colonialism outposts probably would have
[44:35] been seen in
[44:37] citizencon on pyro so now we're going to
[44:40] take this wall and we're going to just
[44:42] mess it up a little bit
[44:43] so what i can do is
[44:46] i can make
[44:47] a curve
[44:49] which we're then going to extrude that
[44:51] profile along
[44:54] and then what we can do pretty freely in
[44:56] houdini without too much extra fuss is
[44:59] we can also
[45:00] define extra points for it
[45:03] so i can just add
[45:04] another point over there and it's going
[45:06] to instantly give me
[45:07] a wall that's been curved for us
[45:10] um
[45:11] we do have quite a bit of extra
[45:13] functionality within this so if i wanted
[45:15] to i could just snap stuff to the grid
[45:17] and move it across over here
[45:19] if we wanted another section of wall
[45:22] probably wouldn't do in this destroyed
[45:24] situation
[45:25] but we can do that as well
[45:28] then if i go into some of the sub
[45:30] functions that we have over here we can
[45:31] also play around with what areas are
[45:33] going to be curved what are going to be
[45:35] straight
[45:36] so we do have a lot of freedom with this
[45:38] technique to
[45:40] really get quite a lot of content going
[45:42] for it
[45:44] but
[45:44] i think at the moment we'll we'll deal
[45:46] with quite a simple wall just so that we
[45:48] can get this done fairly quickly so what
[45:50] i'm going to do is i'm just going to go
[45:54] back to my curve
[45:57] delete these and we'll just have a
[45:58] straight wall about
[46:01] yeah i think about 20 meters long
[46:04] and then we can also supplement this geo
[46:06] that we've created with additional geo
[46:08] whether that's procedural or not so i've
[46:11] just added
[46:13] some boxes to this over here which are
[46:15] going to make up the interior walls of
[46:17] the structure
[46:20] now for the the interesting part of the
[46:22] tool is
[46:23] we can run the damage simulation and
[46:27] then it gives us something like this
[46:29] so it can really
[46:31] very quickly give us an idea of what the
[46:33] what the damage looks like and
[46:36] we can very quickly iterate on that
[46:39] so this has been done
[46:41] just by
[46:43] placing some booleans around the
[46:44] structure and then we apply a noise
[46:46] modifier and then that sub function
[46:49] looks something like this
[46:51] so you can see it's just a it's a lot of
[46:53] noise and a lot of spheres but what's
[46:55] what's really nice about it is that we
[46:57] have quite a lot of control over the
[46:59] look and feel of the damage
[47:01] so this is quite a large structure so if
[47:03] i wanted to i could increase the height
[47:06] of this noise and then that would
[47:09] sort of increase
[47:10] the the sort of jagged edges and the
[47:12] look of that
[47:13] or we can go back to something that's
[47:15] been a bit more worn down by time
[47:18] and because this is a boolean operation
[47:21] i have control over each of the
[47:23] individual spheres that make up the
[47:25] damage so
[47:26] if i just want to move some of the
[47:28] damage over a bit you can also do that
[47:32] so it makes it very quick for us to art
[47:34] direct the kind of damage and the style
[47:36] that we would want
[47:41] and but perhaps most amazingly is that
[47:43] it's all non-destructive so you're
[47:46] you're not ever
[47:47] you can go back and change any aspect of
[47:49] it at any point in the process so if i
[47:52] don't decide i didn't like the damage i
[47:53] can go right back up my node tree and
[47:56] we've got a whole wall intact and we can
[47:58] just go back down again
[48:00] and it generates
[48:02] variations it's super quick as well like
[48:05] a b c d e that easy
[48:07] yeah so once we end up with something
[48:09] like this that we like the look of we
[48:11] think it provides a nice silhouette for
[48:14] the play on the horizon if this reaches
[48:16] high enough to see that that is
[48:18] obviously this is a little bit more
[48:20] built up and less
[48:22] run down than the one that joel was
[48:23] demonstrating but we have quite a nice
[48:26] variety of those
[48:27] so once we've got to that point
[48:29] we're going to run chamfer modifier on
[48:32] our edges because we would ideally like
[48:35] to get a very distinct difference
[48:38] between the the stucco walls and then
[48:41] the concrete and the sort of interiors
[48:43] of the walls
[48:45] so we just do that so we can
[48:48] generate edge decals for sid walls so
[48:51] all i'm doing over here is
[48:53] i'm duplicating
[48:56] the boolean operation
[48:59] and
[49:00] getting geometry that we can use for age
[49:02] decals and we can apply
[49:04] various materials to that just to break
[49:07] up the material read of that wall
[49:11] and then another great thing about
[49:12] houdini is
[49:16] the um the ability to
[49:19] automatically generate uvs for this at
[49:21] certain
[49:22] texture ratio that we require
[49:25] so it might not get you all the way but
[49:27] it gets you definitely i'd say about 90
[49:29] percent of the way and this is basically
[49:32] ready for us to
[49:34] throw into 3ds max and get into engine
[49:36] and see how it feels in place
[49:42] yeah houdini's got
[49:44] quite a lot of functions that are really
[49:47] useful for us so we can design different
[49:48] material types we can split since
[49:51] various different fbxs or 3d files
[49:55] and yeah it's very useful and as we said
[49:58] so now
[49:59] we've now generated this wall with one
[50:01] input but i've now decided i would like
[50:04] to go back to this mesh generated in max
[50:08] all i have to do is i have to plug this
[50:09] into the boolean operation and then it's
[50:12] going to inherit
[50:14] that damage
[50:16] now it's not as bespoke as the the other
[50:18] wall because it's not been tailored to
[50:20] the specific mesh but all we have to do
[50:22] is then
[50:24] go in and just have a bit of play around
[50:27] move these spheres around
[50:31] and you can really end up with anything
[50:33] that you want
[50:38] so this was a pretty much the process
[50:40] that we used to generate all of the base
[50:43] structures for the derelict outpost and
[50:45] that's
[50:46] part of the kit that we built up and
[50:48] that troll started to use with
[50:52] and it just meant we could essentially
[50:54] take a load of the meshes we'd already
[50:55] made for the outposts and just run them
[50:57] through houdini to create destroyed
[50:59] variants of them that quick
[51:01] yeah yep
[51:03] and then with new tech with new tools
[51:05] like mighty bridge that you don't even
[51:07] uh yeah
[51:08] it comes online yeah we're not using it
[51:10] here in this example but eventually you
[51:12] won't even have to go between the two
[51:14] programs at some point yeah hopefully
[51:16] this could all be an editor yeah
[51:28] how much time do we have left jared well
[51:30] i got about nine minutes
[51:42] do you wanna do you wanna schedule up
[51:44] sort of yeah as much as they can be here
[51:49] i'm just gonna remember how again
[51:52] you may have to stop your share kyra
[51:55] cool
[51:56] sometimes zoom lets you take over sharon
[51:58] sometimes it doesn't it's pretty
[52:00] weirdly inconsistent
[52:04] can i give a shout out because
[52:06] um
[52:07] jared is all right yeah
[52:09] my boys my sons are watching downstairs
[52:11] on the twitch stream so i said i'd give
[52:13] them a shout out so dexter felix shout
[52:15] out there you go
[52:18] uh and to a freak sheep as we discussed
[52:21] earlier today uh the frame rate is
[52:23] because we're screen sharing over zoom
[52:25] at high picture quality and low frame
[52:27] rate uh in order to maintain high
[52:29] pressure quality because we're not all
[52:30] in the same place so what you're see
[52:32] what you're seeing is frame rate is not
[52:34] the program as it's being used uh by
[52:37] joel or cairo what you're seeing is zoom
[52:40] brushing it down
[52:42] i'll leave the uh fps counter up here if
[52:45] you like just so you know where it's
[52:46] like 60.
[52:48] um
[52:50] yeah so here i am on
[52:52] stanton2b damar
[52:55] i've gone ahead and i've placed you know
[52:58] that base module down i only got like a
[53:00] little bit more
[53:02] more work done on on the structure stuff
[53:05] um so it won't look terribly too
[53:07] different uh but a couple of things you
[53:09] know i wanted to highlight um
[53:12] you know one of the the first things is
[53:14] the the
[53:15] the terrain um
[53:18] entity that's you know gonna get rid of
[53:20] some of these unwanted large structures
[53:22] um
[53:24] as well as uh
[53:26] there's the smoothing uh volume so
[53:29] we don't always have to find you know
[53:32] ideal flat spots anymore you know we
[53:34] could have you know a structure up here
[53:37] silhouetting
[53:39] um on the sky etc um
[53:42] and those two systems yeah just
[53:44] basically mean that
[53:46] you know we
[53:47] when scouting for locations we just find
[53:49] somewhere that looks cool now um
[53:52] and obviously you know
[53:54] we don't want to go too overboard with
[53:56] the the smoothing volume because you
[53:58] know
[53:58] we're going to start ruining
[54:01] the behavior of the planet and it's it's
[54:03] going to look a bit unnatural but they
[54:04] still don't work well on like cliff
[54:06] hedges or like super steep slopes but
[54:12] so hopefully if i
[54:14] bring back the oc
[54:16] that i placed
[54:18] you can see i got rid of that big rock
[54:21] we've got all those elements placed down
[54:25] on planet
[54:27] um
[54:29] see all the rock assets are blending
[54:31] much much more much better now yeah so
[54:34] all those ones that are black in the
[54:35] construction level are now picking up
[54:37] the tint of the biome that they're on
[54:40] essentially
[54:41] to blend blend really nicely
[54:45] oh sorry i'm moving too quick i i keep
[54:47] forgetting about the
[54:50] so i'll move
[54:53] um
[54:54] yeah so i guess at this point it would
[54:56] be about finding
[54:59] errors uh
[55:00] you know brushes that aren't meant to be
[55:03] there i think i forgot completely forgot
[55:05] to
[55:06] put one of the brushes on the correct
[55:08] layer so
[55:09] [Music]
[55:11] i can quickly fix that
[55:14] if i release that oc
[55:17] well
[55:20] to be overwritten
[55:22] and then i'm just gonna
[55:23] update it real quick
[55:28] i did that in a in a separate editor um
[55:31] so yeah now it's back
[55:33] um
[55:34] it's just a i had to
[55:36] delete the oc because it
[55:38] it
[55:40] um locks it for for writing if it's been
[55:42] referenced in a in a different level
[55:44] just so you can't
[55:45] mess anything up um we use we use
[55:49] multiple editors all the time because we
[55:50] have our construction levels we have the
[55:52] levels with the context in we often we
[55:54] maybe even have three or four editors
[55:56] open at once because we deal with like
[55:57] these hierarchies of locations
[56:01] yeah
[56:02] so i guess uh from from here what i
[56:05] would do is
[56:06] i kind of identify areas that i i kind
[56:09] of want to work up up a bit more i think
[56:12] you know areas here could use a bit more
[56:14] feathering
[56:15] um into into the terrain like this area
[56:18] works well uh just trying to see if i
[56:20] could get
[56:21] more of this around here
[56:23] um
[56:25] i think the rubble piles are good
[56:28] maybe
[56:29] i'd introduce some more to kind of
[56:32] insinuate a wall that was there but it's
[56:35] no longer there so kind of tracing out
[56:38] like um the outline of a building with
[56:40] some of these rubble piles
[56:43] um
[56:44] and then implementing
[56:46] uh start implementing some of the
[56:49] um
[56:50] you know traversal mechanics uh vaulting
[56:53] um
[56:54] ledge grabs and stuff so you could get
[56:55] up here
[56:56] um get some ai in as well yeah mike
[56:59] might send us over to design say hey if
[57:02] you got any ideas of maybe where we
[57:04] could hide some loot um
[57:07] that kind of thing uh
[57:10] and then it would just be like working
[57:12] it up um
[57:14] a bit like slowly but surely over time
[57:16] like you don't have to commit to
[57:17] anything like i could put this in here
[57:20] and like now i've got it in here it just
[57:22] feels kind of awkward
[57:24] on the silhouette but you know
[57:27] i could either remedy that by um
[57:30] filling it out like i think maybe what
[57:32] would be good is if i added another
[57:34] platform over here
[57:35] um let me get some verticals there as
[57:37] well
[57:38] and then maybe you've got to jump over
[57:39] here or something like that or use a
[57:42] tractor beam to to kind of makeshift the
[57:44] bridge using some of the
[57:46] the metal sheets that are lying around
[57:48] um
[57:49] just that kind of thing and then
[57:52] you know once once all that those
[57:54] foundations are there like other
[57:56] elements that are currently there are
[57:58] they
[57:58] do they feel good are they fun kind of
[58:01] thing and then you'd kind of go in and
[58:03] start polishing things like
[58:05] cleaning up clipping and um
[58:08] putting like the bells and whistles on
[58:10] everything really
[58:12] get some movement in as well i think
[58:14] you start adding some soft decks we've
[58:16] got some physicalized cloth and stuff
[58:18] that uses the wind from the planet so
[58:20] adding that is always a win because it
[58:22] just adds that sort of life and movement
[58:23] to the scene
[58:25] uh there's a question in the chat uh is
[58:27] this considered one entity or are
[58:29] multiple entities within the objective
[58:32] system i guess this is made up of two
[58:34] object containers right now you've got
[58:36] your base object container and then the
[58:38] overlay object container that sits on
[58:39] top of that so at the moment this is two
[58:41] entities but those object containers
[58:44] will also contain entities themselves so
[58:46] the object containers you know lighter
[58:48] entities cover markup as entities fog
[58:51] volumes are entities
[58:53] soft dx's and like everything's lots of
[58:56] stuff are entities within the in the us
[58:58] vfx yeah all of that yeah anything
[59:01] anything that's basically dynamic and
[59:03] isn't just a static brush there's an
[59:05] entity of some kind
[59:07] we've we've basically made all of this
[59:09] out of just static geometry right now so
[59:11] that's just static i mean even that's a
[59:14] type of entity if you want to get
[59:15] technical about it
[59:19] but it's like there's a difference
[59:20] basically anything that's generally
[59:22] dynamic or interactable is is what we'd
[59:24] call an entity the ocs are entities
[59:26] themselves but the nfcs are really just
[59:28] entities that contain
[59:30] other entities like we deal a lot with
[59:33] hierarchies
[59:36] oh oh you died is that where we ended
[59:39] and that's the end of the show good job
[59:42] oh it's night time uh yeah the planet
[59:45] spanners rounds
[59:47] but like
[59:49] just
[59:51] like we've built something within the
[59:53] space of an hour that's actually a
[59:55] pretty cool little thing that you could
[59:56] easily come across just on your travels
[59:58] and maybe it's populated with
[1:00:01] a bit of ai maybe you find a little bit
[1:00:03] of loot this is the kind of thing maybe
[1:00:05] there's a combination of five or six of
[1:00:07] these types of modules in one area so
[1:00:09] that you have a little sort of just
[1:00:10] encounter that you can easily come
[1:00:12] across
[1:00:13] um yeah
[1:00:15] yeah
[1:00:16] you spun the planet so fast to knock
[1:00:18] himself over
[1:00:20] i mean once
[1:00:21] once we have like
[1:00:23] the kits and the sort of assets and
[1:00:25] stuff because that is usually the thing
[1:00:26] that takes the most amount of time is
[1:00:27] the asset work actually sort of world
[1:00:29] building and set dressing like joel's
[1:00:30] been doing here is actually that it's
[1:00:33] really fun and and doesn't take as much
[1:00:35] time as actually putting the sort of
[1:00:36] kits together in the first place what is
[1:00:39] that oh is that is that it's not a guy
[1:00:41] though
[1:00:42] what is that
[1:00:44] i don't know
[1:00:47] and with that my my mic the vfx uh
[1:00:51] principal's going to showers now for
[1:00:52] zooming in nope nope there that'll be
[1:00:55] that'll be that'll be a mystery that'll
[1:00:56] be a mystery we won't reveal that today
[1:00:59] uh that's it everybody you did it
[1:01:02] congratulations
[1:01:04] cairo you've done your first you've done
[1:01:06] your first video for star citizen how
[1:01:07] did it feel
[1:01:09] yeah good i enjoyed it thanks for having
[1:01:11] us again it's not so bad it
[1:01:13] always feels more anxiety-inducing than
[1:01:16] it ever actually is
[1:01:17] um
[1:01:19] joel cairo eddie thank you for taking
[1:01:21] the time out of the end of your week to
[1:01:22] hang out with us uh if you haven't
[1:01:25] checked it out already check out uh
[1:01:26] inside star citizen from yesterday it's
[1:01:28] a full sprint report episode with
[1:01:30] updates from
[1:01:32] development teams all across the world
[1:01:34] uh remember that invictus launch week
[1:01:36] starts next week uh
[1:01:39] you can go to the
[1:01:40] robertsspaceindustries.com website and
[1:01:42] find out more details about that it's
[1:01:44] one of the biggest events of the year uh
[1:01:46] yes it is it is coming to the planet
[1:01:48] crusader this year uh for the first time
[1:01:51] so who knows
[1:01:53] what else
[1:01:55] that
[1:01:56] enables and leads to we'll have to find
[1:01:58] out uh and then uh the next two weeks of
[1:02:01] isc are all invictus launch week related
[1:02:04] uh we'll be exploring we'll be exploring
[1:02:06] uh um uh some of the new uh uh ships and
[1:02:09] vehicles that are coming to the star
[1:02:10] citizen universe uh throughout the event
[1:02:13] some that you're familiar with
[1:02:14] some that
[1:02:16] you're probably not supposed to be
[1:02:17] familiar with but you are because you
[1:02:19] read certain subreddits and maybe one or
[1:02:21] two that it's a complete surprise who
[1:02:24] knows i don't know what you do with your
[1:02:25] time
[1:02:27] maybe the whole thing's gonna be a
[1:02:28] surprise
[1:02:29] so uh so yeah so tune in for that and
[1:02:32] then we'll be right back here uh next
[1:02:34] friday with the ai team uh we got
[1:02:37] members of the ai content feature in
[1:02:39] tech teams on we've been talking about
[1:02:41] their work uh quite a bit lately in
[1:02:43] inside star citizen and they'll be here
[1:02:45] to answer your questions uh look out for
[1:02:47] the question gathering thread that goes
[1:02:48] up uh usually on mondays for that if you
[1:02:51] want to uh uh
[1:02:53] submit your questions jared can you
[1:02:55] adopt me uh no uh i don't even have like
[1:02:58] like super formal residency here in the
[1:03:01] uk right now i'm just here on a visa so
[1:03:03] that would that would be a lot of
[1:03:04] paperwork
[1:03:05] um
[1:03:06] just
[1:03:06] not gonna happen
[1:03:08] all right everybody take care see you
[1:03:11] next week
[1:03:12] thanks jared bye everybody thanks
[1:03:14] everyone bye bye all right
[1:03:18] what was that thing
[1:03:20] all right i'm gonna go no idea
[1:03:23] i'm gonna suss it out now
[1:03:25] i think it was just some weird vfx in
[1:03:27] the
[1:03:29] weird planetary like wind the effects
[1:03:31] yeah it's like a little
[1:03:33] serpent in the sky
[1:03:35] i don't know i don't want it didn't
[1:03:37] didn't look super glitchy at least it
[1:03:39] sort of looked like it was supposed to
[1:03:41] be but now now now we've like
[1:03:44] i've left the stream
[1:03:45] the stream's still on but they can't see
[1:03:46] it so they're just being tortured right
[1:03:48] now with our discussion of it
[1:03:50] they can't see what is it oh but they
[1:03:52] can hear us right now they can hear us
[1:03:53] but they can't see it i mean oh god
[1:04:07] wow

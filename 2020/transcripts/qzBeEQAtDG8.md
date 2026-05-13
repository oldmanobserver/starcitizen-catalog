# Star Citizen Live: Working With Gas

**Video:** https://www.youtube.com/watch?v=qzBeEQAtDG8
**Date:** 2020-05-01
**Duration:** 1:02:10

## Transcript

[00:01] hi everybody welcome to another edition
[00:03] of star citizen live game dev I'm your
[00:05] host jared huckaby and if you've never
[00:07] seen a star citizen live game dead
[00:08] before it's where we take about an hour
[00:10] out of our Friday the end of our week
[00:12] and explore a little bit about the
[00:14] process that one of our developers or
[00:16] group of our developers do in the past
[00:19] we've created characters we've created
[00:21] creatures crotch spiders which we won't
[00:26] talk about we've done spaceship concepts
[00:29] today we are we are going where no game
[00:33] that has gone before into the realm of
[00:35] VFX and exploring some of the work that
[00:38] our team is doing developing our gas
[00:40] cloud tech for well first star citizen
[00:43] and squadron 42 and joining me on the
[00:45] show right now are two people that I was
[00:48] gonna say need no introduction but I'm
[00:49] pretty sure this is the first time
[00:50] they've been on the show so I guess we
[00:51] should do an introduction I always do an
[00:53] introduction anyway Jacob and Oliver
[00:55] from the VFX team hey guys doing good
[00:57] things
[00:59] so welcome to the show there's a first
[01:02] time on the show
[01:03] let's tell tell folks a little bit about
[01:05] who you are and what you do for star
[01:07] citizen we'll just start at the top and
[01:08] go down so Jacob who are you what do you
[01:11] do
[01:11] yeah I'm Jacob I'm a VFX technical
[01:15] artist working ci g4s wouldn t you and
[01:21] what is it what is it technical VFX
[01:23] artists do I guess I could confident say
[01:28] that we mostly work within a program
[01:30] called Houdini as its I guess it's what
[01:33] we work in mesh at the time it's a bit
[01:36] like 3ds Max and Maya but just a bit
[01:38] different it's been more technical and a
[01:40] bit more more suited for part artists
[01:43] yeah it's been more of a simulation
[01:45] based program which makes it great for
[01:47] of gaming with BD bees and gas cloud and
[01:50] how about you alright so I'm Oliver I'm
[01:53] a devious visual effects technical
[01:55] artist yeah as Jay said like we work on
[01:59] like Houdini pipeline and we also
[02:01] support the visual effects teams and
[02:04] other teams around the company working
[02:06] on the PU and squadron and like helping
[02:09] them with the tools and the processes
[02:11] and they're gonna go free that one of
[02:12] those prizes in
[02:13] today awesome so we folks who have been
[02:17] following the project for a while know
[02:19] that we started our gas Tec hourglass
[02:24] gas cloud tech first start for squadron
[02:26] 42 developing a location called the coil
[02:30] folks who have been following if saw
[02:32] that first in the vertical slice that we
[02:34] did a little while ago or a lot of while
[02:37] ago and now we are looking we're
[02:40] currently looking at ways toward to
[02:41] bring that tech into the persistent
[02:43] universe right now through another guys
[02:46] are experimenting with the the Grange
[02:48] points and stuff like that so why don't
[02:51] you go ahead and start your screen share
[02:52] I'll get rid of the cameras and you can
[02:54] show us a little bit about what you've
[02:55] been working on so yes so we showed la
[03:01] citizencon the jump point and what we're
[03:04] going to do today as I show you how
[03:06] lights that jump point was created we
[03:09] did it with in Houdini using the gas
[03:12] cloud tech and we are going to talk
[03:15] about the processes that we make with it
[03:17] and also they're doing the parent and
[03:19] child relationship and that is where we
[03:21] have a large gas cloud for just say
[03:25] doing the very light long distance far
[03:28] away shots and then where we put a
[03:30] smaller one in the middle where we get a
[03:33] lot really close to where and we see
[03:34] what the D cell and that's what we're
[03:37] going to try and do within an hour today
[03:40] then we get started let's go ahead and
[03:42] move my little camera off the corner
[03:44] here just looking at myself and slowly
[03:46] here we go that way we can see their
[03:48] work and you're gonna have to explain
[03:51] what we're looking at right now this
[03:52] doesn't look like a gas glad so in
[03:58] Houdini we start with geometry and they
[04:01] go work for has they evolved over quite
[04:03] long quote with like everyone who's
[04:06] worked on it is changed slightly one of
[04:08] the things that Jake brought tude Gasca
[04:10] workflow was how we use geometry and
[04:14] that you do need to make big gas cars we
[04:17] see the first thing is say we're going
[04:19] to the kindest plate head is a classic
[04:21] Houdini primitive scale it up for just
[04:25] size so it fits in
[04:27] well better and we're going to convert
[04:29] it to this fog volume this is now can we
[04:34] can export that to game and we can see
[04:36] it here this as you can see is the pig
[04:42] head as a volume but it's really bass
[04:46] it's very solid it's it's quite nice how
[04:50] we can see it really quickly but we want
[04:53] to make it really nice and cool so we're
[04:56] gonna just start by like we're seeing it
[04:58] right now where it we don't actually
[04:59] have any shadowing on it so if we put
[05:01] the Sun shadows ayat we can now see that
[05:03] we get some detail in here and we also
[05:06] have like a very very simple light that
[05:08] we have at the moment so whilst a really
[05:12] great about this tech is that we can
[05:14] offer like all these shapes that we want
[05:17] and put them in and that's really
[05:18] fantastic and there's something which we
[05:20] haven't really they'd been able to do in
[05:22] games before so let's go back into
[05:26] convenience of making something yeah
[05:32] just just for the folks that are in the
[05:34] chat right now that the pig head is just
[05:36] a standard a standard piece of test
[05:37] geometry that's within Houdini yes yeah
[05:40] all right is a bit of like a Houdini
[05:43] tropes I had to show I'm sorry it's a
[05:46] Houdini mean it's it's not something
[05:49] that's going into star citizen before
[05:51] before I see the reddit thread and then
[05:52] I had to get that email from CR what do
[05:56] you say we were putting in the game
[05:57] today Jared it's good today that the
[06:02] style of modeling to create this gas
[06:05] card is there's so many different ways
[06:09] of doing it this is just one of the ways
[06:11] to do it and I think until we we plan to
[06:15] do all of this I haven't actually seen
[06:17] modeling gas clouds in this way using
[06:21] using essentially layers you always see
[06:26] the result of that quite quite soon yeah
[06:31] so it's kind of interesting because what
[06:33] I'm doing at the moment is I'm trying to
[06:35] like create a polygon of the big forms
[06:38] that we're going to use later on
[06:41] and we're going to do this quite rough
[06:43] to start and then maybe if we have more
[06:45] time we're going to add in the detail
[06:47] later on but at the moment we're just
[06:49] like playing around with like the shapes
[06:51] that we can get and make something quite
[06:53] interesting to look at because we found
[06:57] that sort of like the best things that
[06:59] we can lay see that become flied through
[07:01] by lady's very light abstract forms as
[07:03] well and as it does they change from
[07:07] location to location so like for
[07:11] instance the the jump gate that we saw
[07:15] had that record idea our never there
[07:17] because they had this eye very magnetic
[07:21] theme to it which had looked like our
[07:23] wings so I someone brought up and then
[07:25] we couldn't get away from there calling
[07:27] it up and I sort of like based around
[07:30] the lore of how like the jump points
[07:33] work so like for each different thing
[07:36] that we do
[07:37] we're sort of going to be playing with
[07:40] different methods of creating things you
[07:44] know right off the bat we're dealing
[07:47] with glass glass use gas clouds today
[07:50] there's a space in in space like nebulae
[07:54] and stuff like that what we're talking
[07:56] with the tech that we're talking about
[07:57] today isn't what's going to be used for
[07:59] volumetric planetary clouds and it's not
[08:02] what what folks can look forward to for
[08:04] Crusader for instance was which is a gas
[08:06] giant those are those are different
[08:08] initiatives yeah and it's really
[08:11] important to understand that there were
[08:12] really different challenges as well
[08:14] because like the thing with gas clouds
[08:18] is that they can actually be bigger than
[08:19] the planets and and then they also just
[08:24] trying to light all clouds across the
[08:26] planet is a completely different thing
[08:28] yeah and it's a really interesting like
[08:31] to have all these different technical
[08:32] challenges that we're having to deal
[08:34] with at the moment yeah so what we're
[08:37] touring this today this week is gas
[08:40] clouds in space nebula the likes likes
[08:44] of that as far as atmospheric stuff
[08:47] that's not what we're talking about
[08:48] today it's not what we're shown today
[08:49] this isn't the process for that and for
[08:51] creating a gas giant planet like you say
[08:54] der again
[08:55] different initiative different tech so
[08:57] that's so that's not what we're doing
[08:58] here today just to set some expectations
[09:00] early on in the show so yeah what you
[09:10] started with a sit with a simple strip
[09:11] and then you have just been mutilating
[09:15] this yes this is one of the big
[09:18] challenges when when it comes to
[09:20] modeling the larger forms of the gas
[09:25] cloud is you're trying to try to model
[09:28] like essentially like an abstract shape
[09:31] trying to model chaos in a sense because
[09:33] you just want really random shapes big
[09:35] forms and and wanting a quite tricky
[09:38] because you're trying to create
[09:41] randomness when instinctly as an artist
[09:45] you're trying to create something with
[09:49] with actual shape so this thing you're
[09:52] doing in the lower-right in in the
[09:54] engine we refer to something that looks
[09:57] like this is like flow graph is this
[09:59] this function similar to flow graph ish
[10:01] also poly poly extrude you need to help
[10:04] at the back thank you you said that was
[10:11] gonna happen when we invited it's like
[10:13] oh this just means I get to backseat
[10:15] drivers work don't I so what's the
[10:26] question so what are we doing what are
[10:29] these steps that you're that you're
[10:30] doing here on the lower right hand car
[10:32] that transform the blast the mountain
[10:34] the bend what do each one of these do
[10:36] you don't necessarily need to hit each
[10:37] one but yeah what's happening with these
[10:40] so Houdini is a node-based program
[10:44] unlike 3ds Max and Maya where you apply
[10:47] a function to it since like the your
[10:49] polygons and then you do an extrude to
[10:53] create a cube for example Houdini works
[10:56] in a similar sense but instead of
[10:58] keeping things in a function and just
[11:01] having code in the background so you
[11:02] won't perform this action
[11:03] Houdini actually has all of these in
[11:06] node so it's totally non-destructive
[11:08] so if Holly went all the way to the back
[11:09] of his to the top of his network you
[11:12] would start from your um you'll be able
[11:15] to see the original grid that he created
[11:17] from yeah so it's just totally
[11:21] non-destructive and it's actually one of
[11:22] the big benefits of Houdini is that
[11:26] non-destructive workflow yeah yeah cuz
[11:29] then you can start sampling data at
[11:31] different points off of the network
[11:33] which is actually what we need to do and
[11:36] actually how is this the only way we can
[11:38] overcome some of the technical hurdles
[11:40] when we start dealing with things that's
[11:42] complex the coil we need to know and and
[11:47] extract data from our models at
[11:51] different points of its creation so we
[11:52] need to know maybe the size of our
[11:55] feature and then as before and after
[11:59] you've performed an action on it so we
[12:01] can make corrections if need be and you
[12:05] have so you have some you have some kind
[12:07] of live link between Houdini and the
[12:09] engine here well no we don't know see
[12:12] but I've seen they're fast
[12:16] it's just so yeah which is really really
[12:20] convenient so ok actually scaled this
[12:27] object up which is why we had some
[12:30] slowdown but what it's like really good
[12:35] to just do is just to view these things
[12:38] in editor like it's really quick as we
[12:41] can so this quickly ago to me and then
[12:46] you just get up like 50 and then you did
[12:48] the output back yeah yeah we don't have
[12:51] any reference item to show the scale
[12:54] here yeah and that's something which is
[12:57] yeah something we need to figure out
[12:59] really um so what I'm doing at the
[13:05] moment it's just sort of figuring out
[13:06] what the lighting is going to be and I'm
[13:09] also going to make this a little softer
[13:14] to start with
[13:18] but like what we have at the moment is
[13:20] really harsh cubes and that's just proof
[13:24] is lighting a lot more little Mayo like
[13:27] goes over here cool
[13:30] our next stages will be to make this
[13:36] volume look a lot more interesting from
[13:39] what it is was like fun is that we can
[13:41] actually get in these they're quite
[13:42] quick shapes to start with and then also
[13:46] to add order like low there were
[13:52] high-frequency detail and that yeah
[13:54] start looking for locations to actually
[13:57] put something new and like what we're
[14:00] going to do is put like a station in and
[14:02] then we're going to dress up around that
[14:04] station as well yeah so folks they chat
[14:08] asking what yes gasps cloud tech could
[14:11] be used for while we as we stay that
[14:14] this isn't what's going to be used for
[14:15] something like Crusader or or even for
[14:19] atmospheric clouds this can be used to
[14:21] make the space around a star system much
[14:25] more interesting and when a mic that
[14:29] this this is about this is about making
[14:30] space more than just black empty space
[14:33] mmm yeah celestial bodies not um not
[14:38] planets you know you got maybe asteroid
[14:41] field and then you have a gas cloud
[14:44] covering it to just make a bit more
[14:46] derelict ship in the middle of the
[14:49] nebula or maybe not a spilt oil around a
[14:54] gas and it forms around the ship and
[14:57] nebulas are real easy go to like the
[15:00] Mutara nebula and star trek to any given
[15:11] day on any given day I'll bring it back
[15:13] to Star Wars or Star Trek it's gonna be
[15:15] one of those so know Gombrich not gas
[15:22] cloud check for cuz there that's a
[15:23] different tech is what we're saying it's
[15:25] different they're not the same so this
[15:27] not being the thing that we're using for
[15:29] cars a does not mean that Crusader is 2d
[15:31] said it's a different tech that's being
[15:34] used for that yeah we kind of ruled out
[15:38] wanna be explored VIPs and kind of sir
[15:42] hmm no not quite the tech that we should
[15:44] be using now there are different
[15:48] technologies different solutions for
[15:49] different problems mm-hmm and yeah and
[15:52] we didn't like yeah it's in policy
[15:56] wasn't it and we did try it but for what
[15:59] it is it's not the right thing and
[16:03] that's and that's sometimes as happens
[16:06] and that's also just a great learning
[16:08] experience really of what we're doing so
[16:09] just do it like that okay so we have a
[16:16] simple base form at the moment what I'm
[16:20] going to do is I'd start adding some
[16:24] noise in and this is going to start
[16:27] providing us with some actual like
[16:28] detail on under V DB itself because I
[16:33] the moment we just got inside large
[16:34] abstract forms but I really want to sub
[16:37] distort it more add more noise within
[16:40] itself and just like make it just a lot
[16:44] more interesting because at the moment
[16:45] it's nice that we could do better I
[16:50] think what we want to do getting count
[17:02] Flint that's certainly an interesting
[17:04] question but these aren't the these
[17:05] aren't the folks would be able to to
[17:07] answer that remember folks these are VFX
[17:09] artists so questions today should be
[17:13] about process and about art if you're
[17:16] looking for gameplay applications those
[17:18] are usually the realm of designers yeah
[17:21] we make the the tools for artists to
[17:25] easily what make any easier process for
[17:29] them to actually model this like the so
[17:32] right now what Ollie's god is a very
[17:33] flat base form to grow all the larger
[17:36] shapes but as you can see the CI G cloud
[17:39] detail doesn't mean it's gonna be it's
[17:42] for clouds um it's actually just um
[17:45] inside of this node is a more complex
[17:47] network which we've simplified to make
[17:50] the UI just show like new values for
[17:54] artists to to tweak and to easily create
[17:58] detail on these gas clouds rather than
[18:01] having to constantly figure out how am I
[18:03] going to add detail me and Holly will go
[18:07] in and explore different ways to do it
[18:10] and then package these up in a much more
[18:12] friendly way yeah so at the moment I'm
[18:18] just trying to add more large-scale
[18:21] offsets distortions to the volume itself
[18:24] and then we'll add more of the higher
[18:28] frequency stuff on the on the gas cloud
[18:35] say Lord Stiles has a history how can
[18:41] glass cards or nebulae even exist within
[18:43] a star system do the pressure of the
[18:45] solar wind and I'm gonna say that's a
[18:47] question for the designers we have to
[18:51] work that out
[18:54] [Music]
[18:55] [Laughter]
[18:58] no that's one of those things that
[19:00] luckily artists don't have to worry
[19:02] about you just make the pretty pictures
[19:10] no after you
[19:11] what is quite interesting about the by
[19:14] the gas cloud itself is that it does
[19:16] drive gameplay parameters so for
[19:20] instance cider pressure we have an
[19:22] atmosphere systems within the gas cloud
[19:25] NC so whenever you go inside the volume
[19:28] of one it will drive like a pressure
[19:31] value in the atmosphere and that's
[19:33] drives other systems so what we can do
[19:36] is that we actually drive like a
[19:37] particle effects in there so you see
[19:39] more different types of particle effects
[19:41] and idea intensity increases when you go
[19:45] like deeper in and the pressure gets
[19:47] bigger so it's quite interesting how
[19:51] these different systems end up being
[19:54] tied together and that's something that
[19:56] like happens quite a lot across that
[19:58] citizen where we tie a lot of these four
[20:00] ounces together like folks who saw the
[20:04] the vertical slice for squadron 42 saw
[20:07] how the coil had some adverse effects on
[20:10] the ship systems yeah with that with the
[20:13] communications being garbled and stuff
[20:15] like that so it's a there are certain
[20:18] the gameplay elements to this work but
[20:20] again those like which gameplay elements
[20:23] come into play when where and how are
[20:26] the realm of the system designers as
[20:28] opposed to the VFX artists as on door
[20:31] has an interesting question do you find
[20:34] Houdini pyro PFF do you find Houdini
[20:37] pyro effects better in your opinion than
[20:39] non node based pipelines and like a
[20:42] program like fumefx it's just we were
[20:47] talking about this earlier I'm biased
[20:51] towards Houdini's pirate because more of
[20:55] a any kind of person I've used the
[20:57] Pirates over and that the whole pirate
[20:59] tech a bit more robustly and it is
[21:04] capable of really powerful things that
[21:05] the one of the perks of Houdini being
[21:08] node-based is that even the solver they
[21:11] call the calculation that happens to
[21:13] calculate how the smoke sim should
[21:17] operate is all totally exposed so I'm
[21:19] able to go into essentially the code not
[21:24] not quite code but like the node that
[21:25] builds up this entire solver I can
[21:28] manually tweak the parameters in fume I
[21:30] can't quite but it is conflict
[21:34] you pick your tools for it I know fume
[21:36] does produce results a lot faster a lot
[21:39] easier than pyro pyro can be a bit they
[21:42] gotta work a little bit of clay and be I
[21:46] mean pubes are perfectly valid I think
[21:49] Jake Gainey our um this assist just
[21:54] created entitle a new title he was his
[21:58] assistant art director the last time I
[22:00] talked to him but oh the thing that was
[22:01] that yeah yeah yeah yeah he he uses fume
[22:06] quite a bit he doesn't really use some
[22:08] pirate and some of the stuff that he
[22:11] produces just
[22:12] she was crazy yeah he's gonna like when
[22:17] I talked earlier about different artists
[22:18] bringing different methods and different
[22:20] like and we like learn every time that
[22:22] we do this like jaded Gainey's when
[22:25] these people who's done that like he
[22:27] they he takes these simians from fumefx
[22:31] brings him into Houdini
[22:33] and then has them as like separate no
[22:35] chains so at the moment we're just going
[22:37] down like one linear path but he would
[22:39] have like quite a few different aspects
[22:41] in and then build up and layer up the
[22:44] simulation and dated BDB grids and it's
[22:47] a it's a really versatile method and
[22:50] that's why i fumes great humor with
[22:54] Houdini is they really like super
[22:56] powerful and it does everything that we
[22:58] need it to do so that station does a
[23:02] little bit to tell us to show us the
[23:03] scale that we're working at here yeah
[23:05] I'm just trying to find a nice area I
[23:08] think where was was yeah we've got
[23:11] another artist um Jake Dunlop he uses a
[23:15] particle Sims as his base so we all have
[23:21] different methods yeah that's one of the
[23:23] one of the neat things about it we see
[23:27] this quite often through different
[23:28] departments and it's EIG it's it's a
[23:32] push towards using the tools that our
[23:35] artists are most effective with and it's
[23:37] a you know if you're if you're more
[23:38] effective with this then use that if
[23:39] you're more effective than that then use
[23:41] that and we we have an entire tools team
[23:43] that works to build all of the
[23:45] connectors and the and the translators
[23:47] that are necessary mm to allow that to
[23:50] happen that's cool yeah both give quite
[23:52] they what they all give results like
[23:54] good results but different results as
[23:56] well so if you want more of this kind of
[23:58] like oh we're gonna have to use them the
[24:02] fumes emulation or if we want another
[24:04] particular you have to use them a
[24:05] particle simulation and then we have to
[24:07] start maybe taking on tools that would
[24:10] help aid the process so if a artist who
[24:13] uses fume kind quite get the result that
[24:15] he wants with the particle that the
[24:17] particle like workflow produces we've
[24:21] stuck this word again
[24:23] what are you nice that's come in it's
[24:24] like what tools they need to make this
[24:26] easier so any artist can come and use
[24:28] this so it's not exclusive to this one
[24:30] artist haha come it's a game yeah so was
[24:43] really great like the dispersive
[24:45] slipping out she like be able to copy
[24:48] get a volume in turn is that we can just
[24:51] really quickly fly around it and I made
[24:53] this pretty big now so it's gonna take a
[24:55] while to fly around but they could see
[24:57] like a good like idea of what you're
[24:58] looking at so yeah it's it's interesting
[25:04] I think it's still really rough and I
[25:06] think a lot of what we're gonna make
[25:07] this session is going to be quite rough
[25:10] we did a couple of dry runs earlier and
[25:12] we were going over time so he has a like
[25:15] speed up a little so will point out the
[25:19] things where we would spend more time on
[25:21] and say make a nicer more presentable
[25:26] because we can see here that we're not
[25:27] getting very good noise at the moment on
[25:30] this section and that's something we can
[25:31] improve further down the line in Houdini
[25:35] so what we want to do now is add a child
[25:40] VDB in here so this is going to be a
[25:42] local really which kinda sits around the
[25:45] station I think like Jake what do you
[25:49] think - very do you think I should make
[25:50] this bigger I think you should in bed
[25:52] they got embed that station into
[25:55] something else
[25:55] it's a well into into the video base
[25:58] they can I show out of a detail quite
[26:01] faint like maybe I should put it on here
[26:03] let's fill on that I come out back yeah
[26:04] let's do that like a Star Trek Voyager
[26:07] intro yeah come in there see what
[26:18] happens
[26:19] that's cool yeah maybe a gas a gas
[26:24] mining station who knows yeah okay cool
[26:28] so let's figure out where this guy's six
[26:34] is one of the challenges is that when
[26:37] you get location scouting an engine and
[26:39] then you try to do it in Houdini you
[26:40] just get lost very easily because they
[26:43] look very different your senses
[26:46] perspective is changed I would say this
[26:51] I did what I said that's good okay so we
[26:57] think is you think it's that one yeah
[27:02] yeah that's right yeah you've got that
[27:04] whole yeah that looks right gotta guess
[27:08] where it is I say that's coffee sphere
[27:13] town see what he's trying to do now is
[27:19] because if the way that our parent/child
[27:24] tech works is that when you put in
[27:27] another video a child VB into a parent V
[27:31] DB what it actually does is it chops out
[27:35] that chunk out of the parent and what
[27:38] you see is the child BD b and some of
[27:42] the things that can happen is some seams
[27:44] you'll be able to see like a slight
[27:45] slight separation between them so the
[27:48] method that Ali's using is we actually
[27:52] take we cut the chunk out of the parent
[27:54] and then we do our process to our Prezi
[27:58] or add more detail to it so it doesn't
[28:02] so it still looks connected when you're
[28:04] really far away but when you're
[28:05] approaching it with QT for example you
[28:08] can start to see the detail start to
[28:10] fade in which is the the entire process
[28:14] of having a parent-child relationship is
[28:16] to bring backs on the detail that point
[28:18] of interest that's lost because your
[28:20] parent
[28:21] VDB is just so large yeah this is a
[28:25] process we had to develop for working on
[28:27] the coil because we have the coil which
[28:30] is light it's outstanding location but
[28:32] it's huge
[28:33] and we've got to get right inside of it
[28:35] and as we want to forget spaces in there
[28:37] which I really tight and also expansive
[28:40] and 1d issues with working with these
[28:43] feed abuses that we have this memory
[28:44] limits
[28:45] at the moment I got in like quite a
[28:47] reasonable memory in it yeah it's quite
[28:50] good but if we go too high what would do
[28:55] it you just run out of a graphics
[28:56] processing power and there's a trick
[29:00] that we can see the force was quite
[29:01] clearly here that one of these across is
[29:05] going to be really big if it's just a
[29:08] huge thing so they cut that moment this
[29:11] is really kind of small compared to the
[29:14] coil we had we have a station in there
[29:16] which is probably about this size and
[29:20] this the station probably just says sort
[29:24] of like here and so what we have to do
[29:26] is have this child there to like make a
[29:29] play space realistic for us and we also
[29:33] use this tag for the coil titles and the
[29:36] interiors as well because we need to
[29:39] have those a high res like the jump
[29:42] point that we showed off that citizencon
[29:45] the the jump point location which the
[29:48] entirety of that area would sit in maybe
[29:52] a hundred by a hundred voxel cubed area
[29:56] you were going to get any detail at all
[29:59] if we just work to that scale so that
[30:03] that's where the whole current child
[30:04] came in we could put in on more high res
[30:08] VB in that point of interest location to
[30:10] make it a bit more pretty to look at
[30:13] rather than just a couple of boxes mmm
[30:16] that's all you would have seen just
[30:17] complement boxes with different
[30:19] densities do you remember oh oh I think
[30:24] it's gonna come back but it's okay we're
[30:33] at a point where if it doesn't come back
[30:35] we'll be okay we've got to save one
[30:37] let's can we all tab to the other there
[30:41] well it's well it's well it's
[30:44] resurrecting itself we had some
[30:46] questions and chat about how
[30:47] performative this is this is this is
[30:51] this something that would chunk the
[30:52] frame rate as it is right now our
[30:56] implementation has been no this is
[30:59] like something we have to keep an eye on
[31:01] because they rendering 3d volumetric
[31:03] sand games not many people do it and the
[31:06] reason why people don't do it is because
[31:07] it honks your graphics card so like this
[31:13] is something which we're just always
[31:14] looking at and this is probably would
[31:18] like the rendering and how many voxels
[31:19] we see on screen as well as the lighting
[31:21] like the lighting cost is a huge thing
[31:23] as well like a lot of our lights are
[31:26] quite static in here at the moment we
[31:28] have like there's like this little
[31:31] animated light that we can see but
[31:35] calculating that all the time or
[31:37] calculating a full light with shadows is
[31:40] very hard so we have to make sure that
[31:43] we're doing like a performance analysis
[31:46] on that all the time like me building it
[31:49] we're building it in like very just like
[31:51] logical ways and sort of things which
[31:53] are going to be just like really bad for
[31:56] the user for your playing experience so
[31:59] yeah why we the catalogs actually static
[32:03] and not like an animated casts cloud
[32:07] right because it has to do every time
[32:09] you load a gas cloud it's got to start
[32:11] calculating the lights it's got to
[32:13] process the V V file itself and it can
[32:18] take some time to do so why it's not an
[32:21] animated because the VDD file format is
[32:24] actually a static format otherwise you
[32:26] need to Brenda X amount of files to to
[32:29] play over each individual frame so these
[32:36] two the particle simulations are they
[32:40] generally run on GPU or CPU to symp to
[32:42] simulate but both actually I think we're
[32:46] starting to go towards the GPU because
[32:49] it is just better but before we were
[32:53] primarily CPU but now we've got a lot of
[32:57] stuff on the GPU so we're taking a bit
[32:59] of stress off the CPU just means we can
[33:01] add more particles right now I know a
[33:03] lot of that a lot of the prep work for a
[33:05] Vulcan will will help with that as well
[33:08] hmm thank you
[33:11] few of our artists can actually finally
[33:12] crank up those particle counts and a lot
[33:14] of kill annoys one in particular no I
[33:22] pick the wrong area
[33:24] I say where'd we get that cube from was
[33:28] the good job that's the right one I
[33:37] think if you picked the wrong location
[33:40] nothing to roam it occasionally that
[33:42] would be very embarrassing on vacation
[33:47] that's the wrong location I did it I
[33:50] knew I would do this okay okay this is
[33:53] no we can fix this don't worry guys
[33:55] don't worry this is the point of one of
[33:58] the issues like this is the disconnect
[34:00] between what you see an engine and what
[34:01] you see a new Dini
[34:02] so especially something as big as the
[34:05] coil it's quite difficult to find what
[34:07] you are that's why like important for us
[34:11] that I get this stuff in early and
[34:12] quickly because we don't want to like
[34:15] work in Houdini Anika it's a game and
[34:18] then be like oh I said Oh
[34:20] like we did for those asking questions
[34:26] about Vulcan since I mentioned it I
[34:28] would point you to
[34:30] calling all devs from a month and a half
[34:33] ago maybe maybe two months ago we had
[34:35] our director of graphics engineering Ali
[34:37] Brown on and he talked to at length
[34:40] about Vulcan and what you can expect
[34:42] from its implementation in star citizen
[34:44] so he already said it far better than I
[34:46] could so you should check that out it's
[34:48] up on our YouTube channel right now cool
[34:51] so what we see now is this is the child
[34:55] VTB if we if I just turn down the
[35:00] density quite low you can see it cuts
[35:02] out the parent one when it renders it
[35:04] some what we do to do this up roads is
[35:07] that we take a copy of the highly
[35:10] high-res version and then paste it back
[35:12] in to the child and Emory is sort of
[35:15] like make that more like gradually more
[35:17] detailed and we put more detail around
[35:20] that location
[35:21] because they you want to play around
[35:23] something that very good happy worldly
[35:26] just say instead of having like two
[35:28] large blocks to bits you want to have
[35:29] late in the final stuff sir
[35:31] so I'll just go and start doing that I
[35:34] guess what I'm gonna do is probably
[35:39] gonna hijack what I did earlier and use
[35:45] that as a base for making this child VDP
[35:49] although I should do DM copying of the
[35:55] diversions wondering what are some tool
[35:59] I'm leavin they're looking for a joke
[36:00] volume look funny how much I made it as
[36:03] well I was gonna say something I just
[36:08] wanted to say that the keeps keeps just
[36:29] trying to find the actual location
[36:31] safety even to make something nice for
[36:33] us right isn't pressure I for one think
[36:42] it's going great
[36:45] [Laughter]
[36:52] doesn't look like much but it's a one
[36:55] never does when you take a slice I'll
[36:58] have a large chunk where's the parent
[37:04] gone where's the parent guy just gonna
[37:06] check that get a child from their parent
[37:12] canvas very careless many cool water
[37:19] bugs
[37:21] I wonder if that is oh yeah
[37:25] Oh have you reached the limit mmm
[37:29] I might have done there's 25 million so
[37:36] 25 million
[37:37] no no what you sliced out was 25 million
[37:41] mm-hmm yeah yeah this is where a Houdini
[37:45] comes in useful is that it's very
[37:47] data-driven and we can kind of guess how
[37:50] it's going to perform an engine just by
[37:52] looking at the data and the values that
[37:54] Houdini's analyzing oh are you trying to
[38:04] figure out why it's so large your
[38:09] transforms huge it's four times the area
[38:17] how do you mean that's her or look in
[38:20] the viewport the cubes massive in
[38:22] relation yeah and then it's interesting
[38:25] how it's and you're cutting out oh I see
[38:31] mm-hmm so it's kinda like doing the
[38:35] inverse of it it's filling and then
[38:37] subtracting uh a hollow keep on the
[38:39] inside sitting me I've got of inputs
[38:42] wrong way around
[38:45] there we go okay that's better right now
[38:56] we're cookin yeah so you can't really
[38:59] see a change you can kind kind of you
[39:02] can see that this the seam so it has
[39:06] copied and pasted across so that once
[39:08] the space station is now it like a
[39:10] higher res child VDB so there's no
[39:13] allowance Wally to add a bit more detail
[39:16] that you would be able to on the parent
[39:19] to the points of interest location
[39:25] we're modeling in the scales quite
[39:27] tricky because you don't really have a
[39:29] point of reference on one scale what do
[39:33] you use how many addresses across you
[39:38] have to grab the space station it's
[39:40] about as big as you can get I do use
[39:46] that reference quite a lot I like
[39:49] Gladius it's like 40 20 meters across
[39:52] floating radius wingspan um so there you
[39:57] have to make sure that like that's like
[40:00] a nice benchmark to use I could use a
[40:03] person but like this is star citizen
[40:05] because it could be got a Gladius it
[40:07] sees when you can ideas across for
[40:10] cutlasses position so I gotta just like
[40:19] start that work for again let's go add
[40:23] some more stuff on top here should use
[40:25] the sphere one that was quite good
[40:26] oh yeah I should use this favor one how
[40:29] are we doing for time we could probably
[40:30] do that about 20 minutes left
[40:32] we'll be faster let's start again
[40:38] so welcome to saucers in life it's not
[40:47] there's no one way to do things this 20
[40:49] ways to do the one thing yeah for it for
[40:52] everything so I think I like game
[40:55] development in that game construction
[40:58] sitting there with a set of blueprints
[41:00] everything has already been figured out
[41:02] for you all the engineering has been
[41:03] done you just you just have to follow
[41:05] instructions how this works yes so he's
[41:11] trying to you know create that abstract
[41:13] shape again to what he did with the with
[41:17] the grid before to give a bit of
[41:19] complexity so you want to be able to see
[41:21] into the sphere right now is just a
[41:23] create a hollow or 100 field spit words
[41:27] a film sphere I'm just gonna let you go
[41:32] I want to see
[41:33] [Laughter]
[41:42] you're supposed to be here to save you
[41:44] and then habits but sometimes I just I
[41:46] just like to like watch the train wreck
[41:47] I'm just like yeah I like doing this is
[42:16] really fun I did a couple of tests over
[42:19] the last couple of days made sure like
[42:21] what we're doing might be actually
[42:22] interesting for everyone and it was just
[42:26] super light it was a blast
[42:28] I just working with his tech it's just
[42:31] it's just great fun it's really easy
[42:34] it's just great to let use it and you
[42:37] can just make so much lovely stuff with
[42:39] it it's that's big one way my favorite
[42:43] part is working out the different ways
[42:44] you can you can create it this yeah you
[42:49] know is the the pyro simulation there's
[42:51] a particle simulation just build up by
[42:53] hand they get one point I tried
[42:56] simulating what life cycle over girls
[43:02] that went well yeah we should explore
[43:05] lay again I think I still think it's a
[43:08] valid method or what moves so what we
[43:12] were hoping to do was that um an artist
[43:15] would create a base shape will just
[43:17] populate an area of them of particles
[43:20] and you would place the last your bodies
[43:24] in here like I'm suns and stars and what
[43:29] we're hoping to do is simulate at a time
[43:33] if the star gets dense enough your
[43:37] collapse on itself and explode and spew
[43:39] more particles and then the gravity of
[43:41] the star start pillock pulling the
[43:43] particles towards it and as it dies and
[43:45] explodes it would push it away can you
[43:48] tell that Jake was watching a lot of
[43:50] things physically
[43:54] yeah I think watch the other Neil
[43:58] deGrasse Tyson videos I think like
[44:05] that's a great method by actually taking
[44:07] from that life as well they were we're
[44:09] doing wrong here I would actually say is
[44:11] that we were making relate we're just
[44:13] creating from randomness and we don't
[44:16] have lunch like reference in the
[44:17] background and they when people they
[44:19] really start doing this they do go get
[44:22] our reference and it's just you need
[44:25] that when you're like doing art creation
[44:27] stuff it's it's really yeah yeah yeah
[44:31] when you look at why we do concepts
[44:33] that's why these concepts it's I think
[44:37] it's quite tricky when you just fill up
[44:38] like the Eagle Nepean or the Horsehead
[44:41] Nebula news now I'm gonna model that I
[44:42] want that to my game you're kind of
[44:44] saying how do I do it yeah and there's
[44:48] already like abstracts as well because
[44:50] there's rent they're like artists
[44:52] interpretations a lot of time as well so
[44:55] it's all losing your audio there oh
[45:02] sorry you hear me okay yeah yeah okay
[45:06] yeah there a lot of those are artists
[45:09] interpretations of like what to render
[45:13] what the the data is so it's kind of its
[45:16] kind of interesting to try to like find
[45:18] like the truth in as well so this is
[45:23] weird it's gonna be I'm saying just
[45:26] coffee Inosanto yeah that's a let's pose
[45:30] in now and then see how it looks and
[45:33] then culottes and see where we've lost a
[45:38] station well that's got a nice little
[45:41] pocket down here it's good work ya know
[45:47] one of the things that is really
[45:49] important when we're actually looking at
[45:51] doing this in two locations is actually
[45:54] bedding it into the scene because right
[45:56] now we've just got blank space around it
[45:58] and what we do really is like this
[46:01] parent that received as big one and the
[46:03] child the parent is
[46:05] huge in comparison and that does a lot
[46:07] of later background space caping and we
[46:09] do a lot of fading in there and we mix
[46:12] up with like planes of we use have a
[46:15] site shader code VFX transparency and we
[46:18] use that to fill the large areas behind
[46:20] it and then we start printing the movie
[46:22] to be on that so they you really bed in
[46:25] from just like a very soft thing to this
[46:27] like very wholesome volume and every had
[46:29] the fine of these her with a child and
[46:31] then when we go down further they get we
[46:34] all start Seymour pfx showing up the
[46:37] ones that are driven from the the gas
[46:39] cloud itself as well as like the local
[46:42] effects to they help a space Cape the
[46:45] scene and that's really important
[46:46] because I especially like flying through
[46:48] coil tunnels they give you take a video
[46:51] importantly a sense of scale and end a
[46:52] distance around the player so and that's
[46:58] something that it was quite easy to lose
[47:00] they where you are within one of these
[47:03] gas cloud forms say those drop
[47:08] enlightened yeah when when modeling I
[47:12] think one of the biggest challenges is
[47:13] to actually try to make it fit you're
[47:16] trying to fade it into the universe so
[47:18] yeah towards the edges you want maybe
[47:20] like a a simulation or no density fading
[47:24] from nothing to to something so it just
[47:27] doesn't look like you've just put a
[47:29] massive ball of gas right in the middle
[47:31] of nowhere and just like yes this is
[47:33] acceptable yes this is how this is how
[47:37] it is grounding in because I like this
[47:40] scene that we have at the moment it
[47:42] doesn't make sense like what is this
[47:44] thing doing here and that's like what we
[47:47] have to do we have to like build the
[47:48] history of like a system off a location
[47:52] and like what do you environment artists
[47:55] will tell you later
[47:56] it's such an important thing to do when
[47:57] you're making their video games you tell
[48:00] a story for the Arts in the situation so
[48:05] yeah like if you put like an asteroid if
[48:08] you worked like in the middle of the or
[48:09] the sphere under your parent you could
[48:11] maybe say oh maybe this was a planet and
[48:14] exploded and it was just mind and it
[48:18] collapsed on itself and it really still
[48:20] the gas and dust is how it came to form
[48:22] I think you just need to Belva history
[48:26] to it now can these beady bees be used
[48:29] for things other than gas like we use
[48:32] these for asteroid fields or yes I think
[48:36] we're looking at like um I mean not
[48:39] nominal but uh I mean it's as much as
[48:43] you could think of Wow
[48:44] what other things could use a nebula for
[48:46] but the the data in herself that the VAP
[48:49] offers such as density can be used to
[48:52] help populate from a level so instead of
[48:56] having an artist hand placing asteroids
[48:58] in a vast area as large as apparent is
[49:02] they could put use the BBBS density
[49:05] value to start spawning asteroids at a
[49:07] massive vast area and they would be you
[49:11] know you could have asteroids only in
[49:12] fairly thick areas so you'd have
[49:14] asteroids and the more dead spots and
[49:16] then not so many maybe a couple in in
[49:20] the low density areas yeah I mean we
[49:26] have to hear this gas cloud density
[49:31] which does that I didn't want to show it
[49:34] to today because a lot of the defaults
[49:36] are scores and stuff but it's we saw an
[49:39] image of it yesterday and it was really
[49:40] phenomenal and I I did play around here
[49:43] I just pop square in VTB square and put
[49:47] some rocks in the other day and just
[49:49] like flew for it was really really fun I
[49:51] just like dodging around all these
[49:53] asteroids I mean can be really good when
[49:55] it ties into game play so if we did have
[49:57] things like e/m distortion on your on
[50:00] your ship you know and your mining and
[50:02] all the asteroids are in the dense parts
[50:05] with the dense parts is really really
[50:08] dangerous you know you could actually
[50:09] lose a ship or we'll just get her just
[50:12] by mining by getting too close into
[50:14] venturous
[50:20] so we start adding some detail in here
[50:24] I've just lightened it off because
[50:27] they're still quite thick here one of
[50:32] the things that we might spend a lot
[50:33] more time on is making sure that we're
[50:36] not getting like too much noise down the
[50:38] voxels as well as like making sure that
[50:40] weight bedding this parents into the
[50:42] child they're like I'm really spit
[50:44] balling with this design but you know
[50:46] kind of interesting like having this
[50:48] thing there it's kind of fun
[51:11] and just answer one of the questions I
[51:13] saw and someone say with simulation time
[51:15] it's close to real-time but in Houdini
[51:19] speaking because we don't we're not
[51:21] looking for Pyrus or solvers or
[51:24] simulation to actually give us the
[51:25] detail we just wanted to give us the
[51:27] density for us to work with we actually
[51:29] add the detail after simulation so with
[51:34] foot with fumes so when an artist
[51:36] doesn't simulation in fume they will
[51:38] take it to Houdini and then Houdini can
[51:40] start processing with that cloud detail
[51:42] node to add the detail that the solver
[51:47] wouldn't be able to ever give yeah and
[51:51] it's like a like it's like we mentioned
[51:53] earlier as a tools in your in your
[51:56] arsenal right like all these things and
[52:00] I every different artist has sort of
[52:02] like come at it and approach it from a
[52:04] different method and every every time
[52:08] they do that we learn this new thing and
[52:11] I say it's really really fun that's
[52:13] really exciting so oh yes mrs. more
[52:22] difficult when teaching new artists how
[52:24] to make a nebula it's like which method
[52:27] you want to learn
[52:29] funny in love the Jake Jake with Jake's
[52:31] method and Jake I'm up and then me take
[52:36] that and ollie
[52:38] Vivi's I if you're cool and you work
[52:43] with volumetric software please apply
[52:45] with how many do we have now not enough
[52:58] bodies I can tell you that as we do
[53:03] Chris's you ever have to go through the
[53:06] address book and outlook you and look
[53:08] for a Chris it's like oh my gosh there's
[53:10] so many Christians yeah so I read I said
[53:16] we were actually exploding quite a
[53:17] low-res maybe so but that's a bit
[53:25] yeah we'll see when this come true yeah
[53:28] it's quite nice how we can just export
[53:30] it what happens in the background is
[53:32] that we take this VDP file and whenever
[53:34] we convert it to own a special CID voxel
[53:37] file and that it's like a lot more more
[53:44] optimized run an engine and levi's
[53:46] compress a log two values down because
[53:47] we don't need all the values that are in
[53:49] the V to be there later VD we've file
[53:53] format is a great file format is using
[53:55] like films games and science but like
[53:59] and like it's fantastic but like we have
[54:03] life from zone version yeah because we
[54:05] have like 32-bit 64-bit values there and
[54:07] we don't need that for this and so we
[54:09] like trim things out and you have to
[54:12] make it better to read so stepping here
[54:16] that's coming from that coffee paste
[54:19] what I would normally do is actually
[54:21] take that high-res version and then add
[54:25] some more detail in because what we can
[54:28] see if we look at the volume of slice is
[54:31] that they disconnect in in the voxel
[54:38] sizes so if you can see here we have
[54:40] every polygon here it's one of the
[54:44] voxels of the iris child and then this
[54:48] parent is what we see with the blue
[54:50] squares at the moment and this is
[54:52] actually a really minor example affair
[54:54] but like in other cases we'd have like
[54:57] one blue square but it should be like
[54:58] half of this so that's really vague
[55:01] where this parent-child close though
[55:03] comecomecome
[55:04] it's a good example for the jump point
[55:07] that that's what you would have seen if
[55:09] we didn't have a a child B to be in
[55:12] there with a much higher resolution
[55:13] around the points of interest because
[55:16] all you see is there's some blurry fog
[55:19] and what we do is that we layer some two
[55:22] P effects on together paint really
[55:24] intimate like quite close to your canopy
[55:27] detail but between that and just had a
[55:31] big voxel it's there's such a difference
[55:35] so then we need some intermediate stages
[55:37] to do that okay question IDs here at
[55:41] this I mean about three minutes you
[55:47] actually receive you watching in their
[55:49] flight around yeah sure that sounds good
[55:52] but what we could do if if Polly handed
[55:55] this is a project file to another artist
[55:57] they could change the sphere to make us
[56:01] a cinder and run it through the exact
[56:04] same network you just get an entirely
[56:06] different result just by changing the
[56:08] shape or changing the amount of polygons
[56:10] you had on the sphere itself we could do
[56:13] that because just completely trash this
[56:17] but again it's a let's get a screen shot
[56:21] for the get the money shot for the
[56:23] YouTube thumbnail and for social media
[56:25] before we before we mess it up flow it's
[56:39] just but because it's not destructive
[56:42] we actually allows designers to create
[56:45] things like the coil and white box the
[56:48] coil with VB B's instead of just
[56:51] geometry they can give Houdini the piece
[56:54] of geometry Houdini and that's it they
[56:57] were just hit save and then they get
[57:00] it's like a I would actually create this
[57:04] network before before this so it's what
[57:06] art says this is a nice a nice starting
[57:09] point this is what we're imagining for
[57:10] it so when you put your designer
[57:13] geometry in here this is what it could
[57:17] look like and yeah and of course because
[57:20] what it should go with that same we're
[57:21] gonna say anyway this is less than an
[57:24] hour's work oh yeah so what we're
[57:28] showcasing here well we always showcase
[57:30] on game that is not it's not even a
[57:32] close approximation to what can actually
[57:35] be delivered with it with the tools at
[57:36] our disposal and the work of many folks
[57:39] on the team going through and optimizing
[57:41] and cleaning up and yeah let me show you
[57:44] some of the other examples I did quickly
[57:46] this is the one we did earlier today and
[57:49] so this
[57:51] you can see this big parent here and
[57:53] then we whack this little station and
[57:56] down here and the same workfare we have
[57:59] to say all this local detail you
[58:01] couldn't do it in the big one but like
[58:04] this is another like really journal as
[58:07] well it did if we should have also said
[58:12] this one was kind of just seen it and
[58:13] have some quite nice details my local
[58:18] Charles are very exciting and this was
[58:20] out of place
[58:21] what are you over there so there's this
[58:25] whole time we've been working in a level
[58:27] that actually had multiple gas clouds
[58:28] and stations going yeah yeah I mean just
[58:32] in case like things went wrong I had
[58:34] backups guys I mean I might like
[58:37] partially wrong a couple of bytes per
[58:39] bike ridden as a result of Plan B's and
[58:44] then I see other guys really I guess
[58:47] we'd say in three hours you made three
[58:48] different nebulas in three different
[58:51] locations and this one this actually
[58:54] takes pighead as an example I don't know
[58:58] if he can make make out what I did to
[59:00] him poor guy
[59:03] they yeah I see it you see the ice was
[59:06] the light looks like it's the eye of it
[59:08] yeah nothing B and they just stuck
[59:13] another station and it's good fun and
[59:17] it's just it's just really interesting
[59:18] you know we can I see the particles here
[59:20] I don't know if this is going to come
[59:21] fro on the stream but if you if I like
[59:25] new free you can just see like these
[59:27] particle effect I can see them so when
[59:31] we like fly free we will be able to see
[59:33] those and that just adds so much more
[59:35] deeds
[59:42] oh yeah there's a lot of time it's on as
[59:45] well say oh yeah you can pop yeah you
[59:49] can use the entity to drive forces as
[59:51] well yeah makes a dangerous landing zone
[59:56] it's interesting how soon babe station
[1:00:16] just every citizen with a with a vape
[1:00:22] its the requirement all right we are we
[1:00:26] are at time let's go ahead and wrap this
[1:00:29] up before it degrades any more you can
[1:00:32] go and stop the screen share and then if
[1:00:34] you can if you will just there you go so
[1:00:37] now you're now you're in the big screen
[1:00:38] well then now you know you're in the big
[1:00:41] screen now I'm now I'm covering you well
[1:00:43] then there's no you move places so sorry
[1:00:46] so you're just missing Jacob sorry Jacob
[1:00:50] hi so yeah so thank you so much guys for
[1:00:54] taking the time to be here on the show
[1:00:57] with s2o i can get it get jacob in there
[1:00:59] somewhere I'll just I'll just do it with
[1:01:01] me there we go
[1:01:04] sorry wait thank you for taking the time
[1:01:06] to be here on the show this this week
[1:01:09] remember 3 alpha 3.9 is live on the
[1:01:15] servers right now so check that out if
[1:01:16] you haven't already and Oliver Jacob
[1:01:20] thank you so much for taking time out of
[1:01:22] your at your Friday at the end of the
[1:01:24] week to be here and take us through your
[1:01:25] process is pretty nice too this is my
[1:01:31] best angle ever you switched places so I
[1:01:35] had to move so yeah so four stars in
[1:01:37] life that's Oliver that's right that's
[1:01:40] Jacob I'm jarred saying this week
[1:01:42] everybody
[1:01:51] you

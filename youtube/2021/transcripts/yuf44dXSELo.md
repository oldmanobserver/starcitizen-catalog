# Star Citizen Live Gamedev: FPS Level Design

**Video:** https://www.youtube.com/watch?v=yuf44dXSELo
**Date:** 2021-04-23
**Duration:** 1:00:16

## Transcript

[00:03] Hello everybody.
[00:04] Welcome to another episode of Star
[00:06] Citizen Live Game Dev
[00:08] level FPS level design.
[00:11] I used to have it on the I do have it on
[00:12] the There is right there in the corner.
[00:14] I should have just read it. I'm your
[00:15] host Jared Huckaby. If you've never seen
[00:17] Star Citizen Live before, it's where we
[00:18] take about an hour at the end of our
[00:20] week and we hang out with some of our
[00:21] developers and we
[00:24] talk shop. Sometimes we do round table
[00:26] Q&As where we take questions from you
[00:28] the backers and put them to our
[00:30] developers. Other times we do our game
[00:32] dev episodes, which is what we're doing
[00:34] this week where we we basically explore
[00:36] somebody's process. We see how they
[00:38] work. We
[00:39] we see what it is they actually do and
[00:42] you can still ask questions during the
[00:43] process.
[00:44] We're also They're also usually
[00:46] accompanied by a couple of their
[00:47] co-workers who just you know, just poke
[00:50] them throughout the hour while they're
[00:51] while they're working and and and make
[00:53] their life a
[00:54] living hell for an hour and that's what
[00:56] we're going to do this week. So, let me
[00:58] let me let me introduce you to our
[01:01] guests this week. We've got We got
[01:04] members of our various level design
[01:05] teams. We got folks from the landing
[01:07] zone content team. We got folks from the
[01:09] modular content teams. So, let's go
[01:10] around the room and see who we have
[01:13] today. We will start with our
[01:14] demonstrator
[01:15] right here to my left here. Antoine,
[01:18] tell us who you are and what you do for
[01:20] Star Citizen.
[01:21] Hello. Yeah, my name is Antoine.
[01:24] I've been working for Star Citizen for
[01:26] two almost three years now. I started on
[01:29] New Babbage so on landing zone and then
[01:32] I I worked on Grim Hex as well and
[01:35] currently I'm working on the homesteads.
[01:38] Yeah.
[01:39] Great.
[01:40] I'm really enjoying showing the
[01:42] homestead progress on ISC by the way.
[01:44] Yeah, nice.
[01:45] It's I It's I It's It's become an ISC
[01:47] tradition for the last two quarters.
[01:50] Let's
[01:52] just continue counterclockwise.
[01:55] Andreas, who are you and what do you do
[01:56] for Star Citizen?
[01:58] Well, my name is Andreas. I am the lead
[02:00] level designer for Star Citizen
[02:02] Persistent Universe. So,
[02:05] been here a few times. Been with the
[02:06] company for six years plus. So,
[02:09] most likely the work of the team. I do
[02:11] get my hands on some white boxing from
[02:13] time to time like Area 18
[02:15] which I worked on together with my
[02:17] esteemed colleague here Manuel.
[02:19] He was a very fresh
[02:21] aspiring level designer back in those
[02:22] days.
[02:23] He has come very far.
[02:25] What do you have to say about that,
[02:26] Manuel?
[02:27] Good old times actually. Yeah.
[02:31] So, who are you? What do you do besides
[02:32] Area 18?
[02:34] Hey, I'm Manuel. I'm with the company
[02:36] for almost three years now. Besides Area
[02:38] 18, I did a bit of rest stops. I did the
[02:41] prison hub and
[02:43] I'm currently working on Horizon.
[02:47] Oh yeah, we we we showed you
[02:49] You were on ISC most recently when we
[02:51] explored the commercial platform for the
[02:53] Horizon landing zone.
[02:55] All right. So,
[02:58] today's show is about exploring what
[03:00] level design is, how level design works,
[03:03] the the ideas and the considerations
[03:05] that go into level design.
[03:07] I think there's a lot of It's one of
[03:09] those nebulous kind of professions where
[03:11] where people equate level design with
[03:14] the people who make all the art and then
[03:16] the people who who who who who who who
[03:18] create the the finished product of of of
[03:20] of of of an area of an underground
[03:22] facility or or space station or whatnot.
[03:26] Um
[03:26] But most of you what you do is in white
[03:28] box and it's it's the early step like
[03:31] Level design is about laying this
[03:32] foundation that everybody else then you
[03:35] know, builds upon. So, we're going to
[03:36] explore that process. Antoine, I
[03:38] understand that you are demonstrator
[03:40] today. So, if you want to go ahead and
[03:43] start your screen share,
[03:46] we'll just jump right into it here.
[03:48] All right. Can you guys see?
[03:50] Yeah.
[03:51] Now
[03:52] Now floating in space, this looks like a
[03:54] weird space station.
[03:56] But what is it we're looking at
[03:57] actually?
[03:59] So, okay. So,
[04:01] yeah, I'll I'll take it from the from
[04:03] the start.
[04:04] Basically,
[04:05] what we're doing is the initial process
[04:08] of of creating a location. So,
[04:10] first of all, we get a pitch and we have
[04:13] to create like a
[04:15] a level design document that goes around
[04:17] it where we do bit of research and we
[04:19] detail what the location will be about.
[04:22] And
[04:23] from our side, we also have to do some
[04:26] of
[04:27] details like this ones well, research
[04:29] like this one where we
[04:31] try to just find interesting pictures on
[04:33] how to create the layout.
[04:35] It's a bit like what artists do with the
[04:37] image references, but for us we're
[04:39] looking at like the navigation and what
[04:41] cool thing can can happen here and then
[04:43] and and so on.
[04:45] So, what I'm going to show today is I
[04:47] want to take a an underground facility
[04:49] and I would like to to connect it to one
[04:53] of the cave that we have
[04:55] that the new cave that we have like that
[04:57] one big opening cave that we have and
[05:00] then trying to make a connection between
[05:02] those two like you could go down
[05:05] into the underground facility and then
[05:06] you have a section that opens up into
[05:08] your cave and and so on, right?
[05:11] So, from the modular aspect of it,
[05:14] it's it's just one section
[05:16] of it that I'll be creating. I won't
[05:18] actually connect it to a cave, but it's
[05:20] just to show you guys like the process
[05:22] of like, hey, here we go. We start off
[05:24] with some of the pictures to to explore
[05:27] what like some of the ideas we could
[05:29] bring into this location and you know, I
[05:31] was thinking like here is like this open
[05:33] space here and we have like maybe some
[05:36] areas that you can go from the
[05:38] underground facility to to this thing.
[05:39] So, I saw like quite like this this
[05:41] thing here where you can see some part
[05:43] of the cave, but you still have like the
[05:45] underground stuff that can open up to
[05:48] you know, mix to this this in this
[05:49] image.
[05:51] So, this is what I've been looking on
[05:53] the side.
[05:55] Then usually we would detail all that
[05:57] stuff
[05:58] into a level design document. We will
[06:00] get also the mission guide that would
[06:02] tell us like what we would precisely be
[06:04] doing in there, but we yeah, I will let
[06:07] the other guys explain a bit more about
[06:08] this when I start. Um
[06:11] But yeah, so in here what I'm showing
[06:14] you guys here is um
[06:15] is an underground facility. So,
[06:18] I took this because it's it's a
[06:20] well-known place that everybody you
[06:22] know, knows about and so it's quite easy
[06:24] to expand from.
[06:26] What I'll be doing is
[06:27] I'll just
[06:29] show you guys how
[06:30] this place works in general.
[06:33] We have like a hub. This is like the
[06:36] modular
[06:37] aspect of a location. We In in landing
[06:40] zones, we create like very bespoke
[06:42] layout, but in the modular aspect, we
[06:45] have to think about you know, a hub
[06:46] section that has multiple like
[06:48] connectors that are very similar on
[06:51] which we create these modules that can
[06:52] snap to it and then we can use the
[06:54] procedural tool to generate different
[06:56] type of of areas.
[06:59] And and so on. Um so, what I'm going to
[07:02] do is to just like take out one of these
[07:05] and then I will have a a few set of
[07:08] white box elements on my side here. And
[07:12] then I will start to construct
[07:13] something. So,
[07:15] as you know, in the universe we have
[07:17] like bunch of sets that are that have
[07:20] metrics
[07:21] which is very important for us
[07:23] that everything just goes with the right
[07:25] metrics and and
[07:28] whoops, I put a little
[07:30] light over here. No, it's not working.
[07:32] Um
[07:33] And all these are like preset things
[07:35] that we can use to create a location
[07:37] where we would know that this will be
[07:39] the right the right metrics the the
[07:41] right you know, it would be the the
[07:43] right the right space for us to use
[07:44] basically.
[07:46] So,
[07:47] yeah, I can start and
[07:49] you guys can speak on top.
[07:52] Sure. Yeah, I mean just as a small note,
[07:54] we do have a few more pieces to build
[07:56] our locations than five that Antoine is
[07:58] going to show there. So, we have seven.
[08:00] No, we have quite a few.
[08:02] Um
[08:03] Going back to like what Jared said in
[08:04] the beginning, I think one of the
[08:06] reasons why people sometimes are a bit
[08:10] maybe not so aware of what level
[08:11] designers actually do is that to my
[08:13] knowledge, depending on which company
[08:14] you actually work in, a level designer
[08:16] does slightly different things.
[08:18] In certain companies, they are more like
[08:19] scripters. In other companies, they are
[08:20] more
[08:21] block out people, right?
[08:25] So,
[08:26] in generally here at here at
[08:29] Cloud Imperium Games, you will say a
[08:30] level designer is is a person who's part
[08:32] of the process from the beginning to the
[08:34] very end, right? He is part part of
[08:36] the story when like Antoine said, we get
[08:38] the the kickoff and the narrative. We
[08:40] put together the level design document
[08:42] that
[08:43] is a fairly extensive document that
[08:45] contains all the information that is
[08:47] required for
[08:50] a location to be considered fully
[08:54] functional.
[08:55] Um
[08:58] These documents are usually written by
[08:59] the level designer and then I review
[09:01] them and sign them off.
[09:03] And after that's been signed off, we go
[09:04] into a white box phase, which is
[09:07] what we're seeing here. Part of the
[09:08] level design document is also doing what
[09:10] Antoine did, which is gathering
[09:12] reference images and just getting an
[09:14] idea of what we want to aim for, right?
[09:17] But then we move into the white box
[09:18] phase and that is that is the creative
[09:20] bit, right? There is in general two
[09:22] parts
[09:24] to level design. There's the creative
[09:25] bit bit which is uh
[09:26] blocking out the location, building it,
[09:29] and then there's the slightly more
[09:31] boring stronger tedious bit, which is
[09:33] the markup and that is
[09:35] setting up all the volumes, everything
[09:37] that defines atmosphere in a space and
[09:39] determines if it has a gravity or
[09:41] whatever it might be, right? I'm sure
[09:43] everyone at some point went through a
[09:45] doorway in Star Citizen and suddenly you
[09:47] start suffocating for some reason and
[09:48] that's just some level designer missed
[09:51] room system and he gets a big slap. So,
[09:54] but yeah.
[09:55] Yeah, the same goes also to
[09:57] uh systems like
[09:59] the elevators, the trains, restricted
[10:01] areas, ATC, landing services, like
[10:04] there's lots of things and that come
[10:06] come afterwards. Um so
[10:10] I mean there's a lot of there's a lot of
[10:12] markup that we do in locations when
[10:14] taking two of them is the room system
[10:16] and the transit system and they are
[10:18] quite
[10:21] there's quite a few components to them
[10:23] if you put it that way. So many times
[10:25] the setup can be done completely correct
[10:28] from our side and it might break for
[10:30] some other reason. It could be
[10:32] you know
[10:33] object container streaming or whatever
[10:35] it might be that causes it or it might
[10:37] be that there is some conflict with the
[10:38] layers or there's a million things that
[10:40] can go wrong. So
[10:42] I think a lot of people who are outside
[10:44] of kind of level side don't quite
[10:46] realize the complexity of certain
[10:47] things. Um No, no, you already said it
[10:49] was your fault. You can't take it back.
[10:52] Yeah, but that's because we are noble
[10:53] and humble.
[10:57] So um what I'm I'm doing now is um
[11:00] basically I I have like um the start of
[11:04] a a corridor that then expands to to the
[11:07] cave system uh that I want. So to just
[11:10] represent like these big cave openings
[11:12] like I I just took like one of these
[11:14] uh cave um
[11:16] little brush that that I just found and
[11:18] um I I kind of want to have this uh
[11:21] squeezing effect here to just have that
[11:23] that big reveal of like this cave after
[11:25] it. So I was just trying to get like the
[11:27] distance, you know, uh from here. Does
[11:30] it look like natural? Does it feel
[11:33] um
[11:33] that realistic in some sort of way,
[11:35] right? Like like would that be something
[11:37] Is it too close? Like this this door
[11:39] over here, is it too close and so on?
[11:41] Like um these are things that we have to
[11:44] take into account as well
[11:45] and try to build our locations, just try
[11:48] to make things that make sense and not
[11:50] crazy things.
[11:53] Yeah, I mean what Antoine is doing
[11:54] there, right? It In the In the game we
[11:57] mostly connectors we have that connects
[11:58] two rooms together is this kind of
[12:00] letterbox connector. It's a 12 by 4
[12:02] meter connector.
[12:03] Um like you see
[12:06] that's the bigger opening there. And the
[12:08] smaller kind of doorway has a 4 by 4
[12:10] meter one, right?
[12:11] There is there's a lot of things to to
[12:13] level sign special when it comes to like
[12:15] spatial awareness and shapes and forms,
[12:17] right? Like if you would build
[12:18] everything on a fairly large scale
[12:21] you wouldn't necessarily create an
[12:22] impressive level. You would just make
[12:24] the player feel small, you know? So you
[12:26] need this
[12:27] you need this balance between smaller
[12:30] spaces and larger spaces, right? If
[12:31] everything is big then
[12:33] just feel big, you just feel small,
[12:34] right? And the same thing thing here,
[12:36] right? We have these larger openings
[12:37] that sometimes goes down into more
[12:38] narrow
[12:39] um passageway and then it brings the
[12:42] player forward a little bit and then we
[12:43] have another opening and a reveal where
[12:45] you get this like oh thing, you know?
[12:48] Um
[12:50] Yeah, that's the difference between like
[12:52] uh having a bespoke location where you
[12:54] would actually like have like one thing
[12:55] sitting in a connector and you have like
[12:58] more control over like what like how the
[13:01] layout and and everything in the
[13:02] structure will be while um in the much
[13:05] modular and procedural system um you
[13:09] have to keep in mind that like what kind
[13:12] of rooms um and how they connect to to
[13:14] your spaces. So they have like all these
[13:16] like 12 meter connectors and then um it
[13:19] could just be an alcove that's like
[13:21] placed next to it or you want to have
[13:23] like just a transition piece that uh
[13:25] leads into like a a bigger room and
[13:27] sometimes you need to uh bring the
[13:28] players a bit further out to uh to
[13:31] provide more more space for uh the the
[13:33] next rooms cuz like otherwise they they
[13:37] might
[13:38] um
[13:38] bump into the the walls of the of the
[13:40] hub for example. Um that this is a case
[13:43] we had a lot in in the
[13:45] restops actually.
[13:48] Uh where we had to like bring the people
[13:49] further out and then so the room has
[13:51] enough space to expand and then not has
[13:54] any overlapping or collision issues.
[13:57] Now, I want to add here real quick that
[14:02] we're working in white box here. The
[14:04] purpose of what you're doing is is not
[14:07] to make something that looks good. It's
[14:10] to It's to build an experience, to lay
[14:12] the foundation, the
[14:14] the the the groundwork for then for
[14:17] something that then environment artists
[14:19] would come in and they would see these,
[14:21] you know, 45° canted uh rock walls and
[14:25] then they would sculpt something that
[14:27] was, you know, more natural looking and
[14:28] stuff. This is to You're trying to build
[14:31] the first impression of an experience to
[14:33] convey to, you know, other artists that
[14:35] are going to come in.
[14:38] With this um so basically if you're
[14:40] looking at building a location that has
[14:42] multiple steps, it has kind of the
[14:44] initial prototype. If you need to do a
[14:45] prototype, you maybe you're doing
[14:47] something new. Maybe the first time
[14:48] we're doing a cave, we just start with
[14:49] prototype. You want to prototype the
[14:51] spaces. We want to prototype the the
[14:53] sizes of the passageway and any kind of
[14:55] gameplay element that goes in there like
[14:56] jumping puzzles.
[14:58] Um and once we have all the prototypes
[15:00] that we feel that we require, then we go
[15:01] over into the white box phase, which is
[15:03] usually driven by level design. And even
[15:05] the white box phase itself has kind of
[15:07] two stages. It has a very rough and
[15:09] dirty
[15:10] initial
[15:12] um
[15:13] section where you just really try things
[15:16] out. You just throw things together.
[15:17] It's things are overlapping and it looks
[15:20] a bit shite, you know? That's just the
[15:22] way it is.
[15:23] But you just want to get the feeling of
[15:24] what you want to achieve there. And then
[15:26] you when you have what you kind of want
[15:28] to achieve with that place, you go in
[15:29] and kind of clean that up into a clean
[15:31] white box, which is like a proper white
[15:33] box where things kind of match up, you
[15:34] know, where right now he's using
[15:36] something we call the template tile
[15:37] sets, which is a tile set
[15:39] has loads loads of pieces. It has a pink
[15:42] um material and a gray material. And if
[15:45] you see something that is pink, that
[15:46] usually means that there should be
[15:47] another mesh that goes there to cover
[15:48] it. So when you're actually in the room
[15:50] and it's a finished white box, you will
[15:51] only see gray. You won't see anything
[15:52] pink, right?
[15:55] And once we And also part of
[15:58] the white box kind of stage is of course
[16:01] the blockout, but it's also the first
[16:02] pass on the markup placement of the the
[16:05] AI, usables, any transit. So any
[16:09] location should be fully playable even
[16:12] even though it's rough and not polished,
[16:14] but it should be fully playable in white
[16:15] box.
[16:16] And that is a requirement before we
[16:18] actually reach something we call the
[16:19] white box sign-off, right?
[16:21] After the white box sign-off, we go into
[16:23] gray box and that is where the
[16:24] environment artists take over and they
[16:25] look at what we have done.
[16:27] They start making it very pretty.
[16:30] They might come to us say like, "Uh
[16:31] listen, this thing you built here, it is
[16:33] costing us a lot of problems. Could we
[16:35] please do something else there?" You
[16:36] know, we go like, "Yeah" or no,
[16:38] depending if it's like super crucial,
[16:39] right?
[16:41] Usually we reach compromises because
[16:42] that's the
[16:43] solution to any type of diplomatic
[16:45] conflict. Um
[16:48] And then they
[16:48] It can also be the other way around,
[16:49] right? So
[16:50] the other way around, of course, of
[16:51] course.
[16:52] Yeah, if they take over and like build
[16:53] something and they maybe get like a bit
[16:55] overboard with that or like maybe it
[16:57] doesn't turn out that well and then like
[16:59] we we just like toss feedback back and
[17:01] forth and then it's like, "Hey, it's
[17:03] like how how it currently looks, it's
[17:05] not doesn't work very well for
[17:06] navigation or like for AI. Uh maybe we
[17:09] can tweak something here and there." So
[17:12] um more minor tweaks like not not major
[17:13] stuff. Yeah.
[17:16] So at the moment um I've been looking at
[17:19] like basically from from the inside
[17:21] here, we would be able to see that that
[17:24] gigantic cave that opens in the back,
[17:26] like the the line of sight, right? Um
[17:30] And so
[17:32] I I started to kind of like I have a
[17:33] rough layout. I I I want to have a room
[17:35] at the end of this and some kind of like
[17:38] you know, um
[17:40] whole like walkway on top of the the
[17:42] cave over here
[17:44] um that ends up into some some location,
[17:47] some some kind of room at the end. Uh
[17:49] but then I realized, hold on, cuz
[17:51] if we're inside of here, that means
[17:53] that, you know, it's it's kind of like
[17:54] loading already everything. So I started
[17:57] to to grab
[17:59] this this big rock here and and try to
[18:01] use it as like a big pillar to kind of
[18:03] block the view from the inside uh so
[18:06] that, you know, usually would be like
[18:09] the trick we would use is maybe a like a
[18:10] donut uh type of room where you have a
[18:13] pillar in the middle and you have to go
[18:14] around and that makes sure that what's
[18:16] behind you is uh
[18:17] is not being shown anymore. Um
[18:21] But I mean for for this for this um
[18:24] showcase, I think this is fine. All
[18:27] right, so
[18:27] you're dealing with two looks like
[18:30] to me it looks like you're dealing with
[18:31] two major considerations right now. One,
[18:34] you you you're trying to build a reveal
[18:36] for the player so that when they you
[18:38] know, they they they see it, they see a
[18:40] a hint, a sense of, "Oh, there's a cave
[18:42] down there." And then they walk out. As
[18:44] they walk out, you know, you you tighten
[18:46] their field of view so that then it can
[18:47] explode into this, you know, grand like,
[18:50] "Oh" and have have a moment there for
[18:51] the player. But you also have to
[18:54] have performance considerations and when
[18:57] is this stuff going to stream in? When
[18:58] is this stuff, you know, when is you
[19:01] know, this stuff all going to move into
[19:02] memory and stuff and you don't want to
[19:03] have to load the entire you know, cave
[19:06] when they're still so far away.
[19:08] Yeah, I mean most of the stuff is is
[19:10] kind of
[19:12] already loaded, so it's more about the
[19:14] culling, I would say, but yeah,
[19:16] absolutely. A lot of
[19:18] a lot of locations that we have in the
[19:19] game, you will notice that when when you
[19:21] move into them, there's a dog leg or
[19:22] something that just
[19:24] brings you around the corner. Cuz let's
[19:26] say that you have a long chain of rooms,
[19:28] all the doors are lining up and like 20
[19:29] players just each stand in one doorway
[19:31] and create this like 2 kilometer tunnel
[19:33] where you can see down, you know, it's
[19:34] going to
[19:35] bring everyone's performance down to
[19:38] even lower levels, right? So
[19:41] that would be an unfortunate thing.
[19:43] That was could also be boring, so can
[19:45] also create for more interesting ideas
[19:47] and like
[19:48] Exactly. I mean, if you look at a combat
[19:50] space for example, it's
[19:52] a straight corridor that just goes on
[19:54] forever. That's not really interesting.
[19:55] You want to have some bends. You want to
[19:56] have some nooks and crannies, you know,
[19:57] to take cover behind, you know, and
[19:59] create this interesting, you know, you
[20:01] line up there, you peek around the
[20:02] corner, and then you move forward, you
[20:03] know. It's not just a straight
[20:06] um
[20:07] yeah.
[20:08] No one likes to explore this straight
[20:09] tunnel, right?
[20:11] Also, for for example, like this this
[20:13] big
[20:14] cave I got here, right? Um this is
[20:17] really just to showcase the PRs, right?
[20:19] We don't actually not be something we
[20:21] would put in the game, but
[20:22] you know, it's to get the point like,
[20:24] "Oh, I need a big reveal here." Like, to
[20:25] me, it doesn't really matter what that
[20:27] big reveal would be at this stage,
[20:29] but it's just to get the
[20:31] It's easy to communicate like, "Oh,
[20:33] that's that's a big thing that I need to
[20:34] see when I come here." Needs to be
[20:36] something huge.
[20:37] Um yeah. I think that always happen if
[20:39] you start scaling. I take the art and
[20:41] and scale it so I
[20:43] I we need it. But it's really just like
[20:45] as Antoine said, it's
[20:46] just for us to like give the impression
[20:49] on on how the space feels and uh
[20:52] also
[20:53] show the artist like, "Hey, we imagine
[20:55] like this is like the big cave, right?"
[20:57] And and so like um as you all said in
[21:00] the presence like I just took a bunch of
[21:02] the art walls and just tried to build
[21:03] the cave and then like the size how I
[21:05] imagine it and then the artist goes in
[21:07] later on and actually like he makes it
[21:09] like look proper and and scale properly
[21:11] and then everything like that. For me,
[21:12] it's just like
[21:13] uh to give the the space the right
[21:15] feeling for me to work with and like for
[21:18] the
[21:19] playtesting and then it's like
[21:21] they can come in and then they make they
[21:23] make it pretty.
[21:24] And there's a question in chat that's
[21:26] interesting. When does
[21:29] We we've seen a lot of a lot of concept
[21:31] art for various locations.
[21:33] Uh we we're just showing concept art for
[21:35] the various hospitals in ISC yesterday.
[21:39] When does concepting for locations
[21:42] happen? Does it happen after you've
[21:44] completed a white box so that the
[21:46] artists know what general shape and form
[21:49] that you're working with or does the
[21:50] concept happen before this?
[21:53] It depends. Um
[21:55] you can have like mood concepts that
[21:56] usually comes before that describes the
[21:58] mood. For example, let's do like a flexi
[22:00] planning zone. It could be like
[22:01] Loreville, and they put down like dusty
[22:03] plaza,
[22:05] big high walls, you know, just gives you
[22:07] a sensation of what the the impression
[22:09] and feeling of location should be.
[22:12] And then usually these mood concepts is
[22:13] something that the level designer takes
[22:15] and it starts to kind of put together
[22:17] streets or whatever it might be that
[22:19] kind of feels like it, right? Mhm. And
[22:22] when you have like a layout that feels
[22:24] all right, you have the street, you have
[22:25] the whatever side alleyways, whatever it
[22:26] might be,
[22:28] then that can be sent back to concepts,
[22:29] and they do an overpaint of that.
[22:31] Basically, they paint over what Antoine
[22:33] is doing here. For example, they would
[22:35] take choose like a nice angle of this,
[22:37] and they would just take an image and
[22:39] they would start painting it over with
[22:40] their amazing skills and making can
[22:42] basically dressing it
[22:43] uh with a paintbrush rather than having
[22:45] an environment artist go in and dress
[22:46] it, right? And then we get an idea of
[22:48] what it would actually look like. And
[22:50] these overpaints then also helps the
[22:52] environment artist later on to know how
[22:54] they will dress the location and also
[22:56] identify what kind of pieces they would
[22:58] need to build, right?
[23:00] But that is one of the tricky things
[23:01] about being a level designer as well is
[23:02] that
[23:04] it it looks easy sometimes, but
[23:07] the ability to create spaces and shapes
[23:10] that feel
[23:11] that just feel good, that feels like
[23:13] they belong together and it's a natural
[23:15] kind of real environment. It is it is
[23:17] quite tricky.
[23:18] Um
[23:19] Anyone can
[23:21] download any kind of editor at the
[23:22] moment and open it and try to put a room
[23:24] together, and
[23:26] I bet you on on your first attempt it's
[23:27] going to be
[23:29] interesting. I don't know. My first My
[23:31] first Quake III map was excellent. I
[23:33] don't know what you're talking about.
[23:34] Well, not everyone is a legend like
[23:36] yourself, so.
[23:38] So,
[23:40] uh another question from the chat.
[23:42] Where did you get started with this? Did
[23:44] Did you Did you start with like building
[23:46] Legos? Was Was it Legos and then you're
[23:48] like, "Hey, I'm Yeah, I like building
[23:50] rooms and halls and connectors." Or or
[23:52] was there a
[23:53] a mod tool for a for a certain game?
[23:57] How do you get into level design?
[23:59] I I can start. Sure. Um
[24:02] cuz I guess everybody has a different
[24:04] background, right, on that?
[24:06] Um yeah, for me, um I think it's it's
[24:10] funny to say, but I think Minecraft
[24:11] helped
[24:13] really to get the sense of space and
[24:14] scale and just like what what makes
[24:17] sense, what feels cool to build, and so
[24:18] on.
[24:19] Um but then yeah, I I jumped into like
[24:22] editors um
[24:24] to uh
[24:25] uh to try to build games out of these
[24:27] editors and and also
[24:29] you know, other game engine before
[24:31] getting into the industry.
[24:33] Uh just just building games and so on,
[24:35] and I focus on level design. Like
[24:37] building world and and
[24:40] just thinking about the special aspect
[24:42] of things is something that I liked.
[24:44] So, uh
[24:46] yeah.
[24:46] That's for me.
[24:49] Um on on on my end, um
[24:52] when when when I was young, I played a
[24:54] bit always like to play around with
[24:57] level editors like World of Warcraft for
[24:59] example.
[25:00] Um but that was just more more on the
[25:02] side, but when I was playing games like
[25:05] the the Gothic or the Risen series, this
[25:08] is when it actually like started in
[25:09] getting me like interested in I I really
[25:12] want to do this for a living because
[25:15] um for level design, you actually like
[25:17] you see what you're building
[25:20] in in the editor in the game
[25:22] um rather than in game design where you
[25:24] do more like theoretical stuff and and
[25:26] do a lot of like write-ups and and
[25:28] things like that. So, I I it was always
[25:30] more appealing to me
[25:32] to
[25:34] to build something in the editor and
[25:35] have like freedom and
[25:38] try to
[25:39] abuse some of the assets or play around
[25:41] and just like create a location and also
[25:43] a bit of scripting and all that stuff.
[25:47] Clench Eastwood says, "I've played
[25:49] Minecraft. I'm a level designer."
[25:51] I've played baseball. I'm not a baseball
[25:53] player.
[25:55] No, but then you have to take it, you
[25:56] know, to the to the next level, too.
[25:59] That's true. To be a professional is
[26:01] just a
[26:02] does does a lot of rules that and and so
[26:04] on that goes on, right? Yeah. We're just
[26:06] talking about
[26:06] definitely helped in developing.
[26:09] Sorry. Where did you get your start,
[26:10] Manuel?
[26:11] What was the thing that made you
[26:14] want to do this?
[26:14] Uh
[26:16] Well, it's just the um
[26:18] yeah, just all the logic of the special
[26:21] aspect of it. Um
[26:23] made it very appealing.
[26:26] And when I realized I could do that, um
[26:28] you know, as a job, learning all these
[26:29] rules that and
[26:31] that that's when I was like, "Oh, yeah,
[26:32] I'm doing it."
[26:36] Um
[26:37] At the moment here, I'm uh
[26:39] I think I kind of like have a layout
[26:41] that I like. I just this room,
[26:44] uh then
[26:45] you know, it it it's just uh
[26:48] I can get from here this like this
[26:50] little section that tells me, "Hey, you
[26:53] know, storytelling, we're going to get
[26:54] into the rocky area."
[26:56] Um and then there's a it's not just a
[26:59] straight line. There's
[27:01] a small path that goes on the side.
[27:03] Uh goes down a little bit making it a
[27:05] bit interesting. Then it gets to this
[27:06] room.
[27:08] I left like an area over here where
[27:10] there's a door to kind of like
[27:12] explain how maybe it just expand on this
[27:14] side and and that is maybe the way that
[27:16] you connect back to the cave system, you
[27:18] know, that that could just be inside of
[27:20] the big open area of the cave. And and
[27:23] then you take like the side path and
[27:26] then you you join like the bottom or I
[27:28] don't know.
[27:29] Um yeah.
[27:32] So,
[27:33] what I'm going to look at next is uh
[27:36] probably some some purpose like some
[27:39] placing down
[27:40] populate a little bit of the space, um
[27:42] place it down a bit of covers, and then
[27:45] try maybe with some AI and see what what
[27:48] comes up.
[27:49] Did Did it go mode?
[27:52] Oh, yeah.
[27:54] Uh to quickly get back to your question,
[27:56] Jared.
[27:57] Um
[27:58] So, yeah, after I knew what I want to
[27:59] do,
[27:59] I actually looked around how like how
[28:01] can you get into the industry or into
[28:03] the job, and
[28:04] uh in Germany, they actually like have
[28:07] um
[28:08] schools for that.
[28:09] Um at the time, it was just like I think
[28:11] two.
[28:12] So, I just applied there, and I took a
[28:14] course in game design level design, and
[28:16] then
[28:18] once I was done, I
[28:20] looked for jobs in the industry, and I
[28:22] started working for
[28:24] um
[28:25] 3D browser game, um and did some fantasy
[28:28] types top-down level design.
[28:31] Um
[28:33] Yeah, in between, I also did a bit of
[28:35] few years of QA, which which was also
[28:37] quite interesting to see like
[28:40] how
[28:41] all the other departments and how
[28:42] testing and everything works. Mhm. And
[28:46] There's no better way to learn game
[28:48] development than working in QA.
[28:51] Yeah, exactly. It's quite a a different
[28:53] point of view uh
[28:55] from that. And yeah.
[28:57] And at some point, I showed up at
[28:59] Andreas' door.
[29:02] And I
[29:04] blessed him. Yeah. Yes, he said
[29:06] instantly hired. Do it. Yes. I was last
[29:09] week or the week before or something,
[29:10] there was a big thing on social media
[29:13] about whether QA were game developers.
[29:16] And I'm like, if you look at the sheer
[29:18] number of game developers that start
[29:20] their career in QA, you'd have no
[29:22] question about whether QA were
[29:23] developers or not.
[29:24] my opinion is QA is like
[29:27] one of the most important departments in
[29:29] a company. You don't want to release a
[29:31] game that hasn't gone through QA, trust
[29:32] me.
[29:33] I mean,
[29:34] it's going to be a
[29:35] terrible ride. Yeah. No, I agree. Just
[29:37] about imagine the most buggy game that
[29:39] you ever played in your entire life.
[29:40] That still went through QA, you know.
[29:43] Imagine how bad it would be otherwise.
[29:44] It also gives you like a different
[29:46] perspective on like test testing your
[29:48] own stuff and like thinking of of
[29:50] situations or ways others might not.
[29:53] Um and I think it like it
[29:55] quite helps like having this this
[29:57] experience.
[29:59] No, it's absolutely impossible to
[30:00] overstate how important QA is to the
[30:02] game development process. I I just want
[30:04] to point out Antoine is here working off
[30:06] the grid. What's Swedish for that?
[30:08] Yeah, I am.
[30:10] What are you doing, Antoine?
[30:12] I don't know.
[30:13] this.
[30:14] Yeah.
[30:16] So, yeah, working on grid is very
[30:18] important, guys. Um as you can see
[30:22] um cuz this defines the metric of the
[30:24] game.
[30:27] Um yeah, no, but you see all my walls
[30:29] are on grid, Andreas.
[30:31] Mm.
[30:32] Save this level afterwards mid round
[30:33] probably.
[30:37] Next year's review, he's going to bring
[30:38] he's going to bring up this episode.
[30:41] You guys had it lucky getting into
[30:43] industry, though. I mean, with your
[30:44] schools and stuff, that's pretty fancy.
[30:48] How did you end up, Andreas?
[30:51] I mean, my teenage years were before
[30:53] even the internet, right? So, I mean
[30:56] we didn't even have we had
[30:58] computers. I mean, I I started
[31:00] absolutely with, you know
[31:02] I remember when I was like seven, I used
[31:04] to love drawing top-down road networks.
[31:06] No idea why.
[31:08] I mean, I had like many A4 pages to all
[31:10] lining up and just creating huge cities
[31:11] top-down GTA 1 and 2 style, right?
[31:14] But it was like this is back in
[31:17] probably like '91.
[31:19] '89, '88s, that's that period.
[31:23] And then of course it came into Legos,
[31:24] which is the only toy I had when I grew
[31:27] up. I had nothing but Legos, only Lego.
[31:29] It's the supreme toy.
[31:31] The best of toys.
[31:34] Yeah, I I I took a guess earlier. I'm
[31:35] like there has to be there has to be
[31:37] some Lego involved here somewhere. Oh,
[31:39] yeah. Yeah. And then of course the
[31:40] classic like going into D&D and
[31:43] or
[31:43] our Swedish version of D&D, Drakar och
[31:45] Demoner, which is quite old.
[31:47] Um and then being the dungeon master of
[31:49] that, that was also fun. I always love
[31:52] creating my own content, right? So. Do
[31:54] you ever Do you ever still start with a
[31:58] piece of paper and a pencil
[32:00] when you're doing these?
[32:02] Yeah, I do sometimes. I don't know about
[32:04] these youngsters, but
[32:06] Yeah, I I actually do that as well. Um
[32:09] I try to think about like how I want to
[32:11] build a place and some some layouts and
[32:13] I I just do some rough sketches on
[32:15] paper.
[32:16] And then I try to convert them into
[32:19] into editor and and see if that actually
[32:22] like works.
[32:24] So, I don't know. How is for you,
[32:26] Antoine?
[32:28] Uh depend I like to get my ideas done
[32:31] right away like in 3D um
[32:34] because I'm thinking about space
[32:35] sometime I cannot convert it to paper
[32:38] um big weird one.
[32:41] Uh but it it depends. Sometimes like I
[32:43] need a sketch before you know what I
[32:44] will be building, but
[32:46] yeah, it
[32:48] it really depends on what the subject
[32:50] is. Uh because the concept art can
[32:52] inspire you sometime more than your own
[32:55] drawing. So. Yeah, that's true.
[32:58] That box is 3.183
[33:01] m high. You're still This is terrible.
[33:03] Let's
[33:05] talk about how important metrics are.
[33:07] Let's talk about metrics.
[33:08] is metrics key, right? Um
[33:10] what Antoine is showing here is is it's
[33:13] not a a great
[33:15] methodology of level assignment you work
[33:17] off the grid, right? Like um
[33:19] So, okay. So, what I'm trying to achieve
[33:22] here is um to repro
[33:25] this type of thing, right?
[33:27] Uh this type of kitchen,
[33:29] but within here. So, I in the first
[33:32] place, if I would actually build all
[33:34] like a whole kitchen on grid, uh it
[33:37] would take me forever
[33:39] cuz I'm not a 3D artist.
[33:41] So, I'd rather have like these quick
[33:42] things in there and in in you know, I I
[33:45] I I I I I I I I the the only metric that
[33:46] I would care about this point is the
[33:48] 1.25, which is the the cover height
[33:52] um for AI and so on.
[33:54] And so, uh at this stage
[33:57] if you know, maybe I want to that this
[34:00] wall is at least higher than 1.25. So,
[34:02] if you combine 1.36 plus
[34:05] 0.9 something, then we get
[34:10] Um but then yeah, I would then go back
[34:13] in and iterate again and make like a
[34:15] proper
[34:16] um you know, as Andreas mentioned
[34:18] actually Andreas mentioned, we go dirty
[34:20] first
[34:21] to get the point across.
[34:22] have to show people how dirty it
[34:23] actually is, you know.
[34:26] We would clean that up later on.
[34:28] I mean, there there's there's there's a
[34:29] few metrics that is quite key here,
[34:30] right? As Antoine mentioned, it's the 1.
[34:32] um
[34:33] 1.25, which is the
[34:35] cover height, right? And that is the
[34:37] crouch cover. When you're crouching,
[34:38] that is the height that you are
[34:39] completely covered and you won't get
[34:40] your head blown off, right?
[34:42] The second
[34:43] cover that I'm sorry, the second metric
[34:45] that is important is the navigation
[34:46] space, right? So,
[34:49] yeah, we can do this first.
[34:53] Yeah, this is the this is the markup
[34:55] stuff that we're doing when we're
[34:56] marking up the levels. Every place that
[34:57] you have covers and stuff, there's is
[34:58] someone who's manually going in and
[35:00] placing an
[35:01] an entity
[35:02] that's connects to the nav mesh and kind
[35:03] of
[35:04] generates the cover for that section,
[35:06] right? So. These are the things that
[35:08] tell the AI that there's a place.
[35:10] Exactly. I mean, Precisely. Yeah.
[35:12] I was going to show like you see how now
[35:14] it turns red if it's mine under 1.25 and
[35:17] that's
[35:18] that's why like I have to
[35:19] to follow that that, you know, over
[35:21] here. We actually should I can turn all
[35:24] of them. There you go.
[35:25] And that one is is good enough. This is
[35:27] a room which even shows me like, okay,
[35:29] that's like complete um full cover. Uh
[35:33] cover. This one is like just a cover and
[35:35] this one is not accepted or half cover.
[35:40] Yeah.
[35:42] Yeah, the second metric that is quite
[35:43] important at this stage is the
[35:45] navigation, right? So, AI needs 1.25 m
[35:48] to navigate through a path without major
[35:51] issues.
[35:53] So, if you make a path that is 1.25
[35:54] wide, then one AI can cross it, right?
[35:56] Ideally, we try to make all our paths
[35:58] 2.5, which is double that, which means
[36:00] two AI can cross each other without, you
[36:02] know,
[36:03] the very polite excuse me, sir. Yep, I'm
[36:05] sorry.
[36:06] You first, you know.
[36:07] That kind of thing. Um
[36:11] The
[36:13] it can be tricky sometimes, especially
[36:14] when you start putting props like boxes
[36:16] for example in front of doorways like we
[36:18] have here. That that's we have to go in
[36:19] and kind of check that the space is
[36:21] sufficient for AI to actually be able to
[36:23] navigate.
[36:25] Um
[36:26] So, that is a second
[36:28] metric that is quite important. Cover
[36:30] and navigation.
[36:34] Uh this is a few of the things that
[36:36] Antoine was placing was as we as we
[36:38] said, it's like this cover cover
[36:39] entities and that's part of the markup
[36:40] phase. There's a lot of the other types
[36:42] of markup that we do.
[36:44] Um like I said before, like the room
[36:45] system that actually adds a breathable
[36:47] atmosphere to the room.
[36:51] I can show another one here like to be
[36:52] able to vault
[36:54] or to go on on top of a ledge.
[36:57] Um
[37:02] Also something that we want
[37:04] we're doing to kind of control make sure
[37:07] that, you know,
[37:09] if you're not able to
[37:12] um
[37:13] I mean, if you shouldn't jump there,
[37:15] then we're making sure you're you
[37:17] cannot.
[37:19] But we only allow it in some areas.
[37:22] Yeah, I think we can even
[37:24] um
[37:25] determine if it's like should be usable
[37:27] from both sides, right? And or only from
[37:29] one side. So.
[37:31] Yeah, in theory you could not stand like
[37:32] on on a lower platform and then jump and
[37:34] then here the the character would pull
[37:37] up and and
[37:39] pull himself over the ledge or the the
[37:41] other way around you could jump down,
[37:42] but you could also restrict it to like
[37:44] be only one way.
[37:47] So, for example, here you see a good
[37:48] example of like level assignment where
[37:50] let's imagine this is a combat area. You
[37:51] have this little section where Antoine
[37:53] was just in, right? You have boxes that
[37:55] is
[37:56] kind of facing towards the door. You
[37:57] have people can be on the other side.
[37:59] You have this little ledge on the left
[38:00] side if you go
[38:01] over there back into the corner over
[38:03] there.
[38:04] This is almost like a little survey
[38:06] platform that leads down to the door,
[38:07] you know, where you can overlook the
[38:09] situation. You can have one person kind
[38:10] of standing here providing cover while
[38:11] another person goes in and clears the
[38:13] room for example.
[38:14] So, all these little things like this
[38:15] that when we build stuff, we kind of do
[38:17] it
[38:18] on the fly almost because we've done it
[38:19] so many times, but it's all about
[38:21] creating a different in elevation, which
[38:24] is always very interesting without
[38:25] creating
[38:27] um needlessly complicated paths.
[38:30] And on top of that, combining that with
[38:32] nice fire angles and cover positions.
[38:35] So,
[38:37] no matter if you're an attacker or
[38:38] defender, you would ideally have some
[38:40] advantage in certain part of the map,
[38:42] right?
[38:44] Now Now you're doing going with Chris,
[38:46] Antoine, really?
[38:47] I'm doing a four-burner stove. Yeah.
[38:50] Just in that's important for the other
[38:51] stuff.
[38:52] part of level design. Um just another
[38:54] right turn. This is
[38:56] He's just showing that he knows how to
[38:57] do a little bit of art. I mean,
[38:59] you know, people
[39:01] I mean, with this you be I mean, with
[39:02] this we can theoretically just slap on a
[39:03] material, right? And ship it, right? I
[39:05] mean, I I I I I I I I I I I I I I I I I
[39:06] I I I I I I I I
[39:06] I know an industrial kitchen was your
[39:08] your your
[39:09] your visual reference, but
[39:12] I I got to think that with this
[39:14] situation here, this is more likely a
[39:16] drug lab or something being out here at
[39:19] the end of a
[39:21] It could be a geology lab, you know, I
[39:23] mean, they need heat or some burners as
[39:25] well to study samples of materials and
[39:27] whatever might be right. Cook the rocks.
[39:30] Cook the rocks. I don't know anything
[39:32] about geology.
[39:34] It's fascinating. Because yeah.
[39:41] Another thing worth mentioning as well
[39:43] like what Antoine is building there,
[39:44] this entire section from here onwards,
[39:46] that would be a separate module, right?
[39:47] That would be built as an independent
[39:49] thing and it can
[39:50] be attached to
[39:52] any of the connectors of the hub.
[39:54] So.
[39:56] Exactly. That's what what Antoine showed
[39:58] in the beginning when he pulled out the
[39:59] hub and you you saw like the four
[40:00] different modules poking out that
[40:03] this would be like one of those sections
[40:04] and then you could like in theory move
[40:06] it like on on each of the connectors
[40:08] like on on a north, west, or east side,
[40:10] for example, and like
[40:12] um
[40:14] ideally with with the modular content,
[40:16] stuff should work in like any way it
[40:19] it's connected and attached. Where did
[40:22] your NPC run to? Oh, there is.
[40:24] Oh, nice nice.
[40:25] Yeah, I think they were all like uh
[40:27] in
[40:28] inside and use that cover inside. Yeah,
[40:30] he lured he lured you in.
[40:34] Just want to point out there's a small
[40:35] gap between one of the boxes on the
[40:36] higher platform.
[40:38] Yeah, um I saw that.
[40:41] That's what happened when you do sloppy
[40:42] sloppy level design.
[40:45] Yeah, you can also do that, right? And
[40:48] uh
[40:49] Yeah.
[40:50] And then do something with them. Maybe
[40:52] cook them in your drug lab.
[40:54] I don't know.
[40:57] Maybe.
[40:58] The future, you know.
[41:00] Please. Maybe expand our cuisine to
[41:03] include other species.
[41:08] That's just a small freeze on my side.
[41:10] There you go, we're back.
[41:14] Um yeah, so cover works. The AI is
[41:17] moving around and so on. So, it's quite
[41:19] nice. And uh
[41:21] they are taking cover, so
[41:23] that works well.
[41:24] Um
[41:27] maybe I need to check how far the
[41:30] navigation is going. So, looks at looks
[41:33] looks fine.
[41:34] It's not going here, so maybe the AI is
[41:35] not using these ones.
[41:37] We try to rectify that. Wait, you didn't
[41:40] you didn't do the navigation markup. How
[41:41] is that just suddenly there?
[41:43] Because
[41:44] Yeah, because it it we already had one
[41:46] with this one, so I kind of like cheated
[41:48] here, but I will I will actually do one
[41:51] um so you guys can see.
[41:54] Yeah, navigation is it's a volume that
[41:56] we put down and in this case it's just a
[41:58] giant volume and then the system
[41:59] generates everything inside the volumes.
[42:01] It checks all the surfaces and generates
[42:03] a valid nav mesh. Ideally, of course,
[42:05] each room would have a more detailed
[42:07] version.
[42:08] Like what he's doing now.
[42:13] But for testing it's just fine to put
[42:14] down a giant box and
[42:16] I kind of feel like
[42:18] I want a ladder that you can climb on
[42:19] top. Now that I've seen now that I saw
[42:21] the nav mesh on top of the
[42:24] on top of the kitchen, I kind of want a
[42:26] ladder to get up there.
[42:27] You want a ladder on top here?
[42:29] Yeah. I'm sure Antoine can build a
[42:30] little balcony on top there with a
[42:32] ladder up, can't you, Antoine, for
[42:33] Jared? Yeah, yeah, I can do that. There
[42:35] was a question in the chat earlier
[42:38] uh when you were
[42:39] putting the bookshelves in there, you
[42:41] actually like built the bookshelf, you
[42:44] know, wall wall top top shelf shelf
[42:46] shelf.
[42:47] Uh first comment is bookshelves are is
[42:50] there not a just a white box bookshelf
[42:53] that you can just go plop there?
[42:57] That that kind of goes into the
[43:00] the thing where um
[43:01] for us, we could just put a box. It's
[43:04] kind of up to us to communicate that to
[43:06] the artists like, "Hey, that would be a
[43:07] storage area."
[43:09] Um usually what I would do as well is to
[43:11] have each of these labeled like kind of
[43:12] like what I did with these
[43:14] boxes here um
[43:16] with like maybe color coding and then
[43:18] just explain that or I would have a a
[43:20] drawing of a layout
[43:22] um
[43:22] that we do in in in Visio or so on where
[43:25] I would specially like, you know,
[43:28] specify that, you know, that that's
[43:30] these are storage area. Now
[43:32] when the
[43:34] um
[43:36] when the concept art comes in, then they
[43:38] would put that in or even just the
[43:39] artists they would swap out, but I
[43:41] thought that for the visual aspect of
[43:43] it, we could just build a shelf.
[43:46] Right. And even with even with this,
[43:47] right? With the we use a software called
[43:49] the designer designer solid tool, right?
[43:51] Yeah. It's
[43:53] we're quite proficient with it. So,
[43:55] sometimes it takes longer for us to open
[43:57] a library, find the bookshelf, Right.
[43:59] and put it into a level than it's just
[44:01] like drag drag a box, drag two more
[44:03] boxes, extrude it, you know, it's it's
[44:05] job's done, right? I mean
[44:06] it's
[44:08] it's just the way it is. Yeah, I I I
[44:10] I I hear you. I get you.
[44:12] Yeah, so that that you know, it looks
[44:14] like a bookshelf at this moment because
[44:15] it's just a couple things, but it could
[44:17] be a cupboard, it could be a cat it
[44:18] could be a cabinet, it could be a Yeah,
[44:20] it's storage box.
[44:21] When we put down stuff in a location, it
[44:23] does like what Antoine did next to the
[44:25] stairs that he put something looks like
[44:26] a pipe. In the end that might turn into
[44:28] a support column, you know. The only
[44:29] thing we have indicated is that we want
[44:31] to have something there that is a full
[44:33] height of this size. I most likely it
[44:35] will be some kind of full cover, you
[44:37] know.
[44:38] And then when the artists put it
[44:39] together, they can really use their
[44:41] creativity to
[44:43] put whatever they would like to have in
[44:44] it, right?
[44:47] If there is something specific that we
[44:48] want that we really want to have this
[44:50] type of art piece there, let's say we
[44:51] really do want to have a pipe there
[44:52] because
[44:53] we want to when there's combat that
[44:55] someone shoots it and it bursts and gas
[44:57] comes out, you know, then we will maybe
[44:59] put a color on it and say like, "Listen,
[45:01] this has to be a pipe, right?" And then
[45:02] that's a pipe.
[45:08] I'm building nonsense.
[45:10] You're building Jared's balcony.
[45:12] Exactly. With a little reclining chair.
[45:14] It's it's just what I'm I said nonsense
[45:16] because
[45:18] it like
[45:19] in reality this doesn't make sense,
[45:21] right?
[45:22] This is just for the sake of the show,
[45:23] right?
[45:24] I just want to precise it so that You
[45:26] have an entire facility with a kitchen
[45:28] outside in the cave. Don't talk to me
[45:30] about what makes sense.
[45:32] Yeah.
[45:34] Precisely.
[45:35] Vertical tra- traversal is great.
[45:39] Oh, yeah, but we can we can even expand
[45:41] more, right? We could have like some
[45:42] venting system that goes back in here or
[45:44] something. Um It could be that for
[45:46] example, that door, let's say this door
[45:47] that you have leading on the other way,
[45:49] maybe that's the barracks and this is
[45:50] actually their kind of common area. They
[45:52] just have a very nice cave view.
[45:54] With lots of cave bugs flying in there.
[45:55] I Oh, I I I get it. Like like this is
[45:57] like like uh
[46:00] like like a build out of the underground
[46:02] facility that hasn't quite been
[46:04] completely constructed yet.
[46:06] For example, maybe they're waiting for a
[46:07] few more modular pieces to kind of put
[46:09] together and put into the camera.
[46:14] I do like the adherence of you know, the
[46:15] safety rail and it's like this
[46:17] underground facility that's got this
[46:19] precarious
[46:21] kitchen outside on this
[46:23] random platform. They're like, "Nope,
[46:24] safety first."
[46:26] Yeah, yeah, yeah. Important.
[46:30] As we said, it doesn't have to be like a
[46:31] food kitchen, right? There's
[46:34] there's many types of kitchens or not
[46:35] even kitchens, places with storage and
[46:38] some kind of heat element, right?
[46:40] A lab of some kind.
[46:44] Here you go.
[46:46] See?
[46:48] Oh, Jared created an interesting
[46:49] vertical combat space.
[46:52] Well done, Jared.
[46:54] Nice.
[46:55] I've played a video game or two. I have
[46:57] a free slot on my level design team if
[46:58] you want to join, just saying.
[46:59] Yeah,
[47:00] I I
[47:02] Never mind, I was going to say something
[47:03] then. I was
[47:05] I I I keep a number of options open. Who
[47:07] knows when my last day ends up here.
[47:10] Never put all your hand grenades in the
[47:11] same basket, right?
[47:13] Um I can um
[47:15] start on a building markup as well where
[47:17] um basically we add like room system so
[47:20] that you can breathe without your
[47:22] helmet.
[47:24] Yeah, I think that's a good thing. I
[47:25] mean, show a bit markup so people know
[47:26] the less less exciting creative bits of
[47:29] of level design, right?
[47:30] Although after the 404, I don't think
[47:32] John Crew will ever let me on the
[47:33] vehicle team.
[47:36] They're overrated anyway.
[47:41] Yeah, so with with with with the room
[47:43] system now it's uh since we already have
[47:44] an existing one
[47:46] uh
[47:49] I think Antoine can maybe turn on the
[47:51] debug where he can actually
[47:53] see them how it connects. Um
[47:56] so, for now he's placing
[47:58] uh
[47:59] an area box down here. Um can also be a
[48:01] shape. Whatever we need depends on like
[48:04] how complex
[48:05] complex the room is and then uh we
[48:07] define it by the size
[48:10] uh up until the walls.
[48:12] And then we just connect an entity to it
[48:15] and tell it like, "You are a room
[48:16] system. You have like oxygen."
[48:19] And we try to separate it
[48:21] um in a in a logical way on how the
[48:23] rooms are um
[48:24] um are broken up.
[48:26] Mhm. So, um for for um
[48:29] for this room, for example, it would go
[48:30] up until the door.
[48:32] And then in the door would sit another
[48:34] connector to a the next room system um
[48:37] for the platform
[48:39] and uh
[48:40] we would put in a connector in between,
[48:42] so actually the air can like circulate
[48:45] between like
[48:46] we can define it by the size of the room
[48:48] or
[48:49] doors, for example, come automatically
[48:51] with with a a room connector in the
[48:53] proper size and
[48:55] um it will actually then tell tell the
[48:57] game like how how the oxygen will
[49:00] actually like circulate and flow.
[49:02] Um should we ever get like
[49:05] uh
[49:06] according gameplay
[49:08] related things in
[49:10] Yes.
[49:12] I mean, it is important as well as
[49:13] someone else as well because the size
[49:15] the the size of the volume actually
[49:16] determines the amount of air and it is a
[49:19] correct amount of air, right? That's why
[49:21] the markup is important. Like if we make
[49:22] a small room, it will only have if you
[49:24] make a 4 cubic meter size room, that
[49:26] room will only have 4 cubic meter of
[49:27] air, so
[49:29] that is what you have, you know.
[49:31] So, that's why all this is important,
[49:32] but also if you have a very large room
[49:34] on one side, a very large room on the
[49:36] other side, and a very tiny door in
[49:37] between them.
[49:39] The portal in between the two will
[49:40] determine the rate of gas transfer
[49:43] between the two rooms as well. So,
[49:45] if one room is
[49:48] a vacuum, the other one is full of
[49:50] oxygen, you open the door, it's not that
[49:51] it's just going to instantly equalize.
[49:53] It's going to leak over at the rate that
[49:55] is transferred through the portal,
[49:57] right?
[49:58] So.
[50:00] Indeed. And
[50:02] whenever one of the players notice that
[50:05] areas without air exists, um
[50:09] could have been sometimes appeared in
[50:10] the area 18 hubs, for example, then
[50:13] there was a broken connector
[50:14] and all the air leaked out
[50:17] into the void.
[50:18] And then
[50:20] left the room without air.
[50:23] So, yeah, that's that's things that can
[50:24] happen sometimes. A connector
[50:27] just gets offset a bit or like something
[50:29] was accidentally deleted or something
[50:31] something just broke.
[50:33] And then we need to go in and check like
[50:36] is the is the markup like the box is the
[50:38] is the right
[50:40] does it have the right size? Does the
[50:41] connector still sit?
[50:43] Um yeah, and we have like lots of debug
[50:46] options to
[50:48] to debug that and and see that.
[50:51] Yeah, in this case, for example, the
[50:53] room here has a room and the
[50:55] one he was just in also has a room.
[50:58] The other bit that is still on the
[50:59] outside between the two is
[51:01] technically almost an exterior, right?
[51:03] So, it wouldn't really have a markup
[51:05] unless it's inside a cave.
[51:07] We usually do a bit For For example, a
[51:09] cave system does have a room system
[51:10] markup, but it has a port at the
[51:12] entrance that transfer the gases in and
[51:13] out, right?
[51:15] So, we're similar here. So, ideally,
[51:17] because they don't have airlocks in this
[51:18] place,
[51:20] one would assume that there is a
[51:21] somewhat breathable atmosphere in this
[51:22] game.
[51:25] Exactly.
[51:29] Yes, I just put one over there.
[51:31] Um and then leave it to the planet.
[51:34] Um
[51:35] and space over here.
[51:38] So, that way you can
[51:39] up a
[51:40] set up a transit elevator now.
[51:42] I But yeah, sure. No, that's takes a bit
[51:45] more time.
[51:46] I know.
[51:48] But yeah, so we've got a
[51:50] you know, a marked up
[51:52] area with some AI,
[51:54] some cover,
[51:56] uh added to a UGF.
[51:58] Yep. Very rough. Needs a couple of more
[52:00] iterations, but uh
[52:01] good job, Antoine.
[52:03] Yeah, it seems tough.
[52:05] You know, it's not perfect, but Well,
[52:08] it's It's important to remember that in
[52:10] these hour-long game dev SCLs, there's I
[52:14] don't think there's a single aspect of
[52:16] Star Citizen that can be made in an
[52:18] hour.
[52:20] So, you know, everybody that comes on to
[52:22] do this is is is facing a virtually
[52:25] impossible task, so
[52:27] Another good thing is that he didn't
[52:28] create any spaces where you can actually
[52:29] fall off. So, his his security security
[52:32] rating is is
[52:34] a What What What about that?
[52:35] That's why you you you you can't crawl
[52:36] into that hole right there. You you
[52:37] can't go prone. I'm sure you can go
[52:39] prone and just like squeeze yourself in
[52:41] like a worm, but
[52:42] he can plug that between the stairs on
[52:44] the left side. Show me what happens. Go
[52:45] prone. There you go. Oh.
[52:47] Oh. Oh.
[52:51] Oh. Oh.
[52:52] Maybe.
[52:55] There you go.
[52:58] Uh Need to Need to plug that hole, man.
[53:00] You just went to secret level B here.
[53:07] Um but yeah, as Indus mentioned like,
[53:09] you know, we can see now um if I take
[53:12] the hub again,
[53:14] that that would be maybe a small section
[53:17] and we basically just created one of one
[53:19] of these again.
[53:21] Um
[53:22] and like what we have here, right? This
[53:24] would be like
[53:25] an entire section that we can swap out.
[53:27] So, I could just take that whole section
[53:29] and put it somewhere else where there is
[53:31] like
[53:32] um the same connector size.
[53:35] You could then shuffle them around and
[53:37] like have it like ordered in in a
[53:38] different different spots.
[53:41] I mean, at the moment as well, we have
[53:42] very limited content with our UGFs, so
[53:46] the plan in the future, of course, is to
[53:48] revisit and really quite expand them and
[53:50] turn them into their proper thing.
[53:51] They're a bit lackluster at the moment.
[53:52] They're
[53:53] They have a few years on them. They need
[53:55] a bit of polish, you know, a bit of
[53:56] makeup, and they need
[53:59] some parts actually need to be
[53:59] completely redone. So, there will be a
[54:03] one of the components that we'll be
[54:04] looking at in the future at some point
[54:05] will be a complete rework of the UGFs
[54:08] and really
[54:10] put them out with like a proper amount
[54:11] of content, not just a hub and three
[54:12] rooms, right? Because that's that's
[54:14] underwhelming. The The UGFs did get a
[54:16] new addition in 3.13, though. Nobody's
[54:19] discovered them yet.
[54:22] Dum dum dum.
[54:24] So, I mean, the patches went out
[54:25] yesterday, so
[54:27] but there there is something
[54:29] new to discover in
[54:32] I think it's the medium ones. Might be
[54:35] the large ones.
[54:36] There's about nine of them. There's
[54:38] about nine of them that have something
[54:39] fun to discover.
[54:42] And And Andreas is like, I have no idea
[54:44] what he's talking about. I have no idea
[54:46] what he's talking about, to be honest.
[54:47] It's It's
[54:50] I'm just trying to not show my
[54:51] ignorance. They're in there. No.
[54:53] I'm not saying what they are cuz I want
[54:54] people to discover
[54:55] collectibles of yourself. A A A
[54:58] fluffy Jared laying around.
[55:01] It's not actually far from the truth.
[55:03] Oh, jeez. Okay.
[55:05] Uh
[55:06] All right. Uh so so yeah. So, we've got
[55:09] just a couple minutes. What do we
[55:11] How do you want to wrap this up?
[55:13] Is there something you can do in like 3
[55:14] minutes? What are you doing now? You
[55:15] going crazy with the doors?
[55:17] Yeah. I
[55:19] I thought about expanding this into a
[55:22] connector about the same size over there
[55:24] we have over there.
[55:26] And
[55:27] then I realized
[55:29] um that basically we have uh the
[55:31] shaft over here.
[55:33] So,
[55:35] you know, in this case, then uh
[55:38] yeah, the elevator shaft,
[55:40] um which is a problem.
[55:43] So, in this case, for example, if I make
[55:45] it too big, uh we would have like
[55:47] bounding boxes checks that would ensure
[55:50] that nothing would collide
[55:52] and one into the other uh stuff like
[55:54] that. So, maybe that new section that I
[55:56] have here could work over here,
[55:59] but maybe it wouldn't work where I'm
[56:01] building it right now.
[56:05] Yeah, right. That's That's why I
[56:06] mentioned that sometimes it helps if you
[56:07] just like have a longer corridor that
[56:09] like um brings out the whole space a bit
[56:11] further and then allows for like
[56:13] more generation options cuz otherwise
[56:16] the procedural tool would tell you or
[56:17] like, "Hey, that's like it would
[56:19] collide, so it wouldn't wouldn't
[56:20] generate." And then it tries for like
[56:22] different combinations or different
[56:23] slots where it could
[56:25] connect this this new piece to um
[56:28] yeah.
[56:29] I mean, one of the kind of design
[56:30] philosophies that I've been I've been
[56:32] pushing for as well is that we really
[56:33] want to get away from this
[56:35] room corridor room corridor kind of
[56:36] approach to building, you know, that's
[56:37] not really what the world looks like,
[56:39] you know, it's
[56:40] it's a series of rooms or whatever it
[56:42] is. It's It's more
[56:45] it's a bit more structured than that.
[56:46] So, you would never get that. But at
[56:48] some points in the game you might use
[56:49] corridors to
[56:52] to what this guy's been saying, like to
[56:53] kind of push some content a bit further
[56:55] away
[56:57] because otherwise we will run into
[56:58] bounding boxes issues with all the items
[57:00] that lies around it and things will just
[57:02] never be able to generate, right?
[57:05] So.
[57:07] Yep.
[57:09] Exactly.
[57:17] But also when I'm Sorry. procedural tool
[57:19] as well, we have the ability to
[57:20] procedurally construct corridors. So,
[57:23] the game when generating can make build
[57:25] corridors by itself. Sorry, Manuel.
[57:27] Please go.
[57:27] No, it's fine.
[57:28] Uh what I wanted to say is like uh not
[57:30] necessarily dependent on
[57:32] uh the procedural stuff, but
[57:34] um
[57:35] what what Antoine was like building
[57:37] before like years like we sometimes
[57:39] already planned for like future spaces
[57:41] where things could connect on later on,
[57:43] but like
[57:44] uh for the initial release, it would
[57:45] just like
[57:47] um be cut off, but uh there would be a
[57:49] door a locked door and you couldn't go
[57:51] any further. But we already tried to
[57:53] like plan ahead a bit in like how we can
[57:55] expand the the space in the future and
[57:57] like or we already know like from from
[57:59] the level design documents like what we
[58:01] want to build in like the tier one tier
[58:02] two stuff. And we already um plan out
[58:06] for these spaces and just like, "Okay,
[58:08] we know
[58:09] let's say area 18 the hospital the
[58:12] hospital like we know already like where
[58:13] it would go and like
[58:15] a place a facade there and and stuff
[58:16] like that." So, we already planned for
[58:17] the space and
[58:19] uh I don't know
[58:21] uh and leave it for the future.
[58:23] Yep.
[58:26] Well,
[58:27] thank you, Antoine. I think I think we
[58:30] have a better sense now of what level
[58:33] design does, how they work.
[58:36] box down.
[58:39] Not frozen.
[58:40] Oh. Perfect. Uh uh we we we we can't end
[58:43] the show until I give I give Andreas
[58:45] this.
[58:47] He's got to
[58:51] Oh, yeah. Perfect.
[58:54] I swear that intersect you not
[58:56] violating
[58:57] the laws of reality or something.
[59:00] I can go and stop the share.
[59:05] All right. Thank you, everybody. Uh
[59:07] that's This has been Star Citizen Live
[59:09] Game Dev FPS Level Design. I've been
[59:11] your host, Jared Huckaby, and joining us
[59:13] on the show this week has been
[59:15] Antoine. Uh uh
[59:17] I'm not going to try to say your last
[59:18] name. You want You want to do it?
[59:20] Fouquet.
[59:21] Yeah, I'm glad I didn't try. Uh
[59:24] Antoine, Andreas, and uh
[59:26] uh Manuel.
[59:27] Uh
[59:28] Thank you for joining us. Uh Uh, we'll
[59:30] be
[59:31] Next week we have an ISC and another
[59:34] episode of Calling All Devs.
[59:36] Uh, so I'll see you live again in about
[59:38] 2 weeks.
[59:39] Um,
[59:40] thanks for watching everybody. Take
[59:41] care. No raid this week. We're just
[59:45] It's been a long week.
[59:46] Take care everybody. Goodbye.
[59:48] Goodbye.
[59:49] Goodbye.
[59:52] You going to fix that box now?
[59:53] I'm just going to perform a street
[59:54] tomorrow. This is unacceptable.

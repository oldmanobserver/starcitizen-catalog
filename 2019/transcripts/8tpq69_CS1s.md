# Star Citizen: CitizenCon 2949 - Me, Myself, And UI

**Video:** https://www.youtube.com/watch?v=8tpq69_CS1s
**Date:** 2019-12-03
**Duration:** 58:02

## Transcript

[00:00] [Applause]
[00:02] hello hello Manchester hello
[00:09] so me myself and you I wear the UI guys
[00:15] oh who are we so I'm David Gill I'm an
[00:20] engineer I've been programming video
[00:22] games for about 25 years maybe a bit
[00:25] more and I've been specializing in the
[00:29] UI part for about 15 years and I've been
[00:33] at CI G for six of those years and with
[00:37] me today is someone you might recognize
[00:38] Zayn bien and he's been CI chief seems
[00:47] well practically the beginning right so
[00:52] what do we do
[00:53] whether you part the UI tech team which
[00:56] is a relatively new team and we're been
[01:00] tasked by Chris to improve the UI
[01:03] technology to improve the tools and tech
[01:07] that the teams used to make UI now we
[01:12] kind of understand that the UI is a bit
[01:15] of a bugbear for a lot of people playing
[01:16] the game so we need to sort of take a
[01:18] step back make the tools better make it
[01:21] easier for people to use to develop the
[01:23] game for and hopefully long-term help
[01:26] make good UI for you to use so what are
[01:32] we going to talk about today so I'm
[01:34] going to talk about some of the
[01:35] challenges making UI for our game we are
[01:39] are some of the new technology would
[01:42] been developing and to meet those
[01:44] challenges and then we're going to talk
[01:46] about a design concept and how we get a
[01:49] design concept to something working in
[01:52] game with this new technology being Zane
[01:55] and the team have been working on so
[01:58] this is my cue to drink some water
[02:04] self what is UI or more specifically
[02:10] what is it in our game what does it
[02:12] entail in our game so you'd be right in
[02:13] thinking that the UI is like the front
[02:17] end and the pause screen and those menus
[02:19] things so and then that including arena
[02:22] commander things like your ship
[02:23] selection your loadout the star marine
[02:27] the lobbies things like that but it also
[02:29] includes the mobi glass and all that
[02:32] entails kiosks that you can use in the
[02:36] world this comes as UI so shopping
[02:39] kiosks item kiosks commodity kiosks ship
[02:44] selector kiosk to get your vehicle out
[02:46] things like that they all counts as UI
[02:48] so this image also shows quite a few you
[02:51] eyes all at once we've got the visor
[02:53] which is out here this is showing your
[02:58] heart rate and the little dude with the
[03:00] damage to your limbs and stuff so this
[03:02] is all the visor UI with actually got
[03:05] some a hint showing at the moment on
[03:07] this screen and that's also cancels UI
[03:10] and then where it says business district
[03:12] because we're on a tram at the moment
[03:13] that's also counselors UI sui we're
[03:16] dealing with a lot here and of course
[03:18] the vehicle MF knees or the
[03:21] multifunctional displays that we see in
[03:23] in the vehicles that includes these
[03:25] panels that you see in front of you and
[03:28] then the head-up display which is on the
[03:31] transparent glass that all counts as UI
[03:33] and this this is just some of the things
[03:35] there's much many other things like door
[03:37] locks and air locks and plenty of things
[03:39] we do so what are the challenges in
[03:43] making UI for star citizen well the
[03:47] first one is the most obvious answer
[03:49] it's it's the scale of this game and the
[03:52] ambition of this amazing game that we're
[03:54] working on there that just sheer number
[03:57] of gameplay ideas that we have and
[03:59] gameplay features and a lot of those
[04:01] features all have UI to describe them so
[04:04] when we're thinking about gameplay
[04:06] features I mentioned some of the things
[04:08] like the front end and the mobile glass
[04:10] but let's say we just take the mobile
[04:12] glass in isolation that's got the
[04:14] personal modification out the vehicle
[04:16] modification that
[04:18] the starmap this is still that mud thing
[04:22] and mission managers have this this is
[04:26] just the mobi glass so if you talk about
[04:29] chaos rock commodity code geass item
[04:31] kiosks the ship selector chaos so just
[04:35] lots and lots of different gameplay
[04:37] features and stuff that all require
[04:39] their own unique you eyes and your own
[04:41] own ways of sort of describing that
[04:44] feature to the game so even things like
[04:46] some of the guns have a little screen on
[04:48] the back that how or the is it still got
[04:50] the poor that has the screen on the back
[04:53] that says how many bullets or how much
[04:54] energy it's got in it that's you I and
[04:56] that's unique UI that we have to make
[04:58] for the game now the next challenge is
[05:04] what we call diegetic UI now in what
[05:08] you'd call a traditional you a video
[05:11] game and some games i've worked on in
[05:13] the past were like racing games you'd
[05:15] have what's called a hood which is all
[05:18] these gameplay game elements like on a
[05:21] racing game would be the lap counter and
[05:24] your lap time and total number of laps
[05:26] you do in the map maybe you status of
[05:30] your vehicle and other things like that
[05:31] that would be drawn to the screen but
[05:34] overlaid over the top of the 3d game
[05:36] world now star citizen is kind a bit
[05:40] different
[05:41] we have diegetic UI which means the UI
[05:43] actually can live in the world you can
[05:45] see it working in the world like we see
[05:47] with this airlock here we've got two
[05:49] screens and the actual panel that you
[05:52] use and then the kiosks when you're
[05:56] purchasing items these are all diegetic
[05:57] you eyes now part this digest you either
[06:01] Chris insists on is that you know it's a
[06:05] real challenge to make is it been in a
[06:09] multiplayer game or massively
[06:11] multiplayer game in this case
[06:14] when you're using these panels he wants
[06:16] all the other players to see what's
[06:19] going on with the UI it should shouldn't
[06:21] be just you that's looking at it and
[06:22] that presents us with quite a challenge
[06:24] and the reason why this is like an
[06:27] important thing is certainly for the
[06:30] multi creep ships so if
[06:31] you're the captain of a ship and you
[06:33] want to see all your guys doing things
[06:35] at their various stations and fiddling
[06:37] with the shield's maybe managing the
[06:39] weapons and stuff you need all these UIs
[06:42] to be updating and working in the game
[06:44] world so that's a real big challenge
[06:46] that we're going to we need to overcome
[06:49] one of the other challenges but it's
[06:55] cool at the same time is the way this
[06:58] game is funded and by you guys thanks a
[07:00] lot for that is that it we always have
[07:04] something live and out there all the
[07:05] time so when we're developing a new UI
[07:08] or even stronger than that if we're
[07:11] trying to develop like a new technology
[07:13] we can't just break the existing system
[07:17] or throw away all the existing assets
[07:19] because well you won't be able to fly a
[07:23] ship or selector ship or buy an item so
[07:25] whatever we do whatever new technology
[07:27] technology we come up with we need that
[07:31] to not break anything that's already
[07:32] existing in the game world
[07:34] so I'll get shouted out so another part
[07:43] the scale issue is just the sheer size
[07:45] of actual the universe so you can see
[07:48] this image in port olisar here that
[07:51] there's one two three four five six
[07:54] seven eight I think
[07:55] ship selector consoles there there's a
[07:58] few door locks in this image but also
[08:01] you've got all the shopping kiosks and
[08:04] that's even before you talk about the
[08:06] visor and the lens and they even if you
[08:08] get outside and you got over the vehicle
[08:09] you guys we have to manage all these
[08:13] different UIs as we're going around the
[08:15] universe like they they talk really
[08:17] quickly and they can that should be tens
[08:19] if not hundreds at a single location
[08:23] finally we have lots of different
[08:28] manufacturers in star citizen that make
[08:31] items and weapons and vehicles and and
[08:35] things like that and if those things
[08:38] have you eyes you kind of want the style
[08:42] of the UI to match the thing that you
[08:44] in the URL so you just look weird in
[08:46] janky right so also if you've got things
[08:52] I had shops or subway systems or other
[08:55] things like that then they would also
[08:58] want to match the UI in their
[09:00] circumstance of contacts that they're in
[09:02] so we can see this this particular
[09:05] manufacturer here so there's another
[09:11] another level - this is the level of
[09:13] Technology so some things a low
[09:16] technology like this guy which is kind
[09:19] of in this cool retro style but it's
[09:21] meant to be a low technology level
[09:23] that's like 2d panels and things like
[09:25] that but you might have something that's
[09:28] in a more advanced system and you'd
[09:31] expect that UI to be appear more
[09:35] advanced to sort of make it more
[09:37] believable so you might have cool
[09:39] hologram you eyes with or floating
[09:41] models and stuff like that so that's
[09:43] kind of a challenge that we need to
[09:45] cover a lot of bases here with how the
[09:48] UI is displayed so when we started it
[09:53] with the UI tech team we are to work out
[09:55] what a you know what are these goals
[09:58] what do we need to cover here we need to
[10:00] cover the scale the scale of star
[10:04] citizen which is pretty difficult we
[10:07] need to be flexible so we can display
[10:09] all the different styles and all
[10:10] different rendering mechanisms so
[10:11] drawing it in different ways and really
[10:14] really important that we don't break
[10:16] anything on the way we can't just say a
[10:19] 43.8 none of the vehicles are going to
[10:22] work or you can't but do any shopping
[10:24] that's just not an option here so we
[10:27] can't break anything on the way that's
[10:28] really important so how we're going to
[10:31] achieve this or how on a technology
[10:34] level do we achieve this goal well the
[10:40] answer is separation I drew this image
[10:42] you might be able to tell I'm James the
[10:44] artist right so what we do is we split
[10:48] the code up into just two sections and
[10:51] we closely and somewhat confusingly call
[10:54] these the game and the UI
[10:58] and the game is deals with the storage
[11:02] of the information the synchronization
[11:04] of that information across all the
[11:06] clients or other players are connected
[11:08] and all the logic that that gameplay
[11:12] element would have so that's where the
[11:13] game lives or what the game deals with
[11:16] and then we have the UI on this side
[11:19] side on this deals with the displaying
[11:24] of all this information and this will
[11:26] also deal with the interface and all the
[11:29] interactions that you can perform with
[11:30] the UI so that's like its physical
[11:33] representation in the world and the game
[11:35] deals with all the sort of logic and
[11:37] information part of it and the reason
[11:39] why it's called gaming UI actually is
[11:41] it's kind of a blame thing where we when
[11:45] we get books over and say hey lis we've
[11:48] got like the ammo count on the back of
[11:50] the gun and it always says zero but I
[11:51] can shoot my gun say well is that UI
[11:54] problem is it is it displaying the wrong
[11:57] number or is that or does the gun think
[12:00] it has zero bullets and we say hey
[12:02] that's a UI problem or that's a game
[12:03] team problem someone's got to go and fix
[12:05] that thing as we go so we that's why we
[12:09] sort of locally use these terms but it's
[12:11] kind of confusing for anyone that
[12:13] doesn't know it so let's talk about the
[12:16] advantages of splitting up the game part
[12:19] of the system from the UI part of the
[12:22] system now they had the first major
[12:24] advantage here is to do with streaming
[12:27] now for the UI we have to be super
[12:32] aggressive with the streaming like if
[12:35] you leave a room with some UI in we need
[12:38] to throw it away immediately because
[12:40] it's super expensive on resources it's
[12:43] super expensive on the CPU cost so we
[12:47] can't just rely on LCS if anybody knows
[12:50] about that we can't just wait till
[12:52] you've really really far away and then
[12:54] throw it all away we have to be very
[12:56] aggressive you might actually see this
[12:58] being overly aggressive sometimes and
[13:00] you'll walk up to some I think the
[13:04] delivery lockers are a bit too
[13:07] aggressive in their streaming you walk
[13:09] up to the
[13:10] top end and that's because we've been a
[13:12] bit too keen there so we need to balance
[13:13] that so it helps us because if the game
[13:18] holds all the information and the UI
[13:21] holds all the assets and the display
[13:23] then actually as we stream if we've
[13:26] really aggressive assuming we can throw
[13:27] away the UI and then if we've returned
[13:30] to the room then and the game
[13:32] information is still there then it can
[13:35] pop back up with by using all the
[13:37] information used by the game so that
[13:39] that's really cool advantage for us now
[13:43] it also helps us with the diet diabetic
[13:47] multiplayer problem that I mentioned
[13:49] earlier because if you can reconstruct
[13:52] the UI really quickly from from just
[13:56] this game data blob as you return to
[13:58] room then as long as you can synchronize
[14:01] or keep in sync that data blob for all
[14:03] the clients that connected all the
[14:05] players are playing the game then anyone
[14:07] can convey construct that UI anytime so
[14:11] I might be using the shopping kiosk for
[14:13] instance and same comes in from miles
[14:17] away lambda she comes into port OSR
[14:19] and because the date has been
[14:21] synchronized he would come over I need
[14:24] you should be able to see exactly what
[14:25] I'm up to at that moment in time so
[14:27] that'd be really that's really cool
[14:29] advantage that we sort of get for free
[14:33] now the other thing is when we develop
[14:37] when we work with this thing being split
[14:40] up into two parts we've developed a
[14:41] common interface a really simple
[14:43] interface for them to talk to each other
[14:46] now
[14:47] this comes with like two advantages also
[14:49] there the first advantage is that we can
[14:54] use that interface to bring together all
[14:58] these amazing game ideas and all these
[15:01] different systems and all we make them
[15:05] use one common language to talk to the
[15:07] UI because we've got many different game
[15:10] designs many different gameplay
[15:12] programmers speaking many different
[15:14] language working different studios
[15:16] across the world we need a common way
[15:18] that they can all talk to the UI so that
[15:21] can be developed independently and
[15:23] we're not really like coupled tightly
[15:25] which means they would which means you
[15:29] you have to either have the UI guys
[15:31] develop in a bit of the game or have
[15:32] some intimate knowledge of the game I
[15:34] Hugo and O so if you can split them up
[15:41] you can independently develop the game
[15:44] and you can independently develop the UI
[15:47] and have the right people doing the
[15:48] right job now if we have this common
[15:52] interface as well we get this other
[15:54] super cool benefit which is we can
[15:58] develop a new UI solution without
[16:00] breaking anything that we already have
[16:02] we don't have to throw away all the old
[16:03] assets all the legacy assets and start
[16:06] again we can say hey they're all cool as
[16:08] long as they are talking to you so as
[16:10] long as the game is talking to them in
[16:12] this single fashion then we're free to
[16:14] actually make them talk the new UI
[16:17] system can talk to the game in the same
[16:19] fashion they will use the same language
[16:21] so if it opens us up to developing a new
[16:24] UI system then what would we want to do
[16:29] with that to deal with the challenges
[16:32] the other challenges I mentioned earlier
[16:35] well again the answer here is separating
[16:41] these things out is to do with
[16:43] separation if we can develop a UI system
[16:47] with distinct areas and the right people
[16:50] are going to be doing the right job on
[16:52] there they're they're part of the UI so
[16:57] we split it up into the interface now
[16:59] this is the functional part this would
[17:01] say hey this is what we're drawing these
[17:03] are the things that you can interact
[17:05] with don't tell you how that's going to
[17:07] look it just sees the functional part of
[17:08] it so that'd be a very sort of an
[17:11] engineering job to do that then after
[17:14] that we can apply a style to that and
[17:19] that style would want to apply
[17:22] independently from the interface itself
[17:26] and then the third part would be how
[17:28] would that like manifest itself in the
[17:30] world like is it going to be some 2d
[17:33] graphics to the screen like a regular
[17:35] hood like
[17:36] you see on the lens or is it gonna be
[17:38] something drawn to a like a texture to
[17:40] some in the world or could it even
[17:42] manifest itself is like some 3d models
[17:45] and it'd be a hologram or something cool
[17:47] that was not even thought of yet so we
[17:49] we keep that separate and we don't
[17:50] directly couple it with the interface or
[17:53] any of the other part of the UI we do it
[17:55] we do it independently
[17:58] so I'm gonna introduce you to the two
[18:01] things have been writing about writing
[18:03] which going to solve these problems and
[18:05] they're called bindings and building
[18:08] blocks so bindings is well it's not
[18:13] really much to look at I couldn't even
[18:15] give you a cool image of this because it
[18:18] doesn't it's it's a it's a system of
[18:20] communication it's about standardizing
[18:22] the way the game talks the UI and the UI
[18:25] talks of the game but it's super duper
[18:28] useful and the benefits are gonna be
[18:31] really broad but it's really hard to
[18:36] show it as like a cool image because we
[18:40] have this second system which is called
[18:41] building blocks and this is the bit that
[18:43] you you guys will see this is the thing
[18:45] that defines the interface and it's the
[18:48] things that you interact with and it's a
[18:51] system which it uses a set of like a set
[18:57] of what we call widgets and these
[18:59] widgets can be things like text and
[19:01] images and it could be vector graphics
[19:04] and then it can be things are more
[19:07] interactive so like a slider or a tick
[19:10] box or drop-down menu and things like
[19:12] that this is a very common way for you
[19:15] eyes to be made
[19:17] many technologies would use this
[19:20] mechanism is using simple reusable
[19:22] objects to make up the UI that you
[19:24] interact with we don't have these big
[19:26] custom objects that just do one job
[19:29] because you end up writing a custom
[19:30] objects and another custom objects and
[19:32] another custom objects all we do is
[19:34] write a simple object that we can reuse
[19:36] in a flexible way this variant includes
[19:40] our development times and long-term
[19:43] increases our UI
[19:47] the second part of the building blocks
[19:50] is we have independent styling in in a
[19:54] way that's not too dissimilar to how CSS
[19:56] is applied to HTML where you would tag a
[20:00] part of the UI to say let's say we talk
[20:03] about text object a text subjects might
[20:06] be described as title right so maybe the
[20:09] anvil style would say it's going to use
[20:12] this particular Fung and it's going to
[20:14] be left-justified and it's going to be
[20:19] bold or something like that and then
[20:20] maybe an RSI we want it to be a bit more
[20:23] subtle and it would not be bold and
[20:25] maybe use a light of fun and maybe a
[20:27] different color and things like that so
[20:28] it's independent of defining the
[20:30] interface but it's and it can be applied
[20:33] for a different manufacturer or whatever
[20:36] use case we have and at the end we have
[20:40] this decoupled rendering so we have this
[20:41] the first part the render that we've
[20:44] made is the one that we use for all the
[20:46] other things so it's kind of a
[20:48] straightforward 2d renderer it renders
[20:50] texts and vector graphics and bitmap
[20:54] images and things like that's pretty
[20:55] straightforward book we've been doing
[20:57] some experiments one that experiments
[21:01] actually we've actually got it working
[21:03] for a particular new feature where the
[21:05] UI is actually manifesting itself as a
[21:08] series of light gateways that you fly
[21:10] fly your ship through and it's odd
[21:12] because it's as far as the interface is
[21:15] concerned you'll join a list but
[21:17] actually it's a list of gateways rather
[21:19] than a list of text that you might see
[21:21] in an inventory in a shop or something
[21:23] like that so that's pretty cool it's
[21:24] just a way of interpreting data so this
[21:29] is my drinking break so
[21:36] we're going to go through the steps we
[21:40] go through actually making a UI which is
[21:44] our pipeline which is broken down to
[21:49] roughly four distinct areas as you can
[21:53] see here and the first stage is the
[21:55] design stage oh oh yes this anyone
[22:02] familiar with this so a lot of a lot of
[22:08] the UI we know we're not happy with and
[22:10] I expect some of you guys might not be
[22:12] happy with - so we when our first
[22:16] targets was the elevator panels so I
[22:19] want to use the elevator panel as an
[22:22] example for this this part of the talk
[22:25] because it's does a really good job of
[22:27] telling us about the key features a UI
[22:29] needs to demonstrate which is it it
[22:33] shows it displays things to you it has
[22:38] it could have a dynamic list like this
[22:40] guy has here also it performs some
[22:43] interactions so actually what we started
[22:45] looking at was the new elevator panel
[22:48] which is like a pool touchpad thing
[22:52] right oh thank you you really hate the
[22:59] earth that much we're not sure we don't
[23:03] want to go to back to this okay right so
[23:06] yeah it's demonstrating some great
[23:08] features that we have - we have to solve
[23:10] with UI here which is we're displaying
[23:14] some text we display in a list a dynamic
[23:16] list so when when the UI is constructed
[23:19] it doesn't really know how many floors
[23:21] or is or anything like that it's just a
[23:23] list so maybe if this this one I don't
[23:27] know does this one scroll if we add more
[23:29] things to it then yes there does I'm
[23:31] fantastic right so it's tough about this
[23:34] I don't know about which is cool but
[23:37] yeah this could have two items it could
[23:39] have 20 items but the UI needs to deal
[23:41] with these this so we start off when we
[23:46] we were looking at the elevator panel we
[23:48] got a paper design
[23:50] the seats not on paper it's on your
[23:52] intranet our local intranet and this is
[23:55] a paper design that my friend and
[23:58] colleague done trophy made for the
[24:01] interior of the the elevator interior
[24:04] panel now an elevator panel is something
[24:08] we're all pretty familiar with uh
[24:10] suspect most people have used an
[24:12] elevator at some point and it seems a
[24:16] bit like overkill to write a paper
[24:19] design about it but this is really
[24:21] important it's really important to get
[24:22] down the exact functionality of what
[24:26] we're expecting to see what you can do
[24:28] in there you know and what what are
[24:31] going to be displayed at any given time
[24:33] so gonna is there going to be an
[24:34] indicator to say whether the doors are
[24:36] open or not or is it enough to just look
[24:38] at the door are we going to have a
[24:40] button that can open the doors things
[24:43] like that so it's really important
[24:44] because each one of those decisions that
[24:47] are made at a design stage has a real
[24:49] big impact when both the gameplay
[24:52] designer is actually right in the system
[24:54] to do the elevator but also when we come
[24:58] to do the UI design as well so these
[25:02] these become a bit of a Bible for us and
[25:05] like something less familiar dunt
[25:08] roofing also did the design for the ship
[25:12] mining hood that you see in the
[25:14] prospector and now that's obviously less
[25:16] familiar I've never actually seen a
[25:18] spaceship mining code before I'd seen
[25:20] the design so it was really cool too so
[25:23] it's right or works like this the
[25:24] gameplay works like this and because the
[25:26] gameplay works like this we need to tell
[25:28] people about this and this and this give
[25:30] them warnings when this happens and then
[25:32] tell them how much this thing is
[25:34] happening and then tell them when this
[25:36] is full and flashlights on so it's it's
[25:39] concise and it's really important to get
[25:42] this because small decisions that change
[25:45] along the way can really impact the
[25:47] amount of time it takes to develop so
[25:49] impacts of costs it takes to develop but
[25:51] it also means we might not end up
[25:54] releasing it at the right time or worse
[25:57] we end up releasing something it's not
[25:59] quite so design so
[26:02] once we've got the paper design we do a
[26:05] breakdown now this this doesn't mean a
[26:09] programmer has a breakdown when they see
[26:10] the design although I did do the mining
[26:15] could and that made me cry a little but
[26:18] what I mean by this is we break down
[26:22] exactly what you need to know so what is
[26:25] this UI panel gonna display so here
[26:29] we've got like a list of floors and the
[26:31] current floor and then we've also got
[26:33] the status of the door and also we break
[26:37] down what can you actually interact with
[26:39] so we list out what can you do and on a
[26:42] simple elevator panel is you can request
[26:45] stops and you can open the door so as
[26:50] far as far as like a game engineer would
[26:53] be concerned this this is sort of like
[26:54] how how they would list that out so
[26:57] we've got a list of the current floor
[27:00] which you get and when we have the date
[27:02] that's zero here I want the total number
[27:04] of floors the travel direction so we
[27:08] could be going stationary or we could go
[27:10] in a positive direction or negative
[27:12] direction
[27:13] that's programmer talk for up and down
[27:16] we've got the door status which could be
[27:18] open and closed but it could also be
[27:20] opening and closing so this could have a
[27:23] number of different states could it be
[27:25] jammed you know so there's a bunch of
[27:27] statuses at the door could be in and
[27:29] then finally we have this like dynamic
[27:31] list depending on the location that the
[27:33] elevators up this particular example has
[27:37] got three floors in the list so we've
[27:40] got the floor each each element in this
[27:43] in this list has got a name whether the
[27:46] stocks been requested and then an
[27:49] interaction point a way of calling back
[27:51] the game to say please can you request
[27:53] this stop so that's for each floor so
[27:56] even with simple thing like an elevator
[27:58] panel you can see how it sort of quickly
[28:00] grows into something complicated but we
[28:03] try and sort boil it down into something
[28:05] simple so how do we get the game to
[28:10] actually see this information that the
[28:13] gameplay
[28:15] system has very deep down in it
[28:18] somewhere we want to expose it in a way
[28:20] that the UI can see it so this is how it
[28:23] looks to the bite when it's registered
[28:25] with the binding system we've got the
[28:28] same same day over I had on the previous
[28:29] panel but this is how it looks -
[28:32] essentially how it looks to the game and
[28:34] this is this this is like it looks like
[28:37] a series of web URLs anyone see those
[28:39] and that's kind of not really a
[28:42] coincidence these are the addresses of
[28:44] where this information is held so we've
[28:47] got on the left there we've got the type
[28:51] of variable it is and then on the right
[28:52] the value of that variable so this is
[28:55] what the UI can see now this is still
[28:58] we're still on the game side here right
[29:00] this is what the game is exposing for
[29:04] the UI to use but it doesn't know if the
[29:06] UI is there and not this could be an
[29:08] elevator that's on the other side of the
[29:09] universe or well probably not because
[29:12] object contain a stream we'll get rid of
[29:13] that but it was it could be somewhere
[29:15] quite far away that there's no actual UI
[29:17] for so it's only when you walk up to
[29:20] this elevator panel and the UI goes pop
[29:22] into place that it can reconstruct all
[29:24] the things it needs to know from this
[29:26] information that the game has described
[29:28] for it so that's that's how we get there
[29:31] so this is actual image from in game
[29:35] when we would develop in the elevator
[29:37] panel now this shows the bindings we
[29:41] have a little debug thing and it can
[29:42] show all the bindings and then all the
[29:44] others color coding these are all the
[29:47] different variable types so we've got
[29:48] like boolean types which can be true or
[29:51] false or we've got integer types which
[29:54] are like numbers and stuff and then you
[29:56] can see on the right that this this is
[29:59] an image of well it's not actually an
[30:02] image this is actually the working panel
[30:04] which is taken that information and
[30:06] display in it so we have these the taxis
[30:10] going into the text objects and where it
[30:12] says I think it says current floor
[30:14] somewhere current stock name sub deck
[30:17] there you go so it says current floor on
[30:19] the the panel but it's actually says
[30:22] current stock name now the reason why it
[30:24] says transit display and destinations
[30:27] are not floor and elevate
[30:29] is because we actually use the transit
[30:31] system which is a more generic system
[30:34] for for the elevators the transit system
[30:37] is actually used for things like the
[30:41] subway system and things like that so
[30:43] it's it's a generic system which we
[30:45] won't we use it to move move people
[30:48] around right so that's the same for
[30:50] subway car as it is for an elevator so
[30:53] we're obviously wanting to you reuse
[30:55] this these systems we don't want to
[30:58] write an elevator system and then a
[30:59] subway system we want to use a generic
[31:01] system so with that in mind we've we've
[31:04] got these more generic terms than floors
[31:07] we've got destinations so you know
[31:09] elevator having destination still makes
[31:11] sense that's fine and things like it's
[31:13] called gateway index it's the same thing
[31:16] this is just a more generic term that we
[31:18] can use now this is what we call the
[31:22] white box stage of an implementation now
[31:26] a white box the term is something we've
[31:30] borrowed stolen from the level of design
[31:35] guys because the level design guys will
[31:37] block how a level in a series of white
[31:40] boxes or grey boxes so they can
[31:42] determine whether you know all the
[31:44] scales are right and whether it's going
[31:46] to be cool to play by judging distances
[31:48] and like things look good in the world
[31:50] first sort of like a game play level
[31:52] before the graphics guys come in and
[31:55] make it look like proper and cool
[31:57] because that bits really expensive and
[31:59] then some designer goes hmm
[32:01] let's move the door like three foot to
[32:04] the left and it's go crazy about so we
[32:08] try and get those things so it at the
[32:10] white box level and we we do the same
[32:12] here with the UI that we we check that
[32:15] all these things are kind of working in
[32:17] the way that we want them to we check
[32:20] that the buttons are going to take us to
[32:22] the right floor and maybe we check that
[32:24] we're getting all the information from
[32:27] the game at the right time and these
[32:29] variables are updating at the right time
[32:31] so maybe the current floor or it says
[32:34] current stock name actually switches to
[32:36] the correct current stock name when you
[32:38] reach your destination it doesn't change
[32:40] to that when you start moving and things
[32:42] you we have to work out exactly when
[32:43] this is timed so we do a lot of testing
[32:46] at this point try and just get it all
[32:48] functionally working so the next stage
[32:53] is about style so I'm this is more of a
[32:57] an art thing and I'll gonna hand you
[33:01] over to a friendly neighborhood artist
[33:03] slash designer slash all-around good guy
[33:06] sane right so now that we just kind of
[33:10] seen the white box kind of wireframe
[33:12] version of our UI I kind of want to
[33:15] touch on a little bit about what we've
[33:16] been doing in the tech to sort of
[33:17] facilitate all the unique branding and
[33:20] theming that we have throughout our UI
[33:23] so in our game as you know we have
[33:27] hundreds of uniquely branded
[33:29] manufacturers themes that we need to
[33:33] take into account so think of things
[33:34] like ship manufacturers you know landing
[33:38] zone locations hops right item shops
[33:41] that you go in and buy stuff each of
[33:44] those kind of have to have a you know
[33:46] uniquely themed UI so it actually fits
[33:48] in the world so in order to do this
[33:52] previously what we had to do in flash
[33:54] was we actually have to bacon the entire
[33:56] interface into a single file for each
[33:59] different brand we had to create so in
[34:02] flash all the graphics all the
[34:04] functionality we sort of had to have a
[34:07] file for each different UI for each
[34:10] different sort of brand we had to create
[34:13] so for instance we wanted to if we're
[34:16] building a new location and we needed to
[34:18] add a themed UI to that and that
[34:21] location has things like elevator panels
[34:23] you know transaction information screens
[34:26] you know elevator panels like we're
[34:29] seeing
[34:30] I've just seen previously then you know
[34:33] it's a lot of work because we have to
[34:35] copy the binary file and then create a
[34:38] new one and then go into each one and if
[34:40] we change each individual element to
[34:43] match the style that whatever style out
[34:45] that environments kind of brand or that
[34:48] it has so what we've done in the tag is
[34:51] we actually enabled the ability to have
[34:54] a style sheet that apply
[34:55] to a standard components so how we're
[34:58] sort of changing up the the sort of the
[35:03] way we go about actually doing the
[35:05] visual design so that's kind of like the
[35:07] branding of theming is we actually have
[35:09] a standard set of components and what
[35:11] you see here on the screen is four
[35:14] different style sheets all have kind of
[35:17] like the same type of components to them
[35:18] so we have a standard set like you can
[35:21] see buttons it's actually quite small
[35:23] here but we'll go into actually a live
[35:26] demo later that actually demonstrates
[35:29] this and actually see a changing in real
[35:32] time so what we what we see is a
[35:34] standard set of components that a
[35:37] designer can use go in and set up the
[35:40] functionality of the UI and they don't
[35:43] really need to necessarily worry about
[35:44] what kind of brand it is so if they're
[35:47] gonna set up an elevator screen you
[35:49] really only need to do that once because
[35:51] all you're concerned about is okay I
[35:53] need a list I need you know a few
[35:55] buttons some text fields and that's
[35:58] gonna change this way in that way and
[36:01] whatever at that point whatever context
[36:04] is going to be applied to whether that's
[36:07] gonna be in Microtech you know kind of a
[36:10] high-tech environment or maybe somewhere
[36:12] like Levski use just a little bit more
[36:13] low-tech as long as we have a style
[36:16] sheet defined for those different brands
[36:18] it automatically applies and we only
[36:20] need to create the UI once rather than
[36:23] you know however many landing zone
[36:26] locations there are ship manufacturers
[36:28] or whatever so we'll have to see the
[36:33] kind of white box version that we've
[36:34] seen this kind of this is something that
[36:36] the designer like any anyone in
[36:38] internally can use to kind of you know
[36:40] there's no fluff to it so there's kind
[36:43] of no visual distractions mainly focus
[36:45] on functionality to the right and that
[36:47] is pretty much the same thing so just
[36:49] kind of what a dark theme and then we
[36:52] have the Microtech theme that we've
[36:54] designed that you saw in the demo and
[36:57] then in a theme for anvil aerospace so
[37:01] they're all applying their themes to
[37:05] things you know standard components so
[37:07] we have like checkboxes
[37:09] text input fields and by the way this is
[37:11] like you know a small fraction of what
[37:13] actually it would be but you know it's
[37:15] just kind of for for this the purposes
[37:18] of this presentation kind of kept it
[37:20] simple so we could actually fit you know
[37:22] fit it on the on the slide there so just
[37:25] kind of break this down a little bit so
[37:28] I'm just gonna demonstrate like the
[37:29] application of one of the style sheets
[37:32] to the elevator panel so you can see is
[37:34] here's just simply the background white
[37:36] right it's white so you apply that white
[37:39] backgrounds of the elevator then we have
[37:42] these kind of separators and borders
[37:45] that we put in so you know it's pointing
[37:47] to where it's used in the elevator UI
[37:51] then we have the buttons so you know you
[37:54] have hover States you have the selected
[37:57] state for which floor you've selected
[37:59] and finally just kind of like
[38:02] miscellaneous icons and greebles and
[38:05] things like that so once that's applied
[38:08] we can start we can see the actual skins
[38:12] you know that we've defined for the
[38:15] style sheet to start applying to the UI
[38:16] so that's all the same UI but totally
[38:21] different themes based on you know the
[38:24] style sheet so that allows us to source
[38:27] scale our efforts on the UI side of
[38:31] things and you know it's it's we can
[38:35] start to you know quickly do UI and get
[38:39] it get things into your hands much
[38:40] faster so once we have that in place
[38:43] then really it's kind of about testing
[38:46] so I'll hand you back over to bone to
[38:47] talk about that thank you saying it's
[38:51] great so yeah
[39:02] so the final stage of making the UI that
[39:07] we get in game is the testing and
[39:10] iteration stage so here we have what we
[39:14] hope is our final in-game version with a
[39:18] lovely micro textile design by Zayn I
[39:22] said we switched out from our white box
[39:25] level at this point and now we've got
[39:26] something working and is correct so we
[39:30] have to test this in all these different
[39:32] ways so we got to test whether the
[39:34] buttons are going to select the floors
[39:36] correctly we've got to test whether
[39:39] pressing the door open button opens the
[39:43] door and also make sure it doesn't open
[39:45] the door when the things move in so
[39:47] people doesn't let people get out at the
[39:49] wrong time we also test in tension
[39:55] different locations we'll testing all
[39:57] these different locations because the
[39:58] day it would be different so there be
[40:00] different floors so some as I said
[40:02] earlier we might have some with two
[40:04] floors and some ways like 20 floors and
[40:07] in fact in the demo I was watching
[40:09] earlier there was exactly this example
[40:11] there was some with two floors and
[40:12] there's some more flaws we also later
[40:17] down the line we'll be testing with
[40:18] different localization different
[40:20] languages now this this means we'd have
[40:24] to test in things like French and German
[40:27] I don't know if it's any German people
[40:28] here today but the German languages
[40:32] brings out UI designers in cold sweats
[40:35] because because the length of the words
[40:40] can change quite drastically I don't
[40:42] know if anyone will translate what we've
[40:44] got there but you can imagine that some
[40:46] times that these words just grow in a
[40:50] way that maybe doesn't make the UI look
[40:54] quite as neat as we've got here so
[40:56] sometimes we are there at the
[40:57] retranslate or we have to have a
[40:59] flexible UI that can handle these long
[41:01] words and maybe work out if they can get
[41:04] split up and things like that so and
[41:07] also at this stage we are at the
[41:10] iteration stage this
[41:11] this is where we can make changes and we
[41:14] actually made changes to this particular
[41:17] panel now I don't know if anyone can
[41:21] spot what we thought was wrong with it
[41:24] anyone know it's the numbers numbers
[41:29] Thank You Zayn so the numbers the index
[41:31] is on the left go zero one two three
[41:36] which is really odd because if you get
[41:39] in a lift that's not what happens you're
[41:41] getting a lift you're on the ground
[41:42] floor and because the way buildings mate
[41:46] you get over the are well we've made a
[41:47] first floor that made a second floor
[41:49] made a third floor so that's the way no
[41:52] it's natural that you make a numbering
[41:54] system work that way but it's natural
[41:56] for the designers when they were drawing
[41:58] this out well drawing like where the
[42:00] gateways are that they would go one two
[42:03] three four cuz they you know that's kind
[42:05] of how you write so you go top down so
[42:08] we actually had an option to flip them
[42:10] around like this so now we're looking
[42:14] like a bit more comfortable with how
[42:16] this looks now
[42:18] the second part of this was a bit of an
[42:21] argument between me and Zayn the I don't
[42:26] know if any we probably non British
[42:28] people here would notice that we don't
[42:33] start the first floor with zero Zayn
[42:37] insisted and because he's American you
[42:40] might have guessed there they start
[42:43] their numbering system on the first
[42:44] floor so Zane won this argument and
[42:47] shifted it down so I'm fine with that
[42:51] he's a bit more buff than I don't pick
[42:55] on him but interestingly sorry so rank
[42:59] okay we'll go back they go saying you
[43:02] lose however I was told by the ship guys
[43:11] that they start their numbering from one
[43:14] also because they don't have a ground
[43:16] floor who knew right so I was told this
[43:19] today so that's pretty that might save I
[43:22] was arguing about this in the office
[43:24] too much but yeah we have to put in
[43:26] these options and these are the things
[43:28] that you sort of find out they're not
[43:29] necessarily natural straight away when
[43:32] you making stuff there there are things
[43:34] that come out when you know this wasn't
[43:36] on Dan's original design in fact Dan's
[43:39] original design didn't have floor
[43:40] indexes it just said these are places
[43:42] you can go so this was something that we
[43:46] added and then it causes problems so
[43:48] there you go probably shoulda listened
[43:49] to Dan so how did we get here so we made
[43:54] a binding system that helps the game
[43:59] touch the UI in a standardized way this
[44:02] really helps us with development and
[44:03] anything that helps us with development
[44:05] helps us prove these iteration times and
[44:07] anyone that's used our UI probably as
[44:11] notice that we're lacking a bit any
[44:13] iteration times they bit can sometimes
[44:15] feel a bit clunky so we want to speed up
[44:18] our process and so we can make better
[44:20] UI's and make better game for everyone
[44:24] we've used building blocks for the
[44:26] interface and if that also has this
[44:28] independent styling and we've left
[44:32] ourselves in a great position to expand
[44:36] the renderer see we've decoupled the
[44:38] renderer so we can have these cool
[44:41] holographic displays instants and really
[44:43] interesting and exciting images really
[44:47] excites Chris book strikes the fear of
[44:49] God into me for and from a technical
[44:51] level
[44:52] so now as Zane alluded to we're going to
[44:59] attempt to do a bit of a live demo of
[45:01] this we're actually going to stream the
[45:02] game live people saying never work with
[45:05] children and animals live TV might add a
[45:09] live demos to this so if it's possible
[45:12] could you oh if it's possible can you do
[45:15] that that's brilliant thank you so but
[45:17] to using so I'm not actually sure how
[45:19] much time we have so we do this a little
[45:22] faster than planned so what I have open
[45:25] here is live feed of the editor and a
[45:29] one of our style sheets so this applies
[45:31] to anvil and hopefully no fires
[45:36] so just to kind of give you an idea of
[45:41] kind of how easy it is to sort of edit
[45:44] some of the stuff so we have let's say
[45:46] if we want to edit one of the properties
[45:49] of the button so we have like this is
[45:50] chamfered corner
[45:51] and left border and we can edit that
[45:56] through our style sheet quite easily so
[45:59] you know we can change one of these
[46:01] properties to be a different number and
[46:03] we see the update and in real time and
[46:06] generally we will have this editor open
[46:10] on a different screen so we can see you
[46:14] know we have a lot more real estate to
[46:16] work with this is actually a bit of a
[46:21] internal data editor that we're using
[46:24] internally but what we're but it's
[46:28] basically adding the raw data of the
[46:29] system so what we're meant to do
[46:32] eventually is actually have a layer on
[46:35] top of the system that we built to make
[46:39] it much easier for the people internally
[46:42] to work with so you can notice it's a
[46:45] little bit of crude interface where we
[46:46] have these sections that we have to open
[46:51] up and so forth but you know later down
[46:54] the line probably be some kind of markup
[46:55] language that you type in and update in
[46:58] real time so for instance if we want to
[47:02] add a button I'll just do that quickly
[47:04] now I already kind of have it set up
[47:06] like if we wanted to add like a closed
[47:08] closed door button if you want to shut
[47:11] people out and that's the feature of the
[47:13] try adding you know we can add a button
[47:15] there it doesn't have an icon because
[47:17] yeah the troll button which I've
[47:20] purposely made a little bit slightly
[47:21] bigger but we add something like that
[47:26] and we hook up all the bindings and if
[47:29] the skin changes see if the context
[47:31] changes to like for instance another
[47:33] ship or a different environment it's
[47:38] still there its branded differently so
[47:40] it's kind of an example of you know
[47:44] adding something to the UI but you know
[47:47] if we have different you know
[47:49] factures it's spread all throughout the
[47:52] whole universe we only need to edit it
[47:56] once so it makes our lives a lot easier
[48:00] by using style sheets and actually
[48:02] separating the structure from the
[48:04] visuals and presentation so I'm getting
[48:09] I think we're getting the key for
[48:11] wrapping up yeah okay well if we can
[48:14] just send that to the presentation
[48:16] please maybe I just chatted a bit too
[48:22] much about my stuff
[48:23] cut your shot they're saying so the
[48:27] future of the UI tech we are like we're
[48:30] by no means done but thankfully you guys
[48:33] should start seeing the benefit of this
[48:35] and like the real benefit is we get
[48:38] better tools and putting people in the
[48:41] right place to do the right job so we've
[48:44] got the game game engineers making the
[48:47] game code ready for the UI we've got the
[48:49] UI engineers hooking these things up
[48:52] making the interface and we've got our
[48:54] great and talented artists making these
[48:57] styles that we can apply to the UI so
[49:00] we're currently in a conversion process
[49:02] a lot of this stuff we've there's plenty
[49:04] of stuff using the UI this new UI system
[49:07] in game but we're still using some
[49:08] legacy assets some of the things using
[49:13] building blocks in game are some of the
[49:16] backs of the weapons obviously the
[49:18] elevator panel that we talked about the
[49:21] transit system that's that was the first
[49:23] thing that was the first thing we tried
[49:24] out I think that we showed that in a
[49:25] citizencon
[49:26] a while back that was like our first
[49:29] test case hey let's do some scrolling
[49:32] text and it's a very low-tech version of
[49:36] what we're where we were going but it
[49:37] was a good test because every one every
[49:40] every client was seen the same thing at
[49:42] this point so we're in the middle of a
[49:44] converting so a lot of the systems have
[49:47] been converted to use bindings so then
[49:49] we can sort of choose when and when
[49:51] where where and when we swap out these
[49:53] things and I actually we're in situation
[49:56] with the vehicles vehicles are all using
[49:58] bindings now we're still using legacy
[50:00] assets apart from one via
[50:02] which is the Gladius and the Gladius
[50:05] head-up display is actually using
[50:07] building blocks so that's really cool
[50:08] that we were with mixing a match in
[50:10] these two different systems without
[50:12] saying hey either the entire Gladius is
[50:15] broken or hey all ships are broken you
[50:17] know that's just not acceptable even I
[50:20] wouldn't be in a job for much longer if
[50:22] I said that so we're gonna gonna do a
[50:26] lot more work on the resource management
[50:27] so we don't have to much we can lower
[50:31] the overhead and we can have more you
[50:33] eyes in and we're going to develop the
[50:37] tools a lot more like Zane was saying
[50:39] away from what we saw on screen net or
[50:42] something a lot more user friendly a lot
[50:43] more well artis friendly artist who uses
[50:46] as well but a lot more user friendly for
[50:49] them to develop these Styles quickly and
[50:51] for all these different manufactures
[50:53] that we talked about and the future
[50:56] really is we're going to do more these
[50:58] renderers who've chris is really really
[50:59] keen on seen three duis and really
[51:02] Futuristics you Isaac so he's really
[51:05] excited by that so he so yes this this
[51:12] is the end how much time we got about
[51:15] five minutes yeah five minutes okay well
[51:19] if anyone's got any questions about the
[51:22] new UI tech I might not be able to help
[51:25] you about implementation things but
[51:28] certainly hope we xenon myself can see
[51:31] about the new new UI tech
[51:37] [Applause]
[51:45] thank you
[51:47] do you have you set testing here sorry
[51:50] oh hello hello hi so you spoke of
[51:53] testing do you have some kind of
[51:54] automatic testing for the implementation
[51:57] in like different variations because you
[51:59] said you have to test in different
[52:01] locations and with different options and
[52:03] that should be all covered through like
[52:06] an algorithm ISO specifically for you I
[52:09] know the graphics team do have a
[52:11] ultimate we do have automated testing
[52:13] first us assume we have manual testing
[52:17] ie we have a lot of QA guys also doing
[52:19] this stuff because there's no way of me
[52:21] knowing when when or you know if a
[52:23] gameplay engineer knows how it's going
[52:25] to be used in future so you're right we
[52:27] just don't know about all these
[52:29] scenarios we don't actually have
[52:30] automated testing per se about for the
[52:35] UI but for the graphics team day they
[52:38] have a thing so they run through it runs
[52:41] through a series of checks and checks
[52:43] that that the graphics of not
[52:46] essentially broken when they make a
[52:47] major change it takes a lot of images
[52:49] and compares the images with previous
[52:50] images so we could definitely set that
[52:53] this same scripting thing got to to go
[52:56] through all the locations wouldn't know
[52:57] because we know where all these you eyes
[52:58] are because because they are there so we
[53:01] can actually set up a camera we could we
[53:02] could run a script run the game move the
[53:05] camera take a picture and and sort of go
[53:07] through and see you know how's this look
[53:09] we Microtech in german on this spaceship
[53:11] or whatever with this data so I think we
[53:14] could definitely set up yeah I'm a
[53:18] visual display side of things we
[53:20] actually have like a level at
[53:21] development layer in the editor fau
[53:24] where we actually have layouts all a
[53:26] bunch of different elements configured
[53:28] in pretty much every way we can imagine
[53:30] and you have to make sure that all
[53:32] that's looking right because if we're
[53:33] working on the text sometimes that
[53:35] breaks yeah hi hi are you responsible of
[53:40] the design you applied to the assets or
[53:42] is it as a team I'm in a design specific
[53:46] team which give you instructions to
[53:49] follow to design the Z assets
[53:53] from from a gameplay perspective no well
[53:57] me personally none I work on the
[54:00] technology for people on the gameplay
[54:02] team to implement a design so we have
[54:06] dedicated these systems designers like
[54:09] dan roofing who will design did the
[54:12] paper design that we've seen the
[54:13] presentation he he comes up with like
[54:15] these gameplay ideas and write small
[54:17] done in a very specific way then we have
[54:19] a specific they get assigned out to the
[54:22] gameplay engineering teams which why I
[54:23] sort of call these guys on the game team
[54:26] other than the UI team so they would
[54:28] they would they would implement that and
[54:31] also expose the bindings ready for the
[54:33] UI guys who immediately use yeah and
[54:39] then it's then there's a job of the
[54:41] graphic designers who's so all this
[54:42] separation I talked about is like
[54:44] keeping people doing what they do best
[54:46] in the past we were a bit coupled
[54:49] together like we would have we would we
[54:51] would try and hire people that could do
[54:53] like five different jobs and apart from
[54:55] Zayn it seems to be able to do
[54:57] everything's kind of kind of irritating
[54:59] and actually I can only program you so
[55:02] my drawing but yeah yeah so if we can
[55:06] keep them separate we keep the keep keep
[55:09] these guys apart that capes keeps a
[55:11] really good workflow we've talked a lot
[55:17] about how the data interfaces with the
[55:21] design team how much of that design is
[55:24] influenced by how we interact with the
[55:27] objects specifically I'm thinking about
[55:29] ship MFDs
[55:30] because I without something like game
[55:32] glass or something there are quite
[55:34] cumbersome right now to go and
[55:35] point-and-click and yes into their
[55:39] massively emphasis and we were sort of
[55:42] acutely aware of seems like already a
[55:46] lot where we listen to community a lot
[55:49] what we didn't have is the ability to
[55:51] iterate on these and these issues like I
[55:55] could give you a huge list of things I
[55:58] want to change but but my remit was more
[56:04] from Chris like make this easy to do
[56:07] so we can change it quicker and we can
[56:09] get lots of people to change quicker we
[56:12] use of it like a dedicated UI team and
[56:14] they would just absolutely swamped with
[56:16] stuff and they just can get through the
[56:18] work quick enough and what we want to do
[56:20] is spread the workload and so we I make
[56:23] it eat much much much much easier for
[56:26] everyone to do so I'm hoping now this is
[56:31] I mean it it's really satisfying to see
[56:33] this come actually coming off now and
[56:36] it's all working and we're actually
[56:38] seeing the results a lot better what we
[56:42] haven't done right this moment is we
[56:45] still got the vehicle UI to do but we've
[56:49] listened a lot to the community and
[56:51] we've done a like massive design changes
[56:54] of exactly well how that's going to work
[56:55] so and how it's going to be displayed
[56:57] it's like a lot of the time people lose
[57:01] frustration with the UI is sometimes a
[57:04] UI is broken that's fair enough that's
[57:05] kind of my fault and sometimes actually
[57:09] the game doesn't kind of work the way it
[57:13] should it doesn't talk to the UI
[57:15] properly so we're trying to solve that
[57:17] problem and sometimes the design just
[57:20] isn't fun I won't get there and like if
[57:23] we can't change that you know oh god
[57:25] well it took us six months to get here
[57:27] you're just gonna have to put up with it
[57:29] that's that's no good is it we need to
[57:31] be able to think quickly on our feet and
[57:34] go right we tried it wasn't that much
[57:36] fun but if we just move this and change
[57:38] that then actually this is gonna make it
[57:40] a lot better so I'm hoping that's we're
[57:43] going to improve things okay and we seem
[57:49] to be a bit pushed of time today and I
[57:50] did ramble on a bit so thanks a lot for
[57:53] listening and xixo coming I hope you
[57:55] have a great day
[57:56] [Applause]

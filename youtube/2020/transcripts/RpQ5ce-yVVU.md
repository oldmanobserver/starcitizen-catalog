# Star Citizen Live: Effective Visuals

**Video:** https://www.youtube.com/watch?v=RpQ5ce-yVVU
**Date:** 2020-08-14
**Duration:** 1:04:18

## Transcript

[00:04] hi everybody
[00:05] welcome to another episode of star
[00:07] citizen live
[00:08] uh affecting visuals i'm your host jared
[00:11] huckabee
[00:12] and if you've never seen star citizen
[00:13] live before it's where we take an hour
[00:14] out of our week and
[00:16] bring some developers onto the show and
[00:18] we we take questions from
[00:19] the star citizen community and pose them
[00:21] directly to the developers
[00:22] usually over some manner of video
[00:24] conferencing especially in our new work
[00:26] from home era today
[00:28] we have three members from our esteemed
[00:30] visual effects team on the show let's go
[00:32] ahead and introduce them
[00:33] see who we're talking to today um we
[00:35] will start
[00:36] we'll just go clockwise from the top leo
[00:40] tell us who you are and what you do for
[00:41] star citizen
[00:43] hi i'm leo i'm a vfx programmer
[00:46] so i work in the vfx team i help
[00:50] the vfx team with like producing tools
[00:54] and implementing systems that will drive
[00:57] vfx um in the game
[01:01] i'm mainly focused on on the gameplay
[01:03] side of
[01:05] vfx so when certain effects
[01:08] should trigger how uh
[01:11] like different systems try to trigger
[01:15] vfx i provide tools to other programmers
[01:17] to
[01:19] add vfx themselves to their uh systems
[01:22] and so on so let's uh what are some
[01:25] shorts what are some of the things that
[01:27] you've worked on personally uh
[01:29] uh for for for starter season so folks
[01:31] can uh
[01:33] know what you've touched what what to
[01:34] ask um i've
[01:36] worked a lot with uh ship vfx so
[01:40] thrusters uh atmospheric gantry trails
[01:44] like wing chip for dishes and contrails
[01:47] um i've done some work on the weather
[01:50] like all the wind implementations
[01:54] that's something i've been working on
[01:56] and
[01:57] recently i've been working on fire um
[02:00] which is in very early stages but yeah
[02:03] it's an ongoing project yeah we've
[02:06] really enjoyed
[02:07] following along with your with the
[02:08] process of it in our in our sprint
[02:10] reports it's been a big hit among the
[02:11] community
[02:12] so i think we're all very excited about
[02:15] the possibilities
[02:16] of fire down the line uh moving
[02:18] immediately clockwise from
[02:20] leo mike uh you probably need no
[02:22] introduction at this point but we're
[02:23] going to do it anyway
[02:24] who are you what do you do for star
[02:26] citizen i'm mike
[02:28] and i'm the vfx director so i i direct
[02:31] and run the vfx team got to see don't do
[02:34] that
[02:36] not really no i'll leave it to these
[02:38] guys
[02:39] right and uh you already know who i am
[02:43] so we'll continue on
[02:44] clockwise uh uh tio who are you and what
[02:48] do you do for star citizen hi
[02:50] i'm teo and i uh do visual effects on
[02:54] visual effects artists i
[02:57] generally create particle systems and
[03:00] textures
[03:02] and work with the tools that leo and the
[03:04] rest of the programmers
[03:05] provide to populate the world
[03:08] and make things like impacts
[03:12] uh recently iworks worked on the
[03:15] atmospheric entry effects um
[03:18] and yeah environments
[03:22] clouds smoke smoke fence all that kind
[03:24] of stuff
[03:25] cool well this week's show is a
[03:28] generalized question and answer show
[03:30] about vfx
[03:32] so we will be taking questions live from
[03:34] the twitch chat during the show you can
[03:36] submit your questions for consideration
[03:38] by posting them with the word question
[03:40] in capital letters surrounded by
[03:41] brackets
[03:42] that'll help our community management
[03:43] team pull them out from all the other
[03:45] chat and send them
[03:46] on to me we also as usual put up a
[03:48] thread earlier in the week
[03:49] where we allowed folks to post questions
[03:52] in spectrum
[03:53] and vote up which ones they wanted to
[03:54] see answered most so we'll go ahead and
[03:56] start with those
[03:57] just a general reminder that these are
[03:58] the visual effects teams
[04:00] so while there are certainly some
[04:01] gameplay elements related to it like
[04:04] leo said it's like this in general
[04:07] if you're if the question is how do you
[04:09] create
[04:10] weather we're on board if the question
[04:12] is how will weather affect my spaceship
[04:15] when i do this
[04:16] that's the realm of designers and stuff
[04:18] like that so so
[04:19] again just as we're cultivating
[04:22] questions you want to try to stick to
[04:23] the actual
[04:24] effect itself and the creation of the
[04:26] effects that you've seen throughout
[04:28] star citizen uh so right off the bat
[04:31] the number one most voted question we
[04:33] just we always start with with the
[04:34] number one right off the bat
[04:35] uh mike uh lots of people want to know
[04:38] how the work
[04:39] on the new shield vfx are going uh we've
[04:42] been talking on and off about new shield
[04:44] effects for for some time now it's been
[04:47] progressing steadily really it's going
[04:49] well i would say
[04:51] we've recently i guess come to the end
[04:53] of our what we call the pre-production
[04:55] side of it there's been a lot of we've
[04:57] recently started to invest more time
[04:59] in in concept in these kind of effects
[05:02] where there's not really any real world
[05:04] reference
[05:05] so yeah we we've got a guy in our team
[05:08] who who does the concepts
[05:09] vfx and and it's fantastic to have that
[05:11] so
[05:12] that that side of it's done we've had uh
[05:14] we've had simon our lead vfx programmer
[05:17] working closely with caleb our principal
[05:19] vfx artist on the pre-production so
[05:21] actual in-engine
[05:23] uh code side of things shaders looking
[05:25] at the the kind of graphics options
[05:26] we've got
[05:27] um kind of slightly wackier ideas as
[05:30] well stuff that's not necessarily in the
[05:32] concepts the
[05:33] the kind of just ideas that come when
[05:35] you when you see this kind of thing
[05:37] so yeah i mean i say we're i would say
[05:40] we're pretty much
[05:40] close to wrapping up the pre-production
[05:42] which means that we're going straight
[05:43] into the production phase which is what
[05:45] people care about because that
[05:46] that's where we actually start to make
[05:47] the effects a reality and put them into
[05:49] the game
[05:50] um so yeah going well now
[05:53] the pre-pre-production phases often vary
[05:57] in length some some pre-production
[05:58] phases are only a week or two
[06:00] you hit something real fast and some
[06:02] pre-production phases take quite a bit
[06:03] of time like this one has
[06:05] uh was some of that due to waiting for
[06:07] various sdf tech coming online
[06:10] yeah very much so so we we knew from
[06:12] quite an early stage really i know that
[06:14] the backers
[06:15] have been aware of this for a long time
[06:16] that the the sdf the signed distance
[06:18] field
[06:18] we knew that we were going to be using
[06:20] them to to generate these effects and to
[06:23] have the effects kind of driven by the
[06:24] sdfs
[06:26] so we knew there was a lot of work that
[06:27] was upstream we sort of used
[06:29] terms upstream and downstream we're one
[06:31] of those teams that are downstream from
[06:32] other teams
[06:33] so we knew there was a lot of work that
[06:34] was going on with the vehicle teams
[06:36] and the physics teams that that was
[06:38] necessary in order for these sdfs to
[06:40] become a reality
[06:41] um so yeah that was that was a large
[06:43] part of it that that was
[06:45] not really why anything was delayed but
[06:46] that was what we needed to be able to
[06:48] to have in for us to do our thing as
[06:50] well um
[06:51] so yeah yeah okay uh
[06:56] so the next quest the the next most
[06:58] popular question uh
[06:59] had to do with planetary clouds so uh my
[07:02] question for i'm going to rephrase it
[07:04] first before we go into it
[07:05] are planetary clouds a vfx thing at all
[07:08] at all
[07:10] no well the the actual gen creation of
[07:13] the clouds is not our not our domain
[07:16] the work that we do similar to what i've
[07:18] just said with sound distance fields i
[07:19] guess the work that we do will come in
[07:20] when
[07:21] when those clouds the uh the kind of the
[07:24] domain of the the core engineering team
[07:26] really once
[07:27] that side of things is is is there then
[07:30] that's where we come in and we'll start
[07:31] to care about
[07:32] the actual the rain that comes from the
[07:33] clouds the lightning and all them kind
[07:35] of things and and
[07:36] probably like the interaction of the of
[07:38] the of the player
[07:39] within that cloud as well that will
[07:40] probably be something that that
[07:42] certainly leo would
[07:43] would be involved with i think but the
[07:45] actual creation that the the
[07:47] the physical creation of that cloud is
[07:49] is not our domain
[07:50] no gotcha so it it's like like like a
[07:53] like a like
[07:54] like props on a set dressing yeah
[07:56] another team will create the
[07:57] tech that develops everything and then
[07:59] you guys will come in and dress it up
[08:01] and make it look
[08:02] exactly and make it look the way they
[08:03] should all right yeah i mean
[08:05] we're involved in the process like we we
[08:07] collaborate with the people who are
[08:08] actually implementing the tech so like
[08:10] i've got good visibility on on what it
[08:12] is that we're doing for it
[08:13] but yeah we we don't actually make the
[08:15] thing okay
[08:17] well uh i i know it's a i know it's a
[08:19] popular
[08:20] hot button topic with the community as
[08:22] we've seen in multiple question threads
[08:24] so the what i can offer to the community
[08:26] right now is that
[08:27] uh when the appropriate time comes we
[08:30] will have we will have a feature
[08:32] on the creation of planetary clouds and
[08:34] volunteer clouds and a lot of stuff
[08:35] as soon as it's ready at a point that's
[08:37] ready to talk about and
[08:39] show you so i can't tell you when that's
[08:42] going to be it's
[08:43] when it's ready um moving on
[08:47] uh we do have uh we do have a number of
[08:49] weather effects in the game
[08:51] uh today what can you tell us about
[08:54] what's next
[08:57] well yeah i mean so so it kind of does
[08:59] depend on what we've just spoken about
[09:01] with the clouds themselves
[09:02] um we're obviously going to be anything
[09:04] that you imagine
[09:06] would be happening is going to happen so
[09:08] we're going to have rain
[09:10] we need to have that um one thing that
[09:13] i'm more interested in
[09:14] or more excited by is like more
[09:16] localized types of weather so storms
[09:19] tornadoes whirlwinds little dust devils
[09:22] those kind of things
[09:23] lots lots of that's the kind of that's
[09:25] the kind of vfx that
[09:26] that i kind of look forward to because
[09:28] it it's the whole collaboration of the
[09:29] whole team so it's
[09:30] again it's like it's the vfx programmers
[09:33] and it's the gameplay implications and
[09:34] it's the visuals that we have to provide
[09:36] to to show what the game you know show
[09:38] those gameplay implications so the
[09:40] player can see that
[09:41] if they go towards a tornado uh
[09:44] you probably shouldn't do but i'm sure
[09:45] that people you know
[09:47] would enjoy doing that in a game uh to
[09:50] see that like the map the visuals match
[09:52] what is going to happen to the actual
[09:53] ship or the player if they're if they're
[09:55] not in the ship
[09:56] um but yeah like lightning storms as
[09:58] well um snow
[10:00] or just anything you can think of like
[10:01] weather you know if you can think of it
[10:03] as weather then
[10:04] it's a pretty good guess that we're
[10:05] going to be wanting to implement in it
[10:07] in the game
[10:08] when we get the the clowns i think i
[10:09] tweeted at you
[10:11] yesterday the day before that this
[10:12] phenomenon that somebody was
[10:13] photographing the
[10:14] the weird i can't even
[10:20] it was like a jellyfish in the sky if i
[10:21] had seen it i would have thought i was
[10:23] in some kind of stranger things
[10:24] uh moment uh but apparently it's a real
[10:26] thing that happens and i never knew
[10:27] about it so
[10:28] yeah um let's let's move to quantum uh
[10:32] to quantum travel uh we got a lot of
[10:34] questions about
[10:35] uh about the the quantum travel effects
[10:37] specifically um
[10:38] while there are several variations of
[10:40] that like when you fly a
[10:42] at an alien ship you get a slightly
[10:44] different quantum travel effect
[10:45] the core qt effect has kind of been in
[10:48] place for a while now
[10:50] and some of our backers
[10:53] uh indicated in the question thread that
[10:55] uh that maybe it hasn't
[10:57] aged as well as other things have
[10:58] improved or that they're simply
[11:01] tired of seeing the same effect uh for
[11:03] the last uh for
[11:04] the last while is there a possibility
[11:07] for some kind of a dynamic generation in
[11:11] those effects
[11:13] something that can happen where on any
[11:14] given time the effect would change or
[11:17] be different based on how you've tweaked
[11:19] the engine or
[11:20] environmental effects or or basically
[11:23] the quest the
[11:24] all the questions combined into one sort
[11:26] of like what are our thoughts about
[11:28] changing the the standard quantum travel
[11:30] effect
[11:31] and providing some visual breakup for
[11:33] for folks who quantum travel quite a lot
[11:36] yeah so so for sure you kind of nailed
[11:38] it there there's a
[11:39] i think there's a bit of visual fatigue
[11:40] that comes in when when it's one of the
[11:42] earlier effects that people just see a
[11:44] lot
[11:44] like you know i've seen that quantum
[11:46] travel effect a few times myself
[11:48] um and yeah it it we use the term rot
[11:51] like some some things rot over time it's
[11:53] just
[11:53] it's just that the tech the tech that's
[11:55] driving the effects might have changed
[11:56] so certainly with quantum travel
[11:58] there have been fundamental changes to
[12:00] the back end work like what is
[12:01] what is the engine doing with with that
[12:04] actual process of
[12:05] quantum traveling which which does
[12:08] change how the effects are behaving so
[12:10] i won't say they're broken but they
[12:11] definitely don't look like they used to
[12:13] and
[12:13] and um the timings get changed as well
[12:16] so from a design point of view it's
[12:17] really important that
[12:19] um they care about like the spool of
[12:21] time and they care about
[12:23] all those kind of those kind of hooks
[12:25] that we then use to drive the effects
[12:28] so uh i get i guess what i'm saying is
[12:31] we're we're aware that they are due
[12:34] an update and that is that is planned
[12:36] and scheduled and actually
[12:38] our vfx concept art is rob he's i think
[12:40] next week in fact i think that's his
[12:42] next task he's going to be jumping onto
[12:44] uh concept in the the quantum travel
[12:47] we've got some really good
[12:48] we've got some really good information
[12:50] from people like
[12:52] nate nate the squadron 42 art director
[12:54] and hannes the cinematics director
[12:57] so those guys have got a really clear
[12:58] idea of what they want so
[13:00] we're going to use that we're going to
[13:01] we're going to feed that into our
[13:02] concepts
[13:05] to address your point about actual kind
[13:07] of like
[13:08] the diet more dynamic element of it and
[13:10] variables and things changing
[13:11] i think absolutely that that's something
[13:13] that we we always look to do with our
[13:14] effects we
[13:15] i've talked in the past about emitter
[13:17] strength so particles have like a
[13:18] strength curve and that can we can
[13:21] leo can can probably elaborate on this
[13:23] but we can actually use that strength
[13:24] curve to
[13:26] to uh we can map that to other variables
[13:28] so if you're
[13:29] let's just say the quantum drive was
[13:31] getting damaged we could actually
[13:32] visually reflect that we could we could
[13:34] show a much more chaotic looking effect
[13:36] um so yeah there's all kinds of things
[13:38] that we we could do with that and that
[13:40] we we
[13:40] would like to do as well there was also
[13:44] some possibilities of using the sdf tech
[13:46] um
[13:47] when i was exploring the look of the
[13:49] atmo entry
[13:50] i also tried it with
[13:54] what a qt effect might look like and
[13:57] there's
[13:58] a lot of possibilities and a lot of
[14:00] really cool uh
[14:01] dynamic um things we could do with it
[14:04] absolutely yeah
[14:08] okay for for like a tech point of view
[14:11] um
[14:12] it was a while ago like implemented the
[14:15] qt
[14:16] effects and one of the limitations we
[14:19] have
[14:19] right now is that the effects are set up
[14:22] on the ships
[14:22] so if you change your quantum drive
[14:25] this the effects will remain the same
[14:29] one of the things i'd like to do at some
[14:31] point is
[14:32] move that we don't have those
[14:34] limitations anymore so
[14:35] like with a few changes to the system in
[14:38] the back end we could actually
[14:39] implement uh per drive
[14:42] effects rather than per ship effects
[14:44] which i think is also one of the things
[14:46] that
[14:47] people have been mentioning so somebody
[14:50] could take the
[14:51] the quantum drive from like an alien
[14:54] ship
[14:54] like the scout has a very different
[14:56] quantum effect and bring it over to
[14:58] and bring it over to a miss ship or an
[15:00] aegis ship and put it in there and
[15:02] and get the change in effect kind of
[15:03] thing if if design
[15:05] like if the design of those content
[15:07] drives allows that of course
[15:09] yeah yeah that would like yeah something
[15:12] something we'd like to pursue absolutely
[15:15] yeah okay yeah
[15:16] and as you like you mentioned the the
[15:18] different styles as well
[15:19] obviously the most the most common one
[15:21] is the the default as we call it the
[15:23] kind of the blue
[15:24] the streaky blue one but yeah we've
[15:26] we've got different we've
[15:27] got different visual styles for
[15:28] different uh alien
[15:31] races so we can and we've we've always
[15:34] talked about like having high and low
[15:36] tech
[15:36] variables as well so maybe a cheaper
[15:38] drive
[15:39] would would look different it's a bit
[15:41] like you know putting it putting a nasty
[15:43] old big exhaust pipe on you on your car
[15:45] compared to something high-end you know
[15:48] we we like to be able to reflect that
[15:49] visually as well right
[15:50] so this sounds like the first step
[15:52] towards doing that is
[15:54] is untying it from the ship and tying it
[15:56] more to the
[15:57] more to the actual quantum drive item
[15:59] itself
[16:01] um now that we can see other ships on
[16:05] re-entry
[16:06] uh what are your thoughts on meteor
[16:08] showers
[16:11] i'm gonna let it take this one take it
[16:14] away to you
[16:16] uh well i have tested this um
[16:19] and it is on the vfx side obviously
[16:22] completely possible
[16:24] uh it would just depend on the design
[16:26] requirements
[16:27] um perhaps story element elements in
[16:30] squadron
[16:31] yeah things like that but it is on our
[16:34] side it's possible
[16:35] and it looks it looks pretty cool yeah
[16:37] yeah i
[16:38] imagine it's one of those things that's
[16:39] easy to make it look cool from a
[16:40] distance but then you have to figure out
[16:42] the gameplay implications of
[16:43] what if somebody goes to that meteor
[16:45] shower and flies to that you know
[16:47] now there's now there's it's more than
[16:48] just looking cool now there has to be
[16:51] gameplay implications to it yeah and
[16:53] that's a much more complicated
[16:54] conversation
[16:56] yeah in a normal game you can use meteor
[16:59] showers as like a backdrop but
[17:01] for us we can actually like how do you
[17:03] spawn a meteorite in the sky
[17:05] like where does it come from will it
[17:07] just like pop in existence or like i
[17:09] know okay that's a great point it's that
[17:12] that's that's the challenge there it's
[17:14] like that thing's got to come from
[17:15] somewhere at some point so
[17:16] you know yeah where it can't be
[17:20] is it hidden behind a is it in a gas
[17:21] cloud is it hidden there's always
[17:23] possibility that someone could be
[17:24] at that place where the thing spawns so
[17:26] yeah that's quite a unique challenge to
[17:28] our game
[17:29] npcs in in games have monster closets
[17:31] dude
[17:33] are there such things as meteor closets
[17:35] where they can spawn and come and
[17:37] it can come from and again they have to
[17:38] be visible from like every angle because
[17:40] you you can't control
[17:41] where the player is going to be when
[17:43] they see it so
[17:45] yeah lots of interesting lots of
[17:46] interesting challenges there but uh
[17:48] if you want to see how it looks just get
[17:50] a couple of friends to all come
[17:52] come down more or less at the same time
[17:53] at the same speed on a planet
[17:56] and then you'll that that's kind of how
[17:58] it'll look
[17:59] cool um how do you guys anticipate the
[18:03] switch to vulcan
[18:04] will affect your work
[18:07] well for me uh i mean again leo you can
[18:10] probably provide a more technical
[18:12] answer to this but for me in theory
[18:14] aside from the fact that
[18:16] there's kind of time out the schedule
[18:18] for the programmers to to do their work
[18:20] it won't really make a huge difference
[18:21] to the likes of me and to
[18:23] we won't we'll get like big performance
[18:25] benefits
[18:26] in the game from it so i guess we can
[18:28] throw more particles
[18:30] at things which is always a good thing
[18:31] for me um but yeah it's not like going
[18:33] to make a fundamental change to how we
[18:35] work or anything like that
[18:38] yeah for for me personally at least i
[18:41] think it won't
[18:42] make much of a big difference because
[18:44] it's not really the code
[18:46] i work in that much it's it's more simon
[18:49] our leads who will be doing uh most of
[18:52] the work there
[18:54] but yeah it will be quite a big big
[18:57] chunk of time to get it all working
[19:00] and tested and um
[19:03] yeah but yeah it's it's quite exciting
[19:06] because i think
[19:07] it will allow for some some more
[19:10] particles and
[19:11] better features and yeah
[19:15] um it wouldn't be it wouldn't be a vfx
[19:18] show without a question about gas clouds
[19:20] so
[19:20] uh mike where are we at with the gas
[19:23] clouds uh
[19:24] how they're coming along
[19:28] they're coming along well i mean it is i
[19:29] guess it's similar to the to the shields
[19:30] topic that
[19:32] it's it's long been talked about and
[19:34] shown and the backers
[19:35] you know are very patient backers will
[19:37] have seen lots and lots of updates on
[19:38] the cast clouds
[19:40] uh it it's we still have weekly syncs
[19:42] with all the people that are involved in
[19:43] it
[19:44] it's it's i would say it's going well
[19:46] like um
[19:48] earlier on with the gas cloud work it
[19:50] was we were kind of more focused i guess
[19:51] on squadron
[19:52] in particular but we we've more recently
[19:54] at least this year been
[19:56] been discussing options with the pu team
[19:58] as well so
[20:00] you know there's there's lots of nice
[20:02] looking gas clouds for the grange points
[20:04] um the actual tech itself again that's
[20:07] more of a graphics thing and that is
[20:08] pretty much
[20:09] the the tech itself the gas clouds
[20:11] that's pretty much
[20:12] all you know in a good state and and
[20:16] looking pretty solid there's lots of
[20:19] we've started to do a lot more through
[20:20] testing
[20:21] in terms of like let's get a gas cloud
[20:24] in
[20:24] in an area let's get loads of ships in
[20:26] there let's have dog fights let's get
[20:28] bigger ships in there and let's really
[20:29] try and break this thing there's lots of
[20:31] work that
[20:32] comes from that just more boring stuff
[20:34] but like bug fixes and lots
[20:36] things that we didn't really anticipate
[20:37] previously from
[20:39] our point of view like the actual i
[20:40] guess things like
[20:42] the the different like the different
[20:45] space loop effects that
[20:46] we want to have themes to the gas class
[20:48] so we want we want a designer to be able
[20:49] to
[20:50] take a gas card that the artist has made
[20:52] and we want to be able to just
[20:53] have that same gas cloud if you place it
[20:55] five times in a row be able to change
[20:57] all the properties so that it actually
[20:58] looks and behaves in a different way and
[21:00] the experience inside that
[21:01] is different you know in each of those
[21:04] variants of that of that same thing
[21:05] so all those kind of loose ends that
[21:08] we're trying to tie up i guess
[21:09] we want to we want to we want to make
[21:11] sure design
[21:12] is as far ahead as they are so the whole
[21:16] kind of thing sinks
[21:17] and then that's when we're going to feel
[21:18] confident about and putting it in there
[21:20] and letting people
[21:22] see it for themselves so much of what
[21:24] you mentioned
[21:25] uh especially what you do uh depends on
[21:28] the
[21:29] on the work of others like it is well
[21:31] making a video game is a collaborative
[21:33] effort
[21:33] between multiple teams but with vfx uh
[21:36] is absolutely no exception it's it's
[21:39] you've got to work with the engine team
[21:41] in order to give
[21:42] get you the underlying tech you need
[21:43] before you can you can color something
[21:45] yeah if anything you do is going to be
[21:46] emissive and a lot of the effects are
[21:49] you got to work with the lighting team
[21:50] to figure out how that's going to
[21:51] you know dynamic lighting uh of course
[21:55] if you want these things to actually
[21:57] have knock-on effects
[21:58] and stuff i i think there's actually a
[22:00] question we'll get to this next one
[22:01] about
[22:02] about explosions actually being
[22:04] physicalized in the
[22:06] in the world and having knock-ons you
[22:07] got then you got to get with gameplay
[22:08] design
[22:09] and stuff like that uh it's it's
[22:11] definitely a collaborative uh
[22:13] process um usually yeah well let's see
[22:16] what we can do touching on that one
[22:17] right there explosions
[22:18] has there been any talk about making
[22:20] explosions have
[22:22] uh area of effect you know damage
[22:27] yeah absolutely um the again i guess the
[22:31] yeah the fits of the physics team and uh
[22:34] i forget i forget the name but basically
[22:36] of the team book like rich tyro you know
[22:41] [Music]
[22:42] yep yep so so there's a lot of work that
[22:45] those guys have been doing and i'm sure
[22:46] we've been showing it
[22:48] and updating the backers about it
[22:50] regarding like physical
[22:52] physical reactions um like impulses so
[22:55] yeah an explosion should should
[22:57] if you're if you happen to be standing
[22:59] say someone fires a grenade
[23:01] like from a grenade launcher um i'm
[23:03] looking at you too
[23:04] and that explosion happens over there
[23:08] absolutely it should it should knock the
[23:09] player kind of sideways and stumble and
[23:11] that that's all
[23:12] kind of planned and a lot of that work
[23:14] is very far ahead as well
[23:15] uh they'll you guys they'll actually see
[23:18] that
[23:19] on isc in about two or three weeks
[23:21] depending on
[23:22] uh b-roll availability so right here
[23:24] that's actually when it's going
[23:26] um so yeah so that's you're talking
[23:28] about force reactions and the ability
[23:30] and the ability of transferring
[23:32] uh those physics from the things that
[23:34] create them onto the players
[23:35] and yes yeah coming later this month
[23:38] maybe at the beginning of next month it
[23:39] all depends on when the visuals are
[23:41] ready people
[23:42] people are always like why don't you
[23:43] talk about this or whatever that's like
[23:44] we're waiting on the visuals
[23:46] you want to see it don't you i don't
[23:48] know what that voice was i did either
[23:49] we're just gonna move on
[23:51] uh let's let's let's let's go front
[23:52] let's go to the live chat here for some
[23:54] questions
[23:55] uh uh right off the bat what special
[23:57] effects have you had the most problems
[23:59] with
[24:01] what's been your big problem effect
[24:04] oh god will someone else go like someone
[24:07] what's been your el wapo what's been the
[24:09] thing that's just driven you crazy
[24:13] i mean i mean so
[24:17] effects perhaps uh that have
[24:20] been around in the environment mostly in
[24:23] like lourville and area 18.
[24:26] um i think for me but you you probably
[24:30] sympathize with this tier but i think
[24:31] for me one of the problem effects is as
[24:34] smoke from a barrel of a gun which
[24:36] sounds like a really simple thing to do
[24:37] but that
[24:38] that's really really tricky to get
[24:39] looking good um
[24:41] two reasons is the the lighting model of
[24:43] our particle system at the moment
[24:45] is it's not it's not fully pbr so it's
[24:48] not it's not quite
[24:49] like accurate in real world terms so
[24:52] again with our game you can make you
[24:54] have to make sure that your effect looks
[24:56] right on
[24:57] in daylight you have to make sure it
[24:58] looks right at night time
[25:00] up in space where the you know the glare
[25:02] of the sun is intense
[25:04] so what we end up doing is with it you
[25:07] want a kind of a nice subtle
[25:08] smoke emission from the barrel and you
[25:10] always get this from from the art and
[25:11] designers
[25:12] working on weapons i can you know could
[25:15] you just get a little bit of smoke about
[25:17] the barrel
[25:18] and the problem is that you you do that
[25:20] and it looks great but then you see
[25:22] someone firing it in space and it's
[25:24] super bright it's like oh god
[25:25] it looks really bad so now i've got to
[25:27] tone it right down and then i've turned
[25:28] it right down
[25:29] so then i get people saying i can't see
[25:31] any smoke coming out i'm gone
[25:33] so it's really tricky in that sense and
[25:35] also another another
[25:37] side of that i'm sorry if this is i
[25:39] don't know if this is boring or
[25:40] interesting but
[25:40] another one is is the fact that you can
[25:43] move around really quickly so you have
[25:44] to have this
[25:45] like the particle count obviously we
[25:48] can't
[25:48] we can't spawn too many particles even
[25:50] with the gpu system we can't spawn too
[25:52] many
[25:52] so you get this problem where the barrel
[25:54] if the smoke is emitting from the gun
[25:56] while the player's moving it around
[25:57] you just get these little blobs like
[26:00] smoke and that that kind of breaks the
[26:01] immersion that doesn't really look good
[26:03] so just a kind of really minor type of
[26:05] effect i guess in the scheme of things
[26:07] but that's that's a really tricky one
[26:08] that always causes me headaches
[26:10] yeah leo um
[26:14] well the past year i think like
[26:17] atmospheric country has been
[26:18] kind of a headache as well um just in
[26:21] the sense that
[26:22] we have some trouble of like figuring
[26:24] out when to
[26:25] spawn the effects
[26:29] our ships don't really fly fast enough
[26:31] to
[26:32] physically uh or physic
[26:35] physically accurately um spawn
[26:38] like spawn the effect when when it
[26:39] shoots like in real life
[26:42] um so we have to kind of fake it because
[26:44] it's a really cool effect
[26:46] um but yeah it's it's kind of
[26:50] um we've had a lot of back and forth
[26:53] between different teams but how what we
[26:56] can do
[26:57] to change or like change the experience
[26:59] or change
[27:01] the the calculations is it's yeah for me
[27:04] it's
[27:05] i guess a bit more of a technical point
[27:07] of view not
[27:08] really like visual but yeah
[27:12] john crew you can send your letters to
[27:13] leo care of
[27:15] that impairment games uk manchester
[27:18] um
[27:22] you spoke of uh you spoke at the reentry
[27:24] effects uh one of the questions we got
[27:26] here
[27:26] uh when we were showing the development
[27:29] of
[27:30] of that on the sprint report at one
[27:31] point there was a
[27:33] hull shader that that would would make
[27:36] the hull a heat shader for the hole that
[27:37] would make the
[27:38] hull glow if you were doing a bad
[27:41] atmospheric reentry
[27:42] uh is that happening still is that off
[27:45] the table
[27:46] what happened to that was that just r d
[27:49] well before you answer uh i i wasn't
[27:52] going to mention it but one of the
[27:53] things that
[27:54] is difficult based on the previous
[27:56] answer is uh
[27:57] putting the making sure the effects
[28:01] the the reason for the effect is
[28:03] understood and
[28:04] and seen and on the atmospheric entry
[28:08] effect um deadline and i worked on
[28:12] yeah that that glow is a is a big part
[28:16] of that
[28:18] you leaving it for me to answer then
[28:20] yeah yeah
[28:22] well i mean it is still planned that
[28:24] that's the short answer it's it's not
[28:26] we certainly we we sort of are indeed it
[28:28] and we showed it
[28:30] uh it's we haven't taken it off the
[28:32] table we're definitely
[28:33] planning on on doing it um when when we
[28:35] can the issue there is the
[28:37] again it's i'm probably just going to be
[28:39] repeating myself a lot but
[28:41] it's the collaboration it's not
[28:42] something that we as a vfx team can
[28:44] implement
[28:45] that needs to be uh we need to get like
[28:47] time from the graphics
[28:49] team so ali and ali and his his team um
[28:52] to actually work on the shader itself
[28:54] we then need to collaborate with with
[28:56] the ship people so you mentioned your
[28:57] own crew so john john's been in
[28:59] conversations about this
[29:01] it's just getting everyone together at
[29:02] the same time to be able to
[29:04] you know make sure that all priorities
[29:07] are aligned
[29:07] to actually be able to do that so
[29:09] definitely still planned
[29:11] um i can't commit to when yeah but
[29:14] it's certainly on the table and we're
[29:16] also going to be needing something
[29:17] similar for
[29:18] uh for the fire propagation as well yeah
[29:20] now
[29:21] priorities can be the easy answer to
[29:24] almost
[29:25] every one question uh with regards to
[29:28] video game development
[29:29] it's just a question of is yes it's it's
[29:31] always a question
[29:33] in the simplest forms yeah we don't we
[29:35] always like to do it we'd always love to
[29:36] do it we'd always love to pursue it
[29:38] it's just a question of with everything
[29:39] else that we're trying to do and even
[29:41] with
[29:41] as many folks as we have and as many
[29:43] studios around the world there are still
[29:44] a finite number of resources
[29:46] so you have to always direct your
[29:48] efforts towards the things
[29:50] that you know any given individual can
[29:52] work on uh it's
[29:54] so yeah priorities are often the course
[29:56] there um
[29:58] it will be needed for the fire
[30:00] propagation stuff
[30:01] yeah yeah yeah so the reason why it
[30:05] didn't really work was that we have to
[30:07] glow on the ship itself
[30:09] with the damage map so if you shoot the
[30:10] ship um
[30:12] you you get like the glowy glowing parts
[30:15] so we could use that for for making the
[30:17] ship glow but
[30:18] all the items attached such as the
[30:22] landing gear
[30:22] the uh the glass the uh
[30:26] doors even they didn't glow with it
[30:29] and it's basically we need the same kind
[30:32] of glow tech
[30:33] on all those other
[30:36] um objects um and
[30:39] so one of the things we're requesting
[30:41] now from the graphics theme is this
[30:43] is kind of like a more generic glow
[30:45] shader so that we can
[30:47] use that same shader on the material
[30:50] for fire so if an object is hot enough
[30:53] for it to glow then we can use that same
[30:56] kind of
[30:57] system to to make an object glow um
[31:01] so it's going to be yeah probably a
[31:04] while but
[31:04] it's it's going to be like something
[31:06] used for different
[31:08] different systems as well which is which
[31:10] is nice
[31:11] so you brought up fire propagation so we
[31:14] let's
[31:14] let's get into that we've been
[31:15] showcasing that on our our bi-weekly
[31:18] sprint reports for some time now
[31:20] i personally find it very very
[31:22] interesting which is why i include it
[31:24] and then luckily the
[31:25] the community has agreed um why is
[31:28] the entity to voxel propagation
[31:31] important
[31:32] and necessary and uh
[31:35] beyond that what are the next steps like
[31:37] when do we start
[31:38] updating the fire effect itself and uh
[31:42] and then the question actually came from
[31:43] the chat was will it
[31:45] change color based on fuel like
[31:46] basically how far do we intend to take
[31:48] this let's just make it
[31:49] a simple question and go from there
[31:53] all right so we prepared a little demo
[31:56] for the fire propagation so i can go
[31:59] through the demo
[32:00] um and answer some questions a lot of
[32:02] the questions
[32:03] yeah yeah you wanna do a screen share
[32:06] yep can you see my screen we can see
[32:09] your screen
[32:11] all right so uh we got everyone's
[32:13] favorite ship
[32:14] sexually die maybe not but
[32:17] we're going to set it on fire john crew
[32:20] you can send your letters to
[32:21] leo cloud appearing games uk
[32:25] winslow go ahead so
[32:28] uh we are going to base our fire on
[32:32] voxels so you can see the square um i
[32:34] can put a debug
[32:36] um like this i don't know if like you
[32:39] can see
[32:40] the green edges but like those are all
[32:42] voxels
[32:43] with material properties
[32:46] um so in those voxels we are kind of
[32:50] going to bake the environment and in the
[32:54] environment
[32:54] we have material properties so for
[32:58] example
[32:59] plastic the material properties this is
[33:01] all
[33:02] prototype work so nothing is final a lot
[33:05] of
[33:06] tweaking and balancing and setup still
[33:08] needs to be done
[33:09] for all of this to kind of be
[33:11] implemented but
[33:12] for now this for example says plastic so
[33:15] in plastic we have all of these
[33:17] properties which will affect fire
[33:19] um and here we have wood stands and
[33:22] plastic combined
[33:24] for example here we have a fabric as
[33:26] well so all of these have these
[33:28] these kind of properties they're
[33:30] physically based
[33:31] so we're going to start with a
[33:34] physically based
[33:35] propagation system and see how far we
[33:38] can
[33:38] get with that and then we have an entity
[33:41] as well
[33:42] so what's the difference between an
[33:44] entity
[33:45] and a voxel basically a lot
[33:49] of environments in our game aesthetic
[33:53] it will never move and we have a lot of
[33:56] those kind of static
[33:57] objects and it's mainly for performance
[34:01] reasons
[34:01] we can't keep track of the fire state
[34:04] in all of those objects for example here
[34:06] in this voxel we have all of these these
[34:08] dirty pillow
[34:09] pillows they like we can't really set
[34:12] each
[34:14] [Laughter]
[34:16] set the dirty pillows on fire leo yeah
[34:19] we can't
[34:20] set them all separately on fire so so we
[34:23] kind of
[34:24] average out all of these properties
[34:26] inside of axle
[34:28] um so for example if i change the
[34:31] physics so i set the physics on you'll
[34:33] see that this tool
[34:34] was falling because it's a dynamic
[34:36] entity and it can move in game
[34:39] uh while the the blend box it will
[34:42] remain
[34:43] hovering over the table while it's just
[34:46] static it does have
[34:48] like static physics but it doesn't have
[34:50] any dynamic physics or anything so
[34:52] we can be sure it will always be in the
[34:55] same
[34:56] place
[34:57] [Music]
[34:59] so we can set these voxels on fire
[35:03] um and we have different effects as well
[35:05] so um if i set this voxel on fire
[35:08] we'll have um the kind of generic
[35:11] effect that most properties will have
[35:14] more most materials will have but we can
[35:17] also for example this one has
[35:19] a fabric which is a different
[35:23] material and a different effect as well
[35:26] so
[35:26] we'll have a more kind of low effect
[35:30] uh compared to the high flames from the
[35:32] generic one
[35:34] and these are work in progress so i i'm
[35:36] still
[35:37] working on them and they'll they'll look
[35:39] more distinct
[35:41] than that yeah yeah definitely so all
[35:43] the visuals yours
[35:45] visuals you see here they are temporary
[35:48] for the prototype
[35:49] um they're definitely not fine
[35:52] final uh we also got like
[35:55] um this one uh that's the vegetation
[35:59] i don't know if it's very well visible
[36:01] with with the quality of teams but
[36:03] this one has like uh ash
[36:06] things floating uh up up the flames
[36:10] so you can kind of can see like the the
[36:13] ash
[36:14] um so all of these you can also do uh
[36:17] electrical fires and whatever and in the
[36:19] meantime you see that this fire is kind
[36:22] of
[36:22] getting out of control spreading around
[36:25] it's spreading around
[36:26] we also have a fog volume so
[36:30] you see that the the the room is getting
[36:32] a bit foggy because of all the smoke
[36:34] being released by the fire um
[36:38] this is something we'll also add so this
[36:40] will be based on the
[36:42] uh atmosphere of your room um
[36:45] your um so if there's lots of smoke or
[36:49] toxic gases your your room will start
[36:52] fogging up to to kind of add to the
[36:55] visuals
[36:58] i'll reset this to
[37:02] kind of make it
[37:05] doable again so how do we
[37:08] propagate so we got some very quite
[37:12] fast uh propagation here in this area
[37:16] we have a few few
[37:17] [Music]
[37:20] ways of propagating the fire so the
[37:22] first one
[37:23] is let's go for radiation uh radiation
[37:26] is basically your objects
[37:28] shoots ray of energy kind of things
[37:32] to nearby nearby objects so it will kind
[37:35] of heat up
[37:37] by radiation this is
[37:40] not the most effective way of heating
[37:43] up an object but it's
[37:48] kind of simulated anyway
[37:51] think uh infrared uh but and not nuclear
[37:54] radiation right right yes exactly yeah
[37:57] good point
[37:57] different way i think we also have
[38:00] convection
[38:01] um and this is basically the way
[38:05] um so you heat up the air and the air
[38:08] starts kind of moving around in your
[38:09] room
[38:10] we won't do like full fluid simulation
[38:13] for this
[38:13] but we will try and um add in gravity in
[38:18] there
[38:19] so that if you have a low gravity then
[38:22] the
[38:23] convection won't be as strong while if
[38:26] you have a
[38:27] high gravity then there will be more and
[38:30] more convection we'll also try to
[38:33] muddle in the wind so that the wind
[38:35] direction of your
[38:37] your fire affects
[38:40] the the
[38:44] propagation propagation indeed yeah this
[38:47] is important actually for visuals sorry
[38:49] to cut you off there
[38:50] because the particles will follow forces
[38:53] like wind and gravity
[38:55] um so you would expect flames going up
[38:58] a wall for example to then have more
[39:02] more of those voxels above it to catch
[39:05] fire
[39:06] yes for example if we set a voxel on
[39:09] fire near
[39:10] a wall if i can find one then there
[39:13] there should be more propagation upwards
[39:16] rather than
[39:17] um around it
[39:22] and the last type of propagation is
[39:26] damaged
[39:26] so if we heat up an object and this will
[39:29] be based on the material type as well so
[39:31] it will
[39:33] not all material types
[39:36] will do this kind of behavior but
[39:40] it is possible for that object to
[39:44] have a chance to ignite when it receives
[39:47] damage
[39:50] and this kind of allows us to
[39:53] to model a more random fire
[39:59] behavior while the convection and the
[40:01] radiation is really it's
[40:03] deterministic it's always the same it
[40:05] will go
[40:06] up with gravity with certain wind
[40:08] direction uh the radiation is always
[40:10] like based on the strength it will
[40:12] always go
[40:14] like just around um
[40:17] so the damage gives a little bit of
[40:20] randomness
[40:22] and then uh was one more thing i wanted
[40:25] to show here
[40:26] so with the
[40:30] entities and voxels so for example if i
[40:33] set this voxel on fire
[40:35] and i move this this brush to static
[40:39] brush
[40:40] the fire doesn't move because everything
[40:42] is baked into this
[40:43] voxel while if i set this
[40:47] dynamic entity on fire
[40:50] we can move it and
[40:53] it will the fire will move with it and
[40:56] what this means
[40:57] is that you can kind of set fire around
[40:59] here
[41:00] just because this tool is on fire i
[41:03] never get tired of seeing this
[41:06] it's it's really cool to play around
[41:08] with to be honest yeah
[41:11] that is very cool leo
[41:15] thank you for taking the time to show
[41:16] this i've got some more
[41:18] if we have time uh sure
[41:21] which what you got a rolling barrel
[41:26] uh keeping the best for lost
[41:30] uh if we ignite it and we enable physics
[41:33] the barrel will start rolling
[41:38] and we can keep track oh this is like a
[41:42] made in britain extinguisher
[41:49] so if we track this voxel
[41:54] uh then we
[41:58] see that we can track the temperature of
[42:00] this this voxel
[42:01] and if it goes be above the yellow line
[42:05] it will go into the smoke temperature so
[42:07] it will start
[42:08] smoking and that means that the voxel
[42:11] can also
[42:12] start to catch on fire so in here you
[42:15] see this
[42:16] yeah just like it spiked up that's
[42:18] because it went into the fire range
[42:20] uh of the temperature and this foxel
[42:24] column fire basically
[42:27] and we have this for all these voxels
[42:29] around it so the the temperature will
[42:32] go up they will start smoking and when
[42:35] is this
[42:35] important it's going to be important if
[42:38] we want to start
[42:39] extinguishing so our extinguisher
[42:42] it's yeah not working
[42:46] very well but we got a debug
[42:50] extinguishing feature which we can use
[42:53] let's speed this up a little bit so i
[42:55] can speed up the propagation
[42:58] this is fine a lot this is fine this is
[43:00] fine
[43:03] um and then i can start extinguishing
[43:07] and hopefully we'll see the fire to die
[43:11] down
[43:11] where i extinguish so basically what you
[43:13] need to do is is make sure that
[43:15] there is no more smoke anywhere um
[43:19] okay maybe this was a bit too much
[43:23] you can reset it
[43:28] [Laughter]
[43:34] well we finally answered the age-old
[43:36] question from billy joel
[43:38] it was leo
[43:40] [Music]
[43:41] yeah so extinguishing works in a few
[43:44] different ways as well
[43:45] so we um because we go physically based
[43:48] we can kind of um
[43:52] use the fire triangle triangle
[43:55] which is used for by firefighters uh
[43:58] basically
[43:59] if you take away one of the oxygen fuel
[44:02] or or the other
[44:07] it's fuel oxygen and
[44:10] willpower what
[44:14] uh temperatures heat i think
[44:17] it's it's temperature it's fuel and it's
[44:19] materials i think
[44:20] i think the materials are kind of fuel
[44:22] isn't it yeah
[44:24] let me quickly blocking out here
[44:29] uh fuel heat and
[44:32] oxygen so
[44:35] basically what we do is we we take away
[44:37] the heat
[44:38] inside this um inside this sphere
[44:42] that you see here there's this debug
[44:44] sphere we also take away the oxygen so
[44:46] that the
[44:46] the fire kind of dies down and then we
[44:49] by taking away the heat
[44:50] we are able to kind of make the
[44:53] temperature
[44:54] go below the um
[44:59] smoke temperature and that will make
[45:01] sure it won't be able to
[45:02] kind of reignite and catch on fire
[45:05] we also track fuel so if the if that
[45:08] specific
[45:09] voxel or object doesn't have any mass
[45:12] anymore to burn it will die down on its
[45:15] own
[45:16] and of course like later down the line
[45:18] if we kind of decompress a ship
[45:21] then your fire will be gone as well
[45:24] so yeah i guess this is my
[45:28] demo completely running out of control
[45:32] but thank you so much house designed
[45:34] yeah yeah
[45:36] you yeah you can stop the screen share
[45:38] thank you
[45:39] um thank you leo uh
[45:43] oh wait where's my picture there we go
[45:46] uh people saw the wonderful outside of
[45:49] the apartment there
[45:50] uh for a few seconds um that's great uh
[45:53] one of the follow-up questions that i
[45:54] know folks a lot of
[45:56] a lot of folks had in the chat there
[45:58] have you
[45:59] have you considered zero g and how any
[46:01] of this is going to work in zero g
[46:05] we're all not in yeah
[46:08] for i explained a little bit that
[46:10] convection
[46:11] will it will play into convection which
[46:14] is
[46:15] the only way zero g will affect fire and
[46:17] propagation but to will explain a little
[46:19] bit
[46:20] but officials i guess yeah i mean
[46:23] in terms of propagation it makes sense
[46:24] right zero g there's there's no
[46:27] um there's nothing pushing the fire up
[46:30] or sideways with wind or anything like
[46:31] that
[46:32] so it radiates uh
[46:35] everything the the difficulty with zero
[46:38] g
[46:38] fire is the visuals obviously because
[46:41] gases behave differently in zero gravity
[46:44] um
[46:45] so it's it's something
[46:48] i think about a lot um keeps you up at
[46:51] night
[46:52] keeps me up at night and it's um
[46:56] yeah it's next on the list for me to uh
[46:58] take a look at
[47:00] along with um different uh
[47:04] visual styles for surface types for
[47:06] different types of fuel
[47:08] that kind of plays into it almost
[47:10] because it it it might
[47:12] it might need its own uh look
[47:15] right yeah now fire and zero g it tends
[47:18] to be
[47:18] uh from the reference i've seen like
[47:21] almost
[47:22] yeah globulous yeah it's weird yeah
[47:25] it's it's very weird so we can do that
[47:27] but then would that look
[47:28] cool and would that you know is that
[47:30] what we expect right
[47:32] yeah like with all things you take it to
[47:35] the point of realism
[47:36] then you bring it back to the point of
[47:37] fun
[47:39] uh let's see all right we've got 15
[47:42] minutes left
[47:44] what else we got missile effects
[47:47] mike are you happy with the current
[47:49] missile effects
[47:50] because they kind of seem like crap i'm
[47:53] not i'm not happy
[47:54] with no i'm not happy with them and i
[47:56] intend to improve them
[47:58] um i'm actually i'm actually working on
[48:00] them myself at the moment
[48:01] um sort of i guess in between official
[48:04] duties i i'm
[48:05] trying to tweaking the effects and i
[48:07] probably i think i've shown in
[48:08] in a couple of the update meetings that
[48:11] i've already got some
[48:12] improvements to them just things like
[48:14] making them making them last longer so
[48:16] increasing the life and that helps
[48:17] readability
[48:18] um just making making the flares more
[48:22] visible from a distance pushing out the
[48:24] actual thrust
[48:25] effects themselves just kind of minor
[48:27] tweaks again similar i guess
[48:28] similar to the quantum travel
[48:30] conversation it's a much
[48:32] the missile trails are a much older
[48:33] effect um
[48:35] possibly some of the first i i worked on
[48:38] back in the day but yeah long story
[48:40] short definitely planning on
[48:42] improving them already made some work on
[48:44] it we're also we're also holding out for
[48:46] some
[48:46] some graphics from sorry some vfx
[48:49] particle system
[48:50] improvements as well inc like for
[48:51] ribbons on the gpu system for example
[48:54] which will allow us to to get
[48:57] kind of a bit more efficient with the
[48:58] trails as well so yeah going to improve
[49:01] them
[49:02] definitely and those will go along uh
[49:04] other improvements to missiles in
[49:06] general being worked on by like the
[49:07] vehicle experience team
[49:09] and stuff because missiles in general
[49:11] are
[49:12] are are coming due for a uh for
[49:15] an overhaul and you'll of course be
[49:17] hearing more about that
[49:18] uh as it continues on um
[49:22] somebody was asking where's pico he's
[49:24] right here
[49:27] i think it'd be flammable this we're not
[49:29] going to find out
[49:32] this is the only one in existence this
[49:33] was the manufacturer prototype this is
[49:35] literally the only one that
[49:36] is out in the world right now so we're
[49:37] not we're not going to find out if it's
[49:39] viable i need some reference
[49:40] uh but not going to get it you're not
[49:42] going to get it uh
[49:44] let's see what else do we got here um
[49:49] we've seen what looks like cherry
[49:50] blossom trees in oregon does the thought
[49:53] of them dropping leaves excite or
[49:54] terrify you
[49:56] for me both yeah it's terrifying in the
[50:00] sense that it's
[50:00] it's like more more dynamic effects um
[50:05] but it's exciting because that's a real
[50:07] nice having having
[50:09] leaves falling from a tree and getting
[50:11] blown around by the wind and
[50:12] uh ian the the uh art director kind of
[50:16] he wants origin to have that kind of
[50:17] feel to it like a
[50:18] sort of a gentle breeze so uh yeah i
[50:21] mean it's exciting actually i'm only
[50:23] really joking when i say it's terrifying
[50:25] um but i seem to vaguely remember i
[50:27] think i
[50:28] i think i half jokingly said to chris in
[50:30] one of the updates that if we knew the
[50:33] amount of leaves on a tree we could
[50:34] actually
[50:35] directly leo's laughing already but we
[50:39] could we could directly
[50:41] drive like the amount of leaf particles
[50:43] that fall from the tree
[50:45] but i mean and that's why we call you
[50:47] part of the problem mike
[50:50] it's an option it's there you know but
[50:52] but then geometry as well so
[50:54] yeah yeah yeah but then you know someone
[50:56] all the
[50:57] all the leaves would have to grow back
[50:58] otherwise we just end up with no leaves
[51:00] on the trees
[51:01] at some point in the in the game so it's
[51:03] probably not really not the best idea
[51:06] so maybe we can do seasons as well yeah
[51:08] well
[51:09] yeah yeah yeah in future
[51:14] in a tbd to be determined uh patch
[51:17] yeah uh right along with missile effects
[51:20] let's move on to thruster effects
[51:24] um
[51:27] same kind of question i guess yeah i
[51:29] mean the answer is the same
[51:32] like i mean thruster effects is thruster
[51:34] effects were the things i was most
[51:35] passionate about
[51:36] for for a while when i joined cig
[51:38] because i absolutely loved the
[51:41] thing about vfx is like it's quite in
[51:44] the old days of being a vfx artist
[51:46] there was this conception and it was the
[51:48] case uh in in sort of more
[51:50] earlier games the vfx just made a pretty
[51:52] looking effect like
[51:53] a flame and they just placed it in the
[51:56] level
[51:56] or or it came from a weapon as you just
[51:59] saw with leo's
[52:00] leo's demonstration of fire propagation
[52:02] there's a hell of a lot of data that
[52:04] drives the effects
[52:05] these days um thrusters always i i
[52:08] really like the thrusters because it was
[52:09] a similar kind of thing it was it was
[52:11] fairly simple it was like the the thrust
[52:13] input so the actual value
[52:14] from the ship was driving the the
[52:17] strength curve of the particle so you
[52:18] could do some really nice things with it
[52:20] um it's progressed over time so we as
[52:22] well as thrust input and
[52:24] and leo you know was was very much
[52:26] involved in in the functionality side of
[52:28] this
[52:29] we got overheating we've got damage
[52:31] we've got misfires we've got we've got
[52:33] boost we've got shock diamonds when
[52:34] you're in atmosphere
[52:36] that you know you don't you don't see
[52:37] them when when you're not in atmosphere
[52:40] there's a lot of ships in our game as as
[52:42] well you know so
[52:43] there's a lot of thrusters that need to
[52:45] get made we're constantly improving the
[52:47] gpu particle system
[52:48] so so naturally some of the older
[52:50] effects
[52:52] don't look as good as other ones we've
[52:54] actually just finished
[52:55] work on the 100 ice clusters yeah and
[52:59] we just showed that yeah yeah so we just
[53:01] showed that in the
[53:02] in in a pu update and uh i'm having fun
[53:05] about an internal update guys yes sorry
[53:08] an internal team update
[53:09] um chris loved him like an ian ian
[53:12] commented as well like he thought they
[53:14] were the best ones we've done so
[53:15] i was really happy for jacob the the the
[53:18] artist who made them
[53:19] so yeah it's just one of them things
[53:20] where we got so many moving parts
[53:23] we we you know can't really press the
[53:25] pause button
[53:26] on on the machine that you know the
[53:28] beast that is star citizen
[53:30] um so we just got to try and keep up and
[53:32] we just need to find a bit of time to
[53:33] just look at all of the effects
[53:35] uh kind of collectively and just and
[53:37] just work on improvements that we can
[53:40] do across the board i have been doing
[53:41] that again similar to with the missiles
[53:43] i have been working on the gladius
[53:45] duster effects it's my favorite ship
[53:47] obviously it's important for squadron
[53:48] 42.
[53:49] so i've been looking at what do i need
[53:51] to do to make the gladius effects tick
[53:53] all the boxes
[53:54] uh that chris has got really really
[53:56] clear ideas on on how
[53:58] how they need to be improved like
[53:59] general visibility maneuvering thrusters
[54:01] in particular i know that i know that's
[54:02] a common
[54:03] thing that comes up like maneuvering
[54:05] thrusters are a bit too small you can't
[54:06] see them
[54:07] we've maybe been a bit too aggressive
[54:08] with the with the with the loading of
[54:10] them
[54:11] so with lots of work is being done with
[54:13] that i'm personally involved so
[54:15] um yeah make them better we'll try
[54:19] and for the folks asking yes you will
[54:21] see them when the time is
[54:24] right time is right um with things like
[54:27] weather and temperature affecting more
[54:29] and more things planetside have there
[54:30] been any consideration for things like
[54:32] heatwave or
[54:33] or shimmer effects yes
[54:36] the house is something like that we used
[54:38] to have them exactly jared yeah yeah we
[54:40] used to have them on the cpu particle
[54:41] system
[54:42] um and again we moved across
[54:45] we've moved more of our planet effects
[54:48] well all of our planet effects to the
[54:49] gpu
[54:50] but we didn't have refraction so there
[54:53] so a refraction particle getting that
[54:54] heat wave look
[54:55] wasn't available to us um so once we get
[54:58] that on the gpu
[54:59] then yeah we can put the the shimmer
[55:01] back in yeah
[55:03] okay um one of the most common questions
[55:06] that we get
[55:07] and maybe put you on the spot a little
[55:09] bit here
[55:10] uh space dust have you considered the
[55:13] option of
[55:14] letting people just check a box and
[55:16] remove it
[55:17] some people don't like it some i like it
[55:19] but some people don't
[55:21] yeah i see that a lot and i understand
[55:23] that that it's not to everyone's taste
[55:25] uh we're not planning on removing it
[55:28] just because
[55:30] um well it's it physically exists in in
[55:33] our
[55:33] in our space in our game it is
[55:35] physically there it's not it's not an ar
[55:36] thing because i know there's been
[55:38] conversations about oh hang on
[55:40] what is the purpose of the space dust i
[55:42] know that it's primarily to to make it
[55:44] feel like
[55:45] you can you can see that you're moving
[55:46] basically it gives you that parallax you
[55:48] take the space just out you you've got
[55:50] no kind of sense of that you're moving
[55:52] and i know that there'll be yeah i know
[55:54] there'll be some some people
[55:55] want the more realism side of it that
[55:57] they don't care that they can't see
[55:59] any kind of visual cue there's been talk
[56:01] of putting it onto an ar so it's
[56:03] it's a deliberately artificial space
[56:06] dust kind of thing that helps with that
[56:07] we did some tests quite a while ago on
[56:09] that sort of thing
[56:11] chris chris is quite keen on keeping the
[56:13] space dust in
[56:14] uh one thing i will say is again
[56:16] something that i've been doing
[56:17] personally i've been i've been tweaking
[56:18] the values
[56:19] so again it's it's quite uh not the most
[56:22] glamorous of effects but
[56:24] i've just been looking at maybe not
[56:26] making the streaks quite as big maybe
[56:28] reducing the amount increasing the
[56:29] amount depending on on the location so
[56:32] really just chipping away at that and
[56:33] just trying to make them not too
[56:34] intrusive
[56:35] but but so that you still get the
[56:36] benefit of getting that motion
[56:43] graphic designers are known to suffer
[56:46] from
[56:46] word blindness when looking at for at
[56:49] the same words over and over again
[56:51] during visual design uh does the same
[56:53] thing happen for visual effects
[56:57] to you tell us um
[57:01] yes so um
[57:05] for me it's not so much obviously
[57:09] text or anything like that it's more
[57:10] motion and intensity so
[57:13] a good example is when i'm working on
[57:15] the fire effects
[57:17] um and tweaking values with you know
[57:20] with different strengths on the actual
[57:23] fire effect
[57:24] um after like about an hour
[57:27] it's it's hard for me to distinguish
[57:29] between the
[57:31] the changes i'm making and that just is
[57:33] because i'm
[57:34] um it's it's like when you're sitting in
[57:36] the back of a car that's moving for a
[57:38] long time
[57:39] and then you stop and then your your
[57:40] vision con continues
[57:42] to to to make you feel like you're
[57:44] you're moving um
[57:46] that happens definitely to me a lot uh
[57:48] yeah so it's important to take breaks
[57:50] uh work on another type of effect even
[57:53] or something completely different
[57:55] and then come back to it otherwise you
[57:56] just waste time making changes that
[57:58] don't make any sense
[57:59] i think that's where your colleagues
[58:01] come in useful as well you know it's
[58:02] nice to
[58:02] nice to show an effect that you've been
[58:04] staring at for so long and you actually
[58:06] i might give tio some feedback or he
[58:08] might give me some feedback
[58:09] oh no leo anyone in the team will will
[58:11] go they'll point things out that you've
[58:13] just become
[58:14] blind to because again you're just
[58:15] looking at so long
[58:17] yeah yeah that happens in just about
[58:19] every aspect of
[58:20] game development that'll even happen in
[58:23] yeah video stuff
[58:24] you know it's by the way by time yeah by
[58:26] the time isd segments go out to the
[58:28] public i've
[58:29] i've seen each one at least two dozen
[58:31] times in a variety of different states
[58:34] and and everyone we'll we'll finally you
[58:36] know bring it out and branch it to other
[58:37] people and they'll be like
[58:38] why is this thing there i'm like what
[58:40] are you talking about there's this giant
[58:42] like ugly ass square thing in the middle
[58:45] of the scene right here and it's like
[58:46] oh i've looked at that footage so many
[58:49] times and for so long
[58:50] i was completely oblivious to it uh yeah
[58:53] we'll go ahead
[58:54] we'll recapture that i didn't realize i
[58:56] didn't say so yeah so
[58:58] so uh uh contact repetitiveness
[59:01] blindness is something that affects uh
[59:04] anything when you just work on it over
[59:06] and over and over
[59:07] for a prolonged period of time um
[59:12] two to two final question before we wrap
[59:13] up here um
[59:16] how do you balance vfx needs versus game
[59:18] performance
[59:21] oh well that's a good one i mean
[59:24] yeah well we've just got it we've got to
[59:26] make it work you know so
[59:27] so the the fire is probably a good
[59:31] example of that
[59:32] ground ground storms was another example
[59:34] we know
[59:35] we got a clear brief on what it is we
[59:36] need to do and it just so happens that
[59:38] the fire is gonna
[59:40] you know that that that's very easily
[59:42] gonna be a performance breaker
[59:44] so we need to look at people smart
[59:46] people like leo help us out here
[59:48] uh and simon yeah you do leo
[59:51] um you know we need to look at we we
[59:53] need to make sure that they are
[59:55] performing i mean this is
[59:56] this is a game development
[59:59] uh core value core principle for
[1:00:01] everyone in every department
[1:00:03] you've got to be able to make sure that
[1:00:04] it runs in frame it's got to be
[1:00:06] optimal and maybe you make some
[1:00:09] compromises for that but you've got to
[1:00:11] make sure that the compromises aren't
[1:00:12] answer the detriment of the
[1:00:14] of the visual quality
[1:00:17] and uh oh go good you want to add no i
[1:00:20] was going to say
[1:00:22] this makes a big difference to to me
[1:00:24] when working on
[1:00:25] impact effects for example i could
[1:00:28] visually i could throw
[1:00:29] it uh tons and tons of particles with
[1:00:32] smoke and
[1:00:33] like make it really look cool when a
[1:00:34] mass driver hits snow
[1:00:36] which uh i i've prototyped before
[1:00:40] and worked on but uh you do feel that
[1:00:43] lag
[1:00:44] come in when you have an impact or fire
[1:00:46] weapon and that's just
[1:00:48] that's just a no-no for me i it drives
[1:00:51] me crazy
[1:00:52] uh when i'm playing you know any other
[1:00:54] game so
[1:00:55] it's it's something i will put with
[1:00:58] performance i put performance before
[1:01:01] visuals
[1:01:02] um yeah and trying to get get as much
[1:01:04] visuals
[1:01:05] out of the performance yeah it's worth
[1:01:07] it's worth noting that in that fire demo
[1:01:08] that we saw uh today and then in all the
[1:01:11] footage we've seen in previous ones that
[1:01:13] is a very
[1:01:14] wip effect for the fire itself yeah it
[1:01:17] is you know
[1:01:18] the work right now is on the tech and
[1:01:19] making sure the tech is lean
[1:01:21] and mean and functions away and then
[1:01:24] once all that's done
[1:01:25] somebody will go in and start working on
[1:01:27] the actual fire effect itself and
[1:01:29] yeah for sure i mean it's like simon and
[1:01:31] leo did great things
[1:01:33] with the with the ground storms by the
[1:01:34] way like they that's a that was a huge
[1:01:36] undertaking there's a lot of effects
[1:01:38] going on on the screen
[1:01:39] and they the performance is actually
[1:01:41] really good of that
[1:01:42] given what they're doing the performance
[1:01:44] is actually really good on them
[1:01:45] um so yeah yeah tia is absolutely right
[1:01:48] like we've got to make sure that the
[1:01:49] gameplay experience is is
[1:01:51] is kind of top priority there uh final
[1:01:55] question before we let you go
[1:01:56] uh fireworks in space really
[1:02:01] yes yes really
[1:02:05] um i mean yeah it's
[1:02:08] you know do we do we need to justify it
[1:02:12] with some
[1:02:12] with some lore 930 years worth of
[1:02:16] advanced technology
[1:02:18] yeah yeah yeah leo's got got some
[1:02:20] thoughts on this i'm sure
[1:02:21] yeah it's uh called space fireworks yeah
[1:02:26] just like just like oh there's space
[1:02:28] fireworks
[1:02:30] say no more so you know i didn't realize
[1:02:32] they were space fireworks
[1:02:34] now it all makes sense exactly yeah i
[1:02:37] just needed that clarification
[1:02:39] i'm sure that's put an end to that
[1:02:41] argument
[1:02:42] all right uh thank you so much guys for
[1:02:44] taking time out of the end of your week
[1:02:45] to be here on the show
[1:02:47] i think folks really appreciate it i i
[1:02:49] know i did
[1:02:50] um as we are want to do at the end of
[1:02:53] every seo now we are gonna throw
[1:02:55] a we're gonna throw a raid over to a
[1:02:57] star citizen streamer
[1:02:58] uh that is uh hopefully broadcasting
[1:03:00] right now uh i haven't heard for certain
[1:03:03] but we're gonna find out
[1:03:04] uh this is a french uh streamer named uh
[1:03:07] you know i'm not good at pronouncing
[1:03:09] these things i've been calling teo tio
[1:03:10] this entire time
[1:03:12] i said wimslow instead of wilmslow as
[1:03:14] luke presley once corrected me on
[1:03:16] i'm terrible at the pronunciation but
[1:03:18] we're gonna try water pat
[1:03:20] i think if i've got that correct uh she
[1:03:22] is a french streamer
[1:03:23] uh who does a lot of flight instruction
[1:03:26] and stuff especially with the new flight
[1:03:27] model in 310
[1:03:29] so um so when you go over there and
[1:03:32] and the raid happens uh say hi from the
[1:03:34] vfx team
[1:03:36] and uh yeah we'll see you back here next
[1:03:38] week everybody so take care
[1:03:40] uh thank you teo tayo
[1:03:43] leo mike this is i'm jared
[1:03:47] end the show thank you
[1:04:17] you

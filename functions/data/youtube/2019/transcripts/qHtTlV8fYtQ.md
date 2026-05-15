# Star Citizen Live: Audio - Design & Programming

**Video:** https://www.youtube.com/watch?v=qHtTlV8fYtQ
**Date:** 2019-11-08
**Duration:** 1:00:33

## Transcript

[00:14] hey everybody welcome to another edition
[00:16] of star citizen live this time with the
[00:19] audio team audio design and programming
[00:22] I'm your host Jared have to be in
[00:23] joining us on the show here from
[00:25] beautiful sunny actually suddenly start
[00:26] no that's just the stage that's just the
[00:28] light not the Sun was coming on not here
[00:30] but I feel great
[00:31] perpetual gray joining us here and
[00:34] you're not sunny Winslow three members
[00:36] from the audio team let's start from the
[00:38] left from the far left and just tell
[00:40] everybody who you are and what you do
[00:42] for star citizen I'm Josh and I'm sound
[00:45] designer on the audio team and we just
[00:48] had a big segment explaining what sound
[00:50] designers do on is yesterday so I'm not
[00:53] going to ask you to repeat that today no
[00:56] deleting my collarbone how much you know
[01:01] my name is Phil Pierce woods and I'm the
[01:04] lead sound designer and beard maven for
[01:07] the audio team absolutely yeah yeah I
[01:10] grow one every six months and I'll just
[01:11] reset it was never as epic as yours
[01:13] let's face it but well I haven't had a
[01:15] happy beard and like your I spend
[01:18] enormous on graves two years it was
[01:20] always epic that's never coming back and
[01:23] last but certainly not least Graham
[01:26] tells who you are and and you have to
[01:28] tell us what you do for starters only
[01:29] because you're not a designer
[01:30] okay well hello my name's Graham
[01:32] Phillips and I'm lead audio programmer I
[01:34] wear mostly brown and I try my best to
[01:38] provide tools for these guys to make the
[01:40] game sound amazing so yeah so we have
[01:43] two audio designers want audio
[01:44] programmer on the show this week if you
[01:47] haven't yet left yesterday I'm inside
[01:50] star citizen we did a nice little kind
[01:51] of lifestyle piece updating on the life
[01:53] and times of Audio designers working for
[01:56] c IG today we are answering questions
[01:59] live about either sound design or sound
[02:03] programming we did put up a question in
[02:05] spectrum early this week to start
[02:06] collecting questions earlier so we're
[02:08] going to start with those questions
[02:09] while we go through these you can submit
[02:12] your questions for consideration into
[02:13] the twitch chat by pressing your
[02:15] question with the word question in
[02:17] capital letters surrounded by brackets
[02:18] I'll help us pull it out from all the
[02:20] other chat and of course remember if you
[02:22] want a good shot at your question
[02:24] actually being
[02:25] asked and then answered make sure it
[02:27] actually deals with audio design and
[02:30] audio programming and not is a not
[02:32] staging your question as a backdoor
[02:34] question to find out what when we're
[02:36] adding flora and fauna fauna to the game
[02:38] which one of the most uploaded questions
[02:41] in the spectrum thread was was basically
[02:42] one of those sitcom things or it's like
[02:45] yeah what kind of sounds you guys
[02:47] playing to do when you are at fauna to
[02:50] the game and what kind of funded you are
[02:52] you intend to work on first about when
[02:55] in your schedule do intend to work I
[02:57] mean it's like it's like okay your
[02:59] question was about fun it wasn't about
[03:02] but okay so right off the bat can we
[03:05] expect to be able to detect mechanical
[03:08] malfunctions or problems or disruptive
[03:10] components before they fail by audio
[03:12] cues basically you know obviously is
[03:16] more and more the component system comes
[03:17] online you know show regulators and and
[03:20] and generators and so like that as they
[03:24] wear down will there be subtle audio
[03:26] cues that people can listen to so that
[03:28] they know you know that rattle means
[03:30] something's not quite right like it's
[03:32] the performing okay right now but I
[03:33] maybe better go take a look at it yes
[03:36] that's definitely the plan the only
[03:38] stuff we don't touch sounds to any mmm
[03:41] components other than like thrusters and
[03:43] the quantum drive and stuff at the
[03:44] moment but as we start to add sound to
[03:47] power plants and life-support and
[03:50] avionics and marketing stuff they
[03:51] definitely will make sound from the
[03:53] location where the component is and
[03:55] based on the condition of the component
[03:57] and all arcane stuff its degradation
[03:58] level its help out how much it's powered
[04:01] on all that kind of stuff will
[04:03] definitely off sounds coming from those
[04:04] locations so you'll be able to tell
[04:06] roughly the state of it based off the
[04:08] sound we already kind of do this at the
[04:11] moment just based on the ship's overall
[04:13] health so the sound of all of the
[04:15] movement sounds on the ship and even the
[04:18] ambience of the ship now changes based
[04:20] on how damaged the ship is and we also
[04:22] turn off the vibrations when the ship is
[04:25] more damaged which is cool that was a
[04:27] relatively recent addition I think maybe
[04:29] three six yeah
[04:32] how difficult is it one of the things we
[04:34] talked about a night scene was how
[04:36] difficult it is to mix from multiple
[04:39] perspective because you can never quite
[04:40] tell where the player is going to be
[04:42] when you when you're when you're doing
[04:43] something like that when you're trying
[04:44] to communicate the health of an entire
[04:47] ship do a player through sound how
[04:50] challenging is that didi do you mix it
[04:53] for the pilot seat yeah lay as default
[04:57] yeah you start with the first-person
[04:58] perspective
[04:59] pilot seat you mix for that first I
[05:02] guess what with like a single seat a
[05:05] fighter you do you know you'd expect to
[05:06] hear all that stuff from just the pilot
[05:08] seat cuz there's no other no other
[05:10] perspectives really but um yeah it's
[05:13] quite a challenge really especially like
[05:14] first-person pilots see third-person
[05:16] exterior camera is all good but then
[05:19] testing it from like in a large ship
[05:22] like kind of getting like you know fly
[05:26] getting the ship to be flowing while you
[05:28] walk around it and check it sounds good
[05:30] from other rooms and stuff can be quite
[05:31] the Challenger and yeah you never really
[05:34] gave perfect people are started filling
[05:42] out the interiors of show like hey guys
[05:44] I'm on the bottom on the bottom here the
[05:47] components I'm Ariel weird noise you
[05:48] guys hear something yeah anything up
[05:50] there we're gonna have this we kind of
[05:52] want to have this idea of like different
[05:54] like think about what the engineer and
[05:57] the engine bay would think think about
[05:58] what the person in the drone Bay would
[06:00] think what the word would he have
[06:02] nothing but here what the you know the
[06:05] turret gunner needs to hear all this
[06:08] kind of stuff and then we've got like a1
[06:09] all these multi-crew things almost elyda
[06:11] fied then we've got like a list of like
[06:14] roles and think of an audio mix for each
[06:16] of those roles rather than just each
[06:18] room yeah
[06:20] what are the questions from the chat was
[06:23] where is the sound of flybys we've had
[06:27] players in the game for some time
[06:30] possibly yeah I would love to check and
[06:34] they were reimplemented as part of the
[06:37] new flight model quite a while ago and
[06:39] then I found a problem with them and fix
[06:41] that a little while ago and
[06:44] haven't checked them in a while and I
[06:47] know they've generally got a bit quieter
[06:48] and it takes a bit more of a kind of
[06:51] crazy flight maneuver to trigger the
[06:53] loudest one and maybe people aren't just
[06:55] aren't getting up to those kind of
[06:56] speeds and atmosphere anymore and we
[06:57] need to readjust fill up but yeah
[07:00] they're saying that they're basically
[07:02] been toned way down yeah like that
[07:05] I remember the Buccaneer flyby used to
[07:09] do just massively cool yeah big engines
[07:12] those big Drake engines are running by
[07:14] that's nautical but uh yeah you know
[07:16] that's one of the things that's
[07:17] continuously balanced and realist and so
[07:21] all right will we eventually get to hear
[07:25] the effects of our own voices in
[07:28] proximity boy for instance when we're in
[07:30] a cave we currently don't hear our own
[07:33] echo or reverb but we can hear everybody
[07:35] else's yet that is absolutely planned it
[07:39] does come with its own challenges
[07:41] compared with just hearing the effects
[07:43] on other players voices because other
[07:45] players voices we receive over the
[07:47] network and we can play the effects on
[07:49] them immediately in terms of the players
[07:51] voice you speak the game hears it and
[07:54] then the game applies effects and
[07:55] there's like an inherent latency in that
[07:57] and we we need to minimize that latency
[07:59] prevents it from being a kind of
[08:01] emergent breaking effect because it
[08:03] needs to be an effect adds to what
[08:05] you're experiencing doesn't take
[08:06] anything away from it
[08:07] so I expect we all need to create
[08:09] bespoke effects for the players that
[08:11] slightly different reverbs to what we're
[08:13] hearing when everyone everybody else but
[08:14] then ultimately feel the same you know a
[08:18] lot of the tech is already there we just
[08:20] need to spend a little time kind of
[08:21] tweaking it and making it do its thing
[08:24] yeah it's gonna be in there at some
[08:26] point we all sort of consider feedback
[08:28] right if you're hearing your own voice
[08:30] propagate back through the game and
[08:32] that's getting picked up on your
[08:32] microphone and then just going through
[08:34] again and so there's some practical
[08:36] limitations like maybe resulting people
[08:38] having to wear headphones more often you
[08:40] are the other thing where you struggle
[08:41] to talk because you hear your own voice
[08:43] slightly delayed you want to know that
[08:45] we won't be playing back your own voice
[08:47] because we're not trying to create a
[08:48] voice jammer here be adding yourself
[08:50] Reverb tailor your voice
[08:53] mmm-hmm in effects this appropriate to
[08:56] the area and it shouldn't be anything
[08:58] that kind of you know makes you feel
[08:59] like you're drunk okay the chat says
[09:04] sound seems to have been greatly
[09:05] improved in 30.7 thank you that was all
[09:08] me could you summarize the work that was
[09:10] done none of that was me you guys okay
[09:13] what you do in 317 well we start off
[09:16] with a massively talented all your team
[09:18] and the guys are really good at what
[09:19] they do and they'll see like issues and
[09:22] drip on hot fixes and stuff but
[09:23] primarily we're just supporting the
[09:25] upstream features and content that comes
[09:28] down the pipe and the tech and tools are
[09:31] constantly improving we work closely
[09:33] with fullier programmers so they helped
[09:35] was get sounds in more streamline the
[09:40] process and stuff so we can have more
[09:41] time to spend on iteration and stuff
[09:43] like that I think in the past few
[09:46] patches we've been reintroduced a lot of
[09:47] like dynamic mixing things didn't we so
[09:50] like you know we can learn if like in
[09:53] the past I think if there was like 25
[09:55] ships on screen at once you'd hear them
[09:56] all and it would just kind of become a
[09:58] bit of a bit of a mushy soup of sound
[10:00] and now you can you know we can focus in
[10:02] on the ships that are the most other
[10:04] closest to you or otherwise the most
[10:05] important and just play those ones
[10:07] mm-hmm so the rest of them down are all
[10:09] are kind of stuff so you hear it might
[10:11] seem it'll seem cleaner and more punchy
[10:14] when really there's just actually less
[10:16] stuff going on more focused mix yeah
[10:18] yeah so less is more approach which is
[10:20] partly about making the mix clearer and
[10:22] it's also partly about optimizing the
[10:23] game because we want to preserve your
[10:24] frame rate as much as we possibly can
[10:26] mm-hmm it's always a it's always a
[10:29] battle with resources really Chad says
[10:33] you didn't left has the best hair ever
[10:35] which left your left Milo you're on my
[10:40] satellite it's like you've got States
[10:43] right but yeah you were left so I don't
[10:45] know what he means Esther what one of
[10:46] you
[10:48] how does it sound Jared and it has the
[10:51] Harrison
[11:00] and see what else from the chat here
[11:02] what kind of changes are planned
[11:05] regarding dynamic sound adjustment based
[11:07] on how miss peer pressure
[11:08] like for instance sounds becoming
[11:10] quieter and more muffled as air pressure
[11:12] approaches zero so there's some work I'm
[11:16] going to improve the way that audio
[11:17] propagates through different areas and
[11:19] we have a system in game already which
[11:21] allows us to have different pressures in
[11:23] different areas so we can have a highly
[11:25] pressurized room and then a lower
[11:27] pressure atmosphere outside and then
[11:29] beyond that no air pressure as you leave
[11:31] the atmosphere and I'm currently working
[11:33] a lot of tech that's going to accumulate
[11:35] those effects and then apply them at the
[11:37] point where the sounds heard so we
[11:40] should be seen at some point over the
[11:42] next couple of releases I would say we
[11:45] should be seeing some great improvements
[11:46] on how the pressure path from the sounds
[11:50] of the player is represented by what you
[11:52] hear so if they have any bearing on size
[11:57] booms well I mean it has a bearing on
[12:00] everything because it's a it's a core
[12:03] sort of feature of the tech so it's
[12:05] gonna be applied to everything as far as
[12:08] the sound designers wish to use it so
[12:09] yeah I mean sonic booms are there a
[12:12] special case really because we don't
[12:14] actually we don't represent the speed of
[12:17] sound in the sense that you don't of
[12:19] hear things so much later after the
[12:22] event we have considered doing that at
[12:25] some point and we maybe will but then
[12:27] you know sonic booms are a different
[12:28] thing because we have different
[12:30] atmospheric pressures so it's not as
[12:31] straightforward as what it's a sonic
[12:33] boom on earth it's like a sonic boom can
[12:35] happen at completely different speeds
[12:36] depending on the atmosphere that you're
[12:38] in seems that every time that we do a
[12:41] audio base show that question comes up
[12:44] to some points yeah see if let me get it
[12:45] out of the way I would just get it out
[12:46] of the way right there let's see does
[12:50] the audio team know of any tech out
[12:52] there that could possibly make the non
[12:55] bespoke characters at admin desks and
[12:57] shops have more variation in their
[12:58] voices without having different actors
[13:00] for each one so basically the same with
[13:02] a sheer volume of NPCs you do anything
[13:05] to make their voices sound different
[13:08] besides just recording different people
[13:13] right now the answer is no we can apply
[13:18] pitching effects and filtering and
[13:20] things like that and it always just
[13:21] sounds unnatural so we like to stick
[13:23] with you know the quality of stars' it
[13:25] isn't the whirring for it we want it to
[13:27] sound real so we don't want to make
[13:29] anything that we have sound any worse
[13:31] than it already does and that's a
[13:33] terrible stain generate the audio at all
[13:39] what I should have said but we are
[13:41] always keeping on top of developments in
[13:43] machine learning
[13:44] ai and as soon as we feel like it's a
[13:48] good time for us to start to investigate
[13:50] that we certainly will because we know
[13:52] that yeah we've already got there the
[13:54] DNA tech that allows us to have a huge
[13:57] variety of different faces and we need
[13:59] to match that in audio somehow but the
[14:01] tech just isn't quite there yet Google
[14:03] are probably the only company in the
[14:04] world that has enough data to actually
[14:07] synthesize in a realistic way any voices
[14:09] but we will keep an eye on it and we
[14:12] will consider it any you know if at some
[14:14] point it becomes feasible for us let's
[14:18] see okay is there been any progress on
[14:21] how sounds will change over distance in
[14:24] different environments such as the sound
[14:26] of a gunshot being fired from the
[14:28] perspective of the person firing who is
[14:30] at the top of a canyon or some of this
[14:32] right now so first of the sound of the
[14:34] target would hear it was shot down
[14:35] inside the canyon yeah this ties in to
[14:38] the propagation tech that I was talking
[14:40] about before so in that instance once
[14:43] this tech is ready that sound will pick
[14:46] up the effects as it travels so the
[14:48] sound happening on the top of a canyon
[14:50] will pick up appropriate reflections for
[14:52] that area and then it will travel down
[14:54] into the bottom of the canyon and it
[14:55] will have those effects applied as well
[14:56] so if you hear it when you stood next to
[14:59] it you're going to pretty much hear just
[15:00] the sound of it on the top but if you
[15:02] have the listener down in the canyon
[15:03] you're gonna hear the accumulated
[15:05] effects of that sound traveling ships
[15:09] are getting new carpet display systems
[15:11] they're probably talking about the new
[15:13] annunciator panel stuff like that are
[15:16] you doing are we what are we doing to
[15:19] prove the ship sound effects for inside
[15:22] the conference as well to match the
[15:23] visuals well for this one we actually
[15:25] reached out to community in the speaking
[15:27] to an engineer from the Australian Air
[15:33] Force yeah and now but that was meows
[15:36] catfishing oh yeah it was not you let
[15:39] your Australian accent is also on point
[15:41] I'm and yeah we taught for like over an
[15:44] hour about the warning systems or audio
[15:46] systems you get in aircraft and stuff
[15:48] like that and historically we started to
[15:51] try and design a UI sound for every
[15:54] different type of UI notification you
[15:55] can get in a ship like missiles locked
[15:58] on to you you're locked in someone
[16:00] else's enemies nearby all that kind of
[16:02] stuff um and it becomes like a language
[16:05] that you have to learn and if we change
[16:07] that per manufacturer and per ship then
[16:09] you've always got a real learn its
[16:10] language and in in real life the
[16:12] aircraft have a very limited amount of
[16:14] audio warnings is like major all the way
[16:17] at major so minor 102 watch it and they
[16:21] Basie and that's where the non-si air
[16:22] power comes in it's like hey something
[16:24] critical you look down and then visually
[16:26] it tells you what the actual specific
[16:28] issue is so with the introduction of the
[16:30] enunciate plans it allows us to to clear
[16:32] that up and come with a very clear
[16:35] intuitive sound design to support that
[16:38] yeah I chat is asking about poop sound
[16:42] effects so we're going back to the
[16:43] thread will it be possible to disable
[16:48] enable some of the ships speech messages
[16:50] and/or used custom wav files for events
[16:53] like I can incoming missile what do you
[16:55] think like like people replacing the
[16:58] soundscape for the ship with custom
[16:59] stuff so we only did that with the the
[17:06] jukebox where the players could drop in
[17:08] their own yeah you could drop your own
[17:10] music in yeah and we don't offer that as
[17:12] a minute with ship speech we do I'm
[17:15] fairly sure you can choose the level of
[17:17] verbosity verbosity on the ship's B so
[17:20] maybe we can offer more options there
[17:21] yeah but yeah in terms of custom wire
[17:24] files that's not something we're
[17:25] considering right now but we never ruin
[17:28] hanging out surround sound is and has
[17:34] been very bigger and star citizen for a
[17:37] long time now to this person center
[17:38] channel is very muted and the
[17:40] directionality of sound isn't it all
[17:42] there
[17:42] what's wrong with starts that is to
[17:44] surround support and then they there's
[17:48] just a string of expletives here I won't
[17:50] read those long in showbiz yes so I we
[17:55] were developing a big focus on
[17:57] headphones and stereo and there wasn't
[18:01] too many considerations for testing and
[18:05] designing stuff for surround discreetly
[18:07] but recently there's a bigger focus on
[18:09] that we've got a stuff stuff with
[18:11] adhesive the 5.1 room with some really
[18:12] nice speakers and it's something where
[18:16] we're aware of the community is talking
[18:17] about it so now when we're testing
[18:20] things were highly acute of how things
[18:21] translate from from stereo and in 5-1 or
[18:25] because they are poorly rendered wise or
[18:27] scale up to whatever playback system
[18:28] you've got within reason right there's
[18:31] only so many configurations of those we
[18:32] can test but it's absolutely something
[18:33] we're aware of now you're talking about
[18:35] the new Apollo Apollo room yeah yeah
[18:37] actually that was actually wrong where
[18:39] we thumbed yeah ever I see acronyms man
[18:48] do we have any intention to allow people
[18:50] to communicate with others outside of
[18:52] the game for example people that are
[18:55] sitting on spectrum we've talked about
[18:57] the ability that is before making voice
[19:01] compatible with spectrum so that you
[19:03] could talk to people like okay what are
[19:05] you doing it's like I'm traveling here
[19:07] is whatever the oh okay well the hold on
[19:09] let me pretend not to work and then you
[19:11] jump in the game I think oh we've talked
[19:14] about chap communication between game
[19:15] and that what about voice chat I don't
[19:18] know Graham you're the voice dude
[19:21] well just off the top of my head
[19:24] our boy tech is detached from game
[19:27] servers and detached from the game in
[19:29] such a way that that wouldn't be
[19:31] impossible it's certainly not our main
[19:33] focus right now because we want to make
[19:35] sure the VoIP experiencing game is as
[19:37] good as it possibly can be and you know
[19:39] that's why a lot of the focus has been
[19:40] on making it die jet
[19:41] making all the effects work within the
[19:43] game but is certainly something that
[19:46] would be technologically possible and
[19:48] also I think it would add something to
[19:50] the game if we were to do that because
[19:52] you could effectively kind of you could
[19:54] have someone who's sat at a home playing
[19:55] in the game and someone else who's got
[19:57] the spectrum app on their phone and they
[19:59] could literally ice out on the train
[20:00] coming home from work and they could
[20:02] literally call each other I think that
[20:03] will be amazing so I think we should a
[20:05] bro my all's are yeah I'm a Manchester
[20:08] sender yeah I'm in the trade station
[20:11] I'll be there
[20:12] surely I mean you could essentially do
[20:16] that with third-party apps like discord
[20:19] now so it's one of those things when it
[20:22] comes to prioritizing it's do you
[20:24] prioritize something that is already
[20:27] available through a third party
[20:28] something or do you prioritize things
[20:30] that are uniquely star citizen is
[20:33] imagined as a difficult consideration
[20:36] yeah I think in order for us to we need
[20:38] to be competitive with discord in order
[20:41] for people to use our voice solution
[20:42] because they've they've got the option
[20:44] of just switching it off and using
[20:45] discord so you know obviously we have to
[20:47] consider those options if we want to be
[20:50] truly competitive the next question from
[20:53] chat is another one that comes up every
[20:54] time we do one of these audio shows
[20:56] bouncing out that one voice attack the
[20:59] possibility of doing our own voice
[21:01] activated commands mm-hmm have we made
[21:05] any progress and then further
[21:07] considerations on that at this point
[21:09] there has been some initial
[21:11] investigation into what tech would be
[21:13] required because this is star citizen we
[21:15] wouldn't want it to be anything but the
[21:17] best implementation a voice attack that
[21:19] it could be so there's a heck of a lot
[21:22] of work to get through before we can
[21:24] actually offer that in game but it is
[21:26] certainly something that's always been
[21:27] on chris Roberts wishlist and it remains
[21:30] in our backlog and at some point we will
[21:32] get around to it question from the chat
[21:36] said do you consider discrete audio
[21:38] components an essential aspect of star
[21:41] citizen and III don't know if they're
[21:44] talking about like but like people spend
[21:47] a lot of time you know you know building
[21:49] up CPUs and RAM and video cards and
[21:52] anything do you do would you consider
[21:53] have
[21:54] high-end audio equipment a compulsory
[21:59] thank for it to play star citizen Oh is
[22:00] like an audio interface and all yeah for
[22:03] the playback experience yeah I'm
[22:05] guessing that's what they mean there
[22:06] yeah I honestly would say no I would say
[22:08] if you've got a working audio system and
[22:10] a good set of speakers and headphones we
[22:12] need if you're gonna spend the money
[22:13] that's where I'd spend it on in the
[22:15] output medium generally you know sound
[22:19] cards or sound cards and they if they
[22:21] work they work and that's good enough
[22:23] and it's our job to make it sound good
[22:25] on the like very low-end stuff as well
[22:29] it should be a great experience and
[22:31] about water playback system is right
[22:33] yeah we'd like we've got recommended
[22:36] minimum spec and spends like ten
[22:38] thousand pounds on some studio monitors
[22:40] then we're sweet right no these leaders
[22:43] sound good all night you know why the
[22:45] lot of check logitech speakers or
[22:46] anything like that of the speakers are
[22:48] available or headphones so I have to
[22:50] make sure that we cater to that so he's
[22:53] asking about the ship voices know how
[22:57] many ship voices do we have in game
[23:00] right now how many different ship voices
[23:02] oh I don't know that's more of a
[23:03] question for Bob he's a dialogue lead
[23:05] but it's one per manufacturer so however
[23:08] many from manufacturers we have and that
[23:10] goes down to like consolidated Outland
[23:12] and Argo whoo and we have like a couple
[23:14] ships there they have their own yeah
[23:16] well everyone every money [ __ ] poorly
[23:18] should have yeah the questions about a
[23:25] comment that was made a long time ago
[23:27] about the possibility of switching those
[23:28] out basically like say you really prefer
[23:31] the Drake [ __ ] and Betty mm-hmm but you
[23:34] really want to fly your your
[23:36] consolidated Outland ship mm-hmm have we
[23:39] because where are we at with the any
[23:41] consideration towards being able to swap
[23:43] those well we could make it possible if
[23:46] we investigate into it rather than tying
[23:48] it to the ship it'd be like a a profile
[23:51] attached to the player kind of thing my
[23:53] ship component yeah yeah yeah we've got
[23:56] that we have the assets I'm sure we can
[23:58] build the technology to be able to swap
[24:00] out based on the question player but
[24:02] nothing would be investigated at the
[24:03] moment
[24:04] nope yeah there's like voice box can you
[24:07] feel it's not enough and I get off fader
[24:09] and joses the thing I've always thought
[24:12] the best a GPS voice we've been Gilbert
[24:14] Godfried because imagine him yelling at
[24:17] you when you when you miss your turn
[24:19] boy and bless you to be awesome alone
[24:20] yeah small you microphone before you say
[24:32] that question is actually it's too
[24:35] similar to it's about the do you plan
[24:37] the density of the atmosphere and
[24:38] compositional influence how things will
[24:40] sound us that's just like we had before
[24:41] yeah
[24:43] are you planning to change the sound
[24:44] signature kuan drives for each different
[24:46] model quantum drive we're already seeing
[24:49] some different visual effects with that
[24:50] required drives from different the bunny
[24:53] like how much differentiation do we want
[24:59] in the sound well if it's if it looks
[25:02] drastically different more and supports
[25:05] it and if there's different
[25:06] manufacturers and different lore and all
[25:08] that kind of stuff then while trying to
[25:09] pull it in line with what the law says
[25:11] and but recently we we've updated that
[25:14] et sounds because we we hadn't properly
[25:17] supported shorter QT jumps because of
[25:20] all these like slingshot jumps and stuff
[25:21] like that so we've rewrote that to make
[25:23] it sound a bit better and but yeah if it
[25:26] actually is different in the game then
[25:27] we'll support it and give it a different
[25:29] sound for the folks that are asking UI
[25:33] questions those are for the UI team and
[25:35] not for the C I'm gonna ask this
[25:43] question mm-hmm cuz I'm curious what
[25:45] your answer is
[25:47] what's up with the garbled intercom
[25:49] public announcement messages and all
[25:51] those are who wants to take that one I
[25:57] deny that so we'll talk about it
[26:00] something mysterious seems to be
[26:02] happening that's all we know everybody
[26:04] seems like it's related to something
[26:06] though yeah nobody willing to put the
[26:08] job on the line don't put me in that
[26:12] situation there is okay
[26:14] that's the path I'm something cool let's
[26:17] see how do you silence a laser this is
[26:23] for question two there yeah what you do
[26:27] is you take something is it inherently
[26:28] styling anyway sound cool and then the
[26:31] there's a feature request support
[26:32] silence tears on energy weapons there we
[26:34] go okay why do these silences cuz you
[26:36] made them sound loud right but yeah
[26:41] you've got ballistic weapons got energy
[26:44] weapons needs it sound cool and stuff
[26:46] like that and for gameplay reasons if
[26:47] you need it you've silenced one you use
[26:49] BOTS answers on the other and stuff like
[26:51] that so you know if we had how think
[26:53] would be fun if you had energy weapons
[26:55] that were completely silent you've been
[26:56] walking around and then just headshot
[26:58] down at the old counter-strike days
[27:00] where you just don't have a chance and
[27:02] so basically you need needs it sound
[27:04] cool and then we need for gameplay
[27:06] mechanics need to put silencers on them
[27:08] and make them sound silent so we look
[27:10] cool I've got the bet I got the fault of
[27:13] that how can we hear sounds in a vacuum
[27:17] I'm just gonna well what we want is to
[27:28] create a cool thing right and you have a
[27:30] rule of cool like Star Wars cinematic
[27:33] stand in space but you've all got the
[27:35] full spectrum of like also game dance
[27:37] like the the film gravity where's all
[27:39] that contact stuff there's no sound
[27:40] propagation in space so we got to make a
[27:42] game that's fun and but what we're
[27:44] playing with at the moment is the
[27:45] concept of sound simulation so there's
[27:49] already current technology there's a
[27:50] great TED talk where they've got this
[27:52] high speed high frame rate camera and
[27:54] they can they filmed a leaf
[27:57] there's no microphones on it and next to
[28:00] the leaf out the shot was a loud speaker
[28:02] playing mary had a little lamb and
[28:04] there's an algorithm that they run this
[28:06] footage through and they can recreate
[28:07] the sounds from the vibrations that they
[28:10] filmed on the leaf which is awesome so
[28:12] we thought that's some great in law like
[28:15] explanations for why we can hear sound
[28:16] in space so a plane with the idea of
[28:18] having this sound simulation unit
[28:20] component in your ship it all unwise
[28:22] light waves and vibrations and then play
[28:24] back what you would
[28:26] sound like in a pressurized environment
[28:28] so that's how we can justify hearing
[28:31] sounds in space boy it also gives us the
[28:33] ability to say like okay well that's
[28:35] half the full spectrum that's not a cake
[28:36] and eat it too so that's how the gravity
[28:37] asked sound arrangement and the full
[28:39] Star Wars stuff so you're flying around
[28:41] space bars all cool you can hear
[28:42] everything you know where everything is
[28:43] behind you all that kind of stuff and
[28:45] then you get a impede and they look so
[28:48] cool and then you just all you hear is
[28:50] your ship and you see all the stuff
[28:52] going on the actually you can't hear it
[28:53] and that's terrifying so again it makes
[28:55] you feel really like isolated alone and
[28:57] vulnerable because all you're hearing is
[28:59] your ship just creaking you're this husk
[29:01] and so all you stuff powers up and you
[29:02] get that a sense back again so that's
[29:05] how we kind of justify it yeah we got to
[29:07] play it so we can take it away
[29:08] interesting gameplay reason CR has been
[29:16] known you know over the years to say
[29:19] something along the lines of you know we
[29:20] take things to the point of realism
[29:22] mm-hmm then we bring them back to the
[29:23] point of fun mm-hmm you know it's at the
[29:25] end of the day you know it
[29:28] video games are an entertainment medium
[29:30] they're meant to provide us an
[29:32] entertaining experience and yeah going
[29:35] through the entire game in muted silence
[29:37] would be pretty tedious but giving it to
[29:41] you you just said a few minutes of
[29:42] giving it to you so that we can take it
[29:44] away at key moments though is that it
[29:46] aspired as an inspired choice and I like
[29:48] that a lot all right
[29:52] will there be sound bleed through walls
[29:55] again this comes back to the propagation
[29:58] work that I was talking about earlier so
[29:59] the plan will be that if there's a an
[30:02] open path for a sound to travel to you
[30:04] you will hear it through that path but
[30:06] if the doors are all closed you probably
[30:08] will want to hear it sort of muffled
[30:10] bleeding through the wall it's a tech
[30:15] that I don't have working yet but it's
[30:16] definitely on the plan so yes though
[30:18] will there I've said it
[30:20] what could imagine is that scene from
[30:21] The Shining was the blood pouring I
[30:23] elevates it with sound bleeding through
[30:24] the walls but yeah yeah once I had a lot
[30:28] more like positional detail and like
[30:30] kind of you know confidence for the
[30:32] players in you know localizing where
[30:34] someone else is near them
[30:36] you know kind of thing yeah much like an
[30:39] omission my FPS machine video coughs not
[30:41] being in here
[30:42] yeah people in the next room get my room
[30:44] but through the pole through the doorway
[30:46] over yeah it'd be really good
[30:49] interesting question from the chat gran
[30:52] were you aware of anything like
[30:53] ray-tracing which is all the rage right
[30:56] now yeah prevent but for sound yeah I
[30:59] mean it can be done you can you can
[31:01] retrace and pick up you can read trace
[31:03] and pick up the materials from the
[31:05] reflections and you can figure out sort
[31:07] of what effect those materials should
[31:09] have you know a bumpy material should
[31:11] make the sound more diffuse or as a
[31:14] solid reflective surface would do
[31:16] exactly what it expected we may be very
[31:18] reflective in terms of audio as well but
[31:22] that's the kind of thing like in the
[31:23] audio team tech like that would always
[31:25] be something that hangs off the visual
[31:27] tech so really we gotta have the ray
[31:30] tracing on the visuals before we can
[31:31] think about having it on the audio so
[31:33] that's where we are one of the questions
[31:36] do you plan to add a mixer audio mixer
[31:40] so that we can balance our own audio
[31:42] features by basically breaking down a
[31:45] bit break banging down on the discreet
[31:47] audio options so that people can adjust
[31:49] their own mix I'm against the idea I
[32:06] think if we were to give you say like an
[32:09] ambience lighter a Foley slider weapon
[32:11] volume slider and all that stuff then
[32:13] they would allow people to get a
[32:14] competitive advantage over the people by
[32:16] just you know turning down the ambience
[32:18] boosting the Foley boosting the weapons
[32:20] and turning about everything else
[32:22] yeah and importantly making the game
[32:23] sound terrible in favor of those trying
[32:26] to get a contest
[32:33] no I just think if we've done our job
[32:37] properly and you know we've created a
[32:38] really really good mix then people who
[32:40] won't have any need for that in the
[32:42] first place so we have toyed with the
[32:45] idea of having sound profiles that like
[32:47] saying I'm not the cruise ship based on
[32:48] role and stuff like that so if your
[32:50] pilot you'll hear a certain set of a
[32:52] certain mix if you're an engineer but
[32:54] you're different you know just tailoring
[32:57] the sound experience to whatever the
[32:59] role is if you're in a seat and stuff
[33:00] like that well giving them given the
[33:03] back is on players at full control over
[33:05] the mix may not be the best way what
[33:13] what's that affected you have to spend
[33:15] the most time getting just ready
[33:18] what's your LWOP oh what's your white
[33:21] whale what's the sound effect that
[33:25] nearly killed you the Bonnie defender
[33:28] yeah yeah that's quite a while yeah just
[33:34] yeah because we've never made a bunny
[33:35] ship before and there was nothing to go
[33:37] up there's no previous work to look
[33:39] under all right that's that's how it
[33:41] that's the ballpark of what this one
[33:42] should sound like it huh takane oh yeah
[33:44] come up with from scratch so we did like
[33:46] a design spec brief yeah you know
[33:48] they're tribal cheap you'll arrive
[33:49] you're understaffed
[33:50] yes first apartment live and all stuff
[33:52] is prepared for alien yeah it's not like
[33:54] property it's not normal thrusters and
[33:56] it's likeéoh exactly its proper alien
[33:58] yeah you did a great job
[33:59] there's not one you know one moving part
[34:00] wasn't there and I was just like one
[34:08] week of like Tara have been like can I
[34:10] come in am I am ia good sound is that
[34:12] can I do this how do you how do you make
[34:23] some of this never been made before
[34:24] what do you reference this has no
[34:27] reference yeah we talked a little bit
[34:29] about that it didn't quite make it in
[34:30] the episode but in the interviews we
[34:32] talked about that that sometimes the
[34:34] hardest thing is the complete unknown
[34:36] it's it's it's being being suffocated by
[34:40] possibilities
[34:41] yes no there's a great phrase the iOS
[34:43] refer back
[34:44] - and it's if you if you go if you get
[34:46] given a completely clean slate do
[34:48] anything you want it's being paralyzed
[34:50] by the possibility of infinity so if you
[34:53] sit there you can blue sky thing you can
[34:54] do anything you want you go where do I
[34:56] start where do I begin
[34:58] but if you're giving like some
[35:00] restrictions you can find creativity in
[35:02] their adversity breeds creativity
[35:03] absolutely when I first joined the
[35:05] company the Audion doctor at the time
[35:08] was like right got this mobile glass
[35:10] system and we need I could fall UI sweet
[35:12] and now with the UI stuff it's like it's
[35:14] like a language like positive negative
[35:16] good bad you know happy sad kind of
[35:18] stuff and tracking movement and I was
[35:21] like man I suck at you I like don't make
[35:23] me do design go back exactly why you
[35:25] should do it and I was like right so
[35:27] it's playing with loads of sin so making
[35:29] it sound or sci-fi and swishing and
[35:30] stuff was like now that sucks and what I
[35:33] did it was called Moby glass so I
[35:35] thought as well clever and got loads of
[35:38] sample libraries of like glass breaking
[35:40] cracking like screech and all that kind
[35:42] of stuff I said I'm gonna use this as my
[35:43] source and only that to generate all my
[35:46] my sound effects further Moby glance and
[35:49] I got some really good results for the
[35:51] first pass and stuff and I took it's a
[35:53] lot of directing it's like yeah that's
[35:54] great it's just you got all these
[35:55] frequencies in there you don't need for
[35:56] you I am oh okay then Rebecca nice pen
[36:00] probably two weeks solid just doing this
[36:02] UI system it said all right it's not
[36:05] about you I'm doing later I started for
[36:06] the that's what I did for the van to
[36:07] defend it was like when I realized I was
[36:09] struggling just kind of sat and found a
[36:12] bunch of sounds that I thought were
[36:13] obvious it and like all in the same
[36:16] ballpark the same kind of aesthetic and
[36:17] then put them in a folder and I might
[36:18] have got to do this just with these yeah
[36:21] like the odd exception where like so
[36:22] actually so when you're given a fairly
[36:24] wide open task that the thing that work
[36:26] best for you was actually to constrain
[36:28] yourself when you when you're when
[36:32] you're forced into constrictions and and
[36:36] working within what's possible and so
[36:38] that you get Star Wars when you can make
[36:40] anything that you want with with no
[36:42] limits you get been a menace
[36:43] yeah pressure makes diamonds right yeah
[36:48] well I mean I cover the answer that one
[36:51] because I don't I don't make sounds I
[36:53] just make sounds happen so was there
[36:56] anything one in you
[36:57] make happen you beat your head against
[36:59] it well yeah I guess there's you know
[37:01] sometimes we get asked to create effects
[37:03] and one of them recently was we're gonna
[37:06] be doing a distress call thing I think
[37:08] and then the idea was to make that
[37:11] distort in a new and interesting way
[37:13] that kind of reflects that it's
[37:15] difficult to reach and this kind of
[37:16] thing so that was a fairly open task but
[37:22] then you know having said that there's
[37:24] only so many ways you can distort a
[37:25] sound so but just I just make them all
[37:28] available players like rubber band
[37:30] design something that we're like you
[37:31] write as a plugin no plugins that we all
[37:33] buy and use you just wait for I'm sure
[37:36] gross we should take it's much cheaper
[37:38] just to write once have you had a quick
[37:46] question repeat it I lost it it just
[37:48] passed by too much well voice modulators
[37:51] for like bounty hunters or criminals
[37:53] people who want to disguise their voices
[37:56] in the game good thing mm-hmm
[37:58] well we can like push for an unlock
[38:02] where we just get the players go
[38:03] it's really and but that was I would tie
[38:08] into the like voice propagation stuff I
[38:11] bands it enemies avoid feature
[38:13] potentially and I think it would be a
[38:14] very interesting one to implement and so
[38:17] you know because I find it interested as
[38:18] a task I'll probably do it but I just
[38:22] thought the point on that you know the
[38:23] one they do in all the movies where they
[38:24] put a cloth over the telephone that
[38:26] doesn't work at all all those blackmail
[38:29] calls you will there be different sound
[38:37] zones and big ships with sounds changing
[38:40] depending on how close or far away you
[38:41] are from certain systems that's
[38:45] basically yeah you already do that right
[38:47] not point to a point yeah yeah like we
[38:51] have the ambience and the ambience of
[38:53] the ship like so not not the movement
[38:55] sounds not the thruster sounds they're
[38:57] kind of built up in layers of like a
[38:58] kind of dead ambience for the room and
[39:00] then like
[39:01] kind of distant details and then really
[39:04] close up details but when we have sound
[39:08] on each component and stuff that will be
[39:10] yeah like they'll be like the kind of
[39:12] rough vibe of that component being in
[39:15] the room and then as you get closer to
[39:16] the actual thing then you'll hear all
[39:18] the kind of details of it all that also
[39:21] ties into the plans to have like
[39:23] different mixes per room for each kind
[39:26] of roll and like a multi cruise ship so
[39:28] yeah they'll be like different sounds if
[39:30] you're in the engineering room there's
[39:31] will be a certain set of things that you
[39:33] need to know about as the engineer that
[39:35] the pilot doesn't need to know about
[39:36] that the turret gunner doesn't need to
[39:37] know about this kind of stuff
[39:39] we're also tying it together with saying
[39:41] like the load and offload of like the
[39:43] thrusters and engine power plants and
[39:45] stuff how if you're if you go full
[39:47] throttle
[39:48] then all the ambiences and tones can
[39:50] change slightly based on the load on the
[39:52] ship and stuff like that so you can mean
[39:54] the bridge by giving it full throttle
[39:57] and then the guy in engineering would
[39:58] hear all this stuff changing it in in
[40:01] relationship to the throttle and stuff
[40:04] also if submitting your question on caps
[40:08] and I am I gonna read it I see so many
[40:10] caps it just goes right on by guys why
[40:15] is there a little bit no warning I'm
[40:17] being locked on and fired at such as
[40:19] alarms the sound of bullets flying past
[40:21] the ship help me I get shot a lot I need
[40:23] help maybe pilot better throw now again
[40:28] looking the introduction of the
[40:30] annunciator panel and stuff were looking
[40:32] to really clean that up because a lot of
[40:34] those UI notifications are really legacy
[40:35] and we just we transfer when we moved
[40:39] from F mod to wise a lot of them were in
[40:41] place there and I designed some of them
[40:43] there's one that sounds like a squealing
[40:45] pigs like we people hate it it's still
[40:47] in there and but yeah so a lot of those
[40:51] UI sounds are legacy and we'll get
[40:52] around to them but the trouble is we're
[40:54] constantly adding features and abilities
[40:56] to ships and stuff like that so when we
[40:57] when you can need a finite set of
[41:00] everything we need to support and we
[41:01] strip it back down to the major moderate
[41:04] and minor kind of warning stuff then it
[41:06] would be a lot more lot not cleaner I
[41:07] think one of the problems of the
[41:08] there's too many different sounds you
[41:12] know norm learn the language of it
[41:13] curses like 12 different there's a
[41:15] different completely different sound for
[41:17] every different yeah I think that goes
[41:18] wrong
[41:19] yeah like simplifying that down so yeah
[41:21] like you don't really need a look at
[41:24] this but it's happening kind of thing
[41:25] like you should look at this and
[41:26] something really bad has happened and
[41:28] following that with really a really
[41:30] quick voice a voice message yeah that's
[41:33] a really good points we got a dialogue
[41:35] assets to convey messages buy the [ __ ]
[41:38] from waslley of what the situation is
[41:40] we've also got the UI notifications of
[41:44] what the hoods telling you is happening
[41:45] and then we've also got the sound
[41:46] effects of what's happening and stuff
[41:48] like that and sometimes they're all
[41:50] stepping over each other and some
[41:52] dialogue assets you know that's you long
[41:54] for the the action like proximity
[41:57] warnings like danger you're about to
[41:58] crash into something on the left and
[42:00] then you've already done it kind of
[42:02] things so just deciding what needs voice
[42:05] what needs sound effects and what needs
[42:07] UI and you know they're like diegetic
[42:11] warnings like you're getting shot at and
[42:12] stuff or something that we're constantly
[42:13] changing the mix of and trying to get
[42:15] right like you know for like you know
[42:19] the sound of bullet whizzing by the ship
[42:20] and the sound of impacts and stuff like
[42:21] how loud should they be how loud should
[42:25] friendly ships be or near you versus
[42:27] enemy one zone like should the one that
[42:29] you're targeting be louder or the one
[42:31] that's targeting you be louder and all
[42:32] this kind of stuff like we're constantly
[42:34] trying to find the sweet spot with that
[42:35] yeah we are pushing to improve that
[42:38] whole experience as a pilot in a ship in
[42:40] star citizen because you know for a long
[42:42] time we're we a lot of the time we find
[42:44] ourselves supporting every single
[42:46] feature and then moving on to the next
[42:47] feature and and now there's a bit of a
[42:49] push to look at that experience as a
[42:51] whole and improve it and make it much
[42:53] better gameplay experience does that
[42:55] extender things like the the breathing
[42:57] sounds notice sometimes when I'm just
[43:02] you know just flying I'm on combat I'm
[43:04] just you just fly on my way I'm in a
[43:07] green zone yet not a care in the world
[43:09] and my characters having an asthma
[43:12] attack your character has asthma that's
[43:14] well I have yes so when you when you
[43:20] hear breathing you actually hear
[43:21] me so that's all those breeding assets
[43:25] all recorded by myself that's right they
[43:29] were amount of times they threw up or
[43:33] passed out recording that yeah so a
[43:34] fundamentally right now we've got to
[43:37] breathing sets style sets sweets to
[43:41] breathing sweets we've got normal
[43:42] default which is like fps evn stuff then
[43:45] we've also got piloting and the piloting
[43:50] set has its own set of logic and the
[43:54] main thing that really drives it up and
[43:55] down our that faster or slower breathing
[43:58] is g-force and stuff like that hmm
[44:00] so if they changed the flight model or
[44:02] you make some ships faster and others
[44:04] basic I've got one breathing sweet honey
[44:06] too because it's not systemic yeah and
[44:08] so like you know can you how many G's
[44:10] can you pull and stuff so like I think I
[44:12] had to nerf it a bit because we're just
[44:15] driving away to quit when the new flight
[44:17] model came out we have to quickly
[44:19] quickly adjust it because the character
[44:21] was just freaking out all the color AGA
[44:25] AGSM so anti g-force training maneuver
[44:28] and you'd love to in takeoff yeah it's
[44:41] constantly being tuned and dialed in and
[44:43] stuff and then just brought down in
[44:44] volume because it I thought was really
[44:46] cool and my infuriating and stuff bring
[44:48] the breathing up a little bit just to
[44:49] give you that kind of isolationist feel
[44:51] like you really vulnerable the stuff but
[44:52] yeah we didn't know if it was gonna work
[44:54] out very well because you're the player
[44:56] right I am playing the game and II don't
[44:59] want the sound of someone breathing for
[45:01] you it's like when I've been the voice
[45:03] stuff you want you want to talk in the
[45:05] game if you have like emotes where a
[45:07] dolla boy is playing for your character
[45:09] and calcium disconnect there and we
[45:12] didn't know if it was gonna work or not
[45:13] but actually turned out to be a pretty
[45:14] useful feedback mechanism just got this
[45:16] terrible idea of like during character
[45:18] creation having to sit there record a
[45:20] bunch of a bunch of character sounds as
[45:22] if our character creation sounds strange
[45:27] more see everybody record their own
[45:30] strange sounds now we've actually shared
[45:34] before that you did that you did the the
[45:36] actor feature voices sound sound effects
[45:40] for the for the male model yeah we
[45:42] haven't shows that you also did the
[45:43] female I didn't do the female model bugs
[45:47] that we had the male breathing set for a
[45:50] while and I we got some female audios
[45:54] female staff - are there plans for the
[46:06] sounds of canopy impacts such as debris
[46:09] rattling against the glass or whatever I
[46:12] get an asteroid field there's no way
[46:13] that you have to already have that that
[46:17] might be a sign it's too quiet yeah yeah
[46:21] I mean yeah we really have we have that
[46:22] now for when you blow up when their
[46:24] ships been blowing off we have like a
[46:25] zone like extends from the point of the
[46:29] explosion and if you find yourself in
[46:31] your ship in our zone then you get
[46:33] debris impacts depending on how long it
[46:35] was since the like how dense the debris
[46:38] would be at that point basically we
[46:40] could have extend that to like random
[46:43] ones in the middle of an asteroid field
[46:45] and all that kind of stuff we're ship
[46:46] hasn't blown up yet no that would be
[46:47] cool to have well there's two cap
[46:49] considerations that either we can tie
[46:51] into was actually how many in the game
[46:53] is is there any particles over the
[46:55] effects are impacting with the ship or
[46:57] do we just imply that you know explosion
[47:00] goes off when an asteroid field those
[47:01] conditions are true plane debris can
[47:04] sound so yeah I think I've become poorer
[47:08] on them every particle there's like
[47:09] interest intersection with a ship and
[47:11] stuff I'll just be I'll be notes now I I
[47:15] know that the three of you don't
[47:17] necessarily work with the music but does
[47:20] the music ever affect sound design like
[47:24] do you ever do one thing and then when
[47:26] you hear the music come in like oh
[47:28] that's the music that the procedural
[47:30] systems gonna play during this like oh
[47:31] maybe we want something that it's more
[47:33] in line with that do you it's where you
[47:36] go does the tail wag the dog I'm guess
[47:37] is what I'm asking
[47:39] you've got two different types of meat
[47:40] you've got digesting and non-diegetic so
[47:43] diegetic is
[47:44] like in the location like radio or PA
[47:47] system stuff like that so that would be
[47:48] affected propagation or like in a stuff
[47:50] you shoot a speaker or it'll destroy and
[47:53] stuff but then you've got the score we
[47:55] just kind of got music non digest it now
[47:58] they don't really into like one would
[48:01] have really caused another one to
[48:02] trigger necessarily but music
[48:04] dynamically switch is based on the
[48:06] intensity all that kind of stuff and the
[48:09] main way they interact is probably more
[48:10] with a mix so what you can do is
[48:13] dynamically meter the frequency spectrum
[48:17] of the sound effects and if you deem
[48:19] that sound effects be more important you
[48:21] can bring down those frequencies in the
[48:22] music so you can own carving out
[48:24] frequencies in the music to allow the
[48:26] sound design to poke through or
[48:28] conversely you can have it all the way
[48:29] around so if you are certain frequencies
[48:31] in the music you want to emphasize you
[48:33] can bring down their sound effects to
[48:35] accommodate that I think we also have to
[48:37] be careful that overly tonal sound
[48:39] design as well sometimes like you know
[48:41] if like there's the cinematic music for
[48:43] coming down to a certain planet and you
[48:46] know you happen to do the background
[48:48] planetary ambience without plumb it with
[48:50] a slight tonal element that is like half
[48:52] a step below the key of the musical or
[48:55] less than half a standard sound a bit
[48:58] funky I want to do a dramatic
[49:01] reenactment of how I imagined this
[49:03] backyard is asking this question this is
[49:04] a question from piss-poor Pete says why
[49:09] why did you say just make the larval
[49:13] tram door opening noise so similar to
[49:16] the sound of a grenade dropping in
[49:18] counter-strike it scares me every time
[49:38] when opinions of Phil Pierre Smallwood
[49:42] do not represent those of clarify Robert
[49:44] space industries or its subsidiaries I
[49:46] got you toast
[49:49] I mean it yes who did the Laura Beltran
[49:52] door opening you call it if it's the one
[49:56] I'm thinking of I think it was Barney
[49:58] Barney yeah apparently these all weapons
[50:01] there is like everything there's a
[50:08] gunshot that Archie used loads of gun
[50:13] mech sounds for all the mechanisms and
[50:16] stuff I think minigun for that need to
[50:20] get a gig for the doors tracking is that
[50:22] a speaking of the tram door sounds why
[50:25] don't they play a little chime before
[50:27] they're about to close so that people
[50:29] know when they're running as close to 12
[50:39] minutes
[50:41] we should watch the video I was on
[50:46] intuitive designers liked about
[50:48] accessibility for the people who are
[50:49] visually impaired and it was how audio
[50:52] can assist people in the real world and
[50:54] it was talking about elevators so you
[50:56] know the bombs you get if it's one bong
[50:59] it's good the elevators going up or down
[51:01] or two bongs yet the other way the other
[51:04] way so you can get an elevator not be
[51:06] able to see and you'll know which way
[51:08] the elevator is traveling yeah that was
[51:09] awesome so bringing those cow elements
[51:12] into the game would be great what are
[51:16] three bombs that we have on some elevate
[51:21] so we could have the bombs on the door x
[51:22] variable I think it's always different
[51:24] so plug on the question for this shot
[51:33] elevator music
[51:36] [Music]
[51:40] please hold we absolutely it's not the
[51:48] highest priority we got all the know
[51:49] it's like I said we need arrived all
[51:51] these new locations coming online it's
[51:52] like you're spending a lot of time in
[51:54] the elevators you should probably miss
[51:56] him quite a lot of game there get out
[51:58] get out
[52:05] it's true okay thank you back we
[52:10] absolutely do there was a time when
[52:13] elevators were the number one killers of
[52:15] star citizens everywhere
[52:16] no I actually true story Pedro once
[52:19] asked me if I'd be willing to sing for
[52:21] elevator music really I said yeah sure
[52:24] but if I said I need something in the
[52:26] style of Girl From Ipanema and he he got
[52:30] actual work with workers - yes nice to
[52:35] have and why not - you have to focus on
[52:37] right now the task still exists probably
[52:39] yeah running around a big ship can be
[52:42] exciting especially if running into dark
[52:45] of shady quarters how do you make these
[52:46] kinds of areas feel rusty creepy little
[52:49] places Josh yeah we just just kind of
[52:56] spent we spend a lot of time in in the
[52:58] level kind of getting a feel for it and
[53:01] thinking of like what the player should
[53:03] feel when they're in those kind of
[53:05] environments um guess it's just a lot of
[53:11] us it's rylynn everybody kind of this
[53:14] yeah that you you know try something out
[53:15] and then go through the whole process of
[53:17] walking around the ship and you know
[53:19] going from one place to another and
[53:20] seeing if that feels right and yeah it
[53:24] was a basic concept for say a space a
[53:26] room a corridor Journal and you would
[53:29] dress each corner with an audio trigger
[53:32] spot and then have one in the center or
[53:34] like an audio area ambience it's got a
[53:36] bed ambience and they each kind of
[53:37] corner would sound slightly different
[53:39] and you basically static the way it
[53:41] looks you know and even save even
[53:44] support the same sound in each corner
[53:45] right and but this sides dark you could
[53:48] pitch it down a little bit and just I
[53:50] you know guide the players subconscious
[53:51] on
[53:52] I'm this company and you're gonna head
[53:53] something cool over here we'll have
[53:54] something trigger every like you know 10
[53:57] seconds or something and there's what's
[53:59] really cool about her means is you can
[54:00] apply imply stuff that's behind the
[54:02] walls everything yeah I'm so if I if
[54:05] you're walking down this like its
[54:06] corridor corridors Josh I'm this like
[54:09] pipes in stuff I thought you can just
[54:10] allude to stuff being on the other side
[54:12] earlier if it's like habitation someone
[54:14] have an argument but you know in the hop
[54:17] next door to you in stuff like that
[54:18] Toronto we answered that question
[54:20] earlier in the show you we only catch it
[54:22] on the replay either here on Twitch or
[54:23] on you do Koval have been asking to the
[54:27] show now that this is a design question
[54:29] it's a thing for shift is like ship
[54:31] design it's not for you guys but I want
[54:32] to get your opinion on on whether you'd
[54:35] like to see it some of people have been
[54:37] asking about the ability to have
[54:40] shipboard megaphones so like project
[54:42] sound out like I've been pulled over by
[54:45] the cops hey go over right now you know
[54:48] that's an awesome idea I'm gonna go back
[54:51] and create the task straight after this
[54:52] finishes because that I would play with
[54:55] that how would it properly the space
[54:56] Graham
[54:57] well you know that's no yeah that's a
[54:59] question we can overcome later isn't it
[55:01] let's concentrate on the ship horns as
[55:04] well somebody was asking for horns I
[55:07] made me been in the question thread they
[55:10] want to solve and then there should be a
[55:15] bunch of different ringtones we should
[55:18] sell them right so yeah I saw a video
[55:25] recently of somebody approaching a few
[55:27] guys who were on a planet and they were
[55:29] flying down towards them and they were
[55:31] trying to speak to them but they didn't
[55:32] have a mechanism for that and I think
[55:33] this of ship loudspeaker thing is a
[55:35] really good idea yeah yeah we're like
[55:38] tahno system in ships anyway don't we so
[55:40] it's not too far away from that yeah
[55:43] yeah I just want I don't want to be able
[55:44] to pull up in my and my drake Cutlass
[55:47] and hit a button in la Cucaracha
[55:49] [Music]
[55:52] RocketBallz should just take your on the
[55:54] sky let's see we are almost at a time
[55:57] gentlemen why do the helmet notification
[56:01] sounds sound like air escaping from my
[56:04] spacesuit now why do they last five
[56:06] seconds why not just a simple Dame or
[56:08] beep but n people getting confuse of
[56:11] elevators one thinks oh no I don't know
[56:14] I don't know which which none of it that
[56:15] one is you guys then yeah it's just the
[56:20] generic visor notifications yeah I don't
[56:24] well tastes probably that long to match
[56:27] the visual yeah if it sounds like air
[56:31] escape analysis it needs to be sorted so
[56:33] everything whoever sent that in does
[56:36] like put a post up on the spectrum of
[56:39] all our people take a look at it can you
[56:42] list any ongoing issues that you're
[56:45] focused on fixing in the short to medium
[56:47] term well we all have bug lists that
[56:52] we're working our way through and you
[56:54] know if you find bugs while you're
[56:55] playing please report them yeah we're
[56:57] just we have a certainly in my case a
[57:01] rather large list of issues that I'm
[57:03] working through and to list them would
[57:04] certainly use it a lot more than the
[57:06] time we have left
[57:07] yeah but I mean you know I've talked a
[57:11] little bit about the the propagation
[57:13] system that I'm working on and I think
[57:14] that is a big issue that the game
[57:15] suffers from right now is that audio
[57:17] doesn't propagate properly so if that's
[57:18] something that we talk about brings back
[57:20] like yeah I this this goes along a lot
[57:32] of these questions had to do with sound
[57:35] propagation and atmosphere yeah it's it
[57:37] seems to be a thing that has captured
[57:39] the imagination of our backers with a
[57:42] sound of damaged ships think missing a
[57:44] wing or a hull breach or whatever create
[57:45] different sounds flying through
[57:47] atmospheres like whistling noises they
[57:49] already do like they get more rattling
[57:51] and more vibration II and
[57:52] the health level changes the sound of
[57:54] the foots and stuff but you know
[57:56] implying some sort of like hull breach
[57:58] or that kind of thing
[57:59] be really cool like me here like it
[58:00] whistling behind a panel where they used
[58:02] to be a wing but now it's just open to
[58:03] open to the air because the damage
[58:06] system is quite dynamic different bits
[58:08] can come up it's not like you get 25%
[58:11] damage and you lose a wing
[58:12] yeah afternoon we in audio don't like
[58:17] you know there's no I don't know what's
[58:19] going we just know like it's not at full
[58:21] health wait if there are like like here
[58:23] are items like wings there are something
[58:26] that changes the fundamental
[58:28] aerodynamics of the ship if we could tie
[58:31] into whatever values that the wing is
[58:32] now gone equals treatment thing then we
[58:34] can start introducing audio specifically
[58:37] and they'll be like feedback the
[58:38] degradation stuff like hey your your
[58:40] your ship sounds like it's batted oh
[58:42] that's the sound of my wing that's gone
[58:44] so you can learn the whistles or the
[58:46] rouse and stuff like that be cool it so
[58:48] it's all stuff we wanna do yeah damage
[58:51] really I saved you like 95 percent
[58:54] damage and you trying to come in get air
[58:56] table as if weather the turbulence
[58:57] itself would start damaging the ship my
[58:59] trick and wings are so that'd be cool
[59:01] you cannot enter atmosphere no no just
[59:04] get it close to that you're on chance
[59:08] rather to Monday we can do this alright
[59:11] with that we're gonna stop the show
[59:12] before he creates any more work for you
[59:16] guys thank you so much for taking your
[59:19] time to be here on the show this week um
[59:21] Josh Phil and Graham Graham you stay
[59:24] later and see how K we're gonna talk
[59:25] about your background okay guys we've
[59:29] got one more episode of inside star
[59:31] citizen next week before
[59:33] citizencon which is just two weeks away
[59:37] from from from tomorrow we're not
[59:40] feeling the pressure at all wait just
[59:41] let me go do all right do I need to be
[59:45] there so for starters in life I'm Jared
[59:51] that's Phil that's Josh that's Graham
[59:53] that's his backlog
[1:00:01] you
[1:00:12] thanks for watching for the latest and
[1:00:14] greatest in star citizen squadron 42 you
[1:00:16] can subscribe to our Channel or you can
[1:00:18] check out some of the other shows and
[1:00:19] you can also head to our website at
[1:00:24] www.uvu.edu/library

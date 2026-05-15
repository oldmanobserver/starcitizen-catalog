# Star Citizen: Faceware Announcement

**Video:** https://www.youtube.com/watch?v=REUAt0OO-2A
**Date:** 2017-08-25
**Duration:** 11:29

## Transcript

[00:05] hi there everyone I'm Sean Tracy and for
[00:08] those that don't know me I'm the
[00:09] technical director of content here at
[00:11] cloud Imperium games and today I'm
[00:13] really lucky to be able to show you a
[00:14] feature that I'm personally really
[00:16] excited about and this is a
[00:17] collaboration between face where
[00:19] technologies and cloud Imperium games
[00:21] and what I'm going to show you is how
[00:23] we've integrated facial tracking into
[00:25] star citizen so to start showing this
[00:27] technology the first thing I want to
[00:29] enable is the live SDK technology so the
[00:31] collaboration between cloud Imperium
[00:33] games and face ware and Here I am you
[00:36] can see that there's a bunch of
[00:37] different dots on my face and these are
[00:38] landmark points that we use for facial
[00:40] tracking and the tracking is quite
[00:41] intelligent so as I turn my head and a
[00:43] face is lost we actually disable the
[00:45] facial tracking and if I turn this way
[00:47] this is handy for things like occlusion
[00:49] so if your hand gets in the way maybe a
[00:51] pen gets in the way we disable the
[00:53] facial tracking at those instants now
[00:55] you're not here to see my face let's go
[00:57] ahead and take a look at how this
[00:58] actually maps to a character so you may
[01:02] recognize this gentleman this is Liam
[01:03] Cunningham who plays Captain white in
[01:05] squadron 42 one of the really important
[01:10] things to notice or to note rather is
[01:12] that this is still early days with this
[01:14] technology we're doing a lot to map and
[01:18] to improve the quality of the actual
[01:19] tracking as well as adding new phonemes
[01:22] in to the tracking so that the runtime
[01:24] logic reacts exactly as we expect it to
[01:26] so this is never meant to be a
[01:28] replacement for facial animation but
[01:30] rather something for the players to be
[01:32] able to run and to drive an actor in
[01:36] real time or a character rather in real
[01:38] time this will be exciting for community
[01:40] endeavors like machinima videos or maybe
[01:43] even getting integrated to character
[01:45] creators so that you can make your
[01:47] character but then you can even see how
[01:49] they would express themselves at given
[01:51] different inputs of emotions so I just
[01:54] wanted to pull his face around a little
[01:55] bit so you can see the reactions of our
[01:57] runtime rig logic so to explain how this
[01:59] all kind of works is that we've got a
[02:01] bunch of outputs that happen from the
[02:03] live SDK technology and then through a
[02:05] layer called motion logic we map all of
[02:07] that to inputs of our runtime rig and
[02:10] since every character with in star
[02:12] citizen has
[02:13] its own unique runtime rig created
[02:14] dynamically they will always react
[02:17] appropriately to whatever the inputs are
[02:19] so it won't exactly be my blinks
[02:22] it'll be Liam Cunningham's blinks
[02:29] you can see even things like the years
[02:31] moving when the scalp moves
[02:37] [Music]
[02:46] [Music]
[02:48] and we even tracked the eyes
[02:54] so let's go ahead and show how actually
[02:57] different bits of rege logic might react
[02:59] a little bit differently giving a
[03:02] different character essentially so we've
[03:05] gone from a tier 0 rig down to a tier 2
[03:08] rig and the only real difference is that
[03:10] this is more indicative of what a player
[03:11] will have and when truly what changes is
[03:14] just the blend shapes as well as the
[03:18] wrinkle maps that play on the specific
[03:21] player so this is Tiger you might
[03:24] recognize him from pupil the planet
[03:26] videos
[03:26] [Music]
[03:36] the mapping is changing very
[03:38] dramatically
[03:39] this is Haynes Haynes is a very
[03:41] different face than really I have
[03:44] obviously
[03:50] and it works at all different distances
[03:53] if we start pulling out you can see that
[03:56] the mapping still holds up as bullosa he
[04:02] has really quite nice wrinkle maps that
[04:05] happen on the side of his face for my
[04:09] face to the side
[04:13] where this feature really comes into its
[04:15] own is in the combination of it with our
[04:18] VoIP technology alright so here we are
[04:22] in multiplayer you should be seeing me
[04:25] speak from Vincent's perspective and
[04:27] this is all being sent over the network
[04:28] and unwrapped on the client side so
[04:32] Vincent was kind enough to get a couple
[04:34] staff together so that we can show you
[04:35] this feature thanks a lot to do that
[04:37] Vincent no problem that's what we're
[04:39] here for
[04:40] awesome so I think one of the best ways
[04:43] that we can do this is maybe just
[04:45] everyone introduce themselves real
[04:46] quickly okay I'll go ahead and start my
[04:49] name is Vince Sinatra I'm the QA manager
[04:51] here in Los Angeles my name is Julia
[04:55] Wilson I'm a QA senior care in Los
[04:57] Angeles and I'm Andrew Hernando I am a
[05:01] QA tester here in Los Angeles awesome
[05:06] so maybe to show how this can really
[05:08] sort of be driven from the players side
[05:11] Vincent you've really got some good
[05:14] eyebrow tracking why don't you show me
[05:15] those eyebrows right on that looks cool
[05:20] Julia she'll be happy that's pretty
[05:26] close all right and then Andrew why
[05:29] don't you show me some angry that's
[05:33] perfect
[05:35] fantastic we've talked about how this
[05:38] feature can work on a consumer level web
[05:40] camera however here's Peter Busch from
[05:42] face word to talk about a motion sensor
[05:44] they've developed specifically for this
[05:47] feature hi my name is Peter Busch I'm
[05:50] one of the cofounders of face we're
[05:51] technologies and face we're interactive
[05:53] face wear is a facial motion capture
[05:55] company we create hardware and software
[05:57] products that can create animation
[05:59] simply from video about a year ago cloud
[06:02] Imperium asked us to do something we've
[06:03] never done before
[06:04] integrate our real-time technology into
[06:06] engine and allow game characters to
[06:08] interact in a moat in real time but by
[06:11] being live driven by the players
[06:12] themselves this is quite an engineering
[06:14] challenge but I knew my team's in Austin
[06:17] and Los Angeles could collaborate with
[06:19] the incredibly talented cloud imperium
[06:20] development team to make this happen the
[06:23] new Foyt feature will work with nearly
[06:25] any camera but we were asked what's
[06:27] going to create the best possible
[06:28] experience so we set out to engineer the
[06:31] first gaming device designed
[06:33] specifically for facial tracking here it
[06:37] is the first prototype facial motion
[06:40] sensor this is the first one off the
[06:42] production line now there are many specs
[06:44] about this device that are going to give
[06:46] you the best possible experience for
[06:48] facial tracking first the image sensor
[06:50] runs at 60 frames per second now while
[06:52] that's important is the way in which our
[06:54] technology works from one video frame to
[06:56] the next
[06:57] we basically can create an animated
[06:58] result meaning what we see in that first
[07:00] video frame were going to analyze the
[07:02] expression on your face and by the next
[07:04] video frame we have that animated result
[07:06] so the faster that that frame rate is
[07:08] running the faster you're going to be
[07:10] able to keep up and get that performance
[07:11] and at 125th or one thirtieth of a
[07:14] second which is common in most webcams
[07:16] it might not keep up and your lip-sync
[07:18] might not read but it one sixtieth of a
[07:20] second now the words that you're saying
[07:22] are going to be spoken by your character
[07:24] running in-game now second we looked at
[07:26] where most common you're going to be
[07:28] using this device and more often than
[07:30] not you're only going to be lit by the
[07:31] light coming from your monitor so the
[07:33] sensor had to work in a low-light
[07:35] environment so we selected a 1/3 inch
[07:38] three point four megapixel sensor that's
[07:40] capable of 720 or 1080 at 60 frames per
[07:44] second in a near dark environment
[07:47] third-most webcams are wide-angle lens
[07:50] which makes your face a little bit
[07:52] smaller and frame and a lot less facial
[07:54] details and facial pixels for our
[07:56] technology to capture and track so we
[07:58] selected a single user field of view now
[08:01] this allows our technology to basically
[08:03] get more pixels from your face from that
[08:06] frame and get the best possible facial
[08:08] details in the engine now fourth we put
[08:11] on a high-resolution glass lens it's
[08:14] going to resolve that data and give us
[08:16] the best possible and sharpest focus for
[08:18] facial tracking these specs are going to
[08:20] allow you to have the best possible
[08:22] experience with the new poit feature
[08:23] well this is only a prototype we're
[08:26] going to go into mass production and
[08:27] we're going to bring this to you we've
[08:29] been working on this technology first
[08:31] nearly seven years but this is the first
[08:33] game that's wanted to integrate this
[08:35] into engine and allow character to
[08:36] character communication like you've
[08:38] never seen before we're excited to bring
[08:41] this to star citizen and we can't wait
[08:42] to see what you do with it alright so as
[08:46] you've seen it's still early days and
[08:48] we've got a little bit more work to do
[08:49] on the facial mapping some of the
[08:51] phoneme extraction to make sure that it
[08:53] looks really accurate but even in this
[08:56] really early implementation I think it
[08:59] shows a lot of promise and I really hope
[09:01] that you'd agree having integrated this
[09:02] technology there's a lot of ideas and
[09:04] things we wanted to try with it so one
[09:06] of the ideas that we came up with was
[09:08] that because we already know the
[09:10] position of the face itself we actually
[09:12] know where the head is so we can do
[09:14] something pretty exciting I find it fun
[09:18] is head tracking so as I move my head in
[09:22] real life all the camera is moved just
[09:26] as if you were driving a track I are a
[09:28] sort of simulation but this is again all
[09:30] from a consumer level web camera so this
[09:33] actually adds quite a bit I find that
[09:35] this gives me a ton of situational
[09:36] awareness when I'm flying around I can
[09:38] just move my head a little bit more I
[09:39] can check on my power
[09:40] check out my shields I can even inspect
[09:43] things a little bit up close if I
[09:45] combine this with zoom
[09:47] we've got some towers over there up you
[09:54] can even do crazy stuff like rolls hold
[09:58] it the other way that's kind of fun if
[10:00] we combined it with this so here I'll
[10:02] try to keep my head on the horizon until
[10:04] it's just too much and then we put it
[10:07] back over and maybe look up let's see if
[10:10] we could see anything from Levski there
[10:12] oh yeah all right and then we'll roll it
[10:16] back over
[10:19] the other way and there we go
[10:24] so as you can see it all it is very
[10:27] natural and you can just look around
[10:29] within it and again it's kind of coming
[10:30] for free because we are already tracking
[10:32] the facial position so we can
[10:34] extrapolate from that what the head
[10:35] position is so as you can see the
[10:38] collaboration between face wear and
[10:40] cloud imperium games even in this early
[10:42] stage of development is already breaking
[10:45] new ground and doing things that haven't
[10:47] really been seen before so we're really
[10:49] excited to develop these features and we
[10:51] can't wait to get them to you so until
[10:53] then this is Shawn Tracy from cloud
[10:55] Imperium games Los Angeles saying
[10:57] goodbye
[11:05] [Music]
[11:11] Eric's got a little song that he
[11:13] sometimes kind of comes in sings and it
[11:15] looks pretty awesome
[11:16] so you want to take take it away oh I
[11:21] once was a perfect

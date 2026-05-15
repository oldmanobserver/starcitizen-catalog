# Star Citizen: Around the Verse - Leg-go

**Video:** https://www.youtube.com/watch?v=t61toCAxdfo
**Date:** 2018-10-05
**Duration:** 12:24

## Transcript

[00:16] [Music]
[00:21] hello and welcome to another episode of
[00:23] our round the verse i'm sandi gardiner
[00:25] and i'm chris roberts today we'll dive
[00:27] into in-game chat scanning prosthetic
[00:30] limbs and some useful back-end tools but
[00:32] first we have news on the state of
[00:34] object containers streaming and alpha
[00:36] 3.3 yes so both alpha 3.3 and object
[00:40] container streaming have now spent some
[00:41] time in the hands of the other catty and
[00:43] the good news is OCS object contain
[00:46] streaming is performing much better than
[00:48] anticipated and we're seeing frame rates
[00:50] well not all of them but some up in the
[00:52] triple digit range which is pretty
[00:53] awesome
[00:54] with these huge increases we've
[00:56] redistributed developer bandwidth by
[00:58] shifting focus exclusively to our build
[01:00] that includes OCS this means instead of
[01:03] releasing out for 3.3 without OCS so the
[01:05] live servers at citizencon we've decided
[01:07] instead to open the PTU to all backers
[01:10] on october 10th with a bill that
[01:12] includes OCS and all the performance
[01:14] gains that comes with it this will allow
[01:16] us to get the content and improvements
[01:18] into your hands even faster than we
[01:20] would have done with the other plan
[01:21] Hurston a lava will soon be added
[01:24] afterwards in an incremental 3.3 patch
[01:27] very cool so 3.1 and 3.2 we're
[01:30] date-based
[01:31] releases what happened with 3.3 object
[01:33] container streaming is a foundational
[01:36] technology for the game it's one of the
[01:39] the big remaining things that we've got
[01:40] to get working properly originally it
[01:43] was sort of iffy whether it was going to
[01:44] make the date so he said well we're
[01:46] going to shift it at the same time
[01:47] putting two builds out in the hands of
[01:49] our vacati members and ultimately the
[01:52] rest of the community to test it but
[01:54] when we went out there a couple of
[01:56] things happen one the ever catty were
[01:59] really quite excited by the potential
[02:01] performance gains and of course we were
[02:03] too because it was nice to sort of see
[02:05] it validated properly in the real world
[02:06] you know you guys should the other
[02:10] aspect of is we're doing stuff at a huge
[02:12] amount of detail on fidelity so we had
[02:14] to do a full refactor of the system
[02:16] because the most games if you play games
[02:18] and streaming happens a lot in sort of
[02:20] single-player games where they know
[02:21] which way you're going so they sort of
[02:23] starts a stream the level that's ahead
[02:25] of you in as you get towards it but it's
[02:27] very linear know exactly where the
[02:28] players going with us we don't know
[02:30] where the player because you can go
[02:32] anywhere in the star system and then on
[02:33] top of that
[02:34] you need to stream a load in the object
[02:36] containers in the background while
[02:38] you're still playing the game and so
[02:39] everything that does the loading of not
[02:42] just the textures the models but the
[02:45] data format you know the objects that
[02:47] all the entities that are contained in
[02:50] these object containers has to happen in
[02:52] the background multi-threaded so we had
[02:54] to do a huge pass over all the game code
[02:56] because a lot of the game code in
[02:59] lumberyard assumes you're just running
[03:01] on the main thread we have to do a lot
[03:04] of initiation of all the entities and
[03:07] all the loading and everything all has
[03:08] to be on you know background worker
[03:11] threads it's a pretty monumental amount
[03:14] of engineering we working on the
[03:17] foundations of this for a couple of
[03:18] years and so this is easily as big if
[03:21] not bigger than 64 from 32 bit precision
[03:25] the 64 bit precision we did a few years
[03:27] ago because it's multiplayer and I have
[03:29] freedom of choice that it makes it more
[03:32] complex on the back end in your yeah and
[03:35] it's writing behind the scenes because
[03:36] you don't know which way I'm gonna go
[03:37] and so it makes the engineering more
[03:40] complicated on the back end most
[03:42] single-player games they know where
[03:44] you're going and so that transition is
[03:46] much easier to program on the game code
[03:48] yes whole development stuff we had a
[03:51] sort of come to Jesus meeting on Monday
[03:53] where it felt you know people were
[03:56] having too much context switching going
[03:57] between this branch and this branch
[03:58] which branch meant fixing stuff in so
[04:01] you've now you've now focused in 23.3
[04:05] with OCS yes so we made it that we made
[04:07] a decision to try and focus all the
[04:10] resources on to OCS because ultimately
[04:12] that's what we're we want to be anyway
[04:13] no matter what and we also feel like
[04:15] that will be better for three point four
[04:18] we live is this imaginary point for why
[04:21] we feel like this will be better for
[04:24] three four I mean we still want to be
[04:26] patron day driven on three four so have
[04:28] it by the end of the year and not
[04:30] wasting time on the non OCS branch which
[04:33] is essentially a dead branch means that
[04:36] we'll we'll be having resources
[04:39] dedicated to the three for sooner
[04:42] because they won't have to you know be
[04:44] still trying to fix up OCS because we
[04:46] started on it late because
[04:47] try to get the non OCS out first alright
[04:50] looking to our community our Spanish
[04:52] fans have been at it again yes they
[04:56] certainly have this skynet group just
[04:58] organized an impressive 50 person space
[05:00] panel they entered the hall affair by
[05:02] lining up all 50 participants and firing
[05:05] the prospectors mining laser through all
[05:07] of them ouch hey well we're gonna have
[05:10] to start putting a safety warnings on
[05:11] those things obviously it's not having
[05:14] meant to be used now on to development
[05:16] updates the gameplay feature and UI
[05:18] teams have been working on ongoing
[05:20] improvements to the in-game chat system
[05:23] recent updates include new channels and
[05:25] settings and an updated visor display
[05:28] VoIP continues to be tested as we get
[05:31] the feature ready for its upcoming debut
[05:41] ya internal testing is ramping up we'll
[05:44] get a look at VoIP as well as fight at
[05:46] citizencon next week of course with
[05:49] alpha 3.3 currently in the PTU we've
[05:51] already seen some of our ever Katzie
[05:53] testers trying out the tech and testing
[05:56] it themselves meanwhile deaths continue
[05:58] to polish the improve scanning system
[06:01] right now the system is being fleshed
[06:03] out differentiating between things like
[06:05] my novel assets and ship identification
[06:07] is key with the expansion of scanning
[06:09] capabilities we've been working on a new
[06:11] tool that will help our artists present
[06:13] their work for internal review in the
[06:15] most efficient way possible
[06:16] let's go to Forrest Stefan for a
[06:18] walkthrough of the new back-end tech I
[06:20] want to take you through a new tool that
[06:22] we have developed titled the look
[06:24] development tool so let me go ahead and
[06:27] just grab this lamp basically with a
[06:30] click of a button it hides everything
[06:32] that's inside of the environment and
[06:35] then it just shows what we wanted to
[06:37] show which is a very simple light setup
[06:39] in a very simple room once we have the
[06:41] model in to look Deb mode we have a full
[06:44] feature set we have the ability to do
[06:46] turn tables we have the ability to
[06:48] change kind of the lighting condition we
[06:50] also can kind of look at reflection
[06:52] passes so with a click of a button your
[06:55] an hour of time and this tool also
[06:57] ensures that the developers are all
[07:00] reviewing the different assets in the
[07:02] same environment so it creates a sense
[07:04] of cohesiveness during the review
[07:06] process so the last thing that we can
[07:08] look at I'm outside of grim pax you know
[07:10] maybe an artist wants to take a look at
[07:12] the Hornet in a isolated lighting
[07:14] condition so I'm gonna go ahead and just
[07:16] jump in the looked up mode somebody
[07:18] needs a turntable the fact that I'm in
[07:21] Luke death mode I'm gonna go ahead and
[07:22] skip the whole process of building a
[07:24] track view in a camera rig etc and so
[07:26] forth and I'm gonna go ahead and just
[07:28] toggle my capture 60 frames per second
[07:31] sets my path hit OK and now it's
[07:35] automatically capturing a turntable for
[07:37] me it's not a feature that's for the
[07:40] game it's a feature that's for the
[07:42] development of the game it's an
[07:44] efficient means to get the asset
[07:46] approved faster and that means the
[07:48] faster we can get approved faster we can
[07:50] get into the build the faster we can get
[07:52] it on your computers to play with these
[07:54] assets and that's kind of the advantage
[07:57] of this tool so it seems like this tool
[07:59] will be great for developers but what
[08:02] about for the game itself and for the
[08:04] players well it's gonna help the game be
[08:10] more balanced which is really important
[08:12] because we have PPR which is physically
[08:14] based sort of rendering and so therefore
[08:17] the actual materials have made to
[08:19] respond to certain different kind of
[08:21] light levels and so if you've got an
[08:24] artist that's built one to a different
[08:26] lighting setup than one that's built
[08:29] over here you put them together they
[08:30] don't fit so while this is going to
[08:32] enable us to do is ensure that we have
[08:36] less clashes in the end result so this
[08:39] prevents that and also creates tools
[08:41] that are better for review so setting up
[08:43] the asset with lights and animation so
[08:47] you can see it takes a bit of time so
[08:48] this will mean that developers can sort
[08:51] of iterate faster and provide more
[08:53] consistent assets I like it very cool
[08:56] moving to grim hack station where forest
[08:59] parked his ship in that last bit the
[09:01] elevator system has finally been fixed
[09:04] this recent dev work should lead to a
[09:06] significant decline
[09:08] elevator based casualties in the area
[09:14] I'll be a good thing so on the backend
[09:17] we've improved the flash tools our UI
[09:19] developers used to allow for on-the-fly
[09:21] changes without having to reload the
[09:23] game world in the editor here is UI
[09:25] creative director zane bien with more so
[09:28] over the past couple of months we've
[09:29] been working on developing some new
[09:32] authoring tools what that is is having a
[09:35] standard API in which gameplay
[09:37] programmers can easily expose variables
[09:39] that we can hook into with the UI the
[09:42] other aspect we've been working on that
[09:44] we turn building blocks and that's
[09:46] basically a first foray into the
[09:49] authoring tool that allows artists and
[09:52] designers to easily place UI elements
[09:55] into the game world currently what we
[09:58] have to do right now is wire framing and
[10:00] prototyping in a separate program then
[10:03] that gets translated into Photoshop and
[10:05] then that then has to get translated
[10:07] into flash which finally gets translated
[10:10] into the game engine so one of the
[10:12] eventual goals that we want to get to
[10:13] with this tool is to be able to shift
[10:15] our entire workflow into the game engine
[10:18] so using the same tools to prototype to
[10:20] mock things up and to implement using
[10:23] the same tool set as as the actual
[10:25] implementation then it would save us a
[10:27] massive amount of time and we're talking
[10:29] about weeks down to days for any
[10:31] particular new UI that we need
[10:34] in the game so anyway this is another
[10:37] example of some work that we're doing to
[10:40] increase our pace of iteration our UI
[10:43] team as they're iterating on assets very
[10:45] quickly you know without having to
[10:47] reload the whole game and you know
[10:49] that's five minutes every time they want
[10:51] to do an iteration here it can happen
[10:52] instantly so we're working pretty hard
[10:54] on tools to try and increase our
[10:56] development velocity which is a good
[10:57] thing
[10:58] yes we like that the tech art team has
[11:00] recently rigged mission giver Battaglia
[11:03] is prosthetic leg touches like this add
[11:05] a lot to characters filling in their
[11:07] backstory visually like how did she lose
[11:09] that leg I'm sure there's probably a
[11:11] crazy story there right probably you
[11:13] know Steven had a cap I don't know
[11:15] myself either but I am looking forward
[11:16] to seeing he ran out for three point
[11:18] three and that's it for this week don't
[11:20] forget to tune in to reverse the verse
[11:21] live tomorrow at noon pacific on Twitch
[11:23] citizencon is next week and if you won't
[11:26] be joining us in Austin on October 10th
[11:28] make sure you tune in to the live stream
[11:29] all you need to do to join is have an
[11:31] RSI account yes and since we'll be at
[11:34] citizencon and all working to get alpha
[11:36] 3.3 ready for prime time around the
[11:39] verse is going to be taking a break next
[11:40] week yes but we will be back after
[11:42] citizencon thanks to all the subscribers
[11:44] and of course to all of our backers and
[11:47] until then we will see you around
[11:50] [Music]
[12:03] thanks for watching for the latest and
[12:05] greatest in star citizen squadron 42 you
[12:07] can subscribe to our Channel or you can
[12:09] check out some of the other shows and
[12:10] you can also head to our website at
[12:15] www.uvu.edu/library

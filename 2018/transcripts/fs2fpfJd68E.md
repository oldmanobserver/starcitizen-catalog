# Star Citizen: Around the Verse - Party of Fifty

**Video:** https://www.youtube.com/watch?v=fs2fpfJd68E
**Date:** 2018-08-02
**Duration:** 10:28

## Transcript

[00:21] [Music]
[00:25] hello and welcome to another episode of
[00:27] around the verse
[00:28] I'm sandy Gardner I'm Chris Rollins our
[00:30] Spanish community organized an
[00:32] impressive event this past weekend which
[00:34] they dubbed lust cincuenta to rabbits
[00:36] they filled a server with 50 players all
[00:39] grouped into one massive party and
[00:41] performed synchronized quantum travel
[00:43] and planetside infantry combat among
[00:46] other activities
[02:51] about stress testing the game so players
[02:54] in our French community recently formed
[02:55] a party of 50 as well with their large
[02:57] pack traveling to damar to take in some
[02:59] sights together and attempting an
[03:01] ambitious flight formation the Aussies
[03:04] come on Ozzy Ozzy Ozzy Ozzy I are the UK
[03:07] folks yeah what about them yeah
[03:09] very cool stuff now let's check in and
[03:11] see what's been in the works since our
[03:13] last update so new tech has recently
[03:16] come online that allows particles to be
[03:18] dynamically affected by external forces
[03:19] such as wind which we see here adding
[03:21] kinetic details to Hurston's trash biome
[03:24] one of the focuses for alpha 3.3 is
[03:27] further improvement of the mining
[03:29] mechanics introduced in the current
[03:31] release here is producer Matt Lightfoot
[03:33] to tell us more one of the biggest
[03:35] things that we released in 3 2 was
[03:36] mining on planetary bodies so as you
[03:39] guys know there's lots of things that we
[03:41] can improve upon on one of the biggest
[03:42] biggest areas that we've got 4-3-3 is
[03:44] improving our mining on planetary bodies
[03:46] flow and we looked at the feedback from
[03:48] you guys what worked what didn't how
[03:51] could we improve mining as a as a full
[03:53] feature and one of the things that we
[03:55] saw from a design aspect was being able
[03:57] to change the danger fill rate so adding
[03:59] more variation into the rocks and the
[04:00] risk of being able to mine these objects
[04:03] being able to stop the rocks
[04:04] highlighting when they're in when you're
[04:06] in the third-person camera this isn't
[04:07] really very immersive also being able to
[04:10] fix some of the network D
[04:12] synchronization issues that caused some
[04:14] of the child rocks to not spawn in the
[04:16] correct position once you fractured the
[04:17] rocks we've also created an early
[04:20] prototype of asteroid mining to test the
[04:22] mechanics and visual effects of mining
[04:24] in space players can initiate a radar
[04:26] ping to locate mandible asteroids and
[04:27] once located those asteroids can be
[04:29] fractured and split into smaller pieces
[04:31] just like the rocks family found on
[04:33] means of course mining in zero-gravity
[04:35] obviously brings its own unique
[04:37] challenges to the extraction process yes
[04:39] it definitely doesn't want those rocks
[04:40] to float too far away
[04:44] now with fight fate over IP our face
[04:48] tracking system set to release with 3.3
[04:50] you'll be able to translate both your
[04:51] own facial movements and your voice
[04:53] Dietetic elite into the game so let's go
[04:56] to Graham philipson for some details on
[04:57] how the system is coming along hi my
[05:00] name is Graham philipson and I'm lead
[05:01] audio programmer here at foundry 42
[05:03] recently we've been doing a lot of work
[05:05] on the facial tracking system for the
[05:07] foyt feature a big chunk of that work is
[05:10] doing some QA to ensure that the facial
[05:11] tracking works well with every type of
[05:13] face whether that person has a different
[05:15] skin tone wears glasses has long hair or
[05:18] maybe has a beard if a person does wear
[05:21] glasses it can make them look very
[05:22] different to when they don't and that
[05:23] could cause problems in the facial
[05:25] tracking for example if I remove my
[05:27] glasses now it makes it very difficult
[05:30] for the facial tracking system to pick
[05:32] me up because it's not seeing what it
[05:33] expects to see so I can recalibrate and
[05:37] now it should be tracking again
[05:44] additionally we need to make sure that
[05:46] the facial tracking system can pick up
[05:47] as many facial expressions as it
[05:49] possibly can in order to achieve this
[05:51] we've put together a QA test plan the QA
[05:54] engineers will be testing the facial
[05:56] tracking system and when they find that
[05:58] it's not quite doing what they expect
[05:59] they'll be configuring their screen in a
[06:01] view similar to what you can see next to
[06:03] me this video can then be used to
[06:05] diagnose and 3hours the issue and we can
[06:07] figure out whether it's an issue for
[06:09] face wear or for our internal animation
[06:11] teams in parallel to this we've been
[06:13] doing a lot of work with turbulent to
[06:15] develop a back-end that can transport
[06:17] both the audio and facial data across
[06:19] the network and distribute it to all the
[06:21] game clients this is the vital work that
[06:23] needs to be completed in order to bring
[06:25] this feature to release also last week
[06:28] we heard from Graham about the work
[06:30] Audio has been doing to add sound
[06:32] effects to physicalize props since then
[06:34] they have continued working to improve
[06:35] this audio implementation to better
[06:38] support sliding props and they've been
[06:40] capturing new sounds through the classic
[06:42] Foley method of smashing things the
[07:03] audio team is also taking first passes
[07:06] at unique weapon sounds here's an early
[07:08] go at the upcoming karna plasma rifle
[07:11] from Cass Tech Arms and here's a first
[07:21] pass on the sounds produced by the
[07:23] vanduul energy Lantz which we saw
[07:25] concept art for a few weeks ago
[07:33] yeah it's pretty cool that looks like oh
[07:35] hey it's you
[07:36] Deb's have been working on motion
[07:38] warping tech that will be used in both
[07:39] squadron 42 and the PU let's go to yen's
[07:42] lend for more the motion warping is what
[07:44] we call it in technique where we take
[07:46] animation driven motion then we try to
[07:48] stretch it to hit certain sync points
[07:51] in Maya the animators will mark up where
[07:54] they want character to be and we then
[07:57] look at the environment if we try to
[07:59] match those points as we get closer to
[08:01] one of those point when when the
[08:02] animation says now you should be in sync
[08:04] with this point we start pushing you
[08:06] towards it over time and this will allow
[08:08] you to stretch the motion or shrink the
[08:10] motion to fit with where they were doing
[08:13] so for vaulting means you know you can
[08:16] slide over a longer obstacle where we
[08:18] might just roll over I'm not shorter
[08:20] obstacle we're also open to use this for
[08:23] a lot of day I move in there pretend to
[08:25] be animation driven following up on
[08:28] another system being worked on for
[08:29] squadron 42 work continues on the
[08:32] animation and mechanics associated with
[08:34] picking up and carrying items yeah
[08:36] grabby hands tech as we used to call it
[08:38] the old days we completed the work on
[08:42] the one-handed carry ball system so we
[08:45] wanted to extend that to 200 objects so
[08:47] what we had to do was wear it to new
[08:49] grip types so we had flattened cope so
[08:51] what that large do is carry things from
[08:54] the side and then also handles off the
[08:56] other side that kind of thing but with
[08:58] those two groups we also have blend
[09:00] spaces from like we did with the 100 so
[09:02] you can change the size of the grips for
[09:04] different to go around different
[09:05] consoles and that kind of thing on
[09:06] objects so what the system allows us to
[09:08] do is have terrible objects of all
[09:10] different shapes or sizes but we don't
[09:12] have to you know create bespoke
[09:13] animations or anything like that it's
[09:14] easy to set these up and get the same
[09:16] polished results so yeah it's looking
[09:19] really good finally the mission team
[09:21] continues to work on FPS related
[09:23] contracts and AI behaviors staging some
[09:26] early tests in a white box environment
[09:28] we can see that this stuff has already
[09:29] come a long way from earlier iterations
[09:31] and we'll be continuing to track the
[09:33] progress in the coming weeks yes we will
[09:35] a big thanks to our subscribers for
[09:37] sponsoring our shows make sure you tune
[09:39] in to reverse the verse live tomorrow on
[09:41] Twitch for a special appearance by chris
[09:43] roberts me i'll be stopping by the chat
[09:46] with jared and in pacific and well
[09:48] that's all for us today so until next
[09:50] time we will see you around the race
[09:55] [Music]
[10:08] thanks for watching for the latest and
[10:10] greatest in star citizen a squadron 42
[10:11] you can subscribe to our channel or you
[10:14] can check out some of the other shows
[10:15] and you can also head to our website at
[10:20] www.uvu.edu/library

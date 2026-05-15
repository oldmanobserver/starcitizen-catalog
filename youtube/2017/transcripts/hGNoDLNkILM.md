# Star Citizen: Around the Verse - Cockpits: Enhancing the Experience

**Video:** https://www.youtube.com/watch?v=hGNoDLNkILM
**Date:** 2017-10-13
**Duration:** 45:20

## Transcript

[00:15] hello and welcome to another episode of
[00:18] around the verse our weekly look at star
[00:20] citizen's ongoing development I'm sandy
[00:22] gardner and i'm chris roberts yes and on
[00:25] today's show we open the canopy and
[00:28] climb into the pilot seat to check out
[00:30] all the changes being made to cockpits
[00:32] so stick around to see the latest
[00:34] enhancements to the flying experience
[00:36] yes but first as you all know the ever
[00:39] cuts you got their hands on 3-0 last
[00:41] week and ever since they've been busy
[00:42] reporting issues and helping us track
[00:44] down various blockers as well as
[00:47] allowing us to focus on areas to
[00:49] optimize so the team has been poring
[00:51] over their feedback and thanks to our
[00:53] new Delta patch oh we've been able to
[00:55] easily release fixes an issue of data
[00:57] builds almost every single day which is
[00:59] pretty cool thing so let's see how this
[01:02] expanded team of testers as affected
[01:04] this week's burn down welcome back to
[01:07] burn down our weekly show dedicated to
[01:09] reviewing progress on issues blocking
[01:11] the release of star citizen alpha 3.0
[01:13] we've not only been delivering updated
[01:16] 3.0 builds almost daily to our evocati
[01:18] testers we've also begun closing down
[01:20] necessary bugs and tests to improve our
[01:22] cargo and shopping experience so let's
[01:25] see how the team is progressing
[01:32] mccartey on Thursday for the first
[01:33] portraits is really really good so thank
[01:35] you to everyone that was involved with
[01:37] making that what it was we also put out
[01:40] another update on Friday as well with
[01:42] some further vital fixes the main ones
[01:44] being there was a a physics fix to try
[01:49] and help the performance and also an
[01:51] update to the crash handler so to
[01:52] actually start getting crashing the
[01:53] reports back because it wasn't working
[01:55] previously the new patch er meant that
[01:59] people were getting their their update
[02:02] anywhere between like 30 seconds five
[02:04] minutes depending on internet connection
[02:05] so they need patter is really really
[02:07] going down well with the community they
[02:09] are loving not having to download 20 gig
[02:11] at a time every single time one of the
[02:13] reasons that we've been able to push
[02:14] every day and it's been so successful is
[02:16] because of the Delta patcher and what
[02:19] that means is that instead of having to
[02:20] redownload entire pack files we can just
[02:24] download what's changed and so this has
[02:26] brought the patching time down from
[02:28] hours in some cases to minutes one of
[02:31] the other advantages of the Delta
[02:32] patcher is that we can actually
[02:34] downgrade builds as quickly as we
[02:36] upgrade to them so if we put out a build
[02:38] and there's something spectacularly
[02:39] wrong we didn't catch in testing we can
[02:42] just roll back to the previous version
[02:43] and then find out what what was what was
[02:46] wrong
[02:46] the main focus lately has been on
[02:48] performance bushings specifically
[02:51] requests from Chris Bolton usually what
[02:55] all happened is we will be getting a QA
[02:58] TR or a test request from Chris to say
[03:01] he's putting some new code or he's
[03:03] changed some things up to help improve
[03:07] the performance of staunton system and
[03:10] what we'll do is we'll grab his latest
[03:13] binaries and put those into the latest
[03:15] build we have and start doing usually a
[03:18] full-blown barrage of tests on
[03:21] everything
[03:22] so that being like Stanton that'll be in
[03:24] the other sections as well but
[03:27] specifically statins which has been
[03:28] struggling lately especially with the
[03:32] Rings and paralysis the performance when
[03:35] 24 players go crazy on the server
[03:38] this is something
[03:41] which internally we have struggled to
[03:45] always reproduce the reload of Soviet
[03:49] system and then exactly this feedback
[03:52] loop I think and a finger player we had
[03:55] like 200 entities active and 16 players
[03:59] just joined so all of our players we had
[04:02] like 500 entities active now I looked at
[04:04] the server from a vacati he was 24
[04:06] players playing for some time we have
[04:08] 5000 entities active residing in a not
[04:12] optimized friend rate and this is
[04:14] basically is a fun for the next few
[04:16] weeks to actually figure out why we
[04:19] update so many entities do we need to
[04:21] update them what is actually necessary
[04:23] and we need to do more testing with 24
[04:26] actually players but it's not really
[04:28] practical to have 24 players constantly
[04:30] testing all the game when especially if
[04:31] you want to have more players in a
[04:33] server just in much number if you
[04:36] actually managed to get thousand players
[04:38] and a server we cannot have thought 1000
[04:40] craigers playing the game 8 hours a day
[04:42] this it's not really reasonable
[04:47] once we figured out the last 10,001
[04:50] disconnect issue we've got a build here
[04:53] from the UK that just deployed from that
[04:56] was kicked off earlier this afternoon
[04:58] that should the fixes for the
[05:01] disconnects seem like they've taken we
[05:04] could get another code build done or a
[05:06] full build if we absolutely needed to go
[05:09] through the process of putting out to
[05:10] the evocati so that we can get them
[05:11] those fixes rolled out to them today
[05:14] which is good but it's important to
[05:22] feedback is filtered through Todd and
[05:27] we'll make priority calls ahead because
[05:29] there's some stuff like you know ten
[05:31] thousand and one error codes yes we're
[05:33] definitely fit with definitely fixing
[05:34] but then you know there's some
[05:36] subjective feedback there like I don't
[05:38] like this so I do like this or whatever
[05:40] now some of those issues that calling
[05:42] out we already know about already
[05:43] working at addressing I always get a bit
[05:46] worried because first of all we're
[05:47] getting kind of subjective feedback that
[05:50] sort of anecdotal and so you know
[05:53] someone can have a strong opinion but
[05:55] you know that could be their opinion and
[05:56] it may be different someone else's
[05:57] opinion else was broken up so it needs
[05:59] to go through the filter of us on the
[06:01] very high level of the kind of design
[06:04] side to make sure that you know it's
[06:06] something that we want to agree because
[06:07] a lot of times people can't see the big
[06:09] picture when they're making you know
[06:11] feedback because they don't know whether
[06:13] you know what it's missing I need this
[06:15] and we're like yeah no we know it's
[06:17] missing it's kind of like on our task
[06:19] list we're working on it right now and
[06:20] we understand that yeah it hurts your
[06:23] ability is don't fight if you can't see
[06:25] the status of your target or the status
[06:27] of your so so I just want to make
[06:30] sure we do that I'm a little worried
[06:31] that like we automated suddenly these
[06:33] subjective feedback get written up as a
[06:35] JIRA to get put in someone's book here
[06:37] maybe they get assigned and you know
[06:39] it's like we'll spend some time working
[06:41] on stuff that needs to have kind of
[06:44] direction and
[06:46] or priority called out and sometimes
[06:49] what people want to get fixed the
[06:52] solution is somewhere else
[06:53] to fix the issue that complaining about
[06:55] so on the subjective stuff I kind of
[06:57] want to make sure that so one of the
[07:01] best things about having their vacati
[07:03] testing the bills with us is that
[07:05] suddenly we have this testbed of 800
[07:07] people on top of the people that we
[07:09] employ here and it means that the number
[07:12] of issues that we can test and the
[07:13] stress that we can put on the servers
[07:14] goes through the roof and that really
[07:16] helps putting the pressure on the
[07:20] servers that needs to be done and also
[07:22] if when we get to the stage where we are
[07:25] you're looking at where they were going
[07:26] to go I'll be nice and there what stuff
[07:31] is fixed today today as well yeah when
[07:35] they produc new features would that be
[07:36] good and then capacity will in those
[07:43] guys because they needed to tell people
[07:45] though I have no idea
[07:46] yep I think it's Tuesday's basically I
[07:48] think moving forward um Tuesday's will
[07:50] incorporate the live sink within the
[07:52] director sink and P will have to go
[07:54] first
[07:54] and people lastly listening to that kind
[07:56] of stuff and then that will be the way
[07:59] that Tuesday's has to kind of run
[08:08] and test is instead of 70 testers and we
[08:12] should be looking to deliver a build
[08:14] every day if we can to them because we
[08:16] have a delta function but the key is not
[08:19] so much about oh we've got this one
[08:21] blocker right there's a crash here or a
[08:23] deadlock yes I which was sort of the
[08:25] approach we were taking in like getting
[08:27] it to every party the key is like okay
[08:30] like what bits of the things we've still
[08:32] left to do have gone into this gun in
[08:35] Monday what I've got in Tuesday because
[08:36] I don't want to just only have like one
[08:38] blocker fix right because we've got
[08:40] people finishing content yeah doing
[08:43] lighting you know okay we you know if
[08:45] these these three areas now being lit
[08:48] are they funny as this is now being
[08:50] brought over to light for 2.0 as you've
[08:51] got it that's kind of think that's what
[08:53] we actually want to do is have a steady
[08:54] stream of you know things that are
[08:57] getting like finished off or fixed up
[09:00] putting in and one okay here's another
[09:02] Cuddy here's the things that have gone
[09:04] in that we think we fix because you're
[09:05] basically you've just got to sort of
[09:07] manage that over time so we've got to
[09:09] get into that mode as opposed to me you
[09:12] know what three boats do we have to fix
[09:14] before we can
[09:17] so the next steps for us here in cig is
[09:20] we're focusing on the shopping feature
[09:23] shopping and commodities as as a feature
[09:26] to present to the car to say this is now
[09:30] in a state where you guys can just go
[09:33] nuts
[09:34] go ahead buy sell do whatever you want
[09:37] or fixing bugs left and right we've got
[09:39] issues where certain clothing eye
[09:41] clothing and items aren't showing up in
[09:43] the shops right there's issues where you
[09:45] can't interact with an item through a
[09:47] glass case because the glass is getting
[09:49] in the way with the interaction system
[09:51] so we're trying to figure that out
[09:52] and we're trying to also work out some
[09:55] kinks with the Tryon mode where when you
[09:57] look to inspect a item like a ship
[10:00] component or something the character
[10:02] will look around like he's got look got
[10:04] gloves on and he's looking at his glove
[10:06] so like we're just ironing out kinks
[10:07] getting everything working really well
[10:08] so right now I'm focusing on a suite of
[10:10] different shopping related bugs and
[10:12] features that were trying to push out to
[10:13] the evocati soon today a couple of them
[10:16] are focused on the weapons being
[10:19] attached to the item ports on the
[10:20] shelves so we've got trying out a weapon
[10:23] in the shop drops it under the floor for
[10:25] remote players weapon models disappear
[10:29] after inspecting them these are the
[10:31] great kind of bugs because they are not
[10:33] 100% repro so they only happens
[10:34] sometimes which are always the best to
[10:36] find and solve so what we've done is
[10:39] we've taken our top issues we want to
[10:43] get fixed these are a collection of bugs
[10:45] and tasks we've gathered those together
[10:48] we've put them into the evocati fixed
[10:51] version in our internal JIRA tracking
[10:54] software and this is where we saw the
[10:57] burndown graph come from last time so
[10:59] when you see this report go out you'll
[11:01] see the the new list of numbers also the
[11:04] new total number so as you'd expect
[11:07] we're seeing new issues daily from our
[11:09] influx of additional testers that we're
[11:11] fixing immediately in order to improve
[11:13] this release and at the time of filming
[11:15] this we're at 23 must fix issues so come
[11:18] back next week to see how we're doing
[11:20] and to keep a close eye on the in depth
[11:22] details of the last remaining issues
[11:23] blocking the official SC alpha 3.0
[11:26] release here on burned-down
[11:28] tune in next week to see how much
[11:30] progress we've made on the avvocato
[11:32] release you can explore more details
[11:34] about what we've accomplished by
[11:36] checking out the production schedule
[11:37] report on our website yes so now let's
[11:41] turn our attention to this week's
[11:42] feature so players are going to be
[11:45] spending a lot of time in the cockpit of
[11:46] their ship so it was really important
[11:48] for us to make sure it was as visceral
[11:50] and engaging as possible some elements
[11:52] like the player suffering a readout due
[11:54] to excessive g-forces are already in the
[11:56] game but we always knew we wanted to do
[11:58] more so we kicked off a series of
[12:00] Sprint's focused on the cockpit
[12:02] experience for you in star citizen and
[12:04] in squadron 42 these improvements
[12:07] involve designers animators VFX artists
[12:10] and many other disciplines across the
[12:12] company since the changes would utilize
[12:13] a lot of our new tech like the actor
[12:16] status system item 2.0 and other
[12:18] recently implemented systems yeah so
[12:21] let's check out what changes are coming
[12:22] to your ships cockpit in this week's
[12:24] feature
[12:33] so the origin the cockpit experience
[12:35] sprint was started with Chris taking a
[12:37] look at the overall experience of the
[12:39] player within a ship cockpit and wanting
[12:42] to make that experience as visceral as
[12:44] possible he looked at looked at of
[12:46] sights and sounds and effects and just
[12:48] the overall feeling of it and wanting to
[12:51] make it real really feel special and so
[12:53] we all kind of got together and and
[12:56] brainstorm different things that we
[12:57] wanted to see Chris laid out his
[12:59] expectations and then John crew lead
[13:02] tech designer there in the UK and I
[13:05] partnered up to make this happen so John
[13:08] and I sat down and outlined Chris's
[13:10] goals into a sport called a sprint
[13:13] breakdown so we we started with okay
[13:15] here's our expectation for the first
[13:17] sprint then the next sprint the next
[13:18] sprint you know the in a sprint can be
[13:20] two weeks long two to three weeks
[13:21] usually around two weeks long and we've
[13:23] started with you know just what is it
[13:25] what does it feel like to be in a
[13:26] cockpit flying around and so we
[13:29] partnered up with animation lead ship
[13:32] animator Jay brushwood in Austin and we
[13:33] partnered up with audio team with visual
[13:37] effects engineering to make this just an
[13:41] overall amazing experience walls and fly
[13:43] on the ship we got our design laying out
[13:45] the expectations specifically breaking
[13:48] down the tasks based on the high level
[13:49] direction from Chris you know that
[13:52] included things like g-forces updated
[13:55] g-forces and how does that feel hit
[13:57] reactions in the cockpit so when
[13:58] someone's shooting and firing you're not
[14:01] just standing there static but you're
[14:02] actually reacting to the to the to the
[14:06] hits of the ship and then what happens
[14:08] inside that cockpit whenever you are
[14:10] getting hit by another ship so we have
[14:13] actual effects that play in the ship
[14:16] cockpit you know air air decompression
[14:18] and in flames sometimes and the lighting
[14:21] changes depending on you know whether
[14:22] you're just in default mode if you have
[14:25] auxilary power running or if you're in
[14:26] an emergency state you know it's time to
[14:29] get out it's time to eject so we
[14:31] definitely wanted to make that feel real
[14:34] and as if you were actually in danger
[14:37] at first we focused on just one cockpit
[14:39] type so we took the Gladius as a kid as
[14:41] a test-case
[14:42] which uses our specific cockpit type
[14:45] work on the HOTAS CL
[14:47] and there are seven or eight ships that
[14:49] use that cockpit type and we saw we
[14:50] focused just on those seven or eight
[14:52] ships and to make those really feel
[14:53] special so what we did was we took the
[14:56] Gladius cockpit it would say okay how
[14:57] can we change the interior of this
[14:59] cockpit to make it look really look make
[15:03] it feel and look different to the
[15:05] expectations that Chris is looking for
[15:07] so we actually shifted the the seat a
[15:11] little bit we have we changed the
[15:13] positioning of the of the throttle and
[15:15] enjoy stick we adjusted the position of
[15:18] the of the front weapon ship weapon so
[15:21] that when you're firing the weapon you
[15:23] can actually see the muzzle from where
[15:25] you're sitting in the cockpit and as a
[15:27] result you see them the muzzle effects
[15:29] as well
[15:30] so not only are you seeing what's going
[15:33] on inside your cockpit but you can
[15:34] actually see the effects of of when
[15:37] you're firing your weapon and stuff as
[15:39] well it's a it's a huge ongoing process
[15:43] we've obviously got so many ships that
[15:47] we just can't do everything we want to
[15:48] do with them all in one release 43.0
[15:52] we're starting with what we call the who
[15:55] tests CL ships which is an animation
[15:57] template so that's Gladius Buccaneer
[16:00] Harald Cutlass saber Vanguard and there
[16:04] they're all getting a range of
[16:07] improvements to the cockpit which will
[16:09] hopefully make the overall experience
[16:11] much more enjoyable in previous versions
[16:13] of the game we had no visual cues on
[16:17] whether your vehicle was damaged or not
[16:19] we only had a simple implementation
[16:22] where we had some damage effects playing
[16:25] when your ship was about to explode but
[16:28] that was very simple and not very
[16:30] informative so we wanted to represent
[16:34] different stages of being damaged so
[16:37] slightly damaged Indian damaged heavy
[16:39] damage and we also wanted to inform
[16:43] player that their vehicle is actually
[16:45] being shot at this very moment so we
[16:49] created some the effects such as sparks
[16:52] smoke fire like the breed charges and
[16:56] things like that so whenever your
[16:58] vehicles are being hit you will
[17:00] see some effects playing also depending
[17:03] on the health level of your vehicle it
[17:05] will see more or less of these kind of
[17:07] damage effects so we took these effects
[17:11] I kind of place them manually and using
[17:14] basic implementation we incorporated
[17:17] that in the game to see whether it works
[17:19] whether it's giving enough information
[17:20] for the player and because it does we'll
[17:23] take it
[17:24] a level further we'll create like a
[17:27] proper implementation of that so the
[17:29] improvements first up we're tying in the
[17:33] actor status system so you've seen that
[17:36] with all the the breathing and stamina
[17:38] that's now tied into the g-force system
[17:40] from the ship's
[17:41] so as you suffer g-force from your
[17:45] actions in the ship it causes stress
[17:48] which builds up stamina makes you
[17:51] consume more oxygen it actually changes
[17:53] your breathing in the ship's so you get
[17:54] all the like you see fighter pilots have
[17:57] to do various breathing techniques to
[17:59] manage their breathing under high
[18:01] g-forces you're pulling high g-forces
[18:03] you're going to hear that physical
[18:05] change on on your character if you ever
[18:08] got to the state where you were pulling
[18:09] so much g-force and you suddenly got out
[18:12] of the ship you you would feel that
[18:14] stamina effects you're not instantly
[18:16] getting at the ship back at full full
[18:17] stamina you're paying the price for your
[18:20] actions previously another aspect is
[18:23] ensuring the UI screens on the cockpits
[18:27] are very consistent and minimum size on
[18:30] screen because a lot of our cockpits
[18:32] were done two three years ago and the UI
[18:36] is significantly changed with 3.0 and we
[18:38] need to make sure there's a minimum
[18:41] amount of screen space dedicated to
[18:42] these UI elements so you can actually
[18:43] read them without having to zoom in
[18:45] because there's lots of issues with some
[18:48] ships way to sort of to read them you
[18:50] have to zoom all the way in to read the
[18:53] text which in the middle of combat it's
[18:55] not something ideal so we've got
[18:57] templates for all the screens going
[19:00] across those that's why you'll have seen
[19:02] in previous atvs things like the Gladius
[19:05] cockpit screens have changed they were
[19:07] way too small to be visible so he
[19:09] brought them closer to the player made
[19:12] them larger we've angled them in
[19:14] towards the player to reduce reflections
[19:16] and added more of them we're also
[19:22] bringing back the combat visor interface
[19:24] which you see up on the top left and top
[19:27] right of your screen so you can have
[19:29] there essentially support screens so you
[19:32] could move information from your support
[19:34] screens up to those if you want but by
[19:36] default they're your self status and the
[19:38] target or pin target status so you can
[19:41] get an overview of those another thing
[19:43] is we've worked with the animation team
[19:45] about the poses in the cockpits so
[19:48] across all of our 60 plus ships we have
[19:52] about six to ten different poses so
[19:56] every ship fits one of those poses
[19:58] there's a few that are unique like the
[20:00] NOx but pretty much every other one is
[20:02] used across multiple ships which
[20:04] dictates the throttle seat control or
[20:08] yoke status as well as a range where
[20:12] they can interact with within the
[20:15] cockpit so over time we've picked
[20:19] templates for certain ships model the
[20:21] ships around those as we found they
[20:25] they've been adhered to in various
[20:27] levels of accuracy so you'll find one
[20:29] ship had the template put in when the
[20:32] artist was modeling their way they
[20:33] thought well maybe if I move the
[20:34] joystick one centimeter to the left that
[20:37] that looks better in this cockpit which
[20:39] it's fine the iocai solution can deal
[20:42] with that but then what happened was the
[20:44] next artist came along and went well
[20:45] that ship uses that template so I will
[20:47] use that template that they've got in
[20:49] that ship so I'll take their geometry oh
[20:51] but this is actually move like if I move
[20:53] this another centimeter to the left it
[20:54] fits this ship better so over time some
[20:57] of the joysticks have got further and
[20:59] further away from the player so when you
[21:01] get in the seats and the animation plays
[21:03] which is the same animation of grabbing
[21:05] they're grabbing the sticks you get this
[21:07] horrible snap where they go to the
[21:09] actual poses so for those ships earlier
[21:12] they listed we've redone all the
[21:15] controls they've all come back to the
[21:18] default position which we actually
[21:20] change so every ship had to change to
[21:23] match it because what we're decided was
[21:25] the template actually wasn't
[21:27] as good as it could be so all the ships
[21:29] have of their joystick certain throttles
[21:31] changed slightly
[21:33] they've all been remodeled to fit the
[21:34] hands better they've all got buttons on
[21:37] the on the control input so we've got
[21:40] enough geometry and animations to play
[21:43] with for firing your guns you can move
[21:45] buttons on it using afterburner or boost
[21:48] you can use buttons on the on the sticks
[21:51] we've gone through all the screens which
[21:54] are now larger they now all have buttons
[21:56] on there so all the future actions will
[21:59] be interacting with the cockpit have
[22:01] have space one of Chris's goals was
[22:06] someone that only knows how to use
[22:08] interaction mode can sit in the cockpit
[22:11] and just use that to work out what
[22:13] everything does in the ship so they'll
[22:15] be able to go into interaction mode and
[22:17] work out how to turn the ship on just by
[22:19] looking around the ship looking at the
[22:20] buttons the highlight looking at the
[22:22] feedback they get and be able to do
[22:24] everything from that primarily what the
[22:26] animators are doing is we're working on
[22:30] you know tuning in the GeForce
[22:32] experience so it feels properly where
[22:35] the camera sits in the cockpit in
[22:38] relation to you know where you see all
[22:40] your UI and stuff like that
[22:42] finalizing of finger poses adding in you
[22:45] know idols and you know kind of fidgets
[22:48] you know and anything that kind of you
[22:51] know can breathe life to the cockpit I
[22:53] mean it's something that that we've been
[22:55] focused on over the last three or four
[22:57] months and there's still more work to do
[23:00] there's always room for improvement but
[23:03] I think for the three over lease we're
[23:06] gonna be at a healthy spot that'll give
[23:07] a lot of players some satisfaction
[23:10] flying around we're improving our
[23:12] technology and we're improving the the
[23:14] animations that we're doing but we're
[23:16] also putting in these systems that can
[23:18] rely on the overall health state of the
[23:21] ship so you know the UK programming team
[23:26] have implemented hit reaction animations
[23:30] that happen based off of what direction
[23:32] you're getting hit from from all six
[23:34] axes and they they blend together and
[23:38] basically you get jostle around
[23:40] in the cockpit on the direction that
[23:43] you're going and that gets overlaid on
[23:45] top of the character animating his hands
[23:49] and you know throttle and joystick and
[23:53] in addition to that the the overall
[23:57] posing fighting of g-forces that we have
[24:00] for the third-person so it's kind of a
[24:03] culmination of a lot of different things
[24:04] there is like a lot of Technology
[24:07] overlap between animation and design and
[24:10] and the programming team you know to get
[24:14] the overall desired effect and you know
[24:17] we have review gate meetings where we we
[24:19] all take a look at it look for ways to
[24:22] improve it think about new features like
[24:25] oh and maybe your health the healthier
[24:28] ship gets to you know a certain
[24:30] percentage then the red lights start
[24:32] blinking there's fires going on there's
[24:34] sparks flying
[24:35] you know emergency lights are going and
[24:38] and then that way you know you have to
[24:40] you know hit the eject button the
[24:42] g-force animations and the blend spaces
[24:45] we're using are all hooked into the ifcs
[24:49] system that that drives the ship so
[24:51] we're using actual g-force simulations
[24:55] that that results in a blended animation
[25:00] state for a particular set of g-forces
[25:03] coming from X Y & Z the objective is to
[25:06] make it feel like a living breathing
[25:09] vehicle it's not just you you press a
[25:11] random button on your keyboard or HOTAS
[25:15] and stuff happens it's that's tied to a
[25:18] specific action which will have a in
[25:20] game reaction to that so you press the
[25:23] engine on button in the cockpit roll
[25:24] move and rotate and long term your
[25:27] character will go out and interact with
[25:30] that automatically to do that when you
[25:32] press the button so you your finger will
[25:34] reach out and touch it
[25:35] twist it whatever the button is the
[25:38] first step is getting all those buttons
[25:40] mapped out in the cockpit and
[25:42] interactive the next step is those
[25:46] buttons animating themselves so you do
[25:49] the action in interaction mode or you
[25:50] press the shortcut key you see a
[25:52] physical reaction for
[25:54] those things and then the final step is
[25:57] the whole player leaning out touching it
[26:00] which is another reason why we've had to
[26:02] adjust all the cockpit screens so
[26:03] they're all within arm's reach of you
[26:06] because we don't want the player to you
[26:08] press a shortcut key whilst you're
[26:10] flying to change something you don't
[26:11] want your character leaning forward bent
[26:14] double trying to reach a button that was
[26:15] too far away because that's just going
[26:17] to it's going to mess with your view
[26:19] it's going to be unpleasant to deal with
[26:21] on top of the animation unification
[26:24] we've also changed how enslavement
[26:27] process works between seats and players
[26:30] which massively simplifies setup across
[26:35] the board so when you sat in a seat that
[26:37] allows you to do other actions that you
[26:39] could do standing up so for instance you
[26:42] it instantly allows you to do upper body
[26:45] animations that are set up anywhere else
[26:48] you don't have to set up say for the
[26:51] Gladius and the moat for saluting that
[26:54] would have had to be a Gladius specific
[26:56] emote whereas now we can have a hotel a
[26:59] moat that works across all those ships
[27:01] in probably and in fact across all of
[27:03] them so the actor enslavement has
[27:06] changed which is great so we've had a
[27:10] lot of new kind of technology in place
[27:12] specifically for the cockpit to make it
[27:15] make you feel a lot more visceral
[27:16] Romulan Espinosa is one of our gameplay
[27:19] programmers in the UK has been a really
[27:21] huge help with that changing kind of the
[27:23] way the seats are set up the way the the
[27:27] I K and the in the arms work so that you
[27:29] can have a little bit more reach and and
[27:31] and things like that so you know there's
[27:34] been a lot of different new features
[27:36] developed just for this sprint that
[27:39] enable the artists and the animators and
[27:42] the visual effects artists to make their
[27:46] stuff look as great as possible and feel
[27:48] as great as good as possible for the
[27:50] experience we had to implement on
[27:53] different type of enslavement so what we
[27:55] were doing before this new enslavement
[27:57] we were using the old one so for the old
[27:59] one what we had was to a TVs and DVD
[28:03] system animation database with all the
[28:05] animations we use for
[28:06] entity so in the old enslavement we had
[28:10] one for the vehicle one for the city and
[28:13] then all the animation animations were
[28:16] being put there other point with that is
[28:18] we were deactivating the player
[28:21] basically so was the seed who was saying
[28:24] I need you to play this animation which
[28:27] is stored on my database but in this
[28:30] case that's for our project that's
[28:33] madness because if you need any
[28:35] animations on the animation on the
[28:36] player you need to copy those animations
[28:39] into this if you need to play image you
[28:40] need to fire your weapon while you are
[28:44] seated or whatever you need to add all
[28:46] those animations into every single adv
[28:49] and we have a bunch of advs one for seed
[28:52] per C so it's impossible so we created
[28:56] this new statement which is the city is
[28:59] still in charge is who says I want you
[29:02] to play this animation but the player is
[29:04] still active so the player itself can
[29:06] play animations so we don't need anymore
[29:09] to add those animations into every
[29:11] single ADB we just say I want you to
[29:14] play this animation player and because
[29:16] it's not you it's up to you to play it
[29:17] so the player is just gonna do it you
[29:20] have two options really you can just
[29:22] leave the player to the seed or on the
[29:24] other way around but in this case the
[29:28] seed can move or we have these
[29:30] animations with the canopy opening and
[29:33] stuff like that so you want the player
[29:35] to move accordingly to the seed and not
[29:39] only our way around we don't want the
[29:40] player to stand up and then they see
[29:42] move or wherever what you want is you
[29:45] want to move the seed and then the
[29:47] player react according to that movement
[29:51] so that's why we enslaved the player to
[29:53] the seed and not only other way around
[29:56] another part of the sprint is setting
[30:00] the setting of the light group and like
[30:02] group transitions for cockpits so it's
[30:05] something we've had in multi-crew ships
[30:07] is the damaged States the effects and
[30:08] lighting triggers so when your ship is
[30:11] damaged you have all this cool the
[30:13] effects and lighting of the ship in a
[30:15] motorcy state but we never really had
[30:16] that on the single-seaters so we've
[30:19] started
[30:20] that in those ships so rather than just
[30:22] purely relying on the UI element telling
[30:24] you you're your low end health which
[30:27] when you don't have the CBI in two six
[30:30] three is incredibly hard to tell where
[30:32] you now have you've got the cockpit
[30:35] lights flashing red we've got all the
[30:36] damage effects smoke flames coming in
[30:39] the cockpit so it really does hammer at
[30:41] home what state your ship is in and then
[30:44] when you repair it all goes away it's
[30:45] all goes backwards and forwards for the
[30:47] cockpit experience for the VFX team is
[30:50] more about the damage specifically
[30:53] directional feeling of the damage so
[30:55] currently in the game we do have
[30:57] interior damage but it's more it's not
[31:00] really a directional so you don't really
[31:01] get a proper sense of where the attack
[31:03] is coming from all the VFX are coming
[31:06] from the cockpit model itself we are not
[31:11] creating the cockpit we are taking
[31:13] whatever is being created and we are
[31:15] making sense out of it
[31:18] so you won't see random effects coming
[31:20] from random places it is thinking about
[31:24] what would happen like what devices are
[31:27] on in the cockpit and what type of
[31:30] destruction you would see in an actual
[31:33] vehicle of that type there's a lot of
[31:36] thought put into into that placement of
[31:38] effects has to be done manually so each
[31:41] vehicle has a different cockpit so I
[31:43] need to manually place these effects so
[31:46] it makes sense we don't want for example
[31:48] fire coming of a fire extinguisher
[31:51] unless it's made in UK but that's a
[31:54] whole nother story
[31:55] so yeah the placement is done manually
[31:59] but we are creating like library of
[32:02] effects so I can use the same effects I
[32:04] made for ladies on another vehicle but
[32:07] it will look different just because the
[32:09] the context is different these VFX are
[32:12] coming from different objects and
[32:14] locations so it is making a huge
[32:16] difference when you're in the cockpit
[32:18] the type of effects you're gonna see
[32:20] will be Sparks smoke nothing that's
[32:23] gonna be to kind of in your face so you
[32:25] can't see where you go in because you're
[32:26] not going to want that necessary
[32:28] unless you really are in big trouble and
[32:30] that is new compared to what we
[32:31] currently go in the game
[32:33] currently in the game it's either the
[32:35] damages either on or off really so you
[32:37] don't really get a sense of where
[32:38] anything's coming from so for the
[32:41] cockpit experience we are we we always
[32:45] try to give the player more feedback so
[32:47] we decided to create like different
[32:50] blend spaces for hit reactions and pass
[32:54] out and wake up animations so basically
[32:57] blendspace is just it's an asset that
[32:59] allows us to have any number of
[33:02] animations blend between them according
[33:04] to different input so for instance if I
[33:07] pass out and I want to give the player
[33:10] like different impulses according to the
[33:12] g-forces
[33:13] we cannot just create 100 animations we
[33:17] can have like ten different animations
[33:19] or maybe five different animations and
[33:21] according to the input in this case the
[33:22] g-forces we can play we can blend
[33:25] between those assets and they are really
[33:29] nice animation in between them so we did
[33:31] that for the pass out and wake up and
[33:34] for the he reaction is the same thing so
[33:35] in that case the input are the distance
[33:40] of the impact from the ship and then
[33:44] there's hope
[33:46] heavy is the thing that is impacting the
[33:49] ship so it's not the same to be on a
[33:52] Gladius and someone throw you a fork or
[33:57] throwing you one of the big-ass missiles
[34:02] so we needed some kind of different
[34:07] animations to give the player some kind
[34:09] of feedback for the impacts apart from
[34:12] that we worked on animation driven 9k
[34:15] animation driven okay we have two
[34:17] different systems in place one is the
[34:19] limb by K and the other one is the
[34:21] animation to you and I K the base for
[34:24] both is the same thing but the way they
[34:26] are activated is different so for the
[34:28] animation driven NK is the animator who
[34:30] says I want to use AI K at this point in
[34:33] animation I don't want to use this okay
[34:35] what is that gave for so when you try to
[34:38] read an object or in this case for the
[34:41] cop
[34:41] but the throttle logistic or maybe the
[34:44] steam will because the those objects are
[34:47] moving we need their hands to move with
[34:49] them otherwise you will see some kind of
[34:52] delay that you can see in other games so
[34:54] that's why with this idea we can like
[34:57] put together like glue together the
[34:59] hands on those objects and that's why
[35:01] the animation driven I guess for bulimia
[35:04] is the same thing but we activated in
[35:06] code before the official sprint kicked
[35:09] off we did about 2-3 weeks with myself J
[35:13] and VFX guys just going over various
[35:16] alterations so we picked Gladius as the
[35:18] test case because it's used by far the
[35:22] most in squadrons so you're going to be
[35:23] sat in there for a long period of time
[35:26] so it needs to be something that's good
[35:28] and an easy place to understand so we
[35:33] went through so many iterations of is
[35:35] this seat in the right place move the
[35:37] seat up-down left-right backwards
[35:39] forwards move the screens forwards move
[35:41] the canopy bars around move with the
[35:43] buttons we had a list of 2025 actions
[35:48] that we knew we would need in every
[35:50] single cockpit so that's that's in the
[35:52] new guidelines and then there's about
[35:55] another 10 15 that need to go on the
[35:57] control input so either you stick and
[36:00] throttle yoke or any combination of
[36:02] those things we've built more in for
[36:04] redundancy so anything in the future
[36:06] that needs an action that currently
[36:07] doesn't we've got space to do we don't
[36:09] need to go back and read it all again
[36:10] there was a lot of backwards and
[36:12] forwards with multiple departments on
[36:15] getting to where we are most we could do
[36:18] this with the the old item 1.0 ships it
[36:20] would have been a huge amount of sort of
[36:23] throwaway work so whilst we were we were
[36:27] in the process of doing the conversion
[36:29] to 2.0 as we started doing this this
[36:31] sprint sort of managed to tie them both
[36:34] in together but with item 2 below makes
[36:36] it all incredibly quick and you set out
[36:39] for one ship it's it takes minutes to to
[36:41] set it up on the next ship rather than
[36:43] hours or days having to manually
[36:45] duplicate everything
[36:47] would have had to have done before I
[36:48] think that the most challenging thing
[36:50] was the the amount of ships that we have
[36:53] to deal with because there was some
[36:54] pretty big decisions we had to make
[36:55] what's doing it knowing that if we
[36:58] change this template that means we have
[37:01] to go revisit 1015 ships and it's
[37:04] guessing or the directors and leads on
[37:07] board and agreeing that as they if we do
[37:10] this it's it's a big change your
[37:13] department can have to see lots of work
[37:15] but it unifies everything nicely and in
[37:18] the future any changes that we have to
[37:20] do automatically happen across all ships
[37:23] you don't have to do that change 15
[37:25] times anymore you do it once and it it
[37:27] just works but it means you don't get to
[37:30] work on these other cool features so
[37:33] it's no one likes going back and feeling
[37:36] like they're redoing stuff but sometimes
[37:38] you just have to bite the bullet and
[37:40] revisit what you've done to make things
[37:43] better for the future in our game
[37:44] getting to a seed is not just I press a
[37:47] button and I get in there no we need to
[37:49] move the ladder we need to open the
[37:51] canopy we need to move the dashboard we
[37:53] need to move the seed we need to take a
[37:54] seat we need to push some buttons all
[37:57] the sequence you need the player to be
[38:00] enslaved and I think that's the most
[38:03] difficult thing in our game which is do
[38:06] you play all that sequence and still
[38:09] don't lose control of the entire
[38:12] sequence and the entire thing and I
[38:14] think that was quite challenging is the
[38:16] animation driven I K we had to basically
[38:20] reward the entire thing that we were
[38:23] using for animations we had to basically
[38:26] reinvent all the the way we were
[38:30] processing all the animations in order
[38:32] to get rid of that one frame delay we
[38:35] were having so basically we were having
[38:37] an object we were having our hand we
[38:41] were trying to reach this object so
[38:43] basically the hand was always behind
[38:44] because this object this pan was moving
[38:48] first but then the object so we were
[38:50] always one frame behind but in the case
[38:52] of these new animations even I K after
[38:56] our changes what happens now is because
[38:59] I'm enslaved my
[39:00] and is kind of enslaved to this object
[39:02] I'm gonna leave the object to move first
[39:05] and then without up-to-date position
[39:07] when I move the hand and then we are in
[39:10] sync all the time in this case was kind
[39:13] of a broad force a gigantic email
[39:17] between all the clever people chris
[39:21] Roberts
[39:22] evil Jen's Balti everyone in the company
[39:28] was trying to get these things right
[39:30] because this disco has been there
[39:32] forever but if we break this code
[39:35] nothing is gonna work in the game
[39:36] absolutely nothing and everything is
[39:38] going to break mannequins and I've been
[39:39] to war the character - it's not going to
[39:41] work da leaders never into war of course
[39:43] the game is not going to work so the
[39:44] plan for right now is to release the
[39:47] various features as part of the khakhra
[39:48] experience in chunks or phases so the
[39:50] changes we're making on the cockpit
[39:51] experience sprint or were things that
[39:54] were always kind of in the work so we're
[39:55] always planned to have happened really
[39:58] it's been Chris's vision from the very
[39:59] beginning but because it was it required
[40:04] so much attention from so many different
[40:06] teams across the whole project there was
[40:08] never a considerable focused effort
[40:12] between all those people at the same
[40:14] time to make it happen and so really
[40:16] what it took this this kind of gathering
[40:18] of people coordinating everything that
[40:20] everyone into a sprint structure to get
[40:22] everyone focused all at once into making
[40:24] the decock experience really to the same
[40:27] high quality standards that chris has
[40:28] had since the very beginning so as you
[40:31] saw smoothing out animations adding hit
[40:33] force reactions and damage indicators
[40:35] are just some of the ways that we've
[40:37] upgraded your flying experience
[40:39] yes it's very cool and you'll see some
[40:41] of these features in 3.0 while others
[40:43] will be coming in later releases and
[40:45] squadron 42 so once all these features
[40:47] are in it'll help create the immersive
[40:50] gameplay experience that we've all been
[40:52] striving for especially me it sure will
[40:54] and that's it for today's show we'd like
[40:57] to thank our subscribers for supporting
[40:59] all of our shows October's subscriber
[41:01] flare will be released this week so
[41:03] scout how to spot in your hangar to
[41:05] display the next set of ship schematics
[41:07] yeah and finally it's been just over 5
[41:10] years since we first announced star
[41:12] citizen at GDC in Austin
[41:14] October 10th which was two days ago and
[41:18] it's incredible to think how far we've
[41:19] come in such a short amount of time and
[41:21] it's only being possible because you
[41:23] support us along the way so a big thank
[41:25] you to all the backers out there and for
[41:28] all the you've done over the years it's
[41:31] really really appreciated and actually
[41:34] in the light of you guys backing it
[41:37] there's a couple of cool little gifts
[41:39] that we got recently so if I pull them
[41:41] out here one we got a very cool patch
[41:46] from SF c'moon who has just returned
[41:50] from his tour in Iraq and he I think
[41:54] even arranged a bar citizen or I get
[41:57] together at least in in Baghdad so it's
[41:59] pretty amazing how far that we have yeah
[42:02] we're all like we're everywhere it's
[42:03] very cool so yeah thank you very much
[42:05] for setting this very cool patch and
[42:09] much appreciated and then also a really
[42:13] sweet
[42:15] letter from Louis carrion who is
[42:18] obviously French and Corrigan's
[42:20] pronounces a last name far better than I
[42:22] can who his father is specia is the I
[42:27] guess biggest French collector of
[42:29] meteorites and also has a I believe a
[42:33] kind of mineral yeah and he will open
[42:37] this on camera but anyway he said ever
[42:39] since he was four years old his dream
[42:42] was to go and explore the moon and as he
[42:44] got older explore the entire of space
[42:46] and he's you know always thought he was
[42:49] born a hundred years too early and then
[42:51] he discovered star citizen for a few
[42:52] years ago and it was a relevation and
[42:56] and you know in in in a way his dream is
[43:00] going to come true so he you know he was
[43:02] a fan of Wing Commander in the days and
[43:04] freelancer and he's really thankful and
[43:08] so he sends this gift and with the book
[43:11] that was written by his father and also
[43:14] a very cool we'll see well I'm across
[43:26] honest
[43:27] I started I'll finish B and say
[43:44] meteorite very cool thank you very much
[43:51] Louie that's a really really sweet gift
[43:55] and thank you very much for your support
[43:57] and thank you to everybody for your
[43:58] support it's pretty amazing to be here
[44:03] and building the game at the scale and
[44:06] scope that we're doing and it's all down
[44:08] to you guys so thank you very much
[44:10] looking forward to you know many more
[44:13] years of expanding the star citizen
[44:16] universe and you know giving you amazing
[44:19] stories to experience and Alexis
[44:21] squadron and beyond so thank you and
[44:23] until next week we will see you around
[44:34] [Music]
[44:57] thank you for watching so if you want to
[44:59] keep up with the latest and greatest in
[45:00] the star citizen the squadron 42
[45:02] development please follow us on our
[45:03] social media channels see you soon
[45:13] [Music]

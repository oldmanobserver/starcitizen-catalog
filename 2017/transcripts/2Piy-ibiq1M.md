# Star Citizen: Around the Verse - The Physics of Atmospheric Flight

**Video:** https://www.youtube.com/watch?v=2Piy-ibiq1M
**Date:** 2017-12-14
**Duration:** 46:54

## Transcript

[00:15] hello and welcome to another episode of
[00:18] around the verse our weekly look behind
[00:19] the scenes at star citizen's development
[00:22] I'm sandy Gardner and I'm Steve bender
[00:24] in today's episode our designers will
[00:26] discuss how we're implementing
[00:28] atmospheric flight and differentiating
[00:30] it from space travel but first let's
[00:32] check in on the development team and
[00:34] take a look under the hood in this
[00:36] week's burn down welcome back to burn
[00:39] down our weekly show dedicated to
[00:41] reviewing progress on the release of
[00:43] star citizen alpha 3.0 we're getting
[00:46] close to live release so let's check out
[00:48] how things are going so we're on target
[00:51] now with the issues we've got we're
[00:54] getting quite a few and the issues fixed
[00:57] up and the ones that are propping up a
[01:00] more feature related issues which are a
[01:03] lot simpler to fix most of the time than
[01:07] code issues and so it's good to see that
[01:09] we're moving into this this transition
[01:12] of feature issues rather than code for
[01:14] the rest of team we're now into book
[01:17] fits and polishing mode for 3.0 so the
[01:19] remaining issues after I've gone through
[01:21] I've moved the tasks will leave us with
[01:24] any outstanding bugs 43.0 obviously the
[01:27] world will come in as some of these
[01:30] features are tested a bit more heavily
[01:32] and keyway are focusing more on on
[01:36] hammering those
[01:40] the mission givers they went through a
[01:42] full QA TR I did my my review last week
[01:46] however that was not in the game it's it
[01:51] was a multiplayer so now we have a
[01:54] review set this week for the full in
[01:59] game and basically being will switch
[02:02] between all the different reputation and
[02:04] virtue variables so that we can see all
[02:07] of their lines and then once that's good
[02:11] that will be sign-off but we're more
[02:14] basically in the final 95% of it on the
[02:17] mission giver side of things we are
[02:18] turning attention to the feedback that
[02:21] todd papy has given this week he's given
[02:24] some feedback in relation to the
[02:25] animations having issues where the
[02:27] character is looking off a certain
[02:29] direction and then we'll sat back and
[02:30] and look at you when he's delivering his
[02:31] lines we're also making sure we're
[02:34] putting the final finishing touches on
[02:36] on ruto to make sure the the the overall
[02:39] effect of the route of route owes coming
[02:40] out of the hologram looks really really
[02:43] good so we're getting those final
[02:45] details locked in and should have those
[02:47] characters ready to go soon one of the
[02:49] strange issues that popped up last week
[02:51] was all a I and NPC ships were spawning
[02:55] in without pilots they responding
[02:57] completely empty and which meant the non
[02:59] of the missions that involve those could
[03:02] be completed or you couldn't leave and
[03:04] all swans the shits just didn't do
[03:05] anything so Rob Johnson and spent some
[03:09] time and he was able to fix that one up
[03:10] again before we went to beat you so we
[03:13] received this bug regarding whole
[03:15] objects from de we're basically shadows
[03:17] from whole objects were being cast on to
[03:19] the main scene hollow objects are
[03:22] basically invisible to the main player
[03:23] camera and we resolve this bug by bassy
[03:27] during the shadows zone query we have a
[03:30] bunch of flags that we can say ignore
[03:31] these types of objects or take these
[03:33] types objects and we basically resolve
[03:36] it by saying follow a shadow zone query
[03:38] ignore all objects from coming through
[03:41] and therefore it won't render in the
[03:42] shadow pass and you won't get a shadow
[03:44] appearing in the main scene today I'm
[03:46] gonna show you the bug that we calling
[03:47] the ghost of grim hats
[03:51] this is the room we'll meet who tow one
[03:54] of our mission givers is no it looks
[03:58] nice and empty everything is fine look
[04:01] what happens when I turn on the
[04:03] flashlight there's a ghost it's not a
[04:08] shadow as a volume what it actually is
[04:13] it's actually Ruto himself to create
[04:18] this hologram we are putting invisible
[04:22] and NPC into the world
[04:24] then we animating it and projecting to
[04:26] the to the hologram and apparently this
[04:30] this invisible NPC can be illuminated
[04:33] with a flashlight at the moment bug is
[04:36] on the graphics programmers we're hoping
[04:39] to fix it soon so you could have grim
[04:41] facts without any ghost so the NPC admin
[04:45] officer I reviewed last week and that's
[04:49] from a behavior standpoint was good now
[04:53] we were doing the final step of that
[04:55] which is integrating that into actual
[04:57] missions and so once those are done I
[05:00] will review it from start to finish in
[05:03] an actual mission and then it will be
[05:05] signed off we have just started
[05:09] balancing of environmental missions so
[05:13] these are the probability volumes that
[05:14] you may have heard of but Tony
[05:16] certificate has been working on so these
[05:20] are in our dev builds so you'll be like
[05:23] you know quantum traveling along and be
[05:25] pulled out you know there's an asteroid
[05:27] kind of rogue asteroid flowed in via the
[05:30] path of a thing and they make maybe it's
[05:32] caught a few other people involved you
[05:34] know into in in there as well and it
[05:37] could be pirates it could be something
[05:39] smashed into it so there's a little to
[05:41] explore or interact with and while your
[05:43] quantum traveling as I say these are not
[05:47] obviously released yet but work because
[05:50] we're trying to balance fees so it
[05:52] doesn't feel like an a final fantasy
[05:54] constantly being pulled out by a bad guy
[05:57] kind of thing as you're trying to get
[05:58] from A to B which it currently does so
[06:02] yeah we're ballot we tune in though
[06:03] until we get something that's kind of
[06:06] rare and but like so it kind of shocks
[06:08] you when it happens our admin office
[06:10] worker our designers are still
[06:12] continuing to work on that and we've
[06:14] pretty much closed that out now we're
[06:16] just now implementing those into the
[06:18] mission flow so that you're able to
[06:19] interact with them in that you get
[06:21] mission markers specifically denoting
[06:23] them and one of the issues we've noticed
[06:26] for a while as well as been raised by
[06:28] some of our best pilots in the community
[06:30] is a an ESP book where ESP was not being
[06:35] able to pull you onto target after
[06:37] several of our team looking into this
[06:39] this actually seems to be part of a
[06:41] bigger issue with ifcs
[06:42] and ifcs oscillating so slightly moving
[06:46] around and overcompensating and under
[06:48] compensating in particular circumstances
[06:50] both John and David have been looking
[06:52] into this this week so they can get to
[06:54] the bottom of it
[06:55] we fixed one of the bugs with this which
[06:57] should improve it slightly but the team
[06:59] will continues to work on this so we can
[07:01] make sure that ESP and I FCS is is as
[07:04] good as it can be for r3 or release
[07:08] while the ship set upside we are just in
[07:11] bug-fixing and polish mode now we are
[07:13] fixing bugs left and right bugs to do
[07:16] with 300 series animation issues where
[07:18] the player is getting up into the 300
[07:20] eye and being shoved out through the
[07:21] bottom of the ship somehow we're fixing
[07:24] up landing gear issues on the glaive as
[07:27] a glaive is not really landing properly
[07:29] and tipping over we're fixing up issues
[07:32] with the herald atmosphere there's
[07:34] certain parts of the herald where if you
[07:36] stand at the specially right spot you
[07:38] can suffocate and die so that's a
[07:40] problem we're fixing that up also
[07:42] we're also turning attention to some
[07:44] balance things as well
[07:46] we have shield balance in QA testing
[07:48] right now we've got four four-sided
[07:50] shields or you can actually divert power
[07:53] to various parts of the shield's and
[07:55] stuff like that so we're testing to make
[07:56] sure that looks good and feels good for
[07:58] each ship we're also doing that across
[08:01] the number of a number of different
[08:02] ships as well and items to make sure
[08:04] that the balancing effort is going
[08:07] smoothly we will be doing some final
[08:09] work on the EMP to get that ready and
[08:13] for the most part it turns off
[08:15] everything in the ship already turns off
[08:18] the MFE turns off the power however
[08:20] there were some still 2d layers of the
[08:23] HUDs that were not being turned off
[08:25] we'll get those turned off and so I view
[08:29] that those is kind of minor bugs but
[08:31] that should be good to go as well this
[08:35] week I've been working on a lot of ship
[08:37] issues they've been multiple numerous we
[08:41] have a lot of issues with the doors
[08:42] coming in you notice the caterpillar
[08:45] doors slamming shut and a wall of
[08:47] collision preventing you from getting
[08:49] out we've also had problems with the
[08:52] constellation cargo bay calling and
[08:55] lighting issues a lot of this is because
[08:58] if we've now separated the doors as
[08:59] items now to better communicate and do
[09:03] damage in the future the systemic damage
[09:05] work so this is going through different
[09:09] processes some art related some
[09:11] technicals sometimes I'm passing it to
[09:13] an engineer
[09:14] sometimes I'm fixing it myself and
[09:17] there's also rigging issues so there's
[09:19] numerous issues going on caused by the
[09:21] itemization but we're working through
[09:23] those problems so we've made updates to
[09:26] the shields the real update that was
[09:29] made was that we have actually balanced
[09:31] all the shield Health's which we'd have
[09:33] an opportunity to do that in the past
[09:34] and so I'm sure a lot of players are
[09:36] frustrated with how difficult it was to
[09:38] take down ships so what we've done is
[09:41] we've taken all of the size the vehicle
[09:44] and the size one two and three shield
[09:46] generators and then bounced the health
[09:48] so that they're a reasonable value for
[09:50] the four phases on each of the ships
[09:53] that we have so far the recharging time
[09:55] you'll notice is much more reasonable -
[09:58] and that they'll take some time to
[10:00] charge all four and this results in the
[10:03] each individual face taking some time to
[10:06] take down and without allowing them to
[10:10] charge to wrap at a pace so that it's
[10:12] impossible to take down a face a shield
[10:15] you're hitting with your guns
[10:17] the shield screen consists of indicators
[10:20] for your power your regenerate the
[10:23] actual amount of health in each shield
[10:26] face the distribution of the shield
[10:30] health across the shield system as well
[10:34] as the the status of the hardening
[10:37] system whether it's active how much
[10:40] cooldown time there is and also it lets
[10:46] you know when you have when your regen
[10:49] is is broken when when you're when you
[10:52] hit zero health it has to recover from
[10:54] that so you also have a standby button
[10:57] to let you trigger that so this week
[11:00] I've been working on overall damage and
[11:02] debris there's been some changes on the
[11:04] engineering side for how our ships break
[11:07] apart so I've just been going through
[11:09] all the ships with a fine-tooth comb and
[11:11] making sure that all the pieces break
[11:13] apart in the correct order and you know
[11:15] the overall ship dies and everything
[11:17] flies away correctly there's been some
[11:19] ghost debris that kind of hangs around
[11:21] afterwards and we have various issues
[11:23] were working through
[11:24] to make sure all the ships look as cool
[11:26] as possible and actually work correctly
[11:27] with insurance integration there's just
[11:30] minor bugs right now where it's just not
[11:33] showing the players balance or or how
[11:35] long it has to remain as soon as we get
[11:38] those bugs fixed then everything will be
[11:40] we'll be good to go
[11:44] and this week in our burn down we've
[11:47] fixed some issues with grab Lev so one
[11:49] of the issues that we've been seeing on
[11:50] the PTU build is the bikes dragging
[11:52] across the ground
[11:53] we've severely reduced the amount of
[11:55] times this happens although there's
[11:56] still a few user cases where this is
[11:58] still occurring and these it will we'll
[12:00] continue to investigate these so with
[12:02] item 2.0 balance as well as the
[12:04] atmospheric flight tuning we've finished
[12:07] what we consider kind of first pass on
[12:10] those with the the balancing and
[12:13] everything that will continue until we
[12:15] actually ship three Oh as far as the
[12:17] atmospheric flight we feel that's in a
[12:20] pretty good place we've we've just
[12:22] recently checked in some some new fixes
[12:24] before that and some new balancing for
[12:29] that as well but with the item 2.0 we've
[12:32] we've gone through and we've done some
[12:34] more fuel adjustments and and we're
[12:37] getting that to you the place where we
[12:39] see so it really depends on how the
[12:42] players hammer on the boost button and
[12:46] if they're if they're flying
[12:50] conservatively then they the fuel will
[12:53] actually last longer and and it's
[12:55] getting to the place where from a design
[12:57] standpoint we feel it's right then going
[13:00] through and adjusting the power the
[13:02] shields that those will be kind of a
[13:04] constant ongoing thing until we actually
[13:06] ship 3.0 we've gotten some more
[13:08] atmospheric flight issue fixes in which
[13:11] include fixing turbulence when the ships
[13:13] are stationary so one of the things you
[13:15] may have seen in some of the previous
[13:16] PTU builds is even when the ships are
[13:19] stationary they'll still wobble as if
[13:20] they're being impacted by turbulence
[13:22] which most of you will know that that
[13:24] isn't even vaguely realistic so we fixed
[13:27] that
[13:31] ship item UI integration we're on the
[13:36] second of three QA TRS so ideally bone
[13:42] gets the third one in today and then
[13:45] once those are all in we should be good
[13:48] to go
[13:48] and at that point we'll we'll set up a
[13:51] review to to look at it make sure that
[13:53] you know everything is ready for the
[13:56] players then from there with the PMA
[14:02] that is finally entered in QA TR we have
[14:05] the the category the categories the way
[14:07] that we want them to be
[14:09] we were finalized in the highlighting so
[14:11] ideally once that finishes the QA t are
[14:14] then won't be ready to to flip the
[14:18] switch and say that da does feature
[14:20] complete the VMA is is being worked on
[14:23] right now as we speak since most of the
[14:28] work that is being done on the PMA
[14:29] transfers directly over to the VMA so
[14:33] then from there we'll will probably need
[14:36] to do some minor cleanups and and the
[14:38] way that we sort through the the list of
[14:41] the items that are on the ship and but
[14:44] that's pretty minor personal inner
[14:46] thought went through an impromptu desk
[14:48] review with Chris yesterday and that is
[14:52] is basically in designers hands now to
[14:55] implement it the way that Chris wants it
[14:57] and so I think from feature standpoint
[15:00] that there's just minor fixes on that
[15:03] one
[15:05] we've had loads of work going into the
[15:07] persistence warning right now in the PTU
[15:09] people can use the beds as a safe point
[15:13] to log out and then come back to they
[15:17] can use a personal inner thought to do
[15:20] this when they get into the bed and
[15:21] we've been having some great feedback
[15:23] about that already as for performance we
[15:25] made some good progress especially now
[15:28] with the feature log in place so the the
[15:30] features are locked and now we as a
[15:32] performance team can go in and really
[15:34] see okay this is the set of features we
[15:36] want to ship with and we can go in and
[15:38] see okay where can we improve even more
[15:40] because prior to that of course new
[15:41] features were coming in and we had to go
[15:43] over and over again because new features
[15:46] might of course cause some more
[15:48] performance trouble for us so but now
[15:50] with the future lock we can really go in
[15:52] and see okay where can we improve on the
[15:56] other side what what helps us as well is
[15:58] people now stop working on new features
[16:00] and do have the time to go in and
[16:04] actually fix what we point out to them
[16:06] so instead of working on features we can
[16:09] now work on performance and actually
[16:11] polish what we've already got last week
[16:13] we had David Coulson working on the
[16:15] ranged based I realized variable update
[16:18] culling and which is a an amount of work
[16:22] that should improve performance quite
[16:25] significantly across the board
[16:26] especially with larger player cuts and
[16:29] going up to 14 50 player cuts and he
[16:33] checked in that work on Friday but it
[16:36] has created a few issues which keyway
[16:39] highlighted in a test request that they
[16:41] were doing for this work and so since
[16:43] then we've had David and Clive of the
[16:46] network team and Chris Balti over Andy
[16:49] all working together on and trying to
[16:52] resolve these issues and some of them
[16:54] include things like desync and
[16:56] performance spikes and issues where
[16:59] you're spawning incorrectly and so
[17:02] things like that they've been working
[17:03] together to try and get them all fixed
[17:05] so we can get that out to the public and
[17:06] test it on the large scale that we
[17:08] needed for last week we've been fixing
[17:11] issues and probably most notably there
[17:14] was a bug where if a server being
[17:16] running
[17:17] about six hours physics time and start
[17:19] going backwards one of our network guys
[17:22] spotted the issue put a fix in and now
[17:25] time always goes forwards which is which
[17:27] is good to know personally in a thought
[17:29] has passed its final review now so
[17:31] that's also in the PTU for people to use
[17:34] we've been getting some great feedback
[17:36] about that as well there are still
[17:38] things we want to change and to polish
[17:41] as the the final pass before we're okay
[17:44] with it being the final implementation
[17:46] for 3a but this is very very close now
[17:49] stress testing the game with thousands
[17:51] of people playing continues to throw off
[17:53] tremendous amounts of information
[17:55] regarding both performance and stability
[17:57] daily updates using our Delta patcher
[18:00] are allowing us to charge ever closer to
[18:02] this live release as of filming this
[18:04] we're at 176 must fix issues for our
[18:08] live release candidate of star citizen
[18:10] alpha 3.0 the team has checked in over
[18:13] 518 updates to the branch and closed
[18:16] dozens of issues every day as leadership
[18:18] continues to hone in on what's
[18:20] absolutely necessary to address to go
[18:22] live as quickly as possible see you next
[18:25] week
[18:25] he run burned down don't forget to check
[18:29] out our weekly production schedule
[18:30] report on the website for even more
[18:32] insight into the development process now
[18:35] as many of you have noted in the forum's
[18:37] piloting a ship in space should of
[18:39] course feel very different than flying
[18:41] in a planet's atmosphere that's right
[18:44] aside from gravity did contend with wind
[18:46] and weather will eventually be factors
[18:48] while flying planetside our team has
[18:50] been fine-tuning the functionality that
[18:52] will help make atmospheric flight feel
[18:55] convincing and distinct let's see what
[18:58] they have to say about the unique design
[18:59] challenges associated with introducing
[19:02] these new mechanics
[19:11] so I'm Mike Snowden the VFX director I'm
[19:14] David Coulson I'm a junior gameplay
[19:16] programmer here that sort of ended up
[19:18] specializing in flight control and ifcs
[19:20] sort sort of tasks
[19:22] I'm Andrew Nicholson and I'm tech
[19:24] designer at foundry 42 my name is John
[19:27] Pritchett I'm a senior physics
[19:29] programmer here I specialize in the
[19:32] vehicle control systems flight model
[19:35] missiles you know any place where we
[19:38] need control systems when you talk about
[19:40] the atmospheric flight we're talking
[19:42] about the long-term goal and
[19:45] implementing a short-term goal as well
[19:46] long term goal we want to have thrusters
[19:49] performing differently in space and an
[19:51] atmosphere in space you've got way more
[19:55] thrust to use and it's gonna be like an
[19:57] impulse effect so you have these really
[20:00] high accelerations that are very short
[20:02] lengths of time so the pilot can manage
[20:05] them they're not really high g-force but
[20:08] for a very short at the time and the
[20:10] opposite to that is sustained thrust and
[20:12] that would be what we use in atmosphere
[20:14] so you have to always be firing these
[20:16] thrusters to stay above the planet to
[20:19] say gravity you're fighting gravity with
[20:21] these thrusters so you get much less
[20:22] performance and so that being the
[20:24] long-term ambition of how thrusters work
[20:26] in the short term we're trying to
[20:28] implement how would that feel so when
[20:31] you enter atmosphere come to any of the
[20:34] planetoids in 3-0 the the ship is using
[20:38] what would be sustain thrust which means
[20:41] lower acceleration and to do that we're
[20:44] kind of switching to a different state
[20:45] like an atmospheric flight state which
[20:47] means you cross the threshold you enter
[20:50] atmosphere and now you've got less
[20:52] acceleration to play with there's more
[20:54] to do there when we want to do the
[20:56] asymmetrical effects of drag on stop
[20:59] times and performance but right now
[21:01] that's not there so my role is taking
[21:05] the numbers that we have for Space
[21:06] Flight looking at the performance of the
[21:08] ship and then translating that down into
[21:10] atmospheric which as a general rule is
[21:13] like I see as being two-and-a-half times
[21:15] less performance
[21:16] so you've got less acceleration so I
[21:19] basically take spaceflight run the
[21:21] numbers in a big spreadsheet and then
[21:24] translate that into what we need for
[21:27] third arc third order motion so we've
[21:31] got the velocity the next in the stock
[21:33] time then we need a jerk value for that
[21:35] and so I have to put all these numbers
[21:37] into a spreadsheet get the jerk value
[21:38] out and then put these into a ship EXO
[21:41] now get them into the lumberyard and and
[21:44] then and then run like an output which
[21:47] gives me all the tuned parameters and
[21:49] then I use those to put back into the
[21:52] ship XML it's kind of a laborious
[21:53] process the fun side of it is the back
[21:57] and forth play test you know you get
[21:59] these numbers and then you go oh this
[22:01] this ship is way too sluggish it's too
[22:03] slow I'll tweak them here I'll raise the
[22:05] the accelerations here and do the retune
[22:08] of the ship in some cases with the
[22:10] larger ships you have the problem R of
[22:13] right now you switch them to this
[22:15] atmospheric tuning they've gone below in
[22:18] some cases below 1g acceleration so
[22:21] we'll start to fall in atmosphere so
[22:23] then it then it's a case of alright I'll
[22:25] shunt I'll take power away from some of
[22:28] the maneuvering thrusters and power them
[22:29] into them just the thrusters on the
[22:31] bottom of the ship for said and once
[22:35] you've done that I mean then they can
[22:37] then they can enter atmosphere and not
[22:38] just crash into the ground I had that
[22:41] problem with like the Star Ferry the
[22:42] caterpillar just plummet and you just
[22:45] siphon it off from the other thrusters
[22:47] basically to get that performance and
[22:48] future ships like the Starfarer they'll
[22:51] use VTOL thrusters we don't have them
[22:54] set up to do that just yet so today's
[22:56] kind of like let's just take it off the
[22:57] maneuvering thrusters and make sure it
[22:59] flies okay I get to basically design the
[23:03] the physics you know the flight model
[23:05] itself and implement that into the game
[23:08] develop a system that allows the
[23:11] designers to to tune the ships to get
[23:15] the behaviors that they want out of them
[23:17] in our game all of our our vehicles will
[23:20] be spaceships but we want to have the
[23:25] ability to bring those spaceships
[23:26] planetside and
[23:28] atmosphere and when we do that we wanted
[23:32] to include additional forces in the the
[23:37] flight model to include drag lift some
[23:41] turbulence from wind and and different
[23:43] factors like that so previously the
[23:44] atmospheric model was like counteracting
[23:46] for gravity and drag so it would just
[23:48] use the thrusters to basically balance
[23:51] out gravity and balance out drag which
[23:53] is you know if you were making a
[23:55] spacecraft or a fighter plane in real
[23:57] life that's what you'd want to do
[23:58] because it makes them it makes it fly
[23:59] really precisely but what it means is
[24:02] that it sort of feels like you're flying
[24:03] in space because you just can't feel the
[24:05] gravity because the flight system is
[24:07] just trying to counter active and we got
[24:09] a lot of this sort of feedback from the
[24:11] gamescom presentation particularly so
[24:14] the new model tries to use gravity and
[24:17] drag to help it so for example if you
[24:20] are trying to slow down downwards you
[24:24] can use gravity to help you and you can
[24:26] use less thruster force and it will come
[24:28] easier so you've got gravity to help you
[24:30] when you're going when you're trying to
[24:31] slow down going off words you'll slow
[24:33] down
[24:33] slower and so what happens in the end is
[24:35] that you sort of have this like
[24:37] asymmetric imbalance in the ship that
[24:40] you can feel and so say for example if
[24:42] you're like if you're trying to slow
[24:44] down with your pointy Gladius ship going
[24:45] in towards the wind
[24:47] you're gonna slow down a lot slower then
[24:50] if you angle your thing up like this and
[24:52] try and fly like this and so you can
[24:54] really feel like it feels like you're in
[24:57] the atmosphere and it feels like this
[24:59] air that's pushing on your ship so we've
[25:01] been working on that pretty much since
[25:03] Gamescom but our immediate goal for the
[25:06] PTU release is a little bit more of a
[25:10] turbulent simulation so what we have now
[25:12] is turbulence and wind that sort of
[25:16] affects the stability of the ship I
[25:19] guess so if you get if you start flying
[25:21] really fast the ship sort of shakes and
[25:24] buffle about and you can sort of feel
[25:25] like you're right at the edge of you
[25:27] know the aerodynamic limits of the ship
[25:29] which feels really good and it it again
[25:31] separates it from feeling more like
[25:33] you're in space when you you know you
[25:35] can't really feel anything because
[25:36] you're just in nothing that's pretty
[25:38] much so this is what we have now and
[25:40] it's pretty much in the game now and
[25:41] running and it feels really good you can
[25:44] feel a lot of difference between like
[25:46] aerodynamic ships like say the Gladius
[25:48] can go quite fast and it's sort of just
[25:50] a little bit shaking around and then you
[25:53] know something that's shaped like a
[25:54] brick like the aurora it's like shaking
[25:56] or on you can't really control it super
[25:58] well and it's really hard to fly which
[26:01] is good some of the the tuning that
[26:02] Andy's been doing is like been trying to
[26:05] find this line of what's to
[26:10] uncontrollable and what feels good but
[26:12] is uncontrollable like under control
[26:15] levels too too strong of a word
[26:16] it's more just that we want you to feel
[26:19] like you're at the limits of this ship
[26:22] and if you push too hard you're gonna
[26:24] lose control but we don't want it to be
[26:26] that you can't control it in the
[26:28] atmosphere which is just not fun we
[26:31] actually have had some of those issues
[26:33] with really small ships like the Merlin
[26:35] and the gravel of bikes because they can
[26:39] now fly in the atmosphere as well and
[26:41] they're really small and light and you
[26:43] really get pushed around a lot and in
[26:44] like you know in high winds and and
[26:46] you're moving really fast
[26:48] it feels really strongly that you're not
[26:50] quite in control anymore
[26:51] it feels really good and it makes it
[26:54] really separates the the flight from
[26:56] being in space to being in the
[26:58] atmosphere which is what the goal was
[26:59] the way I approach that actually is more
[27:01] through the control systems which is
[27:03] what interfaces the the player or in
[27:06] real life the pilot or whatever with
[27:08] with the vehicle that sets limits on
[27:12] what they can do with the vehicle and
[27:13] how the vehicle performs or whatever so
[27:15] you can still have realistic physics
[27:17] while at the same time creating more of
[27:20] a traditional gameplay experience
[27:22] through the way the controls are
[27:23] interpreted and
[27:24] and vehicle response to the player we
[27:27] basically have this this ability to
[27:29] specify goals in position or velocity or
[27:33] acceleration and the ship will try and
[27:35] achieve those goals so that look the
[27:37] most complicated one is position which
[27:38] isn't used for a general flight it's
[27:40] more used for AI and stuff where you say
[27:42] I want to get to this goal and the
[27:44] system will try and figure out how much
[27:47] to Perich thruster and everything to
[27:49] actually achieve that goal we use the
[27:51] velocity goal and the acceleration goal
[27:52] for when you're actually flying around
[27:54] you know you are controlling the ship
[27:56] and those controllers now basically
[28:00] include drag and gravity in their
[28:03] predictions so if you say hey I want to
[28:06] get to 200 meters per second in this
[28:09] particular direction the algorithm will
[28:11] look through all of the current forces
[28:13] that it has available it and go okay
[28:15] hey gravity is is helping us in this
[28:18] particular direction that we're trying
[28:19] to accelerate so we don't actually need
[28:21] to give as much thruster force or maybe
[28:23] if you're going the other other
[28:24] direction you need to give extra gravity
[28:27] to counteract the other side of gravity
[28:30] which maybe your thrusters just don't
[28:33] have enough thrust actually to give
[28:35] enough force to counteract gravity plus
[28:36] what you actually want to move in that
[28:38] direction and so that's now included in
[28:41] that core model which is the one part of
[28:43] it and the turbulent stuff is a second
[28:45] layer that we have on top of the flight
[28:48] control system so you know we have the
[28:50] the control logic which is you or an AI
[28:53] give input into the system and the
[28:55] system will try and figure out how to
[28:56] get to that configuration and then after
[29:00] that we have all the extra stuff which
[29:02] is things like turbulence just random
[29:06] air and and stuff like that that gets
[29:08] added on top which is you can think of
[29:09] it as like the external forces that are
[29:14] moving or attempting to move the ship
[29:16] that you are not in control of and so
[29:19] obviously turbulence and wind is the big
[29:20] part of that one so when you're flying
[29:23] around you'll have your control input
[29:24] and you'll say hey okay I want to get to
[29:26] this configuration
[29:28] and then on top of that the turbulent
[29:31] system is going to calculate some
[29:33] turbulence based on the atmospheric
[29:34] density and the wind and everything and
[29:37] it's gonna say hey I'm gonna add this
[29:38] extra force we're just gonna move your
[29:40] ship and then the ship will obviously
[29:42] have to react to that you'll have to
[29:44] react to that and the reaction systems
[29:46] will try and kick in to keep you on the
[29:49] goal that you want with it you know
[29:50] so as the ship just won't have enough
[29:52] thrust to do it and you'll get off
[29:54] course or you know the chivalry bustling
[29:56] around or something like that we
[29:58] dynamically calculate the cross
[30:00] sectional areas for for each ship so the
[30:03] amount of surface area that comes into
[30:06] play in drag will be unique for every
[30:09] ship and not just for every ship but
[30:11] based on the state of the ship so if it
[30:12] gets a wing blown off that's going to
[30:14] affect not only the amount of surface
[30:15] area that it has for drag but also the
[30:17] center of drag where that is relative to
[30:19] the center of mass on the ship and
[30:20] that'll you know result in torque based
[30:23] on I'm dragging and things like that so
[30:25] it's it's a very accurate drag
[30:27] simulation so the thing about
[30:29] atmospheric flight specifically with the
[30:31] effects is there's always going to be a
[30:33] transition when you're on a planet or a
[30:36] moon that's actually got atmosphere
[30:37] that's when we're going to get the
[30:39] contrails instead of engine trails so
[30:42] the key to it is it's it's a visual
[30:44] thing so it gives people a sense
[30:46] visually the there's different things
[30:48] happening here and obviously that's just
[30:50] backing up the actual what the ship's
[30:52] doing and how people have got to react
[30:54] to that so yeah contrails you're gonna
[30:57] see all the players contrails so if
[30:59] you're chasing or you're in a park or if
[31:01] you're in a dogfight you're gonna see
[31:02] these contrails based on the fact that
[31:04] you're inside this atmosphere we take a
[31:06] little bit of unrealism just out of
[31:09] practicality like for example in real
[31:11] life the atmosphere doesn't really end
[31:12] it just sort of extends ash arbitrarily
[31:16] into space getting thinner and thinner
[31:18] and thinner but we actually have a line
[31:19] where we're like past this point there
[31:21] is no atmosphere of past this point
[31:23] there is but the but the atmosphere
[31:25] below this line is really weak and so
[31:28] when you get into that sort of part of
[31:30] the atmosphere you'll look first of all
[31:32] you'll start seeing the atmospheric
[31:34] reentry effects particularly if you're
[31:35] coming in from like orbital speeds as
[31:38] you get lower and lower you start to
[31:40] feel it more and more and more
[31:41] and when you start to get really low it
[31:44] actually we're still sort of tuning this
[31:46] but what we would like is for right on
[31:50] the surface
[31:51] you actually feel it less you don't have
[31:54] the turbulence of wind blowing over
[31:56] hills and mountains that you have a
[31:57] little bit higher up in the atmosphere
[31:59] so when you get lower it's actually a
[32:02] little bit a little bit safer and a
[32:04] little bit more stable than if you were
[32:07] to try and fly a little bit higher
[32:08] we actually had some issues when QA were
[32:11] testing the system where they reported
[32:13] that you could fly like extremely high
[32:16] speeds in Yalies atmosphere and
[32:18] immediately we were concerned that this
[32:20] is an issue and then we went and
[32:22] actually looked at and realized that
[32:23] actually the atmosphere on Yela is like
[32:24] 1% of de Mars atmosphere and as a result
[32:30] that there's pretty much no air
[32:32] resistance there's nothing to slow you
[32:34] down which is completely realistic so we
[32:37] were like well in this situation this is
[32:40] not a bug this is an actual feature and
[32:41] so we have that already we're still
[32:44] working on things like weather and
[32:46] storms and stuff I think we saw that at
[32:50] last year's citizencon with the
[32:52] sandstorm stuff like that will affect
[32:54] the handling and stuff but we're not
[32:58] quite there yet but we already want
[33:01] particularly the atmospheric density
[33:02] effects the handling and then weather
[33:07] changes will also affect it but that's a
[33:09] future goal that we haven't quite got to
[33:11] you so the flight model that we have
[33:13] today I took the approach of where it's
[33:16] basically the same control system that
[33:18] you have in space but then we have the
[33:20] addition of drag and turbulence and
[33:23] gravity forces so ifcs will actually
[33:28] work to remove those forces you know
[33:30] allocating thrust to to countering
[33:33] gravity and countering drag and then
[33:35] having removed those forces then it uses
[33:39] the same motion profiles that it would
[33:42] use in space to control the ship so the
[33:43] result is you you feel like you have you
[33:46] know less thrust available because it's
[33:47] being used for other things and and
[33:50] you've definitely feel the turbulence
[33:51] but overall it's still the same flight
[33:53] model that we have
[33:54] space whereas the the new model I've
[33:56] actually already worked you know worked
[33:59] out the calculations for it I just need
[34:01] to get into the engine will actually
[34:03] include these additional forces lift
[34:06] drag and gravity in in its calculations
[34:11] to carry out whatever actions that the
[34:12] you know players is trying to achieve so
[34:16] for example if you're sitting here and
[34:17] you want to go down rather than
[34:19] countering gravity and then pushing you
[34:21] down it'll just generate less upward
[34:25] thrust so that it just drops gently down
[34:27] you know using gravity to your advantage
[34:29] so that's the main difference the player
[34:31] in the game will be able to start taking
[34:33] better advantage of those additional
[34:35] forces of lift drag and gravity it's
[34:37] been developed pretty much to separate
[34:40] the the feeling of flight from space and
[34:43] atmosphere and it's it's partially you
[34:46] know a gameplay decision that it's nice
[34:47] to sort of have your your general moment
[34:51] to moment moment gameplay be refreshed
[34:52] so you know when you're playing the game
[34:55] and you're in space you you sort of are
[34:57] inclined to get used to flying in a
[34:59] certain way and then when you get into
[35:00] the atmosphere we would like you to sort
[35:03] of feel different and we would like you
[35:04] to change your gameplay style and to to
[35:07] feel that you know this is different
[35:09] then you need to adjust your gameplay
[35:10] which is sort of like you know you can
[35:12] take the analogy of you know when you're
[35:14] watching a movie or when you're writing
[35:16] a movie you pace it so that you have
[35:18] moments of like this high intensity and
[35:20] then we're going to give the audience a
[35:21] break for a minute and do something it's
[35:23] sort of like that but with gameplay so
[35:24] you're gonna be flying around and then
[35:26] we want to change it up a bit and just
[35:28] you know give you some different
[35:30] experience for a few minutes which keeps
[35:32] the keeps the gameplay a bit more
[35:33] interesting but on top of that it's
[35:35] really important that this meets the
[35:38] expectations that a player would have
[35:40] about flying in atmosphere and this is
[35:42] where the feedback from games come came
[35:44] from people would see the ships flying
[35:46] in atmosphere and they would be like
[35:47] this doesn't really look right you know
[35:49] like the ship is just like it's like a
[35:51] fly just darting around and moving
[35:53] around like this in atmosphere I mean
[35:54] it's realistic if someone were to make a
[35:57] spacecraft in real life that had the
[35:59] power that our ships do who would behave
[36:01] like that but it doesn't look good
[36:03] and it doesn't feel good and so a lot of
[36:05] that is to also make it feel better and
[36:08] make it
[36:08] look better so that you know players get
[36:11] into the atmosphere maybe you're like
[36:13] sitting on the planet and you see your
[36:15] friend fly in with some ship and you see
[36:17] like bustling around in the wind and
[36:19] everything rock you know it looks really
[36:20] cool
[36:21] that's also what we're going for I think
[36:23] most of the challenges have been
[36:25] figuring out where the line is - it's
[36:29] sort of like less of a technical
[36:31] challenge and more of a design issue of
[36:33] where is this line between being
[36:37] realistic and being suitable for
[36:39] gameplay that's really difficult to do
[36:42] it's really easy to make this perfectly
[36:45] you know hyper realistic simulation but
[36:47] that's just not fun unfortunately and so
[36:52] we have to like you know we do things
[36:54] really realistically and then we go hmm
[36:56] this might not be the best way to do
[36:58] this we have to actually go back and and
[37:00] try and you know adjust the system to be
[37:03] more fun and to consider how we can
[37:06] accommodate the players you know needs
[37:08] and wants out of the system we've had
[37:11] issues as well particularly where say QA
[37:15] or avacado you're testing the game and
[37:17] they have some feedback that isn't
[37:19] really specific like they'll just say oh
[37:22] say gravel of bikes for example they
[37:24] don't handle well and I'm like what does
[37:26] that mean like what it why can you can
[37:30] you not turn quick enough are they
[37:32] losing control too much like there's so
[37:34] many things that could potentially
[37:36] contribute to it doesn't feel good and
[37:39] in the case of gravel EV you know it's
[37:41] it's usually lots of things so we have
[37:45] to sort of try and figure out what in
[37:48] this system could actually be giving you
[37:51] the behavior that you have and how can
[37:53] we fix that that doesn't sound like too
[37:56] much of a technical issue but from a
[37:58] design side it's really really hard to
[38:00] do that and it's a thing that we're
[38:03] constantly sort of learning about as
[38:05] people play the game and test it we're
[38:07] figuring out you know this isn't working
[38:09] or this isn't really fun we need to try
[38:11] and reconsider this
[38:13] and then we have to again convert this
[38:15] like fake it's not fun feedback into
[38:19] actual like hard technical feedback of
[38:21] oh this bit of force is being applied
[38:23] too much or where you know we're
[38:26] rotating the ship the fraction too much
[38:28] here whatever it is and that transition
[38:30] is hard it's really hard one of the main
[38:34] challenges we had was the afterburner
[38:36] deceleration yet 1200 meters a second
[38:39] when you hit the upper atmosphere and
[38:41] you need to be able to slow it down
[38:43] before you crash into that planet when
[38:46] we first put this upper afterburner
[38:48] speed in everyone in key way including
[38:51] design which is flying into the planets
[38:53] crashing exploding being furious with
[38:56] the whole thing so we have to come up
[38:58] with another approach the initial idea
[39:00] was you'd have less acceleration but
[39:03] you'd be able to hit higher velocity so
[39:06] when you went in to cruise up through
[39:09] normal SCM afterburner velocities into
[39:11] cruise afterburner you'd have less
[39:14] acceleration so it was slowly pushing up
[39:17] to the high velocities but we found with
[39:19] that as soon as you hit the crossover
[39:22] threshold from an SCM afterburner to the
[39:27] cruise afterburner you lost control on
[39:29] the ship it became too hard to move
[39:30] because everything was scaled down to
[39:33] lower level acceleration he'd cross over
[39:35] and then you try and turn you'd feel
[39:36] like you're just drifting forever
[39:38] it's that week we we wanted to fix that
[39:40] immediately I mean that wasn't the
[39:43] intended goal we wanted to have it
[39:44] slower to get to their velocities but
[39:46] still keep control so I had to play
[39:49] around with all of the different scaling
[39:51] values to make sure that the maneuvering
[39:53] thrusters weren't affected but it was
[39:55] just the main thrusters that were
[39:56] affected so it would take longer to get
[39:58] there and then also give like a buff to
[40:01] the
[40:02] to the retro thrusters if you imagine
[40:04] you were shunting all the power with a
[40:06] thrust capacity to the front to stop you
[40:08] faster that's kind of the idea we're
[40:09] going with you it's when you cross into
[40:11] the atmosphere you'll you'll feel like
[40:13] you've got more control to stop whereas
[40:17] the terminal velocity in the max safe
[40:18] speed will also restrict your velocity
[40:19] and slow you down it was also the
[40:23] afterburner scaling that would that
[40:25] would help you get there faster
[40:27] so while big ships like the caterpillar
[40:30] will still have an issue coming into an
[40:31] atmosphere and stopping in time if
[40:33] you're pushing it because it's cut such
[40:34] limited control once you get into the
[40:37] atmosphere smaller vessels should be
[40:39] able to get in there and stop and not
[40:41] have an issue but finding that right
[40:43] balance was the challenge not making
[40:45] them too powerful not making them too
[40:47] weak we had to have a lot of back and
[40:49] forth or QA on that and probably more
[40:51] with PTU to come the future plans we do
[40:54] have things that we want to do so even
[40:56] things like the thruster effects which
[40:58] went without long standing thruster
[41:01] effects in our game we want to bring in
[41:04] some visual differences to them when
[41:05] you're in the atmosphere so one example
[41:07] will be we've got shop diamonds in some
[41:10] of our those three effects that you
[41:12] actually see in space now technically
[41:13] speaking you would receive shock
[41:14] diamonds when you're not in atmosphere
[41:16] so for a long time we've wanted to
[41:18] actually play around with that and
[41:20] actually have little details that only
[41:22] appear when you're in atmosphere so not
[41:24] necessarily really clear like really
[41:26] obvious things but just sold iffen PSA's
[41:28] so there's all kinds of things we want
[41:30] to do along those lines here in the
[41:31] future at this point we don't have the
[41:33] app the full atmospheric simulation
[41:36] which includes weather systems in place
[41:37] so I've put in a placeholder system that
[41:41] simulates wind initially actually had
[41:44] storms for what an earlier demo but I
[41:46] pulled that out for the three oh release
[41:47] we won't need that but we will have some
[41:50] variation of wind based on altitude
[41:53] and and wind direction which is
[41:56] consistent based on your location you
[41:59] know within the sphere of a planet so
[42:01] everyone will have the same wind as well
[42:02] as wind gusts you know that can reach
[42:05] you know fairly high velocity so if
[42:08] you're flying along and you know wind is
[42:10] flung and going in one direction you're
[42:12] going to feel stronger drag in that
[42:14] direction but if you're flying with the
[42:15] wind you'll feel less drag the ship will
[42:18] be work nobody's working as hard you
[42:19] know in order to fly with the wind
[42:20] versus against the wind
[42:22] there definitely is wind turbulence and
[42:25] so the more the wind blows you know kind
[42:27] of shake the the ship gonna push it
[42:29] around a little bit you know when you
[42:30] get into really high wind or high gust
[42:32] conditions which you can at places
[42:33] you'll feel it more now this is all
[42:36] based on the kind of pristine state of
[42:39] the ship so a ship when it comes in it's
[42:41] it's designed so that it's center of
[42:43] drag is fairly aligned with its center
[42:46] of mass so there's not a lot of drag
[42:47] that comes from from a lot of torque
[42:50] that comes from the drag on the ship but
[42:52] if you blow off a wing or whatever and
[42:54] it shifts the center of drag relative
[42:55] the center of mass then you have this
[42:57] moment arm right so so when the drag
[42:59] forces is applied to the ship it tends
[43:02] to push it you know to torque it around
[43:04] you know we have thrusters which
[43:06] aircraft don't have we have we have
[43:08] thrusters available and so they're
[43:10] always countering that and they'll try
[43:11] to keep you as best as they can it would
[43:13] keep you from from spinning around and
[43:14] just going out of control which is what
[43:16] you would do if we you know if it was
[43:17] just an aircraft but at some point when
[43:19] you've taken damage your thrusters
[43:20] you're not gonna have that ability so if
[43:23] you fly slow enough you'll be fine but
[43:25] if you fly too fast you'll find yourself
[43:27] just completely you know spinning out of
[43:28] control
[43:29] Chris really wants it that you can
[43:33] basically hit aerodynamic limits like if
[43:35] you take a plane in real life and you
[43:36] like fly it at high speeds toward the
[43:39] ground and then pull off the wings
[43:41] eventually we'll reach a point where
[43:43] they're like no we can't do this anymore
[43:44] and they'll just break off and I think
[43:46] that's what Chris would wants us to get
[43:48] towards it's quite complicated to try
[43:50] and work out where those forces are
[43:53] because we don't have like a full-on
[43:55] fluid simulation that you would have in
[43:58] like professional flight simulator and
[44:00] in simulations like that it's quite easy
[44:02] to be like well you know this force here
[44:04] on this point but we
[44:06] we do that so we have to still come up
[44:08] with a solution for how to do that you
[44:10] know you know in a realistic but also
[44:13] suitable for the game and suitable to
[44:15] fit in with the rest of the game and
[44:16] then we'll have will pretty much have
[44:19] that air dynamic like failures where
[44:22] parts of the ship just can't take the
[44:25] pressure anymore they'll just break off
[44:26] right now we're kind of in between with
[44:28] with the atmospheric model we did a
[44:31] first pass on it that got the ships
[44:34] flying in the atmosphere fairly quickly
[44:35] but it's not as accurate a flight model
[44:38] as as we want
[44:40] after 3.0 is out I'll be introducing a
[44:42] new flight model which will improve it
[44:44] quite a bit I think right now the main
[44:47] thing that players will feel when
[44:49] they're flying is the difference in the
[44:51] amount of acceleration available because
[44:53] of drag and things like that right and
[44:55] the turbulence that's applied to the
[44:56] ship but it still won't feel as
[44:59] different from spaceflight as as what we
[45:02] want and that's coming next as you can
[45:06] see the physics and control systems are
[45:08] going to make for a very visceral in
[45:11] atmosphere experience that's all for
[45:14] this week
[45:14] next Thursday tune into our holiday a TV
[45:17] special focused on squadron 42 streaming
[45:20] on Twitch at 12 p.m. PST
[45:22] speaking of squadron 42 check your inbox
[45:25] for a dedicated newsletter that went out
[45:27] today and don't forget jump point vol 3
[45:30] hardcover is available for sale now to
[45:32] subscribers as always thanks to our
[45:35] subscribers for supporting shows like
[45:37] the atv holiday special we encourage you
[45:40] to although in our poll collecting
[45:42] feedback for your perks you can access
[45:44] it via the link in this month's
[45:46] subscriber newsletter or by visiting the
[45:48] subscriber forums finally thanks to all
[45:51] of our backers your dedication is
[45:53] helping to make star citizen the best
[45:55] damn space sim ever until next week
[45:57] we'll see you around
[46:02] [Music]
[46:31] thank you for watching so if you want to
[46:33] keep it with the latest and greatest in
[46:34] the star citizen a squadron 42
[46:35] development please follow us on our
[46:37] social media channels see you soon
[46:46] [Music]

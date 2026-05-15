# Star Citizen: Bugsmashers - Ships Always Updating

**Video:** https://www.youtube.com/watch?v=LRsgW0UAsds
**Date:** 2017-11-08
**Duration:** 13:28

## Transcript

[00:06] [Music]
[00:15] everyone welcome to bug smashers and
[00:18] back in action to show you guys a fun
[00:21] book let's take a look everyone we are
[00:30] here in the awesome PU level and this
[00:33] week we're taking a look at the fun
[00:35] issue of performance yay and a broken
[00:37] ship so this is our fun little Cutlass
[00:42] and it's cool let's spawn a few more
[00:46] because why not do we spawn a few cut
[00:53] cuts they're all freaking out like crazy
[00:56] because they're all smiling the right
[00:58] spot why not cool um now that actually
[01:02] looks pretty nifty
[01:03] now when you expect before mins fun
[01:06] we're hearing part all the star and well
[01:09] there's a bunch of ships here and they
[01:10] they're all flying around chittering
[01:12] about you expect well yeah they should
[01:14] update but if I traverse all the way to
[01:17] once I find all these fun console
[01:20] commands let's go to
[01:23] or yella like hype whoo
[01:28] if you notice on the top left all of
[01:31] those cutlasses that I spawn are still
[01:34] updating even though it's miles and
[01:37] miles and miles and miles away that's a
[01:40] problem because if we want to have a
[01:42] bunch of players in the good old server
[01:44] we don't need them to update for me when
[01:48] they're far far away I don't care about
[01:50] an EM 50 or Cutlass battling across the
[01:52] galaxy they're eating my CPU cycles and
[01:55] damn it I want my CPU cycles so let's
[01:58] fix that let's stop the game because I
[02:01] won't be able to recode that Shazam
[02:04] the first thing we're gonna do is here's
[02:07] our component for the movement flight
[02:10] movement it's very basic all it does is
[02:13] has an initializer and then we update
[02:16] you get the vehicle and then we start
[02:18] updating ifcs on this batch update in
[02:21] the specific frame of the entity system
[02:24] and in the update we basically batch a
[02:27] bunch of updates and they all get
[02:28] spawned and get processed as many
[02:30] processors as you have so during the
[02:33] frame we're like hey everything go
[02:34] update and we just go crazy the benefit
[02:37] is that instead of having one pass and
[02:40] going one at a time if you go like
[02:41] sixteen twenty hundred updates in a row
[02:44] quite efficient but this guy is set to
[02:48] always update that means if he's far
[02:51] away he's gonna update no matter what we
[02:54] have a whole slew of updates but the one
[02:57] that we care about is actually this
[02:59] thing called in range in range is
[03:04] basically it's not necessarily invisible
[03:07] but if it's potentially visible that
[03:10] could be able to be behind me side left
[03:12] right it will get an update so if I'm
[03:15] battling some guy the guy in front of me
[03:17] and he goes behind me he'll still update
[03:19] because well we need him to continue
[03:21] flying now that's good gone BAM cool but
[03:26] that's gonna cause some problems and IFC
[03:29] especially since we do some Network tix
[03:31] that no longer happened
[03:33] so what we want to do is let me copy
[03:38] pasta some functions that's some awesome
[03:42] functions in here we want to know
[03:45] specifically when we go in and range and
[03:48] out of range so that we could tell ifcs
[03:50] hey once you've gone out of range stop
[03:53] moving go and then tell physics to go to
[03:55] sleep then when we come back we want to
[03:57] reset the network tick so that we snap
[03:59] to the latest information so I'm gonna
[04:02] add these two fun little functions Sam
[04:12] these little functions allowing my
[04:14] component to register for certain events
[04:16] and when I get the event I could do some
[04:19] fun magic so let's add these fun little
[04:23] functions
[04:34] Shazaam forgot my functions now I need
[04:40] to register for some events so let's go
[04:44] find the magical events we have a whole
[04:49] slew of them - that we want or enter
[04:52] range and in range now the coolest thing
[04:56] about the inter ranging and leave range
[04:59] is if on a client if something the range
[05:02] is basically where Mike where I am so I
[05:05] don't have to care about the m50 far
[05:07] away but the in range on the server is
[05:09] where all the players are so technically
[05:11] if I'm all the way over here and there's
[05:14] another play over here both the stuff in
[05:17] these areas will update on the server
[05:18] but only the one where I am will update
[05:21] on my client kind of a nifty thing that
[05:24] allows the game code to work
[05:26] specifically for the things that we care
[05:28] about things that aren't in range or
[05:30] don't need an update shouldn't get an
[05:31] update get our CPU cycles back through
[05:36] so we registered for in range and out of
[05:39] range
[05:39] so let's process those
[05:53] get my vehicle tell the vehicle
[06:02] we went our vehicle know that hey we've
[06:06] entered the range that's a new function
[06:10] on rain change we'll just have a truth
[06:15] we've gone in and then we'll have a
[06:17] false floor
[06:18] I don't know we've got out of the range
[06:21] now this doesn't exist so we have to add
[06:25] it to fun old interfaces cool what's to
[06:35] use the longest variable has done on
[06:38] range diggity Doo yay so if this is true
[06:45] we are in range and we should start
[06:48] processing now let's add it to our
[06:54] spaceship magical spaceship our
[07:01] spaceship this is our movement for the
[07:02] spaceship he has all the fun stuff for
[07:06] ifcs
[07:07] and updating where the ship should go so
[07:10] we need to forward this information well
[07:12] to the spaceship or ifcs
[07:14] magical wonder of ifcs what we have to
[07:19] go into us yes
[07:20] oh the fun of programming one thing said
[07:23] something has a long chain this is what
[07:26] we do all day every day this is the easy
[07:28] part
[07:37] ok so now we have our flight and if we
[07:43] are in range
[07:50] we basically want to reset ifcs I should
[07:57] say the network that and then here we
[08:00] want to disable basically physics and go
[08:05] to sleeps so first thing we need to do
[08:10] is make sure that we have let's let's
[08:15] turn in let's make a go to sleep first
[08:16] so we need the physical entity this is
[08:20] the physics the rigidbody this would be
[08:22] like the cup or with spaceships on it so
[08:25] we need to tell physics piece ship
[08:27] physics this is where are you do owner
[08:38] get me the physics owner is this ship we
[08:43] want to tell the ship to action where
[08:49] are you since velocity you want to clear
[08:54] the linear velocity zero that out
[08:59] later the angular velocity aha
[09:05] so linear angular
[09:10] type piece ship physics go to sad
[09:19] never said action no it's an action
[09:24] there it is go to bed this will clear
[09:36] the velocity and now we need to tell to
[09:39] go to sleep
[09:42] cram position I am this position sim
[09:50] class we are gonna go to Pam cool so
[10:08] this basically tells the ship to go to
[10:13] bed another thing we need to do is that
[10:19] should be fine
[10:19] now once we have gone to sleep if a ship
[10:26] comes into range we now need to wake him
[10:29] up so for the server its reset this will
[10:36] reset the network and we need to reset
[10:41] our prediction what this does is if the
[10:45] server gets into a state where the ship
[10:47] comes back into view a reset this
[10:49] network state and everyone will snap and
[10:52] then on the clients we set this
[10:53] prediction so it snaps to either the
[10:55] client or server latest information so
[10:59] let's compile see the wonderful errors
[11:02] that we get back with some magical code
[11:06] compiling and I spun myself a cutlass my
[11:11] spawn a few more just for fun we always
[11:15] spawn inside each other but
[11:18] Shazaam so there's the cutlasses they're
[11:21] updating moving around like crazy ifcs
[11:23] is doing their thing on top left we are
[11:26] getting our fun updates now let's check
[11:29] out the code in action if i teleport to
[11:32] yellow they should no longer update oh
[11:34] they don't update there's no debug text
[11:37] I get my CPU cycles back everyone's
[11:41] happy FPS is high today's a good day and
[11:45] what's great is the server's not
[11:47] updating those until teleport over there
[11:51] till I go over there now if there was
[11:54] another client over here and then I
[11:56] teleport away that server would update
[11:57] them because well they need to move
[11:58] because they are controlled by good old
[12:01] server guys enjoy that's today's fun
[12:05] optimization alright so as you guys saw
[12:10] we had a fun little performance issue as
[12:12] we try to cram more and more players
[12:14] into the server we're constantly
[12:17] debugging profiling trying to find out
[12:19] all the things that are taking most time
[12:22] on the server and we're nailing those
[12:24] out so we could add more and more for
[12:26] more players to the the game and
[12:28] unfortunately the ships they've been in
[12:30] the game for a long long time because
[12:32] it's well spaced game and you know there
[12:35] was not so many optimizations in there
[12:37] cuz we were just like getting you know
[12:39] get it up and running cool but when you
[12:41] start adding more players we don't need
[12:42] to do all these updates so guys way way
[12:45] out on oblivion we don't need to be
[12:47] updating ifcs because well they're
[12:49] light-years away from you so we had a
[12:51] little bit of code in there to make sure
[12:53] that those guys far away kind of go into
[12:55] this little hibernation mode until they
[12:57] get within range and then BAM they're up
[13:00] and running and you're able to dogfight
[13:02] with them hope you guys enjoyed until
[13:04] next time thank you for watching so if
[13:06] you want to keep up with the latest and
[13:08] greatest in star citizen the squadron 42
[13:09] development please follow us on our
[13:11] social media channels see you soon
[13:20] [Music]

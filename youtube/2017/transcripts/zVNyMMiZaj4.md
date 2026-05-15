# Star Citizen: Bugsmashers! - Havoc on the IFCS

**Video:** https://www.youtube.com/watch?v=zVNyMMiZaj4
**Date:** 2017-05-10
**Duration:** 9:18

## Transcript

[00:06] [Music]
[00:15] hey everyone welcome to bug smashers
[00:18] I'm your host mark abent and I'm here to
[00:20] take you behind the scenes on the
[00:21] shenanigans called bugs everyone we are
[00:32] here and blinking legs for that I am
[00:36] going to disable lights not to distract
[00:38] me now we look like a ps2 game excellent
[00:41] so we are in a fun real production map
[00:46] that is a dying star and I disabled
[00:48] lighting because I don't like blinking
[00:50] and we have a bug here where sometimes
[00:55] when I get into a map I can't move
[00:58] and this is the case of the non moveable
[01:01] ships so let's step into John
[01:05] Pritchett's fun is CF code and figure
[01:08] out what's going on we the best part is
[01:12] sometimes when I respawn
[01:14] it works sometimes it doesn't alright so
[01:18] here we are we have two ajaan systems we
[01:23] have the flight controller which is
[01:24] actual ifvs this dictates how the
[01:27] spaceship should move then we have this
[01:29] thruster manager which tells us yes hey
[01:32] I have all these thrusters all over this
[01:35] is how they move which is the
[01:36] acceleration velocity and this could
[01:39] change dynamically in case they get
[01:40] detached or if they get damaged so you
[01:43] have these two systems working in pair
[01:45] so this thruster manager is basically
[01:47] responsible for letting the flight
[01:51] control system know how much thrust is
[01:53] able to be done by the whole ship and I
[01:57] put a breakpoint on this fun little bad
[01:59] boy this tells what the maximum thrust
[02:03] of the whole system is
[02:05] and unfortunately we have this thing
[02:09] called a physics state which John uses
[02:11] to determine the overall physical
[02:13] objects so we have this rigid body which
[02:17] has mass it has speed and has
[02:19] acceleration and it has a bunch of
[02:22] thrust errs on it and what this guy does
[02:25] is the thruster manager says hey I have
[02:27] all these thrusters here and they can
[02:29] move this way this way this way
[02:30] so if the ifcs can move this guy a
[02:32] certain way based on input and move and
[02:35] fire off the thrusters so the thruster
[02:37] manager needs to know a few bits such as
[02:39] the mass of this thing to figure out its
[02:42] acceleration and unfortunately the civic
[02:45] status that the thruster manager sees is
[02:48] all basically zeroed out so according to
[02:52] the thruster manner this thing has no
[02:54] mass so it's going to say that all the
[02:58] thrusters are basically not going to be
[02:59] able to use any acceleration or provide
[03:02] any acceleration on a zero mass object
[03:04] because from the standpoint of the game
[03:06] general mass means static and this just
[03:08] going to stay it you can't have zero
[03:10] mass on a thing so this lovely thing is
[03:14] going to basically return let's step
[03:17] back put a breakpoint actually right
[03:23] here
[03:27] and as you can see our acceleration for
[03:31] the whole system is going to be zero so
[03:33] I can never ever move the joys
[03:37] so let's find out when this M status is
[03:42] set so it's set this is a some debug
[03:49] thing and it's never going to get hit
[03:50] obviously cuz we never hit the
[03:52] breakpoint and tuning so here's
[03:55] something where the thruster manager
[03:58] went in updates its going to capture the
[04:01] civic state of the flight controller so
[04:03] put up the breakpoint there and fought
[04:07] off the breakpoint here and let's
[04:09] continue so we get down begin update and
[04:15] we have actual information key point
[04:18] here we have two updates we have the
[04:21] physics update and then we have the main
[04:24] update the physics update happens in the
[04:27] Civic system so that it can do its
[04:29] physical calculations and we have a main
[04:30] update which is game code specific on
[04:33] how it should provide stop to the
[04:35] physics so in this specific area this is
[04:38] the physics update as you can see we
[04:40] have we're getting our physics
[04:42] information correctly cool let's disable
[04:46] that continue to now we get to the main
[04:51] update and as you can see we have
[04:56] invalid information so where does this
[05:01] happen in the flight controller so the
[05:05] flight controller let's go back this is
[05:09] M status so we have the physics status
[05:11] and we have to discuss four main this
[05:13] will guy works this guy's broken let's
[05:16] find out when this gets updated this
[05:20] gets updated in
[05:22] this is very specific code for track
[05:25] view so it won't get the hit in here
[05:29] this gets called on tuning debug feature
[05:35] won't get called
[05:36] and this gets caught out here we go so
[05:40] here's our update main and before way
[05:44] down here we actually update the
[05:47] thrusters to figure out the new
[05:49] acceleration it's supposed to set the
[05:54] main physics information however it'll
[05:57] bet you do debug all things aha so what
[06:07] this tells us is the flight controller
[06:10] has this variable called n animation
[06:13] mode and because it's true we're never
[06:15] updating the Civic status so thrusters
[06:18] can never figure out their valid
[06:20] acceleration this is fun because this is
[06:23] supposed to be for track view that was
[06:25] that value we saw way up at the top
[06:27] which doesn't get hit this should never
[06:30] be true so let's find out this only gets
[06:35] true when we enter track view
[06:37] information this is not going to hit
[06:39] because we're not in a cinematic
[06:41] sequence and that's the only spot
[06:44] alright let's find out in the code where
[06:47] all this gets set so nowhere does it
[06:52] ever set it except in your track view
[06:55] and in here
[06:57] ah-ha so what's happening is in C++ if
[07:01] you never give this guy an initial value
[07:04] it will be random it will be whatever
[07:07] the memory is in there and as you can
[07:10] tell from this break point
[07:13] it says true followed by a four what
[07:17] that means is we didn't actually set
[07:20] this to a boolean true we set this to
[07:22] true because it had some random data in
[07:25] this memory block so what we have to do
[07:29] for the stick is make sure that we start
[07:31] off false and to validate that we are
[07:36] going to in memory start it false now
[07:42] from then on it will calculate the
[07:44] correct information we continue to do we
[07:49] are now getting correct acceleration and
[07:52] I should be able to fly should I am so
[07:57] all it was was just a simple
[07:59] uninitialized variable causing havoc on
[08:01] the system globally the joys of C++ you
[08:06] have to be very very careful one
[08:08] variable could cause destruction and the
[08:10] whole wiser so zip just adding this will
[08:14] fix it and we no longer will get that
[08:16] random this guy works in this machine it
[08:18] doesn't work on this machine there you
[08:21] go hope you guys enjoy so as you guys
[08:23] saw we had one awesome uninitialized
[08:27] variable where sometimes it was true
[08:28] sometimes it was fault it was pure
[08:30] random and that caused havoc because on
[08:33] my machine that might work on someone
[08:35] else's machine it wouldn't work and it's
[08:37] just disrupted the flow of John's IFES
[08:40] system just making sure that was
[08:42] predefined fixed all the issues so when
[08:45] you hop into a multiplayer at work top
[08:47] and single-player it worked
[08:48] and in that fun track view it worked as
[08:51] intended hope you guys enjoy until next
[08:53] time thank you for watching so if you
[08:56] want to keep it with the latest and
[08:57] greatest in star citizen and squadron 42
[08:59] development please follow us on our
[09:01] social media channels see you soon
[09:05] you
[09:10] [Music]

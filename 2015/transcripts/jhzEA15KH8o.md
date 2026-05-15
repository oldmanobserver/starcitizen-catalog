# Bugsmashers! Episode 16

**Video:** https://www.youtube.com/watch?v=jhzEA15KH8o
**Date:** 2015-12-02
**Duration:** 9:10

## Transcript

[00:00] Hey everyone, welcome back to a new episode
of Bug Smashers. Were pretty much in a brand
[00:05] new office, smashing the same old bugs. Well
new bugs, same bugs, old, eh! New bugs.
[00:12] Today I wanted to show you some of the bugs
we have fixed thanks to you guys submitting
[00:16] those issues into the issue council so let's
get started!
[00:23] Hey everyone, welcome to visual studio. I’m
going to show you guys a couple crashes that
[00:34] we have resolved thanks to you guys reporting
them in the issue council. So this first crash
[00:39] that we got is anytime you shoot a gun and
it doesn’t have a particle effect or I should
[00:44] say it doesn’t have a barrel assigned to
it. So on our guns we have one barrel guns,
[00:53] like a standard weapon and then we have other
weapons such as one where it has a triangle,
[00:58] where it shoots the top one then the bottom
one and then the right one. Basically designers
[01:03] will go crazy with these weapons and you can
just assign multiple barrels and how they
[01:08] shoot and interact, it’s pretty cool.
[01:11] Unfortunately we have weapons that don’t
have barrels and when they try to pick an
[01:17] effect off a barrel the game crashes. We’ll
probably have to fix that in the design XML
[01:25] so that we have a barrel on the weapon but
for now we can at least prevent this crash
[01:29] from happening. It’s actually really simple,
we just take this bit of a code and plop it
[01:34] down in a nice safe area that checks to make
sure that well, we actually have barrels.
[01:41] This was a code change done by jesse in the
UK and it has resolved our dedicated servers
[01:47] from crashing, [Wooo!] Go jesse!
[01:51] I’m going to show you guys the next guy.
So here we are in our lovely landing gear
[01:57] system. We have our ship and it has little,
pretend this is a landing [Holds up a pen],
[02:04] little landing things where when I land down
it might deploy out and if I go away it might
[02:12] deploy back. These are not entities, but just
pure geometry that gets controlled by one
[02:20] master entity.
[02:22] So we can have a bunch of geometry everywhere
and they don’t have be a bunch of entities,
[02:26] it’s just one that controls them all. If
we ever break the ship and split it, at the
[02:33] moment we used to just hide the geometry,
but unfortunately those pieces of geometry
[02:40] are still bound to the vehicle animation.
So if sometime later they would get removed
[02:47] because that debris piece, we stick those
things on the debris piece, it will crash
[02:53] because the vehicle still thinks it owns them
in the animation and it still tries to access
[02:58] them and it goes BOOM!
[03:01] So by using this little bit of code, this
new code done by steven in the UK, he’ll
[03:08] actually get the vehicle and the action controller
which is basically the thing that controls
[03:14] the animations for the vehicle and if we basically
remove this bit of attachment, we make sure
[03:22] to clear any animations that are tied to this
thing on the vehicle. Once that’s done we
[03:32] remove the attachment and this thing can be
attached to other things, removed or do whatever
[03:37] we want and we won’t crash. That was a pretty
cool little crash thing there.
[03:44] Finally we have a fun little crash that Paul
Rendell has done. Well this one is a little
[03:57] tricky. We have our vehicle and he moves and
he sends information to the server and the
[04:05] server sends information to the clients and
we keep track of the history so that we can
[04:10] send basically snapshots. So I can send information
here and information here and maybe information
[04:16] over here and as the other client moves he
will interpolate between those points to simulate
[04:24] him moving. We don’t want to send too many
snapshots because that would introduce lag,
[04:29] so we introduce just enough that they’re
far away that we can interpolate between them.
[04:35] Now in this interpolation we are sending pure
world space coordinates and then we’re assigning
[04:41] the position based off that directly in the
physics. The problem is if I’m in world
[04:48] space here and over here I am now in a local
entity grid, like say a retaliator or constellation
[04:57] and the hornet decides to smack into it, he
may enter that grid or if the ship explodes
[05:06] and splits in half, the grid of that ship
might enter the grid now because the grid
[05:12] has become separated.
[05:14] There are all sorts of funness but basically
a vehicle can enter a grid and when that happens
[05:21] we’re still sending world space coordinates,
but physics is thinking that is local space.
[05:28] So when you send that big, gigantic, huge
position into this grid, it’s thinking it’s
[05:37] relative to that space. So the world space
might be 2000x2000x2000, but we’re doing
[05:43] it local to the grid and it’s position might
be 2000x2000x2000, but it’s going to be
[05:50] relative to this so it’s going to get to
the position here and then move it 2000x2000
[05:56] way over there even though it should be here.
[05:58] If you get it big enough, you’ll actually
crash inside because in our local grid we
[06:07] only capture 32-bit precision because don’t
need that much in a local space and if you’re
[06:14] sending in this huge big number you’ll overflow
it and then you get some naughty numbers and
[06:19] physics goes OMG and then [Makes a fart sound]
Explodes. So what Paul has done is if we are
[06:27] sending a snapshot, recording a snapshot,
we make sure we are recording the grid we
[06:33] are in and anytime we set or get positions
it will be now relative to that grid. So if
[06:39] I have a world space and I have a world space
here, it will get transformed to the entity
[06:45] grid here and it will be in a position that’s
not world space but relative to that grid.
[06:52] So this new world, this will be to the grid
and now we can interpolate between those points
[06:57] and everything will work fancy dancy.
[07:00] That was actually a pretty naughty crash and
there were a couple things going back and
[07:06] forth, but it seems to be doing okay. Finally
there were some good crashes fixes getting
[07:15] done by Chris Rain in the Frankfurt office.
He’s been going up and down, chasing physics
[07:23] trying to find all these naughty dangling
pointers, thread issues, allocation things,
[07:30] you know if a thread here and a thread here
decide to access the same thing and thread
[07:34] A is like: “I’m going to remake all the
memory”, and B is like: “I’m going to
[07:38] touch that, KABOOM”. We have a lot of crashes
going on and a lot of guys working on some
[07:46] fixes, but thanks to you guys posting on the
issue council we’ve been able to track those
[07:51] down and get them fixed. Hope you guys enjoyed,
till next time?
[07:56] Hope you guys enjoyed this episode of BugSmashers.
Thanks to you guys for posting those issues
[08:02] on the issue council we’re able to track
down some problems, fix a bunch of crashes.
[08:07] I mean all those studios, the LA studio, the
UK studio, the Austin studio, even the frankfurt
[08:13] studio were all looking for these bugs that
you guys have been reporting. Fix after fix
[08:19] after fix. Just today I saw a bunch from the
UK and frankfurt office and a whole bunch
[08:25] of crash fixes so keep it up! We’re going
to make this build stable and we’ll see
[08:32] you next time!
[08:34] This video made possible by the ICC Stellar
Surveyors and subscribers like you.

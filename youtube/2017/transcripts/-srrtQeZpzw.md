# Star Citizen: Bugsmashers! - Caterpillar Doors

**Video:** https://www.youtube.com/watch?v=-srrtQeZpzw
**Date:** 2017-01-18
**Duration:** 6:56

## Transcript

[00:10] Closed Captioning provided by Relay.sc
[00:14] Mark Abent (MA): Hey everyone, welcome to
Bugsmashers.
[00:18] I’m your host Mark Abent, I’m a Gameplay
Programmer at CIG Los Angeles and I'm here
[00:23] to show you behind the scenes of bugs and
how I smash them.
[00:28] Let’s take a look.
[00:33] Hey everyone.
[00:36] We’re here inside of the Caterpillar and
we have a bug where these fun cargo doors
[00:46] sometimes don’t open or they open incorrectly,
and these doors are a little special because
[00:51] there’s an interior and exterior part.
[00:53] So you can think of the interior here and
the exterior here, and when you open it, they’re
[00:59] supposed to be coincide.
[01:00] When you close it, they’re supposed to go
to together, however when you look away from
[01:05] the door the exterior opens, but the interior
remains where it was until you look at it
[01:09] and then it may start animating or just get
stuck.
[01:13] So if we open it up, we can see it, everything
looks fun.
[01:18] If I close it and look away, it’ll take
a bit…
[01:26] BAM!
[01:27] Oh we can see the exterior door close, but
the interior which it should show this metal
[01:35] stuff with Drake on it and all that panels
is not closed.
[01:39] So the interior, we can actually fly out.
[01:43] The exterior closed, the interior has not.
[01:47] So if I run over here and hit close, you can
see it snapped to the close position and now
[01:54] it works correctly.
[01:56] So what’s going on?
[01:57] Well there’s a bit of code that says, “Hey
if this thing is visible, we can fire off
[02:03] on the animations”.
[02:05] The idea is it’s some kind of optimisation
so if there’s a ship wayyy out there, I
[02:09] don’t have to animate it because why take
up all those CPU cycles, but unfortunately
[02:15] when we’re inside the ship, the exterior
knows that we’re potentially visible so
[02:20] it animates, but the interior when we switch
this way, that CGA in the back is not owned
[02:25] by any entity it’s just there, and because
of that it doesn’t animate correctly.
[02:33] Even though it's attached to the animation
of the ship, it’s just called out because
[02:38] it’s like, “well it’s not visible so
I shouldn’t have to worry about it”.
[02:42] So I have this bit of code in Manikin, if
I enable it, what this will do is it checks
[02:51] to see if this entity has a parent which is
going to be the ship and if this door, the
[03:01] interior is enslaved to the exterior and the
exterior is visible, then we allow it to animate
[03:08] even though you can’t see it.
[03:10] The idea is if you can see the exterior, then
you should potentially see the interior when
[03:15] the door opens and closes.
[03:18] So what we do is if the owner entity which
is going to be the vehicle which is going
[03:25] to be the exterior door is active, but the
interior door is not, we’re going to force
[03:32] it to be active.
[03:34] Same thing down here, so we’re forcing the
entity active and we’re forcing the skeleton
[03:39] to be active.
[03:40] What that will do is this will allow the entity
to do an update call to tell the animation
[03:47] system, “Hey I’m active, so go process
my animations”, and this will allow the
[03:51] skeleton to actually function.
[03:54] So two updates we have to do.
[03:56] Entity system wanted to say, “hey, animation,
I’m ready”, and the animation system will
[04:02] go, “yup, I’m ready too”.
[04:03] So in theory this should allow if the outer
door is ready, the inner door will be forced
[04:09] to be ready so they can open and close together.
[04:12] So let's hit the recode button and take a
look at what happens.
[04:16] Okay recode is done, let’s start back up
the game, alright!
[04:21] So we’re back in the level and let's close
the door.
[04:25] Magic door close.
[04:26] We won’t look at it.
[04:32] Wham!
[04:34] It’s closed as you would expect.
[04:37] Alright let's open it again.
[04:42] Let’s not look at it, not look at it, and
it’s open!
[04:48] So now we’re getting the interior update
when the exterior is updating.
[04:53] So if I close this, going into another room,
open that door, go to the other room it’s
[05:00] closed correctly and this room should be open
correctly.
[05:06] So if the interior is not updating, but the
exterior is, we say, “Hey you should be
[05:15] because we’re updating both” and then
they both play the animation, everything works
[05:20] well and you could open and close your doors
just by not looking at it.
[05:23] Well hope you guys enjoyed, till next time!
[05:27] So as you guys saw we had the Caterpillar
and its just a gigantic long ship and it has
[05:33] all these bay doors in it and you’re supposed
to be able to hit one or open one up and brings
[05:39] down the bay door and it's a little bit of
complicated geometry in this setup because
[05:43] we have an exterior mesh for the door and
an interior mesh.
[05:46] So there’s two doors that open and close
and what was happening is when you’re looking
[05:51] at one of the doors it opened correctly, however
if you looked that way when the doors open,
[05:57] one of the doors would open, but the other
would stay intact and it would usually be
[06:03] the exterior door that opened and the interior
door when you’re inside wouldn’t open
[06:07] until you looked at it and then it would start
animating, but by then it would be too late,
[06:11] it would be stuck open or stuck closed.
[06:14] You could go around and hitting all the buttons
and it wouldn’t move until you looked at
[06:17] it.
[06:18] It was a simple fix, we just made sure that
if the exterior animates, then we force the
[06:23] interior to animate at the same time.
[06:26] So the doors would open close even if you
looked the opposite way.
[06:30] Hope you guys enjoyed, until next time.

# Star Citizen: Bugsmashers - Episode 30

**Video:** https://www.youtube.com/watch?v=xXw00WCOWc8
**Date:** 2016-08-10
**Duration:** 8:34

## Transcript

[00:16] Mark Abent (MA): Hey everyone, welcome back
to Bugsmashers, but before we begin I’ve
[00:19] got a small riddle for you.
[00:22] If I fix a bug, but there was no Jira for
the bug, did the bug even exist?
[00:27] Closed Captioning provided by the Imperial
News Network.
[00:33] Hey everyone, we’re here in another fancy
dancy test level and we have a fun bug where
[00:45] if we’re in the buggy on normal plane, everything
is fine, but as soon as we have gravity that’s
[00:55] not aligned to the standard world Z, you know
Z down, we get some fun issues with the view.
[01:02] So let's take a look at that.
[01:05] Weee.
[01:07] So if I pop in third person, oh no!
[01:09] All the shenanigans.
[01:12] This buggy code was written with the assumption
that the world Z was always pointing down,
[01:19] but if you have you know let's see, we have
something like I have here where I have a
[01:28] gravity box pointing 45 degrees to the side
and not world Z down, the code just goes bonkers
[01:36] because it makes assumptions that it shouldn’t
be making.
[01:39] So let's pop out, turn our free cam off.
[01:45] Alright.
[01:47] So hop into our legacy buggy code.
[01:52] This particular view or this vehicle seat
view is for the buggy, or basically any what
[01:57] do you call it, driving vehicles and what
it does is as you're driving…
[02:03] I can show you.
[02:06] Weee, hop in.
[02:14] So as you’re driving, it kind of wants to
keep the view towards, well no I flew off.
[02:21] I have to increase gravity, this shenanigans.
[02:27] Game design, always something.
[02:30] There we go, increased our bounding box.
[02:36] Hop in, there we go.
[02:42] Alright back to the buggy.
[02:46] What this views tries to do is as you’re
moving, it tries to center the view behind
[02:51] you or towards where roughly the velocity
is so, if you’re moving this way, it tries
[02:56] to rotate you behind and if I back up, it
will try to you know, go behind my buggy.
[03:05] It’s mostly so that you can see roughly
where you’re driving towards.
[03:11] If it always behind you or in one particular
view, you could hit a wall and not know why
[03:17] so it’s a pretty nice fun thing, and of
course you can move around, but then if you
[03:22] let go of the mouse it will try to orientate
itself, and because it’s assuming that fun
[03:29] Z down issue, we get all sorts of alignment
stuff when we have gravity that’s not on
[03:35] the same alignment as the world.
[03:38] Especially for planets where you’re going
to have a sphere and the gravity’s always
[03:43] going to be relative to the planet so we can’t
always assume the world Z is down.
[03:49] So we had Chad Zamzow create a nifty little
fix where if I uncomment this, he basically
[04:00] has this thing called a gravity rotation,
and its matrix he’s using to figure out
[04:05] if all the code here before assume that Z
down, so if we’re going to assume that all
[04:11] the codes going to stay like that, but we’re
going to have a rotation, this grav rot basically
[04:17] says: “Alright, we assume this is all Z
down, but we’re going to move it this way”.
[04:24] This is what this little grav rotation gives
us.
[04:28] So it’s like “Alright, we can keep the
code that everything's down, but we’re going
[04:33] to assume that we can modify our gravity”,
So this guy says what our opposite says.
[04:38] So what we can do if we traced all the areas
that use this new thing, we can get our velocity
[04:45] and then check to see what our rotations going
to be and use that to determine you know,
[04:54] we’re flying along the axis and do all sorts
of fun little updates.
[05:02] So he transforms the velocity, the angular
momentum, and if we pop down…
[05:11] Where is it.
[05:14] In here, the second thing he finally does
is, it’s at the very end but we shoot a
[05:23] ray trace.
[05:25] Given that we have transformed, use my fun
little car.
[05:30] So if the Z’s pointing this way, and then
we rotate it this way, we apply the offset
[05:36] to the whole view and we even apply it to
when we shoot trace lines so that if you’re
[05:41] against the wall, it will bump into the correct
location and rotate according to that gravity
[05:48] bounds.
[05:50] So if we pop back in with his fun fix.
[05:54] Recode!
[05:56] What’s cool is since he’s using the gravity
straight from physics, this will work if you’re
[06:02] in a buggy that's driving inside of a constellation
or a bigger ship.
[06:06] If you’re on a planet, if you have gravity
box it will work depending upon what our fun
[06:12] gravity is.
[06:14] Back to our non world Z gravity.
[06:19] Hop back in, weeee.
[06:26] Turn on our car, go to the third person and
wala!
[06:30] As we move around, he applies the offset so
everything works just as expected and the
[06:40] code assumes everything was Z down, but because
he’s now applying that offset, everything
[06:44] gets lined up correctly.
[06:45] The position, the rotation and even the speed.
[06:48] So as you’re zooming by, the camera will
pan towards your velocity and if you back
[06:54] up, it will go the opposite way.
[06:56] Of course it’s limited by parameters by
the designers, but it works as expected.
[07:03] The beauty of this is if you’re on a planet
and if you’re going around and around, it
[07:08] aligns up perfect with the gravity.
[07:10] So as you go around, the camera is stuck to
the vehicle as it should.
[07:15] Well, hope you guys enjoyed, I’ll fly off
into outer space, weeee.
[07:23] So the buggy had some buggy code where it
assumed that the gravity was always pointing
[07:30] Z down so if you rotated, the gravity still
faces this way instead of down, the camera
[07:35] just goes ballistic because it's still assuming
it’s down and good old Chad had a little
[07:42] nifty fix where he figured out what the actual
gravity was, so even though it assumed this
[07:47] way for the code, we could find the offset
and then apply the offset to the velocity,
[07:52] the angular velocity, basically everything
that was needed that the camera assumes and
[07:58] rotates around and he just applied the offset
to it, worked like a charm, the buggy is no
[08:03] longer buggy, and that’s never going to
get old, and now everything works as expected.
[08:09] You can drive around the planet or even weird
crazy gravity vectors and the camera stays
[08:14] behind like it should.
[08:15] Hope you guys enjoyed, until the next buggy
bug.

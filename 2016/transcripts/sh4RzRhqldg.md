# BUGSMASHERS! Episode 19

**Video:** https://www.youtube.com/watch?v=sh4RzRhqldg
**Date:** 2016-02-10
**Duration:** 8:11

## Transcript

[00:00] Closed Captioning provided by the Imperial
News Network.
[00:01] Mark Abent: Hey everyone, welcome back to
Bug Smashers.
[00:02] As you can see, it didn’t get cancelled
yet.
[00:04] I was just taking a little rest, some PTO,
some vacation, you know, good on the beach.
[00:11] Welcome back, so let's get started, fix some
bugs and makes some bugs our bitch.
[00:20] Okay, hey everyone we’re here in good old
dying star and we have a little fun bug with
[00:34] the projectiles where if I strafe a bit you’ll
notice they’re not correctly in sync with
[00:41] this ship.
[00:43] They kind of delay a little bit which seems
right, but it’s actually wrong because … yes
[00:53] when you drift, you think the projectiles
are lagging because the ship moves, but the
[00:58] projectiles are actually getting the velocity
of the ship so if I have a constant velocity
[01:02] they should move together.
[01:04] What’s actually happening is, in our game
level update where right here in the middle,
[01:12] so the top of the frame is here, middle of
the frames here, below the frame.
[01:16] This is where we would do our updates for
the entities and we’re actually creating
[01:21] our projectile right here.
[01:23] So in the update we create our projectile,
cool, it’s gets the position and all that
[01:29] stuff from our weapon and it appears right
in front of our gun, then the frame continues
[01:36] and now we’re at the very end where all
of our animations update so if our gun or
[01:41] turret moved it was now over here and it’s
over here.
[01:44] So if we shot a projectile this way, I’m
just going use this little pen.
[01:48] So if I shot a projectile this way and at
creation time it’s like this, but now we
[01:53] get our animation update, turrets here, Uh
oh, or what happens if I have a wing that’s
[01:59] way like this, I shoot, but now the wings
over here and they’re not in sync.
[02:05] Then it gets worse, the frame ends, next frame
happens and our entity system updates and
[02:12] it moves our ship from like here to here for
flying.
[02:16] So our projectile that’s here and that creation
spawn, now is over here, but our projectiles
[02:23] over here.
[02:24] So then the frame happens all over again and
what you basically see is in the first frame
[02:30] it’s kind of off center, the next frame
it’s really off center and it just gets
[02:34] worse because we’re a frame behind.
[02:38] This was a problem that we’ve had since
the stop and we’ve kind of had hacks and
[02:42] fixes that we threw in there to kind of line
it up, but it never worked right.
[02:47] An example of this is in the previous patch
we had the Freelancer with it’s two guns
[02:52] in the middle and if you strafed left or right,
because of the frame syncing issue, the projectile
[03:01] could actually end up inside of the entity
grid of the ship and then the ship moves again
[03:08] and then the projectile just flies off.
[03:11] So my ships facing this way, it should shoot
forward, but instead the projectile now shoots
[03:17] like this because ... it just gets all messed
up.
[03:21] So what we have to fix this is a couple of
things.
[03:26] We have this new underlying system that the
good old folks in the UK.
[03:30] I think it was Steven North and Humphreys,
might have been Chris bolte, anyways there’s
[03:38] some good guys in the two other studios that
worked on this they called the “Load Manager”.
[03:45] What it is like alright I want to spawn this
entity, but we’re going to wait until all
[03:50] the resources are ready so we no longer stall
and we don’t have to preload things all
[03:56] in the very beginning of the game, we can
preload on demand and once everything has
[04:01] been preloaded, we can then spawn the entity
more higher up in the frame when physics and
[04:08] the entity are in sync.
[04:10] So we’re no longer creating the entity down
here, we’re creating it on top.
[04:13] Now it can happen a frame or two later, that’s
fine because we had to preload, but we’re
[04:18] at the top of the creation where everything
is good.
[04:22] Unfortunately while we have synced up physics
and the entity, here’s our ship and if it
[04:31] was here and now it’s here that’s cool,
however our guns are still over here because
[04:38] the animation update is at the end and the
animation actually moves all the attachments
[04:45] so that moves our gun.
[04:47] So while we are spawning in the correct location
we do need this extra bit of code here and
[04:53] the fire mode, that goes alright our entity
position is right, but our guns are wrong,
[04:59] but we know where they’re going to be built
because we have item ports which define how
[05:05] the ship gets made and what gets connected
to what.
[05:09] So we can theoretically just build all the
transforms, so if I’m on my weapon and I
[05:14] know the local transform or how I’m related
to the turret, I know that little bit I can
[05:21] keep doing that up until I get up to the top
crew and then take that transformation and
[05:26] apply it to where the ship really is.
[05:31] So if we do that bad boy which I just uncommented
that disabled, I’m re enabling it.
[05:37] This guy what this guy basically does as it
says is I go through each of the ports, I
[05:42] build up the local transform and then I finally
apply it to the entity of world space, I inject
[05:48] it into the physics code because we’re now
in sync and let's see what that gives us.
[05:55] There we go, alright recode is finish so let's
move to the left and as you can see, the projectiles
[06:10] are moving with the ship.
[06:13] There actually was another bit of code I added
which also takes into account the acceleration
[06:21] of the ship on the current time.
[06:23] So as our ships moves with the acceleration
we now correctly predict and it lines up better,
[06:31] but overall you see the projectiles moving
with the ship because of that lovely correct
[06:37] spawn position and then rebuilding all the
information and the bonus of this is if I
[06:44] have a Freelancer, my big guns will now shoot
off to the correct location even if I’m
[06:49] twirling and moving and all that fun stuff.
[06:52] The added bonus is we can now enable the ability
for the ship to hit itself.
[06:58] Before because the projectile could spawn
anywhere, it could hit anything, now that
[07:03] we’re fixing all this stuff up, we could
enable ships to hit itself which will add
[07:09] to some fun, fun times.
[07:10] Well I hope you guys enjoyed this bug, it
was a pretty exciting one.
[07:17] Especially since we’re getting all this
technology that we’ve been building through
[07:21] the years finally all coming together and
we’re starting to use it now to solve old
[07:26] problems like this projectile bug.
[07:28] We’re going to keep doing that as we get
newer technology and updating our newer systems
[07:35] so hopefully I’ll have more stuff to show
you guys, hope you guys enjoyed, see you next
[07:55] time.

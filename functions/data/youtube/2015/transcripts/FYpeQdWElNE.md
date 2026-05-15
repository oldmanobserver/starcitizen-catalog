# Bugsmashers: Episode 14

**Video:** https://www.youtube.com/watch?v=FYpeQdWElNE
**Date:** 2015-11-04
**Duration:** 9:28

## Transcript

[00:00] Intro
[00:01] Hey everyone, welcome back to an exciting
new episode of BugSmashers.
[00:04] Before we begin I heard some exciting news.
[00:06] We’re getting a new Star Trek!
[00:08] It’s going to be on CBS on-demand but it’s
a new Star Trek!
[00:13] Hopefully, you know, the reboots all coming
out and about, you know Star Wars and all
[00:18] that fun stuff, probably never going to get
a Firefly but, we might get another seaQuest
[00:23] - ahhh yeah, that’s gonna be good.
[00:27] Don’t judge me Randy.
[00:29] seaQuest, out!
[00:31] Eh?
[00:32] Eh?
[00:33] No?
[00:34] Come on?
[00:35] Aw...
[00:37] *Bugsmashers*
[00:39] Hey everyone, we are here in our fancy-dancy...
[00:48] Mark’s test level, yay!
[00:51] So I’m in a Retaliator and I am looking
at a optimization that we can do with the
[01:00] HUD raytrace.
[01:02] Pretty much all the raytraces we’re doing
with our ships.
[01:05] So let's step into our fancy-dancy visor code,
depending on where the player is looking,
[01:11] it will send out a trace to kind of see where
to try to converge all your weapons all onto
[01:17] that point.
[01:18] That’s if they have gimbals and this is
our beautiful ray world intersection or raytrace
[01:26] test and we basically shoot it out every frame,
like I said, to try to hit this little point
[01:32] with all your big-ass guns.
[01:35] Now unfortunately, when I do this trace...
so let's hop back into the game.
[01:43] We have to send in something called a skip
list.
[01:46] So what the skip list is, is basically we
want to ignore certain physical things.
[01:51] So if this is my beautiful ship, and I’m
a little sticky note of a player, when I’m
[01:57] shooting out my ray, I might be intersecting
the ship a little bit and now my guns are
[02:04] going to try to point at the ship.
[02:05] We don’t want that, so instead, we have
to send in that little skip list to say “hey,
[02:10] skip my vehicle and continue on.”
[02:15] So that’s what this beautiful little thing
does right here is we send in a bunch of physical
[02:22] entities to say “hey, skip this when you
perform the trace and find other things,”
[02:27] and unfortunately our skip list has 121 things
inside of it, which is not pretty good to
[02:36] do every frame since we have to rebuild the
skip list, so let's go...
[02:42] here we are.
[02:45] So every frame we’re adding the ship’s
physics, every actor, and every children.
[02:54] And these children are basically inside our
Retaliator - we have, like, dozens of entities
[02:59] that control the doors opening, some brushes,
a bunch of things to make it look beautiful
[03:08] and interact-able inside.
[03:09] Unfortunately, we're adding all those, plus
all the players, and as you saw, we’re at
[03:14] 121.
[03:17] Unfortunately our limit is 128, and we don’t
want to be sending all this stuff every frame
[03:25] where there’s dozens of other places that
do the same test; it’s very, very expensive.
[03:31] So, what I have done, and what I’m going
to do now, is we basically don’t need to
[03:37] skip these things; goodbye!
[03:42] And the player is another one, so we’re
gonna get rid of that and the vehicle, and
[03:49] the player is actually going through all his
item ports and adding his weapons and gear
[03:55] all into the skip list.
[03:57] Thing is, those items don’t have physics,
or if they do have physics, they’re part
[04:01] of the player physics, so we’re basically
adding the player physics multiple times.
[04:06] So we don’t really need this part, and this
is the only exception that we’ll need to
[04:12] have *burps* oh, excuse me.
[04:16] This is for if the player picks up something,
we don’t want, you know, that thing to be
[04:21] in the test, so we'll skip whatever he’s
picking up.
[04:25] So the player should just skip his physics
- so an actor, it will skip his physics and
[04:32] his ragdoll physics - that’s what both of
these guys are - and ideally, the vehicle
[04:37] will just skip itself.
[04:40] So let's go back to our lovely visor code,
and lucky for us, we already have this global
[04:48] grid setting on here.
[04:50] What this means is, we're going to do the
global grids, so here's my ship, and out here
[04:56] is the global grid.
[04:58] So we're going to ignore basically the innards
of the ship, and we don’t care about its
[05:06] door inside because we said this is the global
grid, we’re going to trace against the outside.
[05:11] In that case, we only need to trace against
- er, I’m sorry - send in the skip list
[05:17] of the vehicle and the actor himself and nothing
really else, and then now, we still get the
[05:23] same result.
[05:24] So if I hit re-code... oh no!
[05:32] Re-code has failed us, so we have to do a
regular code, compile, yay!
[05:38] Alright, there so that magical re-code button
worked, so now I’m going to put my breakpoint
[05:45] on, and as you can see, we only have three
things to skip: We have the vehicle physics,
[05:52] and my physics, and the ragdoll physics.
[05:55] So we have basically optimized a fun little
raytrace - awesome!
[06:02] There were some other things that I have done
as well, which I can show you real quick.
[06:11] So that’s well and good, but there maybe
some times where we have to trace for certain
[06:17] things, or if we want to skip certain things
while we're still in the grid.
[06:23] So we have that global grid setting which
means we’ll just ignore everything but the
[06:28] -- we’ll ignore the insides but we’ll
get the outside.
[06:32] And what I have done too is, in the interiors
and on the vehicles, I have added, basically...
[06:38] actually, where is it?
[06:41] I think I put it... let's look for that bad
boy.
[06:49] There you are.
[06:53] So in some instances, we still wanna do the
trace but we wanna do it locally to the grid
[07:03] and... but we may want to still ignore the
inner collision, but we want to get things
[07:09] like, I don’t know, maybe another ship and
a ship.
[07:13] So we could say, “hey we're the vehicle
perform in this trace, but I want to ignore
[07:16] the insides and all the players.”
[07:19] Or you could just say “I want to ignore
- I’m the vehicle and I’ll ignore all
[07:22] the players.”
[07:23] Or maybe you want to keep all of them.
[07:26] The next thing you could do, is you could
actually put in which grid you want to specify.
[07:30] So If I’m inside of here, we don’t need
to necessarily test everything out here if
[07:36] I have, say, a weapon.
[07:38] I just want to test the insides so I can tell
the ray world, “hey, just test for this
[07:42] grid.”
[07:44] So we’ve done a lot of optimizations to
our traces so it’s not all general - it’s
[07:49] more “what do you want to do, how do you
want to do it” - work for that problem.
[07:54] If we make it too general, you’re going
to have a problem, like, we're adding everything
[07:57] into this big skip list, when we don’t need
to do that.
[08:01] And, you know, performance-intense when we're
performing some of these rays per frame.
[08:06] So hope you guys enjoyed my fun little spaceship,
and... cool!
[08:13] So as you can see in this episode of Bugsmashers,
we’re doing some optimization where raytraces
[08:19] finally got around to doing some of that stuff
and this was pretty much what we call “Code
[08:24] Cleanup Fridays” where alright, we have
some fun little code that’s not as good
[08:29] as it should be, so on Fridays, we’re tasked
to go and clean up those little bits, and
[08:34] it comes into a little fun thing cause it’s
like, “hey, I got this thing running for
[08:38] production, it’s not as best as I want,
but on Code Cleanup Friday, I’m going to
[08:43] make it better because I get to have that
time to do what I need to do.”
[08:48] I hope you guys enjoyed, and I’ll see you
guys next time!
[08:53] This video made possible by the ICC Stellar
Surveyors and subscribers like you!

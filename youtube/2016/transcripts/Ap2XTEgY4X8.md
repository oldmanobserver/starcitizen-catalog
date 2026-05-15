# Star Citizen: Bugsmashers - Episode 35

**Video:** https://www.youtube.com/watch?v=Ap2XTEgY4X8
**Date:** 2016-10-26
**Duration:** 4:23

## Transcript

[00:10] Closed Captioning provided by the Imperial
News Network.
[00:14] Mark Abent (MA): Hey everyone, welcome to
Bugsmashers.
[00:18] Let’s check out a bug.
[00:22] Hey everyone, we’re here in the fancy dancy
FPS test map and we got a fun bug where sometimes
[00:35] this new vault tech, where you can jump over
these ledges just brings you way up into the
[00:41] air.
[00:43] Fun bug, now the tech is still getting worked
on and I am missing some animations so you’re
[00:48] going to see some wonkiness but this is behind
the scenes, you get to see the stuff we’re
[00:54] working on and let’s see if we can replicate
that fun bug where if I vault over this I
[00:59] get shot up way into the air.
[01:01] So, let’s see… oh, there it goes, good
times.
[01:05] Now I’m in space… so I vault over a ledge,
end up in space and suffocate because I have
[01:11] no air.
[01:12] That’s the best way to play this game, right?
[01:15] Excellent, so what’s happening.
[01:17] Well we have this fun bit of logic here that
tries to find the ground position so when
[01:23] you hop over it can basically know where you’re
at and unfortunately there’s a couple issues
[01:31] here.
[01:32] One, we’re using the world position and
if we’re in a zone, like in a grid of a
[01:36] ship or something like that this will mess
up totally because it’s not taking into
[01:40] account inside of that grid space.
[01:42] It’s a world position so it’ll reorientate
us wrongly because basically all the player
[01:48] code assumes zone position.
[01:52] Another issue is we’re getting the result
of this water test to see how far down we
[01:58] are, problem is we’re in this vault code
and this test may have not have happened or
[02:03] it has very bad data, it’s not going to
be anywise good.
[02:10] Sometimes it will gives us good hopping over,
sometimes it’ll have some bad information.
[02:14] So, what we want to do instead is use the
zone position and send off our own ray trace
[02:23] downward relative to us to see where the ground
actually is.
[02:29] If there is really ground, otherwise if we
don’t hit anything, we just use the player
[02:35] position where ever the animation leads us
in the hop over.
[02:40] So, let’s hit recode.
[02:43] All right, recode is finished… let’s see
what happens now if we try to vault over.
[02:50] Woo, kind of teleport in the air but that’s
another bug, I’m also missing some animations
[02:56] but the good thing is, woah, I’m no longer
instantly teleporting up into the air.
[03:04] Obviously this is still a work in progress
feature and that’s why we want to show you
[03:08] some fun new things that we’re working on
but by the time you get this you’ll be able
[03:14] to hop over those ledges smoothly.
[03:15] At least for now we’ve resolved the issue
of you teleporting into oblivion, the next
[03:21] thing is to smooth out the real jumping and
you can ignore the debug text on the bottom.
[03:28] It’s out debugging for internal use but
hope you guys enjoyed, til next time.
[03:35] Pew, pew, pew...let’s kill the player, yeeeaaahhh
dead.
[03:38] Dead’s awesome.
[03:39] All right so you guys saw a fun little bug,
you run all the way over, you see an awesome
[03:45] ledge and be like, ‘I’m going to jump
over’ but instead of going down you go way
[03:48] up into oblivion.
[03:49] That’s a little bug we didn’t want to
get released when Star Marine’s all ready
[03:55] so we took care of it before you guys got
a hold of it.
[03:58] Hope you guys enjoyed, till next time.

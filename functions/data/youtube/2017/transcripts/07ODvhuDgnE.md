# Star Citizen: Bugsmashers! - AI Constellation Crashes

**Video:** https://www.youtube.com/watch?v=07ODvhuDgnE
**Date:** 2017-03-01
**Duration:** 7:13

## Transcript

[00:10] Closed Captioning provided by Relay.sc
[00:14] Mark Abent: Hey everyone, welcome to Bugsmashers.
[00:18] I’m your host Mark Abent, I’m here to
take you behind the scenes on how we smash
[00:22] bugs.
[00:23] Hey you guys, I am here in another fun test
level and got a report of a bug, I should
[00:37] say a crash when we bring in an AI Constellation
so let’s give this a try.
[00:44] Woo Constellation, drag that guy in, let it
load… oh, big ship.
[00:53] Building all the shaders for him, all right
so let’s pop in the game.
[01:00] Pop out of the game and see if we can get
that crash and crash?
[01:05] Ah, crash.
[01:08] So this is actually a specialty crash, we
have these things known as fatal errors when
[01:14] the code gets into a specific section of code
the programmer may add this fatal errors saying
[01:19] you should never get here, if you get here…
here is a complete call stack so we can log
[01:25] it and try to figure out how we got to that
spot and so this specific call stack or should
[01:31] I say crash.
[01:33] Saved, not saved level, hit the break point.
[01:37] We’ll go to here, so this is our component
batch updater so we have an entity or this
[01:45] Constellation and then maybe composed of a
bunch of entities…
[01:48] I’m sorry, components like physics, geometry,
interactions, all sorts of things and if they
[01:55] want to do an update they go through this
batch updater so they can get batched and
[02:00] then multi threaded update or in the regular
main thread update.
[02:04] You’re not supposed to be able to register
these updates when the entity is shutting
[02:08] down, cause when we shut down the entity we
remove all the components, remove all the
[02:13] updates and so if you’re trying to register
an update during this phase…
[02:16] well, bad things will happen.
[02:18] So we want to know when people get to this
point and unfortunately the editor is a little
[02:23] special child where on the same frame that
we destroy…
[02:32] the interior or should I say all the entities
in the level we actually created again.
[02:40] So what we have is the Constellation getting
deleted and then getting created and when
[02:47] something gets deleted we mark it as garbage,
and that’s how we know it’s going away.
[02:50] Doesn’t necessarily mean it’s going to
be removed, it’s basically ‘oh I have
[02:56] some trash cans, I throw some trash away.
[02:59] Garbageman hasn’t picked it up yet, but
he might tomorrow, he might today, might sometimes
[03:04] later’.
[03:05] This bit of code was only checking to see
if it’s in the garbage bin, technically
[03:09] you shouldn’t be able to register when you’re
in an update…
[03:17] when you’re in the garbage but it shouldn’t
be a fatal error either because you could
[03:22] register but it should abort out and only
during the actual shutdown phase should this
[03:27] go south.
[03:28] We’re going to change this bit of code so
if we’re in the garbage and our entity is
[03:37] actually really, really shutting down the
garbage man is coming to pick him up.
[03:41] Then we’ll fatal error because something
seriously has gone wrong, otherwise we’ll
[03:49] just skip out because… and we only want,
actually we just want to skip out all the
[04:04] time.
[04:08] We only want the fatal error if we’re shutting
down the actual entity.
[04:15] So we threw it in the garbage bin, if someone
registers for an update, it’ll just get
[04:21] ignored because this thing is going to get
deleted.
[04:24] It’s just one of those funky things where,
yeah you marked it as deleted but none of
[04:30] the components on there know it’s getting
deleted yet because well, we’re not in the
[04:34] process.
[04:35] So for now we just go, ‘yeah we’ll just
ignore this update because trust us it’s
[04:39] going to get removed’ and we won’t crash
the game horribly.
[04:43] Instead we’ll just softly ignore it and
the game code will delete it sometime later
[04:48] and everyone will be happy.
[04:50] So, let’s give this a compile.
[04:55] All right, we’re back in the amazing test
level see what happens when we plop down another
[05:05] AI Constellation… let it load.
[05:14] Ha, there we go and now we’ll hop in game
mode, and
[05:25] then pop out of game mode and no crash, right?
[05:30] Ah, no crash, perfect.
[05:33] So, in the deletion phase is a little bit
tricky cause you always have to inform certain
[05:40] systems some things are getting deleted but
you don’t want to inform certain things
[05:44] until you’re in the actual, ‘yes, this
is the deleted phase’.
[05:49] Since this is one of those lower end systems
it needs to know exactly where we’re at
[05:56] and then once we get to the actual shutdown
then the components can know where they’re
[06:00] at too.
[06:02] So that in between phase is kind of one of
those weird things you have to get just right
[06:06] especially when editor and game code which
do things a little bit differently.
[06:11] Hope you guys enjoyed, til next time.
[06:13] So, as you guys saw we had a little bit of
issue with the designers, they were hitting
[06:18] a part of the code that would stop the game
cause they were hitting a spot we did not
[06:24] want the code to run in that area.
[06:26] At the same the editor was doing something
special where getting to that section of the
[06:31] error was technically a legit path, so we
had change to the code a bit so that it still
[06:38] will not hit that specific section while still
allowing the editor to do its little specialty.
[06:45] Just another day in game development, hope
you guys enjoyed.
[06:48] Til next time.

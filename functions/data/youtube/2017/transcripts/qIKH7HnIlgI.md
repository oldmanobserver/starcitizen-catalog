# Star Citizen: Bugsmashers! - Star Marine Respawns

**Video:** https://www.youtube.com/watch?v=qIKH7HnIlgI
**Date:** 2017-02-01
**Duration:** 5:46

## Transcript

[00:10] Mark Abent: Hey everyone, welcome to Bugsmashers.
[00:18] I’m your host Mark Abent, I’m a Gameplay
Programmer here at CIG, Los Angeles and I’m
[00:23] here to show you some bugs that we smashed
and let’s take a look.
[00:33] So, this bug is when you’re having fun playing
Arena…
[00:40] I’m sorry, Star Marine and you’re having
a fun time shooting and all of the sudden
[00:44] your game pauses or if you die and you revive
your game pauses.
[00:48] So what’s happening...well, we have our
character here and as you can see what we
[00:58] have is we have this body and then we have
his face and then his hands and those hands
[01:04] and face… they’re called skins.
[01:07] So we have a skeleton which is his body and
then we have skins and a face which are still
[01:13] the same thing.
[01:14] They get attached to his skeleton and they
become embedded and those extra, extra bits
[01:20] of geometry that get tangled into making what
he is and his skeleton is preloaded and it
[01:29] stays in memory til it’s no longer needed
and then it will eventually unload.
[01:32] His skins on the other hand, they’re constantly
loaded and unloaded every time you revive
[01:38] or respawn as a character and that’s what’s
causing these big performance drops because
[01:44] we have to unload it and then reload it, unload
it then reload it, rather than keeping it
[01:48] there in memory.
[01:50] So what we’ve done is added a resource caching
for skins just like all our other geometry.
[01:55] So that we don’t have get this stall, so
let’s see what that stall looks like.
[02:00] So if I kill this guy and I revive on this
guy… oh, I can no longer move the mouse
[02:11] because he’s stalling loading the other
guy and you can see it can be quite severe
[02:17] on some machines and other instances it can
be a few milliseconds… on this guy it’s
[02:22] a full couple seconds.
[02:24] So, let’s go into the code and we have this
thing called a global resource skin is what
[02:31] we made to preload skins and what we want
to do is enable it.
[02:39] So… what this does is any time that there’s
a skin resource either through DataForge or
[02:47] through XMLs, it will load this particular
thing in which we’ll know it’s a skin
[02:55] resource and on unload it’ll load our skin
once and any time we use it we’ll add one
[03:01] of these rough counts and the idea is when
we die we have our ragdoll which will bump
[03:07] the rough count up.
[03:08] We revive, we have the player which bumps
the rough count up to one and then the ragdoll
[03:13] goes away which releases one of the counts
and we still have one count so we don’t
[03:18] have a stall and eventually when the player
and the ragdoll go away because... well, the
[03:23] player left and there’s no one using his
face or his head it removes the resource cause
[03:28] it’s not needed anymore.
[03:30] So, let’s recode and see what happens.
[03:34] All right, so back into the game and we’ll
kill this guy and as we take time to respawn…
[03:44] funny enough before we were doing this fix,
we actually stuck in a bunch of the heads
[03:50] in the level as a temporary fix so all the
heads would be loaded so it wouldn’t cause
[03:56] any stalls til the code was ready.
[03:59] Once code was ready we removed the heads and
now we have a proper code fix.
[04:03] So we respawn and as you can see I’m able
to move around just fine, there’s slight
[04:08] delay but not as bad as it was before cause
we’re actually keep the head in memory or
[04:14] skins in memory until we’re not needed anymore.
[04:17] So, we die and respawn, die and respawn, it
won’t have to load them cause they’re
[04:20] already there in memory.
[04:21] Well, hope you guys enjoyed.
[04:25] So as you guys saw we had a little fun bug
where if your player dies and he revives,
[04:30] he’ll completely stall for a few seconds
depending on your machine could be like nothing
[04:35] or if you have a slow hard drive it could
takes seconds in which really gets frustrating
[04:41] cause you want to get back into the battle,
kicking ass or just dying again.
[04:46] So, what happened is… well, we have a way
to precache a bunch of geometry and things
[04:51] like the player’s body or skeleton, that
gets preloaded and it stays around so if he
[04:57] dies and revives, it’s there so it just
makes a copy, but his hands and face, they
[05:03] don’t so when you die and revive it has
to reload them again which causes the stall.
[05:07] So all it was is we had to add a little bit
of preloading so those skins stay intact so
[05:13] when we die and revive it knows just to plop
them back there and not load a big resource
[05:19] hogging thing.
[05:22] Well, hope you guys enjoyed, til next time.

# BUGSMASHERS! Episode 11

**Video:** https://www.youtube.com/watch?v=AvBt6TzjBB4
**Date:** 2015-09-23
**Duration:** 6:51

## Transcript

[00:00] hey everyone welcome back to another
[00:01] episode of bug Smashers uh fortunately I
[00:05] didn't win one of those Emmys whatever
[00:07] they be but but I did meet my one number
[00:11] one
[00:15] fan bug
[00:17] [Music]
[00:19] bashes hey everyone we're here in my
[00:22] good old test level again and we have
[00:24] reports of a crash when specifically the
[00:28] we have some pilot or or even yourself
[00:31] goes into um The Hornet and then goes
[00:35] out of game mode and then back in so
[00:37] let's see if we could replicate
[00:41] that so we have our AI actor just going
[00:45] to wait for this to and then he'll go
[00:49] in ignore the lad part I broke that on
[00:53] purpose doing something else so
[00:57] um let's try this again
[01:00] then we got the crash we are trying to
[01:04] enter let's see what's
[01:07] happening all right so the game is in
[01:09] the process of shutting down so that we
[01:11] can go back into editing mode and it's
[01:14] going through all of the entities and
[01:16] basically calling this event reset so
[01:18] that all the entities can go back to the
[01:20] default state in this case the vehicle
[01:22] is
[01:23] resetting and it's clearing all of its
[01:27] animations and unfortunately
[01:30] when it clears these animations we have
[01:33] this call back here in the vehicle seat
[01:37] so once the um canopy gets done opening
[01:39] or the player is done walking up he sits
[01:42] inside so the callbacks are still
[01:45] getting set um so we're closing on the
[01:48] animations they're getting done now it's
[01:50] doing all these call backs and those
[01:52] callbacks put the player into the seat
[01:54] but unfortunately the player entity no
[01:57] longer exist or that pilot I should say
[01:59] that AI no longer exist so when we get
[02:02] that entity ID let's see where' it
[02:06] go we have well it's giving us an
[02:08] invalid entity ID because that guy
[02:09] doesn't exist and then we're accessing a
[02:12] raw pointer here and basically the whole
[02:14] game goes Kuts because we're trying to
[02:16] tell someone that doesn't exist to sit
[02:19] down on that seat so what we're going to
[02:23] do is go into our seat reset
[02:28] code and as you can see see here we're
[02:31] already um canceling out some of our
[02:35] animation handlings for when you're
[02:37] waiting for like the can Beed open but
[02:38] now we need to wait for the ones that
[02:41] like the can closed after you sit down
[02:44] so we're going to make sure that we
[02:47] cancel all of our animation
[02:51] callbacks and let's try this
[02:54] [Music]
[02:56] again if Visual Studio doesn't freeze
[03:00] there we
[03:05] go and as this loads up funny enough the
[03:09] only re reason why this started popping
[03:11] up was due to another
[03:14] crash's see if we go to
[03:17] handle start the
[03:22] game so yeah the only reason this guy
[03:25] started popping up is because of another
[03:28] crash where
[03:30] this delete action controller was
[03:32] removed from uh the vehicle's Destructor
[03:36] and moved into this event called done uh
[03:39] the problem with having this in a
[03:41] Destructor is when you're destructing
[03:43] the object and you're calling all things
[03:46] if they were to call back with virtual
[03:49] functions you're going to start getting
[03:52] into weird undefined behavior and you
[03:54] will crash not all the time but
[03:58] sometimes and actually depends on the
[04:00] compiler and a whole bunch of other fun
[04:03] things so to prevent that from happening
[04:06] we basically move this delete action
[04:08] controller to happen in this thing
[04:11] called entity event done uh this event
[04:13] done will get called out onto the entity
[04:15] getting removed prior to getting it
[04:17] delete so it could do some cleanup so it
[04:19] doesn't have to worry about all those
[04:21] funny virtual function calls but
[04:24] unfortunately because of the weird
[04:27] ordering of things
[04:30] um that
[04:33] introduced this issue right
[04:36] here so we just had to make sure that we
[04:39] tell all of our all of our call
[04:41] animation callbacks to close up and get
[04:44] done so let's let this load and try it
[04:52] again all right so we're back in our fun
[04:55] little test
[04:58] level and look let's go back
[05:01] into the game mode let our guy walk up
[05:05] the stairs or the invisible
[05:10] stairs and then we'll stop
[05:14] it then we start it
[05:19] again and Wham no
[05:22] crash so now designers can get in and
[05:25] out of the game mode or in between
[05:27] editor and game mode oh no
[05:32] and of course I crash on a completely
[05:35] unrelated
[05:37] issue ah the beauty of game
[05:41] design so I am going to forward this to
[05:43] our lovely Graphics
[05:46] programmers actually yeah so hope you
[05:50] guys enjoyed that fix and looks like
[05:53] there'll be another one coming
[05:55] soon cheers hope you guys enjoyed this
[05:59] episode of bug Smashers uh we had a
[06:02] little fun incident with the the
[06:04] vehicles not resetting all their
[06:05] animation call backs and then you know
[06:08] clear it up and there then once it
[06:11] clears up it goes back and then oh my
[06:13] God I'm not there anymore crash so we
[06:16] fixed that bad boy and then we're off to
[06:18] the next bug as you see we still got a
[06:20] couple more cuz I crashed right after
[06:22] fixing that one so hope you guys enjoyed
[06:25] and see you next
[06:27] time this video made possible by the ice
[06:29] CC Stellar surveyors and subscribers
[06:32] like you

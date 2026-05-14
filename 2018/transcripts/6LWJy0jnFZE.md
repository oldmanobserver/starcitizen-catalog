# Star Citizen: Bugsmashers! - Will You Be My Crash?

**Video:** https://www.youtube.com/watch?v=6LWJy0jnFZE
**Date:** 2018-02-14
**Duration:** 9:02

## Transcript

[00:06] [Music]
[00:15] everyone welcome to bug smashers
[00:18] I'm your host mark gaming let's get
[00:19] smashing everyone we are here at my
[00:27] fancy Dancy test level and we have a fun
[00:30] item for crash when things get destroyed
[00:33] it's kind of weird to replicate it
[00:36] however we have a nice little user
[00:38] example right here some designers we're
[00:40] sending up the 600 eye and they
[00:43] accidentally left and these animal
[00:45] Jack's inside of the object container
[00:47] they're not real people they're just
[00:48] fake geometry the inside of the ship is
[00:52] of course a object container which means
[00:55] we load in the outer shell of the
[00:56] vehicle and then we have this object
[00:58] container which is like a mini level
[00:59] that we load inside of it and that's all
[01:01] this fancy stuff that you see in here
[01:03] and what's cool is it allows you to have
[01:07] a ship and work on it and do all sorts
[01:09] of cool setups and then we stream it in
[01:11] it's pretty nifty now when you were in
[01:14] the editor from the letter that we're in
[01:17] we have the option to go into this thing
[01:19] called game mode which is a hit ctrl G
[01:21] we go in game mode and we play the game
[01:22] as if it were real and if I hit escape I
[01:25] go back into editing mode and
[01:27] unfortunately when I go into game mode I
[01:29] am going to crash
[01:31] and I'm crashing on one of those animal
[01:35] Jack's just to do we could go right here
[01:40] so we're deleting let's see what atom
[01:43] object we're deleting we're deleting an
[01:46] atom object that's class dude
[01:49] somewhere he has a name there goes enema
[01:52] object 0:03 so when this guy gets
[01:56] deleted so we have the vehicle we're
[02:00] going in game
[02:01] removing the inside and bringing in a
[02:03] new one because during gameplay and
[02:05] editing things might change and we need
[02:07] to refresh the state and we started
[02:10] leaving all the stuff inside of it the
[02:12] anima objective little guy is crashing
[02:15] trying to delete its item ports that's
[02:17] all the gear that you see on the top of
[02:19] them what's weird about this is where
[02:23] are you that that so the item poorer its
[02:28] container here we are we're in the D
[02:31] constructor of the item port container
[02:32] so this means when this object is
[02:34] removed can delete it this is the very
[02:36] last thing that gets called before the
[02:38] memory gets wiped and it has a list of
[02:41] item ports as you can see it's kind of
[02:43] destroying them right here and
[02:45] unfortunately when it destroys them at
[02:47] this point any listeners listening form
[02:51] is going to start accessing those item
[02:54] parts and I import containers however
[02:56] it's in the D constructor so when you
[02:58] access that stuff things go wonky and
[03:00] you end up well crashing so what we have
[03:04] installed earlier is to do somewhere in
[03:09] the events I like scrolling so I'm gonna
[03:12] scroll Scroll scroll where are you
[03:15] events there we are we have this event
[03:19] so when we mark the entity for delete we
[03:22] can do some actual nice clean up then we
[03:25] could delete the entity sometime later
[03:28] so we're gonna try to find out why this
[03:31] isn't working and instead it's cleaning
[03:33] up the entities in the D constructor so
[03:35] let me pause it and using that entity
[03:38] name we're gonna add some code
[03:42] everywhere to do some debug breaks to
[03:44] track down what in the world is
[03:45] happening let me write this guy down
[03:50] [Music]
[03:52] here this guy's name
[03:57] and this is not production code this is
[04:00] pure debug code to track down the order
[04:02] of all the shenanigans so I'm gonna add
[04:05] a debug break anytime to get an anima
[04:07] brick three and we're removing the item
[04:09] ports and then we're also going to do it
[04:12] any time we add item ports and hopefully
[04:16] we could track down the sequence of
[04:19] events and we'll add one of the duh well
[04:21] we can't have one there because the name
[04:22] doesn't exist but we could add one right
[04:25] before it gets deleted and done Sam
[04:30] so it's cooed all things alright so I'm
[04:34] back in a little edit er and put some
[04:36] debug breaks everywhere let's hop back
[04:38] in the game and see what's happening so
[04:41] first thing we get is when we go into
[04:44] game mode we are getting the right call
[04:46] we're deleting this thing so the vehicle
[04:49] is getting rid of the object container
[04:50] deleting all the entities inside of it
[04:52] so the interior is going away and our
[04:54] animal object is getting rid of all of
[04:56] its item ports in the correct sequence
[04:58] which means if it deletes it here and it
[05:01] gets it somewhere else
[05:02] something must be adding them at another
[05:04] time and of course there it is so we
[05:09] deleted them all because our entities
[05:10] getting deleted
[05:12] however some fun editor code seems to be
[05:16] messing with us let's see what's
[05:18] happening now
[05:19] oh nope not yet this is the new one
[05:21] coming in alright continue on new one is
[05:28] actually what is this guy did you do
[05:34] ah we're sending events to everyone so
[05:43] what's happening is we deleted our
[05:46] entity getting rid of his item ports
[05:48] switching in and out of game-mode causes
[05:52] a system-wide event to reset and when
[05:56] this entity gets told to reset
[05:58] he basically fixes himself back up adds
[06:01] all the item ports again because fun Lua
[06:04] and then get deleted the next frame
[06:07] because we're now gonna get now and done
[06:12] we have item ports and then we end up
[06:14] crashing because we have item ports and
[06:18] deleting in the destructor so yeah
[06:20] fun times bleed the entity get rid of
[06:23] the item ports at the right event and
[06:25] get a system-wide event saying hey reset
[06:27] because we're in the editor going in and
[06:29] out game mode and all the item ports
[06:32] back only to get destroyed again and
[06:34] cause of mayhem
[06:35] so what we want to do is in our
[06:40] system-wide event technically we only
[06:43] care about re setting all the events
[06:47] that are hand placed in the level not
[06:50] dynamically spawned so we hand placed a
[06:53] vehicle it needs is a reset but the
[06:56] object container that it creates doesn't
[06:58] need to get reset because the vehicle
[06:59] handles that so easy fun little fix is
[07:04] if we're removing this entity don't
[07:07] broadcast this specific event system to
[07:12] all the entities now let's code up again
[07:16] and see how that works out
[07:21] all right we're back in the scene
[07:23] brought down my three are 600 I asked to
[07:27] 300 I'm gonna hop into the game and
[07:31] we're deleting the old option container
[07:33] getting rid of all the entities getting
[07:34] into Barra and I'm object it's getting
[07:36] rid of all its item ports and then this
[07:41] is the new guy getting created due to do
[07:45] hello new guy here's our old one
[07:47] ah give me my mouse there's my mouse
[07:50] let's double check the memory we have no
[07:54] item ports sweet continued on and I'm in
[07:58] the game and of course my 600 ID just
[08:01] falls down because I had in a gravity
[08:03] volume and yeah I think that sets the
[08:07] mood until next time hope you guys
[08:09] enjoyed Oh
[08:10] so as you guys saw we had a fun little
[08:12] crash where unfortunately we have some
[08:15] back-end legacy code that was trying to
[08:17] refresh the entity state that caused all
[08:19] sorts of havoc so when you dropped in
[08:21] and out of the editing mode it just
[08:24] exploded and crashed everywhere
[08:26] well we hooked up the code so it would
[08:28] only make those modifications if it was
[08:30] a entity that was placed down inside the
[08:33] level and not one that was dynamically
[08:36] spawned hope you guys enjoyed until next
[08:38] time thank you for watching so if you
[08:40] want to keep up with the latest and
[08:41] greatest in star citizen and squadron 42
[08:43] development please follow us on our
[08:45] social media channels see you soon
[08:50] you

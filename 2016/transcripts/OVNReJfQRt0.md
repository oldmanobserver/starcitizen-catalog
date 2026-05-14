# BUGSMASHERS! Episode 26

**Video:** https://www.youtube.com/watch?v=OVNReJfQRt0
**Date:** 2016-06-16
**Duration:** 7:06

## Transcript

[00:09] hey everyone welcome back to bug
[00:10] Smashers sorry we couldn't do it last
[00:12] week I was at E4 for everyone no that
[00:16] was horrible but I'm going to go to E3
[00:18] cuz that's going to be fun you wish you
[00:20] were there I'm be there you want to go
[00:22] there we'll meet you there all right
[00:24] let's start the
[00:28] show box speci
[00:30] [Music]
[00:33] hey everyone we're here in my fun little
[00:36] Port Port awesome as you can see
[00:39] everything here is awesome
[00:42] except there's one thing not awesome
[00:44] when I spawn some ships in they seem to
[00:49] be falling through the
[00:51] ground so let's spawn in our Scout ship
[01:00] ship is spawned and I have powers to go
[01:03] through walls because I'm in Port
[01:06] [Music]
[01:08] awesome as you can see my awesome ship
[01:12] is no longer awesome and it teleported
[01:16] or spawned inside of the level
[01:20] Joy normally this wouldn't happen in
[01:23] single player but you guys will see this
[01:25] a lot in multiplayer when you spawn a
[01:28] ship sometimes instead of it's spawning
[01:30] on the platform it just spawns inside
[01:33] and then
[01:34] goes so what's happening let's go to the
[01:38] code so when we have a ship and we spawn
[01:42] it uh we get a call back saying that our
[01:44] vehicle is spawned on the server and
[01:47] then we have some code here to look up
[01:49] the landing position and move the ship
[01:52] into the proper position however uh
[01:57] let's use this awesome pencil um if this
[02:00] is the origin of the ship and this is
[02:02] the landing gear and the origin's here
[02:05] I'm going to spawn inside and explode so
[02:09] we have this thing uh right here which
[02:12] is The Landing Pad Helper and the idea
[02:15] is you could have a position right here
[02:17] saying this is where the landing
[02:18] position should be not the spawn origin
[02:22] so going back here instead of spawning
[02:23] here I'll spawn like this only problem
[02:27] is this call back happens
[02:30] after we spawn and what we're doing is
[02:33] we're actually positioning the ship here
[02:36] and then the call back happens then we
[02:38] move it
[02:39] up um not good especially since it may
[02:43] take a little bit before physics
[02:45] physicalize and all of our items get on
[02:48] so we may spawn here an item May pop in
[02:51] and then all of a sudden we're
[02:52] intersecting things exploding not good
[02:55] so instead of putting our position in
[02:59] you know after we spawn um we have to
[03:03] put it in as a prerequirement uh to
[03:06] where we spawn so instead of spawning
[03:08] here we have to spawn at that offset so
[03:12] if our spawn Point's here we need to
[03:14] calculate what our theoretical offset
[03:16] will be which will be right here so
[03:18] we're going to spawn on the top instead
[03:20] on the
[03:21] bottom however we can't do that right
[03:24] away because this bit of code relies on
[03:28] the fact that the vehicle has spawned
[03:30] and we could get that bone position so
[03:33] what we had to do was go in all of our
[03:35] xmls pre-calculate that offset stick it
[03:39] in our implementation XML so that we
[03:42] know how far it off before we even spawn
[03:45] the ship so if we get rid of this lovely
[03:47] code and actually go where we request
[03:51] the
[03:52] spawn uh I have this new fun bits of
[03:57] code that will get the vehicle pams get
[04:00] the spawn loc and it will move the spawn
[04:03] location
[04:04] so if we go here so the going from the
[04:09] top down we're going to set up our
[04:11] vehicle to spawn and we're going to tell
[04:13] it to spawn at this spawn location but
[04:17] we're going to apply an offset where the
[04:20] vehicle pram says hey you need to move
[04:22] this much from the origin of the ship so
[04:25] we take that position and here's our
[04:28] spawn and we're actually going to move
[04:29] it up up so now our new spawn offset is
[04:31] up here and that's what this fun little
[04:34] bit of math will do get our um world
[04:38] Matrix and it will apply the offset in
[04:41] World space so that we get the new
[04:43] location so
[04:45] now when we request our spawn we'll be
[04:48] at the new location instead of
[04:51] teleporting there or spawning here and
[04:53] then moving up so let's do some recode
[04:57] and give it a try
[05:04] yeah all right so we just did a
[05:06] recompile the code so let's fly all the
[05:10] way back into our ship spawning which
[05:13] should be here we
[05:17] are let's
[05:20] respawn no I got to wait 30 seconds
[05:23] luckily I have developer mode and I can
[05:26] cheat with time those seconds go away
[05:30] haha let's request our ship spawn
[05:34] again teleport way up and voila our ship
[05:38] is now in the correct position because
[05:40] we spawn it in the correct position
[05:43] rather than spawn in the incorrect
[05:44] position and then move it
[05:47] back now there is still some bugs where
[05:50] I think it was with the Aurora where
[05:52] after we spawn it it slowly rotates
[05:55] around but that's another whole fun
[05:58] physics thing maybe on another bug
[05:59] Smashers but until then see you guys so
[06:03] we had a little fun bug here with our
[06:05] Landing system you know we were spawning
[06:08] the ship in the ground and then moving
[06:11] him up when we should just spawn him in
[06:13] the correct offset so we hooked up that
[06:15] code made sure that he spawns you know
[06:18] offset correctly and now you won't spawn
[06:21] and see your ship exploded into a
[06:23] billion pieces you will see some fun
[06:26] things like the Aurora twisting around
[06:28] but that's just an issue with the how
[06:30] we're dealing with physics and the the
[06:32] landing and not putting it's a whole
[06:34] another thing probably get to it
[06:36] eventually in a bug Smashers but until
[06:38] next time see you

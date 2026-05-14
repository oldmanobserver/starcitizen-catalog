# BUGSMASHERS! Episode 22

**Video:** https://www.youtube.com/watch?v=5wOixpvtqW8
**Date:** 2016-04-06
**Duration:** 10:31

## Transcript

[00:07] [Music]
[00:09] hey everyone welcome to bug Smashers uh
[00:11] today I'm going to show you an awesome
[00:12] bug so let's get
[00:17] started bug
[00:21] smashes hey everyone we are here in
[00:25] Port alisar I really want to say
[00:28] Alistar but we're in alisar alir we're
[00:32] in a port so here in our fancy Dancy
[00:35] Port um we were tracking down some fun
[00:38] bugs in two three where the server after
[00:42] a while just goes completely Bonkers has
[00:45] low FPS and players get weird things
[00:49] like when you Tap a button maybe you
[00:51] don't start shooting because um the
[00:54] servers are you know taking a their
[00:57] sweet time we are here in this fun
[01:00] little Port alar map and we as we were
[01:05] debugging to figure out why the servers
[01:07] were you know having such low FPS we
[01:10] discovered two horrible horrible things
[01:13] one uh ships that get spawned in by
[01:15] players and destroyed outside of the
[01:18] green zone weren't getting cleaned up
[01:19] and they were still there in the levels
[01:23] and the same thing was happening with
[01:25] items so we fixed the issue with the
[01:27] ships no longer um you know or I should
[01:30] say ship's always getting stuck there in
[01:32] the level and now they get properly
[01:34] cleaned up but we noticed something um
[01:38] where our items would actually stick
[01:40] around and on the screen you actually
[01:43] see um all the items that are currently
[01:46] in the level and how many instances so
[01:49] we have a couple ammo crates a couple
[01:51] pistols and a couple repair beams um
[01:54] this is a fresh map um I'm the only
[01:57] player inside and these are the items
[01:59] that just so happen to be there because
[02:01] the designer add of them but if we spawn
[02:05] a fun little
[02:07] ship uh spawn on a hornet oops I have
[02:12] debugging
[02:13] on uh you'll see that a bunch of items
[02:16] just appeared on the list cool uh let's
[02:19] go to where is my ship let's go to my
[02:22] ship I'm going to go through all the
[02:24] levels because I don't feel like
[02:28] walking
[02:30] I am going to now enter my
[02:33] ship and I'm going to blow it
[02:41] up so this might take a little bit to
[02:44] kill
[02:53] myself I'm turning on my
[02:56] ship
[02:57] and Bam all right
[03:00] so
[03:02] now once the HUD
[03:05] initializes I am going to destroy my fun
[03:08] little
[03:12] ship so I blew up my ship and on the top
[03:15] you'll see that um it says my Hornet CU
[03:18] it's telling me that it's destroyed and
[03:21] as you can see the items are all still
[03:23] there so if we wait a moment there it
[03:26] goes the ship went away and if you
[03:29] notice not all of our items
[03:32] disappeared um we still have our debris
[03:35] piece which has some ammo boxes our
[03:38] radar and our laser
[03:43] guns so we're going to wait for the
[03:46] debris let's
[03:56] see so we still have some debris it's
[03:59] takes about 60 seconds for it to go
[04:03] away so wait for it to go
[04:09] bye-bye we still have eight instances oh
[04:12] all the debris pieces just vanished and
[04:14] if you noticed we still have all of
[04:16] these HUD items on the bottom we have
[04:19] Let's see we have some counter measures
[04:22] we have a radar we have missiles we have
[04:24] the
[04:25] self-destruct um some thrusters and some
[04:29] weapons
[04:30] not good so basically if you spawn a
[04:33] bunch of ships and they all die and we
[04:35] take our items and attach it to our
[04:37] debris they never get cleaned up so
[04:40] after a while of playing you we build up
[04:42] these items and these items and these
[04:44] items and that's a lot of crap and
[04:49] unfortunately they get stacked so
[04:52] much um they become a burden on the
[04:54] networking and even on client and server
[04:57] performance so what's happening
[05:01] we go to our lovely debris item um way
[05:05] back
[05:06] when uh when our debris or I should say
[05:10] what our debris item is is anytime you
[05:12] smack into something or your wiing
[05:13] breaks off we take the geometry of the
[05:17] vehicle Stick it to this U entity called
[05:19] a vehicle item de breze and we attach
[05:22] all the weapons and gizmos and stuff
[05:25] onto that item and that controls the
[05:28] geometry and all the it items from then
[05:30] forth uh it used to be that this was all
[05:33] client side so when it got cleaned up um
[05:37] we just hid the you know the item on it
[05:42] because the server still own the item
[05:46] and it would get deleted when the ship
[05:47] get deleted because the item was still
[05:50] technically attached to the ship we just
[05:52] kind of did some magic to put it onto
[05:55] the debris piece however as time went on
[05:58] we were slowly moving this debris piece
[06:01] over to be server and client so client
[06:04] versions would just have geometry server
[06:06] versions would have the actual items and
[06:10] when we actually move the items over now
[06:12] the debris item would own the item and
[06:16] no longer the vehicle so if the vehicle
[06:17] went away the debris piece owned the
[06:20] item if it went away and never deleted
[06:22] up its items you would still have all
[06:25] these items that you see in that fun
[06:27] little list so so all we have to do is
[06:32] when this debris piece goes away we have
[06:34] to make sure to clean up all the items
[06:36] that it owns and that's literally all we
[06:39] have to do uh it's just one of those
[06:41] things we forgot to do when we you know
[06:43] move the debris piece over to server um
[06:48] uh server control with all these items
[06:50] on it so what we're going to do is build
[06:55] again and restart the level and see what
[06:58] happens
[07:08] all right so we are back into our lovely
[07:12] level in the port let's try this
[07:17] fix uh we shall spawn around another
[07:21] Hornet and see what
[07:23] happens still have fly mode where did I
[07:28] go
[07:30] there we are
[07:33] ha all right let's spawn ourselves
[07:36] another
[07:37] f7c spawned it and we got a bunch of
[07:40] items in our list so let's
[07:44] go smash this Hornet
[07:51] wooo and while that
[07:54] happens we are going to
[07:58] cheat
[08:05] oops CU 60 seconds is way too long we're
[08:09] going to delete our debris in 5
[08:19] seconds all right so recode just
[08:21] finished and now our debris is set to
[08:23] for five seconds so let's smash this
[08:26] ship to
[08:28] Smither
[08:35] boom so our ship is still dead up on the
[08:39] top and all the items from the debris
[08:42] just went away and once our Hornet goes
[08:45] bye-bye we should now see
[08:47] everything go back down yep there we go
[08:51] so when our vehicle goes away all the
[08:53] items it owns get removed and now when
[08:56] our debris pieces get removed all the
[08:59] items it owns now go away so we're no
[09:01] longer leaking items and everyone could
[09:04] have a fun fun day when the 30 Pirates
[09:07] spawn and they kill them all woo hope
[09:10] you guys enjoyed hey everyone as you
[09:12] guys saw we had a little bug with our
[09:14] items where after you kill a ship and it
[09:16] spawns debris pieces the debris goes
[09:19] away the vehicle goes away they all you
[09:21] know they all get cleaned up but our
[09:23] items get stuck there so if you have
[09:25] like a big battle like we have you know
[09:28] all those pirates spawning those 30 some
[09:30] Pirates which is another bug uh you know
[09:32] go and kill them all their items get
[09:34] stuck and stayed in the level and after
[09:36] a while they just build up and build up
[09:38] and build up and the client and server
[09:40] performance just goes bad so as had to
[09:45] clean that up fixed it as you can see it
[09:47] was just a byproduct of us moving the uh
[09:51] debris from Sir or client authorative to
[09:53] server authorative so that we could you
[09:55] know sync what goes to what and you know
[09:58] you always forget one thing and that one
[10:00] thing could have some severe
[10:01] consequences so we figured it out solved
[10:04] it and on to the next bugs hope you guys
[10:06] enjoys see you next
[10:28] time

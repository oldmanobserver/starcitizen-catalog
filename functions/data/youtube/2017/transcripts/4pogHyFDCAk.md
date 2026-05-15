# Star Citizen: Bugsmashers! - Cargo and Coordinate Systems

**Video:** https://www.youtube.com/watch?v=4pogHyFDCAk
**Date:** 2017-07-12
**Duration:** 17:44

## Transcript

[00:16] hey everyone welcome to bug Smashers I
[00:18] am your host Mark aent and I'm here to
[00:20] show you the
[00:24] bugs bug
[00:26] [Music]
[00:28] bashes hey we are here on an awesome
[00:31] planet and I just stole some cargo from
[00:34] that Drake ship and what's cool is I
[00:37] could actually place this down anywhere
[00:39] I want but I want to place it in my ship
[00:41] so let's walk up
[00:44] there and O it's hitting the shield
[00:47] that's fun but oh no I can't place it
[00:50] into my ship I can't loudly enough I can
[00:54] place it outside with an awesome jittery
[00:57] bug oh no what's happening
[01:01] well my crate vanished I've officially
[01:05] lost my crate and it's back all right
[01:07] let's take a look and see what is
[01:09] happening but before we do um which to
[01:12] say what's going on is if I hold down F
[01:15] I go into this awesome new interaction
[01:17] mode that's going to be coming for 3.0
[01:20] um where it shows me a list of things
[01:22] that I can interact with and if I click
[01:24] place I could interact with this cargo
[01:26] Grid or cargo container that I have and
[01:28] I could place it on the ground now
[01:30] ideally I should be able to place it
[01:33] anywhere so I can place it on the
[01:36] planet and I should be able to place it
[01:38] on my ship however going into the ship I
[01:41] have a hard time because well this
[01:44] planet actually has a coordinate system
[01:47] and the ship has a coordinate system and
[01:49] when I cross between the planet's
[01:51] coordinate system to the vehicle one all
[01:53] things just go Bonkers so let's step
[01:55] into the awesome
[01:57] code so here is is um the player choice
[02:01] component this is the thing that when I
[02:03] hold f it allows me to place the uh
[02:06] cargo thing around or do some kind of
[02:09] interaction and unfortunately this guy
[02:12] is doing everything in World space so
[02:14] when I try to place the cargo grid into
[02:17] the ship it's freaking out because it
[02:20] can't figure out between the planet Zone
[02:23] and the ship Zone where it should place
[02:25] it and if I actually move it from World
[02:29] space or the whole or let me step back
[02:33] in our whole universe we have a root U
[02:36] coordinate system then we have a planet
[02:38] and then that planet has its own
[02:39] coordinate system and the ship has its
[02:41] own coordinate system so if we do
[02:44] everything in World space we're
[02:45] technically doing it in the higher up um
[02:48] basically the universe's coordinate
[02:50] system and things get freaky when you
[02:52] try to do a gigantic uh you know the
[02:56] outermost realm TR Trace into to there
[03:00] instead we should be going to the very
[03:02] deep coordinate system where we are and
[03:04] doing our tests in that coordinate
[03:07] otherwise if you're on the very
[03:08] outskirts it has to try to figure out
[03:10] where it's own it just goes Bonkers so
[03:13] we need to make sure everything that
[03:14] we're in is in the correct pinate system
[03:17] so since we're using the eye position of
[03:19] the player and the direction based on uh
[03:23] the screen coordinates so basically
[03:25] wherever my screen is we're projecting
[03:27] it into the um this the zone
[03:30] or in this case world we should be
[03:33] changing both of these to the zone so
[03:37] first thing we need to do is get the
[03:40] zone that the player is
[03:43] in zone we ask the player he has an
[03:46] entity like hey you give me your zone so
[03:50] this is the zone that the player is
[03:52] currently in we want to get his eyes in
[03:56] zone space so instead of world space we
[03:58] do Zone space
[04:00] cool and this direction that gets
[04:02] projected from the screen to uh the game
[04:05] is in World space
[04:08] therefore we need
[04:11] to translate them into the correct
[04:14] coordinate
[04:15] system so let's
[04:18] translate World space to Zone
[04:23] space we got to do it right here and
[04:27] right here
[04:30] so this will convert my starting camera
[04:33] position to where I'm pointing from
[04:36] World space to Zone space so that's
[04:39] awesome we have a position in zone space
[04:42] we have a direction in zone space but
[04:44] now we need to tell physics we're doing
[04:45] everything into this specific
[04:49] zone so we'll tell
[04:51] wh H where is it we
[04:54] need get physics
[04:57] grid get we got to tell
[05:01] physics we are going to be in this
[05:04] specific um coordinate system using the
[05:08] position and Direction hopefully we'll
[05:10] now get a ray Trace hit but when we get
[05:13] a hit uh unfortunately there's still
[05:16] some code that's still doing in World
[05:17] space so we need to translate that hit
[05:21] position from Zone space back so convert
[05:25] Zone space to World
[05:27] space Shazam and let's recode and see
[05:32] what happens as it recodes I'll explain
[05:36] it again uh we have pretend this whole
[05:38] room is uh the universe and this is our
[05:42] root zone or our world Zone and we have
[05:46] a planet which is pretty cool and that
[05:48] has its own Zone which means it could
[05:50] have its own gravity and basically
[05:52] everything's in this guy it's a
[05:54] partitioning system it's pretty cool but
[05:56] we also have a vehicle it's kind of a
[05:58] big vehicle but when he gets into uh the
[06:02] zone of the spaceship he could actually
[06:04] rotate around and he's basically
[06:06] affected by the gravity of the ship or
[06:08] I'm sorry the U the planet instead of
[06:09] the root Universe system now if you have
[06:12] a player I don't have here's a little
[06:15] player we stick him into the ship he's
[06:18] actually in the zone of uh the ship so
[06:21] where the player is in the zone of the
[06:23] ship which had his own gravity so he'll
[06:25] be pointing up in the planet Zone
[06:28] rotating around inside of the universe
[06:31] and what we just did is make sure that
[06:34] when we do this R Trace we're doing it
[06:36] relative to the player so if he's in the
[06:38] ship we're doing the rate Trace in the
[06:41] zone of the ship if we on the
[06:43] planet we're doing the ray Trace in
[06:46] relative to the zone of the planet so I
[06:48] could place the um the crate in the
[06:50] planet cuz I'm in the zone then when I
[06:52] Traverse into the grid of the the ship
[06:54] I'm now doing everything relative to the
[06:56] ship so I just finished recoding let's
[07:00] see what happens we'll pick up this
[07:02] lovely
[07:05] box and I am going to run up the
[07:09] ramp in a peaceful walking
[07:13] Manner and let's try to place
[07:18] down come
[07:22] on hold that I got
[07:25] stuck all right so let going to try to
[07:27] place down so I can
[07:31] place somewhere inside of the
[07:33] ship somewh place in the ship yeah oh
[07:37] gosh he's
[07:38] teleporting well kind of got placed down
[07:41] but what happened
[07:52] now what did I
[07:58] break
[08:09] I broke
[08:15] something hit hit
[08:28] hit
[08:33] let's skip that crate
[08:38] again Spa a
[08:40] crate where my crate
[08:45] go one thing goes wrong everything goes
[08:54] wrong why ah there's a crate give me a
[08:57] crate all right so Reco is just finished
[09:00] let's try placing down this crate
[09:04] whoa so place it down anywhere I want in
[09:07] here in the outside world everything's
[09:11] fine and dandy let's go up
[09:14] to the
[09:21] ship you're going to see it snap right
[09:23] there cuz it's actually in the
[09:26] um uh where we oh there we go
[09:30] it's actually
[09:33] hitting come here you why aren't you
[09:44] sideways when one thing breaks it all
[09:58] breaks
[10:05] Zone
[10:28] space
[10:31] why are you
[10:41] [Music]
[10:47] now
[10:50] Aha and of
[10:53] course it would help
[10:56] if our rotation
[11:00] in this bit was actually in the proper
[11:03] Zone as
[11:04] well
[11:08] so this guy also needs to
[11:14] be in the
[11:16] correct
[11:21] Zone give me
[11:26] all convert
[11:29] to give me the
[11:33] Zone give me the
[11:40] Zone we are convert Zone space
[11:45] [Music]
[11:47] to let's try this real
[11:57] quick
[12:22] so one thing breaks everything
[12:27] breaks
[12:41] have to do another
[12:46] fix well I actually discovered another
[12:48] bug in this thing well discovering the
[12:50] other one the rotation is all messed up
[12:53] so I have to fix that one now you get
[12:55] two bugs for the price of
[12:57] one
[12:59] so what happened here folks is um
[13:02] unfortunately since uh we converted the
[13:06] race successfully to um the correct Zone
[13:10] and we had to get the position back into
[13:12] World space because this is how this bit
[13:14] of code works but unfortunately the part
[13:16] that figures out where it should place
[13:18] it on the rotation uh it was assuming
[13:21] that the player's rotation was always in
[13:23] World space but but it's not so we have
[13:27] to convert that back into World space so
[13:31] that this could do the correct rotation
[13:34] up so if I place him
[13:38] down oh recode why you know
[13:43] work
[13:45] yeah where's this
[13:57] rotation
[14:00] I managed to crash the entire
[14:02] [Laughter]
[14:08] game
[14:10] yeah two excruciating days where we
[14:14] didn't think we were going to have a
[14:15] show
[14:17] later Jared is it fixed
[14:21] yet it's been two
[14:25] days I don't think it's
[14:27] working
[14:30] H at least we have a beautiful scenery
[14:33] all right guys let's test to see if this
[14:36] fix actually works now we're going to do
[14:39] the impossible cross the
[14:41] boundary and try to place a
[14:44] crate woo so I'm now going to try the
[14:49] impossible and place a crate down and
[14:52] see what happens place the crate rotate
[14:55] a bit and the crate's down h oh we have
[15:00] successfully crossed the Zone in another
[15:04] Zone and placed a crate down with minor
[15:06] rotation so what did I do let's go to
[15:09] the code so here's the fun uh big old
[15:13] thing that we were looking at last time
[15:15] where in this local player choice
[15:18] component if you hold F you can look
[15:19] around and pick where you want to place
[15:21] stuff in a crate and it was doing
[15:24] everything in World space and the fix
[15:27] originally was to move the ray cast so
[15:29] that it was in zone space and everything
[15:31] else would be kind of in World space
[15:33] problem was the placement and rotation
[15:36] got all out of whack so I literally went
[15:39] through this entire
[15:41] thing and transformed everything which
[15:43] should be in zone space or World space
[15:46] correctly so all of our transforms are
[15:48] now so when we place this thing down it
[15:51] does everything in zone space and even
[15:53] moves this invisible thing into the
[15:55] correct Zone when appropriate and when
[15:59] we spawn where is this magical Beauty
[16:02] when we spawn this holographic thing
[16:04] that thing you saw when we placed it on
[16:05] the ground we make sure that it's in the
[16:08] correct Zone and this placement position
[16:10] is in the zone PL or rotation um and
[16:14] spot so now that everything's in its own
[16:17] space everything appears to be correct
[16:19] the only issue now is the player kind of
[16:21] tilts that's a completely different
[16:23] issue and that will be one for next time
[16:25] hope you guys enjoyed behind the scenes
[16:28] of game design and game programming
[16:30] where one thing you think goes right
[16:32] ends up going bonkers hope you guys
[16:35] enjoyed till next time so as you guys
[16:37] saw we had a fun little bug with the new
[16:39] feature where uh we have a crate in the
[16:42] player's hands and you hold F and you
[16:43] want to look around to place it down it
[16:46] was doing all of these calculations in
[16:48] World space but unfortunately when we
[16:50] have a gigantic planet and a ship um
[16:53] each of those have their own little
[16:54] coordinate system inside of it so when
[16:56] you go inside we have a coordinate
[16:58] system system and a coordinate system
[16:59] and a coordinate system and doing all
[17:01] this Ray casting in the world space
[17:03] instead of that specific coordinate
[17:05] system tends to cause some issues so
[17:07] moving it all into the proper zone
[17:09] system and transforming everything
[17:11] relative to the correct coordinate
[17:13] system resolve the issue and you were
[17:14] able to place crates from the planet
[17:17] into the back of the ship hope you guys
[17:19] enjoyed until next time thank you for
[17:21] watching so if you want to keep it with
[17:23] the latest and greatest and Star Citizen
[17:24] of Squadron 42's development please
[17:26] follow us on our social media channels
[17:29] see you
[17:42] soon

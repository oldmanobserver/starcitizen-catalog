# Star Citizens: Bugsmashers - Ship Seat Issues

**Video:** https://www.youtube.com/watch?v=UDsGxm0FHlU
**Date:** 2017-08-02
**Duration:** 7:37

## Transcript

[00:06] [Music]
[00:16] hey everyone welcome to bug Smashers
[00:18] let's smash some
[00:23] bugs bug
[00:27] smashes hey everyone we are here in and
[00:30] the good old pu and there's port allar
[00:33] and there's um Planet Mark Planet Mark
[00:35] is awesome so next to uh Good Old Port
[00:39] allar we have a fun bug where uh when we
[00:43] spawn into a ship in
[00:44] multiplayer um we have this bit of code
[00:47] that the player is informed that he's
[00:50] linked to the seat and he's also linked
[00:52] to we call it the control manager or the
[00:54] vehicle um we link it so that we know
[00:57] internally that hey we're on a vehicle
[00:59] hey we're on a seat seat so some code in
[01:01] different directions could do their
[01:03] thing cuz you know we have to do
[01:05] different things if you're sitting down
[01:07] in a seat uh if you have a gun or
[01:08] something so when you sit down on all
[01:11] the machines this bit of code should
[01:14] hook it up just let everybody know that
[01:16] you are linked correctly and
[01:19] unfortunately uh if I step through
[01:22] here spawn ourselves into an awesome
[01:27] ship let's Spa a cutless
[01:31] Shazam the server is fine it will run
[01:35] through set the vehicle everyone's
[01:40] happy the client on the other hand as
[01:43] soon as he gets to this link State he
[01:46] will have an attachable component and as
[01:48] soon as he tries to attach to the EDM
[01:50] Port it ends because well it doesn't
[01:54] know what's happening why well um o
[01:59] we're getting detached now because I
[02:00] think we guys died yep we died uh
[02:03] spawning a ship into another ship but
[02:06] before that what's happening uh well
[02:08] when we have our Network replication uh
[02:11] we make sure that we have a priority
[02:13] thing in the sense that we have the ship
[02:16] the seat and then the player and we make
[02:18] sure the ship spawns before the seat
[02:20] before the player however what's
[02:23] happening is when the seat spawns in it
[02:26] is aware that the this player should be
[02:28] attached to it because it's through our
[02:31] serialization before the seat can attach
[02:33] to the ship it has known that the player
[02:36] should attach to it so it attaches the
[02:38] player so now the player's attached then
[02:41] we attach it to the seat and because of
[02:43] this weird ordering thing um the when
[02:46] the by the time the actor is aware that
[02:48] he's attached to the seat he's not
[02:49] attached to a ship this update only
[02:52] happens once so he never gets informed
[02:54] that now he's attaching to a ship so the
[02:57] fir little bit of fun uh the fix is
[03:00] actually pretty simple uh we have here
[03:03] our little seat code and anytime we
[03:06] detach or attach we need to
[03:10] inform um basically the actor that we
[03:12] are now in uh the seat so we're going to
[03:18] check our seat Flags if we have any
[03:24] Flags
[03:26] es check all the flags we have an N link
[03:33] Shazam did
[03:35] I mistype there we go so now when we've
[03:39] attached the ship onto the vehicle we
[03:42] need to update this
[03:46] function so
[03:50] ha so what am I doing here um so we have
[03:53] this interface where the seat is a where
[03:55] that is attached to
[03:57] something and when we attach the seat
[04:01] we're going to check to see if the seat
[04:03] has a player in it that's what this bit
[04:05] will do and if it does have a player
[04:07] we're going to reinform the player that
[04:09] you're now attached to a seat attached
[04:11] to a vehicle so now everyone should be
[04:14] good to go let's hit the magic recode
[04:18] button and see where this takes us
[04:21] recode recode recode recode recode
[04:27] recode okay
[04:30] all right recode is finished we revived
[04:34] ourselves through the building because
[04:36] why
[04:37] not uh we have Port allar there again
[04:40] we're going to spawn oursel cutless
[04:43] Shazam and it probably would help if I
[04:46] actually set up break point so that we
[04:47] could see that this is happening
[04:50] so we're going to spawn into another
[04:54] cutless so this is the server we know
[04:57] that works
[05:02] wait for the network aha now we are the
[05:05] client and as we step through the first
[05:08] time we're attached to the seat don't
[05:10] have a um vehicle fair enough then now
[05:14] we attach the vehic the seat to the
[05:16] vehicle and then now we have a link woo
[05:20] and the client code is working as
[05:21] intended we are establishing that hey we
[05:25] got a vehicle everyone want should know
[05:27] about it and everyone's good to go
[05:31] continue and Shazam we are in our cut
[05:36] lless watching all the shaders compile
[05:39] because why not there's another cutless
[05:41] there we got our fun
[05:43] UI and I want to be able to shoot him
[05:49] so
[05:54] ha yeah blow up all the things die
[06:03] slow death slow
[06:06] death Beautiful
[06:08] Death screw it it's taking too long
[06:10] we'll
[06:12] Ram now we're inside of the other ship
[06:15] features so now the um the code
[06:18] recognizes that we are in a vehicle
[06:20] everyone's happy all the internal
[06:22] systems know that we're in a vehicle so
[06:24] they can all handle their little B bitty
[06:26] stuff behind the scenes hope you guys
[06:28] enjoyed this one it's a fun one so as
[06:32] you guys saw we had a fun little bug
[06:34] where um we have our seat the player
[06:36] sits in it and then sometime later he
[06:38] gets attached to the vehicle due to the
[06:40] way the network orders all that fun
[06:42] Shenanigans but because of that weird
[06:45] Oddity um the player was informed that
[06:47] he was attached to the seat but he was
[06:48] not informed that he was attached to the
[06:50] vehicle so a lot of weird cat in the
[06:52] back end assumed that we're just
[06:54] attached to a seat not a vehicle and it
[06:55] didn't run right uh so switched the code
[06:58] around so that we inform that we're on a
[07:00] seat and then when we get onto a vehicle
[07:02] we update saying hey we're now on a
[07:03] vehicle everyone's happy everything's
[07:06] good to go hope you guys enjoyed I know
[07:09] the code liked it hope you did too till
[07:11] next time this is bug Smashers thank you
[07:14] for watching so if you want to keep it
[07:15] with the latest and greatest and Star
[07:17] Citizen of Squadron 42's development
[07:19] please follow us on our social media
[07:20] channels see you
[07:28] soon for

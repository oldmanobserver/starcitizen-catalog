# Star Citizen: Bugsmashers - Episode 29

**Video:** https://www.youtube.com/watch?v=EXV_vPg2EuQ
**Date:** 2016-07-27
**Duration:** 9:28

## Transcript

[00:08] hey everyone welcome to bug Smashers uh
[00:11] I guess I have to finally smash bug I've
[00:13] been busy catching Pokemon and the good
[00:16] old asteroid builds of
[00:18] yellow but that's all done time to play
[00:21] some Pokemon oh fine we'll do a bug
[00:24] after this just one more okay two more
[00:28] hold on I got to go get one I got to
[00:33] right bug
[00:35] [Music]
[00:37] species hey everyone we are here in
[00:41] fancy Dan test level with all my debug
[00:44] textures oh no up and I fell off so what
[00:48] we have here is with our um lovely
[00:51] programming art for the interaction
[00:53] system yes this is totally programming
[00:55] art um so if I get back into
[00:58] my
[01:01] ship with all the fun inner thought
[01:05] systems we have a situation where if
[01:09] we're normally in the cockpit we could
[01:11] use a bunch of these interactions which
[01:13] is pretty cool
[01:15] however when I put this ship in Flight
[01:22] ready and I begin to fly around and you
[01:24] can see the Shadows move so that
[01:26] indicates that I'm flying around um
[01:30] working on getting the HUD fixed in
[01:32] you'll notice that when I look at any of
[01:35] the interaction points uh it's they're
[01:38] not working I can't actually use
[01:41] anything and this is a fun little frame
[01:44] behind bug um what's happening is every
[01:48] frame um we're shooting out a ray and
[01:52] we're trying to capture what we're
[01:54] hitting in the the vehicle um our
[01:57] interaction system uses actual physical
[01:59] location ation so you shoot a ray you
[02:01] hit the physics and you go is there an
[02:02] interaction point on this yes display
[02:05] all the interactions you could do open
[02:07] close restart you name it uh but
[02:11] unfortunately um our physics and our
[02:15] game code kind of run independent of
[02:18] each other in the way that physics is
[02:19] doing its own thing um and the game code
[02:22] does its own thing and once in a while
[02:23] they get into sync however um when we do
[02:27] this Ray Trace uh we are actually
[02:30] queuing it up on the game side and then
[02:33] dispatching it at a later time
[02:35] fortunately the time when we dispatch
[02:38] the ray is when uh physics and the
[02:40] entity system are kind of in sync but
[02:45] unfortunately um because the game side
[02:47] caches all the information and you may
[02:50] get that Ray a frame or 10 later um our
[02:55] positions that we sent so if we go over
[02:58] to here um uh might be wrong so say I'm
[03:03] in the game code I'm doing something and
[03:05] it's time to fire ARR all right I get
[03:07] the player position get everything where
[03:10] he's at uh send up some Ray properties
[03:12] right here and I basically cue the ray
[03:17] which is cool except this position is
[03:21] behind as soon as um the queue decides
[03:23] to hey go hey I'm going to fire this off
[03:26] so I could do an array wait 5 minutes
[03:30] it'll do it however the position is here
[03:32] and my ship is way back there now so
[03:36] what we're going to do is basically move
[03:38] all this
[03:39] code
[03:40] so undo all things we're going to put it
[03:44] into a new function and what this does
[03:47] is when our deferred Ray Caster is about
[03:50] to submit our Ray tracing information to
[03:54] the um the physics system um that's when
[03:57] we get our actual information and we
[04:00] could abort out in case things went
[04:02] wrong um so I want to do an array I tell
[04:06] the um what do you call it the the Ray
[04:09] Caster Hey whenever you're free let me
[04:12] know when it goes hey it's your time to
[04:14] shine uh give me all your information
[04:17] and it sends it off now in theory this
[04:21] would be
[04:22] fine but then we have to deal with
[04:25] another problem where again with the
[04:28] physics system we we have the player and
[04:30] the vehicle and they're two independent
[04:33] things what that means is when the game
[04:35] code snaps the player onto the seat of
[04:38] the ship at this point in time they're
[04:41] they're one uh you could think of them
[04:44] being basically in the same area however
[04:48] um when physics starts simulating the
[04:50] player actually has no velocity or
[04:53] anything cuz his position is getting set
[04:55] to the seat but physics doesn't know
[04:57] that so he stays behind but the ship has
[04:59] velocity and acceleration so it
[05:01] continues on so our poor player is stuck
[05:04] here until um the game code comes along
[05:07] and says you should be
[05:09] here
[05:11] uh kind of crappy but uh we have a
[05:14] solution for this called the zones or
[05:16] the grid system and ideally the ship
[05:19] would have a grid and when we stick the
[05:20] player in there when the ship moves the
[05:22] player moves uh cool however not all of
[05:26] our ships have a grid uh like our Legacy
[05:29] ships like the Hornet or basically the
[05:31] one-seater ships it's like do they need
[05:33] a grid do they not need a grid the
[05:35] bait's going back and forward maybe we
[05:37] need a grid because we want particles to
[05:39] fall down relative to you know you where
[05:42] you were at um but at the same time it's
[05:45] like is it worth the cost benefit so as
[05:47] the debate goes on between whether or
[05:48] not we install a grid we have to support
[05:52] both systems so this bit of code Works
[05:55] nicely if you're in a Zone relative to
[05:58] the ship
[06:00] so what we have to do
[06:02] now it's kind of similar to the
[06:05] projectile fixed a long time ago where
[06:08] if the actor and the vehicle are not in
[06:10] the same grid basically this snazzy
[06:14] thing and the player is attached to a
[06:16] seat uh basically this snazzy thing we
[06:19] want to get we want to basically start
[06:22] rebuilding all the information so we
[06:24] know that the positions are off the
[06:26] world positions are off or the Zone
[06:28] positions but we know the local
[06:30] Transformations are correct so we know
[06:32] the player is going to snap to a seat
[06:34] and the seat's going to snap to uh the
[06:37] vehicle so what we could do is build all
[06:40] of our local Transformations so this
[06:42] first part is basically this the
[06:45] distance between the seat and the player
[06:47] and then the rest of this is basically
[06:50] the seat to the vehicle or if the seats
[06:52] on another item within an item we can
[06:54] build the hierarchy once we have the
[06:56] local position basically where the
[06:58] player is is relative to the ship we
[07:01] could ask physics what the vehicle's
[07:03] current position and this will be the
[07:07] actual player position if we multiply by
[07:09] the local offset so we rebuild
[07:11] everything get the real vehicle position
[07:13] for where physics thinks it's at rebuild
[07:16] it and now we know the player is here
[07:18] and from that we know the player's eyes
[07:21] relative to him so we can use that same
[07:24] Matrix to basically rebuild our position
[07:28] so that we're in the actual location and
[07:31] with that set up I could hit
[07:36] recode and
[07:40] wait all right recode's done so now I'm
[07:45] flying around let's get our shadows
[07:47] moving so you can see the movement there
[07:49] we go and when I look around if I let go
[07:52] of the mouse I'm still able to look at
[07:55] um the interaction point for the engines
[07:57] off same thing for the power on on and
[08:00] the open exterior so there you have it
[08:04] uh fixing all the fun things you have to
[08:07] deal with when you have multi-threaded
[08:09] systems and independent ordering and all
[08:13] this chaos hope you guys enjoyed until
[08:15] next time we always have these fun
[08:17] little things when riding games where
[08:20] you know you have multiple systems and
[08:22] they work different which ways you know
[08:23] you have physics doing one thing the
[08:26] game code doing another thing they're
[08:28] working independently and then you have
[08:30] to find ways to um you know find the
[08:34] areas where they intersect so that you
[08:36] could do the right calculation at the
[08:37] right time then you also have updating
[08:41] you know when you when can you update in
[08:42] the game code pre post now later so you
[08:46] just have to find the right set of
[08:48] sequences so that if you're trying to do
[08:50] an interaction in a ship you're making
[08:52] sure that the player in the position is
[08:54] exactly where the physics thinks it is
[08:56] and where the game thinks it is so that
[08:58] you could up with a little text box
[09:00] saying hey open your canopy hope you
[09:02] guys enjoyed um until next time
[09:27] woo

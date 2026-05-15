# Bugsmashers: Episode 13

**Video:** https://www.youtube.com/watch?v=GSIXl4Ug3-s
**Date:** 2015-10-21
**Duration:** 9:27

## Transcript

[00:00] hey everyone welcome back to another
[00:01] episode of bug Smashers uh got some good
[00:04] news I got myself a whole brand new
[00:06] office it's pretty nice here in the
[00:10] corner as he pans around looks at my
[00:13] awesome
[00:19] monitors oh yeah and I got my free pack
[00:23] of gum my ammo and my disco Lando
[00:28] signature
[00:33] bug
[00:35] [Music]
[00:37] bashes hey everyone so we are here in
[00:41] our
[00:42] fabulous little test level and I have ai
[00:46] ship and I'm going to go into AI physics
[00:49] mode and we should be seeing some
[00:52] Thruster effects but we're not so I'm
[00:56] going to turn on these little uh Debo
[00:58] command to force thr to turn on since
[01:01] our AI is not flying and the bug that we
[01:04] have is not only is our main engine not
[01:07] working but if we move this guy far away
[01:12] and
[01:13] back move him far away and we'll just
[01:16] teleport to him you'll notice that all
[01:20] the um engines have stopped working but
[01:24] if I look at them a certain way they
[01:26] kind of turn on and the problem gets
[01:29] worse and worse the further away I am
[01:31] from the z00
[01:33] origin so what's happening well
[01:36] unfortunately these
[01:39] particles um are having a fun time
[01:42] because we go into our code right here
[01:46] uh this bit determines whether or not we
[01:48] should see the thing and it's trying to
[01:51] figure out you know how close we the
[01:53] camera is
[01:55] to uh the center of the ship however
[02:00] this bit of fun little code is actually
[02:03] taking the camera position and doing the
[02:05] difference between the origin of the
[02:07] level and this is because of the way
[02:11] that this code is treating our Zone
[02:13] space code um these sections of the code
[02:17] are in World space and when we're
[02:20] telling it to get this um
[02:24] transformation we're that's we're taking
[02:27] a world space um bound
[02:30] getting a world space Matrix and trying
[02:32] to compute a world space AB out of that
[02:36] we're getting some weird numbers because
[02:39] you're supposed to for this function
[02:42] pass in the world transformation matrix
[02:45] and a local space and it will trans it
[02:47] will make a world space transform or B
[02:52] bounding box but if we're pass in a
[02:54] world space one we're going to get some
[02:57] weird stuff as you can see
[03:03] here
[03:05] so going back into the code um have to
[03:08] clean up uh pretty much this bit so if I
[03:12] undo these
[03:14] fixes or undo the Break um I changed the
[03:18] code here it used to create a um
[03:22] transformation based on the um world
[03:26] bounding box but what I have done is our
[03:29] Nifty little zone system I just said hey
[03:32] give me your current world space
[03:34] position because the zone system
[03:36] automatically figures that stuff out you
[03:38] know if I'm in a Zone within a Zone
[03:40] within a Zone this will tell me the
[03:41] world space calculation so why do all
[03:44] that necessary work when we could just
[03:46] ask the zone system and now we could get
[03:50] the correct distance from the camera and
[03:52] make sure that we are you know in fact
[03:55] from the camera to the vehicle and not
[03:58] from the camera to the center of the map
[04:01] and I actually had to do some more
[04:03] Cleanup in some other
[04:05] areas as you can
[04:09] see uh this was a little clean up
[04:11] because it was uh uh this was a fun one
[04:16] um so when I was cleaning this up before
[04:18] I found this little bit and since this
[04:20] is a world Matrix and this is a local it
[04:23] was basically downcasting and we were
[04:25] losing Precision so I had to undo that
[04:28] and make sure that we pass in the full
[04:30] world
[04:31] transformation then
[04:33] finally uh this bit of code is where we
[04:38] pass in the information where we are
[04:40] into the zone so if we go back to the
[04:42] broken code if you notice here we're
[04:46] taking the world space and telling the
[04:48] zone system that we're sending you a
[04:51] Zone space
[04:52] transformation which is completely wrong
[04:55] so we're giving it World coordinates and
[04:57] treating it like we're in a local or
[04:58] Zone space
[05:00] so had to clean that up and now we say
[05:04] all
[05:05] right um here's our normal
[05:08] transformation and we're going to update
[05:11] this into Zone space because this
[05:13] actually is Zone space uh these two
[05:15] functions here will actually take the
[05:17] world um this will take the world bounds
[05:20] and actually move it into the local or
[05:22] Zone space and the same thing goes
[05:27] for this function it will Bas this is
[05:30] basically in zone space or local
[05:33] space so now with those two changes we
[05:36] are updating correctly and making sure
[05:39] that you know we're updating the Zone
[05:40] into the Zone the world into the
[05:43] world when we come back into here and we
[05:46] grab our world absolute bounds we should
[05:49] be
[05:50] good so let's give that a
[05:54] compile and to as this goes on um you
[06:00] can think of this little piece of paper
[06:02] in this whole room its coordinates in
[06:06] this 0 is in World space and its bounds
[06:10] could be the this whole big box and this
[06:13] is all in World space but say do I have
[06:17] a pen I have a pen I draw a little thing
[06:22] right
[06:22] here this is now in local space or Zone
[06:26] space of this little object
[06:30] and if we want to get this position in
[06:34] World space we have to compute the
[06:36] location of it relative to this object
[06:40] and then U from that we could compute
[06:43] where it is in the world but if we
[06:45] compute its World space against its
[06:48] World space we're going to get some
[06:50] weird number like we're seeing here so
[06:52] we have to go local then to
[06:55] world so let's see what happens when we
[06:57] load up the map
[07:02] all right so we are back in the test
[07:05] level and let's turn on AI
[07:08] physics let's turn on our fancy
[07:11] Dancy I copied and pasted the wrong
[07:14] thing turn on my fancy Dancy debug
[07:16] console variable that will force the
[07:18] Thruster effects to
[07:20] Fire and we'll move the vehicle way out
[07:23] into Oblivion and we'll teleport to himo
[07:27] as you can see the thrusters are still
[07:28] on including the back
[07:31] Thruster and there we have it now the
[07:34] particles are actually checking the
[07:36] distance between you know the eye and
[07:38] the Thruster or the where the particle
[07:40] origin is instead of the particle um I'm
[07:43] sorry the eye to the origin of the
[07:46] map and there we have it we now have
[07:48] pretty particles working again
[07:53] yay teach me how to
[07:56] particle all right so as you guys saw we
[07:58] had a fun little um issue with our
[08:00] particles where they were not taking in
[08:03] count the Zone space and they were in
[08:05] fact taking in account the world space
[08:08] when it tried to compute where it was in
[08:10] World space so we took our world space
[08:13] and said hey we're going to compute our
[08:14] position in World space and it just
[08:16] messed up um our calculations instead it
[08:20] should have said all right here's my
[08:21] zone space now we're going to transform
[08:23] to World space and then here's our
[08:26] particle and with that we were able to
[08:28] say hey here's the camera to the
[08:30] particle position yep we could see it
[08:33] show it instead of hey here's the the
[08:35] position of the eyes to the origin of
[08:37] the map yeah that thing's far away even
[08:40] though it's right here so that was fixed
[08:42] up and now we can see our pretty little
[08:43] particles in the world and even inside
[08:46] of the ships so hope you guys enjoyed
[08:49] till next
[08:51] time this video made possible by the IC
[08:53] Stellar surveyors and subscribers like
[08:56] you
[08:59] oh
[09:03] [Music]
[09:05] [Applause]

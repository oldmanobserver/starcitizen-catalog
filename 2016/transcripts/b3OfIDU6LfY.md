# Star Citizen: Bugsmashers - Episode 38

**Video:** https://www.youtube.com/watch?v=b3OfIDU6LfY
**Date:** 2016-12-07
**Duration:** 7:49

## Transcript

[00:06] [Music]
[00:16] hey everyone welcome to bug Smashers I'm
[00:18] your host Mark aent I'm a gameplay
[00:20] programmer here at cig Los Angeles and I
[00:23] take you behind the scenes of some crazy
[00:25] bugs and funny bugs that play our game
[00:28] and it's just a lot of fun to show you
[00:30] guys what's happening so let's take a
[00:36] look box
[00:38] [Music]
[00:40] species hey everyone we're here in my
[00:42] fancy dcy test level again and I have a
[00:46] little Hornet here uh just rotating
[00:48] freely and as you can see all the
[00:50] turrets on this guy are just spazzing
[00:53] out they're just going
[00:55] bonkers and the funny thing is if um I
[00:59] actually rotate the turrets they're fine
[01:01] it's just as soon as you stop rotating
[01:04] they kind of snap back to the old
[01:06] position and they're just going crazy uh
[01:09] so what's happening well uh let's take a
[01:12] look at the code uh here we are in the
[01:15] turret code which hasn't been touched in
[01:18] quite a while and what we do is for all
[01:22] the axes you know pitch um yaah or even
[01:26] roll um we want to move uh those bones
[01:30] to try to aim towards a Target so if we
[01:32] have a point here we want the turret to
[01:34] rotate and look at it and if it's down
[01:37] here you know we want to rotate it there
[01:40] so uh we have for each of our axis a
[01:43] current angle and then we have this
[01:45] thing called the original rotation so if
[01:48] this is the original rotation and we up
[01:52] here we move this way so we basically
[01:55] start here and then from our current
[01:57] angles we move any which way we need to
[01:59] go
[02:00] so that's what this bit of code right
[02:02] here does and since we're modifying a
[02:05] joint or a location on a
[02:07] skeleton um so there's these bones on a
[02:09] skeleton and that's what you use to move
[02:12] like my arm there would be a joint here
[02:13] so I can move it up and down same thing
[02:16] on a turret there's going to be a joint
[02:17] for pitch and a joint for um yaw and so
[02:21] after we do that calculation of how much
[02:23] we want to move it uh we now have to
[02:25] tell the skeleton to move to that
[02:28] location and and this um functionality
[02:32] right here basically says uh after we're
[02:34] done animating we're going to inject
[02:38] this um
[02:40] rotation so the chir can animate you
[02:42] know deploy down you know it has
[02:44] animation maybe deploy down and then as
[02:46] it deploys um it'll play the animation
[02:48] for moving up and down and then we'll do
[02:50] our rotation uh this is some old code
[02:53] that we've used for a long time and all
[02:56] of a sudden it decided to break because
[02:59] in the back end uh for our animations we
[03:03] there was a lot of um steps to optimize
[03:06] it um buffer it so that the main thread
[03:09] could do something while the threaded
[03:11] thing could do something and then
[03:13] they're supposed to sink and in between
[03:15] that time uh this process kind of broke
[03:18] and the unfortunate thing about this guy
[03:20] is after the animation has done its
[03:23] thing on a separate uh thread we then
[03:27] modify the pose on the main thread so
[03:29] it's
[03:30] actually a little bit taxing on the
[03:32] system now there's this new thing or
[03:35] this thing that's been supported for a
[03:37] while just we haven't used it is this
[03:39] thing called animation pose and what
[03:41] this thing allows us to do is in the
[03:44] actual thread that's where we modify the
[03:47] bones we'll actually apply the rotation
[03:50] so instead of updating this old Legacy
[03:53] thing which is now broken uh we have
[03:56] this uh new thing which we could act
[04:00] upon uh here it is our our
[04:03] aim uh pose and we could directly say
[04:08] all right here's the rotation that we
[04:10] want so whenever you do the animation
[04:13] task um in the back or thread will
[04:16] assign the rotation and it will happen
[04:19] in the thread so even if this doesn't
[04:21] happen right away because maybe it's not
[04:23] visible or maybe it's you know Far Far
[04:26] Away um whenever it actually gets
[04:28] processed it will then remember the
[04:31] value it wanted and then go and process
[04:33] it so we're going to use this bad boy
[04:35] now and as you can see here is our
[04:38] actual implementation where we can
[04:40] inject position
[04:42] orientation and
[04:44] then um whenever uh the thread is
[04:47] getting ready we basically say all right
[04:50] we're going to switch over and then once
[04:53] the thread is in here we generate our
[04:56] task and compute the actual um rotation
[04:59] orientation or even both set by the
[05:02] turret or some other system so let's
[05:05] activate this guy and disable the old
[05:07] system now we do want to keep this line
[05:10] which will allow um the rotation to
[05:13] happen even if it's not visible that's
[05:15] mostly for gameplay reasons so if you
[05:17] can't see the guy behind you you still
[05:19] want to know which way he's shooting
[05:21] instead of you know shooting out the
[05:23] wrong way so this will at least Force um
[05:26] those locations to be updated all right
[05:29] so let's hit the magic recode
[05:34] button that recode is finished before we
[05:37] go in I just want to show you uh this
[05:39] little bit because the bones can be
[05:41] actually on different um characters
[05:43] because of Legacy reasons we need to
[05:45] make sure that we only inject this pose
[05:48] modifier once per frame otherwise things
[05:50] get funky anyway uh so now we're back in
[05:53] the game and I can move my turrets all
[05:56] the way around and if I let go of the
[05:57] mouse you'll see that they tend tend to
[06:00] stay in the location that they were last
[06:03] set except the top uh the turrets and
[06:06] the bottom turrets they're kinding to
[06:08] aim at the point that I last
[06:11] specified because they're trying to aim
[06:15] um where I am looking on the screen and
[06:17] as I rotate they tend to rotate as well
[06:21] but they everything fires okay and
[06:24] they're not twitching around like crazy
[06:26] everything's good to go hope you guys
[06:28] liked it so as you guys saw we had a
[06:30] little issue where the turrets were
[06:32] jiggery jagging all around and it was
[06:35] just because we're using an old outdated
[06:36] method that wasn't working with our new
[06:39] streamlined um double buffered um
[06:42] command system for animations and
[06:44] because the two systems didn't play well
[06:47] instead of retrofitting the old system
[06:49] decided to use the actual new system
[06:51] which is these things called POS
[06:53] modifiers which when those animations
[06:55] happen we can um say that these specific
[06:58] joints you know arms or these turrets
[07:02] supposed to be doing some sort of action
[07:04] or rotation and because of that now when
[07:08] everything all animates our turrets
[07:10] rotate nice and smooth they're not doing
[07:11] that crazy Jitter everything looks
[07:13] gorgeous and it just looks that much
[07:16] awesome and we're using the whole new
[07:17] system in the thread so everything works
[07:20] out getting a little bit of performance
[07:22] hope you guys enjoyed until next
[07:25] time thank you for watching so if you
[07:27] want to keep it with the latest and
[07:28] greatest and Star Citizen and the
[07:29] Squadron 42's development please follow
[07:31] us on our social media channels see you
[07:34] soon
[07:41] [Music]

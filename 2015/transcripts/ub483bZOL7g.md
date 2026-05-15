# BUGSMASHERS: Episode 12

**Video:** https://www.youtube.com/watch?v=ub483bZOL7g
**Date:** 2015-10-07
**Duration:** 9:35

## Transcript

[00:00] There's no more coffee. The coffee is
[00:03] gone. Tom, why is there no coffee? I
[00:07] need
[00:08] coffee.
[00:11] Coffee. Now for
[00:17] Miami. Bug
[00:21] smashes. Hey everyone. Uh we're here in
[00:24] a fun little test level with an upside
[00:26] down buggy. Uh, the reason is because if
[00:29] I move this little image here from
[00:32] QA, when the buggy dies, apparently its
[00:35] wheels detach from the the buggy. So,
[00:39] and it looks a little funky. So, let's
[00:41] test that right now. Hop into the
[00:45] game. Take a little
[00:48] lag and let's kill the
[00:52] [Laughter]
[00:55] buggy. Ah.
[00:57] We got to do that again cuz that was
[01:00] awesome. All right, let's kill the
[01:02] buggies. Ah, his wheels just fall
[01:04] down. Oh, that's great. Oh, we have to
[01:07] do it one more
[01:08] time. Let's do it in slow
[01:11] motion. Oh, yeah. Slow motion. Watch
[01:14] those wheels fall. So real. Such
[01:20] physics. All right, let's fix that. So,
[01:24] oh, what's happening? Well, as our
[01:27] vehicle slowly sinks down into the
[01:30] Nether, uh, when a vehicle dies, that
[01:33] little piece that's slowly sinking into
[01:35] the ground, uh, turns into a debris
[01:38] item, and all the geometry is supposed
[01:40] to go with that, and then the vehicle
[01:41] could die. However, what we're seeing
[01:43] here is the vehicle's still sticking
[01:46] around with geometry, and the little
[01:48] debris piece is not getting the wheels
[01:50] or the
[01:52] suspension. So, let's fix that.
[01:55] Uh, so prior to
[01:58] this I
[02:00] did quite Oh, no things popping up. You
[02:04] can't see it, but I can. So many things.
[02:06] All right, there we go. So, before I
[02:10] came here, I had to do a little bit of
[02:12] reformatting
[02:14] of this little uh vehicle part. Uh
[02:18] basically if I go into my little subp
[02:20] part I reformatted uh this little in it
[02:25] geometry so that we could swap geometry
[02:28] from this particular part to a dam
[02:32] damage part and I needed a way to reset
[02:36] the geometry on the physics part or on
[02:39] the vehicle part so that it could have
[02:41] nothing there while in the breeze we
[02:42] have something. So I basically
[02:44] reformatted this so that I can now allow
[02:47] a null geometry and I went through the
[02:50] correct path. So if I have something I
[02:52] load it into the correct entity slot
[02:54] otherwise I free it. And then I set up
[02:57] the correct transforms and particular
[03:00] vehicle stuff that you would need. And
[03:03] so now that we have all that fun stuff
[03:06] um anytime we want to detach from the
[03:08] vehicle we now want to remove our
[03:11] geometry.
[03:13] So, we'll do that a little bit. And now
[03:15] we have the ability to remove bits from
[03:18] the um the vehicle. We now got to move
[03:22] that piece onto the brief piece. So, and
[03:26] this little guy um I should go right
[03:29] here. Where is it?
[03:32] So when our part is actually going to
[03:34] get detached,
[03:36] uh we call this function which gathers
[03:40] all the geometry from the part and any
[03:42] associated extra geometry that it knows
[03:45] of. Also gets all the items and any
[03:49] attached geometry that we add in like
[03:52] the landing gear. And as you can see
[03:56] here, here it is.
[03:59] If currently we only take geometry that
[04:02] has um we call it a a skeleton or a CGA
[04:07] where you have one piece of uh you have
[04:10] the skeleton it has multiple geometry
[04:12] bits and that's what this little uh what
[04:16] do you call it stat object is each
[04:18] little bone has these little bits of
[04:21] geometry. Unfortunately the wheels and
[04:23] suspension just have geometry. they
[04:25] don't have these skins or these um
[04:28] skeletons. They actually are just pieces
[04:31] of geometry that go into that slot. So,
[04:34] we have to allow support
[04:37] uh for just geometry into those areas.
[04:40] So, we're going to get rid of this check
[04:42] to see if we have a character, which we
[04:45] don't.
[04:47] And we're going to run a bit of extra
[04:50] code that I have right here that says,
[04:52] hey, if we are um, you know, a
[04:54] character, we're going to do as we did
[04:56] before. But if we're not a character,
[05:00] we're just some piece of geometry. We're
[05:03] going to still add it to the list, but
[05:05] we're going to let um the higher up part
[05:09] know that we're coming from, you know,
[05:11] no, not from a skeleton. So we're going
[05:13] to set our bone index to negative one
[05:16] saying hey we're free range geometry we
[05:18] don't come from this particular
[05:20] skeleton. So now that we built that list
[05:23] up we got to handle the case that we are
[05:27] not uh you know part of that skeleton.
[05:30] So we go back down to
[05:33] here and here we are. So now we go
[05:37] through our list of geometry and um the
[05:40] OB since we're going through each of the
[05:41] bones um we're going to take all the
[05:43] geometry from those parts and snap it
[05:46] into the degrees piece. Um but we got to
[05:51] make sure that um if this part is part
[05:56] of a skeleton that and we had that ID,
[05:59] we need to clean it up and we got to
[06:01] make sure that we have the ID now that
[06:03] we could have, you know, one So, this
[06:06] will protect this area of code. And
[06:09] let's see what we get
[06:11] now. Building, building, building. Get
[06:14] those buildings.
[06:17] Building
[06:18] and
[06:21] action. Let's see. Wait for the recode
[06:24] to pop
[06:29] up. All right. So, we're back in our
[06:32] fancy dancy level. Let's see what
[06:33] happens when we kill the vehicle. So,
[06:36] turn it
[06:37] on console. Kill it. Hey, the wheels are
[06:40] with it.
[06:42] Yay. Let's try one more
[06:44] time for
[06:46] science.
[06:48] Woo! All right, let's check out physics.
[06:52] Oh,
[06:53] no. All the fancy wheel stuff is at the
[06:57] center of the debris item. So, or
[07:00] physics wheels are all in the center.
[07:02] All right, let's fix that real quick.
[07:05] So, lucky for you, I have code prepared
[07:07] for you. Um, what's happening is we're
[07:10] moving this geometry into a particular
[07:13] slot, but this phys physics doesn't
[07:15] still thinks it's at the this particular
[07:18] origin, and it doesn't have the offset
[07:20] that it would that if it was on like a a
[07:23] skele, you know, actual origin of the
[07:26] skeleton position. So, we need to move
[07:29] physics to the correct location just
[07:31] like where the geometry bit is. And
[07:33] that's what we're going to do here. We
[07:35] only kn need to do it for uh these subp
[07:37] parts because they're just those extra
[07:40] geometry that don't have those
[07:42] offsets. So, we're going to save this.
[07:46] We're going to basically get the offset
[07:49] that we already have, tell Physics about
[07:51] it, and the renderer knows about it so
[07:54] that we're all in happy golucky same
[07:57] spot. Let's compile that. See how we
[08:05] go. This guy has awesome
[08:09] physics. Look at that. Oh yeah, physics.
[08:17] There goes recode. So, let's kill the
[08:20] vehicle one more
[08:21] time.
[08:24] Ha. All the wheels and suspension
[08:27] physics are all the correct spot. So,
[08:29] now our debris item is actual
[08:32] debris.
[08:36] Excellent. Woo.
[08:44] Hope you guys enjoyed. Hope you guys
[08:46] enjoyed the buggies bug. That thing
[08:49] always loves to buggy around. Haha, pun
[08:51] intended, I guess. I don't know. Hope
[08:54] you guys enjoyed that bug of crazy
[08:56] physics. Um, we'll have some more
[08:58] probably in the future. The buggy. That
[09:00] seems to be the one vehicle that always
[09:02] escapes
[09:04] our clutches. Well, see you guys next
[09:08] time and hope you enjoyed it.
[09:12] This video made possible by the ICC
[09:14] Stellar Surveyors and subscribers like
[09:16] you.

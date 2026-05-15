# Squadron 42: Behind the Scenes - Character Pipeline

**Video:** https://www.youtube.com/watch?v=y3-algllIKc
**Date:** 2015-11-19
**Duration:** 4:50

## Transcript

[00:08] There's lots of pipelines in something
[00:10] considered a character pipeline because
[00:12] it spans across different disciplines.
[00:14] And generally what a pipeline means,
[00:15] it's how to get from one location to
[00:18] another location. So in case of a
[00:19] character, the overall character
[00:21] pipeline is how to start from no
[00:24] character to an idea to the final
[00:26] character actually in the game. figuring
[00:28] out exactly who we go to at what time,
[00:31] what task has to be done by a certain
[00:33] guy, what's going to block other things
[00:34] from getting done, and in the end, do we
[00:37] get all the content that we need to be
[00:38] able to uh technically do what we want
[00:40] to do. The first step is, you know, you
[00:42] have the actors in the studios and
[00:44] they're kind of capturing all their
[00:46] movements, facial expressions,
[00:48] everything, their acting performances to
[00:50] get all the data that we need to provide
[00:52] that information to the character and
[00:54] the skeleton to kind of bring these
[00:56] characters to life once we actually get
[00:57] the game object. The UK's role within
[00:59] this pipeline is really on the animation
[01:01] front. Uh we've got a gentleman by the
[01:03] name of John Jones who works out in the
[01:04] UK. He corresponds directly with Cubic
[01:06] as well as three lateral to receive all
[01:08] that data in. For example, with Mark
[01:10] Hamill's scan set, uh, we'd run through
[01:13] the 87 poses, and it breaks down the
[01:16] face into every minute muscle movement,
[01:19] break down the smile into how it pulls
[01:21] the muscles in every direction. And that
[01:23] enables the guys in Serbia to recreate
[01:26] that movement on the head rig, which
[01:28] means we can pretty much get a onetoone
[01:30] between the real Mark Campbell and the
[01:33] face rig.
[01:33] When there's an animation that comes in,
[01:35] he will always review it. Um, and then
[01:37] if there's any changes that he needs to
[01:38] make, he'll make the change, then export
[01:40] that into engine, and then, uh, it's up
[01:42] to myself or Forest to review it.
[01:43] Through that data, we kind of build the
[01:45] 3D mesh that's very high and very dense.
[01:48] And then we basically have a basic
[01:51] topology that we use for all of our
[01:53] heads, which is our edge loops, our vert
[01:55] counts, our face sizes. And then we have
[01:57] that in a way morph to these high-end 3D
[02:01] scans. And that automatically maps all
[02:04] of your surface area for all your faces
[02:07] to the 3D data.
[02:09] But then once it's actually in, then
[02:11] that's going to be up to Steven Bender,
[02:12] uh, the animation director, to make sure
[02:14] that it all looks as it should. And I
[02:16] work with the animators in developing
[02:18] those motion capture animations so that
[02:21] they work well in the game. They're
[02:23] fluid. They have a good aesthetic value
[02:27] to it. And then I also work with the
[02:29] designers in implementing that as well
[02:32] as the programmers into the final
[02:33] product.
[02:34] And then all of a sudden you have this
[02:35] head that perfectly matches, you know,
[02:37] an actor. Once you have that, we can
[02:39] start actually putting our skeleton on
[02:41] there. So, one of the unique things we
[02:43] do is we use a musclebased system
[02:45] underneath the skin. So, we add a bunch
[02:48] of joints and muscles that deform the
[02:50] skin correctly as if it had real
[02:51] muscles. So, game engines can't really
[02:54] handle muscles, but we use some
[02:55] proprietary tricks that make it work in
[02:57] the engine. Start with the movements.
[02:59] You go to the mesh and then you go back,
[03:01] grab that movement data, add it to the
[03:03] skeleton. And now as the skeleton moves,
[03:06] you apply all that uh movement data that
[03:08] we got or, you know, mocap so to speak,
[03:10] and uh bring these this topology that's
[03:13] now been morphed to the character's head
[03:15] uh kind of to life. And now you can
[03:16] start seeing them move cuz we got the
[03:18] skeletons on there and so on. Once we
[03:20] have that, you know, it's time to take
[03:22] this kind of gray head and then actually
[03:24] get it into the game to be able to start
[03:26] applying our diffuse maps, our normal
[03:29] maps, gloss speculars, subsurface
[03:32] scatters, you know, kind of these maps
[03:34] that are generated from these character
[03:36] faces through a series of photographs
[03:38] with each its own specific purpose.
[03:41] We're not going for a pre-rendered
[03:42] approach like lots of games actually
[03:45] pre-render their scenes with very high
[03:47] bit rate. So you don't see that they're
[03:48] pre-rendered, but they are pre-rendered.
[03:50] We want to try to get it in real time,
[03:52] but our facial structure is so complex.
[03:54] It's basically cutting edge that it
[03:55] means like we need to really optimize in
[03:58] a clever way. So we can actually have, I
[04:00] don't know, four, five, six, seven
[04:01] characters on the bridge in highest
[04:03] fidelity talking to each other while the
[04:05] player's present in real time.
[04:06] As we build the pipeline, uh, the faster
[04:09] it's getting. You have your animation
[04:10] pipeline, you have your modeling
[04:12] pipeline, you have your conceptual
[04:14] pipeline, uh we have our facial scan
[04:17] data pipeline, um we have our hair
[04:20] pipeline. So there's all these different
[04:22] pipes that kind of build the system that
[04:24] we use to actually get from the very
[04:26] beginning to the very end.
[04:33] [Music]

# Squadron 42: Facial Animation Technology

**Video:** https://www.youtube.com/watch?v=G1eLecTsTSw
**Date:** 2015-10-10
**Duration:** 6:44

## Transcript

[00:08] My name is Sean Tracy and I'm the
[00:09] content technical director for Star
[00:11] Citizen. We've been working on our
[00:12] characters and more specifically the
[00:14] facial aspect of this project for quite
[00:16] some time. So we're excited to finally
[00:18] reveal this to you. Here you can see
[00:20] Gary Oldman, Admiral Bishop, making his
[00:22] speech to the Senate. In terms of
[00:24] technology, we've built upon the already
[00:26] robust systems provided by the CryEngine
[00:28] and have taken them a step further to
[00:30] really push the boundaries of what's
[00:32] possible in real time on PC. The high
[00:34] fidelity work that you're seeing on the
[00:35] facial skeleton, rig, and asset was done
[00:38] by 3 Lateral and really makes all of
[00:40] this possible. The animations you're
[00:41] seeing are made with an incredible
[00:43] attention to detail by Cubic Motion. My
[00:45] name is Vladimir Mastilovic and I'm
[00:47] leading 3 Lateral Studio.
[00:48] We start our process with high
[00:50] resolution scan data.
[00:51] These are scans of individually
[00:53] activated facial muscles
[00:55] and basically each scan is consisted of
[00:57] several million triangles.
[01:00] This is a data set that cannot go
[01:02] efficiently in the engine.
[01:04] And each scan is a snapshot in time
[01:07] and it doesn't have any correlation with
[01:10] any other scan.
[01:12] This is why we have written a tool that
[01:14] will analyze the surface of the skin
[01:16] and will find correspondences between
[01:18] each scan.
[01:20] Through this process we're finding
[01:21] hundreds of thousands of correspondence
[01:23] points between each scan pair
[01:26] and this enables us
[01:28] to produce blend shapes on any custom
[01:30] topology for these scans.
[01:33] Scans are then handled by our artists
[01:35] who are examining for any unwanted
[01:37] motion
[01:38] and they are putting it in context
[01:42] and modeling a constellation of hundreds
[01:44] of shapes that will then be used to
[01:46] produce a facial rig
[01:48] which is essentially a digital puppet of
[01:50] the character which can then be animated
[01:52] and transferred to a game engine as an
[01:54] optimized data set.
[01:56] When it comes to photoreal characters,
[01:58] everything is important.
[01:59] Not only that character itself needs to
[02:01] look correct in terms of its shape and
[02:03] its texture, it also needs to look
[02:04] correct when it's animated. This also
[02:06] needs to extend to micro level so that
[02:08] skin stretching and the pore stretching,
[02:10] the blood flow in the skin, and even the
[02:12] tiny layer of fluid between the eyelid
[02:14] and the eyeball behaves correctly so
[02:16] that it maintains the illusion of a live
[02:18] character in the scene.
[02:20] Essential for doing this on a such high
[02:22] volume project is not only having large
[02:24] team, but also having proper production
[02:26] tools.
[02:27] Essential also to solving this problem
[02:30] are our production partners Cubic
[02:31] Motion. At Cubic Motion, we're
[02:33] responsible for accurately recreating
[02:35] the actor's performances using the face
[02:38] rig designed by 3 Lateral. Stage one of
[02:41] the Cubic Motion face animation process
[02:43] involves analyzing the actor's
[02:45] performance. So that means tracking
[02:47] hundreds of points on the face covering
[02:49] all the main facial features such as
[02:51] eyes, inner lips, teeth, and skin
[02:54] creases.
[02:55] In addition to that, we capture texture
[02:58] information from the video and that
[03:00] gives us this extra level of fidelity in
[03:02] the data. After we have analyzed the
[03:04] performance, we move on to stage two in
[03:07] the process and this means solving the
[03:09] data to the CG character's face rig.
[03:12] Every rig control has its own measure
[03:14] within the solver and each of these
[03:16] measures looks at very specific regions
[03:19] of the face and how those regions move
[03:21] relative to another region. We can
[03:23] combine multiple measures and what this
[03:26] means is that we can then accurately
[03:27] recreate realistic facial motion like
[03:30] when you speak or when you emote. So
[03:32] let's take two examples of the solver in
[03:34] action. Firstly, we've got a funneling
[03:36] mouth shape and this is the shape is
[03:38] essential for face animation and lip
[03:41] sync. A second example would be the
[03:44] nuance that we can capture. So if you
[03:46] look in this demo video, what you can
[03:48] see
[03:49] uh very small eye twitches that are
[03:51] happening under the actor's skin almost
[03:54] and
[03:55] you can see then inside of Maya that the
[03:57] solver's captured these and transferred
[03:59] the data across to the relevant control
[04:01] within the face rig.
[04:03] Once we have solved the data to all of
[04:05] the facial rig controls, we can then
[04:07] finalize the animation and then pass
[04:10] that data across to Cloud Imperium and
[04:12] they can integrate it into the game
[04:14] engine. The faces in Star Citizen
[04:16] utilize a combination of both blend
[04:18] shapes and bones to combine all the
[04:20] techniques available to us for real-time
[04:21] rendering. If I enable a debug overlay,
[04:24] you'll see a color-coded wireframe that
[04:26] indicates how many bone influences there
[04:28] are per vert. This is important as it
[04:30] gives us smoother and more realistic
[04:31] deformation. Recent updates to our
[04:33] technology allow us to compute this on
[04:35] the GPU which means better performance
[04:38] and even more characters using it. At
[04:40] the same time, blend shapes are driven
[04:41] by the animation. Bishop uses over 400
[04:44] of these blend shapes to accurately
[04:46] convey the actor's performance. We also
[04:48] use these shapes to apply the tangents
[04:50] to the mesh meaning the shading is
[04:51] updated accurately as these shapes are
[04:53] blended in between. One more obvious
[04:55] addition is comprehensive support for
[04:57] animated diffuse, also called blood flow
[04:59] maps, as well as animated wrinkles.
[05:02] When used together, this yields a whole
[05:04] new level of facial performance. You can
[05:06] see when I toggle the feature, the
[05:07] change is dramatic. There are even more
[05:09] subtle uses such as making the lips
[05:11] lighter when they stretch or darker when
[05:13] they purse. Where previous games on the
[05:15] CryEngine used a single wrinkle map
[05:17] texture, we have extended this to use
[05:19] one, two, or even three wrinkle and
[05:22] blood flow maps.
[05:23] This ends up giving us 44 different
[05:25] areas on the face to blend in diffuse
[05:27] and normals making unique wrinkles and
[05:29] expressions as accurate as possible. You
[05:31] can get an idea of the complexity of the
[05:33] system through this debug view where
[05:35] white highlights indicate the blend
[05:37] areas and their relative intensities.
[05:39] We've made other subtle improvements to
[05:41] add a bit more life to the eyes. One
[05:43] such improvement is dynamic pupil
[05:45] adaption which causes the pupils to
[05:47] actually react to the changes in
[05:49] lighting.
[05:51] The animation for an asset of such
[05:52] quality can be heavy.
[05:54] Animating 200 bones and over 400 blend
[05:57] shape creates an enormous amount of
[05:58] data.
[05:59] We compress this on the way into the
[06:01] engine down from hundreds of megabytes
[06:03] to just a few.
[06:05] We do this compression very carefully as
[06:07] Cubic Motion has provided highly
[06:09] accurate and specific animation data of
[06:11] the actor's performance.
[06:13] This performance must be retained when
[06:15] coming into the engine.
[06:17] The facial pipeline within Star Citizen
[06:19] is well on its way and as you can see
[06:20] the characters push beyond where other
[06:22] projects and technologies have gone
[06:24] before. We are committed to delivering
[06:26] the most lifelike characters possible to
[06:28] enhance your immersion in the Star
[06:30] Citizen universe.

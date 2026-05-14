# STAR CITIZEN: CitizenCon 2947 - Graphics and Tech Development for Star Engine

**Video:** https://www.youtube.com/watch?v=_-OoMySD66E
**Date:** 2017-10-27
**Duration:** 47:57

## Transcript

[00:19] welcome to our tech and graphics panel
[00:24] the visual bar as you guys know that
[00:27] we've set for star citizen is incredibly
[00:29] incredibly incredibly high takes a lot
[00:32] of unique technology to actually get us
[00:34] there next presentation is put together
[00:38] in a cool way they're gonna take you
[00:39] step-by-step through a frame and through
[00:42] some of the techniques that we use to
[00:45] actually achieve that visual quality and
[00:47] they'll also give a small glimpse into
[00:50] some of our future plans in regarding
[00:51] the tech so let me introduce mr. Ali
[00:55] Brown he's the director of graphics
[00:57] engineering from the UK office thanks
[01:02] man
[01:08] hey guys so we've got a few things to go
[01:11] through today the first thing I'm going
[01:13] to do is do a bit of a deep dive and to
[01:15] looking at all of the things we do and
[01:17] to make it one frame of star citizen and
[01:19] as you all know we use lumberyard as our
[01:22] base engine but we have some different
[01:24] requirements to lumberyard so I'm gonna
[01:26] particularly point out the things that
[01:27] we've had to extend and build on top of
[01:29] lumberyard after that I'll go through
[01:31] some of the recent updates we've put
[01:33] into the free point not be in your hand
[01:35] soon and then touch on some of the
[01:37] graphics roadmap that's coming up dive
[01:40] into some CPU parallelism which goes
[01:42] back to what we Chris was talking about
[01:44] with Intel earlier and then talk about
[01:46] some of the mid to long term goals we
[01:48] have in the graphics and the tech
[01:49] department so just to start you off I'm
[01:52] just going to give you a quick video to
[01:53] show you all the breakdown of one frame
[01:56] and then I'll go through and explain
[01:57] what is you're seeing on screen now
[02:09] [Music]
[02:26] [Music]
[02:44] [Music]
[02:46] so then it's quite a lot to go through
[02:49] there so I'll try and get through all of
[02:50] it in time so the first thing we do is
[02:52] not too exciting but we because we have
[02:55] this these procedural planets now and
[02:56] all this procedural content we can't
[02:58] possibly bake the lighting for all of
[02:59] these locations so our first job is to
[03:02] bake an environment probe for that
[03:03] location that you are currently stood at
[03:05] on the planet or on a moon or even in
[03:07] space we still have to do this so this
[03:10] is a render of six different angles of
[03:12] the local environment and then we have
[03:14] to process this and blur this and
[03:16] compress it all on the fly and this all
[03:19] happens at the start of the frame now
[03:20] this is quite complicated takes quite a
[03:22] while so we split the work up so this
[03:25] one texture you're seeing here actually
[03:27] is spread over 20 frames to process this
[03:29] wing and so every 20 or so frames we can
[03:32] update the localized lighting to give
[03:33] you a flexions formula ships or nearby
[03:36] objects after we've done that next job
[03:39] is to do the shadows now what you're
[03:41] seeing here is what we call our shadow
[03:43] pool which looks a bit weird but it's an
[03:45] it's 8 K texture and it's where we pack
[03:48] all of our shadows in so here there's
[03:50] about six large shadows then there's a
[03:52] whole bunch of little small ones Crandon
[03:54] up there so this is something we've
[03:57] extended from lumberyard we needed quite
[04:00] a lot of variation in our quality for
[04:02] our shadows sometimes we need 4k shadows
[04:05] for cinematics especially for squadron
[04:07] or something like that or any type of
[04:08] close up conversation and then other
[04:11] times we're looking at Levski or
[04:12] something where there might be hundreds
[04:13] of lights and we might need 30-40
[04:15] shadows at once so this system we have
[04:19] allows us to very to get the high
[04:21] quality when we need it and the spread
[04:23] of lots of lights when we need it okay
[04:28] now we onto the actual frame so the
[04:30] first thing we do just for a few
[04:31] optimization is to render out everything
[04:33] that we think is going to block
[04:35] something else in the scene we want to
[04:36] keep the cost down as much as possible
[04:38] so we have to try and pick what we think
[04:41] is a good occluder so we find the big
[04:43] meshes the ones without too many
[04:44] vertices one so close to the camera we
[04:47] do a cheap shader and all of them get
[04:49] rendered first so that's what you see in
[04:50] here and then this
[04:54] at the end of the frame we also read
[04:56] this back onto the CPU and we actually
[04:58] use that to do an extra set of culling
[05:01] on the CPU spread across multiple cores
[05:03] where we can avoid a mesh even getting
[05:06] to the GPU of the next frame which is
[05:07] awfully best optimizations not to do any
[05:10] work in the first place so that's what
[05:11] we aim for but this also is gets used on
[05:14] the GPU to hide all the meshes of behind
[05:18] after that we start about four material
[05:21] rendering now this is just a tiny subset
[05:23] of the textures we use on one material
[05:25] but we can have like up to 15 or 20
[05:28] textures on one material so this is Stan
[05:31] from the left its albedo just that color
[05:34] basically a normal Maps smoothness map a
[05:37] blend map and a height map and you
[05:40] typically have this set of textures
[05:41] twice before on one material but some of
[05:45] our materials have four more layers and
[05:47] the planet can have up to 12 layers so
[05:50] now we aren't actually rendering the
[05:52] scene so we don't actually render color
[05:54] we actually render into what we call a G
[05:56] buffer in what we call the Z pass which
[05:59] is where we write out material
[06:00] information like in this case normals
[06:03] which means the direction that the
[06:05] surface is facing so as well looks a bit
[06:07] abstract and then we actually also
[06:10] render this in multiple stages so we
[06:12] start off with the planet geometry which
[06:13] is what you see in here put in all of
[06:16] our instance objects which here is walks
[06:17] and some asteroids in the distance then
[06:20] it's all of our static objects and then
[06:23] our dynamic objects in our characters
[06:25] and then also our decals as well and the
[06:28] orderings really important so we can
[06:30] composite everything correctly for
[06:31] example the decals might be like mud or
[06:34] something you'd want them to apply to
[06:35] your static geometry but not to apply to
[06:37] a dynamic geometry they have a different
[06:39] system boundary now okay after that we
[06:43] this re at the same time we render into
[06:47] about between 3 and 6 textures at once
[06:49] so this is the next texture we're
[06:51] writing out which is the albedo which is
[06:53] fancy word for color
[06:54] we've got smoothness which is how do
[06:57] opposite of roughness does how rougher
[06:59] surfaces the white areas of the
[07:01] smoothest we've got reflectivity which
[07:04] is
[07:05] based on the index of refraction or our
[07:07] harder surfaces so all of our metals
[07:10] will appear bright white here and all of
[07:12] our nonmetals will appear a dark shade
[07:14] of gray here is the hue of the surface
[07:18] it's not showing too much interesting
[07:20] here but it's if you had like a gold or
[07:23] brass something that has a particularly
[07:24] colored reflection it would show up in
[07:25] this one we mask out some special
[07:29] materials so you can see the guy's face
[07:30] it's got a mask on it and we've also got
[07:32] the planet terrain we do some special
[07:34] effects on the surface of the planet so
[07:36] that needs a special mask and then a
[07:39] bunch of extra material properties now
[07:41] these can vary per material so on the
[07:43] face it tells us how much subsurface
[07:45] scattering to do to simulate the skin
[07:47] and then we use that this buffer to sort
[07:49] of a miscellaneous data we might need
[07:51] for the whatever material we're
[07:52] currently rendering okay now onto motion
[07:56] vectors and this is what we use for our
[07:58] motion blur and also our anti-aliasing
[08:00] technique it's not too much going on
[08:02] here it was a fairly static scene so the
[08:04] guy is off he got some if there's any
[08:07] variation in him he's pretty flat at the
[08:09] moment and it's the planet in the
[08:11] background which also is a dynamic
[08:13] object obviously so that's got some
[08:16] motion vectors but the rest of the
[08:17] screen is just black which is because we
[08:19] know that we're stood on the planet and
[08:21] we know that the static geometry on the
[08:22] planet must be moving just at the same
[08:24] space let's paint paste so we don't
[08:27] actually need to write anything out for
[08:28] them and that's a bit of an optimization
[08:29] and the last texture is just a missive
[08:33] anything that glows or hesitant bright
[08:35] surface so we've got a some headlights
[08:37] on the on the helmet and we've got a few
[08:40] things on the speeder bike and then
[08:42] we've got the Sun okay after that pass
[08:45] we start doing all of our first stage of
[08:48] post effects we have two stages of post
[08:49] face and for the first one the first
[08:51] effect is to calculate the atmosphere
[08:53] this looks a bit abstract because it's
[08:55] not actually the colour of the
[08:56] atmosphere but it's just a free
[08:57] computation to work out how we will do
[09:00] the atmosphere later and apply a later
[09:01] stage this is something that's done by
[09:03] the Frankfurt office the atmosphere and
[09:05] the result seemed to gamer grade it's
[09:07] it's great to be able to fly up the
[09:08] atmosphere and see from every angle all
[09:10] the different colors you get after this
[09:13] we've got the shadows so we saw the
[09:16] shadow map earlier
[09:17] is a view from each light of what the
[09:20] scene looks like from their perspective
[09:22] now we have to apply them to the screen
[09:23] so we actually render five different
[09:26] shadow maps for the Sun this is the
[09:28] first one and as we go further out into
[09:31] the scene we lay up more and more
[09:33] distant but low resolution shadows and
[09:35] then next stage is we have two composite
[09:39] all of the other point lights in the
[09:40] scene so this is the Sun shadow and this
[09:42] scenes got a couple of extra lights in
[09:43] it but we can have up to twelve shadows
[09:46] all layered on top of each pixel so
[09:48] twelve shadows per pixel and as many
[09:50] shadows on the scene as we want after
[09:54] that we've got the occlusion so this is
[09:57] something that the Frankfort team have
[09:58] just upgraded so the way we calculate
[10:01] our occlusion is if you imagine for
[10:03] every pixel you had like a small cone
[10:05] that was sticking out from the surface
[10:07] we try and work out which direction it
[10:09] would point if it was going to be
[10:11] pointed in the direction of least
[10:12] occlusion so in the sense of this table
[10:14] if we point straight up but say in the
[10:16] corner here if we point in diagonally
[10:18] and this is a visualization of that
[10:20] direction you'll notice it's bidding
[10:23] noisy and patchy in places and have some
[10:25] weird artifacts so we do a smoothing
[10:28] pass to go get rid of all that but
[10:30] that's basically there is an
[10:31] optimization we can't afford to do two
[10:33] full occlusion calculations at every
[10:35] single pixel so we type of mix and match
[10:37] each pixel there's a slightly different
[10:39] calculation and once we blow them all
[10:40] together we get the correct result this
[10:43] is another part of that this is rather
[10:45] than the direction of the cone I was
[10:46] talking about its how wide the cone
[10:48] would be so from this table we've got
[10:50] 180 degrees of included where I say in a
[10:53] corner you have 90 degrees of occlusion
[10:55] and then in a crevasse you would have
[10:56] even less so it's the same thing here we
[10:59] pass moving pass to get the quality
[11:01] higher okay now onto some of our
[11:05] lighting so this is the first stage of
[11:07] our lighting this is our screen space
[11:09] reflections most games do these effects
[11:11] now so the fairly standard at this point
[11:14] there's not a huge amount of reflective
[11:16] surfaces on here because it's on the
[11:17] planet there's actually just a mirror
[11:19] just out of shot below the guys foot
[11:21] which we'll see later a little bit on
[11:23] the top of the spaceship as well we do
[11:26] these by tracing little steps across in
[11:28] screen space to try and find something
[11:30] that looks like
[11:30] it might have reflected from a surface
[11:32] and we can't rely on it too much because
[11:35] obviously it's based on what you have on
[11:37] screen so anything that off-screen we
[11:40] can't detect and we have to use other
[11:41] techniques for them okay so now we're
[11:45] starting to look like a bit more of a
[11:46] game so this is our take surface
[11:49] lighting pass and this is a hugely
[11:51] complicated shader that we spend a lot
[11:53] of our time on and it combines
[11:54] everything you've seen up until this
[11:56] point into this one image so that's our
[11:59] environment probe shadow mask z-pass all
[12:02] their material properties screen space
[12:04] reflections the occlusion that's all
[12:07] applied here in one giant shader so this
[12:10] is something that has been extended
[12:12] quite a bit from the lumberyards
[12:13] implementation we have a bunch of new
[12:15] things like area lights or rectangular
[12:17] area lights and a bunch of other
[12:19] features that lumberyard didn't come
[12:21] with though we felt a really important
[12:22] the area lights for example is something
[12:24] our artists requiring for because in a
[12:27] sci-fi environment it just is totally
[12:29] typical to have like those long
[12:31] stretched aerial hair lights everywhere
[12:33] and one Fingal notice is the guy's face
[12:37] is looking a little bit odd the reason
[12:39] for that is we do something special with
[12:41] the face for a subsurface scattering to
[12:43] simulate how the light enters your pores
[12:45] and then is scattered through the blood
[12:47] and your veins
[12:48] so at the moment we're only seeing the
[12:50] reflections from the face we haven't
[12:51] actually got the the main lighting and
[12:54] this is the a separate path to do this
[12:57] is the incoming light to the guy's face
[12:59] and then we do this simulation a screen
[13:02] space simulation of the subsurface
[13:03] scattering so once we've done that
[13:05] simulation which is hard to visualize
[13:07] here but once we've done it we composite
[13:09] it back now we get to the final lighting
[13:12] result for the epic scene so we're
[13:14] looking pretty good at the movement
[13:16] you'll notice the colors are a little
[13:17] bit odd and that's because this image is
[13:19] still in HDR space so the white so
[13:22] extremely bright and the darks are way
[13:24] too crisp and dark so we need to turn
[13:28] that into a low dynamic range color
[13:31] space later on
[13:34] so that's comes later though so first
[13:37] we've got our star applying all of our
[13:38] transparencies so the first transparency
[13:41] we have is the fog system so this came
[13:44] from lumberyard the base implementation
[13:46] it was a really powerful effect our
[13:48] artists were absolutely over the moon
[13:50] when we got this thing in so this is a
[13:53] bit of a weird visualization but it's
[13:55] showing you top-down type of what the
[13:57] fog looks like for one slice of the fog
[14:00] so it's actually a voxel simulation that
[14:03] one's in a certain distance a fixed
[14:05] distance from the camera
[14:07] and you can see lab of like the blocky
[14:08] cubes in here you don't actually see
[14:11] this cube be like problem from your
[14:13] perspective because if you imagine where
[14:15] at the bottom of this frame looking up
[14:16] it's type of the blockiness is in the
[14:18] depth so you don't really perceive it
[14:20] from the camera so the next stage is to
[14:24] light that so this is injecting the
[14:26] light into that and you can start to see
[14:28] some some shadows appearing in it and
[14:30] some shape appearing over near that bike
[14:32] and then we apply it onto the screen
[14:35] it's a bit difficult to see at the
[14:37] moment it's all quite dark but you can
[14:39] see the haziness
[14:39] and the glowing around that there should
[14:42] be a slight glow here but we'll see this
[14:44] a bit more later on okay
[14:47] now we start layering on our
[14:48] transparencies so we've got you know
[14:50] I've got these rings around the planet
[14:52] we've got particles bring them in one at
[14:55] a time we've got the visor on the glass
[15:00] okay and then once we've got all the
[15:03] transparency don't now we need to enter
[15:05] our second phase of doing the post
[15:07] effects to try and bring the quality to
[15:09] the final image quality and sort out
[15:11] these weird colors we've got so the
[15:14] first stage of this is our optic system
[15:17] so we're quite proud of this this is it
[15:20] looks really great it's something we
[15:22] implemented early last year I believe
[15:24] and we had it on one of the ATVs so you
[15:26] might have always seen it but I'll go a
[15:27] bit bit more into details here what's
[15:30] going on
[15:30] so optics were really important for us
[15:33] because two reasons one we have well
[15:37] it's a sci-fi game and everyone knows
[15:38] that we have liked you know these JJ
[15:40] Abrams likes Isles flares everywhere and
[15:42] you know that the contrast in space when
[15:45] you'll still say on a moon which might
[15:46] be brightly lit but there's no
[15:48] atmosphere and it's pitch-black above
[15:50] you the contrast is just enormous
[15:51] between the brightest and darkest area
[15:53] and this is something we wanted to
[15:54] simulate properly we didn't want to fake
[15:56] it or you know try and crush the rains
[15:59] like you might typically do in a game
[16:00] order to keep the full dynamic range
[16:01] almost as high as the eye actually
[16:03] perceives which is a crazy large range
[16:05] but when almost there
[16:07] so the first state of that is we start
[16:10] down sampling the image to try and build
[16:12] these different we call them it Maps
[16:14] smaller versions of the image and the
[16:16] reason we do that is for performance we
[16:18] want to be able to say blur or stretch
[16:21] like say that the Sun might want to
[16:22] produce a flare on the opposite side of
[16:24] the screen and if we need to do such a
[16:26] large effect we need to run it on a low
[16:28] resolution so there doesn't your
[16:29] GPU so here we start making blockier and
[16:34] blockier versions and we really go down
[16:36] to a a really tiny image the bottom ones
[16:38] like 16 pixels wide or something
[16:41] okay and now we've got many images we
[16:43] start doing the fun stuff so the first
[16:45] one is the JJ Abrams effect so we go
[16:51] horizontal and then we you'll see the
[16:53] last one this is what it looks like just
[16:55] stretched but it looks a bit weird so
[16:57] once we level that image and a darken it
[16:59] a little bit then we get this nice
[17:01] horizontal streak well subject to your
[17:05] personal views on JJ Abrams and then
[17:08] next stage is to do the type of lens
[17:11] flares these are a bit of a whaler like
[17:14] these are physically based we have four
[17:16] different type of lens distortions we
[17:18] approximate or simulate and the artist
[17:22] can choose how many each type of lens
[17:25] distortion they want so they can say
[17:26] they want ten elements on the screen and
[17:28] this one should have you know twenty
[17:29] percent of this distortion etc and it's
[17:32] quite sophisticated so they can really
[17:34] build a different palette of lens flares
[17:36] so this one is that you can see the
[17:38] summers that go into a weird shape and
[17:40] it's got this these coloured hues around
[17:42] the edge of it which is a chromatic
[17:44] aberration which happens on but the
[17:46] cheaper the lens the more you get this
[17:48] once we darken it down it starts to look
[17:51] a little bit more interesting still a
[17:52] bit weird at this point we do a slight
[17:54] blur to soften it out and also to
[17:57] approximate the artifacts in the lens
[18:00] and then we repeat this for a bunch of
[18:02] different shapes and sizes depending on
[18:04] what the artist wants and then we just
[18:06] start compositing this thing together
[18:07] with all of the different elements going
[18:09] into one nice giant flare so we're quite
[18:14] proud of this we'll see what it looks
[18:15] like
[18:16] composite in a minute but the main
[18:18] benefit of this system is because it's
[18:20] fully procedural it's it's it's based on
[18:23] whatever the image we've rendered prior
[18:25] to this point so it's not like the
[18:27] artist has to say exactly how this lens
[18:29] they should look on this particular
[18:30] light it just whatever image we get it
[18:33] will generate lens flares as a real
[18:34] camera would do which means things like
[18:37] the shape of your light really make a
[18:38] difference to how the lens fare will
[18:40] appear and it also means you don't have
[18:42] to have a natural light source just a
[18:43] light bouncing off a table or something
[18:44] or or a fire or explosion or laser ball
[18:47] all these things can produce lens flares
[18:49] so it's much more dynamic you get a lot
[18:51] more interesting effects from it and it
[18:53] also doesn't have to be these type of
[18:54] crisp layers you just get a bit of a
[18:56] glare as well so if you're not like a a
[18:58] moon or something you'll get the glare
[18:59] coming up from the moon which look quite
[19:01] nice and final advantages because none
[19:05] of it is based on the actual scene
[19:07] content right the art no the artists
[19:09] doesn't have to manually specify these
[19:11] things it means that the art directors
[19:13] can come in later and totally repurpose
[19:15] and restyle the game by just changing
[19:16] the lens flares so with the scope of our
[19:19] game that's really important to be able
[19:20] to quickly manage all this content
[19:22] because it is a huge amount of content
[19:24] in here okay and the final stage of the
[19:28] the optics is to play bloom this is
[19:31] fairly standard most games do this in
[19:33] the same way now but it's also
[19:34] physically based and also a placement
[19:36] for Lumbee arts color correction was
[19:40] next this is a bit of a odd image but
[19:43] this is what we call a lot a lookup
[19:45] table where every single color is
[19:47] represented here and it's a remapping it
[19:49] tells us how to transfer from the color
[19:51] that we had in the first render into
[19:52] what the artist actually wants so it
[19:54] allows them to change the hue or
[19:55] contrast saturation things like this now
[20:00] the last bit of the optics that we're
[20:02] proud of I didn't mention was this one
[20:04] DM this is the exposure system which is
[20:06] something is quite new to us and it's
[20:08] still being refined a bit the planets
[20:10] and the moons really push the exposure
[20:12] system to its extremes
[20:14] we're quite proud of this we generate a
[20:16] histogram of the entire scene and we
[20:18] have to analyze how bright the scene is
[20:20] and not just most games we'll just look
[20:22] at how Aborigine bright the scene is and
[20:24] then they would adjust the image to
[20:25] compensate so they try to approximate
[20:27] what you'd get in your eye but we go a
[20:29] little bit further because of the
[20:31] extreme contrast we have in the game so
[20:33] we actually simulate two different
[20:35] mechanisms the first is your pupil
[20:37] response so your pupils can open and
[20:39] close from about four millimeters to
[20:40] eight millimeters which gives you a
[20:42] dynamic range of about two to two three
[20:44] stops on a camera so we have that and
[20:47] that that can bring you very quickly for
[20:49] my bike to a dark scene but it's got
[20:51] this limited range so it can't take you
[20:53] from an extreme so if you walk outside
[20:55] from a interior like dark interior like
[20:58] this to bright Sun you'll get a bit of
[21:00] an effect but it won't be enough and
[21:02] that's where the second stage kicks in
[21:03] which star wobbling cone simulation
[21:06] which does the much longer type of
[21:08] exposure and has a much wider range but
[21:10] it takes longer to do it we don't go to
[21:13] the extent of real life which can take
[21:14] 40 minutes to adapt to the darkest of
[21:16] surroundings we crush that down to about
[21:18] 20 seconds so you guys don't get bored
[21:23] okay so now we have to put all these
[21:25] optics together so this is our high
[21:27] dynamic range input we saw before and
[21:29] then we apply all these bad boys and we
[21:31] end up with this which is starting to
[21:33] look a lot nicer now so we've got the
[21:34] flares the colors look a bit better and
[21:37] yeah generally the colors honours as the
[21:42] dark signers dark and the bright Sun is
[21:44] bright everything's a bit more
[21:45] representable on a normal monitor okay
[21:49] so once we've done this we now have to
[21:51] clean up the image so SMA is an effect
[21:55] that was already in lumpy art and in
[21:56] kwangin before that it does a good job
[21:58] it basically finds all of your jagged
[22:01] edges it classifies them into different
[22:03] types like a left-hand corner a diagonal
[22:06] or whatever it might be there's quite a
[22:08] few different classifications which
[22:09] represented by the colors here and then
[22:11] once it's worked out what type of jagged
[22:13] edge is it applies as effectively a
[22:15] smart blur it tries to fill in the gaps
[22:17] and soften that edge to get the correct
[22:20] result if you would have been rendering
[22:21] a higher resolution so if we go from pre
[22:24] until acing to having it turned
[22:26] I think if you look say on the left of
[22:28] the character's leg it does a really
[22:31] good job at softening what you'll notice
[22:36] is even though we've it looks great on
[22:37] the character some of the areas like
[22:39] this crate still have significant
[22:41] banding and jagged lines on them and
[22:43] finish a few of examples over on the
[22:46] bike over there so we've recently just
[22:49] introduced temporal anti-aliasing to
[22:52] hugely improve the results of this which
[22:55] is something we've been suffering from
[22:56] for a long time there are tears in this
[22:58] game so if you look between the two now
[23:00] I'll say on the crate it completely
[23:03] cleans up everything that's left on that
[23:05] and we end up with a really nice smooth
[23:07] image so this is something that's just
[23:11] going into 3.0
[23:18] and the good thing is it's no slower
[23:20] than what we had before the performance
[23:21] is almost identical and we've had to do
[23:24] we're still iterating this we're going
[23:26] to continue to iterate it but the the
[23:28] engineer is doing it is really talented
[23:29] and we've we've taken it one step
[23:32] further than what we have here actually
[23:34] now in just in the last few days and his
[23:37] temple techniques basically work by
[23:38] looking at the previous several frames
[23:41] of motion in our case we look at four
[23:42] frames before fire and we work out from
[23:45] them previous four frames what the
[23:47] results should have been there so we
[23:49] type of we wobble the image ever so
[23:50] slightly which is impossible to you and
[23:52] then over the four frames we type a work
[23:54] out what the details should have been
[23:56] but in that one pixel and we can recover
[23:58] that and get a nice soft result but the
[24:01] problem of using the previous four
[24:02] frames well there's all sorts of
[24:04] problems to be honest it's causes a lot
[24:06] of headaches so we have we also have we
[24:08] have a lot of moving object softly we've
[24:10] got you know spaceships that move we've
[24:12] got planets that are moving we've got
[24:13] all sorts of things going on that we
[24:15] might not have an in normal game and we
[24:17] also have a UI transparent UI
[24:19] a transparent glass screen a transparent
[24:21] visor all of these things make it quite
[24:23] difficult to account for the previous
[24:25] four frames motion because your visor
[24:26] might be spinning this way the cockpit
[24:28] might be going that way you know there's
[24:30] all sorts going on so I've recently done
[24:32] a change that hopefully will work around
[24:34] them but yeah you'll be able to see this
[24:36] in 4.0 once you get hands on it okay so
[24:38] that's our final frame looking nice I
[24:41] think you'll agree so I'll take you on
[24:45] to the next bit so just dock go back
[24:48] over some of the updates we've had so
[24:51] some of this is not just the UK graphics
[24:54] team but the Frankfurt Engine team which
[24:56] have done a lot of good work here so the
[24:58] first one is the P 4k system which is a
[25:01] new date at delivery system it's
[25:03] something we use internally and
[25:04] externally and it means the time to get
[25:06] a new build is vastly faster nor for
[25:08] like undescribable faster so we're
[25:12] really happy at that it basically the
[25:13] way it works is by rather than having a
[25:16] few giant data files we just have one
[25:17] enormous data file but the delivery
[25:19] system actually goes in and finds the
[25:21] individual assets that need to change
[25:22] and only transfers the smallest part
[25:24] that actually needs to be sent so you
[25:26] know we can get patches in seconds where
[25:28] we would have been weighing
[25:28] hours in the office or you know 20
[25:31] maybe a typical bill download now it
[25:33] could be 10 seconds so we've changed the
[25:36] compression we use on this we've also
[25:38] added a dedicated SSD streaming path
[25:40] which allows us to read transfer
[25:43] transfer multiple files at once
[25:45] so yeah this p4k system has been a huge
[25:47] benefit and I think the you guys will
[25:50] appreciate as well when you get any
[25:51] patches feeling from 3.0 onwards you'll
[25:53] notice a significant difference in the
[25:55] amount of time you set there what I'm
[25:56] waiting for it to download next one is
[25:59] the service performance improvements
[26:02] server performance is something the
[26:04] Frankfurt team of really been
[26:05] concentrating on lately even in the last
[26:06] week one we've been our an EVO party the
[26:09] results they're getting is beginning
[26:11] quite a lot of significant improvements
[26:12] so we're really happy about that
[26:14] which awfully translates to less type of
[26:16] jittering or any type of network bugs
[26:18] we've got a planetary rotation with
[26:21] something we've really been put it in
[26:22] which has been quite a challenge in
[26:25] topic 2 - a lot of text will eyes on
[26:27] things staying still and like I said
[26:29] with the temporal anti-aliasing we
[26:30] expect the floor not to be moving but
[26:32] now everyone's moving at a thousand
[26:34] miles an hour and the malware you are
[26:36] but yeah it's cool you obviously get the
[26:38] changing light conditions the Sun is
[26:40] never still so that's really nice I
[26:42] think the time is accelerated though so
[26:44] you don't have to wait 24 hours to see a
[26:47] sunset but when data texture is
[26:50] something you might have seen on a TV
[26:51] it's actually just an example of it here
[26:53] this hologram on the right hand side
[26:55] they the render to texture is useful
[26:58] Holograms it's used for all of our UI
[27:01] screens now it allows us to embed
[27:04] content into the world from another
[27:05] location or like a 2d set of graphics
[27:08] onto like actual in-world things like
[27:11] the glass or Holograms and yeah it's
[27:14] been a great help to us next one is the
[27:17] temporal anti-aliasing which you just
[27:19] seen the improvements to the SSD Oh
[27:21] which I'll show you a little bit more
[27:23] than a minute we've improved the color
[27:25] correction which is a tone mapping
[27:27] curve and finally we're started work on
[27:30] a new suite of shaders the
[27:32] we're trying to go more physically based
[27:34] on our shading but we're also trying to
[27:35] bring in more gameplay driven shaders so
[27:38] when you have things like damage on a
[27:40] shade or dirt and if you've like being
[27:42] on a planet or where if you've been
[27:44] using the item or object for too long so
[27:46] all these things we want to have a
[27:48] visual representation on so our first
[27:50] version of the shaders is the
[27:51] physically-based glass we've introduced
[27:53] which I've got a quick demo of but that
[27:56] will continue after 3-0 when we go
[27:57] through all the materials eventually
[27:58] upgrade in them okay this is the
[28:02] occlusion effect so this is our
[28:04] occlusion turned off this is the
[28:06] previous occlusion if I just go back for
[28:08] fun see it adds quite a bit of detail a
[28:10] bit of shadow but a new one so it's it's
[28:15] different but it's a type of more
[28:17] contrast you get like the you don't
[28:20] necessary have more shadowing they get
[28:21] shadowing in the right places and it's a
[28:22] deeper shadow and if you look at light
[28:25] Mark's chin or on his life the side of
[28:27] his nose and next to his eye there's a
[28:30] lot more detail in the new version so
[28:33] quite happy with that but that's
[28:34] something we're gonna continue improving
[28:35] in the coming release so we've got our
[28:39] tone mapping which is how we take the
[28:41] HDR colors and convert them to low
[28:43] dynamic range for your monitor so if you
[28:45] look at this very boring sphere here in
[28:48] the middle it's got a quite muted shade
[28:50] on the on the right-hand side of it it's
[28:53] it's the old tone mapping is crushing
[28:55] the colors a little bit too much it's
[28:56] not quite vivid enough for artists they
[28:58] like to call it pop it doesn't pop so
[29:00] new version it's a little bit more
[29:02] vibrant a little bit nicer and it
[29:04] follows an industry standard asus tone
[29:06] mapping curve which is we've made a few
[29:08] tiny modifications but we're happy if
[29:10] the colors okay onto our shaders so if
[29:15] we just play this video slice and this
[29:21] is just this is just an example of the
[29:22] canopy of the Gladius but we've done a
[29:24] it's one of the first of many shaders
[29:26] we're taking a pass on because some of
[29:28] them are Stanley a little bit old in the
[29:29] tooth need a bit of an upgrade this
[29:31] class has things like physically-based
[29:33] refraction on it it simulates light
[29:35] they're the color shifts you get from
[29:38] like a glass when it's type of greasy
[29:39] there's all sorts of nice joys in this
[29:42] thing which the artist can't wait to get
[29:44] their hands on
[29:45] just to give you an example this is the
[29:47] old glass we had which just looks like
[29:49] something that's clean and transparent
[29:50] not much going on and the new one is
[29:53] quickly more interesting now obviously
[29:55] this is this is my program ah once it
[29:56] gets into the artists hands which it was
[29:59] only completed this week they're going
[30:00] to start doing some much nicer stuff
[30:01] with this and hopefully getting some of
[30:03] the ship's glass looking better 43.0
[30:06] just go through some of the effects
[30:08] there so here's like the fin film effect
[30:10] I said that it gives you a slight hue on
[30:13] the reflections we've got a fraction
[30:16] transmission if you want colored glass
[30:19] dirt which is one of the things I said
[30:21] we want some more gameplay interaction
[30:22] and then as an example of a cracked
[30:27] piece of glass this one's quite nice
[30:29] when you get the side angle it shows you
[30:31] that the the cracks actually have some
[30:33] 3d to them
[30:41] this is summer Chris and the artists
[30:43] have been asking for a long time a very
[30:45] long time but they're they're super
[30:46] happy that well to get it now and yeah
[30:49] with the physical simulation going here
[30:51] it's quite quite involved just to get
[30:53] this but it looks really good and we're
[30:54] really happy with this okay
[30:57] so quick talk on what's to come then so
[30:59] on the graphics side of things we've got
[31:01] new hair coming along we were a lot of
[31:05] work we want to do on the terrain and
[31:06] then on the occlusion we've got these
[31:09] gameplay driven material shader as I
[31:10] just mentioned we've got glass clouds
[31:13] also known as space fog so we can do
[31:15] things like fog and asteroid fields and
[31:17] stuff to make a bit more interesting
[31:18] we've got a new shield effect on the way
[31:21] which is going to use our new GPU
[31:22] particles which works just started on
[31:24] this last week we've got some depth
[31:26] field improvements that are coming along
[31:28] nicely color processing improvements
[31:30] we've got a quite a lot planned there we
[31:32] want to really improve the color
[31:35] reproduction and get the result on
[31:37] screen much more faithful to what the
[31:38] artists originally produce in their
[31:39] packages we've got motion blur
[31:42] improvements and finally complex shading
[31:44] models which allows you to do things
[31:46] like a clear coat which is what you know
[31:48] on a car to get like the car paint
[31:50] effect and yeah something the ship guys
[31:53] and particularly the armour and things
[31:54] like this they would really enjoy having
[31:56] a bit more complicated shading on them
[32:00] okay I just wanted to briefly touch on
[32:02] something else which was CPU parallelism
[32:05] and so awfully modern gamers are putting
[32:08] huge pressure on CPUs we're no exception
[32:10] we're actually pushing the CPU pretty
[32:12] hard but the gameplay code is got a hell
[32:15] of a lot going on there
[32:16] so in the rendering as well and all
[32:18] these different systems we have like the
[32:21] things that Evo was showing you earlier
[32:22] if the animation we've got the facial
[32:24] animation system all of these things are
[32:26] just adding to the cost of the game so
[32:28] multi-threading is a massive part of
[32:31] getting our game to run well and we use
[32:33] it quite a lot and we're using even more
[32:35] lately to try and get the best possible
[32:37] performance
[32:37] so our Frankfurt team are leading the
[32:39] charge on this our principal graphics
[32:41] engine sorry principal engine programmer
[32:43] Chris Polti is is pushing forward of
[32:45] this and we've got two main systems we
[32:48] use to get to performance grades so
[32:50] we've got our batch up data and our
[32:52] background workers
[32:55] so yeah a batch of data is basically
[32:59] it's where we have a lot of the same
[33:01] work to do so we want to call a thousand
[33:04] objects or we want to update 50 fosters
[33:07] or something like that so the batch
[33:08] worker gets one job with lots of
[33:10] different elements to it and it gets all
[33:13] of them done and it spreads on the cost
[33:15] of all of your CPU cores at the same
[33:16] time and that's been a huge benefit for
[33:19] our gameplay like it's very easy to take
[33:21] all of our like I said our us toes or
[33:23] something like that and then we can just
[33:25] match them all in one go and we get some
[33:27] huge performance wins from this so a lot
[33:29] of the game code as we made to make use
[33:31] of this now and it's been the bits that
[33:33] haven't been are being converted over so
[33:35] this has been a huge improvement lately
[33:36] and the other mechanism we have is our
[33:40] background workers so these do stuff
[33:43] that we don't need as immediately and so
[33:46] say something like the streaming system
[33:48] we need to stream in a new texture or a
[33:50] new mesh or whatever it might be or some
[33:52] audio and that doesn't need to happen
[33:54] immediately but it needs to happen
[33:56] gradually over time so these background
[33:59] workers they kicking whenever the bat
[34:01] worker isn't busy so they are being
[34:03] programmed a very smart way using fibers
[34:06] that means they can kick into action as
[34:08] quickly as possible to try and fill all
[34:10] the gaps between all the work that the
[34:12] the background work so they're what's
[34:15] called everyone's working mix so okay
[34:20] and something else to mention which goes
[34:22] back to what chris mentioned earlier is
[34:24] the background workers are really
[34:26] tightly coupled to our IO system now so
[34:28] in the case you have an SSD or obtain we
[34:31] can read multiple files at once and we
[34:34] start decompressing them the second one
[34:36] chunk of that file is loaded in so we
[34:39] actually are posting up to say four
[34:40] files at once and we can be decrypting
[34:43] many files or decompressing many files
[34:45] at once depend on how many CPUs you've
[34:46] got so these two systems together mean
[34:49] we can get data off the disk extremely
[34:51] quickly which is really important for us
[34:52] because them fast amount of data we have
[34:54] in our game okay
[34:57] and just before finish just one last
[34:59] slide just to talk about some of the
[35:00] things that are on the horizon and we're
[35:02] hoping to get onto you soon so object
[35:04] container streaming is something you
[35:05] might have heard off on a TV
[35:07] it's type of each chunk of our game well
[35:10] than a level which makes no sense for
[35:11] something other colors and each likes
[35:14] inferior of a spaceship will be an
[35:15] object a nur a spacestation might be on
[35:17] object Ain a single shop in a in a space
[35:20] station might be an object container
[35:22] this is type of the unit we used to
[35:23] build our soul systems and we're working
[35:26] on the streaming support so that we can
[35:28] very quickly load and unload these
[35:29] things dynamically without affecting the
[35:32] frame way and fellow hitch so that's in
[35:34] progress the planet effects so we've got
[35:38] all sorts of things we want to do on the
[35:39] planet some have been started some are
[35:41] not so soon but we've got things like
[35:43] improved shadows like a bespoke system
[35:47] for shadows clouds we've probably seen
[35:49] some demos of the first version for
[35:51] clouds there's something want to
[35:52] continue working on and there's many
[35:54] other things on the planets like roads
[35:55] and other such things and then in spaced
[35:59] equally we've got things like stars of
[36:01] the Sun and rings around planets we need
[36:03] to get all of these effects improved
[36:05] we've got some of the basics in for them
[36:06] but there's a lot further we want to go
[36:08] on that and then dynamic global
[36:11] illumination so we have this on the
[36:13] planet with the environment probe you
[36:14] saw at the start a presentation but we
[36:17] need something equivalent for the
[36:18] interiors so we can accurately update
[36:21] the lighting and this is crucial because
[36:22] we want to be able to shoot out
[36:23] individual light bulbs in rooms and have
[36:25] all the lighting correctly update and we
[36:27] can't just tint the lighting or just it
[36:30] fake it we need to have to do the we
[36:32] calculate everything from scratch and
[36:34] the reason it's more complicated
[36:35] interior versus on a planet it's just
[36:37] because the number of light sources that
[36:38] are involved we might have like you know
[36:40] in a room like this might be 50 light
[36:42] sources in the room and to calculate all
[36:43] that while somebody sat there shooting
[36:45] all the lights out of a machine gun is
[36:47] there's quite a lot of optimization
[36:48] needs to go on there and then next few
[36:50] things so we've got to use the batch
[36:53] work as we talked about earlier we've
[36:55] got two threads we want to processes
[36:57] that compute the rendering and the
[36:59] physics and they are still done without
[37:01] the battle worker so we need to convert
[37:03] them over so we get some extra
[37:05] performance wins and then after we've
[37:08] when we've done the render one when
[37:09] we're finished that off that's what's
[37:10] what's going to enable us to really take
[37:12] full advantage of something like Vulcan
[37:13] or these these new api's that really let
[37:16] us on the graphic side likes but it the
[37:18] work was as many calls as possible and
[37:20] we're really going to get some real
[37:21] performance winds okay and that sums up
[37:25] so I'll hand over to Brian hope you
[37:27] enjoyed
[37:37] thanks Ali I don't know about you guys
[37:39] but it's like a wall of information
[37:41] right luckily these will you know
[37:45] they'll be on online so we'll be able to
[37:48] check them out and actually see it a
[37:49] little bit slower if we want to so cool
[37:53] now we have time to open up to QA you
[37:56] cool with that yeah awesome would take
[37:59] questions from you guys in the audience
[38:00] I think we have some guys with mics
[38:02] around if anybody's interested you can
[38:04] just raise your hand and we'll run up to
[38:06] you I'll start off with the first one
[38:09] very generic as always as far as tech
[38:15] goes and what you're involved in what
[38:17] would you say would be some of the one
[38:19] of the most unique challenges for star
[38:21] citizen and the work that you need to do
[38:23] unique it's probably the scale compared
[38:26] to effin have worked on previously
[38:27] yeah the scale in type of two aspects
[38:30] you've got the physical scale obviously
[38:32] you know solar systems and planets and
[38:35] everything is ginormous and dealing with
[38:38] all that and having a lot of effects
[38:39] work on things like I said like rotating
[38:41] planets and the loading of all this data
[38:44] and managing all the data is like a huge
[38:46] challenge which normally get these
[38:48] little confined levels where you can
[38:49] type of issue more well and rendering is
[38:52] all about assumptions you make some
[38:53] assumptions and that's how you get the
[38:54] frame wave and it's very hard to make
[38:56] assumptions on you've got a completely
[38:58] sandbox open universe and the other part
[39:00] of the scale is like the gameplay
[39:01] obviously you know you can't assume
[39:04] anything is fixed you can't assume
[39:05] anything is gonna stay looking like it's
[39:07] gonna look you know something might be
[39:08] there a minute and then destroyed the
[39:10] next minute everything's type of dynamic
[39:11] there's so much then I make emergent
[39:13] gameplay again it just like that
[39:15] it stops has been able to assume
[39:17] anything so then we have to be much more
[39:19] creative and how we can make things fast
[39:21] and look good while still supporting all
[39:24] the great features there when obviously
[39:25] once yeah I've heard that actually
[39:27] across other disciplines as well and
[39:29] it's true I mean with just the vast
[39:30] scale there's so many of the things we
[39:32] need to keep in mind when we're crafting
[39:33] something as opposed to a small little
[39:35] area and so on anyone have any questions
[39:39] from the audience
[39:43] whoever has a mic somebody up front no
[39:47] no here you go right behind you
[39:49] we'll start with the one blind okay it's
[39:51] not really a question but I want to say
[39:52] thank you for your hard work you do
[39:55] that's awesome
[39:58] I'm a prize to everyone at the team a
[40:01] lot of work fighting about a lot of
[40:02] people wait for the mic here comes I
[40:14] just want to know if it's possible
[40:16] thanks to render to texture to have
[40:18] internal bridge of a starship like in
[40:21] Star Trek though you might be say for
[40:24] the polar ice for instance or a
[40:26] secretary bridge for the interest is it
[40:28] possible let the current tech depends on
[40:31] you to find possible tectal yes it's
[40:34] completely possible you could do right
[40:35] now it would work it's fine weights the
[40:38] issue if you want to vendors the exactly
[40:41] the same thing or the same quality in
[40:42] you on asteroids and fog and all of the
[40:45] post past we just looked at then you're
[40:47] gonna have your framework so it's very
[40:50] easy to be smart about this stuff and
[40:51] reduce the cost and for things like
[40:53] Holograms will reduce the number of
[40:54] lights we vote apply certain post
[40:56] effects you don't need say like a
[40:57] hologram doesn't need anti-aliasing
[40:59] maybe because it's already quite soft
[41:00] and blurry so there's a lot of scope for
[41:03] doing things and I say something like a
[41:06] depth camera or a heat vision these
[41:08] types of things I will a much simpler
[41:10] actually although they might look really
[41:11] cool there would be much easier but
[41:12] doing the full rendering pipeline on a
[41:14] full screen would have to be quite
[41:16] intensive on the framerate so probably
[41:19] not type of that side but yeah it's not
[41:21] a technical question is just purely
[41:23] performance and how much we want to be
[41:25] able to let the game scale back to a
[41:27] lower spec system so that's all we have
[41:29] to keep in mind for that but it gets
[41:31] asked by design everyday so you know the
[41:33] only one either
[41:39] I'm from the graphics area myself and
[41:41] I'm kind of like astonished how much PBR
[41:43] is getting now into game engines so this
[41:47] is a quite extensive resource drainage
[41:51] like in terms how much your cars have to
[41:53] calculate
[41:54] do you communicate with AMD and NVIDIA
[41:57] to further develop the PBR based
[42:00] technology yeah I mean when it comes to
[42:04] the physical base stuff a lot of its
[42:06] just to be honest there's a lot of
[42:07] research online that we tend to look at
[42:08] for like the latest SIGGRAPH or GDC
[42:11] presentations there's a lot of
[42:13] information out there and how to do the
[42:15] techniques but when it comes to the
[42:16] performance that tends to be where we do
[42:18] have contact with the independent
[42:20] hardware vendors like AMD and NVIDIA
[42:21] because things like the I mentioned the
[42:24] opaque lighting shader is one giant
[42:26] shader that is really really difficult
[42:28] to get to run fast and that is really
[42:31] difficult to balance across all the
[42:32] different architectures and that's why
[42:33] you type of need to work really closely
[42:36] with them to make sure that you hit
[42:37] certain the certain like performance
[42:39] cliffs you have and you know if you have
[42:41] one instruction over you get you dropped
[42:43] like 30 percent performance so you need
[42:44] to know where these boundaries are and
[42:46] make sure you fit within them and it's
[42:48] different for every single graphics card
[42:49] so yeah there's quite a lot of
[42:51] cooperation there a follow up on that do
[42:58] you do research and development on
[43:00] yourself or is that something where you
[43:02] take it from the developers from AMD and
[43:05] NVIDIA like say we type of we don't
[43:08] necessarily take it directly from them
[43:09] and they do they do papers at GDC and
[43:11] SIGGRAPH like everyone else does and we
[43:14] take it from whoever's got the best I
[43:15] mean we do a lot of stuff internally
[43:16] like say the the optics stuff we showed
[43:19] that was all in-house one of our
[43:21] graphics programmers just came up all
[43:23] over himself he did a lot of research
[43:25] and all this stuff but other stuff like
[43:28] said our area our implementation we took
[43:30] a lot of research on that that's been
[43:32] done by other game studios and other
[43:35] places like that but yeah it's there's
[43:37] no one source it's wherever the
[43:39] information is you know and it's quite
[43:40] open in game development of people happy
[43:42] to share just like we're showing the
[43:43] guts of our game here it's it's quite
[43:45] open so he's coming
[43:54] a follow-up to the render to texture
[43:57] question so you mentioned that like
[44:00] doing some sort of VR cockpit would be
[44:03] like too much of a strain on the system
[44:05] but what's the extent of it like for
[44:08] example we've seen on the RSI Explorer
[44:10] armor it has like this camera looking
[44:13] thing mounted on the shoulder so for
[44:15] example like sending an away team and
[44:18] having like their point of view
[44:19] displayed in the cockpits would that be
[44:22] possible at all so I mean so you said
[44:26] it's possible but would it be reasonable
[44:27] and I'd have to see the actual case to
[44:30] say yes or no I'm not the designer and I
[44:33] don't know we have to sometimes we just
[44:35] run this stuff and just test what the
[44:36] performance is you never know and you
[44:38] got like a hundred different graphics
[44:39] cards you need to test on but generally
[44:41] we'd the advice we've been given to
[44:42] design is if you we've got a page type
[44:45] of show and what is likely to be
[44:46] possible and what's not but generally if
[44:49] it's a type of any type of constraint on
[44:51] the scenario means we can probably do it
[44:53] so you know if I'm in a in a certain
[44:56] room and it doesn't have too many
[44:57] windows or any windows I can probably
[44:59] get a view of someone else fine because
[45:00] that room can be made to budget you know
[45:03] to take up a certain number of
[45:04] milliseconds in the frame and then you
[45:05] you're free to do the rest of the frame
[45:07] but if you in an open environment with
[45:09] windows and you can see asteroids
[45:11] planets and everything and then you want
[45:13] to look another view of another planet
[45:14] and another set of asteroids that's what
[45:16] we can't do so as long as there's a
[45:18] constraint I've won the main senior
[45:20] studying or the other scene that you're
[45:21] looking at then that type of what
[45:23] dictates so it's a bit of a balance a so
[45:25] it depends where you are and what you're
[45:26] looking at I hope Lance's we had someone
[45:30] up front yes I you said there was a lot
[45:33] of strain on the CPU I was thinking is
[45:36] there CPU you would recommend one with
[45:37] more threats 8:12 no not particularly I
[45:42] can save one or the other I mean
[45:44] multi-core is just the key though like
[45:45] going wide is is the direction we go in
[45:48] the way that everyone is going obviously
[45:50] the higher end CPUs like I seven to nine
[45:52] irons there's plenty of bandwidth there
[45:54] and we're doing our best to fill that so
[45:57] yeah I mean the single course they can't
[46:00] you could never could be on a single
[46:02] court me nobody has single course now
[46:03] but you know there's there's physical
[46:05] limitations that make it extremely
[46:06] difficult so go and wide is the way
[46:08] but in terms of a particular model not
[46:11] particularly now we have time for one
[46:14] more quick question
[46:22] most games I played recently using fake
[46:26] mirrors like Freya for example would it
[46:30] be possible or maybe this one question
[46:32] would it be doable without tanking the
[46:36] framerate to use real minerals so I can
[46:40] even beat that cutting quite hair today
[46:42] most games using fake mirrors today
[46:45] would it be possible to use a real
[46:48] mirror image without tanking the frame
[46:51] rate too much again it goes back to
[46:53] Atlanta yeah after the last question yes
[46:55] we can do a mirror it's not we actually
[46:57] have to do a little bit of work because
[46:59] a mirror isn't like a camera it's
[47:00] actually the fact that it flips the
[47:02] image is something you have to do that
[47:04] and to inside the rendering you have to
[47:07] invert and reverse all the geometry to
[47:09] get it to flip correctly but it is
[47:11] technically possible is something we'll
[47:13] want to do but again is the constraint
[47:15] question if you're stood on the bit of
[47:17] an address or something and then you
[47:18] want a mirror there you know next to the
[47:20] captaincy that's going to reflect the
[47:22] rest of the address and outside then
[47:23] know if you're in a bathroom somewhere
[47:25] maybe yeah that's completely achievable
[47:29] cool will think you are Lee for your
[47:31] time thanks for everybody thanks guys
[47:40] we're gonna take a short break roughly
[47:42] ten minutes next up will be the joy on
[47:45] history physiology and language thank
[47:49] says
[47:51] [Applause]

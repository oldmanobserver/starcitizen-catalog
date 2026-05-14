# CitizenCon 2948 - Panel: Biome on the Range

**Video:** https://www.youtube.com/watch?v=JNj986LBYD4
**Date:** 2018-10-29
**Duration:** 31:29

## Transcript

[00:00] please welcome senior environmental
[00:01] artist Patrick GLaDOS so welcome to the
[00:05] presentation called biome on the range
[00:07] this is home marketing calls it is not
[00:09] what I call its ecosystem creation for
[00:12] star citizen right my name is Patrick
[00:15] lettuce I'm seeing environment artists
[00:16] at cloud Imperium games from the Germany
[00:19] studio this is our team currently
[00:22] consists of 11 people two lighting guy
[00:24] guys on the Left many people on our team
[00:27] are quite specialized in various fields
[00:31] which really gives us a good balance and
[00:34] expertise and the main responsibilities
[00:40] this team has the German team is the
[00:44] creation of the planets and moons for
[00:46] star citizen a smaller portion of the
[00:49] team is dedicated to creating the
[00:51] landing zones besides creating content
[00:55] we work with our engineers on tech and
[00:57] tools it is not very common for a game
[01:01] production team to do that all the time
[01:03] you know we have to produce the game so
[01:05] we have to balance the time between
[01:06] actually building the content and
[01:09] designing the tech that we need to
[01:12] create that content but in the end that
[01:15] allows us to be way more effective in
[01:17] the long run as we can actually have a
[01:19] huge impact on how the tools are
[01:21] designed tailoring every-everything -
[01:23] already eats right those are the two
[01:28] main workflow steps we're going to look
[01:30] at in this presentation before we start
[01:32] off let's have a quick look at how an
[01:36] ecosystem is composed like what elements
[01:38] are there in an ecosystem from our point
[01:42] of view or the things that we work with
[01:46] are based textures distance textures
[01:48] ground textures and object presets now
[01:51] you don't have to memorize all of them
[01:53] we're going to dive a bit deeper into
[01:54] the base textures now and the creation
[01:57] of these the distance and ground and
[01:59] object presets we're going to cover
[02:03] later in this presentation so don't
[02:04] don't worry about too much
[02:06] okay the ground textures sorry base
[02:09] textures those five make up one
[02:13] ecosystem the color is quite
[02:15] self-explanatory right it's a color the
[02:18] height handles how what the elevation of
[02:21] our landscape is the normal gives us a
[02:23] bit more surface different definition
[02:25] and shading detail and such but they're
[02:27] really the two interesting maps here are
[02:30] the distribution and index map the
[02:32] distribution map lets us define what
[02:35] kind of object set gets scattered on
[02:37] what color so we can really define where
[02:40] cliffs are where the forests are and so
[02:43] on and so on
[02:43] well the index map also a very funky
[02:47] colorful map that no is really for
[02:52] letting us laying out allowing us to lay
[02:55] out the grant materials which is up to
[02:59] 16 as a comparison to what you guys have
[03:02] seen on the previous moons like the year
[03:04] ago this was only three so we have
[03:09] ramped up the definition that we can
[03:11] have close up for the player by quite a
[03:13] lot for now we're gonna as I said we're
[03:18] going to focus on the base textures but
[03:20] not all of them really just the color
[03:22] and the height map before we start off
[03:26] you guys know that star citizen is you
[03:28] know all about building procedural
[03:30] content and building procedural planets
[03:31] and such and that kind of requires us to
[03:37] build the content in a procedural way
[03:39] and not just half the content being
[03:40] procedurally handed in the editor so we
[03:44] use a tool called substance designer for
[03:46] that substance designer is a tool that
[03:48] allows us to use nodes like the one you
[03:52] see in the top left corner and chain
[03:55] them up together to a bigger graph those
[03:58] nodes can be anything from shapes
[04:00] patterns modifiers of all sorts right
[04:04] it doesn't might be too technical but
[04:06] I'll give you a quick example so we
[04:10] started off with this very simple I'm
[04:12] gonna actually go back we start off with
[04:14] a simple spherical shape up here and
[04:16] what we do is we take another pattern a
[04:19] second
[04:20] pattern and we just blend them together
[04:22] right so that's two notes we just
[04:24] combined together to produce a new
[04:26] result but it doesn't have to stop there
[04:29] we can basically go on and on and on
[04:32] until we create an extremely huge graph
[04:35] it does something extremely
[04:36] sophisticated and detailed and
[04:37] complicated but again we're going to
[04:40] keep it simple for the net for example
[04:43] adding a blur right so it just takes the
[04:45] result and blurs it right okay to do
[04:48] something a little more funky we add a
[04:50] little twist to to our result using a
[04:53] swirl node to create this you know
[04:56] blossom or vortex kind of shape what you
[05:03] see here is all I have done is I swapped
[05:07] that spherical shape that we have used
[05:09] in the beginning I swapped it for a star
[05:10] so all the other nodes that I've used
[05:13] like the blending of that second pattern
[05:16] the blurring this the twisting it gets
[05:20] reapplied without me having to go in and
[05:22] do all these steps again right and this
[05:24] is where this is where the the power of
[05:27] that tool comes from this this is what
[05:29] really enables us to do really quick
[05:32] iterations and variations of all sorts
[05:35] but still this might be too abstract I'm
[05:37] gonna follow up with another example
[05:39] later on that let me talk about other
[05:43] kinds of nodes not no noses but noises
[05:48] which is called the Perlin noise it's
[05:51] another node right I mentioned to you
[05:52] earlier that this might be shapes or
[05:55] patterns or all kinds of images really
[05:57] noises are fundamental for building
[06:00] procedurally generated contents for
[06:03] example materials materials substance
[06:07] design is in most game productions used
[06:10] to create materials but in our case we
[06:12] want to achieve landscapes so it's a bit
[06:14] bit of a different use case here this
[06:17] Perlin noise is not really a static
[06:21] image that's saved somewhere on my drive
[06:22] but a mathematically generated pattern
[06:25] and because of that we can change all
[06:30] kinds of properties of that noise at all
[06:32] times which which is
[06:33] super-powerful like adding an octave for
[06:37] instance which is the noise added on top
[06:41] of itself at a higher frequency but
[06:43] lower intensity I know it sounds very
[06:45] technical let's just say we add more
[06:48] detail to this wobble shape
[06:50] all right so if added more detail to
[06:53] this wobble shape and but it doesn't
[06:58] really you know get me anywhere I want
[06:59] to use it as a base to you know create
[07:01] my lamp landscape from so what I'll do
[07:05] is repeat that process a couple of times
[07:07] and then see where we where we end up
[07:09] with all right this is a bit more
[07:13] detailed and you know somehow resembles
[07:16] noisy generic looking Hills of some sort
[07:21] I bet this this can be useful in later
[07:23] steps to to get closer to our result
[07:27] before we start off I'd like to show you
[07:30] another type of noise it's basically the
[07:32] same like the same idea the same method
[07:35] it is a pattern a generate a
[07:37] mathematically generated pattern but
[07:41] it's just a different kind there's all
[07:42] kinds of kinds kinds of patterns or
[07:46] types of these perla noises right so
[07:48] this one is for example called billowy
[07:50] and if we add details on top the octaves
[07:55] that I was speaking of earlier then it
[07:58] gives us something like this which looks
[08:00] kind of like a bumpy hilly landscape
[08:06] surface but it's really too generic so
[08:09] we will have to work on that quite
[08:11] heavily too to get a really nice and
[08:12] sophisticated result the next one is a
[08:16] rich noise and same thing we had the
[08:20] details on top and get kind of spiky
[08:24] like a spiky Mountain surface
[08:28] next up is custom notes so Sebastian
[08:32] Schroeder who's a part of our
[08:35] environment team in Frankfurt he built
[08:37] this custom note for us to actually
[08:39] allow us to apply erosion on top of
[08:42] these noises to really transform them
[08:44] into mountains let's have a look at how
[08:48] that works right so we're taking this
[08:50] noise and we're plugging it into our
[08:52] erosion node and we get this so with
[08:57] added erosion you can see how we start
[08:59] getting closer to a mountainous
[09:00] landscape with visible erosion channels
[09:03] everywhere what it also can do is apply
[09:09] sedimentation so now you can see that if
[09:14] I apply or if I put in put an input to
[09:17] the sediment strength input I can
[09:21] actually get the soil or yeah the soil
[09:24] being basically trunk transported down
[09:26] the slopes accumulating in the valleys
[09:29] giving us a much smoother look of that
[09:31] environment okay I think you guys get an
[09:37] idea how this stuff works and how what
[09:40] noises are and let's let's create
[09:43] something very very quick and simple
[09:45] with it that has a bit more intent so we
[09:51] take this noise sorry let me go back we
[09:53] take this noise and we apply it back
[09:54] onto a spherical shape up there right
[09:58] this is the same thing we did earlier
[10:00] it's just another noise then we add more
[10:03] contrast to that shape so it basically
[10:05] tightens up and gives us a better
[10:07] silhouette also introduces this plateau
[10:09] because we introduce increased contrast
[10:13] by so much that it basically clips out
[10:16] of range so to produce something a
[10:21] little more interesting we can put it in
[10:24] a mask that describes all slopes that's
[10:28] the slope information of that mountain
[10:30] and apply erosion only there to
[10:33] visualize where we might do this or
[10:36] where we might go with this mountain in
[10:38] general let's add in two colors to
[10:40] visualize a
[10:41] a bit more context see you really just
[10:44] two colors very quick okay so do you
[10:49] guys remember the previous example where
[10:51] I basically swapped out the spherical
[10:53] shape for the star right we can
[10:55] basically do the same thing here and
[10:57] suddenly we have a star-shaped snowy
[11:00] mountain right what we can also do is
[11:05] multiple stars or add any you know any
[11:10] generic noise to it to see what kind of
[11:13] results we get from this graph that we
[11:15] have set up now and this is where where
[11:17] it gets really playful because it's
[11:18] always interesting to plug in random
[11:20] things and see what we get out of it we
[11:28] can of course go completely crazy with
[11:30] this alright but it's time to actually
[11:42] build an ecosystem together that we will
[11:45] later on bring into the editor and maybe
[11:48] get a chance to even run around in a
[11:50] final result so we start off with a
[11:53] noise you guys know that one already
[11:55] we apply erosion to it but this time it
[11:58] looks a bit different it looks way
[12:01] smoother much more rough because I use
[12:05] different settings on it the reason I do
[12:07] this is as artists we always try to go
[12:10] from rough and large shapes and really
[12:13] you know define how these are supposed
[12:16] to look like or how we want them to look
[12:17] like and then work ourselves through to
[12:20] the final tiny granular details on our
[12:23] environments what I do next is I'm
[12:27] adding a flat surface which has a little
[12:30] bit of bumpiness
[12:31] to it I am basically blending these two
[12:33] in to improve the balance between hills
[12:38] and flat land in the next step
[12:43] I'm doing what we have already done in
[12:46] previous examples I'm adding noise and
[12:49] I'm eroding it down I'm adding noise
[12:51] again and I'm eroding it down so I do
[12:53] that twice you see up there the noise
[12:55] blend erosion noise blend erosion in the
[13:03] next step this is not very visible but
[13:06] let's look at the top left
[13:07] mmm Hill over there you see how we are
[13:12] adding this sand layer at the bottom of
[13:14] the slope like like wind has a blown
[13:17] sand against the slope so this is that
[13:20] one but I kind of like the idea and take
[13:24] it to more extreme levels so I decided
[13:27] to basically utilize a shadow node so
[13:34] I'm just to explain quickly imagine
[13:37] there's a Sun on the top left corner and
[13:39] it would cast a shadow to the right of
[13:41] every single hill right that kind of
[13:43] makes sense and we can use this
[13:45] information to create a mask and then
[13:48] blur everything that's in that area
[13:51] towards the certain direction that
[13:53] basically gives us that desert dune like
[13:56] dunes like effect this is again achieved
[14:00] by using the shadow node in combination
[14:02] with a blur overall I really like the
[14:06] shapes of this it has a really nice
[14:07] balance between noisy high-frequency
[14:11] detail and flat shapes that provide for
[14:13] a little bit more IRS the next detail
[14:18] this isn't really super visible what you
[14:21] kind you can kind of see it right again
[14:25] we are simply utilizing a noise we're
[14:29] adding it everywhere where there are
[14:31] slopes and then we're blurring it down
[14:33] the slopes I want to create the I want
[14:39] to create details that look like the
[14:42] wind that is blowing through that
[14:43] environment has certain irregularities
[14:45] to it and therefore adding adding tiny
[14:50] bumps and crevasses to our sand slopes
[14:57] the next step is another detailed step
[15:01] as I'm overall quite happy with the
[15:02] large shape so I won't won't try to
[15:04] touch them or destroy them any further
[15:07] this one is adding a little more bumps
[15:12] like this little tiny bit of granular
[15:14] detail and this is all height
[15:16] information whatever I put into this
[15:18] pass you guys will see in the game so
[15:22] every single tiny bump I add in here you
[15:25] will actually see as a bump on the
[15:27] environment you see how this one is
[15:31] getting really noisy and detailed this
[15:35] is the very very last bit of fine
[15:39] granular noise I'm adding here you see
[15:44] that the nodes at the top left have
[15:46] suddenly changed to another color this
[15:47] is not the height information anymore
[15:49] this is the normal map information this
[15:51] is surface detail that will be visible
[15:54] to you guys but will not be added to the
[15:56] height map you know the map that defines
[15:58] how how the elevation is looking like
[16:01] the reason for that is we don't want you
[16:04] to we don't we don't want it to be way
[16:09] too noisy and bumpy whenever you guys
[16:11] drive around with a cyclone and you know
[16:13] beyond cobblestones all the time that
[16:15] would kind of suck so we have other
[16:18] methods of adding that detail without
[16:21] breaking the fun for you okay now the
[16:25] height map is done we can move on to
[16:27] texturing it this is quite easy over
[16:32] time whenever the graph is done it's
[16:34] getting quite big and you have set up a
[16:37] lot of masks that you can use later on
[16:41] to actually do your texturing so what we
[16:44] do is we define certain color palettes
[16:46] and reusing this those masks we can
[16:50] apply these colors to certain areas of
[16:52] our ecosystem here to create a nice
[16:55] looking texture so here I am basically
[17:01] adding another hue of sand to create a
[17:03] bit mist coloration to avoid having the
[17:07] entire ecosystem look too
[17:09] flat in the next one we're taking all
[17:13] the rocky or yeah the rocky surface
[17:17] that's still show details coming from
[17:20] our erosion past back then and coloring
[17:23] them in proper cliff like in a cliff
[17:26] like color palette something more rocky
[17:29] we're adding another layer of noise but
[17:32] at this point I noticed well I'm adding
[17:35] too much of noise it's getting too noisy
[17:36] so it's not as readable anymore so I'm
[17:39] knocking it a bit back without
[17:42] destroying it completely so I'm
[17:44] basically reducing it by 80% and to give
[17:49] it a little bit of a detail something
[17:53] otherworldly I'm adding this crazy blue
[17:55] to it because I can alright so this is
[18:04] our final ecosystem that we have Chris
[18:07] just created in substance designer a
[18:09] couple more views of it right but again
[18:18] I told you guys that I can basically
[18:20] take any single node and basically
[18:22] change it up to create variations of my
[18:25] ecosystem right so let's take the first
[18:29] three colors that we that we chose or
[18:31] basically the entire sense that we have
[18:34] laid down to our ecosystem and and just
[18:37] recolor that one and now we get
[18:39] something like this simply by changing
[18:41] one node we can change the entire look
[18:43] and feel of that environment suddenly it
[18:47] feels less more or less barren but much
[18:50] more friendly almost like a jungle II
[18:52] place or this one which could be a
[18:56] volcanic you know place that where where
[19:01] lava flows through it or something like
[19:02] that okay do you guys remember our snowy
[19:07] mountain from back then we can of course
[19:09] apply the same thing here
[19:22] time to jump in the editor cool so what
[19:26] we'll do now is jump into the editor so
[19:37] what I've prepared already right we have
[19:39] created this ecosystem together I'm
[19:42] gonna paint down that height map that we
[19:44] have produced right so I can take this
[19:46] brush and just paint down on my planet
[19:48] this is actually a planet the camera is
[19:54] set to some very very slow sea all right
[20:02] and now we can jump down to the surface
[20:07] see this is how our height information
[20:10] looks like on the planet now but of
[20:15] course we have created a color so we
[20:16] will have to add it to our environment
[20:20] we can do so by adding the textures that
[20:24] we have created all right there's the
[20:27] color the blue looks kind of cool I
[20:31] really like the idea but if we look at
[20:39] basically if we zoom down to the surface
[20:43] you see we get the default materials
[20:45] that come from our editor and if i zoom
[20:47] out a little more it really isn't
[20:50] holding up with all the detail because
[20:52] our ecosystems are only a 1,024 pixels
[20:58] wide by 1024 pixels big and an ecosystem
[21:05] can be around 3 to 6 kilometers wide so
[21:11] there is really not enough pixels for us
[21:14] to to provide you guys with all the
[21:16] details and and make it believable what
[21:21] we can do is at the distance textures
[21:24] begin that we talked about previously or
[21:27] and at the beginning of the presentation
[21:28] right
[21:32] so these textures are really meant to
[21:34] add in that detail that we're missing
[21:38] let's jump to another spot and zoom out
[21:47] okay that looks good right the distance
[21:49] textures are taking over I'm zooming out
[21:51] then the ecosystem textures are taking
[21:54] over I'm gonna do the reverse this is
[21:59] good good good good all good all right
[22:08] but as I have created an index map for
[22:11] this ecosystem as well which helps me to
[22:14] lay out ground materials right I can
[22:18] basically fill up these slots with the
[22:21] ground materials which I'll do now
[22:24] all right let's do the same cool cool
[22:29] cool cool cool or good back to the
[22:33] ground
[22:33] all right awesome seems like all the
[22:37] views so basically whenever you fly
[22:39] towards the ecosystem you fly down to
[22:42] the ecosystem you see some kind of
[22:44] detail at all times without getting too
[22:46] blurry until you reach the ground yeah
[22:52] so what I want to show you here is a
[22:58] little something that players usually
[23:02] don't get to see which is a debug mode
[23:06] for that map that I was talking about
[23:09] which is the index map you see it says
[23:12] eight seven six five four it's not a
[23:15] countdown it's really just telling us
[23:19] this is the fourth slot of your ground
[23:21] materials the fifth slot of your ground
[23:22] materials and such what I want to point
[23:25] out here is the way they blend together
[23:28] is really quite simple
[23:30] right now it's splotches of ground
[23:33] materials and I want to give that one a
[23:36] bit more definition so what we can do is
[23:38] we we have something in our editor I'm
[23:42] not going to explain it in further
[23:43] detail but it basically
[23:46] and mixes all these channels up to
[23:48] provide us with even more breakup cool
[23:54] right so I'm I'm showing you guys this
[23:57] in in this debug view because whenever
[23:59] we use sent a sand texture next to a
[24:02] sand texture this might not be very very
[24:04] visible so this one makes it quite clear
[24:15] next up is object so as you see texture
[24:23] wise or entire ecosystem kind of works
[24:25] but it's kind of empty right that's
[24:27] boring so let's add a couple object
[24:29] presets to it first we add the larger
[24:35] shapes as I mentioned to your before
[24:38] during the ecosystem presentation or a
[24:41] creation process we're working on the
[24:46] big stuff first on the big silhouettes
[24:48] first and then we work ourselves through
[24:50] through the details so we add these
[24:55] larger piles then let's try to see
[25:02] what's up with these blueish areas in
[25:05] our ecosystem all right I'm gonna add a
[25:09] couple weird-looking plants to it right
[25:14] okay all right this is probably not
[25:20] gonna do the cup mmm okay I can see them
[25:27] working from a distance already but I'm
[25:30] not too happy with these cliffs so I'm
[25:32] gonna add a bit more definition to the
[25:33] cliffs using assets of course as this is
[25:37] what we're doing right now okay okay
[25:45] this is starting to look better now that
[25:49] we have to find all our main objects we
[25:52] can really go in and detail things out
[25:54] right so let's snap to a random location
[25:58] and see what we can add in terms of
[26:02] detailed meshes okay cool we added a
[26:08] couple pebbles and grass it really adds
[26:11] up to the ground materials some things
[26:13] of course as it's a flat surface with a
[26:15] texture on it it cannot give us the nice
[26:19] silhouette and and and depth that we
[26:21] would like to have whenever we build
[26:22] these ecosystems but those meshes really
[26:27] help us out
[26:28] and they weld together all the other
[26:33] objects that sit on top of the larger
[26:35] structures together so whenever you have
[26:37] a rock for example you expect tiny rocks
[26:39] to be scattered around it transition
[26:42] transitioning into some kind of gravel
[26:43] and really creating this nice transition
[26:46] from ground to to the object itself
[26:53] all right let's see what we can add here
[27:01] good so and as I say as I told you
[27:06] before right so if we were just to leave
[27:09] these alien plants cacti kind of looking
[27:15] flora just by itself it would look kind
[27:18] of weird it doesn't have a context it's
[27:20] just sitting on a blue surface right but
[27:22] this this grass here it's really giving
[27:26] it the context that needs to really work
[27:28] fine in the environment same with this
[27:33] plating here it really bumps up the
[27:35] bumps up the terrain detailed by a lot
[27:38] and makes these guys sit much better in
[27:42] the scene all right
[27:53] cool so this is the very last object set
[27:59] that we added right you see that the
[28:03] detail has become quite detailed now if
[28:06] i zoom out you never get the feeling of
[28:11] or you never get to see a very blurred
[28:14] out environment so this is working quite
[28:22] fine but I was kind of jumping in
[28:26] between places so let's have a look at
[28:28] the entire process from this view again
[28:32] we added our height map we added our
[28:36] texture we added our distance textures
[28:41] we added our grant materials we did
[28:45] additional breakup we added all our big
[28:49] objects and all our detail objects
[29:01] let's get back to the textures and now
[29:05] again back to everything else like the
[29:08] final result so this this would be the
[29:11] before and after right this is how we at
[29:14] CI G go through and through our
[29:16] environments and try to build them up
[29:18] step by step whoa
[29:36] all right
[29:38] let's have a run through our environment
[29:40] what do you guys want to see
[29:47] it's I I seem to have forgotten to set
[29:50] the gravity on the plan
[29:54] let's see how that behaves
[30:01] jump over it
[30:04] okay cool I think this works quite fine
[30:07] what do you guys think
[30:08] [Music]
[30:52] all right I would say we have produced
[30:56] something really cool I'm not sure if we
[31:00] we're going to put this in the game or
[31:01] not but I hope you guys liked it I hope
[31:08] it gave you a little bit more of an
[31:11] understanding for how we create
[31:13] ecosystems and ultimately planets right
[31:16] yeah thanks a lot thank you guys
[31:19] [Applause]

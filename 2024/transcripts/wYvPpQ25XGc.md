# CitizenCon 2954: Brave New Worlds

**Video:** https://www.youtube.com/watch?v=wYvPpQ25XGc
**Date:** 2024-10-23
**Duration:** 1:23:49

## Transcript

[00:00] [Music]
[00:10] hello citizen
[00:12] [Applause]
[00:14] KH G citizen
[00:18] con hola citizen con ni citizen KH and
[00:24] hello Manchester I'm not going to need
[00:27] this anymore cool I am Ben or as some of
[00:30] you know me I am Bal on Spectrum today
[00:34] we will talk about Brave New worlds this
[00:37] is pyro 2 monox it's a Barren Planet not
[00:42] really habitable now since the advance
[00:45] of our planet Tech we've always allowed
[00:47] players to circumnavigate planets and
[00:51] move from orbit to ground seamlessly
[00:54] explore complex areas in intricate
[00:56] detail now with server meshing we're
[01:00] going to need a lot more locations for
[01:02] Missions and destinations for more
[01:04] life but there's a major question that
[01:07] has always followed this project since
[01:09] the beginning of alpha
[01:10] 3.0 how are we going to make a large
[01:13] number of planets and systems how are we
[01:16] going to meet the Fidelity Benchmark
[01:18] we've
[01:19] established in this technology update we
[01:22] bring life to lifelessness even to
[01:25] monarchs we take the physical
[01:27] representation of the terrain the
[01:29] geology the atmosphere the climate and
[01:32] the environment to create accurate
[01:34] biomes that spring naturally from the
[01:37] Collision of all these environments
[01:39] coherent denser biomes that follow the
[01:42] laws of nature that we encode into Data
[01:46] data that we then leverage to place
[01:48] flora and fauna yes but also settlements
[01:52] buildings alien and human life in a
[01:55] planetary context this creates worlds
[01:57] that are scientifically plausible r in
[02:00] gameplay
[02:01] opportunities we want you to find
[02:03] Adventure just by going around the
[02:05] planets without a Quantum point we want
[02:08] you to find actions along your path for
[02:11] this we are changing how we made the
[02:13] game we are scaling how we made the game
[02:16] in all areas this is not just a planet
[02:19] Tech update this is a collection of
[02:22] systems that we
[02:23] [Music]
[02:28] call J
[02:34] now to help me explain all this nice
[02:37] work and this nice technology let us
[02:39] kick us off and I wome welcome our very
[02:42] own Ally Brown and will Hine for phase
[02:45] one of Genesis
[03:04] yeah hello Star Citizen yes hello
[03:07] citizen KH
[03:10] yeah so let's start with some
[03:12] introductions this guy over here is Will
[03:14] Hayne AKA water guy or river
[03:18] guy and this lovely gentleman is Ali
[03:20] Brown Pusher of pixels
[03:23] extraordinaire and we're here to tell
[03:25] you about phase one of Genesis which
[03:26] we're entitling the laws of nature and
[03:29] this involves revolves around the
[03:30] fundamental approach we use to build our
[03:32] planet and is the literal foundation for
[03:34] everything else we're going to talk
[03:35] about in this talk today now it centers
[03:38] on datadriven physically based rules
[03:41] that we aim to realistically emulate
[03:43] nature and its incredible diversity
[03:45] before we dive in a bit deeper let's
[03:47] just recap on some of the things we
[03:48] already have on our planets so here you
[03:50] can see our lovely atmosphere and our
[03:52] Cloud rendering which can provide some
[03:54] spectacular views we have a on the-fly
[03:57] terrain generation which is no loading
[03:59] screen in our game which we're very
[04:01] proud of then we have our scattering
[04:03] system that can populate these planets
[04:05] with many different diverse biomes and
[04:08] we've been setting quality benchmarks
[04:10] for each of these biomes as we come
[04:11] across them one by
[04:13] one but what we have isn't perfect this
[04:17] scene on Microtech it looks great but
[04:20] it's not getting the same density that
[04:22] you'd expect from a real Pine Forest
[04:24] that's one of the things we want to
[04:25] solve the other if I take you to the
[04:28] other side of micr tech you'd be excused
[04:30] if you thought we just turned around and
[04:32] looked at a different part of the forest
[04:34] why is that well this is because
[04:36] currently our artists create slices of
[04:39] biomes in great number and then they
[04:41] distribute them across the planet using
[04:43] humidity and temperature properties each
[04:46] size looks great in isolation as you've
[04:48] seen as you've explored but this is not
[04:50] the solution to give us varied and
[04:52] natural biomes across an entire planet
[04:54] additionally just using humidity
[04:56] temperature limits to only two degrees
[04:58] of variation and that's not enough for
[05:01] the sorts of planets and worlds that we
[05:02] want to create and for you to
[05:04] explore so how are we going to scale up
[05:06] our planet Generation Well as I said
[05:08] before we're going to start with
[05:09] physically based rules that drive
[05:11] everything we want nothing to feel
[05:12] random on these planets we want no
[05:14] limitations on the number of biomes we
[05:16] want infinite biomes that are
[05:17] continuously changing across the planets
[05:20] and we want extreme density and we want
[05:22] to maintain or exceed all of the quality
[05:23] levels we've set with our existing
[05:25] biomes and most importantly we want it
[05:27] to be scalable so that we can really
[05:28] scale up to the level of content that
[05:30] the designers are expecting and from
[05:32] your perspective we want you to be able
[05:34] to truly explore and find unique playing
[05:36] opportunities everywhere on our planets
[05:38] so to start this we're going to need
[05:40] more data so if we see here some of our
[05:44] existing data sets on our planets we
[05:45] have temperature which we Define locally
[05:47] and globally and humidity and that's it
[05:49] for now with Genesis we add many other
[05:52] data sets such as the geology type the
[05:55] soil type and then we also go for things
[05:58] like the soil de depth and the quality
[06:00] and the nutrients and many other
[06:02] properties all drive this complex data
[06:04] set that we use to build rule sets on
[06:07] that each individual asset can describe
[06:09] how it should work with
[06:12] them we're going to put something
[06:14] together and show you some demos today
[06:15] using some of the assets that you've
[06:17] already know and love in the Pu although
[06:20] you might see some new stuff later we'll
[06:21] save that what you're going to see is a
[06:24] vertical slice of development it's very
[06:26] early stages very work in progress you
[06:27] might see some bugs but that means it's
[06:30] only going to get better so be excited
[06:32] the number one challenge with planets in
[06:34] our game is scale in no other context do
[06:37] you need a planet to look great From
[06:39] firstperson perspective when you're
[06:40] stood among the trees you need it to
[06:42] look great when you're in a spaceship at
[06:44] a Quantum marker miles away and
[06:47] everywhere in between there are no
[06:48] loading screens you see everything we
[06:50] cannot afford for it to look bad in any
[06:52] of those scenarios so let's start from a
[06:55] ground perspective demo number one let's
[06:58] have a look
[07:00] [Music]
[07:24] [Applause]
[07:29] [Music]
[07:53] [Applause]
[07:54] [Music]
[07:58] so how do we make
[08:04] that thank you thank you so let's talk
[08:08] about first what's underneath it all the
[08:10] ground
[08:13] so so in our previous terrain Shader we
[08:17] just switched between different ground
[08:19] textures depending on climate and didn't
[08:20] really consider the unique properties of
[08:22] each type now the terrain Shader is
[08:24] based around four layers we always first
[08:26] consider bedrock at the bottom of it all
[08:28] then we're approach we add layers of
[08:30] soil of different types we then add
[08:32] debris where appropriate whether it be
[08:34] pine needles Dead Leaves Etc and then
[08:36] when it gets cold we add snow each of
[08:38] these layers has unique shading
[08:40] properties and unique transitions
[08:41] between them because we do this all in
[08:43] one Shader we're able to achieve that as
[08:45] well as being performant we can also use
[08:47] things like water saturation to darken
[08:49] and tint the soil and other properties
[08:51] to make it look more realistic but
[08:53] that's not what filled most of the
[08:54] screen in that demo that's the
[08:56] vegetation like what Ali said we want to
[08:58] emulate the laws of of nature so in
[09:00] Genesis we have rule sits for every
[09:01] asset that tells it how to respond to
[09:03] our Rich data whether it be soil type
[09:05] water availability temperature geology
[09:07] or whatever we assess the viability and
[09:10] the Vitality of each asset and compare
[09:12] them to decide what is likely to spawn
[09:14] in a natural environment this
[09:15] automatically creates the cohesive
[09:17] environments that you saw in that clip
[09:19] not handcrafted anymore no one has told
[09:22] those Ferns and those Pines to be like
[09:24] that they each want to be like that and
[09:26] that's what we're doing multiple assets
[09:28] coming together to create a unique
[09:30] microbiome what about trees then same
[09:32] thing they have a larger requirement for
[09:34] Space they have a larger requirement for
[09:36] nutrients that's how you see the
[09:37] distribution and it's how it all works
[09:40] let's meet the Flora that came together
[09:41] to beat That Forest to beat That Forest
[09:43] to make that forest and have a look at
[09:45] some of their properties now just to
[09:46] knowe they are all going to look quite
[09:48] similar because we've already seen them
[09:49] in the same place so they must be
[09:50] similar so building BL like grass and
[09:53] common grass medium amounts of sunlight
[09:55] we had ferns see it's a much lower
[09:57] requirement for sunlight we had seix
[10:00] bushes forming our under Bruth and we
[10:02] had Pines of course and multiple
[10:04] variations of Pines diversity is driven
[10:07] by competition everything has ideal
[10:09] conditions which affects its
[10:10] competitiveness we also have additional
[10:13] control over this in the form of
[10:14] dominance which allows us to make one
[10:16] asset more competitive and more dominant
[10:19] than another which is just what we see
[10:20] in nature everything is constantly
[10:22] fighting for resources and of course
[10:24] light because we spawn these assets in a
[10:26] hierarchy it's easy to propagate shade
[10:28] data down over the distribution of the
[10:30] assets so that we can control ones that
[10:32] prefer or reject shade often like these
[10:35] ferns they can spawn in light but they
[10:37] are outcompeted in those scenarios most
[10:39] of the time so you will see a rogue Fern
[10:42] or a place where there's no seed for a
[10:43] specific asset you might start to get
[10:45] this coming
[10:46] in let's take a look from a larger
[10:48] perspective again
[10:53] [Music]
[11:07] [Applause]
[11:09] [Music]
[11:13] [Applause]
[11:18] [Music]
[11:28] [Applause]
[11:30] [Music]
[11:30] [Applause]
[11:33] [Music]
[11:46] [Music]
[11:59] so to take a few some of the things we
[12:01] saw in that clip let's talk about rocks
[12:04] first so anyone that's done a lot of
[12:05] ground driving and ground Vehicles might
[12:07] have seen that our rocks sometimes feel
[12:09] a little bit randomly scattered and be
[12:11] quite an obstacle sometimes so in this
[12:13] clip you saw that the the rocks are no
[12:15] longer randomly scattered and they're
[12:16] now BL placed based on physically based
[12:18] rule sets and this logical grouping is
[12:21] is achieved via erosion simulations
[12:23] which we run offline to build localized
[12:25] data maps and they describe the size of
[12:27] the Aggregate and rocks and the it and
[12:29] where they should naturally form and
[12:31] that means we get things like these
[12:32] natural clusters or Boulders at the
[12:34] forest edge underneath the cliff side
[12:36] and on that note you might have noticed
[12:37] that the cliffs have been dramatically
[12:38] improved in how they shade we also get
[12:40] see things like the natural clumping of
[12:42] vegetation caused by seed dispersal this
[12:45] is controlled per species so we can get
[12:47] better emulation of their unique growth
[12:48] patterns and create much more realistic
[12:51] environment and we also calculate the
[12:53] slope aspect which is the exposure to
[12:55] vegetation to solar radiation and other
[12:57] environmental factors and this allows us
[12:59] different species to flourish in
[13:01] different conditions as we can see on
[13:02] different sides of this
[13:04] Valley then over a larger scale we
[13:06] calculate the age and vitality of each
[13:08] tree individually to drive exactly how
[13:10] high they should be but also the color
[13:12] of their
[13:14] leaves now this isn't the only thing
[13:16] that will drive the color of the leaves
[13:17] we're going to introduce the concept of
[13:19] seasons to the game and this will mean
[13:21] our planets will evolve through the year
[13:23] and we'll be able to shed leaves from
[13:25] trees and have the grass River in winter
[13:38] so as you're starting to see all these
[13:40] rules all this data is all coming
[13:42] together to create what we call truly
[13:44] emergent biomes let's have one more look
[13:47] at how this varies over a much larger
[13:49] scale
[13:51] [Music]
[14:05] [Applause]
[14:10] [Music]
[14:33] [Applause]
[14:35] [Music]
[14:39] [Applause]
[14:46] [Music]
[14:54] [Applause]
[14:56] [Music]
[14:56] [Applause]
[14:58] [Music]
[15:12] [Music]
[15:18] [Applause]
[15:19] just like in real life oh thank
[15:25] you just like in real life our areas
[15:28] should vary even by traveling a few
[15:29] kilometers if you get in a helicopter
[15:31] and fly over the Alps it all looks a bit
[15:33] snowy but when you look closer it's
[15:35] constantly changing and we're now able
[15:38] to accurately represent that with our
[15:40] changing data another very important
[15:42] factor to mention is the distant look in
[15:44] this screenshot you don't see a single
[15:46] tree and yet the tree the terrain is
[15:49] still green we previously did that with
[15:52] artist made lookup tables that told the
[15:54] planet what color to be at what position
[15:56] but that wasn't going to work with all
[15:57] our new data and are far more comp
[15:59] spawning now we have a systemic solution
[16:01] the planet Shader is able to
[16:03] intelligently evaluate what's going to
[16:05] spawn there using the same rule sets
[16:06] that cause the assets to spawn a when
[16:08] you get there that means we can sample
[16:10] the sort of color that that is going to
[16:11] project onto the orbital View and use it
[16:13] we get a far better accuracy from the
[16:16] result together by creating rules and
[16:19] authoring data that works we create a
[16:21] continuously varying planet that sets
[16:23] the scene for the incredible exploration
[16:25] gameplay I know you guys are going to
[16:26] have but how have we done this without
[16:29] compromising on
[16:31] performance so yeah with all the new
[16:33] data sets and these physically based
[16:34] spawning rules you're probably wondering
[16:36] how is this going to handle in your CPU
[16:38] we don't want to melt anyone's CPU so
[16:40] we've redesigned all of this Tech to
[16:42] work much more efficiently than before
[16:44] and now it can run on many CES this
[16:46] allows it to be run perfectly well on
[16:48] both the CPU and the GPU so we've
[16:50] redesigned our framework so that we can
[16:52] run it at both and swap between them
[16:54] freely now the benefit of this is we can
[16:57] do things like first off move the
[16:58] terrain system to the GPU and we've now
[17:00] done that to get some incredible
[17:02] performance improvements but we then
[17:04] also cached the results in some we
[17:06] called a virtual terrain texture I'll
[17:08] give you a quick demo of this now this
[17:09] is now vastly faster than the previous
[17:11] system but it also allows us to generate
[17:13] the terrain in much higher resolution
[17:14] which means all the popping you can see
[17:16] on the mountains as we're approaching
[17:18] all of that should be completely
[17:19] eliminated on the right hand side of the
[17:20] screen
[17:22] [Applause]
[17:34] with the extra Headroom we've gained by
[17:37] making our terrain system more efficient
[17:38] we've been able to introduce some
[17:40] improvements including high resolution
[17:42] ground textures proper blending between
[17:44] surface types and of course better
[17:46] tiling if you're familiar with any of
[17:48] our planets we've taken off all the
[17:49] assets so you can see the issue and now
[17:52] how it looks you don't see those lines
[17:54] going at all
[18:03] [Applause]
[18:08] and one
[18:14] more with the terrain data cast on the
[18:16] GPU like Ali said we can perform the
[18:18] scattering there too which is
[18:20] significantly faster all those
[18:21] algorithms that we've used to generate
[18:23] those first bits could run there without
[18:26] being more expensive on your CPU and it
[18:28] also means results are directly there on
[18:30] the GPU we can render straight from them
[18:32] that allows us to have dramatically more
[18:34] density in our new system we can render
[18:36] objects directly without having to go
[18:38] via the CPU every frame we also cull at
[18:41] different levels of granularity with
[18:42] bigger groups in the distance and
[18:44] individual assets up close just as a
[18:46] demonstration this is the sort of
[18:48] density you can expect on Microtech
[18:50] today and in a second we'll flip over to
[18:53] what you can expect from the new
[18:54] upcoming Tech
[19:06] in a second we're going to turn on the
[19:07] culling group Stog so you can see these
[19:09] are the groups that we create of those
[19:11] trees and of the terrain and as we get
[19:13] closer we shrink them so we're more
[19:14] intelligently rendering what we need
[19:17] without having to assess each tree
[19:19] individually all the way down to the
[19:21] ground
[19:29] so to recap some of the things you've
[19:31] seen here in phase one we had datadriven
[19:34] rules based on physically based data
[19:36] generating emergent biomes that
[19:38] continuously vary across our planets to
[19:40] get infinite possibilities and we've
[19:42] achieved this with much greater density
[19:43] than before and much faster rendering
[19:46] and we also achieved seamless
[19:47] transitions from ground to space with
[19:49] zero popping so now that we've got all
[19:52] this Tech it's time to talk about how
[19:54] art might make use of this so for that
[19:56] I'll hand you to the next phase towards
[19:58] Sebastian
[19:59] sha thank you guys thank
[20:05] you no thank
[20:11] you wow thank God there's only 20 of you
[20:14] otherwise it be
[20:18] nervous right thanks for having me I'm
[20:21] here on behalf of the planet content
[20:22] team and we're very excited to finally
[20:24] show you some of the things we've been
[20:26] working on um as you've just seen from
[20:28] and Ali the system keeps growing both
[20:31] complexity and capability so our
[20:33] libraries have to grow alongside
[20:36] it wait should I click no
[20:43] um no I should
[20:49] [Applause]
[20:50] click oh there we go so our goal of the
[20:54] content is to provide our goal is to
[20:57] provide the content that the system
[20:58] needs to populate every corner of every
[21:00] planet with realistic environments and
[21:03] this content is what this phase of
[21:04] Genesis is all about emergent
[21:08] biomes for our first example of today
[21:11] it's almost a shame will left because
[21:12] like it's about moisture but let's look
[21:14] at very high moisture and medium to high
[21:16] temperature
[21:26] [Music]
[21:29] w
[21:39] [Applause]
[21:44] [Music]
[21:50] [Music]
[22:01] there
[22:06] [Applause]
[22:24] [Applause]
[22:51] thanks that did look really good so for
[22:54] swarms we obviously made vegetation that
[22:55] feels at home in or near water but
[22:57] before we dive in allow me to give you a
[22:59] quick primer on our approach to
[23:01] authoring plants most species can
[23:03] survive in a fairly wide range of
[23:05] climate conditions but will only Thrive
[23:06] the conditions ideal to support this
[23:09] concept we author our vegetation assets
[23:11] to describe the full growth cycle of a
[23:13] species if the conditions aren't ideal
[23:15] they may not grow the full maturity or
[23:17] look their best but the species can
[23:18] still exist so let's have a closer
[23:22] look for The Waters Edge we made plants
[23:25] like this alterat Tera and the iris we
[23:27] also need the Aquatic one to float on
[23:29] the water surface like the water Lio
[23:31] peled this Willow and the one after a
[23:34] Chinese T tree while comfortable near
[23:36] water we can also use to replace some of
[23:38] the more aged SES used to seeing
[23:40] elsewhere in the
[23:41] game the last one it's it's taking a bit
[23:43] longer now but um the last one I'm going
[23:47] to
[23:48] wait the last one you may not see used
[23:50] much in other biomes but it's a very
[23:52] iconic one for the swamp the Bal Cyprus
[24:07] so another feature we need for make a
[24:09] swamp experience a proper one is water
[24:11] injection over the last year or two a
[24:13] lot of work has gone into improving the
[24:15] way our water reacts and renders so
[24:17] naturally we wanted to make a biome that
[24:19] highlights those advances let's have a
[24:21] brief look at what it's like being
[24:22] inside the
[24:26] swamp as you walk through swim through
[24:28] the water you may come across obstacles
[24:30] like logs or debris floating on the
[24:32] surface they will react to the player
[24:34] character and can be pushed out of the
[24:40] way we were also pleasantly surprised
[24:43] when we first saw how the water
[24:45] simulation systemically affects aets
[24:47] floating on the water surface making for
[24:49] some really immersive moments
[25:00] now before I get to our Second Use case
[25:01] of the day a quick disclaimer obviously
[25:04] all the things you're seeing here today
[25:05] we still actively working on but this
[25:07] one in particular it's a bit early in
[25:09] the process so let's have a look at
[25:11] extreme option density next with the
[25:13] data saying we should have high rainfall
[25:14] and sunlight year round it's the perfect
[25:16] condition for our next biome to appear
[25:28] woo
[25:39] [Music]
[26:01] [Applause]
[26:02] [Music]
[26:09] oh
[26:15] [Music]
[26:31] [Music]
[26:35] [Applause]
[26:36] [Music]
[26:55] considering everything you've just seen
[26:57] is still very much working progress the
[26:58] gameplay capture team really did a great
[27:00] job showing our work in the best
[27:01] possible light with jungles we want to
[27:04] explore the concept of vertical
[27:06] sertification as they are the prime
[27:08] example for that what it means is that
[27:10] you have horizontal layers of
[27:12] microbiomes defined by the uh defined by
[27:16] the species that thrives with the amount
[27:18] of sunlight and rain that still reaches
[27:21] there the floor herb and brush layer we
[27:24] could almost do before obviously missing
[27:26] the density but now we also have the
[27:29] option to add variation to the tree
[27:31] layer by dynamically spawning epif fites
[27:33] like Lanas orchids or prats attached to
[27:37] drunks and canopies of other
[27:50] aets with this and improved density is
[27:53] what will finally allow us to make
[27:55] convincing jungles and the best part is
[27:57] we don't even need a lot of different
[27:59] species to create what we refer to as a
[28:01] canvas of a biome the idea being that we
[28:03] can vary what kind of forest you're in
[28:05] by adding or replacing the plants that
[28:07] visually stand out the
[28:10] most now to get a start on our
[28:13] certification we made EP fights like the
[28:15] aprum and the Spate including a version
[28:18] for your
[28:19] have then obviously you need jungles for
[28:21] uh leanas for a
[28:23] jungle and we also made the careers
[28:25] which add character to the herb and tree
[28:27] layer
[28:31] for tall trees we decide on a fairly
[28:33] generic rubber tree as its different
[28:35] growth stages serve as a nice foundation
[28:37] for All Height levels and that's pretty
[28:39] much it what we need to make a pretty
[28:41] good base for
[28:49] Jungle now for a third and last use case
[28:53] let's pretend the data indicates regular
[28:54] rainfall and motor temperatures this
[28:57] climate would support a lot of different
[28:59] forests but we also wanted to use this
[29:00] opportunity to explore extreme scale and
[29:03] that just really cool
[29:07] [Music]
[29:38] on
[29:55] [Music]
[29:59] [Applause]
[30:00] [Music]
[30:19] now for this one we first looked at the
[30:21] different Redwood biomes on Earth and
[30:23] try to analyze what the most defining
[30:24] species of them are with this
[30:26] understanding we then decided the
[30:28] following plants to allow for a fairly
[30:29] Universal Redwood forest they will allow
[30:32] us they will easily support variation
[30:34] across continents and
[30:36] planets a fairly common family of
[30:38] species for the ground levels of all
[30:39] redwoods are ferns in our case a Sal
[30:42] Fern we also made a huckleberry variant
[30:44] to provide some visual density for the
[30:46] sh layer to add some Jurassic Wipes we
[30:49] made tree FMS as they can be found in
[30:50] New Zealand's Redwood forests the most
[30:53] important one though obviously the quers
[30:55] and they ended up being one of our most
[30:57] complex sets yet
[30:58] as it turns out they can grow to be
[31:00] fairly ridiculous in
[31:03] size it keeps
[31:08] [Applause]
[31:17] going now one thing our games Fage s Sly
[31:21] missing is the ability to properly react
[31:24] to what's happening around it the goal
[31:26] here is to unify all forces from all
[31:28] sour sorry for the horrible rhyme um all
[31:32] sources from all all forces from all
[31:34] sources Wind characters and creatures
[31:36] ships explosion and whatever else and
[31:38] have the vegetation behave
[31:40] accordingly now as part of our Tech
[31:43] improvements we will be implementing a
[31:44] GPU based simulation that's fit for our
[31:47] game scale for now we set up the ferns
[31:50] with our existing CPU based one to
[31:52] better visualize what it would feel like
[31:54] to walk amongst those giants also with
[31:57] the biom our planets now being defined
[31:59] by where an individual object wants to
[32:01] appear you can expect a lot more happy
[32:02] accidents by having species invade
[32:04] different
[32:05] biomes um making for some unique
[32:08] locations hopefully
[32:23] surely now before I get to this appear
[32:25] of stage I just want to say a big thank
[32:27] you to everybody involed D especially my
[32:28] team in Frankfurt for doing such amazing
[32:30] work and being all around great people
[32:32] and also all of you guys I really hope
[32:34] you have a fantastic citizen con this
[32:36] concludes this phase of Genesis so
[32:38] please welcome me into the stage so I
[32:40] can tell you all about the next
[32:52] one love you thank you hello citizen KH
[32:57] woo
[33:00] all
[33:01] right those new planets and biomes were
[33:04] pretty right but it's time from phase
[33:06] three civilization to give you some
[33:08] stuff to
[33:11] do so let's talk about location density
[33:15] we've emulated nature as well as we can
[33:18] to make sure our planets are physically
[33:20] based and realistic and our biomes are
[33:22] emerging but it's time to start
[33:24] populating the verse because where
[33:26] there's people there there lives and the
[33:28] structures they build so it makes sense
[33:30] that whenever you go and explore these
[33:32] planets that you find their lives and
[33:35] what's even more important is that when
[33:36] we make these structures that they use
[33:38] and follow the same rules as our biomes
[33:41] such as the jungles and the
[33:43] swamps but before we continue let's
[33:45] first take stock as to where we are now
[33:48] at the moment in the verse we have these
[33:50] custom beautifully made locations such
[33:53] as ghost Hollow we've got our
[33:54] distribution centers or even just some
[33:57] outposts and they' have all been
[33:59] handcrafted by our designers and artists
[34:02] to hit that Benchmark and they've been
[34:03] working directly on the
[34:06] planet
[34:07] however going forward this doesn't
[34:10] really scale with how we want to go
[34:12] forward with the game server meshing is
[34:16] about to arrive and we're going to have
[34:17] a way higher player count so those 73
[34:20] bunkers across stampton just won't cut
[34:22] it but in general it's also pretty
[34:25] Barren there's not much for you to
[34:27] explore in and find stuff out there so
[34:29] just no exploration gameplay you haven't
[34:31] really put your character to use for the
[34:33] way that you
[34:34] should so this means we need to go
[34:37] bigger which means we need to change our
[34:39] workflow and with any workflow means we
[34:42] need to First establish a new
[34:44] Benchmark so with our new Benchmark we
[34:47] are ensuring quality and improve on our
[34:49] previous work and make it even better
[34:52] and any location that you'll find needs
[34:54] to have its own unique personality and
[34:56] no repetition we don't want you to find
[34:58] the same location twice this also means
[35:01] that this is your exploration and your
[35:04] findings so when you go out there and
[35:07] explore with your Carrick or with your
[35:08] Corsair is that whatever you find you
[35:11] can share with your Orcs or with your
[35:13] friends as for it density if you fly
[35:16] down to the planet you we want you to
[35:19] find something let's say every 100
[35:20] clicks but also improve the mission
[35:23] experience so when you you stay more in
[35:26] the planet you're more immersed and you
[35:28] go from location to location just keep
[35:31] going so going forward we are
[35:34] modularizing all our existing locations
[35:37] and assets we basically making a library
[35:40] of buildings and layouts that we'll be
[35:42] using to no longer work directly on the
[35:44] planet the neat thing all these modules
[35:48] and assets can be iterated upon and
[35:50] tested right in the editor for all the
[35:52] designers and artists to ensure fun
[35:55] gameplay and interactive sandbox
[35:57] activity and also make sure all the
[35:59] mission stuff is there basically we're
[36:01] building a
[36:03] toolkit so let's look at some of the
[36:05] things that we need to keep in mind as
[36:06] we are making that toolkit first and
[36:09] foremost we've got our art style and
[36:11] branding we've got things like Frontier
[36:14] for our settlements we've got high-tech
[36:16] for the eer Emergency Shelters but also
[36:19] utilitarian like our bunkers and
[36:21] distribution centers the Richer the data
[36:24] the Richer these locations will
[36:26] be secondly they all have a function
[36:30] we've got mining for our mining outposts
[36:32] farming for the farm stats or just
[36:34] places where people live the function of
[36:36] the place will Define the way the place
[36:38] looks as well and its
[36:40] form and last but not least the people
[36:43] as well the faction and their loadouts
[36:45] we've got lawful people like the new
[36:47] citizens for prosperity in pyro unlawful
[36:50] such as Xeno Fred and sometimes not even
[36:53] no no one the place needs to look a bit
[36:55] you know derel and different places
[36:58] you'll find different
[37:00] people so now that we've made our
[37:03] toolkit and we've defined all this new
[37:05] stuff let's start building thousands of
[37:08] locations yes I said
[37:11] thousands So to avoid the same issue of
[37:14] working on directly in the planet I'd
[37:17] like to introduce to you
[37:26] starchitect but star allows us to do is
[37:29] directly on a planetary scale scatter
[37:31] all these new libraries and modules and
[37:33] assets and no longer work directly on
[37:35] the planet and it uses the same logical
[37:38] World set as our emerging biomes and we
[37:40] it also gives us full control over the
[37:42] data that we set on these locations so
[37:45] expect locations in places where they
[37:46] make sense let's kind of look at all
[37:50] these this new genesis data and all
[37:52] these new libraries and then Chuck it
[37:53] into St architect and see what it gives
[37:55] us
[37:59] as you can see we're now able to make
[38:01] full-size locations and they will look
[38:03] completely different based on where
[38:05] you'd find them the layouts are control
[38:08] controlled by the rules and it will
[38:10] reflect its place in the verse we've got
[38:13] Farms mining outposts but even our older
[38:16] locations such as the bunkers that you
[38:18] find on Stanton
[38:42] so let's look at an example and kind of
[38:45] use the tool to really you know make a
[38:47] location we can Define the rules as I've
[38:50] mentioned a couple times by now so for
[38:51] our mining Outpost it wants to be near a
[38:53] resource we can specify what this
[38:55] resource needs to be but we can also
[38:57] give a suggestions where sometimes you'd
[38:59] find it here and sometimes you wouldn't
[39:01] if the location has refineries it might
[39:03] want to be near water to refine the
[39:05] resources then secondly we can Define
[39:08] what buildings should be there so
[39:09] obviously we need mining buildings
[39:11] houses for people to live as well and
[39:13] even power buildings that we can
[39:15] leverage with the Resource Network the
[39:17] architect will intelligently figure out
[39:19] where the placees and what needs to be
[39:21] at the
[39:22] location next up Farms its rules well
[39:27] temperature not every plant can live in
[39:29] every temperature but the same with soil
[39:30] type only certain plants can be in
[39:32] certain grounds and then we can query
[39:34] the seed map to determine what plants
[39:36] you would find there what are the
[39:38] harvestables As for the targets again
[39:41] farm buildings obviously power buildings
[39:44] houses but even animals such as our
[39:46] beloved quasi
[39:48] grazers and last but not least thec
[39:51] chips we've got these all over the place
[39:53] currently rules well they'd be close to
[39:56] anti-air because I would be shut down
[39:58] but even in harsh flight conditions such
[40:00] as mountains or low visibility You'
[40:02] probably most commonly find them targets
[40:05] well crash ship parts of course
[40:08] sometimes you'd find the full remains of
[40:09] a javelin and the other time you might
[40:10] just find the nose of starf laying
[40:13] around
[40:15] so let's talk about coherency sure we
[40:18] could scatter all these locations
[40:20] everywhere on the planet and you'll find
[40:22] them in places they make sense but we
[40:24] can do better you don't just want to
[40:26] find an outpost completely on its own
[40:28] right we want to make sure it really
[40:30] feels like people have built their lives
[40:31] here
[40:33] so let's talk about some missing
[40:36] bits we want to tell tighter stories
[40:39] such as the people's lives but also
[40:41] logical exploration if I find one thing
[40:44] I expect to find something similar or
[40:46] something else nearby we also need more
[40:50] data control what defines one mining
[40:52] Outpost being different from the from
[40:55] the other ones aside from the
[40:56] harvestables
[40:57] and also give the narrative development
[40:59] make sure you know people build near
[41:01] rivers on mountains they build near town
[41:04] halls they build near distribution
[41:09] centers so to hit that bit of a
[41:11] benchmark we make sure that locations
[41:13] are near each other and group them
[41:15] together the effect it gives is a fully
[41:18] developed landscape with Vistas and
[41:19] points of interest all over and we group
[41:22] them together in what we like to call a
[41:23] cluster like this one that has 13
[41:25] locations
[41:31] let's talk about clusters clustering
[41:33] means generating locations near other
[41:36] locations so for example if you find a
[41:39] distribution center just like in the
[41:41] verse currently I would find forward
[41:43] operating bases next to them but if you
[41:46] go even further out you'd find mining
[41:48] outposts to funnel those resources to
[41:51] the
[41:52] fobs go out even further you'd find
[41:55] caves around them cuz that's where they
[41:56] might find some of the
[41:59] gems and then we can even specify the
[42:02] data at on a cluster level all of the
[42:05] factions that live at this whole cluster
[42:07] any mining Outpost that the same people
[42:10] but also what Commodities they sell to
[42:12] find on what resource you'd
[42:15] find so let's look at an example of the
[42:18] Clusters we have our mining cluster
[42:20] again we can Define what rules we should
[42:23] have rules well near resource just like
[42:26] our mining Outpost but also it needs to
[42:28] be on a lawful planet we can Target on a
[42:29] planetary scale where they would need to
[42:31] be they need protection as for the
[42:34] targets well caves mining outposts but
[42:37] even trade
[42:39] posts let's go to the other side of the
[42:43] spectrum before I do so I forgot data we
[42:46] can on a cluster level specify again
[42:49] what mineral Commodities but what also
[42:50] what harvestable types you'd find are in
[42:52] in that region now let's look at the
[42:54] other side of the spectrum an unlawful
[42:56] cluster
[42:57] what rules well they need to be far away
[43:00] from any other cluster because they want
[43:02] to be isolated and do their evil Deeds
[43:04] on their own and also on an unlawful
[43:07] Planet such as somewhere in the pyus
[43:10] system for the targets Outlaw outposts
[43:14] crash ships because they would shoot
[43:15] them down and also ruins from just
[43:17] places they just completely
[43:19] overrun the data on this one you'd find
[43:23] specific loadouts and they'll be using
[43:24] weapons that you wouldn't find any other
[43:26] legal system and these weapons will be
[43:28] sold at the shops in these
[43:31] regions so now that we have a cluster
[43:35] let's go even
[43:38] bigger just like our locations we can
[43:41] put clusters near other clusters and we
[43:44] group them
[43:46] together ranging between 10 to 15
[43:48] locations each and we group this into
[43:51] what we call a
[43:54] sector like this one that has about 120
[44:00] locations
[44:01] however on a planetary scale we can
[44:04] Define how many sectors we should
[44:07] have with each their own data and
[44:10] Persona and every single one of these
[44:12] location is now ready for the mission
[44:15] system to hook up and give you gameplay
[44:17] and for you to
[44:19] find a bunch of places on your
[44:23] own and just on this side of the planet
[44:30] can you guess the number we've got about
[44:32] 3,42
[44:39] locations and again this means that
[44:42] architect we're just able to on a
[44:43] planetary scale just Define how many
[44:45] locations we need what You' find there
[44:47] and to just give that full
[44:53] identity thank you for listening and I
[44:56] want to see you in the verse but I'll
[44:57] see you in a denser
[45:06] verse however this was only the first
[45:09] phase of civilization let me introduce
[45:12] you to the stage the person who will
[45:14] introduce life at these locations
[45:16] Franchesco Ruchi
[45:18] [Applause]
[45:27] so hi
[45:31] everybody
[45:35] so where are we today so my name is Fran
[45:38] franisco Ruchi and I'm the director in
[45:40] cig Welcome To The Next Step of phase
[45:42] three we will look into how life adapts
[45:46] to the laws of nature and how all the
[45:49] NPCs can interact pretty much with this
[45:51] incredibly vast and dense worlds that we
[45:55] just saw
[45:57] so up to this point we have seen how we
[45:59] are building the worlds we start from
[46:01] the physical data set and this is to
[46:03] make sure that what you see is not just
[46:05] beautiful and realistic but also
[46:07] physically accurate so the distribution
[46:09] of the elements that we have seen and
[46:11] the location and the pois are influenced
[46:14] by geology Mission narrative and the
[46:16] lore those locations cannot be lifeless
[46:20] we want the planets to basically
[46:22] leverage the space that emerg with
[46:25] life so from an ey perspective I will
[46:28] categorize the elements of those words
[46:30] into four micro
[46:31] groups emergent environment that is
[46:34] everything we have just seen being built
[46:36] out of the physical data set users made
[46:39] locations so this includes everything
[46:42] that our designers or you players will
[46:45] create in the world so something that is
[46:47] mankind made and not predefined in the
[46:51] environment interior of those locations
[46:54] now this is very connected to the
[46:55] previous point the the difference is
[46:57] that they represent usually a confined
[46:59] space where there is much more tied
[47:01] interaction and for NPCs is a lot about
[47:04] interaction with objects that we are
[47:06] usually used to in our everyday
[47:09] lives and then the n d day and night
[47:12] cycle so in essence the passage of time
[47:15] that so far didn't have really a lot of
[47:17] impact on the game play so to allow life
[47:20] to respect this world and conform to the
[47:22] rules that those environment defines
[47:24] well we want to improve our tools and
[47:26] work
[47:27] workflow uh and we want to distance
[47:29] ourself as much as possible from a
[47:31] designer driven approach this is because
[47:34] first it's labor intensive it can be PR
[47:37] to bugs but also because the scale of
[47:39] the words that we' have just seen are
[47:41] very hard to be you know designer driven
[47:43] in the markup so we want to improve to
[47:46] improve this workflow and we will see
[47:47] how manual markup is also not usually
[47:51] the best option because with these words
[47:53] that are heavily impacted by users and
[47:56] changes and customization uh it's very
[47:58] hard to know in advance where
[48:00] interesting things are so today I want
[48:02] to show you a couple of examples of what
[48:04] the it te has been focusing on uh to
[48:06] make these systems uh supported and
[48:09] scale correctly to support this vastly
[48:12] dense Dynamic words so we look at
[48:14] perception in light and dark
[48:16] environments and dynamic cover
[48:19] generation so attacking an outpost now
[48:22] must have a level of depth that goes
[48:24] beyond what we had so the outside
[48:26] environment can change change Vehicles
[48:28] may or may not be present NPC can be
[48:30] anywhere and if it's a bright day well
[48:33] we will be more visible but our enemies
[48:35] will also be more visible and if you
[48:37] choose to attack at night time well
[48:39] we'll attack in Shadows during Darkness
[48:42] it's going to be a bit harder to see our
[48:44] enemies but we will also be harder to be
[48:46] spotted and it will give us more
[48:48] opportunities to be stealthy and sneaky
[48:51] how do we do that so as you see there is
[48:53] also a lot of different light conditions
[48:56] in these Outpost
[49:11] so in this scenario we will start look
[49:12] at our perception is impacted by the day
[49:14] and night cycle on the planetary surface
[49:17] as we seen in The Outpost Natural and
[49:19] artificial lights are the two elements
[49:21] that will impact vision and knowing that
[49:23] you can use this to leverage your
[49:25] gameplay Style to exploit basically all
[49:28] the environment so what is perception on
[49:31] NPC level is the combination of data
[49:33] that we collect out of the senses and
[49:36] vision is one of the sense and just
[49:38] tries to um in a way simulates The Human
[49:41] Side ability so designers can already
[49:44] tweak the perception in different ways
[49:47] and one way is defining how quickly NPCs
[49:50] can understand what they are seeing and
[49:52] the light condition have a direct impact
[49:54] how how quickly an NPC will fully
[49:56] understand for example if there is an
[49:57] hostile in front of them and obviously
[50:00] there is condition of light that
[50:01] designers can control and some others
[50:03] like the days night cycle that they
[50:05] can't so in this video we will see two
[50:09] main elements the graph on the top left
[50:12] and the two color for cones the graph on
[50:14] the left basically represent the current
[50:16] light level the NPC is in and the
[50:18] current multiplier this light level
[50:20] generates to speed up or slow down the
[50:23] NPC perception and understanding the two
[50:27] instead represents the primary and
[50:28] secondary fov the red color means that
[50:31] if you stand in that location it will
[50:33] result in NPC reacting the lowest to you
[50:35] and the green color instead represents
[50:37] the quickest response so during the
[50:39] night NPC will have a hard time to
[50:42] understand and and and forese and see
[50:43] things but if they have flashlights on
[50:45] their helmets they can turn it on and
[50:47] this will impact their primary fob
[50:49] making still the periferal vision a bit
[50:51] more
[50:53] uncertain and as you see here uh first
[50:56] first of all the MPC is patrolling with
[50:58] this domesticated friendly copion this
[51:01] is because he wants to exploit the
[51:03] vision the night vision capabilities of
[51:05] the animal and it's kind of our tier
[51:07] zero
[51:09] pets so we will now look at the cover
[51:11] system that is the next Dynamic things
[51:14] that I want to show you uh so when we
[51:16] introduced planetary navigation mesh the
[51:18] first time our goal was really to create
[51:20] a systems that would support and process
[51:23] the environment in a very Dynamic way uh
[51:25] our planets just way too big to
[51:27] statically export them and process them
[51:29] first of all and then they also their
[51:32] regions only exist when somebody's there
[51:34] and NPCs are there so essentially
[51:37] environment has its purpose only when
[51:38] life
[51:39] exist Also let's keep in mind that even
[51:42] if we could explore dynamically and
[51:44] statically those planets so processing
[51:46] dynamically all a static version of the
[51:48] planet this would be first of all
[51:50] wasteful and on the memory side and time
[51:53] consuming uh and also because we have a
[51:56] lot of runtime modification of the
[51:58] terrain this would require us to still
[52:00] reparse it the runtime and pretty much
[52:02] that will be almost all the time so to
[52:05] generate the cover data we want to
[52:06] leverage the navigation mes system and
[52:08] what we do is as you see here the blue
[52:11] uh polygons are basically where NPCs can
[52:14] work and the green ones are what we call
[52:16] cover surfaces that are represent simple
[52:19] representation of the environment what
[52:21] NPC uses to the to understand if they
[52:23] can hide behind something and if they
[52:24] can shoot from some position
[52:27] so up to now we have an approach where
[52:30] designer would would be a designer
[52:32] driven approach designer can Define in
[52:34] the locations where cover was
[52:36] interesting they could mark it up either
[52:38] the location itself or prefabs and then
[52:40] with a special entity that would just
[52:42] sample dynamically the environment but
[52:44] will still be designer
[52:45] driven um this is obviously a good
[52:48] approach for it's also standard approach
[52:50] in gaming industry but what about all
[52:52] those organic and inorganic elements
[52:54] that get scattered with a new system
[52:56] like if designers wants to iterate on
[52:59] these ones for example and they want to
[53:01] change the physical data sets those
[53:02] scattering tool will just change
[53:04] completely layout and what we want is
[53:07] that designers can do this change
[53:08] without being afraid of doing it because
[53:10] the game play was you know predefined
[53:12] and controlled and now they can just
[53:14] make something beautiful but also
[53:17] fun besides that yes we did have a
[53:19] prefab approach where you can build
[53:21] stuff out of small building blocks this
[53:24] is obviously a good approach because
[53:26] it's uh uh you know in a way you can
[53:28] build stuff out of smaller version but
[53:30] this creates a lot of unnecessary data
[53:33] Imaging a crate and we can say that the
[53:35] crate can generate cover now we stack
[53:37] 100 crates and what happens that we have
[53:40] a lot of data to generate cover that we
[53:42] have to process throw away this would
[53:44] just waste CPU cycles for nothing this
[53:47] is why until now you also couldn't fight
[53:49] an NPC in a forest like this one and see
[53:51] them hiding behind a a tree or a
[53:54] rock so enabling the dynamic generation
[53:56] of covers on the planet allows us to
[53:59] exploit all the elements of the
[54:01] environment whenever navigation mess
[54:03] generates NPC can now have a chance to
[54:05] fight with you hiding behind available
[54:07] elements Boulders rock walls and all use
[54:11] are all useful elements right now
[54:13] however we don't have to limit ourself
[54:15] to static geometries but also vles can
[54:18] be used for cover and as you can see
[54:20] this is dynamically generating while the
[54:22] vagle moves so be careful where you bark
[54:25] your Ursa because now can become a
[54:26] source of danger for you as well last
[54:29] but not least these systems can be just
[54:31] used on all the different type of
[54:33] navigation mesh we have so not on the
[54:34] planet but also for example the
[54:36] interiors and everything you guys
[54:38] construct because obviously you guys
[54:40] will build your own locations but you
[54:42] don't really mark up stuff or you don't
[54:44] want to decide that because that's going
[54:45] to come automatically out of the
[54:47] system so I want to show you
[54:57] so what I want to show you now is just
[54:59] like a little bit of insight of what
[55:00] goes behind the scene when we generate
[55:02] cover and navigation mesh these are some
[55:04] of the steps that our system does so we
[55:07] always start from the environment
[55:08] voxelization what that means is we
[55:10] process the geometry the physical
[55:12] representation of the geometries that is
[55:14] a little bit simpler than usually the
[55:16] render mesh and we construct it in a box
[55:19] Eliz approach this is also using
[55:21] different types of agent definition why
[55:24] so because obviously where a human can
[55:26] move is not the same as where a vle can
[55:28] move so we can Define different type of
[55:30] precisions and then speeding up the
[55:32] process where we when we have to or be
[55:34] more precise where we cannot be to and
[55:36] we can also create overrides based on
[55:37] different things for example if you
[55:39] crouch you can enter into smaller
[55:41] locations that where you
[55:42] stand um this process is basically
[55:45] common between navigation mesh and
[55:47] cover after that is generated then we
[55:50] can evaluate the Vox in different ways
[55:52] for example defining where we can walk
[55:54] so can we make the step with our foot
[55:56] over a specific Vox cell or is there
[55:59] something in front of that hole in the N
[56:01] mesh so that we can actually cover
[56:03] behind and then we can basically decide
[56:05] we generate cover surfaces and after the
[56:08] cover surfaces are generated we can
[56:10] process where the cover locations are
[56:12] cover locations are good spot for NPC to
[56:14] be behind the
[56:16] cover so what we see here is the with
[56:19] the introduction of melr last year
[56:21] obviously we knew this would
[56:22] revolutionize how you guys are playing
[56:25] and we did have to find find a solution
[56:27] to handle all the destruction you get so
[56:31] you we destroy so much stuff in this
[56:32] world that we had to find a solution
[56:35] right so this is why we approach the
[56:37] cover generation navigation mesh as it
[56:39] is because there is just no way for us
[56:42] to predict anything that you're doing
[56:43] and we want just melstrom to be another
[56:46] trigger for word evaluation so as you
[56:49] see this is all damic
[56:53] generating and destroying anything
[56:56] just makes the war be
[56:59] revaluated so as you see here we can
[57:02] have also lots of rules so you you can
[57:05] you can see a here but when F break
[57:07] first they invalidate and then when they
[57:10] rest for example we can decide when it's
[57:11] a good moment to regenerate so that we
[57:13] also don't waste too much CPU
[57:15] Cycles uh the color that you see is
[57:18] mostly uh cover quality so you see the
[57:20] light green is High cover the dark green
[57:23] is Low cover and then we have the red
[57:25] that we introduced some time ago that is
[57:26] basically not really good cover but if
[57:29] there is nothing better well it's better
[57:30] to be behind something that being you
[57:32] know in open
[57:34] space so let's just recap what we want
[57:37] to do is finding a plan and having a
[57:40] good plan to approach life in this vast
[57:42] Universe what we want is the life to be
[57:45] able to systemically evaluate all the
[57:47] dynamic environments that is generated
[57:49] we want to improve our workflow not only
[57:51] to support designers and being faster
[57:53] but also support all your guys creations
[57:56] so we want the life to adapt and this is
[57:58] all for making the game fun for you so
[58:01] that everything comes
[58:04] together so thank you all this was phase
[58:07] three and now let's welcome Ben Parry
[58:11] that will introduce you guys to phase
[58:13] four of
[58:18] Genesis thank
[58:21] you hello Cen con
[58:26] that's not
[58:29] my sorry someone's changed my
[58:32] lines welcome to phase four light and
[58:34] sound now we've seen already um
[58:37] automated systems for automatically
[58:40] placing different biomes uh
[58:43] different uh
[58:44] vegetation settlements and people so now
[58:47] we're going to take the same approach to
[58:50] automatically handling light itself
[58:56] first of all why is this important well
[58:58] it's not always obvious especially when
[59:00] they do their jobs as well as they do
[59:01] but there's an incredible amount of
[59:03] attention from the lighting artist that
[59:04] goes into all of the locations that we
[59:06] have in the game besides just marking up
[59:08] the reflection probe areas they also
[59:10] manage the visuals really carefully
[59:12] adding fill lights um approximating
[59:15] bounce lights off ground and up into
[59:17] ceilings and dark Corners where there
[59:19] aren't any direct lights pointing really
[59:22] um and the problem is not only does this
[59:24] take a lot of time and really constrain
[59:27] the style that they're using it's simply
[59:29] not possible if you've got a planet full
[59:31] of forests and what was it 3,00 and
[59:34] something Place locations you're going
[59:37] to be exploring places that no artist
[59:39] has ever visited no they've not looked
[59:41] at and they've certainly not going to be
[59:42] able to have tweaked it for you so we
[59:43] need something that works completely
[59:46] hands-off and natural outdoor scenes are
[59:48] especially problematic for us indoors
[59:51] you can put a lot of little lights
[59:52] around pointing from different
[59:54] directions and you can probably justify
[59:55] it
[59:56] Outdoors you've got the Sun and you've
[59:58] got the sky and if you're behind a tree
[1:00:01] you've got the sky and so you need that
[1:00:04] Skylight to
[1:00:06] vary
[1:00:13] now so this is the forest as you'd see
[1:00:15] it without the GI system as you can see
[1:00:17] all the Shadows are receiving lighting
[1:00:19] from the same environment probe so it's
[1:00:21] basically just a flat color across we
[1:00:23] replace that with around 40,000 mini Ray
[1:00:25] Trace probes each of them has their own
[1:00:27] view of the sky and so that gives you
[1:00:29] way more contrast and variation As you
[1:00:31] move in and out of the
[1:00:40] canopy now there are a couple of other
[1:00:42] pieces of the puzzle that we've been
[1:00:44] working over on over the last year now
[1:00:46] the first is well all the stuff that you
[1:00:48] can't stick 40,000 mini probes onto
[1:00:51] anything that doesn't have an opaque
[1:00:53] surface we can't really know where it is
[1:00:55] on the screen and track it from frame to
[1:00:56] frame but if we don't do anything it's
[1:00:59] going to stick out like a sore thumb
[1:01:00] we've got fog we've got particles we've
[1:01:03] got other little things I don't know
[1:01:05] what they are um and so we need
[1:01:08] something to do with those so to address
[1:01:11] this we've added a kind of stable grid
[1:01:13] of medium kind of probes that are
[1:01:16] generated around the player As you move
[1:01:17] around so that gives us approximately
[1:01:19] like the approximately matching lighting
[1:01:22] that we can apply to all of those things
[1:01:25] now this is a little bit bit difficult
[1:01:26] to illustrate in normal scenes so uh for
[1:01:28] once I've been making my own
[1:01:31] levels as you can see Pico's in trouble
[1:01:34] again um but because the lighting team
[1:01:36] hasn't helped you can't see anything in
[1:01:38] most of the scene if you add the
[1:01:41] transparency GI system suddenly the
[1:01:43] whole scene comes alive and this is
[1:01:44] something that we could never have done
[1:01:46] um until we added this Tech
[1:01:51] [Music]
[1:01:58] now the other piece of the puzzle is
[1:02:00] glossy Reflections now we've got a fair
[1:02:02] few shiny objects in the game you may
[1:02:04] have noticed and we've got the same
[1:02:06] problem that if we fix the lighting on
[1:02:09] one thing and then the reflections don't
[1:02:10] match it's going to look terrible also
[1:02:12] rate racing Reflections is really cool
[1:02:14] and we wanted to do it um and the
[1:02:17] challenge here though is that the rate
[1:02:19] race Reflections you're going to do
[1:02:21] they're not just mirrors like we've got
[1:02:23] a whole range of objects in the game
[1:02:25] from like a scuffed hole panel all the
[1:02:27] way up to Chrome polished pipes and we
[1:02:30] want the same system to apply globally
[1:02:32] across that so I'm going to do an
[1:02:35] uncomfortably short breakdown on what
[1:02:37] this Tech looks like and how that comes
[1:02:41] together so here's what sorry here's
[1:02:43] what we need to be now obviously it
[1:02:45] reads a shiny but there's this kind of
[1:02:46] fakeness to it um it kind of looks a bit
[1:02:48] like it's flying so let's see what the
[1:02:51] rate tracing looks like yeah it's really
[1:02:53] noisy and horrible we need to clean it
[1:02:54] up so what we do is we let pixels share
[1:02:57] their data in
[1:03:00] space and then also in time to clear up
[1:03:03] the final image and then we let the
[1:03:05] game's normal anti-aliasing just kind of
[1:03:07] clean up the last stuff and Carries over
[1:03:08] the finish line and that's how you make
[1:03:10] a chrome
[1:03:14] [Music]
[1:03:16] penguin now I'm going to derail for a
[1:03:19] moment away from the topic of Genesis
[1:03:21] cuz this isn't actually just about
[1:03:23] automating the lighting for new
[1:03:24] environments this this is also about
[1:03:26] pushing quality in areas that have
[1:03:28] already had all of that work done by the
[1:03:29] lighting team we're freeing the artists
[1:03:31] up to light more naturally allowing the
[1:03:34] time of day shifts to be embraced rather
[1:03:36] than fighting against them and as I'm
[1:03:38] about to show players and NPCs are going
[1:03:40] to reap the same benefits as
[1:03:45] well so here we start adding natural
[1:03:48] areas of light and shade and warm and
[1:03:49] cool colors
[1:03:55] these open areas benefit in the same way
[1:03:58] as the forest scene did adding areas of
[1:04:00] shade and areas of open
[1:04:05] lighting like I mentioned the time of
[1:04:07] day shifting leads to different ambients
[1:04:10] as the sun
[1:04:15] moves and this is a shot that I just
[1:04:23] liked finally let's see how the the new
[1:04:25] GI system can brighten up your
[1:04:27] characters
[1:04:34] day and also their day as
[1:04:37] well whoever they
[1:04:43] are well U I promise you light and sound
[1:04:46] but I don't actually know anything about
[1:04:47] sound so here's the man who does gram
[1:04:49] philipsson
[1:04:51] [Applause]
[1:04:59] good afternoon citizen
[1:05:02] con I've been at C nearly 10 years and
[1:05:05] this is the first time I've done this
[1:05:07] very exciting for me so
[1:05:10] uh do you want to make some
[1:05:16] noise so um sound isn't as fast as light
[1:05:20] so it takes me a bit to catch up Jared
[1:05:22] wrote that joke for me so you can blame
[1:05:24] him says it right here blame
[1:05:28] him so now we have a huge amount of
[1:05:31] visual and interactable content
[1:05:33] locations biomes populations planets and
[1:05:36] systems and now they're all beautifully
[1:05:38] lit too thanks Ben but how do we paint
[1:05:41] this world with
[1:05:43] sounds it's a challenge it's a challenge
[1:05:45] of scale we need to support multiple
[1:05:48] star systems and it's a challenge of
[1:05:50] quality we want the highest quality
[1:05:53] possible we also don't want implement M
[1:05:55] mentation to hinder creativity and we
[1:05:57] want a seamless experience so we're
[1:06:00] asking a lot but with Star Audio we can
[1:06:03] rapidly Implement audio for entity
[1:06:05] classes brushes or audio sweeteners all
[1:06:09] of which can be reused and reflected
[1:06:11] immediately across the game including
[1:06:12] all of those emergent locations we
[1:06:14] talked about earlier so again this is
[1:06:16] Genesis data deriving what happens in
[1:06:19] Game and we can do all this without
[1:06:21] breaking flow so here's a fairly dry
[1:06:24] video it gets more exciting later I
[1:06:27] promise uh showing you our rapid
[1:06:31] workflow so over on the left I had to
[1:06:34] think about that we have the wise editor
[1:06:37] that's where all our sounds live in the
[1:06:38] middle we have star audio editor and on
[1:06:40] your right we have an entity that needs
[1:06:43] some insect sounds on it so we can very
[1:06:46] quickly drag from Wise to Star Audio we
[1:06:48] can mark up very quickly a bit of logic
[1:06:52] and we can re-trigger this entity's
[1:06:53] spawn sound so that it immediately makes
[1:06:55] a
[1:06:57] sound I assure that is a group of
[1:07:00] insects
[1:07:02] um thank you you're too kind if you like
[1:07:06] that one you like the ones that come
[1:07:10] later but there's a little something
[1:07:12] missing so to add some realism sounds
[1:07:16] respond to how they move how you move in
[1:07:18] the world and how they move relative to
[1:07:20] you so we need to change the frequency
[1:07:23] as the velocity relative to The Listener
[1:07:25] change changes this is known as a
[1:07:27] Doppler effect in simple terms the pitch
[1:07:29] dropping as something whizzes by or in
[1:07:32] even simpler
[1:07:34] [Music]
[1:07:36] terms now sound designers traditionally
[1:07:39] needed to implement their own Doppler
[1:07:41] sounds but given how fast we can travel
[1:07:44] through these rich dense locations and
[1:07:46] the sheer number of them we can't afford
[1:07:48] to be doing that any longer so we've
[1:07:51] created a systemic Doppler solution and
[1:07:54] I'm going to show you that now the only
[1:07:57] way I know how by putting a big Benny
[1:07:59] noodle machine on top of a
[1:08:16] mountain so you can hear the pitch and
[1:08:18] Tempo changing as we move relative to
[1:08:20] the Benny noodle machine and this is all
[1:08:22] fully systemic no special treatment for
[1:08:24] this sound
[1:08:31] [Applause]
[1:08:41] and I expect the noodle bar to be very
[1:08:42] busy after that
[1:08:45] commercial so how does it work well the
[1:08:49] listener is surrounded by variable time
[1:08:51] delay buffering not the horrible kind of
[1:08:53] buffering you're on the internet this is
[1:08:54] a really nice kind that helps the game
[1:08:56] sound good uh each buffer represents a
[1:08:59] section of the sphere around the audio
[1:09:01] listener and um the audio is mixed into
[1:09:04] these buffers at a position that is uh
[1:09:08] appropriate to the object position in
[1:09:10] the world changes in the position are
[1:09:12] applied to the delay buffer by
[1:09:14] interpolating the audio
[1:09:16] data but that's not all we're doing here
[1:09:19] now I know there was a bar citizen
[1:09:20] yesterday so some of you may not be
[1:09:22] thinking as fast as you might normally
[1:09:25] but you may have realized that by
[1:09:26] buffering the data in this way we're not
[1:09:28] just creating a uh speed of sound we are
[1:09:31] not just creating a doler effect we are
[1:09:34] indeed and I just spoil with my own line
[1:09:36] creating a speed of sound
[1:09:38] effect so introducing systemic speed of
[1:09:42] sound to the game I now have uh a couple
[1:09:46] of minutes of video and we go through
[1:09:48] Rapid Fire looking at some fantastic
[1:09:50] examples of what this brings to the game
[1:09:52] starting with a spaceship pass by that
[1:09:54] is supported tonally by the uh systemic
[1:09:57] speed of
[1:10:11] sound okay sounds cool what about weapon
[1:10:14] fire so let's bring in a sniper and
[1:10:18] unfortunately for the uh sensitive of
[1:10:20] heart AO um we're going to hear this
[1:10:24] first from the perspective of for both
[1:10:25] with no speed of sound
[1:10:32] effect okay so that's if you at the Pico
[1:10:35] perspective there that's how you'd hear
[1:10:36] it in game right now let's hear it with
[1:10:38] speed of sound enabled and this time
[1:10:40] we're just going to listen from Pico's
[1:10:45] perspective so Pico's down before he
[1:10:47] even hears the shot but don't worry he's
[1:10:50] not
[1:10:51] dead okay let's finish him off
[1:10:59] now he's
[1:11:01] dead and uh as the voice of Pips power
[1:11:04] up uh I need to get some proper equ in
[1:11:08] so there's one more example for
[1:11:10] you now finally oh not finally we have
[1:11:14] ship weapons so listen to the fire rate
[1:11:16] as the ship approaches the camera here
[1:11:18] giving you a bit bit of a sense of
[1:11:19] threat
[1:11:25] it's not too easy to tell what's going
[1:11:26] on there but you get an increase in fire
[1:11:29] rate finally the really cool stuff
[1:11:31] explosions so we can put a cinematic
[1:11:33] element a uh Shockwave element and a
[1:11:36] delayed speed of sound
[1:11:44] effect and that's way too cool to do
[1:11:47] just once so we're going to do it twice
[1:11:48] more from further
[1:11:53] distance so again cinematic effect first
[1:11:56] when you see
[1:11:59] it Shark
[1:12:02] Wave and the explosion
[1:12:07] itself this is all completely driven by
[1:12:10] parameters in the game so we can do this
[1:12:12] for
[1:12:13] real whenever you drop a MOAB one more
[1:12:30] [Applause]
[1:12:33] that's pretty
[1:12:37] cool so the speed of sound simulation
[1:12:40] gives you a better sense of distance it
[1:12:42] improves the sense of speed and it
[1:12:44] supports those amazing cinematic
[1:12:49] moments so in summary we're trying to
[1:12:53] make the game more immersive and respond
[1:12:55] to all this Genesis data and make it
[1:12:57] feel more real and that's not all we can
[1:12:59] do we can make sounds respond
[1:13:01] differently to changes in atmospheric
[1:13:03] pressure and resultant changes in
[1:13:04] temperature so for example the sound
[1:13:06] will travel faster in extremely hot high
[1:13:09] pressure environments we really look
[1:13:11] forward to getting this in game for you
[1:13:13] and getting you enjoying it at
[1:13:15] home now that's all from uh phase four
[1:13:20] of the Genesis cycle light and sound so
[1:13:23] I'm going to hand you back to the
[1:13:24] amazing Ben and Ally to bring us home
[1:13:27] with the Final
[1:13:34] Phase thank you
[1:13:38] sir so as grahe says this is going to be
[1:13:42] the final phase of Genesis and it's
[1:13:44] called Nature's W and and this is where
[1:13:48] we're going to bring the very Planet
[1:13:49] itself to life so first off let's start
[1:13:53] talking clouds so clouds have got an
[1:13:56] atmosphere have got to be one of my
[1:13:57] favorite visual features of our game
[1:13:59] they're truly awesome but they're also
[1:14:01] completely static nothing has changed
[1:14:03] with them so what we want to bring with
[1:14:05] Genesis is the evolution of clouds over
[1:14:07] time this isn't just some simple
[1:14:09] scrolling animation we use the same
[1:14:11] physical data sets that drive the biomes
[1:14:14] we talked about earlier and St architect
[1:14:16] and these are also now driving a
[1:14:17] physical simulation of the clouds so
[1:14:19] they can form and dissipate in realistic
[1:14:22] conditions so this means things like the
[1:14:24] oceans the prevailing winds mountain
[1:14:25] ranges and the temperature will all
[1:14:27] impact the
[1:14:28] clouds but to complement these more
[1:14:30] Dynamic clouds we've also improved our
[1:14:32] lighting model so it now correctly
[1:14:34] accounts for how light scatters multiple
[1:14:36] times inside a cloud and this is
[1:14:38] important creates much deeper lighting
[1:14:40] and it can contrast against the sun's
[1:14:42] Rays resulting in much more Vivid Cloud
[1:14:44] Scapes like we see on the left here
[1:14:46] something we're all too familiar with in
[1:14:47] Manchester now it would be awesome to
[1:14:51] bring this into context and show it on
[1:14:53] an actual Locas let's take a look at a
[1:14:56] quick scene to round this
[1:15:01] up it's a nice day on the surface but
[1:15:04] something's different the clouds are
[1:15:06] moving but they're not just moving
[1:15:09] they're forming naturally in changing
[1:15:12] shape they dissipate as they glide on
[1:15:15] the atmosphere based on wind data
[1:15:18] Stratus and cumulus
[1:15:21] alike now we start seeing the new Cloud
[1:15:24] shading Model come into play we are
[1:15:26] seeing enhanced occlusion beneath the
[1:15:29] cover emphasizing the sunbeams how it
[1:15:32] interact with the clouds and seeing the
[1:15:34] light shafts peer through the
[1:15:37] layers now as this is closing in we can
[1:15:41] start to see the changes in visibility
[1:15:43] of the
[1:15:44] area light precipitation is starting
[1:15:48] previously we authored static Cloud
[1:15:51] shapes but no longer we didn't Manu
[1:15:54] place a volume here its presence has
[1:15:56] been informed by Genesis data oh and
[1:15:58] it's not just a cloud
[1:16:00] volume it's a weather
[1:16:02] [Applause]
[1:16:07] front now we're trying to see the wind
[1:16:09] picking up terrain and rocks are getting
[1:16:11] wet vegetation grass and the overall
[1:16:14] environment are responding to the
[1:16:16] weather the system is changing the world
[1:16:19] around us we can see puddles being
[1:16:22] formed dynamically in the dirt properly
[1:16:24] responding to light Reflections and Rain
[1:16:28] droplets making it getting it's getting
[1:16:30] really ominous and loud in here I can
[1:16:33] feel the danger I think we should let
[1:16:35] this play out in the
[1:16:41] [Applause]
[1:16:50] game here what those F on this location
[1:16:53] conditions are deteriorating the severe
[1:16:56] we need to leave now get back here
[1:17:28] I'm getting out of this suit now
[1:17:30] powering up and flying out we'll need to
[1:17:32] switch to IFR see you on the other side
[1:17:55] oh
[1:18:29] [Music]
[1:18:32] sh
[1:19:11] mon
[1:19:23] [Music]
[1:19:47] it's getting very Sparky up here
[1:19:49] recommend deviation
[1:19:58] Lo
[1:20:27] wow
[1:20:30] wow man that's what we call the Falon
[1:20:33] maneuver to get out of there Ali please
[1:20:36] break this down for us what did we just
[1:20:38] see yeah so that was a combination of
[1:20:40] lots of tech we just saw that all
[1:20:42] combined together to make a really great
[1:20:43] cohesive experience so we started with
[1:20:45] the cloud simulation which wasn't really
[1:20:47] a cloud simulation it's a weather
[1:20:48] simulation the rain will appear not at
[1:20:50] random but it's based on physically
[1:20:52] plausible conditions so you have real
[1:20:53] WEA evolving across your planet all the
[1:20:56] time we have a host of visual effects
[1:20:58] like the rain and then the have the
[1:21:00] atmospheric scattering that you get
[1:21:01] under the columns of rain we had the
[1:21:03] puddles and the splashes and all of this
[1:21:05] type of visual effects we saw the wind
[1:21:07] developing over time and that introduced
[1:21:09] turbulence to the flight model making
[1:21:11] flight very challenging and then of
[1:21:13] course we saw the lightning which plays
[1:21:15] havoc with your instrumentation but of
[1:21:17] direct strikes will damage your ship and
[1:21:19] of course dur some storms will be
[1:21:21] dangerous enough to be fatal as Ben's
[1:21:22] unlucky Aurora just found out
[1:21:25] and these storms will sometimes be
[1:21:27] shortlived and localized but others will
[1:21:29] be larger and potentially permanent on
[1:21:31] some planets and this is going to
[1:21:32] restrict access via flight I mean
[1:21:34] players will be forced to resort to
[1:21:35] ground vehicles or even foot and this is
[1:21:37] all going to be dynamic meaning that you
[1:21:39] might find yourself trapped in some
[1:21:40] really unexpected situations so we
[1:21:43] really can't wait to use all these
[1:21:44] mechanics to open up many new gameplay
[1:21:46] opportunities for all in the earth soon
[1:21:57] a wise Yogi once said it's your job as a
[1:22:01] pilot to compensate and stay on
[1:22:04] course all right what have we learned
[1:22:06] today guys we've shown you an approach
[1:22:10] to of encoding The Rules of Nature into
[1:22:12] planetary data we've seen biomes emerge
[1:22:15] from geology temperature humidity
[1:22:18] climate weather the physical terrain we
[1:22:20] create denser more diverse living
[1:22:22] planets without artists hand placing or
[1:22:26] man manually creating biomes instead
[1:22:28] leveraging asset mapping we've shown you
[1:22:31] a new way to make the game that can
[1:22:33] scale to create thousands of Coran plan
[1:22:36] places for civilizations on planets that
[1:22:38] can be used for Missions or immersion
[1:22:40] gameplay without Art and Design hand
[1:22:43] placing locations leveraging World
[1:22:45] design rules instead we've seen how
[1:22:48] populations of AI and NPCs inhabiting
[1:22:51] locations dynamically adapt their
[1:22:53] understanding of the environment
[1:22:55] without custom markup by developers
[1:22:57] allowing the creation of more playable
[1:22:59] spaces rapidly we've shown you how light
[1:23:03] and sound also benefit from Genesis data
[1:23:05] to influence planetary environments and
[1:23:08] we shown how these system these systems
[1:23:10] come together when weather comes into an
[1:23:13] area changing your gameplay experience
[1:23:16] significantly our goal with Genesis and
[1:23:18] all of its system is to create more
[1:23:20] worlds better worlds Faster by applying
[1:23:23] our Tech wizard and craftsmanship to
[1:23:25] build systems that respond to data
[1:23:28] that's our star engine presentation for
[1:23:29] today guys for this year have a great
[1:23:31] citizen con we'll see you on next one

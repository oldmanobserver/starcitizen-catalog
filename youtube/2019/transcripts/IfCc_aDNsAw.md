# Star Citizen: CitizenCon 2949 - Terra Firmer

**Video:** https://www.youtube.com/watch?v=IfCc_aDNsAw
**Date:** 2019-12-13
**Duration:** 44:07

## Transcript

[00:11] everyone my name is Marco corbata
[00:15] senior technical director my name is
[00:18] Misha Colburn lead environment artists
[00:20] on the organics team and I'm Allie Brown
[00:22] director of graphics engineering we're
[00:25] going to talk about the evolution of
[00:28] planet tech today initially our goal was
[00:34] to achieve a seamless transition between
[00:36] space and planets so fly to a distant
[00:38] planet land on e and explore its entire
[00:41] surface with no loading screens so
[00:44] looking up the planets in the sky and
[00:46] fly up to them it's cool but what are
[00:49] the planets supposed to look like and
[00:50] how can we create them so initially I
[00:55] just started doing some test mixing
[00:58] procedural terrain with buildings here
[01:01] is another early picture show in
[01:03] procedural a terrain with no mountains
[01:07] why we were getting so some very
[01:10] interesting results during our early
[01:12] test a key factor in star citizen is
[01:15] that we have a specific universe with
[01:17] pretty deep laws so we cannot just
[01:20] generate you know random planets we
[01:22] needed artist input to match the
[01:24] reference and low so we had multiple
[01:29] layers of noise some generic elevation
[01:31] maps shading and colors were based on
[01:34] procedural rules elevation and slope we
[01:38] had an initial editor integration we
[01:40] real-time editing of basic planning
[01:42] properties and atmosphere so after a lot
[01:49] of hard work we got our first version v1
[01:53] working here you can see our first man
[01:57] on the planet
[02:00] here is the first spaceship on the
[02:03] planet successful landing so after we
[02:09] won we introduced procedural and
[02:12] artistic improvement
[02:13] during v2 we introduced the concept of
[02:16] ecosystem so the ecosystems a
[02:19] combination of terrain maps with vision
[02:22] objects and gameplay properties each
[02:27] ecosystem had a three channels code of
[02:29] textures use for blending texture layers
[02:32] and we use the same channels for object
[02:35] scattering as well using ecosystems we
[02:40] can make each planet unique matching the
[02:42] law but still generating planet size
[02:44] content for players to explore so we to
[02:50] ship with Alpha 3.0
[02:51] we had the new moons and landing zones
[02:53] we had seamless transitions deters
[02:55] visible from space all the way down to
[02:58] the surface
[02:58] we basically rewrote the entire 3d
[03:01] engine terrain system to work at scale
[03:04] and on a spherical planet
[03:13] alpha 3.0 was multiplayer ready you
[03:16] could already explore planets online
[03:18] with your friends you go to fly
[03:20] formations and planetside battles the
[03:24] planet generation is synchronized
[03:27] between client and server the physics
[03:29] collision mesh is generated on demand we
[03:33] will talk a bit more about this later
[03:39] this picture is showing the sense of
[03:41] scale we achieved with alpha 3.0 as you
[03:44] can see here resuming him from a solar
[03:47] system down to a planet through phase
[03:53] you just plant a demon planet view from
[03:56] space while zooming in with the seen
[04:00] high-level formations and ecosystems
[04:06] getting closer
[04:08] objects are starting to appear next it
[04:19] is the space the Granta space transition
[04:21] for yella
[04:22] a showing additional elements like icy
[04:25] surface from space next slide please
[04:36] okay and this the other way around
[04:38] zooming down from ground to space
[04:50] okay we version three we decided to
[04:53] introduce more artistic control here we
[05:00] can see the artistic improvements made
[05:03] to yellow in version 3 version 3 shipped
[05:09] with alpha 3 3 5 we are the new moons
[05:12] and new planets including a city planet
[05:14] cover with buildings we introduced rear
[05:17] day/night cycles so planets are actually
[05:20] rotating in real time we made a large
[05:23] amount of tools improvements and built a
[05:25] new vegetation system in v3 we increase
[05:30] from 3 channels to 16 channels using
[05:32] alpha values to encode the material IDs
[05:35] but when it is 16 text layers for each
[05:39] pixel would be way too expensive so we
[05:43] found a very fast solution by blending
[05:46] only the closest surface using temporal
[05:49] differing so here we have several layers
[05:53] combined which with each other but
[05:55] without smooth blending and here we're
[05:59] blending 60 layers at once using
[06:01] temporal difference so it's basically at
[06:03] the cost of blending only one day so
[06:08] what would be the next steps of the
[06:10] version free we had the design for
[06:13] something quicker to generate with less
[06:15] direct artistic control like we had
[06:18] previously in v2 but still being able to
[06:21] influence terrain shape and colors like
[06:24] in v3 we wanted more ecosystem to get
[06:27] more details improve blending and
[06:29] transitions Bastien we need to take into
[06:32] account special planets like our coal so
[06:37] enter planets before our final version
[06:40] we decided to go for a more physically
[06:43] based approach we wanted to improve on
[06:46] ecosystems blending and transitions and
[06:49] now I'm handing over to Mission to give
[06:52] us an overview of before Thank You Marco
[06:55] I hope this clicker holds up because it
[06:58] seems to be some interference so like I
[07:02] said I'm the lead artist on the organics
[07:03] team
[07:04] our team works with the planet tech tool
[07:07] day-in day-out all the planets you've
[07:10] seen so far have been created by the
[07:12] team in de so we had some thoughts and
[07:16] demands when whenever we talk about
[07:18] tools and what we want to improve so
[07:20] wifey for let's go over some of this
[07:23] stuff so wifey for up until now for a
[07:26] long time our focus has been on moon
[07:27] landscapes and although these are
[07:30] visually distinct from each other
[07:32] they're essentially a single biome
[07:36] planetoid the one is desert one is icy
[07:39] one is a lunar landscape but biggest
[07:42] differences is actually like the type of
[07:44] SS that you see the shapes in the
[07:45] terrain last year when the team started
[07:49] to work on Hurston we were actually
[07:52] confronted with our biggest challenge
[07:53] yet hjerson is a very diverse planet in
[07:57] terms of what we've done so far so we
[07:58] have dry wastelands we had our mining
[08:02] pits
[08:02] we have trash yards we have hot acidic
[08:05] areas and even very lush green areas so
[08:08] there's on a single planet we had to
[08:10] cover a lot of variety and this clearly
[08:14] proved a challenge based on on this
[08:16] experience working on on Hurston we we
[08:19] started to think about okay what can we
[08:20] do to improve or where are our
[08:22] bottlenecks and how can we proceed so we
[08:26] wanted to make sure we future-proof the
[08:28] technology because up until now it's
[08:30] been Stanton but there's this we want to
[08:35] go somewhere right we want to go to
[08:36] other locations and the only way to do
[08:38] it is to work faster and more efficient
[08:41] so v4 is a fundamental change in how
[08:44] fast we can build planets keeping what
[08:47] worked well we work in the things that
[08:50] slowed us down and building a tool
[08:51] that's in engine and is a very intuitive
[08:54] artist friendly tool to use and we'll
[08:56] show some examples of that coming up
[09:02] yes all right cool it seems to work so
[09:05] here's an example of some of the stuff
[09:08] that we wanted to achieve or at least
[09:10] wanted to do but we felt we couldn't
[09:12] really do so you see here a Google image
[09:14] of the Africa
[09:16] continent and what you can clearly see
[09:18] is on a large scale the transition from
[09:20] a desert landscape to a savanna
[09:23] to a thick jungle and if I don't know if
[09:26] any of you ever liked the joint like
[09:29] enjoy to look around on Google Earth I
[09:32] personally like to do that a lot
[09:34] reference gathering etc and I always
[09:36] enjoy seeing these these beautiful
[09:38] transitions and they seem quite like
[09:42] strong but if you go up close you can
[09:44] actually tell that these transitions are
[09:46] like incredibly complex so there's all
[09:50] these features in the terrain that
[09:51] inform why these transitions happen in
[09:54] this case where the vegetation gets more
[09:58] lush you see that the mountain escapes
[10:00] starts to block the drier desert winds
[10:02] the water paths are the first areas
[10:05] where trees start to grow and when you
[10:07] zoom into these areas you can actually
[10:09] see how the terrain and how the terrain
[10:11] features actually start to inform these
[10:13] transitions another example I'm just
[10:18] have a few examples to go through
[10:20] another one where the terrain creates
[10:22] these beautiful patterns of transitions
[10:25] in between different biome types and
[10:27] lastly there we go
[10:33] European Alps where the transition in
[10:36] height actually causes a transition from
[10:39] like a regular green area to like the
[10:42] snowy mountains and these transitions
[10:44] happen over incredibly large area so
[10:48] let's have a look and go back at Hearst
[10:51] to Hurston and I have a bit of a chat
[10:55] about the challenges we had so we were
[10:57] not really unhappy with the results that
[11:00] we were getting especially up close I
[11:02] think that was pretty good
[11:03] especially considering the scale of our
[11:05] game but we needed a wider range of
[11:08] biomes and we could only imagine like if
[11:10] you think about Terra Prime or anything
[11:12] that's that's very complex that we still
[11:15] want to do we needed a system that
[11:17] worked smarter and better so it became
[11:19] clear that our tiled approach was making
[11:22] it really hard to to scale and create
[11:24] convincing transitions
[11:28] now next slide alright so this is a very
[11:34] unflattering look of hjerson I turned
[11:37] off the atmosphere and some of the
[11:38] effects that usually go on top of this
[11:40] but what we usually do or attend did
[11:43] before was paint a global texture it
[11:45] sort of represents the different areas
[11:47] on a planet so what we have here is on
[11:50] the pole it's a bit d saturated but
[11:52] that's where the Savannah area means the
[11:54] wasteland
[11:55] then although it's it's not super crisp
[11:58] it kind of gets the point across
[12:00] especially with the effects layered on
[12:01] top of it when you start flying close to
[12:03] the surface especially with all the
[12:05] effects turned off you start to see
[12:06] where the global texture starts to fill
[12:09] and you get this blurry look the
[12:11] textures that are loaded locally for
[12:13] each patch of terrain or each tile is
[12:15] not fully loaded in and you hit this
[12:17] dead zone in between where it just looks
[12:19] a bit blurry but muddy and it's not
[12:22] really getting us the results that we
[12:24] saw on Google Earth and then when you
[12:27] get even closer you start the CD
[12:28] individual patches coming in the texture
[12:32] of the biome becomes visible and
[12:34] although up close this this is a cool
[12:35] result especially when you're walking
[12:37] around it these transitions yeah they
[12:41] can be quite hard so what you see here
[12:44] is a few wasteland tiles met like
[12:47] meeting savanna tiles and the artist and
[12:50] the art team had a really hard time just
[12:52] trying to alleviate these areas to get
[12:55] them as good as possible by creating
[12:57] additional tiles to sort of fit in
[12:59] between and it became quite complex to
[13:02] set up and maintain especially with more
[13:05] biomes and a more variety coming in and
[13:10] the drawback from the collar map up
[13:12] close is also that it didn't quite have
[13:15] the resolution that we wanted to so more
[13:20] complex men planets meant more
[13:22] individual files to maintain all of
[13:25] these collective assets informed the
[13:27] final look so if you wanted to change a
[13:30] color on the planet you had to go
[13:32] through all these individual files and
[13:34] it's abused the later so we had all
[13:36] these terrain files these terrain steps
[13:39] they had color information as well
[13:41] so if you wanted the red on the planet
[13:43] to be a bit less red we had to tweak all
[13:45] of those individual files could mentor
[13:47] back over 20 or even more the overall
[13:51] look and final look at the planet was
[13:53] easily made up of 500 files that we all
[13:56] needed to maintain keep track of and
[13:58] made sure that they were all in sync so
[14:00] this you can imagine that this makes
[14:02] addressing feedback changes whenever I'm
[14:06] talking with Ian about art direction
[14:07] stuff it becomes quite tedious to get
[14:10] all that stuff polished up and very
[14:12] time-consuming so we had a to do a
[14:16] fundamental rethinking of how we want to
[14:19] approach planets and the first thing
[14:21] that we wanted to do was separate the
[14:22] process or the idea of a biome
[14:24] temperature and when its lush or or dry
[14:28] from the actual terrain shape and by
[14:31] this we could keep our terrain library
[14:33] clean and we don't have to create
[14:36] additional color maps for every time we
[14:37] want to have a different color or a
[14:39] different type of terrain showing up so
[14:43] that way you can get large changes on a
[14:48] global scale this is not Google Earth
[14:52] anymore this is v4 and what we see here
[14:56] are natural transitions that globally
[14:58] occur globally due to gradual change in
[15:01] temperature humidity and weather
[15:04] conditions and because these are
[15:08] occurring over a large scale informed
[15:11] locally by the shape of the terrain
[15:13] every area where it transitions or where
[15:17] a biome appears is informed by the shape
[15:20] of the terrain and it's truly unique to
[15:21] that area and we're no longer seeing a
[15:24] patch of Dempster savanna trees and then
[15:27] next to it is the wasteland you sort of
[15:29] see that stuff repeat it's a large-scale
[15:32] transition and everything flows into
[15:34] each other so we're no longer fixing a
[15:37] biome to a specific tile and that way
[15:40] across the server's over the over the
[15:42] entire globe every area truly becomes
[15:45] unique and this is a example of how
[15:47] extreme it could go with colorings just
[15:49] as an example of some of the stuff you
[15:52] might see in the future
[15:55] just to reiterate this this another
[15:59] thing that we wanted to change actually
[16:00] it's the blending cross fading
[16:03] [Music]
[16:05] transitioning between areas and on the
[16:07] one hand on the left side we see v3
[16:10] zooming out on the other side we see fee
[16:13] for and Burma free for is not this one
[16:16] is not entirely done we would like to
[16:18] paint a bit more but we had to come up
[16:20] with an example and what you see here is
[16:22] a seamless zoom out with no visual
[16:26] artifacts with things changing or or
[16:28] fading or popping whereas in v3 we still
[16:31] had a lot of transitions between all
[16:33] these layers of textures going on and
[16:36] you can even see it at some point
[16:38] the v3 planner if you zoom out far
[16:39] enough this is a global texture kicks in
[16:42] it's the only one that that remains and
[16:44] it might actually have a completely
[16:46] different color from where you actually
[16:48] start it and I'm pretty sure people have
[16:50] not like experiences as well you see a
[16:52] spot on the planet you want to go there
[16:54] because it looks cool you go there and
[16:55] it's actually a very different color
[16:57] experience that you expected whereas at
[17:00] the v4 you can actually still make out
[17:03] the pattern the exact terrain shape that
[17:08] we started with and I think this is a
[17:11] like a big big difference okay let's
[17:14] move on
[17:22] so those were the things that we really
[17:26] wanted to improve and yeah this one is
[17:29] another one that is especially important
[17:31] for the team
[17:32] like I said managing and keeping track
[17:35] of 500 different files doing color
[17:36] tweaks and less stuff it's become quite
[17:39] tedious especially with complex planets
[17:40] so a very clean file structure with
[17:45] library items feeding into one file that
[17:47] is edited authored and and maintained
[17:50] inside the editor in a very artist
[17:54] friendly tool so proof in the pudding
[17:59] Chris already spoiled it
[18:01] v4 meant that all all the planets that
[18:04] we've done in the last I guess two and a
[18:07] half years since we started shipping
[18:08] planets had to be updated to fee for
[18:10] which was a bit of a you can nervous
[18:15] from it right that's a lot of work that
[18:18] we put into that and it was the true
[18:21] test of how efficient this new planet
[18:24] tech would be and how efficient this
[18:25] tool would be so I'm happy to confirm
[18:28] that the team is updated every single
[18:30] planet for 3.8 to v4 and it will be
[18:38] there
[18:43] so just to get a bit of a start into the
[18:48] more technical areas I just want to
[18:50] share a little bit what we do on the art
[18:51] creation side that feeds into what v4
[18:54] does now already for the earlier version
[18:58] in v3 we use these little simulation
[19:00] tools that one of our in-house artist
[19:04] Sebastian Schroeder who had a big part
[19:06] in the planet tech v4 he couldn't make
[19:08] it but essential input he made all these
[19:12] cool simulation tools that help us with
[19:14] terrain simulation we see erosion which
[19:17] is one a very common simulation that we
[19:20] that you would do with building terrain
[19:23] water flow simulation we see
[19:27] displacement of sand and soil based on
[19:30] wind input and we see terracing so these
[19:32] are just a few examples of the small
[19:34] little tools that we use in-house and
[19:38] see it helps up until now these tools
[19:42] stay we use them just as like a personal
[19:45] thing like you would have a brush in
[19:46] inside your your toolbox you just use it
[19:49] and then you have an end result an
[19:51] output that comes from it and then we
[19:52] feed that into the engine so we were
[19:54] able to get like if you're at the right
[19:57] distance you get these beautiful terrain
[19:59] colors and terrain maps so we're not
[20:02] unhappy with that but every time we
[20:05] wanted to change something or I wanted
[20:06] to make a different combination of
[20:09] colors of vegetation you would have to
[20:10] redo it or make it new one so instead of
[20:12] that making final outputs and specific
[20:15] masks we decided to get those tools and
[20:19] simulate stuff and use the simulated
[20:21] data and feed that directly into the
[20:23] engine so this was the old one we had
[20:26] masks we had color maps specific
[20:28] patterns where where certain assets
[20:30] would show up and we started to rethink
[20:32] about rethink this and okay how can we
[20:34] simplify this and make this easier for
[20:37] everything else to use so we decided to
[20:41] go for humidity and temperature it's
[20:45] there's the hundreds variations of
[20:47] things that you can think of that they
[20:50] will cause transitions of areas and
[20:51] biomes but I think ten
[20:53] sure whether it's something is hot or
[20:55] cold whether it's dry or very humid or I
[20:59] think those are the two most important
[21:01] things and if you look at some of the
[21:02] references that we looked at even up
[21:05] close the transitions are always
[21:06] happening because it gets colder because
[21:09] there is water in the area and even in
[21:11] desert areas where there's no water
[21:13] those flow lines they still are visible
[21:16] because if there is water it will
[21:18] trickle down into into those pathways
[21:19] stuff will sort of follow and get left
[21:22] behind in those areas so I think with
[21:25] those two maps we can capture a lot of
[21:29] interesting details so this is the new
[21:31] set height normals just due to shading
[21:35] necessities flow maps and temperature so
[21:39] you can see in this one point where the
[21:43] flow maps where the water would flow
[21:44] where water would accumulate in the
[21:47] valleys and on the height it's a
[21:50] relative simple one I think high the
[21:52] temperature is more important on a
[21:53] global scale but you see the differences
[21:56] in temperature if you go all the way up
[21:58] the hill or mountain to make sure that
[22:02] every terrain set every height map
[22:07] represents the exact same values with
[22:09] those with those flow maps and
[22:10] temperature maps we have to unify all of
[22:14] our library height maps basically our
[22:16] whole library of height maps and we made
[22:19] them all exactly 4 by 4 kilometers with
[22:23] a maximum height of 1 kilometre up and
[22:25] in a maximum of one kilometer down and
[22:29] the reason for doing this is that if we
[22:31] run these simulations on each height map
[22:33] the data that comes out of that
[22:35] represents the exact same value for each
[22:38] height map and this way in the engine we
[22:42] can actually blend these perfectly
[22:43] together and create this seamless canvas
[22:46] of data that that we can paint on and
[22:49] with that I'm gonna hand it over to my
[22:51] colleague Allie who will go into how
[22:54] that actually is handled inside the
[22:56] engine
[22:58] thanks a lot Michelle
[23:05] right so yeah but talk about how we make
[23:09] use of this climate data first want to
[23:11] step take a step back and talk about the
[23:13] different approaches to how you can
[23:14] build a planet so I've got a line here
[23:18] showing all the various scales we need
[23:19] to accomplish and a typical
[23:22] first-person-shooter
[23:23] annual average small game I would
[23:26] typically made of maybe two layers of
[23:28] textures so you would have like your
[23:29] your small ground textures and might be
[23:31] representing millimeter accuracy details
[23:34] and that what type of take you up to a
[23:36] meter or a couple of meters and then
[23:38] they'll have a next layer of texture
[23:40] which would be their terrain and you
[23:41] typically offer that something like a
[23:43] one meter resolution and then that would
[23:45] cover your entire play space so say a
[23:47] kilometer for a small game and that
[23:50] would typically account for about five
[23:52] megabytes of memory depending on the
[23:53] tech here using which is awfully nice
[23:56] and cheap in this generation but moving
[23:59] on to something a bit larger a large
[24:00] open world game will typically stretch
[24:02] ten kilometers by ten kilometers or that
[24:04] type of scale so 100 kilometers squared
[24:07] over something like this you're looking
[24:09] for 100 megabytes if you use the same
[24:10] per pod so that's still quite sensible
[24:13] amount of memory something you can
[24:14] easily achieve on a cone gen console and
[24:16] definitely on a PC that's fine that's
[24:19] not what we're doing though so what do
[24:21] we take the same approach and push it up
[24:23] to star system scale about five hundred
[24:26] terabytes for a planet so unless
[24:28] everyone's got some nice meaty SSDs you
[24:31] might be struggling there so clearly
[24:33] that's not the way that anyone builds a
[24:34] planet so what about a marker talked
[24:38] about procedural planets like v1 was
[24:40] almost a fully procedural approach had
[24:42] limited our input so if you build a
[24:45] fully procedural planet generation what
[24:48] do you tend to do is feed it of some
[24:49] very high-level data it could be as
[24:52] simple as just the distance from the Sun
[24:54] and the size the composition of the of
[24:57] that request or it could be more
[24:58] detailed like a map of the continents
[25:00] things like this and then what you
[25:03] typically have is lots of layers of
[25:05] complex noise and algorithms that would
[25:07] procedurally determine all the details
[25:09] you would actually get on the planet so
[25:11] it'd all be driven by algorithms
[25:13] basically there were
[25:13] no artist has ever hand-painted a
[25:15] mountain it would just come from the
[25:17] system which sounds amazing photos sure
[25:20] here's a very limited quick example to
[25:23] happen to show what type of a small
[25:25] twins am and how you start off something
[25:27] lumpy and then it turns into something
[25:28] bit again so that's a very small scale
[25:35] example so this sounds good so if that
[25:38] type of approach you can generate
[25:40] infinite planets which is good yeah we
[25:42] get the whole solar system or whole
[25:43] universe filled but actually it's not as
[25:46] good as it seems you the variety you get
[25:48] is actually just limited by the
[25:49] complexity of the algorithm so I could
[25:52] write an algorithm to say where rivers
[25:53] should spawn and how they should flow
[25:55] and you might get a million different
[25:57] rivers B will never see a waterfall and
[25:59] not until I go and then adjust the
[26:00] algorithm at a waterfall so you end up
[26:03] adding more and more layers of
[26:04] complexity which is fine but at some
[26:07] point especially with a game like ours
[26:09] and you're trying to simulate hundreds
[26:11] of different planets that are very
[26:12] unique you know we don't want 100 earths
[26:14] or 100 you know lunar moons we want lava
[26:17] planets we want you know all these
[26:18] radically different planets so this
[26:21] approach doesn't really work for us
[26:23] and what we actually want is something
[26:25] that's very art directed you know art
[26:27] director Ian will tell us you know shows
[26:29] exactly what he wants like a cliff to
[26:32] look like it might be the slope of it
[26:33] the shape of it the colors and we have
[26:36] to match that as their as the tech team
[26:37] so doing something fully proceed well
[26:41] doesn't really allow us to do that and
[26:43] it becomes a very technical non artistic
[26:45] process which is quite limiting so what
[26:49] a start isn't do well up till v3 we we
[26:53] combined four layers of textures so
[26:56] typically would use the first few layers
[26:59] you would get in a normal first person
[27:00] game but then we had this two extra
[27:02] layers of textures that we were
[27:03] stretches all the way up to the global
[27:05] type of scale and we blended all these
[27:08] together in the shader and it cost us
[27:10] about 300 Meg's of memory which is
[27:11] something that you know most GPUs can
[27:13] easily handle so that that's fine but
[27:16] like Michelle alluded to it can be
[27:18] difficult to manage all these different
[27:20] layers and to blend them to try and
[27:22] achieve the art direction at the ground
[27:25] level but then still to have a
[27:27] a seamless transition to space and there
[27:29] was always these hard decisions we had
[27:31] to make where if we won the too much
[27:32] color version on the surface then on the
[27:34] from space we maybe couldn't achieve it
[27:36] or there was this constant balancing out
[27:38] so we need to do something here
[27:40] so the fundamental approach for v4 is to
[27:44] make use of climate data so we keep
[27:47] everything we had but rather than like
[27:50] Michelle said painting at all color maps
[27:51] we now paint this climate data or
[27:53] simulate the climate data and on top of
[27:56] that we apply a global rule set for each
[27:58] planet that says based on that climate
[28:00] what would this planet do so this can
[28:02] tell you FM form what the color of the
[28:04] ground would be whether it's sand or
[28:06] snow whether you might get a tree placed
[28:08] there or walk it informs us everything
[28:11] about the entire surface and by using
[28:13] type of this top-down and bottom-up
[28:15] approach at the same time we type of
[28:18] overcome all of the limitations that we
[28:19] have previously here's a 2d chart of
[28:22] temperature versus humidity Michelle
[28:25] mentioned we use these two these two
[28:28] properties because they seem the most
[28:29] relevant for most variations on a
[28:31] planet's surface but we're quite loose
[28:33] with the term they artists have a bit of
[28:35] flexibility what they put into them and
[28:37] obviously some planets or moons
[28:39] especially maybe humidity isn't relevant
[28:41] for them we can we could vertically just
[28:43] use any other single measuring one for
[28:45] climate there but the point is we've got
[28:47] two axes two things we can control so
[28:50] what we do is then for each individual
[28:52] point on this 2d graph we get two we get
[28:57] to pick exactly what we want to appear
[29:00] so down here we might have like you know
[29:01] obviously snow textures where we have
[29:03] different types of trees appearing in
[29:04] the temperate rainforest we get to
[29:06] control the exact appearance at every
[29:08] single location within this chart and we
[29:11] have a hundred and twenty eight
[29:12] graduations of temperature and humidity
[29:13] which leaves us with 16,000 very
[29:16] variations we have to fill of today what
[29:18] would appear on the planet at that
[29:20] specific condition which is quite a lot
[29:22] filled with so here's a quick demo
[29:26] showing a how a small terrain pass just
[29:28] by adjusting the climate data we can
[29:30] very quickly adjust the visuals
[29:38] and you can see that we always get like
[29:40] logical shapes and colors coming in so
[29:44] yeah the problem with this now generates
[29:46] as a new problem we've got 16000 sets of
[29:48] conditions we need to set up somehow so
[29:51] for the artists that were presented
[29:53] quite a challenge our first approach was
[29:56] for them to have like they would
[29:57] manually create these rules where I want
[29:58] this tree to appear at this temperature
[30:00] range and at this altitude and it was it
[30:03] was too unwieldy so instead we moved to
[30:05] a system where we literally paint the
[30:08] surface of the planet using like a
[30:09] paintbrush
[30:09] so this is a quick demo of this being
[30:12] used here and because we don't wanna
[30:15] paint the entire surface of the planet
[30:16] when you paint on the surface you're
[30:18] actually painting what you would like to
[30:20] appear at them climate conditions so if
[30:22] you paint somewhere there's a 20 degree
[30:24] C and the humidity is 50% you're
[30:28] actually painting every single point on
[30:29] the planet that has exactly those
[30:31] climate conditions so by doing it this
[30:33] way we can very quickly build up very
[30:38] interesting biomes and while it looks
[30:41] like you're just painting the small
[30:42] layer of land in front of you your
[30:43] painting huge areas of the planet at
[30:45] once and this was something that was
[30:47] immediately appealing to the artists
[30:48] because this is a very familiar workflow
[30:50] for anonymous worked on a game engine
[30:53] before like a smaller scale one but yeah
[30:56] it scales up for us so here we've just
[30:58] painted a few trees and bushes an
[31:00] instant you can see the whole areas now
[31:01] being I think everybody did a little
[31:03] happy dance when that dent moment came
[31:04] in the paint okay
[31:11] so when we when they paint all this data
[31:15] it goes into what we call a lookup table
[31:17] which is just that 2d chart and we
[31:19] generate a whole bunch of different ones
[31:20] so here's a couple of them or three of
[31:22] them so we have the ground color the
[31:24] type of surface or wood maybe so snow
[31:25] work that informs the physics engine of
[31:28] what to do there and what textures we
[31:29] should place but then we also have
[31:30] things like tree coverage - how much how
[31:32] much trees would spawn there so that
[31:34] when we at space level we can still draw
[31:37] the forests and - all the vegetation
[31:39] where typically most games would have to
[31:40] call that stuff out they just couldn't
[31:41] afford to deal with it we can understand
[31:44] what the you know say if we're looking
[31:45] at the Amazon rainforest we can
[31:46] understand what the color should be
[31:48] because we don't really want the ground
[31:50] color from space like there might be
[31:51] brown in the rain forest but we want the
[31:52] green of the lush trees above it so we
[31:55] can generate all this data and we can
[31:57] use any altitude and it gives us a lot
[31:59] of power and also this rich information
[32:01] we can use for various other gameplay
[32:03] effects which you'll see a bit more
[32:05] later today we saw a sneak peak of on a
[32:07] first demo of how temperature can drive
[32:09] things but there's a lot to come with
[32:11] the these planet climate conditions so
[32:15] here's here's a visualization of the
[32:17] climate on cell in the red and green are
[32:20] just visualizations of the temperature
[32:22] and humidity and one of the look-up
[32:24] tables are shown there which shows
[32:25] everything us the ground color so once
[32:28] we apply that to the surface it starts
[32:30] to look a lot more reasonable and then
[32:33] same for Microtech we've got all the
[32:35] climate conditions there it's mostly
[32:38] much snow and Microtech no surprise but
[32:40] yeah and then to build it up from the
[32:43] surface to see the other side of it so
[32:45] this is purely just the terrain plus the
[32:48] global lookup table so it looks pretty
[32:49] boring at the moment once we apply some
[32:53] temperature variations there's a little
[32:54] bit more interest
[32:55] the humidity variations gives us quite a
[32:58] lot and then on top of that we have a
[33:00] medium scale type of terrain textures
[33:03] which are driven from the climate and
[33:05] the slope and then finally we add the
[33:08] the detailed textures now our climate
[33:11] data is only stored at four meter
[33:13] resolution so that doesn't give us
[33:15] individual stones and walks we have to
[33:17] add a layer detailed ground texture
[33:20] but we need them textures to look
[33:22] consistent with what the climate data
[33:24] tells us so if the climate table tells
[33:26] us we should be having yellow sand here
[33:28] then we may need to make sure we have
[33:30] yellow sand now we can't make a texture
[33:32] for every single scenario so the
[33:35] solution for that is we normalize all of
[33:37] our ground textures so that they will
[33:40] have an average of mid gray color which
[33:42] you can see in top left and then we have
[33:45] an average amount of bumpiness which is
[33:47] the the middle one and right hand side
[33:48] shows the roughness so they're all type
[33:50] of normalized so you have this equal
[33:52] amount of stuff whatever it is they're
[33:55] storing in that texture and then when we
[33:57] come to apply it to the surface we type
[33:58] of use a physically based algorithm to
[34:00] rescale them to achieve what the lookup
[34:03] table told is it wanted or what the
[34:05] artist wanted but we preserve all the
[34:07] details there in the original texture so
[34:09] in the color map that might be slight
[34:10] hue variations and in the roughness map
[34:12] there might be like you know pebbles and
[34:14] stones and sand of different densities
[34:16] and roughness so this allows us to keep
[34:18] all of that detail but make sure it's
[34:19] consistent and that consistency is
[34:22] really important for us we actually
[34:23] apply the same concept that's Michelle
[34:25] mentioned at the four kilometer scale so
[34:27] here's a very basic example of a bunch
[34:30] of different terrain tiles next to each
[34:33] other and after there's a very hard join
[34:35] between them but because we've made the
[34:37] climate data normalized and in the same
[34:39] range when we try to combine them
[34:42] together we get a nice seamless
[34:44] transition and then we apply the climate
[34:46] data will sit on top of that then it
[34:49] feels completely natural and even in
[34:51] this very primitive example it's very
[34:52] hard to see the transitions and we get a
[34:54] very natural and logical progression
[34:56] from the terrain which is really nice
[34:59] there is one slight flaw of the
[35:01] technique which is a saying this little
[35:03] highlight box I've got in the bottom
[35:04] right if I want to have a mountain range
[35:06] that's going to cover multiple biomes
[35:09] multiple climate conditions if i zoom
[35:11] out to space I don't want to just get
[35:13] the average color of that region I want
[35:15] to make sure to see all details that
[35:18] would have been in there so in this I've
[35:19] got a combination of shrub land and snow
[35:21] and polar desert so depending on how
[35:24] varied that terrain was I should be
[35:25] seeing a mixture of them colors but just
[35:28] using the average color which is what
[35:29] you tend to get and the engine if you
[35:31] without any extra tech you just get the
[35:33] color
[35:33] that polar region in the middle polar
[35:35] desert so to solve this we came up with
[35:38] cystic Allah model which we call
[35:41] variants Maps which is shown on the
[35:43] right hand side here which is where we
[35:45] store the variation for inside a texture
[35:49] so the left hand side it shows us the
[35:50] humidity of a particular patch of
[35:52] terrain and the right hand side is
[35:54] showing us the brighter areas is where
[35:56] the the climate is varying highly in
[35:58] that area and then as we increase in
[36:01] altitude the hardware the GPU hardware
[36:04] naturally uses lower resolution textures
[36:06] and to cover the small scale so then the
[36:11] variation map then increases in
[36:14] brightness to cover the amount of
[36:15] variation that is within one pixel now
[36:17] so as we go now it's a 32 by 32 texture
[36:22] you can see that it's much brighter now
[36:23] and it's still the areas that are white
[36:25] now are the areas that had a lot of
[36:27] variation previously and when it comes
[36:30] down to actually applying the climate
[36:31] will set rather than just applying the
[36:33] rule for the particular location of the
[36:36] particular climate data we have now we
[36:37] actually use these variation maps to sum
[36:40] up an area of the climate data which we
[36:43] use the GPUs and a topic filtering for
[36:45] that and that allows us to sample all of
[36:47] the details that would have been within
[36:48] one pixel and make sure it's faithful to
[36:51] the original image the when you get down
[36:53] to the surface and you may have like you
[36:55] know 50 percent snow 50 percent grass
[36:58] when you zoom out you will get the exact
[37:00] blend you would expect on approximation
[37:01] of the blend of snow and grass so yeah
[37:06] that that really helps us make sure we
[37:08] hit that consistent view from space and
[37:10] my softness and it always the need to
[37:12] have a blend to some other texture when
[37:14] you're far away so that's that's the
[37:15] real key thing we get from v4 in my eyes
[37:17] so I'm gonna hand that to Marko now to
[37:20] talk about how we put all this together
[37:21] and how we turn this into a planet okay
[37:24] cool Thank You Ari
[37:31] okay cool let's have a quick look at the
[37:35] planet generation so we are starting
[37:37] from a cube it's cube face is projected
[37:40] onto a sphere the inter planar surface
[37:43] is generated and render at different
[37:45] levels of details and the amount of
[37:48] details increases as you get closer to
[37:50] the surface here you can see a debug
[37:54] screenshot showing the surface level
[37:56] humidity as we discussed before in
[37:59] before we are blending or nearby
[38:01] ecosystems for altering vertices using a
[38:04] bicubic interpolation approximation here
[38:10] is the same view I was showing
[38:11] temperature climate data so here is
[38:16] another improvement as we mentioned that
[38:19] we made in v4 is that object scattering
[38:22] is driven by the same climate data that
[38:24] we are using for terrain generation here
[38:27] you can see the object presets IDs
[38:29] driving object spawning on-demand this
[38:34] is the same view while showing the
[38:36] colors driven by climate data and
[38:38] textures and here you can see the y
[38:41] frame mesh geometry generated from
[38:44] elevation data
[38:45] the terrain geometry blending is done on
[38:49] CPU this is the same view as before
[38:53] we're showing the planetarium without
[38:54] any objects yet and this is the final
[38:58] view with objects generated on terrain
[39:01] so we have a separation between
[39:04] large-scale and ecosystems which are the
[39:07] larger rocks trees and so on and then we
[39:11] have the so-called ground cover objects
[39:13] which are the smaller objects that are
[39:15] generated at ground level only
[39:18] additionally we have improved the
[39:20] cliffside generation and yeah the
[39:25] objects are placed based on climate data
[39:27] and object preset settings and we are
[39:30] using LOD clusters for large-scale
[39:32] forest rendering which you will see
[39:34] Microtech a ground level we have
[39:37] additional parallax and ground texture
[39:40] details so physics
[39:44] collision geometry is generated
[39:46] on-demand on client and servers when
[39:48] players and spaceships are interacting
[39:50] with the physics screen here in light
[39:53] grey you can see the physics proxies are
[39:56] generated for terrain rocks and objects
[40:02] so generating on-demand physics
[40:06] on-demand is tricky because the
[40:07] spaceships are actually moving at crazy
[40:09] speeds across the surface and obviously
[40:12] we cannot store the entire planet
[40:14] geometry in memories otherwise would be
[40:16] terabytes of data so each terrain patch
[40:20] is built in parallel on CPU the workload
[40:24] is distributed by the job system to all
[40:27] available course and basically the
[40:30] server is building a physicalism mesh
[40:32] for each client so we have many other
[40:37] features on the planets for instance
[40:39] Caves here isn't here you can see an
[40:42] example of a cave assembled by the
[40:44] procedure layout to after generation the
[40:48] caves are turned into object containers
[40:50] and they're placed on the planet surface
[40:53] so using object containers we can take
[40:57] advantage of object container streaming
[40:59] in future and here you can see an
[41:02] example of a cave with an exclusion
[41:04] volumes which is used to avoid
[41:05] generating rocks on top of the cave
[41:08] entrance here is another example of
[41:12] exclusion volumes you can see how the
[41:15] trees are avoiding generating inside the
[41:18] volumes additionally we have space
[41:22] stations orbiting around planets all the
[41:25] space station interiors are generated by
[41:28] the procedure layout tool as well and
[41:31] then are placed as object containers in
[41:33] space yeah another new feature we added
[41:38] in v4 is the frozen ocean which can be
[41:40] seen here on Microtech the frozen ocean
[41:44] is physicalized and players can walk
[41:47] drive vehicles on it in these pictures
[41:50] we're showing the frozen ocean collision
[41:52] mesh generated on demand
[41:55] so regarding mining the way it works is
[42:00] with some of the procedural objects are
[42:03] tuned into my novel entities and the
[42:06] player can interact with them when
[42:08] extracting minerals and with persistence
[42:11] becoming online players are able to
[42:13] deplete planet resources affecting the
[42:16] universe economy so let's show some of
[42:21] the rework which is coming with three
[42:23] point eight I'm just gonna let this run
[42:27] a little bit obviously we wanted to at
[42:31] least close close this talk with showing
[42:35] you guys the current state of all the
[42:36] rework the team is like I said the team
[42:39] has been working hard and is still
[42:41] working at it we want to make sure that
[42:43] we deliver the best possible planet
[42:45] experience for a three point eight
[42:47] coming up but we're already seeing a lot
[42:51] of the features that came in would be
[42:53] for making it everything every location
[42:56] and we've known like it were built up so
[42:58] up until now looking way better and if
[43:02] there's there's a lot of subtle
[43:03] differences that might not be apparent
[43:05] in at first glance but we just wanted to
[43:08] reassure you guys all the planets are
[43:10] updated and they will be coming so I
[43:13] guess we could already start thanking
[43:15] everybody who's been involved with this
[43:18] because it's been to summarize it's been
[43:21] like a full year working on this with
[43:24] some very high-level people and a lot of
[43:25] people involved with this so this was
[43:28] not a an easy easy undertaking it was a
[43:32] team of four so thanks for all the
[43:38] people on the organics team thanks to
[43:40] Marco Ali
[43:41] Sebastian Strider other people on the
[43:44] graphics and engineer
[43:47] and we hope you have a great time with
[43:50] the new planets yeah I hope you guys
[43:54] have enjoyed this presentation thank you
[43:56] for listening and enjoy the rest of the
[43:59] show thank you
[44:01] thank you

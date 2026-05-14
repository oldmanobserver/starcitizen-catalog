# CitizenCon 2948 - Panel: Crafting Space

**Video:** https://www.youtube.com/watch?v=7WfjHO6oHGs
**Date:** 2018-10-25
**Duration:** 41:07

## Transcript

[00:00] we have alley Brown Mike Snowden been
[00:02] carrying and McAfee attack everyone so
[00:06] today we're gonna be talking about space
[00:08] but before we do and then kick things
[00:11] off with a quick trailer to show you
[00:12] what's to come
[00:29] [Music]
[00:39] so I'm Ally brown director of graphics
[00:42] engineering I'm responsible for all of
[00:44] the graphics programs on the company and
[00:46] all the visual technology we've got Ben
[00:49] Perry senior graphics programmer who
[00:51] does all the cool stuff that I wish I
[00:52] had time to do Mike Snowden our director
[00:55] of grad V FX so
[00:57] and Michael McKay also the senior VFX
[01:02] iist so today we're gonna talk about how
[01:04] we go about developing the technology
[01:06] and workflows to create the the space
[01:10] environments and we've been working on
[01:12] this for quite a while and we wanted to
[01:13] improve our space so as you all know
[01:17] it's a space game space in reality it
[01:20] can be pretty boring that's an actual
[01:22] massive photo of Earth with not a lot
[01:24] between us on the moon so that's real
[01:27] and all but that's not what we own in
[01:28] our game clearly or not all the time so
[01:31] here's our nebula actual photo from NASA
[01:34] but you know this looks awesome
[01:36] it looks great it's the type of thing
[01:37] you might expect in a sci-fi film or
[01:39] game but this isn't real this is being
[01:43] brightened significantly from the NASA
[01:44] photo and they've also used false colors
[01:47] where red green and blue used to
[01:48] represent different elements it doesn't
[01:50] look like this for the naked eye it's
[01:52] also 24 24 light-years across
[01:55] and a billion times less dense than a
[01:58] laboratory vacuum chamber so actually if
[02:00] you were in this it would be impossible
[02:02] to you and it just really wouldn't be
[02:03] that fun to fly around but nonetheless
[02:06] we still have this perception we want
[02:09] something like this we want some visual
[02:10] to fly around in space so that's what we
[02:12] wanted to explore as part of this R&D
[02:15] process so here's some very early
[02:17] prototypes of a type of gas clouds
[02:20] vaguely similar to that nebula and our
[02:23] talented art team tried a bunch of
[02:25] different type of looks and styles of
[02:27] what type of shapes we could have in
[02:28] space I've let these play out for a
[02:30] little boy so these were developed in
[02:35] prior to type of I saw some a type of
[02:38] volumetric rendering technology called a
[02:41] fume effects and Houdini and these using
[02:44] our gas cloud rendering system which
[02:46] we've been developing for some time and
[02:48] then I'll talk about a bit later on and
[02:50] they look great they were ly interesting
[02:53] but again they have this type of
[02:55] fundamental problem where of scale where
[02:58] if you look at this you might imagine
[03:00] that maybe a hundred miles or thousand
[03:02] miles
[03:02] simple about wide and if it's type of
[03:05] that type of scale the scale of a moon
[03:06] or a planet if you're flying through it
[03:08] and then it's really not gonna be
[03:10] anything there it's gonna be like just
[03:11] in the middle of a cloud when you're in
[03:13] a play and there's just nothing really
[03:14] interesting to explore at the type of
[03:16] conventional spaceship speed so to
[03:19] demonstrate that here's a a cutie in a
[03:23] into a gas cloud this gas cloud is about
[03:26] 300 kilometers wide and while the Qt it
[03:30] looks great once you stop there's
[03:33] nothing really moving other than these
[03:34] nearby asteroids so again in type of
[03:36] it's a good backdrop it's interesting
[03:38] but it's it's not giving us that a
[03:40] gameplay we quite wanted so we planned
[03:45] the type of overcome this problem in two
[03:47] different ways first is planetary wings
[03:50] list which is similar to this which is
[03:52] sans rings so these are huge obviously
[03:55] however they're extremely thin in
[03:57] reality so sans wings were only about 10
[04:00] meters high on average or the widest
[04:02] point it's a couple of kilometers so
[04:04] that's nice that's top of the scale a
[04:05] spaceship can fly around pods between
[04:07] asteroids like it expect in a film yeah
[04:10] they stretch for you know hundreds of
[04:12] thousands of miles so Saturn is 120
[04:14] thousand kilometers wide and obviously
[04:16] the wings extend much further than that
[04:17] so that's type of an interesting play
[04:20] space for us and after we have some
[04:22] simple afterword wings in the game
[04:23] moment well that's some that we
[04:25] definitely want to expand on and because
[04:26] they're effectively 2d they're
[04:28] relatively simple to offer and they just
[04:30] they give us a very easy mechanism of
[04:33] getting a good interesting play space
[04:35] however that's not something we're going
[04:37] to focus on for the moment oh one more
[04:40] thing
[04:41] yeah so this is an artistic concept
[04:44] image for the type of thing that we
[04:46] might do for planet oohing just to add a
[04:48] little bit more interest so obviously it
[04:51] looks pretty cool and you can imagine
[04:52] flying through this who needs a little
[04:55] so yeah this is something we're really
[04:57] interested to develop but we're gonna be
[04:59] looking at this next year this year what
[05:01] we wanted to look at is something a bit
[05:02] more volumetric
[05:03] so
[05:05] one of the problems with this is
[05:06] although it looks great and it'll be fun
[05:08] to traverse it's because of its
[05:10] effectively 2d you could just fly
[05:12] anywhere straight away there's nothing
[05:13] that's hidden there's no type of journey
[05:15] within this once you're in the asteroid
[05:17] once you're outside of it you can just
[05:19] fly 20 point and then just dive in so it
[05:22] gives us something but the designers
[05:25] were asking for something something more
[05:26] something where you could have like a
[05:27] journey like you know a 20-minute
[05:29] adventure into some type of structure so
[05:33] we started looking at more of a
[05:35] volumetric approach and what we wanted
[05:37] to do was build networks of tunnels and
[05:40] chambers that contained in within a gas
[05:42] cloud so like we had earlier we saw them
[05:44] evident pretty nebulae looking things we
[05:47] wanted to have something that look like
[05:48] that from the outside so that but inside
[05:50] we got something more like this some of
[05:52] those like clouds and we can dodge
[05:53] between things or like conventional
[05:54] speeds so over about the last two or
[05:57] three months we've had the graphics team
[06:00] VFX team and our team all coordinated
[06:02] together to make a prototype which is
[06:04] going to showcase how we want to make
[06:07] future space environments so I showed
[06:10] you a brief clip at the start at the end
[06:11] of the presentation will show you the
[06:12] full prototype but first of all type of
[06:14] break down the technology and the
[06:16] workflows that go into it and then save
[06:18] the good stuff for the end so yeah
[06:21] building volumetric data turns out to be
[06:23] really hard
[06:23] luckily the film industry has solved
[06:26] this for us pretty much there's lots of
[06:28] really great software out there that are
[06:30] using the film's I mentioned before
[06:32] Houdini and fume effects this is Houdini
[06:34] I think and they have really powerful
[06:37] tools so you can combine fluid
[06:39] simulations and multiple layers of noise
[06:41] to get these really interesting shapes
[06:42] and it's exactly what they were doing
[06:44] film so we take that data and we export
[06:47] it into a format called
[06:48] open V DB which is something was
[06:50] developed by the film industry by
[06:51] DreamWorks Animation's
[06:53] for films such as Puss in Boots and a
[06:54] bunch of other ones and now once we
[06:57] exported into that that's type of what
[06:59] we take into the engine directly and
[07:00] then start convert it into our own
[07:02] former and then we we attempt to render
[07:04] that too early which is something we
[07:06] don't typically games don't typically
[07:07] type of take on that type of volumetric
[07:09] data so that was the challenge for us so
[07:16] yes sir we I said mentioned we generate
[07:19] it off offline similar up offline tools
[07:21] use fluid summation layers of noise but
[07:24] one of the main problems that is the
[07:26] amount of memory it takes for this
[07:27] volumetric data is pretty huge so we
[07:30] have to put a lot of effort into
[07:31] optimizing that and crushing the data as
[07:33] small as we can get it but it's still
[07:35] quite high so to try and combat that we
[07:37] are making modular pieces so we're going
[07:39] to make say 30 40 kilometer long
[07:42] sections and we're going to piece them
[07:44] together which is similar to what the
[07:45] environment team do when they're
[07:46] building a space station or any other
[07:49] outpost or something like that and we're
[07:51] gonna type of position a few of these
[07:52] together to build longer more elaborate
[07:54] missions and areas and we'll also have
[07:57] bespoke you know chunks well spoke
[07:59] pieces when we want to do a bit
[08:00] something a bit more interesting
[08:01] especially saying when it came to a
[08:03] squadron 42 yeah and then to avoid you
[08:08] ever recognizing these things were
[08:10] actually sometimes we used we're putting
[08:12] a lot of effort into how we light these
[08:13] things and the visual effects now it's
[08:16] surprising how much difference you can
[08:18] really get by just relighting the same
[08:20] area of volumetric data differently it's
[08:23] almost unrecognizable and because there
[08:25] is no horizon it's very easy to get
[08:28] disorientated so it's not easy to
[08:30] recognize it so we feel like we've had a
[08:32] good balance between the memory cost how
[08:34] quickly is to offer hopefully the more
[08:36] we can reuse things the more content we
[08:38] can make yeah so but we'll talk more
[08:42] about the lighting and VFX later but for
[08:44] now I'm going to hand you over to Ben to
[08:46] tell you how the hell we get this thing
[08:47] in game and actually rendered with a
[08:49] sensible frame way
[08:59] mother so I'm just gonna quickly run
[09:02] through sort of what makes a volume like
[09:06] this different from rendering normal
[09:07] objects and some of the challenges that
[09:09] we had to deal with and overcome I guess
[09:11] hopefully right so this volume is a
[09:15] single object it's about 30 kilometers
[09:17] long so that's quite a lot bigger than
[09:19] your average object in the game also
[09:22] unlike most of the other objects in the
[09:23] game you're inside it most of the time
[09:25] so to explain going on these are the
[09:28] voxels
[09:29] so they're basically volumetric pixels
[09:31] and as you can see there's millions of
[09:33] them so yeah after 5,000 hours in ms
[09:38] paint this is a diagram of what it looks
[09:40] like roughly so so ignoring the cloud
[09:45] for a minute and we've got three
[09:46] asteroids on screen here and what the
[09:49] what the engine can usually do for us is
[09:51] we can we can pass object to the 3d
[09:53] engine and it's got some very efficient
[09:55] methods that it can sort of speed up
[09:57] speed things up by reducing what we have
[09:59] to deal with on the rendering side so if
[10:01] you look at the asteroid on the left for
[10:03] instance that's outside the players view
[10:04] frustum so that just we never hear about
[10:06] that for that frame also the one on the
[10:09] right that's occluded by the bigger one
[10:11] so again that just never has to be dealt
[10:13] with and then the big one we know how
[10:15] far away from the player it is so at
[10:18] least we can pick a level of detail for
[10:19] it and we can you know we could do stuff
[10:21] like that I guess now the gas cloud has
[10:26] a bit of a problem because that's it's
[10:27] occluded its dis occluded it's zero
[10:29] distance from the player it's 30
[10:31] kilometers from the player if the
[10:34] rendering code gets hold of this it's
[10:35] going to have to make loads and loads of
[10:37] work to try and process all of it
[10:38] process half of it so the solution we
[10:41] came up with is that we literally never
[10:44] tell the rendering engine or the 3d
[10:46] engine about this object what we talked
[10:48] about instead is a huge number of
[10:50] placeholder objects that we've
[10:51] excitingly called chunks the volumetric
[10:54] state has just chopped up stuck in a
[10:56] vague memory bucket somewhere else and
[10:58] the chunks just know where they are in
[11:00] space and they know where the data is so
[11:02] you can treat them basically as game
[11:04] objects and you know actor another 5000
[11:09] hours in ms paint
[11:12] you can see the chunks in the middle in
[11:14] the empty space we just didn't generate
[11:16] any because there wasn't any gas there
[11:18] so there's no point processing them the
[11:20] chunks that are far away from the player
[11:22] we've actually got a hierarchy of chunks
[11:24] so the small ones are contained within
[11:26] larger ones and if they're far away we
[11:28] just use the large one instead of the
[11:29] small one so that that sort of limits
[11:31] how many of them we have to process and
[11:32] then when the engine gets when the 3d
[11:34] engine gets to it to cull it you can see
[11:37] like quite a lot of them aren't needed
[11:38] anymore so that lets the CPU do a lot of
[11:41] work in advance and then the GPU can
[11:43] just focus on receiving a list of chunks
[11:45] that have already been vetted and then
[11:47] just drawing them so how do we draw a
[11:50] chunk so the whole thing
[11:53] semi-transparent so it's unlike a normal
[11:56] object that's like some polygons you
[11:58] draw the polygon in place the job's done
[12:00] you kind of need to accumulate all of
[12:03] the stuff that you can see through so
[12:04] we're going to use very marching for
[12:05] that what that means is for every pixel
[12:07] that we draw such as the middle one we
[12:10] just draw a line from the start
[12:12] through the chunk to wherever it has
[12:14] exits or in the second chunk it would
[12:16] just start at an entry point and then go
[12:18] to an exit point we just chop that up
[12:20] into a bunch of steps and then we just
[12:23] process each step in turn and we find
[12:26] out how much colors in one place we mask
[12:27] it out by however much a paucity has
[12:29] already been accumulated on the previous
[12:30] steps and we just sort of build up a
[12:32] final image so if we work through all of
[12:35] these with the artists data that we've
[12:37] been given and we get this screen shot
[12:39] so the artists data doesn't actually
[12:41] contain any lights so everything is in
[12:43] fact the same color so moving on let's
[12:46] talk about lights oh my god oh yeah so
[12:52] just focusing on this one point that
[12:54] we're dealing with for a moment we've
[12:57] got we need to know a few things to be
[12:58] able to work out how much light there is
[12:59] for that section so the first thing we
[13:02] need to know is how much gas is there at
[13:04] that point that's easy enough to get the
[13:06] next thing we need to know is how much
[13:07] light gets to that gas so that's easy
[13:10] enough to do we know how far away it is
[13:12] we can make it fall off then finally
[13:14] there's a phase function that just tells
[13:16] us if that light reaches the gas how
[13:19] much of it actually comes towards the
[13:20] camera that's a fairly simple function
[13:22] it just says if a light ray hits
[13:23] something
[13:24] than a lot of it tends to go through in
[13:26] the direction it was going a very small
[13:28] amount of it goes back the other way and
[13:29] you get something in between in between
[13:34] so here's an example of that face
[13:37] function in action with this is this the
[13:39] same test volume viewed from two
[13:40] different angles and so as you can see
[13:42] on them the one on the right the sort of
[13:43] like bright halo that it has around the
[13:45] edges that's the phase function letting
[13:47] more of it through towards the player so
[13:52] what was I going to say now yeah so
[13:57] we've got we've got all that work that
[13:58] we have to do for a point and then if
[14:00] you multiply that by hundreds of samples
[14:02] and multiple lights per frame what you
[14:05] end up with is very very low frame rate
[14:07] and what's annoying about that is the
[14:09] two pixels next to each other the two
[14:12] pixels next to each other are basically
[14:14] getting the same result so it's kind of
[14:16] pointless to be doing all that extra
[14:17] work so the way we deal with that is we
[14:20] just break that into two separate
[14:21] calculations at the start of the frame
[14:23] we know how many chunks there are and
[14:25] we've got distances and all that kind of
[14:26] useful knowledge so we can estimate how
[14:28] much detail it's going to need in the
[14:30] lighting and it just has to kind of
[14:32] calculate at some resolution usually a
[14:35] resolution lower than the actual gas
[14:37] cloud density how much light it needs in
[14:41] each chunk so we just do that work once
[14:43] and then the Ray March can just pass
[14:45] through it it just has to get the
[14:47] density get the lighting multiply them
[14:49] together move to the next step so that's
[14:50] that just feeds the whole processor so
[14:54] yeah that gives us this so you can see a
[14:57] lot more than the previous screen shot
[14:59] at least it's kind of flat though you
[15:01] can't really see the shape that you're
[15:03] looking at so the problem here is that
[15:06] there's actually no shadows in that
[15:07] calculation that we've done so we're
[15:10] going to move on shadows so how do you
[15:16] work out how much shadow there is
[15:17] between the light and that point so the
[15:20] problem with standard shadows that you
[15:21] use in a game is they usually store just
[15:24] a single depth value for an opaque
[15:25] object that's usually enough anything in
[15:28] front of that depth must be out of
[15:29] shadow anything behind it's in shadow
[15:31] and the problem we've got with light
[15:33] with this is obviously you could be in
[15:36] 50% shadow you could be in late
[15:38] pasang shadow or whatever so we need
[15:40] something that we can calculate when the
[15:42] lights created that just tells us how
[15:44] much you can immediately just ask it for
[15:46] any point how much shadow is there at
[15:48] this point
[15:48] so obviously the thing to do is we slice
[15:51] the light up into a load of little
[15:53] chunks we're a match all of those at the
[15:56] start of the a creation and then yeah
[15:59] the GPU crashes
[16:03] [Applause]
[16:14] yeah we decided not to do that now to be
[16:19] honest yeah we could actually split that
[16:20] work over 10 100 frames or something it
[16:23] would still cost a lot of memory and it
[16:25] would also give us issues that suppose
[16:27] you want a lightning strike that hits
[16:28] the ship as it's flying somewhere you'd
[16:30] have to ask the gameplay code where is
[16:32] that ship going to be in a hundred
[16:34] frames time because I'd like to start
[16:35] creating a light for it and even then
[16:38] there's this huge piece of background
[16:39] work that it's constantly having to work
[16:40] on so we thought what if there was
[16:42] something we could be doing in 2d can we
[16:44] get away with something that just works
[16:45] in 2d and what's nice about doing clouds
[16:49] is that if you look at this is just a
[16:52] graph of how much density there is along
[16:55] that blue line it's quite a low
[16:57] frequency kind of undulating shape and
[16:59] so thinking about frequencies is
[17:02] actually a really good answer so we
[17:04] switched to a technique that's called
[17:05] Fourier shadows so this is going to be
[17:07] incomprehensible this diagram probably
[17:09] but basically instead of storing a value
[17:12] for every single step along along the
[17:15] Ray it stores how much would you
[17:19] multiply a whole bunch of sine and
[17:20] cosine waves by if you wanted to just
[17:23] sort of try and get that value and then
[17:25] if you do that for every single step
[17:27] along the Ray you end up with a curve
[17:29] that kind of approximates the original
[17:31] shape depending on how many you put in
[17:33] you get closer to the original shape so
[17:35] with one way what you basically get is
[17:37] just the average value so that's not so
[17:39] great if you add one sine and cosine you
[17:42] end up with something that's still not
[17:43] great but as you build them up you
[17:46] slowly get something that is sort of
[17:48] like the right shaped curve now we
[17:50] actually did start out seven weights
[17:52] because just in terms of the amount of
[17:54] memory and the amount of processing that
[17:55] we're trying to trade off we found that
[17:57] was actually enough to get us from this
[17:59] view to this view which we think is you
[18:03] know this decent
[18:05] blah
[18:06] [Applause]
[18:14] right so yeah that one actually now runs
[18:16] fast enough and we are still optimizing
[18:18] it a little but it does run fast enough
[18:21] that you can now have a lightning strike
[18:23] that just pops up on that frame you know
[18:25] we have to spend like a I don't know
[18:27] like a millisecond or something I don't
[18:28] know how long it takes but yeah you can
[18:32] create them on the fly as long as you
[18:33] don't create like 50 of them in the same
[18:35] frame the downside is there's still not
[18:38] quite the screen shot we started with
[18:39] it's kind of monochrome that's I think
[18:41] that's only two lights but yeah they're
[18:43] the same color so it's kind of
[18:44] monochrome so we needed something that
[18:46] doesn't introduce a whole load more
[18:48] processing a whole load more data but we
[18:50] wanted to sort of enrich it and give you
[18:52] more of a sort of 3d sense of the scene
[18:54] so a really inexpensive thing to do is
[18:57] you just take this and you multiply all
[19:00] of those values by just a completely
[19:02] artist controlled sliders so you can
[19:04] then just apply these color you get kind
[19:07] of a color fringe on the edge of of a
[19:09] dark area where like in this case the
[19:12] red won't have actually been our shadow
[19:13] does the green just because we
[19:14] multiplied it down so yeah that is what
[19:17] takes you from this to this yeah so this
[19:23] is still not as good as that trailer
[19:25] that we showed you but the thing is this
[19:26] is actually as much as I can helpfully
[19:28] do so I'm just going to hand the baton
[19:29] over to the VFX team with Michael though
[19:32] with Mike and be how they can carries
[19:36] the rest of the way
[19:37] [Applause]
[19:48] okay so this is how the gas guy looked
[19:52] fantastic stuff that Benji showed there
[19:55] and we were obviously really happy with
[19:57] the lighting the visual fidelity and the
[20:00] technical achievement of this thing but
[20:02] inevitably after showing it to art and
[20:04] design and how he alluded to this
[20:05] earlier there were several issues that
[20:08] we're still going to need to solve so
[20:12] the gas clouds are actually because
[20:14] they're so big you know you're tiny
[20:15] compared to this thing they actually can
[20:18] be quite frustrating rather than fun
[20:19] traverse because they feel so empty and
[20:23] it's also really easy to lose your
[20:24] bearings you don't really get any kind
[20:26] of visual read of the speed that you're
[20:27] going out and because it's so empty it
[20:30] doesn't really feel dangerous and that's
[20:31] a really important thing that designer
[20:33] not really want to be able to kind of
[20:34] achieve so typically in a more standard
[20:39] environment this is the kind of thing
[20:40] that would be able to solve with VFX so
[20:47] in this slide I'm showing basically an
[20:49] empty scene it's just a block out
[20:51] there's nothing really in there and I'm
[20:53] just layering it up with different types
[20:54] of effects so we've got lightning and
[20:57] then we're bringing in volumetric fog on
[21:00] top of the fog there's going to be extra
[21:01] particles I'll even bring some more in
[21:05] GPU screen space collision get some cool
[21:09] noise get some gravity etc etc and we'll
[21:12] even throw in some screen effects as
[21:14] well so these are all the kinds of
[21:15] things like I say this is kind of a
[21:16] typical thing that we do and if we can
[21:18] make that look great it's you know a
[21:20] simple block out then we surely should
[21:23] be able to do that with a gas cloud as
[21:25] well so that's our goal but how do we do
[21:27] that and to explain a little bit about
[21:29] how we do that for something that's not
[21:30] quite as conventional me how it's going
[21:32] to come and show us some stuff
[21:36] [Applause]
[21:46] hello okay so we've seen the level and
[21:54] now comes time to actually add some of
[21:57] the effects to the gas cloud but
[22:00] conceptually gas cloud is kind of like a
[22:03] level but doesn't have any walls doesn't
[22:06] have any ceiling and there is also no
[22:08] concept of up and down so it's kind of
[22:11] mind-boggling how you kind of organize
[22:13] this place it doesn't have any
[22:15] geometries to start with so we cannot
[22:17] really attach VFX to anything specific
[22:19] and also there is nothing acting as a
[22:21] visual guide so it's kind of like a
[22:25] level but it's far less conventional so
[22:31] let's take a look at the design feedback
[22:34] that we've been given it's too easy to
[22:36] lose your sense of direction speed and
[22:38] distance ideally what we could do is
[22:40] introduce a good flow of air at news for
[22:45] the gas cloud and we would have some
[22:47] particles moving through that flow of
[22:49] air so if you stop you look around you
[22:53] can observe the direction of motion and
[22:55] find your wife through the tunnel and
[22:56] that could also add the motion that was
[23:00] missing in the example we've seen before
[23:02] next step is making the gas cloud look
[23:06] more dangerous and it's kind of easy but
[23:09] naturally because the example we've seen
[23:11] didn't have any distraction elements to
[23:13] it so we can add them like the breeze
[23:16] rocks smashing into other objects and
[23:19] stuff like that but also design wanted
[23:21] to define the energy levels so they
[23:23] wanted some areas which are kind of calm
[23:25] others should be more dangerous so we
[23:27] kind of you know want to escape from
[23:30] these areas faster so how we go about
[23:34] doing that let's take a look at the
[23:37] first problem first the new GPU particle
[23:42] system if any one thing to the second
[23:44] state before I mentioned that it allows
[23:47] us to use so-called vector fields
[23:50] essentially vector fields are snapshots
[23:53] of wind
[23:55] so a vector fuel is a texture a fede
[23:58] texture and each pixel of that texture
[24:00] is a vector in a specific direction then
[24:04] at a particle flows flew through the
[24:08] vector field we can sample that vector
[24:10] and push the purple towards that
[24:12] direction so essentially a vector field
[24:15] is like a snapshot of a wind so here in
[24:19] Houdini we can bring the actual gas
[24:21] cloud data we can turn all the gas cloud
[24:25] into a mesh use the Houdini's built-in
[24:28] particle system flow all of them through
[24:31] the tunnel then we can save all that
[24:33] data and use in the engine to actually
[24:36] achieve that sense of motion but vector
[24:43] fields are only about motion and
[24:45] direction and there's still the danger
[24:47] problem that we have so for that we
[24:52] figured we need lightning and so-called
[24:54] electromagnetic interference oops
[25:06] our point is not that easy okay
[25:11] so here we have the electromagnetic
[25:14] interference its minimum strength and
[25:17] maximum strength basically it's a shader
[25:19] of fact and the why it's made it allows
[25:21] us to do that kind of distortion on any
[25:24] type of screen in the game so the idea
[25:28] here was to have more interference the
[25:31] closer you are to more dense areas of
[25:33] the gas cloud now applies okay so same
[25:48] effect apply to mobile glass without
[25:50] much effort really again the way that
[25:53] the effect was made but the problem is
[25:57] we've DISA fact that the first version
[25:59] of it was driven by the density of gas
[26:02] cloud so you get more dense areas and
[26:04] less than serious and basically we
[26:06] wanted to make denser areas more
[26:09] dangerous so what we did is that we are
[26:12] sampling density of the gas cloud at
[26:15] players location the problem with that
[26:17] was was showing you that you are in the
[26:20] danger area and that's not quite useful
[26:22] as I wanted to inform you that you are
[26:24] about to enter the dense area and also
[26:28] sampling the gas flow density is not
[26:30] very efficient so we have to come up
[26:32] with another solution and for that we
[26:35] use so-called sine distance fields so
[26:40] the problem is that the gas cloud on its
[26:44] own doesn't have any walls it doesn't
[26:46] have like you know distance to anything
[26:48] ideally what we would do is we would
[26:51] sample density of the gas cloud from all
[26:54] around you then we you kind of figure
[26:57] out if you're closing after dense area
[26:59] and then we can send that value to the e
[27:01] to the header and do the interference
[27:03] but it's kind of slow so signed distance
[27:08] fields they are 3d textures which are
[27:11] storing distances to a near surface so
[27:14] in a nutshell it allows us to figure out
[27:17] if you are close enough
[27:19] - or close to the dense area the danger
[27:22] area and we know it for cheap and if we
[27:25] have this value we can also drive
[27:27] lightning but how we do distance and
[27:32] something that's a volume so in Houdini
[27:35] we can take the gas cloud data again we
[27:38] can kind of mark these dense areas where
[27:42] your safe density is point nine and
[27:44] higher we turn these areas into a mesh
[27:46] then we might a tool that is turning a
[27:49] mesh into the signed distance field so
[27:52] it's kind of iterating through each
[27:54] pixel of of that volume and it's kind of
[27:56] asking oh how far I am from the from the
[27:59] mesh that we've made then all that is
[28:01] stored in the retexture and we can reuse
[28:03] it in the engine and drive the dub
[28:04] interference that you've seen but we had
[28:12] all these kind of dynamic types of
[28:15] effects there was also a need for art
[28:17] and designed to be able to control and
[28:19] trigger and set-piece events so we still
[28:23] needed controlled story-driven events
[28:26] for example you're flying food the gas
[28:29] cloud suddenly there's lightning
[28:31] striking down and rock so for that we
[28:36] again use Houdini here we can see how a
[28:40] rock destruction is being made so first
[28:43] we take the rock asset we are defining
[28:45] areas in which rock will be split into
[28:47] pieces then we can use physics forces to
[28:50] animate that destruction if we are happy
[28:53] with the result then it's just a matter
[28:55] of human mapping and Houdini is really
[28:57] good at it because we can quickly and
[28:59] easily UV unwrap like 50 pieces or so
[29:03] that we have in here then we can just
[29:05] export the all of that back to the
[29:06] engine and it just works so heading back
[29:14] Mike
[29:25] I'm back again okay so I'm gonna talk
[29:29] about lightning which is one of my
[29:30] favorite subjects
[29:33] so yeah lightning it's a Kiva to a
[29:35] requirement of gas clouds both for art
[29:38] and design so yeah basically previously
[29:45] we were able to create really nice
[29:47] lightning effects but they were we
[29:51] didn't really have a lot of control over
[29:52] them we could basically place them and
[29:54] that was pretty much it
[29:56] leave them to it they were also really
[29:58] expensive to use so from the point of
[30:01] view of needing control we developed
[30:03] several new options to allow us to do so
[30:06] including the ability to have lightning
[30:09] automatically position itself along the
[30:11] cloud surface so that's using the same
[30:13] distance field with me how talked about
[30:14] just then but we also brought in a new
[30:17] setting called conductivity and this is
[30:20] something that we applied to surfaces so
[30:23] all surface types can have a
[30:24] conductivity setting now a high contact
[30:27] conductivity setting means that there's
[30:29] a great chance of it being struck by
[30:30] lightning so if you have two surfaces
[30:31] together one with the zero setting one
[30:34] with maximum the one with zero if you
[30:37] stand in there you're going to be safe
[30:39] so with this in mind we think this is
[30:41] going to be a really powerful - for
[30:42] these a tool for design we think that
[30:45] there's gonna be lots of cool tactical
[30:47] implications for that and we're really
[30:48] excited to see what they're going to be
[30:49] able to do with it so the cost as I say
[30:56] previously even though we could do
[30:58] really nice-looking lightning it was
[30:59] really really expensive and that's
[31:00] really a problem for something such as
[31:03] the gas cloud where we want everything
[31:04] else to be as cheap as possible so with
[31:08] the previous system if we were going to
[31:09] draw something like this we're going to
[31:11] be using a lot of control points now the
[31:14] thing about control points is they're
[31:15] very expensive
[31:16] so you'd probably wherever this this
[31:20] thing is going it's it's basically been
[31:22] driven by the control points so to kind
[31:25] of create that very detailed shape
[31:28] you're looking at a lot of control
[31:29] points and we need to get that number
[31:31] right down
[31:35] so this would be what we did to solve
[31:38] that was basically pushed the rendering
[31:40] of the bolt onto the GPU and we actually
[31:42] used GPU particles for this
[31:44] well that allowed to do was use much
[31:47] smaller amount control points so this is
[31:49] fairly crude screenshot apologies for
[31:51] that but you can see the red dots are
[31:53] basically the control points and we're
[31:55] going to use the GPU particles to
[31:56] actually draw that kind of detail in
[31:58] between them yeah we're basically
[32:02] joining the dots so to do that as I say
[32:05] using GP particles we actually created a
[32:07] new type of particle emitter emitter
[32:09] which is displaying guided one so this
[32:18] is an example of spline guided particle
[32:20] emitter you can see on the bottom I've
[32:23] got I've got some text showing what
[32:24] we're actually doing this is just going
[32:26] to loop so bear with me
[32:27] but yeah rather than just have a single
[32:32] single beam from two points we wanted it
[32:34] to be a bit more interesting visually so
[32:36] we got some various noise options we use
[32:39] in simplex noise in this example but we
[32:41] also had value noise as well the way I
[32:44] think of it is it basically makes a
[32:46] straight line we Billy well bully I'm
[32:49] not the most technical out of this panel
[32:50] so yeah and we've also got shuffle I was
[32:54] on pulse which allows the the noise to
[32:57] kind of reset itself based on the random
[32:58] timer that we can add by the particle
[33:00] system and then we've got a second
[33:02] octave which just allows an extra level
[33:03] of detail which is obviously really
[33:05] important for something a little light
[33:06] in in the gas cloud where we need it to
[33:08] look really really nice for far away and
[33:11] we also need to look super detailed when
[33:12] we get up close to it as well so another
[33:17] cool thing about actually doing this on
[33:19] the GPU particle system is it's so easy
[33:21] to dynamically edit the settings this is
[33:23] just an example of me playing around
[33:25] with a few attributes and the particle
[33:27] effect itself so really quickly and
[33:29] easily change the appearance of the
[33:30] lightening room required so this is
[33:32] gonna be really powerful - for the
[33:33] artists and design as well that looks a
[33:37] little bit weird that one but yeah this
[33:39] is just showing that you can do lots of
[33:41] cool things with it basically you know
[33:43] you just limited by your imagination
[33:47] okay so as well as lightning we also
[33:50] enable contrails and turbulence inside
[33:53] the gas cloud these are the same effects
[33:55] that you'll have seen already when we
[33:56] brought in the dynamic so when we
[33:59] brought in atmospheric flight but
[34:01] they're useful in gas clouds they're
[34:02] being controlled by the density of the
[34:04] gas cloud now and I think personally
[34:06] it's a really useful thing for
[34:07] multiplayer so you can see where you
[34:09] your copilot so good so you your other
[34:12] players are going useful seeing where
[34:14] the enemy are and things like that so
[34:17] yeah I think Ally's gonna now do a recap
[34:20] of everything that we've got so far
[34:30] so yeah bring it all together we've
[34:34] talked about the volumetric data set
[34:36] we're generating an offline tools you
[34:38] normally use for films and how we crunch
[34:40] that down into the smallest possible in
[34:42] our data for the engine
[34:43] Ben taught us through how we do the ray
[34:46] tracing and the real-time lighting and a
[34:49] fully a 2d shadow approach then we have
[34:52] these field driven portal effects before
[34:54] the driven by the SDF and the vector
[34:57] fields the e/m interference a nice
[34:59] gameplay feature and the contrails
[35:01] lightning which is a really key
[35:02] component to this destructible rocks in
[35:06] assets and then set-piece events for the
[35:08] more type of structured elements and
[35:10] then bringing it all together I'll show
[35:14] you now the flight of fly foo of our
[35:16] prototype so just a three-minute fly foo
[35:18] in engine just directly on screen so you
[35:21] can see what you think hopefully you'll
[35:23] enjoy it
[36:02] [Music]
[36:38] [Music]
[36:47] [Music]
[37:10] [Music]
[37:23] [Music]
[37:46] [Music]
[37:57] [Music]
[38:15] [Music]
[38:46] [Music]
[38:48] [Applause]
[39:01] yeah hope you liked it it's a lot of
[39:03] work that went into that a lot of
[39:05] different people have been had their
[39:06] hands on that and it's nice to finally
[39:08] share it for you it's been a few months
[39:10] in the making
[39:11] like I said that was in-game we recorded
[39:13] it last week for you there's a bit more
[39:15] to do on it so I'll go through what we
[39:17] need to finish off and what else we want
[39:19] to add to this so everything we talked
[39:21] about today like I said it's an engine
[39:23] but we need Justin to polish a few
[39:24] things so it's not quite ready for
[39:25] Showtime but it's pretty close the
[39:28] memory in performance is one of the main
[39:29] things that was running live recorded
[39:31] live but we need to do a bit more work
[39:33] to get the performance down to the lower
[39:35] spec machines to make sure everyone can
[39:37] enjoy this we need a few more shadow
[39:40] things to be done so the paid cop takes
[39:43] the asteroids there weren't receiving
[39:44] shadows from the gas cloud it up it
[39:46] makes them look a bit stuck on so that's
[39:49] something we're in the post of doing it
[39:50] should be done soon
[39:52] a lot of the VFX was placed manually in
[39:55] that scene but now that I've got this
[39:56] SDF tech in we're hoping to build a
[39:59] procedural tool to help place all this
[40:00] VFX
[40:01] it took us a while to learn how to make
[40:03] something like this look good and now
[40:05] that we know now we can write a tool to
[40:06] help us make it very quickly to the
[40:08] designers don't have to Spade spend
[40:10] quite so long coming back to the art
[40:11] team to build these things few change to
[40:15] the workflow as well it's all very new
[40:17] you know nobody's made stuff like this
[40:20] before in our company so it's we're
[40:22] gonna have to just spend a little bit at
[40:23] a time figuring out how to do this
[40:24] quicker so we can turn them out a bit
[40:25] faster and then the procedurally
[40:29] generated volumes is something we also
[40:30] want to explore so I meant it mentioned
[40:31] planner two wings of the star the
[40:33] presentation that's somewhat we
[40:34] definitely want to do that will need to
[40:36] be procedural because the scale of them
[40:37] there's no possible way you could build
[40:39] that uniquely over the size of a planet
[40:41] and then we're thinking there might be
[40:43] other uses like gas giants might be one
[40:45] the surface of a gas giant could be made
[40:46] using exactly the same tech and there's
[40:48] obviously plenty of other uses we can
[40:50] have like the the trail of a comet and
[40:51] other things like this so yeah
[40:54] so hope you liked it and lots of clever
[40:57] [Applause]

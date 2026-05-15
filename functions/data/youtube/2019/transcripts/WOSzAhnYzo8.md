# Star Citizen Live: Player Wearables

**Video:** https://www.youtube.com/watch?v=WOSzAhnYzo8
**Date:** 2019-06-14
**Duration:** 48:12

## Transcript

[00:08] [Music]
[00:10] hey everybody welcome to Star says and
[00:13] live game dev player wearables
[00:16] I'm your host - I almost said my own
[00:19] title again huh so [ __ ]
[00:21] hunt content management oh man I've
[00:24] messed up my child the second sorry man
[00:28] reasons don't have to be we are here
[00:30] with live character artist Cory Johnson
[00:32] Cory how you doing man I'm doing good
[00:34] it's been a while since we've had you on
[00:35] the show a little bit so long yeah and
[00:38] we've never had you for one of our game
[00:39] dev segments Cory you work here with the
[00:42] player art team of the character art
[00:43] team rather I would just look at it
[00:45] almost primarily here in the LA office
[00:47] there was like one member it's not it
[00:49] not in this office right yeah we have
[00:50] one number in the UK yeah so it's rare
[00:53] that we have an entire department
[00:54] centralized like this but it's really
[00:55] great for us because I get to see all
[00:57] your character work from start to finish
[00:59] a lot of distress and today we are gonna
[01:02] go through the process of creating a
[01:04] player wearable in this case a helmet
[01:06] from concept to implementation right
[01:09] yeah yeah and a bigger focus on the
[01:12] actual texturing material worth
[01:13] attention yeah alright so what we're
[01:16] using today is our basis is something
[01:18] you may have seen earlier this 1/4 on is
[01:21] C and that's one of the new subscriber
[01:23] flair items we don't have the official
[01:26] in Lauren name for it yet but we've been
[01:28] calling it the Centurion helmet yeah
[01:31] which is I guess a little confusing
[01:32] people but for us the design is based
[01:36] off that so it's easy for us
[01:38] alright so that so this is this will be
[01:39] a this will be a unique a unique helmet
[01:41] that's available to subscribers a next
[01:44] quarter and so you get you get this
[01:47] concept from from Jeremiah or one of the
[01:49] other character council artists you know
[01:50] where do you start from here where you
[01:52] go for me uh so from here actually it's
[01:56] not always the case but sometimes the
[01:59] concept artists working 3d so they'll
[02:00] hand off a starting point in 3d it's
[02:06] they smash stuff together so like
[02:09] there's quite a bit of cleanup and all
[02:10] that which is totally fine
[02:12] yeah so like once your my hands this off
[02:16] I'm gonna ZBrush this is the finished
[02:20] model but I can show you here so all the
[02:25] red is the art B already existing low
[02:29] poly from the odyssey helmet so this is
[02:32] one of the ones where we're trying to
[02:32] leverage part of an existing helmet to
[02:35] like speed this process along so then we
[02:39] from concept on you know retrofitted and
[02:42] all this stuff into it right so this
[02:43] helmet was was was built on top of the
[02:45] existing Odyssey helmet yeah for a
[02:47] number of reasons one it's it's just
[02:49] more efficient to do that when you can
[02:50] it's also more efficient performance
[02:52] wise when you can have as many shared
[02:53] assets and resources as possible my game
[02:56] yeah yeah so like in terms of any type
[03:01] of cleanup often when we get things
[03:06] dobe things aren't quite lining up so
[03:09] like it's often as simple as just making
[03:11] things line up and then polishing things
[03:13] out yeah yeah I almost stayed in the
[03:19] ZBrush phase but from there once that's
[03:22] all good and happy jump in a program
[03:25] like top of gun or Maya to read
[03:27] apologize a topo gun this is what I
[03:30] haven't heard it before yeah yeah it's
[03:31] it's literally only for making low poly
[03:34] so it does it pretty well is very
[03:36] focused program so what are we looking
[03:39] at right now what would it split it why
[03:40] is half of it and this weird because
[03:43] it's completely symmetrical you only
[03:45] need two you only need to make half of
[03:47] this and then once it's is good I'll
[03:49] jump in Maya mirrored over stitch it
[03:51] together and move on but I can show you
[03:56] it's as simple as this you just end up
[04:00] building out
[04:03] parts of it like this and yeah it's not
[04:08] the fastest part of the pipeline but
[04:10] eventually you get to this point
[04:13] the other big thing at this point is
[04:16] looking at the concept compared to the
[04:20] low with our texturing pipe
[04:23] we're masking with blend Maps which is
[04:26] which is texture based but we're also
[04:28] masking through geometry to block out
[04:31] some materials so at this point it's a
[04:34] little you got to keep in mind how many
[04:37] subnets they're gonna want how much you
[04:39] want to break it down okay I'd take
[04:41] daily that what's what's masking yeah so
[04:44] I can show you a little bit easier so
[04:49] each one of these colors is a different
[04:52] subnet and what that means is it gets to
[04:56] use four channels up a blend map for
[04:59] color so when you're looking at the
[05:03] concept you got a take a moment to
[05:06] really plan out how you want to cut the
[05:08] Gio up because sometimes you end up
[05:12] getting into game when you're texturing
[05:14] you're like oh actually I can't really
[05:16] accomplish what I won I also go back to
[05:17] the low poly stage cut some more gon
[05:21] break out this piece rebuild your
[05:23] material and then continue forward like
[05:25] that so that's not it's the it's the
[05:29] only part where you're like really have
[05:30] to like think about exactly what you
[05:32] want to get in the end so it's not just
[05:34] you just take the image that Jeremiah
[05:36] doesn't recreate it in 3d there's you
[05:39] ever talk about Moore's earlier before
[05:40] we went live and let's go ahead let's
[05:41] get to the technical stuff because when
[05:42] these types of shows that's really what
[05:45] we're here for we want we want to learn
[05:46] want to learn a bit more about how this
[05:48] process works no you talked about
[05:50] separating the Geo's you know there's
[05:52] things we go back to that one with all
[05:53] the different colors and why do we
[05:54] separate into that many pieces uh
[05:57] basically so this one's pretty I took
[06:00] this one pretty far in terms of
[06:01] separating it partly because I wanted to
[06:04] make the texturing side just faster so
[06:10] like what that means is like so this
[06:12] yellow part
[06:13] if I wanted to texture it as far as like
[06:15] oh it's gonna be like looking at the
[06:18] concept I'm like an exposed metal but it
[06:20] has some edge wear and stuff like that
[06:22] by breaking out just this piece I get
[06:25] four channels for it so base layer would
[06:28] be like a brass and then I could start
[06:29] to build up other materials on top of it
[06:31] so the further we break the stuff down
[06:34] just the more complicated we really go
[06:37] with so each colored area gets four base
[06:41] layers you vote for base layers or four
[06:43] layers including a base yeah like four
[06:45] masks that in each mask is it could be
[06:50] four color tweaking the material like
[06:53] each mask has the full gamut of what we
[06:55] can do so they're gonna sew each part
[06:58] allows you four levels of custom of
[07:01] customization with AC oh yeah eighteen
[07:03] for lack of a better word yeah the way
[07:05] to think of it is it's basically we're
[07:07] using an RGBA and the Alpha is the base
[07:12] layer and then it's we're just stacking
[07:14] up materials on top of that okay so it
[07:16] goes alpha Ben blue channel a then green
[07:19] then red and like with that there's the
[07:22] methodology of you really one
[07:23] whatever taking up the most room try to
[07:26] leave that for the Alpha Channel so
[07:28] you're you're continually getting
[07:30] smaller on the actual texture coverage
[07:32] as you go up that pain um yeah just cuz
[07:35] like it's neat it's a easier way to work
[07:39] yeah so like once you know you spend a
[07:43] decent of time doing all this business
[07:46] coming to Maya doop it over the other
[07:51] big part of this is you be mapping these
[07:55] aren't very good you these I'll admit
[07:57] that I was trying to be fast I forgot
[08:01] this I I've been here a little over four
[08:04] years I'm hanging out of character team
[08:06] most of that time UV mapping and stuff
[08:08] this is one aspect to this I have
[08:10] virtually no understanding about like I
[08:13] look at this and I don't understand how
[08:14] this applies to the to the thing and I'm
[08:16] not saying that for the purposes of
[08:17] teaching the show I don't get it yeah
[08:20] help me out here looking at this piece
[08:24] this blue part this part here you'd be
[08:27] mapping easily just trying to get your
[08:30] geometry laid out as flat as possible
[08:33] right for what end so that when you when
[08:36] you do apply textures and details like
[08:39] that it doesn't warp and get all crazy
[08:42] so I can do something like this so you
[08:47] can see here there's a it's not bad
[08:49] warping but it's a it's a bit you want
[08:53] these squares to be as square as
[08:54] possible all the time because anyway
[08:57] anywhere where this is warping like if I
[09:00] if I put a material that let's say has a
[09:03] lot of like vertical lines mm-hmm you'll
[09:05] see that the lines will start just it'll
[09:07] show up really like in not a great way
[09:09] in the game because I'll you'll see that
[09:11] skewing that way yeah
[09:13] so so that's what you ving is all about
[09:15] getting so it's almost like I'm in like
[09:18] a clicker
[09:19] when people do wraps on their car they
[09:21] get these comes in a big flat thing but
[09:25] when you look at it all flat it's
[09:27] weirdly shaped and huh yeah yeah and
[09:29] then when but it's but it's because
[09:31] they're anticipating all of the shapes
[09:32] and curves of the car and they're flat
[09:35] printing
[09:35] yeah something else is a difficult paper
[09:38] craft there's websites for it where you
[09:41] can basically get different plans of how
[09:45] you cut something out and then fold it
[09:47] together and then you have like a little
[09:49] character or something like that it's
[09:50] it's a exact same stuff yeah so the very
[09:55] important phase is because textures are
[09:57] 2d and you have to apply it to you
[09:59] texture to a 3d thing yeah so okay yeah
[10:01] I don't know it was my car wrap analogy
[10:03] good yeah yeah yeah it's it's it's
[10:06] taking something that is flat and but
[10:08] needs to wrap over a surface that it's
[10:10] not flattened anyway yeah so you kind of
[10:14] see how it's all broken down based on
[10:19] the sub maps I set up I often try to
[10:21] also have my UVs cut out that way it
[10:26] just makes texturing easier because I
[10:28] can do texturing things based off of
[10:30] what my UV unwrap is so just an
[10:33] efficiency thing
[10:35] yeah so we got this guy and then we can
[10:40] start to jump into texturing it'll be
[10:43] something like this which doesn't look
[10:47] like a lot but can we can you see how we
[10:51] make a change to that flat you be
[10:53] mapping how it applies to here we'd see
[10:55] how it applies I can attempt to but I
[11:00] don't have I might not have that working
[11:02] file anymore
[11:03] okay but I can probably get it to work
[11:09] let me
[11:16] so with substance painter if I exported
[11:18] this in there mm-hmm it wouldn't work
[11:20] very well because every different
[11:23] material I have applied in painter would
[11:26] show up as a different texture set so
[11:29] he'd basically break out with a Geo as
[11:30] you see it here and that's not really
[11:31] okay
[11:32] usable like that so stretch Nikhil says
[11:38] a good UV is the difference between easy
[11:40] painting and texturing and oh my god my
[11:42] design is getting broken up even though
[11:43] I'm drawing yeah it makes a huge
[11:47] difference but you know like as you
[11:51] start to learn where you can like speed
[11:53] things up and be a little bit sloppy and
[11:55] get away with stuff like if I know a
[11:58] material a spot on the UVU's will never
[12:02] if it'll basically just have a very
[12:03] noise material on I probably get away
[12:06] with a decent amount of slopping UV work
[12:09] just because it's noisy and it's
[12:11] slightly stretches you just you'll never
[12:13] see it so I'm gonna have some wearables
[12:19] we plan to have ready at lunch so that's
[12:20] not a consideration that we do hear of
[12:24] it at this level we're just we're just
[12:27] making as many things as we want to make
[12:29] for the game so pretty much pretty much
[12:33] it's not it's not it's not like it it's
[12:35] not like you you set a quota and then
[12:38] you give that closer than you relax it's
[12:39] you just work and we're gonna add and
[12:41] work and add and work in Adam yeah
[12:44] what's the next thing we can do gray
[12:48] hard-ass why if the helmets so narrow
[12:50] will a head fit inside no for sure so I
[12:55] don't that's not whether the engine
[12:57] right this moment be but I can showcase
[13:00] of here
[13:06] it's also we're also missing a body for
[13:08] scale at this point so yeah so you've
[13:10] got you so I mean because it's built off
[13:12] the odyssey helmet like all that stuff
[13:15] was figured out here yeah the head fits
[13:17] in this helmet so but I can pull in the
[13:22] our base male head it is the virtue of
[13:26] building off of a pre-existing asset
[13:27] since it's all been worked out for the
[13:29] Odyssey and the honestly I was in game
[13:31] when it's functional we know the head
[13:33] fits in it building over the honesty
[13:35] saves us a lot of time with the metrics
[13:37] so you can see it doesn't look like it
[13:39] but we actually have ton of her with
[13:41] this helmet this is of course for a
[13:43] normal-sized head and not a gargantuan
[13:44] melon cranium like me for sure and then
[13:48] I mean in real life helmets are actually
[13:50] ginormous that's padding tons protection
[13:54] what is this is this that we're seeing
[13:56] over to the right here this is this this
[13:59] looks like I don't know I'm thinking
[14:01] that head and toe to recall it so I feel
[14:04] like people have definitely seen bugs
[14:08] around this where they see like a human
[14:10] face stretched across objects this is
[14:12] this they're our base males UV layout
[14:15] and all the heads actually have this
[14:17] usually no so the same thing we were
[14:18] talking about with that with the helmet
[14:20] but he said yeah all the different
[14:22] pieces it's one giant yeah yeah this is
[14:25] pretty that I mean this is the usual
[14:27] setup for doing any kind of head stuff
[14:29] you just want to maximize the UV space
[14:31] as much as possible and as you can see
[14:34] there's like towards the less important
[14:37] areas which is like the back of the head
[14:38] mmm you allow for quite a lot of
[14:41] stretching just cuz I'll have hair and
[14:43] hats and all kinds of things you'll
[14:45] never really see it so yeah I was
[14:50] watching wherever you're watching we are
[14:52] taking questions live during the show
[14:53] you can submit your questions with the
[14:55] word question he kept the letter
[14:57] surrounded by brackets and I'll do my
[14:59] best to pick them out for the jet
[15:00] throughout the course of the show
[15:03] yeah so like just to break this down
[15:06] real quick
[15:07] this looks like it's just much noisy
[15:09] stuff but what these channels are doing
[15:17] so for these areas I made the assumption
[15:23] like okay these would be painted metal
[15:26] but I don't want it just to be too flat
[15:30] but paint a metal so ended up adding
[15:32] just this noise in and a good brushed
[15:36] kind of thing
[15:37] yeah it just it's just something to add
[15:38] a little bit of like a once I go in game
[15:41] you'll see it's it's really subtle
[15:42] speckling and then for areas like the
[15:47] green stuff
[15:49] these are exposed metal so based off the
[15:53] concept I was like okay it's gonna be
[15:54] bronze but it'd be probably look good to
[15:58] do like some slight edging and then I
[16:00] using gold to edge it just because it
[16:02] helps pump it out over boy I like that
[16:04] the top work those along the edges there
[16:07] yeah yeah and like I can showcase just
[16:10] some of the fun things painter does a
[16:17] substance painter wearing right now yeah
[16:20] it's like you can do very fast things
[16:22] like adding a generator it's like our
[16:24] fourth software so far just for the head
[16:27] we're just for a helmet so a lot of
[16:29] tools character uses a lot of stuff it's
[16:32] just how it is it's like you can see
[16:37] here as quickly is that like I have all
[16:41] this edging that I can then start to
[16:44] tweak further that's like really the
[16:48] huge power of substance painter is it's
[16:50] a completely non-destructive workflow
[16:53] what's happening
[16:54] so like normally when you would paint
[16:56] like I can make a paint layer here and
[16:58] then this would be actually I'm painting
[17:03] but now I'm like oh I don't like that
[17:05] it's just a paint layer so it's flat I
[17:07] can't really do anything with that but
[17:09] with something like this you drop down
[17:11] to fill there
[17:12] at a mask and now I'm actually doing all
[17:14] the work through a mask right so this
[17:18] paint layer is actually just flooding
[17:19] this with white for the mask is actually
[17:21] driving where stuff can show up
[17:22] so like I have this but then I can come
[17:26] in here at a paint layer drop that down
[17:29] switched us to multiply and to get this
[17:33] multiplying nothing it doesn't show up
[17:34] but now we can start to bring in like no
[17:37] I just wanted to show up in these areas
[17:38] mmm you know I mean in a drunk it's all
[17:41] about like I said non-destructive so you
[17:43] can do so many things just back and
[17:46] forth with this like oh I don't like
[17:48] this paint layer I can switch this on
[17:49] top and see what kind of result I get
[17:51] and coming here out of
[18:03] I switch this to multiply it is for
[18:05] picking up radio transmissions you'll
[18:07] get you know you'll get EC an alerts
[18:09] choices fast clear percent that's what
[18:11] the actually at no I don't think that's
[18:13] with us maybe eventually though yeah
[18:18] yeah yeah so like this step can get very
[18:23] complicated or very simple because I
[18:27] broke up the subnets to as far as I did
[18:29] this set up for me end up being very
[18:31] simple so then all I'm driving out of
[18:36] this is exporting the mass out those
[18:39] going photoshop and we get another one
[18:41] of these yeah so this black and white
[18:46] mask is literally what I was deriving
[18:48] out of there and then these will be
[18:51] compiled into the actual blend map and
[18:55] the blend map is so here's our if my
[18:57] channels right blue green red and then
[19:00] alpha always exists because it's our
[19:02] base layer so that's why it's not
[19:04] representative right so substance
[19:07] painter exports this it gets it's like
[19:10] how do you this like part that I would
[19:13] like do both working magic doing like a
[19:14] egg hatch how do you know in this square
[19:17] where any of this is going on the helmet
[19:19] uh yeah so I mean like looking at like
[19:21] this yeah obviously that's kind of
[19:23] confusing but so what this is here so be
[19:26] and be one in relation to substance it's
[19:30] these two layers be one it's okay so
[19:36] substance layer is exporting a square
[19:39] yes we're so it automatically takes what
[19:41] you've been doing in 3d happens it out
[19:44] into a square I mean I can I can
[19:45] showcase it like this oh so here is my
[19:49] UV layout and get rid of the material
[19:53] responds yeah
[19:54] it's likens thought I mean this isn't
[19:56] really useful to work in this video like
[19:58] this but yeah yeah yeah and then
[20:13] Wow yeah yeah we actually we work
[20:19] completely in 4k that's not what we use
[20:22] actually in games that's way too
[20:23] expensive but that's we always work at
[20:24] that source level it's it's amazing to
[20:27] me that it's the sister takes all these
[20:29] other pieces and they're not just finds
[20:31] them out but then finds like this
[20:33] efficient way to fit them all into a
[20:36] square well like so this is all just
[20:38] derived from what I did in Maya right so
[20:42] yeah so you had - did you have - yeah
[20:45] yeah this is all manual ok something
[20:49] extremely frozen
[20:50] it's like extreme packing I didn't do
[20:52] this manually are you bringing a process
[20:53] like I said I was writing fast cuz like
[20:59] normally what you want to do like if I
[21:01] was doing a clothing asset like having
[21:03] everything skewed like this isn't you
[21:06] usually don't want that because then
[21:08] fabric you know like my shirt it's
[21:11] running very horizontal now if all my
[21:13] stuff is skewed you have to think of
[21:16] like on a monitor that how the pixels
[21:17] are drawing we start to get weird
[21:19] anti-aliasing so a way to avoid that or
[21:22] minimize it is make sure you're you
[21:24] these are laid out up down left right
[21:26] like pretty straight but forcing like
[21:30] this I wasn't worried about done yeah so
[21:35] in Photoshop get these compile it out
[21:39] export that out and really it's just the
[21:42] liver normal map I into - earthenware
[21:50] answer was asking how helmet attachments
[21:52] would play into this I mean essentially
[21:55] that man that matte mask is one giant
[21:56] attachment I mean the way it's built it
[21:59] really has become its own helmet if
[22:04] we're gonna talk about like helmet
[22:04] attachments or something like this it
[22:09] might end up being you know cuz we're
[22:11] like we're just gonna add stuff to it if
[22:14] there was some kind of like
[22:16] I don't know this attachment gives you
[22:20] zoom in vision and when it some kind of
[22:22] like SpecOps optical thing off on one
[22:26] side mm-hmm it would end up adding we
[22:28] would build that specifically to this
[22:30] helmet so that it can fit in
[22:32] appropriately but they're still a
[22:35] separate item it's maybe a separate item
[22:37] and instead of the separate item for
[22:39] this specifically because like because
[22:40] our helmets are such varying shapes
[22:42] there's no way - there's no other way to
[22:44] go about it we'd have to do it unique to
[22:47] the helmet what's in the end is I think
[22:51] the way we've gone is totally fine
[22:52] because you know like Oh a SpecOps
[22:55] optical thing you wouldn't want out and
[22:57] they explore it wouldn't make sense
[22:59] unless it's something that literally
[23:00] sticks out on the side or sticks out
[23:03] from the top like a GoPro yeah like
[23:05] maybe like it's a small antenna type
[23:08] thing could be a decently uniform but it
[23:14] all comes down to like how much that
[23:15] attachment actually touches the helmet
[23:19] so like something like that yeah sure we
[23:20] could just like make make up something
[23:23] very generic for that it would just be
[23:24] position would be driven by a joint it's
[23:26] like somebody stick up a giant boba
[23:28] straw into the head hey yes we can do
[23:32] that yeah yeah so then go throw
[23:37] texturing stuff explore all your maps
[23:39] and then going into the actual engine
[23:43] and then single materials you'll arrive
[23:45] on something like this what does that
[23:52] mean Oh Graham number 6 JD is counting
[23:56] the number of times you use just to make
[23:58] a helmet I mean we could definitely
[23:59] Institute actually there is more like
[24:02] Marvelous Designer that's where that's
[24:05] for simulating cloth and stuff like that
[24:08] which obviously is a hard surface so and
[24:09] not every minute some some have drones
[24:11] yeah for sure
[24:14] yeah so like coming to this step the
[24:16] actual material setup
[24:21] it really just you just start playing
[24:24] with stuff once you get here and as you
[24:26] can see each layer is deciding the
[24:29] material the color the actual titling of
[24:33] that material and then the actual cost
[24:35] and these are the four layers that you
[24:36] were talking about before when you
[24:37] entering you sell these all the pieces
[24:39] yep so now how many different on this
[24:42] helmet at this point how many different
[24:44] pieces are there to customize so in
[24:48] terms of setup yeah all that one to 15
[24:50] 15
[24:51] so this helmet has 15 customizable p15
[24:54] sets of materials each one of these are
[24:56] yeah so we also use obviously glass if I
[25:04] have the glass in there it would it
[25:05] that's not something we'd use beware
[25:07] blend maybe the actual glass material
[25:09] this helmet doesn't actually have glass
[25:10] this one does so we use a glass material
[25:14] as well and then we also use the looms
[25:17] sometimes because then we can do Chloe
[25:19] stuff like this so looms a specific
[25:22] share all these stuff yeah yep so we
[25:25] actually in terms of setting up clothes
[25:28] we can do it now through layer blend or
[25:31] we can do it through a loom the
[25:33] advantage with the layer blend glow is
[25:36] you get to do really fun stuff because
[25:39] it's texture based let me find it part
[25:46] so if I turn on whoa
[25:50] this might be a really tiny part check
[25:56] for those watching on twitch give me a
[26:00] give me a base color we're gonna for
[26:02] gonna color to this already color this
[26:04] give me that give me give me a base
[26:06] color to start with the primary color
[26:08] for the over for the injera is like -
[26:10] well alright that went fast
[26:14] hot pink now they say though and I
[26:19] already have a hot pink one you already
[26:20] have a hot pink one yeah let's not let's
[26:22] not spoil it let's it's it's do the
[26:24] process then we'll go okay we can run
[26:26] through it yeah so in terms actually
[26:28] doing material variants I usually start
[26:32] like top-down and just start tweaking
[26:35] stuff so pink it's pretty aggressive
[26:42] it's pretty that's like that's like 1986
[26:46] in it that's long right there the other
[26:49] thing we can do is so like the
[26:56] double-edged sword of our material
[26:57] variants right now is when we do them we
[27:00] are dipping the entire material we're
[27:02] not just isolating like oh it's just
[27:04] this part in that part we change the
[27:06] color like a lot of games do that right
[27:07] like you have very specific limited
[27:09] areas where you're actually put it into
[27:11] bold and like where you can actually
[27:14] change them because we are duping
[27:16] material the great thing like for the
[27:19] character artists and everyone playing
[27:21] we get to change everything because the
[27:24] only material so like we can take as far
[27:26] as with one so something like this I can
[27:28] we have this bronze material here so I
[27:32] can swap that out where is that actually
[27:33] showing up is that just thing so like
[27:38] that was bronze and I can do that
[27:41] and I know it's glowy bit right like
[27:46] it's I think as extreme changes we want
[27:50] we can do that stuff
[27:51] we make this big pink buck here the pink
[27:56] eye give me a second color jet what goes
[28:03] well with pink as well somebody few
[28:06] colors I can go so we asked if we get so
[28:10] we actually we have a randomize button
[28:11] for this no we do not and like sort of
[28:16] like the reason why we don't have that
[28:18] every helmet how its set up is very
[28:21] unique to that helmet right so in terms
[28:25] of randomizing there are directions we
[28:28] can go in to get that functionality but
[28:30] it's super fuckability
[28:31] so purple purple uh yeah so like this is
[28:38] the other jiggy can we see this so this
[28:44] is one of the things that happens you
[28:47] guys for this sit there now character
[28:53] references are color references yeah
[28:55] what's the kind of reference and way to
[28:57] use it uh yeah so like this is a
[29:00] Pinterest board it's my own web when I
[29:03] set up yeah it's really just like you'll
[29:06] start to see like oh here's like a clump
[29:08] of purple stuff there's some green stuff
[29:10] there's some white and gold like yeah
[29:14] it's all just giving yourself something
[29:15] to look at and then another comment give
[29:17] yourself a direction to go in like I
[29:18] could just sit here not looking at
[29:21] reference but this this gets a result
[29:23] faster and you end up with more ideas so
[29:26] it to like run with um and there's stuff
[29:28] from all different styles here
[29:30] yeah yeah but you could because you're
[29:32] not looking you don't matter it's not a
[29:33] question of whether it's a manga or
[29:35] sci-fi or fantasy where as you're
[29:37] looking for color combinations pretty
[29:39] much yeah yeah they you can see here I
[29:41] have an eye like it's all over the place
[29:43] literally just oh actually like it's
[29:46] cars together expressly if I had a
[29:48] section of pink stuff yeah yeah so we go
[29:54] with pink and purple that's not too
[29:56] obnoxious
[29:59] well we've never concerned ourselves
[30:01] with being too obnoxious here and star
[30:03] citizen like wait absolute how
[30:08] aggressive pink and purple are we
[30:10] talking you guys want something like
[30:11] toned down or you're the artist do
[30:18] something that if you if you've now had
[30:20] the direction to do something pink and
[30:22] purple but yeah go with your own
[30:24] personal carnations at this now I'm
[30:26] gonna go aggressive let's go let's go
[30:27] that's already tiny
[30:28] well what would Cory do with the design
[30:31] brief make it pink and purple I want to
[30:34] yeah I want to see what your process I'm
[30:35] not always a huge fan of like obnoxious
[30:36] colors in video games but I do like that
[30:39] they like I want games that have it
[30:41] right like I want to have the option if
[30:43] that's what they're into um yeah so I
[30:46] can show it actually show real quick all
[30:49] that speckly stuff I was doing in
[30:51] painter right so like here it is so kind
[30:57] of doing things like this so I pulling
[30:59] in just a little bit of pink and it's
[31:01] subtle but it you know it just adds that
[31:03] little bit the other thing that gives me
[31:07] is actually playing around with the
[31:09] actual gloss value it's right now that's
[31:12] just the the spec response right so just
[31:16] to build up like some of that variance
[31:17] in there yeah and then like from here
[31:22] it's really just okay I kind of like
[31:25] these two colors and then I'm just going
[31:28] through and replacing areas with those
[31:31] colors
[31:39] for those folks who have been asking
[31:41] basically feature related questions
[31:44] remind you that we're sitting with an
[31:46] artist now feature related stuff for the
[31:48] are the areas of designers and stuff
[31:51] like that the system designers yeah so
[31:55] we don't have the right personnel here
[31:58] to answer future questions I guess like
[32:02] it asked me what I would like but I
[32:03] don't know that's dangerous
[32:06] I've known you long enough that I'm
[32:07] absolutely not going to ask you fair
[32:09] enough
[32:09] very much yeah so you can see like this
[32:11] area you know it's this it's a subtle
[32:17] thing but it yeah it adds quite a bit
[32:19] like the pendant is underneath and then
[32:21] they painted the purple got somewhere
[32:24] down so the Purple's wearing down and
[32:25] exposing the pink underneath yeah you
[32:34] clarified it why you thought the UV map
[32:36] that you had for the helmet Maya
[32:38] wouldn't have worked well in perceptions
[32:39] painter I mean no it worked fine because
[32:45] that's what I did work off of all I'm
[32:47] really saying is like this is sloppy
[32:50] like this giant piece me letting it be
[32:56] this giant piece not very efficient like
[32:58] I could have cut it here and then made
[33:02] instead of it bowing out made a little
[33:03] bit straighter and I could pack a little
[33:04] better so like if we look this is it
[33:08] this is the Odyssey helmet
[33:09] much better right much better layout you
[33:14] know I mean even just visually you're
[33:15] like okay there's a this seems oriented
[33:18] better this kind of chaotic yeah and
[33:24] this step rate comes down to the artists
[33:27] like what they're willing to try to get
[33:30] away with to save time no I mean like in
[33:34] the end you know we're trying to a lot
[33:37] of content you make a good point you got
[33:38] to learn those corners that you can
[33:40] sometimes come even at a point it's very
[33:41] easy to go deep into the weeds I'm just
[33:44] one thing
[33:45] so it's people often lament how long
[33:48] video game development takes and a lot
[33:51] of that is knowing when to stop and to
[33:54] move on knowing when knowing when you've
[33:56] got it it's like do I got it yeah I
[33:59] could probably play with this another
[34:00] you know four days but I've got it here
[34:03] you know and knowing when to go to the
[34:05] next step it's a it's a difficult
[34:07] balance I know there's a famous quote
[34:10] about how art has never finished it's
[34:12] only ever abandoned and if you looked at
[34:14] oh sure yeah yeah certain certainly
[34:17] agree with that do they like the gold do
[34:21] you guys like the gold I like the gold
[34:23] I don't even ask what these people like
[34:24] more shiny so I like the gold
[34:28] hey sometimes its perks to having your
[34:31] own show yeah like so this is like
[34:37] people just feel my my people your peas
[34:41] people are my people so I claim your
[34:43] people one of the functionalities like
[34:45] if you guys see me like just sitting or
[34:47] clicking on a sub mat I'm doing that so
[34:49] I can see it do this where highlights
[34:50] mm-hmm
[34:51] like the actual part because it's very
[34:56] important to have that because often
[34:57] like I I made this helmet so like I'm
[35:00] texturing all that sometimes you'll end
[35:02] up doing two variants or doing other
[35:04] texture stuff with someone else's
[35:06] absolute just if that's how the
[35:07] scheduling works out so it's super
[35:10] helpful to get a look like coming to a
[35:12] setup that you're gonna do like I don't
[35:13] know where anything is and go to you
[35:15] know find those things a little bit
[35:16] faster somebody asked you can't find the
[35:18] question now but something has to
[35:20] disposable to do a transparent helmet I
[35:23] think I wouldn't man you got so
[35:26] transparent glass thing on that yeah I
[35:29] could I could make this all class we're
[35:32] not gonna do that today but so I didn't
[35:35] do that a while ago I made actually made
[35:37] an old glass everything armor on her
[35:39] suit helmet just I mean I did really
[35:43] fast and it was really fun we were
[35:46] joking it's like oh we'll give this to
[35:47] devs only it'll be a predator see it'll
[35:50] just be these creepy devs in the
[35:52] background wearing their full class
[35:53] armor but the only issue with that is
[35:55] like it would
[35:57] they still show up your head in your
[36:00] body so you just be a guy in underwear
[36:02] running around with some glasses over
[36:04] you
[36:05] so I'm not the coolest I'm not even
[36:08] looking at chat I know there's at least
[36:10] 200 people that don't have a problem
[36:11] with that I didn't have to look at yet
[36:13] hey man you guys throw it out there or
[36:16] maybe we'll push that is that dangerous
[36:23] to try to get them to we want glass
[36:28] armed so oh what do you think the club
[36:41] last armor is the steeple of it Moses
[36:44] I'm not entirely sure about that - yeah
[36:49] it is fun mantis asks if the screws in
[36:53] the helmet are actual geometry or is it
[36:55] a normal map for something a little bit
[36:58] above so these ones it's not very much
[37:04] Geo
[37:05] but there's something actually like you
[37:09] Mike made an indentation in the Geo to
[37:11] give it something yeah so basically I
[37:13] did the indent and then I did the dent
[37:15] up because we see right here the way
[37:19] light reflects light plays yeah it helps
[37:21] coil change if it's any smaller than
[37:24] this I wouldn't have done that because
[37:25] it would just be way too expensive and
[37:27] not really worth it yeah yeah and like
[37:31] this is another thing where it just
[37:32] comes down like the artist Cole like
[37:34] sometimes to justify sometimes it's not
[37:37] it just case-by-case
[37:42] yeah I mean here's we make Mohawk things
[37:46] let's go let's go in that direction too
[37:59] it's like here's another thing we're
[38:01] like this top Mohawk part is bronze
[38:03] right now mm-hmm and because we have for
[38:06] freedom now it's painted metal you have
[38:12] an entire materials library I believe
[38:15] that we've kind of built up over time
[38:16] yeah and actually recently we had one of
[38:19] our parents our artist shame going
[38:21] through and actually updating that so
[38:23] pretty soon we're gonna start to roll
[38:26] that stuff out just we started to
[38:30] rebuild on materials just to bring more
[38:32] of a standard to it mhm yeah cuz like
[38:36] one of the issues with like not having
[38:39] strict standards within the material
[38:40] library one material base diffuse gray
[38:45] value might be 170 other one might be
[38:48] 210 so when we're multiplying color over
[38:51] it applying this purple purple
[38:53] multiplying on those different grayscale
[38:55] values is very different one's darker so
[38:57] right that starts to get annoying so
[38:59] like weird unifying all that stuff out
[39:01] and yeah that's one of the advances in
[39:06] the unicorn horn would really make it if
[39:11] you ask todd papy he'd probably approve
[39:13] that I mean it's a good style come on
[39:20] right to Jimmy that's her my camera you
[39:24] sure anymore who gets another so you've
[39:26] been playing yeah you've been playing a
[39:28] bit for the show just to see what we can
[39:32] do as far as the different types of yes
[39:34] yeah so orange creamsicle
[39:39] big fans orange white is awesome
[39:42] together I really like I'm a big bad the
[39:43] orange creamsicle because it reminds me
[39:45] of the clone troopers in the Clone Wars
[39:46] yeah person personally yeah yeah that's
[39:49] what it reminds me of yeah and like so
[39:51] the here I can showcase here's the og
[39:56] helmet and make this big yeah there's
[39:58] more the screen here which is more there
[40:00] we go
[40:00] I never tell you I'm gonna drop this
[40:02] deal if you don't
[40:06] a little bit nicer here we go like as
[40:10] you're making these the wort
[40:15] when you're using like the base metals
[40:17] it really starts to matter base metal
[40:21] compared to colors so like with the
[40:26] creamsicle having the bronze it just
[40:29] just I don't know like it starts to not
[40:31] work so like that's why I swapped it out
[40:33] to like this brushed steel and like yeah
[40:36] we're about to take it that far and how
[40:38] do you determine if an asset is too
[40:40] expensive does that come from
[40:42] Spencer somebody else is that something
[40:44] you have to you have to do chá yeah I
[40:46] mean it comes from a lot of apartments
[40:49] for us we have some base guidelines we
[40:52] try to stick around
[40:55] CryEngine allows for like some pretty
[40:57] wide ranges so it's it's not super
[41:00] strict in a lot of ways if we put
[41:05] something in we're like oh this might be
[41:07] a little too expensive or whatever
[41:09] sometimes it's better than we see what
[41:11] happens but we do have profiling tools -
[41:15] okay that's isolate this helmet if we
[41:18] can we can yes we can - right exactly
[41:19] how many drawer closed how expensive is
[41:21] geometry how expensive are the texture
[41:23] perhaps like we can get all that
[41:24] information
[41:25] yeah the profiling tools we've got QA
[41:27] we've got yeah multiple levels of
[41:30] engineering we'll get involved like if
[41:33] there's a like oh we're releasing a new
[41:37] landing zone both NPCs are really
[41:40] expensive like you know like like it's
[41:43] oftentimes in situation where you're
[41:44] like okay but why isn't why here why why
[41:47] why these characters and like you start
[41:48] to investigate further name I'm setting
[41:51] up a bot he'll hold up here got it going
[41:53] now folks in chat numbering one through
[41:57] six from left to right so the blue one
[41:59] is one the red is to the creamsicles
[42:01] three the bumblebee is four and there's
[42:05] also a great combo you tell me which one
[42:09] if only one of these could actually go
[42:12] in to get you what would it be
[42:18] obviously take a closer look it would
[42:21] just be all it some hints of red in
[42:23] almost on what it was this little red
[42:26] symbol thing that's on the side that's a
[42:28] little bit a little bit there yeah so
[42:33] this is from the original right that's
[42:35] our cycle mark that attached it to the
[42:37] vas huh yeah honestly that I get to be
[42:40] captain and they got something different
[42:42] like other helmets where it's like yeah
[42:46] I really might just be a bit that even
[42:50] see move on oh yeah I mean do they want
[42:58] to see me make a different variant or do
[43:00] I'm gonna go more than ready this is
[43:03] pretty evenly split here there's a lot
[43:05] there's a lot of people 5 and 6 is
[43:08] splitting the vote between itself
[43:09] there's a lot of people that like the
[43:10] neutral colors because it's gonna you
[43:12] know and neutral cars would go with more
[43:14] things yeah for sure
[43:16] but there's there's a there's a lot of
[43:18] folks who like the strong red yeah
[43:24] there's blood prophecies he doesn't like
[43:26] in you something trend should I show
[43:31] more shirt what else you got
[43:34] so when I made these we have a base list
[43:40] of 20 materials that we I mean you can
[43:43] see it here mm-hmm
[43:45] yeah we often make now in terms of what
[43:49] goes in game that there's like a further
[43:51] layer of like art direction of like
[43:53] these are the ones that the art director
[43:55] ended up really liking so we're you know
[43:57] end up going in that direction but the
[44:01] roads not taken yeah the roads not yeah
[44:07] so like it yeah I mean like the teal one
[44:13] this is actually a blue variant and one
[44:16] of the artists was here is like doing
[44:17] baby blue and pink is really good common
[44:19] like sure I'll try it out why not yeah
[44:23] and then like purple and going black
[44:26] usually look really nice this is the
[44:28] pink berry and I landed on and then back
[44:33] here it's like here's a black bear hands
[44:37] so like in this one I got rid of almost
[44:40] all the glows it is that the just moves
[44:42] by the one that's reflecting on the
[44:43] black one yeah that's cool yeah so it
[44:47] actually is glowing actually is doing an
[44:50] emissive something yes yes in the
[44:52] reflection of a you know reflective
[44:55] services around it will pick that stuff
[44:56] up there's a super nice looks cool that
[45:00] one's the and the Oregon hipster
[45:04] unnatural yes recycled materials yeah oh
[45:08] hi Jake P oh my god I apologize yeah so
[45:15] end up doing like a full list and then
[45:17] refine that down and potentially slip in
[45:23] one of these
[45:30] yeah that's cool all right well that is
[45:35] actually it then it's actually it for
[45:39] our show this week everybody thank you
[45:43] for tuning in
[45:46] a brief much shortened and abbreviated
[45:48] toward the entire process that that our
[45:51] character our teen goes through for just
[45:52] just a helmet you can see it's one of
[45:55] those things it's a it can seen we're
[45:58] talking about this before it can seem
[46:00] easy and there are aspects of it that
[46:03] get easier over time as you build
[46:04] material libraries and build all your
[46:06] boxes like that but the but though the
[46:08] work to get to this point the work
[46:10] needed to build the process is to build
[46:12] a pipeline to build the material
[46:14] libraries and stuff it's we're standing
[46:17] on the on the shoulders of a lot of the
[46:18] work that came before no for sure
[46:20] yeah it's like it's a constant thing of
[46:23] trying to find more efficient ways to go
[46:25] about these different processes so
[46:27] something I am end up doing when I'm
[46:29] making material variants
[46:31] I don't do pout the full 20 and go from
[46:33] there mm-hmm first I'll make like okay
[46:36] I'll make the first one which is red and
[46:39] the way I think that is basically like
[46:41] theming so kawaai step this red one I
[46:44] kind of like where all the colors are
[46:46] falling in terms of like a slightly
[46:47] darker red black and that so that once I
[46:50] make that I can then dupe a few
[46:53] materials out of that mm-hmm
[46:54] and then when I'm gonna set those
[46:56] material variants all I'm doing is going
[46:58] oh the dark red and I'm gonna switch to
[47:00] white oh the light red I'm gonna switch
[47:02] to orange so like at that point that
[47:04] gets really fast because this replacing
[47:07] and like throughout the list of 20 I
[47:09] find a few themes and then go from there
[47:11] let's give it up for Tim who's just been
[47:13] standing there very still this entire
[47:15] times yes the perfect model Tim it's
[47:19] what that's where the phrase tipos comes
[47:21] from maybe I pretended you know I I
[47:23] don't think that's real at all no I just
[47:26] learned you something about your job
[47:28] you can thank me later your tiny days
[47:30] this way alright guys that's it thank
[47:33] you thank you for tuning in we'll be
[47:35] back next week with another show and uh
[47:36] yeah thanks for watching
[47:52] thanks for watching for the latest and
[47:54] greatest in star citizen squadron 42 you
[47:56] can subscribe to our Channel or you can
[47:58] check out some of the other shows and
[47:59] you can also head to our website at

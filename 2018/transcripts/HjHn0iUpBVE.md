# CitizenCon 2948 - Panel: Breathing Life Into Content With Physics

**Video:** https://www.youtube.com/watch?v=HjHn0iUpBVE
**Date:** 2018-10-18
**Duration:** 26:17

## Transcript

[00:00] please welcome technical director Shawn
[00:03] Tracy and senior tools programmer Andres
[00:06] roar well great uh thanks a lot for
[00:15] coming guys
[00:16] star citizen citizen Khan 2948 so I've
[00:20] been doing these for a few years so it's
[00:21] pretty fun and I'm super happy that you
[00:22] guys came to our talk because who cares
[00:25] about spaceships and his face game right
[00:26] exactly
[00:27] let's hear about content in physics and
[00:29] cloth simulations and all those manners
[00:31] of things so before we get too far I
[00:34] just want to introduce myself and
[00:36] Andreas for those that don't know me I'm
[00:38] Shaun Tracy the technical director of
[00:40] content at cloud Imperium games and with
[00:43] me on stage today is Andreas roar he's
[00:45] one of our senior tools programmers out
[00:47] of Frankfurt so thanks a lot for flying
[00:49] all the way out from Frankfurt he works
[00:51] very close with our engine guys on a lot
[00:53] of the stuff that we're gonna show you
[00:53] today so really happy to have him here
[00:55] with us today all right so let's dive
[00:59] right in now there's a bit of an
[01:01] introduction I want to talk about what
[01:03] we're actually gonna do here so
[01:04] environments and even characters in some
[01:06] cases within start system have arguably
[01:09] been a bit static and recently the
[01:11] physics engine and game teams have been
[01:13] making a really concerted effort into
[01:15] helping bring some life into basically
[01:18] all our scenes and with our content
[01:20] using physics on our assets so this talk
[01:23] is gonna cover some of the work that
[01:24] they've been doing and some of the
[01:26] features that aren't in design are now
[01:27] able to start using within star citizen
[01:29] and squadron 42 so before I get too far
[01:32] I really want to give a big shout out to
[01:34] the guys that have actually done this
[01:35] work and allowed us to kind of represent
[01:37] it in and show you guys today cuz this
[01:39] is super early stuff we've only been
[01:41] kind of having this online in the last
[01:44] let's say month and a half two months or
[01:46] so so I'm really happy for guys like
[01:48] Chris rein and the physics gurus over in
[01:50] Frankfurt to kind of let us show you
[01:52] this in a very early state they were
[01:53] quite nervous obviously about that I'm a
[01:57] little crazy I want to show you guys all
[01:59] the stuff all the time
[02:00] but of course this is really important
[02:02] that I give them a really nice shout out
[02:03] and it's really we're really lucky to be
[02:05] able to kind of stand up here in rep
[02:07] those guys okay so let's actually talk
[02:10] about what we're gonna talk about the
[02:12] talk is split into two sections first
[02:14] we're gonna talk about environments and
[02:16] this is gonna include things like planet
[02:17] wind we're gonna talk about the wind
[02:19] entity which is something new for us
[02:20] we're gonna talk about kind of an
[02:23] animated asset or content versus a
[02:25] simulated asset so doing physics to move
[02:28] it around or basically having some sort
[02:30] of pre-camp animation then we're gonna
[02:32] talk about environment cloth itself so
[02:34] this is our entity cloth we call it then
[02:37] after that I'm gonna pass it over to
[02:39] Andres and he's gonna talk about
[02:40] character cloth now this is unified now
[02:44] with our environment tech and this
[02:45] wasn't the case up until now then we're
[02:48] going to show you a bit of a
[02:49] demonstration with the implementation
[02:51] that we use right now because obviously
[02:52] you do have cloth on characters and
[02:54] stuff in the game already but it's a
[02:56] pendulum simulation versus a vertex
[02:58] simulation just show you guys the
[02:59] differences between the two will show
[03:01] you better the actual workflow that
[03:03] we're using and that he's still
[03:04] developing right now so that you know
[03:07] the artist can work on this a little bit
[03:08] faster and then we'll show you a little
[03:10] demonstration of a multi-layered cloth
[03:12] so this is the thing that we couldn't
[03:13] really achieve before this kind of
[03:16] content and then finally we'll talk
[03:17] about some of the physics of the future
[03:19] yes yeah that's a nice one
[03:22] we can sell that one all right so why do
[03:26] we want to simulate things physically
[03:28] now using physics simulation at runtimes
[03:31] and games is often preferable to using
[03:33] sort of pre baked animations especially
[03:36] when placed in dynamic environments so
[03:37] what do I mean by a dynamic environment
[03:39] dynamic weather and wind it needs to
[03:42] kind of support things like weather
[03:44] effects you need to be able to do player
[03:47] collision you need to be able to react
[03:49] to explosions that are nearby you need
[03:51] to be able to react to AI collisions all
[03:53] kinds of things that will change around
[03:55] it so you can't just pre cannon
[03:57] animation as I did do that
[03:58] you'd rather simulate that physically
[04:01] but there's problems with that obviously
[04:02] comes performance implications and
[04:04] things like this so we had to solve all
[04:06] of these so generally when activity is
[04:08] going on near the objects it should be
[04:10] reacting appropriately the other thing
[04:13] to why to use these physics is actually
[04:14] content creation itself becomes way way
[04:17] easier when we have to make an asset
[04:19] that's just simply
[04:20] it actually goes through a lot of teams
[04:22] so it goes from design to art to rigging
[04:25] to animation back to design and finally
[04:27] in the game that's a lot of people to go
[04:29] through and especially when you're in a
[04:30] an international corporation that that's
[04:33] got to go through time zones that takes
[04:34] a while instead of just having a
[04:36] designer take an asset and it's ready to
[04:37] go so what has been the state of of
[04:41] simulating such assets for us up until
[04:44] now well it's been really expensive as I
[04:47] mentioned in terms of performance and
[04:49] generally relied on Lua now if you've
[04:51] been keeping track of our object
[04:52] containers streaming work you'll know
[04:54] that we had to remove Lua completely
[04:56] from the engine this was a huge deal to
[04:58] do and what that meant was things that
[05:01] were previously working before didn't
[05:03] work at all anymore so you know it's not
[05:07] that this isn't revolutionary by any
[05:09] stretch but we did have access to
[05:10] similar things but there were big
[05:12] assumptions that those older entities
[05:14] were making and the biggest assumptions
[05:17] of the pre-existing entities were things
[05:19] like assuming setup like dead is always
[05:22] going to be up or Z I'm sorry it's done
[05:24] Canadian and ultimately they hadn't
[05:29] changed much since earlier versions the
[05:30] entrance so they just weren't suitable
[05:32] at our scale nor for the performance
[05:34] implications that we have so we'd
[05:36] already tried a few techniques
[05:37] previously but they've even proved too
[05:40] expensive that I'm sure you've seen them
[05:41] within demos you know tarps floating the
[05:43] wind flags and things like this they
[05:45] were either too expensive to run on a
[05:46] planet or the tools and entities just
[05:48] didn't work anymore so generally we
[05:51] didn't really have a planetside location
[05:52] that needed a lot of this so it wasn't
[05:54] as big of a deal but now with Hurston as
[05:56] you've seen there's wind there's
[05:58] atmosphere there's lots of stuff going
[06:00] on near these objects so it's very
[06:01] important that we brought this online so
[06:03] and again thanks to our amazing work
[06:05] biophysics crews back in Frankfurt that
[06:07] new implementations are now usable by
[06:09] art and design for things like
[06:11] constraints soft bodies environment
[06:13] cloth and last but not least character
[06:15] cloth alright so as you saw already in
[06:21] the demo we have wind on planets so even
[06:23] tweakable to each of the planets and
[06:25] even to each of the ecosystems which is
[06:27] really cool so this was created by our
[06:29] planet technology team this helps gives
[06:31] tons more movement and life to otherwise
[06:34] the static environment if you saw those
[06:36] trees just sitting there not moving at
[06:38] all it would take you back to the you
[06:40] know early 2000 even early 90s of games
[06:42] where the stuff just didn't move around
[06:44] as mentioned previously this whole wind
[06:47] system it did exist that we had wind
[06:49] four levels but again this would only
[06:52] this needed to be rewritten to work in a
[06:54] non flat 2d world basically this is
[06:56] actually you know involved around the
[06:58] sphere so the the wind in the end has to
[07:02] be relative to this a spherical position
[07:05] on the planet so you can imagine how
[07:06] that's actually a little bit difficult
[07:07] so changes were mostly related to making
[07:10] that whip work in 3d on a sphere so the
[07:14] second type of win well I'm sorry let me
[07:16] show you a quick video here so this is
[07:19] the savanna biome that you saw a little
[07:21] bit of I'm actually right behind I'm
[07:24] sorry right in front of the crashed
[07:25] crashed satellite in this particular
[07:28] video and I just wanted to do a quick
[07:30] pad because you see how much life
[07:31] already that brings so you see leaves
[07:34] moving in the wind you see it affecting
[07:35] the particles you see it affecting the
[07:37] grass and again this is the wind flowing
[07:39] through this just happens so now again
[07:43] this is set on a per biome level but
[07:45] even at a per biome level that scale is
[07:47] pretty gigantic so now on a much more
[07:51] isolated level we have a new type of
[07:54] wind um that that all mixes in with in
[07:56] the planet wind it supported it's called
[07:59] the wind area entity so this is what you
[08:01] see an image of here and here so the
[08:04] wind area itself physically simulates
[08:06] the air with a given resistance
[08:09] viscosity and it moves in a user-defined
[08:11] direction at a user-defined speed and
[08:13] users meaning the designers basically
[08:15] they can select this entity and set all
[08:17] of these things really really quickly
[08:19] so generally if no direction is set the
[08:22] wind source moves omnidirectional II and
[08:23] that's what you see on this image here
[08:25] it's actually a sphere of wind so this
[08:27] is all emanating from a single point
[08:29] outwards and then if you give it a
[08:31] direction you can see that we have these
[08:33] nice little debug arrows and that's
[08:35] gonna actually give it a very specific
[08:37] direction that it is so this gives the
[08:39] designers the ability to actually
[08:40] localize their wind a lot more
[08:42] realistically the other thing we do with
[08:44] these is we like to attach them to
[08:45] things those things like the back of the
[08:47] ship
[08:47] for example if you got thrusters and
[08:49] things like that so both of these
[08:51] eventually need to work into the wet
[08:53] weather system that Chris Roberts is
[08:55] obviously very keen for us to start
[08:56] working on but these are the stepping
[08:58] stones into something like this okay so
[09:03] let's talk a little bit about an
[09:05] animated cloth versus this new extended
[09:07] cloth entity so sometimes animation is
[09:10] suitable to do especially if the players
[09:11] not going to be near it or nobody's
[09:13] gonna really affect it but again it kind
[09:15] of has to go through a lot of people so
[09:16] it's really it's not that great because
[09:19] it's not affected by dynamics in the end
[09:20] so let me show you a quick example of
[09:22] that going on so on the left on the left
[09:25] sorry
[09:26] we have a pre-baked one now all these
[09:28] little gizmos you see there are actually
[09:30] joined so there's like there's 30 40
[09:32] joints moving this around now these two
[09:35] tarps are actually placed on boxes I
[09:37] removed the boxes obviously so it takes
[09:40] a certain amount of markup to still get
[09:41] our entity cloth reacting to this I've
[09:43] also got now a wind entity that we just
[09:45] talked about and I'm gonna move it over
[09:47] the dynamic one the video pause I'm
[09:54] sorry I got excited and I clicked on it
[09:57] so you see as it moves around that
[09:59] actually reacts very realistically to it
[10:01] and again it's it's marked up as if it's
[10:03] on boxes and we do this just with vertex
[10:05] colors so we can make an asset we can
[10:07] mark it up and as you see when I move
[10:09] the wind entity over the animated object
[10:11] nothing happens right because this is
[10:13] just a pre-canned animation doing the
[10:15] same thing and this will collide with
[10:17] players this will move into any-any the
[10:19] wind direction changes and you as you
[10:20] see I'm just pulling it all over it so
[10:23] if any explosion happens is there any if
[10:25] anything dynamic happens it's gonna
[10:27] react appropriately so that sort of
[10:30] gives you a good example of look there
[10:33] we go sorry a good example of why
[10:35] sometimes you want to make this dynamic
[10:37] rather than rather than pre can sort of
[10:40] animation and again it saves on our
[10:42] joints saves on animation saves on a lot
[10:44] of work so let's show a couple of the
[10:47] features of this extended cloth entity
[10:49] so this is kind of a fun thing now our
[10:51] physics group Chris rain really really
[10:53] wanted us to do this really nice sort of
[10:55] ship reveal with a nice satin cloth and
[10:57] everything but we had a lot work to do
[10:59] for this demo and some other stuff later
[11:00] on
[11:01] so it's close its close to what he
[11:03] wanted I hope I hope he's happy with it
[11:06] so the physics team similar to the Rin
[11:08] had to rewrite this cloth entity
[11:10] implementation completely from scratch
[11:12] it was really important because we had
[11:15] some trouble with earlier versions and
[11:17] it's not only that it didn't work on at
[11:18] the scale of planets and assumed things
[11:20] like set up but there was there was
[11:22] other problems with the earlier
[11:23] implementations within the engine
[11:25] anyways and most of the most these
[11:28] problems related to instabilities within
[11:31] the simulation and what that would cause
[11:32] is something called we kind of call it
[11:34] poly soup it's like a big ball of
[11:36] polygons that just can't recover from
[11:39] the simulation so you can't ship a game
[11:41] with that kind of stuff if we shipped it
[11:43] out to and who had an interaction like
[11:44] that I mean that that's not acceptable
[11:46] to us so we had to change that so major
[11:49] culprits of the poly soup are usually
[11:51] the topology of the asset itself and
[11:53] without going too deep into it the
[11:55] geometry being simulated has to be
[11:57] really regular faces or the the face
[11:59] areas have to be the same otherwise
[12:01] you'd end up with this sort of poly soup
[12:03] ball ultimately the issue was that the
[12:05] topology of the render mesh and the
[12:07] simulation itself were were coupled so
[12:09] basically whatever your render mesh
[12:11] topology was that was how it was gonna
[12:13] simulate we've decoupled that now lastly
[12:16] we didn't have self collision before so
[12:18] cloth couldn't collide with itself
[12:19] that's an important component because it
[12:21] means you can have freely flowing cloth
[12:23] meaning not attached to anything you've
[12:25] probably seen it in a million games they
[12:26] have you know some tapestry up on the
[12:28] wall or just something hanging from
[12:30] something and very seldom do you ever
[12:33] see free-flowing cloth just moving
[12:34] around soft body in the world so let's
[12:37] get this video going cuz I'm already
[12:38] going over time sorry all right so I've
[12:41] got a quick video I just threw an M 50
[12:43] down on damar and I got a couple deck
[12:46] crew taking care of it I was getting
[12:48] lonely so you see I spawn up this cloth
[12:51] and it keeps pausing sorry about that
[12:54] I spun the cloth in and I just turned on
[12:57] our AI physics and basically physics
[13:00] starts simulating and that drapes over
[13:01] the ship just as you would expect it to
[13:04] so now I keep playing around with it a
[13:07] little bit and there's so many different
[13:08] properties actually exposed directly to
[13:10] the designers for something like that so
[13:12] I need to mention that this is of hyper
[13:14] fish and simulation and there's a
[13:16] certain amount of it's a user-defined
[13:18] variable for friction right so we can
[13:21] pull the ship out and I can change the
[13:23] friction so that that thing will slide
[13:24] right off or it will kind of hold on to
[13:26] it but now I'm gonna do something a
[13:28] little more extreme and this is where
[13:31] you really need the self collision so
[13:41] there you can see it fold up upon itself
[13:43] and we're gonna run it again just to
[13:44] show you again this is it never gets to
[13:47] a state that it can't recover in terms
[13:48] of the simulation and it's always going
[13:50] it's a purely deterministic simulation
[13:52] regardless of the frame rate and time
[13:54] step size which is a big big deal for us
[13:57] it's also unconditionally stable so it's
[14:00] never gonna explode and will fully
[14:01] recover so when I mentioned those wind
[14:05] entities before and sort of attaching
[14:07] them to the back of the ships and I was
[14:09] just wiggling it around under it just to
[14:11] show you how how dynamic that stuff
[14:12] actually is so let's say you had I don't
[14:16] know a little flag on the ship or you
[14:18] know you might have a Superman ship with
[14:19] the cape on it who knows so I dropped it
[14:26] on the back and I've got a little wind
[14:27] entity actually attached to the back so
[14:28] let's turn on the ship and it blows off
[14:32] onto these poor guys back there so we'll
[14:38] do that one more time because I don't
[14:39] know they need it so now you can see
[14:42] their heads poking through that was my
[14:44] fault actually on the topology of the
[14:45] asset itself it just need to be a little
[14:47] bit tighter for collision and you can
[14:48] see that that wind is still going on in
[14:50] to flutters down on to the point nicely
[14:51] so I'm going a little bit over time so
[14:54] I'm not gonna go over a too deep of the
[14:56] other things but again this is early
[14:58] times you guys are gonna see tons of
[14:59] this now within the environments and
[15:01] yeah I'll pass it over andreas who I
[15:04] sucked up two minutes of your time I am
[15:06] so sorry that's not gonna be a problem
[15:08] thanks Ron
[15:10] alright so I'm gonna talk about
[15:12] character cloth as Shaun has told you of
[15:16] the soul had been rewritten completely
[15:18] from scratch and previously we've had
[15:20] two different pipelines two different
[15:22] solvers and that's always like a pain in
[15:24] there it's a big pain to maintain these
[15:26] two
[15:28] it needs like separate teams to do that
[15:32] and like yeah so the unification is
[15:35] really a big deal for us and the let me
[15:38] tell you a little bit more about how the
[15:39] previous system worked that sean has
[15:41] mentioned this so called pendulum
[15:44] simulation so imagine like the
[15:46] characters called our characters in the
[15:47] game they have this internal skeleton
[15:49] which is made up of joints or bones as
[15:51] they're called and these pendulums are
[15:54] essentially extensions of these
[15:56] skeletons so there they were used
[15:58] primarily to attach more kind of rigid
[16:01] they're like simple orbit objects like
[16:03] for instance grenades attach them to a
[16:05] body or like a rocket launcher at you at
[16:07] the back of your back and whenever you
[16:09] moved this this stuff like wiggled
[16:11] slightly around and it wasn't originally
[16:14] not really supposed to be used for more
[16:17] complex simulating more complex types of
[16:19] objects such as cloth shirts capes
[16:22] trench coats whatever so what they did
[16:26] was like in earlier titles that used the
[16:30] system they created ropes of these
[16:32] basically joined chains and created
[16:35] several of them and connected them
[16:37] together so they would form something
[16:38] like a sheet of cloth but the real
[16:41] resolution of these things I was always
[16:43] very very course so I've always liked in
[16:46] terms of like fidelity and now with with
[16:48] this vertex cloth approach you have the
[16:51] ability to put a lot more detail into
[16:53] these meshes and that results in much
[16:57] better looking simulations so as you can
[17:01] see here website is which shows vertex
[17:05] closure the new stuff is is on the left
[17:07] and you can see like you can see all
[17:10] these wrinkles going on creases fold
[17:13] folds forming dynamically reacting to
[17:16] the animation of the player the thing is
[17:19] like in general in terms of character
[17:22] cloth
[17:23] the problem with character cloth is that
[17:25] the characters are much more dynamic
[17:27] than environments so even though with a
[17:29] new cloth our environment cloth can be
[17:31] more dynamic and can move move about in
[17:33] the environment theoretically
[17:36] Merilee it will be curtains or tarps
[17:39] flags this kind of stuff across on a
[17:41] character needs to undergo much more
[17:44] stress because who knows what the player
[17:46] ends up doing with the character they
[17:47] jump out of their ship and expect to
[17:49] land somewhere and that cloth still
[17:51] looking nice and neat so for for the
[17:55] physic solver that's like very demanding
[17:59] so we're quite happy that this new
[18:01] solver is very stable it doesn't explode
[18:03] sometimes like for more extreme cases
[18:06] you need to help this over a little bit
[18:07] and that's why we have these mark-up
[18:12] tools for so I worked in the film
[18:16] industry on cloth simulation and soft
[18:19] body simulation for a couple of number
[18:21] of years and in the film industry there
[18:25] is this well the industry standard there
[18:28] is digital content creation package and
[18:30] called Maya and that inside has a solver
[18:33] that's called ncloth and yeah so this
[18:39] this particular solver is kind of the
[18:41] industry standard it's quite robust it's
[18:43] easy to author and so my idea was
[18:46] instead of creating new authoring tools
[18:49] within our sandbox editor which is a
[18:52] significant amount of work to do that
[18:54] lets just use Maya because for instance
[18:58] all our character rigs are already
[19:00] altered in Maya the character animations
[19:02] are altered they're all the like
[19:04] character assets are put together in
[19:06] Maya and then export it and it paused
[19:08] again so that's why it made all kinds of
[19:12] sense to to also do the cloth setup
[19:14] authoring there and what you can see
[19:17] here is scrub through real quick by
[19:21] painting these what we call vertex
[19:23] attributes you can define for instance
[19:26] how in how far like the cloth is
[19:29] attached to the rigidly
[19:30] deforming mesh and by doing that you can
[19:36] kind of guide the simulation in places
[19:39] where you know that it's gonna be like
[19:43] there could be problems when it gets
[19:46] pushed between collision objects for
[19:48] instance and then
[19:49] even the most stable simulation could
[19:52] run into problems it paused it has its
[19:54] own will for some reason so in this case
[19:59] I altered it in a way so that it like
[20:01] the attributes that you can use are
[20:03] exactly like a mirror of this ncloth
[20:06] tool that you can have in Maya and the
[20:09] reason for that is that artists can
[20:11] already use a tool that they're familiar
[20:12] with they can order it in exactly the
[20:14] same way the even they like the words
[20:17] the descriptions of the attributes are
[20:19] the same and that way I think they can
[20:21] be much more productive so the previous
[20:23] the main problem with the previous
[20:24] system is the most know was that like
[20:29] the authoring part was very cumbersome
[20:31] and very limiting and through this
[20:34] system we're gonna be able to create the
[20:36] most complex of setups that I think you
[20:38] have seen in games Shawn is already
[20:40] shown or we've already seen a the
[20:41] example of the trench coat on Bishop but
[20:44] the real deal is like this what we call
[20:48] layered cloth where were you have like
[20:51] separate different layers of cloth
[20:53] interacting with each other and so
[20:56] that's what I'm going to show you next
[20:59] so it's probably the worst case example
[21:02] of what you can have so here that's
[21:06] that's some that's not the final product
[21:10] but yes I think when you're physic
[21:14] programmer and you you've been working
[21:16] on your code for so long the first
[21:19] moment you see stuff like that it's like
[21:21] there's super happy because that's
[21:23] already a big breakthrough we've coded
[21:26] these individual sheets so we can see
[21:27] where they interpenetrate if they do but
[21:30] it's already pretty clean and I was one
[21:32] of the first tests we did so Chris Wayne
[21:34] has clearly done this tremendous job
[21:36] there
[21:38] [Applause]
[21:43] so that is one of the Hurston security
[21:46] guards I think and yeah it's just
[21:50] amazing how complex this stuff is and
[21:53] it's still it still looks like
[21:54] impeccable looks similar to like an
[21:56] offline cloth simulation and ultimately
[22:00] with the system what I'd like to do is
[22:03] like simulate as many objects as we can
[22:05] like currently most of these like more
[22:10] like dangling free hanging cloth things
[22:12] are simulated but there are other things
[22:14] like even if you have like trousers that
[22:15] are in super tight if even if those have
[22:18] like a tiny amount of degree of freedom
[22:21] to move and your entire animation will
[22:23] look more dynamic and more more
[22:25] believable and if we can end up doing
[22:27] this on the entire body I think we'll
[22:29] have really like amazing looking
[22:31] characters in the future right so
[22:35] talking about future
[22:36] yeah sean is going to give you a bit of
[22:38] an overview of what's what's coming up
[22:40] next
[22:41] sure I'll just let that one play out
[22:45] here I was manually looping that last
[22:47] bit there yeah and there was this was
[22:53] some great work literally in the last
[22:54] week from some super good tech artists
[22:58] gage Holloman Marcy Lee Chris and
[23:01] Forrest as well as the physics
[23:03] programmers helping them out so of
[23:04] course rain and the physics team they're
[23:06] so big big props to them for doing this
[23:09] that was the idea so the comment was no
[23:13] clip indefinitely and that's the whole
[23:14] idea of that there's self collision that
[23:16] we can do that layered cloth and it's
[23:17] not necessarily something that we could
[23:19] do with pendulum cloth before so it's
[23:22] gonna let us kind of do the Queen
[23:24] Amidala cape dragon on the ground going
[23:27] down the stairs and these kind of things
[23:28] that's gonna be pretty awesome so some
[23:30] of the future stuff that the physics
[23:32] guys are okay with us kind of mentioning
[23:34] a little bit is something called the for
[23:36] mobiles this might be something we're
[23:37] it's this is all Rd and kind of you know
[23:40] hopefully we can do this but this was
[23:42] something we tried out in one of the
[23:44] early games on an earlier implementation
[23:45] the engine deformable is something that
[23:48] will react to an explosion force and the
[23:51] easiest way that I've ever had to
[23:53] explain it is like imagine it's
[23:54] simulating like a cloth or a single
[23:56] frame
[23:57] so that once something deforms and it
[23:58] holds ridges so we could deform things
[24:01] like sides of the ships sides buildings
[24:03] doors train containers whatever whatever
[24:07] you can things out so drink containers
[24:09] on sea containers yeah well no those
[24:11] trades in Hurston we're good further
[24:14] performance improvements it's already
[24:15] orders of magnitude faster than what we
[24:17] had before so this is gonna be very very
[24:19] accomplishable within the game and you
[24:21] guys will see it quite soon tessellation
[24:23] so even getting further a basically
[24:26] density on those on those assets that
[24:28] you see something we mentioned a little
[24:30] bit called signed distance fields that's
[24:32] something I was hoping we could talk
[24:33] about today not quite ready to talk
[24:35] about it this something we're gonna do
[24:36] to massively optimize collisions and to
[24:38] do some work basically with effects like
[24:40] shields and things to just make them
[24:42] conform a little bit more into the
[24:43] ship's it's gonna be quite nice tearing
[24:45] so imagine that cloth being able to tear
[24:47] maybe shoot some holes in it that'll be
[24:50] quite cool and then even better and this
[24:53] is something that's on line not quite
[24:55] ready to show it but our soft bodies and
[24:57] soft bodies not just a cloth soft bodies
[24:59] something that has volume but is squishy
[25:01] so like a pillow or like a duvet or
[25:04] something like this so then on top of
[25:07] that we want soft body - soft body
[25:08] collisions of course so that'll be quite
[25:10] cool and many more things that I'm sure
[25:13] are sitting in their brain that will
[25:15] that will come up yeah of course
[25:17] so with that with that we want to give
[25:22] some big special thanks in alphabetical
[25:24] order so that - Ali Brown director of
[25:28] graphics programming Chris rain as I
[25:30] mentioned senior I I'm actually not sure
[25:33] but it's ty Lee's physical that's fine
[25:35] math wizard gage Hallman tech artists on
[25:38] the cloth for Steph and help with the
[25:40] captures Evo heard Sagan you know
[25:42] implemented that pendulum simulation
[25:44] that we are sitting there talking crap
[25:45] about yen's Lind game play engineer
[25:49] Milan paycheck helped us all with the
[25:52] management of this presentation Marcy
[25:54] Lee one of the tech artists doing the
[25:55] work on the asset Rob diction and tech
[25:58] artist in the UK also working on the
[25:59] asset and then Thomas make Michalik
[26:04] the help so big special thanks to those
[26:07] guys for helping us do this talk
[26:09] basically
[26:10] under pressure definitely so thanks for
[26:13] the time guys really appreciate you
[26:14] coming

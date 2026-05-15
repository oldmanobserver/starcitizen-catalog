# Star Citizen: Around the Verse - Building Solar Systems & Nox Preview

**Video:** https://www.youtube.com/watch?v=STwVI6_xWqc
**Date:** 2017-06-22
**Duration:** 40:24

## Transcript

[00:16] welcome to another episode of around the
[00:17] verse our weekly look at star scissors
[00:19] ongoing development I'm Chris Roberts
[00:21] and I'm Eric Kiron Davis so on today's
[00:23] show we'll examine what it takes to
[00:25] build a solar system a process that
[00:27] includes everything from extensive
[00:28] astronomical research to the creation of
[00:31] a new tool that we're calling Sal Ed
[00:33] yeah plus we have a ship shape that you
[00:35] will KNX want to miss that's so bad but
[00:38] first let's pay a visit to Frankfurt for
[00:40] a studio
[00:41] update hello I'm Brian Chambers
[00:44] development director of our Foundry 42
[00:46] Frankfurt office this month the team
[00:49] grew by an additional two people
[00:51] bringing us to a total of 76 employees
[00:54] this month we had 20 of those employees
[00:57] participate in a local 5K run here in
[00:59] Frankfurt
[01:00] nobody necessarily participated in hopes
[01:03] of winning but it was a good opportunity
[01:05] to hang out after work and have some fun
[01:06] and exercise so let's start off this
[01:09] month with checking in with the level
[01:11] design team the level design team
[01:13] finished the main part of the work they
[01:15] needed to do for the surface Outpost and
[01:18] they're now in the hands of the
[01:19] environment art team they also had white
[01:22] boxes for both the modular hangers and
[01:25] garages approved and those were handed
[01:27] over to the r team as well for their
[01:30] visual exploration phase with the white
[01:33] boxing phase complete they're currently
[01:35] focusing on implementing the markup
[01:37] required for all our locations this
[01:40] involves everything from room systems
[01:43] and breathing environment interactions
[01:46] like vaulting elevators and consoles for
[01:49] spawning ships and
[01:51] vehicles Levi will have a combination of
[01:54] hangers and garages to spawn ships as
[01:56] well as vehicles to explore the
[01:58] planetary surface
[02:00] with the bulk of the work completed on
[02:02] the previously mentioned locations
[02:04] they're now moving over to the remaining
[02:06] Flagship Landing zones for the Stanton
[02:08] system the first ones on that list are
[02:11] Area 18 and lorville followed by orison
[02:15] and new babage the engine team worked on
[02:18] consistent capturing of both atmosphere
[02:21] and sky in Cube Maps so we can
[02:24] seamlessly blend between Global
[02:26] atmosphere and local Cube map based
[02:28] lighting this will ultimately give us a
[02:31] higher level of visual Fidelity they
[02:34] implemented an improved compression
[02:36] algorithm for the new pack file system
[02:38] to allow for more efficient data
[02:40] streaming due to reduced CPU overhead
[02:43] during
[02:44] decompression this is part of the new
[02:46] incremental Patcher which will
[02:48] ultimately make patches and updates much
[02:50] more efficient they also did some work
[02:52] on our internal tool called planed we
[02:56] have several needs for marking areas on
[02:58] a planet to identify where specific
[03:01] objects should be spawned within an
[03:03] ecosystem areas to be punched out to
[03:05] embed brushes or complex structures such
[03:08] as Landing zones the code for this was
[03:11] unified so it's easier to reuse and
[03:13] extend in the future as even more
[03:15] functionality in this regard is needed
[03:18] the AI team has been busy as usual uh
[03:22] this month they did some work on buddy
[03:23] aai where NPCs will intelligently follow
[03:27] a designated leader they also oo made
[03:30] progress on ship AI getting it one step
[03:32] closer to be fully controlled via
[03:34] subsumption one Sprint they did this
[03:36] past month was focused on human combat
[03:39] they spent time refining behaviors for
[03:41] First Reactions to enemies seen and
[03:44] events heard the reactions vary in
[03:47] direction and speed from casual
[03:49] situations to Quick reactions to loud
[03:51] events and so on the clips you see here
[03:54] are put together in a way that just
[03:56] verifies the behavior via triggering the
[03:58] appropriate animation from a start pose
[04:01] to the action intended once the behavior
[04:04] is verified they'll get fully hooked up
[04:06] in game and the popping won't occur they
[04:08] also did some additional work on
[04:10] Friendly Fire to make sure friendlies
[04:12] are identified correctly in combat
[04:14] situations if and wi
[04:16] [Music]
[04:22] needed the Frankfurt VFX team has been
[04:25] continuing to work on effects for the
[04:27] various Planet surface types this covers
[04:30] a wide range of effects from simple
[04:32] footsteps to weapon impacts and vehicle
[04:35] Tire effects
[04:44] [Music]
[05:12] they also did some early experimenting
[05:14] with rigid body simulations and the
[05:16] workflow for squadron 42 cinematics this
[05:20] will cover the many mesh destruction and
[05:22] deformation animations that are required
[05:25] for the Squadron 42 single player
[05:27] missions the lighting team has has been
[05:30] very busy bringing all surface outposts
[05:32] to their final lighting this involves
[05:34] creating a consistent set of lighting
[05:36] fixtures temperature charts and rules
[05:40] which we can use to define how each type
[05:42] of outpost looks we've also created a
[05:45] library of prefabs combining existing
[05:47] props with lighting Elements which can
[05:50] be easily iterated on and propagated
[05:52] across all outposts
[06:03] the techar team had a variety of tasks
[06:06] this month they continued to create
[06:08] numerous mannequin animation fragments
[06:11] for the Cinematic team they implemented
[06:14] the game entity for the new Kar
[06:16] custodian SMG energy weapon with the
[06:19] blocked out mesh and rig now that it's
[06:22] implemented other departments can start
[06:24] working with it in game such as
[06:26] animation and
[06:27] VFX they added addition features to our
[06:30] internal play blast tool to make it
[06:32] easier for the animators to create
[06:34] simple play blasts of their work which
[06:36] are primarily used for animation reviews
[06:39] they also made great progress with the
[06:41] new weapon Dynamics and secondary
[06:44] motions using both in-game physics and
[06:47] simulation the initial results are
[06:49] promising and secondary animation will
[06:52] add one more level of subtle detail and
[06:54] realism to the verse
[06:57] [Music]
[06:59] [Applause]
[06:59] [Music]
[07:01] the build engineer team grew by one
[07:04] member this month bringing us to a total
[07:06] of two here in Frankfurt so a good
[07:09] amount of time was spent getting him up
[07:11] to speed on how we function they are
[07:13] ultimately both responsible for build
[07:16] support for our European offices as well
[07:18] as working on both mid and long-term
[07:20] plans to increase both efficiency and
[07:23] reliability of our build process for the
[07:25] environment our team this month with the
[07:28] updated material distrib bution the
[07:30] ecosystem ground materials have been
[07:32] improved on all three moons adding a
[07:35] more varied breakup of the materials on
[07:37] the ground the team is also close to
[07:40] wrapping up work on the landing pads
[07:42] that will go with the surface Outpost
[07:45] these landing pads will give the players
[07:47] a stable solid Landing point on what
[07:49] otherwise might be a rough
[07:51] Landing the surface of Delmar is getting
[07:54] its final polish with geometry and
[07:57] materials being updated and fine-tuned
[08:00] the surface is also getting an fx pass
[08:02] adding an extra layer of visual interest
[08:05] to the environment and atmosphere the
[08:08] area surrounding Lei will also have more
[08:10] areas of interest for players to explore
[08:13] in Lei final touches are being put into
[08:15] the Customs area all player traffic in
[08:18] and out of leski will have to go through
[08:20] this checkpoint so extra effort is being
[08:23] put into making visually interesting and
[08:26] ultimately hard for players to smuggle
[08:28] in unwanted Goods the work on the
[08:30] garages is close to done and ready to be
[08:32] included in the level once this work is
[08:35] completed players will be able to
[08:37] request a vehicle in the garage and go
[08:39] out and explore the Daryl Marsh surface
[08:42] the elevators in leki have also been
[08:44] updated with new models fitting the
[08:46] modular building set that we're using
[08:48] across the entire game the game
[08:50] programming team has been working on
[08:52] finishing up the remaining weapon
[08:54] features for 3.0 such as the rail gun
[08:57] cover animations delayed coils and
[09:00] delayed ads reticule they also completed
[09:03] the first iteration of the doors and air
[09:06] locks that we mentioned recently now the
[09:08] technical hooks for adding VFX and sound
[09:11] effects are being implemented and
[09:13] they'll be ready for the rest of the
[09:14] team to
[09:15] use with the help of other Engineers
[09:18] from both the UK and LA offices the
[09:21] technical design for the network code of
[09:23] the new weapon system is being fleshed
[09:25] out and the overall research phase is
[09:28] coming to an end the first test
[09:30] implementations will be started as soon
[09:33] as all other 3.0 3.0 tasks are completed
[09:37] cinematics is working with UK Graphics
[09:39] engineering to test out first working
[09:42] version of our brand new holographic
[09:44] projection volume entity Tech this piece
[09:47] of tech essentially provides a Target
[09:49] holographic volume with content fed from
[09:52] a source scene that gets rendered into
[09:54] the volume it would allow us to example
[09:57] have Larger than Life characters
[09:59] communicating via hologram with
[10:01] characters in a scene or have the holog
[10:03] globe switch to a scripted mode and show
[10:06] Mission briefings all in real time
[10:08] without resorting to things like
[10:10] pre-rendered Motion Graphics this Tech
[10:13] minus the holographic component will
[10:15] also be used to get comm's calls from
[10:17] other ships and their cockpits in real
[10:19] time such as the cockpit mfds or other
[10:23] displays as usual team has also made
[10:26] great progress across multiple chapters
[10:28] for squadron 42
[10:29] we look forward to showing things off in
[10:31] the near future the Frankfurt QA team
[10:34] started testing the new Sig data Patcher
[10:37] in May and testing has continued through
[10:39] into June Patcher testing is done daily
[10:42] as well as on the client editor and
[10:45] dedicated game server copied via Sig
[10:47] data Patcher our main goal is to make
[10:50] sure there are no differences between
[10:52] builds pulled via the new Patcher and
[10:53] builds pulled with our current internal
[10:56] build tool copy build 2 copy build 3 has
[10:59] also been rolled out to QA at the
[11:00] beginning of June and has been its QA
[11:03] testing phase in conjunction with Sig
[11:05] data Peter subsumption editor testing
[11:08] continues to be a regular part of their
[11:09] weekly task as new versions with new
[11:12] features become available QA Works
[11:15] closely with Tony Z and Franchesco Ruchi
[11:18] in order to ensure that each subsumption
[11:20] edit or release is free of anything that
[11:22] could pluck the development process they
[11:25] also spent a good portion of time
[11:27] testing multiplayer game play in the
[11:29] Staton system persistent universe level
[11:32] the system design team continue to
[11:35] expand the library of usables to be used
[11:37] for both the Pu and Squadron 42 the air
[11:40] traffic control is also making Headway
[11:43] and you should be able to experience
[11:44] this ing game fairly soon they started
[11:47] work on the FPS companion sluddy aai
[11:50] including all the orders you can give
[11:52] them and the behaviors needed for those
[11:54] orders to take effect the actor status
[11:57] system is being internally tested right
[12:00] now and is going through its final
[12:02] tweaking and balancing they've also put
[12:04] some finishing touches to the
[12:06] conversation system to allow our
[12:08] cinematics team to create the best
[12:10] experiences possible the weapons team
[12:13] blocked out numerous Universal grip and
[12:16] Optics attachments they're converting
[12:18] the older blocked out attachments to
[12:20] work with our new attachment rail system
[12:23] and doing a quick first pass to test
[12:25] them on the existing guns to see how
[12:27] well they work and if of the designs
[12:29] need to be adjusted they also completed
[12:32] the first pass blockout for the Clon
[12:34] verer demo which is a laser light
[12:37] machine gun for ship weapons they
[12:40] finished the preacher armaments
[12:41] Distortion size 4- six and upgrade
[12:44] levels 1 through three they also did a
[12:47] first pass blockout including rough
[12:49] animations for the Clausen verer laser
[12:51] repeater size 1 through three the
[12:53] neutron repeater S1 through S3 and the
[12:56] apocalypse arms ballistic scatter gun S1
[12:59] through
[13:01] S3 and to close out the update earlier
[13:04] this month a large amount of people from
[13:05] the office attended a local bar citizen
[13:08] here in Frankfurt good people good
[13:11] conversations it was a really fun time
[13:13] and we're glad they organized
[13:15] it that wraps up this month's update
[13:18] from Frankfurt we all really appreciate
[13:20] the support and feedback you give us we
[13:22] couldn't do this without you guys and
[13:25] we'll see you in the
[13:26] verse the VFX work on Planet
[13:29] environments it's it's really looking
[13:30] great yeah I know being able to see your
[13:32] Footsteps in the snow or having your
[13:34] vehicle kick up dust while speeding
[13:35] across the desert are those little
[13:37] details will make you believe that
[13:38] you're really in those environments and
[13:40] be much more immersive you know me I
[13:42] love immersive yeah yeah we do another
[13:44] way you'll be experiencing these
[13:45] environments is from the seat of aox
[13:47] although the concept sale begins
[13:49] tomorrow we've got a special ship shape
[13:51] today to give you a sneak peek at this
[13:53] new open canopy racer
[14:02] hi my name is Chris Smith and I'm the
[14:03] elite vehicle artist in the ATX office
[14:06] I'm currently working on the Knox bike
[14:08] which is a xan bike made by AOA has xan
[14:12] technology involved much like the Scout
[14:14] and it's you know a very stylish bike
[14:17] and it's supposed to sort of compete
[14:18] with the dragonfly well the dragonfly
[14:20] was made you know with a lot of sort of
[14:22] exploring and scouting in mind I think
[14:25] this bike on the other hand is a little
[14:27] bit more purposed towards either racing
[14:29] or combat but it's going to be very fast
[14:31] and Nimble uh and it's going to be
[14:33] powerful in combat the concept was uh
[14:35] provided from England this time it was
[14:37] only a 2d concept though uh usually here
[14:41] uh we we start with 3D Concepts for this
[14:44] bike though we didn't really have too
[14:45] much time uh for that concept initial
[14:47] concept phase it was worked out in a
[14:50] fairly quick Manner and only on 2D so
[14:52] this was a bike that I got to actually
[14:54] built from the ground up literally the
[14:56] first poly you know from the ground up
[14:58] which was was quite enjoyable so
[15:00] building the xan bike wasn't terribly
[15:03] challenging cuz we used the xan
[15:04] technology which uses magnet technology
[15:07] and it kind of made connecting points a
[15:09] little bit easier so we decided to have
[15:11] like the Nels floating and they're
[15:13] connected by magnetism and the
[15:15] handlebars the same way and sort of the
[15:18] plates slide along we try to infuse a
[15:20] lot of style of the xon technology in
[15:22] there and use like a mix between sort of
[15:25] like heavy metals and and exotic
[15:27] materials the main challenge was to make
[15:30] sure that uh we sort of Nathan dearle
[15:34] helped in the concepting it with Gary
[15:37] Sanchez he told me that he really wanted
[15:40] to like from afar look like like this
[15:42] little monolithic sort of simplified
[15:44] thing like sort of ominous looking uh
[15:48] shape from a distance and then when you
[15:49] get closer you know it reveals more
[15:51] detail the main challenge was to kind of
[15:54] get that feeling across and and make
[15:56] sure I hit that the xon technology the
[15:58] skin of the the bike is definitely going
[16:00] to be an armored type the the rider
[16:02] itself is protected by the bike when he
[16:04] gets on it has these sort of shells that
[16:06] come up above his back so the rider has
[16:08] a little bit more protection you know
[16:10] from behind the main thing that sets xan
[16:12] technology apart from like let's say RSI
[16:16] or uh agis would be the rider has a much
[16:19] more aggressive stance on the bike than
[16:21] on the dragonfly so the dragonfly is
[16:23] more the upright stance right this xan
[16:25] bike has like a race bike type stance so
[16:27] you're forward leaning it's it's more
[16:29] racer type uh your legs are back that
[16:32] gives that gives a little bit more uh
[16:34] maneuverability and then also that way
[16:36] you can kind of get a little shell and a
[16:38] little bit more protection over the guy
[16:40] so I mean it's still open on the sides
[16:41] and everything but you just get like a
[16:43] little extra protection from those
[16:45] shells in the back the xan bike uh is
[16:48] actually going to use a holographic Hood
[16:50] system in order to try to streamline
[16:52] everything and make it technologically
[16:54] advanced we try to minimize the amount
[16:57] of screens as much as possible once you
[16:59] get on the bike and initially there's
[17:00] not going to be any screens there
[17:02] there's one little screen by you and
[17:04] right in front of you but that's sort of
[17:06] flat and that comes up a little bit but
[17:08] everything else will like come up as a
[17:10] holographic image in front of you which
[17:12] looks really cool and the startup
[17:14] sequence is pretty neat hi uh I'm
[17:16] Patrick solerno technical artist at
[17:19] Cloud imperum games um I focus on mainly
[17:23] destruction systems and optimization for
[17:26] the
[17:27] spaceships uh functionality to
[17:29] at the end I make things sure things
[17:30] work but um I kind of have a checklist
[17:32] of things that I go through when I'm
[17:34] doing the spaceships uh it's like the
[17:37] there's a couple Tech art passes that
[17:39] the ships go through uh in particular
[17:40] we'll be talking about the KNX today and
[17:42] the setup that went into that and if it
[17:45] differs from any other ships that I've
[17:46] worked on most of the ships that you see
[17:48] in game I've probably touched in terms
[17:50] of either lighting or particles or
[17:52] damage or something um during some point
[17:55] in the process I get the model from the
[17:57] artist he's like it's done you know and
[17:59] before this we've talked about how it's
[18:00] going to break off which pieces are
[18:02] going to break off of where sometimes
[18:04] there's small changes down the process
[18:05] we're like oh those intakes or those
[18:07] weapon racks might be able to break off
[18:08] you know we can add a little bit more
[18:10] detail or gameplay so I'm working with
[18:12] design I'm working with art and we're
[18:14] trying to make sure that by the time I
[18:17] get it there's really no back and forth
[18:19] you know like I don't have to go oh Mr
[18:20] artist guy there's something you have to
[18:21] do here so I take it from there and what
[18:24] I do is if we're looking at this ship
[18:25] here I will look at it in Max and I'll
[18:28] break it apart
[18:29] and we'll say okay so if the nose comes
[18:32] off from the front of the ship then it
[18:34] has to detach and fly off how do we do
[18:37] that how do we make all those pieces
[18:38] work together and look good well for
[18:41] that I usually hop into the XML from
[18:44] there so before even working on like the
[18:46] art side of it like making the metal
[18:48] wear and stuff I have to work on the
[18:49] functionality side where the debris
[18:51] happens so shoot the ship and it
[18:53] explodes the pieces have to fly off in
[18:55] certain directions those are called
[18:57] vectors those are impulse pules right
[18:59] you know boom Ship Happens it explodes
[19:02] now what happens is I'm kind of tying in
[19:04] multiple effects together at the same
[19:05] time I'm saying I have particles to work
[19:07] with when I'm shooting the ship so all
[19:10] these little green squares you see here
[19:11] are kind of uh what are called helpers
[19:14] in Max and uh helpers are all these
[19:16] little green squares you see and they
[19:17] can serve a bunch of different purposes
[19:19] for we want to use them for uh for my
[19:22] particular purpose I use them like C4
[19:24] charges like little explosives uh that
[19:26] will happen and what they'll do is
[19:28] they'll burst in say a radius and I'll
[19:30] set the radius in my list and on the
[19:32] name of it and that gets put into the
[19:34] XML and from there I then update the
[19:37] ship and I shoot the ship and I can test
[19:39] my new particles so it's a bit of back
[19:40] and forth right you know you want to go
[19:41] in shoot it see what happens check your
[19:44] particles check your fire you know make
[19:46] sure everything looks all right if the
[19:47] modelers put in specific uh things like
[19:50] wires and girds and stuff and tubes you
[19:53] know you want to take that into account
[19:54] when you're putting down a particle now
[19:56] mind you I don't necessarily make the
[19:57] libraries and uh I go in and I'll pick
[19:59] from say you know lowtech high-tech
[20:02] chanch Vandal Tech type you know uh
[20:05] particle libraries so luckily these guys
[20:07] had a cool one they're kind of like high
[20:09] energy blue alien Tech so I had a lot of
[20:11] fun with that um just sort of like
[20:14] shooting and testing it so once I get
[20:16] the debris flying off let's move on the
[20:17] next phase I set up what's called the UV
[20:21] 2s and the Damage map right that that is
[20:23] our system where the ship actually melts
[20:26] and wears now when we do this system we
[20:29] have to take into account um the
[20:31] underlying surface detail it's very
[20:34] important so the modelers will actually
[20:35] model gerter and underlying stuff and
[20:38] there's two types of underlying sort of
[20:40] surface detail there's 2D and 3D go uh
[20:44] 2dg is like this it's called a palm
[20:46] Parallax seclusion map it's this one
[20:47] polygon that goes under the surface of
[20:49] the hole no matter what it shape is and
[20:51] when you shoot the ship and it melts
[20:53] you'll end up seeing that underlying
[20:56] sort of metal or girds or wires or
[20:57] whatever is not actually like you know
[20:59] it's supposed to be there so you don't
[21:00] see through the ship polygons are only
[21:02] one-sided right so light hits it that's
[21:04] it but if you're looking at the other
[21:05] side you can see right through so uh we
[21:08] take that into account so for that to
[21:10] work the ships need two UV sets and in
[21:13] case you're not sure what UV set is a UV
[21:15] set is what Maps your texture so like
[21:17] the wood on this surface or some kind of
[21:20] other uh wear like thing so UV 1's are
[21:23] for your ship texture and UV 2s are for
[21:25] the procedural damage map um once we
[21:28] start shooting that everything kind of
[21:30] works in conjunction so I have my
[21:32] initial debris with the pieces flying
[21:34] off and the breakability activating the
[21:37] particles which then set off say fire
[21:39] smoke electricity then spins off and
[21:42] then Fades out now after I'm done with
[21:44] all the you know fun creative stuff you
[21:46] know there's the making sure things work
[21:49] and is optimized and runs well uh
[21:51] there's also another layer to that when
[21:53] you're doing the Shader damage and it's
[21:54] doing the melty effect and it's trying
[21:56] to show the underlying stuff we use what
[21:58] are called vertex colors on the ship and
[22:01] vertex colors are basically every
[22:02] verticy a polygon is made of these
[22:04] little points points of vertices each
[22:06] one can hold data uh we use that color
[22:09] data to tell the map that it can be
[22:12] transparent or not so um what I do is
[22:16] I'll go in and all these different
[22:17] colors mean just a slightly different
[22:19] level of damage right so say for example
[22:21] there's really no damage under the nose
[22:23] right but I still want it to show the
[22:24] uv2 dam still looks like it's getting
[22:26] dented and worn right I can set it to a
[22:28] certain color that can block the punch
[22:31] through of the damage that means you
[22:33] might not be able to see the underside
[22:34] of the ship now for somewhere in the
[22:36] back I can do it a little differently
[22:38] where I can layer the damage so if
[22:41] there's really nothing under here I can
[22:42] set that you can't punch through but you
[22:44] can slowly Whittle through different
[22:46] areas of the ship um then I just go
[22:49] through and I kind of layer that across
[22:50] the ship and create levels of damage it
[22:54] creates a little bit more Randomness
[22:55] when you're firing at it some areas will
[22:57] get huge hole throughs and other areas
[23:00] might look like they're just wearing a
[23:01] bit harder so yeah but after I have all
[23:05] that set up I kind of work on the lights
[23:07] right I want to make sure that lighting
[23:08] Works uh most of the time lights are set
[23:10] up by the artists themselves uh the ones
[23:12] who are doing the ship or the lighting
[23:14] artists um so if there are no lights set
[23:18] up which I was lucky enough to have at
[23:19] the time with this uh I had a little
[23:21] back and forth with Chris Smith about it
[23:22] and he polished it off but um basically
[23:24] I got to set up some of the lights on
[23:26] this ship and this was kind of fun
[23:27] because as an alien ship the theme was
[23:30] more of a high-tech sort of vibe most of
[23:32] our ships have more traditional Fire
[23:34] spark smoke etc etc so uh luckily there
[23:38] were Shen libraries and some Hightech
[23:39] libraries I got to play with for this
[23:41] ship and when I was shooting it
[23:43] different weapons have different effects
[23:45] we shoot this we see we get a sort of
[23:47] melty burny wear if we pull out a rifle
[23:50] we get bullets now the bullets can
[23:52] actually sort of tear a hole in the ship
[23:54] which is fun boom and then change the
[23:56] lighting conditions fire smoke etc etc
[23:59] so at the end that's how all the pieces
[24:01] come together right the process takes a
[24:03] bit longer than that but uh at the end
[24:05] it's pretty fun and just sort of picking
[24:08] which pieces explode and killing the
[24:10] ship and I mean it's important to take
[24:12] in account the functionality ship when
[24:14] deciding how it's going to be destroyed
[24:16] like you know with this guy there were
[24:18] really only two or three pieces you
[24:19] could blow off like nose sort of the
[24:21] seat area and the tail so how do you how
[24:24] do you make that look different every
[24:25] time you want to blow up the ship you
[24:27] know I I don't really like it when
[24:29] damage always looks the same so my goal
[24:31] is to add sort of Randomness and variety
[24:33] to it uh one more cool thing that I have
[24:36] is to show is this new debug gun we have
[24:39] for testing the damage normally I shoot
[24:40] it right I use different weapon types to
[24:42] see what happened if you're going across
[24:43] a ship but we have this thing called a
[24:45] damage gun now for debugging our
[24:48] materials and see all I have to do is
[24:52] kind of look at the ship now this
[24:54] doesn't help me with actually blowing
[24:55] off pieces of the ship that still
[24:57] doesn't quite work but but uh that's
[24:58] where I shoot the ship with an actual
[25:00] gun but you can see I can test out my
[25:02] damage map which you can see up here in
[25:04] the corner then that wears away this is
[25:07] what I was talking about with the
[25:08] transparency you can see slowly eats
[25:12] away at the ship so if there's really
[25:14] nothing under there I don't want to
[25:15] actually expose that to the player right
[25:17] so I just I do the vertex colors that
[25:19] you see over here to block off certain
[25:22] areas like this has a lot of vertex
[25:24] colors there's not much going on but um
[25:26] I'd say that's pretty much it and then I
[25:28] just I test it all and I bring it all
[25:30] together and I give it polish and then I
[25:31] hand it off to the final people for
[25:33] functionality and testing working on the
[25:35] xan bike was actually pretty neat
[25:37] because it was the first non ship that I
[25:39] got to build for this company I did use
[25:41] bike references for some of the details
[25:44] like you know engine details because the
[25:46] Gian sort of has like a naked bottom
[25:48] it's not totally covered you know so it
[25:50] shows some of the mechanics and stuff so
[25:52] I definitely use some real life
[25:53] motorcycle reference from that and I'm
[25:55] into motorcycles so I was very glad this
[25:57] F in my lap it's very sexy so I had a
[25:59] lot of fun working on it
[26:08] [Applause]
[26:12] [Music]
[26:22] [Music]
[26:27] [Music]
[26:42] [Music]
[26:46] as Chris Smith mentioned building the
[26:48] nox was made easier because the apoa
[26:50] ship pipeline was already established
[26:52] having such systems in place are key to
[26:54] reducing development times going forward
[26:55] yeah especially when building a game of
[26:57] such size and scope scope another
[26:59] example of the solid a tool we've
[27:00] created to make building solar systems
[27:03] easier yeah that's right cry engine as
[27:06] you all know was not meant to handle
[27:07] game with the maps the size of an entire
[27:09] solar system let alone even 10 or 20
[27:12] kilometers across so it made placing
[27:14] objects difficult and time consuming uh
[27:17] so now let's take a look at what it
[27:18] takes to build a solar system from
[27:21] scratch I'm Luke Presley I'm lead
[27:23] designer on Star Citizen live hello I'm
[27:26] uh Sher hyberg I'm the archist here cig
[27:28] I'm Dave hack I'm the lead writer over
[27:30] at C recently I was on a Bren uh con
[27:35] panel and I got asked is there any
[27:37] unsunk heroes in the um Star Citizen
[27:40] Tech things that aren't flashy enough to
[27:43] get their own kind of featurettes or
[27:45] anything but which make our lives
[27:47] possible kind of thing we're building a
[27:49] solar system um well we're building a
[27:52] Galaxy so how do we build a solar system
[27:55] we recently got a new tool called the
[27:58] the solar system Ed or Sol Ed as we call
[28:01] it it was something that was kind of we
[28:03] we made the brief here and then Sasha
[28:06] hober in Germany um actually built of a
[28:08] tool what it allows us to do is um well
[28:12] build a solar system build a hierarchy I
[28:15] bring in a sun and then I give it
[28:17] children which of the planets then I
[28:19] give those children which of the moons
[28:21] and then I can give those children which
[28:22] are you know satellites and I can very
[28:25] easily give them an orbital distance and
[28:27] just have you know created the the whole
[28:30] thing in a matter of minutes and that
[28:32] sounds really simple it sounds like
[28:35] something we should have been able to do
[28:36] from day one when we
[28:38] started uh getting close to the the
[28:40] deadline for the star map we had to do a
[28:42] kind of heavy internal push to generate
[28:45] a lot of uh of of star systems we were
[28:48] sort of
[28:49] thinking you know oh this would be cool
[28:51] to have a system like this and it would
[28:53] be cool to have a star like this and you
[28:54] know astronomy virtually every day
[28:56] you're finding new cool stuff that's
[28:58] happening so it's we were trying to get
[29:00] as much of that stuff in there we were
[29:01] sort of faced with this thing of like
[29:03] well we should probably see cuz there's
[29:05] such an emphasis on like realism and
[29:07] while it may not be entirely accurate
[29:09] like plausible I think was sort of the
[29:12] term when we were building Crusader for
[29:15] instance for 2.0 what we'd have to do is
[29:17] we'd bring in Crusader and we'd set that
[29:19] down at the origin which is 0000 0 in
[29:23] the XY Z and then we'd bring in a moon
[29:25] and that' be on 0000 as well to get it
[29:27] to the right orbital distance we'd have
[29:29] to move it in either just the x or just
[29:31] the Y away from the planet and that's in
[29:33] meters as well so you can imagine how
[29:36] many meters away of a moon is from a
[29:38] planet and then obviously if you've got
[29:40] three of these moons um you don't want
[29:42] them all at 90° from the planet so that
[29:45] means you've got to add some rotation on
[29:47] which means what we had to do was like
[29:49] we' put down another object in the
[29:51] middle of um Crusader at the origin and
[29:54] we'd physically link it to the moon and
[29:56] then we'd start twisting that would move
[29:58] the moon around too and you wouldn't be
[30:00] able to see it because it'd be too far
[30:02] away and the moment you've moved it off
[30:04] of like pure Zed or pure pure X or pure
[30:07] y sorry um You've Lost That one one pure
[30:10] number it becomes some two numbers that
[30:13] you have to do maths on to figure out so
[30:15] it's not it wasn't allowing us to be
[30:17] able to change this in future imagine if
[30:19] a scale changed um we just have to start
[30:22] again what the solid allows us to do is
[30:25] you know if we change the Scale of the
[30:27] Universe we just scale down the numbers
[30:29] for uh the orbit orbital distance away
[30:32] from its parent like in a matter of
[30:33] minutes you would have a rescaled solar
[30:36] system we try our best to make things as
[30:38] accurate as possible but still respect
[30:40] the need for the players to actually
[30:42] enjoy what we have we got a bunch of
[30:44] astrophysicists the writers gave them
[30:47] the brief for reach of these solar
[30:48] systems they went away and came back
[30:50] with a spreadsheet that has an
[30:52] unbelievable amount of data in there
[30:54] more than we could ever use there's a
[30:55] service that actually U Collective of
[30:58] scientists and researchers and stuff
[31:00] like that who basically volunteer their
[31:01] time to screenwriters video games stuff
[31:03] like that uh you can contact them and
[31:05] they basically will put you in touch
[31:06] with an expert yeah he was an
[31:07] astrophysicist who had served as a
[31:09] consultant on other properties before we
[31:12] learned about star types and green bands
[31:15] and how long it takes to evolve life and
[31:17] the density of asteroid belts and we
[31:19] basically got a crash course on how to
[31:21] build a system from scratch if you're
[31:23] not a scientist they went to town on
[31:25] this so the the list that basically Sher
[31:28] worked with them on was like everything
[31:29] from the size of the the system itself
[31:32] to where's the green band start where
[31:34] does it stop where's the frostline start
[31:35] daily rotations orbital rotations
[31:38] parhelion I mean I'm going to throw out
[31:40] terms that I don't know what they mean
[31:41] but like you know the uh odd orbital
[31:45] patterns you know inclination de all
[31:48] this stuff we kind of just take for now
[31:51] the the size and the distance from uh
[31:54] the orbital distance from its parent but
[31:56] obviously um things like the density
[31:58] will affect the gravity of the thing
[32:01] eventually it even goes into details
[32:03] like how the mass of a asteroid ring so
[32:08] if you took all the asteroids and
[32:10] combine them together what the mass of
[32:12] that would be it's extremely detailed
[32:14] and these guys know what they're talking
[32:15] about so our solar systems are going to
[32:17] be extremely like realistic obviously we
[32:22] scale it to keep it you know a a
[32:24] playable because you know no one
[32:26] actually wants to drive around around
[32:28] the Earth but also like you know to keep
[32:31] the tech um working like we we can't
[32:34] make any Planet say biger than Earth
[32:36] right now so that means we have to bring
[32:38] everything slightly in so that we can do
[32:41] these super um super Earths like arore
[32:44] they were able to build the systems with
[32:45] respect to orbit they didn't want to
[32:47] cause like a bad orbital orbital
[32:49] resonance situation so the planets were
[32:52] a certain amount of au apart and in a
[32:54] certain position so that the orbits
[32:56] wouldn't fling planets out of the system
[32:58] so an au is an astronomical unit it's a
[33:01] standard unit of measurement used in
[33:02] astronomy astrophysics and it's the
[33:04] distance between the Earth and the Sun
[33:07] it's used so that you can easily
[33:09] communicate vast distances in solar
[33:11] systems our solar system for example is
[33:13] around 50 Au if you include the orc
[33:16] cloud and Pluto and all of that uh it's
[33:20] basically so you don't have to say
[33:22] something like this system is
[33:25] 575 trillion 8 9
[33:28] b473 km it'll factor in based on what
[33:32] our our time dilation system is like how
[33:35] long a day is in the game whether it's
[33:38] that's at of scale because it might
[33:40] actually in a weird way I I don't know
[33:41] about the formula but it might actually
[33:42] balance out that basically if like if if
[33:45] the time was running at a tenth of this
[33:47] or 90% faster or whatever then it would
[33:50] equal out the distance traveled would
[33:53] make sense you know if you scale it back
[33:55] to normal time I think it was almost a
[33:57] year trying to get uh all the numbers in
[33:59] and we went through many processes of
[34:01] going back and checking to see whether
[34:03] or not the numbers that they gave us
[34:05] reflected consistently with the lore we
[34:07] had given whenever we had questions
[34:08] about stuff that we wanted to make real
[34:10] but couldn't we would talk to the
[34:11] astrophysicists and they would usually
[34:12] give us good ideas there are some things
[34:15] that we weren't able to keep entirely
[34:17] real like um asteroid belts for example
[34:19] in real life asteroid belts the distance
[34:21] between asteroids is so vast that it
[34:23] wouldn't pose an issue or an obstacle to
[34:25] any kind of race for example you would
[34:27] just Mose on through it it would just be
[34:29] like going through regular space
[34:31] asteroid belts in our game are denser
[34:33] it's not like real life but it's a lot
[34:34] more fun and also we would have
[34:36] situations where they would say Hey you
[34:38] know um what you have presented in the
[34:41] lore is not possible you know but what
[34:46] you can do is if you change this this
[34:48] and this you know it's a minimal rcon
[34:51] for the backer's perspective but it will
[34:53] kind of pull it into scientific
[34:55] feasibility which was sort of the middle
[34:58] ground we kind of aim for but the thing
[35:00] we also learned was that space could be
[35:01] crazy you know oh this can't happen and
[35:03] then a week later something would come
[35:05] out in the you know NASA or something be
[35:07] like oh by the way there's a diamond
[35:09] planet and we're like yeah there's a
[35:11] diamond planet there's a planet where it
[35:12] rains glass there's a stellar Cloud
[35:15] that's supposed to taste like raspberry
[35:16] schnap Space is really weird it's a gas
[35:19] giant that's the color of coal like pure
[35:22] pitch black that we stole yeah we
[35:24] definitely stole that yeah space be
[35:26] crazy the things with placing with um
[35:29] the solid um are obviously right now the
[35:32] the uh procedural planets Crusader will
[35:35] be um a different entity because it's a
[35:37] gas giant it'll be a gas giant entity
[35:39] that um we've not got the tech for yet
[35:42] but we'll have an amazing Shader that
[35:44] goes goes around it and creates creates
[35:46] these wisps and and these eyes and
[35:49] storms obviously we can also as I said
[35:51] before plan um put satellites going
[35:54] around and things like that we also
[35:56] placed for the asteroid uh ring around
[35:59] the solar system with it they are
[36:01] building the systems on a on10th scale
[36:03] so for example if we have a system
[36:06] that's 200 Au in our notes it comes out
[36:10] as 20 Au in the uh the system that the
[36:13] designers are building so that like
[36:15] number one it can it's a lot more fun
[36:17] for the players this way because systems
[36:19] that if we had like a 200 Au system it
[36:22] would take I don't know years for the
[36:23] players to get across it even it's just
[36:25] such a such ridiculous amount of time
[36:27] it's an inedible distance so we needed
[36:29] to scale it down so that number one it
[36:31] would be fun for the players and number
[36:33] two that we could build the whole thing
[36:35] and seamlessly within our engine Quantum
[36:37] travel is is kind of locked at around
[36:40] on10th the speed of light so you know
[36:42] even at that you know it's going to take
[36:44] a really long time yeah to fly from
[36:47] place to place so with real long haul
[36:49] travel things it's going to take I won't
[36:51] say where the example took place but
[36:53] there was a situation where something
[36:55] was going to be traveling in Quantum
[36:56] travel for 20 minutes so you know break
[37:00] out your cards and load up your Netflix
[37:02] queue while you're in Quantum travel you
[37:03] could get up out of your chair I mean
[37:05] considering you have a multi Cru ship
[37:06] you would get up out of your chair and
[37:07] stuff like that and if something yanked
[37:08] you out of it then you would have to you
[37:10] know run back and it's also the thing
[37:11] it's like Quantum travel travel the idea
[37:13] was that Quantum travel only moves in
[37:14] straight lines the reason why you don't
[37:16] your body doesn't liquefy is that
[37:18] there's a sort of anti-grav bubble
[37:20] around you but because you're moving in
[37:21] a in a straight line you know you're not
[37:23] getting that sort of the intense
[37:25] pressure but if you were to turn
[37:26] suddenly you go flying against the wall
[37:28] at one tenen the speed of light which
[37:30] probably hurt yeah yeah might might hurt
[37:32] a
[37:33] little a little bit it feels like this
[37:35] sort of adherence to you know again even
[37:38] at like a on10th scale I mean in 30 I
[37:40] mean we're starting off with the moons
[37:41] the moons of of Crusader and I mean
[37:44] they're huge you know it takes 15 hours
[37:46] to drive it like around once the
[37:50] interesting balance is going to be um
[37:53] how do we achieve this sort of like the
[37:55] the crafted experience with the the
[37:58] massive scale like that sort of vast
[38:00] openness but still feel like there's you
[38:03] know that there's interesting flavors to
[38:05] all the places you go My Hope Is that
[38:07] the players will see the numbers that we
[38:10] have generated for them the care that
[38:12] we've put into designing the systems and
[38:14] we'll know that they have all this
[38:15] information at their fingertips and know
[38:17] how real we want the systems to be for
[38:19] them we would never be able to
[38:22] create let one solar system let alone
[38:25] you know the hundreds of solar systems
[38:27] we're going to be able to we're going to
[38:28] have to make if it wasn't for this tool
[38:30] you you can imagine like the the amount
[38:32] of hours it would take to to hand move
[38:35] these out because the cry engine was
[38:37] never built to do this you know again I
[38:40] say it's it sounds extremely simple and
[38:42] it is a simple tool
[38:44] but it wasn't there out the
[38:47] box so an incredible amount of work went
[38:49] into coming up with over 100 systems and
[38:52] scientifically vetting them but now we
[38:53] have all the information it makes it
[38:55] easier to build them in solid yeah for
[38:56] example the the Stanton system which
[38:58] we're currently building out is just
[39:00] over 800 million km across even after
[39:03] scaling it down by a factor of 10 yeah
[39:05] that's pretty amazing at a distance um
[39:08] so anyway that's it for today's ATV
[39:10] thanks to all our subscribers for
[39:11] helping us make shows like this each
[39:12] week yes and thank you to all of our
[39:14] backers we really couldn't do this
[39:16] without you oh and if you're as excited
[39:17] as I am to hop on a nox and speed across
[39:20] a planet don't forget to check out the
[39:21] concept sale tomorrow yeah definitely
[39:24] check it out so until next week we'll
[39:26] see you
[39:28] around the ver
[39:38] [Music]
[40:02] thank you for watching so if you want to
[40:04] keep up with the latest and greatest and
[40:05] staff citizen of Squadron 42 development
[40:07] please follow us on our social media
[40:09] channels see you soon
[40:17] [Music]

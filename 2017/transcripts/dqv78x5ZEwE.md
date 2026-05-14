# Star Citizen: Around the Verse - Javelin: The UEE's Destroyer

**Video:** https://www.youtube.com/watch?v=dqv78x5ZEwE
**Date:** 2017-04-14
**Duration:** 26:46

## Transcript

[00:16] hello and welcome to around the verse
[00:18] our weekly look at the development of
[00:20] Star Citizen I'm Sandy Gardner and
[00:22] joining me today is farest stepan
[00:24] welcome back to the show hey it's great
[00:25] to be here Sandy there's so much
[00:27] happening at Star Citizen it's good to
[00:29] be here sharing it all with the
[00:30] community I've heard there's something
[00:32] new going on with the referral program
[00:34] is that true yes it is true for those
[00:37] that haven't heard the referral program
[00:39] rewards anyone who gets a friend to
[00:41] download Star Citizen using their unique
[00:43] referral code soon we'll be adding new
[00:46] levels to the reward lad and if you
[00:48] already have the points for the new
[00:50] levels uh will you still get the new
[00:52] rewards yes you will as they'll be given
[00:55] retroactively but what I'm excited about
[00:57] is the new referral competition that
[00:59] we're going to launch at the same time
[01:01] as the updated referral program I don't
[01:03] want to spoil the official announcement
[01:05] but all I can say is pink dragonfly W
[01:08] that is pretty sweet uh I love the
[01:09] dragonfly and also love pink not a lot
[01:12] of ships can operate both Planet Side
[01:14] and in space and with a holiday this
[01:16] weekend we're actually holding a sale
[01:18] that includes the dragonfly and three
[01:19] other mini ships the Merlin Archimedes
[01:22] and Argo and we're having a free flly
[01:24] this weekend so if you've been thinking
[01:26] about playing Star Citizen you can try
[01:28] out the Super Hornet for free both
[01:31] offers start tomorrow and end on Tuesday
[01:34] we also have an exciting bit of news to
[01:36] share tomorrow this 3.0 production
[01:38] schedule will be released there will be
[01:40] some great new features that Chris will
[01:41] go over in the newsletter we have a
[01:43] great piece coming up in today's show
[01:45] we're taking a look at the agis Javelin
[01:47] in a brand new ship shape that's right
[01:50] but first let's go to the UK for their
[01:52] Studio
[01:53] update hi everyone I'm Aon Roberts and
[01:56] welcome back once again for the UK
[01:57] Studios update I'm actually visiting our
[02:00] La studio today so these surroundings
[02:02] may be familiar to many of you anyway
[02:04] back to our update on what we've been up
[02:05] to over in the UK as always things are
[02:07] really busy there and we're in the
[02:09] middle of a large number of Sprints for
[02:11] both Squadron 42 and Star Citizen so
[02:13] let's start with the technical Sprints
[02:14] from the programming Department the
[02:16] player interaction Sprint is proceeding
[02:18] at full speed we now have subobjects
[02:21] highlighting so now rather than
[02:22] outlining a whole mesh we can choose
[02:24] individual Parts this is especially
[02:26] useful in cockpits when you want to
[02:28] interact with individual buttons and
[02:30] switches a new placement system has also
[02:33] come online so you can choose where and
[02:35] with what orientation you set down
[02:37] [Music]
[02:49] objects if the position you want to
[02:51] place an object is out of range we now
[02:53] automatically go into a frow state
[02:56] finally we've been spending time making
[02:58] sure the new interaction system works
[02:59] seamlessly with the multifunction
[03:01] displays the player status system has
[03:04] also been worked on we are adding
[03:06] different active states such as jumping
[03:07] or vating and mantling to the player
[03:09] finds it harder or even impossible
[03:11] depending on how fatigued they are we
[03:14] have added in the mass of the of the of
[03:16] the suits and weapons to influence the
[03:17] player stamina as well as creating a
[03:19] breathing State component to bring
[03:22] together the player status with the
[03:23] procedural breathing animation and sound
[03:26] we are now starting work on new gameplay
[03:28] elements like soup punctures oxygen
[03:31] recharging and
[03:33] depressurization we've also invested
[03:35] time in the conversation system Tech
[03:36] creating a tool to help simplify setting
[03:38] up complicated conversations when you
[03:40] got multiple actors all part of the same
[03:42] scene moving on to our UI team the
[03:45] frontend skeleton framework for kios
[03:47] shopping has started this includes
[03:49] properly setting up all our UI
[03:51] components such as lists grids buttons
[03:54] text fields and other various assets
[03:57] once this is done the engineers will
[03:58] bring it to Life by hook looking these
[04:00] components up to the game data and
[04:01] getting it presented diagetic in the
[04:04] game World we're also working in
[04:06] conjunction with the player interaction
[04:07] system to unify the way the players will
[04:09] interact with in-game UI screens across
[04:11] the board in order to achieve
[04:13] consistency in our user
[04:15] experience this means the same
[04:17] underlying system to interact with an
[04:19] MFD in a ship seat will be applied to
[04:21] all- in-game terminals wall mounted
[04:23] displays and kiosks making interaction
[04:25] with in-game displays feel much less
[04:27] clunky and constrictive in anticipation
[04:30] of the graphics team work on the new
[04:32] render to texture Tech the UI team has
[04:35] done a round of testing using our
[04:36] current helmet Interiors to see how well
[04:38] the UI could look rendered onto a glass
[04:41] surface on the interior as opposed to
[04:43] our current solution the new rtt tech
[04:45] will eventually allow the UI to render
[04:47] properly in the rendering pipeline
[04:49] making it feel much more integrated with
[04:51] the game world than if it than it is
[04:54] currently what we're mainly checking for
[04:56] at this point is how well a text will
[04:57] read at various sizes as well as any
[04:59] post-processing knock on that might
[05:01] potentially negatively impact the
[05:02] legibility of the UI such as motion blur
[05:05] or chromatic
[05:07] aberration another thing we're watching
[05:09] out for is what kind of impact the new
[05:11] incoming Dynamic field of view system
[05:12] might have on the UI the new Dynamic
[05:15] field of view system will allow such
[05:17] things like the hood and 3D helmet
[05:18] interior to remain roughly the same size
[05:20] on screen when setting a lower or higher
[05:22] field of view the audio team has been
[05:25] involved in all gameplay features like
[05:26] the buccaneer surface Outpost Squadron
[05:29] level development and the active status
[05:32] system work has continued on the audio
[05:34] propagation system to make audio respect
[05:36] walls doors and paths our current system
[05:40] just has audio triggers playing from
[05:41] their point of origin and either being
[05:43] occluded or unoccluded but always
[05:45] playing from their Source position the
[05:47] new propagation system will mean that a
[05:49] sound playing inside the room will
[05:51] appear to anyone listening from outside
[05:53] the room to emit from the door a window
[05:55] or any other opening this extends to
[05:57] other rooms so a sound playing for rooms
[05:59] away will navigate the doorway and the
[06:01] area in between in order to reach the
[06:05] listener also the first and second pass
[06:07] of the mix management system has been
[06:10] completed this is a virtual mixing
[06:12] console that can be applied to certain
[06:14] areas or rooms it allows the creation of
[06:17] mixed snapshots that can apply volume
[06:19] filter or effect settings on any parts
[06:21] of the audio mix with Fades and data
[06:23] Forge that can be tweaked in real time
[06:25] setting up and organizing these areas
[06:27] and mixed snapshots will allow for easy
[06:29] adjustment of the audio
[06:31] mix finally a lot of progress has been
[06:33] made on the wordup dialogue tool to
[06:36] manage the huge amount of spoken lines
[06:37] in the Pu in the Pu and s42 Charlie
[06:41] points
[06:43] last bastards took Charlie the concept
[06:46] team has been working on finishing off
[06:47] the Gemini ballistic shotgun and a new
[06:49] ship weapon manufacturer known as
[06:52] preacher in terms of the environments
[06:54] and structures work has been continued
[06:56] on the truck stop Interiors satellite
[06:58] Interiors microt new Babbage and
[07:00] dressing for the modular habitation
[07:02] modules the environment team has been
[07:05] refining the surface Outpost with
[07:07] technical engineering and habitation
[07:08] spaces coming together with their
[07:10] preliminarily dressing
[07:12] passes the exteriors are now mostly
[07:14] complete we are also looking into
[07:16] lighting variations for the procedure
[07:18] system to add more complex setups for
[07:20] the lighting States the gray box for the
[07:22] truck stop space station is continuing
[07:24] and now all the building set pieces have
[07:26] been established and we are now in the
[07:27] detail phase
[07:29] [Music]
[07:31] on the satellite Sprint the
[07:32] communication archetype is close to
[07:33] being white box complete which mean the
[07:36] modules and classifications that were
[07:37] specified by Design have been visually
[07:40] explored our ship team has been
[07:42] continuing work on the hul SE and
[07:43] reclaimer as well as including the new
[07:45] light controller
[07:53] [Music]
[07:58] work
[08:01] [Music]
[08:08] [Music]
[08:27] [Music]
[08:28] e
[08:45] [Music]
[08:53] [Music]
[09:08] [Music]
[09:10] we have a big update from the VFX team
[09:11] this week on the ship VFX side the Drake
[09:14] Buccaneer is now in 2.6.3 and it's
[09:16] flight ready also more work has gone
[09:18] into the RSI con Aila during this flight
[09:20] ready pass the m perspector has had the
[09:23] Frost's first pass and damage R&D
[09:25] blocked the new GPU driven engine Trails
[09:28] have have also had completed their
[09:29] initial implementation passs and work is
[09:32] continuing on
[09:33] this on the weapon VFX side we've
[09:35] improved our style guide bringing a new
[09:37] system that helps us to define the
[09:39] visual style of a weapon based on
[09:40] manufacturer and energy type the kwe
[09:44] Gallant energy rifle rework has in its
[09:46] first pass along with the APR Scourge
[09:49] rail
[09:58] gun
[10:02] and KS devastated plasma
[10:07] shotgun we've also rolled out our
[10:09] layered impact
[10:11] Library previously our impacts were per
[10:13] weapon and per surface type but the new
[10:15] setup allows us to layer up individual
[10:17] Elements which give us more flexibility
[10:19] and less
[10:21] maintenance the animation team has been
[10:23] working hard on a lot of technical
[10:25] aspect groundwork and previs this past
[10:28] month work includes improving the
[10:30] functionality of the shouldered weapon
[10:31] state to get the rail gun ready and
[10:33] playable for 3.0 as well as polishing
[10:36] the functionality of the prone Set uh
[10:39] making it ready for code to work their
[10:40] magic on fixing any edge cases breathing
[10:43] and stamina work has continued to be
[10:44] polished to create a solid look and feel
[10:46] for for a player breathing across
[10:48] multiple States um you know such as
[10:51] normal tired and
[10:52] hyperventilating the no weapon jumps are
[10:54] getting a pass to bring the animations
[10:56] more in line with the Moab rather than
[10:58] the techn first pass portation we gave
[11:00] them and there has been a lot of
[11:02] continued iteration of improvement of
[11:04] weapon reloads across the Devastator
[11:05] shotgun Gallant arrowead rail gun and
[11:07] the new
[11:09] pistol meanwhile the Derby Studio has
[11:12] continued with facial animation for
[11:13] squadron 42 cinematics and Star Citizen
[11:16] they attended a facial shoot down in
[11:17] London for 3.0 and members of the team
[11:20] took a trip out to a the LA studio for
[11:21] some exciting facial animation R&D
[11:23] meetings this should really help us
[11:25] speed up production of the huge dialogue
[11:27] needs for both Squadron and the Pu well
[11:30] anyway thank you again that's it from
[11:32] that's it this month from Foundry 42 UK
[11:35] I hope you all had a good glimpse into
[11:36] all the areas we're focusing on in the
[11:38] studios here as always I really want to
[11:40] thank all the backers for giving us the
[11:41] opportunity to make this amazing game
[11:43] and of course our subscribers who
[11:45] through their continued support allow us
[11:46] to get all these updates out to the
[11:48] community take care and I'll see you in
[11:51] the
[11:52] verse that brings us to our next segment
[11:55] when designing a new spacecraft it's
[11:58] important to look at other ships from
[11:59] the same manufacturer yeah there's a lot
[12:01] to be learned from the past development
[12:03] applying these lessons to the new
[12:06] designs uh for new spacecrafts can help
[12:08] speed up the development process
[12:10] significantly which is also which is
[12:12] exactly what the ship artist on the
[12:14] javelin on the agis javelin did so take
[12:17] a
[12:27] look
[12:43] [Music]
[13:27] oh
[13:34] [Music]
[13:51] [Music]
[13:57] oh
[14:21] [Applause]
[14:22] [Music]
[14:27] he
[14:45] [Music]
[14:57] n
[15:19] [Music]
[15:46] the the javelin was was really kind of a
[15:50] byproduct of we needed another another
[15:53] capital ship supplied to the uee uh in
[15:56] the game um we already had the Idis um
[15:59] we knew it was going to be agis
[16:01] manufactured so I kind of wanted to
[16:04] extend the style and aesthetic of the
[16:07] the hydis into the javelin um not only
[16:11] for the interior stuff but also the
[16:12] exteriors so from a production point of
[16:14] view the the the javelin we had the
[16:16] wealth of experience that we we'd
[16:18] learned from from developing the
[16:21] Idis um and really kind of we could
[16:24] almost kind of so we say hit the ground
[16:26] running um so there was aot of
[16:28] similarities in the aesthetic and and
[16:30] the general kind of design between the
[16:32] Idris and the javelin it's really about
[16:34] kind of taking that aesthetic and those
[16:36] spaces and recycling you kind of hear me
[16:38] on about the 60/40 split recycling about
[16:40] 60% of the Idis and then putting the 40%
[16:43] spin on on the javelin for the Interiors
[16:46] the exterior production wise is really a
[16:48] case
[16:49] of take what works on the H shaders and
[16:52] the and and and the textures and whatnot
[16:54] the model is always going to be unique
[16:56] there's there's kind of nothing you can
[16:57] do about that um but if I put the idress
[17:01] next to the javelin like I say the the
[17:02] key result that I'm after is that they
[17:04] both look from the same Fleet they're
[17:05] both from the same manufacturer uh and
[17:08] and really the the production cycle of
[17:10] the hris is pretty much the production
[17:12] cycle of the javelin um they they both
[17:15] go kind of hand in hand when when we
[17:17] started the javelin it is the first
[17:18] thing you have to do is the floor plan
[17:21] we have to go through all the stuff that
[17:23] we need so you got the gravity Drive the
[17:25] reactors mes hle Barracks um you have to
[17:28] kind of think about these things from
[17:30] the ground up when you when you're
[17:31] planning the interior layout of the ship
[17:33] and what I'm really pleased about with
[17:35] the javelin is we we managed to get
[17:38] three concise decks um kind of planned
[17:42] out so if you look at the ship from the
[17:43] side the lower decks are engineering and
[17:48] so and is kind of very hot and and
[17:51] sweaty and a a workman's kind of place
[17:53] right and then you hit the mid deck
[17:56] which is habitation uh and that's again
[17:58] it's no mistake you kind of first class
[18:01] on a boing is up front there's no engine
[18:03] noise and stuff the the middle of the
[18:05] javelin theoretically would be the
[18:07] quietest area of of the ship um so
[18:10] that's all kind of laid out correctly
[18:11] and then you go to the top deck which is
[18:13] the technical area so You' probably
[18:14] heard me talk about like the arch types
[18:16] before um which is technical engineering
[18:19] uh habitation and medical um if you look
[18:22] at any any kind of section of the
[18:24] javelin from any angle you can see clear
[18:26] concise um uh breakouts of of those of
[18:30] those archetypes they've all got their
[18:32] place like an architect designed it
[18:33] properly right um and that's what you
[18:36] get from the javelin which I'm I'm
[18:37] really pleased about because it then it
[18:39] means that you get this clear
[18:40] concise cut between habitation between
[18:44] engineering and between technical um
[18:47] whereas you know some of the other ships
[18:49] they kind of have fallen a bit where
[18:51] you'll go from a technical area into a
[18:53] habitation and back into a technical
[18:54] area that doesn't happen on on on the
[18:56] javelin it's it's extremely like per
[18:57] deck if one section of ship gets damaged
[19:00] or goes down it's very much like um a
[19:04] huge cruise liner so if if that hle gets
[19:06] hit it will shut itself down so we've
[19:10] got these huge bulkheads with massive
[19:11] doors um that kind of will will just go
[19:14] okay you're out now shut down and then
[19:17] it's up for the engineer to start
[19:18] rerooting power the I just has this huge
[19:20] hanger that kind of runs through the
[19:21] center of the ship the the javelin
[19:23] doesn't um it has like a very kind of
[19:25] small almost like a a utility hanger um
[19:29] for a drop ship it is cool though the
[19:30] hanger the the best thing about the
[19:32] hanger is the floor Dan ingeniously
[19:34] designed it it pretty much kind of
[19:35] becomes the door essentially you have to
[19:37] land on a platform and then that
[19:39] platform lowers in but that platform
[19:40] when it's up is actually the doors quite
[19:42] cleverly and when you're actually inside
[19:44] the hanger and you see everything kind
[19:45] of moving up from traffic control it's
[19:47] pretty awesome so the main differences
[19:49] between the Idis and and the javelin is
[19:53] we've obviously got the hanger space uh
[19:55] difference it doesn't really kind of
[19:57] carry as many craft it's got It's not
[19:59] got a same utility vehicle but it has
[20:01] got an awful lot of Weaponry the whole
[20:02] ship's pretty much kind of cak in
[20:04] turrets um and we've done this really
[20:05] cool thing uh on on the back of the ship
[20:08] where the remote turrets that are
[20:10] actually on a track system at the moment
[20:12] when you're flying towards a ship you
[20:13] kind of don't know if a turret's in
[20:15] operation or not um unless it kind of
[20:18] goes down inside the hole or something
[20:20] like that and and not a lot of our
[20:21] remote turrets do that and but what we
[20:23] done is we put the whole turret on a
[20:25] track system so when they're not
[20:27] manned they rotate back and go to the
[20:29] back of the ship between the thrusters
[20:31] so they're in the most shielded area
[20:32] when they're not being used um but that
[20:34] way as a player when you're approaching
[20:36] one of these things you know if it's uh
[20:38] if it's got his turrets up in defense or
[20:40] not these huge things have gone way past
[20:42] just being a very pretty asset in space
[20:45] they're they're they're completely
[20:47] functional uh and they're also kind of
[20:49] extremely kind of fun to run around and
[20:51] have have a shootout so my background is
[20:54] FPS multiplayer maps I run round ships
[20:57] looking at kind of gameplay um and how
[21:00] you can make interesting gun play and
[21:01] all that kind of stuff and and making
[21:03] sure the level's balanced on the ship
[21:06] production side of things we got to keep
[21:07] quite a few people happy so obviously
[21:09] there's the backers who who you know
[21:13] they without them none of this would
[21:15] happen so we have to kind of take their
[21:16] feed back on board we done the Big Guns
[21:19] trailer back in November I think it was
[21:22] it was for yeah forzen con um um or
[21:26] around about that time the ship has gone
[21:27] through a couple of design changes on
[21:29] the exterior since it first went out
[21:32] simply because in the UK we have a habit
[21:33] of making things bigger um which has a
[21:36] domino effect to everything is is
[21:37] certainly the case uh on this there was
[21:39] a specific shot in that video that i'
[21:41] done and um sorry Toby done that one
[21:43] actually and um it showed the it showed
[21:46] the bridge and of course there's a
[21:49] crossbar across the bridge and and it
[21:51] kind of was blocking the captain's view
[21:53] If he if he would have to get to a
[21:54] certain point in the bridge to kind of
[21:55] see so we saw that we saw the feedback
[21:58] on the forums and and we've gone back
[22:00] and and remedied that and we taken that
[22:02] as an opportunity then to actually kind
[22:04] of generally just make the ship's Bridge
[22:05] kind of feel a lot more kind of tangible
[22:08] a lot better um and we've also got the
[22:10] cut scenes going in now um for that
[22:12] stuff for squadron so with hanis and
[22:15] myself we're looking at it and how we
[22:16] can flood as much kind of natural light
[22:18] into these areas so there's some very
[22:20] kind of cool windows that are turning up
[22:23] um and and the javelin is actually kind
[22:25] of far more so than than the Idis as as
[22:28] far more exterior views throughout the
[22:30] whole ship I've actually put a quite a
[22:33] significant amount of man hours uh into
[22:36] it not myself but we focus has shifted
[22:38] onto it cuz we're at the point now where
[22:41] I I pretty much kind of want to support
[22:43] design for the Squadron 42 side of
[22:45] things and for us to be able to do that
[22:47] the ship needs to be at a certain kind
[22:49] of Point okay cu the the javelin plays
[22:53] an integral role um for a uh a part of
[22:57] Squadron which I can't talk go out but
[22:59] yeah it's it's pretty cool we have to
[23:01] work with the writers on a daily basis
[23:04] uh it's never as black and white as the
[23:05] writers will you know kind of write
[23:08] something we make it it's it's very much
[23:10] a kind of a 50/50 thing there's a lot of
[23:12] backwards and forwards so you know we
[23:14] may end up kind of blocking out a new
[23:16] area and then that that may kind of feed
[23:18] back into the the script somehow and
[23:20] into into you know the writers doing
[23:22] something far more creative than what
[23:24] what I would originally have kind of
[23:25] thought about but it also works the
[23:27] other way so the writers you know
[23:29] they'll come up with ideas that feed our
[23:31] our
[23:32] inspiration this is where it gets really
[23:34] kind of complicated so from from an art
[23:36] production side of things we we hand the
[23:38] ship off to Tech Design Tech design are
[23:41] then going to go and do their pass with
[23:43] obviously the balancing of the weapons
[23:45] the balancing of the thrusters the
[23:46] maneuverable thrusters but then also
[23:49] with with this as as I mentioned it
[23:51] plays an integral role in Squadron so
[23:53] the design team on on Squadron uh are
[23:56] also kind of expecting a certain version
[23:58] of it um which we need to which we need
[24:00] to produce as well off the back of the
[24:02] Pu version that that just put together
[24:05] it's just this kind of thing about kind
[24:06] of make making a game or making making
[24:09] an IP or or anything along that lines in
[24:12] this industry is just just it's a very
[24:14] human thing um that takes a lot of
[24:17] people from a lot of different
[24:19] disciplines to kind of get on and work
[24:21] together and that's just a real kind of
[24:24] small part of that it's challenging but
[24:26] it's but it's it's massively use
[24:28] [Music]
[24:30] them it's great that the ship artists
[24:32] were able to take what they learned from
[24:33] the Idris and apply it to the javelin
[24:36] very cool and while still giving the
[24:39] javelin its own identity and that's all
[24:42] for this episode of ATV join us tomorrow
[24:45] at noon Pacific for Star Citizen happy
[24:47] hour Jared hucke and special guests Eric
[24:50] Kiren Davis Vincent Sinatra and
[24:52] Community broadcaster DJ Knight will
[24:54] live play Star Citizen and answer all of
[24:56] your questions with a focus on track ir
[24:59] and 4K extra wide screens uh and you can
[25:02] catch all of that on Twitch but before
[25:04] we sign off I want to thank all of the
[25:07] backers out there for supporting star
[25:09] citizens development your contributions
[25:11] allow us to build the best damn space
[25:14] Sim ever that's right and we're also
[25:16] very grateful to all of our subscribers
[25:18] who make this show possible every week
[25:19] and just a reminder tomorrow subscribers
[25:21] will get two cool pieces of flare as
[25:24] part of their rewards also the team is
[25:27] working on the hard copy of jump Point
[25:30] volume 3 which includes every issue
[25:32] released in the third year of jump Point
[25:35] very cool and if you're interested in
[25:36] learning more about our subscriber
[25:38] program check out the link in the
[25:40] description for more info uh anyone who
[25:42] is an active subscriber before April
[25:44] 17th will also receive an additional
[25:47] piece of flare a big Benny's vending
[25:49] machine so join before Monday to get
[25:51] that special reward thanks for watching
[25:54] and we will see you around the verse
[26:04] [Music]
[26:24] thank you for watching so if you want to
[26:25] keep up with the latest and greatest and
[26:26] Star Citizen Squadron 42 development
[26:29] please follow us on our social media
[26:30] channels see you
[26:39] [Music]
[26:44] soon

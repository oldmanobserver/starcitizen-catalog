# Star Citizen: Around the Verse - Eclipsing the Competition

**Video:** https://www.youtube.com/watch?v=oZIzExVmZMo
**Date:** 2017-05-25
**Duration:** 26:17

## Transcript

[00:16] hello and welcome to round the verse our
[00:17] weekly look at star citizens development
[00:20] I'm Sean Tracy and I'm Josh Herman in
[00:22] this episode we have a shipshape focus
[00:24] on Aegis eclipse the newly Declassified
[00:26] stealth bomber unveiled by the uee last
[00:28] week but before that let's go to
[00:31] Frankfurt for a studio
[00:33] update hello everyone my name is Brian
[00:36] Chambers and I'm the development
[00:37] director of Frankfurt office of Foundry
[00:40] 42 this past month the team welcomed a
[00:43] few new members bringing us up to a
[00:45] total of now 74
[00:47] employees we routinely have visitors to
[00:50] the office and this month was no
[00:52] exception with people here from both our
[00:54] us and UK offices most of the senior
[00:58] production staff uh from across all the
[01:00] offices came together in one place for
[01:03] their annual Summit had some intensive
[01:05] meetings and discuss both ongoing and
[01:08] upcoming plans and we found that a few
[01:11] days face to face without distraction it
[01:13] can actually go a long way so let's kick
[01:16] off this month with checking in with the
[01:19] AI team the AI team has worked on
[01:22] numerous items uh over the past few
[01:24] weeks and I'll just mention a few and
[01:26] show you a few things uh they started a
[01:29] Sprint focused on human combat with the
[01:32] end goal of improving all the combat
[01:34] work done in the previous months into
[01:36] something that represents our final
[01:38] quality they're initially focusing on
[01:40] all the shooting functionalities making
[01:43] sure the basic controls for accuracy and
[01:45] friendly fire implemented correctly
[01:48] they're also diving into uh the
[01:50] improving the behaviors related to the
[01:52] first initial reactions of something
[01:54] non-friendly seen or heard from a wide
[01:57] range of
[01:58] distances they also finished converting
[02:01] the ship AI to a newer updated version
[02:05] meaning that weapons Shields and counter
[02:08] measures now work with the new SC item
[02:11] 2.0 system for now it also supports the
[02:14] old ships to avoid any compatibility
[02:17] issues that may creep up this is part of
[02:19] an ongoing effort to move ships away
[02:21] from kythera AI Control and brings us
[02:24] one step closer to fully switching to
[02:27] subsumption based AI for all the shifts
[02:31] both ship and vehicle seats can be
[02:34] controlled by either players NPCs or an
[02:37] AI module the past month the AI team did
[02:40] some work on the AI modules uh the AI
[02:43] module represents an item that can be
[02:45] attached to a seat any seat of a
[02:47] spaceship or tourret and execute a
[02:49] behavior logic defined with a
[02:51] subsumption editor you might think of it
[02:53] as a piece of custom software that can
[02:56] be instructed to take control of the
[02:58] same items that are available to player
[03:00] sitting in the same seat it might work
[03:03] for example as an autopilot or
[03:05] autonomously take control of a turret
[03:07] and fired an enemy Target this features
[03:10] crucial and multi- Cru ships where the
[03:12] pilot might assign specific activities
[03:14] to the AI modules instead of another
[03:17] player
[03:18] NPC the system design guys have been
[03:21] pushing forward with the air traffic
[03:23] control system adding conversations with
[03:26] the traffic controller and a smart
[03:28] system for allocating landing pads for
[03:31] Pilots wanting to land or take off they
[03:34] also updated all doors to version 2.0
[03:39] which now makes them modular and a lot
[03:41] easier to implement each door having
[03:44] switchable loadouts ability to connect
[03:46] two rooms so air can travel between them
[03:49] and generally a lot more functionality
[03:50] needed for new systems that are already
[03:53] in the works such as breaching and and
[03:57] hacking they also started reworking
[03:59] locks so they can work better with the
[04:01] room and Atmospheric
[04:04] systems they did some rough prototyping
[04:06] work on Dynamic Advertising which will
[04:10] contextually fill in the in-game panels
[04:12] and Screen throughout stations with
[04:15] content that's reflecting the interests
[04:17] of the player that enters its proximity
[04:20] the same system could be used for
[04:22] showing large scale broadcasts and
[04:24] warnings throughout the Universe based
[04:26] on what's happening in the game at that
[04:29] specific moment moment either globally
[04:31] or
[04:55] locally our lead lighting artist Chris
[04:59] has been continuing work on the surface
[05:01] outposts particularly on the habitation
[05:04] sets as well as keeping in sync with the
[05:06] UK environment art team with all their
[05:09] updates to assets and dressing one issue
[05:12] lighting has been trying to solve for
[05:14] 3.0 is how to improve the amount of
[05:16] visibility On the Dark Side of moons
[05:19] previously without any interest objects
[05:22] in the sky relying solely on Cube Maps
[05:25] would mean that the planet's surface
[05:27] would be visibly too dark and the player
[05:29] really wouldn't be able to see any
[05:30] detail in the environment around them so
[05:33] Chris worked with the engineers to add
[05:35] another layer of atmospheric glow in a
[05:38] Radiance the glow allows us to brighten
[05:41] the atmosphere given a nice gradient
[05:43] that shows the shape of the Horizon and
[05:45] gives some depth in front of the player
[05:48] and the radiance uh gives us a base
[05:50] level of brightness on the actual
[05:52] surface geometry so the player can
[05:54] faintly see themselves as well as the
[05:56] surface around them finally he's also Al
[05:59] been providing support for s42
[06:02] environment lighting and helping set
[06:04] visual benchmarks for each of the levels
[06:07] the engine team recently implemented the
[06:09] initial version of our new IO scheduler
[06:13] this system will improve streaming
[06:15] performance as textures meshes sounds
[06:18] Etc are constantly being streamed in and
[06:20] evicted based on what's being used to
[06:23] stay within a certain memory budget
[06:25] eventually it'll also allow the job
[06:27] manager to better utilize CP U cores in
[06:30] cases where streaming jobs are waiting
[06:33] for Io moreover it lays the groundwork
[06:36] for a version of the scheduler
[06:38] specifically D designed for SSD drives
[06:41] to exploit their Superior random dis
[06:43] access properties that will allow for
[06:46] multiple concurrent data streams with
[06:48] high throughput all in all this ensures
[06:50] all data is available in time for
[06:52] complex scene surrender without having
[06:55] to wait for lods and all the related
[06:57] artifacts uh meanwhile the incremental
[07:00] Patcher moved into an internal phase of
[07:03] QA testing as previously discussed the
[07:06] system is designed to deliver builds
[07:08] incrementally to devs and Gamers alike
[07:11] so every time you update the game you'll
[07:12] only need to download what has actually
[07:14] changed or been added since the last
[07:16] time and this update process will
[07:19] therefore be a lot lot faster we also
[07:22] revived our internal memory analysis
[07:26] tool for Linux uh called memory play
[07:29] this was to help us find out and fix
[07:31] memory leaks on server instances much
[07:34] faster memory leaks are one of the
[07:36] contributing factors for Server
[07:38] stability and we want fixed as quick as
[07:41] possible to make sure our servers can
[07:43] run for a long long time without any
[07:46] issues on the rendering side several
[07:48] improvements have been made to the
[07:50] atmosphere and night skies as I
[07:52] mentioned in the lighting update the
[07:54] night side of the planets and moons now
[07:57] exhibit more details due to in scattered
[07:59] Moonlight and a visible Sky gradient in
[08:02] the distance when close to the terrain
[08:05] surface we're also looking into
[08:07] additional improvements for stronger
[08:09] groundbased Haze to further increase
[08:11] visual cues for scene readability and to
[08:14] make our lighting artist happy they also
[08:17] continued working on the object
[08:19] container streaming Soul Ed as well as
[08:22] plan Ed and rewrite of the living entity
[08:25] code AS previously mentioned is on track
[08:35] the environment our team continue to
[08:37] work on the Leb ski exterior in
[08:40] combination with the level designers
[08:42] both Art and Design regularly work
[08:44] closely together to verify that the art
[08:47] that's being created is made in a way
[08:49] that doesn't break any portion of the
[08:50] design the last layout changes for left
[08:53] ski are coming in and the set dressing
[08:55] pass is close to being complete
[09:09] [Music]
[09:20] the area around leki is also being
[09:22] populated with slightly larger mining
[09:24] structures than what we previously had
[09:27] since the lefki exterior is grown a lot
[09:29] over the past few weeks it's also going
[09:32] through an optimization pass with the
[09:34] artists looking into reducing memory
[09:36] consumption wherever applicable and
[09:38] making each individual asset as
[09:41] efficient as
[09:45] [Music]
[09:47] possible the terrain of Delmar is
[09:49] getting polished up and both the assets
[09:52] and rocks are all being finalized we're
[09:55] also setting up the specific asset
[09:57] scattering presets for the different
[09:58] ecosystem systems to populate the
[10:00] asteroids with defined
[10:03] [Music]
[10:04] objects the planet Tech has gotten a
[10:06] couple of new features recently the
[10:09] overall amount of materials that can be
[10:11] used on the Trin has increased
[10:13] significantly therefore new materials
[10:16] are being created for the moons to make
[10:17] the surfaces even more diverse from one
[10:20] another along with that the moons also
[10:22] got a performance boost by optimizing
[10:25] which assets are being drawn in the
[10:27] surface of the procedure entities at any
[10:30] given time
[10:37] [Music]
[10:43] [Music]
[11:03] [Music]
[11:12] the tech art team worked on multiple
[11:15] mannequin tasks including animations for
[11:18] both usables and the cinematics team
[11:21] mannequin is a tool within lumber yard
[11:23] that allows us to construct complex
[11:25] interactive character animations fairly
[11:28] easy the they also refined some of the
[11:30] earlier shown pipeline tools by adding
[11:32] new features and fixing bugs to make
[11:34] them easier to use and more dependable
[11:38] they did a handful of additional things
[11:39] such as prototyping Vandal weapon some
[11:42] physical simulation R&D for weapons and
[11:45] Bug fixes to name a few the VFX team in
[11:49] Frankfurt has been continuing to work on
[11:51] particles for the planet effects one of
[11:54] the new features we recently implemented
[11:57] are animated decals
[11:59] this now allows us to project certain
[12:01] animated textures on objects so it'll
[12:04] follow the Contours of those objects
[12:06] instead of having them on a flat plane
[12:08] that is roughly aligned to the surface
[12:11] this helps to integrate a certain
[12:13] effects into the world a lot more
[12:15] efficiently and with much better results
[12:17] than what we could do previously the VFX
[12:20] team in Frankfurt also grew by one
[12:22] member this month he'll primarily be
[12:25] focused on the large amount of
[12:26] cinematics work that needs to be done
[12:27] for squadron 42 including soft and rigid
[12:30] body simulations as well as destruction
[12:33] particle effects and the scene setups to
[12:36] go along with those the QA team this
[12:38] month grew by one member John Lang he
[12:42] got up to speed fast and soon became a
[12:44] primary point of contact for any Game
[12:46] Dev client issues in Frankfurt ensuring
[12:49] that he knows the current state of Game
[12:51] Dev at any given time he's also been
[12:55] heavily involved in various system
[12:57] testing this month such such as a new
[12:59] stamina system currently being worked on
[13:02] in both Frankfurt and UK
[13:04] offices together with Glenn Neil they
[13:07] were able to begin the initial testing
[13:09] pass in an effort to gather data for our
[13:11] game programmers to use for bug fixes
[13:14] and overall improvements to the
[13:16] system QA teams also been working on
[13:19] testing the Patcher itself the editor
[13:22] server connections and the Star Citizen
[13:25] client using the new pack system in
[13:27] order to catch crashes and differences
[13:29] between builds pulled with the old
[13:31] Patcher versus the new Patcher it's an
[13:34] ongoing test that they perform daily to
[13:36] stay on top of any potential issues that
[13:38] arise from build to build additionally
[13:41] they also spent time testing various
[13:43] multiplayer issues for the Stanton
[13:46] system which included Moon Collision
[13:49] testing they work extremely close with
[13:52] the engineers and test very specific
[13:54] things in a very specific way to get the
[13:57] data that the engineers are after the
[13:59] engineers then take those findings to
[14:01] work out fixes for issues and to also
[14:04] improve things such as stability and
[14:06] potential memory issue this month the
[14:09] FPS weapons team was primarily focused
[14:13] on R&D efforts for weapon skins they
[14:17] spent time prototyping camouflage
[14:19] patterns decals and material
[14:22] variations this will set us up for
[14:24] future weapon customization and allow us
[14:26] to quickly and easily create special
[14:29] one-off variants when we
[14:31] want the ship weapons artists are
[14:34] currently working on the preacher armant
[14:36] Distortion scatter gun S1 to S3 and
[14:40] started work on the apocalypse arms
[14:42] ballistic scatter gun S1 to S3 this past
[14:46] month the cinematics team focused on
[14:48] previous Pipeline with the goal of
[14:50] getting most of the cinematics into the
[14:52] game regardless of their current state
[14:54] either polished or rough this will help
[14:57] designers and director alike get a
[15:00] better idea of the overall flow and
[15:02] pacing for the full playthrough of
[15:04] Squadron 42 within the next few weeks
[15:07] they'll be working closely with facial
[15:09] and audio team to get a full
[15:11] representation of performances working
[15:13] in engine they also spent some time
[15:15] getting a small motion capture system
[15:18] set up in one of our common areas with
[15:20] help from Kyle Moody from the UK for
[15:23] those that don't know motion capture or
[15:26] map allows us to capture an actor's MO
[15:29] itions then map them to a digital
[15:31] character it's a way for us to quickly
[15:33] generate a Bas animation for the
[15:35] animators to then modify if they need we
[15:38] set up 11 optit Track cameras in total
[15:41] which gave us a small capture volume of
[15:43] roughly 3 m squared the cinematics team
[15:46] will primary primarily use it to capture
[15:50] background characters for individual
[15:52] scenes as well as transition animations
[15:54] to help link animations that are not
[15:56] quite aligning can also be used to
[15:59] capture quick animations that we can use
[16:00] for outstanding R&D tasks from our
[16:02] animation engineers and save the
[16:04] animator some time the system won't be
[16:07] set up permanently but once we have a
[16:10] small list of animations that we want
[16:12] the team can set it up in about an hour
[16:14] and quickly get what we need the game
[16:17] programming team in Frankfurt has grown
[16:20] over the past few months team is
[16:22] currently at three people with one lead
[16:25] and two
[16:26] regulars this month they did a pass on
[16:29] improving the functionality of doors
[16:32] then started working on air locks both
[16:34] the doors and air locks need to be set
[16:36] up as simplified as much as possible and
[16:39] integrated with the latest changes of
[16:41] item 2.0 system they also added a few
[16:45] small features to the weapons such as
[16:47] the ability to have different muzzle
[16:48] flash effects or different vent effects
[16:51] based on the current fire mode as well
[16:53] as fixed numerous bugs they also started
[16:56] planning the work needed for the
[16:58] improved weapons system this new system
[17:00] is based on the item 2.0 system and will
[17:04] allow the designers to create a wider
[17:06] variety of weapons more easily it'll
[17:08] also address technical issues such as
[17:11] client side prediction and server
[17:14] Authority it's still in the research
[17:16] phase and it is a long-term effort
[17:19] however we're confident that we're on
[17:20] the right track and implementation can
[17:23] begin within the next few
[17:25] weeks so that wraps it up for Frankfurt
[17:28] this month appreciate all the support
[17:30] you enable us to do what we love to do
[17:33] and I will be back next month with
[17:36] another update see in the
[17:39] verse a lot of interesting stuff in that
[17:42] update imagine being stuck on the dark
[17:43] side of a moon when they didn't add that
[17:45] atmospheric glow uh it might be pretty
[17:47] pretty realistic but not very good for
[17:49] visibility yeah and that's a good
[17:50] example of how game design works we
[17:52] figure out a way for one sun to light an
[17:54] entire system only to create this new
[17:57] problem so considering how our the
[17:59] environment and art teams work to make
[18:01] this game look beautiful it' be a shame
[18:02] if you couldn't see any of the textures
[18:04] in that yeah exactly uh but let's talk
[18:06] about something that's supposed to be
[18:07] hard to see the agis eclipse mhm this
[18:10] new stealth bomber has several great
[18:11] features including different Wing
[18:13] positions for atmospheric and space
[18:15] flight here's a ship shape for more
[18:16] details on this exciting new
[18:25] ship my name is Paul Jones uh I'm one of
[18:28] the art directors here at Foundry 42 I'm
[18:30] Jeff from Tech design technical designer
[18:32] that made the eclipse or made the spec
[18:34] for the eclipse AES is meant to be one
[18:35] of the older companies you know sort of
[18:38] law basically generally sort of long
[18:41] long sweeping lines you know quite clean
[18:44] sort of body you know always well
[18:46] thought out not gbly not like it's not
[18:49] industrial you know there's a certain
[18:51] level of clean industrial design that
[18:53] have gone into these the eclipse was the
[18:56] first chip I got to actually create in
[18:58] Tech design so been in Tech design for
[18:59] about a year now and I've picked up a
[19:00] lot of other people's ships like the
[19:01] Argo and the Idis but this was the first
[19:03] ship I was given the design brief of we
[19:06] want to make um a stealth bomber it
[19:08] needs to like have Echoes of other ships
[19:10] like the B2 bomber and then I just got
[19:13] to sort of to run with it most people
[19:15] have a certain idea in the head of what
[19:16] a stealth bomber is and we haven't
[19:18] really strayed far from that you know we
[19:20] you know that's always the sort of way
[19:22] in Star CTI and you know you often deal
[19:24] with things that people familiar with
[19:27] and then you advance it basically
[19:29] originally sort of started with the
[19:30] Avenger sort of sweeping lines basically
[19:34] and then as we've developed kind of we
[19:37] kind of shifted away from that and went
[19:38] more towards a sort of you know saber
[19:40] styling basically initially we I kind of
[19:43] envisaged it being um a descendant of
[19:46] the Avenger so it would have lots of the
[19:48] similar tellings the Avenger the smooth
[19:49] shape the um like the long profile but
[19:52] as the the ship design went along the
[19:54] ship became a bit more angular much like
[19:56] the likes of the saber you know in the
[19:58] sort of in the uh concept process you
[20:01] know we we're starting with will we
[20:03] start with a rough shape we then started
[20:04] pushing towards uh sabber
[20:07] styling and then it was you know it's
[20:10] always really about that top profile
[20:12] that sort of Delta cockpit and then your
[20:15] intakes and so we've you know we started
[20:17] off with the traditional two intakes and
[20:19] then we sort of decided to sort of BCT
[20:21] them and then have two intakes on the
[20:23] top two intakes on the bottom see what
[20:25] that does and then I was like okay I
[20:26] don't like that so let's try four on the
[20:29] four on the top which make you know a
[20:32] real sort of striking feature of the
[20:34] ship and then that was that was pretty
[20:36] much it that was it that was kind of
[20:38] like okay that's that's the one we're
[20:40] going for cuz this is meant to be
[20:42] stealth bomber of the future kind of
[20:45] sort of felt it worked it worked better
[20:47] to sort of push in that direction so
[20:49] this even more so than the saber is
[20:50] going to be a very stealthy vessel but
[20:52] unlike the saber it's no dog fighter you
[20:55] know we stuck fairly close to the brief
[20:57] and you know we gave Chris's option of
[20:59] you know slightly Wilder ones you know
[21:01] ones that were sort of entering probably
[21:02] more into Batman territory maybe
[21:04] basically Chris is like oh know I like
[21:05] you know like this one from there off we
[21:07] go basically it's uh how can we take
[21:10] something familiar how can we advance it
[21:12] but still keep it recognizable the
[21:14] eclipse is uh it's very much a military
[21:16] ship I was looking at a lot of the
[21:17] stealth Fighters obviously that exist uh
[21:19] the B2 was a very heavy inspiration for
[21:21] the design of the ship uh look just
[21:23] looking at the the ship from the front
[21:24] you have this clean profile where you've
[21:26] got the wings and it just kind of bulbs
[21:27] out of the body a bit and that's kind of
[21:28] what I wanted to worko with the eclipse
[21:30] cuz having it loaded with loads of bombs
[21:33] and loads of guns dangling off it all
[21:34] over the place it it wouldn't look
[21:36] stealthy and in a way that minimalist
[21:38] design is kind of menacing you know
[21:39] you'll see the shape coming and you'll
[21:41] know immediately what it is currently
[21:43] the way stealth works is your ship has a
[21:44] cross-section and that's kind of how
[21:47] easy you are to detect and basically
[21:49] yeah a lot of that's radar one of the
[21:50] one of the guys in QA actually used to
[21:52] play with the uh the Hornet ghost where
[21:54] you could turn off load your systems
[21:56] like you know your engines and you can
[21:57] turn off your Shield generators and it
[21:59] reduces loads of your signatures so much
[22:01] that you can only detect it when you're
[22:02] looking basically directly at it and
[22:04] that was one of his favorite strategies
[22:06] in Arena commander and that that's kind
[22:07] of the sort of thing I was kind of
[22:08] thinking of with with the eclipse is
[22:10] when you're flying towards a Target if
[22:11] you knowly where they are you fly
[22:12] towards them and you go dark a bit you
[22:14] know you'll turn off any systems you
[22:15] don't need right now and then when you
[22:16] get closer light everything up and try
[22:19] and get them you know we've got a Bombay
[22:21] that holds three torpedos their size N9
[22:23] is the same as the
[22:25] Retaliator um and while a lot of the
[22:28] space on the interior Retaliator uh
[22:30] occupied with its torpedo vaye in the
[22:31] eclipse we had to kind of tone it down a
[22:33] bit keep it a lot more compact so we've
[22:36] uh We've created a new uh torpedo firing
[22:39] mechanism basically which is just like a
[22:41] it's like a tube inside the ship which
[22:42] will have three Torpedoes inside it and
[22:44] it'll fire one torpedo and then rotate
[22:46] and you can fire another one and then
[22:48] sort of also featuring in sort of
[22:50] functionality adding to the ship partway
[22:51] through the process so it's got multiple
[22:54] configurations basically of the Wings
[22:57] when the ship is uh um in atmosphere the
[23:00] wings the wings actually sort of fall
[23:02] back a bit and when it's in atmosphere
[23:03] they'll fold out fully so it's got the
[23:05] full flat profile and it's got a handful
[23:07] of little fins to on the nose and
[23:09] towards the back and they'll be popping
[23:11] out basically and to give the guys that
[23:13] it it flies better in atmosphere and if
[23:15] we can we we'll definitely be giving it
[23:17] that kind of um that kind of profile and
[23:19] update but in space all this stuff's
[23:21] going to pop back in and the wing is
[23:22] going to tuck back a little bit um and
[23:25] which should make its profile just
[23:26] slightly smaller so it'll be slightly
[23:28] harder to shoot slightly harder to
[23:29] detect you know and then the other
[23:31] defining feature was basically its
[23:33] Landing State so it's very you know
[23:36] we've it's quite a wide ship and so it
[23:38] wasn't going to work for a lot of
[23:39] Landing areas and so this basically kind
[23:42] of riffs off a lot of what of the
[23:43] military do anyway on like aircraft
[23:45] carriers so we've got folding Wings it
[23:47] isn't you know it isn't quite they don't
[23:49] fold over as far as military we've kept
[23:52] you know we've gone for a very certain
[23:53] sort of graphic style cuts a very
[23:56] noticeable sort of silhouette and then
[23:58] the landing gear is sort of part of the
[24:00] folded Wings it's one of those that like
[24:02] it's going to have a niche it's
[24:04] definitely not going to be you know
[24:05] you're not going to you're not going to
[24:06] have it like a hornet and take it
[24:08] basically anywhere and see what you can
[24:09] do if you take this off fighting regular
[24:12] Pirates near a station you wasting your
[24:14] time cuz those size n Torpedoes are
[24:16] going to take forever in a day to hit
[24:17] they're going to take forever to lock on
[24:18] you've only got two size two guns and
[24:20] this ship doesn't it doesn't like it can
[24:23] dog fight at a pinch but it's no dog
[24:25] fighter it's one of the key things I
[24:27] kind of wanted to stress is it's kind of
[24:29] not so much ponderous but definitely
[24:31] it's not agile but then if you do know
[24:33] where a big Target is if you can get a
[24:35] constellation on its own you can kill it
[24:37] it's going to be a really cool ship to
[24:39] watch sort of just come in and then
[24:40] Wings fold up and then it sit on the
[24:42] ground so looks really intimidating
[24:45] which is kind of what we were driving
[24:47] for what you want is a stealth bomber
[24:50] isn't it you want something that's going
[24:51] to cause trouble and look like it
[24:54] too great work guys if you want to add
[24:57] this stealth ship to your Fleet the agis
[24:59] eclipse is on sale until Friday June 2nd
[25:02] and subscribers can also learn more
[25:04] about the AIS Eclipse by checking out
[25:05] the latest edition of jump point and
[25:07] visiting the Vault for some concept
[25:09] images awesome we also answered some
[25:11] questions about the eclipse earlier this
[25:13] week so check at the ship Q&A for more
[25:16] information so that's it for this
[25:18] episode of ATV a big thanks to all of
[25:20] our backers for your support we couldn't
[25:22] build a game like this without you and
[25:24] thanks for watching we'll see you around
[25:27] the verse
[25:35] [Music]
[25:55] thank you for watching so if you want to
[25:56] keep up with the latest and greatest
[25:58] Star Citizen of Squadron 42's
[25:59] development please follow us on our
[26:01] social media channels see you soon
[26:10] [Music]

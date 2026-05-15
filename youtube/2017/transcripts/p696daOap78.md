# Star Citizen: Around the Verse - Engine Trails and VFX Particle Effects

**Video:** https://www.youtube.com/watch?v=p696daOap78
**Date:** 2017-06-29
**Duration:** 24:00

## Transcript

[00:13] [Music]
[00:16] Hello and welcome to another episode of
[00:18] Around the Verse, our weekly look at
[00:20] Star Citizen's ongoing development. I'm
[00:22] Sandy Gardner and I'm Chris Roberts. So
[00:24] today we're going to take a look at the
[00:25] work that went into creating engine
[00:26] trails, atmospheric entry effects, and
[00:28] some of the other cool visuals uh we are
[00:30] planning for 3.0. But first, let's head
[00:33] to Austin for a studio update.
[00:37] Hey guys, Jake Ross here, producer in
[00:39] Austin. The wheels are in motion on
[00:40] several features here in Austin. Let's
[00:42] dive right in and see what's been going
[00:43] on this month. On the design side, we've
[00:45] been doing a new pass on the proc fixer
[00:48] tool, which is the master Excel sheet
[00:50] where all of our pricing structure is
[00:51] laid out. We've got a bunch of new
[00:53] assets that have come online and our
[00:54] designer working on it, Pete McKay, uh,
[00:57] has all the new ships, new items, new
[00:59] armor suits, and some other FPS goodies.
[01:01] So, Pete has been working to make sure
[01:02] they all fall within the pricing balance
[01:04] of the game, as well as balancing them
[01:06] to the most recent design pass of the
[01:07] items. What's really exciting about this
[01:09] now, as opposed to 6 months ago, is that
[01:11] we're getting far enough with the
[01:12] overall design of the items in the game
[01:14] to better understand the gameplay
[01:15] implication of the items. Although this
[01:17] has required us to go back and make
[01:19] another pass through the items to bring
[01:20] older items in line, we're now able to
[01:22] more accurately predict where their base
[01:24] prices should sit. On top of this, as we
[01:27] are getting new missions in the game, we
[01:29] are doing an additional pass on mission
[01:31] rewards, insurance prices, and respawn
[01:33] timers. We are also setting up the shop
[01:36] inventories utilizing the new shop tech
[01:38] from LA Engineering Team. In addition,
[01:40] we are getting NPCs into some of the
[01:42] main hub areas of our PU landing zones.
[01:44] Uh, junior designer Robert Gaither has
[01:46] been focusing on Grim Hex in order to
[01:48] prove out the behaviors. Uh, but the
[01:50] plan is to extend these general
[01:52] behaviors to the other landing zones
[01:53] like Port Olsar and Levki. The overall
[01:56] goal here is to start to create a
[01:58] general sense of ambience and start to
[02:00] bring the levels to life. Finally, we
[02:02] have Miles Ehart. Getting Miles Ehart,
[02:04] our mission giver, into the game has
[02:06] required a lot of collaboration and work
[02:08] from several different teams. The
[02:09] usables team has created the tech that
[02:11] allows us to link extraneous objects
[02:13] such as the bar stool to other usables,
[02:15] the high bar table, and still register
[02:17] items on the table properly, such as
[02:19] Echart's glass. The mission system team
[02:21] has given us the ability to look for
[02:23] missions with the Echart tag, figure out
[02:25] what is currently available for players,
[02:27] and pass those via subumption to the
[02:29] player's mission log for acceptance or
[02:30] rejection. Between the AI and FPS
[02:33] programmers, they have created an
[02:35] animation technique we're calling
[02:36] feather blending that will allow us to
[02:38] blend between usable object animations,
[02:40] such as a generic sitting animation for
[02:42] a bar stool and the animations related
[02:44] to the mission giver conversations. The
[02:46] Subsumption tech and programming team
[02:49] have been facilitating all of this
[02:50] through the Subsumption tools and by the
[02:52] game code that goes with it. Overall,
[02:55] we've made a lot of progress in the last
[02:56] few weeks and we are looking forward to
[02:58] polishing this up for the 3.0 release.
[03:01] On the art side of things here in
[03:03] Austin, Josh Coons, our ship artist, has
[03:05] been working with the tech art team to
[03:07] finish creating the LODs and the damage
[03:09] pass of the Compass Black. He was also
[03:11] busy making tweaks to the cockpit area
[03:12] and the rotating necess based on the
[03:14] tech art feedback and wishes. He has now
[03:17] moved on to creating an awesome looking
[03:19] renders and videos which will be used on
[03:22] the website and various marketing
[03:23] events.
[03:24] We can now say that the formerly top
[03:26] secret project that lead ship artist
[03:28] Chris Smith has been working on is the
[03:30] Gian Knox bike. Starting around March,
[03:32] he has been tirelessly modeling and
[03:33] texturing uh this bike from the
[03:35] beginning to the end. In the last month,
[03:38] he has been working with many team
[03:39] members on creating the incredible
[03:40] artwork for the brochure and slick
[03:42] marketing release video for this new
[03:44] ship, as well as an interview on how it
[03:47] all came together. The server
[03:48] engineering team has been working
[03:49] closely with DevOps to integrate and
[03:51] test diffusion in a QA environment. So
[03:53] far things are looking good. The team
[03:55] has started working with gameplay
[03:56] engineering to show them how to best
[03:58] utilize the features that diffusion can
[03:59] offer. We will continue to work with
[04:01] them over the next few months to
[04:03] identify new and old gameplay features
[04:05] that will be best suited as diffusion
[04:07] services. In time we will move much more
[04:09] of the feature logic in diffusion
[04:11] services allowing for higher scalability
[04:14] and optimal perform performance. This
[04:16] month in the PU animation team we are
[04:18] starting on the NPC usables for
[04:20] counters. This will include working with
[04:22] our shopkeepers and bartenders NPCs and
[04:24] collaborating with designing to bring
[04:26] these elements to life. Once these are
[04:28] complete, a player would be able to walk
[04:30] into a shop to buy merchandise from NPCs
[04:32] that sell weapons, spacuits, clothing,
[04:35] ship parts, and other such things. This
[04:37] will incorporate our Wildline system as
[04:39] well with face animation and audio
[04:41] captured at our mocap shoots. To
[04:42] complete these features, we needed to
[04:44] capture a few transition elements that
[04:46] were missing. So, we shuffled some desks
[04:48] around and set up a quick mocap shoot in
[04:50] our office. Along with the bartender, we
[04:52] are also getting the usable for the bar
[04:54] stool up and running. Once this is done,
[04:56] a player will be able to go and sit at a
[04:58] bar stool and order a drink. Finally, we
[05:00] finished the carry system animations. As
[05:02] a player, you can now pick up a
[05:03] standardized box and walk around with
[05:05] it. So, now we have all the needed tech
[05:07] to expand this mechanic to pick up a
[05:09] wide range of things and carry it
[05:10] wherever needed. On the ship animation
[05:12] side in Austin, we are wrapping up
[05:14] setting up the standard for the cockpit
[05:16] experience, as well as polishing and
[05:18] creating new improved animations for our
[05:20] next release. In addition to various bug
[05:22] fixes within the cockpit, we are working
[05:24] with the design and programming teams to
[05:26] bring the same level interactions you
[05:28] get in the cockpits to the man turrets
[05:30] in the ships. This includes geforce
[05:32] reactions, hit reactions, as well as a
[05:34] G-lock pass out and wake up sequence for
[05:37] when you're pulling too many G's.
[05:40] The DevOps team is quietly adding more
[05:42] hardware and increasing network capacity
[05:44] to handle necessary increase in build
[05:46] activity connected to the 30 release.
[05:48] Everything is growing in size, which
[05:50] means increasing demands on the build
[05:52] system and its various subsystems.
[05:54] Meanwhile, the live ops team has
[05:55] completed the build out of the latest
[05:57] server size expansion, supporting the
[05:59] latest rev of shopping and subumption.
[06:02] They're still tuning and making
[06:03] adjustments, but it's always excited to
[06:05] exciting to see the new services coming
[06:07] online. For June, Austin QA has been all
[06:09] hands- on deck, testing new features in
[06:11] preparing for 300. Major testing items
[06:13] for our group include new overhauled
[06:14] Star Marine weapons, testing of the
[06:16] Crusader moons, Levki, new missions, the
[06:18] improved Moby Glass interface and apps,
[06:20] particularly the star map, and ships.
[06:22] Lots of ships. Many ships have come
[06:24] online for item 2. So, each of them
[06:25] requires a complete sweep for issues, as
[06:27] well as a review of old issues such as
[06:29] animation and ship idling to see what
[06:31] may have carried over in the new
[06:32] implementation. Stability and
[06:33] performance has been a major focus as
[06:35] well with Austin QA working closely with
[06:37] our UK counterparts to conduct regular
[06:39] play tests and captures. Two42 testing
[06:41] has been working closely with the rest
[06:42] of the team as new tech means new bugs
[06:45] that are often shared between both
[06:46] groups of testers. We've continued
[06:48] providing additional support for the
[06:49] animation team here in Austin as well,
[06:51] handling mocap file cleanup, supporting
[06:53] setup and tear down for pickup shoots,
[06:55] and other tasks that free up our
[06:56] animators to handle the more important
[06:58] items. Our normal engine and editor
[07:00] testing has kicked into high gear as the
[07:02] surge of new tools and tech from
[07:03] developers at all four studios means we
[07:06] are constantly checking shelf check-ins
[07:07] and binaries for problems. Making sure
[07:10] everything is ready to go before it gets
[07:12] checked in and turned over to the rest
[07:13] of the company to use is very important.
[07:15] This has included changes to resource
[07:17] manage management for objects and
[07:19] planets, new build distribution tools,
[07:21] server changes to support subumption, as
[07:23] well as network code improvements and a
[07:25] refactor of the material manager.
[07:28] The player relations team continues to
[07:30] prepare for upcoming 3 work and can't
[07:32] wait to give to the backers the new
[07:33] player experience that will go on the
[07:35] website and match the new content coming
[07:37] up in the game. They'll also be adding
[07:40] to the Evocati ranks in the coming weeks
[07:42] and are excited to announce two new
[07:44] hires in addition to more headcount in
[07:46] Austin Manchester and our Frankfurt
[07:49] studio. Work continues at a breakneck
[07:52] pace and so does our excitement about
[07:53] the upcoming release. Thanks for tuning
[07:55] in and for all your support. See you
[07:57] guys in the
[07:59] verse. Hey guys, this is Benuel with
[08:01] Turbulent and this is our update. So
[08:04] we've moved 036A version of Spectrum up
[08:07] to the PTU for regression testing. This
[08:10] first first release in this branch is
[08:12] only for testing all of the backend
[08:14] changes that we've made in order to
[08:16] we're preparing the groundwork for
[08:17] desktop integration. And so we've
[08:19] changed all of our actions which are the
[08:21] core of how this application is
[08:23] functioning. So we've transferred to a
[08:25] new standard. This will help us manage
[08:27] how we we do desktop uh release of
[08:30] spectrum which will be able to have a
[08:32] window in the overlay and a window on
[08:34] your desktop at the same time but by
[08:36] sharing all the resources. And so this
[08:37] is we're laying the groundwork for this.
[08:39] So this first release on PTU is only for
[08:41] regression testing and uh we're going to
[08:43] be throwing in new features into 036.
[08:46] The first one being the new form editor
[08:48] and so we're introducing uh drafts. Uh
[08:51] so when you create new posts in a thread
[08:53] uh we will uh save your draft so you can
[08:55] go and back to browsing and then come
[08:57] back and complete your draft for every
[08:59] thread. Uh we're going to allow you to
[09:00] do inline images. And so uh we we're
[09:03] changing all of the way the markup
[09:05] processing is working in the editor,
[09:06] adding more markdown support for more
[09:09] styling like styling of links, inline
[09:11] images, uh so you're not forced to use
[09:13] the frame that we have for all the
[09:15] images or when you make galleries. And
[09:17] so that's gonna we're hoping that this
[09:19] uh is what you guys wanted. So, uh,
[09:20] we've done a lot of work on the editor
[09:22] on that front. Uh, another major feature
[09:24] in, uh, 036A is custom roles. That's the
[09:28] big feature. And so, we've been working
[09:30] hard at creating the new member lists
[09:31] that you can see directly from your
[09:33] spectrum, uh, or management part. Uh,
[09:36] then you'll be able to change roles of
[09:38] your users, uh, you know, simply by
[09:40] visiting their profiles. And so the
[09:42] custom roles system basically allow you
[09:44] to create new roles that have their
[09:46] custom set of permissions on top of the
[09:48] ones that are provided by the org
[09:49] system. And so this should give you guys
[09:52] a lot of flexibility in how you assign
[09:54] people to groups uh how you let them see
[09:57] specific sub forums or sub chats uh
[09:59] within your orgs. What goes with this is
[10:01] also an update to mini profiles. We're
[10:02] not happy with the way mini profiles
[10:04] have been working uh up to now and so
[10:06] we've been changing that. Uh so we're
[10:08] going to a more compact setup that will
[10:10] have a set of actions uh on all of them.
[10:13] Uh one thing that we're trying to
[10:14] implement at the same time as we're
[10:16] bringing these new uh member profiles in
[10:18] is we're going to be reimpporting we're
[10:21] reimplementing post counts. And so now
[10:23] you'll be able to see post counts uh for
[10:25] all the users on the system. So you'll
[10:27] be able to see how many posts they've
[10:28] made, how many replies they've created.
[10:31] Uh and we're also introducing the
[10:33] concept of karma. Uh so when people
[10:35] upvote content that you've created, you
[10:37] gain karma and that is uh that is shown
[10:39] in in your spectrum mini profile. This
[10:41] new succinct profile also will have an
[10:43] hot link to message people. So you don't
[10:45] have to click on them and click on
[10:46] bright message. You can just message
[10:48] them directly. So this this is our 036
[10:50] version. We're going to be starting to
[10:51] merge our branches very soon. More
[10:53] ground work on the back end on voice. Uh
[10:55] so we're really hard at work right now
[10:57] working the transmission part of our
[10:59] voice infrastructure. how we're going to
[11:01] be able to have, you know, servers
[11:03] directing and routing people to
[11:05] different voice servers, how that's
[11:07] going to work and what kind of data
[11:09] channel we're going to have because we
[11:10] have additional data to carry uh in this
[11:12] project, not just voice. And so we need
[11:14] to be able to carry these data channels
[11:16] as well. And so we're we're looking at
[11:18] how we're going to be doing that. So
[11:19] there's a lot of there's resources
[11:20] dedicated to that right now. Totally
[11:22] unrelated to Spectrum, we've been
[11:24] working for 3 uh for a new uh system to
[11:28] handle crashes. We've we've developed
[11:30] years ago uh a system called panic that
[11:32] tracks your client crashes and so uh we
[11:35] needed to basically reintegrate that to
[11:37] be get more visibility on it. And so
[11:39] we've integrated our panic system uh
[11:41] with the Sentry which uh which is a
[11:44] super nice UI that we're using on the
[11:46] Spectrum side already but that we're now
[11:47] going to be using on the game side uh
[11:49] that will allow us to track your client
[11:52] crashes you know see the repro counts
[11:54] assign those to developers link them to
[11:56] JR issues uh view regression so we get
[11:59] regression notifications and all this
[12:01] stuff uh from the game crashes. Uh so
[12:04] we've developed a custom SDK integration
[12:06] with Sentry. Uh it's going to be super
[12:08] good for testing. It's going to help
[12:09] developers in the testing phases for 3.
[12:12] So we're super excited about that cuz
[12:13] that work is completed. Um otherwise our
[12:16] main teams are working on welcome to SC
[12:18] the new uh Star Citizen website revamp.
[12:21] And so uh that's progressing. We're now
[12:23] in full coding mode. Uh most of the
[12:25] design work is finished on all you know
[12:26] mobile and tablets and everything. And
[12:28] so we're right now we're developing and
[12:30] so we don't have anything to show yet
[12:31] but you know soon hopefully. And so, uh,
[12:35] that's our turbine and update for this
[12:36] this month. Thank you guys.
[12:40] Cutless Blacks looking pretty good. Josh
[12:42] has done a great job updating the ship.
[12:44] Yeah. No, he definitely has. I mean, the
[12:46] ship team in Austin's killing it. Chris
[12:47] Smith recently finished the Knox, which
[12:49] went on sale uh this past uh Friday and
[12:52] uh, you know, it's pretty much done.
[12:55] We've been flying it around on moons and
[12:56] we're looking forward to getting in your
[12:58] guys' hands in the very near future. So
[13:00] the but I would say the incredible
[13:02] attention uh does not stop just at
[13:04] ships. Our VFX team has been hard at
[13:06] work to get other cool effects like
[13:08] engine trails ready for the 3.0 release.
[13:10] Let's catch up with our VFX team to see
[13:12] all the impressive effects they've been
[13:15] creating.
[13:23] I'm Mike Snowden. I'm the visual effects
[13:25] director. We get to play with lots of
[13:27] particles of which there are many uh in
[13:29] Star Citizen from a kind of whisper of
[13:31] steam from a mug on a table to a capital
[13:34] ship exploding. There'll be effects
[13:35] needed for both of those things and
[13:37] anything in between as well. The
[13:38] challenge with VFX is is maintaining
[13:40] that the level of fidelity, the kind of
[13:42] quality, the visual quality that that
[13:44] that Star Citizen requires. Maintaining
[13:46] that across that kind of range of scale,
[13:48] seeing these kind of things up close
[13:50] versus seeing them way way off in the
[13:52] distance and making sure they always
[13:54] look good. Uh there's lots of challenges
[13:56] both artistically but also um
[13:58] optimization wise as well making sure
[14:00] that they run efficiently in the game.
[14:02] I'm currently setting up the the engine
[14:04] trails and entry and and um exit effects
[14:08] for the atmosphere. Basically guys going
[14:09] through each ship um setting up the
[14:12] particle libraries for each ship and
[14:14] setting the correct color values for
[14:16] each manufacturer. Chris was a is a big
[14:17] fan of the engine trails um for gameplay
[14:20] reasons primarily but you know it's
[14:22] something that is very much a part of
[14:23] the Star Citizen dream I guess um he
[14:26] always kind of saw the engine trails
[14:28] being a part of that there's also going
[14:29] to be atmospheric entry effects for
[14:31] ships and anything actually not just
[14:33] ships but objects that are passing
[14:35] through atmosphere exit effects as well
[14:36] when ships are actually leaving the
[14:38] atmosphere contrails when vehicles and
[14:40] ships are moving around at speed on the
[14:42] planets so those are the three kind of
[14:44] things that we think about when we're
[14:45] talking about atmospheric flight
[14:47] effects. When we were looking at the
[14:48] challenges that things like engine
[14:49] trails were going to give us, we
[14:51] essentially knew that we couldn't really
[14:52] do it with the current tech we've got.
[14:54] Um, we had various attempts at doing so.
[14:56] We essentially identified what the
[14:58] problems were with the current tech. All
[15:00] kinds of things really. The old system
[15:02] was uh completely uh based on one
[15:05] thread. So, it's a very linear system.
[15:08] Started very small and was built upon
[15:10] built upon and it became kind of a a
[15:13] monster. I was jumping from one part to
[15:15] the other part to the other part and it
[15:17] was really was a mess. The old
[15:19] system was
[15:21] computing each particle on the CPU each
[15:25] frame and then it had to sort of
[15:28] download all this data to the G graphic
[15:31] card every frame. To make these engine
[15:33] trails a reality in in Star Citizen, we
[15:36] had to bring together a team of people.
[15:38] It's not something that we could solve
[15:39] on our own as VFX artists. So we had to
[15:42] involve um graphics programmers to give
[15:44] us the features that our editor needs
[15:46] that we to kind of build these kind of
[15:48] engine trails. Lots and lots of
[15:50] particles for for example. So one thing
[15:52] that we didn't have in the editor was
[15:53] GPU particles with the support of the
[15:55] tech team and the code team. We're all
[15:58] working together to generate this this
[16:00] GPU particle system which is essentially
[16:02] the driving force of these trails and
[16:04] entry and exit effects because at the
[16:07] moment we can only put a certain amount
[16:08] of CPU particles on screen before it
[16:10] affects the CPU. Of course to speed up
[16:11] the system we have to reorganize the
[16:14] design uh based on how how a modern
[16:17] modern PC works. Data can take like a
[16:19] slow path and a fast path. And part of
[16:21] this is also to reduce the amount of
[16:23] data that the CPU has to upload to the
[16:26] GPU each frame. We can do it in a way
[16:28] where we only uploads when when the
[16:30] particle is born, the data gets
[16:33] uploaded. In some cases, we don't even
[16:34] have to the the data just need to be
[16:37] uploaded once and then it can sort of
[16:39] manage it itself on on the GPU without
[16:42] the the C CPU have to having to
[16:44] intervene very much. we have we have
[16:46] these two concept of uh deterministic
[16:50] and non-deterministic
[16:52] uh particles well not deterministic and
[16:54] nondeterministic states and the most of
[16:56] the states are deterministic which means
[16:59] that you you only need to upload them on
[17:03] birth well maybe some states can even
[17:04] state buffers can even be shared among
[17:07] uh multiple uh emitters and emitters is
[17:10] the the point or the area where new
[17:13] particles get get spawned from. So, so
[17:16] by separate doing this separation, you
[17:19] only need to update the states that are
[17:22] nondeterministic for all the other
[17:24] states. Well, you still need to know the
[17:26] state as a particular point in time, but
[17:30] but it's much faster to to compute. You
[17:33] not don't actually need to store the
[17:35] state. you can just sort of uh derive
[17:38] these formulas making those trails
[17:40] behave correctly through the gameplay
[17:43] and kind of react to what the ship's
[17:44] doing. That's where we needed the the
[17:46] game coder to um give us the kind of the
[17:49] hooks to trigger these effects. The code
[17:51] I write is made very generic. So, uh
[17:54] it's made so that all kinds of particles
[17:57] can be set up. So currently we're using
[18:00] the the engine trails as a test for this
[18:03] system, but it's supposed to cater to
[18:06] every kind of particle you can imagine.
[18:09] If it needs to be enabled, disabled, or
[18:11] the strength adjusted during game play,
[18:14] then the system should be able to handle
[18:16] that. I built up the system completely
[18:19] with data forge live preview in mind. So
[18:22] whenever you change anything in data
[18:24] forge, everything will be reloaded, will
[18:27] be adjusted to whatever you've set in
[18:29] data forge. So the game will have a live
[18:32] preview as the the feature says. So it
[18:35] allows VFX artists to more easily
[18:38] iterate over their VFX setup. Most of
[18:41] the time VFX artists will say like this
[18:44] should change a little bit. This should
[18:45] be thicker or thinner. It should be
[18:48] different. Then uh either I make it
[18:50] possible for them to do it themselves.
[18:52] So add a property to data forge. So so
[18:56] they can uh drag a slider make it
[18:58] thinner or thicker. But uh sometimes
[19:02] I'll have to go in code get some other
[19:04] strength from uh like the thrust source
[19:07] strength or the boost strength and add
[19:09] it in a formula so they can use it
[19:12] better. When all the effects are
[19:13] complete that we will be able to lay
[19:15] down the foundation of setting up new
[19:16] effects. Today for example I I finished
[19:19] the code for first iteration of
[19:21] collisions. Nondeterministic particles
[19:23] can like yeah you can shoot them into a
[19:26] scene and it will bounce off the the
[19:29] geometry in the scene. We have another
[19:30] feature and that's fields. It's a way to
[19:33] to compute the field around around the
[19:36] geometrical shape. So we we want to use
[19:39] this on on the ships. when you pass when
[19:42] you pass through particles, they will
[19:44] sort of get transformed along the field.
[19:47] The great thing about um engine trails
[19:49] and atmosphere is that even on the
[19:51] moons, it's going to be an atmosphere.
[19:52] Um so you're going to see in 3.0,
[19:55] there's going to be the three moons. Um
[19:57] they're going to have certain levels of
[19:59] atmosphere. They'll they'll vary, but
[20:00] you know, you're going to get some
[20:01] really nice kind of subtle atmospheric
[20:04] entry effects. with engine trails.
[20:05] Knowing where someone is is going to be
[20:08] so useful if you're flying around in a
[20:10] group, if you're, you know, not
[20:11] necessarily fighting against each other,
[20:13] if you're just flying around in a in a
[20:15] convoy or whatever, it's going to be
[20:16] really nice to be able to see where
[20:17] people are going. But also in combat as
[20:19] well, you're going to get a nice sense
[20:20] of kind of the visceral sense, I guess,
[20:22] with engine trails. That's going to
[20:24] provide quite a different experience to
[20:25] what we've currently got. For the
[20:27] player, they will notice this is the
[20:29] performance is is much better. With this
[20:31] new system, you can have I don't know
[20:34] you can have 10 or 100 of this effect
[20:36] and it still runs. Uh also we will have
[20:38] certain GPU features that wasn't just
[20:41] wasn't possible and it wasn't
[20:44] implemented in the whole system and in
[20:46] general our intention is that the the
[20:49] visual quality will be yeah much much
[20:52] better. It would be much cooler, much
[20:54] more dynamic effects. It's really great
[20:55] to be able to focus on um really cool
[20:58] new things that we can use again ac
[21:01] across the game really. The the hooks
[21:03] that we've got from game code now are
[21:04] going to help us drive all kinds of new
[21:06] new features and effects. The graphics
[21:08] side of things. The the new the new
[21:10] particle system itself is going to
[21:11] enable us to kind of create more stuff
[21:13] as well. So where we had maybe 100
[21:15] sparks before, we're going to be able to
[21:16] have a thousand sparks. And as a VFX
[21:18] artist, it's kind of exciting to be able
[21:20] to do that, especially on the scope of
[21:22] our game.
[21:24] [Music]
[21:35] Wow. Okay. So, pretty cool. Um, you
[21:37] know, we built a whole new uh GPU
[21:40] particle system so we can have, you
[21:42] know, thousands, hundreds of thousands,
[21:43] even millions of particles uh in a way
[21:45] that the old CPU system uh couldn't
[21:47] handle. And one of the main reasons for
[21:49] this was to be able to do things like
[21:51] engine trails, contrails, and various
[21:54] other effects that require, you know, a
[21:56] high amount of particles. And I I really
[21:58] think it'll make a big difference to
[22:00] space combat when you can sort of see
[22:02] the well, even in the atmospheric
[22:04] combat, you can see where the ships are
[22:06] moving and what direction they're going.
[22:08] And you, it's almost like you have a
[22:10] pretty cool vista. We showed it in some
[22:11] of the B-roll where you could sort of
[22:13] see this battle happening in the
[22:14] distance and engine trails and
[22:15] explosions. and I think it'll add a lot
[22:17] to the texture of space combat in Star
[22:20] Citizen and also Squadron 42. Um, so
[22:23] that's uh some of the cool stuff that's
[22:25] made possible by you guys. And that's it
[22:27] for today's episode. Thanks to all of
[22:29] our backers. It's your support that
[22:30] allows us to build the game we've always
[22:32] dreamed of. Yes. And thanks to our
[22:35] subscribers for making shows like this
[22:36] possible. July subscribers ship of the
[22:39] month will be the consolation. So be
[22:41] sure to crew up and take it out for a
[22:43] spin. Last month's ship, the
[22:44] Caterpillar, will be on sale for
[22:46] subscribers this weekend only. So, grab
[22:48] yours before it's too late. Yes. And
[22:51] don't forget to tune in tomorrow for a
[22:53] special happy hour where the community
[22:54] team will be answering your burning
[22:56] questions. Hopefully, I'm not sure if
[22:58] that's about entry or re-entry or
[23:00] whatever um about Star Citizen. And
[23:03] until next week, we'll see you around
[23:06] the verse.
[23:14] [Music]
[23:37] Thank you for watching. So, if you want
[23:39] to keep up with the latest and greatest
[23:40] in Star Citizen and Squadron 42's
[23:42] development, please follow us on our
[23:43] social media channels. See you soon.

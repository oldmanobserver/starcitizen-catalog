# Star Citizen: Around the Verse - Performance and Optimization

**Video:** https://www.youtube.com/watch?v=EU0sMZbhqoU
**Date:** 2018-03-08
**Duration:** 58:27

## Transcript

[00:15] hello and welcome to another episode of
[00:17] around the verse I'm Shawn Tracy
[00:19] technical director of content tech art
[00:21] tech animation general tools and engine
[00:23] tools and I'm sandy sandy Gardner so
[00:28] this week we bring you a very special
[00:30] episode we'll get to our monthly star
[00:31] citizen project update followed by a
[00:33] look at the ongoing optimization
[00:35] processes and Jessie Spano will learn
[00:37] about the dangers of too much caffeine
[00:39] what we're joking of course but this
[00:42] episode is special as it is our first to
[00:44] be filmed in front of a live studio
[00:46] audience
[00:52] [Applause]
[00:57] that's right we're very excited to
[01:00] welcome some of our subscribers joining
[01:02] us here today in our LA studio they're
[01:04] getting an up-close look at our studio
[01:05] as well as the absolutely thrilling
[01:07] world of a TV hosting segments and
[01:10] that's not sarcasm folks we've already
[01:14] had to pee a storm-off set and just
[01:15] minutes ago jarred flipped the craft
[01:17] services table you have craft services
[01:21] all joking aside we do have a lot to
[01:24] cover in our star citizen project update
[01:26] for March let's check in with Ricky
[01:27] Jetley and see what's been keeping the
[01:29] devs busy since our last update taken
[01:32] away Ricky hi and welcome to this one's
[01:35] update on progress for the persistent
[01:37] universe the UI visual team have been
[01:40] working on the visor vehicle status
[01:42] Holograms which have been extensively
[01:44] rewritten to utilize the new RTC
[01:47] technology developed by the render team
[01:49] previously vehicles displayed on the HUD
[01:51] visor were constructed using the same
[01:54] hierarchy as a separate entity from the
[01:56] vehicle you are viewing with the
[01:58] introduction of RTT the vehicle scene
[02:00] and the visor or MFT is now actually a
[02:03] rear ender of the full vehicle this
[02:05] means that rather than being an
[02:07] imitation of the target it's now a true
[02:09] reflection of what's in Weld or space
[02:11] and accurately reflects all the real
[02:14] parts and attachments like the thrusters
[02:16] and weapons this was accomplished by
[02:18] building a list of the render nodes that
[02:20] were selectively rendered to a render
[02:22] target using a custom material shader we
[02:25] can apply the color tinting to visualize
[02:27] the damage status of the vehicle parts
[02:29] whilst avoiding some of the more
[02:31] expensive features of doing a full
[02:33] physically-based
[02:34] forward render this render target
[02:36] vehicle can then be rendered whenever
[02:39] the player selects the own or target
[02:41] view on display this was hardwired to
[02:43] exist on the helmet visor in three Oh
[02:45] but in three one you'll be able to
[02:47] enable it on the MFD displays as well
[02:49] the visor and MFD displays all have
[02:51] their own render targets which the to
[02:53] DUI gets displayed on plus an optional
[02:56] camera that can show a vehicle to yes we
[02:59] have a render target objects rendering
[03:00] other render target objects it's all
[03:03] very inception and can be quite
[03:04] confusing working out who is rendering
[03:06] what sometimes
[03:07] we also use the same RTT technology when
[03:10] rendering the communication system often
[03:12] referred to its cons instead of
[03:15] selectively rendering the vehicle we
[03:17] actually rendered the full scene camera
[03:18] of the pilot to a render target so the
[03:21] player can see who they are
[03:22] communicating with this comms render
[03:25] target similar to the vehicle via status
[03:28] Holograms can then be displayed on any
[03:30] given displays render target whether
[03:32] that is a vehicle's MFD screen the mobi
[03:35] glass or the visor one thing we're
[03:38] introducing for the 3-1 release is the
[03:40] ability to dictate the camera angle when
[03:42] viewing your vehicle or the focus
[03:44] vehicle this allows the player to view
[03:46] them from a series of fixed camera
[03:47] angles such as top bottom left side
[03:50] right side etc this is the addition to
[03:53] the live view which shows the vehicle's
[03:55] orientation from the pilots perspective
[03:57] another piece of new tech we added 43.0
[04:00] and are improving 43.1 is how the
[04:03] vehicle displays it described initially
[04:05] we started with a fixed list of displays
[04:07] which were available per dashboard
[04:09] describing each of the displays
[04:11] available for example the Gladius pilot
[04:13] see has one heads-up display and six MFD
[04:16] display screens we have now added the
[04:18] ability to connect additional auxilary
[04:20] displays we currently utilize this by
[04:24] connecting the visor display and the 3d
[04:26] radar display this feature will
[04:28] eventually allow the player to customize
[04:30] their cockpit by allowing them to add or
[04:32] remove auxiliary displays as they desire
[04:34] when the visor connects to the dashboard
[04:36] it plugs in has multiple additional
[04:39] screens for the UI to utilize meaning we
[04:42] can pipe views from the various
[04:44] controllers to these optional visor
[04:46] screens some examples would be the
[04:48] target vehicle hologram the energy view
[04:50] and the weapon to you the procedural
[04:52] planetary team have continued to make
[04:54] improvements to the planet tech we added
[04:56] a new way to support multi channels
[04:58] while improving the color blending and
[05:00] breakup all of which operate at the same
[05:03] runtime performance costs as the current
[05:05] tech transitioning from the ground to
[05:08] orbit is now a much smoother experience
[05:10] thanks to the strides made in color
[05:12] blending we also separate the ecosystem
[05:14] procedural distribution setup from the
[05:16] rendering channels I setup which means a
[05:19] large number of these changes will be
[05:21] visible on yella in the 3-1 release
[05:24] finally we also improve the existing
[05:26] tools to reposition all planetary
[05:28] outposts automatically the environment
[05:31] team are finalizing the last few pieces
[05:33] of the truckstop exterior and are
[05:35] incorporating the new common element
[05:37] hangars with work on lighting polish and
[05:39] advertising to follow for interiors the
[05:42] procedural layer tool is now
[05:44] automatically generating lots of
[05:46] successful layouts for us overnight this
[05:48] is using only the base library of rooms
[05:50] available but we are already seeing some
[05:52] unusual and visually diverse layouts we
[05:54] estimate we've crunched through around
[05:56] 1000 layouts so far during the initial
[05:58] period of development not all have been
[06:00] suitable for use but it's a good
[06:02] indicator of the amount of variety we
[06:04] can achieve using the tool we have a
[06:06] number of ships and vehicles approaching
[06:08] the flight ready phase and the VFX
[06:10] Department have been a busy adding
[06:12] effects to them including the anvil
[06:13] terrapin the misc razor and the tumbrill
[06:16] cyclone as well as the aegis reclaimer
[06:23] [Music]
[07:41] they've also been focusing on impact
[07:43] reworks for weapons such as the Gemini
[07:45] r97
[07:46] the PRA our distortion Skagen and
[07:48] scourge railgun during their recent
[07:51] sprint EU gameplay for each team one
[07:53] completed all their new tasks work for
[07:56] the PM AVMA and are now in the process
[07:58] of bug fixing and polishing for
[08:00] inclusions in 3.1 another big push for
[08:03] the next release was to replace the
[08:05] bespoke customization screen we
[08:07] currently have for star marine to bring
[08:10] it in line with the codebase already
[08:11] shared between arena commander and the
[08:14] loader apps in MOBA glass this will
[08:16] allow us to only update one single piece
[08:18] of code that is shared across all
[08:20] loadout customization screens it's a big
[08:23] saving for code as we only need to fix a
[08:25] bug once rather than multiple times this
[08:28] means that each interface for the
[08:29] players only need to learn a single
[08:31] system so any user experience
[08:33] improvements will be felt on all loadout
[08:36] screens for the future the appearance is
[08:38] admittedly still very rough as we've
[08:41] been focusing our attention on making
[08:43] sure the code works correctly and that
[08:44] the functionality is not lost
[08:46] in fact switching to the new interface
[08:49] means their players can now mix and
[08:50] match light medium and heavy armor
[08:53] pieces individually with the weight of
[08:55] armor playing a more important role the
[08:58] stability for star marine players to
[08:59] customize various parts adds an
[09:02] extremely good level of strategy to the
[09:04] game the code work for this
[09:06] functionality is now in place so the UI
[09:08] team will begin updating the visuals and
[09:10] bringing the quality over the next week
[09:12] for 3/1 at the same time the UI team is
[09:16] also hard at work on wider visual
[09:18] improvements to the MOBA class up itself
[09:19] along with prototyping the new layout we
[09:22] showed a few weeks ago an ATV we're also
[09:25] looking at ways to increase the
[09:26] visibility of MOBA glass in general one
[09:29] of the big improvements we're hoping to
[09:31] achieve is for the mobi glass to occupy
[09:33] more of the screen space in an effort to
[09:36] increase the legibility and clearly
[09:38] display the many visual elements finally
[09:41] the teams looking to bring up the
[09:43] quality of the apps by adding additional
[09:45] improvements to the rendering rules and
[09:47] shaders applied to the 3d models we
[09:50] should create a very good noticeable
[09:51] improvement to inventory management for
[09:54] three
[09:54] 1-1 the tech art team in LA has been
[09:57] continuing to work on the character
[09:59] customizer a new looping idle animation
[10:01] was chosen to provide some variation in
[10:03] body movement instead of a single
[10:06] deadpan facial animation a selection of
[10:08] more expressive facial Alan's were
[10:10] implemented and randomized in mannequin
[10:12] to bring more life to the character
[10:14] model in addition all selected options
[10:17] now have work-in-progress icons with the
[10:20] technology needed to display preview
[10:22] icons for selectable items like skin
[10:24] tones and hair colors which will now be
[10:27] complete the final polished icons for
[10:29] each selection types are planned for the
[10:32] near future
[10:32] next the non head body parts had a
[10:35] specular highlight passed by the
[10:36] character team after the team decided
[10:38] that the heads needed a polish path to
[10:40] match the rest of the body parts as well
[10:42] as a line pass to add fidelity to the
[10:45] head detail another area of focus is a
[10:47] transition between the head and body
[10:49] textures previously a visible scene was
[10:52] noticeable between the head and the
[10:54] torso so the team worked on making the
[10:56] transition much smoother thus removing
[10:58] the scene we have also had significant
[11:01] improvements to the camera system the
[11:03] field of view camera position and the
[11:05] depth of field parameters were adjusted
[11:07] to create a more dramatic presentation
[11:09] of the selection character in the
[11:11] environment and finally for this team
[11:14] various issues with persistence
[11:17] specifically saving and entering the pu
[11:19] have been addressed some bug's popped up
[11:22] while working on the character
[11:23] customizer like selecting items saving
[11:26] and then entering the pu other issues
[11:29] such as quickly skipping through
[11:31] selections or cancelling were also
[11:34] discovered and addressed teams in Austin
[11:36] Los Angeles have been working on the
[11:38] service beacon which marks the beginning
[11:40] of the player generated content although
[11:43] this is only the beginning 43.1 were
[11:46] planning on allowing players to pay each
[11:48] other for services such as personal
[11:50] transport or combat assistance once a
[11:53] contract has accepted quantum travel
[11:55] markers will be created on the contract
[11:57] initiator so the service provider can
[11:59] easily get to them both parties will be
[12:02] able to see where the other person is
[12:03] while the contract is active either
[12:06] party involved in the contract can can
[12:08] anytime but be warned you'll be able to
[12:11] raid the other person where contract
[12:13] completion is not easily determined for
[12:15] instance when does combat systems end we
[12:18] are close to finishing our second sprint
[12:20] on this feature we're still trying to
[12:22] get the backend services for the system
[12:23] online and we've been running into a few
[12:25] issues where the system is not yet
[12:27] communicating properly with the
[12:29] diffusion services that keep us multi
[12:31] server and multi thread safe the
[12:33] character team spent some time fixing a
[12:35] few bugs that were preventing helmet
[12:37] lights from operating as expected such
[12:39] as one example where lights persisted
[12:41] when you take off your helmet the team
[12:44] has also been working on an annoying bug
[12:46] where players were able to wear their
[12:48] hats and helmets at the same time that's
[12:51] it for this month's update for the work
[12:52] being done on the persistent universe as
[12:54] always thanks to our subscribers for
[12:57] sponsoring this and all of our shows and
[12:59] of course thank you to all our backers
[13:02] for continuing to support the
[13:03] development of both Star says and
[13:05] squadron 42 we'll see you next month
[13:08] thanks Ricky as you can see from ship
[13:11] hood improvements to planet tech - Moby
[13:13] glass enhancements so the devs remain
[13:15] busy with the push towards alpha 3.1 yep
[13:18] there are many features and upgrades
[13:19] like these planned for all four of our
[13:21] quarterly releases throughout the year
[13:22] one item that will be particularly
[13:24] focused on now is performance
[13:26] optimization yes these ongoing
[13:28] improvements to frame rate will continue
[13:30] to be developed throughout the alpha
[13:31] phase and beyond let's hear more about
[13:34] the entire optimization process from the
[13:36] team that's been working on it in this
[13:38] week's feature
[13:46] optimization one of the big big big big
[13:49] things that we're trying to focus on
[13:51] this year the biggest problem is we have
[13:53] a wear space game right we have a lot
[13:56] and I mean a lot of entities too many to
[14:00] count
[14:00] and I'm sure someone will put a number
[14:02] somewhere the more entities you have
[14:04] sometimes they need to do some complex
[14:05] logic and they may have to update to add
[14:09] a timer check a timer do something to
[14:12] continue the game going forward and if
[14:15] you have a lot of these it could be a
[14:17] very problematic thing if everyone has
[14:21] to update these every frame if there's
[14:24] 5,000 things that's five tiles and
[14:26] things someone has to do before the next
[14:28] frame could occur from a book ID few a
[14:32] video game as a visualization of an
[14:34] simulated virtual bird constructed out
[14:36] of a basic update loop consisting out of
[14:38] a few simple steps sample input external
[14:42] inputs I accept at the beginning of the
[14:44] frame so that game can react to those
[14:46] such input can be keyboard mouse
[14:48] controller input but other network data
[14:51] in case of a multiplayer game update
[14:53] words dead the virtual world has a state
[14:56] such a state is a multitude of things
[14:58] like the kind of objects which exist
[15:00] it's a position their color player heads
[15:02] values and so on this state can change
[15:06] over time for example an egg and walk
[15:08] from point A to point B doing the steps
[15:11] that changes over time are computed the
[15:14] SD wendice in the last step during each
[15:17] frame so when knowing here it is data
[15:19] mined what is visible to allow the play
[15:21] I look into the simulated virtual world
[15:23] objects which are determined to be
[15:26] visible as and worn on the display we
[15:28] will focus on the update simulation and
[15:30] when the scene steps those are the
[15:32] performance critical ones without going
[15:35] into too much detail it can be said that
[15:36] each of those steps requires a fixed
[15:38] amount of operations mathematical or
[15:41] logical to update the word state and
[15:43] refresh the displayed image if all those
[15:45] operations can be done within one
[15:47] sixtieth of a second as within 60
[15:49] milliseconds we redo the rule update
[15:52] loop 60 times each second resulting in
[15:54] 60 fps
[15:55] frames per second but the source
[15:57] operation take 50 millisecond the game
[15:59] will refresh a scene only 20 times a
[16:01] second
[16:02] resulting in 20 FPS the real point of
[16:05] performance optimization is to find ways
[16:07] to reduce the fixed amount of operations
[16:10] to be able to execute them within the
[16:12] target firmware on the target hardware
[16:14] to better explain what performance
[16:16] optimisation consists of in modern games
[16:18] the previous mental model of the basic
[16:20] update loop must be extended by some
[16:22] more details by the upcoming explanation
[16:24] will still omit many parts it forgives a
[16:27] more accurate explanation of interaction
[16:29] of various hardware components like CPU
[16:32] and GPU to go back to the initial
[16:34] example a single frame looks like this
[16:37] here we use an imaginary execution unit
[16:40] which does all the processing for the
[16:42] word update and to see my name the input
[16:45] sampling is omitted as it is generally
[16:47] doesn't affect performance but nowadays
[16:50] practically each computer has a chip
[16:52] specifically developed for rendering the
[16:54] GPU those two workers normally split
[16:57] between the CPU and GPU it is
[17:00] immediately clear that such a setup is
[17:02] not very resource efficient the GPU and
[17:04] CPU are running in lockstep and only one
[17:07] of the two chips actively doing
[17:09] computations at a time you can improve
[17:11] the situation by letting the GPU work on
[17:13] one film by the CPU update the
[17:15] simulation of the next film in parallel
[17:17] this pattern is called pipelining and
[17:19] appears everywhere and working with
[17:22] computers for example and watching
[17:23] online videos the next few frames are
[17:26] downloaded by the already downloaded
[17:28] films a processed and displayed in
[17:30] parallel but pipelining doesn't come
[17:32] without implications and the CPU
[17:35] produces the data faster than the GPU
[17:37] can process it the GPU will act more and
[17:39] more behind the flaking behind will be
[17:42] perceived as additional latency on top
[17:44] we need to store the CPU computed state
[17:46] some main memory by the GPUs and
[17:48] relative processor and there's no device
[17:51] as infinite memory we need to stop the
[17:53] CPU at some point and love the GPU to
[17:55] catch up as we cannot store more state
[17:57] forever here we speak of CPU being
[18:00] blocked waiting for the GPU a starter
[18:03] doesn't be generally up for better
[18:04] latency in only love's GPU to lag behind
[18:07] up to 1
[18:08] the same problem can happen the
[18:10] different valve on if the consumer is
[18:12] processing the data faster doesn't the
[18:14] producer which is called starvation in
[18:17] general one component will always be
[18:20] slower than all other components which
[18:22] implies that the game will always be
[18:24] bound by something here CPU or GPU does
[18:27] the first goal of performance
[18:28] optimization is to identify which
[18:30] components perform to spawn if the
[18:32] framerate won't be affected if you
[18:35] optimize GPU performance by the GPU as
[18:37] already started this approach is also
[18:39] called critical path analysis as it
[18:41] helps to identify the fast which
[18:43] terminates performance a similar complex
[18:46] situation emerged on multi sweating CPUs
[18:48] the HDP you know is a multiplex acute in
[18:51] units which we refer to as hard
[18:53] passwords to cope versus strategies you
[18:56] need to be found to distribute
[18:57] separations over the different Hardware
[18:59] sweats the obvious choice is to use the
[19:02] same pipe any approach as with GPUs but
[19:04] that has two large 12x and CPUs work
[19:08] balancing a Shawn and GPU CPU examples
[19:12] the system will always be bound by the
[19:14] slowest component to parented CPU work
[19:17] we would need to find chunks of work
[19:19] which alert chico together and always
[19:20] takes the same time this in itself was
[19:23] very hard to impossible in a dynamic
[19:25] game and with the increasing number of
[19:27] hardness wet CPU cores we would soon run
[19:29] out of systems to put beside each other
[19:31] it would either need a specific set up
[19:34] for each different CPU core count
[19:35] residing in a maintains nightmare which
[19:38] is why our chosen approach is to batch
[19:40] the privations and to utilize inherent
[19:42] parallelization found in video games for
[19:44] example there's fairly only once in your
[19:47] character to update so we can put each
[19:49] different character onto a different CPU
[19:52] core the theme happiness was any kind of
[19:54] objects which we have this pattern
[19:56] allows us to scale more flexible with
[19:58] the CPU cores the process to change all
[20:01] the game logic is ongoing
[20:02] and we are moving more and more parts of
[20:05] the game logic over to this approach to
[20:07] atlast more CPU cores more frequently
[20:09] and improve our performance in port
[20:12] Latin see the roots 30 with 60fps
[20:15] discussion in the context of games it's
[20:17] not only about our curriculum refreshes
[20:20] and it
[20:21] visual quality this other about input
[20:24] latency input latency is normally
[20:26] measured in firms if each firm needs a
[20:28] fixed amount of operations regardless of
[20:31] the underlying hardware so if we need
[20:33] three frames from user input say we
[20:35] display an effect the input will have an
[20:37] input latency of three times 60
[20:39] milliseconds resulting in their 48
[20:41] milliseconds even running with 60fps if
[20:45] our games run to 30 FPS which means a
[20:48] firm duration of Seleucia milliseconds
[20:50] it will have an input latency of 99
[20:52] milliseconds nearly doubling the time
[20:54] between input and a visual reaction
[20:56] without being less fluent impression of
[20:58] the game adding more part banding here
[21:00] would only increase the perceived
[21:02] latency which is why we try to not
[21:05] depend on pipelining for performance on
[21:07] the CPU even if it would result in a
[21:09] better frame rate if it will cost us a
[21:11] verse and not really acceptable input
[21:13] like one of the questions we get asked
[21:15] quite a lot is with our server having a
[21:19] target frame rate of 30 frames a second
[21:21] and clients having their target frame
[21:24] rate of 60 frames a second how's that
[21:27] possible
[21:28] why aren't they tied together and the
[21:30] reason for that is that we're not
[21:31] operating in something called lockstep
[21:33] and lockstep would be where the server
[21:35] sends an update and the client has to
[21:37] wait until it receives an update before
[21:39] it goes okay this is where they sense
[21:40] the should be and then has to wait for
[21:42] another update and goes right ends these
[21:44] moves to here and so on what we actually
[21:46] do is the several sanity's updates 30
[21:51] frames a second the clients running at
[21:54] 60 frames a second in theory the client
[21:57] should receive an update for entities
[21:59] every two frames so it has to kind of
[22:02] guess what's happened in the middle
[22:05] frame so basically what it's doing is
[22:08] its locally simulating all the entities
[22:10] so an entity moving across the flat
[22:13] plane fixed speed and a fixed direction
[22:16] it can guess where the entity should be
[22:20] at each point and it'll get the yet the
[22:22] next update from the server and go
[22:24] mm-hmm that's slightly out from where it
[22:27] should be uh needs a nudge that one a
[22:28] little bit over to the left a bit layer
[22:30] down on all the entities turned a bit so
[22:32] I need some logic
[22:33] a little bit over the other way so that
[22:35] allows that the client the service have
[22:37] different frame rates and we don't have
[22:39] to worry about doing something like
[22:41] operating in lockstep or any other
[22:43] language which can cause big issues
[22:45] because of latency on the set on the
[22:48] internet and how that varies quite
[22:50] randomly all the time it would be quite
[22:54] a bad experience it's alright for things
[22:57] like ten based games and but something
[23:00] like you know a live-action game like
[23:03] we're trying to David it's just not
[23:04] going to work
[23:05] reducing the amount of operations can be
[23:07] achieved in multiple ways which one is
[23:10] used mostly depending on the current
[23:11] situation time to implement it and so on
[23:14] most often multiple approaches are as a
[23:16] combined detecting objects too far away
[23:18] to absorb as a player here we need to
[23:21] decide after which distance you want to
[23:23] disable objects what to do it's a gray
[23:25] area of an object's are barely visible
[23:26] how to make it look like objects moved
[23:29] by the player wasn't looking at it in
[23:31] various other corner cases let us assume
[23:35] a system where we need to keep track of
[23:37] 1000 objects in a single list if we
[23:39] delete such an object you must remove it
[23:41] from our list the straightforward
[23:44] approach is to check each entry in our
[23:46] list for our object and we found it we
[23:49] will move the object afterwards we copy
[23:51] each following object in the slot before
[23:53] it to fill up the hole from removing the
[23:55] object this will always require 1000
[23:58] operations such an approach can work
[24:01] well for a small list but if the list is
[24:03] large or if you remove objects very
[24:05] frequently it will take a good chunk of
[24:07] our precious operation budget just we
[24:09] need a smarter solution inside each
[24:12] object we will remember the position
[24:14] inside our list
[24:15] let me now remove an object we
[24:17] immediately know it's position then we
[24:19] can take the last element in the list
[24:21] place it into the hole and update its
[24:23] reference to this moved object missus
[24:26] we're down to four operations from 1000
[24:28] which is a nice performance game but the
[24:31] other change to behavior if you know we
[24:33] are the objects in our list such ririn
[24:35] can be okay or not depending on how the
[24:38] objects in the list are used this was
[24:40] only one example of an optimization of a
[24:42] very small part of Cebu game
[24:44] in general
[24:46] the wool optimization processes
[24:47] iteratively finding where the game is
[24:50] bound CPU GPU of each CPU sweat batch
[24:53] and come up with a better solution to
[24:55] use less operations for the most
[24:57] expensive sections there are many moving
[25:00] pieces to this puzzle generally the tech
[25:04] content or tech art people will be
[25:08] focused on the GPU side of the thing the
[25:10] the number of draw calls we have about a
[25:14] budget of about 2500 draw calls for all
[25:17] ships on screen at one time and a ship
[25:20] can be anywhere between 500 draw calls
[25:22] to 800 draw calls at its highest
[25:24] resolution so we try to optimize that as
[25:30] best we can we have a few tricks in our
[25:33] bag to do that one of the things is LOD
[25:37] s we have artists creating a level of
[25:39] detail meshes which reduce the number of
[25:41] polygons and reduce the materials as you
[25:44] go into the distance these are being
[25:46] hand done and also generated by our
[25:48] simplygon tool we're also reducing the
[25:52] damage we're doing or reworking some
[25:55] damage on old legacy model ships say
[25:58] that like the Mustang when you blow up a
[26:00] ship you have all these little pieces of
[26:02] debris that used to be hand modeled now
[26:06] we actually just break the ship hull in
[26:09] half and and change the shader so you
[26:12] see some little called UV to damage this
[26:15] reduces the number of debris items and
[26:17] therefore reduces the number of draw
[26:18] calls quite a bit a draw calls are liked
[26:21] and material passes on a mesh so we're
[26:24] really one of the other ways we can
[26:26] reduce draw calls is by combining meshes
[26:29] together and what as a process called
[26:32] skinning and as I work on landing gear I
[26:35] can take many pieces of the landing gear
[26:39] Pistons and gears and and the feet and
[26:42] combine them into one mesh and I drive
[26:45] that all through a skeleton so instead
[26:47] of 10 pieces with 10 draw calls each you
[26:50] get one mesh with 10 draw calls so
[26:53] really good significant savings there
[26:55] another trick that we do is call
[26:58] with our viz areas and portal culling so
[27:02] when we're on the outside of the ship we
[27:04] don't want to draw the interior and even
[27:08] when you're another room in the ship we
[27:09] don't want to draw the next room you can
[27:11] think of portals as as like as I get
[27:14] door when it's open it draws the inside
[27:16] of the room when it's closed it calls
[27:19] the room in the geometry out we use our
[27:23] visitor portals to connect to the doors
[27:26] which animate open and close and then
[27:28] drive the portal to turn on and off and
[27:30] like say the caterpillar those doors are
[27:34] skinned so they're optimized and they
[27:37] have portals on them you will have
[27:39] noticed there are some issues with the
[27:41] portals recently and we are working on
[27:44] about four or five major portal issues
[27:47] but we will get them and it will be you
[27:50] know a faster and cleaner and you can
[27:53] walk outside again and then see the
[27:55] exterior in space by standing on your
[27:59] deck another thing that's being worked
[28:01] on right now is called signed distance
[28:05] fields and this is a technology that our
[28:08] Chris Rayne is working on it's a
[28:11] different way of describing a volume by
[28:15] recording these distances so it's stores
[28:20] distances and what we've done to this
[28:22] point is use a volumetric approach where
[28:26] we have these box holes and we fill the
[28:28] ships with voxels and this gives us our
[28:30] local physics grid but when we move to a
[28:33] signed distance field it'll be much
[28:35] faster we can describe shapes much more
[28:38] a much higher resolution and we'll know
[28:43] more immediately if you're inside the
[28:45] ship or outside the ship colliding with
[28:47] the ship or not this is gonna open the
[28:50] door for new shield tech a new visual on
[28:54] the shields so instead of a bubble
[28:56] that's kind of you know loosely shaped
[29:00] around the ship you'll see a very tight
[29:01] shield that that pushes just out from
[29:05] the plates of the ship and also one of
[29:08] the things we're excited about is of
[29:10] course when we break the ship's in half
[29:11] the
[29:12] sighing distance feels gonna is like a
[29:13] first step in getting us our multi
[29:16] physics grits so we'll be able to keep
[29:18] the interiors around and then allow you
[29:20] to reclaim and walk around in the end
[29:24] the ships after a battle so you'll find
[29:28] new items and things that way Network
[29:30] code was a big performance bottleneck on
[29:33] the server and the reason being the that
[29:37] 24 clients that we were supporting and
[29:41] PU at the time to gather all the
[29:45] information from the simulation had to
[29:48] write it out
[29:49] 24 times to each different Channel and
[29:52] the way it would do this is if you think
[29:54] about different threads each CPU doing a
[29:57] different amount of work you kind of
[30:00] have the the main thread running along
[30:02] this way coming right there's a frame
[30:05] there's a frame and each point in the
[30:08] frame towards the end of the frame won't
[30:09] go right now that Wako go off do you
[30:12] think right some store folks and that
[30:14] work go it on the phone go okay right
[30:16] and start doing stuff and as long as it
[30:19] is finished before the main thread
[30:21] started the next frame everything was
[30:23] fine but if the network code is running
[30:25] a bit slow then it would stall the next
[30:30] frame on the main thread it causes that
[30:32] some wait until the network started
[30:33] finished by the time 3.0 came out we
[30:37] kind of well came out with quite a few
[30:41] the network changes that we've been
[30:43] planning so without the introduction of
[30:46] serialize variables that's been him for
[30:48] quite a while
[30:49] by the time 3.0 came out pretty much all
[30:52] of the game code had been conveyed from
[30:54] using the old aspects and our mind
[30:57] systems to the replacements which is
[31:00] serialize variables and remote methods
[31:03] and what that meant for us is that we
[31:06] could focus our efforts on optimizing
[31:09] one particular code path and we just
[31:12] leave the legacy system not performing
[31:15] as well as we'd like but because not so
[31:16] much stuff who's using it it's not
[31:18] really an issue the big kind of
[31:21] difference we made the serialize
[31:22] variables is that the fat
[31:25] from the game saying okay what's the
[31:27] state of everything but the things that
[31:29] have changed and we need to update watch
[31:31] the current state because I need to send
[31:33] that across the network that was
[31:34] paralyzed so instead of the network
[31:38] thread doing all the work at a
[31:40] particular sing point with the main
[31:41] thread it would just go okay how many
[31:43] threads have we got available okay all
[31:45] of you go and group grab some data and
[31:48] send out some that way and then the next
[31:50] part would be okay now we need to take
[31:53] that data and we need to send it off to
[31:55] each of the different channels so that
[31:58] they know that they need to do some work
[31:59] and the channel being a the network
[32:01] codes representation of a climb so then
[32:04] that was paralyzed as well and then the
[32:07] final part before our lives was the okay
[32:09] now we've actually all the channels
[32:11] we've got the day that they need to send
[32:12] we need to actually go and send it so
[32:15] that was paralyzed as well so we went
[32:17] from one thread doing all the work just
[32:20] splitting it over as many threads as we
[32:23] had available so on the clients we've
[32:25] kind of got the opposite situation where
[32:28] they're receiving all these updates on
[32:30] the server it'll come in through the
[32:34] socket they'll get processed by the
[32:37] network thread and then there'll be a
[32:39] sync point with the the main thread
[32:41] it'll go okay right
[32:42] no it's ready I mean photos ready here's
[32:45] all your data this is what's being
[32:47] received from the server right go off
[32:48] and do you next you know be a simulation
[32:50] that part has always been pretty pretty
[32:54] quick to be honest and Hong Kong clients
[32:58] were talking about roughly a millisecond
[33:02] to process all that they had even though
[33:04] it takes proportionally quite a lot
[33:06] longer to write the day erect and
[33:09] package it all up on the server the
[33:11] unpacking of it's out always been quite
[33:13] quick so the network code itself has
[33:17] never been a performance issue and for
[33:22] clients because they're mostly just
[33:23] receiving data from the server and what
[33:25] they actually sent is so much smaller
[33:28] than what the server sends that it's
[33:30] never really been an issue for them at
[33:32] all so buying calling supposed to
[33:34] address this say
[33:37] this mismatch between client and server
[33:39] the share process and power that you
[33:41] have on servers and their ability to
[33:44] process everything and the much smaller
[33:46] processing power than most clients will
[33:48] have and the idea behind buying Colin is
[33:51] that a clients only really interested in
[33:54] what's immediately around it anything
[33:57] that's on a different planet or a couple
[34:00] of hundred kilometers away and even out
[34:02] in spaces no no way you could reasonably
[34:05] say it just shouldn't be there and by
[34:11] that I literally mean that your client
[34:13] should not know about it at all that
[34:15] would save all the processing of those
[34:18] entities on the client it would save a
[34:21] bit of processing work on the server
[34:24] because it doesn't have to communicate
[34:26] information about those entities to your
[34:28] client so it's definitely something we
[34:30] want to do and it's just it's not
[34:36] particularly easy thing to do you need a
[34:40] way of controlling the updates on the
[34:48] server so that it's only updating not
[34:51] all the entities it knows about but it's
[34:53] only updating the ones that it knows are
[34:55] in range of any player at all so the
[34:58] ones that no player can see just doing
[35:00] little date and it saves processing time
[35:02] on the server and we've had to change
[35:04] assumptions on the networking code side
[35:08] where previously it would say okay I've
[35:12] got an entity it's a network density
[35:14] every client needs to know about this
[35:16] and be assumptions all the way through
[35:18] the network code that relied on that not
[35:21] being true so we've got to change all
[35:23] those and so it's a bit by bit process
[35:26] that we've kind of unraveled stuff and
[35:28] add the new stuff and optimize stuff
[35:31] that will allow Baron Collins to be
[35:32] possible and we're almost there that and
[35:35] the steps that are left are really if
[35:38] you imagine a situation that you've got
[35:40] buying calling in and entities that
[35:42] aren't immediately around your clients
[35:45] don't exist what happens when you fly to
[35:49] a different location
[35:50] so you quantum travel to a different
[35:52] planet you need all those entities to be
[35:54] there so they have to be spawned so say
[35:56] I was good to tell you about those
[35:58] entities information comes over the
[36:01] network and then your client has to go
[36:03] and create them up until now all the
[36:05] entities all the entities spawning as
[36:07] being synchronous or called blocking
[36:10] which means that the point in the code
[36:13] where it says why I need this entity
[36:15] it'll basically stop whatever it's doing
[36:18] it'll go and load the data in for that
[36:21] entity create the entity itself register
[36:24] it with physics and whatever else it
[36:26] needs to do and then go okay this
[36:28] function can exit let's carry on and do
[36:30] the rest of the game so we need a
[36:32] synchronous fantasy spawn which is also
[36:38] known as object container streaming the
[36:41] idea being that a client will get a
[36:43] message from server and go okay I need
[36:46] this entity he'll go off and go okay
[36:48] well what files does a sense they need
[36:52] to load what data doesn't need to load
[36:53] so I'll go off and do that on the
[36:55] background thread okay I finish loading
[36:57] that okay now I can create the entity
[37:00] and it's not stalled the processing of
[37:02] the game it's not stalled your clients
[37:04] at all while that's going on you can
[37:05] continue to play so obviously that takes
[37:08] a bit longer so the trick is to try and
[37:12] make sure that you finish spawning
[37:16] entities by the time they actually
[37:17] appear so you've got to kind of
[37:19] preemptively decide to sport and stuff
[37:21] so that we need this object container
[37:23] streaming that's that's the technology
[37:26] that's gonna allow us to do the streamed
[37:28] events these in in order to be able to
[37:30] make fine calling work so what I really
[37:32] want to do is develop the by uncle in
[37:34] technology finish it off as early as
[37:37] possible so the in-house we can be
[37:39] testing it and making sure that it works
[37:43] finding all the problems that it's gonna
[37:45] cause perhaps an example of that would
[37:47] be say you've got a mission from a
[37:51] mission giver and miles a car and you
[37:56] need to forego on five miles four miles
[37:58] of sat in this bar in Levski and you're
[38:02] on port olisar
[38:04] so we need a little marker rendering on
[38:06] your client to show where miles is so
[38:08] you know where its head but with barn
[38:11] calling the miles I heart and see won't
[38:14] be there so what to be draw the marker
[38:17] on so they'll kind of problems we need
[38:19] to try and figure out ways to deal with
[38:21] that there's a couple of different ways
[38:23] we could do with that situation but
[38:25] until we do we can't really put bond
[38:29] calling in because it could break the
[38:30] gameplay probably going to see the full
[38:32] implementation of buying calling in
[38:34] until so we get object containing a
[38:37] stream in it and put frozen internally
[38:40] we need to get it as soon as possible so
[38:41] that we can we can move on with some of
[38:43] the other stuff that were planning so
[38:46] what we've kind of done which is another
[38:48] thing so I've mentioned buying colon of
[38:50] mentioned object containing extreme then
[38:52] there's also serialized variable culling
[38:56] and which is because we can't do barn
[39:00] calling just yet because gone get out
[39:02] into the hands of the backers and
[39:04] serialize variable culling is what we
[39:07] can do so the way that works is same
[39:11] sort of distance checks that we're doing
[39:12] before and if an entity is too far away
[39:17] clients the server will just say you
[39:20] know what I'm not actually going to send
[39:22] you any updates for that entity and what
[39:26] that will mean is that because the
[39:30] entities not receiving any updates on
[39:31] the client the client can go okay well I
[39:34] can put this entity to sleep I don't
[39:37] need to do any CPU processing on it you
[39:41] can just stay where it is so you can get
[39:43] a lot of the performance gain that we'd
[39:46] hope to see from behind calling from
[39:48] this serialize variable to the size of
[39:50] our games are generally not very
[39:51] optimized during development it's very
[39:54] clear that the faster version is more
[39:55] complex and as more state even the small
[39:58] example and more complex code means more
[40:01] places where something can go wrong
[40:02] resulting in a bug because offices you
[40:05] always have to decide on the trade-off
[40:07] between production speed and performance
[40:09] if we focus everything on performance
[40:11] feature development will be slowed down
[40:13] a lot including future features as I
[40:16] need to be develop
[40:17] against more complex code base to make
[40:19] it even worse we could optimize all this
[40:21] code just to later realize that the
[40:24] specific part was not really needed or
[40:27] we need to implement something else
[40:29] entirely as a feature was simply not fun
[40:31] there's a famous quote premature
[40:33] optimization is a root of all evil in
[40:36] other words we need the rules
[40:38] final system to correctly understand and
[40:40] analyze it to make meaningful
[40:41] performance optimizations but so much
[40:43] for the theory the critic reality our
[40:46] game can already be played and playing
[40:47] with 15fps it's no fun to help the code
[40:50] leads and production to decide which
[40:53] features optimization should be focused
[40:55] on we perform a performance analyzation
[40:57] sometimes with features need
[40:59] optimizations to work our features
[41:01] needed to implement an optimization
[41:03] resulting in dependencies between
[41:04] developers making the group progress
[41:07] more complex other times code changes
[41:09] are trickier than expected we're going
[41:11] to do too much risk shortly before
[41:13] release reciting the new trickle-down
[41:15] effect of delays for other optimizations
[41:18] or features we use a set of different
[41:21] tools for performance analyzation the
[41:23] very basic tool we are using with a
[41:26] classic sampling profiler
[41:27] such a profiler works by stopping the
[41:29] CPU at a fixed time interval and
[41:31] recording what the CPU was doing at that
[41:33] time if a function needs a lot of
[41:35] operations to live a higher chance to be
[41:38] executed when the CPU is sampled
[41:40] resulting in a higher sample count which
[41:42] indicates a high cost function won't
[41:45] work of assembling profiler so it only
[41:47] shows a function where the time spent
[41:49] but no context of either function was
[41:51] executed on the CPU in relation to what
[41:54] other code or high-level state of the
[41:56] game like the number of active vehicles
[41:58] for this we use mostly use an
[42:00] instrumented profiler which shows
[42:02] executed function antelope when Alera t
[42:04] but shows what CPU cores executing when
[42:07] this profiler can either show us plots
[42:10] of certain performance values we are
[42:12] interested in those truths are very
[42:14] useful to analyze a specific situation
[42:17] but star citizen is a different beast we
[42:20] have up to 50 players and many more
[42:21] planned on a single shirt server which
[42:24] as execute the physics simulation this
[42:26] means what any player is doing can
[42:28] affect other players is about making
[42:31] sure
[42:31] as law caused me to run my operations
[42:33] which can be observed indirectly as
[42:36] jumping movements on the clients Weber
[42:38] bending and so on all effects of the
[42:40] server not sending updates frequently
[42:42] enough when they need to replicate the
[42:44] server behavior and we also been looking
[42:46] at some of the telemetry frameworks that
[42:51] we use to actually help us visualize and
[42:57] track what the actual performance issues
[43:02] within the game inside the codebase
[43:05] actually are some of the improvements
[43:08] we've done to the telemetry for example
[43:10] allow us to capture data automatically
[43:15] during our play tests the day it would
[43:19] automatically be captured when the
[43:21] framerate drops below a certain
[43:23] threshold so for example we can use this
[43:28] kind of auto capturing to make sure we
[43:32] grab moments where we see these nasty
[43:37] bugs occurring which cause big
[43:39] performance drops we would then take
[43:42] this data onboard analyze it as a team
[43:45] and then look to see where the problems
[43:48] were lying the various problems could
[43:51] then be either addressed by some of the
[43:54] engineers on the performance team or in
[43:57] certain cases we might actually find
[44:00] that the ownership of the the issues in
[44:03] question would will be from engineers on
[44:07] other teams so in that case we'd have to
[44:09] coordinate with them to look at fixing
[44:12] off certain issues that that might have
[44:16] cropped up in the play tests it's
[44:18] currently quite early stages for the
[44:21] auto capturing and with the new
[44:23] telemetry system but the initial tests
[44:26] seem quite positive so we're hoping for
[44:29] free one that we see in a lot of these
[44:31] nasty issues a lot sooner and we're able
[44:35] to fix them up in plenty of time for the
[44:38] actual release some of the other things
[44:40] that we've looked at adding to trap the
[44:44] perform
[44:45] are some auto tests the auto tests would
[44:50] be run by a test build machine once per
[44:57] internal bill but we do these these
[45:01] internal tests would be something like
[45:03] having a automated player walk around a
[45:07] busy area the games such as Levski or it
[45:10] could be have the player spawn in into a
[45:14] ship alongside 30 AI ships and these
[45:20] auto tests would track various framerate
[45:23] statistics
[45:25] allowing us to see as we go from build
[45:28] build is our performance improving have
[45:34] we accidentally pushed the performance
[45:37] back a bit in which case these tests
[45:40] allow us to catch issues as they arise
[45:42] and whilst they don't necessarily give a
[45:46] perfect measure of the performance that
[45:50] we're likely to see in the live
[45:51] environment they can at least give us a
[45:53] good indication that we're moving in the
[45:56] right direction rather than us putting
[45:59] in a lot of optimization code changes
[46:02] and not actually knowing whether the
[46:05] changes having the desired effect so for
[46:09] three zero one there's really two good
[46:12] ways at the moment for us to gather data
[46:15] from which we can decide what needs
[46:19] optimizing code wise two ways that we
[46:22] have at the moment are taking the auto
[46:26] captured data from the internal play
[46:30] tests we do with up to 50 internal QA
[46:34] and a handful of engineer's
[46:38] participating and the other way we would
[46:41] look to gather data to analyze to see
[46:44] what we can optimize is just by doing
[46:46] local tests around machines when we run
[46:50] those we can spin up a server connecting
[46:55] a client we can potentially can
[46:57] in headless clients should we want we
[47:00] can play the game fairly normally but
[47:03] with the additional their debug commands
[47:06] that are available to us we can do
[47:07] things like like jump outside olisar
[47:12] instantly put ourselves in a ship we can
[47:15] spawn 50a eyes and so we quite quickly
[47:19] can put ourselves in it in a scenario
[47:23] that in the real releases would see the
[47:28] framerate stressed more than just
[47:32] running around as a single player in all
[47:35] us are playing on the wise empty server
[47:38] with those different situations
[47:40] I'd also tend to do things like spawn
[47:45] 50a I then move the player away to
[47:48] another location in the game that's far
[47:51] far away from olisar because then in
[47:55] that situation we'd sort of expect
[47:58] really that the performance should
[48:00] should be better because there's now a
[48:03] bunch of vehicles on the server but
[48:07] those vehicles are now so far away from
[48:09] the players vehicle that we shouldn't
[48:11] need to update them on the client with
[48:14] the same level of detail that we
[48:17] previously did when we were sat right
[48:19] next to him in and olisar
[48:20] so we'd be running these various
[48:23] different scenarios locally taking a
[48:27] look at a data and by analyzing it we to
[48:31] look out for instances like that where
[48:35] we could get some clear gains by not
[48:39] updating things that didn't need to be
[48:41] updated we could also take that data and
[48:45] look into things like what are the most
[48:48] expensive functions in the game what
[48:52] what are the functions that are being
[48:54] called most frequently which functions
[48:58] take the longest to run which functions
[49:02] do a lot of allocation and de-allocation
[49:06] of memory we could also look at
[49:11] functions that were coming from code
[49:14] that we didn't actually necessarily even
[49:18] need to run for various game modes or
[49:21] code that had been there since we
[49:23] inherited the engine so we would kind of
[49:26] look in it looking at ways to improve
[49:29] pre-existing code that we did need but
[49:33] also often some of the biggest wins will
[49:36] be actually removing or refactoring
[49:40] older systems that we didn't need or
[49:42] didn't need to use in the ways that we
[49:45] were currently using them for PE for
[49:49] example one of the issues that we've
[49:51] we've always had is being able to to
[49:55] test with tester savable and a full load
[49:59] of clients so particularly now we've
[50:01] gone to 50 players per P Yuma and you
[50:05] can imagine the amount of manpower it
[50:07] takes and you know the logistical
[50:09] nightmare of trying to organize 50
[50:11] people in QA or you know volunteer
[50:14] developers to try and play test the game
[50:16] for a couple of hours and fill the
[50:18] service and get back performance data
[50:22] and then it's it's equally it's if you
[50:25] ask you know so you observe a slow down
[50:28] while you doing this test if you want to
[50:31] ask someone what happened you have to
[50:33] ask 50 people and you get 50 different
[50:34] answers does this kind of yeah it's
[50:37] quite difficult to sell the tests and
[50:39] again the quality of information back
[50:42] that you require so we're working on and
[50:46] these things we've got called headless
[50:48] clients which are basically clients with
[50:49] our players little they're all dumb
[50:51] robots still press the keys in random
[50:55] ways there's no key Bo's just a program
[50:57] that runs by its virtual keyboard it's
[50:59] just mashing the joystick and mushing
[51:01] the keyboard wiggling the mouse and it's
[51:04] smart enough that it can get out of bed
[51:06] and get into a ship and then just fly
[51:08] around and firing in random directions
[51:12] and that generates enough load that we
[51:15] can kind of simulate roughly what we can
[51:18] expect a player might do and previously
[51:21] the headless clients have only been gone
[51:22] on development
[51:23] developers machines and to get enough
[51:27] headless clients to help felt server
[51:29] they're being migrated on to virtual
[51:32] machines running in the cloud so they
[51:34] have to be spun up on demand and shut
[51:36] down the other thing I mentioned was
[51:39] getting back a better quality of
[51:41] information so we've had telemetry in
[51:44] the game servers for a while now we've
[51:48] had some telemetry from clients as well
[51:50] it's been a bit of a fragmented approach
[51:51] into how that's being done so we're
[51:54] working with the engine team and DevOps
[51:57] again to try and get a more unified
[52:00] approach get richer information about
[52:03] what the performance is where the
[52:06] bottlenecks are on each of the clients
[52:08] under server try and get more contextual
[52:12] information about what everyone was
[52:14] doing there each point in the game so we
[52:17] could go okay those performance drops
[52:19] here what was everyone doing all right
[52:21] that guy catapillar blow it off lots of
[52:23] cargo okay that's wrong really yeah
[52:27] with a traditional game you probably
[52:29] tend to find that the performance for
[52:33] the majority of the lifecycle the
[52:35] development would be actually pretty low
[52:39] probably fifteen frames a second or less
[52:43] whereas the issue we have is a early
[52:48] access title if you like is that we've
[52:51] we've got to get our features in write
[52:54] our new code write our new systems but
[52:58] yeah we have to get those systems
[53:00] performing in an optimal manner that
[53:03] allows people to play the game at a
[53:05] reasonable frame rate and enjoy it
[53:07] rather than having the luxury of only
[53:13] testing the game internally for the
[53:16] majority or the development cycle and
[53:19] then knowing exactly what content we
[53:24] want in the game knowing what works and
[53:27] then being able to optimize that in the
[53:30] last few months of the project so really
[53:33] we do have an extra overhead of sort of
[53:36] continual perform
[53:37] optimizations that we need to look at
[53:40] but that's all part of the great
[53:42] challenge that we've got here right in
[53:45] the code foot and what we all see is a
[53:49] massive groundbreaking title
[53:52] Joran development there's never going to
[53:55] be a line that we're in the cross and
[53:56] performance is something going to be
[53:58] fantastic it's always going to be this
[54:00] incremental process of getting better
[54:03] and occasion we're gonna get worse so
[54:08] basically what's what's gonna happen is
[54:09] as new features come online the first
[54:12] thing they're probably going to do
[54:13] besides work fingers crossed
[54:15] is make performance a bit worse and I'm
[54:19] long as we've measured the impact we're
[54:21] going to try and optimize it back up
[54:22] again to the levels that everybody's
[54:24] kind of happy with but development being
[54:27] the key thing it's never going to get to
[54:29] that kind of 60 frames per second for
[54:32] everybody because it's more important
[54:34] that we spend the time on actually
[54:35] developing the game getting everything
[54:37] in getting everything working so the
[54:38] kind of optimizations that we're dealing
[54:40] with now you know there's a few small
[54:44] kind of micro optimizations making
[54:46] things go particularly fast but it's
[54:48] kind of system level optimizations so
[54:50] yeah we know we're gonna need buy and
[54:52] call and we know we're gonna need server
[54:53] mashing we know we're gonna need the the
[54:55] entity component update scheduler well
[54:57] you know we're gonna need object
[54:59] container streamit so these kind of
[55:01] system level things these pieces have to
[55:03] go in so that we can build the rest of
[55:04] the game but that's the primary focus
[55:06] important to me it's it's to give us an
[55:08] attack to build the rest of the game
[55:10] yeah I guess the biggest takeaway out of
[55:12] this is there's never one answer an
[55:15] optimization there's billions I mean
[55:17] that's why we have those profile markers
[55:20] in there we need to see what's going on
[55:22] and work towards generating a solution
[55:25] to beef up that part of the thread
[55:27] that's going slow maybe we were to turn
[55:29] off some updates in the you know that
[55:33] are out of range used in sterilized
[55:34] coaling or maybe we have to optimize the
[55:38] way that weird handling physics on the
[55:40] planet because this particular way takes
[55:42] a little bit longer it's analyzing the
[55:45] data figuring out where 'no thread that
[55:48] we or
[55:49] having issues in and then finding a
[55:52] solution that works for that and doesn't
[55:54] break the game that's probably the
[55:56] biggest takeaway in the biggest
[55:57] challenge optimisation affects everyone
[56:00] from devs to players we all consider
[56:02] performance implications as we develop
[56:04] star citizen and we even have an
[56:06] optimization strike team to keep up with
[56:08] our own development that's right and
[56:10] with 3.1 around the corner we have a few
[56:12] ships coming online the reclaimer the
[56:14] cyclone the Terrapin and the razor and
[56:16] on the concept front the AG is Vulcan
[56:18] remains available through the end of the
[56:20] month add one of these versatile support
[56:22] ships to your fleet and become a beacon
[56:24] of hope for distressed pilots everywhere
[56:26] we also have a ship package that
[56:28] features the Vulcan along with some
[56:29] other ages vessels and a standalone skin
[56:32] pack available to everyone that's right
[56:34] so even those of you waiting to pick up
[56:36] a Vulcan in-game can secure these
[56:37] eye-catching paint jobs now make sure
[56:40] you tune in to this week's new episode
[56:42] of calling all devs and lore makers
[56:44] Guide to the galaxy up on the site now
[56:46] and on this week's reverse the verse
[56:48] Clive Johnson and Rob Johnson two sides
[56:50] of the performance optimization coin
[56:52] will be stopping by to answer your
[56:54] question following today's show that
[56:56] airs live tomorrow at 8 a.m. PST a huge
[56:59] thanks to all of our subscribers for
[57:00] sponsoring all of our shows and a
[57:02] special thanks to the subscribers live
[57:04] with us in the studio
[57:06] [Applause]
[57:10] thanks for being part of this very
[57:12] special episode and thanks to everyone
[57:14] for tuning in thanks also of course to
[57:16] all of our backers you make the
[57:18] development of star citizen and squadron
[57:19] 42 possible that's all for now until
[57:22] next week we'll see you around
[57:28] [Music]
[57:58] you
[58:00] [Music]
[58:07] thanks for watching for the latest and
[58:09] greatest in star citizen squadron 42 you
[58:11] can subscribe to our Channel or you can
[58:13] check out some of the other shows and
[58:14] you can also head to our website at

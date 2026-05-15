# Star Citizen: Around the Verse - UK Studio Update

**Video:** https://www.youtube.com/watch?v=esbs_fvw58k
**Date:** 2018-04-05
**Duration:** 43:10

## Transcript

[00:15] Hello and welcome to another episode of
[00:17] Around the Verse. I'm Sandi Gardiner.
[00:20] And I'm Chris Roberts. Star Citizen
[00:22] Alpha 3.1 went live last weekend with a
[00:25] character customizer, service beacons,
[00:27] improved UI, five new ships, 10 ship
[00:30] weapons, and two new FPS weapons
[00:33] officially entering the verse. Yeah,
[00:34] that's quite a lot. And along with that,
[00:36] we have improvements to frame rate and
[00:38] visuals. So, if you haven't been to the
[00:40] moons of Crusader recently, go check
[00:42] them out.
[00:42] Yes, go check them out. And a big thanks
[00:44] to everyone in the community that helped
[00:46] test 3.1 on the PTU, as well as all of
[00:49] our incredibly hard working teams across
[00:51] the globe who made the first quarterly
[00:53] release of 2018 possible. Yes, a huge
[00:56] thanks to all of you. And as we look
[00:58] forward to the rest of the year,
[01:00] starting with Alpha 3.2, we are taking
[01:02] into account the background input
[01:03] collected in the survey that went out
[01:05] last week as we shuffle some things
[01:07] around and continue to build out the
[01:08] road map. We'll have a full road map
[01:10] update soon, but this week we'll hear
[01:12] from our studios in the UK.
[01:15] Yes, also we'll see what the teams in
[01:17] both Wilmslow and Derby have been
[01:19] working on lately with Lux at involving
[01:21] AI improvements, weapon tuning,
[01:23] procedurally created space stations, and
[01:25] more. After that, we'll get some insight
[01:27] into the newest versions of the mobiGlas
[01:30] feature, which continues to change and
[01:32] improve along with Star Citizen itself.
[01:34] But let's go to Ricky first for the UK
[01:37] studio update.
[01:39] Hi, and welcome to the UK studio update.
[01:43] Starting with the environments team,
[01:44] work has been underway on our next
[01:46] generation of space stations beginning
[01:48] with the rest stops. Rest stops are
[01:50] unique among the space stations we've
[01:52] designed so far as they are created
[01:54] semi-procedurally.
[01:56] This will allow us to populate the PU
[01:58] with many variations of them easily. And
[02:01] to do that, we put a lot of focus on
[02:02] developing the right tools and workflow
[02:04] needed to achieve it. There are three
[02:06] main location components we've been
[02:08] focusing on to achieve the first
[02:10] iteration of the rest stop space
[02:12] station. The first component is the
[02:15] exterior. The unique silhouette of the
[02:17] rest stop's exterior is designed to
[02:19] maximize readability from a distance,
[02:22] while also allowing for individual
[02:24] personality and variety with the ability
[02:26] to vary layout and architecture.
[02:29] Varied building materials, color
[02:31] schemes, and ad placement mean that a
[02:33] great number of visual possibilities are
[02:35] achievable throughout the modular
[02:37] construction of these stations, which
[02:40] allows us to automate layout generation
[02:42] while maintaining artistic control.
[02:44] Hangers have also undergone plenty of
[02:46] recent development work. The rest stop
[02:49] will be the first station type to fully
[02:51] utilize this type of hanger, which we
[02:53] are terming a common element, and can be
[02:55] used in every utilitarian hanger in the
[02:57] game.
[02:58] Even though every hanger of this type
[03:00] will share the same core design
[03:02] functionality, they are built to allow
[03:04] for mixing and matching of walls,
[03:07] entrances, exits, and service modules in
[03:10] a variety of ways and styles to achieve
[03:12] varied looks across different locations.
[03:15] The third location component we've been
[03:17] focusing on is the interior. Developing
[03:20] the procedural layout tool used to
[03:22] generate these rest stops has been a big
[03:24] and admittedly challenging project. We
[03:27] are now at a stage where we can
[03:28] automatically generate large numbers of
[03:31] layouts using the tool and a set library
[03:34] of room and connector prefabs.
[03:36] Maintaining visual consistency and
[03:38] coherence while still making locations
[03:41] appear different remain artistically
[03:43] challenging for the tool and the team.
[03:46] Much like the exterior component, the
[03:48] trick is to randomize a lot of smaller
[03:50] choices like prop placement and lighting
[03:53] rather than alter the larger room forms.
[03:56] This method allows us to maintain
[03:58] artistic control over the main spaces,
[04:01] flow, and form.
[04:04] Improvements have been made to the prop
[04:05] team's entity system within DataForge,
[04:08] allowing for one entity to contain both
[04:10] gameplay features and visual keys while
[04:13] being set up and controlled using one
[04:15] system.
[04:17] This means that once we set up an
[04:18] entity, we can drop it into any level
[04:21] retaining all working functionality.
[04:23] This also makes for easier syncing
[04:25] between animations and material effects
[04:28] such as glows or UI elements.
[04:30] Consequently, the number of lights
[04:32] needed to fake glowing materials or
[04:34] flashing lights during different stages
[04:36] of animation has been significantly
[04:38] reduced. We have revised our metrics and
[04:41] template assets for useables and
[04:43] interactive props, making them easier to
[04:45] understand and allowing for improved
[04:47] scalability and functionality support
[04:50] for these item types.
[04:52] Building on these tech improvements, we
[04:54] are now able to create destructible
[04:56] props that mesh swap and also update
[04:58] environmental effects such as lights,
[05:01] VFX, and audio accordingly.
[05:03] These aren't being implemented in 3.1,
[05:05] and we are still in the early stages,
[05:08] but these tech developments are laying
[05:09] the foundations for future releases.
[05:12] A new set of low-tech medical props is
[05:14] being built out along with some new
[05:16] medical dressings. Both are planned for
[05:19] use throughout the PU as common medical
[05:21] elements.
[05:22] We have also been working on the sub
[05:24] items that will be used to customize the
[05:26] performance of ship components and
[05:28] making sure that when that feature comes
[05:30] online, there is a wide selection of
[05:32] visuals to support the gameplay.
[05:35] The missions team has been replacing the
[05:37] existing AI with new subsumption
[05:39] behavior.
[05:40] Still fairly early in its development,
[05:43] we've been focusing on balancing and
[05:45] implementing wild lines into the game
[05:47] for the AI-controlled characters. For
[05:49] those that might not know, wild lines
[05:51] are lines of dialogue which play
[05:53] systematically when the AI receives some
[05:55] sort of trigger such as receiving
[05:57] damage.
[05:59] Okay, there's a favor and back.
[06:15] These go a long way toward personalizing
[06:18] each player's experience as the AI will
[06:20] communicate with players differently
[06:22] depending on their relationship and
[06:24] history.
[06:25] As the AI continues to develop, we've
[06:27] also taken the opportunity to reassess
[06:30] the Vanduul and Pirate Swarm game modes
[06:32] within Arena Commander. They have been
[06:34] rebalanced with the focus on delivering
[06:36] a satisfying experience rather than
[06:38] extreme difficulty.
[06:40] Something we're really excited about is
[06:43] the creation of a prototype scramble
[06:45] race event which can work in space or
[06:47] planet side.
[06:49] In these death races, opponents battle
[06:51] to collect randomly generated
[06:52] checkpoints and more fundamentally to
[06:55] stay alive.
[06:56] The race relies heavily on dialogue, and
[06:58] we have upcoming recording sessions
[07:00] planned to supply this ahead of release.
[07:03] Finally, we've been rebalancing the
[07:05] reputation progression system as it
[07:08] became apparent that there were too many
[07:09] ways to accrue a negative reputation
[07:12] while attaining a positive one was too
[07:15] challenging. The UI team has been
[07:16] researching ways to improve performance
[07:19] by analyzing where the CPU is spending
[07:21] its time.
[07:22] Optimizations made to the code of the
[07:24] ECG graph and the visor significantly
[07:27] reduce the CPU cost without affecting
[07:30] visual quality. The ECG graph has a
[07:32] buffer for the heartbeat value. With
[07:34] every update, the game would add a new
[07:37] value to the front of the buffer while
[07:39] removing the oldest from the back,
[07:41] causing expensive memory shifting. To
[07:43] prevent this, the team now uses a
[07:45] circular buffer by just storing an index
[07:47] to the oldest location in the buffer.
[07:50] When the index reaches the end of the
[07:51] buffer, it loops back to the start in
[07:54] cyclical fashion, which is much more
[07:56] efficient because memory is only written
[07:58] to rather than being moved around. The
[08:01] second optimization applied to the ECG
[08:03] was to stop redrawing the whole graph
[08:05] each frame. Instead, we add the new
[08:08] value to the right-hand side and move
[08:10] the whole graph along to the left.
[08:12] We use a clip window to ensure only the
[08:15] essential parts are drawn, and the
[08:17] graphics data is recycled in a similar
[08:19] fashion to the circular buffer.
[08:21] The graphics team has been working on
[08:23] some major performance savings when
[08:25] rendering characters.
[08:27] Each of our characters are split up into
[08:29] many different meshes, not only for
[08:31] swapping out clothing and armor, but
[08:33] also so that we can hide individual
[08:35] portions of an object to avoid
[08:37] interpenetrating geometry. Our shaders,
[08:40] textures, and geometry have now been
[08:43] organized in such a way that we can
[08:45] render multiple adjacent meshes in one
[08:48] go, which vastly reduces the CPU cost of
[08:52] submitting the work to the GPU while
[08:54] maintaining flexibility. To improve the
[08:57] quality and legibility of our various UI
[08:59] screens, we've been working on two new
[09:01] shader effects for the render to texture
[09:04] system.
[09:05] The first is an edge highlighting effect
[09:08] which we use for the ship targeting
[09:10] displays, and the second is a drop
[09:12] shadow effect to help make sure icons
[09:15] stand out against bright backgrounds.
[09:18] Graphics has also been collaborating
[09:20] with the VFX department to improve our
[09:22] GPU particle system.
[09:24] Our ambitious VFX artists are
[09:26] implementing lean production techniques
[09:28] to prioritize the features that will
[09:30] provide maximum impact.
[09:32] A couple of examples would be improved
[09:34] spawn inheritance and curl noise, both
[09:37] of which were requested to allow us to
[09:39] create better, cheaper electrical and
[09:42] plasma effects for things like the coil
[09:44] interior and EMP weapon improvements.
[09:48] They've also been working through a
[09:49] fairly large snag list for the 3.1
[09:51] release, doing things like toning down
[09:54] the dust mote opacity in certain
[09:56] environments that have undergone
[09:58] lighting updates and re-adding planet
[10:00] moon effects so they work correctly with
[10:03] the planetary tech improvements.
[10:05] Tech design has been finalizing 3.1
[10:07] release work implementing and tuning new
[10:10] weapons like the Gattsu ballistic
[10:12] Gatling, P I R R distortion scattergun,
[10:15] and A M R S laser cannon while
[10:17] supporting the conversion of existing
[10:19] gear to weapon 2.0. They also have been
[10:23] re-balancing a lot including distortion
[10:26] weaponry following fixes to allow items
[10:28] to affect items as opposed to just
[10:31] shields,
[10:32] countermeasures to make them more
[10:34] effective post item 2.0 implementation,
[10:37] continued iteration of flight balance
[10:39] especially atmospheric landing
[10:41] turbulence, and the re-balance of shield
[10:43] setback and regeneration rates.
[10:46] At the other end of the pipeline,
[10:47] they've also been working with art on
[10:49] some exciting new ship concepts which
[10:51] will be revealed throughout the year on
[10:53] Around the Verse's ship shape segment.
[10:57] Also contributing to the game's
[10:58] ever-expanding fleet is ship art team.
[11:01] The Aegis Hammerhead's interior is
[11:03] mostly set out with the exception of the
[11:05] crew dorm and kitchen area while the
[11:07] cargo bay and bridge are currently in a
[11:10] detailing pass.
[11:12] Another Aegis ship, the Eclipse, is now
[11:14] back in full production. The current
[11:16] focus being the exterior.
[11:18] The team is reinforcing its stealthy
[11:20] appearance by tightening up the palm
[11:22] panel line details, enhancing the
[11:25] materials, and making sure all the
[11:27] movement parts are operational.
[11:29] The weapon audio system has undergone a
[11:32] substantial refactor and work has begun
[11:34] on designing full N L P C weapon
[11:37] perspective sets along with specific
[11:39] sounds for various distances.
[12:13] An environmental weapon report or tail
[12:16] layer has also been added for a weapons
[12:18] on planet side location to better
[12:20] reflect the environmental response of
[12:23] the weapon fire.
[12:24] Recently, members of the audio team took
[12:27] part in a sound effects recording
[12:28] session at Oscillate Studios focused on
[12:31] vibrating various metallic objects using
[12:34] transducers that respond to low
[12:36] frequency sounds.
[12:38] The metals were simulated via
[12:40] synthesized tones which were performed
[12:42] using a MIDI keyboard playing with the
[12:44] pitch in order to impart different
[12:46] resonances and sympathetic rattles to a
[12:49] diverse range of scrap metal objects.
[12:58] Jazz.
[13:00] It's a bit like jazz.
[13:15] The primary focus of the session was to
[13:17] create source material for our ships
[13:19] partly inspired by the sound production
[13:21] team at Warner Brothers who worked on
[13:23] the Christopher Nolan film Interstellar.
[13:26] They used large scale subwoofers to
[13:28] resonate the fuselages of aircrafts to
[13:31] model the behavior of spaceships under
[13:33] duress simulating atmospheric entry,
[13:36] strong gravitational fields, and so on.
[13:38] The Derby office continues to expand its
[13:40] operations. It was a pleasure to welcome
[13:43] a number of our valued backers during
[13:45] the recent Imperator Subscribers event
[13:47] where the developers demonstrated core
[13:49] elements of their workflow including
[13:51] facial animation, motion capture, and
[13:54] technical animation.
[13:56] The tour also offered us the opportunity
[13:58] to scan three more faces and we look
[14:00] forward to seeing the lucky participants
[14:03] in the verse.
[14:04] The gameplay story team have been
[14:05] getting all the required scenes for
[14:07] gameplay story organized in shotgun and
[14:10] are working with the design to get the
[14:11] first few scenes implemented in game and
[14:14] up to standard. Progress has been made
[14:16] on R&D for the Vandal face rig and
[14:19] internal facial rig technologies along
[14:22] with iterations to female rigs in Maya.
[14:25] The new one-to-one conversion updates to
[14:27] the rig will break a lot of animations
[14:29] that use props so we've been developing
[14:31] an automated solution to fix the
[14:33] animation files we have without an
[14:35] animator having to manually go through
[14:38] and re-animate everything.
[14:40] And finally, the facial animation team
[14:42] has been busy finalizing animations on
[14:45] various P U shopkeepers, bartenders, and
[14:48] mission givers. You doing all right?
[14:50] Everything good?
[14:53] Make an uncertain world
[14:56] a little more certain.
[14:58] That's all I can say till I know if
[14:59] you're in or not.
[15:02] Hurry and get to your ship. I'll be in
[15:04] touch before the race. This includes
[15:06] blending all the animations from the
[15:08] same facial poses so they all play
[15:10] seamlessly from one another.
[15:13] That's it for our UK studio update.
[15:16] We're looking forward to a fun day at
[15:17] CitizenCon this year on the 21st April
[15:20] in Manchester.
[15:21] Aaron and Brian will be there along with
[15:23] others taking part in Q&A panels and
[15:25] many more of the team enjoying a day of
[15:27] interaction with the community.
[15:30] They're running a raffle with some great
[15:31] prizes and tickets are still available
[15:33] via the link in the description below.
[15:36] And of course, thank you to all our
[15:37] backers for continuing to support the
[15:39] development of both Star Citizen and
[15:42] Squadron 42.
[15:44] Thank you, Ricky. Uh so it's pretty
[15:45] impressive to see just how many areas of
[15:47] Star Citizen that the UK studio is
[15:48] working on from big procedural stuff
[15:50] like the rest stops to polishing and
[15:52] fine-tuning audio, facial animation,
[15:55] weapon balance, and combat, and even
[15:57] updates to Arena Commander. You also saw
[15:59] some of the optimization improvements
[16:01] they've been working on with focus on
[16:03] the visor displays and personal manager
[16:05] app. Yeah, we continue to fine-tune the
[16:07] PMA improving its look and usability
[16:09] from what you saw in 3.0. Let's take a
[16:12] closer look at the PMA in this week's
[16:14] feature.
[16:21] In 3.0 we released the MobiGlass just
[16:23] kind of like our first iteration into
[16:25] the kind of new UI that we had
[16:27] envisioned for it. It was an improved
[16:29] version but it was it still had a lot of
[16:30] issues in terms of the usability.
[16:32] Basically how it fit in the world um
[16:35] and how it had some kind of issues with
[16:37] your mouse cursor um when you breathe
[16:39] you would run into these issues where
[16:41] your mouse would be on the button at at
[16:43] one point and then be off and then be on
[16:45] again just because of the breathing. Um
[16:48] so we took a look at some solutions to
[16:50] fix that and
[16:52] uh what we have now is is a
[16:54] you know a much more uh intuitive and
[16:57] usable interface because of the new way
[17:00] we actually attach it. So we actually
[17:03] right now attach the MobiGlass via an IK
[17:07] uh solution so
[17:09] what we do is we specify where an IK
[17:13] target point is relative to the player's
[17:15] camera. So uh once we have that point
[17:19] then we can just procedurally animate
[17:21] the arm up and we'll have some offsets
[17:23] that we can actually tweak uh to really
[17:25] kind of cuz it's especially very very
[17:28] pixel per pixel uh you know pixel
[17:30] perfect. We want to be pixel perfect
[17:32] with the stuff. And and have it be just
[17:34] the right size like if it's just too
[17:35] slightly too big then you know we'll
[17:37] we'll we'll really want to adjust that.
[17:39] So now we've got the actual control to
[17:42] uh specify these offsets for the
[17:44] MobiGlass and it really allowed us to
[17:46] really dial in the scale and the
[17:49] positioning that we wanted on screen to
[17:51] facilitate an optimal user experience.
[17:54] So the other benefit that came with that
[17:55] is now in all these different contexts
[17:58] whether it's an EVA or whether it's on
[18:00] foot or you're crouching or you're in
[18:02] these various different ships actually
[18:04] now that we have a single target point
[18:06] that's relative to the player's camera
[18:08] the UI is now in a much more consistent
[18:10] place. Uh so the positioning and the
[18:12] scale is much more consistent now in all
[18:14] of the different contexts uh because
[18:16] before what had happened is that you'd
[18:18] have specific poses uh that that
[18:21] animators had to hand animate and when
[18:24] the animators are animating this uh they
[18:26] actually it's very hard for them to
[18:27] actually see their um
[18:30] positioning is going to actually end up
[18:31] in the engine. So they they think it's
[18:33] Maya. I'm not actually sure what they
[18:35] they work in but when they try to
[18:36] integrate in the engine it's usually
[18:38] like in a different place so they kind
[18:39] of have to approximate it. And so before
[18:42] all the MobiGlass
[18:44] poses in the different contexts were all
[18:46] approximated. So you you ended up with
[18:49] maybe in in crouch like part of it was
[18:51] cut off or or angled a little bit more.
[18:53] So now we can actually have
[18:55] a much more control and uh fine-tuning
[18:58] of of that sort of stuff. So it's it's
[19:00] been really great and it really helps in
[19:02] addition to all the other changes that
[19:04] we made in terms of utilizing more of
[19:06] the screen real estate as well. One
[19:08] thing that we did in in looking at the
[19:11] current 3.0 vehicle manager and player
[19:14] manager was the kind of awkward menu. So
[19:16] we basically have a an accordion
[19:19] menu system whereupon you have to drop
[19:21] down
[19:22] lists and then when you click on
[19:24] something that then transition to a
[19:25] whole different window and if you wanted
[19:27] to change another part or something to
[19:29] view view items in another part you have
[19:31] to go back and then drop down another
[19:33] menu and then select that. So
[19:35] it was kind of a lot of user clicks in
[19:38] order to actually you know get to where
[19:40] you actually wanted to go. We had the
[19:42] kind of the list on the side this
[19:43] concertina list with the 3D model that
[19:45] you could see where like rotate it
[19:47] around see where things were.
[19:49] That concertina wasn't didn't really
[19:51] work for us. There was too many items in
[19:53] there.
[19:54] It kept collapsing. So, we needed to fix
[19:56] that anyway cuz it just wasn't as
[19:57] usable. But really we weren't using a
[19:59] lot of the the screen space and I think
[20:01] that was a problem that we saw very
[20:03] early on with the Mobi in general that
[20:04] was like, this is really cool thing at
[20:06] any point you can open it up and
[20:08] see what you've got, but
[20:10] there's a lot of screen
[20:12] going wasted. So,
[20:14] from a readability standpoint because it
[20:16] was a lot smaller on screen, we really
[20:17] wanted to bring that out. So,
[20:19] making it bigger, filling the screen was
[20:22] a big thing. And then once we had that
[20:23] extra screen space, we didn't need to
[20:25] keep collapsing things down.
[20:27] That was really it was a space saving
[20:29] um choice. So, by putting two separate
[20:33] columns on the left, you could pick your
[20:35] hard point, and you could pick what you
[20:36] put on it, and it's still got plenty of
[20:38] screen space to see your character
[20:40] model, see the details on the side. So,
[20:42] by bringing the view in,
[20:44] all of a sudden it opened a lot of doors
[20:46] from a from a usability standpoint. So,
[20:48] another great benefit that actually just
[20:50] simply fell out of this approach that
[20:51] we're taking is that now we've solved
[20:54] the flickering cursor issue. Now that
[20:56] like the UI is much more full screen and
[20:58] it's and it's much more straight on to
[21:01] your camera. So, it's much more usable.
[21:03] However, one of the things that we're
[21:05] concerned about with that is how much
[21:08] more static the UI was going to seem uh
[21:11] with that approach. And you know, we
[21:13] thought we needed might might have
[21:15] needed to stop the actual breathing. So,
[21:17] you know, you'd just be like a statue.
[21:19] And so, we really
[21:21] we didn't really want to take that away,
[21:23] but at the same time, you know, uh we
[21:25] you know, we needed to improve the
[21:28] overall kind of usability. So, what
[21:30] actually fell out of the approach was
[21:32] that
[21:34] we can still have breathing and and as
[21:36] you run, as you maybe after a long
[21:39] sprint, you can pull up your MobiGlass
[21:41] and what you want to see is like yeah,
[21:43] you're you want to be able to feel that
[21:45] your character is out of breath even,
[21:46] you know, whether you know, regardless
[21:48] of the context you're in. You still see
[21:51] the UI moving, but your the cursor
[21:53] position is always going to be in in the
[21:55] same place regardless of the movement.
[21:57] Even though we have the cursor is
[21:59] actually on on the 2D
[22:01] plane in front of the MobiGlass
[22:02] technically. So, it's it's a it's it's
[22:05] much improved for sure. For a lot of the
[22:07] apps now, we've also done a massive push
[22:10] to unify the layouts across the vehicle
[22:13] loadout, the player loadout, and the
[22:16] MobiGlass.
[22:17] And we wanted to unify
[22:19] that kind of UI with the loadout uh
[22:23] the UIs in in Star Marine and Arena
[22:25] Commander. We're also going to reuse
[22:27] that for the shop item as well. So, the
[22:29] shop item kiosk, essentially, we can
[22:32] really reuse the same system. So, we
[22:34] really get a lot of return out of doing
[22:37] these efforts in terms of unifying
[22:39] uh the UI in both the code base as well
[22:41] as the layout cuz you also want to unify
[22:43] the layout uh because you establish user
[22:46] familiarity. Um so, once a user is
[22:49] familiar with one thing, then across all
[22:52] of these other interfaces, they can
[22:54] they already know pretty much uh 90% how
[22:57] to actually interact with it. And and
[22:59] they're in you know,
[23:01] that's a really a great thing for us
[23:03] uh in terms of development as well
[23:05] because that's means less work when we
[23:07] have a unified code base. We've always
[23:09] wanted to unify the all these different
[23:11] UIs. Um so, you'll notice in before in
[23:14] in 2.6 like in in 3.0, we had this very
[23:17] specific Star Marine loadout screen that
[23:19] was different from the AC loadout.
[23:22] Basically, you had a very specific, you
[23:24] know, here's your primary weapon, here's
[23:25] your secondary weapon. But you know, as
[23:28] things expand, as we want to add more
[23:30] hard points, you know, you want to be
[23:32] able to attach
[23:33] uh like a scope to your gun or different
[23:35] different attachments to a particular
[23:37] item. Um you know, we need to be able to
[23:40] scale that. And what we have right now,
[23:42] you know, can accommodate any kind of
[23:46] additions and uh
[23:48] uh um future uh future that we want to
[23:51] we want to actually um
[23:52] you know, introduce.
[23:53] So, we already had the code base for
[23:56] the vehicle and personal managers.
[23:58] They were already using the same code
[23:59] base. All we're doing really is changing
[24:02] the 3D model the
[24:03] the way that we build players really is
[24:06] the same way way we're building ships.
[24:08] It's a it's a skeleton with hard points
[24:10] on it, item ports.
[24:12] And you put a piece of armor on that
[24:14] player or you put a a gun on that player
[24:16] or you put a
[24:17] uh missile launcher on a ship, it's all
[24:19] the same hierarchy essentially. We're
[24:21] just changing what's what's up front.
[24:23] Technically, to update Arena Commander,
[24:26] it already had the same code base. We
[24:27] just needed to put a new layer on top,
[24:29] but Star Marine required completely
[24:31] ripping out a whole old system. So, it
[24:32] was this kind of
[24:34] rotten bit of wood and everything else
[24:35] is working. So, that was the the biggest
[24:37] technical challenge was to
[24:39] pull out the way that we
[24:41] set up our characters cuz they were all
[24:43] having bespoke loadouts and and systems
[24:47] that. So, that needed redoing. It also
[24:49] meant that if we were switching over to
[24:51] a new system, we needed a way of
[24:52] tracking
[24:54] what I was using in elimination versus
[24:56] what I'm using um
[24:58] in last stand.
[25:00] When you're picking one team versus
[25:01] another, we needed a loadout system,
[25:03] which is something we hadn't had in um
[25:05] the PMA currently. So, that needed
[25:07] adding. So, there was a couple of new
[25:08] systems that needed to go in.
[25:10] Um but that gives us a good groundwork
[25:12] now for what we plan to do with 3.2
[25:15] moving forward and expanding um loadouts
[25:18] in general so you can save them in the
[25:20] future. Bug fixing as well. So, I mean
[25:21] if there's something wrong in the base
[25:23] implementation somewhere, then we fix
[25:25] that and that propagates to anywhere
[25:27] where we have that where we have where
[25:30] we use that code base. For testing
[25:31] obviously, any change you make, we have
[25:34] to test across everywhere where that UI
[25:37] is used. So, not so much for testing,
[25:39] but uh definitely for future
[25:40] development, we can just hey, let's use
[25:42] let's use this unified code base. We can
[25:45] use it for we can use it for the
[25:46] character customizer, we can use it for
[25:48] uh shop item kiosk cuz in the shop item
[25:51] kiosk, there's something that's that
[25:53] we're going to that we're that we're
[25:54] planning for the
[25:56] for the next release is essentially
[25:57] being able to
[25:59] pick any
[26:01] you know, pick any port on your ship or
[26:02] or hard point and see all the valid uh
[26:05] items that are available in that
[26:07] particular shop. So, it's just filtered
[26:09] differently, but it's the same actual
[26:10] interface. So, the other thing too is,
[26:13] you know, we can also, you know, it's
[26:15] not doesn't necessarily have to be bound
[26:17] to oh, you pick a hard point and then
[26:19] you see the items. We can also do the
[26:21] reverse whereupon we see all the items
[26:22] and then we can see what valid hard
[26:24] points there are as well. So, there's
[26:25] both option. We would we would want both
[26:27] options there cuz there's use cases for,
[26:30] you know, both. So. So, long term this
[26:32] means in Star Marine, you can save a
[26:35] elimination a last stand for marine, a
[26:37] last stand outlaw um loadout.
[26:40] It means that we can prep the ground now
[26:43] for
[26:44] player created loadouts. Not just not in
[26:47] Star Marine, but in in the PU. So, if
[26:50] the player's got their favorite uh
[26:52] exploration loadout or they've got their
[26:53] favorite combat loadout or they've got
[26:55] their favorite stealth loadout, they can
[26:58] set what they want, save it,
[27:01] and then when they move up to a a locker
[27:03] or something, they can quickly switch
[27:04] their gear and it'll remember, oh, you
[27:07] want this helmet and this undersuit
[27:08] rather than having to manually go
[27:10] through each. So, by the the need that
[27:13] we had for
[27:14] Star Marine to have those fixed
[27:16] loadouts, it means we had to do the work
[27:18] up front to be able to save and then
[27:21] load back up loadouts. So, moving
[27:23] forward, we should be able to start
[27:25] implementing player created loadouts and
[27:27] um and that's quite cool. Skinning-wise,
[27:30] uh obviously they can be branded. We
[27:31] have a branding system at least in the
[27:33] kiosk that we've actually have uh in the
[27:36] commodity kiosk where we right now it's
[27:38] just branded uh at Port Olisar. And we
[27:41] actually have a different brand for
[27:42] GrimHEX where it's, you know, more more
[27:44] like a dust terminal. So, it's it really
[27:46] kind of fits into the uh
[27:48] uh kind of the the feeling in the
[27:50] environment uh much better. So, when we
[27:52] have those different skins, obviously,
[27:54] you know, they're just different skins,
[27:56] but under underneath it all it's all the
[27:57] same. In the short term, we're going to
[27:59] be hopefully seeing a lot more usable
[28:03] um MobiGlass.
[28:04] It's full screen now. There's a lot the
[28:08] icons have been brought down to the
[28:09] bottom. So, it should be a lot more
[28:11] readable, um a lot more intuitive.
[28:14] Players should be able to quickly see
[28:15] where things are, what they can fit on
[28:17] things, and be able to read the text a
[28:19] lot clearer. So,
[28:21] for 3.1, we wanted to make sure that it
[28:22] was better under the hood, but also
[28:25] a lot more convenient to use.
[28:27] So, yeah.
[28:29] It was it was largely dealing with all
[28:31] the problems we either didn't get fixed
[28:32] for 3.0 or
[28:34] all the feedback that we could got to
[28:36] address and say like, let's make sure
[28:37] that this is great moving forward
[28:39] because there's a lot of
[28:41] other apps, the map and mission manager
[28:43] and things like that that we want to
[28:44] tackle that that need bringing up to a a
[28:47] better level. So, this was kind of the
[28:49] first step at at an iteration that I
[28:51] mean, throughout Star Citizen, we talk
[28:53] about we put things out there, listen to
[28:55] the community, improve things. This is
[28:57] that in in action really. It's putting
[29:00] something out there in our first pass,
[29:02] getting that immediate feedback, but it
[29:03] actually being able to then quickly turn
[29:05] around rather than waiting three, four,
[29:07] five months to be able to say, right,
[29:09] let's get on that immediately because
[29:10] this is
[29:11] this is a barrier for people enjoying
[29:12] the game. So, let's let's get that
[29:14] fixed. So, in terms of what's going into
[29:16] 3.1, um
[29:18] so, in terms of the yeah, there's a lot
[29:20] of stuff UI-wise, um but you know,
[29:23] when we're talking about the MobiGlass,
[29:25] a new overhauled vehicle manager app, a
[29:28] new overhauled player loadout app
[29:32] uh is going in as well as a um new
[29:34] contracts manager as well. It's largely
[29:36] the same kind of functionality as you as
[29:39] you saw previously. It's just a much
[29:40] more streamlined user experience. Yeah,
[29:42] for 3.1, we've been focusing on making
[29:45] it all usable. On the Star Marine and
[29:48] Arena Commander loadouts as well, we've
[29:50] been using the same system. They kind of
[29:52] separated. We had the one that was on
[29:54] MobiGlass. We had a bespoke system
[29:56] solely for Star Marine, and then we had
[29:59] the old system on Arena Commander. And
[30:01] what we wanted to do for 3.1 was bring
[30:03] those all under one roof. Make sure it's
[30:05] a single code base. It all looks the
[30:07] same, so the player knows exactly where
[30:09] things live and what they can do in one
[30:11] they can do in the others. It meant that
[30:12] any bug fixes we do in the future
[30:15] that's all taken care of immediately. Um
[30:17] so it makes moving forward a lot more
[30:19] streamlined. And
[30:21] Zane can then have a singular design
[30:23] vision. If we add one widget on one
[30:24] thing, it's it's everywhere. Bringing
[30:26] the Star Marine loadout and the AC
[30:28] loadout in line with what we're the work
[30:30] we're already be planning to do
[30:31] for personal manager app and the vehicle
[30:33] manager app. That was a kind of a big
[30:35] overhaul that really sets us up now
[30:37] moving forward. It's a game within a
[30:39] game, so a lot of the user interface
[30:41] kind of felt like it didn't need to be
[30:44] one in the same to what was in Star
[30:46] Citizen itself, but it meant that we had
[30:48] two ways of doing the same thing. So
[30:51] by and large, the end goal of kind of
[30:53] let's consolidate these needed doing
[30:55] sooner or later. But what we got in for
[30:57] for 3.0, and it's been there for a while
[31:00] I say I think since 2.6 brought in Star
[31:02] Marine updates, that user interface did
[31:04] exactly what we needed to do. But as
[31:06] we're looking to add more items that you
[31:08] can buy with REC and
[31:10] improve the experience in Star Marine,
[31:12] that needed to grow.
[31:15] And the the interface in Star Marine
[31:17] just wasn't able to add new items and
[31:19] and things like that cuz it's it's all
[31:21] very handmade. So it needed updating.
[31:24] And as we were fixing bugs, we had a
[31:26] whole bunch of
[31:27] 3.0 bugs that needed to look at. It
[31:29] became very clear that we're fixing
[31:31] these bugs twice. There's two There's a
[31:32] bug for this and a bug for that. And so
[31:34] it became very clear that instead of
[31:35] just doing all this, let's just do the
[31:36] work up front that we needed to do
[31:38] eventually anyway. Let's just get it
[31:39] done now, and then it's it's taken care
[31:42] of. So for MobiGlass on a larger scale,
[31:45] we want to look at the star map more.
[31:49] That's that's got a lot of work to doing
[31:51] to kind of make it more usable, more
[31:52] readable.
[31:54] Use the space that we now have. I think
[31:56] that was kind of constrained before. So
[31:58] we've got a lot more space now, so
[32:00] using the space better for the star map,
[32:02] so it's it's more intuitive because I
[32:04] think that's going to be
[32:06] once you've got your kit and you've got
[32:07] your ship,
[32:08] finding where to go is is the next big
[32:10] thing. So we've got something that
[32:11] works, but making that better. We've
[32:13] also got things like the journal
[32:16] and other
[32:17] secondary apps that you're not going to
[32:18] be using all the time that we want to
[32:20] make sure work really well, so they'll
[32:21] be coming through um down the line. And
[32:24] then in terms of
[32:25] the VMA and PMA,
[32:27] those apps, they've still got a whole
[32:29] bunch of stuff that needs to come in. We
[32:31] want to improve um the stat readout. At
[32:34] the moment, there's just kind of
[32:35] basic information and basic size
[32:37] information, but there's a whole bunch
[32:38] of stats and under the surface that
[32:40] aren't being read into the screen yet
[32:42] that we want to show. So you'll be able
[32:44] to compare this gun to that gun, that
[32:46] piece of armor to that piece of armor.
[32:47] So that when you're deciding, do I want
[32:49] a big heavy piece of equipment or a
[32:51] light piece of equipment? It's like,
[32:52] well, this protects for more damage, but
[32:54] it's going to slow me down or it's going
[32:56] to take longer to to aim or to move. And
[32:59] so players can make conscious decisions
[33:01] about when they find a a derelict and
[33:03] they find a piece of equipment that's
[33:04] just floating in space, do I want to
[33:06] take this with me? They can compare
[33:08] stats immediately, which is also useful
[33:10] in the market. It's also useful when
[33:11] creating your favorite loadouts. So
[33:13] there's a whole bunch of additional
[33:15] features that we want. Now that we feel
[33:17] like it's a usable system and and that
[33:19] flow has been sorted, layering in now
[33:23] personally created loadouts, stat
[33:25] comparison, new features that the that
[33:28] we think are going to enhance and make
[33:29] people use that more and and get more
[33:32] value out of it. So another thing that
[33:34] we have going into 3.1 is an overhauled
[33:37] Arena Commander and Star Marine loadout
[33:39] screen. So Star Marine is no longer a
[33:42] bespoke UI. It's it's using the same
[33:44] unified system
[33:46] uh that we set forth with the personal
[33:47] manager and vehicle manager in the
[33:48] MobiGlass. So those all have been
[33:50] unified.
[33:51] We have a character customizer UI, the
[33:54] the first iteration of that at least
[33:55] going in for to 3.1.
[33:57] Um obviously um looking to expand
[34:00] into um much more robust features later
[34:02] down the line. Of course, as is with
[34:04] everything, new overhauled mission
[34:06] manager UI, largely the same
[34:08] functionality in terms of missions, uh
[34:11] but just streamline user experience and
[34:13] streamline um user interface layout. And
[34:16] addition to that, service beacon
[34:18] functionality. So the ability to create
[34:20] service beacons uh and user generated
[34:23] missions that you can accept um
[34:25] and you know, you can view other
[34:26] players' missions. Uh so you know,
[34:28] there's a lot more player generated kind
[34:31] of content there. Obviously, we want to
[34:33] um you know, later down the line
[34:35] introduce more filters so you can have
[34:38] you know, I want missions just of this
[34:41] rating or or more. Or I want only
[34:43] contracts of this type. So you will have
[34:45] all of that functionality
[34:48] to implement later down the line, but
[34:49] this is now kind of like our first
[34:51] iteration of that. So it's
[34:53] as we get new features, they're they're
[34:55] really um kind of rudimentary um and and
[34:59] basic, but they expand over times. Now
[35:02] obviously, it's great to have the screen
[35:03] real estate to be able to expand into.
[35:06] So um you know, another reason why we're
[35:09] happy about um the foundation that we
[35:11] set with the new MobiGlass and layout.
[35:13] Um there are also
[35:16] uh some new improvements to the ship UI
[35:18] and HUD. Um so now we have feed much
[35:22] better feedback for the user in terms of
[35:24] where they're hitting their target ship
[35:25] or where they're getting hit. So it's
[35:27] it's it's more obvious. Um and we
[35:29] brought back some of the functionality
[35:32] uh that we were that was missing from
[35:34] the visor, including like EM and IR
[35:35] signatures that you can now you can now
[35:37] see. Um
[35:39] Uh later down the line, there's a whole
[35:41] lot of improvements that we want to make
[35:43] to the ship UI. It's definitely not in a
[35:46] like final state that we see it. So we
[35:48] have um you know, improvements that we
[35:50] still need to make for that and that
[35:51] we'll we want to look for look to do for
[35:54] for 3.2. So
[35:56] But for now, one of the major
[35:57] improvements that we made was to you
[35:59] know, how the
[36:01] uh ship model renders. Um so it's you
[36:04] know, more efficient um and uh you know,
[36:07] kind of easier to see. So in Star
[36:08] Marine, the kind of the loadout presets
[36:10] were necessitated cuz you have different
[36:12] loadouts that you would need to use
[36:14] whether you know, depending on what side
[36:15] you're on. But base foundation of that
[36:18] is actually uh going to
[36:20] drive the idea of loadout presets where
[36:23] you can save a particular configuration
[36:25] and just quickly
[36:27] uh you know, change into that loadout.
[36:29] So you don't have to just do it
[36:30] everything individually. So we'll have
[36:32] you know, you know, you'll be able to
[36:33] set your own loadout presets. So it's
[36:35] much more easier to access um what you
[36:38] like and you know, for different roles
[36:39] like stealth and so forth. So making
[36:41] sure that it's not
[36:44] it's not like a mobile phone where
[36:45] you've got 700 apps and it's like, where
[36:46] is the thing that I actually need? Make
[36:47] sure it is
[36:49] cuz you don't want to be playing the
[36:50] game off off your wrist. You want to be
[36:52] out there in the 'verse playing it
[36:53] properly. So
[36:55] striking the right balance between
[36:56] what's too much information, what's not
[36:58] enough information, and and a lot of
[37:00] that's going to come from community
[37:01] feedback, listening to what the fans
[37:04] say, more of this, less of that. I find
[37:06] this quite hard.
[37:07] I'm having trouble with this.
[37:09] And and that's worked really well from
[37:11] 3.0 into 3.1, keeping that going,
[37:13] keeping our ears open, and listening to
[37:15] that feedback as we constantly keeping
[37:17] an eye on
[37:18] what the community says on Spectrum and
[37:20] on Reddit and and other formats.
[37:23] We get a sense of what they want more
[37:25] of, what they want less of, and we can
[37:26] say, does this align with what we want?
[37:29] Does this Does this make sense? Yeah,
[37:30] that would be a good use of Mobi. This
[37:32] wouldn't be a good use of Mobi.
[37:33] Even if people want
[37:36] the fastest point from A to B, and
[37:38] sometimes that mean let me just buy my
[37:39] cargo from my MobiGlass.
[37:42] Because why do I have to get off my
[37:43] ship, go into the thing? And but
[37:45] sometimes that's not what No, because we
[37:47] want you to physically go there because
[37:48] it's part of the experience of of
[37:50] traveling. If you could do everything
[37:51] from your wrist, you'd never leave your
[37:52] cockpit. There's some things that don't
[37:54] suit MobiGlass, and there's some things
[37:55] that absolutely do that there's no other
[37:57] way you could change
[37:59] what gloves you've got on other than
[38:01] physically,
[38:02] which would be horrible. So it's what do
[38:04] we streamline, what don't we streamline?
[38:06] But yeah, listening to the community
[38:07] feedback, what is what do we feel like
[38:09] that's important? And also
[38:11] do we hear this a lot or do we hear it
[38:12] from one person? One person really wants
[38:15] a feature and like, okay, that sounds
[38:16] cool, but realistically, that's going to
[38:19] be 2 weeks worth of someone's work to
[38:21] get that in versus
[38:23] 60, 70, 100 people have asked for this
[38:25] one thing. Okay, well,
[38:27] that's a big win for us and and it's
[38:29] something we want to do, it's something
[38:30] you desperately want. Let's let's put
[38:31] that into the game. It's finding the
[38:33] right time to put that in obviously, but
[38:35] because we have
[38:37] kind of quarterly cycles and it's
[38:38] something we're constantly looking at,
[38:40] we can just okay, let's let's drop that
[38:42] in, let's drop that in. So we're looking
[38:43] at the mission manager on the side
[38:45] whilst we're also looking at the VMA and
[38:46] PMA because it's it's
[38:49] it's right there. It's like, oh, we just
[38:50] need to just change a bit of this flash,
[38:52] and then it's in. Great.
[38:54] It's
[38:55] a day's worth of work, and then we've we
[38:56] improved that feature as well. So as
[38:58] work comes in, we can just keep evolving
[39:01] the design, so it's it's no longer a
[39:03] case of it's MobiGlass 2.0 or 3.0. It's
[39:08] it's the living MobiGlass. So while
[39:10] we've made a lot of these improvements
[39:13] um and we're able to accomplish a lot in
[39:15] terms of improving the UI for 3.1,
[39:18] there's still a ton of stuff that we
[39:20] that we wanted to get in that we haven't
[39:22] yet. So we want to be able to view stats
[39:24] on the player. So and and be able to
[39:26] compare items when you're actually using
[39:28] this loadout screen. So that's a whole
[39:30] another thing that we need to build in
[39:31] still is is the stat comparison and you
[39:34] know, if I equip this uh component to my
[39:36] ship, how's that going to affect my
[39:37] speed and my acceleration and so forth.
[39:39] So we don't necessarily have too much of
[39:41] that right now, but that's something
[39:43] that's definitely we we're looking to
[39:45] going into the future cuz, you know,
[39:47] it's
[39:48] it's a pretty vital especially in the
[39:50] loadout screen. And just general kind of
[39:53] uh effects as well. So, you know, we
[39:56] we we need to have a much more improved
[39:58] highlighting of the different uh items
[40:01] that you're focusing on on the
[40:03] character. So, that just comes with uh
[40:06] shader improvements.
[40:07] Um and
[40:10] yeah, just the the general um
[40:13] feeling of it is just going to be
[40:14] iterated over time. So, I think we sort
[40:16] of lost the zooming and panning
[40:18] functionality, but we kind of we we
[40:19] still, you know, in this unification
[40:22] some stuff sort of got lost as they were
[40:24] quite bespoke, but now we want to be
[40:26] able to obviously have that
[40:29] come back and and, you know, have this
[40:31] nice feeling of the the ship or the
[40:34] character and you you kind of zooming
[40:35] out to the the port and that kind of
[40:37] highlighting very nicely. That's
[40:38] something that, you know, obviously
[40:41] uh would be really nice to have, but
[40:43] wasn't really necessarily critical uh
[40:45] for 3.1. Um
[40:47] but definitely going forward we uh we
[40:49] want to add in that polish
[40:51] for sure.
[40:52] The PMA improves with every release. Uh
[40:54] we still have a little more work to do
[40:55] with the item previews, uh but we're
[40:57] getting closer to the finished article
[40:59] with every release. And that's all for
[41:01] this week. Remember, if you're out there
[41:03] in Alpha 3.1 and you're interested in
[41:05] checking out new ships like the
[41:06] Reclaimer, Terrapin, or Cyclone, our
[41:08] flyable ship sale is still on through
[41:10] the end of this weekend.
[41:12] Yes, and Citizen Con is coming up in
[41:13] October in Austin, Texas. Uh we're
[41:16] finalizing venue details now and we'll
[41:18] have more details including ticket
[41:19] information soon. Reverse the Verse airs
[41:22] live tomorrow at 9:00 a.m. PDT or 5:00
[41:24] p.m. UTC on our Twitch channel with
[41:26] developers from the UK audio and props
[41:28] team stopping by. And if you missed this
[41:31] week's episode of Lore Makers Guide to
[41:32] the Galaxy, tune in to learn more about
[41:35] the mysteries and dangers of the Nul
[41:36] system. Mhm, that nothing system will
[41:38] see. Yes, and check out new episodes of
[41:41] Calling All Devs every Monday where your
[41:43] questions could be answered by a member
[41:44] of the team.
[41:46] Thanks to our subscribers for sponsoring
[41:48] all of these great shows. Yes, thank
[41:50] you. And we have some exciting stuff on
[41:51] the horizon for subscribers starting
[41:53] with new usable in-game flare like the
[41:55] weapon finishes debuting later this
[41:57] month. Yeah, these are looking pretty
[41:59] cool. Uh and thank you, of course, to
[42:02] our backers. Without your dedication, uh
[42:04] we wouldn't be able to do any of this.
[42:06] No, we wouldn't. And until next week
[42:08] we'll see you around the Verse.
[42:50] Thanks for watching. For the latest and
[42:52] greatest in Star Citizen and Squadron
[42:53] 42, you can subscribe to our channel or
[42:55] you can check out some of the other
[42:57] shows. And you can also head to our
[42:58] website at
[42:59] www.robertsspaceindustries.com.
[43:03] Thank you very much for watching.

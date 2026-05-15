# Star Citizen: Around the Verse - Upgrading Ships to Item 2.0, Part 2

**Video:** https://www.youtube.com/watch?v=zIjBPqmOG-0
**Date:** 2017-06-09
**Duration:** 32:04

## Transcript

[00:15] hello and welcome to around the verse
[00:18] our weekly look at the development of
[00:19] star citizen I'm sandy gardner and i'm
[00:22] chris roberts it is great to have you
[00:23] back in LA office truth
[00:25] yes it's back a little bit of jet lag
[00:26] but i just returned from about a month
[00:29] over in europe at our foundry 42 offices
[00:31] in Germany and the UK and we could sit
[00:34] down with both teams to work through the
[00:36] various aspects of 3.0 and squadron 40
[00:38] which were very hard at work on you can
[00:40] find out exactly what all of our
[00:42] officers have been up to by readings
[00:44] made monthly report which we're
[00:46] releasing tomorrow yeah and to tide you
[00:48] over until then here's an account of an
[00:50] update from our UK office which I think
[00:52] you'll enjoy
[00:52] hi everyone my name is Nick Elms and I'm
[00:55] the creative director here at foundry 42
[00:57] in the Wilms office in the UK Aaron is
[01:00] on holiday this week so it's up to me to
[01:02] give you this month's studio update as
[01:04] you would imagine the Wilms office is
[01:06] still a hive of activity with tasks bugs
[01:08] and features all being worked on to both
[01:10] squadron 42 and 3.0 let's start with the
[01:14] ongoing Sprint's with the air traffic
[01:16] controller sprint the initial groundwork
[01:17] has now been completed and we're moving
[01:19] on to more of the functionality
[01:21] including communicating with the ATC
[01:23] from your cockpit when you want to land
[01:25] you now target the station using the
[01:27] player interaction system select the
[01:29] option to request a landing then you'll
[01:31] be given the start of a communications
[01:32] channel with the NPC to have a dialogue
[01:35] with them
[01:35] we're currently in the process of
[01:38] implementing this in real-world cases so
[01:40] for example in RP you map we are setting
[01:43] up a port olisar so both requesting your
[01:45] ship as well as landing will all go
[01:47] through the ATC as part of the push to
[01:49] make starter system more accessible
[01:50] we're introducing a new hint system to
[01:52] make the initial learning curve lower
[01:54] for new players as the player begins
[01:55] their first steps into the spouse's
[01:57] in-universe various hints will get
[01:59] displayed on the UI giving feedback on
[02:01] how to interact with the different
[02:03] systems whether it's entering the
[02:05] proximity of the a SOP terminal or
[02:07] letting them know about a movi glass
[02:08] feature after a given amount of time
[02:11] 43.0 we're changing how the player
[02:13] spawns into the level currently this is
[02:15] done by spawn points so these bedroom in
[02:17] the pu map has its own spawn point and
[02:19] then some flow graph logic to position
[02:21] them correctly in the bed and play the
[02:22] correct animation as you will imagine
[02:24] with a number of spawn locations and the
[02:26] PU issues adding up to a lot of flow
[02:28] graph and setup going forwards we're
[02:30] creating a new spawn component which can
[02:32] be added to any entity for example if
[02:35] this component is added to a bed we will
[02:37] then assume the player will need to be
[02:38] attached correctly to it and play the
[02:40] normal lie down idle animation
[02:42] automatically this now means that we can
[02:45] remove a large amount of flow graph and
[02:47] simplify the setup of the level work is
[02:50] continuing for the missions on 3.0 with
[02:53] the progress on the implementation of
[02:55] the mission broker and mission manager
[02:57] these will determine how a mission and
[02:59] all its objectives are presented to and
[03:01] given to the player to complete they
[03:03] will also be tracking what missions a
[03:05] player who already has and how far
[03:07] through the objectives they are in the
[03:09] AAA locomotion sprint we are spending
[03:11] time refining the way the AI walks and
[03:13] runs around a level we have found that
[03:15] just following a path which is
[03:17] determined by the path finding code
[03:18] gives a result which looks very
[03:20] unnatural we're now implemented a new
[03:22] path smoothing algorithm which makes AI
[03:24] traversal around corners in a much more
[03:26] natural way so it doesn't look like
[03:28] they're going from one point to the next
[03:29] because they're generally moving to get
[03:31] to a particular place we're currently
[03:33] working on making reaching that point
[03:35] and going into whatever animation is
[03:36] required to be as seamless as possible
[03:38] the graphics team have been wrapping up
[03:40] and bug-fixing the major features
[03:42] mentioned in our last last update such
[03:44] as lip fog real-time environment probes
[03:46] planet lighting and render to texture
[03:49] work Holograms and video comms in
[03:52] addition they've made some tweaks to our
[03:54] lighting model to improve the appearance
[03:56] of ground reflections of the Sun on
[03:58] planets at sunset and sunrise the u.k
[04:02] animation team has continued to work on
[04:03] the FPS weapons with the previous
[04:05] complete for the new gemini l86
[04:07] ballistic pistol the arrowhead is now
[04:09] close to final with just some minor
[04:11] polish work left on the reload States
[04:13] the take downs have gone from an
[04:15] implementation pass to a more refined
[04:17] animation pass with concentration on a
[04:20] stronger composition solid posing clear
[04:22] silhouettes and polish to the mocap data
[04:25] to better sell the overall action the AI
[04:27] animation work is ongoing with
[04:29] improvements to the posing of enemy
[04:31] Patrol States and reactions to sight and
[04:33] sound the team are also helping to
[04:34] export the remaining gameplay story
[04:37] cinematic scenes so that design can
[04:39] implement and better visualize the story
[04:41] within the levels they're working on the
[04:43] Derby animation team are finishing off
[04:45] the facial animations for the 3.0
[04:47] mission givers and Eckart's body
[04:50] animation is being polished and
[04:51] implemented to last week some of the
[04:53] team attended a PU audio and facial
[04:56] shoot in London they captured some
[04:57] awesome footage from some great actors
[04:59] and we think it will go a long way to
[05:01] flesh it out the universe the VFX team
[05:03] have continued tests with a new lighting
[05:05] entity this time focusing on smaller
[05:07] scale interior electrical effects they
[05:09] have also been testing the features in
[05:10] the new particle system as provided by
[05:13] the graphics team including better
[05:14] trailer options and depth buffer based
[05:16] collision required for sparks for
[05:18] example the first low-key exterior VFX
[05:20] passes under way including refinery
[05:22] flames and general ambience the new
[05:28] cutlass flight-ready VFX
[05:29] including interior damage and thruster
[05:31] effects are now done work has continued
[05:33] on the atmospheric flight effects print
[05:35] with heavy focus on play testing book
[05:38] fixing and testing new features has
[05:40] provided by the graphics and engineering
[05:42] teams the ongoing polish for the VFX for
[05:45] the new weapons and rework versions is
[05:47] continuing up to the 3.0 release on the
[05:49] outside the origin 600 I concept process
[05:52] has now finished and we're really
[05:54] looking forward to seeing what you guys
[05:55] think it's one sleek ship the next
[05:58] ground vehicle has been rocking along
[06:00] and we're just about to kick off a whole
[06:02] new round of ships on the ship weapons
[06:03] front we've taken the Klaus and Lerner
[06:05] styling from the FPS weapons and use
[06:08] that to influence the work on the Klaus
[06:10] and Verner laser Peter on the other end
[06:12] of the spectrum we're looking at some
[06:14] cool looking Max ox neutron repeaters
[06:16] the art team has also been hammering
[06:17] away at further Shubin mining station
[06:20] interiors working out a few more areas
[06:23] to improve on for its believability this
[06:25] is done by zero in on the functionality
[06:27] of the area's work has also continued on
[06:30] providing further infrastructure to the
[06:32] habitation pods including comms arrays
[06:34] water collectors and small deployable
[06:36] communication units our space scenes
[06:38] have been
[06:39] in a major facelift for the 3.0 release
[06:41] we've been very busy adding large
[06:43] volumes of interplanetary space dust
[06:45] within the stanton system adding texture
[06:47] and visual interest to our space
[06:49] overworld has been a big priority for
[06:51] the 3.0 release as part of this sprint
[06:53] we've reworked some of the distant
[06:55] nebula in the stanton system but there's
[06:56] still lots more to come we've been
[06:58] working on large-scale nebulae rendering
[07:00] techniques using the pyro system as a
[07:01] test case these techniques will help us
[07:04] create our interstellar scale nebula
[07:06] also for squadron 42 we're exploring the
[07:08] look and feel of the coil which plays a
[07:10] major role in the first campaign we're
[07:12] using powerful fluid simulations to help
[07:14] us achieve this look any work we
[07:15] undertake on improving the space 43.0 as
[07:18] always is a great benefit for squadron
[07:19] 42 work is ongoing for the truck stop
[07:22] station materials this includes
[07:23] finalizing the panel shapes adding some
[07:25] hue and gloss variation and elements of
[07:28] wear and tear and dirt the unclogged
[07:29] frames also being finalized with
[07:31] structural elements surrounding the
[07:32] machinery and high-frequency detail we
[07:35] have continued to work on the solar
[07:36] panels trying different ideas out and
[07:38] getting them to a stage where they gel
[07:40] well with the rest of the truck stop the
[07:41] rest of the truck stop team are
[07:43] finalizing the main hall pieces before
[07:45] proceeding to the front and back
[07:46] sections of the station special
[07:48] consideration is being made to ensure
[07:49] all pieces of work as well as the
[07:51] modular set don't look visually
[07:52] repetitive detail layer areas around the
[07:55] landing pad is ongoing and this includes
[07:57] adding more visual complexity to the
[07:59] back of the landing pad as well as the
[08:00] borders around the edge of the pad in
[08:02] relation to the surface outpost more of
[08:05] the archetypal outposts have had a
[08:07] dressing and the lighting paths this
[08:09] includes an emergency shelter which can
[08:11] be found dotted around the moons as a
[08:13] place for crash pilots to take refuge
[08:15] also an illegal drug lab which may or
[08:18] may not be on one of the moons planet
[08:20] integration materials for the outpost
[08:22] exterior have been tested and tweaked
[08:24] for sand and ice biomes this determines
[08:26] the amount of dirt build-up that can
[08:28] vary for each biome and can be adjusted
[08:31] for each outpost for variation branding
[08:33] prototyping has been explored for
[08:35] procedure locations with the ray re
[08:37] brand as a test case this includes the
[08:39] main logos and text along with the
[08:41] secondary logos indents lines and
[08:44] signage this would procedurally swap
[08:46] brands depending on who owns the outpost
[08:48] with regard to the ship team the
[08:49] reclaimer work has been completed on the
[08:51] drone
[08:52] we're keen to focus on the drone
[08:53] deployment and storage mechanism as
[08:55] we're excited to see this become
[08:57] functional when drones come online the
[08:59] engine room has also been completed
[09:01] making use of repurposed assets from the
[09:03] idris all reused assets go through the
[09:05] process of reskin with reclaimer
[09:07] materials to make everything feel
[09:09] consistent and cohesive the exterior
[09:11] damage setup is nearing completion with
[09:14] internal geometry being built to be
[09:17] exposed when the ship takes damage work
[09:19] on the derelict ships and wreckage
[09:20] elements are coming to an end for the
[09:22] initial batch and support is now in
[09:24] place for design to create mission
[09:26] scenarios based on derelict ships in
[09:28] space or on planets the material
[09:30] variations of each ship have been
[09:32] created so that depending on which
[09:34] planet the ships are placed on they will
[09:35] look visually embedded to the surface
[09:37] type
[09:45] [Music]
[09:50] [Music]
[10:07] all its remaining for this phase are the
[10:10] technical elements such as LEDs these
[10:13] areas and collisions the Gladius cockpit
[10:16] has been revamped and relit for the new
[10:18] cockpit experience spring this has been
[10:20] an exercise in improving the players
[10:22] feeling of immersion and has been a
[10:24] collaboration between several
[10:25] departments on the outside it's been
[10:28] achieved by clearing a channel between
[10:30] the top support screens to reveal the
[10:32] Gatling gun on the nose and making a
[10:34] range of interactive buttons for more
[10:36] interesting animations and remodeling
[10:37] the throttle for improved functionality
[10:39] the cockpit canopy has been extended for
[10:41] a better clarity and new interior
[10:43] lighting has been added to help bring it
[10:44] all to life
[11:27] on the whole see exterior work is
[11:29] currently being done on finishing the
[11:31] landing gear mechanisms and detailing
[11:34] the inner Bay Area's while we create the
[11:36] initial animations and work towards a
[11:37] final art the front section of the
[11:39] interior is now modeling complete and is
[11:41] getting a detailed lighting pass using
[11:43] new light groups controller once this is
[11:45] complete the tunnel section and rear
[11:47] engine room will be modeled and lit in
[11:49] the same fashion
[11:50] [Music]
[12:15] the live design team are plowing ahead
[12:18] with content for the PU and they've made
[12:20] sure to spend a bit of time giving
[12:22] much-needed love to some of the existing
[12:24] arena commander of star Marine maps
[12:26] Gangstar has received a new lease of
[12:28] life with the addition of procedural
[12:30] asteroids which give a much more
[12:31] cinematic dogfighting experience both of
[12:34] the star Marine maps have received a
[12:35] number of balancing changes based on
[12:37] feedback from the community in Echo xi
[12:39] we've made some adjustments to the
[12:41] capture points and in last and and
[12:43] damien we've added a sneaking uva route
[12:45] from the Marine spawn zone to landing
[12:48] pad be on the UI front we've been busy
[12:50] chipping away all the various features
[12:51] that are making their way into the new
[12:53] MOBA class we've made progress on
[12:55] getting the home screen fully functional
[12:57] and displaying elements of the active
[12:59] status atmosphere readouts suit status
[13:01] readouts as well as personal overview
[13:03] we've also got player loadout management
[13:05] working as an app in mobile us this
[13:08] interface should easily carry over to
[13:09] handle ship loadout customization as
[13:11] well as is currently in the arena
[13:13] commander for an end menu we're also
[13:15] working to get mote the mobi glass UI in
[13:17] general to be projected using the new
[13:20] render to texture tech which will make
[13:22] the UI looks much more properly
[13:24] integrated within the game world workers
[13:26] continued on designing and implementing
[13:28] the upcoming character customization
[13:30] menu on the front end which will be
[13:32] included in 3.0 from here players will
[13:34] be able to create and customize their
[13:36] various characters and the pu obviously
[13:38] depending on how many character slots
[13:40] that player has initially the level of
[13:42] customization will be limited where
[13:43] you'll be expanded in the future to
[13:45] provide much more granular control of
[13:47] characters features the audio team has
[13:49] been working on several features for the
[13:51] 3.0 release these include the procedural
[13:53] planet ambience system which is designed
[13:55] to place appropriate sounds around the
[13:57] player dynamically as they traverse
[13:59] planetary bodies
[14:13] we've also been refining the approach on
[14:15] how we produce ship armaments and
[14:17] first-person weapon audio further
[14:19] ensuring they're satisfying to the
[14:20] player by reflecting player-driven
[14:22] modifications and customization this
[14:24] example I'm gonna show you today is for
[14:27] the bearing size 2 laser cannon we've
[14:31] basically changed the sound to a kind of
[14:34] new more exciting big sound using our
[14:38] new system which I'll explain so this is
[14:41] what the new sound is like
[14:56] so as you can hear it's basically yeah a
[15:00] lot bigger a lot punchier a lot more
[15:03] kind of pronounced the audio team has
[15:06] been producing sound schemes for the
[15:07] different kinds of diegetic user
[15:09] interfaces that will feature in 3.0
[15:11] including the kiosks the audio direction
[15:14] of these very to suit their technical
[15:16] and this presents some great
[15:18] opportunities to reinforce they're
[15:20] looking for preparations begun in
[15:29] earnest for a Foley session at Pinewood
[15:31] Studios to ensure audio coverage for
[15:34] character clothing and armor and content
[15:37] to extend the footstep system further
[15:38] progress has also been made on the
[15:41] foundational audio tech such as dynamic
[15:43] Bank loading the active status system
[15:46] the audio propagation system and music
[15:49] logic system as well as content
[15:52] production for derelict ships bespoke
[15:54] 3.0 location sound design ship damage
[15:57] effects audio support ship improvements
[16:00] and more besides we're really excited
[16:03] about all the new content and gameplay
[16:04] that 3.0 will bring and as you can see
[16:07] from what's been going on here we're
[16:09] getting closer every day all remains for
[16:11] the UK update is to send out a message
[16:13] thank you to you our backers without
[16:15] which we would not be able to put
[16:17] together this amazing game see you in
[16:19] the verse placing procedural asteroids
[16:23] into arena commander should add a fun
[16:24] new wrinkle to dogfighting ya know it's
[16:27] actually great to see the new technology
[16:29] when building the 3.0 and beyond
[16:30] actually make all the aspects of the
[16:33] game better and handsome and also it's
[16:35] also cool to see one of the new stuff
[16:36] that we're working on that was in the
[16:37] report like the space you know the space
[16:40] Rex on the moons and we'll have land
[16:42] space can be really kind of fun to
[16:44] discover and explore very cool one of
[16:48] the biggest upgrades coming to the game
[16:49] is item 2.0 on last week's episode we
[16:52] use ships to explore how this system
[16:54] opens a whole new world of possibilities
[16:55] for star citizen yeah that's right so
[16:59] when it comes to ships allows for
[17:00] softball components ties into the new
[17:01] interaction system and even upgrades the
[17:04] seats and conference place making that
[17:05] the
[17:07] aspect of flying and controlling or
[17:09] using a ship much more tactile and
[17:11] visceral which is being sort of goal or
[17:13] started in essence beginning for more on
[17:16] this here is part two of our feature on
[17:19] how item 2.0 is changing the way you'll
[17:21] play the game last week we spoke about
[17:29] the incredibly important migration of
[17:31] all our ships to the item 2.0 technique
[17:33] today I want to describe some of the
[17:35] challenges we faced we had B seats and
[17:39] the seats are pretty nifty they allow me
[17:41] to enter exit' and do some basic things
[17:43] but there are only four vehicles they're
[17:45] part of the vehicle logic so one of the
[17:48] stepping stones before we got the 2.0
[17:51] was to turn that seat into more of a
[17:54] generic system it was kind of like the
[17:56] in between the vehicle and then 2.0
[17:59] system and what that allowed us to do
[18:00] was to separate these seats into
[18:03] individual items to do email your enter
[18:06] exits so we started porting stuff over
[18:08] to that system and we came across some
[18:11] problems that the original system solved
[18:14] but the new system didn't say we have a
[18:16] single theater fighter and we opened up
[18:18] the canopy and then the ladder and then
[18:20] you walk up and you enter it now with
[18:22] the original vehicle seats you can do
[18:24] that there there are these things called
[18:26] post actions and I think pre actions
[18:28] basically we play an animation to open
[18:31] those gateways and then the player can
[18:33] enter the entrance and everything in
[18:34] close problem is with that one point oh
[18:37] the new seats is you couldn't actually
[18:39] talk to the vehicle to play those things
[18:42] but you could play an animation on
[18:44] itself
[18:45] so these 1.0 seats were mostly used for
[18:47] things like the multi-crew ships where
[18:50] you didn't have to play those animations
[18:52] on the ship you just need to play it on
[18:55] the seat so you needed like the
[18:56] retaliate er has this dashboard so you
[18:59] you interact with it and do stuff that
[19:02] was all separated of the vehicle but if
[19:03] you needed to still play those animation
[19:05] vehicle you had to go back to vehicle
[19:07] seats so what that led us to do is now
[19:09] we have two different seats they solve
[19:11] two different problems and what we want
[19:14] to do was remove these two seats and go
[19:16] with a 2.0 version that solved both of
[19:18] these issues what we had to come up with
[19:20] was we needed a seat and this thing
[19:23] called a seat dashboard and then the
[19:25] seat access the seat is only responsible
[19:27] for just plopping the player down and
[19:29] giving him control the seat by itself
[19:32] doesn't do anything then you have the
[19:33] dashboard this is basically that
[19:35] infrastructure you see in front of you
[19:37] that shows the UI shows this shows the
[19:39] joysticks and you have the seat access
[19:41] which dictated how you got into that
[19:43] seat now we can do all that which is
[19:46] fine however we needed to brake as you
[19:49] can see we now have three different
[19:50] items where those other original things
[19:54] just pad like the vehicle seat to Ted it
[19:56] just on the ship so now we have to break
[19:59] out all of these assets and put them
[20:01] into different items we have to break
[20:03] out all of the animations into the
[20:04] different states yes the system allows
[20:07] us to do a lot more it allows us to do
[20:09] things that's some of the animation team
[20:11] want to do but because of the way the
[20:13] old vehicle seats and item seats were
[20:15] designed we had to go back and revisit
[20:17] how we did those change the art change
[20:20] the whole process take our animations
[20:23] cut them up in different ways just to
[20:25] get them onto the 2.0 infrastructure so
[20:28] it's like the stuff we want to do way
[20:29] back then we couldn't do so we kind of
[20:31] had to do some fake a route but because
[20:33] of that fakery we had to go back cut
[20:35] them up to how we actually wanted to do
[20:36] it finally after you know this is stuff
[20:39] we've been talking about animation
[20:40] design for a long time it's just an
[20:42] extra step we have to do to move
[20:44] everything over that's one of the
[20:45] reasons why it's taking a little bit we
[20:47] actually have a big master plan of
[20:49] moving all the ships over and it's like
[20:51] all right before we can move this guy
[20:52] over we have to cut that animation up
[20:54] from here to here to here move this here
[20:56] move this here okay does it work as
[20:58] we're doing that ship by ship by ship
[21:00] and of course all of our ships are very
[21:02] special snowflakes they'll do something
[21:04] a little bit different here so we have
[21:06] to reach since we we have a defined plan
[21:09] of how this new setup is going to work
[21:12] we just have to figure out how that's
[21:13] going to get cut up correctly so that
[21:15] works with the new infrastructure one of
[21:17] the precautions we're now taking with
[21:20] all the new ships is learning the
[21:22] problems that we did the past of what
[21:25] this ship is doing wrong or different
[21:27] that's causing havoc a very beautiful
[21:30] ship that's causing us some fun is the
[21:33] gladiator you
[21:34] have two seats on the top and then you
[21:38] have a Bombay door on the bottom and you
[21:41] have this line that has to come down to
[21:43] allow either one of them the original
[21:46] thing wanted both the seats to come down
[21:49] so if I'm piling the ship and my
[21:51] co-pilot want to get out I have to come
[21:53] out with him luckily we're able to split
[21:56] that up so that type comes down then
[21:58] either one to come but you still have
[22:00] the problem that Bombay door because
[22:01] that's part of the landing system and
[22:03] the seat system which is two different
[22:05] seats connections that don't know about
[22:07] each other and the old system didn't
[22:09] really handle that too well but now I'm
[22:11] in 2.0 we're going okay you can't leave
[22:14] until that Bombay is open so we're going
[22:16] to open that first then you could come
[22:18] down then the seats could go back up so
[22:21] we have like systems in place but ships
[22:23] or special cupcakes and we're going to
[22:25] make sure that they work on this new
[22:28] flow when we're splitting up the ship
[22:32] from moving the vehicle from being the
[22:34] seat to this kind of sub hybrid thing
[22:37] called the 1.0 seats we had this thing
[22:40] called a seat hose and the seat host was
[22:43] basically kind to trying to remove that
[22:45] bit of logic of seat from the ship to a
[22:47] generic thing and it was like your very
[22:49] beginning sort of structure it was kind
[22:52] of a weird mixture of things the idea
[22:54] for that thing so that fecal turret
[22:57] generic stuff could use this have seats
[22:59] but because of that a lot of things
[23:02] started using this thing called a seat
[23:04] host so you had things in the player
[23:06] code checking to see if there's if
[23:08] you're attached to an IC test you had
[23:10] things in UI checking to see if you're
[23:12] ni seat us she had a lot of these
[23:13] embedded things checking for this thing
[23:15] called an IC to us which was horrible
[23:17] but it was the only way to get stuff
[23:20] going until we separated these things
[23:21] into components we now have to take
[23:24] those things that we lied on the C toast
[23:27] and make them more into a more generic
[23:28] thing one of the biggest challenges is
[23:31] going to be of course the UI things like
[23:34] the visor relied heavily on the seat
[23:37] host things you pull event the pull
[23:40] information out of you know these events
[23:42] will get dispatched when you know I my
[23:44] ship again this guy starts firing this
[23:47] guy you I will listen to it and it has
[23:49] to go oh I'm not the guy shooting so I'm
[23:51] going to ignore this block but not
[23:53] everywhere did that so you have the UI
[23:55] listening to all these crazy events and
[23:57] it had to rely on this thing called a
[24:00] seed host but if the seed has
[24:02] disappeared and in the registry crashing
[24:05] all sorts of problems we came up with
[24:07] this new infrastructure for the UI for
[24:09] the seats where they relied on more of
[24:13] the item components themselves rather
[24:15] than the seat level and what this
[24:17] allowed us to do was worry about just
[24:20] the item so you would have a UI for
[24:23] power it just relied on knowing about
[24:25] the power plant didn't care about the
[24:26] vehicle didn't care about the player was
[24:29] attached to and the beauty of that is I
[24:31] could technically slap this arm to a a
[24:33] big bending machine that the power plan
[24:36] you can see its power coming but that
[24:39] was the dream and separating that UI
[24:43] bits and pieces is one of the biggest
[24:45] overhauls we had to do not just for UI
[24:47] but than all the other sections of the
[24:50] code and we're still dealing with it
[24:52] because we're at a point where we have
[24:54] to maintain both the admin 1.0 and the
[24:56] atom 2.0 until we could fully flip the
[24:59] switch saying one point I was not
[25:00] supported so you have some new UI with
[25:02] that seat host some UI with just the
[25:05] power and it's kind of that weird thing
[25:07] you're trying to deal with to not break
[25:09] the old until everything you get
[25:11] switched over to the new system one of
[25:14] the other big architectural changes
[25:16] we've been working on is going back to
[25:19] the vehicle if we had items on here we
[25:21] have this thing called an vent system
[25:23] that sensitive nth to the vehicle and
[25:25] that would dispatch it to everybody else
[25:26] but since we want to get away with that
[25:28] vent system for one everyone knows about
[25:31] it and to it was immediate and it was on
[25:34] the main thread what that meant is if I
[25:35] sent it event and I sent it to everybody
[25:38] the main thread basically has to wait
[25:39] until everyone got it they all did their
[25:41] update and then everything happened
[25:43] instantaneous so radar picked up some
[25:46] enemy census events saying this thing
[25:48] was added the UI would get it but to
[25:50] create all these resources just to
[25:51] display a lot of things would happen
[25:53] when one event gets dispatched so one of
[25:57] the things that we changed is instead of
[25:59] having
[25:59] immediate call the vent system we have
[26:01] this thing called a multi-threaded event
[26:03] system and instead of everybody
[26:04] connecting to the vehicle's event system
[26:06] they have their own and they can link to
[26:09] each other so now if you I want to know
[26:11] about radars getting uh you know stuff
[26:13] appearing on the radar you can listen to
[26:15] this thing called the radar data bank
[26:17] and the radar data bank when it picked
[26:19] up something from the radar the radar
[26:21] would send an event to the data bank the
[26:23] data bank wouldn't process it right then
[26:25] and there
[26:25] it would process it in that batch update
[26:27] that I was talking about during its own
[26:29] time hold the events out do its thing
[26:32] and handle that big load onto that
[26:35] thread and then when it would do some it
[26:37] would then dispatch events to other
[26:39] system then they would do that same very
[26:41] thing so we've just offloaded this heavy
[26:44] system into batches and also allows us
[26:47] to guarantee that when this guy sent the
[26:49] event the other guy would pull it down
[26:51] when he was ready not immediately
[26:54] occurring and with that nice event
[26:56] system we could actually do some nifty
[26:58] things where we could actually localize
[27:00] those events so before I was saying we
[27:03] have the we separated the person who
[27:06] controls stuff from the actor to this
[27:09] thing called an item user the item user
[27:11] has these main events we call them input
[27:14] events and he has an input in an output
[27:16] event system he could get inputs from
[27:18] all sorts of things and he could send
[27:21] off outputs so if I press a button he
[27:24] might go oh I need to turn on lights
[27:25] he'll translate that to an out event
[27:28] system he will dispatch to all the items
[27:30] heat they control but they'll only pull
[27:33] it down when they're ready to so the
[27:35] player hits a button and maybe switch on
[27:37] light the switch on light gets sent to
[27:39] an event to get it finds the controllers
[27:42] that he controls figures out oh this guy
[27:44] needs to have it cured this event that
[27:47] light controller will pull the event
[27:50] down in its batch update go ok I need to
[27:53] turn on lights so I'm going to go
[27:55] through all my lights send them an event
[27:56] saying hey go turn on they'll go in
[27:59] their batch update and go oh I should be
[28:01] on or off
[28:01] I'm going to turn off off on whatever
[28:04] button you hit so now we've moved this
[28:07] thing that with a global thing on the
[28:08] vehicle so I send the event here and
[28:10] there everyone gets it to
[28:12] a more localized system that all gets
[28:14] usually utilizing that batch update and
[28:17] the whole big infrastructure of our
[28:18] controllers and items this other thing
[28:20] that we have with this item 2.0
[28:22] infrastructure with their old system
[28:24] with their vehicle when I sat down in
[28:27] the seat I would get control of weapons
[28:29] items and all that stuff and each thing
[28:31] would kind of handle their own set of
[28:33] logic I'm in the fire button to shoot
[28:35] and then you would it would do its thing
[28:37] and shoot we wanted to separate that
[28:40] into a much more coherent structure and
[28:42] so after talking with design we came up
[28:44] this this new concept where you have the
[28:48] control manager which is the ship and
[28:50] then you have the user and then the user
[28:53] connects to the control manager and he
[28:55] controls these things called literally
[28:57] controllers so you'd have a power
[28:59] controller a light controller a door
[29:02] controller basically these are the
[29:04] things that have control of sub-items so
[29:08] the controllers handled the input and
[29:10] then they sell things to the items it
[29:12] means you want to power controller so
[29:14] this power controller might have control
[29:16] of sub power plants it will talk to you
[29:19] I saying here's all the power plants
[29:20] that you have what do you want to do
[29:22] with them so if I hit UI or maybe a
[29:24] button to throttle it's an event to the
[29:26] control that controller will go yes you
[29:29] could do that no you can't do that and
[29:31] it will then tell the items to do
[29:32] something so now we basically we have
[29:34] these sub items that are really kind of
[29:36] dummy that handles very specific logic
[29:38] what power plan just needs to provide X
[29:41] amount of power and then you have the
[29:43] energy controller that basically input
[29:45] from UI and input from the user and it
[29:47] translates what you want to do to those
[29:50] sub items so we have these very specific
[29:53] things that handle the I guess to be
[29:57] called the control hierarchy is ash said
[29:59] and last week's episode although it's a
[30:01] lot of work to implement this tech it is
[30:03] a game changers every sense of the word
[30:04] item 2.0 touches every facet of the game
[30:07] and will ultimately create a much more
[30:09] immersive interactive experience thanks
[30:12] for watching Seacrest out
[30:15] so as you can see item 2.0 not only
[30:17] allows it to implement new features but
[30:19] also streamline others it's obviously a
[30:21] lot of work but will provide a much more
[30:23] immersive experience and
[30:25] you know much I like the motion you do
[30:27] that's it for this episode of around the
[30:30] birds just a reminder that we'll be
[30:31] updating spectrum tomorrow so it will be
[30:33] offline for about half an hour to 11:00
[30:35] a.m. Pacific now make sure to swing by
[30:37] after that to check out all of the new
[30:39] features yeah they're pretty cool you
[30:40] see threads with different view styles
[30:43] and all the rest of stuff and also don't
[30:45] forget Mason see report goes live
[30:46] tomorrow along with another update to
[30:48] our production schedule thanks as always
[30:50] to all of our subscribers whose
[30:52] continued support makes shows like this
[30:54] possible click on the link in the
[30:55] description if you want to learn how to
[30:57] become a subscriber yep thank you to all
[30:59] subscribers and of course star citizen
[31:01] it's a reality because of the amazing
[31:03] support we get from all backers so
[31:05] thanks to everyone who's making the game
[31:06] possible we hope you enjoyed watching
[31:08] and we will see you around
[31:18] [Music]
[31:41] thank you for watching so if you want to
[31:43] keep it with the latest and greatest in
[31:45] star citizen and squadron 42 development
[31:47] please follow us on our social media
[31:48] channels see you soon
[31:53] you
[31:57] [Music]

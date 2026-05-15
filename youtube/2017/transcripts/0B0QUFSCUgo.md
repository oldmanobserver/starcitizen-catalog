# Star Citizen: Around the Verse - What is Mega Map?

**Video:** https://www.youtube.com/watch?v=0B0QUFSCUgo
**Date:** 2017-03-23
**Duration:** 28:10

## Transcript

[00:14] [Music]
[00:16] hello and welcome to around the verse
[00:18] our weekly look at the development of
[00:20] Star Citizen I'm Sandy Gardner and while
[00:22] Chris Roberts visits the Frankfort
[00:24] Studio I've been joined today by CG
[00:26] supervisor Forest Stefan thanks for
[00:28] stopping by Forest uh and thanks for
[00:30] having me it's uh great to be here in
[00:32] today's episode we'll share how the mega
[00:34] Maps feature eliminates load screens
[00:36] between levels which means more time for
[00:38] gameplay and less time waiting very
[00:40] important stuff very important uh but
[00:42] first let's kick it off with Eric Davis
[00:44] and our Los Angeles Studio update take
[00:46] it away Eric hey all I'm Eric Ken Davis
[00:49] Senior producer here in Los Angeles
[00:51] we've had quite a busy month since we
[00:53] last talk so let's just dig right in to
[00:56] start off our ship team has been working
[00:57] on the Drake Buccaneer art has created a
[01:00] custom dual weapon Mount all lods have
[01:02] been generated the tech content team has
[01:04] implemented UV 2s and damage Tech design
[01:07] is making their flight balance paths
[01:09] which will get it ready for flight with
[01:10] sound VFX is making solid progress as
[01:13] well the Drake Buccaneer will be a great
[01:15] addition to the Drake lineup and we
[01:16] really can't wait until you're in the
[01:18] cockpit the ship team has also made a
[01:20] lot of progress on the newly revamped
[01:22] RSI Aurora the white box phase is now
[01:24] complete which includes a proxy laying
[01:26] out the space establishing the animation
[01:29] positions laying out the screens and
[01:31] making sure the characters could hold
[01:32] the controls we've started the final
[01:34] geometry on the cockpit in an effort to
[01:36] improve the inside of the ship now that
[01:38] Tech design has implemented all the art
[01:39] updates into the ship's new archetype
[01:41] the RSI Aurora is heading into graybox
[01:44] it's been awesome to see all these
[01:45] different Pieces come together and
[01:46] breathe a whole new life into an already
[01:48] great design we're really looking
[01:50] forward to finishing up and getting it
[01:52] back in the air there are a few other
[01:53] ships making their way through design as
[01:55] well as a slew of quality of life bugs
[01:57] fixes for the upcoming 262 release but
[01:59] we're not not quite ready to reveal
[02:00] those just yet in addition to ship
[02:02] production the tech Design Group
[02:04] completed the design for multi-function
[02:06] displays or MFD screens which control
[02:09] power heat coolers Shields weapons
[02:11] counter measures and missiles in
[02:13] preparation for item 2.0 functionality
[02:15] these designer prototypes are meant to
[02:17] help us understand what's needed and see
[02:19] how everything will interact with each
[02:21] other once these designs have been
[02:22] approved the amazing UI team will create
[02:25] an interface to take advantage of that
[02:26] functionality that engineering is
[02:28] implementing in the back end once the
[02:30] system is in place a ship that is
[02:32] staffed by knowledgeable crew will be
[02:34] able to operate their ship beyond the
[02:35] default system settings and minmax the
[02:37] various ship systems to suit not only
[02:40] your play style but potentially save
[02:42] your life during a devastating attack
[02:44] this month QA aided La development
[02:46] checking a variety of fixes for 262
[02:49] while also providing support to Austin
[02:51] QA with PTU and live sanity checks smoke
[02:54] tests sweeps and deployments and helping
[02:56] new hires get up to speed with the game
[02:58] as for Feature work the team swept ship
[03:00] destruction V effects item system 2.0
[03:02] and implementation of recent Loadout
[03:04] changes and tested multiple iterations
[03:06] of new targeting and ESP code for a
[03:08] quick reminder on quality assurance
[03:10] terms a sanity check basically ensures
[03:12] the game loads which is now automated
[03:14] but still could take an hour and then
[03:16] another 30 to 60 Minutes to investigate
[03:18] any error that Ares a smoke test checks
[03:21] the basic functionality but this takes 6
[03:23] to eight people roughly a day if there
[03:25] aren't any major issues and a full sweep
[03:27] means checking everything you possibly
[03:28] can a proc process that which requires a
[03:31] much larger team and can take over a
[03:33] week as you'd expect full sweeps are
[03:35] most arduous rigorous and intense but
[03:37] also incredibly important now over on
[03:39] the narrative team they've been hard at
[03:41] work at some additional 3.0 missions
[03:44] they've also started some much needed
[03:46] documentation for posters and props to
[03:48] help populate the world of Star Citizen
[03:50] they've also made a lot of progress on
[03:52] the Shan history and Society
[03:54] documentation by creating an equivalent
[03:56] Time Capsule approach for the Shan
[03:58] history from birth to present day also
[04:01] those that saw the three lateral head
[04:02] test portion of GDC a few weeks ago we
[04:05] can now talk about how the team has been
[04:06] doing breakdowns of ethnog groups in the
[04:08] Star Citizen Universe utilizing the
[04:11] power behind that technology as our
[04:13] character customization is rapidly
[04:15] coming together now the engineering team
[04:17] has begun work on the new shop entity
[04:19] that uses data core components it will
[04:22] allow shops to easily stream be streamed
[04:24] in and object containers which will be
[04:26] finished in the next Sprint the plan is
[04:28] to make shops more Dynamic and reactive
[04:31] to the economy by retrieving their
[04:32] inventory from the back end the
[04:35] engineering team also added a new
[04:37] attribute to vehicle xmls that allow
[04:39] designers to specify the interior grid
[04:41] type of the vehicle small medium and
[04:43] large this is a pretty big optimization
[04:45] that will reduce memory storage as All
[04:47] Ships previously defaulted to medium
[04:50] size now last time we discussed the
[04:52] development of the new light group
[04:54] entity that was equipped with a state
[04:56] machine to serve as the ultimate life
[04:58] switch now the implementation of the
[05:00] Core State switching functionality is
[05:02] complete the next step is to start using
[05:04] the Light Group in our vehicles and
[05:06] environments and replace all instances
[05:08] of old layer switching method of light
[05:10] management this new light group entity
[05:13] has allowed us to reduce the number of
[05:14] Lights we've been using which has
[05:16] dramatically impacted performance for
[05:19] example on the Drake caterpillar we were
[05:21] able to reduce from hundreds almost
[05:23] thousands of entities down to 90 or less
[05:26] with no visual impact and that's just
[05:28] the beginning in the upcoming weeks we
[05:30] will continue to evolve the light group
[05:32] with additional features based on
[05:34] feedback from other departments we've
[05:36] been developing also a framework in ifcs
[05:39] or intelligent flight control system for
[05:42] the autopilot to handle situations like
[05:43] a takeoff and Landing sequence this also
[05:46] applies to AI Control they'll be
[05:48] providing the AI developers with a set
[05:50] of tools for controlling the ship like a
[05:52] a move to or change to Etc this will
[05:54] improve stability and predictability of
[05:56] ship motion under optimal conditions
[05:58] there was also a large large update to
[06:00] our room system and atmosphere
[06:01] containers with the addition of several
[06:03] new features as well as better debugging
[06:05] tools and several bug fixes so far the
[06:08] room system has only been implemented in
[06:10] a few locations but these changes will
[06:12] allow us to fully Implement rooms and
[06:15] atmosphere throughout the various
[06:16] location and ships in the game at the
[06:18] moment all the air locks you enter and
[06:20] exit are scripted events they don't
[06:22] Factor an atmosphere of any kind with
[06:24] this new system we'll be able to replace
[06:26] this setup with an actual room and
[06:28] atmosphere that allows for a Dynamic
[06:30] experience in addition to the room
[06:32] system changes they've added a feature
[06:34] to allow the designers and artists to
[06:36] set wear and dirt parameters for
[06:38] loadouts this functionality comes in two
[06:40] levels overall as well as individual
[06:43] values for specific items wear and dirt
[06:45] values are used by the render node to
[06:47] set Shader parameters that make items
[06:49] look old or Dusty scuffed up and burnt
[06:51] out you've seen an example of this on
[06:53] the module surface Outpost seen in the
[06:55] last week's Studio update this task also
[06:58] used Loadout edit edor side work where
[07:00] the team added UI support to edit wear
[07:02] and dirt we've recently also started
[07:05] working on a pretty massive task called
[07:07] The Entity owner manager to give you a
[07:09] little background this is a core feature
[07:12] required to take our gameplay from a
[07:13] multiplayer game to a persistent online
[07:16] experience this system will be
[07:18] responsible for managing ownership and
[07:19] lifetimes of all the entities in the
[07:21] game and will work in conjunction with
[07:23] the backend persistent systems to
[07:26] indicate Dynamic changes to the world
[07:28] that need to be tracked and persisted
[07:30] across sessions The Entity owner manager
[07:33] will also need to work with various game
[07:35] and entity Engine Systems including
[07:37] debris Salvage criminality streaming
[07:40] missions cargo shop and much more to
[07:42] help create the persistent experience
[07:44] across clients and servers in other news
[07:47] the team has been working on scanning
[07:49] subcomponents which require us to do
[07:51] some slight refactoring of the object
[07:53] data bank now the data Bank can support
[07:55] the storage of child entities which will
[07:58] be the subcomponents on on ships players
[08:00] Etc in doing this we also improve the
[08:03] thread safety of accessing data within
[08:04] the data bank which allows us to move
[08:06] some calculations onto other threads
[08:09] which will help improve performance this
[08:11] work is focusing on two big elements the
[08:13] Ping component and angle of focus the
[08:15] Ping component is the method in which a
[08:18] player or Pilot will send out a wave to
[08:19] see if there are objects out there of
[08:22] note within their scan range this could
[08:24] also be a ship an asteroid or even
[08:26] signal traces that Mark whether a player
[08:28] entered or exit ited at Quantum travel
[08:31] other players can detect these traces
[08:33] which could have some pretty heavy game
[08:35] implementations for example if you were
[08:37] an outlaw it would allow you to track
[08:39] potential prey angle of focus allows
[08:42] players to adjust the angle with which
[08:43] they're scanning a smaller angle will
[08:46] provide more range but only contacts
[08:48] within the angle can be detected we're
[08:50] currently refactoring the underlying
[08:52] radar query logic to use Zone queries
[08:55] rather than a huge iteration of
[08:56] registered radar objects which will make
[08:59] the the scanning system much more
[09:01] efficient now if you remember from our
[09:03] last update our Tech content team
[09:05] supports and implements every pipeline
[09:06] within Star Citizen and Squadron 42 one
[09:09] of the main focuses for this team is
[09:11] performance improvements for instance we
[09:14] changed our mesh vertex and position
[09:16] formats which massively improve
[09:18] streaming of these meshes as well as
[09:20] reduces build build size they've also
[09:22] been improving the python integration
[09:24] within our editor which allows for
[09:26] faster development of python tools
[09:28] usable by every Department across the
[09:30] company they can now script any sandbox
[09:33] process they want for example placing
[09:35] asteroids generating modular outposts
[09:37] Etc all of which saves a tremendous
[09:40] amount of development time on otherwise
[09:42] tedious and timeconsuming
[09:44] tasks you also may have noticed the
[09:46] player helmets were disappearing once
[09:48] they got to a certain distance away from
[09:50] you as discussed in the character
[09:53] customization feature at not too long
[09:54] ago we've now converted all helmets to a
[09:57] DOT skin format the conver conversion
[09:59] was important to allow a unified LOD
[10:02] ratio across the character skins meaning
[10:04] no more helmetless people running around
[10:06] the verst so don't be afraid as the
[10:09] oxygen system comes online we would hate
[10:11] to be the reason you lose that FPS
[10:12] Battle On the Dark Side of the Moon to
[10:15] ensure this is easier in the future Tech
[10:17] content has also created tools that rig
[10:19] skins and exports automatically this
[10:21] dramatically reduces Dev time from
[10:23] potentially an entire day down to just a
[10:25] few minutes now that head helmets are
[10:28] optimized heads were next on the agenda
[10:30] we've successfully converted all heads
[10:32] to use the human skin Shader developed
[10:34] by our Graphics team since we do 44
[10:37] different areas of Blended wrinkles and
[10:39] Blended diffuse our texture cost was
[10:42] quite high at about 100 Megs per head
[10:44] with this change we were able to save
[10:46] roughly 90% of the original texture
[10:49] memory cross without a discernable
[10:50] visual impact this means we can have a
[10:52] lot more characters in the scene without
[10:54] melting your graphics card with the
[10:57] implementation of the female character
[10:59] progressing rapidly we've transferred
[11:02] thousands of animations from male to
[11:04] female to complete her Motion Set and
[11:06] provide a data for animation to start
[11:08] iterating on this will also allow us to
[11:11] focus on refinement and subtleties
[11:13] without compromising on what she'll be
[11:14] able to do when exploring the universe
[11:16] there's quite a bit more to do but we're
[11:18] making leaps forwards every
[11:20] day another character animation tool the
[11:23] tech content team has been completed is
[11:25] this track and Report the number of
[11:28] various Wild lines each character will
[11:30] have in the universe with our over 1255
[11:33] pages of script for squadron 42 which
[11:35] includes all story lines as well as wild
[11:37] lines we needed a tool to continuously
[11:39] generate reports on how many we've
[11:41] completed and what we have left to solve
[11:43] once the various lines are all in the
[11:45] system will be able to pull those lines
[11:46] based on player action and situation but
[11:49] and also randomize the potential wall
[11:51] line response so the NPCs aren't
[11:52] repeating the same line every time to
[11:54] help our cinematics team focus on
[11:55] content needed for squadron 42 a tool
[11:58] was written to allow for visibility of
[11:59] scenes before they even hit the engine
[12:01] this allows for fast exporting of
[12:03] animations and preview renders which are
[12:05] then automatically uploaded to shotgun
[12:08] which makes it much easier and faster to
[12:10] review than many hours of cinematics or
[12:11] Squadron
[12:13] 42 the character team has been blasting
[12:16] through the concept phase the high poly
[12:18] phase and onto the in-game mesh of the
[12:20] heavy Outlaw next it's going to go into
[12:23] rigging and
[12:24] implementation we've also sent the light
[12:27] medium and heavy female marine armor as
[12:30] well as the unders suit to rigging and
[12:32] implementation once we had that male
[12:34] base suit done we utilized a wrap
[12:36] technique with with adjustments to save
[12:39] development time and ensure we're
[12:41] getting everything together as quickly
[12:42] as possible another suit that move has
[12:45] moved through the high poly phase is the
[12:46] female Explorer suit so she'll be
[12:49] exploring the universe in no time on the
[12:51] Squadron 42 character front both the Eva
[12:53] Deb crew and the Marine BDU have gone
[12:55] through high poly and are onto the
[12:57] in-game mesh and texture string phase
[12:59] which means they should be in rigging
[13:01] and implementation in no time in a
[13:03] category of things we can't talk about
[13:05] we've continued developing the vanuel as
[13:07] well as medium and heavy versions of the
[13:09] OMC Outlaw faction and lastly the
[13:12] mechanized Titan suit is in R&D along
[13:14] with other alien concept sculpts and a
[13:17] whole lot more that we can't reveal just
[13:19] yet but stay tuned for updates in the
[13:21] coming weeks well that does it here for
[13:24] Los Angeles thank you so much for your
[13:26] support we'll see you again soon as you
[13:29] may have seen on our production
[13:30] schedules our developers have been
[13:32] working on a new system called Mega Maps
[13:35] understandably some of you may not know
[13:37] what that means uh yeah it is a tough uh
[13:39] concept uh to grasp in the simplest
[13:41] terms Mega map means to eliminate the
[13:44] loading screens um so it basically uh
[13:46] streamlines the object containers while
[13:48] loading in and out the different areas
[13:50] uh and the different game modes the goal
[13:51] of Mega Maps is to allow players to
[13:53] travel through the universe without
[13:55] interruption or lag time to better
[13:57] explain how Mega does this let's take a
[14:06] look the mega map is a new feature that
[14:10] we're putting into the game to cut a lot
[14:12] of the frustrations with load times out
[14:16] for people essentially eliminate load
[14:18] screens all together the issues that
[14:20] drove us to this technology come from
[14:22] the unprecedented scale of this universe
[14:25] we're creating what this means is we
[14:27] couldn't load it into one m without
[14:29] crippling memory and performance so we
[14:32] divided it up and put the segments into
[14:34] object containers which we could load as
[14:36] needed the problem with that was that it
[14:39] meant players would need to wait through
[14:40] a series of load screens as they moved
[14:43] about in the game the mega map was our
[14:46] solution we load the mega map as we
[14:48] would a standard map the mega map itself
[14:51] is empty but once the mega map's loaded
[14:54] we actually start to fill the mega map
[14:56] with content our various game mod modes
[14:59] via um object containers so we would
[15:03] load the mega map which is empty load
[15:05] the front end which is a set of object
[15:08] containers load the front end game rules
[15:10] which tells the game how to work in that
[15:13] game mode the user would then pick a new
[15:17] game mode to play at that point we throw
[15:19] away all the object containers we throw
[15:21] away the game mode load in the Free
[15:24] Flight game mode and the ding star
[15:26] object containers but we do that via
[15:29] streaming rather than a complete level
[15:31] load so we're able to shave um the vast
[15:36] majority of the load time down to a few
[15:39] seconds rather than long enough to
[15:42] Warrant a load screen as you can see
[15:44] even with mega Maps switched on there is
[15:46] still a load stall it's only a few
[15:48] seconds compared to the 30 seconds it
[15:50] takes to load without the mega Maps
[15:52] feature but it's still something we're
[15:54] working to eliminate by making the
[15:56] feature operate asynchronously so gam
[15:59] playwise that's great for players if
[16:01] they want to be in the front end
[16:02] changing some settings they can go to a
[16:04] hanger they can put some items in the
[16:07] hanger look at their ships then
[16:08] immediately go back to the front end
[16:10] they load screens pick a game mode um as
[16:13] race mode they can dive straight into um
[16:16] race mode play around with one ship
[16:19] decide they don't like that ship come
[16:20] back to the front end switch to a new
[16:23] ship still no load screens rather than
[16:25] having a process where they're sing the
[16:28] front end and they have to think
[16:29] carefully where they want to go because
[16:31] they know there's load screen coming up
[16:33] go there do some stuff and then load
[16:35] screen again
[16:37] so by adding this new feature we're
[16:40] putting into the game the first
[16:42] application of um a lot of the object
[16:45] container
[16:46] streaming which will be um a fundamental
[16:50] part of the Pu experience moving forward
[16:53] as the Pu becomes essentially like its
[16:56] own Mega map with a bunch of sets of
[17:00] object containers that will stream in
[17:02] and out as you move through that map the
[17:07] the thing that makes this tricky in
[17:09] terms of gameplay
[17:11] programming is with the new flow we're
[17:14] now not destroying and recreating the
[17:17] player between game modes so with the
[17:20] new setup it potentially makes it easier
[17:23] to
[17:24] persist some of some of the players
[17:27] attributes between these game modes
[17:29] because the fact that we're not
[17:31] destroying him and recreating him so one
[17:35] of the more interesting bugs that the
[17:37] new Mega map flow has produced was QA
[17:42] finding that they could um place down a
[17:45] liquor cabinet in their hanger take a
[17:48] few swigs from a bottle get slightly uh
[17:52] blurry
[17:54] visionwise then uh decid they didn't
[17:56] want don't want to be in the hanger
[17:58] anymore or they want to go fly their
[18:00] ship in free flight however with this
[18:02] new flow the players not being destroyed
[18:06] and recreated so unfortunately for you
[18:09] the player you now find yourself in the
[18:12] ship with blurry vision trying to fly
[18:15] through
[18:16] space which is probably not the best
[18:20] thing for a player to uh be doing so
[18:23] it's something we'll obviously be
[18:25] looking to fix but a nice uh
[18:27] illustration of the kind of interesting
[18:31] challenges that we're facing um fixing
[18:34] up this new flow Mega map for
[18:36] multiplayer is a little bit more
[18:38] complicated it builds on top of the the
[18:39] single player implementation the tech is
[18:42] the same up to a point the additional
[18:44] challenge is that each level in our
[18:46] multiplayer game lives on its own server
[18:48] to handle the tens of thousands of
[18:50] players who might visit it at any one
[18:52] time a multiplayer match and it comes to
[18:56] an end and you want to change to another
[18:59] multiplayer game mode and map then
[19:02] you're going to have to um unload the
[19:05] map that you're in say d star go back to
[19:07] the front end make your selection as to
[19:08] what you want to do and then load into
[19:10] the the next map say broken Moon doing
[19:13] pirate swarm or whatever because you're
[19:14] going from connected to a server back to
[19:17] the front end we've got to drop the
[19:18] connection but we've got to keep the
[19:19] mega map in memory uh empty out all its
[19:22] contents put all the front end pieces in
[19:24] let the player make a selection and then
[19:26] go and connect to another server while
[19:28] keeping a map in memory at the same time
[19:30] and then streaming all the new pieces
[19:32] for the new map it's a bit like trying
[19:34] to unplug your computer and then
[19:36] replugging it without losing power and
[19:38] that's not the way we've been doing
[19:39] things before it's been very much uh get
[19:42] to the end of a a match you drop the
[19:45] connection to the server you clean
[19:46] everything out and it's kind of like a
[19:48] hard reset of the system load in the
[19:51] front end make your
[19:53] selection end of that hard reset of the
[19:55] system connect to the next server so
[19:57] we're just keeping the map in memory but
[19:59] switching connections uh to servers and
[20:03] switching between single player and
[20:05] multiplayer game modes at the same time
[20:08] uh without doing this this reset which
[20:10] is a bit of a challenge because the way
[20:13] the engine's being built it's kind of
[20:15] the assumption that once the system
[20:16] starts up it'll either be in single
[20:19] player mode or it'll be in multiplayer
[20:20] mode and it'll always stay that way
[20:23] until the system shuts down again but
[20:25] now we're changing these things
[20:26] dynamically all the time um so that can
[20:29] create a lot of bugs so it's kind of
[20:30] been a process of uh trying it out
[20:33] finding out what it breaks fixing it
[20:36] trying it again finding out what it
[20:37] breaks fixing it and we just keep doing
[20:40] that over and over taking a a system
[20:43] like um Crusader and ex extending it you
[20:47] might have
[20:49] um an object container for each of the
[20:52] stations uh each of the coms arrays
[20:55] there'll be an object container that
[20:57] contains references to the object
[20:59] containers for where all these other
[21:00] things are and they'll just be sort of
[21:02] left there very lightweight form and
[21:03] then as you head towards say Port Allisa
[21:06] the object container for Port Alisa will
[21:08] get loaded in and expanded and that may
[21:10] contain other object containers that
[21:12] contain parts of the Interior or
[21:14] different decks or whatever and they'll
[21:15] get loaded in on demand so it it kind of
[21:19] you have a skeleton structure that's
[21:20] defined by an object container and then
[21:22] you can fill in the various parts and
[21:24] collapse them down again and load out
[21:25] another part and then know what scale
[21:27] they going down would say a rooms an
[21:29] object
[21:30] container um assemble them together to
[21:32] make a deck assemble them together to
[21:34] make space station that's an object
[21:36] container interior exterior possibly
[21:37] could be different object containers
[21:40] that's linked to an object container in
[21:42] space it says where that space station
[21:44] is and that will be parented by the sort
[21:46] of root system object container it says
[21:49] where all the different space stations
[21:50] are on that system and different planets
[21:52] and so on so it kind of scales out that
[21:54] way but uh so far it's only um been done
[21:58] for the star Marine maps and Arena
[22:01] Commander Maps um when we bring this
[22:04] technology over uh to pu it'll have to
[22:08] be done through Crusader and the other
[22:10] systems that are going to come online uh
[22:12] so it's a lot of work that we need to do
[22:14] still but the the technolog is kind of
[22:17] at the point where we can start seeing
[22:19] the benefits of it now star citizens
[22:22] question of scale really isn't it it's
[22:24] it's taking a standard game and making
[22:26] it much bigger than than anything else
[22:29] that's you know currently out there um
[22:31] and the only way you're going to be able
[22:33] to do that is by focusing on what the
[22:35] player needs to know and tailoring that
[22:37] experience for each player even though
[22:38] they're all connected to the same server
[22:40] so you're always looking for
[22:41] opportunities to to not do something and
[22:45] avoid that little bit work well on the
[22:48] computer side of things anyway
[22:51] yeah thanks guys for that Insight on
[22:54] Mega Maps cutting down on weight time is
[22:56] really important to improving gameplay
[22:58] yeah absolutely uh I also look forward
[23:00] to seeing the uh multiplayer Mega Maps
[23:03] rolled out in Star Citizen yeah and then
[23:06] many players will be able to quickly
[23:08] Traverse the universe at the same time
[23:10] now before we wrap up today's show we
[23:12] want to express our gratitude to all of
[23:14] our subscribers yeah shows like this one
[23:16] would not be possible uh without your
[23:18] support which is why we are rolling out
[23:21] new subscriber perks due to popular
[23:23] requests from our current subscribers
[23:26] we've got a third edition of jump point
[23:27] in the works and we're also making the
[23:29] Free Flight of the month a permanent
[23:32] addition for all of the subscribers more
[23:34] details on the subscriber perks so take
[23:37] a
[23:46] look hey everyone I'm Sandy Gardner and
[23:49] I'm Alexis we wanted to take this chance
[23:51] to thank all of our subscribers both
[23:52] centurions and imperators for your
[23:54] ongoing support we look forward to
[23:56] continuing the journey with you you and
[23:58] we've updated your subscriber perks if
[24:00] you're new to the Star Citizen Community
[24:02] Star Citizen subscription programs were
[24:04] created to provide an added level of
[24:06] community interaction and offer you some
[24:08] unique perks as a subscriber Centurion
[24:10] or imperator you get access to jumpo
[24:13] jumpo is star citizens monthly magazine
[24:16] featuring interviews with the dev team
[24:18] in-depth looks at the process of
[24:19] building game assets along with new
[24:21] fiction and lore pieces there is also
[24:23] the vault which is updated weekly with
[24:25] all sorts of ship Concepts environments
[24:27] and characters subscribers allow us to
[24:29] create all of our video content shows
[24:32] like around the verse bug Smashers lur
[24:33] makers Guide to the Galaxy happy hour
[24:36] and citizens of the stars as well as
[24:37] more in-depth events like 10 for the
[24:39] chairman and subscribers Town Hall we
[24:41] like to put you behind the scenes
[24:42] hearing from the creators themselves
[24:44] about the development of Star Citizen
[24:46] centurions and imperators get exclusive
[24:48] access to submit questions for Chris and
[24:51] the rest of the dev team to be answered
[24:52] during 10 for the chairman or town hall
[24:54] videos you also get access to the
[24:56] subscriber forum where you can interact
[24:58] with other subscribers and myself as
[25:00] well as participate in subscriber only
[25:02] polls and Q&A threads a new perk for all
[25:05] subscribers is our ship of the month
[25:07] club that's where we unlock a ship for
[25:09] subscribers to test fly so if you're
[25:11] dueling it out in Arena Commander or
[25:13] exploring the space around Crusader you
[25:15] can try out a new ship every month
[25:17] imperators will also have access to test
[25:19] flight all available ships and variants
[25:20] when new patches go live for a duration
[25:22] of 1 week subscribers get a variety of
[25:25] other extras including Early Access to
[25:28] event tickets and discounts on physical
[25:29] merchandise as well as subscriber
[25:31] exclusive merchandise and for the
[25:33] collector and you there's a free hanger
[25:35] decoration every month these have ranged
[25:37] from models of ships glowing algae
[25:39] plants and even an ancient underwater
[25:41] creature skull for your in-game hanger
[25:43] imp parator subscribers get a little
[25:45] extra double the flare double the
[25:47] discount coupon plus your ship of the
[25:49] month roster is expanded too you can get
[25:51] access to some of the limited alien
[25:53] ships like the Vandal Jean and vano
[25:55] ships as they become available so again
[25:58] thank you to all of our subscribers and
[26:00] we will see you in the in the
[26:10] verse in addition to the new subscriber
[26:12] perks all active subscribers or anyone
[26:16] becomes a subscriber before April 17th
[26:18] will receive an awesome piece of flare a
[26:21] big Benny's vending machine cool that's
[26:24] a great addition to any hanger and if
[26:26] you're interested in learning more about
[26:28] our subscriber program click on the link
[26:30] in the description below uh and that's
[26:32] all for today's show again thank you to
[26:35] all of our subscribers as well as our
[26:37] backers none of this would be possible
[26:40] without you so so much thanks for
[26:42] everything also please join us tomorrow
[26:44] at 12 Pacific for Star Citizen happy
[26:46] hour for a special game development
[26:48] episode Jared hucke Tyler Nolan and
[26:51] Tyler Wicken will be joined by technical
[26:52] designer KX Renault uh and after the
[26:55] excitement of last week's basketall
[26:57] basketball half court reveal in the UK
[26:59] Studio update kaix will try his hand at
[27:01] creating a first pass game mechanic that
[27:04] might make it possible to shoot hoops in
[27:06] the game of course this isn't a mechanic
[27:08] currently scheduled to go in game but
[27:09] it'll be a fun behind the scenes look at
[27:12] visual scripting all the same wow sounds
[27:15] like a musty episode thanks for watching
[27:18] and we'll see you around the
[27:26] verse
[27:28] [Music]
[27:47] thank you for watching so if you want to
[27:49] keep up with the latest and greatest and
[27:50] Star Citizen of Squadron 42's
[27:52] development please follow us on our
[27:53] social media channels see you
[27:56] soon
[28:03] [Music]

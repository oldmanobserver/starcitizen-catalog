# Star Citizen: Around the Verse - Serialized Variables

**Video:** https://www.youtube.com/watch?v=L4m2nwn5wT8
**Date:** 2017-06-15
**Duration:** 32:13

## Transcript

[00:16] hello and welcome to another episode of
[00:18] around the verse our weekly look at star
[00:19] citizens ongoing development I'm Chris
[00:21] Roberts and I'm Aaron Roberts and
[00:23] together we're Robert
[00:27] Square anyway uh I'm out in La work with
[00:30] Chris and the team on the upcoming 3.0
[00:31] release um Squadron 42 and Beyond yeah
[00:34] and it's nice to have you out here
[00:35] hosting ATV with me uh we've got a lot
[00:38] of cool stuff planned uh going forward
[00:40] for 3-0 and Beyond and making sure the
[00:42] entire production team is on the same
[00:43] page as essential yeah absolutely
[00:45] tracking the progress of all the new
[00:46] features and assets we have planned is
[00:48] an absolutely massive task yes you know
[00:50] it definitely is uh and there is a lot
[00:52] of Technology coming online soon that
[00:54] we're excited about uh one of those is
[00:56] serialized variables which is the
[00:58] subject of our featurette today and
[00:59] while it may sound like high school
[01:01] algebra it's actually a critical system
[01:02] that's a core element of what we call
[01:05] Star Network and but first before all
[01:07] that let's go to talk to Eric Karen
[01:09] Davis right here in Los Angeles for a
[01:10] studio update hey everyone welcome back
[01:13] to Los Angeles I'm senior producer Eric
[01:15] Karen Davis back with our monthly Studio
[01:17] update since I last saw you we've been
[01:19] focused on closing out final features
[01:21] and tasks for SC Alpha 3.0 and Squadron
[01:24] 42 part of this month I visited our
[01:26] Frankfurt and wils offices and worked
[01:28] closely with their teams for variety of
[01:30] reasons and now I'm glad to be back home
[01:32] to give you this update our narrative
[01:33] team has been quite jam-packed this
[01:35] month as well with item 2.0 coming
[01:36] online they have been knocking out a
[01:38] massive amount of component descriptions
[01:40] needed for the 3.0 release everything
[01:42] from coolers to Shield generators to
[01:44] Quantum drives the team has been also
[01:45] working on NPC voice packs for 3.0 as
[01:48] they wrote and recorded roughly 2800
[01:51] lines for generic NPCs to really liven
[01:53] up the world speaking of massive amounts
[01:54] of dialogue lines one of the challenges
[01:56] in dealing with the universe of this
[01:58] scale is keeping track of the various
[01:59] ious characters and lines that the
[02:01] player will encounter to keep track of
[02:03] all this the team has created a first
[02:05] pass at the persistent Universe
[02:07] character tracking sheet to provide a
[02:08] single resource for reference of lines
[02:10] file names for departments like audio
[02:12] animation facial capture and performance
[02:15] capture and overall status and priority
[02:17] for the massive amounts of dialogue for
[02:19] NBC's Mission givers and much more once
[02:22] this is completed it will help us
[02:23] immensely as we move through the
[02:25] integration of new Mission givers and
[02:27] NPCs in the future and lastly the team
[02:29] has been in the process of walking
[02:31] through the locations and writing up
[02:32] documentation of what we'd like to see
[02:34] as far as props posters signs branding
[02:37] and setd addressing to really make much
[02:39] more immersive environmental
[02:41] storytelling also as part of the
[02:43] upcoming 3.0 release we're very excited
[02:45] about introducing cargo's mechanic and
[02:47] to ensure your ship is technically
[02:49] equipped we've wrapped up developing the
[02:51] cargo grids to provide the visual
[02:52] element of transporting Commodities like
[02:54] minerals scrap and food the number of
[02:57] Commodities you'll have will manifest as
[02:59] stacks of CR crates located within the
[03:00] ship's cargo hold Limited in capacity by
[03:03] the dimensions of the grid your ship can
[03:05] use you'll be able to park vehicles and
[03:06] other loose items into the cargo hold as
[03:08] well but just beware that it will limit
[03:10] the amount of grid space you'll have
[03:12] available for bought or scavenge
[03:13] Commodities code is wrapped up on the
[03:15] feature welld designed has now
[03:17] implemented the new cargo grids into all
[03:19] the ships that can carry cargo so you'll
[03:21] be hauling to your heart's content in no
[03:23] time engineering has also just finished
[03:26] up implementing the solar system content
[03:28] or what we've been calling object
[03:30] containers into a hierarchy to ensure
[03:32] that outposts on a moon or Planet as
[03:34] well as space stations in near orbit are
[03:36] all in the correct planetary Grid at all
[03:39] times so for instance grimhex is now
[03:41] located inside the grid of the Moon
[03:43] yella for the time being and then
[03:44] speaking of the all powerful object
[03:46] containers we've also just been provided
[03:48] the much needed object container editing
[03:51] when creating a gameplay level we build
[03:53] that level with a combination of assets
[03:55] and object containers originally object
[03:56] containers had to be built in a
[03:58] dedicated object container level which
[04:01] unfortunately made the contents of the
[04:03] object container only editable in the
[04:04] actual object container level are you
[04:06] confused yet in other words when
[04:08] designers are building levels with
[04:09] object containers but want to modify the
[04:12] contents of that object container the
[04:14] only way to do that is to exit the
[04:16] current level open the object container
[04:17] level do some tuning save export and
[04:20] leave then they'd have to move back into
[04:23] the level what the team has done now
[04:25] allows the designer to edit the contents
[04:26] of an object container save and Export
[04:29] all while inside the level this creates
[04:31] a much better experience for our design
[04:33] team and it's really going to save tons
[04:35] of time now as a general approach in
[04:37] game development we always try to make
[04:39] something once and make it perfect but
[04:42] since reality never meets expectations
[04:44] we are always looking for ways to reduce
[04:46] the time needed in what we call the
[04:48] discovery phase of a problem one of the
[04:50] hardest parts about getting a code bug
[04:52] is finding out what is causing it and
[04:53] where it's located so establishing tools
[04:56] and processes to reduce that time not
[04:58] only helps get to the speed resolution
[05:00] but also gets our talented programming
[05:02] team back to that feature we're also
[05:04] excited to develop So to that end we've
[05:06] reworked the handling of vehicle
[05:08] internal damage states to significantly
[05:10] easier to set up now and debug interior
[05:13] damage States will be changed based on
[05:15] the cumulative health of a ship formerly
[05:17] It Was Written in flow graph but now it
[05:19] has been integrated into the vehicle
[05:20] component so that it can be used in a
[05:22] variety of places this new debug and
[05:25] setup process should do just that help
[05:26] us find the problem quickly solve it
[05:28] fast and get back to feature Dev time
[05:31] now on ifcs we've now moved the entire
[05:33] intelligent flight control system of our
[05:35] ship's update process to batch update
[05:37] because ifcs is very isolated from the
[05:39] physics engine taking in values like
[05:41] velocity Mass center of mass Etc and
[05:44] outputting one linear and one angular
[05:46] impulse there's no reason ifcs needs to
[05:48] be updated in lock step with the physics
[05:50] thread this change will be much more
[05:51] efficient El eliminating a major
[05:53] bottleneck and hopefully allowing a
[05:55] larger number of simultaneous players on
[05:57] a server we've talked about also making
[06:00] progress on this for a little bit now
[06:02] and we've now completed the new Quantum
[06:04] Drive 2.0 we've removed the old code
[06:06] from the previous Quantum drive system
[06:08] that controlled things like V effects
[06:09] and sound effects playback as well as
[06:11] object obstruction detection and
[06:13] Alignment code we've also moved the
[06:15] targeting of a Quantum point to the
[06:17] Target selector on a ship so that drive
[06:19] now only cares about the travel Point
[06:21] itself this reduces complexity of the
[06:23] drive code and should make it run
[06:24] smoother we're doing some bug fixing as
[06:26] well as some features that attach to the
[06:27] Quantum Drive such as closing all
[06:29] external doors when doing a jump to help
[06:31] prevent accidents by jumping out of a
[06:33] ship traveling at high fractions in the
[06:35] speed of light this should all result in
[06:37] a smoother working Quantum Drive that is
[06:38] ready for design and art to really start
[06:40] tweaking and implementing on all the
[06:42] ships it's also ready for UI to start
[06:44] creating a much more realistic feel for
[06:46] how such an event should be handled in
[06:48] game as well as a few other features
[06:50] like the star map now over on the LA
[06:52] ship front the RSI Aurora has gone
[06:55] through a final art check this week All
[06:56] That Remains are any incoming bugs while
[06:58] going through desig implementation
[07:00] animation updating sound effects and V
[07:02] effects Etc with this ship and we've
[07:05] also established up to 14 different
[07:06] skins for the designers to utilize as
[07:08] well the Anvil Terin is finalizing its
[07:10] gray box phase which means it's setting
[07:12] up the exterior hierarchy polishing
[07:14] proxies and baked and migrated
[07:16] animations for the interior we've
[07:18] currently polishing the geometry in the
[07:20] cockpit and the habitation and now
[07:22] moving into final art we've just handed
[07:23] the Terin over to Tech design for their
[07:25] gray box set up on the ship as
[07:28] well
[07:36] [Music]
[07:53] [Music]
[08:10] [Music]
[08:18] also now that the conversion for ships
[08:20] to item 2.0 is underway it's made sense
[08:22] to update our ship stats page on the
[08:23] website and we're really excited to
[08:25] finally be able to get to the up to the
[08:26] minute stats for all of our ships for
[08:28] all of you met out there the design has
[08:30] now been finalized icons finished and
[08:32] refined meaning and everything's being
[08:34] updated on the web as we speak they're
[08:36] being implemented on the RSI website
[08:38] with more details to come in the very
[08:40] near future now Tech Arts roles tends to
[08:43] increase the closer you get to a major
[08:44] release and as performance begins to
[08:46] take priority over feature and asset
[08:48] development using a plethora of internal
[08:50] tools Tech art has been reviewing the
[08:51] release to identify code and content
[08:53] fixes that would dramatically improve
[08:55] performance one in particular is called
[08:57] status scope which PL plots graphs from
[09:00] data logged on a perf frame basis and
[09:02] more generally it's the system that
[09:04] produces and manages that data in
[09:06] essence it provides a way of recording
[09:08] values such as FPS number of draw calls
[09:10] Etc from Star Citizen and showing how
[09:13] they change over the course of a
[09:14] playthrough this really helps our
[09:16] development team find ways to improve
[09:17] performance by looking for frame time
[09:20] offenders now Tech animation improved
[09:22] the animation format that animations are
[09:24] saved as and then reloaded into a scene
[09:26] in our worst case scenario a scene could
[09:28] take up to 50 minutes to load into Maya
[09:30] due to the amount of characters and
[09:31] length of the scene but with this
[09:33] Improvement the worst load time has been
[09:35] dramatically reduced by over 82% meaning
[09:38] cinematics won't be waiting long to make
[09:40] quick iteration and over on the skinning
[09:42] front a female transfer mesh has been
[09:44] created and the male transfer mesh has
[09:46] been massively updated now these
[09:47] transfer meshes are used in conjunction
[09:49] with all of our skinning tools to
[09:51] automate basic skinning of all of our
[09:52] new characters Tech animators can now
[09:55] spend time perfecting The Waiting of a
[09:57] mesh allowing for a higher quality and a
[09:59] more accurate deformation in less
[10:09] time on many of our heads we've run into
[10:12] an issue where the eyelids had some
[10:13] vertex normal issues which led to eyes
[10:16] looking pretty odd our Tech art team has
[10:18] now identified the issue and because the
[10:20] vertices of the eyelids were so close
[10:22] together the normal would get flipped
[10:24] but only on a few verts so this was now
[10:26] been fixed and characters can now sleep
[10:28] with ease and speaking of characters the
[10:30] team here has been knocking out
[10:32] countless costumes for squadron 42 and
[10:33] Star Citizen currently in production
[10:36] another female character is finishing up
[10:37] her in-game asset and then will be sent
[10:39] over to texturing and rigging along with
[10:42] our OMC undersuits that have all
[10:43] finished up in-game modeling and they're
[10:45] heading on over to texturing the team
[10:47] also has several other levski specific
[10:49] characters the civilians and the miners
[10:51] which are currently being textured then
[10:53] we'll head over to rigging and
[10:54] implementation into their final resting
[10:56] place in game on the great planet of
[10:58] Delmar and now another exciting news now
[11:01] that we're in a modular armor system
[11:03] we're reworking some of our Legacy uee
[11:05] and pirate armors to bring them up to
[11:06] the quality of our current assets this
[11:08] will allow them to be swappable with all
[11:10] those assets we've officially started
[11:12] High Poly on some of your favorites now
[11:14] we'll be moving on to the in-game
[11:16] modeling and texturing path rework and
[11:18] speaking of customization along with the
[11:20] new eye options we'll have a multitude
[11:22] of styles of hair coming in the upcoming
[11:24] releases starting with a select group
[11:26] for 3.0 these are in various states of
[11:28] production and heading toward the final
[11:30] finish line we'll have a select group
[11:32] ready for the initial release and we
[11:33] can't wait to cover up those hairless
[11:35] heads and finally we have more finished
[11:37] rigged and Implement character starting
[11:39] with the male Marine BDU which will make
[11:41] its appearance in several places
[11:43] including the bridge of the Idris The
[11:44] Male Deb crew can now safely Eva outside
[11:47] the ship in the vacuum of space when
[11:49] doing his work and lastly the female
[11:51] light armor has finished up her
[11:53] implementation pass along with the
[11:55] female explor flight suit which will
[11:57] support her in the far reaches of the
[11:58] game
[12:03] [Music]
[12:09] Galaxy well that's about it and wraps us
[12:12] up here in Los Angeles as always thank
[12:14] you for allowing us to create this game
[12:16] we've always dreamed about and we look
[12:17] forward to giving you more updates in
[12:19] the near future have a fantastic rest of
[12:21] the week we'll see you back in Los
[12:22] Angeles in no
[12:24] time so it'll be nice to see people
[12:27] hauling something other than big Benny's
[12:28] vending machine and unsuspecting NPCs uh
[12:31] as great as all those videos were the
[12:32] team has worked hard to give you a
[12:34] proper mechanic for the 30 release yeah
[12:36] cargo is just one of the many important
[12:38] features we're currently working on a
[12:40] lot of them like cargo and say deric
[12:41] ships will be easy to see While others
[12:44] like serialized variables aren't as
[12:45] visible but are just as critical to the
[12:47] game yeah no they're absolutely
[12:49] definitely as critical to the game
[12:50] because when you're attempting to build
[12:51] a game as large and complex as star syi
[12:53] it's essential to come up with a new way
[12:55] to streamline the data being transferred
[12:57] between the server and the clients and
[12:58] so here to explain exactly how
[13:00] serialized variables will improve our
[13:01] networking capabilities and of course
[13:03] most importantly your star CZ and
[13:04] experience let's hear from lead Network
[13:06] programmer Clive
[13:13] Johnson my name is Clive Johnson I work
[13:16] for Foundry 42 UK where I'm the lead
[13:19] Network programmer at working on Star
[13:21] Citizen today we're going to talk a
[13:22] little bit about serialized variables so
[13:24] what are serialized
[13:26] variables well they're not really
[13:28] something that you can see in the game
[13:30] and ideally if everything's working the
[13:33] way it should then they're not something
[13:35] that you really ever need to think about
[13:37] but they are the answer to a question uh
[13:40] which I think is quite important and
[13:42] that's how do you network a game like
[13:45] Star Citizen one of the first times I
[13:47] asked myself that question was shortly
[13:49] after I joined the company and I think
[13:51] my first reaction was one of sheer
[13:54] Terror you know tears panic and once it
[13:58] kind of calm down and the tears had
[14:00] stopped you do what any engineer is
[14:01] going to do when faced with a impossible
[14:03] problem you try and break it down into
[14:06] smaller impossible problems when trying
[14:08] to answer the question how we Network
[14:11] star seon one of the first things we've
[14:12] got to think about is exactly who's
[14:15] going to do the work who's going to
[14:16] network everything we have in the game
[14:18] now star citiz itself is made up of
[14:21] thousands of different elements and some
[14:23] of these are visible like planets and
[14:27] ships and players and coffee cups and
[14:29] others you don't see like missions or
[14:33] the logic assigning out landing pads
[14:35] each of these elements is really a
[14:37] different type of
[14:38] entity and each type might be used
[14:41] thousands of times throughout the game
[14:42] but all the types behave in specific
[14:44] ways or have certain uses and that has
[14:47] to be implemented in the code and most
[14:48] of them need to work in both single
[14:51] player Squadron 42 a multiplayer the
[14:54] Star Citizen in other words most of them
[14:57] have to be networked so who's going to
[15:00] do the work well currently we've got
[15:02] about 60 Engineers C in different parts
[15:05] of the game but we have only six Network
[15:08] programmers half of these work in Austin
[15:10] on backend services and that includes
[15:14] you know our core online services such
[15:15] as matchmaking and friends and player
[15:18] authentication the other half is my team
[15:21] here in the UK and we focus mainly on
[15:24] the networking between the client and
[15:26] the server uh so it's kind of up to us
[15:29] to make sure that all the entity types
[15:31] are correctly networked and everything's
[15:33] functioning the way we'd like it to in
[15:35] the multiplayer game but with 60
[15:37] programmers or there abouts writing new
[15:39] code and making new entity types if
[15:41] we've only got three actually making it
[15:43] work in multiplayer my team needs to
[15:45] work about 20 times faster than anybody
[15:48] else you know we're good but we're not
[15:50] that good so clearly leaving all the
[15:52] network into the network programmers is
[15:55] not going to work so what we need to do
[15:58] is um have every engineer make sure that
[16:01] their own code Works in multiplayer well
[16:03] the problem with that is that Network
[16:04] programming is really very hard and it
[16:08] it can take years to learn all the
[16:10] different ins and outs so we need a way
[16:12] to simplify it so that you know non-sp
[16:14] Specialists can learn everything they
[16:16] need to do in just like a couple of
[16:18] hours what we need is an API which
[16:20] stands for an application programmer
[16:22] interface and that's really a cushion
[16:24] between a programmer doing the work and
[16:26] the problem that they want to solve the
[16:27] API kind of simp simplifies things by
[16:29] allowing the programmer to say exactly
[16:31] what it is that they want to do but
[16:33] without saying how it should be done so
[16:35] you can kind of think of it like driving
[16:37] a car so obviously you've got your
[16:39] steering wheel and the pedals and you
[16:41] know other controls gear stick whatever
[16:43] that's not how the car drives they ad
[16:45] just the controls that tell the car what
[16:47] to do so under the hood the driver's
[16:49] commands are turned into you know
[16:50] different settings for like fuel air
[16:52] mixture or engine timing or hydraulic
[16:55] pressures for brakes and power steering
[16:57] and that's kind of the inter face part
[16:59] of an application programmer interface
[17:01] by building the right set of controls
[17:03] you can change how the API actually
[17:05] works without having to change the code
[17:08] so what about driver error cars equipped
[17:11] with assisted driving can take action
[17:13] when a driver makes a mistake and
[17:15] possibly prevent a crash we want the
[17:17] same sort of thing from the API that
[17:18] we're going to develop when a a program
[17:20] is using it it actively prevents them
[17:22] from making mistakes that might cause us
[17:24] bugs or negatively impact performance
[17:26] but we can go a bit further though So
[17:29] currently the technology for driverless
[17:31] cars is being developed when that
[17:33] happens the skill needed to operate a
[17:35] driverless car drops to just saying
[17:37] where you want it to go and this is what
[17:39] we've tried to do with our Network API
[17:41] serialized variables are a really big
[17:43] part of that by giving our programmers a
[17:46] simpler model to work with they can
[17:48] quickly and safely Network the game
[17:51] elements that they're working on
[17:53] meanwhile those Network programmers um
[17:56] are freed up to try and ensure that that
[17:58] the API not only works quickly and
[18:00] efficiently but also it deals with all
[18:02] the problems that you can get while
[18:05] networking anything so before we go any
[18:07] further we probably need to talk about
[18:09] another question and that's how do
[18:11] online multiplayer games actually work
[18:13] if you were to see the game as
[18:15] programmers often look at it you'd see
[18:17] that everything is essentially lots of
[18:20] tables of values every entity in the
[18:22] game has its own table and each value
[18:25] corresponds to a different property of
[18:27] The Entity because we need to know what
[18:29] each value is for we've got to give them
[18:31] all names so a table has two columns
[18:34] names on the left hand side and values
[18:36] on the right a row in a table is what we
[18:39] call a variable and that's mainly
[18:41] because its value can change over time
[18:43] the ship might have variables for shield
[18:46] strength and how much fuel it's got left
[18:48] um players can have variables to say
[18:50] whether they're running or walking and
[18:52] most but not all of these variables uh
[18:55] will have an entity called a position
[18:57] and that's going to tell us exactly
[18:59] where they are in the the games universe
[19:01] and even though we kind of need three
[19:03] values for coordinates in 3D space we
[19:06] tend to think of position as a single
[19:08] variable because one part changes the
[19:10] other parts tend to change so when an
[19:12] entity moves it does so because the
[19:14] position variable has been changed that
[19:16] that variable is not really just keeping
[19:19] track of where the entity is it's
[19:21] actually saying where the entity is
[19:22] programmers can write code that that
[19:24] looks at the values in a in a table that
[19:26] belongs to anty and we can use those
[19:28] values to calculate some changes to
[19:30] other variables and some of those
[19:32] variables might be in the same table or
[19:33] some might be in other tables belonging
[19:35] to different entities so as the game
[19:37] progresses these variables are modified
[19:39] according to you know the actions of
[19:40] players and Ai and these changes update
[19:43] the the graphics that you see on screen
[19:45] and they can trigger particle effects
[19:47] and sound effects to make this work in
[19:50] multiplayer we've got to take one
[19:52] machine the
[19:53] server and have that make the changes to
[19:56] the tables and then the server then
[19:57] needs to copy the modified tables to all
[20:01] the the machines all the clients and it
[20:03] does this by sending messages over the
[20:05] network a bit like a group text message
[20:07] and if everything works correctly the
[20:09] clients and the server all have the same
[20:12] data in the tables and everyone's in
[20:14] sync now entities in our game can have
[20:16] dozens or even hundreds of these
[20:18] variables or properties and most of them
[20:21] need to be kept in sync over the network
[20:23] there are a few ways we could do this
[20:25] and probably the most straightforward
[20:27] way is every now and then just to send
[20:29] the state of all the tables and that
[20:32] works really well for very small numbers
[20:34] of entities but as the number of
[20:37] entities increases then the bandwidth
[20:39] that you're using to do that increases
[20:41] and if we're not careful that can cause
[20:42] us other problems we might notice that
[20:45] most entities in the game don't tend to
[20:47] do much until someone does something to
[20:49] them so what we can try is not
[20:52] sending uh the table for an entity
[20:54] unless it has changed but now the game
[20:57] code's got got to keep track of which
[20:59] entities have changed and which haven't
[21:01] and that can be tricky to get right it's
[21:03] a manual process that the gameplay
[21:04] programs have to do getting it wrong
[21:06] means that in certain situations the
[21:08] tables for particular entities will no
[21:11] longer be in sync we call that a desync
[21:13] and the effects of that can range from
[21:15] like minor bugs that are just little
[21:17] annoyances to completely break in the
[21:19] game and the only way to find these bugs
[21:21] is suit lots and lots of timec consuming
[21:24] play testing perhaps worse we haven't
[21:27] really solved the band problem either by
[21:29] adding more players that means that more
[21:32] entities will be being interacted with
[21:33] and having things done to them so more
[21:35] tables are going to be getting updated
[21:37] and more messages need to be sent out
[21:39] over the network and the bandwidth jumps
[21:40] up once again we still need to reduce
[21:42] this so we might notice that when an
[21:44] en's table is modified not all the
[21:47] values in it are changed so instead of
[21:49] sending the whole table we could try
[21:50] just sending a few of them at a time so
[21:52] we can split the table into
[21:54] sections and then we're saving bandwidth
[21:57] by only sending in the section if one or
[21:59] more of the variables in it have changed
[22:01] if we put variables that are likely to
[22:03] change together in the same section then
[22:06] we can see save even more but now the
[22:08] game code's got to keep track of not
[22:10] just modifications to entities but
[22:11] modifications to individual sections and
[22:14] that's even harder to get right we also
[22:16] got to write some extra code to say
[22:17] which variables need to be put into
[22:19] which messages and since different types
[22:21] of entities have different sets of
[22:23] variables uh they also need different
[22:25] sections so this extra work as to be
[22:28] duplicated for every different type of
[22:29] entity so the thing that really kills
[22:32] this plan for Star Citizen is entity
[22:35] components a component is really it's
[22:37] just a piece of code and some variables
[22:40] that Implement a very specific piece of
[22:43] functionality so entities get built by
[22:45] plugging different components together
[22:47] and by choosing different components
[22:49] that you want to plug together that
[22:50] gives us different types of entities if
[22:52] you need an entity that can move around
[22:54] and collide with other things then you
[22:56] have to give it a physics components
[22:58] your entity needs Shields give it a
[23:00] shield component the number of different
[23:02] entity types we can build this way grows
[23:05] exponentially with the number of
[23:07] different components that we have but
[23:09] what also grows
[23:11] exponentially is um the amount of
[23:13] networking work we've got to do to cover
[23:15] all these different entity types so
[23:17] clearly this isn't really going to work
[23:19] for us our networking API needs to be
[23:21] smarter what we wanted were controls uh
[23:24] that were as simple as those for a
[23:25] driverless car and what we had felt like
[23:27] it was is as complicated as pilo in a
[23:29] space shutle so that's when we came up
[23:31] with um serialized variables so with
[23:33] these gameplay programmers just need to
[23:35] write their code the way they normally
[23:36] would and they're adding variables to
[23:39] their components uh as they need them
[23:41] and the only extra thing that they need
[23:43] to do is Mark the variables that they
[23:45] want networked uh in a special way and
[23:48] that just shows that these ones are ones
[23:50] that need to be serialized serialization
[23:52] is a process of packing up the data in a
[23:54] form that's more efficient and better
[23:56] suits being sent over the network or
[23:57] serialized to a file this makes life so
[23:59] much easier for our programmers you can
[24:01] see how the code on the left can be
[24:02] simplified and reduced to what's on the
[24:04] right it's really just like writing
[24:06] normal code and calling out which of the
[24:08] variables we want serialized the program
[24:10] only needs to write the additional lines
[24:12] that you can see highlighted in purple
[24:13] on the right and add them to their
[24:15] struct or class definition and that
[24:17] tells the serialized variable system
[24:19] which members of the structure to watch
[24:20] and update previously we would have
[24:22] needed specific functions um in each
[24:25] class one for net serialized for
[24:27] networking full serial eyes for the save
[24:29] game and if we wanted to talk to the
[24:31] persistent database we would have needed
[24:32] an extra function something like
[24:34] persistent serial eyes in these
[24:35] functions the game programmers would
[24:37] have had to manually look at the
[24:39] variables they wanted to serialize and
[24:40] write them out into the serialization
[24:42] stream so there's lots of scope there
[24:43] for extra work and possible errors if
[24:45] they forget to add a variable but now
[24:47] when a programmer writes a new class
[24:49] they can just mark up which of the
[24:50] variables they want to be serialized and
[24:52] everything else is handled automatically
[24:54] and efficiently behind the scenes and
[24:56] that all goes through one Unified system
[24:58] that we can profile and optimize as
[25:00] opposed to having to worry about
[25:01] optimizing literally thousands of
[25:03] different functions once the variables
[25:05] have been marked there's there's no need
[25:06] to group things into sections anymore um
[25:09] there's no extra code to write the API
[25:11] detects uh when something has modified
[25:13] the value of a variable and it lets the
[25:15] net code know so that I can deal with it
[25:17] new API even writes uh the code to
[25:20] handle the serialization for them and
[25:22] this kind of level of automation uh not
[25:25] only saves us time but it it eliminates
[25:27] human error mean we have a lot fewer
[25:30] bugs uh and we can just get on more
[25:32] quickly and more efficiently so because
[25:35] the net code's now being told about
[25:36] changes to individual variables we're on
[25:39] the networking side of a much clearer
[25:41] view of what what's actually happening
[25:43] in the game so you can kind of think of
[25:44] it like switching to a 4K TV when all
[25:47] you've ever seen before is like grainy
[25:49] black and white and we we're kind of
[25:50] using this extra information at the
[25:53] moment so that we only send exactly what
[25:55] has changed and that means that our
[25:57] bandwidth perir update message the size
[26:00] of our update messages is now probably
[26:02] about as optimized as it's possible to
[26:04] get we're also using this information so
[26:06] that we can profile what's being sent by
[26:10] um by the game code what when it's
[26:12] marking variables dirty so we can see if
[26:14] anyone's hitting anything particularly
[26:16] quickly and maybe there's a bug in the
[26:18] game code and he's looking at really the
[26:20] only kind of over improvements that
[26:22] we're we're going to get from now on by
[26:25] optimizing like streams of network
[26:27] messages cutting out who's sending
[26:30] messages at all and how often messages
[26:33] are being sent we can handle all that on
[26:35] the network side on the net code side so
[26:37] it's kind of like I was saying before
[26:38] where we've got this interface of the
[26:40] API that separates game code from what
[26:42] we need to do and we can make our
[26:44] changes without affecting that while we
[26:45] were working on this new technology we
[26:47] noticed that one of the The Entity types
[26:50] started sending about 80% L data and at
[26:53] first we just didn't believe that we
[26:55] were certain that the numbers have got
[26:57] to be wrong or that are bugs throwing
[26:59] away most of the data it wasn't until
[27:02] you know we went back and we double
[27:03] checked everything that really we
[27:05] started to realize that this saving is
[27:07] actually real and that it's due to the
[27:09] new code that's probably not going to be
[27:11] typical but it still kind of shows that
[27:14] the difference this kind of approach can
[27:16] make that's not entirely where the story
[27:18] ends though because one of the other
[27:19] cool things about serialized variables
[27:21] is that they don't just work for
[27:23] multiplayer and networking instead of
[27:25] sending the different tables and values
[27:28] and variables between just server and
[27:30] clients we can also store them in a
[27:32] database or save them to a file and that
[27:34] means that for no extra effort at all
[27:37] the gameplay programmers can use the
[27:39] same serialized variables for
[27:41] persistence uh recording what's the
[27:43] state of entities are is in our
[27:45] persistent universe and we can even use
[27:47] them for save games in Squadron 42
[27:49] personally I think probably the best
[27:51] thing about serialized variables is that
[27:53] they're one of the the cornerstones that
[27:56] we're using to build this this big
[27:58] seamless persistent Universe achieving
[28:01] that is going to require spreading the
[28:03] load over multiple servers because it's
[28:05] seamless we're going to have to have
[28:06] these servers communicate with each
[28:08] other and that's going to mean that
[28:10] there there could be a lot of servers
[28:12] aware of any particular entity so let's
[28:15] say for example an AI pirate now we
[28:17] don't want all the servers trying to
[28:19] tell the pirate what he should be doing
[28:22] because first that would be just a
[28:23] complete waste of computing power and
[28:25] the second reason is that the might not
[28:27] agree on what the AI should do next so
[28:30] we need one server that's in charge of
[28:33] the AI pirate and only that server can
[28:36] send updates for that AI pirate entity
[28:39] and the other servers just listen to it
[28:41] so the trick is going to be how we
[28:43] decide which server gets the final say
[28:46] and we're going to do that with
[28:46] something that we're calling tokens a
[28:48] token can only be held by one computer
[28:50] at a time when a computer's finished
[28:53] with a token it just passes it on to the
[28:55] next one that wants it so by linking
[28:58] serialized variables tokens together
[29:00] will be able to transfer Authority from
[29:02] one server to another as quickly as
[29:04] flicking a switch what that means for
[29:05] our AI pirate is that control over its
[29:10] AI mind can pass seamlessly from one
[29:12] server to another and since different
[29:14] servers at least initially will control
[29:16] different regions of space this
[29:18] combination of tokens and serialized
[29:20] variables will allow our a pirate and
[29:22] everything else to move freely through
[29:25] this seamless persistent universe
[29:28] that's been simulated by lots of servers
[29:30] all working together so hopefully you'll
[29:33] agree that serialized variables are not
[29:35] only a key part of the current
[29:37] technology but they're they're a
[29:39] building block for future ones and
[29:41] that's really not bad for something that
[29:42] you're never going to see but that's
[29:44] often the reality of game development
[29:46] and what you see in games really just
[29:48] the tip of an iceberg that's being boyed
[29:51] up by a mass of systems and Technologies
[29:54] all working together you know out of
[29:55] sight and fingers crossed lost out of
[29:59] mind so as you can see the serialized
[30:01] variable Tech is an important feature
[30:03] for several reasons it not only improves
[30:05] the games networking but also simplifies
[30:06] the coding for our programmers so
[30:08] there'll be fewer bugs going forward and
[30:10] the same data can be serialized over the
[30:12] network to the persistent database or
[30:15] save the state of the game meaning we
[30:16] have one unified way to communicate or
[30:19] save game State um throughout everything
[30:21] which is very important for a big huge
[30:24] Universe like we're building absolutely
[30:27] anyway that's it for today's program but
[30:29] before we go uh we wanted to remind all
[30:31] backers to keep your account safe by
[30:33] enabling twostep authentication you can
[30:35] do that by visiting your account page
[30:37] then clicking on the security tab under
[30:39] settings yeah it's probably a good idea
[30:41] to do that and thanks to all our
[30:43] subscribers your continued support makes
[30:44] ATV bug smashes and all our programs
[30:47] possible and don't forget to tune in
[30:49] tomorrow for another one of our
[30:50] subscriber supported shows Happy Hour
[30:52] Friday this week Ben Lesnik will be
[30:54] playing win Commander free And
[30:55] discussing the history behind the game
[30:57] and its development and man Chris's case
[30:59] that's a long time ago yeah 24 years ago
[31:03] we were developing it um so uh anyway
[31:07] time flies uh finally I'd like to thank
[31:10] all our backers uh your support and
[31:11] enthusiasm for the game has made all
[31:13] this possible we couldn't do it without
[31:14] you so until next week we'll see you
[31:18] around the
[31:26] ver
[31:27] [Music]
[31:50] thank you for watching so if you want to
[31:52] keep up with the latest and greatest and
[31:53] staff citizen of Squadron 42's
[31:55] development please follow us on our
[31:56] social media channels see you
[32:06] [Music]
[32:11] soon

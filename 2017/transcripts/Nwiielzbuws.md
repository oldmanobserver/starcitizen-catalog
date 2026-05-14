# Star Citizen: Around the Verse - Kiosks and Commodities

**Video:** https://www.youtube.com/watch?v=Nwiielzbuws
**Date:** 2017-07-20
**Duration:** 29:28

## Transcript

[00:13] [Music]
[00:16] hello and welcome to another episode of
[00:18] around the verse our weekly look at star
[00:20] citizens ongoing development I'm Sandy
[00:22] Gardner and I'm will weom on today's
[00:24] show we'll take a look at the new kiosk
[00:27] system coming in 3.0 we'll show you how
[00:29] this seemingly small mechanic is an
[00:31] important first step in building the
[00:33] game's Dynamic economy but before that
[00:36] let's check in with Brian Chambers for
[00:37] an update from our office in Frankfurt
[00:40] hello I'm Brian Chambers development
[00:43] director of our Foundry 42 Frankfurt
[00:45] office team's been busy this last month
[00:47] as usual pushing on numerous fronts for
[00:50] 3.0 which is part of the large
[00:52] persistent universe as well as Squadron
[00:55] 42 the past month we had numerous
[00:57] visitors to the office including both
[00:59] Chris and a in we find that traveling to
[01:02] the other offices from time to time to
[01:04] either work side by side with people or
[01:06] to discuss the current status of things
[01:08] and future plans is absolutely
[01:10] invaluable so let's start off this
[01:13] month's update with the VFX
[01:15] team the Frankfurt VFX team has been
[01:19] working on improving existing systems
[01:21] for the 3.0 release this includes
[01:24] checking all the existing vehicles and
[01:26] systems to make sure things are still
[01:28] working as initially intended and doing
[01:30] a Polish pass on any effects if needed
[01:33] with some of the new systems coming
[01:34] online such as the oxygen system for
[01:37] rooms they remade some of the old
[01:39] airlock effects for both the high-tech
[01:41] and lowtech airlocks this month they
[01:44] also started shifting more Focus towards
[01:46] Squadron 42 cinematic scenes that are
[01:48] required for the single player campaign
[01:51] the FPS weapons team completed passes on
[01:54] the last two Legacy weapons that we
[01:56] using our old system completing a first
[01:59] pass on the G I l86 ballistic pistol and
[02:02] completing a final pass on the bearing
[02:04] P4 AR ballistic rifle they continue to
[02:08] make progress on the ship weapons for
[02:10] the Clausen verer laser repeaters they
[02:12] finished off all the work for sizes 1
[02:14] through three started work on sizes 4-
[02:18] six and finished off the apocalypse arms
[02:21] ballistic scatter gun size
[02:23] 1-3 uh they also worked on some general
[02:26] tasks focused towards 3.0 including
[02:29] polishing optimizing and Bug
[02:31] fixing the tech art team finished
[02:34] multiple animation implementation tasks
[02:36] for both the recent usable Sprint as
[02:38] well as cinematics they continued to
[02:41] debug weapon animation issues and did
[02:43] some adjustments to a few of the weapons
[02:45] rigs to make them even more realistic
[02:47] and believable they also did some work
[02:50] on a VFX exporter this was primarily
[02:53] made to export simulated objects from
[02:56] within Maya having an active simulation
[02:59] on objects was causing some problems
[03:01] with the animation export and the best
[03:03] way to work around this is to bake the
[03:05] simulation and Export the animation but
[03:08] that's timec consuming and leaves the
[03:10] scene in a state where the VFX artist
[03:12] can't do any changes to the simulation
[03:15] so the exporter takes care of that whole
[03:18] process it bakes the simulation exports
[03:21] all the necessary stuff for the engine
[03:22] and restores the scene so the artists
[03:24] Contin continue to iterate on whatever
[03:27] they need the tool also creates all the
[03:29] necessary in engine files so the artist
[03:31] can hit the export button and see the
[03:33] results immediately in the engine they
[03:36] also continue to support the animation
[03:38] code with ground alignment R&D progress
[03:41] is going good and we'll be able to show
[03:43] off some of the results very very
[03:46] soon for game programming last month
[03:49] they spent time fixing outstanding
[03:52] issues and polishing up existing code
[03:55] the new airlocks and elevators are now
[03:57] being used more throughout the game
[03:59] which exposed a few issues where game
[04:01] and engine code conflicted with one
[04:03] another so those items were identified
[04:05] and work has begun to sort them out they
[04:08] also added a small feature to weapons to
[04:11] be able to hide the weapon from The
[04:13] firstperson View during aim down sight
[04:16] which falls in line with the design and
[04:17] will make things much easier while In
[04:19] the Heat of combat the technology to
[04:22] easily apply weapon skins was also
[04:25] completed it utilizes the work
[04:27] previously done for character
[04:28] customizations
[04:30] there's still some UI work to be done on
[04:32] it and the Skins themselves are
[04:34] placeholder for testing but the work
[04:36] will now allow simple and fast setups of
[04:38] weapon skins in data Forge they'll now
[04:41] continue more work on the weapon system
[04:44] 2.0 and additional elevator and airlock
[04:47] feature polish geared towards
[04:49] 3.0 the AI team has been working on more
[04:53] Mission broker and mission system
[04:55] features mostly for pu 3.0 but also
[04:59] offering support for s42 the mission
[05:01] broker has been adapted to support
[05:03] multiple players accepting the same
[05:05] Mission and they had the ability for
[05:07] Mission instances to share information
[05:10] which means players accepting the same
[05:12] collection mission for example will be
[05:14] sent after the same item rather than
[05:16] having their own distinct item to
[05:18] collect they'll now build on that work
[05:21] by adding support for abandoning
[05:22] missions as well as unlawful and lawful
[05:25] asymmetric missions for multiple players
[05:28] this month day added support for takeoff
[05:31] and landing of AI ships and surfaces
[05:34] this includes Landing Pad ship hangers
[05:36] other ships and Celestial surfaces we're
[05:39] also adding Quantum travel functionality
[05:42] for the new non kythera AI this is part
[05:45] of an ongoing effort to create all ship
[05:47] AI functionalities we need for
[05:49] subsumption based AI for the remainder
[05:52] of the month they'll be focusing on
[05:54] adding more subsumption AI support like
[05:56] using nav splines and correct AI
[05:59] Behavior when entering exiting all
[06:01] vehicles and seats they also finished up
[06:04] the second Sprint for Buddy AI designers
[06:07] can now specify if they want to keep the
[06:09] AI in front or on the side of the leader
[06:11] or player this Sprint also brings the
[06:14] ability for an AI buddy to take cover in
[06:16] front of the player and moving from
[06:18] cover to cover Point while following the
[06:20] player this is the first step in having
[06:22] a companion AI that will intelligently
[06:24] follow you and help you out in combat
[06:27] the Frankfurt engine team in cooperation
[06:30] with UK refine the handling of GPU
[06:33] crashes and proper reporting via the
[06:36] public crash Handler as we render frames
[06:38] we now include tokens into the command
[06:41] stream in order to pinpoint more easily
[06:43] what the GPU was last doing in case it
[06:46] starts hanging this info was set along
[06:48] with other crash information for
[06:50] postmortem analysis via our public crash
[06:53] Handler service and these steps should
[06:55] make it easier for us to more quickly
[06:57] react on GP issues found in the PTU that
[06:59] are otherwise hard to produce because
[07:02] the specific machine setup OS driver
[07:05] versions Etc they also did a large
[07:08] number of performance analysis and
[07:09] engine optimizations geared towards 3.0
[07:12] release another item they started to
[07:14] work on was a new road system to work in
[07:17] conjunction with the planetary terrain
[07:19] the Legacy roads were not suitable for
[07:21] our large scale terrain there was a
[07:23] large performance hit and they also had
[07:26] Z fighting and flickering issues when
[07:28] viewed from long distances
[07:30] the new system is extremely fast and
[07:32] efficient cache friendly and fully
[07:33] multi-threaded to send draw commands to
[07:36] the GPU in the most efficient way the
[07:38] new system uses a screen space approach
[07:41] instead of drawing the geometry
[07:43] conventionally it's powered by a
[07:45] projective technique like what we use on
[07:47] deferred decals it has two distinct
[07:50] rendering passes first we draw the road
[07:52] geometry as a 3D Volume which intersects
[07:55] the terrain in this pass a stencil mask
[07:57] is generated to outline border of the
[07:59] road the same mask is then used in the
[08:02] next render pass to clip all pixels of
[08:04] the volumes that are not affecting the
[08:06] terrain finally to generate UVS and
[08:09] fetch material textures each pistol's
[08:12] position is reconstructed in camera
[08:14] space and then in local space by
[08:16] sampling the depth all material
[08:19] attributes are then finally written in
[08:21] the G buffer to compute lighting thanks
[08:24] to the nature of the projection this
[08:25] technique doesn't suffer any Z fighting
[08:27] or flickering related issues they also
[08:30] created a new tool set to give designers
[08:32] the ability and flexibility to quickly
[08:34] lay down the New Roads and modify them
[08:36] as needed it's still currently a work in
[08:39] progress and the terrain and textures in
[08:41] the video are currently placeholder for
[08:43] testing but the progress is going well
[08:45] and it will be a nice addition to our
[08:47] growing tool set for planets the level
[08:50] design team is currently making a pass
[08:52] on the room system for Levi ensuring
[08:55] that the player won't unnecessarily
[08:57] suffocate in random places as well as
[09:00] general polish and bug fix for 3.0 they
[09:03] also begun taking a look at the lville
[09:06] which is the next Flagship Landing Zone
[09:08] on our list to tackle the Frankfurt QA
[09:10] team wrapped up June with multiple test
[09:13] requests from the engine team including
[09:15] a change to the entity component update
[09:17] scheduler which affects how parts of
[09:19] entities are updated as well as the
[09:21] particle code which was changed to run
[09:23] on threads all code changes have the
[09:26] potential to introduce new issues to an
[09:27] already functional build so thorough
[09:30] comparison testing was performed to sure
[09:32] that nothing new would be introduced
[09:34] into Game Dev they also had test
[09:36] requests for area optimizations and
[09:38] recent code changes affected how things
[09:41] such as doors and elevators work and
[09:43] these changes would give us roughly 1.5
[09:46] millisecond frame time back which is
[09:48] obviously an improvement subsumption
[09:50] testing continues this month with new
[09:52] features and Bug fixes going into
[09:54] subsumption tool weekly they continue to
[09:56] work closely with the design team and
[09:58] Tony Z to ensure that the tool is
[10:01] Thoroughly tested to their satisfaction
[10:03] performance testing is also underway for
[10:06] persistent Universe they use the
[10:08] performance profiler tool from Visual
[10:10] Studio to gather very specific data in
[10:12] areas of low performance they gather as
[10:15] much information is possible within the
[10:17] internal QA team and continue to do
[10:19] weekly cross Studio play tests in order
[10:22] to increase the stress of the servers
[10:24] and to simulate an actual live
[10:25] environment as much as possible Melissa
[10:27] Estrada our QA technical lead has also
[10:31] had fun time this month testing various
[10:33] gravity conditions on the new
[10:40] moons the system design team has been
[10:43] working on items for 3.0 and with a lot
[10:46] of focus on the lesy landing Zone we
[10:48] have Rob Riner from the Austin office
[10:51] visit and managed to get a lot of work
[10:53] done in a short amount of time they're
[10:56] experimenting with leski having a full
[10:57] AI population the AI behaviors needed
[11:00] some work to ensure that they're not
[11:02] causing them to overcrowd in any given
[11:04] area they also spent time stress testing
[11:07] our servers to determine what AI
[11:09] populations we can support and still get
[11:12] the performance that we need during the
[11:15] process they work closely with the tech
[11:17] team to optimize so we can keep the
[11:19] performance as solid as possible the
[11:21] cinematics team has been continuing to
[11:24] work on scenes across all chapters of
[11:26] Squadron 42 this month they also spent
[11:30] time working with the graphic Engineers
[11:32] to continue work on the two-dimensional
[11:34] render to texture display screens and
[11:37] holographic volume rendering work this
[11:40] month our lead lighting artist Chris
[11:42] Campbell was solely focused on applying
[11:45] some of the final touches in our 3.0
[11:47] content including color grading for each
[11:49] Moon as you can see here integrating
[11:52] lighting between The Outpost in the
[11:53] moons and doing bug fixing and polishing
[11:56] on the leski landing Zone the
[11:59] environment team has been hard at work
[12:01] on polishing and Bug fixing existing
[12:04] content in the Pu with all the various
[12:07] components coming together we want to
[12:08] make sure the visual experience for the
[12:10] player is as absolutely good as it can
[12:13] possibly be on leski new areas and
[12:16] locations have been added that will
[12:18] increase the number of things the
[12:19] players can do and explore including a
[12:22] new store and an admin office the newly
[12:25] added garages received a final polish
[12:27] and dressing pass making them ready to
[12:29] be used they also put a lot of effort
[12:32] this month into researching and
[12:34] development looking at new features
[12:37] going into the game after
[12:39] 3.0 this includes work on Art Corp
[12:42] procedural cities as well as the planet
[12:45] Hurston an important element of the
[12:47] research phase is that we find smart and
[12:50] scalable solutions that allow us to
[12:52] create more content as efficiently as
[12:54] possible moving forward well that's it
[12:57] for this month's update as always thank
[12:59] you so much for watching and all the
[13:01] support thanks for the subscribers that
[13:03] enable us to provide these monthly
[13:05] updates to the community take care and
[13:08] we'll see you in the
[13:10] verse lots of great stuff from our team
[13:12] in Frankfurt those in-game Holograms are
[13:14] looking pretty cool yeah it's really
[13:16] impressive Tech that we'll be using a
[13:18] lot going forward we captured a ton of
[13:20] ship-to ship comps for squadron
[13:22] 42 and I know that because I spent a few
[13:24] hours sitting in a fake cockpit getting
[13:26] all of Pusher com calls yeah I think all
[13:29] together we spent weeks capturing com
[13:31] messages so expect to see this Tech used
[13:33] a lot going forward another new system
[13:36] that you'll be seeing soon is kiosks
[13:38] arriving in 3.0 these devices will
[13:40] expand the shopping options and services
[13:42] currently in game right kiosks are an
[13:45] integral part of this game's economy and
[13:47] need to tie into other important backend
[13:49] systems like subsumption so getting them
[13:51] up and running has required a lot of
[13:53] effort from numerous
[13:54] departments now let's take a look under
[13:57] the hood and show you exactly what it
[13:59] takes to upgrade your shopping
[14:10] experience hi I'm Rob rininger I'm the
[14:13] lead technical designer in Austin I'm
[14:14] Spencer Johnson I'm an associate
[14:16] gameplay engineer on the LA team I'm Zan
[14:19] bienen I am the UI creative director
[14:21] here at f42 I'm Trevor warish the
[14:23] principal UI artist here I'm Pete Macky
[14:25] senior designer on Star Citizen the
[14:27] kiosk is our first for a into an economy
[14:30] in the game a real living economy driven
[14:32] by the players the kiosk is going to be
[14:34] the users interface to purchase things
[14:37] or sell them within the game that are
[14:39] not physically within the shop in the
[14:41] case of purchasing or um things in their
[14:44] inventory things from from their ship
[14:46] all selling will be done through the
[14:48] kiosk what that will allow you to do is
[14:50] view an entire store's uh inventory you
[14:53] can browse to the list you can filter it
[14:54] you can sort it and view its uh stats
[14:57] and comparison to other things it it
[14:59] will extend to eventually The Landing
[15:01] Services you can use the kiosk to
[15:03] restock your ship and refill and so
[15:05] forth you'll be able to equip a ship
[15:07] item directly on the ship at the time of
[15:09] purchase if you want or have it
[15:11] delivered to the cargo hold of your ship
[15:13] it's almost like uh you know ordering
[15:15] through Amazon or something where you
[15:16] can select a shipping destination so
[15:19] whether you have a ship landed out a
[15:20] cargo pad or there's a cargo area in the
[15:23] landing Zone you're at or you want to
[15:25] ship it somewhere like you can select
[15:27] that as an option so I've been working
[15:29] on economy related stuff almost since
[15:33] January of
[15:34] 2013 and so I'm really excited that you
[15:38] know we're getting to the point now that
[15:40] you know the stuff that we were talking
[15:41] about you know in the early days of the
[15:43] project we have tool support internally
[15:45] for that I can actually start building
[15:46] this stuff in addition I work out things
[15:49] like the recipes for the supply chains
[15:52] and Manufacturing recipe in the context
[15:55] of Star Citizen is somewhat similar to a
[15:58] crafting recipe in um other MMOs uh it
[16:02] defines the types of Commodities and
[16:06] resources that go into
[16:08] manufacturing um a given item like a
[16:11] laser cannon or uh even a ship the way
[16:14] that we use recipes and the way that you
[16:17] might find them in another game is that
[16:19] those recipes generally aren't used
[16:21] directly by the players instead they're
[16:24] used by the design team to really sculpt
[16:28] the the the types of goods that are
[16:31] bought and sold at any location in the
[16:33] world and that's to make that location
[16:36] feel correct so if it's a factory that
[16:40] it buys and sells the kinds of things
[16:43] that you would expect from that location
[16:45] I've been working on the backend code
[16:47] side of the shopping and kiosk systems
[16:49] the simplest way to describe making the
[16:51] the shopping component we have is
[16:53] talking with the various systems that
[16:54] are all involved in the player making
[16:56] purchases and transactions through the
[16:58] the whole whole process of using a kiosk
[17:01] or using a storefront to buy things and
[17:03] then have that enter into your
[17:04] persistence so Commodities make up a a
[17:07] big part of the economy because
[17:09] everything within the game is Created
[17:12] from one of the resources that runs
[17:14] through the system iron Gold Titanium uh
[17:17] hydrogen oxygen to get Commodities into
[17:20] the game means that we can start
[17:21] building the foundation for creating uh
[17:24] an actual economy where if deliveries
[17:26] aren't being made to a location then and
[17:29] all of a sudden their manufacturing
[17:30] capability is no longer you know at its
[17:32] Peak Performance so their demand goes up
[17:35] you know prices go up you can start to
[17:37] get that fluctuation in pricing so in
[17:39] terms of the beginning Point like this
[17:41] is really a big step for for getting
[17:43] that in place some of the big challenges
[17:46] for developing this economy is unifying
[17:48] the scale because you know as you know
[17:50] we have items you know from super tiny
[17:54] and inconsequentially priced all the way
[17:57] up to like you know these massive battle
[18:00] Cruisers right and they all have to fit
[18:02] somewhere on the same the same scale and
[18:05] so that's been probably one of the the
[18:08] biggest challenges and the others are
[18:11] just the the scope of the the amount of
[18:15] work that has to get done in in terms of
[18:17] building the recipes and you know even
[18:20] at to the point of building the
[18:21] individual shop inventories um because
[18:24] that's all done by hand we've we have a
[18:27] location and we want it to buy and sell
[18:30] certain things so we actually as
[18:31] designers have to go in and you know
[18:33] determine what what is bought and sold
[18:36] there when you go and buy these
[18:38] Commodities you're going to buy a bunch
[18:40] of iron say I mean where's that iron
[18:42] going to go your ship right that makes
[18:44] the most sense got to go in your ship
[18:45] but what if you have multiple ships so
[18:47] obviously there needs to be a way to say
[18:48] oh I want to put this in my my Hornet or
[18:50] you know I want to put this in my Eder I
[18:52] want to put the stuff I'm buying right
[18:53] now in this ship and you've got you know
[18:55] cargo grids you've got this whole other
[18:56] system that's being developed of how
[18:58] much stuff can we put in the ship and
[19:01] how is the player going to decide what
[19:02] ship to put it in so a lot of these
[19:04] options lead to needing very Dynamic
[19:08] Solutions on the code side we need to
[19:10] accommodate putting these Commodities
[19:12] anywhere we need to give the player the
[19:14] option to select where they're going we
[19:15] need to save where the stuff is kept
[19:18] because certainly you might think oh you
[19:20] know it's just in the ship but it
[19:21] becomes very complicated on the
[19:22] persistence end of things when saving
[19:25] what the player has done well where did
[19:26] they keep it you know all of this iron
[19:28] you need need to keep track of O is left
[19:30] in this cargo bay of this ship which was
[19:32] on this port of you know this space
[19:34] station you know a lot of these
[19:36] different systems are first of all not
[19:38] always running directly on your computer
[19:40] at home sometimes running in our Sig
[19:42] back uh backend systems and there's also
[19:44] a lot of asynchronous events and calls
[19:47] so you you have to wait for things to
[19:48] happen basically you have to send
[19:50] messages and wait for answers rather
[19:52] than just getting immediate feedback
[19:53] because again like I said the shopping
[19:56] component really exists at the center of
[19:58] a lot of different things communicating
[20:00] I also set the prices for the
[20:02] Commodities and it's a similar process
[20:05] um it doesn't have quite as
[20:07] much uh it's not quite as intricate as
[20:10] the pricing for the the items because
[20:13] there aren't uh you know gameplay values
[20:16] associated with this that I need to take
[20:18] into account so um we actually have a
[20:21] tool uh that we internally called trade
[20:23] Slayer and another one called price
[20:25] fixer that uh help with this job and
[20:28] trade layers primarily for fixing the
[20:31] setting the prices for the Commodities
[20:34] um what it does is it helps me figure
[20:36] out what the base value for a commodity
[20:38] should be uh based off of a bunch of
[20:41] different uh analytics data points and
[20:43] then it also helps me figure out like
[20:45] what the uh ranges that those should
[20:48] fluctuate in um and then price fixer
[20:51] does a very similar task but it's quite
[20:54] a bit more complicated and that helps me
[20:57] set the prices for the items but then it
[21:00] actually takes that step one step
[21:02] further and then I use those items to
[21:05] help me value a ship so it goes all the
[21:08] way from uh pricing a countermeasure
[21:12] launcher uh to the the price of a
[21:16] constellation with the included p-52
[21:18] some of the challenges that we faced uh
[21:20] when designing this was you know CR
[21:23] really wants that tangible feel he wants
[21:24] to be able to see the items he wants to
[21:26] be able to see how it's going to look on
[21:28] on you know a ship or you know in in the
[21:31] place that it belongs so doing that in a
[21:34] way where people don't have to navigate
[21:36] you know 5,000 different layers of a of
[21:38] a hierarchy in a window having that be
[21:41] understandable and intuitive uh to the
[21:43] player is was the big challenge here
[21:46] complexity for the economy is pretty
[21:47] deep um because it it is tightly
[21:51] integrated with the game play a large
[21:53] portion of my time is spent interfacing
[21:54] with a tech design team just to make
[21:56] sure that I understand how the item uh
[22:00] progression curves work and what the
[22:04] expected types of uh play are for those
[22:08] items so that I can make sure that you
[22:12] know they have the right price one of
[22:13] the most exciting things about building
[22:15] the kiosk was the visual style side of
[22:17] it there's going to be a low-end kind of
[22:18] like an old school DOS prompt BBS Forum
[22:20] style and then we also have a mid-end
[22:22] like a mid 2000s Web 2.0 style if you go
[22:25] to Grim hex is where you'll see the
[22:26] low-end kiosks for all for example have
[22:29] kind of the mid nice range kiosk one
[22:31] thing we had to take into account was
[22:34] branding of this interface so when you
[22:36] go into a shop sake Saba Outlet you'll
[22:39] see the logo and the color scheme
[22:41] applied it's all one underlying system
[22:44] but we swap out the graphics depending
[22:46] on the store and the manufacturer it was
[22:48] really fun to design the old school
[22:50] style one the low-end one just kind of
[22:51] developed these frame by frame
[22:53] animations that you would see old you
[22:55] know Doss games and things like that
[22:56] when I talk about the shopping code mod
[22:58] and it existing sort of as this
[23:00] glorified middleman this intermediary
[23:02] step between a lot of moving Parts one
[23:04] of those parts is subsumption like
[23:06] backend shopping service there's a whole
[23:08] bunch of backend Services we have as a
[23:10] part of subsumption in the diffusion
[23:12] system uh one of those is the shopping
[23:14] service what the code that I'm writing
[23:16] does it communicates to this backend
[23:17] service which exists on our Sig servers
[23:20] and gets inventory information alisar
[23:23] dumpers Depot or cassaba has this
[23:26] inventory with these prices this
[23:28] quantity of that item and every store
[23:30] has a unique set of information and so
[23:33] we need to communicate to that backend
[23:34] service and periodically update restock
[23:37] things like that and it's there's just a
[23:39] large communication chain of different
[23:40] moving parts that need to be talked to
[23:43] at different times there's definitely a
[23:44] lot of communication that happens
[23:45] between these different teams like the
[23:47] UI kiosk team and myself the shopping
[23:50] backend team because we're in different
[23:52] countries it's a it's a lot of back and
[23:54] forth it's okay so we need to interface
[23:56] like this uh we need to have this line
[23:57] of communication often times we'll
[23:59] create function interfaces so we could
[24:01] say this is exactly the code you need to
[24:03] call even if I haven't written it yet
[24:05] this is what it'll look like the kiosk
[24:06] actually requires a lot of different
[24:08] changes to go in for 3o uh we needed you
[24:11] know persistence uh for ships persistent
[24:13] DB as far as their inventory so as
[24:16] people purchase Goods there they have to
[24:18] fly a ship to a location purchase the
[24:21] the stuff uh that they want on that ship
[24:23] fly that ship to another location in
[24:25] order to sell it so it doesn't allow
[24:26] people to go to any location they want
[24:28] and spawn any ship it forces them to fly
[24:31] their ships around the universe so
[24:33] previously you were able to just do you
[24:35] know oh I'm MC Grim hex and I want my
[24:36] freelancer now or I want my Hornet now
[24:38] so now that people have to fly these
[24:40] things around it's going to force them
[24:42] to think about like oo maybe I need an
[24:44] escort back to this other place cuz I
[24:46] want to leave this ship here but I want
[24:47] to you know get a different ship and
[24:49] bring it over here so I can buy or sell
[24:50] some things for this ship prices will
[24:52] change based on inventory levels and
[24:55] stock levels and those inventory and
[24:57] stock levels
[24:58] are set on a per location basis so you
[25:02] can have two different casabas in two
[25:05] different uh parts of the world um that
[25:09] have different pricing schemes and it
[25:12] may be that they have the same base
[25:14] price for a given item but due to the
[25:17] fact that one of them might be farther
[25:18] away from a distribution point that it
[25:22] gets restocked less often and therefore
[25:24] the price stays higher on that item uh
[25:27] more regularly uh than at the other shop
[25:30] and that's just one example of kind of
[25:32] the the complexity that uh we should be
[25:35] able to deliver in 3.0 your player
[25:38] persistence is everything that you own
[25:40] as a player so it could be the
[25:41] Commodities you have you know how many
[25:43] uh SEO of iron do you have or you know
[25:46] what shirt are you wearing so that would
[25:48] be your player's persistence data
[25:49] luckily uh that system already exists
[25:52] it's constantly making improvements to
[25:54] it and so this new shopping code we have
[25:57] has to interface with some the older
[25:58] parts of of persistence and some of the
[26:00] newer Parts as well so that we really
[26:02] make sure we're we're saving what you do
[26:04] the big thing that is going to change
[26:06] for 3 is that it's really going to start
[26:08] to feel a lot more like the overall
[26:10] experience that that we've been talking
[26:12] about for so long persistence is a big
[26:14] part of that the ability to interface
[26:16] with um things in the game through the
[26:17] kiosk is going to be another big portion
[26:19] of that uh cargo system is coming online
[26:23] actually being able to carry things and
[26:24] have your ship keep track of the stuff
[26:26] that's on it and require people to to
[26:28] transfer goods from A to B that was a
[26:31] big part of our hauling and trading uh
[26:34] professions that's the exciting part
[26:35] what we're doing right now is it's
[26:37] laying the foundation for these cool
[26:38] features we're going to see coming up
[26:40] like systemic pricing like Dynamic
[26:42] economies that really react to players
[26:44] buying things in certain locations and
[26:46] selling them in others as these things
[26:48] start to come online it's really going
[26:50] to change the experience that people are
[26:51] having now and turn it much more into
[26:53] the game that we envision so the cool
[26:55] thing about the kiosk is it's in world
[26:56] like all of our other interfaces so you
[26:59] know that will have tie-ins with the
[27:02] interaction system where you can you
[27:04] know bring up a cursor and interact with
[27:06] the screen so that will be sort of our
[27:09] first foray into getting interactable
[27:11] screens in
[27:13] world uh working with this unified
[27:15] interaction system so later on we'll
[27:17] expand that to elevator panels and other
[27:20] uh inor screens the kios is is is a nice
[27:23] test because it's it has quite in-depth
[27:26] functionality like sorting and filtering
[27:28] uh in you know pop-ups and things like
[27:30] that so it's quite a complex interface
[27:31] over let's say something simple like an
[27:33] elevator floor selection panel so it's a
[27:35] good test for us this is the big step
[27:37] we've been waiting for for a long time
[27:39] to be able to start adding a lot of
[27:41] these other professions and and features
[27:44] into the game so I'm I'm really excited
[27:46] about it it's going to be the beginning
[27:47] of a lot of great things for the players
[27:49] it's going to be
[27:50] awesome I love the Retro look of those
[27:53] lowend kiosks they're really fun and
[27:55] have a lot of character yeah you'll be
[27:57] able to tell a lot of about where you
[27:58] are in the verse just by seeing what
[28:00] kind of kiosks are around that kind of
[28:02] environmental storytelling is important
[28:04] considering how many Landing zones the
[28:05] game will have and that's all for
[28:08] today's episode thanks to our
[28:10] subscribers for your continued support
[28:12] July's edition of jumpo will be released
[28:14] tomorrow so be sure to check it out
[28:16] definitely it's going to be a good one
[28:18] and finally our big thanks to all our
[28:20] backers for helping us build this game
[28:22] the level of community engagement at
[28:24] this point in the development process is
[28:26] just one of the many things that make St
[28:28] citizen so special true that until next
[28:31] week we will see you around the verse
[28:42] [Music]
[29:06] thank you for watching so if you want to
[29:08] keep up with the latest and greatest and
[29:09] staff citizen of Squadron 42's
[29:10] development please follow us on our
[29:12] social media channels see you soon

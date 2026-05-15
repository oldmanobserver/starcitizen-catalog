# Star Citizen: Around the Verse - Cyclone and Ship Persistence

**Video:** https://www.youtube.com/watch?v=IY6Ju2UR0hA
**Date:** 2017-07-28
**Duration:** 41:02

## Transcript

[00:16] hello and welcome to another episode of
[00:18] around the verse our weekly look at star
[00:20] citizens ongoing development I'm Sandy
[00:23] Gardner and I'm Chris Roberts it's great
[00:25] to have you back Chris yeah it's quite
[00:27] nice to be back here in La uh and uh did
[00:30] enjoy getting to spend a few weeks with
[00:32] our Foundry 42 team in the UK and
[00:33] Germany reviewing all the awesome work
[00:35] they've been up to on Squadron 42 and
[00:37] Star Citizen one of the many things
[00:39] being worked on by The Foundry 42 team
[00:41] is the tumbril Cyclone which was
[00:43] unveiled last week on today's episode
[00:45] we're going to take an in-depth look at
[00:47] this rugged new ground vehicle plus we
[00:50] examine the tech behind game wide
[00:52] persistence by showing you how it is
[00:54] used to get one ship to persist inside
[00:56] another ship's hanger but first let's
[00:59] check in with Austin and turbulent for
[01:01] their monthly
[01:02] updates hey guys Jake Ross here producer
[01:05] in Austin we're picking up speed with
[01:06] Gamescom at the 30 release fast
[01:08] approaching let's jump right in and see
[01:10] what's been going on here in Austin this
[01:11] month to start over the last month La
[01:14] engineering refactor the shopping Cod
[01:15] enough so that now Austin design team
[01:17] can start plugging the items back into
[01:19] the shops this also includes a first
[01:21] pass of getting the kiosks up and
[01:22] running for the commodity trading we
[01:24] have been focusing on getting all the
[01:25] shops related to the Pu stations and
[01:27] Landing zones functional first but we we
[01:30] will also be making a pass with the area
[01:31] 18 shops as well we've now got the
[01:33] ability to purchase armor piece by piece
[01:35] so we'll be adding that to the feature
[01:44] list we've also finally implemented the
[01:46] remaining ships into the price fixer
[01:48] tools the price fixer is a spreadsheet
[01:50] that allows us to see each ship's
[01:52] physical Loadout see the price of each
[01:54] item in that Loadout and determine the
[01:56] overall cost of each ship this is
[01:58] important because it will allow ow us to
[02:00] more accurately assign each ship their
[02:02] respa values which covers the cost and
[02:04] respa timers for the ships being
[02:06] released in 3 we also use this tool as a
[02:09] good way to gauge whether or not the
[02:10] ships we're building are over or
[02:12] underpowered for their intended purpose
[02:14] we are very close to completing this
[02:16] task and we'll be moving on to balancing
[02:18] the shop inventories and item prices
[02:20] that you'll see in 3 after that lead
[02:22] designer Rob Riner took a trip to the
[02:23] Frankfurt office this month to work with
[02:25] the AI and subsumption team and made a
[02:27] ton of progress on getting miles eart
[02:29] the mission Giver set up and ready to go
[02:32] we figured out a lot of work on the
[02:33] feather blending system and got him
[02:35] working with a small subset of his
[02:36] animations since that time we have
[02:38] received some additional code support to
[02:40] allow reputation to dictate his
[02:41] conversation paths with the player we
[02:44] literally just received the ability to
[02:45] assign specific missions with mission
[02:47] brief tags so we can have him playing
[02:49] different lines depending on what
[02:50] missions are available Beyond this we've
[02:52] just been plugging away trying to make
[02:54] the mission Giver experience as good and
[02:55] as polished as possible for the 30
[02:57] release we can't wait to get miles E
[02:59] cart into your hands and get these
[03:01] missions for you guys on the art side
[03:04] Josh Coons finished images and videos
[03:05] for the cutless black and moved on to
[03:07] create the base material and white box
[03:09] meshes for the cutless variants the red
[03:11] and the blue however while he will
[03:13] complete the first pass on the exterior
[03:14] looks for the cutless variant he will
[03:16] move on to the constant flation Phoenix
[03:18] next to allow design some time to flesh
[03:20] out some key gameplay systems for the
[03:22] cutlasses a little bit more Chris Smith
[03:24] has been working on bugs for the Hornet
[03:26] and the constellation Andromeda he will
[03:28] start moving on a promo video for the
[03:29] constellation Aila
[03:31] next the backend Services team have been
[03:33] supporting three features and preparing
[03:35] for the deployment of diffusion the game
[03:37] servers now have full access to the
[03:39] diffusion API and will start using it
[03:41] with the shopping service in 3 in
[03:44] addition we have started converting our
[03:45] two monolithic Services the persistence
[03:47] cache and general instance manager into
[03:50] smaller stateless fully diffusion IED
[03:52] Services out of those two services will
[03:54] come nearly a dozen smaller Services
[03:56] each with very specific roles that can
[03:58] be scaled independently
[04:00] these will provide more reliability and
[04:02] performance most of our work has been
[04:04] Lower Level under the hood type changes
[04:06] which do not have any frontf facing
[04:08] bling to show off going forward we're
[04:10] plotting the path Beyond 30 and starting
[04:12] to mild many small services that will
[04:14] provide functionality and support for a
[04:16] large number of gameplay features and
[04:18] help unload work from all the dedicated
[04:20] game servers into our distributed
[04:23] infrastructure this month in the Pu
[04:25] animation team we started the research
[04:26] and development for how to implement our
[04:28] wild line system a wild line broadly
[04:31] speaking is any dialogue spoken by an
[04:33] NPC the wild lines we are working on are
[04:35] things like greetings cheers shouts and
[04:37] other verbal Expressions barked out by
[04:39] NPCs we are working with a new
[04:41] technology called feather blending
[04:43] mentioned previously which allows us to
[04:44] blend our performance capture of wild
[04:46] lines with a large number of usable
[04:47] animations this will give us as close
[04:49] door actor performance as possible while
[04:51] still keeping the functionality of what
[04:53] the NPC is doing intact we are also
[04:56] going through all of our existing
[04:57] animations and we are filling in any
[04:58] gaps missing from from the original
[05:00] performance capture with new transition
[05:11] animations the Austin ship animation
[05:13] team has been hard at work with our
[05:14] continued efforts to refine the cockpit
[05:16] and turret experiences we are in the
[05:18] midst of an R&D phase of implementing
[05:20] button presses utilizing the item to
[05:23] Features this has helped finalizing
[05:25] dashboard and cockpit metrics across the
[05:27] different ships that use the same
[05:28] cockpit type the UK Engineers have
[05:30] refactored some backend systems allowing
[05:32] us to fully implement the blending of
[05:33] the base GeForce pose blend spaces
[05:36] allowing additive animations for button
[05:37] presses as well as playing different hit
[05:39] reaction animations based off of hit
[05:41] Direction damage amount and overall
[05:43] health of the ship as always we are
[05:45] diligently at work fixing bugs for our
[05:47] next big
[05:48] release the devops team continues to
[05:51] work on increasing capacity with our
[05:52] build and deployment pipelines in
[05:54] preparation for 30 they've also been
[05:56] making additional changes and buck figes
[05:58] to support the new Delta pack pure and
[06:00] so far the internal tests have been
[06:02] really promising our corporate
[06:04] technology team or it department has
[06:06] just completed another major upgrade to
[06:08] the Austin Network and added more
[06:09] Hardware to the build system so we can
[06:11] deliver more builds in parallel our
[06:14] resident audio team member Jason Cobb
[06:16] has had his hands full this month as
[06:17] well he's continued work on der crash
[06:20] site sound design for the different Moon
[06:21] environments performed a variety of
[06:23] particle audio implementation
[06:25] experiments for revamp ship debris
[06:28] noises he's tested and mixed refinements
[06:30] for ship emergency State audio and
[06:32] captured sound effects for various props
[06:34] and materials as opportunities
[06:49] arise July has also been an exciting
[06:51] month for Austin QA and it's impossible
[06:53] to describe everything we've been
[06:54] working on but here are a few things
[06:57] we've been testing the New cutless Black
[06:59] while in St we've had a new missions re
[07:01] and PCs as a big ongoing Focus ship
[07:04] testing has continued to be very busy as
[07:06] more ship families that have been
[07:07] converted to item 2com online large
[07:10] scale play tests for arena Commander
[07:11] starm marine and Stanton have been
[07:13] ongoing weekly alongside our laqa
[07:15] cohorts and we've also been conducting
[07:17] cross Studio play tests with the team in
[07:19] the UK we've also been testing more
[07:21] mobiglass applications like Starmap the
[07:23] personal manager the mission manager and
[07:25] the mission board as they've become
[07:27] available to QA over the last few weeks
[07:29] some other fun items we've been testing
[07:31] are character gravity and freef fall as
[07:33] well as continued testing of cargo
[07:35] mechanics we're still providing support
[07:37] for the animation team here in Austin as
[07:39] well by continuing to clean up map files
[07:41] to help free up our animators for other
[07:42] work our normal engine and editor
[07:44] testers are still extremely busy testing
[07:47] new tech for the developers such as
[07:48] capsule-based actor entity The Entity
[07:50] component update scheduler and director
[07:52] actor animation and control some
[07:55] features like the new stamina and oxygen
[07:57] breathing systems are getting some
[07:58] balance changes with QA helping our
[08:00] designers there as
[08:01] well the player relations team has been
[08:03] busy recruiting new team members in
[08:05] anticipation for 3 in addition to
[08:07] starting to grow the avocati ranks the
[08:09] team is adding four people to the Austin
[08:11] office we're excited to have these new
[08:13] additions join the team in the runup to
[08:15] learning and testing for
[08:16] 30 that's everything we got to show you
[08:18] for this update guys we look forward to
[08:20] delivering everything we've been working
[08:21] on to youall in the upcoming release and
[08:23] at Gamescom thanks for all you do for us
[08:25] and we'll see you in the
[08:28] verse hi guys this is Ben from turbulent
[08:30] and this is your platform update this
[08:32] week we're going to hear from Paige
[08:34] Saunders who's going to talk to us about
[08:35] the upcoming ship Matrix changes and
[08:38] we're also going to be talking with
[08:39] Victor banet who's also known in the
[08:42] forums as in the chat as fulgrim to talk
[08:44] to us about the next Spectrum update I'm
[08:47] p and I'm a full stack developer here at
[08:49] turbulent Montreal I'm working on
[08:51] updating the ship specifications in the
[08:54] database to reflect more accurately
[08:56] where cig are at with a vision on the
[08:59] the game and the ships that are in it a
[09:01] lot of new things have been added to the
[09:03] ship Matrix so we're taking the
[09:04] opportunity right now to include things
[09:06] like Quantum drives and Quantum fuel
[09:09] tanks uh as well as smoothing out all
[09:12] the existing components to make it more
[09:13] clear exactly what is in each ship the
[09:16] challenge with the ship Matrix has been
[09:18] including the new ground Vehicles into
[09:20] it so we've added in uh capability to
[09:23] add ships ground vehicles and anything
[09:25] else that comes up there's a new sizing
[09:27] scheme for ships uh so you have weapons
[09:30] maintaining the size 1 through 12 and
[09:32] the other components maintain a more uh
[09:34] easy to understand small medium large uh
[09:37] system that's related to the ship sizes
[09:40] so that you can tell what goes in what
[09:42] ship um and whether a ship has a size
[09:44] that's larger or smaller than it would
[09:46] typically have so we've redesigned the
[09:47] ship detail page so that you can tell
[09:49] for each component uh what size it is uh
[09:52] and see from the Icon what type it is uh
[09:55] as well as uh what it can be upgraded to
[09:57] and what could also fit in the slot then
[09:59] you can zoom out and see an overview of
[10:01] the ship with all the slots that are
[10:03] currently populated and the slots that
[10:04] are available for you to upgrade your
[10:05] ship with backers have noticed that the
[10:08] ship Matrix in the past hasn't got a lot
[10:09] of love so we've reworked the database
[10:11] to make it a lot easier to update from
[10:13] this point on we're going to be able to
[10:15] uh as things change in the game quickly
[10:16] get in there update the ship make sure
[10:18] that it's up to date and reflects
[10:19] accurately exactly what the gaming
[10:21] experience is going to be hi everyone
[10:23] I'm Victor QA at turbulant you probably
[10:26] know me as a full gam on Spectrum I am
[10:30] the I am the QA on the RSI website so
[10:35] spectrum and the website and a little
[10:37] bit of the launcher so I'm going to talk
[10:39] to you today about Spectrum so Spectrum
[10:43] 036 is now on the PTU with the
[10:46] aati uh 036 includes new features like
[10:49] uh the new text editor so when you um
[10:53] when you write something uh on the new
[10:57] post for example you will have new tools
[10:59] like uh
[11:01] hyperlinks format hyperlink formatting
[11:03] like
[11:05] the uh the Emoji Toolbox will be there
[11:07] and more important the preview of the of
[11:11] the post and drafts so now when for
[11:14] example you're uh you're busy typing
[11:19] your your tread and you want to check
[11:22] what your friend are are saying on on
[11:25] the Forum or on the chat Lobby you just
[11:28] you can just go
[11:29] check what they do and everything will
[11:31] be saved so now we have draft 036
[11:34] includes to the mini profile the mini
[11:37] profile is um like the current profile
[11:40] but uh with new features like um the
[11:43] post count and Karma so the post count
[11:46] will be um imported from the old Forum
[11:49] so people with a lot of post in the old
[11:51] Forum won't lose all this
[11:52] post and the Cora is um once you get
[11:56] every every every time you get an up vot
[11:58] on uh um on a Trad you you made or a
[12:01] comment you will get one comma point and
[12:05] uh it will be your it will be on your on
[12:07] your profile too so we'll add a new
[12:10] feature too which is the jump to new
[12:14] track reply so for example you know I'm
[12:17] a staff so I will post something in a
[12:18] trade and uh a backer would will be able
[12:22] to just go down the trade see the small
[12:25] icon of uh stuff reply click on the icon
[12:28] and we will be directly jump to the the
[12:31] reply of the stuff and if there are more
[12:34] than one reply of stuff replies um you
[12:39] will be able to jump between the replies
[12:40] with a small button so everything is
[12:43] good uh this features is available too
[12:46] for um organizations so you can just set
[12:50] up it in your setting in your settings
[12:52] and use it this is a feature that you
[12:55] ask and we
[12:57] devop thanks guys for your upate
[12:59] a little quick note on the launcher uh
[13:01] the team has been working very hard with
[13:03] cig engineering to try to get major
[13:06] progress done on the new Delta launcher
[13:08] which comes with the Delta Patcher which
[13:10] is a faster patching method uh the team
[13:13] has been really working on refreshing
[13:14] some of the UI elements uh we're keeping
[13:17] the same UI base but we're refreshing it
[13:19] with some of the 30 new imagery we're uh
[13:23] you know changing the entire core of the
[13:24] application in this update and so we're
[13:26] going in full swing testing on multiple
[13:28] platforms
[13:29] uh you know installation paths at the
[13:32] same time most of our engineering team
[13:33] has been working on getting most of the
[13:36] digital distribution uh channels ready
[13:38] so that you know we can get get those
[13:41] objects as fast as possible to you when
[13:42] you request a game version uh so that
[13:45] requires also Security reviews and you
[13:47] know deployment scripts but that's
[13:49] basically where we're at on the launcher
[13:51] we're really working hard everybody is
[13:53] working really hard to get this Patcher
[13:55] out and uh for you guys for 3 we're
[13:57] hoping we're going to make it we're
[13:59] pushing real hard so that's our update
[14:01] for this week on platform see you guys
[14:02] next
[14:04] time miles eart is proving to be quite
[14:06] the popular test subject for various
[14:08] systems uh definitely he's the new
[14:10] cafeteria really um the design and
[14:12] subsumption teams have really put him
[14:14] through the paces to get stuff like the
[14:16] reputation system and feather blending
[14:18] working all that effort is going to make
[14:20] for more interesting and realistic NPC
[14:22] interactions in the game which is our
[14:24] goal with the introduction of our vast
[14:26] planetary Tech another aspect of the
[14:28] game that's recently gotten some extra
[14:30] attention is our Fleet of ground
[14:32] Vehicles last Friday we revealed the
[14:34] tumbril Cyclone yeah we did it's very
[14:37] very cool and uh let's take a closer
[14:39] look at the cyclone and its many
[14:51] variants my name is Paul Jones uh I'm
[14:54] one of the art directors here at Foundry
[14:55] 42 my name is Steven Hosmer and I am a
[14:58] tech technical designer at Cloud
[15:00] Imperium we're sort of starting to enter
[15:01] into the world of land vehicles that
[15:03] gives us a wide brief uh the buggy
[15:06] that's a it's a it's a good one this is
[15:07] a new manufacturer it's always exciting
[15:09] to have a sort of Clean Slate according
[15:12] to the law this this manufacturer this
[15:14] company been around for a bit used to
[15:16] sort of provide uh sort of super rugged
[15:19] vehicles for the military so the Cyclone
[15:22] is intended to be a uh land vehicle
[15:25] where you get in and drive around on the
[15:29] surface of a planet it's supposed to be
[15:31] like a fun vehicle to drive fast it has
[15:33] four-wheel drive it's got uh four-wheel
[15:36] steering also something that you're
[15:38] supposed to be having fun while you're
[15:40] driving around on the planet taking
[15:42] jumps off ramps just doing all the
[15:45] things that you can in a in a wheeled
[15:47] vehicle you can sort of tell that it's
[15:49] got military routs in the way that it's
[15:52] it's got It's very functional but there
[15:54] you know there is that sort of hint of
[15:56] you know knowing its market and it just
[15:58] wants a little bit of flare so there's
[16:00] you know there's a touch of artistic
[16:02] flare designed Aesthetics in there and
[16:04] now this is sort of like their first
[16:06] entry into you know sort of uh
[16:08] manufacturing and providing it and
[16:10] selling a new vehicle it's based in
[16:12] functionality basically it's design so
[16:14] it's very much approached from that
[16:16] point of view the Ursa Rover I would
[16:18] call it a tortoise and the uh Cyclone
[16:21] I'd call it a hair where you have the
[16:24] the Rover it's going to be you know slow
[16:26] and steady you've got the cycl clone
[16:29] which is going to be fast and fun to
[16:30] drive and then the nox is going to be
[16:33] like a Speedster that's going to get out
[16:35] there but it's not going to take as many
[16:36] hits so it's kind of like in between
[16:39] that pretty much defines quite a few
[16:41] things right off the bat you know just
[16:43] ergonomics you know what it's meant to
[16:45] do whether it's you know like I said
[16:47] it's not meant to be a crazy sort of
[16:49] six-legged vehicle or anything you know
[16:51] we want it you know it needed to be fast
[16:54] needed to look super rugged it could
[16:55] take a hit uh it still sort of you know
[16:58] has open elements um to it so it's you
[17:01] know you're still going to sort of feel
[17:02] the wind in your hair so to speak if you
[17:04] have any hair you know we sort of hit it
[17:06] quite hit it quite early on actually in
[17:09] the process probably within the first
[17:10] two two weeks we knew where we were
[17:13] going with it so the modularity is
[17:15] something that was specified by the
[17:17] design
[17:18] Department um and so I think it works
[17:21] really well you know it's almost it's
[17:23] it's kind of you know it's very similar
[17:25] to sort of a real world and sense of
[17:27] having a truck and then you've got your
[17:30] flat bed at the back and then you can
[17:32] sort of add add and subtract basically
[17:35] the first variant is just the base it's
[17:37] just a regular buggy with a flatbed on
[17:40] the back that's meant to carry cargo so
[17:42] if you're just you know sitting around
[17:43] on your homestead and you want something
[17:45] to go from place to place and carry a
[17:47] little bit of cargo that's the one for
[17:48] you the next one is the turret version
[17:51] the TR and that's uh mostly a military
[17:55] version kind of hearkening back to the
[17:56] old days of tumbril it has a turret so
[17:59] you've got a third seat for turret
[18:02] operator and it's got a 360° Arc and it
[18:06] can fire any direction it's kind of uh
[18:09] like an infantry support vehicle like if
[18:11] your boots on the ground operation this
[18:13] is your Cavalry this is the the thing
[18:15] that's going to get in get around get
[18:17] around uh all the other um troops and
[18:20] kind of support them the next one is the
[18:24] uh Recon and the Recon is our n version
[18:28] I believe and that one's meant to be
[18:31] something that goes like under the radar
[18:33] it's got stealth components and then you
[18:35] can kind of get into like an enemy uh
[18:38] base kind of scout around use your radar
[18:41] to find uh imp placements or something
[18:44] like that use your beacons you can kind
[18:46] of put them down use them to like light
[18:49] up a Target that you need like the guys
[18:51] in the sky to come down and and Rain
[18:53] fire upon um or you can just use it as a
[18:56] exploration vehicle you can go out you
[18:58] can map terrain you can you can go onto
[19:02] uh one of the planets that has like a
[19:03] dust storm or something you can drop it
[19:05] outside of the dust storm Drive in find
[19:08] whatever you're looking for whatever
[19:10] objective you're trying to find place
[19:12] your beacons and say okay hey this is a
[19:14] landing spot in this storm you can bring
[19:16] your ship in you can find those beacons
[19:18] they can call you down you can pick up
[19:20] whatever you need to get there uh the
[19:23] next version is going to be the racing
[19:24] version the
[19:25] RC um it's mostly just we're taking the
[19:30] base cyclone and we're putting basically
[19:32] nitrous oxide in the thing you get the
[19:34] boost on that thing you can take those
[19:36] jumps as fast as possible you can get
[19:38] around as quick as possible it's like if
[19:40] you're uh like in Baja you know you're
[19:42] like going over the dunes and you're
[19:44] like hitting the Boost and you're just
[19:46] going as fast as possible uh and then
[19:48] the last one is the anti-air vehicle and
[19:51] that one has two size two missile racks
[19:55] so you can either have a size two size
[19:58] two missile are four size one missiles
[20:01] and then it also has a countermeasure
[20:02] package which includes shaft flare smoke
[20:06] screen and a size One EMP you know you
[20:09] always think it's good it's interesting
[20:11] it's you know it's fresh um but you sort
[20:13] of sometimes you think oh yeah we'll
[20:15] nail this no problem and then there just
[20:17] the little things that trip you up and
[20:19] keep tripping you up and it's just
[20:21] getting it's just getting aware of you
[20:24] know all the things that we need to take
[20:25] into account you know in enters and
[20:28] exits you know whole cabin all the all
[20:32] the you know all the instrumentation has
[20:33] to be in the right place you know and
[20:35] you constantly sort of jiggling trying
[20:37] to hit what the game needs and then what
[20:41] us as artists want to sort of push in
[20:43] there and sort of experiment with you
[20:45] know there are a couple of things that
[20:46] maybe we could have improved on but
[20:49] we'll you know but when it goes to the
[20:50] production team we'll have a chat with
[20:52] Nate we'll have the kickoff and I'll be
[20:54] like okay this went well was less happy
[20:56] with this you know maybe maybe you guys
[20:59] can you know flesh us out a little more
[21:01] sort of really
[21:02] Advan again the manufacturer so we know
[21:05] you know when when we building tumbril
[21:08] uh Vehicles okay this is this is what we
[21:10] do these are the these are the these are
[21:12] the materials this is the you know this
[21:15] is the cloth this is the metal this is
[21:16] the paint this is the color here's our
[21:18] decals here's our here's our UI style
[21:22] and just sort of clarify all that
[21:24] basically probably the most challenging
[21:26] thing is probably always the deadline
[21:28] the beauty of being this this being the
[21:30] first one you have a certain amount of
[21:31] naivity in terms of you're not quite you
[21:34] know you're doing a land vehicle but
[21:36] you're not quite sure the problems
[21:38] you're going to hit and often with this
[21:41] sort of stuff it's very much you know
[21:43] you make one change and it has a it has
[21:45] a ripple effect to the whole vehicle so
[21:48] make a change to the front suddenly the
[21:50] front's out of balance with the back so
[21:51] now we've got to change the back okay
[21:53] the back's changed now so that's
[21:55] affected something somewhere else and so
[21:58] it's it's it's trying to manage all
[22:00] those sort of little tweaks and changes
[22:03] and and still hit the deadline basically
[22:06] so that's that's always a tough one for
[22:08] me I mean we always do it um but it's
[22:11] always it's always team effort let's you
[22:13] know how do we do
[22:14] it so the Cyclone is going to be a great
[22:17] addition not only does it look like a
[22:18] lot of fun to drive all the variant
[22:20] should provide for some pretty
[22:21] interesting and varied gameplay of
[22:24] course one of the main questions that's
[22:25] popped up is what ships will it fit into
[22:28] if you're looking for that answer then
[22:30] check out this week's Cyclone Q&A there
[22:33] you go and if you're interested in
[22:34] knowing the tech involved in making that
[22:36] happen then this next segment is for you
[22:39] as you'll see getting a ship inside
[22:41] another ship's hanger and keeping it
[22:43] there isn't as easy as it seems it never
[22:55] is my name is Chad mckin and I'm a game
[22:58] play programmer here in the Los Angeles
[23:00] Studio we're talking about ship and
[23:01] ships which is a topic that touches on a
[23:05] few different systems on one hand you
[23:07] have just kind of the physics uh and
[23:09] game code involved to actually make the
[23:11] ship and ship behavior um work
[23:14] consistently but there's actually a
[23:15] whole larger other topic that it touches
[23:18] on which is persistence um how do you
[23:22] get the ship in there in the first place
[23:24] uh you can just drive it in there but if
[23:26] you park your ship at a space station
[23:28] log off log back on you really want that
[23:31] ship to be there the next time you spawn
[23:33] it you want you to have your dragonfly
[23:34] or your nox and so the question is how
[23:38] do we get there in 2.6 this isn't
[23:40] possible you you won't get that ship
[23:42] back in your constellation or or
[23:45] whatever it won't be there but if you do
[23:47] want it to be there we need a whole uh
[23:50] host of Technologies in our engine and
[23:54] in our backend services to support that
[23:56] behavior it's this little thing that
[23:58] seem so small that actually requires um
[24:01] a lot of effort to make work correctly
[24:03] but that effort also enables a lot of
[24:06] other behaviors in the game that
[24:08] previously weren't possible so right now
[24:10] in in 2.6 what we have is effectively um
[24:14] a very simple system that just tracks
[24:17] player accounts and specifically um
[24:20] loadouts in player accounts so it tracks
[24:24] your specific Loadout that you have
[24:25] equipped as well as any vehicles that
[24:28] own and their loadouts this is fine for
[24:31] the gameplay that we have right now in
[24:33] the game so yeah you'll you'll have your
[24:35] weapons the next time you log into the
[24:36] game if you do a modification on your
[24:38] ship it'll be there the next time you
[24:40] log into the game but if you make any
[24:42] kind of change in the game world uh or
[24:46] in kind of inside your ship uh that's
[24:50] not going to be reflected in any way
[24:52] because the persistence database doesn't
[24:54] know anything about it this is a great
[24:57] limitation whenever you consider the
[24:59] kind of game that we're trying to make
[25:00] we want to make this large game this
[25:02] living world that can change and be
[25:04] dynamic but this persistence behavior
[25:06] that we have is completely ignoring all
[25:09] of the nuances that are required to
[25:12] achieve that behavior one large uh part
[25:15] of that is this fact that we're so tied
[25:17] to loadouts because of that that means
[25:20] there's no concept of a loose entity so
[25:24] let's say you have a ship uh a
[25:26] constellation and you park a nox in
[25:28] inside it the nox isn't attached to the
[25:30] constellation right it's not on the wing
[25:32] a fixed to a a gimbal where a turret
[25:35] would be it's just lying there in the
[25:37] ship in order to make that work we have
[25:39] to completely refactor the way that game
[25:42] code handles uh persistent data and make
[25:45] it in such a way that instead of
[25:47] tracking accounts instead we're tracking
[25:49] a map of entities that point to parents
[25:53] and potential uh item ports that they're
[25:56] attached to and offsets with this
[25:58] requires is that we need to look in the
[26:00] persistent data record for the ship
[26:03] we're going to find all of the children
[26:04] of that ship so we're going to find all
[26:06] of the uh item Port attachments that'll
[26:08] be all the guns and now uh that we've
[26:11] made some refactors in the Precision
[26:13] database we can also find Loose entities
[26:15] in that ship so it's going to find the
[26:17] cargo uh item that we left in there as
[26:20] well as that knot that we left in there
[26:21] as well loose items now also have offset
[26:24] information in the persistent uh data
[26:27] data record
[26:28] that informs the spawning code where to
[26:31] line them up so we spawn the ship the
[26:34] constellation we spawn all its children
[26:36] we SP Laing spawning loose items and we
[26:38] have to spawn them in the correct
[26:40] location in zone space so they line up
[26:42] correctly we also need to introduce them
[26:44] correctly into the zones of their
[26:47] parents so that they don't fall out uh
[26:50] if you don't put the knock in the
[26:52] constellation Zone um they'll either
[26:54] Collide and explode or it'll fall out
[26:57] and just leak into space so we have to
[26:59] do a lot of fix up in spawning code but
[27:02] if all goes to plan we spawn everything
[27:04] in the right order in the right place in
[27:06] the right Zone comes in you see it it
[27:08] looks exactly like you saw it last and
[27:11] works perfectly this makes it to where
[27:14] something doesn't have to be in a load
[27:15] out for it to be um physically uh owned
[27:19] by another entity but that kind of
[27:21] touches on another thing the old
[27:23] methodology only had one concept of
[27:25] ownership you just owned something or
[27:27] you did didn't and that's fine again
[27:29] whenever you're dealing with uh your
[27:31] ships um if you have an attachment like
[27:34] a gun you've bought that um or you've
[27:36] acquired it through some means and that
[27:39] means that you can attach it or not but
[27:42] in gam playay you may get a hold of
[27:45] something that you didn't buy it may be
[27:47] in the game world or it may be something
[27:49] that you want to take from another
[27:50] player how do we track that in
[27:53] persistence well previously just there
[27:55] was no distinction what we need is a
[27:57] distinction between physical ownership
[27:59] and legal ownership so that you can
[28:01] legally own something you bought it but
[28:04] you don't physically have access to
[28:06] anymore because somebody took it from
[28:07] you it's in their ship now that was
[28:09] another large set of changes to make
[28:11] this distinction between physical
[28:13] ownership and legal ownership it had
[28:15] large ramifications on how we store and
[28:17] manipulate the data I had large
[28:19] ramifications on how we uh do this thing
[28:22] called Network ownership originally
[28:24] whenever a server would connect to the
[28:27] backend services the persistent cach
[28:30] that the player connected to would make
[28:32] a request for all of the items that the
[28:33] player has and it would then ask the
[28:36] server to entitle these to the new
[28:39] account then those items are sent to the
[28:42] server and cach locally they're also
[28:44] sent to the client and cash locate on
[28:46] the client what this meant was that
[28:48] there's a large set of data that exists
[28:50] both on the game server and on the
[28:54] client that is mirrored but if any
[28:57] change need to happen to that persistent
[28:59] data changes would have to happen
[29:01] synchronously both on the server and on
[29:04] the client and this is a large technical
[29:06] problem previously we kind of avoided it
[29:08] because we didn't really have this
[29:09] Dynamic Behavior we had some shop uh
[29:12] behavior that could change it and we had
[29:14] some H kind of hack code in place to
[29:16] manipulate it on the client and the
[29:18] server synchronously but once we start
[29:20] having larger systems directly
[29:22] manipulating this persistent data having
[29:24] um fragmented clones of the data across
[29:27] the network is is a huge issue both uh
[29:30] for security as well as for uh behavior
[29:32] and Sanity of of the data instead we've
[29:35] needed to move over to a system where
[29:37] the server is the authorative owner of
[29:40] the data and clients don't actually have
[29:42] a copy anymore instead they have to make
[29:45] queries to the server whenever they want
[29:46] to display something so let's say you go
[29:48] to a kiosk you want to buy some cargo
[29:51] well instead of directly checking the
[29:53] data that we have cached on the client
[29:55] we make a request to the server the
[29:57] server server will collect all the
[29:59] information that's required and send it
[30:00] to the client this makes it to where
[30:02] it's always up to date it's always
[30:03] correct and everybody in the network
[30:05] always sees the same information it also
[30:07] makes it to where some nefarious
[30:10] behavior on the behalf of the client
[30:12] isn't possible anymore because we've
[30:14] kind of closed off the ability to
[30:16] introduce uh information that wasn't
[30:18] there to start with one issue that we
[30:20] have uh right now is that I mentioned
[30:23] before was physical ownership and legal
[30:25] ownership well if we want to establish
[30:27] physical own ship that means that we
[30:29] also need to allow for transfer of that
[30:31] physical ownership to give an example
[30:33] let's say there's some cargo that's on
[30:37] um in an outpost on a planet that cargo
[30:40] might be spawned in with something
[30:42] called an object container which is just
[30:44] something that we've touched on in
[30:46] previous U material that we put out and
[30:48] so this object container just contains
[30:50] entities that get loaded into the game
[30:52] if you want to pick up that cargo and
[30:54] put it into your ship there's several
[30:56] steps that have to happen to make that
[30:58] work correctly first U we need to do the
[31:01] persistent transfer of the piece of
[31:04] cargo but there's an immediate problem
[31:05] that we run into the cargo in the object
[31:08] container isn't a persistent entity it
[31:10] got loaded in with the object container
[31:11] it was never persistent to start with so
[31:14] we need to do something called promotion
[31:16] to make it into a persistent entity and
[31:18] to make it uh what's called Network
[31:19] replicated then we have to make some
[31:22] modifications to the way the object
[31:23] containers work object containers assume
[31:26] a certain fixed set of entities will get
[31:27] get loaded in and we're actually
[31:30] modifying this list so we have to modify
[31:32] the way the object containers work so
[31:34] that they can have changes to their uh
[31:37] entity list uh networked across the
[31:39] network and to support late joiners so
[31:42] that anybody who joins in later into the
[31:44] game sees the changes to the object
[31:46] container so we've done a promotion to
[31:48] the uh cargo item we've removed it from
[31:51] the object container now we're going to
[31:53] transfer the persistent ownership of
[31:55] that to the player who picked it up the
[31:57] player has it it's in their persistent
[31:59] data record now the player walks into
[32:01] their ship and they put it into their
[32:03] ship we do another uh physical transfer
[32:06] of ownership from the player to the ship
[32:09] the ship now physically owns it and the
[32:11] persistent data record is updated to
[32:13] where the piece of cargo is in the ship
[32:15] now if the player logs off and the ship
[32:18] gets
[32:26] unspawnable and it'll be under their
[32:29] physical ownership even though the first
[32:31] player yourself legally owns it in order
[32:33] to get ships and ships working requires
[32:37] identifying physical ownership and legal
[32:39] ownership or requires doing all this
[32:40] persistent tracking but it's that same
[32:42] technology that also allows us to make
[32:45] our game World At Large um more Dynamic
[32:49] and have more life as far as as its
[32:51] Behavior so that means that you can make
[32:53] a change now to the world and that can
[32:55] be trapped there are some limitations
[32:58] still um changes in the World At Large
[33:02] are going to still be what what is
[33:04] called session level persistence so you
[33:06] can make a change to a planet or you can
[33:09] make a change to a space station and we
[33:11] can track that for the lifetime of that
[33:13] server but it's tied to that server um
[33:16] but that does mean that you can start
[33:17] actually changing the world if there was
[33:20] some cargo at that space station you can
[33:23] take it and somebody else won't see it
[33:24] anymore or um you can maybe leave
[33:28] something behind that they will see if
[33:29] you left your ship there well that
[33:31] ship's still there and someone else can
[33:33] come along while you're walking around
[33:35] on that
[33:36] planet they see this nice ship just
[33:38] sitting there maybe they'll take it away
[33:40] and it won't be there anymore and now we
[33:42] can be begin hooking in criminality
[33:45] systems to maybe give someone a wanted
[33:47] level whenever they've taken a ship that
[33:49] isn't theirs or taken some cargo off a
[33:51] ship that wasn't Theirs to start with it
[33:53] also means that if you for instance want
[33:56] to fly under the radar have some stolen
[33:58] Cargo in your ship that's not in your
[34:00] cargo grid so it's not in your manifest
[34:03] you can do that but that leaves it uh
[34:06] open for other people to then take your
[34:08] ship or take that loose cargo easier and
[34:12] it's going to make pirating more
[34:13] dangerous and it's going to make uh
[34:15] cargo more interesting I think whenever
[34:18] and other things in the game as well
[34:19] whenever you can take it from somebody
[34:22] else another thing this allows for is
[34:25] collecting right so you can if you find
[34:28] a big Benny's machine in the world you
[34:30] can kick it around maybe with another
[34:32] ship got to do some work but if you try
[34:34] hard enough maybe you can get this big
[34:36] Vin's machine and you say your
[34:38] constellation Andromeda cool now you
[34:40] have a big Vines machine and you take it
[34:42] with you and you own that thing well you
[34:44] physically own it at least you you sign
[34:46] off you sign back on again it's still in
[34:48] your ship maybe you can find another one
[34:50] somewhere start a collection you can
[34:51] have three or four of these you can
[34:53] trade with your friends give give them a
[34:56] a big Benny's machine maybe they give
[34:57] you weapon it allows for uh some more
[35:00] emergent gameplay you don't necessarily
[35:02] have to have a gameplay system in the
[35:04] game that is specifically tracking big
[35:07] bny's machines but you can still play
[35:09] with them because now you physically
[35:11] have access to them and that access is
[35:13] tracked in your persistence data we're
[35:15] starting to introduce diffusion which is
[35:17] a whole new way of interacting with the
[35:21] backend services that gives us some very
[35:23] interesting uh possibilities for the
[35:25] future for 3.0 it's just going to be a
[35:28] small set of uh diffusion Services um
[35:31] that are going to be online but moving
[35:33] forward we're going to greatly increase
[35:35] the number of these diffusion services
[35:38] and that has some really interesting
[35:39] impacts on uh persistent gameplay
[35:41] because it means that you can now have
[35:44] some diffusion service that's tracking
[35:46] an economy and persistent changes that
[35:48] you make in the world will impact the
[35:50] economy it will impact the cost of items
[35:53] it'll impact the location of them maybe
[35:56] the delivery of them there could be be
[35:57] services that are delivering missions
[36:00] the missions can be based on persistent
[36:02] changes in the world uh you can have
[36:04] Services based on pirate activity or
[36:08] Services based on um AI activity it
[36:11] allows us to have the combination of
[36:14] persistent data and persistent changes
[36:16] um to be utilized across the server
[36:19] instances and um have these Services
[36:22] enable U more kind of higher level um
[36:26] behavior and higher level modifications
[36:28] to in-game actions based on diffusion
[36:31] Services we're taking it to the next
[36:34] level to where we can get a more Global
[36:37] Universal look at persistence we can
[36:39] start caring not only about player
[36:41] persistence but the ship's persistence
[36:43] space station persistence Planet
[36:46] persistence Universe persistence ideally
[36:48] we want to move to something that we
[36:49] call the server mesh which has either a
[36:52] larger or a single uh mesh of servers
[36:55] that govern the entire universe and all
[36:58] the players are interacting with each
[37:00] other across this large server mesh that
[37:02] will allow some um truly persistent
[37:05] behavior in the world so that any one
[37:08] change that you make on a planet any
[37:10] planet or on any station is going to be
[37:12] persisted for all the players across the
[37:14] entire game it will make it to where if
[37:17] I leave something on a planet it's not
[37:19] in one server it's on that planet there
[37:21] is one planet and that has that change
[37:23] so 3.0 we're introducing these
[37:25] serialized persistent variables that
[37:28] will allow gameplay features to start
[37:30] tracking persistent information this
[37:32] will include features such as uh ship
[37:35] health and player Health as well and
[37:37] stamina so if your vehicle has the wing
[37:40] blown off of it and you respond your
[37:42] vehicle it's not going to have that Wing
[37:44] if it becomes unflyable you're going to
[37:46] have to start engaging with some of the
[37:47] other gameplay systems that we have so
[37:50] for instance you could have it repaired
[37:52] at a repair station or if it's beyond
[37:54] repair or you don't want to go through
[37:56] the effort you can make an insurance
[37:58] claim on it if you have uh insurance for
[38:01] the ship this will be expanded to
[38:03] include other behaviors in the game so
[38:05] like I said um damage uh and health for
[38:08] the vehicle but also stamina for the
[38:10] player so certain kinds of effects will
[38:12] be uh persistently applied to your
[38:14] player there will be other things in the
[38:17] game such as ammo your ammo is going to
[38:19] be persistent if you run out of ammo
[38:21] you're going to have to buy more ammo
[38:23] it's not going to be the way it's been
[38:25] where you can just fire away and you
[38:27] don't have to can be so concerned about
[38:29] the consequences additionally there'll
[38:31] be other things the interactable
[38:33] entities in the game will now have the
[38:35] capacity where we want to we can
[38:38] identify certain entities and make their
[38:40] states persistent so say there's a data
[38:43] pad that you interact with maybe you
[38:44] switch Its Behavior to be in an on state
[38:47] as opposed to an off that could be
[38:48] tracked and be persistent um we're
[38:50] identifying every day new places in game
[38:53] code where we have certain behaviors
[38:55] that have traditionally just been
[38:56] networked across the the network to keep
[38:59] the clients and server in sync but it's
[39:01] very easy to just turn on this
[39:03] persistent flag and start having that
[39:05] now be a persistent value that's tracked
[39:07] across game sessions so we're looking
[39:10] for these uh opportunities to take these
[39:12] game uh gameplay behaviors and make them
[39:15] more permanent as far as the lifetime of
[39:18] their effect I think it' be a very
[39:20] interesting world to play in and a very
[39:23] interesting set of gameplay features I
[39:24] really know their game has
[39:27] so that piece was a great way to show
[39:29] how all our systems tie together under
[39:31] the hood it was a massive undertaking to
[39:33] lay that groundwork but it gives the
[39:35] game a ton of functionality once
[39:36] everything is up and running and that's
[39:39] all for today's episode thanks to our
[39:41] subscribers for supporting all of our
[39:42] shows tomorrow we have a special happy
[39:45] hour Game Dev planned live designer
[39:47] Gareth Bourne will be building a solar
[39:49] system using the Sol Ed tool with help
[39:51] from the viewers tune in to our twitch
[39:53] Channel at 11:00 a.m. Pacific to catch
[39:55] it yeah that sounds like that'll be a
[39:56] lot of fun so you don't want to miss
[39:58] that uh finally thanks to all our
[40:00] backers we couldn't build this game
[40:02] without your continued support we could
[40:03] not and until next week we will see you
[40:07] around the verse
[40:16] [Music]
[40:40] thank you for watching so if you want to
[40:41] keep up with the latest and greatest and
[40:42] staff citizen of Squadron 42 development
[40:45] please follow us on our social media
[40:46] channels see you soon
[40:55] [Music]

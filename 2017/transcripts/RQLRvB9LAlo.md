# Star Citizen: Around the Verse - Trouble at Drake

**Video:** https://www.youtube.com/watch?v=RQLRvB9LAlo
**Date:** 2017-04-06
**Duration:** 37:15

## Transcript

[00:16] hello and welcome to around the verse
[00:17] our weekly look at the development of
[00:18] Star Citizen I'm Chris Roberts and I'm
[00:20] Eric kin Davis Chris it's great to have
[00:22] you back on round the verse how was your
[00:24] trip to the UK and Frankfurt offices uh
[00:27] very productive um as I mentioned in
[00:29] last week's newsletter uh we held an
[00:31] overall project review in Frankfurt I
[00:33] was joined there by cig te members from
[00:35] across the globe all from all our four
[00:37] Studios actually uh we reviewed and
[00:39] planned Sprints uh as well as work to
[00:41] improve the overall cockpit experience
[00:44] uh when you're flying around in Star sis
[00:45] so you'll see that down the road not
[00:47] quite yet but it'll be cool that sounds
[00:49] great and one of the best parts of Star
[00:50] Citizen is flying around the universe
[00:52] which brings us to today's episode we'll
[00:54] be sharing some of the technical
[00:56] considerations that have gone into the
[00:57] upcoming planetary outposts that will
[01:00] populate future pu
[01:02] environments yes but first let's check
[01:04] in with the Austin and turbulent Studios
[01:06] for their
[01:08] updates hey guys Jak Ross here producer
[01:10] here in Austin I wanted to take a quick
[01:12] second to thank Clifford AKA Miku
[01:14] Imperium and Doc tari for their generous
[01:16] and delicious gifts to the Austin Studio
[01:18] we always appreciate the show of love
[01:20] and support from our community and these
[01:21] tasty treats help keep us fueled and
[01:23] encouraged so thanks guys now let's take
[01:25] a look at what our Full Belly team here
[01:27] in Austin uh has been up to this past
[01:29] month this last month the Austin design
[01:31] team has been focused on getting 262 out
[01:33] the door among other things 262 work has
[01:35] consisted mainly of adding new
[01:37] subscriber flare items and fixing some
[01:39] minor bugs as well we're also updating
[01:41] additional shop related elements as we
[01:42] continue to build upon the shopping
[01:44] system while I can't go into major
[01:46] detail right now I can say revisions of
[01:48] the Stanton system app are in progress
[01:50] also Landing Zone Ai and usables are
[01:52] undergoing additional development for
[01:54] this month we have a peek at our latest
[01:55] subscriber flare and details on how
[01:57] we're expanding the shopping Tech to
[01:58] utilize some new tools that relate to
[02:00] the item to0 system first let's take a
[02:02] look at the new subscriber flare that
[02:04] will be rolled out in the coming months
[02:06] one of the new items is called the Vivid
[02:07] display which can display game locations
[02:09] holographically players can use the
[02:11] Vivid display to find out more about
[02:13] locations including their intended
[02:15] visuals other flare items include a
[02:17] series of ship schematics which will
[02:18] showcase the level of detail that goes
[02:20] into our ship design these lightboard
[02:22] displays can be hung from any poster
[02:24] style port in your hanger we hope you'll
[02:26] enjoy these upcoming additions to
[02:27] subscriber flare and look forward to
[02:29] additional flare in the near coming
[02:31] months now we'd like to share how we're
[02:33] revamping the shopping system for our
[02:34] next release as the item 20 system
[02:37] advances the it Port structure changes
[02:39] so it can fall in line with our end goal
[02:41] these fluctuations have forced us to
[02:42] readdress the setup for things like ship
[02:44] uh shop mannequins and item bundles
[02:47] while the end result will be pretty
[02:48] obvious to the players the differences
[02:50] for the designers will change
[02:51] drastically uh for the better our goal
[02:54] is to create a base mannequin object
[02:56] that the shopping system can apply
[02:58] loadouts to the items on a given
[03:00] mannequin would be purchasable by
[03:02] themselves or as a bundle for a
[03:03] discounted price in the past every
[03:05] outfit was only purchasable purchasable
[03:08] as an entire set of items on top of that
[03:10] a Spoke mannequin setup had to be
[03:12] generated for each unique outfit display
[03:15] fortunately our advancing Tech will soon
[03:16] allow our Loadout Editor to quickly
[03:18] create various item combinations within
[03:20] a given shop that Loadout comprised of
[03:22] items in the shop will then be assigned
[03:24] to the Shop's inventory as a bundle the
[03:26] shopping system will then spawn these
[03:28] bundles directly onto an empty sh
[03:29] mannequin with no additional effort by
[03:31] the designers a process that took hours
[03:34] before will soon only take minutes all
[03:36] allowing us to quickly generate
[03:37] different item combinations that can be
[03:39] displayed on the mannequins what seems
[03:41] like a minor change actually unlocks a
[03:43] multitude of options for the design team
[03:45] to create realistic shops hopefully
[03:47] you'll be able to see the fruits of this
[03:48] labor really soon uh in our upcoming
[03:51] releases the Pu animation team just
[03:53] finished a small map shoot using our
[03:55] in-house opt track system this was a
[03:57] pickup shoot to help us fill in all the
[03:58] gaps from the performance capture shoots
[04:01] done previously at Imaginarium Studios
[04:03] we captured transition animations for
[04:05] both male and female characters examples
[04:07] of a transition animation includes some
[04:09] sitting down at tables with trays going
[04:11] through a chow line to get food eating
[04:13] drinking rumaging or sitting in cockpits
[04:15] and turrets the transition animations
[04:17] are shot in such a way that they can
[04:19] work with our metrics and are Universal
[04:20] enough to be used all over the game with
[04:22] many different usables in our
[04:23] environments if you're not familiar with
[04:25] the term usable as a reminder it's a a
[04:27] usable is an object that a player or NPC
[04:29] can interact with like a chair wall
[04:31] table or other set piece usables also
[04:33] include props like cups and plates and
[04:35] bottles and anything else that can
[04:36] physically be picked up by a person we
[04:38] are currently implementing these
[04:39] transition animations into our usable
[04:41] system obviously animation can only get
[04:43] these game assets so far our biggest
[04:45] challenge right now is making all the
[04:46] usable function in game properly it is
[04:49] up to code Tech and designers to make
[04:51] them work together which is why Austin
[04:52] animation is working closely with our
[04:54] Frankfurt and UK Studios on this metrics
[04:57] are being created for door control
[04:58] panels bathrooms toilet facilities and
[05:00] Chow lines in the Idris mes Hall we're
[05:02] putting Tech in place that will allow an
[05:03] NPC to navigate a usable set piece and
[05:05] perform a variety of actions like
[05:07] grabbing a usable prop setting other
[05:08] usable props onto it and walking away
[05:10] with the prop going to and interacting
[05:12] with another usable set piece um then
[05:15] getting up and navigate into a third
[05:16] usable set piece to dispose of the
[05:18] usable prop with all the usable props on
[05:20] it once we get this one test case fully
[05:22] functional we'll be able to apply what
[05:24] we've developed throughout the game the
[05:27] ship animation team has finished the
[05:28] major animation tasks for with Drake
[05:30] cutless black characters can now enter
[05:32] and exit the pilot and co-pilot seats
[05:34] properly for the co-pilot we're
[05:35] utilizing a brand new cockpit template
[05:37] that we're calling the stick template
[05:39] this template positions the player in a
[05:41] pose like that of a helicopter pilot
[05:43] this was required to fit the new
[05:44] geometry of the cutless cockpit we're
[05:46] also planning to support the cockpit
[05:47] experience improvement pass but we'll
[05:49] have more info on that next time on the
[05:52] devop side we added additional logging
[05:54] to better track issues that are
[05:55] wonderful community experiences from
[05:56] time to time the logging we added allows
[05:58] to allows us to to dump the status of
[06:00] the users's download session at the
[06:01] moment they experienced the issue we
[06:03] didn't work directly with the community
[06:04] relations team here in Austin to debug
[06:06] the issue or issues the user is
[06:09] experiencing a great example of this is
[06:11] the latest version of the Patcher
[06:12] Patcher 249 as some of the Windows 10
[06:14] users may have already noticed this
[06:16] version of the Patcher brought back
[06:17] music that had previously been missing
[06:19] the exact cause of the issue was that
[06:20] Windows 10 sound settings were set to
[06:21] 192 khz this was causing the Patcher to
[06:24] crash if you had the music turned on you
[06:26] can now enjoy all of Pedro Kat's music
[06:28] once again the QA Department here in
[06:30] Austin has been heavily focused on 262
[06:32] testing with the addition of multiplayer
[06:34] Mega map and serialized variables we
[06:36] were required to perform multiple cross
[06:38] Studio play tests between Austin and UK
[06:40] we did this to check for any new and
[06:42] unexpected behaviors due to major system
[06:44] changes such as increased de
[06:46] desynchronization lag between clients
[06:49] massive performance changes good or bad
[06:51] and crashes lots and lots of crashes the
[06:53] new Drake Buccaneer came online sooner
[06:55] than expected so the ship team performed
[06:57] frequent testing to ensure the ship was
[06:59] operating as expected when it makes its
[07:01] way into backer's hands in our
[07:03] development stream testing Squad 42
[07:05] testing continues as well as a range of
[07:07] tests with the ground vehicles on
[07:09] planetary surfaces in a multiplayer
[07:11] environment we've also been testing
[07:13] various developmental tools such as the
[07:14] pre procedural Planet editor or planed
[07:17] and the subsumption editor finally we
[07:20] expanded the QA team in Austin by
[07:22] another four testers bringing the Austin
[07:23] QA team to a total of 24 members we're
[07:26] excited about this expansion and excited
[07:27] to have new people on board thank thanks
[07:29] for watching guys and for all your
[07:30] support we'll see you in the
[07:34] verse Oh hello fancy seeing you here
[07:37] this is Ben from turbulent and this is
[07:39] our turbulent update for this month last
[07:41] week we were hosted by our friend Jared
[07:43] Huckabee and the community team for a
[07:44] subscriber town hall now this was our
[07:46] first ever Town Hall we were super
[07:48] excited to get it set up and a bit
[07:49] nervous to participate but you guys sent
[07:52] us awesome questions and we're hoping
[07:53] that we're going to be able to do some
[07:55] more Town Hall questions so that we can
[07:57] address the questions and uh different
[08:00] um things you want to know about
[08:01] spectrum and uh the platform we're
[08:03] building this month we launched Spectrum
[08:05] version 032 which includes Major
[08:08] Performance updates to how we render
[08:10] messages and threads in the client so
[08:12] hopefully this will allow you guys to
[08:14] switch faster between lobbies and
[08:16] channels and should take way less CPU
[08:19] and render time than it used to do in
[08:21] the 031 version so I'm sure hoping that
[08:25] you guys can see the difference already
[08:27] uh 032 also brings two new features uh
[08:30] you can now reorder your communities at
[08:32] the top left of the sidebar all you have
[08:34] to do is you grab your community and and
[08:36] drag it drop it to the location you want
[08:38] to keep it and we persist that across
[08:40] all your browser tabs and sessions and
[08:42] so you can keep your favorite org at the
[08:44] top if that's what you want to do second
[08:46] feature is uh we worked on the channel
[08:48] thread list now when you see the
[08:50] subjects we added thumbnail images to
[08:53] threads that contain media information
[08:55] and videos and so this way we it's way
[08:58] more entertaining to view the channel
[08:59] list because you'll see uh the previews
[09:02] media previews there so then you'll
[09:04] you'll have uh more incentive to click
[09:06] on those subjects and view the media
[09:07] content embedded in it uh otherwise
[09:10] we've also worked on mobile optimization
[09:12] and keyboard fixes unfortunately we're
[09:14] not quite done yet and we're not happy
[09:16] with the fixes so we have to roll them
[09:17] back from 032 we're hoping it's going to
[09:20] be ready for 033 this should fix bugs on
[09:23] mobile Android uh that people have been
[09:26] um encountering when basically typing
[09:28] into uh the CH on mobile Android so
[09:30] we're hoping to fix that
[09:32] soon the future holds good stuff for 033
[09:36] which should come with a new feature
[09:37] again for forums uh called nested
[09:40] threads and so uh nested threads will
[09:42] allow you to create a new thread and
[09:44] change the discussion type from a
[09:46] classic chronological timeline thread
[09:49] into a nested discussion now this gives
[09:51] us two benefits uh first uh we can now
[09:55] sort by upvotes the replies at the first
[09:58] level and get a the reply tree behind it
[10:01] uh but the second thing is that we give
[10:02] you guys more control into the type of
[10:04] discussion that you want to start so the
[10:06] op Creator will have the option of
[10:08] choosing whether it's a nested thread uh
[10:10] or not and so as we add all these
[10:13] features into the next releases of
[10:14] spectrum we're getting ready to be able
[10:16] to shut down and archive the old fors
[10:18] one of the first we cannot do that until
[10:20] we've expanded our categories list to
[10:22] bring all those discussions from the old
[10:24] forums in we're not talking about an
[10:25] import but at this point we're talking
[10:27] about recreating the subcategories that
[10:30] you guys enjoyed on the old Forum inside
[10:32] uh the the new system so we're talking
[10:35] about shipyards ship owner threads and
[10:37] stuff like this uh so as soon as we're
[10:39] able to do that we'll be able to
[10:40] announce a date at which the old forums
[10:42] will go into archive mode uh but we'll
[10:44] give you guys plenty of notice before we
[10:45] do that this month we also worked on the
[10:49] uh new Delta Patcher as you guys have
[10:51] called it and so we are responsible for
[10:53] building the actual application that
[10:54] hosts the patching libraries and so
[10:56] we've done a bunch of progress this
[10:58] month in getting this new application
[11:00] set up it's using a whole new
[11:01] application stack uh you guys might be
[11:04] familiar with it's called electron uh
[11:06] electron shell we're also using react
[11:07] and Redux like we do for spectrum within
[11:09] this new application and so we've worked
[11:11] on our native bindings to get the
[11:13] patching libraries that the Frankfurt
[11:14] guys are working on and so we're
[11:16] currently able to patch the game data uh
[11:19] with this new uh launcher it's also used
[11:21] internally so we're really excited about
[11:23] this project this going to bring a lot
[11:24] more dynamism in how we release patches
[11:26] and so we're really excited to get this
[11:28] moving and integrated into this new app
[11:31] uh and hopefully we'll be able to
[11:32] release that to you guys in the next
[11:34] coming
[11:35] months another major project we started
[11:38] this month is a a redesign of some of
[11:40] the elements of the RSI site we're
[11:42] trying to this is a massive overhaul of
[11:44] the website and uh how it caters to new
[11:47] users and older users and so as we start
[11:50] this design process we'll be starting to
[11:52] give you guys some updates on what we're
[11:54] doing on that front and how that shapes
[11:55] up but we're only getting started right
[11:57] now one important project that we're
[11:59] also working on that has done a lot of
[12:01] uh has been seen a lot of progress this
[12:03] month is the ship stats updates and so
[12:05] we know that the ship stats uh don't
[12:08] currently reflect what's exactly in game
[12:11] now I want to mention again that the
[12:12] ship stats are supposed to reflect the
[12:14] intent design of a ship and not
[12:16] necessarily the exact stats that are
[12:18] currently in game uh but at the same
[12:20] time currently there are things that are
[12:22] missing and so we're working on to put
[12:24] that up to date we got all the
[12:25] information to do so and so now we're
[12:26] working on changing how the backend uh
[12:29] man manages this and redesigning some of
[12:31] the tech View and Tech specifications
[12:33] View and Hollow view are changes to be
[12:35] able to display that and so we're hoping
[12:37] that we'll be able to go through all of
[12:38] the current loadouts um in the next
[12:41] coming weeks to be able to show you guys
[12:42] an update there that's it for tribun
[12:45] thank you guys for
[12:47] watching thanks guys the ship animation
[12:49] team did a fantastic job on the redesign
[12:51] cutless black and with the buccaneer
[12:53] flight ready we're proud to announce
[12:54] that the entire Drake lineup is all in
[12:57] engine which is a pretty big achievement
[12:58] yeah and they're also all on sale now
[13:01] you can get the buccaneer dragonfly
[13:03] Harold caterpillar and cutless until
[13:05] April 10th yeah so the sale includes all
[13:07] three models of the cutless including
[13:09] the updated cutless black people often
[13:11] question the business ethics of Drake
[13:13] interplanetary so we decided to dig in a
[13:15] little deeper into what Drake's been up
[13:17] to take a
[13:23] look 70 years ago Drake interplanetary
[13:26] built the cutless in a gamble to win a
[13:28] military
[13:30] bid but the military didn't bite Drake
[13:33] interplanetary wasn't deterred however
[13:35] the company retrofitted the cutless for
[13:37] civilian use when we first rolled out a
[13:40] flyable model of the cutless to the
[13:43] public it kind of drifted from our own
[13:45] expectations and from our own intent um
[13:49] it lost some of the aggressive
[13:51] characteristics that we had had sold it
[13:54] on when we first unveiled it and that
[13:57] was one of the biggest things we wanted
[13:58] to rec capture in the rework we wanted
[14:01] to make it feel like look and feel like
[14:06] the the ship we had originally promised
[14:08] to people um but to really pull that off
[14:13] we did have to make some changes and
[14:16] split off a few pieces of functionality
[14:19] but then what that left us with was a
[14:22] lot more room to really build on the uh
[14:27] rating support potential
[14:29] of the Drake cutless where now this can
[14:32] be that backbone of a small militia unit
[14:36] of a small just defense
[14:38] group the first iteration of the cutless
[14:42] uh wasn't very
[14:44] ergonomical for the pilot or the
[14:47] co-pilot um we had we had many
[14:50] complaints from uh the customers saying
[14:54] uh it's hard to get in and out and you
[14:56] know people stepping on other people's
[14:58] toes so uh we went with a with a better
[15:01] design on this one uh we have the pilot
[15:04] and co-pilot being able to enter an exit
[15:07] from either side of their seat stations
[15:10] with neither the pilot nor a co-pilot
[15:13] getting in the way of each other on
[15:15] enter or exit uh for much uh faster
[15:19] mounting
[15:21] dismounting uh the living quarters have
[15:24] also been uh retrofitted to be a little
[15:27] bit more spacious
[15:29] the armaments have been upgraded we have
[15:33] uh more space for uh armored equipment
[15:38] uh as well as bunk racks the main living
[15:40] quarters as well as access to the uh the
[15:43] guns main weapon system uh located in
[15:46] living quarters instead of uh the
[15:48] rear it's it's going to be a very potent
[15:53] threat to come across
[15:56] for you know midsize ships and up
[15:59] because it's going to carry a lot of
[16:01] missile Firepower uh We've added more
[16:04] guns to the ship uh just it's General
[16:07] armor and durability can now really sell
[16:10] through both in its appearance and its
[16:12] performance we didn't skimp out on what
[16:14] it can do uh we made sure you can you
[16:17] can haul your cargo you can haul your
[16:19] friends uh you can blow up a ship if
[16:22] it's trying to take you down some people
[16:25] uh decide to use our ship to take other
[16:27] people down I guess the the travel
[16:29] safety advisory system estimates that
[16:31] 15,000 people die annually in Outlaw
[16:34] raids and the cutless black accounts for
[16:37] 2third of All Ships used by known piracy
[16:40] groups people have often questioned
[16:42] Drake interplanetary role in these raids
[16:45] is the company intentionally marketing
[16:47] their inexpensive but deadly cutless
[16:50] black to criminals we decided to find
[16:52] out posing as an applicant for their
[16:55] sales department one of our reporters
[16:57] traveled to the Magnus system and sat
[16:59] down with Drake interplanetary
[17:01] longstanding CEO Jan dredge she didn't
[17:04] know she was being
[17:06] recorded your resume is quite impressive
[17:09] as you probably assumed this last
[17:11] interview is really more of a formality
[17:13] can I ask a question ask away unless
[17:16] they're salary related that goes through
[17:17] HR of course of course I I am curious
[17:20] about the cutless black have you
[17:22] considered including mandatory
[17:23] background checks for buyers you know to
[17:26] avoid selling to criminals listen what
[17:28] happens after a cutless leaves the
[17:29] showroom isn't my problem when there's a
[17:32] murder do you blame the killer or the
[17:33] person who manufactured the gun after
[17:36] this audio was released family members
[17:38] of piracy victims expressed their
[17:40] outrage by calling for a ban on the
[17:42] Drake cutless today Drake interplanetary
[17:45] responded with a press
[17:47] statement we apologize for the comments
[17:50] made by Jan dredge after many years of
[17:53] devoted service Miss dren has decided to
[17:55] retire as CEO of Dr in a planetary and
[17:58] spend more time with her family while
[18:01] she would continue to remain on the
[18:02] board Miss dredge will no longer be
[18:04] involved in Daily Business operations
[18:07] her son John dredge will fulfill her
[18:10] duties as acting CEO until a replacement
[18:13] can be found Drake interplanetary is
[18:16] committed to the safety of all citizens
[18:18] and civilians our cutless blue and
[18:21] cutless red models are specifically
[18:23] designed for use by police and First
[18:26] Responders they continue to save count
[18:29] lives across the
[18:30] universe the terror Gazette has
[18:33] confirmed that jant tre's so-called
[18:35] retirement goes into effect today
[18:38] however Drake interplanetary refuses to
[18:41] comment on whether they will continue to
[18:42] sell the cutless black to known piracy
[18:48] groups it's really great when ships can
[18:50] be as varied as our characters yeah
[18:52] absolutely and people maybe know the
[18:54] cutless as an outlaw ship but uh that's
[18:56] just one way it can be used yeah totally
[18:58] abs absolutely just one way I mean you
[19:01] know the cutless can do many other
[19:02] things from search and rescue to militia
[19:05] cargo transport it's really up to how
[19:07] the owner chooses to fly it yeah nothing
[19:10] wrong with that no not at all of course
[19:12] the only thing better than a great ship
[19:13] is really having great places to fly it
[19:15] to yeah that's right and as star and
[19:17] grows and the procedural planets to
[19:19] continue to develop we've started
[19:20] looking at ways to populate the amazing
[19:22] Vistas with various points of interest
[19:24] you can travel to uh so one of the cases
[19:26] is um the planetary Outpost that we been
[19:29] giving you some sneak peeks up and we're
[19:30] going to dive a little deeper into that
[19:31] now so take a
[19:33] look hello my name is Ian leand I'm the
[19:36] environment art director at fandry
[19:38] 42 uh today it'd be really interesting
[19:41] to talk a little bit about surface
[19:42] outposts so I think people have seen a
[19:45] few of these before we've shown some
[19:47] little videos here and there and uh when
[19:49] the communities come around the studio
[19:51] they've had a little sneak peak but this
[19:53] is the first real opportunity to really
[19:56] show what it's about and more
[19:58] importantly the team involved in making
[20:00] it so my name is Eddie hilditch I am the
[20:02] senior environment art lead my name is
[20:05] Alex ratti and I'm a senior technical
[20:08] artist working on the uh procedural
[20:12] aspect of our system hi my name is Nick
[20:15] e and I'm a lead artist on um for the Pu
[20:18] team for environments so the initial
[20:20] idea came from design design needed a
[20:22] place to bring the player to the
[20:25] smallest possible location so we have
[20:27] cities bace stations but one thing we
[20:30] never really had is these smallest
[20:32] locations so that was the initial idea
[20:34] from design of what a surface Outpost
[20:36] would be so we went away and we started
[20:39] looking at concepts for what they might
[20:41] look like in our universe so we knew we
[20:44] wanted to integrate them quite well with
[20:46] the environment so we wanted a design
[20:49] that felt durable robust and felt like
[20:51] it could survive a few harsh Winters so
[20:54] from there we started some moats just to
[20:56] see and explore what might work
[20:59] right and then once we had some nice
[21:01] ideas we got it validated make sure it
[21:03] worked for Chris and the design director
[21:05] and then we started taking it into
[21:07] production so from there you know one of
[21:10] the things we knew we wanted to do like
[21:12] these were going to be modular we didn't
[21:14] want just one hero location so the
[21:17] visual style uh and elements needed to
[21:21] support a modular format so during the
[21:24] idation process and concepting we needed
[21:27] to make sure we had had elements that we
[21:31] could you know break up the visual
[21:33] language break up that fatigue and
[21:35] enable designed to create some
[21:37] interesting layouts which still felt
[21:40] quite interesting to look at so we build
[21:42] all our environments modularly um we
[21:45] have to build them in that way to
[21:47] incorporate the sort of vast number of
[21:49] environments we need across our universe
[21:51] um so once the concept has been signed
[21:53] off from me in we will start breaking
[21:57] that concept down into its con tient
[21:59] Parts um in order to figure out how many
[22:02] pieces we need to begin the process of
[22:04] making the brand new building set which
[22:06] is going to be a high-tech surface
[22:08] Outpost we took the uh concept and we we
[22:12] made The Outpost uh concept using the
[22:15] template set which is a a set we use to
[22:19] white box all of our our levels because
[22:21] it's a basic set it's to metrics it's
[22:23] got a simple material on it and it's
[22:26] good for artists and designers and
[22:27] engineers just to block out areas and
[22:30] and test with so we took that we
[22:32] modified it slightly and started
[22:35] creating the uh Outpost layout that we
[22:38] had from
[22:39] concept uh then we added the uh we white
[22:42] boxed add-on pieces like the roof pieces
[22:45] antennas pipes to get that extra
[22:47] silhouette read from a distance uh mid
[22:49] and far distances the biggest challenge
[22:51] is probably uh making sure that it's all
[22:53] modular and fits together cuz the whole
[22:56] point of it being modular is it gives
[22:57] the artist the flexibility of of of many
[23:00] different layouts of of of swapping
[23:03] pieces round and adding a bit of
[23:05] variation and detail so from its
[23:08] foundation it had to be uh very modular
[23:11] uh work together to metrics uh and have
[23:15] approval from design too so the key
[23:17] things at the uh gray box stage are
[23:19] making sure that the assets are in line
[23:22] with the art style that the material
[23:23] breakups correct the forms are correct
[23:26] and it's still modular from from what we
[23:29] were doing with white box that design of
[23:31] play tested it and it works for their
[23:32] gameplay requirements and that any major
[23:35] performance issues are looked at as well
[23:38] often the gray box is modeled to a high
[23:42] level of detail than the final the
[23:44] actual final asset and this is because
[23:47] the all the ideas and forms and details
[23:50] get shaped out of this phase and these
[23:53] will sometimes get baked later on down
[23:55] to a texture so often the gray box is
[23:58] actually
[23:59] uh a lot more expensive than the final
[24:01] form so when the assets go into final
[24:04] production there at this point we we
[24:07] flesh out the material Library so the
[24:09] material Library will consist of simple
[24:12] tilable uh materials uh with wear and
[24:15] dirt such as simple Metals Plastics to
[24:18] more complex panels to uh very detailed
[24:23] gble sheets trim sheets and graphical
[24:26] decals uh and illumination sheets for
[24:28] lighting we need to make make sure the
[24:30] materials work together that they're all
[24:33] conforming to the correct PBR
[24:35] workflow and at that point then we go
[24:38] into the final production and apply
[24:40] those materials and flesh out the final
[24:42] assets once we started to test our
[24:45] outposts on the actual surfaces of the
[24:47] planet we soon realized that a perfectly
[24:49] flat base was just not going to work it
[24:52] was going to limit where we were able to
[24:53] place them planets don't tend to be
[24:55] perfectly even you know um everywhere we
[24:58] place them we'd end up with a corner
[25:00] clipping through the ground or a corner
[25:02] floating above the ground so we had to
[25:04] go back to the drawing board and kind of
[25:05] incorporate a system of legs and feet um
[25:09] which ultimately allowed us to place
[25:11] them in much more varied places on the
[25:14] surface of a planet um then we obviously
[25:16] had to get the player from the surface
[25:18] of the planet up to the door of the
[25:20] Outpost um we thought a ramp would kind
[25:23] of look really cool um visually so we
[25:27] started implementing those but after
[25:29] talking with design we realized our ramp
[25:31] metrics from them was 15° which is
[25:34] actually very shallow for a ramp and we
[25:36] ended up with um Outpost that kind of
[25:38] looked like a Miami beach house or
[25:40] something because even if the Outpost
[25:43] was only 3 m off the ground we had to
[25:45] have an 11 M long ramp to sort of coope
[25:47] with it um and they kind of look
[25:49] ridiculous so we went back to the
[25:51] drawing board we thought uh switch back
[25:53] ramps maybe or some kind of complicated
[25:56] elevator system with is but ultimately
[26:01] simplest um Solutions are often the best
[26:04] um and we ended up with stairs very
[26:07] high-tech but stairs actually turned out
[26:09] to just serve the purpose that we needed
[26:11] them to once all the final assets were
[26:13] made uh we basically grouped them
[26:16] together into prefabs which are like
[26:18] smart groups and
[26:20] um brought them in so there's walls
[26:23] there's rooms there's doorways and
[26:25] airlocks and and uh the stair piece so
[26:28] uh it's very easy now to make uh a whole
[26:31] different layouts of The Outpost instead
[26:33] of having to bring each individual asset
[26:36] and each light in each Vis area they're
[26:39] all preab up so you drop a room in then
[26:41] you drop some walls in and it's it's
[26:43] done uh and it and it allows for more um
[26:48] more time working on the actual assets
[26:50] than than well building um we have the
[26:52] ability to recreate the concept pretty
[26:54] much one to one which is great but what
[26:57] we also have on top of of that thanks to
[26:59] the modularity of it is the ability to
[27:01] create a vast number of variety of
[27:05] layouts um and we can basically make as
[27:08] many kinds of layouts within the same
[27:11] sort of theme and style as we want and
[27:14] as we develop the building set more and
[27:16] it matures and we add extra pieces that
[27:19] variety and the number of potential
[27:21] layouts we can create basically
[27:23] exponentially increases what comes down
[27:26] the line later is how to add more
[27:28] variety like we can't have just white
[27:31] outposts every time you see an outpost
[27:33] it's not going to be the same Outpost
[27:35] it's going to change layouts it's going
[27:37] to change uh materials it's going to
[27:40] change what add-ons get added to it that
[27:42] all comes later what we have here is a
[27:45] proof of concept and a final asset in
[27:49] its simplest form but with the ability
[27:51] to expand massively on it as we sort of
[27:54] move along with it development yeah so
[27:56] after the environment team has been
[27:58] production for a certain period of time
[28:00] that's when I'll start looking back into
[28:02] it with it again we can visually see how
[28:04] the ideas progressed and we getting some
[28:06] good ideas but this is where I start
[28:09] introducing visual targets for the guys
[28:11] to work to
[28:13] and from the process of going from the
[28:16] initial idea to it going through inter
[28:19] production you know obviously the team
[28:21] has made additional design choices and
[28:24] visual choices to improve the design but
[28:26] then this is a good time to just take
[28:28] another look at it and seeing how it's
[28:31] working so initially when I was looking
[28:33] at it this time I saw the real
[28:35] importance of how we're going to
[28:36] integrate these things so it's not only
[28:38] good to have beautiful architecture you
[28:41] need that believability of understanding
[28:45] actually this thing has been here for
[28:47] many years and how does that feel so
[28:50] what I did and did some visual targets
[28:52] for the team looking at things like
[28:54] materials lighting particles just to
[28:57] kind of describe that M frame so working
[29:00] with what they'd already produced and
[29:02] the visual targets that was perfect for
[29:04] the team to kind of take it onto the
[29:06] final art stage of production when when
[29:09] I received these uh visual Target the
[29:12] first thing I tried to understand is how
[29:15] those uh uh elements have been built how
[29:18] are the modules been uh divided and then
[29:24] try to build uh less granular
[29:28] of uh of those model pieces uh for
[29:32] example a room uh or a wall to cap a
[29:37] side of a room is uh what we call
[29:41] prefabs so they are kind of Lego
[29:44] pieces uh when uh when we have defined
[29:47] these kind of rules within our small R&D
[29:52] team we start building uh connection
[29:55] points and tag points to help us stitch
[29:59] together those pieces we Define uh
[30:02] design rules and uh uh layout parts to
[30:08] make sure that the generation of this
[30:11] layout is uh
[30:13] controlled is based on a clear aspect
[30:17] visual aspect and on a clear design on a
[30:19] clear cap of size and
[30:24] uh when when we have all these rules we
[30:27] start trying out and iterate on the
[30:30] process of uh giving a feedback to
[30:33] artists for having a different
[30:36] variations or having a new rule set to
[30:40] to stitch the things together in a
[30:42] different way once the goal uh is
[30:45] reached what we want to do with these uh
[30:49] uh elements with these Outpost is to uh
[30:53] uh create as more variations as we can
[30:56] and then
[30:58] create a lot of uh uh perceived
[31:01] variation for the player so that when we
[31:04] uh scatter them on on a planet the
[31:06] player can play and can uh see a lot of
[31:10] uh uh a lot of different location a lot
[31:14] of different sizes a lot of different uh
[31:17] uh Vistas at that moment comes a second
[31:20] uh aspect of the
[31:23] procedural uh variation which is placing
[31:26] them on a planet also in this case what
[31:29] we have is uh our principal artist and
[31:33] our art Direction working on uh giving a
[31:37] visual Target of how they want the uh
[31:40] Outpost to look when they are placed on
[31:43] planetary surfaces so we have a lot of
[31:47] things like lightning the planetary
[31:50] materials uh the weather system the the
[31:53] Aging of the output coming in as
[31:56] variables to set some def fults on The
[31:59] Outpost we have the surface itself that
[32:02] could be very even or uneven and we need
[32:05] to make sure that the Outpost is
[32:07] correctly placed this has been one of
[32:10] the biggest challenge we still tackling
[32:13] which is how we can find a correct
[32:16] Place uh on the planetary surface to
[32:19] guest our Outpost so sometimes we have a
[32:22] fit system adapting which is one of the
[32:25] first solution but we also have a better
[32:28] shading system to integrate the feet on
[32:31] it or we have a Terrain system trying to
[32:35] adapt and trying to give more a more
[32:38] clear and more uh uh even uh place for
[32:42] the player also to be able to enter into
[32:46] the Outpost we we Face problems with uh
[32:49] with the the access to the these
[32:52] Outpost and we have tried to find Visual
[32:55] and Technical Solutions for this
[32:58] uh the the planet editor is one of the
[33:01] tools we're using for placing them is
[33:04] trying to find the correct uh uh average
[33:09] distance of this kind of uh Outpost
[33:12] finding a correct spot on the planet and
[33:16] then giving to the uh designers a way to
[33:21] uh modify these settlements because
[33:23] together with the Outpost we will get
[33:25] some visual addons which are just very
[33:28] nice elements that will give variation
[33:31] to these uh groups with to these Outpost
[33:34] and also some Design Elements uh for
[33:36] example a Loot Crate could be a design
[33:38] element that needs to go together with
[33:41] the outputs to give the game play uh
[33:44] these elements get also uh variated by
[33:47] the planet editor by accessing some uh
[33:51] defaults or some uh uh design changes
[33:55] through time and through missions which
[33:57] is is uh What uh uh we were mentioning
[34:01] before like changing in runtime the
[34:04] values of the wear and dirt system that
[34:07] could give uh if the planet is Sandy
[34:10] could give a a varying amount of sand on
[34:14] the surface of of The Outpost we're
[34:16] looking into uh more aspects uh for
[34:20] interior and exteriors to be different
[34:22] so the interior could have rust and dust
[34:25] and the exteriors could have the planet
[34:27] affecting it with the mud or or or the
[34:31] sand as we said uh we're looking into
[34:34] other variations as well uh interior
[34:37] dressing with props uh there will be
[34:39] probably a sneak peek on it it's
[34:42] actually all the things you see from my
[34:44] side they're still in R&D they're
[34:46] clearly in a uh white box phase because
[34:50] the visual Target we're trying to reach
[34:51] is very very high I'm confident that
[34:54] what we have reached is very good but
[34:56] it's actually considered great box on
[34:58] this title which is incredible so
[35:00] hopefully you guys have enjoyed the
[35:02] piece it gives you a good idea of where
[35:03] we're up to right now with the surface
[35:05] outposts and giving a little
[35:07] introduction to some of the team members
[35:09] that's going into making
[35:11] them you know sometimes the simplest
[35:14] solution is the best solution like the
[35:16] stairs on The Outpost yep but like we
[35:19] saw it takes a little trial and error to
[35:21] find the uh the easy solution although a
[35:24] little little Tri a little trial ER yeah
[35:26] yeah well that's it for this week ATV
[35:28] but before we go I want to thank all of
[35:30] our backers you are the reason star
[35:32] citizens development is possible yes and
[35:34] a big thank you to all our subscribers
[35:36] your contributions help us produce all
[35:38] this great content and to show our
[35:40] gratitude we're giving a big Benny's
[35:42] vending machine to all active
[35:43] subscribers if you've been wanting to
[35:45] join our subscriber program sign up
[35:48] before April 17th to get this great
[35:50] piece of flare there's a link in the
[35:51] description with more info and uh in
[35:54] addition to the Big Bend bending machine
[35:56] uh subscribers will will also receive
[35:58] another piece of flare next week as part
[36:00] of their rewards also next week we'll be
[36:03] announcing our revamp the revamp to our
[36:05] referral program yep all right lots of
[36:07] stuff going on yeah and tomorrow check
[36:09] out star citizens happy hour at noon
[36:11] Pacific Community manager Jared Huckaby
[36:13] will be interviewing members of the LA
[36:15] ship Tech Team on everything that goes
[36:16] into making spaceships for the
[36:19] bdss and I think that's about it so
[36:21] thank you so much for watching and we'll
[36:23] see you around the ver
[36:33] [Music]
[36:52] thank you for watching so if you want to
[36:54] keep it with the latest and greatest and
[36:55] staff citizen of Squadron 42 of alment
[36:57] please follow us on our social media
[36:59] channels see you soon
[37:07] [Music]

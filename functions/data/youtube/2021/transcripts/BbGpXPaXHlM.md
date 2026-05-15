# Star Citizen Live: Radar and Scanning

**Video:** https://www.youtube.com/watch?v=BbGpXPaXHlM
**Date:** 2021-05-07
**Duration:** 58:51

## Transcript

[00:03] hello everybody
[00:04] welcome to another episode of star
[00:06] citizen live
[00:07] uh radar and scanning q a i'm your host
[00:09] jared huckabee
[00:10] and if you've never seen star citizen
[00:12] live before somebody has in every show
[00:14] somebody's first show
[00:15] is where we take about an hour out of
[00:17] the end of our week and we chat with
[00:19] some of our developers
[00:20] about a topic that's usually currently
[00:22] in development
[00:23] now if you watched last night's uh uh
[00:26] semi late kind of very late episode of
[00:30] inside star citizen
[00:31] uh we introduced some of the changes
[00:34] that are upcoming to the
[00:35] radar scanning and ping systems we
[00:38] thought we'd follow that up today with a
[00:40] more in-depth conversation with two
[00:42] members of our vehicle tech team so
[00:44] let's introduce them now
[00:46] we've got sean tracy and mark aban how
[00:48] you guys doing
[00:51] good good got coffee ready to roll
[00:55] yeah so uh every show is somebody's
[00:58] first show i know you guys have been on
[00:59] these things forever and ever and ever
[01:01] but let's take a minute
[01:02] introduce yourselves tell people who you
[01:04] are what you do for starter citizen mark
[01:05] we'll start with you
[01:07] sure i'm mark abend i'm one of the
[01:10] league gameplay programmers at the
[01:12] la studio and i primarily focus
[01:15] on ship technology and ship gameplay
[01:17] stuff
[01:18] i work on ships nothing but ships and
[01:20] all the ships
[01:22] and do you still bug smash i bug smash
[01:25] all day every day
[01:28] i just don't do it with videos anymore
[01:30] it took a lot in my head
[01:32] i'm playing it like when you work do you
[01:35] still do the narration just to yourself
[01:36] while you work
[01:37] yeah sometimes i do it in meetings and
[01:39] sean has to tell me to be quiet
[01:42] sean that never happens
[01:46] sean who tells uh mark aidman to be
[01:47] quiet who are you and what else do you
[01:49] do
[01:49] right um so sean tracy i'm the tech
[01:52] director of content at cloud imperium
[01:54] games
[01:54] uh fancy title that really just covers
[01:56] three different jobs one of the one of
[01:58] the big ones and the reason i'm here is
[02:00] uh
[02:01] directing alongside john crew rich tyra
[02:04] the
[02:04] vehicle and actor pillars so that's
[02:08] where you know vehicle tech team is part
[02:09] of uh and because it's over in the la
[02:11] time zone uh you know i'm pretty
[02:12] one-to-one with uh with mark day-to-day
[02:14] as we go
[02:15] uh then on top of that is the tech art
[02:17] and tech animation directorship as a
[02:19] department
[02:19] and then is the game direction for
[02:21] theaters war arena expander and all that
[02:23] kind of stuff
[02:24] so just a couple things and just a few a
[02:27] few
[02:27] all right so today's show is about radar
[02:30] and scanning
[02:31] again we had a short little primer in
[02:33] isc yesterday if you
[02:34] haven't seen it you know be sure to
[02:36] check that out uh we're gonna cover
[02:38] a little bit about what we discussed
[02:41] yesterday
[02:41] and then go into more detail let's start
[02:44] things off with a basic explanation for
[02:47] for folks here
[02:48] um what is radar ping
[02:52] scanning what what are the what do they
[02:54] do how are they different from another
[02:56] why do we need all three
[02:58] uh help us to understand what it is that
[03:00] we're talking about today
[03:02] sure um sean did you want me get this or
[03:05] you got it
[03:06] no go ahead okay great cool uh so
[03:09] um radar ping and scan are kind of like
[03:12] um
[03:13] bundled together but they're kind of
[03:15] different concepts
[03:16] we think of radar as what you currently
[03:19] see
[03:20] um within your range it's your passive
[03:23] contacts you know you're flying around
[03:25] and you see a ship or you're flying
[03:27] around you see a station and
[03:28] there's information you see it's
[03:31] appearing you see
[03:32] the ui indicating that the thing's there
[03:35] whereas
[03:36] ping is more of i can't see something
[03:40] i'll ping out and maybe uncover stuff
[03:43] now
[03:44] that could either be something very very
[03:46] far away or something's
[03:48] heavily influenced by an ambient
[03:50] signature so you can't quite see it
[03:52] without
[03:53] a little bit of help the only downside
[03:55] of
[03:56] doing that kind of burst to kind of
[03:58] seymour is you kind of reveal that you
[04:00] have done it
[04:01] so if i were to ping out and go find
[04:03] sean sean would know that i pinged
[04:05] but now i can maybe see sean and then
[04:08] scanning is more of
[04:10] what information could i get about that
[04:12] contact
[04:13] so a common flow is i could ping out
[04:17] i find um some like little blobs
[04:22] and maybe i could scan it and cover that
[04:24] oh there's something interesting that i
[04:26] want to
[04:26] go into that blob so i get closer and it
[04:29] appears as a contact
[04:31] and i re maybe multiple contacts and i
[04:34] could scan those to get
[04:35] other information so it's a way of
[04:37] expressing
[04:38] in the the world what's happening and
[04:40] maybe show some interest
[04:42] that may want the player to go toward
[04:44] that direction or avoid that direction
[04:46] all right now the vehicle tech team
[04:50] works on like these core features the
[04:53] the these broad scopes these sets of
[04:56] tools that then
[04:57] you know other designers and stuff will
[04:59] go in and then choose from pick from
[05:01] play from
[05:02] when they're developing their ships i
[05:04] bring this up because as usual we put a
[05:06] thread up on spectrum where we collect
[05:07] questions ahead of time
[05:08] and we'll be collecting questions from
[05:10] the live chat here today uh
[05:12] questions about specific ships are
[05:15] generally the purview of
[05:16] ship designers and the specific ship
[05:19] teams
[05:20] you guys create the radar and scanning
[05:22] toolbox
[05:24] that they then pick from choose from and
[05:26] they choose
[05:27] this ship is going to be this good at
[05:29] this this ship is going to be
[05:30] you know this bad at this so questions
[05:32] about specific
[05:33] vehicles or spacecraft is basically not
[05:36] the domain of your
[05:38] team so i wanted to get that out there
[05:40] because there were a lot of questions
[05:42] that's correct well this should do this
[05:43] and well this one you can make all the
[05:44] answers you want they just won't be
[05:46] accurate yeah um yeah so you you know
[05:48] that there
[05:49] you know a little detail within there
[05:51] too is that you know the vehicle tech
[05:52] team wasn't always the vehicle tech team
[05:54] that that only really happened last year
[05:56] um yeah last year or so and actually
[05:59] uh scanning and radar was one of the
[06:01] last um
[06:03] features and it gets developed like a
[06:05] feature and this is just something
[06:06] internal production he was
[06:08] uh that we deal with now the the
[06:09] intention of the vehicle tech team is
[06:11] that yes it's exactly as you described
[06:13] which is
[06:14] we're working on systems rolling out
[06:15] systems to content teams design teams
[06:17] whatever that is
[06:18] um but this one so happens to be an
[06:20] all-encompass
[06:21] feature it's not about marking up every
[06:23] single one of the ships or marking up
[06:25] the entirety of the levels or or the um
[06:27] or the space stations or however else um
[06:30] it is still about bringing the system
[06:31] but
[06:32] it is one of the the last anyways uh you
[06:35] know
[06:35] we would call it like a tier one feature
[06:37] like a tier one team running it through
[06:38] like a feature team
[06:40] um just because it is a lot of work when
[06:42] it is because mark has to not only be a
[06:43] lead programmer he has to
[06:44] be a product owner at the same time he's
[06:46] got to chase around a whole bunch of
[06:47] different teams so
[06:48] that's just the evolution of vehicle
[06:50] tech team and not to despair
[06:52] while today's show is about all
[06:55] ship scanning and all ship radar in
[06:57] general
[06:58] we do have a show specifically about the
[07:01] ships
[07:02] themselves coming up as part of flea
[07:04] week and that's just in like
[07:05] two or three weeks i'm not a calendar so
[07:08] it's coming up soon so so save your
[07:10] questions about specific ships
[07:12] uh we got that show coming in a couple
[07:14] weeks but this show is all about the
[07:16] broad existence of radar and scanning
[07:19] what our plans are for the future
[07:21] so let's go straight to the thread here
[07:24] we
[07:25] allowed people to submit questions and
[07:26] then vote up which ones they wanted to
[07:28] see answered most
[07:30] there's been a lot of talk about how
[07:32] we're unifying
[07:34] the the the the radar the scanning some
[07:37] aspects of it between ships and
[07:38] fps uh when we are on foot will we get
[07:42] the radar data from our nearby ships
[07:45] pushed to our individual fps huds
[07:48] so that's probably a two-parter question
[07:52] first part i'm just going to iterate
[07:54] more on the
[07:55] radar technology so when vtt took
[07:59] this on we did have a lot of radar
[08:02] and scanning functionality and even ping
[08:05] but it was
[08:06] a lot of systems that kind of built up
[08:08] from different designers and different
[08:09] features
[08:10] and when we took this on we wanted to
[08:13] unify it
[08:14] across the entire game so it could be
[08:16] used anywhere by any designer
[08:18] to facilitate different those original
[08:21] mechanics
[08:22] passive it's on your radar ping you go
[08:24] out and find it and scan you get
[08:25] information
[08:26] whether that's a mission whether that's
[08:28] on foot or whether that's
[08:30] on a spaceship or even on both so
[08:34] because of that star citizen you are not
[08:36] just a spaceship
[08:37] you are a person and you have a group of
[08:40] people
[08:41] and in the document for our radar
[08:44] scanning we do facilitate
[08:45] how and why we want to share information
[08:50] now the technology to do that is there
[08:53] but it's not available yet for this
[08:55] current
[08:56] iteration the primary focus is
[08:59] for this upcoming patch will be for
[09:01] ships because
[09:02] we're going to iterate on developing
[09:04] this tech basically replace the old
[09:06] system with the new one
[09:08] and then add on extra features
[09:09] throughout patches
[09:11] so this tech will allow us to put it on
[09:15] to other things like players and on
[09:17] ships but the current one will not be
[09:19] exposed to players into an up and coming
[09:21] patch
[09:23] and one of those primary things is how
[09:25] do we get that information
[09:28] from a player on foot to a ship or vice
[09:31] versa
[09:32] now going back to radar ping and scan
[09:36] radar again is what's on your you know
[09:39] what's near you and what information we
[09:41] could
[09:41] perceive as the the person playing now
[09:44] if i'm on a ship
[09:46] i'm actually going to see different
[09:47] signatures even different contacts
[09:49] because it's based on the ship radar
[09:51] you know if i have a small little radar
[09:53] i might see certain
[09:54] like i'll go with the prospector it's
[09:56] made for finding mining things
[09:59] so if i get on foot my
[10:02] fps radar might depending upon my
[10:05] customized
[10:06] loadout might see different things what
[10:08] my ship was seeing
[10:10] so it also depends on what the player
[10:13] has his loadouts on both the ship
[10:14] and on foot are that determine what he
[10:17] sees from his radar and ping
[10:19] now if you do line up both of them then
[10:22] you'll probably see
[10:23] similar information but again your ship
[10:26] is going to have a much more powerful
[10:28] system than one that's on foot
[10:30] you know your ship might be able to see
[10:31] something far away on the planet but you
[10:33] go on foot you're not going to see it
[10:35] i mean unless you have some nuclear
[10:37] power plant i don't think your radar
[10:38] will be able to see things
[10:40] so that far away now your scan
[10:43] information
[10:45] that is something we're looking at on
[10:46] how to send an information to and from
[10:49] the player
[10:50] because that is something you can
[10:53] transfer reliably because your scanner
[10:56] is meant to
[10:56] just technically you could have
[10:58] different things determine what you're
[11:00] you know if i have a medical scanner and
[11:02] i have a mining scanner they'll uncover
[11:04] different things but where we
[11:06] store it is something that the player
[11:08] could look at
[11:09] at any point in time once we unlock that
[11:11] information through a ui
[11:13] so radar-wise it depends on your loadout
[11:17] scanning wise depends on your loadout
[11:20] but what information you uncover from
[11:21] your scanner
[11:23] in a later upcoming patch you'll be able
[11:25] to access that
[11:27] either on foot or on the ground
[11:29] hopefully that
[11:30] answers that question in a bigger way
[11:34] yeah there's and one other point to it
[11:36] and it's a little higher level it's just
[11:38] um when we when we re invigorated the
[11:41] tasks around
[11:42] scanning and getting that wrapped up and
[11:44] and completely done
[11:45] as well as squadron requirements uh one
[11:47] of the big parts and
[11:48] and again one of the big benefits to be
[11:49] able to direct the two different pillars
[11:52] the vehicle and and the actors is that
[11:53] we got to design this together
[11:55] um so what we didn't want was a whole
[11:58] separate
[11:58] fps radar system that just has no
[12:02] you know no ability to cross talk with
[12:04] with what happens in the ship
[12:06] um ship scanning because ultimately you
[12:08] know we're both um
[12:09] and we should be able to transition the
[12:10] data uh between both
[12:12] so um it was a nice thing to be able to
[12:14] design this together um and it just so
[12:16] happens that
[12:17] the ship stuff you know was was
[12:19] obviously a little further along
[12:20] um in terms of uh the amount of time
[12:22] that's been spent on it over the years
[12:24] so we were able to get that done first
[12:26] and then we wait for the fps and
[12:28] everything's
[12:28] coming up behind it uh we've been
[12:31] talking
[12:32] in in general uh almost since the
[12:35] beginning of star citizen's development
[12:37] about this notion of when you're
[12:40] exploring
[12:41] you know when you're out in the great
[12:43] unknown and you're scanning and you're
[12:44] looking
[12:45] you're looking to discover things like
[12:47] jump points or
[12:48] wrecks or you know anything else that
[12:50] can be found the idea that
[12:52] you can save that data and then
[12:55] transmit it to somebody else probably
[12:58] for a healthy amount of credits
[12:59] is that still on the table is that still
[13:02] our intention
[13:04] that is percent on the table and still
[13:07] our intention
[13:08] but that's not something you'll see for
[13:10] 314.
[13:13] uh now we talked about you know
[13:16] avoiding the questions specifically
[13:18] about you know this ship the terrapin or
[13:20] whatever
[13:20] but in general uh will ships design
[13:24] specifically for scanning or tracking
[13:26] purposes and that's anything from a
[13:27] terrapin to a
[13:28] hornet tracker to you know a carrick or
[13:30] whatever
[13:31] have more sensitive radars and ping
[13:35] tech available to them they can
[13:38] so um a lot of the work that we've done
[13:41] is to talk with designers on what
[13:44] information they would like to have
[13:46] across different ships even on foot
[13:48] and what type of upgrade paths you would
[13:50] want radars and scanners to have
[13:53] and a lot of those type of things
[13:55] usually amounted to
[13:57] different type of signatures the
[13:58] strengths at which you can see them at
[14:00] even the strengths of how resistant they
[14:02] are to ambient even the
[14:04] types so we've unlocked a lot of
[14:08] information and a lot of ways to
[14:10] categorize information
[14:12] so that designers could make more
[14:14] stronger radar more stronger ping or
[14:16] more stronger
[14:18] scanners or unlock specific information
[14:21] we've also incorporated different ways
[14:25] that we could potentially unlock players
[14:27] to filter out that stuff
[14:29] but it still depends on what the
[14:30] designer said that this particular radar
[14:33] can do
[14:34] or this particular scanner can do
[14:37] you but sorry yeah i did to kind of
[14:41] support that a little bit is you know
[14:43] there there there is now
[14:45] three separate sort of functions of of
[14:48] our radar ping stance
[14:49] system that are all able to be balanced
[14:51] independently per ship per item
[14:53] um but then you've also in addition to
[14:55] that you've got
[14:56] those three separate ones then you've
[14:57] got three different signature types that
[14:59] again
[14:59] you could have a scanner better at
[15:01] detecting ces you could have a better
[15:02] scanner for em you could have better
[15:04] scanner for ir so
[15:05] there's a lot of um there's a lot of
[15:07] designer control
[15:08] now um and it basically gives them a ton
[15:10] of tools to
[15:12] make you know all the stealth kind of
[15:13] gameplay or really all the electronic
[15:15] warfare that we've been expecting to
[15:17] have within star citizen
[15:18] uh work as as as expected and as
[15:21] intended and with that we've been also
[15:24] in talks with different um balance
[15:26] teams on what values these things do and
[15:29] how they
[15:30] interfere with each other so that we
[15:31] could get the electronic warfare we
[15:33] could get that stealth gameplay
[15:35] you know we always i keep going back to
[15:37] this into different examples
[15:39] sean really likes that idea that you
[15:41] have a big
[15:42] ship and you can maybe see it and you
[15:44] get a little bit closer and also
[15:46] there's a bunch of contacts because that
[15:47] big ship was hiding all the smaller ones
[15:50] so you know an upgrade path could be
[15:54] that you have a radar that's
[15:56] more sensitive to seeing those contacts
[15:57] further out than another one because
[15:59] it's
[16:00] ambient volume it could pierce through
[16:03] it
[16:03] more than another type of radar the
[16:07] downside could be more power just
[16:09] depends what design wants
[16:11] i just want goose to talk to me talk to
[16:13] me it's not one pair
[16:14] it's two pair right uh no i always found
[16:17] that to be great but
[16:18] it is such a you know it it's obvious
[16:21] but but it takes some doing uh
[16:23] especially when you've got three
[16:24] different
[16:24] sort of signature types how you call
[16:26] them how you actually merge them
[16:27] and uh in the end that the challenge is
[16:29] how you balance them all um
[16:31] is is you know the first time we even
[16:33] took a look at it what the hammerhead
[16:34] was you know had more
[16:36] more signature than an idris and then
[16:38] you know
[16:39] if you were beside the hammerhead you
[16:40] would never get seen you know even at
[16:42] you know 10 meters or so so um yeah yeah
[16:46] i was inverted
[16:50] uh will turning off all systems
[16:53] allow us to get close to enemies without
[16:56] being picked up by passive scanning
[16:59] it's a good question because it kind of
[17:01] it kind of depends
[17:02] it really depends one on the ship um so
[17:05] so what's happening within that chip
[17:06] even what's inside of it if it's cargo
[17:08] that's actually emitting ir or whatever
[17:10] that that could
[17:10] that could cause some problems or
[17:11] whatnot uh if it's not shielded you know
[17:13] whatever
[17:14] um but it's also considered that there's
[17:16] always uh cross-section
[17:19] so cross-section is almost a visual
[17:21] thing um so
[17:22] if you're getting up to 100 meters for
[17:24] sure you obviously see it
[17:26] um and if you can see it you can
[17:28] probably see you now if you're behind
[17:29] them different story right you're
[17:30] probably not going to get called out
[17:32] but you may be picked up from ces in
[17:34] terms of your radar so you are
[17:36] you know you're going to want to try to
[17:38] include yourself so if you're
[17:39] approaching to zero to 100 meters
[17:41] behind asteroids and stuff yeah you're
[17:42] going to get it right up to him and he's
[17:44] going to have no idea you're there
[17:45] but i don't know how you're maneuvering
[17:46] with all your stuff turned off you know
[17:48] so
[17:48] yeah uh it really depends um but all
[17:51] those tools
[17:52] are are there now and and you'll it
[17:54] you'll feel
[17:55] you'll know they're there um it'll be
[17:57] pretty obvious i think
[17:58] we actually have a test level that uh
[18:01] kirk tome was
[18:02] messing with where there's a um
[18:05] kind of like gas cloud that has high em
[18:08] and ir emittance
[18:10] so if something flies in there you're
[18:12] not gonna see it but if you get close
[18:14] enough
[18:15] if your radar detects cross-section
[18:17] you'll be able to see it
[18:19] so you know it really depends on what
[18:22] the other player's
[18:23] radar is and what your mission is doing
[18:26] to determine what
[18:27] you can see and how end of your ship
[18:29] like yes when we're talking about cross
[18:31] section it really is
[18:32] cross section like if you are horizontal
[18:35] to a guy versus
[18:36] being top down your cross section is way
[18:39] less like way way less
[18:40] it is because it's um the shield
[18:43] technology that
[18:44] we're using is based off sdf stuff from
[18:46] physics
[18:47] and the beauty of that is it gives us a
[18:50] more accurate description of
[18:51] cross-section on the overall surface
[18:53] area
[18:53] so we're 100 using the physical
[18:56] representation of that ship
[18:58] so if you have one that transforms the
[19:00] different ways or even animates you're
[19:01] going to get different cross-section
[19:04] so like on the hammer head if you look
[19:06] at it like horizontally the cross
[19:08] section is a lot smaller than if you
[19:09] flipped it upside down
[19:11] then it's loud yeah that's super loud
[19:13] but but a gladius being a good you know
[19:15] decent
[19:16] uh fighter um like that coming at you
[19:18] knows first
[19:19] it has a very small cross section um so
[19:22] i may not
[19:22] pick it up that's why the question is
[19:24] like it really depends depends
[19:27] but that's what's so cool about it
[19:28] that's you know again that's that's the
[19:30] system we wanted to bring in here
[19:31] that's why we make everything systemic
[19:34] what that depends
[19:35] we also wanted to add some stuff onto
[19:37] the ui to kind of help you with that
[19:39] so one of the things on there is the
[19:42] what your signatures are admitting
[19:44] versus the ambient levels that are
[19:46] happening so it kind of gives you an
[19:48] idea of
[19:49] how well seen you are versus what's
[19:52] happening in the environment
[19:54] the best way i describe it is like a
[19:55] thief visibility meter you know
[19:57] yeah for the um
[20:00] siphon filter maybe that's really cool
[20:03] um
[20:04] yeah it's got a little visibility so
[20:06] you've got that ambient level so
[20:08] like a good example and this is more for
[20:10] fps because they have the db
[20:11] signature so like sound um but if you're
[20:13] in a room that has a generator running
[20:15] it's super loud or whatever that ambient
[20:17] sound is going to be like full bar
[20:19] and as you run your ambience going to
[20:21] move up and down like this as as it is
[20:23] but it's probably staying below
[20:24] so that means you're stealth you're not
[20:26] detectable easily anyways
[20:28] up or passively from somebody else's
[20:30] radar but could they
[20:31] focus scan you could they ping you yeah
[20:33] they could still do all that kind of
[20:34] stuff
[20:35] but mark you mentioned ui i wanted to
[20:38] throw out
[20:39] some notice the for folks who have
[20:41] already seen the segment that aired
[20:43] yesterday
[20:44] the ui is not finished it's still in
[20:47] progress
[20:48] everything that we show in isc is still
[20:51] a work in progress
[20:52] if we waited for everything to be final
[20:54] art you'd have
[20:56] one episode the week before a patch went
[20:58] live and that's all you'd ever get
[21:01] so always keep in mind that when you
[21:03] watch something on isc
[21:05] especially when it's earlier in the
[21:06] quarter that you're looking at a very
[21:08] very work in progress
[21:10] and so it's an interesting thing with
[21:12] the ui
[21:13] is that ui that we actually shown in
[21:15] that video
[21:16] for the the scanner and the ping is
[21:18] actually not the ship ui
[21:20] we have a whole new spectrum of
[21:24] ship ui that we want to do for scanning
[21:27] and
[21:27] radar that we just not ready to deliver
[21:30] yet
[21:31] so we're actually utilizing the fps
[21:34] scanning ui so you actually get a
[21:37] glimpse of what's to come
[21:38] in our ships now
[21:42] tell your friends amuse your enemies
[21:44] everything in isc
[21:46] is very work in progress
[21:50] all right uh as a follow-up question
[21:52] from the chat we talked about
[21:53] you know we're still intending to make
[21:55] the data collected
[21:57] through scanners and stuff you know
[21:59] shareable with with other vehicles
[22:01] uh have we started working on how
[22:04] like like that system like how that's
[22:06] actually going to be are we talking like
[22:08] physical data
[22:09] data chips is it is it uh
[22:12] i think we got to beat beat to death the
[22:14] the design of that and i know tony very
[22:16] specifically is very very keen to
[22:18] to talk through that end and to work
[22:20] that design out so i wouldn't say
[22:22] much there um in terms of the system
[22:24] though yeah definitely uh
[22:26] the the system itself we've got a
[22:27] basically a data bank of objects that
[22:29] can be stored
[22:30] because it's short of you know selling
[22:32] it as an item or or
[22:34] you know giving it to other players or
[22:35] whatnot uh we've also got to do a couple
[22:37] other things
[22:38] even before that that that will lend
[22:40] itself to it so like the first one is
[22:42] being able to share
[22:43] uh contacts and all that kind of stuff
[22:44] within your ship to just other people in
[22:46] your ship like a gunner
[22:48] or something like that so number one we
[22:49] gotta do that number two we gotta be
[22:51] able to share stuff to party um you know
[22:53] like if you got a friend in the party
[22:54] you got whatever
[22:55] um we want to make sure that we're kind
[22:57] of going the direction and
[22:58] and to use a sort of a battlefield term
[23:01] uh they called it squad site
[23:03] uh but it's basically like you know
[23:04] everybody in the same squad can kind of
[23:06] see the same stuff they're sharing radar
[23:07] targets um
[23:08] and how the system kind of deals with
[23:10] that because you know you may be good at
[23:12] detecting this but
[23:13] this guy's better at detecting this i
[23:15] think it's super cool because actually
[23:16] the party can be laid out in such a way
[23:18] that
[23:19] you've got a ship that's really really
[23:20] good at getting cs you've got another
[23:21] one that's better at im there's another
[23:23] one that's going to em and then there's
[23:24] another one
[23:25] that's actually you know the the loudest
[23:27] signature in your group so it's actually
[23:29] clouding you know the rest of you guys
[23:30] being stealth together
[23:32] so i i love that there's that dynamic
[23:33] but we've got to get there
[23:35] and then once we've got that cool then
[23:37] then we'll package that up and put it in
[23:39] a shop and
[23:40] maybe we do something about it but i'm
[23:41] sure tony will want to talk through the
[23:42] actual design of that course before the
[23:44] cart
[23:45] uh yeah victor tramp's like jared we
[23:48] know
[23:48] i'm like i read the comments some people
[23:51] still need to be told
[23:53] all right uh moving on will radar
[23:56] or scanning have its own interactive mfd
[24:02] yes on um so
[24:05] radar i know some of the bigger ships
[24:08] there's been
[24:09] ideas of having like a radar globe and
[24:11] then being able to
[24:13] interact with what your actual radar is
[24:15] doing there's different designs on that
[24:18] but the one that i'm more familiar with
[24:20] is the scanning mfd
[24:23] we've been going through it i'll back
[24:25] pedal and say this is not something for
[24:27] 314 this is something that's up and
[24:28] coming
[24:29] um we've been in talks with ui and other
[24:32] teams on
[24:33] what that mfd is going to do and what
[24:36] information should it have
[24:37] so going back to scanning it you're
[24:40] going to unlock a bunch of information
[24:42] you're going to
[24:43] you know if i lock mine they or go to a
[24:46] mine able and i
[24:47] find that it has a gold or if i go to
[24:49] sean's ship and i find that it has a
[24:51] weapon or even gold
[24:52] that information gets stored in my
[24:54] object data bank on the ship
[24:56] that mfd's goal is to show
[25:00] you that information so if i go to
[25:03] scan a ship i'll get the nice ui and
[25:05] i'll see all the information there
[25:07] but if sean's gone i can't look at that
[25:09] information again
[25:10] hence the mfd the mfd is supposed to be
[25:13] that window
[25:14] of memory of what i scanned in the past
[25:17] so the good news is we in the object
[25:20] databank we have that whole underlying
[25:22] system where we actually save that
[25:24] information there we just don't have a
[25:26] way for the player to uncover it
[25:28] the only way you could uncover it if
[25:29] sean comes back and you try to rescan
[25:30] them then we show all the information
[25:32] that was there
[25:33] so the scan ui is going to be that
[25:36] housing of
[25:37] i scanned a bunch of things maybe i
[25:39] could look at what was there in history
[25:41] and even maybe have a way of
[25:42] transferring it somehow
[25:44] because that's going to be the ultimate
[25:45] thing is what do i do with it do i
[25:48] bring it with me on foot do i transfer
[25:50] it to another party or do i sell it or
[25:52] can someone
[25:53] i i think calex had the idea of another
[25:56] designer on vtt
[25:58] he wants to steal it i could go and scan
[26:00] it sneak aboard my ship and steal it so
[26:02] why not it's on the ship we just have to
[26:04] have ways of accessing it
[26:07] there's a ton of ideas that we want to
[26:09] have fun with
[26:10] uh there's a couple of the questions in
[26:13] the chat is about
[26:15] uh are about wanting the co-pilot or
[26:18] another seat in a multi-crew ship be
[26:19] able to do the scanning
[26:21] and stuff like that and that just comes
[26:22] down to operator modes right
[26:24] yes and no um so each of the seats
[26:28] as of right now they could they have
[26:30] their own
[26:31] operator um sub-context so
[26:35] if i'm piloting i could be flying and if
[26:37] someone guys in the back with a
[26:39] scanner on this turret he could be in
[26:41] the scan mode now if he scans something
[26:44] it gets saved into the ship's data bank
[26:48] and what's cool about that is if um me
[26:51] and sean are in a cut list
[26:52] he's scanning someone and i'm in combat
[26:55] shooting and flying
[26:56] whatever information he unlocks i'll see
[26:59] it too
[27:00] and this is there in 314 like the
[27:03] whatever
[27:04] everyone in the same ship in the same
[27:06] seats
[27:07] the scan information is shared across
[27:09] the entire ship
[27:11] so it's it's you could have buddies that
[27:14] just scan everything and everything
[27:17] go for it right it's all about making
[27:20] sure that information gets to everybody
[27:22] else that's on the show yes
[27:24] a lot of uh information to send received
[27:26] to different
[27:27] people and folks who will be learning
[27:30] more about operator modes
[27:31] and how that affects multi crew next
[27:33] week on ise
[27:35] uh can we please have the functionality
[27:39] to choose or filter what we actually
[27:41] scan for
[27:43] good news um good news
[27:46] so scanner-wise that's still
[27:50] in a discussion of how much the players
[27:52] can actually have control over but
[27:54] design-wise they're designed to set up
[27:56] to be medical information or
[27:58] law information that determines what you
[28:00] unlock
[28:02] there's still discussion on what to
[28:04] allow players to filter out in that scan
[28:06] mode
[28:07] radar we actually did a lot of back-end
[28:10] fundamental stuff to allow
[28:12] players now there's no ui so you won't
[28:14] be able to access this 314
[28:16] but the foundation because remember
[28:18] vehicle tech we build the foundation of
[28:20] stuff
[28:20] is there and we have
[28:24] a way for players to turn on and off
[28:25] certain signatures even turn off certain
[28:27] contact types
[28:29] one of the discussions we've had and
[28:31] seen across the community too
[28:33] is they want to be able to turn off
[28:35] certain contact types because you get
[28:36] the portals there and there's like a
[28:37] billion
[28:38] turrets well why not allow you to turn
[28:40] it off or have it off by
[28:42] default and then you could turn it on so
[28:45] behind the scenes designer set up what
[28:48] kind of contacts you can see
[28:50] and the player can then opt in on which
[28:54] ones he wants to have
[28:55] we just need to have a
[28:58] ui to expose that information maybe that
[29:00] could be the radar mfd
[29:03] it really depends how in-depth we want
[29:04] to get it but the functionality
[29:07] behind the scenes again is there
[29:10] it's a common refrain the the ui is one
[29:13] of the only
[29:13] uh well one of the few departments that
[29:15] touch every single aspect of the game so
[29:18] they are always in incredibly high
[29:19] demand
[29:21] uh so well they're
[29:24] very vital because they you know every
[29:26] aspect is how
[29:28] requires ui oh yeah every
[29:31] everything um are you going to change
[29:35] the awful cube scanning visual
[29:38] and making
[29:40] [Laughter]
[29:42] so good news right go ahead
[29:45] good news is um we actually had the
[29:49] graphics and vfx teams help out concept
[29:53] new ideas of how we want to have this
[29:55] blob
[29:56] so we did get rid of the box i'm sorry
[29:59] the box is gone
[30:01] and it got replaced with more of um
[30:05] fuzziness that there's some object
[30:08] within there because the whole idea of
[30:10] pain is that we don't know what's there
[30:13] or where it all of it is it's more of a
[30:17] general area there's
[30:18] something here or a bunch of things here
[30:21] and you don't know what it is it
[30:22] requires you to
[30:24] either focus more ping so you can reveal
[30:27] contacts or get closer
[30:30] but the idea is just you know there's
[30:33] something there
[30:34] so the ui i'm sorry the vfx all got
[30:37] changed
[30:38] now we wanted to move the
[30:41] vfx to be more on the player's lens to
[30:44] indicate that it's more of a
[30:46] system that's happening and relaying the
[30:49] information to you
[30:50] on the 2d because it's not a 3d in the
[30:52] world
[30:53] effect that happens but the old
[30:56] effect was kind of 3d now
[31:00] we didn't quite get all of that there
[31:02] because there's some stuff we want to do
[31:04] with the
[31:04] player ping and radar so we kind of have
[31:08] a hybrid right now
[31:09] where it's still in the 3d world but it
[31:12] looks like what we're going towards
[31:14] with that on lens vfx so
[31:18] we did get rid of the box it is still in
[31:20] the 3d
[31:21] but we want to move it more into the 2d
[31:23] so it overlays on top of things
[31:25] you know one of the complaints we've
[31:26] always seen too is you you ping out
[31:29] and it's you can't see the box because
[31:31] the mountains blocked it
[31:33] well we want to get rid of that so that
[31:35] it's mostly on the ui so you go okay
[31:37] there's something there you just have to
[31:39] fly towards it
[31:40] so we're getting there and we're
[31:41] improving the effects and
[31:43] as jared said earlier this is not final
[31:47] we're continuing to develop the vfx so
[31:50] when you guys
[31:50] see it please put in your comments
[31:52] because i'm sure we will take your
[31:54] feedback and make modifications as it
[31:56] goes
[31:57] but for 314 it's a hybrid
[32:00] to get us where we want to go yeah and
[32:03] uh
[32:03] like what you'll see and you know mark
[32:05] described it really is
[32:06] is is uh depending on the distance
[32:09] depending on the signal of the thing
[32:11] it'll be wider or more narrow it's meant
[32:13] to be resinging in
[32:14] that's kind of the thing you know
[32:15] there's something there you just don't
[32:17] know what it is you don't even know how
[32:18] it's shaped you just
[32:19] you have this you have a blob of a bunch
[32:22] of different um
[32:23] meshes that that it looks like and the
[32:25] closer you get the more it resolves and
[32:26] then the closer you get to that
[32:28] you actually get a contact and so so
[32:30] basically if you're coming into a system
[32:32] and you're you're willing to kind of
[32:34] give away your position because if you
[32:35] if you hit paying that that pretty much
[32:37] is going to notify everybody that gets
[32:39] hit by the ping that they've been hit by
[32:40] a ping so it's like walking into a room
[32:42] and going hello
[32:43] and then somebody way off in the side
[32:45] goes hello
[32:46] and you're like okay they're over there
[32:48] and but that's the whole idea with this
[32:50] is that
[32:50] there's this broad phase ping then you
[32:52] have passive radar as you get closer
[32:54] you've resolved to contact then you scan
[32:56] to get the info that
[32:57] that is the loop i'm going to send those
[33:00] two wave files to fill pure small wood
[33:01] and see if he can't
[33:02] replace the audio that the pings make
[33:04] with that x please do
[33:07] at least in game dev uh
[33:12] we talked a lot about uh a ship radar
[33:14] and scanning because that's
[33:16] what you know what's coming with 314 fps
[33:18] radar
[33:19] and stuff will follow shortly after uh
[33:22] will fps radar be able to discover
[33:25] harvestables mine-ables what will it be
[33:28] able to discover
[33:29] what can you tell us that pretty much
[33:32] goes back to
[33:33] you know what designers want to set up
[33:36] different scanners and radars to be
[33:38] uh i have a feeling we're gonna the
[33:41] first you know when you first get the
[33:42] system up and running you kind of want
[33:44] to expose
[33:45] everything and then you want to decrease
[33:48] it down and make different variants
[33:50] to indicate different upgrade paths so
[33:52] that's kind of what we're doing for the
[33:54] ships right now
[33:55] so all the ships are going to have
[33:57] basically the similar radar and scanning
[33:59] and then
[34:00] different ones will get exposed and
[34:02] broken out to be stronger
[34:04] and more flexible on what they can do
[34:05] because now the system allows it
[34:08] so i imagine the same thing is going to
[34:10] happen with
[34:12] fps now fps
[34:15] doesn't have as many variations
[34:19] as ships are there's dozens of ships and
[34:22] they each have different roles and goals
[34:24] so
[34:25] they're going to have a lot more complex
[34:27] items that determine how you scan
[34:29] radar whereas fps one we might have a
[34:32] few dozen
[34:32] and over time more of them come out
[34:35] so the initial ones will probably
[34:38] um allow you to do the same gameplay
[34:42] loop now
[34:44] whereas you can scan mindable rocks and
[34:47] you could
[34:48] ping them out and find them and then i'm
[34:51] sure there will be upgrade paths
[34:52] that the mining team or even fps
[34:56] team will decide to branch out and or
[34:59] restrict other ones
[35:01] to focus more on this a goal because i
[35:04] i mean there's you can make um a scanner
[35:07] or radar more focused on bounty hunting
[35:09] versus mining
[35:11] having one to do both is more of a
[35:13] gateway to
[35:14] make the branching paths work yeah
[35:18] um and to expand a tiny bit uh
[35:21] on the harvestables the mineables um
[35:25] the whole intention with this system and
[35:27] a big part of the the changes and what
[35:29] it took as long as it did was it needed
[35:30] to be
[35:31] uh designer friendly enough that it was
[35:33] an arbitrary component that we can add
[35:35] to
[35:35] any entity um so like if we want to just
[35:37] make a box have a crazy em ir db
[35:40] whatever uh we just set it on the entity
[35:43] it's um it's it's all very
[35:44] straightforward as far as a designer is
[35:46] concerned um sorry you hear me
[35:50] yeah yeah she wants to do scanning um
[35:54] so we could just add these uh components
[35:56] on these arbitrary uh
[35:58] ones and it's all up to us uh what that
[35:59] signature is and how strong that is and
[36:01] what entities uh get them so
[36:03] it's nice because again for squadron
[36:04] things like this you can have mission
[36:05] components or
[36:07] mission entities can have these uh you
[36:09] can add them to
[36:10] pretty much anything i want you to know
[36:12] you had a wonderful opportunity for a
[36:14] cat scan joke and you didn't take it
[36:16] and oh i missed it oh and i will be
[36:19] bringing that up at your annual review
[36:21] yeah fair enough uh to go on more with
[36:25] what sean was describing um you know in
[36:28] the past that we had that
[36:29] xeno event we had a little bit of radar
[36:32] scanning
[36:33] um it was mostly tried to hook it up to
[36:35] an existing system that didn't quite
[36:37] support it
[36:38] and designers got really far but the new
[36:40] system
[36:41] will be a lot more flexible so if we
[36:44] were to go down that path again
[36:46] they could relay more information
[36:49] and unlock block the mission better
[36:52] um based on what information you get and
[36:55] how quickly you get based on your radar
[36:57] or
[36:57] your scanner that you have so the
[37:00] designers now have a lot more
[37:03] open-endedness of what
[37:04] information they want to give the
[37:05] players and especially once we have more
[37:07] branching paths
[37:08] that determines what information you get
[37:11] so
[37:12] it's cool because if you
[37:15] have a medical scanner maybe if you scan
[37:17] this thing for a mission you're going to
[37:18] uncover a different
[37:19] path than if someone has a bounty hunter
[37:22] scanner
[37:22] now these aren't real scanners right now
[37:24] but it's the idea
[37:26] of what design can do with them for
[37:28] their missions is exciting
[37:30] okay um
[37:31] [Music]
[37:33] will scanning ever be skill or knowledge
[37:36] based
[37:37] rather than just holding a button
[37:41] yes and no so
[37:44] we've gone through different ideas of
[37:46] what it means to be
[37:48] a skill based and there's some ideas to
[37:51] get it to there
[37:53] but what we wanted to focus on is again
[37:55] getting it to working where everyone
[37:57] knows how it works
[37:59] and once we get to that level then we
[38:01] can maybe add
[38:02] extra things that make a skillful player
[38:04] unlock information
[38:06] better i don't know what that means yet
[38:08] because it's still ongoing discussions
[38:10] of
[38:10] what and how we can make it more skilled
[38:13] based
[38:14] but one of the things that we're
[38:15] bringing into it to kind of bring that
[38:18] gameplay into there is scanning is now
[38:20] tied to the signatures and the detection
[38:23] of an object
[38:24] so if you have a ship far away
[38:28] that's like on the edge of on your radar
[38:31] and you scan it
[38:32] you may not get all the information
[38:34] about that object unless you get closer
[38:37] just because the emissions that it's
[38:39] making
[38:40] and it is off the edge that you can't
[38:43] quite
[38:43] see it really good so you could see
[38:47] sean has you can see a ship but maybe
[38:50] you can't see his contents
[38:51] and you have to sneak up on him to make
[38:54] your
[38:55] um signatures not too far out so you
[38:57] could scan him to see if he has anything
[38:58] better
[38:59] so there is a bit of emergent gameplay
[39:01] that comes out of there but the whole
[39:03] process itself
[39:05] um skill based is still ongoing on what
[39:08] that means and how we could
[39:10] deliver it to a player and again
[39:13] we're focusing on getting um
[39:16] the basic system there and we'll modify
[39:20] it as we go
[39:21] a lot of it's too is we'll watch what
[39:23] players do and maybe add different
[39:25] things for different skill sets
[39:27] yeah i think there's a couple still a
[39:28] couple layers in there that that that do
[39:30] have
[39:31] there's a bunch of player agency now um
[39:33] and and whether or not you want to call
[39:34] that skill or not
[39:35] it really depends situationally what it
[39:37] is uh but you know they can focus again
[39:39] on it they'll know what they
[39:41] interference is according to the signal
[39:44] of the
[39:44] the scan target so again if you you've
[39:47] got a lot of interference you're going
[39:48] to want to focus more and
[39:50] that's again a little bit of a skill
[39:52] you've got to know to do that um and if
[39:54] you don't know how to do that
[39:55] you're going to take that much longer to
[39:56] scan so that's just speaking of the
[39:58] scanning independently but
[40:00] like just again the whole electronic
[40:01] warfare suite there's plenty of skill
[40:03] involved
[40:03] um and a lot of it has to do with just
[40:06] situational awareness and knowing
[40:07] yourself
[40:08] right checking the ambient levels am i
[40:10] stealth am i not stealth
[40:11] has somebody pinged me have i ping
[40:13] somebody else do they know where i am
[40:15] you know all those sort of layers of it
[40:17] um is the little cat and mouse kind of
[40:19] gameplay that i think we want out of
[40:20] this
[40:21] and the skill i guess out of that too is
[40:23] you know if you design your ship to be
[40:25] less emission based and you're aware of
[40:28] how well those emissions can go
[40:30] determines how well you could sneak up
[40:32] on someone and scan them
[40:34] to relay that information back or just
[40:37] go all
[40:38] hands on board and try to take over that
[40:39] ship but if you have a ship like a
[40:42] hammerhead that's emitting something
[40:43] crazy you're not going to be able to
[40:44] sneak up on someone
[40:46] because you're you're just loud not with
[40:48] that attitude
[40:51] uh but it's what it's what chris likes
[40:53] about all of this right it's all about
[40:54] preparedness to go
[40:56] to the thing that you're gonna go to and
[40:57] then and then adapting in this situation
[40:59] but it is the
[41:00] the forward thinking and a bit the
[41:02] agency that you have to make those
[41:03] decisions on the way in
[41:05] uh we talked earlier uh in the show mark
[41:08] about
[41:08] uh kirk and his text level uh with the
[41:11] gas cloud that has all the uh
[41:13] em interference and stuff like that um
[41:16] do we know
[41:17] i realize this is a question for the
[41:18] environment team and not for you but i'm
[41:20] just gonna i'm gonna ask because folks
[41:22] in chat are asking
[41:23] do we have an idea of when that stuff
[41:25] might actually make it into the
[41:27] persistent universe
[41:28] jump from a test level to um
[41:32] hopefully soon tm so what
[41:36] known ambience has a direct imp just
[41:39] well there's two different types of
[41:40] ambience
[41:41] so there's ambience that a bigger ship
[41:44] in fears onto a smaller ship or
[41:46] something bigger emissions and fears
[41:48] onto a smaller missions and that will
[41:49] never
[41:50] 100 bleed out the emissions it's more of
[41:54] a
[41:55] modifier so that you could even if
[41:57] you're really up close to it you'll
[41:58] eventually see it
[42:00] and then there's more of an environment
[42:02] ambient
[42:03] where this one is you have to be above
[42:05] it in order to see the object
[42:08] so in order to know what those values
[42:11] that we need are we need to have
[42:13] reasonable signature generation across
[42:16] the board
[42:17] and the first pass of that is going to
[42:20] be
[42:21] um working with vet on what
[42:24] emissions should we be seeing so that we
[42:26] can get reasonable ranges for
[42:29] uh ping for regular regular radar
[42:32] passives
[42:32] and nozzles for scanning once you're
[42:35] there then we could take those values
[42:37] and plug them into the
[42:38] environment so that you could have more
[42:41] stealthier areas like an asteroid field
[42:43] could completely hide cs
[42:45] and you're completely allowed with em
[42:47] and ir
[42:48] but we have to be careful what those
[42:50] values are
[42:51] because we want them at a range that
[42:53] makes it harder to see
[42:54] not completely blind players so
[42:58] we will have some areas that emit
[43:00] ambient because we're going to toy with
[43:02] values to get it
[43:03] there and once we have a baseline of how
[43:05] we want this stuff to get we're just
[43:06] going to keep pushing more
[43:08] and more until eventually more systems
[43:11] have it and then
[43:12] ambience everywhere but 314 wise we will
[43:16] have
[43:16] ambient level within the pv yes
[43:20] that is that is not like way far away
[43:22] that's that has to come with this
[43:23] because otherwise
[43:24] the whole ambient signature sort of side
[43:26] of it is kind of mood um
[43:28] so there will be a ambient level plus uh
[43:31] coming from the ships
[43:33] chad is like jared asked a one question
[43:36] it's my show i'm the boss i can do it
[43:38] every once in a while
[43:40] there's a lot of good information in
[43:41] there uh
[43:43] let's see will we be able to scan
[43:47] planets to see what resources are on it
[43:50] like life forms percent of oxygen
[43:52] water weapons uh or weather
[43:55] for instance and collect that kind of
[43:56] data before we land on it
[43:59] uh so can we start
[44:03] with this can we star trek this mark yes
[44:05] of course
[44:06] i wish so one of the big fundamental
[44:10] things that we've done
[44:11] in our tech for the scanning
[44:14] is trying to think of how we could get
[44:16] anything scannable
[44:18] and what and how we could unlock that
[44:20] information so we built
[44:22] out a system to allow us to
[44:25] create ways of getting information
[44:27] either through async calls or through
[44:29] immediate data
[44:31] like cargo takes a while to get so when
[44:33] you're scanning it you may not get it
[44:34] right away because we have to
[44:36] go sent to a server which says it's
[44:37] another server that eventually comes
[44:39] back to you
[44:40] so having a planet be able to be
[44:43] scannable to tell you that information
[44:46] is
[44:46] achievable because we have that whole
[44:50] system there and we could put it in to
[44:52] unlock that information and send it to
[44:53] the player
[44:55] now whether or not we're going to add
[44:57] that is a good question that's
[45:00] where vehicle tech team builds out the
[45:02] technology to allow
[45:04] other teams to use those foundations to
[45:06] add that information
[45:08] so while it's possible i can't say yes
[45:12] that's something that's going to go
[45:13] there
[45:14] but i know how kind of the behind the
[45:16] scenes of the
[45:18] planet works and the resources that are
[45:20] there
[45:21] is something we could obtain so
[45:24] maybe in the future that is something we
[45:26] could spot to the players
[45:28] that hey maybe there's a severe weather
[45:30] storm here or
[45:31] there's cargo or there's something on
[45:33] the there's a bunch of gold on this
[45:35] planet somewhere go find it
[45:36] and you could ping out that actually
[45:38] would be kind of cool emerging
[45:45] just have to start gameplay it in based
[45:47] on what other content teams and feature
[45:49] teams would like it to do
[45:51] okay so we should totally tell the
[45:54] mining team
[45:54] hey we got there's this cool idea
[46:00] with the engine uh somebody somebody
[46:03] play star marine
[46:04] uh with the introduction of fps radars
[46:07] will we
[46:07] also see the removal of god-eye bounty
[46:10] markers for pvp bounties
[46:15] it's gonna be a question for the pvp
[46:17] bounty guys i guess
[46:19] uh i would assume so because the whole
[46:21] thing with with with bounty part of the
[46:23] gameplay is
[46:24] finding them right so it's not not super
[46:27] fun if you
[46:28] if you have this uh this infinitely long
[46:31] and always on screen
[46:32] you know go here um that's that's pretty
[46:35] straightforward
[46:36] uh you know and i wonder and i'm sure
[46:38] you know they're gonna have a bunch of
[46:39] layers like if
[46:40] it's a certain bounty level maybe it
[46:41] starts getting that bad like a gta 5
[46:43] star kind of thing like like
[46:45] okay everybody insert this guy he's
[46:47] right here
[46:48] uh let's let's avoid him but i don't
[46:50] want to answer on the path
[46:51] how close you are to the com relays and
[46:53] the security stations where that
[46:54] information is getting relayed or
[46:56] whatnot but again and if you know you
[46:57] have a bounty on you
[46:58] again you're going to change the stealth
[47:00] gameplay stuff right you're not going to
[47:01] be loud you're not going to be going
[47:02] into systems pinging and all that kind
[47:04] of stuff so
[47:04] i would i would i i would expect as much
[47:07] um
[47:08] but uh yeah we have to see as the fps
[47:10] stuff comes on yep
[47:12] well i guess you know this is
[47:15] that boundary thing is kind of going
[47:16] with um how other things goes you kind
[47:19] of expose a system
[47:21] with 100 here's everything and then you
[47:24] start bringing back stuff with different
[47:26] upgrade paths and bring it into other
[47:28] systems so
[47:29] at the time that was made radar and
[47:31] scanning couldn't give them that
[47:33] information or way to do any way of
[47:37] uncovering stuff or going to find
[47:39] where that bounty is so it's
[47:43] now available so maybe that is something
[47:46] that could get exposed so that you ping
[47:48] out
[47:48] and maybe you kind of go okay he's over
[47:50] here
[47:52] but again that's going to be more of the
[47:54] feature team working on that particular
[47:55] how they want to use radar scanning to
[47:58] do that sort of information
[48:00] uh we'll save that for the next time uh
[48:02] uspu is on or something
[48:05] there we go uh
[48:08] as a follow-up to that uh what can you
[48:11] tell us about
[48:11] counter scanning tools aka jamming
[48:16] so um radar
[48:20] is based 100 on the signatures and the
[48:22] ambient
[48:23] and we do have and i was saying you know
[48:25] environmental ambience
[48:27] and um nearby of another object emitting
[48:30] but there's also kind of a third one and
[48:32] this is
[48:34] when a chaff is emitted it actually
[48:37] generates a
[48:38] volume of ambience so you can't see in
[48:41] between it in it or out of it
[48:43] so if someone makes a big enough ambient
[48:45] field that's how chaff
[48:47] blocks out you like a missile lock or
[48:49] how you're actually able to see that
[48:51] object so um
[48:55] bringing that emerging gameplay of how
[48:56] we can make you know
[48:58] maybe those little bits of ambient
[49:00] fields around
[49:02] um is something that actually was talked
[49:04] about there's there's a concept of
[49:06] a radar jammer which literally if you
[49:09] activate just spits out
[49:10] a bunch of ambient fields around you you
[49:13] know we did something similar with the
[49:14] um the interdiction
[49:16] where you jam and it blocks things from
[49:19] quantum traveling we could
[49:21] literally do the same thing with radar
[49:23] where you blind
[49:24] stuff um around it it's things that are
[49:27] feasible
[49:28] but it's again one of those things do we
[49:30] from you know is it something that a
[49:32] ship
[49:32] does is something that a player brings
[49:34] onto the foot you know tech wise
[49:36] we're there we will bring it design wise
[49:39] ship just needs to say this is its
[49:41] purpose
[49:41] and then we'll start utilizing it and
[49:44] then
[49:46] the other thing is interference with
[49:48] scanning
[49:49] so we do have stuff in our design dock
[49:52] that we're going to bring forth
[49:53] through next patches as interfering with
[49:58] scanning because if you're scanning
[50:00] something
[50:01] and your ship has precious cargo or even
[50:04] stolen stuff
[50:05] we want you to be able to kind of block
[50:07] that so that there's counter of
[50:09] interference so that if i
[50:10] security scans you you're not going to
[50:12] see the bad goods
[50:14] but if he has a strong enough radar he's
[50:16] going to be able to find it
[50:18] so detection from radar and ping
[50:22] there's a possibility of a jammer or the
[50:24] system
[50:25] has a way of doing it we just have to
[50:27] incorporate that on the feature teams
[50:29] or on ships and way of interfering with
[50:32] scan
[50:32] is stuff we're going to be introducing
[50:35] uh through different patches
[50:37] yeah so yeah mark pretty much touched on
[50:39] all the active met
[50:40] you know all the active sort of ecm
[50:42] stuff that we have which is
[50:43] you know chaff works like an acm thing
[50:45] electronic countermeasure
[50:47] uh right now um it just happens to have
[50:49] the exact same signature that we do want
[50:51] to mask and that's why
[50:52] again you've got ir missiles you got em
[50:54] missiles this is the whole reason for
[50:56] those and the same thing will work with
[50:57] radar
[50:58] um but some of the passive stuff again
[51:00] like the the the whole
[51:02] uh player agency and and just being able
[51:04] to set yourself up
[51:06] uh on the ship side uh any mark talked
[51:08] about the interference or
[51:10] or or the lack or the the stronger your
[51:13] signal is the less that interference is
[51:15] going to affect you so basically if you
[51:16] can remove stuff from your ship or turn
[51:18] off things within the ship
[51:19] that are that are louder that is your
[51:21] you know effectively a passive counter
[51:23] measure
[51:24] you know effectively pat you're
[51:27] countering
[51:27] uh whoever else is scanner as best as
[51:30] you can right now but the ecm's is going
[51:32] to come from chaff
[51:33] and then uh further to that you know i
[51:35] would hope that from an operator sort of
[51:36] scan position
[51:38] um we could do more but uh in the
[51:40] meantime it's all ambient interference
[51:42] and uh current signature levels um then
[51:45] the active one is chaff
[51:46] like for example for the tank i want
[51:48] smoke right then that should get
[51:50] obviously it should just call out the cs
[51:52] right why would you have a cross section
[51:53] you can't see the tank
[51:55] um so it's it's things like that why are
[51:57] you shooting i'm just
[51:58] i'm hiding ourselves exactly i'm just a
[52:01] particle effect leave me alone
[52:03] uh yeah and of course you know there are
[52:05] always as a follow-up to that question
[52:07] there are always the the ships that come
[52:08] with
[52:09] you know dedicated scan resistant
[52:12] cargo compartments and stuff the mercury
[52:15] star runner uh
[52:16] i think the phoenix like shielded cargo
[52:18] yeah exactly what
[52:19] one of the constellations is supposed to
[52:20] have a shielded area stuff like that
[52:22] yeah and it doesn't make you immune to
[52:24] the scan all it does is it really
[52:26] increases the amount of interference so
[52:27] it's going to take forever for the guy
[52:28] to actually scan
[52:30] the whole way yeah so it's either going
[52:32] to take you longer or it's going to or
[52:34] it's you know for the different levels
[52:36] of scanners and stuff
[52:37] it might protect you from like the first
[52:38] three levels of scan but if somebody you
[52:40] know upgrades to scanner 5
[52:43] you know and and that's a good note
[52:44] actually and it is part it was part of
[52:46] the feature set and it was part of the
[52:47] the the criteria that we set up the
[52:49] feature on uh was that partial scans
[52:51] give you partial info and actually
[52:53] depending on the
[52:54] interference there you're only going to
[52:55] get a certain level of information
[52:57] off the ship so you know for example if
[52:59] there's a ton of interference you're
[53:00] going to get the fact that it's a ship
[53:01] maybe the name of the ship maybe even
[53:02] the pilot but you're not going to get
[53:03] anything else you have no idea about the
[53:05] weapons you have no idea about anything
[53:06] you're either going to have to get
[53:07] closer focus if you can you know do a
[53:09] whole bunch of stuff to
[53:10] to make that happen in video games
[53:12] nothing is absolute
[53:13] there there there's there's a there's a
[53:16] there's something you do and then
[53:17] there's a counter
[53:18] to that well yeah that's the idea and
[53:20] just feeding back to the player that's
[53:21] what's really important to us
[53:22] is that you know people learn and play
[53:24] with the system uh because they've got
[53:26] feedback and they know what's happening
[53:27] um you know and this this is the big
[53:29] thing that's changed just based on the
[53:31] old scanning
[53:31] um like we used to have mfds with little
[53:33] im and
[53:34] uh uh em ir um uh
[53:38] graphs but they weren't even you know
[53:40] they were just flat numbers they said
[53:41] they had no
[53:42] there was no relative anything so you
[53:44] knew it went up but like you don't know
[53:46] how much that really went up and why
[53:48] that matters um
[53:49] so there was no way to learn uh what the
[53:51] what the scanning was doing so now it's
[53:53] a little more
[53:54] it's a little more clear um and
[53:55] immediately fed back to the player
[53:57] i think one of the things i hope for is
[53:59] you know it is false signature
[54:01] generators being able to
[54:03] you know be being able to you know fly
[54:05] in something like
[54:06] a gladius or something and and look like
[54:09] i'm a idris
[54:10] you know just just to freak people out
[54:12] you want a thumper for out of
[54:14] outer space yes yeah yeah i'm with you
[54:16] yeah
[54:17] um all right we are nearing the end
[54:20] folks
[54:21] uh let's let's let's do a biggie here
[54:24] let's talk long-range scanning uh
[54:28] this has been one of the you know
[54:30] questions that we've had in the game for
[54:32] a while now
[54:33] it's with the advent of server meshing
[54:36] you know
[54:36] on the horizon and calling out things
[54:39] here and there
[54:40] you know somebody is on one server while
[54:41] i'm on another server and stuff like
[54:43] this
[54:43] uh how are we
[54:47] working to prepare ourselves for that
[54:49] for to make sure
[54:50] scanning doesn't have to be completely
[54:52] redone again
[54:54] when when that day comes sure um
[54:57] one of the biggest things that we've
[54:59] taken the liberty of doing is trying to
[55:01] get rid of
[55:02] the restriction of distance so before
[55:05] the radar
[55:07] would kind of have a flat distance of
[55:08] how far it would see things and that's
[55:10] it
[55:11] and you know when you have your passive
[55:14] radar uh you're basically a regular
[55:16] regular radar that is only going to show
[55:18] you the things that are technically
[55:20] streamed in on your machine because
[55:22] those are the stuff that are
[55:23] active you could target that you could
[55:24] shoot it you could interact with it
[55:27] ping is mostly supposed to be the thing
[55:29] that says
[55:30] hey there's stuff out here that
[55:33] maybe further out than your world view
[55:35] they could be
[55:37] in our immediate larry release a few
[55:40] dozen kilometers away to
[55:44] where we want to go once we get server
[55:46] meshing in that where there's a few
[55:48] hundred thousand kilometers away and
[55:51] what we're doing with the technology is
[55:54] um
[55:54] when you ping out we've changed the
[55:56] whole system to
[55:58] do an async query so that once we have
[56:01] the api
[56:02] for server meshing ready we could query
[56:05] the backend for fine things that are of
[56:07] interest
[56:08] to the radar that you have and then
[56:10] report it to you
[56:12] as a blob or even as a potential contact
[56:14] depending on how far you are
[56:16] and since we know what that information
[56:18] was
[56:19] because it was all information that was
[56:21] just stored off in a data bank we could
[56:22] uncover it
[56:24] store some stuff in the blob so that
[56:25] when you ping out
[56:27] you see a blob far far away you could
[56:29] scan it and go
[56:31] there's something in here that's of my
[56:33] interest
[56:34] i could go fly that direction and then
[56:37] proceed with more of the gameplay of
[56:39] pinging and then eventually it comes on
[56:40] your contacts
[56:41] and you can see it that's where we're
[56:43] heading towards
[56:44] so the immediate is replacing our
[56:46] existing systems and removing
[56:48] restrictions so that you can see things
[56:49] that are streamed
[56:50] in and then once we have the server
[56:54] meshing technology there we'll hooked up
[56:55] those hooks so that we could uncover
[56:58] the information that's been streamed out
[57:00] and even across
[57:01] um different servers because it's in the
[57:03] local system
[57:05] and then relay that to you into either
[57:09] a point that's saying there's an active
[57:10] contact here or a blob
[57:12] and then you can scan it to uncover
[57:13] whatever information
[57:16] is relevant to yet scanner or that the
[57:18] objects that are there
[57:20] so that's where we're heading and that's
[57:23] what the backend system for the radar
[57:25] scanning is
[57:26] going to is utilizing to move towards
[57:29] uh giving players the ability to find
[57:31] things further out
[57:34] all right gentlemen well that's it it's
[57:36] uh it's two o'clock here local it's the
[57:38] end of your
[57:39] your tour duty this week i gotta let you
[57:41] guys because i know you've got meetings
[57:42] and stuff to go to
[57:43] uh mark sean as always thank you for
[57:45] taking the time
[57:46] uh out of your busy schedules to be here
[57:48] with us uh
[57:51] fps or fps and ship radar and scanning
[57:53] everybody
[57:54] it's been starts in live be sure you
[57:55] check out isc uh came out yesterday for
[57:58] some more information and an early look
[58:00] at some of the work in progress
[58:02] ui underway and uh come back to isc
[58:05] next week for a look at capacitors
[58:08] and operator modes and missile operator
[58:12] modes and the missile rework and all
[58:13] kinds of stuff that's uh
[58:14] that's going to change the future of dog
[58:16] fighting combat
[58:17] so uh i'm jared that's sean
[58:20] that's mark we'll see you later
[58:23] everybody take care
[58:24] see you later bye bye
[58:50] you

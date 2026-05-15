# Inside Star Citizen: Meshing Together

**Video:** https://www.youtube.com/watch?v=q4Hm0lDOyz8
**Date:** 2023-02-17
**Duration:** 17:24

## Transcript

[00:00] [Music]
[00:04] meetings hands down the most exciting
[00:07] element in all of game development now
[00:09] everyone that has ever made a game will
[00:11] tell you that it's gathering in a
[00:13] meeting room and talking about stuff
[00:15] that's really their very favorite part
[00:17] of the process yes the best days in Game
[00:20] Dev are the ones full of meetings and
[00:22] the best behind the scenes content is
[00:25] always incredibly meeting focused now
[00:28] imagine a summit an entire week
[00:31] dedicated to hashing out the plans for
[00:34] the next month quarter year and
[00:37] sometimes Beyond
[00:38] yes exciting stuff I know
[00:41] all kidding aside Summits are an
[00:44] essential element of Game Dev we don't
[00:46] often get to explore so when we heard
[00:48] that the core technology Network and
[00:51] engine teams were coming together to
[00:53] discuss how best to move from persistent
[00:55] entity streaming into tackling the
[00:57] immense server meshing we figured you
[01:00] might just indulge Us in trying
[01:02] something a little different this week
[01:04] so we set up some cameras and grabbed a
[01:07] few willing participants just minutes
[01:09] after completing their second day of
[01:10] summits to get a candid unfiltered look
[01:14] inside one of the most important Star
[01:17] Citizen Summits of 2023 and let me tell
[01:20] you January has been full of them so to
[01:22] spare you the full effect of five days
[01:25] of meetings we'll be spreading these out
[01:27] over the next few weeks while continuing
[01:29] our look at content being developed for
[01:31] 319 and Beyond so
[01:34] after just a little Ado we present to
[01:37] you the server meshing Strike Team
[01:40] quarter one 2023 development Summit post
[01:43] meeting review
[01:46] name pending
[01:49] do you need me to look into the camera
[01:50] off the site right okay okay
[01:56] um
[02:01] yeah yeah there you go I didn't know
[02:05] what you know
[02:08] I can't I can't do this if they're
[02:10] watching me and go
[02:13] away
[02:22] what are you guys doing here
[02:24] uh well I'm visiting the uks who discuss
[02:27] server meshing with the rest of the team
[02:28] we're doing a summit to try and plan for
[02:32] the next deliveries of pyro and Silver
[02:35] Machine
[02:36] so Summits in general especially this
[02:39] one is really where all the teams
[02:40] connect because you know with the
[02:42] pandemic a lot of people have been
[02:43] working from home so some has become
[02:45] really important because it allows us to
[02:48] reconnect together so we meet in one
[02:50] location uh this time it's in the UK and
[02:52] we have a representative of every team
[02:54] so most of the leads and every team it's
[02:56] the first time that we're meeting as a
[02:59] team for a lot of us a lot of people
[03:01] joined the company a lot of people join
[03:04] those teams and they've never met so far
[03:07] so it's just great like we have someone
[03:10] from Korea Montreal have people from all
[03:13] over you know so it's also a strong
[03:16] aspect of the senates
[03:18] this is a great opportunity for us this
[03:19] is the first time ever we've had the
[03:20] Strike Team all in one place all at one
[03:22] time this is our kind of Avengers
[03:24] assembled moment for Server meshing this
[03:26] is the time we get three core teams
[03:28] together to actually work out um the
[03:30] final nuances of the architecture to
[03:32] build this system there are many teams
[03:34] are involved and to get the teams on the
[03:36] same page yeah we're just building an
[03:38] emblems in a room talk for one week
[03:40] aligning all gods that we can just go
[03:43] out and crank it to court without less
[03:45] communication than we would have without
[03:46] them many people already working
[03:48] together for a long time so it's
[03:49] communication easier if you know each
[03:52] other and getting forward to yeah
[03:54] equating on goals based on that we can
[03:58] more efficiently execute two or two ago
[04:00] because especially in a global company
[04:01] where time zones uh it's kind of hard
[04:05] sometimes I think about software
[04:07] developments like oil tanker where it
[04:10] once put into One Direction but as soon
[04:13] as you want to change direction it takes
[04:15] a long time because you need to get
[04:17] everyone has a slightly different idea
[04:19] of how stuff works and to get everyone
[04:21] really understand how stuff should work
[04:24] on a more detailed level there's a lot
[04:26] of work and align it once everybody's
[04:29] put their stuff in we plan it out we
[04:31] discuss approaches strategies on how
[04:34] we're going to intertwine our work and
[04:36] this allows us to be on the same page so
[04:38] that we can then work together to
[04:40] achieve a very specific objective and
[04:42] not just be building technology for fun
[04:52] the objective of the Summit is to flesh
[04:55] out the exact road map for Server
[04:57] meshing based on all of the work we've
[04:59] been doing before PES so PS is the state
[05:03] of the simulation that's now persisting
[05:06] that's great
[05:07] behind us now we need to actually server
[05:11] mesh the major goal of this Summit is to
[05:15] reflect back on what we've done and see
[05:18] how we can do it better for the next
[05:21] Milestones on server machine what did we
[05:24] forget what can we do better how can we
[05:26] better organize ourselves
[05:28] um
[05:29] so we keep moving forward and we don't
[05:32] do what we've had to do a lot for the
[05:35] previous delivery which is
[05:36] think and create as you go and there
[05:40] will always be a little bit of this in
[05:42] game development it's normal you need to
[05:45] have this creativity you need to keep
[05:46] that but we also need to get a little
[05:49] bit better at planning and anticipating
[05:52] some of the challenges the goal of the
[05:54] me of the Summit is really to flesh out
[05:57] the steps to get there with the
[05:59] objective to ship a second solar system
[06:01] that's really the primary objective what
[06:04] do you call a jump point for you because
[06:07] we are talking a lot of the low
[06:08] technical yeah that's what I want to
[06:10] know yeah
[06:12] a secondary goal
[06:14] is talking about goodbye secondary goal
[06:18] would be talking about the low technical
[06:21] groundwork for to enable features like
[06:24] jump point
[06:27] [Music]
[06:33] so this is day two I think of the summit
[06:36] so we've we've done a first
[06:37] retrospective of all of the PES work
[06:39] issues we've encountered problems we've
[06:42] had things we want to avoid and this so
[06:46] this is officially the first day of
[06:48] actually digging into missions I know
[06:50] the second thing
[06:53] um day two uh we have drunk so much
[06:56] coffee day two has been super great in
[06:58] that we've we've aligned a lot of our
[07:01] different roadmaps every you know every
[07:03] team gets to have their own sort of view
[07:05] on the project and I think today we
[07:07] really came together as a
[07:09] this is the critical path that we need
[07:12] to achieve everything else is gravy but
[07:14] we have the critical path is really
[07:16] clearly identified which is a big deal
[07:17] in the size of this project surf meshing
[07:21] um
[07:21] the plan for persistent anti-streaming
[07:23] and surf mesh they were designed to be
[07:25] done simultaneously at the same time
[07:27] this is going back to late 2020
[07:30] um we couldn't do that it just wasn't
[07:32] practical in the end so we had to devote
[07:34] all our attention to doing persistent
[07:36] entity streaming
[07:37] um this was in the club like during
[07:39] lockdown so we did all of this while
[07:41] we're all working from home uh we're now
[07:43] in a position uh with the the surf
[07:46] meshing stuff
[07:47] um and I kind of lost my train of
[07:49] thought I was going to say something
[07:49] really good enough for growing worse
[07:51] yeah we know what the critical bet is
[07:52] which is the that's the most important
[07:54] thing in these technology projects
[07:56] because they get to be very large and so
[07:58] sometimes you lose track of what the
[08:00] actual executive is and our objective is
[08:03] to get a second solar system online as
[08:04] fast as possible not just to build
[08:06] server meshing technology but it's to
[08:08] get the second solar system online now
[08:10] we have a rough road map of the
[08:13] different steps we need to do to get our
[08:16] second solar system online and so now we
[08:18] start arguing about the
[08:20] later steps and the strategies after
[08:22] that we're tackling a lot of really
[08:24] difficult problems at the moment server
[08:26] meshing is one of the toughest problems
[08:28] to solve in video to game development
[08:30] and uh we've gone to the point now we're
[08:32] getting to persistent entity streaming
[08:34] uh to the point where it's shippable uh
[08:36] that then kind of opens up lots of
[08:38] opportunities to be able to get this
[08:39] this quite impressive system built so
[08:43] yeah this uh there's good stuff
[08:44] Happening Here
[08:49] so the first the first phase is the
[08:51] separation out of the replication layer
[08:53] that unlocks the Pyro jump gate stuff
[08:55] that also unlocks the surf meshing stuff
[08:57] uh we've been talking about the uh kind
[08:59] of uh zones and Authority but you're
[09:01] much better off talking to a proper
[09:03] engineer about this kind of stuff uh but
[09:05] yeah we're we're getting a good handle
[09:07] on this stuff we're getting a good plan
[09:08] for delivery
[09:10] technology and now we need to build on
[09:13] what we built there defining more sub
[09:16] steps to go out to actually bring power
[09:18] on the hands of the player this is a
[09:21] really complicated system and we had to
[09:24] learn how to do it we there's been a lot
[09:26] of experimentation there's been a lot of
[09:27] invention when we had our initial plan
[09:30] at the beginning of uh 2021 and late
[09:33] 2020. there was a lot of stuff in there
[09:35] that we knew we had to build but didn't
[09:37] quite know how to build it when we
[09:38] actually came to actually build those
[09:40] interesting systems we had to kind of
[09:42] re-found problems we found stuff that
[09:45] was never expected we found limitations
[09:48] to the technology we found limitations
[09:49] of what the hardware could do so we very
[09:52] much had to get our Engineers to invent
[09:53] our way around the problem so this is
[09:55] very much a feedback this is a learning
[09:58] experience to figure out how we need to
[10:00] build surf meshes the key thing that
[10:02] we're doing with this is serve meshing
[10:04] is also tied into the power the delivery
[10:06] the jump gates to get to pyro
[10:08] um it's not quite the same problem but
[10:10] it also kind of is when you actually do
[10:13] a jump to get to pyro where you have to
[10:15] transfer Authority from the Stanton dgs
[10:18] to the Pyro dgs um what we want to do of
[10:21] course is have multiple dgs persist star
[10:24] system but we're separating the actual
[10:27] jump gate stuff from the actual uh surf
[10:29] meshing stuff so that we get to the
[10:31] point so we can actually assure pyros
[10:33] delivery and whilst we worry about the
[10:35] actual uh server meshing delivery so
[10:37] we're actually yeah those are now from
[10:39] our perspective two different problems
[10:40] so very early on uh we're going to be
[10:43] tackling uh what what we're calling
[10:45] separation of the replication layer out
[10:48] from the dgs so that's the thing which
[10:50] replicates all our data it allows
[10:52] communication it's a single source of
[10:54] Truth in memory for this day of the
[10:55] entire universe at any given time that's
[10:57] going to get separated out from the dgs
[10:59] that currently holds all the fun
[11:01] simulation stuff that's happening at the
[11:02] moment uh that will that's a first key
[11:04] step both to delivering pyro all the
[11:08] technical back end for the jump Gates
[11:10] and it's also a kind of first big step
[11:11] for Server meshing uh yeah so that's
[11:13] what we're going to be tackling
[11:14] initially
[11:23] the design that we're putting in now
[11:24] we've had for a couple of years and
[11:26] we've been refining it over that time
[11:27] and the time we're building building
[11:28] persistent entity streaming there have
[11:30] been bits and pieces of surf meshing on
[11:32] there that we needed to get to get done
[11:34] uh but we're now in a position now to go
[11:36] really uh now we've got system entity
[11:37] streaming down there as a kind of
[11:39] foundational piece that then opens up
[11:41] the opportunity to really kind of uh get
[11:43] this design that we've had that we've
[11:45] found
[11:47] um to really buckle down and actually
[11:48] get it uh dashed out and get the first
[11:50] version out a static server machine like
[11:52] this this is a piece of work that's
[11:54] going to last for quite a long time
[11:55] there'll be ongoing stuff for quite a
[11:57] while
[11:58] moving to the goalie even five six years
[12:00] ago when Mr object container streaming
[12:02] where we started to split up the game
[12:04] into smaller chunks and then moving from
[12:07] there having stuff only partial load on
[12:09] the clients having stuff partially load
[12:10] on the server and then decoupling the
[12:13] persistent State and the next steps are
[12:16] through this tablet more into more
[12:18] logical units to execute the code which
[12:20] actually server matching this though
[12:22] gets really a continuation and over time
[12:26] you the more you understand that's the
[12:27] problem you're more you know what you
[12:29] need to do so
[12:31] um yeah that's why every year kind of
[12:33] most likely we have a summit once per
[12:35] year on this topic for the last 10 years
[12:37] to
[12:38] refine what we do and yeah what exactly
[12:42] we need to do after we go to step Neo
[12:44] that's the critical path to the first
[12:46] step but after that is is how we get to
[12:49] the actual end game which is the dynamic
[12:51] mesh so we all have our views on this
[12:54] but now it's really we're getting out
[12:56] into the grave view like how is this
[12:58] gonna work here's cases we have to deal
[13:00] with like what if a player dies into a
[13:03] jump Tunnel right what happens to the
[13:05] missions right uh what happens to the
[13:07] persistent state of these tunnels do
[13:09] they exist do they not exist do they
[13:10] respond so we talk about necessarily the
[13:13] gameplay aspect of it like I'm I'm
[13:15] giving you guys example now but really
[13:16] the technology aspect of it so do these
[13:19] zones keep existing how do we reuse them
[13:22] do we want to reuse them uh what's the
[13:25] effect on PES right for for this Zone
[13:28] transition as subsystems so that's been
[13:30] the highlight of it has been really
[13:33] about identifying that and then how we
[13:35] make it dynamic
[13:44] the best thing which came out of today
[13:46] is the same which comes again out of
[13:49] summits it's to get alignment that
[13:52] everyone gets the same idea into their
[13:54] mind in a detailed level this is
[13:58] after day two I think the biggest
[14:00] question is still how we gonna how we're
[14:02] gonna operationalize the dynamic mesh
[14:05] and so uh you know we still have these
[14:08] big statements like oh we're going to
[14:09] request additional dgs's and then assign
[14:12] them now we're gonna have to flesh out
[14:14] how do we request them how do we know
[14:16] they're ready how do we assign them how
[14:18] does that actually work uh is going to
[14:20] be the key to to the next steps that
[14:24] will then be built over the coming
[14:25] months and of course it's not just us as
[14:27] well as the Strike Team we have uh what
[14:30] 50 or so game teams that are also going
[14:33] to take this code and then have to adapt
[14:35] their all their functionality that they
[14:37] have across uh Star Citizen to use all
[14:39] this cool technology so yeah this is the
[14:41] start of server meshing in this curve
[14:43] form in our case it's cramming a lot of
[14:45] developers into a room uh closing the
[14:47] doors getting to drink coffee and
[14:49] talking a lot it's very much a list of
[14:51] stuff that we've got to do determine we
[14:53] basically have a list of stuff that we
[14:56] need to nail down open questions
[14:58] miscommunications between teams we need
[15:01] to get these three key teams all aligned
[15:03] all pointed in the same direction so
[15:05] they're all fully understand where it is
[15:06] they're building we resolve the
[15:09] technical niggles that we have between
[15:10] these teams so they really understand
[15:12] what it is they're making we correct
[15:14] problems before they happen so we
[15:16] there's misunderstandings within the
[15:18] interfaces between the teams that be
[15:19] quite expensive to fix having a summit
[15:21] like this allows us to fix these
[15:23] problems in advance and fix them much
[15:25] much easily so yeah we need to just uh
[15:27] this is what gives us the solid plan
[15:29] that we're going to be working to for
[15:31] the next year so touchwood we're in a
[15:34] position now to finally push on and get
[15:36] the very first version which is static
[15:37] server mesh in place we're about to find
[15:41] other problems on this journey but we
[15:43] can invent OA we know we can invent our
[15:44] way around these problems so uh yeah we
[15:47] may occasionally get slowed down but we
[15:49] don't get uh we're still determined to
[15:51] deliver this
[15:52] so what did we learn this week well we
[15:55] learned that PES is not just the
[15:56] technical Harbinger we all knew it would
[15:58] be it was also the critical experience
[16:00] necessary to review amend and evolve
[16:04] existing plans for server meshing with
[16:06] the Lessons Learned along the way that
[16:08] it has a variety of Technologies
[16:10] including the long-awaited jump points
[16:12] that will enable the addition of pyro
[16:14] and star systems Beyond and that people
[16:17] really
[16:19] boy do they really love to just sit down
[16:21] for an interview just five minutes after
[16:23] sitting in intense all-day meetings
[16:27] and let me tell you I owe some people
[16:29] some dinners now we'll be back with more
[16:31] traditional ISC features and return
[16:33] visits to the meshing Strike Team Summit
[16:35] in the coming weeks and don't forget to
[16:37] keep your eyes on the robertspace
[16:38] industries.com website and socials for
[16:41] information on the pinning release of
[16:43] alpha 318. it's got Salvage cargo
[16:46] persistence and more and it seems
[16:48] there's a new Scorpius
[16:51] the things you'll learn on Twitter for
[16:53] inside Star Citizen I'm Jared Huckabee
[16:55] and we'll see you all here next week

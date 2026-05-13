# Star Citizen - Calling All Devs: Core Tech Updates

**Video:** https://www.youtube.com/watch?v=hKJfRwjA2RA
**Date:** 2020-08-28
**Duration:** 22:27

## Transcript

[00:08] Hey everybody, welcome to another
[00:09] episode of Calling All Devs, our
[00:11] question and answer series where we take
[00:13] questions from you, the Star Citizens
[00:15] themselves, and pose them directly to
[00:17] our developers over video conferencing.
[00:19] On this week's show, we are tackling
[00:21] some of the most voted up and requested
[00:23] topics from the community. We are
[00:25] talking core tech. We're going to be
[00:27] talking iCache, we're going to be
[00:29] talking global persistence, and then
[00:31] we're going to be talking about server
[00:32] meshing in the end. So, to get us
[00:33] started, we are here with
[00:36] Chad McKinney. Chad, how you doing, man?
[00:38] Doing great. Thanks for having me. Thank
[00:40] you for being on the show.
[00:41] Now, we are we are coming to you for
[00:44] this because you are you are part of a
[00:46] team of folks who work across the
[00:48] studios across the world who are all
[00:51] heavily invested in this core tech that
[00:54] that will allow us to expand Star
[00:56] Citizen to the size and the scope that
[00:59] we that we all want it to be. Um so,
[01:02] basically, let's just start the
[01:04] conversation.
[01:05] Talk to us about iCache.
[01:07] Yeah, iCache is effectively kind of
[01:10] shorthand for a collection of services
[01:12] that are interfacing with the game
[01:14] servers and back-end databases to allow
[01:18] us to both write out and query data
[01:21] efficiently and in a fault-tolerant way.
[01:24] So, this is really important because
[01:26] right now, the way the the servers are
[01:28] working, they're using an in-memory kind
[01:30] of database for this for this global
[01:32] data.
[01:33] Ultimately, that's not feasible. We if
[01:36] we need to build it out so that things
[01:38] can work in a mesh. In order for that to
[01:40] happen, we need to actually write this
[01:41] out into a place that all the servers
[01:43] can look at it and agree on what the
[01:45] state of the world is. So, the iCache is
[01:48] our solution to make that access
[01:51] scalable. And right now, the iCache
[01:54] infrastructure on the back end is
[01:56] actually largely done, and it's it's um
[02:00] now at the point where game side, we're
[02:03] hooking up our game code in order to
[02:05] correctly write out the data uh
[02:08] efficiently, query the data efficiently,
[02:10] as well as fix up some of the game code
[02:12] systems that had previously maybe had
[02:14] some assumptions that don't work
[02:16] correctly within the new context. Uh so,
[02:18] that's kind of where we're at at the
[02:20] moment. Effectively, what we're trying
[02:22] to do is cache certain amounts of
[02:23] certain data that we know that we need.
[02:26] And this prevents us from hitting the
[02:28] database, which is a more expensive
[02:30] access. So, and by caching it, we're
[02:33] optimizing our access. And we're also
[02:36] able to build in a certain amount of
[02:37] fault tolerance in the system through
[02:39] various techniques like duplication and
[02:41] regeneration. So, this gives us fast
[02:44] access for the information that we need
[02:46] when we need it.
[02:47] Um and then, at the same time
[02:50] on the game side, okay, I just lost my
[02:52] train of thought. I'm sorry.
[02:54] Take two. So, so yeah, it's effectively,
[02:57] like like you mentioned, like the
[02:59] difference between
[03:00] having a hard disk where the data is
[03:02] stored for long-term storage, that's
[03:05] like more permanent, and your RAM that
[03:07] it kind of effectively gives you faster
[03:09] access that you're happier to write to,
[03:12] but you know that it's temporary. So,
[03:14] the iCache storage is storage that's not
[03:16] meant to actually capture and define the
[03:19] state of the world, but rather is an
[03:21] intermediary between the final state of
[03:23] the world, which is the actual database.
[03:25] So, it's a yeah, that that's a good
[03:27] analogy. Uh so, you did say earlier that
[03:30] we're pretty much finished. I want to
[03:32] get a little more little more clarity on
[03:33] that. That that's that doesn't mean
[03:36] uh what does finished finished mean?
[03:37] Sure. So, I think to
[03:39] to clarify here, what I'm talking about
[03:42] is that the particular services that
[03:45] compose the the infrastructure on the
[03:48] back end for the iCache
[03:50] framework is largely written. So, the
[03:53] back-end engineers have written it,
[03:54] they've tested it, um the APIs have all
[03:57] been negotiated. So, we we have to
[03:59] define not only the how the service
[04:01] works, but also like how it communicates
[04:03] with the game server. We've done all
[04:05] that work. We've built out the structure
[04:07] of the data, how the database is laid
[04:09] out, all that's done. And so, now it's
[04:12] taking this this system that we have and
[04:14] actually connecting it to the game
[04:16] itself.
[04:17] Yeah, and to be clear, like we have
[04:19] known for a long time that we're going
[04:21] in this direction. So, on the game code
[04:23] side the changes that are happening
[04:25] right now aren't normally transformative
[04:29] or or refactors or anything like this.
[04:31] They're smaller sets of changes just
[04:33] just to make sure that we have followed
[04:35] all the best practices
[04:37] Awesome. all over the place and that
[04:38] things are persisting correctly and that
[04:40] the the querying mechanisms that we're
[04:43] using use the new API. So, there is some
[04:45] small changes as far as like the API
[04:47] that you use to query data. There's some
[04:50] new concepts that we've introduced
[04:52] specifically to help leverage um uh in
[04:54] order that and specifically to allow us
[04:57] to support things like physicalized
[04:59] inventory and the new kind of cargo
[05:02] changes that we're going to support that
[05:04] are also going to be working with
[05:05] physicalized inventory. So, we we have
[05:08] been going in this direction, but we
[05:10] need to do some final work on the game
[05:11] code in order to make it operate
[05:14] correctly, but also we need to make the
[05:16] fundamental querying mechanisms and
[05:19] physicalized inventory infrastructure on
[05:21] the game side to support the game
[05:23] systems on top of them. So, it sounds
[05:25] like because we've known we were working
[05:27] towards this, we've we've we've already
[05:29] worked on a lot of precursors. We've
[05:31] already
[05:32] uh uh put our proverbial ducks in a row.
[05:35] Yeah, we've we've been heading in this
[05:37] direction for actually years. So,
[05:38] whenever we started on client-side
[05:41] streaming, we know at that point,
[05:43] actually before that that we would be
[05:45] ending up here, and then the ultimate
[05:47] destination is spoiler alert later,
[05:49] server meshing. So, I think we've made
[05:52] tremendous progress, and we've done some
[05:54] rather transformative changes in some of
[05:56] the game like underlying game engine
[05:59] code that I think um is is amazing. So,
[06:03] I I think that we've made a lot of
[06:05] progress. I want to say that we're um
[06:09] closer to the end than the beginning is
[06:11] how I would put it. I think I think
[06:12] that's fair and safe to say. I
[06:13] appreciate that. Um and when iCache
[06:17] comes online, I know it's I know it's a
[06:19] a stepping stone towards these other
[06:20] things we're going to talk about, but
[06:22] what kind of immediate impact would it
[06:25] have for the players? Like how how will
[06:27] the players recognize
[06:29] when iCache is in and working? What what
[06:31] what How does their experience change?
[06:33] Sure. So,
[06:35] I would say that some of the the
[06:37] most apparent changes that will come
[06:38] about is that we're going to have both a
[06:41] combination of better response on on
[06:44] server and service queries for this kind
[06:46] of persistent data as well as better
[06:49] fault tolerance and and scalability.
[06:52] What that will like directly manifest as
[06:55] all the different times in the game
[06:57] where you're end up interacting with
[06:58] these databases, which is constantly.
[07:00] It'll be things like when you spawn a
[07:02] ship, whenever you change your your load
[07:04] outs, or your helmet, or your armor,
[07:06] whenever you change something about your
[07:08] vehicles, whenever you purchase
[07:10] something, whenever you deal with cargo.
[07:12] There's all these places in the game
[07:13] where you're interacting with the
[07:14] persistent state of the game. And in all
[07:18] those places
[07:19] right now, we're struggling both with
[07:21] scaling to support the number of players
[07:23] that we want, especially whenever we
[07:24] have like a big uh event or, you know,
[07:28] new release, we're really pushing on the
[07:30] current infrastructure that we have.
[07:32] Um but on top of it, it'll make it more
[07:34] fault-tolerant so that whenever
[07:36] inevitably something goes wrong the game
[07:38] just doesn't fall over. With the current
[07:41] what we call a monolithic pCache that we
[07:44] have, if that service goes down, that's
[07:47] just it for all persistence queries for
[07:49] the entire, not just server, but all the
[07:51] servers. So, this is clearly, you know,
[07:54] not the right place to be.
[07:56] Um but this new set of services
[07:59] addresses that by not, you know, putting
[08:01] all your eggs in one basket, as it were,
[08:03] and allowing for a multiplicity of
[08:06] handlers to be able to react to any
[08:07] request. So, iCache. iCache.
[08:10] iCache. Okay. So, the next
[08:14] step beyond iCache in these pillars is
[08:17] is
[08:18] it's kind of server meshing and global
[08:19] persistence, but for the sake of this
[08:21] conversation, we'll move one in front of
[08:22] the other here. Let's Let's go to Let's
[08:24] talk global persistence.
[08:26] Once we have iCache, how does that take
[08:29] us to global persistence? Right. So,
[08:31] global persistence is something that is
[08:34] supported now that we have this iCache
[08:37] framework. What it means is that we're
[08:39] going to start writing out data about
[08:41] the state of the world that does not
[08:43] include player account data. Previously,
[08:47] we would only store data that was
[08:50] relevant to a particular player's
[08:51] account, things like their ships, their
[08:54] weapons, their item port attachments.
[08:57] Perhaps you stole something from
[08:58] somebody, we'll store that. But that's
[09:00] where it stops. We want to do more
[09:02] though. The game that we envision is
[09:03] this incredibly high-fidelity,
[09:05] high-persistent world where your actions
[09:08] matter, you have an impact on the world.
[09:10] Well, the only way to make that work is
[09:12] is to actually store out the state of
[09:14] those changes and to store out the state
[09:16] of the world itself. So, that's what I
[09:18] I've been calling global persistence.
[09:21] So,
[09:22] the reason why you haven't done this to
[09:24] date though is that the amount of data
[09:26] that we're talking about is like a
[09:28] magnitude or two more. It's It's much
[09:30] much more data.
[09:32] And if we tried to write that out with
[09:33] the current system, it would just, you
[09:35] know, cough over and die. It would not
[09:37] go well. So, iCache gives us the
[09:40] scalability to actually deal with that
[09:43] kind of that scale of data.
[09:45] Um but on top of that, it's a
[09:47] requirement to support server meshing.
[09:51] But before we get to server meshing, you
[09:53] know, global persistence really is, in
[09:55] my opinion, a feature in and of itself,
[09:57] and it's part of the vision of of the
[09:59] ultimate version of Star Citizen. So, to
[10:02] me it was very important that we make
[10:03] sure that we execute on this, that we're
[10:06] finding all the places in the game that
[10:07] we want to support this kind of
[10:10] persistent state, and make sure that we
[10:12] update all the game systems to work
[10:13] accordingly. So, we actually have a
[10:15] version of server or sorry, we actually
[10:18] have a version of global persistence
[10:20] right now. It's just not apparent to
[10:22] players because when they log out of the
[10:23] server and log back in, they'll go into
[10:26] a different server instance often, and
[10:28] they'll see something different. And if
[10:29] the server that they're on is crashes
[10:32] and recovers, the history that it had is
[10:34] gone. So, we actually are maintaining
[10:37] much of this data, but it's just not in
[10:40] a way that
[10:41] players will really ever tangibly see.
[10:44] And where we're going is making it more
[10:46] permanent and on top of that,
[10:47] recoverable. And so that as you get into
[10:51] the game, we're going to be able to
[10:52] expand out using server meshing, the
[10:55] number of players within effectively an
[10:57] instance or network we'll start calling
[10:59] a shard. And as that expands, you'll be
[11:02] playing more and more in effectively the
[11:04] same kind of world line or or set of
[11:06] history.
[11:07] And your experience will be that you
[11:09] will see you and your play groups,
[11:12] you know, your effects on the world
[11:14] become more permanent. And the idea is
[11:17] that for all of the players in the game,
[11:19] they end up seeing a version of the game
[11:20] that
[11:21] is effectively permanent for them. It is
[11:24] from the time they start playing the
[11:25] game to the time that they end,
[11:28] everything is there, right? And to be
[11:30] clear though, there are going to be sets
[11:32] of gameplay around, you know, maybe
[11:34] dynamic events in the game that happen,
[11:36] or there will be places in the game
[11:38] where maybe there's more maintenance
[11:40] that will recover some of the the the
[11:43] broken and messiness that accrues from
[11:45] all this player behavior.
[11:47] Uh you can imagine that if you have
[11:48] maybe a military base or or maybe a high
[11:51] traffic like high high cost neighborhood
[11:54] in like area 18 or something like that,
[11:56] they're going to have more facilities in
[11:58] place to maintain it, to keep it clean
[12:00] and fixed up. Whereas maybe a seedier
[12:03] location perhaps in pirate space is
[12:05] going to
[12:06] you know, all the mess that's left
[12:08] around is going to stick around for a
[12:09] while. At that point, we need to talk to
[12:11] Clive. We need to get the skinny on
[12:12] server meshing. So, Chad, I'm going to
[12:13] let you go. Thank you so much for taking
[12:15] the time to be here on the show. You're
[12:16] always a a pleasure to have on.
[12:18] Thank you for having me. All right, take
[12:20] care, man.
[12:21] All right. So, uh costume change. It's
[12:24] the next day, and my next call is for as
[12:27] promised, Clive Johnson. Clive, how you
[12:29] doing, man?
[12:31] Hey Jared, I'm good. How are you? I'm
[12:32] doing well. Thank you for taking the
[12:33] call. Uh we are talking core tech
[12:36] updates for Star Citizen. Uh we just got
[12:38] done talking to Chad McKinney about uh
[12:40] service streaming and iCache and global
[12:42] persistence.
[12:44] Uh and we are now coming to you for a
[12:46] little talk about uh something we like
[12:48] to call server meshing. So, um because
[12:51] every show is somebody's first show, and
[12:53] there might be folks who've joined the
[12:54] project who don't know what it is what
[12:56] we're talking about. Um let's just start
[12:58] by introducing
[12:59] uh the idea of server meshing, what it
[13:01] is, and why we're pursuing it. And then
[13:03] we'll go for an update after that.
[13:05] Okay, well, currently um
[13:07] um
[13:08] players play the game, they connect to a
[13:10] server, and it's a single server
[13:14] uh holding up to 50 clients
[13:17] running the entire simulation on that
[13:18] one server.
[13:20] Um
[13:21] that's
[13:22] um going to be a a a
[13:25] severe limitation um
[13:27] because obviously there's a finite
[13:29] amount of processing available on my
[13:30] computer.
[13:31] Uh so, there's a finite number of
[13:32] clients that it can support. Mhm. So, as
[13:35] we want to expand the
[13:37] um
[13:38] the number of concurrent users, the
[13:40] number of active users in the same
[13:42] simulation at the same time, we need to
[13:44] split that simulation off over multiple
[13:46] servers.
[13:47] So, the original idea is to have um
[13:50] multiple servers running different parts
[13:52] of the simulation. So, you might have a
[13:54] server running
[13:56] uh
[13:57] the game at Port Olisar, you might have
[13:59] a different server running the game at
[14:02] say, Levski.
[14:04] And that's great, and they're completely
[14:05] independent.
[14:07] But the problem then becomes how you get
[14:09] from Port Olisar to Levski or back again
[14:13] if
[14:14] the um simulations are running on
[14:16] different servers. So, we need to
[14:17] connect the servers together. And what
[14:19] that basically means is we'll have all
[14:21] these servers running different parts of
[14:22] the simulation, and they will
[14:24] um selectively choose which other
[14:26] servers to connect to, so that the
[14:28] players can transition back and forth,
[14:31] or that they can share parts of the
[14:33] simulations together.
[14:35] Um
[14:36] and then they'll drop that connection
[14:37] when it's no longer needed, and they can
[14:39] make new connections with other servers.
[14:41] All right. So, now that we've uh
[14:44] now that we've we've reiterated for
[14:46] some, we've introduced others to the
[14:47] idea of server meshing, uh where are we
[14:50] at right now in the process? I know I
[14:52] know we've got teams working on iCache,
[14:54] and uh global persistence is on the way,
[14:56] and both of those are absolutely
[14:58] necessary and crucial to server meshing
[15:00] as we talked with Chad McKinney. But
[15:03] uh your team's not sitting there just
[15:04] waiting for them to finish their work.
[15:05] You guys are You guys are in progress
[15:08] now. Uh tell us tell us what you're
[15:09] working on now.
[15:12] Uh well, right now um we're working on a
[15:15] couple of things. We're working on um
[15:18] getting the time synchronization uh
[15:20] correct, which
[15:21] probably doesn't sound very server
[15:23] meshing related.
[15:24] But we've been aware for a while um that
[15:27] there's been
[15:28] um lag
[15:30] um rubber banding and kind of desync
[15:32] issues present in the main game um
[15:35] obviously with all these servers
[15:36] connected to each other in the server
[15:38] mesh, that's going to make the problem
[15:40] worse. That's the thinking, so we kind
[15:42] of need to address it a bit now. Um we
[15:45] can't promise that we're going to
[15:46] completely solve it first go, but we're
[15:48] we're investigating the situation.
[15:50] Uh and trying to make as many
[15:51] improvements as we can. And a lot of the
[15:53] issues seem to come back to
[15:56] time synchronization between
[15:58] um
[15:59] the clients and the server. And in
[16:02] server meshing, just to remind everyone,
[16:04] servers will be connected to each other,
[16:05] so one server will be acting as a client
[16:08] of another and receiving updates from
[16:10] it. So,
[16:11] they could too experience um rubber
[16:14] banding and desync and so on. So, we're
[16:16] going to try and make sure that clock
[16:17] synchronization is right.
[16:19] Um so, it's it's not just about getting
[16:22] the um
[16:25] the clocks actually in sync. It's
[16:27] more fundamental than that. Some of the
[16:28] problems we found are changing
[16:30] how the engine actually handles the
[16:32] concept of time, which sounds quite
[16:35] grand, maybe. But yeah, it's it's
[16:38] basically it's just fixing a load of
[16:39] bugs that have crept in over the years.
[16:41] It's uh it's quite tricky, and it's
[16:43] quite
[16:45] um detailed work, but yeah, we're
[16:47] getting through it. We're getting seeing
[16:49] some good results now.
[16:51] Hopefully
[16:53] that will be done soon. And then yeah,
[16:55] we're also looking at
[16:57] getting two servers talking to each
[16:59] other, which may surprise some people
[17:00] that that's not the first thing that we
[17:02] did.
[17:03] But
[17:04] it kind of was cuz you know, obviously
[17:06] the first thing you try when you're
[17:07] trying to build server meshing is you
[17:09] just
[17:09] try and connect two servers together,
[17:12] and you see what happens. And we weren't
[17:14] really expecting it to work, and we
[17:15] weren't too surprised when they didn't.
[17:17] But it was quite a useful exercise, and
[17:19] it showed
[17:20] kind of what didn't work. Um
[17:24] and what we would have to change to make
[17:26] it work. So, we kind of built those
[17:28] tests out, and people are working
[17:30] through them right now. Uh and we're
[17:32] getting pretty close to where we can
[17:34] give it another go and have a a
[17:35] reasonable shot at
[17:37] um
[17:39] the two servers actually being able to
[17:41] communicate. So, the the the fundamental
[17:42] problem there is that
[17:45] the engine's based on the assumption
[17:47] that
[17:48] um a server thinks it owns the game
[17:50] session, which with server meshing
[17:52] obviously they're sharing the game
[17:54] session between them. So, we've got to
[17:57] make
[17:58] one server set up, and it kind of has
[18:01] the game session, and then another
[18:02] server wants to join it, and it goes,
[18:04] "Okay, yeah, you can share into it. You
[18:05] you you now have as much authority and
[18:08] ownership of this game session as I do."
[18:11] It's a bit of a shift for
[18:13] how the game code and the the network
[18:15] code thinks about um game sessions and
[18:18] how everything relates to each other.
[18:20] So, throughout the game code, well,
[18:21] throughout the engine, there's plenty of
[18:23] checks going, "If this is a server, do
[18:26] something like this. If it's a client,
[18:28] do something like this." Um
[18:30] which doesn't fit with kind of the
[18:31] server meshing model where you've got
[18:34] an authoritative server, you've got a
[18:35] non-authoritative server, and you've got
[18:37] regular game clients. So, all these kind
[18:39] of if statements
[18:41] were based on the assumption that you
[18:43] could only ever have one authoritative
[18:44] server. So, they all needed to change.
[18:46] We're talking like thousands of
[18:47] locations in the code.
[18:49] So, we kind of did an audit. Um we split
[18:52] that up into hundreds of tasks uh for
[18:56] people to look at. That got spread out
[18:59] across
[19:00] basically every team has an engineer in
[19:02] it.
[19:02] And they've been working through it. Um
[19:05] nearly at the end. There's a few
[19:06] stragglers left to do, but we're nearly
[19:08] done now with the change. It was this
[19:09] new
[19:10] Excuse me.
[19:11] This new API that basically says, "Am I
[19:14] the machine that has authority over this
[19:17] entity? If I am, I can do it this way.
[19:19] If not, I'm supposed to do this
[19:20] instead."
[19:22] Um so, that was a massive change, and
[19:23] that in itself is getting
[19:26] put out into the new builds, and you
[19:27] can't see any changes. And that's a good
[19:30] thing because it shows that we're not
[19:31] breaking stuff by making these changes.
[19:32] So, it's it's an early test.
[19:35] Um
[19:36] I I think we're doing okay. So, the the
[19:38] idea was um to try and get as many of
[19:41] the
[19:42] the kind of um the tasks
[19:44] as much of the work done early where it
[19:47] might have a knock-on to other teams, so
[19:48] like changing how
[19:50] other people write code to decide
[19:52] whether something should be handled
[19:54] authoritatively or not.
[19:56] Um how they might handle time, any any
[19:58] of those kind of changes we want to do
[20:00] as early as possible. So from this point
[20:02] on, people are writing code the correct
[20:04] way and we've got less to go back and
[20:06] kind of revisit. Got you. Um and because
[20:08] there's such a a huge amount of code
[20:11] that's already been written,
[20:12] we're kind of expecting it to take a
[20:14] while for those changes to get um
[20:17] to get worked through.
[20:18] So while that's going on,
[20:20] we the network team are kind of working
[20:22] on getting the servers connecting to
[20:24] each other.
[20:25] Um also done some other changes to it
[20:28] like headless clients and all things
[20:30] good to try and allow
[20:32] um them to be used for automated
[20:34] testing. So that when we get these
[20:36] server meshes up and running, we can
[20:38] automatically test them rather than have
[20:40] to UI try and sort these things out. Um
[20:44] yeah, so there's there's a lot of
[20:45] different tracks all kind of progressing
[20:47] in parallel. Um
[20:50] and we're we're making progress.
[20:52] It's not easy.
[20:54] It's a lot to cover.
[20:56] I think overall, it sounds like between
[20:57] the conversations with you and and Chad
[20:59] that we're making some pretty good
[21:00] progress. Uh we're generally happy with
[21:02] where we're at.
[21:04] Um
[21:05] yeah, anything else you want to add
[21:07] before I let you go?
[21:09] Um no, I don't think so. Um
[21:13] have I forgotten something? No. No,
[21:14] that's all good.
[21:17] All right, well that about does it for
[21:18] this episode of Calling All Devs. I want
[21:20] to give a very special thanks to Chad
[21:21] McKinney and to Clive Johnson for for
[21:24] stepping outside their comfort zones a
[21:26] little bit and and speaking with us very
[21:28] candidly about the progress of their
[21:29] work. It's it's not always the easiest
[21:31] thing to do.
[21:32] Uh but we always appreciate it when they
[21:34] can.
[21:35] Um and then just one more word about
[21:37] iCache, server meshing, global
[21:39] persistence, all those things. Those are
[21:40] major signposts in the road of Star
[21:42] Citizen's development, but the work does
[21:44] not end there.
[21:45] Uh while we're feeling very good about
[21:47] our progress and as I think Chad
[21:48] probably put it best, we're closer to
[21:50] the end than we were to the beginning.
[21:52] Uh we will we look forward to continuing
[21:54] to update you on the progress of not the
[21:57] just these features, but all the
[21:58] features of Star Citizen.
[22:00] Uh these ones and the ones beyond. So
[22:02] for Calling All Devs, I'm Jared Huckaby.
[22:05] Until next time.

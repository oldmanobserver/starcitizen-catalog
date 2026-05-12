# Star Citizen Live | Tech Talk with Benoit Beausejour

**Video:** https://www.youtube.com/watch?v=k1bXLQ5U-w8
**Date:** 2026-02-05
**Duration:** 2:04:09

## Transcript

[00:05] Hi everybody. Welcome to Star Citizen
[00:08] Live Tech Talk with Benois Bose. I'm
[00:11] your host Jared Huckabe. And if you've
[00:13] never seen Star Citizen Live before,
[00:17] lucky you. No, it's where we take
[00:19] usually about an hour out of our week
[00:22] and we chat with developers on these
[00:24] special shows that we do with our good
[00:25] friend uh chief technology officer and
[00:28] all around swell guy Benois Boseour. Uh
[00:31] we usually take a bit longer. Last time
[00:33] we took three hours. The first time uh
[00:36] the time before that it was close to
[00:37] three hours. It was maybe two and a half
[00:39] hours. This time we're clocking in at
[00:41] about two hours because we have meetings
[00:43] that we have to go to, you know, but
[00:45] about at about two hours. So, um, yeah,
[00:52] I ran out of gas. What else do I do in
[00:54] the intro?
[00:56] >> Oh, I got to introduce the person. So,
[00:58] uh, I've mentioned this person in Benoa
[01:00] Bose a few times. Uh, so let's go ahead
[01:02] and meet Benois Bose. Benois.
[01:06] >> Hi.
[01:06] >> Hi.
[01:08] >> I have to say I'm impressed with your
[01:09] pronunciation.
[01:11] >> It's been like 12 years now.
[01:13] >> No, but it keeps getting better every
[01:16] time. It's better. I I I I I practice
[01:18] privately.
[01:19] >> There you go. I know. Thank you
[01:21] everybody. Hi everybody.
[01:22] >> Tell everybody who you are and what you
[01:23] do for Star Citizen.
[01:24] >> So I'm Beno.
[01:26] >> You want me to say it again or no? Okay,
[01:28] good. Uh I am the chief technology
[01:30] officer at CI. So
[01:33] >> I guess the best way to describe it is
[01:34] if it has a computer chip in it, I'm
[01:37] kind of involved in a way. So, I run the
[01:39] engineering teams, uh, Star Engine
[01:42] Group, uh, and I meddle with all areas
[01:45] of the game, trying to get us forward to
[01:48] our 1.0 release. Metal is a good word.
[01:51] >> Yeah.
[01:52] >> Uh, my blood sugar is weird or
[01:54] something. I can't see with my glasses.
[01:55] I've seen better without my glasses. So,
[01:57] we're going to take off my glasses.
[01:58] Although, I'm going to have to do the
[01:59] show like this. [laughter]
[02:01] Now, I can't see anything else, but I
[02:03] can see this. It's important. All right.
[02:05] So uh on these shows on these the these
[02:09] special tech talk shows I think we are
[02:11] going to cover a variety of topics. So
[02:13] the these topics have all been discussed
[02:15] uh ahead of time where you worked out uh
[02:17] Ben W as involved as he is uh with so
[02:20] many aspects of the of the game still
[02:22] needs to be afforded the opportunity to
[02:23] check in with other directors and get
[02:25] updates on what they're doing and
[02:26] everything so that we can pro provide
[02:27] you the most up-to-date and accurate
[02:29] information. So, this will be a this
[02:31] will be a show that's less about taking
[02:32] questions uh from the chat or from the
[02:35] community and more about just a very
[02:37] candid conversation about the current
[02:39] state of the game, the development,
[02:42] where we've been, where we are, where
[02:43] we're going, that stuff like that. So,
[02:45] I've divided the show up at this point
[02:48] into sort of three things. I'd switch
[02:50] teams for Benois. [laughter]
[02:56] >> Oh, that wasn't in chat. I was just
[02:58] talking myself. [laughter]
[03:00] No, that wasn't Chad. Um, uh, send a DM
[03:04] after the show. Uh, that's not
[03:07] appropriate. Uh, so we're going to start
[03:09] the show with updates to existing
[03:11] endeavors. So, this is the third one of
[03:12] these we've done. We've we've talked
[03:14] about a couple of things. So, I want to
[03:15] update on a few of these topics that
[03:16] we've been covering through this before
[03:18] the second section where we get into
[03:20] some new things that we haven't
[03:22] discussed.
[03:22] >> So, let's start with the biggest one,
[03:25] which is server mission.
[03:26] >> Yeah,
[03:27] >> we're now a year on. We talked about it
[03:29] ad nauseium leading up to this thing. Uh
[03:32] it's now been out a year. This is
[03:34] probably the last time we're going to
[03:36] talk about it for a while again until
[03:38] dynamic comes and we're not going to put
[03:40] any dates on that. So So let's just
[03:43] let's put the story of server meshing.
[03:45] Let's put a button on the story of
[03:46] server meshing. Sure. And I'll break it
[03:48] down into four sections.
[03:50] >> How's this gone? H how's this last year
[03:52] been? Well, so like if I recap like uh
[03:56] almost same date this year, last year
[03:58] >> almost, yeah,
[03:59] >> was when we actually launched 4.0 and
[04:02] server meshing actually went to the live
[04:04] environment. And so yeah, it's it's kind
[04:06] of the one-year anniversary of the of
[04:09] the tech being available for all
[04:11] players. Um it's been surprisingly
[04:14] solid. Uh I I like to say that this way
[04:17] because it's a very large system.
[04:20] uh but it has been uh it has given us
[04:25] just good foundation for what we had to
[04:28] do last year in terms of the content
[04:31] drive that we've pushed forward uh the
[04:33] performance improvements that we wanted
[04:35] to deploy. It was like we we were
[04:37] expecting a lot more turbulence with the
[04:40] release of server meshing than we've had
[04:42] in a year. it's been a very very stable
[04:44] system uh overall and so I would say
[04:47] like you know if I look back at the year
[04:50] obviously there's always problems you
[04:51] know with new technologies but it server
[04:54] meshing itself has been very very very
[04:56] solid for us okay so in the quite
[05:00] frankly years leading up to it talking
[05:03] about it it began to get this
[05:07] mythology that it was going to be this
[05:09] silver bullet that it was going to be
[05:10] this one one one stop uh fix that was
[05:13] going to fix so many issues.
[05:15] >> It didn't fix every issue in the world.
[05:17] It was never going to fix every issue,
[05:18] but I want to talk about what it has
[05:19] enabled for us in this last year. So,
[05:22] what are what are some of the benefits
[05:24] that we can draw direct line from server
[05:26] meshing that we've experienced in the
[05:28] last year?
[05:28] >> Well, like if you if you walk back to
[05:30] the the start of an experience before
[05:33] 4.0, so before server meshing got
[05:35] introduced,
[05:36] um you know, a server crashing, that was
[05:40] the end of your session, right? You
[05:41] would lose your ship, you would lose
[05:42] your cargo, everything would disappear.
[05:44] You'd have to reconnect, restart the
[05:46] client, start over, right? Uh I mean,
[05:50] anybody who's lived through the first
[05:52] years of development of the project know
[05:54] how intense this was, right? And so the
[05:57] first thing that uh that server meshing
[05:59] brought us is is server recovery. And so
[06:03] because of the fact that the replication
[06:04] is separated from the simulation, when a
[06:07] game server crashes, which is where most
[06:09] of the crash risk exists,
[06:12] >> uh well the sim the the state of the
[06:14] replication is still good. So we just
[06:16] tell you, hey, we're getting another
[06:17] server. You stay there and when it comes
[06:19] back, we can recover exactly where you
[06:21] were. You don't lose your ship. You
[06:22] don't lose your cargo. You don't lose
[06:24] your materials. Um, and I think that's
[06:26] been a very very big, it's a kind of the
[06:29] unsung hero feature of server meshing.
[06:31] Uh, it helps with, you know, engagement,
[06:33] playing longer sessions, finishing
[06:35] missions. Uh, and so for me, that's like
[06:38] one of the big big big uh pluses that,
[06:41] uh, was brought in with server meshing.
[06:44] Um,
[06:45] on top of that, and we we did have some
[06:47] crash isolation to be clear in 324 and
[06:50] before, right? But what what server
[06:52] meshing really brings also on top of
[06:54] that is crash isolation. So if a server
[06:57] is in charge of the crusader area and
[07:00] he's the one running into issues, then
[07:02] only that area is affected. And so the
[07:04] player who's, you know, bounty hunting
[07:06] in pyro or something like that, he's
[07:07] completely safe from from this crash. Uh
[07:10] and that just the perceived stability
[07:12] has increased a lot uh based on that on
[07:14] top of all the work we've done to
[07:15] prevent servers from crashing in the
[07:17] first place. Uh but just this this whole
[07:20] setup has made the game a lot more
[07:22] stable in in that sense. Um so that's
[07:26] just the kind of meat and potatoes of
[07:28] what meshing has brought us. But the the
[07:30] the key bit it brought us also is much
[07:33] larger player counts. Uh and so we used
[07:36] to be limited to 100 players uh per
[07:38] server which had the whole universe to
[07:40] simulate. Now we've got a series of
[07:42] servers simulating the simulating the
[07:43] universe. So we oscillate between caps
[07:46] of 600, 700, 800. We're still
[07:49] experimenting going higher uh with this
[07:51] depending on multiple factors that cap
[07:54] changes for the moment. But uh just the
[07:56] fact of having more players in the same
[07:58] shard means you can have an event where
[08:00] 200 people show up at one area.
[08:02] Surprisingly enough, we've also
[08:04] discovered things through this that
[08:05] sometimes game servers actually perform
[08:07] better with more players in one area
[08:11] than one server simulating the whole
[08:13] universe would because he has less
[08:15] entities streamed in and now it's all
[08:17] about updating the components in that
[08:18] area. So, we've seen we've seen certain
[08:21] uh events, you know, cuz players always
[08:23] find a way to, you know,
[08:26] organize something that's should be a
[08:28] problem, but uh there was a 400 player
[08:31] uh uh party uh in one of the bars on New
[08:34] Babage and we looked at the server
[08:36] performance through that and it was
[08:37] actually very very decent. So, we
[08:39] expected a full meltdown, but it was
[08:40] actually good. And so, that enables that
[08:43] experience, right? Obviously, there's a
[08:45] million other problems to solve for this
[08:46] to be a really good experience, but from
[08:48] a server meshing point of view, that was
[08:50] a big win.
[08:51] >> Um,
[08:52] >> you've got a 500 player meetup coming. I
[08:53] just saw some
[08:54] >> I know it's like that becomes a kind of
[08:56] common thing and we love it because
[08:58] that's exactly what the tech is meant to
[08:59] enable.
[09:00] >> Um, and then obviously the the two uh
[09:04] other things that meshing has brought us
[09:06] this year is two new uh solar systems.
[09:10] And so for years we had been stuck in
[09:12] Stanton expanding the Stansson system,
[09:14] more POIs, more planets, more things.
[09:17] And now suddenly we were able to branch
[09:18] into Pyro which was everybody at CIG was
[09:22] really looking forward to that. It was
[09:24] like it was internal tension at when are
[09:28] we going to launch this thing? I've been
[09:29] working on this for a long time. And so
[09:31] that was really a relief to be able to
[09:33] get
[09:34] >> you know players to cross the jump gate.
[09:36] So the jump gate technology obviously
[09:37] comes with meshing and so expanding into
[09:40] two systems in one year
[09:41] >> being able to add yeah pyro in January
[09:43] you know tech preview was you know
[09:45] December the year before but it went
[09:46] live in January and then next goes live
[09:48] in November same same year it's it's
[09:51] >> it's this
[09:54] most common question you you know we've
[09:57] been doing this for a long time now here
[09:59] forget other places we've been doing it
[10:00] just here for a long time and one and
[10:03] one of the most common persistent
[10:04] questions is about the pace of
[10:06] development and and you know you know
[10:09] people have been waiting very long for
[10:11] certain things justifiably so and and
[10:14] and we always and we've always we've
[10:16] always maintained that you know it's
[10:18] development kind of works on a it it
[10:21] builds it builds and it builds and you
[10:22] get more efficient after you build the
[10:24] tools after you build the foundations
[10:25] you stuff like this it gets more
[10:27] efficient you can do more later on this
[10:29] year because of server meshing we were
[10:31] able to kick out two star systems and
[10:33] and we're still going we're still
[10:35] expanding depending on nyx. Uh every
[10:36] patch this year will expand nyx even
[10:40] more. Uh it's the the one in the one in
[10:43] March is looking to uh is looking to
[10:46] expand a bunch of the service stations
[10:48] and and and our first big content drop
[10:51] uh which I'll go ahead and say right now
[10:54] is supposed to be Rockcracker. If you
[10:55] watched uh watched uh what was it
[10:58] called? Citizon Direct,
[11:00] >> me and Names. um you can learn more
[11:02] about that, but we're we're currently
[11:03] working towards that is our is our March
[11:05] release and then and then on on on and
[11:08] on just continuing to build out Nyx
[11:09] until I think in the road to 1.0
[11:13] presentation at Citizen two years ago
[11:15] now uh well a year and a half ago uh uh
[11:18] uh Rich Tyer acknowledged that Castra
[11:21] would be our next system whenever that
[11:22] comes online. So it's just this
[11:25] technology
[11:26] >> it's unlocked the capabilities to do
[11:28] what they're doing. actually we can
[11:30] actually you know start to deliver so
[11:32] many of these things that we've been
[11:33] talking about and working on behind the
[11:34] scenes. Instancing has some role in
[11:36] that.
[11:36] >> Absolutely.
[11:37] >> Absolutely.
[11:37] >> Yeah. Yeah. Completely.
[11:38] >> Um there's one more thing that server
[11:40] meshing brought us that's not to be
[11:42] that's not negligible is a very
[11:45] substantial gain of performance on the
[11:47] game servers in general. So like 324
[11:53] game servers were running, you know, we
[11:55] had a very low bar for acceptance on FPS
[11:57] for game servers because we just had to
[11:59] deal with so much.
[12:01] >> Nowadays like server FPS is is, you
[12:03] know, magnitudes higher. So that
[12:06] actually allowed some of the content
[12:09] we've already produced actually shine
[12:11] because it was working properly. And so
[12:13] that's because servers have less to
[12:15] simulate. We can optimize their
[12:17] workload. We've also reduced even I mean
[12:19] we've talked about this before but we've
[12:20] reduced the size of the game servers
[12:22] because they just have to simulate one
[12:23] area and so overall we're trying to
[12:26] we've meshing has improved server
[12:28] performance by big magnitudes.
[12:32] Um
[12:34] yes chat no my head is not smaller. My
[12:37] hair is just bigger. It was very windy
[12:38] and rainy today and it's just whatever.
[12:42] Uh no I haven't had a dye job. It's
[12:43] grayer than it's ever been. Uh, no we
[12:45] are not taking questions from chat but I
[12:47] I will comment on every one of you
[12:50] commenting on my appearance.
[12:57] Um, so that's static server meshing. We
[13:00] know the next big uh stage of of server
[13:03] meshing is dynamic. Uh, what can you
[13:06] tell us if anything about that? Well, so
[13:08] the the dynamic dynamism in
[13:12] >> dynamism dynamism
[13:13] >> dynamism I guess. So we've we've run
[13:16] we're running out of words internally to
[13:18] define what the next step of server
[13:21] meshing is. Currently we're working on
[13:22] quasi dynamic server mission server
[13:25] meshing which is we're trying to iterate
[13:27] on the static mesh right to bring it uh
[13:30] uh so that if an area is empty right and
[13:33] nobody's there we can spin down a server
[13:35] and if people go to that area we can
[13:37] spin up a server to achieve all this the
[13:40] all of the mechanics required for a full
[13:42] dynamic mesh need to be there. So like
[13:44] mass authority transfer between between
[13:46] servers because when a a server goes out
[13:49] and it has x amount of entities that it
[13:51] currently has authority over those
[13:53] >> it needs to give that to another one and
[13:55] that obviously you don't want that
[13:56] process to lock up the m the the parent
[13:59] server.
[14:00] >> So that whole mechanism is is being uh
[14:02] is what we're working on at the moment.
[14:04] In fact, we've done over the break the
[14:07] team has actually reached a milestone.
[14:09] We were able to run with our internal
[14:11] testers a test of quasi dynamic server
[14:13] meshing internally. So that's good. I
[14:16] mean it's the first test so you know a
[14:18] bit rough but it it basically requested
[14:21] I think 200 servers to run the mesh.
[14:22] That was a little bit of [laughter] but
[14:26] yeah [snorts]
[14:27] our ops teams Ahmed specifically I got a
[14:30] call from Ahmed immediately but anyway
[14:32] so so so [laughter]
[14:34] wait so I you've been calling it quasi
[14:37] dynamic and I've been trying to workshop
[14:39] a new name for you and I've just got
[14:41] just a little bit of dynamism but so so
[14:44] you did your first test of just of this
[14:46] quasi
[14:47] >> Adamic like hey server you try to
[14:49] determine how much you need and the
[14:51] first thing it did was ask for 200 more
[14:53] servers.
[14:53] >> Yeah, exactly.
[14:54] >> Well,
[14:54] >> yeah,
[14:55] >> you know,
[14:55] >> a little bug in the assignment system,
[14:58] but
[14:58] >> that sounds like human nature,
[14:59] >> correct?
[15:01] >> Uh, so that's what we're working on
[15:03] right now. That's the next step for
[15:04] towards the full dynamic mesh, right?
[15:06] Obviously, the goal with the dynamic
[15:08] mesh, just to recap it, is that instead
[15:11] of having a a a subdivision that we
[15:14] pre-make in advance, like currently
[15:16] every patch, we look at the territory
[15:18] assignment is what we call it of like
[15:21] what's coming like, oh, we have an event
[15:22] at this place and you know, most players
[15:24] are going to go to this system and so we
[15:26] adjust the mesh, right? And uh sometimes
[15:29] we get it wrong and it's a very manually
[15:32] intensive process and we don't want to
[15:34] keep doing that. So the goal with the
[15:35] dynamic mesh is to be able to just adapt
[15:38] to where the players are, the cost of
[15:40] the location they're in, to be able to
[15:42] provision compute dynamically up and
[15:44] down. So there's also the unfortunate
[15:47] cost equation in this, right? The
[15:49] current static mesh will always
[15:50] provision a server for every to every
[15:53] territory that's configured. And so
[15:54] there's a little bit of savings we can
[15:56] go and get there. But more importantly,
[15:58] the dynamic aspect of it is to be able
[16:00] to always make sure that the proper
[16:02] compute is available for players when
[16:04] they're in an area doing something,
[16:06] right? So that's the goal.
[16:07] >> Uh Chad's debating whether the servers
[16:10] have actually achieved AGI and have
[16:11] played the game and just like [laughter]
[16:13] like we've played the game, give me 200.
[16:18] U
[16:21] so that's server meshing. Yeah. Last
[16:24] year
[16:26] uh uh
[16:28] last year was coined as the year of
[16:30] playability.
[16:32] >> So uh uh we've just we've just
[16:34] backdoored a whole bunch of play uh
[16:36] playability improvements that server
[16:38] mission which dropped last year enabled.
[16:40] So we've had all of those improvements
[16:43] last year that made the game far more
[16:45] playable than it was in any previous
[16:47] year.
[16:48] >> But that that that phrase has has been
[16:52] used. It's weaponized. It's it's thrown
[16:53] back every once in a while every time
[16:55] somebody encounters any kind of bug
[16:57] whatsoever. So So I want to talk I want
[17:00] to talk and that's not entirely unfairly
[17:03] because everybody's
[17:06] everybody's bug that they're
[17:07] encountering is the most important bug
[17:09] in the universe at that given moment and
[17:10] and that one is not resolved because
[17:12] they're encountering it.
[17:13] >> I want to talk a little bit more about
[17:15] what we did gain last year. So, it's whe
[17:20] whether whether that's the the transit
[17:22] system stuff, the the 30ks finally being
[17:26] killed, the the creatures and boss
[17:28] fights and stuff. Uh when you tell me,
[17:31] how did our year of playability go in in
[17:33] your head?
[17:34] >> Well, so I think that you know,
[17:36] obviously coming from the server meshing
[17:38] improvements, uh there was also some
[17:41] failings at the beginning of the year
[17:43] where we saw I mean transit became a
[17:46] very big problem. That's an example of a
[17:48] system
[17:48] >> only because we tried to use it.
[17:50] >> Yeah. Well, yeah. Or tried to serve you
[17:53] but badly. Uh but the uh you know that's
[17:56] an example of a system that was built
[17:58] years ago that wasn't properly scaled
[18:01] over time. And so when you added dynamic
[18:04] gateways for the transit system plus the
[18:07] meshing situation that became a really
[18:10] problematic system and so that was I
[18:12] think the first order of business once
[18:14] we launched 4.0 you know, was like we
[18:15] need to really take action on transit.
[18:17] And so we talked about this last year,
[18:19] but we did create the transit heroes
[18:22] group uh which was a a coalition of uh
[18:27] volunteers.
[18:29] Uh well, they got volunteered.
[18:31] Volunt
[18:32] >> volunttold. Yes, exactly. uh to come and
[18:35] give a bit of oversight on this to look
[18:38] at the system to see okay what do we
[18:40] need to actually you know have stable
[18:42] elevators and trains and you know make
[18:44] sure that that's always available
[18:46] because the traversal of the game if
[18:48] that doesn't work then the game doesn't
[18:50] work at all right if you can't take an
[18:52] elevator to get out of the habs then you
[18:54] know
[18:55] >> you've got
[18:55] >> good luck right
[18:57] >> so uh the transit heroes team I think
[18:59] has done a fantastic job they haven't
[19:01] re-engineered the system in in that
[19:03] strike team, but they really focused on
[19:06] self-healing strategies, right? If a
[19:08] manager loses a carriage for some
[19:10] reason, for any reason, well, just
[19:12] create another one and get this this
[19:14] thing rolling, right? Uh now, they
[19:17] couldn't fix in this effort. They
[19:19] couldn't rebuild the system. There was
[19:20] fundamental flaws in how it was
[19:22] engineered uh for for server meshing
[19:25] support and so but at least they got it
[19:27] into working condition. So, I do think
[19:28] like if you look at the game now,
[19:30] >> transit is no longer the big problem.
[19:33] used to be, right? Like it actually
[19:35] functions when you need it. Uh now that
[19:37] said,
[19:38] >> most times
[19:38] >> it fixes itself, right? So there it's
[19:40] still getting in a weird state, but it
[19:43] fixes itself. So
[19:45] >> uh you know, we've done more about this
[19:46] and we'll talk about that later.
[19:48] >> We're building the transport system.
[19:50] >> Correct.
[19:51] >> Concurrently. Absolutely.
[19:52] >> So while this team is while this team is
[19:53] repairing the transit system, we're
[19:55] building a new bespoke transport system.
[19:57] >> Right. So, so transport is basically the
[20:00] the fix for this, like the real fix.
[20:02] >> Let's get to the let's get to transport
[20:04] when we when we talk about what's so
[20:06] what what what else did we get last
[20:08] year?
[20:09] >> Uh, well, I got a list here that I I
[20:11] worked out a little bit with Yen's uh
[20:13] just to gather up because the game is so
[20:15] big. So,
[20:15] >> so I'm going to I'm going to limit you a
[20:17] little bit on this time. You you've got
[20:18] you've got
[20:19] >> Okay.
[20:20] >> You've got I'm going to give you five
[20:21] minutes.
[20:22] >> Sounds good.
[20:22] >> I'm going give you five minutes.
[20:24] >> I'm being time
[20:25] >> because we because we do want to get to
[20:26] the new exciting hot. This is important.
[20:30] >> Okay, so we talked about 30k protection.
[20:33] >> My clock.
[20:33] >> Okay,
[20:35] >> go for it.
[20:36] >> Go.
[20:37] >> You should be a producer. Okay, 30k
[20:39] protection. Uh transit improvements,
[20:41] right? To make it stable, h a stable
[20:43] tech base for the content teams. What
[20:45] doesn't show is that to achieve the
[20:47] content we shipped uh in 25, we actually
[20:50] froze a lot of the technology to give
[20:53] the content teams a stable base to work
[20:55] off. before it was a bit more of a
[20:57] mayhem. So, we did that. Um, we uh uh as
[21:03] we built all of this content last year,
[21:05] so a monthly patch was a very heavy
[21:07] cadence.
[21:08] >> 10 patches last year.
[21:09] >> Yeah. Uh, you know, I think that what's
[21:11] really cool is that we've built kind of
[21:13] a library of locations and events that
[21:16] if you start playing Star Citizen today,
[21:18] there's that to do, right? It's like
[21:20] that. We never had that before. like a
[21:22] real set of locations that have like a
[21:23] full-on, you know,
[21:25] >> uh, storyline to follow. So, that's
[21:27] really cool. Uh, in these locations,
[21:29] we're able to ship some creature, some
[21:31] new creatures. So, a lot of new
[21:32] creatures and boss fights. So, we had
[21:33] the first couple boss fights this year,
[21:36] uh, you know, with your mandi,
[21:37] Stormbreaker. Uh, so that's like a brand
[21:40] new, you know, design discipline for us
[21:42] to design boss fights for multiplayer
[21:45] elements. So, that's that's new. Um,
[21:47] spawn and hanger is something that we've
[21:49] actually been able to enable this time.
[21:51] So we tried to enable it in 20 end of 24
[21:54] and that was a bit of a disaster. 25 now
[21:57] spawn in your hanger is there. So if
[21:58] your anger is available, you spawn
[22:00] directly there. That's actually a very
[22:01] large quality of life improvement. I
[22:04] play the game a lot.
[22:06] You know, not having to go to the Habs
[22:08] is fantastic. Uh we've been able to put
[22:10] weather in key locations, including some
[22:12] of those big hero locations we talked
[22:15] about. We're hoping to do more, but you
[22:16] know, for now it actually is there. Um,
[22:20] two new star systems. We talk about this
[22:21] jump gates, which is a whole, you know,
[22:25] a game on its own. Uh, the way it
[22:27] functions is actually super interesting.
[22:28] As you're going through, the zone is
[22:29] moving and you're moving within the
[22:31] zone. It's really a fun system to go
[22:33] through. So, that's that's in. Um, we
[22:36] fixed the goddamn bounty beacons,
[22:39] [clears throat] which is one of the
[22:40] coolest loop in the game. I love it.
[22:42] And, uh, you know, that was obviously
[22:44] not working. So now we've actually got
[22:46] them to work again which is a big a big
[22:48] win. Uh quantum interdiction was in the
[22:50] same uh the same bag where now with a
[22:53] server mash having proper interdiction
[22:55] was kind of difficult. So restoring it
[22:57] was an interesting one. We had to
[22:59] actually build systems to allow that
[23:01] because the not every server has a view
[23:03] of the entire shard anymore. And so in
[23:05] order to interdict cross server you
[23:07] needed to have special tech to do that
[23:09] that fix also quantum linking. Now
[23:12] routing is still
[23:15] >> there's still issues right it's getting
[23:16] there but that at least there's been
[23:18] some quality of life improvements on
[23:19] that side uh that we've done this year
[23:22] freight elevator
[23:24] ongoing [laughter]
[23:25] ongoing ongoing
[23:27] >> we'll have we'll have a whole section on
[23:28] freight elevator
[23:28] >> but there's been a lot of I mean if
[23:30] throughout the year freight elevators
[23:32] have received tons of
[23:33] >> compared to where the compared to where
[23:35] they started when we attempted to
[23:37] >> yes
[23:38] >> push when we pushed them to the
[23:39] forefront or an event in yeah compared
[23:41] to where we started
[23:43] >> but let's
[23:44] >> we talked about server FPS and stability
[23:46] from from the meshing uh and the cleanup
[23:50] that we've put in place uh also we've
[23:53] pushed a at the middle of the year at it
[23:55] came for you guys at the end of the year
[23:57] but actually we merged it at the middle
[23:58] of the year but uh a whole new tech base
[24:01] including at least a year of graphics
[24:02] update including Vulcan uh coming into
[24:05] the game now uh that's that was what
[24:08] will allow us this year to do some some
[24:10] pretty large changes as well. Um, the
[24:13] first weaponized mech. Uh, so the Atlas
[24:16] came in. So that's also a really big
[24:19] boost. We still don't know if it's a
[24:21] vehicle. John Crew and I have a this
[24:24] ongoing feud. He says it's not. I say it
[24:26] is.
[24:27] >> You're dipping into content here. I'm
[24:28] not going to let you count the I'm not
[24:29] going to let you count the content.
[24:31] >> Oh, that's fine.
[24:31] >> I'm not although exists.
[24:34] >> The the jump jets are were a feature. I
[24:36] said the jump jets were feature. Um,
[24:38] >> give you half credit for the
[24:40] >> correct. Uh, [laughter]
[24:42] thank you. Thank you. I will take that.
[24:45] Uh, comm's notification got a big
[24:47] facelift. Uh, that's something that we
[24:49] want to use a lot more of and so we
[24:52] needed the proper tech to be able to
[24:54] render that properly. Uh, and not just
[24:57] the quip lines, which you know, you
[24:59] need, you know, you need more immersion
[25:01] than that. So, that was actually a
[25:02] pretty big thing with facial animations
[25:04] and tracking. And so, that's that's in
[25:06] there. and then cross shard progress for
[25:09] events. So, uh, you know, what powered a
[25:12] lot of the content this year was a new
[25:14] service in the background of the game
[25:16] called the scenario service, which, uh,
[25:19] you know, uh, whether you're doing, you
[25:21] know, clean air or, uh, the resource
[25:23] drive last year, the cross shard
[25:26] progress of these events is tracked by
[25:28] the scenario system. And so that's how
[25:29] we were able to show tables about, you
[25:32] know, how many resources and resource
[25:34] drives, stuff like that. Exactly.
[25:36] >> Um, that that's a that's a pretty good
[25:38] list. You you just got lit. It says 502.
[25:40] >> Yes.
[25:41] >> Look at that. Look at that.
[25:42] >> On time.
[25:43] >> Um and you didn't even mention like item
[25:46] recovery.
[25:47] >> No, I did not.
[25:48] >> I didn't mention it item recovery. Um
[25:51] >> and there was one other that I had until
[25:53] I got distracted by my own clock. Blur.
[25:55] >> I got distracted by my own clock.
[25:56] Basically, you you know, it's it's
[25:59] it it's it's hard.
[26:03] Let me think about how I want to say
[26:04] this. If you've been watching this show
[26:07] long enough, you know that I'm not above
[26:09] taking a few taking a section, in this
[26:11] case, five minutes of of the section to
[26:14] basically
[26:16] go through some talking points that I
[26:17] won that I that I think are important
[26:19] that I I I think I think people want to
[26:22] hear it is
[26:24] we have had things like the year of
[26:26] playability thrown back at us in comms
[26:28] and we you see I tune into a Twitch
[26:30] stream or YouTube stream and I you know
[26:31] and some somebody gets a very a very
[26:36] a very frustrating experience. I was
[26:39] looking at an experience of of of of
[26:41] somebody, you know, you know, just going
[26:43] to town with their whole sea and they
[26:44] they went through a jump point and it
[26:46] took them trying to go to one system. It
[26:48] kicked them back out to the next system.
[26:49] Then the thing crashed, then they got
[26:51] back in and the spindles were they tried
[26:54] to open the spindles, but the spindles
[26:56] were closed. Looked closed, but they
[26:58] were actually open. So, they were they
[26:59] were sing they were in the right they
[27:01] were in the wrong state. tried to get
[27:03] refuel, tried to go to refuel. The
[27:05] refuel thing wasn't working and then
[27:07] stowed the ship and spawned the ship and
[27:09] it didn't come back on the docking port.
[27:11] It came back in their hanger full of
[27:13] cargo and it's like this. It's like
[27:17] we acknowledge that.
[27:19] >> I'm sitting here I'm sitting here saying
[27:21] we acknowledge those things but there
[27:24] was so many massive improvements last
[27:27] year. There is this is you used a used
[27:29] an analogy last time we did with this
[27:32] about about I think it was the the the
[27:34] big freight container the the the big
[27:35] giant Suez canal shipping things that
[27:38] you don't just turn the direction
[27:40] around. You don't just spin the wheel
[27:41] and suddenly you're facing a new
[27:43] direction. It takes time to move these
[27:45] things and
[27:46] >> the efforts of your teams and the people
[27:49] under you, these strike teams, these
[27:50] hero teams as you call them, uh to turn
[27:54] that ship, this ship that we call the
[27:56] persistent universe around in the last
[27:58] year, has been phenomenal. If I'm
[28:00] allowed to have a personal opinion,
[28:01] being the shill for the company that I
[28:03] am, has been phenomenal. We haven't
[28:04] gotten everything. [clears throat] We
[28:06] haven't gotten everything. We still got
[28:07] another year. We still got another year.
[28:08] We still got another work continues.
[28:11] Yeah,
[28:12] >> but I want it's my show and I wanted to
[28:14] take five minutes to acknowledge the
[28:16] tremendous work of those teams and a
[28:18] whole lot was accomplished last year in
[28:21] addition to the amazing content work.
[28:23] You know, I said 10 patches and I
[28:24] realized we actually had 11 because we
[28:26] kicked engineering out.
[28:28] >> Yeah,
[28:28] >> we kicked engineering out in December.
[28:30] So, it was actually 11 patches. You
[28:31] know, 11 patches in 12 months is pretty
[28:33] crazy. So
[28:36] you allow me to have a moment to have to
[28:39] have some time to sit there and sing the
[28:40] praises of those people because I've
[28:42] I've seen where we were
[28:44] >> and I know where we are and we're in a
[28:46] much better place now.
[28:47] >> Still
[28:49] is just the beginning of the
[28:50] >> still places to go.
[28:52] >> Yes,
[28:52] >> that that scenario I just described was
[28:54] like last week and we have still places
[28:56] to go.
[28:57] >> Yes. But that doesn't mean we don't
[29:00] acknowledge
[29:01] >> I think it's a testament to kind of the
[29:03] systematic approach we've taken to solve
[29:05] some of these issues instead of uh
[29:07] previously we used to just assign
[29:10] tickets to people and they would you
[29:11] know find the fastest way to solve it
[29:13] and now we kind of work as a team with
[29:16] the teams in quality assurance that are
[29:18] basically the arbinger like no it's not
[29:21] fixed I can still repro right and these
[29:24] guys have been going through a
[29:25] systematic approach for it I think that
[29:26] That's that's paid off a bit. You know,
[29:29] >> we get better.
[29:30] >> Yeah.
[29:31] >> Not always,
[29:32] >> but we try and in this case in this
[29:35] case, we've definitely gotten better.
[29:36] There were there were some big changes
[29:37] to to internal infrastructure and stuff
[29:40] in the last year or two. And we're
[29:42] seeing the results of that stuff. All
[29:44] right. So, now let's go into some
[29:46] specific updates here. So, let's talk
[29:48] about the transport system. We don't
[29:50] need to talk about trans transit so much
[29:52] anymore. The transport system is what
[29:55] will one day
[29:57] >> replace this thing. Uh I I've heard talk
[30:00] about there being a tech preview I
[30:02] assume. Talk to me about the transport
[30:04] system.
[30:04] >> Well, so
[30:06] Transit was a problematic wasn't
[30:08] designed for server meshing. And so
[30:10] transport is a rebuild a complete
[30:13] rebuild of the transit system but using
[30:16] uh more server native uh d uh sorry
[30:19] server meshing native approaches for how
[30:23] different pieces are going to manage
[30:25] elements are streamed out and streamed
[30:26] in.
[30:27] >> We're also moving away from some
[30:29] previous misconceptions that were put
[30:31] into the transit system. Uh, for
[30:34] example, one of them was was responsible
[30:36] for trains going into space. We don't
[30:40] want trains to go into space. So,
[30:42] >> you might not.
[30:43] >> Yeah. Well, I mean, as unless we do a
[30:45] space elevator,
[30:46] >> astro train.
[30:47] >> Yeah. Astro train be great. Um, so the
[30:50] state of transport, right? So, um, at
[30:52] the end of last year,
[30:54] >> so I'm going to pause.
[30:55] >> Uhhuh.
[30:57] >> What's included in transport? So, so
[30:58] what?
[30:59] >> Oh, so what are we what are we talking
[31:01] about?
[31:01] >> Transit. Transit and transport manage
[31:04] elevators, in ship elevators, trains,
[31:07] anything that has to move when you press
[31:09] a button and you call it. So, okay, it's
[31:11] a network of carriage, peripheral, and
[31:14] gateway. Okay.
[31:15] >> Right. So, you take an elevator to go to
[31:17] your hanger,
[31:18] >> that's transit,
[31:19] >> you take a tram,
[31:19] >> you take a tram,
[31:20] >> anything that's automated. Anything that
[31:22] moves you not under your control,
[31:24] >> right? And he's the one moving the
[31:26] carriages, right? So he needs to deal
[31:27] with carriages being streamed out you
[31:29] know like prediction for that stuff. So
[31:33] uh so transport is a rebuild of the
[31:35] original transit which has been as as we
[31:38] talked about problematic. So the state
[31:40] on transport is at this point we are you
[31:43] know it's functional. So we've uh the
[31:46] team at the end of last year actually
[31:48] completed the first transport link which
[31:51] was we we and we tested this internally
[31:53] with our QA teams extensively at this
[31:55] point. all of the new Babbage Habs
[31:58] links. So, we took one link in the
[32:00] universe, that one, and we tested the
[32:03] crap out of it. Right now, that's a
[32:04] static link. So, it's going this when I
[32:07] say static, it means the two points that
[32:09] the elevator goes to exist. They always
[32:12] exist. Uh now, uh so we know that works.
[32:16] Then the state at the moment is we also
[32:19] support hangers. So these are dynamic
[32:21] gateways because when you're if you're
[32:23] online and you're at the location, your
[32:25] g your hanger will spawn there. That's a
[32:27] dynamic gateway. When if you leave that
[32:29] gateway disappears so the system needs
[32:31] to deal with dynamic gateways. The
[32:33] previous system
[32:35] >> did not
[32:35] >> candidate and the candidate was the
[32:38] piece that wasn't great. And so we've
[32:40] got internally at the moment new Babage
[32:43] uh we've got hangers and HAB. So the
[32:46] state of transport now is the team is
[32:47] working at converting all of area 18. So
[32:51] we're talking habs, hangers, transit
[32:53] trains, all of area 18 to the transport
[32:56] system. Um so
[32:59] we're going to go to tech preview with
[33:01] that. That's our plan. And the reason
[33:03] why we need to go to tech preview is
[33:04] because we need players. Uh we've tested
[33:07] this internally. We can't muster as much
[33:10] players as we want. So, we're going to
[33:11] try to see if you guys want to come and
[33:13] help us out test the new Babage Transit
[33:15] for real uh on a tech preview to
[33:18] validate all the assumptions that are in
[33:20] the system.
[33:20] >> So, we're going we're going to we're
[33:21] going to launch a tech preview and ask
[33:23] people to just come and ride the
[33:24] elevators.
[33:25] >> Correct.
[33:25] >> Come and ride the trams
[33:26] >> and their hangers.
[33:27] >> And their hangers and hope nobody dies.
[33:31] >> No trains in space. No doors opening to
[33:35] nothingness. Uh you know, that'd be
[33:38] great. Uh, no passing through the floors
[33:40] in the in the carriages.
[33:43] >> The the the the single most exciting
[33:45] tech preview we'll ever do, but
[33:46] incredibly important because because
[33:48] it's a tech preview that doesn't just
[33:49] affect 18. It's one that can literally
[33:51] affect quality of life in every single
[33:54] landing zone on board every single
[33:56] spaceship because that have elevators
[33:58] and stuff within space stations. It just
[34:01] it's it's going to be this little thing
[34:02] for 18, but it ripples out to
[34:05] everything. And so after a tech preview,
[34:06] if everything is validated, there's one
[34:08] thing too we want to try to avoid is the
[34:10] train prediction taking like you and 32
[34:13] seconds to come in where the train says
[34:16] train arrives in 1 million60. You know,
[34:19] obviously we hope that's
[34:20] >> I just thought it was a metaphor for the
[34:21] project. [laughter]
[34:24] >> Am I allowed to say that?
[34:27] >> At this point you are. Uh so the on the
[34:32] after tech preview we're going to scale
[34:34] this out to every landing zone and we're
[34:37] going to see what which patch this will
[34:38] load in. But at that point we hope to
[34:41] bring transport in and completely
[34:43] deprecate the transit system uh from the
[34:45] game and and nuke it from orbit.
[34:47] >> Cool. Yeah.
[34:48] >> And that's next week. [laughter]
[34:51] >> We don't give dates. Best effort, but
[34:54] it's looking good. like this tech
[34:56] preview is going to be where we're going
[34:57] to evaluate really like where we're at
[34:59] with scale because the issues of transit
[35:02] typically come up with scale most most
[35:04] of the time.
[35:05] >> Fair enough. Um I told you we get back
[35:07] to freight elevators.
[35:08] >> Yeah.
[35:09] >> So uh what what can you tell me about
[35:11] about freight elevators and and what
[35:15] what what still needs to happen?
[35:17] >> Sure. So the
[35:20] the Fred elevators are way more
[35:23] complicated than we can imagine because
[35:25] they get affected by other systems like
[35:27] hangers, like planetary locations. Uh
[35:30] there's also
[35:32] multiple flavors of them, top loading,
[35:34] side loading, and they all operate very
[35:36] differently. So this year we've had
[35:38] issues at the beginning of the year
[35:39] clearly with the freight elevators like
[35:42] losing items and uh obstruction blocking
[35:45] them from functioning. Uh
[35:47] >> you said the beginning of the year but
[35:48] that really came to a head in July where
[35:51] we had even an event that would rely on
[35:53] them which was you know in retrospect.
[35:55] >> Yeah.
[35:56] >> I know. Well, it's it's we we knew there
[35:59] we knew there was we knew there was a
[36:00] collection of issues, but we also all of
[36:02] our data said they were only
[36:04] >> localized localized. It wasn't until we
[36:07] went to scale.
[36:08] >> That's right.
[36:09] >> That that we realized, oh, this is
[36:11] actually even worse than we thought.
[36:13] >> Right.
[36:13] >> It's also coupled to a couple of things
[36:15] and for that event specifically, which
[36:17] was, you know, we concentrated missions
[36:19] in key locations. That's one thing that
[36:21] has been in our discussions all year was
[36:25] how we distribute missions, right? How
[36:27] we, you know, if we if we launch a new
[36:29] mission tomorrow morning and we send
[36:30] everybody to the same spot, that is
[36:32] problematic. Not just because it's not
[36:34] fun because it's a traffic jam, but also
[36:36] it causes other issues. And so that that
[36:38] we learned a lot from that on the design
[36:41] side, I think, overall. But the so Fred
[36:42] elevators though the so we're pretty
[36:45] happy with the some of the core
[36:47] mechanics but there's still very
[36:50] egregious issues that we're tracking. So
[36:52] there's roughly 73 total issues that
[36:55] we've we know about. Uh 51 of those have
[36:59] been resolved. So I've asked our uh one
[37:02] of our teams in uh our Nathaniel Fischer
[37:05] resident expert freight elevators uh to
[37:08] track that. So the the rest of these
[37:10] issues are some of them are are really
[37:12] problematic. One of them we actually
[37:13] discussed you and I just before the show
[37:15] was, you know, how uh if you're turning
[37:17] in Wiccolo items, you need to put
[37:19] >> you have to be put things in a box. You
[37:21] have to be able to put things in a box.
[37:22] >> Correct. And so
[37:24] >> you have to be able to put things in a
[37:25] box and have it suck up that box.
[37:27] >> Yes, I agree 100%. And so that's one
[37:29] that's going to be one of the first ones
[37:31] I think we need to look at. The other
[37:33] one is a bit more pro problematic
[37:35] because we don't have a proper repro for
[37:37] but sometimes there are lost items that
[37:40] fail if there's like a a backend
[37:43] slowdown when things get stowed. So we
[37:46] have a couple reports for this not many
[37:48] but the ones that we have are are
[37:50] critical. And so you know this is a kind
[37:53] of a rule we've set on the CGP team. So
[37:56] Yensz and I are pushing this to
[37:58] everybody. Like the golden rule for
[38:02] everything related to freight elevators
[38:03] or or anything that touches inventory is
[38:06] a player should never lose an item
[38:08] interacting with these systems, right?
[38:09] We need we need trust in them 100%. And
[38:12] so that's why we're tracing on those
[38:14] issues. So there's still a lot more work
[38:16] required on freight elevators for
[38:18] different edge cases. Uh a new one that
[38:21] we started seeing in 4.6 which seems
[38:23] affected by another change, but is
[38:26] sometimes like putting stuff on the
[38:28] elevator, not on the grid, will cause it
[38:29] to disappear,
[38:30] >> right?
[38:31] >> Which is kind of a physics cleanup
[38:33] conflict. So, I know we're looking into
[38:34] this right now because that's a that's a
[38:36] big one, but uh and then uh everything
[38:39] that has to do with stacking. So,
[38:42] having a stack in your inventory that
[38:44] you want to untow onto the freight
[38:45] elevator, that mechanism from a backend
[38:48] perspective, right,
[38:49] >> is actually a creation. I know that
[38:50] sounds weird, but you have a stack of
[38:52] 10. That's one item with a stack of 10.
[38:54] You may bring it. It's a creation of
[38:56] nine. So, that bit is not stable right
[38:59] now. We're trying to improve that uh
[39:02] that mechanism.
[39:02] >> It it it's it's hard because there's
[39:04] there's a lot of the chat right now is
[39:06] is debating Wiccolo at the moment. And
[39:10] and
[39:11] >> why did I say his name? [laughter]
[39:13] >> Well, if I say it three times, he shows
[39:15] up on the screen. Uh but a a not
[39:19] insignificant part of the dislike for
[39:23] Wiccolo is directly related to that
[39:24] freight elevator. It's it's just there's
[39:26] no it's we have a section later on we
[39:29] got we we asked around we'll get to but
[39:32] I'll give you a preview but we we we we
[39:34] started talking like what is what what
[39:35] is the single greatest quality of
[39:37] quality of life thing that that we that
[39:40] we can do that we asked I went around
[39:42] and I asked a couple head honchos here
[39:44] around the company because I I was
[39:45] curious. I I did an interview before
[39:47] like like what is what what to you is
[39:49] the single biggest uh uh quality of life
[39:51] thing we could do the single biggest and
[39:53] on more than one occasion shout out to
[39:55] Yens I'm going to spoil it here
[39:59] >> not losing items just
[40:01] >> just not losing items just just that
[40:04] seemingly simple
[40:06] >> yes
[40:06] >> benign
[40:08] >> innocent little thing like if if if
[40:11] everything else is important everything
[40:12] else is super important everything else
[40:14] is super necessary
[40:16] It absolutely is. But God is my witness.
[40:19] If we can just make it so people don't
[40:21] lose their items like
[40:24] so, so shout out to the heroes of the
[40:27] freight elevator. Uh hero Hero Squad, I
[40:30] thought it was strike squad, but you've
[40:31] rebranded it during this call as Hero
[40:32] Squad. And I like it,
[40:33] >> right?
[40:34] >> So, we'll do it. Uh, and everybody, the
[40:36] people on item recovery, the people, the
[40:38] people in the new inventory, people who
[40:39] are working on the inventory system
[40:41] right now, it's everybody working to fix
[40:44] that because that's just the most the
[40:46] single most demoralizing
[40:48] thing in the world to me. Um, speaking
[40:51] of item recovery,
[40:52] >> yeah,
[40:53] >> we launched V0 or V1 or whatever the
[40:56] heck we we called it, T0. Um, I'm
[40:59] hearing that there's a T1 on the
[41:02] horizon,
[41:02] >> correct?
[41:03] >> Talk to me about it. [snorts] Well, so
[41:04] the obviously tier zero was a fairly
[41:09] large change to the game so that uh in
[41:12] the case where you die in the verse,
[41:13] instead of having to run a corpse run to
[41:15] recover your items, you would actually
[41:17] respawn with them. This was mainly done
[41:19] to, you know, we're in an alpha game,
[41:22] you know, we needed to do some
[41:23] compromises. So, we looked at that. So,
[41:24] item imprint, there's multiple names for
[41:27] this at this point. item imprint
[41:30] uh uh item recovery tier one uh
[41:34] entitlements 2.0 those are all sort of
[41:37] related. So the gist of it is and this
[41:40] ties into you know some other subjects
[41:42] but um is that currently when you play
[41:46] the game right and you look at your ASOP
[41:48] terminal I think I've said that last
[41:50] time but I'll still go through it again.
[41:52] When you look at your ASOP terminal, the
[41:53] list that you see there is the list of
[41:56] entitlements that you own. Which ship
[41:59] that you own, you have a right to,
[42:01] right? Then that's cross link with the
[42:03] actual ship. Do you have a that you know
[42:05] this entitlement? Let's say it's econ.
[42:08] What is it in the game? Right? And where
[42:09] is it? And that's how the ASOP terminal
[42:12] shows you the list, right? So that's why
[42:14] you're able to have a row when there's
[42:15] no ship and it says retrieve or deliver,
[42:18] right? That creates the ship. then
[42:19] deliver brings you to ship on the
[42:21] platform. Those entitlements currently
[42:23] they don't live across patches. We
[42:26] recreate them. The first time you log
[42:28] in, there's a big process that
[42:30] reconciles your account, grabs your web
[42:32] purchases, grabs your LTP records, and
[42:35] recreates those entitlements.
[42:38] Um,
[42:40] obviously long-term persistence has
[42:42] always been kind of a diff it's a
[42:44] difficult problem to solve. It sounds
[42:46] simple but it is not I assure you. Uh
[42:49] but
[42:51] in order to facilitate all this and also
[42:53] other item recovery needs we're we've
[42:56] decided to basically persist those
[42:58] entitlements across batch. So these
[43:00] things will never get wiped anymore. And
[43:02] so losing a ship is not going to be a
[43:04] thing. That's not going to be pos
[43:06] technically possible. We don't we never
[43:08] really delete entitlements. And so you
[43:10] have insurance on those records so you
[43:12] can claim insurance. The only way to
[43:14] lose a ship will be if you no longer
[43:15] have insurance on it. You still have the
[43:17] deed for it, but you can't claim it. So,
[43:20] item recovery is a rework of the
[43:22] entitlement system. Uh, it touches on
[43:24] how you claim insurance on ships. Uh, it
[43:28] allows snapshotting of ships, but also
[43:31] FPS items so that these live with an
[43:33] insurance loadout that we can we can
[43:35] keep and recover. and then will give us
[43:39] the ability to recover or claim your
[43:41] your even FPS items. So, think of it as
[43:44] an insurance system for FPS items,
[43:47] right? So, this whole mechanic ties into
[43:49] LTP as well. Uh we're also hoping
[43:52] through the system to solve some of the
[43:54] issues that exist with, you know, taking
[43:58] components off of a ship, then claiming
[43:59] the ship, losing the components, and or
[44:01] in some cases being able to duplicate
[44:03] some default components. This whole loop
[44:05] is a you know insurance has always been
[44:08] a problem designwise for how this
[44:09] functions. So item imprint v1 allows you
[44:12] to imprint items save that state and
[44:14] then recover it on death or when you
[44:16] claim insurance. All right. So, I have a
[44:19] couple questions here based on Sure.
[44:20] what I heard. You keep mentioning
[44:22] insurance. Are we are we talking Are you
[44:24] saying that insurance will be in
[44:26] alongside V1 or just Yeah, exactly.
[44:30] >> Correct. It's the I say insurance
[44:32] because that's the same kind of loop in
[44:34] terms of what the services are doing.
[44:36] >> Yeah.
[44:36] >> Uh to do this, but basically it's a
[44:38] snapshot we recover from.
[44:39] >> Gotcha.
[44:40] >> Exactly. So when when item recovery v1
[44:43] comes out, it'll still be much like it
[44:45] is today as far as everybody will just
[44:47] have global. Everybody has LTI on
[44:50] everything at the moment right now until
[44:51] until that very specific gameplay system
[44:54] is implemented. So this is not that
[44:57] >> you're using lowercase I insurance.
[44:59] >> Lowerase I. Yes.
[45:00] >> Sorry, I just needed to I'm like I
[45:03] >> I didn't think ship insurance was
[45:04] coming.
[45:05] >> Yeah. So, just just to clarify that
[45:08] before before folks go off. Um, you're
[45:12] saying you're saying that because it's a
[45:14] change to the entitlement system and
[45:15] everything will just get snapshot and
[45:16] moved over. When you say people will no
[45:19] longer lose ships, you're talking about
[45:21] that whenever whenever a patch comes
[45:23] out, people come in and they're talking
[45:24] about the ships that they've earned in
[45:26] game, the ships they've either bought
[45:27] with AEC or stolen or whatnot, those
[45:30] will those should persist. If we have an
[45:33] entitlement for something,
[45:36] >> we no longer wipe that between patches
[45:37] at all. We keep it completely.
[45:40] >> Okay.
[45:40] >> So that's should give us a lot more. In
[45:42] fact, it is exactly the way you would
[45:44] expect it to function right now except
[45:46] the way the systems were built in the
[45:48] past didn't account for that. And so
[45:50] there was cases where you could lose
[45:52] something that you own uh because it was
[45:54] left unto stowed in a shard or you know
[45:56] something like that. And so now with the
[45:58] entitlement system we keep that cross
[46:00] batch. So, the first question I have in
[46:03] response to that is how will people get
[46:06] rid of things? Because because quite
[46:09] frankly, I I might go joy riding one day
[46:12] or I I I might buy a I might buy a thing
[46:15] for AEW and fly it and then decide I
[46:19] don't want it. I don't like it and now
[46:20] it's just sitting there staring at me in
[46:23] the ASOP. If if these things don't go
[46:25] away between patches now, every time I I
[46:28] want to try to I try a ship or I just
[46:30] move away for a ship or or John Crew
[46:31] nerfs the hell out of the ship and I
[46:33] don't want to fly it anymore.
[46:34] >> God damn John Crew.
[46:36] >> Uh I might want to get rid of it. Will
[46:39] there be is is there going to be a
[46:40] mechanism for getting rid of these
[46:42] things?
[46:42] >> Well, not with item imprint, right? As
[46:44] part of this, no. But there are uh I
[46:48] don't want to go too much into details
[46:50] into this, but
[46:51] >> I can give an example of like you have a
[46:54] ship filled with cargo that you stow
[46:58] into your location inventory in New
[47:00] Babage
[47:02] and you claim that ship, right? In the
[47:05] current way the system works, that
[47:07] cargo's lost, right? That ship will get
[47:09] deleted and you're done, right? You get
[47:11] a new one,
[47:12] >> but it's the same entitlement, right?
[47:14] With the new system, we have the ability
[47:15] to also show you ships that you own that
[47:17] had an entitlement on it. And so what
[47:19] that means is you could claim that ship.
[47:22] You'll get a new, let's say it's a
[47:23] Caterpillar filled with cargo and you're
[47:26] like, I need to claim it for some
[47:27] reason. You can claim the ship. The
[47:30] other ship will be bricked, right?
[47:31] That's how the design is functioning. So
[47:34] it's no longer usable, but you can still
[47:35] retrieve it. You can still retrieve the
[47:37] brricked ship and get it. And then if
[47:39] you destroy the ship or tow it out, then
[47:42] it'll go away from your entitlement. But
[47:44] there's going to be more system of
[47:45] course to remove that as from your ASOP
[47:48] terminal longer term. But not in this
[47:50] phase, but longer term. Yes.
[47:51] >> Yeah. I'm just thinking about the I'm
[47:54] thinking about the the the long-term
[47:56] players, the the the people who have
[47:58] been here for a while who have acquired
[48:00] a rather massive fleet already. And
[48:03] >> I'm a victim of this,
[48:04] >> you know, and you you start you start
[48:05] buying ships and it's I'm guilty, but
[48:07] there's just sometimes I don't I don't
[48:09] want this anymore. I don't I don't want
[48:10] to I don't want to look at a I don't
[48:12] want to look at a I don't know a rock DS
[48:16] anymore. [laughter] Just want it out of
[48:18] my ASOP. I I I I I I bought it
[48:21] mistakenly from Astro Armada. I just had
[48:24] a
[48:26] momentary memord
[48:29] staring at me in my ASAP for the end of
[48:31] time because you've done a wonderful
[48:32] thing with item recovery. you know,
[48:34] Versist.
[48:36] Yeah. Some things are saying we don't
[48:38] want your ships anymore.
[48:39] >> I'm just saying some things aren't meant
[48:40] to be persisted. So, I I I just want to
[48:43] take this opportunity to to to just
[48:46] convers.
[48:54] >> How much time do you got? [laughter]
[48:58] >> Uh Jared hates the Rock DS confirmed.
[49:01] Oh, you haven't been watching for a
[49:02] while. if you're just getting that
[49:03] confirmed now. Um,
[49:09] Jared, you're not supposed to be going
[49:10] on shows and telling people you you hate
[49:12] certain ships. It's you're supposed to
[49:14] be championing everything. I'm like,
[49:17] >> "Yeah,
[49:20] I hate the Rock DS. It's just It's just
[49:25] >> It's comfy though. It's got to get
[49:26] >> Hold on. Let's just do everything the
[49:27] first rock does, but require two people.
[49:33] Look,
[49:35] I've never lied to you. I never will.
[49:36] It's it's the it's the only promise I've
[49:39] ever made, people.
[49:40] >> Um,
[49:42] you've been mentioning long-term
[49:43] persistence. So, let's let's just wrap
[49:45] up this
[49:46] >> the the the story this storyline of of
[49:48] of of losing of losing stuff, keeping
[49:51] stuff. Uh, the last time last time we
[49:54] had this conversation, uh, you talked
[49:56] about utilizing this this this this
[49:58] entitlement system to this. Is that what
[50:00] we were just talking about or is there
[50:01] more stuff?
[50:02] >> There's more. So, we're I mean there's a
[50:05] lot of work ongoing on this on the
[50:08] long-term persistent side. So, just for
[50:10] those who don't know what long-term
[50:12] persistent is or LTP um
[50:16] is a mechanism we put in place to allow
[50:19] you to keep things between patches,
[50:21] right? So um the
[50:26] every patch we basically destroy like
[50:29] when you come into four to seven when it
[50:31] comes out uh that's a brand new database
[50:33] right the whole thing is fresh and then
[50:35] we recreate things. Now why do we
[50:37] recreate things? It's because these
[50:39] things are still changing. So the hornet
[50:42] you had in 4.5 is probably different
[50:44] than the hornet you have in 4.6. Item
[50:47] port locations have changed, materials
[50:49] have changed, serialized variables and
[50:51] all the data that goes with it has
[50:52] changed.
[50:53] >> The gold standard Aurora that we just
[50:54] launched is technically an entirely
[50:56] different ship. The the whole entity is
[50:58] different.
[50:58] >> Exactly.
[50:59] >> And what under the hood to the to the
[51:01] backer it looks like, okay, you just
[51:02] added some you added some fins and blah
[51:04] blah blah, but under the hood, it's an
[51:06] entirely new set of entities. And so,
[51:09] um, in order to, uh, allow us to keep
[51:12] stuff, we've built this system on the
[51:14] side that kind of keeps records of what
[51:16] you own. So, it says you own a hornet,
[51:18] right? Um,
[51:21] that system has always been kind of a
[51:24] not I don't want to say a crutch because
[51:25] it did function for a long time, but
[51:26] we've outgrown it quite a bit. Uh, there
[51:30] are also many cases where you would we
[51:32] would remove records of things that you
[51:34] own because they're in play in a shard.
[51:36] that's been uh proven to be a bit of a
[51:38] bad decision overall. And so that's why
[51:40] we've had uh multiple issues over the
[51:43] years of like players losing ship
[51:44] entitlements in the new patch or having
[51:47] more items than they were supposed to
[51:49] get like you know some people have shown
[51:51] some screenshots of demultiplication of
[51:54] things uh between patches and so it's
[51:57] been a big issue right so with with the
[52:00] item imprint work we're tying into that
[52:02] we're reducing the footprint of what LTP
[52:04] manages by a lot because it will no
[52:07] longer store your entitlements we just
[52:08] keep those as is. So that's one big bit
[52:11] removed from that system.
[52:13] >> Um the other complexity on that side is
[52:16] that it needs to manage nested
[52:19] inventories
[52:21] and that
[52:21] >> back to the freight elevator thing.
[52:23] >> That's just completely crazy. So, like,
[52:24] you know, I have a handgun stored in the
[52:27] glove box of my Merlin that's attached
[52:30] to my Connie that's parked somehow
[52:32] inside of my, you know, Idris and stowed
[52:36] in my location inventory. Well, I need
[52:39] to give you a record for that gun,
[52:42] right? And so, that system needs to
[52:46] reread data and store it. And it's it's
[52:48] really complicated
[52:49] >> which is why people have gotten into the
[52:50] habit before a wipe or before not wipe
[52:53] but before a patch
[52:55] >> and slip. Huh?
[52:59] >> Just already I just I know you people.
[53:03] Uh but before a patch people stow things
[53:06] in in certain inventories to have their
[53:08] best chances.
[53:09] >> Yeah. To kind of set it up, right? So um
[53:11] on long-term persistence ultimately we
[53:14] don't want this system, right?
[53:15] Ultimately we want to get to a point
[53:17] where we don't need it. Um so step one
[53:20] is to reduce its footprint. So that's I
[53:23] part of item imprint is is that so
[53:25] that's a big deal. Um but the next steps
[53:28] are very start from the very low level
[53:32] uh and will require some comp.
[53:35] We need to be able to migrate your old
[53:38] hornet to the new one. Right? Uh or at
[53:40] least be able to know it changed enough.
[53:43] I need to give you a new one. Right? or
[53:46] being able to just migrate the shape of
[53:49] the hierarchy, the item port locations
[53:51] and the serialized variable formats on
[53:53] these things. Now, the thing that's you
[53:56] got to think about the way the ships are
[53:57] built, right? The entities have
[54:00] components on them which enable them to
[54:02] do something. I'll give an example just
[54:05] for the layman. You have a health
[54:07] component on an entity that says, "Hey,
[54:10] I got a 100 hit points." when that
[54:12] reaches zero then we destroy the entity
[54:14] or something else happen it destroys
[54:15] itself right that component is written
[54:18] in code there's a game programmer that's
[54:20] maintaining this we actually have a
[54:21] health component and does way more
[54:22] things than this but just to keep it
[54:24] simple so a game programmer is
[54:26] programming this and he needs to persist
[54:28] the value of health so that when this
[54:31] ship is now either put in an inventory
[54:34] then brought back into the game that the
[54:36] values of the health components on the
[54:38] parts on the individual parts have
[54:40] persisted and we reload it. Right? This
[54:43] is true for everything in the game,
[54:45] right? We have serialized variables and
[54:46] components across the game. There's, you
[54:48] know, I think your character at the
[54:50] moment has like 800 serialized variables
[54:53] on it or something like that, right? So,
[54:55] those are all different component. Are
[54:56] you crouched? Are you standing? Are you,
[54:58] you know, uh health of all the the
[55:01] limbs, you know, stuff like that, right?
[55:03] So the programmers between patches they
[55:06] just change that you know I removed this
[55:08] one you know and I put a new one in and
[55:10] then because you know some of those
[55:11] variables it doesn't matter if it
[55:13] changes. Yeah,
[55:14] >> some of them matter, right? If you
[55:16] change that like it's the it's a
[55:18] different shape, it loads a different
[55:19] CGA model, whatever, right? So that's
[55:21] the big problem about how we need to
[55:24] forward migrate is we need to do this at
[55:25] the very low level. So currently our
[55:28] network team and our online teams are
[55:30] working at this mechanism to be able to
[55:34] differentiate the important from the
[55:36] important SVS, the serialized variables
[55:39] on components. So that's all across all
[55:41] components in the game. There's over
[55:43] 1500 2,000 components individual code
[55:47] components in the game. Uh, so you know,
[55:51] for example, I don't need to know if
[55:52] you're crouched when I stow you in your
[55:55] inventory, right? I don't need to know
[55:56] that, right? But I need to know that
[55:58] when we're running and you you're
[55:59] crouch, right? So we differentiate the
[56:01] two and then we have a mechanism to
[56:04] migrate the data format from one to the
[56:06] other. But when we get that
[56:08] functionality in and reliable, what that
[56:11] means is that we will just keep the
[56:13] database. And that is huge because now
[56:16] that means there's no longer a process
[56:19] between patches that transfer stuff or
[56:21] moves it around or recmputes things.
[56:23] It's just it's the same database. We're
[56:25] just moving its version forward on
[56:28] demand.
[56:29] Now, we've looked at multiple different
[56:31] options for that. Some of them were
[56:32] like, you know, just migrate people from
[56:34] one to the other, but then we'd have to
[56:36] keep five databases behind. It's just
[56:38] impossible. And so right now we're
[56:41] working at that option. And that's the
[56:42] longer term vision that we have for
[56:44] that. So first reduce the footprint of
[56:46] the LTP system so it just manages some
[56:48] things not all and then work on the real
[56:51] fundamental issue which is we need
[56:53] forward migration on all this data.
[56:56] How many times in your life has a errant
[57:00] random unexpected serialized variable
[57:02] been the cause of
[57:05] >> in your life?
[57:05] >> I mean it's crazy. This is the single
[57:07] most important thing because like in
[57:10] case you guys don't know every time we
[57:11] do either well full patch is easy
[57:14] because we patch server client hybrid
[57:16] everything goes in one at once. Uh but
[57:18] when we uh perform hot fixes and god
[57:21] knows we've done a lot of hot fixing
[57:23] this year right? uh that's part of our
[57:25] process now, but there's like specific
[57:27] steps where we have our our our live QA
[57:30] team need to do compatibility checks and
[57:33] uh any change to any serialized variable
[57:36] added, removed, change the format,
[57:38] change the data, whatever incompatible
[57:40] client. And so
[57:42] getting our our our processes in place
[57:44] to catch those before they get
[57:46] introduced, right? Uh is really taxing
[57:50] because you know there's always a oh
[57:52] yeah also fix this bug and that make the
[57:55] whole hot fix incompatible and we can't
[57:57] launch it. So we have to backtrack,
[57:58] change our approach, whatever. And so
[58:00] that's the kind of thing we're dealing
[58:01] with. This will also solve that if we we
[58:04] can make it. And before somebody says,
[58:06] "You should have just made a simpler
[58:07] game." Benwa, [laughter]
[58:10] >> have you considered just making a simple
[58:12] >> simpler game? Yeah. Yeah.
[58:14] >> Cool.
[58:14] >> Um, all right. I want to move into our
[58:18] quality of life section here.
[58:19] >> Yeah.
[58:19] >> Uh, we talked about it a little bit uh
[58:22] before because I just
[58:25] we've just we just talked a whole lot
[58:27] about not losing things and all the
[58:30] efforts being made to not losing things.
[58:32] But there are other major quality of
[58:33] life things for me
[58:36] personally.
[58:37] >> Yeah.
[58:37] >> After the not losing the things, it's
[58:40] social.
[58:41] >> Yeah.
[58:42] >> It it it's social. I
[58:45] the ability to group with people, the
[58:48] ability to communicate with people, the
[58:51] ability
[58:53] not to communicate with people, the
[58:57] ability to just to just be like, "Oh,
[58:59] hey, that's a bad person. That's a bad
[59:03] person with bad thoughts and bad
[59:04] intentions and boop boop and kick them
[59:06] into the pit from 300."
[59:08] >> Sure.
[59:08] >> And whatnot. Never to see or hear from
[59:11] that person again. Right. the the the
[59:12] the all the tools for joining up.
[59:16] Finally, people have been creating and
[59:18] managing orgs on our website since 2013.
[59:23] >> Yeah. Yeah. 13.
[59:24] >> And this is 2026.
[59:27] And those orgs still not in game.
[59:29] >> Correct.
[59:29] >> Um
[59:31] >> what are we doing?
[59:32] >> It's it's we're we're reenacting a
[59:35] little play because Ben Juan and I have
[59:37] had this conversation almost verbatim
[59:39] for a little time. I I'm just doing the
[59:40] conversation we had in private uh for
[59:42] you guys right now. Um
[59:46] so my question Benois
[59:49] >> friend
[59:51] person whom chat has dubbed brother my
[59:54] brother
[59:55] >> from another mother
[59:57] >> when Benois when please dear God in
[1:00:01] heaven above or down below who do I have
[1:00:04] to talk to?
[1:00:04] >> Sure
[1:00:06] >> give me something good for social. Yeah.
[1:00:08] Well, so what is it now? It's all a
[1:00:12] blur. Uh a social universe, right? The
[1:00:15] last panel that we did at Citizen Con
[1:00:17] >> that outlines the vision of what we want
[1:00:20] to do with social. Um now with the year
[1:00:23] that we just had,
[1:00:25] >> uh we had to take a little bit of a
[1:00:26] detour on that initial plan, but right
[1:00:30] now we we have we have completely formed
[1:00:32] the social strike team. And so a bit
[1:00:36] like the heroes team, right? The social
[1:00:38] strike team its only mission is to
[1:00:40] execute this plan. Right. And so um
[1:00:44] >> sorry don't bury the lead. There is now
[1:00:46] an official dedicated team on this
[1:00:48] >> social strike team. Yes. Okay. Exactly.
[1:00:50] And so this group uh is currently
[1:00:53] looking at all of the components that
[1:00:55] make up the social systems now. Right.
[1:00:58] Uh fortunately for us the work didn't
[1:01:01] stop on this side. Even though we
[1:01:02] couldn't enact the changes in the game
[1:01:05] the on the backend side of things
[1:01:06] there's been a lot of progress on social
[1:01:09] and so even though the systems look
[1:01:11] primitive in game their capabilities
[1:01:13] have have grown quite a bit even in 25
[1:01:16] >> uh we do not using
[1:01:17] >> so we do have a block list that we uh
[1:01:19] leverage now it's simplistic but because
[1:01:22] we didn't have the UI resources to do it
[1:01:23] completely but uh moving into this this
[1:01:27] strike team right covers all areas of
[1:01:30] social so Um the plan is to go into four
[1:01:35] different uh pillars for it. So the
[1:01:37] first order of business is uh the comink
[1:01:40] app. So the comink app is like one of
[1:01:43] the oldest mobile glass application we
[1:01:46] still have. Uh it's kind of an eyesore
[1:01:49] because it's like from a dark you know
[1:01:52] ghost of future futures past. It's like
[1:01:55] from 200 I want to say 1918 at this
[1:02:00] point style-wise. Um very old technology
[1:02:03] still use the legacy even UI framework
[1:02:06] that we had in the game. So we're
[1:02:08] completely eliminating that tab. We're
[1:02:10] bringing in forward the social uh
[1:02:12] application that we've shown at Citizen
[1:02:14] Con. So that design is moving forward.
[1:02:16] Um so replacing that chat widget, right?
[1:02:20] So the the entire chat experience in the
[1:02:22] game, we're completely overhauling this
[1:02:24] from the top at the moment. So we're
[1:02:27] right in the process of changing that uh
[1:02:30] and hooking it up to the new systems.
[1:02:33] Uh revamping things like you know social
[1:02:35] notifications. Currently in our mobile
[1:02:38] we only have one kind of level of
[1:02:40] notification which is like ultra
[1:02:42] important. So to have a proper social
[1:02:46] experience, you need to have these like,
[1:02:48] you know, system updates, system
[1:02:49] notifications, like someone joins,
[1:02:51] someone leaves, whatever. Uh looking at
[1:02:53] things like combat log and all this the
[1:02:55] stuff that we've looked at in the in the
[1:02:57] social universe panel. So we're actively
[1:02:59] building this now. Uh and that's going
[1:03:01] to be the first we don't know I'm not
[1:03:03] I'm not going to say which patch is
[1:03:04] going to land in. So our schedule is
[1:03:06] twofold. There's a content patch
[1:03:08] schedule and there's a feature schedule.
[1:03:09] The features have to be have need to
[1:03:12] have leeway because it depends on where
[1:03:13] they're going to land. But that's going
[1:03:15] to be the first update to social will be
[1:03:18] come link app, right? So rich party
[1:03:21] information friend tracking chat app. So
[1:03:25] we're working on this right now actively
[1:03:28] >> for a 2026
[1:03:31] release.
[1:03:32] >> Yes.
[1:03:34] Yes. I mean it's like you mentioned it's
[1:03:37] kind of urgent at this point that we do
[1:03:38] something there. Um this will
[1:03:41] automatically roll into the next
[1:03:45] keep your dad here. Come on. [laughter]
[1:03:51] >> On the the next uh milestone for the
[1:03:55] social strike team is going to be
[1:03:57] looking at the party finder mechanic,
[1:03:59] right? which basically allows you to uh
[1:04:02] advertise your party uh and then get
[1:04:05] people to join in. Like let's say you're
[1:04:06] looking for, you know, a gunner and some
[1:04:09] FPS guys for your mission, then you can
[1:04:11] advertise that. If you're looking for,
[1:04:13] you know, friends to go do a specific
[1:04:15] event, you can do that as well. So,
[1:04:17] PartyFinder, we're hoping is going to be
[1:04:18] a way for you to find friends on a given
[1:04:20] shard really rapidly. Also, tie that in
[1:04:23] with your friendship and your contacts.
[1:04:25] Uh so that will be kind of we're
[1:04:28] building on the first release which
[1:04:29] we'll have now friend and info tracking
[1:04:31] into that and so that's going to be
[1:04:32] super interesting. That's the second
[1:04:34] system we want to bring in. Uh and then
[1:04:37] obviously the final not the final number
[1:04:40] three of four right is the org system.
[1:04:43] And so uh in that space we're taking the
[1:04:47] horses on the website from 2013
[1:04:50] and we're uh moving them completely.
[1:04:52] Obviously, the technology we used to
[1:04:54] build that in 2013 are obsolete.
[1:04:57] They're, you know, it's it's a really
[1:04:59] old system. So, we're bringing all of
[1:05:01] this data back into a game service to
[1:05:03] manage orgs uh to surface that obviously
[1:05:07] game side. So, now have org management
[1:05:09] screens uh have your organization chat
[1:05:11] in the game uh and then actually be able
[1:05:14] to create your organization from the
[1:05:16] game as well as well as surface it
[1:05:18] outside. So, that's like okay now orgs
[1:05:20] are in the game. That's the first that
[1:05:22] >> that's that's the whole name and then
[1:05:24] the org you know.
[1:05:26] >> Yeah. Yeah. Exactly. Like and this will
[1:05:28] probably I mean we're still having
[1:05:29] internal discussions about how that
[1:05:30] surfaces you know in our game. Nothing
[1:05:32] is you know always set in stones but you
[1:05:34] know probably going to tie into uh FPS
[1:05:37] scanning radar uh you know additions to
[1:05:40] the when you fly your ship to identify
[1:05:42] others with scanning and so the orgs
[1:05:44] will be part of that. That's it.
[1:05:46] Visibility in game chat in game for your
[1:05:48] orgs. Actually having your organization
[1:05:50] communications. Yeah, that's that's a
[1:05:52] whole another series of conversations,
[1:05:53] you know, weighing immersion versus
[1:05:56] running around and seeing it burns when
[1:05:58] I PVP.
[1:05:59] >> Yeah.
[1:05:59] >> Above people's heads. It's like
[1:06:01] >> Sure.
[1:06:01] >> So,
[1:06:02] >> let me solo her.
[1:06:02] >> Ju just [laughter]
[1:06:06] um
[1:06:08] >> fun fact, I got to write the original
[1:06:10] guidance at Blizzard for that back back
[1:06:12] in 2004 [laughter] for World of
[1:06:14] Warcraft. Yeah. I I I got to make the
[1:06:16] original list of
[1:06:17] >> these are examples of really bad uh
[1:06:19] guild names for to train game masters
[1:06:22] way back when.
[1:06:22] >> Cool.
[1:06:23] >> Um
[1:06:25] >> chat, you've been saying it. It's next
[1:06:28] on the list.
[1:06:28] >> Yeah,
[1:06:29] >> VOIPE.
[1:06:30] >> Yeah,
[1:06:30] >> VOIPE. If you're doing all this all this
[1:06:33] stuff, VOIPE,
[1:06:34] >> we're looking at VOIPE. [snorts]
[1:06:35] >> Such an important element.
[1:06:37] >> Sure. It's all part of it.
[1:06:38] >> Uh uh uh Graham tells me it's entirely
[1:06:40] your fault.
[1:06:41] >> Graham is
[1:06:42] >> I don't want to say it. Graham did
[1:06:44] [laughter]
[1:06:44] Graham did not say that. He heavily
[1:06:47] implied it though.
[1:06:50] Uh no,
[1:06:51] >> Gravis is Graham is more savvy than I
[1:06:53] am. He didn't he knew not to say it
[1:06:55] outright.
[1:06:55] >> Yeah, that's right. We love him. But uh
[1:06:58] but he's wrong. No, but uh Okay, so
[1:07:00] VOIPE, we're doing improvements there on
[1:07:02] the backend side of things. So VOIPE is
[1:07:05] mainly, you know, right now heavily
[1:07:08] affected by the shard size. So the
[1:07:10] original design for this was really made
[1:07:12] for the 100 servers and so we haven't
[1:07:14] had a chance to go back there at all. As
[1:07:17] part of this work, this team is also
[1:07:19] going to look at uh the infrastructure
[1:07:21] for voice voice transmission
[1:07:24] um and we're going to try to you know
[1:07:26] make it scale to the proper thing. So
[1:07:28] one element that we're we're talking
[1:07:29] about on chat and comms is is that um
[1:07:33] we're probably going to be moving away
[1:07:35] from the uh server chat. So what the the
[1:07:38] the original you know global 600 player
[1:07:41] chat and move into regional chats like a
[1:07:43] true MMO so that you know it's tied to
[1:07:46] the region that you are uh maybe
[1:07:48] multiple channels for that and so VO
[1:07:50] will also be affected by that because it
[1:07:52] also powers proximity chat uh and so
[1:07:55] proximity voice sorry so we're looking
[1:07:57] at voice transmission from the top to
[1:07:59] bottom we're changing the whole the
[1:08:00] whole back end for this to make it scale
[1:08:03] there.
[1:08:04] >> What do you have against Baron's chat?
[1:08:05] [laughter]
[1:08:06] Baron's chat was dope.
[1:08:08] >> Baron's chat was
[1:08:11] [laughter]
[1:08:12] I I mean I mean apparently Baron's chat
[1:08:13] was so dope we implemented it here and
[1:08:15] have had it for the last 10 years.
[1:08:16] >> That's right. Correct.
[1:08:17] >> So correct.
[1:08:18] >> Sorry.
[1:08:19] >> We're also like out of this there's also
[1:08:22] some uh movement on uh player reporting
[1:08:25] for bad behavior. So, not just blocking,
[1:08:28] which is, you know, is is something that
[1:08:30] we we have now, but that we want to
[1:08:32] expand on, but also like player
[1:08:33] reporting on for other players that are,
[1:08:35] you know, either bad behavior, profanity
[1:08:38] in chat, things like that. Uh,
[1:08:40] obviously, we don't at CG don't have a a
[1:08:43] large, you know, moderation team, uh, in
[1:08:45] game. Uh, so we're going to need some
[1:08:47] automated help there that will come and,
[1:08:49] you know, clean up some of these
[1:08:51] elements. So, we're we're trying to, you
[1:08:53] know, really uh tackle communications,
[1:08:55] you know, from the top there with that
[1:08:57] strike team.
[1:09:00] Um,
[1:09:02] so there's social, there's not ever
[1:09:06] losing an item. Shout out to gameplay
[1:09:09] engineering director Yens. Uh, that was
[1:09:11] that was his that was his major one. And
[1:09:13] then that was that was his uh one. Uh,
[1:09:17] didn't feel strongly enough to come on
[1:09:19] the show though.
[1:09:20] >> No. ends.
[1:09:21] >> Yeah, next time. Next time we do a duo,
[1:09:24] >> let's sign him up right now.
[1:09:26] >> So, not losing things.
[1:09:27] >> Yeah,
[1:09:28] >> social tools. We'll throw VOIPE in with
[1:09:30] social tools.
[1:09:32] >> Chat, partyfinder orgs is what we're
[1:09:34] going in order
[1:09:35] >> as as far as far as major quality of
[1:09:37] life. I want to ask you, you personally,
[1:09:40] I I'm I'm allowed to say things
[1:09:42] personally sometimes. Uh I do it often
[1:09:45] on my live shows
[1:09:46] >> and then get in trouble for it
[1:09:48] afterwards. Ben, I want your personal
[1:09:50] thing. If What is your big bugaboo? What
[1:09:53] is your big quality of life bugaboo? The
[1:09:56] thing
[1:09:58] >> personal.
[1:09:58] >> Yeah,
[1:09:59] >> I've got two. I've added one. [laughter]
[1:10:03] >> Scope crate.
[1:10:04] >> Yeah. Okay. So, I would say for me in
[1:10:08] terms of quality of life, I I love to
[1:10:11] play the game in a kind of a larger
[1:10:14] setup. Uh, so I have I have a kind of a
[1:10:18] a flight seat that I like to operate to
[1:10:21] play the game. And this thing has
[1:10:23] roughly 13 devices connected to the
[1:10:27] game. Managing bindings is literally the
[1:10:31] worst.
[1:10:33] And so that's my pet peeve. If there was
[1:10:35] one thing that I could do for my own
[1:10:37] game experience, like other than like
[1:10:39] the in-game elements, it would be
[1:10:41] completely control bindings. uh you know
[1:10:45] currently we did we we rely on device
[1:10:47] order for some things and so like
[1:10:50] literally you need to have like a kind
[1:10:52] of almost a common order for the devices
[1:10:54] on the on your machine. Uh sharing these
[1:10:57] profiles is very difficult. Uh being
[1:11:00] able to bind onto multiple devices you
[1:11:02] know to you know to really benefit from
[1:11:05] that. Being able to bind on multiple
[1:11:07] like the same action on multiple devices
[1:11:10] for me is super key right.
[1:11:12] That would be my absolute personal
[1:11:14] thing. Quality of life to solve would be
[1:11:17] device handling in general.
[1:11:18] >> And you're announcing you've created a
[1:11:20] Hero Strike team for this. [laughter]
[1:11:23] >> No, I wish I could just do that, but it'
[1:11:26] be cool, you know.
[1:11:27] >> So, that's not something coming soon.
[1:11:30] >> Well, there is work being done on the
[1:11:32] control systems, right? But not not not
[1:11:35] that I could say it's coming soon to
[1:11:37] Star Citizen. [sighs]
[1:11:39] Yeah, unfortunately there's a lot of
[1:11:40] work there [laughter]
[1:11:43] >> and while you're at you know while yeah
[1:11:45] you know it'd be nice if it stored them
[1:11:47] and saved them you know you know h
[1:11:49] having a system for actually configuring
[1:11:51] the made sense and whatever that's all
[1:11:52] great and what but if I got to redo it
[1:11:54] every patch
[1:11:55] >> yeah I know
[1:11:57] >> so
[1:11:58] >> saving them cloud save across machines
[1:12:00] would be great right
[1:12:01] >> yeah yeah exactly [laughter] to me then
[1:12:04] >> I mean it's the kind of thing where like
[1:12:07] we we do I do maintain a couple of of
[1:12:09] rigs at CI and people always changing
[1:12:12] bindings, but the problem is I can't
[1:12:15] reapply my bindings because it's not the
[1:12:17] system anyway.
[1:12:18] >> So, there are there are there are sits
[1:12:20] in the office.
[1:12:22] >> Uh there's sims in just about every
[1:12:23] office at this point, aren't there? Yes.
[1:12:24] >> Yeah.
[1:12:25] >> And Benois is a as if he didn't have
[1:12:27] enough to do. It's it's his little pet
[1:12:29] project. He's he's he's he's intricately
[1:12:31] involved in them. It's a it's every time
[1:12:33] I come by and he's at a he's at a sim
[1:12:35] pet, I'm like, "You have more important
[1:12:36] things to do." He's like, and it's
[1:12:39] always like, "SOMEBODY CHANGED MY
[1:12:40] BINDINGS." [laughter]
[1:12:42] SORRY, PETE. I I knew the the emphasis
[1:12:44] on it. It's just the number of times
[1:12:46] I've walked past this man who it just
[1:12:48] like
[1:12:49] >> So, yes.
[1:12:51] >> I mean, it's because Yogi and I always
[1:12:52] are fighting against what the best
[1:12:54] binding is. You know, mine is clearly
[1:12:58] better, but you know, [clears throat]
[1:13:00] >> so we've decided at some point we'll
[1:13:01] just fix the binding system so that we
[1:13:03] don't have to argue. Just a little bit
[1:13:04] when you want.
[1:13:04] >> And you had a second one. Uh so my
[1:13:07] second one for inside the game is that
[1:13:09] we're [sighs and gasps] I've always
[1:13:11] found in general like uh
[1:13:16] you know like mission chains is a thing
[1:13:19] that I like I feel we our gameplay is
[1:13:21] always onedimensional right like you do
[1:13:24] a thing you finish it missions so we're
[1:13:27] I know because I know of things right I
[1:13:28] know we're working in on an updated
[1:13:30] mission system
[1:13:31] >> you're talking about the limitations of
[1:13:32] the existing missions you're not talking
[1:13:34] about the quality of the work of people
[1:13:36] that are working on these things. You're
[1:13:38] talking about the tools that they have
[1:13:39] to work
[1:13:39] >> the system around that doesn't allow us
[1:13:41] to do these massive quest chains, right?
[1:13:43] And I think that that for me would be a
[1:13:45] huge quality of life because you could
[1:13:46] go onto a long adventure that takes you
[1:13:48] across multiple things. And so
[1:13:50] >> Elliot Malty was about to be on the
[1:13:52] corner of the building
[1:13:54] right now, [laughter]
[1:13:55] you know, talking about the tools that
[1:13:57] that that are missionable.
[1:14:00] Exactly.
[1:14:01] >> Exactly. So, I know we're working on we
[1:14:03] are working on a on a an updated way to
[1:14:05] make missions that is a lot more uh
[1:14:08] scalable for that, right? And for me,
[1:14:10] that's like like a big quality of life
[1:14:12] because I feel you can go in a in a long
[1:14:14] on a longer adventure and I think that's
[1:14:16] a big quality of life overall.
[1:14:18] Okay. I I think that's I know that
[1:14:22] that's one that a lot of people would
[1:14:23] would would would comment on. I mean,
[1:14:26] what they're doing within the tool set
[1:14:28] that that that they've had for so long.
[1:14:30] Um, I think we should talk about a
[1:14:33] little bit of why that Well, maybe not
[1:14:36] why, but we can acknowledge
[1:14:42] we can acknowledge that the tool set
[1:14:44] that was originally developed was not
[1:14:46] robust enough. It it was it was it was
[1:14:49] not it was not in line with the
[1:14:52] directions of a proper MMO. Right. Uh I
[1:14:55] it's it's no
[1:14:59] trying to decide how how candid I want
[1:15:01] to be here [laughter]
[1:15:02] and whatnot. It's a mission system.
[1:15:06] It's a mission system that can't give
[1:15:09] you a reward for doing something like
[1:15:12] like we we we built the first version of
[1:15:14] the mission system where you do a thing,
[1:15:15] you achieve a goal and we can't hand you
[1:15:19] a thing,
[1:15:19] >> right,
[1:15:20] >> in in your and that that it's I'll just
[1:15:23] use that simple example as as as as a as
[1:15:27] a coloring of the limitations of the
[1:15:29] existing mission system for however that
[1:15:31] was built and why that was built and who
[1:15:33] that was built and everything. We've
[1:15:35] made changes internally to fix it. We've
[1:15:37] made changes internally to to to adjust
[1:15:39] it, to replace it. It's currently
[1:15:40] underway.
[1:15:42] >> What they've managed to do with the
[1:15:43] limitations has been stellar. I was just
[1:15:46] I was just uh uh I was just seeing stats
[1:15:49] about this. The event that's on right
[1:15:51] now, the event that's on right now built
[1:15:53] with the existing system, built with
[1:15:54] limitations, has our highest concurrency
[1:15:57] in the last two years outside of an
[1:16:00] Invictus or an IAE. So it's like it's
[1:16:03] like they're doing tremendous work.
[1:16:05] They're doing tremendous work with the
[1:16:07] work with the tools that they have.
[1:16:08] >> Yes.
[1:16:09] >> We've got to unlock those tools.
[1:16:11] >> That's exactly right.
[1:16:11] >> We've got to unlock tools for them.
[1:16:13] >> Exly. That's for me. That's the quality
[1:16:14] of life update
[1:16:15] >> because if they can do this with that.
[1:16:18] >> Imagine what they could do
[1:16:19] >> if they could actually chain these
[1:16:21] things together and and and and and
[1:16:23] segment them off and and have one
[1:16:25] continue after another and and stuff
[1:16:28] like this. So
[1:16:29] >> Exactly.
[1:16:30] and tie into reputation, economy, you
[1:16:33] know, so that it actually is one big
[1:16:35] loop, right?
[1:16:36] >> All right, cool.
[1:16:38] >> Now that I've saved your life from LA,
[1:16:40] mall be killing you. [laughter]
[1:16:44] >> Um, let's talk about some features
[1:16:46] currently in development.
[1:16:47] >> Sure.
[1:16:47] >> Crafting.
[1:16:48] >> Yeah.
[1:16:49] >> Uh, tech preview just happened recently.
[1:16:51] >> How's that going?
[1:16:52] >> Good, actually. Uh, I mean, I don't want
[1:16:54] to say surprisingly good because the
[1:16:56] team did amazing work on it, but it's
[1:16:59] it's it's been going super well. I mean,
[1:17:02] there's a lot of work left, right? But I
[1:17:05] think that we got what we needed from
[1:17:06] the tech preview. Um, and it wasn't a
[1:17:09] complete meltdown, which is, you know,
[1:17:11] always a good thing. Uh but um you know
[1:17:15] the the team is working really hard to
[1:17:18] try to hit potentially a patch soon with
[1:17:23] crafting which uh you know I really
[1:17:25] believe that crafting is such a big step
[1:17:28] for Star Citizen as a whole. Uh you know
[1:17:32] it it it's just uh it will be a
[1:17:34] different game with the crafting system
[1:17:36] in place. And so,
[1:17:38] >> uh, the work that those teams are doing
[1:17:40] right now to bring this to life is
[1:17:41] incredible. I think that we're
[1:17:43] leveraging the technology that we have
[1:17:45] to, you know, be able to create runtime
[1:17:47] items with different, you know,
[1:17:49] properties and things like that. And so,
[1:17:51] so far the the first tech preview has
[1:17:53] been surprisingly uh, solid and and a
[1:17:57] success, I would say. And so, now we're
[1:17:58] writing the cotails of that tech preview
[1:18:00] to, you know, try to see for a launch
[1:18:02] window for crafting. And you can't have
[1:18:05] crafting without the inventory rework.
[1:18:07] >> Correct. That's right.
[1:18:08] >> And and and that that we I actually I
[1:18:11] rarely ask a question I don't know the
[1:18:12] answer to already. The inventory rework
[1:18:14] is in the same tech preview, right?
[1:18:15] >> Uh I don't think it was I don't think it
[1:18:18] was
[1:18:18] >> because if you can't So So you can't
[1:18:19] have crafting without the inventory
[1:18:21] rework, but the the tech preview for
[1:18:22] crafting doesn't have
[1:18:23] >> technically you can. They can be.
[1:18:25] >> It would just be really bad.
[1:18:26] >> Exactly. It's it's just it's more from a
[1:18:28] game design point of view. Uh but the
[1:18:31] the inventory work is going really well.
[1:18:33] Uh I mean some of the people have been
[1:18:35] reposting screens recently on the
[1:18:38] original concept, right? Uh that was
[1:18:41] shown. I mean it's starting to look like
[1:18:42] that. So that's pretty good. Uh
[1:18:44] >> when does that go into tech preview?
[1:18:46] >> We're hoping very soon because like at
[1:18:48] this point the every version that I've
[1:18:51] seen is fully functional and so we just
[1:18:54] really want to solve one thing. This is
[1:18:57] one and you say quality of life like if
[1:18:59] I have a third one to add to my list.
[1:19:01] Right.
[1:19:03] The speed of rendering of icons in the
[1:19:06] inventory. Right.
[1:19:06] >> Right. And so like right now you open
[1:19:09] your inventory and there's always a
[1:19:11] moment where it's rendering RT like the
[1:19:14] render to texture icons for each of
[1:19:16] those. Now in case you don't know this
[1:19:18] is a full 3D scene that gets rendered
[1:19:20] flat right there. Like we have versions
[1:19:22] of this in previous concepts where it's
[1:19:24] full 3D. Mhm.
[1:19:25] >> It's, you know, super nice, but
[1:19:28] >> takes forever to load
[1:19:29] >> and the the user experience is not
[1:19:31] great, right? And no matter the amount
[1:19:33] of work we're going to put on the UI and
[1:19:35] the functionality of inventory,
[1:19:37] the speed of the UI is is really a thing
[1:19:40] that we need to improve. And so that's
[1:19:42] the part that we're still iterating on
[1:19:43] now. We've done massive improvements,
[1:19:45] but there's still, you know, we need to
[1:19:47] we need to dial that in perfectly
[1:19:49] because that's the the part we really
[1:19:50] want to solve.
[1:19:51] >> But you feel good about it?
[1:19:53] >> I feel good about it. Yeah. Yeah.
[1:19:54] Absolutely. You feel good enough to
[1:19:58] say 4.7 in March?
[1:20:01] >> I think so. I think so.
[1:20:03] >> Don't put the camera. When he says when
[1:20:04] he says that, you got to put the camera
[1:20:06] on him. No, you look at the camera. You
[1:20:08] say inventory.
[1:20:09] >> I think inventory is going to be in 47.
[1:20:11] I think so.
[1:20:12] >> Okay.
[1:20:14] [snorts]
[1:20:15] You're going to put the small text after
[1:20:17] this, right?
[1:20:18] >> No, this is live. [laughter]
[1:20:19] This This is live, baby. No, no, no, no,
[1:20:21] no small text. And so if inventory
[1:20:23] rework is 47, I'm not going to push you
[1:20:25] on crafting. It's a much it's a super
[1:20:27] complicated thing or whatever. But but
[1:20:30] >> and the teams are working really hard
[1:20:31] for that launch window if they can make
[1:20:33] it
[1:20:35] >> for that launch window.
[1:20:36] >> We're we're pushing really hard for that
[1:20:37] launch window.
[1:20:38] >> You're push you're pushing really hard
[1:20:40] to get crafting in 47.
[1:20:42] >> Yes.
[1:20:43] >> In March.
[1:20:43] >> Yes.
[1:20:44] >> Okay.
[1:20:45] >> No promises.
[1:20:46] >> No. Pushing hard pushing pushing pushing
[1:20:47] hard is fair. Pushing hard is fair. And
[1:20:50] it's in line with what I' I've seen.
[1:20:52] Yeah.
[1:20:52] >> I've seen. So I won't correct you on
[1:20:54] that or whatever. You're
[1:20:55] >> Now, we don't know what surprises are
[1:20:56] ahead. Yeah.
[1:20:57] >> But yeah.
[1:20:58] >> So keep keep tech pre keep tech
[1:21:00] previewing.
[1:21:01] >> Keep tech previewing. Exactly.
[1:21:02] >> Yep. And for for for for your part,
[1:21:06] >> keep logging in to the tech previews and
[1:21:08] keep testing. It's it's I cannot stress
[1:21:10] this enough. The the the more involved
[1:21:13] folks are in those things, the more
[1:21:15] likely we are to be able to deliver
[1:21:17] them.
[1:21:17] >> And the feedback is really key. Yeah,
[1:21:20] most of the feedback's okay. Some of
[1:21:21] it's [laughter]
[1:21:22] some of it's trash to be completely
[1:21:24] honest.
[1:21:26] Small small amount of it. It's just it's
[1:21:31] just what
[1:21:33] >> Hey, it is what it is.
[1:21:34] >> Hey, the candidate goes both ways. How's
[1:21:37] instancing going?
[1:21:39] >> Very good. Actually, the we actually had
[1:21:41] a summit this week about instancing uh
[1:21:44] about getting all of the levels set up
[1:21:45] to support it um at this point. So maybe
[1:21:49] I can do a quick recap on uh what we've
[1:21:52] discussed on instancing before. So
[1:21:54] talked about server meshing, right? So
[1:21:56] instancing is basically a an additional
[1:21:59] system on top of of of server meshing
[1:22:02] which allows us to take an area of space
[1:22:05] and give it to a a server in the mesh to
[1:22:08] manage, right? Doesn't matter which one.
[1:22:10] Uh the geographical if I want the
[1:22:13] spatial position of this thing has
[1:22:14] doesn't matter, right? Um so for example
[1:22:17] when you go to your hanger right now
[1:22:18] that is an instance right so what we're
[1:22:21] we're doing is we're taking this system
[1:22:23] that manages this and we're making a
[1:22:24] true instance manager uh with it. So we
[1:22:27] currently have the backend service
[1:22:29] completed for this. Um and so uh what
[1:22:32] that provides is the mechanism for
[1:22:36] creating an instance that you uh that is
[1:22:38] associated with you or your party and
[1:22:41] having you know rules for how many this
[1:22:44] instance is made for how many players
[1:22:47] enforcing player caps and party caps for
[1:22:49] that instance managing the life cycle of
[1:22:52] the instance. So, hey, we want, you
[1:22:54] know, go back to my wow days. I mean,
[1:22:56] maybe that's dated now, but like your
[1:22:58] molten core instance lives for 10 days,
[1:23:01] right? So, the instance manager is in
[1:23:03] charge of doing that. So, that systems
[1:23:05] in place now. And so, the teams are
[1:23:07] currently working at how the entrance to
[1:23:10] the instance is going to work, right?
[1:23:12] So, well, we know how it's going to
[1:23:14] work, but like how it ties into level.
[1:23:16] So, level designers put in, you know, an
[1:23:19] entrance way. At what point is are you
[1:23:22] crossing the boundary? What brings you
[1:23:23] to the instance? What brings you out? Uh
[1:23:26] transport is a requirement for
[1:23:28] instancing. So just ties into all the
[1:23:30] discussion we just had like transit
[1:23:33] cannot bring you to an instance but
[1:23:34] transport can.
[1:23:36] >> Okay.
[1:23:36] >> So basically we want to power that up
[1:23:38] there. So you can imagine um an area of
[1:23:41] space that you walk into through a SAS
[1:23:44] or an elevator or a transit train and
[1:23:48] when you come out you're in instance but
[1:23:50] you don't even see
[1:23:51] >> you never see that loading
[1:23:52] >> demarcations exact exactly now you're
[1:23:54] inside the instance you play inside the
[1:23:56] instance you can gather items
[1:23:57] inventories whatever boss fights etc and
[1:23:59] then you can exit through another
[1:24:00] transit link and that's it you're back
[1:24:02] in the world
[1:24:02] >> so if we do this right if we do this
[1:24:05] right
[1:24:07] you should never
[1:24:09] be aware that you're doing it. We we
[1:24:11] might have to put some kind of indicator
[1:24:12] on there because of like like like raid
[1:24:14] locks or whatever. We know we talked
[1:24:16] about municipal works, you know, and
[1:24:17] like this. So, we might there might have
[1:24:19] to be some UI stuff that that to to tell
[1:24:21] you to
[1:24:22] >> Yeah. Some some screens will show you
[1:24:24] like, oh, you can't enter this
[1:24:25] >> cuz from an experience, we're it's it's
[1:24:28] there's no load screen there there.
[1:24:30] There's no hold on, please wait. We're
[1:24:31] transferring you to, you know, whatever.
[1:24:33] Like you say, it's just it's just you're
[1:24:35] going to go and suddenly the world
[1:24:37] around you is going to melt away and you
[1:24:39] will be in a section of the universe
[1:24:40] that is dedicated entirely to you and
[1:24:42] your party.
[1:24:43] >> Exactly. To play it, right? And then,
[1:24:45] you know, we're also talking about at
[1:24:47] the moment how the instance manager
[1:24:49] responds to the mission system because
[1:24:52] we might want to be able to change what
[1:24:54] level you're going into when you pass
[1:24:56] the the threshold or things like that.
[1:24:58] And so, um or the access rights, right?
[1:25:01] So if you think back, man, I keep going
[1:25:03] back to wow. This sucks, but whatever.
[1:25:06] >> In the good old WoW days, you know, you
[1:25:08] need to do lower black rock spire and at
[1:25:11] some point someone has a key. That's the
[1:25:13] requirement that unlocks upper black
[1:25:14] rock spire.
[1:25:15] >> Well, we have we're thinking about
[1:25:17] mechanics in that vein.
[1:25:19] >> Yeah.
[1:25:19] >> That allow the mission system to lock or
[1:25:21] unlock or access rights to an instance.
[1:25:24] And so all of this is currently being
[1:25:25] managed, but it's going really well.
[1:25:27] most of the networking uh capabilities
[1:25:29] that we needed have been added already.
[1:25:32] So, one of them is that currently when
[1:25:34] you go to your instance, the way the
[1:25:36] server actually tracks that is we we put
[1:25:38] a flag on
[1:25:40] >> on your character that enables you to
[1:25:42] stream in your hanger and actually view
[1:25:45] your hanger when you go there. And we
[1:25:47] remove that flag when you leave it or
[1:25:49] when you go elsewhere when the hanger uh
[1:25:51] is removed. And so in uh in the code up
[1:25:55] to now, we only had the ability for a
[1:25:56] single one of those on your character.
[1:25:58] So we could only give you access to one
[1:25:59] instance, but we need to be able to give
[1:26:02] you multiple access to multiple
[1:26:04] instances because we might have areas of
[1:26:06] transit that cross like one instance to
[1:26:08] another instance, things like that.
[1:26:10] We're going a bit deep with this, but at
[1:26:12] the moment those mechanics are are
[1:26:14] ready. So the networking bit is done. So
[1:26:17] now we're really about crafting the
[1:26:18] first experience that we want to do with
[1:26:20] instancing
[1:26:20] >> and the first instance content will be
[1:26:23] Siege of Origin. We announced that
[1:26:25] >> Redux Sri Redex says France.
[1:26:28] >> Yeah.
[1:26:28] >> Um some uh you know that's that's
[1:26:31] scheduled to come online. Uh we talked
[1:26:33] about it during Citiz Direct. Uh that's
[1:26:35] that's that's one of the that's one of
[1:26:37] the content drops that are scheduled for
[1:26:38] this year.
[1:26:39] >> Yeah. Um, basically everything you
[1:26:42] should, you know, we've been talking a
[1:26:43] little, we've been talking more about a
[1:26:45] schedule than I probably intended at the
[1:26:46] beginning of this thing, but everything
[1:26:47] you saw talk about stuff.
[1:26:49] >> Sorry. Everything that you saw at
[1:26:50] Citizen Con Direct last year is
[1:26:51] scheduled for 2026.
[1:26:53] >> So, uh, and we announced at the
[1:26:55] beginning of the the year with the first
[1:26:58] ISC that we're now going we've now moved
[1:27:00] to a bimonthly, that's once every two
[1:27:03] months for those who like homonyms. I'm
[1:27:05] not above recycling a joke. uh uh
[1:27:08] content length. So if you know the the
[1:27:10] first one was in January, we've already
[1:27:13] stated the the second one's in in March.
[1:27:16] The third one will be in in May like it
[1:27:19] like there's like there's always a a
[1:27:20] patch in May for very important reasons.
[1:27:23] >> Um
[1:27:24] >> so forth and so forth. So you so when
[1:27:26] you when you it's one of those things
[1:27:27] where when you look at the content for
[1:27:29] Citizen on Direct, you can sort of start
[1:27:31] to reverse engineer where where things
[1:27:33] go. I'm not going to tell you. I'm
[1:27:34] saying you've got the tools. You've got
[1:27:37] the tools. You can pretty much kind of
[1:27:39] >> Yeah.
[1:27:40] >> gather where everything is going to be
[1:27:41] and I'd like to see uh your schedules.
[1:27:43] And that's just content. That's just the
[1:27:45] content stuff because that's really what
[1:27:46] we talked about at at
[1:27:48] >> I can tell you like from being with the
[1:27:50] team this week working on instancing.
[1:27:52] Everybody's like super stoked. Like it's
[1:27:55] it's like the energy is really high on
[1:27:57] like oh man you know how you enter it,
[1:28:00] how you exit it, what gameplay is going
[1:28:01] to be in it. There's also a big piece of
[1:28:03] this which is like some designers, you
[1:28:05] know, in this case can design an exper
[1:28:08] uh an experience that is repeatable.
[1:28:11] Most of the content we've produced this
[1:28:13] year was, you know, there's a PVE
[1:28:16] experience for it, but it's
[1:28:17] fundamentally in a PvP zone. So, that is
[1:28:20] giving them those tools to make
[1:28:21] something that's fun and repeatable as
[1:28:23] an experience.
[1:28:25] >> And uh I mean I I just the energy is
[1:28:27] really good.
[1:28:27] >> No, no, Chad's like Squadron 42,
[1:28:30] whatever. I ain't talking about Squadron
[1:28:32] 42. I made one very plain spoken,
[1:28:35] reasonable comment about Squadron 42 the
[1:28:37] last time we got together and it got
[1:28:39] press articles, so I ain't saying
[1:28:42] nothing. [laughter]
[1:28:44] I'm talking about Star Citizen.
[1:28:47] Star Citizen.
[1:28:49] Star Citizen. Um,
[1:28:54] where we at?
[1:28:57] I want to inject something.
[1:28:59] >> Inject.
[1:28:59] >> I want to inject something. Yeah, let's
[1:29:00] go.
[1:29:01] >> Something we haven't talked about. It
[1:29:01] came It came from the chat. It came from
[1:29:03] the chat.
[1:29:04] >> Um, regional servers.
[1:29:06] >> Yeah,
[1:29:07] >> regional servers. We We have never had a
[1:29:10] conversation
[1:29:11] >> about reg, shape, or form about regional
[1:29:14] servers. It was there in the chat and
[1:29:16] whatnot. And I think I'm I'm put you on
[1:29:18] the spot here.
[1:29:18] >> What What are they asking? Uh it just
[1:29:20] says regional servers when ju just what
[1:29:23] what what can we do to help the people
[1:29:27] who play in the various regions of the
[1:29:30] world have a better experience? Is that
[1:29:32] the answer? Is regional I guess what I'm
[1:29:34] asking is is regional servers the answer
[1:29:36] or is there some or are we going towards
[1:29:38] something else different that I've
[1:29:39] literally never asked you about?
[1:29:40] >> Well, I don't know in this case if
[1:29:41] they're asking for what I think they are
[1:29:44] but let's talk about regions. So we are
[1:29:47] we already have regions, right? So when
[1:29:50] you play the game, you can pick one of
[1:29:53] the global availability regions that we
[1:29:55] deserve that we service. So obviously
[1:29:58] the US, North America is one. Um the
[1:30:02] Europe is one, we have uh East Asia,
[1:30:06] Australia, um I forget the other ones,
[1:30:09] but I think we have another one. So
[1:30:10] typically we look at user data, right?
[1:30:14] And if it if a an area reaches critical
[1:30:17] mass right at some point then it's worth
[1:30:20] it to deploy shards there. So and have
[1:30:23] shards hosted in that region. So uh we
[1:30:26] do it like between US and EU. Obviously
[1:30:28] they share our common backend. So your
[1:30:30] inventory system is is hosted in one
[1:30:32] central area but then the actual game
[1:30:34] servers you're playing on for latency
[1:30:35] reasons is going to be closer to your
[1:30:38] area. right now. Um,
[1:30:41] you know, we we are revisiting our
[1:30:43] region kind of distribution for a couple
[1:30:46] reasons like we've done some pretty
[1:30:48] large without naming any uh any details
[1:30:52] here, but we're we've we're in the
[1:30:54] process of doing some pretty large
[1:30:55] migrations uh you know in in how we host
[1:31:00] the game. So there's even if it's a bit
[1:31:03] transparent, there is a lot of changes
[1:31:04] happening there. And so we are
[1:31:06] revisiting our our our region map uh
[1:31:09] kind of at the moment. But typically the
[1:31:10] way that we've done this is we look at
[1:31:12] player data and if we reach critical
[1:31:14] mass in an area then it's worth it to
[1:31:16] start deploying some shards there. But
[1:31:17] it needs to be more than one, right?
[1:31:20] Because deploying one shard in one area
[1:31:22] is problematic because um you know there
[1:31:26] are cases where a shard goes into
[1:31:28] trouble for some reason uh and before a
[1:31:32] hot fix actually deploy that shard is no
[1:31:34] longer usable. So we need to have you
[1:31:36] know it needs a mass to be able to go
[1:31:38] there. Yeah, exactly. A proper cluster
[1:31:40] size
[1:31:41] >> uh to be able to get there. And the
[1:31:43] short version of that is you're
[1:31:46] currently undergoing conversations about
[1:31:48] where
[1:31:48] >> Yeah, we're we're looking at that
[1:31:50] because we we've done some changes. So,
[1:31:51] we have access to more regions than we
[1:31:54] used to. So, we're looking at that, but
[1:31:56] I can't promise any changes. Again, it's
[1:31:57] it's completely based on player uh
[1:32:00] player using the service.
[1:32:02] >> So, during the keybind news
[1:32:03] conversation, you know, every once in a
[1:32:04] while I'll check Teams just to see if I
[1:32:06] still have a job during the shows.
[1:32:07] [laughter]
[1:32:08] Um, which is which is another which is
[1:32:11] another joke I get I get accused of
[1:32:12] making quite often and repeatedly, but
[1:32:15] it isn't a joke. I really do scroll and
[1:32:17] check. Um, Jeffrey P. I added an R
[1:32:21] there. Bearded
[1:32:23] >> bearded.
[1:32:23] >> Didn't mean to add a
[1:32:24] >> What did bearded CI say?
[1:32:25] >> He sent me a Jira
[1:32:28] >> for keybindings. Exporting custom
[1:32:30] keybinds to XML doesn't export all
[1:32:32] >> 2013 or what. [laughter]
[1:32:35] >> He's just sending me Jiraas now. I don't
[1:32:37] know what you think I'm going to do with
[1:32:39] this, Bearded, but thank you. Thanks for
[1:32:41] watching, Bearded.
[1:32:43] >> Thanks, Bearded. I I haven't talked to
[1:32:46] Jeff in a while.
[1:32:47] >> That's actually a guy we should talk
[1:32:48] about if we were going to reevaluate
[1:32:50] regions. Maybe get him on the show next.
[1:32:51] >> You want You want to talk about Jeff?
[1:32:52] Let's talk about Jeff. He can't do
[1:32:53] anything about it. We know he's working.
[1:32:54] >> Yeah, that's right.
[1:32:55] >> So, so what do you think he's hiding
[1:32:56] behind that beard?
[1:33:00] >> We're we're we're in the final stretch.
[1:33:02] We're in the We're in the final stretch.
[1:33:03] We only have a handful of topics.
[1:33:04] >> He does have a big beard. That's not a
[1:33:06] joke. He's not called bearded for
[1:33:07] anything. Um,
[1:33:11] VR
[1:33:13] VR kind of came out of I mean, it's one
[1:33:15] of those things we've been talking about
[1:33:16] it. We we talk about it here and there.
[1:33:19] I mean, let let's let's be real. We've
[1:33:20] talked about a lot of things over the
[1:33:22] years.
[1:33:22] >> I mean, we've talked about a lot of
[1:33:24] things over.
[1:33:24] >> I mean, we used to have VR in 2014.
[1:33:30] [groaning]
[1:33:31] >> I say air quotes that air quotes. That's
[1:33:34] that's like saying I'm a baseball player
[1:33:36] because I've played I I played a couple
[1:33:38] little league games. It's let's it's
[1:33:41] >> a long time ago.
[1:33:42] >> A long time ago.
[1:33:43] >> I think it was Oculus Oculus Devkit one
[1:33:46] >> is what [laughter] was supported at the
[1:33:48] time. Anyway,
[1:33:48] >> and I used it for 45 minutes and ended
[1:33:50] up in the fetal position for the next
[1:33:51] three hours.
[1:33:53] >> Um
[1:33:54] VR is not for me. I want to preface this
[1:33:56] by saying VR is not for me,
[1:33:58] >> but it's for a lot of people. It's for a
[1:34:00] lot of people. And uh uh at the end of
[1:34:03] last year, surprise, a a not a fully
[1:34:06] blown or fully cooked, fully developed
[1:34:09] feature like like we would normally
[1:34:11] refer to them. Some what what how do we
[1:34:13] refer to it? An experimental
[1:34:15] experimental feature of VR.
[1:34:17] >> Yeah.
[1:34:18] >> Where did this come from? What's what's
[1:34:19] going on? [laughter] And and do it
[1:34:22] without saying the word Santa silven.
[1:34:23] >> No. No. Sure. Yeah. Well, so the there
[1:34:27] are a lot of developers at CI that
[1:34:29] really like immersive experience and
[1:34:32] work, right? And so, uh there's a
[1:34:35] contingent of developers uh you know,
[1:34:38] also one specific one that have been
[1:34:40] really trying to get the star engine to
[1:34:43] properly support VR. And so, you know,
[1:34:47] as an experiment and to build that, uh,
[1:34:51] you know, the the these guys and, you
[1:34:53] know, I'm going to, you know, Sylvan in
[1:34:54] specific has been really pushing hard to
[1:34:56] try to get, uh, you know, Star Engine to
[1:34:59] work in VR. Uh, experimented with
[1:35:02] multiple different approaches, you know,
[1:35:04] over the last couple months. uh settled
[1:35:07] on the open XR approach and was actually
[1:35:09] able through his own you know passion
[1:35:11] and then support from his other
[1:35:13] colleagues right to you know get stuff
[1:35:16] fixed so that we could support you know
[1:35:18] VR in specific cases and so um you know
[1:35:22] that's that's how we decided at some
[1:35:24] point hey you know what like this is
[1:35:25] actually pretty cool let's let's release
[1:35:28] it right like we have a a unique chance
[1:35:30] at CI to be able to work on a custom
[1:35:32] engine and and you know working on
[1:35:34] custom technology and So encouraging
[1:35:37] that effort, we decide to release an
[1:35:39] experimental mode to see, hey, let's see
[1:35:40] if people like it. And uh I mean the
[1:35:43] response has been uh pretty impressive
[1:35:46] overall. I think that it's a
[1:35:49] the results that we're able to get in VR
[1:35:51] are are a testament to some of the
[1:35:54] decisions over the years that were taken
[1:35:57] and how the game has been made. And so,
[1:36:00] uh, there's there's a lot of little
[1:36:02] things that just shine when you now put
[1:36:05] the VR headset on that, you know, maybe
[1:36:08] if you're playing just on the PC, you're
[1:36:09] not going to appreciate as much. But,
[1:36:12] you know, uh, and, you know, I'm going
[1:36:15] to go Chris Roberts here, but Chris, you
[1:36:17] know, always insisted on, you know,
[1:36:19] taking the difficult approaches to build
[1:36:21] certain features, right?
[1:36:22] >> Mhm.
[1:36:23] >> Uh, there's a lot of things like, oh, we
[1:36:25] could have done simpler on this one. But
[1:36:27] yeah, but we did the hard road and we
[1:36:29] actually delivered it. And so now when
[1:36:31] you put the VR headset on, well, you've
[1:36:32] got reverse IK in the seat, right? And
[1:36:34] it's like and it's the kind of thing
[1:36:35] that now all these decisions have paid
[1:36:38] off in this VR.
[1:36:39] >> It's a pain in the ass in 2017.
[1:36:41] >> Yeah.
[1:36:42] >> When when when when poor Evo was sure
[1:36:45] was was on it. And now so many years
[1:36:47] later, it's like, oh
[1:36:48] >> yeah,
[1:36:49] >> that part was plugandplay because of it.
[1:36:50] >> Yeah. And I mean the even internally the
[1:36:53] arrival of VR even before the
[1:36:54] experimental mode with ship was you know
[1:36:57] tremendous. Like I spent you know a
[1:36:59] couple of hours here around our our VR
[1:37:02] rigs uh next to my sim rigs to with the
[1:37:04] ship team going like oh I want to see my
[1:37:06] ship in VR let's go let's go and then
[1:37:08] you know cuz designing for VR is a bit
[1:37:10] different like sense of space changes
[1:37:12] and whatever. So that's really a truly
[1:37:14] an experimental mode that we've been
[1:37:16] pushing. Obviously, there's a lot more
[1:37:17] people around Silan to help him out and
[1:37:19] and get this there, but you know, the
[1:37:21] the I think that this is a testament to
[1:37:23] kind of the technical framework that we
[1:37:25] have at CIG that allows that kind of of
[1:37:27] effort to not go unnoticed and you kind
[1:37:30] of show up in the game.
[1:37:32] >> Chat's currently arguing about whether
[1:37:33] VR is a low priority or high priority
[1:37:35] and stuff like this. It's
[1:37:37] >> and the priority at this point doesn't
[1:37:38] matter because it's we're just it's an
[1:37:41] experimental mode. Y
[1:37:42] >> it's a bit like eyetracking. It's a bit
[1:37:44] like, you know, all of these side
[1:37:46] projects, right? Like head tracking, eye
[1:37:48] tracking.
[1:37:49] >> It's not an initiative on the same scale
[1:37:52] as the inventory rework or as crafting.
[1:37:55] It's not it's not it's not a full
[1:37:56] initiative. It's it has not taken a
[1:37:58] priority over absolutely something else.
[1:38:00] >> Exactly.
[1:38:01] >> Um
[1:38:03] I've only got a couple more questions
[1:38:05] for you and they're they're kind of the
[1:38:06] big ones and yes people, it's about the
[1:38:08] thing that you want you want us to talk
[1:38:10] about. Saving it for the end. I've been
[1:38:12] doing this for a while. Um, but I wanna
[1:38:15] I want I want to take a few questions
[1:38:16] from the chat right now before we get to
[1:38:17] it because we're actually doing okay on
[1:38:19] time here.
[1:38:19] >> All right.
[1:38:20] >> Um, is the inventory rework is it just
[1:38:23] UI or will it actually
[1:38:26] apply any additional functionality to
[1:38:27] stacking and unstacking and stuff like
[1:38:29] that?
[1:38:30] >> There's additional functionality but
[1:38:32] obviously the big of the groundwork was
[1:38:34] the UI you know uh usability but if you
[1:38:37] look at the mockups right you also see
[1:38:39] equipment. So it's not just inventory,
[1:38:40] it's actually equipment plus assignment
[1:38:42] on your character. So the paper doll
[1:38:44] approach u there's also uh some other
[1:38:47] elements like proximity inventories that
[1:38:49] are part of that which are pretty large
[1:38:51] functionality wise and I think will have
[1:38:53] an impact.
[1:38:54] >> So it's not just UI there's there's a
[1:38:56] lot more client architecture also the
[1:38:58] way the
[1:39:00] >> the way the UI pulls the data caches the
[1:39:01] data and displays it.
[1:39:04] Um,
[1:39:05] uh, more Twitch drops. There will be
[1:39:07] more Twitch drops this year, uh, already
[1:39:09] in that. Uh, yes to medical. Why didn't
[1:39:12] Levki mold situation have us rescuing
[1:39:13] NPCs with medical ships? We'll talk
[1:39:15] about that in two weeks when we've got
[1:39:17] uh Elliot and Torsten on the on the show
[1:39:20] here. We'll talk we'll talk about that
[1:39:21] whole event and stuff. So, we'll save
[1:39:23] that question for them so they can speak
[1:39:24] about their own work. Um, [laughter]
[1:39:28] when Nicks won this year.
[1:39:31] >> Yeah.
[1:39:33] Uh,
[1:39:36] that's the thing that got me in trouble.
[1:39:37] The thing I I I I did I I I I hope and I
[1:39:41] it got articles. CR spokesperson says he
[1:39:44] hopes this will be whatever. I'm like,
[1:39:45] "Oh, yeah." [laughter]
[1:39:47] >> Um,
[1:39:50] let's see. There's the There was a gosh,
[1:39:53] there was there's one more. I can't find
[1:39:54] it. There was one more question I want
[1:39:56] to sneak in before the questions that
[1:39:57] are already on here. Um, all right. This
[1:40:01] section is called
[1:40:04] final hot seat stuff is
[1:40:08] >> I just read final hot stuff.
[1:40:10] >> You missed a [laughter] word. Um
[1:40:14] things that are happening in the game
[1:40:15] today. Economy exploits.
[1:40:18] Economy exploits. And if if you're
[1:40:21] watching the show and you're and you and
[1:40:23] you're wondering why I'm talking about
[1:40:24] economy exploits, it's because I'm going
[1:40:26] to get to the next question that you've
[1:40:27] got. The question you've had the whole
[1:40:29] time. So
[1:40:30] >> yeah. Let's talk about the economy
[1:40:32] exploits.
[1:40:32] >> Sure.
[1:40:33] >> What's happening?
[1:40:35] >> There are exploits. [laughter]
[1:40:38] >> Be better.
[1:40:40] [gasps]
[1:40:40] >> Well, so uh you know in terms of the
[1:40:45] economy in general, right? Uh there
[1:40:48] there's a couple I think it's up we're
[1:40:50] up to seven or eight right now. So we
[1:40:52] first of all we have a strike team on
[1:40:54] this at the moment, right? Looking at
[1:40:56] all these different things. Uh there's a
[1:40:58] couple of ways in which you know there's
[1:41:00] been potentially duping
[1:41:04] uh ways to earn rewards it's not
[1:41:06] supposed to have.
[1:41:06] >> I think we're beyond potentially.
[1:41:08] >> No. No. Well, yeah. Yeah. Yeah. Yeah.
[1:41:10] >> Okay. Fair.
[1:41:11] >> And um and so we're looking at all these
[1:41:14] exploit vectors, right? To fix them
[1:41:16] obviously that needs to be prioritized.
[1:41:19] Uh the big conversation that was spawned
[1:41:20] from that is like you know we're a game
[1:41:23] in development but we're also delivering
[1:41:26] life service right and so
[1:41:28] >> we don't have a framework for this in
[1:41:31] that internally we don't when we get
[1:41:34] exploit reports we don't necessarily
[1:41:36] automatically prioritize them. Uh so the
[1:41:39] conversation that was spawned was like
[1:41:41] okay well there are going to be exploits
[1:41:43] right it's it every game has a series of
[1:41:47] exploits for its entirety of of its life
[1:41:49] right no game has no exploits and so the
[1:41:52] question is more how do you respond for
[1:41:54] it right and so historically
[1:41:56] exploits have always taken a lower
[1:41:58] priority to ongoing development right
[1:42:02] >> I'm going to jump in you're tense
[1:42:04] switching between past and present here
[1:42:05] I want to be clear you're talking about
[1:42:06] the past right now
[1:42:07] >> the past
[1:42:08] He's he's he's tin switching a couple
[1:42:10] times. It makes it sound like he's
[1:42:11] talking about today. It's like we're
[1:42:13] talking about the past guys.
[1:42:14] >> So in the past, right, it's a exploits
[1:42:16] would fall be bugs like any other,
[1:42:19] right?
[1:42:20] >> Depending on the severity sometimes they
[1:42:22] got escalated, but we didn't have a
[1:42:24] process for this. So now the
[1:42:26] conversation is about when we do get an
[1:42:29] exploit report, how do we deal with it?
[1:42:30] Like how do we escalate it? How do we
[1:42:32] respond to it? How do we deal with it?
[1:42:34] Right? And so for the current ongoing
[1:42:36] exploits that we know about that have a
[1:42:38] damaging effect on the economy
[1:42:40] currently, we're we're dealing with them
[1:42:43] the same way we've dealt with the other
[1:42:44] hero strike teams. And so we're looking
[1:42:46] at each one of them and confirming the
[1:42:49] fixes, right? Because sometimes, you
[1:42:51] know,
[1:42:51] >> you fix an exploit, there's a second
[1:42:53] vector right away. So those are
[1:42:54] complicated fixes sometimes. So we're
[1:42:56] we're dealing with these things right
[1:42:58] away. But the the big thing
[1:43:03] that also this puts in light is that
[1:43:05] even a a minor exploit at the moment has
[1:43:08] a tre a very large effect on the economy
[1:43:11] because
[1:43:12] there are many limits that are not in
[1:43:14] place. And so at the moment we're also
[1:43:17] looking at
[1:43:19] overall economy design and limits around
[1:43:23] you know selling inventory capacity uh
[1:43:27] exchange limits ongoing active tracking
[1:43:30] of player trades and or large purchases
[1:43:33] things like that. Now we want to make
[1:43:35] clear that we want the economy to be fun
[1:43:37] and you know movable but we also need
[1:43:40] some protectionism behind it. And so
[1:43:43] that's what we're looking at at the
[1:43:44] moment. Now, I don't have all the
[1:43:45] solutions. I didn't write them down or,
[1:43:47] you know, show them out. But this is the
[1:43:49] spirit that we're in at the moment on
[1:43:51] these e economy exploits.
[1:43:52] >> You're you're you're you're
[1:43:56] >> you're being very diplomatic about
[1:43:57] something. I I want to point out some of
[1:44:00] the struggle with talking about this.
[1:44:02] >> Yeah.
[1:44:07] >> We can't tell you how we're doing.
[1:44:09] >> We can't tell you what We can't tell
[1:44:10] people what we're doing. Yes. Because
[1:44:12] because every single every single
[1:44:16] let's let's back this up a bit. So an
[1:44:18] exploit exists. An exploit exists. We
[1:44:23] whatever timeline you want. We we'll
[1:44:24] just make it simple. We we'll make it
[1:44:26] real simple and just and do days for the
[1:44:28] point of conversation here. Exploit
[1:44:30] exists on day zero. On day one it comes
[1:44:34] to our attention. It comes to our
[1:44:35] attention. By day two we figured out we
[1:44:38] we we figured out what's causing it.
[1:44:40] would cause it on day three. We could
[1:44:44] fix it potentially potentially depending
[1:44:46] on the severity like but we don't
[1:44:48] automatically
[1:44:50] do that because there's stuff to be
[1:44:53] learned by leaving it in certain cases.
[1:44:56] We we we f we find more information out
[1:44:58] about who's doing it. We find we find
[1:45:00] where it's coming from about other
[1:45:02] vectors. We found like any bug.
[1:45:04] >> Okay, we found this cause but sometimes
[1:45:06] there's five other causes for every bug.
[1:45:07] So you find this cause of an exploit,
[1:45:09] but maybe there's four other causes for
[1:45:12] that same exploit. And if we patch this
[1:45:13] one up right now, we may hide the other
[1:45:16] ones and we won't discover them for much
[1:45:18] much later. And so go there's this
[1:45:20] incredible dance that I get to I I get
[1:45:23] to see I get to sit here and watch. You
[1:45:25] know, I I get to sit here and watch you
[1:45:26] guys you guys do occasionally. I I speak
[1:45:29] up with a thing and you're you're you're
[1:45:30] very kind to humor me here and there
[1:45:33] from time to time, but I get to watch
[1:45:35] you and and and the player experience
[1:45:38] team and your programmers and everybody
[1:45:39] involved do this amazing dance of of of
[1:45:42] finding these things and researching
[1:45:43] these things and and and working out how
[1:45:46] they happen. And
[1:45:48] >> we can't it's one of those things we
[1:45:49] come here on a show and I want to talk
[1:45:51] about it. We t we were talking about
[1:45:52] this last night, but we can't go through
[1:45:54] all the methodologies. We can't discuss
[1:45:56] all we can't discuss all the solutions
[1:45:57] because then knowledge is power and if
[1:46:01] you know if if they know what we're
[1:46:02] doing then they can around it. It's it's
[1:46:04] this incredible incredible dance
[1:46:07] >> that is frustrating and it can often
[1:46:09] look like we're sitting on our hands
[1:46:11] doing absolutely nothing.
[1:46:12] >> That's right.
[1:46:13] >> And that's an unfortunate frustrating
[1:46:17] side effect of the proper way to do
[1:46:19] this.
[1:46:19] >> Yeah. Well, every everything time it
[1:46:21] touches security, anti-che, economy,
[1:46:25] exploits, it falls in that
[1:46:28] >> it's going to fall into that area where
[1:46:30] we can't be as as transparent as we'd
[1:46:32] like to be.
[1:46:33] >> And
[1:46:34] they're saying in chat now and they're
[1:46:36] not wrong like like like like like
[1:46:37] cheats and exploits have sunk so many
[1:46:40] games. It
[1:46:41] >> it it's it's we we they have to get a
[1:46:44] hold on them. We have to get a handle on
[1:46:45] them. We have to we have to fix them and
[1:46:46] whatnot. And again, but it's this it's
[1:46:49] this dance. It it can't always be right
[1:46:52] away.
[1:46:52] >> Correct.
[1:46:53] >> It can't at least that's one of the
[1:46:54] things that alpha affords us. It it's we
[1:46:56] have to we we we take the time to make
[1:46:58] sure that we do it right. Take the time
[1:46:59] to make sure we research. Take the time
[1:47:01] that we're actually finding
[1:47:03] >> all the bad actors and blah blah blah.
[1:47:05] It's just at this and at the same time
[1:47:08] it's
[1:47:10] annoying because
[1:47:12] you want to go to Reddit, you want to go
[1:47:14] to Spectrum, you want to go to Twitter,
[1:47:16] whatnot
[1:47:17] >> and just scream we're on it, we're doing
[1:47:19] it, whatever, but you can't tip your hat
[1:47:22] anything. You can't you can't you it's
[1:47:24] because every every
[1:47:26] >> well I put my colon eyes colon emoji
[1:47:29] sometimes on stuff on spectrum just oh
[1:47:31] you know you can't say we're actively
[1:47:34] chasing this one because then the people
[1:47:35] are using it scatter and we don't find
[1:47:37] them. It's like this
[1:47:38] >> it's it's one of the hardest aspects of
[1:47:41] game development communication
[1:47:43] >> especially for a project like us that
[1:47:45] prides itself on on being as open as we
[1:47:48] are. You know, people will be like,
[1:47:49] "Open development? I can't believe
[1:47:51] you're not telling us. That doesn't mean
[1:47:52] it's open." I'm like, "Open development
[1:47:53] means we're more open than any other
[1:47:54] person, any other company in the history
[1:47:56] of the medium. It doesn't mean we share
[1:47:59] every single thing, every single moment
[1:48:01] the minute it comes out." I do sometimes
[1:48:03] and I get in trouble.
[1:48:05] >> But [laughter]
[1:48:05] but it's it's really difficult. I I
[1:48:08] >> It's a difficult balancing act for sure.
[1:48:10] >> It's terrible because there's been so
[1:48:12] many moments when I want to go out and
[1:48:14] scream, "We got this. We're on it. We're
[1:48:16] we we're we're doing this. It's fix."
[1:48:18] But we just can't. You can't because it
[1:48:20] makes it harder.
[1:48:21] >> It makes it harder to do.
[1:48:22] >> Well, yeah. And you're going to miss
[1:48:23] things. That's the main thing.
[1:48:26] [sighs]
[1:48:27] >> But, you know, Hey, can I uh can we flip
[1:48:31] seats for a second? Because you know,
[1:48:33] you you just grilled me for what? How
[1:48:35] long have we gone been going for now?
[1:48:38] >> Almost two hours.
[1:48:38] >> Yeah. I Well, I have one question that I
[1:48:41] want to switch seats for. You ready for
[1:48:44] it?
[1:48:44] >> You want to ask me a question?
[1:48:45] >> I want to ask you a question. really on
[1:48:47] one at least one.
[1:48:48] >> I can see you looking at your laptop
[1:48:49] like you got notes. All right. What
[1:48:51] >> I have my I have my note question right
[1:48:53] here.
[1:48:54] >> What do you have for me, man?
[1:48:55] >> So, is the battle cruiser actually
[1:48:57] happening? That thing [clears throat]
[1:48:58] actually going
[1:49:01] whiplash. [laughter]
[1:49:06] Just whiplash. What does that have to do
[1:49:08] [laughter] with anything?
[1:49:09] >> You know, it's whiplash. Let's go.
[1:49:14] >> Let me see if I'm being yelled at
[1:49:15] already. Yeah, check this out.
[1:49:21] [sighs]
[1:49:23] [laughter]
[1:49:23] >> All right. I am not doing
[1:49:25] >> I am not actively being yelled at.
[1:49:27] >> Good.
[1:49:28] >> Um,
[1:49:30] >> yes, the battle cruiser is coming.
[1:49:32] >> Yes.
[1:49:33] >> Um,
[1:49:36] it's a triedand-true manufacturer. Uh,
[1:49:39] not one of these new hotness
[1:49:40] manufacturers. is one of the older uh
[1:49:44] manufacturers of the verse and it sure
[1:49:47] and I I I did say this last time so this
[1:49:50] this is not new information. The
[1:49:51] manufacturer thing is new information
[1:49:53] but uh um our big giant military combat
[1:49:57] themed event that we do every year
[1:50:00] around May is probably a pretty good
[1:50:03] time to expect it. and and and and and
[1:50:05] and it will be the and and and as we
[1:50:08] said before uh it will be the it is our
[1:50:11] intention to make it the last concept uh
[1:50:13] we do we made it through 2025 without a
[1:50:16] concept uh with a single concept
[1:50:18] promotion uh we do not have a single
[1:50:20] concept promotion scheduled for 2026
[1:50:22] other than this battle cruiser we don't
[1:50:24] have a single concept promotion
[1:50:25] scheduled for 2027
[1:50:27] um that this will be the last one it's
[1:50:28] it's an old uh Kickstarter thing
[1:50:31] >> and so yeah so
[1:50:33] >> it's happening
[1:50:34] It's happening. It's happening. We're
[1:50:36] going forward. Um I'm not going to tell
[1:50:38] you anything more about it now. Uh but
[1:50:41] yeah. So, okay. Um
[1:50:45] >> is it big?
[1:50:46] >> You got anything more? That that it get
[1:50:49] your one out.
[1:50:49] >> Is it big?
[1:50:51] >> It's very big. [laughter]
[1:50:53] It's very very very big. Um
[1:50:57] >> that's all I got.
[1:50:57] >> That's all I'm going to say. Okay. Okay.
[1:50:59] So, [laughter] so, so
[1:51:02] just sneak it right in there. Just piece
[1:51:05] of [ __ ] [laughter]
[1:51:07] That's my one for the show. Um, all
[1:51:09] right then. Fine. Wipe.
[1:51:14] >> Wipe.
[1:51:15] >> We were doing so good.
[1:51:16] >> Wipe. Wipe. I held them off. I held them
[1:51:19] off. Wipe.
[1:51:20] >> Right. So, okay. We're not planning a
[1:51:23] wipe. We're planning
[1:51:25] >> Good night, everybody. We're planning
[1:51:27] [laughter]
[1:51:28] so we're we're looking at targeted
[1:51:32] actions, right? But we're not looking at
[1:51:35] a wipe for the moment. And so we're we
[1:51:38] want to keep on rolling. First of all,
[1:51:39] there's a lot of some of the work we've
[1:51:41] discussed. Obviously, I can't share the
[1:51:43] details of what we're doing, but that
[1:51:44] needs to be completed. Uh so for now,
[1:51:46] we're not we're not uh intending a full
[1:51:48] blanket web at all.
[1:51:50] >> No, this goes back to what we were
[1:51:51] saying before about the biggest quality
[1:51:53] of life thing. all this all this work
[1:51:55] going in to to long-term persistence and
[1:51:58] to and and to item recovery v1 and
[1:52:00] stuff. It's about the freight elevator.
[1:52:03] It's about making sure you keep your
[1:52:05] stuff.
[1:52:05] >> Yeah.
[1:52:05] >> Making making sure you keep your stuff.
[1:52:07] Making sure you keep your stuff. Making
[1:52:08] sure you keep your stuff.
[1:52:09] >> So you we we've got tools. We've got
[1:52:12] logs. We've got
[1:52:14] >> a lot of logs.
[1:52:15] >> We got a lot of logs. We got a lot of
[1:52:16] information. A lot of information. So,
[1:52:18] so, so it is our it is our intention to
[1:52:20] do a targeted correction
[1:52:23] >> to
[1:52:25] those areas that
[1:52:26] >> are problematic
[1:52:28] >> and and and and preserve as much of the
[1:52:33] >> gotten gains of the everyday
[1:52:36] >> Star Citizen as possible.
[1:52:38] >> Exactly.
[1:52:39] >> So, so no blanket wipe.
[1:52:41] >> That's right. Okay,
[1:52:43] >> cool.
[1:52:45] >> So, we've answered that. That's done.
[1:52:50] >> [laughter]
[1:52:52] >> What else you got? [snorts]
[1:52:54] Just hit me with a battle cruiser.
[1:52:56] [laughter]
[1:52:58] Oh, I got a message. Hold on. Hold on.
[1:53:01] Hold on. Where's I skipped out?
[1:53:04] Was the battle cruiser mentioned?
[1:53:06] Mentioned in seal just now planned. Lol.
[1:53:11] [laughter]
[1:53:12] Planned by somebody.
[1:53:15] Whoa. Whoa. Whoa. Whoa. Whoa. [laughter]
[1:53:20] [snorts]
[1:53:21] All right. Uh, no no no no no comments.
[1:53:25] No no no comments about the size other
[1:53:27] than it's it's big. It's big. It's just
[1:53:30] big and it's cool and it is so so damn
[1:53:34] cool.
[1:53:35] >> Um, all right. That's it. Oh
[1:53:38] >> no.
[1:53:39] >> Yeah. One last question.
[1:53:41] >> Yeah.
[1:53:42] >> Tell me something we don't know about.
[1:53:45] Tell me something. Tell me something we
[1:53:47] should be excited about that we're not
[1:53:49] currently excited about.
[1:53:53] >> Give it give give us something nobody's
[1:53:55] expecting.
[1:53:57] >> Um,
[1:53:59] [snorts] that's hard. You're putting me
[1:54:01] on the spot now.
[1:54:02] >> I'm putting you on the spot, mister.
[1:54:04] >> Is the bader coming? [laughter]
[1:54:07] >> Uh, okay. Um well, one thing we didn't
[1:54:10] talk about in detail
[1:54:14] uh that I could give background info on
[1:54:16] is um Genesis.
[1:54:19] >> Okay.
[1:54:20] >> And Nyx one, right?
[1:54:22] >> So,
[1:54:24] I mean, we we've we're obviously working
[1:54:26] on this. [laughter]
[1:54:28] That's no surprise to anyone. But the ma
[1:54:30] the one thing that I'm excited about is
[1:54:33] that we've um we've kind of conjoined
[1:54:37] development on three separate things uh
[1:54:41] in order to ship the best Nyx experience
[1:54:44] that we could offer, right? And so
[1:54:46] obviously Genesis is part of that and
[1:54:48] the planet tech that's behind it. Um but
[1:54:52] also uh the Staritect work. And so for
[1:54:56] those who don't know, Staritect is a way
[1:54:58] for us to
[1:55:00] be smarter about building planets and
[1:55:03] the human populations that are on them.
[1:55:05] So settlements, buildings, dro centers,
[1:55:08] LZ's, name it, right? So historically,
[1:55:11] we've placed that by hand. And uh so
[1:55:13] Staritect is a way for us to give
[1:55:16] designers control over the planetary
[1:55:18] scale of how these are distributed. And
[1:55:21] it's a it's a fairly fundamental change
[1:55:23] to how the game is made.
[1:55:26] And the third one is what we call the
[1:55:29] population control
[1:55:31] manager. So
[1:55:33] >> currently you have AIS in the game,
[1:55:35] right, that are sometimes hand placed,
[1:55:37] sometimes dynamically spawned. We've
[1:55:39] talked about
[1:55:40] >> spawn like a gazillion times the spawn
[1:55:43] button.
[1:55:44] >> Yeah, that's which is my biggest pet
[1:55:46] peeve by the way. You want that's my
[1:55:47] trigger point. If you want to trigger me
[1:55:49] in a meeting, just tell me there's
[1:55:51] another overspawn issue. But anyway, so
[1:55:54] population management and control is a
[1:55:57] third component of this. So we've I'm
[1:55:59] excited about this because as we're
[1:56:01] working towards next one, we're we're
[1:56:03] aligning all those three things into one
[1:56:05] strike team to deliver that together. So
[1:56:10] uh I'm excited about that because those
[1:56:12] are like three major development piece
[1:56:14] that Star Citizen needs to scale that
[1:56:17] we're bringing in together. So for POP
[1:56:18] control, instead of having all these
[1:56:21] handplaced, either handplaced or
[1:56:23] dynamically spawn AIS uh in key areas,
[1:56:26] that's a system that will basically
[1:56:28] manage the server capacity of AI agents
[1:56:30] to be able to distribute them at the
[1:56:32] right place, but also spawn the right
[1:56:35] AIS for the right jobs, manage the
[1:56:38] priority of these spawn requests, all
[1:56:40] that stuff. And so it's a it's a such a
[1:56:42] much more scalable system that will
[1:56:44] allow us to really like build up a dense
[1:56:47] universe than we've had before. So I'm
[1:56:49] excited about the fact that those three
[1:56:51] projects are part of the same kind of
[1:56:53] drive at the moment. That's the first
[1:56:55] thing I would say that you guys don't
[1:56:56] know about that we're going to bring
[1:56:57] together.
[1:56:59] Um the second one uh I mean there are
[1:57:03] some hints of this in the game already.
[1:57:06] So, if I know some some of the techies
[1:57:08] look into the game client, try to find
[1:57:10] some stuff. I'm not going to go into
[1:57:11] more details about this, but uh you
[1:57:14] know, we talked about sim rigs. We
[1:57:16] talked about, you know, how the
[1:57:18] experience in the sim rig is. So, VR is
[1:57:21] a great thing if you have a SIM rig,
[1:57:23] right? Obviously, having the headset on
[1:57:26] is such a more dense experience. We're
[1:57:28] also working at improving our peripheral
[1:57:31] support. So being able to feed
[1:57:32] information, non-damaging information to
[1:57:36] peripheral manufacturers, so be able to
[1:57:38] enable them to make custom star system
[1:57:40] experience for the sim rigs. And also
[1:57:42] we're looking at uh we're currently in
[1:57:45] the process of looking at uh motion
[1:57:47] motion platform support uh for the game.
[1:57:49] And so I think that's something we
[1:57:51] haven't talked about specifically, but
[1:57:53] I'm mega excited about it because API
[1:57:56] opening up that uh opening up basically
[1:57:59] the motion systems to be able to
[1:58:01] leverage that, you know, on the on the
[1:58:02] key elements. So I think that's
[1:58:03] something that I'm super excited about
[1:58:05] because that's just another level.
[1:58:07] >> There's that new Corsair keyboard that's
[1:58:09] got the stream deck built into it and
[1:58:11] stuff like that and like this. Um,
[1:58:14] >> so thoughts about those would be my my
[1:58:15] two
[1:58:16] >> anything
[1:58:18] for player facing for in-game
[1:58:22] >> new some something I'm I'm going to I
[1:58:26] know about something it it's treating
[1:58:28] this like it's a big thing it's not. We
[1:58:29] just did the big thing but um spawning.
[1:58:34] >> Oh yeah
[1:58:36] spawning.
[1:58:36] >> Well so
[1:58:38] we talked about spawn in the hanger.
[1:58:40] >> Mhm.
[1:58:41] >> Right. And so to build spawning hanger
[1:58:43] we had to build a new workflow right to
[1:58:45] be able to determine can we spawn you
[1:58:48] there is there a requirement for you
[1:58:49] spawning there right so the requirement
[1:58:51] in the case of spawning hanger is is
[1:58:53] your hanger spawned right uh that's also
[1:58:56] extended to ships right but what we're
[1:58:59] trying to achieve now I'm not promising
[1:59:02] this anywhere but is spawn in place and
[1:59:05] so we're trying to extend that workflow
[1:59:07] for spawn in place so that you know you
[1:59:10] just log in the game
[1:59:11] you spawn where you were. And so that's
[1:59:13] something that we're passionate about
[1:59:15] and we're trying to get in there. So
[1:59:17] >> yeah, log in, log out, spam on it,
[1:59:20] >> anywhere.
[1:59:21] >> Not not not a you know, you have a bed
[1:59:24] in a ship, you have you have you don't
[1:59:26] have a bed in a ship,
[1:59:28] >> you just just wherever you are,
[1:59:30] >> get out. Correct.
[1:59:31] >> Get back in. Come back right there.
[1:59:33] >> Yeah. Surface of a planet, you know,
[1:59:36] spawn in place.
[1:59:37] >> As long as you can still spawn there,
[1:59:39] [laughter]
[1:59:39] >> right? There's going to be rules and
[1:59:41] limitations, but we're looking into
[1:59:43] that.
[1:59:44] >> That is also a big change for the game
[1:59:46] to me. Yes, a huge, huge change.
[1:59:48] >> Yeah,
[1:59:48] >> just
[1:59:49] >> Well, I'm happy you raised that up. I
[1:59:50] was going to forget about it. [laughter]
[1:59:52] >> I've got you, Barry.
[1:59:54] >> All right. And at that,
[1:59:57] we managed. It's 4:57. We're right there
[1:59:59] at the end.
[1:59:59] >> Hey, right on time.
[2:00:00] >> Uh,
[2:00:02] what do they say at the end of Hot Ones?
[2:00:03] You, you know, tell everybody where they
[2:00:04] give everybody your socials. Tell
[2:00:05] everybody where they can find you when
[2:00:07] you do next. I mean,
[2:00:08] >> um I guess here in
[2:00:10] many months [laughter]
[2:00:14] >> uh we're here until the uh yeah, heat
[2:00:18] death of the universe.
[2:00:19] >> That's right.
[2:00:20] >> Um Ben Wong,
[2:00:22] >> thank you.
[2:00:22] >> It's a pleasure.
[2:00:23] >> Thank you as always for for for coming
[2:00:25] back. We're doing these about every six
[2:00:27] months. It's what we we we we agreed
[2:00:30] when we did this run about a year ago,
[2:00:32] right?
[2:00:32] >> Yeah.
[2:00:32] >> It's a good run.
[2:00:33] >> And so so we'll see we'll see you again
[2:00:35] sometime this summer.
[2:00:36] >> Yeah, probably. Absolutely.
[2:00:38] >> Um, I just want to say, you know, it's
[2:00:41] it's it's
[2:00:43] this is our first back. It's actually
[2:00:46] our first SCCL since
[2:00:49] IAE. We did the all ships Q&A and then
[2:00:52] we we didn't get to do a whole lot of uh
[2:00:54] last year because of a whole bunch of
[2:00:56] other changes going mostly in my life.
[2:00:59] Uh we're going to have a lot more uh
[2:01:01] this year. Uh, we got a we got a group
[2:01:03] of like four in a row coming in like
[2:01:06] April, I think. Whatever.
[2:01:07] >> Um, the chance to have somebody at your
[2:01:11] level and your involvement, take the
[2:01:14] time out to come be here, answer quite
[2:01:19] literally any question I put you. You
[2:01:22] didn't beg off of anything. You didn't
[2:01:24] you didn't do this. So, I I spent the
[2:01:25] part giving giving the tech teams their
[2:01:28] props and the programmers their props
[2:01:29] and the strike team their props.
[2:01:31] something I want to be I want to say
[2:01:31] here and give you your props. Thank you
[2:01:33] so much for being here far more than I
[2:01:35] will give yens
[2:01:37] >> who won't [laughter]
[2:01:39] >> come on the show.
[2:01:40] >> It's a rendevous now. That's it.
[2:01:43] >> I know. I appreciate it.
[2:01:44] >> I love the anti.
[2:01:45] >> I I love coming here and and chatting
[2:01:47] about Star Citizen. And if you ever meet
[2:01:49] me and a Bar Citizen, it's the same
[2:01:50] thing. So, you know, just do it live.
[2:01:54] >> Uh thanks so much, guys. Uh what is in
[2:01:56] the orange box? So, that was at the
[2:01:57] beginning of the show on the Twitch
[2:01:59] version. and it won't be on the YouTube
[2:02:00] version. Uh, but that's just toys. It
[2:02:02] has nothing to do with work. We were we
[2:02:04] were just nerding out a little bit at
[2:02:06] the beginning of the show. Um, thanks
[2:02:08] for watching everybody. Uh, we're back
[2:02:10] next week with a behind the ships uh,
[2:02:13] special on the on the next uh,
[2:02:16] spacecraft making its way to the Star
[2:02:18] Citizen persistent universe.
[2:02:19] >> John Crew going to be there. Uh uh John
[2:02:21] Cruz in there and Ben Curtis is in there
[2:02:24] and Torstston Lyman is in there and and
[2:02:27] some other people because I'm not really
[2:02:28] good with names. Whatever. The second I
[2:02:31] started calling out names, I knew it was
[2:02:33] a mistake.
[2:02:34] >> Chris Danks is in there. So
[2:02:37] >> who
[2:02:39] >> Batu? Batu's in this one.
[2:02:40] >> Yeah,
[2:02:41] >> I filmed with Batu.
[2:02:42] >> Yeah, [laughter]
[2:02:43] >> he's great.
[2:02:44] >> Yeah.
[2:02:45] >> Wow. These they really run together.
[2:02:47] Sorry everybody. Uh but yeah, that
[2:02:49] that's that's that's next week. Uh an
[2:02:51] exciting new uh spaceship spaceship Mon
[2:02:54] uh making its way to the persistent
[2:02:56] universe next week in those little uh
[2:02:58] middle things. We talked about it in
[2:02:59] ISC, the big patches in January and and
[2:03:03] March and May. It's like this and then
[2:03:06] these these interesting little content
[2:03:07] drops in the middle. Uh so we're we're
[2:03:10] going to add a new ship in the middle of
[2:03:11] a patch drop and for the first time in
[2:03:13] the history of our project, we'll see
[2:03:15] how that goes.
[2:03:16] >> Let's do it. Just kidding. There's a
[2:03:18] press article. It shouldn't work. Uh, so
[2:03:20] thanks for watching. Uh, I'm Jared.
[2:03:23] That's Ben Wah. You're the amazing Star
[2:03:25] Citizen community. Where? What are you
[2:03:27] doing with the cameras? [laughter]
[2:03:29] Oh my god.
[2:03:32] See
[2:03:35] [laughter]
[2:03:38] you. See you later, everybody. Bye.
[2:03:40] Thanks everyone.

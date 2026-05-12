# Star Citizen Live | Tech Talk w/ Benoit Beausejour

**Video:** https://www.youtube.com/watch?v=lPaDb5rh0tE
**Date:** 2025-09-11
**Duration:** 2:58:23

## Transcript

[00:00] Let's get it.
[00:06] >> Hi everybody.
[00:11] >> Let Benwa do that thing in the
[00:12] background.
[00:18] >> The show's actually started while so
[00:19] this will be on the YouTube version. Hi
[00:21] everybody. Welcome to Star Citizen Live.
[00:23] I'm your host Jared Huckabe. If you've
[00:25] never seen Star Citizen live before,
[00:26] it's where we take about an hour,
[00:28] although not in this case. It's going to
[00:30] be a lot longer, out of the end of our
[00:31] our week sometimes, and uh talk to you,
[00:34] the Star Citizen community. Uh we put
[00:36] our developers to the test. We we we we
[00:38] have them answer questions. We have them
[00:39] talk about various aspects of their
[00:41] work. Uh sometimes we show off really
[00:44] unfortunate plushies that never made it
[00:45] into production. We do all manner of
[00:47] things in this show. On the show this
[00:50] week,
[00:52] we are doing the prophesized sequel uh
[00:56] to a special ed to a special edition
[00:59] show that we did back in the beginning
[01:00] of February this year. Uh now, for those
[01:02] of you who might not remember or you've
[01:04] joined the project since then, welcome
[01:06] aboard. uh back in February this year uh
[01:10] after uh uh Chris Roberts announced in
[01:12] his letter from the chairman uh a
[01:14] fundamental change in the manner and
[01:16] focus of our development for this year
[01:18] uh Ben and I uh took to seal and spent
[01:22] two or three hours I don't remember how
[01:24] long
[01:24] >> about three yeah
[01:25] >> would have been good to look at that uh
[01:27] before I came here
[01:29] >> um to just
[01:33] shoot on every shoot on everything uh
[01:34] talk talk about everything under the sun
[01:37] figure out what these changes really
[01:39] meant and stuff like this. And we said
[01:40] at the end of that show that we'd be
[01:41] back in roughly about uh six months. So
[01:44] six plus two is eight. It's nine.
[01:48] Would you expect anything less?
[01:50] >> That's right.
[01:51] >> Uh so we're back. We're we're we're back
[01:53] today. Do a quick recap. All right.
[01:55] First the Earth cooled, then the
[01:57] dinosaurs came. Um
[02:00] now we're back to talk about uh a whole
[02:02] variety of topics. This is not your
[02:04] traditional Q&A show where we take
[02:06] questions from the uh community.
[02:09] Although if we see some good questions
[02:10] in the Twitch chat, we might throw them
[02:12] in from time to time. This is our
[02:14] interview format. So, we have worked out
[02:16] a series of topics that we want to
[02:17] cover. Uh based on our previous
[02:20] conversations, we expect this show to go
[02:22] a bit long. So, you know, if you got
[02:25] someplace to go, you know, you know, be
[02:27] sure to check out the YouTube replay
[02:28] later. Uh, if you'd rather uh listen to
[02:31] or read an AI summary or something on on
[02:34] on Reddit,
[02:39] I mean, I can't stop you. I can't stop
[02:41] you. Um, but yeah, you're going to do
[02:45] what you're going to do. We're going to
[02:46] do what we're going to do. Let's jump
[02:47] into it. Let me start by introducing uh
[02:49] our guest, the man who needs no
[02:51] introduction, but we're going to do it
[02:52] anyway. Chief Technology Officer, Mr.
[02:54] Benois Boseer. Ben Wisa, how you doing,
[02:56] man?
[02:57] >> It's getting better every time. your
[02:59] pronunciation. It's always going up.
[03:01] It's great. I'm feel good. I'm feel
[03:03] good.
[03:04] >> I feel good.
[03:04] >> Well, I appreciate that. Well, who did
[03:06] who did we uh uh Oh, I we just hired
[03:09] just added somebody uh to my to my team
[03:11] and I've never like she's worked for me
[03:14] for about six, seven weeks now, and I've
[03:16] never once tried to say her last name
[03:19] out loud because I'm afraid.
[03:21] >> It's okay. You can do it.
[03:22] >> She's not watching the show, so she
[03:24] doesn't know I'm talking about her.
[03:25] >> Good. Um, Benwell, who are you and what
[03:27] do you do for Star Citizen?
[03:29] >> Uh, well, I am a developer. Uh, and I am
[03:32] the chief technology officer for CI.
[03:35] That means that I oversee everything
[03:37] technical. So, gameplay engineers,
[03:39] engineers, graphic engineers, AI
[03:42] engineers,
[03:44] everybody who would touches a computer
[03:46] almost, you know, that's basically my
[03:48] job.
[03:51] >> And how much of everything that's wrong
[03:53] is your fault?
[03:54] >> Well, Uh people on spectrum would say
[03:56] everything
[03:58] but uh uh yeah I mean you know basically
[04:02] uh I empower all the teams to build the
[04:05] game and so technically everything kind
[04:07] of is my fault in a way you know
[04:10] >> fault fault fault fault.
[04:12] >> All right so
[04:14] like I said we we we we have a lot to
[04:16] talk about today. Who knows how long
[04:18] it's going to take because it's not like
[04:19] we have any time to rehearse or hash any
[04:21] of this stuff out ahead of time. So
[04:22] we're just going to jump into it. Um,
[04:23] we'll do we'll do it live.
[04:24] >> We'll do it live. So, part one
[04:28] >> of this show that I'm inventing right
[04:29] now in my head.
[04:30] >> Yeah.
[04:31] >> I want to I want to call part one the
[04:34] year of playability.
[04:36] So, the year of playability is not
[04:38] necessarily a statement that we ever
[04:40] made. We never we didn't say it in the
[04:42] in the in the February show or whatnot,
[04:44] but it come it comes from that that
[04:46] letter from the chairman that went out
[04:47] at the end of last year with a I think
[04:49] it was like 2025 a focus on playability.
[04:51] It's a it's a fair assessment of of the
[04:54] mission that we set out for ourselves uh
[04:57] at the at the end of last year. Um
[05:02] just uh have we during during the
[05:06] February show, remember guys, we're
[05:07] figuring this out as we go along. It's
[05:09] been a busy week. So during that show,
[05:11] we talked a lot about how
[05:14] Star Citizen had been going in one
[05:17] direction for about 10 years, you know,
[05:19] since since the launch of the PU at the
[05:20] end of 2015 and up until the end of 2024
[05:23] and what not. Roughly about 10 years
[05:25] there, you know, we we were we were on
[05:27] one kind of mentality. We were on one it
[05:29] it it changed a bit with three when 3.0
[05:31] came out after that big long period
[05:33] where we didn't ship for eight months
[05:34] and my beard went crazy and whatnot. But
[05:36] we went to this very feature driven, we
[05:39] were on this very feature- driven
[05:40] building the foundation of the game uh
[05:43] uh kind of attitude for so many years
[05:45] where we didn't we never we didn't take
[05:47] a whole lot of opportunities to stop and
[05:51] look at what we look at what was out
[05:52] there and and and spend time on fixing
[05:55] that and hardening that and so it was
[05:57] always about we got to get the next
[05:58] thing out. We got to get the next thing
[05:59] out. We got to get the next thing out
[06:01] because we have many of the same
[06:03] thoughts our backers do. It's like it's
[06:05] like you got to get this stuff out. Uh
[06:07] we decided that in 2025 because of the
[06:12] impending release of Squadron 42 in 2026
[06:15] and the and the and the need to let
[06:18] those people focus on that and getting
[06:19] that closed out whatnot. We were going
[06:22] to allow the engineers that remained on
[06:25] their focuses remained on squ on Star
[06:27] Citizen to take a step back from new
[06:30] feature work and look at hardening and
[06:32] fixing and addressing a lot of the
[06:33] long-standing issues. Now, I said a lot.
[06:37] I didn't say every. It's as many as we
[06:39] can within the time. You know, it's it's
[06:42] a 10-year journey towards one direction
[06:44] doesn't get turned around and fixed in 3
[06:48] months, four months, 5 months. Uh, and
[06:50] we said this at the time. Nonetheless,
[06:52] there's still people who, you know, we
[06:54] we see the same comments, guys. We see
[06:56] the same things like, "Oh, so much for
[06:57] the year of playability." Um, that was
[07:00] literally my brother. I'm not I'm not
[07:02] making fun of anybody else. I'm
[07:03] literally quoting my brother. And if
[07:05] you've ever met my little brother,
[07:06] that's exactly how he sounds. Uh,
[07:07] because he plays the game. He plays the
[07:09] game. And I get crap for my little
[07:11] brother. It's not just the backers. It's
[07:14] It's you, Clark.
[07:17] Welcome to the show. Um, so I want to
[07:20] talk about that. I want I want I want to
[07:22] talk about that. That's how little all
[07:23] all little brothers sound. At least in
[07:24] our heads. At least in our heads. I just
[07:26] want wanted y'all all to make I want to
[07:27] make sure everybody knows I was making
[07:29] fun of one specific individual uh that I
[07:31] show.
[07:32] >> I also sound like that sometimes when I
[07:34] talk to John Crew
[07:36] like what about my ship? You know,
[07:38] >> so so let so let's talk about this year
[07:40] of playability and and how it's gone so
[07:43] far. We said we'd check in uh six six
[07:45] months later.
[07:47] We're roughly here. Uh how how's this
[07:49] year of playability going? What what
[07:51] what have we done? What have we
[07:52] achieved? Uh where are we at in our
[07:55] process? Are we happy? You know, Ben,
[07:57] while you do the Benois thing.
[07:59] >> Yeah. Well, I mean, I want to go a bit
[08:02] further out than just the beginning of
[08:04] the year, right? Because let's let's say
[08:07] let's take same date last year. So,
[08:10] let's go full one year back.
[08:13] Um, you know, the state of the game one
[08:15] year in the past was still single server
[08:19] uh DGS, right? So, we're talking about
[08:21] maximum 100 players per game shard, one
[08:24] server simulating all of the universe.
[08:26] No second star system, right? So, only
[08:29] one star system. Server performance,
[08:33] not good.
[08:34] >> Four, five frames.
[08:35] >> Yeah. I mean, if you're lucky, right?
[08:37] Like when you load it in
[08:38] >> like the Yeah. the the the the
[08:41] parameters for us to launch a patch was
[08:43] basically sevenish, which is horrible if
[08:45] you think about it, but and so that was
[08:48] last year, right? So we start from far,
[08:50] right?
[08:50] >> We were still
[08:51] >> we were still in the clutches of 30k.
[08:53] >> We were still in the clutches of 30k,
[08:55] correct? So we we did have some some
[08:58] level of server recovery, but a lot of
[09:00] issues related to it that could have
[09:02] side effects. Uh some of them are still
[09:04] present. We'll talk about some of those.
[09:05] Uh but uh and so you know fast forward
[09:09] to now like the assessment is a bit is a
[09:13] lot better I think in my mind right like
[09:16] obviously we've had the release of 4.0
[09:18] like it's been a bit of a roller coaster
[09:19] I'm not saying it's been just a straight
[09:21] line like we've we've we've taken some
[09:23] dips and then uh you know imp improved
[09:26] the stability and of the quality of the
[09:27] game overall but obviously we have the
[09:29] 4.0 final release which came with uh
[09:31] static server meshing which was the
[09:34] element that we needed to free up server
[09:36] performance right so on average now when
[09:39] we look at server perf um I mean other
[09:42] than some egregious problems which we've
[09:45] identified the per we get per territory
[09:48] stats now so basically we don't just get
[09:50] like server FPS is X right we're going
[09:52] to know Stanton server FPS is X or you
[09:55] know Hurstston server FPS is Y and so we
[09:59] can compare
[10:00] depending on which territory what
[10:02] performance we're getting and FPS is
[10:03] just one of those parameter right
[10:06] there's a lot more
[10:08] >> uh but let's stick to FPS just because
[10:09] it's a simple mental model right because
[10:11] it does have an effect on your gameplay
[10:13] so nowadays server on average server FPS
[10:16] is up 20 easily right uh obviously some
[10:21] zones like let's say when we launched I
[10:23] think Stormageddon
[10:25] uh there were some issues affecting
[10:26] those zones that made those servers like
[10:28] dip below that quite quite a bit and so
[10:30] they drag the average down, but overall
[10:32] the the game server performance is is
[10:34] way way way way better and I think
[10:37] having 6 700 we've pushed up to 800
[10:40] players per shard uh which is something
[10:42] we're pushing at right now. We'll talk
[10:44] about this in if we talk about server
[10:45] meshing a bit more. Um, and so we're
[10:49] going to be pushing this really hard uh
[10:51] moving forward. But the I think that if
[10:53] you look at compared last year to this
[10:55] year uh for in my mind it's not the same
[10:58] game. Completely not the same game. Like
[11:00] now our if we look at even the stats uh
[11:04] from our players like uh session length
[11:06] is up like 10x. It's not even
[11:09] comparable. Yeah.
[11:10] uh you know so that means people play
[11:12] for longer periods of time and they stay
[11:14] online. I think server recovery is a big
[11:17] uh is a big help for that though the
[11:19] stability of this of the game server is
[11:21] also improved dramatically and so um you
[11:25] know the this is all because of the
[11:28] efforts of the changes that we've done
[11:30] not only to the priority calls like you
[11:32] just explained right which is taking you
[11:34] know where we're going and trying to
[11:36] slowly shift it to change direction
[11:38] because a team like this of this size
[11:40] doesn't switch on a dime it takes it
[11:42] takes a long time for, you know, these
[11:45] these changes to trickle in. But now
[11:48] that we've got kind of the big
[11:49] organizational changes in that we're
[11:51] starting to see and reap the reap the
[11:53] rewards of it, which is I I hope it's
[11:56] showing in the game anyway. It's showing
[11:57] for me. So, I'm seeing it. So, that's
[11:59] you know, so compare one year back to
[12:02] now, I think it's a it's night and day.
[12:05] >> There's still a long ways to go. I'm not
[12:06] saying we're happy with this. I'm just
[12:08] saying,
[12:08] >> yeah,
[12:08] >> you know,
[12:09] >> there's there's folks in the chat uh
[12:11] specifically talking about, okay, well,
[12:13] let's go do Hatheror and let's go do
[12:15] this and and you you you alluded to that
[12:16] there. It's you're talking about a macro
[12:19] sense throughout the the entire
[12:21] persistent universe, every single aspect
[12:23] of the game. It's to call out specific,
[12:26] oh well, this specific area is bad and
[12:28] this specific area is. That's not what
[12:29] we're talking about. We acknowledge that
[12:31] and those are areas that still need
[12:32] improvements at you know as we do this
[12:36] Russia nesting doll kind of conversation
[12:38] and go down we'll start drilling down to
[12:40] individual aspects later in the show at
[12:43] at its at at its broadest though at its
[12:45] broadest though overall the things that
[12:48] would just prevent people from being
[12:49] able to log in the things that would
[12:51] prevent people from being able to stay
[12:53] in the you know th those those larger
[12:57] scale issues that it doesn't matter
[12:59] matter if you fix the other things. If
[13:01] you're constantly getting a 30k, if
[13:02] you're constantly getting kicked out, if
[13:03] you constantly can't get back in, it
[13:05] doesn't matter if we've improved
[13:06] Hatheror performance if you can't get to
[13:08] Hatheror. Those big those bigger things
[13:10] are what we're talking about here. And
[13:11] those have seen some measurable marked
[13:13] improvements. I mean, an improvement
[13:15] from four to 5 FPS to 20 FPS is huge.
[13:19] Nobody even talks about 30ks stuff
[13:21] anymore. Um, server recovery is I mean,
[13:25] it's we it's hard to make a trailer or
[13:27] anything. I we sat there we back when we
[13:30] thought about how how do we make a a
[13:32] trailer uh for server recovery and stuff
[13:34] and then it's like we we didn't for two
[13:36] reasons and I'm going to talk a little
[13:38] bit here about why marketing pushes some
[13:40] things and doesn't push some other
[13:41] things. one is there's no there there's
[13:44] no real interesting way to show it
[13:47] without you know you you've all seen the
[13:49] server recovery screen you're sitting
[13:50] there and doing but also
[13:53] we
[13:55] I'm just going to be real we're only
[13:56] what we're only 13 minutes into it let's
[13:58] get to a real moment of truth here right
[14:00] now uh over the course of the 11 years
[14:02] I've been here we sometimes
[14:05] toot the horn like we've invented
[14:07] something that honestly should be
[14:09] standard it it it should it should be
[14:12] standard standard should it's it's if we
[14:13] were doing things different if we had
[14:15] had different priorities at this point
[14:17] or whatever that would have just been a
[14:19] thing we would have had before. So so we
[14:21] couldn't have server mesh we couldn't
[14:23] have server recovery before because we
[14:24] had to it was part of our the the whole
[14:27] u nesting architecture within meshing
[14:29] stuff we had to build an infrastructure
[14:30] before you could have a recovery that
[14:32] would bring that stuff back. So the way
[14:33] that we chose to do things meant that
[14:35] some things couldn't come to later. I
[14:36] mean there's people again we were we
[14:40] we'll talk a little bit about org stuff
[14:41] and stuff. You know we still have orgs
[14:43] in our game and stuff. Those those are
[14:45] things that are foundational that you
[14:46] would find and you know day one of other
[14:49] MMOs and we're here you know 10 years
[14:51] into the PU and we still don't have it.
[14:53] So,
[14:54] I want to be real clear that when we
[14:56] talk about this and we and we celebrate
[14:58] our achievements, and I'm really proud
[14:59] of our achievements this year, the stuff
[15:01] that Ben Watson are real, this year is
[15:04] this year is a night and day difference
[15:06] from last year. I I think anybody being
[15:09] real candid and honest with themselves
[15:10] would would admit that. At the same
[15:12] time, I don't I want to be candid and
[15:14] honest and be like I don't also don't
[15:15] want to pretend like this was some we
[15:18] invented the wheel and whatnot. This
[15:20] this was this was this was the change
[15:22] that Chris set out for us last year.
[15:25] It's hey, let's slow down. Let's refocus
[15:29] and let's find those things that we lost
[15:31] along the way and and and catch back up.
[15:34] Does that mean a slowdown on new
[15:36] features? Yeah, it does. And it has all
[15:39] year as we told said it would in
[15:40] February. But just little reality check
[15:45] for everybody.
[15:47] I want you to talk about how we did it
[15:48] though. We're going to spend some time.
[15:50] We're going to talk about freight
[15:51] elevators and all that stuff right now.
[15:52] But up here at the top though,
[15:55] how did we do this change? What were the
[15:57] organizational changes and the
[15:58] operational changes that we did that
[16:00] made this possible and that are going to
[16:02] continue for the foreseeable future?
[16:05] >> Well, um, so there's there's a series of
[16:07] things like companywide that have had to
[16:09] change for this to happen. Um the first
[16:12] the first one we talked a little bit
[16:15] about this in January which was uh the
[16:17] idea of having hero cards or or joker
[16:20] cards I call them uh on specific issues
[16:22] right and so we've uh and then I it was
[16:26] funny because people were like give the
[16:28] joker card to this other bug right and
[16:30] it's like yeah that's basically what we
[16:31] do uh but we've extended that concept a
[16:35] bit further and I hate that we changed
[16:38] the name but we did change the name and
[16:40] we call those hero squads. Now, so what
[16:42] we've done is that we've we've taken a
[16:44] subject, for example, transit, right,
[16:47] which we've extensively talked about in
[16:49] January, and we've made a hero squad
[16:51] around it. So, that means we've
[16:52] dedicated resources just to the to all
[16:56] the bugs related to one system, right?
[16:59] And we've changed the methodology. So
[17:01] the the the way that we used to deal
[17:03] with bug fixes in the past uh is
[17:06] basically engineers get the bug report,
[17:09] they put it in their task list, at some
[17:10] point they emit the fix and they and
[17:13] they they ship it in the patch. Now as
[17:16] the patch release comes closer and
[17:18] closer, those those bugs get verified
[17:20] and or need to be accelerated. And so
[17:22] it's always a bit of a the fixes are are
[17:25] are valid, they're correct, but they're
[17:28] we don't have time to test them fully.
[17:30] we've had a lot of regressions, right?
[17:33] And so regression was becoming a problem
[17:34] because we were going too fast to try to
[17:37] solve some issues. And so the some
[17:39] systems like transit are complicated
[17:41] enough that you you can't just emit a
[17:43] fix.
[17:44] >> I want to pause you there. What is
[17:45] regression?
[17:47] >> Regression is when I say I fixed bug X
[17:50] and I've created bug Y.
[17:52] >> Okay? Yeah, you know, so it's it's
[17:55] basically when we're introducing new
[17:57] bugs or breaking other things because we
[17:59] try to fix
[18:01] >> and so regression was a big problem on
[18:03] the project in general. That's it was in
[18:05] part because of the speed at which
[18:06] things were going uh the code review
[18:09] process uh things like this. So we've
[18:12] these hero squads basically we flipped a
[18:14] bit the relationship. So we decided that
[18:17] fixing issues, let's say I'm going to
[18:19] keep transit as my hero squad example
[18:21] because it's an easy one to reason, but
[18:23] we've put resources dedicated to it and
[18:26] then we got the team the QA teams to
[18:28] basically derive the priorities within
[18:30] the squad. So instead of saying, hey,
[18:33] production management is going to, you
[18:34] know, drive the priorities, we got the
[18:37] QA leads to do that. And so now these
[18:39] guys were completely driven by player
[18:43] impact. And so when they look at issues,
[18:45] they're like, is this impacting players
[18:47] or is it a fringe issue, right? And they
[18:50] decided on the priority. And it turned
[18:51] out that that accur that priority
[18:54] accuracy was a lot better. And we we
[18:56] asked those teams to be relentless into
[18:59] what they want to reach. And so classify
[19:01] the issues in order. And then the moment
[19:04] we get a green light from these guys,
[19:05] it's a celebration because they are
[19:07] hardcore. I've seen a I've seen a lot
[19:09] more Nathaniel Fischer this year than I
[19:10] ever
[19:11] >> the Nathaniel Fischer seal of approval
[19:13] is a real thing. You know,
[19:16] >> I want to inject Bronx 76 as Benois is
[19:19] wrong. Regression is when old issues
[19:21] resurface.
[19:23] >> You know, yes, that's also a definition
[19:25] that works. But the you know, we we use
[19:27] the same word for both at CIG, but the
[19:30] you're you're kind of correct. The
[19:31] proper definition is that's an old issue
[19:33] that comes back. But in this case, the
[19:36] thing is the issues are so close by and
[19:38] and typically it is resurfacing an
[19:41] original issue. Uh that that's actually
[19:44] one of the issues with those big systems
[19:45] is that bug reports are so similar
[19:48] uh but are sometimes completely
[19:50] different circumstances. But
[19:52] >> yeah, two two things, three things, four
[19:54] things that all cause the same outcome.
[19:56] >> Same symptom. Yeah, exactly. So, hero
[19:58] push squads, we got that uh the embedded
[20:02] green light is what you just got done
[20:03] talking about, you know, let letting let
[20:05] letting QA sort of manage their
[20:08] priorities and greenlight things.
[20:10] >> No, that one's a bit of a separate one
[20:11] actually. So, so the the hero squads are
[20:13] is really about getting the our QA teams
[20:16] to drive the priority on a specific
[20:18] subject and drive down, right?
[20:20] >> One of the change in methodology for the
[20:22] devs on those team on those team is like
[20:24] a bit of a change in approach.
[20:27] We in code review for these in these
[20:29] hero squad, we no longer just accept the
[20:31] fix based on code change. We ask the
[20:33] developer to explain
[20:36] what the problem is. Do can you reason
[20:38] at why this is happening? Second,
[20:41] proposed a change, right? And then the
[20:44] leads can validate this change before it
[20:46] even we start even writing any code for
[20:48] it. And then we verify the change with
[20:50] QA and and then that's when we actually
[20:53] allow the change to be to come into the
[20:55] stream at all. Right? So we do a lot
[20:57] more work before the work is actually
[20:59] started, a lot more work before it uh
[21:01] validation before it actually gets
[21:03] submitted. And so um uh on those teams
[21:06] like developers working on those hero
[21:08] push squads have a much more uh
[21:10] methodology to apply uh to solve that
[21:13] because basically in the past we would
[21:15] the regression rate was was too high,
[21:17] >> right? And so the the big advantage of
[21:20] that setup is that those teams are
[21:21] faster to react at because they they're
[21:26] dedicated on one subject. And so if
[21:27] there is a regression because they still
[21:29] happen, they're faster to pick it up.
[21:32] But then the fixes are slower to put in,
[21:34] but you know that still is has been very
[21:36] effective. So uh transit is one of our
[21:40] hero push squads. Uh which to me has
[21:43] been kind of successful since the
[21:45] beginning of the year. like uh the I
[21:46] think the transit system we're going to
[21:47] talk a bit bit more about it later you
[21:49] know it's in a much better shape the
[21:51] embedded green light is what you just
[21:53] talked about which is that was a major
[21:55] organizational change and so in the past
[21:59] the way that uh game devs at Cig on Star
[22:01] Citizen would work is that they would
[22:04] submit and tests later
[22:07] I know that sound crazy but it is what
[22:10] it is and it was what it was and so uh
[22:13] at the beginning of the year we set a
[22:15] completely changed this and so we we
[22:16] added this embedded green light process.
[22:18] So what is an embedded? So embedded are
[22:21] QA testers that are embedded in a dev
[22:24] team. So it's not you know everybody has
[22:26] a view of like there's a floor of QA
[22:28] develop QA people and then they receive
[22:31] a build and they test the build and
[22:33] stuff like that right but there's
[22:34] another class of of of testers that are
[22:36] embedded in teams and they become
[22:38] specialists and what that team is doing
[22:40] right so you know if you have an
[22:43] embedded tester in a in the FPS weapon
[22:45] team that those people know all about
[22:49] FPS weapons how to test them what change
[22:51] effect what and so they can judge what
[22:52] they have to
[22:54] So the embedded green light is we gave
[22:57] that team the power to red light any
[23:00] change before it's submitted. And so
[23:03] that's a a big culture shift because it
[23:06] used to be hot and fast. Get it in,
[23:07] we'll test and fix later, right? If
[23:09] there's issues and we trust devs to we
[23:12] don't trust devs, we need to verify,
[23:15] >> we need to check it, right? And the
[23:17] whole point of this was to hit on uh
[23:20] regression or side effects, right?
[23:21] because our rate of regression and side
[23:24] effects was extremely high. Right.
[23:26] >> I want to just I'm picturing the the
[23:29] comments. Somebody can screenshot Benwa
[23:31] and say Benwa by 2025. We don't trust
[23:34] devs. Go ahead. Right there. Do it right
[23:36] there.
[23:38] >> Right there.
[23:38] >> Yeah.
[23:39] >> Um no, I mean we we we've had embedded
[23:41] QA for for years. This was about
[23:43] empowering them, you know, in in order
[23:45] to to be a bull work against letting
[23:47] letting this stuff through.
[23:49] >> Um Another new term I heard this year,
[23:53] uh, uh,
[23:56] hygiene initiatives. Now, when I heard
[23:59] this was coming up, I thought it was
[24:00] something else.
[24:02] >> You know, anybody anybody that's worked
[24:03] in a game studio knows that, you know,
[24:04] every once in a while there's that desk
[24:06] you walk by and you're like, I thought I
[24:08] thought I knew what this was about. It
[24:09] wasn't what I thought it was about. What
[24:11] are hygiene initiatives?
[24:12] >> So, this is not about BO if that's what
[24:15] you're referring to. Uh but hygiene is a
[24:18] collection of initiatives related to
[24:21] cleaning up errors, logs, uh and in
[24:27] general just reports we get from the
[24:28] game engine that can signify errors or
[24:31] not. So if anybody's ever opened a
[24:33] console in Star Citizen, you probably
[24:36] whoa, what the hell's going on, right?
[24:38] Because there's tons of messages going
[24:40] through all kinds of stuff. Well, that's
[24:42] what is meant to clean up in a way,
[24:44] right? Uh now these things will take us
[24:47] a long time to to clean up algorith but
[24:50] we do we do have the same problem of
[24:52] signal to noise ratio in other areas. So
[24:54] like when when environment artists are
[24:57] working in the in the editor, uh they
[24:59] get level warnings, right? Well, there's
[25:01] a ton of those warnings that are either
[25:03] irrelevant
[25:05] >> asserts. Well, yeah, asserts, warnings,
[25:07] right? And errors. And so the issue is
[25:10] uh level artist is going to get some
[25:12] warnings like, can I do anything about
[25:13] this? Right? Oh, there's 50,000 of them.
[25:15] Probably I don't I don't have to worry
[25:17] about this, right? The reality is one of
[25:18] those is actually an issue, right? And
[25:20] so the hygiene initiatives is like a
[25:22] collection of of things that we need to
[25:24] change and how we build the game uh to
[25:26] clean up these things so that the errors
[25:28] are meaningful. Uh we have the same uh
[25:31] thing on the data core side. So for
[25:33] those who don't know the the game data
[25:36] so all the records we use to configure
[25:38] you know uh the components or all the
[25:40] game data right is stored in a database
[25:42] called data core. And uh there's a ton
[25:45] of errors in data core that are reported
[25:48] schema violation, you know, things like
[25:50] that that they're not fatal errors, but
[25:53] they're still there and we allow them to
[25:55] be there. And that's is historical in
[25:57] the past. And so the hygiene initiative
[25:58] is a is a means for us to reach zero
[26:01] errors in those areas so that we can
[26:04] then prevent them from even being
[26:05] submitted in the first place. So hygiene
[26:07] is basically presubmit verification on
[26:10] things and concerted efforts to solve
[26:12] these things so that we can be in a
[26:13] clean house. It's like the we want to
[26:15] clean the house, right? So that we can
[26:17] do better.
[26:17] >> Somebody in the chat was saying I missed
[26:19] it the name it said errors that should
[26:21] be warnings, warnings that should be
[26:22] infos.
[26:23] >> Yeah.
[26:24] >> Yeah. Yeah. Very common.
[26:25] >> Bad classifications of things. Uh so we
[26:28] even have now uh systems put in place in
[26:30] the assert dialogues and uh that popup
[26:33] so that you can report a bad error.
[26:36] report a bad error.
[26:37] >> Literally now we get reports for bad
[26:38] errors so the devs can go in and fix the
[26:40] wording
[26:41] >> or or change the severity or things like
[26:43] this.
[26:44] >> And there was something we did so that
[26:46] certain teams if the if the popup was
[26:48] directly related to them, they couldn't
[26:49] just dismiss it and continue with their
[26:51] work.
[26:52] >> Yeah. So the that's exactly right. So
[26:54] the I feel like an AI when I say that
[26:56] now you're absolutely right. Uh but the
[26:58] uh yeah, we changed the the way the SR
[27:00] dialogues work.
[27:02] asserts for those you who don't know is
[27:03] like when I'm a programmer and I'm
[27:06] asserting in an area of the code that
[27:08] this value must be set to one that means
[27:11] that if the value comes in and it's not
[27:12] one then we'll have an error right that
[27:14] will show up that's the assert error and
[27:16] typically you need to action asserts
[27:18] right and so or you know or something
[27:21] else is going to go wrong and so
[27:22] historically uh the assert dialogue was
[27:25] just a global thing and then we still
[27:26] have those get assigned to dev teams so
[27:28] they they they are classified by code
[27:30] owners by dev team and so you can know
[27:32] if like it's an audio assert or if it's
[27:34] a you know programming assert or
[27:37] whatever which is great but we allowed
[27:40] people to ignore those either completely
[27:43] or just skip them right uh and on the
[27:46] other hand when you're actually testing
[27:48] the game or playing the game you get
[27:49] these asserts so you want to ignore them
[27:51] because you're doing something else
[27:52] you're not in in assert fixing mode and
[27:54] so what we we've changed the
[27:56] relationship towards assert inside the
[27:58] company so that now you can ignore error
[28:00] errors for any other team but yours. So
[28:03] if you get an assert error, you need to
[28:05] fix it. That's it, right? There's just
[28:07] no cuz the the thing that we were seeing
[28:09] in the company was like basically teams
[28:11] going like, "Oh, when are these I'm
[28:12] going to pick on audio, but
[28:14] >> sorry Graham and team, I'm not picking
[28:15] on you guys. It's just random, but like
[28:18] when are the audio guys going to fix
[28:19] their right when as you know the reality
[28:22] is like we all have our own sensors to
[28:24] fix and so we change that relationship
[28:26] as well."
[28:26] >> Yeah. It's again over years and years
[28:29] you get this you get this mentality. So,
[28:30] it's like I I just need to do my work
[28:32] and the game is telling me there's an
[28:34] there's there's an error, there's an
[28:35] assert for some unrelated thing. Like,
[28:36] what I'm working on doesn't have
[28:38] anything to do with that. Doesn't have
[28:39] anything to do with that. So, you you
[28:40] you you smash it. You smash you smash.
[28:42] It's just like selecting all cookies
[28:44] because GDRP made the rule that now
[28:46] everybody's got to announce their
[28:47] cookies on your website. Now, I just
[28:49] accept all of them. All All you've done
[28:51] is you've made me hit a button. you get
[28:52] in this habit of hitting button and
[28:53] people and this is one of those things
[28:56] like
[28:57] people we're going to we're admitting
[28:59] this here guys you know tell where's
[29:01] open development I'm like well we're
[29:02] sitting here saying that you know too
[29:04] many people got in the habit of clicking
[29:05] the button what it's
[29:06] >> it's
[29:07] >> we even found some some I'm not going to
[29:09] blame anybody but we've we've we've got
[29:11] analytics inside the company so we know
[29:13] who's putting asserts off right so we
[29:16] found some we found some [ __ ]
[29:18] >> a Paul Rendell I miss you just kidding
[29:22] That's certainly not fair.
[29:23] >> Paul's a good guy. He's a good guy. He's
[29:25] the one putting the [ __ ] in.
[29:26] >> I didn't know I didn't know he was here
[29:27] either. I ran into him today. He gave me
[29:29] a hug. I'm like, "Oh, I didn't know I
[29:30] was on hugging terms with Paul Randall."
[29:32] Nice.
[29:33] >> Um, all right. So, we've talked hero
[29:36] push squads. We've talked uh embedded
[29:39] green light. We've talked these hygiene
[29:41] initiatives uh that all help the way in
[29:45] which we make the game and make the
[29:47] patch and and make our content and
[29:49] stuff. Um, we also started an
[29:52] initiative. I guess I want to keep this
[29:53] under organizational stuff, but tell me
[29:55] if I'm wrong. The stability score.
[29:57] >> Yeah.
[29:57] >> Things. Talk to me about our internal
[29:59] stability scores and how we've
[30:01] determining them and how we're using
[30:02] them.
[30:03] >> Yeah. So, stability score is I don't
[30:06] think we've ever discussed this
[30:07] publicly.
[30:07] >> No, I don't think so. Uh so we we have
[30:10] this uh measure which is an indication
[30:13] that we use you know and the the the
[30:15] team that actually comes up with this
[30:17] would already tell you it's alchemy
[30:19] right like it's not an exact science but
[30:21] it does give us a pretty good idea so we
[30:23] try to establish a stability score for
[30:26] every build right we actually
[30:27] autocalculated based on the data that we
[30:29] get
[30:30] >> not patch every build
[30:31] >> every build yeah every build so like we
[30:34] send a build to PTU you know or QA or
[30:36] staging environments or whatever And we
[30:38] always have a stability score that's
[30:39] calculated over time. And so what the
[30:41] stability score is without going I don't
[30:44] want to go into the alchemy of it. But
[30:45] we're trying to figure out basically
[30:49] the stability of the environment. And so
[30:52] if you're connected to a game server and
[30:53] you get disconnected, we're going to
[30:55] count that right now. The reason for
[30:57] your disconnection will be used as part
[30:59] of that. How long the build has been
[31:01] running is also part of that equation.
[31:03] And the concurrency of it is also part
[31:04] of it. And so with this blackmagic
[31:08] numbers, right, we basically get a score
[31:10] out of it. And the score is one thing.
[31:13] Now we've put labels on. So we used to
[31:15] use the score internally as just a
[31:18] number like, oh, it's a 0.0 it's a 008
[31:20] build, you know, and then at some point
[31:22] I got a bit fed up with that because I'm
[31:24] like, what does that mean? And so the
[31:26] values for this are optimal, excellent,
[31:29] stable,
[31:31] unstable, volatile, crippled, or
[31:33] critically unstable. So that's the
[31:35] range, right? So we go from optimal,
[31:38] which is great, uh, stability score to
[31:41] critically unstable, right? And all of
[31:43] the thing in between, right? Uh, and
[31:46] this is based on, you know, all the
[31:47] stats that we get. And we kind of
[31:50] autocalculated. Now, we still have
[31:51] Jeffrey Peace, our internal alchem
[31:54] alchemist, always, you know,
[31:56] >> playing around with these numbers or
[31:57] adjusting the score, telling us how bad
[31:59] we're doing it. But the it it is
[32:01] actually pretty accurate in terms of
[32:04] like what the perceived stability will
[32:06] be uh from a player's perspective. And
[32:08] so, uh if I compare
[32:12] what was September 11 last year, was it
[32:14] like 323
[32:17] maybe four at that point, right? 323 or
[32:19] four, I forget which one. Uh, I would
[32:22] say like the stability score for 323x
[32:26] was probably in the
[32:28] kind of
[32:30] unstable range, right?
[32:32] >> Okay,
[32:33] >> that that would be a normal range for
[32:35] the 3 3.2x
[32:37] uh you know uh this kind of thing,
[32:40] right? So the the stability score server
[32:43] score for uh 430
[32:48] for example is between optimal and
[32:50] excellent. And so that means the the the
[32:52] rate of server crashes and
[32:54] disconnections overall is really good.
[32:56] Now the this score is not just server
[32:58] crashes, right? It's also client crashes
[32:59] or client disconnection, right? So if
[33:02] everybody gets disconnected because one
[33:04] of our cloud routers dies, then the
[33:06] stability score of the build will be
[33:07] terrible even though the servers are up
[33:09] and they're running real fine, right? So
[33:10] it kind of encompasses everything. We're
[33:12] trying to get one number for all of it.
[33:14] >> What a what what what
[33:18] was the stability score for a 318?
[33:23] >> That was critically unstable.
[33:26] Yeah, I mean it's funny because the
[33:28] actually the server if you just took the
[33:29] server score for for 318 it wasn't that
[33:32] bad but the it's everything before
[33:34] that's why it was so critical in the 318
[33:36] areas. It's because it was really a a
[33:39] massive backend you know problem at the
[33:41] time. Uh so yeah let's not talk about
[33:44] that. We're past that now. But uh
[33:46] >> the two things we don't talk about that
[33:48] damn holiday live stream
[33:51] >> and alpha 318.
[33:52] >> That's right. At least alpha 318 had to
[33:54] happen. At least that had to happen in
[33:57] order to get everything that came after
[33:59] it. There was nothing about the holiday
[34:01] live stream that needed to happen. So
[34:04] >> you don't want the the makeup. Let's go
[34:06] back with the makeup. Okay. Um so yeah,
[34:09] so that's the stability score, right? So
[34:11] that's an interesting measure and I mean
[34:14] that proves that we've kind of really
[34:16] improved the the crash rate on game
[34:18] server. So the server errors that you
[34:19] get. Now there are we need to do more on
[34:22] the stability score because with static
[34:24] server meshing even the stability score
[34:26] is sometimes skewed. Uh we have run into
[34:30] area local uh crashes that would crash
[34:34] loop a server right non-stop and so that
[34:37] really contributes badly to the overall
[34:39] score of the build but that's because
[34:40] it's one area. So uh you know we we're
[34:43] we're discussing how we can do more
[34:45] territory based uh scoring as well uh so
[34:48] that we can get a better idea. So
[34:50] basically what I'm saying is we can't
[34:52] get an actual just single number for all
[34:54] of the the stability stuff. There's
[34:56] always some factors that you know we've
[34:58] had AMD drivers or NVT drivers issues
[35:00] that affected stability scores some
[35:02] builds and so on. Yeah.
[35:03] >> So how do we use that to determine
[35:05] whether a build goes live? Like is there
[35:08] is there this it's it's I see these I I
[35:10] I see an aspect. We're just gonna let's
[35:13] just pull the curtain way way way back.
[35:15] Why not?
[35:16] >> Uh I I I I see the question
[35:20] >> is it worse than what's on live now?
[35:23] >> I see this question I see this question
[35:25] come up a lot in internal conversations
[35:27] when let's just be real. If we want if
[35:30] we tr tried to wait for everything to
[35:32] always be optimal we release very few
[35:35] things. Correct.
[35:37] >> That's just
[35:38] >> that's the nature of shipping a game
[35:40] that's in development.
[35:41] >> I'm I'm not going to sit here try to
[35:42] hide or pretend otherwise. But so we
[35:46] know that not everything is going to be
[35:47] optimal. But where do we draw that line?
[35:51] How do we draw that line? And is it more
[35:54] than just is it worse than what's
[35:56] currently on live?
[35:58] >> No, we always try to shoot for better
[36:00] than live, right? uh when when we can.
[36:03] But there's a lot of things that we look
[36:05] at to be able to ship a patch, right?
[36:07] The now obviously for this year it was a
[36:10] very big change for the development
[36:12] teams because moving to a four-week
[36:14] cycle means
[36:16] that we are always shipping. Like you
[36:19] know how we have a ship date, right,
[36:21] that we give ourselves and a schedule
[36:23] and then we've got our gate reviews and
[36:24] everything is like chained up to get
[36:26] there. Well, the closer you get to this
[36:29] this date, right, when you guys from
[36:31] from the players perspective, when you
[36:32] guys see like daily PTUs go go go go go
[36:35] and it's always update update update
[36:36] update, that's because we're getting
[36:37] close to the release, right? And so
[36:39] we're trying to get to the date and
[36:40] we're trying to validate all the things
[36:41] we need to validate as fast as possible.
[36:44] The focus is really on on shipping. So
[36:47] even minor issues become top priority,
[36:50] right? And so it's been really difficult
[36:52] for the teams this year to keep up with
[36:54] this because they we we finished a patch
[36:56] like yay okay we're late for the gate
[36:58] review like literally you know it's
[37:00] going like this and obviously we balance
[37:02] this across multiple teams but there are
[37:04] teams that unfortunately are you know
[37:06] they're they're they're on everything
[37:08] and so they're always they're always on
[37:10] it.
[37:11] >> Yeah. I think it I think it gets lost
[37:12] sometimes. We we in of of the many
[37:15] things we changed this year, we've
[37:17] shipped
[37:19] eight or nine patches this year. Yeah.
[37:21] It depends on whether you count what
[37:23] happened in April as a patch or not, but
[37:24] it it's it's we've shipped at least
[37:26] eight patches this year. And in years
[37:28] past, you know, from from from the 3.0
[37:31] era on, it was four a year. You know, if
[37:34] we were like some some one or two years,
[37:35] we only hit three and whatever. And now
[37:36] we've done eight this year. The the the
[37:38] the velocity change has been tremendous.
[37:42] uh tremendous. We've and it's helped, if
[37:46] I may, if I may, it's helped expose
[37:50] aspects of this. When I say this, I mean
[37:52] making all of this. It's helped expose
[37:55] aspects of this that we're pretty good
[37:57] at and it's helped expose aspects of
[37:59] this that we still struggle with and
[38:01] still need to uh improve. Um and just
[38:04] what you were saying just just just
[38:06] really hit home with that. I we're we're
[38:09] in the progress we're in the process now
[38:11] of talk discussing adjusting the patch
[38:13] hands for 2026. It's way too early to to
[38:16] give any details on that. Nothing's
[38:18] decided.
[38:19] >> But but yes, this has been a pretty
[38:21] relentless pace and there's a patch
[38:23] coming out in September. There'll be a
[38:25] patch coming out in October. There'll be
[38:26] a patch coming out in November. And then
[38:28] there'll be a patch coming out in
[38:29] December. So it's it's a it's certainly
[38:32] a year unlike any other.
[38:33] >> Yeah. Now, one of the things we didn't
[38:35] discuss about for this in order to reach
[38:37] the stabilities, there's also internal
[38:40] stability, right? That comes into play
[38:42] with this.
[38:42] >> I'm not familiar with internal
[38:44] stability. I've never had any myself.
[38:46] >> Well, so this one is a bit more
[38:47] subjective because we don't specifically
[38:49] have a score for it. But if I go back to
[38:53] last year, right, uh the way we would
[38:56] develop the game, and I don't want to go
[38:58] too deep in the discussion about source
[39:00] control and streams and all that stuff
[39:02] cuz that's just a rabbit hole, but in
[39:04] general when we work, we have a
[39:07] mainstream where we work in, right? In
[39:09] the past, this was a melting pot of
[39:11] everything. So core technology, editor,
[39:15] toolings, audio teams, content teams,
[39:18] gameplay teams, art, everything, right,
[39:21] in one stream, right? And um the fallout
[39:25] from that is that you go a bit faster
[39:28] because you're building things, you're
[39:29] improving the tools, as you're improving
[39:30] the gameplay, as you're improving
[39:31] everything. But the reality is we also
[39:34] had major internal stability issues,
[39:36] which is imagine that you're an
[39:38] environment artist. You show up at work,
[39:39] you make your little coffee, you pull
[39:41] the the morning build. You're like, "All
[39:42] right, I'm ready to work on my on my ASD
[39:45] mission today. It's going to be super
[39:46] cool. Editor crash, right?" And now, oh
[39:50] yeah, yeah, yeah. The team's already on
[39:52] it. We're fixing it. But you just lost
[39:53] two hours.
[39:54] >> Yep.
[39:54] >> And so we had major issues with this,
[39:57] right? And so when we started the year
[39:59] last year when actually when we did the
[40:01] show just after the show I think we went
[40:02] and finished this new uh branching
[40:05] strategy where uh all of the patches
[40:08] this year have come out of the same
[40:10] stream uh that we call SC patch and this
[40:15] patch receives almost no technology
[40:17] update. Yeah,
[40:18] >> it's basically us saying we can do this
[40:20] content with no new engine tech, no no
[40:24] editor update, no tooling update,
[40:26] nothing. Right now, it's not to say we
[40:28] are not touching the engine. We've we've
[40:30] fixed bugs, we've improved stability,
[40:31] like we but we bring these things
[40:34] embedded green light, full verification,
[40:37] tooling check before they go in. And so
[40:39] it's really about moving all these
[40:41] checks beforehand so that we don't
[40:43] destabilize the content teams who are on
[40:45] the they're under the gun all the time
[40:47] to produce the the stuff that they have
[40:48] to and we don't want to slow them down.
[40:50] And so that's another reason for why the
[40:52] stability is better. It's because we're
[40:54] also not introducing massively breaking
[40:56] changes in the engine that we then need
[40:58] to debug at patch time, right? And so
[41:00] that's been a big a big helper on
[41:02] stability at the cost of features,
[41:04] right? That was the whole point of the
[41:05] year really so far. And now we're
[41:09] changing some of that with tech preview.
[41:10] I I want to hit one more thing before we
[41:12] go into tech preview and stuff. You
[41:14] know, features are going to begin. Yes,
[41:16] Virginia is true. Features are going to
[41:18] begin appearing uh uh again uh uh in I
[41:22] won't say the word soon. Uh but
[41:25] they're coming. Uh before before I get
[41:27] to tech preview because that was a
[41:28] really good transition into tech
[41:30] preview, but I want to do touch on one
[41:31] more thing. You mentioned the rise in
[41:34] session link.
[41:35] >> Yep. So, this is this is one of those
[41:37] metrics that
[41:40] we've talked a lot about. We're we're 40
[41:42] minutes in. We've mentioned a lot of
[41:43] things that are probably never been said
[41:45] on a single development uh show before
[41:49] or podcast or whatever the heck you want
[41:50] to call this. Um, we don't often talk
[41:53] about session length, the the the am the
[41:55] the the the amount of people who are
[41:57] logging in. You hear about concurrency.
[42:00] Uh, Steam has concurrency numbers and
[42:02] stuff, but but session length is a super
[42:04] important metric for how for stability
[42:07] and for uh enjoyment of the product and
[42:11] stuff like this. Talk to me about uh
[42:12] session length, how it's determined
[42:14] other than just hey, that's how long the
[42:16] person's in there. Why it's important
[42:18] and uh what's happened to that over the
[42:20] last nine months?
[42:22] >> Well, so you know, let's say in a the
[42:25] session length is calculated by you
[42:28] joining a game server.
[42:29] >> Hold on. I'm sorry. Spicy SEO7 says 40
[42:31] minutes in said virtually nothing.
[42:35] >> Okay.
[42:39] >> Yeah, I stopped the whole show.
[42:41] >> Sure.
[42:41] >> Stopped the whole show.
[42:45] >> Continue. Ben,
[42:47] >> I was saying the session length is is
[42:49] calculated when you connect a game
[42:51] shard, right? So sitting on the main
[42:53] menu doesn't count, right? It's really
[42:55] when you're actually actively connected
[42:57] uh to a game server. And obviously it
[42:59] ends when you disconnect. So that sounds
[43:00] like a simple metric. Uh and it it kind
[43:04] of is, but it's it's very important
[43:06] because it gives you an idea of like you
[43:08] can have very high concurrency and a
[43:10] very short session length. And that
[43:12] means that's a terrible patch. It means
[43:15] people are going in they let let's let's
[43:18] go let's go let's talk about the patch
[43:20] we should not talk about when you would
[43:22] get in game if you if you could get in
[43:24] game and then can't get out of bed out
[43:26] at four end of session
[43:29] you know super high concurrency but very
[43:31] low session length and so the session
[43:33] length is a bit of an indicator of the
[43:35] quality of the of the game but also of
[43:39] the desire of the player to keep playing
[43:41] the game and so the longer the session
[43:42] length
[43:43] Uh it typically means that hey the
[43:45] content is being engaged with players
[43:47] are playing the game blah blah blah. Now
[43:49] I'm sure you know some people go out in
[43:52] deep space and they mine and that's it
[43:53] and they can mine for hours and they
[43:55] pull the average up. Other players you
[43:57] know go PvP for a couple minutes you
[43:59] know and then they they they exit and
[44:01] then you know they drive the average
[44:02] down. But overall the session length is
[44:04] like a it's always a metric that we look
[44:07] at as a secondary metric to look at the
[44:10] quality of of this. And so the the
[44:12] session length has more than doubled uh
[44:15] since the 3.x era uh of the game easily
[44:19] easily right and obviously in the case
[44:21] of server recovery your session
[44:23] continues and so that helps you know
[44:24] quite a bit because before it would cut
[44:26] the session in half so there's other
[44:27] factors that contribute to it but that's
[44:29] why it's an important one. Okay so
[44:33] now I want to talk about tech preview.
[44:35] So we we we used tech preview when we
[44:38] launched 4.0 0 uh technically 4.0 didn't
[44:42] launch until Jan end of January this
[44:44] year. That's when it went to live. It
[44:46] was on tech preview at the end of last
[44:47] year. And we we made these statements
[44:49] that we were going to use tech preview
[44:51] in order to bring these new things in
[44:53] and maintain the stability of live. Uh
[44:56] it took
[44:58] eight months. I I correct me if I'm
[45:01] wrong. I don't think we did a tech
[45:02] preview between January and and and late
[45:05] late August, early September. and now
[45:07] we're we're using them for the the the
[45:09] Vulcan stuff and the and the graphics
[45:11] stuff. Talk to me about
[45:14] talk to me about Tech Preview, why we're
[45:16] doing it, how it's working. Uh uh uh and
[45:20] uh let's just start there. I'll follow
[45:22] up when when you're done.
[45:23] >> So, I mean, let's start with the WID and
[45:26] half techch previews in let's say April
[45:28] of last year, right? We started this
[45:30] this idea of having tech previews last
[45:32] year, right? So, it's a new kind of tool
[45:34] that we have. Um, and obviously we use
[45:38] tech previews in the server meshing
[45:40] leadup, right? To validate key
[45:41] assumptions to actually isolate the
[45:44] testing. If you remember when we did the
[45:46] the major technical previews on the 3x
[45:49] branch for server meshing, it was taking
[45:52] the actual previous build with tremor
[45:55] meshing technology. So uninfluenced by
[45:57] new code, uninfluenced by the current
[45:59] patch, something we know is kind of in a
[46:01] stable range that we can use to test the
[46:03] technology alone, right? Uh it's also a
[46:06] way to derisk just again bringing that
[46:09] in the stream and then going Cortez
[46:11] maneuver. Now we're stuck with it. We're
[46:12] moving forward. But you know uh and so
[46:15] the tech preview has has been invaluable
[46:17] for that and uh and especially for the
[46:19] server meshing project that's been a
[46:21] super important tool because we just
[46:24] don't have always the ability to
[46:26] replicate what players are going to do.
[46:27] And to be honest, even with bots and
[46:29] virtual, you know, players and whatever,
[46:31] it's never the same. and you know 4,000
[46:35] players filling ships with hot dogs, you
[46:38] know,
[46:38] >> and right now we're using it for
[46:39] graphics stuff. How's that going?
[46:41] >> Yeah. So, uh this uh tech preview that
[46:44] we're bringing in is more than that
[46:46] actually like behind the scenes, right?
[46:48] The there's uh this is literally I told
[46:50] you about SC patch. So, all the patches
[46:52] this year have been coming from SC
[46:53] patch. The tech preview contains all
[46:56] changes that we've brought to our
[46:59] mainstream. This is where the engine
[47:01] development happens. This is also where
[47:03] we bring back some technology from
[47:04] Squadron 42 back into Star Citizen and
[47:08] uh we are moving all of this together up
[47:10] to SC patch. So this will now become
[47:12] when we're happy with all the testing
[47:14] that we we got through on this and it
[47:16] checks all the green lights. This will
[47:18] become the new baseline at from which we
[47:21] build patches. And so uh right now this
[47:24] includes yeah about eight to nine months
[47:28] of graphics changes right which have not
[47:31] seen the public yet. And so a lot of
[47:33] Vulcan changes obviously uh to the great
[47:35] pleasure of our great Ali Brown who uh
[47:38] you know really wants us to finalize
[47:39] this merge so that we can bring this in
[47:41] to players and uh there's some great
[47:44] stuff in there. So, a lot of Vulcan
[47:45] optimization, Vulcan changes, but also
[47:48] um in a way a way for us to test all of
[47:50] the these changes that we've been doing
[47:52] to the core engine rendering outside of
[47:54] the lab because we have a graphics lab
[47:56] internally that we test on, but it never
[47:58] again there's never anything like
[48:01] shipping it to players and having all
[48:02] the different kinds of hardwares and
[48:04] configs and settings and driver versions
[48:06] that we need. And so the majority of the
[48:10] stuff in this tech preview is playerf
[48:11] facing, but there's a ton of back-end
[48:14] tooling that comes with that. A major
[48:16] update to the editor with some new uh,
[48:19] you know, material edition systems and
[48:21] light group systems that are, you know,
[48:23] in dire need of coming in and a major
[48:26] upgrades to our scripting system that
[48:27] power missions. Uh, which the the
[48:30] mission teams are,
[48:32] >> you know, Elliot and his team are like,
[48:33] when is it going to be for that? Yeah.
[48:35] No.
[48:35] >> Yes. that that that's I'm glad you
[48:37] brought that up because I had actually
[48:38] forgotten that that underneath that it
[48:40] looks like it's just for the graphics
[48:41] everything but yes no the the mission we
[48:43] call it mission 2.0 0 we call it a
[48:45] couple different things internally but
[48:48] they are chomping at the you already
[48:50] said that I'm using I'm reusing the same
[48:52] sorry I saw I saw I I saw a comment from
[48:53] Salty and Mike that said talk about
[48:54] session girth and I just I laughed and
[48:57] wasn't listening to anything you were
[48:58] saying for like 30 seconds
[49:00] >> okay
[49:01] >> it's it's a good joke
[49:03] >> it's a good joke it was a it was a good
[49:05] joke
[49:05] >> now to be clear on the mission tooling
[49:07] there right this is part of mission 2.0
[49:10] it's the a prerequisite but it's it's
[49:12] not the mission 2.0 system. That's a a
[49:14] much larger endeavor that we're still
[49:16] on. But the this time it's tooling,
[49:18] right? So if if if you know some players
[49:20] are techsavvy here, uh it's basically a
[49:23] visual scripting system that we're
[49:25] upgrading massively. Uh which was I
[49:28] think we've demoed this years ago at
[49:30] this point, but it's called the
[49:31] subsumption at the time and it's now
[49:32] called star script. And so the the star
[49:35] script system is a is basically taking,
[49:38] you know, the tooling that the the teams
[49:40] are using now and and and making it much
[49:42] more reliable, robust with syntax
[49:44] checking, error checking, validation,
[49:46] auto layout, stuff like that that the
[49:48] teams really need uh to uh build uh more
[49:51] quality missions.
[49:52] >> I'm sorry, let me get this straight. You
[49:54] you you took a new feature set and you
[49:57] you you took the base word for it and
[49:59] then added star in front of it and
[50:01] called it that. No, we renamed
[50:03] Subsumption, which was the original
[50:06] name, and then we put star in front of
[50:07] it. Yeah, exactly. That's right. Hey, we
[50:11] have a theme. All right, we're going
[50:12] with it. I'm rolling with it.
[50:16] >> As long as as long as you're willing to
[50:18] get called out by me every time you do
[50:19] it. Um, all right. Uh,
[50:23] >> this tech preview is obviously
[50:24] important. Uh it it it's it'll be in
[50:27] tech preview for as long as it needs to
[50:29] be in order to uh to to shore up and
[50:32] then be integrated and become the new
[50:34] base from which we create our patches
[50:36] from what what is the next tech preview?
[50:41] Go ahead. Go ahead. Say
[50:43] >> well. So what's behind this right? This
[50:45] enables us to bring in I'm going to go
[50:47] back to streaming just to build the
[50:49] excitement. No, I'm joking. the so off
[50:51] of our main technology stream is another
[50:53] feature that's been built there that
[50:54] needs all of this to work and that's the
[50:56] engineering gameplay uh tech preview
[50:58] that's right behind it. So the moment we
[51:00] can bring in the base tech preview
[51:02] changes then we'll be able to do uh to
[51:04] run the next testing on engineering
[51:06] gameplay uh straight off the of that
[51:09] patch. So Z is going to be super
[51:11] interesting.
[51:12] >> Yeah. So I want to be real clear with
[51:13] that. This this is the next set of tech
[51:15] previews. This is this is I want to go
[51:18] ahead and say and I'm I'm going to go
[51:20] ahead and say it so that if
[51:21] >> people can get angry at me and not you.
[51:23] Uh right now we're using tech preview to
[51:26] test Vulcan and these and and and and
[51:28] all these graphical stuff and all these
[51:30] mission changes and everything
[51:31] underneath and stuff like this. When
[51:32] this is done and get fully integrated,
[51:34] go to live and whatnot. The next thing
[51:36] is engineering. We
[51:38] >> desperately
[51:40] I'm going to use the word desperately.
[51:42] desperately want this tech preview with
[51:44] engineering out before the end of the
[51:46] year. Now, this is the middle of
[51:48] September. It's still October, November,
[51:49] December. That's still a lot of time.
[51:51] It's not anytime, but anybody would say
[51:53] soon, but and that's no guarantee that
[51:55] we're even going to hit it. It's We've
[51:57] all been here. Somebody was joking, hey,
[51:59] drink it next time Jared says how long
[52:00] he's been here. Well, we've all been
[52:02] here, lots of us. I I recognize I've
[52:04] recognized some of these names for the
[52:06] whole time I've been here. We've all
[52:07] been here long enough to know that me
[52:09] saying it's our intention to get this
[52:10] before the end of the year is not the
[52:11] same as saying it will come before the
[52:14] end of the year.
[52:16] Just being honest with you here. But it
[52:17] is it is everybody's desperate intent in
[52:19] intention to get this thing into tech
[52:21] preview at the end of the year. We want
[52:22] it. We need it. We're tired. I did we
[52:24] did five six stories in engineering. I
[52:26] did like two or three Citizen Cons with
[52:28] engineering. Like we it's time
[52:31] 300. Kick that mother out onto tech
[52:34] preview please. Uh, so we're trying. Uh,
[52:37] but I just want to make sure that
[52:38] everybody's super clear on what that
[52:39] means.
[52:40] >> Hey, but well on this, I got a little
[52:42] segue for you.
[52:42] >> All right.
[52:43] >> So, there's one thing that uh kind of
[52:45] proves the uh improvements, right, on
[52:48] the live service is that there's a lot
[52:50] less players on PTU and there's a lot
[52:52] less players on tech previews than uh
[52:54] before, which is a good thing, right?
[52:56] That means players want to play the real
[52:58] game. And I I'm really happy about that.
[53:00] But it does mean uh if you want to help,
[53:03] join OC previews, right? the more the
[53:05] more people we get, even if it's for a
[53:07] short period of time, it's really
[53:08] helpful. Uh because we get more a more
[53:11] larger uh set of people that can try it
[53:14] out and that gives us more data.
[53:15] >> Yeah. I'm going to I want to talk about
[53:17] something. I got to show you you you you
[53:19] just you sparked something that's
[53:21] actually a bugaboo for me and I got a
[53:23] platform and I'm going to use it.
[53:25] >> So, we we did this change. We did this
[53:27] change this year. We went we went to
[53:28] what will be 10 or 11 patches throughout
[53:31] throughout the entire year. this almost
[53:33] monthly cadence of of live stuff. So,
[53:37] you've got the live stuff, a new live
[53:39] thing going every month. People like,
[53:40] you know, makes put something new in the
[53:42] game. We've had a thing new every month.
[53:44] We've had a we've had a PTU every month
[53:47] that runs along al along alongside it.
[53:50] Now, we've got tech preview. This pace
[53:53] that we're at this year has forced us to
[53:56] split our audience and stuff like this.
[53:58] It's like, well, do you want to be
[53:59] playing the live game or do you want
[54:01] rather would you rather be playing the
[54:02] the PTU version or would or now with
[54:04] tech preview, would you rather be
[54:05] playing tech preview? And the reality is
[54:07] we need everybody everywhere. We we the
[54:10] the live version is the version of the
[54:11] game that we're making. That's the
[54:13] version we want. We want everybody to
[54:15] experience it, but we also need them for
[54:17] testing. So, we want them to be in PTU.
[54:20] We also need them for the specialized
[54:21] testing. So, we want them to be in in
[54:23] tech preview. But it seems, and this is
[54:25] one of the reasons why I talked earlier
[54:27] that we're re-evaluating the 2026
[54:30] schedule, release schedule for this
[54:31] reason. It's we've created a situation
[54:34] where we want our players in too many
[54:38] places at once if I'm allowed to speak
[54:41] honestly, and I'll find out when I check
[54:43] my team's messages afterwards. Um, well,
[54:46] it's it's it's a thing that needs
[54:47] addressing. So, and it's it's hard. It's
[54:50] it's it's hard. Um,
[54:54] I don't know short of short of altering
[54:57] the schedule which we're talking about,
[54:59] what more what more can we do to
[55:02] encourage people to participate in PTU
[55:04] and and tech preview other than us
[55:06] sitting here on the show and
[55:09] begging them. Is there something?
[55:11] >> Yeah, we've got we've got some ideas to
[55:14] be honest. like we're toying with a few
[55:15] ideas like incentivization programs or
[55:18] things like that but this is slippery
[55:19] slope you know
[55:21] >> it's a very slippery slope and I I for
[55:23] me I I kind of like the
[55:26] you know the kind of volunteer approach
[55:28] for this but you're right like it we do
[55:30] have an issue where
[55:32] >> you know the the we're testing this and
[55:34] we have a you know the next patch is
[55:35] already cooking and so it's like it's
[55:37] always rolling. I mean, at the same
[55:39] time, it's a testament to our ops team
[55:42] that I want to salute one more time
[55:43] because these guys are always on the
[55:46] >> they're always on the clock. You know,
[55:47] there's always a build going out and so
[55:49] these guys are kicking ass. But, uh,
[55:50] >> it's hard because we don't we certainly
[55:52] don't want everybody playing nothing but
[55:54] PTU. You know, you second a patch goes
[55:56] out there, the next week there's another
[55:57] PTU. And it's like, oh, only play the
[56:00] worst, most broken version of Star
[56:01] Citizen. But we need your help testing
[56:03] it. But we it's it's this it's this
[56:05] weird catch 22 that I don't know that we
[56:08] have a a real great answer for other
[56:10] than adjusting the schedule which we're
[56:12] looking at um uh ne next year. Um and
[56:16] then it gets exasperated when we do uh
[56:19] uh timed events like like like Race for
[56:21] Stanton or whatnot when it's like okay
[56:23] well if you want these rewards that are
[56:24] only available during this period of
[56:26] time then you have to be in live in
[56:28] order to get them. But then it's like
[56:30] well we got a PTU over here. wouldn't
[56:32] you like to be in a PTU over here? It's
[56:33] like, well, no, I want to get the
[56:35] rewards that are over there. And, you
[56:36] know, we we we extended Race for Stanton
[56:38] and that helped with that a little bit,
[56:39] but it's just that there is no there is
[56:42] no obvious answer to this. I'm I'm just
[56:46] I'm pontificating on one of the
[56:48] interesting challenges of our
[56:49] development model uh that that exists
[56:52] that I don't think anybody really ever
[56:53] talks about publicly. And today, we
[56:55] decided we were going to talk about a
[56:56] whole bunch of stuff. So,
[56:58] >> um
[56:59] >> still we're doing it live. We're doing
[57:01] it live. Uh it's one of those things we
[57:03] still need to figure out and address. Uh
[57:06] Bionuks had a question. Hey, Bioni. Talk
[57:08] about one of those people that's been
[57:09] here as long as I have. Um it was a
[57:12] while back. I saved it. Bio. Uh why not
[57:15] have a set time for the servers to in
[57:18] the back end to just reset every day?
[57:21] >> Why not just flip the switch every day?
[57:22] Turn it off and turn it on again every
[57:24] day.
[57:24] >> Well,
[57:26] wait. That's one thing I forgot to put
[57:27] on the list of things we've changed this
[57:29] year, right? which is that we take
[57:30] maintenance windows. We used to never do
[57:33] that. Uh now why not do this every day,
[57:37] right? The issue that you get is that
[57:41] it's not just resetting the server. So
[57:44] you know rebooting the servers,
[57:45] reloading the game shard from
[57:46] persistence and continuing. You're going
[57:48] to get right back in the same uh
[57:51] situation. So let's imagine
[57:54] we're going to talk about cleanup
[57:55] density a bit later, but let's go back
[57:57] to the 3.x X days where we persist all
[57:59] the data in the shard and we have deep
[58:02] intersections. So a ship entered another
[58:06] ship, it's an intersection is costing on
[58:08] cost on the server. The server FPS is
[58:10] now [ __ ] Uh super low physics threads,
[58:13] you know, using all the resources. Uh
[58:16] and then you're like, okay, cool. Let's
[58:18] do a daily reset, right? It's going to
[58:19] fix that, right? So you you go through
[58:21] it, you reboot it. Cool. Now server
[58:24] reloads from persistence
[58:26] and those ships are still intersecting
[58:28] and so you're right back where you were.
[58:30] So if you you know you would look at the
[58:32] graphs and you see FPS super low zero
[58:36] during the reset 30
[58:39] five you know instantly and so uh you
[58:42] know what we've done in in in the past
[58:44] for this is now we have way more systems
[58:47] to deal with like this to reclaim
[58:50] um to reclaim performance right for
[58:52] these cases. So we first of all we
[58:54] detect them. Um but also uh we do emit
[58:58] fresh shards uh periodically. So we kind
[59:01] of decide when it happens. Uh but uh you
[59:03] know when we do massive uh maintenances,
[59:06] weekly maintenances, we don't take every
[59:08] week but we do it when we have to make
[59:10] configuration changes or things like
[59:11] that. We'll take a downtime and we're
[59:13] probably going to emit new shards and or
[59:15] run the repair on some of those shards
[59:17] and then that will help. So we kind of
[59:19] do that. just don't do it systematically
[59:21] because the reality is that's not
[59:23] completely how it works uh for the for
[59:26] the backend persistence side of this and
[59:28] it's it's not something that we can
[59:30] solve easily because the conditions are
[59:32] too kind of too great. You need the
[59:33] chart to be live to solve these things
[59:36] >> to be able to do it.
[59:36] >> What about a what about a traditional
[59:38] like every Tuesday scheduled maintenance
[59:41] period like like every every Tuesday at
[59:43] at at 4:00 a.m. Eastern time whatever
[59:46] things go down for two hours and come
[59:48] back. We're we're going towards that now
[59:50] like uh where we basically right now you
[59:52] can almost consider that every it's uh
[59:55] every Tuesday we try to do a maintenance
[59:57] typically early in the morning UK time
[59:59] is the is a good time in general uh just
[1:00:02] because of that's where the least
[1:00:04] players are playing typically but um
[1:00:07] that said the uh we don't take it every
[1:00:10] week because we don't always have to do
[1:00:11] it and so sometimes it's not necessary
[1:00:14] but we're going I I'm an advocate to
[1:00:16] always take it so that sometimes We use
[1:00:18] it to accelerate hot fixes. So, in case
[1:00:20] you haven't noticed, we do hot fixes all
[1:00:22] the time, right? So, we have this new
[1:00:24] deployment systems now and we're able to
[1:00:26] roll hot fixes way faster. But the when
[1:00:29] we roll a game server hot fix, um it's
[1:00:33] going to take time to what's the word
[1:00:35] that Ahmed uses? Percolate. Percate.
[1:00:38] It's going to take a while before it
[1:00:40] percolates. Right.
[1:00:40] >> Percolate.
[1:00:41] >> Yeah. And so sometimes you can have a
[1:00:43] game shard that has, you know, 10
[1:00:44] servers. Two of them have. fix. The
[1:00:46] others don't have it. So, depending on
[1:00:48] where you're at in the shard, you you
[1:00:50] have the fix or not. And it takes a
[1:00:51] while before all the game servers
[1:00:53] actually uh run into it. Now, obviously,
[1:00:55] if it's if it's an unstable build, it's
[1:00:57] going to be much faster because then
[1:00:59] server crash back new instance with the
[1:01:01] new build. Uh but these maintenance
[1:01:03] windows give us the opportunity to also
[1:01:05] synchronize that with a client fix when
[1:01:07] it's necessary. And so, we can take
[1:01:08] everything down, patch the client, patch
[1:01:11] the all the game servers in one go, emit
[1:01:13] fresh shards if we have to, and then
[1:01:15] start again. And so that's why typically
[1:01:16] there's big changes that can come about
[1:01:18] in this in in maintenances and we want
[1:01:20] to use them more. Yeah, definitely.
[1:01:22] >> Right. Well, uh, we've completed our
[1:01:25] first hour and
[1:01:27] >> that was part one organizational
[1:01:28] changes.
[1:01:28] >> That was part one, organizational
[1:01:30] changes. Uh, let's take an interlude
[1:01:31] here. I'll ask you just a side question
[1:01:33] here. Let you let you get a drink or
[1:01:36] whatnot.
[1:01:37] >> Um, with our last patch, uh, with um,
[1:01:40] what was the last patch? the August
[1:01:42] patch uh 43 43. Uh
[1:01:46] >> there was a big curiosity with the wolf
[1:01:48] >> uh on on on PTU right right before we
[1:01:52] crossed the finish line uh to release
[1:01:54] that uh we discovered something that
[1:01:55] didn't show up in any testing and
[1:01:57] whatnot. Uh walk me through what
[1:02:00] happened with the wolf.
[1:02:01] >> This is a beautiful one. That was fun.
[1:02:04] So yeah, like you mentioned, we're we're
[1:02:06] walking up to 43. We're at the point
[1:02:09] where, you know, pretty much everything
[1:02:10] has been, you know, validated and
[1:02:12] tested. And, you know, there's there's
[1:02:15] something with the wolf that, uh, you
[1:02:16] know, we're going to try to do more in
[1:02:18] the future is that we try to respect
[1:02:20] what we call the art of surprise. Is
[1:02:22] that typically beforehand, we used to
[1:02:24] put everything in a patch, go go. Uh,
[1:02:27] now for for certain things, we want to
[1:02:29] try to respect some level of surprise.
[1:02:31] We find that it's it's cooler for you
[1:02:33] guys when you discover things when it
[1:02:35] goes live and not necessarily on PTU two
[1:02:37] weeks before. Right. And so we're we're
[1:02:39] trying
[1:02:39] >> or shows every week.
[1:02:41] >> Orange shows every week. Exactly. Right.
[1:02:43] So and and and so the the wolf is part
[1:02:45] of that. Uh and so the the wolf was
[1:02:49] going on PTU for validation because it
[1:02:51] was part of 43 release at the very last
[1:02:53] minute, right? So like I think 24 hours
[1:02:56] before just to all right, make sure
[1:02:57] everything's fine. Well, it turns out
[1:03:00] everything was not fine. And so, uh, we
[1:03:03] look at the at the reports. There was
[1:03:05] one crash that we had to solve, which
[1:03:06] was, uh, solve rapidly. But then we
[1:03:08] looked at the at some very curious
[1:03:12] reports. And so players would basically
[1:03:14] report, I forget the IC exactly, but the
[1:03:19] something like, I landed with my wolf,
[1:03:21] exited the ship, and then was walking
[1:03:22] around. My, then my friend took my wolf
[1:03:24] and flew away, and then the world
[1:03:26] despawned around me.
[1:03:28] So, initially it sounds like a fluke
[1:03:30] report.
[1:03:31] >> Mhm.
[1:03:31] >> But then a bunch of people reproduced it
[1:03:33] and was like, I have this, I have this,
[1:03:35] I have this. And so, like, what is going
[1:03:37] on? And so, typically then that's where
[1:03:39] you our player relations team goes like
[1:03:41] something's fishy on here. So, we
[1:03:43] started to look into it. And um so we
[1:03:46] assembled a quick crew to check this out
[1:03:48] with and now this is kind of skeleton
[1:03:50] crew because we're we're moving too
[1:03:52] early to typically it's late very late
[1:03:54] here in the I'm in the UK right now. was
[1:03:56] very late here in the UK. US teams, it's
[1:03:58] night for them, you know. So, um, just
[1:04:02] get this crew on together, start looking
[1:04:04] at this issue. And so, basically, the
[1:04:06] issue that we're seeing is that
[1:04:08] sometimes, now when a bug starts with
[1:04:10] sometimes, you know, it's going to be a
[1:04:12] fun one. So, sometimes when you exit the
[1:04:15] wolf,
[1:04:16] you desync between the client and the
[1:04:18] server. And what actually happened is if
[1:04:20] you looked at the so we have this tool
[1:04:22] we uh we call the server renderer which
[1:04:25] allows us to basically view what the
[1:04:27] server sees, right? And so think of it
[1:04:29] like a a c a side camera that we have
[1:04:31] when we have access to the game server
[1:04:32] and then
[1:04:33] >> our our game plant and you can see what
[1:04:35] the server sees.
[1:04:36] >> And so you'd see my character get out of
[1:04:38] the wolf, you know, with that super nice
[1:04:40] animation exit and you know he jumps at
[1:04:42] the end.
[1:04:43] >> Yeah.
[1:04:43] >> Jumps off the ship. This is like super
[1:04:45] cool. And then I'm walking around on my
[1:04:48] client. Everything's fine. Game server.
[1:04:51] I'm literally in EVA animation floating
[1:04:54] over the planet.
[1:04:57] And the thing is I can't exit this
[1:04:59] condition, right? No matter what I'll do
[1:05:00] on my client now, the server will always
[1:05:03] see me attached to the ship in EVA anim.
[1:05:07] So we're like, okay, what's going on
[1:05:10] right now? We start looking at this. So,
[1:05:11] at this point, John Crew and I are, you
[1:05:15] know, losing our minds trying to get a
[1:05:17] proper reproduction.
[1:05:19] But then we realize, oh, they we put new
[1:05:21] animations for this ship. So, the the
[1:05:23] Wolf was one of the one of the new ships
[1:05:25] that have enter exit animations, right,
[1:05:27] that are brand new, like just captured,
[1:05:30] important the game, all that stuff. We
[1:05:31] don't do this all the time. And, you
[1:05:34] know, putting animations in the game is
[1:05:36] not just, oh, put the anime in. It's
[1:05:37] like, it's timing. There's events to
[1:05:40] link them. And there's linking them to
[1:05:41] the actor system, how they get
[1:05:43] triggered, you know, inserting them into
[1:05:44] the ship pipeline, stuff like that. And
[1:05:46] so,
[1:05:48] so we start debugging this. First step
[1:05:50] was, oh yeah, they probably forgot to
[1:05:52] put some of the seat events on it. So,
[1:05:54] we do a first patch. We try it out. Now,
[1:05:56] the QA guys come back like, no, still
[1:05:58] happens. So, like, okay, they now I
[1:06:00] think the timing is wrong on these
[1:06:01] events. So, let's change that.
[1:06:04] No, I think we went through like seven
[1:06:06] or eight iterations of fixes to try to
[1:06:09] figure out what was actually happening
[1:06:11] about that exact animation and why the
[1:06:14] ship system was disconnecting it. We
[1:06:16] went into full debugging on the actor.
[1:06:18] So, the actor is your character and all
[1:06:19] the states can go through and it was we
[1:06:22] could just see the two differ, right?
[1:06:24] But it made no sense. Why is one working
[1:06:26] and the other working? So
[1:06:29] at this point we're kind of running out
[1:06:32] of ideas and so
[1:06:35] that's when I called upon I used a
[1:06:36] button I called the bug smasher himself
[1:06:39] Mark Aen on the show and so Mark came in
[1:06:43] and was as flabbergasted as we were
[1:06:45] about what the hell is causing this and
[1:06:48] then so we went into a bit more
[1:06:49] debugging sessions uh way at this point
[1:06:52] we're deep engine side physics and
[1:06:54] collisions to try to figure out what's
[1:06:55] going
[1:06:57] And then what in the end Mark just goes
[1:07:00] within, you know, in the typical buck
[1:07:02] [ __ ] smasher fashion just goes into a
[1:07:05] what about gravity? And so we take a
[1:07:08] look at how the the ships have fig
[1:07:10] physics grids. These grids have sizes
[1:07:12] and mesh sizes and the animations is
[1:07:14] based on the geometry. And there was no
[1:07:17] gravity in this ship. 000, right? And so
[1:07:21] it's a basically it was a combination of
[1:07:23] the physics grid.
[1:07:26] The fact that the actor on the server as
[1:07:29] runs on a at a lesser v uh um
[1:07:32] resolution. So you know your client when
[1:07:34] you're in game is at full resolution.
[1:07:36] The server doesn't run at full
[1:07:37] resolution when he's simulating your
[1:07:39] character. And so combination of this
[1:07:41] would make that the server would
[1:07:43] actually reach the EVA state. So now
[1:07:45] you're floating in EVA, right? But with
[1:07:47] no gravity and no other movement, it
[1:07:51] will never solve itself. And he's also
[1:07:53] overlapping over the grid, which is too
[1:07:55] big. And so that was a bit of a
[1:07:59] combination of like blunders from
[1:08:01] geometry to wrong physics grid to out of
[1:08:05] uh um no gravity. And it made the bug
[1:08:09] also not 100%. It wasn't like I exit the
[1:08:11] ship and it happens. it would h need to
[1:08:13] happen like over it took about 10 to 15
[1:08:16] times you would get it one time and so
[1:08:19] all right so we fixed the we fixed the
[1:08:21] bug we we get this in there internal Q
[1:08:23] validates it and then uh to be able to
[1:08:25] properly validated as you know we need
[1:08:27] players and so that's where we mobilized
[1:08:29] you guys on PTU to come and try this out
[1:08:31] and this was one of the best moments
[1:08:32] I've had testing in this game where
[1:08:34] roughly 100 people showed up with wolves
[1:08:36] at boondoggle on Hurston and then 200
[1:08:40] people are entering and exiting the
[1:08:42] wolf, right? To see if they get detached
[1:08:44] from the animation. It was fantastic
[1:08:45] moment. And so, yeah, that was a fun
[1:08:47] that was a fun one to troubleshoot.
[1:08:49] >> And and that was and that was your free
[1:08:52] uh audio only episode of Bug Smashers as
[1:08:54] a nice little interlude there. Uh I want
[1:08:56] to shout out Dennis Daniel who's in chat
[1:08:58] right now.
[1:08:59] >> What's up, Dennis?
[1:09:00] >> Hi, Dennis.
[1:09:02] Miss you, man.
[1:09:03] >> My man.
[1:09:04] >> All right,
[1:09:06] part one here of playability. Our little
[1:09:09] Bug Smashers interlude. Uh folks
[1:09:11] watching, we've got another hour or two
[1:09:15] left, so we're going to be here for a
[1:09:17] bit. In case you're like, "Why would
[1:09:19] they talk about that?" Whatever. We're
[1:09:20] getting there. We're getting there. Uh
[1:09:23] part two, server meshing. Server
[1:09:26] meshing, past, present, future, static,
[1:09:30] dynamic, 3D.
[1:09:33] I'm just going to go get a get a get a
[1:09:35] cocon. I'll be back.
[1:09:38] Talk to me about server mission, man.
[1:09:40] Ah well you know so obviously we
[1:09:43] launched server meshing end of last year
[1:09:46] um and we've been running a server mesh
[1:09:48] environment for now seven months eight
[1:09:51] months right nine months we're n month n
[1:09:54] already uh and so that's the static
[1:09:57] server mesh and so that means we have
[1:09:58] territories just a quick recap for
[1:10:00] everybody and so that means that we have
[1:10:02] a configuration for these territories
[1:10:04] and we can pick uh different top level
[1:10:07] object containers from the tree of the
[1:10:09] universe and and we basically distribute
[1:10:11] them on different uh you know resource
[1:10:13] servers. So at the moment we run at a 10
[1:10:16] game server per shard setup and so that
[1:10:19] means that we basically distribute the
[1:10:20] key um areas you know on these 10 game
[1:10:23] servers and uh that that's how when you
[1:10:27] transition from one zone to another it's
[1:10:29] seamless but you're moving from one
[1:10:31] server to the other. So, we've been kind
[1:10:33] of taking the year to uh get used to
[1:10:37] being a server mesh environment. Uh, and
[1:10:39] so that means we've discovered a bunch
[1:10:42] of gameplay bugs related to this. I
[1:10:43] think we talked about some of those uh
[1:10:45] in January, but that have been solved,
[1:10:47] but the uh for example, the quantum
[1:10:50] drive systems, you know, didn't properly
[1:10:51] handle the transition. Sometimes we'd
[1:10:53] lose power in transition and then that
[1:10:55] would cause the thing to reset, pull you
[1:10:56] out of granum, things like that. That's
[1:10:58] one example. But there's a there's a
[1:10:59] series of other issues that were related
[1:11:01] to that. Um but uh more importantly,
[1:11:05] we've been also learning about how to
[1:11:07] properly distribute the load of the
[1:11:10] simulation. So now we have this tool, we
[1:11:12] have this map. It's not the end of it.
[1:11:13] Right now, every patch this year, uh
[1:11:16] we've changed the configuration. I don't
[1:11:18] think we've had a single static
[1:11:19] configuration since the beginning of the
[1:11:21] year. Every patch has been different.
[1:11:23] And so uh obviously we've tried to make
[1:11:26] sure that we dedicate uh resources to
[1:11:28] where there's an event right so if it's
[1:11:31] SD location or hat locations or
[1:11:33] stormageddon locations we've kind of
[1:11:34] reconfigured the mesh at each release uh
[1:11:37] to basically guarantee some server power
[1:11:39] at each places because we know that
[1:11:40] people congregate in these areas. We've
[1:11:43] also learned a couple of things like
[1:11:45] because uh you know the teams that make
[1:11:48] content don't necessarily always talk to
[1:11:50] the team that make the tech right and so
[1:11:52] how
[1:11:54] it's you know it's a you know so the
[1:11:57] where you put those locations or how
[1:11:58] many there are is important right uh and
[1:12:01] so uh that we kind of learned that
[1:12:03] through the hot moments where like they
[1:12:06] were a bit too close and we couldn't
[1:12:07] distribute them properly uh because of
[1:12:09] other limitations which I'll get into in
[1:12:11] a bit but and so we've change that
[1:12:13] config every time. And so it's been it's
[1:12:14] been really a good learning experience
[1:12:16] for the team. We've also solved a bunch
[1:12:18] of issues in the static mesh uh related
[1:12:22] to performance. Uh and so we've talked
[1:12:24] about this before, but the the hybrid,
[1:12:27] we talked about stability of game
[1:12:28] servers, right, earlier, but the hybrid
[1:12:30] is at is at the center of this. This is
[1:12:32] the networking component that you're
[1:12:34] connected to when you're playing the
[1:12:35] game. He's doing the replication, he's
[1:12:37] doing the binding and all that stuff,
[1:12:39] right? And for this guy, the stability
[1:12:42] score is zero. Meaning if there's one
[1:12:45] crash, we don't ship the patch, right?
[1:12:46] That's it. Right. It that thing needs to
[1:12:48] run perfectly at all times.
[1:12:50] >> Yes.
[1:12:50] >> Um and and the the kind of quality
[1:12:53] metrics that we expect from the from the
[1:12:55] hybrid are are very very intense like
[1:12:58] the the the speed at which they transfer
[1:13:00] packets or accumulate packets and
[1:13:02] transfer it and between between uh areas
[1:13:04] and and elements has to be very very
[1:13:06] very fast at all times or else you get
[1:13:08] rubber banding. you get desync things
[1:13:10] like that. Uh and so there's been a lot
[1:13:13] of performance improvements behind the
[1:13:14] scene. Uh especially I think just before
[1:13:17] Stormageddon or is it after? At this
[1:13:19] point it's a bit of a blur but I know
[1:13:21] that we found a couple of key
[1:13:23] optimizations that have really helped
[1:13:24] the hybrid maintain uh stability across
[1:13:26] some of the big binds that we were
[1:13:28] seeing. Again binding is the is this
[1:13:30] process that uh when your client act you
[1:13:33] know needs to bind to an area it means
[1:13:35] he's receiving updates for an area. this
[1:13:37] whole binding up uh uh uh process is is
[1:13:41] a bit uh costly on the hybrid especially
[1:13:43] when there's big areas being bound and
[1:13:45] so uh optimizations have gone into that
[1:13:48] uh and that has helped desync quite a
[1:13:51] bit. I mean we're still there's always
[1:13:53] room there to to improve for improvement
[1:13:55] and the team are still actively working
[1:13:57] on this. It's never going to be the end
[1:13:58] of it. Um but uh it's a it's much
[1:14:02] improved since the uh release of 4.0 you
[1:14:04] know, like the the I hope the rubber
[1:14:06] banding is getting a lot better every
[1:14:07] patch. Like we're hoping to, you know,
[1:14:09] always cut some some of those big
[1:14:11] bottlenecks across as we go.
[1:14:14] >> Okay.
[1:14:14] >> Um, so that's static server mesh. We
[1:14:17] also learned a couple things on how to
[1:14:19] distribute those locations. So the cost
[1:14:21] of a location, right, and the amount of
[1:14:23] players like is not necessarily the same
[1:14:25] weight.
[1:14:26] >> It funny enough, a lot of players in the
[1:14:29] same place. Let's say you have an empty
[1:14:32] room, right, with nothing in it
[1:14:34] >> and I can pack 300 players there, no
[1:14:36] problem. Server is good, right? No
[1:14:38] problem. Uh, if I add AI in there, we
[1:14:42] start getting into issues, right? If I
[1:14:44] add ships in there, bigger issues. So
[1:14:46] that if you want the cost of the
[1:14:48] location
[1:14:49] and multiplied not necessarily
[1:14:51] multiplied but factored in by the number
[1:14:54] of players there is what kind of is the
[1:14:56] cost of an area and how we should
[1:14:58] distribute the how should we should
[1:15:00] distribute the computing power that you
[1:15:02] know we pay for to run the game. And so
[1:15:06] we've been learning a lot about this in
[1:15:08] in in all these experiments we've been
[1:15:10] doing and that's informing dynamic
[1:15:12] server measuring right meaning how what
[1:15:14] the algorithm needs to be in order to
[1:15:16] properly distribute the load of the
[1:15:18] simulation to the different uh
[1:15:20] components in the game that you know can
[1:15:23] do the replication.
[1:15:24] >> This weird this this weird equation this
[1:15:26] is in all the the factors of all right
[1:15:28] obviously how many players are there?
[1:15:30] Sure. uh uh what is the resource
[1:15:32] footprint of the location itself
[1:15:35] obviously how many ships are present
[1:15:38] because you know it it's not all ships
[1:15:40] are created equal the our process of
[1:15:42] making ships have changed over the years
[1:15:44] some ships are more efficient than
[1:15:45] others so it's okay what what's what's
[1:15:47] the what's the resource footprint of the
[1:15:49] ships in the area what's the resource
[1:15:50] footprint of the location itself what's
[1:15:53] the resource footprint of the people in
[1:15:55] the area and then how where's the next
[1:15:58] closest area like cuz you know with with
[1:16:00] onx facilities. We we distributed a
[1:16:02] hundred of them and went up. But but
[1:16:04] like you mentioned with um a line in
[1:16:07] mine, our uh one of our big learnings,
[1:16:11] we'll we'll say learnings. It's a it's a
[1:16:13] nicer word than mistake was positioning
[1:16:16] was where we put them and whatever. We
[1:16:17] weren't able to separate them into
[1:16:20] into the shards that we wanted to. So
[1:16:22] being at one and being at the other one
[1:16:24] just doubled up doubled up the uh the
[1:16:27] performance hit. Uh, somebody in chat
[1:16:29] said, "It seems like it seems like uh
[1:16:32] everything CI does is a test."
[1:16:35] Yes, I think that was Fly Mo Ninja if I
[1:16:37] remember. Fly Mo ninja. Hey, man. Yes.
[1:16:39] Everything we do is a test. We're We're
[1:16:41] We're learning. Don't There's a reason I
[1:16:42] used to end these shows with what did we
[1:16:44] learn this week. Don't Don't ever don't
[1:16:47] ever think that no aspect of game
[1:16:49] development isn't intricately tied up
[1:16:52] with the process of learning. Uh, not
[1:16:55] for us, for you, for everybody. It's
[1:16:57] like this. So yeah, we are we are
[1:16:58] learning as we do this and that's what's
[1:17:00] been talking about it. So dynamic server
[1:17:02] messing tomorrow, next week, what you
[1:17:05] got? So no well I'm not going to advance
[1:17:08] the date but I can tell you that the
[1:17:10] comp there's multiple things that
[1:17:12] compose dynamic server meshing right
[1:17:13] obviously the team is working on on
[1:17:15] those aspects right now right the key
[1:17:17] aspects that dynamic server meshing will
[1:17:19] bring is um
[1:17:23] so a kind of arbitrary subdivision right
[1:17:25] meaning that we could assign a server to
[1:17:27] anything that's a streaming group so uh
[1:17:30] inside this big tree right you've seen
[1:17:32] the pees discussions where we show how
[1:17:35] kind of It's the data is laid out and
[1:17:36] it's a one big giant scene tree. Any of
[1:17:39] those uh nodes that are uh deemed a
[1:17:41] streaming group can actually have a
[1:17:43] server actually having authority over
[1:17:45] that entire area. And so DSM will
[1:17:48] definitely bring us the ability to kind
[1:17:50] of arbitrarily subdivide where we're no
[1:17:52] longer tied to these territories or this
[1:17:53] territory map. That's the first big
[1:17:55] thing we're going to uh we're going to
[1:17:57] gain from dynamic server meshing and
[1:17:58] we're working on that part at the
[1:18:00] moment, right? which is basically how we
[1:18:03] can um move these streaming groups from
[1:18:05] one server to the other. It's already
[1:18:07] transferred, who's managing it, what
[1:18:09] component is taking care of that. Uh so
[1:18:11] that's under development right now.
[1:18:13] There's also a lot of simil I want to
[1:18:16] say parallels or similarities uh between
[1:18:19] dynamic server meshing and instancing,
[1:18:21] right? And so uh we've talked about that
[1:18:24] we're working on instancing. That's also
[1:18:26] part of this work, right? And so, uh, we
[1:18:29] technically already have the mechanics
[1:18:31] of instancing in the game in the form of
[1:18:33] the, um, instance hangers, right? Which
[1:18:36] basically allows you to have multiple
[1:18:38] stacked uh, areas on top of each other,
[1:18:41] but you get to see only one and only one
[1:18:43] of them is bound to your client and
[1:18:45] replicated to your client. uh
[1:18:47] historically if we go back in the 3x
[1:18:49] days when we put this in uh initially
[1:18:51] the the the instancing was actually not
[1:18:53] working from the networking side and so
[1:18:55] you would replicate all the the hangers
[1:18:57] that were at that location even though
[1:18:58] you couldn't see it which was even
[1:19:00] worse. Now you actually get assigned the
[1:19:02] proper tag on your character and so uh
[1:19:05] when you actually take the elevator uh
[1:19:07] it's bringing you to an actual instance
[1:19:10] uh which is basically yours. So the
[1:19:12] instance tech that we're building on top
[1:19:13] of that will um will basically leverage
[1:19:17] some of the concepts we're putting into
[1:19:18] dynamic server meshing because we want
[1:19:20] to be able to distribute those instances
[1:19:22] across the mesh, right? And so uh right
[1:19:25] now they're location bound, right? But
[1:19:27] we want to not be able to just have them
[1:19:29] location bound but have any of the
[1:19:30] servers take those off uh so that we can
[1:19:33] share the load. again optimizing the
[1:19:35] distribution of the simulation uh of the
[1:19:38] computing workload that we have uh
[1:19:39] across what players are doing so that
[1:19:42] when you uh enter an instance we can
[1:19:44] guarantee a certain level of of
[1:19:45] performance without needing to have a
[1:19:47] little you know dude at the back going
[1:19:50] like oh we need to change the territory
[1:19:51] map for this right basically and so
[1:19:53] we're actively working on all this stuff
[1:19:56] uh right now to bring us to the dynamic
[1:19:58] part of of server meshing and obviously
[1:20:00] we'll with that uh even though This is
[1:20:04] not our focus right now, right? Uh we
[1:20:07] will we are pl we are still planning to
[1:20:09] go to higher player counts but this is
[1:20:10] totally not our priority right now. Our
[1:20:13] priority is really on uh getting the
[1:20:15] functionality and the computing workload
[1:20:17] properly distributed automatically. Uh
[1:20:20] exactly. Um
[1:20:24] I'm glad you say we're not that's not
[1:20:26] our focus. Um,
[1:20:29] I talked earlier in the show about us
[1:20:32] sometimes acting like we invented the
[1:20:34] wheel when it's one of those things that
[1:20:35] that that other people, you know, other
[1:20:37] games have had and stuff like this. Um,
[1:20:39] lots of games have some version of
[1:20:42] server meshing.
[1:20:43] >> Yeah.
[1:20:43] >> Uh, you know, famously, what's the
[1:20:46] what's the other one? The the the Dune
[1:20:49] the Dune game whose name escapes me at
[1:20:50] the moment. You know, they they did a
[1:20:52] big thing on their version.
[1:20:54] >> Awakening. They they did a big thing on
[1:20:56] their version of of server meshing and
[1:20:58] stuff.
[1:20:59] >> Um
[1:21:01] what
[1:21:03] what how is ours different than what
[1:21:06] other things I'm going give you a hint
[1:21:08] 3D. How is ours different from what
[1:21:12] you're seeing in every other game? Just
[1:21:13] just cuz because I I see this come up. I
[1:21:16] I I I see you know I watch the the the I
[1:21:19] watch the YouTubes and the Twitches
[1:21:20] sometimes uh and I see people like you
[1:21:23] know they keep acting like server
[1:21:24] meshing. you [ __ ] invented it and
[1:21:25] whatever. There's my one swear. Ah, it
[1:21:27] came. Sorry, Tyler. Um, why is our
[1:21:30] server meshing different?
[1:21:32] >> Um, well, so the You're right. Like it's
[1:21:35] not like uh server meshing isn't already
[1:21:38] like a thing, right? Like in in the
[1:21:40] past, like even you know, Optima Online
[1:21:43] had a server like transitions, right?
[1:21:46] >> Right. Now, they were not necessarily
[1:21:47] seamless, but you still had server
[1:21:48] transitions and gridding, right? which
[1:21:51] is a typical approach which is you take
[1:21:52] the the the world you split into a grid
[1:21:55] and then you have servers between them.
[1:21:57] The
[1:21:59] you know and then and then the rest of
[1:22:00] the different strategies come from how
[1:22:02] the servers communicate to each other
[1:22:04] right and how the state is distributed
[1:22:06] and how you transition from one to the
[1:22:07] other and uh I think that the areas
[1:22:11] where our approach differs is that we've
[1:22:14] um we've extracted the simulation from
[1:22:17] the game and the replication of the
[1:22:19] game. So replication is the is how game
[1:22:22] server and clients stay in sync, right?
[1:22:25] And so when you're in an area and
[1:22:26] somebody opens the door, the door opens
[1:22:28] on your client and that's because it's
[1:22:30] been opened on the server and it's also
[1:22:31] because somebody else sent that had
[1:22:33] authority to send that message to open
[1:22:34] the door. Uh so this is all replication,
[1:22:37] right? Well, normally you have one game
[1:22:39] server and he does both replication and
[1:22:41] simulation, right? So we've taken the
[1:22:43] star engine, we've extracted this the
[1:22:45] the the networking from it. So the
[1:22:48] replication into the hybrid. Now we call
[1:22:51] him the hybrid now because it's it's a
[1:22:53] first stage of of server meshing, right?
[1:22:54] But
[1:22:55] >> the the hybrid has all the networking
[1:22:57] components. He has the state in his
[1:22:59] memory. He holds all of the information
[1:23:02] uh for the shard and uh he he does the
[1:23:05] replication. So e you're connected as a
[1:23:07] client to the hybrid. So you're not
[1:23:10] connected to the different servers.
[1:23:11] You're actually on the the game server.
[1:23:13] You're actually that's simulating your
[1:23:14] area is actually you're not even on it.
[1:23:17] You're not even in active connection
[1:23:18] that server. You're active actively
[1:23:20] connected to the hybrid. And and the
[1:23:22] hybr the the game servers are actually
[1:23:24] clients with authority if you want,
[1:23:27] right? If we simplify. And so that's one
[1:23:29] area that where it differs. The second
[1:23:31] one is how we separate space, right?
[1:23:33] Right. And you alluded to it which is
[1:23:35] that our territory mappings or ser or
[1:23:38] our mappings to how the authority is is
[1:23:40] is managed is in 3D space. So it's not a
[1:23:43] grid. Uh it's fully made in 3D space.
[1:23:45] And so that means that we can have uh
[1:23:48] it's 3D space and a tree, right? Which
[1:23:51] is the other bit. And so what what that
[1:23:53] means is that
[1:23:55] by taking the I'm going to try to make
[1:23:57] that simple. Uh let's say I'm on the
[1:24:00] yellow server, right? and suddenly the
[1:24:02] yellow server there's not enough players
[1:24:04] there and the location is a bit low cost
[1:24:07] then we might want to despawn that
[1:24:09] server. Well well we can transfer the
[1:24:11] authority from everything the yellow
[1:24:12] server is doing to its parent. there is
[1:24:14] a parent right whereas when uh you're
[1:24:17] doing griding that's a bit of a
[1:24:19] different model uh in the past I've seen
[1:24:21] solutions for meshing which include
[1:24:23] servers like adjacent servers talking to
[1:24:25] each other for example things like that
[1:24:27] the client actually disconnecting from
[1:24:29] one server connecting to the next right
[1:24:31] which in all of these cases these were
[1:24:32] things that created side effects that we
[1:24:34] didn't want so in the past we did try
[1:24:35] these things like if I go way back when
[1:24:37] we started the server meshing projects
[1:24:39] that was the first approach was was like
[1:24:41] a bit more classical but we realized to
[1:24:43] properly offer for what we've shown in
[1:24:45] for example the meshing demo Paul did a
[1:24:47] couple years ago or what you're actually
[1:24:49] playing now on live you know to be able
[1:24:51] to have like bullets completely traverse
[1:24:53] >> right
[1:24:54] >> the transition and hit on the other side
[1:24:56] of it like we needed to have a solution
[1:24:57] that was native to all all how we were
[1:25:00] doing it the bet behind it was that the
[1:25:02] hybrid was going to be fast enough and
[1:25:03] so far it seems like it's working out
[1:25:05] though it is a lot of work to get it you
[1:25:07] know to keep it at that speed uh with
[1:25:09] all the needs that we have so that's the
[1:25:11] that's I would say was what's the
[1:25:12] differences in the approach and every
[1:25:15] game is going to have its own approach,
[1:25:16] right? Tailor made to its its gameplay,
[1:25:19] right? So, it's in our case, you know,
[1:25:22] we're trying to make the biggest
[1:25:23] universe ever and so we need the most
[1:25:25] scalable uh way to approach it. Also,
[1:25:28] we've taken the most difficult route, I
[1:25:29] feel, but
[1:25:31] >> I think you need to I think you need to
[1:25:32] adopt CR hands a bit more. You were
[1:25:34] doing the thing and I kept like, no,
[1:25:36] little server inside a bigger server.
[1:25:37] I'm like, you you use your CR hands. It
[1:25:40] it help you know this this this server
[1:25:42] inside this server. So when this server
[1:25:44] disappears, the server above it can can
[1:25:46] get the authority. I'm like I'm just
[1:25:47] over here like
[1:25:48] >> use the CR hands.
[1:25:49] >> A [ __ ] Yeah, that's that was a missed
[1:25:52] opportunity.
[1:25:54] >> If only there was a time if ever there
[1:25:56] was a time for CR hands.
[1:25:58] >> Yeah, that's true.
[1:25:59] >> All right. any any any so so 3D server
[1:26:02] meshing
[1:26:04] uh and and and separating everything so
[1:26:06] connecting people to the hybrid instead
[1:26:07] of instead of the server so that things
[1:26:08] can connect and carry through between
[1:26:11] from one server to another server
[1:26:12] seamlessly and stuff um anything else
[1:26:14] you want to say on server mission before
[1:26:16] we move on
[1:26:17] >> no I think that's pretty much the state
[1:26:19] of it like we're advancing on the dev
[1:26:20] for it uh obviously we don't you know we
[1:26:23] we don't want to bring in stabilized
[1:26:26] changes to the game right and so we're
[1:26:28] making sure that these are going to be
[1:26:30] tested first. We will go to a tech
[1:26:32] preview when we feel it's uh it's the
[1:26:34] right time. Right now it's not the right
[1:26:36] time and so uh we're still working on
[1:26:38] these aspects but that's our objective
[1:26:39] is to you know we're we're not going to
[1:26:42] do a big oh dynamic server meshing is up
[1:26:44] right that's not going to be how we're
[1:26:45] going to roll this out. We will most
[1:26:47] likely be bringing elements of meshing
[1:26:49] into play right like the ability to
[1:26:51] despawn servers in areas that are not
[1:26:53] being uh simulated. uh the ability to
[1:26:56] scale up the mesh dynamically for from
[1:26:58] the territory map and then later on
[1:27:00] possibly go into you know uh then the
[1:27:02] instancing support that goes through it
[1:27:04] and then after that you know the final
[1:27:06] uh the final jewel of like dynamic
[1:27:10] resubdivision and reallocation.
[1:27:12] >> Sorry I didn't mean to laugh in the
[1:27:14] middle of what you're saying don't
[1:27:15] please in the chat goes I'm really glad
[1:27:17] I was here to see Disco's last show
[1:27:19] [Laughter]
[1:27:21] I've survived this long man. All right.
[1:27:24] So,
[1:27:26] part three.
[1:27:28] >> Big chickits.
[1:27:29] >> Oh, stretch.
[1:27:32] Stretch. Part three. What is my hair
[1:27:33] doing?
[1:27:36] Just looking fabulous from here.
[1:27:40] So weird. All right. Um,
[1:27:42] this phrase, this section I call uh big
[1:27:46] ticket items. The the these are these
[1:27:48] are various issues that at some point in
[1:27:51] the year have generated some amount of
[1:27:55] angst, aggression, frustration,
[1:28:00] or any other word you can think of to
[1:28:03] describe Tyler Wicken. Um
[1:28:08] he's watching. Uh let's start with the
[1:28:11] let's let's start with the big one.
[1:28:13] Freight elevators.
[1:28:14] >> Yeah. Now, I already did a big five
[1:28:16] minute thing explaining
[1:28:18] Oh, there's a delay. He just popped up.
[1:28:20] Um Fre um
[1:28:24] where are we at now? Where are we at
[1:28:25] now? What's happening? What happened?
[1:28:27] What do you want to tell us about
[1:28:27] Freight Elevation?
[1:28:28] >> Let me pull up my notes.
[1:28:30] >> Okay. Uh so, Fred Elevators is one of
[1:28:34] our hero uh squads, right? Now, the you
[1:28:39] know to the your previous interventions
[1:28:41] that came way too late in our planning,
[1:28:43] right? Right. And so that's one thing
[1:28:44] that, you know, I think that if we could
[1:28:47] go back in time, that squad would have
[1:28:48] started way way way earlier. And so I've
[1:28:52] got a bunch of, uh,
[1:28:54] >> to be I'm sorry. To be clear, work could
[1:28:55] start earlier. We hadn't had the hero
[1:28:57] squad on it.
[1:28:58] >> Correct. Exactly.
[1:28:59] >> Okay.
[1:28:59] >> Uh, good clarification. And so, uh, let
[1:29:04] me go through some of the stuff that
[1:29:05] we've been going through on freight
[1:29:06] elevators in general. So, um, to start
[1:29:09] with, uh, obstruction issues, right? And
[1:29:13] so a lot of the issues that we ran into
[1:29:16] were related to uh how the elevator
[1:29:19] actually detects obstructions and or uh
[1:29:23] contents. And so uh for example blocking
[1:29:26] the doorway
[1:29:28] item being positions on the roofs of the
[1:29:30] planetary freight elevators. Now a lot
[1:29:32] of this by the way like I'm going to
[1:29:34] talk more about the planetary uh
[1:29:36] versions of it which are 10 times worse
[1:29:38] for some reason. Um but the in terms of
[1:29:42] obstructions like you could leave items
[1:29:44] on top of the elevator.
[1:29:46] Uh and then it was detected as an
[1:29:48] obstruction, right? And so these
[1:29:50] obstructions first of all the checks
[1:29:51] were super rough. Uh and so they would
[1:29:53] go there's something I'm not going to
[1:29:55] move which is what a bit like come on,
[1:29:57] you know?
[1:29:57] >> So somebody would put a a smold bottle
[1:30:00] on top of the freight elevator.
[1:30:02] >> Correct.
[1:30:02] >> And the whole damn thing would stop
[1:30:03] working.
[1:30:04] >> Exact. Well, yeah. Exactly. That would
[1:30:06] break the whole elevator until that was
[1:30:08] removed. Um, but
[1:30:10] >> incidentally med pen med pen. Oh my god,
[1:30:12] it was med pen so small.
[1:30:14] >> No. Yeah, but see that's even worse
[1:30:16] because uh there's uh there's a problem
[1:30:19] with how the items
[1:30:22] are are set up, right? And so when we
[1:30:24] create a prop or we create an item,
[1:30:26] there's a bunch of things that go into
[1:30:27] it. You know, physics proxy, weapon
[1:30:29] proxy, you know, all kinds of things
[1:30:31] that go on top of it. One of them is is
[1:30:33] the bounds of the item, right? which is
[1:30:35] not there's multiple bounds in case you
[1:30:37] you thought it was just a sphere or like
[1:30:39] a shape or rectangle. There's there's
[1:30:41] more than one bounds. But long story
[1:30:43] short to say that a lot of items have
[1:30:45] incorrect bounds. And so what that does
[1:30:46] is that when you leave them on a flight
[1:30:48] elevator,
[1:30:50] they might clip into the elevator right
[1:30:52] itself. And so couple that with the bad
[1:30:55] uh obstruction checks uh that could
[1:30:57] cause some really crazy exploits like
[1:31:00] for example leaving I think a med pen on
[1:31:02] the on the freight elevator. it would
[1:31:03] clip through the platform. You couldn't
[1:31:05] even see it. So, you'd be like, "There's
[1:31:06] nothing on it." And then it would still
[1:31:08] block it, right? Um I think that
[1:31:11] actually is not completely fixed. So, we
[1:31:12] we still have to the the squad still has
[1:31:15] to get to all of these items. And so,
[1:31:17] for the bounds issue, what we're doing
[1:31:19] is we're adding a lot more um a lot more
[1:31:22] checks on uh how the things are
[1:31:25] submitted again beforehand. So, we're
[1:31:27] we're revisiting all bounds for items,
[1:31:30] right? and how their setup is made to
[1:31:32] make sure that none of them can be in
[1:31:34] that situation. So, we're kind of doing
[1:31:35] a systemwide check on this uh in order
[1:31:38] to make sure that when we get into these
[1:31:41] situations, it you know, it's going to
[1:31:43] work the way we think it should. Um
[1:31:46] there's also in like this is all you'll
[1:31:49] see it's all
[1:31:51] super interrelated, right? um items that
[1:31:54] would get destroyed but would no longer
[1:31:57] have geometry but would still be
[1:32:00] considered obstructions. And so that was
[1:32:02] a very egregious one I think that we saw
[1:32:04] very early which is there was a way for
[1:32:06] you to destroy an item. It geometry
[1:32:08] would disappear but it would leave uh
[1:32:10] the entity present. And so now
[1:32:14] that's a that elevator is gone. Like you
[1:32:17] know you need you need tools to see the
[1:32:18] the entity, right? I mean, at least with
[1:32:20] the med pen or something, people could
[1:32:22] zoom in and try to scan the pad, try to
[1:32:25] scan the thing and try to find it.
[1:32:27] People in chat people in chat are
[1:32:28] already like, "Oh, great. You've just
[1:32:30] told everybody how to do it." It's like
[1:32:31] this. It's It's We're also telling folks
[1:32:33] how to fix it. We're We're trying here.
[1:32:35] It's a It's a It's a delicate needle,
[1:32:37] the thread here. But
[1:32:39] >> that that at least there was something
[1:32:41] people could do if they if they knew
[1:32:43] about it, which is why we're talking
[1:32:44] about it to try to find it, remove it.
[1:32:46] This next one though, the geo's gone.
[1:32:48] Yeah, that's it. This this one was the
[1:32:50] worst one, right? And so the the thing
[1:32:53] too with the with these the freight
[1:32:55] elevator bugs related here like some of
[1:32:57] them were set up of the actual freight
[1:32:58] elevator geometry, right? Actually that
[1:33:01] was a regression. So it was a bug that
[1:33:04] got fixed and was reintroduced
[1:33:06] uh which is the shape because we have
[1:33:08] multiple types of freight elevators,
[1:33:10] right? We have like the horizontal one.
[1:33:13] We've got ones that are uh vertical uh
[1:33:17] some with doors, some without. Uh and so
[1:33:19] the there was some of those best setup
[1:33:21] the planetary ones were especially
[1:33:22] egregious in that case. Uh and so
[1:33:25] there's still some bounce check to be
[1:33:26] added but you know this is all you know
[1:33:28] when you got all these messages about
[1:33:30] you know obstructions and that was all
[1:33:33] related to this. Uh one of the other
[1:33:37] issues we had with with freight
[1:33:38] elevators uh was actually one of the
[1:33:41] first ones we had to fix uh which is
[1:33:43] that the so the the freight elevator is
[1:33:46] set up into two things. There's the
[1:33:47] kiosk and then there's the platform,
[1:33:49] right? And so the kiosk hosts the
[1:33:54] manager component. He's the one that's
[1:33:56] managing the stuff, right? And the
[1:33:58] platform is kind of slave to the
[1:34:00] manager.
[1:34:02] So there was an issue where depending on
[1:34:05] how an area would stream in or stream
[1:34:07] out, the platform or kiosk would stream
[1:34:11] in first or stream out last, right? And
[1:34:13] this caused these two components to now
[1:34:16] be disconnected. So they would not find
[1:34:18] each other anymore. And so in those
[1:34:20] cases, that entire location was dead.
[1:34:23] Like that was it. That that location
[1:34:25] game over, right? Because they would
[1:34:28] never find each other. there was no
[1:34:29] model in place or process in place to go
[1:34:31] and try to fix that. And so this is you
[1:34:34] know in part of the what we do on the
[1:34:35] hero squads uh we've done the same with
[1:34:37] the transit system which is we introduce
[1:34:40] self-healing uh approach right and so in
[1:34:43] this case um you know the the system
[1:34:49] would actually retry to connect. So if a
[1:34:51] manager doesn't have its connection to
[1:34:53] its uh to its platform then it would get
[1:34:55] retrieded right over time until it
[1:34:57] actually connects. And so this way even
[1:35:00] in a case where we do run into an issue
[1:35:01] where they disconnect, they could still
[1:35:03] reconnect. And so that solved the the
[1:35:05] issue that was actually rolled out in a
[1:35:06] hot fix.
[1:35:08] Um
[1:35:09] >> Sino says, "Are elevators CI
[1:35:11] kryptonite?" Elevators are the
[1:35:12] kryptonite of every game development
[1:35:14] team in the world. Elevators and doors.
[1:35:16] >> Yeah, doors and corners.
[1:35:17] >> Doors and elevators, man.
[1:35:19] >> Doors and corners, man.
[1:35:21] Um,
[1:35:23] let's continue on our list of bugs with
[1:35:25] freight elevators, right? the UI and
[1:35:28] platforms could get out of sync and so
[1:35:32] this is where the platform will have
[1:35:33] content. So there's a clearly a box on
[1:35:36] the on the thing and the UI is showing
[1:35:38] that it's empty, right? And so that
[1:35:41] prevents you from you know uh basically
[1:35:43] makes the whole thing inoperable because
[1:35:45] now you can't ship your your box at all.
[1:35:47] And so, um, in this case, I think that
[1:35:51] the the reconnection, the streaming
[1:35:53] reconnection actually solves this by
[1:35:54] self-healing, but also the UI will query
[1:35:57] multiple times to be able to make sure
[1:35:59] it's always updated. This is a side
[1:36:00] effect of us trying to of the game teams
[1:36:02] trying to cache a bit more data than
[1:36:03] they should and so now it cached an
[1:36:05] empty elevator. So that's a weird state.
[1:36:08] Um
[1:36:10] so a bit of background on how the
[1:36:14] platform actually works, right? So the
[1:36:17] you've got your inventory system, right?
[1:36:19] Your warehouse, that's where your things
[1:36:20] are stored. The inventory system has
[1:36:22] that, right? So you can query for items
[1:36:24] in it. You get the list of what's in it.
[1:36:26] You can unsto items from it, which means
[1:36:28] bring them into the game world and
[1:36:30] physicalize them, or you can stow them
[1:36:32] into it. Uh, the freight elevator and
[1:36:35] the ship cargo platforms are actually
[1:36:37] using a an abstraction on top of that
[1:36:39] called the inventory container. And so
[1:36:42] the inventory container can be open or
[1:36:44] closed, right? And so we had an issue
[1:36:47] where so what that means is that when
[1:36:49] the when the inventory container of the
[1:36:51] platform is closed that means that all
[1:36:54] of the items that are physically on it
[1:36:56] are actually stowed. It's opened it
[1:36:59] means that all of these the items that
[1:37:01] were in this inventory container are in
[1:37:03] the game world and being acted upon. So
[1:37:05] when you unsto things on your platform
[1:37:07] that's what happens. There was a weird
[1:37:09] case where in certain cases if there was
[1:37:11] a delay on the back end, right? So the
[1:37:13] backend systems for all these operations
[1:37:15] have have cues of operations that run
[1:37:17] and so they can handle the delay, right?
[1:37:21] But in this specific case, there was a a
[1:37:23] weird state where the what's actually
[1:37:27] unto the state of the container would be
[1:37:29] desynchronized. And so
[1:37:30] >> we've added another repair flow for this
[1:37:32] that would actually detect the state of
[1:37:34] it and actually recynchronize it in the
[1:37:36] cases where that would happen. Uh this
[1:37:38] was because we didn't properly handle
[1:37:40] failures and so in the case where an
[1:37:42] unsto would fail the state would now be
[1:37:45] you know in a weird uh situation and so
[1:37:49] uh now we do the proper error handling
[1:37:51] which is uh another thing that we've
[1:37:52] changed in our processes for development
[1:37:54] is that error handling is is now part of
[1:37:56] code review. So we really need to make
[1:37:58] sure every single I mean that sounds
[1:38:00] like basic right but I mean I'm just
[1:38:03] saying the way it is right some cases
[1:38:05] were not handled and so you need to
[1:38:06] handle those failures
[1:38:09] >> um
[1:38:09] >> you wanted an open development
[1:38:11] >> yeah that's it all warts and and issues
[1:38:13] right um
[1:38:16] and uh same thing for door states right
[1:38:18] so whether the door is uh open or closed
[1:38:21] right after stream in and out or server
[1:38:23] crash right would sometimes clash and so
[1:38:26] the kiosk can think the door is closed
[1:38:28] but it actually is open and so we do the
[1:38:30] same now we can actually properly uh set
[1:38:33] the flow back properly so one of the
[1:38:34] lessons we've learned with uh freight
[1:38:36] elevators in general and all the issues
[1:38:38] I just went through and the reason why
[1:38:40] uh we ran into them is uh
[1:38:43] need way more multiplayer testing. I
[1:38:45] think that the the major key behind it
[1:38:48] is that you know we the the teams have
[1:38:50] spent time on the inhanger elevator
[1:38:53] right so we've we ran into some issues
[1:38:56] with with inh hanger elevator for sure
[1:38:58] and there's still issues there but the
[1:39:01] big difference with the resource drive
[1:39:02] event was that we were driving players
[1:39:04] to the freight elevators and there's
[1:39:06] more than one player interacting with it
[1:39:08] right and so that's one area where we
[1:39:11] have improved our our our testing and
[1:39:13] our testing approaches so that they're
[1:39:14] properly early tested multiplayer and
[1:39:16] not just as a you know when we reach PTU
[1:39:19] or that in focus test now it's like part
[1:39:22] of the general testing for these open
[1:39:25] areas
[1:39:26] >> you you've mentioned something called
[1:39:28] self-healing
[1:39:30] >> oh wow what's self-healing
[1:39:32] >> well so self-healing is basically when
[1:39:35] we add functions to a system to detect
[1:39:38] that it's in a bad state and attempt to
[1:39:40] fix it right and so um this is not this
[1:39:44] is you could call it a cludge in some
[1:39:47] areas, right? Sometimes it's not the
[1:39:48] right thing. But I think that in this
[1:39:50] case for a lot of the systems that we
[1:39:51] have uh where we are working on a
[1:39:54] replacement for example and we're trying
[1:39:55] to keep this one running uh self-healing
[1:39:58] will come in and basically rectify the
[1:40:00] situations, right? We have there the you
[1:40:03] know the the way our game is made with
[1:40:04] this our streaming system makes some
[1:40:07] trivial things in a normal game very
[1:40:09] complex and sometimes we run into these
[1:40:12] issues where the game teams can't really
[1:40:14] identify what's specifically causing an
[1:40:16] issue. they just know it happens, right?
[1:40:18] And so,
[1:40:20] uh, in the past, we used to wait for the
[1:40:24] key engineers that can actually decipher
[1:40:26] these conditions to come in, but these
[1:40:28] guys are obviously everybody's swamped
[1:40:30] with with work. And so, sometimes the
[1:40:32] delay was so long that you guys as
[1:40:33] players would have to deal with the
[1:40:35] condition for long periods of time. And
[1:40:37] so self-healing is basically an approach
[1:40:39] where we're we're telling the game
[1:40:41] developers, well, while you're
[1:40:43] investigating the proper root cause for
[1:40:45] this, provide a self-healing
[1:40:46] alternative, right? Which keeps the
[1:40:48] system running properly, you know,
[1:40:51] self-repair. Basically,
[1:40:52] >> there's an interesting I don't know,
[1:40:54] maybe not maybe in maybe interesting is
[1:40:56] not the right word. There is a forever
[1:40:58] thing that happens uh in chat. It's
[1:41:03] happened during the during the course of
[1:41:04] this show. happened in every YouTube
[1:41:06] comment, everything. So, this idea that
[1:41:08] every developer can work on every single
[1:41:11] thing that that that if if this person
[1:41:15] is over here making a loading ramp for
[1:41:18] the Zeus, they could be they they could
[1:41:21] be better spending that time over here
[1:41:23] fixing network code and stuff. It's
[1:41:25] like, why are you working on that when
[1:41:26] you should be working on this? And the
[1:41:27] answer is almost always because that's
[1:41:29] what that person does,
[1:41:31] >> right? they they that they can't do
[1:41:33] anything else. That's not what they're,
[1:41:35] you know, it's it's like it's like
[1:41:37] looking at a looking at a cook and
[1:41:38] asking them if they can fish. It's like
[1:41:40] it's sort of kind of related. It's
[1:41:42] gamedev, but it's not the same thing. Uh
[1:41:44] but even within the disciplines, that's
[1:41:46] a common thing. Even within the
[1:41:48] disciplines, even within engineers,
[1:41:50] there are still focuses and affinities
[1:41:53] and stuff. And there's still even within
[1:41:55] a field of engineers there there are
[1:41:56] still many things where and it's no
[1:41:59] slight against the person or whatnot.
[1:42:02] It's just this person has that specialty
[1:42:05] and that person has that specialty and
[1:42:06] that person has that specialy and you
[1:42:08] often come up to a thing where it's like
[1:42:10] well we can't make any progress on this
[1:42:12] until we get it in front of this person
[1:42:15] and that person has already got this
[1:42:17] other thing in front of them and that
[1:42:18] other thing in front of them and stuff.
[1:42:20] So it's just it's another it's another
[1:42:22] way. It's not it's
[1:42:25] it's just it's it's it's another way I
[1:42:27] want to it's I don't know what I want to
[1:42:29] say what what I'm trying to say here.
[1:42:30] It's not it's I'm trying to illustrate
[1:42:33] that it's like anything like priorities
[1:42:35] and like anything else there are usually
[1:42:37] if you're asking the question why aren't
[1:42:39] they fixing this or why aren't they
[1:42:41] working that on that? The answer is
[1:42:43] almost never.
[1:42:46] It's because we don't want to. It's
[1:42:48] because it's in line.
[1:42:49] >> It's in line. It's just that simple.
[1:42:51] It's in line.
[1:42:53] >> Yeah, we do have a lot of hyper
[1:42:54] specialization too, right? And so that's
[1:42:56] the you're right like like even game
[1:42:59] programmers are not necessarily
[1:43:01] interchangeable for everything, right?
[1:43:03] That said, our approach by the way for
[1:43:05] our game teams is very multiddisipline,
[1:43:08] very fluid, right? Which does enable a
[1:43:11] lot of this, right? Like a we we have
[1:43:12] engineers who are able to go from one
[1:43:14] system to another in in the game code,
[1:43:16] right? But when it and when you have to
[1:43:18] do cross discipline things that's where
[1:43:20] now we need you need a concerted effort
[1:43:22] and that's when it's get it gets queued
[1:43:24] up. What's the before we move off of
[1:43:26] freight elevators? What's the thing
[1:43:28] that's happening on in like you go to
[1:43:30] Wiccolo, you'll put all of your your
[1:43:33] recipe stuff on the thing. It goes okay.
[1:43:36] It takes it. It goes down. It completes
[1:43:38] the mission and then doesn't give you
[1:43:40] your thing back up. and now you're just
[1:43:42] out those items because the mission
[1:43:44] completed but it hasn't given you your
[1:43:46] reward and people have just wasted their
[1:43:49] time on a wickeloop. What is that?
[1:43:52] >> So I think that most of the of those
[1:43:54] issues are are a lot of those are still
[1:43:57] being investigated actually right now
[1:43:59] right uh in order to really figure out
[1:44:01] what's happening. It is you know these
[1:44:04] systems are are intertwined right the
[1:44:06] reward system for example is part of the
[1:44:09] mission flow right whereas the freight
[1:44:12] elevator is just the vessel right to
[1:44:15] deliver this and so there's many reasons
[1:44:18] and timing what this could happen right
[1:44:20] and so I don't have a proper answer for
[1:44:23] this I didn't dive on this one
[1:44:24] specifically uh but I can tell you that
[1:44:27] I know the team is actively working on
[1:44:29] this one because it's it's a key I mean
[1:44:31] it's especially Especially for Wiklo
[1:44:33] rewards like internally we're inter
[1:44:35] Wiklo rewards is like the hey guys you
[1:44:37] know like come on let's get a priority
[1:44:40] on this one you know
[1:44:41] >> chat starting a campaign to send Wiccolo
[1:44:43] to Claire
[1:44:47] >> um that'd be a nice Christmas gift
[1:44:49] >> so at the beginning of freight elers
[1:44:51] we're going from freight elers we'll
[1:44:52] move on to our next thing because there
[1:44:54] is a a kind of an obvious sounding
[1:44:57] solution to this when we're talking
[1:44:58] about putting med pens and smold bottles
[1:45:01] on things and and entities that where
[1:45:03] the physicality has disappeared but the
[1:45:05] the entity is still there and it seems
[1:45:07] like an obstruction
[1:45:09] cleanup.
[1:45:10] >> Entity cleanup seems like it'd be the
[1:45:12] obvious thing. Just crank that dial up
[1:45:15] to 500 and clear that [ __ ] off of there
[1:45:18] every every two minutes and it seems
[1:45:20] like it fix. Talk to me about entity
[1:45:22] cleanup. We're we're seeing ships left
[1:45:24] everywhere. We're seeing trash left
[1:45:26] everywhere. The the the Raptor's not
[1:45:28] here yet. What can you talk to us about?
[1:45:30] Sure. Entity clean.
[1:45:31] >> Well, so one thing we I think we touched
[1:45:34] on this a bit in January, right? That
[1:45:36] the one of the things that we put into
[1:45:38] 4.0 was the beginning of um of some
[1:45:41] physics uh cleanup, right? Uh now since
[1:45:45] then, right since the beginning of the
[1:45:46] year, we've we've unified a lot of the
[1:45:49] cleanup systems, right? So uh uh namely
[1:45:53] we had an abandoned vehicle tracking
[1:45:54] system. We have the physics uh
[1:45:57] intersection cleanup system. We have the
[1:45:59] actual density manager. And so now all
[1:46:02] of this is brought has been kind of
[1:46:03] unified into one one platform. And so
[1:46:06] what we're able to do with this now is
[1:46:08] uh we have density classes. So depending
[1:46:10] on the type of item, we can define the
[1:46:12] density class which basically allows us
[1:46:15] to say no more than x in an in a volume
[1:46:18] of y for this kind of item. Right? And
[1:46:22] obviously there's way more parameters.
[1:46:23] I'm just trying to keep it simple. So we
[1:46:25] can understand what it does. Uh we've
[1:46:27] recently added the ability for uh
[1:46:29] designers to basically change those
[1:46:31] density class basically vary these
[1:46:33] density classes by region. And so now
[1:46:34] they can say in this location make this
[1:46:37] super aggressive, make this less
[1:46:39] aggressive, right? And so the density
[1:46:42] manager part of this is really about
[1:46:44] just items in the game world that are
[1:46:45] dynamic that we want to make sure we
[1:46:47] keep at a manageable level, right? And
[1:46:50] so if you start putting water bottles
[1:46:54] in one place, at some point it'll start
[1:46:57] cleaning up because they're in the same
[1:46:58] volume and the density class of the
[1:47:00] water bottle will inform how many we
[1:47:02] want to keep and how uh we want to do
[1:47:04] that. There's also lifetime uh cleanup.
[1:47:06] So things we just want to we want those
[1:47:08] to live but we want them to disappear
[1:47:10] after a certain amount of time. So we've
[1:47:12] added that functionality in. So that's a
[1:47:14] lot better. And then vehicles come into
[1:47:16] play. So, abandoned vehicles. Uh,
[1:47:19] we've been tuning this since the
[1:47:21] beginning of the year behind the scenes.
[1:47:23] This in the in the in the physics
[1:47:26] cleanup. So, the abandoned vehicles is
[1:47:28] basically when you leave a vehicle
[1:47:30] completely abandoned. So, no passengers,
[1:47:32] nobody's left on it. It's left on a
[1:47:34] planet. You leave it there already. It's
[1:47:36] put on a timer, right? And so, at some
[1:47:38] point, we'll have to clean this up,
[1:47:40] right? the uh if it gets interacted
[1:47:44] with, if passengers come into play on
[1:47:46] it, whatever that revives it, resets the
[1:47:48] timer, right? Uh I think if I remember
[1:47:51] right, that's set to something like two
[1:47:52] hours right now. Something like this for
[1:47:54] abandoned vehicles, regardless of class
[1:47:56] for now. So that is something we want to
[1:47:59] add, which is basically uh change the
[1:48:01] the density class for larger ships so
[1:48:03] that maybe they go faster. You know,
[1:48:05] this is the kind of thing we need to
[1:48:06] keep tuning. Um uh and then so the
[1:48:09] abandoned vehicles will actually clean
[1:48:11] up those areas right now with the the
[1:48:13] new system we have now coming in, we'll
[1:48:15] be able to override these values per
[1:48:17] region. And so for planet side locations
[1:48:19] where we know there's going to be
[1:48:20] traffic, we can make that a lot more
[1:48:22] aggressive. Uh and the last part of the
[1:48:25] cleanup system is the uh
[1:48:28] the pink slip. Uh I call it the pink
[1:48:31] slip, which is hey, my ship turned pink
[1:48:33] and bam, it's gone. Right? which is
[1:48:34] basically when uh uh areas of
[1:48:39] uh
[1:48:41] of the game where your ship is entering
[1:48:43] into a deep intersection with something
[1:48:46] else, right? And this is true of all
[1:48:48] areas, right? So if something enters
[1:48:50] deep intersection for a number of frames
[1:48:54] based on the size of the entities, size
[1:48:56] of the area, we will clean it up, right?
[1:48:58] We're going to first turn it pink, full
[1:49:00] pink, for a certain amount of time and
[1:49:03] then oof, it it disappears. The reason
[1:49:05] for that is because the servers are
[1:49:06] still very much physics bound. And there
[1:49:09] is no currently, I'm say currently, I'm
[1:49:11] not saying it's impossible, but
[1:49:12] currently there is no elegant way to
[1:49:15] kind of break those collisions
[1:49:16] automatically
[1:49:18] uh and cleanly. It typically creates
[1:49:20] these uh mastrom of of physics problems
[1:49:24] when you try to fix it. and now you've
[1:49:26] backed it out into another physics
[1:49:28] element that is now colliding. And so,
[1:49:30] you know, uh you end up into these
[1:49:33] massive unstable systems. And so, uh the
[1:49:35] the pink slip is there for the moment,
[1:49:37] right? We're trying to improve this. Uh
[1:49:39] we've been tuning these values quite a
[1:49:40] bit since the beginning of the year.
[1:49:42] Every patch we adjust the density
[1:49:44] classes, the abandoned vehicle timers,
[1:49:46] and the the physics intersection costs a
[1:49:49] lot. I feel like uh we're seeing a lot
[1:49:51] less reports now. It's kind of uh you
[1:49:53] know, getting a lot better. I think
[1:49:55] we're getting into the sweet spot, but
[1:49:56] it's unfortunately not a magic, you
[1:49:59] know, just turn on density uh tracking,
[1:50:01] right? We already have density tracking.
[1:50:03] It's really about tuning the numbers so
[1:50:06] that it feels good, right? And that's
[1:50:07] the hardest part of this.
[1:50:10] >> Folks in chat
[1:50:12] are talking about, you know, just just
[1:50:13] make it salvage gameplay. I want to I
[1:50:16] want to preface that Ben W is not a game
[1:50:17] designer and what so you know those are
[1:50:20] game design decisions but but yeah I
[1:50:21] mean an obvious kind of thing would be
[1:50:23] you know have an abandoned ship generate
[1:50:24] a salvage beacon you know you know you
[1:50:27] know ship to come and and grab and and
[1:50:29] and clean up and stuff but I think a big
[1:50:31] part of that is salvage needs a bit more
[1:50:34] attention too we need we need to make
[1:50:36] those materials worth more because it's
[1:50:37] not just enough to generate the missions
[1:50:40] we need to make the we need to make the
[1:50:42] the materials that you get from those
[1:50:43] missions more valuable and mean more and
[1:50:46] you know there are there's there are
[1:50:47] things coming around the corner that's
[1:50:50] not true there are things coming down
[1:50:51] the line let's just be
[1:50:55] down the line around the corner that's
[1:50:56] not accurate that's not remotely true
[1:50:58] things come down the line like you know
[1:50:59] crafting and whatnot they're going to
[1:51:00] need lots of materials from lots of
[1:51:02] different places and stuff like that so
[1:51:04] you know mining salvage you know lots of
[1:51:06] opportunities there to to link it with
[1:51:08] other gameplay systems and make it more
[1:51:10] make it more make people want to go out
[1:51:14] salvage things.
[1:51:15] >> I mean, the amount of abandoned ship,
[1:51:17] for example, like let's say we did that,
[1:51:18] right? Tomorrow morning, we're like,
[1:51:19] "Okay, abandoned ship detected, salvage
[1:51:22] beacon goes up, there would be an
[1:51:24] overwhelmingly amount of of of salvage
[1:51:27] beacons because the amount of abandoned
[1:51:29] vehicles is extremely high, right? And
[1:51:32] so balancing those contracts after that
[1:51:34] becomes kind of impossible in this
[1:51:36] current setup. That's not to say we're
[1:51:38] not going to do that, right? But yeah,
[1:51:40] >> we need to put attention on salvage to
[1:51:42] be able to do that properly.
[1:51:43] >> Yeah. No, Jared's voice Jar's mic isn't
[1:51:46] going out. I'm was just forgetting where
[1:51:48] I needed to put my mouth in order to use
[1:51:49] it.
[1:51:52] I'm a professional
[1:51:54] something. All right. So, entity cleanup
[1:51:58] and freight elevators. Uh, another big
[1:52:02] bugaboo. Uh, this this one's a
[1:52:04] relatively Okay, recent is not it's been
[1:52:07] exasperated recently. we'll say that
[1:52:10] >> um uh uh too many
[1:52:13] >> too many people too many no too many
[1:52:15] NPCs spawn management whatever the heck
[1:52:18] you want to call it uh personal pet
[1:52:20] people go people go to people go to an
[1:52:22] ASD or whatnot and it's like that you
[1:52:25] know they're they're trying to they're
[1:52:27] trying to whittle the numbers down and
[1:52:28] they get down to like 10 12 or 12 10 six
[1:52:31] and then it bump back up and stuff
[1:52:33] because things are responding too
[1:52:35] quickly. Uh what's going on? What can
[1:52:37] you tell us? This is this is one of the
[1:52:39] ones that completely infuriates me
[1:52:41] because it's it touches on many things.
[1:52:43] So, spawning in the game is all over,
[1:52:45] right? There's multiple different types
[1:52:47] of spawners. Uh some of them are like um
[1:52:51] item port spawners, for example. You
[1:52:53] know, I hate using the bartender as an
[1:52:55] example, but uh apologies, but the, you
[1:52:59] know, bartender picks up a glass from an
[1:53:01] item port that's on the counter, and
[1:53:03] then we at some point going to respawn a
[1:53:05] glass on the on this so we can do the
[1:53:06] animation again or things like that,
[1:53:07] right? Same thing for like AA turrets.
[1:53:10] Um, in 4.0, we've had many, many, many,
[1:53:13] many issues related to over spawning
[1:53:15] from those spawners, and we fixed a lot
[1:53:16] of them. mainly conditions where
[1:53:18] designers will set those up as infinite
[1:53:20] spawn and no limits which is great right
[1:53:23] so that's one thing uh now since the
[1:53:27] we've been putting out content this year
[1:53:29] like the different locations all have
[1:53:31] like a population of AI NPCs right in
[1:53:33] the place uh and so it's been kind of
[1:53:39] we've had overspawn I think with every
[1:53:41] content patch this year you know where
[1:53:43] every every patch there's a at least one
[1:53:45] report that comes up it's like infinite
[1:53:47] PC is at location. Is it meant to be
[1:53:49] this hard? Right? And I was like, all
[1:53:51] right, what's the cause? Now, this is
[1:53:52] one of the an example of like the
[1:53:54] symptom is the same. The cause has been
[1:53:57] different every time. Um, this is
[1:53:59] something I really want to get time to
[1:54:02] solve properly. Uh, but the replacement
[1:54:05] system uh is in the works, but it's not
[1:54:08] close to being there. But, so the way
[1:54:10] this works, like the I'll give you the
[1:54:12] most recent one, for example. I think it
[1:54:13] was in in 4.3
[1:54:16] uh zero. The mission module is the
[1:54:21] system that actually activates the NPC
[1:54:23] population for a mission in a given
[1:54:25] area. Right? So when you enter the
[1:54:27] action area of a specific part of the
[1:54:29] mission and the mission code is going to
[1:54:31] go and initialize subm modules and then
[1:54:33] one of those subm modules will say hey
[1:54:34] put put some AI in there and then it's
[1:54:37] going to activate the spawn closets in
[1:54:38] the area and that's going to start
[1:54:39] running. The issue is
[1:54:43] there was a a bug with the way the
[1:54:45] mission flow was working for these
[1:54:46] things that would cause these modules to
[1:54:48] doubly initialize in certain cases and
[1:54:51] when that started then it would actually
[1:54:52] do it again and again and again and so
[1:54:55] that's the latest source of these over
[1:54:57] responds. Um
[1:54:59] the the the proper fix for this is is is
[1:55:02] the population manager. This is
[1:55:04] something that our R&D team have been
[1:55:06] working on which is a replacement to all
[1:55:08] uh to both spawn the spawn closets are
[1:55:10] still going to be around but the systems
[1:55:12] that drives the spawn closets to make
[1:55:14] these AIs appear and spawn on top of
[1:55:17] like the um uh what's the word that they
[1:55:21] use for this? the base population in an
[1:55:24] area like let's say walk around New
[1:55:26] Babage all the social NPCs currently all
[1:55:28] these social NPCs are placed there right
[1:55:30] and some of them like again the
[1:55:32] bartenders are driven by mission modules
[1:55:35] or area modules and those always get
[1:55:38] this overspawn so we just need this
[1:55:39] replacement system at this point like
[1:55:41] we're we're we keep repeating this error
[1:55:44] from different angles right and so the
[1:55:46] population management system is his
[1:55:48] approach is different he's going to know
[1:55:49] what's in the game world it's like I
[1:55:51] need five eyes. Do I have five guys?
[1:55:54] We're good, right? Like instead of going
[1:55:56] when I start I spawn five guys which is
[1:56:00] a complete you know
[1:56:02] problem. And so yeah over spawning will
[1:56:06] be solved by this for the for the mean
[1:56:07] in the meantime. uh you know we're
[1:56:09] putting in more verifications for the
[1:56:11] cases where when you stream out and you
[1:56:13] stream in and the module resets or you
[1:56:15] bend on a mission or you start the
[1:56:16] mission during uh while you're already
[1:56:18] at the action area that the actual uh
[1:56:20] logic doesn't run twice and that there's
[1:56:23] actual limits in those areas.
[1:56:26] >> Sorry, I've just been thinking about a
[1:56:29] cheeseburger and fries from Five Guys.
[1:56:30] You said it.
[1:56:32] >> I just need those Five Guys.
[1:56:36] Um,
[1:56:38] all right. So, so obviously, you know,
[1:56:41] that that that that that's a bit of a
[1:56:43] whack-a-ole thing until until we get the
[1:56:45] new system online.
[1:56:46] >> Yeah. One thing that I'm hopeful about
[1:56:48] though for this is that we've the the
[1:56:50] teams have actually built some good uh
[1:56:52] additional debugging tools that allows
[1:56:54] us to kind of view the state of this. It
[1:56:56] it sounds a bit weird, but we it was
[1:56:59] difficult to even know how many NPCs are
[1:57:01] there at this location, but that that
[1:57:02] was actually a difficult information to
[1:57:04] find. So now we've got super good tools
[1:57:06] to be able to tell that. So that means
[1:57:09] if if I'm able to just open a tool and
[1:57:11] view that information, it means that
[1:57:12] game designers can do the same. And so
[1:57:14] that means they can debug those problems
[1:57:16] in advance without us having to do it
[1:57:18] post launch, which is the big thing.
[1:57:21] >> No, Chad, I don't have Five Guys money.
[1:57:24] Um, all right. Uh, freight elevators,
[1:57:27] uh, energy cleanup, spawn management. Um
[1:57:32] when server meshing came online with 4.0
[1:57:37] uh it brought with it all this new stuff
[1:57:39] and all these great things that we could
[1:57:41] do now. We got to be able to to to
[1:57:44] increase the server cap uh to 600. We
[1:57:46] got to improve that FPS performance on
[1:57:48] the server from 45 to 20 and stuff like
[1:57:50] this. It also had some knock-ons to some
[1:57:53] old systems specifically in beacons. So
[1:57:58] uh uh uh we resolved most of the
[1:58:01] interdiction stuff in July
[1:58:05] I feel like but talk to me real quick
[1:58:07] about why that happened and what the
[1:58:09] solution was
[1:58:11] >> little story behind this. So the the if
[1:58:14] we go back to the 3.x X days, right?
[1:58:16] Like the game server has everything,
[1:58:18] right? He's he's simulating everything.
[1:58:20] All the entities are on one server. And
[1:58:22] so there's a I don't want to say
[1:58:24] shortcuts because this was just the way
[1:58:26] you would build things at the time. Uh
[1:58:29] where for example doing interdiction was
[1:58:32] was really like the server has all the
[1:58:34] entities. So he's able to do like cross
[1:58:36] zones check, he's able to raycast across
[1:58:38] zones, he's able to do all that stuff,
[1:58:40] right? Uh now with server meshing you
[1:58:44] could be on a quantum path that brings
[1:58:47] you across game servers right and if
[1:58:49] you've ever looked at the some of our
[1:58:52] brackers have done out outstanding tools
[1:58:54] to calculate uh interdiction positions
[1:58:56] and stuff like that. If you look at this
[1:58:58] you'll see that the edges and the ends
[1:58:59] of this is where actually matters that
[1:59:01] you get positioned. And so the
[1:59:04] that means that since we currently use
[1:59:06] the territory map around planets and
[1:59:09] moons, right, then typically that will
[1:59:11] interrupt the quantum jump of the
[1:59:13] interdiction that is the most effective
[1:59:15] or close to the most effective. And so
[1:59:18] um what that needed is a solution that
[1:59:20] allows us to have an a view of the
[1:59:23] interdiction system that's basically
[1:59:25] cross server, right, for the game shark.
[1:59:27] And so the the replication layer has
[1:59:30] that information, right? We do have it
[1:59:32] in the hybrid, but we are very reluctant
[1:59:36] at allowing uh what I'll call game code
[1:59:39] here with no uh I'm trying to be
[1:59:42] porative here. We don't want to let game
[1:59:44] code query the replication layer uh for
[1:59:46] multiple reasons, but we want to keep
[1:59:48] them isolated. And so for this, we
[1:59:50] needed to build a solution. So the team
[1:59:52] have actually built a the online team
[1:59:54] built a new a new service uh that serves
[1:59:56] every shard but is is able to uh provide
[1:59:59] our game devs with uh basically a way to
[2:00:02] build a small representation a small
[2:00:05] data representation of the game world
[2:00:06] for things that matter. So, if you can
[2:00:09] picture this, you're in your ship, you
[2:00:11] start your quantum drive. What actually
[2:00:13] happens is now the game server is going
[2:00:15] to register in this new service called
[2:00:17] the entity cluster service
[2:00:20] some piece of data that says we have a
[2:00:22] quantum drive at this location, right?
[2:00:23] And he's going to keep that updated,
[2:00:25] right?
[2:00:26] And on the other hand, I've got someone
[2:00:28] who starts a QED device, quantum
[2:00:30] interdiction device, QID device, QED,
[2:00:32] whatever the Q the introduction device
[2:00:34] inction device uh that will also connect
[2:00:37] to this and then inform this kind of uh
[2:00:40] uh matrix view of the quantum
[2:00:43] interdiction network that's doesn't
[2:00:45] matter where which server you're on.
[2:00:47] This is all kept the data in semi-real
[2:00:49] time as you're quantuming and moving and
[2:00:51] as the interdiction uh devices are
[2:00:54] activated or deactivated. And so what
[2:00:56] that allows the game server to do now is
[2:00:58] to he's receiving these updates. He's
[2:01:00] got this this let's call it symbolic
[2:01:03] view of the of the game world to do it
[2:01:05] instant. So now he's able to do proper
[2:01:07] raycasting uh math to see if the
[2:01:10] interdiction is going to hit uh a cross
[2:01:12] server. Doesn't matter if you're you
[2:01:14] know on the same server or not. You can
[2:01:16] actually trigger the interdiction
[2:01:17] across. And then that basically gives us
[2:01:20] this this this ability to have
[2:01:22] cross-server coordination for things.
[2:01:25] uh without having to push all this to
[2:01:27] the replication layer or query it from
[2:01:28] it. So this is mostly a gameplay system,
[2:01:30] but we're we can use it we are using it
[2:01:33] for uh beacons. So we're going to be
[2:01:36] using it even more for the full beacon
[2:01:38] implementation, but uh it's going to be
[2:01:40] the same kind of thing where now you
[2:01:41] could be
[2:01:43] in New Babage and someone has a beacon
[2:01:46] open in Pyro and if the game play wants
[2:01:49] to allow it, you might be able to get
[2:01:51] that beacon or see that beacon or bind
[2:01:53] to it, right?
[2:01:56] uh and beacons. I mean, this is right
[2:01:59] now. I mean, right now, we've got the
[2:02:03] Apollo, which is going to PTU like right
[2:02:06] now, if it isn't already. It It's It's
[2:02:08] >> What is it? I haven't checked out.
[2:02:10] >> Yeah, exactly. We've been doing this for
[2:02:11] a while. I'm not I'm not looking at the
[2:02:12] chats, but whenever tonight's PTU goes,
[2:02:14] uh the Apollo will be in for for for PTU
[2:02:17] folks who already own it. And that's why
[2:02:19] you saw the injections of the modules
[2:02:21] that were that were given to everybody.
[2:02:23] uh at no charge uh who owned the Apollo.
[2:02:26] So, you'll be able to test that this
[2:02:27] weekend um before we attempt to go to
[2:02:31] live uh later. Um where was I going with
[2:02:34] this? But oh, but medical beacons but
[2:02:37] but beacons and specifically medical
[2:02:38] beacons here have had have had lots of
[2:02:41] compounded trouble since server meshing
[2:02:43] came on. First it was first it was the
[2:02:45] notification. And they used to get this
[2:02:47] there used to be this big toast
[2:02:49] notification in the center. And I'm
[2:02:51] going to remember this wrong and
[2:02:52] somebody in chat's going to be like,
[2:02:53] "That's not how it happened, Disco." I'm
[2:02:54] like, I'm trying. There's a big toast
[2:02:56] notification that used to happen in the
[2:02:58] middle. And then when we bumped the
[2:02:59] server not which was great for people
[2:03:01] who wanted to play first responders
[2:03:03] because they could go and they could do
[2:03:04] stuff and then they had this nice big
[2:03:05] notification that somebody needed a
[2:03:06] medical beacon and they could stop what
[2:03:08] they were doing and then go and run off
[2:03:10] to the rescue. And that was great. when
[2:03:12] we bumped the player caps up to 600,
[2:03:15] that became absolutely interminable
[2:03:19] and we and we just had to shut that
[2:03:20] down. It was like, okay, we can't have
[2:03:22] that. And so they lost that
[2:03:24] functionality to save everybody else and
[2:03:26] that sucked. But then there was the
[2:03:29] issue with one with the second with the
[2:03:31] second solar system. Uh the beacon if if
[2:03:33] the beacon originated in Pyro and you
[2:03:36] were in Stanton or vice versa, you
[2:03:38] didn't get the waypoint. you didn't get
[2:03:40] the marker because the marker existed in
[2:03:41] another star system that wasn't loaded
[2:03:43] in to where you were. So, it just looked
[2:03:45] like, hey, I'm trying to pick up this
[2:03:47] the the this this rescue beacon and it
[2:03:50] looked like nothing was happening
[2:03:51] because it couldn't give you the marker.
[2:03:53] There was no intermediate marker. And
[2:03:55] then we had some there's some problem
[2:03:57] that started last month that meant we
[2:03:59] had to disable the entire thing uh while
[2:04:02] they work to fix that. this system's had
[2:04:04] a lot of problems and while not all of
[2:04:06] them are going to be fixed
[2:04:08] >> in time for for this stuff talk to me
[2:04:10] about the scope of the issue and and
[2:04:13] what what we need to do to to make it
[2:04:15] better.
[2:04:16] >> Well, so out of all of this all the su
[2:04:19] the stuff you mentioned now the I know
[2:04:22] that our intent is to reactivate medical
[2:04:24] beacons. Absolutely. Right. I think
[2:04:26] that's a core part of the of the game
[2:04:28] we're trying to do and so we we really
[2:04:29] want those reactivated. the ser the
[2:04:31] entity cluster service I just told you
[2:04:33] about is what can enable us to do
[2:04:35] crossstar system beacons I don't think
[2:04:37] we're there yet but we definitely want
[2:04:40] to get there right where we could
[2:04:41] actually pick those up the
[2:04:44] so right now all of the kind of
[2:04:46] technology pieces that you need to fix
[2:04:48] all the issues you mentioned about
[2:04:50] beacons are there right we have the
[2:04:52] ability to have controlled notifications
[2:04:54] localized detection of beacons cross
[2:04:58] server crossstar system notifications
[2:05:00] whatever
[2:05:01] It's really about, you know, can we put
[2:05:03] a a team on it to basically add all
[2:05:06] these things? But at least all of the
[2:05:08] hurdles are kind of solved with this
[2:05:09] this introduction work we did and this
[2:05:12] new service uh the cluster service is
[2:05:14] the thing that we need to be able to do
[2:05:16] that to reactivate all that. So that's
[2:05:18] already live. So
[2:05:20] >> and uh the bug that prevents people from
[2:05:23] being able to quantum to the beacon,
[2:05:26] >> well that definitely needs to be fixed.
[2:05:28] Uh we I think that even for this uh
[2:05:31] release, we're aiming for that to be
[2:05:32] solved because the beacons have to work.
[2:05:34] Even if even if you don't get crossstar
[2:05:37] system beacons just yet uh and it's not
[2:05:40] fully integrated with the cluster
[2:05:41] service, I think localized beacon should
[2:05:43] still be functional, you know, like you
[2:05:44] should be able to quantum to them and
[2:05:46] you should receive them properly. And uh
[2:05:48] yeah.
[2:05:49] >> Yeah. I got a I got a
[2:05:53] I got a soft spot for first responder
[2:05:56] gameplay. Like like everything else
[2:05:58] everything else you do in the verse is
[2:06:00] is in some way, shape, or form self-
[2:06:02] serving. And there's nothing wrong with
[2:06:03] that. There's nothing wrong with going
[2:06:05] out and making your fortune uh be being
[2:06:07] a pirate or being a a minor or a
[2:06:09] salvager
[2:06:11] or or a racer. Although if you could
[2:06:13] make your fortune out being a racer, you
[2:06:15] know, you I don't know how much the day
[2:06:17] rally pays out. Um, but but it it's it's
[2:06:21] like like first responders, the people
[2:06:22] who choose to play as medics and stuff,
[2:06:24] they're they're choosing a loop that's
[2:06:26] just there to help other people. And I
[2:06:29] think that's cool. And I don't think
[2:06:31] we've done a super great job in the past
[2:06:33] of of really supporting that as much as
[2:06:35] we should. So, um, that's not a I don't
[2:06:38] have the power to do anything about
[2:06:40] that. It's it's just I I just wanted to
[2:06:42] say that, you know, I recognize that and
[2:06:45] we can do better.
[2:06:47] >> Yeah. Um,
[2:06:53] >> let's go to a big one. Let's go to a big
[2:06:55] one where, you know, I'm trying to do
[2:06:56] like, you know, start with big ones. You
[2:06:58] know, freight elevators and energy
[2:06:59] cleanups and little guys like in
[2:07:01] addition. Um,
[2:07:07] transit system.
[2:07:09] >> I I don't hear you. There's something on
[2:07:12] the line.
[2:07:14] >> Shitty transit system.
[2:07:17] I'm in this I'm in the third hour. I'm
[2:07:19] in the third hour. I get I still That's
[2:07:20] my one for the hour. Oh, what are we
[2:07:22] doing? What are we doing? What are we
[2:07:24] doing?
[2:07:24] >> Transit. So, well, we do have a hero
[2:07:26] squad on this, right? And so the So, for
[2:07:30] everybody's sake, just to make sure
[2:07:32] we're all on the same page, transit
[2:07:33] system is the system that drives
[2:07:37] elevators, not freight elevators,
[2:07:39] elevators, trains, uh, and some areas
[2:07:42] uh, uh, base transit for these things.
[2:07:44] So the transit system has been uh the
[2:07:47] bane of our existence. I can't frame it
[2:07:51] to something other. And so at the
[2:07:53] beginning of the year, we put some
[2:07:55] significant resources in that hero squad
[2:07:59] and brought in some very very
[2:08:00] experienced developers to the team to
[2:08:02] help push these uh these fixes along. on
[2:08:05] top of what I discussed earlier about
[2:08:07] the methodology that changed for these
[2:08:09] issues um and the introdu introduction
[2:08:13] of self-healing uh techniques right to
[2:08:15] try to get it moving and so um
[2:08:19] we are accepting the current state of
[2:08:23] transit right I feel that right now the
[2:08:28] uh we no longer lose carriages or when
[2:08:30] we do it gets autofixed right the
[2:08:33] destinations mostly work double doors
[2:08:35] rarely happen. Um the uh the system
[2:08:39] mostly responds well. There's still
[2:08:41] issues with uh I I've seen I I'm still
[2:08:44] seeing in my playthroughs like uh you
[2:08:46] know the the train timers of insane
[2:08:49] values you know
[2:08:51] which is yeah
[2:08:52] >> you know a bit of a drag or or um the
[2:08:55] transit still has this u unfortunate
[2:08:58] propension of in the event of a server
[2:09:00] crash and you are uh in movement on the
[2:09:03] train uh your client will keep
[2:09:06] interpolating that
[2:09:07] >> which might end which might get you to
[2:09:09] space Right.
[2:09:10] >> We still get the occasional missing
[2:09:11] elevator and whatnot. There's still a
[2:09:13] few trains that trap people.
[2:09:15] >> Yes, that can still happen, right? But
[2:09:17] right now, the state at which this
[2:09:20] system is this the approach of that
[2:09:22] system is, we're kind of accepting it
[2:09:24] state, right? We're we're still tracking
[2:09:26] the big egregious issues that we have
[2:09:27] like the ones that we just mentioned,
[2:09:29] those are still being tracked and worked
[2:09:31] on. But overall from a leadership
[2:09:33] standpoint, we're kind of in a space
[2:09:35] where
[2:09:36] now we want to talk about transport,
[2:09:41] >> right?
[2:09:41] >> Yes. I've been waiting like you've been
[2:09:42] sitting here like, "Oh, we're going to
[2:09:43] accept it. We're going to accept it."
[2:09:44] I'm like, "Give them the drop, Ben."
[2:09:46] Don't just be like, "Yeah, we're going
[2:09:47] to accept it. We're just we're just
[2:09:48] fine." No, we think it's fine. We think
[2:09:50] it's going to be We don't think it's
[2:09:51] fine. We just we it's just we got
[2:09:53] self-healing in and it can carry us
[2:09:55] until the new thing comes in. And that's
[2:09:56] transport system.
[2:09:57] >> All right. So transport is uh a complete
[2:10:01] rewrite of transit right which has a
[2:10:03] much different approach to how it
[2:10:05] manages peripherals things you click on
[2:10:08] to call up things gateways which are the
[2:10:10] areas at which the carriages stop and
[2:10:12] carriages of course and so the transport
[2:10:14] system is a lot more resilient in its
[2:10:17] approach to streaming problems which has
[2:10:19] been a thing in the past right for the
[2:10:21] transit uh it's also the way it's
[2:10:24] developed is a lot more robust uh and so
[2:10:27] the state of transport. Let's talk about
[2:10:29] that. So the the team have currently
[2:10:31] have the approach we've taken for it is
[2:10:34] the system is is kind of built at this
[2:10:37] point and we have a single transport
[2:10:39] link that we use internally. So not yet
[2:10:42] on a playerf facing build but we have an
[2:10:44] internal build of this where new Babage
[2:10:46] habs are completely driven by the
[2:10:48] transport system. uh which is pretty big
[2:10:51] uh milestone for the team uh because it
[2:10:54] means like the system is basically kind
[2:10:56] of uh fully featured in terms of it's
[2:10:59] able to drive one of the major major
[2:11:01] habs uh drop uh we are currently working
[2:11:05] at instancing those transit transit
[2:11:07] links so just to reiterate what I said a
[2:11:11] little bit back in January uh the
[2:11:14] introduction of instance hangers which
[2:11:16] means dynamic gateways in the transit
[2:11:18] system is really what like made it a big
[2:11:20] issue, right? And so now the team are
[2:11:23] working at adding that functionality
[2:11:24] into transport to make sure that we
[2:11:26] support properly dynamic gateways which
[2:11:28] will allow you to have a transport link
[2:11:31] to and out of an instance. Now this
[2:11:33] could be an instance hanger but in the
[2:11:34] future might be an area location that
[2:11:37] has some stuff in it, right? Uh and so
[2:11:40] that's the state of transport right now
[2:11:41] is we're working on the instance transit
[2:11:43] link and trains. Uh so we've done
[2:11:46] elevators and now we're putting trains
[2:11:49] in with the full feature which the
[2:11:50] trains have an additional peripheral
[2:11:52] which is the the timer uh the added
[2:11:54] timer on top of it.
[2:11:55] >> This is one of those things where we
[2:11:57] talked about it's this is now it's a it
[2:12:02] in the finished product it shouldn't
[2:12:03] look any different
[2:12:05] >> than what they've got. It should just
[2:12:06] work. It there should just be a time
[2:12:08] where it's like oh look all these things
[2:12:10] work and they've stopped killing you
[2:12:11] underneath. It's an entirely new system
[2:12:13] that was built after the imp the the the
[2:12:17] implica implementation of of server
[2:12:19] meshing which is really the big thing.
[2:12:21] It's the old system was built long
[2:12:23] before server meshing. It's it's I I
[2:12:25] know we we reached out to the original
[2:12:27] developer who built it like he he's not
[2:12:29] with the project like hey you know you
[2:12:31] want to help us you want to help us
[2:12:32] reconfigure it for for the server
[2:12:34] mission world then there's like no you
[2:12:36] just need to build a new thing and what
[2:12:38] so you put together your team we're
[2:12:39] building the we're building the new
[2:12:40] system. I don't understand why it's not
[2:12:42] called Star Transport, though.
[2:12:45] I don't understand why it's not called
[2:12:47] Star Transport, but we're building the
[2:12:48] new uh
[2:12:50] >> Starport.
[2:12:52] >> Why aren't we calling it the Starport
[2:12:54] system?
[2:12:57] >> Hey, we could
[2:12:59] call it the Starport system. We're going
[2:13:01] to call it the Starport system. Now, um
[2:13:03] here's what's going to happen. Anytime
[2:13:04] you try to talk about it publicly, I'm
[2:13:06] just going to call it the Starport
[2:13:08] system now. And it really doesn't matter
[2:13:10] what you call it internally.
[2:13:11] >> Uh why do we do these shows?
[2:13:14] >> But uh you know but but but yeah that
[2:13:16] that's like I said you've already got
[2:13:17] the first version. It's already working
[2:13:18] internally in New Babage. We're we're
[2:13:21] adapting it for instancing. Um and
[2:13:23] there's some some high hopes that we'll
[2:13:24] be able to get that in uh some point in
[2:13:27] >> we are absolutely tech previewing that
[2:13:30] system in place where
[2:13:32] >> our our goal is uh going to be to
[2:13:35] basically we want to try to do one full
[2:13:36] location with it.
[2:13:37] >> Yeah. So that all that entire location,
[2:13:40] elevators, trains, all that stuff is
[2:13:41] completely trans starport driven.
[2:13:44] >> Yep.
[2:13:45] >> And then uh tech preview that and make
[2:13:47] sure that you know the same methodology
[2:13:49] and QA checks that we've added for
[2:13:51] transit are going to have to fully pass
[2:13:54] before we actually accept uh to bring it
[2:13:56] in.
[2:13:56] >> So tech preview for Vulcan and all these
[2:13:59] graphics things and the mission system,
[2:14:00] tech preview for engineering, and then
[2:14:02] tech preview for just use the elevator,
[2:14:04] please.
[2:14:05] >> Yeah,
[2:14:05] >> just use the elevator.
[2:14:06] >> Pretty much. Exactly. Okay.
[2:14:09] >> Um, you said you said the transit system
[2:14:12] was your most despised system. I
[2:14:15] challenge you, sir, with the ATC.
[2:14:19] >> Oh, man.
[2:14:22] >> Well, that's one of the casualties of
[2:14:23] this, right? Uh, so at I hate ATC like
[2:14:30] I you know it's it's its functionality
[2:14:33] is really cool but it's it's one of
[2:14:35] those systems a bit like transit.
[2:14:36] >> Wait, it has functionality?
[2:14:38] >> Well, if yeah
[2:14:42] it does. So uh on ATC we haven't done a
[2:14:46] lot of work on it mostly focused on
[2:14:50] metrics and so uh
[2:14:54] ATC right is this is a system that you
[2:14:57] call when you want landing or when you
[2:14:59] want to leave right it is unfortunately
[2:15:02] responsible for hang your cues
[2:15:05] uh and is also responsible to assign you
[2:15:08] a landing area and coordinate the uh
[2:15:11] your instancing hanger. So basically
[2:15:13] create the instance manager for your
[2:15:15] hanger that creates the hand and then
[2:15:16] manage the pad on your hanger. And so
[2:15:20] for ATC while we're completely not happy
[2:15:23] with its stability overall or the Q
[2:15:26] times which is the one thing that we're
[2:15:28] actually looking at at the moment is to
[2:15:30] make sure that the system works the way
[2:15:31] we want it. That's why we've put all
[2:15:32] these metrics in about at this location
[2:15:35] the time the time to exit is this at
[2:15:37] this location is this. Do we have enough
[2:15:39] gateway? the system the system performed
[2:15:42] the way it should. So we're still in an
[2:15:45] info gathering phase here to have the
[2:15:47] proper plan. But we do know one thing is
[2:15:49] that we are going to change the way the
[2:15:52] interaction between ATC and hangers
[2:15:55] actually work. Currently ATC manages
[2:15:57] everything. Like I said it it gives you
[2:15:59] your landing area. It says hey I need an
[2:16:01] instance at this gateway. Path spawns
[2:16:03] your hanger instance created all that
[2:16:05] stuff. Adds that instance tag to your
[2:16:08] player. Then the doors open. Now you can
[2:16:10] get into your hanger, but now ATC sees
[2:16:12] the pad in your hanger as his landing
[2:16:15] area. He's managing this, right? And so
[2:16:18] he's taking care of all that stuff,
[2:16:19] which is a bit problematic because it's
[2:16:22] an old system. We know of its flaws.
[2:16:25] >> And so, uh, we we do want to split these
[2:16:27] responsibilities so that there's a
[2:16:28] hanger manager.
[2:16:29] >> Yeah.
[2:16:30] >> So that the moment that you're you're
[2:16:31] you're done going through those doors,
[2:16:34] that's it. Done. ATC's out of the
[2:16:36] picture. Now you're completely in your
[2:16:37] hanger and the hanger manager takes care
[2:16:39] of this. And so that we've been doing
[2:16:41] tech design on this, but unfortunately
[2:16:43] uh because of the different focuses we
[2:16:45] have this year, this is one casualty
[2:16:46] that I was not able to push forward on.
[2:16:48] >> Yeah, there's some of these stations
[2:16:49] that have like 10, 15, 20 doors, but
[2:16:52] you'd swear the ATC only ever uses one
[2:16:54] or two of them.
[2:16:55] >> Yeah, that's the one thing that we want
[2:16:57] to solve even with the old system before
[2:17:00] we even start anger management. Now, now
[2:17:02] when you do the new T system, you know,
[2:17:04] ATC, air traffic controller,
[2:17:07] Star Traffic Controller, you call it
[2:17:09] StarTC.
[2:17:11] StarTC to go with to go with Starport.
[2:17:18] Somebody suggested
[2:17:19] >> or maybe or maybe Starport does ATC,
[2:17:21] too.
[2:17:21] >> Star traffic controller. Yeah, there you
[2:17:23] go. You're with me. The Star Troller.
[2:17:26] Um, all right.
[2:17:31] How you feeling, Ben? Well,
[2:17:32] >> I'm good.
[2:17:34] I'm good.
[2:17:35] >> All right. So, we've gone through we've
[2:17:37] gone through we've gone through our our
[2:17:40] year of playability. We've gone through
[2:17:42] our little bug smashers aside. We've
[2:17:45] gone through our our our what's this? Uh
[2:17:49] uh
[2:17:51] >> Freight Elevators.
[2:17:52] >> No, not before Freight Elevators. We did
[2:17:53] server meshing. Why isn't it called star
[2:17:55] meshing?
[2:17:56] >> We we went we went through star meshing.
[2:17:59] Uh we've gone through our list of of of
[2:18:01] of big ticket items.
[2:18:04] It's like this. Uh we've been doing this
[2:18:06] for at 215 now. Um I want to go from big
[2:18:11] ticket items to
[2:18:13] >> bigger ticket items.
[2:18:14] >> The biggest I want to go to this is if
[2:18:17] I'm allowed Hold on. If I'm allowed to
[2:18:18] to to to to I'm gonna put my CI hat on.
[2:18:21] >> Go for it.
[2:18:22] >> There you go. And take my CI hat off. If
[2:18:25] I'm allowed to have an opinion that's
[2:18:26] just mine and mine alone. always
[2:18:29] >> the
[2:18:31] most egregious thing
[2:18:33] for from my perspective. The thing the
[2:18:36] thing that is, you know, after dealing
[2:18:38] with getting this getting the server
[2:18:39] frame rates up and getting the stability
[2:18:41] scores up and and and killing 30k, which
[2:18:45] is amazing. And I'm going to shout you
[2:18:47] that thing I'm going to shout you out
[2:18:49] through the till the cows come home on
[2:18:50] that one. That thing plagued us for so
[2:18:52] long. Um, work on work on transit to
[2:18:55] transport, work on the freight elevators
[2:18:57] is still ongoing. all that stuff, great.
[2:19:00] To me, the most demoralizing,
[2:19:04] the most heartbreaking,
[2:19:06] the most aggravating thing is
[2:19:11] when your stuff disappears. It just it's
[2:19:14] just that it's just that simple. You
[2:19:16] spend you spend hours in there. You you
[2:19:18] you work your butt off. There are people
[2:19:20] who get together with members of their
[2:19:22] org to work towards earning a a Polaris
[2:19:26] from Wiccolo and if they manage to put
[2:19:29] all their stuff on the elevator and the
[2:19:30] elevator doesn't eat it, they then get
[2:19:33] their Polaris, they didn't get their
[2:19:35] Atlas, they then get their, you know,
[2:19:38] F8C, whatnot, and they have it. And then
[2:19:42] we release a patch, which we used to do
[2:19:45] every 3 or four months, and now we've
[2:19:47] been doing every every month. So, as an
[2:19:49] unfortunate side effect of our change in
[2:19:52] our our our our our philosophy, we
[2:19:54] exasperated this problem and now it's
[2:19:58] it's a it's it's it's a it's a gamble.
[2:20:00] It's a crapshoot. Every time we release
[2:20:02] a patch, it's just who gets to keep it,
[2:20:04] who gets to lose it? Bing bing bing bing
[2:20:06] bing bing bing bing.
[2:20:10] What the heck is happening?
[2:20:12] >> What is happening? And what the hell are
[2:20:14] we doing about it?
[2:20:15] >> All right, cool. LTP, right, is the
[2:20:19] famous system talking about
[2:20:20] >> the main thing in the world. No, sorry.
[2:20:23] Go ahead.
[2:20:24] >> Well, let's go a bit into what LTP
[2:20:27] actually does, right? Because, uh,
[2:20:28] there's some misconception around it and
[2:20:31] also a bit of misconception to the
[2:20:33] amount of effort actually put on it.
[2:20:35] But, uh, so historically, if we go back
[2:20:37] to the 3.x
[2:20:40] era, I guess, I think it's in the 3.x
[2:20:42] era.
[2:20:42] >> Yeah. uh we developed the first LTP
[2:20:45] system right which was came a bit as a
[2:20:49] side request right which was we patch
[2:20:51] four times a year was a bit like oh
[2:20:53] there's some stuff players want to be
[2:20:54] able to persist cross patch we're still
[2:20:57] in development so it's okay we're wiping
[2:20:59] all the time and we want the wipe
[2:21:00] because blah blah blah there's other
[2:21:01] considerations so let's build something
[2:21:03] so we built we built a very small uh
[2:21:06] system initially to persist stuff and
[2:21:09] the way that worked is that the game
[2:21:10] server would basically submit
[2:21:13] these commands to say this guy picked up
[2:21:15] a gun, this guy dropped a gun, this guy
[2:21:17] has this. And so that was a solution
[2:21:19] that kind of worked at this at the scale
[2:21:21] of a single server kind of system. And
[2:21:23] we had a lot less items at the time.
[2:21:25] >> That solution was in no way scalable,
[2:21:28] right? Right.
[2:21:29] >> But it kind of did work better overall
[2:21:31] than the current one to be to be honest.
[2:21:34] Um, now come PES 318, come 4.0 I know
[2:21:39] dynamic server meshing. Now we've got we
[2:21:42] persist everything else, right? So we
[2:21:44] need to kind of change how we we deal
[2:21:46] with uh long-term persistence. And so
[2:21:49] let me describe a bit how this works
[2:21:50] currently. So when you acquire a ship
[2:21:55] from let's say the web platform, right?
[2:21:59] That that ownership record lives on the
[2:22:02] on the web platform. It's in it's in
[2:22:04] there, right? And every time you log in
[2:22:06] to the game, we check, oh, this guy is
[2:22:09] this thing. Does he have that ship in
[2:22:11] the game? In is entitlements, right?
[2:22:14] >> It's called an entitlement. That's an
[2:22:15] important term.
[2:22:16] >> That's your entitlements, right?
[2:22:17] >> That's your entitlement.
[2:22:19] >> Uh, so the entitlement records, I know
[2:22:22] people are going to make the joke about,
[2:22:23] "Oh, yeah, we're all entitled." Yeah.
[2:22:25] Yeah. So, the entitlement
[2:22:26] >> I wasn't going to make that joke.
[2:22:29] >> I respect these people.
[2:22:31] >> I'm preempting you. So the so you get we
[2:22:35] make sure you have an entitlement
[2:22:36] record. When you actually open up your
[2:22:39] ASOP terminal, right, and you view your
[2:22:42] list of ships, what you're actually
[2:22:44] viewing is your list of entitlements,
[2:22:46] right? These are not your ships. These
[2:22:47] are actually your entitlement records.
[2:22:50] Attached to your entitlement records is
[2:22:52] the insurance document that goes with
[2:22:54] it, which describe the loadout of the
[2:22:57] ship. We call this an entity class
[2:22:59] loadout which describes what is what is
[2:23:01] in each port right and if there's no
[2:23:03] entity class loadout or insurance
[2:23:05] document with it then it's the default
[2:23:06] loadout um
[2:23:09] so that is your your entitlement records
[2:23:12] that's what you see in ASOP then we also
[2:23:14] query for is there an entity for this
[2:23:17] entitlement record at the moment right
[2:23:19] and that will look at the game database
[2:23:22] in this current moment let's call it the
[2:23:23] the inventory database
[2:23:25] >> uh for now right So we cross link the
[2:23:28] two. So you'll in your for each row in
[2:23:30] your sub terminal you'll see your
[2:23:31] entitlement record. You'll see the state
[2:23:34] of the entitlement record will allow you
[2:23:36] to see if you need to deliver it first.
[2:23:37] That means I have no entity in the game.
[2:23:40] So when you deliver it now we create the
[2:23:42] entity in the game and then you if it's
[2:23:44] stowed in an inventory then you can
[2:23:45] retrieve it right it starts from the
[2:23:47] entitlement record. Uh and then if the
[2:23:50] ship is stowed then you'll see its
[2:23:53] location is set right? If it's left in
[2:23:55] space at a location, you'll see its
[2:23:56] location is set. If it's lost or
[2:23:57] destroyed or or you know, uh I think
[2:24:00] there's a couple different states, but
[2:24:01] one of them is destroyed. Then you can
[2:24:03] claim the ship, right? And then that
[2:24:04] will use the insurance document to
[2:24:08] destroy whatever matches this
[2:24:10] entitlement. So, we have a way to find
[2:24:12] entities that were created from a given
[2:24:14] entitlement gets destroyed. And then we
[2:24:16] use the insurance document to give you a
[2:24:18] brand new ship right at the location
[2:24:20] where you're at. And so that's in game.
[2:24:24] That's what you have in game. That's the
[2:24:26] way this the in-game part works, right?
[2:24:28] So, uh, let's do a clear example. I'm in
[2:24:31] New Babage. I I have a a hawk in my list
[2:24:36] and I retrie I I deliver it. It gets
[2:24:38] created at that location. I retrieve it.
[2:24:40] It gets untoed onto the pad. I use it
[2:24:43] around blah blah blah. I fly out to
[2:24:45] another place. I lose the ship. I
[2:24:48] respawn and cler if I could do my time.
[2:24:51] Then I go out to Grimx or whatever I
[2:24:54] respawn at. And now I'm at a different
[2:24:56] location. I see the hawk in my
[2:24:58] entitlement list, but the ship is
[2:24:59] nowhere to be found. I claim it. A new
[2:25:01] ship is created. It's put in there.
[2:25:03] >> Y. Okay. So before we go to the the ones
[2:25:05] you get in game, which is just to
[2:25:07] >> reiterate reiterate this so everybody
[2:25:09] understands this before we move on to
[2:25:10] the next thing
[2:25:12] >> because people are always wondering why
[2:25:14] do I always get the stuff I pay money
[2:25:16] for,
[2:25:17] >> you know, real money for, but the stuff
[2:25:18] that I earn in games is different.
[2:25:19] That's what we're in the process of
[2:25:20] explaining right now. Yes. the stuff
[2:25:22] that you get that you that you pay
[2:25:24] actual money for or that you get uh
[2:25:26] awarded through like a a subscription or
[2:25:29] or a gift like we gave the armor to
[2:25:32] concierge a couple months ago and stuff
[2:25:33] like this. Those sit on the the web
[2:25:36] platform that every time you log into
[2:25:38] the game, the game goes, "Hey, what am I
[2:25:41] entitled to?" The platform says, "These
[2:25:42] are the things you're entitled to." And
[2:25:44] it gives you back. It's why remember the
[2:25:45] the the uh character reset back in the
[2:25:48] day and what not? That's all it did. It
[2:25:49] just refreshed those entitlements and
[2:25:51] that's why you got those those things
[2:25:53] those things back. That system is not
[2:25:56] simple. Denoa just what just what Beno
[2:25:58] described there was not simple in the
[2:26:00] least. But it's it's a pretty hefty
[2:26:02] system. We it works. We know it works.
[2:26:04] It's why you are never in any risk of
[2:26:07] losing the things that you pledge for.
[2:26:09] Um, and it's why sometimes certain items
[2:26:12] like the um like the uh race for Stanton
[2:26:15] stuff, you know, trigger a trigger a
[2:26:18] thing that gives you a web platform
[2:26:20] entitlement and those go into your my
[2:26:22] hanger and you see them in your my
[2:26:23] hanger and that's why you get those and
[2:26:24] you have that that stuff is for the most
[2:26:26] part it's very stable. It's very stable.
[2:26:28] You can always rely on getting that
[2:26:29] stuff back.
[2:26:31] >> That's not how the in-game stuff works.
[2:26:33] >> Correct. spend one.
[2:26:34] >> So, so let's we went through the web
[2:26:37] platform stuff and how ASOP works,
[2:26:38] right? Let's go into now I go to New
[2:26:42] Deal and I buy a ship with UC, right?
[2:26:45] That will actually give you an
[2:26:46] entitlement, right? Because you you can
[2:26:48] claim those ships, right? You can
[2:26:49] transfer those ships. So, at that point
[2:26:52] up to now, these will work identically,
[2:26:54] right? But when you log into the game,
[2:26:56] we don't reconcile from an outsour
[2:26:58] outsource an outside source your list of
[2:27:02] purchased in-game ships. There are they
[2:27:04] are just entitlements in your account,
[2:27:06] right? And that's it. We keep them.
[2:27:09] Okay, let's stay on ships for now,
[2:27:12] right? Before we get it, let's stick
[2:27:13] with ships.
[2:27:13] >> Now, the thing that's important to know
[2:27:15] here is that the actual ship you're
[2:27:17] playing with,
[2:27:19] the amount of possible states for that
[2:27:22] ship are almost infinite, right? You
[2:27:24] could leave the ship in space. You could
[2:27:25] leave it in in your friend's hanger for
[2:27:27] some reason. People are able to do that.
[2:27:29] You can store it in inventory. Like it's
[2:27:31] like it can be inside an address that's
[2:27:33] stowed in someone else's thing. Like,
[2:27:36] you know, all kinds of stuff can happen.
[2:27:38] And so that there's multiple paths to
[2:27:41] update that specific state of that ship.
[2:27:44] Whereas your entitlement once you have
[2:27:46] it, you have it. That's why your
[2:27:47] terminal always has it. Now, let's talk
[2:27:51] about how LTP works. Now, now this is
[2:27:54] within a game patch. When we release a
[2:27:56] new patch, inventory database,
[2:27:58] entitlement database, they're gone,
[2:28:01] right? We start from scratch and now
[2:28:03] we're rebuilt. So, you reconnect, you
[2:28:05] come in, your web purchases are being
[2:28:07] reconciled, we create new entitlements
[2:28:09] for them, and then when you get in-game,
[2:28:11] you create new ships and then you play
[2:28:12] with those ships and everything works.
[2:28:14] What is LTP? LTP is
[2:28:18] when you acquire things in game and you
[2:28:20] have ships that you own, right?
[2:28:24] the way LTP was designed and maybe this
[2:28:26] is a the part that you know there's a
[2:28:28] mistake there right but still I'll
[2:28:30] explain how it works
[2:28:33] when you stow something in an inventory
[2:28:37] that you own
[2:28:39] the systems will create what we call LTP
[2:28:42] records these LTP records basically say
[2:28:46] they're close to what an entitlement is
[2:28:48] right but they say Jared owns a hawk
[2:28:51] Right? And those are stored in in
[2:28:54] another database, right? That is outside
[2:28:57] the game environment and lives cross
[2:28:59] patches, right? And so now when we wipe
[2:29:02] the entitlement database and we wipe the
[2:29:04] game database and we start fresh from a
[2:29:06] new patch, when we reconcile your
[2:29:08] account the first time, we're going to
[2:29:10] give you your web purchases for sure and
[2:29:11] we're going to give you back your LTP
[2:29:13] records. And so that will create those
[2:29:15] entitlements. That's the intent. Now,
[2:29:17] the problem is, right,
[2:29:22] we need to make sure that we always stow
[2:29:25] the stuff back into inventories that we
[2:29:26] own properly and that those records
[2:29:28] actually save properly, right? And it
[2:29:31] turns out that there's a million goddamn
[2:29:35] ways in which stuff gets stowed in this
[2:29:37] game. And so,
[2:29:40] for example, claiming a ship by
[2:29:42] insurance, then you get the ship, it
[2:29:44] gets stowed from another path. And in
[2:29:46] that path, the LTP wasn't correct. We've
[2:29:48] had cases where we tried to fix bugs
[2:29:51] related to the F7C turrets, for example,
[2:29:53] that got disconnected that were a
[2:29:55] default loadout item that we didn't want
[2:29:57] to wipe when you claim insurance on it.
[2:30:00] And that messed up the LTP records for
[2:30:02] it. And so this whole thing basically is
[2:30:04] very fragile. And so what we realize now
[2:30:06] is that the list of LTP records and the
[2:30:09] way we update them is not always a slam
[2:30:12] dunk. In fact, there are a bunch of
[2:30:15] cases where the record's not updated,
[2:30:17] right? But we even had a case in 420
[2:30:20] very recently where we realized two days
[2:30:23] after launching the patch that the way
[2:30:24] the recording was going for the ships,
[2:30:27] there was an issue where instead of
[2:30:30] giving you let's I'm going to take your
[2:30:31] Wickelop Polaris as my my example just
[2:30:34] to make it super egregious. your Wiccolo
[2:30:37] Polaris that you stowed in your
[2:30:39] inventory by going at your hanger and
[2:30:41] and storing it back in would actually
[2:30:44] persist as one of its components
[2:30:47] >> in LTP. So you would get like a cooler
[2:30:50] instead of the chip like you'd get and
[2:30:52] so that was obviously a very big issue
[2:30:54] and we had a we we ran corrective
[2:30:57] programs to solve that and so that's why
[2:30:58] if you notice in 421
[2:31:01] >> you didn't have much reports of people
[2:31:02] losing ships in 421 but now we're back
[2:31:05] at 430 and we've had reports of lost
[2:31:07] ships between patches and so we're
[2:31:09] pretty certain at this point that we
[2:31:10] know that there's still cases where LTP
[2:31:13] records are incorrect uh either through
[2:31:16] certain game flows there's also
[2:31:18] Unfortunately, a lot of
[2:31:21] uh signal to noise ratio issues like
[2:31:23] people claiming they've lost ships. We
[2:31:24] investigate their accounts. They never
[2:31:26] had those ships. We get a lot of that,
[2:31:28] right? And so at this point, we have
[2:31:30] we're we have to be very prudent. But
[2:31:32] >> see, I want I want I want to I want to
[2:31:34] jump in here make sure to make sure that
[2:31:35] this doesn't get lost in some of the
[2:31:37] stuff I'm I'm checking. So there there's
[2:31:39] there's two issues. We we need to we
[2:31:41] need to go we need to step back and
[2:31:42] explain how the checkout and the sto
[2:31:44] works because that's causing some
[2:31:46] confusion. We'll do that in a second.
[2:31:48] But this this bug where uh first bug is
[2:31:52] things aren't getting stowed right.
[2:31:53] Things aren't getting stowed right. And
[2:31:55] so
[2:31:56] >> yeah,
[2:31:56] >> and and and so and so when it comes time
[2:31:58] to entitle at the beginning of a new
[2:31:59] patch cycle, you don't get the thing.
[2:32:01] Sometimes it's not getting stowed at
[2:32:02] all. Sometimes it's getting stowed and
[2:32:05] being logged as a component part or
[2:32:08] something else. And that's why it's
[2:32:09] like, oh, I'm supposed to have a ship. I
[2:32:11] don't have my ship, but I have this
[2:32:12] cooler
[2:32:13] >> instead. I don't I don't think I own
[2:32:15] this cooler and whatnot. We were on we
[2:32:17] were on a call, you and I, until well,
[2:32:19] it was it was like 4:00 in the morning
[2:32:22] uh my time when we were investigating
[2:32:24] this and and just giving you ex examples
[2:32:26] and we're trying to figure out what's
[2:32:28] going you know you you were
[2:32:31] >> the man was literally inside the the the
[2:32:34] raw LT LTP database. who were checking
[2:32:37] individual items like talking talking to
[2:32:39] backers on Twitter and Discord and like
[2:32:42] okay when did you do this and what did
[2:32:44] you this like like working down at the
[2:32:45] most granular level in the middle of the
[2:32:47] night trying to trying to figure this
[2:32:48] out back and I can't even remember what
[2:32:50] patch it was um to figure out that they
[2:32:52] were being stored as other items.
[2:32:54] >> Yeah.
[2:32:54] >> And so that you can write the skew to to
[2:32:56] fix that stuff. But all of this happens
[2:33:01] because of something that's that we
[2:33:02] haven't explained before and that's the
[2:33:04] checkout and stow system. So talk to
[2:33:07] talk to me about and talk to me be
[2:33:10] candid. It's okay about how the checkout
[2:33:12] and stow on this LTP system works. And
[2:33:16] I'm going to I'm going to preface you
[2:33:17] people. I'm going to preface this with
[2:33:19] something. We've admitted to a lot of
[2:33:22] peculiarities in the course of this
[2:33:24] show. Now we're we're about two and a
[2:33:26] half hours in. Um we've been very
[2:33:28] candid. We've been very forthright. Um
[2:33:30] we've admitted to
[2:33:32] Benois said the words can't trust dev
[2:33:35] with this or whatnot. It's like this a
[2:33:37] lot of things are being said in justest
[2:33:38] and whatnot. What what I can't control
[2:33:41] what you take away from this
[2:33:43] conversation that we've had. My hope
[2:33:45] would be a a recognition that we're
[2:33:48] human and that we're constantly trying
[2:33:52] and growing and striving to do better.
[2:33:55] Uh if you choose to take other stuff
[2:33:56] from that, I I can't do much to help
[2:33:58] that. But explain the checkout and stow
[2:34:01] system because that's what's going to
[2:34:04] light the bulb for a whole lot of people
[2:34:06] of why what the struggle is here.
[2:34:09] >> So you have so you have the inventory
[2:34:12] system, right? where that stuff goes and
[2:34:16] gets stored in there and the records for
[2:34:19] these. Let's say you have a ship that
[2:34:20] you store at you're at your hanger.
[2:34:22] There's a ship on the pad. That ship is
[2:34:25] unstoed. It actually lives in the game
[2:34:28] shard database and is actively being
[2:34:30] simulated on. Meaning we're getting
[2:34:32] updates from the game server on this
[2:34:34] ship. Its position, its location, the
[2:34:36] state of doors, trusters, all that
[2:34:38] stuff, right? It's, you know, m multiple
[2:34:42] messages per second, right? On these
[2:34:44] things. So, it's unstored. Now, you
[2:34:47] press the store button on your ASUP,
[2:34:50] right? Platform goes down, doors close.
[2:34:53] Now, the system will stow that ship.
[2:34:55] What that means is it deletes the ship
[2:34:56] from the shard, removes it from the game
[2:34:59] world, and then moves it to the
[2:35:01] inventory system. So, it gets stored
[2:35:03] into your inventory location, your
[2:35:06] location inventory, right? Gets stored
[2:35:08] in there.
[2:35:10] Uh at that point, if you own the
[2:35:13] inventory where the ship is getting
[2:35:15] stored, we create an LTP record for it.
[2:35:17] Meaning that if we wipe the patch right
[2:35:19] at the second and you come back in the
[2:35:22] new patch, we will give you back that
[2:35:23] ship for sure. Right now,
[2:35:28] for the through the hanger, 100%. Right?
[2:35:31] But there's other areas where we create
[2:35:33] ships when they're already stored,
[2:35:34] right? There are areas where we do
[2:35:36] repair and we modify stuff like that.
[2:35:38] uh those are the areas where now the LTP
[2:35:41] record might not get created or we might
[2:35:43] interpret it as a separate thing. The
[2:35:44] other thing is when we stow things into
[2:35:47] an inventory that you own. It's not just
[2:35:50] a ship, right? This is the bit that uh
[2:35:52] sometimes you know people oversimplify.
[2:35:55] It's the tree of the ship, right? So, if
[2:35:57] the ship has a box container that has
[2:36:02] 32C SCU of boxes that have handguns in
[2:36:06] them,
[2:36:07] I'm going to give you the ship plus the
[2:36:09] handguns. Anything in that tree that is
[2:36:12] flagged for the long-term processing.
[2:36:14] So, this is where designers look at
[2:36:17] items in the game and they say this, we
[2:36:19] want to store crossbatch, right? There
[2:36:22] are things we do not want to store
[2:36:23] crossbatch, ammo, consumables, stuff
[2:36:26] like this. We don't want to store this
[2:36:28] cross batch, right? That's a design
[2:36:29] decision that we've taken in the past.
[2:36:31] And so there's this white list that
[2:36:33] comes into play that decides what items
[2:36:36] will create LTP records for and when
[2:36:38] those get processed. And so the the the
[2:36:41] process of of of taking something that
[2:36:43] you're storing
[2:36:45] and then creating LTP records from it is
[2:36:47] really about processing the whole tree.
[2:36:49] when you store an address, we might be
[2:36:51] creating hundreds of LTP records for
[2:36:54] stuff that's in it, right? Uh and so
[2:36:56] that gets to be an issue. Also, like if
[2:36:59] you have a you can start thinking about
[2:37:01] the edge cases now, right? You have a a
[2:37:04] constellation, I don't even know if it
[2:37:06] fits actually. Let me take a smaller
[2:37:07] ship. You have a gladius in the bay of
[2:37:09] an Idris and you store the address in
[2:37:13] your inventory.
[2:37:16] Technically, you might get the LTP
[2:37:18] record for the Gladius in this case.
[2:37:20] Right now, it depends on ownership and
[2:37:23] how that's actually trickling. And so,
[2:37:26] these are all the cases we have to deal
[2:37:27] with this. And so, when we told players
[2:37:29] in the past, oh, you need to store your
[2:37:31] stuff, right? What does that mean?
[2:37:33] Right? I'll give you a concrete example
[2:37:35] of where there would be a lost ship,
[2:37:37] right? Based on these parameters, let's
[2:37:39] say there's no defect on the system,
[2:37:40] which we're not we're not completely
[2:37:42] sure yet. I'm pretty certain there is a
[2:37:44] defect, but let's start with the there's
[2:37:46] no defect.
[2:37:48] You play the game with your Gladius and
[2:37:51] you uh leave it in space somewhere and
[2:37:54] now you respawn at uh your at your
[2:37:57] station and your ASOP says Gladius
[2:38:01] destroyed, right? Or whatever. And now
[2:38:03] you have the claim button, right? And
[2:38:06] you're like, "Oh, cool. I'll do that
[2:38:08] later." And you leave the game and then
[2:38:10] we patch. You don't have that ship
[2:38:13] because when you unsto the ship to the
[2:38:15] game shard to play with it, we remove
[2:38:17] the LTP record for it, right? That's the
[2:38:19] way the system is designed. Now,
[2:38:26] we're going to change that because
[2:38:28] that's, you know, there's too many hats
[2:38:32] in which stuff gets stowed that could
[2:38:34] lead to problems or that don't respect
[2:38:36] the rules properly. And that's what
[2:38:37] we've come to realize. And so
[2:38:40] without going into too much details
[2:38:42] about how we do this, right? But this is
[2:38:44] a bit part of our item imprint epic,
[2:38:48] right? So very large uh approach there
[2:38:51] because we always said item recovery
[2:38:53] tier zero is just tier zero. So there's
[2:38:54] more item input work there. But part of
[2:38:57] this is a revamp of how we deal with
[2:39:00] long-term persistence. And we're going
[2:39:02] to take a very I'm going to say simple
[2:39:04] approach to this. we're gonna persist
[2:39:07] your entitlements across patches. And so
[2:39:10] instead of trying to always reconcile
[2:39:13] all the data from the game state, which
[2:39:15] I just gave a couple of examples, but I
[2:39:17] could go on, right, of examples where
[2:39:21] you know the turduckan example of like
[2:39:23] stuff and stuff and stuff and stuff,
[2:39:24] right? That and all these things can uh
[2:39:27] cause either the records to go to the
[2:39:29] wrong place or the wrong things being
[2:39:31] persisted. Uh
[2:39:34] so instead of that we're going to
[2:39:35] process your entitlements. So that means
[2:39:36] that if you see a ship in your ASOP
[2:39:38] terminal you're going to come back to
[2:39:40] the next patch you're guaranteed to have
[2:39:42] the same list. There's no way if send or
[2:39:44] butt because we're keeping that database
[2:39:46] cross patch completely. And now the
[2:39:48] other questions people haveve I've seen
[2:39:50] some comments people are like why don't
[2:39:52] you just persist the whole thing across
[2:39:53] patches right we cannot do that for um
[2:39:58] for reasons related to the data format.
[2:40:01] So
[2:40:02] let's say between 4.2 and 4.3
[2:40:06] the gladius to play with is not the same
[2:40:08] gladius between patches. It's completely
[2:40:11] changed. Its shape has changed. It's
[2:40:13] entity hierarchy has changed. The
[2:40:14] parameters on them have changed. The
[2:40:16] components that drive it have changed.
[2:40:18] And so the we don't yet have the tools
[2:40:21] or the uh the proper approach to version
[2:40:25] every single part of the game properly
[2:40:27] so that we could forward migrate the
[2:40:29] data. Right? So that the gladius that
[2:40:32] you've stored in 4.2, it's all trees,
[2:40:35] parameters, it's snapshots, it's
[2:40:36] variables, all that. So you come back in
[2:40:38] 43 and we're like, we migrated to the
[2:40:40] next one. That's something we want to
[2:40:42] do, but we're completely not there yet.
[2:40:45] And so we need this LTP layer. So your
[2:40:48] entitlement records actually serves that
[2:40:50] purpose right now because when you claim
[2:40:52] a ship from insurance, we will basically
[2:40:55] do the same exact thing, which is we
[2:40:58] persist the fact that you own this ship
[2:41:00] and we allow you to obtain a recent
[2:41:04] version of that ship on the current
[2:41:06] patch. It'll be exactly the same
[2:41:07] mechanic. So let me let me let me
[2:41:10] attempt to do Chris hands here and say
[2:41:14] it another way so that between your way
[2:41:15] and my way people will have understand
[2:41:18] and you tell me if I ever mess up this
[2:41:20] stuff.
[2:41:21] >> So
[2:41:23] you buy something on the website it gets
[2:41:25] stored in a website version of of of
[2:41:26] this database where all these things are
[2:41:28] are done. You log you log into the game.
[2:41:31] The when you log into the game it says
[2:41:33] hey I need my entitlements. What are the
[2:41:34] things that I that that this person owns
[2:41:36] from this other thing? It queries this
[2:41:37] other database that's on the platform on
[2:41:39] the web, whatever. Gets a list of
[2:41:41] things, pulls down, and that's why you
[2:41:42] have it. That system works. It's great.
[2:41:45] It's pretty robust. It's it's it's
[2:41:46] people don't have any trouble getting
[2:41:48] the stuff that that they buy. That's why
[2:41:49] that's always there. That's great. All
[2:41:51] right. Everything else you buy in the
[2:41:54] game is super insanely plentiful. From
[2:41:57] giant spaceships made of made of all
[2:41:59] these components down to individual
[2:42:00] bullets and everything, it's all
[2:42:02] physicalized and whatever. my
[2:42:04] maintaining all of that for every single
[2:42:07] player, every single version that gets
[2:42:09] left over and stuff is simply not
[2:42:10] possible. It's simply too big a thing.
[2:42:12] So, we have to decide what to save and
[2:42:14] what not to save. LTP is the is is this
[2:42:17] is a separate database, not the
[2:42:19] entitlement database over here, a
[2:42:20] separate database of the things that you
[2:42:22] have purchased, found, earned in game
[2:42:26] that gets locked that gets locked to
[2:42:28] that. We make choices on what that is.
[2:42:30] Bullets, no. Med pens, no. A spaceship,
[2:42:34] yes. Armor, yes. And there lots of areas
[2:42:37] in between, but we'll we'll go with the
[2:42:38] extremes here. Med pens and spaceships.
[2:42:41] We'll use spaceships. We'll keep with
[2:42:42] spaceships as the example because it's
[2:42:44] the easiest way to explain this. So,
[2:42:46] you've bought the spaceship, you've
[2:42:47] earned the spaceship, whatever. You fly,
[2:42:50] you land it in a hanger, you stow it,
[2:42:52] boom, it creates an LTP record. Doesn't
[2:42:55] create that LTP record until you've got
[2:42:58] it home, you stowed it, and boom, you've
[2:43:00] got it. The next time you try to fly it,
[2:43:03] you pull it up from the hanger. That
[2:43:05] coming up from the hanger elevator is
[2:43:07] more than just a nice visual. It it it
[2:43:11] is a representation of what's happening
[2:43:12] to your LTP record. It is pulling that
[2:43:16] out of LTP and moving it into the live
[2:43:18] server game database, the the the
[2:43:20] universe of the world, so that you can
[2:43:22] fly it around. It needs to do this in
[2:43:24] order to uh work for things like piracy
[2:43:27] and theft and prevent item duplication.
[2:43:29] has to come out of there to go here. So
[2:43:32] that's how we prevent duplication. This
[2:43:34] is all in a perfectly working scenario.
[2:43:37] There are plenty of bugs that creep in
[2:43:40] here. People are like, "Wait, I didn't
[2:43:42] stow this and I came back to two
[2:43:44] versions of the ship." Those are bugs.
[2:43:45] We're talking about how it was designed
[2:43:47] to work. Take it out. You're flying.
[2:43:50] It's no longer in LTP. You're flying
[2:43:52] around. It's it it's out there until you
[2:43:55] bring it back to a hanger. Stow it. make
[2:43:58] it go down and what at which point it
[2:44:01] recreates the LTP record, puts it back
[2:44:03] in. If your ship is destroyed while
[2:44:06] you're out flying it, it doesn't create
[2:44:09] your new LTP record until you hit the
[2:44:11] claim button. You hit the claim button
[2:44:14] and then it cleans that up, puts it into
[2:44:17] the LTP record. So, that's not something
[2:44:20] we've ever been super great at
[2:44:21] communicating to to people. And why
[2:44:23] sometimes it's like, well, why have I
[2:44:25] lost the ship? What why have not lost
[2:44:26] the ship? We're explaining these things
[2:44:28] to help you better fight that fire until
[2:44:31] these new changes come in. That system
[2:44:34] has lots of bugs, lots of flaws, lots of
[2:44:37] issues here and there. We're if if you
[2:44:39] took anything from Ben Wis's
[2:44:41] conversation, his attitude, his
[2:44:42] demeanor, it's we fully recognize the
[2:44:46] limitations of it. It like many things
[2:44:48] in Star Citizen, it was a product of its
[2:44:50] time and it needs to be revised and and
[2:44:52] and and helped and bolstered as as the
[2:44:54] game continues to grow and get more
[2:44:55] complex. Those are things you can do to
[2:44:59] help assuage that. Obviously, everybody
[2:45:01] knows the thing about landing and
[2:45:02] getting it back to the hanger. Don't
[2:45:03] forget to claim your things in the in
[2:45:05] the ASOP. It's not going to fix
[2:45:07] everything. Still all the outlying bugs
[2:45:09] and issues and stuff, but it's another
[2:45:10] thing that you can do to help you help
[2:45:12] yourself in the meantime. That said, we
[2:45:15] have a new solution that we're going to
[2:45:18] put into effect. And I'm not going to
[2:45:20] say anything when Ben when I throw throw
[2:45:22] it back to Ben Woah he can say what he
[2:45:24] wants to say about when we are when you
[2:45:27] earn a ship when you buy a ship and
[2:45:29] whatnot it's yours you've gone you've
[2:45:31] gone through the mission reward or the
[2:45:32] wicowo thing or the or the buying not
[2:45:34] when you steal it from somebody else but
[2:45:36] when you when you do one of the
[2:45:37] legitimate ways we are going to create
[2:45:39] an entitlement record not an LTP record
[2:45:42] an entitlement record up in another
[2:45:44] database that's just like the one that
[2:45:46] we use for when you buy things and And
[2:45:49] then from that point on when now that
[2:45:52] we've recreated that record over there
[2:45:54] in that database not inside LTP that
[2:45:57] means that no matter what happens the
[2:45:59] next time you log in you're going to
[2:46:01] have access to your ship. The next time
[2:46:02] we do a patch you're going to have
[2:46:04] access to your ship with the same
[2:46:06] stability and the same reliability as
[2:46:08] the system we use to sell things and
[2:46:11] stuff like that. So that is what they're
[2:46:12] working on right now. So, we don't have
[2:46:14] to wait for the changes to LTP in order
[2:46:18] to resolve this terrible issue of people
[2:46:21] losing the ships that they've bought
[2:46:22] with in-game money or earned through
[2:46:24] Wiccolo rewards and stuff like that.
[2:46:28] How'd I do, Benois?
[2:46:29] >> That was actually pretty good. I mean,
[2:46:31] couple of things I'd correct, but the
[2:46:33] not even worth it. I think that's
[2:46:34] totally fine.
[2:46:35] >> All right. Uh, you you want you want to
[2:46:37] tell anybody about when we might
[2:46:40] >> Well, we're actively working on this
[2:46:42] right now. So the big parts of the
[2:46:44] online team are are dedicated to this.
[2:46:46] There's a few um there's a few things
[2:46:48] that we need to solve in order to put
[2:46:50] this into full production like uh I mean
[2:46:53] release it. Um obviously since those are
[2:46:55] backend systems they have to be super
[2:46:57] robust and very well tested because you
[2:47:00] know you know what happens when they're
[2:47:01] not. Uh and uh but that's the approach.
[2:47:05] In the meantime though uh we're
[2:47:08] discussing mitigating uh options right.
[2:47:12] So, I'm not going to promise those here,
[2:47:13] but we've we did do a mitigation in 421
[2:47:16] that actually kind of worked for ships,
[2:47:20] uh, specifically ships, not all items,
[2:47:22] but for ships. And so, we might actually
[2:47:25] use that again to ease up on some of the
[2:47:28] pressure before all the systems come in
[2:47:30] because the reality is your entitlement
[2:47:32] is what you're you're actually driving
[2:47:34] at from the ASOP terminal. And so, we
[2:47:38] can just ensure that you have all those
[2:47:39] entitlements again, right? And so that
[2:47:42] that's the mitigation. And so we're
[2:47:43] probably going to be putting that into
[2:47:45] play uh just so that in the meantime
[2:47:47] while we're developing the feature,
[2:47:48] there's not as much uh you know, ship
[2:47:51] loss and things like that.
[2:47:54] Somebody in the chat was like, Jared,
[2:47:56] starplaining again. Starplaining again.
[2:48:00] Yeah. Yeah. It it's it's it's it's by my
[2:48:04] my my my grandfather used to used to
[2:48:07] serve on the USS Tingi and his his job
[2:48:10] he served on it during World War II in
[2:48:12] Korea and his job was to be the person
[2:48:14] that sat next to the captain and when
[2:48:15] the captain gave the order to to repeat
[2:48:18] the order in the in in the radio and
[2:48:20] whatnot. So, so you heard the same thing
[2:48:21] from two different voices in two
[2:48:23] different ways so that you unders so
[2:48:24] that there was it reduced the amount of
[2:48:27] misunderstanding and what and what what
[2:48:29] happens inevitably because I've been I
[2:48:31] guess we've been doing this for a while
[2:48:32] drink everybody uh is is you let one
[2:48:36] person say and you only have one person
[2:48:37] say and then half the people get it and
[2:48:38] that's great and half the people don't
[2:48:39] get it because it's not delivered quite
[2:48:41] the way. We've found over the years,
[2:48:43] much to the annoyance to some people who
[2:48:45] call it starplaining, that when you say
[2:48:47] it two ways, two different ways, it
[2:48:50] helps both halves of the people in the
[2:48:53] community understand. There's there's
[2:48:55] usually somebody that's that's that gets
[2:48:57] it from one way and somebody that gets
[2:48:58] it from the other way. And we like to do
[2:48:59] both because that's our job. So, you can
[2:49:02] call it Starplaining if you want, but
[2:49:05] >> I think you did a pretty good job to be
[2:49:07] honest.
[2:49:08] Uh what else we got left? Benois, we uh
[2:49:11] that that was pretty much all of our our
[2:49:13] baked ticket things. Um I know folks uh
[2:49:16] uh before we let you go, I mean we h we
[2:49:19] got 10 minutes left before we hit 3
[2:49:20] hours. Let's go ahead and try. Um
[2:49:22] recently uh there was some press and
[2:49:25] stuff like that said Turbulent or some
[2:49:27] part part of Turbulent is becoming uh
[2:49:30] what is it called? Cloud Imperium Games
[2:49:32] Montreal stuff. How how's how's that
[2:49:33] going?
[2:49:35] >> Very good actually. I mean, this is
[2:49:36] we're coming up on the 2-year
[2:49:38] anniversary of the of the merger, right,
[2:49:41] of Turbulent and CIG. And I mean, it's
[2:49:44] going really well. I think overall the,
[2:49:46] you know, the so we we did want to do
[2:49:49] some adjustments though because like,
[2:49:52] you know, the the the turbulent teams
[2:49:54] even though they were fully working on
[2:49:55] on Star Citizen, we're still, you know,
[2:49:57] under the turbulent name, right? which
[2:50:01] uh you know causes a bunch of grief to
[2:50:03] be honest in like having to explain you
[2:50:05] know like uh when we're hiring people
[2:50:07] and we're bringing into the team it's
[2:50:08] like so what is there you know oh Star
[2:50:11] Citizen but you know it's turbulent but
[2:50:13] really we're the same like you know it's
[2:50:15] it's okay like that doesn't help right
[2:50:17] so we we all wanted to make sure that
[2:50:19] this was kind of one good unified
[2:50:22] message and so for uh for the game teams
[2:50:24] over there uh basically we kind of split
[2:50:26] the two businesses because turbidance
[2:50:28] still exists as a as a web uh company,
[2:50:30] right? And the the web teams are fully
[2:50:32] inside CIG now. But the and so changing
[2:50:35] the name of the studio to cloud
[2:50:36] impairment games Montreal made sense,
[2:50:38] right? Uh to be able to leverage the you
[2:50:40] know the outstanding talent in the city
[2:50:42] and you know build stable teams over
[2:50:44] there and the team has grown quite a
[2:50:45] bit. And so this was really about like
[2:50:48] you know clarifying stuff like this you
[2:50:49] know and I think that's it's going well.
[2:50:51] I mean the the the integration has been
[2:50:53] fantastic so far. I mean the the the the
[2:50:57] way the teams operate across the board
[2:50:59] at C are improving. I think that the you
[2:51:02] know even though there's transatlantic
[2:51:04] you know time zones uh you can see a lot
[2:51:07] of the fruit of the collaborations
[2:51:08] between the teams show up right in the
[2:51:11] stuff that we've produced this year. uh
[2:51:13] you know the the the teams travel back
[2:51:15] and forth, the key leads are exchanging
[2:51:17] and there's a really good gel between
[2:51:19] this and so no it's it's been to be
[2:51:22] honest really really positive so far so
[2:51:24] it's good.
[2:51:26] >> Well that about does it for what I have
[2:51:29] for you Ben uh chats been like stands
[2:51:32] for Star Citizen long sometimes at least
[2:51:34] when Ben Juan and I get together uh and
[2:51:36] and people are like Star Citizen long
[2:51:38] seal longer than citizen gone uh direct
[2:51:41] that's crazy. Yeah, it will be it will
[2:51:44] be longer than Siggon Direct. Um uh
[2:51:46] let's let's talk about that for a
[2:51:48] second. Still got some time.
[2:51:51] >> Uh yeah, so in case folks uh uh don't
[2:51:54] know, Citizen Direct is coming. It's on
[2:51:57] October 11th. Uh it's why I'm here in my
[2:52:00] office and not on the spaceship. We've
[2:52:02] set the spaceship up as a permanent
[2:52:03] filming location for for Citizen Gone.
[2:52:06] Um why is SCCL longer than Citizen
[2:52:09] Direct? Because this just takes me and
[2:52:11] Benois. This just takes me and Benois
[2:52:14] doing absolutely no prep, absolutely no
[2:52:16] prior discussion. Just like, hey, you
[2:52:18] want to chat for like 3 hours about all
[2:52:19] these things? I'm just going to ask you
[2:52:20] about a bunch of crap and you're going
[2:52:21] to, you know, tell the truth. Like,
[2:52:22] yeah, we can do that. And he that's a
[2:52:24] this is a relatively easy thing. Don't
[2:52:25] equate length with a difficulty. uh
[2:52:28] Citizen Con, even a Citizen Con direct
[2:52:30] still involves 20 30 different people
[2:52:33] all doing their part and we got to work
[2:52:34] with all their schedules and and like
[2:52:36] then there's editorial, there's editing
[2:52:38] it all together because it's like five
[2:52:40] different cameras at at at 4K each. And
[2:52:43] then there there there's all the B-roll
[2:52:44] creation, which is the same uh a
[2:52:47] wonderful dedicated sixperson team that
[2:52:49] makes all the trailers and all that all
[2:52:51] stuff like that. So, they got to do that
[2:52:52] in between the the win and then, you
[2:52:54] know, reviews and re-shoots and all that
[2:52:56] kind of stuff. So, uh, don't equate
[2:52:58] length with quality.
[2:53:01] Never said those words before. Um,
[2:53:05] that was for him. He's he's laughing
[2:53:06] over there. You can't see him. Um, but I
[2:53:08] do want to say if you are a sub, uh,
[2:53:10] some more things about Syscon Direct. If
[2:53:12] you're a subscriber to the Squadron 42
[2:53:14] newsletter, uh, that went out, uh, uh,
[2:53:16] that that we just that just went out
[2:53:18] with a with a map of the Odin system.
[2:53:20] Uh, there was a note at the end there
[2:53:23] about, you know, the Squadron 42 team
[2:53:25] still being heads down and working on
[2:53:27] that. Uh, I want to I want to second the
[2:53:30] information there and I want I want to
[2:53:32] star I'm going to star the information
[2:53:34] that was there. Um, there will be no
[2:53:37] Squadron 42 presence at Citizen
[2:53:39] Condirect this year. So, just in case
[2:53:42] there was any kind of kind of people
[2:53:44] were like, I didn't quite understand the
[2:53:46] message or maybe the message wasn't, you
[2:53:47] know, fully clear and what not and if it
[2:53:49] wasn't, you know, maybe that was on us.
[2:53:50] Uh, that team is heads down. We we we we
[2:53:54] drew a we drew a line in the sand when
[2:53:55] we said 2026. I don't know if we're
[2:53:58] going to make it. I just know that we're
[2:53:59] going to do every single thing possible
[2:54:03] to make it. And part of that is not
[2:54:06] taking time for the distraction of
[2:54:07] citizen. It's why we're not doing a
[2:54:09] larger event this year. Uh it's why
[2:54:11] we're doing a smaller, more focused
[2:54:14] thing. Even even when we did digital
[2:54:15] citizen gone, those were still these big
[2:54:17] 6, 8, 10 hour things. We called that
[2:54:20] citizen gone. This is not sizzing on.
[2:54:21] It's sizzing on direct. It's a much
[2:54:23] smaller, more focused thing uh
[2:54:26] specifically on the work of the Star
[2:54:27] Citizen team uh and what they plan for
[2:54:30] the next year of development. uh we're
[2:54:33] not going to look at 1.0 stuff and so
[2:54:35] like this. It's just it's just we're
[2:54:36] going to take a look at what the next uh
[2:54:39] year of our intention is for that. So
[2:54:41] it's a much smaller more dedicated
[2:54:43] thing. Uh I think you're still going to
[2:54:45] enjoy it. Uh people who are working on
[2:54:47] it are doing a lot of really hard work
[2:54:49] to make it uh as entertaining and uh uh
[2:54:52] informative as possible. But again, just
[2:54:56] want to be real clear with the
[2:54:57] expectations management. No Squadron 42
[2:54:59] presence at all. That's not a That's not
[2:55:01] a release date. That's not any of that
[2:55:03] stuff. We're letting those people stay
[2:55:06] focused. They're letting those people
[2:55:08] stay focused. Uh we're on track. Uh
[2:55:10] there's nothing to There's nothing to
[2:55:12] report. There's no mystery. There's no
[2:55:15] anything we're hiding or whatever. It's
[2:55:16] just
[2:55:18] like we said when we announced Star
[2:55:20] Citizen, like we said when we announced
[2:55:22] Star Citizen Direct, we're trying to
[2:55:25] stay out of everybody's way and let them
[2:55:27] focus and let them do the work that
[2:55:29] they're here to do, which is make the
[2:55:31] game. It's
[2:55:32] >> also a misconception that the all the
[2:55:34] resources are in Squadron 42, right?
[2:55:36] Like the the reality is there's two
[2:55:38] teams, right? And we're we got to push
[2:55:40] both games, right? And it's super
[2:55:42] important for that. Now, obviously,
[2:55:43] Squadron, unfortunately, it's got to be
[2:55:45] under a bit more a bit more secrecy,
[2:55:48] right? But, uh,
[2:55:49] >> yeah.
[2:55:49] >> Yeah.
[2:55:50] >> No, it's it's it's not a So, I can
[2:55:52] already see the chat. The chat's already
[2:55:53] like, "Oh, it means this. It means
[2:55:55] that." Folks, it means that when it's
[2:55:59] time for the game to come out, you're
[2:56:00] going to hear a lot more about it, which
[2:56:02] just it's just it's always been
[2:56:03] different. We've always been all be big
[2:56:05] yappy on Star Citizen and less yappy on
[2:56:08] on Squadron. So, it's just an extension
[2:56:09] of that. It's just as as we get closer
[2:56:12] to our intended release date in 2026, we
[2:56:15] will start opening up the doors, opening
[2:56:16] up the communication. You'll start
[2:56:17] seeing more of all that kind of stuff
[2:56:19] that you would expect in a proper go to
[2:56:20] market campaign. It's
[2:56:23] just, you know, we're just doing this.
[2:56:26] We're staying out of everybody. That's
[2:56:27] the same thing. It's why that's why
[2:56:28] there's fewer ISC's this year. It's why
[2:56:30] there's fewer this year. It's we just
[2:56:33] want the people as part of this change
[2:56:35] that we talked about for the first 30
[2:56:36] minutes of this show, this
[2:56:37] reorganizational change. We want
[2:56:39] people's focus being on making the game.
[2:56:42] That's it. It's really no more
[2:56:45] complicated than that. So, uh, when the
[2:56:49] time is right, you'll see plenty of
[2:56:51] Squadron 42 stuff. I I promise. So, with
[2:56:54] that said, that's it. That's our show.
[2:56:57] Three hours. Thank you, of course, to
[2:56:59] Ben Wah, who flew halfway around the
[2:57:01] world to sit in a room
[2:57:03] >> like 100 meters that way. Uh uh and and
[2:57:08] take the time uh to sit on the show with
[2:57:10] us. Um
[2:57:11] >> I even put my TDK shirt just for you.
[2:57:14] >> I know cuz you know you know I'm a
[2:57:15] astute collector of of
[2:57:17] >> That's right.
[2:57:17] >> high quality audio cassette tapes. Uh so
[2:57:20] thanks for watching. Uh thanks thanks
[2:57:22] for uh hanging out with us. Um thanks
[2:57:24] for being uh respectful in chat to your
[2:57:27] fellow chatters. saw a lot of folks with
[2:57:29] a lot of good conversation there. Uh,
[2:57:31] and thank you as always again. I I've
[2:57:33] already, but I'm going to do it Benoa
[2:57:35] for agreeing to come. I don't know. I've
[2:57:38] worked a lot of places in my life and
[2:57:40] I've I've been in a lot of studios and
[2:57:42] I've never known a CEO to be this
[2:57:44] willing to come on and share this level
[2:57:46] of canandor and insight with people. So,
[2:57:50] thank you.
[2:57:50] >> I'm glad for it. It's the DNA of our
[2:57:52] project, man. Got to do it.
[2:57:53] >> All right. Take care everybody. Love you
[2:57:55] guys.
[2:57:56] >> Bye bye.
[2:57:59] [Music]

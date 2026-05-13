# Star Citizen Live Gamedev: Life of QA

**Video:** https://www.youtube.com/watch?v=vHU-defJl7A
**Date:** 2021-08-13
**Duration:** 1:02:48

## Transcript

[00:00] and then we'll we'll do this
[00:03] hi everybody
[00:04] welcome to star citizen live game dev
[00:08] life
[00:08] of
[00:10] qa i was about to say life of qua and
[00:12] i'm like no i'm not gonna do that
[00:14] and then i talked about not doing it so
[00:16] i just defacto did it i'm your host
[00:18] jared huckabee and uh if you've never
[00:20] seen star citizen live before so where
[00:22] we take about an hour at the end of our
[00:24] week when we hang out with a with a
[00:26] collection of our finest uh developers
[00:31] and george stadler
[00:33] and talk about uh our work our
[00:36] experience our life
[00:38] uh in development as it were uh on
[00:41] today's show we are jumping into an
[00:44] often
[00:45] misunderstood
[00:47] often
[00:48] misrepresented
[00:50] aspect of game development
[00:52] quality assurance
[00:54] so before we get started let's take a
[00:56] few minutes and get to know who our
[00:58] players are
[00:59] we will start with someone who probably
[01:02] needs no introduction but i'm going to
[01:03] do it anyway she is the she is the
[01:06] versus very first original jump point
[01:09] pilot uh you might remember from the
[01:12] citizencon 2949 demo uh let's give a big
[01:15] round of applause for samantha haley
[01:19] thank you guys it's really nice to see
[01:21] everybody again virtually um yes so i'm
[01:25] here uh representing qa today um
[01:28] and through qa i got to do something
[01:31] really amazing at that citizencon get to
[01:33] fly the carrick and in front of
[01:35] everybody and it was such a wonderful
[01:37] experience to get to do that so it's
[01:39] great to be back and and to kind of
[01:41] engage with the community a bit more
[01:43] again
[01:44] now what is it that you actually do for
[01:46] star citizen
[01:48] so in terms of my my actual job other
[01:51] than you know flying the carrick
[01:52] sometimes um i am the lead of the qa
[01:56] resource team
[01:58] and basically what that means is i deal
[02:00] with everything in terms of training up
[02:02] our new hires
[02:04] including our
[02:06] experienced staff as well i go through
[02:08] uh training with those guys too
[02:11] we deal with all kinds of guides and
[02:14] information and making sure that
[02:16] everybody is you know
[02:18] at the tip top of their craft for qa
[02:21] basically
[02:22] all right
[02:23] now
[02:25] joining us on the show we have several
[02:27] members of the qatar you guys are all
[02:29] from the uk studio am i not mistaken all
[02:32] right so we have members from our our uk
[02:34] studio here uh let's start with a a new
[02:38] new and improved george
[02:39] george who are you and what do you do
[02:41] for star citizen
[02:43] hello everyone i'm george h
[02:45] i am currently the um
[02:47] qa embedded on the network team i've
[02:50] been with uh cloud now for probably
[02:52] about a year worked in a few departments
[02:53] in qa so i've kind of got like a varied
[02:55] experience different departments um i
[02:57] was the senior
[02:58] for sam a while back and then moved on
[03:00] to the embedded team or the embedded
[03:02] network team probably around about a
[03:04] month ago so i am
[03:06] you know here to help the network do the
[03:08] networking things basically
[03:11] so so all the uh all the 30ks are your
[03:13] fault
[03:22] harsh um moving on to jack jack who are
[03:25] you and what do you do for star citizen
[03:28] uh i'm jack
[03:29] so i've been dragged along by my good
[03:31] friend sam to talk a little bit about
[03:34] the qa i do i'm part of
[03:36] the core team on qa so our kind of
[03:40] bread and butter is we sort of look at
[03:41] the core gameplay loops so making sure
[03:44] that the player works making sure that
[03:45] when you're loading the game new
[03:46] beverage is still there and we haven't
[03:48] accidentally deleted it um and the
[03:51] missions that sort of stuff really all
[03:53] the basics
[03:55] all right
[03:56] and last but certainly not least uh an
[03:59] oh an old hand here it starts in this
[04:02] this gentleman and i i i gotta give him
[04:04] crap for this
[04:05] he he he he was here at cig around the
[04:08] same time i started and then he got out
[04:11] and then recently he came back he came
[04:14] back george
[04:16] george zero georgia original who are you
[04:18] and what do you do for star citizen
[04:20] i'm i'm george s i am a well i'm a new
[04:24] qa tester on the gameplay team so
[04:27] testing new gameplay features as they're
[04:29] coming in i've just come out of sam's
[04:32] amazing training as well a week ago so
[04:35] just had my first
[04:37] week back in the real world of q of qa
[04:39] which is interesting to see how things
[04:41] have developed and changed obviously
[04:43] before three years ago almost the day i
[04:46] was in qa and before that i was in
[04:49] player relations so some of you may
[04:51] recognize the name from there as well
[04:55] yeah i think i'm still waiting for you
[04:56] to answer one of my tickets actually
[04:58] [Laughter]
[05:00] just probably all right so
[05:03] on today's show we're doing things a
[05:04] little different like now on star
[05:05] citizen live we usually have uh
[05:08] designers artists engineers stuff like
[05:11] this uh as we spoke of uh at the
[05:14] beginning of last week's uh
[05:17] inside star citizen because we are in
[05:19] our quarter three
[05:21] of the year and because that's the
[05:22] citizencon
[05:24] into iae corridor uh everybo everybody
[05:27] is heads down working on their
[05:29] presentations and stuff for for that
[05:31] stuff uh it gives us the opportunity to
[05:34] stretch our our proverbial and
[05:36] metaphysical legs a little bit and
[05:38] explore aspects of star citizen's
[05:40] development that maybe we otherwise
[05:42] wouldn't throughout the rest of the year
[05:43] so
[05:44] uh just like on isc where we took the
[05:46] opportunity to delve into the production
[05:48] life of of steph bedford and we're going
[05:50] to jump into some other lives here in
[05:51] the coming weeks there i wanted to take
[05:53] this opportunity to jump behind the
[05:55] scenes into a
[05:57] an aspect of game development that's
[05:59] near and dear to my heart which is
[06:00] quality assurance
[06:02] many of our
[06:05] finest folks get their careers uh start
[06:07] their careers rather in quality
[06:09] assurance it's it's a it's a terrific
[06:11] way to learn uh almost every aspect of
[06:14] game development because there's there's
[06:16] very little that goes into star citizen
[06:19] or any video game that quality assurance
[06:21] does not touch in some way shape or form
[06:24] names you might recognize like ricky
[06:26] jelly got their start in qa
[06:29] phil from our audio team got a start in
[06:31] qa
[06:32] tyler wicken our director of community
[06:34] got to start in qa and i'm not going to
[06:36] go and list the list but it is a
[06:38] terrific place to learn the industry
[06:41] to learn
[06:42] almost every aspect of game development
[06:44] so with that
[06:46] i want to turn things over to sam here
[06:49] for for a little while uh sam you are
[06:51] the resource lead yeah it is your job to
[06:55] to
[06:56] train these train these these these
[06:58] people up and make sure that they can
[07:00] jump into what is
[07:03] what is a very dense and very a thick
[07:08] game with a lot of tribal knowledge uh
[07:10] uh where do we start with this process
[07:13] yeah definitely so i mean when it comes
[07:15] to star citizen it is absolutely massive
[07:18] and
[07:19] when you know you're looking for people
[07:22] to hire you obviously want to try and
[07:24] take on people who have a little bit of
[07:26] qa knowledge to begin with
[07:28] but recently we have been um
[07:31] like reaching out beyond people who have
[07:34] maybe that games experience already
[07:36] um into
[07:38] people who have you know a passion for
[07:40] the project um for example quite a few
[07:43] of our new starters did actually start
[07:46] off as players of star citizen for
[07:48] example i know uh george plays star
[07:51] citizen as well um george stabler that
[07:53] is um
[07:55] so he started off from that
[07:56] um and it's just really kind of
[07:59] inspiring to take people through that
[08:02] process of
[08:04] knowing nothing about games to
[08:06] kind of warming them up i guess and
[08:08] getting them out of the
[08:10] the myths and the kind of preconceptions
[08:13] they might have around qa
[08:16] to the point where you know they're
[08:18] fully ready to get into the job and
[08:20] test our massive
[08:23] kind of universe basically
[08:25] so
[08:26] yeah when it comes to those kinds of um
[08:30] i guess
[08:31] myths and stuff um a lot of the people
[08:33] who like i say don't have that game's
[08:35] background
[08:36] may kind of have some conceptions about
[08:39] um
[08:40] qa testers and what they do and that
[08:42] kind of thing
[08:44] so i guess we'll kind of touch on some
[08:46] of those points um
[08:48] so for starters yeah so let's job
[08:52] let's start with the biggest myth buster
[08:53] in the world qa just plays the game
[08:58] i mean i would love to get paid to just
[09:01] play the game that would be absolutely
[09:03] wonderful
[09:04] um but sadly it's not maybe quite as
[09:07] appealing as that i mean there's the
[09:09] video that goes around in the game
[09:11] circles where there's the um
[09:13] girl who comes in and kind of says hey
[09:16] guys are you done testing that game i
[09:17] need another one uh designed and they go
[09:21] yeah just tighten up the graphics on
[09:22] level three man i can't believe they pay
[09:24] us to play games and
[09:26] i guess that is kind of the the opinion
[09:29] that a lot of people get uh because of
[09:31] that um
[09:33] but yes when it comes to actual qa i
[09:36] think it's more
[09:37] to do with being kind of like an
[09:39] information broker for a developer
[09:42] and just kind of making sure we know
[09:43] exactly everything about the game uh
[09:47] keeping a pulse on it as it goes from
[09:49] the beginning uh for example you know
[09:52] jack starts off with the most broken
[09:55] kind of new
[09:56] interesting stuff on the core team
[09:59] those guys deal with all that kind of
[10:00] thing
[10:01] and then as it goes on to the more
[10:04] finalized products um
[10:06] you might see it through you know george
[10:08] would kind of uh see that through to the
[10:11] released product basically so as well as
[10:15] getting to play the game which we we do
[10:17] um repetitively but we do get to play
[10:19] the game um
[10:21] we we kind of are making sure we're
[10:24] providing good detail to the developers
[10:26] on on how to reproduce bugs
[10:29] uh debug information for anything that
[10:31] comes up
[10:32] um prioritizing certain checks for
[10:35] example if new features are coming in we
[10:37] need to make sure that we are
[10:39] rinsing those and maybe de-prioritizing
[10:42] some of the older stuff
[10:44] so yeah that's kind of a little bit more
[10:46] about
[10:48] the qa role do any of you guys have any
[10:50] points on just playing the game what
[10:52] what kind of things you do outside take
[10:54] us through it take us through a typical
[10:56] day if there is such a thing as a
[10:58] typical day
[11:00] describe the daily routine
[11:02] here
[11:05] do you want to one of you guys want to
[11:06] take that one i mean yeah oh
[11:10] no go oh okay i've landed on this one
[11:13] and so like sam said i work on the uh
[11:16] the core team which is kind of like we
[11:18] check like the core um mechanics of the
[11:20] game to make sure that when all the new
[11:21] and exciting stuff comes in uh we
[11:23] haven't accidentally
[11:25] introduced a new variable that like
[11:27] completely ruins the game somehow so i'm
[11:29] kind of there on
[11:30] the front lines almost of just making
[11:32] sure that the game in its base form is
[11:34] still playable so in core team we
[11:37] usually
[11:38] sort of have like a series of checks and
[11:40] we'll like cycle through them so we'll
[11:42] spend a couple of weeks making sure the
[11:43] players working then we'll spend a
[11:45] couple of weeks making sure that all the
[11:46] different landing zones like corus and
[11:49] um new babbage area 18 they're all still
[11:52] working properly we might check missions
[11:54] and we'll kind of go through all of
[11:55] those and once we finish we just kind of
[11:58] loop back around to the start and start
[12:00] again
[12:01] so a usual day for qas um i'll come in
[12:05] uh the rest of my team have usually
[12:06] already started because i enjoy a line
[12:09] um and we'll sort of spin up our own
[12:13] sort of like microcosm a little tiny
[12:15] server that we just test with these six
[12:16] or seven people we've got
[12:18] and we have a big long list of hundreds
[12:22] and hundreds of checks that are all
[12:24] individually very basic so
[12:26] it might be like you go into port olisar
[12:29] and it's like are all the textures
[12:31] correct is the atmosphere correct and
[12:33] we'll just kind of systematically
[12:35] go through all those checks for whatever
[12:37] section of the game we're looking at for
[12:39] that week
[12:40] um and anything that's not wrong we'll
[12:43] sit down write it out and then pass that
[12:46] information up to the developers and
[12:47] then it's kind of their job from there
[12:49] to sort of
[12:50] fix it now i want to follow up there you
[12:53] say with the six or seven people that's
[12:55] not the sum total of everybody in the q
[12:57] a no
[13:01] very specifically seven uh eight people
[13:03] on my team
[13:05] just looking at the uh core features
[13:07] again there's lots of different teams
[13:10] of people looking at other areas of the
[13:11] game yeah and it's often important to
[13:13] have multiple people because when you
[13:15] because over the course of days weeks
[13:18] months you're looking at the same assets
[13:20] these same locations over and over again
[13:23] and it's it's very easy to get
[13:26] um i don't know if there's there's
[13:27] probably a word for it but but just just
[13:29] uh not colorblind but just yeah
[13:32] snowblind i guess uh just you've looked
[13:34] at the same thing so many times that
[13:36] even if something's drastically
[13:38] different this time it's not always
[13:40] incredibly apparent because you just
[13:43] you start to see the previous versions
[13:45] every time you look at something yeah
[13:47] okay uh
[13:49] so
[13:50] anybody else want to add to the typical
[13:52] day before we move on to the next
[13:55] um i'll add a little bit from the
[13:56] network side as well so kind of similar
[13:58] to jack as well but obviously because
[13:59] i'm on the network team i'm just testing
[14:01] you know network related things and like
[14:03] persistent tech and stuff and one of the
[14:04] caveats for me doing this was i have to
[14:06] pick up the network team and how great
[14:08] the network team are which you guys are
[14:09] fantastic so hello if you're watching
[14:14] clive johnson
[14:16] yeah hello to clive if you're watching
[14:19] um so my typical day you know i i'm
[14:20] usually an early bird so i'm in it like
[14:22] seven o'clock um if we're continuing
[14:24] with a task that you know we've been set
[14:26] beforehand we'll just crack on with that
[14:28] um you know check things like emails and
[14:29] messages like normal
[14:31] and then usually around about 11 30
[14:33] we'll have like a stand-up where the
[14:34] team will get together and have like a
[14:36] video meeting and say you know this is
[14:37] what we're doing today um or what we've
[14:39] done for this morning and this is what
[14:40] we're now doing for the rest of the day
[14:42] and if anything like major comes up
[14:45] you know we can point that in a meeting
[14:46] saying no we're testing this build but
[14:48] we're having this blocker issue which is
[14:49] preventing us from doing it so because
[14:51] we talk to the devs directly you know it
[14:53] gives us that more of a like a frontline
[14:54] contact to say you know this is the
[14:56] issue that's blocking us and then you
[14:57] know we can go away get any evidence
[14:59] that we need any videos
[15:01] logs all that sort of stuff pass it on
[15:02] and then we can basically continue with
[15:05] our day um and then usually about four
[15:08] o'clock i'm
[15:09] heading off for the day
[15:12] to address some of the comments that are
[15:14] in the chat right now uh
[15:17] as as we've mentioned several times
[15:18] before in other shows
[15:20] 30ks are a kind of a blanket error it's
[15:23] for anything that causes a disconnect
[15:25] between you know the client and the
[15:27] server and
[15:29] it is the same
[15:31] result but it can be caused by
[15:34] dozens and dozens of different of
[15:36] different sources so when when
[15:39] when the very frustrating question
[15:41] bubbles to the surface why haven't they
[15:43] fixed the queue in the 30k it's actually
[15:46] we fixed nearly a hundred of them it's
[15:48] just that there are more it is a
[15:50] catch-all it is a when the system cannot
[15:53] be more specific
[15:55] this is the error that it gives so it
[15:58] often has many many many different
[16:00] causes
[16:01] um all right so
[16:03] first
[16:04] myth busted
[16:05] qa players just play the game the next
[16:07] one
[16:08] uh
[16:09] when when qa folks find bugs
[16:13] they immediately get fixed
[16:16] who wants to tackle this oh i wish oh
[16:19] wow
[16:20] and that touches on a bit of the things
[16:22] that people are saying about in terms of
[16:24] the 30ks and stuff as you know we
[16:27] probably uh have
[16:29] felt your pain um
[16:31] thoroughly every day you know while
[16:33] we're trying to test stuff as well
[16:36] it is definitely a struggle but we like
[16:39] i say like i mentioned for the last
[16:40] point we are information brokers um we
[16:44] deal the information but we don't get to
[16:45] decide when
[16:47] a developer has time to you know get in
[16:50] and actually fix the problem so unless
[16:53] it's something that is really severe and
[16:55] a lot of people are seeing quite
[16:56] consistently um it might be something
[16:58] that people have to de-prioritize
[17:01] um
[17:02] qa do try and raise flags about severe
[17:04] issues or things that we find
[17:06] particularly frustrating gameplay issues
[17:09] or you know particularly ugly art issues
[17:11] all that kind of thing
[17:13] but it is at the end of the day down to
[17:15] the developers to find time to fix that
[17:18] kind of stuff
[17:19] um they also have to find time to create
[17:21] new content and jam all of that in there
[17:24] and somehow get that released out to you
[17:26] guys honestly they do
[17:28] incredible work to manage to get that
[17:30] stuff done so yes unfortunately some of
[17:33] the you know more pertinent smaller bugs
[17:36] um may not get fixed for quite a long
[17:39] time uh but
[17:41] we commiserate and do please keep
[17:43] sending them in to us we love to you
[17:45] know try and
[17:47] um
[17:49] deal with the issues that the community
[17:50] call out particularly
[17:52] um and i mean george will have dealt
[17:54] with some aspect of that with your old
[17:56] job as well um didn't you with the
[17:59] player relations stuff yeah yeah so one
[18:02] of my bits and player relations was i
[18:04] believe it's become become more of an
[18:06] actual team now it was one of my jobs uh
[18:09] was with chris danks back in the day we
[18:11] used to whether there was a big patch
[18:12] we'd collate all the major information
[18:15] from the community like go into chat
[18:17] look at the issue council everything and
[18:20] find out what was annoying people most
[18:22] and send the top 10 over to qa to have a
[18:25] look through
[18:26] and get bugged up or linked to bugs
[18:29] which were already in and make sure
[18:31] every the developers were actually aware
[18:33] of the
[18:34] the community's pet peeves they're the
[18:37] worst ones affecting the people on the
[18:38] ptu
[18:41] you you you used a phrase uh
[18:43] earlier show the information brokers
[18:45] that i think is is a fantastic
[18:47] assumation of of
[18:50] one of the core tenets of being qa it's
[18:53] it's a lot of folks will
[18:57] a lot of the assumptions that we see
[18:58] publicly are that if a bug makes it to
[19:00] live and this is in any game no you know
[19:02] we're talking in general here anything
[19:04] from cyberpunk to
[19:06] you know to full release to us who are
[19:08] in alpha here
[19:10] the idea that there's the assumption
[19:12] that if a bug makes it the live it must
[19:14] not have been seen or it must not have
[19:17] been noticed or found and whatnot when
[19:19] the reality is often that
[19:21] these things have to be prioritized it's
[19:24] like anything else like we say quite
[19:25] often even with 700
[19:28] staff working in five studios around the
[19:30] world there are only so many things you
[19:32] can be working on at any given time and
[19:35] it is often a triage it is often a
[19:37] triage of figuring out what the most uh
[19:40] aggressive bugs what the most invasive
[19:43] bugs are and then
[19:45] just the ones that you can have
[19:47] solutions for not everyone has not
[19:49] everything that you encounter has a
[19:51] solution that becomes readily apparent
[19:54] and some things can't be fixed until
[19:56] other systems come online or other tools
[19:58] come online and it's you know it's
[20:01] important you know it's it it's it's
[20:03] it's it's super invasive and drives you
[20:06] and everybody else crazy but it's like
[20:08] the the tool that you need in order to
[20:10] be able to address it won't be ready in
[20:12] time so it's it's a it's a terrible
[20:14] terrible
[20:15] game of triage uh but one of the things
[20:18] i want to make sure that we that we uh
[20:20] uh
[20:22] uh that we demystify here is that they
[20:25] do not go out because they are not
[20:27] discovered i'm sure that happens you
[20:30] know sometimes occasionally but oh yeah
[20:32] but uh it is it is it is just usually a
[20:34] matter of triage it is it is i met you
[20:37] you guys are you guys are having the
[20:38] same reactions that the players do which
[20:40] is like
[20:41] yeah yeah definitely
[20:43] we do
[20:44] like my heart goes out to you guys
[20:46] because we we feel it too but yeah like
[20:49] jared says there are occasions where
[20:51] there are things that slip through the
[20:52] net um there are things that you know us
[20:54] as a team
[20:56] we have about a hundred um qa staff
[20:59] across all of our studios um and it's
[21:01] just it's not enough for a game of the
[21:04] scale when you've got thousands of
[21:06] people out there playing it so please do
[21:08] you know keep telling us about your
[21:10] stuff um
[21:11] you never know it might be something
[21:13] that we've missed along the way and we
[21:15] would love to kind of hear about your
[21:16] problems
[21:18] or enough reports can help change the
[21:20] priority the prior disease exactly
[21:23] exactly that cannot understate the
[21:24] importance of the issue council and
[21:27] folks participation in it
[21:29] yes absolutely and the new issue council
[21:31] is absolutely fantastic um so yeah
[21:33] definitely make the most of that and
[21:36] use it because those uh player
[21:37] experience guys are doing wonderful work
[21:40] with it
[21:41] all right so uh we're gonna we're gonna
[21:43] move into uh our next section which is
[21:45] about qa structure and how it works but
[21:46] i want to do one more myth before we
[21:48] before we move on to that
[21:50] qa
[21:51] are the enemies of developers
[21:54] the
[21:54] the the the antagonistic uh a
[21:57] relationship between developers in qa
[21:58] what do you have to say about that
[22:00] not at all
[22:02] yeah definitely not
[22:04] when it comes to um
[22:06] to devs and mqa obviously we are there
[22:10] to kind of somewhat ruin their day and
[22:13] we do come in and
[22:15] you know sometimes they'll just be
[22:16] something that they have not expected
[22:18] that crops up um
[22:20] but
[22:21] the vast majority of the time i i think
[22:23] we have a pretty good connection with
[22:24] the devs i none of them have called me
[22:27] names to my face um but yeah we work
[22:29] very closely
[22:31] um pretty much from the beginning of
[22:33] when a
[22:35] feature is being designed so for example
[22:37] at the moment
[22:38] in the run up to 315 we've got the um
[22:41] healing and inventory changes that are
[22:42] coming in
[22:43] um we've been working really closely
[22:45] with the active future team on that uh
[22:48] guys like chris parry um
[22:50] doing absolutely wonderful work and they
[22:52] help guide us and we help guide them so
[22:56] you know we we're all kind of striving
[22:58] towards that same goal of having a good
[23:00] quality product uh developers also test
[23:03] their own work so you know it's not just
[23:05] us that are coming around and saying hey
[23:07] it's broken if they go through and
[23:10] launch it up and something's broken they
[23:12] also don't want that so
[23:14] yes as much as it is kind of like a
[23:16] tom and jerry cat and mouse kind of
[23:18] a comedic relationship in theory um in
[23:21] reality we do have quite a good bond
[23:23] with those guys
[23:25] which is really fun um and honestly qa
[23:28] gets to touch on so many different areas
[23:31] of gameplay that we do have like a close
[23:35] connection with all of the devs say for
[23:37] example you know artists may never get
[23:39] the chance to work with a particular
[23:41] area um just because of the nature of
[23:44] their job
[23:45] um so it's really great to kind of have
[23:49] our tendrils in there and
[23:50] george being like uh directly in the
[23:53] network team
[23:54] obviously if you didn't have a good
[23:56] relationship with those guys that
[23:57] wouldn't work so well i mean i'm hoping
[23:59] this stuff's good
[24:01] yeah and i started going very
[24:02] [Laughter]
[24:08] also we kind of know
[24:09] potentially because we touch on
[24:11] everything we potentially know a bit
[24:12] more about other features than the devs
[24:14] because they'll be very focused on what
[24:16] they're doing there one little thing i
[24:18] mean for example back when i was doing
[24:20] ui stuff uh before when i was here
[24:23] before there was an occasion where
[24:25] literally they they did something and it
[24:27] it
[24:27] it impacted another system they hadn't
[24:29] even considered
[24:31] but the second we saw it we were aware
[24:33] and we obviously fed that back so it
[24:35] gives it so having that relationship
[24:37] with the teams it gives you via
[24:38] you've got the ability to give them them
[24:41] knowledge sometimes they don't
[24:42] necessarily
[24:43] have access to because they're so
[24:45] focused on their one little area that's
[24:47] a good point it can be very easy for
[24:49] developers to silo and and and and
[24:54] tunnel vision down into the thing that
[24:55] they're working and because the the qa
[24:58] the qa is embedded and and kind of this
[25:01] this viscous membrane that sits between
[25:03] all the different departments and
[25:05] whatever the the they're usually the
[25:06] first the many times the first time
[25:09] somebody goes you might want to check
[25:10] with this
[25:12] this team over here because what you're
[25:13] doing is going to affect uh what they're
[25:15] doing and stuff it it's really great and
[25:18] i also when you were telling the story
[25:20] just
[25:20] i often
[25:22] i often feel like the grim reaper
[25:24] because whenever whenever i approach
[25:26] this goes back more to when we were all
[25:28] in the office anything but whenever i
[25:30] would approach somebody's desk or
[25:31] whatever that you know there would
[25:32] always be this oh no jared's coming to
[25:34] ask me to be in a video or something
[25:36] jerry's asking me to be in his so so you
[25:38] know very often i would approach and
[25:39] then you'd see people like oh this is
[25:40] the time to get up and use the bathroom
[25:42] you know and go away and
[25:45] it just just this is the first time i
[25:47] realized that qa can sometimes uh
[25:50] probably have the same effect like when
[25:51] a qa person is going to say oh
[25:53] which one of my systems is broken and
[25:55] not working right now so
[25:57] i can relate
[25:58] [Music]
[26:00] yeah
[26:01] the embedded thing is i think is a good
[26:04] transition into our next section which
[26:06] is about cig structures
[26:08] so many qa teams in
[26:11] let's just put it this way
[26:13] there there's not one way to make a
[26:14] video game there's not one way to make a
[26:16] video game every video game developer
[26:18] out there every studio around the world
[26:20] does things in their own way and
[26:21] slightly different from one another
[26:23] but many many folks
[26:25] many companies will sequester their cue
[26:28] their qa they'll be in a different
[26:30] building altogether or on a different
[26:32] floor and whatnot we take a different
[26:35] approach here at cag and we
[26:37] take the word embedded uh very seriously
[26:40] we put our qa like right there in with
[26:43] the teams at the same at the same row of
[26:45] desks with the designers and the
[26:47] programmers and everything that are
[26:48] working on them uh talk to us about the
[26:50] qa structure yeah absolutely so
[26:54] like you say we do have those main kind
[26:56] of qa teams like jack's team like
[26:59] george's team that are the kind of
[27:01] main gameplay uh focused qa guys and and
[27:05] they run through together as like a team
[27:07] of qa
[27:08] granted they still do kind of contact um
[27:11] developers and work with them on that
[27:12] way
[27:13] but they're more of a kind of qa team
[27:16] so
[27:18] um
[27:19] we've got those main qa teams
[27:21] um like those in the uh uk and also in
[27:25] austin texas we have a few like um
[27:27] testers who work as part of like main
[27:30] teams like that
[27:31] as well as the core and the gameplay
[27:33] teams we also have a vehicles and fps
[27:35] team which i led for a short amount of
[27:38] time it was really fun to to kind of
[27:41] delve into the ships and the shooters
[27:44] kind of stuff basically
[27:46] um and then we also have the tech team
[27:48] who deal with everything editor-based so
[27:50] all of the kind of
[27:52] tools that our developers use that also
[27:54] need to work um so not just the game
[27:57] playing aspect of things also the game
[28:00] making aspect of testing too
[28:03] um but yes
[28:05] like george here we have
[28:07] multiple um embedded testers who
[28:10] basically
[28:11] are part of their teams
[28:13] directly so george is part of the
[28:16] network team we have people in the ui
[28:18] team audio team
[28:20] and basically they get to be
[28:22] the person who is the point of contact
[28:25] who knows everything about that
[28:26] particular area when it comes to qa we
[28:30] are generalists we try and do our best
[28:31] to provide info across
[28:33] the entire game uh but obviously you
[28:36] know we can't remember everything
[28:38] there's a lot of stuff um in terms of
[28:40] logging debug
[28:42] um i can't even get started on crashes
[28:45] there's so much with crashes we have a
[28:48] crash guide that is literally an hour
[28:50] read on its own um just all different
[28:52] sections
[28:54] so yeah it can get quite complex
[28:57] and having those embedded guys who are
[28:59] literally there to
[29:01] know the exact ins and outs of literally
[29:04] how to develop everything to do with
[29:06] that particular team is so so useful
[29:09] for general qa for the developers
[29:11] themselves uh it is a really really good
[29:15] kind of symbiotic relationship i guess
[29:17] that we have going on i mean george do
[29:19] you want to talk a little bit about your
[29:20] transition over to embedded
[29:23] yeah so it was kind of like a weird
[29:24] culture shock in a way and so before
[29:26] joining games i've went to like retail
[29:28] for almost 10 years and did my like
[29:30] degree and then started in qa
[29:32] and moved for like a few different
[29:33] departments so before i was on like live
[29:35] release so what game play is now so we
[29:37] you know good test like the features
[29:38] before they go live um then i moved on
[29:41] to the core team which jack is on now
[29:43] and then i moved over to tech and then
[29:46] then i moved over to the resource team
[29:48] with sam for a good like couple of
[29:49] months and then i ended up moving on to
[29:51] the embedded team um so it's quite weird
[29:54] of a culture shock because the first
[29:55] thing that i thought would go into an
[29:57] embedded team was like you know i need
[29:58] to make sure everything's good so you
[30:00] know if i see a texture bug i need to
[30:01] like bug it up which you know that is
[30:03] the promise but usually when you're in
[30:05] embedded thing you just focus on the
[30:06] stuff that your team does because that's
[30:08] why you're there um
[30:10] you know you're running around trying to
[30:11] fix all of these things like bug all of
[30:13] these things up and it's like no just
[30:14] take a minute calm down fix your network
[30:17] stuff bug your network stuff up and then
[30:18] relay that to the devs um
[30:21] and that's the kind of the way the team
[30:22] works i think the biggest thing is that
[30:23] when you're like a generalist qa is that
[30:26] you know you're not really talking to
[30:27] debs like on a day-to-day basis really
[30:28] because you're more like relating to
[30:30] your seniors or your leads
[30:32] um whereas you know going on to an
[30:33] embedded team you know you're talking to
[30:35] you know your lead who's obviously an
[30:36] engineer developer and plus like your
[30:38] seniors and the junior programmers and
[30:40] all that like on a day-to-day basis um
[30:42] and when sam was saying before you know
[30:44] it's like a catch-22 so when people say
[30:46] you know oh you know qa or dennis must
[30:48] hate qa because you know they're always
[30:49] finding these bugs you know can't they
[30:51] just stop so we can do other things but
[30:53] at the end of the day it goes hand in
[30:55] hand so you know i'll go to like my lead
[30:57] or my senior and be like oh you know i'm
[30:59] not too sure how to use this specific
[31:00] tool or command or something and it'll
[31:02] come back at me but oh you know it does
[31:04] this it means xyz um and kind of the
[31:06] same vice versa as well so you know if
[31:08] dev is in game and they're not too short
[31:10] like a specific thing because you know a
[31:12] lot of the things in game do change
[31:13] quite rapidly as well because because
[31:15] the game is huge and then it comes to
[31:17] somebody you know i'm not sure how i do
[31:18] xyz so then we'd go and help them do
[31:21] what they need to do in order to check
[31:23] their fixes have taken basically
[31:27] yeah anybody else
[31:32] you want to add anything
[31:34] but i think we kind of
[31:36] somewhat touched on the the aspects of
[31:38] it from the uh the day-to-day stuff but
[31:41] yeah like george says it's kind of the
[31:43] different dynamics of we have like qa
[31:46] teams and then we have our embedded guys
[31:48] um
[31:49] and then we have like the squadron team
[31:51] which is kind of a hybrid between
[31:53] embedded and also being its own kind of
[31:55] small team of qa
[31:57] which uh those guys did great work as
[31:59] well right so so the structure and the
[32:01] format is malleable depending on the
[32:03] needs of that particular aspect of game
[32:06] development
[32:07] definitely
[32:08] uh let's talk a little bit about the
[32:11] the relationship to the rest of the
[32:13] developers uh you guys are up
[32:16] you guys are sometimes you guys are
[32:17] sometimes asked to do more than just
[32:20] test like like we talked about that at
[32:22] the top of the show sam you must you
[32:24] most famously flew the the character in
[32:26] the uh the jump point demo at citizencon
[32:29] two years ago uh
[32:31] what what are these what are these other
[32:33] aspects of your job besides just testing
[32:35] and writing up bugs
[32:37] yeah
[32:38] so yeah obviously the the most obvious
[32:41] one i can point to is the stuff like
[32:43] where we get to be involved in the
[32:45] citizencon uh playthroughs that kind of
[32:47] thing is super fun i know george did
[32:50] some work on the um testing for the
[32:52] citizencon stuff as well
[32:54] um but yeah being able to like perform
[32:57] that live and kind of do that in front
[32:59] of a crowd is a little bit of a
[33:00] different skill than my day-to-day kind
[33:02] of
[33:04] just me and the two monitors kind of
[33:06] testing um
[33:08] very nerve-wracking uh but super fun
[33:11] um so yeah we we do things like that we
[33:13] do uh game playing for marketing footage
[33:16] as well so say for example if they've
[33:18] got a particular feature they want to
[33:20] highlight um sometimes we'll get key way
[33:23] to do particular maneuvers or capture
[33:25] particular footage and game
[33:27] um
[33:29] but yeah live playthroughs and stuff
[33:31] like i said on the stage or we sometimes
[33:33] do recorded playthroughs of things as
[33:35] well uh four citizencon we play
[33:38] sometimes during review meetings so say
[33:41] for example they're reviewing a future
[33:43] for the directors kind of want to see
[33:45] how a particular
[33:47] aspect of gameplay is going um in terms
[33:50] of
[33:50] in-client how is it actually looking um
[33:53] will sometimes get involved with those
[33:55] so that can be a bit nerve-wracking as
[33:57] well um
[33:59] but probably doesn't quite match up to
[34:01] you know sitting on stage with cr there
[34:04] and todd just there
[34:07] it cannot be overstated how much you
[34:09] don't want developers playing their own
[34:11] game uh
[34:13] it's just it's we we've showcased it on
[34:15] a couple the friday live streams in the
[34:17] past and there's a reason we don't do it
[34:18] anymore it's a let's just say the skill
[34:21] set that is required to make a game
[34:24] and the skill set that is required to
[34:26] play a game
[34:27] are are our if it were a venn diagram
[34:30] there would be two separate circles
[34:35] which always surprises people that when
[34:37] they jump into game with the people who
[34:38] make the game or whatever like why are
[34:40] they so bad at their own game i'm like
[34:42] different skill sets folks yeah
[34:44] difference fully
[34:45] especially the art kind of based stuff
[34:48] uh those guys barely got just where they
[34:50] were
[34:51] good at playing the game
[34:53] that transfer over
[34:55] um yeah let's talk about working
[34:56] alongside the community i think the last
[34:58] pillar of cig structure here you've got
[35:01] how you work with the devs and
[35:03] and and stuff like this but let's talk
[35:04] about working alongside the community uh
[35:07] we famously have our issue council we we
[35:11] we we take the extra step of deputizing
[35:13] uh a a a giant chunk of our community in
[35:17] order to uh help us and inform us and uh
[35:21] help with regression and stuff like this
[35:23] uh talk to me about that what's that
[35:24] like does that make your job easier does
[35:26] it make your job harder
[35:27] please say it's easy
[35:30] it definitely doesn't make it harder now
[35:32] um
[35:33] i mean it maybe it gives us a little bit
[35:35] more work to do but there's always
[35:36] plenty of work to do with star citizen
[35:38] so that's totally fine now uh we work
[35:40] really closely with the player
[35:41] experience guys um to kind of
[35:44] investigate those issues that come in
[35:46] from issue council
[35:48] like i said those top 10 issues do come
[35:50] to us we do look into them we do make
[35:53] sure they're updated on the database so
[35:56] you can you know rest assured we are
[35:58] definitely touching your bugs like we do
[35:59] see them and we do appreciate all of the
[36:02] kind of info that you can give us about
[36:04] those particular issues especially if
[36:06] it's something that's on and off um
[36:08] sometimes having that stuff from the
[36:11] issue council is the key to us finding
[36:13] out exactly where to go and how to you
[36:16] know provide the right debug um you know
[36:19] if it's a particular
[36:21] thing that we didn't think along the way
[36:23] a step that we were missing um that's
[36:26] super useful to have
[36:28] um we also do outside of the issue
[36:30] account stuff we do take things from the
[36:32] community from the forums
[36:35] if there are like feedback things that
[36:37] we think are probably bugs we do pick up
[36:40] those as well
[36:42] um videos um you know for example on
[36:45] youtube all of our content creators
[36:47] there and streamers
[36:49] we do get a lot of that content sent
[36:51] through to us and kind of say hey uh
[36:53] have you seen this happen is there a bug
[36:55] for it help um and we'll usually trawl
[36:58] through our database for that um so yeah
[37:01] it's really kind of an interesting
[37:03] position here at cig especially in
[37:06] comparison to other qa roles i've done
[37:08] in the industry where we are fully
[37:10] tight-knit with the community um
[37:13] because we are releasing constantly and
[37:15] it's it's an experience i've just never
[37:17] had before
[37:19] when you're working on a project that is
[37:21] going to be released and kind of shipped
[37:23] off and
[37:24] you know nobody else is looking at it it
[37:26] gives you a whole other perspective um
[37:28] and you know you're able to do those big
[37:31] load testing of
[37:32] thousands of people or you know 50
[37:34] people to a server every single time um
[37:37] which we don't often get to do in qa so
[37:39] that's really really um
[37:42] kind of
[37:43] you know an experience i didn't expect
[37:45] to have when i came to this job i guess
[37:48] and has been really interesting it is
[37:50] like having another crew of testers that
[37:52] could basically help us sweep
[37:54] everything that we need to do
[37:56] i mean how have you guys found
[37:57] interacting with the community um
[38:00] i mean i know we've kind of touched on
[38:01] it with george but
[38:03] it's it's really really useful because i
[38:04] know back
[38:06] uh i keep saying back in the day
[38:09] back in the day
[38:10] there um
[38:11] there was an issue we had uh levski
[38:14] where occasionally everything would go
[38:16] psychedelic colors and
[38:18] we saw it
[38:20] three four times in testing and we
[38:23] couldn't repro it there's nothing we
[38:24] could do it just happened
[38:26] every so often and so we couldn't work
[38:29] out what was causing it at all
[38:30] and obviously it then went to the pt
[38:33] went to the ptu to to be tested and and
[38:35] actually because it gives you those
[38:37] extra people throwing it and we could
[38:39] see what was causing it and things and
[38:41] passed that on
[38:43] past that on
[38:44] and it was it's so useful to have that
[38:46] information to be able to feedback and
[38:48] certainly in situations like that with
[38:49] things which are
[38:51] ultra low reproduction some chance of us
[38:53] reproducing them in gen in in standard
[38:56] testing are
[38:58] it's just luck whether it's we get it
[39:00] and we can reproduce the what caused it
[39:03] or even work it out at the time
[39:07] so we're talking about
[39:09] you're right now we're talking about you
[39:10] know the players the communities and how
[39:12] they can help with the testing is there
[39:14] any
[39:15] i'm looking at the chat here are there
[39:17] any uh
[39:19] guidances advices that you can give the
[39:22] community for when they're filling out
[39:24] their
[39:25] issue council reports thanks to to look
[39:27] out for things to avoid
[39:30] yeah
[39:31] so i mean for starters things like video
[39:34] footage and um screenshots obviously if
[39:37] you can provide that kind of physical
[39:39] evidence it makes it a lot easier for us
[39:42] to kind of maybe
[39:44] see things that perhaps you don't know
[39:46] the particular word for um externally so
[39:49] having those videos are really useful
[39:52] um
[39:54] particularly mentioning the types of
[39:56] ships and the like variant of ship that
[39:59] you are encountering an issue in can be
[40:02] really useful to us actually um a lot of
[40:04] bugs end up being you know specific to
[40:06] certain manufacturers or certain types
[40:08] of ships because of the way that they're
[40:10] set up so if it is a ship's book maybe
[40:14] going into detail about
[40:15] the ship that you have whether you've
[40:17] changed the loadout um for example if
[40:20] you've changed any of your
[40:22] settings so keybinds or um
[40:26] graphics settings that kind of thing
[40:28] um
[40:29] really honestly the more info you can
[40:31] provide
[40:32] the better basically do you guys have
[40:34] any other suggestions for things that
[40:36] people could provide
[40:38] not really i don't think i've ever seen
[40:40] an issue council bug and gone oh no
[40:42] they've given me too much information
[40:44] please add less tr bugs like the more
[40:46] you can give me the happier i am because
[40:48] it gives me like
[40:49] a much better starting point to try and
[40:52] reproduce what you're seeing in game if
[40:54] you've given me loads of information i
[40:56] can just jump in game get to it straight
[40:58] away and go like that it
[41:00] i can still do that if you've given me
[41:02] less information but it might take me a
[41:04] bit longer yeah
[41:07] so yeah the more information the better
[41:09] really
[41:10] don't don't think
[41:12] don't think oh that's been there forever
[41:15] they will they'll know about it because
[41:17] we might not it might be something which
[41:19] has been missed and missed and missed
[41:21] and if you raise it
[41:23] we'll then go look and check and we
[41:25] might even go oh that's gotta be and
[41:26] it's it's it's been like that for that's
[41:28] something which has been there for ages
[41:29] and then we'll go search and we won't
[41:31] find it so even if you think we must
[41:34] know
[41:35] let us know about it
[41:36] or it could be something that was
[41:37] de-prioritized and every time it happens
[41:40] and that can help to
[41:42] up the prioritization of it so you know
[41:44] so so just because you see it already
[41:47] just because you think oh they must
[41:48] already know about it already does not
[41:51] stop submit that submit that submit that
[41:53] it helps in a number of ways
[41:56] exactly
[41:57] let's go to our our our our third pillar
[42:00] today's show here we've talked about you
[42:03] know general myth busting of q and a
[42:05] we've talked about the structure of q
[42:07] and q a q and a of qa and how they work
[42:12] within cig
[42:14] sam you are the resource lead yeah your
[42:16] your unique uh attendants are
[42:20] are maybe best served for training stuff
[42:22] we've actually had several people in the
[42:23] chat to today already talk about you
[42:26] know can you take us through some of the
[42:28] training uh some of the resources now
[42:30] obviously
[42:31] training for qa we've only got 20
[42:32] minutes left in the show we're not going
[42:34] to be able to do the full thing but but
[42:36] but give us a high level what is what is
[42:38] what is training for qa involved because
[42:40] it is often an entry-level uh position
[42:42] for game development yeah absolutely and
[42:45] like i say we've been taking on a few
[42:47] people that are coming from the
[42:48] community who don't have any experience
[42:51] or education in games it can help
[42:53] obviously if you have that kind of
[42:55] background but even i coming from a
[42:57] place where i had qa experience learning
[43:00] star citizen was kind of its own uh
[43:03] mountain to climb so
[43:05] it is kind of
[43:07] um
[43:09] something that we we thought about in
[43:11] the qa department and we wanted to kind
[43:12] of prioritize
[43:14] making sure that the people coming
[43:16] through
[43:17] knew the game knew what they were doing
[43:19] and were able to kind of get into work
[43:21] and test the project quickly i guess
[43:25] so yeah
[43:26] when it comes to a project like ours
[43:28] with the longevity of the project it is
[43:31] super worth it to invest a good amount
[43:34] of time into fully training our people
[43:36] from scratch
[43:37] um
[43:38] and yeah for just from our guys i mean
[43:41] um jack
[43:42] did kind of you had like a bit of
[43:44] university games and indie background
[43:47] before coming into qa didn't you yeah so
[43:50] i did like um some game stuff at
[43:51] university and i was in like a much
[43:53] smaller company for people uh before i
[43:56] got to star citizen
[43:57] um and i think that does help um but i
[44:01] would say it's like in no
[44:04] way required
[44:05] uh i don't think during training there
[44:07] was any point where i was like oh i did
[44:08] it at university so i'm
[44:10] so much better than everybody else who
[44:11] hasn't done it everybody was kind of
[44:13] just there like
[44:14] oh wow this is a lot of stuff to learn
[44:16] here
[44:18] thrown in the deep end and yeah you know
[44:21] george h coming from retail uh george
[44:24] hess was literally in the navy before
[44:27] you came to uh cig so you know it really
[44:31] you can come to this career
[44:33] from pretty much anywhere as long as
[44:35] you've got the passion for it and you
[44:37] show us that you are willing to learn
[44:39] then i i love to take new people who are
[44:42] just you know passionate about star
[44:45] citizen and i want to test it and make
[44:47] sure it's good so when it comes to the
[44:49] actuality of what we do with the
[44:51] training uh we take all of our new
[44:53] starters here on an 18-day crash course
[44:56] through everything um star citizen
[44:59] um for starters that first uh week is
[45:02] kind of just game familiarization
[45:04] obviously we do need to be able to play
[45:06] the game so for those of us who maybe
[45:09] haven't played star citizen before but
[45:10] even those who have um it's good to get
[45:13] some time to dedicately sit down with
[45:16] each area kind of go through bit by bit
[45:18] we start off with some game basics
[45:21] being able to get your ship fly around
[45:23] go from place to place then we go
[45:25] through missions so all of the kind of
[45:28] contracts that we have in game through
[45:30] contract manager
[45:31] mining which now is quite an in-depth
[45:34] thing um in terms of you know we have
[45:36] the ship mining ground vehicle mining
[45:39] fps mining all that kind of different
[45:41] stuff so we have a full day dedicated to
[45:43] just kind of
[45:44] getting those down um then we kind of
[45:47] touch on our other areas as well like um
[45:50] arena commander and star marine and
[45:52] theaters war
[45:53] so
[45:54] i mean uh
[45:56] you know that thing that we are working
[45:58] on hehe um so yes we do touch on the
[46:02] many game areas as well to make sure
[46:04] that everybody's kind of up to date with
[46:06] all of those
[46:07] after we do that
[46:10] [Laughter]
[46:13] if you were at the citizencon that um i
[46:16] kind of was on stage for you might have
[46:18] got the chance to play theaters of war
[46:20] there actually they had a really cool
[46:22] setup room for that
[46:24] yeah it's it's really good stuff and i'm
[46:27] hoping that you guys can kind of play it
[46:28] soon
[46:29] but yes
[46:30] after we've done all of the game playing
[46:32] stuff we move on to the technical
[46:35] aspects of things so that is all of our
[46:37] test commands and
[46:41] what we call kind of c-vars so allowing
[46:43] us to kind of
[46:45] get all of that debug information go
[46:47] from place to place much faster um say
[46:49] for example we have go-to commands that
[46:52] allow us to zip from planet to planet
[46:55] in an instant uh which saves us a lot of
[46:58] time while testing as i'm sure you guys
[47:00] are aware it takes a while to get from
[47:02] planets planet naturally
[47:04] um
[47:05] how to run our internal builds like jack
[47:07] was talking about before we do spin up
[47:09] our own uh separate servers and kind of
[47:13] run basically what we call development
[47:15] builds which allow us to get a lot more
[47:18] debug information development
[47:19] information that you can't get on the
[47:22] live servers
[47:24] our internal editor as well we do touch
[47:27] over some basics for that even though
[47:29] most of our testers don't usually um
[47:32] dabble too much in editor we do kind of
[47:34] give them a little bit of basics around
[47:37] how to actually set that up um
[47:39] [Music]
[47:40] and then we start to move on to things
[47:42] like
[47:43] say for example qa basics
[47:46] uh writing books uh what kind of
[47:48] evidence that you need to provide for
[47:50] certain books and what kind of rules you
[47:52] need to follow while writing books
[47:54] searching for books
[47:56] uh testing
[47:57] like existing books that kind of thing
[48:00] and then lastly uh we do crashes which
[48:04] yeah it does take a little while to kind
[48:05] of go through all of those um yes
[48:09] while you guys are well acquainted with
[48:11] the 30k they do come in many different
[48:15] flavors um internally and because of
[48:18] that we kind of have to know how to deal
[48:20] with each one um
[48:22] which can take a little while but once
[48:24] you've kind of got wrapped your head
[48:25] around the basics um i would say that's
[48:27] probably one of the most technical and
[48:29] difficult things that we have to do in
[48:31] qa so once you've got that down
[48:33] you're pretty much on your way
[48:37] how has work from home
[48:39] changed this process
[48:41] yeah so i mean since we have started
[48:44] working from home
[48:46] literally
[48:47] all of these guys have kind of come in
[48:49] during the working from home um time i i
[48:53] literally have never seen any of these
[48:54] guys in office which is a crazy thought
[48:56] to think about now um it's strange
[48:59] my brain kind of places people in the
[49:01] office as if they were there the whole
[49:03] time everything's very flat
[49:05] yeah
[49:06] i have no idea what height they are i
[49:08] just kind of guess um
[49:11] yeah it's it's been a huge challenge to
[49:15] kind of
[49:16] adapt everything to working from home
[49:18] but honestly through
[49:20] doing voice chats each day um kind of
[49:23] just while we're working we'll kind of
[49:25] use voice chats to each other it kind of
[49:27] almost feels like being in the office
[49:29] these days and it's really useful for me
[49:32] um to be able to like screen share while
[49:34] i'm walking through particular things i
[49:36] do miss the aspect of being able to kind
[49:38] of lean over and help kind of guide
[49:40] someone directly but you know we we do
[49:43] our best and
[49:44] you know the wonders of technology have
[49:47] kind of allowed us to do a lot i mean
[49:49] how was it for you guys starting a new
[49:51] job while working from home
[49:53] it was actually it's really good it was
[49:55] really really well done it was a bit
[49:56] weird on the first day but it was so
[50:01] it was so it so smooth so
[50:05] so just basically straight into it it
[50:07] didn't really feel
[50:09] any different from starting a job
[50:11] anywhere else it sounds daft it
[50:14] which is good
[50:15] that's good how about you jack
[50:18] um it's
[50:20] it's been an interesting experience um
[50:23] it's it's been very different that there
[50:26] are times in training um and even like
[50:29] after you finish your training because
[50:31] 18 days sounds like a lifetime of
[50:34] training you've barely scratched the
[50:35] surface um
[50:37] there are times
[50:39] when you're new and you're unsure about
[50:41] things that it is
[50:43] a little a little bit anxious a little
[50:45] bit stressful not having a person in the
[50:47] room with you to kind of like if it all
[50:48] goes horribly wrong just like jump in
[50:50] and like fix it for you do have to be
[50:52] like
[50:53] a little bit independent and kind of
[50:56] work with
[50:57] people kind of talking in your ear like
[50:59] okay
[51:00] i know it sounds terrible but it's not
[51:02] actually that bad we've seen this before
[51:03] it's fine what you need to do is this
[51:05] this and this
[51:07] i think during the training period that
[51:09] is a consideration but
[51:13] you kind of you work through it um
[51:15] and
[51:16] i hope it's all worked out no one's
[51:18] fired me yet so i must be doing
[51:20] something okay
[51:22] he's doing pretty okay
[51:24] i guess
[51:25] jijin in the chat says it weirdly
[51:27] doesn't feel live to me is the show live
[51:29] no
[51:32] i pre-recorded this it's not live yeah
[51:34] we pre-recorded this in the second three
[51:36] weeks here on the live chat now just
[51:38] means that you have no free will and
[51:40] that you were pre-destined to be here
[51:41] and chat today and ask this question
[51:48] with that we've got a couple minutes
[51:49] left uh let's uh let's let's jump into
[51:52] some uh of the chat questions um how
[51:55] much automated regression testing are
[51:57] you able to implement uh
[52:00] versus inefficient and messy manual
[52:03] testing ooh this person doesn't like the
[52:04] manual testing so my biases show
[52:07] yes your biases are showing
[52:09] that that's totally fine i understand
[52:12] yeah so actually i mean automating uh
[52:15] testing for a project like this is is
[52:17] quite challenging to say the least
[52:20] um
[52:21] as it stands we are moving slowly
[52:23] towards being able to kind of um
[52:26] automate certain test cases we do have a
[52:28] guy who is embedded automation actually
[52:30] and he is working slowly towards making
[52:33] it more available to all of us but we do
[52:36] have a couple of things that we use
[52:38] internally already i know george on your
[52:40] time on the tech team
[52:42] you might have touched on some of this
[52:43] stuff with test runner
[52:45] yeah that's correct so test runner would
[52:47] you know it would grab a build and you
[52:48] know run through like basic sanity
[52:50] checks it doesn't go too in-depth
[52:51] because obviously when you be obviously
[52:53] making an internal development building
[52:54] and run it through test run it can take
[52:56] a few hours to do that so it goes
[52:57] through the basic checks and and
[52:59] obviously when we try and grab a build
[53:00] it'll give us all the information so you
[53:02] know this was fine this was fine this
[53:03] was fine but this was broken but
[53:05] sometimes we can get around it because
[53:06] it's not like a core thing that you know
[53:08] would stop us from testing but there
[53:10] have been cases you know we tried to
[53:12] grab builds and you know it would just
[53:13] break continuously um but that's where
[53:16] test runner kind of picks that things up
[53:17] so we can kind of identify that before
[53:19] we go into game to say you know we need
[53:21] to do this task but this build is broken
[53:23] what do we do kind of thing and then
[53:25] obviously it's usually just the devs
[53:26] will go and fix it you know asap kick a
[53:28] new build or we just like usually revert
[53:29] back and then carry on the testing
[53:31] yeah exactly it's mostly kind of launch
[53:34] sanity checks and that kind of thing
[53:36] yeah basically yeah very basic pass
[53:38] fails at the moment but we are working
[53:40] our way towards it and it is something
[53:42] that we are very interested in so if you
[53:44] are you know an authority on automated
[53:47] testing you know please do come in we
[53:49] would love to hear your opinions
[53:53] um
[53:54] what is your most valuable virtue in qa
[53:58] and why is it patience there's a lot of
[54:00] leading questions
[54:04] i think jack can answer this the best to
[54:06] be honest
[54:07] you deal with the most crashes on your
[54:10] team
[54:12] the stream i work on is notorious for
[54:14] being uh potentially the least stable
[54:16] one in the game um
[54:19] i think
[54:20] the patience is obviously a big part of
[54:22] it but i think the thing i've er used
[54:25] the most since i moved on to the core
[54:27] team is
[54:28] my memory remembering things a lot of
[54:31] issues
[54:32] tend to maybe disappear and then come
[54:34] back
[54:36] and after a while you just kind of like
[54:37] remember like the really bad ones so
[54:39] something might appear that's been gone
[54:41] for like three months and you can just
[54:42] look and go oh i know exactly what that
[54:44] is i've seen that before and you'll go
[54:46] and you'll find and you'll link it back
[54:48] up and you'll escalate with the devs and
[54:50] go this has started happening again
[54:53] what did you do please
[54:55] please help
[54:57] the other one i'd say is curiosity quite
[54:59] a bit because you find which isn't quite
[55:01] right and you pull the string and then
[55:03] you find something else and then you
[55:04] find something else and then you find
[55:06] something else yes
[55:08] i think that is a lot of what a lot of
[55:11] people don't really understand about qa
[55:12] sometimes is that you know there's one
[55:13] thing and you think oh you know that's
[55:15] fine it's an easy fix but then that will
[55:17] branch off into 100
[55:18] thousand different things that you know
[55:20] that needs to be fixed so does that so
[55:22] does that so does that before this main
[55:23] thing can be fixed it branches off so
[55:25] much game dev is so complex it's crazy
[55:28] yeah
[55:30] it's a
[55:31] i really like that i don't think that
[55:32] can be understated it's
[55:35] the one thing we can't teach is that
[55:38] curiosity that inquisitiveness that that
[55:41] ability to you know not just see
[55:44] something and go oh i know what that is
[55:45] that's that and then leave it at that
[55:47] move on it's looking under the hood and
[55:50] pulling on that string the proverbial
[55:52] string as you said and just watching the
[55:54] entire sweater come coming down and then
[55:56] knowing that you know the developer that
[55:58] you're sitting next to the programmer is
[55:59] like
[56:00] you're just you're creating more and
[56:01] more work for this person but it's like
[56:03] you have to keep pulling you're just
[56:05] kind of looking at them like i'm like
[56:06] i'm sorry
[56:08] i'm sorry
[56:10] it doesn't work
[56:11] so sorry
[56:13] i got
[56:14] paid for this i guess
[56:17] uh all right uh we are just about done
[56:19] uh the last question i see here from the
[56:21] from the chat says uh what is your what
[56:23] is your favorite aspect of working in qa
[56:25] uh i don't want to be too
[56:27] it's a little too uh
[56:30] i i don't know it's a saccharine for me
[56:33] so i want to ask what's your least
[56:35] favorite aspect of working in qa and
[56:37] then we'll do the favorite
[56:38] because there's kind of everybody's got
[56:40] something they wish were different
[56:42] um
[56:45] crashes are the main bug bear especially
[56:47] you know you're working on a test you
[56:48] get right to the end and the server's
[56:50] gone you're like
[56:52] absolute pain in my life
[56:55] you're just trying to get something all
[56:57] set up you've been with somebody else
[56:59] multiple people you just set up to do
[57:01] something get something tested and nope
[57:04] yeah
[57:05] yeah you you're managing to like kind of
[57:07] hook up your thing you're about to like
[57:09] catch the bug that you've been hunting
[57:11] all day and then
[57:13] the pop-up a completely unrelated
[57:16] crash yep yeah completely something else
[57:18] and you're like no i don't have time for
[57:20] this that's not the one you wanted
[57:23] you're not the crash i'm looking for i'm
[57:25] looking for this one not you
[57:28] oh yeah every time yeah i guess that
[57:31] would probably be my least favorite
[57:32] aspect
[57:34] when when bugs kind of pop up in in the
[57:36] search for other books and you just kind
[57:38] of have to go not now
[57:41] shh
[57:43] the things i'll have to look into later
[57:45] yeah
[57:46] the good old
[57:47] sticky note of
[57:49] unloved books yep now we can now we can
[57:52] do what's your favorite
[57:55] oh
[57:56] i would have to say the amount of things
[57:58] that we learn we learn so much in qa
[58:00] whether it's like a kind of like a parts
[58:02] of like a dev kind of thing and just the
[58:04] game and just like general how you know
[58:06] how games are put together i mean i mean
[58:08] i love learning things so that's what i
[58:10] love about qa it's just you know being a
[58:12] sponge of knowledge
[58:17] for me it's it's there's a lot of
[58:18] different things but the thing i think i
[58:20] enjoy the most is stuff it's the people
[58:21] it's such a a good vibrant group of
[58:24] people who even when you're having the
[58:27] horrible crashes you'll be you'll be
[58:29] able to have a joke and have a laugh and
[58:31] it's if it wasn't for a good group of
[58:32] people i don't think you i don't think
[58:34] you could i could do it so but it's such
[58:36] a good group people
[58:38] you're lucky we let you back in
[58:40] [Laughter]
[58:43] what about you jack
[58:46] well should have gone before george
[58:48] because i was to say the same sort of
[58:50] thing i think um
[58:52] especially on the game dev stream which
[58:54] does
[58:55] tend to have some minor issues with
[58:57] stability
[58:58] you do form a real sense of like
[59:01] camaraderie with like the people around
[59:02] you because it's not just you it's
[59:04] having like a horrible time and you've
[59:06] been trying to get into game for four
[59:07] hours and you've not made it past the
[59:08] main menu yet it's you and seven other
[59:10] people who are also having a horrible
[59:12] time and haven't made it past the main
[59:13] menu yet
[59:14] kind of oh friends for life forged in
[59:17] that fire together i feel bad about
[59:19] knowledge and everyone's like about
[59:21] people
[59:22] i do love everyone i work with by the
[59:24] way that's too late josh you don't like
[59:25] that please
[59:28] i i understand george i am
[59:31] and how about you sam
[59:33] um yeah i guess as as well as being able
[59:35] to kind of
[59:36] do do the same things as those guys i
[59:38] love learning stuff i love kind of
[59:41] picking the brains of all the different
[59:43] developers especially you know the big
[59:45] brain people like the directors who just
[59:47] know
[59:48] so much about how to make everything
[59:51] cutting edge um
[59:55] it's difficult um i guess just generally
[59:58] being able to work to support games is
[1:00:01] something that i really kind of enjoy
[1:00:03] when i came out of university i did an
[1:00:05] animation degree and i
[1:00:07] hated animation i came out of it i was
[1:00:09] like never again never again in my life
[1:00:12] but i knew i still wanted to kind of
[1:00:14] support developers and i knew i wanted
[1:00:16] to support games development and do that
[1:00:18] kind of stuff because that is something
[1:00:19] i'm so passionate about i didn't have a
[1:00:22] clue what i wanted to do and
[1:00:24] just kind of fell into qa by pure chance
[1:00:27] um just because it was something that
[1:00:29] was entry level and you know everybody
[1:00:32] could kind of have a go at and
[1:00:34] i ended up staying here um because i
[1:00:36] love it so much so yeah i think it is
[1:00:39] just something that really is an
[1:00:41] interesting career and
[1:00:43] um
[1:00:44] really kind of
[1:00:45] is is
[1:00:46] a way to get your fingerprints on a game
[1:00:49] um and kind of
[1:00:51] put your influence on a game's
[1:00:53] development um
[1:00:55] you know without having to necessarily
[1:00:57] be a creative or something along those
[1:00:59] lines
[1:01:00] and for those of you who are watching
[1:01:02] either live on twitch or on youtube on
[1:01:04] the replay if you're interested in
[1:01:06] pursuing a career in quality assurance
[1:01:08] you can check out the
[1:01:08] cloudemperiumgames.com
[1:01:10] jobs website we got studio we have six
[1:01:13] studios around the world now we got la
[1:01:15] we got austin we got manchester we got
[1:01:18] darby or derby depending on how you
[1:01:19] pronounce it we got frankfurt and we've
[1:01:21] got our newest studio in montreal so
[1:01:24] lots of opportunities there to join the
[1:01:26] team and help make star citizen uh the
[1:01:28] best damn
[1:01:30] i was going to say space sun but it's so
[1:01:32] much more at this point aiming to be so
[1:01:34] much more at this point best damn video
[1:01:35] game of all
[1:01:36] time i'm gonna get crap for that
[1:01:39] afterwards all right
[1:01:41] sam
[1:01:42] jack
[1:01:43] george george i'm jared thank you so
[1:01:46] much for joining us here on star citizen
[1:01:47] live uh tune in for inside star citizen
[1:01:51] next week we are taking a look at
[1:01:53] hospitals
[1:01:54] the new hospital and a new babbage in
[1:01:57] oars in general the grim hex one which
[1:01:59] is surprisingly cool and of course the
[1:02:01] clinics that are coming along and well
[1:02:03] as well as exploring
[1:02:05] behind the scenes of the gold standard
[1:02:06] work going on for the saber the gladius
[1:02:09] and the retaliator first so stay tuned
[1:02:10] to that and then we'll be back here next
[1:02:11] friday with uh something i don't know
[1:02:14] yet we'll figure it out uh take care
[1:02:16] everybody
[1:02:17] godspeed hi guys uh see you in the verse
[1:02:21] thanks for watching everyone i've only
[1:02:23] been doing this for like seven years i
[1:02:24] should figure out how to end a show
[1:02:27] sometimes i should figure out how to end
[1:02:29] the show
[1:02:47] you

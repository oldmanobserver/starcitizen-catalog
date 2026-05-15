# Star Citizen: Calling All Devs - Of Golf Balls and Tessa

**Video:** https://www.youtube.com/watch?v=TJSk3xaEc7k
**Date:** 2018-02-05
**Duration:** 23:39

## Transcript

[00:11] everybody and welcome to another edition
[00:13] of calling all deaths the only weekly
[00:14] Q&A show where you get me asking
[00:17] questions that you guys submit you guys
[00:18] vote on putting them to the developers
[00:20] it's our new thing on Mondays with is
[00:23] our fourth or fifth episode now I'm
[00:24] losing track let's just get right to it
[00:26] shall we
[00:26] alright so starting off the show this
[00:28] week a question that I think is on a lot
[00:32] of people's minds I know just the person
[00:35] to call for it it's chad mckinney here
[00:37] in our lawson studio Chad Chad how you
[00:40] doing man hey well welcome to calling
[00:42] all Deb's is your first time on the show
[00:43] yeah I'm excited
[00:47] alright so I've got a question I've got
[00:49] a question for you that uh it's on
[00:51] everybody's people have been I don't
[00:53] needs no introduction
[00:55] what is golf citizen where's golf ball
[00:58] citizen is ping-pong citizen what's
[01:00] going on here well it's a it's an
[01:03] entertaining bug that's happening the
[01:06] root of the issue is that the persistent
[01:09] data precision loadout for players
[01:11] getting wiped out and effectively the
[01:14] body is getting detached and when that
[01:18] happens you end up spawning as little
[01:20] white golf ball bounced around I this is
[01:25] not the first time it's happened but it
[01:28] does surface from time to time of
[01:30] similar root issues and in this
[01:36] particular case it got out in 3.0 it's
[01:39] sort of happening to a lot of people and
[01:41] we weren't entirely sure what was
[01:42] causing it this time after some
[01:46] investigation from QA and from our live
[01:50] ups guys looks like they got a solid
[01:52] repo from it which is in a heavy server
[01:55] making changes in the personal manager
[01:58] app was ending up sending incomplete or
[02:02] missing data to the persistence database
[02:05] which was causing this kind of
[02:07] corruption cause you just spawn as a
[02:10] white bulb this is one of those
[02:12] situations where
[02:13] I mean obviously we did a ton of QA and
[02:15] and bug-fixing and before we went out
[02:18] and we just didn't see this like at all
[02:20] we didn't see it at all I fixed a lot of
[02:23] persistent bugs and this was not one of
[02:25] them that even came in and the issue is
[02:29] that the the reason why I was showing up
[02:31] in live and not for us is because of the
[02:34] much heavier traffic performance issues
[02:37] at scale and so we were able to find
[02:43] thankfully again with some hard work
[02:45] ways some reliable reaper steps and they
[02:49] were able to reproduce it by having
[02:52] people on the server and then also
[02:54] making some fast swapping between in and
[02:59] out of moby glass applying changes in
[03:02] PMA and we were able to cut out doing
[03:06] doing this look at a whirling dervish
[03:07] act you could eventually arrive at this
[03:10] white bowl now you said it you said it
[03:14] wasn't seen in evocati it was seen
[03:16] evocati but too infrequently first find
[03:19] that the source for it this is one of
[03:22] those things one of those great moments
[03:23] where it's always important to remember
[03:25] that every star citizen environment
[03:27] whether it's the evocati or the PTU or
[03:30] even our live alpha environment is still
[03:33] a testing environment they're all
[03:34] testing and people like why did you push
[03:36] three points good because some things we
[03:37] knew we wouldn't be able to track down
[03:39] until we got this out to as many people
[03:42] as humanly possible and it wasn't until
[03:44] we got it out to everybody and started
[03:47] seeing that the hammering that could
[03:48] only occur when everybody is in there
[03:51] that we were able to actually track this
[03:53] down soon now so now we had the repro do
[03:56] we have a fix for it it's a little it's
[04:01] a little bit up in there actually we put
[04:04] in an initial fix for it that tried to
[04:07] prevent the PMA from making alterations
[04:11] when it's in this uncertain state
[04:14] effectively the PMA operates using a lot
[04:18] of asynchronous operations we need to
[04:20] make requests to the server to get the
[04:22] current persistent load out of the
[04:23] player and all of the items that could
[04:25] potentially go in and give an item
[04:27] or I Edition aliy there's many chains of
[04:31] asynchronicity in the code itself so you
[04:34] have the flash on the front and but then
[04:35] that needs to talk to something in code
[04:38] and so we have the flash which talks to
[04:40] something all the contacts component via
[04:42] events and then itself fires events to
[04:45] something called provide our component
[04:46] which then coordinates using a bunch of
[04:48] remote methods just in requests to the
[04:50] server and then we get responses and we
[04:52] change back and forth so there's a lot
[04:54] of opportunities for when you have these
[04:57] kind of like timing operations for
[04:59] things to go awry and so clearly we were
[05:01] playing a little bit fast and loose in
[05:03] in this particular scenario and we tried
[05:07] a couple solutions to try to make a
[05:10] small change to fix the problem you know
[05:14] this 3.0 is out we don't want to make
[05:17] some large change to the code to try to
[05:20] fix this bug and then introduce four or
[05:22] five more so you know we tried small
[05:25] changes to fix it in it started to fix
[05:29] it but you could still get it to happen
[05:31] with a little bit more dedication and
[05:33] then QA was yet again able to find a
[05:36] more reliable sort of repros because
[05:37] they were looking at it longer and this
[05:39] even led to finding some other bugs that
[05:41] we didn't even know were there like
[05:43] spotting small ships in the actual game
[05:45] but we won't get into that
[05:48] so anyways long story short we end up
[05:52] too late yeah long story long we ended
[05:54] up doing a few more kind of more
[05:57] comprehensive set of fixes I helped a
[06:01] bit but a lot of it was spearheaded by
[06:02] the you I get UI guys and the UK and
[06:06] effectively the there's a few set of
[06:09] changes the probably fix it which is
[06:11] don't make changes to persistent data
[06:14] when you know you shouldn't be so if you
[06:16] haven't actually change anything don't
[06:17] allow a save don't allow saving data and
[06:22] you're still waiting on something finish
[06:24] so if you've made a request for some
[06:26] data you haven't gotten a response don't
[06:28] save the data and also prevent immediate
[06:32] transformation of the data so the first
[06:34] when you ever you up the screen or if
[06:36] you've made a change you don't you
[06:38] shouldn't be able to like the next frame
[06:41] again apply a change to that so
[06:43] basically it's reducing all these
[06:44] opportunities for I in incoherent data
[06:49] to make its way and when you know things
[06:51] are still in motion and it looks like
[06:54] that we've got mostly a fix in I need to
[06:56] look at my email and see what QA is
[07:00] saying right now
[07:01] yeah this is a fix that's currently in
[07:02] testing in a three point zero point one
[07:05] patch that's with evocati right now so
[07:09] so wit so we are currently testing
[07:10] potential fixes and we rolled out one
[07:13] version of 301 we're getting ready to
[07:15] roll out another version 301 soon by the
[07:17] time this airs we'll probably have done
[07:18] one maybe even two more I've helped with
[07:22] a lot of other three one patches as well
[07:25] and this is kind of the last one that's
[07:26] that's won't died but I think maybe
[07:29] we've got the bullet for now yeah it
[07:31] will die it just hasn't died yet so
[07:33] alright Chad thank you so much I'll let
[07:35] you get back to work thank you it's
[07:37] talking to you funny
[07:39] alright so up next I've got a question
[07:42] about ship interior customization that I
[07:45] think it's perfect for Matt Sherman's
[07:48] let's see if Matt picks up here Matt how
[07:52] you doing it
[07:53] yep hey Jared how's it going good you
[07:56] have a new desk yeah yeah so now we can
[07:59] also intrude on the world of John Chimel
[08:02] whenever you call me yeah I'm sorry I
[08:04] have to do that I do the tours here in
[08:06] the LA studio it's like I'm dreading the
[08:08] first tour because I don't know where
[08:09] anybody is
[08:12] hi so I've got a question for you
[08:15] it's about ship interior customization
[08:18] basically this question from spectrum
[08:21] voted on by the backers they want to
[08:23] know what our plans if any are to
[08:27] customize the in decorate the interior
[08:28] of our ships now of course this was one
[08:31] of our original stretch goals from way
[08:34] back in the day so yeah have we done
[08:37] anything with that have we made any
[08:38] movement on it not now a lot of you know
[08:41] active progress it's definitely
[08:43] something that we're keeping in mind
[08:45] it's something that we definitely wanted
[08:47] delivers some fun options and choices
[08:49] for people to make but you
[08:52] in the reality of things it's just
[08:54] getting more ships out is the the bigger
[08:58] priority versus getting these little
[09:00] tchotchkes in but we've definitely got a
[09:02] few lists of different you know kind of
[09:05] dashboard decoration so most where it's
[09:07] like yeah I know because one of the old
[09:09] stretch gold ones was a bobble head of
[09:11] some sort that everyone wants to see so
[09:12] it's like okay not not just a bobble
[09:15] head but it's like well what if it just
[09:17] takes general physics yeah yeah
[09:19] does it can it shake with your ship what
[09:22] are the kind of weird little things
[09:24] where it's like you know the the
[09:26] pendulum swings what not so there's
[09:30] definitely a lot of stuff that we want
[09:31] to explore and it's just it's in its
[09:34] holding pattern right now waiting for
[09:36] that right time to really build
[09:37] everything out and then start getting
[09:40] all that integrated into the game I
[09:43] remember a couple months and I guess you
[09:46] you were you were going around the whole
[09:48] office and asked people what would you
[09:49] like to see in your in your spaceships
[09:51] or just just taking ideas yeah yeah so
[09:54] so it's it's it's and this has come up a
[09:57] couple times I know some some of the
[09:58] guys on the flare team in Austin have
[10:01] asked questions about you know internal
[10:03] ship decorations like that so so it's
[10:05] definitely something that's on our minds
[10:06] it's just obviously one of the biggest
[10:09] aspects of game development is
[10:11] prioritization so yeah it's something we
[10:13] definitely want to get you it's just
[10:15] maybe it's we don't know if it's time is
[10:16] down just yet yeah because also once we
[10:19] frame some of that time and we really
[10:21] start diving into this it's getting a
[10:24] lot of that other work out of the way
[10:26] first is gonna last really dive into it
[10:28] so instead of just mean like oh we've
[10:30] made a bobble head or something it's
[10:33] like oh no we've got a whole run of
[10:35] bobble heads we've got all these other
[10:37] little tchotchkes you know bring your
[10:40] fan back and attach it to your the
[10:42] sidewall of your ship or whatever so
[10:45] just an idea countless people he's not
[10:47] committing to it hey no we did bring the
[10:49] fan back the fan is on the pilot seat of
[10:51] the Cutlass it's just an integrated
[10:53] little box fan now and not like a have
[10:56] to punch the window to make it work for
[10:57] my fan and hashtag not my fan wow I've
[11:02] just hashtag me god
[11:05] I think you should do bobbleheads
[11:08] don't you think bigger I think
[11:10] bobbleheads would be a great idea Chris
[11:12] Jared thinks bobbleheads would be a
[11:13] great idea yeah Jared's really smart
[11:15] we also think bobbleheads would be fun
[11:17] it's just when to make them you're my
[11:21] favorite person here Jared no thank you
[11:23] oh now we know it's a fake thing alright
[11:28] thank you so much for your time man sure
[11:30] thing
[11:30] alright bye bye alright so our next
[11:33] question our next question it's about
[11:35] API I think I know who we can call here
[11:39] we've got Paul Rand owned our Los
[11:41] Angeles office who might know about this
[11:44] hey Paul how you doing hey nice to meet
[11:47] you we hang out all the time don't we
[11:52] all right no we don't humans killed me
[11:56] and started a star marina match like
[11:57] over and over and over again that's my
[11:58] relationship with Paul back in the big
[12:00] way way way back in the day
[12:02] alright so Paul I got a question for you
[12:04] for you from the backers it's about API
[12:06] they say can we get an API that will
[12:09] display data from external apps in the
[12:11] mobi glass or maybe even take
[12:13] information from the mobi glass like
[12:15] inventory like player inventory and
[12:17] whatnot and send it out to websites what
[12:19] are our thoughts on that API okay we
[12:23] have definitely plans for an API not so
[12:25] much from lobby glass it will be more an
[12:26] API to our like inventory data but I
[12:30] think that's exactly what you want
[12:31] basically giving what ships you own what
[12:35] items you have all those kind of things
[12:38] we don't work on that API yet because
[12:40] the systems are still very much like
[12:42] changing and like writing an API for
[12:45] data which is likely to change it's like
[12:47] not they're not the most optimal way to
[12:50] do it the other way around we are
[12:53] looking into ways to integrate spectrum
[12:56] into the game so a lot of features you
[12:58] can have on spectrum we try to want to
[13:01] get into the game which could part of a
[13:04] MOBA class or part of the on-screen chat
[13:06] and so on so that rizzo sounds like we
[13:09] just need further development on the
[13:11] game itself and the UI itself and how
[13:13] things work in the game before we start
[13:14] building tools
[13:16] for our backers do you have some
[13:17] information for all right cool I'll let
[13:19] you get back to work man thank you so
[13:21] much
[13:21] bye it's the next question we have a
[13:24] leaf blower in the background one of you
[13:26] guys can hear that next question is for
[13:28] John Crew he is our lead technical
[13:31] designer out of a foundry 42 UK John
[13:35] John I love it hey thanks for thanks for
[13:38] taking the comment that's okay
[13:40] I see I expected to call you like every
[13:42] single week when we started this show
[13:43] and it turns out that's been poor Luke
[13:45] Presley we've been calling with Presley
[13:46] every single week yeah she's been hiding
[13:49] so I've got a question for you this is a
[13:52] very long a very detailed question it's
[13:55] one that comes up quite a bit let me see
[13:58] if I can let me see if I can I can
[13:59] narrow this down here make this this
[14:01] thing because this is a redeemer good
[14:07] question redeemer question mark yeah
[14:13] to be honest it's it's not really a
[14:15] priority for us this year we know it's a
[14:17] super-popular ship obviously came out of
[14:19] the next great star ship big fan
[14:23] favorite but it's it's not where we need
[14:27] it to be I has a lot of design problems
[14:30] and it's sort of it's not needed in the
[14:33] PD issue it's not needed in the squadron
[14:36] this year we have ships that that we
[14:40] need more coming and it's prioritize
[14:43] appropriately we know what we want to do
[14:47] with it just to quickly go over
[14:50] something like the design issues with it
[14:51] like there's there's the mystery ghost
[14:53] train turret where you sit in the seat
[14:55] and you go outside into space to get
[14:57] into the turret it's got it's a drop
[15:01] ship that holds six people which is not
[15:03] particularly fantastic it's got lots of
[15:08] tight twisty spaces that just aren't too
[15:10] metric so bringing all that together is
[15:13] is a fairly hefty rework and we sort of
[15:16] got two ideas internally where we want
[15:18] to go with it
[15:19] one is the pure gunship route that it
[15:21] it's sort of half a gunship half a
[15:23] dropship as it is and basically where
[15:26] we're looking at those two avenues of
[15:28] just going
[15:29] gunship full dropship at the moment
[15:33] really leaning more towards the gunship
[15:35] side we've got other drop ships that are
[15:37] better drop ships than it but we don't
[15:39] have that
[15:40] ac-130 style gunship I think a lot of
[15:43] people would like right now let's
[15:47] clarify looking at is we explore lots of
[15:51] ideas lots of conversation this we
[15:54] consider it doesn't mean that's
[15:55] necessarily what's going to happen the
[15:58] decision has not been made to make it a
[16:00] gunship the decision has not been made
[16:02] to make it a solely a dropship it's one
[16:04] of those things it's a conversation it
[16:05] has to happen yes this was a ship that
[16:07] was made by backers and like I said
[16:09] outside of metrics not only now outside
[16:12] of the metrics we had and then we've
[16:14] changed the metrics since then so it
[16:16] does need a lot of work and it will
[16:19] there will be some changes to it when it
[16:22] when it's time does come but it's just
[16:25] bubbling away in the background okay
[16:29] look looking at the ship schedule of
[16:31] course we just published our public
[16:32] roadmap recently I know not everything
[16:35] is on there like the whole sea is
[16:36] currently not on there whatnot but is
[16:38] the Redeemer something we're considering
[16:40] working on in 2018 I don't think it is
[16:42] it's not to my knowledge but I'm not a
[16:45] producer fair enough fair enough
[16:47] well I I have talked to the producers
[16:49] and it is not it is it is not a ship
[16:51] that we believe that will be working on
[16:53] in 2018 so so just want to put that out
[16:55] there because I know there's a lot of
[16:57] people who ask every single week you
[16:59] know any information and redeem or any
[17:00] information Redeemer there will be
[17:02] information just not anytime soon no
[17:07] sadly all right John thing a cracker
[17:10] wings bad news this week well someone's
[17:16] going to do it yeah someone does have to
[17:18] do it and that is that is the
[17:19] double-edged sword of a show like this
[17:21] yeah so it will get you answers it won't
[17:23] always be the answer that you're looking
[17:25] for all right thank you so much John
[17:27] I'll let you get back to work no problem
[17:29] but all right so John crew out of the @f
[17:34] Manchester United Kingdom in
[17:36] redeemer question we get the redeemer
[17:37] question that quite a bit alright so for
[17:41] our next call we are going to I'm
[17:44] getting a phone call I'm getting a call
[17:47] no one expects the bearded Inquisition
[17:50] [Laughter]
[17:52] yep that's good hey I saw last week's
[17:57] episode actually I think I've seen all
[17:58] of them at this point but okay I wanted
[18:01] to offer a brief correction it's really
[18:03] easy to think that we do database wipes
[18:05] because that's kind of how it behaves to
[18:09] the end-user but we actually don't wipe
[18:13] the database ever we have all of the
[18:15] databases that we've ever used from the
[18:16] start of the project
[18:18] gotcha I'm sorry I wasn't expecting a
[18:21] phone call you're referring to Benoit
[18:23] last week when he was talking about
[18:25] having the bass UEC set a set as the
[18:29] equivalent of an au ec database for when
[18:32] we wipe databases and you're saying that
[18:34] we don't actually wipe them we just we
[18:36] just move them off of the active
[18:38] environment and store them for research
[18:40] so they're technically all stored in the
[18:42] same place but okay what ends up
[18:44] happening is usually I'm the one that
[18:46] ends up making a new database and then
[18:48] when we launch a build we tell the
[18:51] environment which database we want it to
[18:53] use so if it's using a new one
[18:56] obviously everyone starts fresh but we
[18:58] still have all the old data just for
[19:00] historical purposes and science guys as
[19:03] well that's probably important when
[19:05] figuring out things like the economy and
[19:06] wonder how much people are making how
[19:08] much people are spending and stuff like
[19:10] that each day plus the number of
[19:12] derelict ships that we have sitting
[19:13] around because those are all still there
[19:17] [Laughter]
[19:20] okay well thank you for your
[19:24] clarification nope
[19:27] oh so that's a that's a that's a
[19:29] stunning hat yeah actually wore this to
[19:32] a vacation I didn't Alaska and a couple
[19:33] of people took a picture with me because
[19:35] they thought I was a local ok well
[19:39] thanks for calling feel free to call
[19:41] anytime in yeah will do thanks
[19:46] up next we are returning to Manchester
[19:49] United Kingdom with our first time three
[19:52] timer mr. Luke Presley hey Luke how you
[19:57] doing man I need everything I'm doing
[20:01] you know it's me it's another day in
[20:02] paradise
[20:02] mm-hmm so this is getting pretty regular
[20:06] the weather never changes here we had we
[20:09] had a cloud the other day it was nice
[20:10] which is we all went out to the parking
[20:12] lot and just stood up and looked at the
[20:13] cloud like but I've got a question for
[20:18] you I'm pretty sure you know that you
[20:20] know that you know this one's coming our
[20:22] way we get this one a lot
[20:23] I go to bar citizens and people are like
[20:25] hey hey just go I'm like yeah I'm like
[20:28] you're honest we went when the Redeemers
[20:30] coming all right like when is Tess
[20:32] Bester coming out well I'm just thought
[20:35] it's not a ship question okay so yeah
[20:37] your question your question from the
[20:39] backers voted on the spectrum can we get
[20:43] her back please without us she is all
[20:45] alone out there they say yeah it was
[20:50] actually pretty hard riffing her out
[20:51] actually like she's offered our first
[20:54] mission giver and yeah but I mean yeah
[20:58] she's coming back
[21:00] so yeah actually recorded her voice for
[21:07] three Oh like ah because we had all the
[21:12] actors in again we I mean it would have
[21:16] been great to get her in for free oh but
[21:18] we had so many other things to like we
[21:19] had the miles Eckhardt
[21:21] and ruto was even a stretch for free oh
[21:23] and and we had we've got oh like in the
[21:28] back pocket as it as it were through the
[21:32] time I want to bring her back is when we
[21:34] have the missions will do her justice
[21:35] which is when we get scanning in because
[21:40] she's the perfect mission giver for
[21:42] scanning type missions and I know I do
[21:47] know that the universe is a little more
[21:49] hollow without her like okay honestly
[21:53] like she
[21:55] there's something about that actor and
[21:57] the way that she was written that really
[22:00] like just makes this like sparkle like
[22:03] something about it so yeah don't worry
[22:08] it she'll be coming back I do just want
[22:11] to do her justice well I don't want to
[22:12] bring her back to just have kind of the
[22:15] same fetch missions that you've seen
[22:18] already so who will appreciate that
[22:25] thank you so much yeah you got anything
[22:28] else no sorry don't know the secrets to
[22:34] give alright well it's three times three
[22:37] shows Oh we'll see it we'll see if we
[22:39] can go in a week next week without
[22:40] giving you a call but no promises no
[22:42] well I'll see you next week and with
[22:48] that we wrap up another episode of
[22:49] calling all devs I hope you enjoyed it
[22:51] don't forget that there are threads up
[22:53] in the announcements section up on
[22:54] spectrum where you can submit your
[22:55] questions and most importantly vote it's
[22:59] important that you guys vote on the
[23:00] questions that you most want to see
[23:02] answered each and every week I'll do my
[23:04] best the best - fest I think my best to
[23:06] find the developer most appropriate to
[23:09] answering your questions so for calling
[23:10] all devs I'm Content Manager for global
[23:12] video production Jared Huckaby Ian Willa
[23:14] we'll see you next week everybody
[23:16] thank you for watching so if you want to
[23:18] keep up with the latest and greatest in
[23:19] star citizen the squadron 42 development
[23:21] please follow us on our social media
[23:23] channels see you soon
[23:27] you

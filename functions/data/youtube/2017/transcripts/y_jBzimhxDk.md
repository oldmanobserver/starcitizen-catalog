# Star Citizen: Around the Verse - Gamescom 2017 Behind the Scenes

**Video:** https://www.youtube.com/watch?v=y_jBzimhxDk
**Date:** 2017-09-01
**Duration:** 23:35

## Transcript

[00:15] hello and welcome to another episode of
[00:18] around the verse our weekly look at star
[00:20] citizen's ongoing development I'm Sandi
[00:22] Gardiner and I'm Steve bender
[00:24] welcome back sandy how was games come
[00:26] last week James comers pretty cool I had
[00:28] a lot of fun it was a great way to spend
[00:29] time with the backers and it's always
[00:31] cool to see how enthusiastic they are
[00:33] and plus the booth looks amazing and it
[00:36] was busy very very busy with like
[00:38] lineups well we've got a great show
[00:41] lined up for today including a feature
[00:43] that goes behind the scenes at Gamescom
[00:46] but first it's time to check in with the
[00:48] dev team on our 3.0 progress let's see
[00:51] what bugs have been smashed and which
[00:52] new ones flared up in this week's burn
[00:54] down burn down welcome back to burn down
[00:59] our weekly show dedicated to reviewing
[01:01] progress on issues blocking the release
[01:03] of star citizen alpha 3.0 last week we
[01:06] ended at 67 total must fixed issues that
[01:09] were prioritized at 7 blockers 36
[01:11] criticals 20 highs for moderates and
[01:13] zero trivial x'
[01:14] so let's see how this week went so one
[01:17] of the things that most studios do and
[01:19] we do here in Los Angeles is we have
[01:21] triage weekly where we go through the
[01:23] bugs we've got in and we assess what
[01:26] their impact is what their value for the
[01:29] fix is and more importantly what we can
[01:31] do in in what order we can accomplish
[01:33] things to support the long-term goals of
[01:36] 3-0 currently we have the spring going
[01:41] for quantum travel experience and the
[01:43] turrets experience as well which I
[01:47] believe I've mentioned before we want to
[01:50] make sure that quanta travel and tour
[01:52] it's both to a level where with the item
[01:55] 2.0 implementation of these of these
[01:58] things we want to make sure that they're
[02:00] properly reflecting how it is we want to
[02:02] have them in the game and where we
[02:03] envisage them going further in the
[02:06] future so we have current sprints active
[02:10] for those at the moment to make sure
[02:11] that that is all working and tied
[02:13] together nicely
[02:14] similarly for the cockpit experience as
[02:17] well that ranges from everything from
[02:20] g-force reactions hit reactions when
[02:23] you've been shot at
[02:26] - the general interaction around in the
[02:29] cockpit itself a lot of things are
[02:31] almost completed in terms of emissions
[02:35] but I've cancer stage where I'm blocked
[02:38] by a lot of issues you know if the
[02:41] emissions like 85 percent completed or
[02:44] ready for a review but these extra
[02:47] couple of blockers would just push
[02:49] what's new for the line and we've got
[02:51] I've got prioritized JIRA's out for that
[02:55] would jean already the mission system is
[02:57] gonna be under review with the directors
[03:00] in the coming days - to see what the
[03:03] progress has been on the emissions that
[03:05] we currently have and getting feedback
[03:07] of how on the mission flow various steps
[03:11] how they play out and any feedback that
[03:14] is then received from them we'll have to
[03:17] evaluate that and come to an agreement
[03:20] with them and how much we're able to get
[03:22] done and how long that will take
[03:24] and then from that we see how much how
[03:27] much work is is remaining based on their
[03:30] feedback then I thought I'd show a buck
[03:33] I've been working on for through my nose
[03:34] it's about a week old and bug is the
[03:36] airlocks need moving down slightly
[03:39] because since you're standing here as a
[03:42] player you wouldn't be pressing like the
[03:43] animations for pressing this panel
[03:45] wouldn't actually hit the panel itself
[03:46] it would hit somewhere below here
[03:48] because you'd be standing on a much
[03:49] lower elevation so the bug request for
[03:52] is for the Alex to be moved down or
[03:54] everything else could be moved up so
[03:56] it's a pretty clear case of one way or
[03:59] the other
[03:59] yeah solve this problem of the elevation
[04:01] being different so this is a classic
[04:04] case of where you could do it do it the
[04:06] right way which then would be to move
[04:08] everything up as you see here or
[04:12] everything down but where if you would
[04:15] do that there would be so many
[04:16] implications of you accidentally causing
[04:18] other problems but people because you
[04:20] sit in in here there's a vaulting mark
[04:22] up there are loads of volumes visit
[04:24] areas there are loads of things going on
[04:26] and if we see on the outside there's the
[04:29] same width it's like lots of assets
[04:30] there's AI going around here there are
[04:32] navmesh is all kinds of things that you
[04:35] don't want to accidentally break for
[04:37] someone else you know - cause
[04:39] even more work so that's a good case
[04:41] that where you have to sort of break the
[04:42] rules of what's conventionally good in
[04:44] games in game development and cannot go
[04:46] for the simple opportunities you build a
[04:48] little stupid around so that the players
[04:51] don't stand on the floor they stand on
[04:52] the ramp and the animations play
[04:54] correctly and finally as that was I mean
[04:59] III solved that book and then it turns
[05:01] out that there was another existing bug
[05:03] not to do with content or art in any way
[05:06] exactly in this area ways obviously
[05:09] here's a video of this bug where when
[05:13] the player goes here you see they start
[05:14] they start freaking out here that
[05:16] there's clearly something happen in the
[05:17] end like that there's bouncing something
[05:21] physical just in this area sort of
[05:23] happening and affecting the player and
[05:26] this bug was then passed around to
[05:29] programming talk of network issues to
[05:32] maybe being the course it was very
[05:34] localized like no one could figure out
[05:36] exactly why is it happening here and
[05:37] then this submit goes in and well on
[05:43] results both bugs somehow so the good
[05:47] case of a happy accident development so
[05:50] what I'm working on is we had a metrics
[05:53] update for the shopkeep counter and the
[05:56] shop container is going to be used
[05:59] everywhere that can be used for selling
[06:01] clothes it can be used for you know
[06:05] selling plants or you know weapons
[06:08] things like that so there's going to be
[06:10] a lot of common use so we want to make
[06:12] sure that that that the performances and
[06:15] the metrics are matching what we're
[06:17] gonna do is we've decided that we're
[06:20] going to take the the standing touch
[06:22] screen for the for the counter and we're
[06:26] going to scoot that forward a little bit
[06:27] so that there is just there's room for
[06:29] the performer performances with so they
[06:32] could lean on the counters and they can
[06:33] but they can also type so there's like a
[06:35] nice compromise between the two it'll be
[06:37] a new metric and it'll be different than
[06:39] the stand alone
[06:42] standing console which we already have
[06:44] established so this will be another
[06:46] another version that just works better
[06:48] with the shopkeep we're burning down
[06:51] bugs left and right just recently we ran
[06:54] into an issue with miles Eckhart and one
[06:56] of the mission givers that we're we're
[06:58] gonna have in 300 miles Eckhart was was
[07:02] instead of sitting at the bar of the bar
[07:05] the table like he was supposed to
[07:07] we found him curled up in the fetal
[07:08] position in the corner so some reason
[07:11] he'd had too much to drink and guess
[07:12] that day or something because he was not
[07:15] working was supposed to be so that was a
[07:16] fun one to kind of duplicate try to
[07:17] figure out required a lot of back and
[07:20] forth between Rob Reiner girly designer
[07:22] here Francesco or leader of AI
[07:23] programmer in Frankfurt you know some of
[07:26] the networking guys like it's just it's
[07:28] a it's a lot of the issues that we're
[07:30] running into or having to coordinate a
[07:32] lot with people from all over the the
[07:34] company to in order to solve because
[07:36] it's not just a simple design issue or
[07:38] simple art issue it's kind of a
[07:41] combination thereof there's rarely a
[07:44] feature that is developed solely in one
[07:46] place or on one team so it requires a
[07:49] lot of a lot of coordination between
[07:51] teams for sure the burndown rights are
[07:54] always high but that's just kind of
[07:56] indicative of game development the more
[07:59] we tend to resolve the more we tend to
[08:01] uncover new issues so there bugs created
[08:04] always rises but that's not necessarily
[08:07] a bad thing because at the same time
[08:09] when we're fixing up issues we're able
[08:12] to get the Polish done fix the bugs and
[08:15] then watch the burn rate increase where
[08:17] we are now we're getting closer
[08:20] obviously with software and with games
[08:23] development it's really hard to tell
[08:24] where you are exactly at because the
[08:26] things that really can get you in the
[08:27] hamstrings are the unknown bugs and the
[08:30] crashes with low reproducibility all the
[08:33] bugs that we fix with the mission giving
[08:35] and with being able to go down to a
[08:36] procedural planet and pick up the boxes
[08:39] and be able to complete those missions
[08:40] is directly going to impact three-arm
[08:43] reduces the workload that we now have to
[08:45] do to be able to release 3:02 you guys
[08:47] our backers it's not a direct sprint
[08:50] it's you know we've got to go around the
[08:52] circuit to get there
[08:53] but we can see it now and it's being
[08:55] able to realize it there will be bugs
[08:56] before we get there how big they are
[08:59] you know yet to be determined but we are
[09:01] there we can see it and it's now just
[09:03] being able to focus in and hone into
[09:05] that release so that you guys can play
[09:07] three out so at the time of filming this
[09:09] we've added 27 to our must fix list and
[09:12] checked in 768 updates to our 3.0 branch
[09:15] this week that means we're at 94 issues
[09:18] stopping the release to our first round
[09:20] of non CI G testers as Gamescom occurred
[09:23] this week we had the unique opportunity
[09:24] for what ended up being over 2,000
[09:27] attendees playing our planetary
[09:29] experience which as you know houses a
[09:32] lot of the new changes coming with SEL
[09:33] 43.0 now this did end up increasing the
[09:37] influx of MOSFETs issues for the better
[09:39] as it helped us find some issues that
[09:41] may not have occurred until after our
[09:43] first release so as the goal every week
[09:46] is to burn down we're going to keep
[09:48] working to push that number downward as
[09:50] fast as possible so come back next week
[09:52] to keep up to date on burn down remember
[09:56] burn down isn't the only way for you to
[09:58] follow our work on 3.0 you can also
[10:00] check out the production schedule on our
[10:02] website we update it every week with
[10:05] further details on various bugs and
[10:07] blockers affecting 3.0 as we mentioned
[10:10] earlier the star citizen team spent last
[10:11] week at Gamescom we streamed live from
[10:13] the show floor let people play a part of
[10:15] our 3.0 build and revealed an exciting
[10:18] new partnership with face where
[10:19] technologies at our annual games con
[10:21] presentation but that's just the stuff
[10:24] you saw a ton of work went on behind the
[10:27] scenes to get everything ready for the
[10:28] show floor as well as Friday's event
[10:31] let's take a look I am here at the show
[10:34] floor booth that games come 2017
[10:41] [Music]
[10:51] we were doing press demos on Wednesday
[10:53] and Thursday which we had about six
[10:55] people on instead of the twelve we had
[10:57] for the big one and so that's a little
[10:59] bit of times always we're working
[11:01] through some of the King so though you
[11:03] know some of the crashes of sometimes we
[11:05] Adam sometimes we do every new build
[11:07] comes to us like new little boxy and
[11:09] there so we get the latest build and
[11:11] usually QA did a good job like to
[11:13] pre-screen the build but sometimes run
[11:14] into an issue and let me try to like fix
[11:16] it on site as as soon as we can
[11:21] we have an important announcement to
[11:23] make DJ night visibility perilously to
[11:26] his death we don't know how long it's
[11:29] gonna take for him to land the ground
[11:30] but his options don't look good we are
[11:33] here at the star citizen booth from the
[11:34] gamescom show floor and it is packed
[11:37] [Music]
[11:40] there's so many people around here
[11:41] people queuing down there down there and
[11:44] uh yeah and they can play we put up
[11:46] everyday on the floor you know we found
[11:49] issues we what people were playing was
[11:53] live it was raw all right first day
[11:57] Tuesday people playing we found bugs
[11:59] those went back we calculated them
[12:01] Wednesday morning new-build
[12:02] so I'm there helping with the IT and
[12:04] everything else coordinates push the
[12:06] bills let's get going and then I will
[12:11] try atmospheric reentry
[12:14] because that's the stuff that we all are
[12:17] waiting for yes the graphic details are
[12:20] stuff awesome I think my experience was
[12:22] very great I can fly around two planets
[12:25] I experienced like two ships that I
[12:27] never experienced before
[12:28] [Music]
[12:46] so once we knew what we want wanted to
[12:49] do being a designer I was first working
[12:52] on setting up a lot of the AI in Leske
[12:55] and then after that basically got pulled
[12:58] into practicing the flow with six people
[13:02] that were actually available in in
[13:04] Frankfurt we need to send an audio feed
[13:07] via headphones so the gamers the players
[13:09] of the the demo can hear their own sound
[13:11] but also send it by HDMI to the AV guys
[13:17] which then pass it to the PA system
[13:19] which is the live mix of when people are
[13:22] watching it at the glory theatre but
[13:24] then also isolating each element of that
[13:27] so I can send a different mix to the
[13:29] stream I hope things don't crash
[13:32] sometimes they do and then you gotta try
[13:35] to decide what the best way to to
[13:38] recover from that but no I'm not
[13:40] generally nervous at all it's more just
[13:41] you've got all this adrenaline getting
[13:43] it all together and then BAM go through
[13:45] the presentation it's done
[13:50] [Music]
[14:15] what does it take to build a symphony it
[14:21] takes a blueprint
[14:25] four movements that will dictate key
[14:28] [Music]
[14:30] tempo and the arrangement of musical
[14:34] notes that will create harmonies
[14:37] [Music]
[14:40] a feeling so powerful that it transcends
[14:42] words
[14:44] they must be conveyed in another form
[14:49] introducing the new 600 ah from origin
[14:58] Symphony in motion
[15:06] and without further ado I am going to
[15:09] introduce the man who you've all been
[15:10] waiting for
[15:11] Chris Robert good to see you guys
[15:18] tonight
[15:21] we having fun yeah we thought that
[15:27] perhaps we should just get straight in
[15:29] to a demo you can't give an admission
[15:33] wait you're a guy yeah why not
[15:38] I wanted to try some something different
[15:43] [Applause]
[15:44] what do you think of my look okay so
[15:48] hold on guys
[15:49] so one thing that we're going to show
[15:51] here this is a feature that we've put
[15:55] into the game it's not going to be in
[15:57] 3.0 but it will be soon afterwards two
[16:01] things one which is standard me VIP and
[16:07] the other is what we call face over ap
[16:42] [Music]
[16:47] and I get far enough away from and as
[16:49] you can see the space landscaping is
[16:52] much better than it was in 2.6 when I
[16:55] look down we see the big crater
[17:10] so now we're heading today mom
[17:13] so you see crusader actually off to the
[17:15] rides as we head up Monday mom
[17:25] that's about
[17:29] especially stuck in the policy no chumps
[17:40] machine crash all right sorry guys the
[17:43] pilots machine crash which is why I
[17:45] disappeared at the milliner jump I did
[17:47] warn you they potentially had some
[17:49] crashes in there on foot that was that
[17:52] was that was that one crash that we had
[17:54] in our we had a few other crashes in our
[17:56] various playthroughs but now that
[17:58] particular one unfortunately
[18:02] [Applause]
[18:12] all right back a business
[18:21] [Music]
[18:48] [Music]
[18:51] just lighting position
[18:57] [Music]
[19:02] Hey what
[19:05] let me out are you laughing
[19:11] closed or was i nervous
[19:19] yeah absolutely but at the same time
[19:23] when I what I enjoy most about their
[19:24] shows when when people come together and
[19:26] we can do these events I take the time
[19:29] and I watched the audience's reaction
[19:31] when the show's playing because that's
[19:34] what I buy buffer right and to see
[19:36] people get excited to see be you see
[19:38] their facial reaction and to hear the
[19:40] noise when something happens that you
[19:42] know I know it was good to be there
[19:43] right before it's awesome so hey I did
[19:46] have the time to you know relax a little
[19:48] bit with with with everyone and it was a
[19:51] good time
[19:51] it was scary honestly but fun face where
[19:56] guys are really awesome and they showed
[19:57] me like some tips and tricks to make it
[19:59] look really good and yeah I just sat
[20:02] there and in the mirror like just
[20:03] practicing all this I'm trying to get it
[20:05] to look right we wanted to show where
[20:08] 3-0 is up to but we and we knew we
[20:10] wanted to show face where and the face
[20:12] tracking because we've gotten it to the
[20:13] point where we felt like we wanted to
[20:14] show up publicly so we thought it'd be
[20:16] really great to sort of play in 3-0 but
[20:18] add on the element that the face where
[20:20] and face tracking and then so that was
[20:23] that was kind everything well you know
[20:25] what else well how can we end the demo
[20:27] on something big and we've been working
[20:30] on the interest for squadron 42 and it
[20:33] was making some great progress and
[20:34] actually Nathan Daisley
[20:36] who's a ship art director as long being
[20:39] pitching says why don't you just have an
[20:41] interest loan on a planet and then we
[20:42] drive it over into it at the end of the
[20:44] demo okay well okay so so then we then
[20:47] we thought well that could be cool but
[20:49] why don't we have two addresses fight
[20:51] each other
[21:33] [Music]
[21:47] as you can see events like games come
[21:52] our a tremendous amount of effort and
[21:53] coordination we'd like to thank all the
[21:55] sources and devs streamers and
[21:57] volunteers that helped make it happen
[21:58] because we couldn't have done it without
[22:00] you
[22:00] well that's all for today's show but
[22:03] before we go we just wanted to remind
[22:05] everyone there will be no monthly report
[22:07] for August
[22:08] now that Gamescom is over things will go
[22:10] back to normal and you can expect
[22:12] September's monthly report in a few
[22:14] weeks thanks to our subscribers as
[22:16] always we pitch in a little extra each
[22:18] month to help make these shows September
[22:20] ship of the month will be the Drake
[22:22] Herald
[22:23] so starting Friday all you need to do is
[22:25] log into the game to try it out and
[22:27] thanks to all our backers for your
[22:29] support events like games come really
[22:32] highlight the importance of our
[22:33] community and we can't thank you enough
[22:35] for everything you've done to make this
[22:37] game a reality and until next week we
[22:39] will see you
[22:50] [Music]
[23:12] thank you for watching so if you want to
[23:15] keep it with the latest and greatest in
[23:16] the star citizen a squadron 42
[23:17] development please follow us on our
[23:19] social media channels see you soon
[23:28] [Music]

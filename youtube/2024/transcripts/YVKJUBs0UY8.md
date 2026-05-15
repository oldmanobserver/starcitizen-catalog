# Star Citizen Live Q&A:  Hangars and Cargo

**Video:** https://www.youtube.com/watch?v=YVKJUBs0UY8
**Date:** 2024-04-19
**Duration:** 1:21:28

## Transcript

[00:05] hi everybody uh welcome to we're back
[00:09] welcome to we're
[00:11] back Star Citizen live uh our our quas
[00:14] weekly show where we take about an hour
[00:16] at the end of our week and we hang out
[00:18] with our developers uh we chat all
[00:20] things to our citizen their personal
[00:22] lives uh we show our cool GI Joe toys
[00:25] sometimes uh and uh in this case of this
[00:28] week uh we're talking we're answering
[00:30] questions we're taking questions we're
[00:32] putting questions to the
[00:35] developer it's clear I've been not doing
[00:38] this for three weeks hi
[00:40] oh little buzz thing joining me on the
[00:43] show this week uh is an esteemed friend
[00:47] of the show a man who probably needs no
[00:49] introduction but we're going to do it
[00:51] anyway uh let's throw it to Cargo Chad
[00:53] cargo Chad how you doing man doing good
[00:57] how about yourself I'm in a mode where
[00:59] I'm assigning nickname to everybody uh
[01:01] your cargo Chad and there's the hydro
[01:04] homies and I'm pretty sure uh next
[01:06] week's show is is about Arena Commander
[01:08] stuff in in Arena 3 I think I called
[01:10] Duncan Duncan Arena man um I don't know
[01:14] there's just I'm at a point where I
[01:15] clearly should be stopped and nobody
[01:18] is uh so yeah we're going to jump right
[01:21] into it because we have a lot of
[01:22] questions and stuff uh a few weeks ago
[01:26] uh maybe four weeks ago uh we had an
[01:30] inside Star Citizen uh with Chad and
[01:32] members of the of of of the uspu team uh
[01:37] talking about cargo hanger uh hangers
[01:40] persistent hangers personal hangers
[01:41] freight elevators uh all a bunch of
[01:44] really exciting stuff for the non-combat
[01:47] oriented uh citizen of which there are
[01:49] many many of you out there I count
[01:51] myself as one of them um this is work
[01:54] that's all targeted for Alpha 323 uh and
[01:57] recently as I'm sure most of you many of
[02:00] you might have noticed uh with the this
[02:02] week's road map round road map Roundup
[02:05] it's a hard thing to say out loud with
[02:07] this week's road map Roundup um it was
[02:10] recently revealed that the cargo that
[02:12] the uh instance hangers the freight
[02:14] elevators uh the item kiosks everything
[02:17] that's in that little that little cargo
[02:18] package that cargo career update uh
[02:21] that's coming still coming in the alpha
[02:22] 323 Branch uh would not be in the
[02:25] initial uh release uh the initial
[02:27] release being 3230 and then there might
[02:29] a 3231 and 3232 and stuff that stuff
[02:32] still being worked out and determined uh
[02:34] it will still be in one of the
[02:35] subsequent releases whether again
[02:37] whether that is 0.1 point2 or whatnot
[02:40] remains to be seen um joining us so Chad
[02:44] um we're just going to jump right into
[02:45] it uh tell everybody who you are because
[02:49] in case somebody didn't see the show
[02:50] tell everybody who you are what you do
[02:51] for Star Citizen
[02:54] and what
[02:56] happened yeah so uh starting with the
[02:59] easy questions
[03:00] uh uh yeah my name is Chad mckenny I'm a
[03:03] senior lead gameplay engineer um
[03:05] currently in the Los Angeles studio uh
[03:09] mainly focus on Star Citizen so I'm part
[03:11] of the core gameplay group I have a kind
[03:15] of sub team in that group called cgp 7
[03:18] uh but we mainly focus on what I would
[03:21] say are like the features that Mak
[03:23] staris and like unique so like the big
[03:26] MMO style gameplay features cargo like
[03:29] certainly one of one of the big ones one
[03:31] of the big careers right so our team is
[03:33] really focused on those features um and
[03:37] certainly over the last several years
[03:38] that's been a really big Focus for us so
[03:40] any of the big cargo stuff that you've
[03:41] seen coming out over that time
[03:43] physicalized cargo H SE all this stuff
[03:46] has been my team's main
[03:48] focus um but we've worked on a lot of
[03:50] other stuff throughout the years um but
[03:53] yeah like so what happened with cargo um
[03:55] well the first thing I was hey is like I
[03:57] don't know that there's anyone that's
[03:59] like more personally invested in seeing
[04:02] this like through than I am so it was
[04:05] disappointing to come to the conclusion
[04:07] that we did need to pull it from 323 or
[04:10] push it into you know a point patch but
[04:14] it was the right call and there's a lot
[04:17] of factors that went into that um just
[04:20] to kind of get into it like the first
[04:22] thing is that it's a really really
[04:24] big it's not even I don't even think you
[04:26] can call it a single feature set it's
[04:27] like a whole change to the way that the
[04:29] game works from top to bottom in many
[04:32] different aspects so whenever we started
[04:35] concerted development on this last year
[04:38] you know we come up with a certain
[04:39] schedule and um at the end of the day if
[04:42] you look at where we're hitting you know
[04:44] while it is disappointing to see it slip
[04:47] we're really close actually it's like
[04:51] it's it's kind of like uh throwing a
[04:52] dark like a Target like a mile away you
[04:55] know we are a bit off we missed the
[04:57] target but we're not so far off it's not
[04:59] going to be like you know six months
[05:01] from now or anything like this so it's a
[05:03] bit disappointing that it missed the
[05:04] release but we are really
[05:06] close but so like the first thing is
[05:09] just like it's big and it's hard to
[05:11] estimate and and quite pin down all the
[05:14] unknowns and everything and and make
[05:16] sure that like your dates are exact by
[05:18] the time uh the actual date comes up so
[05:21] we're a little bit off on that part but
[05:23] there's also just been a lot of things
[05:24] that have happened during that time uh
[05:27] some of the stuff towards the end that
[05:29] really informed that decision making are
[05:32] the fact that there's still some Feature
[05:33] work that needs to be finished out um
[05:36] there's some iteration that we're still
[05:38] doing on certain aspects or that we did
[05:40] on certain aspects of the design once we
[05:43] got things up and going in particular uh
[05:46] the freight elevator kiosk UI and the
[05:48] item Bank UI once we played with them a
[05:51] bit we realized we needed to update them
[05:54] and change them to make them a better
[05:56] experience and then on top of that in
[05:59] particular the hker instancing asop and
[06:02] Transit kind
[06:03] of flow graph there about going from all
[06:06] these different stages of gameplay uh
[06:09] had some stability problems and it's the
[06:11] kind of thing that I really felt
[06:14] strongly that we can't go live with that
[06:16] being not really stable because if we do
[06:20] and it ends up being a problem the game
[06:22] essentially becomes unplayable for the
[06:24] players so it's it's not like you know
[06:27] if we went out with Salvage and maybe
[06:28] there's some issue with salvage or if
[06:30] we're going out with mining or you know
[06:32] the Rocks sometimes crash your client
[06:35] like that that is really unfortunate
[06:37] that affs a small subset of people yes
[06:40] this is the kind of thing where the game
[06:42] could literally just be unplayable you
[06:45] can no longer summon your spaceships you
[06:47] can no longer load your spaceships it's
[06:49] a it's a pretty heavy thing so like in
[06:52] comparison like ever since
[06:55] 318 we've been a lot more cognizant of
[06:59] what kind of risk we want to take on
[07:01] whenever we're going into the release so
[07:03] whenever we were coming up on 323 we
[07:06] were really aware of how big this was
[07:10] and also really aware of like the
[07:12] current state of 323 without all of that
[07:15] feature work and because 323 was already
[07:18] needing some more time to be focused on
[07:21] to stabilize and improve performance we
[07:24] didn't want to just rush this in and
[07:27] then take something we already spent a
[07:28] certain amount of time time hardening on
[07:30] 323 and then just destabilize it all
[07:32] again and it probably just like reset
[07:34] our whole release kind of pipeline there
[07:37] but also then taking on all the the new
[07:40] risk for the cargo work um but we are in
[07:44] a child stream of the release stream so
[07:47] that means that like we're ready to go
[07:48] anytime we want to we can just pull the
[07:50] trigger and and release it we're we're
[07:52] right there so it's not like it's
[07:55] stuffed away and and you know some
[07:57] development stream it's like you know
[08:00] still in in a bunker somewhere like
[08:02] we're really close it's it's going
[08:04] through the already you know certain
[08:06] steps of the release phase it's just we
[08:08] weren't ready we didn't want to
[08:10] integrate it because of the risk and
[08:11] already the the state of 323 itself um
[08:15] but on top of that like to be completely
[08:16] honest there this this feature has been
[08:19] around like I said for for quite some
[08:20] time and there's been a lot of things
[08:23] that have happened just kind of outside
[08:24] the feature that have also contributed
[08:26] to it so like as people are probably
[08:29] aware
[08:30] there's been some team restructuring
[08:32] Personnel changes um you know changes to
[08:35] our like kind of vision and and
[08:38] direction that have you know in
[08:41] particular I think impacted like the
[08:42] teams of working on this feature set so
[08:45] it's made it a challenge at times to you
[08:48] know stay focused on it and and and not
[08:51] be affected by all that people changing
[08:54] bringing people on board and getting
[08:56] them up to speed about you know the
[08:58] whole project and and everything so it's
[09:02] it's been a whole journey but we're
[09:04] really close um it's it is disappointing
[09:07] to to put in this much effort that we've
[09:09] put into it and then miss it but um I
[09:14] felt like it was the right call so I I
[09:17] appreciate I appreciate your cander on
[09:20] that uh folks in the chat right here are
[09:22] saying oh they don't want another 318
[09:24] they admit
[09:25] it yeah I mean I don't think I
[09:30] I would not have thought that would have
[09:31] been a surprise to to anybody or a
[09:33] mystery to anybody
[09:35] um I am often quoted as saying you know
[09:41] we have the same conversations that our
[09:44] backers have I'm just I'm going to talk
[09:46] to you I'm going to talk to them we have
[09:47] the same conversations you guys do we
[09:49] just have them a few weeks earlier we
[09:51] have the same concerns we have the same
[09:53] excitements we have we take the same
[09:56] blows to the Head uh it's and yeah three
[10:00] uh 323 hit us as much as it hits you uh
[10:03] uh in the in the heart and the head uh
[10:06] in the fields uh we we don't want we
[10:08] don't want that to happen again is this
[10:10] me sitting here saying that it's never
[10:12] going to happen again no I'm not going
[10:14] to sit here and say something will never
[10:16] happen but everybody here is working
[10:18] very hard to make sure that it doesn't
[10:20] happen again and decisions like this one
[10:22] are one of the things that have to be
[10:24] done in order to ensure that uh from
[10:26] time to time so it is still 3:23 uh is
[10:30] 323 x uh whether that's 3231 or 3232
[10:35] it's too early to say whether that's uh
[10:38] before Invictus at Invictus slightly
[10:40] after Invictus it's too early to say uh
[10:43] but yeah like like like Chad said it's
[10:45] all there it's all still in the branch
[10:48] it's basically when everything else is
[10:51] stabilized and secure and in a place
[10:53] that we're happy and whatever then it's
[10:55] like okay now let's introduce this this
[10:59] this this new thing here and and see how
[11:02] that affects things and fix those things
[11:03] cuz yeah it's Chad made another great
[11:06] point this is literally your ability to
[11:08] summon and access your spaceship it's
[11:12] it's a fundamental change to the way
[11:14] everything moves in the persisent
[11:17] universe so it is not a small feature
[11:20] but uh 323 has a whole bunch of other
[11:22] features we're currently 1 13 14
[11:25] episodes in this season it's normally on
[11:27] 10 episodes we got a bunch more coming
[11:29] it's it's a huge huge patch even without
[11:31] this so we'll get all that stuff in
[11:33] stabilize all that stuff and then turn
[11:37] our attention back to this well Chad's
[11:39] attention probably will never turn all
[11:41] right so with that let's jump right into
[11:45] the questions here uh this qu this this
[11:48] uh uh show was originally scheduled for
[11:49] two weeks ago uh so we put up a thread
[11:52] and collected questions um we didn't
[11:55] have the show two weeks ago because uh
[11:57] uh Jared fell down and knocked himself
[12:00] out true story actually I knocked myself
[12:04] out got a
[12:05] concussion mostly back in normal now got
[12:08] a haircut uh so we're gonna I can't tell
[12:11] the
[12:12] difference you can't tell the difference
[12:14] we concuss Jared non
[12:16] concus neither could my mom all right so
[12:21] uh we collected a bunch of questions
[12:22] we're going to just jump right in uh the
[12:24] first series of questions let's let's
[12:27] let's talk about the personal hangers
[12:29] for a while we'll get into overall cargo
[12:31] gameplay and stuff uh but let's let's we
[12:33] have a bunch of questions that are
[12:34] focused primarily on the hangers so
[12:36] let's jump into those one of the big
[12:37] questions folks had after they watched I
[12:40] was how do we prevent unwanted people
[12:43] from getting into our personal hanger I
[12:45] mean obviously there's some kind of
[12:48] security around the elevator and stuff
[12:50] uh we recorded for ISC but it didn't
[12:52] make the cut at the time uh but also
[12:54] what stops people from just charging the
[12:57] outer doors and getting in what can you
[12:59] tell us about access
[13:01] restrictions yeah so the first thing
[13:03] I'll say is like with everything this is
[13:05] like the first release of this so what
[13:08] we come out with Now isn't the
[13:10] necessarily like our final Vision or
[13:12] where we leave it and I can tell you
[13:14] that we already are going to continue
[13:17] working on this after this release so
[13:19] there's going to be more to be done all
[13:21] around but um for this release the way
[13:24] that it's going to work is if somebody
[13:26] who is not in your party somehow ends up
[13:29] in your hanger then what's what we'll do
[13:32] is we'll treat it kind of similar to the
[13:34] impounding behavior that we have for the
[13:36] landing areas where they'll get a bit of
[13:38] a warning but then soon thereafter
[13:40] they're going to get just get kicked out
[13:42] and teleported out into the station if
[13:43] they're in a ship the ship will get
[13:45] impounded and that'll be that it's in an
[13:47] Armistice zone so the players won't be
[13:49] able to like draw weapons or shoot or
[13:51] anything like this um
[13:53] but excuse me but uh we do want to make
[13:58] sure that like players aren't just you
[14:00] know murdering each other in there um
[14:03] but we can do better like I said we want
[14:05] to have improved Security in the future
[14:08] and make it a more less gaming kind of
[14:10] experience to have heightened Security
[14:12] in there but it is just going to be
[14:15] using the impounding and teleporting
[14:16] behavior for this release does that
[14:18] include so obviously there there's some
[14:21] time limit there there's some time
[14:22] period couple seconds whatever uh if I
[14:26] grab some if I get in there really fast
[14:27] and I pick something up
[14:30] before I'm impounded do I do I do I
[14:32] teleport out with my stolen
[14:34] booty uh you will but I mean it'll be
[14:37] considered stolen at that point okay um
[14:40] yeah like there's more to be done there
[14:43] I think to make that like a more
[14:44] well-founded experience but like for now
[14:46] yeah you you'll get it but it will have
[14:48] been stolen I think it'll probably prove
[14:51] challenging to do a lot there like in in
[14:54] in practice uh but I'm not going to be
[14:57] surprised when we go live I'm sure
[14:59] there's going to be some people who are
[15:00] going to try to grief things and um we
[15:02] might have to react in in particular but
[15:05] uh it's it it's uh just one of those
[15:07] things where we need to spend more time
[15:11] with it to make a more well-founded like
[15:13] full solution there so we're going with
[15:15] the kind of easy or quick but uh clean
[15:20] solution of just like yeah just teleport
[15:21] people out and and just you know don't
[15:24] don't try to be too clever about it
[15:27] rukin rukin and chat says challenge
[15:30] accepted
[15:32] Chad like like there's going to be an
[15:34] array of of of lightning fast thieves
[15:36] trying to get in and grab stuff before
[15:37] it it'll become a challenge it'll become
[15:39] the 323 personal hanger thevery
[15:42] challenge watch it'll
[15:44] happen um in the chat they asked okay so
[15:47] that's how uh Intruders what about uh uh
[15:50] uh group members party members uh what's
[15:53] their access to your hanger like yeah so
[15:56] if they're in a party with you some if
[15:58] someone's a party with you they have
[16:00] access to your hanger even if you're not
[16:02] there so uh let's say like I my home
[16:06] location is area 18 and and Jared you're
[16:09] in a party with me you can go to Area 18
[16:12] and you'll have access to my hanger you
[16:14] can go in when I'm not there you can go
[16:16] in while I'm there you can use the Fred
[16:18] elevator kiosk while you're in there you
[16:20] can use the item Bank we want to make
[16:23] multi crew gameplay as seamless as
[16:26] possible so this is something in
[16:27] particular that we were definitely
[16:29] really thinking about throughout the
[16:30] whole process uh effectively the way
[16:32] that it'll work is when you go to the uh
[16:35] access elevator in the station and you
[16:39] call the elevator you're not going to
[16:42] get a list of every hanger at the
[16:45] station like I can't just go to somebody
[16:46] else's hanger randomly rather what has
[16:49] to happen is I need to be in a party
[16:51] with them and then when I go in the
[16:53] hanger I'll see my hangers in the
[16:55] elevator list and any party memb hangers
[16:58] in my list as well this is also another
[17:00] way that we tamper down on some of the
[17:03] the griefing it it doesn't get rid of it
[17:05] immediately like I'm totally aware that
[17:06] someone can just walk into the the
[17:08] elevator but the point is that you can't
[17:10] just without someone there use the
[17:12] elevator and go to somebody else's
[17:13] hanger like
[17:14] independently however you can do that if
[17:17] you're in a party with them that's also
[17:19] a way to manage uh kind of the the
[17:22] rights so if like you're in a party with
[17:24] somebody and they end up misbehaving all
[17:26] you need to do is actually just like
[17:27] kick them from your party very quickly
[17:29] they'll just be removed from the hanger
[17:31] and and kicked out so it's a way for the
[17:34] players to kind of control uh some of
[17:37] the access that they're giving to other
[17:38] players but when they have given it we
[17:41] do want to make sure that it feels like
[17:43] a very like kind of seamless
[17:45] experience um yeah and again we actually
[17:49] had a whole thing recorded on that and
[17:51] stuff like this but we uh it just for
[17:54] whatever reason it didn't make the the
[17:56] show we knew we were having the followup
[17:57] here so I'm glad we we got to cover it
[18:01] um the person for
[18:03] 323 the personal hanger and I'm glad you
[18:06] mentioned that even when this goes out
[18:08] in 3 323 x-end all and be all of this
[18:12] work like anything else for Star C
[18:14] Center any the work continues to iterate
[18:17] and evolve Beyond this for 323
[18:21] your personal hanger is it's one it's
[18:23] your home hanger it's it's at your it's
[18:26] at your um your your your home base
[18:29] whether it's uh Area 18 or microt or
[18:31] lville or whatnot and the size that you
[18:34] get is based on the largest ship that
[18:37] you currently own at the time that you
[18:40] log in and and pick it the next question
[18:43] uh says what happens if you buy a larger
[18:45] ship after that what happens to your
[18:48] hanger if you bu end up buying a ship
[18:50] that's too big for the hanger that
[18:51] you've been
[18:52] assigned yeah great question uh it's one
[18:55] of those things that like I should have
[18:57] gone into more detail on in the ISC it's
[19:00] funny even when my wife watched it that
[19:02] was the very first question that she
[19:04] asked me after it was done um so like I
[19:07] know everybody was like that's you know
[19:09] immediately well ah what if I get
[19:11] another ship or whatever um so yes we
[19:14] we've thought about that um for this
[19:17] release again this is just the first
[19:19] release we're gonna we're going to
[19:20] improve on this aspect of it for this
[19:22] release the way that it will work is if
[19:25] you buy a new ship whether that be
[19:26] outside the game or in game with in game
[19:29] currency and then you go to request that
[19:31] ship you can't do it if the hanger isn't
[19:35] large enough so instead what would
[19:37] happen is you would be given a what we
[19:39] call a public hanger and a public hanger
[19:41] is similar to a personal hanger just the
[19:44] differences is that if you were to leave
[19:46] the location anything that you left in
[19:49] that hanger will be um cleaned up and
[19:52] and and thrown away so you can't treat
[19:56] it like your personal hanger like the
[19:58] personal hanger you can decorate and
[19:59] leave all the stuff everywhere you log
[20:01] out of the game log into the game it's
[20:03] all still there Etc the public hangers
[20:06] uh aren't like that although they're not
[20:08] really that different and what I mean by
[20:10] that is uh one of the things I didn't
[20:13] have time to really go into in the ISC
[20:16] is you know how how does all this work
[20:18] when you're not at your home location
[20:19] and you're not using a personal hanger
[20:21] let's say my home location again is Area
[20:23] 18 and I go to Beijing point and I land
[20:26] um those are still assistent hangers
[20:30] they're just not your personal hangers
[20:32] and the distinction here is just that if
[20:34] I were to take my ship and land at beun
[20:36] point and then I'm given a public hanger
[20:40] while I'm at beun Point while I'm there
[20:43] anything that I leave in there is going
[20:44] to stay in the hanger so let's say I
[20:46] just drop a bunch of boxes on the ground
[20:48] and then go into the station to sell
[20:51] some Commodities or whatever or do
[20:53] anything else me and my friend then I go
[20:55] back to the hanger the stuff in that
[20:56] hanger is still there if I'm going to to
[20:58] log out of the game and log back into
[21:00] the game I actually still have my stuff
[21:02] there it's only when I purposefully
[21:05] leave the location that that stuff is is
[21:07] taken away so that's a a public hanger
[21:09] and when you say taken
[21:11] away what do you mean you lose them
[21:13] they're forfeit yeah so leave something
[21:16] that we want to improve on in the future
[21:18] what we would prefer to have is uh
[21:21] rented storage and fact I'll get to that
[21:24] in just a moment so that if you leave
[21:26] it's more like you kind of have to like
[21:27] buy it out of impounding you know or pay
[21:30] like the fee for for the storage costs
[21:32] for now it's just they're going to be
[21:33] discarded you will get a warning when
[21:35] that happens so that you know that
[21:37] you're going to lose that stuff if you
[21:38] were to leave it on the ground
[21:40] accidentally in the public hanger but um
[21:43] for now you're just going to lose them
[21:45] but the the kind of what what my point
[21:47] was with bringing all that up regarding
[21:49] your own ship is that it's going to be
[21:52] the same behavior as if you were to go
[21:54] to different location in the game but
[21:56] that is still a somewhat persistent
[21:59] experience anyways while you're there
[22:01] it's just not you it's what we won't do
[22:03] and where I think some people have you
[22:05] know kind of imagineered is that like we
[22:07] would like grow your hanger magically
[22:10] larger and like rearrange the things
[22:11] like we're not going to do that and
[22:13] instead what we want to do in a
[22:15] subsequent release is to add a a whole
[22:19] Pipeline and feature set for upgrading
[22:22] your hangers including like moving
[22:25] things around uh and on top of that
[22:28] renting the hangers at other locations
[22:30] in the game like it's not the intention
[22:32] that the hangers are only at the initial
[22:35] home locations it's just where we're
[22:37] starting now because we don't have the
[22:38] time to implement all of the feature
[22:41] work and backend that's needed for
[22:42] rentals and upgrades yeah I with
[22:45] including like fees and all over time
[22:48] and all this stuff so what what that
[22:51] means is just that you're going to have
[22:54] the one at the home location now but in
[22:55] the future absolutely we want players to
[22:59] use this as a way of like kind of having
[23:01] a sense of progression in the game so
[23:03] that when you're playing you can acrw
[23:06] wealth you can then use that wealth to
[23:08] expand your kind of area of influence
[23:11] and where you can you know tag have
[23:13] extra inventories have extra storage
[23:16] locations and kind of spread throughout
[23:18] and I think this will become especially
[23:19] important once we bring more solar
[23:22] systems online you're definitely going
[23:23] to want to have I think more hangers
[23:26] across the different solar systems in
[23:28] the game so this is just step one it's
[23:31] not the final you know stop in in this
[23:34] progression we know where we're going
[23:35] it's just trying to find the way to
[23:37] carve up the feature to still hit an
[23:39] initial release uh so this is one of
[23:42] those things that we kind of you know
[23:43] took a step back simplified it for now
[23:46] um but we're going to do more okay no
[23:50] good answer um you mentioned that uh
[23:56] players will be able to go into your
[23:57] hanger and access your inventory or
[24:01] access the freight will they be able to
[24:04] access their own stuff inside your
[24:08] hanger yes so if someone is in a party
[24:11] with you and they end up in your uh
[24:12] hanger they can use the FR elevator
[24:14] kiosk and when they use it they'll
[24:17] access their own inventory and if they
[24:19] were to use an item Bank in the um
[24:22] hanger they they'll access their own
[24:24] inventory when using the item Bank
[24:26] something that we actually started
[24:28] working on and in fact had working was
[24:31] having them also access your inventory
[24:34] so like if we were in a party um you
[24:37] could come to my hanger and then have
[24:39] the choice in the UI about whether you
[24:41] want to take things using the pr
[24:43] elevator kiosk from your inventory or my
[24:46] inventory um but we had some uh concerns
[24:50] about like security given
[24:53] that party membership isn't maybe as
[24:56] strong of a guarantee because you'll end
[24:59] up in missions or or doing things with
[25:01] people that are a little it's a little
[25:03] bit maybe too uh much power to give to
[25:06] somebody just because they're in a party
[25:08] with with you to have them access your
[25:10] own inventory so we still want to do
[25:12] that part we just want to add more um
[25:14] security and authorization functionality
[25:17] to be able to say okay for this person
[25:19] they can access my inventory they can't
[25:21] uh so we we want more as far as like
[25:23] permissions before introducing that part
[25:25] but certain they will absolutely be able
[25:27] to access their own inventory in your
[25:29] hanger that sounds like you've played
[25:31] with Sean
[25:33] Tracy yes he he will just Jack all your
[25:38] stuff and smile the whole time oh yeah
[25:41] no he's very happy about it very happy
[25:43] when he does
[25:44] it
[25:46] um how many home hangers uh can a player
[25:50] have and can they change the location
[25:52] after they choose them just the one for
[25:55] now and no they can't change the home
[25:57] location for this releas so like once
[25:59] you get it that's the one that you have
[26:01] again in the future we want to do more
[26:04] for upgrading and Rental yeah we we'll
[26:07] think about like moving I'm not sure how
[26:10] I feel about that for the initial one so
[26:12] there's still some a bit of design
[26:13] thought about like every single Corner
[26:15] case there about what we want to allow
[26:16] for players but for for now for for 323
[26:21] dox um you're not going to be able to to
[26:24] move that that the persistent hanger
[26:26] location so that's that's that that
[26:29] answer was was was was was very candid
[26:31] and truthful but I want to make sure
[26:32] that that's understood because when
[26:34] people make this decision I want to make
[26:35] sure that everybody knows to consider it
[26:38] uh when you start when this patch
[26:41] launches you will get a decision to
[26:43] choose your new starting location for
[26:45] the duration of 323 until whatever comes
[26:48] next when you choose Area 18 or microt
[26:53] or or huren or what not uh you were you
[26:56] were locking in your your persistent
[26:57] hanger your persistent personal hanger
[26:59] for the duration of that patch until
[27:01] additional functionality comes on so
[27:05] uh don't lose that information in the
[27:07] and for the folks who were for the folks
[27:09] who are making the the seven minute
[27:10] cutdown version make sure that gets in
[27:14] there indeed and and just to kind of
[27:17] pramp another you know I I read
[27:19] everything I I know like every question
[27:21] you guys have thought about like I I
[27:23] already know know it all so like ex
[27:24] another thing that people have raised as
[27:27] concerns is um you know Pirates like
[27:29] what if I'm a pirate and I don't want to
[27:32] like set my home location as forever to
[27:35] be Area 18 I want to go to Grim hex you
[27:37] know am I just screwed do I not get a
[27:40] personal hanger uh the answer is again
[27:42] like for 323 we just don't have the
[27:44] functionality to allow for those other
[27:46] locations to have them but it's not that
[27:48] we don't want to allow that like we we
[27:50] do want to it's just not going to be in
[27:52] this particular
[27:54] release
[27:56] um are there plans to allow personal
[27:59] hangers that are not at the major
[28:01] Landing zones uh in the chat folks are
[28:05] asking you about Grim heex uh but
[28:07] possibly either uh stations or smaller
[28:10] Ground locations or whatnot uh what can
[28:12] you tell us yeah essentially anywhere
[28:14] you can spawn a ship that has hang
[28:16] anywhere that has hangers will have
[28:18] personal hangers like that's the long
[28:20] and short of it so the rest stops Grim
[28:23] hacks uh we want it to be a prevalent
[28:26] thing to give the player options of
[28:28] course we'll come up with our own
[28:30] decisionmaking as far as the economics
[28:32] of it perhaps we will consider maybe
[28:35] charging more or less or having
[28:37] different Dynamics for um the the rental
[28:40] aspect of it or or
[28:42] whatever um but we want it to be a very
[28:46] open thing we don't want it to be
[28:47] constrained like again another thing
[28:50] that I've seen people you know comment
[28:52] on is that we're trying to push people
[28:54] to play on the landing areas on the
[28:56] planets um that were putting a lot of
[28:58] focus to keep people on the planets it's
[29:00] not actually our goal here it's just
[29:03] what we needed to do to get this done
[29:05] for this particular release we want
[29:07] people to be able to go out in the
[29:09] universe and claim some part of it and
[29:11] feel like that's their home and if you
[29:12] have a preference that's not you know on
[29:15] a planet that's we want to empower that
[29:17] we want you to feel like you can go
[29:18] somewhere else and call that place your
[29:20] home Grim hex iro whatever yeah um and
[29:25] and have multiple even so that you can
[29:27] bounce round so if you're spending a
[29:29] period of time in one region of the game
[29:32] especially like if once we get multiple
[29:34] solar systems we want we don't want you
[29:36] to feel like overly punished because you
[29:39] just have this one location and and
[29:41] you'll never go back to it because it's
[29:42] so far away we want it to feel like
[29:45] basically we're we're balancing here and
[29:47] this I think also kind of gets to kind
[29:49] of the core of Star Citizen as a game
[29:53] which is we're we're threading this
[29:55] needle of a simulation and and a you
[29:59] know enjoyable game experience so we
[30:02] want to make physicality and inventory
[30:06] tie into that and make the game feel
[30:07] tangible give you important decisions to
[30:10] consider have um risks involved with
[30:13] certain decisions so that you have to be
[30:16] thoughtful and and there that feeds into
[30:19] all aspects of the game so like for
[30:20] example let's say I have a bunch of
[30:23] inventory as far as like the guns and
[30:25] loadouts that I have access to at my
[30:27] home location if I'm going to go take a
[30:29] bunch of missions it's like on the other
[30:31] side of the solar system we want you to
[30:33] actually think about that and then when
[30:35] you're over there you you don't have as
[30:38] many options as you had before you can't
[30:40] just quickly change out your Loadout you
[30:42] can't necessarily quickly stock up
[30:44] unless you thought about it ahead of
[30:46] time right so we want you to be thinking
[30:49] about it at the same time we don't want
[30:50] it to just be super punishing so that
[30:53] you play for like 30 minutes die once
[30:55] and then just feel like okay I'm just
[30:56] done here I don't want to play this game
[30:58] anymore we're trying to find that
[31:00] balance to make it an interesting fun
[31:03] experience have those simulation aspects
[31:05] where it feels like a real space game
[31:07] it's not magical you can't just summon a
[31:09] thing out of thin air there there are uh
[31:12] important reasons why you need to think
[31:15] about what you take with you but it's um
[31:18] not overly punishing which is like a
[31:20] different track than other games like as
[31:22] an example like like a game like Diablo
[31:24] 4 or like a you know many other classic
[31:28] uh big games like that game you just
[31:30] have like this in you have this
[31:32] invisible inventory I mean you access it
[31:34] from a chest but the point is you can
[31:36] access it literally anywhere in the
[31:37] world and it's all the same inventory
[31:40] and that makes sense for that game right
[31:43] they have different problems they have
[31:44] different play patterns that they want
[31:45] to encourage but for the game that we
[31:47] want we want it to be a little bit more
[31:49] thoughtful a little bit more tactile but
[31:51] not as you know super punishing as maybe
[31:54] like a escape from tarov or something
[31:57] yeah
[31:58] CH Choice matters you you obviously want
[32:00] the choices to matter you want people to
[32:02] benefit from good choices and you want
[32:04] people to to struggle with poor choices
[32:08] and as always you you bring it to that
[32:10] point of realism and then you bring it
[32:11] back to the point of fun and that's
[32:13] that's that that that area is always the
[32:17] hardest part you to find I I see I see
[32:21] uh who's the person who's the person
[32:23] that there's somebody that the the
[32:25] Twitter algorithm's been putting in my
[32:27] feed even though I try not to see him
[32:29] all the time I can't remember his name
[32:32] the Game of Thrones guy um but you know
[32:35] you talking about the game not being a
[32:37] Sim or whatnot and so certain aspects
[32:39] yes are we want to push them to be more
[32:41] simulation like and as close as we can
[32:43] get within the confines of giant shared
[32:48] server MMO technology and then bring it
[32:51] back to the point of fun and stuff like
[32:52] that so there's always that that balance
[32:54] there uh greasy kesi
[32:57] took me a while I remembered your
[32:59] name get out of my feed yeah I keep
[33:03] seeing them on
[33:05] Twitter uh labotomy
[33:10] uh labotomy in the chat asks how are you
[33:14] going to make finding party me uh
[33:17] finding a party member's hanger not a
[33:19] scrolling contest in the elevator if
[33:21] you're in a large party yeah so whenever
[33:24] you go to the the elevator access
[33:28] in the station when you call the
[33:30] elevator that Carriage is your Carriage
[33:34] so when it shows up it only has the
[33:36] stops in it that you have access to so
[33:39] by default if you start in your home
[33:41] location like Area 18 and in this
[33:44] example I keep using then I would go in
[33:46] and if let's say I had a account that
[33:49] the largest ship on it was uh a drake
[33:52] cutless then I would go in and it would
[33:54] have a medium hanger that I would see in
[33:56] that list it would say you know whatever
[34:00] cthulu dark cthulu Lords uh medium
[34:03] hanger because that would be like my
[34:05] name or something something edgy like
[34:07] that uh so the point is is that like
[34:10] I'll see my hanger in there but nobody
[34:12] else's when I'm in a party with somebody
[34:14] and then I call that hanger I'll see
[34:16] their hangers at that location there as
[34:18] well as mine but unless you have like a
[34:21] lot of Hardy MERS there that list is not
[34:25] going to be long in fact it's going to
[34:26] be much smaller usually usually it's
[34:28] going to be like one or maybe two maybe
[34:32] three you know I am totally aware that
[34:35] there are people that go into the server
[34:36] and they just make you know this giant
[34:39] single server party that that person if
[34:42] you're in that party yes you'll go in
[34:44] and you'll see like a a hundred in that
[34:46] list uh I don't know I guess you in that
[34:49] case you're gonna have a little bit of a
[34:51] rough time but this is obviously a a
[34:53] pretty big Corner case um so yeah that's
[34:56] the main mechanism will get resolved as
[34:59] the feature continues to develop and
[35:01] people can choose more locations right
[35:03] now in 323 they're limited to the four
[35:06] primary locations but as people begin to
[35:08] be able to choose different locations
[35:10] for their primary personal hanger and
[35:11] whatnot that that problem will get
[35:13] diminished so yeah and actually I'll use
[35:16] this as an opportunity to kind of reime
[35:18] a point which is that it's only the ones
[35:20] at that location that you have access to
[35:22] so if I were to go to Beijing point and
[35:25] I have a party member whose personal
[35:27] home hanger is at Area 18 it's not going
[35:29] to show up yeah it won't show up yeah so
[35:32] like it's it's tied to the to the
[35:34] location so for that reason it does get
[35:36] parsed out and if you know as you as you
[35:39] were to say in that 100 person server
[35:41] unless all 100 people pick the same home
[35:44] location it's still going to be spread
[35:46] up amongst all the locations that they
[35:48] all picked
[35:50] independently um no beijan point is not
[35:53] a new station he's saying beini what oh
[35:56] sorry beini yeah i i i i this this comes
[35:59] up a lot uh half the developers here
[36:02] don't know the the term huren folks they
[36:05] call it stand you know the term Hur but
[36:06] but no no no no but I'm saying it's it's
[36:08] there's internal names for stuff and
[36:10] half the time that's what uh folks are
[36:12] folks are knowing like the number of
[36:13] times I had to be on the show like okay
[36:15] which one Stanton 2 stop saying Stanton
[36:17] 2 yeah so we we know it as Arc Leo so
[36:21] that's AR that's what we call it in game
[36:23] so yeah so you you you you can give Chad
[36:27] crap for all kinds of stuff not for not
[36:29] remembering the specific name of
[36:31] front-facing name of something that
[36:32] doesn't exist on the internal stuff
[36:37] um I was just trying to think of
[36:39] something else I wanted to give a [ __ ]
[36:41] about um how many people uh is so yeah
[36:44] so these parties can be pretty big is
[36:47] there a occupancy limit inside the
[36:51] personal persistent
[36:53] hangers no I mean it's not like uh it's
[36:56] it's not like we go to a a club and it's
[36:58] like oh no met occupancy you're gonna
[37:01] have to wait to get in there's nothing
[37:03] like that it it's you know if it fits it
[37:06] sits if you can cram a 100 people in
[37:08] there or at least attempt to like you
[37:10] can do it but that that's no different
[37:12] than right now in the game if you wanted
[37:14] to go into a small Hangar and try to get
[37:16] 100 people in the server to to to walk
[37:18] into the hanger you could try it right
[37:21] there's there's nothing that's going to
[37:22] stop you and that's the same thing here
[37:24] yeah I'm I'm now I'm imagining what an
[37:28] entire hanger crammed or entire server
[37:30] crammed into one hanger and the videos
[37:33] are come gonna come from that
[37:37] um is that a knock at the
[37:40] door is somebody knocking door they come
[37:42] to take you away is there somebody at
[37:44] the door just heard a knock at the
[37:47] door it's not a gimmick right nobody's
[37:50] having having me
[37:51] on it was literally it was just a big
[37:53] knock all
[37:55] right uh so let's see something
[37:57] something concuss
[37:59] Jared yeah maybe maybe did I did I say I
[38:02] swear is that somebody coming after me
[38:04] um all right so we've uh so okay more
[38:09] people Theory crafting here if a player
[38:12] is inside their ship inside their
[38:15] personal hanger and they log out from
[38:17] the ship
[38:19] bed where do they wake up when they come
[38:22] back
[38:23] in has the ship been stored
[38:27] yeah so uh in this case it won't be back
[38:30] in the hanger for this particular
[38:33] release um again this is just one of
[38:35] those things where uh there's a lot of
[38:37] complexity in how the hanger instancing
[38:39] works and considerations across shards
[38:42] and uh server meshing and all of this so
[38:45] for now no W it won't be that like if
[38:49] you were to log out in your ship in your
[38:52] hanger and then log back in you're going
[38:53] to end up in your ship in your hanger
[38:56] but we do want to revisit logging in and
[38:59] out with the hangers in particular so
[39:02] that's something that we're going to be
[39:04] absolutely looking at more specifically
[39:07] and if anyone's kept up with my hot take
[39:10] commentary on on Spectrum they'll know
[39:12] there's already some discussions like
[39:14] more broadly about login flow and this
[39:17] definitely ties into it about like just
[39:18] generally how logging in is supposed to
[39:21] work in the game and and Hangers are an
[39:23] important aspect of that uh but we're
[39:25] thinking much you know broader than that
[39:28] we're thinking you know the whole game
[39:30] so this we also need to be thinking
[39:32] about things like Habs like bases uh all
[39:35] all of it so this definitely an aspect
[39:38] but in this particular release it's it's
[39:40] not going to work out like that you'll
[39:41] end up just um logging back in the
[39:44] station yeah I I mean as it is right now
[39:47] and somebody can correct me if I'm wrong
[39:48] but I'm pretty sure if you try to bed
[39:50] log in a ship in the hanger it doesn't
[39:53] it doesn't let you because to try to
[39:54] avoid it gives you a restriction
[39:55] whatever but yeah as these things
[39:58] become more of a home for for for
[40:01] players as they begin to decorate it and
[40:03] like this I can see I can see the desire
[40:06] for that behavior to change which is
[40:07] probably where that question comes from
[40:10] absolutely um can we equip weapons and
[40:13] our personal hangers despite the
[40:15] Armistice
[40:17] zes uh no um I'm laughing of it there
[40:22] there was actually something of a bug
[40:24] that we had recently with people being
[40:26] able to draw weapons uh in in the green
[40:29] zones but um no that's not going to be
[40:34] possible you will be able to use the
[40:35] tractor beams in your arms or sorry in
[40:38] the hangers to be able to move things
[40:40] around but you're not going to be able
[40:41] to to pull out a gun it's it's not going
[40:43] to be like a stand your ground law Zone
[40:46] type situation uh for now you know
[40:49] that's something that we maybe we
[40:50] revisit I could see maybe a different
[40:53] location in the game like like Grim
[40:54] haacks maybe a more um p
[40:58] uh Focus Place having a little bit more
[41:00] standard ground type laws regarding like
[41:03] what you can do but for the moment it's
[41:05] just going to be uh you can use your
[41:07] tractor beam and and that's it okay so
[41:11] you still be able to like one thing we
[41:13] don't want just to to maybe unpack that
[41:15] a little bit is because people are going
[41:18] to still be able to get in you know
[41:21] through
[41:22] these slightly Corner case ways like
[41:24] someone can just fly in or someone can
[41:26] just walk into Carriage if they can draw
[41:29] their gun then while we can punish them
[41:32] for that they could just walk up shoot
[41:34] you in the head kill you while you're
[41:35] just hanging out there moving cargo and
[41:38] then yes they're going to get punished
[41:39] but like for someone that's like
[41:40] griefing they got what they wanted right
[41:43] it doesn't matter if they ended up dying
[41:45] or or even going to prison for a period
[41:46] of time they kind of got what they
[41:48] wanted out of that uh situation so we're
[41:50] just not going to have that here for now
[41:54] we'll revisit it again whenever we have
[41:56] better improved security mechanisms and
[41:58] more opportunity to consider all the the
[42:01] designed aspects of it as well gotcha so
[42:03] when you use the item Bank can you call
[42:05] up a rocket launcher the rocket launcher
[42:08] comes up in a crate no I mean you can
[42:11] access them you just can't like raise
[42:14] them and shoot somebody with it right so
[42:16] you can it's just as if you're in the
[42:17] station like you can have the gun on
[42:18] your back you can get the gun out you
[42:20] can use the tractor beam you can you can
[42:21] hold it you can load the guns onto the
[42:23] gun racks in the ship and stuff yeah
[42:25] yeah so like all of that's fine you just
[42:27] can't literally raise the gun and point
[42:29] it at somebody and pull the trigger
[42:30] that's the thing that you can't do all
[42:32] right um last of our personal questions
[42:35] before we personal hanger questions
[42:37] before we get to the more cargo related
[42:39] stuff um what does all this mean for our
[42:42] OG Hangar flare items uh can we use them
[42:46] to decorate our personal hangers how can
[42:48] we decorate our personal
[42:50] hangers so first off shout out to people
[42:52] who who remember the old OG Hangar flare
[42:56] um I remember way back in the day and we
[42:58] had you know fish tanks and and the
[43:00] jukeboxes and all of that and um in fact
[43:03] my team was the team that worked on a
[43:05] lot of that stuff way back in the day
[43:07] and uh unfortunately saw it kind of RW
[43:09] over time to the point that we ended up
[43:11] removing it it just it was implemented
[43:13] in a way that was very like Divergent
[43:16] from where the rest of the game was
[43:18] going as a more persistent
[43:20] game uh so it definitely has a special
[43:22] place in my heart like a lot of that
[43:24] stuff unfortunately this relas we're not
[43:27] going to have like Revisited that the
[43:30] prop team would need to go back and and
[43:33] uh rebuild some aspects of it because
[43:37] they're quite old at this point there's
[43:39] a lot of changes in the way some of the
[43:41] features work uh especially things
[43:43] regarding uh interactions and and
[43:46] usability and all of that so yeah
[43:49] there's some work there on the the props
[43:51] and interactables team to be done and
[43:53] they've been really focused on the
[43:54] mainline Feature work for this release
[43:56] so so it's not something that we've had
[43:58] the time to get to but it's not
[44:00] something that we've forgotten about
[44:02] like definitely we we you know remember
[44:04] those things funly um but it is kind of
[44:08] easier actually sometimes to make new
[44:10] things rather than like revisit a lot of
[44:13] old things so uh one of the things that
[44:15] we are adding in this in this release is
[44:18] Furniture so you are going to be able to
[44:20] buy furniture in game at certain
[44:22] locations and then be able to decorate
[44:25] your hanger with that couches and and
[44:28] stuff like this so you'll still have
[44:30] some things that are more social that
[44:32] are more you know interesting make it
[44:33] feel a little bit more homey to to um
[44:37] decorate your hanger with and and
[44:38] otherwise I look forward to all the fun
[44:40] shenanigans that people get up to with
[44:42] where they end up putting these things
[44:43] but uh it's it's it's not like we
[44:46] definitely want to encourage that kind
[44:48] of thing we want players to feel like
[44:49] this is their home we want players to
[44:51] have some fun things to to be able to
[44:54] decorate and place throughout the world
[44:57] um but for now it's going to be the
[44:59] newer Furniture um not the O OG hanger
[45:03] it's a as a good rule of thumb for for
[45:06] managing your expectations if you can if
[45:09] you can pull it out and hold it in your
[45:11] hands today then yes if if you if you
[45:15] can't physically manipulate it in in the
[45:18] game in 3222 or whatever patch we on
[45:20] then no that's the stuff that's still
[45:22] waiting to be brought in that's
[45:23] basically the process they got to go
[45:24] back the stuff was built like I said so
[45:27] a lot of it was built by our old friends
[45:28] at Behavior shout out to Dave Richard
[45:29] and Christine Marsh way back and when uh
[45:32] uh you know it was built specifically
[45:34] for the hanger module it wasn't built to
[45:35] be handled you know with with with with
[45:38] you know hands and ik and stuff like
[45:40] that almost almost used up my second
[45:42] Square um so that stuff all got to be
[45:44] converted it was also built in a
[45:45] different way different metrics
[45:46] different different processes back then
[45:49] so like that so that process of of bring
[45:51] that stuff over um I've seen the zoo
[45:53] they've they've built what we call it a
[45:55] zoo it's this giant level that's just
[45:57] all of the hanger flare and they're slow
[45:59] they they've been slowly when an artist
[46:01] finishes on a task and he's and he or
[46:03] she has like two days before they're
[46:06] before the next task is ready for them
[46:07] to begin they'll go over to that zoo and
[46:09] and start working on on converting other
[46:11] one so it is a thing that's in process
[46:14] it's very very slow and it's one of
[46:17] those things that I because that was
[46:20] start Sy when I started on so like Chad
[46:23] we have we have a big affinity for for a
[46:24] lot of that old stuff I want I want my
[46:26] stupid stupid juke box I want my
[46:28] calendar I want my I want my calendar
[46:30] that tells me what day of the week it is
[46:32] in 2014 and stuff like that to to work
[46:34] and I hope they don't fix that I hope it
[46:35] still just tells you what day it is in
[46:37] 2014
[46:39] um that's a good rule of thumb I think
[46:41] for the for the players like if you if
[46:43] you can manipulate it in game now it's
[46:46] something that you'll be able to gain
[46:47] access to and manipulate it then they're
[46:50] going to be some things that you won't
[46:51] be able to move without putting them
[46:52] into an inventory container box um that
[46:56] I mentioned I think on the ISC so there
[46:59] there are going to be some things that
[47:00] you can't just spawn the into the world
[47:02] mainly because just the art honestly and
[47:05] like the kind of gameplay setup of the
[47:07] thing wouldn't allow it there's just
[47:08] some things right now that really
[47:10] weren't meant to be independently
[47:12] spawned as opposed to like attach to
[47:14] something uh but there's there's uh if
[47:18] you can you know play with it in the
[47:20] game now yes and and manipulate it then
[47:23] then you'll have access I've been I've
[47:25] I've been chasing Steve I I've been
[47:26] torturing uh Steve Bender to to to take
[47:30] that old uh towel old hitchhiker esque
[47:33] towel from the old thing and make a
[47:36] melee weapon out of it uh he ignores me
[47:38] and walks the other direction
[47:42] um it happens more and more the longer
[47:45] I'm here quite honestly all right so
[47:47] let's jump into some more cargo specific
[47:49] gameplay um Chad are you are you okay if
[47:52] we go a little bit over the pass yeah
[47:55] like what's going to happen actually is
[47:57] like once I'm done with here I'm going
[47:59] to get ready and I'm going to hop on a
[48:00] plane and then I'm going to a bar
[48:01] citizen in Chicago so right I'm good
[48:05] okay so we're we we'll take some we'll
[48:07] we'll do some extra time uh uh we'll put
[48:09] some extra bonus time on this one
[48:11] because there are a lot of questions
[48:12] this is a big topic for folks um how
[48:15] does manual or autoloading work at
[48:19] outposts scrapyards and other non-
[48:21] hanger specific
[48:23] locations uh great question the answer
[48:26] is it won't
[48:27] so if there's not a hanger you won't
[48:30] have autoing as as an option um that is
[48:34] a feature not a bug like the the the
[48:36] point is is that like a small Outpost is
[48:38] not the kind of place where you're going
[48:39] to be doing large trades we're going to
[48:43] be um this is something I I'm not sure I
[48:45] got quite into as much detail on the ISC
[48:48] but one of the big changes that we're
[48:50] making about how you buy cargo is is
[48:53] changing it from being a raw resource
[48:55] allocation so you won't just be picking
[48:58] like three seu and then have the system
[49:01] like automatically figure out the
[49:03] configuration of cargo that you would
[49:04] need to put that into your ship rather
[49:07] the um the places in the game are going
[49:10] to have certain stock and that stock
[49:12] will include the box size so The Outpost
[49:15] the smaller locations in the game are
[49:16] going to only trade in smaller volumes
[49:19] and smaller box sizes so like one seu
[49:21] two seu and the idea is that like those
[49:25] um places is you're going to just
[49:27] manually load it yourself and you
[49:29] wouldn't show up with a C2 and fill it
[49:33] with like 700 seu of onsu boxes and then
[49:36] have it automatically pack it for you
[49:37] that's not the point of that location in
[49:39] the game it's not the the route that we
[49:41] want that to satisfy it's not what we
[49:44] want to do is differentiate the game we
[49:46] want the locations in the game to serve
[49:48] different roles we want there to be a
[49:50] reason to go to different places in the
[49:51] game and we want there to be a reason to
[49:53] use different ships in the game if
[49:55] you're a player that owns multiple ships
[49:57] you will be now rewarded for you know
[50:00] good decision making as far as like your
[50:01] trade route considerations and your
[50:04] location considerations and your ship
[50:07] choices uh and on top of that if you
[50:09] party with people you're going to
[50:11] benefit from the let's say the the
[50:13] choices that you have as a group and if
[50:15] you're on a larger ship you're going to
[50:17] benefit from them being able to help you
[50:19] so these smaller locations we don't want
[50:21] there to be like a giant hanger there
[50:24] that like sucks your ship into it and
[50:26] then just magically puts all of this
[50:28] huge amount of cargo volume that's like
[50:30] I guess just hidden underground or
[50:33] something that's not really the point of
[50:35] those locations on the flip side a
[50:38] bigger trade route location like the
[50:39] Leos which are a hub for feeding the
[50:42] landing areas those are meant to be big
[50:45] routes so like they are going to support
[50:47] automatic floating we want there to be
[50:50] big ships that go there and get these
[50:52] big amount of loads and haul them around
[50:54] but for those we would like like them to
[50:57] deal in the kinds of box sizes that make
[51:00] sense for high volumes uh so like the
[51:03] the 24 the 32 Su boxes uh think of it
[51:07] like this like you wouldn't show up to
[51:10] I'm I'm from Oklahoma so I'm gon I'm
[51:12] gonna drop a reference I don't know if
[51:13] anybody knows what a loves is but it's
[51:15] like a small truck stop
[51:18] right so you want to show up to that
[51:21] with like a huge truck I mean you would
[51:23] with a truck but you wouldn't then like
[51:25] take you know 10,000 boxes of Twinkies
[51:29] and then load up your your truck and
[51:31] then go to another you know love
[51:33] somewhere and in in this in the world
[51:36] that's not how Trad routes work right
[51:38] instead you have smaller shipments that
[51:41] will you know feed smaller routes uh but
[51:44] then for bigger trade routes we have
[51:46] like these
[51:48] huge uh ships that F you know carry huge
[51:51] loads of freight across the Panama Canal
[51:54] all this stuff and they have really
[51:55] particular routes that they go to with
[51:58] these much larger shipping containers so
[52:00] that's the idea here is that like there
[52:02] going to be places that just deal in
[52:04] higher volume there're going to be
[52:05] places that deal in smaller volume and
[52:07] there going to be some places in between
[52:09] the locations will have the facilities
[52:12] there that Mak sense for them um however
[52:15] that means that like if you I totally
[52:17] understand there might be someone in the
[52:18] game that just never wants to pick up a
[52:20] box right they just never want to do
[52:22] that and like yes that means that
[52:24] sometimes whenever you're hauling cargo
[52:27] at these smaller locations in the game
[52:29] like The Outpost that don't have
[52:31] automatic loading you're going to have
[52:33] to take the box out of your ship and put
[52:36] it onto the uh freight elevator but that
[52:39] is a pretty um short uh loop because the
[52:44] way that it's going to work at The
[52:45] Outpost is that the freight elevator is
[52:47] literally attached to The Landing Pad so
[52:49] it's it's a matter of a few feet away um
[52:53] it's not like you have to go through
[52:54] this huge experience you just land you
[52:56] put the thing on on the freight elevator
[52:58] you interact with it it'll take you not
[53:00] very much time again for the loads that
[53:02] you're dealing with we're not going to
[53:04] have you move 500 seu at an outpost one
[53:08] box at a time these are going to be
[53:10] small loads whereas on the flip side if
[53:13] you want to move 700 seu manually from a
[53:17] C2 um at you know whatever Area 18 or
[53:22] some other location in the game and you
[53:24] have a crew of people you can do that
[53:26] and you'll potentially be rewarded by
[53:28] having a more favorable profit
[53:31] margin um but obviously you're going to
[53:35] have to have thought about that ahead of
[53:36] time if you chose a bad configuration of
[53:39] boxes that might take longer whereas
[53:42] like if you bought your cargo at places
[53:45] that dealt in larger box sizes you're
[53:47] going to give yourself an easier time so
[53:50] we're basically giving the players more
[53:51] choices but also parsing it out to where
[53:55] it makes sense about like why why you
[53:57] would choose certain routes and what
[53:59] you're trying to get out of it
[54:02] um you said loves and there there was
[54:05] there was this one we used to go
[54:07] to association with Hostess chocolate
[54:11] pudding filled pies loves and I was
[54:13] thinking uh there's probably there's
[54:15] probably a bues out there that's big
[54:17] enough that would that would break the a
[54:19] bies yeah there's probably one bues out
[54:21] that's big enough to break the analogy
[54:25] um for autoloading now obviously the
[54:30] time the the time for an autoload is
[54:32] something we can adjust and it's
[54:34] something we absolutely certainly will
[54:36] adjust we it's whatever it is in 323
[54:39] will not be what it is in subsequent
[54:42] patches in fact uh I will point
[54:44] something out which is a lot of people
[54:47] in the ISC of course dissected the video
[54:50] to death and so one of the things that
[54:52] they did is they would pause the video
[54:54] when the UI the different uis are the
[54:56] screen and like really you know delve
[54:59] into like the pricing the times there I
[55:02] will just say all of that was Dev data
[55:05] like don't take that seriously because
[55:07] that's just the data that us as as like
[55:10] developers working on the game are
[55:12] testing with that is not tuned data that
[55:15] the economy team has finished yeah um so
[55:18] I don't want people to have certain
[55:20] expectations about timing or pricing and
[55:23] then get to the game and realize it's
[55:25] different and then be disappointed or or
[55:28] or
[55:29] surprised that just don't take those
[55:31] numbers seriously I guess is what yeah
[55:34] two things I always want to remind folks
[55:35] of sorry for the detour uh obviously
[55:39] there's the alpha live environment where
[55:42] things will change then there's PTU
[55:46] before that then there's evocati before
[55:49] that and then there's where uh my my
[55:52] guys you know will Dave Alex and Toby
[55:54] are working uh in in the
[55:58] absolute [ __ ] I'm going to say it it's
[56:01] it's they're Saints they do they do they
[56:03] do work that I could not do uh I don't
[56:06] have the patience for it I think it's
[56:07] that that information is All Temporary
[56:10] it's all just don't believe anything you
[56:14] ever see in a screen in a UI screen on
[56:17] ISC it's way too early in the process
[56:20] it's it's learn learn the lessons don't
[56:22] give yourself the ulcer uh just remember
[56:25] it's work in progress It's why we that's
[56:27] why we stick it on there uh and then
[56:29] also and kind of to to go a little bit
[56:33] further with that the one of the things
[56:36] that we want to be like kind of just
[56:38] like a philosophy I'll put it like this
[56:40] a philosophy that we have here is we we
[56:44] want to encourage people to engage with
[56:46] the manual loading so you should expect
[56:49] that the pricing in the loading times
[56:51] are going to be more favorable for
[56:53] manual loading if you want to do
[56:55] automatic loading that's totally cool we
[56:57] want that to be a viable path it's not
[56:59] going to be
[57:00] unprofitable but it's not going to be as
[57:03] profitable uh or even necessarily as um
[57:06] time efficient as manual loading so we
[57:10] want it to be an important tradeoff for
[57:12] for players to to make that that
[57:15] decision in addition to that we want the
[57:17] the pricing and the load time to be a
[57:20] little bit more intelligent like it will
[57:23] take volume into account for sure so
[57:25] like more cargo is going to take longer
[57:29] uh and cost more but the other thing is
[57:31] we want to encourage people to be making
[57:34] smart decisions like you shouldn't show
[57:36] up to a place and think you can buy 7001
[57:41] seu boxes and the cost to and time to
[57:45] load that is going to be the same as if
[57:47] you got whatever you know the same
[57:49] amount but in 32 suu boxes it's much
[57:52] more efficient to move a larger box than
[57:55] a lot of smaller ones
[57:56] so for that reason the pricing and
[57:58] timing is going to be considered of the
[58:01] number of boxes not just the volume of
[58:04] theu so there's a little bit of nuance
[58:06] there but I I want you know to be
[58:08] transparent about like the thought
[58:10] process going in there and like why it
[58:12] is the way that it is and what we're
[58:13] trying to
[58:16] encourage
[58:17] um let's see uh is the mass of cargo
[58:21] still planned to affect ship
[58:24] performance yes it won't for this
[58:27] release but it's um something that
[58:30] absolutely we've we've been talking
[58:31] about part of the problem is the it's
[58:34] more like we would have done it in fact
[58:36] even this release but there's some some
[58:40] interesting I'll I'll put it like uh
[58:43] considerations for the physics aspect of
[58:45] it right now in the game uh if it
[58:48] wouldn't be too difficult to make the
[58:50] cargo boxes that are attached to the
[58:52] actual cargo grids impact the mass of
[58:54] the ship but the problem is is that if
[58:58] you were to detach the cargo and just
[58:59] lay it in the ship it won't because
[59:02] anything that's inside the zone of the
[59:03] vehicle doesn't contribute to the mass
[59:05] of the vehicle at the
[59:07] moment but that's true of anything like
[59:09] you could drop a gun you could you know
[59:11] dead bodies it doesn't matter anything
[59:13] you just Chuck into the the the ship
[59:15] loose is not necessarily contributing to
[59:18] the mass either so it's like kind of a
[59:20] bigger question about how we deal with
[59:22] mass and science ships and also feeds
[59:24] into other things about Force
[59:26] and you know inheriting forces and
[59:28] pushing things around which we also want
[59:30] to use to encourage people to use cargo
[59:33] grids as um an advantage over just
[59:36] dropping stuff in your ship um so it's
[59:40] we're not there yet we've act we've
[59:43] absolutely been talking about it
[59:45] actively it's something that we are
[59:47] planning on um adding because we want
[59:49] again that to add some interesting
[59:51] decision making as far as not just the
[59:55] the ship but also uh if you load up a
[59:57] ship full of cargo we want it to fly
[59:59] slower you're going to be a little bit
[1:00:01] more D like endangered so if you're a
[1:00:04] big hauler you're not going to be as
[1:00:05] agile while you're moving your cargo and
[1:00:09] that might encourage you to want to
[1:00:10] party with other people who can uh
[1:00:12] defend you uh and then also on top of
[1:00:15] that it can help you make considerations
[1:00:17] during the loading process you may want
[1:00:19] to spread the the cargo around in your
[1:00:22] ship which will take longer but it'll
[1:00:24] make it maybe fly better
[1:00:26] so it give you some interesting decision
[1:00:28] making during the the loading
[1:00:30] itself but yeah not not for this release
[1:00:34] uh speaking of cargo grids uh when we
[1:00:36] did our two point two point two-part uh
[1:00:40] design brief uh cargo
[1:00:42] career November last year I think uh uh
[1:00:46] you mentioned that eventually we'll be
[1:00:48] able to attach almost anything to a
[1:00:51] cargo grid uh how's progress on that
[1:00:54] going it's coming but it's not as far
[1:00:57] along as I was hoping uh so I think this
[1:01:00] release there going to be some probably
[1:01:02] notable things that are missing I don't
[1:01:04] want to say just yet exactly what but um
[1:01:07] certainly vehicles are not going to be
[1:01:09] able to be attached to Cargo grades this
[1:01:11] release that one I will speak
[1:01:12] confidently on um and that's just more
[1:01:15] of considerations as far as the if the
[1:01:20] entities themselves are really ready to
[1:01:23] be uh attached to things dynamically
[1:01:26] like that for physical reasons or if
[1:01:28] they're ready to be just spawned in the
[1:01:30] world independently like that so for
[1:01:33] example ship items a lot of them are not
[1:01:35] really designed to just be sat there in
[1:01:37] the world they have like if you look at
[1:01:39] them some of the geometry on them isn't
[1:01:42] even like complete so it's it's that
[1:01:46] kind of stuff where uh we're not quite
[1:01:48] there yet and there might be some other
[1:01:50] gameplay aspects with that with more
[1:01:52] testing that we find that whenever
[1:01:54] they're attached they cause problems
[1:01:56] that need to be sorted out and we might
[1:01:58] have to pull back on what ends up being
[1:02:00] literally attachable to the cargo grid
[1:02:02] that doesn't mean that they may not be
[1:02:04] able to be called up on the freight
[1:02:06] elevator because we can still place
[1:02:08] things loose on the freight elevator but
[1:02:10] not literally attached to the Grid in
[1:02:12] those situations if we were to need to
[1:02:15] but as far as like attaching them to the
[1:02:17] cargo grid for example on the ship and
[1:02:19] then flying around with them like on the
[1:02:20] exterior of the whole SE like in the ISC
[1:02:22] that we showed we still have that
[1:02:24] ambition um it will be probably I think
[1:02:27] a a prog you know kind of work over time
[1:02:30] as far as like expanding everything that
[1:02:32] will be attached uh it's still the
[1:02:34] governing principle which is if it's in
[1:02:38] game I I want it to attach to a cargo
[1:02:40] grid
[1:02:41] reasonably okay uh so not a thing that
[1:02:45] probably but not corpses I I made that
[1:02:47] joke
[1:02:48] actually like that I would say is
[1:02:51] unreasonable thing even though I I
[1:02:52] mentioned it as an example you can't you
[1:02:55] won't be able toest ATT a corpse to a
[1:02:56] gargo grid
[1:03:06] sorry I'm sorry
[1:03:10] Jared will you be able to attach a space
[1:03:13] suit to the cargo grid uh yes but that's
[1:03:16] because the space uh suit will be a box
[1:03:19] right so those things have already had
[1:03:22] those considerations made for them so
[1:03:24] that you can drop um It On The Ground
[1:03:26] ends up being a box that should be able
[1:03:29] to be attached to the the cargo grid
[1:03:31] fine um What You Won't See is the the
[1:03:34] loose like you know spacit that's kind
[1:03:38] of like as if it were on a person on the
[1:03:40] ground with like soft body physics or
[1:03:42] something like that that we don't we
[1:03:44] don't support again it doesn't work like
[1:03:46] that in game now so you wouldn't attach
[1:03:48] it to the cargo grid like that the way
[1:03:50] that you do see those things is they're
[1:03:51] in the boxes and the boxes you will be
[1:03:54] able to attach serly saying anything
[1:03:56] that I can hold or wear is not going to
[1:03:59] attach the car yeah like if you can
[1:04:01] physically manipulate it now then that's
[1:04:03] something that you can reasonably expect
[1:04:05] the the vehicles I think are reason
[1:04:07] expect not to attach or to attach to
[1:04:10] attach yeah CU what if I just hold on to
[1:04:13] the thing and then I attach the thing to
[1:04:14] the cargo grid you have to use the
[1:04:16] tractor be right now
[1:04:21] okay think you should reconsider the
[1:04:23] corpses thing
[1:04:27] I'll I'll keep it in mind but I have
[1:04:30] questions uh when you think about it
[1:04:32] everything is Cargo that's that's my
[1:04:34] point that's my point it just seems like
[1:04:36] you're gonna you're gonna go all the way
[1:04:38] there and then just stop before we
[1:04:41] become ravers I want to see I want to
[1:04:43] see a giant Reaver H
[1:04:45] holy just Giant floating ship of the
[1:04:54] Dead you switch his face I can't staring
[1:04:57] up my face for us you see Chad's face
[1:04:59] just no okay Oh's he's stuck I broke
[1:05:02] Chad okay um here here here's here's a
[1:05:05] question uh is
[1:05:08] there we're we're in overtime folks so
[1:05:10] it's just don't think we're going to get
[1:05:13] anything good is there any future at all
[1:05:18] whatsoever for cargo decks Beyond just
[1:05:21] buying tractor beams and empty
[1:05:23] containers
[1:05:26] great question I I think cargo decks are
[1:05:29] an interesting thing in the game that
[1:05:31] were I would say designed at a time that
[1:05:35] we didn't really fully understand the
[1:05:37] full scope of the game that we were
[1:05:38] going to have and how exactly want we
[1:05:42] wanted the cargo loop as a whole to like
[1:05:45] come together I do think they still
[1:05:47] serve an important role at the moment
[1:05:49] but I there is work there to figure out
[1:05:51] like what is the best thing for them
[1:05:54] overall so so I don't want to give a
[1:05:56] definitive answer on anything like that
[1:05:58] um I will just say that like I we're
[1:06:00] totally aware that they they're kind of
[1:06:02] in an awkward place maybe you know at
[1:06:04] the moment as far as like what role
[1:06:06] they're serving and what we intend for
[1:06:08] them in the future um but we yes we do
[1:06:11] want them to be more integrated no no
[1:06:14] cargo decks are about 15 pounds of
[1:06:16] useless stuffed in a 5 pound sack
[1:06:21] Chad I can't see his face if you don't
[1:06:24] switch back to him
[1:06:29] ah I'm just saying they they could use a
[1:06:32] pass
[1:06:34] [Music]
[1:06:37] um uh what happens if we bring
[1:06:39] Contraband or stolen goods back to our
[1:06:42] personal we're back to personal hangers
[1:06:43] so what happens if we can bring what
[1:06:45] happens if we bring Contraband or stolen
[1:06:46] goods back to our personal hangers uh
[1:06:48] are we unable to store them do they flag
[1:06:51] the the the popo what
[1:06:54] happens uh so for the moment mostly it's
[1:06:58] going to work like the way that it does
[1:06:59] in game now um with the caveat that um
[1:07:05] hauling missions in particular are going
[1:07:07] to be different so if you just stole
[1:07:11] somebody else's cargo box and store it
[1:07:13] in your inventory it's not you're not
[1:07:16] necessarily going to get arrested you
[1:07:17] won't be able to sell it somewhere so
[1:07:19] you're going to be like like in Area 18
[1:07:21] for example you're not necessarily going
[1:07:23] to get arrested for that or F or
[1:07:25] anything for just having it on your
[1:07:28] person however uh for the hauling
[1:07:31] missions we want to make sure that
[1:07:33] players are incentivized I'll say to
[1:07:35] actually deliver the goods rather than
[1:07:37] just short circuit it so if you were to
[1:07:41] let's say take a emission from Crusader
[1:07:43] and you get this big whole SE worth of
[1:07:46] of cargo that you're intended to
[1:07:48] deliver if you're going to take that to
[1:07:50] a location that's not the delivery
[1:07:52] destination the system will know and
[1:07:55] will flag it and say like okay this is
[1:07:58] like a high-risk thing you shouldn't
[1:07:59] have it and um you'll you'll be notified
[1:08:04] if you won't be able to sell those at a
[1:08:07] normal uh location or sorry let me resay
[1:08:11] that if you are trying to sell it it's
[1:08:15] going to be flagged and actually you'll
[1:08:16] get fined for
[1:08:18] it even if you were to take it to like
[1:08:21] grimhex let's say for example a place
[1:08:24] that would normally take
[1:08:26] like a no questions asked type um
[1:08:28] terminal and you were to sell it there
[1:08:31] you can but the the price is going to be
[1:08:33] dramatically reduced because it's going
[1:08:35] to be considered high risk so the idea
[1:08:37] is that we don't want players
[1:08:40] to basically take these missions and
[1:08:42] just go to like the nearest like like
[1:08:44] Grim Hax or something like that and just
[1:08:45] offload it and not actually take it to
[1:08:47] the place that uh isn't it's intended to
[1:08:50] go on the flip side we don't want to
[1:08:52] overly punish Pirates Who Don't
[1:08:54] necessarily always know the ships that
[1:08:57] they're trying to to steal from and and
[1:09:00] while I know you know there's a lot of
[1:09:01] discussions about like how much we favor
[1:09:03] or don't favor piracy as like a loop in
[1:09:06] the game we don't want to um completely
[1:09:09] ice them out so that if they end up
[1:09:11] accidentally coming across let's say
[1:09:14] some boxes that were being delivered
[1:09:16] somebody else somewhere else that they
[1:09:18] just can't do anything with it and then
[1:09:20] it becomes kind of just like random
[1:09:22] about like what you can and can't steal
[1:09:24] and sell reasonably but they will be at
[1:09:29] a much lower cost so it's not going to
[1:09:30] be the kind of thing where like oh I can
[1:09:32] just like steal the boxes from somebody
[1:09:34] else's uh hauling contract and then I'm
[1:09:37] just Rich immediately because it's just
[1:09:39] so much and I didn't have to do anything
[1:09:40] for the time and then that would just
[1:09:43] make it to where nobody could ever
[1:09:45] deliver these things because people are
[1:09:46] just constantly like camping the the
[1:09:49] routes that they would be on so the tldr
[1:09:53] is we don't want to necess overly
[1:09:56] restrict where you can store things but
[1:09:58] some of the high
[1:10:01] high I'll say like high security or high
[1:10:04] high value items are going to have
[1:10:05] special casing for them okay uh current
[1:10:10] storage crates are IND discernible from
[1:10:12] one another in name and appearance will
[1:10:14] it be possible to differentiate storage
[1:10:16] containers via changes to either the
[1:10:18] name the label the color or some other
[1:10:21] means great question another thing that
[1:10:25] um we've definitely talked about and
[1:10:27] have plans for not going to be in this
[1:10:30] release but we definitely want players
[1:10:33] to lean into the inventory container
[1:10:36] boxes and right now they're yeah they're
[1:10:40] not
[1:10:41] differentiable uh We've we have ideas
[1:10:43] for things like tinting and and labeling
[1:10:45] and naming I I don't want to say that
[1:10:48] anything there is like totally concrete
[1:10:50] that we are going to do it exactly one
[1:10:52] particular way but we're definitely
[1:10:54] going to do something there we we want
[1:10:56] to give players a reason to use these uh
[1:10:59] more and then once you use them more you
[1:11:01] run into the problem of how do you
[1:11:03] differentiate between them to say
[1:11:05] they're like okay this is like my
[1:11:06] weapons container or this is like my my
[1:11:09] armor container or this is my ship items
[1:11:12] we want players to have some way to
[1:11:15] manage all of that to to you know keep
[1:11:18] it in check like once you get a you know
[1:11:20] a few of these going it's going to
[1:11:21] become like a whacka about remembering
[1:11:24] which one it was and opening them and
[1:11:26] and realizing it was the wrong one or
[1:11:28] calling the wrong one up from the
[1:11:29] freight
[1:11:30] elevator and so yes it's something that
[1:11:34] we're planning but don't have a specific
[1:11:37] uh solution that we've tied ourselves
[1:11:40] down to yet okay uh just a few more
[1:11:43] questions I think we can squeeze in here
[1:11:45] uh how much total seu can the freight
[1:11:47] elevator hold at any one time and are
[1:11:50] all freight elevator capacities the same
[1:11:52] at all
[1:11:53] locations uh
[1:11:56] I don't they're all different so there's
[1:11:58] there's four different sizes there's
[1:12:00] small medium large and extra large I
[1:12:03] don't want to speak off the top of my
[1:12:05] head to the exact volumes of those
[1:12:08] because I'll probably misremember one uh
[1:12:10] but they are different um and we want to
[1:12:14] basically encourage people to upgrade
[1:12:16] the ideas that if you have a smaller
[1:12:19] ship you shouldn't necessarily be able
[1:12:21] to do huge hauling runs on the flip side
[1:12:25] want to encourage players being able to
[1:12:27] call up ground vehicles uh or smaller
[1:12:30] vehicles in the freight elevators which
[1:12:32] we have not forgotten about I know that
[1:12:33] something that players were looking
[1:12:35] forward to that's still something we
[1:12:36] want to support so that the sizes of the
[1:12:39] freight elevators are designed to hold
[1:12:41] the ships that we want players to be
[1:12:43] able to call up from so the small ones
[1:12:45] aren't going to be like super tiny but
[1:12:47] uh the larger ones we certainly going to
[1:12:49] be better for for holding like 30 like
[1:12:51] 32 Su boxes for example okay um let's
[1:12:56] squeeze two more questions we haven't
[1:12:58] talked about the ship lift so ship the
[1:13:00] the lift that brings your ship up was
[1:13:02] one of the really cool reveals in the
[1:13:03] last uh the Cargo episode four weeks ago
[1:13:06] uh I got two questions about the
[1:13:07] shiplift here uh one will we be able to
[1:13:10] call up multiple Vehicles simultaneously
[1:13:13] on a single vehicle
[1:13:14] lift not for this release so again
[1:13:18] another thing that we've we definitely
[1:13:20] have thought about and considered um at
[1:13:23] the moment the experience is going to be
[1:13:25] very similar to the current asop which
[1:13:27] is you'll call up a ship if there's a
[1:13:29] current ship on the on the landing
[1:13:31] platform it'll lower and and despawn
[1:13:33] that one spawn the new one then raise uh
[1:13:36] so it'll just be one at a time for this
[1:13:38] release but if you can move it off to
[1:13:40] the side you can chain the the request
[1:13:43] to to get multiple like that but what
[1:13:45] you won't be able to do is like say like
[1:13:47] okay I want my cutless and I want my
[1:13:51] Gladius and I want my um Raw or
[1:13:55] something like that and then you know on
[1:13:56] on a big platform like want their Rock
[1:14:00] I'm sorry said nobody nobody has ever in
[1:14:02] the world in the history of Star Citizen
[1:14:05] said I want my rock DS did you say rock
[1:14:06] or Rock
[1:14:08] DS yes I said Rock okay rock is fine
[1:14:11] just nobody's ever said I want my rock
[1:14:13] DS that's never happened no I didn't say
[1:14:16] DS um okay I'm sorry yeah so like
[1:14:20] there's some design considerations there
[1:14:22] as well as technical um
[1:14:26] how do they come up how do you pick
[1:14:28] multiple at the same time how do you say
[1:14:31] if there's three ships on the platform
[1:14:33] and you only want to swap one of them
[1:14:35] out like all of that stuff just adds
[1:14:37] like a lot of complexity to the system
[1:14:39] that we just didn't want to mess with
[1:14:41] now we want to keep it simple and and
[1:14:43] and get it working there's a lot that's
[1:14:45] already changing in the ship spawning
[1:14:47] flow right now adding this in the middle
[1:14:50] of all that is was just a step too far
[1:14:54] so we we are trying to keep this step an
[1:14:57] you know an iterative step as far as
[1:15:00] making the changes to spawning via this
[1:15:02] ship platform but we will revisit this
[1:15:05] it is something we we want uh again to
[1:15:08] encourage people to upgrade to the
[1:15:09] larger hangers so you know we want we
[1:15:13] want that to not just be useful for Big
[1:15:16] Ships but also multiple and also multi
[1:15:18] careering and and all of
[1:15:21] that I'm sorry chat it's not that I
[1:15:23] don't like the Rock DS It's that I hate
[1:15:26] it um it's okay it doesn't like you
[1:15:29] either we're we're allowed to like some
[1:15:32] things and not like other things people
[1:15:33] think you just have
[1:15:36] to I got feelings I got op it knows what
[1:15:39] it did it doesn't do
[1:15:42] nothing sorry
[1:15:46] uh is there any other location oh s Last
[1:15:49] Ship question is there any other other
[1:15:51] location besides the personal hangers
[1:15:53] where the ship lifts are being used to
[1:15:55] deliver vehicles to
[1:15:58] you not at the moment okay um all right
[1:16:02] last
[1:16:07] question I was just thinking about what
[1:16:09] I said and I am going to get that
[1:16:10] message now I'm in trouble uh fauna
[1:16:16] 323 H has the addition of of the copion
[1:16:19] and the meric
[1:16:20] bird hypothetically don't you dare say
[1:16:23] not in this release
[1:16:26] hypothetically if I go out to the plains
[1:16:28] of of of of lville or Microtech and i i
[1:16:33] coer a a kind and gentle Copan onto my
[1:16:36] ship and I bring that ship back to my
[1:16:38] personal hanger and then I coers the
[1:16:41] kind and gentle copion out of my ship
[1:16:43] into my personal
[1:16:44] hanger and then I
[1:16:47] leave does that copion now persist in my
[1:16:50] personal hanger for all time
[1:16:55] ah oh man uh so it's going to work the
[1:16:59] way to think about what Will persist in
[1:17:02] the hangers is just to think about what
[1:17:04] Will persist in the ships because it's
[1:17:07] identical uh and I think people have
[1:17:11] probably seen the video of like people
[1:17:13] spending like a month collecting NPCs in
[1:17:16] the game and in their ship uh so for now
[1:17:20] for sure uh if it persists in the
[1:17:22] vehicle it's going to persist in in the
[1:17:24] hanger in this case yes I believe that
[1:17:26] the copon would persist I haven't
[1:17:29] personally tested that
[1:17:31] so but I'm pretty sure it would persist
[1:17:34] um in in fact we already have bugs right
[1:17:37] now about people um being attacked in
[1:17:41] the station by like the copons and stuff
[1:17:44] that were like kind of we'll say
[1:17:46] encouraged into the station by some
[1:17:47] other players so like if you're able to
[1:17:50] get one all the way into your hanger
[1:17:51] then like okay you're going to get
[1:17:53] rewarded uh maybe that's your own
[1:17:55] security mechanism we we solved it I
[1:17:58] just I just you know I was so excited
[1:18:02] for this for the for for for for the fa
[1:18:04] and stuff and I see I see the backer so
[1:18:06] many people are like can we kill it can
[1:18:09] we hunt and murder it and I'm just
[1:18:11] like that's we need pets I mean there
[1:18:14] you go pets we we did it be be kind and
[1:18:16] gentle bring them home and get and get
[1:18:19] let them sit on the couch and stuff and
[1:18:21] and keep them from falling be careful be
[1:18:23] sure they don't fall down the vehicle
[1:18:24] lift the doors open and stuff so I'm
[1:18:26] just like I said I want to be real clear
[1:18:29] I'm joking I'm having fun but he did not
[1:18:31] say that's a definite thing that is
[1:18:34] clearly an untested situation that I
[1:18:37] presented to Chad uh he's speaking
[1:18:39] hypothetically based on his knowledge of
[1:18:40] how the system works right now uh this
[1:18:44] is not a guarantee or or a an admitt
[1:18:48] that it does work um but I want all of
[1:18:51] you every single one of you to try it
[1:18:54] when the time time comes because I'd
[1:18:56] rather build little personal zoos than
[1:18:58] be out there murdering a bunch of
[1:19:00] virtual dog cat things who just want to
[1:19:03] be
[1:19:04] loved um that's it hey Chad do you want
[1:19:07] to see my Cobra
[1:19:08] hiss yeah show my Cobra his look at this
[1:19:12] look at that mind you toy amazing isn't
[1:19:15] it cool that is really cool actually
[1:19:17] it's cool it's got a it's got a Viper in
[1:19:19] driving and it's got Cobra Commander in
[1:19:21] there it's really cool I like it
[1:19:25] all right back to
[1:19:29] me everybody that's the show thanks a
[1:19:33] lot thanks for hanging out at the end of
[1:19:35] this Friday I think we're going to do a
[1:19:37] raid uh for somebody I didn't check my
[1:19:39] messages to see who but if there's a
[1:19:40] raid be sure you tell that uh spread the
[1:19:44] spread the love and support our fellow
[1:19:46] Star Citizen streamers in this fine day
[1:19:48] uh if you haven't watched it check out
[1:19:49] this week's episode of ISC it's all
[1:19:51] about uh the Water Wizards who are who
[1:19:54] are who are
[1:19:55] uh doing all these big improvements to
[1:19:56] the graphics and simulation and
[1:19:58] rendering for water uh next week uh come
[1:20:00] back to another episode of ISC uh it's
[1:20:03] going to be on the whole host of Arena
[1:20:05] Commander updates that are coming in 323
[1:20:07] you thought the Pu just had a whole
[1:20:10] bunch of pu stuff the 323 just had a
[1:20:12] whole bunch of pu stuff it's even got a
[1:20:14] whole bunch of stuff uh uh in 323
[1:20:17] including new experimental modes and new
[1:20:19] RAC tracks and a whole bunch of fixes
[1:20:21] and the return of something folks have
[1:20:22] been waiting for for a long time that
[1:20:23] I'm not going to spoil right now cuz I
[1:20:25] got to make another show for next
[1:20:26] Thursday and then we'll come right back
[1:20:27] here next Friday and we'll have a uh uh
[1:20:31] all the members of the UI team bone uh
[1:20:34] sit in the chair and uh they'll answer
[1:20:36] your questions about UI stuff star map
[1:20:38] and and interior map and MOB glass and
[1:20:40] all that stuff so uh that was Chad say
[1:20:44] hi Chad good bye Chad hi Chad goodbye
[1:20:47] Chad I'm Jared thanks for watching uh
[1:20:50] thanks for staying with us for extra
[1:20:52] time today uh we know how much the the
[1:20:54] stop toic means to folks uh take care
[1:20:57] and yeah I'll see you next week
[1:20:59] everybody bye

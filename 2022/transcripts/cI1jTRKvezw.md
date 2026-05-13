# Star Citizen Live: Mission Commission

**Video:** https://www.youtube.com/watch?v=cI1jTRKvezw
**Date:** 2022-10-28
**Duration:** 58:23

## Transcript

[00:05] Hello everybody welcome to another
[00:08] episode of Star of Citizen live I'm your
[00:10] host Jared Huckabee I heard somebody's
[00:11] phone vibrate
[00:13] I heard it
[00:16] welcome to the show uh it is Friday
[00:19] October what is it 28th uh 2022. uh we
[00:23] are here broadcasting from the only
[00:25] constant uh if you've never seen Star
[00:27] Citizen live before it's where we take
[00:29] about an hour out of the end of our week
[00:31] and we hang out with some of our
[00:33] developers who are help making uh one of
[00:36] our two uh tremendous games that are
[00:38] currently in development Star Citizen in
[00:40] Squadron 42 on the show this week we've
[00:42] got members from the mission feature
[00:44] team up first and then uh we're going to
[00:46] a member of the
[00:48] EU
[00:50] sandbox 2 team is that right sandbox 2
[00:52] Team see he's naughty the sandbox 2 Team
[00:54] uh in the back half so strap on in we
[00:57] got we got a lot of cool stuff to talk
[00:58] about uh before we get started I want to
[01:01] remind folks that inside Star Citizen
[01:03] came back uh yesterday uh if you haven't
[01:05] had a chance to check that out on
[01:07] YouTube be sure you take a look at that
[01:08] uh it's the first show from inside our
[01:11] new uh Manchester Studios uh here in
[01:14] Enterprise City in the center in the
[01:16] heart of downtown Manchester
[01:19] um we'll be showing a little bit of the
[01:21] new office here and there it's still
[01:23] under construction not all the floors
[01:25] are open and everything we want to we
[01:26] want to wait until uh the whole thing is
[01:29] is ready and really make a big impact
[01:31] but we'll see what we can sneak in here
[01:34] and there along the way uh during
[01:36] Insight Star Citizen we met with John
[01:39] Griffis from the EU sandbox 2 team and
[01:42] he took us on a tour of the new
[01:44] underground facilities the planning
[01:46] stages where you show we showed a
[01:49] wonderful soft software called Miro that
[01:51] is used to basically plot out the full
[01:54] scope of work for all of the designers
[01:56] and the artists and the tech artists and
[01:58] stuff that are on the various teams
[01:59] working on this stuff and then we went
[02:01] over to our own Sylvan Howell engine
[02:03] programmer 3. we left the three off of
[02:06] his title and he was very much like
[02:09] my three away so Sylvan engine
[02:11] programmer three apologies from our
[02:14] Frankfurt Studio as he took us on a tour
[02:16] of the current state of the Gen 12
[02:18] renderer which will basically yield all
[02:22] manner of performance improvements in
[02:24] Alpha 318 and Beyond so definitely want
[02:27] to check that out if you haven't already
[02:29] but let's move on to today so on today's
[02:32] show we are starting with two members
[02:35] from the esteemed Mission feature team
[02:36] we've got Elliot and Max Elliott Max how
[02:40] you doing guys yeah I'm all right yeah
[02:42] good welcome to the only constant now
[02:45] you've been here before you were you
[02:46] were here for the citizen on filming yep
[02:48] I'm on a much better chair now though
[02:50] yeah we did have you on a little weird
[02:52] little stool with no buck no back it's
[02:55] to keep it's to help with your posture
[02:57] as if you saw that video my posture was
[02:58] not good these chairs while incredibly
[03:01] comfortable are also not good for your
[03:03] posture I think everybody who sits in
[03:05] these chairs for a while ends up like
[03:07] slowly slouching down the hope I just
[03:09] moved my desk it's like it's not good
[03:11] it's not good so watch out for that
[03:12] during the show
[03:13] um max this is your first time yep your
[03:15] first time how you doing I'm good I'm
[03:18] excited it's like very nice spaceship
[03:20] this is your first time on the live show
[03:22] too yeah it was I was on an ISC a few
[03:25] weeks ago
[03:26] um talking about what we'll be talking
[03:27] about today but yeah okay but you've
[03:29] never done the live show before so no
[03:31] I'm not a are you nervous
[03:33] um a little bit I mean literally
[03:35] anything can happen I've live streamed
[03:36] before so it's all right oh okay well
[03:39] never mind then all right you want to
[03:40] change chairs no no no all right so uh
[03:44] we're happy on because at citizencon uh
[03:47] which was on October 8th and you can
[03:49] watch these presentations that we're
[03:51] talking about on uh our YouTube channel
[03:53] uh Elliot you're part of a presentation
[03:55] on about a new Mission type called
[03:58] investigations uh with that moves away
[04:02] from the cargo and trading missions
[04:05] moves away from the combat missions that
[04:08] we have and
[04:10] attempts to move the gameplay of the
[04:13] Precision Universe towards a well how
[04:16] would you explain it
[04:19] um
[04:20] it's
[04:23] um so when when we're building stuff and
[04:25] because of the scale of this game we try
[04:27] to build things very modularly and
[04:28] because we build really modularly it
[04:30] means there can't be a lot of story
[04:32] injected into it because injecting story
[04:33] and stuff is very difficult so this is
[04:36] our way of looking not only at trying to
[04:38] build something modular but also trying
[04:41] to inject heavy amounts of story in it
[04:43] to really bring the Pu to life okay
[04:46] um so right off the bat I'm going to ask
[04:50] why investigations of all the things
[04:52] that we could be doing to inject story
[04:54] that was the ultimate goal why why
[04:58] mystery like why not uh science fantasy
[05:02] or wine or why not a science western or
[05:05] whatever what what about investigations
[05:07] drove us there so
[05:10] investigations uh
[05:13] the tech that is there for them like
[05:15] already exists so a lot of this we can
[05:17] push ourselves in in mft and what that
[05:19] means is we can leave other teams alone
[05:21] to do their stuff without us constantly
[05:23] bugging them for a little bit of this a
[05:25] little bit and that because all the
[05:26] fundamentals are there so it's something
[05:28] that mft can sort of own and just push
[05:30] all the way and you know without bugging
[05:34] anyone doing anything and you know it's
[05:37] also quite a fun
[05:38] fun thing to do you know having an
[05:40] investigation letting people think come
[05:43] up with their own answers potentially
[05:45] talk about it have different answers I
[05:48] think it's just a fun game mode I
[05:50] appreciate the Candor in that answer uh
[05:53] basically it it's if you if we wanted to
[05:56] do something else it would require more
[05:58] people from outside the team and stuff
[06:00] like this and and you wanted to you
[06:01] wanted to tackle a task that could be
[06:04] relatively self-contained within mft yes
[06:07] so so that led us to investigations were
[06:09] there other uh were there other avenues
[06:12] that you guys considered before invest
[06:15] before landing on investigations
[06:17] there was a few other things that you
[06:19] know we have this sort of I guess list
[06:21] of things we'd like to do
[06:23] um but we kind of landed on
[06:25] investigations it was one of the things
[06:27] I want to push is you know on my Siege
[06:28] video I said I don't like hand-holding
[06:31] um and investigations are very much
[06:33] non-hand holding so it's you know right
[06:34] up my alley now we're going to talk
[06:36] about that in a minute how does the
[06:38] division of labor work because you just
[06:40] said you know you want you want
[06:41] something that's going to that you can
[06:43] do internally without the need for a lot
[06:45] of external help but is all of the
[06:49] mission feature team now working on this
[06:51] and we're not going to get any other
[06:52] missions for the game like describe to
[06:55] me the scope of work here so no
[06:57] investigations is uh you know uh purely
[07:01] me making uh as in the technical part of
[07:04] making it
[07:05] um along with an engineer
[07:07] um one of our coders
[07:09] um all our other designers on mft are
[07:11] working on other exciting things like
[07:12] Max here is also doing something else
[07:14] and we'll continue to while I build
[07:16] these investigations but um you know
[07:19] sort of the other sort of divisioning up
[07:22] of the work there's potentially some
[07:24] work on like say the props team for
[07:26] certain things we might need but a lot
[07:28] of a lot of heavy work sort of on the
[07:30] narrative side because like I said in
[07:32] the the sales and con investigation at
[07:34] its core is a story
[07:36] so
[07:38] how a stock scope a stock scale here is
[07:43] are we talking about a new profession
[07:44] here are we talking about a new way of
[07:46] life or are we you know we've got people
[07:48] who want to be cargo haulers we got
[07:50] people who want to be mercenaries or
[07:52] bounty hunters and stuff like this are
[07:54] are we are we are we intending to push
[07:57] this to the point where there will be
[07:59] Sherlock Holmes's and and or Columbo's
[08:03] like this is what I do in in in the
[08:05] verse or is this a a happy diversion
[08:08] here and there what what are our
[08:11] intentions here
[08:12] I think like
[08:14] happy diversion I it's
[08:16] I don't think it's something you can do
[08:18] full time it's
[08:20] because you know we don't want you to
[08:21] constantly repeat the same old story
[08:22] because you're going to know the answers
[08:23] it's not going to be fun and engaging so
[08:25] because the story is the key to it we
[08:27] have to make sure that you know we're
[08:29] constantly putting out sort of new
[08:31] content and the system we're hoping to
[08:33] create will hopefully allow us to get in
[08:35] a Groove and pump some out pretty
[08:37] quickly and constantly which will
[08:40] hopefully satisfy that sort of Pi
[08:42] lifestyle but it will also be just sort
[08:44] of like um your log on one day and then
[08:47] oh I've got a couple of like
[08:48] investigation things I can do but you'll
[08:50] never try it you'll never do the same
[08:51] one twice you say that but you know
[08:55] backers are are always players and
[08:57] backers are always going to
[08:59] um
[09:00] push things where they want to push
[09:01] things it's I think once you give them a
[09:04] little bit of this they're going to
[09:05] start taking things in their own ways
[09:07] Stephen gamer in the chat is already
[09:09] talking about the pinkertons making a
[09:11] comeback you know you know there's going
[09:12] to be a player or you know based on
[09:14] pigeons and what you know detective
[09:16] agency and stuff even even beyond the
[09:18] missions that you create it's like that
[09:20] it's going to inspire folks to to a new
[09:23] kind of lifestyle zone yeah
[09:25] um you mentioned difficulty so let's
[09:27] talk about that
[09:29] there is always an eternal debate and
[09:32] this is this is with any game this isn't
[09:34] just exclusively to Star Citizen but
[09:36] there's also always this debate about
[09:38] how challenging or or how much
[09:41] hand-holding uh should be done
[09:44] um
[09:45] I know in Siege uh which you know came
[09:48] on the last patch there was some uh
[09:51] there was some hemming and hawing I
[09:53] think within the community about how uh
[09:57] brutal some of the uh uh hand holding
[10:00] wasn't if that makes sense that's
[10:01] probably not the best way to say it uh
[10:03] we didn't exactly spell everything out
[10:05] for folks which was intentional yes uh
[10:08] talk to me about about this and and how
[10:11] we balance this because I know at your
[10:14] point of view okay you can tell us what
[10:15] your point of view is but you know tell
[10:17] the people speak to the people and tell
[10:18] them what Elliot's point of view on the
[10:20] difficulty is for investigations of
[10:22] Siege no for for anything okay
[10:26] so when it came to Siege
[10:30] um I kind of wanted to sort of
[10:33] put you in a sandbox and give you tools
[10:35] and then hope that you figure out how to
[10:37] use the tools to achieve a goal
[10:40] um so we started off with and again this
[10:43] is one of the good things about having
[10:44] this sort of iterative development is we
[10:46] can try something and then hone it in
[10:48] over the course and that's what we did
[10:50] with sieges we put out the first version
[10:51] We collected a bunch of feedback from
[10:53] players and we saw that okay some people
[10:55] didn't like that so the majority didn't
[10:56] like that okay so we're gonna just hone
[10:58] it in a bit and not just go back to our
[11:01] complete old ways of marking everything
[11:02] or doing this or doing that just sort of
[11:05] go okay well we'll help here a little
[11:06] bit and we'll help here a bit and then
[11:08] see how that is when it comes to
[11:10] investigation I feel like the we'd be
[11:13] doing sort of disservice to the career
[11:15] path to the sort of the gameplay there
[11:17] if I was to help out loads so
[11:20] essentially you'll get a marker to tell
[11:22] you where to go for the rest of the
[11:24] story from there on you'll have to
[11:26] figure out yourself we'll give some sort
[11:28] of you know maybe like a synopsis of a
[11:30] clue you found to help you sort of
[11:31] understand what you're reading if if you
[11:33] need it but it should be on you to sort
[11:36] of go okay I found this piece of clue so
[11:39] now I think I need to go do this without
[11:42] me going right you found this here's a
[11:44] timer time is finished Mark the item out
[11:47] in the world I'd rather you feel like an
[11:50] investigator
[11:51] and find the item because we have like
[11:54] it's there is sort of like a natural
[11:57] level of a cap for like say ability you
[12:01] know when you're playing combat based
[12:02] missions we don't exactly make them
[12:05] easier you'll hit a point where you're
[12:07] like right I can't do this anymore like
[12:08] I don't have maybe the ship that I can
[12:11] battle against this other ship with or I
[12:13] don't have you know the personal pilot
[12:15] skill I I can't play my balance I've
[12:17] made the bounty system I can't play it
[12:19] um so you know you have that sort of
[12:22] natural skill level and I think that's a
[12:24] part of a good part of the game is that
[12:26] you can go well I'm you know I'm at the
[12:28] super rank of being a bounty hunter I'm
[12:30] the best of the best and then some other
[12:32] person can be well I've solved every
[12:34] single investigation and that Bounty
[12:35] Hunter could go I've I've tried one and
[12:37] I can't figure it out sort of thing
[12:41] when and Max would be interested in
[12:43] hearing your opinion on this continuing
[12:46] the the difficulty thing there are
[12:48] people who obviously jump in and play
[12:50] the game for hours and hours and hours
[12:53] uh Chris talked to sizzling on about the
[12:56] average you know a daily playtime you
[12:58] know skyrocketing in 2022 compared to
[13:01] 2021 and 2020. that said there are also
[13:05] those people who can only jump in and
[13:08] play for an hour a night you know it it
[13:10] it's it's a casual Pursuit and such like
[13:13] this how do you balance the difficulty
[13:16] of something not just investigations but
[13:18] Siege and everything for people who
[13:20] can't dump five six hours into a
[13:23] PlayStation a new play session you don't
[13:25] want to leave the the the the the for
[13:29] lack of a better term the filthy casuals
[13:31] I hate that term but you don't want to
[13:32] leave you don't want to leave those
[13:34] people out so how do you balance this
[13:37] yeah I think it's it's definitely like a
[13:40] challenge
[13:41] um especially in our game when you can
[13:43] go and essentially choose to do whatever
[13:45] you want to do with your time so
[13:47] sometimes even those players who play
[13:49] for a long period of time only have two
[13:51] hours on the day right and they want to
[13:53] hop in and get something done
[13:55] um and for us when we're looking at
[13:57] balancing things around that
[14:00] um it's very hard to please everybody in
[14:03] every scenario and I think Siege is a
[14:06] great example where perhaps the players
[14:08] wouldn't wouldn't have seen us do this
[14:10] but internally we saw we did lots of
[14:12] play testing and lots of changes to
[14:14] markers or information provided and and
[14:18] sort of try to find a happy medium
[14:21] between making it too obvious what you
[14:24] need to do and too difficult to find out
[14:26] what you need to do we need to that was
[14:28] definitely a time at least for me where
[14:30] I got to go through that iteration
[14:32] process and and see what that is like
[14:35] um but for the for the rest of the
[14:37] outside of Siege and big events like
[14:39] that you know uh
[14:42] we sort of need markers and that in the
[14:44] game I think at the moment with the with
[14:46] the way it is currently but I think
[14:48] everybody wants it to be phased out less
[14:51] and less or maybe even find an
[14:52] alternative to things like markers you
[14:54] know giving players information through
[14:56] text and them having to decipher what
[14:59] that means and then perhaps when you get
[15:00] closer you get a marker you know there's
[15:03] loads of ideas loads of things we could
[15:04] eventually switch it to
[15:07] um but I think for now uh markers might
[15:10] need to stay around for the foreseeable
[15:13] future at the very least until we get a
[15:15] compass yeah hey UI people
[15:21] I'm gonna get a letter all right so uh
[15:25] following following up on uh the the
[15:28] difficulty thing uh one of the one of
[15:30] the things that's going into 318 we've
[15:32] been talking about Siege quite a bit is
[15:34] there are new missions going in on the
[15:36] platforms that run when Siege aren't
[15:39] running kind of like a not a Siege light
[15:41] but you know a smaller more digestible
[15:44] version of that experience that doesn't
[15:45] go on for a while talk to us about talk
[15:47] to me about those missions yeah so those
[15:49] missions are made by yorit uh one of our
[15:52] sort of uh he joined us for um just as
[15:55] we started Siege and he helped us on the
[15:58] level design he built some of the some
[15:59] of the environments and then his first
[16:01] foray into building an actual you know
[16:03] his own type of mission and stuff is to
[16:06] go into these Siege islands and take
[16:07] sort of like the existing modular sort
[16:10] of eliminate all at bunkers and expand
[16:12] them so to do more in The Siege islands
[16:15] and you know make them more usable
[16:17] across across these sort of Scopes so
[16:19] what we've done in again is something we
[16:22] saw in Siegel eyes when people would
[16:24] play it they'd be playing in uh fire
[16:26] teams like um for example forced and
[16:30] um
[16:30] the system designer doing whole scraping
[16:33] he's he's all completed Siege in 12
[16:36] minutes
[16:36] so they are very organized which I was
[16:39] very you know I designed it to be like
[16:41] you know an hour and he comes in he's
[16:43] like I did in 12 minutes I'm like great
[16:47] um but yeah so we we saw a lot of people
[16:49] like banding together and strategically
[16:51] moving through areas and you know a lot
[16:53] of good comes and sort of military
[16:55] Styles uh play through so what we wanted
[16:57] to do is we wanted to kind of enable
[16:59] that by say for example in one of the
[17:01] missions is this island is sort of
[17:04] semi-taken over there are three
[17:06] buildings that are currently inhabited
[17:08] with uh nine tails and you're tasked
[17:10] with sort of getting them out and it
[17:12] allows you to say maybe split into two
[17:14] different fire teams to communicate
[17:15] through I'm like building a I'm in
[17:17] Building B I'm moving through like one
[17:19] left one left you know but it also
[17:21] allows for that sort of
[17:23] thing that the ugf lacked which is
[17:25] multiple entry points you could get the
[17:27] shuttle from orison to these islands and
[17:29] go walk all the way there with your
[17:31] friends you could take a ship and land
[17:34] on the roof and infiltrate and go down
[17:35] you could take ship and land on the
[17:37] ground floor if you wanted to take a
[17:38] elevator up
[17:40] um but it kind of allows for you know a
[17:43] new FPS area to fight in and more
[17:46] coordination from the players uh through
[17:49] more enemies to kill and along with that
[17:53] coming in 318 are the Gen 12 renderer
[17:57] improvements that we talked about on ISC
[17:58] yesterday and hopefully that'll improve
[18:01] the uh the FPS performance on and when
[18:04] doing these missions on Oregon
[18:07] I'm just hitting all the check marks
[18:08] today aren't I
[18:10] um so what what else is the mission
[18:12] feature team working on uh for 318
[18:16] uh well we have some big changes coming
[18:18] to Korea the um someone on our team
[18:20] called Lars is working on
[18:22] um big changes to the the world as well
[18:25] in terms of crime as a whole
[18:28] um
[18:28] sort of the lower ranked crimes that
[18:31] you'll be you'll be receiving will be
[18:33] able to be paid off and won't cause you
[18:35] to go to prison but those uh if you do
[18:37] manage to get yourself into those higher
[18:39] crime stats so cram start free or above
[18:41] you're gonna be uh faced with a much
[18:43] bigger challenge now uh much less places
[18:46] to uh clear yourself free of crimes uh
[18:49] Korea will become a big hot spot for a
[18:52] PVP hopefully in in this patch and we
[18:54] will see a change back to to the past I
[18:57] believe where where it was similar to
[18:58] this and um it's going to be really
[19:01] interesting to see the overall feedback
[19:04] from the community about what it's like
[19:06] funneling everybody into this dedicated
[19:09] area whether it helps the PVE players as
[19:12] well as the PVP players because they
[19:14] sort of separate them out or maybe PVP
[19:16] players are more focused in one area but
[19:18] you know there's lots of data for us to
[19:20] grab from when the patch first drops and
[19:23] all these changes come in
[19:25] um and uh
[19:26] I don't know as much about the specifics
[19:29] of the mission as Elia does so maybe you
[19:30] can get some insight on that so is
[19:33] hopefully it's going to be a sort of
[19:34] player um I just as well so I just call
[19:37] Instagram my eye Las is actually in the
[19:38] chat I just saw a message I thought it's
[19:40] called poet poet
[19:42] um
[19:43] so yeah that's Lars um so just I just
[19:46] dots right no Lars actually is okay with
[19:49] being known as a Dev because he isn't in
[19:52] uh Mike's chat yeah and other people's
[19:54] chats so sorry a lot if you didn't want
[19:56] to vote there you go
[19:57] um
[19:58] so yeah it's hopefully a sort of a
[20:00] player run systemic thing so you as the
[20:03] player can go and actually cause this
[20:05] event to yourself you you can control
[20:07] when it runs you can control well see
[20:10] you can control how it runs for you can
[20:12] control as long as you can survive how
[20:14] long it runs for
[20:16] um but alongside this it came with sort
[20:18] of I guess a a needed
[20:21] uh rebalance overhaul to our law system
[20:24] and how we do crimes and how much we
[20:26] award for crimes how long it takes to
[20:28] sort of get rid of crimes
[20:31] um where you can land with crimes you
[20:33] can now land everywhere with uh with the
[20:36] cs102 which you couldn't originally do
[20:38] the fine kiosks that we have around the
[20:41] verse you can surrender at and it will
[20:43] give you that sort of like 20 discount
[20:44] off of your time uh which means you
[20:47] don't have to go do like death by cop in
[20:49] a ship
[20:50] um
[20:51] oh yeah yeah I think that I think the
[20:54] crime Stat one two changes are probably
[20:55] two of the single biggest quality of
[20:58] life changes that we've put in it's a
[21:01] simple thing but but the amount of times
[21:03] you get you know you bump somebody or
[21:05] you get bumped or whatever and you end
[21:07] up with a crime stat winner too and now
[21:09] half your Landing zones are gone and
[21:10] it's like this it's a pain in the butt
[21:12] so that change alone I think is going to
[21:14] make a lot of improvements
[21:16] um what else is coming in 318 we so
[21:18] we've got we've got the new Korea stuff
[21:19] we've got uh the New Missions that are
[21:22] going on to The Siege platforms when
[21:23] Siege isn't running uh we'll talk about
[21:26] the the prison stuff in a minute
[21:27] anything else coming in 318
[21:31] um I'm trying to think if there's
[21:32] anything else there's there's a couple
[21:34] of other bits and Bobs I think we'll
[21:36] work on
[21:37] um but I guess they're sort of uh sort
[21:40] of tentative we want to make sure that
[21:41] they are ready before we put them out um
[21:45] I'm not even sure if I'm if I'm if I'm
[21:47] good to talk about them what is it oh
[21:49] god um just tell me right now we're
[21:51] working on another another mission uh
[21:54] for the sort of see The Siege islands
[21:58] that will involve uh actually an entire
[22:00] Island sort of being taken over and the
[22:03] players having to do multiple things on
[22:07] the island
[22:08] um
[22:09] to finish the mission okay so no
[22:12] guarantee that it's coming for 318 just
[22:14] it's it's one of the things one of the
[22:16] things that's happened is as you know
[22:18] for unless you may not be aware 318 was
[22:21] originally scheduled to come out you
[22:22] know towards the end of September the
[22:24] beginning of October it has now been
[22:26] pushed out uh currently scheduled for
[22:28] December 8th I think and along with that
[22:32] time that's you know the devs haven't
[22:34] stopped working they're not just you
[22:36] know oh you know the stuff that was in
[22:37] 318 is now still the stuff that they're
[22:39] looking to add as much stuff that's part
[22:41] of our staggered continuous development
[22:43] it's basically it's all we're still
[22:44] working on this step so if this comes
[22:46] available if this becomes ready in time
[22:48] then it will be included when 318
[22:50] branches I'd say uh one thing that they
[22:52] get uh put in that I'd like to mention
[22:55] uh it was a personal pet peeve of mine
[22:57] uh but in the next release now when you
[23:00] go so whenever I play and I go to a sort
[23:04] of a platinum Bay and I landed at
[23:05] Platinum Bay and I'm presented a list
[23:07] and I'm on my Dev account so I've got
[23:09] like all the ships
[23:10] and I can see every single ship and I
[23:12] don't know which ones I can spawn uh
[23:15] We've now made it so that you when
[23:17] you're at the planning Bay you'll only
[23:18] see ships that you can actually spawn at
[23:21] that location that actually fit the size
[23:23] that was one of my sort of pet peeves
[23:26] that I asked to put a task in for and we
[23:28] we got around to it so that's something
[23:29] I'm proud of it's huge I see someone
[23:31] pulling finally so yeah not just me
[23:37] and uh I'm being told that I actually
[23:40] have no idea what the date is so I don't
[23:42] know where I got that date from but
[23:43] don't don't take like I said we don't
[23:45] talk dates I shouldn't have even tried
[23:47] uh so don't take uh don't don't take
[23:50] that one too seriously uh yeah I'm being
[23:54] yelled at in the chat it's we I don't
[23:56] know the date
[23:58] all right so uh let's jump back to
[24:01] investigations a little bit
[24:03] um
[24:04] a lot of it's going to have to you know
[24:06] the the communication the the clues the
[24:08] the interactions with things it's it
[24:10] seems like it's going to be very heavily
[24:12] affected by Moby glass yeah at
[24:14] citizengon we saw a whole new Moby glass
[24:17] on the horizon
[24:19] you don't
[24:21] get to wait until the new movie glass is
[24:24] here before you start designing
[24:25] investigations right now uh does this
[24:28] mean that everything that you're going
[24:30] to build right now or building along the
[24:32] way is going to have to be redone when
[24:34] the new Moby glass comes no so
[24:37] um
[24:38] we have to design for both
[24:40] um currently we have a design for how to
[24:42] sort of
[24:43] awkwardly use our current mobiglap to
[24:46] ensure that we can give all the
[24:47] information to the players that they do
[24:48] need to see however
[24:51] um
[24:52] we also are you know involved in the new
[24:55] Moby glass in the the new contracts
[24:57] manager we're doing and with that we can
[24:59] sort of mold it for our needs as well
[25:01] because obviously the mission team the
[25:03] contract manager is pretty much used for
[25:05] us so we can sort of mold it and see how
[25:08] it fits and make sure that we have all
[25:10] the information and styles that we we
[25:12] need so we have considerations for both
[25:16] kind of yeah and then uh I saw during
[25:19] the this always happens no matter how
[25:21] many times we put work in progress or
[25:23] anything on there during the uh
[25:25] presentation uh there were there were a
[25:28] number of comments on spectrum and in
[25:30] the YouTube comments uh about oh it was
[25:32] like only fifteen thousand but it's only
[25:34] 50 000 credits for for doing this man
[25:37] like that's it yeah it's it's like hold
[25:40] on let's go to my camera I'm gonna do it
[25:42] he goes
[25:43] the first thing we work out is not the
[25:45] mission reward the mission reward is
[25:47] literally one of the last things that
[25:48] gets worked out so whenever you're
[25:50] watching uh ISC or scl or citizencon or
[25:54] anything you see uh that's only paying
[25:56] out this or it sends you to this number
[25:57] if you're looking at any numbers in any
[26:00] of the any numbers whatsoever in the in
[26:02] the uh uh the new underground facility
[26:04] segment that we heard uh yesterday when
[26:07] you talk about the number of designers
[26:08] and stuff if it's numbers it's all work
[26:10] in progress It's just thrown in there as
[26:12] we're working out the the demonstration
[26:15] of stuff uh please do not ever take
[26:17] those numbers uh seriously they're about
[26:19] as reliable as December 8th yeah I mean
[26:22] well well I don't even know what day of
[26:23] the week December 8th is like where did
[26:25] Heck
[26:26] what I can add to that is when we're
[26:28] like this is I mean it's probably on me
[26:30] because I'm lazy we have how we build
[26:32] missions is via a record and that has I
[26:35] think something like a 140 fields and
[26:39] there's a bunch that have to be filled
[26:40] in for it to be able to work so when I'm
[26:43] doing what's known as a dirty prototype
[26:45] which is me just mocking it up in the
[26:47] most you know horrible way before like
[26:49] is a proof of concept before we move on
[26:51] to the actual one I duplicate an already
[26:53] existing Mission record so it takes all
[26:56] of their values across so I think I I
[26:59] duplicate like an easy eliminate all
[27:01] Mission which was 15 000 and I saw
[27:04] around the YouTube comments people like
[27:06] I'm not doing this for 15 000 I'm gonna
[27:07] spend hours trying to figure this out
[27:09] and never do it I'm like it's not 15 I
[27:11] haven't touched any of that stuff
[27:14] uh Chad is telling me that December 8th
[27:17] is a Thursday so yeah so I at this point
[27:19] we're probably we've been specking out
[27:21] that week's ISC so that's why that's in
[27:23] my head uh let's see what else we got
[27:25] have you guys talked to uh you know this
[27:28] investigation stuff if you guys talk to
[27:30] character art at all about getting some
[27:32] detective style clothing done like a
[27:35] 30th Century version of Sherlock's
[27:37] whatever that book was ready right we
[27:40] have a monocooling game is monocle
[27:42] inherently an A detective all you need
[27:44] is a magnifying glass right smoke yeah a
[27:48] nice colombo-esque Duster no no talks
[27:52] with Community well you could do the
[27:53] thing you did say UI and look in the
[27:55] camera and ask them for it if you want
[27:56] all right
[27:58] hey hey character art hey Damien uh from
[28:02] uh turbulent uh let's get some detective
[28:04] style clothes in to support uh
[28:07] investigations
[28:08] and I'm just burning every bridge I got
[28:10] right
[28:12] all right so uh
[28:15] so before we let you go we got you we
[28:17] got you on the show uh recently uh when
[28:19] I say recently I think it was just last
[28:20] week or was it this week uh this week uh
[28:23] you you had your uh go no go for a new
[28:28] uh a way to remove crime stat
[28:32] a special mission that we've hinted at
[28:34] in ISC a a new way to
[28:39] escape prison and wipe your crime stat
[28:42] without having to go to uh Korea
[28:46] um
[28:47] how'd that go no go go
[28:49] well it went it went great
[28:52] um finally uh it took a few tries but we
[28:55] got it that we got it through
[28:57] um yeah so the idea was we we felt like
[29:00] the prisons had um gone through quite a
[29:03] long period of um not very many changes
[29:06] and it was definitely an area of
[29:07] gameplay that most players will
[29:10] encounter at least at some point
[29:13] um so more than others yeah so more than
[29:15] of us for sure so we we wanted to add
[29:17] some content to it to to spice it up
[29:20] again and given the changes coming to
[29:23] the rest of the game it really made
[29:24] sense for us to
[29:26] um add some more to to the prison so
[29:29] we've made a number of changes including
[29:31] uh putting in a new mission that does
[29:34] exactly what you say allows you to
[29:35] remember remove your crime stat yes by
[29:38] the help of a not so friendly friend
[29:41] that you'll make along the way so at
[29:43] this point uh let's go back to my camera
[29:44] here so at this point uh we are going to
[29:47] uh do something we've never done we are
[29:49] actually going to show you the go no go
[29:52] uh that was that was recorded and
[29:55] presented uh to CR and the directors uh
[29:58] this will be a cut down version of the
[30:00] go no go uh the original one was about
[30:02] 30 minutes long uh it was mostly like it
[30:06] had like 20 minutes of Max just getting
[30:07] lost in the caverns uh underneath
[30:09] pleasure so we've cut out his just one
[30:12] around you know aimlessly in the caverns
[30:14] like I I can't remember how to get where
[30:16] I'm going uh so we cut that out so we
[30:18] got about 10 minutes now this is going
[30:20] to show you what this new method is so
[30:24] if you don't want to see that if you
[30:26] want to preserve yourself this is this
[30:28] is where the spoiler warnings are uh go
[30:31] find something else to do stop the
[30:32] YouTube video if you're watching later
[30:34] uh go check out one of the other Star
[30:37] Citizen streamers on Twitch if you want
[30:38] uh but yeah we're gonna we're gonna play
[30:40] the go no go video and we're gonna do
[30:42] your version of your commentary live
[30:44] here because that the the dialogue
[30:46] wasn't recorded during the meeting so
[30:47] we've got the visuals we're going to add
[30:49] new audio and uh yeah with that let's uh
[30:52] that's enough warning let's play the
[30:53] clip
[30:55] all right so we're starting off in
[30:57] closure
[30:58] yeah so we're we're when I recorded this
[31:01] I tried to do it from the obviously the
[31:03] perspective of a player who would would
[31:05] have just arrived in prison and uh
[31:07] generally I think when players go to
[31:09] prison they either try to enter the
[31:11] Escape Route straight away and get out
[31:12] there as fast as possible or they head
[31:14] into the mines to uh
[31:16] dig up rocks and serve their sentence uh
[31:20] like a good citizen and um here I just
[31:24] allude to that as you kind of would go
[31:26] deeper into the prison for those who who
[31:28] don't maybe don't know already or have
[31:29] don't do the mining very often the
[31:31] deeper you go into these prison caves
[31:33] the more likely you are to find rarer
[31:36] ore and rarer or when you return it
[31:39] we'll give you back some uh that's an
[31:41] NPC raw it is yes so this is one of the
[31:43] other features that we've added to
[31:45] prison unrelated to the mission this is
[31:47] just to help spice up and Spruce up the
[31:50] place uh a bit more so we've added
[31:53] emergent AI that was spawned in the in
[31:55] the caves and sort of wander around it
[31:58] really adds some life to it these AI can
[32:00] also be killed and they will drop prison
[32:03] loot uh so any loot that would be
[32:05] available to a player in the prison uh
[32:07] can potentially be on any of these AI
[32:10] however if you do so
[32:12] um in the prison uh you'll know that
[32:15] you'll get a murder charge still so you
[32:17] will increase your sentence by doing it
[32:18] however that leads into our next spot as
[32:21] you can see the mission was just offered
[32:24] to the player now this was triggered
[32:26] because the player got so deep into the
[32:29] minds that he entered a new section of
[32:31] the of the prison Minds that we're
[32:32] calling the prison black spot so this
[32:34] means that this area of the prison is so
[32:37] so deep underground that the cluster can
[32:40] no longer block Communications to
[32:42] prisoners and uh Ruto has found a way to
[32:45] allude through that so he has found a
[32:47] way to uh contact players within within
[32:50] prison and offers them a mission
[32:53] now this Mission
[32:55] um is to retrieve a data chip that one
[32:57] of his other little minions uh failed to
[33:00] smuggle out of the Escape Route for him
[33:02] so he's asked you to find his Fallen
[33:04] fellow and retrieve the data trip and
[33:07] upload the data
[33:09] I would like to quickly just say I've
[33:11] Just Seen A lot of people call out
[33:12] trespassing that was a bug yes we fixed
[33:15] it it wasn't meant to be there
[33:18] um that's there because in order to do
[33:20] the test you just warped yourself to the
[33:22] prison
[33:24] we technically I'm not allowed here all
[33:27] right so we're back up so we've now
[33:29] we've been skipping ahead a bit every
[33:31] time we Fade to Black we we skip ahead
[33:33] like three minutes so we're now up
[33:35] you're back at the fan folks will
[33:37] recognize
[33:38] uh the stopping the fan here new UI for
[33:41] the fun keypad though that's got to be
[33:43] exciting right yeah yeah I like it
[33:48] and yeah we've uh so in terms of the
[33:50] Escape Route itself we haven't
[33:52] um
[33:53] it would be a very big task to change
[33:55] the whole thing uh but uh in order to
[33:59] um add a little extra to it we've um
[34:03] the body that the data chip is on is
[34:06] kind of floating uh on these platforms
[34:08] within the main cylinder of the Escape
[34:10] Route and it will be different each time
[34:13] where the body spawns but as you can see
[34:15] here this is quite high up in the Escape
[34:17] Route anyone familiar uh with this will
[34:19] know that this is right near the end of
[34:21] the Escape Route but the body is sort of
[34:23] in the middle so I locate uh one jump to
[34:27] make it across obviously uh on Aberdeen
[34:29] the planet that the prison is located on
[34:31] this has low gravity so
[34:34] um you need to complete a series of
[34:35] jumps to to get to the body and to
[34:37] achieve the data chip and then once
[34:39] you've got to this point it's very
[34:41] difficult to re-enter the route a safe
[34:44] point so you might have to go to a point
[34:46] that you didn't previously go to and
[34:49] sort of find your way back to the Escape
[34:50] Route and and get get away it's also
[34:53] where the body of spawned yeah and it's
[34:56] also worth mentioning that at the moment
[34:58] you escape prison you're automatically
[35:01] put onto a timer because of of
[35:03] Aberdeen's natural temperature on the
[35:06] planet
[35:06] um you know the player will the player's
[35:08] body temperature will increase rapidly
[35:10] and and so to sort of complete this
[35:13] Mission or to get to the Rover
[35:15] um you are already on a timer this will
[35:17] add some time to that timer it's
[35:20] significantly more difficult if you
[35:21] damage yourself along the Escape Route
[35:23] any other point which is quite common so
[35:26] uh yeah in in the process of um escaping
[35:29] prison
[35:30] you will need to get past the trip mines
[35:33] which was the first thing I ever added
[35:35] as a designer to the game I remember
[35:37] there was a conversation just a bit
[35:38] before that where Max said like oh
[35:40] people are going to crawl on the floor
[35:42] and go around it and there was a big
[35:43] discussion mft people going no the world
[35:45] another one in the first video we saw
[35:47] someone did it they did exactly that
[35:49] that was like my head's too big I'm
[35:50] gonna Crouch yeah and so we've skipped
[35:52] ahead we're now outside uh We've now
[35:55] after falling about six or seven times
[35:57] most likely yes we've come to the little
[35:59] storage crate that's got the Ursa you've
[36:01] got we've got the code for the Ursa yeah
[36:03] so you grab them from the from the guard
[36:05] room and then you escape prison just
[36:07] like it was before we made this we've
[36:09] made a slight change here in uh the this
[36:12] Rover that spawns now will now spawn
[36:14] with some guns inside of it
[36:16] um this will the purpose of this will be
[36:19] shown just shortly because uh towards
[36:21] the end of this Mission you're going to
[36:22] be required to uh to enter some combat
[36:26] so all right so at this point we've
[36:28] recovered the chip from rudo's last
[36:31] Lackey yes and now we're we've got it
[36:33] we've got to take the chip to
[36:36] the the this Waypoint what's at the
[36:38] Waypoint so it's a satellite so they uh
[36:41] Ruto wants this data direct directly
[36:44] uploaded to him not physically handed to
[36:47] him so they have the
[36:49] Ruto and his gang of uh conveniently
[36:51] stashed a satellite inside a derelict
[36:53] that is um that you'll see just shortly
[36:56] here so after the player uh has a short
[36:59] a Rover ride over Aberdeen's lower orbit
[37:03] uh low gravity uh Planet which is also
[37:06] very fun by the way trying to drive that
[37:08] thing over the surface
[37:11] um they will arrive at derelict and this
[37:13] derelict has uh got security
[37:17] um from Hurst and security who have gone
[37:19] there to investigate what's going on uh
[37:21] and which is why there is a Cutlass park
[37:24] there
[37:25] and uh the player will have to fight off
[37:28] the security that are here and so that
[37:31] he can upload to the satellite
[37:34] now obviously you're doing this solo but
[37:37] many folks enlist the help are friends
[37:39] when escaping prison they can
[37:42] um there's some caveats to it this is
[37:44] meant to be done solo that's the idea
[37:47] they could call in a friend to come and
[37:50] help them at this point but the problem
[37:52] potentially with doing that is you will
[37:54] get a crime for killing these security
[37:56] guards so whoever is on the mission it
[38:00] cannot be shared the mission one person
[38:02] will get to wipe their crime stat so if
[38:05] they were going to enlist help from a
[38:06] friend they might want to make sure that
[38:08] it was the person with the mission uh
[38:10] killing them off
[38:12] um
[38:13] because you're going to get four murder
[38:14] charges from doing this but uploading to
[38:17] the satellite at the end will wipe you
[38:18] clear of them so the person who took the
[38:21] mission so again so if your friends come
[38:23] if you enlist your friends your your
[38:25] crime set will be cleared yes but your
[38:27] friends will still have the new the new
[38:29] murder charge they love a long sentence
[38:31] they can eventually transport if they
[38:33] can bring you here but if they if they
[38:36] kill anyone there they're gonna end up
[38:38] back there and the whole idea of doing
[38:40] this is to avoid having to go to clutter
[38:42] exactly so
[38:43] that's your incentive to doing this solo
[38:46] so it looks like they switch you switch
[38:47] guns because the first one went out of
[38:49] it yeah there's only one clip in either
[38:50] gun uh as obviously Horizon
[38:53] um Hurston didn't just leave uh an ammo
[38:56] card full of uh full of bullets Rover
[38:59] right next to the prison but as you can
[39:02] see here I uh I take out the AI and I'm
[39:04] up putting the data chip back into my
[39:07] hand to uh to upload into the satellite
[39:10] and this is mission complete so the uh
[39:13] the data chip will be eaten by the
[39:14] satellite router will get a Ruto will
[39:17] get his uh his much needed data about
[39:19] the insides of plusher and the player
[39:22] will walk walk away Crime Free there's
[39:24] also that Cutlass now can be uh
[39:26] commanded by the player so they also
[39:29] have a way to escape the planet
[39:30] immediately upon upon mission complete
[39:34] uh us uh I'd be remiss if I didn't say
[39:37] that they were called magazines not
[39:39] clips
[39:40] ah tomato tomato
[39:44] es magazines anymore anyway I'd also
[39:47] like to say that um the closest one of
[39:49] the closest settlements to clasha is uh
[39:52] what is it
[39:53] flats and we've added an Aesop terminal
[39:57] there so if you are alone it's not
[40:00] exactly a short hike but there's a hike
[40:01] you can do and you can get your ship if
[40:04] you do Escape are you stealing the
[40:06] Securities Cutlass now yes we are yes
[40:08] you just cleared your crime stat I
[40:11] always hope they don't find us but I
[40:13] guess there's nobody alive to report the
[40:14] crime is there exactly no not unless you
[40:16] get found is it is a crime really a
[40:19] crime if nobody's there to report you
[40:21] well you could fly this ship to the new
[40:23] Platinum Bay exactly and get your own
[40:25] chips so the mission not only gives you
[40:28] a way to clear your crime step but now
[40:29] it gives you a way to escape the planets
[40:32] without needing to call for friends one
[40:34] of the one of the like issues we noticed
[40:37] with the first sort of Escape Route we
[40:39] had was that a solo player it really
[40:42] isn't good for them because they'll get
[40:43] out and they could put up a service
[40:45] Beacon wait for someone to pick them up
[40:46] or they're just stuck uh so this kind of
[40:50] helps that solo player lifestyle
[40:52] um get off and plus with the addition of
[40:55] the Platinum Bay even even if you've not
[40:57] taken the mission you should be able to
[40:59] go and get your stuff cool well I think
[41:02] that's about it um is that I was
[41:06] chairs being weird uh thank you so much
[41:09] guys for hanging out with us and for uh
[41:11] uh talking about the investigation stuff
[41:14] that we saw citizing on talking about a
[41:15] bit about what your team is bringing to
[41:17] Alpha 318 and of course sharing with us
[41:19] our first look at a an actual live
[41:22] internal go no-go
[41:24] um I can't believe you you made CR sit
[41:27] through all 30 minutes of you
[41:29] wandering the tunnels huh yeah it's
[41:31] tough the more embarrassing thing is a
[41:33] QA tester he tested this stuff yes I'm
[41:36] gonna get you a license to Premiere and
[41:37] I'm going to show you how to save the
[41:39] man sometime yeah I mean I'll need the
[41:41] help all right
[41:43] Elliot Max thank you so much for hanging
[41:45] out with us uh guys we're gonna take a
[41:48] short break we're gonna throw it to a
[41:49] few more uh Community commercials and
[41:51] when we come back uh we'll be joined by
[41:53] John Griffis from EU sandbox 2 and we're
[41:56] going to talk a little bit more about uh
[41:57] him and what he does so stay tuned we'll
[42:00] be right back
[42:05] [Music]
[42:18] foreign
[42:19] [Music]
[42:32] [Music]
[42:38] [Music]
[42:50] this is Jack
[42:53] Jack is a successful Trader
[42:57] unfortunately for Jack he encounters
[43:00] local Pirates
[43:01] they want Ransom money just a fraction
[43:05] of his profits Jack refuses The Proposal
[43:08] in his mind he is a hero
[43:12] [Music]
[43:15] now Jack is dead and all of his
[43:19] belongings go to the Pirates anyway
[43:20] don't be like Jack be smart pay Ransom
[43:25] responsible assistant Incorporated plans
[43:27] and campaign
[43:30] [Music]
[43:37] flying across the Galaxy celebrating
[43:40] Beauty Wonder with that as a calling
[43:44] there could be only one ship up to the
[43:47] task it's not just for the diamond
[43:49] laminate panel observation deck nor for
[43:52] the proprietary lightweight durable hole
[43:55] plating more it's the full Ensemble of
[43:59] comfort and safety that the origin 600i
[44:02] provides as a home away from home the
[44:06] backdrop may change but the 600i is
[44:09] always Center frame I'm Thomas farrister
[44:12] and iFly the origin 600i origin 600i
[44:17] luxury without compromise
[44:22] small hands so come down to kelto today
[44:25] for quality products at low prices
[44:30] and that was another fine selection of
[44:33] community created uh commercials uh
[44:36] adverts uh whatever you want to call
[44:38] them uh created by you the stars in the
[44:41] community and upload it to our own
[44:42] Community Hub now if you're not familiar
[44:44] with it the community Hub is a fantastic
[44:46] area on the robertspaceindustries.com
[44:49] website where you can submit content you
[44:51] can find content you can vote it vote up
[44:53] which content you like most and stuff
[44:55] like this we are hoping that by
[44:58] including these in the show we will
[45:00] inspire the creation of more we want to
[45:03] see uh ads for your own organizations we
[45:06] want to see uh commercials or videos
[45:09] about the fictional brands that already
[45:11] exists within the universe
[45:14] uh narrative short short story short
[45:17] form narrative stories about your
[45:19] adventures within the universe basically
[45:22] uh as long as it's got uh as long as
[45:25] it's got not any
[45:27] royalty trademark music click in it and
[45:32] I try to keep the swears down if you can
[45:36] I'm told repeatedly
[45:38] gotta keep the swears down uh and it's
[45:41] roughly about 45 seconds to maybe two to
[45:43] three minutes we'd love to Showcase it
[45:46] here on uh Star Citizen live each and
[45:48] every week so uh hopefully you'll get
[45:51] cracking you'll submit them to the
[45:52] community Hub and be sure you vote on
[45:55] which ones you want to see included and
[45:57] showcased on the show more and maybe uh
[46:00] there might be some incentives added to
[46:03] this at some point what not let
[46:05] we'll see how it works so
[46:08] uh Kyrie doc says I heard Kraken no you
[46:11] didn't
[46:12] I said get cracking
[46:14] you guys
[46:16] killing me
[46:18] you're killing me all right joining us
[46:22] on the show now is uh is a member of the
[46:24] cig development staff on EU sandbox 2
[46:27] that you met for the first time uh
[46:29] yesterday on inside Star Citizen uh none
[46:32] other than uh lead environment artist is
[46:35] there a number after that no just leave
[46:37] me just a wall just lead environment
[46:38] artist Mr John Griffiths John how you
[46:40] doing man I'm good thank you thank you
[46:41] for having me on I thank you for
[46:43] agreeing to be on the show uh now a
[46:45] little bit of the reality folks might
[46:47] might not understand we actually had a
[46:49] whole different set of guests a booked
[46:51] on the show and uh they fell ill
[46:54] collectively at the same time uh so we
[46:57] found that out this morning and uh John
[46:59] was gracious enough to with no prep with
[47:03] no with no forewarning to come and sit
[47:06] in and chat with us so John the second
[47:09] half of these shows are a little bit
[47:11] different than the first the second half
[47:13] we like to get to know uh the people get
[47:15] to hear a bit about their story and and
[47:17] how they work so right off the bat I'm
[47:19] just going to ask you
[47:21] how did you get involved in the industry
[47:24] so I grew up playing video games like
[47:28] I'm sure a lot of people did who work in
[47:29] the games industry
[47:30] um and that's what I wanted to do at
[47:33] University but my parents weren't really
[47:35] on board with that probably a bit like a
[47:37] lot of other people as well so I
[47:40] actually went to like I was I really
[47:41] liked I.T and art at school and product
[47:43] design and I went to University indeed
[47:47] web design and 2D animation and we're
[47:49] talking like almost two decades ago now
[47:53] um came out of that hated web design
[47:55] really enjoyed and at the time I was
[47:57] doing Adobe Flash animation 2D animation
[48:00] and I did a couple of gigs with that but
[48:03] the crucial thing for me was getting
[48:05] into that third dimension so I went back
[48:08] I did a masters and that basically
[48:10] fast-tracked me into the 3D World and
[48:13] then I actually started in animated film
[48:17] and I was doing a 10 minute short films
[48:20] for 3D for theme parks and attractions
[48:22] so you know how for us uh cineworld
[48:26] um do that 4dx thing where you're riding
[48:29] around in the chair we were doing that
[48:32] before it was cool so
[48:35] um it was never cool yeah exactly so
[48:37] cool so I was doing that for a while and
[48:40] then I moved over to video games you
[48:44] know that's where I wanted to go
[48:45] eventually it just took me some time to
[48:47] get there so I worked on a few Lego
[48:50] games for a bit and then I went to a VR
[48:53] Studio then to another game studio and
[48:55] then I came here what was the other game
[48:57] Studio
[48:58] uh are we allowed to say I went to
[49:00] fabric games
[49:02] who are now
[49:04] part of fire Sprite who are now owned by
[49:06] Sony
[49:07] that is uh They're laughing in the
[49:10] background uh the video game industry is
[49:12] incredibly
[49:14] um for lack of a better word incestuous
[49:16] it's you you end up meeting the same
[49:19] people back and forth let them right oh
[49:21] yeah you were here
[49:23] it's I remember in my very first day uh
[49:26] literally my very first day here at cig
[49:28] uh um uh both Matt Sherman and uh Damien
[49:33] Darian vorlik two names from the two
[49:36] names from the past the old time star
[49:37] citizens might remember uh in the
[49:40] kitchen uh it was in the kitchen getting
[49:42] some they both like hey didn't you used
[49:43] to work at blizzard and I'm like yeah I
[49:47] guess oh yeah I remember your eye I'm
[49:48] like I don't remember you at all but I
[49:51] felt I felt like I felt so bad but it's
[49:53] it's just you end up running into many
[49:55] of the same people and then the
[49:56] companies get bought and moved over in
[49:58] companies and then you know talked about
[50:00] Bungie bought and then separated and
[50:02] then bought and stuff like this so so
[50:03] yeah it's a it's a lot of mix uh stuff
[50:06] like this so you are a lead environment
[50:08] artist what uh what's your what what
[50:11] what separates a lead environment artist
[50:13] from a senior environment artist from a
[50:16] regular environment artist so I so for
[50:21] the underground facilities I'm the
[50:22] product owner so it's up to me or it's
[50:26] on my shoulders to deliver this location
[50:28] so it's not just doing the art it's
[50:32] managing the team doing the planning
[50:34] checking everyone like unblocking people
[50:38] um working with other disciplines making
[50:40] sure that yeah everyone's got what they
[50:42] need in order to do their jobs is my job
[50:45] as a lead environment artist you ever do
[50:48] do you do actual Arts yes I do and I
[50:51] have been doing recently so a lot of the
[50:52] stuff that you saw in the citizen con
[50:54] and in the ISE
[50:57] um
[50:57] is some work I've been doing so we're
[51:00] very much early stages white box
[51:04] just like I said in the video just
[51:06] getting some content out so that we can
[51:08] play it within context as the player
[51:10] would play it and check that
[51:12] everything's kind of working together so
[51:15] I have been involved with that and as
[51:17] the team grows I'll be taking more of a
[51:20] not a back seat but I'll be they'll be
[51:22] the other artists will be doing the
[51:24] majority of the work I'll be just doing
[51:26] I'll be just doing I'll be doing
[51:28] feedback and just the general smooth
[51:31] running of getting this location out the
[51:33] door I find that this happens in a lot
[51:36] of disciplines and a lot of the
[51:37] verticals where where you know it's when
[51:41] you're hired in is like the base thing
[51:42] whether you're a designer or whether
[51:44] you're an artist or whatnot it's you're
[51:46] doing the thing that you're originally
[51:47] intended to do and then you move up to a
[51:50] senior and you take a bit more
[51:53] administrative role and you end up doing
[51:55] less of less of the art or less of the
[51:58] design am I am I right here Elliot
[52:02] you're not Mike yeah I'm just gonna say
[52:05] well and then you get to lead and I
[52:07] imagine you get to lead and then you're
[52:08] doing even less art or less design and
[52:11] then you get to director and and
[52:12] everybody knows uh directors don't
[52:14] actually do any work
[52:16] I was go to my camera
[52:18] that was just for Tyler awaken
[52:22] I chose violence today
[52:25] um but yeah they're always there
[52:28] oh hold on let's see if I got a message
[52:31] hold on do I get a message is he
[52:33] watching Tyler are you watching
[52:35] he's not watching he's watching so um so
[52:38] yeah so uh how much of that uh holds
[52:41] true for for you or how much art do you
[52:43] still get to do versus how much
[52:45] Administration and growing your team and
[52:47] stuff so
[52:49] in the last couple of weeks I've
[52:50] probably been doing more admin and
[52:52] planning stuff and that's what you saw
[52:54] in the IC
[52:55] um but I'll be going back into doing art
[52:57] so I'll be my switch I've been kind of
[53:00] 80 planning 20 up and I'm switching back
[53:03] to 80 R 20 planning
[53:06] um because the plan is now done yeah
[53:09] um yeah so that's that's kind of where
[53:11] I'm at but you know that will fluctuate
[53:12] over time sometimes it'll be 50 50
[53:14] sometimes it will split the other way as
[53:16] well and you said you uh you're
[53:18] currently uh building your team uh your
[53:21] team is is somewhat scattered you know
[53:23] some teams are all in one location but
[53:25] your team tends to be scattered amongst
[53:27] the the different Studios talk to me
[53:29] about your team the EU sandbox 2. yep so
[53:32] we've got
[53:34] um Martin and Frick who are in the
[53:36] Frankfurt studio uh Martin did the race
[53:38] tracks for anyone who remembers those
[53:42] um and then we've got Luke in the UK
[53:44] who's just started
[53:46] um which is great and then on the design
[53:48] from on we've got Manuel and John they
[53:50] were in De and we've got James in the UK
[53:53] so it's it's not just art focused it's
[53:57] being a product owner you have to be
[53:58] aware of design and how that fits into
[54:01] it as well now during the segment
[54:04] yesterday
[54:05] uh when we switched to the uh
[54:07] spreadsheets and we start we saw the
[54:09] absolutely concrete and accurate numbers
[54:12] that don't change ever yeah and are
[54:16] always the very first thing to get
[54:18] entered yeah um I think it said there
[54:20] was like 2
[54:21] 674 days to complete the uh the
[54:24] underground facility so when are we when
[54:27] should we be expecting this 2032 I don't
[54:30] know how many years that 2 674 days is
[54:33] also see it's funny because when we
[54:35] filmed that that was my latest and
[54:37] greatest spreadsheet at the time since
[54:38] then I've Revisited my numbers and
[54:41] they've you know fluctuated a little bit
[54:44] let's say
[54:45] um but also when we were filming it it
[54:48] was the number of artists was reduced so
[54:50] of course the number of days is going to
[54:51] be higher
[54:53] um now we've kind of balanced the books
[54:55] a bit but
[54:57] um I'm not going to give you a concrete
[54:58] date because I don't know myself yet
[55:00] fair enough and that number anyway is
[55:03] not like contiguous days those are the
[55:05] the number of like I I guess person days
[55:07] or something yeah yeah person days and
[55:10] this isn't including any holiday or
[55:13] sickness because I encourage people to
[55:15] take holiday and you know if you're ill
[55:17] please stay at home
[55:19] um this is just kind of days in which it
[55:22] might take to deliver this location yeah
[55:25] and uh I have not been messaged by Tyler
[55:29] but I have a message by Todd Pappy
[55:31] directors are a fantastic individuals
[55:33] they are some of my favorite individuals
[55:36] uh uh and they are some of the most
[55:38] hardest working individuals and we
[55:40] wouldn't have anything uh without them I
[55:43] love directors and and and especially uh
[55:48] Todd
[55:49] who's messaging me right now
[55:52] you okay
[55:53] I said Todd is that good
[55:56] all right so uh with that I think I've
[56:00] successfully set enough fires uh during
[56:02] the day this is what happens we used to
[56:04] you know the show used to be all backer
[56:06] questions and when the show was all
[56:07] backer questions I was safe I could just
[56:10] play mediator and whatnot but when we
[56:11] changed to the talk show format and I
[56:13] had to come up with anything it's clear
[56:14] that I'm gonna have to practice uh safe
[56:18] questioning a little bit because I'm
[56:20] just
[56:21] ah
[56:23] hopefully this won't be the last
[56:24] broadcast uh anyway that's the show
[56:28] thank you so much for hanging out with
[56:29] us on this week's Star Citizen live uh
[56:32] be sure you tune in uh next week to
[56:34] inside Star Citizen uh we have got a
[56:38] feature that I know many of you have
[56:39] been waiting for uh we've got a Chad
[56:42] McKinney and Dan Griffiths uh no
[56:44] relation uh from Austin to you and
[56:47] they're going to be talking about the
[56:48] current progress on the cargo refactor
[56:52] just going to give you guys a moment to
[56:55] and then and then we then Morgan from
[57:00] here in the UK studio is going to give
[57:01] us an update on rastar which is a tool
[57:03] that we first saw at citizencon last
[57:05] year uh that is currently being used to
[57:08] place a whole new host of outposts on
[57:11] the planets and moons of the standard
[57:13] system and as well as the upcoming
[57:15] pirate system so check that out that'll
[57:17] be next week on inside Star Citizen and
[57:20] for Star Citizen live uh it all depends
[57:22] on who
[57:24] shows up we'll see we have a plan and
[57:28] then it goes away so yeah so for uh
[57:31] Elliot and Max hanging out at the bar
[57:33] back there uh for John uh for John uh
[57:37] being an MVP and being a total champ and
[57:39] filling in at the last minute uh I am uh
[57:42] Jared Huckabee uh be safe have fun
[57:46] don't burn any bridges that you
[57:49] absolutely don't have to because you're
[57:50] on live video and uh we'll see you all
[57:54] next week everybody take care

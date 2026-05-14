# Star Citizen: Reverse the Verse LIVE - Performance and Optimization

**Video:** https://www.youtube.com/watch?v=7YPFaVK61xM
**Date:** 2018-03-09
**Duration:** 50:34

## Transcript

[00:11] greetings citizens and welcome to
[00:14] another edition of reverse the verse
[00:16] life I'm your host Content Manager for
[00:18] global video production Jared Huckaby
[00:20] on today's show we'll be sitting down
[00:22] with lead network programmer Clive
[00:24] Johnson and lead gameplay programmer Rob
[00:26] Johnson no relation to discuss
[00:28] performance and optimization and answer
[00:30] your questions live following
[00:32] yesterday's performance and optimization
[00:34] focused around the verse but before we
[00:36] get to that let's do the Week in Review
[00:39] last Friday we had studio director eric
[00:42] kieron davis and senior producer dennis
[00:44] crow here to discuss production
[00:46] practices and their work on the RSI
[00:48] public roadmap for 2018 it was a fun
[00:50] talk and a good chance to get to know a
[00:52] part of development that's often
[00:54] overlooked and misunderstood Monday
[00:57] brought with it another all new episode
[00:58] of our weekly Q&A show
[01:00] calling all devs which featured answers
[01:03] to your questions about buying weapons
[01:04] without the UEC automating ship turrets
[01:07] the cargo space in the freelancer der
[01:09] underground caves and the status of the
[01:12] star said it's a mobile app stretch goal
[01:13] yeah me now if you haven't seen calling
[01:15] all devs it's available every Monday up
[01:17] on YouTube Tuesday brought with it the
[01:21] March episode of Laura makers guide to
[01:22] the galaxy this time focused on the
[01:24] caifa system spiritual center of the
[01:26] xi'an empire and a popular tourist
[01:28] destination to many in the UAE and when
[01:31] we talk about shows that only star
[01:32] citizen's star citizen would do and only
[01:34] star citizens would watch laura makers
[01:36] guide is a fantastic example of this
[01:38] each and every month on wednesday we
[01:41] hosted our very first subscriber only
[01:43] tour of the los angeles studio where
[01:45] subscribers not only got to see some of
[01:47] the stuff we're working on ahead of time
[01:48] but participate in the filming of this
[01:50] week's around the verse it was a fun
[01:52] afternoon and a great opportunity to
[01:54] hang out with just a small fraction of
[01:56] the thousands of people that make all
[01:58] our community content possible now keep
[02:00] your eyes and ears open in the coming
[02:01] months for word on joining our next
[02:03] subscriber to work just like this one
[02:05] finally on Thursday
[02:07] this week's around the verse was a
[02:09] twofer we had a star citizen project
[02:11] update with some really cool looking
[02:13] look at the future of cockpit displays
[02:15] and the main feature read about the
[02:17] continuing work tuning performance and
[02:19] optimization for star citizen now when
[02:21] we come back we'll be joined by the
[02:22] Johnston's Clive and Rob to dive even
[02:25] deeper into this topic central to the
[02:27] hearts and minds of star citizens
[02:29] everywhere
[02:29] stay tuned alright well on the show this
[02:33] week Clive and Rob Johnson FMV 42 UK hey
[02:37] guys doing pretty good Jared how are you
[02:40] I'm okay a little under the weather
[02:42] would not be a subscriber to our on on
[02:45] Wednesday and one of them brought plague
[02:46] but I'm okay tell me when somebody's
[02:48] like your date your date quills in the
[02:50] shot and I'm like okay I'll move it hide
[02:51] it over here and I'm like maybe if I
[02:53] leave in the shot I'll get a free
[02:54] sponsorship but so performance and
[02:59] optimization
[03:00] obviously this is this is a topic that's
[03:02] very close to backers hearts we star
[03:06] citizen is in a unique position because
[03:08] we are running a live game environment
[03:11] in the middle of our development you
[03:14] know but there are lots of terms in the
[03:16] in the in the gaming community early
[03:18] access stuff like that we're we're sort
[03:21] of like that we're not we're not we're
[03:22] not quite like like a pub genie and
[03:25] whatnot where we are we are very very
[03:27] very early on I mean we started our live
[03:29] environment back when we had only the
[03:30] arena commander module we are we are we
[03:33] are building this game out live in front
[03:36] of our community and that brings a lot
[03:38] of challenges with it one of the things
[03:41] I think it was I think it was a I can't
[03:44] remember I can't remember who said no
[03:46] but usually optimization happens towards
[03:48] the end of the process and we are
[03:50] because we're running the cyber
[03:52] environment because we want people to be
[03:53] able to accurately test the stuff that
[03:56] we have to we have to sort of change the
[03:58] paradigm a bit and and optimize our
[04:00] performance live during development and
[04:04] that's what our h-e-b was focused on
[04:05] last yesterday if you haven't seen it
[04:07] that's a Bilbo up on YouTube and at the
[04:09] end of this show I highly recommend you
[04:10] to go and check it out but on the show
[04:12] today we've got Robin Clive Johnson no
[04:15] relation and I'm going to keep hammering
[04:16] that dire joke because I love it I'm
[04:18] sorry guys let's just take a few moments
[04:20] now and introduce
[04:22] you introduce yourselves to everybody
[04:23] who's watching I tell who you are and
[04:25] what you do for starters isn't
[04:27] I'm Rob Johnson leaked gameplay
[04:29] programmer here at foundry 42 Wilms oh
[04:32] I'm Clive Johnson lead Network
[04:35] programmer also Yankee 42 no relation no
[04:39] relation so what does a lead programmer
[04:45] do run also it's really and it primarily
[04:52] I'm in charge of managing a team of
[04:54] gameplay engineers and also work with
[04:57] production and scheduling the work that
[05:00] the team has to do and do a lot of bug
[05:04] fixing and trying to look at critical
[05:07] issues as they come down and things that
[05:10] might be stopping us pushing T vacati
[05:13] for example they often get put on elite
[05:16] plates first for us to assess and then
[05:20] assign out as needed and just generally
[05:26] you know a day in the office is just a
[05:28] busy mix of emails Skype JIRA's
[05:33] bug-fixing occasionally a little bit
[05:36] future work maybe they maybe a few
[05:38] meetings so it's really just a little
[05:41] bit of everything but really good fun
[05:43] you're really selling their glamorous
[05:45] video game developed on there Robbie
[05:47] yeah when is the lead network engineer
[05:51] you pretty much the same thing and the
[05:55] the kind of fame the other part of it is
[06:00] the the dealing with demons are wrong
[06:03] Wed talking to the other leads and
[06:05] coming up with solutions for the kind of
[06:07] problems that we face it's going to work
[06:09] for everybody and trying to make sure
[06:11] that everything's tossed off in their
[06:14] engineer and production aware of what we
[06:16] need and when we need it by so that we
[06:18] can worry about dependencies now if
[06:22] there's your first time watching our TV
[06:23] we are live congratulations hello for
[06:25] those those so those of you who are here
[06:27] live if you're watching on YouTube after
[06:29] the fact thanks for watching
[06:31] we do take questions live in two places
[06:33] you can submit your questions either
[06:35] twitch chat where we're broadcasting on
[06:37] twitch.tv slash star citizen you can
[06:39] preface your question with the word
[06:40] question in capital letters surrounded
[06:42] by brackets that helps us pull it out
[06:43] you can also submit questions live on
[06:45] spectrum which is our own communication
[06:47] platform available on Roberts space
[06:49] industries comm in addition to the live
[06:51] chat we also put up a thread last night
[06:53] once HG beam went live collecting
[06:56] questions for folks that couldn't be
[06:57] here live the other thing that there
[07:00] that does is it lets people vote on
[07:01] which questions they want to see
[07:02] answered so we do have some questions
[07:04] from that chat from that thread that
[07:06] we're gonna get to while folks in the
[07:08] Live Chat are coming up with what they
[07:09] want to ask the first question from that
[07:11] thread for you is the time and effort
[07:14] required to come up with temporary
[07:16] solutions that allow us backers to play
[07:19] each patch at this early stage
[07:21] interfering with the development of
[07:23] long-term solutions the game needs I'm a
[07:25] pretty good question I think for me
[07:30] interference may be a bit of a strong
[07:32] word there and I'd say a lot of them a
[07:35] lot of game development you've got kind
[07:37] of times at which you know you've got so
[07:41] you might need a short-term solution
[07:43] medium term solution long term solution
[07:46] obviously with a game like this we're
[07:49] always aiming to try and get the best
[07:51] long-term solutions in which was doing
[07:55] things properly we're not a game where
[07:56] we can really take shortcuts we'd we
[08:00] have to we have to look at you know what
[08:02] he's going to work beyond the next patch
[08:07] with us releasing and every few months
[08:11] and to get a build release ready we are
[08:14] at times going to you know have to look
[08:17] at addressing issues in certain ways
[08:19] that may not be relevant in a year or
[08:23] twos time so for me it's kind of just
[08:25] part and parcel of what we do you know
[08:28] we've you know it's not new to us as as
[08:32] engineers and even if we weren't doing
[08:34] the patches every few months and
[08:38] releasing them to the public you know we
[08:40] still need sort of short-term solutions
[08:44] at times to for example and allow design
[08:47] and other departments to
[08:49] actually like get on with their work you
[08:53] know you don't you don't just start with
[08:55] very close to finished product in a
[08:57] cycle of game development there's a lot
[08:59] of prototype in and try and stuff out
[09:02] and and sort of changing things around a
[09:06] little bit until you come up with a good
[09:07] mix of things that actually works well
[09:09] so we're yeah it's for me it's just part
[09:13] of their of what we have to do yeah I
[09:17] think that affects just about every
[09:19] aspect of star citizen's development not
[09:21] just performance optimization we are
[09:23] always building the first iteration of
[09:26] something and then you know wrapping it
[09:28] up in a form that can actually go out to
[09:29] people and then building the next
[09:31] iteration of building the next iteration
[09:32] like with like with 3.1 we're putting
[09:35] out the first version of our character
[09:37] customizer it is not the it is not the
[09:40] fully featured version that we that we
[09:41] want with the DNA morphing anything but
[09:43] it is it is it is part and parcel of how
[09:46] we've chosen to develop star citizen
[09:48] which is live and out in front of
[09:50] everybody you're constantly you're
[09:52] working towards a long-term goal but
[09:54] you're also working towards these
[09:55] short-term goals and having to package
[09:57] everything up in a and there's nice of
[09:59] bow as you can to give to people every
[10:02] couple months my next question for the
[10:05] thread what's the difference between SV
[10:07] calling in 3.1 and network buying
[10:10] calling it's become a serialized
[10:13] variable called yes
[10:15] okay so bond column will be the entities
[10:20] that are far away from you they're not
[10:22] present on clients at all and so they
[10:24] won't be taking any memory they won't be
[10:26] taking any CPU load serialize variable
[10:31] client on the other hand is that we just
[10:32] stopped sending the network updates for
[10:34] those entities those entities that are
[10:36] far away so far away on your client that
[10:38] you can't actually see them and so
[10:42] they're still the entities are still
[10:43] there that's all present in memory and
[10:45] they don't require any CPU updates
[10:50] because they're not getting Network
[10:51] updates so the natural state of entities
[10:55] on the client or most entities on the
[10:58] client will be if they're not getting
[10:59] any network updates on the server
[11:00] they'll go to sleep
[11:02] for the next network up they decide what
[11:04] they need to do so I hope that explains
[11:07] the difference all right from the live
[11:10] chat
[11:11] how long have some performance increases
[11:14] or how long have some performance
[11:16] increasing features fixes been in
[11:18] development all do we start optimizing
[11:21] with 3.0 or have we been working on
[11:23] these things for longer than just 3.0
[11:26] branch I'm the first time we started
[11:31] discussing network optimization that was
[11:33] the day I joined the company about 3
[11:35] years ago and we've kind of we've been
[11:38] working on it steadily ever since trying
[11:40] to unravel the pieces bit by bit so that
[11:42] we can we can make these changes we get
[11:45] in there and we yeah luckily there's a
[11:47] lot of there's a lot of them a lot of
[11:49] the work involved
[11:50] say for example in clive putting in the
[11:54] new network
[11:56] backend and then game co take it taking
[12:01] 5s api and using that in the game code
[12:04] to replace some of the older stuff that
[12:07] we originally took when we got the
[12:09] engine so a lot of the time it's it can
[12:13] just take sort of several months
[12:14] sometimes to convert over what may be
[12:18] like literally sort of hundreds of
[12:22] pieces of code that we've got to make
[12:25] sure that they still work and and make
[12:30] sure that they then use the new code and
[12:32] which can then be more optimal because
[12:36] then because Christ done such a good job
[12:38] on it and I got a question pretty well
[12:44] this is from me it's not from the check
[12:47] backers have have taken to referring to
[12:51] all performance based issues as netcode
[12:55] issues how crazy does that drive you
[12:59] absolutely livid twice not no hair yes
[13:04] yeah long hair when I joined a company
[13:06] yeah he's got pictures to prove it as
[13:09] well I think you can we help
[13:14] what can we say to help dispel that
[13:17] Judge Esther I mean obviously we all
[13:20] know that there are performance issues
[13:21] we see the same frame rate that our
[13:24] backers see when they play in whatever
[13:25] what can we say now to kind of educate
[13:28] folks that this isn't that what you're
[13:31] seeing is not just a blanket net code
[13:34] issue
[13:36] okay so saying that there's performance
[13:39] issues in multiplayer is is fine hmm to
[13:44] then pin it on a particular part of code
[13:47] and say well because it doesn't happen
[13:49] in single-player all the code that you
[13:51] can see well-known in single player must
[13:53] be fine there is a bit of a leap because
[13:56] basically there's sheer different
[13:59] quantities of entities that were dealing
[14:02] with between single-player and
[14:03] multiplayer mm-hmm so you'll have I'm
[14:06] not entirely sure how many entities
[14:08] we've got purple I would say 220 odd
[14:10] entities per player for each client that
[14:12] joins and then they'll spawn a ship that
[14:14] could be somewhere between a hundred to
[14:17] I think some of them will get them so
[14:19] like five thousand entities and then
[14:22] they'll go and fill those with cargo
[14:23] which more entities and they'll fly off
[14:25] and they'll interact with pirates and
[14:27] TAS givers which are more entities that
[14:29] get spawned and they'll be debris police
[14:33] is fine off so yeah that the number of
[14:35] entities grows very rapidly with the
[14:39] number of clients and that's what causes
[14:41] the performance low so if people want to
[14:43] call that net code then that's fine but
[14:46] it's not the networking specifically
[14:49] it's the networking and the game code
[14:52] and the physics it's really just there
[14:57] every every module and every engineering
[15:00] department really kind of has to take
[15:02] responsibility for their own perfect
[15:05] performance and that they achieve
[15:09] in-game I mean you know when when we've
[15:12] been profiling this stuff and you tend
[15:14] to you tend to find that sort of almost
[15:16] no engineering department can can ignore
[15:21] performance you know we get the UI guys
[15:23] the AI guys as well the audio guys
[15:26] there's you know it really is
[15:28] sort of shared across the board and it
[15:31] might be that it might be that say you I
[15:34] do really great optimization and then
[15:36] all of a sudden the next biggest hitter
[15:38] on the list is the audio guys and then
[15:41] it you know then it might be the
[15:43] graphics guys it's just you know and
[15:45] from time to time unfortunately so
[15:47] things in unexpectedly crop up and you
[15:51] know all of a sudden we have to jump on
[15:53] those fix that and then get back to
[15:55] bring in there and bringing the average
[15:59] frame time down and improving things I
[16:01] think as weld has kind of been a bit
[16:04] miscommunication in for a while we were
[16:06] method that the bottleneck on the server
[16:09] was the networking code and I think
[16:11] that's kind of been misunderstood a
[16:13] little bit that it was the bottleneck
[16:14] everywhere so yeah maybe that's partly
[16:17] responsible yeah that's one of the
[16:19] reasons why you know we had talked about
[16:20] we had we had wanted to have you on
[16:23] happy hour at the end of this year and
[16:25] whatnot but as we dealt as I dug deeper
[16:28] into it you know everything that was
[16:29] going on we realized that this is far
[16:31] more than just you know net code
[16:32] networking something that we wanted to
[16:34] do a much more robust feature and that's
[16:36] what that's what folks are hopefully
[16:37] seen on a TV yesterday that performance
[16:40] and optimization is is a task that
[16:43] affects almost every discipline in star
[16:46] citizen so it will it will be all teams
[16:49] working in conjunction to bring star
[16:52] citizen to the 60 frame heaven that
[16:56] we're all aspiring yeah I mean the other
[16:59] thing throughout as well of course it's
[17:00] not just engineers you know if a
[17:04] designer wants to drop two billion
[17:06] entities in life all that performance
[17:08] isn't gonna be great you know if an
[17:10] artist wants to model an apple out of
[17:13] like a trillion Polly's place it on the
[17:16] table and an outpost then again you know
[17:19] this there's this you know a shared
[17:22] company responsibility really who know
[17:25] I'm trying to remember trying to
[17:28] remember who that was right now but
[17:29] somebody wants so many once told me that
[17:31] the original freelancer model the one
[17:34] that had all those crazy rivets because
[17:36] the rivets were were created incredibly
[17:39] poor
[17:40] to be honest that the the freelancer had
[17:43] a larger memory footprint than the Idris
[17:47] they went and and and that's definitely
[17:49] not network relay that's just that's
[17:51] just that that's just the franceour is
[17:53] one of the reasons we we go back and we
[17:55] revisit these ships and not just because
[17:57] we want to change them for gameplay
[17:58] purposes but sometimes we just need to
[18:00] seriously optimize the way they were
[18:02] built we've gotten much better at
[18:03] building these ships as time has gone by
[18:05] so yeah alright next question from the
[18:08] spectrum thread what network enhanced
[18:11] ins beyond what is listed for three
[18:13] point four are needed before we can have
[18:15] two systems connected by a jump point
[18:21] so beyond three point four so three
[18:23] point four we've got on the on the
[18:26] roadmap server migration so for two
[18:30] systems they're always going to work all
[18:34] the planners for them to work like
[18:35] separate instances so the servers for
[18:39] one system and the servers run over the
[18:41] system will be completely disjoint and
[18:42] won't communicate at all
[18:45] with thinking maybe it's not decided yet
[18:48] that we could use the server migration
[18:51] technology to help provide a seamless
[18:54] transition via the jump points from
[18:57] system to system
[18:58] mmm so potentially what we could do is
[19:01] someone wants to jump from one system to
[19:03] another their ship gets put into a
[19:06] server and its own little bubble and
[19:08] that's ever then breaks off from the the
[19:12] mesh in one system and then is moved
[19:15] over to a mesh in the other system plan
[19:18] is connected it and one of the
[19:21] difficulties that we'll have to try and
[19:22] solve if we do that is the reason we
[19:27] won't mix systems together won't connect
[19:30] service from different systems together
[19:31] is that each system has its own
[19:32] coordinate system and with the star
[19:35] being at the center zero zero zero and
[19:39] so we have to move from wherever you
[19:43] jumped from the something system to mmm
[19:46] whichever destination system you're
[19:48] going to move the ship move that server
[19:51] ball across space
[19:54] who without colliding with anything else
[19:57] and there's you know over the systems so
[19:59] I'm yeah it's it's a little tricky but
[20:04] yeah we're thinking about it we have to
[20:07] build a server migration techfoot server
[20:09] meshing tech first and then we'll see if
[20:11] we can utilize it that way it's still a
[20:13] the question was still a bit far out
[20:15] there yeah that's right my son I am
[20:18] another question from a live chat
[20:20] what upcoming optimization are you
[20:22] personally most looking forward to and
[20:25] why and for me I think one of the
[20:35] biggest things this year for us is
[20:36] subject contain a stream in I mean is
[20:43] that's that's something we're working
[20:46] towards and Earth 33.3 it kind of goes
[20:51] hand in hand really with like some of
[20:55] although we're a new entity component
[20:59] work that we've been doing so the entity
[21:01] component update scheduler and really
[21:05] the with object container stream in you
[21:08] know you should get optimizations on
[21:10] load times for example because you'll be
[21:12] coming into the P you only needing to
[21:16] load in the immediate area around you to
[21:19] begin with so from our point of view and
[21:22] as Davis we're very much looking forward
[21:25] to being able to get in the PU fix some
[21:28] bugs in I get an absolute fraction of
[21:31] the time it takes us to load into the PU
[21:33] right now so you know it's not just
[21:36] going to be a benefit for you guys
[21:38] playing the game it's going to be
[21:40] something that you know that is great
[21:43] for us every day and work wise but to do
[21:48] that there's you know there's there's a
[21:50] lot of there's a lot of talented guys
[21:52] and the engine side of working it back
[21:55] and forth at but also sorry game code
[21:58] wise we again have to go through lots of
[22:03] old game objects convert over that code
[22:05] to our new entity components
[22:08] we have to make make the various classes
[22:13] thread-safe
[22:15] avoid it so to avoid crashes it's so
[22:18] that those those new classes then
[22:21] shouldn't should in theory be ready to
[22:23] put on everything should be ready to go
[22:26] on the battery up data spread the load
[22:28] across multiple cores allow the game to
[22:31] scale a lot better so really it's kind
[22:34] of hard to pin down one specific
[22:36] optimization when we have kind of
[22:38] several or all being worked towards at
[22:41] the same time you know we have things
[22:44] back to update in now we have a lot of
[22:46] these classes that are now fred safe we
[22:48] have a lot of stuff that's being
[22:49] converted over this just there's just a
[22:52] couple more releases probably until
[22:54] there until we're quite there so we're
[22:58] yeah that that's that stuff you know
[23:00] this you know I saw it something I'm
[23:02] very much looking forward to and because
[23:05] you know a lot my job for the last like
[23:08] three or four years has been getting rid
[23:10] of a load of old code and putting in
[23:13] this nice new shiny stuff so we we dream
[23:15] of the day where we just have this nice
[23:18] shiny code base that's that's our own
[23:21] and we're not we're not fixing crashes
[23:24] and something that got added years ago
[23:26] and yeah you know we can just we can
[23:29] just enjoy and enjoy the new code but
[23:33] hope you want to get to it's kind of
[23:36] like being asked to make a favorite
[23:37] child my parents had no trouble with
[23:42] that right while you were talking
[23:49] Rob one of the questions came in that
[23:51] says can we please dummy explain that's
[23:54] their words we please dummy explain what
[23:56] object container streaming really is
[23:59] okay well an object container in its
[24:03] simplest form you could maybe just think
[24:07] of it as actually kind of like a level
[24:11] yeah without sort of without a few bits
[24:16] of stuff that's kind of specific to it
[24:19] that's really being a level if you like
[24:21] you know
[24:22] like an a because I let most of what a
[24:28] level is is it's just a list of objects
[24:32] so in the CryEngine and your most
[24:36] lumberyard you're looking mostly here
[24:38] and entities and brushes mm yeah okay
[24:45] large-scale pieces yeah like ships and
[24:48] space station yeah planets they're all
[24:50] object containers so that's like a net
[24:52] so like the data is like an XML like
[24:56] file format which just is sort of
[24:58] containing a list of things and then
[25:02] that is so if that's an object container
[25:04] the idea is you sort of load into the
[25:08] map low load one set of objects that
[25:14] surround you you spawn a ship at the
[25:17] ship itself can be an object container
[25:19] it's just a set of objects popping that
[25:22] ship fly it fly across the galaxy you no
[25:26] longer need the object container that
[25:28] you've spawned in in in the first place
[25:30] a port olisar
[25:32] so you can remove those entities so
[25:35] really when we say right object
[25:37] containers it is kind of just that it's
[25:39] a container with some objects in and the
[25:43] way we've got the game set up we can we
[25:48] can spawn those in dynamically remove
[25:50] and dynamically and that's that's really
[25:53] where you know that's really this sort
[25:54] of streaming process but as simply as
[25:57] akin there as I can get just so it's
[26:00] like when you load in there port olisar
[26:02] it doesn't have to send you it doesn't
[26:05] have to load up the star further that's
[26:06] sitting on Levski and the surface of
[26:08] Levski in your memory is you can't see
[26:11] it you can interact with it right now
[26:12] there's no reason for it to send that
[26:13] data to you and for you to load into
[26:15] your memory you know it basically it's
[26:17] it's a start affair or reclaimer an
[26:20] entire base they're all various object
[26:24] containers at different sizes and scopes
[26:25] and this is just the system that
[26:27] determines all right we do need to send
[26:29] this to you we don't need to send this
[26:30] to you and
[26:31] when and where that happens okay from
[26:35] the thread there are massive fleet
[26:38] battles still feasible yes yes anything
[26:45] so yeah that was easy
[26:48] [Music]
[26:49] do you have any elaboration I was just
[26:52] joking about that um yeah okay um
[26:58] one of the things you've got a bear in
[26:59] mind is get the 3 point out the servers
[27:03] were running on 16 cores so the thread
[27:08] runs one flat-pack or so we had 16
[27:11] threads available to the so um there's
[27:15] servers that am I wasn't enough
[27:17] available to us um have up to 72 calls
[27:21] so obviously there's a lot more cause
[27:23] there's a lot more scope as to expand
[27:25] and run more things in parallel with the
[27:31] parallel and the changes that we made
[27:36] and make the network code one more
[27:37] Impala it's it stands a look yeah we
[27:40] could pretty much scale the numbers
[27:44] quite well um it's it's the lies a lot
[27:49] not just on the network code though it
[27:51] relies on as bob was saying earlier it's
[27:54] the mix of every one of the physics code
[27:57] and the gameplay code you know
[27:59] everything working together so that we
[28:00] can fill out those cause as optimally as
[28:02] possible and I do believe that we've got
[28:08] the systems coming online and don't
[28:11] allow us to do that such as the entity I
[28:13] always get it stuck on this name the
[28:16] entity component update schedule we do
[28:18] have the best names in engineering they
[28:20] are catchy
[28:21] um so it's just a question of leveraging
[28:26] those to the best of our ability and
[28:28] then yes I think massive space battles
[28:31] or what will be a reality
[28:34] yeah I mean you can you can see what
[28:36] we're trying to do all the time we're
[28:37] really just trying to push things as
[28:40] much as we possibly can keep raising the
[28:42] bar you know Mike life says we've got
[28:44] the plan
[28:45] in place it's really just now we've just
[28:49] got got a continue implementing things
[28:52] the way we've been doing it and we'll
[28:54] keep on raising the play accounts
[28:56] allowing allowing more ships into the PU
[29:00] and so hopefully we'll reach a point
[29:05] where people consider the amount we've
[29:08] cut to to be massive and so yeah with we
[29:13] think it's feasible we're going to keep
[29:15] keep going towards it another question
[29:20] from the live chat here
[29:21] why is serialized variables range
[29:24] culling less problematic than network
[29:26] bind calling because to me it sounds
[29:28] very similar to them yeah it is it is
[29:33] very similar the the only difference
[29:35] being that the with serialized variable
[29:40] calling the entities themselves are kept
[29:43] around on the clients with bind calling
[29:46] the binding part is and effectively to
[29:49] create the entity on the client
[29:51] connecting it to the network that's the
[29:53] bind apart and then and letting the
[29:56] server know that the this entity is
[29:58] available for to talk to on the client
[30:02] and so by keeping their entity around we
[30:07] solve that problem we don't have to get
[30:09] rid of the density itself which means
[30:12] that then the data for that entity is
[30:15] loaded in on the client so what you
[30:18] could have is a situation where and
[30:20] you've got a ship and you're a port
[30:24] olisar you're watching a ship comes and
[30:25] travel away so if we've been calling
[30:28] that ship would be unloaded you
[30:30] potentially lose all the data files and
[30:32] then if it comes and travel back you'd
[30:34] have to load those data files in again
[30:35] and respawn that entity on your client
[30:37] and that will cause a loading store at
[30:39] the moment so the reason that we haven't
[30:42] gone with bone calling for 3/1 is
[30:44] because we don't want players to
[30:47] experience additional load installs
[30:48] beyond what they already do and the
[30:51] reason it was on the 3-1 roadmap was
[30:54] because we thought what the hey we'll
[30:57] give it a try
[30:57] we'll see how about it actually
[30:59] but in the process of working towards
[31:02] 3-1 poets have changed a bit me because
[31:04] always the gamble as to say well for
[31:05] buying corn was actually going to
[31:07] improve things or make things worse so
[31:09] we decided but that we'd shift focus and
[31:12] make sure that Syria's variable calling
[31:15] was in and working and then assist with
[31:18] the develop simulations that are being
[31:20] done yeah I mean by the gate from the
[31:23] game code perspective as well what you
[31:27] always tend to have in engineering is
[31:29] you can't help but absolute certain
[31:31] assumptions as to the way things they're
[31:34] kind of gonna the way things work and if
[31:38] all of a sudden we've got entities that
[31:42] were once they're albeit like the other
[31:45] side of the universe and now they're not
[31:48] then you can you can apply the nature
[31:51] the fact that we have right so many sort
[31:54] of tens of thousands probably hundreds
[31:56] of thousands of lines of game code
[31:59] there's going to be places where people
[32:01] have assumed once an entity exists it's
[32:05] you know it's kind it's there and it's
[32:09] not it's not being sort of pulled in and
[32:11] out depending on whereabouts you are in
[32:14] the server so yeah there's there's a
[32:18] little bit fix up time we're gonna have
[32:20] to work our way through yeah next
[32:24] question says will sir permission be
[32:27] used to attempt a single worldwide
[32:29] server side or is ping the unbreakable
[32:33] barrier and will pings definitely an
[32:37] unbreakable barrier we are planning on
[32:42] attempting a single shard and what pings
[32:46] definitely going to be the big obstacle
[32:48] that we're gonna have to face so a
[32:52] number that I've kind of got in mind is
[32:55] I think it's Australia two parts of the
[33:02] US as something like typically like a
[33:04] 200 millisecond ping the EU to us
[33:10] something around on
[33:12] milliseconds or so so that they're not
[33:15] insignificant latency so potentially
[33:18] what we could do is try and find a
[33:22] server that's geographically in the
[33:25] middle of the players who are
[33:26] interacting at that point and try and
[33:28] locate all the players who are interact
[33:30] and so all the players were in Portales
[33:32] all be on the same server in the same
[33:33] server would be in the geographic middle
[33:35] somewhere of all the players are out of
[33:37] court also at that point in time and try
[33:40] and optimize the ping that way for as
[33:42] many people as possible and what we
[33:45] could do as well is we could kind of
[33:51] layer the servers in a sense so everyone
[33:56] connects to their regional server or
[33:59] servers closest to them in a regional
[34:01] data center and then those servers then
[34:03] communicate with one that's
[34:05] geographically centered around the
[34:07] others that are connecting it so you can
[34:10] try and minimize the ping that way and
[34:12] some of its going to come down to and
[34:15] trying to find techniques to hide the
[34:17] latency as much as possible and it's it
[34:23] really depends on the gameplay situation
[34:25] it is obviously it's mostly going to
[34:26] affect fast combat and yeah it's gonna
[34:32] be challenging I don't I don't have any
[34:33] definite answers about how we're gonna
[34:35] tackle all that but we've got to build
[34:36] the tag first so that we can attempt to
[34:38] try and find solutions to those problems
[34:40] and the other thing to say is that
[34:43] probably arena commander and star marine
[34:46] it's not fully this idea or they'll
[34:47] probably always be am region based so
[34:51] you'll always be connecting to your
[34:52] local server for those games so they
[34:55] should always have nice sharp low pings
[34:58] fair enough next question actually came
[35:02] in both the thread and the live chat is
[35:06] buying culling of distant objects
[35:08] problematic problematic for implementing
[35:11] optical magnification equipment like the
[35:13] endeavour's telescope arrays and yes yes
[35:18] it's going to be a bit awkward so um the
[35:21] way we can the cool thing is not just on
[35:23] a distance basis it's
[35:27] kind of a as observed sighs so if you
[35:32] imagine holding you your arm out in
[35:34] front of you you thumb up and you kind
[35:36] of anything that appears bigger than
[35:38] your thumbnail to you is something that
[35:41] we'd want to keep in anything that's
[35:43] small and the size of your thumb there
[35:44] it would be something that would get
[35:46] cold and so adding the telescope on
[35:48] obviously means that you feel the view
[35:51] and it gets narrower when you're looking
[35:54] through a telescope so everything that
[35:56] appears much more magnified so that that
[36:01] means that you can see much smaller
[36:03] objects so that we have to keep in
[36:05] things that are much further away it's a
[36:10] yes it's it's going to extend the ranges
[36:12] a lot it could be a bit of a problem I'm
[36:16] sure it'd be fine but it's a it's
[36:18] something that I'd like that game
[36:22] designers to reign in police yeah I
[36:25] think this or similar similar kind of
[36:28] issues with comes as well because
[36:31] obviously you know if you if you talk
[36:33] into if you talk into my multiple people
[36:37] in multiple locations you know all of a
[36:40] sudden it's miss Eyre the challenges
[36:44] students or figure out how we can like
[36:47] accommodate that situation without
[36:50] taking the load of every location that's
[36:54] that we want us that we want to show
[36:56] show and show some detail in this that
[37:00] is one of the probably the most
[37:01] challenging gameplay aspects we have to
[37:05] deal with yeah well luckily we've got
[37:08] we've got some time ahead of us that
[37:10] work on that stuff we'll performance and
[37:13] optimizations help with older pcs so
[37:16] people won't have to spend more out of
[37:17] pocket pocket to be up to par yes and
[37:23] we'd like to so make it clear as we're
[37:26] on them that all the optimizations we're
[37:29] doing code wise they're not specific to
[37:32] any particular machine specs you know
[37:36] the code doesn't really
[37:40] really care whether it's high end or low
[37:43] end machine that it's going on
[37:45] you know if we're putting optimizations
[37:47] in the you know we found something oh
[37:49] you don't need to update this this
[37:53] object in this situation or you know we
[37:57] can you know we cut down my mounts of
[38:00] sort of expensive code that we that we
[38:03] call in and you know those those kind of
[38:06] fixes will welcome apply to both low end
[38:10] and high end so so I think that all
[38:13] there it's it's probably like hard to
[38:16] sort of hard to judge exactly how much
[38:19] on each on like a high end versus a low
[38:23] end you save but the code is fixed for
[38:26] both so you should see you're saving in
[38:28] both the a the aim is to optimize across
[38:30] the board kind of applies for services
[38:34] as well
[38:35] because obviously they're super high-end
[38:37] pcs if you want to think of them that
[38:39] way so any any optimizations we do will
[38:42] benefit the servers as well as clients
[38:44] yeah
[38:46] triple win from the live chat here some
[38:49] players are getting massive CPU spikes
[38:52] and PU what optimizations do you think
[38:55] will really impact client CPU load um
[39:02] well I think the thing we need to do is
[39:07] diagnose exactly why those spikes are
[39:10] occurring without that information you
[39:13] can't really you can't really tell what
[39:16] the optimizations are going to be yes
[39:18] yeah we need to we need to find the
[39:19] problems and fix them we've got plans in
[39:22] place to to do that those so when
[39:26] they'll be a year you know there's been
[39:29] new telemetry systems then added
[39:32] recently was talked about around the
[39:36] verse and eyeball see em in Frankfurt
[39:40] and so he's been putting stuff in that
[39:43] all them do things like automatically
[39:47] capture and performance telemetry when
[39:51] the framerate dips below
[39:53] a certain threshold so whether it's in
[39:56] our internal playtests or potentially we
[40:00] we have plans to sort of take it take
[40:05] telemetry from people from backers
[40:08] playing in the game on live as well so
[40:11] basically we should we should be able to
[40:14] get to lament tree for these and drops
[40:17] in performance and then we can analyze
[40:20] it and say you know in my video it's the
[40:22] game code oh it's the physics oh it's
[40:24] network and so we've really just got it
[40:28] we've really just got a kitty you know
[40:30] it's this bit like catching fish yeah
[40:32] who's we just really need to cast the
[40:34] line now and hopefully service that if
[40:38] there are any if there are any whoppers
[40:40] out there then you know we just we just
[40:43] hope into reel them in sooner rather
[40:45] than later gam fixed up you know we've
[40:48] we've got much better systems in place
[40:50] for free one to catch those things and
[40:53] also those new telemetry frameworks and
[40:55] the idea with them as well it's kind of
[40:57] to constantly pull in data as well so
[41:01] it's not just about the framerate drops
[41:04] it's about kinda like the baseline
[41:06] performance as well so you know we
[41:09] should have much more accessible ways
[41:13] for your average engineer in the company
[41:16] to look at the performance of the game
[41:18] go these ten functions or the the
[41:22] slowest in the game oh look one of them
[41:24] one of them something that I know about
[41:26] I can fix that and so it'll be a lot
[41:29] more transparent as to where the issues
[41:32] are and then that should lead to mean
[41:35] fixed fixed up a lot faster and so we're
[41:39] kind of hopeful with the tools we're
[41:40] getting in place a much better and it is
[41:44] is a gradual process it's some days some
[41:49] days you can get some good wins over
[41:52] days you sort of scratching around and
[41:54] you feel like if you go to places where
[41:57] you'd love to be able to optimize it but
[41:59] it's much more tricky
[42:01] so we're yeah then going off on a bit of
[42:06] a tangent there
[42:07] yeah we've got we've got plans we've got
[42:09] plans to get these framerate drops and
[42:12] get to get them so it as soon as
[42:13] possible yeah I got I got a suggestion
[42:15] for an out if we have a bunch of CPU
[42:17] space just turn off physics just we need
[42:21] physics just turn off physics if we have
[42:22] a whole bunch of CPU that's a free one
[42:25] for me to you brother friend as well
[42:28] like have you guys started to work on
[42:33] optimizing any part of squadron 42 yet
[42:36] or are you still figuring out the best
[42:38] practices for that now to apply the
[42:39] squadron 42 later well the way we build
[42:44] in the game and star citizen and
[42:47] squadron 42 we're sharing the code base
[42:49] and so really a lot of the optimizations
[42:54] we're applying already and will benefit
[42:58] squadron 42 and anything that sort of
[43:02] maybe it's like sort of range based
[43:06] optimizations visibility based
[43:09] optimizations I what can you sort of
[43:11] turn off at rate range or when you can't
[43:16] see it also pointing systems to make it
[43:21] easier to sort of time slice update so
[43:24] you might only need to update certain
[43:27] objects once every sort of second as
[43:31] opposed 60 times a second or in some
[43:35] cases you might you might only need to
[43:36] update things at once every five minutes
[43:38] and really those kind of systems that
[43:43] we're putting in a PI it will apply to
[43:44] both squadron 42 and star citizen this
[43:49] sort of the goals that Chris wants us to
[43:52] move towards so more more systems that
[43:56] kind of what we call LOD updates which
[43:58] we're Ladas level of detail so the idea
[44:02] might be you can have a AI character
[44:06] loaded in memory sort of very far away
[44:08] but for the for the client they don't
[44:11] need to run such a detailed update
[44:15] function for film in that situation as
[44:19] opposed to when
[44:21] I get closer the will be will be certain
[44:25] optimizations that are specific to
[44:29] certain squadron 42 and their star
[44:33] citizen for example the network
[44:37] optimizations well you know just apply
[44:40] to star citizen they'll likely be a
[44:44] bunch of stuff we can optimize in
[44:47] squadron 42 that we maybe can't optimize
[44:49] in in star citizen because it's a
[44:53] single-player tile and so yeah with
[44:58] we're thinking about it we're getting
[44:59] optimizations in already the that will
[45:03] benefit it so yeah it's in our it's in
[45:08] our minds and we've got guys upstairs or
[45:11] working on it now so if the when the
[45:14] performance gets yeah when when the
[45:16] performs gets not so good in certain
[45:19] areas up there we know about it down
[45:21] here on the on the PU floor and we're
[45:25] there try notes we're with them and
[45:27] helping briefings what are the current
[45:32] and forecasted blockers to be able to
[45:34] spawn capital ships like the javelin or
[45:37] the idris in the PU what needs to be
[45:40] added either feature performance wise
[45:42] for this to become feasible I think yeah
[45:50] not to for me I think feature wise
[45:51] there's issues with the sheer size of
[45:53] the ships and there aren't London parts
[45:57] big enough for them so there's some
[45:59] docking collars of docking technology
[46:01] that was required and performance wise
[46:04] we've had addresses in demos it's a blue
[46:10] it was a Gamescom last year so the
[46:16] technology performance technology is
[46:19] there it just needs improving I don't
[46:21] think it's a million miles away
[46:23] on the network side of things I think
[46:27] we're we're probably okay because we
[46:29] don't really treat these big ships any
[46:31] differently than we do a player or
[46:33] anything else it's all
[46:34] all the same solder stands these stores
[46:36] I don't think there's any big lockers on
[46:40] gameplay side no I mean for us or a game
[46:44] code wise it's really just the push
[46:46] towards object container stream in I'm
[46:49] also the ability to stream ships on the
[46:52] background threads which should come in
[46:54] as part of the object container
[46:56] streaming work and that you know that
[47:00] that'll eliminate the stalls that you
[47:03] see when you spawn a few ships at a time
[47:05] you know we can aware of those issues QA
[47:09] a tell us about those issues as
[47:11] engineers we just have to go it's going
[47:13] to be fixed 33 so yeah I mean obviously
[47:19] from a gameplay perspective you know the
[47:22] bigger the ship the bigger the store
[47:24] when it loads in because there's more
[47:25] entities that make make off the ship so
[47:29] whilst it's maybe not a blocker in the
[47:34] sense of you know we can spawn we can
[47:37] spawn big ships at the moment again to
[47:39] get them to a point where they were
[47:42] where it's good enough to get them
[47:44] actually actually in the game and for
[47:47] the releases and yeah we just we just
[47:51] need to get that sort of spawning on the
[47:52] background thread a few more these
[47:55] optimizations in and yeah we're just
[47:59] building up to I mean you know we've
[48:00] already got ships in the game like the
[48:02] Star Ferry which is pretty massive and
[48:05] so the reclaimer in 3-1 yeah yeah so so
[48:10] we're going pretty big already but yeah
[48:12] the the addresses is pretty massive
[48:16] we'll get there we'll get there well
[48:19] Clive and Rob you did it you survived
[48:21] you've done your our caustic three here
[48:26] at three years and I haven't lost to Deb
[48:27] yet probably let you go is there
[48:29] anything you want to say to the
[48:31] community you you it's not that code
[48:35] anything anything at all you want to say
[48:37] to the community for me let you I'm now
[48:40] you just said it for BJ thank you for
[48:42] that yeah it's just said yeah well we're
[48:46] just I'm having a great time making this
[48:48] gay
[48:48] and you know I really appreciate all the
[48:51] support we got just seeing a bunch of
[48:53] the backers that they don't so it's you
[48:56] know it's real pleasure to be involved
[48:58] in the project and yeah just hope you
[49:04] enjoy the work and I hope we get it bit
[49:06] faster for you next time all right well
[49:09] guys we're going to take a short break
[49:11] we're gonna watch the second half of
[49:12] that an awesome black Cutlass video and
[49:14] then we'll be right back with our
[49:15] wrap-up stay tuned well that about wraps
[49:18] up this week's show a special thanks to
[49:20] Clive and Rob Johnson no relation for
[49:23] allowing me to run that diehard joke
[49:24] right into the ground this week a couple
[49:26] housekeeping tasks before we let you go
[49:28] the ageist Vulcan concept promotion is
[49:30] still available through April 2nd as is
[49:33] the paint and library decal 2-pack for
[49:35] everyone even those waiting to get the
[49:37] shape the ship in the game then on
[49:39] Monday next week to check out an all new
[49:40] episode of calling all Deb's where we
[49:42] discussed the future of outpost service
[49:44] a hot fixes repair enough for three
[49:46] point three how player 2 player
[49:47] interdiction will work and the future of
[49:50] player hangers in star citizen it's not
[49:53] one you're gonna want to miss for a
[49:55] reverse live on content manager Jared
[49:57] Huckaby
[49:58] we'll see you next week everybody
[50:13] thanks for watching for the latest and
[50:15] greatest in star citizen the squadron 42
[50:16] you can subscribe to our channel or you
[50:19] can check out some of the other shows
[50:20] and you can also head to our website at
[50:25] www.uvu.edu/library

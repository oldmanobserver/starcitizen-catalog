# Star Citizen: Reverse the Verse LIVE - Gameplay Systems and AI

**Video:** https://www.youtube.com/watch?v=SNeFRSoMZuI
**Date:** 2018-02-16
**Duration:** 57:50

## Transcript

[00:11] greetings citizens and welcome to
[00:14] another episode of reverse the verse
[00:16] live where with our 6th episode we're
[00:18] now 50/50 between a broadcast time of
[00:21] 12:00 noon and 8:00 a.m. in the morning
[00:23] well will next week be will we now be a
[00:25] completely early morning show I guess
[00:28] we're gonna find out as we go along
[00:29] I'm your host Content Manager Jared
[00:31] Huckaby on the show this week we're
[00:33] sitting down with lead systems designer
[00:35] dant Ruffin from our foundry 42 studio
[00:37] and todd papy to talk about his work on
[00:39] a variety of gameplay systems like the
[00:41] stamina or actor status system medical
[00:44] gameplay mining hiring AI and more it
[00:48] should be a fun one but before we get
[00:50] started let's go ahead and do our Week
[00:51] in Review
[00:52] now last week tech designers John crew
[00:54] and Annie Nicholson stopped by to talk
[00:56] about all things ship combat experience
[00:58] including touching on such topics as a
[01:00] weapon balance the state of ifcs and ESP
[01:04] mouse control of turrets different types
[01:06] of shields ship health and the
[01:08] continuing evolution from a time-to-kill
[01:10] combat model to a time to disable one
[01:12] that will bring with it a far deeper and
[01:14] richer sense of combat gameplay to start
[01:16] citizen in the future if you haven't
[01:18] checked it out it's up on YouTube now I
[01:20] can't recommend it enough Monday of this
[01:22] week saw the release of another episode
[01:24] of calling all Deb's where we got an
[01:26] update on the current status of our new
[01:28] Ord tools for the website the revelation
[01:30] of our new align to surface technology
[01:32] that's taking the place of so called mag
[01:34] boots a single-player game mode forced
[01:37] armoring docking and death of a spaceman
[01:40] like our TV before it if you haven't
[01:41] checked it out it's available now on the
[01:43] YouTube channel and don't forget that
[01:45] you could submit your questions for
[01:46] consideration each and every week up on
[01:49] the thread up on spectrum now Tuesday is
[01:52] Laura day for star citizen and this week
[01:54] saw the release of the meltdown by will
[01:56] Weiss bomb it's a subscriber exclusive
[01:58] and I'm gonna be honest with all the
[02:00] extra work for shipshape this week I
[02:02] haven't gotten around to reading it but
[02:04] it's by Lil Weiss bomb and it's called
[02:06] the meltdown I'm assuming it's about a
[02:08] grilled food of some sort probably a
[02:11] sandwich
[02:12] check it out and get back to me
[02:14] Wednesday was our bi-weekly bug smashers
[02:16] with an added special bonus this week a
[02:19] pretty solid look at the current state
[02:21] of the origin 600 it's always fun when
[02:24] we can slip the slip a neat little sneak
[02:26] peek into places you might not always
[02:27] expect to find them and I think the
[02:29] ships coming along pretty swell yeah I
[02:32] said swell bringing it back people
[02:34] finally Thursday saw the release of a TV
[02:37] with the February edition of shipshape
[02:39] in addition to the cool segments on the
[02:41] upcoming anvil Terrapin we got to update
[02:43] and look at the current development of
[02:45] ships like the constellation Phoenix the
[02:47] aegis reclaimer the rail works for the
[02:49] consolidated Outlands mustering an
[02:50] Avenger warlock variant and most
[02:52] excitedly the reveal of our first
[02:54] concept ship for 2018 the aegis Vulcan
[02:57] now the Aegis Balkan is our first multi
[03:00] profession starter ship meaning that
[03:02] it's your point of entry for refueling
[03:04] careers repairing careers and rearming
[03:06] your fellowships and it's an exciting
[03:08] addition to the star citizen pantheon of
[03:10] spaceships now there are a lot of cool
[03:12] things about this job but honestly
[03:14] sitting in a room with thin and toast
[03:16] and the Tyler is like nine months ago
[03:18] and getting spit out crazy ideas like
[03:20] you should have a triple-a Highway
[03:21] Patrol truck that fixes flat tires and
[03:23] puts gas in tanks and then seeing it
[03:25] come to life almost a year later is
[03:26] really one of those ones that's way up
[03:29] there I really hope you guys like this
[03:30] ship as much as we do the full-pledged
[03:32] period for the aegis Vulcan will begin
[03:34] for everybody on Thursday February 22nd
[03:37] and run for about five weeks through the
[03:39] end of March but concierge VIP members
[03:42] can pick one up right now via our
[03:43] special concierge VIP early bird program
[03:46] with a special added bonus the uawc
[03:48] service uniform now this is an exclusive
[03:51] perk only available to concierge VIP
[03:53] members and while the two special skins
[03:55] will be available to all backers
[03:57] throughout the duration of the sale
[03:59] basically we got perks for everyone
[04:01] people the full reveal begins on
[04:03] February 22nd with that we're gonna take
[04:06] a short break when we return we'll be
[04:08] sitting down with designer tot a damn
[04:10] truffle and todd papy to talk gameplay
[04:12] systems stay tuned
[04:16] all right now joining us on the show
[04:19] this week lead systems designer Dan
[04:21] Ruffin and start of citizen live game
[04:24] director todd papy how you doing guys
[04:26] I'll do it good hello thank you for
[04:29] joining us this week oh thanks for
[04:31] having us now I Tod you but you've
[04:36] boundary burst and first of all you were
[04:38] just on like like two weeks ago we know
[04:40] who you are and what you do and what not
[04:41] but damn trepan this is your first time
[04:43] on reverse the verse once you take a
[04:44] couple of minutes
[04:45] tell everybody watching who you are and
[04:48] what you do for star citizen
[04:49] so I'm the lead system designer in
[04:52] Frankfort my main job is to ensure that
[04:56] basically all the direction that comes
[04:58] down from Todd Chris gets distilled and
[05:03] given to the to the system designers and
[05:06] then they provide a design that actually
[05:08] makes sense is fun to play and still
[05:11] respects the direction that comes from
[05:12] above and then making sure that design
[05:15] gets approved that gets resources and
[05:17] kind of see the system from early
[05:21] paperwork all the way to final
[05:24] implementation making it to life and
[05:26] making sure it's up to the quality
[05:28] standards right and what are some of the
[05:30] gameplay systems that you've worked on
[05:32] for starters in your time here I know
[05:34] you were involved with the stamina and
[05:36] the actor status in the system but what
[05:38] else have you worked on for starsin so
[05:39] people know what your area of expertise
[05:41] is on stuff so there's a lot of things
[05:44] that I talk my like heels into from
[05:49] everything from so it's the actors
[05:52] theater system but all the supporting
[05:54] systems for that like the the room
[05:56] system and how oxygen travels from one
[05:58] room to another it's the initial designs
[06:02] for the FPS suit which hopefully we get
[06:05] to see fairly soon well I'll get that in
[06:08] soon yeah so a lot of a I work a lot of
[06:15] non-combat ones but also overseeing the
[06:17] combat part of things usable of a lot of
[06:22] the usable stuff or us now where we're
[06:26] digging big big time into mining
[06:29] so that that's a lot of fun it's it's
[06:32] cool to get to think to do mining it's
[06:37] it's a it's one of these core systems
[06:38] that will make the game feel much more
[06:40] alive than than it is right now I know
[06:42] you couldn't even say my name without
[06:44] coming alive yourself as somebody who
[06:48] uses their hands a lot I appreciate that
[06:50] in fact I said we didn't need an
[06:52] introduction view but every show is
[06:53] somebody's first show give us a quick
[06:56] rundown above what you do for star
[06:58] citizen start assistant star citizen
[07:00] live game director so basically just
[07:03] making sure what goes into the game for
[07:05] these releases is up to the quality
[07:08] level that we feel it needs to be and
[07:10] sitting sitting down working with Dan
[07:12] and other designers as well as the other
[07:14] team members you know that are going
[07:16] through different Sprint's to release
[07:17] things and making sure that it's hitting
[07:20] Chris Aaron Tony's direction my
[07:22] direction
[07:22] and away we go you know so of course if
[07:28] this is your first reverse reverse we do
[07:29] take questions live from two different
[07:31] sources you can submit your questions
[07:33] either in twitch chat where we are
[07:35] broadcasting live now apologies if
[07:37] you're watching this the replay on
[07:38] YouTube later you can practice your
[07:40] question with the word question in
[07:42] capital letters surrounded by brackets
[07:44] that's gonna help that's gonna help our
[07:45] our community managers you know pull the
[07:47] questions out from all the other
[07:48] conversation you can also submit
[07:49] questions up on spectrum which is our
[07:52] communication platform available on our
[07:54] own website the Robert space industries
[07:55] comm in addition to the live chat we
[07:58] also put up a thread earlier in the week
[07:59] collecting questions for people who
[08:02] couldn't be here live and allowing
[08:04] people to up vote with the questions
[08:05] that they wanted to see answered most so
[08:08] we're gonna start as we usually do with
[08:10] a question that's what's been voted on
[08:12] you know from the spectrum thread this
[08:14] says as please explain how the gameplay
[08:19] for mining repair and salvage works in
[08:22] terms of minigames alright so yeah so
[08:24] one question for three gameplay systems
[08:25] maybe we maybe we turn this down to one
[08:28] maybe we just talk about mining since we
[08:30] know you're you're animated
[08:31] what can you tell us about mining it at
[08:35] this point Dan I mean I know we're still
[08:36] we're still early days
[08:38] so uh this is valid for all of those all
[08:41] three of those systems though the main
[08:44] direction of the game we don't want the
[08:46] player to just go to a rack or a mining
[08:48] site and just push a button and think it
[08:51] things get done for him we want him to
[08:53] have a challenge the main core thing for
[08:56] us it needs to be challenging it needs
[08:57] to be risky especially for mining which
[09:00] is a very lucrative opportunity you can
[09:02] make a lot of money this means there
[09:04] needs to be risk involved and if you're
[09:06] one you're not doing your job right or
[09:09] to some other people figure out where
[09:12] you're trying to mine and want to take
[09:14] whatever your mind as their own that
[09:17] needs to become instantly it it drives
[09:21] that gameplay we want to achieve because
[09:23] that's the risk reward factor drives it
[09:26] regarding minigames this is something
[09:30] which we're trying hard to not not to
[09:34] what other games do which is they just
[09:36] plug and play an existing puzzle they
[09:39] just go oh I know this I don't know
[09:41] let's call let's take the example of
[09:42] tic-tac-toe they take tic-tac-toe and
[09:44] they plug in your game and come like
[09:46] yeah that's the game play no this needs
[09:47] to make sense needs to make sense as in
[09:50] when you're mining you're actually doing
[09:52] some kind of thing that it's not just
[09:56] artificially inserted in there so for
[09:58] mining for example we have this mining
[10:00] laser that injects energy into the
[10:02] rocket it basically tries to agitate the
[10:06] particles in there and extract only what
[10:08] you need out out of it there are risks
[10:10] involved the more you more power you put
[10:13] into it the higher the risk that it
[10:15] blows up and then the higher the risk
[10:17] that it actually blows up catastrophic
[10:19] ly to the point where it can damage you
[10:20] and your ship so this is kind of how
[10:24] this work at the same point in a and let
[10:27] me specify this is only for or only
[10:30] right now so and then we'll have
[10:32] different ones for liquid and gas in the
[10:34] future liquid gas asteroids planetary
[10:37] mining there's a lot of extraction type
[10:41] of gameplay that we want at there's this
[10:45] ranges from big chunks of wort to
[10:47] liquids to
[10:49] gathering organic samples from various
[10:53] botanical or animal sources so there
[10:57] there will be a lot of things where we
[11:00] can gather resources and yeah but I
[11:02] think you should expand upon like the
[11:04] tr0 you know what we consider tier 0
[11:06] yeah our tier 0 that's where according
[11:09] to release fairly soon I don't
[11:13] moderately soon yes as we're basically
[11:19] gonna have we're going to be working
[11:21] with a prospector and we're gonna have
[11:23] this laser tractor beam combination
[11:26] which energizes the energizes the the
[11:31] rock
[11:31] we have various thresholds in there if
[11:34] you're not energizing it enough then
[11:36] you're not going to be able to pick up
[11:37] any content from the rock then if your
[11:39] energizing
[11:40] further you start to the more power you
[11:43] put into it the more resources you start
[11:46] getting into it then there's an optimal
[11:48] phase where this is where you want to
[11:49] keep your laser powered in their optimal
[11:52] phase and the the more you keep it here
[11:54] the more efficient you'll be the less
[11:56] slag you pick out of of the rock like
[12:00] debris because you don't want to bring
[12:01] there you want your your containers to
[12:03] fill up with gold and all the good stuff
[12:05] and then if you go over that and you
[12:08] will go over that because there is
[12:09] instability based on the elements inside
[12:11] the inside the the rock they all have
[12:14] various spikes of energy that you're
[12:16] trying to put a hundred megawatts into
[12:18] the rock but suddenly it happens that
[12:20] the rock gives you a UPS by 200
[12:24] megawatts and that might spike over so
[12:27] it it's kind of constantly fighting you
[12:29] and you're trying to go to keep it in
[12:31] check so it doesn't go overboard and
[12:33] then if it goes over optimal and into
[12:35] super dangerous zone and you don't
[12:37] manage to to recover from there then yes
[12:40] it will be catastrophic ulti one of the
[12:43] questions that came in from the live
[12:45] chat while you were talking is other
[12:47] risks in mining that like hitting
[12:49] pressurized gas pockets is it more than
[12:52] just adjusting the the energy levels
[12:55] could there's we need soldiers elements
[12:57] in there this this is something that
[12:58] we're looking for as for the next year
[13:02] we would like to have multiple things
[13:04] inside that rocks some of them
[13:05] beneficial some of them not quite so
[13:08] beneficial with disastrous consequences
[13:10] so it might be that certain elements in
[13:13] the rock actually make it easier to mine
[13:15] and then certain pockets of elements if
[13:17] you manage to accidentally trigger them
[13:19] then you will have fun time no I don't
[13:23] know why I'm thinking about that movie
[13:25] Armageddon right now you got to put the
[13:32] nuke in the right place it's never a
[13:34] good time when you're thinking about I'm
[13:35] be good all right another question from
[13:39] the from the threat here you cover the
[13:42] second part of that which is you know is
[13:43] there more than just simply pressing f
[13:45] to engage certainly sounds like it
[13:47] certainly sounds like it what just
[13:51] moving on from front from mining is is
[13:55] there anything that we can talk about
[13:56] repair and salvage right now that you
[13:59] just to cover the other two points that
[14:00] were in the question yeah so basically
[14:04] the the first part of salvage and repair
[14:07] that we're going for would be I think
[14:10] when we released the crucible we did we
[14:12] did a repair right up which which
[14:14] basically detailed kind of like the the
[14:17] scraping of an a-hole and then cleaning
[14:20] off and then repainting it and and
[14:22] basically dealing with our UV to damage
[14:25] shaders so salvage would be kind of the
[14:29] inverse of that so with repair you wants
[14:32] you know the ship cupboards and with
[14:34] Salvage you you want to scrape off
[14:35] everything before you start going into
[14:38] the the mulching phase or breaking the
[14:40] ship apart and so with salvage I think
[14:45] that there's there's basically five
[14:47] different phases to it there would be
[14:48] the whole phase or the stripping of it
[14:51] then there's the mulching of the the
[14:53] ship there's item extraction there's
[14:56] data extraction and then there's
[14:58] possible siphoning so what whether that
[15:02] be air or gas you know so like rental
[15:07] fuels or something like that but right
[15:09] now like with mining we're gonna focus
[15:11] on or from salvaging we will be focusing
[15:15] on
[15:16] the whole was stripping first and then
[15:18] from there you know start working
[15:20] through those those other facets of game
[15:22] play yeah I think this is something
[15:24] worth mentioning most of these things
[15:26] now are reaching their tr0 and they're
[15:28] go live and once they go live there'll
[15:31] be so much to build upon that because
[15:33] we're trying to keep all our systems
[15:34] open-ended so there's more to come
[15:37] always maybe we don't want to do a
[15:40] minimal thing and then that's it there's
[15:41] their stuff they're behind those just
[15:43] think it just takes time to get there
[15:45] thank you for bringing that up it's an
[15:46] important that's an important point that
[15:48] applies to almost every aspect of star
[15:50] citizen that every time we do a patch
[15:53] and there's a new feature that is the
[15:54] first iteration the tier zero of that
[15:56] it's very it's it's very really oh yeah
[15:59] that's it and that's how it's gonna be
[16:00] in that it's never gonna change it's
[16:02] never gonna hit a rate from that you
[16:03] know it's we are definitely building
[16:05] this game live out in front of everybody
[16:08] so so thank you for bringing that up a
[16:10] follow up on the mining thing it says
[16:12] from the live chat so speaking of
[16:14] different things to mind will we have
[16:16] just what we have to swap basic mining
[16:18] tools if we want to extract liquids
[16:21] versus or versus gas are there
[16:23] differently are we thinking different
[16:25] lasers different tools different
[16:26] attachments kind of things yes I
[16:29] definitely don't want to have a tool
[16:31] that does it all or there might be a
[16:33] tool that does it all but that very low
[16:35] efficiency so you will have a tool that
[16:38] I mean all of our components all of our
[16:40] items have sub components so you will be
[16:43] able to configure that laser to whatever
[16:45] you want to achieve but there might be
[16:47] that for example switching from or to
[16:49] liquid that you will need a completely
[16:51] different tool so you have to come
[16:53] equipped for the job at hand you have to
[16:55] know what the job is or search for a
[16:57] specific item to that you're equipped to
[17:00] to mine
[17:01] alright and another follow-up to that
[17:04] you said we're working on the prospector
[17:07] you know that'll be our first test been
[17:09] going farther than that I can only
[17:13] mining ships mine or will we be able to
[17:16] outfit other ships with mining lasers
[17:20] mining equipment and maybe not as
[17:21] efficiently as the prospector but
[17:24] did I think that's something that we
[17:26] need to have a conversation about just
[17:28] because a lot of times our ships
[17:30] besides kind of cargo or pretty pretty
[17:34] hard themed you know we're looking at it
[17:37] from a prospector standpoint an orion
[17:40] standpoint as well as a player
[17:41] standpoint so you know so if a player
[17:45] wants to go down and do a use a
[17:46] multi-tool old or use a money and laser
[17:48] and from an FPS standpoint then that's
[17:51] those are things that we'll look at
[17:52] before introducing these to other ships
[17:55] I just want a mining in 50 times that's
[17:58] so much to happen well I'm getting just
[18:01] because you said that I'll crush your
[18:02] dreams that's going back to the back to
[18:07] the spectrum thread next most voted
[18:10] question as a captain of a large ship
[18:12] like the constellation or reclaimer or
[18:14] star fare always with the options here
[18:16] how will I control NPC pilots and tell
[18:19] them where to fly where to land this is
[18:21] this is a little bit about what you're
[18:23] working on right now Dan isn't it the
[18:24] ability higher it's the ability to hire
[18:29] NPCs yes does not necessarily have much
[18:34] to do with how you control them the
[18:35] control is a separate interface but I
[18:38] can speak a bit about this is so on a we
[18:41] initially started looking into this when
[18:43] we realize the capabilities of the idris
[18:46] and kind of figured out that you have a
[18:47] full crew that you need to control and
[18:49] also you will be let's call it the main
[18:52] ship in a fleet rather than just a
[18:54] single ship dogfighting
[18:56] so the idris has this battle sphere
[18:59] which you guys have seen it's that we we
[19:04] turned into an interface we're joined
[19:08] together with MFDs but still it's think
[19:11] about it more in the sense of a strategy
[19:14] game so where you can give orders and
[19:17] queue orders for certain ships or
[19:19] internal people so you can actually you
[19:23] can tell yeah wing five attack this
[19:26] target you protect that ship so give me
[19:29] it's basic orders there's the AI
[19:31] behaviors that will do the heavy work
[19:33] being under that but the basic orders we
[19:35] need to be able
[19:37] to give whoever is the captain of that
[19:41] ship we need to give them the the chance
[19:43] of commanding stuff in a fleet or
[19:46] commanding stuff inside their their ship
[19:48] okay so in sorry just interrupt here and
[19:52] it should be one of those things like if
[19:54] you're saying target this person it
[19:56] should be that if you have players and
[19:58] that's right they're also seeing the
[19:59] same thing yes they will get a if they
[20:01] might follow it or might not because
[20:03] they're players they do what they want
[20:04] but they do get here this is your main
[20:07] target because the the commander the the
[20:10] captain said so and then you're you you
[20:12] know at least what the fleet wants you
[20:14] to attack I mean the same interface we
[20:17] can also use for drones for example if
[20:19] your ship that has a lot of drones we
[20:22] can use the same interface you can use
[20:24] it the difference between a drone and
[20:27] donate an npc AI is that let's say you
[20:29] hire an AI and then you give them an
[20:32] order based on various skills and traits
[20:35] that he has he might not take that order
[20:37] or he might take it and do something
[20:40] completely crazy so that would be an
[20:44] interesting thing to to play with once
[20:46] we add that part of the AI behavior so
[20:50] you will have to to have your duty
[20:53] you'll have to know which dude will
[20:55] react badly to a certain situation if
[20:57] you send a guy to kill himself to save
[20:59] the fleet you have to make sure that guy
[21:02] actually will follow the order drones
[21:05] will not that drones will just do
[21:06] whatever you tell them to they have no
[21:08] personality but AI will have
[21:10] it'll be an interesting day when we have
[21:12] to separate you know did that hey I not
[21:14] do what you were you told it to you
[21:16] because it was a bug or do they hey I
[21:17] not do what you told because you know
[21:20] because it's personality matrix was like
[21:22] now I'm not dying for this but this is
[21:27] where we have logs and we can actually
[21:28] go through them and go like yeah I also
[21:32] also there will be a lot of feedback we
[21:34] do not want the guy to be doing things
[21:36] that it's just doing things they're not
[21:38] telling you why if he's if he is
[21:40] canceling an order that you gave him he
[21:43] will tell you to go yeah
[21:47] so he will not just quietly cancel that
[21:50] order he will tell me why and you will
[21:53] kind of take immediate action to rectify
[21:55] the problem now I want to rewind you a
[21:59] little bit you said you said you're
[22:01] working on the hiring of a I'd like to
[22:04] go into that a little bit if you're if
[22:06] you're willing oh where are we with that
[22:08] within the current development on hiring
[22:10] and it's it's still it's still early in
[22:13] the works so right now what we're
[22:15] working a bit more on and it's connected
[22:17] to this it's all these AI skills and
[22:19] perks and how they affect the behavior
[22:21] so when you wanna hire an AI it's very
[22:25] important to know who you're hiring why
[22:28] you're hiring that person and what
[22:30] skills he has what traits he has you
[22:33] might actually get the surprise where
[22:35] you hire someone and not everything will
[22:38] be visible from the beginning we might
[22:40] find out that this guy is I know he's a
[22:44] Yui hater and but you don't get that
[22:47] information as a trait you might have to
[22:50] do a lot of missions you might have to
[22:52] play with him a bit and then you start
[22:53] discovering things so you will the
[22:57] skills will always be visible you will
[22:59] get skills visible those you would be
[23:01] able to train you'll be able to go okay
[23:03] this is where he starts this is how much
[23:05] it costs me to actually pay the dude and
[23:08] this is where I can take him he will
[23:10] have certain attributes that limit where
[23:12] he can go and what his potential is but
[23:16] yes he will you will have to train him
[23:19] and make sure he reaches a nice level
[23:21] and once he reaches that level you want
[23:23] to keep him alive because you don't want
[23:25] them to die okay because you've invested
[23:27] in them okay the next question from our
[23:30] live chat is actually a follow-up to the
[23:33] conversation we had on calling all devs
[23:35] but I guess that figure since you're
[23:37] here we talked on a couple weeks ago
[23:39] about medical gameplay and about how the
[23:43] more you die the more your body will
[23:44] break down it's like so close this
[23:47] person wants to know about how far do we
[23:51] plan to take the levels of gore it's
[23:55] like our bodies break down or
[23:58] are we gonna become zombies you know I
[24:00] guess dragon arms for medical gameplay
[24:03] to be fully immersive a certain level of
[24:06] gore is necessary this person posits
[24:10] okay now I understand where he's coming
[24:14] from and it's just do we I think first
[24:20] of all this is a bit early to make a
[24:22] call understand I think Chris will be
[24:25] the ultimate person who makes a Columbus
[24:27] would it be interesting to actually take
[24:31] a scalpel and start cutting human beings
[24:34] and seeing what's inside I don't know
[24:37] we'll have to see it's it's an
[24:41] interesting question but yeah I think
[24:43] automatic - Chris will have - have you
[24:45] seen this yeah now still it's still very
[24:47] early days if you do want to see yeah if
[24:49] you want to see what information is
[24:51] available on another gameplay you should
[24:53] check out that calling all devs I think
[24:55] it was two weeks ago or not the title
[24:57] says medical games play I'm pretty sure
[24:59] so not much still early days but a good
[25:01] conversation with dandruff in there so
[25:03] so check that out there here's it here's
[25:06] a question just an overall design
[25:08] question that's coming to the chat can
[25:10] we train our characters to sustain more
[25:13] g-force this actually comes up quite a
[25:16] lot people are curious whether whether
[25:18] those there might be armors that will
[25:20] allow us to sustain more g-forces than
[25:23] normal things to get out ships to help
[25:26] us sustain more deeply there's anything
[25:30] we've talked about it from a flight suit
[25:33] standpoint you know so that's let's say
[25:35] an RSI flight suit might have better
[25:38] g-force or better you know I guess body
[25:41] compression versus other under suits
[25:44] that are looser or those types of things
[25:46] so it is definitely something that we've
[25:49] talked about just just because again
[25:51] when we're thinking of these armors or
[25:54] these under suits that we wanted to very
[25:57] much tailor them and say okay you want
[26:00] to go down this line you know here's a
[26:02] good thing for that so let's say
[26:04] exploration you know it might not be
[26:08] good for g-forces but it'll be better
[26:10] for thermal
[26:11] or you know sort of so extreme hots
[26:13] extreme colds those types of things so
[26:17] we want to more kind of hard theme these
[26:20] verses like the Yui military ones that
[26:22] we have right now in star marine like
[26:24] those would be better against in combat
[26:27] you know versus like the normal flight
[26:31] suit or or or even the Explorer suit
[26:36] going back to the spectrum thread in a
[26:38] follow up to the AI to the 8th a
[26:40] conversation we've been having what do
[26:42] you think about the possibility of
[26:44] hiring AI pilots to fly our ships well
[26:47] you know while we weren't like one of
[26:49] the things that comes up quite often is
[26:50] the notion that we can fly you know for
[26:53] people who own like 20 ships I'll fly my
[26:56] ship and can I hire an AI to fly this
[26:58] other ship that I own and can hire an AI
[27:00] to play this other that I own
[27:04] obviously still very haven't really
[27:06] talked about it yeah we haven't really
[27:08] talked about that just because I mean I
[27:12] would prefer that the players playing
[27:14] the game not my Pedro for sure
[27:18] definitely
[27:19] yeah so yeah I mean it it's it's fair
[27:24] enough to think about like if you're
[27:25] online and you're doing that and you
[27:27] know let's say you have an interest and
[27:29] you've got other ships associated with
[27:31] that or sorry like Gladius azure or
[27:34] other ships that you want flying around
[27:37] in your fleet and you have AI pilots
[27:41] associated with that as long as you're
[27:43] there and flying it then I think that's
[27:45] something that we would you know think
[27:48] about but it's it would be something
[27:50] that would require more discussion not
[27:53] only from a technical standpoint but
[27:54] also from a design standpoint and also
[27:56] be besides that you might you will be
[27:59] able actually to to hire someone that
[28:01] already has a ship rather than so you
[28:05] will hire an NPC for a certain duration
[28:07] let's say I need someone for for today
[28:10] because I'm doing some heavy missions
[28:11] with he comes with this ship he has
[28:14] these skills and you know exactly what
[28:16] support you're you're getting
[28:18] you giving their ships away you're
[28:21] giving your ships away for for nai to
[28:23] fight we're worried about this thing
[28:26] where people have a lot of ships and
[28:27] they couldn't just one man controls an
[28:30] entire fleet this is something that
[28:32] would break the balance of the game we
[28:34] need to not overpower people that much
[28:38] but then yes it's exactly what Todd said
[28:41] you have a nitrous you have Gladys's as
[28:43] part of that addresses flight group
[28:46] they're there on your ship and you might
[28:49] have NPCs that you tell them yeah I get
[28:51] to your ships launch because we're
[28:53] attacking someone in three seconds and
[28:54] they will do that now I absolutely
[28:56] understand all that I have actually
[28:58] heard similar sentiments here in this
[29:00] office from designers and and from
[29:02] Chris's and from Chris himself it's it's
[29:04] not that we're ready to rule it out at
[29:06] this point but ultimately if your choice
[29:08] is between having players in the game or
[29:10] having NPC's in the game we're always
[29:12] going to choose you know having players
[29:15] well and even with Chris he said
[29:19] multiple times like he he wants roughly
[29:21] a nine to one ratio so nine nine AI to
[29:24] one player so you know right then and
[29:28] there that kind of says you know we've
[29:31] got a lot of AI in the game it's it's
[29:33] not just going to be only players next
[29:38] question of the live chat is for todd
[29:39] papy
[29:40] it says this person wants to know what
[29:42] the badge is you're wearing are it's
[29:46] yeah just sweatshirt I saw it I think
[29:49] this is third caliber and third Calvary
[29:52] and little did I know but they're
[29:55] actually stationed in in the Wiesbaden
[29:56] where I used to live nice
[29:59] I thought it was like a soccer shirt you
[30:01] know I European football no III got it
[30:05] in in the state's when I was there so
[30:07] but I liked it and it's cozy hi so he
[30:13] next question is if I'm alive tries to
[30:15] follow up to the mine question is yes do
[30:18] you anticipate a difference between
[30:20] space mining versus planetside mining as
[30:23] a considering different needs methods or
[30:26] even types of vehicles
[30:28] if we given any consideration to
[30:30] differentiating those particular two
[30:33] types of mining well I guess it would
[30:37] depend on if we're talking about or and
[30:39] stuff like that I mean right now we're
[30:42] going to start with planetside and then
[30:43] from there take it to space and but
[30:46] obviously moving around a rock you know
[30:49] in in space then you're moving around in
[30:52] three dimensions versus on planet
[30:56] surface you're you're dealing with
[30:58] either your landing or your or you're
[31:01] moving you're hovering and moving around
[31:02] it and the dam can it will be they'll
[31:06] definitely be different we want we on
[31:07] the experience to be different how
[31:11] different we do not want to make it
[31:14] completely a separate type of mining the
[31:17] ideas will stay the same you'll just
[31:19] have various things that you can do a
[31:21] lot easier when you're in space or on
[31:24] the ground and some things that are
[31:25] harder depending on on where you are and
[31:28] then there's the different types of
[31:29] mining off going under the surface and
[31:35] stuff like this versus on the surface
[31:36] it's the each of them will have their
[31:39] unique flavor to it and I I think I
[31:43] promise this tomorrow I
[31:46] he doesn't want boxes so next question
[31:54] from the from the spectrum thread where
[31:56] folks were submitting and voting on what
[32:00] is the expiration game mechanic going to
[32:02] look like no obviously exploration you
[32:05] know we're still building out one system
[32:06] what star system and then as the scope
[32:09] of 2018 we're still building out though
[32:11] the one star system so we're probably
[32:13] very very early days I guess with
[32:18] exploring we've talked about like
[32:20] short-range scanning and you know we've
[32:25] had very high-level discussions about
[32:27] long-range scanning and kind of what
[32:30] that means and having I think I spoke a
[32:33] little bit about it on the reverse the
[32:36] verse that I was on two weeks ago we're
[32:39] having different views
[32:42] whether it's thermal imaging or or gamo
[32:45] or something along the e/m spectrum that
[32:48] you're you I think Tony you would equate
[32:52] it to you're basically opening you know
[32:56] like the old-school pictures where you
[32:58] would have to stand there for five
[32:59] minutes as the light goes in it's kind
[33:04] of a similar idea where you're picking
[33:06] out anomalies and then from there you
[33:08] would go in and and expand on that but
[33:12] there's a lot of systems that we need to
[33:14] be thinking about whether that just be
[33:17] background noise you know in the overall
[33:19] system and then even thinking about how
[33:21] we're gonna propagate or populate you
[33:24] know the system and so when you're
[33:26] looking in that general direction that
[33:29] you're loading things in and that might
[33:31] be interesting you know for the players
[33:33] to find also to I don't on top of that a
[33:36] bit you mentioned that we're still
[33:38] developing developing one solar system
[33:40] that that should not be a problem
[33:43] because even in this one solar system we
[33:45] want places that have not been
[33:47] discovered we want players to find their
[33:50] own things and find things that others
[33:52] have not found and maybe be able to to
[33:56] sell that information and the location
[33:58] of which resources or I know a drug lab
[34:02] that will offer you various goodies and
[34:06] all these things maybe things discover
[34:10] whatever weapons dealer in the middle of
[34:13] nowhere that say that selling something
[34:15] that we haven't seen before and that
[34:19] information alone will be power so we
[34:21] want people who explore to be the first
[34:23] guy that guys that kind of discover
[34:26] these things and what they do with it
[34:27] whether they share it with their
[34:29] organization or they sell it to other
[34:31] people it's up to them and the ideally
[34:35] once it gets discovered by enough people
[34:37] then it kind of becomes public knowledge
[34:38] and everyone can access it but at by
[34:41] that point the money was made from that
[34:44] lucrative business and and also I I mean
[34:48] from my standpoint just building overall
[34:52] system and thinking about how
[34:56] huge this thing is right now III mean a
[34:59] from from tip to tip right now I think
[35:02] we're talking about roughly 41 minutes
[35:05] in quantum you know from tip to tip and
[35:08] so and then you know if that took up
[35:12] your whole 1080 screen then you're
[35:18] talking about the tip of the mouse that
[35:20] might be 9 hours of just straight flight
[35:24] kind of thing and that so when I was
[35:28] working with Pete on just kind of
[35:30] overall solar system layout and and you
[35:34] know when we're talking about resources
[35:35] or what where aggression or you know
[35:38] possible aggressive pass would be how do
[35:41] we make sure that it's it's interesting
[35:46] when you're flying to these different
[35:48] things not only just probability volumes
[35:51] but also just you know I think people
[35:54] are kind of seeing it right now with
[35:56] interdiction like it's it happens a lot
[35:58] right now from mice from my standpoint
[36:02] but it's one of those things where I
[36:05] would like to have kind of a thresholds
[36:08] where okay you haven't done this in a
[36:11] while
[36:12] some you know we'll bring this up in
[36:14] front of you or or bring this up around
[36:16] to you so then you know you get a blip
[36:19] on your radar or something like that
[36:21] instead of actually pulling you
[36:22] completely out of quantum you can go and
[36:24] investigate it or or or to continue on
[36:27] your way
[36:28] you mentioned the quantum drive 41
[36:31] minutes from from and somebody in the
[36:34] live chat was asking will we see a
[36:36] return of blind quantum jumps jumps
[36:39] right now you used to just pick a
[36:42] direction in quantum it's something it's
[36:45] something we have talked about the the
[36:48] way that CR has always thought about it
[36:52] though was that you need to have a final
[36:54] destination before you do this kind of
[36:56] blind quantum so in the future I think
[37:00] it really depends on what it is for if
[37:02] it's a blind quantum jump to basically
[37:04] and get away from somebody like in your
[37:07] being interdicted and
[37:09] you just want to you just want to get
[37:11] away or if you're just trying to go out
[37:14] and explore but the idea would be that
[37:16] if you're going out and exploring you're
[37:18] just not going to go and and just blink
[37:21] you know to someplace that you haven't
[37:23] seen you try to investigate it and try
[37:26] to make sure that the path is clear
[37:27] before you actually go now also also
[37:31] with a blind quantum jump we can play
[37:33] with it in different ways where we go we
[37:36] can reduce the speed that you would be
[37:38] traveling at we can make it very risky
[37:41] as in you might be hitting a huge rock
[37:43] if you're blind jump because the
[37:45] computer does not have the time to make
[37:46] the calculations for your jump so you
[37:49] might be hitting anything on the way so
[37:51] we will look into this exactly because
[37:55] it's something we need to figure out for
[37:57] the entire exploring thing where you
[37:59] will see a question from the inspection
[38:05] thread this is will I well AI crew
[38:08] require food toilets or sleep and will
[38:10] they abandon us if we can't meet their
[38:12] needs yes yes the extent of it we'll
[38:21] have to see but I know Chris likes this
[38:24] idea of having the I having needs and
[38:29] they will have to go to the toilet and
[38:32] they will have to have showers and
[38:34] they'll have to have decent food
[38:36] ownership and their their happiness is
[38:40] important you're the captain if you're
[38:42] not there just to fly a ship that's the
[38:44] pilots job your job is to keep everyone
[38:47] on the ship happy and in tip-top
[38:48] condition so whether you hire someone
[38:53] that's a cook which will probably
[38:54] provide you better food for everyone
[38:57] else or just bring them frozen food that
[38:59] they can dump in a microwave so that
[39:02] will matter if they're not happy they
[39:04] will do their job in the worst manner
[39:06] they might again not take an order just
[39:10] because they don't like you anymore
[39:11] they even from the player standpoint
[39:14] like Sierra wants you know in in
[39:17] layman's terms who just be buff Cindy
[39:19] puffs you know so so if you haven't
[39:21] eaten
[39:22] and maybe your reflexes are slower or
[39:25] your morale is lower or you know you
[39:29] bleed out quicker or those types of
[39:31] things so it's it's something that that
[39:34] you know when we talk about these we
[39:38] would actually you know part of it is
[39:40] just prototyping and playing it and
[39:41] seeing it does it actually read in the
[39:43] game and so a lot of this even before it
[39:47] gets to the players we're playing it and
[39:50] thinking about does this this is read
[39:52] you know does this come across as you
[39:55] know I have low morale and does this
[39:59] come across as I haven't eaten or I'm
[40:01] bleeding out faster because of this
[40:03] reason and also interactions with other
[40:05] NPCs will be a problem if you haven't
[40:07] taken a shower in quite a while
[40:09] so if you stink they'll go like just go
[40:13] away I don't want to even see you so
[40:15] then we will have conditions in the
[40:18] behavior let's say if your cleanliness
[40:20] hygiene level is under certain threshold
[40:23] then you will not be able to talk to an
[40:26] NPC I'm not we're not saying every five
[40:35] minutes but there will be conditions
[40:40] that you go through that will increase
[40:42] your it will decrease your hygiene level
[40:43] and after you go through various swamps
[40:47] and I don't know sweaty planets and
[40:49] whatever you go when you enter let's say
[40:53] a nice clean station you might find out
[40:55] that the vendor actually up the prices
[40:57] with by ten percent for you because
[40:59] you're not exactly belonging there and
[41:06] we gotta get well we got to get it work
[41:09] against it see if it comes across yeah I
[41:12] don't know things like we think opinion
[41:14] you're seeing dust all of all the time
[41:16] in front of you or something like that
[41:17] but not hard to go flies flying around
[41:20] yeah as long as you're seeing something
[41:21] from a player standpoint and it reads
[41:23] then we'll put it in I'm so glad you
[41:26] mentioned Pigpen that's exactly what
[41:27] I've been picturing in my head that's
[41:29] why I'm laughing
[41:30] I'm picturing running around like Pigpen
[41:32] in that in the peanuts yeah I back to
[41:35] mining we'll heavy mining eventually
[41:38] deplete a node completely uh what do we
[41:43] do to stop something from just then
[41:45] posting up somewhere and just staying on
[41:47] that forever and ever and ever so yes it
[41:50] will deplete it completely yes we want
[41:54] that we want the notes to get depleted
[41:56] or even destroyed you fluid not lining
[41:58] them accordingly they will become harder
[42:01] and harder to mine the lower the
[42:03] quantity of material inside is and they
[42:07] will then get the population of my noble
[42:11] objects will get replenished over time
[42:14] and well then we'll have to figure out
[42:16] how that happens as well yes they'll be
[42:19] one of the one of the things that we try
[42:22] to work out and like tier 0 tier one is
[42:24] is how do these things get replenished
[42:28] another question about about the
[42:31] griefing with related to mining what if
[42:34] I show up and want to mine something and
[42:36] somebody else is already there does the
[42:39] law protect them if they're there first
[42:41] can I get any get rid of them and move
[42:43] in this well yeah I mean this goes back
[42:48] to like some of the stuff that we talked
[42:49] about regarding like land service and
[42:51] all of that at least in the short term
[42:54] no there it won't matter but in in the
[42:58] future like if somebody actually owns
[43:00] that property then yeah it would matter
[43:04] yeah I mean initially that will not be
[43:08] the case as for now we will be finding
[43:10] various minor bull rocks on the surfaces
[43:13] of planets and it'll be not necessarily
[43:16] a first-come first-serve but whoever
[43:19] comes there can extract at the same time
[43:21] it's going to be interesting with
[43:22] multiple players trying to pump a lot of
[43:25] power into the same Rock and making sure
[43:27] they don't go overboard so that that
[43:29] creates automatically interesting
[43:32] gameplay where you might have certain
[43:34] deposits that require more people to
[43:36] pump power into them in order to extract
[43:39] anything cause you won one ship might
[43:41] not reach the required power level
[43:43] then you need multiple people but if you
[43:45] you might be that just like two people
[43:48] come along they don't know each other
[43:49] and they found the same Rock and they
[43:51] might just peacefully each extract their
[43:54] share out of it and then go under on
[43:56] their way and that's the great thing
[43:57] about our model is you know we'll put
[44:00] tier zero out there and we'll try some
[44:02] things and then we'll get feedback and
[44:04] then we'll try other things and we'll
[44:05] get feedback and we'll try other things
[44:07] so so even that's even whatever the
[44:09] first iteration of this is won't
[44:11] necessarily be you know where we end up
[44:14] this process that we have where we're
[44:16] running a live environment in the middle
[44:18] of our game development means we can try
[44:19] things and you know and see and see how
[44:22] they work we don't have to figure
[44:23] everything on ahead of time and that's
[44:25] cool all right we're almost done here
[44:29] guys thanks for hanging in there Dan
[44:31] here's a question I put a live chat when
[44:37] can we expect to be able to open panels
[44:39] where avionics life-support and shields
[44:41] are placed so we can replay and replace
[44:44] them so yeah we showed on a TV today our
[44:47] yesterday you know in the in the Carib
[44:50] and you know all the different panels
[44:51] with all the different components and
[44:52] whatnot and a lot of the comments were
[44:54] like I really want to be able to pull
[44:55] components out and and put them in and
[44:57] replace them and stuff like that so from
[44:59] a ship standpoint we were we have them
[45:04] there and were we're we have them placed
[45:08] now part of it with the smaller ships is
[45:10] basically there's laud and draw issues
[45:15] so that's one of the things that were
[45:17] working through is basically when you
[45:19] open a thing and then it pops out and
[45:22] and then you can actually go and replace
[45:24] that part or just switch it out or even
[45:27] have like fuses or sub items within
[45:30] those things that you can go and switch
[45:32] out it's something that John crew
[45:35] prototyped a while ago and showed it and
[45:38] working on the Gladius as well as
[45:40] working on a Connie I want it as soon as
[45:44] possible
[45:45] honestly just because then there's the
[45:49] inherent gameplay of switching those
[45:51] things out having a break you know
[45:52] having to feel like the Millennium
[45:54] Falcon that you're you're you're flying
[45:56] around and something breaks
[45:57] somebody's got to go back and fix that
[45:58] you know while you're trying to hold off
[46:00] people like those that's the type of
[46:04] feeling that we want to go for it's just
[46:07] based off of other technical issues that
[46:11] we're working through or we've got other
[46:13] high priorities like working on scanning
[46:15] you know and working through a lot of
[46:17] bugs that our vehicle feature team is is
[46:19] focused on engine what are our thoughts
[46:23] about an autopilot function this this
[46:25] comes up every once in a while over the
[46:26] years you know they people want to know
[46:28] if they can if they can you know you
[46:30] mentioned it would take 41 minutes to
[46:32] cross the just the standard system I
[46:34] mean what do we think about the idea of
[46:37] just setting a destination you knowing
[46:39] that's going to take 30 minutes and
[46:40] pending autopilot and then going and
[46:42] making a sandwich well I assume if
[46:47] you're just quanta mean then fair enough
[46:50] you know you can get up and go play
[46:53] chess in the background kind of thing
[46:55] but if something happens then you're
[46:58] scrambling as far as just pure autopilot
[47:02] it's at least it's not something I've
[47:05] heard Chris ever talk about besides you
[47:08] know having an AI actually do it but I
[47:15] mean I I don't want to poopoo it it's it
[47:18] will just be you know until I actually
[47:21] hear from my boss's mouth and I'm not
[47:23] planning for it even even if we do this
[47:26] at at some point the capabilities of the
[47:29] autopilot will have to be greatly
[47:31] reduced to what a player will ever be
[47:34] able to do so player will be a lot more
[47:36] efficient faster to get there if we ever
[47:38] do this or have to even if it's an NPC
[47:41] doing it unless it's a very well-trained
[47:43] NPC that's flying your ship it'll be
[47:46] slower than what the player can do
[47:48] unless we can get the autopilot from
[47:50] airplane dude if you give me the option
[47:55] if you give me if you give me a ship
[47:56] player item subscriber flare item Auto
[48:00] okay I've got to talk to her I've got to
[48:02] talk to to rob MacKinnon and our entire
[48:06] flurry team because now I got to try to
[48:07] push through auto
[48:09] and I can say it came from todd papy so
[48:12] it'll have more weight here's a question
[48:18] in the live chat will the game
[48:20] automatically tell us if a character is
[48:22] a player or an NPC or will we be
[48:26] indistinguishable
[48:27] oh yeah it's a tricky one
[48:33] I think first first you need to see them
[48:38] and be able to know who they are because
[48:42] if I see a ship in the distance and I
[48:44] don't manage to scan it I don't know who
[48:46] that person is
[48:47] which other persons might be on board if
[48:49] I actually scan and find out then I'll
[48:52] be if I see the name I think that's
[48:54] that's the point when we see the name we
[48:56] should be able to know who that person
[48:58] is whether it's an NPC or player but in
[49:01] most cases you might not see a name
[49:02] they've do this
[49:05] hiding behind the rock and you kind of
[49:07] see something there until you actually
[49:09] get to find out who what he is what ship
[49:12] is flying you won't be able to tell one
[49:16] and I think so much that I would go
[49:18] regarding like naming system like if you
[49:20] have for example I I see some of the
[49:22] names on spectrum it'd be like elite
[49:24] exile night you know and for us to do
[49:28] exile nights you know underscore one one
[49:30] one like you know there's gonna be some
[49:33] things that we do from a name standpoint
[49:35] that just it doesn't fit fiction you
[49:38] know but we allow players do it just
[49:39] because that's their handle that they
[49:41] want to create a lot of things that's
[49:43] will also help is the affiliation if you
[49:45] see the organization the faction that
[49:47] they're part of you will kinda know
[49:49] because the NBC ones will be NBC only so
[49:53] it sounds like there will be ways to
[49:56] figure it out but it won't necessarily
[49:58] be something we've explicitly spell out
[50:00] for you know and and I think players for
[50:04] the most part move a lot more erratic
[50:06] you know and like running everywhere
[50:09] jumping you know doing all these kind of
[50:11] random things so I'm assuming that
[50:16] that's that will be the first thing that
[50:18] will
[50:18] not not now I want to know I want AI
[50:21] skill for bunnyhop tomorrow everybody I
[50:25] think everything just to really blur the
[50:27] lines all right we are just about done
[50:32] guys I here's a question that comes up
[50:34] every once in a while we were talking
[50:36] about those components and the
[50:37] subsystems
[50:39] we've talked a little bit in the past
[50:40] about the ability to modify those
[50:44] components themselves you know to tweak
[50:46] to to tune them basically what are what
[50:51] are our thoughts about the ability to
[50:53] tune subsystems doing and maybe get a
[50:56] little more performance out of the stock
[50:59] nature of them we have them we have it
[51:02] plans in fact we've had meetings
[51:04] regarding you know how we're going to
[51:08] build out the insides of these B just
[51:10] because we do have that planned it's I I
[51:16] looked at some of the jurors yesterday
[51:18] you know and looked at priorities for
[51:20] those things so but I'm not going to put
[51:24] it up above like scanning or other key
[51:27] features that we need for us 42 to get
[51:31] that thing singing just because from
[51:35] player standpoint you're not going to be
[51:36] switching out those subsystems yeah III
[51:39] think questions like that come from I
[51:41] see a lot of people who envision a
[51:43] career for themselves buying components
[51:46] and tuning them and then selling them
[51:48] pre tuned to other players yeah but I
[51:51] mean even then at least right now from
[51:54] what we've talked about with with some
[51:56] of the item tuning and stuff right now
[51:58] we're only talking about five to ten
[52:00] percent difference but you know we've
[52:04] talked about weapons and how weapons can
[52:05] be upgraded and I can I can see how we
[52:08] would do it for from you know like a
[52:13] cooler standpoint or a avionics
[52:17] standpoint or a powerplant standpoint I
[52:19] can see how we can take those numbers
[52:21] and we can tune them and we can kind of
[52:23] have similar systems for the weapons as
[52:25] well as for you know the sub items um
[52:28] it would just be building not system you
[52:31] know
[52:31] we have something to new we have
[52:33] something planned for weapons so I'll
[52:34] make note and we'll we'll look at a form
[52:37] from a system standpoint as well you
[52:39] said only five to ten percent like the
[52:42] minimax is out there todd papy if we if
[52:44] they if they can get point nine percent
[52:46] out of something you can bet they'll pay
[52:49] a premium together yeah no and I can
[52:52] understand you know and point nine
[52:54] percent of like let's say a capital ship
[52:56] item you know that might be a help a lot
[52:58] you know and if one point nine percent
[53:02] on a smaller ship you're talking point
[53:04] nine percent for this item then point on
[53:06] for this item point and they keep adding
[53:07] up and they they become more and more
[53:09] powerful so I can understand why the
[53:11] players really want to have this it's
[53:14] it's a cool thing but yes well he's a
[53:16] min/max or yes I just want to I just
[53:23] want a thing that makes it look that
[53:25] looks cool that I'd like to look at hey
[53:27] I want that too
[53:29] all right guys that's it you made it
[53:33] thanks thanks for appearing on the show
[53:35] Dan thank you for Cooper for coming in
[53:38] under the weather and in agreeing to
[53:40] appear on the show this week and Todd of
[53:42] course thank you again so much for for
[53:44] subbing in and helping Dan out no
[53:46] worries he's got a sweet Barry White
[53:48] voice going yes my voice is dead I'll
[53:52] ask you one last question from the live
[53:53] chat that I thought would be appropriate
[53:56] what well what's one of the things that
[53:59] you're working on right now that excites
[54:00] you the most mmm
[54:03] mining money and that is what he's
[54:06] specifically working on right yes this
[54:08] is the one thing that no it's it's a
[54:12] cool thing and it's gonna be the
[54:13] backbone on T of the economy because
[54:15] this is where resources come from and a
[54:17] lot of things will get built on on top
[54:19] of mining
[54:20] we're talking mining then refining then
[54:23] using those components to build other
[54:25] things to research to do science to
[54:27] there's so much stuff that starts stems
[54:29] from this gathering of resources okay
[54:31] not just mine Mining salvaging and all
[54:34] this so all these gathering of resources
[54:36] gonna bring up so much game playing to
[54:38] the game so this is gonna be so cool but
[54:41] yeah but he's specifically working on
[54:42] yes he's the product owner for
[54:44] and then on this yeah and then we've got
[54:47] salvaging being worked on out of la
[54:49] austin as as well as the UK and so for
[54:54] me I get to basically oversee those with
[54:57] Tony and I'm excited about those cool
[55:00] all right guys thank you so much we'll
[55:02] let you go folks watching we're gonna
[55:05] take a quick break and we'll be right
[55:06] back with a wrap-up we'll see nothing
[55:32] you see just walking through the office
[55:33] with a sword alright well that about
[55:42] wraps up this week's show especially
[55:45] note before we let you go two weeks ago
[55:48] on reverse the verse when we had todd
[55:50] papy and rotten rhine chambers though we
[55:52] asked a question that was from the chat
[55:53] it comes up in every every episode it
[55:56] came up this week's episode Carrick and
[55:58] I was in and we were like I don't I
[56:00] didn't know we haven't seen any updates
[56:02] and I was like you know what I'm gonna
[56:03] ask around and I said and if there's an
[56:05] update to give we'll give it in a ship
[56:08] shape in two weeks late another ship
[56:10] shape came yesterday and there was no
[56:11] update we didn't forget it's because
[56:14] there was no update to give presently
[56:16] the carrick is on hold right now while
[56:19] the lot of folks who were working in
[56:20] working on it are working on other
[56:22] aspects things that are needed for 3.1
[56:24] and and 3.2 immediately so the character
[56:26] has been on pause so the from the update
[56:29] that you got in what was it the
[56:31] anniversary sale back in November of
[56:33] last year it has not progressed since
[56:35] then so when I said if there's an update
[56:38] to give I'll give you one there is no
[56:39] update to give but rest assured that
[56:41] when there is you will see it on one of
[56:44] our atv shipshape episodes so hang tight
[56:48] in it in addition don't forget the the
[56:51] Vulcan promotion begins for everybody
[56:53] Thursday February 22nd and a run through
[56:56] the end of March
[56:57] and don't forget to tune into calling
[56:59] all Deb's this Monday where we talk
[57:00] about ask Annie persistent login
[57:03] locations and more and then you can come
[57:05] right back here next Friday when we'll
[57:07] have a special reverse diverse dedicated
[57:09] to the newly revealed Aegis Culkin we're
[57:11] gonna have John Crew and Paul Jones on
[57:13] the show here to answer your questions
[57:15] about the ship repair mechanics from
[57:17] feeling mechanics we are mu mechanics -
[57:19] all that good stuff so for reverse the
[57:21] verse I'm Content Manager Jared Huckaby
[57:22] we'll see you next week everybody
[57:25] thank you for watching so if you want to
[57:27] keep it with the latest and greatest in
[57:29] the star citizen of squadron 42
[57:30] development please follow us on our
[57:32] social media channels see you soon

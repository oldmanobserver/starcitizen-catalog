# Star Citizen: Around the Verse - Choice & Consequences, the Mission System

**Video:** https://www.youtube.com/watch?v=FhywXu8vsuM
**Date:** 2017-09-15
**Duration:** 38:46

## Transcript

[00:15] hello and welcome to another episode of
[00:18] around the verse our weekly look at star
[00:20] citizen's ongoing development I'm sandy
[00:22] Gardner and I'm Josh Sherman we've got a
[00:25] good one for you today later in the show
[00:27] we'll be talking to Tony zhirova
[00:28] and others to learn more about the
[00:30] improved mission system but set to bring
[00:33] a whole bunch of new gameplay to the
[00:34] persistent universe but before we tackle
[00:37] that it's time for another edition of
[00:39] burned down or we discuss all of this
[00:41] week's progress on the alpha 3.0 release
[00:43] let's check in with the team to see what
[00:45] issues the devs have been battling
[00:47] welcome back to burn down our weekly
[00:49] show dedicated reviewing progress on
[00:51] issues blocking the release of star
[00:52] citizen alpha 3.0 last week we ended at
[00:55] 76 total must fix issues which was
[00:57] prioritized as 10 blockers 50 criticals
[01:00] 14 hives 2 moderates and no trivial so
[01:03] let's catch up with the team to see how
[01:04] we're progressing : travel short trip
[01:07] distance set too far taking ages to go
[01:09] between moons or the destination that
[01:10] should not have the slow version of the
[01:12] quarter about 25 minutes ago aid a half
[01:16] an hour ago Mike Dillon Spock common
[01:18] tonight and the way of dealing with it
[01:19] is for Mike to fix this issue being to
[01:23] probably revert his change so the rich
[01:27] recent bug we got for the quantum drive
[01:30] had to do with traveling way too slow
[01:32] within the system our star system is
[01:34] massive and not largely the actual solar
[01:36] system but it's like scaled towards that
[01:38] and we recently wanted to have
[01:40] short-range travel between very close
[01:43] points so the points around a planet
[01:46] unfortunately our calculations we didn't
[01:48] take into account how fast we were going
[01:51] so what we were calculating dynamically
[01:53] for the short range had to do with how
[01:55] fast do we get to travel speed and how
[01:57] fast do we slow down one solution we put
[02:00] in towards that was to also fixing
[02:03] targeting issues we replaced the physics
[02:06] push we were using where we pushed the
[02:08] ship along its forward with a calculated
[02:12] envelope of where you should be we could
[02:14] pass in a time ago
[02:15] five seconds in you should be here at
[02:17] this speed that also allowed us to trim
[02:20] our ramp up ramp down times working with
[02:22] designs so that they knew that they
[02:23] could modify that to shorten that angle
[02:25] and it allows us to now travel slowly
[02:29] around the planets but still get the
[02:30] fast travels between the moon's
[02:33] themselves what only takes like five or
[02:35] six seconds maybe 10 depending on how
[02:37] far away we're still working on tuning
[02:39] those numbers so we have nice long fun
[02:41] travel as you can get out walk around
[02:43] the ships and stuff but it still doesn't
[02:44] take a half an hour to go from one side
[02:47] of a planet to another because that's
[02:49] just not fun we had another issue kind
[02:53] of let off of that where we ended up
[02:55] going too fast because we over
[02:57] accelerated in the other direction and
[02:58] everything way too far so it's been a
[03:00] matter of balancing out the code making
[03:03] sure it's calculating things correctly
[03:04] and working with design to get the
[03:06] visual and the feel that they want and
[03:08] then working with VFX to make things
[03:10] look pretty as it's going and
[03:11] everything's come along really well on
[03:13] that so now it's working pretty well we
[03:15] still got a few tweaks we want to do but
[03:17] overall to work and really solid I would
[03:18] define the agenda the week before you'd
[03:21] be testing that agenda would be figuring
[03:24] out the issues with that and would be
[03:26] coming up with something that we could
[03:27] look to review in the event that that
[03:29] thing wasn't available right now what
[03:32] we're going to suggest is commodity
[03:34] inventory cargo that whole gameplay loop
[03:36] of being able to sell as well and maybe
[03:38] even looking at the kiosk and if that is
[03:41] if that does have issues then there's
[03:43] other things that we can look at in
[03:44] terms of mission missions or even areas
[03:47] of being able to traverse to different
[03:49] planets there's a lot of different
[03:51] things I've been marked off for complete
[03:53] so the whole idea here is you know we
[03:55] got a look at them so recently we were
[03:59] regressing a bug on the PU for the 3.0
[04:03] build I went to to drop a ship on to a
[04:07] character on a pad just to see the
[04:10] animations at first what ended up
[04:13] happening is the ship exploded the ship
[04:16] blows up and the flare is just standing
[04:17] there like nothing happened
[04:19] which so flies into him it pauses
[04:22] because it's freaking out ship blows off
[04:24] and then the guy is like no problem
[04:26] there is another video ships like flying
[04:30] into person and
[04:31] blows up and the guy is just floating
[04:34] there like didn't care nothing happened
[04:37] QA we want to go bigger and better so I
[04:40] spawned a star fair at that point I got
[04:43] up to speed and sure enough start favor
[04:46] exploded as well so this is obviously
[04:48] kind of an issue and looking at what was
[04:52] going on it ended up being a few
[04:54] different issues like initially it
[04:58] started with why the ship blowing up
[04:59] which was there was some code added for
[05:03] the gamescom demo because small ships
[05:05] would like fly into the address and the
[05:07] interest would just immediately blow up
[05:08] so some code was added to like figure
[05:11] out the mass difference between the
[05:13] address and the ship or like the two
[05:15] ships clicked colliding into each other
[05:16] and it had the knock-on effect of
[05:20] working incorrectly when you're flying a
[05:24] person into the ship because there's
[05:26] obviously this huge master between the
[05:27] ship and the person and it worked
[05:30] backwards because it wasn't intended to
[05:32] work in this situation and it added like
[05:34] huge amounts of damage to the ship and
[05:36] destroyed the ship getting hit and
[05:38] damage was being applied but he was
[05:39] still standing there like nothing
[05:40] happened and when you like ask the game
[05:42] hey what's the health of the player it'd
[05:45] be like zero and the players just still
[05:46] standing there like walking around like
[05:48] nothing's wrong so you need to actually
[05:50] manually trigger a death which was
[05:52] another step that had to be done so now
[05:55] eventually a person in first-person view
[05:57] and the ship like flares at you and a
[06:01] bit of a pause but the player is killed
[06:03] blood on the screen everything's good on
[06:05] the ship hasn't blown off which is what
[06:07] you want those are related to like the
[06:11] waiters describing the bugs you pull on
[06:13] one thread it actually trickles and like
[06:15] solves a bunch of JIRA tickets like a
[06:18] prospector not taking damage on the
[06:20] engines
[06:21] it's the UV to overlay tissue that I
[06:23] keep trying to push up to a higher level
[06:25] so I still need to talk to engineering
[06:28] today during our our door sprint to say
[06:30] these are two must-haves that I need to
[06:33] accomplish three Oh
[06:34] the rest is psyche nice ice kind of case
[06:38] three-oh stuff but these are like my
[06:39] must-haves stethoscope very well the
[06:42] ships of the moment I said that there
[06:44] things keep going differently wrong my
[06:48] audio become when they're back in the
[06:51] current imagine time switches or the UV
[06:54] tube or maps and damages on about a
[06:59] third and ships maybe courtship spear
[07:01] just enough to have it set up at all so
[07:04] another important three point of a
[07:05] feature that we've been focusing
[07:07] focusing on this time is the
[07:10] disconnection recovery logic so what
[07:13] this means is we're now able to track
[07:16] graceful disconnects versus ungraceful
[07:18] disconnects a graceful disconnection is
[07:21] you know anytime you bring up you know
[07:23] the main menu in the game and you
[07:25] explicitly choose to log out
[07:27] that's a graceful disconnect but in an
[07:29] ungrateful disconnect could be any
[07:31] situation where you lose connection to
[07:35] your ISP or you know perhaps the client
[07:37] crashed and you're trying to get back
[07:39] into the game so if the backend detects
[07:42] that an ungraceful disconnection
[07:44] occurred then we save you know player
[07:46] metadata as well as create some
[07:49] reservation tokens you know for
[07:50] individual game servers for your spot so
[07:53] that you know when you log back in
[07:55] you'll immediately be presented with a
[07:57] pop-up dialog that says hey do you want
[08:00] to reconnect to the game server that
[08:02] you're less connected to and so if you
[08:04] accept then you know the matchmaker will
[08:06] immediately put you in that instance and
[08:08] at that point you know the the network
[08:11] objects between the server and the
[08:13] client should out of a sync up and the
[08:15] goal is to get you to spawn in exactly
[08:17] the same location in the universe that
[08:20] you were at the point of the
[08:22] disconnection I want to get I want to go
[08:24] to every cut the first thing I want to
[08:26] make sure you do is traverse the system
[08:27] easily while and that's all this set of
[08:31] bones is about is we do you know from
[08:33] getting in taking off a TC working QT
[08:36] working we have to go to locations all
[08:39] that kind of stuff we just get that
[08:40] working and so it's not it's not a night
[08:41] you know another than that Maps or time
[08:43] trial bike jumps place to take off you
[08:45] do that kind of stuff then we have what
[08:47] I think actually
[08:48] a really good start for Democrats it's a
[08:49] lot of fun it's fun you got a fancy
[08:52] piece of things and then once we get
[08:54] this set of twenty you know six books
[08:56] left don't forget these are the 26 books
[08:59] I want fixed to go to a McCarthy with
[09:01] but I'm sure what fits a bunch of other
[09:03] stuff you know at the same time stuff
[09:05] like that and then we basically go and
[09:07] get that in and then once you get that
[09:08] set but God speaks then one of one did
[09:12] that have sit sit down again with Todd
[09:13] and then say write what some what's the
[09:16] next feature we want to focus on and
[09:17] we'll pick another say 10 20 you know
[09:20] feature that said let's get training
[09:21] looking properly and there maybe 10 or
[09:23] 15 features and we said right this is
[09:25] these are 17 books with that that's the
[09:27] next release around Cathy let's get all
[09:29] this stuff worked on another fix list of
[09:31] the background just basic pick a feature
[09:33] at time they look down just keep them
[09:35] going that way that's how Lina closes at
[09:36] so as we talked about last week we've
[09:38] tightened the focus of our first test
[09:40] plan for the evocati which will be
[09:41] traversing and experience the expanse of
[09:43] the new universe and all that entails
[09:44] then while we're getting larger tests
[09:46] support will continue to polish and bug
[09:48] fix more features push them out for more
[09:50] testing and so on and so forth until
[09:52] release now at the time of filming this
[09:55] we've reduced our total must fix issues
[09:57] by 50 some by fixing bugs and some
[09:59] shifted over to allow for a more focused
[10:01] polish of traversal and like Erin said
[10:03] this brings us to 26 issues stopping
[10:05] this first release of the evocati group
[10:06] so come back next week to continue
[10:08] getting an in-depth look at the road to
[10:10] star citizen alpha 3.0 release here on
[10:12] burndown
[10:14] remember we also published an updated
[10:16] 3.0 production schedule report every
[10:18] week you can find it on our site to
[10:20] explore further details about the status
[10:22] of 3.0 let's now turn our attention to
[10:24] the mission system with all the moons
[10:26] and planets plan for star citizen it was
[10:28] important to design a procedural mission
[10:30] system that could provide plenty of
[10:32] content yet we needed to do it in a way
[10:34] that also incorporated handcrafted
[10:36] missions and characters to make sure
[10:38] that the universe feels alive the
[10:40] blending of procedural and handcrafted
[10:42] missions has been a goal of ours from
[10:43] the very beginning and with the release
[10:45] of 3.0 you will get to experience the
[10:47] first implementation of the new system
[10:48] let's check it out
[11:00] most appealing aspect of star citizen to
[11:02] me has always been the level of freedom
[11:04] that it promised the idea that she'd be
[11:06] able to wander through a massive and
[11:07] extremely detailed universe and craft
[11:09] your own unique path I'm fine with
[11:12] limitations being imposed but they need
[11:13] to be done within the context of the
[11:15] game so that for example if a player
[11:16] acts like a criminal
[11:18] the game needs to have mechanics in
[11:19] place security forces a bounty system
[11:21] the concept of reputation and
[11:23] understanding of ownership and things of
[11:25] that sort so that the game can push back
[11:27] is appropriate ultimately it all comes
[11:29] down to choice and consequence that's
[11:31] part of the real world and it ought to
[11:32] be part of the game as well big
[11:34] challenge of the game is it's such a
[11:37] large universe and we got to fill it
[11:38] with with interesting content and
[11:40] interesting stuff to do and the work
[11:42] that I'm doing on the mission system is
[11:44] to try and create tools that the
[11:46] designers can use to to generate
[11:47] interesting content and also it sort of
[11:50] reusable content as well rather than the
[11:52] designers having to say English in this
[11:55] mission you know there should be three
[11:57] ships and two of them should be pirates
[11:59] and one of them should be security what
[12:01] they should be able to say is hey we
[12:03] need like a stand off mission where
[12:05] pirates and you EE are fighting each
[12:07] other and the system can look up into
[12:10] the universe and go well actually in
[12:11] this part of the solar system it's a
[12:13] really wealthy area so there might be a
[12:14] lot of security ships so we'll spawn a
[12:16] whole bunch of security ships and maybe
[12:18] like one plucky pirate who kind of made
[12:21] his way and was trying to make a break
[12:22] for it alternatively it could be like ah
[12:24] this is a really rough neighborhood it's
[12:26] a really poverty-stricken area of the
[12:28] universe it's a bit rough we'd won a
[12:31] bunch of pirates or maybe one or two
[12:32] pirates but with more pirate
[12:34] reinforcements ready to jump in and join
[12:37] them so at that point it becomes a much
[12:40] more procedural living universe rather
[12:43] than the designers specifically saying
[12:45] hey every time you come to this
[12:46] particular section of space you will
[12:49] find two pirates fighting 1ue
[12:51] so what we want to be able to do is to
[12:53] say here's a ship you know it's got an
[12:56] engine room it's got a bridge it's got a
[12:58] mess hall and designers want to be able
[13:00] to say right it's going to need two
[13:03] pilots four security staff a handful of
[13:05] engineers go and our system needs to be
[13:08] able to identify where on the ship those
[13:11] characters should spawn
[13:13] also set them up with behaviors to run
[13:16] subsumption allows complex systems to be
[13:19] broken down into hierarchical components
[13:21] that can be quickly and easily combined
[13:23] to create logical and layered systemic
[13:25] effects it does this via enforcing a lot
[13:28] of structure so that the base elements
[13:30] know how to properly interface with one
[13:32] another and so that non programmers can
[13:33] quickly construct large quantities of
[13:35] content the the speed of implementation
[13:38] is actually extremely important since
[13:41] larger component dictionaries equate to
[13:43] a greater ability for the system to
[13:45] craft an appropriate response to a
[13:47] particular set of inputs NPCs don't
[13:50] start to truly look intelligent until
[13:52] they can understand prioritize and
[13:54] appropriately respond to a lot of
[13:56] different stimuli and missions start to
[13:58] very quickly feel boring and repetitive
[14:00] if there's not enough variation so with
[14:03] sub sumption these base components are
[14:04] just the starting points many of them
[14:06] can be algorithmically modified
[14:08] customized on-the-fly so that the game
[14:10] can more effectively respond to a given
[14:12] situation
[14:13] Tony's subsumption editor allows the
[14:16] designers to specify those requirements
[14:19] for a ship so they can say right cool
[14:20] you know you need this many pilots with
[14:23] these behaviors you need this many
[14:24] janitors with this you know these
[14:26] behaviors but picking sensible locations
[14:28] to spawn these characters has been quite
[14:30] a challenge I mean we did end up for a
[14:32] while with characters spawning on top of
[14:34] tables and you know stood on there on
[14:36] the top of the spaceship and then over
[14:38] time we've kind of refined it we've gone
[14:39] well they're not really sensible places
[14:42] for the characters to be so it's it's
[14:45] been a an improvement you know a slow
[14:48] process but we got there the thing that
[14:50] substernal aoz us to do is I can just
[14:53] find a location on three planets I can
[14:58] find a outpost on one of those planets
[15:01] out of tens of hundreds of outposts
[15:04] however many we have and then I can find
[15:06] a room and then I can spawn a box in
[15:08] whichever one of those it's it's now
[15:10] reached the point where designers have
[15:12] moved away from flow graph entirely
[15:13] which was a particularly important
[15:15] milestone since they're now able to
[15:17] start realizing some of those inherent
[15:20] force multipliers we're now in the
[15:23] process of
[15:25] you know we're now in the process of
[15:26] training designers how to most
[15:27] effectively utilize the system this is
[15:30] going to take some time since it
[15:32] involves getting them to think about
[15:33] some things differently than they have
[15:35] in the past so it's a lot more a lot
[15:37] more open we have a lot more kind of
[15:38] opportunities to do missions that are
[15:41] more expansive when we decided to go to
[15:45] substantial we will approve a choice and
[15:47] that was whether we'd go in
[15:49] half-heartedly kind of thing we'd keep
[15:52] the old missions there and support them
[15:54] and keep them alive in flow graph and
[15:55] just make the new missions in
[15:57] subsumption or whether we just rip it up
[16:00] and start again we can't have designers
[16:03] and coders keeping two systems alive
[16:05] because bugs appear all over the place
[16:08] you know you can never just say this is
[16:10] done and it will always stay done you
[16:13] know you have to always support these
[16:14] things so yeah we started again and that
[16:18] gave us the opportunity to revisit all
[16:20] those old missions and give them the
[16:23] verse absorption touch which is like we
[16:26] can never do the variety like a
[16:28] randomization things like that in flow
[16:31] graph it's just not possible
[16:32] working with sub sumption is quite
[16:35] similar to how we used to work with flow
[16:37] graph it's still a visual scripting tool
[16:40] and we still have to build missions with
[16:42] objectives and logic to progress a
[16:46] mission but substantial allows us to
[16:48] build things in a more modular way and a
[16:50] more reusable way so if we're building
[16:54] say if we're going back to this mission
[16:57] where we picking up a box on a planet
[17:00] for instance in an outpost we would make
[17:02] a little bit of logic that is reused for
[17:07] any number of missions where it's
[17:09] something like when you pick up a box
[17:12] and it shows the objective where you
[17:14] need to take it and then when you drop
[17:16] the box the objective appears on the box
[17:18] we only have to build this logic one
[17:20] since absorption and then we use it
[17:22] multiple times in many missions now that
[17:24] seems like a really small little thing
[17:25] but having to only be able to make that
[17:27] once and then use it multiple times
[17:29] across mission content actually means
[17:31] that the experience is more consistent
[17:35] and it also frees us up to do more
[17:37] interesting things
[17:38] one of the biggest challenges to getting
[17:45] subsidiaries I was able to pretty
[17:50] quickly get a good sense of how I wanted
[17:52] the architecture to actually function
[17:54] what I really needed though was a
[17:57] counterpart on the game side someone
[17:59] that had had dealt with a lot of the
[18:00] same issues and spoke the same language
[18:02] but that had a really really really
[18:05] detailed knowledge of CryEngine and so
[18:07] we lucked out we were able to pick up so
[18:09] many talented people from Crytek in
[18:11] early 2015 one of those in particular
[18:14] was Francesco Riku Qi a lead AI engineer
[18:16] with a ton of experience we've since
[18:18] added a number of other people to the
[18:20] effort and the end result has been that
[18:23] things are now moving along in a pretty
[18:24] solid pace on a number of different
[18:25] fronts the last thing that I'd mentioned
[18:27] in this area is that continues to be a
[18:31] challenge to getting substantial out the
[18:32] door or what I'd call the endpoint
[18:34] systems these are the pieces of
[18:35] technology upon which chunks of
[18:37] subsumption logic often depend
[18:39] pathfinding for example has been it's
[18:43] been operational for probably a couple
[18:44] of years but it's only been relatively
[18:46] recently that a lot of the visual
[18:47] glitches started to finally get
[18:49] addressed such things they might sound
[18:52] purely cosmetic
[18:54] but abrupt turns hugging walls and
[18:56] improper acceleration they quickly rip
[18:59] you out of the game world and break that
[19:01] sense of immersion that we're aiming to
[19:02] get there have been a lot of other
[19:04] animation issues particularly with
[19:05] regard to usable that had to be solved
[19:07] before characters could properly
[19:08] interface to everything from chairs to
[19:12] control panels to crates and so on
[19:14] subsea is tightly integrated with our
[19:16] object container system which means that
[19:18] it had to reach a certain level of
[19:19] maturity before we can move forward and
[19:21] this is actually just the tip of the
[19:23] iceberg there are many other systems
[19:24] upon which subsumption depends that had
[19:26] to reach a certain level of
[19:27] functionality before the system could
[19:29] really start to flicker to life that's
[19:32] actually why getting substantial into
[19:34] 3.0 is such a big deal it means that a
[19:37] lot of other critical game systems are
[19:39] now starting to either come online or
[19:41] have reached a certain level of
[19:42] refinement which is why I expect game
[19:45] play to start making considerably larger
[19:47] leaps forward in the future than it has
[19:48] in the past
[19:49] one day I was just trying to get a
[19:51] couple of guys you know the bag of two
[19:54] guys and usually with the bag on-screen
[19:56] so we have some functionality on the
[19:58] game where you can look at a character
[19:59] press the slash button on the num
[20:02] keypads and then it will immediately
[20:04] show on screen like what he's trying to
[20:06] do what some behavior so it shows the
[20:08] behavior let's say the activity which is
[20:11] in the sub activity which you see in the
[20:13] logic is running the variables that are
[20:15] running and you know what we call the
[20:17] personal log and the personal log is
[20:19] similar to what we're talking about you
[20:21] know about the story because the way I
[20:23] tend to write behaviors is really to
[20:26] tell the story of their decision flow so
[20:27] you can read and say like oh I'm really
[20:29] angry now I need to go to pick up
[20:30] something and say oh I couldn't find
[20:32] something then I'm gonna go buy
[20:33] something else and you can see from this
[20:35] story if something goes wrong because
[20:37] you know which story you are trying to
[20:38] tell and if something is odd then you
[20:40] immediately spot but then like it was
[20:42] impossible to the back two guys at the
[20:43] same time because of the space and the
[20:45] screen so we create the subsumption
[20:47] visualizer that is the kinda
[20:49] representation of subsumption in the
[20:51] game in the engine and the beginning was
[20:53] just debugging like you know activities
[20:55] and then I had the help of table art
[20:57] because he also wanted the bank the
[20:59] missions with the decided design I was
[21:02] saying okay then I will add the the
[21:03] mission debugging and he started like
[21:05] you know something that we we needed and
[21:07] then people really started to like
[21:09] because they oh now I can keep like
[21:10] track of an infinite amount of log not
[21:13] only the last five lines and I can see
[21:16] things changing and then we started to
[21:17] implement other functionality for
[21:19] example Dave helped me implementing the
[21:21] ability of changing variable values on
[21:23] the fly so you can take a behavior that
[21:26] there's a time where our five minutes
[21:27] there's a you know how are you wanna
[21:29] test it but I just want to make sure
[21:30] that I'm not waiting five minutes for
[21:32] the screen you can change the time or
[21:33] value or you know you could reset some
[21:36] of the values just to make sure that
[21:37] ticks gets trigger again and then we
[21:40] were talking with designers and of
[21:41] course when we started to work on the
[21:43] conversation their problem was I out but
[21:45] I helped played the whole mission to
[21:47] just trigger one conversation that is at
[21:49] the end the mission so I work basically
[21:51] with an attitude programmer studies here
[21:52] in Germany there's Cole Gabriel and we
[21:55] made what we call the conversation
[21:57] tab in the subsumption visualizer and
[21:59] there you can see all the available
[22:01] conversation when you select one you can
[22:03] basically see which participant on the
[22:05] conversation are needed and then you can
[22:07] check on the game which one are
[22:09] available all the actors there are you
[22:11] know in the world you can select them
[22:13] and then press Start and you're gonna
[22:15] read trigger a conversation over and
[22:16] over again to you know make sure that
[22:18] the flow of the logic is correct or you
[22:20] know you want to test the lighting on
[22:22] the game yeah you can trigger the
[22:23] conversation and makeshift lighting is
[22:25] good or is the setup correct yes you can
[22:27] really trigger it again now you want to
[22:28] see the animation blending if everything
[22:31] is correct for animators they can just
[22:32] make a test map you know place three
[22:35] guys if the conversation has three guys
[22:36] and trigger it even not in the real
[22:38] environment so we're basically trying
[22:40] really to make a tool that allows the
[22:42] signer to speed up in their in their
[22:44] process because the other thing I always
[22:46] write like really to push is if you
[22:49] don't allow designers to be quick in
[22:51] what they're doing they will have fear
[22:53] of iterating and if their fear is
[22:55] already you don't get the right gameplay
[22:57] the idea is basically that if you allow
[22:59] designers to have the right tools they
[23:01] can iterate much more on their levels
[23:03] and their logic and this you can achieve
[23:05] the best result for gameplay reason you
[23:07] just don't want to make designer scared
[23:11] of iterating over the logic like oh no
[23:13] if I change this one now and it's been
[23:15] at five minutes to retest it yeah I
[23:17] don't have time for a dry they should
[23:20] always be time for tweaking and
[23:22] iterating and it's what we would
[23:24] basically want to achieve the mission
[23:25] system and the activities and the
[23:29] reputation they all live under this
[23:30] absorption umbrella so the good thing is
[23:33] and this is why we did it that way is
[23:36] because we want to be able to access all
[23:38] different systems in within within all
[23:40] the logic of the game so the mission is
[23:43] basically the core flow of the game
[23:46] right it can be single-player campaign
[23:49] where the mission is pretty much your
[23:51] campaign and then the sub missions are
[23:53] the chapters of the game or the some
[23:56] missions of the other chapters few
[23:59] missions will be completing more like
[24:02] you know generic and more dynamic and
[24:05] basically this mission will access data
[24:08] from the characters that are available
[24:10] in the world
[24:11] what they
[24:11] doing what the reputation is the layout
[24:14] of the world so we can access from the
[24:16] object container structure for example
[24:18] this like the root of the universe we
[24:20] want to go to this planet and we know
[24:22] exactly which planets we have available
[24:24] but then there are other things that we
[24:26] generate around time let's say we spawn
[24:27] a pirate ship a pirate eatery's with a
[24:30] specific crew member and this one is
[24:32] defined in subsumption in the specific
[24:34] platform structure and this spaceship
[24:37] with the crew can be accessed by the
[24:39] mission system to give either commands
[24:41] to the guys or to create a specific
[24:43] logic that you want for telling the
[24:46] story right and basically this is the
[24:47] reason why we spend time refactoring all
[24:50] of this because it's just the only way
[24:52] in which we can create specific logic
[24:54] that is reusable across all the parts of
[24:57] the game and that we can basically
[24:59] expose the game in the right way to the
[25:02] designers designers want to be able to
[25:04] obviously create content for the world
[25:07] and they find that they want to be able
[25:09] to give like spawn ships give them
[25:13] instructions tell them to fly to a point
[25:16] shoot a target defend an area because
[25:18] it's a new tool and it's because it's
[25:19] new data that the designers are putting
[25:21] in we then have to go alright cool so
[25:23] you guys want to be able to defend an
[25:25] area so we go away and we go right
[25:27] that's what they need now so we add the
[25:29] we get Tony to add the function to his
[25:31] editor we then go to the game code and
[25:33] build that defend an area code up so
[25:37] that the ships are been able to do that
[25:40] then we pass it back to the designers
[25:42] who go all right great now they can
[25:43] defend an area we now want them to be
[25:45] able to fly off into space and a
[25:47] formation and like lead an attack so
[25:49] alike ok cool so it's the same sort of
[25:51] thing we go back to Tony and say right
[25:53] now that they've got this they want this
[25:55] extra thing so he starts adding it to
[25:57] his editor and meanwhile we start
[25:59] handling it in the game code where we're
[26:01] able to you know build up features but
[26:03] one by one until the designs have this
[26:05] massive tool kit available to them to
[26:07] build new content there are like
[26:09] different ways of getting missions and
[26:11] different ways you know of just accept
[26:15] missions so a lot of the your
[26:16] interaction will happen through your
[26:18] mobiie glass as well so you can see
[26:20] what's available to you
[26:21] even from a mission ever maybe it's not
[26:23] gonna give you just one mission it's
[26:24] gonna say like oh look I have these
[26:26] bucket of missions available for you
[26:27] which one you want and the same is you
[26:30] know around you can say like oh no I'm
[26:31] these are at this place there are these
[26:33] missions that are available to me I want
[26:34] to accept this one away
[26:36] there's certainly two types of missions
[26:38] there are the more story focused
[26:41] missions I guess where there's a mission
[26:44] giver who says hey I've got this
[26:46] situation please go deal with it you
[26:48] know here it is they give you an
[26:50] objective to meet and then you fly off
[26:52] and meet that objective you know or
[26:54] don't meet that objective so the mission
[26:57] breaker is a system that that runs on on
[26:59] the server's and takes into account like
[27:02] the player's reputation and criminal
[27:05] status and various other like economic
[27:08] factors and in the area that they're in
[27:10] and generates a list of missions appear
[27:14] and the players might be glass and
[27:16] allows them to just accept the things
[27:20] that they're interested in and it also
[27:22] talks to the mission givers as well and
[27:25] the mission givers can ask the mission
[27:27] breaker what missions are available to
[27:30] that they can offer to the player as
[27:31] well so kind of does does all these
[27:34] things together the other kind of
[27:35] mission is kind of random encounters in
[27:38] space it's possibly wrong to call them a
[27:40] mission it's more of a random encounter
[27:41] in space but in terms of how the
[27:43] designers would set it up it would still
[27:45] it would still be built as a mission
[27:47] just the trigger would be you're flying
[27:50] in space nothing's happened for a while
[27:52] and you've ended an area that feels like
[27:54] it needs some action and we go hey
[27:57] here's a spontaneous mission that's
[27:58] popped up you don't necessarily get an
[28:01] objective it might pop up on your radar
[28:02] and say there's a rescue that needs
[28:04] happened or you know we've detected
[28:06] pirates in the area but it would still
[28:08] be handled as a mission but yeah that
[28:10] that would be more of a
[28:11] take-it-or-leave-it kind of situation as
[28:13] opposed to the missions where someone's
[28:15] explicitly said hey I've lost my dog go
[28:17] find it and you're like I've got I've
[28:19] got you I'm gonna accept this mission
[28:21] and go do that designers can create like
[28:23] timers or different logical triggers so
[28:27] it can be if you enter a specific Iowa
[28:30] shouldn't enter maybe you know and then
[28:31] they say oh now I start to spawn lots of
[28:34] or say oh you're very close to finish
[28:36] you save like five other six characters
[28:38] now I will send you a lot of pirates so
[28:41] they can really generate the logic they
[28:43] want and create the logic they want
[28:45] through these tools to the super generic
[28:47] and it's just very efficient because we
[28:50] try also to run only the lodge that is
[28:52] active in that moment so we can run a
[28:55] lot of missions are a lot of characters
[28:57] I've never had any interest in purely
[28:59] procedural content as you know in
[29:01] practice I think it tends to feel very
[29:03] formulaic and repetitive and bland that
[29:06] approach gives you a practically
[29:07] infinite amount of variation but when
[29:09] there is nothing more I think that it
[29:10] falls apart on the experience it lacks
[29:12] the depth to really make an area feel
[29:14] alive and unique and interesting my
[29:17] personal taste is that I want key NPCs
[29:19] at a given location for example to have
[29:21] real backstories and well thought
[29:22] through motivations and reasons for
[29:24] being there in the first place and not
[29:26] to be NPC facades that have had their
[29:29] traits rolled from a random number
[29:30] generator and whose connection to the
[29:32] rest of the universe feels isolated and
[29:35] bereft we actually use procedural tech
[29:37] extensively but it's just one of many
[29:39] tools within the pipeline and its
[29:41] primary purpose is to set up the
[29:43] background the canvas upon which a more
[29:45] detailed and intricate picture is going
[29:47] to be handcrafted we're actually taking
[29:49] that concept one step farther and
[29:50] allowing handcrafted content to be
[29:52] algorithmically placed on to procedural
[29:54] backdrops and then customized in real
[29:56] time based upon inputs from the game
[29:58] tonio was kind of said you know the game
[30:00] should be this interactive universe
[30:03] right this very emergence gameplay style
[30:08] universe so that rather than having
[30:11] everything hard scripted and feeling
[30:13] like you know it's it's been placed
[30:15] there and you turn up and it just was
[30:17] there it feels like it should be
[30:18] reactive to the player so as the control
[30:22] of power in the universe
[30:23] absent flows then so should the
[30:26] encounters that you come across from
[30:28] experienced players seem to enjoy things
[30:31] happening that aren't quite supposed to
[30:34] happen so long as it's not game breaking
[30:35] and so long as it's not like ludicrous
[30:38] if a pirates attack popped up no in a
[30:40] safe stronghold but it only happened the
[30:43] once it would be this rare event that I
[30:45] don't think players would have a problem
[30:46] with
[30:47] I mean obviously if it started happening
[30:49] all the time people would start seeing
[30:50] it as a bug but it is it is fun for
[30:52] these things to randomly get thrown in I
[30:54] mean that's that's partially the power
[30:56] of the system if we were able to make it
[30:58] so that it's able to choose that just
[31:00] enough so that it's keeping players
[31:02] entertained but at the same time not
[31:04] enough that people go well this just
[31:06] doesn't make sense
[31:07] you know logically pirates wouldn't be
[31:09] attacking this base then I guess we've
[31:10] done our job right the players make
[31:12] their own stories as part of the game so
[31:14] it's like they're flying along they find
[31:17] there's a pirate ship attacking a
[31:18] civilian vessel and they fight off those
[31:21] pirates and rescue the civilian and they
[31:23] then later able to find that civilian
[31:25] ship is elsewhere you know and it's
[31:28] almost like they're tracing the threads
[31:30] of these stories on their own as they're
[31:32] being built around the player that's not
[31:34] to say that'll always be the case I mean
[31:35] sometimes it will just be here some
[31:37] pirates let's fight those pirates but it
[31:41] would certainly be nice if we're able to
[31:42] start tying these missions together and
[31:45] maybe tying missions onto the back of
[31:46] other missions so you save this civilian
[31:49] say you know from a pirate fight and he
[31:52] turns around yours are my ship was
[31:54] damaged you know I was meant to take
[31:56] this this car you this valuable cargo to
[31:59] somewhere and then suddenly it opens up
[32:01] a whole storyline for the player where
[32:03] they could potentially take that cargo
[32:04] or steal at cargo depending on the
[32:06] inclination of the player but it starts
[32:09] letting the players build their own
[32:11] stories and I know certainly from
[32:13] speaking with Tony he was hoping that
[32:15] like there'd be a civilian rescue
[32:17] mission say see you fly in and start
[32:19] defending this civilian more players
[32:21] join start attacking you because they're
[32:24] playing as pirates you know and then
[32:26] suddenly you've got an all-out war
[32:27] between a bunch of players and at that
[32:29] point the players are really building
[32:31] their own narrative it's less hey here's
[32:34] a very small mission encounter you know
[32:36] where we've turned up shot some guys and
[32:38] left it's become more like hey no we
[32:41] turned up to try and save this guy and
[32:43] then these players turn up and started
[32:45] fighting us so then I called my friends
[32:46] and they turned up and started fighting
[32:48] them and then we tracked them back to
[32:49] their base and a whole bunch more of
[32:51] them turned up when we develop a mission
[32:53] from scratch we start with
[32:56] a very high-level direction from Tony
[32:58] and then I take that away and kind of
[33:01] flesh it out into some you know a
[33:03] mission with objectives and then run
[33:06] that by Tony and tart and if we get
[33:07] their thumbs up we we then so I sit down
[33:12] and I flush it out further and I try and
[33:14] think of all the ways that I can keep
[33:17] this mission open to narrative dressing
[33:19] as possible and a really simple example
[33:22] of that is you know go collect a box
[33:25] very simple objective and you can think
[33:28] of thousands of weights ways to dress
[33:31] that differently to make it interesting
[33:32] but when you start talking about more
[33:34] complex missions with several objectives
[33:37] complex objectives the
[33:41] a narrative dressing you can put on that
[33:43] you know there's less variety you can
[33:46] you can get out of it so that's where
[33:48] the writers come in like I try and leave
[33:50] as open as possible and give examples of
[33:52] you know always I think we could do this
[33:55] and then they'll just build on top of
[33:58] that and give us like 10 more ways you
[34:01] know we can make this sound different
[34:03] you know or we might need is a different
[34:05] prop for this or something and that that
[34:08] process is very fluid and it's great to
[34:10] work with those guys I mean we're in it
[34:12] pretty much daily and communication
[34:15] usually like when it comes to these you
[34:18] know of a mission creation part there's
[34:19] a constant back and forth of their
[34:21] mission designs and then dialogue and
[34:25] mission text coming back that we can go
[34:28] over and go and we need this changing
[34:30] because the objectives such and such
[34:32] like we'll come up with things that like
[34:35] affect the way the lines are written and
[34:37] these like right as Dave and will will
[34:39] like pitch something back to us and
[34:41] we'll go that's amazing and turn it into
[34:43] a mission or an objective it honestly is
[34:46] really great working with those guys and
[34:48] being so close to them and it's great
[34:50] when they come over here as well and
[34:52] it's actually sitting down with them and
[34:54] then just kind of rushing out for
[34:56] example that I'd say my favorite example
[35:00] of that right designer relationship is
[35:04] tessa Bannister who is the character who
[35:07] lives on a ICC probe between the writing
[35:11] the actor and like the implementation of
[35:14] a lines we managed to create this really
[35:17] really likable and like vibrant
[35:20] character for the players you know I
[35:22] mean they seem to really love it and
[35:24] like my small part in that is the way we
[35:27] arranged for lines like the writers will
[35:30] give direction on each line today after
[35:32] the way the lines come back there's
[35:34] always a very slightly different tone so
[35:36] she might be supposed to be a beat for
[35:38] all these lines but she'll be upbeat
[35:40] slightly more on one of them so what I
[35:43] did was obviously I listened to all
[35:44] these lines and the way I ordered from
[35:46] because it was just kind of linear
[35:47] progression like you meet this person
[35:49] and then you do missions for her
[35:51] and so when you meet her at first she's
[35:54] as neutral as this actor can be she's
[35:58] very like buoyant but she's quite
[35:59] neutral and then for more missions you
[36:01] do for her she likes you more and more
[36:03] and more more friendly kind of thing
[36:04] until she's genuinely excited to see you
[36:06] and just building that kind of Ark there
[36:09] was like I really enjoyed that and it
[36:12] seems like the players really felt that
[36:14] too so the intent of the mission system
[36:16] is to be able to create this it's a
[36:20] universe right we can't be designing
[36:23] individual missions and to fill it we
[36:26] have been crafting individual missions
[36:29] to fill it so what we tend to do is
[36:31] create mission types which themselves
[36:34] can like there's a there's a bass light
[36:37] flow but they can be random places it
[36:41] can be a completely different reason and
[36:43] for needing to do this mission you can
[36:46] be attacked by different people at
[36:48] different points for route it or not
[36:50] there are a whole load of variables so
[36:52] we create this like template that has
[36:54] the option of all these variables and
[36:56] then that can be generated over and over
[37:00] and over and over again and I'm not
[37:01] going to say you'll never play the same
[37:03] mission twice like 93 Oh anyway but the
[37:06] moment you have this full galaxy and
[37:09] we've gone in and marked up all these
[37:11] different places for it to be in come up
[37:14] with all these different enemies and
[37:16] search it's very unlikely you'll ever
[37:18] get those same mission twice it's
[37:20] exciting to be seeing all these new
[37:22] gameplay elements come together when
[37:24] combined players should have a wide
[37:26] variety of missions and unexpected
[37:28] encounters just waiting for them to
[37:30] create their own star citizen story
[37:31] that's all for this week's episode
[37:34] thanks to all our subscribers for making
[37:35] this all possible
[37:36] this month's jump point will be released
[37:38] this Friday so subscribers should check
[37:40] it out yes check it out and also thanks
[37:42] again to all of our backers for
[37:43] supporting the game we truly appreciate
[37:45] all that you're doing to help develop
[37:47] star citizen until next week we'll see
[37:50] you around the earth
[38:00] [Music]
[38:23] thank you for watching so if you want to
[38:25] keep it with the latest and greatest in
[38:26] the star citizen a squadron 42
[38:28] development please follow us on our
[38:29] social media channels see you soon
[38:39] [Music]

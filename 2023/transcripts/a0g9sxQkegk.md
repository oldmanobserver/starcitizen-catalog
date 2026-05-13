# Inside Star Citizen: Mission to Module

**Video:** https://www.youtube.com/watch?v=a0g9sxQkegk
**Date:** 2023-03-16
**Duration:** 19:19

## Transcript

[00:00] hey before we get on to the normal
[00:03] business of inside Star Citizen this
[00:05] week we wanted to take a moment and
[00:07] recognize and acknowledge what's
[00:09] currently happening with the live
[00:10] gameplay experience
[00:12] obviously anyone that's been following
[00:14] the project for any period of time knows
[00:16] that running a live gameplay environment
[00:18] throughout the process of development is
[00:22] an unusual sometimes trying but often
[00:25] rewarding experience
[00:27] but it's not just the tremendous work of
[00:29] our developers that make this possible
[00:31] it's also the continuing commitment of
[00:34] you our players that allow us to test
[00:37] things at scale because it's often easy
[00:39] to forget that with the hype and
[00:41] excitement of a new release that every
[00:43] level of Star Citizen is a development
[00:46] and testing platform
[00:47] even the live Alpha now
[00:50] even knowing that the launch of alpha
[00:52] 318 was going to be rougher than normal
[00:54] I think it's fair and safe to say that
[00:57] we were all hoping for a somewhat
[00:58] smoother experience and the one that you
[01:00] have been finding the last week now
[01:02] while I'm going to continue I'm going to
[01:03] continue pointing you to the amazing
[01:05] efforts of our platform team the player
[01:08] experience team and especially the
[01:10] community team in updating you on the
[01:12] continuing progress through the website
[01:13] and socials because quite frankly
[01:16] they're far more plugged into those
[01:17] things than I am and will have much
[01:19] better information than I ever will we
[01:21] did feel it was important to acknowledge
[01:23] the current state of things at the top
[01:25] of this show whose story was set weeks
[01:28] and months before
[01:30] I said it on SEO and I'll say it again
[01:33] here we don't just share in the
[01:35] victories with each and every one of you
[01:37] we're often right there with you with
[01:39] the same thoughts and the same feelings
[01:42] about our disappointments
[01:44] we're sorry for the rough launch but I
[01:46] hope you can see the determination and
[01:49] the dedication of those people working
[01:51] to improve things in the improvements
[01:54] that are being made each and every day
[01:55] this week and will continue until we get
[01:58] things where we want them to be
[02:00] so with that said
[02:03] let's get started with this week's show
[02:05] since the launch of the persistent
[02:07] Universe in December 2015 Mission
[02:10] gameplay has been at the center of the
[02:11] Star Citizen experience whether that's
[02:13] doing someone a favor and investigating
[02:15] a few ycc probes delivering an important
[02:18] package from one planet to the next or
[02:21] infiltrating a gang of would-be near do
[02:23] Wells and efforts to keep Stanton safe
[02:25] missions often push players forward into
[02:28] areas they might not otherwise have
[02:30] discovered and pull them deep into the
[02:33] scandalous underbelly of the star system
[02:35] and over the years through the work of
[02:38] the mission feature team missions have
[02:40] continued to evolve into a modular
[02:42] system that allows for designers
[02:44] anywhere in any Studio to create
[02:46] missions not in the weeks and months of
[02:48] 2015 but in the mere days of 2023
[02:52] so on this week's inside Star Citizen
[02:55] let's learn a bit more about how that
[02:57] modular system works the technical
[02:59] complexities that make it possible and
[03:01] take a peek at some of the new modules
[03:03] currently in development for Alpha 319
[03:05] and Beyond
[03:07] [Music]
[03:10] good you can do it I can do it missions
[03:13] matter no missions modules Elliott
[03:16] Maltby Mission modules you're at scene
[03:18] five mission modules Lars scene 5.
[03:23] I always wanted to do that
[03:30] at the very beginning
[03:31] the early days everyone was just coming
[03:34] up with missions right what we used to
[03:36] have to do is have a bespoke mission for
[03:40] every Mission we had someone might have
[03:42] built it to act this way and then
[03:44] another person might have built it to
[03:46] act this way but in a completely
[03:48] different way so one person would start
[03:50] like a delivery Mission would have to
[03:52] write it from beginning to end and then
[03:54] some other person wouldn't have write a
[03:55] bounty Mission from beginning to end and
[03:57] then another delivery Mission Again from
[03:59] beginning to end and the problem with
[04:01] that situation was that
[04:04] um everyone wrote their scripts
[04:07] differently each Mission while might
[04:09] have similarities
[04:10] every bit of logic was different in some
[04:13] way we are a game that constantly
[04:15] evolves it constantly gets updated so
[04:17] things break sometimes we used to get
[04:19] bugs back which was like oh you know
[04:21] that when we enter the action area for
[04:23] this this Mission this happens but it
[04:25] wouldn't happen on the other one even
[04:28] though they're functionally doing the
[04:29] same thing everything was built in a
[04:31] different way and so everything also
[04:33] needed to be fixed individually it was a
[04:35] lot of reworking and redoing and over
[04:39] and over again and eventually that could
[04:41] not be skilled up anymore in a game like
[04:43] Star Citizen where we really want to
[04:45] populate the entire universe with
[04:48] missions we can't really do that we have
[04:50] to come up with a different solution we
[04:52] don't need all these people working on
[04:54] all these things all over the place if
[04:56] we can have more of a unified approach
[04:57] towards it that's where Mission Logics
[05:00] come in
[05:02] foreign
[05:05] to fix all of those issues is a more
[05:07] modular system this is where we identify
[05:10] key functionality between missions and
[05:13] plug them all together and make it all
[05:15] operate under one module this means that
[05:16] when we get a bug it is likely that
[05:18] every other Mission will experience this
[05:20] bug and we can fix it so we have modules
[05:23] and sub modules and sub-modules and
[05:25] there is no answer that you can keep
[05:27] putting them inside of each other but on
[05:28] the high level we have what are called
[05:30] wrapper modules so some of the different
[05:32] wrapper modules are like delivery
[05:34] missions your typical delivery mission
[05:36] is pick up a box and then deliver the
[05:39] Box in another location which has
[05:41] certain variations so we have ones that
[05:43] are called multi-stop which are
[05:45] essentially uh here's five boxes uh
[05:48] here's the pickup locations and here's
[05:49] all the drop-off locations the player
[05:51] can decide in what order they want there
[05:52] are the linear wrapper module which is
[05:54] we give you one box and you have to
[05:56] deliver that before we then give you the
[05:58] next box infiltrate and offend has like
[06:00] various subtypes and different
[06:01] variations that we can use depending
[06:04] what the mission wants to achieve you've
[06:06] got to eliminate all missions or you've
[06:08] got eliminate specific missions or even
[06:10] eliminate boss mission where players
[06:13] must neutralize the grunts first and
[06:16] then afterwards a Boss shows up and
[06:18] that's the eliminate Target and those
[06:19] are all the sub modules of the
[06:21] infiltrate and defend type and we're
[06:22] still making more then is the bounty
[06:24] hunting modules are about emissions are
[06:26] quite well known the most basic version
[06:28] is you accept a contract it tells you
[06:31] where the Bounty is you travel there and
[06:33] you take it out which then can be
[06:34] modified in like several variations it
[06:37] consists of the synced assassinations
[06:39] it's the group bounces where you have
[06:41] three different bounces at different
[06:42] locations you have to get to and kill
[06:43] it's the Idris event where you have to
[06:45] go and kill it Idris with potentially
[06:47] multiple people you don't know and when
[06:49] the ability to capture people comes
[06:51] online will add even more modules to
[06:53] help support this
[06:55] so what we're working on now is resource
[06:58] collection missions that includes
[06:59] Salvage and Mining missions we're even
[07:01] gonna be adding classic things like um
[07:03] someone wants 40 pieces of Wheat and you
[07:06] have to go and find that and bring that
[07:07] back to them all of these things we're
[07:09] looking into investigating hopefully
[07:11] you'll see soon
[07:13] no Reddit that's just an example we're
[07:15] not actually going to collect weight
[07:20] foreign
[07:25] so let's dive deeper into sub modules
[07:27] and let's use one that looks relatively
[07:29] simple the delivery module the delivery
[07:31] module uses a wrapper called the
[07:34] multi-stop delivery so when that fires
[07:37] that starts something called the
[07:38] initialized delivery Loop the initialize
[07:40] delivery Loop reads parameters that
[07:42] designers give us say how many boxes
[07:45] they want to be delivered for this
[07:47] example let's say three so those three
[07:49] boxes would start three individual round
[07:51] deliveries now a round delivery will
[07:53] care and track the progress of a
[07:55] singular box and it's Journey from point
[07:57] A to point B so then after that round
[08:00] delivery has booted up and it has all
[08:02] the information that then goes right now
[08:03] I need to start the first part of it
[08:05] which is the pickup part so it starts to
[08:07] pick up or drop off module which then
[08:09] will check what has a designer specified
[08:12] to me does the designer care where this
[08:14] is spawned do they want a locker do they
[08:16] want a certain item Port if they don't
[08:18] it will choose randomly so let's say
[08:20] they go okay I want it to be picked up
[08:21] from a item Port which is essentially
[08:23] what you know as a shelf
[08:25] the image spawned on a shelf and it sits
[08:28] there waiting when the player interacts
[08:30] with the item and picks it up it sends a
[08:32] call back back to the pickleball dropper
[08:34] and say this item's been retrieved the
[08:36] pickle oil drop-off goes my job's
[08:38] complete let me tell the round delivery
[08:40] the round delivery then goes okay thank
[08:42] you for that information I can now start
[08:44] the drop-off process because the box
[08:46] that I had been told to pick up has been
[08:48] picked up it will then say I'm gonna
[08:50] boot the pickup or drop off again but
[08:52] this time it will specify the drop-off
[08:54] process once again taking into account
[08:56] anything that the design has specified
[08:58] if they want it dropped off in a locker
[09:00] or at a shelving unit again say this
[09:02] time it's a locker then what happens is
[09:04] it will boot up a completely different
[09:05] module of the delivery Locker then that
[09:08] will send the request to the delivery
[09:10] locker and say hey delivery Locker
[09:11] you're going to expect X item from X
[09:14] person the delivery Locker then Waits
[09:16] when you put it in the delivery Locker
[09:17] the delivery Locker will verify that the
[09:19] item is the one that was actually asked
[09:21] for you to be delivered and then it will
[09:23] once again send an event back up to the
[09:25] pickup far drop off going hey I've got
[09:27] the right item that'll go cool thank you
[09:29] send that over to the round delivery the
[09:31] round delivery will go well that's my
[09:32] box gone I've finished I'm gonna send
[09:34] this up to the initialized delivery Loop
[09:36] the initialized delivery Loop goes
[09:37] that's one out of three now delivered it
[09:40] will then repeat this process for the
[09:41] other two boxes that can be done in any
[09:43] order then when that completes all over
[09:45] together the initialized delivery Loop
[09:47] will go cool all of my things have been
[09:49] finished I'm going to send it up to the
[09:51] multi-stop if the multi-stop will then
[09:53] go that's my mission over complete you
[09:55] get your money and it's as simple as
[09:57] that the reason we set this up like this
[09:59] is because it allows us to quickly plug
[10:01] pieces in for example the prison Mission
[10:04] had to expand on the delivery system to
[10:07] allow you to pick up from a corpse and
[10:09] drop off to a satellite as a sort of
[10:12] upload function what this means is we
[10:13] didn't have to create another delivery
[10:16] module to do that specific process we
[10:18] created two ending modules of pickup
[10:20] corpse and upload data those live at the
[10:25] end so after to the pickleball drop off
[10:26] has run its course it would just pick
[10:28] those two which means we don't have to
[10:30] add specific functionality to the entire
[10:32] module all over it only has to be at the
[10:35] end
[10:36] [Music]
[10:43] so I guess you really want to hear about
[10:45] some of the new stuffs so let's talk
[10:46] about Salvage modules the Salvage module
[10:48] is currently a singular module and what
[10:51] we have done is allowed for a bunch of
[10:52] functionality the most simple version is
[10:54] you get your contract in your Mobi glass
[10:56] given by a company that has Salvage
[10:59] rights you accept mission in Moby glass
[11:01] and then it's going to give you a piece
[11:03] of Salvage and it says well we have a
[11:05] piece of Salvage for you and it's
[11:06] located at this LaGrange point the
[11:08] player is shown a location where a
[11:10] shipwreck can be found so they make
[11:11] their way there and it could be that
[11:14] another NPC is there salvaging already
[11:18] or you could have an illegal variant of
[11:21] the mission where you have to go there
[11:23] and Salvage everything quickly before
[11:25] another player that has the contract
[11:27] legally shows up but there's going to be
[11:29] time on screen of whenever the legal
[11:31] owner of that Salvage gonna appear which
[11:34] can end up in uh enemies arriving
[11:36] because he calls them in we've made
[11:39] several sub modules that allow to work
[11:41] with it so the first one is spawn ship
[11:43] waves so it's going to be a wave based
[11:45] module that allows the designer to
[11:47] Define what the waves are like exactly
[11:50] and then they show up and another module
[11:51] that we've been making that we're
[11:52] actually quite proud of is the chicken
[11:54] ship module and that's a ship that shows
[11:57] up and then is either going to attack
[11:59] you or try to run away and if you scare
[12:01] It Off by either damaging it or taking
[12:04] too long it's gonna try and jump away
[12:06] and if it does so then
[12:09] it allows the designer to Define what's
[12:12] going to happen then so the most basic
[12:13] version would be he's going to call his
[12:15] friends they come in and then all of a
[12:16] sudden it's not you and a vulture
[12:18] against another vulture it's going to be
[12:19] you against Retaliator bomber and four
[12:21] arrows and you're in trouble now the
[12:24] other option is like okay if you destroy
[12:25] it then what happens so we have the
[12:27] option of like a Carrick arise because
[12:29] the company is like well we haven't
[12:31] heard from Bob in an hour we're gonna
[12:33] send like someone else to do the Salvage
[12:36] but maybe something happened to him
[12:37] we're gonna send something bigger or you
[12:39] basically warded off the Defenders and
[12:41] you're now safe to salvage at your own
[12:42] Leisure this kind of modular approach
[12:45] will allow all the designers to come up
[12:47] with whatever they want when it comes to
[12:50] building missions there there could be a
[12:52] number of possibilities it is only
[12:54] limited by their imagination all of
[12:56] these sort of modifiers and options are
[12:58] there to sort of allow us to create
[13:00] different types of gameplay or different
[13:02] experiences with very little changing of
[13:06] the logic it's a lot of just changing
[13:08] different properties on a what's called
[13:09] a mission record Another emission module
[13:12] that we're working on that hasn't been
[13:13] revealed yet is package extraction so
[13:16] it's a mission where the nine tails have
[13:18] taken over another Crusader platform and
[13:21] they have gotten their hands on some
[13:22] highly valuable Crusader prototype chip
[13:24] components so Crusader really wants them
[13:26] back before they fall into the wrong
[13:28] hands and as a result they put out a
[13:30] contract and many players all around
[13:32] Crusader are tasked with going to that
[13:34] platform and handing it to the ninth
[13:37] Hills essentially getting back the
[13:38] Prototype ship components before they
[13:40] can be flown off world one thing we've
[13:42] been playing with is that we hooked it
[13:44] up to the Bounty modules that already
[13:45] exist so we would fire a bouncy module
[13:48] where the player goes to a location they
[13:49] kill a ship and then we kick off a
[13:51] salvage module All in One mission so the
[13:53] player goes there kills the ship and
[13:55] then instantly their objectives are like
[13:56] and now Harvest it and then that's the
[13:58] completion of the mission so at the
[14:00] moment mining missions are on pause
[14:01] while we wait for resources from other
[14:02] teams but in the meantime we will
[14:04] continue to develop Salvage missions
[14:06] mining missions and the overall scope of
[14:08] resource collection missions so you know
[14:11] you could hopefully see your wildest
[14:12] imagination of resource collecting
[14:15] missions come true a reasonable
[14:17] expectation of resource collection
[14:18] missions in the future
[14:24] so the biggest virtue of this is it
[14:25] allows other designers like game from
[14:27] Montreal or Sam from the EU locations
[14:31] team to go in and be able to piece
[14:33] together their own custom Mission we
[14:35] just send them one submission module is
[14:37] finished all the questions that they
[14:39] need to fill in for this their designer
[14:41] can go today fudge select a mission
[14:43] modify a few properties that will change
[14:45] the behavior of the mission whether it's
[14:47] the type of box they're delivering or
[14:48] what enemy they want you to kill all of
[14:50] these modules are intended to be
[14:52] stitched together in easy ways to be
[14:55] able to create completely new bits of
[14:57] content so that the content expansion
[14:59] can be huge and this is really important
[15:02] for when you try to build a game of the
[15:04] skill of Star Citizen they could build a
[15:07] mission where you go to a location to do
[15:09] and eliminate all and as you're arriving
[15:11] there there's a bounty Target in the sky
[15:13] you have to take out first as you go in
[15:15] and manage to kill them all they use the
[15:17] item dispenser we use in jump town and
[15:19] Korea to spawn an item that when the
[15:21] player picks it up it then starts a
[15:23] delivery mission that's the real win of
[15:26] thinking modularly
[15:31] so that was a little look behind the
[15:33] scenes of what we do in the mission
[15:35] feature team the mission for each team
[15:37] consists of more than just the people
[15:38] you see here we have a much bigger team
[15:39] that are building these behind the
[15:41] scenes to be able to bring you this new
[15:43] content these new functionalities and
[15:45] also help our designers internally to be
[15:47] able to also deliver the same thing this
[15:49] is only a fraction of things we have
[15:51] worked on and are working on obviously
[15:53] as more systems come online we are going
[15:55] to start making more and more modules
[15:57] Salvage and Mining were the most recent
[15:59] ones and we've worked on those
[16:02] um crafting is coming soon so we're
[16:05] gonna probably make some modules with
[16:07] that and we're going to continue to make
[16:09] more and more Mission modules and more
[16:10] things for you to play and enjoy thank
[16:12] you very much for letting us tell you uh
[16:16] what we do we're uh
[16:18] hopefully making everything you like and
[16:21] uh
[16:22] yeah
[16:23] I don't know what else
[16:26] thanks very much for watching and I'll
[16:27] see you in the next episode of inside
[16:28] star citizenship
[16:32] I'm not in the next episode you said you
[16:35] were
[16:38] so what did we learn this week well we
[16:40] learned that modularity is what allows
[16:42] for the work of One mission to be
[16:44] carried over and utilized in a variety
[16:46] of others then it allows for the
[16:48] relatively quick construction and
[16:50] iteration of missions by designers from
[16:52] all over the globe that it is ultimately
[16:54] what is allowing us to currently add
[16:56] gameplay quickly and efficiently to new
[16:58] locations like the underground
[17:00] facilities building interiors and even
[17:02] the upcoming pyro system and that new
[17:05] modules are being created along the way
[17:07] like the Salvage and Mining Parts a
[17:09] resource collection as well as the
[17:11] investigations we've discussed
[17:12] previously
[17:13] and just to touch on Alpha 318 once more
[17:16] the team continues to tackle the
[17:18] troubles that have plagued launched
[17:19] since Friday and you'll find continuing
[17:21] updates as needed at the robertspace
[17:23] industries.com website now stability has
[17:26] been steadily returning all week with
[17:28] more and more people being able to
[17:30] connect in and stay in for longer
[17:31] durations after that and there's been a
[17:34] number of absolutely critical fixes that
[17:36] only became known and necessary thanks
[17:39] to you all showing up and stressing the
[17:41] ever-loving hell out of the new entity
[17:43] streaming foundation for the persistent
[17:45] Universe in ways that frankly we never
[17:46] could on the PTU so thank you thank you
[17:50] thank you and thank you to all the
[17:52] developers who never appear on camera
[17:54] because frankly they're just too busy
[17:57] been a frustrating week for everybody
[17:58] but I'm also really proud to stand here
[18:01] and represent those who are working so
[18:03] hard to do right by the community and
[18:05] this project for inside Star Citizen I'm
[18:08] Jared Huckabee thank you for watching
[18:10] keep an eye on the website for all those
[18:12] Alpha 318 post lunch details and we'll
[18:14] see you all here next week
[18:21] the last time I was in front of a camera
[18:22] it seemed like really artificial and it
[18:24] was difficult to talk to the camera it
[18:25] felt like it was just judging me whereas
[18:27] with you guys I feel like I'm more
[18:29] having a conversation do you know where
[18:30] Mission logic comes from no well the
[18:33] earliest record of logic that we have in
[18:35] our world started with Aristotle right
[18:37] he wrote this book that we translate
[18:39] nowadays as the instrument and he was
[18:42] preoccupied with stuff like um
[18:44] Socrates is Mortal all humans are mortal
[18:48] therefore
[18:49] wait did I mess that up
[18:51] I said Socrates is Mortal no that's it
[18:54] you had one chance

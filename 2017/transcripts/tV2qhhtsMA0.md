# Star Citizen: Around the Verse - Flight Plan: Air Traffic Control

**Video:** https://www.youtube.com/watch?v=tV2qhhtsMA0
**Date:** 2017-09-22
**Duration:** 27:00

## Transcript

[00:14] hello and welcome to another episode of
[00:17] around the verse our weekly look at star
[00:20] citizen's ongoing development i'm sandi
[00:22] gardiner and i'm chris roberts it's
[00:24] great to have you back Chris thanks
[00:26] after attending games gone I spent a few
[00:28] weeks at foundry 42 working with both
[00:30] the UK and the Frankfort teams on a
[00:32] variety of things including alpha 3.0
[00:34] which we're making some great progress
[00:35] on that's right our battle against 3.0 s
[00:39] bugs and blockers continues and the team
[00:41] is hard at work on multiple fronts to
[00:43] get these issues knocked out as fast as
[00:45] possible currently the dev team has been
[00:48] focused on clearing out the remaining
[00:49] blockers while our dev ops team is going
[00:51] through the process of repairing the
[00:53] build for distribution let's take a look
[00:56] at all the hard work that's gone into
[00:57] getting 3.0 ready with this week's burn
[01:00] down hello and welcome back to burn down
[01:02] our weekly show dedicated to reviewing
[01:04] progress on issues blocking the release
[01:06] of star citizen alpha 3.0 to the evocati
[01:09] last week we ended at 26 total must fix
[01:12] issues which was prioritized as 11
[01:13] blockers 10 criticals and 5 highs let's
[01:16] catch up with the team on how we're
[01:17] progressing as we approach release
[01:21] Aaron is very keen to try and go to a
[01:23] party this week so what we've done is
[01:27] severely cut down the PTM us fix list
[01:30] those 21 issues are the ones that we're
[01:33] going to focus on the main focus for
[01:35] this like initial push to evocati is
[01:37] going to be the experience of the first
[01:39] hour two hours or so the the directors
[01:43] and the executive took a really good
[01:45] look at what we wanted to do for our
[01:47] first release of a car to be because
[01:48] we're really keen on getting this out to
[01:50] to the evocati group and start for them
[01:53] to start testing things Jerry's probably
[01:59] Jerry shouldn't use right and labeled
[02:02] right and the time when I should be a
[02:04] chair so what I want is a very quick
[02:11] top-level view from the user of their
[02:14] group calling out like what kind of
[02:16] issues that the thing that I asked QA to
[02:18] do today in the Leeds meeting is I
[02:20] wanted them to just highlight the ones
[02:23] that they think are big evocati issues
[02:27] that aren't on this list and send that
[02:29] filter to you will recommend what we
[02:32] think out of the 13 issues that they've
[02:34] highlighted we think probably should be
[02:36] fixed I think there's one or two that we
[02:37] think you know it's probably worthwhile
[02:38] but Aaron it's for you to make that call
[02:40] and that you can let us know if you want
[02:43] to add them or not just simply guys look
[02:45] and only 20 bees will nourish needs of
[02:47] silver once you guys feel to be guess
[02:56] you take off good suppose like a stop
[02:59] but I do think if you get the fixing
[03:01] forum fully for the ATT market
[03:06] please just be careful each other yes
[03:09] don't just safety us and also just take
[03:18] care make sure you get a check and so
[03:19] for things because that costs us more
[03:21] time anything when the basic build race
[03:24] kills you hear it kills morning and then
[03:28] what for
[03:28] at least before that's a fine thing fix
[03:31] it might sound in my Dave don't go back
[03:32] sir
[03:33] we just need to make sure that were
[03:34] really careful when doing that stuff in
[03:36] that rather an extra hour
[03:38] make sure that's fixed and then China
[03:41] returns the next
[03:45] / today there was an issue where you
[03:47] spawn in in Levski and you can't get out
[03:50] of your easy hub room the door just does
[03:52] not open at all
[03:53] so we've knocked that one its head today
[03:55] this bug was this one here where the
[03:59] doors in the habitation pods in Levski
[04:01] weren't opening once the player spawns
[04:04] our animations and our assets are stored
[04:08] in separate places on perforce and we
[04:09] also have something called an inclusion
[04:11] list which is this guy here and this
[04:16] inclusion list has everything that's
[04:18] included 43.0 in it it just ensures that
[04:21] we don't include stuff this shouldn't
[04:23] win 3-0 the animations which are these
[04:26] guys here weren't on that inclusion list
[04:28] and it was a case of three clicks for me
[04:30] to fix which is my kind of bug we found
[04:33] these bug recently a few days ago where
[04:36] QA noticed that when we were trying to
[04:40] use the air traffic controller to land
[04:43] or take off in a specific station and
[04:45] you were not giving any landing pad
[04:48] assigned or your ship was not a spawned
[04:51] like nothing was really working as
[04:54] intended and so the main problem we had
[04:58] was that it was only happening on
[05:00] release builds testing locally on
[05:03] development builds from my computer or
[05:04] QA on profile builds this was fine we're
[05:07] checking it on the development build and
[05:09] it's easy it's a debug a lot of stuff
[05:12] because you can use a lot of Shiva's and
[05:14] just to get more information about the
[05:17] server about the client and what this
[05:19] particular issue was only present on
[05:21] release builds and so it's a lot harder
[05:24] to debug that information which men call
[05:27] us how to whitelist deceive us so we
[05:29] could use it I discover after going
[05:32] through the the logs was that one of the
[05:36] operators which is trying to answer you
[05:38] when you request a landing or takeoff
[05:40] was getting into a valid state and that
[05:44] was causing all the requests to go
[05:47] through the to the operator to just fail
[05:50] so he thought he could communicate with
[05:53] you but he couldn't we came in this
[05:55] morning
[05:56] and notice straight away we had a little
[05:59] bit
[05:59] problem in that the bill we were wanting
[06:01] to use for the day had a pretty severe
[06:03] crash in in a something we call data
[06:07] core which is kind of as the name
[06:09] implies where a lot of data is stored in
[06:12] the build relies upon so that meant that
[06:15] as soon as we booted the game you had
[06:17] about an eighty percent chance of
[06:19] getting a crash with that there wasn't
[06:22] work around for this but it didn't work
[06:24] for everybody so we we really had to
[06:25] make sure we fix that one up in shipping
[06:28] only release builds nothing seems to
[06:32] work
[06:32] none of the network messaging is coming
[06:34] in from the server you'll try to
[06:35] interact with the door nothing will
[06:38] happen you open your mobiie glass and
[06:40] nothing will happen just nothing at all
[06:43] and eventually you get disconnected from
[06:44] the server it turned out it wasn't quite
[06:48] as straightforward as we would have
[06:49] liked there was a few other edge cases
[06:50] we need to make sure that were they were
[06:52] working properly and you know all all
[06:54] the fixes worked through all the edge
[06:56] cases we eventually got there but it did
[06:59] slow down development a little bit
[07:01] another bug fixing which meant that
[07:03] certain people that couldn't use the
[07:05] workaround how to roll back to the build
[07:08] from the day before because of this
[07:09] server crash which we're still in the
[07:11] process of nailing down and should be a
[07:15] fixing for that as soon as possible
[07:18] once we've got a list of ships that we
[07:20] can check that are safe that aren't
[07:22] crushing the server then we can look at
[07:24] the ATC issue and and we'll just do that
[07:27] by spawning the same safe ships what
[07:30] that turned out to be was that when the
[07:33] player teleported a part of his his body
[07:37] and his attachments is loadout what kind
[07:39] of store attached to the seat so when
[07:41] the ship got D spawned everything else
[07:44] we get this bond that was attached to it
[07:46] including a low down so your character
[07:49] was fine on your local machine and on
[07:52] the Sailor because it was a bit of code
[07:54] that managed to detach your loadout from
[07:56] the sea but it wasn't triggering
[07:58] correctly on remote clients so I kind of
[08:01] investigated that bit and found out that
[08:03] it wasn't the network code that was
[08:06] responsible we needed that little bit
[08:07] that was going to detach
[08:09] and the load out from the seat so once I
[08:12] found out most pass it on to m1 or guys
[08:15] in LA when we have to replicate that
[08:17] across all the machines and on other
[08:20] clients what was happening is we would
[08:22] delete the ship and the teleportation
[08:25] call wouldn't get sent over to the
[08:26] client so we would end up deleting the
[08:29] player and the reason for that is if we
[08:32] pretend this cup here is the player and
[08:36] I'm the spaceship this cups parent is me
[08:40] so I for all intense purposes own this
[08:43] Cup if I get deleted or removed from the
[08:45] server
[08:45] so does this cup the only way to prevent
[08:48] the cup from getting deleted when I get
[08:50] deleted is to change the pairing so we
[08:53] need to make sure that that
[08:53] teleportation call gets sent all the way
[08:56] across all the clients so that this guy
[08:59] could teleport to the proper spot away
[09:01] from the vehicle and now when me the
[09:03] vehicle gets removed it's gone and
[09:06] pretty much that change was to make sure
[09:08] that we send this thing called a remote
[09:10] method so when we do the teleportation
[09:13] on the server it sends out a broadcast
[09:15] using a remote method to say hey
[09:17] teleport this guy and remove them from
[09:19] the seat and send them over there then
[09:22] we'll get the delete message the ship
[09:25] will go away the guys over there and
[09:26] well everything's fine and dandy
[09:28] the Vokes can be quite simple sometimes
[09:32] you know exactly what the cause is just
[09:33] as soon as you see the book it's just a
[09:35] question of tracking it down fixing it
[09:38] and others are a bit more complicated
[09:41] it's kind of like layers of an onion
[09:42] you've gotta peel away each layer and
[09:45] that use involves passed it on to the
[09:47] next person in the chain they peel away
[09:49] their layer eventually get down to the
[09:51] meat of the issue the the center of the
[09:53] onion and actually fix the book
[09:58] my team is responsible for digital
[10:01] publishing and with 3.0 imminent we've
[10:04] been doing a lot of work to enhance our
[10:07] systems and expand our capabilities and
[10:09] so I feel like we're ready to publish
[10:12] pretty much any time we get a selected
[10:17] build that's ready to go people know it
[10:19] comes with a lot of changes we just
[10:21] finished with amazing deployment for the
[10:23] time service and the shop service most
[10:27] probably by the end of today I'll
[10:28] receive that the configuration for the
[10:31] new probability service that also needed
[10:33] as part of 3.0 from Jason Healy and Tony
[10:35] Zurich with the introduction of any new
[10:37] service we always have to be ready for
[10:40] for all kind of quirks that available
[10:43] usually when he runs that the service
[10:45] and his machine to make sure it runs as
[10:47] expected he does not put on
[10:49] consideration how it would interact in a
[10:51] full release deployment we used to take
[10:53] way longer to receive specs and
[10:56] contracts from the universe services
[10:57] team and introduced it in the pipeline
[10:59] but with good use of macros and good use
[11:03] of certain batteries now we will be able
[11:06] to introduce a new service pretty easy
[11:08] than it used to be however that doesn't
[11:10] mean that introducing a new service is
[11:12] not a lot of work we still have to
[11:14] monitor it closely to see what kind of
[11:16] resources it would obtain what kind of
[11:19] work look you can put it through and
[11:21] once we get the crashes that the QA team
[11:25] is easily able to reproduce fixed the
[11:28] number of people that we have in the
[11:29] evocati and just the amount of strange
[11:31] and interesting ways that they can think
[11:33] of playing the game that we might not
[11:34] have thought of internally allows them
[11:37] to generate
[11:38] stability data that we might not know
[11:40] about provided that we get the build
[11:42] stable enough before we get it to them
[11:44] and since we value their time we want to
[11:46] make sure that the data that they're
[11:47] generating for us is actionable things
[11:49] that we can quantify and document and
[11:51] then get fixed before we release another
[11:53] build to them and our site as well
[11:55] whenever we have a large release like
[11:57] 3.0 we always like to make sure that we
[11:59] have enough room to add capacity no
[12:02] matter how many players we can get we
[12:04] are expecting a lot of players this
[12:05] release especially with the new patch
[12:07] our launcher the diff that should allow
[12:09] a lot of players and so many areas in
[12:10] the world to
[12:11] be able to match as often as you want
[12:13] was very little download sizes so we
[12:16] kind of took the initiative and I
[12:17] started playing with more regions than
[12:19] DWS to allow us to expand originally I
[12:23] came up with the stability score because
[12:25] I think in arena commander 1.3 the
[12:29] players were being really vocal about
[12:31] the fact that the game servers were just
[12:34] not stable and not fun because it was
[12:36] crashing so often and just because of
[12:39] the kind of person I am I like to help
[12:40] people I saw an opportunity for
[12:42] something that I could do that nobody
[12:44] else was doing so over time the goal is
[12:46] to reduce the threshold for what we
[12:49] consider a failure I actually based the
[12:53] stability threshold for what we consider
[12:55] a failure on the feedback that we got
[12:57] from our players in 1/3 oh and so
[13:00] anything that's considered better than
[13:02] that patch is considered a stability
[13:03] pass as time goes on I'm planning to
[13:06] steadily reduce the threshold for what
[13:10] we consider to be a passing grade so
[13:12] we'll have less crashes per person
[13:15] online per hour compared to what we have
[13:17] now because in order for people to get
[13:20] into some other really specialized parts
[13:22] of the game you'll have some people that
[13:23] may want to only do data running some
[13:25] people that may only want to do cargo
[13:26] some people that may only want to do fps
[13:28] and the problem with keeping things
[13:31] where they're at now is that those
[13:33] people are only going to encounter
[13:35] stability issues that have to do with
[13:37] the specific part of the games they like
[13:39] to play since we've honed in our focus
[13:42] on fixing major issues that impact
[13:43] traversal and navigation of our vast new
[13:45] universe we've made substantial progress
[13:47] on knocking out our remaining must fix
[13:49] issues for initial PT release to the
[13:52] avocado test group a spokes complete
[13:54] there must fix issues for initial
[13:55] release they move on to continuing to
[13:57] polish and bug fix more features that
[13:59] will be included in our next publish to
[14:01] PTU now at the time of filming this
[14:04] we've reduced our total must fix issues
[14:07] by 19 this brings us down to seven
[14:09] issues stopping this first release to
[14:11] the avocado group so tune in next time
[14:13] to continue getting an in-depth look at
[14:15] the road to the star citizen alpha 3.0
[14:17] release here on burned-down
[14:19] be sure to check back next week to see
[14:22] how much closer we are to getting 3.0
[14:24] into the hands of the evocati
[14:25] now let's turn our attention today's
[14:27] main feature the air traffic controller
[14:29] system so we knew early on that it was
[14:31] vital to build a system that could
[14:32] manage traffic at landing zones and
[14:33] space stations to help juggle both the
[14:35] players that we'll be taking off and
[14:36] landing but also the NPCs that will be
[14:38] coming through not only will the air
[14:40] traffic controller system help keep
[14:42] landing pads organized but the designers
[14:44] worked hard to keep the process as
[14:46] immersive as possible so let's take a
[14:49] look at what went into crafting this
[14:50] vital system and see how it will help
[14:52] keep you from landing a star fare on a
[14:54] landing pad that's way too small
[15:06] with the air traffic controller we have
[15:08] tried to get a feeling of realistic
[15:13] situation so when in real life when you
[15:17] have different planes coming to an
[15:19] airport do you need some kind of control
[15:21] you need rules you need a way of making
[15:23] sure everything is going to plan so we
[15:25] have been trying to to get the same
[15:27] behavior in star citizen so up to now
[15:30] when you approach an a station
[15:32] you just have to land and that was it
[15:35] now you have to request landing which
[15:38] implies a communication with someone and
[15:40] MBC which can be a real NPC or a
[15:43] automatic voice one telling you where
[15:47] you can land or if there's no space
[15:49] available or anything like that and
[15:51] that's also a control over how much you
[15:55] can stay in a landing pad like security
[15:59] measures and so on right now players can
[16:01] just land everywhere I want it's nothing
[16:03] controlling them there's nothing saying
[16:05] oh you should park here there's no
[16:07] there's no rules to that and we needed
[16:10] to find a system that basically
[16:12] coordinates landing taking off and also
[16:15] creating more immersion on what actually
[16:17] like flight controls are the concept
[16:19] behind our game is to be very realistic
[16:22] in what we do so we do a lot of research
[16:24] and anything that goes on and especially
[16:26] that definitely does not leave out the
[16:29] air traffic controller so we've done a
[16:31] lot of research into what air traffic
[16:33] controllers do when when we were on set
[16:35] when filming and pcap it you know it was
[16:39] it was really important you know because
[16:41] the game was really very much filmed
[16:44] like a movie and so as we as we went
[16:46] about tracking and trying to maintain
[16:48] and manage the content it was very clear
[16:51] that we needed to focus on the
[16:53] implementation side and use that as a
[16:55] way to track how the the pcap should be
[16:58] cut up in the way should be organized
[17:00] and so utilizing that that background of
[17:03] implementation I made sure that we
[17:05] tracked our pcap in a way that was
[17:07] ultimately feasible to edit edit the
[17:10] project and and and and actually track
[17:13] how how it was being cut up and on the
[17:16] on the editing board it's really a
[17:18] behavioral thing
[17:19] and so while we can record all the
[17:21] context and all the different dialogue
[17:22] that we want it really becomes you know
[17:25] really comes down to our systems to
[17:27] really be able to handle it and yeah our
[17:29] engineering team is just phenomenal they
[17:31] are really pushing the boundary of what
[17:33] AI can really handle and and making it a
[17:36] real systemic module of behavior so that
[17:40] it's not just like you know oh these
[17:42] guys do this thing or whatever it's it's
[17:44] a real air traffic controller module
[17:46] that that that's that's defining all
[17:48] these behaviors and and and it's not
[17:51] even just one voice it's defining the
[17:52] whole ballet of all the different you
[17:54] know people doing all the signals in
[17:56] there you know at AI saying oh they can
[17:58] go you have to take off or you can land
[18:00] and you go here you know all those kind
[18:02] of things that's it's it's it's a whole
[18:04] ballet if all these characters involved
[18:07] well one of the more complicated things
[18:09] is that it's not working like in in real
[18:12] life where everyone behaves us they
[18:14] should be right there's still a game and
[18:16] players do what they want sometimes so
[18:18] we need to make sure to have rules in
[18:20] place which allow players to actually
[18:23] have an immersive experience but also
[18:26] don't abuse other players as well and
[18:29] have like punishment almost when they
[18:32] not follow the rules we have to account
[18:33] for the necessarily stupid things like
[18:36] the player strafing the station or
[18:37] flying too close and you know they have
[18:40] to react in the way it's you know that
[18:42] is both helpful to the play good to know
[18:45] let's not do that but but it's also it's
[18:48] it's it's a game you know it happens and
[18:50] it's it's fun it's entertaining so every
[18:53] flight controller is its own AI when you
[18:56] hailing a tower to request landing or
[18:58] takeoff you're gonna be in contact with
[19:00] an actual sub sumption driven AI which
[19:03] has depending on the station unique
[19:05] voice lines or generic one and you will
[19:10] talk specifically only to that AI and
[19:13] that will give their response so there's
[19:16] an air traffic controller entity which
[19:18] is a combined version of the seats we
[19:21] already have and the usable system of
[19:23] the designers are working on and then
[19:24] they I will sit down and basically have
[19:26] sensors or feelers you could say to
[19:30] check how many ships are in the radius
[19:33] what ships request landing what pads are
[19:35] free what are occupied what are the
[19:37] different stations of occupation of
[19:39] these pads and will then according to
[19:41] that address landing pads to players
[19:44] there's a couple of peaceful ones for
[19:46] special stations like left ski or grim
[19:48] Hanks or Prada Lhasa and there's also
[19:50] like a generic one a generic computer
[19:52] system which also picks up if there's
[19:54] for whatever reason no flight operator
[19:57] available because our flight a brace
[19:59] actually like physically placed in the
[20:02] station so you could basically stand in
[20:06] the station see him talking to someone
[20:08] and whoever is on the ship would see the
[20:10] same thing so it's a one-to-one
[20:12] transition let's say that station gets
[20:14] attacked or that guy is out of an
[20:16] emergency or whatever is not there we
[20:18] have a backup system that picks up which
[20:20] is a generic computer voice and that
[20:21] will handle the flight operation them if
[20:24] you think about it we have a big amount
[20:26] of content to get you know and be like a
[20:28] big piece of cake you know the sponge is
[20:30] the primary the big part of what what we
[20:33] do but there's also cake needs some
[20:35] icing needs some flavor and so we like
[20:38] to you know have a general kind of voice
[20:43] set that that is used across the the
[20:46] galaxy and we also like to have some
[20:48] nice specific characters that are placed
[20:50] in locations and give a good flavor to
[20:53] certain things like for instance let's
[20:55] key we have it we have a general ATC but
[20:57] we also have this flight ops dude in
[21:00] unless key that's kind of like a
[21:02] California dude like me and he's a great
[21:15] character and he provides a lot of good
[21:16] character to that to that landing space
[21:18] and it's it's it's fun for players to
[21:21] enjoy that specific you know character
[21:24] set rather than having a just a big
[21:26] universe of always general you know
[21:29] characters running around so this a
[21:32] little bit more complicated on just
[21:34] triggering a voice and you need
[21:35] animations for an NPC because if you go
[21:38] to a specific place in the station you
[21:39] will see this NPC talking to someone
[21:41] maybe it's not you but he's talking to
[21:44] someone and you can see how he's
[21:45] communicating with other
[21:46] people we need to make sure this is
[21:48] synchronized in the network with
[21:51] everyone we need to make sure if
[21:53] different players are talking to the ADC
[21:55] ATC's air traffic controller you need to
[21:59] make sure that two people don't get the
[22:02] same landing area you need to make sure
[22:04] they are not told at the same time by
[22:07] the same pc because as real people they
[22:09] can only talk to one person at a time so
[22:12] there are several synchronization and
[22:15] network issues we have to consider while
[22:17] working on this we have had some
[22:18] challenges regarding for example the how
[22:22] do you control items our current system
[22:24] usually has like a priority system to
[22:28] control which NBC is in charge of a
[22:31] specific item so you can have for
[22:33] example in a ship wanna me see
[22:35] controlling the weapons while another
[22:37] NPC is controlling the ship but if the
[22:39] NPC controlling the weapons leaves the
[22:42] pilot takes control over the weapons
[22:44] things like that because of this system
[22:46] it was not easy to get the air traffic
[22:48] controller controlled by several NPCs at
[22:51] the same time without having one
[22:53] priority over the others so we have had
[22:56] to do different systems in code so one
[23:00] single ADC can be controlled by several
[23:02] operators at the same time since we're
[23:05] using the one-to-one transition like a
[23:07] live feed to that ai you're talking to
[23:08] you which was playing the animations
[23:10] that means only one a I can technically
[23:14] talk to one player at the same time so
[23:17] the particular challenge there was to
[23:19] get multiple ai's work together as a
[23:22] traffic control and true you could say
[23:24] and handle multiple requests at the same
[23:27] time and not get overlapped or like take
[23:30] requests of each other or portably
[23:31] interests the same player so that was a
[23:33] challenge we tackled with some ssin and
[23:36] the group activity behaviors we have to
[23:39] get them all working together in a nice
[23:40] slave fashion the typical air traffic
[23:43] controller is very much or at least for
[23:47] our system it's it's like an answering
[23:49] machine where you you know you uh you
[23:51] call up a company and you like okay now
[23:53] they gave me through getting a landing
[23:55] pad and what to do and then they they
[23:57] they they tell you how to okay you know
[23:59] okay we need money you know pay
[24:01] pay for this landing okay well you don't
[24:03] have enough credits you know but it's
[24:05] it's it's the answering service that
[24:06] that kind of takes takes that when we
[24:08] designed the system we looked at two
[24:10] things mainly one was like real life air
[24:14] traffic control at the airport or at
[24:15] military vessels like an aircraft
[24:17] carrier and the other thing was there's
[24:19] also a lot of flight simulations out
[24:22] there were like it's not really an MMO
[24:25] but you have actual people sitting in a
[24:26] tower and directing other people to land
[24:29] and take off and give like a landing but
[24:31] landing pads technically but yeah it
[24:33] gives more lifes to the station right it
[24:35] is some more people you talk to in the
[24:38] station and they actually have feedback
[24:40] for you and it's not always gonna be the
[24:42] same hopefully we have for like
[24:43] different variants for that the player
[24:51] has more interactions with the world
[24:53] itself instead of just having the ball
[24:56] giving everything to the player yeah I
[24:58] mean the air traffic controllers just
[24:59] it's just a great subset of what what we
[25:02] do here at cloud Imperium because it's
[25:04] it's just it's just the one many facet
[25:06] of all the different systems that we do
[25:08] and how we put you know everything into
[25:11] something so that's just a great example
[25:14] so another fun aspect of the air traffic
[25:16] controller system is that the person
[25:18] answering your landing request can also
[25:19] provide a little flavor to them at that
[25:21] location we've already done this with
[25:23] Eze lahmacun who's the atc at Levski his
[25:26] laid-back attitude is fitting for a
[25:27] place like Levski but will stand in
[25:29] contrast a more professional or more
[25:31] automated controllers located elsewhere
[25:33] in the verse and that's all for today's
[25:36] episode thank you to our subscribers for
[25:38] contributing each month to allow us to
[25:40] produce all our video content also
[25:42] subscribers September ship of the month
[25:44] is the Drake Herald so be sure to share
[25:46] your favorite images and videos of the
[25:48] ship in the subscriber done and of
[25:51] course thanks to all our backers for
[25:52] your support with what star citizen
[25:55] squadron 42 are trying to achieve just
[25:57] won't be possible without you your
[25:58] dedication to the game and efficient is
[26:00] greatly appreciated yes it is and until
[26:03] next week we will see you around verse
[26:14] [Music]
[26:37] thank you for watching so if you want to
[26:39] keep it with the latest and greatest in
[26:41] the star citizen a squadron 42
[26:42] development please follow us on our
[26:43] social media channels see you soon
[26:53] [Music]

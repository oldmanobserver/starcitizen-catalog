# Star Citizen: Around the Verse - Stamina and the Actor Status System

**Video:** https://www.youtube.com/watch?v=JdS8q2_d76o
**Date:** 2017-09-08
**Duration:** 40:05

## Transcript

[00:15] hello and welcome to another episode of
[00:18] around the verse our weekly look at star
[00:20] citizen's ongoing development I'm Sandi
[00:22] Gardiner and I'm Jeremiah Lee nice to
[00:24] have you here today on today's episode
[00:26] we investigate the new stamina system
[00:28] gameplay and learned how various actions
[00:31] will be affecting your avatar in-game
[00:33] but before we dive in let's focus on the
[00:35] most important action happening around
[00:36] the offices alpha 3.0 that means it's
[00:40] time to check in with eric kieron davis
[00:42] and the rest of the team for this week's
[00:44] burn down welcome back to burn down our
[00:49] weekly show dedicated for being progress
[00:51] on issues blocking the release of star
[00:53] citizen alpha 3.0 last week we ended at
[00:56] 94 total must fix issues which was
[00:58] prioritized as nine blockers sixty two
[01:00] criticals twenty one highs two moderates
[01:02] and note reveals so let's check in with
[01:04] the team to see how we're progressing so
[01:06] many things about three hours a moment
[01:08] as we're drilling down more on the 3d PT
[01:11] u /e became us fix issues tom my and
[01:15] pause well got some more triage that we
[01:18] still do we're aiming to get through at
[01:20] least the the criticals before we
[01:21] definitely signed off on going yeah
[01:23] these are the mas fix issues but in the
[01:27] meantime I'm aiming to send out an email
[01:28] to the team about the must fix issues we
[01:32] currently have those the ones we want to
[01:34] start working on in order to push
[01:36] forward for evocati so focus on those
[01:39] the thing about game development is that
[01:41] with bug fixing and particularly
[01:45] drilling down on the most fix issues
[01:46] that we now have is that like most
[01:49] things in life you can have good days
[01:50] and you can have bad days with stuff
[01:52] developers can have a really good day
[01:54] where they just pull it a thread of a
[01:56] bug you know something they've been
[01:58] working on for a little while and all of
[02:00] a sudden they kind of have that you
[02:01] reach a moment they pull on it and then
[02:02] everything else just unravels and it
[02:04] allows them to fix the next few bugs
[02:05] stacked up behind that on the flip side
[02:07] of things you can potentially have a
[02:09] really bad day where a features got a
[02:11] little bit further developers of a put
[02:14] some more fixes in giving it to QA over
[02:17] to testing and QA goes goes in and
[02:20] starts testing it and they can go well
[02:22] that doesn't work there's an issue here
[02:23] there's one there this one there or you
[02:25] can get
[02:26] issue again with a feature or anything
[02:28] really in that you can come up against
[02:32] one issue and then extrapolate that out
[02:33] and QA will just go and down the rabbit
[02:36] hole essentially and go right well if
[02:37] this doesn't work well how about if I do
[02:38] it like this and what happens if it do
[02:40] this and what happens there and then
[02:41] there you can end up from that one put
[02:43] just initial find you can end up with
[02:46] another six or seven bugs we noticed
[02:49] there are these occasional black flashes
[02:52] see one there in Graham Bartow so as we
[02:56] were going around we kind of family
[03:00] nurses that just as you approach these
[03:02] lights they get more and more extreme so
[03:05] what we're seeing here is actually it's
[03:08] usually the lens flare that's just
[03:09] spreading a problem out but what's
[03:12] usually happiness is something is
[03:13] divided by zero or it's taking the
[03:15] square root of a negative number or just
[03:16] something impossible and so having done
[03:20] one pixel wrong it then just just smears
[03:22] it all over the screen so you turn it
[03:24] off and there's just a little bit of
[03:26] it's still kind of visible and going
[03:29] right up to it I think the the depth of
[03:34] field starts picking it up as well but
[03:35] you can just see there are these tiny
[03:37] little lamb' tiny little stipple effects
[03:41] so when we know that the fog uses this
[03:43] sort of like jittered and like per pixel
[03:46] gesturing so this kind of matches the
[03:48] pattern so like we if you turn off fog
[03:52] it goes away so it's probably fog and
[03:56] what we realized is this is basically
[03:59] when it's doing the rectangular lights
[04:01] what it has to do is it has to at one
[04:06] point it takes the position that it's
[04:08] sampling and it finds the nearest point
[04:10] on the light near to it and then it
[04:12] tries to get the the direction to that
[04:13] so it's sort of subtracts the two
[04:14] distances and divides by that distance
[04:16] so if you've actually managed to sample
[04:19] it dead on the middle of light somewhere
[04:21] on the plane of the light it ends up
[04:22] with a zero it divides by zero it just
[04:24] screws everything so actually we just
[04:26] put in a very small fix
[04:33] yeah so literally just checking to see
[04:37] if it's 0 if it is 0 we just use a
[04:43] completely different factor that's it's
[04:46] not exactly the right back to that it
[04:47] should use but it's it's not visibly
[04:49] different so yeah it works last few
[04:54] weeks we've been working on some
[04:55] shopkeepers and the admin office worker
[04:59] is sort of like a general-purpose
[05:01] location or NPC we have whenever you
[05:04] need to deliver or pick up something
[05:06] from a location that has lots of kind of
[05:08] sub like like a station or a truck stop
[05:10] or something this will be a little a
[05:12] general point where it'll go there
[05:13] before it gets you know
[05:15] delivered out to where it's supposed to
[05:17] be in the station and as you can see we
[05:20] have one of our NPCs here who I just got
[05:24] some new animations from Dave over there
[05:26] which should hopefully fix this
[05:28] stretching to talk issue which has been
[05:31] cursing us from being able to test it
[05:34] properly or use it properly 43.0 we
[05:37] we're reworking the turrets for all the
[05:40] ships and not only with ships but also
[05:42] you might have seen it in the rover as
[05:45] well so with the turrets we've added the
[05:48] ability to you for the designers to
[05:53] define dead zones and active zones to
[05:55] control how fast the turret turns back
[05:57] and forth and then recently we've added
[06:00] a feature to have you get into a seat
[06:03] and have the turret rotate while your
[06:05] wallets getting ready for you to shoot
[06:08] at enemies or other penalties turrets
[06:11] are basically like a mini vehicle where
[06:12] they have seats in them and other sea
[06:15] components and so our existing code
[06:19] can't tell the difference between a
[06:20] currency and a ship seat and so it it
[06:24] just chooses whatever it finds first so
[06:26] we have to define no for this turret we
[06:29] want you to use the turret seas or for
[06:31] the ship we just want you to use the
[06:33] term we've got this year a ticket for a
[06:35] bug that you were randomly dying within
[06:37] visiting or outposts on one of our moons
[06:39] it happened in all of them so we had to
[06:42] open up the editor as you can see here
[06:45] and find out what the issue was and if
[06:48] you look here you see that we have these
[06:50] blue boxes I made them a bit higher than
[06:53] that posted for this example but this is
[06:56] the atmosphere that or well this is the
[06:58] box that contains our room system which
[07:00] contains atmosphere and actually air so
[07:04] you can breathe within our locations but
[07:08] as you can see there's a gap between two
[07:10] of them or between all of them well it
[07:13] should look like this
[07:14] because when they're not touching that
[07:17] means the air actually just goes nowhere
[07:19] which makes it like disappear in time so
[07:25] you would randomly die at different
[07:27] times because you wouldn't know when
[07:28] they are actually run side
[07:30] and that was that bug report with God so
[07:33] we found out that okay they're not
[07:35] connected we need to fix this issue our
[07:39] first solution was actually us to make
[07:42] all the rooms bigger to make sure they
[07:45] touched each other and as you can see in
[07:47] this example here but we soon realized
[07:52] like or well straightaway realize that
[07:53] that also means you can breathe outside
[07:55] you can technically stand on this window
[07:57] even though it's outside you can still
[07:59] breathe and survive without a helmet
[08:01] which also shouldn't happen because
[08:03] you're one of the moments that doesn't
[08:05] have air you can breathe so what we had
[08:10] to do was use their custom shape tool
[08:12] that lumberyard provides and actually
[08:16] make these shapes fit so they go out and
[08:20] extra bit where the door comes so the
[08:22] room still touch each other but they
[08:25] don't reach outside so you can actually
[08:27] not stand on the outside also being able
[08:30] to breathe at the time of filming this
[08:32] we've reduced our total must fix issues
[08:34] by 18 which brings us to 76 issues
[08:37] stopping this first release at the same
[08:39] time we've checked in a total 773 new
[08:41] updates to the 3.0 branch and now this
[08:44] week we've also made some more important
[08:46] decisions on what we'd like our first
[08:47] round of non CI G testers to help us
[08:49] evaluate as well as provide feedback on
[08:51] and keep polishing and fixing we're
[08:53] really going through this release with a
[08:55] fine-tooth comb making sure all of the
[08:57] new tech and features work harmoniously
[08:59] together so while we're all passionately
[09:01] working to knock out the mountain of
[09:03] blockers as matt said uncovering one
[09:05] thread may unravel and reveal a whole
[09:08] myriad of issues that we always hope
[09:10] will knock out more than one big issue
[09:12] at a time but putting my personal dreams
[09:14] aside as we're completing and polishing
[09:16] features those numbers are going to
[09:17] change and sometimes dramatically
[09:19] sometimes higher sometimes lower so come
[09:22] back next week to see how we're doing
[09:23] here on burned-down
[09:25] for a more detailed look at what bugs
[09:27] we've been smashing be sure to check out
[09:29] our 3.0 production schedule report which
[09:31] we update every week on our website now
[09:34] it's time to talk stamina the dev team
[09:36] has worked hard to build a robust
[09:37] stamina system that takes numerous
[09:39] factors in consideration to provide a
[09:40] more realistic experience for example if
[09:43] you
[09:44] into combat you'll discover that your
[09:46] aim will suffer due to the deep breaths
[09:48] being drawn by the character or worse
[09:51] that you don't have the stamina need to
[09:52] escape if the situation goes south
[09:54] creating a system that requires players
[09:56] to think strategically what their
[09:58] movements was one of the many goals that
[10:00] team had to tackle to see what else had
[10:03] to be considered when designing the
[10:04] system let's take a look at this week's
[10:07] feature
[10:17] the actor status system started the life
[10:19] as a much smaller piece which we're
[10:23] trying to figure out how to breathe in
[10:24] space how to breathe also how to
[10:26] suffocate in space how that works the
[10:28] initial implementation was a pretty
[10:32] dodgy thing we did just so we can get to
[10:35] zero out the door we're putting some
[10:38] kill triggers outside the airlocks just
[10:39] to make sure people don't walk outside
[10:41] in their t-shirts obviously people
[10:44] managed to do that because of our wall
[10:47] collisions not being 100% there and
[10:49] people ended up floating in space in
[10:51] their t-shirts not not such a good thing
[10:54] so eventually we started working heavily
[10:57] on the system but there were a lot of
[10:59] other things that had to come online
[11:01] before this system could actually be a
[11:03] fully functional the main thing that had
[11:06] to come online was our room system our
[11:09] room system defines the space of every
[11:11] room what the atmospheric composition is
[11:13] in each of these rooms and how air
[11:16] travels from one room to the other the
[11:18] other problem we had to deal with was
[11:20] how to how do doors opening and closing
[11:23] react to this our doors initially did
[11:26] not support this feature so we had to
[11:28] read or out all our all our doors all
[11:31] our airlocks elevators so that when the
[11:33] door opens it actually allows gases to
[11:36] travel from one one room and another the
[11:39] standard component defines a default
[11:41] seminar course the default seminary
[11:44] generation as well as the requirements
[11:46] to maintain optimal seminary generation
[11:48] on every breath the standard component
[11:50] queries the room system for the
[11:51] atmosphere composition and volume of the
[11:53] current room then replaces a fraction of
[11:56] the oxygen in the room with carbon
[11:57] dioxide and updates the seminary
[11:59] generation based on the amount of oxygen
[12:01] replaced if there's no oxygen in the
[12:04] current room there's no regeneration and
[12:06] the player has a limited amount of time
[12:07] before suffocating the stomach component
[12:09] in we were able to implement a life
[12:12] support system for the player to survive
[12:13] in space by turning the players helmet
[12:16] itself into a room so the Perito
[12:18] matically enter this room when equipping
[12:20] the helmet and the stamina system can
[12:22] maintain optimal regeneration because
[12:24] the room quays will always find the
[12:26] helmet
[12:26] we also added a guest purifier that
[12:29] removes noxious gases from the helmet
[12:32] including carbon dioxide and a gas tank
[12:35] that maintains the pressure in the
[12:37] helmet by feeding it oxygen when it
[12:39] comes to having no helmet on or simply
[12:42] having a helmet that does not have a
[12:44] breathing system you will be not be
[12:46] connected to your suit you will breathe
[12:48] whatever is available in the room and
[12:50] that will have some consequences
[12:52] especially when you get into places that
[12:55] either have low pressure or not enough
[12:58] oxygen in the atmospheric composition in
[13:01] the room or simply noxious or poisonous
[13:04] gases in the room so that will create an
[13:06] interesting gameplay and we're trying to
[13:08] make sure the player doesn't always keep
[13:10] his helmet on it should become fairly
[13:13] costly to keep a helmet on as this
[13:16] brings a lot of interesting gameplay
[13:18] possibilities to star citizen where you
[13:20] have to rush to to a suit locker get
[13:23] your suit quickly on because your ship
[13:25] is getting depressurized and there's no
[13:27] other way you either get to that suit or
[13:28] you die now the the main stem a consumer
[13:31] is the players movement well the player
[13:34] is moving their standard reins depending
[13:36] on stance equipment weight and movement
[13:38] slope so walking up the stairs is more
[13:40] expensive than walking down the stairs
[13:41] so basically every action the player
[13:43] does consume stamina if you're sprinting
[13:45] jumping crouching vaulting over
[13:47] obstacles that will consume stamina even
[13:50] idling consume stamina just on a very
[13:53] low scale compared to the other actions
[13:55] we want to encourage the player to think
[13:58] tactically when they perform actions we
[14:00] don't want them to just constantly run
[14:02] bunny hop everywhere we're trying to
[14:04] achieve a level of realism here
[14:06] basically people who constantly abuse
[14:08] their actions and not think about what
[14:10] they're doing will get punished while
[14:12] people who are mindful of every little
[14:15] thing they do will get an advantage
[14:17] consider yourself sprinting into combat
[14:19] for I don't know 30 seconds and when you
[14:22] get into combat you're so out of breath
[14:24] that you're just can't counter further
[14:26] for everyone else you're aiming will be
[14:28] really bad your recoil will be
[14:30] unmanageable if you won't even be able
[14:32] to get out of trouble because you don't
[14:34] stamina to sprint away from the from the
[14:37] mess you got yourself into so this way
[14:39] people who arrived fresh in combat will
[14:41] be way more effective effective than
[14:43] people who've just rushed there and yeah
[14:45] not too much walking instead of
[14:48] sprinting will still consume some
[14:50] stamina but your regeneration if nothing
[14:52] is wrong with your character like like
[14:55] chess room there's something like this
[14:57] they will still regen more than you
[14:59] consume where when you when you walk but
[15:02] you also have the option of completely
[15:03] stopping and when you completely stop
[15:06] then you get the maximum region because
[15:08] your character is not doing anything
[15:09] he's he's still consuming stamina
[15:12] because he's idling because we want to
[15:14] start consuming oxygen of the vir oxygen
[15:16] tank
[15:17] basically if you just idle in two hours
[15:19] in space you might run out of oxygen but
[15:22] if you sprint for ten minutes you might
[15:24] run out of oxygen it's the same because
[15:26] you start consuming way more the player
[15:28] abilities are the secondary consumers of
[15:29] stamina an ability consists of a type
[15:32] stamina requirement assembler cost and
[15:35] two check points in the game code saying
[15:36] okay this is where this ability starts
[15:39] and this is where it ends you can only
[15:40] access this part of the code if your
[15:42] stamina is higher than the requirement
[15:45] for it the cost can also be processed in
[15:48] different ways there is instant cost
[15:50] like for jumping or vaulting there's
[15:52] lasting cost like for sprinting and
[15:53] holding breath and there's also
[15:55] conditional cost which is instant cost
[15:58] that depends on what other abilities are
[16:00] running at the time and all that was
[16:01] good until well we added equipment
[16:03] weight into the mix jumping with heavy
[16:05] armor and the railgun in your back
[16:07] on Jupiter is a lot more expensive than
[16:09] jumping with a light armor on the moon
[16:11] so this meant all abilities suddenly had
[16:14] variable costs so the designers couldn't
[16:17] reliably adjust the ability cost to
[16:21] ensure the fair experience we fixed that
[16:24] by taking the remaining stamina into
[16:26] account instead of current stamina so
[16:28] instead of saying you need 20% stamina
[16:31] to be able to jump we are saying
[16:33] jumping is not allowed to drain your
[16:34] stamina below 10% to show the player
[16:37] status we are using different
[16:39] combinations of post-effects
[16:41] the problem is when several status
[16:43] conditions are using the same post
[16:44] effect like for example when bleeding at
[16:47] low health and those
[16:48] and all these conditions modify the
[16:50] brightness so we needed each effect to
[16:54] be noticeable enough on its own but also
[16:56] not go crazy when stacking with each
[16:58] other so implemented a centralized
[17:00] component that runs with customizable
[17:02] rules with a new implementation you can
[17:05] say for example all contrast modifiers
[17:07] after the first one have their strength
[17:09] reduced by 50% and together they can
[17:12] never exceed a certain value the buff
[17:13] system has been in the game for a while
[17:15] but we never really had a reason to use
[17:16] it extensively buffs are pieces of data
[17:19] that consist of a type a value and
[17:21] sometimes a time limit their purpose is
[17:24] to allow virtually anything in the game
[17:27] to modify the player status using a
[17:29] simple interface the actor but component
[17:32] receives all the buff requests and
[17:34] automatically stacks the buffs of the
[17:36] same type together and broadcast the new
[17:39] value over the network bleeding is
[17:41] implemented as a debuff in game right
[17:42] now when a body part takes damage it
[17:45] applies a stack of bleeding with a value
[17:47] of 1 that means the player will take 1
[17:49] damage per second from bleeding taking
[17:50] damage the other body part applies an
[17:52] additional stack of bleeding so the
[17:53] player will now bleed for 2 health every
[17:55] second healing one of these body parts
[17:57] will remove the corresponding buff the
[17:59] buff component together with the stamina
[18:01] health breathing abilities ng force
[18:03] components make up what we call the
[18:05] actor status system we use it to change
[18:08] the gameplay experience depending on
[18:10] what happens to the player so for
[18:12] example in the new version 3.0 well
[18:15] taking damage to the arm will affect the
[18:16] player's combat abilities like recoil
[18:18] and weapons way damaging the legs will
[18:21] affect navigation reduce the movement
[18:23] speed and increase the seminole cost for
[18:25] jumping and sprinting damaging the torso
[18:27] will decrease your stamina pool and
[18:30] regeneration running out of stamina or
[18:33] pulling too many G's will make the
[18:34] player pass out and so on one of the
[18:37] important things for us was that the
[18:39] player understands what is happening to
[18:41] them just having stamina there is not
[18:43] enough the player constantly needs to be
[18:45] aware by looking at his screen what
[18:48] condition the character is and we had to
[18:51] employ a lot of smaller tricks in
[18:54] getting the player to figure out oh I'm
[18:56] running out of breath I should stop a
[18:58] bit catch my breath or oh my oxygen
[19:01] is out so we had to go add a lot of
[19:04] visual effects on the screen when you're
[19:06] running out of breath we had to add a
[19:09] lot of audio breathing we had a lot of
[19:12] animation additives happening to the to
[19:16] the player we had to affect the players
[19:18] aiming moving up and down with every
[19:20] breath it's also a lot of UI work that
[19:23] had to go into this to tell the player
[19:25] what's going on at every every stop step
[19:29] of the way
[19:29] on your visor you get information about
[19:32] what's in your suit what what's your
[19:35] condition how much stamina do you have
[19:37] what's in your suit
[19:38] what what's in your tank what's in your
[19:39] suit what what your stamina is but if
[19:42] you want informations about the outside
[19:44] then it's the mobile apps right now that
[19:46] gives you all the information about the
[19:48] room that you are in my role based on
[19:51] the system was to outline the sound
[19:54] design elements of it speaking with
[19:56] design and codes and animation and
[19:58] basically coming up with a sound design
[20:00] system that would be able to play
[20:03] breathing sound effects in relation to
[20:05] what the actors act the state system was
[20:07] doing I work closely with you and Braun
[20:09] use one of our audio programmers and
[20:11] together we kind of start to build this
[20:13] system be able to give audio feedback to
[20:16] what the actors state system is doing so
[20:17] the player can have here's what the
[20:19] player character is doing e audio
[20:22] component drives the animation of the
[20:24] character for therefore the breathing
[20:26] that is going to sink so the audio will
[20:29] sync with the actual animation of the
[20:30] character breathing and also on the mobi
[20:32] glass you've got the heart rate monitor
[20:33] and we will be syncing with that as well
[20:35] so heart rate breathing rate will all be
[20:39] in the sink it's all driven from the
[20:40] same system the first step for me was
[20:42] doing better research to find out what
[20:44] breathing styles we're going to need and
[20:47] the relative speeds and characteristics
[20:49] so I thought the best thing to do was to
[20:51] record myself I rather than getting some
[20:54] talent in because I didn't know if it
[20:55] was gonna work and what I did first of
[20:57] all is set up a tempo mat I decided to
[20:59] go along and just record myself at
[21:01] different beats per minute bpm so we
[21:03] started it 20 beats a minute and then
[21:05] every couple of hours I increase the
[21:07] speed by 5 bpm so arranged from 20 BPM
[21:10] ups 119 BPM so in that actual time we
[21:14] from a three-second inhale and
[21:16] three-second exhale up to a point three
[21:19] of a second
[21:20] inhale and point 3 of a second exhale
[21:22] which is really really fast so I a lot
[21:25] of fun calling that the the benefit of
[21:28] recording to the tempo map is you've got
[21:30] a lot of variation and you've got a lot
[21:32] of assets that very very quick however
[21:34] the downside was I didn't realize how
[21:36] breathing rapidly without needing to how
[21:39] much I could measure well I did nearly
[21:41] pass out a couple of times at the upper
[21:42] end of the BPM scale fortunately did and
[21:45] once I got enough material what I did is
[21:47] I had edited all together so I split all
[21:50] the inhales and all the exhales for the
[21:52] specific BPM and then bounced them all
[21:54] out of Reaper so I had individual inhale
[21:56] assess and exhale assets the actor
[21:59] stated system sonically consists of
[22:02] three main elements so you've got the
[22:04] breathing styles which the different
[22:06] types of breathing then we've got the
[22:09] grunts and vocalizations and then we've
[22:11] also got the SFX support so that's like
[22:14] sound effects relating to your suits
[22:16] like alarms and my UI elements to fight
[22:19] that currently we have 13 breathing
[22:21] styles that will most likely increase
[22:24] that's currently split across two Suites
[22:26] so we've got a breathing suite full FPS
[22:29] so we're just running around so we also
[22:30] have a breathing suite for piloting
[22:31] because in those two different
[22:33] situations you will be using different
[22:35] styles of breathing so in FPS you'll be
[22:38] having normal breathing recovery
[22:40] breathing when you're fatigued taking
[22:42] damage and injury but then when you're
[22:44] piloting we use specific breathing
[22:46] styles for that situation one of them is
[22:49] called a GSM which is anti g-force
[22:52] straining maneuver also known as the
[22:54] hick technique and it's a technique
[22:55] eyelets used to stop passing out over
[22:58] high G's
[22:59] it kind of like the force my boss their
[23:01] blood pressure to remain high in like
[23:03] their head and stuff like that it's when
[23:05] you're pulling really high G's you start
[23:07] here and going
[23:09] what's loads of reference material and
[23:11] that the kind of that the stresses and
[23:13] strains and pilots put themself through
[23:14] is insane though the game actually calls
[23:18] discreet inhale and exhale
[23:20] triggers just great the love of modality
[23:22] we've got is brilliant so the active
[23:24] state system and the audio component in
[23:26] and pass particular values in relation
[23:29] to stamina Oh to health even like
[23:33] composition of the oxygen and the
[23:36] atmosphere in the room that feeds into
[23:38] audio components which are control
[23:41] through fired a torch there's a day
[23:43] forward record that I can control the
[23:45] breathing Suites the breathing styles
[23:48] and all the conditional transitions and
[23:50] through that I can dictate which
[23:52] breathing style is played at a certain
[23:54] time and how that breathing style
[23:56] correlates to the values that are being
[23:59] passed from the active state system so
[24:00] the actual audio exists in wise which
[24:03] are audio middleware tool with this is
[24:06] what the third currently 13 different
[24:07] styles are breathing they're all live in
[24:09] their own discreet actor mixer hierarchy
[24:12] within that action mixer there's a blend
[24:15] container which contains inhales and as
[24:19] a blanket a no that includes exhales so
[24:21] uniquely be triggered independently one
[24:24] after the other and within that they
[24:26] each have a range of random containers
[24:29] ranging from the 20 bpm all the way up
[24:31] to 190 bpm and then the blown containers
[24:34] actually respond to an RTP C which is a
[24:36] real-time parameter control which takes
[24:39] values from the actors data system and
[24:41] the audio component and that selects
[24:43] which of the BPM breaths it should play
[24:46] ah then the game calls the the play
[24:49] trigger which is like play breath inhale
[24:52] or prey play breath recovery exhale it
[24:56] triggers it from wise and that's what
[24:58] you hear in the game the the animation
[25:00] for the breathing is driven off date
[25:03] forward record and you control the
[25:05] controller curves of the breathing which
[25:07] can influence the curves of the
[25:10] animation for audio it represented a
[25:12] unique challenge for us because normally
[25:14] we're at the end of the stream but
[25:16] downstream process normally everything
[25:18] gets done we put audio to it this is the
[25:20] first time I've ever worked on a system
[25:23] where audio drives another feature so
[25:25] audio is actually driving animation so
[25:27] we have to make sure we sync with
[25:28] animation very closely because normally
[25:31] our footprint is post it's never
[25:34] normally it directly impacts the input
[25:36] of another department have
[25:37] after singer you can't have a breathing
[25:39] and breathing going in and out and the
[25:42] animation going out and in always
[25:44] involved with the breathing animations
[25:46] the procedural breathing animations and
[25:47] so making the players arms and chest
[25:50] move up and down a series and and mostly
[25:53] focusing on going in sync with the audio
[25:55] and getting the feedback therefore the
[25:57] player once they're tired or exhausted
[25:58] so the system itself is fairly complex
[26:02] in the backend there's a lot of sort of
[26:03] variables involved in a lot of different
[26:05] states and levels to it but from the
[26:08] players point of view we try and keep as
[26:09] simple and easy to read as possible
[26:11] because obviously it's it's all about
[26:13] player feedback of it and being able to
[26:14] see all I'm tired oh I'm exhausted and
[26:17] it's slowed down about need to stop
[26:18] discern myself and sort of communicate
[26:19] match them sort of simply and easily
[26:21] while also having the complex here at
[26:23] the backend system and having these sort
[26:25] of more advanced systems and behind that
[26:26] it doesn't saw you down but it will tell
[26:29] you that you're more tired and you won't
[26:31] be if you're running along you won't run
[26:33] slower but you'll run heavier and the
[26:37] audio will get more intense you'll
[26:38] breathe heavier your arms will move more
[26:40] and I'll have more of effect of when
[26:42] you're trying to aim at someone if
[26:43] you're exhausted your aim is gonna be
[26:45] all over the place
[26:45] and obviously this is quite a it's
[26:48] fairly subtle at the sort of normal
[26:51] standard levels and you wouldn't really
[26:52] know so that's the whole point in the
[26:53] breathing system if you're doing things
[26:55] normally you don't notice your breathing
[26:56] and that's only when you're probably
[26:58] exhausted when you've really been
[27:00] exerting yourself and he will go
[27:01] vertical no your pant in your arms are
[27:04] moving about your chest is heaving and
[27:06] you'll be exhausted from the breathing
[27:08] animation point of view the primary
[27:10] feedback for the breathing that's the
[27:11] audio that's the thing normally in games
[27:13] that you hear yourself breathing that's
[27:15] how you know you're tired the main thing
[27:16] was getting the animations to match up
[27:18] with for sodium we can't use just a big
[27:20] kind of nation because the breath
[27:21] lengths are different you breathe deeper
[27:24] or shallower a long bridge the deep
[27:26] breaths take short rest so we couldn't
[27:28] we thought about maybe having animations
[27:30] captured and then blending between them
[27:32] and lensing them or shorten them and
[27:34] then we had to go procedural and the way
[27:36] we did always we've got curved it and
[27:37] that comes directly from my after or
[27:39] from the animators till we pull that
[27:40] into their forge via script that was
[27:42] running they're all paused and in the
[27:43] Arabic and then that day is then read
[27:44] the game and it can be played by because
[27:47] just to speed over our own times
[27:48] obviously I'd Stadio tells us this is
[27:50] going to
[27:51] your next breath we go that's how long
[27:53] that mission has lost and also ties into
[27:56] the imposed system and so an lumberyard
[28:00] you've got our name pulls over top the
[28:02] player which determines where he's
[28:03] aiming and so that plays on the best
[28:05] that by the last layer it plays on the
[28:07] animation and that points the gun where
[28:09] he's looking am I just some F he's
[28:11] looking straight up that points the gun
[28:12] shop if he's looking down he looks
[28:13] straight down and then obviously
[28:15] suggested four different weapons and
[28:16] maybe eight different pavatt points and
[28:18] such using the procedural animation we
[28:19] can put it over the top of the impose
[28:21] and so if you're looking up you breathe
[28:23] correctly over there a direction and it
[28:25] all and works smoothly and it works not
[28:29] intrusively as we started only with a
[28:32] breathing system we were we thought our
[28:35] job is mostly done but eventually we are
[28:37] asked whether we can add the GeForce
[28:39] system to go through the same process
[28:42] because it's basically just forces
[28:45] acting on the player and causing various
[28:46] good or bad conditions on the player so
[28:49] the current GeForce simulation the the
[28:51] one in the live version right now is
[28:53] very accurate it's very realistic it
[28:55] goes as far as simulating how the human
[28:57] body naturally adapts under the effect
[28:59] of g-forces however moving forward we
[29:01] need a more generic simulation that
[29:03] works with any type of entity in any
[29:05] context not only human players piloting
[29:07] a ship and we need it simple enough to
[29:09] be able to run on all entities at all
[29:11] times for example we need unsecured
[29:13] cargo to fall over when the ship
[29:15] accelerates our new solution monitors
[29:17] the accumulated velocity of the entity
[29:18] and all the physics grids they are are
[29:21] inside of so we take the linear and
[29:23] angular velocity of the entity
[29:24] transformed them into the parent space
[29:26] and add the parent velocities and
[29:29] transform them into the parent space and
[29:32] so on until there's no parent and then
[29:34] we can track any change in the
[29:35] accumulated velocity any change in
[29:37] velocity means acceleration and
[29:39] acceleration means g-force this kind of
[29:41] became the birth of the actor status
[29:44] system which is a larger unifying system
[29:46] kind of brings together every little
[29:49] thing that can happen to the actor to
[29:51] the player or to other characters so we
[29:54] wanted that all the effects that appear
[29:56] on the screen of all the things that
[29:58] happen to him go through the same filter
[30:00] as
[30:01] don't want them to conflict with each
[30:02] other if we would have made separate
[30:04] system for for every little thing that
[30:06] can happen to the player let's say he's
[30:08] hungry or he's thirsty
[30:10] or he is affected by g-forces or he's
[30:12] out of breath each of those would have
[30:14] conflicted with with the other and that
[30:17] would have been a nightmare for all of
[30:18] us so that's why we had to unify and
[30:20] this became the actors data system it
[30:23] seemed to take off and every single idea
[30:26] from how the player reacts to g-force
[30:29] and exhaustion and being able to do
[30:32] abilities like jumping and jumping over
[30:34] ledges are all affected by this we've
[30:36] got at the grunts and the other zones in
[30:38] his dialogue only to interact with the
[30:40] breathing so it's becoming rather
[30:42] complicated so I've set up a system in
[30:45] the code to to link quite a few
[30:48] different systems
[30:48] the lungs of the players are how he
[30:50] animates and how that affects the the
[30:52] warble of the gun needs to be driven by
[30:54] the breathing and that needs to be in
[30:56] sync with the audio that we've provided
[30:59] the challenges we had were you know we'd
[31:01] start off with something simple and it
[31:02] would work fine for one scenario so we
[31:05] basically just try sprinting and and
[31:08] when you stop sprinting it quickly
[31:11] became apparent that it didn't sound
[31:12] very little realistic so he just quickly
[31:14] start breathing at a normal speed and
[31:17] and we would expect him descend
[31:19] exhausted for a lot longer so to find
[31:21] general of that to how long it takes to
[31:23] recover and how he sounds ways when he's
[31:25] recovering later on to need styles of
[31:27] breathing so that one boys their
[31:30] recovery stellar breathing so when you
[31:31] send exhausted he deeper longer brace
[31:34] until you've recovered I set up a system
[31:36] using our usual user interface for the
[31:39] dev team data Forge and we started off
[31:41] with just basically it looks like a
[31:43] table of numbers and parameters for the
[31:45] different ranges of breathing speeds and
[31:48] lung volumes that would need to be taken
[31:50] in to give the player the amount of
[31:52] oxygen back into his system to make him
[31:54] recovery stamina which is you know vales
[31:56] miracle of the breathing given the
[31:58] amount of oxygen in the atmosphere or
[31:59] the room we calculate um how much
[32:01] stamina you can regenerate so for each
[32:03] breathing style we tend to have a Bezier
[32:07] curve to make it possible to fine-tune
[32:09] the amount of time of these go or needs
[32:11] translates into how fast these needs to
[32:14] breathe or how deep
[32:15] mr. brief quickly from lair realized we
[32:17] had so many different styles of
[32:18] breathing like when you're injured or
[32:20] recovering from exhaustion or piloting a
[32:23] ship and experiencing high g-force the
[32:26] transitions between these became so
[32:28] complicated to manage we couldn't just
[32:29] do a straight interpolation in between
[32:32] each one I set up a new thing which we
[32:34] termed a breathing suite so that was a
[32:37] flow graph set up they joined them all
[32:39] together with with different transition
[32:41] nodes and the transition itself we'd
[32:43] have a flexible number of conditions
[32:45] that would make it follow the different
[32:47] parts of the flow graph to a different
[32:48] style so we've expanded that with so
[32:51] many parameters like checking the health
[32:52] or the stamina or the g-force or whether
[32:56] you're blacking out and we can get it to
[32:58] react in in so many ways that make it
[33:00] sound realistic that I think we've got
[33:01] more than 14 different styles and it
[33:05] really gives the player a feeling that
[33:07] that's something realistic is happening
[33:08] so the active status system in general
[33:10] attracts a whole lot of variables things
[33:12] like exertion you have stamina of course
[33:14] and that all ties into the room system
[33:17] which has oxygen but you know a room may
[33:19] not have just oxygen has other things
[33:21] you know might not have full pressurized
[33:24] atmosphere so it's important for the UI
[33:27] to sort of communicate state of your
[33:29] surroundings are you know so what kind
[33:33] of oxygen is present and your current
[33:36] atmosphere basically so if you go into
[33:38] an airlock and you know you depressurize
[33:41] then your oxygen tank won't refill
[33:43] anymore
[33:44] or if you're on a planet with low oxygen
[33:46] or there's a low atmospheric pressure
[33:48] then you know that your oxygen tank
[33:50] probably wouldn't we feel as quickly the
[33:52] would in a regular atmosphere one of the
[33:55] big things that we that we tracked in
[33:56] the UI is as basically an ECU graph
[33:58] which is an indication of your stamina
[34:00] so if you run up a flight of stairs or
[34:02] you know you sprint for a long time then
[34:04] you obviously see your heart rate going
[34:06] up your ECG graph getting a bit more
[34:08] intense so then that kind of lets you
[34:10] know that you're exerting a lot of
[34:11] energy and you're maybe take a rest if
[34:13] it's getting too high so it's very it's
[34:15] it's cool because it's not like exact
[34:18] value that you're saying it's a bit more
[34:19] indirect just kind of cool and then you
[34:21] know it's a nice visual in terms of the
[34:23] UI as well
[34:24] this is display on your mobile glass and
[34:25] we're also going to be displaying on on
[34:27] vizor as well so I mean obviously and
[34:29] kind of a very important piece of
[34:31] information that you pretty much want to
[34:32] have most of the time and be available
[34:35] to you at all times we have it in the
[34:36] hood but there's additional information
[34:37] in the lovely glass that we have I was
[34:39] the another good thing to know about
[34:41] actor status is what is the state of
[34:43] your surroundings so in your immediate
[34:47] atmosphere because you know you can go
[34:50] in and out of rooms different planets
[34:52] might have different atmospheres
[34:54] different atmospheric pressures
[34:55] different atmospheric compositions and
[34:58] not all affects how quickly your gas
[35:01] tank would refill let's see if you're
[35:02] running low on oxygen or something you
[35:04] want to refill it or whether or not it's
[35:07] safe to take off your helmet or not you
[35:09] can pull up your mobile glasses to see
[35:11] kind of like in that movie the Martian
[35:13] where it's checking its status for
[35:16] planning ahead this will be only
[35:18] dependent on the tools the players have
[35:21] we want to give them the most basic tool
[35:24] which is the mobi glass to just check
[35:25] what is available in their room right
[35:29] now but they might have access to some
[35:31] better equipment which gives them they
[35:33] can scan two three rooms ahead or look
[35:35] at the door and go what's on the other
[35:37] side that will help them choose whether
[35:40] they open a door whether they don't also
[35:42] on the doors the the refactoring of the
[35:44] doors we have indicators now that what
[35:47] the conditions are on the other side you
[35:49] always get the warning there will be a
[35:50] red light if something's wrong on the
[35:52] other side you will not be able to you
[35:54] will be able to but it's your concert
[35:57] it's your problem if you just want to
[35:59] open a door to outer space it's but the
[36:01] game kind of gives you the information
[36:03] it's up to you to whether you use it or
[36:06] not and you will suffer the consequences
[36:07] if you don't work on the actor status
[36:10] system will not stop here this will be a
[36:12] long ongoing process of adding multiple
[36:16] things to the conditions that can affect
[36:18] the player we're talking here from small
[36:21] little things of basically getting
[36:23] poisoned from whatever's in the room to
[36:26] getting drunk needing to go to the
[36:28] toilet all the little things that can
[36:31] affect the player temporarily and then
[36:33] we can expand this to go even to stuff
[36:37] like long-term diseases
[36:39] and all kind of depressurisation
[36:41] sickness radiation sickness and all
[36:44] these things that won't be something
[36:46] that the player can get rid of instantly
[36:48] they will have to go find the medical
[36:51] specialist in the game that can treat
[36:54] those things and that treatment might
[36:55] take a while we'll have to see how do we
[36:57] implement that but the possibilities are
[36:59] pretty pretty large here the an ultimate
[37:02] goal for the actors data system is to
[37:04] have the blue have it support multiple
[37:06] races as they get introduced into star
[37:09] citizen and world players will have to
[37:12] be aware that certain races breathe a
[37:14] different atmospheric composition when
[37:16] they enter their ships and their
[37:18] territory they need to be aware that you
[37:19] cannot just remove their helmets and if
[37:22] they have to deal with these races as
[37:24] and transport them across the universe
[37:25] they have to cater for those races needs
[37:29] they can't just shove them in a place
[37:32] full of oxygen they might not like that
[37:33] they might simply suffocate or they
[37:35] might have at first conditions to
[37:37] certain chemical elements that you must
[37:39] just love there needs to feel really
[37:40] nice too you need to be aware of every
[37:42] little thing that's happening in the in
[37:45] the world you need to be aware of this
[37:48] room might be completely the pressure
[37:50] right that's the pressurized that's why
[37:51] we give the player tools they have the
[37:54] mobile glass app that they can use to
[37:55] check oh this has 0.1 poisonous gas this
[37:59] does not have enough pressure this
[38:00] oxygen is too much here rather than just
[38:03] too little and you might have a
[38:05] hyperoxia problem of if you breathe that
[38:08] for a lot of time so it's it's just
[38:11] players need to be aware we give them
[38:13] the tools to be aware of the environment
[38:14] but they need to check and make the
[38:17] tactical decisions and the good choices
[38:19] whether that allows them to survive or
[38:22] not
[38:23] as you saw stamina is but one component
[38:26] and the actor status system combining
[38:27] stamina with these other factors like
[38:29] health and g-forces makes your avatar
[38:31] feel more like a real person not just a
[38:33] game character yeah this new system also
[38:35] creates a lot of interesting new
[38:37] gameplay scenarios players must consider
[38:39] how the armor they're wearing or rooms
[38:42] atmosphere condition might affect their
[38:44] stamina decisions like that will help
[38:46] make the game feel more immersive well
[38:48] that's all for today's episode thanks to
[38:50] our subscribers it's because of you that
[38:52] we can produce
[38:53] all our shows and provide constant
[38:54] updates for the community September
[38:56] subscriber flare will be released on
[38:58] Friday so be sure to keep an eye out for
[38:59] it very cool and finally a big thanks to
[39:03] all of our backers for their support
[39:05] until next week
[39:07] we'll see you around the doors yes I
[39:10] nailed it thank you for watching so if
[39:45] you want to keep it with the latest and
[39:46] greatest in star citizen a squadron 42
[39:47] development please follow us on our
[39:49] social media channels
[39:56] you
[39:58] [Music]

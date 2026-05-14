# Squadron 42: Around the Verse - The Living Idris

**Video:** https://www.youtube.com/watch?v=CP_GTmqs2Zg
**Date:** 2018-02-22
**Duration:** 32:04

## Transcript

[00:12] hello and welcome to another episode of
[00:15] around the verse
[00:16] I'm sandy Gardner and I'm Josh Herman
[00:18] this week's episode features our
[00:20] squadron 42 project update for February
[00:23] we'll get a look at the complex AI
[00:25] systems being implemented in the game
[00:27] using the massive crew of the idris
[00:29] frigate as an example but first we'll
[00:31] get a check in with the developers
[00:33] that's right let's go to Phil Miller now
[00:35] for a rundown on what the squadron 42
[00:37] dev teams have been up to everyone a
[00:41] film L early designer squadron 42 with
[00:43] this one's project update so I'll kick
[00:45] off with a techy stuff while you're all
[00:46] still fresh the programming team has
[00:48] been looking into issues that affect the
[00:49] performance of the game looking into
[00:52] various ways we can optimize the code to
[00:54] make the game run better the driving
[00:55] force behind this is to help speed
[00:57] things up for the PD release but because
[00:59] we have a shed codebase it means that
[01:00] almost all those optimizations still
[01:03] often help best 42 at the same time
[01:04] first 42 the biggest wins with the
[01:06] animations and skeleton updates some of
[01:08] the best optimizations involve
[01:10] discovering where the code is updating
[01:11] items when it really doesn't need to to
[01:13] help with our detective work our lead
[01:15] animation program at Evo hurtak at its
[01:17] debug rendering that enable it's the
[01:18] more easily visualized objects in the
[01:20] world they were having their skeletons
[01:22] updated every frame that enable is to
[01:25] see what was being updated by not
[01:26] actually animating the debug feature
[01:28] drew boxes around anything with a
[01:30] skeleton with different colors
[01:31] indicating different issues this allowed
[01:34] the feature teams have put in changes
[01:35] that made the items a bit smarter about
[01:37] how they tell our system when the items
[01:39] need to get updated we also put in
[01:42] additional debug information to show us
[01:44] when skeletons were getting updated but
[01:45] weren't even visible basically doing a
[01:48] lot of additional work but you'll never
[01:49] see and gain from this information the
[01:52] teams will be made aware of when this
[01:54] was happening and changed the code to be
[01:55] more aggressive about when they need to
[01:57] update downside to this is that it can
[02:00] cause some cons especially when Cynthia
[02:02] off-screen does actually need to animate
[02:03] but because you can't see it it doesn't
[02:07] it's not coming but these situations end
[02:09] up as a jail for our QA team playing the
[02:12] levels of Fanny Willis situation
[02:13] where the animations have broken and
[02:15] getting the teams to fix them up one by
[02:17] one as always we constantly look at old
[02:20] component updates make them more batch
[02:22] friendly as well as weeding out the
[02:23] other sections of slow code and with a
[02:25] view to making them more efficient we've
[02:28] also been working on object container
[02:29] streaming the eventual aim project
[02:31] container streaming stew allows the CMC
[02:33] load and unload past the solar system as
[02:35] plays move around that will allow us to
[02:37] greatly increase the amount of content
[02:38] within the solar system without
[02:39] increasing memory or CPU usage as only
[02:42] the past are relevant to you will be
[02:44] present in memory on your machine
[02:45] obviously this all needs to occur
[02:47] without stalls
[02:48] or loading screens the focus this coin
[02:50] I'm making the entity system code
[02:51] thread-safe so we can safely spawn
[02:53] entities including creating components
[02:55] and loading resources such as geometry
[02:56] and textures from background threads
[02:58] this is super important as we will leave
[03:01] the stores that currently occur when NC
[03:03] spawn into the game for example when you
[03:06] currently request a vehicle spawn at
[03:07] present we have over 450 individual
[03:10] entity component implementations
[03:11] everything from gang code such as
[03:13] weapons and vehicles to the more behind
[03:15] the scenes things such as the network
[03:16] component we are working through the
[03:19] list checking the fixing every single
[03:20] one to make sure there they are all
[03:21] fully thread safe once this pass is
[03:24] complete we can move on from single
[03:26] entity spawns to entire object
[03:27] containers loading in the background now
[03:29] what's the mobi class as you all know as
[03:32] 42 is going to have its own military
[03:33] version of the device we've been downing
[03:35] in the look at the UI the visual
[03:38] elements of the reskin have been
[03:39] referenced from real world military
[03:40] heads and cinematic sci-fi references to
[03:43] further immerse the player into the s 42
[03:44] universe lastly vital data has been
[03:48] visually prioritized and improvements to
[03:49] the navigation system add up to a better
[03:51] user experience going into the address
[03:54] where we do spend a lot of time in s 42
[03:55] you continue working on animation a
[03:57] setup for Duncan chakma the master of
[03:59] arms in the armoury area of the ship
[04:01] good to see you again lieutenant with
[04:04] the primary focus the best point to
[04:06] being the fluid cinematic tactile feel
[04:08] chris roberts showed a whole variety
[04:09] performs capture footage for the army so
[04:12] when you get or return a weapon or
[04:14] attachment you feel like you're
[04:15] interacting with a real character our
[04:17] job here included identifying all the
[04:19] common poses that the actor was hitting
[04:20] during the performance they're matching
[04:22] those with the state machine while
[04:24] focusing on maintaining the maximum man
[04:26] performance from the actor some of this
[04:27] performance has already been seen in the
[04:29] last room event but with polishing of
[04:31] the assets to a full shippable release
[04:33] quality in tandem with Chapman's
[04:34] animations we are continuing to develop
[04:36] the grab and inspect animations for the
[04:38] player these are more heavily keyframed
[04:40] assets as we need to come at them from a
[04:42] different angle and really take the
[04:43] players view into consideration more
[04:45] than we need to do on an AI character
[04:47] there's still some way to go to get
[04:49] these finalized but once you're in there
[04:51] we'll really connect the player to the
[04:52] weapon and make the armoury a believable
[04:53] tactile environment now for an animation
[04:56] update our animation Department on s
[04:59] voice you have been continuing
[05:00] implementing word performance capture
[05:01] chris Roberts shot into fully functional
[05:04] game ready assets this now means we have
[05:06] unique walk cycles for a lot of the
[05:08] people in the game and greatly helps to
[05:10] our personality to each character we see
[05:11] moving around you take performance
[05:14] capture data and analyze it for the
[05:16] best-case game functional leap we're
[05:18] always aiming for the maximum number of
[05:19] cycles possible to keep as much
[05:21] variation in the walk as we can once the
[05:23] animator is clean up the motion capture
[05:25] data and got it seems the looping we
[05:27] export it into the game engine and start
[05:28] to plug the assets into the character
[05:30] specific blend space to see how it looks
[05:32] and Sid you once the animator is clean
[05:34] up the motion capture data I've got it
[05:36] seems to looping we export it into the
[05:38] game engine and start to plug the assets
[05:39] into the character specific blend spaces
[05:41] see how he looks in situ staying on the
[05:44] address another area of focus has been
[05:46] on subsumption stability updates for
[05:48] crew activities we've taken what was
[05:50] learned during the vertical slice and
[05:52] continued to optimize a primary and
[05:54] secondary activity set up wild lines etc
[05:57] along with further tweaks and updates to
[05:59] all those logic graphs using the refined
[06:00] system we are now selling at more scenes
[06:02] for other chapters in the game such as
[06:04] conversations between AI that the player
[06:05] can witness as seen in the vs these are
[06:08] more complicated scenes that involve
[06:09] multiple AI characters for longer
[06:11] periods yes
[06:12] [Music]
[06:21] yeah sir I'll let you know there's been
[06:29] a lot of work going into improving the
[06:31] pipeline for getting DC's into the game
[06:32] very substantial system for example
[06:34] Auguste Beck is the quartermaster on the
[06:37] Staunton she now has her activity set up
[06:39] and is in the game the quartermaster
[06:41] generally takes charge of stocks
[06:42] distribution and oversees the work done
[06:44] by the support crew carriers they do a
[06:46] similar job all the AI usable is that
[06:49] are in the cargo bay and are going into
[06:50] the game for the AI to interact with so
[06:52] we will now see him moving around the
[06:54] area much more believably checking stock
[06:56] and generally chatting to other AI
[06:57] characters finally as part of the
[07:00] mission set up more of the games
[07:01] interstitial moments have been worked on
[07:03] using tech developed as part of the
[07:05] vertical slice meaning more of the
[07:06] ambient life moments are being
[07:07] implemented into the other chapters and
[07:09] locations within the game so that's it
[07:12] for me this week hope you enjoyed the
[07:14] update thanks for watching see you next
[07:16] month thanks Phil yes thanks Phil back
[07:20] in December the vertical slice that
[07:22] premiered right here on a TV gave us a
[07:24] look at au EE Idris frigate and it's
[07:27] substantial crew the developers have
[07:29] been working on some impressive tech
[07:30] that will help bring that crew to life
[07:33] now let's take a closer look at the AI
[07:35] systems working together with story and
[07:37] player interaction to turn the idris
[07:39] into a fully immersive experience in
[07:41] this month's feature
[07:49] living interest to me means as a play
[07:52] you can walk around the ship you can
[07:54] soak in what everyone else is doing like
[07:56] it's the sense that everyone's got their
[07:58] own life their own sort of routine their
[08:01] own personalities as well like so for
[08:03] example if an AI is walking by a guy who
[08:05] he doesn't like you know you might not
[08:07] say hello but if he walks by the player
[08:08] and he does like the player you know
[08:09] he's gonna say hi or he's gonna go out
[08:11] of his way to us all greeting and
[08:13] interacting them so it's just it's all
[08:15] like this my new shell this like minor
[08:18] details that make up the whole story of
[08:20] what like an AI can do what the III
[08:23] shows is that every NPC as a meaning as
[08:26] a background story and you can actually
[08:27] talk with them they can tell you some
[08:30] you know rumors or you know each of them
[08:32] has a different personality so the goal
[08:34] of the interest was always to create a
[08:36] ship for people and we want you to walk
[08:39] around the ship and see these people
[08:41] going about their lives doing whatever
[08:44] their role is and generally just doing
[08:48] worries that they they won't all have to
[08:49] do so in doing that we have every
[08:55] character on the ship has their own name
[08:58] their own rank their own role on the
[09:00] ship and that's spread among all of the
[09:02] different disciplines so we have lots of
[09:04] bridge crew engineers gunners deck crew
[09:08] even janitors and medical personnel and
[09:11] they're all spread out quite well
[09:14] considered given whatever that role
[09:16] might be and then we have to spread that
[09:19] out across different shifts as well so
[09:22] you might see somebody doing a certain
[09:24] role or innocent shift on one chapter of
[09:28] the game but then on the next chapter of
[09:29] the game they might be off duty and
[09:31] you'll see them in the mess hall talking
[09:33] to people and everybody is doing their
[09:34] role on the ship regardless of where you
[09:36] are so you could be the complete other
[09:38] end of the ship and they'll still be
[09:40] doing their thing it's not like they
[09:42] despawn as soon as you've turned the
[09:44] corner the day-to-day of a a I on the
[09:46] address is essentially governed by this
[09:49] concept of the schedule so on a Monday
[09:51] all like all this means is that on a
[09:53] Monday someone might be a marine and
[09:56] going about their business as a Marine
[09:57] might do so he might go to the shooting
[09:59] range you might
[10:00] to the interest bridge in stangard do
[10:02] all the sort of stuff then on a Tuesday
[10:04] he might be off duty so all that means
[10:06] is he'll go to the mess hall if he's
[10:08] hungry
[10:08] you know he'll go and lay down if he's
[10:11] tired he might go to the shooting range
[10:13] again if he's feeling like he wants to
[10:14] shoot some stuff there's also things
[10:16] like arcade machines if he's feeling
[10:18] bored and it's this idea that everything
[10:21] is kind of governed by what an AI wants
[10:22] to do so you know again if he's hungry
[10:25] he's gonna go eat if he's he's tired
[10:27] he's gonna go let down we just give them
[10:28] options and then go there go do it
[10:30] depending on what they want to do our
[10:32] game has this kind of huge opportunity
[10:34] to be a simulation in first place so you
[10:37] want to feel real and having a character
[10:40] that stayed there forever it doesn't
[10:41] really feel real for example we might
[10:44] have a Marine who is by default is
[10:49] supposed to be on a guard post and he
[10:51] will go to the guard post but if
[10:53] somebody else is already on the guard
[10:54] post he may say oh well I can't do that
[10:56] so he'll decide he wants to go do some
[10:58] training guy run a shooting range or
[11:00] just simply running around the ship and
[11:01] doing that sort of thing we really want
[11:03] the day I can tell a story to the player
[11:05] so to achieve this of course there is
[11:08] not just one tool that can do it or one
[11:12] feature let's say we try to embed inside
[11:15] the sub sumption to a lot of different
[11:17] functionalities so that designers can
[11:19] create a behavior that can tell a story
[11:21] and want to have the systemic behavior
[11:23] to feel real to characters talking the
[11:26] meso and not just eating three guys
[11:29] walking together or to jog running
[11:32] around a wild run they try to keep their
[11:35] pacing and talk about something but you
[11:38] also want a mission to tell its own
[11:40] story so on top of the regular systemic
[11:43] behavior you might need the story to
[11:46] follow a specific you know storyboard if
[11:50] we look at the prisoner scene that I
[11:53] think is particularly fantastic in the
[11:55] in the live stream Dead achieves very
[11:58] well so you arrive to the pilot room you
[12:01] start to talk with old man and then
[12:04] there is a moment in which if you don't
[12:06] interact with the game the game takes
[12:09] control and he just you know you have
[12:12] this really cinematic
[12:13] moment you can look at the face of the
[12:16] character you're just not listening from
[12:17] very far this brings more immersion and
[12:20] immersion is kept persistent with the
[12:23] fact that you still are in control if
[12:24] you want to you know move around
[12:27] interrupt the cinematic camera and then
[12:29] you can go close to the reason and I
[12:31] actually look them and they are actually
[12:32] performing all directions
[12:34] the mission on that away can also tell
[12:37] the character's suggestion or what to
[12:40] perform next so after you take off from
[12:43] the Idris you want all men to fly
[12:45] towards the next position in for the
[12:48] next mission to do right so the
[12:50] activities I hope we've been doing has
[12:52] been really interesting over the last
[12:53] few months they've got a big refactor of
[12:55] all the guys on the address we've got
[12:57] guys like Marines engineers off-duty
[13:00] characters bridge crew all the deck crew
[13:02] guys even janitors and the way I've been
[13:06] approaching it is I would sort of role
[13:07] play a little bit so when I'm setting up
[13:09] to an engineer other thing like what's
[13:11] what's an engineer gonna do today like
[13:13] what's his job
[13:14] is he gonna inspect all the ship parts
[13:17] you know see if they're broken if they
[13:18] are broken what's he gonna do then is he
[13:20] gonna call up a repair guy ask him to
[13:23] come and repair it and then like move on
[13:25] or and all this sort of stuff and once
[13:29] I've got like this big clear picture of
[13:31] a day-to-day of what I can do
[13:33] I'll start setup and I'll just start
[13:35] from like gremlin like you know he gets
[13:36] hurt a bit puts his clothes on if he's
[13:40] not dressed already and goes about his
[13:42] job designers can actually give
[13:44] assignment so an assignment can be I
[13:45] suggest you or I request you to fly to
[13:49] this position
[13:50] I request you to defend the player from
[13:53] this fight this is very similar to what
[13:55] you know in a systemic situation you all
[13:58] serve as our wingman commands right
[14:00] so the system is gonna be very similar
[14:02] for the player and for a designer to ask
[14:04] the AI to do something an assignment
[14:06] doesn't need to be necessarily a full
[14:09] behavior like a defend an area or defend
[14:11] a player but it might be a suggestion it
[14:13] might be I really want you to fly as
[14:17] close to every as possible so you can
[14:19] just execute your normal behavior but
[14:21] you know telling the story that
[14:25] the Domitian wants you know it might be
[14:26] that moment all men has to fly next to
[14:30] you because you are in a very low health
[14:33] state you know you need protection and
[14:35] we can communicate these two distant
[14:37] behaviors to assignments in the prisoner
[14:39] arrival scene that allows who's on the
[14:41] elevator doing his guard duty now
[14:43] suddenly there's a group of prisoners
[14:46] about to arrive so Lars is then informed
[14:49] of this and at that point he suddenly
[14:51] says right well I've got to go down to
[14:52] the hangar and make sure to basically
[14:54] guard them as they arrive so he will
[14:56] suddenly leave his behavior and then be
[14:58] told that his priorities to go make sure
[15:00] that these prisoners arrive safely so he
[15:02] will then walk down to the hangar and he
[15:05] will basically wait in hunger until this
[15:07] ship with the prisoners arrives
[15:09] basically and it'll be the same for the
[15:10] other guards who there as well and then
[15:13] likewise when the cinematic scene is
[15:15] finished we obviously need to seamlessly
[15:17] blend them out of this cinematic
[15:20] sequence and basically put them back
[15:22] into their natural behaviors at this
[15:24] point like Lars is then given a
[15:26] completely new objective which is to
[15:28] basically go off and prepare the holding
[15:31] cells for their prisoners that have
[15:32] arrived so after the cinematic sequence
[15:35] takes place Lars is then put back into a
[15:37] new behavior and his behavior is then
[15:39] told that he needs to prioritize so in a
[15:42] holding cell so he'll then wander up to
[15:44] the break and then start doing a
[15:45] completely different behavior she's
[15:47] getting old part of his natural like all
[15:49] the things that you see happening in the
[15:51] either are real our actual behavior
[15:53] running so from our perspective it's
[15:56] really interesting to create the tools
[15:58] that allow you to create a lot of
[15:59] content that is not faith for example
[16:02] talking about repairing an instrument in
[16:04] the injuries that process basically
[16:07] evolved during our you know development
[16:10] so he started as a bit more like an
[16:13] engineer work that you know it goes
[16:15] around search for object to repair and
[16:16] then it just reverse them but that felt
[16:19] to be too much robotic so with the
[16:22] designer we looked at this and we were
[16:24] like well you know what it would be
[16:25] interesting is to try to have like a
[16:27] lead engineer that goes around expects
[16:30] objects and then he calls repairing
[16:32] engineering work so like you will see
[16:36] him going around
[16:37] look at stuff and talking and calling
[16:39] out another NPC these MPC will come and
[16:42] he will repair and maybe the lead
[16:44] engineer will be there to inspect that
[16:46] the work has been done correctly and
[16:48] this is really what is described in
[16:50] their behaviors and in the sub sumption
[16:52] activities and sub activities so you can
[16:54] imagine the subsumption activities to be
[16:56] the regular job that the schedule is
[16:58] assigning the different NPC to do and
[17:00] then the sub activities are the actual
[17:02] kind of action so it's like an engineer
[17:04] can repair something or can expect
[17:06] something or can just going around
[17:08] because he gets called you know and and
[17:11] this is like the way we describe the
[17:13] flow and the content in subsumption one
[17:16] bit attack that we made as part of the
[17:17] secondary selectivity sprint is this
[17:20] ability to trigger something based off
[17:22] what the player is looking at so for
[17:24] example as you're roaming around a place
[17:26] like the address you know as a player
[17:28] you might be interested in things like
[17:29] the engines underneath like the coolant
[17:32] or or piping that carries power all
[17:34] across the ship what this tag does is
[17:37] say if the player is looking at these
[17:40] things the other AI or nearby are gonna
[17:43] notice that they're gonna pick up on it
[17:45] and then they're going to talk to the
[17:46] player about it so any anything that the
[17:48] player might be interested in you know
[17:51] they can get information about it just
[17:53] just by looking at it you know in the
[17:55] same way that you know if you were
[17:56] looking at something in real life and
[17:58] some of the guy knows all about it you
[18:00] might pick up on that fact and then and
[18:02] talk to you about it these the ability
[18:04] for it to feeding submissions and
[18:05] gameplay in any way that we won't really
[18:07] say you know a big explosion happens or
[18:09] say there's some fire going off as
[18:12] you're walking down a corridor running
[18:13] down a corridor I should say an AI might
[18:16] might comment on that and say like oh
[18:17] this is on fire because of this you know
[18:20] and that might have gameplay
[18:21] implications so the way the PIO AI tech
[18:23] works is it's basically just a rare cast
[18:25] from the player and all that means is
[18:26] just like a line drawn from the players
[18:28] eyes to any objects right in front of
[18:30] them so for example the the engines that
[18:33] the player might be interested in
[18:34] because he's looking at them this wreck
[18:36] us would happen a lot of timer would go
[18:39] off and any AI interested or knows about
[18:42] that thing that the player is looking at
[18:43] nearby they'll wait for that time to go
[18:46] down once it's gone down they'll they'll
[18:48] get an event and that will trigger
[18:50] logic to say all the players interested
[18:52] in that so I'm gonna try and talk to the
[18:53] player about that
[18:54] you know I'm given some information
[18:55] because it seems like they're interested
[18:57] so as we're building the tech we want
[18:58] the AI to be more aware of one another
[19:02] and to react to one another and more
[19:05] intelligent and systemic ways similar to
[19:08] this ball tech we don't necessarily want
[19:09] to know what they're going to say or do
[19:11] which makes it more interesting for
[19:13] everybody
[19:13] and one of those ways might be to react
[19:18] to one of your only tributes like say
[19:20] say you hadn't taken a shower and you
[19:22] you were a bit smelly then day I might
[19:24] comment on that maybe even take a shower
[19:28] one nice thing about the older engines
[19:30] on the Staunton plenty of hot water to
[19:33] go around one of the things that were
[19:35] very aware of is how repetitive and
[19:39] jarring something could be if it said
[19:41] again and again and again every couple
[19:44] of moments like lieutenant lieutenant
[19:46] lieutenant lieutenant so we're trying to
[19:52] avoid that so spoiled stands for a
[19:54] systemic point of interest look tech and
[19:57] it's basically our way of giving an AI
[19:59] the ability to look at interest in
[20:01] things so for example an engineer he
[20:04] might be interested in things like wall
[20:05] panels that he can fix or monitors that
[20:09] display the status of the ship he's so
[20:11] he's gonna look at those things he's
[20:12] gonna be super interested in him
[20:14] razza marine you know he doesn't care
[20:16] about that stuff he's bothered about
[20:17] weapons and you know the armory and the
[20:20] brig and that stuff so he's not gonna
[20:21] look at all the stuff an engineer might
[20:23] be interested in and look at all the
[20:24] stuff that he's interested in similarly
[20:27] on places like a bridge
[20:29] the pilot of an interest for example he
[20:32] might look at approaching ships so
[20:34] because that's something that he's
[20:35] actively interested in he doesn't want
[20:37] ships so like collide with him so he's
[20:38] gonna so as far as gonna allow him to
[20:40] take a look at little ships and maybe
[20:42] watch out for him it's all part of our
[20:45] layered animation systems that we have
[20:47] so the very basics of that kind of
[20:52] system would be you'd have an AI
[20:53] character walking down one of the
[20:55] passageways and that that's all well and
[20:58] good but then you might want to have
[21:01] them
[21:01] down the passageway whilst also
[21:02] scratching their arm and that would be
[21:04] laid on top of that initial walk and I
[21:07] spoil is a way for us to mark up
[21:11] anything in in the game as a point of
[21:14] interest so then the character would be
[21:18] walking down the corridor
[21:19] they'll be scratching their own but they
[21:20] could also be looking up at the screen
[21:22] as they walk past it and that was really
[21:25] great because it means you don't know
[21:26] what the characters going to be looking
[21:28] at any given time and that makes it more
[21:30] interesting for us because we don't know
[21:33] either
[21:33] every AI has their own personality and
[21:37] part of what that means is if the player
[21:39] interacts with AI in like a negative or
[21:41] a positive way the AI are gonna pick up
[21:43] on that and treat the player differently
[21:45] so for example if the player just
[21:47] straight-up punches in AI you know he's
[21:49] not that AI isn't gonna say anymore
[21:51] greetings to that guy because you know
[21:53] he punished him whereas if the player
[21:55] maybe fetched something off a mission
[21:57] and gave it to the AI as a request the
[22:00] AI is gonna think more positively of
[22:01] that character and therefore he's not
[22:04] only gonna say like a greeting to him
[22:06] you might say like a really positive
[22:07] greeting or it might stop in his tracks
[22:09] and try and talk with the player so it's
[22:12] this idea that every player's journey
[22:13] through a squadron is gonna be slightly
[22:15] different you might have one player
[22:17] whose relationship with Mauro is really
[22:19] positive
[22:19] Mauro gives him like loads of gossip and
[22:22] stuff like that whereas another players
[22:24] journey might be super negative toward
[22:26] tomorrow like Mauro essentially as the
[22:28] player and that's always reflected
[22:30] through things like wild lines spoil
[22:33] tech the way I interact with the player
[22:36] in general a really good example of
[22:38] spell tech is Monster was designing the
[22:42] executive officer behavior on the bridge
[22:44] now she's in charge of everybody and
[22:47] she's got to walk around and she's going
[22:49] to be observing people just generally
[22:52] walking around making sure everything's
[22:54] going well and that was all nice but it
[22:58] felt a little bit flat and wooden at
[23:00] times so you might want to looking at
[23:02] something but she she would potentially
[23:04] just looking straight ahead where is now
[23:07] with spoil tech we could have it so that
[23:10] if she was looking at a window
[23:13] she could be looking at a ship as its
[23:16] flying past so she'll actually follow
[23:18] the ship and it just makes it so much
[23:19] more dynamic and just more real and
[23:22] tangible really just opens it up if you
[23:25] look at interest documentation online
[23:26] right now you'll see that the crew
[23:28] complement is supposed to be somewhere
[23:29] between 30 and 50 but as we were testing
[23:34] out the address and the crew and filling
[23:35] up 13 and 50 people just wasn't enough
[23:39] food we were walking the passageways it
[23:41] just felt too empty we didn't feel like
[23:44] we were gain that sense of vibrance that
[23:48] we wanted in life so we added more and
[23:51] more people until it felt right and now
[23:54] the address is at about 81 people
[23:57] including the player and to put into
[24:00] perspective we if you look at the
[24:02] livestream demo we had 12 people just on
[24:05] the bridge and that was without the
[24:08] captain or Co helmsman in there so you
[24:10] can see how it would quickly fill up
[24:12] everywhere else as well from a designer
[24:14] perspective of course is interesting to
[24:16] create a you know universe in an
[24:18] environment that is very complex where
[24:21] interaction of MPC can happen
[24:23] interaction with the player can happen
[24:25] from a developer perspective especially
[24:27] for SSI program er the interesting part
[24:31] is to create the tools that allow
[24:32] designers and also ourself to define
[24:36] this world and define the restriction
[24:39] and refine the rules where things are
[24:42] happening and the rules of the game
[24:45] pretty much one of the big things we
[24:47] have around the idris and throughout the
[24:48] game is we have what are essentially
[24:50] conversations where you can walk past
[24:52] several AI and obviously they might kind
[24:54] of wave or nod to you and kind of do
[24:57] something but there's nothing it's more
[24:58] than what we call the wild line whereas
[25:00] there are certain AI on the ship
[25:03] specific things I want to say to the
[25:05] player or even to other characters and
[25:07] say like if you're the player you walk
[25:09] past a certain character that has
[25:11] something they want to say to you
[25:12] they'll actually break out of their
[25:14] behavior their activity and they'll say
[25:16] actually call you over and then have a
[25:18] conversation with you
[25:20] and these things can actually be seen
[25:22] but a change in the depth of field with
[25:24] the vision so if the player is actually
[25:26] looking at something they will like for
[25:28] example in the vs demo that we showed
[25:30] you can actually see liars on the bottom
[25:33] of the elevator who's he's in his guard
[25:34] post and when you're approaching me
[25:38] actually reaches out to you and starts a
[25:39] conversation with you and one of the
[25:41] things you'll notice is the camera kind
[25:42] of zooms in almost like you're done
[25:44] focusing on the character and that point
[25:47] we have a conversation we might have
[25:48] like at the start of Liza's conversation
[25:50] you will actually talk to you and the
[25:51] player will respond and then he'll up
[25:53] say finish after talking but then
[25:55] partway through a conversation there
[25:57] might be multiple options for a player
[25:59] to actually have player choice and in
[26:01] this case we'll actually pause the
[26:02] conversation timeline and basically wait
[26:05] for the player to make a decision and
[26:06] then based on which decision they make
[26:08] will actually branch out the
[26:10] conversations so they can basically go
[26:12] down one of two paths or three or four
[26:14] paths depending on how many options wide
[26:16] line is this all-encompassing term that
[26:18] we use for anything in AI can do as like
[26:21] a one-shot dialogue line to the player
[26:22] or to each other so things like
[26:26] greetings
[26:27] bizzy's what we call bizzy's essentially
[26:30] as a a I say and I'm busy I can't talk
[26:32] somewhere to B's is another one which is
[26:34] another thing another term that we used
[26:37] to say like don't you have someone to be
[26:39] like why are you lingering around and
[26:40] I'm doing something
[26:42] also things like mission comments so
[26:44] when the player gets back from a mission
[26:45] say you did really well the players
[26:47] going to comment the AI is gonna comment
[26:49] on that if the player did didn't do too
[26:51] great then the AI is gonna say like you
[26:53] know I kind of sucked on that last
[26:54] mission you know do better next time
[26:56] wild lines add a lot to AI behavior it
[26:59] adds a lot of life it means that well
[27:02] it's the difference between you walking
[27:03] by an AI then looking straight forward
[27:05] or them looking at the player and maybe
[27:07] greeting them and and you know asking
[27:09] them how they are so it adds a lot a
[27:12] life basically to the address the way it
[27:14] interacts with all the primary setup is
[27:16] is very easy it's essentially just
[27:19] layered on top the idea is once you've
[27:22] set up one greeting the logic for that
[27:24] greeting it can be applied to any AI who
[27:26] has a greet in line so for example
[27:28] captain white he has greens Kelly has
[27:30] greetings all our cast characters even
[27:33] some of our what we call
[27:34] characters who were like minor
[27:35] characters they have greetin's and the
[27:39] good thing about the secondary logic is
[27:41] that once you've set it up once it can
[27:43] be applied to everyone you know you
[27:45] don't have to do that setup over and
[27:46] over and over again in the perfect
[27:47] scenario if the player wants to play the
[27:49] story as we intended then they will have
[27:52] the perfect playthrough if they want to
[27:55] influence the scene and the story then
[27:57] they can still do it and they will enjoy
[27:59] that fact that everything systemic is
[28:01] not like a baked sin it's really
[28:04] something that is using the real time hi
[28:07] so funny I change his loadout I change
[28:09] his outfit you will see that impacting
[28:11] the cinematic scene our big challenges
[28:14] is to make sure that the system is the
[28:16] most robust and stable as possible so
[28:19] that designers content creators are not
[28:22] worried to bring more content and now
[28:25] worried about let's say experimenting
[28:29] with the gameplay because a cool game
[28:32] it's coming from experimentation and
[28:34] iteration and if you don't allow people
[28:37] to iterate then you pretty much are
[28:41] getting stuck to the first test and then
[28:43] people don't want to change it and then
[28:45] it's gonna be like it's not great but if
[28:48] I now change this script then everything
[28:51] is gonna break and I want to do it and
[28:52] we don't have time it's really
[28:54] interesting for me to try to speak a lot
[28:56] with writers to level designers to
[28:58] system designs to other AI programmers
[29:01] because we want to make sure that
[29:02] everything we do doesn't have big ripple
[29:06] effect on the other systems but they
[29:08] just build on top they expand
[29:10] functionality it's sort of composition
[29:13] Matt so you want that every system can
[29:16] be composed by multiple elements and you
[29:19] can create more without breaking the
[29:21] others and I think this is the big
[29:24] interesting challenge of star citizen
[29:27] as you can see the cutting-edge AI tech
[29:29] integrating with cinematic moments aims
[29:31] to give players an experience that's
[29:33] story driven but also extremely personal
[29:35] and adaptable we'll have another
[29:37] squadron 42 project update for you next
[29:40] month that's right and in the meantime
[29:42] you can head to the games webpage to
[29:44] sign up for the dedicated newsletter
[29:45] check out past updates and stay on the
[29:47] frontlines of development this weekend
[29:50] will be our last chance to supersize
[29:52] your star citizen starter package and
[29:53] add squadron 42 for just $15 the price
[29:56] for the upgrade will increase on Monday
[29:58] so grab both games and take advantage of
[30:00] this special while you still can in star
[30:03] citizen news this week the pu teams
[30:05] branched to alpha 3.1 is planned and
[30:07] continued to stabilize and gear up for
[30:09] deployment to evocati as we get closer
[30:11] to release you can always stay up to
[30:13] date on what we're planning for that
[30:14] release and beyond with the live road
[30:16] map on our website last week's
[30:18] installment of shipshape introduced the
[30:20] first new concept ship of 2018 the ages
[30:22] Vulcan this versatile utility ship will
[30:25] be an entry point for star citizen
[30:26] players interested in support roles with
[30:29] the ability to refuel repair and rearm
[30:31] ships in need of assistance you can
[30:33] pledge from the Vulcan now so make sure
[30:34] you head to the store and check it out
[30:36] also released today the AG is wrecking
[30:38] cruise ship pack gives you an instant
[30:41] self-sufficient mini fleet with five
[30:42] ships hand-picked to work together in
[30:44] formidable harmony you can learn more
[30:47] about the Vulcan and the mechanics
[30:48] involved in its repair refuel and rearm
[30:50] functions tomorrow in the episode of
[30:52] reverse the verse airing live at 9 a.m.
[30:54] Pacific Standard Time thanks to our
[30:56] subscribers for sponsoring reverse
[30:58] averse around the verse and all of our
[31:00] shows we look forward to seeing some of
[31:01] you at our upcoming subscriber events in
[31:04] LA and Darby and thank you to all our
[31:06] backers and supporters for the
[31:08] development of star citizen and squadron
[31:09] 42 that's it for us today until next
[31:12] week we will see you around the verse
[31:15] [Music]
[31:41] thank you for watching so if you want to
[31:43] keep it with the latest and greatest in
[31:44] the star citizen the squadron 42
[31:45] development please follow us on our
[31:47] social media channels see you soon
[31:57] [Music]

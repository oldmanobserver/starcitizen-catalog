# Star Citizen Live: A. I. and U

**Video:** https://www.youtube.com/watch?v=SgdtnCX8AOI
**Date:** 2020-11-20
**Duration:** 1:01:48

## Transcript

[00:04] hi everybody
[00:06] welcome to another episode of star
[00:08] citizen live ainu uh i'm your host uh
[00:12] jared huckabee and if you've never seen
[00:14] star citizen live before uh it's where
[00:16] we take about an hour out of our day to
[00:18] uh
[00:19] what oh am i not supposed to hold on
[00:23] [laughter]
[00:25] that's where we take an hour every day
[00:27] at the end of the week
[00:28] and chat about a topic related to the
[00:30] development of star citizen today we
[00:33] have members of our esteemed uh various
[00:36] uh ai teams on the show uh with us uh
[00:40] this week so let's just jump right into
[00:42] it and now that i've had my fun
[00:45] at their expense uh let's just go around
[00:47] the room uh do what we always do
[00:49] introduce ourselves talk a little bit
[00:50] about what we do who we are and all that
[00:53] jazz we will start just we'll just go
[00:55] clockwise we'll counterclockwise so this
[00:57] way william
[00:59] who are you what do you do for star
[01:00] citizen
[01:02] uh hello i'm will i'm an ai programmer
[01:06] um specifically i work on ships
[01:08] along with andrea um
[01:11] yeah i
[01:12] recently have been working on a fair bit
[01:14] on the sort of pilot combat like uh how
[01:17] how fighters
[01:19] behave in combat and making it trying to
[01:21] vary it a little bit between different
[01:24] different personalities you know
[01:25] different traits that kind of thing
[01:27] that's the kind of thing i do
[01:28] know uh and andrew
[01:31] hello
[01:33] i'm a senior gameplay programmer i work
[01:36] on the social ai team but i'm not very
[01:39] social i'm quite shy
[01:41] um
[01:43] and i'm currently working on
[01:45] some stuff for squadron 42 to do with
[01:49] um people eating and drinking in the
[01:51] muscles so got lots of uh social
[01:54] behaviors and using lots of machines
[01:56] like
[01:57] food dispensers and
[02:00] getting the right knife and fork which
[02:02] we've got had a lot of discussion about
[02:05] the way that we your perfect place
[02:08] setting for sitting at a table but that
[02:09] kind of stuff and all of the ai
[02:11] behaviors to do with that so that's what
[02:13] i'm working on okay
[02:15] uh next up andrea who are you and what
[02:17] do you do for star citizen
[02:19] yeah i'm an ai programmer in the
[02:22] francophone tank force office and my
[02:24] work focus mainly on ship ai so i work
[02:28] with william most of the time and
[02:30] i've been working the recent time in
[02:33] this year mostly on the 3d navigation
[02:36] aspects of sheep ai
[02:38] and more in general
[02:41] the awareness of the special
[02:44] environments or even properties of
[02:46] environment like gas clouds
[02:50] and also took care of quantum linking
[02:52] with ai and players
[02:54] uh yeah this kind of system basically
[02:57] very cool so very important stuff
[02:59] related to the the the ai ships of the
[03:01] persistent universe
[03:03] uh francesco who are you what do you do
[03:06] for star citizen
[03:08] i'm yeah i'm i'm the eye director i'm
[03:10] francesco cucci
[03:12] and i'm mostly working a bit with you
[03:14] know all the guys here i'm trying to
[03:17] make sure you know that all the
[03:19] architecture all the systems fit
[03:20] together uh try to do some work myself
[03:23] you know and i'm i'm not
[03:25] busy with lots of meetings uh
[03:28] recently i'm working on a bit of
[03:30] functionalities to allow ai to open
[03:32] doors that are closed and you know where
[03:34] the front doors uh being able to
[03:36] basically create any
[03:38] complex logic out of uh environment
[03:41] transitions uh that is gonna be
[03:43] interesting and on the future to see it
[03:45] i bet
[03:47] and last but certainly not least dan
[03:50] hey uh i'm dan i'm lead system designer
[03:53] in the frankfurt office and uh
[03:56] i deal with a lot of the
[03:58] system works but in regards to the ai i
[04:01] deal with uh the designs on uh
[04:04] the fps combat ai team and more
[04:06] specifically more recently the combat uh
[04:09] for vanduul the combat behaviors
[04:13] so dan no stranger to uh star citizen
[04:16] video programming uh the rest of you
[04:18] welcome some of you this is your first
[04:19] time on any of our shows so we'll we'll
[04:22] try to take it easy um start you off
[04:24] with a with a softball here uh chairs no
[04:28] um
[04:29] [laughter] so uh as usual
[04:32] all right okay look at it uh for those
[04:34] of you who are watching live uh yes we
[04:37] are aware that currently uh the website
[04:39] servers the whatnot are are down at the
[04:42] launch of iae um everybody as as happens
[04:47] quite frequently with these major events
[04:49] um
[04:50] got very excited all at the same time we
[04:52] are here doing this show i don't have
[04:54] any formal updates for you i don't have
[04:56] any
[04:58] information to give you other than what
[04:59] you already have
[05:00] other than to say that there are top
[05:02] people who aren't doing a show right now
[05:04] who are all working on that and if we
[05:06] have any updates during the course of
[05:07] the show
[05:08] we'll be sure to provide them for you
[05:10] with that
[05:12] the subject today is ai and you
[05:14] basically all the ways that ai is being
[05:16] used currently in the persistent
[05:17] universe and maybe some of the things
[05:19] that we're working towards in the future
[05:21] if you're watching live you can submit
[05:22] your questions in one of two ways you
[05:24] can either put your questions in the
[05:26] twitch chat uh
[05:28] prefacing your question with the word
[05:29] question in capital letters surrounded
[05:31] by brackets that's going to help our
[05:32] community management team pull it out
[05:33] from the chat you can also do the same
[05:35] on spectrum well
[05:37] you could if spectrum was working
[05:41] so we'll just stick to twitch chat
[05:43] that's what happens what habits man
[05:45] habits are hard to break uh as usual we
[05:47] also collected questions throughout the
[05:49] week on spectrum where folks could
[05:50] submit their questions and then vote
[05:52] them up uh so as usual we're gonna start
[05:54] in on some of those as some of the live
[05:56] ones are curated and pulled in um
[05:59] all right you said it let's just start
[06:01] with chairs
[06:02] sounds good why wha what what what
[06:05] happens why does this happen
[06:08] so yeah i mean we had like funny enough
[06:10] like this type of bug is like visually
[06:13] always looks similar right so i think
[06:14] since the beginning i think really
[06:16] probably is one of the oldest bike we
[06:18] have like i think it's like maybe four
[06:20] years ago started to you know i was
[06:22] starting to have like people standing in
[06:24] the chair and the box that it was that
[06:26] time is completely different from the
[06:28] bikes that we have right now you know we
[06:29] started with having i think one of the
[06:31] first one i remember was
[06:33] there was something to do with the
[06:35] animation that when the look pose was
[06:37] actually kicking in and causing the body
[06:39] to turn then it would go on uh basically
[06:42] full body animation would kick in and it
[06:45] would just detach the thing from the
[06:46] chair or the couch you know
[06:49] so there was one long time ago and then
[06:52] i think for a while we've been like
[06:53] quite in a good shape and then you know
[06:55] we started with optical tennis streaming
[06:57] and this is where i think we are
[06:58] starting to find a more
[07:00] zinc issue in a sense so
[07:03] basically for people who don't know
[07:05] right this the chairs in star citizen
[07:07] are pretty much usable what we call
[07:09] usable our usables are are pretty much
[07:11] just the
[07:12] representation that the eye has
[07:15] of how to interact with the world so
[07:17] like a chair is pretty much just an
[07:18] object where you can sit
[07:20] and
[07:21] to achieve that what you do is like
[07:23] there is one part that is on the eye
[07:24] code that basically says oh there's
[07:26] something where i can sit so how do i
[07:29] need to arrive to start to play the
[07:31] animation to you know enter into the
[07:33] chair and then i play my idol on top of
[07:35] the chair then there is this coupling of
[07:37] these two objects that is the character
[07:39] and the share right and then what
[07:41] happens is there's the streaming code
[07:42] that can happen at different times right
[07:45] so
[07:46] when you are part of the chair right now
[07:47] you're also part of the aggregate of the
[07:49] environment so when the environment
[07:52] streams out ideally what should happen
[07:54] is that the attached object should first
[07:56] stream out that is like usually the
[07:58] character then the environment streams
[08:00] out and then when we stream scene the
[08:02] environment streams in and then the
[08:03] character streams in as well and he
[08:06] knows that it should be attached to the
[08:07] to the chair and then the kind of
[08:09] request gets propagated to the
[08:11] different components of the character
[08:13] and then the component decides to
[08:15] reattach it and put it in the right
[08:16] state
[08:18] right now we are like these components
[08:20] we are fixing them some some of those
[08:22] and we're fixing of course one at a time
[08:24] you know when we find the bag we fix it
[08:26] uh so far we found that there were some
[08:29] issues with the
[08:30] uh
[08:31] with the fact that initially the usable
[08:33] were detaching
[08:35] the character before streaming out so at
[08:37] that point it was like yeah we have lost
[08:38] information you know i was like wait you
[08:40] started [laughter] you don't know
[08:41] anymore that was one
[08:42] uh then
[08:44] i think we had some the sync on the
[08:46] events that were coming from the
[08:48] networking and we fixed that
[08:50] uh then we fixed another bag
[08:55] that basically was always related to
[08:57] the order of synchronization so
[08:59] basically what would happen was
[09:01] that some characters could just try to
[09:04] stream in
[09:05] in longer time
[09:06] and what happens is in the meantime some
[09:08] other character that the streamed in
[09:10] earlier it was not attached or usable
[09:12] but still the usable from the characters
[09:13] to stream in right so in a sense some of
[09:16] those bags
[09:18] won't really be so important in the
[09:21] futures once we have the simulation and
[09:22] once we have all the the server mesh
[09:25] because
[09:26] it won't matter that the ai is actually
[09:28] sitting there right the simulation with
[09:30] the care of saying you know what it
[09:32] should not be sitting there on the chair
[09:33] or actually the share should be reserved
[09:35] for this guy and if the guy
[09:37] is removed then it will just be cleared
[09:40] right because the other issue that we
[09:41] had is i if we reserve that spot we
[09:43] can't guarantee that actually the
[09:45] character streams back in because there
[09:47] are characters that might be dynamic
[09:49] right so maybe the share then remains
[09:51] forever reserved and then actually never
[09:53] comes
[09:54] into play
[09:55] so we actually already added like some
[09:57] code that basically handles that and now
[09:59] we basically found another bag that is
[10:02] actually under you know investigation
[10:04] and
[10:06] we are trying to solve it basically that
[10:07] is like
[10:08] um
[10:10] sometimes happens that the
[10:12] character streams before the objecting
[10:14] which is attached to so we are running
[10:16] you know we are basically handling this
[10:17] code a bit better and we are trying to
[10:19] handle the fact that you know some of
[10:21] this order might be slightly different
[10:22] even if you know if right now uh where
[10:25] you know should not have really happened
[10:27] that one uh but it will also like keep
[10:29] the state and the problem is this is
[10:32] this ownership within this code right
[10:33] what we want to have as well as
[10:35] achieving as a developers is to try to
[10:38] have code that is that is owning that
[10:40] state right so that you can tell it's
[10:42] like okay i should be sitting there now
[10:44] if the chair is not coming i know it's
[10:46] gonna come so it doesn't matter if it
[10:48] comes in this frame next frame or you
[10:50] know in 10
[10:51] frames or one second but i know that
[10:53] this is my state and i should not run
[10:55] other logic to do other things and
[10:57] complete the sync this is basically
[10:59] where we are at and of course it's quite
[11:01] fun to see that he's always the guy
[11:02] standing on the chair right it looks
[11:03] like oh
[11:04] it's like it's that's hard to fix that
[11:06] and it's like yeah no but it's just like
[11:08] a lot of things happening at the same
[11:10] time that give the same visual glitch
[11:12] yeah it's it's actually an example of
[11:14] something that happens quite often in
[11:16] through a lot of systems in the pu where
[11:19] the same
[11:20] uh the same outward symptom can be
[11:23] caused by a
[11:24] number of underlying
[11:26] you know causes and it can often look
[11:28] like
[11:29] no progress is being made in resolving
[11:31] the issue but it's like no actually
[11:33] where there's a crazy game of
[11:34] whack-a-mole going on underneath that
[11:36] you don't see and you know i see the
[11:38] change logs i see the reports yes
[11:39] resolved resolves often it's like it
[11:41] still happens it's like
[11:44] and the thing is the good thing is the
[11:46] progress is still happening so what i
[11:47] mean is like these systems are getting
[11:49] much more stable it's just that you know
[11:52] as a player of course sometimes you
[11:53] might perceive there is no
[11:55] change but actually there have been a
[11:57] lot of changes
[11:58] and it's one of those things
[12:01] how how often you you spend a lot of
[12:04] time working on something that happens
[12:06] like it used to happen an awful lot and
[12:08] now we're spending more and more time on
[12:11] the just the very small
[12:12] occasions that it happens but because
[12:14] they're so visible and so recognizable
[12:18] it's always you know over time those
[12:20] things
[12:22] generally that is generally a good thing
[12:24] that is the fact that it's so visible
[12:25] and noticeable it makes us find it uh
[12:28] absolutely because otherwise if it was a
[12:30] hidden thing that only happened in a
[12:32] corner you only notice is once in a
[12:34] while then you would run with a big
[12:36] system that is might cause way more
[12:38] problems later
[12:39] yeah no and and i think also i think
[12:42] this is why we are not putting any any
[12:44] kind of patch yet right because this is
[12:46] i think the good thing for us is that
[12:48] this helps us stabilizing the underlying
[12:50] system like some of those bugs are not
[12:52] even necessary ai per se related right
[12:56] it's just that we are the kind of bottom
[12:58] of the chain so if something goes wrong
[12:59] in the mean you know on the way then
[13:02] yeah the eye looks bad so the short
[13:04] answer of that very long answer is blame
[13:06] the chairs
[13:08] of course always always explains and
[13:10] actually again
[13:11] blame the npc always so now that we've
[13:13] had our fun let's get into let's get
[13:15] into some more of the questions that
[13:16] that folks have been submitting here um
[13:20] how would you consider the current state
[13:22] of ground-based ai fps combat and what
[13:25] is needed to make it more a more
[13:27] challenging or rewarding experience to
[13:29] players
[13:32] dan do you understand yeah um
[13:35] i mean the state right now
[13:38] we're seeing a lot of difference
[13:40] technically when you're looking at the
[13:42] state of it when you play it uh in
[13:44] single player versus when you play
[13:46] multiplayer we're definitely seeing a
[13:48] lot of issues that come from uh dsyncs
[13:52] and from uh sometimes server performance
[13:55] or stability but besides that there's a
[13:58] lot of things that we still have on our
[14:00] plans from
[14:01] design slash behavior perspective that
[14:03] we want to do with the ai the eye right
[14:05] now are fairly simplistic they run a few
[14:09] behaviors that
[14:11] they run in an okay way they either push
[14:13] if they have a shotgun or they stay in
[14:16] their area and fight you from that area
[14:18] um we are now working on on them kind of
[14:22] going and replenishing ammo uh
[14:26] surrendering enough if they run out
[14:27] obama completely and they can't find a
[14:29] place to replenish their ammo stuff
[14:31] right so we're adding the stuff but
[14:33] there's so many other things that we
[14:35] need to look into we need to look into
[14:36] how we flank how we try to intercept and
[14:39] kind of head off the player how how
[14:41] we're gonna throw grenades to make sure
[14:43] the player doesn't hunker down in the
[14:46] net in a single area and tries to snipe
[14:48] everyone from there uh how they're gonna
[14:50] react to grenades getting thrown their
[14:52] way there's there's like so many things
[14:54] left to do here uh we're just uh we're
[14:57] just beginning let's put it this way
[14:59] from a design perspective
[15:01] um how does uh how does the work on the
[15:04] new uh the planetary navmesh play into
[15:07] any of this
[15:09] so i think definitely like that one is
[15:11] uh it's gonna be like a critical part to
[15:13] have like you know encounter on the
[15:15] surfaces
[15:16] right so i think right now
[15:18] uh i started some work uh on uh
[15:21] verifying like you know how much we can
[15:23] generate and navigation mesh can you
[15:25] know right now basically can generate on
[15:27] the planetary surface we can properly
[15:30] handle like you know the
[15:32] the
[15:33] basically the planet mesh uh on that
[15:35] side
[15:36] um basically what is the plan the plan
[15:39] is to use the navigation mesh
[15:41] the basically features that we have
[15:44] but expand it in a way which can work
[15:46] more efficiently on the planet right so
[15:48] planets are in essence created by those
[15:50] patches right that can just
[15:52] leaves around the players and basically
[15:54] we would probably use uh uh an approach
[15:56] very similar for the mesh so there would
[15:58] be like this kind of dynamic knob mesh
[16:00] what i call a piercing mesh that's gonna
[16:03] be applied to planets and basically the
[16:04] patch of this mesh will only exist where
[16:07] we want to have ai so it's going to be
[16:09] much more efficient than having like you
[16:10] know the the full generation
[16:12] uh
[16:13] everywhere and then of course like
[16:15] basically the
[16:16] the eye will function in essence in the
[16:19] same way as it will work somewhere else
[16:21] the critical bit is how we connect does
[16:23] that mesh and this is part of the work
[16:25] we already started i think last year uh
[16:28] that was basically the ability of
[16:31] connecting multiple num meshes so we
[16:33] have what we call navigation links
[16:35] irrigation links are basically
[16:38] a way to define some object that can
[16:40] connect uh
[16:42] kind of areas right so imagine if you
[16:44] imagine the
[16:45] uh ugf on some planets right those will
[16:48] have like some parts that have the
[16:50] entrance of the
[16:51] the ground base and that one might just
[16:53] have navigation links to the planetary
[16:55] navigation and those one can also link
[16:58] multiple zones multiple physics grid and
[17:01] allow basically the eye to automatically
[17:03] transition i think we in the last year
[17:06] demo when the where
[17:07] npc is entering a spaceship and flying
[17:10] off that was basically the first
[17:12] iteration that we worked on for that
[17:15] and you could tell basically the you
[17:17] know the spaceship's land you know opens
[17:19] the door the door dynamically links to
[17:21] the
[17:22] navigation area that is uh you know uh
[17:25] physically placed on the object
[17:26] container that is placed on the on the
[17:28] planet but then these two things
[17:30] dynamically link when the door is open
[17:32] in that environment so the eye can find
[17:34] a proper path can enter can transition
[17:36] between the different grids and then
[17:38] you're going to disconnect it and going
[17:39] away so this is basically all these
[17:41] little pieces are gonna be just going
[17:44] together to just create this experience
[17:46] on the planet as well
[17:48] plus i think this is going to also be
[17:49] beneficial for having you know creatures
[17:51] on the planet
[17:52] and all the
[17:54] all the different type of you know life
[17:55] that we want to have there
[17:59] this next question
[18:01] is
[18:02] kind of tip uh topical at the moment uh
[18:04] has to do with
[18:05] server performance so here's a question
[18:07] for the programmers here
[18:09] how much of the ai that we see is
[18:11] affected by general server performance
[18:17] there is quite a bit maybe i think
[18:19] andrea or will can also you know talk up
[18:22] some example of the spaceships but for
[18:24] example if you look at the bartender
[18:26] right now let's take one social example
[18:28] right what sometimes happens is that
[18:30] he's is reacting to you a bit slowly
[18:33] right and that happens because
[18:36] like really the performance of this
[18:38] effort when he goes too much down like
[18:40] you know it takes a bit of time for him
[18:42] to find for example where you are
[18:43] sitting and how to navigate to you
[18:46] especially if there are like lots of you
[18:48] know we have i think some the worst case
[18:50] scenario is something like 2 000
[18:51] characters or 1 500 characters active at
[18:54] the same time right and uh one server
[18:58] and that is you know quite a lot for you
[19:00] know like basically what we do is i do
[19:02] not go too much heavy on the on the
[19:04] server we of course distribute
[19:06] calculation over time but that means
[19:08] that if you have some much you know so
[19:10] many requests at the same time it just
[19:12] takes
[19:12] more time to receive the the results um
[19:16] so of course that one is going to be
[19:18] for that beneficial like the server mesh
[19:23] some other stuff i think what we see
[19:24] also is the
[19:25] the time of reaction i think in fps
[19:27] combat that then just mentioned right if
[19:29] you
[19:30] if
[19:31] like let's say let's mention how we
[19:32] handle vision vision is true you know
[19:35] it's physical vision so it's like you
[19:37] can really tell if a character
[19:40] seeing in that type of environment like
[19:42] the other player right but even that one
[19:44] is a distributed calculation so you you
[19:46] have a sort of cached uh information
[19:48] that you persist you know that you that
[19:50] persistence said your perception system
[19:53] and he updates every time he can and if
[19:56] the player just pops out you know and
[19:59] it's not updating in that case of course
[20:00] it's not that that fast we introduce
[20:03] some stuff like for example having some
[20:04] sort of priorities for people next to
[20:06] the place and stuff like this but when
[20:09] the you know when the server is really
[20:11] is really heavy have you used you know
[20:13] there's too much usage there
[20:15] then of course it's like not that easy
[20:18] to make it snappy as it would be in a
[20:19] single player you know the single-player
[20:21] experience um yeah i mean this is the
[20:24] same for shipshape ai i mean
[20:27] uh
[20:28] i mean imagine combat uh
[20:31] dogfight when the
[20:33] and the player very very close to each
[20:36] other the ai needs to continuously
[20:39] update its its aiming position it's
[20:42] a trajectory because
[20:44] it changes continuously right and he
[20:47] wants to maybe orbit around around the
[20:50] the target that can be the player or
[20:51] another ai uh if if the update is slow
[20:55] then
[20:56] every every new update the position of
[20:59] the the relative position of ships will
[21:01] be really different so the you will
[21:03] notice some maybe the target the the
[21:06] look direction or the gun direction is
[21:08] saying is you will see that it's really
[21:10] off but it should not be and for example
[21:14] william did some work on the accuracy
[21:16] for ship ai for pilots and i mean for
[21:19] them
[21:20] and the accuracy basically something
[21:22] that
[21:25] basically simulates the the skill the
[21:28] the amy skill of the pilot of the gunner
[21:31] that
[21:32] updates in time so the longer you are
[21:34] aiming at your target the better you you
[21:37] are and you have a higher chance to
[21:40] tweet and if the frame rate is too slow
[21:43] this will never happen basically you
[21:45] know so the aiming will be always off a
[21:48] little bit behind orbit i mean i had
[21:50] maybe depending on
[21:52] the strategy
[22:02] it's not based on the frame rate
[22:04] obviously it's based on
[22:05] uh well yeah it's not based on like per
[22:07] tips you add this much but it's like
[22:10] it's always the tick it's really based
[22:12] on the time but yeah it's still like
[22:14] it's still like if you if you have one
[22:15] update at the per second right the
[22:17] player does so much because the play is
[22:18] not updating i want one one time per
[22:21] second right so the player on his client
[22:23] is super snappy and he's like oh i seen
[22:25] him he there and now he's like he's over
[22:27] there he's like now he's over there it's
[22:28] like
[22:29] it's just really hard like for for the
[22:31] eye to even
[22:33] you know i don't know just find a great
[22:34] solution when the when the performance
[22:36] are very low of course when the
[22:38] performance are medium then it's a
[22:40] different thing
[22:42] we also have like a lodi's update on the
[22:44] behaviors you know when our things are a
[22:46] bit far you know we update less when
[22:48] things are closer we update more often
[22:51] you know we are interested of course
[22:52] like not everything is implemented yet
[22:54] but you know we want to you know have
[22:56] better
[22:58] weight into what is the action you know
[23:00] what is the important thing that we need
[23:01] to update as well um
[23:04] how does that affect the way that you
[23:06] program
[23:07] it's it's do do you program this stuff
[23:10] for an ideal situation that maybe
[23:13] sometimes isn't always there or do you
[23:16] have to
[23:17] adjust
[23:18] uh your workflow based on the current
[23:21] state of things
[23:24] it's a bit of a bit of both right so i
[23:26] think there are things that you need to
[23:28] do in the best
[23:29] the edl case like combat needs to be the
[23:32] ideal thing in the sense that you want
[23:33] to have it the snappy decision you know
[23:35] you can't
[23:36] of course even in combat you have
[23:39] different approaches for example if
[23:40] you're going to cover right cover is a
[23:42] state where you can
[23:44] uh
[23:45] you can survive there right it's like
[23:47] i'm just in cover i can make my
[23:48] calculation a bit slower while i'm
[23:50] actually doing some short-term decisions
[23:52] that maybe it's not based on whatever
[23:55] uh requires like high performance and
[23:57] it's the same with social right with
[23:59] social is like if i have a guy said
[24:01] standing on the chair
[24:03] sitting on the chair
[24:04] uh basically you you can assume that
[24:06] there is a state that can persist and
[24:08] make sense
[24:09] right so if that one makes sense
[24:12] then you can take the time that you have
[24:14] like eventually you have a guy reading a
[24:15] book
[24:16] if if he stands five seconds in five
[24:19] seconds in ten seconds it's not really
[24:21] important right that the its state can
[24:23] communicate what he's trying to do no
[24:25] matter what and basically the idea of
[24:27] writing behaviors is a lot about this is
[24:29] about it's a lot about
[24:31] you might stream in any usable right you
[24:33] might start in any usable as a starting
[24:35] point uh and then you might need to
[24:38] decide what is the best thing you can do
[24:40] and the best thing you do first can take
[24:41] a long time to you know or like enough
[24:43] time basically uh to be decided
[24:46] and also you might not never you might
[24:48] never find the optimal thing you want to
[24:50] do right you need always reactively i
[24:51] could do everything right you could you
[24:53] maybe you are a changer you want to take
[24:55] the bronze stick and then the play
[24:57] arrives still and then i say okay what
[25:00] what do you do so you need always to
[25:01] build your behavior in a way to handle
[25:03] situation of course
[25:05] um
[25:06] but i think a lot sometimes it's also
[25:08] just bikes that we have due to the you
[25:10] know server performance that we see
[25:12] i would say as well sorry uh that
[25:16] the question is
[25:17] how much of the
[25:18] the performance of the ai is based
[25:20] around the server performance but also
[25:23] the server performance is also based
[25:24] around
[25:25] how well the ai the ai calculation the
[25:28] performance
[25:29] the zebra performances um
[25:32] is
[25:33] affect the the code of the ai to
[25:36] determine the server performance so we
[25:39] want things that which are gonna
[25:41] not slow down the whole server because
[25:44] the ai lots of ai are processing the
[25:46] same thing so for example with the
[25:48] usable calculations trying to cache as
[25:51] much information as possible so that if
[25:54] you have thousands and thousands of
[25:56] characters they're not going to be
[25:57] slowing down the rest of the server
[25:59] performance right and everyone else's
[26:01] experience just because they're
[26:03] calculating something which might be
[26:05] very cosmetic for example so it's about
[26:08] not what the server can do for you but
[26:10] what
[26:11] you can do for this uh
[26:13] [laughter]
[26:14] yeah it's also i think this this is
[26:15] distributed across all the departments
[26:17] right it's not just the eye but it's
[26:18] like it affects everything even the ipcs
[26:22] cannot absolutely absolutely
[26:25] yes consequences it's every time you
[26:28] because we do a lot
[26:30] in a few places we do predictions so
[26:32] based on the current uh position and
[26:34] velocity of the target
[26:36] um what will be in the next frame it
[26:39] will be maybe here but you know i mean
[26:42] but if it's in two seconds then it's
[26:44] like well i mean the second two
[26:45] milliseconds okay your prediction is
[26:48] okay it's fair it's okay it's okay it's
[26:51] not you know
[26:52] what happens but if it's two seconds can
[26:54] be anywhere i think i think it would
[26:55] probably do a whole hour just on how
[26:57] important prediction is to oh yeah ai
[27:00] yeah a collision avoidance for example
[27:05] um uh
[27:07] this next question's uh
[27:09] we talked a lot about the bartender for
[27:11] a lot so i don't want to spend too much
[27:12] time like in the history of these shows
[27:14] we've talked a lot about the bartender
[27:15] so i don't want to spend too much time
[27:17] but we do have two questions about the
[27:18] bartender basically the first one is
[27:20] what's next after the bartender now that
[27:23] the bartender is in uh what's next for
[27:25] social ai uh they're referencing
[27:27] shopkeepers air traffic controllers uh
[27:29] other civilian roles what can you tell
[27:32] us
[27:33] yeah so currently i'm working on um this
[27:36] this this metal behavior which is kind
[27:39] of um
[27:40] part of
[27:42] all the very um
[27:44] it's four squadron 42 that i'm working
[27:46] on this very uh specific kind of chow
[27:49] line metal
[27:50] behavior but
[27:52] all of this tech
[27:54] is very much geared towards
[27:57] eventually providing systemic stuff for
[27:59] the pu as well so
[28:01] if you're eating and drinking
[28:03] um that's your activity
[28:06] yeah eat and drink is your activity
[28:08] and you want to satisfy your hunger
[28:11] getting
[28:12] kind of hooking all of the bits because
[28:14] we've got kind of we've had little bits
[28:15] and pieces here and there of uh we've
[28:18] got people eat looking like they're
[28:20] eating and drinking but are they
[28:21] actually increasing their are they
[28:23] consider actually consuming the things
[28:25] and are those things being done based on
[28:27] their current requirements of whether
[28:29] they're hungry or thirsty so
[28:32] um i'm bringing that behavior in for
[28:35] squadron 42 but then that will that will
[28:37] then key in and some of our other
[28:40] designers are already working on say
[28:42] vending machine
[28:43] usables and how they provide stuff so
[28:47] all of these things the different
[28:48] possibilities and the vendors for
[28:49] example taking the bartender
[28:52] tech and applying that that which is
[28:55] really just now we've got of vend vendor
[28:58] behavior
[28:59] and and and making pizza vendors and and
[29:03] turning
[29:04] turning like uh the very
[29:06] core features
[29:08] and
[29:08] adding content to make those to expand
[29:11] those two lots of different situations
[29:13] that can be used in the pu
[29:15] um
[29:17] and yeah so there's there's lots of
[29:19] stuff that's gonna
[29:20] little things that we're working out now
[29:22] are gonna be then
[29:24] uh allow our animators and artists and
[29:27] everyone else to generate lots of really
[29:29] great content for the pu
[29:32] um so that's that's currently what we're
[29:34] working on with social ai yeah we
[29:36] mentioned some other stuff as well like
[29:38] in the even in my in montreal we write
[29:40] like for example we have like some
[29:42] dancing behavior like connected to the
[29:44] what andrew is working on right like as
[29:46] he said it's like the activities eat and
[29:48] drink is basically what allows any
[29:50] character to you know replenish his
[29:53] sustenance pretty much uh and
[29:56] for example if you want to use an arcade
[29:58] machine or a vending machine sorry the
[30:00] key machine is more for the laser one
[30:01] but if you want to you know like it's
[30:03] it's food for your for your entertain so
[30:06] still still food [laughter] but it's
[30:08] like uh for for the vending machine
[30:10] right what you use is like they're just
[30:13] options so let's say you want to search
[30:15] for food
[30:16] it's the same as when the ban when the
[30:17] vendor search for the beard you know who
[30:20] can provide the bu order basically this
[30:23] is why the vendor was so critical
[30:25] because he offered so many functionality
[30:27] we use everywhere else right and now
[30:29] it's like you know you can check
[30:31] the vendor has the same things for
[30:32] example when when the pattern drinks you
[30:35] can check how much is you know the drink
[30:37] going down and andrew you will use the
[30:38] same for when you're eating the food
[30:40] right it's like how much is how much
[30:42] food do i still have to finish it and
[30:44] it's the same with the vending machine
[30:45] you say oh i want to buy some food
[30:48] where is it it's like oh it's in the
[30:49] muscle oh it's in the vending machine or
[30:51] is in this shop right you say and then
[30:54] based on where that is we can execute
[30:56] different type of subactivities that are
[30:58] in essence the part of our behavior tree
[31:01] you know behavior flow um it's really
[31:04] more like a baby graph there but
[31:06] basically it's like then we can
[31:08] understand
[31:10] how to then use that that uh the concept
[31:13] basically that is like oh it's food
[31:14] inside the vending machine and now we
[31:16] want to interact with that ambition how
[31:18] you want to consume it and then i think
[31:20] it's just like and then you can use it
[31:22] to how you want to basically dispose of
[31:24] the what remains right if you're in the
[31:27] you know like what you're working on
[31:29] andrew is like even like bringing back
[31:30] you know your tray and it's the same as
[31:32] like we have like some trash can where
[31:34] you know if you're eating like a candy
[31:36] bar right then you want to throw away
[31:38] your your your paper right there
[31:41] and i think this is all stuff that right
[31:42] now is possible
[31:44] because of also the bartender
[31:46] because the part that takes off the
[31:47] glass if it's it place it back into the
[31:49] dishwasher dishwasher is just something
[31:51] that accepts objects and takes care of
[31:54] this you know of cleaning that up so i
[31:56] think it is really opening up a lot of
[31:58] you know the doors actually what then
[32:00] mention as well the
[32:02] refilling of the of the ammo clips is
[32:04] the same so basically the ammo boxes are
[32:07] just usable that can provide you are you
[32:11] know either bullets or you know
[32:12] magazines that's just just just it
[32:15] and then you as an eye you can say like
[32:17] i need bullets where do i find them
[32:19] right it might be another ai it might be
[32:21] the ammo box and then you execute the
[32:23] behavior to basically get what you what
[32:25] you're trying to get
[32:27] i think this is gonna be
[32:29] really interesting because he really
[32:30] opens up this realism a bit more and our
[32:33] game is very physical right so if the
[32:35] guy needs to get the ammo clip
[32:37] you know it's really like there's really
[32:39] an ammo a magazine there inside the box
[32:41] that if the play arrives first he takes
[32:43] it you know and i think this is gonna be
[32:46] really really cool to see it happen
[32:48] it's great to see these little building
[32:49] blocks of different behaviors that we
[32:52] because we we're putting them together
[32:53] now in a lot more complicated ways that
[32:56] we can build on those
[32:58] on those successes and build that level
[33:00] up
[33:01] and getting someone to who just said i
[33:04] i'm hungry
[33:05] he can go through all of this sub-bits
[33:07] of logic and it all it suddenly produces
[33:10] lots of variety of behavior i mean i
[33:12] think even thinking about oh if he's
[33:14] he's hungry but he's not 100 hungry that
[33:17] he might not finish all of his food i
[33:20] might go and have to then dispose of
[33:22] that or or things like that it's really
[33:25] interesting yeah and the more time busy
[33:27] you add more complain like the i at the
[33:28] end is about complexity right so it's
[33:30] like for us it's building something that
[33:32] allows us to
[33:34] you know add as much complex as we can
[33:36] over time right so if at the beginning
[33:38] you just go there you finish your food
[33:40] that's fine and then there's like next
[33:41] iteration you say oh now we actually had
[33:43] all this this kind of uh taste right on
[33:46] top of the behavior and then we add more
[33:48] complexity and then it just looks more
[33:49] and more real and with the systemic
[33:53] stuff as well the
[33:54] the food that you're eating isn't just
[33:57] making you hungry also might if you for
[33:59] example if you're drinking beer it might
[34:00] make you drunk yeah and if you're yeah
[34:06] getting away from the ai stuff now uh
[34:08] the last bartender question uh i promise
[34:11] uh speaking of bartenders when will they
[34:14] start knocking the
[34:16] i almost said the word [laughter]
[34:18] knocking out players that jump behind
[34:19] the bar
[34:22] so i think basically right now we only
[34:23] complain right the bartender only
[34:25] complains right just like hey you should
[34:26] go out because i think
[34:28] it is part of i think about the gameplay
[34:31] and priorities on that one you know and
[34:33] uh we are working a bit a bit on the
[34:35] melee as soon as we work on the melee
[34:37] behaviors as well we use that one you
[34:39] know it's not like crosstalk
[34:41] i think it's also a matter of you don't
[34:43] expect every bartender to do this a
[34:45] bartender microtech is just going to
[34:46] call security a bartender in uh
[34:50] i don't know a shady place is my might
[34:52] pick up a bat and whack you off or just
[34:54] punch in the face whatever
[34:55] uh we also have to balance
[34:58] what happens with the other players
[35:00] because there might be another player
[35:01] waiting to get their drink and do we
[35:03] interrupt that
[35:05] maybe it's just smarter to just call
[35:07] security and that he can continue
[35:09] serving drinks at that point and
[35:11] security will come and we'll deal with
[35:13] intruder it's probably less less
[35:15] disruptive for the player wanting the
[35:17] drink because then you will have a
[35:18] player that just jumps behind the bar
[35:20] parting that takes care of him that guy
[35:22] jumped just behind the bar they just
[35:23] blocked that bartender forever just by
[35:27] getting in in the
[35:29] they should fight between each other and
[35:31] at that point
[35:32] hey just stop punching my bartender just
[35:35] start kiting one bartender to the other
[35:36] bartender um we're going to take a
[35:38] moment here we're about to halfway point
[35:41] um
[35:42] and address the the current server
[35:44] outage here uh as many of the folks in
[35:47] the chat are aware uh
[35:49] at the launch of our iae this uh
[35:52] this year um
[35:53] some of the platform back-end service
[35:56] stuff is
[35:58] wasn't quite ready uh to go it wasn't
[36:00] ready for the influx of people this is a
[36:03] this is a thing that happens almost
[36:05] every single year we we do our best to
[36:07] plan for it we do our best to prepare
[36:09] for it and yet
[36:11] it happens um i don't have any
[36:14] information about the solution at the
[36:16] moment uh
[36:18] as you folks are experiencing right now
[36:20] sometimes it it comes up and then it
[36:22] goes down what not uh i can say that in
[36:25] this this internal chat that i'm looking
[36:28] at um there's a lot of fire
[36:31] emoji
[36:32] a lot of fire gifts um
[36:34] at least three people are drinking
[36:37] heavily i don't think they're actually
[36:38] involved in the fix they're just
[36:40] watching
[36:41] the people who are
[36:43] and
[36:45] one person suggested
[36:48] turning the whole thing on and off again
[36:50] so i assume we'll try everything
[36:53] at some point so
[36:54] guys i i
[36:55] we're here i'm i'm a video producer our
[36:58] guests today are members of the esteemed
[37:02] ai team chosen to be on the show this
[37:04] week because they have no involvement in
[37:07] this the launch of this uh promotion
[37:09] that's going on today so we are here so
[37:12] that the important people who can get
[37:13] this stuff up and running can continue
[37:16] to do their jobs and resolve this issue
[37:18] as quickly as possible so we understand
[37:21] you're frustrated
[37:22] um
[37:24] oh there's flood gifts now i don't know
[37:26] if is a flood
[37:28] more better or worse than fire
[37:30] i don't know when computers are
[37:31] concerned
[37:32] uh either way we're going to continue on
[37:34] with the show i just we're at the
[37:35] halfway point i wanted to give you an
[37:37] update uh if we hear anything more
[37:39] before the end of the show i'll come
[37:41] back with more let's get back to the uh
[37:43] to the ai stuff
[37:44] all right
[37:47] creatures
[37:48] uh a couple weeks ago
[37:51] months ago
[37:53] time in 2020 is blurred it might have
[37:55] been a lot more than that uh we showed
[37:57] uh some creatures on ise early creature
[38:00] development
[38:02] one of the most popular questions has
[38:03] been coming through uh has to do with
[38:05] the work with the related ai work
[38:07] wanting to know uh if that's begun yet
[38:10] or not and if so where are we at
[38:13] so i think we basically started to
[38:15] discuss
[38:17] some of the creature we want to
[38:21] i saw your face guys i would say oh
[38:22] maybe i need it or [laughter] something
[38:24] i'm just talking again
[38:27] yeah basically the somewhat decreases we
[38:29] want to to tackle first uh i i have like
[38:33] some of the basic ideas on how to
[38:36] structure the code uh kind of clear you
[38:38] know especially in my head and i need to
[38:41] possibly talk a bit more with andrea as
[38:42] well about this uh but the idea is is is
[38:45] that we will
[38:46] we already splitting kind of creatures
[38:48] in in different groups right there are
[38:49] smart creatures and you know less
[38:51] markers like of course if you want to
[38:53] simulate something like frogs or fishes
[38:55] you know they don't require like crazy
[38:57] um
[38:59] behaviors running on on them you know
[39:01] they might require a little bit of
[39:02] behavior right but not much mastery
[39:03] communication audio or something like
[39:05] this and some animation playing uh plus
[39:08] i think there are like this split
[39:10] uh the way i want to
[39:12] to progress on this one is that there
[39:13] would be a basic
[39:15] flocking uh kind of state in which they
[39:18] can decide to be part of a flock and
[39:20] when they're part of the flock the flock
[39:22] kind of simulates them uh you know and
[39:25] this can become also part of the more
[39:27] intelligent animals like you know you
[39:29] have
[39:29] ships you have like you know kind of
[39:31] flying something sometimes they move as
[39:33] a flock
[39:34] and then when they want to do something
[39:36] specific when you as a play interact
[39:37] with them then they can go into this
[39:39] extra mode that is like i'm running a
[39:41] full-blown behavior possibly to
[39:44] defend myself attack myself and
[39:46] something so the basic structure
[39:49] that
[39:50] you know we we
[39:51] work on is you know it's pretty much
[39:54] kind of following this line uh
[39:57] basically subsumption code subsumption
[39:58] behavior can be run on any entity for us
[40:01] so it's not really
[40:02] anything related to mpc all the human
[40:05] mpc or you know hdnpcs is really
[40:08] any any object can be uh
[40:10] uh an ii agent you know as we call they
[40:13] can move around we can define them i
[40:15] know how they move uh we can have
[40:17] different uh but following styles for
[40:19] animals of course you know and different
[40:21] type of
[40:22] actions for example the stuff that i was
[40:23] talking about before like the navigation
[40:25] links right those can define how you
[40:27] jump over objects or how you use some
[40:29] objects to perform you know special
[40:31] actions i imagine you jump against a you
[40:33] know tree and then you just jump on top
[40:35] of a guy
[40:36] these are special action that you can
[40:38] use you can you know dynamically checked
[40:41] similar to how you know a ship would do
[40:43] a special you know action or you know uh
[40:46] wants to show off and um
[40:49] yeah basically
[40:50] not sure if he answers all the you know
[40:52] questions there i don't know then if you
[40:54] want to add anything on that
[40:56] uh
[40:57] no the question is basically whether
[40:59] we have started development and i think
[41:02] we're very early
[41:04] yeah very early i think the guys that
[41:07] are working on the actual creature lore
[41:09] and the creature uh art concept art are
[41:12] uh ahead of us but that is generally a
[41:15] good place to be uh i think the the main
[41:18] reason where where we are now is because
[41:21] we're still focusing on on the on the
[41:24] human yeah it's priority
[41:27] definitely a higher priority if this was
[41:29] a hunting game about hunting animals
[41:31] then animals would have been our
[41:32] priority but for now we need to get
[41:34] humans and
[41:35] maybe also some of the aliens needed for
[41:38] for squadron in a decent state before we
[41:41] move to this otherwise we would have to
[41:43] create an extra team which means we get
[41:45] another
[41:46] uh we pull resources from
[41:49] uh from the existing teams and it's it
[41:51] would be a risk right now we'd rather do
[41:53] one thing to it properly then move to
[41:54] the next
[41:56] priority is always at the heart of
[41:58] every game development decision it's
[42:00] just as no matter even with what is now
[42:03] you know
[42:04] five studios six studios around the
[42:06] world uh
[42:07] 500 s
[42:09] somewhere almost 600 people around the
[42:11] world there's still
[42:12] a finite number of resources and only so
[42:14] many things that can be worked on the
[42:16] only thing we can do and this is what we
[42:18] usually really do is try to be smart
[42:19] right so if we make a systems that we
[42:21] know it might be eventually
[42:23] not you know used by by the creatures as
[42:25] well of course we do it in the proper
[42:27] way so that even if you are not really
[42:29] starting officially they work on that
[42:31] you know when you start
[42:33] you start a little bit ahead right like
[42:35] all this usable code for example again
[42:37] creatures are not necessarily always
[42:38] like on ground as well right they might
[42:40] be you know flying ones and some of
[42:42] these they used the same code that we
[42:44] use for you know to find a pretty path
[42:47] on you know
[42:49] on a planet surface it's pretty much the
[42:52] same thing we use it you know and we
[42:54] implement in a way which can be used in
[42:56] a generic way
[42:57] and things like flocking behavior for
[42:59] example can feed back into the crowd
[43:02] behaviors
[43:04] the humans and i was actually thinking
[43:06] about
[43:07] um if it's if they're kind of cosmetic
[43:10] creatures
[43:11] um you could that's one example of where
[43:13] you could have the ai actually being on
[43:15] the clients or on the servers because
[43:17] they're flocking if you've got like a
[43:19] flocks of butterflies or something like
[43:20] that if you can't catch them or interact
[43:23] exactly right then
[43:26] simulated to really high fidelity on
[43:28] your on your clients rather than the
[43:30] server and get something really reactive
[43:33] but can be very effective
[43:35] um seeing lots of flocks of small
[43:38] creatures could be really cool
[43:41] uh will having a pet of some kind be
[43:44] possible
[43:46] yes it would be possible because it's
[43:48] very similar to a friendly
[43:50] npcs you know somebody like kind of when
[43:53] we talk about you know crew management
[43:54] is that you hire a person i said well
[43:56] you know you buy a pet
[43:58] and it's you know of course their
[43:59] behavior is going to be different you
[44:00] know maybe the comments you can give
[44:02] them you know might be different you
[44:03] might interact in a different way but
[44:05] under the hood is really the same system
[44:08] and this is where i was saying like it
[44:09] is cool because what we we are making
[44:12] the same way like when when you open up
[44:14] the door from the vendor to do a lot of
[44:16] behavior it's like that opens up also a
[44:18] lot of other stuff from the from the
[44:20] animals from the pet right the pet might
[44:22] want to just find food
[44:24] you might put food into a little bowl
[44:26] and when he searches for food he finds
[44:28] the ball that you place there right so i
[44:30] think that is all cool stuff and of
[44:32] course pets were one of the original one
[44:34] of the one of the later but maybe even
[44:36] the last of the original stretch goals
[44:38] uh back during back during the original
[44:40] campaign so um
[44:42] i last creature related question this
[44:44] one's from me will we be able to pet the
[44:46] dog
[44:48] yes i hope so okay because that's the
[44:51] cuddling as well
[44:53] don't don't put [laughter] pets in and
[44:55] not let us pet the dog all right um i'll
[44:58] be very careful allowing players to pick
[45:00] up the pick up the dog i'm scared what
[45:02] they'll do to that well careful careful
[45:05] they say [laughter] pick up i didn't say
[45:06] pick up well if you cuddle him you have
[45:08] to pick it up somehow okay i'll be back
[45:11] if you're worried about that wait until
[45:12] the tractor beam attachment you can see
[45:15] claire is looking at the dog inspecting
[45:17] the dog and then throwing them bad bad
[45:19] idea
[45:20] bad dog
[45:22] [laughter]
[45:23] all right back on track um
[45:25] let's get back to some humanoid ai here
[45:28] uh
[45:29] well ai in the game
[45:31] found it like npcs and stations towns
[45:34] stuff like that or or even wildlife okay
[45:36] follow and use the same survival
[45:38] requirements that players currently do
[45:41] uh basically will ai get hungry will
[45:44] they get thirsty will they have to heal
[45:46] stuff like that
[45:47] absolutely so this is basically what
[45:49] andrew is working on is exactly the
[45:51] stuff with them and these were also like
[45:52] creatures would be the same right so
[45:54] christian would use you know this stat
[45:56] system you know they would get you know
[45:58] angry humans you know will get angry uh
[46:01] they will have to you know find some
[46:03] food uh of course we are not doing like
[46:05] uh the same simulation way you know
[46:08] that's the bar and stuff like this but
[46:10] based on your flow what if you know if
[46:12] you are working you know immediately
[46:13] like you're really like a uh an airplane
[46:16] pilot for real right then you get hungry
[46:18] it's not that you say oh bye guys you
[46:19] know you just leave the the cockpit then
[46:21] you go eat something so you can sustain
[46:24] you know these these values and you can
[46:26] do it at the right moment but you know
[46:28] we will basically have these these needs
[46:31] that they need to be fulfilled to
[46:32] perform better right if you are like
[46:34] super hungry and swear thirsty you're
[46:36] fighting you're not gonna be as
[46:37] efficient you know uh as if you are like
[46:40] just fed up and full energy then do you
[46:43] want to add some more stuff on the
[46:44] design side
[46:47] uh no i think that pretty much covers it
[46:49] it's just a
[46:50] simplified simulation that we we're
[46:53] definitely not don't want to use as many
[46:55] resources from the server side as the
[46:57] player does it's just
[46:59] of course the effect is going to be the
[47:00] same the guys are going to have needs
[47:03] basically they're going to have hygiene
[47:05] they're going to have food needs drink
[47:07] needs so they're going to try to cover
[47:09] this they're going to try to find a
[47:10] place in their environment to
[47:12] uh to do this if not they'll try to find
[47:15] the place outside of that they can i
[47:17] travel a bit and then find what i need
[47:20] uh yeah pretty much and that's i think
[47:22] definitely
[47:24] i think what sometimes i think we you
[47:26] know we tend to think backwards in a
[47:28] sense i think those systems also help us
[47:30] to drive the behavior it's not just uh
[47:32] you know we want to support it because
[47:34] school for ray is really like it's it's
[47:36] cool to have that one because first
[47:38] everything works consistently right the
[47:40] same things that happen for the player
[47:41] happens for the idea is actually running
[47:44] the same code as the play it is sort of
[47:46] you know player on the server in a sense
[47:48] uh uses the same you know of course like
[47:50] there are some adjustments on the state
[47:52] machine based on needs that we have but
[47:53] you know the same machine is the same
[47:55] the systems are the same they're just
[47:57] actor and in terms of of the game
[48:00] um
[48:02] but really that one helps us also
[48:03] driving like a realistic behavior right
[48:05] otherwise what you do just to run like
[48:07] randomly you go to eat something and
[48:08] stuff like this but then it's very hard
[48:10] like you lose the context and that
[48:12] context you need to put it somewhere and
[48:14] that point you put it the same place
[48:15] where the player is and then
[48:17] the player wants is and then it works
[48:19] the same and it much it looks much
[48:20] colder
[48:22] than what you said about the
[48:24] because we've got not just because we've
[48:25] got the plate the reason why the player
[48:28] doing the same thing is so useful is
[48:30] because we've got this the third person
[48:32] player
[48:33] therefore
[48:34] things are driven through animations in
[48:36] the same in the exact same way that they
[48:38] will be different
[48:40] with the ai so yeah that behavior just
[48:43] falls out of the same systems which is
[48:45] really useful
[48:47] although there's always tweaks with the
[48:49] there's
[48:50] some slight differences but yeah a lot
[48:52] of it is so similar and so cool that you
[48:55] get that benefit
[48:57] so uh so we are we are approaching the
[49:00] end we've got about 10 minutes left i do
[49:02] have another update on the outage uh
[49:05] there are
[49:06] there are many people actually getting
[49:08] online and being able to access many
[49:10] parts of the website so that's good uh
[49:13] but somebody from the platform team just
[49:15] posted the uh the uh
[49:17] indiana jones and the last crusade gif
[49:20] of choosing the wrong grail and their
[49:22] whole face melting away so that seems
[49:25] less good so your mileage may vary uh
[49:29] stick with it
[49:31] they're working on it
[49:32] um
[49:33] as we wrap up today uh there were a lot
[49:36] of questions
[49:38] that were related to the idea of
[49:42] ai npc crew
[49:44] now we've saved we've saved a lot of
[49:46] these for the end they were clearly the
[49:48] most the topic that players were most
[49:50] interested in when they submitted their
[49:51] questions uh we're going to talk a
[49:53] little bit about that now before we wrap
[49:55] up today i do want to stress that
[49:58] when we talk about
[49:59] early work and stuff that is farther on
[50:02] the horizon this is stuff that is
[50:04] farther on the horizon so what we're
[50:06] going to talk about right now is a lot
[50:07] of our intentions the things that we
[50:09] want to achieve
[50:10] with ai npc crews like this but as
[50:14] always happens with game development as
[50:16] other systems come online and as as new
[50:19] new tech comes available uh
[50:21] these things change and evolve over time
[50:23] so we are going to talk about our
[50:24] current uh we're going to talk about our
[50:26] current intentions uh with regards to ai
[50:29] uh mpc crew
[50:31] so let's start off
[50:33] by first explaining the difference
[50:35] between
[50:36] ai npc crew and ai server blades for
[50:42] spacecraft because they are two very
[50:44] different things and i think sometimes a
[50:45] lot of people use the term ai
[50:47] interchangeably uh to mean both so let's
[50:50] start off with the differential there
[50:54] i'll take that one okay no one else
[50:55] wants to jump on it [laughter]
[50:57] that's all you dan
[50:59] now uh they're both ai
[51:02] they are definitely both ai especially
[51:05] from our perspective they are going to
[51:07] be running the same behavior how
[51:09] an ai needs to aim a gun to shoot down a
[51:12] ship
[51:13] is exactly the same way a human is going
[51:15] to aim that same gun to shoot a ship the
[51:17] same behavior is going to run through
[51:18] all of this
[51:19] now gameplay-wise there are differences
[51:22] a blade is a sub-component on a ship you
[51:24] will
[51:26] plug it in and suddenly sign assign a
[51:28] turret to use that blade and the turret
[51:30] knows how to do it
[51:32] there are disadvantages here uh first of
[51:35] all
[51:36] the blades are gonna be
[51:38] worse than npcs we have this grading of
[51:41] the player
[51:42] if you take an average player it's going
[51:43] to be better than an average npc and
[51:46] it's going to be better than
[51:47] an average play
[51:49] yeah so pretty much we automatically is
[51:52] not that good at the job the the
[51:56] turret blades are actually going to
[51:57] occupy a blade slot which means you
[51:59] can't equip another blade for other
[52:01] functionality you might want on the ship
[52:03] so that is a valuable slot that you're
[52:05] losing just to have one turret start
[52:07] shoot without shooting without an npc
[52:09] there basically you're cheap you're a
[52:10] cheap bastard you don't want to pay
[52:12] someone to to take that slot whether
[52:14] it's a player or an npc
[52:16] just just pay them pay the money and get
[52:18] hire someone and get them to shoot
[52:22] you can pay for a blade that is the
[52:23] cheap alternative don't do that i mean
[52:25] do it if you can't afford anything else
[52:28] and then you have
[52:29] the ship is going to have only enough uh
[52:32] blades to run a part of the turrets so
[52:35] let's say you have a ship like a
[52:37] hammerhead you won't be able to have
[52:39] enough blade slots to make all the
[52:42] tourists function
[52:43] so there's not that downside uh so
[52:47] this is mainly where where the
[52:48] difference uh runs uh ai wise i guess uh
[52:52] if some of the programmers want to chip
[52:54] into this with how the behavior for this
[52:56] works maybe they can clear
[52:58] some some stuff
[53:01] behaviors are just the same behavior the
[53:03] npc we run um but maybe most importantly
[53:08] the behavior will be the same the
[53:10] activity be the same and maybe how you
[53:13] characterize the blade uh
[53:16] we go through
[53:17] skills so uh
[53:19] sort of uh editing your uh the skills
[53:23] the capacities of this
[53:26] in this case
[53:27] i think as dan said it's like not all
[53:29] the seats can be replaced right so there
[53:31] would be
[53:32] crew members that you know they would be
[53:34] purely npcs and and i think the critical
[53:37] part here i guess is to to
[53:39] like basically the same way we let
[53:42] designer in specific environment to ask
[53:45] npcs to do things right this is how
[53:49] under the hood is the same way as when
[53:51] the player will give them commands right
[53:53] if you ask an npc
[53:55] go and be the turret guy right what will
[53:58] happen is the same as when
[54:00] a designer set up like a mission and he
[54:02] has an npc sitting on a turret you know
[54:04] on a turret seat
[54:06] if you ask a guy you say like you know
[54:07] what i want you to fix that panel right
[54:11] you can do it and it's the same way as
[54:13] when a designer asks you know an npc to
[54:16] go and repair exactly that panel so the
[54:18] way we build the behaviors and you know
[54:20] especially like all the
[54:22] this screw management you know the the
[54:25] part of the crew the guys in the crew
[54:28] uh it's made in a way in which they can
[54:30] perform by themselves as best as they
[54:32] can their jobs based on the skill based
[54:34] on the traits right uh so imagine like
[54:36] you have somebody who likes to you know
[54:38] uh
[54:39] like just uh procrastinate you will have
[54:41] your engineer that goes around and just
[54:44] sometimes you find this smoking spot you
[54:46] know or i don't know like some rest and
[54:48] resting areas and it just hides there
[54:49] and not doing its job but you know you
[54:51] might have a supervisor that goes around
[54:53] and sends tasks to viva right and then
[54:55] you know it goes and tries to supervise
[54:56] them uh you know we have the same on the
[54:58] on the bridge crew right the
[55:00] captain can go around and supervise the
[55:03] npc's and see if they're doing a good
[55:04] job or not then maybe you know
[55:06] just tell them something and uh and the
[55:09] same for the player will be basically
[55:11] right and then they can assign them
[55:13] another thing there is like there's more
[55:19] you hire right you gameplay
[55:20] hire somebody really good on shield
[55:21] management but it kind of sucks at you
[55:24] know shooting you know through a turret
[55:25] and if
[55:26] you know maybe you need both but you
[55:28] don't have enough money you know you are
[55:30] one guy and then you know you live with
[55:32] whatever it's most of your needs but the
[55:35] good thing is that you know these skills
[55:37] and levels you know just carry through
[55:39] the games it's kind of cool that you see
[55:41] the guy maybe getting better at some of
[55:43] those some of those will allow you to
[55:44] train some others will just be your
[55:46] character traits you know somebody's
[55:48] coward you know and you just put him on
[55:50] you know
[55:51] try to defend you it's gonna just be a
[55:54] coward pilot right so it might just give
[55:56] up defending you if things are bad
[55:59] um
[56:00] you know and suddenly this but maybe
[56:01] somebody super skilled you know costs
[56:03] much more money
[56:05] so it is going to create this extra you
[56:08] know level layer of gameplay as well
[56:11] yeah i just so yeah oh god then
[56:13] i would like to mention is that we're
[56:15] already building all of our behaviors to
[56:17] take skills and traits into
[56:19] consideration so
[56:21] uh basically even the guys you you are
[56:24] fighting in korea
[56:25] they have skills and traits that are
[56:27] going to be driving some of the
[56:29] decisions the behavior tree is exactly
[56:31] the same but there are branches where it
[56:32] goes well do i have this skill to do
[56:34] this thing or how good am i at doing
[56:37] this this specific thing exactly the
[56:39] same stuff we'll be using for for nbc's
[56:42] crews basically because we built the
[56:44] system in such a way where we we we
[56:46] thought a bit ahead and we're like well
[56:47] we want crews let's start building the
[56:49] skill the skill and trade system that's
[56:51] going to dictate how the behavior runs
[56:53] or how efficient someone is at the job
[56:56] and you as a player you discard that you
[56:57] don't know all right so it's like there
[56:58] are some traits might enable you to do a
[57:01] tactic some traits might just make a
[57:03] tattoo different right it's like oh
[57:05] maybe you know you do that and you're
[57:06] really not that good and i'm doing it
[57:08] something like this or the pc thinks
[57:10] he's good at doing it but it's not
[57:12] really you know you have a very
[57:14] confident but stupid npc exactly exactly
[57:17] problems yeah let's especially what i've
[57:19] been working on actually
[57:21] was the uh we had um defining some stuff
[57:24] like cowardly and show off
[57:26] the pilots
[57:27] and you'd get show off as a like
[57:30] a show-off pilot would be more likely to
[57:32] do tricks
[57:33] but his piloting skill would determine
[57:36] how
[57:37] actually useful those tricks are so you
[57:39] might get a [ __ ] pilot uh who just like
[57:42] really sluggishly rolls
[57:44] uh just for no good reason and actually
[57:46] makes himself a better target
[57:49] you know
[57:51] i think a lot it would be cool like to
[57:53] have like readability there right with
[57:55] the messages it's like ah look at me
[57:56] you're never gonna catch me and then you
[57:58] destroy me you know it's like that's
[57:59] gonna be fun
[58:01] so it sounds like
[58:03] so so
[58:04] basically
[58:05] blades are
[58:07] a personality less
[58:09] skill-less kind of bottom tier
[58:11] automation for turrets only and then
[58:14] above that there are ai npcs who will
[58:18] have
[58:18] personalities and characteristics and
[58:21] aptitudes and things are good at things
[58:23] they're badass stuff like this and they
[58:25] can operate not only turrets but you
[58:27] know other cruise stations uh within
[58:29] within ships yes exactly and you
[58:32] mentioned something very important there
[58:34] is like the state of your mbc crew which
[58:37] is like art which is going to be
[58:38] important it's not just their skills are
[58:40] they well fed are they happy are they
[58:43] ready are they like
[58:44] almost about to leave your ship then
[58:46] they're not going to do a great job
[58:48] shooting someone or manning the station
[58:50] they're gonna be upset they're not gonna
[58:52] they're gonna become careless so you
[58:54] will need to maintain your crew you'll
[58:56] need to make sure they're happy you will
[58:57] need to make sure that you provide food
[58:59] that's why our ships have a kitchen have
[59:01] a food dispenser so you will need to
[59:03] really you take care of them as your
[59:05] family if you've seen there's there's so
[59:06] many sci-fi shows that do this that that
[59:09] small unit on a ship that there
[59:12] there's interpersonal personal
[59:13] relationship you have to occasionally
[59:15] talk to them and see what's uh what's
[59:17] going on you have to watch their stats
[59:19] make sure they're in peak working
[59:21] condition while the blade is just ugly
[59:24] yeah cool uh well guys that about
[59:27] wraps it up uh thank you so much for
[59:30] taking the time out of your your busy
[59:32] week to you know be here at the end with
[59:34] us talk about ai as we don't get to talk
[59:36] with you guys nearly enough
[59:38] uh in fact when i called francesco uh
[59:40] last week i'm like
[59:42] hey
[59:43] and like i feel like he knew exactly
[59:45] what i was calling because because i
[59:46] hadn't called him in so long he's like
[59:48] is it my time i'm like yes it is
[59:51] um to pay the price yep uh as far as a
[59:55] last uh update on what's going on uh
[59:58] things are beginning to come up now
[1:00:00] the published process is beginning to
[1:00:02] resume
[1:00:04] if you don't know what the publish
[1:00:04] process is that's basically everything
[1:00:06] doesn't turn on all the aspects of iae
[1:00:09] don't turn on at the same time it's it's
[1:00:11] they're all done in pieces so so that we
[1:00:13] try not to overwhelm the system the
[1:00:15] system became overwhelmed in the middle
[1:00:18] of turning on so that's why you've seen
[1:00:19] things like
[1:00:21] pioneer warbond but maybe not the
[1:00:23] pioneer credits stuff like this because
[1:00:25] the publish was interrupted in the
[1:00:27] middle of its checklist while when
[1:00:29] whatever was happening i still don't
[1:00:31] know what's happening i've been here
[1:00:32] doing this but i'm being told that the
[1:00:35] publish is resuming so things are coming
[1:00:37] back online so
[1:00:38] we just ask for a little bit more
[1:00:40] patience as that stuff is coming online
[1:00:43] the best place to look for updates is
[1:00:45] obviously the status page that they have
[1:00:47] or you can follow along on
[1:00:49] twitter for instance i know they're
[1:00:51] doing a lot of status updates there
[1:00:53] so because everything is kind of shady
[1:00:55] we're gonna forego the raid uh today uh
[1:00:58] and just wrap things up there uh william
[1:01:01] uh
[1:01:02] andrea andrew dan francesco thank you so
[1:01:06] much for being here on the show
[1:01:08] this week uh allow me allow me to salute
[1:01:11] you gentlemen
[1:01:13] no not again not again
[1:01:15] [snorts]
[1:01:15] damn
[1:01:17] [laughter]
[1:01:18] all right i'll see you later everybody
[1:01:19] take care
[1:01:21] bye
[1:01:22] bye
[1:01:48] you

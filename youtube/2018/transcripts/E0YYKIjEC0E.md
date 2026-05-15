# Star Citizen: Reverse the Verse LIVE - Object Container Streaming

**Video:** https://www.youtube.com/watch?v=E0YYKIjEC0E
**Date:** 2018-09-07
**Duration:** 1:02:34

## Transcript

[00:06] [Music]
[00:12] Hi everybody. Welcome to a special
[00:14] edition of Reverse the Verse Live here
[00:16] in uh the Tagert Conference Room. The
[00:19] beautiful, stylish uh Keith is shaking
[00:22] his head over there. Tagert conference
[00:24] room in in Wimslow, United Kingdom. Uh
[00:26] I'm your host, content manager for
[00:27] Global Video Production, Jared Huckabe.
[00:29] And today we are joined by an esteemed
[00:32] panel of engineers and QA and
[00:34] programmers here to discuss a topic very
[00:37] close to my heart. Uh I was going to say
[00:41] something funny like basket weaving but
[00:42] no it's object container streaming. Uh
[00:44] now object container streaming is
[00:45] something we've been talking about for a
[00:47] long time. uh we we it's we when we
[00:50] started the conversation about uh
[00:51] serialized variables once upon a time
[00:54] for buying calling object container
[00:56] streaming network performance
[00:57] improvements you know all these all
[00:59] these different topics that all kind of
[01:01] roll into an overall performance uh uh
[01:04] improvement for Star Citizen. Uh we
[01:06] wanted as we approach 33 and the uh the
[01:09] inclusion of Hursten and and object
[01:12] container streaming, we wanted to take
[01:13] one of these last opportunities to
[01:15] really dive into what this system is and
[01:17] explore the work that's being done and
[01:20] uh maybe dispel a couple myths about it
[01:22] because we see a lot of misinformation
[01:23] on on the forums and stuff like that. Uh
[01:25] people thinking it's a silver bullet
[01:27] that's going to solve every problem in
[01:28] the world and stuff like that. So, I
[01:30] really want to take some time to talk
[01:31] through exactly what object container
[01:33] streaming is uh and what it means for
[01:36] Star Citizen. Before we do that, we do
[01:38] the same thing every week. We assume
[01:40] that nobody has seen any other episode
[01:41] of Reverse the Verse before. So, let's
[01:43] take a few moments and introduce
[01:44] ourselves. And we'll start over here
[01:46] with you, Gordon. Who are you and what
[01:47] do you do for Star Citizen?
[01:48] I am Gordon Mlan. I'm a senior gameplay
[01:51] programmer um on the FPS team here in
[01:53] Wimsilo. So, um my main rema is the
[01:56] actor. So I own the actual player and
[01:59] any sort of human type person running
[02:01] around.
[02:02] Gotcha.
[02:03] Yeah. So I've been here for like three
[02:04] and a half years now.
[02:05] Say you've been here just about as long
[02:06] as I am.
[02:07] Yeah, I've been here for quite a bit
[02:08] now. So yeah.
[02:10] And uh you said uh most of your focus is
[02:13] on FPS stuff, but how how what what have
[02:16] you been doing with regards to object
[02:18] container streaming?
[02:18] Yeah. So I was sort of drafted in as
[02:20] support gameplay engineering support for
[02:22] object container streaming. Um so it's a
[02:24] lot of sort of um
[02:27] mostly bug fixing and sort of fixing
[02:29] peripheral issues around OCS. Um sort of
[02:34] probably the main biggest one was the
[02:35] likes of the mission markers for
[02:37] instance. So making them work with OCS
[02:40] tracking tracking a mission when you're
[02:41] out of range of such like um yeah and
[02:44] then general performance stuff as well.
[02:46] Tracking all the stuff that he brings
[02:48] up.
[02:48] Yeah, pretty much.
[02:49] So Chris, who are you and what do you do
[02:51] for Star Citizen? Uh I'm Chris
[02:52] Eckersley. I'm lead technical QA in the
[02:55] UK.
[02:56] And what do you do for start? So what
[02:58] what does that do?
[02:59] Um so we're part of the main QA
[03:01] department, but uh we tend to handle
[03:03] more of the tools and techy side of
[03:06] things. Uh so we tend to be a bit more
[03:09] hands-on with the servers than the rest
[03:10] of the department, which is why uh OCS
[03:13] and Bulling stuff tends to fall our way.
[03:15] Gotcha. So less of the less of the
[03:18] gameplay stuff. A big misconception
[03:20] about QA is that it's all just playing
[03:22] the game all day. Uh you're you're
[03:24] you're you're sitting there beating on
[03:25] the tools and the servers and the back
[03:26] end and stuff like that.
[03:27] That's right. Yeah.
[03:28] Gotcha. And last but certainly not
[03:30] least, Clive. Who are you and what do
[03:31] you do for Star Citizen?
[03:32] I'm Clive Johnson. I'm the lead network
[03:34] programmer. Um what do I do? Uh
[03:38] yeah,
[03:39] you're Mr. Happy Funtime.
[03:40] Yeah, program a little bit of
[03:42] networking. Uh try and avoid going into
[03:44] meetings. Um, so yeah, my my main focus
[03:47] is the the client server network rather
[03:49] than the back end side. Uh, so it's it's
[03:52] getting the game plan to talk to the
[03:53] server and get the information back uh
[03:55] as efficiently and um with as little
[03:59] bandwidth as possible.
[04:00] Gotcha. Now we've featured Clive on
[04:03] other shows about networking and about
[04:06] buying calling and stuff like that. Um,
[04:08] we as always with Reverse the Verse, we
[04:10] are going to be taking questions live
[04:12] from the Twitch chat where you can
[04:13] submit your questions with the word
[04:14] question in capital letters surrounded
[04:16] by brackets. You can also do so in
[04:17] Spectrum, our live uh communication
[04:19] platform on robertspace industries.com.
[04:21] Uh, the question period is going to come
[04:23] a little bit later because I I want to I
[04:25] want to I want to start with a with an
[04:26] oral journey, if you would. I want to
[04:28] shake things up a little bit a little
[04:30] different. I don't I only get one week a
[04:32] year in these other studios. Uh, so now
[04:35] I've got you here all in a room. You
[04:37] can't fake, oh, the Skype call went down
[04:39] or whatever because I'm here. Um, let's
[04:42] just talk about OCS in general. Uh,
[04:44] let's start at the beginning. What were
[04:46] we trying to achieve with OCS? It's it's
[04:50] a what what what was you know we we
[04:52] started working on OCS I think when I
[04:54] was talking to Luke Hail who's a a the
[04:56] associate producer that that handles a
[04:58] lot of your work he said the the
[05:00] earliest works on this you started about
[05:02] three years ago uh when we started work
[05:05] on OCS 3 years ago what were we trying
[05:08] to achieve
[05:09] the the main concerns always been trying
[05:12] to fit Star Citizen onto um a a player's
[05:17] computer Um obviously we servers tend to
[05:21] be a lot more powerful than the domestic
[05:24] users computer. So having all this
[05:28] expansive solar system uh all the
[05:30] planets all the locations
[05:34] uh all the ships loaded in all the time
[05:36] is just not possible without masses and
[05:39] masses of memory which is much more than
[05:42] your typical user is going to have. Um,
[05:44] so the primary concern is just making
[05:46] the game fit, breaking it up into
[05:47] smaller chunks that can fit on each
[05:49] player's PC.
[05:51] Gotcha. when we when we started moving
[05:53] towards 360°ree
[05:57] fully realized moons and planets and
[06:00] wanting to do that without loading
[06:01] screens, you know, you leave up from one
[06:03] and you don't want to like you set
[06:04] course for from Hurst into microte and
[06:07] you don't want to go, you know, quantum
[06:08] jump and then it goes, you know, loading
[06:09] screen, you know, and then and change
[06:12] that. Um, object container streaming was
[06:15] was the tech that we wanted to be able
[06:17] to seamlessly move like when you turn
[06:20] away from Hurston, you move away from
[06:21] Hurston to pull Hursten out of out of
[06:24] out of a out of a client's memory and
[06:26] then feed in microte that and then vice
[06:29] versa. And this and it's not just the
[06:31] juggling of the client side, it's also
[06:32] of the server side. I understand it's
[06:34] doing the same thing with the server
[06:35] because even once we start putting in
[06:37] all these space stations and and uh uh
[06:40] planets and moons and everything uh
[06:42] servers still have a finite amount of
[06:44] memory finite amount of processing
[06:46] power. So there's there's client side
[06:49] OCS and then there's still a serverside
[06:50] component. Am I right with that?
[06:52] That's that's right. That's not
[06:53] something we're working on for 3 further
[06:56] down the line. Um but yeah, because the
[07:00] solar system is going to get even more
[07:02] densely populated and more planets and
[07:03] so on, uh even the servers with a
[07:05] massive amount of memory that they have
[07:07] won't be able to keep everything in
[07:08] place at the same time. So they'll need
[07:10] to stream in and out locations based on
[07:12] demand. So when a player goes to a
[07:13] location or as he's heading towards a
[07:15] location rather, the server will detect
[07:17] that go okay, I need to stream in the
[07:19] the entities that are there that the all
[07:21] the planet and directs and whatever
[07:24] around. Um, so by the time the player
[07:28] reaches that location, it's all in
[07:30] memory on the server, it'll the server
[07:32] has to coordinate that with the client
[07:34] itself and tell the client what it needs
[07:36] to stream in. So the entities are
[07:39] present on the client as well. Uh, and
[07:41] then when the player leaves that
[07:43] location, the server's free to unload
[07:45] that information, free the memory for
[07:47] anything else. We were talking just a
[07:49] few minutes before we went live and uh
[07:51] this isn't a technology that we're
[07:54] inventing for Star Citizen that this
[07:56] this this this juggling act of moving
[07:59] things in and out of of of memory in
[08:00] video games. This exists for many years.
[08:03] Yes. Yeah.
[08:05] What's the difference with Star Citizen?
[08:07] Why why why is this such a big thing for
[08:09] Star Citizen then?
[08:10] Um well, map streaming is generally more
[08:14] common in single player games. Um, a
[08:17] lot, not all, but a lot of, um,
[08:20] multiplayer games will confine the maps
[08:22] to smaller sizes so that it can all fit
[08:24] in memory all at once. Uh, so once
[08:26] you've loaded in,
[08:27] all the memory is resident on your
[08:29] client. Sorry, all the data is resident
[08:31] on your client. No streamings required
[08:33] and that cuts down uh, the chance of any
[08:35] stalls
[08:37] uh, or any frame rate hits uh, and makes
[08:39] for a smoother online experience. said
[08:41] that the challenge is to do streaming
[08:44] during a multiplayer game.
[08:46] Mhm.
[08:47] Not have any stalls or um performance
[08:49] hits. And it's also, as I say, it's
[08:52] about the scale that we're doing this
[08:54] on. Um obviously our our maps are
[09:00] millions of times bigger than than most
[09:04] maps of of virtually any other game. So
[09:06] yeah, it's it's a question of scale and
[09:08] trying to do it while you're online as
[09:09] well.
[09:10] Gotcha. So, it's it's not that we're
[09:12] necessarily reinventing the wheel here.
[09:14] It's that we're adapting the wheel to a
[09:15] scale that's previously unheard of.
[09:18] Yeah, it Yeah, we are we're probably one
[09:22] of the bigger games ever envisioned at
[09:25] this point. Um, and we've kind of we've
[09:28] we've done quite a lot of stuff over the
[09:29] last couple years where we've had like
[09:30] snippets of game like Star Commander
[09:32] where it's been like a small contained
[09:34] bubble of the game and we're now going
[09:35] right, it's now that, but it's in this
[09:37] big massive universe. It's making
[09:39] everything bigger and by going well if
[09:42] we only need to stream in this one bit
[09:43] where the FPS is happening the
[09:45] performance should be the same as star
[09:46] reading probably on the client. So
[09:51] um now
[09:52] so that's why we want to do it what's
[09:55] this look like when when when we get
[09:57] there now now obviously 33 and you you
[10:00] mentioned it earlier and I'm glad you
[10:01] brought up the the server side object
[10:03] container streaming is not a is not a
[10:05] part of the work that we're doing right
[10:06] now. Uh we're doing we're working on the
[10:08] client side uh object container
[10:10] streaming. Uh but once this is all done,
[10:13] let let's let's jump ahead. You know how
[10:15] much I love jumping ahead to the far
[10:17] future, but I'm going to do it this
[10:18] time. Once we jump ahead, once once
[10:21] we've got binding and once we've got uh
[10:23] server side uh object container
[10:25] streaming and then in the future once we
[10:27] have server side, what did I say that
[10:29] right? Client once we have client side
[10:31] object data streaming and then later on
[10:33] down the road once we have server side
[10:34] object container streaming. What's
[10:36] what's that going to look like as as far
[10:38] as performance? Do does everybody
[10:40] suddenly just get 90 frames a second on
[10:42] everything? It it's it's what what
[10:45] what's this picture look like?
[10:47] Um,
[10:49] okay. It it's not it's not a silver
[10:51] bullet as you kind of mentioned before.
[10:53] So, we can't make any guarantees on how
[10:57] performance is going to improve. Um,
[11:00] partly because there's so many
[11:03] variations of CPUs and motherboards and
[11:05] RAM and everything else and GPUs that
[11:08] you can't predict how it's going to
[11:10] affect all the different combinations.
[11:12] So, it's a best guess uh what we think
[11:14] is actually going to help um what it's
[11:17] going to look like. So effectively the
[11:19] the difference to what you have now is
[11:22] you start off in your bed at port also
[11:24] um and
[11:26] yellow is loaded on your clients um and
[11:29] there are entities on your client in
[11:31] memory hopefully idle and not doing
[11:34] anything if the um the in range um
[11:37] update calling is is working correctly.
[11:40] Uh the difference will be with OCS
[11:43] you'll load into Port Alisar and
[11:45] basically Port Alisar
[11:48] and a few entities for the the uh the
[11:51] what's it called the uh the star map
[11:53] will be loaded and that's it. Uh any
[11:56] players and ships that are around your
[11:58] immediate vicinity will be loaded in. Um
[12:00] anyone who quantum travels to your
[12:04] current location will dynamically be
[12:07] loaded in.
[12:07] Mhm. um anyone who comes and travels
[12:10] away will be loaded out and your client
[12:13] won't have any awareness of them
[12:14] anymore. Um so it cuts down the amount
[12:17] of memory that your client needs. Uh it
[12:20] should cut down some of the performance
[12:22] overhead uh for maintaining all these um
[12:26] entities of memory as well. Um
[12:29] I suppose as you move around the solar
[12:33] system, yeah, it will unload areas that
[12:36] are uh it that it doesn't need anymore
[12:38] unloading the new ones. So you head off
[12:40] to to Lefki, it will stream Leking for
[12:42] the first time and that's the first time
[12:43] your your client is aware of those
[12:45] entities in that location.
[12:47] Okay. Uh what criteria do we use for
[12:50] that? Is is it just proximity? Is that
[12:53] the only criteria? It's we we we we set
[12:56] a we set a bubble or or a streaming
[12:58] window around you and anything within
[13:00] this area is visible to you and anything
[13:03] that's outside is is not loaded into
[13:05] memory pretty much. Yeah, it's it's not
[13:07] exactly a hard bubble. Uh it's not a a
[13:11] defining distance. It's actually the um
[13:15] kind of the the size the object will
[13:19] appear to you if you were to look at it.
[13:21] So an object that's twice as big, you
[13:23] will see it the same size as an object
[13:25] that's
[13:27] half as big, twice as far away. See what
[13:30] I mean?
[13:30] Okay.
[13:31] So a a planet will stream out Well, no,
[13:35] that's a bad example. Yeah. Leki will
[13:38] stream out very far away, but a small
[13:40] spaceship like um and a Gladius will
[13:43] stream out much closer.
[13:45] Gotcha. So there's there's there's a
[13:47] there's a like a tagging system involved
[13:49] in like it it's that the system's going
[13:51] to know that if if you're approaching
[13:54] Levky to bring Levky in at this far
[13:56] away.
[13:57] Yeah.
[13:57] But if it if it's a Starfare to bring
[13:59] the Starfare in at this far away and if
[14:01] it's a Hornet to bring the Hornet in at
[14:03] this far away like that. So So it's so
[14:05] it's an intelligent kind of switching.
[14:07] Yes.
[14:08] Between So like that. And and is that is
[14:10] that
[14:11] um and that's something ult at the end
[14:13] at the when all is said and done. Is
[14:15] that is that something handled by the
[14:16] servers or by the clients or
[14:18] that's handled entirely by the servers?
[14:20] Okay. Yeah. Interesting. All right. So,
[14:22] uh the work on when we we're doing we
[14:26] we've got notes because this is a pretty
[14:27] dense topic here. Um
[14:30] when when the work started on this uh it
[14:32] was originally envisioned is kind of
[14:33] three steps. Uh bind calling which we've
[14:36] talked about quite a bit. Uh then client
[14:39] side uh OCS which is what we're working
[14:41] on right now. Uh and then uh later down
[14:43] the road server side OCS. Yeah. Um let's
[14:46] talk real quick about bindulling and
[14:49] what it is and what its role here is. If
[14:51] you can just who wants to give me just a
[14:53] nickel version. What is bindulling?
[14:57] Anybody? One, two, three.
[15:01] Don't want to jump in when there's a
[15:02] problem.
[15:02] Go for it. Yeah. So um
[15:08] this is a test score.
[15:09] This this a I should have revised
[15:10] further. This is Yeah. Um yeah. So it's
[15:14] this is the act of unbinding the
[15:16] entities on the client when they go out
[15:18] of range. Um so if you're too far away
[15:21] from stuff, it basically streams it out
[15:23] is the idea. Um
[15:26] there's quite a lot of implications for
[15:27] that for gameplay code. Um which I'm
[15:29] obviously slightly concerned with being
[15:31] a gameplay programmer. Um, so it's a
[15:33] type of thing of if I'm on one side of
[15:34] the universe and I've got to go and kill
[15:37] someone on the other side of the
[15:38] universe, I would normally in the game
[15:39] just now you see a little objective
[15:40] marker, but
[15:42] that's not there because he doesn't
[15:43] exist on my client because he has been
[15:45] unbound.
[15:46] Um, or similarly if you've got have a
[15:49] comm's call with someone who's too far
[15:50] away, he'll be unbound. Um, or sort of
[15:52] similar things. Um, and there's from a
[15:55] more technical standpoint, we have um
[15:57] the likes of all our entity pointers
[15:59] themselves will as soon as something
[16:00] goes out range, they'll all become
[16:02] invalid. You can't talk to the entity
[16:04] anymore because he doesn't exist for
[16:05] you. You can't um like you can't get his
[16:08] status. You can't get the amount of
[16:09] health he's got because it doesn't it no
[16:10] longer exists on your client. Um, and
[16:13] you've got to be able to handle um him
[16:16] obviously leaving and then him coming
[16:17] back again later on. So if you've got to
[16:19] fix stuff up and if you've then got to
[16:21] um reworked your gameplay system to make
[16:23] it work with someone that's just came
[16:25] back. Um
[16:27] so what are the answers to those things?
[16:29] Um so for the likes of the the markers
[16:31] uh they were solved by having an
[16:33] independently streamable object. So
[16:35] that's basically saying we've got this
[16:37] little marker which a really small
[16:38] lightweight thing. Um it's really far
[16:40] away from you but the server is going to
[16:41] tell you that it has to exist in the
[16:43] client because you need to know some
[16:44] stuff about it. um it's removed from the
[16:47] normal hierarchy. So it's not um if
[16:50] you've got a marker, for instance, on a
[16:51] person that's inside a ship that's
[16:52] inside another ship, normally you would
[16:54] need to have all these zones all the way
[16:56] down to get him.
[16:57] Um in this case, it's just that marker
[16:59] and it just gives you the zone position
[17:01] of the biggest zone that's still
[17:03] streamed in. So the planet or the root
[17:05] zone if he's just out in the space
[17:07] somewhere.
[17:08] I don't know, maybe I'm wrong on this.
[17:09] I'm picturing like when you're playing
[17:11] golf and you you you you pick up your
[17:13] ball and you put a quarter down in its
[17:14] place.
[17:15] It's like so so that you know where that
[17:17] thing's supposed to be. The ball isn't
[17:18] actually there anymore, but but you know
[17:20] where it's going to be and when it comes
[17:22] time for you to actually need to
[17:23] interact with it, it's going to know
[17:25] where
[17:25] kind of um and it's also got the
[17:27] advantage of we can do things like the
[17:30] because it's so far away, the position
[17:31] doesn't need to update constantly
[17:33] because it's so far away, you can't tell
[17:34] if it's 10 cm out. So it can update
[17:37] every 30 frames or every 60 frames or
[17:39] whatever, which also obviously increases
[17:41] performance ever so slightly.
[17:43] That's going to be a big one for server
[17:44] FPS.
[17:45] Yeah. Um and it's more um we don't need
[17:48] to get the messages from the client from
[17:50] the server as often. So it's not it's
[17:52] not affected. And then once you get in
[17:53] range, once it gets fully bound,
[17:54] everything else has been unbound. So the
[17:56] network performance is then the
[17:58] stuff. Um
[18:00] yeah, and then obviously there's stuff
[18:02] I'm not as involved in. the legs of the
[18:04] radar scanning stuff has got to be able
[18:06] to work when the stuff it's scanning
[18:08] doesn't exist on your client. And so a
[18:11] lot a lot of the game code was changed
[18:12] from everything happens on the client to
[18:15] the client has to ask the server for
[18:16] some results or it has to push requests
[18:19] to the server for things to happen.
[18:21] We've seen that. It's a big uh it's a
[18:22] big uh concern of the community is is uh
[18:25] we're seeing it coming in the questions
[18:26] right now about how scan how long range
[18:28] scanning is supposed to work. If this
[18:30] thing isn't loaded in for if in your
[18:33] client universe it doesn't exist, how
[18:35] are you supposed to scan for it and
[18:36] discover it?
[18:37] Well, I mean even the likes of when
[18:39] Clive was mentioning what how we decide
[18:40] if something streams out is based on how
[18:42] big it is on your screen. So if there's
[18:44] a Gladius that's 20 km away, they're
[18:46] going it's going to be one pixel on your
[18:48] screen. it can probably stream out or
[18:49] it's going to be less than a pixel it
[18:50] can stream out. Um there's some
[18:52] adjustments made to that for the likes
[18:54] of the radar. So the Gladius will be
[18:56] made to think it's bigger because it
[18:58] needs to stay around because although
[19:00] you can't see it, your radar can see it.
[19:02] So there needs to be some kind of um
[19:05] adjustment there. So you're still able
[19:06] to still able to get the up to date and
[19:08] the high end the high um
[19:12] frequency updates to see where it is.
[19:14] And and how does how does serialized
[19:16] variables play into buying calling? It's
[19:19] a serialized variables that that in my
[19:21] terrible analogy and forgive me if I
[19:23] keep using it, but the quarter that you
[19:24] put down is is is is that what a
[19:26] serializ I think one of the complexities
[19:29] of OCS is there's a whole interconnected
[19:31] bunch of technologies that will need to
[19:33] work. So there's serialized variables
[19:34] need to be there. There's actual bindcom
[19:36] itself. There's the likes of the um the
[19:40] um I've lost my train of thought now
[19:42] where I was going with this. other
[19:43] technologies as well that only need to
[19:44] exist for it to work. Um the serialized
[19:47] variables are kind of like the thing
[19:49] that sort of almost I don't want to say
[19:51] glues it all together because that's a
[19:52] bit of a cliche phrase but um uh for the
[19:55] likes of the marker you'll have
[19:56] serialized variables that have all the
[19:58] data you need in it. Um the server will
[20:00] be able to tell you the data you the
[20:03] data you need to have in those variables
[20:04] how often you need to get it. Um and it
[20:06] will kind of do it seamless almost
[20:08] seamlessly from a game gameplay point of
[20:10] view. So we've just got the data we need
[20:11] to use. And and uh for again just
[20:15] assuming that this is somebody's first
[20:17] show uh what is serialized what are
[20:19] serialized variables?
[20:21] So serialized variables are the um the
[20:25] mechanism that we expose to the gameplay
[20:27] programmers to allow them to communicate
[20:29] over the network. So um the game's built
[20:33] out of entities. Entities are built out
[20:34] of components. components have these
[20:37] serialized variables which are values
[20:38] that can change over time as the
[20:40] gameplay programs assign new values to
[20:43] it. Those change values will get
[20:45] replicated over the network to the
[20:47] equivalent entity on your clients. It
[20:49] will uh change the value of the
[20:50] serialized variable there as though it's
[20:53] being changed exactly by the server. So
[20:55] it's it's a remote control over um the
[20:59] state of entities in the game. Not when
[21:03] when we've I've had a number of
[21:04] conversations about this over the last
[21:07] year. Um I always and please correct me
[21:10] if I'm wrong. I always kind of saw them
[21:13] as like save games like like like it it
[21:17] was it's you know here's something
[21:18] actively doing thing and then when it
[21:20] gets converted into a serialized
[21:21] variable it's kind of like that's like
[21:22] the save state file for it.
[21:24] It's yeah it's exactly it's almost
[21:27] exactly like that. We we use serialized
[21:28] variables
[21:29] understanding what's going on. We use
[21:30] serialized rules not just for uh
[21:32] networking but because serializing to a
[21:36] network it it doesn't necessarily need
[21:38] to be a network. You've got this
[21:39] serialization process that converts from
[21:42] the um I suppose the native format that
[21:45] the program's running with uh into
[21:48] another format and it could be the
[21:51] network it could be a save game file it
[21:54] could be the persistent database. So we
[21:56] use serialized variables for those three
[21:57] things.
[21:58] Okay. again and forgive me but these are
[22:02] the engineers and the programmers so I I
[22:04] am the layman in many things it also
[22:06] over the conversations it's almost like
[22:08] uh uh like I worked in a professional
[22:11] baseball for years and I I imagine like
[22:13] when the catcher is giving signs to the
[22:15] to the pitcher short form information
[22:16] that means long form stuff
[22:20] there's so kind of compression reducing
[22:23] the um
[22:25] not so much on the on the data itself
[22:27] the the the the
[22:30] way serialized variables
[22:33] save us um oh how to explain this. Okay,
[22:37] so one way of um updating the state of
[22:41] entities in a game over the network is
[22:44] to periodically every so often just send
[22:46] the state over to all the clients.
[22:49] Um and that can be inefficient because
[22:50] you're sending the same values over and
[22:52] over again and nothing's changed. So
[22:54] serialized variables track when
[22:55] something has changed and go, okay, this
[22:57] one now needs to be sent. Okay,
[22:59] these ones that haven't changed don't
[23:01] need to be sent. So that saves us a lot
[23:04] of bandwidth. It's kind It's kind It's
[23:06] kind of like when my mom keeps calling
[23:08] me and says, "How are you doing?" I'm
[23:10] like, "I'm fine. Anything new?" "No,
[23:11] nothing new." It's like now the
[23:13] serialized variable is she would only
[23:14] call me when something's actually
[23:16] happened.
[23:17] Yeah.
[23:19] Sorry, my mom doesn't watch the show.
[23:22] Uh I I love you mom in case you suddenly
[23:24] did dad watches the show. So all right
[23:27] so that's fine callulling that's
[23:30] serialized variables we've talen kind of
[23:32] high level let's get into the work that
[23:34] we're doing right now which is
[23:37] essentially full client streaming that's
[23:39] the section of of OCS that that we've
[23:42] been focusing on right now. Um, one of
[23:44] the big uh uh misconceptions uh that
[23:47] that that I wanted to address here is is
[23:50] the notion that when 3 comes out, when
[23:52] Hurstston comes out, that that's the
[23:54] that's all of OCS that it's done. That
[23:57] that it's there and we're done and
[23:59] suddenly everything is great. You can
[24:01] see you like he's just like no that's
[24:03] not I can I can feel the heat radi of
[24:05] them right now. Um, we did bind calling.
[24:08] Uh, we were we got bind calling to a to
[24:10] to a state where it's feature complete
[24:12] at least. Um, now we're working on full
[24:15] client streaming uh for Hurst and
[24:17] everything. uh when that's done and
[24:19] that's into your hands and after you
[24:20] guys have beat on it through EvoTotti
[24:23] and and and PTU and then even with our
[24:25] live testing environment which is still
[24:26] a testing environment uh once we've got
[24:29] that to a place where we're happy with
[24:32] it I guess or content with it then we
[24:34] move on to server uh side client
[24:36] streaming but let's so I just want to
[24:39] that's just to help paint a picture
[24:41] there for full client streaming the
[24:43] stuff we're working on right now what is
[24:45] full client streaming let's just start
[24:46] with a simple thing. We'll go we'll go
[24:48] from there.
[24:50] Um, it's kind of what we said already.
[24:55] I'm not sure what else we can say about
[24:56] it. So, it's yeah, it's the server
[24:59] dictating what your uh client can see,
[25:03] what entities it's aware of. Um,
[25:06] and yeah, as you move around controlling
[25:09] uh changing which entities those are
[25:11] present on your machine.
[25:12] Okay. So, so buying calling is the is
[25:14] the tech of dropping things out and
[25:16] everything.
[25:17] Yeah. So, client side.
[25:19] Okay. So, the the the difference between
[25:21] the the two and how they fit together is
[25:24] um object container streaming um is
[25:26] something that we need for Squadron 42
[25:29] as well. So, a single player um single
[25:32] player game. Um, so it's very much the
[25:36] kind of um
[25:39] traditional level streaming that you
[25:41] that we see in uh in many games.
[25:45] So that controls um that's a big So that
[25:50] controls the uh the
[25:54] figuring out the distances of entities,
[25:56] what needs to be present uh and what
[25:58] doesn't. uh at the minute on the server
[26:01] uh everything's present all the time. So
[26:03] we've just got this distance calculation
[26:04] based on entities that exist uh and then
[26:07] it can do the um the streaming in and
[26:09] out. The other part of OCS is the
[26:12] asynchronous entity loading. Mhm.
[26:14] So, um, up until now, uh, anytime we
[26:19] spawn an entity, it happens on the main
[26:22] thread. Um, and the main thread will
[26:26] block for how long it takes to spawn
[26:28] that entity. And that includes the time
[26:30] it takes to load any files off the disk.
[26:32] So, textures and, uh, physics, geometry,
[26:35] and anything else. Um part of OCS is
[26:39] making that um spawning process
[26:42] asynchronous. And
[26:45] by that we mean we tell it to start and
[26:48] then when it finishes on a background
[26:50] thread we get the results back and the
[26:52] entity is finished and we can put it
[26:53] into the game.
[26:54] Kind of right.
[26:55] Right. Yeah. So, um, those are the kind
[26:59] of the two parts of OCS that that
[27:01] determining what a client needs to do
[27:04] and being able to, um, asynchronously,
[27:08] uh, spawn entities and get rid of them.
[27:10] Um, binding culling comes in by
[27:14] replicating those server side decisions
[27:17] over to um, over the network, over to
[27:20] clients so that the streaming happens
[27:23] for them as well. So it's server server
[27:25] side control of bind calling and server
[27:28] side control of OCS on your clients.
[27:32] All right.
[27:32] Right. Yeah.
[27:33] Right. So what's
[27:37] Forgive me for for asking question
[27:39] Tyler our lead community manager he
[27:41] takes the questions from the community
[27:42] and he feeds me up. He's sitting like
[27:44] people in chat are saying I don't have
[27:45] any questions. You're talking about all
[27:46] the things we want to and I've been
[27:48] doing this for a while. Uh um
[27:51] the question that comes to my mind is
[27:54] what's
[27:56] if we've got buying calling already if
[27:58] if we've got blind calling as a feature
[28:00] complete what what takes so long what
[28:03] what's the time sync here? What what's
[28:06] what's this it's if you've got the if
[28:08] you've got the tech if you've got the
[28:10] technology you've got the code written
[28:11] whatever uh where where's where are the
[28:13] hours going
[28:15] right now?
[28:16] Yeah.
[28:17] Okay. Um so yeah we've got the async
[28:20] entity loading working we've got um the
[28:23] rangebased decision making working we've
[28:26] got buying column working it's now
[28:28] fitting those together because what what
[28:30] we currently have without
[28:32] asynchronous
[28:35] spawning is binding will say okay these
[28:39] or the what have we got the streaming
[28:42] manager will say these entities are out
[28:44] of range for this client you don't need
[28:46] them anymore buying will relay those
[28:48] messages, the client will drop them. Um,
[28:50] and that's fine. But when you come into
[28:53] range of some entities, and the client
[28:55] needs to spawn them, it will do a
[28:58] blocking spawn.
[28:59] Puts them all on the main thread.
[29:00] It puts your game launches to a halt.
[29:03] Yeah. So the changes that we the part
[29:06] that we're left with now is changing the
[29:09] the network messaging that handles
[29:11] spawning so that it can work with this
[29:14] asynchronous process because the network
[29:16] messages as they currently stand um
[29:19] assume this blocking synchronous spawn
[29:22] this as soon as I've said spawn it will
[29:24] be spawned um and I can start sending
[29:27] messages to that entity.
[29:29] Okay.
[29:29] But because it's an asynchronous process
[29:31] we've got to load the files from the
[29:32] disk. It can take depending on the the
[29:35] number of entities that we're trying to
[29:36] trying to spawn. So, you know,
[29:38] say a whole planet.
[29:39] Say a whole planet. It's going to take a
[29:41] few seconds to do. Um, so we need the
[29:43] client to start spawning, do all its
[29:46] work. When it's finished, go back to the
[29:48] server and say, I'm done now. Can you
[29:51] send me some updates? And then the
[29:53] server can start uh communicating
[29:55] information to those clients uh to those
[29:57] new entities put them in their final
[29:58] state because things have probably
[30:00] changed during the time it's taken that
[30:01] from the time it's started from the time
[30:03] it finished something has changed.
[30:04] Yeah. And then when all that process is
[30:06] finished the client can finally go right
[30:07] I've got the I can put these entities
[30:09] into my local simulation and they can
[30:12] start interacting.
[30:14] All right, Chris, you you've gotten off
[30:16] light here, but you're you're uh working
[30:20] with the QA team that's that's testing
[30:22] this. You you've been working with what
[30:23] what what's involved in testing uh
[30:26] object container streaming. What kind of
[30:28] things are you are you working with?
[30:29] What are you looking at? Um, so with it
[30:31] involving entities dropping in and out,
[30:34] it's a lot of traveling around, but it's
[30:36] also finding all the the different
[30:39] entities, how we can spawn them, move
[30:41] them, change the state for one player
[30:43] without changing it for another,
[30:45] bringing the players back together, like
[30:47] uh the states of everything match up.
[30:49] Um,
[30:51] and we're like looking for all the edge
[30:53] cases as well at the moment. Um
[30:56] because it's everything's fine apart
[30:58] from
[31:00] stalling when you start loading up. Uh
[31:03] like these flights to Levki. Uh there's
[31:05] a stall as it brings Levki in. Um
[31:10] sorry, I'm losing my train of thought.
[31:11] Um
[31:15] sorry,
[31:17] it's all gone. He you me you mentioned
[31:20] uh when two two players in there and and
[31:22] and the calling if if he and I are are
[31:25] are playing you say we're in a dog fight
[31:29] or whatever we're we're
[31:31] a threeperson furball here and I get so
[31:35] far away that the system goes okay it's
[31:39] going to callull it for me but it's got
[31:40] to leave it for him because he's still
[31:42] in in range. Uh, that's not as easy as
[31:46] I'm saying as as I as I as I'm making
[31:48] it, is it?
[31:49] And and we'll be looking for things like
[31:51] as you're dog fighting, um, you've got a
[31:54] mate in your cargo bay throwing a cargo
[31:56] crate out the back and you're blowing up
[31:58] Gordon at the same time. As another
[32:00] player who when he left, you were just
[32:02] dog fighting happily. He comes back,
[32:04] everything's different. Does his does
[32:07] his client show everything as it should
[32:10] be? Is the cargo crate there in space?
[32:12] Is your cargo bay open? Is Gordon alive
[32:15] or dead? Um,
[32:17] so it's all these different states,
[32:19] a lot of different states. And one of
[32:21] the things that, um, I've been looking
[32:23] at myself this week is
[32:26] we need not just two people doing it.
[32:29] Um, two people seem to be quite easy to
[32:31] keep track of. Um what happens with the
[32:34] server when there is
[32:37] people or a group of people not just out
[32:39] in space dog fighting but you've got
[32:41] someone at Allosar Grim Hex Levki people
[32:44] out in space uh people off in Hurston.
[32:47] So we've been using headless clients
[32:51] which are just sort of uh lowweight
[32:54] clients don't actually render the game
[32:56] but we can give them basic commands. So,
[32:58] we're filling the server. Um,
[33:00] the zombies
[33:02] Yeah. putting zombies, they they do
[33:04] basic things. They'll they'll get out of
[33:05] their bed at Allar. They'll use console
[33:08] commands to zip around the solar system.
[33:10] Um, so we're seeing what's happening
[33:13] with the server now. What's the load
[33:14] like when there's someone everywhere
[33:18] or nearly everywhere because the player
[33:19] limit is uh 50 and it's a big solar
[33:22] system, so you can't get everywhere with
[33:24] 50 people right now. It's uh I I've I've
[33:28] no doubt and I've heard I've heard in
[33:30] off-hand conversation uh how anxious
[33:33] many people are to get this on into
[33:35] testing into into wider testing. You
[33:37] know, one of the advantages Star Citizen
[33:39] has in our development is that we run a
[33:41] live testing environment in the middle
[33:43] of our game development and even from
[33:45] Evocati uh to the larger PTU to even our
[33:48] live alpha environment. Even the live
[33:50] alpha environment is a testing
[33:51] environment. uh guys like you and your
[33:54] team, you know, QA here in Manchester
[33:56] and in Frankfurt and Austin and LA,
[33:58] you're knocking on pipes as much as you
[34:00] can.
[34:00] Mhm. But I don't think there's I think
[34:03] it's safe to say that when when this
[34:06] does go out, we're going to see a a
[34:09] plethora, as Elapo would say, of all new
[34:12] kind of issues, things that we could
[34:14] never that things that we've never seen,
[34:15] interactions with this with this system,
[34:17] the streaming, pulling it out, pulling
[34:20] it out of four people's thing, but not
[34:21] pulling it out of two people's things
[34:23] and and vice versa. It's like that. That
[34:25] that will be a a very interesting
[34:27] challenge for you guys to to track down
[34:29] when that happens. not just going to be
[34:31] hitting the object container streaming
[34:33] new issues that have been introduced
[34:34] since the last time we did a live
[34:36] release
[34:37] um other systems other content has been
[34:40] updated as well. So we're going to be
[34:42] dealing with uh the bind calling object
[34:44] container stuff uh working out what's
[34:46] going on there and all the new fun
[34:48] issues that get introduced just from the
[34:50] general development elsewhere.
[34:52] You hinted at a a good point there.
[34:54] Object streaming hits just about every
[34:57] single aspect of Star Citizen. I mean
[34:59] the everything's got to be converted or
[35:01] OSR has got to be converted. The
[35:03] asteroids around Yila have to be
[35:05] converted. I mean everything that's in
[35:07] the game now has some kind of
[35:10] fundamental change to its underlying
[35:12] structure. So it's not just the new
[35:14] things like Hursten and its four moons
[35:17] that that that we're adding. It's also
[35:20] everything that's already in 32 gets a
[35:23] fundamental change. So, so new bugs,
[35:27] bugs that you're finding out and bugs
[35:28] that you're chasing, uh, can affect not
[35:30] just the new the the the new content,
[35:32] but every single aspect of Star Citizen
[35:35] today. Like maybe only Arena Commander
[35:37] is safe.
[35:39] Are we doing anything with her? Yeah, I
[35:40] don't think I think OCS is touching
[35:41] Arena Commander yet.
[35:42] So, uh, is is that uh is that daunting?
[35:46] Um, yes, definitely. I personally
[35:49] haven't worked on on that side of
[35:50] things. I think it's kind of
[35:52] Yeah, I think the amount of
[35:56] teams even it touches. So like sort of
[35:58] um one of the changes we've been having
[36:00] to make for the uh this the async
[36:02] spawning stuff, everything all the
[36:04] components have had to be made thread
[36:05] safe. All the components of the game
[36:06] have had to be made thread safe so they
[36:08] can be spawned off the main thread. Um
[36:10] for the actor that means all the actors
[36:12] components first need to be made thread
[36:14] safe. So you've got a bunch of
[36:15] components that need to be done by the
[36:16] audio team, a bunch that need to be done
[36:18] by AI, a bunch that need to be done on
[36:19] all these different people. Um, and some
[36:21] components depend on other ones being
[36:22] done first. So I couldn't convert, for
[36:24] instance, the local player component
[36:26] until the particle stuff was converted.
[36:28] So we get this big dependency graph that
[36:31] sometimes goes several levels deep uh
[36:34] before you can actually get um there.
[36:36] And there's a yeah, there's just an
[36:38] awful lot of stuff. There's 100 odd
[36:40] components on the actor now. Um,
[36:42] yeah, when you say components, you're
[36:44] not talk uh backers know components as
[36:47] the things in your ship that you're
[36:49] talking about all the raw components in
[36:52] the most base vocabulary sense that make
[36:55] up the entire game.
[36:56] Yeah. So, it's our game runs off an
[36:57] entity component system. So, the entity
[36:59] is like an actor. It has an actor
[37:02] component. It has a local player
[37:04] component. It's got an audio component.
[37:06] It's got all these various variety of
[37:07] different things. So it's there'll be
[37:08] ones for animation and ones for effects
[37:11] and all these plethora of different
[37:13] things um which will be shared between
[37:15] different entities as well. So there'll
[37:16] be other entities that also have
[37:17] animation components and stuff. Um but
[37:19] yeah everything had to be made thread
[37:22] everything had to be able to be spawned
[37:24] for say sorry not
[37:25] so when I so when I was asking before
[37:27] about you know where the time sync was
[37:30] going through and every existing
[37:33] component of of the game had to be just
[37:36] about every existing
[37:37] component. And we've already talked
[37:39] about how this has been an ongoing
[37:40] thing. Most of my last quarter, so quote
[37:42] Q2 was spent doing this for the actor.
[37:45] And a big big chunk of that was we had a
[37:48] there's a scripting language called Lua
[37:49] um that we use extensively in the game.
[37:51] Um and it basically had to go um because
[37:54] it's not particularly thread safe or
[37:55] it's not it wasn't there was no good way
[37:58] to make it safe for spawning things as a
[38:01] asynchronously. So um it was a case of
[38:04] going through for the actor there was an
[38:05] awful lot of Louis and there was an
[38:07] awful lot of stuff that just had been
[38:10] around since this engine was created.
[38:13] Everyone going has evolved over the
[38:15] course of the engine. Um and yeah it was
[38:18] just a lot of tiding up and cleaning up
[38:20] and moving things around. Um and again
[38:23] it was by multiple departments as well.
[38:26] Now, as we're in,
[38:29] we we talked a bit about how even once
[38:32] the the the client side streaming is
[38:35] done, the stuff that we're working on
[38:36] for Hurst and everything, uh there's
[38:37] still the whole server side that needs
[38:39] to come after that. But as we're
[38:42] approaching the finish line of of our
[38:44] client side streaming here, are uh what
[38:47] are you seeing in the game when when
[38:48] when things work? What what's your
[38:51] gameplay experience like? Um
[38:54] I uh overheard someone today use the
[38:56] phrase truly amazing.
[38:58] I don't want to oversell it. Um but um
[39:02] yeah, we I know the um the backers have
[39:05] complained about performance like quite
[39:07] legitimately. It's not at the state
[39:08] anyone wants it to be. Um but we're
[39:11] seeing uh really
[39:14] raw builds each day. Like typically our
[39:16] performance can be pretty terrible. Um,
[39:19] but now
[39:21] everyone's reporting improvement. Some
[39:22] people reporting drastic improvements.
[39:24] It's it's just it's nicer to test when
[39:27] you're hitting a really nice smooth
[39:29] frame rate.
[39:31] Now, he makes a good point. I I I set
[39:34] Chris up there. I I wanted to know what
[39:36] his experience was like. At the same
[39:38] time, uh, part of this part of OCS, this
[39:42] is where I get to deflate the balloon a
[39:44] little bit is, you know, improving the
[39:47] performance on everything that we have
[39:48] right now, but part of the reason we do
[39:51] that is so that we can add so much more
[39:53] to the game. So, it it's it's it's one
[39:56] of those things. It's like in in my
[39:57] terrible analogies again, you know, it's
[40:00] it's it's I'm carrying a a 50 lb
[40:02] backpack and OCS is me going to the gym
[40:05] and working out for for 10 year for 5
[40:07] years or whatever and now that 50 lb
[40:09] backpack feels like a 10 lb backpack and
[40:11] I'm awesome. But the next step after
[40:13] that is to add 500 more pounds to my
[40:15] backpack, you know? So, so it's it's
[40:18] that's one of those things where we when
[40:20] we say it's not the silver bullet that
[40:22] fixes everything. There will still be a
[40:25] continuing network improvements. There
[40:26] will still be continuing optimization of
[40:28] of every aspect of the game. You know,
[40:31] it is a it is a OCS is not the answer to
[40:35] everything. It's it's a it's a
[40:36] foundational technology that allows us
[40:38] to continue building and expanding the
[40:41] Star Citizen universe to uh well soon
[40:44] Hursten and then Arc Corp and Microte
[40:47] and Crusader and then the entire system
[40:49] and then more systems beyond that. So
[40:52] it's uh so it's one of So it it's
[40:54] interesting. I I I don't think we can
[40:55] predict and I was asking around. I don't
[40:57] think we can predict you know what kind
[40:59] of performance players will see with 33
[41:03] yet or when Hursten is is added yet
[41:05] because
[41:07] well we're still working on it first of
[41:08] all. We're still putting it together but
[41:10] you know we we we make all these
[41:12] improvements to what we have now and
[41:13] then we add more onto it. So it's it's
[41:15] it's a constant juggling. I think all of
[41:17] OCS is juggling. It's the server
[41:19] juggling things. It's the client
[41:21] juggling things and then with
[41:22] development it's OCS is like adding 50
[41:24] more arms but then we're going to throw
[41:26] 75 more balls at it and go juggle it.
[41:29] What we're seeing now is like you're um
[41:30] when you're in Port Alisar you're not
[41:32] you know you're not getting updates from
[41:34] Levki Grimhex or anything like that. So
[41:36] performance is great. You go to Lorville
[41:38] your your frame rate is still dropping
[41:40] very low because you're still loading
[41:41] Lville and everything that's in it.
[41:44] Lurville's big.
[41:45] It's it's very it's getting bigger.
[41:47] No no no spoiler there. Lurville is big.
[41:49] All right. So, I think I think that's
[41:51] our that's our deep background. Now, now
[41:53] we're going to take questions. We we
[41:55] Tyler's been collecting some questions
[41:57] uh from the community. We also put up a
[41:59] thread earlier this week in Spectrum
[42:01] where folks who maybe couldn't join us
[42:03] live could submit questions. It also
[42:04] allowed people to vote on which question
[42:06] they wanted to see most. I'm going to
[42:08] start with the single most voted on
[42:10] question. Uh nearly 500 votes the last
[42:12] time I looked at it. It says, oh,
[42:14] actually I already just answered this.
[42:16] Sorry. Uh, can we expect performance
[42:18] improvements in the game because of OCS
[42:20] in its first iteration or will it or
[42:23] will it only work in making a larger
[42:25] verse viable while maybe allowing more
[42:27] players per instance? Um, so yeah, I
[42:30] just kind of answered that, didn't I? Is
[42:32] there anything else we want to add to
[42:33] that or is that Sorry, I got carried
[42:35] away. I went ahead and answered. Uh,
[42:37] they said they talk about the allowing
[42:39] more players per instance. That's is
[42:41] that linked to OCS in any way? No,
[42:43] that's that's that's not um so the
[42:48] performance benefits, the memory savings
[42:50] that you're going to get, if any
[42:53] hedge bets, your mileage may vary. Um is
[42:57] going to be purely client side. Uh
[42:59] server side, all those entities still
[43:01] have to exist on the server. Uh they
[43:03] need to be updated when anyone's near to
[43:04] them. Um, so the server load is going to
[43:08] be heavier than it has been in the past
[43:10] because we're increasing the scale of um
[43:13] of the the solar system massively,
[43:15] right?
[43:16] Massive amounts of new content. So, um I
[43:19] don't think it's likely we're going to
[43:20] increase server count uh the player
[43:23] counts. You make you you just made a
[43:25] really good point there. The these
[43:27] improvements uh uh when when when this
[43:30] system comes online is strictly client
[43:32] side. Yes. So the next step is the
[43:34] server side improvements and until that
[43:35] happens we are still adding a planet and
[43:38] four moons to these servers.
[43:39] Yes.
[43:40] So the the load on our server side is
[43:42] going to increase.
[43:43] Yes.
[43:43] Pretty dramatically uh when this comes
[43:45] online.
[43:46] So it'll be interesting to see to it's I
[43:50] think we're all going to be looking at
[43:51] what the what the improvements are and
[43:53] how it all works.
[43:53] Yeah. When that time comes. All right.
[43:55] uh from let's see um
[43:59] why are client and server side OCS split
[44:03] from the live chat like why why aren't
[44:05] we just working on both at the same
[44:06] time?
[44:07] Um
[44:11] so
[44:12] yeah okay
[44:15] so
[44:16] server side streaming requires um some
[44:20] extra technologies that we haven't got
[44:22] yet. So we're by working purely on
[44:24] client side streaming uh we're getting
[44:27] some of the benefit uh onto our clients
[44:30] um and we're not having to do all the
[44:32] technology at once. So the kind of extra
[44:34] pieces that we need are uh on server
[44:37] side stream once um a server decides to
[44:40] unload some entities what happens to uh
[44:42] they're going to have to be persisted
[44:44] out by current state um and then we're
[44:46] going to have to reload that that state
[44:48] back in. So, it's it's not clear if we
[44:51] need the the full persistence to work,
[44:54] but it's going to have to be something
[44:56] pretty close uh to full persistence to
[44:58] get the server side stream at work.
[45:01] Um how will does OCS affect uh uh our
[45:07] view or render distance?
[45:09] It shouldn't do. Um
[45:12] the as I say as Gordon said as well that
[45:15] the the range at which entities get
[45:18] streamed out and streamed in uh should
[45:20] be
[45:22] pixel size or thereabouts. So you
[45:24] shouldn't notice anything. Uh but
[45:26] because of the time it takes to load
[45:28] things in there may be a little bit of
[45:30] popping but it shouldn't affect the draw
[45:32] distance really.
[45:33] Okay. Um,
[45:36] what are the uh what are the current
[45:38] improvements that OCS has already you
[45:41] talked a little bit about that already.
[45:43] Are there any that any anything else
[45:45] that you guys can can think of right
[45:47] now? Current improvements that you've
[45:49] already seen uh from a development point
[45:52] of view, it takes me less time to load
[45:53] the game. Um, which is nice. Um, so if
[45:56] I'm wanting to test very simple stuff
[45:58] and I only need all the star, I just
[46:00] need to the PU takes less time for me to
[46:01] load because it doesn't have to load all
[46:03] the stuff that's out of range.
[46:05] So you can iterate between builds
[46:07] faster.
[46:07] Yeah. So it's it's less of that.
[46:11] It actually makes it possible to load
[46:12] the game as well because the map's so
[46:15] much bigger now. Not everyone has quite
[46:17] large not everyone here has quite large
[46:20] uh memory machines. So some of them
[46:22] can't actually load the full map. It's
[46:24] that big. So with uh they need um bind
[46:28] calling on uh well we've got two maps.
[46:30] We've got a cut down map and the full
[46:31] map. They have to work on the cut down
[46:33] map or if they want uh want to load the
[46:35] format they have to turn bind colon on
[46:37] to be able to get it actually in working
[46:40] on their machine.
[46:41] It's that much bigger. The um the
[46:43] reduced memory is helping us as well
[46:44] with um I mentioned earlier about
[46:46] filling a server up um which is
[46:48] effectively using one tester's time
[46:50] across multiple machines. The less
[46:52] memory the game's using, um, the more
[46:54] game clients we can put on a single
[46:56] machine, it kind of
[46:56] the headless zombies.
[46:57] The headless. Yeah.
[47:00] Um, how deep does the container tree
[47:03] extend? In other words, is there a limit
[47:05] to how many containers you can put in
[47:07] other containers?
[47:08] That is deep.
[47:10] Yeah. About that deep. Yeah.
[47:12] So, there's no limit to how many
[47:14] containers could be nested inside each
[47:15] other. Um,
[47:18] a container. Well, the the solar system
[47:20] is built out of a root container. So,
[47:22] we've got the Stanton system container.
[47:24] Uh, and then inside that, um, there's a
[47:28] container for each of the planets, I
[47:30] believe. Uh, and the planets themselves
[47:34] contain object containers for the moons
[47:35] and the space stations and the planet
[47:37] itself. And then on those, there'll be
[47:40] like for Grim Hex, there'll be the
[47:42] Grimhex object container. And then
[47:44] inside GrimHex, there'll be object
[47:46] containers for the different shops. So I
[47:48] think we're probably getting on to about
[47:50] seven levels deep there. Well, there's
[47:52] in theory there's no limit.
[47:53] Okay. Uh what's been the biggest
[47:56] challenge you you've been you've been fa
[47:58] you faced in the development of OCS?
[48:02] I I personally I think you're going to
[48:05] get a different answer depending who you
[48:06] ask.
[48:08] I I'm extremely tempted to say
[48:10] networking, but I'm not. I'm gonna say
[48:12] that it's probably the stuff Gordon was
[48:14] talking about the conversion of um
[48:16] entity spawning over to uh to to be
[48:20] thread safe
[48:20] thread safe and and asynchronous. It's
[48:22] been a massive effort that and also kind
[48:25] of the production side of things because
[48:27] it's touched so many teams.
[48:29] Yeah, it's to manage all that.
[48:31] uh he mentioned that I was sitting with
[48:33] uh Luke Hail who's the associate
[48:35] producer who's who's uh handling a lot
[48:37] of this um who wanted to be here but
[48:40] he's actually in a production meeting
[48:41] right now. uh he was he was saying that
[48:43] some of the uh dependencies you like
[48:46] like I need to work on this but in order
[48:48] to work on this this person needs to
[48:49] work on this and for this person to work
[48:51] on this this some of the dependencies uh
[48:54] uh uh right now are four deep you know-
[48:58] which is which is which is you know just
[48:59] to draw the thing it's he's need he's
[49:01] needing to work on something but he
[49:03] can't work on something until he
[49:04] finishes his work on something and he
[49:06] can't finish it until I'm done working
[49:08] my thing and I can't finish until you
[49:10] finish working on the Why are you
[49:12] slowing us all up?
[49:13] I apologize.
[49:15] Yeah, but uh dependencies are one are
[49:17] one of the the major things and that's
[49:18] what uh that's what producers bring to
[49:21] this and I know we wanted to we wanted
[49:23] to have the producer on to to have that
[49:24] final uh uh perspective on here just
[49:27] juggling all those dependencies and and
[49:29] you know and prioritizing. It's like
[49:31] it's like your work is holding up two
[49:34] people's work, but his work is holding
[49:35] up three people's work, you know, and
[49:37] and figuring out that prioritization of
[49:39] where to put resources. Uh that's that's
[49:41] been a major challenge. How about you
[49:42] with at the end of this the end of this
[49:44] chain at QA? What's what's your biggest
[49:46] struggle? Um I think the fact that it
[49:48] touches everything means we need to test
[49:50] everything
[49:51] and it's not just testing everything
[49:54] with bind calling because uh when you
[49:55] find an issue on our say the bind
[49:57] calling server um is it a bind calling
[50:00] issue you sometimes you can't tell just
[50:02] from the symptoms of the issue alone you
[50:04] go back to a regular server you need to
[50:06] reproduce it there so you're not just
[50:08] testing everything you're testing
[50:09] everything twice uh with it um affecting
[50:13] things coming and going um these aren't
[50:15] tests you can usually do by yourself.
[50:17] You need um two testers, preferably as
[50:21] many testers as you can get together.
[50:23] And uh we only have a finite amount with
[50:25] regardless of how many zombies I can
[50:28] necromanance. Um so it's it's been a
[50:32] massive a massive strain on just our
[50:34] resources of getting everybody we need
[50:37] to be where we need to be covering as
[50:38] many things as we can.
[50:40] One of the questions in the live chat
[50:41] just said, uh, while while testing OCS,
[50:43] have there been, what's the funniest or
[50:45] most interesting bug you've encountered?
[50:47] Um,
[50:51] see, now you've said funny, all I can
[50:52] think of is crashes. Um,
[50:58] there's been a fun ones where you're
[51:00] trying to catch an AI who's decided to
[51:03] run away from you. Um, I think this was
[51:05] earlier on. So he's in range flying away
[51:08] and you had an issue where he would
[51:10] reach um sort of like outside
[51:13] of uh your streaming window and he'd
[51:16] stop. So then you you'd catch up and
[51:19] eventually you'd get the updates from
[51:20] this AI and he'd fly a bit further
[51:22] because actually he's even further. So
[51:24] you're constantly having this little
[51:26] stop start race against the guy you're
[51:28] kind of catch up trying to catch up and
[51:30] you don't even know where he really is.
[51:33] That doesn't sound very fun, dude.
[51:37] Um, how will different hardware units
[51:40] like CPU or GPU or RAM or VRAMm uh
[51:44] benefit from OCS? Is this is this
[51:46] something that can conceivably help all
[51:49] aspects of computer? You squeeze a
[51:51] little more CPU out, squeeze a little
[51:52] more memory out, or is it just or only
[51:55] certain aspects of performance?
[51:57] But I think mostly it's going to affect
[51:59] RAM. That's where you're going to get
[52:01] the biggest save. Um, it should I'm
[52:04] being a bit more cautious than than
[52:06] Chris. Uh, it should have improved
[52:09] things on CPU. It probably won't uh have
[52:12] much effect on GPU.
[52:14] Yeah, I I think from my exper Well, my
[52:17] experience of in the last week or two,
[52:19] um, there will be CPU improvements
[52:21] probably, but we're also ramming a lot
[52:23] more stuff in. Um, so although while
[52:26] there might be some gains, um, we've
[52:28] also got a significantly more large
[52:30] amount of EI and such. That's uh most of
[52:32] the questions that that had came in on
[52:34] both the uh spectrum thread and the live
[52:36] chat have to do with people wanting to
[52:37] know how big the improvement is and the
[52:39] and the difficult thing about that is
[52:42] that like I said we are adding every day
[52:45] we are adding more things into it uh uh
[52:48] aspects of the world are becoming art
[52:50] complete. You know the ship ships are
[52:51] are finishing up uh you know the we're
[52:54] adding the hammerhead which like the
[52:56] biggest ship we've we've we've added in
[52:57] the persistent universe at this point.
[52:59] So, we're making all these improvements,
[53:01] but at the same time, we're adding all
[53:02] of these new things. So, it's it's hard.
[53:04] It's a it's kind of like a shell game at
[53:06] the moment. Forgive me, I'm on an
[53:08] analogy trend. J Keith is just Oh my
[53:10] god. You don't have to look at me like
[53:12] that. I know. But, uh, but yeah, it's a
[53:15] we will be finding out the the degree of
[53:18] improvement together is basically I
[53:20] think this the safest way to to to uh to
[53:22] answer that question. Does OCS have any
[53:25] drawback?
[53:28] Um, apart from the time it takes for us
[53:31] to test it, that's the only one like on
[53:33] our end.
[53:34] You mentioned earlier some of the
[53:36] challenges that in involved like like
[53:39] the scanning things like like h having
[53:40] to put having to leave the markers when
[53:43] something is called and what so that
[53:44] people can still see it and stuff.
[53:46] Yeah, I think um I don't want to
[53:47] generalize but most gameplay programmers
[53:49] are quite happy to just assume
[53:50] everything exists all the time and sort
[53:52] of do things a little bit. I'd be I'd be
[53:54] very happy if I just did every single
[53:56] entity in the client at the same time
[53:58] because it'd make my job a lot easier.
[54:00] Whereas now there's a lot of I've got to
[54:02] make sure every entity I'm accessing
[54:05] exists and if it stops existing while
[54:07] I'm talking to it, what do I do? Um and
[54:12] lots and lots of yeah lots more
[54:14] technical challenges and more um
[54:19] it just it just requires you to think
[54:20] about things. Not not that we don't
[54:22] think about things, but you've got to be
[54:25] very aware of the implications of a lot
[54:28] of stuff might stream out or I might I
[54:30] might if I'm designing this feature,
[54:31] will it work when not everyone's here?
[54:34] Do I need to move it to exist on the
[54:36] server rather than the client? Do I need
[54:37] to um tweak things to make them work?
[54:41] Um, you're good. One of the questions
[54:43] that just came in the chat says, uh,
[54:45] after this hits the community, you know,
[54:48] when OCS hits the community, uh, how are
[54:52] they going to be able to identify bugs
[54:53] that are related to OCS and not related
[54:55] to something else? It it's because you
[54:58] know many of our members of our
[54:59] community participate in the issue
[55:01] council which is our fantastic tool that
[55:03] you know lets the community you know
[55:05] assist in the bug tracking and the bug
[55:06] discovery process like how
[55:10] how how do we know when something is OCS
[55:13] related or or it's not just one of the
[55:15] other thousands of types of bugs that
[55:19] um I'd say any bug that you spot report
[55:22] it to the issue council anyway and let
[55:24] us sort it out. But probably the the
[55:26] kind of things you're going to see are
[55:28] um perhaps missing entities or uh stalls
[55:32] as you approach planets or derelict or
[55:36] whatever. Um
[55:39] what else might you see? Some kind of
[55:41] popping as things appear.
[55:43] Yeah. Um the likes of teleporting
[55:46] actors. Um that's one that's kind of
[55:48] floated around a little bit. So just see
[55:50] guys just jump around the place um
[55:53] occasionally sort of issues with
[55:58] uh one of the questions that came in was
[56:00] the difference between asynchronous
[56:02] background spawning and normal
[56:03] background spawning. I think we we
[56:04] covered that a little bit. Is the only
[56:06] difference just whether it's on the main
[56:07] thread or whether it's on the the
[56:09] secondary threads or
[56:11] Yeah, the the background part of that
[56:12] says that it's it's off the main thread.
[56:14] the a you can do asynchronous spawning
[56:16] on the main thread but it's a a bit of a
[56:19] it's a different way of doing things. So
[56:20] it's for us it's a very precise way of
[56:23] describing the process.
[56:25] Gotcha.
[56:26] Um
[56:30] let's see we actually we actually we did
[56:32] cover quite a quite a few of these. Uh
[56:34] you me you mentioned that uh OCS uh is
[56:37] still necessary for Squadron 42.
[56:39] Yes.
[56:39] Uh uh how does it play into Squadron 42
[56:42] just in the size of the the the the the
[56:46] full systems and everything when you're
[56:47] Yes. But basically, again, it's down to
[56:49] the size of the maps.
[56:50] Gotcha. All right. Um Yeah. Well, let's
[56:54] see. Uh that's I'm looking for other
[56:56] questions that have come in. We've
[56:57] actually hit just about everything here.
[56:59] Uh is there anything else you wanted to
[57:03] if you if you could tell the community
[57:05] one thing about OCS? If you wanted if
[57:07] you wanted to make sure that people
[57:08] understood one thing about it, what do
[57:11] you want to make sure people understand?
[57:13] um
[57:14] that it's it's been a as you said
[57:17] earlier like three years since since we
[57:19] kind of started work on on various parts
[57:21] of it and although we've not been
[57:22] working not everyone's been working on
[57:24] it flat out for those three years it's
[57:27] it's taken yeah it's taken a massive
[57:29] amount of time a lot of changes tons of
[57:32] people it's it's not down to to just us
[57:35] in this room or or our teams in
[57:37] particular it's it's a companywide
[57:40] effort it's been Yeah, been a long road
[57:42] and it's hopefully worth it when we
[57:45] finally get there.
[57:47] What'd you get?
[57:49] Yeah, I think just sort of to reiterate
[57:52] that it's it's touched every single
[57:54] element of the game. Um,
[57:55] and it is still currently
[57:57] it's still currently touching every
[57:58] single element in the game. Um, and it
[58:00] is it's I've not it like I said it's a
[58:04] collection of features, but I've never
[58:06] there's never been a feature that's
[58:07] really there's not been as many emails
[58:09] that have come out to absolutely
[58:10] everyone going, "Is this going to break
[58:12] anything for you?" Um, it's needed
[58:14] everyone to pitch in.
[58:16] You see a whole lot more BCC everyone.
[58:18] Yeah. On OCS threads than you do just
[58:21] about anything else. And
[58:23] I think as well, as Cloud said, it's not
[58:25] been a it's not been a short road. I
[58:27] mean even well before even object
[58:30] container streaming there had to be
[58:30] object containers themselves and that
[58:32] started as I was starting. So that's
[58:34] three and a half years ago. Um so it's
[58:36] been that was kind of the the very
[58:38] beginning of it and it's um this has
[58:40] obviously been on the plan since then.
[58:42] It's just taken three and a half years
[58:44] of tech and improvements
[58:45] and it doesn't end with this next
[58:47] release in Hursten. It's
[58:49] no well I mean this is the kind of thing
[58:50] it's it's going to be ongoing forever
[58:53] probably. Um there's always going to be
[58:55] things to improve and things to more
[58:57] stuff that he's added to it. Um sort of
[58:59] the server streaming is obviously the
[59:01] next major step and then there's there's
[59:04] stuff beyond that as well.
[59:06] What about you Chris?
[59:08] Um just to reiterate that it touches
[59:11] everything and from the QA standpoint
[59:14] there's
[59:15] show me on the game where OCS touch
[59:18] everywhere.
[59:20] Um yeah it touches everything. There's
[59:22] going to be a lot of edge cases that
[59:24] with our
[59:26] department like as cool as everyone is
[59:28] there's only so many of us there's only
[59:30] so many evocart there's only so many PTU
[59:32] testers as well even though there are a
[59:34] lot things that are going to things are
[59:37] going to break I think um please submit
[59:40] to the issue council and always submit
[59:41] your crashes
[59:42] yes uh that that'll that that'll be my
[59:45] point that that I want to add uh this is
[59:48] a massive undertaking that touches every
[59:51] asp aspect of the game. It's why I
[59:53] wanted to do this show. It's why when
[59:54] they gave me one week a year to come
[59:56] over here, I wanted to use it for this,
[59:58] you know, it's it's this this is every
[1:00:01] department from from UI to to to every
[1:00:04] system design, mining,
[1:00:08] you know, FPS, locomotion. I mean, every
[1:00:11] every game system touches OCS in some
[1:00:13] way because of all the conversions to
[1:00:14] thread safe and stuff like that. um when
[1:00:17] this does get into your hands uh for for
[1:00:20] testing whether you're on evokati or
[1:00:22] whether you're in PTU or whether you're
[1:00:23] still helping us test once it reaches
[1:00:25] the live environment um
[1:00:28] your help on this is going to be
[1:00:29] appreciated uh that this this is one of
[1:00:31] the most the biggest fundamental changes
[1:00:33] to to Star Citizen that I can think of
[1:00:35] in the times that we're being here and
[1:00:37] it's not just on the feature side not
[1:00:39] just that we're adding a planet to this
[1:00:41] which is a pretty massive change
[1:00:43] contentwise but under the hood we're
[1:00:46] making this massive change to how
[1:00:48] everything works under the hood. So, it
[1:00:50] will be a uh it will be a uh it'll be an
[1:00:52] adventure and I think uh for folks who
[1:00:54] have followed our development and
[1:00:55] continue to follow our development as it
[1:00:57] goes on, this will be one of those
[1:00:58] watershed moments when we look back and
[1:01:00] be like, "Oh, yeah. I remember when they
[1:01:01] added OCS and and everything was upside
[1:01:04] down and stuff like that." You know,
[1:01:05] it'll it'll be it'll be an interesting
[1:01:07] thing to get through. And uh I'm I'm
[1:01:09] excited. It's it's one of those building
[1:01:10] blocks and one of those growing moments
[1:01:12] for the game that that we've been
[1:01:13] working towards for a long time. and I'm
[1:01:15] excited to to finally
[1:01:19] finally approach the the finish line,
[1:01:20] whatever that may be. So, yeah, that's
[1:01:24] it. I got no other housekeeping. This
[1:01:26] was all I had to do today. So, uh thank
[1:01:28] you so much, Clive and Chris and Gordon,
[1:01:31] for taking time at the end of your week
[1:01:33] to be here and to agree to this. I know
[1:01:35] it's uh not everybody's fun most fun
[1:01:39] thing to do. when I got into video games
[1:01:41] and I want to make video games, I did it
[1:01:42] so I could show up on live streams with
[1:01:45] Jared. So uh thank you so much uh Clive
[1:01:48] Gordon and Chris uh for Reverse the
[1:01:51] Verse Live. I'm Jared Huckabe. I've got
[1:01:53] nothing else to say. Uh tune in next
[1:01:55] week, but I'll be back in LA after my
[1:01:57] World 3E tour and we'll find out what
[1:01:59] we're doing then. Uh take it easy
[1:02:00] everybody. See you later.
[1:02:14] Thanks for watching. For the latest and
[1:02:15] greatest in Star Citizen Squadron 42,
[1:02:17] you can subscribe to our channel or you
[1:02:19] can check out some of the other shows
[1:02:21] and you can also head to our website at
[1:02:23] www.robertspaceindustries.com.
[1:02:27] Thank you very much for watching.

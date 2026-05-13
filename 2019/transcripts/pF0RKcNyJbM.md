# Star Citizen: Around the Verse - Pathfinder | 3.4 Ep. 7

**Video:** https://www.youtube.com/watch?v=pF0RKcNyJbM
**Date:** 2019-02-21
**Duration:** 8:41

## Transcript

[00:02] [Music]
[00:08] [Music]
[00:21] [Music]
[00:30] [Music]
[00:32] hello and welcome to another episode of
[00:34] around the verse I'm Eric Kon Davis and
[00:36] I'm Josh Herman today we're teaching
[00:38] NPCs how not to run into things having a
[00:41] quick chat about network service updates
[00:43] checking in with the VFX team for a look
[00:45] at lia's cryog geysers and more but
[00:48] first It's Hammer Time M the community
[00:51] loves their hammerheads and recently the
[00:53] Omega protectorate Corporation from our
[00:55] French Community got 50 players together
[00:57] for a massive Hammerhead Showdown it's
[00:58] some pretty cool stuff moving on to
[01:00] development one of the foundations of
[01:03] FPS gameplay is creating believable
[01:05] movement in the AI of the NPCs to that
[01:08] end the animation and AI teams have been
[01:10] working together on collision avoidance
[01:12] for NPCs in fps situations cool yeah
[01:15] here's senior animation programmer Adam
[01:17] rowski and Lead AI programmer Franchesco
[01:20] Ruchi with more recently we've been
[01:22] looking at improving collision avoidance
[01:24] with the AI with players they tend to be
[01:27] really unpredictable and so we have to
[01:29] be quite reactive
[01:30] Ive we need to make the animations work
[01:33] in a slightly different way because we
[01:34] just don't know what they're going to do
[01:35] at any point in time but with AI it's a
[01:38] different story because we sort of look
[01:39] in advance a little bit and make up a
[01:42] nicer path for them to follow but
[01:45] sometimes they need to be reactive too
[01:48] and one of those cases is with collision
[01:49] avoidance so we'll have the AI just
[01:52] nicely moving along following his path
[01:54] and then all of a sudden the collision
[01:56] avoidance system will detect that he's
[01:58] going to run into another character or
[02:00] run into a player and it will just
[02:02] suddenly say hey I need you to suddenly
[02:05] move over in this direction right now or
[02:07] you're going to have a collision so what
[02:09] we do at the in the case is like when
[02:11] the moment is active we allow the object
[02:14] collision avoidance code to kick in and
[02:17] calculate of the guys that are around
[02:20] you where to go effectively to avoid
[02:22] each other so mathematically we try to
[02:25] calculate how far are we with a
[02:27] collision so we basically predict with
[02:30] your speed and my speed when in time are
[02:32] going to collide and do we have enough
[02:35] time to avoid each other and you know
[02:36] how harsh the avoidance needs to be the
[02:39] collision avoidance code that we use is
[02:41] called Oram that is for optimal
[02:43] reciprocal collision avoidance uh
[02:45] basically it tries to find the optimal
[02:48] value for our speeds to avoid each other
[02:51] we now have it tell The Locomotion
[02:52] system hey I I need you to make this
[02:55] adjustment as well as you can then what
[02:58] we're doing is we're rebuilding the path
[03:01] around where the AI is moving taking
[03:04] that avoidance into account we can check
[03:06] on the nav mesh make sure that it's
[03:07] looking nice we can change the
[03:09] animations that they're playing we can
[03:11] do all sorts of extra planning because
[03:13] that system knows what's going on we can
[03:15] then pass that across to the clients and
[03:17] then the client will just follow what it
[03:19] says so the hope is this will make them
[03:23] generally move better stay in sync
[03:25] better it can decide what animations
[03:28] would look best and generally try to
[03:29] rebuild a nice path around the AI and
[03:32] then be able to keep it clamped onto the
[03:34] path which is what we're aiming for so
[03:37] this is what the new system is going to
[03:38] do and we hope that that will make uh
[03:41] desynchronizations a less of an issue in
[03:43] future and there's a few other cool
[03:45] things that we can do with this now that
[03:46] we know that they're always clamped to
[03:48] that path on the Star Citizen public
[03:50] road map you can find a variety of
[03:52] features and improvements our teams
[03:54] around the world are working on let's
[03:56] check in with lead Network programmer
[03:58] Clive Johnson who's going to tell us
[03:59] about some of the upcoming network
[04:01] service improvements slated for Alpha
[04:03] 3.5 for uh 3.5 the network team are
[04:06] working on uh object container streaming
[04:09] stalls we introduced object container
[04:11] streaming in 3.4 and you may have
[04:13] noticed that particularly when Quantum
[04:15] traveling there's a couple of points
[04:17] during the process where you'll get some
[04:19] hitches the first of these is as you
[04:21] leaving your point of origin behind you
[04:24] uh and all the entities there get
[04:25] streamed out and then you'll get another
[04:27] one a bit later on when you're arriving
[04:28] at your destination and the new set of
[04:31] entities gets streamed in the work that
[04:34] we're focusing on is the the network
[04:36] part of these stores and there's some
[04:38] other causes but these These are tested
[04:40] out to other teams there's a few
[04:41] different issues there and we're trying
[04:43] to minimize reduce the stores as much as
[04:45] we can and eliminate them uh wherever
[04:48] possible the other thing we're working
[04:49] on for 35 is the async disconnect
[04:52] refactor um that's basically changing
[04:54] our disconnection code which previously
[04:56] assumed that everything could be cleaned
[04:57] up in the frame but with the is due to
[05:00] OCS again it takes um multiple frames
[05:03] now to get rid of the entities uh so
[05:05] we're just kind of making that code more
[05:06] robust and that should fix some uh some
[05:08] server crashes and client crashes that
[05:10] we've had hopefully an occasional bug
[05:12] where uh people can get stuck on an
[05:14] infinite loading screen when they
[05:16] quitting back to front end as always the
[05:19] public road map is your tool to see
[05:20] what's coming up in the development of
[05:22] Star Citizen yeah in past episodes we've
[05:24] gotten a look at the cryog geysers on AR
[05:26] corpse Moon Lia and we explored VFX work
[05:29] on damage Thruster effects well Daniel
[05:31] and Jacob from the VFX team are back
[05:34] with updates on both check it out at the
[05:38] moment I'm working on two eix assets uh
[05:41] one is um the snow effect atmosphere
[05:44] effect and the second one are the
[05:47] geysers gazer effect is made out of
[05:49] steam and water the small drop of water
[05:53] coming out of the gazer are transforming
[05:55] into snow because of the coldness of the
[05:58] lyia Moon
[06:00] the effect is not a easy one to make it
[06:03] has to look good in different types of
[06:06] environment in
[06:07] ecosystems in some type of ecosystems we
[06:10] have uh much more wind and in less in
[06:14] others less wind what I did is put some
[06:16] more speed and turbulence so in this
[06:19] case uh we have movement even if there
[06:22] is no wind over there what I was trying
[06:25] to achieve with the Gaz effect is to
[06:27] make it look a little bit more different
[06:29] than the normal ones than the earth that
[06:31] we see
[06:35] everywhere this is latest station of the
[06:38] damage Thruster effects from previously
[06:39] shown a few weeks ago uh things have
[06:41] changed quite a bit since then
[06:43] everything's looking a lot more
[06:44] appropriate for star citiz and and like
[06:46] it fits a lot better since then on the
[06:48] tech side we've had a debug slider
[06:50] implemented for me to use this allows me
[06:53] to alter the health of the Thruster in
[06:55] real time so I can see how the effect
[06:57] would progress throughout the thrusters
[06:59] damage
[07:00] this uh increases iteration time a lot
[07:02] more and allows me to sort of see where
[07:04] I would want to have some artistic
[07:05] flares now and then so maybe when you're
[07:08] at thrusters at 50% Health we'd want a
[07:10] bunch of smoke coming out and then for
[07:12] them on to be really chaotic all the way
[07:14] up to just before your thrusters are
[07:16] about to be destroyed so that it's
[07:18] really obvious you need to pay attention
[07:20] right now something bad's happening so
[07:22] we saw those a month ago on ATV yep in
[07:24] early early R&D y pretty cool it is
[07:27] pretty cool I like that when we released
[07:29] that stuff on ATV that we get that
[07:30] feedback from the backers and we're able
[07:32] to incorporate it yeah totally I mean
[07:34] ATV is oh you know it's not just about
[07:36] updating the news right it's also about
[07:38] showing stuff early showing stuff often
[07:40] and then getting feedback and putting
[07:42] right in development that's true yeah so
[07:44] I think that's it for this week make
[07:45] sure you tune in to twitch.tv/
[07:47] starcitizen tomorrow at 12:00 p.m
[07:49] Pacific for a new episode of reverse the
[07:51] verse live Jared will be sitting down
[07:52] with vehicle pipeline director John crew
[07:54] to answer your questions about the
[07:56] recently revealed Argos SRV and thanks
[07:58] to our subscribers for sponsoring the
[08:00] shows and thank you to each and every
[08:01] backer for supporting development until
[08:03] next time we'll see you around the
[08:08] [Music]
[08:20] verse thanks for watching for the latest
[08:22] and greatest in Star Citizen Squadron 42
[08:24] you can subscribe to our Channel or you
[08:26] can check out some of the other shows
[08:28] and you can also head to our website at
[08:30] www. robertsspaceindustries.com
[08:33] thank you very much for watching

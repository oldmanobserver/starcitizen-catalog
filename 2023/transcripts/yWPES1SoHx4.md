# Inside Star Citizen: Life of VFX

**Video:** https://www.youtube.com/watch?v=yWPES1SoHx4
**Date:** 2023-08-10
**Duration:** 14:08

## Transcript

[00:00] [Music]
[00:00] hi welcome to strategy Crips I'm Max
[00:02] Snowden and this is where the magic
[00:04] happens
[00:08] [Music]
[00:22] severe Factory video games certainly in
[00:25] our games in particular it's it's
[00:26] basically it's energy represented
[00:28] visually so you're more typical the
[00:31] effects explosions fire all that kind of
[00:34] thing they're representing that kind of
[00:36] energy and the motion and the force and
[00:38] the violence that comes to even things
[00:40] like leaves getting blown around by the
[00:42] wind it's motion uh in in games the
[00:45] effects are everywhere in Star citizens
[00:46] so there's cooling there's steam there's
[00:48] Mist there's fog there's fallen leaves
[00:51] there's buzzing flies if the player
[00:53] fires a weapon they're going to expect
[00:55] some kind of payload for that they're
[00:57] going to expect to see muzzle flashes
[00:58] depending on the weapon of course but
[01:00] they're going to expect to see impact
[01:01] effects again without them kind of the
[01:03] effects in a game it's hard for the
[01:05] player to really read what's what's
[01:06] happening they're not kind of getting
[01:08] them visual cues and it sort of hinders
[01:10] their progress I think VFX matter and
[01:12] Star Citizen because the visuals are
[01:14] fantastic in our game but without the
[01:16] actual VFX the everything can look very
[01:18] static so it's not always the most
[01:20] tangible thing in a frame the players
[01:22] Seas but when you take away the effects
[01:24] you kind of notice that they're not
[01:25] there
[01:27] I joined crg nine years ago and there
[01:30] was quite a small group of us actually
[01:31] there was there was three or four of us
[01:33] VFX artists so originally the the VFX
[01:36] were struggling for consistency it was
[01:39] obvious that it was a project in its
[01:41] very early days and we were looking for
[01:44] that identity we were looking for that
[01:45] kind of consistency of visuals that that
[01:47] language that can be understood by the
[01:49] player and that's really why you build a
[01:52] team why you build a department to allow
[01:54] that kind of continuity in in VFX in a
[01:57] game
[01:58] so really in the nine years that I've
[02:00] been here we've kind of built a
[02:02] department a proper Department full of
[02:04] different skill sets different
[02:06] disciplines we've got a whole
[02:07] programming team we've got production
[02:08] we've got a better QA we've got Concepts
[02:11] we've obviously got artists as well we
[02:13] now have a coherence of visuals we have
[02:16] a language that is understandable and
[02:18] works for the player we had a good base
[02:19] in the first place but now the the
[02:21] toolkit is really really powerful and it
[02:24] needs to be for the ambition of the VFX
[02:25] in the game
[02:32] so the VFX team is basically a microcosm
[02:36] of game development the team is
[02:37] currently 21 people we also have a core
[02:39] team within that being the programmers
[02:41] the production side of it the concept
[02:44] inside of it and the QA side of it as
[02:46] well and we need that because we're
[02:48] serving other departments we're serving
[02:50] art we're also serving design and we
[02:53] need to have that kind of skill set
[02:54] within the team to be able to do all the
[02:55] things that are requested of us I'm Leo
[02:58] van stinkerser I'm a principal gfx
[03:01] programmer I do two things I manage a
[03:04] small team three four people of cfx
[03:07] programmers and I kind of handle the
[03:10] different projects that we have as a
[03:12] team that that gets done and then the
[03:14] second part is I do put some programming
[03:17] myself as well so I intentionally kept
[03:20] the team pretty small so that I have
[03:22] some time to program myself as well my
[03:24] name is Francesca I am a VFX programmer
[03:27] we had a team of four VFX programmers
[03:29] and the one that manages me is Leo a
[03:31] program specific graphics features and
[03:34] tools and other stuff related to VFX
[03:36] specifically mainly for artists to be
[03:38] able to do work with and create really
[03:40] nice visuals from my name is Alexander
[03:42] I'm on the VFX team as a tools
[03:44] programmer my job is to create sliders
[03:46] and the UAE elements to make it
[03:49] intuitive for the artists to work with
[03:51] we have a lot of different environments
[03:53] and effects and we need to take care of
[03:56] every single one of them and it's my job
[03:58] to make sure that it's easy for an
[04:01] artist to work with different type of
[04:02] effects I'm column and my job in the VFX
[04:05] team is assistant producer so generally
[04:08] day-to-day I do scheduling and just
[04:11] supporting the team in anything that
[04:13] they need to do so they get to focus on
[04:15] the creative things whilst I deal with
[04:17] what they would classes the bar inside
[04:19] of game development if the vf16 didn't
[04:23] have a producer it would be horrible he
[04:27] manages a lot and talks to other teams
[04:30] and makes sure we have all the
[04:31] information we need to be able to start
[04:33] working on a task if we had to do that
[04:35] ourselves that would be a lot of hours
[04:37] wasted every day
[04:39] the VFX editor is basically the place
[04:42] where you create the effects you give it
[04:44] a texture or a picture and you change a
[04:48] few values and suddenly it moves and you
[04:50] see coming to live it could be a smoke
[04:53] it could be a fire it could be lightning
[04:55] there is not much you can do without the
[04:58] code that would make the artists a
[05:01] programmers we program everything
[05:03] related to VFX that includes tools that
[05:06] includes features includes smaller
[05:09] things like triggering the effects from
[05:11] game codes to system for managing VFX
[05:14] making sure that VFX stabilized that
[05:16] they die on time as VFX programmer we
[05:19] get to work closely with VFX artists my
[05:22] name is Kevin and I am a VFX artist here
[05:24] at cig 90 of the effects we make in
[05:28] starships and our particle effects when
[05:30] you fire a weapon at the end of the
[05:33] barrel we will spawn a particle with a
[05:35] texture on it and then we modify
[05:37] parameters to be able to make that look
[05:39] like a muscle flash or smoke or whatever
[05:42] so basically we just have a bunch of
[05:44] parameters on how to spawn how to move
[05:47] and what a particle looks like Star
[05:49] Citizen is a really beautiful game and
[05:52] VFX are a large part the effects really
[05:55] need to be tailored for basically every
[05:57] possible situation this gives a lot of
[05:59] opportunities for for creating visuals
[06:02] and effects in ways that you would
[06:03] normally not see in other games the VFX
[06:06] needs to be seen from every angle from a
[06:10] very far distance to very close up we
[06:12] have such varying scales from just small
[06:16] rooms to planets to ships and even just
[06:21] empty space itself everything needs to
[06:23] be dynamic and systemic so all dvfx they
[06:26] are based on the underlying systems we
[06:29] get to look at these systems find the
[06:31] right Hooks and try and Trigger the
[06:35] right effects at the right time getting
[06:36] all of that together to get a consistent
[06:39] hole is pretty challenging but the
[06:43] results are always pretty cool the
[06:45] relationship within the team is very
[06:48] Dynamic we work together a lot and it
[06:50] kind of depends on what you're working
[06:52] on to Who's involved production tends to
[06:55] be involved a lot of the time generally
[06:57] on a day-to-day basis
[07:02] working closely with Aztecs and
[07:04] obviously other programs is pretty great
[07:06] there is a lot of feedback and
[07:08] information circling around what Paths
[07:10] of what you're working on you may want
[07:12] to improve on or even what parts are
[07:14] working well and should be iterated on
[07:15] even further it creates an environment
[07:17] in which no one feels like they're stuck
[07:20] on something
[07:21] foreign
[07:27] sex team we're basically a support team
[07:30] for everyone else we create effects for
[07:33] the vehicle team we've created X for the
[07:36] locations teams including planets any
[07:38] location you can think of we're going to
[07:40] be adding effects to them in some form
[07:42] or other and gameplay as well obviously
[07:44] all of these things are design driven so
[07:47] we need to create effects that help
[07:49] designers provide that feedback to the
[07:51] player we won't always be working on the
[07:54] effects at the exact same time we don't
[07:56] really come in on towards the end
[07:58] because we don't want to work on
[08:00] something that's going to get changed
[08:01] eventually so once a ship has been
[08:04] approved that's when the VFX team starts
[08:07] to work on it
[08:08] mostly people don't notice VFX I think
[08:11] subconsciously they do they look at a
[08:14] ship and they see a cool Thruster or
[08:17] when it dies a cool explosion or
[08:19] whatever
[08:25] but then again we have the subtle
[08:27] effects you don't notice it and the less
[08:29] you notice it the better it is it just
[08:32] plays in with the whole environment
[08:35] we provide a supporting role and we we
[08:38] contribute to making the game as good as
[08:40] we can
[08:45] the future of VFX at cig is bigger and
[08:49] better as cheesy as that might sound but
[08:51] it's also it's maintaining existing
[08:53] effects and it's building tools within
[08:54] the team that make that possible so one
[08:57] example of kind of tool improvements to
[09:00] help us maintain as well as improve
[09:02] effects is external reference in let's
[09:05] say you have two water effects they look
[09:08] very alike but there is a slight
[09:09] difference and suddenly an artist makes
[09:12] a even better picture to use for this
[09:14] water effects my job then was to
[09:17] implement a feature to just be able to
[09:19] change the picture of one effect and
[09:21] both of them change at the same time the
[09:23] one that's going to do is allow us to
[09:25] have a small group of Master effects
[09:28] that we can then propagate to other
[09:30] effects libraries throughout the game
[09:32] and it means we can we can maintain a
[09:33] smaller group of effects and we can make
[09:35] sure that those improvements Cascade
[09:37] throughout all the other libraries where
[09:39] those type of effects will be used being
[09:41] able to have the same effect looking a
[09:44] bit different over two projects saves
[09:47] time for the artists and it's easier for
[09:50] them to keep track of everything and
[09:52] upgrade the visual of an effect so
[09:55] that's going to streamline the process
[09:56] absolutely it's going to make it easier
[09:58] to keep a high quality to keep updating
[10:02] and improving the high quality through
[10:04] the years as well
[10:06] So currently I'm working on Lightning
[10:08] within gas cards we already have some
[10:11] lightning system in place but now we're
[10:14] adapting it to be possible to strike
[10:16] from wooden gas clouds this will give
[10:18] some extra gameplay opportunities for
[10:21] designers and the environment artists to
[10:23] dynamically spawn the lightning and hit
[10:27] ships hit players and make cash cards
[10:30] more dangerous I guess I think the
[10:32] lightning of cool is cool but I really
[10:34] like the new fire so something that
[10:36] we're really proud of and that we've
[10:37] been working on for a long time is fire
[10:39] propagation so fire hazards and that's
[10:41] being handled by our VFX programmers the
[10:44] finance system has already existed for a
[10:46] while but it was never fully finalized
[10:49] on the visual side so I'm currently
[10:50] implementing all the necessary back-end
[10:53] features to get fire looking as good as
[10:55] possible it's back to the final visuals
[10:57] I am working on more specialized way of
[11:00] spawning particles for fire which
[11:02] creates a more interesting Dynamic way
[11:04] in which fire propagates and the way
[11:07] things start to look child as but after
[11:08] fire has been there for a while that's
[11:10] been kind of a long process and it's
[11:13] still ongoing it's very very complicated
[11:15] and it's very ambitious but we're
[11:17] getting to a point now where I'm really
[11:19] really happy with where it's going the
[11:21] fire has a system itself is obviously
[11:22] gameplay critical the visuals obviously
[11:24] help to communicate where fire is
[11:27] present how strongly it's there and to
[11:29] give a real sense of danger for the room
[11:31] you're in the actual damage that the
[11:34] fire is causing on rooms is communicated
[11:36] through these visuals
[11:38] one of the best things about working on
[11:41] VFX for starships and is being able to
[11:43] see your work enter the game so quickly
[11:46] because we update the game so we so
[11:48] often so being able to see your work in
[11:51] players hands is always exciting to
[11:53] release a feature some new VFX that are
[11:56] part of one of the releases and you see
[11:58] players actually use your system and
[12:02] kind of push it to the Limit and it's
[12:06] always great to see working on statutes
[12:08] in particular is especially good because
[12:10] the citizen is a really really good
[12:13] looking game working generally in
[12:15] graphics and VFX I think personally is
[12:18] one of the most satisfying sort of
[12:20] disciplines when it comes to programming
[12:22] VFX is one of the big puzzle pieces to
[12:25] making the environment feel rich and
[12:27] full I feel like that's one of the
[12:28] biggest gains of VFX is making the game
[12:31] look beautiful
[12:34] [Music]
[12:39] [Music]
[12:46] so what do we learned this with
[12:49] well hopefully we learned a bit more
[12:50] about how Downstream teams like VFX
[12:52] these folks who generally come in
[12:55] towards the end of the pipeline brain
[12:57] life texture and Nuance to any game add
[13:00] those finishing touches that elevate the
[13:02] amazing work of other teams and add
[13:04] essential elements that really really
[13:06] make the difference between the
[13:08] immersive and the uh
[13:10] not immersive
[13:13] and don't forget that this year's ship
[13:14] show has begun as well as a new
[13:16] initiative Spotlight in the various
[13:17] missions in the verse I'm pretty sure
[13:19] this week it's Salvage you can check it
[13:21] all out now on the
[13:22] robertspaceindustries.com website for
[13:24] inside Star Citizen I'm Jared Huckabee
[13:26] thanks for letting us share the process
[13:28] of game development with you and we'll
[13:30] see you all here next week
[13:33] [Music]

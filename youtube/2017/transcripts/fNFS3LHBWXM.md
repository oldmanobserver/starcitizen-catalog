# Star Citizen: Bugsmashers! - Spectator Mode Crash

**Video:** https://www.youtube.com/watch?v=fNFS3LHBWXM
**Date:** 2017-03-29
**Duration:** 7:54

## Transcript

[00:06] [Music]
[00:15] everyone welcome to bug smashers
[00:18] I'm your host mark abent I'm a senior
[00:20] gameplay programmer here at CSULA and
[00:22] I'm here to show you the bugs so hi
[00:33] everyone we're here and our fancy-dancy
[00:35] vanduul swarm and we're going to
[00:38] replicate this crash where if we enter
[00:41] spectate mode see if I enter it there
[00:45] I'm in spectator mode everything works
[00:47] as expected everything's moving around
[00:49] but as soon as I disconnect I should
[00:54] crush do-do-do-do BAM crash this was an
[01:02] interesting crash it's actually HUD code
[01:05] accessing the item court system the an
[01:08] important system of course is our system
[01:10] which we use to connect like weapons to
[01:12] the player player to the ship all sorts
[01:14] of crazy shenanigans and for some reason
[01:18] the parent I should say it's the parent
[01:22] port parent port or this particular port
[01:26] is garbage it might be this it either
[01:31] way it doesn't like something there's
[01:32] some nasty it's parent part that's
[01:36] actually garbage and when access it when
[01:39] it was like whoa you're actually seeing
[01:41] memory that was deleted so what's
[01:44] happening in a why well let's step back
[01:46] close all the games and we're gonna
[01:50] really
[01:51] run it and explain the issue so I ran
[02:01] the wrong thing I click too fast come on
[02:06] there you go all right so what's
[02:07] happening here is anytime we sit into a
[02:10] seat we have to switch the player to
[02:12] this link-state it's in this actor link
[02:16] state code right here and this is
[02:18] basically the area that you hit when you
[02:20] enter or where you get removed from a
[02:24] seat you'll get the link event and the D
[02:27] Link event and under normal situations
[02:29] you should be going here so if you want
[02:32] to go into a ship you should get the
[02:33] link event so let's get processed if you
[02:36] want to do something like inter
[02:37] spectator mode leave the seat and go to
[02:39] this bit of code what these bit of code
[02:42] here is we basically take the player and
[02:45] we don't attach them to exactly an item
[02:47] part we just set his parent what that
[02:49] allows us to do is have his radar
[02:51] communicate to the vehicles radar and
[02:53] have the vehicles radar communicate to
[02:54] the players radar it's like this is how
[02:56] they the to communicate to the items and
[03:00] sub-items so the player can players
[03:02] visor could see all the items on the
[03:03] ship and vice versa and that's what
[03:06] basically this bit of code does and this
[03:09] bit of code the d-link will clean it all
[03:12] up so that we completely separate and if
[03:15] we don't get the proper D linking and
[03:18] unlinking Arleen linking and unlinking
[03:21] will never reach these bits of code and
[03:24] so if we have the ship and we delete it
[03:27] but the player never got the the link
[03:30] event or we and then we switch to
[03:34] observer mode this is gonna leave a
[03:37] dangling pointer and the item port code
[03:40] because we never cleaned up so when we
[03:42] sit down we tell the player that you are
[03:45] now linking to the vehicle we switched
[03:48] to observer mode we moved the player
[03:50] delete the vehicle well we never got
[03:52] this D links thing so now the player
[03:55] never cleaned up his item port so he's
[03:58] still pointing to this memory that was
[04:00] just gone
[04:02] so we need to make sure that we get to
[04:03] here before we go to observer mode and
[04:07] the observer code is so if I request to
[04:11] observe so we'll get it process it and
[04:13] ultimately come here and what it's doing
[04:16] is summary of the code when we delete
[04:18] the ship it will exit him but before it
[04:23] could actually get to the link state
[04:24] it's just completely setting a state
[04:27] machine to something completely else so
[04:29] even if we remove them from the seat
[04:30] he's this bit of code just ignores that
[04:34] all stuff and just directly a sciences
[04:37] new state machine and we never get to
[04:39] dealing the fix of course is to make
[04:43] sure that we properly exit the seat so
[04:46] that the state machine could pretend the
[04:48] required e-link we could remove all the
[04:50] admin port pointers and then we're not
[04:52] wanting to envelop memory and we're
[04:54] actually out of the seat correctly and
[04:56] then we can now see then snap to the
[04:59] required spectate mode so we're gonna
[05:02] hit recode do compile in place and as
[05:10] that code goes up and running
[05:13] bacon here that crunch go bacon
[05:27] alright recoat is finished so now we can
[05:31] connect to the server and of course
[05:33] connect things then take a bit of time
[05:35] so wonder what we can do I know
[05:37] bacon
[05:46] yes that's right you're just gonna watch
[05:48] me eat bacon for the next minute I'm
[05:53] okay with this bacon
[06:07] all right we're back into the game put
[06:09] the bacon aside and now we're gonna eggs
[06:12] go to spectate mode and we properly eggs
[06:16] to this sick seat we went to observer
[06:19] mode so now everything should have
[06:22] cleaned up correctly so when I exit I
[06:25] should not crash from that particular
[06:27] crash and as you can see I haven't
[06:35] crashed it's now loading the main menu
[06:37] all as well so you could go to spectate
[06:39] mode exit the game come back get out of
[06:42] the spectator mode going to seat do
[06:44] whatever your heart's content and you'll
[06:47] no longer crash because we have no more
[06:48] dangling pointers hope you guys enjoyed
[06:51] time for more bacon as you guys saw we
[06:55] had a fun little bug there where you
[06:57] join in and your co-op and you want to
[06:59] enter spectate mode and all sudden
[07:02] everything's fine and dandy you leave
[07:04] the game and all the sudden BAM everyone
[07:06] crashes spectator mode wasn't taking us
[07:10] out of the seat correctly in fact it was
[07:12] just kicking the vehicle away and then
[07:14] moving us in the spectate while everyone
[07:15] thought you're still in the seat so now
[07:18] spectate mode will actually remove you
[07:20] from the seat before moving you in to
[07:21] spectate mode now no more crashes when
[07:24] anyone leaves and all is good hope you
[07:27] guys enjoyed until next time
[07:30] thank you for watching so if you want to
[07:32] keep up with the latest and greatest in
[07:34] star citizen the squadron 42 development
[07:36] please follow us on our social media
[07:37] channels see you soon
[07:46] [Music]

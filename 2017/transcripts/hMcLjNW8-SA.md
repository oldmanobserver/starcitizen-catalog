# Star Citizen: Bugsmashers! - Floating into Oblivion

**Video:** https://www.youtube.com/watch?v=hMcLjNW8-SA
**Date:** 2017-04-26
**Duration:** 7:51

## Transcript

[00:10] Closed Captioning provided by Relay.sc
[00:13] Mark Abent: Hey everyone, welcome to Bugsmashers.
[00:17] I’m your host Mark Abent and I’m a Gameplay
Programmer here at CIG, LA and I take you
[00:22] behind the scenes of some of the ridiculous
bugs we have.
[00:26] Hope you guys enjoy, let’s start the show.
[00:32] All right, we are here in the fun, fun main
menu and we got a fun bug where when the player
[00:42] first spawns into a single player match, like
Free Flight or Survival mode or whatever you
[00:49] want to play in single player and if you don’t
touch any of the buttons, the player will
[00:56] start floating above the ship and then just
keep going and going and going forever.
[01:02] I did not believe this was true cause it sounds
ridiculous until I tried it and I swear I
[01:10] was laughing for a good ten minutes.
[01:13] It’s so ridiculous and so awesome, I just
started a match, let’s let the loading screen
[01:20] go and now we’re there and everything might
look normal but we’re actually ascending
[01:29] into oblivion.
[01:31] If I actually, use free cam, you’ll notice
that the player is not in his seat because
[01:44] he is floating somewhere in oblivion.
[01:49] I don’t know where he is, he’s up there
somewhere, if I do free cam disabled one…
[01:58] he’s floating far, far, far, far away.
[02:02] You can kinda see the… were moving.
[02:06] It’s so weird, what’s happening.
[02:10] Well, this took me down a long, long rabbit
hole.
[02:15] So to start off we have a ship and we have
a seat and then we also have, where is…
[02:21] we have a player.
[02:22] We stick the player onto the ship by an attachment
using the good old attachment system and in
[02:29] theory when the ship moves and animates, the
player will get snapped to the position.
[02:35] Unfortunately or fortunately our attachment
system is a little too optimal in a good way.
[02:42] Where if our ship isn’t animating or isn’t
moving, it doesn’t necessarily need to move
[02:46] any of our attachments, so that means if our
ship is staying perfectly still, we’re not
[02:51] shooting, we’re not flying, we’re not
doing anything.
[02:53] In theory we do not need to move the player
to this position or any of it’s guns or
[02:57] items because it’s position is always going
to be the same and that’s what these beautiful
[03:03] bits of code do her.
[03:04] So, that’s why our player’s actually not
teleporting to the seat.
[03:10] The reason why he’s not moving is because
the good old physics code decided when we
[03:17] transition from one zone to another zone or
the world to inside the ship, we need to maintain
[03:25] his velocity relative to the zone.
[03:28] That includes a bunch of things such as you
move and your rotation and all that fun jazz.
[03:35] During that specific calculation it decides
to give the player a slight position due to
[03:41] good old floating point resolves.
[03:44] So he’s moving really, really, really tiny
and it’s just accumulates really, really
[03:49] quite a bit.
[03:50] So get around that fun stuff, in the attachment
the player animated character…
[03:57] this handles the player’s actual skeleton
and stuff like that.
[04:01] We have specific areas where when he animates
it updates relative to the attachment and
[04:07] all that fun stuff.
[04:09] So, what we want to do is when he’s in this
specific state, we want to just clear the
[04:15] velocity.
[04:17] Just in case he happens to get some, so what
we’re going to do here is we’re going
[04:23] to use, what is it…
[04:29] I closed all my fun stuff.
[04:32] There we go, so we have this thing called
pe_status_living which we ask the physics
[04:38] system cause the player is, we call him a
living entity, it’s his physics type.
[04:43] We have rigid, we have static, while the player
is living because he has ragdolls and all
[04:47] that fun.
[04:48] We have this structure called pe_status_living
which we’ll fill out a bunch of interesting
[04:54] information.
[04:56] Particular information we want in physics
is this velocity which is what you… when
[05:03] you press a button to move or you’re moving
to that zone as I was saying, this is the
[05:07] velocity the player has so he can move through
the world.
[05:10] If this is not zero, what we want to do is
now tell physics to clear all of his velocity
[05:17] and rotation because when he’s in the seat
and stuck to an attachment he shouldn’t
[05:23] have any velocity.
[05:25] Just so happens switching from zones does
give him a little bit.
[05:29] So, we’re going to disable velocity if he
ever has any.
[05:33] So, let’s hit the magic recode button.
[05:37] Actually we don’t have to recode, we’ll
just build because it’s pretty simple to
[05:42] replicate this one since we have to go to
the main menu and then to single player.
[05:46] So, we’ll let that build and then we’ll
start up the game and see what happens.
[05:52] Sorry, I don’t have bacon today so just
going to be drinking coffee while it gets
[05:59] done.
[06:01] All right, we’re back to the main menu,
go to Arena Commander.
[06:07] Wait for more loading, then single player,
go to our Free Flight and then we go to some
[06:16] more loading.
[06:17] I love these line rides, they’re the best.
[06:20] Now if I don’t touch anything, I should
still be in the cockpit of my ship.
[06:27] There we go, so I’m no longer floating away
into oblivion I’m actually still in the
[06:34] ship and everyone’s having good times.
[06:41] Ridiculous bugs, hope you guys enjoyed, until
next time.
[06:45] So we had a fun little bug here where if you
join into a map and you stay absolutely perfect
[06:51] still, the player decides to ascend into oblivion
and well that was just our backend attachment
[06:57] code deciding to be a little more optimal
than it needed and our physics code deciding,
[07:02] ‘hey, let’s give the player a slight velocity
when we change zones’.
[07:06] With those two combinations having fun and
doing their thing, it was the perfect storm
[07:11] to send the player off into where ever he
wanted to go.
[07:13] It was a quick fix to make sure that if he’s
in the seat and he’s done that zone transition
[07:20] just to nuke out any velocity so he stays
in the ship til he’s ready to move with
[07:24] the ship sometime later.
[07:25] Hope you guys enjoyed, until next time.

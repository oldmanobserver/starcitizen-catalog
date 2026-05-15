# Star Citizen: Bugsmashers! - Shotgun Recoil

**Video:** https://www.youtube.com/watch?v=QPn3_raqtjw
**Date:** 2017-05-24
**Duration:** 5:19

## Transcript

[00:11] Closed Captioning provided by Relay.sc
[00:14] Mark Abent: Hey everyone, welcome to Bugsmashers.
[00:18] I’m your host Mark Abent and I’m a Gameplay
Programmer here at CIG, LA and I take you
[00:21] behind the scenes of some of the ridiculous
bugs we have.
[00:25] Hope you guys enjoy, let’s start the show.
[00:31] All right, we are here in the fun, fun main
menu and we got a fun bug where when the player
[00:42] first spawns into a single player match, like
Free Flight or Survival mode or whatever you
[00:52] want to play in single player and if you don’t
touch any of the buttons, the player will
[00:59] start floating above the ship and then just
keep going and going and going forever.
[01:06] I did not believe this was true cause it sounds
ridiculous until I tried it and I swear I
[01:11] was laughing for a good ten minutes.
[01:13] It’s so ridiculous and so awesome, I just
started a match, let’s let the loading screen
[01:17] go and now we’re there and everything might
look normal but we’re actually ascending
[01:22] into oblivion.
[01:23] If I actually, use free cam, you’ll notice
that the player is not in his seat because
[01:24] he is floating somewhere in oblivion.
[01:26] I don’t know where he is, he’s up there
somewhere, if I do free cam disabled one…
[01:30] he’s floating far, far, far, far away.
[01:32] You can kinda see the… were moving.
[01:34] It’s so weird, what’s happening.
[01:37] Well, this took me down a long, long rabbit
hole.
[01:40] So to start off we have a ship and we have
a seat and then we also have, where is…
[01:46] we have a player.
[01:47] We stick the player onto the ship by an attachment
using the good old attachment system and in
[01:54] theory when the ship moves and animates, the
player will get snapped to the position.
[01:59] Unfortunately or fortunately our attachment
system is a little too optimal in a good way.
[02:02] Where if our ship isn’t animating or isn’t
moving, it doesn’t necessarily need to move
[02:03] any of our attachments, so that means if our
ship is staying perfectly still, we’re not
[02:05] shooting, we’re not flying, we’re not
doing anything.
[02:06] In theory we do not need to move the player
to this position or any of it’s guns or
[02:09] items because it’s position is always going
to be the same and that’s what these beautiful
[02:10] bits of code do her.
[02:11] So, that’s why our player’s actually not
teleporting to the seat.
[02:12] The reason why he’s not moving is because
the good old physics code decided when we
[02:15] transition from one zone to another zone or
the world to inside the ship, we need to maintain
[02:23] his velocity relative to the zone.
[02:27] That includes a bunch of things such as you
move and your rotation and all that fun jazz.
[02:35] During that specific calculation it decides
to give the player a slight position due to
[02:39] good old floating point resolves.
[02:40] So he’s moving really, really, really tiny
and it’s just accumulates really, really
[02:44] quite a bit.
[02:45] So get around that fun stuff, in the attachment
the player animated character…
[02:49] this handles the player’s actual skeleton
and stuff like that.
[02:51] We have specific areas where when he animates
it updates relative to the attachment and
[02:56] all that fun stuff.
[02:57] So, what we want to do is when he’s in this
specific state, we want to just clear the
[03:05] velocity.
[03:06] Just in case he happens to get some, so what
we’re going to do here is we’re going
[03:16] to use, what is it…
[03:17] I closed all my fun stuff.
[03:19] There we go, so we have this thing called
pe_status_living which we ask the physics
[03:26] system cause the player is, we call him a
living entity, it’s his physics type.
[03:32] We have rigid, we have static, while the player
is living because he has ragdolls and all
[03:38] that fun.
[03:39] We have this structure called pe_status_living
which we’ll fill out a bunch of interesting
[03:42] information.
[03:43] Particular information we want in physics
is this velocity which is what you… when
[03:45] you press a button to move or you’re moving
to that zone as I was saying, this is the
[03:50] velocity the player has so he can move through
the world.
[03:52] If this is not zero, what we want to do is
now tell physics to clear all of his velocity
[03:53] and rotation because when he’s in the seat
and stuck to an attachment he shouldn’t
[03:58] have any velocity.
[03:59] Just so happens switching from zones does
give him a little bit.
[04:04] So, we’re going to disable velocity if he
ever has any.
[04:09] So, let’s hit the magic recode button.
[04:10] Actually we don’t have to recode, we’ll
just build because it’s pretty simple to
[04:16] replicate this one since we have to go to
the main menu and then to single player.
[04:20] So, we’ll let that build and then we’ll
start up the game and see what happens.
[04:23] Sorry, I don’t have bacon today so just
going to be drinking coffee while it gets
[04:29] done.
[04:30] All right, we’re back to the main menu,
go to Arena Commander.
[04:31] Wait for more loading, then single player,
go to our Free Flight and then we go to some
[04:39] more loading.
[04:40] I love these line rides, they’re the best.
[04:43] Now if I don’t touch anything, I should
still be in the cockpit of my ship.
[04:45] There we go, so I’m no longer floating away
into oblivion I’m actually still in the
[04:49] ship and everyone’s having good times.
[04:52] Ridiculous bugs, hope you guys enjoyed, until
next time.
[04:54] So we had a fun little bug here where if you
join into a map and you stay absolutely perfect
[04:57] still, the player decides to ascend into oblivion
and well that was just our backend attachment
[04:58] code deciding to be a little more optimal
than it needed and our physics code deciding,
[04:59] ‘hey, let’s give the player a slight velocity
when we change zones’.
[05:00] With those two combinations having fun and
doing their thing, it was the perfect storm
[05:01] to send the player off into where ever he
wanted to go.
[05:02] It was a quick fix to make sure that if he’s
in the seat and he’s done that zone transition
[05:03] just to nuke out any velocity so he stays
in the ship til he’s ready to move with
[05:04] the ship sometime later.
[05:05] Hope you guys enjoyed, until next time.

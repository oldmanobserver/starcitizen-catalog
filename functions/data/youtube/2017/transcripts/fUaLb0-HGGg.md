# Star Citizen: Bugsmashers! - Player Move Requests

**Video:** https://www.youtube.com/watch?v=fUaLb0-HGGg
**Date:** 2017-02-15
**Duration:** 7:51

## Transcript

[00:10] Closed Captioning provided by Relay.sc
[00:14] Mark Abent: Hey everyone, welcome to Bugsmashers.
[00:18] I’m your host Mark Abent and I’m here
to take you behind the scenes on some bugs
[00:22] and how we smash them.
[00:25] Hey everyone, we’re here in that awesome
test level of mine and I have a Gladius and
[00:37] I’m going to pop right down.
[00:38] So, this bug that we have came from the physics
guys, you know, they’re analyzing some things
[00:46] and they found out, ‘well, we could do some
slight optimizations’ and when we have the
[00:52] player and he’s just walking around.
[00:55] He sends move requests to physics to move,
his physics type is known as a living body,
[01:01] he has ridges and he moves organically.
[01:03] So, when he gets inside one of these ships,
let’s see we’ll hop in right there.
[01:10] We basically take him and snap him to the
chair and we keep him there all the time.
[01:14] So he doesn’t need to do any of these crazy
move requests but unfortunately when we snapped
[01:18] here, he’s still doing all of the move requests.
[01:21] So, pop down into the code.
[01:25] In this little bit of code that we have here,
this is how we control the player or any actors
[01:32] when you want to move left or move right or
if the animation wants to force you to move
[01:37] to a specific location.
[01:39] This little bit of code runs and it figures
out what it needs to do and it sends either
[01:43] requests to physics or requests to animations
to do some alignment.
[01:48] So, once we get down to this little bit, if
we’re bound to an attachment which is going
[01:55] to be basically here inside the ship or in
a seat or some other thing that needs to keep
[02:01] the player in a localized area.
[02:04] We basically, if we have an attachment we
move all of his move requests local to that
[02:10] attachment, that way if we sit down here he
still moves but it’s relative to the attachment
[02:16] because we’re always forcing him to that
location.
[02:19] In this bit of code is where we tell physics
to stop moving because we’re basically just
[02:27] moving the player entity by game code around
that location point.
[02:34] So every frame we’re basically saying, ‘hey
physics, stop’ and what this actually does
[02:38] is the physics code will actually do some
internal stuff that basically wakes him up
[02:43] and maybe does some things that were not necessary
because… well, we’re doing our own thing.
[02:49] So, the guys in the UK specifically Jens decided
what we could do instead if we get the movement…
[03:08] we’re going to check the status of our position
and we’re going to see if our position is
[03:25] active.
[03:31] We actually want to see the player dynamics.
[03:43] So this is something specific to the player
physics, we want to see what the player is
[03:48] actually doing because living entity like
I said he’s more organic so he has a lot
[03:54] more features.
[03:56] So we’re going to check to see that the
player is actively walking, so physics is
[04:00] moving him then we’re going to stop it.
[04:04] From this point on we don’t have to tell
physics to do anything because he should still
[04:07] be stopped.
[04:08] So, we’ll hit magical recode button.
[04:13] No...recode.
[04:14] Ah, here’s the one fun thing physics, this
bull not a bull so we gotta make sure it’s
[04:22] not zero.
[04:27] Physics does some crazy, crazy optimizations
and tricks especially since it’s an old
[04:32] system so what you think is a bull is actually
an ent, joy.
[04:40] Recode.
[04:42] Why are you… ah, recode, recode, go!
[05:02] It would help if I used the correct function,
physics has a params and status and why don’t
[05:12] you want to get… ah.
[05:16] Two early in the morning.
[05:17] So physics has params and status and you have
figure out which…
[05:21] basically you just look at the function to
see if it’s params or status and call it
[05:25] the appropriate function.
[05:26] Then of course you have to remember that this
takes in pointer so you have to send in the
[05:30] reference of the structure so physics can
fill it in.
[05:37] Those early mornings when you think have it
down, the error code pops up and you’re
[05:42] like, ‘oh, of course’.
[05:43] All right, so we ran it and now that’s were
inside the ship we should not be getting any
[05:50] break point in here and of course as we move
around the ship, we get nothing.
[05:56] So if I pop out, where’d my ship go… hop
back down, wooo.
[06:08] My guy won’t run in this area of the code
but he will do some movement requests down
[06:14] here which will send it to physics.
[06:17] All we care about though is the attachment,
so we’ll go back in and I’m still free.
[06:28] The attachment code kicks in, so this is the
first time it runs since I was moving around
[06:35] I might be active.
[06:36] I’m not active so it clears it and we’ll
see.
[06:41] Yup, so we never hit it again, perfect.
[06:44] There you go, hope you guys enjoyed.
[06:48] So, as you guys saw we had a fun little optimization
there.
[06:52] The physics guys are like, ‘hey, we’re
getting these crazy move requests from the
[06:56] player when they’re in the seat, they shouldn’t
even be moving’.
[06:58] So if we optimize it a little bit there, the
physics side won’t have to do all these
[07:03] crazy calculations when the game side is just
going to keep snapping them.
[07:07] So again, just put in a little fix…
[07:08] 1,2,3, bam.
[07:10] Slight easy optimization and we gain quite
a big performance in Crusader especially when
[07:16] we have all those AIs running around and we’re
snapping them into place, you don’t need
[07:19] to do physics moves.
[07:21] So nice little optimization, speeds up the
game and gives you guys that little bit extra
[07:25] FPS.
[07:26] Hope you guys enjoyed, till next time.

# BUGSMASHERS! Episode 08

**Video:** https://www.youtube.com/watch?v=9KESuifSMSE
**Date:** 2015-08-12
**Duration:** 8:25

## Transcript

[00:00] hey everyone welcome back to another
[00:01] episode of bug Smashers you know
[00:04] sometimes you got to break stuff so you
[00:05] can be the hero who fixes
[00:10] it bug
[00:12] [Music]
[00:17] smashes all right hey everyone we're
[00:20] here in the fancy Dancy test level again
[00:23] and I am going to show you a little bug
[00:25] that we had to fix especially for
[00:27] gamescon and you guys have probably seen
[00:30] it quite a bit so if I hop in ignore
[00:34] that little extreme explosion with the
[00:36] geometry but our guy walks up and if I
[00:40] rotate or move the ship he kind of
[00:42] doesn't follow he just stays there when
[00:45] entering uh we've had this in the build
[00:47] for quite a while and we're like you
[00:50] know what we need to fix this especially
[00:52] for gamescon so let me pause this and
[00:57] we'll reset the ship
[01:02] oh where'd he go see I want to rotate it
[01:04] this way there we go all right so why is
[01:09] this happening well long long long long
[01:12] long time ago uh when we set up our
[01:16] fancy Dancy vehicle seats um we
[01:19] basically send off an animation and we
[01:22] teleport the player to that POS the
[01:25] enter position and then we tell that
[01:29] animation that here's the initial
[01:30] position update according to that and
[01:33] this was all done back for the hanger so
[01:35] that it would snap the player to the
[01:37] position and bring him up but however it
[01:40] will never ever update um that position
[01:43] as you can see here it gets the position
[01:46] once and this basically will send the
[01:50] initial position and never it'll never
[01:51] hit this code again because it's like
[01:53] hey we're playing here we are go to this
[01:56] point and what we needed to do is make
[01:59] sure that he follows that exact point
[02:02] now lucky for us I have some refactored
[02:05] code here that utilizes our attachments
[02:09] where when after the animation plays it
[02:11] will snap you to the seat and from then
[02:13] on you're you know you're stuck with the
[02:14] ship so why not use that for the enter
[02:17] and exit so let's go all the way up to
[02:21] um the enter let's see make sure yep I'm
[02:24] in the enter I am going to gut this bit
[02:28] of code because we no longer need to
[02:31] teleport the player there since we're
[02:32] going to use our fancy Dancy attachments
[02:35] and our attachments basically like I
[02:38] said we just make sure that he he um
[02:41] gets stuck at that one position so in
[02:44] the vehicle we have a bone like so
[02:46] here's vehicle we have bone right here
[02:48] for the enter so all we have to do is
[02:50] attach using our attachment system so
[02:52] every frame he gets snapped to that
[02:54] position we use this thing for items and
[02:56] all sorts of things so might as well use
[02:59] it for the enter
[03:00] all right so I'm going to uncomment my
[03:02] code which I've already have done
[03:05] this and here we go so when we attach we
[03:09] go to our enter and then we create an
[03:11] attachment so that we start at the
[03:14] position here and should move up now we
[03:17] already have it for when he sits down
[03:19] but now we also need it for
[03:22] exiting so we'll do it for when he exits
[03:25] as
[03:27] well all right so we basically use this
[03:30] little function to create our
[03:32] attachments for the enter and exit as
[03:34] you can see here we create our
[03:36] attachment and it gets rid of the old
[03:38] one in case we have a different bone so
[03:40] I just hit
[03:42] recode oh it's all done let's hop in
[03:44] game and see what happens oh I love that
[03:46] stretching the
[03:48] geometry so our gu climbing up oh he's
[03:52] actually not moving but he is attached
[03:55] to the right spot oh no so we're almost
[03:59] there
[04:04] it's a good feature I love the bones
[04:06] like the bones bones are the best part
[04:09] so after he's done his animation he's
[04:11] snapped in place and then he'll
[04:15] exit on the legs
[04:28] animation
[04:31] oh he doesn't want to exit why don't you
[04:34] want to
[04:35] exit I probably broke the flow graph all
[04:38] right we got him now to stick with the
[04:40] ship but as you can see he's doing his
[04:43] animation but he's not
[04:45] moving all right so what happens here
[04:48] well unfortunately the attachment system
[04:51] is constantly snapping him to that enter
[04:54] position that's exactly what we want but
[04:57] his animation hasn't moving so we need
[04:59] to move him relative to that
[05:01] attachment and that's what this special
[05:05] little um guy does here we tell the
[05:07] actor that he's now linked to an
[05:09] attachment so we could go to our fancy
[05:12] Dancy animated character uncomment this
[05:15] fun little code and what this will do is
[05:18] say hey if we have an
[05:20] attachment and we have an animation
[05:24] that's this want to move and it wants to
[05:27] move somewhere in local space lucky for
[05:30] us that attachment and the um entity are
[05:33] in about the same space uh we just have
[05:36] to make sure that we get the RO um his
[05:38] transformation correct we are going to
[05:40] be taking our local transformation of
[05:45] that bone and then we will start moving
[05:48] towards where he needs to go in local
[05:50] space and then tell the attachment to
[05:53] move the player relative to that offset
[05:57] so we have the player attachment he
[05:59] starts to move and then we tell the
[06:02] attachment now at this position we want
[06:04] the player there so I'll move the player
[06:07] and every frame will slowly move the
[06:09] player up and up and up and the
[06:11] attachment will make sure that he is
[06:13] there every frame so let's do a little
[06:16] recode on that little
[06:19] spot
[06:28] and and we have done recording all right
[06:31] so now we'll go AI
[06:34] physics and now he's moving and look at
[06:38] this look at this I could move the
[06:40] vehicle all the way around I could even
[06:42] rotate
[06:45] it and he follows it h
[06:51] yeah fun little
[06:53] guy let's try that
[06:57] again let's move this out the way give
[07:00] it a weird
[07:01] rotation then once the animation plays
[07:05] he snaps there and we could rotate all
[07:08] we want and he plays his fun
[07:11] animation relative to the vehicle
[07:14] woo hope you guys enjoyed this bug um
[07:18] you guys have probably seen this inside
[07:20] the you know the game now where you know
[07:22] you get into a ship and then the ship
[07:24] goes that way but your character is
[07:25] still walking up in space uh that was an
[07:28] old bug that we've never been able to
[07:30] get to and like you know now we had to
[07:33] especially for Gamescom so we're like
[07:35] all right let's use an existing system
[07:37] our attachment system fix it up and Bam
[07:40] so now when the ship moves you move uh
[07:44] hope you guys enjoyed that one and
[07:45] unfortunately I don't have any time for
[07:47] questions because we're all crunching
[07:50] for gamescon which by now has probably
[07:52] passed for you guys because we're airing
[07:55] this I don't know what week after it has
[07:57] hit if we've done our job right there
[07:59] shouldn't be any bugs but if there was a
[08:02] bug or two at Le hopefully it was
[08:04] enjoyable and until next
[08:07] time cool
[08:23] beans

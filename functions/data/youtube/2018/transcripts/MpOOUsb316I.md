# Star Citizen: Bugsmashers! - Tick Rate Madness

**Video:** https://www.youtube.com/watch?v=MpOOUsb316I
**Date:** 2018-03-28
**Duration:** 10:33

## Transcript

[00:06] [Music]
[00:15] everyone welcome to bug smashers
[00:17] I'm your host mark abent let's get
[00:19] started everyone we are here in the PU
[00:28] map I know you guys like my fun fancy
[00:30] dancy test level but unfortunately that
[00:32] level won't do for this bug I am here in
[00:36] my Gladius and we have a fun bug where
[00:39] if the server and the client FPS beggar
[00:42] grade too far from each other as in the
[00:44] server goes too low and the client goes
[00:46] too high because well we've been doing
[00:48] amazing optimizations for the client
[00:50] there can be a chance that when you try
[00:52] to take off
[00:53] you kind of sputter a bit and then you
[00:56] go up so we're gonna try to see if we
[00:58] could replicate that issue veiss
[01:00] basically telling the server to always
[01:03] run at 5 fps because i'm well a monster
[01:06] so servers running at 5 FPS I'm running
[01:09] at about 30 I am now going to try to
[01:12] replicate that bug by turning on my
[01:15] magical flight-ready
[01:17] Shazam now I've controlled my ship and
[01:21] I'm gonna take off and as you see I
[01:23] really can't take off I am sputtering
[01:26] and snapping every which way so if we
[01:30] put a breakpoint in the code in this fun
[01:33] little bit I'm going to put it right
[01:36] here this is basically the ifcs or
[01:40] flight control or basically the ship
[01:42] networking system the server player is
[01:45] basically the server representation as
[01:47] you can see my dedicated server
[01:49] representation of the the ship I also
[01:51] have a client version of this and this
[01:54] class basically shares information to
[01:57] and from each other the server knows
[01:58] what the client is trying to do in the
[01:59] clients from knowing what the service
[02:01] trying to do and in this situation we
[02:03] have the case where the server is trying
[02:07] to process some of the packets from the
[02:08] client but it can't because the client
[02:12] has this ticker
[02:13] to 4,000 and the last received ticker
[02:18] break it got is over 5,000 and so it
[02:22] never processes the client state this
[02:26] gets a little bit funky because what's
[02:28] happening is when I first get into the
[02:32] ship the server controls pretty much the
[02:35] whole system and then when I do flight
[02:36] ready I have told the server that I am
[02:38] ready to take control of this so now I
[02:41] am the local client I would like to tell
[02:43] the server what I would like to do for
[02:45] the ship move to left move to the right
[02:46] move all the way up and down and the
[02:49] client will basically be the authority
[02:51] of the ship and the server could at
[02:53] times be like no I don't like what
[02:54] you're doing snap to this state and when
[02:57] we do this weird transition period the
[02:59] server is trying to snap the client
[03:01] however during this odd period because
[03:04] the server is at five fps it's running
[03:07] updates a little bit slower than the
[03:09] client so the client is way up here at
[03:11] the clients the server is still catching
[03:13] up so when we switch authorities the
[03:16] server the client switch it basically
[03:20] snaps to the service state and then that
[03:23] gives the client this tick rate of 4,000
[03:26] however the server last time it heard
[03:29] from the client was at 5,000 so it got
[03:34] into this weird situation where when we
[03:36] were exchanging authorities and
[03:37] capturing ticks the server gets borked
[03:42] because we had snapped to the client
[03:44] state but the last time it heard about
[03:47] the client was when it was in control so
[03:50] it gets this weird little basically
[03:53] whispered the client tick will have to
[03:57] eventually get to 5,000 before I'm able
[04:01] to take off and this is a huge problem
[04:04] because well I don't got a minutes to
[04:06] wait all day and in fact if you were to
[04:08] just wait inside of the the cockpit for
[04:11] a good 10 minutes and then turn it on
[04:13] you got to wait about 10 minutes before
[04:14] you could take off not fun so what we
[04:17] want to do is change this bit so that if
[04:23] the server has informed us that we need
[04:25] to snap
[04:26] we're just going to do the snap the
[04:29] server when we do that transition the
[04:31] server wants to snap the client to the
[04:33] correct state so that they become
[04:35] aligned and their ticket rates match and
[04:37] that didn't happen so we're going to
[04:39] change some of the codes too and make
[04:41] sure that this does happen and in this
[04:43] block this is the server representation
[04:46] so we need to make sure that the client
[04:49] is responding to the server step so
[04:52] we're gonna say client wants to serve
[04:58] snap we're gonna ask the server of the
[05:03] client what where is it
[05:07] what tick he expected it to be should be
[05:12] let's go into area when I rewind a bit
[05:22] so when the server wants to snap the
[05:25] client it basically sets this rule of
[05:29] true indicating that we are waiting for
[05:31] the client to reprocess this and it does
[05:34] this weird trick with this tick rate
[05:37] where it sets the current tick and then
[05:39] negative one when it gets to its weird
[05:41] so we're just going to make it always
[05:43] send the fourth tick rate that way we
[05:47] could check so it did this weird thing
[05:50] where if we set to negative one we don't
[05:52] want to do a snap but if we have a not
[05:54] negative one we want to do a snap when
[05:57] really instead it should just be the
[05:59] tick rate last time we have done a snap
[06:02] and if that doesn't match we just should
[06:04] snap to the state that the server told
[06:07] us to so we're always just going to send
[06:09] the last time a server did the snap so
[06:12] that the client and can know that it
[06:14] needs to do a change so now that we did
[06:17] this bit we need to change up we're
[06:21] going to change up the client bit saying
[06:23] see the server is telling us that we
[06:27] need to snap to let's see server said to
[06:30] snap crackle pop so let's let's do it
[06:36] and what we got to do so we get the
[06:40] server state and check against do our
[06:47] representation of when the server told
[06:49] us to last snap Wow
[06:51] so if our last time we heard from the
[06:55] server to snap is different than what
[06:58] the server told us to snap we're gonna
[07:00] snap crackle pop so if our ticket rates
[07:05] are different or we're snapping we're
[07:08] just going to process the snap on the
[07:11] client so on the server client process
[07:15] it we are just going to go yeah this is
[07:18] a snap
[07:18] is this a snap yes this is a snap
[07:27] because our rates are different so here
[07:32] since we have process to do we have
[07:36] determined that we're snapping we also
[07:40] need to realize that we are snapping in
[07:41] this bit we're gonna always update to
[07:44] the latest tick rate that the server
[07:47] told us to snap to then we're gonna
[07:49] process the snap as if we're gonna snap
[07:53] oh snap basically teleports us to where
[07:55] the server has set us all right now
[08:00] let's follow the trail so client gets
[08:04] the server snap snaps that be now the
[08:11] server
[08:15] this is the clients response saying I
[08:17] have snapped at this tick if that
[08:20] matches what the server expected and the
[08:22] server is waiting for a a snap response
[08:30] we are going to process the client and
[08:34] continue down into here and go yep we're
[08:37] done so service sends out the snap sends
[08:39] out what tick rate is sent to snap bet
[08:41] the client gets it goes oh that's
[08:43] different this is a response so I need a
[08:45] snap to the server state tells the
[08:47] server that I have snapped the server
[08:48] gets and goes yes you have and then
[08:50] process it as it should
[08:52] so let's recode this magic and see what
[08:54] happens all right so recode is finished
[08:59] we are back in our ship and let's see if
[09:02] we could take off success we could take
[09:07] off there's a little fun little jitter
[09:10] on the UI but I'm able to get up and go
[09:12] just as I please so look like we fixed
[09:15] it so hope you guys enjoyed and network
[09:18] shenanigans as we make the game faster
[09:20] we're uncovering some fun fun problems
[09:23] hope you guys enjoyed until next time so
[09:26] as you guys saw we had a fun little bug
[09:27] where the server and client are vastly
[09:30] different fps is at times which
[09:32] shouldn't happen but under certain
[09:34] circumstances it does and since we
[09:36] vastly improved the client FPS rating
[09:39] when these two get so far out of sync
[09:41] the tick rates on them goes completely
[09:43] out of sync and once more heather than
[09:46] the other and that caused some fun stuff
[09:48] and the ifcs networking now we fix that
[09:51] up so that anytime the server needs to
[09:54] snap to client we just do it and then
[09:56] we're good to go
[09:57] hope you guys enjoyed until next time
[10:05] [Music]
[10:12] thanks for watching for the latest and
[10:14] greatest in star citizen squadron 42 you
[10:16] can subscribe to our Channel or you can
[10:18] check out some of the other shows and
[10:20] you can also head to our website at

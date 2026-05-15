# BUGSMASHERS! Episode 10

**Video:** https://www.youtube.com/watch?v=IAqJoiYR7Lk
**Date:** 2015-09-09
**Duration:** 8:06

## Transcript

[00:00] hey everyone welcome back to another
[00:01] episode of bug Smashers U before we
[00:04] begin I have some good
[00:06] news hey everyone welcome back to
[00:08] another episode of bug Smashers um
[00:10] before we begin I got some good news I'm
[00:12] want to let you guys know that in this
[00:14] election I'm going to be running for a
[00:17] president of the United States you know
[00:19] I smashed the bugs in the games and I
[00:21] think it's time to smash the bugs in
[00:23] Congress we got it we got it
[00:30] bux
[00:31] [Music]
[00:33] bashes hey everyone we are here in my
[00:36] fun little test level again and we got a
[00:40] bug um that the
[00:43] thrusters on these little guys and the
[00:45] turrets aren't
[00:47] working and so what I'm going to do is I
[00:51] created a little flow graph I can show
[00:53] you
[00:54] guys got to move this over um whenever
[00:58] the AI pops in I put him directly into
[01:01] the seat and there's our little AI guy
[01:04] right here so when we hop in the game he
[01:07] should sit down so then he'll
[01:10] automatically use the turret but since
[01:11] there's no enemies around the turret
[01:13] won't move so what I'm going to do is go
[01:16] in the fancy Dancy code comment out the
[01:21] uh some the code that calculates where
[01:23] the vehicle TCH look because we want to
[01:25] do some debug and we're going to
[01:28] manually set the goal
[01:30] to always move just so we could debug
[01:33] this that way we could see if it's a
[01:36] gameplay issue or a something deeper so
[01:40] let's get the current
[01:44] angle and we'll add it by I know say an
[01:48] arbitrary speed of
[01:50] 10
[01:51] radians a
[01:56] second I can't hit space cuz it's too
[01:59] early in the morning there we
[02:02] go and so we're going to update the Y to
[02:05] go 10
[02:06] seconds around or 10 um not 10 seconds
[02:09] 10 radians around so let's tell recode
[02:12] to do its
[02:14] thing and if all one well this thing
[02:17] should start rotating around wait for
[02:19] recode wait for
[02:22] recode come on recode there go so recode
[02:24] popped up and we're gonna hop in the
[02:27] game and as you can see it's h asn't
[02:30] moving and our gu
[02:32] inside that's not good so lucky for you
[02:36] guys I was able to debug this problem
[02:39] and track it down to this bit of code
[02:43] before we get to there let's see what
[02:45] the turret's actually doing so the
[02:48] turret in this block of code is trying
[02:50] to find a new angle to where the turret
[02:52] should move to and if it finds
[02:56] that it updates the angle and and in
[03:01] this bit of code it will try
[03:04] to figure out where it should move so
[03:08] it's going to go all right here's where
[03:09] I'm going to
[03:11] go um based on the speed of the turret
[03:14] so the goal could be here and the turret
[03:15] could be here but um maybe it only moves
[03:19] so slowly or so fast and that's what
[03:21] this bit does so it sets the
[03:24] current um goal or current angles to
[03:28] snap to now
[03:31] all right so and this is the final bit
[03:33] of code that actually takes the angle um
[03:36] puts it in querian and then writes that
[03:38] information directly into the bone so we
[03:41] have the virtual angle and now we tell
[03:42] the bone the snap here and we tell the
[03:45] skeleton information to snap to this
[03:49] rotation um it's called postprocess qu
[03:52] uh set postprocess quat because after
[03:55] the thing has done animating if it has
[03:57] animations then we do the rotation
[04:01] and this bit of code makes sure that we
[04:04] actually do an update for at least one
[04:06] frame so even if we're not animating we
[04:08] want the skeleton to update that bone
[04:11] position at least for a
[04:13] frame and that's what these two lovely
[04:16] functions do and we eventually get to
[04:21] here the skeleton um process um so this
[04:25] will get called whenever we have
[04:26] animations or if we're doing an update
[04:29] so in this this case since we're doing a
[04:31] um force update for one
[04:33] frame this little bull will be true so
[04:38] the only other thing is um this will
[04:43] never be true so we'll never actually
[04:45] get into this block where we'll actually
[04:48] take our joint information which we have
[04:52] set um right here in the
[04:55] postprocess that's um basically this
[04:58] part right here and it never gets to
[05:00] this block so you never see the turret
[05:02] running because when we did an
[05:06] integration somehow this got mangled in
[05:09] where it's looking for facial
[05:13] morphs and if it doesn't have it it
[05:15] won't run this bit of code and since
[05:18] obviously our turret's not going to have
[05:19] facial morphs we need this bit of code
[05:22] to run at least of this part but this
[05:25] section we don't need so what I'm going
[05:27] to do is format this a little
[05:31] bit uh so if we have an animation
[05:33] playing or if we're
[05:35] forced then we will
[05:37] do um let's see we want to
[05:41] do an
[05:44] update we'll do has
[05:47] update so if we have a forced
[05:53] update oops we want
[05:56] zero then we write directly to the Bone
[06:05] and if we have facial
[06:15] information there we
[06:18] go then we'll also
[06:22] update so now this split of code works
[06:26] if we set um the post um quum
[06:30] or if there's facial information and
[06:32] then it will make sure to update if we
[06:34] have either one of these when we get
[06:35] into this block so
[06:39] hopefully I have no compile errors and
[06:42] once recode kicks
[06:45] in you should see the turret start
[06:47] spinning so let's wait for that turet oh
[06:50] there it goes so now we have it so we
[06:53] set the information um now the turret
[06:56] sends it to the skeleton the skeleton
[06:57] will do the proper update and this will
[07:00] also fix the the turrets that we have on
[07:03] the
[07:03] bottom
[07:05] voila rotate and let's remove our debug
[07:09] code because we don't want to commit
[07:12] this and there we go now we're all set
[07:15] for
[07:16] commit and the whole thing rotates
[07:19] turrets rotate and everything yay as you
[07:21] guys saw we had a little bit of an
[07:22] integration problem we hit a few of
[07:24] those once in a while and in this case
[07:27] um some new facial morphing stuff for
[07:30] the skeleton managed to mangle some old
[07:33] logic that allowed us to rotate Bones on
[07:36] demand uh it took a little bit to track
[07:38] down but once we had a little debug way
[07:41] of testing the turrets and all that fun
[07:44] uh I was able to track it down get it to
[07:46] go and as you saw everything works just
[07:48] as good hope you guys like that and
[07:50] remember vote for me

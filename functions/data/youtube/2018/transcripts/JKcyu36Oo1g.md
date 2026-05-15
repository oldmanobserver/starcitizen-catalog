# Star Citizen: Bugsmashers! - Temperamental Turret

**Video:** https://www.youtube.com/watch?v=JKcyu36Oo1g
**Date:** 2018-04-25
**Duration:** 8:46

## Transcript

[00:06] [Music]
[00:15] everyone welcome to bug smashers
[00:18] I'm your host mark a bit let's get
[00:19] smashing everyone we are here in my one
[00:27] little test mark level and we are
[00:30] looking at the hurricane today and we
[00:34] have a little bug that we got from tech
[00:37] design where as they're trying to set up
[00:39] this backend turret it's still a little
[00:41] bit incomplete but while working on
[00:44] setting this up they have a little I can
[00:48] get my zero-g hard to enter and turn
[00:53] that turret oh there goes as we enter
[00:58] this turret does some animation States
[01:00] as you can see it's still
[01:01] work-in-progress however we get to a
[01:03] point where the animation stops and I am
[01:06] fully well broken not a good fun thing
[01:12] what's happening here is we're trying to
[01:15] split up the states of the animation so
[01:16] that we could recycle a bunch of them
[01:18] throughout all other ships currently or
[01:22] legacy long long time ago reasons we
[01:24] have a interstate idle state exits take
[01:27] the interstate would basically be the
[01:29] Turk coming down you get in it it goes
[01:31] up and then your idle we since broke it
[01:34] down - now there's a deploy state from
[01:38] sorry retract state where the turret
[01:39] comes down then there's an interstate
[01:41] where you go in and then there's a
[01:43] retract where you goes up then you kind
[01:45] of select it in your idle handy-dandy
[01:47] and in this phase we successfully did
[01:50] the retract the enter the deploy
[01:55] actually we didn't even get to deploy as
[01:57] you can see we're stuck in the retract
[01:59] state it's infinitely just never
[02:01] finishing so we're never even getting to
[02:04] the Select phase we're just going up and
[02:06] stuck and what's happening here is in
[02:09] the actual code so we'll swap over to
[02:12] the Amaze
[02:13] code it kind of takes the player takes
[02:16] the seat and kind of enslaves them
[02:19] together so that they sync up their
[02:21] animations and in this particular area
[02:23] of the code it's waiting for the player
[02:26] to finish his animations before
[02:27] continuing on to the next state however
[02:31] the player continuously animate because
[02:35] he's looping so the codes not
[02:37] considering that he can loop forever
[02:39] it's like oh the seats done let's just
[02:41] wait for the player oh wait the players
[02:43] never gonna finish because he's in this
[02:44] looping animation in fact when you're in
[02:46] this retract the players kind of like in
[02:48] this little I'm waiting for the seek to
[02:50] go up but he's continuously doing that
[02:53] and well he never breaks out so we need
[02:55] to break him out of there so in this fun
[02:58] little update section we are going to
[03:00] check to see if we're in a looping
[03:02] animation if we are we need to basically
[03:05] go oh once the seats done we're done so
[03:09] we only care about this indeed let's
[03:12] copy this guy
[03:14] I can't copy there we go give up to
[03:20] deploy and in the retracts tape so
[03:25] anytime insert as with deploying or
[03:27] retracting we need to see if the
[03:31] animation is in a loop state on the
[03:33] actor so we have this bit of information
[03:38] in the seat stored in this thing called
[03:40] a scope slot there's bunch of scope
[03:42] slots there's the actor dashboard a
[03:46] vehicle and then there's two different
[03:48] ones for the actor cuz there's two
[03:49] different implementation but basically
[03:52] we just want to know about the synced
[03:54] actor so if we're in a synced actor and
[03:59] basically there is an animation for him
[04:02] let's see scope slot do we have an
[04:06] animation do we have an animation now
[04:11] we're going to check to see if that
[04:14] animation sub animation I should say
[04:18] this slave action is more than an
[04:22] animation it's it could be animation
[04:25] what
[04:25] and movement and it's a bunch of things
[04:29] on the one we consider an animation
[04:31] because most likely it is animation but
[04:33] it can be more things however from this
[04:36] action we need to actually get the
[04:38] animation if that's not confusing enough
[04:40] so we're gonna be like hey scope action
[04:43] tell me what your animation is so mister
[04:48] action let's get our scope due to to
[04:53] scope context so the scope context is
[04:56] kind of like and I guess how you'd say
[04:59] in Photoshop I have layers the root
[05:02] scope is the root layer the top-level
[05:04] layer that's playing so we want to get
[05:06] the top animation from that do get spa
[05:13] animation we're gonna get the top
[05:16] animation and we are technically looping
[05:20] if this double pointers never fun let's
[05:25] point to a pointer so we're just need
[05:27] one pointer we have an animation and
[05:31] this animation is loops then basically
[05:36] we need to set this boolean the true so
[05:42] now if we're deploying or retracting and
[05:45] the players in a looped animation we are
[05:47] going to basically run down here and go
[05:50] our current state is not finished we're
[05:54] still running code however we have
[05:57] finished and we're a looping animation
[06:01] so basically in this case it will be
[06:05] like yeah we're done it will traverse to
[06:10] the next state because actually this one
[06:17] so this first one will only run if the
[06:22] all the sub actions are done and we're
[06:26] not looping but if we are looping and
[06:28] we're finished then we continue on to
[06:31] the next layer so many ifs
[06:34] statement in the world so let's pick
[06:36] recode all right Rico's finished let's
[06:40] hop back in game and as you can see it
[06:43] finished he did the Select animation now
[06:45] he's an idol so if I leave he's playing
[06:54] all the animations let's do this in slow
[06:57] motion we'll scale everything half the
[06:59] speed enter magical turrets there we go
[07:06] magical turret is entering so we're
[07:09] gonna scale everything down dude linked
[07:13] we are in the retract state select state
[07:17] idle state and we're good to go now
[07:21] obviously this just sets up the states
[07:23] so that they Traverse correctly there's
[07:26] still a bit of work to get all the AI K
[07:28] and animation set up right for like the
[07:30] entering and all that but you get to see
[07:32] a good old work-in-progress and I hope
[07:34] you guys enjoyed so as you guys saw we
[07:36] had a fun little issue with the split-up
[07:38] animations where because the player was
[07:41] looping he was getting stuck in the
[07:42] retract states they just had to make up
[07:44] some code to basically say hey if the
[07:46] seat is finished the all the animations
[07:49] are there and the players in this
[07:50] looping animation during the retract and
[07:52] deploy state we consider it good to go
[07:55] and we could go to the next state so
[07:57] then the guys like I can grab onto my
[07:59] joystick and go and as you saw we still
[08:01] have this a little bit roughed out
[08:02] because it's a work in progress to get
[08:04] the hurricane there however now I could
[08:06] take what I have and pass it up to the
[08:07] designers and they can continue it on
[08:09] and hope you guys enjoy until next time
[08:14] you
[08:25] thanks for watching for the latest and
[08:27] greatest in star citizen squadron 42 you
[08:29] can subscribe to our Channel or you can
[08:31] check out some of the other shows and
[08:33] you can also head to our website at

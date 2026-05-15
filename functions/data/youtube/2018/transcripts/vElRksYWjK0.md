# Star Citizen: Bugsmashers! - Sticking the Landing Gear

**Video:** https://www.youtube.com/watch?v=vElRksYWjK0
**Date:** 2018-03-14
**Duration:** 10:12

## Transcript

[00:06] [Music]
[00:15] everyone welcome to bug smashers
[00:17] I'm your host Mark Abbott let's get
[00:19] smashing hey everyone we're here in my
[00:27] fun little test mark level and I'm gonna
[00:30] hop right in spawn into my fun little
[00:33] Gladius go to third person because I
[00:35] have well Alexia my ship and we're
[00:38] looking at a bug with the landing gear
[00:41] today specifically when if you open and
[00:43] close them a few times they just stopped
[00:46] working it takes a little bit for it to
[00:49] happen about two or three tries as it
[00:52] opened and closed we are going to look
[00:53] at the debug output of the landing gear
[00:57] to see what's going on so here we have
[01:00] the Gladius and this shows all the
[01:02] information from mannequin and you'll
[01:04] see landing gear letting your front
[01:06] letting your left letting go right and
[01:08] the green little letters that say
[01:10] planning your compress the landing gear
[01:13] is out right now so it's playing the
[01:14] compress animation so when I hit the
[01:16] surface it will react to the ground and
[01:19] go up and down and if I deploy you'll
[01:22] see that it plays a bunch of animation
[01:24] and sounds indicate it's deploying and
[01:25] retracting so it looks like it's working
[01:28] correctly from here and still deploying
[01:32] cool still not broken let's see if this
[01:35] breaks it ah we broke it so now it's
[01:40] trying to extend as you can see and it
[01:42] snapped and then it and the animations
[01:47] is all sorts of funky right now and of
[01:50] course we have the broken state well
[01:52] unfortunately mannequin is indicating
[01:55] that some it's trying to do it which
[01:58] means this is happening at a deeper
[02:01] level mannequin is on so you have the
[02:03] game code side then you have mannequin
[02:05] and then you've got to go one higher
[02:07] which is the animation
[02:09] system so I'm going to turn off the
[02:12] mannequin debug and I have another C of
[02:16] R here that allows us display all the
[02:19] animations presently playing and very
[02:22] back in the animation system and as you
[02:25] can see here all in pink there's like
[02:29] the first few floors should say number
[02:32] the first three up in here have one two
[02:35] three four five six seven animations on
[02:38] each of them so each of the landing gear
[02:40] trying to play seven animations and what
[02:43] this tells me is the animations are
[02:45] never getting cleared from the animation
[02:48] system which is a huge problem so if I
[02:50] pop back in spawn to a lettuce you'll
[02:56] see that all three landing gears on the
[02:59] top are playing landing gear extracted
[03:01] animation as soon as I opened it up it
[03:04] should have cleared that old extended
[03:06] one and it's playing another one so the
[03:08] animations are playing on top of each
[03:09] other and that's why we're seeing the
[03:11] snap because eventually they build up
[03:13] and build up and it can't overcome and
[03:16] they kind of override each other and
[03:17] things just go mayhem
[03:20] so let's pop into the code so here's our
[03:22] landing system this is the game code
[03:25] representation of opening and extracting
[03:27] and unfortunately the bug isn't
[03:29] happening in here but this was the first
[03:31] point of contact to see what's happening
[03:33] and the landing gear the way that
[03:36] they're devised is you have the ship and
[03:37] the landing gear underneath it so we
[03:40] process our animations we go ship level
[03:42] then the detachments which is the
[03:44] landing gear and so when our ship wants
[03:48] to process the attachments the landing
[03:52] gear will call this bit of code right in
[03:55] this section to finish its animation so
[03:57] the vehicle will animate then a landing
[03:59] it will animate so if I put a breakpoint
[04:02] right here don't hop back into the game
[04:06] spawn to Gladius we're gonna hit this a
[04:09] few times let me disable it
[04:12] hmm go back to awesome third person and
[04:17] now I'm going to put a breakpoint back
[04:18] in here now what's supposed to happen in
[04:21] here is the landing gear will come in
[04:23] here it will finish off the animations
[04:26] and then call this finished animation
[04:28] computation which should then run a
[04:31] bunch of information in here to sync the
[04:33] physics of the landing gear up and to
[04:36] basically clear out all the old
[04:38] animations that were getting hit so
[04:42] we're gonna get called a few times so
[04:45] let's do something interesting we're
[04:49] gonna put a breakpoint right here
[04:52] breakpoints are awesome because I have a
[04:58] suspicion when we get into here our
[05:02] landing gear isn't clearing the
[05:04] animation and because of that it must
[05:07] not be getting past this point hence I'm
[05:10] gonna install a debug break to get this
[05:13] reaction to see what's happening let's
[05:15] let recode continue on so I added that
[05:21] debug break and as you can see my
[05:23] suspicion was true we're hitting this
[05:25] almost immediately and the landing gear
[05:28] just started coming up so what is
[05:33] happening here obviously our animation
[05:35] got told it was done before we could
[05:37] even finish because let me close this
[05:41] this parts not supposed to occur until
[05:44] we finish this bit and we're obviously
[05:47] getting out a little bit early now if we
[05:49] go back to this process attachment
[05:51] you'll notice here when we call finished
[05:54] computation we actually go into here we
[05:58] actually called the second bit and this
[06:02] gets set where are you
[06:08] did you so this gets set when we first
[06:10] start the animation so here it is so if
[06:15] we wanted to play the deploy we'll say
[06:16] that we're going to start up which means
[06:20] when we got to here something has told
[06:22] to end now during normal passes of
[06:24] operation this will this call right here
[06:28] will finish the animation at which point
[06:31] to do where are you
[06:36] it will synchronize the thread finish
[06:38] off and then say it was done which means
[06:42] that go back go back go back
[06:45] gotta go back back which means we have
[06:49] finished before we even finished if we
[06:52] go back into the process attachment
[06:53] you'll notice here there's a bunch of
[06:57] code that kind of does some extra bit of
[07:01] work that's not necessary
[07:03] so all this bit right here is trying to
[07:05] finish the animation thread and then get
[07:09] into a state where it's done however
[07:11] it's unnecessary because that's exactly
[07:15] what this guy is doing so we're
[07:17] essentially doing the pre-work before
[07:20] the actual animation stuff is able to
[07:22] finish it's some leftover code from back
[07:25] in the day before we you know we
[07:28] optimized all of this section so the
[07:31] reality is and the fun part of this is
[07:33] to basically go well we don't need this
[07:35] anymore because finished animation
[07:37] computation we'll do it all in here
[07:40] we're going to synchronize the animation
[07:42] hookup all the bone positions and then
[07:45] say that we're done so and the character
[07:50] process attachment we just let it do its
[07:52] job and I'm gonna recode and to recap
[07:56] the vehicle will animate it will tell
[07:58] all of its children including the
[08:00] landing gear to also animate it'll go
[08:02] into this process attachment once the
[08:05] animation is done it's supposed to
[08:07] finish call this finished animation
[08:09] computation which cleans up all the
[08:11] animation backend stuff to make sure the
[08:13] threads are synched up and the animation
[08:14] is well completed unfortunately we had
[08:17] some leftover code from back in the day
[08:19] which did that
[08:21] top of the new way and so we finished
[08:25] all the animation computation did all
[08:26] the bones and all that stuff movements
[08:28] and then when we got into the actual new
[08:32] way of doing it where we need to finish
[08:35] off the enemy computation then clear off
[08:38] the existing animations it would never
[08:40] get here and of course the easiest way
[08:42] is just remove the old way let the new
[08:44] way happen hit recode and see what
[08:46] happens so let's see what happens all
[08:49] right we're back in the game I'm going
[08:51] to refresh a new ship baby my infamous
[08:56] fun Gladius and now when we open into
[09:00] play it's playing the extended animation
[09:03] which is good and the extent is gone and
[09:06] that we have just the compress let's go
[09:08] back and it there so now all of these
[09:12] sub attachments we'll make sure to clear
[09:14] all the animations and everything is
[09:16] good hope you guys enjoyed as you guys
[09:18] saw we had a fun little issue with the
[09:20] animations just never getting cleared
[09:22] from the landing gear and as a result
[09:25] when we try to push new ones on there it
[09:26] just wouldn't happen and then our
[09:28] landing gear we get stuck and all hell
[09:30] would break loose well we had to make
[09:32] sure that all the animations got away
[09:34] and then everything was good to go I
[09:35] hope you guys enjoyed until next time
[09:40] you
[09:44] [Music]
[09:51] thanks for watching for the latest and
[09:53] greatest in star citizen squadron 42 you
[09:55] can subscribe to our Channel or you can
[09:57] check out some of the other shows and
[09:59] you can also head to our website at
[10:03] www.uvu.edu/library

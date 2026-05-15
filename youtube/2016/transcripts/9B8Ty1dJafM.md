# Star Citizen: Bugsmashers - Episode 37

**Video:** https://www.youtube.com/watch?v=9B8Ty1dJafM
**Date:** 2016-11-23
**Duration:** 8:36

## Transcript

[00:06] [Music]
[00:16] hey everyone welcome to bug Smashers my
[00:18] name is Mark aent I'm gameplay
[00:20] programmer here at Cloud Imperium games
[00:22] Los Angeles and if you guys never seen
[00:24] this before it's pretty cool I take you
[00:26] behind the scenes of some fancy bugs
[00:28] that disrupt you know your guys'
[00:30] playtime and even some designers or even
[00:32] our stuff and you know it's pretty cool
[00:35] to see what happens and why and I give
[00:38] you a quick breakdown of what's
[00:39] happening and the fix well hope you guys
[00:42] enjoy let's take a
[00:47] look box
[00:49] [Music]
[00:51] bashes hey everyone we're here in my
[00:53] fancy dance test level and Bob here is
[00:56] annoying me so I'm going to get rid of
[00:57] him goodbye Bob all right so we're here
[01:00] to test out a fun crash bug when certain
[01:03] entities get destroyed um if Bob goes
[01:05] away he may crash but to speed up this
[01:08] process we are going to
[01:09] spawn fun
[01:12] constellation
[01:15] constellation I'm going to shoot the
[01:16] crap out of it and hopefully we can get
[01:19] a crash that QA was reporting so
[01:22] apparently uh with this bug when you
[01:26] destroy and delete things we're getting
[01:28] a crash with some corrupt memory so
[01:30] let's see if we could replicate that
[01:32] everything is
[01:34] [Music]
[01:35] dancing ah and crash
[01:39] excellent so what's happening here well
[01:42] uh when we try to remove these entities
[01:45] uh we get this thing called an event
[01:46] done and this gets dispatched to all
[01:49] sorts of systems to say hey clean up
[01:51] we're about to delete this entity and
[01:53] unfortunately there's some kind of
[01:55] memory corruption happening because um
[01:58] in this particular area it's supposed to
[02:00] stream out what uh I put some debug code
[02:03] in here to see what's actually getting
[02:06] deleted and unfortunately the
[02:08] information we're getting out of this is
[02:10] just pure garbage um what's happening
[02:14] after some intense fun debugging uh we
[02:18] have two competing systems Racing for um
[02:21] the event done listening we have this
[02:23] thing called an item Port which is uh if
[02:26] I have keys I could attach the item or I
[02:29] should say these Keys onto the ship and
[02:31] the ship could fly away and it has keys
[02:33] or guns or whatever and we have this
[02:36] thing called a physics controller so
[02:38] when this Keys um goes onto the item
[02:40] Port it will lose its physics but then
[02:43] physicalize onto the ship basically the
[02:46] physics become one with the ship so when
[02:48] the ship gets hit we know which item
[02:51] gets hit it's some clever
[02:53] magic and unfortunately when they both
[02:56] register for this event done um
[02:59] depending on the order of which these
[03:01] components were created the physics
[03:03] controller may get it first or the item
[03:05] Port controller gets it first and if the
[03:07] itm port controller gets it first it
[03:09] will actually uh detach these keys and
[03:12] say all right you're done and the
[03:14] physics controller will then get
[03:16] informed that these Keys have been
[03:18] detached so it should basically now own
[03:21] its own physics um but if the physical
[03:25] controller gets it first it will DET it
[03:28] will think is detached and then it will
[03:31] physicalize itself so now it has physics
[03:35] on the ship and it has physics on itself
[03:38] but
[03:39] unfortunately um it only is aware of one
[03:42] at a time so it gets rid of the one on
[03:45] the ship but the ship still thinks it
[03:47] has it and this is where the issue lies
[03:49] so the now this thing has its own
[03:51] physics and it still attached and when
[03:54] the item Port gets the event it tells it
[03:56] to detach and ref physicalize but the
[03:59] ship still thinks it has the ownership
[04:01] of the physics so it now tries to clean
[04:04] up to rebuild it and since it's now
[04:07] pointing to an old point in memory it
[04:10] will touch and corrupt anything and that
[04:12] was in that memory position and then
[04:15] things just go Haywire you start
[04:16] crashing in random
[04:18] positions so the correct fix is actually
[04:22] to get rid of um the events listener we
[04:25] don't really need for the physics
[04:27] controller to listen for these events
[04:29] because we have the item Port system to
[04:31] do it for us this was just an extra set
[04:33] of precaution that we don't really need
[04:36] in fact it's causing a lot of harm so
[04:38] this is one of those simple cases where
[04:41] um extra safety actually caused us harm
[04:43] since we don't really need it so the fix
[04:46] is actually just to gut out the um the
[04:50] system so it doesn't listen for those
[04:52] and instead it listens it gets told by
[04:55] the ad and Port system so I'm going to
[04:57] gut all the location where it registers
[05:03] itself and then clean up the listener
[05:08] set oh there we go goodbye
[05:14] listeners
[05:17] and there it
[05:26] is there it is so as you can see if the
[05:30] physics got it first it would pretend
[05:32] that it was released even though it was
[05:34] still attached it was just the safety
[05:36] measure in case the item Port system was
[05:40] um not reliable but item Port system is
[05:43] reliable uh so we could just get this
[05:45] old Cod path all right let's rebuild and
[05:49] through the magic of editing we be done
[05:52] now so we're back in the fun little
[05:54] level Bob's twitching out so let's take
[05:57] care of his misery and made ship go boom
[06:01] excellent ah game design so we're now
[06:04] going to
[06:05] spawn uh that fun
[06:08] constellation and let's see if we
[06:10] crash where is it spawning there you are
[06:14] where'd it go there you are he moved so
[06:18] let's shoot this thing and before you
[06:21] say the pistol is destroying every
[06:23] single thing I may have a developer gun
[06:25] that lets me destroy things oh that
[06:28] looks awesome all when this thing goes
[06:31] away that should be the vehicle it
[06:32] shouldn't crash hey it didn't
[06:35] crashh so um thanks to my little debug
[06:38] you could see um when that event got
[06:40] dispatched the radar the Su flow graph
[06:44] and physics uh that's kythera all got
[06:48] information that's not physics
[06:49] controller just yeah labeled differently
[06:52] so everything cleaned up heck we even
[06:54] got the item Port stuff there so a
[06:56] couple thing got item ports so now when
[06:58] the item Port gets the message it will
[07:01] detach the thing the physics controller
[07:03] will learn about it and then it will
[07:06] send it off and everyone goes off their
[07:09] merry way no more memory corruption no
[07:12] more crashes everyone's having a good
[07:14] time now we can play without getting
[07:17] disconnected from a crash woo hope you
[07:20] guys enjoyed so we had a very exciting
[07:23] bug uh you know when you're in
[07:25] multiplayer and you shoot some random
[07:27] thing when the entity goes away boom
[07:29] crash now your game's gone and you have
[07:32] to restart all over to play again not
[07:34] too fun so took a quick look at it and
[07:37] it was just an issue with the physics
[07:39] control trying to do an extra step of
[07:41] protection uh we had that in there
[07:43] originally because our component system
[07:45] wasn't as robust as when it was
[07:47] originally imp implemented many many
[07:50] many months ago but now we have a much
[07:52] more robust system so the flow and
[07:55] expectations of when things could happen
[07:57] are more reliable so didn't need that
[08:00] extra step of protection now we don't
[08:02] have that memory corruption everything
[08:04] now works as expected no more crashes
[08:06] everyone's good to go hope you guys
[08:08] enjoyed and remember praise be the lamp
[08:13] thank you for watching so if you want to
[08:14] keep up with the latest and greatest and
[08:16] Star Citizen of Squadron 42's
[08:17] development please follow us on our
[08:19] social media channels see you
[08:28] soon

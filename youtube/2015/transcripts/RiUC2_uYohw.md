# Bugsmashers! Episode 17

**Video:** https://www.youtube.com/watch?v=RiUC2_uYohw
**Date:** 2015-12-24
**Duration:** 9:13

## Transcript

[00:00] hey everyone welcome back to an all new
[00:02] exciting episode of bug Smashers uh
[00:04] before we
[00:05] begin you know what's happening this
[00:07] week is going to have an awesome new
[00:09] sequel I know I've been waiting a while
[00:12] for it I know you guys have been too
[00:14] it's going to be some amazing stuff
[00:16] coming up this Friday oh yeah some
[00:19] family drama some action a little bit of
[00:22] Darkness probably but you know what
[00:25] we've been waiting this for a while I'm
[00:28] I'm ready for that emotional road trip
[00:30] are you cuz I know I'm ready for those
[00:32] little chipmunks oh yeah you know what
[00:34] I'm talking about Alvin and the
[00:36] Chipmunks for the road trip oh oh we got
[00:40] it oh hope you guys see it let's
[00:46] begin bug
[00:48] [Music]
[00:50] bishes hey everyone I'm here to show you
[00:53] some bugs that we have fixed for 2.0
[00:56] thanks to you guys submitting those
[00:57] awesome bug reports so I have couple
[01:00] bugs here I'm going to show you um what
[01:02] they were and how they were fixed so
[01:04] this guy is um the Quantum Drive um I'm
[01:08] sure you guys have seen the video if not
[01:11] um there's a video going around where uh
[01:13] some guy was in I think it was a
[01:15] constellation and there was a space
[01:17] station and he was right here he spooled
[01:20] up his Quantum Drive went into the
[01:23] station and then it de um spooled and
[01:27] then now he was stuck inside and it was
[01:29] kind of like wigg wiling around cuzz
[01:30] physics was like oh my God I'm
[01:32] penetrating an object and then he slowly
[01:34] got released out so um Craig in the UK
[01:38] he wrote uh the quantum drive system so
[01:40] he was like hm that's not right what's
[01:44] going on so um apparently um the code
[01:49] that he's written and he actually did
[01:50] this fix uh he would actually do a trace
[01:53] to make sure that you're not doing uh
[01:56] you're not you're not going to hit
[01:57] anything but there was a moment in a
[02:00] time when uh it was called the spooling
[02:02] up phase that he wouldn't actually do a
[02:05] ray trace and it was during that time
[02:07] since it didn't do a trace it allowed
[02:09] you to for a moment go into that object
[02:12] until it went oh my God you're in
[02:14] something abort but by then it was too
[02:16] late so what Craig did is he basically
[02:20] added a ray Trace in the spool up phase
[02:23] so if you try to spool up and there's an
[02:25] object in the way it's going to be like
[02:26] whoa whoa whoa no
[02:30] and he also um increased the maximum Ray
[02:33] casting so that it's based before it was
[02:36] based on your maximum speed but for
[02:38] sanity and safety checks he also
[02:40] increased um it based on I think he said
[02:43] yeah right here 3.5 km so it will do an
[02:46] extra check even if your ship is a
[02:48] little bit slow just to make sure that
[02:50] you're not going to penetrate an object
[02:52] so go Craig all right next one save this
[02:58] bad boy
[03:02] [Music]
[03:03] should I keep going all right I got a
[03:06] moment so uh this next crash is our
[03:10] local data store um this is basically
[03:13] our code that was written by uh Paul
[03:17] where it figures out all the items that
[03:19] you currently have from like your hanger
[03:20] when you move stuff around and then when
[03:23] you join a game this bad boy will
[03:26] basically go okay you have all these
[03:28] items spawn them stuff and then if your
[03:31] ship dies it will actually hit this um
[03:34] little block and it tries to clean up
[03:36] all the items so if you spawned in with
[03:38] a hornet with a couple Gatling guns and
[03:40] the ship dies at the moment it it will
[03:43] remove all those items so they're not
[03:45] just left into the world and
[03:47] unfortunately there was a small U boo
[03:49] boo where you heard me right Boo Boo
[03:53] where uh this list would actually erase
[03:57] the item and then access it so we would
[04:01] delete the item and then access and then
[04:05] crash um
[04:07] unfortunately that sucks so um what Rob
[04:11] Johnson UK did was like hm that should
[04:13] not happen we should access it then
[04:16] delete so that was the simple fix and
[04:20] now when we delete items it won't crash
[04:23] the server
[04:24] randomly all
[04:28] right and we have another fix by um Rob
[04:32] Johnson and this is deals with the man
[04:34] turrets or the constellation turrets or
[04:37] the uh Retaliator turrets uh when you
[04:40] get inside you'll notice sometimes on
[04:43] certain angles uh your ship will rotate
[04:46] or or I'm sorry not your ship your
[04:48] turret will rotate a little bit weird
[04:51] that's because of this little math right
[04:53] here where
[04:56] um it was believed at the time that we
[05:00] would rotate from 0 to 360 but in
[05:03] reality we're actually doing um 180
[05:07] negative 180 so if this little code was
[05:10] the original 360 we were trying to say
[05:13] all right if we're here snap the CH
[05:15] instantly this way instead of doing full
[05:18] rotation since we're just um doing a
[05:21] little bit of turn but because we're
[05:23] doing 180 to 180 this little bit of code
[05:26] will actually cause some bad Jitter
[05:30] and since we're doing a little bit you
[05:31] know 180 difference um we have to do a
[05:35] different trick and that's what Rob did
[05:37] here so instead of you know going back
[05:39] to zero we just if we're on this side
[05:43] but the goal's here we don't want to go
[05:44] all the way this way we want to go back
[05:47] here so we do a little bit of math to
[05:50] say all right if we're here but the
[05:52] goals here just go this and so it's a
[05:55] nice little smooth
[05:57] blend so that one's done next one
[06:01] one all right so we have um this vehicle
[06:05] destruction and what happens is when you
[06:07] die um you know by hitting alt backspace
[06:11] um it causes an explosion and basically
[06:13] your ship goes into
[06:18] bits we'll do it in increments and then
[06:22] edit
[06:22] [Laughter]
[06:24] it I think there's going to be moments
[06:26] when he stops look
[06:30] just comment on it yeah and so Dam and
[06:35] so what happens is um because we're a
[06:38] random um explosion type The Shield is
[06:43] actually taking the explosion absorbing
[06:46] it and not actually causing damage to
[06:48] the ship which I thought was pretty
[06:50] funny so um what I had to do was set the
[06:54] damage type to vehicle destruction so
[06:56] that the vehicle code knows that when
[06:58] this happens we're destroying the
[07:00] vehicle and do not do anything to the
[07:02] shield and then for another sanity check
[07:06] um this little bit of code will say
[07:08] should I process the shield well if I'm
[07:10] Splash damaged which is explosive radius
[07:13] damage and I am not the vehicle
[07:15] destruction do not do a shield unless
[07:18] I'm a direct hit to the shield so now
[07:20] when I do self-destruct the The Shield
[07:23] won't absorb anything and the vehicle
[07:26] will just
[07:27] go as expected uh that was a little
[07:30] funny boo boo uh because um I think it
[07:32] was on the cutless black uh the
[07:35] designers increased the shields quite a
[07:37] bit and it just absorbed all of the
[07:40] destruction damage I thought that was a
[07:42] little fun um and there you have it all
[07:47] right so hope you guys enjoyed this
[07:48] week's episode of Bug
[07:52] Smasher just do it all right
[07:57] no hope you guys enjoyed this week's
[07:59] episode of bug Smashers I'm sorry for
[08:02] the noise as you can tell we're doing
[08:04] construction still in the new office um
[08:07] we're still smashing those bugs for
[08:09] 2.0 uh thanks to you guys you know
[08:11] submitting those bugs we've been trying
[08:13] to pick out which ones hurt your play
[08:15] experience you know crashes or maybe
[08:18] someone's exploiting you know trying to
[08:20] narrow down what makes the game unfun to
[08:23] make it fun um hope you guys enjoyed and
[08:27] in case you guys can't see you know that
[08:29] awesome movie album in the
[08:31] Chipmunks well as Harry Potter once said
[08:35] May the force be with
[08:37] you this video made possible by the ICC
[08:40] Stellar surveyors and subscribers like
[08:43] [Music]
[08:51] [Applause]
[08:58] you for

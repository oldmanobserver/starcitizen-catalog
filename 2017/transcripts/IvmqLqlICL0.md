# STAR CITIZEN: Bugsmashers - Two Weapon Issues

**Video:** https://www.youtube.com/watch?v=IvmqLqlICL0
**Date:** 2017-10-25
**Duration:** 12:58

## Transcript

[00:06] [Music]
[00:15] everyone welcome to bug smashers not
[00:18] slashers smashers this week we have some
[00:20] technical art shenanigan that's where
[00:23] now we have a little code little XML who
[00:25] assets kind of squeezing them together
[00:27] get that fun gameplay and sometimes
[00:30] things just explode and go bonkers so we
[00:33] have autry take and look at it from
[00:35] Frankfurt and let's see what he has to
[00:36] show us hey I'm 1/3 the way and I'm
[00:46] senior technical artist and today we are
[00:48] gonna fix two bucks one is on a Content
[00:51] side and second one is on a performance
[00:53] side first one about QA people have sent
[01:00] us but let me show you what that bug is
[01:05] all about that is more about as soon as
[01:09] we are reloading or something at the
[01:11] time of a compensator over here which we
[01:14] are attaching that is slightly getting
[01:18] offset it's a very minor kind of problem
[01:24] c1 this frame you if you can wash it is
[01:27] exactly attached with the weapon but as
[01:33] soon as we are just moving with the
[01:39] reload at the time it just pops slightly
[01:42] up so we want to fix that by look of it
[01:45] I can say that it is more on a Content
[01:48] there are two possibilities either it is
[01:52] content or it is more on edit meant
[01:56] attachment lagging so normally we
[02:01] combine your weapon with a complete
[02:04] structure and I will show you where
[02:06] exactly we are attaching a compensator
[02:11] today our character tool is slightly
[02:14] slow in today's bill it should be faster
[02:18] yeah so this is a patr and all these
[02:24] blue boxes are actually attachment
[02:27] helpers where we are attaching any kind
[02:30] of magazine or 80s views or compensator
[02:36] compensator actually gets attached over
[02:38] here and that is on a weapon thumb joint
[02:43] so if we can actually want to visualize
[02:47] that thing so this is a for the sight
[02:51] attachment and on a muscle flash weapon
[02:55] term joint this is the one where we are
[02:59] actually attaching compensator so I look
[03:06] up for it let's see if you are getting
[03:09] any kind of problem on animation side so
[03:15] if you are firing at the time it stays
[03:19] exactly the same way on a bolt also it's
[03:22] the same this one is same problem I have
[03:26] noticed that was coming from the reload
[03:28] so as soon as let me play the reload
[03:30] animation at the time what is happening
[03:33] yeah so if you can have noticed that it
[03:36] slightly popped out second burns in the
[03:40] fire it is right over there
[03:42] and reload is slightly both this side so
[03:47] that is actually causing two compensator
[03:51] to move out solution could be we can
[03:56] just go in and we export this animations
[04:00] where it can actually stay exactly the
[04:05] same position with all the animation so
[04:09] let's go and export the animation
[04:18] so we did that and we will just check it
[04:32] on engine okay so let's see whether that
[04:40] fixed anything so we have hot reloaded
[04:44] compress the new animation files also so
[04:48] let's see so far st. that's more the
[04:53] same reload wise it is exactly at the
[04:57] same position this one is exactly at the
[05:00] same position Mac check is also and
[05:02] exactly the same position so now we can
[05:09] actually check it with the real entity
[05:14] let me equip it it it all button
[05:23] so 3p let's say far something so it's
[05:28] still the same BAE
[05:33] [Applause]
[05:37] let me captain magazine so feels like
[05:51] after reload still it stays exactly the
[05:54] same position that it's supposed to so
[05:58] that's how we fix the bar second bug is
[06:03] more on a performance side and I will
[06:06] show you what exactly it is giving a
[06:08] certain kind of errors and that's more
[06:12] on physic so we are getting certain kind
[06:14] of error reports and our error is more
[06:17] related to unwell it surface type for
[06:22] physical ideation wise with about all
[06:25] the weapons so what exactly so physics
[06:32] wise we have added physics to the
[06:37] weapons we can visualize that thing
[06:46] withdrawing the helpers have one command
[07:01] what
[07:06] okay
[07:15] draw helpers so these are the actually
[07:27] Felix over there and it is important for
[07:34] our weapons
[07:35] so whenever player actually drop the
[07:38] weapon it can actually electrolyze with
[07:42] that thing so so it it can drop
[07:44] something this way and it can collide
[07:49] with a flow so that's why we are using
[07:51] the physics over there but as per the
[07:54] technical requirement why's this physics
[07:57] could also be used for different kind of
[08:01] the surfaces for example let me turn off
[08:08] the helpers okay so so as soon as we are
[08:25] actually shooting to a different kind of
[08:27] physical surfaces it actually creates a
[08:30] different kind of effect towards it so
[08:32] if it's a contract concrete it's gonna
[08:35] give a concrete concrete particles
[08:37] towards it if it's a metal so it's gonna
[08:40] behave like a metal or something before
[08:43] weapons as I have shown earlier we are
[08:46] just using for the ragdoll and we do not
[08:48] require any special type of a surface
[08:51] and now we are defining that surface
[08:56] with a material so let's check what is
[09:01] exactly the material for it
[09:07] so now FPS weapons so let's go with a
[09:15] par special and this is its material so
[09:21] in proxy mats proxy material which is
[09:24] exactly giving the physics stuff so what
[09:26] they we can see that our surface type is
[09:30] not defined and that's why it's causing
[09:32] this issue so we can just define it well
[09:37] whatever we want say if it's a carpet or
[09:39] ceramic or anything which we can give so
[09:43] according to that it can all the
[09:46] interaction could happen with that but
[09:49] for this one as I said it's only for the
[09:52] ragdoll so we just need to define not
[09:56] raw surface type let me just write over
[10:00] there
[10:01] so that should fix it same way we can
[10:07] just go and save that item so that's how
[10:14] that could be fixed and we will check it
[10:16] whether that fixed or not but as you can
[10:20] see there are lots of material for
[10:22] almost all our weapons and none of them
[10:26] have a surface type defined and that is
[10:30] causing completely performance issue for
[10:33] us so it is as I know as it wise it's
[10:38] more like three or four hundred thirty
[10:40] or something I can't keep going and
[10:43] manually edit this thing so bust no
[10:49] write a script and this is a script
[10:52] which will go in and change all the
[10:56] shader type for almost all over four
[10:59] hundred and thirty files so it's keep
[11:03] going and just rewriting all the
[11:06] material file for us all right so let's
[11:10] reopen there were weapon test map
[11:16] and this time if we are successful then
[11:20] we are not gonna get any kind of spam on
[11:22] physics side all right so we don't have
[11:29] any physic errors we are good to go and
[11:36] say maybe we can check that thing on
[11:39] editor also so we can't find it that's
[11:48] how we fix the Box further performance
[11:50] also so watch we had some fun little
[11:53] bugs there performance issue because
[11:55] well console spamming a bunch because we
[11:59] have this surface thing where my hand is
[12:01] the surface ID and I shoot it and it's
[12:03] not set up for anything it's just called
[12:05] black so we have to make sure that we
[12:07] define what that surface is so when we
[12:08] shoot it there's no spam and that cut
[12:11] down a lot of you know spam the log
[12:13] increases that little performance when
[12:14] you first join in big win then that
[12:17] other little bug was a small little
[12:19] thing where the animation kind of offset
[12:21] the bone so when you're reloading it
[12:23] moved it up just enough to go that's not
[12:25] quite right he fixed up the bone Rick's
[12:28] where the animations always well hope
[12:31] you guys enjoyed this week's bug
[12:32] smashers until next time thank you thank
[12:35] you for watching so if you want to keep
[12:37] up with the latest and greatest in star
[12:38] citizen and squadron 42 development
[12:40] please follow us on our social media
[12:41] channels see you soon

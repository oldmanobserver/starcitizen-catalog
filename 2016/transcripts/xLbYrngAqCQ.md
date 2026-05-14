# Star Citizen: Bugsmashers - Episode 28

**Video:** https://www.youtube.com/watch?v=xLbYrngAqCQ
**Date:** 2016-07-13
**Duration:** 7:08

## Transcript

[00:07] [Music]
[00:09] Hey everyone, welcome to Bug Smashers.
[00:11] Today we're going on the other side, the
[00:13] right side.
[00:20] Bug Smashers.
[00:24] Hey everyone, we are here in the awesome
[00:27] test level again and I have down that
[00:31] hornet from last week which we're using
[00:32] to test out the new item system and it
[00:35] has some fun little red balls because
[00:37] well things break. But that's actually
[00:41] some of the items. I think that's the
[00:43] shield and that's the cooler. So let's
[00:46] plop down.
[00:48] And
[00:50] unlike last time where I had a little
[00:51] debug text on the top, we're now using
[00:53] uh the inner thought system. Um, and
[00:57] this bug is when I get inside my
[01:00] weapons, which you can
[01:03] you can see on the player actually are
[01:06] still visible and clipping through
[01:07] geometry. So, um, what the animation
[01:12] guys wanted was a way to turn on and off
[01:15] at least the models. So when you plop in
[01:17] the game, your models basically just
[01:20] vanish and then when you get back out,
[01:22] they appear again. So
[01:26] let's turn off the free cam and let's
[01:29] enter the seat, see what it looks like
[01:32] with the models.
[01:37] So as my guy climbs up, you can see the
[01:39] guns are right on them. They clip
[01:42] through everything and
[01:45] the clip through his hands and his legs.
[01:50] All right.
[01:52] So if we leave the game
[01:55] um
[01:58] pop into the code. So what I have done
[02:03] is I created this um new bit of code
[02:06] called a proc clip. And what it does is
[02:09] allows the animators to basically
[02:11] specify if something should be shown,
[02:13] hidden, or just keep the state as it is.
[02:16] And if they're playing an animation, we
[02:18] have a enter and a um exit state. So if
[02:23] we're playing an animation and we enter
[02:25] it, we may want to hide the weapon, but
[02:27] not necessarily show it again after the
[02:30] animation is done because we may have
[02:31] another set of animations. So then
[02:35] whenever the animation plays to show the
[02:38] the weapon then they could set it
[02:40] accordingly. So what I did in my test is
[02:44] anytime I play the idle animation which
[02:47] is right here.
[02:50] Uh, it plays all this fun little anim
[02:52] animations for like GeForces and look
[02:55] iike and it will actually play this um
[02:58] procedural clip which will when the
[03:00] animation plays it will hide our weapons
[03:03] and when it when we leave the exit it'll
[03:05] show the weapons. But again animators
[03:08] could if they want to get rid of this
[03:12] and change it any which way. So, you
[03:14] know, as you're climbing up in the
[03:15] enter, it hides it. And then when you
[03:17] sit down, it's still hidden. And then
[03:19] when you get out of your seat during
[03:21] some animation, it plays.
[03:25] So, uh, so these are the the params. So,
[03:29] basically, all this fancy dancy stuff
[03:32] right here gets set up in this spot. And
[03:35] then this is the actual procedural
[03:39] uh clip. And as you can see, when we
[03:41] enter, we set our states and we update
[03:44] the weapon visibility when we both enter
[03:46] and exit. And what we do is if depending
[03:49] upon if we show or hide, we tell the
[03:52] player suit manager, hey, we want to
[03:54] hide our weapons. And what this guy does
[03:57] in the player suit manager, it actually
[03:59] goes through all the item ports that we
[04:02] have. And if they're weapons or gizmos,
[04:06] it will basically hide all the ports and
[04:09] any subports. All your magazines, your
[04:12] extended attachments will be hidden. And
[04:15] then once this gets triggered again,
[04:17] we'll make all that visible. So, uh,
[04:20] before I had this code disabled to show
[04:22] you guys what it was before, and now I
[04:25] reenable it and recode everything.
[04:29] Uh, recode.
[04:31] Recode. Awesome.
[04:38] Ah, and recode finished. So, if we plop
[04:41] down in the game,
[04:45] open up our ladder, open up our canopy,
[04:48] and of course, just for a sneak peek,
[04:50] you don't have to do just one. You could
[04:53] actually hold F and select some other
[04:55] interactions. So, I could actually open
[04:57] up uh the co-pilot canopy. All right.
[05:00] So, let's enter quickly. Turn in our
[05:03] free cam.
[05:05] And as you can see, our weapons there.
[05:07] And then as soon as we play the idle
[05:09] animation, poof, it's gone.
[05:12] And then
[05:14] I turn off free cam.
[05:17] We'll disable
[05:19] wrong thing. We'll leave the seat.
[05:23] And what do you know? Our weapons are
[05:25] back clipping through everything. So, of
[05:27] course, they have to get tuned.
[05:30] and I hit a button to leave the seat.
[05:34] And so, of course, this will have to get
[05:36] tuned by the animators so that certain
[05:38] anim will turn them on and off at
[05:40] certain key frames of the animation. But
[05:43] for now, this works for fun little
[05:45] tests. And I'm sure sometime in the
[05:47] future, we'll have a nice little res in
[05:48] and res out effect so it just won't go.
[05:52] But
[05:54] for now, it just vanishes. Hope you guys
[05:56] enjoyed and I'm out. So, we had a little
[06:00] fun bug with our new item system where
[06:03] if you go up on the ladder and you sit
[06:05] down, your weapons all clip through
[06:07] everything. Uh, that's actually
[06:08] happening right now in the current game,
[06:10] but we wanted a way to address that. And
[06:13] since we have a whole bunch of wide
[06:15] ranges of cockpits and all crazy things,
[06:18] it's going to be hard to hide them,
[06:19] especially when you have big suits,
[06:20] small suits, and all that fun. So, what
[06:23] we decided to do was res out the weapons
[06:26] um when you get down into the seat and
[06:28] depending upon what area of the
[06:30] animation you're in, we'll show and hide
[06:32] them. And so, we added a little prop
[06:34] clip to makes it so that the animators
[06:36] could do that. And now we just got to
[06:38] add in the res in res out effect. And
[06:40] then we're good to go. Hope you guys
[06:41] enjoyed. Till next time.

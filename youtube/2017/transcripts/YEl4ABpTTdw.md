# Star Citizen: Bugsmashers - Episode 40

**Video:** https://www.youtube.com/watch?v=YEl4ABpTTdw
**Date:** 2017-01-04
**Duration:** 6:20

## Transcript

[00:06] [Music]
[00:16] hey everyone welcome to bug Smashers I'm
[00:18] your host Mark aent I'm the gameplay
[00:21] programmer here at cig Los Angeles and
[00:23] I'm here to show you behind the scenes
[00:25] of some bugs and how we smash them let's
[00:27] take a look
[00:32] box
[00:33] [Music]
[00:35] bashes hey everyone we're here in my
[00:37] fancy dcy test level and we have a fun
[00:41] UI problem with the Moi glass as you can
[00:43] see I always use a weird screen
[00:46] resolution and it always tends to make
[00:48] the HUD go funky dunky you can kind of
[00:50] see it with the visor right now and when
[00:53] you pop up the mobiglass uh as you can
[00:55] see you the edges tend to get offset and
[00:59] cut
[01:00] um if I my resolution was a little bit
[01:02] wider I'd be able to see the actual
[01:05] extent of the Mobi glass uh so the UI
[01:08] guys were like well we can't have this
[01:09] we needed to work on well pretty much
[01:11] all resolution so that it scales
[01:13] correctly on the screen and so that's
[01:16] what the good old UI folks in UK office
[01:19] has done um so here is our original code
[01:23] uh for our mobiglass instance and we
[01:26] have a standard scale that the designer
[01:28] set up um which for on sense purposes
[01:31] worked for the scale that they were
[01:34] working in in their resolution however
[01:36] it doesn't work in this crazy resolution
[01:39] that I have of 1280 by 960 because I'm
[01:42] weird I like to see my code on my left
[01:45] and right side and it causes all sorts
[01:48] of fun problems such as this uh
[01:51] resolution Shenanigans so what the UI
[01:54] guys have done is based on the renderer
[01:58] um resolution or aspect uh they will
[02:01] scale it so it will scale down or up
[02:04] depending upon how crazy your screen
[02:07] width and hiar uh so let's activate that
[02:10] code to see what
[02:12] happens bam so we take our original
[02:15] scale uh we get the rendering and we
[02:17] scale it based on the renderer width and
[02:20] height so that um if the aspect is
[02:23] slightly wider or slightly uh taller it
[02:26] will try to focus it more onto the
[02:29] center of the screen
[02:31] all right let's hit the magic recode
[02:33] button and see what that
[02:37] does all right as you can see recod is
[02:41] finished and our scaling has worked
[02:43] pretty nicely in my crazy resolution it
[02:45] actually shrinks it down so that I can
[02:48] see the whole thing of U Mobi glass and
[02:51] the only other problem that um exists is
[02:54] here's the close button and as you can
[02:56] see it's not highlighting because I have
[02:58] to move it down bit where is it where is
[03:01] it somewhere around
[03:03] here there it is so as you can see
[03:06] there's quite a big offset from here to
[03:08] here um let's see what they did to fix
[03:12] that so here in Flash UI element this is
[03:16] where it takes the mouse input and sends
[03:18] it off to our flash elements um in this
[03:22] specific region of code it's getting our
[03:25] Mouse coordinates and it's getting the
[03:28] viewport of the renderer and The Flash
[03:30] and it's trying to um see where it
[03:33] should send the mouse inputs as you can
[03:36] see we have for our X and Y we're taking
[03:38] account the width and the height we're
[03:40] not taking in account the viewport
[03:42] offset which is the X and the Y
[03:45] so if that button was at 0 0 way up on
[03:48] the top we'd be able to click it because
[03:50] there was no XY offset however we have
[03:53] an X Andy offset um for where we are to
[03:57] where this button is and we're not
[03:59] taking of that offset so let's do that
[04:02] and see what
[04:04] happens this recode should go by pretty
[04:06] quickly but if we have a little box and
[04:09] we have another let say here we go box
[04:12] and we have another like we could use
[04:14] that square here um our Mouse input for
[04:18] that POS we should say for this position
[04:21] is going to be this x off
[04:25] set and that will be that position for
[04:28] this position right here it's going to
[04:29] be this x offset plus this size and what
[04:33] this code was doing was just taking
[04:35] count this position and not this offset
[04:38] so we do both of these and now we can
[04:40] click here all right recode has been
[04:43] done and we should be able to voila
[04:46] click on the magical button so now
[04:49] everything scales correctly and I can
[04:51] click on buttons as you would expect
[04:53] because well we're taking into account
[04:54] all the
[04:56] offsets hope you guys enjoyed woo so
[04:59] today's bug was something to do with the
[05:01] Mobi glass you know you pop it up and oh
[05:03] no if you have a crazy resolution the
[05:05] Mobi glass right in your face and you
[05:06] can't see on this side or this side
[05:08] because it's clipping or it's like
[05:10] really really really small um it was
[05:12] just a issue with not you know scaling
[05:15] the thing based on your resolution so
[05:17] the good old U UI programmers uh in the
[05:20] UK uh made it so that it scales
[05:22] depending upon your resolution and now
[05:24] it looks pretty great uh you if you do
[05:26] some crazy high resolution or some low
[05:29] resolution and it's not all open in your
[05:31] face or really really tiny and then the
[05:33] other thing that they fixed was they had
[05:35] a little button and if you clicked on
[05:38] the button it wouldn't you know work
[05:40] because it was actually offset and it
[05:43] was just a small little thing to take in
[05:45] account the position change of the uh
[05:47] flash so that it offset correctly so
[05:50] when you hit the button it's actually
[05:52] right here instead of down here hope you
[05:54] guys enjoyed until next time thank you
[05:57] for watching so if you want to keep it
[05:59] with a latest and greatest and Star
[06:00] Citizen of Squadron 42's development
[06:02] please follow us on our social media
[06:04] channels see you soon
[06:12] [Music]

# Star Citizen: Bugsmashers - Episode 39

**Video:** https://www.youtube.com/watch?v=OaWoIvKoxkM
**Date:** 2016-12-21
**Duration:** 6:39

## Transcript

[00:06] [Music]
[00:16] hey everyone welcome to bug Smashers I'm
[00:18] your host Mark aent I'm a gameplay
[00:20] programmer here at C Los Angeles and I'm
[00:23] here to show you some bugs that we're
[00:24] playing in the game let's take a look
[00:30] box
[00:34] bishes hey everyone we are here in good
[00:37] old uh dying star and we have a bug
[00:41] where if you turn off GS safety and you
[00:46] go full speed you're supposed to black
[00:48] out and play this you know animation
[00:50] like well you passed out and then
[00:52] sometime later you recover and you go
[00:53] yeah I could start fighting again
[00:56] however
[00:58] um if
[01:00] we make the guy try to pass out o that
[01:02] was quick we're in an M50 um so in this
[01:05] code I put some break points so when we
[01:07] actually black out um we'll hit this
[01:10] little call step so I know when it's
[01:12] happening and let me remove this break
[01:15] point we'll continue we're passing
[01:19] out but look he's not passed out and I
[01:22] can't I don't have control of the ship
[01:25] now we
[01:26] recover and I have sweet control and of
[01:29] course I hit an asteroid luckily I have
[01:31] god mode ooo let's stop the
[01:35] ship going way too fast all right so
[01:39] what's happening well Shenanigans that's
[01:42] what's happening um in a long long time
[01:45] ago um we introduced this little bit of
[01:48] code where it we'll start playing a
[01:51] blackout animation so you fall down and
[01:53] then after the animation is done you
[01:55] recover and
[01:57] unfortunately um that code is
[02:00] well still there and it expects that
[02:02] after the animation's done you recover
[02:06] however the animation and setup was
[02:07] changed so that it'll play the animation
[02:10] and then it will stay there until the
[02:12] code
[02:13] recovers however uh this bit of code
[02:16] right here
[02:19] actually Bas um any animations I get
[02:22] done it will just be like Oh I'm done so
[02:24] it gets you out of the animation even
[02:27] though the game code still you has you
[02:29] in the the blackout State um
[02:32] unfortunately the way that mannequin
[02:34] works is we have the ship and we have
[02:36] the player and we ins slave the player's
[02:38] animation system to the vehicles and we
[02:41] play an animation on the vehicle which
[02:43] plays also on the player now um this
[02:46] functionality right here will actually
[02:48] get called when the vehicle gets done
[02:51] with the animation or if the player gets
[02:53] done and since the vehicle doesn't have
[02:55] any animations it's going to happen
[02:57] instantly so that means as soon as you
[02:58] play the blackout animation
[03:00] it will cancel because this bit of code
[03:02] here says hey you're done and then the
[03:05] guy goes back to idling so we want to do
[03:09] is add a bit of code that checks to see
[03:11] if we're the main layer and if uh they
[03:15] call it the scope or the layer that
[03:16] we're on of the animation is the same as
[03:20] the scope that we're on here so we're
[03:21] making sure if we're playing animation
[03:22] on the player we're getting the
[03:24] animation when it's finished from the
[03:26] player and not from the ve the vehicle
[03:29] so let's hit the magic recode
[03:34] Button as recode happens I want to show
[03:36] you guys a little fun bug that we
[03:39] discovered with the visual studio
[03:43] apparently uh we have two structures
[03:45] here um and they both have an inner
[03:48] structure the only difference is that
[03:50] one has a named and one has an anonymous
[03:53] now when we run this it should set a to
[03:57] 66 7 to 776 seven on both of them
[04:01] however when we run this we can see poor
[04:05] Robin using the anonymous structure sets
[04:07] it to some randomized value which is
[04:11] horrendous because we use that same we
[04:15] use that same setup here in the radar
[04:17] data bank and it was causing all sorts
[04:19] of fun crashes because of a compiler
[04:21] issue the easy fix of course give it a
[04:25] name yay bugs all right
[04:31] back to the original bug uh we have
[04:34] here uh so recod is just finished we put
[04:38] in the new code let's give this a spin
[04:42] oh we blacked
[04:47] out and of course it's playing the
[04:49] animation but we can't see it so let's
[04:52] try that again we'll go in first person
[04:55] this
[04:57] time woo all right what's up we're
[05:01] blacking
[05:03] out hey we passed
[05:06] out and then we'll
[05:09] recover hey we oh we HD an asteroid now
[05:13] since we've you know we've passed out
[05:15] now we're recovering the animations are
[05:17] done so then the game code can give you
[05:19] back control of your ship and of course
[05:21] I'm spinning wildly out of control
[05:23] because during this time I had an
[05:25] asteroid and just went haywire let's see
[05:29] if I can get control of my ship
[05:33] again nope looks like I'm going way too
[05:36] fast but it's kind of cool well the
[05:38] animation now plays hope you guys
[05:40] enjoyed uh until next time so as you
[05:43] guys saw we had a little issue where uh
[05:46] you know you have you're flying around
[05:47] your ship you do too much G's you're
[05:49] supposed to pass out and recover but
[05:51] what happened was it instantly recovered
[05:54] and you're just like holding there you
[05:56] couldn't move because the game code
[05:57] still thought you were blacked out but
[05:59] it look like you're okay uh fix the code
[06:02] so now you'll play the
[06:03] animation then you'll play back out and
[06:06] then you'll get all the controls so the
[06:07] blackout and recover works as expected
[06:10] looks pretty good what do you guys think
[06:13] all right well till next time Bug
[06:15] Smasher thank you for watching so if you
[06:18] want to keep it with the latest and
[06:19] greatest and Star Citizen of Squadron
[06:20] 42's development please follow us on our
[06:22] social media channels see you soon
[06:31] [Music]

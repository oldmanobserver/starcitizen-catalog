# Star Citizen: Bugsmashers - Episode 33

**Video:** https://www.youtube.com/watch?v=JNblPkb3UrM
**Date:** 2016-09-27
**Duration:** 9:14

## Transcript

[00:16] Closed Captioning provided by the Imperial
News Network.
[00:17] Mark Abent: Hey everyone, it’s early in
the morning, we’re here to crack some bugs
[00:20] down on good ole Citizen Con.
[00:22] Going to do some bug fix fixed, all for your
fixing needs, going to fix all those bugs.
[00:29] Let’s go.
[00:33] Hey everyone, we’re here in our super secret
test level with the Gladius and invisible
[00:43] ship.
[00:44] So, we got a bug here about all the enter
animations being offset, this happened after
[00:52] all the animators switched the enter animations
to this new fast enter animation.
[00:57] So, you can quickly get into your ship and
it doesn’t take forever.
[01:01] So let’s turn on our AI physics and I have
my little pilot guy here, our ship’s going
[01:08] to dance around and we’re going to tell
him to enter and I’m going to actually scale
[01:16] down and you can see, oh kinda missed it there.
[01:21] Let’s try it again, weee, you’ll be able
to see as this plops down he’s supposed
[01:29] to grab onto the bars and propel himself into
the ship.
[01:33] He doesn’t quite do that, so as you can
see he kinda missed the bar there, it’s
[01:40] kind of penetrating and as he gets in the
seat he has a little offset and he snaps.
[01:47] This is happening across all the ships, there’s
a slight little offset so let’s watch that
[01:52] again.
[01:54] He just decided to float into the air.
[02:00] So real time, he’ll grab on and oh that
time he fully missed on the right hand.
[02:08] So he grabbed right before and he propelled
himself up.
[02:12] Then when he gets in he like has a small little
gap between his thigh and his seat, so there’s
[02:18] a global issue that affects all of the enters
and it’s just a slight offset and it’s
[02:24] not inside the actual animation.
[02:27] So, all the animators were going nuts going,
they set up everything, they synced everything,
[02:32] they even placed these things called animobjects
that lined up correctly and they’re like,
[02:37] ‘all right, we got to send this off to an
engineer cause there’s obviously some weird
[02:43] offset’ and fortunately there was.
[02:47] So, what our set up, let’s go back into
here.
[02:52] What I’m doing actually is when a player
gets into this enter animation, what we do
[02:59] is on the ship there is a position roughly
where our character is and what we do is,
[03:07] is we attach our player to that position and
then we have the player move relative to that
[03:14] attachment point and that gives the illusion
that you’re still in… he’s actually
[03:21] in that little enter position but we’re
moving him and when he sits down we teleport
[03:27] the attachment to where he’s sitting.
[03:30] So give the illusion that you’re sitting
when you move and all that fun stuff and you
[03:36] just move relative to the attachment which…
[03:39] it works out pretty nice but when you have
this weird offset issue, you get this bad
[03:44] snapping so when you finally sit down and
when it teleports to the actual sit thing
[03:49] you get this teleport and it just looks unnatural.
[03:51] So, what’s happening, well here is our animated
character or what our player does to figure
[03:59] out where he’s going to move next.
[04:03] This desired animation movement block of code,
what it does is it looks at the... basically
[04:10] the skeleton to see roughly what movement
we’re going to do.
[04:14] So, as we’re here every frame we have a
little bit of movement.
[04:18] Movement, movement, movement, movement until
we get to our seat and that’s what basically
[04:23] this calculate relative movement does and
this block of code ideally you just want to
[04:31] do a current frame to get to a current movement
so you can work your way up.
[04:38] Unfortunately this block of code actually
get used for the usual standard player movement
[04:44] and they have to use this prediction block
where it samples the current frame and the
[04:49] next frame, the reason why is if you’re
not on the seat attachment, you’re just
[04:55] generally moving around it actually figures
out where you need to go and it sends this
[05:00] information to physics and physics runs here
and the main thread where this animation runs
[05:07] here.
[05:08] They run parallel and between each other so
they’re not quite in sync so we have to
[05:14] get some future information so we can send
to it so it can run even if it runs ahead
[05:20] or behind the main thread.
[05:22] So, we need an extra sample and unfortunately
that breaks one attachment cause we’re not
[05:29] actually going through the physics side, we’re
going through the attachment side to figure
[05:32] out where we need to move the player.
[05:34] So we don’t need this extra bit of prediction
and that’s actually where our offset is
[05:39] happening because we’re not sampling here,
we’re sampling ahead double so we’re going
[05:46] places we shouldn’t be going.
[05:47] So, what we have to do is do something sniffy
like, should use movement prediction and by
[06:01] default we want to use it if we have our Cvar,
but we also don’t want to use it if we have
[06:13] the first step to an attachment.
[06:16] So, if the movement Cvar for prediction is
enabled and we do not have an attachment then
[06:24] we do this movement prediction.
[06:26] Otherwise we just sample the timeframe.
[06:29] So, do some recode, all right recode is done
and let’s see how it looks when we only
[06:40] sample the current frame instead of the future
frame.
[06:47] Up… recode broke.
[06:54] So unfortunately recode sometimes breaks the
game so I have to restart the editor.
[06:59] All right, so recode had some issues so I
had to restart the editor, let’s try this
[07:06] again.
[07:08] Let me turn on the Cvar, wham.
[07:11] All right, got into position, let’s have
the pilot enter and see what happens.
[07:21] Slow motion...bam, oh he grabbed the ladder,
yeah.
[07:32] He hops in, he grabs the side correctly, sits
in the seat on the correct position, wooo.
[07:39] Everything works better, a lot better.
[07:42] There is still kind of a snap between the
end of the enter and the idle that’s something
[07:47] that the animators have to work at but the
whole offset between the entering and getting
[07:55] inside is there Cvar is gone, done.
[08:01] Just slight little programming and bam, we
got good results.
[08:05] All right, hope you guys enjoyed this little,
small fun bug.
[08:09] There was a global issue with seats entering,
they switched over to the new combat animations
[08:15] and things were just not lining up/ The animators
were going bonkers and then they decided to
[08:22] shift the bug over to engineering, they took
a quick look at it.
[08:26] Some slight issues with the movement prediction,
turns out we don’t even need that prediction
[08:32] when attached, so disabled it when we’re
attached, the problem went away you’re able
[08:37] to get in, grab onto the ladder, animations
all lined up good to go.
[08:43] Animators can take a sigh of relief and all
the animations look great.
[08:47] Hope you guys enjoyed, till next time, bugsmashing.

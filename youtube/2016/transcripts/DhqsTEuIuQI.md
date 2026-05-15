# Star Citizen: Bugsmashers - Episode 27

**Video:** https://www.youtube.com/watch?v=DhqsTEuIuQI
**Date:** 2016-06-29
**Duration:** 8:04

## Transcript

[00:08] Mark Abent (MA): Hey everyone, welcome to
Bugsmashers.
[00:09] Ready to smash a bug?
[00:12] Let's get started.
[00:14] Closed captioning provided by the Imperial
News Network.
[00:21] Hey everyone.
[00:23] We are here in my fun little test level and
this week is kind of a special bug.
[00:29] It’s more or less kind of a global bug on
how we’re dealing with the items and the
[00:35] new items as we kind of merge over in time.
[00:39] I want to show you some of the things that
we were solving with the old system by using
[00:45] the new system.
[00:46] So let me plop down a new Hornet.
[00:52] So this is our test Hornet and as you can
see it has a bunch of these little awesome
[00:57] red boxes.
[00:58] We’re actually use a whole new system for
interacting with things, it’s no longer
[01:03] hit F and do something, it’s a little bit
more intricate and I’ll show you that right
[01:08] now when I plop down.
[01:10] So when I go up to one of these interaction
points, you just have a bunch of options of
[01:16] what you can do in this particular area.
[01:19] So in this interaction I could open the ladder,
open the front canopy or open the back canopy
[01:25] and on the top, I could either open the ladder
or the front canopy and in the back I could
[01:33] open the rear canopy and the ladder.
[01:35] So it’s a whole brand new interaction system
which is pretty cool.
[01:39] We’re going to be using this for pretty
much everything for now on, but what the vehicles
[01:45] and items are using this for is, specifically
with the seats and animations, we wanted to
[01:52] have a lot more control for the designers.
[01:56] So we have, let's see where is my, there’s
DataForge.
[02:00] Here’s fun DataForge.
[02:03] We have this thing called a seat access, which
controls these two seats and in the seat access
[02:09] we define a bunch of gateways which is going
to be one per ladder, one for the front canopy,
[02:17] one of the rear canopy and how all the animations
and interactions all get tied up so that when
[02:23] you come in here, I can choose the interaction
to open that stuff down.
[02:28] So I can bring down the ladder, close it back
or open the ladder and open the back canopy
[02:35] and so on.
[02:39] The next part of that actually defining our
entrance points.
[02:44] For the Hornet we have, well four ways…
actually quite a few ways.
[02:50] So we have, one way is through the ladder,
but you could enter into the pilot or you
[02:55] could enter into the co pilot and in order
to enter that way you have to open up the
[03:00] ladder and open up the front canopy.
[03:05] So once the front canopy is open, I have some
new options to enter the pilot seat or the
[03:10] co pilot.
[03:11] So if I enter the rear, now I can just enter
the pilot, but on the very top, our zero G
[03:19] access, all we need to do is enter here.
[03:24] So if I close the ladder, I have still the
ability to enter through the canopy because
[03:30] that’s the zero G entrance way.
[03:32] So let's go down here and go through the ladder.
[03:36] Weee.
[03:37] So I’m entering through the ladder…
[03:49] So now I’m in and I could close the canopy.
[03:55] Eh let's do, weee.
[03:59] Of course I can reopen it and the best part
of it and my ship is not technically on, I
[04:05] have to power it on so if I look directly
here.
[04:12] Now my ship is powered on and now it’s powered
off and you can see that with our fun debug.
[04:23] As my ship slowly falls.
[04:25] On the top you can see that there’s no power
going to anything because everything is red,
[04:30] but as soon as power on the ship everything
goes green and now I can shoot my weapons,
[04:35] pew, pew, pew.
[04:37] If I turn off, I can no longer shoot.
[04:41] On and then off.
[04:45] Ideally what’s going to happen is when you
get into the ship you’re gonna have to turn
[04:49] on the power or turn on the engines and or
hit this one thing that will turn everything
[04:54] on and then you’ll be able to close the
canopy and fly away.
[04:59] The next thing that we’re kind of doing
is…
[05:01] Let’s see I’ll turn on this.
[05:06] We have a whole new system of control, for
when you sat down in the old system, oops
[05:12] I got out of my seat, you would gain access
to every single item and they would all turn
[05:17] on and then when another person sits down,
it was very unstable of who would get what.
[05:23] Sometimes it would work, sometimes it wouldn’t.
[05:25] Now we have this new thing where we have a
user, a controller, and then the actual items.
[05:32] The user will control the controller and the
controller dictates what to do with the item.
[05:38] You have an energy controller, a flight controller,
a weapon controller and you could actually
[05:43] designate who the controller should go to.
[05:46] Like at the moment we have two energy controllers
which if I sit down in the pilot seat, I’ll
[05:51] get both of them, but if the copilot sits
in the back, he’ll automatically get the
[05:55] other one and eventually there’ll be the
real HUD support where you can say could “here,
[06:00] you have access to this now and you get it”.
[06:03] So you won't get the individual items, you’ll
get the actual individual controller and the
[06:06] controller dictates what you can use and see.
[06:11] And as you can see I haven’t set up everything
for the new item, but the controller are there.
[06:18] So if I sit back in, we’ll go through the
zero G entrance because why not, I have access
[06:27] to the energy controller and the flight controller
and the cooler controller and the fun stuff
[06:35] and if the other guy gets in the back, he’ll
get access to the powerplant which is pretty
[06:41] nifty.
[06:42] Well I hope you guys enjoyed our little sneak
peek on the item system 2.0 and our new interactions.
[06:50] You guys will see more stuff in the future.
[06:54] Till next time.
[06:56] So I hope you guys enjoyed a little sneak
peek on our item system 2.0 and our interaction
[07:02] system.
[07:03] We did a lot of work on componentizing a lot
of things.
[07:06] So we have a physics controller, we have an
interaction controller, we have a bunch of
[07:11] things that we can grab and now make items
or entities with and stick them onto a ship
[07:18] and then we have this whole new logic where
we have the user who controls controllers
[07:22] which controls items, so you could have a
specific logic and then you could make sure
[07:27] that this guy gets that access, this guy gets
that access and it’s all coming along lovely
[07:33] and we hope to get it into your guys’s hands
soon, eventually, one day.
[07:39] Hope you guys enjoyed and I’ll see you guys
next time.

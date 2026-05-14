# Star Citizen: Bugsmashers - Episode 34

**Video:** https://www.youtube.com/watch?v=2zOaOSaVL2k
**Date:** 2016-10-12
**Duration:** 5:37

## Transcript

[00:16] Mark Abent (MA): Hey everyone and welcome
to Bugsmashers!
[00:18] Hope you guys enjoyed Citizencon, I know I
did, it was fun meeting and greeting you guys
[00:22] - I can’t wait to do it again.
[00:24] Today we got a special bug for you today - it’s
a little bug we had to deal with before showing
[00:28] you guys that demo.
[00:30] So let’s take a look.
[00:35] Closed Captioning provided by the Imperial
News Network
[00:38] Hey everyone, we’re here in this fancy level
- look how wonderful it is, it’s beautiful.
[00:45] But we have here a Rover and in case you guys
didn’t see the demo, you basically would
[00:52] fly in the Constellation, land down, go in
the rover then head out into the oblivion.
[00:57] And sometime later you would actually get
ambushed and your front wheel would just pop
[01:02] off from an explosion - boom!
[01:04] - then you get out and shoot all the baddies.
[01:08] So, it actually didn’t look like that the
very first time the designers set it up - in
[01:12] fact it looked quite strange and I have here
the test conditions of what it looked like
[01:17] - so let’s see what happens when the explosion
happens and then the front wheel is support
[01:22] to fall off.
[01:23] I’m going to hit the magical button.
[01:25] Boom!
[01:27] Not quite what the designers had in mind,
I don’t think they expected the tire to
[01:32] float off into oblivion - kinda magical but
not what we wanted.
[01:38] Ah, lovely, lovely, lovely.
[01:40] Let’s jump into code and see what’s happening.
[01:43] So over here we’re into the magical bits
of code - we’re in this thing called “VehiclePartBase”
[01:49] - it’s basically the common code that all
of our parts have - if you have a wheel, if
[01:56] you have a wing, if you have a cockpit - all
the part code that is common with those things
[02:01] are in here and this specific section of code
handles when a part gets detached - you can
[02:07] have multiple parts get detached and we stick
‘em onto a debris piece and they’re supposed
[02:11] to bounce around, tumble, all which way, and
this particular bit of code will handle offsets
[02:19] - so if we have two different debris pieces
they kinda get a little to the left, a little
[02:24] bit to the right and they are centered here
so they tumble correctly.
[02:28] Or if you have one that sticks out the origin
like the tire so it’s supposed to wobble
[02:32] as it should.
[02:34] Once we get passed that part, we basically
physicalize those pieces onto a specific slot
[02:41] on that entity and when it gets this part
it actually goes through the entities, goes
[02:48] through the physical proxy - which is like
our game code handler for the physics, it’s
[02:54] one step before our physics engine - and inside
of here - boo - this “UpdateSlotGeometry”
[03:02] - you are supposed to send it a mass, otherwise
it tries to compute it based on properties
[03:07] set inside like max, these things are actually
supposed to be automatically computed - they
[03:14] actually are in other sections of code but
this particular area where you are actually
[03:20] modifying or updating - if you don’t already
have mass defined it tries to get it from
[03:26] the properties of the max - which is a problem
because we want the things to be dynamically
[03:33] determined.
[03:34] Now we already have that mass to determine
what that wheel is supposed to be - so rather
[03:40] it determining what it should be when we already
know what it is, we’ll just pass that mass
[03:44] in.
[03:45] We’ll have to change the interface a little
bit so that we can add a mass - we’ll make
[03:50] the default negative one so it acts like it
should in other situations, or what it was
[03:56] in other situations - so once we add the mass
through the interface, we want to send it
[04:01] to the physics proxy and hopefully with that
said and done - we should see our wheel kind
[04:08] of tumble.
[04:09] I know, I know, it’s floating off into the
oblivion was nice but designers don’t like
[04:14] that very much.
[04:15] Right, we hit ‘recode’, there’s a wait
and see what happens.
[04:20] Alright so we hit ‘recode’, let’s see
what happens when the tire falls off.
[04:26] Ah ha!
[04:28] It acts like it should.
[04:29] Woo!
[04:30] Physics.
[04:31] We can move it around and everything, yeah,
higher physics!
[04:38] Well, hope you guys enjoyed that fun bug.
[04:44] So as you guys saw, we had a little case of
the wheel floating away into oblivion - not
[04:50] quite what the designers wanted - but it was
kinda cool.
[04:55] The same thing you guys were seeing in the
current build where you blow up a ship and
[04:59] some debris acts strange or stays still - it
was just because they were getting no mass
[05:04] - it was an easy fix.
[05:06] So hope you guys enjoyed and hope you guys
see the- those floating debris’ are gone.
[05:15] Until next time, bam!

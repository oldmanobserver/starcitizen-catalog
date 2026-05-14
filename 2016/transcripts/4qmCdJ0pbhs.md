# BUGSMASHERS! Episode 25

**Video:** https://www.youtube.com/watch?v=4qmCdJ0pbhs
**Date:** 2016-05-18
**Duration:** 9:06

## Transcript

[00:09] Closed Captioning provided by the Imperial
News Network.
[00:10] Mark Abent (MA): Hey everyone, welcome to
Bug Smashes, I got nothing witty.
[00:12] Like I said, I got nothing witty.
[00:16] You’re gonna use that aren’t you?
[00:18] Tom Hennessy (TH): Let's start.
[00:20] MA: [Laughs]
[00:24] Hey everyone, we have a fun little bug here.
[00:30] I have a test Hornet which I use and abuse
to put all sorts of items on.
[00:36] As you can see, I threw an airlock on the
wing because why not.
[00:41] This is mostly so I can test the interaction
system and we’ve got a bug in that when
[00:50] items get removed off ships like this airlock,
it has no physics and as you can see here,
[01:00] this airlock is attached to my lovely Hornet
and it has physics on the door; However there’s
[01:07] no physics anywhere on this airlock when it’s
plopped down and same thing with pretty much
[01:16] any of this other items.
[01:17] If I go in here there’s physics for the
seats, physics for the weapon, but not when
[01:24] it gets plopped down.
[01:26] So what happens?
[01:27] Well let's snap into the code.
[01:30] So let me open up the fun…
[01:34] Eh I’ll open up the item…
[01:44] Where are you item, somewhere hiding.
[01:51] Visual assist does not, ah, there you are.
[01:57] Alright, so our legacy item which is this
guy and our new items, they have a physics
[02:06] controller.
[02:08] Where are you, there you are.
[02:13] We have a physics controller which is a separate
component that handles the physics for this
[02:19] item.
[02:20] Both the legacy item which is this guy right
here and our new item just both go and use
[02:25] this guy, and we have a call back for physicalizing.
[02:36] We were just there, let's go find you.
[02:39] We want the physicalization mode.
[02:51] Going through the fun mess, Aha!
[02:55] Physicalized.
[02:56] Out and about.
[03:00] Alright here’s our fun physicalization function.
[03:05] So to get this item working with our physicalized
component we have to do basically a callback
[03:12] to do special methods.
[03:13] So, when we physicalize we’ll tell our physics
controller to basically physicalize our entity
[03:22] and then it will do a callback to come back
to the item because the item has to do some
[03:25] special love, and whenever we physicalize
we have to define a slot.
[03:33] Basically we have an entity and it can have
multiple slots and each slot could have a
[03:39] character or it could have some geometry.
[03:42] We could have a wallet geometry and a phone
and they both belong to this entity, and each
[03:48] one would be into a slot.
[03:51] You could have multiple slots for the entity
active at one time or you could have one at
[03:56] a time.
[03:57] For example the legacy items, if it’s...
we could switch between an auxiliary or third
[04:04] person geometry, we mostly stick with third
person, but auxiliary is for like attachments.
[04:10] You could do things like you’re if in first
person you have switched to this geometry,
[04:14] if you’re in first person you switched to
this geometry, but either way we have to define
[04:18] a slot to physicalize and the item and old
items, they have one slot which they physicalize
[04:26] on, but they also have another physicalization
slot for the interaction system which is these
[04:34] fun little proxies right there and unfortunately
we have to physicalize a bunch of slots.
[04:41] So rather than sending in a specific number,
we can send in a negative one.
[04:48] If we go to the physics controller.
[04:52] This is what we use for the new items and
as you can see if it’s a rigid body, we
[04:57] pass a negative one saying, “Physicalize
every single slot you have” and unfortunately
[05:05] our physics controllers is the top level and
the physics proxies are bottom level and then
[05:10] we have super, super low physics.
[05:13] So our entity, physics controller, physics
proxy and physics.
[05:18] Our entity tells physics controller, “I
want to physicalize”, it does a call back
[05:22] and then it eventually goes the physics proxy
to set up a whole bunch of crazy parameters
[05:27] and then finally gets the physics and our
guy has physics, it’s cray cray.
[05:33] Basically our item gets here, goes to the
physics controller, we say slot negative one,
[05:40] it gets to the physics proxy and we land here.
[05:45] When we have negative one, we have to go through
all these physics slots and add it to physics
[05:51] and say, “Hey, make this thing have physics”,
but unfortunately in this param, we when pass
[05:57] since slot negative one, we also pass in this
param in here and when we add the slot geometry
[06:06] it gets the param if it’s a character or
physics, it checks to see if the slots negative
[06:14] one, but we set in there negative one because
we want everything to go.
[06:19] So we have to do a little trick where we say,
when equal to the current slot and then we’ll
[06:29] reset it.
[06:33] So since everything, unfortunately this is
the params, we’ll just say, “Hey, just
[06:41] use, we’ll assign the correct slot so everything
below the physics proxy gets passed in correctly
[06:47] and then when we go the next slot we do the
same thing over and over again”.
[06:51] And we build this guy.
[06:55] So now my super duper wallet and my super
duper phone both have physics instead of going,
[07:01] “Oh my gosh we’re slot negative one, abort”.
[07:05] Woo because this guy doesn’t want to do
physics.
[07:12] Alright as this compiles, we are going to
see the awesome result.
[07:20] Best sellody.
[07:21] Alright we’re back into the editor, let's
draw our physics.
[07:27] Haha!
[07:29] We now have physics when we plop down this
door.
[07:32] So if I were to hop in this game, weee, my
ship goes crazy, but since I have physics
[07:42] I can now open it.
[07:44] We I can at least shoot it, I guess the animations
broke, all fun.
[07:51] Heh It had to open up that door, oh that’s
great.
[07:59] Ha ha.
[08:01] That’s another bug for another time, [Epic
thumbs up]
[08:05] As you saw we had a fun little physics issue
where if we had an item and we attached to
[08:11] [Holds an apple] yes this is a ship, pretend
it’s an airlock, it has physics!
[08:15] Awesome, but as soon as we detach it we don’t
have physics anymore.
[08:19] Problem was with the good old low level component
when we try to physicalize all the slots,
[08:26] we send the negative one, but it was aborting
out because negative one’s invalid so we
[08:31] just had to make sure that when it goes through
each slot we set the appropriate value for
[08:35] the slot, everything physicalized and now
our apple is a real boy.
[08:39] Hope you guys enjoyed, see you guys next time,
cheers!

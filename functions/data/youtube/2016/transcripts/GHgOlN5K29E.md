# BUGSMASHERS! Episode 24

**Video:** https://www.youtube.com/watch?v=GHgOlN5K29E
**Date:** 2016-05-04
**Duration:** 8:32

## Transcript

[00:08] Closed Captioning provided by the Imperial
News Network.
[00:09] Mark Abent (MA): Hey everyone, welcome back
to BugSmasher [Cough]...
[00:12] Wow that was bad.
[00:17] Alright.
[00:19] Hey everyone, we’re here in my fancy dancy
test level with physics debug on.
[00:30] I’ve got a fun little bug that I supposively
broke the physics when items such as this
[00:38] gun down here gets attached to ships.
[00:41] As you can see, all the little grey stuff,
that’s all the physics meshes and on the
[00:47] weapons and landing gear it’s not working.
[00:50] Yay!
[00:52] So the reason why, I was told this was my
bug was we started, I should say, we started
[00:59] splitting up a lot of our entity logic into
these things called components.
[01:05] Originally with CryEngine you really just
had an entity and then something called a
[01:11] game object extension and you have like all
your logic in there and if you wanted to do
[01:17] the same thing in another entity over another,
you usually copy and pasted it because that’s
[01:21] just how the engine was.
[01:23] Now we have this component system where we
can build this little bit of logic here that
[01:27] can be used by this entity, this entity, this
entity, any entity we want.
[01:33] So we had our vehicles and our old items,
they had a special way of physicalizing or
[01:40] getting physics and doing you know, becoming
a rigid body moving around and about.
[01:48] However, I had to convert those over to our
new physics controller which will handle that
[01:57] for anything uses it, but it also allows other
components to directly read the physics information
[02:04] and we needed that for the interaction system
and especially for 2.4.
[02:10] So that way we could query, we call them interactions
so that you could select certain things, but
[02:16] that’s for a future thing.
[02:18] For now I needed to convert everything over
to a physics controller and that will handle
[02:22] all the physics the same for every entity
that uses it and unfortunately..
[02:28] [Cell phone rings]
[02:31] Phone call.
[02:33] Seriously business.
[02:35] So unfortunately after I checked all it in,
thought everything was working, I get a fun
[02:42] call from Andrew our QA and he has the most
evil laugh there is and as soon as I checked
[02:50] in the code he was like, “Hey I have this
bug” and I’m like, “Of course you do”.
[02:56] So here’s our good old weapon and here’s
our good old ship.
[03:03] Normally the weapon will have its own physics,
but when we attach it to something it actually
[03:09] becomes physics of the ship.
[03:13] So the physics controller actually handles
that, so when you’re on your own and then
[03:17] when you get attached, it makes sure it goes
through the appropriate areas.
[03:23] Unfortunately it had nothing to do with my
specific physics controller, it actually had
[03:29] to do something else which is an attachable
component and for the longest time we had
[03:38] special code for things you attach to item
ports, but because we want to be more generic
[03:44] and we want to attach anything to an item
port, we created this thing called an attachable
[03:50] component.
[03:51] If an entity has this, it could basically
attach to things.
[03:54] So now we could have ships attached to item
ports and a hangar, we could have players
[03:59] attached to an item port in a vehicle, you
could have a clothing thing attached to an
[04:04] item port on a ship, you name it and unfortunately
this attachable object expects another component
[04:14] called geometry resource which is another
component which handles all the asset creation
[04:22] for how it looks.
[04:23] So you have a CGA which is our ship which
has bones and stuff so it can animate or it
[04:30] could be a pure geometry or skin, but either
way geometry resource is the component to
[04:37] handle that and unfortunately, since I made
the item and the vehicle have a physical controller
[04:45] so it can use the interaction system, it also
now has this attachable component.
[04:52] This area right here, get these flags, we
search for it… do do do..
[05:00] So when an attachable component gets attached
onto the ship or hangar, whatever and there’s
[05:10] a thing called an attachment, we set certain
flags and if there’s no flags set like it’s
[05:18] not visible, then we actually clear the physics
because you can see it, why have physics,
[05:24] it just saves on performance.
[05:27] This is for things like you’re very far
away you can really see or if we hide an entity
[05:32] you don’t want to crash into a random thing
and unfortunately it’s returning no visibility
[05:41] and since our item vehicle aren’t using
this component yet, we’re always getting
[05:46] zero because this would be null.
[05:49] So what I did is used the fault visibility
and what this says if we’re in third person,
[05:56] first person, or doing the shadow pass this
thing is visible, it should have physics.
[06:03] So now if I compile this bad boy, recode…
[06:07] Hope into the game, once recodes done its
thing.
[06:16] Aha!
[06:19] Recode!
[06:22] So we don’t have physics yet, but once I
go to AI physics mode, BAM!
[06:27] Look at that, physics, right there and right
here.
[06:32] Oh snap, because it’s visible we have physics.
[06:36] If we move this guy away so he can animate
or fall down, you can see that the physics
[06:45] moved with it.
[06:49] Wooo, having fun with physics.
[06:54] So as you can see we had a fun little problem
when we’re trying to componentize our logic
[07:01] and when I added that physics controller and
interaction thing, we had no physics so when
[07:07] I got a bug, everyone thought it was that
big whole change because I sent out an email.
[07:11] Turns out it was something completely different,
but it was still related to a component and
[07:15] all it was just the fault flags getting missed
because we didn’t have a certain component
[07:20] vehicle item.
[07:21] So that got resolved and everything's going
good and we’re going to continue splitting
[07:27] all of our logic into these sub components
so that you can have a generic entity and
[07:33] slap on whatever kind of logic you want.
[07:36] The other benefit of our components is going
to be the ability to multithread all of our
[07:41] updates which is huge especially since we
want hundreds if not thousands of players
[07:47] on a server.
[07:49] You don’t want to update the people far
over there, but you want to update the people
[07:52] close by, so you have to be able to decide
who gets what updates, when, how and maybe
[07:58] we could update them all at one time.
[08:01] So componentizing everything, good thing,
just makes the game faster, makes the game
[08:07] awesome, hope you guys enjoyed.
[08:08] See you next time.

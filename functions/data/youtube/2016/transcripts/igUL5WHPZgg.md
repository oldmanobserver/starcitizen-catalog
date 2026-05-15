# Star Citizen: Bugsmashers - Episode 32

**Video:** https://www.youtube.com/watch?v=igUL5WHPZgg
**Date:** 2016-09-07
**Duration:** 8:15

## Transcript

[00:16] Closed Captioning provided by the Imperial
News Network.
[00:17] Mark Abent (MA): Hey everyone, back from Gamecom.
[00:19] Time for a little breeze, yeah, take a little
chill pill… just kidding.
[00:23] We got two six and time to fix some bugs.
[00:28] Hey everyone, we are in a fun little test
level for FPS and there’s a bug that the
[00:41] good folks in the UK managed to fix where
sometimes when you go about shooting and killing
[00:47] each other and die.
[00:49] Tough kill, my death’s been…
[00:52] been practicing that all day but when you
die sometimes, aha, just like that all your
[00:59] weapons sights and attachments go, gone.
[01:03] It’s like, whaaatttt and the crazy part
is we go on third person and then back, they
[01:09] magically show up.
[01:11] So obviously this is a crazy bug cause it’s
like, hey that should not be happening.
[01:19] Oh boy, this one took a little while because
each of those little bits are on an item port
[01:29] and item ports are basically things that allow
designers to say, ‘hey this should snap
[01:34] here’.
[01:36] Maybe allow for some user configurations and
dictate, all right, this thing can be a little
[01:41] scope, that can attach, what size scope.
[01:43] You know, a bunch of little interesting customizations
but since they’re on item ports it leads
[01:52] to a whole big slew of what’s the problem.
[01:56] Is it an item port issue?
[01:57] Is it an attachment issue?
[01:59] Item ports use attachments and they used to
follow the bone, so we have a little bone
[02:04] there that the little attachment would follow.
[02:07] So it’s like, oh no what’s happening.
[02:10] Then it gets weirder because it’s like,
how come when I go first person, third person
[02:14] it works again and as I kill myself sometimes
you get it, sometimes you don’t.
[02:22] I think I have it where I get it 100% of the
time but when you first spawn into the server
[02:29] you may not get it.
[02:31] Such a weird, fun little bug and it took the
good old folks in the UK to find what’s
[02:38] happening.
[02:40] So we have our item and when we attach our
item, sometimes we have to detach it and do
[02:46] some configuration and reattach it to the
player because oh good ole networking and
[02:51] good ole shenanigans, you know.
[02:55] The gun can come before the player, armour
and so with disconnect, connect, disconnect,
[02:59] connect so everything’s all nicely set up
and in between that, there’s this thing
[03:07] that’s supposed to set the view mode for
items.
[03:12] So if you have a third person you show the
third person geometry, if you’re in the
[03:15] first person you show the first person geometry.
[03:18] Obviously you don’t want to see the first
person geometry when in third because it’s
[03:22] high polys and extra details you don’t need
to see.
[03:27] The gun for all intents and purposes will
act and play the animations exactly the same
[03:33] but you kind of want a low poly… lower poly
version.
[03:36] It still has high fidelity but it’s not
going to kill everyone’s FPS because you’re
[03:43] using insanely detailed model.
[03:46] So, the legacy item 1.0 system has this ability
to switch between first and third person,
[03:54] problem is if it’s already in one of those
modes and you’re telling it to switch to
[04:00] that same mode, it gets locked and it doesn’t
actually refresh.
[04:05] So, if we’re in the third person mode and
we tell it to go to third person, it’s already
[04:09] thinks it’s there so it’s not going to
do anything.
[04:10] Or if we’re in first peron and you tell
it to go into the first person, it’s not
[04:15] going to do anything, and this is kind of
an issue when you attach and detach things
[04:20] cause the order of setting up stuff is just
kukoo.
[04:24] It’s also why we wanted to clean up a lot
of this in Item 2.0.
[04:29] So, for the item system when we attach to
a player it sets the view mode and what this
[04:36] does, if the view mode has changed it does
a bunch of stuff, the first person does a
[04:44] bunch of stuff, the third person…
[04:45] it’ll set up the attachments and geometry
and everything all fancy dancy but like I
[04:50] said if you’re already in that mode things
get wonky and they don’t attach right and
[04:55] that’s what’s happening to these item
port scopes.
[05:00] So, the trick is, let’s see, let’s go
back to the item view.
[05:09] We have this function and the FPS guys basically
added this bull which allows you to basically
[05:15] brute force into that mode and if you set
this to true it’ll basically determine the
[05:22] current mode that it’s in and force it.
[05:27] So all we have to do is call that function,
set this to true, by the false set it to false.
[05:37] It’s only an issue when you attach and reattach
things so we only need to force the mode when
[05:42] we attach it back which should be rare as
in it should only happen once in awhile.
[05:49] Not every single frame.
[05:51] So we’ll hit magical recode, all right so
recode is finished and we’re back in the
[06:03] level.
[06:04] So let’s kill ourselves again.
[06:06] Oh recode’s not done yet…
[06:10] there it goes, recodes done, aha.
[06:13] So we kill ourselves…
[06:17] respawn and wham we have our attachments.
[06:19] Let’s try it a few times cause that’s
always fun.
[06:22] I love that ragdoll, it spins around and dies
and turns into a ragdoll and all the funny
[06:28] poses.
[06:29] Let’s go down the stairs and kill ourselves,
yeah.
[06:32] View snapping, best part.
[06:37] So, as you can see I have all my attachments
for my guy, everything is good.
[06:45] Now people go FPS and do some iron sighting.
[06:48] Hope you guys enjoyed, two six!
[06:52] So we had a little bug when you get your gun
out, the iron sights on the top vanish or
[06:56] I should say the sights all a bunch of these
little attachments… sometimes.
[07:02] The even weirder part, you go in the third
person and back to first person they all work,
[07:06] so it’s like, ahhhh.
[07:07] You know, trying to figure out what it was,
look at the item port code, look at the attachment
[07:12] code.
[07:13] All it was was the legacy item code kept the
view state during first to third person and
[07:20] because of attaching/reattaching things get
disconnected and you have to rebuild when
[07:25] the attachments get set and if you’re not
refreshing the state that you’re in… things
[07:30] go bonkers.
[07:31] So, all it was was just adding a bull to a
function and when the thing gets attached
[07:36] to the player you just refresh the state,
you see your sights, see your attachment,
[07:40] everything’s good.
[07:41] Everyone is able to kill each other now, have
some fun, two six, getting one step closer.
[07:48] All right, see you guys next time, hope you
guys enjoyed.

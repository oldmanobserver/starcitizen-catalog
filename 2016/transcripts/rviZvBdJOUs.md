# Star Citizen: Bugsmashers - Episode 31

**Video:** https://www.youtube.com/watch?v=rviZvBdJOUs
**Date:** 2016-08-25
**Duration:** 7:23

## Transcript

[00:16] Closed Captioning provided by the Imperial
News Network.
[00:17] Mark Abent: Oh hello there, welcome to Bugsmashers.
[00:22] Hey everyone, we’re here in fun little environment
with two clients in a multiplayer test and
[00:36] we have a bug in that remote ships are not
moving, they’re calling it a desync issue
[00:43] so if I fly this guy around, weee.
[00:48] We stop him for a moment so I flew a bit,
you’ll see on this client that he’s actually
[00:57] stayed still, nooooo.
[00:58] So, what’s happening.
[01:01] Oh shenanigans, that’s what’s happening…
but for real, so if we have a ship and he’s
[01:10] flying around and then some fun guy in the
Persistent Universe goes, ‘I want that ship’
[01:15] and they get into a dogfight and you know,
the first player explodes into a glorious
[01:21] fireball.
[01:22] He’ll respawn and from then on you’ll
never see the ship move, or other clients
[01:28] won’t except if you wait long enough eventually
it’ll start moving along.
[01:33] What’s happening is the worst thing ever,
so we have a ship, I’m going to use… what
[01:42] shall I use today?
[01:43] I will use this paper notebook.
[01:45] So we have this ship and when we spawn him
in we give him the ID of let’s just say
[01:50] 2, now he flies around and explodes.
[01:56] We need to spawn a new one because well this
guy still wants to dogfight.
[02:00] So we spawn a new ship and we give it the
same ID because why not, I mean keep everything
[02:07] the same so we give him the same ID, we give
him all his loadout information and he spawns.
[02:15] Problem is when this guy spawns on the server,
the other clients may still have the old one
[02:23] around...oh, phone fell… or the old one
is gone but they still are getting packets
[02:29] of information from the original ship.
[02:33] So, IFCS checks to see the last time it has
got a response from the server for any packets
[02:43] coming in and if it gets, you know, say a
tick from the server of 600 but we just died
[02:52] and we’ve resetted our tick it would get
a tick of 600 and it’ll think, ‘oh, we
[02:57] should be at 600, we should be at 600’ but
then our new ship starts sending information
[03:02] and the tick’s going to be at 0-1-2-3-4
and it’s going to be like, ‘wait a minute,
[03:08] our last one was 600, our new one is smaller
so we’re going to ignore all that’ and
[03:14] because it’s ignoring it, you basically
see the remote client just stay still.
[03:20] Not cool.
[03:22] So, for now what we have done are, let’s
just say Sir Paul has done, is he has added
[03:30] a work around that checks to see if there’s
some conditions we can see to restart the,
[03:37] you know, the flight controller again.
[03:41] Here you can see if we’re in the bad server
state because of the aspect bug it will just
[03:46] allow it and get processed.
[03:49] It’s a good work around for 2.5 and let’s
start this up and as this recodes... but it
[03:58] has disclosed a bad thing in our networking
code that we’ll have to take a look at soon
[04:06] but it’s going to be such a big change it’s
too risky for 2.5.
[04:10] You know, it’s pretty bad when you have
a new entity spawn in and it’s getting information
[04:17] from the old system.
[04:19] I mean what happens if you have health of
5 or 10 or you die, you spawn but then you
[04:27] get information that you’re health should
be 0 from the server because it’s from the
[04:30] old system and you die again, not cool.
[04:34] So, there’s going to be some weird oddities
until this gets resolved but this work around
[04:43] will at least allow you to fly until the networking
issue can get resolved which should happen
[04:52] shortly.
[04:53] So, let’s pop up...recodes still going.
[04:55] Take my sip of coffee.
[04:56] All right, recode is gone.
[05:02] I’m going to move my clients, so as you
can see the ship already moved around.
[05:15] Let’s see if we can find him… he snapped
to the correct state, where did you go...
[05:23] oh, there he is, there he is.
[05:26] All right, so there’s the other Argo and
if I go on here you now correctly see him
[05:35] move about, weee.
[05:40] Oh the shenanigans of game design or programming,
same thing, all right.
[05:48] So, we had a fun little issue with, you know,
remote ships just dead stopping.
[05:53] No longer updating when a ship dies and respawns,
it would just stay there and some time later
[05:59] it will just start magically working.
[06:01] It was tracked down by Paul, fun bug because
it just realized a bigger issue we have where
[06:10] if we use the same entity ID on a ship that
we’re… we delete it and spawn a new one
[06:16] with the same entity ID or ID, any old packets
that come in the other clients will start
[06:23] using them so with the flight controller it
checks to see if the server tick is a certain
[06:29] number and if it gets lower numbers it flat
out ignores it.
[06:34] Paul put in a work around to make sure the
ships continue to fly even if it gets some
[06:40] bad information but we’re going to have
to look into the deeper issue because we can’t
[06:46] have the network, you know, sending old information
to new entities from old entities but you
[06:54] know that’s how it is in working on a game.
[06:56] You think you’ve covered something and then
you get a bug that uncovers some crazy other
[07:02] shenanigans.
[07:03] Well, we’ll have to fix it but until next
time I hope you guys enjoyed, bye.

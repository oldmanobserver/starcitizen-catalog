# BUGSMASHERS! Episode 20

**Video:** https://www.youtube.com/watch?v=xpX0_Cmq5tc
**Date:** 2016-03-02
**Duration:** 8:02

## Transcript

[00:09] Closed Captioning provided by the Imperial
News Network.
[00:10] Mark Abent (MA): Hey everyone, welcome to
BugSmashers and I got a joke for you.
[00:13] So what did the bug say to the code?
[00:15] It didn’t, it died …Let's get started!
[00:23] [BugSmashers]
[00:24] MA: Hey everyone, we’re here in fancy dancy
dying star.
[00:31] We’re looking at a fun little multiplayer
bug where I have a client on the left and
[00:36] a client on the right.
[00:38] Now on the left guy, where I’m look at dictates
where I’m shooting, but as you can see on
[00:44] the right, my projectiles are always in the
front.
[00:50] So the client sees one thing and the other
client sees another thing and what is happening
[00:56] here?
[00:57] Shenanigans with multiplayer.
[01:01] As you can see, nothing is getting synced
and it’s a little bit of a problem.
[01:06] All of our weapons, they all zero in on basically
where this origin is on the reticule unless
[01:16] it’s fixed, then it goes to the other guy.
[01:18] However, none of them are actually aiming
towards it on the remote client and well they
[01:25] can’t because they don’t know where that
player is looking.
[01:28] However we have in the … where is my code,
here’s my code.
[01:33] We have something called a weapon controller
and instead of sending network locations for
[01:39] every single one of those guns because we
could have 10 to who knows, maybe 15 in the
[01:45] future?
[01:48] So instead of just sending networks to each
little guy, we just send where the players
[01:53] looking and then that will make all the guns
look at that location.
[01:57] Only problem is, it wasn’t sending the information.
[02:01] So in our weapon controller we have a function
right here which the visor code or where you’re
[02:08] looking at, tells the weapons controller “Hey
look at here” because this is what the players
[02:13] looking at, the local player.
[02:15] This will call update weapons and this will
basically go through all the weapons, cool!
[02:21] Only problem is, it’s not sending the information
to the clients.
[02:25] Now the good news is we have a client aspect.
[02:32] Client aspect means we have some information
for the network that’s going to be sent
[02:36] out by ‘client owner’, the server dictates
who that client is and if that client gets
[02:43] the delegation he’ll send his information
to everyone, if the client doesn’t get the
[02:47] delegation then it will be server controlled.
[02:50] It is client controlled and we have, where
is it, let's check delegation … We should
[03:01] have delegation, yup!
[03:03] We have delegation and if we go into our weapon
controller, it is requesting delegation.
[03:10] So the guy who uses this thing will get delegation
by the server.
[03:14] However, it’s not.
[03:17] So if we go down here, any time we change
our information we’re gonna have to update
[03:23] our network aspect.
[03:25] This is saying “hey, yes we have new information
to send everyone because well, we’re dirty’.
[03:31] So we’ll mark the aspect dirty and it will
flush all the information to the other clients.
[03:40] Now if I were to compile and test this, it
would be broken because there was another
[03:46] issue with this other thing that we have called
the network controller.
[03:52] This is a brand new thing that we’re bringing
to our components, our items.
[03:58] This is going to be a future thing where it
takes control of all of our aspects, you just
[04:03] say: ‘hey, I have some float, or some int,
worry about the sinking for me, don’t worry
[04:07] about setting up aspects or anything crazy,
this will do it’.
[04:11] It’s kind of our replacement for later things
when we get rid of aspects.
[04:19] For now, the only thing you have to worry
about is since the item can only be controlled
[04:27] by one client at the moment because of its
limitation of aspects, which in the future
[04:32] we want to get rid of… if someone else has
requested it, that means this client will
[04:39] never ever update and unfortunately the energy
pipes are using that network controller to
[04:47] request authority only problem is this function
gets called on multiple clients so if you’re
[04:57] the lucky client over here who gets the information
before me.
[05:01] You’ll actually get the authority over the
weapon control which we don’t want right
[05:06] now so that goes goodbye.
[05:09] In the future, you’ll be able to have more
than one but for now we have to stick with
[05:16] our current networking scheme so we get rid
of that and make sure this is changed.
[05:34] So now we have recoded and unfortunately we
have to kind of reset the state because it
[05:41] gave the delegation to another client so we’re
going to hop out of our seat and then hop
[05:49] back in.
[05:51] This will call basically reset all of the
states of the items so when the player actually
[05:58] sits down he’ll get the authority, bam.
[06:01] Let me hold down my magic ALT key, so if I
fire on the bottom you see on the bottom,
[06:09] if I fire on the top, you see it on the top,
if I fire on the right, you see it on the
[06:14] right.
[06:16] Everything has network synced, oh my gosh.
[06:23] I hope you guys liked that little tid bit,
weee.
[06:28] Just blow him up, die!
[06:36] That’s how you win.
[06:39] Alright everyone, as you saw here we had a
little fun networking issue.
[06:44] We have a thing called delegation with our
networking which allows a client to take control
[06:50] of an item and say, “Server, here’s some
information” or maybe send information to
[06:55] other clients, cool.
[06:56] Only problem is you can only have one of those
per item and it’s just not scalable and
[07:03] we’re working on stuff to allow you to have
more delegations.
[07:06] So, maybe we have a power plant some guy is
able to fiddle with these settings while another
[07:12] guy is able to turn it on or change some other
stuff.
[07:16] For right now, only one client can take control
of it and because of that we were using the
[07:22] new scheme on the old system and it just got
wonky so we had to make sure only one guy
[07:28] can take control and then we had to make sure
the final thing is if we do have a change
[07:34] we flush the network and tell everyone about
it.
[07:37] Hope you guys enjoyed and until next time.

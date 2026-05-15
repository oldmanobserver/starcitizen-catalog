# BUGSMASHERS! Episode 18

**Video:** https://www.youtube.com/watch?v=XpTf-tTouy4
**Date:** 2016-01-20
**Duration:** 11:24

## Transcript

[00:00] Closed Captioning provided by the Imperial
News Network.
[00:01] Hey everyone, welcome back to Bugsmashers:
whole new year, same old bugs, well, new bugs.
[00:05] Ah, we’re actually still in the good old
new office, and can hear some construction,
[00:09] don’t mind it, the show must go on, let's
get started *thumbs up*.
[00:19] Hey everyone, welcome to our lovely lovely
test level as you can hear we have good ol’
[00:28] construction noise going, so bare with us,
oh it stopped, and we had a little bug in
[00:36] 2.1.
[00:37] Whereas you can see I can shoot no problem,
cool, but when I go over to my dedicated server,
[00:45] I detach a few things as you can see all my
guns are gone, cool.
[00:50] Now, I’m going to simulate repair so I’m
going to repair all of my guns, now I get
[00:57] ‘em back woo, oh no I can’t fire, nooo.
[01:02] So, you get your wings blown off, your guns
shot up, you go to land on a repair bay, get
[01:10] your guns back and now you can’t shoot ‘em:
why?!
[01:14] So let's take a look to see what was happening.
[01:18] Well, here in our lovely item code we have
this thing called shared item manager.
[01:24] This guy’s job is to basically select a
port on the weapon, so in this case my Hornet
[01:30] and this is my item port for the gun, this
authority basically says if whether or not
[01:37] the pilot or the copilot or the guy in the
back, should be able to use this item.
[01:42] And let's go over to, here we are, this is
our function that gets called when our items
[01:53] get attached.
[01:54] So let's detach all of our guns and simulate
a repair again, oh no the breakpoint didn’t
[02:08] get hit- ah good old- let's try this again.
[02:30] What’s happening.
[02:35] Why..?
[02:38] What is happening...
[02:46] Oh...
[02:49] I broke the vehicle.
[02:53] Alright, coming back from that ... I put in
some debug code and forgot to reset it.
[03:04] Alright, so we’re back here with our weapons,
can’t make it shoot, we detach it, woo goodbye.
[03:18] Now, we’re going to repair everything and
when we get called on this shared item manager:
[03:28] ah-ha!
[03:29] We hit our breakpoint.
[03:30] So now we’re adding that item back onto
the item port because we repaired it.
[03:37] Let's see what happens, so we have an authority,
the authority is basically going to be some
[03:43] logic that indicates if and who should be
using this thing, in this case it’s the
[03:50] pilot.
[03:51] So let's step into there in our current authority
we have an authority we are using, so we just
[03:59] added this thing, we’ve been given the ok
that the pilot should be able to start using
[04:05] this item.
[04:07] So now that we have used it, we’re gonna
go say, “what should we do Mr. Authority
[04:13] Manager?”
[04:15] Since we are the server we are going to check
to see if our authority has changed and oh
[04:24] no our authority is exactly the same, and
because our authority is exactly the same
[04:30] it won’t refresh the state of the item,
so the item for all intents and purposes will
[04:36] never get used, because the item manager thinks
it’s already in the valid state.
[04:41] So, and that’s going to happen to all of
our lovely items, just going to kill the ship,
[04:50] and we’re going to go back.
[04:52] So what we need to do here is under some condition
we need to re-grant the authority, or refresh
[05:05] the item state, and the authority will basically
call start-use.
[05:08] Start-use is, “Hey item, I’m using you,
I’m the pilot.”
[05:13] and then things like from the weapon will
be like “oh, you’re using me, so when
[05:16] I press this button, listen to my attack,
and start shooting, cool.”
[05:22] So we’re going to refresh it, by indicating
that we lost it and then gained it again.
[05:29] So, we’ll lose it and then gain it, and
we need to do this only if we have a valid
[05:44] authority, if we are using, and we have to
have an item on this port.
[06:01] So we have an authority, we have item- oh,
give me my item!
[06:14] And, that item has to point to an actual entity,
the p-item here is just information about
[06:25] the actual entity item, it’s like an extra
bit of memory for our authority and we need
[06:33] to make sure that our item is not used.
[06:51] So when we hit this block of the code and
we have an actual authority piece and we have
[06:58] an actual item, and the item use state is
not equal to the authority use state is then
[07:05] we need to refresh that logic so that we can
actually start-use on that item.
[07:11] Now this is good for the server, but we also
need to do this same bit of information on
[07:16] the client and that’s where this bit of
code happens.
[07:21] So the server will do that information, it
will tell the network to flush and send all
[07:26] that information to the client.
[07:27] Now the client will come here and they’re
going to have the same problem because for
[07:32] all intents and purposes nothing has changed,
however we got a new item on there so we need
[07:39] to refresh everything.
[07:41] So we are going to, “should refresh base
on item.”
[07:49] So we’re going to say that our authority
has changed, even though it hasn’t, so that
[07:55] way we can get the same code setup where it
loses its authority and gains it again, so
[07:59] that way we could refresh our state.
[08:03] There we go, so if we have an authority and
have an item, and it’s not equal to our
[08:09] current use state, we are going to refresh.
[08:13] Alright, so let's give that guy a recode,
oh I love recode.
[08:24] Sippin’ mah’ coffee’, and if this works
out I’ll get my seven quarterly portions.
[08:33] [Tom Hennessy badgering him about his food
portions in the background]
[08:35] I get- do you see this sticky?
[08:40] It says seven- it says seven.
[08:42] Seven.
[08:43] I get seven quarter portions.
[08:47] Alright, so we spawn, we can shoot, and we’ll
detatch everything.
[08:55] Oh no, our guns are gone!
[08:57] Now we’ll simulate repair.
[08:59] Wam.
[09:00] Now I can shoot again, haha!
[09:04] So now, when you get your wing blown off,
your gun blown off, and be able to repair,
[09:10] you can expect that gun to work again just
as it is.
[09:14] This will actually fix another fun issue where
if for some reason we have to detach and reattach
[09:22] during item sterilization.
[09:24] So when you spawn in we have to do a lot of
weird stuff, um sometimes in your standard
[09:29] playing where you initially spawn, you can’t
shoot or use your actual guns or items, this
[09:35] was the cause of that.
[09:36] So this sucker fixed two things, one when
you repair and add everything back you can
[09:42] shoot again, and during the initial spawn
sometimes you guns wouldn’t work.
[09:47] So two for one, I think that’s worth seven
shekels or quarterly portions.
[09:52] Seven!
[09:53] Alright.
[09:54] (DiscoLando creeping behind the monitor while
they joke around regarding the noise levels.)
[10:05] Alright, so hope you guys enjoyed this bug.
[10:08] It was a little fun thing with our item authority,
you know when you detach and reattach it was
[10:15] just like, “hey!
[10:17] you’re in the same state!
[10:19] I’m not going to reset you, everything’s
good,” but in reality it didn’t call start-use,
[10:26] so you couldn’t actually use the guns, couldn’t
use the items.
[10:29] So we fixed that bad boy up, and it fixes
your weapons when you repair and when you
[10:34] initially spawn in, so everything’s good
to go.
[10:36] Hope you guys enjoy and I hope you guys destroy
things, repair, and get your quarterly portions.
[10:43] It’s worth seven.

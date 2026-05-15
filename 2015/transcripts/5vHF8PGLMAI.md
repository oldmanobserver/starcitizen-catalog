# Bugsmashers! Episode 15

**Video:** https://www.youtube.com/watch?v=5vHF8PGLMAI
**Date:** 2015-11-18
**Duration:** 10:53

## Transcript

[00:00] hey everyone welcome back to all new
[00:02] exciting bug Smashers uh we're going to
[00:04] do things a little bit differently we're
[00:06] going to do things in
[00:08] 3D right no mark That's not how 3D works
[00:13] damn it Randy
[00:16] no all right back to
[00:22] Wy bug
[00:24] [Music]
[00:26] species hey everyone we're here in a fun
[00:29] little test level um actually this is
[00:33] going to be the next uh what do you call
[00:35] it SC
[00:37] 2.000 fun map that you guys will get to
[00:39] play and we have a fun bug where the
[00:43] thrusters stop working after you get in
[00:46] the ship fly it for a bit and then get
[00:50] out of the seat and go back into the
[00:51] seat so we are going to try to replicate
[00:54] that bad boy right
[00:56] now and we are in a local multiplayer
[00:59] server so as as I get into my seat I can
[01:02] see my fun dedicated server I'll hide
[01:04] him off to the
[01:07] side grabs his little
[01:10] joystick wait for all the fun little
[01:13] sequences so much cooler in
[01:17] 3D Randy was wrong
[01:22] so all right we're going to fly up a bit
[01:26] move
[01:26] forward as you can see I could move all
[01:30] way around all right let's hop back out
[01:32] of the seat and see what
[01:33] [Music]
[01:43] happens we need like a super hyper State
[01:46] animation for that oh crap Pirates are
[01:49] coming we got to get in the seat fast
[01:52] one
[01:54] day oh no I'm getting shot but I got to
[01:57] turn on all this stuff first and grab my
[02:00] joystick all right so now as you can see
[02:05] trying to move around I know my ship
[02:08] doesn't work
[02:11] no so if I actually turn
[02:15] on mystical pipe
[02:19] system let's this a little bit more
[02:22] readable you'll notice that um all these
[02:26] green things in the power none of them
[02:30] well I should say there's a bunch of
[02:31] items turned on but none of them are in
[02:33] my thrusters so what's happening is when
[02:35] I get into the seat the first time I'm
[02:38] able to use the thrusters and it'll
[02:39] actually show up in this thing and then
[02:42] when I get out of the seat and back into
[02:43] the seat I no longer am able to use the
[02:46] item and as such you don't see them in
[02:49] the um the power request so if I turn
[02:52] off I'll leave that on and we'll go into
[02:55] we call it the shared item
[02:58] manager this bad boy is in charge of
[03:01] saying hey if you sit down in this seat
[03:04] you're going to get access to this item
[03:06] this item this item and this item and
[03:08] it's all controlled by the server so if
[03:09] a sneaky client's like I should get this
[03:11] server will be like nope so when we get
[03:14] a packet from the the server um we'll
[03:18] run through this bit of logic and this
[03:21] is the information we get from the
[03:22] server what's our Authority do we have
[03:26] authority were we denied were we given
[03:29] it was cancelled and the mystical is
[03:32] selected um this selection is basically
[03:35] all right I have the authority now I
[03:37] could actually use the item so if I have
[03:40] ownership of the Thruster I used the
[03:42] Thruster now the Thruster is on and if
[03:45] you you could toggle the Thruster on and
[03:47] off by using it or selection so uh I can
[03:50] turn off the Thruster turn on the
[03:51] Thruster so the selection is basically
[03:54] onof um and when we get or change our
[03:58] Authority or if we change change our
[04:00] selection it will deselect it change the
[04:02] authority and reselect the item if it
[04:05] needs to be and what's happening is when
[04:08] we get out of the seat um we'll get a
[04:11] packet saying hey we're no longer
[04:14] selected and we were selected so we're
[04:16] going to do our deselection cool and it
[04:19] changes the authority getting lost and
[04:21] we don't select it again because well we
[04:23] lost it when we finally get out of the
[04:26] seat The Authority now goes back to
[04:30] um no longer the the owner or the actor
[04:34] it goes back to just being the default
[04:36] thing and what happens is the selection
[04:39] gets stuck it gets set to turn on by
[04:44] default and because it was off and now
[04:47] it's on it gets turned off but then
[04:50] since I left it it still set it's turned
[04:53] on so the selection is still stuck so
[04:58] when I sit back in and this is set the
[05:01] true I never get my selection the client
[05:04] is effectively stuck and where the
[05:07] selection is set the true so what we
[05:10] have to
[05:11] do is instead of
[05:14] serializing the
[05:16] selection cuz yes it may have changed on
[05:19] the server but the client we have we
[05:21] don't want to change it until we have
[05:23] done our selection process so I am going
[05:26] to say hey we're going to store
[05:33] off um we're going to go hey server
[05:37] instead of writing directly into the
[05:39] variable we are going to store it for
[05:44] now and that way we could say hey we
[05:47] were selected and if the server changes
[05:50] it we're not going to change our client
[05:52] state yet until after we have done the
[05:54] thing so that way if the server changes
[05:57] it we we could call the thing correct IR
[05:59] ly so we get changed or anything the
[06:02] client could replicate things so if we
[06:05] don't have an authority so this would
[06:07] mean like uh if we have a turret and
[06:09] we're connecting and for some reason we
[06:11] got our lasers before our turret and
[06:13] it's not in yet we have to put in kind
[06:16] of in a pending list that's what this
[06:17] guy is and fortunately for us the
[06:20] pending stuff will directly cost the
[06:23] selection or not based on this variable
[06:26] so we could just assign it to whatever
[06:28] the server has told
[06:30] us basically it works as what it what
[06:33] has been doing before now um if we're
[06:37] going to do a d selection we want to
[06:39] check what the server is telling us
[06:42] instead of our own
[06:43] State and if we have changed now we
[06:47] change our client
[06:49] State
[06:51] bam we have deselected now we have to do
[06:55] the same thing for the server woo
[07:00] up and we'll change this to our fancy
[07:04] Dancy level or our
[07:06] variable bam so now um when the client
[07:10] gets the server information it won't
[07:12] directly write into that variable
[07:15] instead we will
[07:17] check to see what the client has done
[07:20] assuming we actually have um an
[07:23] basically an authority The Authority is
[07:26] you know the actual um the play player
[07:30] you know sitting down in the seat it's
[07:32] like he you sit here you get this this
[07:34] and this so now that we have the
[07:37] selection and we're making sure that we
[07:39] only set the selection when we have an
[07:41] authority we are going to compile and
[07:45] see what
[07:49] happens recode all right so as you can
[07:52] see in our green little um output that
[07:55] we have here we have no
[07:57] thrusters and when I get off the seat it
[08:00] removed all the pipes because we're not
[08:03] using the thing anymore
[08:06] cool up he'll get up from the
[08:10] seat and then we'll sit down
[08:15] again and once he has seated down we
[08:20] should get all the fun
[08:26] stuff bam I have gotten all the
[08:31] things and
[08:33] now I could
[08:35] fly
[08:38] whoa let my ship figure itself
[08:41] out there we go actually funny
[08:48] enough we only
[08:51] have oh we have quite a few thrusters
[08:53] you can see them here popping in and out
[08:55] as you use the thrusters they'll make
[08:57] heat in this case I'm looking at the
[08:59] heat pipe so but you can see I'm
[09:01] actually flying and everything is
[09:03] connected so we are good to go woo all
[09:07] right uh to recap uh we had a little
[09:09] problem with our item system Authority
[09:12] where the client would get locked into a
[09:15] state of hey you use this item and it
[09:19] would never change it so then when a new
[09:21] guy popped in it wouldn't give you
[09:24] access to you know your thrusters
[09:26] because it was still in the selected
[09:28] state and what I had to do was clean
[09:31] that up a bit so when you get out of the
[09:33] seat it makes sure to set the selection
[09:35] the false and then when you get back
[09:37] into the seat it actually now populates
[09:39] it as true and allows you to do the
[09:41] selection
[09:42] deselection and unfortunately this has
[09:46] never popped up until we got into these
[09:48] bigger maps and we're starting to see
[09:50] some fun little things because we're
[09:52] networking a lot of stuff in these huge
[09:54] Maps so we're getting all these fun
[09:56] little issues that have been around but
[09:59] they're more dominant in these big mapss
[10:01] which is kind of cool because we get to
[10:02] actually fix these things rather than
[10:04] them being you know minute instances
[10:07] that one guy gets but no one else gets
[10:10] so it's pretty cool a little frustrating
[10:13] but we're getting there hope you guys
[10:14] enjoyed till next
[10:16] time this video made possible by the ICC
[10:19] Stellar surveyors and subscribers like
[10:23] [Music]
[10:28] you
[10:30] [Applause]

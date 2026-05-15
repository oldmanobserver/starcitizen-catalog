# Star Citizen: Bugsmashers! - Turret Trouble

**Video:** https://www.youtube.com/watch?v=usf7oYdglcY
**Date:** 2017-06-14
**Duration:** 8:17

## Transcript

[00:06] [Music]
[00:16] Hey everyone, welcome to Bug Smashers.
[00:18] I'm your host Mark Abit. Let's take a
[00:20] look at some
[00:24] bugs. Bug Smashers.
[00:29] Hey everyone, we are here in the fun
[00:32] little test level for the SC item 2.0
[00:36] constellation. And what we see here is a
[00:39] list of all the items and their
[00:42] individual components. Um, so with the
[00:46] item 2.0 infrastructure, we could have
[00:49] uh some entity like my hand, and it
[00:51] could be composed of physics, it could
[00:53] be composed of an item, it could be
[00:54] composed of a power plant, a weapon
[00:56] system, or even a seat. So, all five of
[00:59] those components basically make our
[01:01] entity. And in the case of uh this
[01:04] constellation, we have a turret. And
[01:07] this bad boy is composed of a bunch of
[01:11] components. And this is our whole new
[01:14] item 2.0 entity 2.0 system where we have
[01:18] our turret, which is an item. It has
[01:20] these individual components, geometry,
[01:23] physics, animation, and our actual item
[01:25] logic. So we have here a dashboard. Uh
[01:28] this is the thing that we will see in
[01:30] front of you that has all the screens.
[01:33] It has a turret params. This is the
[01:35] thing that you need to move and rotate
[01:37] uh this guy around. He has a seat. This
[01:40] is basically the interface to uh the
[01:42] ship saying, "Hey, I am a person sitting
[01:45] in here. Give me control of stuff." And
[01:47] then finally, we have the weapon
[01:49] controller. This allows you to be able
[01:51] to shoot stuff. So ideally when you plop
[01:54] one of these down into a ship, you could
[01:56] get in it, play some animations, gain
[01:59] control of some awesome weapons, and
[02:02] let's see what happens. So I am going to
[02:04] sit down, fast forward all the
[02:09] animations. And as you can see, um, some
[02:12] of this debug text is kind of turned a
[02:15] different color. So we have, um, an
[02:18] editor player which is basically in
[02:20] blue. That's me. I just sat down in the
[02:22] seat and he's gained control of you can
[02:26] see right above the read me uh replace
[02:28] me ball. I've gained control of the
[02:30] seat, the turret and the weapon
[02:32] controller. So all these components that
[02:34] I have in here, I've gained control of
[02:36] them except our weapon controller has
[02:40] not gained any weapons. So where are our
[02:45] weapons? They should
[02:47] be There they are. So, we have this
[02:51] weapon gun that's on the hard point of
[02:54] the turret, but unfortunately, we're not
[02:57] gaining control of anything. That's on
[02:59] the very far right. We have turret right
[03:01] and turret left. So, what's happening?
[03:05] Well, let's take a look even further.
[03:08] Um, so here's our ship XML. This
[03:11] basically says, "Hey, here's everything
[03:13] you need to know about a ship." And we
[03:15] have these things called controller defs
[03:17] blocks which basically define um some
[03:20] set of parameters of who is going to
[03:22] control what. So for this seat when a um
[03:25] user sits down he'll take control of the
[03:27] turret itself. Um and
[03:31] then we he will also be able the turret
[03:34] itself will also take control over
[03:37] itself. Again, it's kind of weird, but
[03:39] the way that the code is set up is
[03:44] um this user defaf is basically the
[03:47] seat. So, when the player sits down,
[03:48] he'll gain control of the seat. And then
[03:50] it's usable. Um since the seat now says,
[03:54] "Hey, this person has got in. What else
[03:56] could he can control?" That's the second
[03:58] block. And then he'll be able to control
[04:00] basically his dashboard, his turret, and
[04:03] even his weapon controller. That's why
[04:05] it's kind of set up this way. The reason
[04:07] why it's also set up this way is because
[04:09] yes, you could have these components all
[04:12] built in the item, but you could
[04:13] actually separate them out and have them
[04:15] um subcomponents underneath connected um
[04:18] item ports. So, it's kind of a weird
[04:20] setup because the system allows you to
[04:22] be very
[04:23] flexible. And this turret has
[04:26] um uh we go back to this guy. We have an
[04:32] item which has some item
[04:34] ports and those item ports. We could set
[04:39] up a gun and we could also set up
[04:41] another gun on the other item
[04:45] port. So on these item ports we have
[04:49] some weapons, but unfortunately we're
[04:50] not getting control of them. Why? Well,
[04:53] um let's go back here. as you're saying
[04:56] that we set up these um priorities of
[04:59] who could gain control based on these
[05:01] things called controllable tags. And
[05:03] when we snap um these weapons on it,
[05:07] well, we're not gaining anything. As you
[05:09] can see, we're looking for these weapon
[05:11] guns, but we only take control of them.
[05:13] So, by default, we have no control
[05:15] unless they have the tag uh the lower
[05:18] turret tag. So, we've assumed that these
[05:21] weapons that attach on to us are going
[05:22] to have the same tag as us.
[05:24] unfortunately don't. So, let's make sure
[05:27] that that happens. And the reason we
[05:28] want to do that is so that if we have
[05:30] the same turret copied and pasted in a
[05:32] few spots, all we have to do is set the
[05:34] tag here and then everything underneath
[05:36] gets it. So, in the code, whenever we
[05:40] add this um new component, so we don't
[05:43] do things entity levelwise, we do things
[05:47] component-wise. So, when each of these
[05:49] get attached, we handle them
[05:51] independently. So, we don't care if
[05:53] they're on another entity or all in this
[05:54] guy. We basically get the item port and
[05:57] get its tag and then we use that. But,
[06:00] as you can see, the weapons are on we
[06:03] have the weapons and then the um turret.
[06:05] They're attached onto it. So, there's
[06:07] nothing to describe what flags or tags
[06:10] that these guys should have. So what we
[06:12] can do is enable this bit of
[06:15] code and as recode runs what this will
[06:18] say is if we are not directly attached
[06:21] to the ship that means we're going to go
[06:23] all the way up to our parent. So for
[06:25] this weapon we're going to go to the
[06:26] parent we're going to get its tag and
[06:29] use that. So what this will allow us to
[06:32] do is those weapons that get attached we
[06:34] use this tag so that the weapon
[06:36] controller could gain control of them.
[06:40] So, we'll let Recode do its thing and
[06:43] I'll sip some
[06:46] coffee. Aha! Recode has done its thing.
[06:50] We're going to snap out of the
[06:52] turret. Fly back up to the
[07:01] top. We're going to enter again. Fast
[07:06] forward. Now we got gained control of
[07:09] everything again. Now see if we gain
[07:12] control. Yep. And now we have gained
[07:14] control of our weapons so we can fire
[07:16] them as we please. Pew pew
[07:20] pew. Well, hope you guys enjoyed this
[07:22] sneak peek. Till next time. So, as you
[07:25] guys saw, we had a fun little bug where
[07:27] we have these new setup with the turrets
[07:29] where they're all mashed together and
[07:30] we're just adding a bunch of components.
[07:32] We slap it on the seat and we only get
[07:35] control of the seat. None of the
[07:36] weapons. We can't even get control of
[07:38] the dashboard, so we can't get out. It
[07:40] was simple as making sure that we add
[07:42] tags to each into those components. So
[07:44] when we slap it on, we sit down, we take
[07:46] control of ourselves, and then we can
[07:48] get in out as we please, shoot all the
[07:50] weapons, and have a good time. Hope you
[07:52] guys enjoyed. Until next
[07:53] time. Thank you for watching. So, if you
[07:56] want to keep up with the latest and
[07:57] greatest in Star Citizen and Squadron
[07:58] 42's development, please follow us on
[08:00] our social media channels. See you soon.
[08:09] [Music]

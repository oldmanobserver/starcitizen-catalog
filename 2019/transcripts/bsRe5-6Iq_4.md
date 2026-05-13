# Inside Star Citizen: Weird Science | Summer 2019

**Video:** https://www.youtube.com/watch?v=bsRe5-6Iq_4
**Date:** 2019-08-15
**Duration:** 8:13

## Transcript

[00:05] Visual effects. If props are what make a
[00:08] place seem lived in, then VFX are what
[00:10] can make them seem alive in the very
[00:11] first place. And recently, team members
[00:13] have been working with signed distance
[00:15] fields to improve the way that particles
[00:17] in any environment react to everything
[00:19] from asteroids to many background
[00:21] structures like space stations and
[00:22] vehicles. It's a technology that can
[00:24] have far-reaching applications in the
[00:26] way our player characters interact with
[00:28] any environment, and it's just one more
[00:30] way we're working to make Star Citizen
[00:32] into a living, breathing universe.
[00:36] Today, we're going to look at some
[00:37] improvements to the particle system, and
[00:39] that's some general improvement that
[00:41] applies to to particles through all
[00:43] areas throughout the game.
[00:45] I'm going to start off with showing off
[00:46] some collisions.
[00:48] And as you see here, this is the old
[00:50] particle collision functionality we had.
[00:52] As you can see, the particles are just
[00:54] going straight through the ship, and it
[00:56] doesn't look very convincing. What we've
[00:58] done now is that we can take set buffer
[01:01] collision,
[01:02] height map collision, and SDF, and
[01:05] combine these all. So,
[01:07] combining these three can create very
[01:09] convincing-looking collision. So, now, I
[01:12] combine this set buffer collision with
[01:14] SDF collision.
[01:16] And as you immediately see, it looks
[01:20] pretty convincing from
[01:22] all angles.
[01:24] In the particle shaders, we have a
[01:26] fairly accurate physics
[01:29] computation. We bring in the law of
[01:31] aspects such as
[01:32] drag and friction, and particles can
[01:36] bounce a couple of times, and then they
[01:38] transform into a sliding motion. So, we
[01:41] try to be as physically accurate as we
[01:44] can within still being good performance.
[01:48] Uh
[01:48] we can increase the
[01:51] count of the particles if we want.
[01:54] If I disable the SDF again,
[01:56] well, we get back to this situation.
[02:00] Now we're going to look at the different
[02:01] scenario and in this this case we're
[02:04] going to showcase how the different
[02:06] elements of collision comes together and
[02:09] and what each element contributes to the
[02:12] overall visual. So I will start off by
[02:15] enabling collision and as you can see
[02:17] it's
[02:18] bounces quite convincingly the movement
[02:21] but it's not a very complex effect. I
[02:24] will start by adding
[02:27] some effects that will play
[02:30] upon each collision event. Yeah, as you
[02:33] see now it's will
[02:35] spawn these sparks. This will give
[02:37] better sense of particles and actual
[02:40] impact. Yet the main particle it sort of
[02:43] comes just to to straight stop.
[02:46] So I'm going to add some slide
[02:49] to the movement
[02:50] when it it reaches
[02:52] Looks still looks a little bit odd but
[02:54] when it when it lands.
[02:56] So I'm going to give it some effects
[03:00] that plays when it's
[03:04] Yes. Add some slide. As you can see
[03:08] this is a much more interesting looking
[03:11] effect.
[03:12] The main particle collides with the
[03:13] environment it will shoot out sparks
[03:15] from the collision's position and when
[03:17] it hits the target it will eventually
[03:19] after a couple of bounce transition into
[03:21] a sliding motion and while it slide it
[03:23] will also emit a trail afterwards in its
[03:26] wake.
[03:28] And this technology will apply to all
[03:30] areas of the game and this is something
[03:33] we continuously work on so I hope we
[03:34] should be able to showcase this some
[03:37] more in the future.
[03:38] So chemical reactions which are the
[03:40] process in which two or more substances
[03:42] act mutually on each other and are
[03:44] changed into something different. Like
[03:46] exothermic reactions which I frankly I
[03:48] studied before they were cool.
[03:51] You know what the worst thing about
[03:52] doing chemistry jokes is?
[03:54] No reaction.
[03:56] Chemistry puns, really in my element.
[03:59] You can close the door, it's fine.
[04:00] Recently, members of our audio team
[04:02] traveled to Jönköping, Sweden to record
[04:05] the sounds of chemical reactions that
[04:06] can be applied to a multitude of uses
[04:08] within Star Citizen.
[04:12] In April of 2019, the Cloud Imperium
[04:15] Games audio team traveled to Sweden to a
[04:18] small, unassuming chemistry lab in
[04:21] search of some really cool sounds.
[04:26] Together with our friends from Pole
[04:27] Position Productions, we spent a day
[04:30] recording a bunch of crazy chemical
[04:32] reaction sounds to use in Star Citizen
[04:35] and Squadron 42.
[05:26] Lastly, before we let you go this week,
[05:28] in last week's Sprint Report, we gave
[05:30] you a playful look inside the current
[05:31] progress of the Anvil Defender and
[05:33] promised we'd follow up on it in the
[05:35] coming weeks. And uh because you
[05:37] suffered through my chemistry jokes,
[05:39] we're just going to go ahead and let
[05:40] these exotic alien visuals speak for
[05:42] themselves.
[06:47] So, what did we learn this week? We
[06:48] learned that the VFX team is making
[06:50] space magic that looks great and is less
[06:52] resource intensive. That chemistry jokes
[06:54] are a good way to get a
[06:56] overreaction
[06:58] especially in the YouTube comments.
[06:59] And that the Banu Defender just looks
[07:01] rad as all get out. To our subscribers,
[07:03] be sure to check out the six new Life in
[07:05] the Verse t-shirts that were introduced
[07:07] as part of this month's in-game flare
[07:08] reward. The character team was super
[07:10] excited to work on them for you. And to
[07:12] all the Star Citizens out there that
[07:14] make all this possible.
[07:15] Of course, we'll see you next week.
[07:53] Thanks for watching. For the latest and
[07:54] greatest in Star Citizen and Squadron
[07:56] 42, you can subscribe to our channel or
[07:58] you can check out some of the other
[07:59] shows. And you can also head to our
[08:01] website at
[08:02] www.robertsspaceindustries.com.
[08:06] Thank you very much for watching.

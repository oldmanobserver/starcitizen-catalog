# Star Citizen: Bugsmashers - Helmet Lights

**Video:** https://www.youtube.com/watch?v=YKiGcOQ4wAE
**Date:** 2017-09-13
**Duration:** 18:59

## Transcript

[00:06] [Music]
[00:15] hey hey no after you after you
[00:19] ayuh know what welcome to bug smashers
[00:21] we have a new episode today just right
[00:25] right no we actually don't need him and
[00:26] don't you know I'm done I got a helmet
[00:30] light that we're gonna try to fix me you
[00:31] don't wanna see that helmet light sorry
[00:33] if it's too busy with other bugs
[00:34] apparently just smash them too many bugs
[00:36] so I'm gonna try to smash one or at
[00:39] least try this match winner
[00:41] try mark is so swarmed with bugs that I
[00:54] am going to try to help troubleshoot
[00:57] some bugs for him but I'm gonna take
[00:59] more of an artist approach at it so it
[01:00] should be terrifying and interesting so
[01:03] I'm gonna go ahead and open up a build
[01:05] right now and what should be happening
[01:07] is the characters should have a light
[01:10] inside of the helmet illuminating their
[01:13] face but I heard that that's problematic
[01:16] at the moment so let's see exactly
[01:17] what's going on let me jump in the game
[01:20] and now I'm going to load a character
[01:30] let's try player1 armor and let's switch
[01:37] the lighting so we can kind of see it up
[01:41] already that looks to be a problem we
[01:44] have a light spawning at zero zero zero
[01:48] and let's take a look at the character
[01:52] Oh yep that's definitely a bug
[02:00] so it looks like we have a light that's
[02:03] supposed to be spawning on the
[02:05] characters helmet but it is missing the
[02:07] bone attachment and is going straight to
[02:09] the root of the character at 0-0 in
[02:12] addition it's also spawning a zero zero
[02:13] so since it's an entity I'm going to go
[02:16] ahead and open up data Forge and take a
[02:19] look exactly what the item is doing and
[02:21] how it's calling the light all right
[02:24] looks like we got data Forge open so
[02:26] let's take a look at this item so I'm
[02:29] going to go ahead and navigate to the
[02:32] helmet item entities SC item characters
[02:40] human armor light helmet light helmet
[02:48] and this character is the Explorer so
[02:52] let's go ahead and open up the
[02:53] components and let's see what we find
[02:57] and there we have an effects that's
[03:00] depreciated by opening this effects pram
[03:04] we have a light that's enable so it
[03:09] looks like we are switching over to a
[03:10] new system we were going from the
[03:12] effects system to the entity effects
[03:14] system which I imagine the entity
[03:16] effects system has more options it plays
[03:18] better with the other disciplines and
[03:20] the other items in in the scenes so
[03:23] probably has a lot of good gameplay
[03:26] options as a result to this new system
[03:29] so I'm going to go ahead and delete the
[03:30] old system that's labeled depreciated
[03:33] and let's see if that's what's causing
[03:34] the bug
[03:38] let's go ahead and save the change
[03:43] alright now let's jump into the game and
[03:45] see if our changes took effect and it
[03:47] fixed our bug
[04:10] let's go ahead get the lighting a little
[04:12] darker so we can see what we got and I
[04:16] am no longer seeing a light spawning at
[04:22] zerozero and I'm no longer seeing a
[04:24] light spawning at world zero zero so
[04:26] looks like this has been resolved now
[04:30] I'd imagine that they don't just want
[04:32] the light to be spawning at zero zero
[04:35] and they don't want the light to be
[04:36] spawning at 0 zero in the world they
[04:38] want the light on the players face on
[04:40] the players helmet so let's go ahead and
[04:43] go back into data Forge
[04:44] and let's see if we can actually get a
[04:46] light to properly spawn all right now
[04:49] let's go ahead and take a look at the
[04:51] entity and let's see what options we
[04:54] have for this new entity effects
[04:55] component so I'm gonna go ahead and open
[04:58] this up and there we go there's a light
[04:59] entity effects and it looks like we can
[05:02] add a new tag and now we have an old
[05:08] bone so I think the best way to approach
[05:11] this is to actually have a slot
[05:14] attachment that is directly tied to a
[05:17] joint location on the helmet luckily
[05:19] we're already prepared for this so what
[05:24] we've done is we've created a bone rig
[05:26] that actually shows up on the character
[05:29] loads and runtime and then we can attach
[05:32] the light so we've created this little
[05:33] rig here we have a floodlight on the
[05:36] side of the head we have a floodlight on
[05:38] the front top and we have a light coming
[05:41] from the bottom which will be our
[05:42] primary direct light then we have two
[05:46] little side lights that we can use is
[05:48] like paneling or whatnot
[05:50] alright so I'm gonna go ahead and see if
[05:52] we can get these things actually working
[05:54] in the game
[05:55] alright so under the entity slot
[06:00] attachment let's go ahead and select a
[06:03] character bone attachment and under the
[06:07] character bone attachment let's go ahead
[06:11] and paste one in so looking at the
[06:18] diagram here
[06:22] I think a great place to start is this
[06:24] primary light right here which is bottom
[06:26] light Oh for so attachment Oh for is
[06:29] what we named the bone all right so
[06:32] let's go ahead and just drop in a
[06:34] temperature we've got a diffuse
[06:36] multiplier let's go ahead and give it a
[06:39] name I'm gonna name it the same as this
[06:42] file so bottom light Beaufort
[06:53] cool cool let's go ahead and enable
[06:56] let's go ahead and save
[07:06] now the beauty of having the actual bone
[07:08] attachment means we've already somewhat
[07:11] rotated the the bone position and
[07:14] already have done the translation for
[07:16] the position which means that we should
[07:17] just be able to spawn it it'll pop up
[07:19] approximately exactly what we already
[07:21] wanted so the editing will be very
[07:24] minimal if any at all all right so let's
[07:29] go ahead and jump in and see if we can
[07:31] see a light
[07:56] and I see something that's a good sign
[07:59] hey check that out we got a helmet lied
[08:02] so what's happening right now is the
[08:05] light is actually a point light which
[08:07] means that it's projecting in six
[08:09] directions which means that we're gonna
[08:14] have to give it a directional so let's
[08:17] do try to texture projection so it only
[08:20] shoots one direction and then it will
[08:21] have it kind of this ghostly coming up
[08:23] from the bottom right there so let me
[08:27] jump out a game all right
[08:31] let's jump back into dataforge and I'm
[08:35] gonna change the point light to a
[08:37] projector light open that up and now we
[08:42] have a texture Pass so I'm going to use
[08:44] a mask to have a bit more control over
[08:47] the direction that it's going
[08:48] so let's just do a general spots we
[08:52] probably don't need a four meter radius
[08:54] so let's go ahead and turn that way down
[08:56] to point two let's give it a nice little
[09:00] viewing frustum so let's crank this up a
[09:03] little bit it's gonna look 120 140 we'll
[09:07] leave the light default for now and
[09:08] let's turn down the multiplier quite a
[09:11] bit so let's go I don't know
[09:13] point one
[09:17] let's go ahead and turn on a shadow
[09:18] Kassar and let's give this a try
[09:31] all right so let's jump back into game
[09:33] and let's see if our texture projection
[09:34] is working
[09:41] get them that nighttime lighting load up
[09:45] her character and it looks like I'm not
[09:49] seeing the bright light anymore
[09:52] rotate around hey hey look at that
[09:57] we have a light now coming from the chin
[10:00] alright so the next thing I'm going to
[10:02] do is I'm going to turn on this two side
[10:03] lights as we see in our example we got
[10:11] bottom light oh five and bottom light oh
[10:13] six which will kind of be nice I'll do
[10:16] like kind of a subtle splash I'm not
[10:17] gonna enable shadows I think that the
[10:19] budget probably only permits for one
[10:21] shadow caster then maybe we could turn
[10:26] on a nice floodlight so let's take a
[10:27] look at this jump over here go ahead and
[10:35] jump out a game
[10:39] and
[10:45] we have a total of six lights so I'm
[10:48] going to go ahead add six we don't have
[10:49] to use them all but might as well set up
[10:51] the item in case the artist wants to
[10:57] and I'm gonna go ahead and add all of
[11:00] the ensure that they're all projectors
[11:04] and ensure that they're all bone
[11:07] attachments and then one by one I'm
[11:13] gonna go ahead and
[11:18] add the mod of the same
[11:47] all right now that we got them all set
[11:49] up let's go ahead and save and see if it
[11:51] worked
[11:53] all right we're back in the editor we
[11:55] have our six light entity set up in data
[11:58] Forge and let's see if they can be
[11:59] enabled now jump into game
[12:07] let's get that nice nighttime lighting
[12:10] that we like
[12:24] all right nothing weird happening rotate
[12:29] around and it looks like all of our
[12:32] lights are indeed working it looks a
[12:35] little weird right now but that's just
[12:36] because we need to polish them and if I
[12:39] jump over here and get back into
[12:41] dataforge let's get a little crazy
[12:49] let's see if this will actually update
[12:51] in real time look at that that is
[12:56] awesome
[13:07] all right so I got an idea since it
[13:09] updates in real time we can now actually
[13:11] go on to the lighting polish path we've
[13:12] got them all on we got on while working
[13:14] but it looks super funky it looks super
[13:16] weird so now let's actually give the
[13:18] lights and proper settings and dial
[13:20] everything in and then close out this
[13:22] bug all right so it looks like someone's
[13:25] picking me up I'm gonna go ahead and run
[13:27] towards it and maybe have this person
[13:31] take me to space so I get a nice dark
[13:33] environment to finish up the helmet
[13:34] lights all right now that I'm in let's
[13:38] go ahead and uh who's that a mystery
[13:42] pilot can we can we take off please
[13:49] and while we're taking off I'm gonna go
[13:51] ahead and work on this helmet lighting
[13:56] alright let's go ahead and
[14:00] jump over and there's our lighting
[14:04] freaking out it's going to recalibrate
[14:06] this there we go okay cool so I'm gonna
[14:10] go ahead and jump over to dataforge and
[14:12] I think what we would like to do go
[14:23] ahead and reinitialize that all right so
[14:25] let's start with the bottom light that
[14:26] seems to be kind of the most important
[14:27] there we go
[14:28] it looks kind of cool let's go ahead and
[14:30] put a little bit or radius on there
[14:41] too bad
[14:43] see if we can do a little bit of
[14:45] rotation
[14:56] cool cool all right now let's go ahead
[14:59] and turn on some of those fill lights
[15:04] let's try the bottom left
[15:15] right
[15:20] the song
[15:22] on
[15:24] let's turn those weighed we just want
[15:26] this so
[15:34] all right cool let's go ahead and turn
[15:36] on that primary flood
[15:45] all right so we've got the side it's go
[15:47] ahead and once again turn that way down
[15:50] cool
[15:54] go ahead and do this
[16:00] very nice now I think that this is a
[16:02] little too close so I'm gonna go ahead
[16:04] and back this up here
[16:18] [Music]
[16:30] just kind of splash across the face a
[16:32] little bit
[16:42] very nice
[16:44] cool and let's go ahead and turn this
[16:46] down and we got ourselves some helmet
[16:53] lighting it's not the best but you know
[16:55] it's something all right so is that it
[16:59] over this seat there
[17:22] I think we got ourselves a marky-mark
[17:28] one day I'll get a light oh I'm sorry
[17:31] bud
[17:31] no lights for you so we had a little fun
[17:37] helmet light bug there and for us
[17:40] how'd it go oh good we I believe we
[17:43] smashed the bug as you would say so the
[17:45] light was spotting at zero zero on the
[17:48] characters route probably because it
[17:49] wasn't finding the bone attachment and
[17:51] drawing straight down and then it was
[17:52] also spawning at zero zero in the world
[17:54] so we went into dataforge and we found a
[17:57] depreciated effect system removed that
[18:00] right out lights were gone everything
[18:02] working good and then we added our new
[18:04] entity effect system new and revised and
[18:08] awesome so we added some lights through
[18:10] that system and attach them to the
[18:13] helpers for the helmet and now the
[18:15] character headlights we jumped into the
[18:17] quiet tested them off with a black tee
[18:20] player but I didn't have lights but
[18:23] that's another story
[18:24] that was intentional well I hope you
[18:28] guys enjoyed until next time thank you
[18:30] for us
[18:31] you did a wonderful job oh and until
[18:33] next time guys see you thank you for
[18:36] watching so if you want to keep up with
[18:38] the latest and greatest in the star
[18:39] citizen the squadron 42 development
[18:41] please follow us on our social media
[18:42] channels see you soon
[18:51] [Music]

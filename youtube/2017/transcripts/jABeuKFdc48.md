# Star Citizen: Bugsmashers! - Out of Body Experience

**Video:** https://www.youtube.com/watch?v=jABeuKFdc48
**Date:** 2017-04-12
**Duration:** 8:14

## Transcript

[00:06] [Music]
[00:16] hey everyone welcome to bug Smashers I'm
[00:18] your host Mark aent I'm a gameplay
[00:20] programmer here at caga and I'm here to
[00:22] show you the
[00:27] bugs bug bashes
[00:32] hey everyone uh we have quite of an
[00:34] interesting bug today um I am going to
[00:37] actually show you guys the video before
[00:42] I even get into the game I think you
[00:44] guys might like this
[00:47] one
[00:48] so let's pause it what's happening is in
[00:52] Star Marine if you have all your weapons
[00:55] fully loaded out so you have no more
[00:57] slots and then you zoom in you watch
[01:00] walk up to another weapon and you hit
[01:01] the use key to pick it up this is what
[01:04] happens
[01:07] Wham he's going up to it use it and zoom
[01:11] now he has an out-of- Body Experience
[01:14] apparently using the weapon takes you
[01:16] out of the universe let's do that again
[01:17] cuz that is awesome
[01:20] play going to use that weapon going to
[01:22] use the weapon and I'm out of
[01:25] [Laughter]
[01:27] here ah good fun time times now let's
[01:32] start up the editor and
[01:34] unfortunately uh this bug really depends
[01:38] on your CPU and whether or not um you
[01:41] hit it it'll either get this crazy out
[01:44] of body experience or your helmet will
[01:47] just get really close and it looks kind
[01:49] of weird uh as the editor loads I can
[01:53] show you the offending bits of code uh
[01:55] so in the actor or the player we have
[01:58] this view component which is charge of
[02:00] how the camera is affecting him fov
[02:03] distance location and Etc and when it
[02:07] comes into this little beauty it's
[02:09] supposed to take the fov and move the
[02:11] camera back a certain distance based on
[02:14] that and when you have zero fov it's
[02:17] supposed to just have no offset it's
[02:19] just where you are um but as you get
[02:24] closer and closer to
[02:28] zero it's going to you just radically go
[02:32] insane because of this beautiful bit
[02:36] right here
[02:38] um actually I'm sorry this beautiful bit
[02:41] right here a little combination of these
[02:44] two so we take our FV we do a tangent
[02:47] and tangent of zero is going to give it
[02:49] zero but as you get closer and closer to
[02:51] zero it's going to get zero but this is
[02:54] basically going to be a really really
[02:55] small number um something larger than
[02:58] zero but less than one and when you
[03:01] divide by a number it's just going to
[03:03] grow and I could prove that for
[03:06] you I have that value 13 if I divide by
[03:09] one I get one I divide by um really
[03:14] small value I get a huge huge value and
[03:18] as you can tell the the smaller and
[03:21] smaller I
[03:24] get the larger the value I'm going to
[03:27] get and so when we have our fov and our
[03:31] iron site and all that fun stuff what's
[03:34] going to happen is we're going to alert
[03:36] between the value you want to and the
[03:38] value we want to go to so if we have 55
[03:41] and we want to go to zero it's going to
[03:42] lurp in between that so between one and
[03:45] zero you're going to get this exploding
[03:48] value that just goes Bonkers and if you
[03:52] have a fast CPU you might go from 1 to
[03:55] zero instantly if you have a slow CPU
[03:56] might go from
[03:58] 1.8.5 3 3.2 and Etc so unfortunately
[04:04] this bit of code right here will just
[04:07] explode and with iron sight oh beautiful
[04:10] iron sight we have an end Zoom fov scale
[04:14] which ass sets it by default zero uh so
[04:17] when you're in Iron site and you get out
[04:19] it transitions to zero and if you're on
[04:23] um an fov that you want to get to I
[04:26] don't know you're on 55 and then now
[04:28] this thing's telling you to go to zero
[04:29] you're going to do do that lurp and then
[04:30] it's going to be big
[04:32] expansion um so let's hop into the fancy
[04:37] Dancy test level of mine uh we're going
[04:39] to pop down some beautiful
[04:45] weapons we'll plop
[04:47] [Music]
[04:49] down where did it
[04:53] go give ourselves a rifle
[04:59] ah give this energy
[05:02] weapon do two of
[05:07] those change our
[05:10] Loadout so we already have
[05:20] weapons so now we have some
[05:25] weapons we're going to zoom in and grab
[05:28] something
[05:31] then let's try grabbing another
[05:34] guy come on you know you want to break
[05:40] no so as you can see I'm not able to
[05:43] really get the issue because my machine
[05:46] just so happens to be special um but if
[05:50] I were to have the
[05:52] issue he' be this beautiful longevity
[05:56] thing all right so what is the fix
[05:58] simple um our V scale should actually
[06:01] default to one
[06:03] and in here we should really be checking
[06:07] to see if we are um less than
[06:11] one
[06:12] because um anything less than one F A
[06:15] doesn't really make sense here if we're
[06:17] one we should
[06:19] just um return as might want this 13
[06:24] offset because that looks like the
[06:25] theault N we'll just keep it as zero
[06:28] offset I mean if we ever get to
[06:31] one we should not be exploding the
[06:33] camera so we'll hit recode and Theory we
[06:38] should never have that fov but because
[06:40] of this end Zoom scale it was modifying
[06:43] the fov we wanted with zero and that
[06:45] caused everything to go Bonkers and if
[06:48] you
[06:49] recode um everything will work out fine
[06:53] and H we have to watch it again I'm
[06:56] sorry but this is just
[06:58] great it's one of those bugs you just
[07:00] don't want to fix but you have to all
[07:03] right so now we have a safety check so
[07:06] if we're less than one it will just keep
[07:08] the camera there and you won't zoom out
[07:10] uh the FV will still be a little bit
[07:12] Bonkers um if anything we should
[07:14] probably add an assert and the iron
[07:16] sight will no longer cause the fov to be
[07:18] zero because we Now default the scale
[07:20] hope you guys enjoyed until next time so
[07:24] as you guys saw we had a pretty crazy
[07:27] bug there where you go pick up a weapon
[07:29] and the player just shoots off in the
[07:31] space because his fov goes to near zero
[07:35] and everything just goes
[07:37] Bonkers um it was a pretty easy change
[07:39] to make sure that the fov um if it gets
[07:42] too low we don't run some code to
[07:44] stretch out the length of the camera and
[07:46] everything worked out too good and I
[07:48] hope you guys enjoyed till next time
[07:51] thank you for watching so if you want to
[07:52] keep it with the latest and greatest in
[07:54] Star Citizen of Squadron 42's
[07:55] development please follow us on our
[07:57] social media channels see you soon
[08:00] I
[08:06] [Music]

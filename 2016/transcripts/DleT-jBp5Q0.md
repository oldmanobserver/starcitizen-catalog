# BUGSMASHERS! Episode 23

**Video:** https://www.youtube.com/watch?v=DleT-jBp5Q0
**Date:** 2016-04-20
**Duration:** 8:05

## Transcript

[00:09] hey everyone welcome back to bug
[00:10] Smashers before we
[00:12] begin got a little joke for you guys no
[00:15] one's in the office so this is going to
[00:16] be good you ready here we go what type
[00:19] of computer
[00:21] sings you got
[00:23] it ready for it a Dell ah ah
[00:37] bug
[00:38] [Music]
[00:40] species hey everyone we are in a fun
[00:44] little map where there's nothing in
[00:46] there but our evil
[00:48] player and as you can see he looks
[00:52] really really really
[00:55] lovely um this bug happens to be um from
[00:59] Oli and the UK where our good old
[01:02] characters are not
[01:03] streaming um in the higher end content
[01:06] or I should say his lods his higher end
[01:09] lods um whenever you're close up it it
[01:12] keeps using the low-end lad which is the
[01:15] lowest lowest lowest mesh um you could
[01:19] have on the character this is what
[01:21] you're supposed to see when the GU is
[01:24] we way let me turn this this guy off way
[01:29] back here but instead when we go way up
[01:34] close we're getting the crappy log all
[01:37] right so what's happening let's go to
[01:39] the fun little
[01:41] code um here we are so we're in uh this
[01:46] thing or this bit of code called the
[01:48] character instance this is
[01:50] basically the where I got to go this is
[01:53] basically the root character you see
[01:55] here could probably just do this so my
[01:58] root character uh the player has some
[02:01] bones on it and then we attach the
[02:03] helmet we attach the body armor we
[02:05] attach his pants and his belt and if you
[02:08] had a weapon you attach his weapon and
[02:11] the character or the player and all his
[02:14] bones has a bunch of attachments the
[02:17] helmet armor and so forth and we
[02:20] basically in this little bit of code
[02:22] we'll stream in the the geometry and
[02:25] hopes that the higher end stuff comes in
[02:27] uh the only problem is this streaming
[02:30] thing only works
[02:32] for um well in this case it's only
[02:36] trying to get uh raw geometry like even
[02:39] another character which could have even
[02:40] more bones or just pure geometry uh pure
[02:43] geometry is a stat object and then the
[02:47] character instance is another character
[02:49] so you could have a uh you know maybe
[02:52] another armor that has another bone that
[02:54] you could stick something to um but
[02:56] unfortunately we have other attachments
[02:58] that add these things called skin
[03:00] attachment when it just basically adds
[03:02] additional bones and additional geometry
[03:05] to the character himself so it's not an
[03:08] additional um like this helmet if I put
[03:11] it on it has maybe two extra bones here
[03:14] but it's a separate object that I'm just
[03:16] attaching to my head it's following a
[03:18] skin object would be this thing getting
[03:21] stuck to my head and forever being a
[03:24] part of me it's not separate it is me
[03:27] now um that's what a skinned object is
[03:30] unfortunately those are the things that
[03:32] look like they're breaking um so what
[03:35] Ali did is he moved this little bit
[03:40] BL uh so that it could
[03:42] find per type and unfortunately um we
[03:48] have different ways that we could have
[03:49] skin objects um for our attachment we
[03:52] have attachment objects and the
[03:55] attachment controls how these objects
[03:57] get um put onto the thing so we have an
[04:00] attachment type bone then it will handle
[04:03] any attachment objects that go to the
[04:05] specific bone if we have an attachment
[04:08] face it handles any attachment skins
[04:10] that get stuck onto the face and so on
[04:13] um now unfortunately the attachment
[04:16] system has two ways of doing skins the
[04:19] attachment object could be an item or
[04:22] which has um another skin to put onto
[04:26] the player it could be like the face
[04:28] where the attachment object object has a
[04:30] skin so the skin unfortunately could be
[04:32] in two places right now could be on the
[04:34] attachment or the attachment object and
[04:36] this bit of code only
[04:38] handles um the attachment object so we
[04:42] actually have
[04:44] to let's check to see if our
[04:52] attachment also has a skin cuz if it has
[04:56] a skin we want to stream in that bit too
[05:04] [Music]
[05:18] unfortunately this function is not const
[05:21] um that will get fixed after this uh but
[05:25] to change that to console will require a
[05:27] huge rebuild of code um this is for the
[05:30] the programmers going oh my God why did
[05:32] you change that constant well to
[05:34] demonstrate and fix the bug I am just
[05:37] removing it for now just so you can see
[05:39] the effect don't worry it will be comp
[05:41] again and we'll hit recode so now if our
[05:45] attachment has a skin we will also add
[05:48] it to our merged lot information of the
[05:52] character and if everything goes
[05:55] well we will refresh the logs
[06:03] yeah I have
[06:04] eyes and now look at that our character
[06:08] is in HD oh snap his hair is a little
[06:12] blue but I'm probably just missing a
[06:14] texture or two however his little straps
[06:18] are no longer little weird triangles and
[06:20] you can see a lot more detail and when
[06:22] we go away out and Beyond now you can
[06:25] see that his LOD if if you look at the
[06:27] pixels and the pixels you'll see that it
[06:30] goes to the correct
[06:31] log and then when we snap in you can see
[06:34] the helmet
[06:37] pop so now we're getting our good High
[06:40] Fidelity um lods when you're up close
[06:43] and nearby and
[06:46] Sham hope you guys enjoyed so as you
[06:48] guys saw we had a little fun lot issue
[06:51] um our attachment system is quite
[06:53] complex we have attachments which Define
[06:56] how attachment objects should stick to
[07:00] something could be a character could be
[07:01] a chair could be a face and there's many
[07:04] different attachments many different
[07:06] attachment objects and either one of
[07:09] those could have a skin where a skin
[07:12] makes like if I'm a character I now own
[07:15] that additional
[07:16] geometry and unfortunately we weren't
[07:19] checking the the attachment to see if it
[07:21] had a skin we were only checking the
[07:23] attachment objects and now we're teing
[07:26] both of them so we could stream in the
[07:28] lot information correctly so now our
[07:31] little character or and that's gigantic
[07:34] character will have the correct BL when
[07:35] you're up close and he won't look like a
[07:38] pixelated 80s game hope you guys enjoyed
[07:41] see you next time

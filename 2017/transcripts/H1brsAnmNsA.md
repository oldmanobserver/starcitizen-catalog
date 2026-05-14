# Star Citizen: Bugsmashers! - Breaking up with the Sabre

**Video:** https://www.youtube.com/watch?v=H1brsAnmNsA
**Date:** 2017-09-27
**Duration:** 10:33

## Transcript

[00:06] [Music]
[00:15] everyone welcome to bug smashers I'm
[00:18] your host mark gaben I have my good
[00:19] friend here Patrick Salerno and he's
[00:21] gonna show us what well I've got a bug I
[00:24] gotta fix the saber for some reason when
[00:26] saber smashes into things it doesn't
[00:27] blow up correctly so I'm gonna blow it
[00:30] up so you're gonna go pop pick up yep
[00:33] fix it I'm good let's fix it so I
[00:44] recently got a bug for the saber and the
[00:47] bug was that when a ship destroys its
[00:49] nose just kind of hangs there and the
[00:51] rest of the ship just spirals away right
[00:53] there's no breakup of the pieces so this
[00:55] comes straight to me so I took a look at
[00:57] the saber and I took a look at the
[00:59] ticket and watch the video and someone
[01:01] kind of just rammed the ship into a rock
[01:02] and exploded and spiraled away so I'm
[01:04] like hmm what could be causing that
[01:06] right so what I did was I already fixed
[01:08] the bug I'm gonna go through the process
[01:10] as to how I fixed it it's usually a day
[01:12] or two process as I go and trial and
[01:14] error on my way through sort of various
[01:15] features so since I figured out that we
[01:18] ended up adding a delay feature to some
[01:22] of the debris and the order that debris
[01:24] needs to break off with I came up with
[01:27] let's see here we got a saber on our
[01:30] screen here so when we're looking at the
[01:32] saber here first thing I do is I'm
[01:34] trying to figure out what pieces break
[01:35] off or what it's the most important
[01:37] thing for me now there's two ways I can
[01:39] do that in the ship here I'm looking and
[01:41] I'm saying well here's my nose right and
[01:43] you know it's God's a mess and damage
[01:45] and then these are parts that kind of
[01:47] break off with the ship now what I found
[01:50] out is well there's really no effects
[01:53] things had changed I needed to reorder
[01:55] this stuff and add new features to it to
[01:57] bring it in line what I have here is a
[02:00] tool that shows the difference between
[02:02] two xml's so I have the old
[02:04] and I have the new version and I won't
[02:07] go into too many details the specifics
[02:08] of this but I ended up changing pretty
[02:10] much every single part I either added
[02:12] new effects I added the way it breaks
[02:14] off of the ship
[02:15] I changed how the pieces are layered and
[02:17] how quickly they come off now in the xml
[02:20] we can see one at a time I came in and
[02:23] will add go to my fixed one here
[02:34] update that so if we take a look at our
[02:37] object I ended up adding a bunch of
[02:40] effects to it as well because he was
[02:41] missing effects so let's hop in and see
[02:43] what it looks like prix fixe so what I
[02:46] do is I hop into the editor and I'm like
[02:47] well you know someone said the ship's
[02:49] not braking correctly let's find out
[02:58] got a couple cheats for myself dev hacks
[03:02] alright great so now if I shoot the ship
[03:05] I can check multiple things I can check
[03:08] the DV twos I can check the damage now
[03:10] from what I'm seeing we're getting some
[03:11] effects right but there's nothing to do
[03:13] too much going on ship blows up all
[03:15] right we're at the functionality part
[03:17] but we noticed that as the ticket says
[03:19] the nose kind of stays where it is so
[03:21] now the first thing I did was break the
[03:22] part back piece by piece
[03:23] now if you're just a ship and you're
[03:24] peppering along the top of the ship boom
[03:26] it's just gonna blow up right what
[03:28] happens well the nose stayed but the
[03:30] body starts going forward so I'm like
[03:31] okay bug is reproducible come in and
[03:35] shoot the other one see how many pieces
[03:36] break off all right now it's time to get
[03:38] to work we have successfully reproduced
[03:40] the issue so from there what I do is I
[03:43] go into 3d studio Max and I try and see
[03:46] how the pieces actually break apart
[03:48] right and in here I have a variety of
[03:50] different ways to see what's happening
[03:51] so I'm coming in as you can see I've got
[03:53] this list down the side this is actually
[03:55] the hierarchy of the ship it's sort of
[03:57] like the skeletal bone structure of how
[03:59] it's set up so when I click a wing the
[04:02] wing is gonna detach we can see down
[04:04] here jump straight to wing and now I've
[04:06] got the wing geometry and these parts so
[04:09] I'm coming in I'm taking a look I'm
[04:10] checking these little green squares you
[04:11] see here these are called helpers they
[04:13] end up being effects making sure that
[04:14] when a piece explodes melted metal
[04:16] happens because what happens is I'll get
[04:18] a bug for say a piece of debris
[04:19] detaching but for me it's what's called
[04:21] kind of like a rabbit hole notice a few
[04:22] other things that I can quickly fix
[04:24] while I go in there so I ended up going
[04:26] in tweaking all the damage tweaking how
[04:28] the debris hops off and then I went into
[04:30] the ship and I shot it so now that I did
[04:33] a couple changes in there what I do is I
[04:35] come in here I updated my XML
[04:39] and some tweaks come in to leave my ship
[04:41] restart the game now I use a ship setup
[04:48] level which gives me various lighting
[04:49] conditions to check under this is good
[04:52] for testing now boom there so now we
[04:55] have new effects debris kind of flies
[04:57] off and goes and this is kind of what
[05:00] we're intending when he toned down my
[05:02] damage so I can pick off each piece so
[05:06] what I'm doing is making sure that every
[05:08] single component on a ship that can
[05:09] detach does correctly detach all the
[05:12] pieces that detach with it also detach
[05:15] with it and that the probabilities I've
[05:17] set for the way the debris actually
[05:19] flies off are correctly interpreted so
[05:22] now the cool thing about this is if I'm
[05:24] looking in the XML over here let's see
[05:28] under say nose for example we have this
[05:31] line here on top and if we look under
[05:33] the old one I noticed that you know it's
[05:36] it's got its mass and it's got it stuff
[05:38] but well check this out
[05:40] it doesn't actually get a CH so we have
[05:42] this piece of code called attach ratio
[05:44] and attach probability and we also have
[05:47] other things called like random force
[05:49] and base force this is this is like X Y
[05:51] Z so when the nose detach is from a ship
[05:54] musical right but the body needs go and
[05:56] the wings need to fly off to the sides
[05:57] so I say you know forceps a to
[06:00] arbitrarily go that way go that way how
[06:03] much it's gonna spin etc etc and then I
[06:05] come down to each part and I say well
[06:07] when the nose is destroyed I want to be
[06:09] a slight probability of everything else
[06:11] coming off - so I had to reorder these
[06:15] from the original and basically nose and
[06:18] body should always detach right on
[06:20] destruction for effect but it has kind
[06:23] of a probability to do it and a delay to
[06:24] it once I'm done with all that I kind of
[06:27] do that to each and every component that
[06:29] does detach and then I go back in and I
[06:32] start just sort of picking it apart now
[06:35] if I blow up the nose
[06:39] we can see the nose actually flies away
[06:41] we are now working as intended after
[06:43] going in and tweaking all of the damaged
[06:45] components now what I do after this if
[06:48] I've placed effects or I've done
[06:50] anything like that I send this back to
[06:52] the testers when I'm done and I ask them
[06:54] to reproduce the work make sure that
[06:56] what I've done has made it into the game
[06:58] and then I also send my temporary
[07:01] particle effects that you see flying off
[07:03] the ship right now I send those to the
[07:05] effects guys to make sure that I'm in
[07:07] line because I don't actually make say
[07:08] the particles themselves what I do is I
[07:10] go into a library and I'll start placing
[07:11] down one so fire sparks etc etc and you
[07:16] know try and place it logically make
[07:17] sure all the damage works ship melts
[07:19] away so on and so forth and then once I
[07:21] realize that yes debris is flowing all
[07:23] if particles are happening things are
[07:25] spinning I realized the ticket is that
[07:27] completely and I commit my work but
[07:30] that's pretty much it a little bit of
[07:32] back and forth between XML when I hop
[07:36] into Max and make sure that all my
[07:38] detachable components work together and
[07:40] that they're actually flying off as
[07:41] anticipated and then in the editor I
[07:44] test the setup working live in game
[07:46] under various lighting conditions and I
[07:49] blow it up in as many ways as possible
[07:50] to make sure that it blows up correctly
[07:52] otherwise that's pretty much it problem
[07:55] solved
[07:55] bug completed just for a quick
[07:57] before-and-after again we will just get
[08:00] the old file and we'll delete this
[08:07] undo my delete and bring it back this
[08:09] refreshes the scripts so it knows it's
[08:11] up then I hop back in game one time
[08:15] that's my favorite lighting condition
[08:17] which is space for some reason I'm gonna
[08:20] come in I don't blow it apart again and
[08:23] I'll make sure that what I've done is
[08:26] actually what's expected so it seems
[08:29] like you know that wing takes a little
[08:30] less damage than the other wing for some
[08:32] reason you know that Megaman fixed he
[08:33] takes a few shots he pops off let's blow
[08:36] off the ship make sure that the initial
[08:38] issue is still there yep no stays body
[08:42] moves forward all right you don't need
[08:44] to blow up the other ships to know it's
[08:45] consistent get my revision again delete
[08:50] these one more time just to be sure and
[08:53] try it
[09:05] what I'm doing is I still go through and
[09:07] I make sure that yes the ship completely
[09:08] explodes it has one big explosion at the
[09:11] very end but each sub component can rip
[09:13] off all of its other sub components
[09:15] that's very important to the process
[09:17] because if I say for example blow this
[09:19] off but the wing doesn't blow off I have
[09:21] a problem with my damage hierarchy and I
[09:22] need to go and figure it out
[09:24] but as we saw blowing up sort of inner
[09:26] wing part actually took off the outer
[09:28] part but sometimes it doesn't that's the
[09:30] probability so that's actually working
[09:31] as intended
[09:32] great let's just finish because blowing
[09:34] things up is fun there we go
[09:36] fire death destruction awesome and we're
[09:38] good and there we go I send it to the
[09:41] final parties and get a testament
[09:43] putting game so we had a fun little bug
[09:45] there Patrick how'd it go yeah so far so
[09:48] good I think the bugs solved the Sabre
[09:50] actually breaks up correctly now you
[09:52] know that's the important part also did
[09:54] a few updates to how the parts break
[09:55] apart what it looks like when the
[09:57] particles fly off and now it's getting
[09:58] tested and sent to the right parties
[10:00] little XML little export little fun
[10:03] pokes and buttons for something shoot
[10:05] some stuff boom everyone's happy cool
[10:07] hope you guys enjoyed so next time thank
[10:10] you for watching so if you want to keep
[10:12] up with the latest and greatest in the
[10:13] star citizen the squadron 42 development
[10:15] please follow us on our social media
[10:16] channels see you soon
[10:23] you
[10:25] [Music]

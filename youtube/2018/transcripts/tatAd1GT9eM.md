# Squadron 42: Around the Verse - Strengthening the Core Tech

**Video:** https://www.youtube.com/watch?v=tatAd1GT9eM
**Date:** 2018-06-28
**Duration:** 11:58

## Transcript

[00:12] hello and welcome to another episode of
[00:15] around the verse
[00:16] I'm sandy gardner and i'm chris roberts
[00:19] this week we're checking in with nick
[00:20] Helms and various development teams for
[00:22] another squadron 42 project update yeah
[00:25] we're gonna take a look at some key tech
[00:27] and assets being built out for the game
[00:29] take it away Nick hi everyone welcome to
[00:32] another squadron 42 project update as we
[00:35] get closer to our target goals for the
[00:36] game it becomes harder and harder to
[00:38] show you what we've completed without
[00:40] revealing key parts of the story this
[00:42] month we will attempt to give you a
[00:43] glimpse of our progress without
[00:45] revealing any spoilers go to join us
[00:47] lieutenant for squadron 42 we have a
[00:52] number of feature teams which work on a
[00:54] variety of aspects of the gameplay the
[00:57] technology that we need to develop the
[00:59] game everything from the content side of
[01:01] things through to in development
[01:03] technology and technology that doesn't
[01:04] exist yet you know when you put these
[01:06] disciplines together and you put these
[01:08] teams together and they sat down on the
[01:09] same floor the knowledge that they share
[01:11] have a speed at which these people can
[01:12] work together it's remarkably better in
[01:15] a lot of places you still have you know
[01:16] an engineering team and then they sit
[01:18] together on their own separate to the
[01:20] animation team or separate to the design
[01:22] team and you know while that method of
[01:24] development can work it's a lot slower
[01:26] and it's also a lot less involved as
[01:28] well but if you have a feature team if
[01:30] you have this dedicated strike team and
[01:32] you have a member from each of those
[01:33] disciplines together then you know you
[01:35] bring those features to completion
[01:37] together combat as always has been a
[01:41] strong focus for our feature teams
[01:42] this month we've been working on
[01:44] mobility and actions like vaulting
[01:46] jumping and climbing to make sure that
[01:48] shooting and exploration are fluid and
[01:51] fun so something we do in game at the
[01:53] moment is that we we have two different
[01:55] types of animations we have entity
[01:56] driven animations and we have animation
[01:58] driven animations we've kind of mixed
[02:00] these up in the past and we're really
[02:01] shooting for entity driven animation now
[02:03] where the player is in full control of
[02:05] what they're doing when they stop
[02:06] pressing you know if they stop pressing
[02:07] forward they stop immediately if they
[02:09] start pressing a button they start
[02:11] immediately so we want the player to
[02:12] feel like they're in full control of
[02:14] everything
[02:18] Kanaks like vaulting and jumping
[02:20] mantling things like that are kind of
[02:22] movement mechanics that we have had work
[02:24] on but we've not had time to fully
[02:25] finish out yet so we wanted to revisit
[02:28] all of that make sure we've got all
[02:29] finished assets it feels good from the
[02:31] first-person perspective and it still
[02:33] looks really good in third as well the
[02:35] actor team have been refining the idle
[02:37] system for NPCs this makes sure that
[02:39] they automatically pick the most
[02:41] suitable idle animation for their
[02:43] current situation and environment the
[02:45] main idea is that no matter what
[02:48] situation a character is in as soon as
[02:51] they have no instructions from the
[02:53] behavior the idle system will take over
[02:56] and we'll play appropriate animation
[02:59] idle animation or fidget for this given
[03:01] context we change the set up in a way
[03:05] that now it's the idle poses are bound
[03:08] together with the animation and it's all
[03:10] set up in mannequin this makes it much
[03:11] easier for the designers in
[03:13] conversations previously designers were
[03:16] the people who need it to specifically
[03:18] request every single idle animations now
[03:20] they don't need to worry about any idle
[03:23] poses that they only need to request the
[03:25] animations and conversation lines they
[03:27] need and this system which is like kind
[03:30] of running underneath will take care of
[03:32] this the engineering team have also been
[03:35] working on our procedural inverse
[03:37] kinematic tech with the goal being to
[03:39] smooth out blending by retaining as much
[03:41] of the actors performance as possible
[03:43] procedural solutions we've been talking
[03:45] about is the ways we use the game code
[03:48] to change the animated poses some of the
[03:51] things we've been working on really is
[03:52] to procedurally blend between a lot of
[03:54] different grip poses to get to shape on
[03:57] the hands we want to better connect with
[04:00] items you're holding depending on where
[04:02] you hold them and the size of the item
[04:04] we also use AI K to solve different
[04:07] constraints we want to keep so if we
[04:10] want the hand to be in a certain
[04:11] position but without the spine to deform
[04:14] and use the entire length of the arm one
[04:18] thing we've been looking at is a unique
[04:20] ok solver specifically to improve and
[04:23] look at the arm to let more of the
[04:24] animation be there even though we're
[04:26] using I Kate to move the hand to better
[04:29] fit with
[04:30] the object doing interacting with
[04:32] problems specifically bit like a solver
[04:35] is is you could solve a few cases and
[04:37] then you get this one edge case that
[04:39] just flips their whole thing out it's
[04:41] just a lot of maths involved we're
[04:44] really happy with the progress we were
[04:45] making I mean a lot of the things we've
[04:47] kind of worked out in theory because a
[04:49] lot of procedural things you kind of go
[04:50] like oh this could bug procedurally
[04:53] house actually sort of panned out in
[04:54] game the actor feature team has made a
[04:57] lot of progress this month the player is
[04:59] now able to examine objects and
[05:00] manipulate them with their hands to find
[05:02] out new information another thing that
[05:04] we have been working on that we want to
[05:07] be able to do with items is inspect them
[05:08] so it's a nice take that we've added the
[05:10] ability to be able to bring them up into
[05:13] central view and then use the mouse to
[05:14] manipulate them so you can kind of look
[05:17] around them and what that allows us to
[05:21] do is allows the player to do should I
[05:24] say this focus on attachment ports to be
[05:26] able to in the future will be able to
[05:29] interact with those swap out different
[05:31] attachments like scopes and that kind of
[05:32] thing so the main focus of the past
[05:34] couple of Sprint's has been a lot of
[05:36] visual refinement so polishing
[05:38] animations that kind of thing making
[05:40] everything look better when you picking
[05:42] things up placing down and also
[05:45] obviously adding in this solvent inspect
[05:47] stay and all these different grips so
[05:49] the amount of things that you can pick
[05:51] up and interact with in the environment
[05:52] it's kind of just expanded just
[05:54] increasing the emotional so everything's
[05:56] looking yeah prettier the weapons team
[05:59] are starting to bring some of the tech
[06:01] previously seen in the alien ships to
[06:03] their weapons the giant rocket launcher
[06:05] is one of the first weapons out of the
[06:07] blocks and is shaping up nicely so this
[06:09] is the Xen carrouges rocket launcher
[06:11] that is part of squadron 42 it was
[06:14] really interesting to work on it since
[06:15] it was the first alien weapon we've been
[06:18] working on and it was definitely
[06:20] something new for us I was responsible
[06:22] for the in-game model texturing and
[06:25] shaders we added an animated glow effect
[06:27] C&D codes and made an overall polish
[06:30] pass to it so all materials textures and
[06:32] animations were fine-tuned we try to
[06:35] make the weapon look really heavy and it
[06:37] will be about the same size as the
[06:39] railgun the VFX team have been
[06:42] prototyping procedural soft-bodied
[06:44] formation to create amazing destruction
[06:46] assets impressively this is accomplished
[06:48] with much less art resource than usual
[06:51] this month we've worked out how to do
[06:53] take a standard wall assets break it up
[06:56] and do apply a soft body simulation to
[06:58] it and then rig it for games so we can
[07:01] do deformation and light shearing of
[07:04] metal in game this method will be used
[07:06] for the cinematic sequences where you
[07:09] see either a ship Bend or crumple or a
[07:13] piece of metal work such as a metal wall
[07:15] shear and break apart this method is
[07:18] like a cheaper method of doing this
[07:20] bending process
[07:23] we have another method for doing this
[07:26] which is the GM cash Alembic way but
[07:30] that is a lot more expensive there's a
[07:32] lot more memory resources that is used
[07:34] there so in conjunction with that and
[07:37] this method here we can blend these two
[07:40] together to make very interesting and
[07:42] detailed destruction simulations it's
[07:45] not often that we get to associate a
[07:46] team's work with the word rubbish but
[07:49] this month we've seen the props team
[07:50] deliver loads of detail work on the
[07:52] clutter and scrap that's built around
[07:54] the various abandoned spaces in the
[07:55] verse recently I've been working on
[07:57] scrap piles and these have been using a
[07:59] mix of a substance designer and ZBrush
[08:01] pipeline they make use of several
[08:04] techniques one of which is using silent
[08:06] textures and the other one is using
[08:08] unique props I start by sculpting assets
[08:11] inside of that brush which are then
[08:12] taken into designer and sputtered around
[08:15] and distributed in a procedural manner
[08:18] and this works well from both an
[08:19] artistic and a production standpoint
[08:21] this has been a quite an interesting set
[08:23] to work on it's been a mix of location
[08:25] work and regular props work this asset
[08:27] type has blended in with both props and
[08:30] environment type work and this works
[08:32] well from both an artistic and a
[08:33] production standpoint
[08:37] the Vandal race continues to get there
[08:39] look animation and behavior fleshed out
[08:41] focus this month has been on their basic
[08:44] costumes and primary weapons we're
[08:49] working on the vanduul armors we're
[08:50] tying in there look a lot with the ships
[08:52] and we're also gonna see their culture
[08:54] kind of combined with a couple other
[08:56] cultures because the kovanda like to
[08:58] kind of bring in influences from other
[09:00] cultures but they still have a really
[09:01] unique look we're also working on the
[09:03] weapons Evangel don't use traditional
[09:05] weapons they don't use rifles and stuff
[09:07] the main thing that we're focusing on
[09:09] having them uses a spear so they have a
[09:11] spear that which has multiple different
[09:12] types of States in it a firing state a
[09:14] collapse state they also have a very
[09:17] close quarters knife the knife actually
[09:19] plays pretty tightly into the lore of
[09:21] the vanduul because it kind of ties who
[09:23] they are as a species you know we're
[09:25] working on different types of things I'm
[09:26] really just fleshing out the culture of
[09:28] the vanduul as a whole that's all for
[09:30] this month's update until next time back
[09:32] to you so any increase thanks everyone
[09:35] in stars that are the news the live
[09:37] release of Alpha 3.2 is right around the
[09:40] corner yes that's right
[09:42] and thanks to all our PT groups for
[09:43] continuing to get a patch ready for
[09:44] prime time with the all new mining
[09:47] mechanic new weapons and various quality
[09:48] of life improvements you're definitely
[09:50] gonna want to jump into the PU and check
[09:52] out what three points you has to offer
[09:53] there will also be newly flyable ships
[09:55] of course the AG is eclipse vandal blade
[09:58] argent 600 i and the anvil hurricane
[10:00] will soon be flyable in-game yes as well
[10:03] as the totally redesigned the geo serve
[10:05] ng line which joins the fireball roster
[10:08] with this release and with the Debu of
[10:10] mining in 3.2 the prospector has returns
[10:12] in the pledge saw those of you that
[10:14] pledge for the drake vulture will also
[10:16] get the prospector as a loaner ship or
[10:19] you can use a newly implemented group
[10:21] system to find a friend with a
[10:22] prospector and convince them to lend it
[10:25] to you or that checkout reverse vers
[10:28] live on twitch tomorrow for our monthly
[10:30] subscriber townhall episode and maybe a
[10:32] special appearance by chris is that
[10:35] treat you well you're just gonna have to
[10:37] chant in to find out thanks to all our
[10:40] subscribers response for the choice and
[10:42] thank you to all of our backers for your
[10:43] continued support and enthusiasm we hope
[10:46] you're excited for alpha 3.2 until next
[10:49] week
[10:49] we will see
[10:50] around the around the mos restart that's
[10:58] a car
[10:59] hello and welcome to another episode of
[11:02] around the wrist
[11:03] I am Skyy robbers the daughter of
[11:05] Christopher Roberts and Sandy Garner hi
[11:08] my name is rain rabbits but fresh we
[11:13] have to check in with rocky thanks for
[11:39] watching for the latest and greatest in
[11:40] star citizen squadron 42 you can
[11:42] subscribe to our channel or you can
[11:44] check out some of the other shows and
[11:45] you can also head to our website at

# Inside Star Citizen: Preparing Prototypes

**Video:** https://www.youtube.com/watch?v=kaWB5AkY-zc
**Date:** 2023-07-27
**Duration:** 19:03

## Transcript

[00:00] foreign
[00:04] to another episode of inside Star
[00:07] Citizen our weekly look at the behind
[00:08] the scenes development of what my mother
[00:10] calls that video game Jared's making
[00:12] whenever she explains it to her friends
[00:13] it's quarter three and if you've been
[00:16] following this show in any of its
[00:18] incarnations for a while now you know
[00:20] that the road to Citizen Khan is a very
[00:22] interesting one for our weekly video
[00:23] content as we skillfully avoid all the
[00:26] Hot Topics being saved for the big now
[00:28] two-day event and use that challenge as
[00:31] an opportunity to explore aspects of our
[00:34] development that might otherwise never
[00:36] get a chance to shine it's an
[00:37] opportunity this quarter to look at how
[00:39] rastar is being used to remaster
[00:41] existing ugfs in Alpha 320. uh to
[00:44] explore racing a little bit and a new
[00:47] ship that readers of jump Point magazine
[00:49] in our social media channels probably
[00:50] already know is on its way an update to
[00:53] Claudius and how it's being used to
[00:55] create even more immersive environments
[00:56] heading your way and then a spin around
[00:58] the whole bfx department to see what
[01:01] they're up to Yes Virginia it's true
[01:03] there will be fire we can do all this
[01:05] and more as we navigate our journey to
[01:08] the big two days in October but up this
[01:10] week and my reason for sitting here at
[01:13] my desk dumping just a little bit of scl
[01:15] into our ISC is to talk to Torsten and
[01:18] Jacob from the eupu feature team about
[01:20] the prototyping process how they test
[01:23] design and programming implementations
[01:25] at the earliest stages and how it
[01:27] relates to munching an important
[01:29] component of Salvage and my nightly
[01:32] routine just 20 minutes before I go to
[01:34] sleep
[01:39] person Jacob how you doing people doing
[01:41] good
[01:42] I am fine thank you
[01:46] all right so we are here talking about
[01:48] uh prototyping process
[01:51] um before we get into it uh give me the
[01:53] top level just the just the the like the
[01:55] LinkedIn version answer what is a
[01:57] prototype and why do we do it a
[01:59] prototype basically can have several
[02:02] facets in game development and for us
[02:05] particular it is always about gameplay
[02:09] and in this particular case it is about
[02:11] the technical
[02:13] the technical problems that we might
[02:16] face and we might have to solve so for
[02:18] that we always use prototypes and uh
[02:22] play testing those prototypes is a
[02:24] crucial part in game development where
[02:25] it is mainly used to prove theories
[02:28] whether theory is either gameplay is fun
[02:30] does it technically work
[02:32] and this is basically what what the the
[02:34] purpose of a prototype is anything you
[02:37] want to add Jacob from from more of a
[02:39] Dev perspective uh we tend to take what
[02:42] the designer's vision is for uh gameplay
[02:45] and then we've got to figure out how can
[02:48] we achieve that in the game and just as
[02:50] often that's not crystal clear from the
[02:53] start so we have to try a few things and
[02:56] see what technical hurdles might be
[02:59] ahead of us that we're going to have to
[03:01] consider for the full development so
[03:04] what we're going to do on this week's
[03:05] show the first of our quarter three
[03:07] shows where things are a little bit
[03:08] different we are going to look at a
[03:10] feature at the absolutely earliest stage
[03:13] this is earlier than we've ever shown
[03:16] any feature ever the Prototype phase uh
[03:19] what we're about to show you is not
[03:21] going to look good it's not going to
[03:22] look pretty uh it's going to be weird
[03:24] Poppy and buggy so we're just warning
[03:26] you ahead before you take the footage
[03:28] and put it in your YouTube videos uh
[03:31] what is the Prototype that we're gonna
[03:32] look at right now Jacob we're going to
[03:34] be looking at the prototype for uh
[03:37] monitoring the next tier of Salvage the
[03:40] idea being we need some way to take
[03:42] apart a larger ship and break it into
[03:45] little pieces so that you can then pick
[03:47] it up in your Salvage trips gain some
[03:49] material from that and you'll be able to
[03:51] sell that later but we're going to be
[03:53] looking at just the breaking a ship
[03:56] apart phase which is what we're
[03:58] prototyping here right so I got it
[04:00] queued up here let's take a look at this
[04:01] here so obviously this is a vulture
[04:03] approaching a Gladius
[04:06] yep
[04:07] um so with the Prototype we've added in
[04:10] a new monitoring mode sub mode to
[04:13] salvage so all of that whole scraping
[04:15] uis disappeared and we're going down to
[04:18] just what we need for this prototype
[04:20] which is the ability to break a
[04:22] partnership which at the moment is going
[04:25] to look exactly the same as if you blew
[04:27] it up with your guns but in future that
[04:29] would look rather different what's
[04:31] happening right here I see the bar
[04:32] filling up on the left okay with the
[04:34] ship yeah so this is the placeholder for
[04:37] the actual gameplay that would happen
[04:39] here the design will have some actual
[04:42] gameplay for what you have to do as a
[04:43] player to break the trip apart but we
[04:45] put in that little placeholder which is
[04:47] just essentially a timer a progress bar
[04:49] based on how big the target is and that
[04:52] is actually on on purpose because
[04:55] the question that we are asking in this
[04:58] prototype are more technical
[05:00] that means that we don't have we
[05:02] shouldn't focus on the gameplay aspect
[05:04] so we should keep the gameplay as
[05:06] minimal or as simple as possible and
[05:09] then so that we can fully focus on the
[05:12] technical bits of of the Prototype okay
[05:15] so we saw it we saw it broken into some
[05:18] you know what look like normal debris
[05:20] but now we got to break it into smaller
[05:21] munchable steps we'll go back to the
[05:23] video here so breaking it into normal
[05:25] debris is stuffy that you've seen before
[05:27] but when we have this bigger part it
[05:30] doesn't come apart into more pieces
[05:32] naturally so in this prototype we are uh
[05:36] just deleting the thing and replacing it
[05:37] with loads of tiny little placeholder
[05:39] pieces to act as the monster
[05:42] Department's debris uh what you're also
[05:44] seeing is a prototype for how you will
[05:47] get those pieces into your cargo which
[05:50] is a little suction feels it grabs those
[05:53] little pieces drags them towards the
[05:55] grinder in the mouth of the vulture and
[05:57] from there they're converted into cargo
[05:59] there's a little pieces that we saw are
[06:01] obviously not arted and everything I
[06:04] want to remind people again we've
[06:06] literally never shown anything in a
[06:07] prototype Facebook Facebook so forgive
[06:09] me for reiterating this two or three
[06:11] more times before we're done here this
[06:13] is designer art just small pieces to
[06:16] represent the kind of the mass and the
[06:18] size of of stuff that we might be using
[06:21] it's even worse it's colder art yes
[06:23] indeed this is this is the programmer
[06:25] equivalent of a white box test uh where
[06:28] I'm not even qualified to make white
[06:30] boxes so I just rip off other assets
[06:33] that I found in the engine and just slap
[06:35] them together so that's what this is and
[06:38] obviously without being a prototype
[06:40] there's no VFX there's no explosions
[06:42] there's no beams there's none of the
[06:44] things that would mask this transition
[06:45] that would normally happen you know so
[06:48] that you don't see the the pieces just
[06:50] uh just pop in you know like like
[06:52] they're currently doing
[06:54] yes
[06:55] um all right so that was done on your
[06:57] local machine uh just you know you on
[06:59] your workstation doing an a local
[07:01] version of of the the universe here uh
[07:04] the next phase as I understand it is to
[07:07] test it in pu conditions and we're going
[07:10] to go ahead and start this video because
[07:11] this video is going to go for a little
[07:12] bit tell me what we're doing here yeah
[07:13] so I'll tell you what we're doing and
[07:15] then we can discuss later why we're
[07:17] doing that exactly
[07:18] um what we're doing right here is uh I
[07:21] want to test a worst case performance
[07:24] conditions so I'm chucking in some
[07:26] console commands to load up or stream in
[07:30] uh several different Landing zones at
[07:33] the same time uh because otherwise me is
[07:35] just one player on the server I wouldn't
[07:37] really be loading that much I wouldn't
[07:39] be stressing the server so I'm gonna
[07:42] stress it quite a lot by loading up as
[07:45] many Landing zones as I can think of off
[07:46] the top of my head basically until I see
[07:49] that server FPS count go appreciably
[07:53] lower
[07:53] [Music]
[07:54] um and then only once I've done that am
[07:57] I going to step into the actual gameplay
[08:00] test I also noticed you've upgraded from
[08:03] a Gladius 2 and 890 jump yes because
[08:06] when I think worst case for breaking a
[08:08] big thing into small things I want the
[08:10] biggest possible thing which is going to
[08:12] require lots and lots of small things so
[08:16] yeah 890 jump is a good candidate for
[08:19] that okay so
[08:22] what are you typing here oh yeah uh I'm
[08:25] yeah just typing in some comments for
[08:27] the uh other recipients of this video
[08:30] because this was uh an internal video
[08:33] for you know reviewing stuff do you have
[08:35] to use console commands to leave notes
[08:37] for people
[08:39] or otherwise uh but it's the most
[08:41] convenient so all right so we've got so
[08:43] we've got the server simulating pu
[08:46] conditions all the all the landing zones
[08:48] are are loaded at once instead of you
[08:50] know streaming in and out like they
[08:51] would normally would so it's actually
[08:52] worse than you would see on a normal pu
[08:54] in date and we're going to see that
[08:56] immediately that uh this breaking the
[08:59] trip apart uh that we saw work so nicely
[09:03] in the editor well I've really annoyed
[09:05] the server here because all of these
[09:07] pieces uh yeah popping in in a not so
[09:11] great way and I make a bit of a
[09:12] sarcastic comment about it in the uh in
[09:16] the console
[09:17] um but uh yeah it's important to create
[09:20] these conditions you know to test these
[09:22] things not just in ideal conditions not
[09:24] just the ideal Universe of your own
[09:26] computer or even the Pu when it's like
[09:28] first loads and nobody's in and
[09:29] everything's great no indeed what I'm
[09:31] testing here is worse than we would hope
[09:33] it ever to be we don't want it to ever
[09:35] be this bad but we gotta test it because
[09:39] might be I'd say now beams we're going
[09:41] shooting out starting to break apart
[09:44] yeah there'd be extra gameplay here
[09:46] that'd be fair thanks whatever but in
[09:49] the editor version we saw pretty much as
[09:50] soon as the the big piece disappeared
[09:53] all those tiny little bits turned up
[09:54] well it's not going to go that way in in
[09:57] this situation we're going to be waiting
[09:59] quite some time for all those little
[10:01] pieces to turn up gotcha and so while
[10:03] we're waiting for this uh pieces to to
[10:05] turn up here
[10:07] um let's talk about what we learned from
[10:09] uh what we've learned from these tests
[10:11] so far
[10:12] um obviously there's some form and stuff
[10:14] but there's also some gameplay
[10:15] implications from what we've seen uh
[10:17] touristy you want to talk us through it
[10:18] well I can talk about some parts that we
[10:21] learned from right so it's so the best
[10:23] thing that you can learn from a
[10:25] prototype is actually everything that
[10:27] goes bad because this is the stuff that
[10:30] you can then iterate on and make the the
[10:32] gameplay or the the technical stuff even
[10:36] better so
[10:38] um from the gameplay perspective so I
[10:40] will just talk about the gameplay stuff
[10:41] and Jacob can talk about what we learned
[10:44] from technical perspective there is
[10:47] from the gameplay we learned that what
[10:50] about big ships so how for example now
[10:53] you saw the vulture trying to attach to
[10:55] the 890 jump that is a bit of a wonky
[10:58] situation and it doesn't feel right so
[11:01] what what about vultures actually
[11:03] munching bigger ships so how can we make
[11:06] that an interesting gameplay then you
[11:09] saw in the first video what happens when
[11:12] uh the the ship transitions into the
[11:15] smaller bits so the masking is is a huge
[11:17] topic that we have to solve so that it
[11:20] feels right and you don't notice that
[11:23] one element pops away and another
[11:26] element Pops in so we definitely have to
[11:29] mask that then uh what you might have
[11:32] seen in the first part is the conversion
[11:36] of materials I don't know if you paid
[11:38] attention to the filler station bar that
[11:41] basically fills the SEO crates on the
[11:43] back side of the wheelchair but that
[11:46] feel drastically faster than it would
[11:48] normally do with Hull scraping that
[11:50] means that
[11:52] it would be more painful for you to
[11:55] munch because you have to stand up from
[11:57] your seat more often go down to the
[11:59] filler station remove the boxes so this
[12:01] is definitely an issue that we then have
[12:04] to solve because we really don't want to
[12:06] have this gameplay to be
[12:08] more tedious than it's
[12:12] has to be so we have to find a solution
[12:15] how we can make it more like a
[12:18] yeah much nicer for for the player to
[12:21] actually remove those crates there
[12:23] then uh the navigation around the pieces
[12:26] is also something that we notice isn't
[12:28] that fun so we will probably utilize the
[12:31] tractor beams there because we are
[12:33] anyway working on them but maybe that
[12:36] makes it much easier for players instead
[12:38] of flying around and getting the pieces
[12:40] between the fork of the wheelchair and
[12:43] then having it disintegrate but instead
[12:46] you pulling the pieces in with the
[12:48] tractor beam
[12:50] another Fork of the wheelchair is very
[12:52] limiting in terms of what pieces will
[12:54] fit so this is also something we learned
[12:56] and a big thing is uh what which already
[12:59] is standing out is how can we make it
[13:04] fun and unique for the reclaimer so we
[13:07] just we're looking at the Prototype at
[13:09] the vulture and the big question that
[13:11] our team was asking in the end of that
[13:14] prototype was like
[13:15] okay how can we facilitate the claw and
[13:19] the unique neatness visuals or the
[13:21] uniqueness in general of the reclaimer
[13:23] to actually facilitate that gameplay and
[13:26] have it stand out and be meaningful and
[13:29] fun all right so a lot of a lot of
[13:31] gameplay a lot of gameplay implications
[13:33] from just that little prototype uh Jacob
[13:36] what would you what was your takeaways
[13:38] uh from the from the tech perspective
[13:40] I'm looking at things like the
[13:41] performance and also uh just
[13:45] um
[13:46] what am I going to have to account for
[13:48] to achieve the designer's vision here
[13:51] I know that we're going to want things
[13:53] like the time that it takes to destroy
[13:56] something to be somewhat proportional
[13:58] for its size and mass but from the
[14:01] initial prototype I could already see
[14:02] that uh a bigger piece taking longer it
[14:07] already takes you know a few seconds
[14:09] with the Gladius if we're going to scale
[14:11] that up and scale up the time as well
[14:14] proportionally to a to a big Target
[14:16] we're going to have to think about what
[14:18] equation are we going to use for scaling
[14:20] that so that it doesn't take you ages uh
[14:23] to like sitting there for minutes to to
[14:24] break something apart I got to think
[14:27] about how I'm going to hook in the
[14:29] visual effects and the audio whatever
[14:31] what dependencies am I going to need to
[14:35] make well get involved speaking of you
[14:38] know judging time uh The Entity system
[14:40] is taking a little bit of time to spawn
[14:43] all the spawn and debris we've been
[14:44] talking uh this is still going at the
[14:47] moment
[14:48] obviously there's going to have to be
[14:49] some optimization work there with the
[14:51] entity system this is a kind of
[14:55] what we've got with with PES is that uh
[14:58] it's not quite as quick to create
[15:01] entities as before we had PS
[15:04] um and you we have all sorts of great
[15:06] stuff that comes with PES so this is
[15:08] just a small limitation that we have to
[15:10] learn to work around uh but it tells us
[15:13] that gameplay ideas that we had before
[15:16] PS might need some adaptation in order
[15:19] to work efficiently uh in the the post
[15:23] PES world
[15:25] so yeah so speaking of which let's go
[15:26] back to the video I think we're about to
[15:28] get the entity spawns now
[15:31] and he's saying this yeah
[15:34] any moment now yeah there we go there we
[15:36] go and then play a bit of a flicker as
[15:39] they come in but they're finally here so
[15:41] yeah this this tells us well
[15:43] in this worst case scenario uh this
[15:46] performance is obviously unacceptable uh
[15:49] we're going to have to do something
[15:50] about this so we are thinking about uh
[15:53] how can we change our approach how can
[15:55] we optimize what we've got discussions
[15:57] in various different directions but this
[16:00] is a key takeaway from this prototype
[16:02] because if it had gone differently if if
[16:04] we tried this and the piece is turned up
[16:07] in just a few seconds or so then we'd
[16:09] have known that this approach on the
[16:11] whole was probably acceptable and with a
[16:14] little bit of optimization it would work
[16:16] but that's not what happened the stuff
[16:19] took minutes to arrive and that means we
[16:22] have to do some more serious rethinking
[16:24] about how we're going to approach this
[16:26] the vision and the the basically the
[16:28] acceptance criteria or directors Define
[16:31] they they they are still untouched right
[16:34] so those are still to be fulfilled
[16:37] and even the overall Vision that we as
[16:41] the team defined for how that gameplay
[16:43] should play out those those will be like
[16:46] those are already set in stone because
[16:48] we all agreed on those
[16:50] but how the actual gameplay then plays
[16:53] and feels this is still affected by uh
[16:57] by the Prototype a prototype like this
[16:59] is really perfect for for stepping in
[17:02] early and making sure that every every
[17:04] tick box on our acceptance criterias has
[17:07] met and uh we can make a better gameplay
[17:10] out of it I I think we all have a a a
[17:12] real uh desire and responsibility
[17:15] towards you know testing these things as
[17:18] often and as early and under as much
[17:20] duress as possible uh to as we work to
[17:23] stabilize the Pu and make it a more
[17:26] enjoyable experience going forward so I
[17:29] torson uh Jacob thank you thank you for
[17:32] hanging out with us today thank you very
[17:34] much bye bye
[17:38] [Music]
[17:47] [Music]
[17:50] thank you
[17:57] so what do we learned this week well we
[17:59] learned that prototyping doesn't really
[18:01] look like much of anything but it's an
[18:03] essential step towards proving out
[18:04] design and performance before all the
[18:06] artists and other devs go in to do their
[18:08] thing that it's just as important to
[18:10] prove out good ideas and good paths to
[18:12] take as it is to encourage developers to
[18:15] seek out another way towards success and
[18:17] that it's important to continue refining
[18:19] not just the features and content being
[18:21] made but the very way that we test those
[18:24] things earlier and earlier and under a
[18:27] scale of duress for inside Star Citizen
[18:29] I'm Jared Huckabee thank you for letting
[18:31] us share the process of game development
[18:33] with you and we'll see you all here next
[18:34] week

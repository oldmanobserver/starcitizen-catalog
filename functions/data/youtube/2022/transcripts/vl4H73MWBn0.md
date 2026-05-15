# Star Citizen Live: Graphics Engineering Q&A

**Video:** https://www.youtube.com/watch?v=vl4H73MWBn0
**Date:** 2022-02-04
**Duration:** 1:12:51

## Transcript

[00:00] star citizen live graphics engineering q
[00:03] a starring ellie brown
[00:08] hi everybody
[00:09] welcome to star citizen live uh graphics
[00:12] engineering q a i'm your host jared
[00:14] huckabee and if you've never seen star
[00:17] citizen live before it's where we take
[00:18] about an hour out of our friday and
[00:21] spend time with our developers explore a
[00:23] bit of their process sometimes put them
[00:25] on the hot seat and make them face the
[00:27] questions that come from you our star
[00:30] citizen uh backer uh this week we have
[00:33] mr ali brown let me find your there we
[00:36] go mr ali brown director of graphics
[00:38] engineering aly how you doing man hello
[00:40] i'm doing good thank you
[00:41] uh welcome back to the show it's been a
[00:43] while
[00:45] thanks for having me and and and i want
[00:47] to point out i i want to do this to to
[00:50] to celebrate ali not to throw everybody
[00:53] else out but ali actually came to me and
[00:55] asked to do this show he uh he he saw a
[00:58] bunch of the ques he saw a bunch of the
[00:59] questions that folks had uh after uh
[01:02] citizencon uh about the graphics
[01:04] presentation and stuff like this and
[01:06] he's like hey i'd like to do a q a and
[01:07] talk more to the backers about the stuff
[01:09] and like i i did that thing where my
[01:12] eyes turned into like cartoon like what
[01:15] like the developer came to me and asked
[01:17] me to do a show so so i want to a pre uh
[01:21] all of us to put our appreciation out
[01:22] there and thank ally brown ahead of time
[01:24] for for coming to us
[01:26] and asking you the show
[01:28] now
[01:29] as we usually do we put up a thread in
[01:32] uh spectrum uh where we collect
[01:35] questions from the backers and let
[01:37] backers vote up the questions that they
[01:38] want to see answered most
[01:40] we collected those and
[01:42] went through them and if i were a
[01:44] professional i would have had them up on
[01:46] my screen before i started the show give
[01:48] me just a second
[01:50] ally tell us about your childhood
[01:54] i'm kidding here we go all right so so
[01:57] right off the bat
[01:58] uh
[01:59] ellie the number one question by a wide
[02:02] margin i mean it wasn't even close uh
[02:04] had to do with vulcan uh so uh in
[02:08] general why don't you
[02:09] start if you can give us a general
[02:12] status update uh
[02:14] on vulcan where we're at where we're
[02:16] going how's it going what can you tell
[02:19] us
[02:19] okay so um yeah vulcan is obviously
[02:22] going to be the back end of our new
[02:24] renderer which we've called gen12 um and
[02:26] the vulcan side of it is going pretty
[02:28] well um but ultimately it's limited by
[02:30] our progress on the gen12 renderer until
[02:33] that's complete vulcan can't be complete
[02:35] so at the moment we've uh as we've been
[02:38] developed on the gen 12 when we're very
[02:40] vulkan's always been playing catch up
[02:41] basically just as soon as something
[02:43] works the new renderer we look at vulcan
[02:45] make sure it works and then bring it
[02:46] back up to speed so it's just lags ever
[02:48] so slightly behind so
[02:50] in terms of like features for the vulcan
[02:52] render we're probably about 75 something
[02:54] like that um of that being completed but
[02:58] probably slightly less when you start
[02:59] factoring in performance because vulcan
[03:01] will perform slightly differently to
[03:03] direct text we were using in the past um
[03:06] probably a naive type of first
[03:08] version we run internally might not be
[03:10] quite as fast but obviously we don't
[03:12] want to ship that to you we want the
[03:13] ship the faster version so probably you
[03:15] know somewhere between 60 and 75
[03:17] depending on how much performance work
[03:18] there is
[03:19] but uh a lot of that has been done
[03:21] like i said it's playing catch up to gen
[03:22] 12 and gen 12 is progressing very well
[03:24] now and once we type of which you know
[03:26] it's not far off and once we finish the
[03:28] gen 12 aspect we'll throw a bunch of
[03:30] bodies on the vulcan side and that will
[03:31] i think very quickly
[03:33] come up so we're not expecting a big
[03:34] difference between
[03:36] gen 12 uh release and then the vulcan
[03:39] release very soon after
[03:41] now if i uh correct me if i'm wrong here
[03:44] uh parts of the gen 12 rendering render
[03:47] have gone out in previous patches and
[03:50] even upcoming patches with 317. um
[03:53] this isn't going to be like a light
[03:55] switch kind of thing where where one day
[03:58] there's a patch and suddenly everything
[03:59] looks differently
[04:01] no and we would be lovely if we do that
[04:04] but the type of continuous live release
[04:06] means to do that we would have to keep
[04:07] both sets of code in parallel for like a
[04:10] whole year and it's too painful for to
[04:12] maintain both when we have constant
[04:13] features we're working on so as we
[04:15] finish something uh we live in type of a
[04:17] experimental stage for a while where we
[04:19] internally turn it on for the graphics
[04:20] programmers and then once we're
[04:21] confident we turn it on for the rest of
[04:23] studio and then the next patch that
[04:24] happens to come out will benefit from
[04:26] that so we've already i think as
[04:28] citizencom you already mentioned that
[04:29] all the post effects already converted
[04:31] we've been focused on getting the
[04:32] geometry done which is the biggest part
[04:33] of the game um at the stage we are today
[04:36] in the in our live uh in our stream
[04:38] internal uh we have all of the opaque
[04:40] geometry is kind of done which is the
[04:42] vast majority of the game uh and then
[04:44] the shadows are coming straight after
[04:46] that they're basically done just
[04:48] awaiting some testing
[04:49] so um the really the big bits are left
[04:51] actually is just to deal with the
[04:52] transparent geometry and then a few
[04:54] miscellaneous effects like i don't know
[04:56] the blackout effect and and things like
[04:57] that type of the the final piece of
[05:00] polish um
[05:01] but yeah the hard parts have been
[05:04] largely tackled i mean transparency is
[05:05] still a problem there's plenty of issues
[05:07] there but
[05:08] the bulk of it is type of making very
[05:11] good progress and won't be too much
[05:12] longer
[05:14] so i just wanted to be clear that uh we
[05:16] want to reiterate again before we move
[05:17] on that this is already
[05:20] coming out and releasing in parts and
[05:22] sections of it are turning on and stuff
[05:24] like this so they so so backers are
[05:26] already seeing the work and results of
[05:28] some aspects of it they'll see more
[05:30] aspects of it in 317 they'll see more
[05:32] aspects of it in 318. and then there
[05:34] will be a release we'll have more this
[05:36] year yeah it's faster and faster
[05:38] so there will just be
[05:40] a time when it's like okay that
[05:42] everything has now been converted over
[05:44] but it but it again it won't be like a
[05:46] big
[05:47] boom like you logged in on one on
[05:49] thursday and the game ran one way you
[05:51] logged in on friday friday now the game
[05:53] runs a different way it's it's already
[05:56] in progress it's already happening it's
[05:57] already releasing it's a little bit
[06:00] after a little bit after a little bit
[06:01] kind of thing yeah the minister and
[06:03] parts of it there will be bigger
[06:04] differences than other but the problem
[06:05] is a pc market like pc game everyone's
[06:09] machine is different so some people will
[06:11] be bound by that maybe they've got a
[06:12] really old gpu maybe they've got a
[06:14] single four core system versus an eight
[06:16] core system so everyone's gonna have
[06:18] different performance characteristics so
[06:19] there will be some unlucky person
[06:20] somewhere where gen 12 makes no
[06:22] difference to them and there'll be
[06:23] someone else who sees their framework
[06:24] triple it's it's hard to
[06:26] give a general rule but the each stage
[06:28] we expect to see benefits um probably
[06:30] the biggest ones might come towards the
[06:32] end because the focus initially is going
[06:34] to be getting things working getting
[06:35] things so they don't regress and get
[06:37] worse in terms of a performance time as
[06:39] far as the backer seats but in terms of
[06:40] actual performance improvements maybe
[06:42] i'll have once it's all working it'll be
[06:44] like right pylon let's see what's
[06:45] actually not working as it should in
[06:47] terms of performance and then the final
[06:49] uh switch to vulcan is probably the
[06:51] biggest change and that one is gonna be
[06:53] a bit of a binary you either use a block
[06:55] but using vulcan or you're not um
[06:57] everything else is gonna be more gradual
[07:00] all right um
[07:02] next step let's talk about uh uh
[07:07] let's see if we can hit some like
[07:09] some general gen 12 vulcan and
[07:11] performance related stuff all at once
[07:13] here uh
[07:14] cpu parallelization and scene rendering
[07:17] so uh i'm just going to read this
[07:18] directly here am i correct this is the
[07:20] person asking am i correct to say that
[07:22] when scene rendering is turned on for
[07:24] gen 12 and phase one that we will get
[07:27] some level of cpu render parallelization
[07:31] other than the parallelization we
[07:32] already have for visual visual visible
[07:34] objects across batch workers and cpu
[07:37] cores or is the parallelization only
[07:39] coming between phase two and three the
[07:42] latter being the optimization of the
[07:43] multi-core scene rendering and bye-bye
[07:45] render thread completely i'm mainly
[07:47] asking for the sake of high core count
[07:49] low single clock speed cpu users
[07:53] so that's quite a technical question um
[07:56] yeah so
[07:57] yeah each stage will get improvements in
[08:00] that regard for the people that have
[08:01] high core core counts low low clock
[08:03] speed um
[08:04] the parts many parts of the render are
[08:06] outwardly multi-threaded um and
[08:08] basically the gen 12 work is moving more
[08:10] and more to them multi-threaded stages
[08:13] and less and less work ends up having to
[08:14] be done on the single core what what
[08:17] this person's correctly called our
[08:18] render for head which is which will
[08:20] always remain on a single core but in
[08:22] the final final version of vulcan it
[08:24] will do almost no work so everything
[08:26] else will be paralyzed but yeah it will
[08:28] be every every single milestone will
[08:30] give benefits so every release we expect
[08:32] from now until the job's 100 finished
[08:34] you'll get an improvement
[08:38] uh while we're hitting you with the big
[08:39] ones let's just get some of the big ones
[08:41] out of the way here uh will the game
[08:44] always be so cpu intensive or will it
[08:48] move to a gpu intensive uh uh scenario
[08:51] at some point
[08:53] so
[08:55] the goal of gen12 is to remove a large
[08:57] chunk of the cmp cpu work so that will
[08:59] naturally mean it's more gpu bound um
[09:02] but even if there was no cpu cost from
[09:04] from the graphics team from my
[09:05] department the rest of the game is still
[09:07] big and complicated you know it's a very
[09:09] ambitious game so
[09:10] uh there's lots of work by all the other
[09:13] teams uh to reduce the cpu load and
[09:16] yeah i mean the engine team in the game
[09:17] team it's an ongoing thing that it's
[09:18] constant work to improve the performance
[09:20] uh massive strides have been made but at
[09:22] the same time the game's growing so you
[09:24] see you know what might be minor
[09:26] improvements but actually
[09:27] if we hadn't been adding features you
[09:29] would be probably getting a much faster
[09:30] frame it but you know the game has to be
[09:31] completed so
[09:32] yeah um i'd imagine do all these
[09:35] relatively intense cpu work on this game
[09:37] compared to a much more simple platform
[09:40] or something but
[09:41] yeah we we want to move into position
[09:43] where we're gpu bound from our team
[09:45] that's what we want and then we're type
[09:46] of limiting factor and then we can
[09:49] you know we can push the gpu effects
[09:50] harder then for the people that have
[09:52] gpus that can handle it and then we can
[09:53] scale it back and give people a good
[09:55] frame rate that they don't have uh such
[09:57] powerful gpus
[09:58] so yeah i think so i think we will move
[10:00] to be more gpu intensive but
[10:02] we have to be realistic that it's a
[10:03] complicated game they'll always have a
[10:04] decent amount of cpu load yeah
[10:07] it's it's it's interesting because
[10:10] there's an interesting challenge because
[10:11] we are running a live environment in the
[10:14] middle of
[10:16] our attempt to make the game so it's
[10:19] it's you you you you you build the
[10:22] universe out as it is and then you do
[10:24] something that makes it less cpu
[10:26] intensive and and puts more in the gpu
[10:28] and it's great but we don't just stay
[10:30] there we then add more to the game more
[10:32] features to the game more places the
[10:34] game more things that end up being cpu
[10:36] intensive and then you have to work to
[10:37] bring that that new stuff over to the
[10:39] cpu and then somebody comes in and adds
[10:41] more stuff to the game which adds more
[10:43] cpu stuff and it's like okay let's move
[10:46] to let's see what we can do to move that
[10:47] you know on there so it's this it's this
[10:49] constant uh uh neverending challenge of
[10:52] development here uh because even after
[10:54] the day when we go live and we say 1.0
[10:57] and stuff development of star citizen
[10:59] doesn't stop you know we we keep moving
[11:02] we keep adding more planets we keep
[11:03] adding more systems i mean this train
[11:05] doesn't stop so so it's it is going to
[11:08] be a forever challenge
[11:10] uh for your team and all the teams all
[11:12] the performance teams to just constant
[11:15] to constantly not just optimize for
[11:17] what is there today but to continuously
[11:20] you know improve on everything else that
[11:22] comes tomorrow
[11:25] eventually it becomes
[11:27] slightly easier um the initial you know
[11:29] we've done a lot of building a lot of
[11:31] core technology um as we get further
[11:33] along we'd hope there wouldn't be so
[11:34] much
[11:35] core type of foundation like building
[11:37] the structures that allow us to build
[11:39] the universe it'll be more hopefully
[11:41] game features you know iterating on the
[11:43] phone adding more like mechanics um
[11:45] which should hopefully not be as
[11:48] intensive you know you're either mining
[11:50] or you're hacking you're either shooting
[11:52] or you're you know
[11:53] whatever the mechanics are
[11:55] they hopefully won't pile up forever um
[11:58] that's maybe different to the gpu side
[11:59] we'll constantly add visual effects you
[12:02] know for whatever
[12:03] machines can handle we'll add it but uh
[12:05] yeah hopefully on the game side which is
[12:08] where we've struggled with cpu uh speed
[12:11] that was e slightly but we'll yeah the
[12:13] game's gonna always be growing and
[12:15] if the cpus can handle it there will be
[12:17] no reason not to
[12:18] add more complexity
[12:20] yeah i i i think it's i think it's safe
[12:22] to say it's in our dna we're going to
[12:23] push this stuff as far as it goes we're
[12:25] going to keep pushing it so there's
[12:28] there's not likely to ever be just open
[12:30] overhead we're going to keep pushing
[12:33] that that's in our dna here
[12:35] uh let's see next question here when
[12:38] vulcan support does get implemented are
[12:40] you expected to look further into mesh
[12:43] shader pipeline and the benefits within
[12:46] um my shaders are something that
[12:48] certainly interests me greatly uh that
[12:50] we would really love to look at um
[12:53] one thing we maybe have to temper that
[12:55] with is that the adoption rate currently
[12:57] isn't huge among the market um for this
[12:59] new technology i think
[13:01] rough numbers i mean maybe 30 or
[13:03] something of our player base um but
[13:05] that's obviously going to grow over time
[13:06] and
[13:07] we also have to take in by the time you
[13:08] actually make the technology that the
[13:10] adoption rate would increase by the time
[13:11] you release it but still we have to be
[13:14] careful in what we use it for like if we
[13:16] made the use of these new mesh shaders
[13:18] which is a new way of
[13:19] building and rendering geometry if that
[13:21] was our core only
[13:23] method of rendering geometry we would
[13:26] lose half our player base and that would
[13:27] be a huge
[13:28] storm so we have to be wary that that's
[13:31] not a possibility now you can use it for
[13:33] optimizations which is one of the main
[13:34] benefits but also then you're benefiting
[13:37] an optimization to the highest power
[13:39] gpus that may not actually
[13:41] need it that much um so it's a difficult
[13:43] question the ideal use is something that
[13:46] can type of improve the visuals but then
[13:48] the people with the greater power gpus
[13:50] with the more modern gpus get to see
[13:52] these new visuals but somehow doesn't
[13:54] impact the experience of the the
[13:56] slightly less powerful gpus to still
[13:58] play the game um we really want to cut
[14:00] people off but there's not so much and i
[14:02] don't know very interpreted as holding
[14:03] back um it's more bang for buck you know
[14:06] if we're not doing messages we're doing
[14:07] something else we're doing some of the
[14:08] benefits as many people as we can but at
[14:11] some point the tide will turn and the
[14:13] benefits will be clearer by using mesh
[14:16] haters than they will by focusing
[14:17] elsewhere so it's definitely something
[14:19] that's very interesting for us and
[14:20] there's a few areas we've been uh
[14:23] discussing that we would like to use
[14:24] them potentially but yeah gen 12 is the
[14:27] focus so type of that's one light until
[14:29] gen 12 shift
[14:30] okay
[14:32] um this may be a little outside your
[14:34] wheelhouse but we'll
[14:35] we'll try it we'll see what we get
[14:37] has there been any internal testing of
[14:40] linux using vulcan
[14:43] this person is using vulcan the backdoor
[14:45] question about linux basically so um
[14:47] yeah well i'll pre-phase it with uh i
[14:49] generally don't have much involvement
[14:50] with linux that'll be more engine team
[14:51] and other stuff but i do know aspen um
[14:54] so in the graphics team internally i
[14:56] don't want an extent i think most of our
[14:58] guys don't win linux for the game
[15:00] however
[15:03] and gen 12 is our focus and windows
[15:05] support um however
[15:06] i know some of our employees have played
[15:08] the game and frequently play it via i'm
[15:10] told lucas and proton are the libraries
[15:12] they use on the next um and that they
[15:14] get reasonable performance already now
[15:17] switching to vulcan will make that
[15:19] existing method of running
[15:21] uh linux much faster and should you know
[15:24] theatrically give you uh comparable or
[15:26] even better performance on linux so
[15:29] i mean i'm not sure if that's the only
[15:30] way we'll support this i'm not sure if
[15:32] there's gonna be a native client that's
[15:33] a question for somebody else for engine
[15:35] team or cr but but i'm told there was
[15:38] there was a way and that way it's going
[15:39] to get faster with linux but we haven't
[15:41] tested ourselves yet um linux type of
[15:44] sorry the vulkan sport isn't a point
[15:45] where you could directly compare a to b
[15:47] like i said we're missing the
[15:48] transparent geometry at the moment so
[15:50] it'll be a bit unfair to compare like
[15:52] it might even run faster you've been
[15:53] missing parts of the game so
[15:55] until the type of got vulcan finished is
[15:57] only one point we'll be able to do a
[15:58] fair comparison
[16:00] um
[16:01] uh and i'll probably just sit in there
[16:02] just because people ask um i'm told and
[16:04] again this is not my area but there
[16:06] isn't uh an issue with vulcan at the
[16:08] moment easy enter cheat which i believe
[16:10] epic are looking into and there was sdks
[16:12] being released uh in the coming months
[16:14] and when they are released we'll be
[16:16] integrating them to try and resolve that
[16:17] issue um but again outside my sphere of
[16:20] knowledge i'm just dumping information i
[16:23] knew there would be linux questions so
[16:24] yeah yeah it's it's
[16:26] i saw it and i'm like this is like a
[16:28] 1980s sitcom backdoor question where
[16:31] they're they're they're trying to use
[16:32] the topic of one thing to back door a
[16:33] subject or another but i figured you
[16:35] know i can i could you know every once
[16:37] in a while
[16:39] uh let's move into some we got some
[16:41] questions here that are mostly about uh
[16:43] keeping visuals up to date uh uh one of
[16:46] the um
[16:47] ongoing concerns uh because our game has
[16:49] been in development uh for a while and
[16:51] because we've been running a live
[16:53] environment during that development
[16:54] since 2013 when the hangar module that
[16:57] came out
[16:59] lots of questions have to do with
[17:01] how you're going to keep things up to
[17:02] date so uh with the dev cycle being so
[17:05] long for star citizen how do you deal
[17:08] with the ever changing graphics tech and
[17:10] rework and still keep moving forward
[17:14] so
[17:15] i think every aaa studio with its own
[17:18] engine has this the same challenge
[17:19] really keeping up to date um
[17:22] they constantly have to make new post
[17:24] effects as new technology or new ideas
[17:26] come about
[17:27] in the industry
[17:28] so
[17:29] that's not massively different to us to
[17:31] any other type of
[17:32] i don't want to name them but i'm sure
[17:34] you'll know of the type of the ones that
[17:36] aren't part of massive using big engines
[17:38] or have multiple studio uh publishers um
[17:41] but yeah i don't see that being
[17:43] massively different uh we only have a
[17:45] couple of differences internally and one
[17:47] is we can't wipe the slate clean every
[17:49] couple of years when we release the game
[17:51] or however frequent a big studio might
[17:53] so we can't say well that was good we we
[17:55] did mostly good but we didn't like that
[17:56] technology so we're gonna next time we
[17:58] need a different one we have to build
[18:00] that while we're while we're running we
[18:02] have to build the next version of
[18:03] whatever it is so that that doesn't
[18:05] introduce some complexities uh but
[18:08] overall it's not especially for the
[18:10] graphics team it's not been a problem
[18:11] for us um most things are straight
[18:13] replacements you know you replace the
[18:14] old bloom effect for a new bloom effect
[18:16] you replace the old shader with a new
[18:18] shader it's not a a major problem and
[18:20] that's it
[18:21] you know i've been in a very uh quick
[18:23] dev cycle on a previous company and it's
[18:25] not that much different i don't find a
[18:27] major challenge the one point that i
[18:28] would say is different though is the art
[18:31] the art pipeline and the artwork we have
[18:33] so
[18:34] we have to maintain everything that's
[18:36] been built we can't say oh we've done
[18:38] this new technology but these five
[18:39] spaceships don't work anymore that's
[18:41] just not an option so
[18:42] everything we make has to remain
[18:44] backwards compatible and what we tend to
[18:46] do is
[18:47] save for the art pipe and make a new
[18:48] shader that can do i don't know like the
[18:51] tint system for the spaceship so we can
[18:53] more easily roll out new skins
[18:55] it may not work in an old spaceship but
[18:57] we have to that system won't work an old
[18:59] spaceship we'll ship two versions of the
[19:00] shader the new one the old one and then
[19:03] somebody when they get the chance we'll
[19:04] go back to that ship assign the new
[19:06] shader maybe fix up anything then he's
[19:07] fixing up and then then we're good again
[19:09] but
[19:10] you know we can't demand that they work
[19:12] at the same frequency so we'll do the
[19:14] new technology and they will opt into it
[19:16] when they get round to it which you know
[19:17] might be the next week it might be a few
[19:19] months but eventually these things
[19:21] uh and once we get close to type of like
[19:23] you know 80 adoption we'd have to poke
[19:25] people with a stick to try and
[19:27] get over the hurdle so we can delete the
[19:28] old technology and that's constantly
[19:30] happening we have lots of different
[19:31] technologies that are type of
[19:32] in-progressive type of being rolled out
[19:34] across the assets so that's the biggest
[19:36] issue but it's not really a technology
[19:37] issue it's more of a data management
[19:39] issue with the size of the content of
[19:41] the game which is very huge i don't even
[19:43] know how many spaceships we have now but
[19:44] it's
[19:45] yeah big numbers
[19:46] it's a lot uh no it it it's a it's an
[19:49] issue that that
[19:51] people who have played other mmos uh at
[19:53] least the mmos that have survived uh for
[19:55] a while see it's just the the the the
[19:58] world of warcraft or or star wars old
[20:01] republic or star trek online just i'm
[20:03] trying to think of the sci-fi ones that
[20:05] are out there uh
[20:07] you know they're they're all they're
[20:08] they're constantly making updates
[20:09] replacing shaders uh and stuff like this
[20:12] that they don't they don't throw out
[20:14] their engine and start with another
[20:15] engine it is constantly you know adding
[20:17] and upgrading and and and just you know
[20:20] just you know swapping parts out
[20:21] eventually you know you start getting
[20:23] into the ship a thesis conversation
[20:25] where have you replaced every every part
[20:26] at some point is it still the original
[20:28] one uh and that's a question for video
[20:31] game philosophers not for
[20:32] uh
[20:34] dummies like me who just talk on the
[20:36] video
[20:37] let's move to another one
[20:40] here's an interesting follow-up
[20:43] will star citizen graphics get outdated
[20:46] or surpassed by other engines like
[20:48] unreal five lots of chat about unreal
[20:51] five in the uh in the chat because
[20:53] that's the current hotness
[20:55] yeah i mean
[20:56] similar questions the previous one in in
[20:59] regard that
[21:00] every developer that is not using unreal
[21:02] or or any big engine is going to have
[21:04] that same
[21:06] question uh uh and
[21:08] it's it's not really that different to
[21:09] be honest than the last 10 15 years you
[21:12] know maybe since you know say unreal
[21:14] three came around you know when we
[21:15] started to see these big engines and
[21:17] also the publishers that have
[21:19] been joining more devs together
[21:21] so i don't think it's anything new this
[21:23] obviously that always was going to be
[21:24] the big new shiny thing and some company
[21:27] not always the unreals but sometimes
[21:29] it'll be the other devs will come up the
[21:31] new shiny thing and everyone will learn
[21:33] from that and they'll trial it and
[21:36] that will look at the you know success
[21:38] or failure of that engine that game and
[21:40] see if that technology survives test of
[21:42] time and if it does other studios will
[21:43] naturally
[21:44] you know make their own version of that
[21:46] and absorb it into their pipeline um so
[21:48] you have this i think that's just the
[21:49] natural ebb and flow of the industry
[21:51] somebody will push head in one area the
[21:53] other people will eventually catch up
[21:55] it's continuous i don't think it's
[21:56] always one engine though i um
[21:58] there is things that the large companies
[22:01] can push
[22:02] much harder on which like i say the
[22:03] tooling um
[22:05] because they are selling a product to
[22:07] use their engine for people that maybe
[22:09] are not even professional game devs
[22:10] sometimes so they have to make the
[22:12] tooling very powerful and easy to use
[22:15] it's less of a focus when you have you
[22:16] know professional devs
[22:18] uh they're very used to the engine um so
[22:21] yeah it's it's something i'm not gonna
[22:23] pretend that we don't look at say uh the
[22:25] latest ue5 technology and see that
[22:27] that's pretty good you know there's some
[22:29] really impressive stuff there uh the
[22:30] mana in particular is very interesting
[22:34] but
[22:35] yeah i'm not particularly worried as
[22:36] long as we continue to develop our
[22:38] engine as long as we continue to
[22:40] maintain and grow our graphics team and
[22:42] keep up the latest technology yeah we
[22:44] will be there just yeah it just doesn't
[22:46] mean that the day after unreal
[22:48] implement98 we're gonna implement
[22:50] tonight
[22:51] and there is sometimes obviously when
[22:53] the latest thing comes down
[22:54] there is always this and we're not
[22:56] talking about nana here specifically
[22:57] just in general but
[22:59] the assumption that that solves all of
[23:00] life's problems and then you wait six
[23:02] months or a year and you find out that
[23:04] it solves a subset of problems it's not
[23:06] you know it's not the solution to
[23:07] everything um there is many aspects
[23:10] uh to a full package of full engine like
[23:13] we've got all unreal
[23:16] so as long as we continue to maintain
[23:18] the engine and grow the graphics team
[23:20] and everything we should have no issue
[23:22] keeping up with the you know cutting
[23:23] edge
[23:24] i think so yeah i mean our visuals are
[23:26] still cutting edge now those areas the
[23:27] engine that we have we are extremely
[23:28] proud of that will uh match or surpass
[23:31] our vendors and those areas that are not
[23:32] as good that we need to improve um
[23:35] so i i don't see a major issue there um
[23:37] and for example
[23:38] they've picked unreal so i'll talk about
[23:40] that but the nanite tech with it
[23:42] improves the type of quality of geometry
[23:45] that that's super powerful in some areas
[23:47] it's it's a benefit everywhere but the
[23:49] main thing is type of natural geometry
[23:51] so for planets and things like this that
[23:52] could be a great benefit but it doesn't
[23:54] do
[23:55] as much for some other types of geometry
[23:57] internal spaces and i think our quality
[23:59] on our type of interiors has been
[24:01] extremely high for a number of years and
[24:03] matches any other game i see so
[24:05] you know
[24:07] it's not that we don't want much better
[24:08] you know natural geometry but
[24:11] yeah we'll get there um
[24:13] yeah but i'm not worried yeah as long as
[24:14] we you know maintain the development
[24:16] maintain the team as long as you're not
[24:17] going to fire tomorrow we're all good
[24:20] right
[24:21] one more question on the topic kind of a
[24:24] follow-up here uh i'm glad you said the
[24:26] main the the the maintaining anything
[24:28] because that's literally this question
[24:30] uh
[24:31] the game in his engine has already
[24:33] allowed the graphics to evolve massively
[24:35] compared to the original kickstarter
[24:36] days but can this be maintained to keep
[24:40] up with modern titles does the engine
[24:43] have
[24:44] a limit
[24:45] it was there going to be a point where
[24:47] we can't
[24:48] improve
[24:49] so
[24:50] i don't think so it's almost the
[24:51] opposite um first off like an engine
[24:53] isn't a single thing obviously that has
[24:56] a limit you hit it and then you stagnate
[24:57] or you kind of replace it it's many many
[25:00] different subsystems and subsystems of
[25:02] the subsystems
[25:04] and these like i mentioned before are
[25:05] being constantly iterated or replaced uh
[25:07] and that's not a problem that's not
[25:09] wasted that's just the natural evolution
[25:11] of software um
[25:13] so in terms of where can we maintain it
[25:16] i think it's the opposite i think we're
[25:17] accelerating quite quickly i think
[25:19] the initial years was finding out of say
[25:22] for the graphics team is finding our
[25:23] feet we obviously inherited a code base
[25:25] and
[25:26] learning that and then brought more
[25:28] people on board to have a better
[25:29] understand and start to develop that
[25:31] code base and
[25:32] more recently on the graphics side we'll
[25:34] obviously replace the renderer so now it
[25:35] is 100
[25:36] hours uh i i understand our
[25:38] understanding of every nook and cranny
[25:40] of it
[25:41] um and then once that's done
[25:43] with type of uh our rate is going to be
[25:45] much greater be able to keep up with new
[25:47] technology um and that's the big
[25:49] motivator for gen 12 and the performance
[25:51] was one but the secondary one was to be
[25:52] able to adapt uh to new technology and
[25:54] create new pieces of uh new features
[25:57] much more quickly so yeah i think
[25:59] actually again as you know assuming the
[26:01] team stays the same or grows in size
[26:03] we've got plenty of
[26:04] uh capacity now to
[26:06] develop things much quicker than we have
[26:08] done in the past and we need to
[26:09] obviously because to keep up with the
[26:11] big engines but yeah
[26:12] uh i'm not considering that way i think
[26:14] we're going to be
[26:16] pushing a lot more visuals in the coming
[26:18] years
[26:19] uh chat is having a bit of a row about
[26:22] the difference between gen 12 renderer
[26:24] and dx12
[26:25] uh are
[26:27] are we doing dx12 are we not doing dx12
[26:30] what what's this
[26:31] no
[26:32] immediate reason for the dx12 we picked
[26:34] the gen 12 name
[26:35] well we started planning this render
[26:37] long before we'd necessarily settle 100
[26:39] on vulcan and
[26:40] it would we just depict something um so
[26:43] you know dx12 was type of has a
[26:45] numbering system um at the time vulcan
[26:47] and the other apis didn't happen in wing
[26:49] so it's like 12. everyone understood
[26:50] what dx12 was in the industry so we went
[26:52] with something that had the number 12 in
[26:54] it um it helps pin down to this piece of
[26:57] tech and then the next one if you call
[26:58] it the new renderer then you have the
[27:00] new new end or the better renderer so
[27:02] it's called gen12 um but you know in the
[27:04] end we decided the vulcan was the the
[27:06] better choice for us because of the the
[27:07] linux aspect and a few other
[27:10] uh technology points of view made it
[27:11] slightly better for us um but it wasn't
[27:13] a big deal it wasn't you know we could
[27:15] have gone dx 12 but at the moment
[27:16] there's no pressing reason for us to
[27:18] implement the x12 um we could it
[27:20] wouldn't be a huge effort um
[27:22] put a couple of guys on it for some
[27:24] number of months and you would
[27:25] eventually uh pop that out but unless we
[27:28] have a reason to believe there was some
[27:29] new technology on dx12 or
[27:31] or some platform or something that
[27:33] required that there is no reason for us
[27:35] to really go there at the moment so for
[27:37] now there's no plans for directx 12 but
[27:39] the engine is set up in a way that we
[27:40] very much could implement another api if
[27:43] we needed to you know if the success of
[27:45] the vulcan comes along or
[27:47] the x-13 is is the thing that we need to
[27:49] make the world better then we will do
[27:51] that
[27:52] fair enough
[27:54] all right let's get let's let's move
[27:56] more into like life in in the game and
[27:58] how this stuff actually like manifests
[28:00] and and stuff for players in the game uh
[28:03] right off the bat
[28:05] will we have more refined graphics
[28:07] settings soon uh currently our options
[28:10] are very limited and somewhat confusing
[28:14] um yeah i have to admit we've not spent
[28:16] a great deal of effort there as you'll
[28:17] probably see from the comment but the
[28:20] we've been holding off for a while
[28:22] because of we were mostly cpu bound then
[28:25] graphics options are generally to try to
[28:27] squeeze out performance um generally you
[28:29] know we generally want at the highest
[28:31] quality most time and
[28:33] and it's only to scale back and mostly
[28:35] would not be gpu bound so there wasn't a
[28:37] huge deal huge motivation for
[28:39] scaling the engine back um all the folks
[28:42] have been getting the cpu cost down
[28:43] which is what the servers need it's what
[28:45] the clients need
[28:46] so that's been the focus and then
[28:49] implementing gen 12 changes the way
[28:51] the render works so it would change the
[28:53] way we'd expose the options so if we're
[28:56] going to get 1012 done and then we're
[28:57] going to have a fresh look at these
[28:59] options they will probably have quite a
[29:00] radical change we're going to simplify
[29:02] them a lot but then also
[29:04] we'll have an advanced section they'll
[29:05] be much more complicated than we have
[29:07] now but um
[29:08] yeah at the moment i think there's four
[29:10] different quality settings but we're
[29:11] gonna maybe change that up maybe reduce
[29:13] that a bit but then um the memory
[29:15] management is something we're probably
[29:16] gonna push much further
[29:19] yeah but yeah we're definitely gonna
[29:20] have a whole bunch of new options and
[29:23] make sure that the options we have give
[29:26] you some meaningful change some of the
[29:27] settings we have there you can change
[29:29] things to high or low reduce draw
[29:30] distance to increase them you'll find
[29:32] that the frame rate doesn't really
[29:33] change and it's a point they're saying
[29:35] so why have it so we're going to set
[29:37] them based on what it needs to change
[29:39] the frame rate by a certain fraction so
[29:41] you know high or might be 20 slower than
[29:43] medium and low might be 20 faster
[29:46] that would be the motivation and if it
[29:47] doesn't change performance we won't
[29:48] expose it
[29:50] okay
[29:51] um
[29:52] so far up to that while we're in the
[29:53] graphics settings options here uh would
[29:56] it be possible to add a windowed
[29:58] borderless mode to the graphics setting
[30:00] vastly improves the quality of life for
[30:02] multi-monitor users which is a fairly
[30:04] substantial part of the player base
[30:07] so
[30:08] we already support a borderless window
[30:10] mode but um i'm going to gather because
[30:12] they've talked about multi-monitor
[30:13] they're probably meaning that i think it
[30:15] centers onto your main monitor at the
[30:16] moment and it locks the resolution of
[30:17] your center monitor so you can't drag
[30:19] that out to spam two or three monitors
[30:21] and customize the resolution if you
[30:23] don't say if you've got three 4k
[30:24] monitors maybe you don't want to run at
[30:25] 12k
[30:26] uh unless you've got a monster gpu so
[30:28] yeah um yes definitely it's a bit of an
[30:30] embarrassment we haven't quite got to
[30:31] that yet that's definitely something
[30:32] that's very high on our priority list to
[30:34] post that to fix his stream as soon as
[30:36] gen12 was done um yeah so resolution
[30:38] scaling and then picking you the size of
[30:40] the monitor and let you uh the window
[30:41] and let me move it around yeah
[30:43] yeah definitely yeah it it
[30:45] there is some version of it there but it
[30:47] doesn't have the features that a lot of
[30:49] people
[30:51] expect it to have and internally we all
[30:53] um
[30:54] we already have the resolution scaling
[30:55] which is one aspect of it that people
[30:56] have been asking for as well but that
[30:58] doesn't quite work why you are yet so
[31:00] there's just a few bugs there and then
[31:01] the changing of the size of it shouldn't
[31:03] be a complicated issue so yeah i can't
[31:05] can't give an exact time frame but it it
[31:07] definitely will be we'll be looking at
[31:09] that very
[31:10] soon
[31:11] i tend to play almost everything in
[31:13] windowed borderless because i need to
[31:15] switch over to teams or email or
[31:17] something on another monitor very easily
[31:20] uh you know because you know just in the
[31:21] middle of the day cr will ping me or
[31:23] something i just i just gotta i always
[31:25] have to keep an eye on the left on the
[31:27] left screen while i'm playing on the
[31:28] middle so windows borderless makes that
[31:30] makes that experience a lot easier for
[31:32] me there can be some quite uh
[31:34] technical differences between when you
[31:35] run the the full screen uh borderless
[31:37] and the exclusive full screen you get
[31:40] it depends on lots and lots of factors
[31:42] but there is changes in performance
[31:44] potentially one depending on your system
[31:46] either could be faster and is also
[31:47] changing the latency as well uh
[31:49] generally full screen exclusive is less
[31:51] latency
[31:52] but yeah
[31:53] a pain when you're getting messaged by
[31:55] someone and
[31:56] you know discord or something and you
[31:57] want to alt tab well i i i don't i don't
[32:01] ever worry about latency i i suck at any
[32:03] latency so it doesn't matter
[32:05] it's
[32:05] a couple fractions of a second aren't
[32:07] gonna isn't the difference between me
[32:08] being good enough or not i'm just bad
[32:12] um uh
[32:16] are there any plans to let us turn off
[32:18] temporal aaa or and get rid of the
[32:21] ghosting that it brings
[32:24] ah that's a funny one
[32:27] so
[32:28] i got halfway through it i was like
[32:30] yeah so temporal aaa anti-aliasing um is
[32:34] one form of what we call a temporal
[32:35] accumulation system it uses data from a
[32:38] previous frame to basically just make
[32:40] things cheaper it opens the door to a
[32:42] whole host of new technologies now
[32:44] anti-aliasing is one of them and the
[32:46] most obvious but it actually is a major
[32:48] way we can reduce noise in all of our
[32:50] rendering um and also it can help you
[32:53] introduce blending effects you can blend
[32:54] between two things like for example uh
[32:57] currently our planet uh terrain uses the
[33:00] temporal blending to blend between all
[33:02] the different ground textures
[33:04] so
[33:06] in terms of turning off temporal a if
[33:08] you turn it off then you don't just turn
[33:10] off anti-lacing you turn off all the
[33:12] temporal blending system so you'll get
[33:14] noisy shadows noisy occlusion
[33:17] no blending on the terrain
[33:18] so yeah it's not quite as simple as
[33:21] turning it off and this is an
[33:23] unfortunate reality of modern rendering
[33:25] and you'll find that in many engines
[33:27] like 78 of them is the case because it
[33:30] gives you so much performance um
[33:33] it lets you spend it on everything else
[33:35] and usually it's only type of quite
[33:36] bespoke quite uh
[33:41] narrower focused games that can afford
[33:42] to not use it and can blow the you know
[33:44] bandwidth on a different form of a
[33:46] that's usually more expensive like msa
[33:49] so
[33:50] unfortunately probably a hard off at the
[33:52] moment is not possible um we can
[33:55] potentially expose the option but it
[33:56] would probably have to come out if we
[33:57] did that for massive warning that what
[33:59] you're about to do is going to break the
[34:00] visuals you know what i don't want to
[34:01] see is the graphics moment we're seeing
[34:03] pictures of our game looking awful and
[34:05] broken and people posted look how bad
[34:07] this game looks so
[34:08] um but maybe there's a halfway house
[34:10] maybe we can maybe there's decrease the
[34:12] strength of it but with a warning that
[34:13] you know some effects will become more
[34:15] noisy as a result of that so you'd think
[34:17] that it's
[34:18] you know just gonna make the image
[34:20] crisper or type of sharper but actually
[34:22] you'll be degrading it in other ways
[34:24] um
[34:25] yeah um so
[34:27] maybe not a hard off but there might be
[34:28] some some flexibility now we can have a
[34:30] look at that when we look at the
[34:31] graphics options to see if there's
[34:32] something that makes sense um
[34:35] yeah
[34:36] it's a tricky one though it's an
[34:37] unfortunate reality nobody likes temple
[34:39] ia in the company like no especially ui
[34:41] people hate it because of the potential
[34:44] messengers um
[34:46] uh yeah you'll find everyone from vfx
[34:48] hates it because it kind of smudges out
[34:50] their particle effects it's not a nice
[34:52] thing
[34:53] nobody appreciates alternative but it's
[34:54] amazing what it can do it is vastly
[34:57] superior to the alternative
[34:59] so it's tricky
[35:00] but maybe you know some people some
[35:02] people just want the image sharp as
[35:03] having like sharpening controls or
[35:04] tweaking that is okay but the ghosting
[35:07] the ghosting is specifically which this
[35:09] person mentioned is tricky because that
[35:11] is a product of using the data from the
[35:14] previous frame in an area screen where
[35:15] you don't have data from the previous
[35:16] frame so if you turn the camera quickly
[35:18] or somebody runs in front of you
[35:20] you don't know what was there previously
[35:21] so you have to make it up and basically
[35:23] what you're seeing when there's the
[35:24] ghosting is sometimes actually the lack
[35:27] of temporal data so that's type of a
[35:28] clue as to what you might get if you
[35:29] didn't have temporary so yeah for any
[35:32] issue
[35:34] it's just going to move very slowly
[35:37] yeah um we'll see what we can do see if
[35:39] there's something that can happen when
[35:41] we look at the graphics options you can
[35:42] kind of help with that
[35:48] this person enabled auto hdr on windows
[35:51] 11 and says it looks extremely good can
[35:54] we expect native hdr in the future did i
[35:57] say hdr the first time or did i say
[35:58] something else
[36:00] they enabled auto hdr in owner's eleven
[36:02] it looks good can we expect native hdr
[36:04] in the future
[36:06] yes absolutely um so we already support
[36:07] hdr through most of the pipeline you
[36:09] know all the rendering is hdr um
[36:11] unfortunately there was two things that
[36:14] we left to do to complete that um one is
[36:17] our color processing so
[36:19] uh generally what happens is you you
[36:20] produce your image in a high dynamic
[36:22] range and then you crunch it down to a
[36:24] low dynamic range which is the bit you
[36:26] know hdr needs to modify um but then we
[36:29] then color correct it just like you
[36:30] would in a film you like adapt the
[36:31] colors you try and produce a mood
[36:34] and that process is
[36:37] built in low dynamic range and as a
[36:40] result of that it's
[36:42] it's not and it's an art because an
[36:43] artistic process we can't just turn it
[36:44] into hdr it needs to go back to art we
[36:46] need type of review how would they would
[36:48] like to do this color equation in hdr
[36:51] it's a reasonably known problem other
[36:52] studios have tackled it
[36:54] but that's just the piece we haven't got
[36:56] to um
[36:57] and then there is a minor bit of work
[36:59] into like making sure that it works in
[37:01] all the different types of hdr there is
[37:03] so many different formats and so many
[37:04] different blindness screens and monitors
[37:07] of you have to do a bit of careful q a
[37:09] to make sure that you actually get good
[37:10] results um there's no point just testing
[37:12] on my
[37:13] fancy hdr screen and then having a
[37:15] natural consumer one might actually look
[37:16] good so
[37:17] yeah there's two two little bits to
[37:18] finish off and uh the
[37:20] continuing theme here is
[37:22] after gen 12 we really just want to get
[37:23] gen 12 done but yeah that that's quite
[37:26] high on the list um it initially was not
[37:29] as important because hdr monitors were
[37:31] relatively rare for the pc market
[37:32] compared to consoles which you'd play on
[37:35] a tv which tends to support hdr um but
[37:37] it's definitely become a lot more
[37:39] popular now
[37:40] yeah
[37:42] uh see uh while we're on graphics things
[37:45] we got a nice little collection of
[37:47] graphic settings questions here um
[37:50] will you add an option to turn camera
[37:52] based motion blur off but keep
[37:55] object-based motion blur on
[37:59] yes
[38:00] and i'm slightly ashamed that we don't
[38:06] i know that uh digital family friends uh
[38:08] have pushed hard for that and yeah um
[38:11] yeah clearly um the camera motion blur
[38:14] is uh
[38:15] contentious to say the least um object
[38:18] motion blur has some
[38:20] some public backing far more than the
[38:22] camera motion blur which is
[38:24] notoriously
[38:25] hated by a lot of people
[38:27] good for cinematics great cinematics
[38:29] makes it amazing wonderful for
[38:30] cinematics
[38:32] yeah while you're in the fast-paced
[38:33] action uh it's controversial yeah and i
[38:35] think i think there is a
[38:36] slider i don't i can't know what's
[38:38] exposed we have type of ability to tone
[38:39] it down but yeah most people were just
[38:41] like off i don't want that part of it it
[38:43] doesn't add anything
[38:44] um but things like um character
[38:46] animations and gun reloads and stuff can
[38:47] look a lot better with some object
[38:49] motion blur if it's
[38:50] you know at the right level not too in
[38:52] your face
[38:56] we just optimized the game until it was
[38:57] at 240 frames a second and then your eye
[38:59] does it for you
[39:02] the human eye can't see more than 60
[39:03] frames a second
[39:05] i'm just kidding right true i'm just
[39:08] kidding
[39:11] we don't have a frame rate
[39:12] why do i poke the bear sometimes i don't
[39:14] know
[39:15] i have a pulse control problem
[39:18] um
[39:21] as players consider gpu purchases
[39:25] should they expect vram usage to keep
[39:28] increasing as the game is developed
[39:31] that's a just one um so
[39:34] we've had to be quite careful in the
[39:35] past with the amount of video memory use
[39:38] we have you know backers that are backed
[39:40] early on that don't have quite so
[39:41] powerful gpu so um they don't hold us
[39:44] back we're just trying to make sure that
[39:45] we type of don't rule them out of the
[39:47] game so we've been quite smart in how
[39:49] we've used the memory and we make sure
[39:51] that they're still able to win the game
[39:52] obviously the performance will be not as
[39:54] good on their machines um
[39:56] so yeah i think with three to four gigs
[39:57] you can run the game quite comfortably
[39:59] and get decent visuals um so and i think
[40:02] type of the four gig region will stay
[40:04] running the game quite nicely for quite
[40:06] some time
[40:07] um
[40:08] i don't think there's a technology
[40:10] reason why the minimum needs to increase
[40:12] but what will happen is
[40:14] we have all these different pools of
[40:15] memory and how much use for textures how
[40:16] much use for geometry and so on and the
[40:18] type of the core amount remember you
[40:20] need to run
[40:22] everything without textures without
[40:23] measures is increasing over time and
[40:24] eventually
[40:26] out of your four gigs if we end up with
[40:27] three gigs to do the bare basics
[40:29] then your one gig left won't give you a
[40:31] lot of textures in a lot of geometry
[40:33] you'll still be able to run the game but
[40:34] eventually yeah you'll start getting
[40:35] diminishing returns eventually um uh and
[40:38] there's elements of that already like
[40:40] when we added planets gas clouds these
[40:42] things all took up memory so i think gas
[40:44] clouds are budgets like 300 megs 400 x
[40:46] or something so that has to come from
[40:48] somewhere and if your machine doesn't
[40:49] have it you're getting less of something
[40:51] to pay for that
[40:52] now one thing we are going to do is with
[40:54] gen 12 um as a necessity of the way
[40:57] vulkan works the memory management is
[40:59] much more explicit basically rather than
[41:01] uh directx or nvdon video intel managing
[41:05] the memory for you it's left largely to
[41:06] yourself as a developer but as a result
[41:09] of that we're going to be or we are much
[41:10] more strict with how we use the memory
[41:12] and what we're going to do is what a few
[41:13] other games have done this type of
[41:15] expose that to you in the advanced
[41:16] graphics options so you can see exactly
[41:18] what memory using and type of balance
[41:20] that as you see fit so if you want you
[41:22] want your more textured memory and then
[41:23] you will sacrifice something else then
[41:25] that's your choice and you can dab of
[41:26] see how this is
[41:27] how we're adapting rather than being
[41:28] hidden from you slightly at the moment
[41:32] and the other thing that a lot of people
[41:33] maybe don't realize is resolution you
[41:35] run the game has a huge impact on the
[41:37] map memory so when i'm saying like four
[41:39] gigs is okay if you're trying to win the
[41:41] game you know 8k or 4k widescreen or
[41:43] something you are taking a huge amount
[41:45] of memory for the bare bones just
[41:48] getting the screen rendered without any
[41:50] geometry or textures in there so you
[41:51] leave very little room for them
[41:53] so
[41:54] if we expose it to you and show it to
[41:55] you you'll be much more clear and people
[41:57] with that don't have as much memory will
[41:58] be able to make a smarter decision how
[42:00] they want to use it if they're
[42:01] interested obviously we'll have
[42:02] automatic settings do our best job but
[42:04] yeah should you want to delve into that
[42:06] so to answer the question yes vram used
[42:08] to will steadily increase but i don't
[42:10] think i'm minimum will increase
[42:12] for a while i think it will be quite
[42:14] stable for quite some time um especially
[42:17] the four gig region is gonna be okay
[42:19] but yeah um we definitely want to be
[42:21] able to push to the eight
[42:23] you know
[42:24] and more eventually as as you know
[42:27] and we need to because like for example
[42:29] the consoles have you know
[42:30] more memory than four gigabytes
[42:32] significantly so and we need to be
[42:33] beating them so
[42:34] yeah
[42:35] we need to use it but we just need to
[42:36] keep something in but in reserve for the
[42:39] uh for the
[42:40] for the four gig people
[42:42] all right so let's uh uh
[42:45] let's move out of the graphics options
[42:47] and into the the the the graphics as
[42:49] people experience them in the games here
[42:51] uh what they actually see on the screens
[42:53] uh
[42:54] right off the bat here how are you
[42:56] planning
[42:57] on handling the graphical toll as
[42:59] players enter a system when multiple
[43:02] space stations millions of objects
[43:04] thousands of players all in one location
[43:06] uh current because currently
[43:08] xenothreat
[43:09] can sometimes cause a rather nifty uh
[43:12] powerpoint presentation uh for people uh
[43:15] sometimes even when they there's like
[43:17] less than 30 hanging around
[43:20] um
[43:21] so
[43:23] i think a lot of that will be cpu issues
[43:25] usually i mean it would have to profile
[43:27] each case but when we've looked at
[43:28] things like zenfra it's nearly always a
[43:30] cpu cost um
[43:32] and generally if you know say in a space
[43:34] battle like xenophob you know in terms
[43:35] of polygon count it can't be that high i
[43:37] mean you're in space like there was a
[43:38] limit to what you can see on screen um
[43:41] even if half the screen is filled with
[43:43] space that gives you an enormous amount
[43:44] of budget to spend
[43:46] you know on the bizarre arm space um so
[43:48] yeah we do have some things like gas
[43:49] clouds which are more expensive in space
[43:51] but otherwise it's not usually a gpu
[43:53] concern in space it's a cpu now
[43:56] uh to be the same drum again gen 12 is
[43:59] one of the major parts of the solution
[44:01] for cpu performance but it's not the
[44:02] only part and when it comes to
[44:04] xenothread that will be the game code
[44:06] there will be a lot happening there
[44:07] there'll be a lot of lasers firing a lot
[44:09] of ai there'll be a lot of all sorts of
[44:11] things happening and the optimization
[44:13] there is largely going to come from the
[44:14] game teams i think um obviously as we're
[44:16] moving
[44:17] as much as we can from the rendering
[44:18] side of it from the graphics the cpu
[44:21] cost of that will free up more time for
[44:22] them uh but ultimately i think we'll get
[44:25] to a point where we'll will get better
[44:27] but then it'll be on to their teams type
[44:29] of then take the mantle and push it
[44:31] further
[44:32] so um yeah
[44:34] i think we can handle it for the graphic
[44:37] side uh we will as we do gentiles we'll
[44:39] definitely improve how easily we can
[44:41] handle it but then the game team and the
[44:43] engine team will have to
[44:45] continue to optimize which they're doing
[44:47] every day there's constant emails
[44:49] work being done on that side
[44:51] it's a it's a good uh chance to remind
[44:54] uh folks
[44:55] that i was reading the question from the
[44:57] backer so
[44:59] you know the though those when
[45:01] the backers the one who said thousands
[45:02] of players all in one location that is
[45:05] not
[45:05] your opportunity to run to reddit and
[45:08] say disco said there'll be thousands of
[45:10] people in one location
[45:12] i was reading the question from the
[45:14] backer
[45:16] okay
[45:19] that's the pact between you and me
[45:24] you mean you no
[45:25] no no no i'm talking to the people who
[45:27] are watching that stuff
[45:29] no reddit thread about how jared said
[45:31] there were going to be 10 000 people in
[45:33] one place that's not what i said i read
[45:34] the question as the backer wrote it
[45:39] hold on hold on i gotta give me a second
[45:41] alley i gotta do this i gotta make sure
[45:46] people to understand
[45:53] [Music]
[45:54] all right
[45:59] and because you guys did so good because
[46:02] because we have this pat
[46:04] i'm gonna ask the question you guys have
[46:05] been waiting for
[46:07] will there ever
[46:09] be practical night vision that players
[46:11] can use
[46:15] well
[46:16] much in the same vein where you have
[46:18] don't want to promise thousands of
[46:19] players to the backers um i can't
[46:21] promise game design
[46:23] issues um
[46:24] so
[46:25] i think there's various game designs are
[46:27] interested in it but i will not speak on
[46:29] their behalf
[46:30] but what i can do is talk about night
[46:32] vision implementations and how it's done
[46:34] and leave it to the designers as to what
[46:36] that means in star citizen
[46:39] so in terms of night vision almost every
[46:42] game
[46:43] up until the last couple of years has
[46:44] done the same thing which is make the
[46:46] screen go a bit green change the colors
[46:48] a little bit
[46:49] brighten it up a little bit and job done
[46:50] there's your night vision um
[46:52] you know so that's fine um it it you
[46:56] know we can do that no problem um
[46:58] but recently we started to see people
[47:00] going a little bit further um
[47:02] and i don't think has played the call of
[47:03] duty modern warfare but they did a
[47:04] significantly better implementation um
[47:08] it's worth looking up but they they
[47:09] really push the boat a little bit
[47:10] further and try to emulate exactly what
[47:12] night vision
[47:14] does or particular model of night vision
[47:15] they do the spectral stuff right yeah so
[47:18] um
[47:19] now
[47:20] they type of better approximate what
[47:22] each color looks like when looked at
[47:24] under infrared uh the infrared color so
[47:26] they type of convert the colors that you
[47:28] would see well that we know an artist
[47:30] says this is going to be a
[47:31] red can
[47:33] they do the maps and figure out what
[47:34] that looks like under infrared camera
[47:37] um and the other thing they do is for
[47:39] things that have uh particularly
[47:43] non-standard type of uh
[47:45] unexpected type of brightness in
[47:46] infrared like a reflector or you know
[47:48] red light or or whatever either certain
[47:50] materials that reflect very brightly
[47:52] they would the artists have marked this
[47:53] up so they have this data to give you
[47:55] the much more convincing
[47:57] uh visual so yeah that's definitely in
[47:59] the vein and one we the one thing we
[48:00] have to be careful of is the amount of
[48:02] artwork we have means we can't just
[48:04] go and ask the artist to go and flag up
[48:05] every single material they've ever
[48:06] looked at um but we do already have
[48:09] various markup on materials so that we
[48:11] know
[48:12] the rough surfaces that the types of
[48:13] things they're made of so we can
[48:14] retrospectively type say oh all the ones
[48:16] were made of metal this is how they
[48:18] should respond all the ones that are
[48:19] made of like you know reflective strips
[48:21] they respond like this so
[48:22] there should be scopes to do something
[48:24] like that um and that's definitely what
[48:26] aspire to
[48:27] i can't promise because we're not doing
[48:29] that right now and until
[48:30] design say today is the day you make
[48:33] the night vision mode um that's the day
[48:35] i can talk more freely about it but yeah
[48:37] it'd definitely be an interesting thing
[48:39] i'd love to explore
[48:41] all right so uh uh what i'll tell
[48:43] backers right now is the is the next
[48:45] time we have the opportunity to talk to
[48:47] todd pappy oh well we'll squeeze that
[48:50] question in there and and see what he
[48:52] has to say
[48:53] um
[48:57] what are the technical limitations on
[48:59] the cloud volumes introducing noise when
[49:01] being viewed uh from a near horizontal
[49:04] angle
[49:05] uh so did read that right
[49:08] there so yeah um
[49:10] so the the cloud technology is something
[49:12] our engine director has been pirating
[49:14] for some time so i want to care for a
[49:17] second i want to speak on his behalf um
[49:19] many different things we talked about i
[49:20] mean my remit but this is definitely his
[49:22] baby um but i do know a bit about how
[49:24] it's implemented so i can speak a little
[49:26] bit on it um
[49:27] so
[49:28] the clouds are built from there's many
[49:31] different stages that go into that
[49:32] process to build the clouds um
[49:35] and each of them say i can't remember
[49:36] it's a five or six different stages each
[49:38] of them
[49:39] has been rnd and multiple different
[49:41] alternative solutions for them and
[49:44] we're constantly finding new ways and
[49:46] prove ways to replace each section and
[49:48] the noise in particular particular at
[49:50] the um horizontal angle we mentioned
[49:53] is because the way the clouds work in
[49:55] our engine and most of us is you type of
[49:58] you have like an imaginary way that's
[50:00] fires through enter the distance and
[50:02] type of you sample or you you take
[50:04] samples along that point along that way
[50:06] so say i take 50 samples between here
[50:08] and the horizon and i ask i want some
[50:10] calculation to decide how much cloud
[50:12] cover there is each of these points then
[50:13] add them all up and i eventually come up
[50:15] with the final contribution of clouds
[50:17] but if you imagine if you're looking
[50:18] from orbit straight down or from the
[50:20] ground straight up the amount of cloud
[50:22] cover you see versus looking
[50:23] horizontally is like hugely different
[50:25] like you know you can look through like
[50:27] 100 kilometers of clouds versus one
[50:29] kilometer if you look straight up
[50:31] so when you're winning say 50 samples
[50:33] over 100 kilometers there is like a huge
[50:35] amount of error and that would show as
[50:37] like type of a stepping blocky artifact
[50:39] but
[50:40] to so you don't see blockiness and
[50:42] stepping we randomize the where we
[50:44] sample that ray so it turns into noise
[50:46] so
[50:47] we have begin to r d solutions that will
[50:50] vastly improve that there's already many
[50:52] mechanisms to try and minimize that but
[50:54] one thing that's showing very good
[50:55] promise is we kind of do an initial
[50:57] render basically of the clouds at low
[50:59] resolution i think it's quarter or an
[51:01] eighth resolution
[51:02] try and identify where the cloud is like
[51:05] where is the noisy parts where is the
[51:06] most of the detail and then when it
[51:08] comes to do the main tracing of the
[51:09] clouds we put all the the
[51:12] rays and the samples where we need them
[51:14] so we have without saying oh this part
[51:15] of the scene is like there's a fringe
[51:16] here it's like a silver lining on the
[51:18] cloud that looks really nice but it's
[51:20] noisy so we'll fire you know many more
[51:22] samples there and this next part of the
[51:24] screen would be a big foggy
[51:26] nothing's happening no point spending
[51:27] all of our gpu on that so yeah we cut
[51:30] back on that point so it kind of
[51:32] optimizes it at the same time as
[51:33] improving the quality on different areas
[51:35] of the screen so
[51:36] that's looking promising um i'd say but
[51:38] because it's the engine team managing
[51:40] that
[51:41] when we're talking about releases and
[51:42] stuff but it's it's there is definite
[51:44] improvements coming on that side of
[51:46] things um
[51:47] and it's going to continue to be put on
[51:49] for you know
[51:50] some time
[51:52] thank you
[51:54] um
[51:55] you see we've we've only got eight
[51:56] minutes but i think we can squeeze uh
[51:58] some more and maybe maybe we can go a
[52:00] little bit over the time here uh
[52:02] does the rtx does rtx get the team any
[52:06] closer to figuring out a solution to the
[52:09] lack of reflective surfaces or mirrors
[52:11] in the game
[52:14] uh had to come up didn't it um so yeah
[52:16] so we have plenty of like
[52:18] shiny surfaces in the game but i i
[52:20] gather they mean like
[52:22] mirror like full-on mirror reflection
[52:24] like really really
[52:25] clean um
[52:27] so
[52:28] yes i know um
[52:30] for true mirror-like surfaces ray
[52:32] tracing is the only sensible way to
[52:34] solve that problem there's no real
[52:36] alternative
[52:37] um
[52:38] you are however much simpler solutions
[52:41] for bespoke cases like the many games
[52:43] where you've seen like water reflection
[52:45] or a single mirror uh like a typical
[52:48] mirror and that's stuff they can be
[52:50] handled just by rendering the scene
[52:51] again from a different perspective
[52:52] usually at lower quality of some type of
[52:54] compromise to stop it being har the
[52:56] performance
[52:57] um and they're quite viable and we could
[52:59] definitely would probably consider doing
[53:01] that um especially because it's quite
[53:02] simple and for the mirror case it's a
[53:04] nice easy way to work um
[53:06] it does require just a little bit
[53:07] constraint from the artist not to do
[53:09] like a hall of mirrors they'd have to
[53:10] you know you put a mirror in a bathroom
[53:12] and ideally but when we when we're told
[53:14] aren't to test this in the past they'll
[53:15] do it and then behind the bathroom
[53:17] they'll be like a bengal or something
[53:19] and you're like no please
[53:20] put them in a location that's why you
[53:22] can never give players a handheld mirror
[53:24] it'll just become a nightmare
[53:26] yeah i mean you kind of basically could
[53:28] but you were just half the performance
[53:29] literally of the game so um yeah
[53:32] um and the engine although it would you
[53:34] know you'd hope like a say a handheld
[53:35] mirror would be smaller
[53:37] some parts of the engine will
[53:39] not be able to scale down so like the
[53:41] number of pixels will be less so that's
[53:42] great you'll save on something but
[53:43] there'll be certain aspects the game
[53:44] will not scale down so
[53:46] if just one tenth of the screen size
[53:48] doesn't mean it'll cost ten times less
[53:49] it might still only cost like fifty
[53:51] percent of us so you know who wants to
[53:53] take a 50 frame rate hit to have a
[53:55] handheld mirror
[53:56] um so yeah i mean and if you played any
[53:58] racing games which have rear view
[53:59] mirrors you'll always see the lower
[54:00] quality they get in the in the rearview
[54:02] mirrors or they have such a bespoke
[54:03] engine to manage that and that's like a
[54:05] core feature um unfortunately we've got
[54:07] an extremely complicated game before we
[54:09] consider mirrors but yeah um so first
[54:12] for small mirrors like you yeah you'd
[54:13] probably just render the theme flipped
[54:14] that is something we've been considering
[54:16] um it hasn't been a really strong need
[54:18] for it but there is
[54:19] uh some news from some departments
[54:21] asking for it um which is all i'll say
[54:24] there but the um yeah but for
[54:26] when you get to the fully general case
[54:27] like you know seeing your reflection in
[54:28] a spaceship for curved surface ray
[54:31] tracing is the only real answer there
[54:35] uh for some reason there's a person
[54:37] named donkey aura in chat who just said
[54:39] all game devs are lazy
[54:44] uh i've only spent the better part of
[54:46] eight years proving otherwise but you do
[54:48] you
[54:49] uh
[54:52] will the game get realistic snow weather
[54:54] that is not identical to dust storms uh
[54:58] for instance the dust particles on
[54:59] hurston appear to be the same as on
[55:00] microtech with just a different color
[55:04] um
[55:05] so two parts the answer one is um
[55:09] i don't know if the dust particles are
[55:10] literally the same particles on it and
[55:12] the two examples again there but they
[55:13] might be the same they might be
[55:14] different um there is the tech there
[55:15] already for them to be different uh we
[55:17] or have a system that type of quite
[55:19] complicated ground effect system it's
[55:21] not strict speaking weather it's the
[55:22] wind kicking up whatever's on the ground
[55:24] so if there's snow on the ground and
[55:25] there's a lot of wind it will kick the
[55:26] snow up and we already have the ability
[55:28] to do different effects per
[55:30] uh we call it surface type each type of
[55:32] material on the ground um so that in
[55:34] effect could be done now um it's more of
[55:36] an asset vfx type question from the art
[55:38] teams
[55:39] however it's not
[55:41] to get probably the real answer it's not
[55:43] snow
[55:44] it's snow being kicked up in a blizzard
[55:45] basically um
[55:46] to get actually uh
[55:49] strong winds to get a full-on snow full
[55:51] on weather that's something different um
[55:54] and it is on our internal road map uh
[55:57] and
[55:58] i think a lot of people are quite
[55:59] excited to get onto that um but it's i
[56:01] don't have a timeline i can show on at
[56:02] the moment but yeah it will clearly when
[56:04] we implement full-on weather that will
[56:06] be a bespoke effect you know
[56:08] snow does not look like you know dust
[56:10] you know it has a specific look and you
[56:12] know you'd expect rain and all the other
[56:14] types of weather hail or whatever so
[56:16] yeah
[56:17] it's on there it's it's it'll be coming
[56:19] one day
[56:20] not today
[56:21] all right uh before we let you go we got
[56:23] to get into the
[56:25] the buzzwords here dlss and fsr
[56:30] again i'm reading the reading the
[56:31] question from the backer here
[56:33] this is planned for later on but i
[56:35] believe in a spectrum post it was stated
[56:37] that we may be getting dlss before fsr
[56:41] due to one manufacturer's popularity
[56:43] over the other based on statistics my
[56:46] question stems from one upscaling
[56:48] technology benefiting everyone whereas
[56:50] the other benefiting only one party
[56:53] uh
[56:55] there is actually no question i guess so
[56:58] they just want an update on dlss and fsr
[57:00] and whether one will be coming before
[57:02] the other one and if it's based on
[57:04] popularity or something i guess that's
[57:06] the question they actually forgot to
[57:07] include a question
[57:09] that's okay i get that i get a picture
[57:10] um so yeah i mean those two technologies
[57:13] um they obviously aim to do a similar
[57:15] goal but in the way they're implemented
[57:17] they're completely different
[57:18] um and they have quite different
[57:19] performance different quality
[57:21] uh and different suitability to have the
[57:24] engine and the problem you're trying to
[57:25] solve um
[57:27] and also how easy they are to integrate
[57:29] um is quite different um
[57:31] it's they fit into different
[57:33] type of areas of the pipeline and we
[57:34] have both of these techniques introduce
[57:36] a few complications to the engine
[57:38] because
[57:39] particularly for ui because
[57:41] most games you know there's my game
[57:43] world
[57:44] uh upscale it slap my ui on my 2d ui and
[57:47] that says you know how many bullets
[57:48] you've got or whatever and you're going
[57:49] and then job done last type of the frame
[57:51] but our ui is largely in the world and
[57:53] also we don't have one type ui we have
[57:55] so many types ui we have you know the
[57:57] options menu but then other than that we
[57:59] have like mobile glass which is almost
[58:01] like a traditional ui but it's not it's
[58:02] still in the world you can still see
[58:03] behind you people running up to you
[58:04] while using it we have the holographic
[58:06] ship ui we have the mfds we have
[58:09] uh a type of uh icon of all different
[58:11] names you haven't but like things that
[58:12] are in the world type of inner fort they
[58:14] call it you know when you're gonna talk
[58:15] to someone and it comes up with the
[58:17] options
[58:18] there's so many different types of ui
[58:19] and none of these play nicely with the
[58:21] lss or fsr um so there's some work for
[58:23] us to figure out there
[58:25] um but yeah as they mentioned the market
[58:27] share isn't equal one is currently
[58:29] supporting every
[58:30] gpu um if they can afford a performance
[58:33] and the other is on a much smaller
[58:35] percentage uh i think 30 percentage
[58:37] might be type of the region you've been
[58:39] looking at for dlss at the moment
[58:41] um
[58:41] so
[58:43] yeah for me it's not really a question
[58:44] of a versus b
[58:46] um they're type of
[58:47] gonna be considered independently on
[58:49] their own merits you know can we
[58:50] implement one how long will it take how
[58:52] do we implement it um
[58:54] but yeah i can't pretend that market
[58:56] share it's definitely a factor though
[58:57] like you know if we have something
[59:00] that's going to benefit 99 people or 100
[59:01] percent of people we want to implement
[59:03] that over some of the benefits 10 of
[59:04] people but
[59:06] on the other side you know
[59:08] say we implemented one of them and it
[59:09] didn't give great results we under no
[59:11] obligation to implement that and i don't
[59:12] want to
[59:14] pretend that we haven't or also any
[59:16] other company hadn't implemented
[59:17] technology that is only benefiting a
[59:19] subset of the people you know if we
[59:21] implement hdr we talked about earlier if
[59:23] you don't have a hdr monitor tough luck
[59:25] uh ray tracing don't have uh you know
[59:27] rtx card or playstation d tough luck uh
[59:30] in optimizations for one cpu brand or
[59:32] the other or face over ip these are like
[59:35] many examples where it benefits a subset
[59:38] now
[59:38] you know that's not
[59:40] that's not great to be benefiting a
[59:42] subset but you know we wouldn't have any
[59:44] of them technologies or ever have any of
[59:46] them if we only tried to satisfy 100 of
[59:48] the people all the time
[59:49] so it's more of a
[59:51] independent decision bang for book i can
[59:53] see both of them being implemented
[59:55] um and probably the time tournament is
[59:57] probably the largest factor to be honest
[1:00:01] chat is currently
[1:00:02] that's not the right scene what is this
[1:00:07] i don't know i heard the wrong scene hi
[1:00:09] everybody
[1:00:10] uh
[1:00:10] a chat is currently saying
[1:00:13] it's the wrong button
[1:00:14] that was the wrong button
[1:00:15] uh chad is currently uh
[1:00:17] arguing about whether dlss and uh uh fsr
[1:00:21] is better and and and they're getting
[1:00:23] pretty contentious there for saying dude
[1:00:26] do you want to jump in on the you don't
[1:00:27] want to do it i can't answer what is
[1:00:28] better or worse um i will leave that i
[1:00:30] mean that's technology owned by two
[1:00:32] different companies who are integrating
[1:00:33] it individually so you know up to them
[1:00:35] um but what i will say is
[1:00:37] um dlss has a distinct advantage in the
[1:00:40] way that it's currently style in that it
[1:00:43] is
[1:00:44] using
[1:00:45] more information that goes into it so it
[1:00:47] has a better chance of giving a good
[1:00:48] result uh fsr is intentionally
[1:00:52] takes less information in so it there's
[1:00:54] a limitation to what it can actually
[1:00:55] achieve um so there was a fundamental
[1:00:58] limitation there now either of them
[1:00:59] could change tomorrow you know these are
[1:01:01] two independent companies make their own
[1:01:02] decisions on
[1:01:03] how this technology works but yeah at
[1:01:04] the moment it's
[1:01:06] it's more the upper limit is higher for
[1:01:08] the lss because of
[1:01:10] the inputs they take in and that's a
[1:01:12] decision you just you just make you know
[1:01:14] yeah your technology can work different
[1:01:15] ways you know people we talked earlier
[1:01:16] about uh temple uh solutions if you use
[1:01:20] data from the previous wayne you have a
[1:01:21] much better chance of doing a good
[1:01:22] result you introduce a whole bunch of
[1:01:24] potential issues with ghosting
[1:01:26] and you'll get one person that thinks
[1:01:27] that's a fair trade-off and other people
[1:01:28] that think that's not a good trade-off
[1:01:31] so yeah it's not a subject of what is
[1:01:33] better but the if you had a static
[1:01:35] camera
[1:01:36] then having
[1:01:38] the more information theaters gives you
[1:01:39] a chance of giving a better image
[1:01:42] but i'll leave it to the public to
[1:01:43] decide what's actually better
[1:01:46] okay let's uh let's get some last ones
[1:01:49] in that we're technically a little bit
[1:01:50] over time but if you're game just a
[1:01:53] handful more here um
[1:01:55] will we see hud visibility improvements
[1:01:58] this is always the
[1:02:00] the perennial question current bodies
[1:02:01] like ela crusader etcetera planets are
[1:02:04] nearly impossible to fight against
[1:02:05] during daylight because the terrain
[1:02:07] blows out the targeting info
[1:02:10] so
[1:02:11] yes um obviously we have the the ui team
[1:02:14] would have their their party on this as
[1:02:15] well but we constantly hear from them
[1:02:17] and actually spend a good time today
[1:02:19] talking about this issue with the ui
[1:02:20] team um
[1:02:22] it's not a trivial problem uh we
[1:02:25] we have things that are you know
[1:02:26] insanely bright in the game where you're
[1:02:28] looking straight at the sun and there's
[1:02:29] always subjective nature as whether that
[1:02:31] should be blinding you know it is
[1:02:33] incredibly bright or um
[1:02:35] you know and it is a factor in real life
[1:02:37] like but yeah there is many times when
[1:02:39] it's not as legible as you'd want um so
[1:02:41] what we've done on our side we've done
[1:02:43] quite a few different shaded changes
[1:02:44] which are
[1:02:46] mostly done that type of in the process
[1:02:48] have been brought into the ui pipeline
[1:02:49] to be used in the game but these are
[1:02:50] things like adding uh drop shadows
[1:02:52] underneath text um we have uh ways like
[1:02:55] you probably noticed when you use the
[1:02:56] mobile glass it darkens the scene and
[1:02:58] changes the exposure to give a better
[1:02:59] chance of standing out we have
[1:03:02] a new bloom and
[1:03:04] uh
[1:03:06] type of drop shadow background blur
[1:03:08] effect that we can apply behind the ui
[1:03:10] to kind of smudge out some of the
[1:03:11] details and today we just got a request
[1:03:13] to also clip out extra bright details
[1:03:16] behind something so say if somebody's
[1:03:17] got a
[1:03:18] torch or there's some particular bright
[1:03:20] light just behind in front of you then
[1:03:22] you bring up mobile glass we'll type of
[1:03:23] clip that type of extreme bright
[1:03:25] highlight out
[1:03:26] um but this is the type of
[1:03:35] and then type of getting it into the
[1:03:37] engine and getting into the actual
[1:03:38] assets on the ui team so we've done
[1:03:40] quite a lot of work there and
[1:03:41] they're looking to try and uh integrate
[1:03:43] some of that into the ui pipeline and
[1:03:45] they come in
[1:03:46] weeks months yeah and it's definitely
[1:03:48] something actively talking about and
[1:03:49] improving
[1:03:50] yeah and uh folks may want to check out
[1:03:52] uh it was just
[1:03:54] uh it was just november or october it
[1:03:56] was relatively recently uh we did one of
[1:03:58] these qas with simon bersie the director
[1:04:00] of ui and stuff and he asked this the
[1:04:04] same question went to him and you can
[1:04:05] see his answers uh it's not the kind of
[1:04:07] thing that moves particularly faster
[1:04:09] changes
[1:04:10] to too much in in in three or four
[1:04:12] months so the so the answers he gave you
[1:04:14] there will probably still be uh
[1:04:16] applicable today so you can check out
[1:04:17] that star citizen live uh from just a
[1:04:19] couple months ago
[1:04:21] um
[1:04:24] what graphical improvements
[1:04:26] uh coming are you personally most
[1:04:28] excited about
[1:04:30] this probably won't be the answer
[1:04:32] everyone wants but i just want i just
[1:04:34] want frame rate frame rates king for me
[1:04:36] tell it solid 60.
[1:04:39] that's no good um so yeah for me it's a
[1:04:41] frame rate uh once we have solid 60 uh
[1:04:43] my interest will pick elsewhere um there
[1:04:45] is somewhere as the engine visually that
[1:04:47] i certainly want to see improve vastly
[1:04:50] um but not before frame rate um that's
[1:04:52] number one for me um i've had to pick a
[1:04:54] second though just to pick someone's
[1:04:55] interest maybe
[1:04:57] uh our global illumination i'll have a
[1:04:59] lighting system is is lacking that's
[1:05:01] probably the the area that we are
[1:05:02] furthest behind over engines everything
[1:05:04] else is
[1:05:05] on a power better than your average
[1:05:07] competitor but the global illumination
[1:05:09] system is is not where we wanted to be
[1:05:11] so uh that would help the visuals and
[1:05:13] really help the art teams as well so
[1:05:16] that's what i'd like to see
[1:05:17] then we'll leave you with this last
[1:05:19] question
[1:05:20] how do we get to 60 frames a second
[1:05:23] what's the
[1:05:24] what what what what's the mat what's the
[1:05:25] magic bullet is there a magic bullet or
[1:05:28] is it is it
[1:05:30] 50 other smaller things that all have to
[1:05:32] happen in succession
[1:05:34] uh to get us there
[1:05:36] um
[1:05:37] well
[1:05:39] different answers for every single
[1:05:40] person obviously different machines you
[1:05:41] know some people might always be getting
[1:05:43] north of 60fs all the time some people
[1:05:45] will never hit 60fps
[1:05:46] so
[1:05:47] for me it's three things it's gen 12
[1:05:49] first um once we finish gen12 which is
[1:05:51] our cpu optimizations we shift our focus
[1:05:53] to
[1:05:54] gpu optimizations and the graphics
[1:05:55] settings to give people control over how
[1:05:57] their gpu has been used and then after
[1:05:59] that
[1:06:00] um the one part that i have no control
[1:06:02] over is just the rest of the engine in
[1:06:04] the game code which will which we talked
[1:06:05] about earlier when we talked about cnfl
[1:06:07] the particularly challenge area is a
[1:06:08] game where we get a ton of players or
[1:06:11] you know city and whatever else on
[1:06:12] screen
[1:06:13] uh or things like expo halls sometimes
[1:06:15] should be challenging like this is where
[1:06:16] we uh where
[1:06:18] the other rest of the company will have
[1:06:20] to take their or they are taking their
[1:06:21] type of part of the problem on but yeah
[1:06:23] for for our side it's definitely just
[1:06:25] gen 12 and then after that immediately
[1:06:26] after that we'll look at the gpu side of
[1:06:28] it um to give you some more flexibility
[1:06:30] there
[1:06:32] networking i really want to see 60fps
[1:06:34] after this um especially there will be
[1:06:36] situations like i said would be more
[1:06:39] uh troubling but difficult that the
[1:06:41] i'm hoping a lot of the game
[1:06:44] for most people you know that's the
[1:06:45] target
[1:06:47] in addition to graphic stuff it's
[1:06:48] there's networking stuff there's the
[1:06:50] there's the meshing there there there's
[1:06:52] there's streaming there's just uh
[1:06:55] optimizations in in
[1:06:57] the actual assets themselves there
[1:07:00] there's there's you know further lod
[1:07:02] development it's it's it's everything
[1:07:03] it's it's there is
[1:07:05] if you take
[1:07:07] if there's one answer you take away from
[1:07:09] for this question folks
[1:07:11] there is not one thing that will get us
[1:07:14] where we're going and and that's that's
[1:07:15] the truth for any game and on any
[1:07:18] platform especially true for one as big
[1:07:20] and as ambitious as ours it takes the
[1:07:23] work of almost every team in every
[1:07:26] aspect of star citizen to get us where
[1:07:28] we're going and that includes to our
[1:07:30] performance goals so so it will not be i
[1:07:33] just i just want to disabuse anybody of
[1:07:35] the notion that there will be a magic
[1:07:37] day where we throw out a patch and it
[1:07:38] will just be
[1:07:40] and everything better you will you will
[1:07:41] see just like with vulcan when we talked
[1:07:43] about at the beginning of the show it
[1:07:44] will be it will be implementation after
[1:07:47] implementation after implementation
[1:07:48] after implementation that gets us uh
[1:07:50] where we're going and then uh like a uh
[1:07:54] like getting used to cold or hot water
[1:07:56] it'll just it's
[1:07:58] it'll just we'll just suddenly be there
[1:07:59] and it'll be where we need it to be so
[1:08:02] so one thing on that we're going to add
[1:08:03] is the um
[1:08:05] something i spoke about as citizencon
[1:08:06] and i've talked about on some of the
[1:08:08] spectrum is that i would like to improve
[1:08:10] some of our type of um
[1:08:12] debug stats type of get for the backers
[1:08:14] so they can kind of understand their
[1:08:15] performance a little bit better um
[1:08:17] because you know some points for cpu
[1:08:19] bound uh
[1:08:20] and a better cpu or more cores or faster
[1:08:22] calls would be the what you need and at
[1:08:23] some point it's cpu and i want to more
[1:08:25] clearly display that to the users or the
[1:08:27] ones that are interested in that so they
[1:08:29] can better understand why their
[1:08:31] framerate is what it is and whether
[1:08:33] there is anything they can do and
[1:08:34] especially obviously if they're gpu
[1:08:35] bound it does become fully under my
[1:08:37] control well i guess art as well
[1:08:39] obviously they're producing the content
[1:08:40] we're putting on the screen but um
[1:08:42] ultimately like the graphics and
[1:08:43] rendering um is under our controls when
[1:08:45] it when your gpu bound the graphics
[1:08:47] options we provide you uh and how our
[1:08:50] technology works will be
[1:08:51] you know that's all we need to get to 60
[1:08:53] but if you're cpu bound then it's more
[1:08:54] complicated picture um
[1:08:56] yeah but we're hoping to like inform
[1:08:58] people because there is a lot of
[1:08:59] misinformation and confusion sometimes
[1:09:01] about the performance of the game um
[1:09:03] because it has changed so much and it
[1:09:05] has been difficult in stages and
[1:09:07] yeah i just want to clarify it for back
[1:09:09] a second no nonsense this is this is
[1:09:11] where your framework is at um hopefully
[1:09:14] that will help people understand and
[1:09:15] help them improve their framework as
[1:09:17] well and see the improvements like as
[1:09:19] they come so they can see their gpu time
[1:09:21] reducing
[1:09:22] uh or the cpu you know the cost of the
[1:09:24] rendering side of the gpu side rendering
[1:09:26] side of the cpu decreasing as we release
[1:09:28] gen 12
[1:09:30] you know even if they happen to be in
[1:09:31] the xeno at that moment and still not
[1:09:32] getting maybe quite the framework they
[1:09:34] want
[1:09:36] all right so that about wraps it up uh
[1:09:38] ali thank you so much for taking the
[1:09:41] time to be on the show uh this week uh
[1:09:43] uh specifically again like i did the
[1:09:45] beginning uh for for coming to us and
[1:09:47] then asking to to do a show and asking
[1:09:49] to speak to the backers and and share
[1:09:51] your information we uh uh
[1:09:53] if i'm allowed to speak on their behalf
[1:09:55] i know that we all appreciate it um some
[1:09:57] housekeeping stuff uh remember uh stars
[1:10:00] uh or inside star citizen uh came out
[1:10:02] yesterday with looks at with a look at
[1:10:05] refueling coming in the upcoming alpha
[1:10:07] 317 as well as the hover quad
[1:10:10] i have no idea when the hover quad
[1:10:12] comes out
[1:10:14] keep your eye on the
[1:10:15] robertsspaceindustries.com i'm not
[1:10:16] involved in that stuff so i don't know i
[1:10:18] just make the videos um i do want to i
[1:10:20] do want to add i saw some comments about
[1:10:22] the christmas tree in in in in in tom's
[1:10:25] uh background uh he filmed that back in
[1:10:28] december that's how long a lead time
[1:10:30] some of this stuff has so don't give him
[1:10:31] too much crap for he doesn't still have
[1:10:33] his christmas tree up i asked that was
[1:10:35] filmed back in december so
[1:10:38] go easy on him uh heck the refueling
[1:10:40] thing was filmed in november so it's
[1:10:42] that's that's how far the lead and how
[1:10:44] those things go uh then uh uh next week
[1:10:47] we've got an oops all sprint report
[1:10:49] edition of inside star citizen we'll be
[1:10:51] checking out all kinds of aspects of
[1:10:53] star citizen development in next week's
[1:10:54] ise and uh then we'll be right back here
[1:10:57] on friday with another star citizen live
[1:10:59] and i can't remember what it is or who's
[1:11:01] on it right now so
[1:11:03] i'm bad at my job uh also remember
[1:11:05] xenothreat is ongoing now i believe it's
[1:11:08] moving into phase two uh if it hasn't
[1:11:10] already it will uh
[1:11:11] soon so so check that out as well as the
[1:11:14] this month in star citizen post on the
[1:11:16] robertsspaceindustries.com website where
[1:11:18] there's all kinds of activities uh
[1:11:20] happening in the month of february
[1:11:21] including uh quoramore and and
[1:11:25] more
[1:11:27] more and more
[1:11:28] uh and then finally uh last thing uh i
[1:11:31] have not moved to the uk yet i see some
[1:11:33] people like why did he build the same
[1:11:34] background uh no i am in a completely
[1:11:37] virtualized background none of this is
[1:11:39] real uh i'm actually still on vacation
[1:11:41] at disney world uh you were you were you
[1:11:43] were witnessing a simulacrum of disco uh
[1:11:46] but uh we uh we uh
[1:11:49] uh
[1:11:49] i relocate to the uk uh in april after
[1:11:52] this
[1:11:53] current season of isc is done well we
[1:11:55] move in the hiatus so
[1:11:57] uh so yeah so it'll all look different
[1:11:59] uh
[1:12:01] come april uh who knows what it'll be
[1:12:03] it'll probably be me standing in the
[1:12:06] lobby of the new office with a bunch of
[1:12:07] paint buckets and
[1:12:08] ladders while they're still working on
[1:12:10] it we'll see
[1:12:11] so for star citizen live uh that's ally
[1:12:14] brown director of graphics engineering
[1:12:16] uh i'm
[1:12:17] jared huckaby i'm in charge of the sheep
[1:12:19] dip and we'll see you next week
[1:12:21] everybody take care
[1:12:50] you

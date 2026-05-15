# Star Citizen Live: Engine & Graphics Q&A

**Video:** https://www.youtube.com/watch?v=2tSoZJ0649s
**Date:** 2022-05-06
**Duration:** 1:03:11

## Transcript

[00:02] hello everybody
[00:04] welcome to another episode of star
[00:06] citizen live engine and graphics q a i'm
[00:09] your host jared huckabee uh welcome once
[00:12] again back to my half ikea half still
[00:16] unpacked luggage uh a home office
[00:20] uh i'm jared huckabee uh creative
[00:22] content lead for cladded brain games
[00:24] robert space industries and if you've
[00:25] never seen star citizen live before it's
[00:28] where we take about an hour out of our
[00:30] uh a week and uh chat with some
[00:33] developers uh usually about their work
[00:36] usually about the stuff that they're
[00:37] they're working on or the stuff that
[00:38] they're about to work on or the stuff
[00:40] that they've worked on in the past that
[00:42] people still have questions and and
[00:44] stuff about uh joining us on the show
[00:46] this week is a
[00:48] uh uh is a menagerie of engine and
[00:52] graphics uh programmers
[00:55] directors and
[00:57] and sorts so let's uh let's take a few
[00:59] moments as we usually do and introduce
[01:01] our our codery of developers this week
[01:04] starting uh to my immediate right with
[01:06] the lovely blue gradient background
[01:08] jonas who are you and what do you do for
[01:11] star citizen
[01:12] oh hi i'm jonas i'm starting i'm working
[01:15] for star citizen since
[01:17] one and a half years roughly
[01:20] and i was mainly doing co-engine work
[01:22] like doing profiling tools or internal
[01:25] stuff
[01:27] one of the
[01:28] fruits of that you could likely see in
[01:30] the last patch with the performance
[01:32] improvement
[01:34] we found that due to the new profiling
[01:36] tools or improved profiling tools
[01:38] and i'm also supporting on the john 12
[01:41] work to get that done
[01:44] are you taking credit for all the
[01:45] performance improvements of the last
[01:46] match
[01:47] no of course not that's likely
[01:50] something for body to take credit
[01:53] all right uh sylvan who are you and what
[01:55] do you do for star citizen
[01:58] yeah hi everyone so i'm sullivan i
[02:00] joined cig three years ago
[02:03] um i am an engine program as well um
[02:06] mainly i do graphics work and helping
[02:09] the graphics team
[02:10] um specifically gen 12 and yeah in the
[02:14] future most likely vulcan as well and
[02:17] usually i do all sorts of things like
[02:20] wherever i'm needed i'll just jump in
[02:22] and you know
[02:23] fix box or whatever
[02:26] it's required well i'm there
[02:29] fair enough and a man who probably needs
[02:31] no introduction but we're going to do
[02:32] whatever you want anyway because every
[02:34] show is somebody's first show mr ali
[02:36] brown who are you and what do you do for
[02:38] star citizen
[02:39] hey
[02:40] i'm ali brown i'm the director of
[02:42] graphics engineering uh
[02:44] so cover the graphics department and the
[02:47] vfx programming department and then work
[02:49] very closely with the guys in the engine
[02:51] department in frankfurt
[02:53] and i've
[02:54] been here since the beginning pretty
[02:56] much
[02:57] yeah you have you you're one of the
[02:59] you get you got to be close to your 10
[03:01] year at this point right
[03:03] i think the uk studio has been going
[03:05] eight and a half last movie yeah all
[03:07] right
[03:08] so uh today's show uh is
[03:13] plainly labeled as engine and graphics a
[03:16] q a uh we we have we're basically going
[03:19] to answer questions related to
[03:21] uh uh
[03:23] engineering graphics engineering
[03:26] gen 12 renderer all that you know ray
[03:29] tracing all that good stuff
[03:30] as usual you can submit your questions
[03:33] live in the chat during the show by
[03:34] prefacing your question with the word
[03:36] question in capital letters surrounded
[03:38] by brackets and we spent the week
[03:40] collecting questions as we usually do
[03:42] letting you guys vote up which ones you
[03:44] want to see uh answered most and then
[03:46] going through there stripping the ones
[03:48] that you guys voted up that were still
[03:51] off topic for this group and then
[03:53] finding the ones that were actually
[03:54] appropriate for our our esteemed
[03:57] colleagues today so we're going to start
[03:59] writing with that um
[04:01] i think the biggest topic for anything
[04:03] engine and graphics is probably gen 12
[04:06] vulcan stuff so we'll just we'll jump
[04:08] into the uh
[04:09] the more heavily traffic stuff um
[04:12] this question says uh
[04:14] what are the differences between gen 12
[04:17] and vulcan and how are they related to
[04:20] get more optimization in the game
[04:24] uh yeah that's probably a question for
[04:26] me
[04:27] um
[04:28] probably the best question to start with
[04:30] since um yeah i'm working on it pretty
[04:33] much full time
[04:35] and for the people who still don't know
[04:37] what the difference is
[04:39] there i mean that's pretty much
[04:42] um like we've already published a lot of
[04:45] videos about it and
[04:47] other people talked about it but gen 12
[04:50] is basically our
[04:53] internal
[04:54] engine structure rendering architecture
[04:58] for how rendering works and vulkan is
[05:02] the underlying graphics api which
[05:06] one day hopefully gonna not hopefully
[05:08] but which which one day replaces um the
[05:11] directx um
[05:13] graphics api
[05:15] and yeah vulcan
[05:16] the
[05:17] the
[05:18] benefit of vulkan is
[05:21] pretty much
[05:22] performance it scales much better on
[05:26] multiple
[05:27] cpus and threats
[05:30] so
[05:31] well
[05:32] yeah performance we all have performance
[05:34] and we all seen what it can do in 3.17
[05:39] so
[05:41] yeah if everything goes to plan we'll
[05:44] it performance will get even better the
[05:47] coming patches so i'm very excited for
[05:50] that especially after we shipped one of
[05:53] our first milestones in 3.17 about gen12
[05:58] and yeah i'm working hard on it to
[06:01] get it done
[06:02] what was that milestone that just
[06:04] shipped in 317
[06:06] um so gen12 is so you can kind of split
[06:10] it up in two parts like all the
[06:14] scene rendering like all the objects you
[06:16] see on screen and then all the other
[06:20] rendering stuff like post-processing and
[06:23] compute passes
[06:25] and
[06:25] pretty much everything else
[06:27] and the scene rendering is
[06:30] especially difficult
[06:32] to what's especially especially
[06:34] difficult to do because we have like
[06:37] hundreds of shaders and thousands of
[06:40] shader permutations and
[06:42] thousands of materials and
[06:44] we need to make sure that everything
[06:46] works um exactly as a legacy rendering
[06:50] as the legacy renderer
[06:52] and yeah we have a lot of issues and
[06:54] edge cases which you don't see during
[06:57] development so just once you submit your
[06:59] code and it crashes somewhere and then
[07:02] you just take a look and see oh
[07:04] okay that's what happens okay i forgot
[07:07] this too i forgot to add this so
[07:10] i'm gonna add this edge case
[07:12] um
[07:13] yeah and so the first milestone was
[07:17] getting part of the scene rendering done
[07:19] and for 3.17 that was the brushes the
[07:22] brushes is what we call like all the
[07:24] non-interactive static objects
[07:27] you see in game this is
[07:29] these are the brushes and yeah they're
[07:32] going through 10 12
[07:33] already and
[07:36] and the next step would be um characters
[07:39] ships like
[07:40] um
[07:41] like
[07:42] yeah dynamic objects and the planets
[07:46] didn't make it 3.17 as well though also
[07:49] the um
[07:51] objects on the planet they made it in
[07:53] 3.17 as well with gen12 so happy about
[07:56] that
[07:57] um yeah so
[07:59] once we have that um
[08:01] gen 12 is almost complete we still need
[08:04] to do all the transparent objects which
[08:06] is still a huge task to to tackle but
[08:10] yeah we started on that and i'm very
[08:13] optimistic
[08:15] uh
[08:16] i i i know you
[08:18] we we we've hit the uh the performance
[08:20] uh thing you know kind of hard there are
[08:23] there benefits to
[08:25] uh the switch to a gen 12 renderer that
[08:28] aren't
[08:29] uh performance related i mean do do we
[08:31] get does
[08:32] does does the action does the quality of
[08:34] the render
[08:35] improve does i mean are there better
[08:38] visuals all around or is this strictly
[08:40] just a performance improvement kind of
[08:42] thing um gin 12 is strictly just
[08:44] performance but of course audio also
[08:47] mentioned that in previous talks
[08:50] pretty much it
[08:51] gives us more room for more fancy stuff
[08:54] and
[08:56] like we can use all the new fancy
[08:58] features and vulcan like rage racing and
[09:01] what else there is so
[09:04] not just performance
[09:06] has that battle work ally that you you
[09:08] get all these performance improvements
[09:10] and then you start
[09:13] adding more
[09:14] uh more and more features and more and
[09:16] more uh uh uh visual elements and that
[09:19] start taking up those performance gains
[09:21] that you just that you just made for
[09:22] yourself how do you how how do you
[09:24] balance that
[09:26] well ironically a lot of the new
[09:27] technology we have isn't actually saves
[09:29] you performance so it initially it might
[09:32] even go the other way like it enables a
[09:33] whole bunch of features
[09:35] um
[09:37] with things like the mesh shading and
[09:38] the variable weight shading
[09:40] and and sometimes not even technology
[09:42] but more just like uh
[09:44] not hardware technology but internal
[09:45] like because we've restructured the
[09:47] renderer we can now do certain things
[09:48] much easier than we could before
[09:50] so there's lots of opportunities now for
[09:53] optimizations that we may not have had
[09:55] before
[09:56] so it might actually be like a double
[09:57] win after this can implement uh
[10:00] some improvements and there's those
[10:01] features that i know that there's
[10:02] questions about later about the lss or
[10:04] fsr and these type of technologies which
[10:06] were
[10:06] were type of problematic to implement
[10:08] halfway through you know when we're
[10:10] doing the conversion to gen12 so then
[10:12] they become on the table again once
[10:13] we've settled on a single new renderer
[10:15] so i don't think it's the end of the
[10:17] performance improvements once we've uh
[10:19] got to gen 12 but yeah there is also a
[10:22] few that would go the other direction um
[10:24] and and losers performance um
[10:27] but
[10:28] future battle we'll see how fast we can
[10:29] make it first before we worry too much
[10:31] about how much we'll slow it down in the
[10:32] future um a big focus we want to do is
[10:35] to make the engine scalable so hopefully
[10:37] these any new shiny things we add can be
[10:40] scaled up and down
[10:42] uh ideally so that we don't have to you
[10:44] know you can keep the game running on
[10:45] the on the lower spec but
[10:47] push it hard on the high spec
[10:49] and completing gen 12 is just the first
[10:52] step to a series of more optimizations
[10:56] we already planned out so
[10:59] expect much more to come
[11:01] after yeah after 10 12
[11:04] yeah we've
[11:05] we've got it as a on the milestones as
[11:07] if like gen 12 and vulcan are like you
[11:08] know a concrete thing that is not done
[11:10] and then one day is done
[11:12] that's not quite true it's i mean it's
[11:14] it's useful for scheduling to type of
[11:16] make that type of appear true um but you
[11:19] know that it's not as precise as that um
[11:22] yeah this continuous set of features and
[11:24] even vulcan you know that that will
[11:26] introduce new performance um or it might
[11:29] you know detriment forms in some ways
[11:30] might improve performances somewhere and
[11:31] as we learn more we'll be able to get
[11:34] more performance out of vulcan so yeah
[11:36] it won't just be uh
[11:38] we're done and we never look at this
[11:40] thing again
[11:41] but the milestones were mentioned in a
[11:42] type of are
[11:44] a point of confidence when we think yeah
[11:46] that's like 99 that's most of what we
[11:48] were gonna the biggest chunk of work has
[11:51] done
[11:52] i think that's probably a perennial uh
[11:55] concern with all aspects of star citizen
[11:57] because this is the this is not just a
[12:00] make it until one day and it's done kind
[12:02] of thing that the development of star
[12:04] citizen
[12:05] goes it just continues it's like any
[12:07] other mmo you're
[12:09] continuously iterating and developing
[12:10] stuff there is it's it's i think that i
[12:13] understand
[12:14] you know
[12:15] having come from the community so long
[12:16] ago this desire to
[12:19] just put a bow on something and say it's
[12:21] done uh it's just not the way
[12:24] uh uh this project works it's this
[12:26] project is constantly about pushing
[12:28] those boundaries and seeing what's
[12:29] possible and stuff it's been in our dna
[12:31] since the beginning so it's uh it's
[12:34] always a like everything it's a delicate
[12:36] balance between between
[12:38] not wanting to just lead people on
[12:40] forever you know just you know but
[12:44] also you know just reporting things
[12:46] accurately and honestly and effectively
[12:50] um
[12:51] one of the questions here uh
[12:54] is from somebody who's clearly looked at
[12:55] our uh
[12:57] uh i can't remember what it's called
[12:58] right now i'm blaming the name the thing
[13:00] that shows the
[13:01] the
[13:02] the performance for all of our players
[13:04] and stuff that cool graph and i'm
[13:05] blanking on the name it says i see many
[13:07] folks with older graphics cards like the
[13:10] 970 and 1080 cards those 1080 cards are
[13:12] really good though will those by chance
[13:15] see an fps boost after gen 12 and vulcan
[13:18] telemetry thank you people elementary
[13:21] good think of the word
[13:23] yeah we'll try to answer that answer
[13:25] that so the goal of gen 12 in the first
[13:28] place is to improve cpu performance
[13:31] so in case you run an older
[13:33] cpu with your old gpu you might see an
[13:36] improvement because we better you can
[13:38] better utilize all the cost of your cpu
[13:42] but the more likely case is that your
[13:44] bottleneck by the gpu
[13:46] and then um gen 12 won't really bring a
[13:49] benefit there
[13:50] um
[13:51] welcome might bring a benefit there but
[13:54] you never know we have to have to
[13:56] measure that it might bring benefits in
[13:58] one case but there's a drawback in
[14:00] another case that that's hard to tell
[14:03] but uh especially when you when you're
[14:05] rendering with uh in high resolution
[14:07] when you are trying to do 4k
[14:10] and then the older graphics cards
[14:12] graphics cards will most likely be a
[14:13] bottleneck anyway and and perform type
[14:15] there
[14:17] ali you and i were talking uh earlier in
[14:19] the week about
[14:20] common misconceptions
[14:22] that that
[14:24] gamers have just
[14:26] where they come from not just for our
[14:27] project for all gaming project like like
[14:30] everybody like everybody's got 12
[14:32] different things that they all call lag
[14:34] you know and stuff like this uh
[14:36] there's
[14:39] there's this assumption that gen 12 and
[14:41] vulcan it's like this are
[14:43] video card related things and and as we
[14:46] just discussed there they're actually
[14:47] more cpu related oh
[14:50] if you had to guess where that
[14:52] misconception comes from
[14:54] this isn't the show we're just going to
[14:55] clear up a bunch of misconceptions but
[14:57] i'm curious what you're thinking is on
[14:59] on on why those things all often get
[15:01] conflated into video card issues and not
[15:04] cpu issues
[15:05] yeah i mean
[15:06] it's stupidly confusing um
[15:09] we're working on a renderer and a
[15:10] graphics api but somehow they don't make
[15:12] the
[15:13] the rendering or graphics any faster
[15:16] um it makes no sense um
[15:18] yeah but the reality is a lot of the
[15:20] work is feeding this these uber powerful
[15:23] type of processors we have these gpus
[15:25] with work and it's hard to keep up like
[15:27] to give them enough work um
[15:29] and that's why it's it's a lot of effort
[15:32] for the cpu to keep them fed and
[15:35] these that's why like there's so much
[15:37] work to do on the on the gen 12 and the
[15:39] vulcan side these graphics apis and the
[15:41] renderer um
[15:43] but i mean
[15:44] like we said earlier that gen 12 will
[15:46] open doors to optimizations then
[15:48] optimizations will and can benefit
[15:51] the gpu but just the milestone we're
[15:54] mainly focusing on is improving the cpu
[15:56] performance because that has by far been
[15:58] the biggest bottleneck for most players
[15:59] um and that's why somebody with like a
[16:02] 3080 or 3090 might not be in the frames
[16:04] they want um
[16:06] so um yeah so for most people it's it is
[16:10] the cpu bottleneck i mean the the range
[16:12] between the cards mentioned there the
[16:14] 970 and 1080 is quite large uh the 1080
[16:17] is going to be significantly faster
[16:19] um
[16:20] then obviously resolution like like
[16:21] jonah said like is a big factor as well
[16:23] um if you're running a 970 then
[16:26] hopefully you're targeting 1080p and not
[16:28] trying to push too much beyond that um
[16:30] otherwise you will struggle
[16:32] yeah but the um the i i can see there's
[16:35] many reasons why things would be
[16:37] confused in this area um
[16:40] yeah i don't know
[16:42] what we can do about that um
[16:44] it is just confusing
[16:46] i just embark on a crusade to re-educate
[16:49] the entire games industry why not we got
[16:51] time
[16:52] um
[16:53] as we're talking about performance here
[16:55] this question says how come since the
[16:57] gen 12 renderer was implemented my
[16:59] performance actually dropped i get an
[17:02] average of 13 to 17 17 fps no matter the
[17:05] quality or resolution of the game
[17:09] well it's easy to answer and
[17:12] in fact so if um
[17:15] whoever's watching so i posted like a
[17:18] gen 12 update and progress like two
[17:20] weeks ago on the spectrum
[17:22] and initially like
[17:24] i didn't even plan to do that because i
[17:26] didn't expect any performance benefits
[17:29] of gen 12 in 3.17
[17:32] but
[17:33] due to the uprising amounts of threats
[17:37] and people talking about these magical
[17:40] improvements in 3.17
[17:42] and people were wondering where that
[17:44] actually came from i felt like i had to
[17:47] i had to give an update so uh yeah
[17:50] that's what i did um the thing is gen 12
[17:53] right now only the brushes um
[17:55] [Music]
[17:56] they're rendering in general
[17:58] but
[17:59] the big caveat is that
[18:02] um
[18:03] our rendering right now we're mostly
[18:05] limited
[18:07] due to the main thread and not the
[18:08] render thread so they're like two
[18:10] two threads and it goes very deep into
[18:13] engineering i would already say so for
[18:16] everyone who can't follow me right now
[18:17] i'm sorry
[18:18] [Music]
[18:20] but basically that's like a render
[18:22] threat which um as ali said previously
[18:25] it's like
[18:26] um this kind of
[18:29] um thing feeding the work the rendering
[18:32] work into the gpu and
[18:35] that with the old legacy renderer is
[18:38] really slow because constantly every
[18:41] frame
[18:42] um check every state and see what
[18:45] objects we can render and trench 1012
[18:48] uses a different approach by just
[18:50] pre-baking the state
[18:52] in like in a small object and then when
[18:55] we render we just have the entire state
[18:58] ready and can just say gpu here another
[19:01] subject
[19:02] so the render thread with i tested it
[19:05] myself on the performance was like with
[19:08] gen12 it's more than twice as fast
[19:12] but if you're not limited by the render
[19:13] threat
[19:14] which was at least on my machine was
[19:17] mostly the case
[19:19] um like it doesn't give you anything
[19:22] so
[19:22] that's why i didn't expect any benefits
[19:25] and didn't feel the need to give an
[19:28] update but yeah
[19:31] um
[19:32] but in the future if with full gen 12
[19:36] that's that's another thing right now
[19:38] because we have this mixed mode we have
[19:40] objects rendering with gen12 and other
[19:43] objects going through the legacy path
[19:45] and there is actually
[19:46] a cost to that on the main thread which
[19:49] is the bottleneck
[19:50] which means or what i would have
[19:52] expected gen 12 would have made it
[19:54] actually a little bit slower
[19:56] but
[19:58] that didn't even happen so
[20:00] i'm happy about that but once we can get
[20:02] rid of all the legacy stuff and have
[20:04] full chain 12 then we'll see the full
[20:07] potential and i'm very excited about
[20:09] that
[20:10] your story is a very common one
[20:12] throughout all of game development
[20:15] it's one of the reasons quite honestly
[20:18] that
[20:20] most games don't do the level of
[20:22] content and interaction that we do
[20:25] anything because
[20:26] if there's a reason it's called game
[20:27] development not game construction we
[20:29] don't always know how the thing is going
[20:32] what the puzzle is going to look like
[20:33] once we finish putting it together uh
[20:36] and it's it's why when when
[20:39] you know when folks ask questions about
[20:42] how much gen 12 is going to improve
[20:44] performance versus how much server
[20:46] meshing is going to improve versus how
[20:48] much you know object
[20:49] you know container streaming is going to
[20:51] stuff like this it's
[20:53] it can often sound like our developers
[20:55] are being cagey
[20:57] and it's and and it's less about being
[20:59] caging just want not wanting to over
[21:02] promise
[21:03] uh on on on something
[21:05] it's it's because there's always these
[21:08] pleasant surprises there's always the
[21:10] we're doing this hoping that this will
[21:13] do the thing we want it to do and if it
[21:15] does then awesome and if it doesn't then
[21:17] we're going to do something else trying
[21:19] to hope it does the thing we do and if
[21:21] that that does great and if it doesn't
[21:23] we're going to do something else to try
[21:26] it's it never
[21:28] you don't ever you don't ever give up
[21:29] you know not on a project like this
[21:31] anyway maybe on some other ones uh i've
[21:33] worked for but
[21:35] it's it's it's
[21:37] it's it's hard to make these
[21:39] it's hard to always speak in these
[21:41] definitive things ahead of time because
[21:43] a lot of this is being discovered along
[21:45] the way when uh when you're building
[21:47] something that's never been built before
[21:50] how do you say how fast it's going to be
[21:51] or or how precise it's going to be and
[21:53] stuff
[21:54] so it's a
[21:55] it's one of the combination
[21:59] best things and sometimes worse things
[22:01] about
[22:02] working on a project of this size scale
[22:05] scope
[22:06] and
[22:07] openness
[22:11] let's see if we've got a couple more gen
[22:13] 12 vulcan stuff here we'll just keep
[22:14] them all grouped together
[22:16] here's the forever question
[22:18] uh linux support linux support after
[22:21] vulcan integration is this still planned
[22:26] well i i can give a short update on that
[22:28] as well
[22:29] um so
[22:31] for the people who don't know um only
[22:35] works on windows
[22:36] and vulkan is um created by the chronos
[22:40] group which also created opengl so this
[22:43] is like a different opengl is like more
[22:45] an old graphics api and vulkan is like
[22:48] the new modern graphics api
[22:50] and
[22:51] these kind of graphics apis they also
[22:54] run on various other operating systems
[22:57] and yeah vulcan is
[22:59] like known to run on windows and on
[23:02] linux and even on apple with an
[23:04] additional wrapper it's called molten os
[23:06] i believe molten vk that's the name
[23:09] um
[23:11] so and
[23:12] christopher balti like he's very keen on
[23:15] on the linux port and
[23:18] so it's up
[23:19] top on his priority list so
[23:22] all i believe one day we'll see linux
[23:24] port
[23:26] uh the other thing i'd add is um this
[23:28] isn't firsthand knowledge but
[23:30] second or third has knowledge but the um
[23:32] people can already run it
[23:34] using the uh the various layers you got
[23:36] called proton and wine on linux they can
[23:39] run the game now i think there's a there
[23:40] was an issue with the easy enter cheat
[23:42] type of uh blocking that i don't know if
[23:44] that's been resolved yet but the um that
[23:46] was on uh epic i believe to resolve that
[23:48] but um that does work but going through
[23:51] these layers that emulate windows has a
[23:54] major performance cost
[23:55] um apparently it's playable some people
[23:57] say but um the use of vulkan i've been
[23:59] told
[24:00] allows it to skip that layer that it has
[24:03] to apply to translate direct text into
[24:05] something usable
[24:06] so even if we just had vulcan and did
[24:09] implement native support for linux
[24:12] we would still get much better
[24:13] performance on the rendering by using
[24:15] these layers because it wouldn't have to
[24:16] emulate directx anymore um it would just
[24:18] have to emulate what the other there's a
[24:19] you know any other windows calls or with
[24:22] the input and the sound and things like
[24:23] this but obviously the graphics tends to
[24:26] be a huge processor hog
[24:28] so
[24:29] uh that not have to do a translation uh
[24:32] between windows code and limited code uh
[24:34] we'll save quite a lot there we're
[24:36] hoping so it makes that boot more viable
[24:38] until we get a an actual official you
[24:40] know pure linux native linux client i
[24:43] know
[24:44] i think the
[24:45] the folks who had it running on mac i
[24:47] think that ended with when they switched
[24:49] to the m1 like you still do it on the
[24:50] old intel
[24:51] machines i think the m1s in one switch
[24:54] they did
[24:55] um i'm still waiting for the voodoo
[24:58] 3dfx port
[25:00] personally
[25:02] uh thanks jackaroshi for the joke
[25:04] yeah i'm sorry guys my my not my mic is
[25:07] quiet i'm quiet i have a sore throat i'm
[25:10] under the weather right now it's why
[25:12] i'm sweating like a hug and everything
[25:14] my throat's all scratchy so i'm i'm just
[25:16] quieter than normal
[25:18] um let's switch to some graphics stuff
[25:21] so some stuff uh
[25:23] you knew there was going to be a dllss
[25:24] question an fsr question alex let's just
[25:27] let's just jump those ones right away uh
[25:29] what can you tell us if anything about
[25:31] dlss or fsr at some point any point in
[25:35] development
[25:36] uh must be someone that didn't watch the
[25:37] last uh star citizen live
[25:39] every show somebody's first um yeah um
[25:43] i mean
[25:44] upscaling is a
[25:47] very common feature now you know every
[25:50] single console game pretty much uses it
[25:51] a huge percentage of the aaa pc games
[25:54] use it um
[25:56] it's it's the
[25:58] i don't know it's the future but it's
[25:59] it's the current like this is the
[26:01] expected way if you want extreme
[26:03] resolutions unless you have like the the
[26:05] fastest graphics card um and even when
[26:07] you do there's actually reasons that the
[26:09] lss and fsr can exceed the quality of
[26:11] native resolution in many scenarios they
[26:14] the compromises sometimes there's
[26:15] artifacts in some situations but on a
[26:18] stable frame you can actually get higher
[26:20] quality because it's actually super
[26:21] samples the image beyond the number of
[26:23] pixels you actually have so it's like a
[26:25] perfect anti-airlift image or it can
[26:27] theoretically can achieve a perfect
[26:28] anti-list image which a native render
[26:31] cannot
[26:32] so um yeah they're definitely the future
[26:34] um or in the next few years the way to
[26:36] get to 4k and beyond
[26:38] um in terms of the implementation we
[26:41] need to just finish gen12 first and
[26:42] there's no point
[26:44] this is like by far the biggest
[26:45] performance improvement is the cpu gains
[26:48] we need to make from gen 12 um but the
[26:50] ls as an fsr
[26:52] or an equivalent are type of top of the
[26:54] list
[26:55] uh in terms of the general rendering
[26:57] improvements we have lots of other
[26:58] workflows you know the pu and squadron
[27:00] that we need to get on with in terms of
[27:01] general render improvements these are
[27:03] the top of the list um
[27:05] so yeah definitely um
[27:06] um i like i said last time though i'm
[27:08] not gonna promise one over the other or
[27:10] timelines for them or whether we even
[27:12] come up here and one you know epic came
[27:14] up their own one that um it's more
[27:16] similar to a hybrid of the two
[27:19] [Music]
[27:20] who knows um but you know
[27:22] the existing apis for dlss and fsr are
[27:25] theoretically going to be easier to
[27:26] implement than rolling your own one so
[27:28] that's the most likely scenario and most
[27:30] likely would be to support both
[27:32] but we have to see when we get to it and
[27:34] one thing that makes them a little bit
[27:35] awkward to implement our engine is
[27:37] because traditionally you render your
[27:39] scene you upscale it to 4k or whatever
[27:42] and then you end your ui on top of that
[27:44] however our ui is very much in the world
[27:47] a lot of cases we have holograms in the
[27:49] world we have mfds on ships we have
[27:51] floating holograms uh holographic
[27:53] displays in the ships as well
[27:55] uh mobile glass all these things so
[27:57] they're not a flat 2d image projected on
[27:59] top of the render they're actually part
[28:01] of the world
[28:02] which makes it problematic because if
[28:04] you try and upscale very intricate text
[28:06] and ui these algorithms tend to destroy
[28:08] it
[28:09] and do some evil things for
[28:11] for what you really want to be crystal
[28:13] clear so we already have a solution
[28:15] which type of splits are rendering so
[28:17] that certain parts of the ui type of
[28:19] they have when they get to a certain
[28:20] size on screen or distance they type of
[28:22] swap to a different mode that renders
[28:24] them and make sure that the post effects
[28:25] don't interfere with them
[28:27] so we're hoping we can capitalize on
[28:28] that and use the same technique so we
[28:30] can do
[28:31] fsr or dlss to the main portion of c
[28:34] then some objects get removed from that
[28:36] and composite it on top but that does
[28:38] make some things complicated for us so
[28:40] that's that's a little like oh we have
[28:42] to see how it's going to work um it'll
[28:44] probably won't be
[28:46] bug-free in that sense so we'll have to
[28:48] tweak that till we get it right but yeah
[28:49] it's definitely something we need
[28:51] upscaling is
[28:52] important and for the vast majority of
[28:54] our users i see as the common group you
[28:56] know some people want to a native but
[28:58] i think once people have it and they see
[29:00] yeah i can well especially once they
[29:02] have the cpu gains which you need um but
[29:04] once you've got cpu gains and you can
[29:05] get 60 and you're like ah i can have
[29:08] native 30 fps so i can have you know
[29:10] upscaled 60fps you know maybe i'll you
[29:13] know
[29:15] might be an easier choice once they see
[29:17] it i'm imagining the kotaku article now
[29:19] star citizen developer says feature
[29:22] probably not bug free
[29:24] [Music]
[29:26] uh
[29:28] let's see while we're on graphic let's
[29:29] let's just do our greatest hits here uh
[29:31] how is hd hdr support coming along
[29:35] i want to sell them
[29:37] uh yeah um i i talked to our developer
[29:40] who works on that and
[29:43] right now he
[29:46] other priorities took over
[29:48] um that task so it's not hard right now
[29:51] but
[29:53] yeah he
[29:54] once he he's doing home office right now
[29:57] a lot of the time but and and he has
[29:59] like a super fancy hdr monitor in the
[30:01] office so once he comes back which
[30:05] hopefully soon and we
[30:07] even gonna move into the new office soon
[30:09] which i'm super excited about um yeah
[30:11] hopefully then he can um
[30:14] take it on and
[30:15] finish it because i'm i'm very much
[30:17] interested in that as well
[30:19] for everyone who doesn't know what hdr
[30:21] is it
[30:22] it means a high dynamic high dynamic
[30:25] range basically it means um colors can
[30:28] or colors from a monitor can be much
[30:31] more brighter and vivid
[30:33] than a
[30:35] standard monitor like everyone's used to
[30:38] so and rendering always or
[30:41] rendering in physically based rendering
[30:43] which most engines these days do and
[30:46] they already render an hdr and then as a
[30:49] post-process effect all those colors get
[30:52] like compressed into what we call low
[30:54] dynamic range ldr
[30:56] and that's what your monitor after some
[30:59] other
[31:00] fancy post-processing effects like um
[31:04] gamma needs to be applied but yeah
[31:06] that's the story for something uh for
[31:08] something else but yeah
[31:10] so i think hopefully
[31:14] so a bunch of sport i think has been
[31:16] done i think uh the last i looked the
[31:18] the tasks that were meaning to make that
[31:20] fully finished is three of them i think
[31:21] so we have um
[31:23] color processing is something they are
[31:24] to supply where like you know they they
[31:26] want to set the mood of a scene and they
[31:28] are on a blue tinted sky
[31:30] and they don't make the you know they
[31:31] won't tent the actual sky when they want
[31:33] to achieve a mood that you know they
[31:34] they went to the sky physically accurate
[31:35] and then they just postponed you know if
[31:37] you imagine uh bad example that every
[31:39] night time scene in a film is filmed in
[31:41] daylight then they just make it blue you
[31:43] know it's a
[31:45] exaggeration but that's kind of the
[31:46] approach um so sometimes the artists use
[31:48] these things usually quite subtly but
[31:50] that process is
[31:52] currently mapping one low dynamic range
[31:54] color into another low dynamic range
[31:55] color the process becomes a bit more
[31:57] complicated when you're dealing with
[31:58] high dynamic range colors you know when
[32:00] they say they want to turn
[32:02] a white sky sky to blue or you know blue
[32:04] sky to white
[32:06] it gets more complicated there's now
[32:07] millions of shades of white millions of
[32:09] shades of blue like how
[32:10] you know did you just mean the very
[32:11] bright blues or the ultra bright blues
[32:13] or the extremely bright blues like so
[32:15] that process needs to be changed and it
[32:17] involves changing the art pipeline a
[32:19] little bit and how they offer the color
[32:21] correction
[32:23] and the two other issues are the
[32:24] we have what we call the game post
[32:26] effects which are like not the critical
[32:27] rendering ones like uh color correction
[32:29] or type of lighting and
[32:31] blurs and things like this but just like
[32:33] when you've been shot blood appears on
[32:35] the screen or you're blacking out and
[32:37] these types of effects they'll run in
[32:38] low dynamic range so they'll need
[32:41] uh to convert into html and higher note
[32:43] range so they don't lose the quality
[32:45] otherwise they'll appear very dull if we
[32:47] don't do that
[32:48] and then the final one is there's a the
[32:50] more open-ended one
[32:51] uh when people say this game has a good
[32:54] hdr implementation and this game has a
[32:55] bad one that's type of
[32:58] we like someone said we already rendered
[32:59] the game in hdr the problem is even the
[33:01] html monitor isn't actually
[33:03] high but it's not infinite dynamic range
[33:06] um we would stop there if we had
[33:07] infinite bank range we'll just give you
[33:08] the image we rendered but that's not the
[33:10] case so what you have to do is you have
[33:12] to query the monitor find out what range
[33:14] it's got and type of do a best guess of
[33:16] how bright you think you should render
[33:18] the image and how you should kind of
[33:19] correct the image and then
[33:20] probably also give some sliders for the
[33:22] user so they can kind of tweak it
[33:23] themselves but that can be a hugely
[33:25] subjective
[33:26] point of view and like say different
[33:28] games get either praised or or beaten
[33:31] for how amazing or terrible their hdr
[33:33] implementation is but it's really just
[33:34] that last part
[33:35] uh in the pipeline that people uh get
[33:38] upset over so yeah with that we need to
[33:40] just balance that and make sure we
[33:42] expose the right
[33:43] knobs and tweaks to get everyone to get
[33:45] the image they want on their monitor it
[33:47] doesn't help that there's probably a
[33:49] dozen hdr standards or a half dozen hdr
[33:51] yeah lots of color spaces lots of
[33:53] different ranges different ways of
[33:54] interpreting things it's a bit of a
[33:55] minefield yeah
[33:57] uh you mentioned
[34:00] well you sort of mentioned night vision
[34:02] but you got close enough that we can't
[34:04] avoid it now the question that comes up
[34:06] for every other team and they keep
[34:07] putting it i always put it off to the
[34:09] graphics team what can you tell us if
[34:12] anything about
[34:13] night vision
[34:15] tools uh uh any option for players for
[34:18] to
[34:19] to improve their their experience
[34:22] flying or fighting at night
[34:25] last time this came up you promised you
[34:26] were going to lynch todd pappy
[34:28] um so i i think you should follow
[34:30] through on that promise
[34:32] and get in and uh because we need uh we
[34:34] need i have technical ideas and thoughts
[34:37] on that but we need via
[34:38] design like is is night vision in the
[34:40] future the same as now is it infrared is
[34:42] it was it based on
[34:44] you know some other forward technology
[34:45] but um
[34:46] yeah what i've mentioned in the past is
[34:48] that if you want to do it really well
[34:49] then you use you know you emulate what
[34:52] we call spectral rendering which is an
[34:53] incredibly complicated field but
[34:55] there's elements of it you can you can
[34:57] simulate um where you can
[35:00] type of identify the materials that have
[35:02] a non-standard way of reflecting
[35:04] infrared light uh which would be like
[35:06] you know anything well anything that
[35:07] glows in the dark or spheres to glow in
[35:09] the dark on an infrared camera um
[35:11] which is type of you know like
[35:12] reflective gear like you know your
[35:15] i don't know i can't think of any good
[35:16] examples right now but um
[35:18] uh there's certain materials that type
[35:20] of don't reflect as you'd expect um so
[35:23] they need
[35:24] picking out especially otherwise they
[35:26] don't doesn't look right in night vision
[35:28] um otherwise it's type of a filter you
[35:30] need to type of take your um your the
[35:33] colors and kind of
[35:35] uh it's a computer topic it's hard to
[35:37] ever break it down but what we see is
[35:38] red green and blue is obviously not the
[35:40] true picture of what happens in reality
[35:42] in reality there's there's millions of
[35:43] wavelengths of light infinite
[35:44] wavelengths in a longer spectrum and
[35:47] then infrared is just looking at one
[35:48] portion of that spectrum but we don't
[35:49] the artist doesn't model what happens in
[35:51] that different spectrum they just model
[35:53] what happens
[35:54] in these very three specific spectrums
[35:56] of the human eye can see so we have the
[35:58] type of map
[35:59] or guess how do we get from the artist
[36:01] or what colors to the these type of the
[36:03] infrared spectrum or whatever spectrum
[36:04] our imaginary night vision might be
[36:06] um and there's ways of approximating
[36:08] that or you can offer custom textures if
[36:11] you want to like say if the artist can
[36:12] tell this is exactly what it looks like
[36:13] in infrared but we clearly can't go and
[36:16] we make every texture in the entire game
[36:18] to show how the infrared would work we
[36:19] double the textures in the game so it's
[36:21] you normally do like some type of
[36:22] automated mapping that guesses
[36:25] a best guess approach and then you have
[36:27] to override the particularly special
[36:29] case ones but yeah it's all going to
[36:30] start with todd in the request
[36:34] so you did good you did good the next
[36:37] time next time i ask the question will
[36:38] be to todd uh he's actually i don't
[36:41] think he's actually been on a show since
[36:43] the last time we had you on he's managed
[36:44] to avoid it thus far
[36:46] um
[36:48] how is the graphic system going to
[36:50] accommodate large fleet battles uh
[36:53] greater than 50 fighters plus multiple
[36:55] capital ships the lighting budget alone
[36:58] would seem too crazy for that scenario
[37:00] as things are right now
[37:03] what you got for me jonas
[37:04] yeah
[37:07] yeah right now
[37:08] you will very likely be cpu bound
[37:11] in this situation because so many ships
[37:14] they all need to go through the render
[37:15] threat alone
[37:17] but with upcoming gen12 changes it's
[37:20] hopefully the changes that we make
[37:22] will very likely improve that at least
[37:24] from the rendering side because we can
[37:26] distribute your distribute the work
[37:29] more evenly across your cpu course
[37:32] and that should help there
[37:34] but of course there are other systems
[37:36] than just rendering that you need to
[37:38] keep in mind for example ai or
[37:41] game code or physics or whatever that
[37:43] also takes apart on the cpu so
[37:45] um j12 will of course improve it but uh
[37:49] yeah it's hard to say how much
[37:53] and
[37:54] sorry all right i'm gonna say on the
[37:56] lighting side because i was mentioning
[37:57] the question as well um the lighting
[37:59] tends not to be a big issue in space
[38:01] obviously space is mostly pretty dark
[38:03] not too many
[38:05] uh
[38:06] not too much light going around there we
[38:08] obviously can potentially have lights on
[38:09] the lasers but they're quite easy also
[38:11] to type of lod out if we were
[38:13] particularly struggling for performance
[38:14] um
[38:15] ironically we're in a big ship battle
[38:17] one of the things that hurts us quite
[38:18] hard is the interior of the spaceships
[38:21] um we don't have a great way of
[38:24] not rendering the interiors of
[38:25] spaceships so obviously if you can't see
[38:26] a window then we call them out or if
[38:27] they're very far away we call them out
[38:29] but if you can see in the spaceship or
[38:30] you have like the 600i with all its
[38:32] glass
[38:34] you can't just not render it you need an
[38:36] approximation of what's inside that
[38:37] group and that's quite difficult to make
[38:39] you know you can't just fade it to black
[38:41] because like this say 600 is a very
[38:42] bright interior it just fades to black
[38:44] looks really bizarre
[38:45] so um one thing we were planning is to
[38:47] use type of
[38:49] we have these cube maps we call them
[38:50] environment probes which type of they
[38:52] used in the lighting system to type of
[38:53] capture the environment and then reflect
[38:55] it and as a substitute type of more
[38:58] advanced fade racing reflections so we
[39:01] were planning on using them to kind of
[39:02] render a low quality version of the room
[39:04] the type of would be indistinguishable
[39:06] at the distances we're talking about but
[39:07] would be the correct colors and have the
[39:09] correct type of geometry in there and so
[39:11] that will give us a way of basically
[39:12] culling all the interiors of the ships
[39:13] when we've got a massive fleet battle
[39:14] going on and we don't really care
[39:17] exactly how the interior looks just as
[39:18] long as the right color and you know
[39:20] rough shape of the geometry inside so
[39:23] that would help and that's that would
[39:24] save us the lighting cost of all this
[39:26] interiors um which was yeah but i think
[39:29] largely it's a cpu issue like you and i
[39:32] said um
[39:33] gen 12 it'd be that definitely are part
[39:35] of the problem
[39:36] we'd have to see profile what the likes
[39:38] of the physics and other threads are
[39:41] doing i'm sure they'd have optimizations
[39:43] to do as well
[39:46] for everyone who's interested how these
[39:47] interiors could be rendered just check
[39:50] out the some footages from from the
[39:52] latest spider-man games on playstation
[39:54] how they do it that's
[39:56] an example on how you can do it
[39:59] uh
[40:00] how's the tech coming which replaces the
[40:02] windows of buildings with the 3d looking
[40:05] interior the new window shader
[40:07] how's that
[40:08] coming i think that's exactly what jonas
[40:12] mentioned i believe is that do they do
[40:14] that in the spider-man jonas
[40:18] staring at the question when you when
[40:19] you hit it so i was like i'll just ask
[40:21] it now
[40:23] yeah so
[40:24] we already have um this kind of we call
[40:27] it interior shader in in our engine just
[40:29] as a standalone shader right now
[40:31] and i actually didn't know bef
[40:35] actually didn't know about it like a
[40:36] month ago before i've seen it in game
[40:38] because i had to fix a buck for 1012 on
[40:41] it so um
[40:43] i've seen it live in the engine and i
[40:44] was i was already impressed it looks
[40:47] pretty damn cool and
[40:49] we're already experimenting right now in
[40:51] engine um
[40:52] with it and
[40:54] so i'm
[40:56] optimistic that we gonna see it very
[40:58] soon
[41:00] and but yeah most it's mostly art art
[41:02] site now who has to implement it and
[41:04] yeah test and iterate on it and yeah
[41:08] make sure that it looks good and
[41:11] but yeah
[41:12] from the technology side everything's
[41:15] working looking good so it's at the
[41:17] point where it's ready for artists to
[41:19] start playing with it and then they're
[41:21] going to discover their bugs and all the
[41:22] problems with it and then they'll come
[41:23] back to you to fix it exactly yeah yeah
[41:26] i mean they're already playing with it
[41:27] and
[41:29] i'm excited to see it in engine it's
[41:31] definitely gonna
[41:33] give some more life to those buildings
[41:36] when you can actually see inside
[41:40] uh
[41:41] with all the great optimizations seen in
[41:43] 317
[41:45] do you have plans to have ship lights
[41:47] cast shadows in the near future also
[41:50] helmet lights
[41:51] i liked how they buttered you up with
[41:52] some compliments at the beginning and
[41:54] then asked something
[41:55] not related to it whatsoever
[41:58] but ship lights casting shadows that's a
[42:00] big
[42:00] one um
[42:02] we've come back and
[42:04] we've gone back and forth a few times
[42:05] internally um i don't uh it's controlled
[42:08] by the art setup so i never know for
[42:10] sure what it has and hasn't been set up
[42:12] on each spaceship um
[42:14] but the problem with with the feature is
[42:16] the cost doesn't uh it's quite difficult
[42:19] to control the cost of this so one
[42:21] spaceship floating around in space if
[42:22] you put shadows in them lights no
[42:24] problem at all you park 50 of them all
[42:26] together pointing at each other in a you
[42:28] know a really busy location and you all
[42:29] get out your spaceships and jump around
[42:31] in front of them
[42:32] stack up boxes and all the crazy things
[42:33] people do in the pu um it's gonna start
[42:36] costing a serious amount of uh gpu to do
[42:39] that um
[42:41] so we have to figure out how we can add
[42:43] it yeah keep it under control in the
[42:45] more difficult scenarios um
[42:47] and it's been suggested as we can like
[42:48] you know just fade these shadows out
[42:50] when they're too costly but that
[42:51] actually becomes much more complicated
[42:53] than you think because what you don't
[42:54] want to happen is have you moved your
[42:55] camera and look around the scene things
[42:57] are popping on and off all the time you
[42:58] want a stable consistent visual
[43:01] um
[43:02] but we've got some ideas of how we might
[43:03] handle that and to try and
[43:05] uh avoid the issue um and we might apply
[43:09] the same idea for all type of dynamic
[43:11] lights from like ships your helmet light
[43:13] your flashlights um and muzzle flashes
[43:15] on guns there's another request to have
[43:17] shadows um all these things the muzzle
[43:19] flashes especially is something that
[43:21] it'd be great to have shadows from the
[43:22] muzzle flashes but you know if 50 people
[43:24] are firing in a room then maybe you can
[43:25] say oh we don't care so much um but it's
[43:28] things we could also just you know uh
[43:30] mostly we could provide to the user to
[43:32] say you know do you want these how many
[43:33] dynamic lights do you want to support
[43:35] um let them choose if they want to pay
[43:37] that cost
[43:38] but there is also some internal budgets
[43:40] we couldn't
[43:41] um like we have basically like a texture
[43:43] pool where all the shadows go into once
[43:45] we've exceeded that there's just no more
[43:46] space um without sacrificing the quality
[43:48] in the rest of the level so yeah i'm
[43:51] hoping we can come up some type of
[43:52] system know how many dynamic lights do
[43:54] you want maybe like you know eight might
[43:55] be a
[43:56] a default or four or something like that
[43:57] and then you can scale up whatever you
[43:59] want if you want to take that hit when
[44:00] you have a really busy scenario
[44:02] um yeah so hopefully um but yeah the
[44:05] shift ones are particularly problematic
[44:07] because they can cast
[44:08] thousands of meters
[44:10] and cover huge areas um which means
[44:13] you know if you cover a whole space
[44:14] station there might be a few thousand
[44:16] draw calls in that space station which
[44:18] is like a instruction for the gpu you
[44:20] just double that by putting your lighter
[44:22] and you know 50 people putting 50 lights
[44:24] at it you know 50 times the cost for
[44:25] that space station
[44:27] that's a big deal
[44:30] yeah uh besides the the the ship lights
[44:34] and the shot casting another bit another
[44:37] graphical tech thing that comes up quite
[44:39] often i've seen it a couple times in the
[44:41] chat already today and it was in the
[44:42] thread as well uh rtt's for to use as
[44:46] exterior cameras
[44:47] uh for ships um ideally one at the
[44:50] bottom to make landing a whole lot
[44:52] easier uh for folks uh is there anything
[44:55] you could you can you can tell us
[44:57] uh i'm also gonna point you to uh a todd
[45:00] pappy or someone again um or another
[45:03] design director maybe uh jungkook um i
[45:06] i've actually been pushing for this i
[45:07] want this um but with one giant gotcha i
[45:11] don't want a photo realistic camera
[45:14] like you know like a i'd prefer um
[45:17] mainly because of cost i think you'll
[45:19] just you'll pay a frame rate cost when
[45:21] that happens um if you play a racing
[45:23] game like uh you know any fours or
[45:25] something like this they'll have like
[45:26] their wing mirrors and their review
[45:28] camera but they have heavily optimized
[45:30] their game to make that work and they've
[45:32] heavily optimized what happens in that
[45:33] review camera you'll notice they never
[45:35] look as good
[45:36] um
[45:37] we have a hugely complicated game
[45:38] there's much more than just a roadway so
[45:40] we know we have
[45:41] orbit with gas clouds we have all sorts
[45:43] going on so to render all of that again
[45:45] periodically in a external camera it you
[45:48] know a worst case scenario could half
[45:49] your frame rate um which we don't want
[45:52] so
[45:53] more sensible for me is that we do some
[45:55] kind of like lidar depth camera i think
[45:57] you'd actually be getting cars in real
[46:00] life and i think that'd be far more
[46:02] useful to be honest because
[46:03] um imagine
[46:05] if you're landing a giant spaceship on
[46:07] like a space station you don't really
[46:08] have any sense of scale like
[46:10] it's an enormous beast and you're
[46:12] landing on what might be something
[46:13] that's like concrete or just tiled metal
[46:15] panels you don't know how close you are
[46:17] so i think something that really kind of
[46:19] gives you a great sense of depth even if
[46:21] there's not a lot of interest there or
[46:23] let's say their example might be landing
[46:24] on a snowy mountain
[46:26] you you won't be able to tell anything
[46:28] if we just show you a white picture
[46:30] underneath the spaceship so yeah i think
[46:32] a depth camera or lighthouse or some
[46:34] type of holographic you know some type
[46:35] of nice imaginative non-photoreal uh
[46:38] render would be very cheap and be cool
[46:42] so yeah i'd love that
[46:44] as long as design don't ask the photo
[46:45] bill then i'll hide
[46:48] um
[46:49] lots of folks in chat
[46:51] have been asking about ultra wide
[46:52] support
[46:54] scaling for things like chat hud
[46:56] personal inventory etc uh some some of
[46:59] these monitors are getting super
[47:01] ridiculously wide now 32 9 and stuff
[47:04] like that um
[47:06] what are the challenges involved what
[47:09] what can you guys
[47:10] tell us about
[47:12] uh better ultra wide support
[47:16] so i myself using a ultrawide support
[47:19] monitor so
[47:21] i
[47:22] know about the the issues um
[47:26] with star citizen um unfortunately we as
[47:30] graphics and engine we don't have too
[47:32] much to do with that it's more like a
[47:35] question for ui and
[47:37] how they implement it especially in the
[47:39] building block system
[47:41] and yeah just
[47:43] how the ui scales with all those
[47:45] different monitor resolutions
[47:47] i'm not sure maybe ali knows a little
[47:50] bit more about that if there are
[47:52] priorities on that or
[47:55] no no
[47:57] it's not easy
[48:02] we've actually got something with the ui
[48:04] team scheduled here in the next
[48:09] i think the next two months i think so
[48:12] um okay prepare lots of questions for
[48:14] them then um there's a few graphical
[48:17] things like of ultrawide that we
[48:19] sometimes need to fix or improve the
[48:20] performance of maybe like um or
[48:22] sometimes the quality of maybe our post
[48:24] effects aren't always amazing and super
[48:26] wide and also you know if you super wide
[48:28] depending on how we deal with the aspect
[48:30] ratio kind of more objects to render and
[48:31] obviously you have more pixels to render
[48:33] so you know gen 12 and other
[48:35] optimizations like dlss and things we've
[48:37] talked about would all help there but
[48:38] yeah in terms of just making it you know
[48:40] a fun experience with you know where you
[48:43] positioned the hud and the
[48:45] chat windows and stuff but yeah it's all
[48:47] on the ui team the end and we don't
[48:48] really have any control of that
[48:51] um let's see we've only got 10 minutes
[48:53] to go let's see what more we can squeeze
[48:55] in here uh are there any plans in the
[48:58] future to to dynamically use more vram
[49:01] for cards that have it available for
[49:03] example the game seems to use six gigs
[49:05] on my 390 but i have 24 gigs available
[49:09] would you also would more vram usage
[49:11] allow for better frames or higher
[49:13] quality textures
[49:16] yes
[49:18] okay
[49:22] so first thing i'd say is
[49:23] um you don't want to use 24 gigs just
[49:26] because you can like you want to use
[49:28] what you need
[49:29] but yeah
[49:31] so the question is is the quality
[49:32] improvements we could make
[49:34] which way we could use them 24 gigs
[49:37] at the moment
[49:39] the system is such that basically
[49:42] it assumes it wants to achieve the
[49:44] resolution you ask for so if you ask for
[49:45] 4k it's going to spend a lot of money
[49:47] achieving 4k it looks what memory it's
[49:49] got left on your graphics card and it
[49:50] says okay i'll use all that's rest left
[49:53] on the meshes and textures
[49:55] and it will scale up the texture budget
[49:56] up until about three or four gigs i
[49:58] think the internal limit is of how much
[50:00] you lose on textures um we could uncap
[50:02] that that three gig limit and put it to
[50:04] 100 gigs or whatever and it'll just try
[50:06] and load all the textures in the game um
[50:08] for you um the only reason there is we
[50:11] haven't really uncapped that is
[50:13] it doesn't usually lead to any visual
[50:14] improvement like three gigabytes tends
[50:16] to get you every single texture we have
[50:18] on screen loaded at the highest quality
[50:20] we have available
[50:21] so um raising up is just risks a little
[50:24] bit we might get some streaming issues
[50:25] where
[50:26] your hard drive just starts churning
[50:28] away and
[50:29] maybe you've got a fast hard drive it's
[50:30] okay but maybe you don't have such a
[50:31] fast hard drive and you're wondering why
[50:33] the game runs slow and because it's
[50:34] trying to load the 24 gigs of textures
[50:36] you've asked for which you don't really
[50:37] need
[50:38] so um that's where the situation today
[50:42] where we want to be though with uh once
[50:44] we've finished 1012 is to expose some of
[50:46] these numbers to the player instead so
[50:48] you pick your resolution and it shows
[50:49] you how much money is left and you pick
[50:51] how much text resolution you want to use
[50:53] um and then you can download upwards and
[50:55] then if you want to hang yourself you
[50:56] know put 24 gigs of textures and maybe
[50:58] it does look better maybe it doesn't but
[51:00] we'll give that to user to pick how they
[51:02] uh distribute the memory
[51:04] um one thing i would say is one thing it
[51:06] would be nice which we can't promise
[51:07] booze something would definitely is a
[51:10] future option is to have a high-res
[51:11] texture pack um we offer all of our
[51:14] textures at double the resolution we
[51:15] actually ship them at
[51:16] um but there's some several issues in
[51:19] trying to achieve at the moment uh
[51:21] mainly just the size of the build would
[51:22] would obviously go enormously high
[51:25] um and that has costs associated with as
[51:27] well on the back end side there was
[51:28] there's some money
[51:30] uh a cost for
[51:31] bandwidth um so we also have some some
[51:34] tasks in the pipeline to reduce the size
[51:36] of the build
[51:37] um so you know you know we're this is
[51:39] stuff that's a higher level decision
[51:41] than we can make in our team but
[51:43] maybe if we have detectors available and
[51:45] we have technology to use them we also
[51:47] save a bunch of memory on the build
[51:48] maybe we get to a point where it's more
[51:49] viable
[51:50] uh to have a high-risk texture pack and
[51:52] then the people that do have
[51:54] uh 20 gigs or whatever memory will have
[51:56] a very real reason to use that memory
[52:00] and you know if you say double the
[52:02] resolution of every texture that would
[52:04] be four times the texture memory so our
[52:05] three gigatexture limit might go to 12
[52:07] gigs instead
[52:08] um at least so and 12 gigs once you add
[52:11] on 4k and a few other things you each
[52:12] get to 16 to 20 gigs of memory so
[52:16] so yeah this is a um something in the
[52:18] future definitely um there is some
[52:21] technologies as well in the future that
[52:22] we might use that could eat up some of
[52:25] that memory things like weight tracing
[52:26] and sdfs uh distance fields that are
[52:29] used for various pieces of technology
[52:30] these all consume extra memory
[52:33] we just have to make sure the game can
[52:34] still scale so that the people that have
[52:36] six gigs or whatever can still run the
[52:37] game you know sensibly
[52:39] you understand i have to put everything
[52:41] ultramax ultra ultra
[52:44] right just all the sliders got to go up
[52:46] alley
[52:48] yeah not worth playing if i can't max
[52:50] everything out
[52:52] well interesting a lot of old games used
[52:53] to let you max out beyond what your gpu
[52:55] could do um i think some games now have
[52:57] taken the approach that we're talking
[52:58] about here where if you maximize it it
[53:00] will not let you like it but if you want
[53:02] to run it your game at 8k and to have
[53:05] all the textures loaded in the world
[53:06] it's not it's not going to happen
[53:07] there's no space physically there
[53:09] so
[53:10] yeah it will kind of force you to live
[53:12] within the constraints of your gpu it
[53:14] should be a whole new like difficulty
[53:16] level settings in graphic settings that
[53:17] you like like the the demon souls
[53:20] version of graphics settings
[53:22] you know that just that you know you run
[53:24] the risk of murdering your computer
[53:26] we definitely hope to have that yeah
[53:27] that's a definite goal we want
[53:29] um
[53:30] all right let's see if we can drop some
[53:33] uh more engine related questions in
[53:35] before we get going uh
[53:36] let's see
[53:38] is it planned to support direct storage
[53:40] on windows 11 and do you expect a
[53:42] performance boost from it
[53:46] we have
[53:48] at least taken a look at that but
[53:51] [Music]
[53:52] we already have a custom
[53:55] technology in place to improve the
[53:58] memory transfer to the gpu
[54:01] so it's unclear if we can gain a lot of
[54:05] performance from that
[54:06] that's something we will have to take
[54:08] that people looking to measure and check
[54:10] where it makes sense if it makes sense
[54:12] and then it will probably be implemented
[54:16] the diplomatic answer here
[54:19] all right
[54:20] um
[54:22] this next question's about lots and and
[54:24] distance uh what's being done with this
[54:27] uh the pop in is honestly dreadful and
[54:30] seems the render distance for ground
[54:32] foliage trees rocks and such is so low
[54:35] that it is really jarring visually
[54:37] compared to anything else
[54:39] will this change or increase due to gen
[54:41] 12 or vocal implementation or what can
[54:43] you tell us overall
[54:45] lot popping
[54:48] um yeah i i'm seeing that too
[54:51] the thing is that's mostly um
[54:54] decided by art how they want to set it
[54:56] up of course it's
[54:59] measured based on performance so
[55:01] um
[55:02] but 1212 and vulcan
[55:06] it'll improve another performance and i
[55:10] i think we we will scale it up at one
[55:12] point
[55:14] um
[55:15] but yeah i'm not sure what what exactly
[55:18] is planned there if there's anything
[55:20] official yet so
[55:21] [Music]
[55:23] yeah this is the cpu um
[55:25] plans or not not concrete but definitely
[55:27] um discussions of the planet tech team
[55:29] about
[55:31] how we can take things one level higher
[55:34] um at the moment basically each object
[55:37] is considered an incidence an individual
[55:39] object in the scene um this type of
[55:41] spawned and managed the position of it
[55:44] um we do have some small scales grouping
[55:46] where like we might group five or ten
[55:48] objects together but what you need if
[55:49] you want to say render an entire
[55:50] rainforest is the ability to have
[55:52] millions of trees and just to have the
[55:54] concept exist of an individual tree
[55:57] means that that becomes beyond the reach
[55:58] of a sensible speaking cure you need to
[56:00] have the concept of it this is a whole
[56:02] you know this is a patch of forest that
[56:04] might be a kilometer wide or 10
[56:05] kilometers wide and the type of the
[56:07] trees either never existed individually
[56:09] and that type of a group or
[56:11] they are being spawned extremely quickly
[56:14] and then merged into one type of uber
[56:16] club that we just type of can submit to
[56:18] the gpu
[56:19] or even nightmares with gpu but like
[56:21] type of just render on the gpu
[56:23] without any cpu involvement but yeah but
[56:25] the current approach of type of having
[56:27] one object you know type of constructed
[56:29] and sent to the gp reach frame it just
[56:31] doesn't scale quite to the to the level
[56:33] we need but yeah gen 12 will
[56:35] give us like a big boost on what would
[56:38] be possible with the current system but
[56:39] yeah those there's plans for the extreme
[56:41] lods we'd call them like you know the
[56:43] rainforest where you could just sleep
[56:44] for miles and miles of trees that need
[56:46] something slightly different for that to
[56:47] work
[56:49] and and all these objects on the planets
[56:52] they're already using a more specialized
[56:54] path to
[56:55] be rendered much quicker than our usual
[56:58] objects like all those brushes
[57:01] uh but yes i pointed out um if we want
[57:04] to have like really dense light forests
[57:06] like you've seen a microsoft flight
[57:08] simulator
[57:09] um there's definitely a lot of room to
[57:12] improve and
[57:13] definitely something we're looking at
[57:15] aware of and yeah hopefully we'll
[57:20] implement something in the future about
[57:22] that
[57:24] oh we're just about out of time so let's
[57:26] let's
[57:27] end with something a little more general
[57:30] uh
[57:31] for graphics
[57:33] engine performance
[57:35] gen 12 what's the
[57:36] what's the what's the immediate future
[57:39] look like like like like
[57:40] what what do you got on your what you
[57:42] got on your
[57:43] agenda for the next
[57:45] three six months
[57:47] here no dates no it just just what are
[57:49] you working towards right now
[57:52] well as i already pointed out the
[57:54] beginning we want to finish 1012 so
[57:56] there are few more milestones we have to
[57:58] finish the transparent rendering that's
[58:00] the biggest one
[58:02] and yeah once that's done
[58:04] i expect
[58:06] all the other things which are missing
[58:08] which more like a few compute passes uh
[58:11] like planet atmosphere stuff and like
[58:14] compute skinning
[58:15] and a few other things we're probably uh
[58:18] half of a look at um are finished
[58:21] um we have then gentle offs done and i
[58:24] really excited to see how um
[58:27] how much performance we gained from that
[58:29] and
[58:31] yeah um
[58:32] after that we can walk in which is not
[58:37] um lacking too far far behind because
[58:39] like in general we're um developing 1012
[58:43] and vulcan parallel
[58:44] and vulcan is just lacking a little bit
[58:47] behind so once gen 12 is done um
[58:50] it shouldn't take us
[58:52] too long to even get a first version of
[58:55] vulcan working
[58:58] okay anything you want to add to that
[59:00] ally jonas
[59:01] uh now we've got like uh we've got these
[59:04] guys have 10 12 on the entry team we've
[59:06] got um about half the graphics team on
[59:08] gen 12 as well um
[59:10] the ones that aren't on that um
[59:13] are working on a number of features
[59:14] mainly
[59:15] there's a bit of a backlog for s42 type
[59:18] of the critical features we need for
[59:19] that they'll obviously feed into the pu
[59:20] as well there's very little that would
[59:22] be specific to squadron it's more just
[59:24] you know who who is the prime
[59:27] uh
[59:28] you know need for for each feature but
[59:31] yeah there's a few features in the works
[59:32] for them
[59:33] um
[59:34] some research for longer term uh
[59:36] features like uh jump points um to the
[59:39] graphical implementation of that
[59:41] um
[59:43] things like uh improving the water
[59:44] effects is something that's on the kind
[59:45] of near-term goals as well and unifying
[59:48] then we have like a planet uh ocean
[59:50] shader we have a water volume shader we
[59:52] have a river shader
[59:54] um these things all need work and love
[59:56] and integrate them with the vfx as well
[59:58] we don't we've lost in the in the in the
[1:00:00] transition of our engine over to
[1:00:02] you know all the improvements with major
[1:00:04] planets and stuff we've lost like
[1:00:05] splashes and dynamic waves and stuff
[1:00:07] like this so we need to
[1:00:09] reintroduce these types of technologies
[1:00:11] and um
[1:00:13] that's ibm mainly of a half team on gen
[1:00:15] 12 and when that's done they'll be on
[1:00:16] vulcan until that is running butter
[1:00:19] buttery smooth um
[1:00:21] and even then that team might in then
[1:00:23] look at the dls uh fsr type approaches
[1:00:26] and only then will the type of
[1:00:28] join the rest of the team on the uh the
[1:00:30] general graphics features
[1:00:33] cool
[1:00:34] um yeah two or two more things i would
[1:00:37] like to say really quickly um like one
[1:00:39] of the questions was could we pay a beer
[1:00:41] to christopher balti so i want to have a
[1:00:44] small shout out to balti for all the
[1:00:45] nice improvements he did for 3.17
[1:00:48] and
[1:00:49] he he claimed all all those improvements
[1:00:51] for himself
[1:00:52] internally
[1:00:55] so give them a big shout out
[1:00:57] and one last thing i've promised one of
[1:00:59] my friends
[1:01:04] okay there's your dab
[1:01:11] yeah that's it
[1:01:14] all right i think i think they might
[1:01:16] have finally found out the way to make
[1:01:17] sure i never invite them back on the
[1:01:19] show ever again
[1:01:20] dab
[1:01:22] we're going to see ian leon dab on the
[1:01:24] next show just to get out of it
[1:01:26] all right
[1:01:27] everybody uh thank you so much jonas
[1:01:29] sylvan and ally for taking time out of
[1:01:31] the end of your week to be here on the
[1:01:32] show
[1:01:33] um
[1:01:35] uh
[1:01:36] folks if you haven't check out
[1:01:37] yesterday's inside star citizen uh it
[1:01:40] was a special tools time episode uh
[1:01:42] detailing uh the work of two of our
[1:01:44] tools teams one in montreal and one in
[1:01:46] uk on some recent things that they've
[1:01:48] done um
[1:01:50] it's it's it's not the flashiest show
[1:01:52] but it's the kind of thing that only
[1:01:53] star citizen whatever touched explore so
[1:01:56] those tend to be my favorite and so
[1:01:57] thank you so much for indulging me uh in
[1:02:00] in those really really esoteric behind
[1:02:03] the scenes stuff i will be back next
[1:02:04] week with a all sprint report ish
[1:02:07] episode of inside star citizen so that
[1:02:10] you have all that so you can get all
[1:02:11] your your cool visuals and stuff back uh
[1:02:14] and then we're back here uh
[1:02:16] next week on scl i think it's the
[1:02:20] modular content team i'm not sure it's
[1:02:22] my i don't my schedule's all upside down
[1:02:24] right now
[1:02:25] uh but
[1:02:27] take care i
[1:02:29] remember that invictus launch week was
[1:02:32] just uh announced yesterday the day
[1:02:34] before uh check that out for the full
[1:02:36] schedule on what what ship
[1:02:38] manufacturers are going on on what day
[1:02:41] and uh yeah we'll see you next week
[1:02:43] everybody take care bye
[1:02:48] bye
[1:02:49] don't you dab on my show
[1:03:11] you

# Star Citizen: Around the Verse - Outposts and Environmental Storytelling

**Video:** https://www.youtube.com/watch?v=KN7HOzS2W2Y
**Date:** 2017-08-18
**Duration:** 31:57

## Transcript

[00:15] hello and welcome to another episode of
[00:18] around the verse our weekly look at star
[00:20] citizen's ongoing development I'm sandy
[00:22] Gardner and I'm for Stefan happy to be
[00:25] here with you sandy it's good to have
[00:26] you here to forest today we take an
[00:28] in-depth look at the detail that goes
[00:30] into the surface outpost you'll be
[00:32] exploring in 3.0 from adding specific
[00:34] branding to adjusting the amount of wear
[00:37] and tear from the weather creating these
[00:38] outposts is far more complex than you
[00:41] might think but first last week on
[00:43] burned down we showed you some of the
[00:45] bugs and blockers currently affecting
[00:47] the 3.0 release this included an issue
[00:50] where players would spawn the wrong way
[00:52] in port olisar and immediately fall
[00:54] through the station's geometry Oh
[00:56] to see what issues have been found and
[00:59] fixed since then let's take a look at
[01:00] this week's burned down welcome to burn
[01:04] down our weekly show dedicated to
[01:05] reviewing progress on issues blocking
[01:07] the release of star citizen alpha 3.0 in
[01:10] our week ending report at Roberts space
[01:12] industries calm /schedule - report last
[01:14] Friday we were at 83 total issues which
[01:17] were identified as 12 blockers forty
[01:19] three criticals 23 hides five moderates
[01:22] and no trivial x' with 32 new must fix
[01:24] issues created but let's see how this
[01:26] week is progressing the 3.0 release is
[01:29] the first time that we're going to offer
[01:32] players real persistence it also means
[01:35] that we're finally really leveraging a
[01:37] lot of technology that we've been
[01:38] building towards for a long time it
[01:40] means we have to be prepared to do a lot
[01:43] of interesting bug fixings that it's
[01:45] hard to track down
[01:46] you know it's hard to identify where
[01:47] these are coming from in order to get an
[01:49] idea of how things are up to the tree
[01:52] but over and specifically often a
[01:55] certain email to QA leads earlier today
[01:57] but if you guys can do a 3.0 smoke test
[02:00] today then we can have results of that
[02:04] over the weekend thing that's been
[02:06] really getting through this week and the
[02:08] last couple weeks really has been
[02:10] getting the shopkeeper in order the
[02:11] shopkeeper animations particularly
[02:14] we have these shoots these awesome
[02:16] shoots with a couple different actors
[02:18] that were something to get in and behind
[02:21] the counter and so right now like the
[02:24] counters are where the characters are
[02:25] doing all this and we have a bunch of
[02:28] different counters and a bunch of
[02:29] different characters doing different
[02:31] things at them and so I'm going in and I
[02:33] put it in and I put it all the stuff
[02:34] onto one counter and then they all use
[02:37] it a different way than that like I
[02:39] expected and then you know like right
[02:41] now we're having a place to deliver a
[02:43] box when you need to and I got it out
[02:46] when I got it working I was so happy and
[02:47] then I played it and then I realized
[02:49] that the guys leaning right with a box
[02:51] was going to be delivered and so I walk
[02:52] up and just like stuff it in this face
[02:54] it's something that you think you have
[02:55] figured out and then you see it in and
[02:57] you realize though I didn't have this
[02:58] figured out I had really should have
[03:00] probably thought about this harder
[03:01] before and coordinating with the UK and
[03:03] the design team over here to go through
[03:06] and just get get the animations in and
[03:08] get the face team to have this sync so
[03:11] this is all now one-to-one so she's
[03:13] actually playing face animations and
[03:14] then getting all of that to work in
[03:17] sumption so that if you go in as a
[03:19] player not only we should be able to do
[03:22] this but she'll be able to intelligently
[03:23] like you know turn and look and be like
[03:25] hey how's it going you know I mean this
[03:27] right here I mean this is the result of
[03:30] thousands of hours of in a multiple you
[03:34] know and you know it's it's not one
[03:38] person I mean there's you know there's
[03:39] your snack you know there's you know
[03:42] 7080 a hundred people that were involved
[03:44] in trying to get this a bit at all
[03:46] clicks I think that right now we have to
[03:49] ensure that we first apply today and I
[03:51] think that we need to keep the momentum
[03:53] on the European time zone so we can tell
[03:55] by the girl we're totally done yet and
[03:57] then that way when the US times are
[03:59] going how they have the Momentum's
[04:00] switchover West case by tomorrow morning
[04:03] we have to be in a position where you
[04:05] walk in tomorrow morning and you're like
[04:06] well you should - at least raking end of
[04:10] UK days that would be arguably the best
[04:13] year I'm working on usable
[04:15] those are objects that NPCs use in the
[04:18] game so the frustrating thing about this
[04:20] is that quite a few of those things used
[04:23] to work before but are now broken again
[04:26] so in this video for example we have an
[04:29] NPC who grabs a cup and for some reason
[04:32] it just is in his hands and then he puts
[04:34] it down and he pushed himself out of the
[04:38] booth with with this cup so after a lot
[04:43] of research we found out that this is
[04:45] because the cup actually has collision
[04:48] and the table also is collision and
[04:50] during this interaction they are not
[04:52] supposed to collide with each other
[04:55] because they are both part of the same
[04:57] process namely in drinking in this case
[04:59] but for some reason they do so the
[05:01] embassy puts it down pushes himself out
[05:04] of the booth which then messes up
[05:06] everything that follows including
[05:08] heavily clipping through the booth to be
[05:11] precise though we haven't entirely
[05:13] figured out is really an animation issue
[05:15] so the investigation still needs to
[05:18] happen string givers there's a lot of
[05:20] challenges because we've got a very
[05:21] cinematic experience that we're trying
[05:23] to use with the same feather blending
[05:27] tech for everything else and so we've
[05:30] got some challenges that the other wild
[05:33] lines and stuff doesn't really have to
[05:35] deal with so a car will finish lines in
[05:38] like different positions so he'll he'll
[05:41] be forward to kind of you know talk to
[05:43] the player a little more discreetly year
[05:45] and he'll finish his line there whereas
[05:47] a lot of the other wild lines they kind
[05:49] of can say they're their lines from any
[05:51] positions so you know whether they're
[05:53] wiping a counter or standing at a
[05:55] counter just leaning on it or leaning up
[05:57] against the wall they can all say hello
[05:59] goodbye whatever but Eckhart's you
[06:01] really want to feel that emotion that
[06:03] he's trying to convey and so reusing the
[06:07] same tech has been challenging in that
[06:09] sense and the other thing that we were
[06:11] able to do is look at getting to fix on
[06:15] the car issues that we've been seeing
[06:18] those combination of designing the AI
[06:20] team on their sprints and making sure
[06:24] that each node still actually present so
[06:27] he was missing from the bill at that
[06:28] point and that got fixed as well so to
[06:31] fix that one on which is cool so I'm
[06:33] working on right now is item
[06:36] highlighting its shops we've been
[06:37] updating the way you interact with shop
[06:39] items have a smooth
[06:40] the shopping experience to use our
[06:42] existing interaction system instead of
[06:44] our AR data and so if you take a look
[06:46] here when you look at a weapon on the
[06:50] rack or sort or whatever it'll highlight
[06:51] that weapon so you know you can buy it
[06:53] but if you pay extra close attention
[06:54] you'll see things like the magazine or
[06:56] sometimes the scope or other bits of the
[06:59] gun are not being highlighted and that's
[07:02] because things that we have attached to
[07:04] these shopping items will not get the
[07:07] highlighting just the main item so I'm
[07:10] going through and making it check all
[07:12] the attached items so everything gets
[07:13] highlighted so you don't get weird
[07:15] situations like this so how is it the
[07:17] shovelry cask stuff is that and I didn't
[07:20] go particularly well I mean we saw you
[07:24] sell pretty much everything because the
[07:26] thing about shopping the key is because
[07:27] they're all going to be the same across
[07:27] the board so once you see all this all
[07:29] you've seen everything
[07:30] zooming it gets through everything and
[07:31] unfortunately most of things don't work
[07:34] and you are is not fully established so
[07:36] the primary focus of it is just where's
[07:39] the UI yeah yeah and so it's not very
[07:42] similar towards last time so we're
[07:43] currently having some problems with
[07:45] right now is doors across a bunch of
[07:49] different ships particularly caterpillar
[07:51] as well as the constellation you see the
[07:53] constellation the doors seem to be
[07:56] fleeing they don't want to stay inside
[07:59] the constellation at the moment so we've
[08:02] been chasing down exactly why they are
[08:05] fleeing the nest and leaving everything
[08:07] within the constellation in kind of a
[08:10] rough state because of that some people
[08:13] don't understand exactly how complicated
[08:14] our doors are they're not just a simple
[08:16] open and closed because they also do
[08:18] things like hold the environment in and
[08:21] the you know the atmosphere for your
[08:24] ship as well as represent certain areas
[08:26] of the physics grid we're consolidating
[08:28] all of our door texts of all be variants
[08:32] of the same system one of the things
[08:34] that I'm doing is that a there has been
[08:37] some mismatch in least reported I
[08:42] haven't found it yet with some mismatch
[08:45] in the actual assets being used possibly
[08:49] as a result of that switch
[08:52] so I'm going through and cleaning that
[08:55] stuff up now making sure that everything
[08:59] is are the same naming conventions
[09:00] everything uses the same effects or
[09:03] sounds as they're supposed to or hooks
[09:05] those into the proper bones because all
[09:09] of our doors that bring something in
[09:12] with the load-out will have the same
[09:14] expectations of what those attached
[09:16] points are going to be now we have had
[09:19] some interesting bugs I guess I think
[09:23] because you know when we when Glynn
[09:27] project first staff did a lot of this
[09:28] stuff was kind of more of a pipe dream
[09:29] and we didn't necessarily have the tech
[09:30] to do it now we've got the tech to do it
[09:32] there's you realize that those it
[09:36] doesn't really matter if something is a
[09:38] centimeter off or it doesn't really
[09:39] matter if something's not quite right it
[09:41] is now really really important it's been
[09:43] really really good kind of therapeutic
[09:48] for us to kind of go back there actually
[09:49] do you know what looked at this and it's
[09:51] not quite right but we know how we need
[09:53] to fix this now and it's I think it's
[09:55] been a good chance for us to be much
[09:59] stricter with our our processes much
[10:02] stricter with our naming conventions and
[10:04] our metrics in QA we've been amongst the
[10:07] first wave of guinea pigs for the
[10:09] rollout of coffee world 3 internally
[10:11] it's really benefit others in QA and it
[10:14] will benefit everyone else too
[10:15] I've got on my screen copy all three
[10:19] which is our internal patch a tool and
[10:21] right now I'm just going to be
[10:23] incrementing a 3.0 build to the next
[10:26] version so as it goes through it's
[10:28] picking up on what data we do already
[10:30] have from our previous run and it skips
[10:32] over anything it doesn't need to do and
[10:33] just as the downloads it does so
[10:38] previously on that last run which went a
[10:40] little bit wrong our loose files took a
[10:42] while and already here we have an
[10:45] updated 3.0 build the copy builds 3
[10:48] application itself is really just the
[10:50] tip of the iceberg we've got many people
[10:52] working on lots of different moving
[10:54] parts to get this to actually worked
[10:55] from the build guys over in Austin
[10:58] through to engineering in Frankfort who
[11:01] have actually developed the app sure
[11:03] that's the copy bill 3 is based upon
[11:06] so really this week's been tying up all
[11:08] the loose ends had a few issues the last
[11:12] minute realizing that we could launch
[11:14] because we needed some changes making to
[11:15] the build system however that's all got
[11:17] resolved and we launched hopefully
[11:19] successfully today so quantum drive
[11:21] involved two major things getting the
[11:23] ship across the system wherever we're
[11:26] going at you know fractions the speedo
[11:27] light and ensuring they got there safely
[11:30] we've been getting the ships there no
[11:33] problem getting there safely has been
[11:35] the issue if two people want to jump at
[11:37] the same point there were chances of
[11:38] them colliding asteroids getting in the
[11:41] way
[11:41] stuff like that so our biggest issue is
[11:43] now has been dealing with the potential
[11:46] collisions along the way and preventing
[11:48] that so detecting at you know a tenth or
[11:51] 2/10 the speed of light am I about to
[11:54] hit something and stopping soon enough
[11:56] we've had several several issues where
[11:58] people would jump to the same point and
[12:00] arrive on top of each other and just
[12:02] explode the big one we had for a while
[12:05] was people would jump to a planet or
[12:07] whatever and end up inside the star and
[12:09] this there and you would just see a
[12:10] glowing circle I've got what's going on
[12:13] look around oh I am now the star of the
[12:15] system now we're still knocking more out
[12:17] than coming in and at the time we're
[12:19] filming this we resolved 54 with 46
[12:23] being added to our must fix list and
[12:25] we're currently sitting at 88 issues
[12:26] blocking his first release well across
[12:28] all of our internal branches we've
[12:29] checked in over two thousand fifty two
[12:31] updates this week alone the next time
[12:34] our public schedule gets updated you can
[12:35] see even more progress as we work to
[12:37] keep you as up-to-date as we are
[12:39] internally also we've officially moved
[12:41] our development team over to the 3.0
[12:43] branch which is another great milestone
[12:45] for us to further triage issues coming
[12:47] in and get us ever closer to our first
[12:49] release to non vig testers our
[12:51] optimizations and polish are making for
[12:54] better testing allowing us to move
[12:56] quicker into regression and bug
[12:58] identification so come back next week to
[13:00] see the progress we're making here on
[13:02] burn down just a reminder that there
[13:05] won't be an atv next week while we're at
[13:07] Gamescom in the meantime you can check
[13:09] out the production schedule on our
[13:10] website to track the progress of 3.0 and
[13:13] speaking of 3.0 one of the features
[13:15] we've showcased in the upcoming release
[13:17] is the ability to visit of
[13:19] of surface outposts scattered across
[13:22] crusaders moons these outposts will be
[13:24] places for you to explore do missions
[13:26] and cross paths with other players now
[13:29] take a look at the team responsible for
[13:31] making these outposts interesting and
[13:33] connected to the surrounding environment
[13:46] so the last update we kind of showed you
[13:49] what the outpost archetype is the main
[13:52] shake language how it sat on the surface
[13:54] whereas now we're going to go a little
[13:56] bit deeper into the branding and the
[13:59] integration and the detailing that we're
[14:01] going to put into the interiors so we're
[14:03] given a brief and it will be quite light
[14:06] and in terms of narrative and they'll
[14:09] say something like ol re re is a
[14:12] high-tech hydroponics lab and that grows
[14:14] cutting-edge by engines of plants and
[14:16] they used in medicine so then they'll
[14:19] also say what the field will be will be
[14:21] high clean organized scientific nice
[14:23] place to work and I just convey that in
[14:25] a visual method so this isn't just a
[14:27] process that can just be done in an
[14:30] instant it's a progression thing so I'll
[14:34] do like a first iteration and that'll
[14:36] probably just involve maybe putting down
[14:38] the selection of props and then all them
[14:41] pass that on to my leader and our
[14:42] director and they will review it and
[14:44] they will say okay maybe the field here
[14:48] isn't quite what we need we need
[14:50] something maybe a little more sterile or
[14:52] something a little more cleaner say for
[14:54] example something like the focused on we
[14:56] need something a bit more sinister
[14:57] looking so it's a process of layering
[14:59] the dressing and then building up an
[15:02] authentic atmosphere so we go from that
[15:05] initial point and then we'll get to the
[15:08] end where we're kind of happy with it
[15:09] and we feel like when you walk in in the
[15:11] player goes wow this is cool
[15:12] traditional what you do is you concept
[15:15] out your vest a shot and kind of
[15:17] describe where their location is whereas
[15:20] now with the tools we have it's actually
[15:22] more natural more organic to just have a
[15:24] little Scout around that way you kind of
[15:27] get natural happy accidents so for
[15:30] example you might find a location where
[15:32] the
[15:32] is a nice kind of rich line and then
[15:35] there's maybe a gas chain just peeking
[15:37] over the horizon and then that's when we
[15:39] stop saying this will be a good location
[15:41] you also get that second element of
[15:44] believability were you know rather than
[15:46] putting down an arbitrary location it's
[15:48] what people actually build there you
[15:51] know but this way we can almost validate
[15:53] the location you know is it believable
[15:55] would people build there and then that's
[15:58] when we can start establishing our
[15:59] compositions I found a lot of times
[16:02] where I decided on a place for an
[16:03] outpost and I've dropped a point down
[16:05] and then I fly maybe a mile to the left
[16:07] nothing oh this is a much better place
[16:09] to pull that outpost delete the old one
[16:11] move my type of point drop it down there
[16:13] it's the process of 30 seconds so you
[16:16] know it is very quick to iterate on I do
[16:18] basically fly around the moon and think
[16:20] this is much better oh you know the gas
[16:23] giant hanging in the sky just here
[16:24] really looks good so let's put an
[16:26] outpost here and I tend to move things
[16:28] around quite a lot so secondly about
[16:31] integration and believability it comes
[16:33] to the surface in the weathering so when
[16:36] you see an outpost you can you should
[16:38] see an indication about how long he's
[16:41] been in that landscape the type of
[16:44] climate that's being happening there and
[16:46] thirdly the type of people that live in
[16:48] this location so these three factors go
[16:51] a long way for describing you know the
[16:54] visual style of this location so one of
[16:56] these elements is slightly off they
[16:59] don't kind of break that immersive
[17:01] element so it's something we always pay
[17:04] attention to then we integrate these
[17:06] outposts onto the planet and basically
[17:08] that just means how it fits in if it's a
[17:13] sandy planet you want the outpost and
[17:15] have some of that
[17:16] to help you embed it and it doesn't look
[17:18] like it's floating on this planet and
[17:21] it's nothing to do the environment you
[17:23] know see it's an environment and it will
[17:25] take part of that on we had several
[17:26] levels of how we integrate our outpost
[17:29] onto a planet's surface we've got the
[17:31] outpost itself the exterior walls and
[17:34] the ramps and stairs they have a blend
[17:37] map which takes on some of the texture
[17:41] information from the outpost some of
[17:44] that stone procedurally so by the base
[17:46] of the outpost
[17:47] actually uses a tech to blend the planet
[17:50] surface into the texture of like the
[17:53] stilts and the ramps and then we have
[17:55] our actual walls having their own blend
[17:57] map so if it's the sandy one it will
[18:00] blend sand will come in with the gaps
[18:02] and the crevices and then the ice you
[18:04] want to go the same kind of thing ice
[18:06] will build up like Frost it's like in a
[18:08] jungle environment or more like life
[18:13] like biome then you might get moss or
[18:15] vines or something like that so that's
[18:17] the sort of blending we do on there and
[18:19] then we do the decals themselves so
[18:21] that's like projected decals of of
[18:24] similar things but we can do a bit more
[18:25] localized kind of build up so streaks of
[18:29] coming down the outpost and build up on
[18:33] the roof of the outpost if there's been
[18:35] a sandstorm then it's blown over the top
[18:37] and then we can show that we can
[18:39] actually control the amount of built-up
[18:41] itself so using the blend Maps we can
[18:45] see how new this outpost is it is it
[18:48] sort of quite recent it might only have
[18:50] patches of dirt around or has this
[18:53] outpost been on there for many many
[18:55] years and it's sort of maybe it's
[18:57] abandoned and it's got stuff coming
[18:59] inside as well as it's covered like you
[19:02] imagine like an Arctic base has been
[19:04] there for many years it would be covered
[19:06] in and just frost and ice and then you
[19:08] only get those hints of what the
[19:10] underlying wall might be so on the
[19:12] interiors we've been defining what these
[19:15] spaces that actually are so rather than
[19:16] just having these generic volumes
[19:19] we've been defining what the architects
[19:21] are so you know if you're going into an
[19:23] engineering space or medical or
[19:25] habitation things like that secondly
[19:27] it's about the brand the who who owns
[19:31] this place so we usually get a good
[19:33] brief from the law team and that's our
[19:35] starting point there are different
[19:37] corporations that we have for the
[19:39] outpost so for example we have a re
[19:41] corporation and Shubin interstellar
[19:44] corporation and it's slight differences
[19:47] between these two and so the re re
[19:50] corporation is probably a better place
[19:52] to work and it's more pleasurable for
[19:54] employees and
[19:56] and they focus more on sore alpaca
[19:58] culture the Shubin on the other hand is
[20:00] maybe slightly more impressive is it's
[20:03] not was probably a pleasant place to
[20:05] work in order to do the branding of the
[20:08] outposts we first get the information
[20:10] from the writers the law and the
[20:12] narrative so what these up lists are
[20:14] what company owns them if they are a
[20:16] company or independent and what's the
[20:19] sort of general theme and narrative of
[20:22] that company and how how it looks and
[20:24] how its dressed and things like that so
[20:26] for example if it's Shubin
[20:29] it would be very corporate it's a really
[20:32] big corporation it's kind of sterile
[20:35] they don't necessarily treat their
[20:38] workers badly but they're sort of like
[20:40] just their workers and there's not a lot
[20:42] of character there something like VR is
[20:45] still corporate but it's a little bit
[20:47] more considered like a nicer place to
[20:50] work so you should see that in the in
[20:53] the way it's dressed and even layout and
[20:57] things like that and then you've got
[20:59] like the more rundown corporations like
[21:01] art Corp feel more dirty they really
[21:04] don't treat their workers very well and
[21:06] then you have the independent company so
[21:09] they wouldn't be as dirty necessarily
[21:13] but they wouldn't be as tidy as a
[21:15] corporation to have a bit more character
[21:17] because that they're kind of like a home
[21:19] from home so someone saved up a bit of
[21:22] money managed to sort of buy a mining
[21:24] machine and started their own little
[21:26] little independent so there'd be more
[21:28] character it might be a bit Messier but
[21:30] they've kind of be living there as well
[21:33] that's kind of interesting too that law
[21:35] and stuff which should be shown in the
[21:37] dressing so you should be able to see
[21:38] what kind of company is just by that but
[21:42] then we've obviously got the actual
[21:44] branding like the logos the and the
[21:46] color scheme so we go about that by
[21:49] instead of doing all this stuff spoke
[21:52] Lee with materials we feed in our colors
[21:57] my primary secondary tertiary colors and
[22:00] any kind of logo colors and practical
[22:04] stuff as well into dataforge which is
[22:07] just a library of date
[22:09] really and then that feeds back into the
[22:12] material so we don't manually make like
[22:14] lots of different materials of different
[22:16] colors we just put in our RGB values and
[22:18] then those colors get fed in so whoever
[22:20] owns say this mining station if it's
[22:23] Shubin then it will tie in to that color
[22:25] scheme and take that so it's a nicer way
[22:28] than having to manually do everything
[22:30] and then we've got the logos themselves
[22:32] so we have our we have like an atlas of
[22:35] logos and idents and lines and fonts and
[22:40] things like that and then they get fed
[22:42] in as well so if Shubin owns this then
[22:45] it takes this whole set of materials and
[22:48] then if we aree owns it and takes that
[22:50] set of materials and if it's an
[22:51] independent maybe it doesn't even have a
[22:52] logo and we try not to like just plaster
[22:56] logos everywhere we want to be a bit
[22:57] more subtle you'd obviously sexy some
[22:59] but depends on the corporation but you
[23:01] know we don't want to see like rere rere
[23:03] everywhere you look so some corridors
[23:06] might just have like a certain colored
[23:08] line that they help you link that to the
[23:11] to the company and there might be some
[23:14] not necessarily logos but just symbols
[23:17] and things started around again just
[23:19] reinforcing that with that brand so
[23:23] that's that's how that's done and and
[23:25] it's it's great that it's all procedural
[23:27] so we can just drop one down say okay
[23:30] this is this one is start core it
[23:32] automatically I mean there's a lot of
[23:34] setup it will take the color scheme and
[23:36] the logos format it becomes an
[23:38] incredibly complex job when you have to
[23:42] consider so much about where the surface
[23:44] of the planet works and these
[23:45] environments aren't just a static level
[23:47] that is going to look the same every
[23:49] time you go back to it they'll be in a
[23:50] constantly evolving kind of spinning
[23:53] planet that eventually is going to be
[23:54] orbiting the Sun in a way that makes
[23:56] sense it's a lot to sort of think about
[23:58] so you have to consider things like
[24:00] vistas and lighting are going to change
[24:02] and you can't as an environment artists
[24:05] you can't pick a perfect place to put an
[24:08] outpost and know that it's going to
[24:09] always look like that so we have to make
[24:12] sure that we're working towards
[24:15] environments that look good in many
[24:17] different scenarios because as the moon
[24:20] rotates it's going to go from day to
[24:21] night so we have
[24:23] make sure that it looks good at night
[24:24] and day but it's the same outpost so
[24:26] there's a lot of systems talking to one
[24:27] another there it's a complex task if we
[24:31] think about the eventual purpose of
[24:33] making this entire process at least semi
[24:36] automated we can't maintain individual
[24:40] outposts so we could make an outpost by
[24:42] hand and export it to a level that's an
[24:44] easy job but if you think about having
[24:47] to make a thousand outpaced by hand and
[24:49] exposing each one of those to the level
[24:51] that's a thousand outposts we have to
[24:53] maintain if we go back down the chain
[24:55] all the way to that initial initial
[24:57] geometry prefab if there's something
[25:00] breaks in an outpost over here then all
[25:02] we have to fix is one prefab over here
[25:04] whereas if something broke in an outpost
[25:06] that was custom we wouldn't be able to
[25:08] fix it across all the other outposts at
[25:10] the same time it would only ever be
[25:11] fixed in that custom outpost so in a
[25:14] procedural system you only ever dealing
[25:18] with pieces but you fix one of those
[25:19] pieces you fix all the pieces in every
[25:22] instance of that outpost that is around
[25:24] so it may be complex now in terms of
[25:27] initial setup but once the pipeline
[25:29] tools come in it should be a lot easier
[25:31] to maintain than if we were making a
[25:33] thousand custom outposts yeah so that's
[25:37] the reason really
[25:38] its initial complexity and initial sort
[25:41] of beating your head against the wall of
[25:43] trying to figure out the system but once
[25:45] that system is in place and once the
[25:47] tools are in place the end result is
[25:49] quick and easy to get and it also is a
[25:52] lot easier to maintain so in terms of
[25:55] how I use the editor I'll be given like
[25:59] a set of brushes probably props guys and
[26:02] I'll also get requests for other props
[26:06] because when I construct seams and it'll
[26:10] probably go with my art direct and he'll
[26:12] say look you know we need something more
[26:14] on the ceiling and so lately I've been
[26:16] making a lot of ceiling pieces and these
[26:18] could be for something the in the labs
[26:20] they needed something more technical
[26:23] looking so what I've done not creating
[26:25] more ceiling vents positions for lights
[26:28] particularly so I work quite heavily
[26:30] with
[26:31] lighting artists and he'll say only you
[26:34] know some sort of five degree angles in
[26:36] order to put more lights onto it to
[26:38] illuminate areas of the room which if it
[26:41] was just a flat ceiling would be quite
[26:44] difficult to do so giving him these
[26:46] options he can do his job more
[26:49] effectively we work with pretty bad as
[26:51] well and these are usually
[26:53] pre-constructed brushes use these can
[26:56] have things I like to hear and sound
[26:57] effects and stuff like that
[26:58] so when I put them down the control
[27:00] ready to go and gives a more immediate
[27:03] sort of look as to what we require so
[27:07] because we've got all these systems
[27:08] talking to one another we have a lot of
[27:10] complexity in the way these things are
[27:12] built and just as an example the
[27:14] outposts at the moment in a traditional
[27:16] game you would probably put all your
[27:19] geometry together light it in an editor
[27:22] and export that level and it will go
[27:24] into the game quite a two-step process
[27:27] for the outposts we start with a
[27:29] geometry we put those into a geometry
[27:32] prefab a collection of geometry prefabs
[27:35] goes into a building piece prefab those
[27:38] building pieces then go into final
[27:41] building eg an outpost those outposts go
[27:44] into an object container that gets put
[27:46] into an outpost cluster preset that
[27:49] preset gets spawned on the moon's the
[27:51] moon with its preset gets put into
[27:54] another object container our object
[27:56] container goes into the solar system and
[27:57] the solar system gets exported to the
[27:59] game so there's a multi-link chain of
[28:03] stuff that we have to maintain and
[28:06] manage and all this is reliant on naming
[28:09] conventions and file structures so we're
[28:12] working really hard at the moment
[28:13] basically the tech artist who wrote it
[28:15] Alex who you've already talked to tried
[28:18] it himself and this is the system he
[28:20] wrote he could have managed it it was
[28:22] too complicated so we are working very
[28:25] hard at the moment to basically take all
[28:26] that middle section out completely and
[28:29] automate it so that the artists will
[28:32] only ever be involved with that initial
[28:33] start and all the way through to the
[28:37] preset creation and putting the preset
[28:39] onto the moon
[28:41] or the middle bit with the multiple
[28:42] prefabs and presets and object
[28:44] containers is all going away and should
[28:47] be completely automated because asking
[28:49] an artist to maintain that level of
[28:51] complexity while at the same time being
[28:53] creative is an impossible request so our
[28:56] tools guides and our tech artists are
[28:58] working very hard to make that as
[29:00] streamlined as possible but it is
[29:02] becoming more and more complex as we go
[29:04] along it relies on others basically
[29:05] building a rule set in a set of
[29:07] automation that makes it completely
[29:09] invisible to an artist and an end user
[29:11] because otherwise people are going to go
[29:13] insane what we're looking to do is have
[29:15] the idea of you have a quite a vast
[29:19] landscape and the player kind of locates
[29:23] one of these outposts they should start
[29:27] thinking about how long has it been
[29:29] there who owns it and things like that
[29:30] and what we're looking to do is layer
[29:33] that narrative from the outside to the
[29:36] inside or so all the way down to how the
[29:38] food is arranged on the interior across
[29:41] from the outside to the interior space
[29:43] the play should start getting those
[29:46] notes of the narrative all the way
[29:49] through and I think in contrast to these
[29:51] barren landscapes to these pockets of
[29:53] quite intense detail it's a quite a nice
[29:56] contrast so now we're getting a really
[29:59] good idea of how it feels for the play
[30:02] to explore and kind of Traverse around
[30:05] these locations so continue to polish
[30:08] but continue to refine and just get that
[30:10] experience to a very high standard so
[30:13] we're looking forward to the next
[30:16] release and then get out to the public
[30:18] and get people exploring
[30:19] [Music]
[30:21] as you saw these surface outposts are
[30:23] our next step forward in environmental
[30:26] storytelling
[30:27] that's right there'll be narrative clues
[30:28] about who owns the outpost how long it's
[30:31] been there and who's lived inside be
[30:33] sure to keep an eye out for those
[30:34] details when paying them a visit and
[30:36] that's it for today's show thanks to our
[30:39] subscribers for supporting all of our
[30:41] shows August issue of jump point will be
[30:43] released tomorrow so be sure to check it
[30:45] out and finally a big thank you to all
[30:47] of our backers your continued support of
[30:49] this project is what makes it all
[30:51] possible
[30:52] be sure to tune in to twitch on Friday
[30:54] the 25th at 7:00 UTC to catch our
[30:57] Gamescom presentation and until then we
[31:00] will see you around the earth
[31:11] [Music]
[31:33] thank you for watching so if you want to
[31:36] keep it with the latest and greatest in
[31:37] the star citizen in squadron 42
[31:38] development please follow us on our
[31:40] social media channels see you soon
[31:49] [Music]

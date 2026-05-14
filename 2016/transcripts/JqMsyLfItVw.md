# Star Citizen: Around the Verse 3.11 - DE

**Video:** https://www.youtube.com/watch?v=JqMsyLfItVw
**Date:** 2016-10-27
**Duration:** 24:24

## Transcript

[00:10] Closed Captioning provided by the Imperial
News Network.
[00:14] Sandi Gardiner (SG): Hey everybody, welcome
to another episode of Around the Verse where
[00:19] we take a look at Star Citizen's development.
[00:21] I’m Sandi Gardiner.
[00:22] Forrest Stephan (FS): And I’m Forrest Stephan.
[00:23] SG: To start things off, just wanted to welcome
all of newcomers to the game and if you’re
[00:28] thinking of joining, now's the time.
[00:30] This is the last week for the Super Hornet
free fly, and if you haven’t tried one yet
[00:35] for yourself just click on the link at the
top of RSI to get further details on how to
[00:40] start flying.
[00:41] And behind the PU alpha and Arena Commander
content available to play right now, we have
[00:45] a lot of other stuff in the pipe.
[00:48] You want to update everybody on what’s happening?
[00:49] FS: Oh I’d love to.
[00:51] So we have Alpha 2.6 has been making some
great progress with new things dropping in
[00:55] every single day.
[00:56] The Evocati have been hammering away with
the new flight balancing so watch out, design
[01:01] has been wrapping up a few new missions for
Crusader.
[01:04] The music logic system is pretty much done.
[01:07] The ship team have two new ships that are
feature complete and ready for release.
[01:11] SG: Yeah!
[01:12] Those two ships are the Herald and the Vanguard
Hoplite, they’re two pretty different ships
[01:15] and they’re pretty cool and they’ll be
awesome additions to the game.
[01:18] FS: Totally agree.
[01:19] On the Arena Commander, art had been polishing
up some new item pickup system and the pirates
[01:24] have been starting to really swarm about,
so be careful.
[01:28] New cameras are in showing off new sweet camera
angles.
[01:31] There’s just so much stuff.
[01:32] SG: Cool.
[01:33] We’ve also been doing a lot of internal
playtests on Star Marine with the whole team
[01:37] and been getting great feedback.
[01:39] The fronted network refactor and network improvement
are also expected to be wrapping up soon.
[01:44] FS: Yeah and Mark as we know the “Bugsmasher”
found a pretty funny bug this week where we
[01:50] could actually teleport through space, I think
it could be a feature but you know.
[01:54] SG: Super cool.
[01:55] You can check that out on our Star Citizen
Youtube channel.
[01:57] So now let's head over to our Frankfurt office
for a studio update to look past 2.6 into
[02:03] 3.0.
[02:04] FS: That’s correct.
[02:05] Studio Update
[02:06] Brian Chambers (BC): Thanks guys.
[02:08] I’m Brian Chambers, Development Directory
from Foundry 42 Frankfurt.
[02:12] The road leading up to CitizenCon: it was
incredibly busy.
[02:16] It’s always cool to show off our progress
and get that out in front of you guys.
[02:19] And the support’s been overwhelming for
myself and the team.
[02:23] Team’s back at it - across all disciplines
- everybody’s busy working.
[02:28] For this week’s update let’s start with
QA where Melissa will give you some insight
[02:32] into how the QA department functions here
in Frankfurt.
[02:35] Melissa Estrada (ME): The Frankfurt QA team
is currently made up of three testers with
[02:40] two dedicated to testing the engine, and one
dedicated to testing Squadron 42 and FPS.
[02:47] We work closely with the development team
whether we’re testing new code changes or
[02:51] investigating an existing issue.
[02:53] There are an array of different types of testing
we do on a daily basis but test requests are
[02:58] high up on our list or our tasks that we do
pretty regularly.
[03:02] So a test request is essentially a request
submitted by a developer who would like to
[03:07] submit code changes that could potentially
break the build.
[03:10] In order to prevent this the code will go
through thorough testing where sometimes the
[03:14] entire game, or only certain parts of the
game, will need to be tested.
[03:18] In this particular test one of our engineers
has made shadow and object optimisation code
[03:24] changes.
[03:25] He provided us with a custom Bin64 which contained
his changes and during our testing we discovered
[03:30] a one of crash and excessive shadow flickering
throughout Homestead.
[03:35] We then compared our finding to the vanilla
code version of the client and reported our
[03:39] final results to the developer.
[03:41] This process prevents new issues being introduced
into a build.
[03:45] However the challenge we sometimes face is
if there were any recent code changes to the
[03:49] same system the test request is meant to to
address, and then these changes were then
[03:53] picked up when the developers synced to the
latest code in Perforce to compile the Bin64,
[03:58] it then becomes difficult to tell which code
is causing the issues.
[04:01] Regardless all issues are reported, further
investigated, and fixed prior to submission.
[04:06] And the final result is a build that contains
improved shadows, no flickering, and no crashes.
[04:12] And this is what I like about being QA here
in the Frankfurt office.
[04:15] Being able to track down these issues and
contribute to the process of fixing them as
[04:21] well together with the development team.
[04:23] It’s a really rewarding experience and I
consider myself lucky to be on this team and
[04:27] contribute to the development process.
[04:30] BC: Thanks Melissa.
[04:31] QA is always a huge part of development especially
with her and the team working with the Engine
[04:36] team here.
[04:37] I don’t always envy their job but they do
help us dig in and sort out any bugs that
[04:42] accidently creep in.
[04:43] For the next part of the update let's check
in with our Senior VFX Artist Caleb.
[04:48] He’ll break down some of the VFX work they
did for Homestead.
[04:51] Caleb Essex (CE): Today I’m going to give
you a more comprehensive breakdown of the
[04:56] large sandstorm effect that was featured in
the Homestead demo.
[04:59] This effect required a lot of collaboration
with the Audio and even the Cinematics department
[05:04] to make it function properly within the engine.
[05:07] So here we are inside the editor with the
Homestead level opened up.
[05:10] The sandstorm effect itself is actually fairly
simple: it’s only made up of three different
[05:15] sprites.
[05:16] There’s a thinner sand texture at the top
of the effect, a thicker one down below and
[05:24] the lighting texture.
[05:26] The two sand textures also include normal
maps as well as the optical flow maps for
[05:30] the frame blending.
[05:32] These optical flow maps give us a virtually
unlimited frame rate for our textures.
[05:37] Because of this we can slow down or speed
up the effect without the animation looking
[05:42] choppy.
[05:43] Something we actually do as the sandstorm
approaches the player to increase the sense
[05:48] of foreboding and scale.
[05:50] The forward motion of the effect is actually
controlled by Track View.
[05:54] The blue line is the path that it follows.
[05:57] As it approaches the player there’s also
a fog volume entity that moves up from the
[06:01] ground.
[06:02] This fog volume is to help with the transition
as the sandstorm hits the player.
[06:08] However it is also used as an optimisation
technique.
[06:11] When the player is inside the storm we can
disable the effect and enable a localised
[06:16] effect of sand whipping past the camera.
[06:19] By disabling the effect while it is hidden
in the fog we can sidestep some of the overdraw
[06:24] issues that can arise when the whole screen
is filled with particles.
[06:28] As we move forward all of these systems will
be unified and controlled by our Planetary
[06:33] Weather system.
[06:34] Here we have the final effect running inside
the engine.
[06:43] BC: Thanks Caleb.
[06:50] It always surprises me how much particles
and effects help in bringing the world alive.
[06:54] It’s cool to see the progress.
[06:57] The rest of the team - incredibly busy as
I mentioned - making great progress from cutscenes
[07:02] for Squadron 42, to weapons, to design and
so on.
[07:07] Another quick update is that the office expansion
that we’ve had: we’re now actively in
[07:13] it - we’re now actively here and working
and functioning - and so I hope to show that
[07:17] off soon.
[07:18] So that wraps it up from Frankfurt.
[07:20] Short and sweet.
[07:21] Thanks for watching and we’ll see you next
time.
[07:23] Back In The Studio
[07:24] SG: Wow, that sandstorm looks pretty epic.
[07:26] It’s like something out of Fury Road.
[07:28] FS: Aw yeah.
[07:29] Mad Max.
[07:30] Awesome.
[07:31] Yeah I mean really now that all this art and
tech is coming online we are able to develop
[07:36] some really interesting planetside gameplay
environments.
[07:39] Right?
[07:40] And even the environment wind can become as
much of a threat as possibly another player.
[07:44] SG: There we go.
[07:46] Speaking of other players, let’s now go
to this week’s Community Update with Tyler.
[07:49] Community Update w/ Tyler Witkin
[07:57] Tyler Witkin (TW): Hey everyone.
[07:58] Tyler Witkin, Community Manager in the Austin,
Texas studio, here to bring you this week's
[08:01] Community Update.
[08:02] Now as previously mentioned, and just as a
reminder, this is the final week for the Fall
[08:06] Free Fly.
[08:07] So if you wanted a chance to fly the Anvil
Super Hornet, you can click the link at the
[08:10] top of our website to find out more information.
[08:13] Now speaking of free flies, racers get ready.
[08:16] The Origin M50 will be made available to all
subscribers throughout the month of November.
[08:20] Last weekend the Star Citizen community in
Germany came together to put on their own
[08:25] community organized CitizenCon.
[08:27] This event had almost 500 people in attendance.
[08:31] You don't believe me?
[08:32] Check this out.
[08:33] Presenter: Greetings from Frankfurt.
[08:34] Crowd of Community: Star Citizen!
[08:37] Presenter[Speaks in German] Clean!
[08:40] Now we are going to start.
[08:43] Thank you very much.
[08:45] TW: That's a whole lot of citizens and if
you didn't have the opportunity to watch it
[08:49] live you can find out all the details of how
the event went over at citizencon.de And if
[08:54] you are interested in these types of events
just a reminder to head over to BarCitizen.sc
[08:59] Check out the interactive map, because it's
very likely there's an event in your area.
[09:03] And now it's time for this week's MVPs.
[09:06] Yes plural, because this time we don't have
one, but seven MVPs.
[09:10] So I want to give a huge congratulations to
Sereth, Avalean, Valkyrie, FyreMaster, SnowCrash,
[09:16] Cantrip and Michiel81 for their exemplary
efforts on the RSI HELPDESK.
[09:21] Now for those of you who are not familiar
with what that is, this is a RSI chat channel
[09:24] on our website where players can come together
to ask or answer questions about the game.
[09:29] So congratulations again to all of you.
[09:32] You're this week's MVPs.
[09:34] Lastly the week would not be complete without
Reverse the Verse, so make sure to tune in
[09:37] tomorrow at 7:00 AM Pacific Daylight Time
where we're going to talk about everything
[09:41] you saw on today's episode.
[09:43] Thanks again everyone for all your support,
and we'll see you in the verse.
[09:46] Back to Studio
[09:47] Sandi Gardiner (SG): Moving back to our Frankfurt
office, getting procedural planets working
[09:50] is a massive undertaking.
[09:51] One that we can't possibly show in a single
episode, so next up is the first of several
[09:57] segments we'll be doing to focus on procedural
planet tech being developed in Frankfurt.
[10:01] Forrest Stephan (FS): So on that note let's
take a look now on the ecosystem painting,
[10:06] the zone system, and some other cool features
that Frankfurt has been working on for 3.0
[10:12] and ...
[10:13] FS & SG: … beyond.
[10:14] Behind the Scenes: Procedural Planets
[10:15] Hannes Appell(HA): So today we want to give
you the first out of probably many deep dives
[10:21] into the core of what makes our planets tick
and about the planet creation and this is
[10:26] tech developed here mainly in Frankfurt by
Marco, Sasha, Carson of course.
[10:31] Basically with the Homestead demo for Citizen
Con, practical test case of what we call the
[10:35] V2 planet tech which is... we are already
basically at V3 now so we kind of needed to
[10:41] say at one point, that is it for the demo.
[10:44] So we have a couple more features in progress
and the Homestead of course was not just made
[10:49] because of our love of giant space worms but
also to have engineers and artists work on
[10:55] something that is basically a substantial
test case so we can mature our tools, our
[10:59] planet editor or what we call it the plan
ed.
[11:03] To basically arrive at something where the
useability has grown into a mature tool set
[11:07] but also the feature set of course with the
massive object distribution, vegetation, ecosystem,
[11:12] painting and terrain height map.
[11:14] Sasha: Working with our environment artist,
Pascal on the ecosystems themselves which
[11:19] in the case of Homestead were actually only
five distinct ones.
[11:22] HA: My job on Homestead was as visual director
and for that I basically initialized the lighting
[11:29] and mood and overall feel of this and also
worked with our environment artist Pascal
[11:35] on the ecosystems themselves and I basically
also every day a couple of hours spent with
[11:42] Marco, Sasha and Carson on the tool set itself.
[11:45] Marco Corbetta(MC): Hello, we are going to
talk about planets today.
[11:49] Thanks to everyone on the Star Citizen subreddit
and the CIG community forums for your positive
[11:56] feedback, we really appreciate it.
[11:58] Initially we were not planning to have seamless
transition from space to planets into Star
[12:04] Citizen.
[12:05] Around September we started rewriting from
scratch the CryEngine terrain system, here
[12:10] you can see my first experiment of a procedural
planet without any atmosphere at the end of
[12:15] October 2015.
[12:18] Then this is our first test with atmosphere
in November.
[12:22] Carson Wentzel has been working on the atmospherics
and clouds as well as a number of other engine
[12:29] features.
[12:30] Here is our first public update at the end
of 2015 showing the first Delamar planet version,
[12:38] it was more simple procedurally based but
was already integrated into the editor so
[12:44] you could place landing zones on top of the
planet.
[12:47] In February 2016, we had the first man working
on planet, at this stage we still did not
[12:54] have ground details and we still had many
precision issues as you can see in the video.
[13:00] So during March and April, we made a lot of
progress, you can see more details when zooming
[13:05] into the planet and this is the video of the
first buggy driving on the planet surface.
[13:11] At this stage the planets were mostly procedural
and even though we were getting good results
[13:19] it was becoming difficult to really customize
the planets.
[13:22] Pascal Muller(PM): There was no diversity
in the planets, it was either a big, rocky
[13:26] planet or a jungle planet or a desert planet
but there was no variation in the ecosystems
[13:32] on this planet and with V2, this changed.
[13:36] We introduced something new, which we called
ecosystems, so when we talk about ecosystems
[13:42] what we mean is basically you can think of
it as kind of a level of it’s own.
[13:47] It’s a piece of terrain and it covers about
four or eight square kilometers, you could
[13:54] say and each ecosystem contains many, many
different kinds of assets which are created
[14:01] by the artists.
[14:04] Part of it is the terrain itself, like the
information that defines how the terrain looks,
[14:09] is it mountains or do we have dunes or do
we have plateaus or canyons and all this type
[14:16] of stuff.
[14:17] Then additionally to that of course you need
all the ground textures that make up the surface
[14:21] of the terrain, do you have like rocky ground
or grassy ground and this type of stuff and
[14:26] then on top of that of course you also need
assets…
[14:29] all kinds of assets that need to be scattered
in a procedural way.
[14:33] It’s going to be done by hand if you think
on a global scale, so all of these things
[14:38] come into the ecosystem and for this Sasha
Hoba developed own editor for the engine and
[14:47] within this editor we basically all this information
is accumulated and tweaked.
[14:52] We tweak the height of the mountains, where
which texture belongs and which assets belong
[14:58] together on which surface and all this type
of stuff comes together in the planet editor
[15:03] in the engine.
[15:05] Once all these ecosystems are done, you can
basically take your planets which is more
[15:11] or less grey at the moment and just pick some
of these ecosystems and paint them over the
[15:17] planet and this is basically how the terrain
is generated in the end.
[15:22] Of course, when this is generated you want
to make sense of it, you know, you want to
[15:27] have ridgeline of mountains and behind you
want to have some hills and that goes into
[15:34] grassy lands or desert or whatever.
[15:38] MC: So, at CitizenCon 2016 we were supporting
spherical terrain, seamless transition, run
[15:44] time generation of 60 frames per second without
any preprocessing, unrestricted view distance
[15:49] on a planetary scale plus different ecosystems
and the first version of procedural vegetation
[15:59] as well as hardware tessellation and per pixel
displacement.
[16:03] Going back in time a bit before Gamescom,
here is a test showing how Pascal had quickly
[16:09] put together a Mars looking planet.
[16:12] Using a few ecosystems and changing some parameters
like atmosphere, colours and so on.
[16:18] So with a just few ecosystems and painting
them on the planet through the planet editor
[16:22] we can create many different types of environments
and planets.
[16:40] Here I’m showing a bit of our work-in-progress
features.
[16:43] One of the next steps for us is improving
the procedural vegetation placement and object
[16:49] distribution.
[16:50] In this video clip you can see trees and grass
being rendered through the zone system which
[16:56] Chris Bolte is going to talk about in a bit.
[17:28] Here you can see in this last video another
work-in-progress feature: a rotating planet.
[17:35] The planet is actually rotating extremely
fast but at this scale looks like it’s not
[17:40] moving.
[17:42] If you get very close on top of this static
control tower which is not moving, you can
[17:48] see the planet rotating very fast.
[17:51] Another interesting thing to note is the ocean
which was worked on by Anis, one of our new
[17:56] hires in Frankfurt.
[17:57] The ocean is reusing the planetary patches
with different displacement.
[18:01] This way, we’re getting adaptive subdivision
computations for free and we don’t even
[18:06] need any extra geometry memory usage for the
ocean.
[18:10] PM: The original ocean was also just a flat
terrain piece more or less and of course for
[18:17] the planet we also needed this to be a spherical
object and this feature made it in.
[18:24] You can see that we have proper waves, there
is vertex animation, it’s nicely tesselated,
[18:30] the shading is working.
[18:32] Anis has really put a lot of work into it.
[18:36] The next feature would be the clouds.
[18:37] The clouds are still in a very early stage.
[18:41] Carson Wentzel is putting a lot of work into
it, doing a lot of research, but you can already
[18:46] see some realistic behaviour.
[18:48] You can see they are casting shadows, there
are different thicknesses to them in certain
[18:53] areas so there is less light penetrating.
[18:59] Speaking of light, one thing that also changed
quite a bit is the sun.
[19:05] Because this is a spherical object, you have
different kinds of lighting all over the planet.
[19:11] So you cannot simply say, “Okay for this
planet I want to have daylight.
[19:16] I want whatever is happening on the planet
to take place in sunset,” because, depending
[19:20] on where you are on the planet you have different
lighting situations.
[19:24] All of this is now implemented.
[19:26] Depending where you are, the atmospherics
generate different effects.
[19:30] At the sunset, obviously, everything turns
red and during daylight you have blue bounce
[19:36] light from the sky and all this type of stuff.
[19:38] Chris Bolte: Hello everyone, I would like
to talk to you about the changes related to
[19:43] our core technology which allowed us to implement
the planets as you have seen them during CitizenCon.
[19:49] One of the first components we changed was
the jobs system.
[19:52] This system was responsible to distribute
work which must be done to compute a frame
[19:57] in a video game over multiple CPUs.
[19:58] This work is called jobs in our engine.
[20:02] The old approach was applicable for perhaps
3000 to 5000 jobs per frame.
[20:08] With the new one we can handle a very large
amount.
[20:12] This was realized mainly by utilizing the
inherent parallelism of games which is basically
[20:18] the smart way of saying that we have always
more than one object to update.
[20:22] Furthermore, we changed the jobs system to
better communicate with the operating system
[20:27] to allow for better usage of available resources.
[20:29] We then built the zone system which is a better
object management system.
[20:34] Such is a system is responsible to allow for
an efficient way to query objects based on
[20:40] spatial properties, for example finding objects
visible inside the camera or overlapping with
[20:44] a box.
[20:45] This system replaced the octree-based scanning
approach and is now used to store all kinds
[20:51] of objects’ world space position.
[20:53] This system had two important characteristics.
[20:57] Being efficient - the system should scale
well.
[20:59] We already have over 200,000 renderable objects
present in Crusader.
[21:04] This is realized by ensuring that we use efficient
data structures and use a processing layout
[21:10] which is spread to multiple cores with the
help of the job system.
[21:13] Then, the system should cope very efficiently
with large clusters of simultaneous moving
[21:18] objects.
[21:19] Here we use a novel approach of using multiple
reference frames.
[21:23] The regular approach used in games is to store
objects in a single coordinate system, the
[21:28] so-called world space.
[21:30] This world space position is then sent to
the GPU as 32-bit coordinates and projected
[21:36] to the screen with a projection matrix.
[21:39] For Star Citizen, we cannot use this approach
due to two reasons.
[21:43] The GPU can only process 32-bit floating point
positions efficiently but we need 64-bit positions
[21:51] for the large game world.
[21:53] We want to move kilometer-long spaceships
and planets through space.
[21:56] In the old approach this would mean updating
the positions of all objects on said ships
[22:01] or planets which is not possible in realtime.
[22:05] So we did something else.
[22:06] At the highest level, we organized our world
in a 64-bit position universe coordinate system.
[22:13] To render the objects stored in that, we compute
a camera-relative position before we then
[22:18] send the data to the GPU.
[22:21] This allows us to keep the world as one coordinate
system by using the more efficient 32-bit
[22:27] position on GPU.
[22:30] To move objects around, we use multiple zones.
[22:33] A zone is it’s own coordinate system with
all objects which move together like a spaceship
[22:38] or a planet.
[22:39] With this system we can move an arbitrarily
large number objects by just moving around
[22:44] the pivot of the coordinate system.
[22:45] Calling in such a system is implemented by
converting the tested against objects into
[22:51] the zone space.
[22:56] This sums up the technologies we had to advance
for our goal of a living universe.
[23:02] Thank you.
[23:03] Outro
[23:04] SG: That’ll about do it for this week's
episode.
[23:06] Remember to tune in for Reverse the Verse
tomorrow at 7AM Pacific or 3PM GMT.
[23:11] We’ll be back with the team in Germany to
discuss Procedural planets and more.
[23:15] FS: Awesome and we’d also like to thank
subscribers.
[23:18] We wouldn’t be able to show you this cool
stuff like the procedural tech and produce
[23:22] all these awesome shows without your continued
support so it’s so much appreciated.
[23:26] SG: it is and until next week, we will see
you..
[23:30] [Both] Around
[24:04] the Verse.

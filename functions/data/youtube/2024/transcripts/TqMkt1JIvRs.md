# Inside Star Citizen: The H2O Show

**Video:** https://www.youtube.com/watch?v=TqMkt1JIvRs
**Date:** 2024-04-18
**Duration:** 12:08

## Transcript

[00:00] [Music]
[00:00] Alpha 323 is just around the corner and
[00:03] with that a host of new gameplay in
[00:05] general life in the verse features but
[00:08] it also includes a variety of
[00:09] technological improvements like the
[00:11] replication layer split our initial
[00:13] implementation of Vulcan image of
[00:15] scaling breakthroughs and the subject of
[00:17] this week's show changes to the water
[00:19] rendering and simulation system that
[00:21] were first discussed at last year's
[00:22] citizen G so here now are the water
[00:24] Wizards themselves to tell us more
[00:30] you've been doing this for a while now
[00:32] why do you think people are so
[00:34] interested in water in just any scenario
[00:38] is such a focal point you go to a
[00:40] national park you go see the rivers and
[00:42] the waterfalls you're looking up stock
[00:44] photos of anything it's people focus on
[00:47] the water cuz it is just so different to
[00:49] kind of anything else you find in nature
[00:51] like everything's unique and
[00:52] everything's different but water is just
[00:57] something else
[00:58] entirely wow you're making me sound like
[01:00] I'm a water cult or something when you
[01:02] came aboard did you imagine you'd be the
[01:04] moist master I still don't refer to
[01:07] myself as that name try as you might
[01:09] Jared uh Hydro
[01:13] homie uh I guess I didn't see it being
[01:16] such a focus but I'm glad that it is
[01:18] it's good fun I really like it it's not
[01:20] all water water's just the nice things I
[01:22] get to talk about more
[01:43] someone asked me when I was at siton
[01:44] recently what makes water 3D in games
[01:47] what's different to anything else and
[01:49] the truth is you have to work to make it
[01:52] look like water because what we perceive
[01:55] as a volumetric liquid in real life in
[01:57] graphics we break down into different
[02:00] Parts you have the water surface which
[02:03] is what you see reflecting what you can
[02:05] look through where you see your waves
[02:06] and your foam and so on you have the fog
[02:09] underneath and any particles floating
[02:12] around that makes you feel like you're
[02:13] inside water rather than just underneath
[02:15] a surface above you and then you have
[02:18] all the effects that go to selling that
[02:20] whether it be the lighting the co stics
[02:22] the boundary when it's intersecting your
[02:24] visor or any of the splashes or
[02:26] simulation that we're going to move on
[02:27] to
[02:30] so we showed a slice of what we've been
[02:32] doing with water at siton last year and
[02:34] what we put out into 323 is a few steps
[02:37] ahead of that so we're going to show you
[02:39] what we've been able to do
[02:41] since getting the rendering right was
[02:44] really key to making sure that the Sim
[02:45] looks right because anything that
[02:48] catches your eye and tells you this
[02:51] isn't real is going to stick out far
[02:53] more than any work that we put into the
[02:54] Sim it has to be said that the way we've
[02:56] entered water in the past in St czm was
[02:59] not really up to scatch so we have spent
[03:01] a lot of time trying to make it a lot
[03:03] more realistic water is quite an
[03:05] interesting thing to render it has very
[03:07] complex form in its Dynamics and it the
[03:10] way it animates but optically it's very
[03:12] interesting too in some ways water is
[03:14] like glass it's transparent it refracts
[03:18] and distorts light which passes through
[03:23] it and it also has a surface which
[03:25] reflects the environment around it
[03:30] in some ways water is also like fog it
[03:33] obscures the background behind it maybe
[03:36] completely obscuring it and certainly
[03:39] impure water we'll have suspended
[03:40] particles which themselves reflect light
[03:43] and give the water a cloudy
[03:46] Hue the water surface May feature foam
[03:50] certainly where waves are occurring or
[03:53] at shorelines one thing we wanted to do
[03:55] was improve the way we render foam on
[03:57] the ocean surface and this involved
[04:00] having it show detail when view close up
[04:02] and also having it disperse in a very
[04:04] naturalistic way where the form breaks
[04:06] apart into small patches and the bubble
[04:08] dissipate one thing we did to get the
[04:10] details on the closer views of foam is
[04:12] photograph a pan of soapy water this
[04:15] gave us the required detail to project
[04:17] onto the form surface and give the look
[04:19] we
[04:21] wanted it's nice to think that all of
[04:23] the form you see on any ocean in the
[04:26] verse started its life in a soapy pan of
[04:29] water in my
[04:31] Kitchen in Star Citizen players can
[04:33] enter the water this means they can view
[04:35] the water from underneath the surface so
[04:38] we spend lots of time making sure
[04:39] underwater views look correct showing
[04:41] fogging and so on similarly when the
[04:45] player enters the water the water line
[04:47] may cut across the player's visor and we
[04:49] took a lot of time getting that to
[04:51] render correctly and short as expected I
[04:54] really think the improvements that have
[04:56] gone into the rendering of the water
[04:57] especially the surface the fog it's
[04:59] Leaps and Bounds ahead of what was in
[05:01] 322 so from rendering let's move on to
[05:04] surface
[05:07] simulation what we wanted to do was
[05:10] provide some Next Level visuals to go
[05:13] with all the things that can interact
[05:15] with water in our game with the nature
[05:16] of the sandbox Universe there's just so
[05:18] many ways you can interact with it and
[05:20] with all our spaceships and The Colossal
[05:22] thrusters and wakes they can throw off
[05:25] we really wanted to be able to match
[05:27] that with the water rendering
[05:29] the way we decided to approach this
[05:31] instead of having a square that follows
[05:34] the camera like many games do of water
[05:37] simulation we wanted to have something
[05:39] more powerful than this we wanted you to
[05:41] be able to stand at the top of a
[05:42] mountain and watch a ship fly across a
[05:44] lake underneath drawing the Wake behind
[05:46] it and you wouldn't get that with a
[05:48] fixed square around the
[05:52] camera so the approach we took was
[05:55] something called region-based surface
[05:57] simulation this allows us to to allocate
[06:00] areas where we need to be simulating and
[06:03] propagating water waves at any given
[06:05] moment regardless of where the camera is
[06:07] we can allocate and deallocate these as
[06:10] we need and we can have a pool of them
[06:13] of any size depending on the spec of
[06:15] your PC you can actually change the
[06:17] maximum allowed regions in your graphics
[06:20] options on medium setting you can have
[06:23] 32 regions simulated at the same time
[06:25] you can even go to a very high setting
[06:27] which would give you as many as 100 28
[06:30] to choose the best regions we try to
[06:32] have U the closest and most important
[06:35] ones show up and call the other ones the
[06:39] fact that we sort it by the number of
[06:41] interaction how strong they are means
[06:43] that only the most important ones will
[06:45] be shown on screen which helps because
[06:48] um having a little interaction right in
[06:50] front of you could be useful but it
[06:52] might not be visible when there's a very
[06:55] big ship going right by and creating a
[06:57] huge weight sounds like you a very
[07:00] efficient system then we've tried to
[07:02] build a very efficient
[07:07] system in order to interact with things
[07:10] that are in the water we first need to
[07:12] know that they are there we've hooked up
[07:14] to the physics system so it sens as
[07:15] events when physical objects like boxes
[07:18] or the player or bits of ship debris are
[07:20] in or floating in the water from there
[07:22] we can work out how much water has been
[07:24] displaced and the velocity and pick an
[07:26] appropriate simulation wave speed to
[07:28] match those
[07:30] from there we can apply forces to
[07:32] different texels of each Sim region
[07:34] which then propagate as we update that
[07:36] region over time as well as responding
[07:38] to physical objects in the water we can
[07:40] also hook this up to other input
[07:43] types for example we could have a ship
[07:46] falling into water creating a huge
[07:51] displacement but we can also have
[07:53] footsteps near the
[07:56] beach or we could also have a bullet and
[07:59] missiles and
[08:03] explosions for the player this means
[08:05] that you can be way more immersed in
[08:07] your game as you can see the Direct
[08:10] effects of what you are doing how you
[08:11] are playing on the
[08:15] water we wanted to be able to create the
[08:17] best visual impact we could without
[08:20] having an impact on your bandwidth and
[08:22] server performance Etc especially as we
[08:24] move into bigger and bigger player
[08:26] accounts so our water simulation is done
[08:29] on the client and is visual only and I
[08:31] think that way we get the best possible
[08:34] result out of it all of the information
[08:36] that we get from the different systems
[08:38] is then packaged and sent to the water
[08:41] buffer tying this all together is the
[08:44] water buffer this allows us to take in
[08:46] inputs from multiple systems to the
[08:48] shape of the water surface and then use
[08:51] that information in lots of other
[08:52] systems such as additional effects and
[08:56] of course rendering the water each patch
[08:58] of ocean is able to render with both the
[09:00] water buffer on and off if it is off it
[09:03] simply shows the ocean waves according
[09:05] to where it is on the planet if it is on
[09:07] it first populates the water buffer
[09:09] region with the wave data in that patch
[09:12] we then add in any simulation data or
[09:14] data from other inputs then when we come
[09:16] to render the ocean patch we look up
[09:18] again from this buffer where we have the
[09:20] total added together result of both the
[09:22] original ocean waves the simulation and
[09:25] any other inputs to copy the simulation
[09:27] in we build a mesh that covers parts of
[09:30] the water buffer that we're going to
[09:31] write into the UV coordinates of each
[09:34] vertex in that mesh point to a specific
[09:36] part of the region Atlas this allows us
[09:39] to read specific parts of simulations
[09:41] and input them to other parts of the
[09:42] water buffer and it allows us to do it
[09:44] in just one draw call having the water
[09:46] buffer set up like this to receive
[09:47] multiple inputs leaves the door open for
[09:50] implementing multiple types of
[09:51] simulation going forward for example
[09:53] Beach Crest waves could be input into
[09:56] this system this means as well that any
[09:58] other system nearby can look up to see
[10:00] where the waves are and see how high the
[10:02] water is we use this to drive a number
[10:04] of different
[10:07] effects having the water buffer allows
[10:10] us to have the graphic system query what
[10:13] nearby waves are doing this allows us to
[10:15] render things called Co sticks Co sticks
[10:17] are where the ocean surface is focusing
[10:20] sunlight onto areas nearby so for
[10:23] example it may focus light from the sun
[10:25] onto the seabed making certain bright
[10:28] patches animate around
[10:30] and similarly light can be reflected
[10:31] upwards onto the side of a vehicle for
[10:33] example cor sticks a very important
[10:35] visual clue for water rendering and
[10:37] leaving them out would would have meant
[10:39] the water did not look
[10:42] correct well that was a look into all
[10:44] the work that went into the water in 323
[10:47] the whole thing is pretty sweet I'm
[10:48] really happy with how it looks the team
[10:50] has done a fantastic job Planet Tech
[10:52] have got some really exciting things
[10:53] coming I'm really really excited to dive
[10:56] back into the planets of Star Citizen I
[10:59] hope you guys enjoy
[11:06] it so what we learned this week well we
[11:09] learned that the updated rendering
[11:10] system makes water look more like water
[11:13] that region-based simulation makes water
[11:15] behave more like water and that the new
[11:18] water buffer itself hooks into all the
[11:20] other systems like physics which will
[11:22] get its own series of improvements down
[11:24] the line to make water interact better
[11:26] with a variety of things that players
[11:28] throw into it boy you you love throwing
[11:31] things into the water don't you for
[11:32] inside Star Citizen I'm Jared Huckaby
[11:35] thanks for letting us share the process
[11:37] of game development with you and we'll
[11:38] see you all here next
[11:48] [Music]
[11:58] week e

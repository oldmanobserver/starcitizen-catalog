# Inside Star Citizen: River Song | Winter 2022

**Video:** https://www.youtube.com/watch?v=pMxm82KnrBY
**Date:** 2022-03-03
**Duration:** 8:28

## Transcript

[00:06] rivers are more than just water they're
[00:08] a place to explore
[00:10] they're a place to find harvestables
[00:12] that you can pick up
[00:13] they're a place where everything is
[00:15] amplified versus the surrounding terrain
[00:18] and the very first river will be in 317
[00:21] through the hills of microtech
[00:23] [Music]
[00:28] since this time last year we started to
[00:31] take rivers from what was a pretty tech
[00:34] demo to something we could release
[00:36] we thought we were ready to put the
[00:38] south in 316.
[00:40] we were pretty happy with what we had
[00:42] but we still needed some more changes to
[00:44] bring it ready to put out into the pu
[00:47] we started by doing a refactor all of
[00:50] our object scattering so we could have
[00:51] far more power and far more performance
[00:54] when we're distributing objects across
[00:56] the planet
[00:58] one of the biggest things i wanted to
[01:00] improve as well was to increase the
[01:01] density around the rivers but without
[01:03] increasing the global density of our
[01:05] objects this was going to be difficult
[01:07] which led me to work on on-demand spawn
[01:09] points a system where we can pass a
[01:11] position to the biome builder and will
[01:14] automatically scatter appropriate assets
[01:16] at that location we now procedurally
[01:18] place on-demand spawn points along the
[01:21] length of the river and around the basin
[01:24] one of the major things that we had to
[01:26] add was dressing presets
[01:28] and which allow us to
[01:30] um add specific objects around locations
[01:33] like rivers and we also had to build the
[01:35] river mesh from the ground up which
[01:37] involves spline mesh building which took
[01:39] a long time
[01:40] [Music]
[01:42] that did sadly mean that we missed 316
[01:44] but it's all the better for it
[01:47] as we've worked on all of these
[01:48] different
[01:49] interactions for the player with the
[01:51] rivers
[01:52] for example as of 317 you may now walk
[01:56] down into rivers and oceans as long as
[01:59] you are wearing a helmet
[02:03] you may explore underwater keep your
[02:05] helmet on you won't drown
[02:08] you can now drive gravelev bikes over
[02:11] both oceans and rivers without just
[02:13] falling through and exploding
[02:16] we also have harvestables around the
[02:18] river's edge for you to explore and
[02:20] collect
[02:22] we also did a rework of our water
[02:25] caustic system meaning that there are
[02:28] water caustics thrown by the river and
[02:30] its basin
[02:31] both onto objects above the water like
[02:34] your ship or trees or rocks and onto the
[02:36] surface below
[02:40] planet content team haven't had a full
[02:42] chance to take a visit of the oceans yet
[02:44] so while there are assets down there you
[02:46] can expect improvements in coming
[02:47] patches
[02:49] the next big improvement to rivers is
[02:51] going to be fizz areas so you can throw
[02:55] things into the river and watch them
[02:56] flow down
[02:58] as well as work on the foliage shader
[03:00] which is going to create more varied and
[03:02] seasonal foliage
[03:04] across our planets as well as just the
[03:06] rivers
[03:08] in the future what i want is for an
[03:10] artist to be creating a planet and say
[03:12] okay i'm happy with the elevation let's
[03:15] create a river system and for it to be
[03:17] done and we're not quite at that stage
[03:19] yet each river is maybe one or two
[03:21] clicks but it needs to be hundreds of
[03:24] rivers per planet without even thinking
[03:26] about it
[03:29] the river in 317 doesn't have any
[03:31] missions or qut markers to find it with
[03:33] so you will have to go exploring to find
[03:35] it although hopefully this video has
[03:37] been a help
[03:39] rivertech is more than just adding
[03:41] running water to the surface of our
[03:43] planets and moons it's the collective
[03:45] gathering of mesh and shader erosion and
[03:49] foliage traversal over under and through
[03:53] the surface and it's the harbinger of
[03:55] things like lava fields and roads and so
[03:58] much more and up next on this week's
[04:00] show a look at upcoming efforts to
[04:02] improve our reputation and hostility
[04:04] systems in alpha 317 and beyond
[04:09] we just got done running ninetails
[04:12] zenna threat
[04:13] and jump town
[04:15] you seem to be really enjoying these
[04:16] dynamic events
[04:18] you're running bounty missions you're
[04:19] running assassinations all these things
[04:21] and we're really excited about that
[04:23] as a designer it's pretty difficult to
[04:25] look at these and not see all the little
[04:26] things that we can do to make this
[04:27] better to make these notches good but
[04:29] great and in order to do that in the
[04:31] near future we're going to be
[04:32] implementing some new features into the
[04:34] reputation and hostility systems
[04:40] with the current reputation system all
[04:42] of your relationships to npcs are static
[04:44] that means that essentially you can't
[04:46] become friends with the the criminals
[04:48] and you can't become enemies with uh the
[04:50] law enforcement in addition if you shoot
[04:52] someone just a single bullet can make it
[04:55] so that everyone around you suddenly
[04:57] starts raining hell down upon you and
[04:59] that can be a pretty awful experience
[05:04] we're going to be looking to address
[05:06] that in a multitude of ways
[05:08] we're going to be looking to have
[05:10] reputation start driving and hostility
[05:13] so essentially how npcs react to you and
[05:16] how you see them
[05:17] as you become
[05:19] more and more friendly build up that
[05:21] affinity with npcs of a certain
[05:23] organization they will begin to shift
[05:25] their opinion of you you can actually do
[05:27] missions or content for nine tails and
[05:30] if you get to a certain point in their
[05:32] bar they will stop shooting at you and
[05:34] start just letting you go by and then
[05:36] eventually even start protecting you by
[05:38] the same measure if you start attacking
[05:40] law enforcement or committing too many
[05:42] crimes after a certain point uh crusader
[05:44] security is going to start hunting you
[05:46] down and attacking you
[05:48] on site instead of waiting for you to
[05:49] commit a crime
[05:52] on the side of making it so that people
[05:54] don't attack you when you just fire a
[05:56] single bullet we're looking at in the
[05:58] slightly more distant future where if
[06:00] you are in the green zone with a
[06:01] organization if they really really like
[06:03] you then they actually have a larger
[06:05] threshold that you have to break over in
[06:07] order to cause them to want to attack
[06:10] you um we want we don't want it to be
[06:12] global so that players can't abuse it
[06:14] but we do want it to be something that
[06:15] is a bit of a benefit if you go and make
[06:17] friends with these
[06:18] people in 317 these changes are going to
[06:21] be largely invisible to players it's
[06:23] really more about at this point giving
[06:24] the feature and the tools to our
[06:26] developers that we can continue building
[06:28] the content that our players and our
[06:31] developers really want in 318 and onward
[06:35] [Music]
[06:36] this content will enable us to for
[06:37] instance in xena threat make it so that
[06:39] you can actually be on the side of the
[06:40] xena threat instead of just trolling
[06:42] other players
[06:43] in addition for jump town this will help
[06:45] us to sort of patch some of the holes
[06:47] where players can exploit the system by
[06:49] grabbing a quick crime stat after
[06:50] they've already pulled out their
[06:51] packages and not have to actually fight
[06:54] people in order to get their drugs
[06:56] this also enables us to take a lot of
[06:58] our existing content for the lawful side
[07:00] and make criminal missions so that there
[07:02] is actually content in the game for
[07:04] criminals to do in the long term not
[07:07] just with these events
[07:09] [Music]
[07:13] and of course with additional dynamic
[07:14] events rolling out in the future we can
[07:16] start building with this into in mind
[07:18] from the start this feature will allow
[07:20] us to say that this event is going to
[07:22] have this faction versus this faction
[07:24] and players will be able to be on those
[07:25] sides in a much more permanent and uh
[07:28] invested fashion
[07:31] so what did we learn this week well we
[07:33] learned that microtech's first river is
[07:34] the next step forward in the systemic
[07:36] tools that will allow developers to
[07:38] bring more texture hazard and
[07:41] opportunity to star citizen's planets
[07:42] and moons that the reputation system and
[07:45] its continuing development remain at the
[07:47] heart of enabling developers to create
[07:50] more meaningful and effective mission
[07:52] content
[07:53] and that upcoming hostility changes
[07:55] means maybe i won't get punished so
[07:57] quickly when i turn a friendly hello
[07:59] into
[08:00] accidental unintended friendly fire
[08:03] for inside star citizen i'm jared
[08:05] huckaby we'll see you all next week
[08:27] you

# Inside Star Citizen: Loot En Route | Summer 2021

**Video:** https://www.youtube.com/watch?v=Xfb_0d1ZpRc
**Date:** 2021-07-29
**Duration:** 12:50

## Transcript

[00:01] [Music]
[00:04] for me when it comes to exploring
[00:07] areas in a game i tend to prefer when
[00:09] i've earned something
[00:11] so when you've had to fight to get past
[00:13] some people to get somewhere
[00:14] you expect that to be something cool to
[00:17] find something to make
[00:19] it worthwhile
[00:20] [Music]
[00:22] there are just some things that you just
[00:24] don't go and buy in a store
[00:25] things that you have to go out and find
[00:29] that's i feel one of the most important
[00:31] aspects of gaming
[00:33] [Applause]
[00:36] i've often found that if there's no
[00:38] tangible reward whether it's something
[00:40] that you bring away from there
[00:41] or something that you find that maybe
[00:43] leads to something else to discover
[00:45] that something can be lost in the
[00:47] experience of exploration
[00:50] imagine you go into some dungeon you're
[00:53] excited to explore and there's npcs
[00:56] there just kind of standing around but
[00:57] there's nothing to find
[00:59] there's there's crates but they're empty
[01:02] there's
[01:02] storage with nothing in it not only is
[01:05] it disappointing from a gameplay
[01:07] perspective you don't get
[01:08] any of the cool loot you were hoping for
[01:10] but it just doesn't make sense what were
[01:12] all these people doing there
[01:14] with no food no supplies nothing
[01:17] you want there to be something amazing
[01:19] at the end
[01:23] so we're working on this new system
[01:26] called
[01:26] loot generation we have built this
[01:30] system
[01:30] on the foundation of the harvestable
[01:33] system
[01:34] which is going to empower our designers
[01:37] to set up
[01:38] locations all across the verse
[01:41] to be filled with dynamically generated
[01:44] loot
[01:45] they function using a system we've
[01:46] called loot archetypes which
[01:48] are on the fly generated sets of tags
[01:53] so the idea is that a designer can lay
[01:55] out
[01:56] a list of uh tags that they want
[02:00] items in the loop pool to match and then
[02:03] maybe some that they don't so you can
[02:04] say i want
[02:05] i want things that are tagged with
[02:07] weapon but not
[02:09] things that are tagged with ammunition
[02:12] and then what really makes it powerful
[02:14] is it's not just a uniform
[02:16] distribution of okay we have all of
[02:18] these potential items just pick one at
[02:20] random
[02:22] when the designers are specifying tags
[02:24] to use they can assign a weight
[02:25] to each one and say i want rifles with a
[02:30] weight of five and i want pistols with a
[02:32] weight of ten
[02:33] so you're twice as likely to get a
[02:35] pistol in this crunch
[02:37] so we have like full control over
[02:40] how many items spawn uh what
[02:43] specifically spawns we could even
[02:45] if we wanted to and i've actually been
[02:46] doing the tagging for this myself
[02:48] we could actually tell a loot archetype
[02:50] hey spawn me a bunch of armor that's red
[02:53] your loot archetype could have the
[02:56] weapon.fps.rifle tag
[02:58] as an example and that would then give
[03:00] you the option of all of the weapons
[03:01] that
[03:02] spawn underneath that or that are
[03:03] populated underneath that tag structure
[03:06] and you may then have armor.fps.heavy
[03:11] which would give you all of the
[03:12] selection of the heavy armors under that
[03:15] and then it could be gadget.medkit
[03:19] so you would then have a loot archetype
[03:21] that says give me any rifle
[03:23] or any heavy piece of armor or any med
[03:26] kit
[03:28] it's been a lot of work to get it
[03:29] working that way but all of it sort of
[03:32] works in conjunction with each other
[03:34] and with some of the future stuff coming
[03:36] down the pipe as well
[03:37] such as quanta the loot generation
[03:40] system actually
[03:41] will read from the parent object
[03:43] containers that we use
[03:45] in in the game at the moment so say your
[03:47] spawning containers on hurston
[03:48] your main object container would be
[03:50] hurston and then let's say you've got
[03:52] loreville which would be
[03:54] l19 and then inside that you might have
[03:58] uh let's say that we expand the city and
[04:01] there's like a
[04:01] an abandoned hovel underneath that's
[04:03] maybe
[04:04] occupied by pirates if qanta decides oh
[04:07] okay so
[04:08] authorities came cleared that place out
[04:10] that place is now no longer a pirate
[04:11] base it's now
[04:14] storage site for hurston dynamics then
[04:17] all of the containers in that
[04:18] area then might switch to be containing
[04:20] hursting equipment
[04:22] qanta can then determine way up the
[04:24] chain way at the top
[04:26] this is how things are now happening
[04:28] because ai has moved in
[04:30] things have happened things have changed
[04:32] and
[04:33] the the the archetypes and the the loot
[04:35] generation system
[04:36] reacts on the fly to that so if qanta
[04:40] was to decide
[04:41] this planet has been raided it's been
[04:43] full of conflict there's been
[04:44] wars here like people are leaving in
[04:47] droves because it's not safe to be here
[04:48] anymore
[04:49] the the status of that planet the
[04:51] richness of that planet
[04:53] lowers as well to the point where then
[04:54] the loot generation system says okay
[04:57] where most of these containers might
[04:59] have been 50 to 60 percent full as they
[05:01] were
[05:02] now we're only going to fill them up to
[05:03] like 20 to 30
[05:05] it's all about adapting on the fly to
[05:07] where you're at what you're doing and
[05:09] seeing what can be so where we're at
[05:11] right now is
[05:13] we've got a pretty solid base for
[05:15] internal testing
[05:17] we're trying out marking up a few
[05:19] different locations
[05:20] with some containers mainly filled with
[05:22] weapons and armor at the moment
[05:24] but we are hoping to expand that to
[05:26] other items in the future
[05:28] and we hope that it provides an
[05:30] immersive experience more than anything
[05:32] else
[05:32] that people can get excited about this
[05:34] sort of thing that they know that when
[05:35] they go to a planet once they might go
[05:37] back a few weeks later and it's just
[05:39] completely different
[05:40] [Music]
[05:45] loot is an essential part of any mmo and
[05:48] when it arrives later this year
[05:49] it'll be one more step towards
[05:51] fulfilling the the exploration based
[05:53] promise of star citizen's persistent
[05:55] universe
[05:56] but up next we've got a special oops
[05:59] it's
[06:00] all bfx edition of the sprint report so
[06:02] let's get to it
[06:04] to start things off this week if you
[06:06] remember from our last sprint report
[06:08] we showed how the team had been working
[06:10] on an update to the thruster
[06:12] dust system that converts the existing
[06:14] particles from a radial effect
[06:16] to a directional one that's actually
[06:18] based on the thruster direction to any
[06:21] surface normal
[06:22] it may be hitting at any given moment
[06:24] now this causes the effect to change not
[06:26] only by the raycast angle being
[06:28] perpendicular or parallel to the surface
[06:31] but also the strength of the thruster
[06:33] output the type of surface itself
[06:35] and the force of the surrounding wind
[06:37] volume and you can see here
[06:39] how that check has progressed in the
[06:40] weeks since we showed it
[06:42] now while this update showcases the
[06:44] progress made since then and
[06:46] still has a little ways to go folks are
[06:48] already thinking about the myriad of
[06:50] tactical uses this feature might have in
[06:53] things like the
[06:54] upcoming jump town 2 over bodies of
[06:56] water like rivers and oceans
[06:58] and even against the soft body objects
[07:00] like those seen in the upcoming
[07:02] colonialism outposts
[07:04] alpha 314 sees the initial
[07:06] implementation of orisin
[07:08] but the work doesn't stop there and
[07:10] coming up in a subsequent patch
[07:12] the vfx team is currently working on
[07:14] tech that uses vector fields around the
[07:16] player character's feet
[07:17] to disturb the various piles of cherry
[07:19] blossom leaves
[07:20] that tend to accumulate around the
[07:22] commercial and residential areas
[07:24] now while the first implementation of
[07:26] this tech will be orisin
[07:27] the team is already looking ahead to
[07:29] utilizing it in other areas
[07:31] including on vehicles so let your
[07:34] imaginations run wild with that one
[07:37] all right not that wild and while we're
[07:40] talking leaves
[07:41] the team recently completed a sprint
[07:42] adding rotation effects
[07:44] to gpu screen space colliding particles
[07:47] utilizing the velocity of an object
[07:49] to determine the amount and size of turn
[07:51] applied to leaves
[07:52] making for a much more organic looking
[07:54] effect as they
[07:55] blow over the edge of a surface and fall
[07:58] to wherever down below
[08:00] and we're pleased to report that this
[08:02] feature was working so nicely
[08:03] it actually just went into ptu builds
[08:06] last week for alpha 314.
[08:08] currently in the persistent universe
[08:10] weapon impacts on ships
[08:12] occur in what's called the ship zone
[08:14] which causes the impact effects like
[08:16] sparks and such to stick to the ship
[08:19] meaning it essentially gets carried
[08:20] along with it as it moves forward
[08:22] which looks unnatural but in a recent
[08:25] sprint
[08:26] this was remedied so that now the
[08:28] effects trail behind as the ship moves
[08:30] away from the original point of impact
[08:32] much as one would expect them to now
[08:35] it's a little thing
[08:36] but at the core of building an immersive
[08:38] universe are hundreds and hundreds of
[08:40] little things
[08:41] adding up to a universe that functions
[08:43] or behaves in believable and expected
[08:45] ways
[08:47] and here's a second look at the same
[08:49] system in atmo
[08:50] where you can see the sparks fly up into
[08:52] the air against gravity in the old
[08:54] system
[08:55] and now falling down to the surface as
[08:57] you'd expect them to
[08:58] in the new the vfx team is also
[09:01] exploring
[09:02] several different destruction mosaics
[09:04] for the space station orbiting above
[09:06] in the crossroads of crime map for
[09:08] theaters of war
[09:09] since these destructions being explored
[09:11] are simulation based in the houdini
[09:13] software
[09:14] these mosaics utilizing various factors
[09:16] of stiffness and damping ratio
[09:19] allow for a degree of art direction not
[09:21] normally available
[09:23] plus it just kind of looks cool to see
[09:26] all the different ways the thing can
[09:27] explode
[09:27] you know
[09:31] also always cool lightning now
[09:34] previously
[09:34] lightning across our games suffered from
[09:36] a number of different maladies
[09:38] including poor performance and poor
[09:41] scaling effects
[09:42] but due to recent r d by the team and
[09:44] the use of
[09:45] instanced scale multipliers and ribbons
[09:48] the team has not only found a way to
[09:50] author these same effects at a wide
[09:52] range of scales
[09:53] but the use of ribbons reduces the need
[09:55] for high particle counts in the runtime
[09:58] gpu particle system
[09:59] what's that mean it means more
[10:01] developers can use more lightning in
[10:03] more
[10:03] areas without destroying their
[10:05] performance budget and that's especially
[10:07] good news
[10:08] for the upcoming pyro system and the
[10:10] visual revamp to the dying star map and
[10:12] arena commander that's currently
[10:14] underway
[10:16] and wrapping up our look at vfx this
[10:18] week the team has returned from a brief
[10:19] hiatus away from fire propagation
[10:22] to create their version of a concept a
[10:25] cinematic look dev if you will
[10:26] at the goals for fire propagation
[10:28] utilizing the tech
[10:30] features and progress already in hand
[10:33] what you see
[10:33] here is a basic electrical fire in a
[10:36] relatively high
[10:37] tech environment exploring the type of
[10:39] propagation effects the team are
[10:41] currently pursuing
[10:42] now as a test exclusively for how the
[10:45] fire moves
[10:46] and spreads throughout the ship there
[10:47] are still a number of limiting visual
[10:50] factors here
[10:51] like the still outstanding shader work
[10:53] that will one day make the fire feel
[10:54] even more alive than it already does
[10:58] as the fire moves across the white
[11:00] surface that is flammable
[11:01] you can see it dripping down to ignite
[11:03] the same surface below
[11:05] while interacting with the black
[11:07] glass-like surface on the ceiling
[11:09] that is understandably resistant
[11:11] combined with the heat and noxious gases
[11:13] affecting players via the actor's status
[11:15] system
[11:16] it's an exciting look ahead at some of
[11:18] the new dangers and hazards
[11:20] players will encounter and have to deal
[11:22] with on a regular basis
[11:24] as star citizens development continues
[11:27] but before we let you go let's jump
[11:29] ahead and see what happens when you
[11:31] ignore the fire
[11:32] and let it go about its business for
[11:34] about half an hour
[11:43] [Music]
[11:46] so what did we learn this week well we
[11:48] learned that while it's fine to go into
[11:50] a store and buy something from the
[11:52] vendor
[11:53] there's still something about
[11:54] discovering the item while adventuring
[11:57] that can make it just a little more
[11:58] special that the work on orizon
[12:00] doesn't end with alpha 314 and that
[12:03] we'll be seeing more of what's coming
[12:05] as this quarter progresses and just when
[12:08] i think i'm out
[12:09] those advances to fire propagation pull
[12:12] me back in
[12:14] now remember this quarter we're on the
[12:15] road to digital citizen gun
[12:17] where all kinds of panels and content
[12:19] await for hours full of star citizen
[12:21] goodness
[12:22] that's october 9th so mark your
[12:24] calendars for inside star citizen i'm
[12:27] jared huckaby
[12:28] we'll see you all next week
[12:49] you

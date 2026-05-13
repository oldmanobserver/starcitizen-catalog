# Inside Star Citizen: River's Edge | Winter 2021

**Video:** https://www.youtube.com/watch?v=4cAbEqAwWEQ
**Date:** 2021-01-21
**Duration:** 13:02

## Transcript

[00:04] in star citizen we have
[00:06] many of these huge intricate planets and
[00:09] the way that we've been able to do that
[00:10] is instead of storing each vertice of
[00:13] the planet like you would in a
[00:14] traditional level editor we store height
[00:16] maps and other data about the planet
[00:18] and then build chunks of the planet
[00:20] around the player
[00:21] but it did introduce the problem of us
[00:24] not being able to edit individual
[00:25] vertices of the terrain
[00:27] that is where the terrain modification
[00:29] system comes in
[00:30] [Music]
[00:33] so the terrain modification system works
[00:36] by placing
[00:37] modifiers across the planet and when we
[00:40] build each chunk of the terrain
[00:42] we check to see if any of the vertices
[00:44] intercept one of our bounding boxes and
[00:46] if we do
[00:47] that modifier applies a function to the
[00:49] z coordinate
[00:50] of that vertices to offset it to a
[00:52] specific place that we choose
[00:54] so for example we've got here a
[00:56] smoothing area we can move this around
[00:59] we can see that it is smoothing out the
[01:01] ground we can raise it or lower it we
[01:03] can change its size and so on
[01:05] and here i've got a crater which we
[01:07] could flip
[01:08] and turn into a push pull we can change
[01:10] the scale and so on
[01:12] and that's all happening by intercepting
[01:14] the mesh building system
[01:16] and applying offsets based on a function
[01:19] to each vertex within that box we can
[01:22] use this
[01:23] on any scale we like so from a very
[01:25] small scale like this
[01:26] to a much bigger scale like this over
[01:28] here so if i decide i want to place my
[01:30] my outpost over here the first thing i
[01:32] do is i put a smoothing area down
[01:34] i integrate that into the terrain so
[01:36] that it looks good and play with all the
[01:38] different settings to
[01:40] tweak the roll off and the radius of the
[01:42] smoothing area
[01:44] and then i can go in and i can put my
[01:46] outpost down
[01:48] and we can see that that's come in very
[01:50] flat there's no clipping with the
[01:52] terrain
[01:52] and it all looks very natural and
[01:54] embedded instead of kind of like
[01:56] terrain clipping over the sides of the
[01:58] landing pads
[01:59] so we can integrate our smoothing areas
[02:01] even more in with the terrain
[02:02] by using a noisy edge instead of just
[02:05] having
[02:06] a perfectly spherical one so this
[02:08] smoothing area here
[02:09] has a noise function applied to its
[02:12] radius so we get this kind of like
[02:13] crinkly effect and when i embed that
[02:15] into the ground we don't see an obvious
[02:17] circle
[02:18] around where our outpost is instead we
[02:20] get more natural looking
[02:22] crinkle around the edge of our smoothing
[02:25] area
[02:26] the reason that we have both of these
[02:27] modifiers is sometimes you want to make
[02:29] it clear
[02:30] that humanity has come and shaped the
[02:31] terrain to be a certain way
[02:33] and sometimes you just want the
[02:35] convenience of
[02:36] flat ground without it looking like it's
[02:39] been bulldozed by
[02:40] a great big group of jcbs so using the
[02:43] same
[02:44] modification system we can actually add
[02:46] water meshes
[02:47] to the vertexes the first thing i did on
[02:50] this was a way to place river paths
[02:52] because you can't start modifying the
[02:54] terrain before you know where the water
[02:55] is going to flow
[02:56] so i've got this river placement tool
[02:58] here where we're going to be able to
[03:00] essentially start off by placing a
[03:02] spring
[03:02] or somewhere where the water might come
[03:04] out of the ground so i'm going to
[03:05] place that here and you can see that it
[03:08] automatically starts working out the
[03:09] path
[03:10] of where the water would flow now it
[03:13] does this in steps
[03:14] it looks at the direction that the water
[03:16] is coming from
[03:17] it takes a step in that direction and
[03:19] works out an arc of points
[03:21] and then it chooses the point on that
[03:24] arc that is the lowest
[03:26] moves there and then continues on to the
[03:28] next step
[03:29] until you get this nice flowing path
[03:32] now over here we've got a white dot and
[03:35] that is because
[03:36] the lowest point on the arc was in fact
[03:39] higher than the water started with
[03:41] and if you look at a river you'll notice
[03:43] water doesn't travel up
[03:45] so here the point is white because we're
[03:48] going to have to erode down the path
[03:50] under here for the water to have
[03:51] traveled
[03:52] to this point we can't have it flow up
[03:54] on the terrain
[03:57] so once we're happy with our river path
[04:00] we can look at adding any contributing
[04:02] springs so for example we might have a
[04:04] bit more water flow coming from there
[04:06] or i might choose to have a bit more
[04:07] water flow coming from there
[04:10] and then we can score and clean the
[04:12] rivers
[04:13] what this does is it works out a more
[04:15] detailed path between the nodes that the
[04:16] river is going to take
[04:18] and it also works out how much water is
[04:20] going to be passing through
[04:21] each point so you see if i click on this
[04:23] node here we can see the size is 5.
[04:26] if i go a little bit downstream where
[04:27] there's going to be more rainwater
[04:29] collecting into the stream
[04:30] the size is 17 and that will increase
[04:32] all the way down to the bottom where the
[04:33] reference
[04:35] once we're happy with the river system
[04:36] as a whole we can place
[04:38] the geometry modifiers now the first
[04:41] thing this is going to do
[04:42] is we've placed some brown decals down
[04:44] to show that the terrain has changed
[04:46] and we've actually modified the terrain
[04:49] to show the path of the river as you can
[04:52] see if i just turn these off
[04:54] as you can see we've got a deep trench
[04:55] where the river is flowing and then
[04:57] banks around the river
[04:59] but usually rivers have water so
[05:02] let's add in some water now obviously
[05:05] this is work in progress this is just
[05:07] using the sea mesh
[05:08] but it just to prove the concept that we
[05:10] can have water
[05:11] in the basis of our rivers but it still
[05:14] doesn't look quite right
[05:15] if you look at a river in the wild going
[05:17] through any ecosystem whether it be a
[05:20] forest or some fields or a desert
[05:22] you'll notice that the terrain around it
[05:24] is different and that's because
[05:25] the water influences the ecosystem we
[05:28] get more vegetation
[05:29] and growth around places where there are
[05:31] water so
[05:33] in order to make this look as convincing
[05:34] as possible we're going to experiment
[05:36] with
[05:37] adding more foliage and more ecosystem
[05:40] changes around the rivers
[05:43] so this is just a programmer's take on
[05:45] this and no artists have had any say in
[05:47] what i'm doing here
[05:50] so by borrowing a slightly more lush
[05:54] preset from a different planet we can
[05:57] see that we can create this really
[05:58] effective look around the rivers with
[06:00] far more trees and ground cover
[06:03] just to really sell the idea that this
[06:05] is a river that has been here for
[06:07] thousands of years and is flowing
[06:08] through the hills of microtech
[06:11] so now that we've added in this
[06:13] ecosystem around the river it really
[06:15] sells
[06:16] and looks like a river flowing through
[06:18] the hills of microtech
[06:20] this looks much more like something
[06:22] that's been here for thousands of years
[06:24] instead of just a bit of water that's
[06:25] trickling down some hills
[06:27] obviously when the artists take a pass
[06:29] at this they'll be able to get some much
[06:31] more suitable foliage and vegetation
[06:33] instead of
[06:33] having this awkward merge between snowy
[06:35] trees and beautiful lush foliage
[06:38] but the fact that we've got the tools to
[06:40] do this and we can do it procedurally
[06:41] just with a few clicks
[06:43] means that these rivers could be
[06:45] cropping up soon on the planets
[06:48] as a reminder this is a working
[06:49] prototype not a finished product and
[06:51] these are all
[06:52] engineer art choices rather than artist
[06:55] art choices
[06:56] i can imagine someone screaming at me
[06:58] for the fact that we've got some
[06:59] beautiful kind of tropical
[07:01] trees here versus some snowy pines in
[07:03] the backdrop
[07:04] but the fact that we can modify the
[07:06] ecosystem around these rivers
[07:08] means that we're going to be able to
[07:09] create some really convincing looking
[07:14] ecosystems
[07:18] [Music]
[07:26] the terrain modification tool is just
[07:28] one more way the planet tech team
[07:30] continues to create new technologies
[07:32] that help our artists and designers
[07:34] create assets for the star citizen
[07:36] universe better
[07:37] and more quickly than ever before now
[07:40] citizens that have been around for a
[07:42] while know that january
[07:44] is planning season where developers get
[07:46] together
[07:47] review the lessons of the year before
[07:49] and plan out their efforts for the one
[07:51] ahead
[07:52] now by the time that this airs that
[07:54] process is still in full swing for many
[07:56] teams
[07:57] but we took the opportunity to chat with
[07:59] some of the folks that participated in
[08:01] this year's
[08:02] combat summit to get a sense of where
[08:05] their conversations went
[08:06] and check in before they go heads down
[08:09] and the process of prototyping begins
[08:12] so the theme of this year's combat
[08:14] summit was really how we give the player
[08:16] control over all the systemic features
[08:19] we have in the game
[08:20] what we want is an environment where
[08:22] things make sense
[08:24] that choice allows players to approach
[08:26] different missions and different
[08:28] scenarios
[08:28] in different ways and even the same
[08:30] scenario in different ways which really
[08:32] expands the feel and the options players
[08:35] have
[08:37] the main reason why we created a combat
[08:39] summit was to include
[08:41] more people from multiple departments of
[08:43] the company that have a stake or an
[08:45] interest in space combat
[08:48] it helps like gather outside data into
[08:51] one kind of
[08:52] focus point we can kind of figure out
[08:55] the
[08:55] core problems that we have and also you
[08:58] know
[08:59] to kind of come up with solutions for
[09:00] those problems
[09:02] it's very important to to go away and
[09:04] come up with
[09:05] different solutions test them out see
[09:07] which ones are fun see which ones play
[09:09] well with other features
[09:10] since last year's summit was so
[09:12] successful we're really we're in a good
[09:13] position to go forward into this year's
[09:15] summit
[09:16] building upon the work we did on the
[09:18] last one
[09:19] and this is combat summit we talked a
[09:21] lot about combat geometry
[09:23] which is how ships fly around each other
[09:25] during combat how they're going to fight
[09:27] each other
[09:28] one of the ways we wanted to improve the
[09:31] current flight model
[09:32] was with the addition of capacitors
[09:34] which will make the
[09:35] actions players take during a dogfight
[09:38] more meaningful
[09:39] and have more of an impact on what they
[09:42] see and what they do and capacitors
[09:44] really do that by sort of
[09:46] capping some of the behaviors as well as
[09:49] giving you an
[09:50] instant visual result and instant flight
[09:52] result
[09:55] we went into weapons and the different
[09:57] behaviors of weapons and how they
[09:59] interact with shields and ballistic
[10:00] armor
[10:01] we're not aiming for like a meter build
[10:03] gameplay right we want
[10:04] each weapon to feel different and to
[10:07] have a different role in space combat
[10:09] and then to add to this we're discussing
[10:10] how we kind of move the roles forward on
[10:13] the ships and make the most of the
[10:14] features that we have to you know kind
[10:16] of realize the rules on ships
[10:18] and for those to mean more in the pu you
[10:21] know as far as what choices you make of
[10:23] what ship you want
[10:24] i'm very excited to get some of those
[10:26] sort of ironed out and to get those
[10:28] feelings of those ships so that you know
[10:31] without looking
[10:32] at the label of the ship that you're
[10:33] definitely in something like a light
[10:35] fighter
[10:35] we're just focusing on how to make those
[10:39] roles
[10:39] mean more to the players so they can
[10:41] make more meaningful informed decisions
[10:43] so it was a really important discussion
[10:45] on those things and they all kind of
[10:46] relate to one another
[10:47] and we have to move them together
[10:49] forward um in one kind of
[10:51] you know line really because that gives
[10:53] us the best kind of maneuverability
[10:55] moving forward to understand really
[10:56] the impact of these changes as well
[11:00] so now we have a big bunch of work in
[11:02] front of us right we have action points
[11:03] what we want to do
[11:04] so the next step for us is prototyping a
[11:07] big risk when you're prototyping several
[11:09] solutions is the fact that
[11:10] one might not fit with another solution
[11:13] but we cannot tell right away
[11:14] which of these measures are going to
[11:15] work and which won't
[11:17] so when we're testing it's very
[11:18] important that we're testing all these
[11:20] features together to make sure that
[11:21] we're picking the right solution
[11:23] and that fits together as a package for
[11:26] us
[11:28] now we'll learn more about the resulting
[11:30] new features that arise from the combat
[11:32] summit throughout the remainder of this
[11:33] year
[11:34] as they're being developed can i show
[11:36] you one more thing that i've been
[11:38] messing around with
[11:39] uh sure will just uh don't get me in
[11:42] trouble
[11:42] uh so here i've put together our
[11:45] grenade launcher with a crater
[11:49] modifier just to see what we could do
[11:51] with this
[11:52] and now when i fire a grenade launcher
[11:56] we get a nice little dent in the terrain
[11:59] where i fired it
[12:00] we can essentially go and create some
[12:02] craters obviously this is
[12:04] this is me messing around this isn't
[12:05] something that's in game
[12:08] but just something that i've been having
[12:09] a little bit of fun with and
[12:11] hopefully we'll be able to use something
[12:13] like this in the future but no
[12:14] no promises this is just a bit of fun so
[12:17] what did we learn about this week
[12:19] well we learned the plateaus can be a
[12:20] good thing when they allow designers to
[12:22] place outposts anywhere they want
[12:25] that a river may run through it but the
[12:27] next step is to always
[12:28] always always replace that programmer
[12:31] art that each summit builds upon the
[12:33] successes of the last
[12:34] and that the work of honing star
[12:36] citizen's combat experience
[12:38] continues for inside star citizen i'm
[12:40] jared huckaby
[12:41] we'll see you all next week
[12:57] [Music]
[13:01] you

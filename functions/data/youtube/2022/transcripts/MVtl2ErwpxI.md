# Inside Star Citizen: A Centurion Among Us | Summer 2022

**Video:** https://www.youtube.com/watch?v=MVtl2ErwpxI
**Date:** 2022-07-28
**Duration:** 11:02

## Transcript

[00:05] recently i did an update in our pu
[00:07] meeting to show off some of the work
[00:10] i've been doing on the new automatic
[00:12] river placement tool which is going to
[00:13] allow our artists to populate entire
[00:15] planets with water systems in a very
[00:17] simple process
[00:18] [Music]
[00:20] and jared saw it and asked me if i could
[00:22] present it again for an inside star
[00:24] citizen episode so here we are it's time
[00:27] to look at automatic river placement
[00:32] the first big improvement i've made to
[00:34] the river placement tool is an overhaul
[00:36] of the ui i've split up all of the stuff
[00:39] it can do into separate tabs so we have
[00:41] the manual river placement here the
[00:43] automatic river placement uh a view of
[00:46] all of the rivers currently on the
[00:47] planet we'll visit this again later
[00:49] view which is how we can enable or
[00:50] disable various debug view modes and
[00:52] debug tools which is just a collection
[00:54] of various other things that i sometimes
[00:56] use to make sure that my tools are
[00:57] working properly
[00:58] if we go over to create river the next
[01:01] biggest improvement i've done
[01:03] is river prediction
[01:05] what the river prediction does is it has
[01:07] a look at kind of the rough direction
[01:08] water would travel if you were to place
[01:10] a river under the mouse what this allows
[01:12] us to do is look at the general
[01:14] direction of the height maps the general
[01:16] shape of the watershed and roughly how
[01:18] long a river will be
[01:21] as you can see as i move my mouse across
[01:22] the planet we can see different
[01:24] positions are more effective than others
[01:25] and different positions lead to longer
[01:28] or shorter rivers
[01:30] this is microtech so there's no oceans
[01:32] to flow into but the aim would be on
[01:35] hurston for example
[01:37] most of our rivers should either be
[01:38] finishing in the ocean or large lakes or
[01:42] basins
[01:43] what the prediction doesn't do is take
[01:44] into account the intricacies of the
[01:46] terrain that may prevent a river from
[01:49] actually spawning that location
[01:51] so this is used as an indication of
[01:52] where the river might go
[01:54] and then our more in detailed erosion
[01:56] algorithm can work out whether the river
[01:58] actually goes there i'm going to attempt
[02:00] to manually place the river here i'm
[02:01] going to click
[02:02] as you can see we've now got a set of
[02:04] nodes
[02:06] and this part of the process hasn't
[02:07] changed so i'll still go down to the
[02:09] river
[02:10] click on any of the nodes
[02:14] and
[02:16] i will click place river
[02:19] and boom we've got our river i can then
[02:22] hide the debug nodes
[02:27] and the river is there in the world
[02:29] as simple as that
[02:31] but actually we're wanting something a
[02:33] little more complex than that we're
[02:35] wanting entire water systems across the
[02:38] entire planet and that's what the auto
[02:40] river placement tab is for
[02:42] the automatic river placement is split
[02:44] up into four steps the first step is the
[02:47] gather
[02:48] this looks for positions where we have a
[02:51] rough idea that there will be a river
[02:53] that fulfills certain criteria and we
[02:55] use the prediction that we saw a moment
[02:57] ago to do this
[02:59] we can change various settings such as
[03:01] the target river quantity the min macro
[03:04] steps which is the number of those large
[03:06] steps we saw a moment ago for the river
[03:08] to be considered and the number of
[03:10] attempts of positions it will do while
[03:12] trying to find these
[03:13] in this example i'm just going to try
[03:15] and find five rivers across the planet
[03:17] and i'm going to say each of them needs
[03:19] to have at least nine macro steps so
[03:20] we're talking about pretty long rivers
[03:22] we can also select which biomes we want
[03:24] the rivers to be able to flow through in
[03:26] this case i've selected all of them
[03:27] apart from the snowy ones
[03:30] so when i'm happy with my settings i
[03:31] will click gather river proposals
[03:34] and the computer will take a moment over
[03:36] finding some river proposals for us
[03:38] as this is happening you can see red
[03:40] circles appearing on the planet they are
[03:43] all of the proposal positions that
[03:44] fulfill the criteria we've put so far so
[03:47] they're in the correct biome and they
[03:48] have the correct number of macro steps
[03:50] or more
[03:52] it's told me that it's found 25
[03:54] potential river positions which is
[03:56] awesome so the next step is to filter
[03:58] them
[03:59] currently what filtering does is make
[04:01] sure that the river isn't going to flow
[04:02] through an outpost
[04:04] it checks that the river is valid and
[04:05] that the water is actually flowing along
[04:08] the line that the prediction thought it
[04:09] would and it checks that it's another
[04:12] minimum length in this case it's 40 node
[04:14] steps
[04:15] so i'll click filter and we'll wait for
[04:17] the computer to do that for me during
[04:18] this process we can see that some of the
[04:20] red circles will start to disappear as
[04:22] they're discarded if they've not met the
[04:25] filter criteria
[04:28] right in the end it's actually only
[04:29] found four valid river positions which
[04:31] is fine because i put in some pretty
[04:33] stringent criteria so at this point i'm
[04:35] going to click create rivers
[04:38] this is going to actually place the
[04:39] rivers into the world
[04:41] and we know that they're already going
[04:43] to match a certain length and other
[04:44] criteria that we've put in
[04:47] now that we've got four new created
[04:48] rivers the next step will be to commit
[04:50] all of them but actually i'm going to
[04:52] hesitate slightly i'm going to go across
[04:54] to the rivers tab and i'm going to
[04:57] filter to rivers that are uncommitted
[05:01] so this is showing me all four rivers
[05:03] that have not been committed yet
[05:06] which means that they are on the planet
[05:08] and they are present but they haven't
[05:09] been saved to data
[05:11] and i'm going to go to each of them and
[05:12] commit them manually
[05:14] so first uh let's sort by length
[05:18] so we'll start off with our shortest
[05:19] river
[05:20] so as we can see this river flows
[05:22] through like a woodland biome and it
[05:24] looks pretty nice but it is only five
[05:25] kilometers long as we can see here so
[05:26] i'm actually going to delete this river
[05:30] next we'll go to the next shortest river
[05:32] this one is six kilometers long
[05:34] and looks a little better to me uh i
[05:36] think i'm going to let this one stay
[05:39] go to the next river
[05:40] [Music]
[05:43] yep very happy
[05:45] eleven kilometers long
[05:46] so got a good length on that
[05:50] one this one is 12 kilometers long
[05:54] and again looks very similar
[05:56] so you have these four rivers i'm happy
[05:58] with through them and i'm going to let
[05:59] them all stay
[06:01] going forward i'm going to
[06:03] allow artists to specify minimum final
[06:06] length in kilometers rather than just
[06:09] notes
[06:09] and one of the big things i'm going to
[06:11] do next is spring points what this is is
[06:14] artists will be able to add hint
[06:17] positions at various points in the
[06:19] height maps to say a river would look
[06:21] good starting here for example a crevice
[06:24] or a crack in a mountainous height map
[06:26] and that's just going to mean that the
[06:28] quality of our automatically placed
[06:29] rivers is just going to be a step higher
[06:31] because the start is always going to
[06:33] look somewhere natural rather than just
[06:35] starting anywhere in the middle of a
[06:36] field because at the moment it is
[06:38] largely random positions that it's
[06:40] trying and then filtering from there
[06:43] so that's what i've been up to with the
[06:45] river stuff recently in between fixing
[06:47] bugs for patches and stuff i'm really
[06:50] happy with the progress i've been able
[06:51] to make on this and it's really cool
[06:52] being able to show it off again uh
[06:54] hopefully we will be having a lot more
[06:56] rivers on a lot more planets coming to
[06:58] the verse very soon
[07:01] [Music]
[07:11] like many features throughout star
[07:12] citizen's continuing development river
[07:15] continues to evolve into a robust set of
[07:18] tools that will bring new life and
[07:20] personality to any planet or moon it's
[07:22] used on and you can expect more of these
[07:25] estuaries to branch their course of
[07:27] rivulets and tributaries in the upcoming
[07:30] alpha 318 but up next a look at the
[07:33] newest vehicle from anvil making its
[07:35] debut in 317-2 the centurion
[07:52] the anvil centurion is the anti-air
[07:56] turret of ground vehicles
[07:59] this is the vehicle that you pull up
[08:00] when something
[08:02] flying around above you needs to not be
[08:05] there
[08:05] and in 317.2 it's going straight to
[08:07] drivable
[08:10] the centurion basically is the same
[08:12] style of ballista
[08:14] uh but instead of missiles we are having
[08:16] a turret with four uh big guns
[08:19] in order to accommodate those sizeable
[08:22] laser repeaters it has gained in
[08:24] addition to what the ballista has two
[08:27] size one
[08:28] coolers
[08:29] uh which are mounted just at the rear
[08:33] we create a new kind of hatch so that it
[08:36] looks uh it is central
[08:39] and he's not slightly
[08:41] going on the right or slightly
[08:43] going on the left this is just one we
[08:44] used to have just
[08:46] turrets with two s2 guns one left and
[08:49] one right and in this time we have an
[08:50] asymmetrical structure for having a
[08:52] symmetrical gun
[08:56] in the interior we also try to implement
[08:59] something that was not done in the
[09:00] ballista like the camera now the camera
[09:03] will show part of the guns
[09:05] so that you have a better sensation of
[09:07] where you're actually aiming without
[09:08] even needing to
[09:10] at the center of the screen with an icon
[09:12] to show you where bullets are going
[09:15] [Music]
[09:16] we have a section with all the
[09:18] components
[09:19] and one more part dedicated to the power
[09:22] plant
[09:23] [Music]
[09:25] one of the drawbacks to the ballista is
[09:28] that
[09:29] once something gets close enough to it
[09:32] it becomes that little bit less
[09:33] effective however that's not a problem
[09:35] for the centurion it can engage anything
[09:37] at any range but obviously its
[09:39] effectiveness will drop off as things
[09:40] get further away
[09:42] so having a centurion covering a
[09:45] ballista suddenly just makes the entire
[09:47] system work much better
[09:49] [Music]
[09:52] i think that players who enjoy the more
[09:53] organized style of
[09:56] planetary warfare will have a lot of fun
[09:58] with it
[09:59] so what did we learn this week well we
[10:02] learned that the latest advancements in
[10:03] rivertech are going to allow artists to
[10:06] crisscross the surface of stanton's
[10:08] planets and moons with more brooks and
[10:10] streams than ever before
[10:12] that i've used almost every word in the
[10:15] thesaurus for river in these hosting
[10:17] bits
[10:17] except ronald
[10:19] and that the centurion is the newest
[10:21] vehicle using anvil's famous atlas
[10:23] platform and makes a devastating one-two
[10:25] punch with the ballista that we all know
[10:27] and love
[10:28] and as for where we are right now it may
[10:31] not look like much just yet but give it
[10:33] another quarter and you're gonna see
[10:35] some serious ship for inside star
[10:37] citizen i'm jared huckaby we'll see you
[10:40] all next week
[11:01] you

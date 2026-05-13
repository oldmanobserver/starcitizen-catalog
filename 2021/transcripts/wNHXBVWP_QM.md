# Inside Star Citizen: Old Cat, New Tricks | Spring 2021

**Video:** https://www.youtube.com/watch?v=wNHXBVWP_QM
**Date:** 2021-06-03
**Duration:** 10:58

## Transcript

[00:02] [Music]
[00:04] john turned around to me and told me
[00:05] that we were going to be putting the
[00:06] bengal
[00:07] into the actual pu and at first i
[00:10] thought he was just pulling my leg
[00:11] because me
[00:12] it's the bengal the bengal the biggest
[00:14] ship that we're ever going to have in
[00:15] the pu floating around
[00:17] and i was like well it was just gonna
[00:19] appear then fly away or is it just a
[00:21] poster and he's like no no no
[00:23] i i wanted to be like we had the javelin
[00:25] last year where it comes in
[00:26] it shoots the players can try and fight
[00:28] it and it flies around i'm like
[00:31] cool that that's not a small amount of
[00:33] work that's a
[00:34] little bit of a minor task on top of
[00:37] everything else that's going on
[00:43] the bengal itself had a lot of old
[00:45] issues with it
[00:46] compared to a lot of our newest ships it
[00:48] didn't feel as good it didn't look as
[00:50] good
[00:51] so we saw this as a great opportunity to
[00:54] go in and just
[00:55] fix some of this old legacy things that
[00:58] we've done with the actual sips up
[01:00] so we started by fixing the problems
[01:03] first of all so the the giant engines at
[01:06] the back
[01:06] the whole thing was a single thruster so
[01:10] we started by cutting that out making
[01:11] the actual nacelle part of the main ship
[01:13] geo and then
[01:14] after making the ship geo we then
[01:16] attached the actual thrusters as
[01:18] thrusters so they work as thrusters
[01:20] and then we found that it didn't have
[01:22] proper thruster placement because it was
[01:24] using the original ifcs system that
[01:26] didn't need it completely in ifcs2
[01:29] obviously
[01:29] it's not fake that it's real so we had
[01:32] to actually go in and place new
[01:34] thrusters and reel in some of the old
[01:36] ones just to get it
[01:37] to feel nice and fly the way we'd expect
[01:39] it to
[01:40] and after that we had to then look at
[01:42] the weapons that
[01:44] this is the bengal it's got over 90
[01:46] turrets to it that function the fire
[01:47] that fight back that
[01:49] you have to actually deal with so
[01:52] we went through and we saw that a lot of
[01:54] them were very nose-heavy placement so
[01:57] we then completely changed the design of
[01:59] the location of the
[02:00] turrets which went through a couple of
[02:02] iterations to make sure everyone's happy
[02:03] with it
[02:05] it felt really weird for the entire
[02:08] carrier to have a complete front nose
[02:11] battery
[02:11] so we moved a lot of the weaponry and a
[02:14] lot of the cover around so it was evenly
[02:16] distributed around the ship for the
[02:18] missile turrets the balancers
[02:21] after that was all done you know those
[02:23] really small minor insignificant tasks
[02:25] it was then a case of
[02:27] actually having it work because
[02:29] unsurprisingly when you put the bengal
[02:31] into the
[02:32] the pu it doesn't run very well because
[02:35] there's a lot of entities it
[02:36] it was a huge performance hit like it
[02:40] was insane even
[02:41] internally we were seeing a massive
[02:43] performance drop
[02:44] so the next job was to try and optimize
[02:47] this to actually
[02:48] get it to run in a decent way
[02:51] if you have a look at any of the ai
[02:53] ships that the the pirates use in the pu
[02:56] there's physically a dude sat in the sea
[02:57] which at the end of the day
[02:59] costs everything has a cost involved so
[03:02] we started to explore a couple of
[03:03] different ways to do it one route we
[03:05] took was to hide the whole thing behind
[03:07] this area so it just
[03:08] wouldn't render it wouldn't call it
[03:09] wouldn't draw any of it and
[03:11] that that gave us a lot of wins but we
[03:13] also saw this opportunity to try and do
[03:15] something we haven't
[03:16] really done on ships before which was to
[03:18] have actual
[03:20] ai modules controlling the turrets so
[03:23] we start playing about with them we hit
[03:25] issues because we've never tried to
[03:27] implement it on this sort of scale
[03:29] but after a lot of people doing a lot of
[03:32] hard work and playing about with that
[03:33] and making slight tweaks here and there
[03:35] we ended up with the the ai turret
[03:37] module which
[03:38] was a huge huge performance boost and
[03:41] i spawned in a load of um pirate
[03:44] addresses to bite the thing
[03:45] and it was just amazing watching all of
[03:47] the guns pointing different directions
[03:49] and just
[03:50] fire everywhere it looked amazing and
[03:52] then the missiles were coming in it was
[03:53] shooting down all the missiles
[03:54] everywhere
[03:55] and that's probably spent a good half an
[03:58] hour just trying to actually hit it with
[04:00] a missile
[04:00] there's just that much gunfire that it
[04:03] just
[04:04] it looks great it's hard to describe how
[04:06] cool it looks when it's actually firing
[04:08] a
[04:08] a group of people the impact of seeing
[04:12] the bengal working flying around was
[04:14] just
[04:15] incredible for people and the bengals
[04:17] something i've been working on for quite
[04:19] a long time
[04:19] for squadron 42 but once it's in the pu
[04:23] people can fly around it and just
[04:27] take in the sheer size of it it's just
[04:29] incredibly huge
[04:31] and having an event like invictus meant
[04:34] that we push
[04:35] specific tech and specific things in a
[04:37] way that
[04:38] we're going to be used later down the
[04:39] line so that's
[04:41] a step forward towards having unmanned
[04:44] ai turrets on ships we learn better ways
[04:48] to optimize the way we actually have
[04:50] ai crew inside the ship because
[04:52] everything we do
[04:54] can be reused we learn from it we
[04:56] improve from it and it can help
[04:57] everything it's all
[04:59] it's a lot of work and we we as
[05:03] developers spend a lot of time
[05:04] focusing on really minor details and
[05:07] sometimes we
[05:09] we just tunnel on little things and
[05:11] think well is this
[05:12] is this you time i'm spending on this
[05:14] one little thing really worth it
[05:16] but then when we see it in the community
[05:19] and see how much people love it and how
[05:20] wild they go for it
[05:22] just seeing their responses to it it
[05:24] just completely lifts my spirits up
[05:26] every time so worth it in the end once
[05:28] we actually got it in
[05:29] really really cool invictus has quickly
[05:33] become one of the major highlights of
[05:35] our year
[05:36] as well as a fine addition to the star
[05:38] citizen experience overall
[05:40] and the bengal was just one part of
[05:42] everything that goes into making the
[05:43] event so special
[05:45] each and every year now from looking
[05:47] back
[05:48] let's look ahead it's sprint report time
[05:50] so let's get to it
[05:53] starting things off members of the ui
[05:55] team have completed a sprint porting
[05:57] many of the transit signs found
[05:59] throughout the persistent universe
[06:00] to use a newer and more robust version
[06:03] of our building blocks tech
[06:04] now as with everything that makes this
[06:06] transition it not only allows for
[06:09] easier swapping of various styles and
[06:11] themes without having to change the
[06:12] underlying information
[06:14] but it's also far more efficient and
[06:16] less resource intensive
[06:18] leading to performance gains all over
[06:20] when every little bit helps
[06:22] this is a small sampling but the team is
[06:24] looking forward to adding more
[06:25] and varied styles to the various
[06:27] interactions players encounter
[06:29] throughout the verse meanwhile the
[06:32] character team is close to completing
[06:34] work on the grey cat armor that was
[06:35] revealed alongside the grey cat rock ds
[06:38] earlier this year
[06:40] now while it's designed to specifically
[06:42] support mining operations
[06:43] fashion forward citizens will still find
[06:45] a lot to like here
[06:48] [Music]
[06:49] whoever said support roles couldn't look
[06:52] badass obviously
[06:53] never worked for our character team
[07:09] [Music]
[07:26] props teams have recently begun their
[07:28] explorations
[07:30] developing the various chips and ports
[07:32] necessary
[07:33] to support the upcoming hacking gameplay
[07:35] currently scheduled for alpha 315.
[07:38] now while there will be a variety of
[07:40] high and low tech offerings
[07:42] these were the the conversation starters
[07:44] if you will
[07:45] to help us determine which direction
[07:47] visually we wanted to go in
[07:49] they even created a handy animatic to
[07:51] see how the pieces all fit together
[07:53] along with a sneak peek at the hacking
[07:56] visual interface
[07:57] that we're going to see a lot more of in
[07:58] isc next quarter
[08:02] now recently you've seen the current
[08:04] exterior progress of the aegis redeemer
[08:06] during invictus
[08:08] so let's take a look inside the
[08:09] continuing work on the interior with a
[08:12] look at grey box progress on the manned
[08:14] turret
[08:16] remote turret bay
[08:19] and habitation module
[08:21] [Music]
[08:24] vehicle teams have also begun looking at
[08:26] the constellation
[08:28] dash controls as they prepare to convert
[08:30] it to utilize the updated
[08:32] interactive cockpit experience now
[08:34] before you jump into the comments
[08:36] the physical buttons you see here are
[08:38] just temporary placeholders
[08:40] as the intention is still very much for
[08:42] this rsi stall work
[08:43] to maintain its touch screen holographic
[08:46] interface
[08:47] whenever possible in addition to that
[08:49] the aries starfighter
[08:51] currently on the public roadmap
[08:53] scheduled for an alpha 315 release
[08:55] is making its way through the white box
[08:57] phase of our ship pipeline
[09:00] after recent work on the mercury star
[09:02] runner and the hercules star lifter
[09:04] i've no doubt this will become another
[09:06] fantastic addition to the crusader
[09:08] lineup
[09:09] when it arrives towards the end of this
[09:11] year and since we're on crusader let's
[09:13] take a look at these final art images of
[09:15] the crusader shuttle that will
[09:17] whip zoom players around from platform
[09:19] to platform when it arrives in the
[09:20] upcoming alpha 314
[09:23] and before you ask no you cannot has one
[09:27] well maybe if you asked john crew really
[09:30] really nicely that could change one day
[09:32] now i'm absolutely not empowered to say
[09:35] this
[09:37] but you should ask them anyway because i
[09:39] really won't
[09:39] [Music]
[09:41] moving along last time we took our first
[09:43] look at orizon by night
[09:45] so let's continue that journey with
[09:46] these images from the lighting team
[09:48] as they continue their work creating an
[09:50] atmosphere that's truly unique
[09:52] from its daytime companion i'll just let
[09:56] these images speak for themselves
[09:59] [Music]
[10:02] so what did we learn this week well we
[10:04] learned that invictus is more than just
[10:06] a chance for players to experience our
[10:08] capital ships
[10:09] up close and personal it's also an
[10:11] opportunity for our developers to
[10:13] push needed technologies to the
[10:15] forefront in ways that will benefit the
[10:17] entire
[10:18] persistent universe going forward that
[10:20] grey cats should
[10:21] feel free to make as many industrially
[10:24] themed armors as they'd like
[10:25] and that between its style of ships the
[10:28] shuttles and the landing zones
[10:30] crusader is fast becoming a fan favorite
[10:32] manufacturer
[10:34] for inside star citizen i'm jared
[10:36] huckaby we'll see you all next week
[10:49] [Music]
[10:58] you

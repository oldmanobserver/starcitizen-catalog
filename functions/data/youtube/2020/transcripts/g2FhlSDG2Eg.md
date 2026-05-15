# Inside Star Citizen: Sweet Child of Mine | Fall 2020

**Video:** https://www.youtube.com/watch?v=g2FhlSDG2Eg
**Date:** 2020-10-22
**Duration:** 10:53

## Transcript

[00:05] it's not like we didn't know you you
[00:07] guys needed this information
[00:08] we wanted to show off a lot of this like
[00:10] right from the get-go
[00:11] we just never had the resources uh to to
[00:15] change that flash ui
[00:16] we basically had our hands tied
[00:20] we were happy with it at the beginning
[00:22] the problem is that
[00:24] everything that was iterated on
[00:25] throughout the course of the mining
[00:27] systems being developed was not always
[00:29] being conveyed back
[00:30] in time to the original setups that we
[00:33] had so
[00:34] we we knew for example that we were
[00:36] adding volatile cargo
[00:37] and consumables and yet what that
[00:40] actually ended up resulting in was that
[00:41] a lot of the backers were sort of
[00:43] theorycrafting a lot of this stuff to
[00:45] try and figure out what exactly was they
[00:46] were dealing with
[00:47] players couldn't even see what was
[00:49] directly in their cargo holds which we
[00:50] felt was
[00:51] something that we could also amend we
[00:54] change it now to building blocks which
[00:55] is
[00:56] so much easier first of all a lot
[00:58] cleaner and a lot easier to read it's
[01:00] going to react a lot better with like
[01:01] higher brightness conditions and every
[01:04] other designer can
[01:05] learn to use it and just go ahead and
[01:07] make tweaks and changes to it
[01:09] so in 312 we're gonna get this new
[01:12] streamlined ui
[01:13] the flight ui for example we felt that
[01:16] we could provide at least some of the
[01:18] flight ui information
[01:20] such as your throttle speed and your
[01:23] current velocity
[01:24] which means that there'll be no nasty
[01:25] surprises like i'm
[01:27] in decoupled mode and i don't realize it
[01:29] and i'm drifting and i don't know why
[01:32] anything else that was catching players
[01:33] out such as accidentally flying into the
[01:35] ground when trying to manage deposits so
[01:37] uh we felt that was kind of helpful to
[01:39] have besides this one
[01:41] we added now the functionality where you
[01:43] can see which consumables you have
[01:45] equipped on your ship
[01:46] at the quick glance you see icons for
[01:47] them you see which ones are active
[01:49] at this moment how long they have before
[01:51] they expire how long they will take
[01:53] what's the cooldown
[01:54] so you get to see all this information
[01:56] you don't just have to
[01:57] imagine how it works and hope that it
[01:59] does like you imagine it
[02:02] in addition to that we also felt that
[02:04] the readability of what you were
[02:05] actually mining was
[02:06] not 100 where it could be we had the
[02:10] cargo hold um element in there which
[02:13] originally was just an scu readout and
[02:15] the progress bar of
[02:17] zero to 100 and what we
[02:20] ended up feeling would be beneficial to
[02:22] the players to be able to see what's
[02:23] actually in the cargo hull
[02:24] so we have now a new component in the ui
[02:28] that not only
[02:29] shows you what is in there but actually
[02:30] up based in real time
[02:32] again very similar to this we added the
[02:34] functionality of viewing whether
[02:36] something is volatile and whether
[02:37] there's a danger
[02:39] and this is one of the things that we
[02:40] weren't really showing off properly in
[02:42] the ui and we
[02:43] we now are so volatile cargo in your
[02:46] cargo hull component will be highlighted
[02:48] in red
[02:48] so that you really see that you've got
[02:50] that in your cargo hold at any point
[02:53] beneath that is a volatile cargo display
[02:56] which will show you the egg the exact
[02:59] percentage of health
[03:00] from zero to 100 as well as the eta
[03:04] on the time it will collapse and the
[03:06] timer will come down again in real time
[03:08] i will update whenever you take a bomb
[03:10] as well
[03:12] and then finally another thing that we
[03:14] added to this was the
[03:15] uh the there's actually a jettison
[03:18] message as well which we were properly
[03:21] we're now properly conveying that your
[03:22] cargo has been jettisoned
[03:24] when the json cargo button has been
[03:25] pressed
[03:28] we hope this will sort of alleviate a
[03:30] lot of the confusion that the backers
[03:31] were experiencing
[03:32] they don't have to go through a hustle
[03:34] they don't it should not be a struggle
[03:36] for them to understand
[03:37] what's happening in the mining process
[03:40] and we're hoping that it will mean that
[03:42] players have a better time with the
[03:43] mining system in general that they will
[03:46] get more out of it make more money out
[03:47] of it and just generally have more fun
[03:49] with it
[03:52] there's a lot of exciting ui work coming
[03:54] this quarter beginning with the revamped
[03:56] mining and cargo interfaces we just
[03:57] showed you
[03:58] the refinery deck interface is coming
[04:00] online towards the end of the quarter
[04:02] and an overhaul to the long-awaited
[04:04] manufacturer-based ship huds
[04:06] that will start showing you next week
[04:08] but before we get to that
[04:09] let's go ahead and check in on some of
[04:11] the smaller updates from teams around
[04:13] the world
[04:14] in this week's sprint report always
[04:17] looking for ways to optimize and improve
[04:19] performance
[04:20] the lighting team is going back and
[04:22] taking a look at some of the versus
[04:24] older ships
[04:25] in an effort to reduce the resource cost
[04:27] of lighting within their cockpits
[04:29] and doing so all while maintaining or
[04:32] even improving the overall visual look
[04:34] they do this by applying many of the
[04:36] lessons the team has learned throughout
[04:38] star citizen's continuing development
[04:41] and once things
[04:42] are more performative and their looks
[04:43] are brought up to current standards
[04:45] the team will then begin additional work
[04:48] on integrating the lights from
[04:50] individual button presses in the
[04:52] upcoming fully physicalized dashboards
[04:54] as well as updating the transition
[04:56] effects between different power states
[04:59] like from the auxiliary to the fully
[05:01] empowered
[05:02] overall it can be very easy to get
[05:05] carried away when lighting an asset or
[05:07] location
[05:08] and unnecessarily blow past your
[05:10] resource budget
[05:11] which is why the team is also going back
[05:13] to one of the most
[05:14] immoderate resource hogs among all ships
[05:17] in the origin 600i
[05:19] now it didn't take long after applying
[05:21] recent techniques
[05:22] for artists to reduce the 600i's
[05:25] lighting resource footprint
[05:26] by a factor of 10 which then allowed for
[05:29] the addition of new runtime probes
[05:31] throughout the ship
[05:33] meaning all those open areas will now be
[05:35] properly affected by
[05:37] and reflective of the universe around
[05:39] them
[05:40] the weapons concept team have finished a
[05:42] sprint on developing new
[05:44] non-lethal ordinance for star citizen
[05:46] and squadron 42
[05:48] including this taser-like stun gun from
[05:50] preacher armaments
[05:52] where you can see how the side panels
[05:54] would expand out before discharging its
[05:56] electron payload
[05:57] as well as the upcoming cure life med
[06:00] gun an
[06:01] up close and personal beam weapon that
[06:03] utilizes a cartridge of healing serum
[06:06] to treat both npc and players alike
[06:10] following up on the new volatile cargo
[06:12] ui features we discussed earlier in the
[06:14] show
[06:14] the props team have been working on
[06:16] three new styles of valuable
[06:18] yet quite dangerous cargo items for
[06:21] future gameplay
[06:22] including damage sensitive items you
[06:24] should probably carry
[06:26] very carefully time sensitive items
[06:29] meaning you
[06:30] have to get them where they're going as
[06:31] quickly as possible
[06:33] and then a new quantum sensitive cargo
[06:35] item
[06:36] that means you're probably going to want
[06:37] to keep a low profile
[06:39] and maybe you know take the long way
[06:41] around
[06:42] meanwhile the vfx team have been working
[06:44] on updated chaff effects to go along
[06:47] with recent code
[06:48] changes that are all a part of the
[06:49] in-progress revamp to missiles
[06:51] we'll talk about later in the quarter
[06:53] now this work in progress
[06:55] visual exploration will continue to
[06:56] evolve as we test more
[06:58] sparkly elements and continue to dial in
[07:01] the approach we want to take
[07:03] while simultaneously working to separate
[07:05] its look visually
[07:06] from the also in development flat cannon
[07:09] weapons for
[07:09] capital ships and space stations
[07:14] of course it's been a while since we've
[07:16] checked in on the team's work in fire
[07:18] propagation
[07:19] and well they might be having a little
[07:23] too much fun at the moment
[07:24] what you're seeing here is what's called
[07:26] the visual target test
[07:28] and this is separate from the code work
[07:30] that we've shown in the past
[07:31] the purpose here is to see what's
[07:33] possible visually with the current
[07:35] shader and graphics tech
[07:36] that's already in place this looks
[07:39] pretty good
[07:39] but more importantly it's allowed the
[07:41] team to identify areas of much-wanted
[07:44] improvement that's still needed
[07:46] like the glow and emissives from heated
[07:48] surfaces the quality and density of soot
[07:50] in the air
[07:51] a more varied mix of flame types based
[07:54] on the surface the fire is emitting from
[07:56] and more in locations news
[07:59] artists that recently finished their
[08:01] work on cargo decks have begun to move
[08:03] over to 3.12's upcoming refinery deck
[08:06] add-ons for space stations
[08:08] as they further explore the visual style
[08:10] here it was decided to introduce more
[08:12] soft body elements where appropriate
[08:15] seen here
[08:15] in early roughs on some of the pipe
[08:17] systems and insulation materials
[08:20] you can expect us to follow along with
[08:21] the continuing progress of refinery
[08:23] decks
[08:24] throughout the remainder of this quarter
[08:27] artists have also taken a pass at some
[08:29] of the existing derelicts in-game
[08:32] like this starfarer crash to update the
[08:34] look more in line with what we might
[08:36] expect
[08:37] from a long damaged and abandoned
[08:39] vehicle a smaller tasks like these are
[08:41] usually reserved for the downtime that
[08:43] can sometimes occur at the end of
[08:45] sprints
[08:46] or when other scheduled work is
[08:48] temporarily blocked by
[08:49] technical or resource issues overall
[08:52] it's a great way to keep artists engaged
[08:54] while simultaneously working down the
[08:56] smaller tech debt issues
[08:58] that can often build up in a team's
[09:00] backlog
[09:01] finally in ship the station docking news
[09:04] with the concept we last showed you now
[09:06] approved
[09:07] designers have begun the process of
[09:09] white boxing the actual locations
[09:12] where these arms and collars and docking
[09:15] hubs will go
[09:16] on the existing space stations now the
[09:18] easiest thing to do would probably be to
[09:20] stick these things out at the farthest
[09:22] reaches of the stations
[09:23] but there was a feeling here that that
[09:25] would make the stations feel too
[09:27] disconnected and spread out
[09:29] and we were very keen to create as many
[09:31] dynamic views as possible for those
[09:33] within the stations
[09:34] of the massive ships outside while also
[09:36] minimizing the amount of
[09:38] downtime foot travel the players would
[09:40] have to make if we just
[09:41] set the hangers at those farthest
[09:43] reaches what you're seeing here is by no
[09:46] means their final placements
[09:47] but as stated explorations of potential
[09:50] options
[09:50] that must now be weighed by the various
[09:53] teams for their relative benefits
[09:55] and detriments one thing's for certain
[09:57] ship to station docking is on its way to
[09:59] the star citizen precision universe
[10:01] and it looks like the wait is going to
[10:03] be worth it
[10:05] so what did we learn about this week
[10:07] well we learned that building blocks
[10:09] continues to make addressing the
[10:10] feedback and considerations of players
[10:12] easier and more effective for designers
[10:14] and programmers alike
[10:16] that it's never too late to go back and
[10:18] optimize or improve on the things that
[10:20] have come before
[10:22] and that the vfx team isn't going to be
[10:24] happy until the entire universe is on
[10:26] fire
[10:27] this is fine for inside star citizen i'm
[10:31] jared huckaby we'll see you next week
[10:53] you

# Star Citizen Live: Dynamic Events

**Video:** https://www.youtube.com/watch?v=HJJLpY4661w
**Date:** 2021-01-29
**Duration:** 1:01:06

## Transcript

[00:03] hi everybody
[00:04] welcome to star citizen live dynamic
[00:07] events with tony zurovic
[00:08] i'm your host jared huckabee and if
[00:10] you've never seen star citizen live
[00:12] before it's where we take about an hour
[00:13] out of the end of our week
[00:15] and check in with developers see what
[00:17] they're doing
[00:18] talk about the things that they're
[00:19] working on sometimes we watch them make
[00:21] something live
[00:23] today we have a gentleman who's probably
[00:25] no stranger to most star citizens
[00:27] but we're going to take the time to
[00:28] introduce them anyway meet tony zurovic
[00:31] tony how you doing man hi how's it going
[00:34] uh tony zurbak director of persistent
[00:36] universe
[00:37] all right so the director of persistent
[00:39] universe we're just going to jump right
[00:40] into this
[00:41] the last time we saw you was citizencon
[00:44] 2949
[00:46] years right i checked in with our data
[00:48] solutions teams we've gained over 500
[00:51] 000 citizens since then so somebody
[00:54] watching right now has no idea who you
[00:55] are
[00:56] so take a few moments before we jump
[00:57] into this uh tell them
[00:59] who you are what the director of
[01:01] persistent or what what your position
[01:03] does
[01:03] some of the things you work on how am i
[01:06] get out of your way
[01:07] uh i have uh i put i i have a lot of
[01:10] focus on what i'd say is like
[01:12] the you know the the simulation of the
[01:15] world getting all the
[01:16] systemic elements operational uh ai and
[01:19] mission
[01:19] architecture um back-end services that
[01:23] provide a lot of information to the game
[01:25] servers
[01:26] um also you know a lot a lot of uh
[01:29] you know you know some of the
[01:31] occupational stuff we're working on you
[01:32] know some advanced bounty hunting you
[01:34] know functionality
[01:35] a lot of the the the interfaces you know
[01:38] for everything from uh
[01:39] you know from shops to insurance to you
[01:42] know to
[01:42] cargo loading just it's really a wide
[01:46] variety of things
[01:47] um all over the map those the systemic
[01:50] services that like the day-to-day
[01:51] operation of the persistent
[01:53] life in the persistent universe kind of
[01:55] thing yeah i mean
[01:56] there's you know there's multiple
[01:59] aspects of that
[02:00] historically it's been um you know
[02:03] all you know a lot of you know focus on
[02:05] the persistent stuff that's now starting
[02:07] to shift over
[02:08] um you know to to a new group is
[02:10] basically going to take it and run with
[02:11] that
[02:12] um and we're going to basically affect a
[02:14] you know hand over a transition and
[02:15] we're basically taking some of those you
[02:17] know some of those existing resources
[02:19] and we're going to re-task them with
[02:21] helping to add
[02:23] some additional bandwidth into some of
[02:25] these areas that we've been wanting to
[02:26] flesh out for an extended period of time
[02:28] but there are always you know so many
[02:30] other higher priorities and we think
[02:32] just
[02:32] you know as of pretty recently like
[02:35] within the
[02:36] you know the last you know literally you
[02:37] know month or so we've finally
[02:39] eliminated enough of the bottlenecks on
[02:42] the back inside
[02:43] to where we can you know you know pretty
[02:46] confidently
[02:47] uh support you know you know
[02:50] you know at least 20 000 players you
[02:52] know concurrently
[02:53] might be higher it's difficult to say
[02:55] until you actually get you know
[02:56] until you actually you know stress test
[02:58] some of these things but
[03:00] we we ran into some problems at the
[03:02] fleet week the 2020 fleet week
[03:04] and we took you know uh we took the
[03:06] lessons we learned there and it was
[03:08] it was kind of unfortunate timing in
[03:09] that particular case
[03:11] because we knew that we weren't going to
[03:15] be able to support you know more uh you
[03:18] know
[03:18] dramatically more players than we had in
[03:20] the near-term past when we launched that
[03:22] event
[03:22] and we didn't you know really think that
[03:24] was you know going to be a problem
[03:26] because
[03:26] we had you know for the you know for the
[03:28] previous you know year
[03:30] we had it in our development schedule to
[03:33] deliver
[03:33] you know the final bits of icash and to
[03:36] basically scale a number you know the
[03:38] loadout service the variable service
[03:40] um you know all you know uh to to cash
[03:42] all the login credentials all this type
[03:43] of stuff
[03:44] that we're supposed to you know to
[03:46] alleviate to mitigate a lot of these
[03:48] bottlenecks and unfortunately
[03:50] that that last fleet week event proved
[03:52] to be so popular that
[03:53] you know we wound up you know uh during
[03:56] probably about twice the number of
[03:58] concurrent users
[03:59] that we actually expected um and so what
[04:02] that did is
[04:03] it it caused it it caused us to
[04:05] reprioritize some things so that we
[04:08] could get
[04:08] select pieces of that you know of that
[04:11] functionality out sooner
[04:12] and many of those things are now
[04:14] operational and so while there's still
[04:17] definitely plenty more to do um we think
[04:20] that we've got
[04:20] a decent amount of head of room given
[04:22] where we you know given what
[04:24] given where we think the you know the
[04:28] the uh the community involvement is
[04:30] going to be for the next few quarters
[04:32] um you know and then longer term we've
[04:33] obviously got you know some
[04:35] some major you know some major
[04:37] initiatives you know still on the
[04:38] horizon
[04:39] you know like server meshing which is
[04:40] where we're actually looking to
[04:42] you know distribute the workload across
[04:44] as many servers as is necessary so we
[04:46] can start to scale up the actual number
[04:48] of
[04:48] players within a given you know you know
[04:50] uh instance or
[04:51] chart of the game all right so
[04:55] you you just mentioned you know uh
[04:58] knowing where players are going to be
[04:59] and stuff
[05:00] for the next couple uh a couple quarters
[05:03] uh that brings us to the topic
[05:05] of this particular show which is dynamic
[05:08] events
[05:08] now dynamic events is a phrase that our
[05:11] community has heard
[05:13] several times whispers here and there
[05:14] over the last year
[05:16] almost two years going back to 2019 uh
[05:19] back when we refer to it as timed events
[05:21] and
[05:21] some of the monthly reports stuff let's
[05:23] just start things off
[05:25] with a primer here what is a dynamic
[05:28] event
[05:29] so you have to give a little bit of
[05:31] explanation first like the long-term
[05:33] objective for star citizen
[05:35] has always been a dynamic evolving
[05:38] universe
[05:39] most of our existing content to date
[05:41] though has been inherently static
[05:43] so missions are offered at a given price
[05:45] at a particular location because
[05:48] a designer dictated it not because
[05:50] something within the economic pipeline
[05:51] actually required that work be done
[05:54] so uh if you're refueling reloading or
[05:57] repairing a ship that doesn't actually
[05:59] increase the demand and thus the price
[06:01] for the associated commodities and
[06:03] components
[06:04] at refineries or shops similarly the
[06:07] the likelihood of running into a pirate
[06:09] on a given route doesn't waver
[06:10] regardless of whether a lot of unarmed
[06:12] cargo transports carrying valuable
[06:14] materials start traveling that path
[06:17] so quantum which is the simulation that
[06:19] i showed
[06:20] off at the last citizencon that's the
[06:22] primary method by which we're going to
[06:24] address this
[06:24] and it simulates the effect of
[06:27] a vast amount of ai and it then feeds
[06:30] those results
[06:31] you know to the game and then factors
[06:33] player actions back into the simulation
[06:35] so you wind up with this very logical
[06:38] ebb and flow that you'd expect and that
[06:41] creates
[06:41] a lot of temporary opportunities for
[06:43] people to exploit in general
[06:44] uh it just makes the game feel far more
[06:47] interesting to play
[06:48] so dynamic events are different you can
[06:52] think of them
[06:53] uh you can you can think of them a bit
[06:56] as
[06:56] designer driven short stories that can
[06:58] be layered on top
[07:00] of quantum's systemic background and
[07:03] they can be triggered manually
[07:04] or automatically when certain conditions
[07:06] are met so if the system decides that
[07:08] war is broken out in an area or we
[07:10] or we just decide that we want to liven
[07:13] things up a little
[07:14] then designers and writers can inject
[07:18] a lot of precisely curated content into
[07:21] the game
[07:22] and the impact of those modifications
[07:24] will then be blended
[07:25] into the simulation that's really
[07:28] you said there's there's two ways to
[07:30] trigger them either we we can set up
[07:32] we can set up situations criterias in
[07:34] which the
[07:35] the players meet them and the system
[07:38] automatically goes oh yeah
[07:39] trigger this particular event that's
[07:40] been designed or we can trigger them
[07:43] manually uh
[07:46] just describe to me the difference there
[07:47] why why would we use
[07:49] one over the other for a particular
[07:50] situation well it's actually similar to
[07:54] all a lot of what we've done with the
[07:56] normal development cycle which
[07:58] is on the one hand we're putting out a
[08:00] live product and so we have to build you
[08:02] know we have to have something
[08:03] that the community can play right now
[08:05] but at the same time we're planning for
[08:08] the future and so if you think about
[08:10] shops as an example
[08:13] if all that a shop was going to do was
[08:16] basically offer a certain number of
[08:17] items for sale or particular price
[08:19] then the effort that we've expended to
[08:21] get us to here
[08:22] you know was you know was was
[08:25] dramatically over
[08:26] engineered and it's been the you know
[08:28] it's been that you know it's been that
[08:30] way for
[08:31] you know for the last two and a half
[08:32] years and it's only now that you're
[08:34] starting to bring in
[08:35] quantum and have quantum start to
[08:37] dictate some of this information these
[08:39] services which can cache this
[08:40] information they're also responsible for
[08:42] basically
[08:42] receiving callbacks from the individual
[08:45] shops and then feeding you know
[08:46] you know on occasion um some of those
[08:49] transactional events
[08:50] back to the mission instances that are
[08:52] running on some of these servers
[08:54] that you start to see why we made
[08:57] some of the choices we did back then in
[08:59] other words it's kind of like before you
[09:01] can get around to building the
[09:02] skyscraper you have to lay the
[09:03] foundation
[09:04] and so we've said this so many times in
[09:06] the past um
[09:08] and we're starting to get to the point
[09:10] now to where we're starting to
[09:11] exploit you know some of these
[09:13] underlying pieces i mean
[09:14] quantum is another perfect example in
[09:17] that regard in that
[09:18] we have these so-called probability
[09:20] volumes that
[09:21] dictate what sort of stuff you can
[09:24] encounter in a given you know
[09:26] area of space and then we have shops and
[09:29] we have you know service beacons
[09:31] and we have all these you know uh you
[09:33] know different systems
[09:35] but right now designers go in and you
[09:38] know even
[09:38] even missions what missions are
[09:40] available where and for what amount of
[09:42] money
[09:42] and you know what level of risk you know
[09:45] you're going to
[09:46] incur when you actually accept them
[09:48] that's all fixed right now the designers
[09:50] are
[09:50] able to set up these data structures
[09:53] but what we haven't previously been able
[09:56] to do is provide the real-time dynamic
[09:58] inputs that would allow us to make these
[10:00] things ebb and flow
[10:02] in other words if there's currently a
[10:04] lot of pirates in an area
[10:05] then having something delivered to that
[10:08] area should logically
[10:09] cost more there's you know there's a
[10:10] greater risk you know to you and your
[10:12] ship
[10:12] and you know and all that type of stuff
[10:15] but designers
[10:16] haven't had the tools to be able to
[10:19] automatically
[10:20] feed that type of real-time information
[10:22] into these
[10:24] mission archetypes that they're setting
[10:25] up and we're just now getting across a
[10:28] wide range of areas into doing some of
[10:30] that and
[10:31] you know so there is an update that i'll
[10:34] be giving within
[10:35] you know roughly the next few months um
[10:38] that will basically uh explain
[10:43] what we've been working on in so far is
[10:44] not just quantum but also some
[10:47] uh related you know back-end
[10:49] technologies to help
[10:51] uh to help generate this you know this
[10:54] algorithmic
[10:54] uh this systemically derived you know
[10:57] information and then
[10:58] feed it into the game and in a few cases
[11:00] we've actually you know we'll actually
[11:02] be able to demonstrate you know real
[11:03] actual working examples as opposed to
[11:06] you know just being theory i always hate
[11:07] to do
[11:08] too many you know uh you know repeated
[11:10] theory talks and so one of the things
[11:12] we debated doing this presentation a
[11:15] little bit earlier
[11:16] but it still would have been in the vein
[11:17] of yeah it's coming it's coming and so i
[11:20] intentionally wanted to hold it back a
[11:21] few extra months
[11:22] so that we could demonstrate some of
[11:25] this stuff live and actually show
[11:26] some of these pieces of tech and
[11:28] functionality
[11:29] coming you know coming to fruition yeah
[11:33] i do want to add uh on top of that just
[11:36] for the community
[11:36] uh this this update that tony is talking
[11:39] about that will come
[11:40] we're not going to say when we let's be
[11:42] real we don't have a great history of
[11:44] saying hey we're going to have this
[11:45] video out
[11:46] then uh but we're working on it and
[11:49] we're
[11:49] and from what i've already seen it's
[11:51] pretty awesome tyler's in my chat right
[11:53] now like tell people it's awesome
[11:54] it is awesome uh yeah there's there it's
[11:58] kind of like a
[11:58] it's kind of like a release to where
[12:00] there are certain things you want to
[12:02] demonstrate
[12:03] and you know there's always a little bit
[12:05] of uncertainty you know with respect to
[12:07] development schedules um and and so it's
[12:10] difficult to say precisely
[12:12] um but we are already deep into testing
[12:16] multiple facets of what we're aiming to
[12:18] deliver so
[12:19] it's coming yeah just in our long
[12:22] history of saying hey we're going to
[12:24] have a special video out at this point
[12:25] talking about this thing
[12:26] we our track record's not so good here
[12:28] so uh just
[12:30] hang tight all right so right now
[12:33] on the ptu there's uh there there's a
[12:37] there is a dynamic event our first
[12:38] dynamic event called xenothreat that's
[12:40] currently
[12:41] being tested now um without spoiling the
[12:44] event we obviously don't want to break
[12:46] it down like hey phase one is this you
[12:47] know we don't want to go
[12:48] into that much detail but tell us what
[12:50] xenothread is uh what
[12:52] and what are what we're hoping to
[12:53] accomplish
[12:56] there are two primary things on our mind
[12:58] when thinking about this event and
[12:59] you know uh we started you know
[13:01] discussing this internally probably
[13:03] almost a year ago you know back in
[13:05] you know first quarter 2020 uh what we
[13:07] wanted to achieve
[13:09] um and the other thing that we wanted
[13:12] besides
[13:13] you know it being fun uh was that it
[13:16] wouldn't
[13:16] cause us to deviate too much from the
[13:19] natural
[13:20] trajectory of the development effort in
[13:21] other words it couldn't be too
[13:22] disruptive we wanted to take the things
[13:24] that you know logically followed in
[13:25] terms of development effort
[13:27] and look for ways that we could you know
[13:30] exploit
[13:30] and you know reveal you know these two
[13:32] players and basically improve
[13:34] you know the overall gameplay experience
[13:35] and in certain cases of course a little
[13:37] bit more effort here
[13:39] uh you know pushing something else back
[13:40] to free up some bandwidth so that we
[13:42] could you know polish something you know
[13:43] a little sooner than it would otherwise
[13:44] be the case
[13:45] you know that that always happens and so
[13:49] one of the primary things that we wanted
[13:51] to do was get all of the
[13:53] the mission and back-end infrastructure
[13:55] operational and this is
[13:56] uh it's you know for example there's
[13:58] back in tools now and i'll cover this
[14:00] you know in the upcoming
[14:01] presentation to activate and monitor and
[14:04] deactivate missions
[14:05] and that's again if you look at
[14:08] xenothread
[14:12] the the the amount of work that's gone
[14:15] into allowing
[14:16] this you know event to basically be uh
[14:20] you know to be activated is far larger
[14:23] than what you're able to see right now
[14:24] what i mean by that is
[14:27] it it exposes an entirely different way
[14:29] for designers to start to set these
[14:31] things up
[14:32] um they're able to for example within
[14:35] the
[14:35] you know uh when they're crafting the
[14:38] mission archetype logic they can now
[14:40] declare these you know the these static
[14:43] instanced variables
[14:44] that are managed by the back end and
[14:46] they also have the concept of
[14:48] phases which are conditionals that can
[14:51] be associated with
[14:52] these variables that are managed by the
[14:54] back end and the significance of this
[14:56] is that we can
[15:00] is that we can coordinate
[15:03] uh mission logic across all the
[15:05] different servers and that's how
[15:06] xenothread fundamentally works which is
[15:09] we have four phases in this mission
[15:12] there's the initial the introductory
[15:14] phase where we're kind of like you know
[15:15] giving you know
[15:16] we're hinting that you know something's
[15:18] to come we're doing some foreshadowing
[15:19] there's the actual you know javelin
[15:21] restocking you know phase
[15:23] then there is you know the climactic
[15:24] battle scene and then there's the
[15:26] conclusion
[15:27] and all of these you know are really the
[15:29] representative and what
[15:30] what this event allowed us to do you
[15:32] know most most importantly
[15:34] was to test and refine and get all this
[15:36] you know stuff out
[15:37] working in the real world like you know
[15:39] so now you've actually got a dynamic
[15:40] mission service and you actually have
[15:42] the concept of you know these you know
[15:44] the uh these global variables and the
[15:45] mission and the designers are able to
[15:46] communicate with them
[15:47] through you know through subsumption
[15:49] task archetypes and we're able to do
[15:51] these conditional
[15:53] evaluations we're able to basically have
[15:55] the back end synchronize however many
[15:57] servers we have
[15:58] to keep them all in lockstep um and then
[16:01] there's all sorts of you know
[16:02] fine-tuning that goes on to where well
[16:04] if you've got a particular server and
[16:07] it's in
[16:08] say phase two and they're restocking
[16:10] they've got the javelin import
[16:11] and then oh and the designers can
[16:14] actually set it up to do things and they
[16:15] are
[16:16] things like the number of javelins that
[16:19] are successfully restocked in phase two
[16:22] can then serve as an input to
[16:24] phase three such that the
[16:27] frequency of support you get from the ue
[16:30] from the uee navy
[16:31] depends upon how successful you were
[16:34] in defending those ships in that earlier
[16:36] phase and again it's it's
[16:38] what matters less is the specifics of
[16:41] what we're doing
[16:42] you know right this moment with that and
[16:44] more what we're allowing the designers
[16:46] to do in the future how we're basically
[16:47] unlocking them to you know to do lots
[16:49] more
[16:50] uh cool stuff um another big big focus
[16:54] for this particular event a major one
[16:56] was from the beginning we knew that we
[16:58] wanted to put a lot of emphasis you know
[16:59] for the first time on the capital ship
[17:01] battles
[17:02] so there were a litany of changes that
[17:04] we needed to make
[17:05] in order to enable this and at the top
[17:07] at the very top of the list
[17:08] was how the ai responded to the threat
[17:11] of torpedoes
[17:12] so originally and you know i said
[17:15] this was still true as of about four
[17:17] months ago when
[17:18] we when we finally got to the major you
[17:20] know the major push in that regard
[17:22] originally neither turrets nor ships
[17:24] tasked with defending a capital ship
[17:26] paid them any heed and that meant that
[17:29] it was way too easy to take these
[17:30] capital ships out in the early days
[17:32] it was literally trivial was no fun at
[17:33] all and so we spent
[17:35] you know over a month fine-tuning
[17:37] various systems
[17:38] so that counter measures would be
[17:40] launched and worked as expected
[17:42] turrets would prioritize major incoming
[17:44] threats like a torpedo over most other
[17:46] things
[17:47] uh players would be rewarded for you
[17:50] know coordinating their attacks with one
[17:51] another like you're much
[17:52] you know you tend to be much more
[17:53] successful if three players launched
[17:55] torpedoes at the same time
[17:56] and then you know and and and we built
[17:59] in
[18:00] uh into the
[18:03] logic this the you know this sense to
[18:05] where it's it's not like
[18:06] you know it targets proper target
[18:09] selection
[18:10] well it what we didn't want to do is
[18:12] make it is make it too robotic
[18:14] too precise uh not because you might not
[18:16] have that a thousand years in the future
[18:17] but simply because it's not fun and so
[18:19] what we wanted to do you know if it
[18:21] targets perfectly
[18:22] and if it's able to you know perfectly
[18:24] shift is it its attention
[18:26] it you know uh you know it it simply
[18:29] didn't deliver
[18:30] the you know the the gameplay feeling
[18:33] that we wanted and so again we've spent
[18:35] weeks and weeks tweaking fine-tuning
[18:37] this until we were internally pretty
[18:39] happy with the results
[18:40] another good example was the the idris
[18:42] the interest was originally pretty
[18:44] suicidal
[18:45] in that it would happily engage the
[18:47] javelin and get destroyed
[18:49] as long as it managed to get off its
[18:51] railgun and so
[18:53] its logic wound up evolving to the point
[18:55] where it's now much more opportunistic
[18:57] it wants to use its railgun
[18:59] but only when that doesn't put it in too
[19:00] much danger and then one other thing
[19:02] that we noticed was that uh the turret
[19:04] the turret targeting
[19:06] couldn't be so boolean uh it couldn't
[19:08] focus a hundred percent of its attention
[19:09] on an attacker that was only
[19:11] slightly more attractive than another
[19:14] player
[19:14] because again it looked artificial and
[19:17] most importantly it just wasn't very fun
[19:19] for the other players you know we were
[19:20] getting internal reports of
[19:22] you know you you have you know eight
[19:24] turrets you know you know active on a
[19:25] ship
[19:26] and you got you know and you've got 16
[19:27] players and that you know
[19:29] when it was so bullying at the at least
[19:31] half the players
[19:32] were not having you know we're not
[19:34] having any of that you know uh
[19:36] you know firepower focused on them even
[19:37] for instance and so they
[19:39] you know they they felt you know you
[19:41] know they felt relatively bored in terms
[19:43] of the danger presented to them i want
[19:44] to be shot at
[19:45] if you're if you're attacking if you're
[19:47] jumping in the battle with an idris and
[19:48] a javelin you want to be shot at you
[19:49] want to feel like i'm a threat
[19:51] shoot at me yeah it's a there's a
[19:53] there's a lot more
[19:54] fuzziness in grain and it took time to
[19:56] basically work through all these details
[19:58] i mean we we sat through every you know
[20:00] every single week reviewing what
[20:01] you know how how it looks when you
[20:03] basically fire individual torpedoes at a
[20:05] ship
[20:06] you know how it looked when you fired
[20:07] multiple torpedoes how it looked if you
[20:09] fired multiple torpedoes with
[20:11] a very small you know differential in
[20:13] time versus a large differential in time
[20:15] um you know how the ship responded when
[20:17] it still had countermeasures available
[20:19] and then another
[20:20] aspect of this was the support ships
[20:24] that basically defend these capital
[20:26] ships it's the same thing to where
[20:28] even if you're firing upon them if a
[20:30] torpedo is launched at the capital ship
[20:32] they'll see that as a greater that break
[20:34] off potentially at risk to themselves
[20:36] and prioritize dealing with that torpedo
[20:38] um and so there's a multitude of these
[20:41] things that have to be worked through
[20:42] and
[20:43] there's of course you know there's
[20:44] there's more we could do there's more we
[20:45] will do
[20:46] it's by no means you know perfect but
[20:48] you know
[20:49] it's it's it's light years i mean i
[20:52] hesitate to say it's light years beyond
[20:53] where we were
[20:54] you know when this started because some
[20:57] of this stuff hadn't even
[20:58] realistically gotten off the ground and
[21:00] now it's actually in
[21:02] in some of these select areas it's
[21:04] actually quite mature
[21:06] you mentioned a couple things i want to
[21:07] follow up on uh first off the
[21:10] the the process of bringing capital ship
[21:13] battles
[21:13] to life and all the balance decisions
[21:16] and all the new technologies that we're
[21:18] required to bring up
[21:19] that's actually the topic of next week's
[21:20] isc so you know
[21:22] we've got a lot there yeah some of it
[21:24] you just heard from tony but you will
[21:25] dive into more detail in next week's isc
[21:27] i wanted to talk to you about other
[21:29] things you touched on you mentioned
[21:31] some shared information between servers
[21:35] yeah and and that's something relatively
[21:37] new that that that's an issue
[21:40] this is literally the first
[21:42] demonstration of you know of this tech
[21:44] there's more to come like another thing
[21:46] we're
[21:46] working on the back inside is like right
[21:48] now we have the ability to
[21:50] when the designers you know craft this
[21:52] mission logic
[21:54] all of that logic previously all the
[21:56] logic all the data was basically stored
[21:58] on the server so if you have 200 servers
[22:00] you had 200 different instances and so
[22:02] what you're now seeing is like the you
[22:03] know the first example of us
[22:05] allowing the designers to split it into
[22:07] it's kind of like a
[22:08] client server architecture but for you
[22:10] know but for mission logic
[22:11] to where they can dictate this logic
[22:14] runs on the individual server instance
[22:16] and it's got its own local variables
[22:17] and it can interface with variables it
[22:20] can interface with functions that are
[22:22] also executed on the back end
[22:24] and so what this allows us to do is you
[22:27] know like i was saying earlier it's like
[22:29] you can have an individual mission
[22:30] instance of this xenothread on a given
[22:32] server and you can register
[22:34] that you did or did not successfully
[22:37] defend this javelin you know
[22:38] did you sufficiently restock it it left
[22:40] and you were victorious
[22:42] or did it suffer so much damage that it
[22:44] had to run away and so we actually tally
[22:46] the number of
[22:48] you know of successful restockings and
[22:50] then like i said earlier
[22:52] that directly impacts um how
[22:55] how quickly that javelin is going to
[22:57] come support you
[22:59] assuming you need it in those later
[23:01] stages and again the
[23:02] the important point there is it's it's
[23:04] just it's representative you know what
[23:06] we've done now is
[23:07] work out you know the you know the the
[23:09] details of the tech put it into white
[23:10] operations you can kind of think of
[23:11] xenothread as
[23:13] the first used case and it focused our
[23:15] efforts to get all
[23:16] you know to get all this stuff working
[23:18] and there is a lot more that you'll be
[23:20] seeing you know in the
[23:22] yeah in both the near and farther term
[23:25] um
[23:26] dynamic events um dynamic events are
[23:29] something that there's going to be
[23:30] continual focus on
[23:32] uh for the foreseeable future for
[23:35] example
[23:36] you know the the next fleet week is
[23:38] actually going to be running off of you
[23:40] know
[23:40] you know off of these you know these
[23:42] these same fundamental principles
[23:44] um we've got another dynamic event which
[23:46] we're referring to as nine tails
[23:47] lockdown
[23:48] and it introduces
[23:51] you it's not live yet but we're already
[23:55] well into testing uh you know the
[23:58] so-called shop modifiers we can now have
[24:00] mission logic effect at a global scale
[24:04] and and we've resolved all of the
[24:07] coordination between the different
[24:08] servers and issues like that so you can
[24:09] now apply
[24:10] shop modifiers you can apply probability
[24:13] volume you know volume modifiers
[24:15] you can you can basically lock down
[24:18] areas of space you know inhibit quantum
[24:20] travel within them
[24:22] um what will be coming in the not too
[24:24] distant future will be things like
[24:25] you know population control uh you know
[24:27] control of the actual spawn managers
[24:29] things of that sort
[24:30] access to areas and you think about this
[24:32] like what is
[24:34] fleet week other than at a certain time
[24:36] we're going to go ahead and
[24:37] open the doors to a certain area and
[24:39] allow you entrance and
[24:40] in the case of some of the you know some
[24:42] of these upcoming events
[24:44] when those events are active we want to
[24:46] create we want to basically
[24:47] you know we've decided as designers and
[24:49] it would be fun if we're doing a fleet
[24:50] week event then we want to
[24:53] increase the you know the demand for
[24:56] party favors and alcohol
[24:58] and fireworks or you know whatever other
[25:00] types of commodities temporarily at this
[25:02] location
[25:02] and so for the duration of this event we
[25:04] crank up the demand
[25:06] the price goes higher we broadcast that
[25:08] information to players let them know hey
[25:10] by the way
[25:10] you know the you know the the prices in
[25:12] this particular area for these
[25:13] particular quantities are getting out of
[25:14] whack
[25:14] you might want to take advantage of you
[25:17] know this temporary opportunity and
[25:19] focus on that
[25:20] and so all of this is um
[25:23] completely new functionality it's
[25:25] basically give you
[25:27] you're adding additional you know you're
[25:30] adding additional
[25:31] paints to you know uh to you know to
[25:34] what the designers can use
[25:35] you know to craft the you know to craft
[25:37] these you know portraits that they're
[25:39] making
[25:41] so so yes uh uh you now know what the
[25:44] next dynamic event is
[25:47] uh well then there there's there's
[25:49] there's go there's going to be
[25:52] it's we're just going to be you know
[25:53] keep rolling out we've actually uh
[25:56] we've probably got you know eight or ten
[25:59] specific
[25:59] ones planned and like i said each one is
[26:01] looking to leverage stuff that's come
[26:03] before and then add you know add some
[26:04] new functionality
[26:07] okay um
[26:11] we talked a bit about how you know with
[26:14] with the dynamic events
[26:15] it it now allows you know cross-server
[26:18] progress and stuff like that you know
[26:19] the events on one server
[26:20] you know get tallied up with the events
[26:22] of another server with another server
[26:24] you know to affect the next phase you've
[26:26] got the nine tails lockdown where we can
[26:28] where we can now affect dynamically
[26:30] affect the price of shops and stuff like
[26:32] this
[26:33] um one of the things you you touched on
[26:35] and again i just want to follow up on
[26:36] something
[26:37] you said no deviation from the existing
[26:40] you know you know development uh how
[26:42] important not
[26:43] just just be clear it's it's not that
[26:45] there's no deviation it's it's that
[26:48] you're you're trying basically
[26:51] we have a long-term plan of things we
[26:53] want to get done and it logically makes
[26:54] sense to do
[26:55] this before this other piece of tech etc
[26:58] and so
[26:58] you you don't in general want to deviate
[27:01] too dramatically
[27:02] purely for the sake of an arbitrary
[27:05] event in other words
[27:06] if if if not for xeno threat we could
[27:09] have done something else that would also
[27:10] be interesting
[27:11] but it was time in the natural course of
[27:13] things we needed to basically start
[27:15] getting
[27:16] you know the the back end coordination
[27:18] of these events we needed to get that
[27:20] operation we needed to bring the capital
[27:21] ships online you know the torpedo stuff
[27:23] is something that's been bought you know
[27:24] uh the you know that's something that's
[27:26] been bothering a long time
[27:27] so all of those things now some of those
[27:30] bits of tech when we started last year
[27:33] they weren't going to be addressed
[27:34] for another six months and you know and
[27:35] so we did re-prioritize some things so
[27:38] what i was saying earlier is
[27:40] you don't want to completely upend your
[27:42] your logical development schedule but
[27:44] you certainly refine it you tweak it you
[27:46] basically massage things around based
[27:48] upon so you're kind of like looking for
[27:50] the intersection of
[27:52] what's within you know what's within
[27:53] your grasp if not
[27:56] if if not absolutely all going to be
[27:58] there unless you actually put some focus
[28:00] on it and then once we kind of lock that
[28:01] down it becomes a very
[28:02] uh a very good means of focusing your
[28:06] you know
[28:07] focusing everyone's attention to where
[28:08] we know exactly how we're going to be
[28:10] using
[28:10] you know everything from you know
[28:12] everything from capital ship combat to
[28:14] the shop transactions that we can now
[28:16] have you know fed back into the mission
[28:19] logic to
[28:20] a vast multitude of other things now you
[28:22] hit exactly what i wanted you to hit
[28:24] there
[28:24] that you know these things don't detract
[28:26] or derail from the development
[28:28] they actually focused in and bear down
[28:30] on things that we already intended to do
[28:32] they just bring them into a more uh
[28:34] crystalline focus for a bit
[28:36] um that said
[28:40] there had to be some concerns that there
[28:42] there had to be that there had to be
[28:43] some
[28:44] dangers inherent there had what were
[28:46] some of the things we needed to look out
[28:48] for
[28:48] while we were working what scared us
[28:51] about this
[28:52] the the biggest concern from the
[28:55] beginning i would say
[28:56] um was going to be performance we knew
[28:59] performance was going to be an issue
[29:02] um it continues to be an issue we've got
[29:05] a
[29:06] number of initiatives underway to
[29:07] basically improve that
[29:09] um and then we're also attacking it you
[29:11] know from a completely different angle
[29:12] which is not just the per server of
[29:14] performance but
[29:15] you know the whole server meshing you
[29:17] know initiative is intended to
[29:19] eventually allow us to distribute the
[29:21] workload over as many servers you know
[29:23] as
[29:24] we need and so that was always something
[29:26] that we um
[29:27] were aware we were aware of um
[29:30] we've basically tweaked and refined
[29:33] things we
[29:34] you know uh you know uh you know the the
[29:36] maximum number of enemies you face
[29:38] in other words do you face 50 enemies at
[29:40] once or do you basically face
[29:42] you know uh you know a dozen and we keep
[29:44] replenishing them as you you know
[29:46] as you destroy them or take them out
[29:47] make them flee basically replenish them
[29:49] you know quicker
[29:50] um how many capital ships can you know
[29:52] can we put you know you know
[29:53] at a time uh there's been a tremendous
[29:56] amount of focus on
[29:57] um optimizing everything from you know
[30:00] turned ai
[30:01] to even seemingly unrelated things like
[30:03] um you know
[30:04] social ai it's like any time you're
[30:06] saving there is basically additional
[30:08] time that you can
[30:09] inject into you know into these events
[30:12] that are
[30:13] that are intended to basically uh draw
[30:16] lots of players together and have you
[30:18] know
[30:18] you know and have an enormous amount of
[30:20] ai you know active
[30:22] if you think about i mean this is
[30:23] definitely uh
[30:25] this is definitely um the biggest such
[30:28] event we've done today and we're putting
[30:30] more
[30:30] more players and more ai um and you got
[30:33] you know tons of turrets operation
[30:35] you you have a lot of stuff happening in
[30:37] one area
[30:38] and so it's it you know it it's it's
[30:42] like with most things right which is
[30:43] your first iteration of these things
[30:45] is never as mature as you would like
[30:48] in terms of the performance and you know
[30:51] uh
[30:51] yeah we're going to keep refining it i
[30:53] think you'll see some big improvements
[30:54] over the course of the next few quarters
[30:56] um and we'll go from there all right so
[31:00] yeah so we're about halfway through
[31:01] we're talking with tony zuravek
[31:04] uh big head honcho guy for the
[31:06] persistent universe
[31:07] in systemic systems uh remember if
[31:09] you're watching live on twitch right now
[31:11] you can submit questions with the word
[31:12] question
[31:13] in capital letters surrounded by
[31:14] brackets that's going to help tyler and
[31:16] our community management team pull those
[31:18] out from the conversations
[31:19] remember to try to keep the questions
[31:20] related to the stuff we're talking about
[31:22] today
[31:22] so if you're asking about when your
[31:24] favorite ship's going to come out or
[31:25] something that's
[31:26] not really the stuff we we take tony's
[31:28] time with um
[31:30] tony you mentioned that
[31:34] that designers get uh that designers can
[31:36] use dynamic events
[31:38] uh for all manner of things uh we just
[31:40] showed an isc how the uh
[31:42] the terrain modification tool will make
[31:44] things easier for designers to
[31:46] to craft and and alter the uh the
[31:49] service of planets and stuff
[31:50] dynamic events isn't just a feature for
[31:52] players it's also a tool
[31:53] for our developers and our designers
[31:55] what are what are some of the ways
[31:57] that dynamic events can help our
[31:59] designers uh make
[32:01] better and more dynamic uh stuff for
[32:04] star citizen
[32:06] well it's like i was saying earlier what
[32:07] what dynamic events really are
[32:09] is what we set up by default is what i
[32:12] would call like the systemic background
[32:14] right that's what quantum is good at
[32:16] which is
[32:16] it's like the real world economy you
[32:18] know things have been that things flow
[32:19] but in general you don't have
[32:21] major financial crises or great
[32:22] depressions or wars you know
[32:24] you know on a regular basis but the
[32:26] reality you know for you know from a
[32:28] gameplay perspective
[32:29] is you actually want you know a little
[32:31] bit of chaos here and there and
[32:33] sometimes
[32:34] we the designers want to go in and
[32:35] specifically massage this like oh
[32:37] you know what this area the solar system
[32:39] has been kind of boring today we're
[32:40] going to liven it up
[32:42] and so what these dynamic events allow
[32:44] us to do
[32:45] is basically uh to seamlessly integrate
[32:49] a chunk of you know designer and writer
[32:53] driven content
[32:55] into this background simulations so that
[32:59] how it interfaces with the you know the
[33:01] world is you know as
[33:02] it currently exists it's it's all
[33:04] logical it's exactly what you think in
[33:05] other words
[33:06] you know for example if we introduce a
[33:09] horde of pirates
[33:11] at a particular location well those
[33:13] pirates they're going to need fuel
[33:14] they're going to need ammo they're going
[33:15] to need you know ship repairs all of a
[33:17] sudden you know
[33:18] um you would expect to basically you
[33:20] know see lots more missions for
[33:22] you know uh you know escorts of
[33:24] transport ships you know
[33:25] you know in that area um you'd see you
[33:27] know more bounties you know being just
[33:29] you know uh bounty service beacons being
[33:30] dispatched that area
[33:31] so you have all of these other logical
[33:33] knock-on effects you would like
[33:35] and those they get for free but you
[33:38] think about it's like
[33:39] in xeno threat there's all this custom
[33:41] dialogue and stuff
[33:43] geared towards this and you got to go
[33:44] you know you got to go record the
[33:46] specific lines and you know and trigger
[33:47] them up so
[33:48] so it's basically what i would describe
[33:51] as the best
[33:52] of both worlds which is you know it's
[33:54] it's it's a it's a big open world and
[33:57] you can do whatever you want and make
[33:59] whatever choices you want and the game
[34:00] will respond logically and if you're
[34:02] you know particularly clever you'll
[34:03] occasionally you know figure it out you
[34:05] know some
[34:05] some cool opportunities um and then at
[34:08] the same time
[34:10] whether we manually do it or whether on
[34:12] occasion quantum decides you know what
[34:14] there's been
[34:14] so much you know battling in this area
[34:16] that we're going to go ahead and
[34:17] activate a compatible dynamic event that
[34:20] says oh
[34:20] you know and so the way these things are
[34:22] configured is you can think of it
[34:24] a bit like a programming function to
[34:26] where they've got
[34:27] certain requirements certain inputs that
[34:29] have to be fed to them
[34:31] and so what the system is basically
[34:34] looking for is at any given time is
[34:38] for the you know for the inputs in any
[34:41] given area
[34:42] what kind of content does it have that
[34:44] it can match up and so i mentioned like
[34:45] dynamic events but there's an entire
[34:47] there's a middle layer to this which is
[34:50] so here you know here to for today um
[34:52] you've had
[34:53] the the normal what i'd call the static
[34:55] missions and then at the far end of the
[34:57] spectrum you've got these dynamic events
[34:59] and in between you've actually got
[35:01] what i just what i've always referred to
[35:03] as dynamic missions
[35:04] and dynamic missions uh they kind of
[35:07] split the difference to where
[35:09] they're going to be systemically
[35:10] generated all over the place you you
[35:12] constantly see them
[35:14] they'll look very much like right now if
[35:16] you're in an area and there's a high
[35:18] probability of pirates we actually
[35:19] create you know a pirate encounter
[35:21] mission or you can create a cargo
[35:23] transport ship mission or a conflict or
[35:25] whatever the case may be
[35:26] where what dynamic missions do um
[35:30] is basically allow us at a at a smaller
[35:33] more localized scale now we're not
[35:34] talking about trying to coordinate this
[35:36] across you know multiple servers or
[35:37] anything like that
[35:38] it's just that cargo ship that you run
[35:41] into in this area of space
[35:43] what type of cargo should it have should
[35:45] it be copper should it be platinum
[35:46] should it be aluminum
[35:47] it probably depends logically it would
[35:49] depend upon well
[35:51] is it coming from you know uh you know
[35:53] from an area
[35:54] you know where you know uh where it
[35:56] purchased those things where that stuff
[35:58] is mined refined you know et cetera and
[36:00] where is it going to and so
[36:01] if it's heading one direction if it's if
[36:03] the cargo transport is going
[36:05] uh you know uh from the refinery to the
[36:08] factory then you would expect that it's
[36:10] going to be loaded with goods the
[36:11] refinery produces and if
[36:13] if the cargo ship is headed towards the
[36:14] you know the refinery then
[36:16] it you know then it likely has raw ore
[36:18] that needs to be you know processed et
[36:19] cetera and so the point being
[36:21] designers don't need to you know with
[36:24] the with the with the dynamic mission
[36:26] system they don't need to fill in things
[36:27] like hey for this cargo transport
[36:29] mission
[36:30] what kind of cargo you know does it have
[36:32] uh should it be beat up or should it be
[36:34] in pristine condition
[36:35] should it have fighter escorts or you
[36:37] know or should it just be traveling solo
[36:40] um you know should it basically be
[36:43] you know a derelict husk in space that
[36:45] you stumble upon or should it basically
[36:47] you know be
[36:47] you know in in in perfectly fine
[36:49] pristine you know condition
[36:50] so these all become inputs to these
[36:52] setups so the designers set up
[36:54] the archetypes and the system fills in
[36:56] the inputs and what you wind up getting
[36:58] is you know an exponential increase in
[37:01] variety because all of a sudden
[37:03] designers aren't trying to hard code
[37:05] every single specific you know
[37:07] specific instance and so you can think
[37:08] of dynamic events as it's really just an
[37:10] evolution of that system that adds on
[37:12] some additional
[37:13] you know back-end coordination and
[37:17] uh and those those those modifiers that
[37:19] i talked about earlier to where dynamic
[37:20] events really do
[37:21] they grant the designer the temporary
[37:24] capability
[37:24] to nudge certain things in the
[37:26] simulation
[37:28] a particular way uh you know whether you
[37:30] know whether it be
[37:31] new items added to a shop's inventory
[37:33] whether it be uh
[37:35] additional demand for an item at a
[37:37] particular shop
[37:38] whether it be you know uh you know uh
[37:41] missions that are gonna be offered here
[37:43] uh you know all of those sorts of you
[37:45] know sorts of things and so i mentioned
[37:46] like population control you can see
[37:48] uh you know a fleet week in the future
[37:50] will be a dynamic event
[37:52] and when that event is going on we're
[37:53] going to turn the dial and crank up the
[37:55] population you know we're going to wind
[37:57] up doubling it you know because you'd
[37:59] expect to see a lot of people coming to
[38:00] see that show
[38:01] and then when the event dissipates then
[38:02] we'll basically turn the turn that dial
[38:04] back down the population will
[38:05] you know uh recede back to its normal
[38:08] levels in other words
[38:08] it's a special event that we've come in
[38:10] we've added a ton of
[38:12] custom content mpc conversations all the
[38:15] stuff geared towards that and so we kind
[38:16] of view it as
[38:17] one big comprehensive designer driven
[38:20] package
[38:21] that can be merged with all of this you
[38:24] know this back end systemic you know uh
[38:26] background
[38:29] i'm sorry i got distracted there was a
[38:30] ascii art of tyler wearing a
[38:33] american top hat thing it was weird um
[38:36] you you mentioned you mentioned that uh
[38:39] you know there's a specif there's
[38:41] there's the systemic triggers
[38:42] the things that you know that can
[38:44] trigger all these things by
[38:46] by just meeting criteria and then the
[38:47] manual triggers uh some of the folks in
[38:49] the chat are asking if the manual
[38:51] triggers are akin to like
[38:53] the old gm events that you that you
[38:55] would see in
[38:56] in uh older mmos where where where you
[39:00] know
[39:00] a design in this case a designer as
[39:01] opposed to a gm can come in and
[39:03] just create a one-time event that would
[39:05] occur
[39:06] that that that's exactly it and some of
[39:08] these will be one time like the xena
[39:10] thread or a particular fleet week or
[39:11] other other ones will basically just add
[39:14] to our library of things and you know
[39:16] you know that we can activate simply
[39:18] because we want to liven up the place
[39:20] the nine tails i don't want to go into
[39:22] you know the nine tails i don't want to
[39:23] go into like the detail because
[39:24] you know there's some cool stuff that
[39:26] we'll be introducing
[39:27] that players haven't you know that they
[39:29] haven't really seen before so i want to
[39:30] kind of you know keep
[39:31] you know keep some of it under under
[39:33] under wraps um
[39:35] but it's it's it's very representative
[39:37] of some of the
[39:39] bits of functionality that we're
[39:40] introducing in there will then be
[39:43] exploited
[39:43] in more dramatic fashion in in
[39:46] subsequent you know dynamic events
[39:48] like a uh one high level example would
[39:51] simply be
[39:51] the nine-tail stuff is kind of geared
[39:53] towards a certain area
[39:54] you know basically being you know locked
[39:56] down as a result of aggression
[39:58] um and in the future what we're gonna
[40:01] wind up having is
[40:02] if the player community doesn't beat
[40:05] back that particular threat
[40:06] then it will grow and all of a sudden
[40:08] you've got two or three or four
[40:10] different areas locked down in other
[40:11] words you
[40:12] you the player community have to respond
[40:14] and tamp out this fire
[40:16] or else it will gradually grow now it's
[40:18] possible of course depending upon how we
[40:20] set it up and what the current inputs
[40:21] it's like
[40:22] the npc population in some cases may
[40:24] eventually respond sufficiently to do it
[40:26] um but but but you get you know the
[40:28] overall effect which is
[40:29] the this the this one event that's
[40:31] geared towards locking down an area
[40:33] the area to be locked down is you know
[40:35] is an input
[40:36] and we can feed it one we can feed it
[40:38] three we can basically add a little bit
[40:40] of back-end logic controls
[40:41] and then that and then which ones are
[40:43] locked down can be replicated across
[40:45] all of the servers so the community as a
[40:47] whole is fighting just like they are in
[40:49] xeno threat
[40:50] against this common thread that just so
[40:53] that that
[40:54] i'm just going to do this for clarity's
[40:55] sake a lot of the folks have been asking
[40:57] whether xenothread specifically is a
[40:59] one-time event
[41:00] to play it and it's never back or
[41:02] whether it may come back uh i know from
[41:04] internal conversations we're reserving
[41:06] our options there whether you know
[41:08] xenothread is going to be a one-time
[41:09] thing or
[41:10] it's going to come back but we have the
[41:12] option though
[41:13] that's that's the important part for
[41:15] this conversation is that we can do
[41:17] these
[41:17] one-time limited events that occur in
[41:20] star citizen's history
[41:22] and when they're done they never return
[41:24] ever again
[41:25] or we can do ones that are recurring or
[41:27] we can do ones that build
[41:29] upon each one where it's like it's like
[41:30] this is a one-time thing but it leads
[41:32] into another event
[41:34] x number of months later leads into
[41:35] another event x number of months later
[41:37] and that's how we start adding a
[41:39] persistent and long-form storyline
[41:41] to the persistent universe yeah this one
[41:44] you know the xenothread is basically you
[41:46] know attacking harassing the uee
[41:48] um and you're you know you're there to
[41:50] basically help you know
[41:51] uh to help you know beat back you know
[41:54] some of the specific challenges
[41:56] to basically salvage material to restock
[41:58] the javelin defend transport ships you
[42:01] know to you know to the same
[42:02] effect all this type of stuff um in the
[42:04] future there
[42:05] may very well be ones where you actually
[42:07] have to go into
[42:08] you know you know occupied space so it's
[42:12] really dangerous to get there infiltrate
[42:13] bases
[42:14] retrieve stuff bring it back and then
[42:16] what we'd be measuring is well how much
[42:17] you know total
[42:18] information or assets or stolen ships
[42:21] that you've retrieved et cetera how many
[42:23] have you know has the community pulled
[42:24] back and again
[42:25] that well i keep referring to like the
[42:27] community because in general these
[42:28] dynamic events
[42:29] are meant to be things that apply across
[42:32] the entire
[42:33] spectrum of servers and not isolated
[42:36] onto
[42:36] a you know just one individual instance
[42:38] um if you're talking about just an
[42:40] individual server instance then you're
[42:41] really talking more of you know like i
[42:42] said earlier with like the dynamic
[42:44] missions to where
[42:45] if if it's all on one server then you
[42:46] don't need all this back-end
[42:48] coordination and variable maintenance
[42:49] and you know phases and all that you can
[42:51] literally just
[42:51] run it with your normal you know
[42:53] subsumption mission logic
[42:55] um let's look at some of the questions
[42:57] from the live chat here
[42:59] uh some of these we've touched on but
[43:00] we'll go ahead and ask them just for
[43:01] clarity's sake
[43:02] um oh as far as the size of dynamic
[43:07] events
[43:08] uh are are they limited in scope until
[43:10] quanta is
[43:11] fully on on board and up and running or
[43:14] will they always just be some of them
[43:16] smaller some of them
[43:17] massive uh is there a scale you have in
[43:20] mind
[43:21] but it's actually exactly it's both it's
[43:23] like some of them will be really large
[43:25] like xeno threat it puts the whole you
[43:26] know solar system you know if they're
[43:28] you know theoretically under stress
[43:29] under threat uh others will be much more
[43:32] localized that that is like our first
[43:33] test
[43:34] like for this nine tails lockdown it's
[43:36] much more localized as a threat to
[43:37] a specific landing zone so if you have
[43:40] no interest
[43:41] in that particular landing zone and the
[43:42] shops that are have been you know
[43:44] have been cut off you know from the
[43:45] world and aren't be and aren't able to
[43:48] get the supplies that they need and
[43:49] therefore they're all calling out for
[43:50] help and the price is going through the
[43:51] roof what they pay to get medical
[43:52] supplies and all this other stuff
[43:54] um then you can you know then you can
[43:56] largely ignore it and so
[43:58] the the idea is again it's like we're
[44:00] building a library and what you know big
[44:02] you know invasion you know you know
[44:04] fleet invasions you know of a solar
[44:06] system
[44:07] smaller things which is you know just a
[44:08] particular you know pirate gang
[44:10] assaulting a particular landing zone
[44:12] will have you know infiltration stuff
[44:13] it's really again it's like
[44:15] uh you're you're aiming to get the tools
[44:18] to allow the designers to basically
[44:21] express
[44:21] solutions to all of these you know
[44:23] dramatically different scenarios
[44:26] um now it's we've mentioned quantum and
[44:30] quantum well not several times during
[44:32] the show for folks who have been
[44:34] watching and i'm looking at the chat
[44:35] here that don't know what we're talking
[44:36] about
[44:37] there is a nice hour-long about
[44:39] presentation available on our youtube
[44:41] page
[44:42] from citizencon 2949 where tony
[44:44] introduced the entire concept of quanta
[44:46] we don't want to
[44:47] waste our remaining minutes here just
[44:48] regurgitating what's already been shared
[44:50] that said it has been more than a year
[44:53] since we've
[44:54] since we've heard about it since we've
[44:56] heard from you uh i know we have that
[44:58] presentation coming in the next x number
[45:00] of months
[45:02] without spoiling that can you give us a
[45:04] bit of an update on
[45:05] how things have been progressing whether
[45:07] you're happy with where where we're at
[45:09] right now
[45:09] um yeah it's it's come a long way um
[45:13] all the you know the typescript logic
[45:15] has been redone in c sharp for the ai uh
[45:18] which basically resulted in you know
[45:20] somewhere in the range of you know three
[45:21] order of magnitude
[45:22] increase so we we can basically easily
[45:26] simulate
[45:26] several million quanta um you know and
[45:29] we can do that at you know
[45:30] at multiples of normal speed and that's
[45:32] important because
[45:33] we need to be able to tweak certain
[45:36] levers let the simulation run for an
[45:38] hour and then see how
[45:39] stuff kind of balanced out and what kind
[45:41] of uh you know what kind of limits
[45:43] uh we hit on certain things did prices
[45:45] ever get too out of whack here
[45:47] was you know did the the offering price
[45:49] for particular mission ever get you know
[45:51] completely you know
[45:52] ridiculous given these parameters that
[45:53] we'd set up um there's
[45:55] been we're we're in the final stages now
[45:59] of starting to
[46:02] connect quantum to some of the back-end
[46:06] services so that they're actually
[46:07] feeding
[46:08] data from the simulation to the services
[46:10] the services will have long been
[46:12] feeding that information then to uh to
[46:15] you know to the actual game servers and
[46:16] then basically receiving it back
[46:18] like uh one of the one of the most uh
[46:20] recent examples here is
[46:22] uh just yeah and it's kind of related to
[46:23] the dynamic event shot modifier stuff
[46:25] which is
[46:26] the potential to add items you know add
[46:29] new items
[46:30] to a particular shop so right now that
[46:32] inventory has always historically been
[46:34] fixed and so
[46:35] now with the modifier since we can add
[46:37] something it's the same thing you'll see
[46:38] in quantum which is shops may
[46:41] occasionally change
[46:42] some of their inventory items and so it
[46:43] turns out that there's a little bit of
[46:44] work we
[46:45] need to do on the game server in order
[46:46] to support that um
[46:49] there are there there's been
[46:53] uh a lot of you know a lot of focus on
[46:56] basically getting you know extracting
[46:58] you know chunks of information from uh
[47:00] you know the service beacons that we
[47:02] demonstrated before we were generating
[47:04] the events but they weren't actually
[47:05] making where they were in the back end
[47:06] uh so that information will be filling
[47:08] up in other words where
[47:10] you see calls for assistance calls for
[47:12] combat assistance for you to come you
[47:14] know
[47:14] will in you know in the not too distant
[47:16] future be dictated
[47:18] via that quantum simulation um the you
[47:21] know the
[47:22] the the price of fuel will be dictated
[47:24] by what you know how much of a
[47:25] you know how much of a load there is in
[47:27] that particular area and all these
[47:29] things take time because
[47:30] the the previous iteration we showed of
[47:33] quantum as you got all these quantity
[47:34] going around
[47:35] they didn't uh they didn't have at that
[47:37] time any concept of
[47:39] fuel or you know efficiency in terms of
[47:42] what ship they were flying and how much
[47:43] fuel it consumed
[47:45] um they basically got transport you know
[47:47] for free and so a lot of those type of
[47:49] things are being wrapped up
[47:50] we spent uh relatively recently a good
[47:53] bit of time
[47:55] um getting quantum the service to
[47:58] actually
[47:59] ship to basically be built and ship with
[48:01] the game so we're not currently
[48:02] exploiting it
[48:03] but it's there right alongside you know
[48:06] you know a litany of all these other
[48:07] services
[48:08] so that piece which you know which was a
[48:10] significant effort
[48:12] is now in and done and basically what
[48:14] that means is we've got the
[48:15] we've got the basic elements of plumbing
[48:17] to get all this information you know
[48:19] going back and forth
[48:21] and what we're focused on right now is
[48:23] actually you know
[48:24] is is realizing some of that stuff star
[48:27] citizen
[48:27] we've got the plumbing
[48:33] if we plug tony z into the servers would
[48:35] they go faster
[48:38] i'm imagining like remember superman 3
[48:41] where the where the gal gets
[48:43] plugged into the servers let's see what
[48:44] else we got
[48:47] will some of the dynamic events allow us
[48:50] to choose sides
[48:51] if we're more into the outlaw phase the
[48:53] threat has everybody on one side right
[48:55] but not but it's not really i mean
[48:56] you're you're you're encouraged to be on
[48:58] one side and yet
[48:59] plenty of players are electing to
[49:00] basically you know
[49:02] they're not actually they're not able to
[49:04] ally you know with the xeno threat
[49:06] but they're certainly not being you know
[49:08] friends to
[49:09] you know to the local security forces so
[49:11] yeah yes we will
[49:13] we've actually got you know you know
[49:15] some of that stuff like in
[49:16] the ninetails lockdown we're starting to
[49:17] play with some of those concepts to
[49:19] where
[49:19] you can be that you can basically work
[49:21] on the side of the guys helping to keep
[49:22] it locked down or you can basically work
[49:24] on the side of the guys trying to
[49:26] break that blockade and basically you
[49:28] know free that free that area
[49:30] so the the the fact that there isn't a
[49:33] a way to officially plug in with the
[49:36] other side in xeno thread isn't
[49:37] indicative of
[49:38] some future design direction it's just
[49:40] that's not what this one not not at all
[49:42] in fact it's actually quite the opposite
[49:43] because
[49:44] as is always the case with star citizen
[49:45] um and
[49:47] you you know you you saw you see this
[49:48] with so many things that we did with
[49:50] xeno threat right like
[49:51] with xeno threat we kind of started out
[49:53] with okay we're gonna have big
[49:54] you know we have capital ships so any
[49:56] player with bombers they're set and then
[49:58] the concern was wait a lot of players
[49:59] don't have bombers how are they going to
[50:01] contribute
[50:02] what if i've got to horn it and so we
[50:04] introduced the concept of okay we'll
[50:06] have a lot of support
[50:07] you know light fighters supporting these
[50:09] ships and you can win you can basically
[50:10] make
[50:11] uh the the make the idris uh you know uh
[50:14] retreat and therefore tim you know win
[50:16] that battle simply by taking out all
[50:18] those light fighters
[50:19] but and so all of a sudden now it's like
[50:22] regardless of which
[50:22] you know whether you've got the the
[50:24] heavy bomb or whether you've got the
[50:25] light fighter
[50:26] you can contribute but that still left
[50:27] the problem of well what if
[50:29] you know what if i'm not the kind of
[50:31] player that wants to do tons and tons of
[50:33] endless ship combat
[50:34] what do i get to do in this xeno threat
[50:36] thing and that's where the thing you
[50:37] know that's where we
[50:38] started thinking hey let's have this
[50:40] whole salvage aspect where the javelins
[50:42] come in you're basically restocking them
[50:44] so now someone's got to go
[50:45] out and basically get the materials and
[50:47] of course we've got to have a little bit
[50:48] of fps combat you know on that
[50:50] but then all of a sudden that forces you
[50:52] into that fps mode so
[50:53] we start looking and thinking what if i
[50:56] actually do like the ship combat
[50:58] but i you know but i want to be able to
[51:00] contribute to the restocking and not
[51:02] be forced into that well you've got
[51:04] transport ships going by you know going
[51:05] back and forth
[51:06] and on occasion you'll be asked to
[51:08] defend them and if you successfully
[51:10] defend them
[51:11] you basically wind up generating as much
[51:15] restocking benefit as if you were to
[51:17] fully salvage one of those derelict
[51:18] ships and so the point i'm making is is
[51:21] regardless of what exactly you know you
[51:24] want to do what you find interesting we
[51:26] try as much as possible
[51:28] to make sure that there's going to be
[51:30] you know a sufficient diversity
[51:31] diversity of interesting things to do
[51:33] such as you'll have a good time
[51:35] and so right at the very top of that
[51:36] list would be sure some a lot of players
[51:38] are going to on occasion
[51:40] want to be able to play the part of the
[51:42] bad guy some other players will want to
[51:44] you know play the part of the good guy
[51:46] and you know some players uh
[51:48] like if if you think about you know
[51:50] without going into too much detail on
[51:51] the nine tails you know lockdown
[51:53] when you're actually trying to deliver
[51:54] those supplies are you trying to
[51:57] simply quell to take out all of the
[51:59] pirates in that area basically remove
[52:01] the threat
[52:02] or are you basically just trying to
[52:04] transport goods in
[52:05] and basically take advantage of the
[52:07] sky-high prices that are temporarily
[52:09] being paid because no one else can get
[52:11] through that blockade and then
[52:13] if you're actually if you're one of
[52:14] those guys trying to transport those
[52:16] goods through
[52:16] all of a sudden there's a real need for
[52:19] you to
[52:20] hire via service beacon hire other
[52:21] people to protect you
[52:23] and so you've got escort potential you
[52:25] got back you know you can basically be
[52:26] the guys helping to lock it down you can
[52:27] be the guy helping to eliminate you know
[52:29] the threat
[52:30] there's many different ways to come at
[52:33] the you know
[52:33] at this particular situation depending
[52:35] upon what interests you
[52:37] and that is ultimately you know what
[52:39] where we're trying to go
[52:40] all across the game yeah uh plug-ins for
[52:44] players in different professions and who
[52:46] play different ways
[52:47] for people who just prefer the fps
[52:49] aspects you know things for them to do
[52:51] for the people who prefer ship combat
[52:52] for the people who prefer ship
[52:53] shipping stuff like that that said there
[52:56] have been a number of questions
[52:58] about drilling down to other specific
[53:01] aspects you just talked about
[53:03] making sure there's something for almost
[53:05] everybody in all these things
[53:07] but on the flip side would we ever
[53:09] consider because
[53:10] pvp is quite important for a lot of
[53:14] folks
[53:14] you know who play star citizen would we
[53:15] ever consider a pvp specific
[53:18] dynamic event or a dynamic event that
[53:21] has no combat at all
[53:24] well the the pvp stuff is you know
[53:27] something you always i mean if you're
[53:28] gonna have freedom you know some people
[53:30] are gonna basically
[53:31] you know want to get in there you know
[53:33] and muck it up you know for other people
[53:34] and so the the way that i
[53:36] would aim to address that type of stuff
[53:38] is basically
[53:40] uh yeah within the rules of the system
[53:43] in other words that that was why and
[53:45] again we're still in the early stages of
[53:46] the whole prison thing that that's why
[53:48] that's why we have a prison concept
[53:50] which is you can be a bad guy and
[53:52] if you get caught then you basically go
[53:54] you go serve your sentence and right now
[53:56] when i say the early stages i mean like
[53:58] right now escaping from prison
[54:00] equates to walking through you know a
[54:03] hole in the wall and basically assuming
[54:05] you actually know the escape route then
[54:06] you know then it's just a matter of time
[54:08] and that's another thing that you know
[54:10] we've got you know a few quarter dollars
[54:12] to basically do a major revision to make
[54:14] the entire process of escaping prison is
[54:16] going to be a challenge in and of itself
[54:17] and there's going to be multiple ways
[54:19] it's like are you talking about
[54:20] you know basically uh bribing guards are
[54:23] you talking about you know coordinating
[54:24] with other players you talking about
[54:26] being in the other guy that's simply
[54:27] trying to avoid the cameras and do the
[54:29] whole time
[54:30] thing you know of you know setting up
[54:31] distractions you know uh you know you
[54:33] know setting a fire in the utility
[54:34] closet to basically draw the guards over
[54:36] so you can go over here in other words
[54:37] how
[54:38] many different ways can we support
[54:42] uh you know such that you know a player
[54:44] can feel as if they've crafted their own
[54:46] particular solution to you know to the
[54:47] problem and as much as possible
[54:50] you don't try to hard code these things
[54:52] right you try to basically
[54:53] create uh you know a number of different
[54:56] systemic elements
[54:57] and what will inevitably wind up
[54:59] happening is players will find
[55:00] clever ways to exploit them to you know
[55:03] to you know to
[55:04] to you know to uh to particular effect
[55:07] we're actually seeing this right now it
[55:09] was a you know a bit of a headache in
[55:10] this morning's meeting when i was
[55:11] talking about the xeno threat stuff we
[55:13] were going through
[55:13] pvp and apparently you know some players
[55:15] have figured out this super clever way
[55:17] of
[55:17] very quickly sharing credits and getting
[55:19] out of prison etc
[55:21] and it's always the case right which is
[55:24] it's an ongoing battle
[55:26] when you when you when you provide a
[55:29] bunch of these raw elements
[55:30] people will find you know unintended
[55:33] ways of basically accomplishing their
[55:35] effect
[55:35] i personally have always loved that
[55:37] because that was always my favorite
[55:39] thing
[55:39] in in games was being able to craft
[55:45] what i felt was my own unique solution
[55:46] in other words what i don't want to do
[55:48] is expend
[55:49] copious amounts of time trying to figure
[55:51] out the one
[55:52] solution that the designer dictated
[55:54] would solve this particular puzzle i'd
[55:56] rather give players a bunch of you know
[55:58] these
[55:58] you know these these logical elements
[56:01] and they can string them together in all
[56:04] sorts of ways and that i kind of
[56:05] referenced that you know just you know
[56:06] briefly earlier like with the prison
[56:08] guard which is
[56:09] well if if prison guards respond
[56:12] as you know as they must to you know to
[56:14] audible events
[56:16] then if you can do something that you
[56:18] know that generates a noise over here
[56:20] then of course they should go to
[56:21] investigate
[56:22] and so a clever player would basically
[56:23] say hey like i can
[56:25] the same way that they'd go investigate
[56:27] a noise and all and that would become
[56:29] a problem for you if you're trying to
[56:31] infiltrate an area
[56:33] um can actually become a great means for
[56:36] you to temporarily distract them so that
[56:37] you can get through you know
[56:39] you know a door to escape the prison et
[56:41] cetera and so
[56:42] uh all of this stuff i mean it comes
[56:45] back to the same thing which is
[56:46] giving players the the the freedom
[56:50] to basically play the game how they want
[56:52] and having the system
[56:54] push back in logical fashion so if we
[56:56] don't want a lot of player versus player
[56:59] you know stuff in this area then we
[57:01] should bring
[57:02] logical elements of the game more you
[57:05] know more security
[57:06] you know larger you know penalties in
[57:08] that particular area
[57:09] things of that sort to you know to
[57:11] discourage it it's still possible
[57:13] but you know but all of a sudden you
[57:15] know you you so you i wouldn't aim to
[57:17] reduce it to zero or you know to make it
[57:19] impossible because
[57:20] impossible to me is is never
[57:23] particularly fun
[57:24] i'd rather make it so that if you want
[57:26] to basically
[57:27] accept you know the the consequences of
[57:30] your actions then more power to you and
[57:32] in some places
[57:33] in some places those consequences will
[57:35] be you know fairly minimal in other
[57:37] places
[57:38] they'll be quite large and you see this
[57:40] across the law system where we've got 40
[57:41] different infractions
[57:42] and some things are viewed as you know a
[57:44] minor little infraction
[57:46] you basically pay you know pay a fine
[57:47] other things actually lock you into
[57:49] prison and right now like i said
[57:50] it's fairly easy to escape prison it
[57:52] won't be in the future that will
[57:53] actually
[57:54] become a much more significant challenge
[57:57] so it's it sounds like uh
[58:00] the approach that we will generally take
[58:03] is a
[58:04] try to plug as many different groups and
[58:06] peoples and play styles into these
[58:07] events as possible try to provide
[58:09] something for
[58:10] as many play styles as we can including
[58:12] pvp
[58:13] yeah yeah okay yeah and then the pvp is
[58:16] just
[58:16] it's it's an inch it's a you always have
[58:19] to be sensitive to it because a small
[58:21] number of players can always ruin the
[58:22] experience for a lot of other people and
[58:24] so you do have to put
[58:25] you know that's not pvp though yeah but
[58:28] but again but how are you going to deal
[58:30] with that and certainly
[58:31] you know there are some aspects you know
[58:33] uh to where you take you know
[58:34] administrative you know action but in
[58:36] general to me
[58:37] if you have to take administrative
[58:38] action it usually signifies that you
[58:40] failed at something within the game
[58:42] right it's like
[58:42] in the real world if i go out and i
[58:44] wreak havoc uh you know that there will
[58:46] be very real and obvious consequences
[58:48] that you you know quickly suffer and it
[58:50] should be the same thing in a game to
[58:51] where
[58:51] you can do it but you better be
[58:53] extremely you know clever about how you
[58:55] go about it or
[58:56] you know or you know or or else the
[58:58] system's going to respond in you know in
[58:59] logical fashion
[59:01] all right well tony that's it we made it
[59:04] to the end
[59:05] you got anything else you want to you
[59:07] want to leave people with any any any
[59:09] final thoughts before
[59:10] uh xeno threat our first dynamic event
[59:12] makes its way to the live servers
[59:14] sometimes uh no other than just uh if
[59:17] you haven't watched we talked about the
[59:18] quantum stuff
[59:19] um if uh for for people that aren't
[59:23] familiar with it they don't necessarily
[59:25] need to go back and watch that thing
[59:26] since we will be
[59:27] you know doing a you know a pretty a
[59:30] relatively comprehensive update
[59:32] um it won't be as singularly focused on
[59:35] that because there's several other areas
[59:37] that i want to cover in at least brief
[59:38] fashion everything you know
[59:39] uh virtual ai and you know and a number
[59:41] of other things um
[59:42] so it's probably like i said you know a
[59:45] few months out give or take
[59:47] um and we're hoping to be able to show
[59:50] some
[59:50] concrete examples of how some of this
[59:52] you know some of this
[59:53] technology is actually now integrated
[59:55] into the game
[59:57] awesome well thank you so much tony uh
[59:59] if the
[1:00:00] folks in the chat had their way you do
[1:00:02] this once a month every month for the
[1:00:04] rest of your life
[1:00:05] uh but i understand that you actually
[1:00:06] have a job uh ironically if
[1:00:08] you know if we did that then there would
[1:00:10] be less to discuss you wouldn't get as
[1:00:11] much done
[1:00:11] there what there would anyone yeah so
[1:00:13] yeah so thank you so much i'll let you
[1:00:15] get back to work
[1:00:16] uh everybody watching thank you so much
[1:00:18] for tuning in this has been star citizen
[1:00:20] live
[1:00:21] uh dynamic events with tony zurovec i'm
[1:00:23] jared huckabee uh
[1:00:24] tune in on thursday of next week to
[1:00:26] check out an isc all about
[1:00:28] how we brought those capital ship
[1:00:29] battles uh into the persistent universe
[1:00:31] and the work that went into that
[1:00:32] and uh what's next for them in the
[1:00:34] future and then we'll be right back here
[1:00:36] with another star citizen live next
[1:00:37] friday so take care everybody
[1:00:39] see you laters
[1:01:05] you

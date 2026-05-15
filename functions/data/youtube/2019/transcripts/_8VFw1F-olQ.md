# Star Citizen: CitizenCon 2949 - Building a Dynamic Universe

**Video:** https://www.youtube.com/watch?v=_8VFw1F-olQ
**Date:** 2019-12-06
**Duration:** 1:00:44

## Transcript

[00:15] [Applause]
[00:23] can we get those lights brighter okay so
[00:29] hi I'm Tony Zurich and I'm the director
[00:31] of persistent universe for star citizen
[00:39] I'll be doing the lead vocals tonight
[00:41] and over here on my right on the
[00:44] keyboard is Jake mealy our economy
[00:46] designer from Austin ok and we're gonna
[00:53] be showing you something pretty
[00:54] interesting tonight and I want to make
[00:57] sure to call out our guitar and bass
[00:59] players back in Montreal Martin and
[01:01] Rivera Lisey yesterday they spent a lot
[01:04] of time working with us over the last
[01:06] you know four or five six months you
[01:09] know very very intensely on what we're
[01:12] gonna be revealing tonight it's been a
[01:14] bit of a stealth project recently we've
[01:16] actually shown it to very few people
[01:18] within cloud imperium because we wanted
[01:20] to get it to a level of maturity to
[01:22] where it was very easy for people to
[01:24] understand what the benefits of this new
[01:26] technology were going to be and I'm
[01:28] gonna give you a glimpse of it tonight
[01:31] but you're gonna need some background
[01:32] information to truly appreciate it so
[01:34] bear with me for a bit and you'll see
[01:35] why we consider it quantum leap
[01:40] so as everybody here obviously knows
[01:43] star citizen is a very ambitious project
[01:45] our goal is to deliver a variety of
[01:49] incredibly detailed solar systems that
[01:51] behave in logical fashion and that they
[01:53] can give you ample freedom to follow
[01:54] your interests whatever they may be thus
[01:57] far we've been focused entirely on a
[02:00] single system staunton which includes
[02:02] four planets twelve moons 225 economic
[02:06] nodes 44 trading outposts 13 rest stops
[02:10] and 50 asteroid fields so yeah it's
[02:13] really big the point of this
[02:15] presentation then is to give you a
[02:17] better understanding of how when the
[02:18] first one's taken so long we're aiming
[02:20] to kick things into overdrive so that we
[02:22] can deliver new systems much more
[02:24] quickly this involves obviously a lot of
[02:27] different areas procedural generation of
[02:29] terrain modular art sets
[02:31] detailing of buildings and interiors and
[02:34] a lot of other stuff for the purposes of
[02:36] this talk though I'm gonna focus on what
[02:39] I call the dynamic content so what is
[02:43] dynamic content dynamic content responds
[02:48] to player and NPC actions in logical
[02:49] fashion its systemic this means that the
[02:53] universe is in constant motion which
[02:55] makes it a far more interesting place to
[02:56] explore most missions should of course
[02:59] be dynamic in nature they should only be
[03:01] offered when there is an actual need for
[03:03] something this might take the form of a
[03:05] factory that needs some aluminum to
[03:07] create a retail product a criminal that
[03:09] needs to be brought to justice or
[03:11] someone that keeping them from one
[03:12] location to another at their core
[03:15] missions or services provided by one
[03:17] party for the benefit of another and
[03:19] they are therefore one of the
[03:20] fundamental ways by which imbalances in
[03:22] the economy can be addressed likewise
[03:26] economic nodes which include things like
[03:28] refineries factories and retail shops
[03:30] need to be dynamic since they must
[03:32] continually take into account the
[03:33] various market forces and adjust
[03:35] accordingly when demand for something
[03:38] outstrip supply whether it's iron ore
[03:41] bullets or ship repairs you expect
[03:43] prices to rise and conversely when
[03:46] there's an excess of something you
[03:47] expect that prices will fall there's
[03:49] more to it of course concepts like
[03:51] marginal demand and price discovery
[03:53] require a fair bit of math but in the
[03:56] end it's all about the constant search
[03:58] for equilibrium as production and
[04:00] consumption levels vary I'll get around
[04:03] to explaining probability volumes in
[04:05] more detail in a bit but suffice to say
[04:06] for now that they dictate what you
[04:08] encounter as you travel through a given
[04:10] area as such they should definitely be
[04:13] dynamic so for example if a new field of
[04:16] asteroids rich and valuable commodities
[04:18] is discovered you'd expect to find a lot
[04:21] of NPC miners in the area but as the
[04:24] resources are gradually depleted their
[04:25] numbers should start to fall off pirates
[04:28] should gravitate toward areas with a lot
[04:30] of value to plunder and recoil as the
[04:31] amount of security ticks out so let's
[04:34] look into each of these areas in a bit
[04:36] more detail and see why we've struggled
[04:38] to set up a single solar system and at
[04:39] the same time get a precise
[04:40] understanding of what needs to happen so
[04:43] that we can start moving a lot faster
[04:46] we'll start with the missions a star
[04:50] citizen mission is fundamentally just a
[04:52] container for code and data similar in
[04:54] concept to a class in any of a multitude
[04:56] of modern a programming languages inputs
[04:59] can be passed into a mission from either
[05:00] the runtime environment or services to
[05:03] allow for customization this allows
[05:06] designers to do things like say inject
[05:09] the type and quantity of cargo whether
[05:11] the ship should be damaged or not where
[05:12] the ship should be heading into a
[05:14] generic transport scenario so that we
[05:17] can reuse the same framework for a lot
[05:18] of different situations missions can
[05:21] have content tags embedded within
[05:23] themselves to denote their composition
[05:25] or whether they contain security pirates
[05:26] freighters miners asteroids or some kind
[05:29] of accommodation missions can also have
[05:32] somatic tags applied these don't specify
[05:34] physical content but rather detail the
[05:37] headlines story behind the scenario that
[05:38] a designer created so designers can
[05:41] differentiate between a straightforward
[05:42] pirate encounter versus one that
[05:44] includes an ambush once these
[05:47] descriptors have been assigned the
[05:48] missions are injected into a database
[05:49] that other systems can access so that
[05:51] they can be instantiated and customized
[05:53] depending upon the situation this
[05:57] however is where we start to run into
[05:58] some major problems designers have to
[06:00] explicitly link missions to various
[06:02] constructs within the game an NPC
[06:04] mission giver for example or a
[06:06] probability volume covering the area
[06:07] around yellow this is time-consuming and
[06:10] greatly complicates maintenance if a
[06:13] Content tag like pirate is split into
[06:15] sub tags like pirate light and pirate
[06:17] heavy so that we can have more control
[06:19] over what we're aiming to instantiate
[06:20] you have to go to every place you design
[06:22] the original mission category and
[06:24] individually determine which of the new
[06:25] ones should be enabled worse this isn't
[06:29] dynamic at all mission content is fixed
[06:32] to do specific NPCs and locations so
[06:34] there's no evolution the universe is
[06:36] completely static another major problem
[06:38] is that we don't have sufficient context
[06:40] to properly customize the missions at a
[06:42] macro level the game doesn't really
[06:44] understand the concept of a route much
[06:45] less what miners traversing that route
[06:47] should be carrying or what condition
[06:49] they should be in or which direction
[06:50] they should be if they're going you know
[06:52] if they're empty heading towards a mine
[06:53] or full bringing the results of their
[06:56] efforts back to a refinery
[06:57] this lack of context means that we can't
[07:00] exploit emissions ability to have
[07:02] information injected into it for
[07:04] customization and that means that you
[07:05] see a lot less diversity despite
[07:07] requiring just as much work the last
[07:10] problem and it's a big one is that
[07:12] there's no NPC regulation of the mission
[07:14] content missions are the basic units of
[07:17] work for the economy and if someone
[07:19] doesn't do what needs to be done then
[07:20] everything grinds to a halt in a
[07:23] properly functioning system NPCs need
[07:25] the ability to step up if players aren't
[07:28] going to and the risk award justifies
[07:29] the effort and do the work themselves if
[07:32] a commodity can be purchased at one
[07:34] location and sold at another for a
[07:36] dramatic markup and there isn't enough
[07:37] cost or risk involved in a transport to
[07:40] warrant the different the differential
[07:41] NPCs should seize the opportunity and
[07:43] move the material themselves until the
[07:45] price starts to make sense so let's talk
[07:49] about economic nodes now an economic
[07:51] node is an entity within the game which
[07:54] might be represented via an actual
[07:55] storefront a kiosk a UI interface or an
[07:58] NPC that possesses an item manifest
[08:01] detailing the items that wants to buy or
[08:03] sell storage capacity and a fair bit of
[08:05] data related to determining prices this
[08:08] includes refineries that process or
[08:10] factories that produce goods and retail
[08:12] stores where you buy finished products
[08:14] factory inputs aren't explicitly denoted
[08:17] but are instead derived from the
[08:19] production formulae of whatever they
[08:20] manufacture prices what economic nodes
[08:24] are willing to pay for their inputs and
[08:26] what they want in order to sell are
[08:27] determined algorithmically based upon
[08:29] the rate of change of their of their
[08:31] inventory versus the tangent of our
[08:32] pricing curve this means that they're
[08:37] smart enough to say raise the price of
[08:39] what they're selling even when their
[08:40] inventory is low if they detect that
[08:42] they're being resupplied at a sufficient
[08:43] rate to get where they want to be in a
[08:45] reasonable amount of time so clearly
[08:47] there's some dynamism happening here
[08:49] which is fantastic unfortunately that's
[08:52] where the good news ends
[08:59] as with missions economic knows don't
[09:02] have any real context in terms of supply
[09:04] and demand and there's no systemic flow
[09:06] of goods throughout the economy why does
[09:08] the refinery want or why is an MPC
[09:10] willing to buy some drugs for you from
[09:13] you where does the shop get the goods
[09:15] that it's selling right now the answer
[09:17] to all these questions is the same we
[09:19] fake it
[09:20] economic nodes conjure up their own
[09:22] supply and demand out of thin air if a
[09:24] node is designated as wanting to
[09:26] purchase a particular item for example
[09:27] designers dictate a formula that
[09:29] describes how that inventory will be
[09:31] gradually burned off so that they want
[09:32] more these products you deliver to a
[09:34] node then they don't actually go
[09:36] anywhere there's no real demand this is
[09:39] impossible to balance because while
[09:41] production and consumption are fixed the
[09:44] player count isn't sometimes a hundred
[09:46] players are interacting with an economic
[09:48] node and sometimes none and I mention
[09:51] this because behind the scenes at the
[09:55] economic level all of the players
[09:56] despite being on different servers
[09:58] really are connected to one single
[10:00] system a real economy is a tangled web
[10:04] of dependencies and you can't expect
[10:06] logical results when it's gears can
[10:08] completely seize up due to the action or
[10:10] inaction of players
[10:12] what we really need then is NPC
[10:14] regulation of the system for NPCs to
[10:16] purchase items when they need them thus
[10:18] keeping the demand side logical while
[10:20] stepping in to help with the supply when
[10:22] players down and the risk reward
[10:23] warrants it this has ripple effects in
[10:26] two other areas if the demand for
[10:29] missiles spiked because there was a lot
[10:30] of combat you'd expect that the
[10:32] commodities used to construct those
[10:33] missiles would start to rise in price
[10:34] and you'd also expect to see more miners
[10:36] and freighters working to alleviate that
[10:38] shortage if the price got high enough
[10:41] that those transports would be carrying
[10:42] a lot of value so part you know you'd
[10:44] expect piracy to increase at which point
[10:46] you should start to see a lot more
[10:48] security patrols and requests for combat
[10:50] escorts a simple change in demand men
[10:53] should be able to alter not only what
[10:55] you see as you travel throughout the
[10:56] system but also the available missions
[10:58] these kinds of knock-on effects in fact
[11:01] should happen regardless of whether any
[11:02] players in an area and that's a separate
[11:04] problem I'll talk about more when we get
[11:06] a probability volumes
[11:08] so let's take a quick look at what it
[11:11] means to set up an economic node as I
[11:13] mentioned there are about two hundred
[11:14] and twenty five economic nodes within
[11:16] the stanton system and many of them deal
[11:18] with a lot of different items each of
[11:21] these items can specify its own
[11:22] production or consumption formula along
[11:24] with a lot of other information storage
[11:26] space optimal inventory level price
[11:29] offsets and much more this information
[11:31] can be archetypes but of course the
[11:32] world's a lot more interesting if every
[11:34] economic node is a bit different so
[11:36] there's still a lot of customization
[11:38] that winds up happening so now let's
[11:44] take a look at the economic nodes around
[11:46] a typical planetary system and finally
[11:57] let's take a look at the economic nodes
[11:58] around the entire stanton solar system
[12:02] that's a tremendous amount of data to
[12:04] set up and maintain as we're routinely
[12:06] adding new items and changing prices and
[12:08] the worst part is that it's all
[12:10] extremely rigid there's no way to have
[12:11] an economic node increase how much of
[12:13] something it produces or consumes
[12:15] because those things are attached to
[12:16] formulate that have no understanding of
[12:18] external events so right now designers
[12:22] try their best to brute force this stuff
[12:24] to make it feel like it's a systemic
[12:25] world even if it's not if an area is
[12:28] configured to have a lot of pirates they
[12:30] increase the price offsets and demand
[12:32] for goods at nearby nodes if the number
[12:34] of pirates is subsequently decreased or
[12:36] maybe more security is added to the area
[12:38] and the nodes are updated to reflect
[12:39] that fact it's a ton of work and while
[12:42] this sort of hand tweaking does yield
[12:45] something that feels vaguely logical if
[12:47] static it's definitely not a real
[12:49] solution and it doesn't even begin to
[12:50] address the major problems now we come
[12:55] to the last of the major areas for which
[12:57] I wanted to illustrate the problems that
[12:58] we currently face so what is a
[13:01] probability volume of a probability
[13:03] volume is an area of space that contains
[13:06] information detailing what you should
[13:07] see is you pass through the area it's an
[13:10] optimization of sorts in that it allows
[13:12] us to achieve a desired effect a certain
[13:16] number of pirates in an area or a
[13:17] particular likelihood of encountering a
[13:18] freighter filled with iron
[13:20] without having to burn a lot of
[13:21] computational horsepower simulating
[13:23] things when there are no players around
[13:25] to see it this is accomplished to be a
[13:27] linking mission content tags to
[13:29] probability curves that span all or part
[13:31] of the expanse of the volume so for
[13:33] example you can denote that security
[13:35] ships are commonplace in airport olace
[13:37] are and gradually fall off over a couple
[13:39] hundred kilometers whereas it's very
[13:41] rare to see pirates who would prefer to
[13:43] avoid security close to port olisar but
[13:46] more likely to see them as you get
[13:47] farther away there are quite a few
[13:50] different types of curves denoting there
[13:52] are quite a few different types of
[13:53] curves because and because until a
[13:58] player actually accepts one of these
[13:59] missions as it heads to that location
[14:01] there are variety probabilities I think
[14:03] so our notes got screwed up here anyway
[14:06] so one of the more interesting types of
[14:08] curves is the spoofing curve which
[14:10] allows missions to skirt the normal
[14:11] rules requiring that they can only be
[14:13] created in the proximity of a player and
[14:15] this is done so that an NPC can request
[14:18] that you travel to them to provide
[14:20] something they desire which case
[14:21] obviously we can't limit them to only
[14:23] existing in your immediate and yours or
[14:25] in other players immediate proximity
[14:27] this is how combat assist is currently
[14:30] handled and we'll be adding some other
[14:31] things like NPC refuel and NPC passenger
[14:34] transport in the near future the reason
[14:37] it's called spoofing
[14:38] is because we only keep a small stub
[14:40] active on the back end which is way more
[14:41] efficient we've got other types of
[14:44] curves there reinforcement curves that
[14:46] allow designers to dictate how quickly
[14:48] backup tends to arrive when you've been
[14:49] identified as a felon and we also have
[14:52] the ability to modulate that time
[14:54] according to how far away you are from
[14:55] the place you were last spotted and how
[14:57] long ago that was there are bounty
[14:59] hunter curves which allow us to link to
[15:01] a probability which allow us to link a
[15:03] probability to your wanted level so that
[15:05] we can increase the encounter frequency
[15:07] when they'd actually be hunting you and
[15:08] otherwise keep them very rare let's
[15:14] continue on though and get a better
[15:15] understanding of how exactly probably
[15:16] believed audience works here we have an
[15:20] area of space that's marked up as having
[15:22] a certain probability of pirates and
[15:25] freighters security asteroids and
[15:28] derelict ships now let's go ahead and
[15:30] activate all that content
[15:33] that's a lot of content to simulate when
[15:36] no one is around to see it a lot of
[15:37] pathfinding NPCs animations vehicle
[15:40] physics collision detection now let's go
[15:43] ahead and introduce a player and clear
[15:46] the board
[15:47] those pirates and freighters and
[15:49] everything else they still exist but
[15:50] only in a probabilistic state as the
[15:52] player traverses through the volume we
[15:54] roll the dice and the various curves and
[15:56] force the probabilities to make a choice
[15:57] does that content exist at that location
[15:59] or doesn't it here the player gets a hit
[16:02] from the asteroid probability so the
[16:05] mission databases in query define
[16:06] missions with the Associated content tag
[16:08] dynamic parameters injected and the
[16:10] mission is instantiated and now a bit
[16:13] later there's Freight when the player
[16:14] trips the freighter probability and then
[16:15] eventually runs into a pirate the key
[16:18] point here is that much of the world
[16:19] exists as a superposition of
[16:22] probabilities until a player gets
[16:23] sufficiently close that the wave
[16:24] functions collapse at which point we
[16:27] instantiate them and start simulating
[16:29] the full-blown entities one of the
[16:34] quirks with probability volumes is that
[16:36] they usually represent a variety of low
[16:38] frequency events space is big after all
[16:41] and even in a pretty heavily populated
[16:42] area shouldn't be running into other
[16:44] ships all that often the problem is that
[16:47] the likelihood multiple events happening
[16:49] simultaneously is a product of the
[16:50] probabilities meaning that it's very
[16:52] unlikely you'd ever see two or more at
[16:53] the same time so let's go ahead and see
[16:56] what this means in practice here's a
[17:00] player traversing a probability volume
[17:02] he makes it through a good part of it
[17:04] before the freighters probability curve
[17:05] determines that an encounter has
[17:07] occurred at which point the probability
[17:08] volume queries the mission database with
[17:10] the freighter tag and instantiates a
[17:13] compatible mission the player continues
[17:15] on and shortly thereafter the pirate's
[17:17] probability curve indicates a hit which
[17:19] triggers another lookup into the mission
[17:20] database there's nothing fundamentally
[17:23] wrong with this in fact it's pretty
[17:25] accurate representation of what you
[17:26] realistically expect to see two rare
[17:29] events happening on their own schedule
[17:31] the systemic behavior of the freighter
[17:33] and the pirate even if spawned
[17:35] separately would allow them to logically
[17:36] react to one another so if they were
[17:38] spawned in close enough proximity the
[17:39] pirate might even attack the freighter
[17:41] the problem is that this approach lets
[17:44] the algorithms dick
[17:45] take too much of the experience and if
[17:47] you're not careful that's gonna lead to
[17:48] the gameplay starting to feel very
[17:49] formulaic what we really want is the
[17:51] ability for designers to craft more
[17:53] custom content and then have a mechanism
[17:55] by which we can trigger it such that it
[17:57] all feels logical if a bit lucky in the
[17:59] timing so what we do instead of
[18:03] basically allowing the algorithms to
[18:07] entirely control what you see after is
[18:10] we defer the activation for a short
[18:13] period of time and bend the
[18:14] probabilities of other things so that
[18:16] we're more likely to get a combination
[18:17] that would otherwise be the case so they
[18:22] once again trade this the player once
[18:24] again triggers the freighters
[18:25] probability but rather than you already
[18:27] got it yeah yeah so we're we're running
[18:30] a little bit ahead but basically what
[18:31] you've seen here is the player hit the
[18:33] freighters probability held on to it we
[18:37] bent the probabilities to increase the
[18:39] likelihood of anything else being able
[18:42] to be attached in this case that that
[18:45] involved the freighter they didn't
[18:46] involve the pirate rather so why does
[18:48] this matter
[18:48] think about a pirate and a freighter
[18:50] being created separately it's going to
[18:52] take a good while for the pirate to
[18:54] close the distance with the freighter
[18:55] disable it part next to it and board it
[18:57] this means that you'd never come upon a
[19:00] situation where the freighters already
[19:02] been disabled and the Pirates are
[19:04] rampaging through the ship so you'd
[19:06] better hurry if you want to save the
[19:07] crew that's actually a really
[19:09] interesting scenario though one that be
[19:10] a lot of fun to experience so while
[19:13] we're fine with the systemic
[19:14] functionality driving things by default
[19:16] we want to be able to bend things
[19:18] towards more interesting situations
[19:20] without it ever feeling too random every
[19:22] once in a while
[19:25] the problem with probability volumes
[19:27] then all comes down to their
[19:29] construction each one and there are lots
[19:31] of them contains a litany of curves and
[19:33] associated data and is set up by hand
[19:35] which is time consuming and requires
[19:37] constant updating as other things change
[19:40] one of the main reasons why they're so
[19:42] difficult to maintain is that many of
[19:45] the variables that a probability volume
[19:46] details should impact one another more
[19:49] security in an area should of course
[19:51] impact the number of pirates but because
[19:53] they're all handled independently
[19:54] designers have to be very careful when
[19:56] modifying them
[19:57] mistakes are inevitably made which
[19:59] results in a lot of sleuthing around to
[20:01] figure out what broker is now poorly
[20:03] balanced and how to resolve it the worst
[20:05] thing though is that they're static if
[20:08] an area has a lot of pirates it will
[20:10] always have a lot of pirates there's
[20:11] nothing you or the NPC population can do
[20:14] to change that rewards won't vary based
[20:17] upon the level of threat in an area
[20:19] because the threat is always the same a
[20:20] new commodity discovery won't cause
[20:23] miners to move in to exploit it and
[20:25] won't in turn attract pirates eager to
[20:27] prey on them demand for security patrols
[20:29] and escorts for that area won't increase
[20:32] in response to the pirates and the
[20:33] pirate threat won't recede as a result
[20:35] what we really need then is a way to
[20:38] dynamically derive the probability
[20:39] curves based upon what's happening or
[20:42] rather should be happening when we
[20:43] manage to resolve all these problems
[20:45] I've been pointing out across the solar
[20:46] system so I've called out a lot of very
[20:52] serious problems things that require
[20:54] enormous amounts of bandwidth to set up
[20:56] and maintain and it still failed to
[20:57] deliver the experience we want what we
[21:00] actually want is a dynamic logical
[21:03] universe we want the demand for goods
[21:06] and services to be the result of a
[21:08] legitimate economic need and we must
[21:10] have sufficient runtime context so that
[21:12] we can customize these modular mission
[21:14] templates NPCs must be able to
[21:17] contribute in helping to turn the gears
[21:19] of the economy from buying and selling
[21:21] goods to creating and accepting missions
[21:24] the system needs to automatically
[21:26] balance itself so that we can focus on
[21:28] the high level rules instead of the
[21:29] details all of this too has to be
[21:32] incredibly computationally efficient
[21:34] which means we need a more focused
[21:35] simulation engine one that's only
[21:37] concerned with what we need to achieve
[21:39] the desired effect if we're ever going
[21:41] to reach a point where we can deliver
[21:43] new solar systems in a reasonable amount
[21:45] of time then we're going to need to make
[21:47] a quantum leap so what's the solution
[21:56] yeah well flip over to the end there yep
[22:02] let's go ahead and flip the screen so
[22:09] it's exciting I really promise there we
[22:13] go so this is quantum and I know what
[22:17] you're thinking I've seen this before
[22:19] if the visuals look you know
[22:21] particularly familiar it's because we
[22:22] started with the solar system map that
[22:24] we released years ago but this really is
[22:27] a totally different beast the original
[22:29] star map reference static data there was
[22:31] nothing dynamic about it but quantum is
[22:33] totally different for starters it has
[22:36] access to all of the backend services
[22:38] and can pull whatever data it needs from
[22:39] them everything you see on the screen
[22:41] then that's real-time data pulled from
[22:43] the game so let's go ahead and take a
[22:46] quick tour of the system yeah okay let's
[22:50] go ahead and jump on over to everyone's
[22:51] favorite gas giant crusader and in the
[22:59] background there you can see Porto Lazar
[23:00] let's go ahead and bring that out now
[23:04] let's I mention that we're connected to
[23:06] all the real-time data let's go ahead
[23:08] and see what the players are up to
[23:23] yeah each of those red dots is a real
[23:27] player thousands of them across well
[23:29] over a hundred servers now to be honest
[23:34] we recorded this earlier mainly because
[23:36] we didn't know how many people would be
[23:37] playing the game while we were doing
[23:39] this show right and I figured it would
[23:42] be totally anticlimactic to say here all
[23:45] the players and three dots showed up so
[23:50] let's go ahead and continue the tour of
[23:52] the solar system and jump on over to
[23:54] damar and you can see a number of people
[23:59] affixed to the planet some of those
[24:00] obviously you're going to be at outpost
[24:02] some of them are inevitably mining over
[24:05] there on the right you can see the the
[24:08] current player list let's go ahead and
[24:09] see what a couple players up to just go
[24:11] ahead and highlight them so we can see
[24:12] where they're at and let's go ahead and
[24:17] jump to surco worm and see where he's at
[24:24] it looks like he's in Loire ville
[24:30] here he is hi buddy and you can actually
[24:36] see some deaths down on the planet there
[24:39] so obviously there's been some conflict
[24:41] there and you actually see let's go
[24:44] ahead and back out a little bit and find
[24:46] there's a contract to the right you have
[24:48] access to missions so you can see that
[24:50] clip so snore Wang is requesting
[24:52] personal transport to Norval to lore
[24:55] Ville and he's willing to pay forty five
[24:57] hundred dollars get on you buddy let's
[25:00] go ahead and jump on over to Ariel and
[25:02] we can get a view of those probability
[25:03] volumes that I was talking about earlier
[25:09] and so what you're seeing here there as
[25:12] I mentioned there are a variety of
[25:13] different types and lots of different
[25:15] content and thematic tags for all these
[25:17] things so you can see everything from
[25:19] the default tags you can see the
[25:21] security reinforcement tags the bounty
[25:23] hunter tags the spoofing tags there are
[25:26] a number of these we'll be adding more
[25:27] in general what it's doing is as I
[25:30] mentioned it's basically representing
[25:32] things in probabilistic state because
[25:34] it's too expensive for us to fully
[25:35] simulate them now let's go ahead and
[25:39] jump over to a shop let's check out the
[25:41] Hicks research station that's on selling
[25:43] yeah we got to go over to crusader
[25:53] and let's go ahead and open up that shop
[25:58] look here's yep there's outpost Korea
[26:01] and you can see that there's a lot of a
[26:03] lot of death around there and over on
[26:07] the right at the Hicks Research Station
[26:09] you can see all the things that it buys
[26:10] themselves and what those prices have
[26:13] been doing over time now I suspect I
[26:20] know what you're thinking at this point
[26:21] this is all very cool but it doesn't
[26:24] really solve any of the fundamental
[26:25] problems that I mentioned earlier and
[26:26] that's totally true so let's clear the
[26:29] board and get to that so the primary
[26:41] reason for Quantum's existence is to
[26:44] enable us to have one unified world
[26:48] where we can you know simulate millions
[26:51] of NPCs and feedback into that all the
[26:56] player actions into one unified whole so
[26:58] there's really no difference there are
[26:59] some optimized areas the probability
[27:02] volumes that exist in between these two
[27:04] you know these two realities but really
[27:06] this you know this is this is the
[27:09] full-blown simulation it takes into
[27:11] account all the player actions so let's
[27:14] go ahead and start by bringing a
[27:17] thousand quanta to life so you know Jake
[27:28] here is cranking the number of quanta up
[27:30] to a thousand and they're basically
[27:32] gonna come streaming in from another
[27:35] system oh and into the universe there
[27:38] these are simulated into these
[27:47] and some the real significance of this
[27:50] is when you're talking about working out
[27:55] the vast multitude of details that we
[27:59] really need to allow this universe to
[28:01] evolve and feel dynamic we don't
[28:03] actually need all of the incredibly high
[28:06] fidelity super computationally expensive
[28:07] stuff that we would get if we were
[28:09] actually simulating these NPCs the
[28:11] traditional way on the server so that
[28:13] they look exactly like they would when
[28:15] you see them these NPCs don't need to do
[28:17] animations they don't need to do physics
[28:19] they don't need to do collision
[28:21] detection they don't need to do a whole
[28:22] slew of things that we couldn't afford
[28:24] to do would be incredibly expensive to
[28:26] try and in the end even if we did it it
[28:28] wouldn't make the end results any more
[28:30] accurate so we also have personality
[28:34] traits - yep one has a little bit of
[28:37] something going on yeah there are a
[28:38] number of different traits that were
[28:40] modeling we're still working out the
[28:42] exact configuration one of them is
[28:44] ambition and that specifies how far a
[28:46] quantum can push themselves relative to
[28:48] others whether in crime or legitimate
[28:50] enterprise another one is intelligence
[28:53] and that dictates what sort of things
[28:54] they can pursue and how well they can do
[28:56] something
[28:57] happiness is a measure of whether a
[28:59] quantum the singular form of quanta is
[29:01] miserable or content and unhappy quanta
[29:04] want to change their situation move to a
[29:06] new location change occupations and that
[29:08] sort of thing aggression controls the
[29:11] lens to which a quantum will go to
[29:12] achieve their objective a
[29:14] business-oriented quantum with a lot of
[29:16] aggression might push their workers
[29:17] harder trading their happiness for more
[29:20] profit and as a result have to deal with
[29:21] more turnover and lastly criminality
[29:24] that determines the amount of criminal
[29:26] behavior that a quantum will consider no
[29:29] criminality equates to a law-abiding
[29:31] quantum having a little means that they
[29:33] might be willing to commit some minor
[29:34] crimes like smuggling or illegal mining
[29:37] and a lot means that they're open to
[29:39] piracy and murder they can have
[29:40] possessions store up money own a ship or
[29:43] property have a home now all these
[29:45] quanta have basically come to rest
[29:47] within the system and the reason for
[29:49] that is because there's nothing for them
[29:51] to do there's no reason for them to get
[29:53] up up off of the couch so let's jump to
[29:57] the next slide
[30:01] we're going to add a little bit of
[30:04] interest to the system by adding an
[30:06] aluminum line to del amor
[30:12] so we've now injected a mine on to del
[30:15] amor and yet you see the quanta still
[30:18] refused to do anything and that's
[30:20] because there's no economic reason for
[30:22] them to do it there's nothing to do with
[30:23] the ore that they could go and extract
[30:26] let's go ahead and open up that card
[30:28] though that represents the mine on
[30:30] Delamar and you can see a couple of
[30:32] stats towards the top quantity and
[30:34] purity and what these are is basically
[30:37] telling you how much of that material is
[30:40] in that mine and purity is to some
[30:42] degree a measure of concentration it
[30:44] effectively details how easy it is to
[30:46] extract it there are a couple of
[30:49] parameters at the bottom that our
[30:51] temporary those will eventually be
[30:52] derived from those top two parameters
[30:54] but for right now we can override it for
[30:56] some of this for some of the testing
[30:58] that we've been doing so let's go ahead
[31:00] and jump to the next so now we're going
[31:06] to go ahead and add an aluminum refinery
[31:08] to Crusader and immediately you will see
[31:16] the Qantas start springing to life and
[31:19] what's happening is they've all figured
[31:21] out
[31:27] they've that refinery it wants to build
[31:32] up a stockpile of aluminum and in order
[31:34] to do that it needs some raw aluminum
[31:37] ore and this it's willing to pay for it
[31:40] and so the quanta or our seizing upon
[31:42] that economic opportunity heading out to
[31:44] Delamar doing the work extracting that
[31:46] ore and taking it back to the refinery
[31:49] and this will continue until it develops
[31:52] you know until it's until it's full so
[31:54] let's go ahead and open that card up
[31:55] again and we can watch the refined
[31:58] aluminum ore gradually build up you can
[32:06] also see the number of workers a few of
[32:08] the quanta so you see many of them
[32:10] actually acting as miners there's also a
[32:12] number of them that are working in that
[32:15] refining factory refineries can't
[32:17] process this material you know without
[32:21] labor and there's a formula that
[32:23] dictates how much labor is required in
[32:25] order to process this stuff and so they
[32:27] have to hire a sufficient number of
[32:28] workers and act in order to actually
[32:30] execute this operation and so this would
[32:34] continue for quite a while let's go
[32:35] ahead and speed up the simulation a bit
[32:36] and go ahead and keep watching the
[32:40] aluminum inventory is that's finished so
[32:44] they're now building up their raw ore to
[32:46] basically load up and after that the
[32:48] entire economy comes to a halt they're
[32:51] the one refiner we've added has no more
[32:54] incentive to buy more it's it's it's
[32:56] storage houses are already full and
[32:58] therefore it's not willing to buy since
[33:00] it's not willing to buy the quanta have
[33:02] nothing to do so what we're going to do
[33:06] now is at a factory but before we do
[33:09] that let's get head on over to the power
[33:10] plant formula and you can see here that
[33:15] building a power plant just like
[33:17] refining or requires something it
[33:19] requires ten workers working for a
[33:21] duration of sixty ticks and it also
[33:23] notably requires two units of refined
[33:26] aluminum or two in order to produce one
[33:28] power plant it's got to be more
[33:30] complicated than that I promise yes
[33:32] again where we're building up
[33:35] so let's go ahead and add the factory to
[33:38] Hurston
[33:52] so damn well going too fast there on
[33:56] down and so once again you seem to see
[33:59] the economy spring to life and now
[34:01] you've actually got two different tiers
[34:02] going the factory let's go ahead and
[34:08] open up the factory the factory just
[34:12] like the refinery needs workers in order
[34:14] to build these power plants it also
[34:16] needs refined aluminum so now you've got
[34:18] multiple things going on the factory is
[34:21] willing to buy refined aluminum someone
[34:23] has to transport that aluminum from
[34:25] Crusader to Hurston so some of the
[34:28] quanta are basically working you know
[34:30] they're River they're basically working
[34:31] as freighters to move that you know to
[34:33] move that product from one location to
[34:34] another some of them were working at the
[34:37] factory on Hurst and some of them were
[34:38] working at the refinery on crusader some
[34:40] of them are heading back to Delamar to
[34:42] actually do more mining so you've got an
[34:44] entire little you know economic cycle
[34:46] going here
[34:47] however it's gonna wind up coming to a
[34:52] dead end here let's go ahead and
[34:53] accelerate it again just like what we
[34:56] saw before because eventually the
[34:58] factory fills up all of its warehouses
[35:00] it can't take anymore therefore as no
[35:02] more don't you know it has no more need
[35:04] for refined aluminum that will
[35:06] eventually shut down the refinery which
[35:08] will in turn eventually kill off the
[35:09] miners and you can see there that the
[35:17] inventory is still building on the
[35:18] aluminum which is why there's still some
[35:21] activity but as soon as it's done it
[35:24] starts flatlining so they see that idea
[35:25] inventories capped out yeah and now
[35:28] they're almost done
[35:29] the factory is basically got but it's
[35:33] it's got all it can handle the refinery
[35:35] has all of its hand to handle therefore
[35:37] the entire loop you know draws too close
[35:39] again so let's add one more node a let's
[35:44] add a shop that sells power plants to
[35:46] our corp
[35:55] slow down again and so now the loop is a
[36:00] bit more complicated the shop is looking
[36:03] it's a retail shop it's looking to sell
[36:05] power plants in order to do that it
[36:07] needs to be able to buy them for one
[36:08] price sell them for another so it adds
[36:10] its mark upon and it just like the
[36:13] factory that requires transport of the
[36:16] refined aluminum from Crusader to
[36:18] Hurston it needs the power plants
[36:20] transported from the factory to it and
[36:22] so if you notice there if the individual
[36:26] quanta they'll actually have a little
[36:28] translucent circle around them if
[36:30] they're carrying goods and so you can
[36:31] easily differentiate whether or not the
[36:33] ones that are moving for example from
[36:35] Hurston back to the mine are empty
[36:37] they're going to bloat up on ore and
[36:39] then when they're heading from or back
[36:41] to Delaware and then from Delaware back
[36:43] to Crusader they've actually all got ore
[36:47] and so this loop will actually continue
[36:50] indefinitely and the reason is because
[36:51] we've cheated something for tonight
[36:53] which and it sounds very similar to what
[36:55] I was basically saying was a bad idea
[36:56] which is the shop right now is a simple
[36:59] consumer it's burn it's burning off that
[37:00] inventory the difference here is that
[37:04] the solution to that is very simple in
[37:07] the context of quantum and the reason is
[37:09] these quanta the next step of what we'll
[37:11] be working on is they'll actually
[37:13] require chips chips require engines and
[37:15] so all of a sudden there's a real demand
[37:17] for how many power plants do you need
[37:20] how many ships do you need it all
[37:21] follows those same illogical equations
[37:24] so let's go ahead and add a bit more
[37:27] economic complexity
[37:35] so that's far we've shown a very basic
[37:39] economic clue one commodity one refinery
[37:41] one factory in one retail shop the real
[37:45] world of course is far more complicated
[37:47] you'll have lots of different
[37:48] commodities refining and production
[37:50] those retail shops and horseplayers in
[37:52] quanta competing against one another for
[37:54] a limited supply of goods and services
[37:56] it's this competition this economic
[37:59] natural selection that ensures that
[38:01] things remain in balance that a logical
[38:03] equilibrium is reached so our current
[38:19] architecture basically has players
[38:21] connecting to a game server and the SIRT
[38:27] and then we've got services behind the
[38:28] scenes that can feed information to
[38:31] these servers and receive information
[38:33] back in return and so you can see here
[38:36] you know we've got shop services and
[38:37] probability volume services and all this
[38:39] sort of thing the basic problem with
[38:41] this arrangement is that services don't
[38:43] have any knowledge of what NPCs are
[38:45] doing or rather what they should be
[38:47] doing so that shop service that controls
[38:50] the prices it's got algorithms but it
[38:53] has no real understand it doesn't
[38:55] understand that there are 10,000 NPCs
[38:56] that do or don't need this or what
[38:58] pirates are doing or any of that
[39:00] we don't simulate at that high level
[39:01] anywhere within the game right now you
[39:03] have servers that basically instantiate
[39:05] the stuff near you and you have the
[39:06] services that can run the you know these
[39:08] formula and that's basically it
[39:10] now they can implement these services
[39:14] these algorithmic price calculations but
[39:16] supply and demand only comes from
[39:17] players and hard-coded formulate and
[39:19] it's the same permissions in Peavey's
[39:21] the data is completely static and can't
[39:22] evolve the number of servers of course
[39:25] as we've seen here it varies depending
[39:27] upon how many players are in the game so
[39:29] let's go ahead add quantum quantum
[39:33] changes this in dramatic fashion it
[39:35] gives us a place where we can
[39:37] efficiently simulate NPC behavior and
[39:39] then feeds that behavior to the game
[39:41] server so that players can experience it
[39:43] further it allows player actions to be
[39:45] fed back into the simulation so that
[39:47] there
[39:48] no meaningful difference between the
[39:49] real and simulated worlds quantum
[39:52] creates a complete loop NPCs can be
[39:54] simulated in efficient fashion and
[39:55] actually meant to say that quantum feeds
[39:57] the services which in turn feed the game
[39:59] servers so let's go ahead and get back
[40:04] to the simulation and what we're going
[40:08] to do now is alter the powerplant
[40:10] formula so let's add a bit of complexity
[40:12] by changing the production formula for
[40:14] power plants to require lera night add
[40:22] some we need to change now we need to
[40:24] change your production pours I hope
[40:28] right yeah okay yeah we do when I have
[40:30] the new mind first so we're gonna add a
[40:32] lair night mind to wala and then we want
[40:38] to go ahead and add a refinery for this
[40:40] lair night and we'll add that to the
[40:41] hearse tournelles three
[40:51] and now let's go ahead and adjust that
[40:54] powerplant formula and we're gonna
[40:58] change the powerplant formula right now
[41:00] it requires zero lair night we're gonna
[41:02] change that to two and what we're gonna
[41:07] very quickly see here is that we're
[41:08] gonna start getting some glare night
[41:09] flowing to the Hurston factory so that
[41:12] the power plants can continue to be
[41:13] created and that's that's that that says
[41:19] aleut that's that loop of guys right
[41:21] there that's what they're taking now one
[41:25] of the important things here is that the
[41:28] let's go ahead and look at the Hurston
[41:30] aluminum aluminum
[41:45] now what will end up happening there is
[41:48] it was very low for a period of time and
[41:50] that's because they were actually
[41:52] burning off that aluminum inventory as
[41:55] fast as they could get it and the reason
[41:56] why you see that spike there in the
[41:58] aluminum inventory is because as soon as
[42:01] we alter the formula so that power
[42:03] plants now require lera night they were
[42:05] still receiving from all these Freight
[42:07] freighter transports they still had
[42:09] aluminum coming in but they could no
[42:11] longer produce power plants so it's
[42:13] stalled and all of a sudden they started
[42:15] stockpiling stockpiling and then when
[42:17] you see that the aluminum started
[42:18] falling
[42:19] that's because finally the they started
[42:21] receiving supplies of lera night and
[42:23] they were able to resume the production
[42:24] process and so all of a sudden their
[42:26] aluminium started getting burned off a
[42:28] natural rate
[42:30] [Applause]
[42:37] yep so now we're gonna add a bit more
[42:41] layer and I out in the asteroid fields
[42:43] and Jake's gonna handle that be a macro
[42:51] and now let's go ahead and increase the
[42:55] supply of aluminum and see what happens
[42:57] so we're gonna add a few new mines so
[42:59] let's add an aluminum mine to sell in
[43:01] first
[43:10] let's add one to Aberdeen as well
[43:26] and lastly we're gonna do Leiria and if
[43:32] you remember we already have an aluminum
[43:34] mine on Delamar they're telling us we
[43:42] need to hurry up you guys want us to
[43:48] hurry up or keep going all right so it's
[43:56] like four hundred to one
[44:07] let's add a couple more aluminum
[44:09] refineries as well to the Crusader l4
[44:12] and an arc or Bell one an arc or pull
[44:26] one yeah so now let's go ahead we just
[44:30] added all of this new aluminum so let's
[44:32] head back to that Hurston Factory and
[44:34] see what aluminum prices are doing there
[44:36] what's that factory having to pay for
[44:37] aluminum with all this new supply these
[44:39] new mines these new refineries and there
[44:47] you see that the price is starting to
[44:49] fall off you speed it up speed it up a
[44:58] little bit let's let you see what it
[44:59] does and if you see it continues to
[45:05] plummet
[45:08] so those prices are pretty much falling
[45:12] off a cliff now from all that extra
[45:15] supply that's been brought on without us
[45:16] having to go back and rebalance anything
[45:19] so let's go ahead and head on over to
[45:21] sellin and you can see that sellin is in
[45:25] very close proximity to Crusader so
[45:26] you've got to refine aluminum refinery
[45:28] and aluminum mining yet there's very
[45:29] little activity and the reason is
[45:32] because the aluminum at that mine is
[45:33] very difficult to extract so let's go
[45:36] ahead and adjust the mining time on
[45:38] Selin from 180 to 120 and with this
[45:44] again reflects is how difficult is to
[45:46] extract from that particular location
[45:48] and so you see there now you see a few
[45:51] guys are actually willing to put in the
[45:53] amount of work necessary to extract it
[45:55] not all of them it's still a lot of
[45:57] effort and this comes back to every one
[45:59] of these guys having their own
[46:00] individual set of traits so some of them
[46:03] were willing to injure yeah more risk
[46:05] more repel but you know more effort that
[46:07] sort of thing so let's go ahead now and
[46:12] increase the light consumption let's
[46:17] just go with normal pace all right
[46:21] hey go so let's make the lira night more
[46:27] difficult to work with and more rare and
[46:29] see what happens there so we're gonna
[46:34] adjust the global Lera night refining
[46:37] time from 60 to 120 adjusting the time
[46:40] on hawala we're gonna do both the global
[46:46] refining time we want to take it to 60
[46:48] to 120 and wall is the extraction of
[46:50] time goes from 60 to 180 that's right
[46:57] 60 to 120 their night
[47:05] so what we've just done is basically
[47:08] make it more time-consuming more
[47:10] difficult to refine it and we basically
[47:12] made it more difficult to pull it out of
[47:13] the ground so let's go ahead and apply a
[47:16] macro also to Rafal to reduce the
[47:19] default purity of layer night from fifty
[47:21] to sixteen percent which means that
[47:22] refineries are going to need more or to
[47:24] produce the same amount of refined
[47:25] product reactive and now let's go ahead
[47:32] and take a look at the layer night
[47:35] prices on the Hurston factory so we just
[47:42] did three different things to make it
[47:43] considerably you know more expensive for
[47:46] lera night to be utilized and speeded up
[47:51] and you can see that larry night prices
[47:53] are going up up it looks like they're
[47:56] starting to skyrocket this could be a
[47:58] complete economic disaster if you notice
[48:02] they're just going up up so what we're
[48:05] gonna do now to bring that back in the
[48:07] control is let's go adjust the power
[48:09] plant formula to compensate a bit so
[48:13] let's adjust it from instead of two
[48:15] layer a night let's change it to point
[48:16] one so we just reduced the amount of
[48:21] lair night needed in the economy by
[48:22] ninety five percent and let's head back
[48:26] and check out the prices again
[48:33] and what we should see here in a minute
[48:35] is Lera night should start to drop off
[48:37] pre significantly there you go
[48:41] crisis averted
[48:50] and this will continue to drop if we
[48:53] wash it you always get it a little bit
[48:54] of turbulence because you've already got
[48:55] contracts you set up themselves right go
[49:00] ahead and leave it in I just wanna see
[49:02] it drop a little bit more I want to see
[49:04] it Tony
[49:10] so it's already down 40 50 percent and
[49:14] it'll keep it'll keep falling okay so
[49:17] now let's go ahead and add some
[49:19] additional factories Delamar looks
[49:21] pretty dead there isn't a lot of
[49:23] economic activity happening over there
[49:26] so let's add a bit of life by adding a
[49:29] new power plant factory and yeah let's
[49:38] add a Hearst nail for factory for power
[49:40] plants as well to create a little bit of
[49:41] competition for aluminum and then let's
[49:50] head on over to Hurston Hurston Factory
[49:53] and let's check out their workers you
[49:56] notice that their workers are falling
[49:58] off a cliff what is happening well we
[50:00] just open up a new power plant factory
[50:01] and they're getting offered better wages
[50:03] for another place and
[50:11] and what are the wages on on on Hurston
[50:19] let's see what the wages that they were
[50:21] offering I can't fit so they were up at
[50:27] that point two-five yeah Delmar's
[50:29] offering like almost three times the
[50:31] weight is yep so there you see the
[50:33] differential which is that factory is
[50:34] more desperate for workers and so you
[50:36] see let's go actually go let's look at
[50:38] the yep the basically the workers
[50:41] skyrocketed on Delamar and plummeted on
[50:43] Hurston and eventually those wages of
[50:47] course stabilized they find a point of
[50:49] equilibrium which is a big you know
[50:50] point of you know all of this so let's
[50:54] go ahead now and make some major changes
[50:57] we're gonna do this with a macro and you
[50:58] can see where we currently stand on
[51:01] slide there's like a bunch of stuff that
[51:07] we were supposed to be showing here
[51:09] absorb it quickly everyone there we go
[51:16] so we've added lots of aluminum titanium
[51:18] and degrees iam and the entries that you
[51:21] see on the screen mark system all of the
[51:23] moons now have deposits we've added a
[51:27] bit more layer night but it's still
[51:28] pretty rare we've also added a lot of
[51:29] new refineries we've added cooler and
[51:32] quantum drive recipes to most factories
[51:35] and they require aluminum layer a night
[51:37] titanium and degree CM the demand for
[51:40] coolers in quantum drives has been
[51:42] introduced and we've also increased the
[51:44] demand for power plants and lastly we've
[51:47] increased you could see there at the
[51:48] bottom of the screen the number of
[51:49] quanta from 1,000 to 2,000 so that we've
[51:52] got enough workers to keep the economy
[51:53] humming now previously we've seen pretty
[51:56] obvious cause and effect at this point
[51:59] though the economy is starting to get
[52:00] pretty complicated and we can look at a
[52:02] few graphs just see what's going on with
[52:04] some of the prices to see this and this
[52:07] is one of the most interesting things
[52:08] about a really complicated economy which
[52:10] is these changes in quantities and
[52:12] prices the purposeful movement of quanta
[52:15] this dynamism these are all
[52:17] opportunities that you'll you're going
[52:19] to be able to exploit within the game
[52:20] and therein
[52:21] logical motion so that's it the next one
[52:32] be a shame if somebody came to steal
[52:37] from these people huh yep bring up slide
[52:40] okay
[52:42] got a real slide
[52:46] all right so now we've we've introduced
[52:49] some some pirates let's go ahead and so
[52:53] you can see that there are four pirate
[52:55] crack and there's the nova rioters
[52:56] lowriders ninetails and dusters pirates
[52:58] have to return to one of their bases in
[53:00] order to refuel rearm let's go ahead if
[53:04] you notice they head to the areas of
[53:05] highest value if you let's go ahead and
[53:09] zoom in there and you can see that those
[53:12] are missions being created by the NPC is
[53:15] no different than players would in other
[53:17] words you see a lot of deaths on a route
[53:19] that's got a lot of value and go ahead
[53:22] and hover over some of those contracts
[53:23] these are contracts that are being
[53:26] thrown out by the NPCs on that route
[53:29] what's happening is the NPCs are
[53:32] basically being you know some of the
[53:33] freighters are being picked on by the
[53:35] pirates the ship is being destroyed and
[53:37] now that NPC is has ejected and needs
[53:40] transport back to civilization and so
[53:42] they're requesting that and these are
[53:44] missions that would be fed back into the
[53:45] game that you'd see and you could wind
[53:47] up accepting these
[53:56] let's go ahead and take a look at
[53:58] Hurston the cooler is upon us out this
[54:00] is where they're operating out of you
[54:01] guys
[54:09] what do you wanna hear to check out the
[54:11] Hurston let's look at what happened to
[54:13] the cooler and quantum drives yeah so
[54:16] since we've now got a lot of pirate
[54:17] activity on that route we want to see
[54:19] what's happening to the cost of some of
[54:20] those Goods for a cool half-a-million
[54:31] UEC you can get yourself your own power
[54:34] plants it's actually normal piracy is
[54:44] really terrible for economics you guys
[54:46] so yeah so let's go ahead now and really
[54:54] see it over at the coolers or it started
[54:56] it like a really reasonable thing yeah
[54:58] that's that's peg it's just it's the
[55:00] scale so basically they were down around
[55:01] a thousand two thousand and now they
[55:03] just absolutely skyrocketed in price
[55:05] because so many of the freighters moving
[55:07] whether it's supplies are moving you
[55:09] know the finished product from one
[55:11] location to another are now being
[55:12] intercepted and these cuantas I
[55:14] mentioned earlier it's like they have
[55:15] various traits and some of them are very
[55:17] risk-averse and they won't go down
[55:19] routes where you know there's a
[55:21] significant chance of death and so to
[55:23] counteract some of this danger let's go
[55:25] ahead and bring in someone to fight
[55:27] pirates so here comes some security and
[55:32] what you'll notice is that security is
[55:35] drawn to areas of conflict where there
[55:37] is a lot of deaths and such so they're
[55:39] gonna wind up gravitating towards those
[55:41] areas where there's a lot of piracy and
[55:45] there you can see I'm going over to
[55:47] speed it up a little bit not 200 it's
[55:49] just 200 too fast difficult Oh what's
[55:50] going on and if you notice by the way
[55:53] the police will wind up patrol Ian's
[55:56] area so they're in constant motion
[55:58] whereas the pirates basically are
[56:00] enabling quantum interdiction fields
[56:02] that's why they're basically picking a
[56:04] route on you know they're picking a
[56:06] particular location on the route between
[56:08] you know to between two locations and
[56:10] they're basically you know lying in wait
[56:12] and the security which doesn't know
[56:15] exactly where they are is scanning the
[56:16] area
[56:17] looking for them and so what you notice
[56:19] here is that the pirate situations
[56:21] starting to look a lot better now that
[56:22] Security's shown up and you would see
[56:24] this reflected over in the prices and so
[56:26] what you have here is a perpetual game
[56:29] of cat-and-mouse to where the Pirates
[56:32] look for the areas where they can reap
[56:36] the largest rewards with the least
[56:38] amount of risk and security is then
[56:40] drawn to them and as soon as you get
[56:41] enough pushback from the system in terms
[56:43] of security then the Pirates look for
[56:46] you know more opportunistic you know
[56:47] pastures and again this is very much
[56:49] like what you would expect to see you
[56:51] know you know an illogical functioning
[56:54] system
[57:04] so let's go ahead and turn on the grid
[57:08] and what you're looking at here is one
[57:12] of the big problems I referred to
[57:13] earlier is how we wind up getting
[57:16] samplings of this you know of how we
[57:19] generate probability volumes and so what
[57:21] this is showing you is we can look at
[57:22] one of these high conflict areas and
[57:25] it's basically tabulating exactly what's
[57:29] in that area so you can see that there
[57:31] are ten total quantum Freyr eleven
[57:33] pirates five security it also shows you
[57:36] the total value being transported you
[57:38] know exactly what's going down that
[57:40] route let's take a look at a few other
[57:41] locations here you see these security
[57:44] and pirates are fairly even six pirates
[57:46] seven security you know a decent amount
[57:49] of value six freighters so it's a
[57:51] there's actually an almost equivalent
[57:52] number of freighters pirates and
[57:53] security this is the information that
[57:56] quantum and it's a small piece of the
[57:59] whole this is what it would wind up
[58:00] feeding periodically to the probability
[58:02] volume services so that designers no
[58:04] longer need to go in and say oh well
[58:06] we're gonna hard code a certain amount
[58:08] of security a certain amount of
[58:09] freighters and it can never change we
[58:11] ship it that's all that's ever going to
[58:13] be in this case the simulation is
[58:16] running it's constantly ebbing and
[58:18] flowing and your actions over on the
[58:21] game side get factored into this result
[58:23] just like any of the quanta in this
[58:26] simulation
[58:39] so for years we've had just the backend
[58:43] services and the game servers and the
[58:45] fundamental problem was that we didn't
[58:47] have a single area where the entire game
[58:49] could be simulated where NPCs could
[58:51] request goods and services because they
[58:53] have a legitimate economic need and
[58:55] could buy with players to provide those
[58:57] things we didn't have a way for this
[58:59] activity to determine what you see as
[59:02] you wander around the universe thus
[59:04] eliminating the need to spend enormous
[59:06] sums of effort configuring vast
[59:08] quantities of static data that could
[59:10] never deliver the dynamic experience we
[59:12] really wanted quantum solves all these
[59:15] issues it also provides us with a lot
[59:17] more context which means that concepts
[59:19] not previously understood like how much
[59:21] risk there is in taking an item from
[59:23] point A to point B can now be easily
[59:25] calculated information like this is
[59:28] vitally important to the price discovery
[59:30] machinery and as I spoke about earlier
[59:32] in a properly functioning economy such
[59:35] things can and will generate a lot of
[59:36] ripples we also get the information
[59:39] necessary to properly customize mission
[59:42] content meaning we can deliver a lot
[59:44] more environmental and mission diversity
[59:46] without having to do any more work I've
[59:48] covered a few of the large areas that
[59:50] quantum will impact but the effects will
[59:52] be felt far wider how many NPCs you see
[59:56] at a landing zone for example and what
[59:57] they're doing can now change over time
[59:59] manufacturing towns might boom and bust
[1:00:01] depending upon how much Commerce is
[1:00:03] passing through them a didn't give in a
[1:00:04] moment NPCs can grow and evolve
[1:00:07] separately from their interactions with
[1:00:09] players into powerful bosses potentially
[1:00:12] and you'll be able to witness their
[1:00:13] growth in lots of different ways
[1:00:15] criminal criminal NPCs with a price on
[1:00:18] their head can move around the universe
[1:00:20] just like a player making time to catch
[1:00:22] them that much more fun we've got a lot
[1:00:26] more work to do before a quantum is
[1:00:27] ready for integration with the rest of
[1:00:29] the game but it's one of the last big
[1:00:31] steps in setting us up for a completely
[1:00:33] dynamic and systemic universe thanks for
[1:00:36] listening
[1:00:37] [Applause]

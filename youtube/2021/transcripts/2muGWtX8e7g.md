# Star Citizen: Quantum, Quasar, and Virtual AI

**Video:** https://www.youtube.com/watch?v=2muGWtX8e7g
**Date:** 2021-05-24
**Duration:** 40:02

## Transcript

[00:00] [Music]
[00:08] hi
[00:08] i'm tony zurvik and i'm the director of
[00:10] persistent universe for star citizen
[00:12] today i'm going to give you an update on
[00:13] how some of the backend architecture and
[00:15] systemic functionality is coming along
[00:17] what sort of progress we've made over
[00:18] the past year what's on the horizon
[00:20] and how all of this is going to impact
[00:22] your gameplay experience
[00:24] in order to give you a more
[00:25] comprehensive understanding of the
[00:26] long-term direction and what all of this
[00:28] will ultimately mean i'm going to cover
[00:30] areas that are in various stages of
[00:32] development and will sometimes resort to
[00:33] illustrative examples so that the
[00:35] underlying concept can be made more
[00:36] clear
[00:38] first a quick review quantum is a
[00:41] simulation of the game universe and its
[00:43] purpose is to allow things the price of
[00:44] goods at a given shop the amount of
[00:46] piracy near a landing zone or what
[00:48] missions are being offered
[00:49] to evolve and change over time in
[00:51] logical and realistic ways
[00:53] it does this by simulating hundreds of
[00:55] thousands of lightweight npcs called
[00:57] quanta whose ai logic is focused on just
[00:59] those aspects needed to produce the
[01:00] required information
[01:03] based upon a small list of attributes
[01:04] each quantum makes its own decisions
[01:06] using the same resources shops and jobs
[01:08] as players
[01:10] the simulation will need to calculate
[01:12] many millions of decisions per minute
[01:13] and thus the ai behavior of quant is
[01:15] focused on the most economically
[01:16] impactful details
[01:18] which lets quantum focus all of its
[01:19] processing power on just those things
[01:21] that truly matter
[01:23] every quanta possesses its own unique
[01:25] set of attributes that influence how
[01:27] well it performs and how it perceives
[01:29] opportunities
[01:30] the initial implementation of attributes
[01:32] will have two main categories
[01:33] proficiencies and traits
[01:36] proficiencies act like a multiplier on
[01:38] how well quantum perform a given task
[01:40] different jobs will require different
[01:41] proficiencies and higher proficiencies
[01:43] will equate to superior execution
[01:46] traits describe what kind of jobs a
[01:47] quantum prefers to do by modifying their
[01:49] perceived value of the job
[01:51] each job will have a specific alignment
[01:53] and when a qantas traits match up with
[01:55] jobs alignment they will perceive the
[01:56] payout of that job to be higher
[01:58] to illustrate the concept let's take two
[02:00] jobs on either end of the aggression
[02:01] scale and suppose for now
[02:03] that they pay out the same now let's
[02:06] create a quanta with an average
[02:07] aggression rating
[02:09] this quanta is no closer to the
[02:10] aggression alignment of factory worker
[02:12] than they are to security so it's no
[02:14] surprise that for this quantum the
[02:15] payoff for both jobs looks the same
[02:18] however as we decrease the aggression
[02:20] rating of this quanta we can see that
[02:21] the perceived amount of money for both
[02:23] jobs changes
[02:24] again the actual pay hasn't changed at
[02:26] all only the perceived value from that
[02:27] qantas point of view
[02:29] it's still possible for the quantity to
[02:31] choose security but in this case
[02:32] security would need to pay four times as
[02:34] much
[02:36] if we change this quantus aggression
[02:37] trait to be very high the opposite
[02:39] happens
[02:39] now the aggressive security job looks
[02:41] like it pays much more and the peaceful
[02:43] factory worker jobs appear to pay much
[02:44] less
[02:46] of course jobs have more than a single
[02:48] trade to distinguish themselves suppose
[02:50] we take another aggressive job
[02:51] pirate with just one dimension the
[02:54] pirate job would look just as lucrative
[02:55] to this quanta as a security job
[02:58] we can differentiate between these two
[02:59] jobs by adding the morality trait and
[03:01] putting both of these aggressive jobs on
[03:03] the proper place on that scale
[03:05] now that all jobs have a unique
[03:07] combination of trade alignments we can
[03:08] watch the perceived payout for all three
[03:10] of these jobs change
[03:11] even though in this case all jobs
[03:13] actually pay the exact same amount
[03:16] we're currently experimenting with four
[03:17] different traits but expect to add at
[03:19] least a few more over time to help
[03:20] ensure that quanta do not congregate
[03:22] around the highest paying job at any
[03:23] given moment and instead
[03:25] just like a real population of
[03:26] individuals all perform their own unique
[03:28] mental calculus to determine what looks
[03:30] most appealing to them and in effect
[03:32] gives us the nice distribution of
[03:33] workers that we want
[03:36] the quantum simulation that we ran at
[03:37] the last citizencon was implemented in
[03:39] typescript a relatively slow language
[03:41] that limited us to less than 10 000
[03:42] quanta
[03:44] all of that logic has since been
[03:45] rewritten in c-sharp and a lot of time
[03:47] and effort invested into optimizing the
[03:49] threading and resource locking which
[03:50] wound up increasing performance by more
[03:52] than two orders of magnitude
[03:54] stanton is one of the more complex solar
[03:56] systems and will require about fifty to
[03:58] a hundred thousand quanta in order to
[04:00] achieve the required fidelity which
[04:01] means we've got a lot of extra headroom
[04:03] without any additional performance
[04:04] tuning
[04:05] to support upcoming solar systems like
[04:07] pyro
[04:09] much like a real economy quantum
[04:10] produces a tremendous amount of data and
[04:12] there are countless ways to adjust the
[04:13] simulation
[04:15] finding a combination that produces the
[04:17] desired results is difficult
[04:18] and in order to solve this problem we
[04:20] created odin a plug-in for the
[04:21] python-based jupyter lab environment
[04:24] odin is a powerful web-based tool that
[04:26] allows for real-time data interpretation
[04:28] of the game's dynamic and complex
[04:30] economy
[04:31] based on the actions of both players in
[04:32] the live game and quanta
[04:35] here i'm using odin to simultaneously
[04:37] show all of the graphs related to the
[04:38] economy of aluminum
[04:40] where it's mined refined manufactured
[04:42] and sold around the stanton system
[04:44] it's a bit overwhelming so i'm going to
[04:46] refine the search by adding the word
[04:47] buying to the graph explorer
[04:49] before seeing the actual graphs we can
[04:51] preview which ones are searches
[04:53] identified which is very useful in more
[04:54] complicated search scenarios
[04:56] in this case though we've already
[04:58] whittled things down to a manageable
[04:59] size so i'm going to jump to the actual
[05:00] graphs
[05:02] everything looks pretty healthy you can
[05:04] see the cyclical nature of commodity
[05:06] prices a sign that we're on the right
[05:07] track and getting the economic
[05:08] modulation we want
[05:10] all of these graphs are updated from the
[05:12] simulation in real time and we can zoom
[05:14] in on particular time periods of
[05:15] interest which is invaluable when trying
[05:17] to figure out exactly why the
[05:18] availability of a critical resource
[05:20] dried up
[05:20] or the price of something went through
[05:22] the roof with such a complex system it's
[05:25] often difficult to predict what sort of
[05:26] information we
[05:27] might want to inspect and odin was
[05:29] therefore designed to be extremely
[05:30] flexible and adaptive
[05:33] one particularly powerful data analysis
[05:34] tool that we developed allows us to view
[05:36] the flow of goods and services from a
[05:38] high-level perspective
[05:40] we call it the la zaygraph and it can
[05:41] dynamically target economic flows and
[05:43] animate transitions so that we can
[05:45] visually see how things change over time
[05:48] here i've selected a number of different
[05:50] product nodes and you can see all the
[05:51] economic
[05:52] relationships for those items laid out
[05:53] on the graph the graph allows us to
[05:56] switch between several key flows like
[05:57] the volume of goods the flow of uec and
[05:59] even the value density of specific
[06:01] routes in the universe
[06:03] the nodes are ordered by greatest to
[06:05] least economic activity and changes over
[06:07] time will reorder them
[06:09] we can thus detect important shifts in
[06:10] the economy simply by observing how the
[06:12] nodes adjust their position
[06:15] this tool can inspect both real-time and
[06:17] historical data so we can step back in
[06:18] time and see the progression of factors
[06:21] that caused a problem to develop
[06:22] and what could be done to remedy it when
[06:24] inspecting a segment of time you can see
[06:26] elements of the economy phasing in and
[06:28] out depending upon whether or not they
[06:29] were relevant during that period
[06:32] often we'll want to dig into a
[06:33] particular material to investigate how
[06:35] that material flows throughout the
[06:36] economy
[06:37] with the laser graph we can choose a
[06:39] material like aluminum and then all of
[06:40] the items that metal is used to
[06:42] construct
[06:42] which immediately gives us an intuitive
[06:44] view of the relationships between
[06:46] manufacturing recipes and system-wide
[06:48] logistics from a bird's eye view
[06:51] here it looks like most of the raw
[06:52] aluminum in the economy is being
[06:53] funneled into items that are being sold
[06:55] in shops on crusader and art corp
[06:57] after a while though the shops at
[06:59] crusader run short of inventory and stop
[07:00] selling such goods and all the sales
[07:02] moved to hearst in an artboard
[07:05] as new materials recipes and items are
[07:07] added to an increasingly complex
[07:08] universe
[07:09] and player behaviors shift we'll
[07:11] frequently run into such problems and
[07:13] analytical tools like the lasergraph
[07:15] will be invaluable
[07:16] in helping us to quickly identify such
[07:17] issues and determining what needs to be
[07:19] done to restore balance
[07:22] player actions are fed back into quantum
[07:24] so that it can factor that data into the
[07:25] simulation and odin can evaluate that
[07:27] information just as easily as it can
[07:29] that drive from quanta
[07:31] it's fully linked into the law system
[07:33] for example and can thus generate a heat
[07:35] map showing where players are committing
[07:36] specific crimes
[07:38] if there's too much pvp in an area
[07:39] that's supposed to be secure
[07:41] we might add more security place
[07:42] additional turrets or increase the
[07:44] penalties levied by the law system
[07:47] to be clear odin's analytical and
[07:49] statistical capabilities will be of
[07:50] extensive benefit to the quantum
[07:51] simulation too
[07:52] as they'll allow it to better understand
[07:54] how to adjust various dials and levers
[07:56] to allow for a dynamic universe where
[07:58] things
[07:58] logically ebb and flow and everything
[08:00] functions as part of a larger more
[08:02] complex machine
[08:04] quanta focused on transporting goods for
[08:06] example will demand a price premium
[08:08] based upon how much risk they'll be
[08:09] exposed to on their route
[08:10] and odin can sort all of the possible
[08:12] paths they might take by risk
[08:14] fuel consumption or whatever other
[08:16] metric they wish to consider so that
[08:17] they can decide whether they're
[08:18] interested in the job
[08:20] and if so what sort of payment they
[08:21] would require
[08:23] here's a bar graph showing where all
[08:24] these felons are spending their time
[08:27] and another one showing how they're
[08:29] spending their money
[08:31] odin can identify the most popular
[08:33] mining sites as well as what materials
[08:35] are being extracted from those locations
[08:38] it knows what sort of ships players are
[08:39] flying how many players are on board and
[08:41] what sort of ships they're squaring off
[08:43] against
[08:44] odin has complete knowledge of the
[08:46] mission system which allows it to map
[08:47] player positions against the missions
[08:49] they've accepted
[08:50] in one shot then we can get a sense of
[08:52] which missions players find most
[08:54] interesting so that we can focus on
[08:55] creating more of that type of content
[08:57] and where those missions are taking them
[08:58] so that we can understand sections of
[09:00] the solar system that are underutilized
[09:03] one of the most interesting graphs we've
[09:05] created is this one that measures
[09:06] mission design quality
[09:08] each circle represents a mission and
[09:09] larger circles indicate that more
[09:11] players have done that particular
[09:12] mission
[09:13] the x-axis details the percentage of
[09:15] players that successfully completed the
[09:16] mission out of all of the players who
[09:18] completed it
[09:19] and the y-axis denotes the percentage of
[09:21] players that finish the mission even if
[09:23] they failed it
[09:24] this exposes all sorts of interesting
[09:26] insights to us
[09:27] low positions on the graph for example
[09:29] indicate that most players are getting a
[09:30] result other than success or failure
[09:32] they're either abandoning the mission or
[09:34] disconnecting neither of which is good
[09:36] positions on the far left mean that most
[09:38] of the players that undertook that
[09:39] mission failed it
[09:41] the lower left quadrant signifies
[09:43] missions that are abandoned frequently
[09:44] and fail when they aren't which likely
[09:46] points to a problem
[09:48] missions near the lower right have a
[09:49] high success rate but are frequently
[09:51] abandoned
[09:51] possibly indicating that they're too
[09:53] easy or boring the most
[09:55] interesting missions are in the upper
[09:56] middle they're frequently played through
[09:58] to the end but aren't always successful
[10:00] these are the missions that are both
[10:02] engaging and difficult
[10:04] we use information like this to tune the
[10:06] simulation but also to give us basic
[10:07] feedback on what sort of missions
[10:09] players find most appealing and where
[10:10] problems reside
[10:12] the refining gameplay that was released
[10:14] late last year made use of a couple of
[10:16] new back-end services
[10:18] the job service is more general purpose
[10:20] and will also be a key component in the
[10:21] implementation of a number of other
[10:22] upcoming features including everything
[10:24] from cargo loading and unloading
[10:26] to repair refuel and restocking services
[10:29] the refining service provides game
[10:30] servers with the ability to retrieve a
[10:32] refiner's available processing capacity
[10:34] and a price quote for a given quantity
[10:35] of material with the specified speed and
[10:37] quality options
[10:39] these new services exemplify the way the
[10:42] development nowadays often proceeds
[10:44] which is to ensure that all of the
[10:45] linkage to and from the data source is
[10:47] properly abstracted from the start
[10:49] such that once quantum can provide the
[10:51] necessary data we can flip a switch to
[10:52] activate it
[10:55] previously when quanta traveled to a
[10:56] planet or a moon to minor resource they
[10:58] picked a random location on the surface
[11:01] this meant that quantum wasn't yet
[11:02] capable of generating the spatial
[11:03] fidelity we needed so that we could
[11:05] properly determine exactly where npcs
[11:07] should and shouldn't be found
[11:09] the resource service that we completed
[11:11] last year however provides quantum with
[11:13] an api that not only gives it access to
[11:15] this information
[11:16] but also enables those amounts to be
[11:18] modified so that as players in quantum
[11:19] mining area it will gradually be
[11:21] depleted
[11:22] to demonstrate i've brought up a planet
[11:25] now i'm going to highlight the location
[11:27] of all the gold ore
[11:29] players in quanta of course would not
[11:30] have this information and to represent
[11:32] that fact i'm going to place a shadow
[11:34] over everything
[11:36] you can see a single quant exploration
[11:37] ship approaching the planet from the
[11:39] right
[11:40] as it travels across the surface it will
[11:42] unveil the quantity and location of that
[11:43] ore visually represented by removing the
[11:45] shadow
[11:46] and then broadcast that information to
[11:47] other quantum within its organization
[11:50] it has discovered a huge vein of
[11:52] valuable ore and quantum minors have now
[11:53] started arriving in mass to extract it
[11:56] they're focusing predominantly on those
[11:57] areas where the concentration is known
[11:59] to be highest although they'll also
[12:00] consider things like the amount of risk
[12:02] in a given area
[12:03] perhaps caused by a player or mpc
[12:04] organization fighting to control that
[12:06] region
[12:07] i'm running this at an accelerated rate
[12:09] and you can see that the amount of ore
[12:11] at that first large site is declining
[12:12] rapidly
[12:14] the explorer has now discovered a second
[12:16] field of gold ore near the equator
[12:18] and because the original deposit has now
[12:19] been mined so extensively what remains
[12:21] is more time consuming and difficult to
[12:22] extract and is thus relatively less
[12:24] attractive
[12:25] the quantity figured this out and most
[12:27] of them have started to focus their
[12:28] attention on the newer site
[12:30] taken together these new features allow
[12:32] quantum to generate a lot more detailed
[12:34] information which will in turn result in
[12:36] a better and more realistic gameplay
[12:37] experience
[12:39] quantum will know where exactly on the
[12:40] surface of a planet npcs might be found
[12:42] and what they should be doing
[12:44] you'll understand the value of knowledge
[12:46] and factor its acquisition sharing and
[12:47] sale into its calculations including
[12:49] what any information you eventually
[12:51] attempt to sell would be worth
[12:53] quantum has now been pretty thoroughly
[12:55] integrated into our back-end
[12:56] architecture and the service will be
[12:57] built and shipped with all future
[12:59] releases of the game which took a
[13:00] considerable amount of time and effort
[13:02] given how different
[13:03] some of its tools and technologies were
[13:05] versus what we had already set up and
[13:06] configured
[13:08] there is still a tremendous amount of
[13:09] work to do on the simulation side but we
[13:11] are getting close to the point
[13:12] at which portions of its simulated data
[13:14] will be an improvement over the
[13:15] algorithmic logic embedded into various
[13:17] services
[13:18] we're going to do a bit more testing
[13:20] before we enable it to start injecting
[13:21] that data into the live game though and
[13:23] even then we're going to start very
[13:24] small and limit the focus to a few
[13:25] select areas so that we can work out any
[13:27] problems
[13:29] the first couple of commodities for
[13:30] which quantum will gain the ability to
[13:32] dictate the price will be fuel and
[13:33] repair materials
[13:35] we're also going to allow it to control
[13:36] the amount of piracy and possibly
[13:38] transport freighters and security in a
[13:40] few test locations but keep in mind that
[13:42] until more of the data behind the
[13:43] curtains is exposed the modulation may
[13:45] at times seem a bit arbitrary
[13:47] we're going to be more aggressive with
[13:48] service beacons and will soon move most
[13:50] of that responsibility the type of
[13:51] beacon being offered the location the
[13:53] reward and the difficulty
[13:55] to quantum our primary focus right now
[13:58] is less on getting a lot of data moving
[13:59] back and forth and more on getting all
[14:01] the technological plumbing working
[14:03] properly
[14:04] in order to properly calculate fuel
[14:06] prices for example quantum needs to have
[14:07] a concept of fuel
[14:09] what type of ships quanta are using and
[14:10] fuel efficiency none of which it
[14:12] previously had
[14:13] in order to gauge the demand for repair
[14:15] services ships in the simulation need a
[14:17] concept of damage which didn't
[14:18] previously exist
[14:20] there's often a lot of service work
[14:22] involved in allowing new types of data
[14:23] to flow between quantum and the game
[14:26] with icash now largely complete we've
[14:28] been able to shift some resources around
[14:30] within the last month have now doubled
[14:31] the number of engineers working on the
[14:33] systemic functionality
[14:34] as a result we're now in the early
[14:36] stages of a number of critical new
[14:37] services including everything from the
[14:39] air traffic control service that's
[14:40] required for server meshing to the mpc
[14:42] scheduler that will enable dynamic
[14:44] populations
[14:45] to the virtual ai service that is
[14:46] necessary for the next major feature i'm
[14:48] going to discuss
[14:51] [Music]
[14:53] star citizen's ai architecture is broken
[14:55] up into three distinct levels
[14:57] the high fidelity characters that you
[14:58] see in the game execute subsumption
[15:00] logic on a server
[15:01] and this is far and away the most
[15:02] computationally expensive of the three
[15:04] types of ai
[15:05] it's got a similar sense think act cycle
[15:07] as the other ai but because you can see
[15:09] the npcs as they execute their tasks
[15:11] there's often little to no potential for
[15:13] cheating or simplification
[15:15] something as simple as sitting in a
[15:16] chair requires a lot of item searching
[15:18] animation raycasting collision detection
[15:20] and more
[15:21] this is a problem because in star
[15:23] citizen we're trying to simulate entire
[15:24] solar systems and we can't afford to
[15:26] execute this kind of expensive logic
[15:27] for tens of thousands of characters that
[15:29] players can't even see
[15:31] so we do what many games do and
[15:32] temporarily suspend any ai that's not in
[15:34] proximity to a player
[15:36] this creates another roadblock though
[15:38] because you can't effectively simulate
[15:39] an economy
[15:40] when portions of it are constantly being
[15:41] shut down and restarted and it's the
[15:43] fundamental reason why quantum exists
[15:45] merging these two ai extremes
[15:47] subsumption and quantum solves our basic
[15:49] problem
[15:50] npcs look and act exactly as you'd
[15:52] expect when you can see them and the
[15:53] universe's economic wheels always remain
[15:55] in motion
[15:56] there's one major flaw however with this
[15:58] solution the heavyweight subsumption
[16:00] npcs that you can see and interact with
[16:02] don't execute any ai logic when you're
[16:03] not around and thus they're severely
[16:05] limited in what they can do and when
[16:06] they can do it
[16:08] solving this issue is the responsibility
[16:09] of a middle tier systemic logic that i
[16:11] call virtual ai
[16:13] virtual ai allows virtual npcs vmpcs for
[16:16] short
[16:17] to seamlessly transition back and forth
[16:19] between the fully realized and physical
[16:21] world of subsumption
[16:22] and a far more efficient intangible
[16:24] backend ether where they retain the
[16:26] ability to interface with elements of
[16:27] the systemic architecture just like a
[16:29] player
[16:30] this technology is going to unleash a
[16:32] lot of new and exciting gameplay but
[16:33] it's going to take more than a few
[16:34] sentences to properly explain what i'm
[16:36] talking about so
[16:37] let's walk through it all in more detail
[16:40] this is the stanton solar system you can
[16:42] see the four planets arcorp hurst and
[16:44] microtech and crusader
[16:46] i'm going to zoom into the crusader
[16:47] planetary area and you can see its three
[16:49] moons yella daymar and selin and the
[16:51] space station port olisar
[16:53] you can imagine looking at that station
[16:55] hundreds of npcs going about their lives
[16:58] this is how you think of the universe
[17:00] always in motion always
[17:01] changing always real regardless of
[17:03] whether you're actually looking at it or
[17:04] not
[17:05] as i mentioned though that's an illusion
[17:07] we can't afford it
[17:08] when you're not looking the server
[17:10] deactivates and unloads a lot of
[17:11] unnecessary baggage
[17:13] but a wide assortment of backend
[17:14] services retain knowledge of everything
[17:16] that really matters and provide an
[17:17] active
[17:18] interface to those systems npc's outside
[17:21] of landing zones are treated differently
[17:23] quantum accumulates statistical
[17:24] information for where npcs should reside
[17:26] and what they should be doing from its
[17:27] quanta
[17:28] which allows us to determine how often
[17:30] you should see a pirate or what a
[17:31] freighter you run into you should have
[17:32] in its cargo hold
[17:34] these areas are called probability
[17:35] volumes and the important thing to note
[17:37] is that the npcs they create are
[17:38] ephemeral
[17:40] they pop into existence for a brief
[17:41] moment so that the area you're viewing
[17:43] looks like what quantum says it should
[17:44] and once they're sufficiently far from
[17:46] any players are completely and forever
[17:47] destroyed
[17:49] i'm going to add a player here which you
[17:51] can see off the left as they pass by
[17:53] damar they're in range of a probability
[17:55] volume that eventually decides they
[17:56] should encounter a pirate
[17:58] so a pirate is created and engages the
[18:00] player and after a bit the player
[18:01] decides that they're outmatched and
[18:03] decides to run
[18:04] once they're sufficiently far from that
[18:06] npc it's destroyed
[18:07] it doesn't persist in any fashion and
[18:09] you'll never see them again
[18:11] the player continues traveling to port
[18:12] olisar and the translucent green
[18:14] wireframe indicates that the area isn't
[18:16] loaded on the server and thus the
[18:17] subsumption ai isn't active
[18:19] i'm going to add a vmpc in a moment but
[18:21] first let's quickly recap what makes
[18:22] them so different
[18:24] vmpcs always execute some form of ai
[18:27] logic regardless of whether or not they
[18:28] are in proximity to a player
[18:30] virtual ai is extremely lightweight and
[18:32] computationally efficient stripping out
[18:34] all of the expense related to visuals
[18:36] and unnecessary details
[18:37] yet retains the full ability to interact
[18:39] with the game in the ways that truly
[18:40] matter
[18:42] virtual ai executes within a back-end
[18:44] service and can thus easily be scaled
[18:46] and doesn't put any load on the servers
[18:49] the mpcs can seamlessly transition back
[18:51] and forth from lightweight back-end
[18:52] driven ai entities to full-blown
[18:54] subsumption-driven npcs
[18:56] and are thus indistinguishable from an
[18:58] npc that really did execute expensive
[19:00] subsumption logic all the time
[19:02] lastly bmpcs gradually build up their
[19:04] own unique histories as they live out
[19:06] their lives
[19:07] they evolve okay so back to the example
[19:11] once the player gets close enough to
[19:12] port olisar that area is streamed into
[19:14] existence loaded onto a server and the
[19:15] npc is initialized to resume whatever
[19:17] they should be doing at that time of day
[19:20] now i'm going to introduce a vmc pirate
[19:22] near the player and they're going to
[19:23] immediately attack
[19:25] after a few moments the vnpc comes out
[19:26] ahead in this battle and the player is
[19:28] killed
[19:30] because their crime was committed in
[19:31] range of an act of comrade it's recorded
[19:33] in their character history along with
[19:34] the time and location of the felony
[19:36] an upcoming tracking app will allow you
[19:38] to access information like this if
[19:39] you've registered with the local
[19:40] authorities so that the digital
[19:42] footprints players and vmpcs leave
[19:44] behind can be tracked
[19:46] this vmpc's name is dragon and since
[19:48] they're now wanted in this jurisdiction
[19:49] the comrade has a fixed real-time marker
[19:51] to his position
[19:53] with the only player in this area dead
[19:55] the server now streams port olosar and
[19:57] the kamaray out but as i previously
[19:58] noted vmpcs aren't destroyed like a
[20:00] regular npc created from a probability
[20:02] volume and their logic isn't suspended
[20:04] like an npc at a landing zone
[20:06] instead vnpcs simply transition from
[20:08] their physicalized state where authority
[20:10] over their actions is controlled by
[20:12] substantial logic executing on a server
[20:14] to their native ethereal state where
[20:16] their virtual ai executes on the back
[20:17] end
[20:19] dragon now begins to exit the area and
[20:20] the kamaree continues to track his
[20:22] position until he passes out of range at
[20:24] which point the real-time information
[20:25] converts to a last known position report
[20:28] he's decided that he needs money and
[20:30] he's a bit risk-averse so he elects to
[20:31] head all the way out to yellow where
[20:33] there are quite a few transport
[20:34] freighters carrying valuable ore and
[20:35] little in the way of security
[20:38] okay dragon has arrived at yellow's
[20:39] asteroid field and has now crossed back
[20:41] into range of another act of comrade so
[20:43] his real-time position is now once again
[20:45] being reported as indicated by both the
[20:46] character history and the tracking
[20:48] marker
[20:49] there aren't any players in this area
[20:51] unless none of this is streamed onto a
[20:53] server everything you're seeing is a
[20:54] result of a variety of different
[20:55] services communicating with one another
[20:59] vmpcs trigger probability volumes just
[21:01] like players and yellows shows that
[21:02] there's quite a bit of freighter traffic
[21:04] in this area
[21:05] so dragon won't have to wait very long
[21:07] before he generates an encounter
[21:09] there's one dragon just caused the
[21:11] creation of a freighter which itself
[21:12] becomes a vmpc so that it can react to
[21:14] what's happening via its own virtual
[21:16] ai dragon now engages the freighter he
[21:18] starts firing on it
[21:20] he's still within range of an active
[21:21] comrade and thus this latest crime is
[21:23] added to his character history
[21:24] he's now wanted for both murder and
[21:26] piracy and the bounty on him just jumped
[21:27] from six to ten thousand uec
[21:30] increasing the size of their rap sheet
[21:31] and the price in their head is one of
[21:32] the simplest forms of vmpc evolution and
[21:35] over time we'll look to add additional
[21:36] ways for bmpcs to grow and increase
[21:38] their influence
[21:39] from recruiting followers in an attempt
[21:41] to become a shipping magnet or a crime
[21:42] boss to
[21:43] offering their own missions the captain
[21:46] of that freighter isn't going to
[21:47] surrender so easily he's broadcast a
[21:49] combat assist service beacon that
[21:50] players can choose to accept and he's
[21:52] offered a 3000 uec
[21:53] reward for his protection unfortunately
[21:55] for him he's pretty heavily outmatched
[21:57] and he's quickly
[21:58] destroyed causing the service beacon to
[21:59] expire before anyone can come to his aid
[22:02] bits of information like this are fed
[22:04] back to quantum and insufficient
[22:06] quantity will cause
[22:07] all sorts of things to change how much
[22:09] security patrol missions that area pay
[22:10] what transports that have to travel
[22:12] through that area will demand as a risk
[22:13] premium
[22:14] and how much a ship in distress will
[22:16] offer for someone to come to their aid
[22:19] the freighter's destruction has left
[22:20] some debris and possibly a few items of
[22:22] value so if a player had already been in
[22:24] route they might arrive to find the
[22:25] aftermath
[22:26] another murder has now been attributed
[22:28] to dragon and the bounty on him just
[22:29] once again jumped this time from 10 to
[22:31] 14 000 uec
[22:33] he took a bit of damage from that
[22:35] encounter and is eventually going to
[22:36] need some repairs
[22:37] a harder working pirate might look to
[22:39] plunder a few more freighters before
[22:41] heading back
[22:41] but dragon's personality attributes
[22:43] indicate that once he's got enough cash
[22:44] to cover the basics
[22:45] he's more interested in drinking and
[22:47] gambling than piracy
[22:48] so he leaves the area and once again the
[22:50] real-time location tracking ceases once
[22:52] he's out of range the comrade
[22:54] he's heading back to port olisar which
[22:56] is the closest location that has
[22:57] everything he wants
[22:58] a fence to sell his stolen goods shops
[23:00] to repair and restock his ship and a bar
[23:02] where he can spend the remainder of his
[23:04] cash
[23:05] the comrade near port olisar has been
[23:07] disabled which means that dragon's
[23:08] position isn't updated upon approach
[23:10] the area remains devoid of any players
[23:12] and thus it's still not streamed into
[23:14] memory
[23:15] dragon can therefore remain in his
[23:17] ethereal state and avoid a lot of
[23:18] computational expense related to
[23:20] maneuvering his ship
[23:21] but he still needs to interface with the
[23:22] air traffic control service to request a
[23:24] landing pad and transition from his ship
[23:26] to the station
[23:28] services like this are always fully
[23:29] operational and accessible to vmpcs
[23:33] that landing request is logged to his
[23:34] history though so while the disabled
[23:36] kamaray would make it a bit harder for a
[23:37] bounty hunter to track him there are
[23:39] lots of other ways by which locational
[23:40] information on a character can be
[23:42] obtained
[23:43] dragon needed to refuel and repair his
[23:45] ship and you can see those actions
[23:46] reflected in his history as he
[23:48] interfaces with the shop service that
[23:49] controls those operations
[23:52] when a vmpc transitions to a landing
[23:54] zone that's streamed in the virtual ai
[23:55] service that drives their logic
[23:57] temporarily seeds control of the
[23:58] character to the npc scheduler that
[24:00] specifies who resides at what location
[24:03] this is the same foundation upon which
[24:05] the dynamic populations feature will be
[24:06] built
[24:07] except that it will be quantum instead
[24:08] of the virtual ai service dictating the
[24:10] changes in the population
[24:12] the end result is that if a vmpc is
[24:15] assigned to a landing zone and you're at
[24:16] that location you can run into them like
[24:18] any other npc
[24:20] dragon is now hanging out in local bar
[24:22] which was added to port olisar for the
[24:23] purposes of this demo
[24:25] if you were to walk into the bar at this
[24:26] moment he'd be physicalized with the
[24:28] rest of the environment and you'd
[24:29] actually see him there
[24:31] dragon eventually gets his fill of
[24:32] entertainment or maybe just runs out of
[24:34] money
[24:35] either way it's back to work and he'll
[24:36] be jetting back to yellow to try and
[24:37] prey on more unprotected cargo ships
[24:40] so he contacts air traffic patrol to get
[24:42] clearance to leave the area and departs
[24:45] the same player that dragon first
[24:46] encountered and killed
[24:48] is looking to exact some revenge though
[24:49] and claim the big bounty on dragon's
[24:51] head
[24:52] they've surmised that there might be a
[24:53] pattern to dragon's movement and think
[24:54] that he might head back out to yella
[24:56] so they position themselves between port
[24:58] aldazar where they know that dragon just
[25:00] left and yela and activate a quantum
[25:02] interdiction field
[25:04] dragon still in his lightweight ethereal
[25:05] form initiates a quantum jump from
[25:07] portal certain yellow and
[25:09] just like a player routes that movement
[25:11] through the probability volume service
[25:12] that is responsible for interdictions
[25:15] once he gets within range the player's
[25:16] interdiction bubble his jump is
[25:18] interrupted and he transitions from
[25:19] executing virtual ai on the back end to
[25:21] a full-blown subsumption driven ai
[25:23] executing logic on a server so that the
[25:25] two of them can battle it out
[25:26] if the player once again gets the worst
[25:28] of it they might decide to change up
[25:30] their tactics a bit and wait to see if
[25:31] dragon soon returns to port olisar where
[25:33] they could try to sneak up on him on
[25:34] foot
[25:38] [Music]
[25:40] the ultimate objective for star citizen
[25:42] has always been a dynamic and evolving
[25:44] universe
[25:45] historically however our mission content
[25:47] has always been static we've had no
[25:48] ability to modify it after we pushed a
[25:50] version out the door
[25:52] missions have also been confined to a
[25:53] single server each of which was thus its
[25:55] own little
[25:56] island cut off and oblivious to whatever
[25:57] was happening elsewhere
[25:59] environmental data that applies to all
[26:01] of the servers what items the shop
[26:03] offers for sale how many freighters or
[26:04] pirates are in a given region of space
[26:06] or what missions are available to
[26:07] landing zone
[26:08] couldn't be altered by the instance
[26:10] mission logic that executes on
[26:11] individual servers since we didn't yet
[26:13] have a means of coordinating those
[26:14] efforts
[26:15] the end result has been a universe that
[26:17] often feels static and fails to offer
[26:19] sufficient variety
[26:21] dynamic events are a special type of
[26:23] mission intended to help remedy this
[26:25] problem
[26:25] they are modular chunks of configurable
[26:27] content that might involve anything from
[26:29] throwing a simple wrench into the wheels
[26:31] of the systemic economy
[26:32] to a prison break that stresses the law
[26:34] system to a full-blown invasion of a
[26:36] solar system dynamic events are global
[26:38] in nature
[26:39] they affect the entire array of servers
[26:42] they do this via extensions to the
[26:43] mission language that allow them to
[26:45] declare what logic runs in parallel
[26:47] on every server and what executes on the
[26:49] back end while at the same time gaining
[26:51] the ability to query and modify
[26:52] a lot of global data this allows us to
[26:55] keep the critical elements of these
[26:57] scenarios synchronized across all the
[26:59] servers while retaining the flexibility
[27:00] for every server to have its own unique
[27:02] state
[27:03] conceptually the servers control the
[27:05] battle and the back end manages the war
[27:08] the xeno threat mission that we released
[27:09] in the first quarter was a dynamic event
[27:12] it was triggered manually although
[27:13] quantum will eventually gain the ability
[27:15] to automatically activate these
[27:16] scenarios when conditions weren't
[27:19] if for example the amount of piracy in
[27:21] an area gets out of control
[27:22] quantum might search through the mission
[27:23] library to find a dynamic event
[27:25] compatible with an elevated amount of
[27:26] piracy
[27:27] and then customize and instantiate that
[27:29] scenario so that a lot of handcrafted
[27:30] content
[27:31] unique character dialogue challenges
[27:33] rewards can be blended into the universe
[27:36] simulation
[27:37] we're aiming for the best of both worlds
[27:39] in a systemic universe that provides a
[27:41] logically consistent background
[27:42] environment with the ability to overlay
[27:44] content and storylines that writers
[27:46] designers and many others have spent a
[27:47] lot of time creating
[27:50] this is quasar a new tool that lets us
[27:52] manage dynamic events in the live game
[27:54] it's linked to the same star map as
[27:56] quantum and has access to much of the
[27:57] same information
[28:00] i'm looking through the library of
[28:01] available events and as i select each
[28:03] one you can see the input parameters
[28:05] that can be used to customize that
[28:06] particular scenario
[28:08] we've got quite a few of these at
[28:09] different stages of development with
[28:11] fleet week nine tails and infiltrator
[28:12] being the next few in the pipeline
[28:15] i'm going to walk you through a simple
[28:17] dynamic event called quasar demo that
[28:18] will show off a few of the systemic
[28:20] hooks we've linked into the mission
[28:21] system
[28:22] but first i need to specify the inputs
[28:25] the first thing that it requires is the
[28:26] location and i'm going to select port
[28:28] olisar by simply clicking on the star
[28:30] map
[28:31] the next couple of variables require a
[28:33] ship type i'm going to specify interest
[28:35] for the defender input and call us
[28:36] black for attackers if quantum were to
[28:39] programmatically trigger an event like
[28:40] this and fill in variables like these
[28:42] with something that made contextual
[28:43] sense
[28:44] so for example we'd be looking at what
[28:46] sort of ships were in the area where the
[28:47] event would be activated to determine
[28:48] what it could consider
[28:50] the next variable relates to difficulty
[28:52] which in this particular case has simply
[28:54] been configured to dictate the speed at
[28:55] which enemies will appear
[28:58] the last input enemies remaining
[29:00] indicates how many enemies must be
[29:01] destroyed in aggregate across all of the
[29:04] servers
[29:04] in order for the war phase to be
[29:06] completed and the victory phase to be
[29:07] activated
[29:08] i'm going to set this to 10. with
[29:11] everything configured i can now activate
[29:12] the event
[29:14] quasar communicates this request to the
[29:16] dynamic mission service which then
[29:18] initializes the back-end logic allocates
[29:20] the global variables sets up the phase
[29:21] conditionals
[29:22] informs all of the servers to start any
[29:24] instance logic the event might contain
[29:26] and quite a bit more i'm now going to
[29:29] flip over to quasar's active tab so that
[29:31] we can check the event's real-time data
[29:33] you can see that there's currently just
[29:35] a single event active but we could just
[29:36] as easily activate multiple and give
[29:38] each of them a different set of
[29:39] inputs dynamic events organize
[29:42] changes to back in data in coordinated
[29:44] chunks of logic called
[29:45] phases and the phases that have been
[29:47] created for this event can be seen at
[29:48] the top right
[29:50] they're all inactive now hence the red
[29:52] color and will turn green if their
[29:53] conditional evaluates to true at which
[29:55] point their embedded logic would execute
[29:58] the events global variables are shown
[29:59] below that and it's in this area that
[30:01] you can see the enemy's remaining
[30:02] variable for which we previously
[30:03] specified an input value of 10.
[30:06] lower still are the functions for this
[30:07] event that have been marked external and
[30:09] which allow us to manually or
[30:10] programmatically call functions to
[30:12] customize aspects of the event after
[30:14] it's already been launched
[30:16] the list of items that a shop offers to
[30:18] buy or sell has always been static
[30:21] phases though can include shop modifiers
[30:23] which open the door to dynamically
[30:24] changing all sorts of shop related
[30:26] information
[30:27] to test this i'm going to bring up a
[30:29] client window so that we can see what
[30:30] portal sr's admin office is currently
[30:32] buying
[30:33] i've minimized the inventory for this
[30:34] test so i'm only expecting to see a
[30:36] couple of items
[30:38] that's the full list right there just
[30:40] hydrogen and processed food
[30:42] the modify shop phase has been set up to
[30:45] activate when the back-end variable
[30:46] called current phase has a value of one
[30:48] so i'm going to set it to that
[30:50] the phase just turned green meaning that
[30:52] it's enabled and any changes to the
[30:53] backend data have now been applied
[30:56] it applied a shop modifier to crank up
[30:58] the demand for food at port olisar so
[31:00] let's see what's happening to the price
[31:02] it was stable for a long time with just
[31:04] some minor fluctuations
[31:06] now though it's gone through the roof
[31:07] the direct result of all that increased
[31:09] demand
[31:10] so players and quanta would be
[31:12] incentivized by higher prices to help
[31:14] correct this imbalance in the economy
[31:16] this phase also had a shop modifier add
[31:18] a new item for purchase and you can see
[31:20] that quantum already knows about it
[31:22] i'm going to flip back to the client
[31:23] though so that we can verify that this
[31:25] really did affect the inventory within
[31:26] the game
[31:28] sure enough the shop is now looking to
[31:29] purchase a new item medical supplies
[31:33] manual control over the economy like
[31:35] this is not intended to be a substitute
[31:37] for quantum systemically derived
[31:38] adjustments
[31:39] but simply gives us the ability to
[31:41] occasionally nudge the system in a
[31:42] particular direction to add some
[31:44] interest or layer a compatible story
[31:46] onto the background environment or an
[31:47] existing trend quantum will then take
[31:50] these influences
[31:51] factor them into the simulation and
[31:53] output how everything changes in
[31:54] response so that all of the rough edges
[31:56] are smoothed
[31:58] while we're looking at prices i want to
[31:59] show off another new feature that will
[32:00] go at the door within the next few
[32:02] months
[32:03] as designers gain the ability to write
[32:05] mission logic that can properly affect
[32:07] systemic change
[32:08] temporary price imbalances will become
[32:09] more common and we wanted to have a way
[32:11] for the system to actively reach out and
[32:13] inform you rather than relying upon you
[32:14] constantly having to check in on an area
[32:16] to discover that there's an opportunity
[32:19] if we wait just a bit longer the admin
[32:21] office is going to reach a point where
[32:22] it's so desperate for food that it's
[32:23] going to start reaching out
[32:25] looking for ways to obtain more supply
[32:28] it will do this by sending a message
[32:29] that will be recorded in a special area
[32:31] of your journal reserve for price alerts
[32:33] which is basically a precursor to being
[32:34] able to create and post missions
[32:37] you can see the message there indicating
[32:39] that the port officer admin office needs
[32:40] food and what they're willing to pay
[32:41] for it this feature gives designers the
[32:44] ability to dictate at a systemic level
[32:47] how shops will respond to inventory
[32:48] gluts and shortages
[32:50] and this functionality will soon be
[32:51] extended to things other than
[32:52] commodities
[32:54] an area suffering from too much piracy
[32:56] for example might offer to pay
[32:57] mercenaries to come to their aid
[32:59] this is fundamentally different than the
[33:01] brute force tactics we currently rely
[33:03] upon to create missions and dictate when
[33:04] they're available and is far more
[33:06] flexible and powerful
[33:08] what you're really seeing here are the
[33:09] first signs of the dynamic mission
[33:11] system starting to flicker to life and
[33:12] once it hits
[33:13] false stride it's going to transform the
[33:15] gameplay experience
[33:17] next let's take a look at how dynamic
[33:18] events allow encounter probabilities and
[33:20] interdiction frequencies to be adjusted
[33:24] this is the probability volume around
[33:25] port olisar
[33:27] you can see the piracy the red curve and
[33:29] security the blue
[33:31] are inversely related all things being
[33:33] equal if you increase the amount of
[33:34] security you'll get less piracy and vice
[33:36] versa
[33:38] security tends to congregate closer to
[33:39] landing facilities and dissipate as you
[33:41] get farther out and thus piracy tends to
[33:43] gradually increase with distance
[33:46] the likelihood of an encounter is
[33:47] represented by the height of the curve
[33:49] at that distance
[33:50] notice that the chances of running into
[33:52] a freighter the green curve is pretty
[33:54] much constant because once the ship has
[33:55] decided to make the journey to or from
[33:57] port olisar it's committed
[33:59] they've already decided whether or not
[34:00] the risk is worth the reward of
[34:01] traveling the full route
[34:03] i'm now going to activate the lockdown
[34:05] phase of this event which is going to
[34:06] crank up the amount of piracy in the
[34:08] selected area and overwhelm security
[34:11] the red curve piracy now has a much
[34:13] larger average height according to an
[34:14] increased encounter probability
[34:16] and because pirates now greatly
[34:18] outnumber security the curve pushes in
[34:19] much
[34:20] closer to the landing zone the criminals
[34:22] are emboldened because there's no longer
[34:23] sufficient security to deter them
[34:25] the blue curve security looks identical
[34:28] although quantum will over time
[34:30] start adjusting the economic levers to
[34:31] gradually increase the amount of
[34:33] security to combat
[34:34] the threat by offering greater rewards
[34:36] increased piracy has had an immediate
[34:38] impact though on freighter traffic which
[34:40] has dropped precipitously
[34:42] this means that the local economy will
[34:44] start to seize up they won't be able to
[34:46] import food medicine
[34:47] fuel or whatever else they need and they
[34:49] won't be able to export whatever goods
[34:50] and services they produce
[34:52] all of these knock-on effects are only
[34:54] possible because designers will now be
[34:56] able to nudge the economic gears in
[34:57] proper systemic fashion
[35:00] let's test one of these knock-on effects
[35:03] now that we've adjusted the encounter
[35:04] probabilities let's see what that does
[35:05] to quantum travel in the area
[35:08] i'm going to once again bring up a game
[35:09] client this time so that we can watch an
[35:11] avenger titan jumping to portolasar
[35:13] this is a short jump and the chances of
[35:15] interdiction would typically be very
[35:17] slim
[35:18] now that we've injected a much larger
[35:19] pirate presence around that location
[35:21] however that's no longer the case
[35:23] we got ejected from our jump as soon as
[35:25] we got within range of those elevated
[35:26] pirate probabilities which means that
[35:28] getting to port olisar just got a lot
[35:30] more difficult and time consuming and
[35:31] will remain that way until the threat is
[35:33] addressed
[35:34] we're now to the point where we can
[35:36] allow programmatic modification of these
[35:38] data structures and quantum will soon
[35:39] start adjusting these automatically so
[35:41] that all sorts of things within the
[35:42] universe start to ebb and flow
[35:45] what all of this really means is that
[35:47] even when you know that you can buy
[35:49] medical supplies dirt cheap at one
[35:50] location and sell them for a hefty
[35:52] profit at another
[35:53] we can finally start to adjust some of
[35:54] the systemic elements to justify the
[35:56] disparity
[35:57] in short if you wanted to take advantage
[35:59] of portal source elevated prices right
[36:01] now you'd have to fly the last mile at
[36:03] conventional speeds and we'll probably
[36:04] see quite a bit of combat
[36:06] that's going to drive up how long it
[36:07] takes you to make the run you're
[36:08] probably going to burn quite a bit more
[36:10] ammo and require more repairs than it
[36:12] would otherwise be the case
[36:13] and you might want to think about
[36:14] recruiting some armed escorts to help
[36:16] you through the dangerous areas
[36:18] once the risk abates once players in
[36:20] quanta have dispatched enough of the
[36:21] pirates so that travel within this area
[36:23] returns to normal
[36:24] you'll be able to much more easily
[36:25] deliver medical supplies to portals are
[36:27] but of course that increase in supply
[36:29] will quickly shrink the price
[36:30] differential
[36:32] now let's take a look at how each server
[36:34] can host part of a larger event while
[36:35] the things that really matter can remain
[36:37] synchronized
[36:39] i'm going to enable the war phase by
[36:40] calling the start war function
[36:42] that's going to create some staged
[36:44] battles involving the ship types we
[36:45] selected earlier around port alzar the
[36:47] area that we previously selected
[36:50] i brought up a couple of different
[36:51] client windows each of which represents
[36:53] a different server
[36:54] as each cutlass is destroyed on either
[36:56] server the shared variable called
[36:58] enemies remaining is decremented
[37:00] once that variable reaches zero the war
[37:02] phase will automatically terminate and
[37:03] the victory phase will be activated
[37:18] that's it the counter just hit zero and
[37:20] you can see the change in active phases
[37:21] over in quasar
[37:24] that last phase victory kicked off some
[37:26] fireworks around port olisar and just
[37:28] like any other phase change that will
[37:29] automatically be synchronized across all
[37:31] of the servers
[37:33] just to make sure that things are back
[37:34] to normal i'm going to check port
[37:35] olisar's admin office and see what's
[37:37] happening with the inventory in prices
[37:40] they're no longer looking to purchase
[37:41] medical supplies and with the pirate
[37:43] threat eliminated players in quantic can
[37:44] once again quickly and safely reach
[37:46] portolasar
[37:47] as a result the cost of food has started
[37:49] to fall off a cliff and will soon return
[37:51] to something close to its pre-crisis
[37:52] levels
[37:55] [Music]
[37:57] i've covered a lot of ground today
[37:59] quantum has matured considerably since
[38:01] you last saw it
[38:02] the performance issues have been
[38:03] resolved it's been made compatible with
[38:05] our backend infrastructure and it's now
[38:07] communicating with numerous gameplay
[38:08] services
[38:09] lots of new analytical tools and
[38:11] functionality have been added
[38:12] and increased fidelity in areas like
[38:14] quanta attributes and the spatial
[38:16] positioning of resources have allowed us
[38:17] to improve
[38:18] the accuracy of its output we're now in
[38:20] early stage testing to allow quantum to
[38:22] start pushing the first few bits of
[38:23] simulated data out the door and start
[38:25] impacting the game
[38:26] and we expect to go live with these
[38:27] efforts later this year
[38:29] the first stones in the virtual ai
[38:31] foundation were laid long ago but it's
[38:32] only been within the past couple of
[38:34] months
[38:34] as engineering resources rolled off of
[38:36] some other major initiatives
[38:37] that the implementation efforts really
[38:39] started to take off
[38:40] this technology will allow vmpcs the
[38:43] freedom to operate and evolve
[38:44] independently of player actions and open
[38:46] up all sorts of new gameplay
[38:47] possibilities
[38:49] bounty hunter v2 will be the first
[38:50] feature to exploit virtual ai but it's
[38:52] really just the tip of the iceberg
[38:53] insofar as what we eventually plan to do
[38:55] with it
[38:56] some of the virtual ai tech foundation
[38:58] will beget other important features like
[38:59] the ability to dynamically adjust the
[39:01] size and composition of the populations
[39:03] at landing zones
[39:05] dynamic events are the culmination of
[39:07] several major technological components
[39:09] coming together from the dynamic mission
[39:10] service to quasar
[39:12] and are already a reality we ship the
[39:14] first one
[39:15] xenothread in the first quarter and have
[39:16] a number of others at various stages of
[39:18] development for release later this year
[39:19] and next
[39:21] many of these initial releases will
[39:22] serve as testing boards for new features
[39:24] from shop and probability volume
[39:26] modifiers to spawn closets and the
[39:27] dynamic generation of that meshes
[39:30] dynamic events give us the ability to
[39:32] modify the universe in dramatic or
[39:33] subtle fashion whenever we want
[39:35] and to seamlessly blend those changes
[39:37] into the quantum simulation so that
[39:38] everything looks and feels natural
[39:41] all of this will ultimately mean a more
[39:43] interesting realistic and exciting
[39:44] universe for you to explore and
[39:46] experience
[39:47] i hope that this presentation has given
[39:49] you a good sense of what we've been
[39:50] doing over the past year and what those
[39:51] efforts will mean for the game in the
[39:53] coming one
[39:54] until next time

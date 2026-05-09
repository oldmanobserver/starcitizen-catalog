# Star Citizen: Quantum, Quasar, and Virtual AI

**Video:** https://www.youtube.com/watch?v=2muGWtX8e7g
**Date:** 2021-05-24
**Duration:** 40:02

## Transcript

[Music]
hi
i'm tony zurvik and i'm the director of
persistent universe for star citizen
today i'm going to give you an update on
how some of the backend architecture and
systemic functionality is coming along
what sort of progress we've made over
the past year what's on the horizon
and how all of this is going to impact
your gameplay experience
in order to give you a more
comprehensive understanding of the
long-term direction and what all of this
will ultimately mean i'm going to cover
areas that are in various stages of
development and will sometimes resort to
illustrative examples so that the
underlying concept can be made more
clear
first a quick review quantum is a
simulation of the game universe and its
purpose is to allow things the price of
goods at a given shop the amount of
piracy near a landing zone or what
missions are being offered
to evolve and change over time in
logical and realistic ways
it does this by simulating hundreds of
thousands of lightweight npcs called
quanta whose ai logic is focused on just
those aspects needed to produce the
required information
based upon a small list of attributes
each quantum makes its own decisions
using the same resources shops and jobs
as players
the simulation will need to calculate
many millions of decisions per minute
and thus the ai behavior of quant is
focused on the most economically
impactful details
which lets quantum focus all of its
processing power on just those things
that truly matter
every quanta possesses its own unique
set of attributes that influence how
well it performs and how it perceives
opportunities
the initial implementation of attributes
will have two main categories
proficiencies and traits
proficiencies act like a multiplier on
how well quantum perform a given task
different jobs will require different
proficiencies and higher proficiencies
will equate to superior execution
traits describe what kind of jobs a
quantum prefers to do by modifying their
perceived value of the job
each job will have a specific alignment
and when a qantas traits match up with
jobs alignment they will perceive the
payout of that job to be higher
to illustrate the concept let's take two
jobs on either end of the aggression
scale and suppose for now
that they pay out the same now let's
create a quanta with an average
aggression rating
this quanta is no closer to the
aggression alignment of factory worker
than they are to security so it's no
surprise that for this quantum the
payoff for both jobs looks the same
however as we decrease the aggression
rating of this quanta we can see that
the perceived amount of money for both
jobs changes
again the actual pay hasn't changed at
all only the perceived value from that
qantas point of view
it's still possible for the quantity to
choose security but in this case
security would need to pay four times as
much
if we change this quantus aggression
trait to be very high the opposite
happens
now the aggressive security job looks
like it pays much more and the peaceful
factory worker jobs appear to pay much
less
of course jobs have more than a single
trade to distinguish themselves suppose
we take another aggressive job
pirate with just one dimension the
pirate job would look just as lucrative
to this quanta as a security job
we can differentiate between these two
jobs by adding the morality trait and
putting both of these aggressive jobs on
the proper place on that scale
now that all jobs have a unique
combination of trade alignments we can
watch the perceived payout for all three
of these jobs change
even though in this case all jobs
actually pay the exact same amount
we're currently experimenting with four
different traits but expect to add at
least a few more over time to help
ensure that quanta do not congregate
around the highest paying job at any
given moment and instead
just like a real population of
individuals all perform their own unique
mental calculus to determine what looks
most appealing to them and in effect
gives us the nice distribution of
workers that we want
the quantum simulation that we ran at
the last citizencon was implemented in
typescript a relatively slow language
that limited us to less than 10 000
quanta
all of that logic has since been
rewritten in c-sharp and a lot of time
and effort invested into optimizing the
threading and resource locking which
wound up increasing performance by more
than two orders of magnitude
stanton is one of the more complex solar
systems and will require about fifty to
a hundred thousand quanta in order to
achieve the required fidelity which
means we've got a lot of extra headroom
without any additional performance
tuning
to support upcoming solar systems like
pyro
much like a real economy quantum
produces a tremendous amount of data and
there are countless ways to adjust the
simulation
finding a combination that produces the
desired results is difficult
and in order to solve this problem we
created odin a plug-in for the
python-based jupyter lab environment
odin is a powerful web-based tool that
allows for real-time data interpretation
of the game's dynamic and complex
economy
based on the actions of both players in
the live game and quanta
here i'm using odin to simultaneously
show all of the graphs related to the
economy of aluminum
where it's mined refined manufactured
and sold around the stanton system
it's a bit overwhelming so i'm going to
refine the search by adding the word
buying to the graph explorer
before seeing the actual graphs we can
preview which ones are searches
identified which is very useful in more
complicated search scenarios
in this case though we've already
whittled things down to a manageable
size so i'm going to jump to the actual
graphs
everything looks pretty healthy you can
see the cyclical nature of commodity
prices a sign that we're on the right
track and getting the economic
modulation we want
all of these graphs are updated from the
simulation in real time and we can zoom
in on particular time periods of
interest which is invaluable when trying
to figure out exactly why the
availability of a critical resource
dried up
or the price of something went through
the roof with such a complex system it's
often difficult to predict what sort of
information we
might want to inspect and odin was
therefore designed to be extremely
flexible and adaptive
one particularly powerful data analysis
tool that we developed allows us to view
the flow of goods and services from a
high-level perspective
we call it the la zaygraph and it can
dynamically target economic flows and
animate transitions so that we can
visually see how things change over time
here i've selected a number of different
product nodes and you can see all the
economic
relationships for those items laid out
on the graph the graph allows us to
switch between several key flows like
the volume of goods the flow of uec and
even the value density of specific
routes in the universe
the nodes are ordered by greatest to
least economic activity and changes over
time will reorder them
we can thus detect important shifts in
the economy simply by observing how the
nodes adjust their position
this tool can inspect both real-time and
historical data so we can step back in
time and see the progression of factors
that caused a problem to develop
and what could be done to remedy it when
inspecting a segment of time you can see
elements of the economy phasing in and
out depending upon whether or not they
were relevant during that period
often we'll want to dig into a
particular material to investigate how
that material flows throughout the
economy
with the laser graph we can choose a
material like aluminum and then all of
the items that metal is used to
construct
which immediately gives us an intuitive
view of the relationships between
manufacturing recipes and system-wide
logistics from a bird's eye view
here it looks like most of the raw
aluminum in the economy is being
funneled into items that are being sold
in shops on crusader and art corp
after a while though the shops at
crusader run short of inventory and stop
selling such goods and all the sales
moved to hearst in an artboard
as new materials recipes and items are
added to an increasingly complex
universe
and player behaviors shift we'll
frequently run into such problems and
analytical tools like the lasergraph
will be invaluable
in helping us to quickly identify such
issues and determining what needs to be
done to restore balance
player actions are fed back into quantum
so that it can factor that data into the
simulation and odin can evaluate that
information just as easily as it can
that drive from quanta
it's fully linked into the law system
for example and can thus generate a heat
map showing where players are committing
specific crimes
if there's too much pvp in an area
that's supposed to be secure
we might add more security place
additional turrets or increase the
penalties levied by the law system
to be clear odin's analytical and
statistical capabilities will be of
extensive benefit to the quantum
simulation too
as they'll allow it to better understand
how to adjust various dials and levers
to allow for a dynamic universe where
things
logically ebb and flow and everything
functions as part of a larger more
complex machine
quanta focused on transporting goods for
example will demand a price premium
based upon how much risk they'll be
exposed to on their route
and odin can sort all of the possible
paths they might take by risk
fuel consumption or whatever other
metric they wish to consider so that
they can decide whether they're
interested in the job
and if so what sort of payment they
would require
here's a bar graph showing where all
these felons are spending their time
and another one showing how they're
spending their money
odin can identify the most popular
mining sites as well as what materials
are being extracted from those locations
it knows what sort of ships players are
flying how many players are on board and
what sort of ships they're squaring off
against
odin has complete knowledge of the
mission system which allows it to map
player positions against the missions
they've accepted
in one shot then we can get a sense of
which missions players find most
interesting so that we can focus on
creating more of that type of content
and where those missions are taking them
so that we can understand sections of
the solar system that are underutilized
one of the most interesting graphs we've
created is this one that measures
mission design quality
each circle represents a mission and
larger circles indicate that more
players have done that particular
mission
the x-axis details the percentage of
players that successfully completed the
mission out of all of the players who
completed it
and the y-axis denotes the percentage of
players that finish the mission even if
they failed it
this exposes all sorts of interesting
insights to us
low positions on the graph for example
indicate that most players are getting a
result other than success or failure
they're either abandoning the mission or
disconnecting neither of which is good
positions on the far left mean that most
of the players that undertook that
mission failed it
the lower left quadrant signifies
missions that are abandoned frequently
and fail when they aren't which likely
points to a problem
missions near the lower right have a
high success rate but are frequently
abandoned
possibly indicating that they're too
easy or boring the most
interesting missions are in the upper
middle they're frequently played through
to the end but aren't always successful
these are the missions that are both
engaging and difficult
we use information like this to tune the
simulation but also to give us basic
feedback on what sort of missions
players find most appealing and where
problems reside
the refining gameplay that was released
late last year made use of a couple of
new back-end services
the job service is more general purpose
and will also be a key component in the
implementation of a number of other
upcoming features including everything
from cargo loading and unloading
to repair refuel and restocking services
the refining service provides game
servers with the ability to retrieve a
refiner's available processing capacity
and a price quote for a given quantity
of material with the specified speed and
quality options
these new services exemplify the way the
development nowadays often proceeds
which is to ensure that all of the
linkage to and from the data source is
properly abstracted from the start
such that once quantum can provide the
necessary data we can flip a switch to
activate it
previously when quanta traveled to a
planet or a moon to minor resource they
picked a random location on the surface
this meant that quantum wasn't yet
capable of generating the spatial
fidelity we needed so that we could
properly determine exactly where npcs
should and shouldn't be found
the resource service that we completed
last year however provides quantum with
an api that not only gives it access to
this information
but also enables those amounts to be
modified so that as players in quantum
mining area it will gradually be
depleted
to demonstrate i've brought up a planet
now i'm going to highlight the location
of all the gold ore
players in quanta of course would not
have this information and to represent
that fact i'm going to place a shadow
over everything
you can see a single quant exploration
ship approaching the planet from the
right
as it travels across the surface it will
unveil the quantity and location of that
ore visually represented by removing the
shadow
and then broadcast that information to
other quantum within its organization
it has discovered a huge vein of
valuable ore and quantum minors have now
started arriving in mass to extract it
they're focusing predominantly on those
areas where the concentration is known
to be highest although they'll also
consider things like the amount of risk
in a given area
perhaps caused by a player or mpc
organization fighting to control that
region
i'm running this at an accelerated rate
and you can see that the amount of ore
at that first large site is declining
rapidly
the explorer has now discovered a second
field of gold ore near the equator
and because the original deposit has now
been mined so extensively what remains
is more time consuming and difficult to
extract and is thus relatively less
attractive
the quantity figured this out and most
of them have started to focus their
attention on the newer site
taken together these new features allow
quantum to generate a lot more detailed
information which will in turn result in
a better and more realistic gameplay
experience
quantum will know where exactly on the
surface of a planet npcs might be found
and what they should be doing
you'll understand the value of knowledge
and factor its acquisition sharing and
sale into its calculations including
what any information you eventually
attempt to sell would be worth
quantum has now been pretty thoroughly
integrated into our back-end
architecture and the service will be
built and shipped with all future
releases of the game which took a
considerable amount of time and effort
given how different
some of its tools and technologies were
versus what we had already set up and
configured
there is still a tremendous amount of
work to do on the simulation side but we
are getting close to the point
at which portions of its simulated data
will be an improvement over the
algorithmic logic embedded into various
services
we're going to do a bit more testing
before we enable it to start injecting
that data into the live game though and
even then we're going to start very
small and limit the focus to a few
select areas so that we can work out any
problems
the first couple of commodities for
which quantum will gain the ability to
dictate the price will be fuel and
repair materials
we're also going to allow it to control
the amount of piracy and possibly
transport freighters and security in a
few test locations but keep in mind that
until more of the data behind the
curtains is exposed the modulation may
at times seem a bit arbitrary
we're going to be more aggressive with
service beacons and will soon move most
of that responsibility the type of
beacon being offered the location the
reward and the difficulty
to quantum our primary focus right now
is less on getting a lot of data moving
back and forth and more on getting all
the technological plumbing working
properly
in order to properly calculate fuel
prices for example quantum needs to have
a concept of fuel
what type of ships quanta are using and
fuel efficiency none of which it
previously had
in order to gauge the demand for repair
services ships in the simulation need a
concept of damage which didn't
previously exist
there's often a lot of service work
involved in allowing new types of data
to flow between quantum and the game
with icash now largely complete we've
been able to shift some resources around
within the last month have now doubled
the number of engineers working on the
systemic functionality
as a result we're now in the early
stages of a number of critical new
services including everything from the
air traffic control service that's
required for server meshing to the mpc
scheduler that will enable dynamic
populations
to the virtual ai service that is
necessary for the next major feature i'm
going to discuss
[Music]
star citizen's ai architecture is broken
up into three distinct levels
the high fidelity characters that you
see in the game execute subsumption
logic on a server
and this is far and away the most
computationally expensive of the three
types of ai
it's got a similar sense think act cycle
as the other ai but because you can see
the npcs as they execute their tasks
there's often little to no potential for
cheating or simplification
something as simple as sitting in a
chair requires a lot of item searching
animation raycasting collision detection
and more
this is a problem because in star
citizen we're trying to simulate entire
solar systems and we can't afford to
execute this kind of expensive logic
for tens of thousands of characters that
players can't even see
so we do what many games do and
temporarily suspend any ai that's not in
proximity to a player
this creates another roadblock though
because you can't effectively simulate
an economy
when portions of it are constantly being
shut down and restarted and it's the
fundamental reason why quantum exists
merging these two ai extremes
subsumption and quantum solves our basic
problem
npcs look and act exactly as you'd
expect when you can see them and the
universe's economic wheels always remain
in motion
there's one major flaw however with this
solution the heavyweight subsumption
npcs that you can see and interact with
don't execute any ai logic when you're
not around and thus they're severely
limited in what they can do and when
they can do it
solving this issue is the responsibility
of a middle tier systemic logic that i
call virtual ai
virtual ai allows virtual npcs vmpcs for
short
to seamlessly transition back and forth
between the fully realized and physical
world of subsumption
and a far more efficient intangible
backend ether where they retain the
ability to interface with elements of
the systemic architecture just like a
player
this technology is going to unleash a
lot of new and exciting gameplay but
it's going to take more than a few
sentences to properly explain what i'm
talking about so
let's walk through it all in more detail
this is the stanton solar system you can
see the four planets arcorp hurst and
microtech and crusader
i'm going to zoom into the crusader
planetary area and you can see its three
moons yella daymar and selin and the
space station port olisar
you can imagine looking at that station
hundreds of npcs going about their lives
this is how you think of the universe
always in motion always
changing always real regardless of
whether you're actually looking at it or
not
as i mentioned though that's an illusion
we can't afford it
when you're not looking the server
deactivates and unloads a lot of
unnecessary baggage
but a wide assortment of backend
services retain knowledge of everything
that really matters and provide an
active
interface to those systems npc's outside
of landing zones are treated differently
quantum accumulates statistical
information for where npcs should reside
and what they should be doing from its
quanta
which allows us to determine how often
you should see a pirate or what a
freighter you run into you should have
in its cargo hold
these areas are called probability
volumes and the important thing to note
is that the npcs they create are
ephemeral
they pop into existence for a brief
moment so that the area you're viewing
looks like what quantum says it should
and once they're sufficiently far from
any players are completely and forever
destroyed
i'm going to add a player here which you
can see off the left as they pass by
damar they're in range of a probability
volume that eventually decides they
should encounter a pirate
so a pirate is created and engages the
player and after a bit the player
decides that they're outmatched and
decides to run
once they're sufficiently far from that
npc it's destroyed
it doesn't persist in any fashion and
you'll never see them again
the player continues traveling to port
olisar and the translucent green
wireframe indicates that the area isn't
loaded on the server and thus the
subsumption ai isn't active
i'm going to add a vmpc in a moment but
first let's quickly recap what makes
them so different
vmpcs always execute some form of ai
logic regardless of whether or not they
are in proximity to a player
virtual ai is extremely lightweight and
computationally efficient stripping out
all of the expense related to visuals
and unnecessary details
yet retains the full ability to interact
with the game in the ways that truly
matter
virtual ai executes within a back-end
service and can thus easily be scaled
and doesn't put any load on the servers
the mpcs can seamlessly transition back
and forth from lightweight back-end
driven ai entities to full-blown
subsumption-driven npcs
and are thus indistinguishable from an
npc that really did execute expensive
subsumption logic all the time
lastly bmpcs gradually build up their
own unique histories as they live out
their lives
they evolve okay so back to the example
once the player gets close enough to
port olisar that area is streamed into
existence loaded onto a server and the
npc is initialized to resume whatever
they should be doing at that time of day
now i'm going to introduce a vmc pirate
near the player and they're going to
immediately attack
after a few moments the vnpc comes out
ahead in this battle and the player is
killed
because their crime was committed in
range of an act of comrade it's recorded
in their character history along with
the time and location of the felony
an upcoming tracking app will allow you
to access information like this if
you've registered with the local
authorities so that the digital
footprints players and vmpcs leave
behind can be tracked
this vmpc's name is dragon and since
they're now wanted in this jurisdiction
the comrade has a fixed real-time marker
to his position
with the only player in this area dead
the server now streams port olosar and
the kamaray out but as i previously
noted vmpcs aren't destroyed like a
regular npc created from a probability
volume and their logic isn't suspended
like an npc at a landing zone
instead vnpcs simply transition from
their physicalized state where authority
over their actions is controlled by
substantial logic executing on a server
to their native ethereal state where
their virtual ai executes on the back
end
dragon now begins to exit the area and
the kamaree continues to track his
position until he passes out of range at
which point the real-time information
converts to a last known position report
he's decided that he needs money and
he's a bit risk-averse so he elects to
head all the way out to yellow where
there are quite a few transport
freighters carrying valuable ore and
little in the way of security
okay dragon has arrived at yellow's
asteroid field and has now crossed back
into range of another act of comrade so
his real-time position is now once again
being reported as indicated by both the
character history and the tracking
marker
there aren't any players in this area
unless none of this is streamed onto a
server everything you're seeing is a
result of a variety of different
services communicating with one another
vmpcs trigger probability volumes just
like players and yellows shows that
there's quite a bit of freighter traffic
in this area
so dragon won't have to wait very long
before he generates an encounter
there's one dragon just caused the
creation of a freighter which itself
becomes a vmpc so that it can react to
what's happening via its own virtual
ai dragon now engages the freighter he
starts firing on it
he's still within range of an active
comrade and thus this latest crime is
added to his character history
he's now wanted for both murder and
piracy and the bounty on him just jumped
from six to ten thousand uec
increasing the size of their rap sheet
and the price in their head is one of
the simplest forms of vmpc evolution and
over time we'll look to add additional
ways for bmpcs to grow and increase
their influence
from recruiting followers in an attempt
to become a shipping magnet or a crime
boss to
offering their own missions the captain
of that freighter isn't going to
surrender so easily he's broadcast a
combat assist service beacon that
players can choose to accept and he's
offered a 3000 uec
reward for his protection unfortunately
for him he's pretty heavily outmatched
and he's quickly
destroyed causing the service beacon to
expire before anyone can come to his aid
bits of information like this are fed
back to quantum and insufficient
quantity will cause
all sorts of things to change how much
security patrol missions that area pay
what transports that have to travel
through that area will demand as a risk
premium
and how much a ship in distress will
offer for someone to come to their aid
the freighter's destruction has left
some debris and possibly a few items of
value so if a player had already been in
route they might arrive to find the
aftermath
another murder has now been attributed
to dragon and the bounty on him just
once again jumped this time from 10 to
14 000 uec
he took a bit of damage from that
encounter and is eventually going to
need some repairs
a harder working pirate might look to
plunder a few more freighters before
heading back
but dragon's personality attributes
indicate that once he's got enough cash
to cover the basics
he's more interested in drinking and
gambling than piracy
so he leaves the area and once again the
real-time location tracking ceases once
he's out of range the comrade
he's heading back to port olisar which
is the closest location that has
everything he wants
a fence to sell his stolen goods shops
to repair and restock his ship and a bar
where he can spend the remainder of his
cash
the comrade near port olisar has been
disabled which means that dragon's
position isn't updated upon approach
the area remains devoid of any players
and thus it's still not streamed into
memory
dragon can therefore remain in his
ethereal state and avoid a lot of
computational expense related to
maneuvering his ship
but he still needs to interface with the
air traffic control service to request a
landing pad and transition from his ship
to the station
services like this are always fully
operational and accessible to vmpcs
that landing request is logged to his
history though so while the disabled
kamaray would make it a bit harder for a
bounty hunter to track him there are
lots of other ways by which locational
information on a character can be
obtained
dragon needed to refuel and repair his
ship and you can see those actions
reflected in his history as he
interfaces with the shop service that
controls those operations
when a vmpc transitions to a landing
zone that's streamed in the virtual ai
service that drives their logic
temporarily seeds control of the
character to the npc scheduler that
specifies who resides at what location
this is the same foundation upon which
the dynamic populations feature will be
built
except that it will be quantum instead
of the virtual ai service dictating the
changes in the population
the end result is that if a vmpc is
assigned to a landing zone and you're at
that location you can run into them like
any other npc
dragon is now hanging out in local bar
which was added to port olisar for the
purposes of this demo
if you were to walk into the bar at this
moment he'd be physicalized with the
rest of the environment and you'd
actually see him there
dragon eventually gets his fill of
entertainment or maybe just runs out of
money
either way it's back to work and he'll
be jetting back to yellow to try and
prey on more unprotected cargo ships
so he contacts air traffic patrol to get
clearance to leave the area and departs
the same player that dragon first
encountered and killed
is looking to exact some revenge though
and claim the big bounty on dragon's
head
they've surmised that there might be a
pattern to dragon's movement and think
that he might head back out to yella
so they position themselves between port
aldazar where they know that dragon just
left and yela and activate a quantum
interdiction field
dragon still in his lightweight ethereal
form initiates a quantum jump from
portal certain yellow and
just like a player routes that movement
through the probability volume service
that is responsible for interdictions
once he gets within range the player's
interdiction bubble his jump is
interrupted and he transitions from
executing virtual ai on the back end to
a full-blown subsumption driven ai
executing logic on a server so that the
two of them can battle it out
if the player once again gets the worst
of it they might decide to change up
their tactics a bit and wait to see if
dragon soon returns to port olisar where
they could try to sneak up on him on
foot
[Music]
the ultimate objective for star citizen
has always been a dynamic and evolving
universe
historically however our mission content
has always been static we've had no
ability to modify it after we pushed a
version out the door
missions have also been confined to a
single server each of which was thus its
own little
island cut off and oblivious to whatever
was happening elsewhere
environmental data that applies to all
of the servers what items the shop
offers for sale how many freighters or
pirates are in a given region of space
or what missions are available to
landing zone
couldn't be altered by the instance
mission logic that executes on
individual servers since we didn't yet
have a means of coordinating those
efforts
the end result has been a universe that
often feels static and fails to offer
sufficient variety
dynamic events are a special type of
mission intended to help remedy this
problem
they are modular chunks of configurable
content that might involve anything from
throwing a simple wrench into the wheels
of the systemic economy
to a prison break that stresses the law
system to a full-blown invasion of a
solar system dynamic events are global
in nature
they affect the entire array of servers
they do this via extensions to the
mission language that allow them to
declare what logic runs in parallel
on every server and what executes on the
back end while at the same time gaining
the ability to query and modify
a lot of global data this allows us to
keep the critical elements of these
scenarios synchronized across all the
servers while retaining the flexibility
for every server to have its own unique
state
conceptually the servers control the
battle and the back end manages the war
the xeno threat mission that we released
in the first quarter was a dynamic event
it was triggered manually although
quantum will eventually gain the ability
to automatically activate these
scenarios when conditions weren't
if for example the amount of piracy in
an area gets out of control
quantum might search through the mission
library to find a dynamic event
compatible with an elevated amount of
piracy
and then customize and instantiate that
scenario so that a lot of handcrafted
content
unique character dialogue challenges
rewards can be blended into the universe
simulation
we're aiming for the best of both worlds
in a systemic universe that provides a
logically consistent background
environment with the ability to overlay
content and storylines that writers
designers and many others have spent a
lot of time creating
this is quasar a new tool that lets us
manage dynamic events in the live game
it's linked to the same star map as
quantum and has access to much of the
same information
i'm looking through the library of
available events and as i select each
one you can see the input parameters
that can be used to customize that
particular scenario
we've got quite a few of these at
different stages of development with
fleet week nine tails and infiltrator
being the next few in the pipeline
i'm going to walk you through a simple
dynamic event called quasar demo that
will show off a few of the systemic
hooks we've linked into the mission
system
but first i need to specify the inputs
the first thing that it requires is the
location and i'm going to select port
olisar by simply clicking on the star
map
the next couple of variables require a
ship type i'm going to specify interest
for the defender input and call us
black for attackers if quantum were to
programmatically trigger an event like
this and fill in variables like these
with something that made contextual
sense
so for example we'd be looking at what
sort of ships were in the area where the
event would be activated to determine
what it could consider
the next variable relates to difficulty
which in this particular case has simply
been configured to dictate the speed at
which enemies will appear
the last input enemies remaining
indicates how many enemies must be
destroyed in aggregate across all of the
servers
in order for the war phase to be
completed and the victory phase to be
activated
i'm going to set this to 10. with
everything configured i can now activate
the event
quasar communicates this request to the
dynamic mission service which then
initializes the back-end logic allocates
the global variables sets up the phase
conditionals
informs all of the servers to start any
instance logic the event might contain
and quite a bit more i'm now going to
flip over to quasar's active tab so that
we can check the event's real-time data
you can see that there's currently just
a single event active but we could just
as easily activate multiple and give
each of them a different set of
inputs dynamic events organize
changes to back in data in coordinated
chunks of logic called
phases and the phases that have been
created for this event can be seen at
the top right
they're all inactive now hence the red
color and will turn green if their
conditional evaluates to true at which
point their embedded logic would execute
the events global variables are shown
below that and it's in this area that
you can see the enemy's remaining
variable for which we previously
specified an input value of 10.
lower still are the functions for this
event that have been marked external and
which allow us to manually or
programmatically call functions to
customize aspects of the event after
it's already been launched
the list of items that a shop offers to
buy or sell has always been static
phases though can include shop modifiers
which open the door to dynamically
changing all sorts of shop related
information
to test this i'm going to bring up a
client window so that we can see what
portal sr's admin office is currently
buying
i've minimized the inventory for this
test so i'm only expecting to see a
couple of items
that's the full list right there just
hydrogen and processed food
the modify shop phase has been set up to
activate when the back-end variable
called current phase has a value of one
so i'm going to set it to that
the phase just turned green meaning that
it's enabled and any changes to the
backend data have now been applied
it applied a shop modifier to crank up
the demand for food at port olisar so
let's see what's happening to the price
it was stable for a long time with just
some minor fluctuations
now though it's gone through the roof
the direct result of all that increased
demand
so players and quanta would be
incentivized by higher prices to help
correct this imbalance in the economy
this phase also had a shop modifier add
a new item for purchase and you can see
that quantum already knows about it
i'm going to flip back to the client
though so that we can verify that this
really did affect the inventory within
the game
sure enough the shop is now looking to
purchase a new item medical supplies
manual control over the economy like
this is not intended to be a substitute
for quantum systemically derived
adjustments
but simply gives us the ability to
occasionally nudge the system in a
particular direction to add some
interest or layer a compatible story
onto the background environment or an
existing trend quantum will then take
these influences
factor them into the simulation and
output how everything changes in
response so that all of the rough edges
are smoothed
while we're looking at prices i want to
show off another new feature that will
go at the door within the next few
months
as designers gain the ability to write
mission logic that can properly affect
systemic change
temporary price imbalances will become
more common and we wanted to have a way
for the system to actively reach out and
inform you rather than relying upon you
constantly having to check in on an area
to discover that there's an opportunity
if we wait just a bit longer the admin
office is going to reach a point where
it's so desperate for food that it's
going to start reaching out
looking for ways to obtain more supply
it will do this by sending a message
that will be recorded in a special area
of your journal reserve for price alerts
which is basically a precursor to being
able to create and post missions
you can see the message there indicating
that the port officer admin office needs
food and what they're willing to pay
for it this feature gives designers the
ability to dictate at a systemic level
how shops will respond to inventory
gluts and shortages
and this functionality will soon be
extended to things other than
commodities
an area suffering from too much piracy
for example might offer to pay
mercenaries to come to their aid
this is fundamentally different than the
brute force tactics we currently rely
upon to create missions and dictate when
they're available and is far more
flexible and powerful
what you're really seeing here are the
first signs of the dynamic mission
system starting to flicker to life and
once it hits
false stride it's going to transform the
gameplay experience
next let's take a look at how dynamic
events allow encounter probabilities and
interdiction frequencies to be adjusted
this is the probability volume around
port olisar
you can see the piracy the red curve and
security the blue
are inversely related all things being
equal if you increase the amount of
security you'll get less piracy and vice
versa
security tends to congregate closer to
landing facilities and dissipate as you
get farther out and thus piracy tends to
gradually increase with distance
the likelihood of an encounter is
represented by the height of the curve
at that distance
notice that the chances of running into
a freighter the green curve is pretty
much constant because once the ship has
decided to make the journey to or from
port olisar it's committed
they've already decided whether or not
the risk is worth the reward of
traveling the full route
i'm now going to activate the lockdown
phase of this event which is going to
crank up the amount of piracy in the
selected area and overwhelm security
the red curve piracy now has a much
larger average height according to an
increased encounter probability
and because pirates now greatly
outnumber security the curve pushes in
much
closer to the landing zone the criminals
are emboldened because there's no longer
sufficient security to deter them
the blue curve security looks identical
although quantum will over time
start adjusting the economic levers to
gradually increase the amount of
security to combat
the threat by offering greater rewards
increased piracy has had an immediate
impact though on freighter traffic which
has dropped precipitously
this means that the local economy will
start to seize up they won't be able to
import food medicine
fuel or whatever else they need and they
won't be able to export whatever goods
and services they produce
all of these knock-on effects are only
possible because designers will now be
able to nudge the economic gears in
proper systemic fashion
let's test one of these knock-on effects
now that we've adjusted the encounter
probabilities let's see what that does
to quantum travel in the area
i'm going to once again bring up a game
client this time so that we can watch an
avenger titan jumping to portolasar
this is a short jump and the chances of
interdiction would typically be very
slim
now that we've injected a much larger
pirate presence around that location
however that's no longer the case
we got ejected from our jump as soon as
we got within range of those elevated
pirate probabilities which means that
getting to port olisar just got a lot
more difficult and time consuming and
will remain that way until the threat is
addressed
we're now to the point where we can
allow programmatic modification of these
data structures and quantum will soon
start adjusting these automatically so
that all sorts of things within the
universe start to ebb and flow
what all of this really means is that
even when you know that you can buy
medical supplies dirt cheap at one
location and sell them for a hefty
profit at another
we can finally start to adjust some of
the systemic elements to justify the
disparity
in short if you wanted to take advantage
of portal source elevated prices right
now you'd have to fly the last mile at
conventional speeds and we'll probably
see quite a bit of combat
that's going to drive up how long it
takes you to make the run you're
probably going to burn quite a bit more
ammo and require more repairs than it
would otherwise be the case
and you might want to think about
recruiting some armed escorts to help
you through the dangerous areas
once the risk abates once players in
quanta have dispatched enough of the
pirates so that travel within this area
returns to normal
you'll be able to much more easily
deliver medical supplies to portals are
but of course that increase in supply
will quickly shrink the price
differential
now let's take a look at how each server
can host part of a larger event while
the things that really matter can remain
synchronized
i'm going to enable the war phase by
calling the start war function
that's going to create some staged
battles involving the ship types we
selected earlier around port alzar the
area that we previously selected
i brought up a couple of different
client windows each of which represents
a different server
as each cutlass is destroyed on either
server the shared variable called
enemies remaining is decremented
once that variable reaches zero the war
phase will automatically terminate and
the victory phase will be activated
that's it the counter just hit zero and
you can see the change in active phases
over in quasar
that last phase victory kicked off some
fireworks around port olisar and just
like any other phase change that will
automatically be synchronized across all
of the servers
just to make sure that things are back
to normal i'm going to check port
olisar's admin office and see what's
happening with the inventory in prices
they're no longer looking to purchase
medical supplies and with the pirate
threat eliminated players in quantic can
once again quickly and safely reach
portolasar
as a result the cost of food has started
to fall off a cliff and will soon return
to something close to its pre-crisis
levels
[Music]
i've covered a lot of ground today
quantum has matured considerably since
you last saw it
the performance issues have been
resolved it's been made compatible with
our backend infrastructure and it's now
communicating with numerous gameplay
services
lots of new analytical tools and
functionality have been added
and increased fidelity in areas like
quanta attributes and the spatial
positioning of resources have allowed us
to improve
the accuracy of its output we're now in
early stage testing to allow quantum to
start pushing the first few bits of
simulated data out the door and start
impacting the game
and we expect to go live with these
efforts later this year
the first stones in the virtual ai
foundation were laid long ago but it's
only been within the past couple of
months
as engineering resources rolled off of
some other major initiatives
that the implementation efforts really
started to take off
this technology will allow vmpcs the
freedom to operate and evolve
independently of player actions and open
up all sorts of new gameplay
possibilities
bounty hunter v2 will be the first
feature to exploit virtual ai but it's
really just the tip of the iceberg
insofar as what we eventually plan to do
with it
some of the virtual ai tech foundation
will beget other important features like
the ability to dynamically adjust the
size and composition of the populations
at landing zones
dynamic events are the culmination of
several major technological components
coming together from the dynamic mission
service to quasar
and are already a reality we ship the
first one
xenothread in the first quarter and have
a number of others at various stages of
development for release later this year
and next
many of these initial releases will
serve as testing boards for new features
from shop and probability volume
modifiers to spawn closets and the
dynamic generation of that meshes
dynamic events give us the ability to
modify the universe in dramatic or
subtle fashion whenever we want
and to seamlessly blend those changes
into the quantum simulation so that
everything looks and feels natural
all of this will ultimately mean a more
interesting realistic and exciting
universe for you to explore and
experience
i hope that this presentation has given
you a good sense of what we've been
doing over the past year and what those
efforts will mean for the game in the
coming one
until next time

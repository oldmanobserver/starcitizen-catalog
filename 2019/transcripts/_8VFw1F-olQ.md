# Star Citizen: CitizenCon 2949 - Building a Dynamic Universe

**Video:** https://www.youtube.com/watch?v=_8VFw1F-olQ
**Date:** 2019-12-06
**Duration:** 1:00:44

## Transcript

[Applause]
can we get those lights brighter okay so
hi I'm Tony Zurich and I'm the director
of persistent universe for star citizen
I'll be doing the lead vocals tonight
and over here on my right on the
keyboard is Jake mealy our economy
designer from Austin ok and we're gonna
be showing you something pretty
interesting tonight and I want to make
sure to call out our guitar and bass
players back in Montreal Martin and
Rivera Lisey yesterday they spent a lot
of time working with us over the last
you know four or five six months you
know very very intensely on what we're
gonna be revealing tonight it's been a
bit of a stealth project recently we've
actually shown it to very few people
within cloud imperium because we wanted
to get it to a level of maturity to
where it was very easy for people to
understand what the benefits of this new
technology were going to be and I'm
gonna give you a glimpse of it tonight
but you're gonna need some background
information to truly appreciate it so
bear with me for a bit and you'll see
why we consider it quantum leap
so as everybody here obviously knows
star citizen is a very ambitious project
our goal is to deliver a variety of
incredibly detailed solar systems that
behave in logical fashion and that they
can give you ample freedom to follow
your interests whatever they may be thus
far we've been focused entirely on a
single system staunton which includes
four planets twelve moons 225 economic
nodes 44 trading outposts 13 rest stops
and 50 asteroid fields so yeah it's
really big the point of this
presentation then is to give you a
better understanding of how when the
first one's taken so long we're aiming
to kick things into overdrive so that we
can deliver new systems much more
quickly this involves obviously a lot of
different areas procedural generation of
terrain modular art sets
detailing of buildings and interiors and
a lot of other stuff for the purposes of
this talk though I'm gonna focus on what
I call the dynamic content so what is
dynamic content dynamic content responds
to player and NPC actions in logical
fashion its systemic this means that the
universe is in constant motion which
makes it a far more interesting place to
explore most missions should of course
be dynamic in nature they should only be
offered when there is an actual need for
something this might take the form of a
factory that needs some aluminum to
create a retail product a criminal that
needs to be brought to justice or
someone that keeping them from one
location to another at their core
missions or services provided by one
party for the benefit of another and
they are therefore one of the
fundamental ways by which imbalances in
the economy can be addressed likewise
economic nodes which include things like
refineries factories and retail shops
need to be dynamic since they must
continually take into account the
various market forces and adjust
accordingly when demand for something
outstrip supply whether it's iron ore
bullets or ship repairs you expect
prices to rise and conversely when
there's an excess of something you
expect that prices will fall there's
more to it of course concepts like
marginal demand and price discovery
require a fair bit of math but in the
end it's all about the constant search
for equilibrium as production and
consumption levels vary I'll get around
to explaining probability volumes in
more detail in a bit but suffice to say
for now that they dictate what you
encounter as you travel through a given
area as such they should definitely be
dynamic so for example if a new field of
asteroids rich and valuable commodities
is discovered you'd expect to find a lot
of NPC miners in the area but as the
resources are gradually depleted their
numbers should start to fall off pirates
should gravitate toward areas with a lot
of value to plunder and recoil as the
amount of security ticks out so let's
look into each of these areas in a bit
more detail and see why we've struggled
to set up a single solar system and at
the same time get a precise
understanding of what needs to happen so
that we can start moving a lot faster
we'll start with the missions a star
citizen mission is fundamentally just a
container for code and data similar in
concept to a class in any of a multitude
of modern a programming languages inputs
can be passed into a mission from either
the runtime environment or services to
allow for customization this allows
designers to do things like say inject
the type and quantity of cargo whether
the ship should be damaged or not where
the ship should be heading into a
generic transport scenario so that we
can reuse the same framework for a lot
of different situations missions can
have content tags embedded within
themselves to denote their composition
or whether they contain security pirates
freighters miners asteroids or some kind
of accommodation missions can also have
somatic tags applied these don't specify
physical content but rather detail the
headlines story behind the scenario that
a designer created so designers can
differentiate between a straightforward
pirate encounter versus one that
includes an ambush once these
descriptors have been assigned the
missions are injected into a database
that other systems can access so that
they can be instantiated and customized
depending upon the situation this
however is where we start to run into
some major problems designers have to
explicitly link missions to various
constructs within the game an NPC
mission giver for example or a
probability volume covering the area
around yellow this is time-consuming and
greatly complicates maintenance if a
Content tag like pirate is split into
sub tags like pirate light and pirate
heavy so that we can have more control
over what we're aiming to instantiate
you have to go to every place you design
the original mission category and
individually determine which of the new
ones should be enabled worse this isn't
dynamic at all mission content is fixed
to do specific NPCs and locations so
there's no evolution the universe is
completely static another major problem
is that we don't have sufficient context
to properly customize the missions at a
macro level the game doesn't really
understand the concept of a route much
less what miners traversing that route
should be carrying or what condition
they should be in or which direction
they should be if they're going you know
if they're empty heading towards a mine
or full bringing the results of their
efforts back to a refinery
this lack of context means that we can't
exploit emissions ability to have
information injected into it for
customization and that means that you
see a lot less diversity despite
requiring just as much work the last
problem and it's a big one is that
there's no NPC regulation of the mission
content missions are the basic units of
work for the economy and if someone
doesn't do what needs to be done then
everything grinds to a halt in a
properly functioning system NPCs need
the ability to step up if players aren't
going to and the risk award justifies
the effort and do the work themselves if
a commodity can be purchased at one
location and sold at another for a
dramatic markup and there isn't enough
cost or risk involved in a transport to
warrant the different the differential
NPCs should seize the opportunity and
move the material themselves until the
price starts to make sense so let's talk
about economic nodes now an economic
node is an entity within the game which
might be represented via an actual
storefront a kiosk a UI interface or an
NPC that possesses an item manifest
detailing the items that wants to buy or
sell storage capacity and a fair bit of
data related to determining prices this
includes refineries that process or
factories that produce goods and retail
stores where you buy finished products
factory inputs aren't explicitly denoted
but are instead derived from the
production formulae of whatever they
manufacture prices what economic nodes
are willing to pay for their inputs and
what they want in order to sell are
determined algorithmically based upon
the rate of change of their of their
inventory versus the tangent of our
pricing curve this means that they're
smart enough to say raise the price of
what they're selling even when their
inventory is low if they detect that
they're being resupplied at a sufficient
rate to get where they want to be in a
reasonable amount of time so clearly
there's some dynamism happening here
which is fantastic unfortunately that's
where the good news ends
as with missions economic knows don't
have any real context in terms of supply
and demand and there's no systemic flow
of goods throughout the economy why does
the refinery want or why is an MPC
willing to buy some drugs for you from
you where does the shop get the goods
that it's selling right now the answer
to all these questions is the same we
fake it
economic nodes conjure up their own
supply and demand out of thin air if a
node is designated as wanting to
purchase a particular item for example
designers dictate a formula that
describes how that inventory will be
gradually burned off so that they want
more these products you deliver to a
node then they don't actually go
anywhere there's no real demand this is
impossible to balance because while
production and consumption are fixed the
player count isn't sometimes a hundred
players are interacting with an economic
node and sometimes none and I mention
this because behind the scenes at the
economic level all of the players
despite being on different servers
really are connected to one single
system a real economy is a tangled web
of dependencies and you can't expect
logical results when it's gears can
completely seize up due to the action or
inaction of players
what we really need then is NPC
regulation of the system for NPCs to
purchase items when they need them thus
keeping the demand side logical while
stepping in to help with the supply when
players down and the risk reward
warrants it this has ripple effects in
two other areas if the demand for
missiles spiked because there was a lot
of combat you'd expect that the
commodities used to construct those
missiles would start to rise in price
and you'd also expect to see more miners
and freighters working to alleviate that
shortage if the price got high enough
that those transports would be carrying
a lot of value so part you know you'd
expect piracy to increase at which point
you should start to see a lot more
security patrols and requests for combat
escorts a simple change in demand men
should be able to alter not only what
you see as you travel throughout the
system but also the available missions
these kinds of knock-on effects in fact
should happen regardless of whether any
players in an area and that's a separate
problem I'll talk about more when we get
a probability volumes
so let's take a quick look at what it
means to set up an economic node as I
mentioned there are about two hundred
and twenty five economic nodes within
the stanton system and many of them deal
with a lot of different items each of
these items can specify its own
production or consumption formula along
with a lot of other information storage
space optimal inventory level price
offsets and much more this information
can be archetypes but of course the
world's a lot more interesting if every
economic node is a bit different so
there's still a lot of customization
that winds up happening so now let's
take a look at the economic nodes around
a typical planetary system and finally
let's take a look at the economic nodes
around the entire stanton solar system
that's a tremendous amount of data to
set up and maintain as we're routinely
adding new items and changing prices and
the worst part is that it's all
extremely rigid there's no way to have
an economic node increase how much of
something it produces or consumes
because those things are attached to
formulate that have no understanding of
external events so right now designers
try their best to brute force this stuff
to make it feel like it's a systemic
world even if it's not if an area is
configured to have a lot of pirates they
increase the price offsets and demand
for goods at nearby nodes if the number
of pirates is subsequently decreased or
maybe more security is added to the area
and the nodes are updated to reflect
that fact it's a ton of work and while
this sort of hand tweaking does yield
something that feels vaguely logical if
static it's definitely not a real
solution and it doesn't even begin to
address the major problems now we come
to the last of the major areas for which
I wanted to illustrate the problems that
we currently face so what is a
probability volume of a probability
volume is an area of space that contains
information detailing what you should
see is you pass through the area it's an
optimization of sorts in that it allows
us to achieve a desired effect a certain
number of pirates in an area or a
particular likelihood of encountering a
freighter filled with iron
without having to burn a lot of
computational horsepower simulating
things when there are no players around
to see it this is accomplished to be a
linking mission content tags to
probability curves that span all or part
of the expanse of the volume so for
example you can denote that security
ships are commonplace in airport olace
are and gradually fall off over a couple
hundred kilometers whereas it's very
rare to see pirates who would prefer to
avoid security close to port olisar but
more likely to see them as you get
farther away there are quite a few
different types of curves denoting there
are quite a few different types of
curves because and because until a
player actually accepts one of these
missions as it heads to that location
there are variety probabilities I think
so our notes got screwed up here anyway
so one of the more interesting types of
curves is the spoofing curve which
allows missions to skirt the normal
rules requiring that they can only be
created in the proximity of a player and
this is done so that an NPC can request
that you travel to them to provide
something they desire which case
obviously we can't limit them to only
existing in your immediate and yours or
in other players immediate proximity
this is how combat assist is currently
handled and we'll be adding some other
things like NPC refuel and NPC passenger
transport in the near future the reason
it's called spoofing
is because we only keep a small stub
active on the back end which is way more
efficient we've got other types of
curves there reinforcement curves that
allow designers to dictate how quickly
backup tends to arrive when you've been
identified as a felon and we also have
the ability to modulate that time
according to how far away you are from
the place you were last spotted and how
long ago that was there are bounty
hunter curves which allow us to link to
a probability which allow us to link a
probability to your wanted level so that
we can increase the encounter frequency
when they'd actually be hunting you and
otherwise keep them very rare let's
continue on though and get a better
understanding of how exactly probably
believed audience works here we have an
area of space that's marked up as having
a certain probability of pirates and
freighters security asteroids and
derelict ships now let's go ahead and
activate all that content
that's a lot of content to simulate when
no one is around to see it a lot of
pathfinding NPCs animations vehicle
physics collision detection now let's go
ahead and introduce a player and clear
the board
those pirates and freighters and
everything else they still exist but
only in a probabilistic state as the
player traverses through the volume we
roll the dice and the various curves and
force the probabilities to make a choice
does that content exist at that location
or doesn't it here the player gets a hit
from the asteroid probability so the
mission databases in query define
missions with the Associated content tag
dynamic parameters injected and the
mission is instantiated and now a bit
later there's Freight when the player
trips the freighter probability and then
eventually runs into a pirate the key
point here is that much of the world
exists as a superposition of
probabilities until a player gets
sufficiently close that the wave
functions collapse at which point we
instantiate them and start simulating
the full-blown entities one of the
quirks with probability volumes is that
they usually represent a variety of low
frequency events space is big after all
and even in a pretty heavily populated
area shouldn't be running into other
ships all that often the problem is that
the likelihood multiple events happening
simultaneously is a product of the
probabilities meaning that it's very
unlikely you'd ever see two or more at
the same time so let's go ahead and see
what this means in practice here's a
player traversing a probability volume
he makes it through a good part of it
before the freighters probability curve
determines that an encounter has
occurred at which point the probability
volume queries the mission database with
the freighter tag and instantiates a
compatible mission the player continues
on and shortly thereafter the pirate's
probability curve indicates a hit which
triggers another lookup into the mission
database there's nothing fundamentally
wrong with this in fact it's pretty
accurate representation of what you
realistically expect to see two rare
events happening on their own schedule
the systemic behavior of the freighter
and the pirate even if spawned
separately would allow them to logically
react to one another so if they were
spawned in close enough proximity the
pirate might even attack the freighter
the problem is that this approach lets
the algorithms dick
take too much of the experience and if
you're not careful that's gonna lead to
the gameplay starting to feel very
formulaic what we really want is the
ability for designers to craft more
custom content and then have a mechanism
by which we can trigger it such that it
all feels logical if a bit lucky in the
timing so what we do instead of
basically allowing the algorithms to
entirely control what you see after is
we defer the activation for a short
period of time and bend the
probabilities of other things so that
we're more likely to get a combination
that would otherwise be the case so they
once again trade this the player once
again triggers the freighters
probability but rather than you already
got it yeah yeah so we're we're running
a little bit ahead but basically what
you've seen here is the player hit the
freighters probability held on to it we
bent the probabilities to increase the
likelihood of anything else being able
to be attached in this case that that
involved the freighter they didn't
involve the pirate rather so why does
this matter
think about a pirate and a freighter
being created separately it's going to
take a good while for the pirate to
close the distance with the freighter
disable it part next to it and board it
this means that you'd never come upon a
situation where the freighters already
been disabled and the Pirates are
rampaging through the ship so you'd
better hurry if you want to save the
crew that's actually a really
interesting scenario though one that be
a lot of fun to experience so while
we're fine with the systemic
functionality driving things by default
we want to be able to bend things
towards more interesting situations
without it ever feeling too random every
once in a while
the problem with probability volumes
then all comes down to their
construction each one and there are lots
of them contains a litany of curves and
associated data and is set up by hand
which is time consuming and requires
constant updating as other things change
one of the main reasons why they're so
difficult to maintain is that many of
the variables that a probability volume
details should impact one another more
security in an area should of course
impact the number of pirates but because
they're all handled independently
designers have to be very careful when
modifying them
mistakes are inevitably made which
results in a lot of sleuthing around to
figure out what broker is now poorly
balanced and how to resolve it the worst
thing though is that they're static if
an area has a lot of pirates it will
always have a lot of pirates there's
nothing you or the NPC population can do
to change that rewards won't vary based
upon the level of threat in an area
because the threat is always the same a
new commodity discovery won't cause
miners to move in to exploit it and
won't in turn attract pirates eager to
prey on them demand for security patrols
and escorts for that area won't increase
in response to the pirates and the
pirate threat won't recede as a result
what we really need then is a way to
dynamically derive the probability
curves based upon what's happening or
rather should be happening when we
manage to resolve all these problems
I've been pointing out across the solar
system so I've called out a lot of very
serious problems things that require
enormous amounts of bandwidth to set up
and maintain and it still failed to
deliver the experience we want what we
actually want is a dynamic logical
universe we want the demand for goods
and services to be the result of a
legitimate economic need and we must
have sufficient runtime context so that
we can customize these modular mission
templates NPCs must be able to
contribute in helping to turn the gears
of the economy from buying and selling
goods to creating and accepting missions
the system needs to automatically
balance itself so that we can focus on
the high level rules instead of the
details all of this too has to be
incredibly computationally efficient
which means we need a more focused
simulation engine one that's only
concerned with what we need to achieve
the desired effect if we're ever going
to reach a point where we can deliver
new solar systems in a reasonable amount
of time then we're going to need to make
a quantum leap so what's the solution
yeah well flip over to the end there yep
let's go ahead and flip the screen so
it's exciting I really promise there we
go so this is quantum and I know what
you're thinking I've seen this before
if the visuals look you know
particularly familiar it's because we
started with the solar system map that
we released years ago but this really is
a totally different beast the original
star map reference static data there was
nothing dynamic about it but quantum is
totally different for starters it has
access to all of the backend services
and can pull whatever data it needs from
them everything you see on the screen
then that's real-time data pulled from
the game so let's go ahead and take a
quick tour of the system yeah okay let's
go ahead and jump on over to everyone's
favorite gas giant crusader and in the
background there you can see Porto Lazar
let's go ahead and bring that out now
let's I mention that we're connected to
all the real-time data let's go ahead
and see what the players are up to
yeah each of those red dots is a real
player thousands of them across well
over a hundred servers now to be honest
we recorded this earlier mainly because
we didn't know how many people would be
playing the game while we were doing
this show right and I figured it would
be totally anticlimactic to say here all
the players and three dots showed up so
let's go ahead and continue the tour of
the solar system and jump on over to
damar and you can see a number of people
affixed to the planet some of those
obviously you're going to be at outpost
some of them are inevitably mining over
there on the right you can see the the
current player list let's go ahead and
see what a couple players up to just go
ahead and highlight them so we can see
where they're at and let's go ahead and
jump to surco worm and see where he's at
it looks like he's in Loire ville
here he is hi buddy and you can actually
see some deaths down on the planet there
so obviously there's been some conflict
there and you actually see let's go
ahead and back out a little bit and find
there's a contract to the right you have
access to missions so you can see that
clip so snore Wang is requesting
personal transport to Norval to lore
Ville and he's willing to pay forty five
hundred dollars get on you buddy let's
go ahead and jump on over to Ariel and
we can get a view of those probability
volumes that I was talking about earlier
and so what you're seeing here there as
I mentioned there are a variety of
different types and lots of different
content and thematic tags for all these
things so you can see everything from
the default tags you can see the
security reinforcement tags the bounty
hunter tags the spoofing tags there are
a number of these we'll be adding more
in general what it's doing is as I
mentioned it's basically representing
things in probabilistic state because
it's too expensive for us to fully
simulate them now let's go ahead and
jump over to a shop let's check out the
Hicks research station that's on selling
yeah we got to go over to crusader
and let's go ahead and open up that shop
look here's yep there's outpost Korea
and you can see that there's a lot of a
lot of death around there and over on
the right at the Hicks Research Station
you can see all the things that it buys
themselves and what those prices have
been doing over time now I suspect I
know what you're thinking at this point
this is all very cool but it doesn't
really solve any of the fundamental
problems that I mentioned earlier and
that's totally true so let's clear the
board and get to that so the primary
reason for Quantum's existence is to
enable us to have one unified world
where we can you know simulate millions
of NPCs and feedback into that all the
player actions into one unified whole so
there's really no difference there are
some optimized areas the probability
volumes that exist in between these two
you know these two realities but really
this you know this is this is the
full-blown simulation it takes into
account all the player actions so let's
go ahead and start by bringing a
thousand quanta to life so you know Jake
here is cranking the number of quanta up
to a thousand and they're basically
gonna come streaming in from another
system oh and into the universe there
these are simulated into these
and some the real significance of this
is when you're talking about working out
the vast multitude of details that we
really need to allow this universe to
evolve and feel dynamic we don't
actually need all of the incredibly high
fidelity super computationally expensive
stuff that we would get if we were
actually simulating these NPCs the
traditional way on the server so that
they look exactly like they would when
you see them these NPCs don't need to do
animations they don't need to do physics
they don't need to do collision
detection they don't need to do a whole
slew of things that we couldn't afford
to do would be incredibly expensive to
try and in the end even if we did it it
wouldn't make the end results any more
accurate so we also have personality
traits - yep one has a little bit of
something going on yeah there are a
number of different traits that were
modeling we're still working out the
exact configuration one of them is
ambition and that specifies how far a
quantum can push themselves relative to
others whether in crime or legitimate
enterprise another one is intelligence
and that dictates what sort of things
they can pursue and how well they can do
something
happiness is a measure of whether a
quantum the singular form of quanta is
miserable or content and unhappy quanta
want to change their situation move to a
new location change occupations and that
sort of thing aggression controls the
lens to which a quantum will go to
achieve their objective a
business-oriented quantum with a lot of
aggression might push their workers
harder trading their happiness for more
profit and as a result have to deal with
more turnover and lastly criminality
that determines the amount of criminal
behavior that a quantum will consider no
criminality equates to a law-abiding
quantum having a little means that they
might be willing to commit some minor
crimes like smuggling or illegal mining
and a lot means that they're open to
piracy and murder they can have
possessions store up money own a ship or
property have a home now all these
quanta have basically come to rest
within the system and the reason for
that is because there's nothing for them
to do there's no reason for them to get
up up off of the couch so let's jump to
the next slide
we're going to add a little bit of
interest to the system by adding an
aluminum line to del amor
so we've now injected a mine on to del
amor and yet you see the quanta still
refused to do anything and that's
because there's no economic reason for
them to do it there's nothing to do with
the ore that they could go and extract
let's go ahead and open up that card
though that represents the mine on
Delamar and you can see a couple of
stats towards the top quantity and
purity and what these are is basically
telling you how much of that material is
in that mine and purity is to some
degree a measure of concentration it
effectively details how easy it is to
extract it there are a couple of
parameters at the bottom that our
temporary those will eventually be
derived from those top two parameters
but for right now we can override it for
some of this for some of the testing
that we've been doing so let's go ahead
and jump to the next so now we're going
to go ahead and add an aluminum refinery
to Crusader and immediately you will see
the Qantas start springing to life and
what's happening is they've all figured
out
they've that refinery it wants to build
up a stockpile of aluminum and in order
to do that it needs some raw aluminum
ore and this it's willing to pay for it
and so the quanta or our seizing upon
that economic opportunity heading out to
Delamar doing the work extracting that
ore and taking it back to the refinery
and this will continue until it develops
you know until it's until it's full so
let's go ahead and open that card up
again and we can watch the refined
aluminum ore gradually build up you can
also see the number of workers a few of
the quanta so you see many of them
actually acting as miners there's also a
number of them that are working in that
refining factory refineries can't
process this material you know without
labor and there's a formula that
dictates how much labor is required in
order to process this stuff and so they
have to hire a sufficient number of
workers and act in order to actually
execute this operation and so this would
continue for quite a while let's go
ahead and speed up the simulation a bit
and go ahead and keep watching the
aluminum inventory is that's finished so
they're now building up their raw ore to
basically load up and after that the
entire economy comes to a halt they're
the one refiner we've added has no more
incentive to buy more it's it's it's
storage houses are already full and
therefore it's not willing to buy since
it's not willing to buy the quanta have
nothing to do so what we're going to do
now is at a factory but before we do
that let's get head on over to the power
plant formula and you can see here that
building a power plant just like
refining or requires something it
requires ten workers working for a
duration of sixty ticks and it also
notably requires two units of refined
aluminum or two in order to produce one
power plant it's got to be more
complicated than that I promise yes
again where we're building up
so let's go ahead and add the factory to
Hurston
so damn well going too fast there on
down and so once again you seem to see
the economy spring to life and now
you've actually got two different tiers
going the factory let's go ahead and
open up the factory the factory just
like the refinery needs workers in order
to build these power plants it also
needs refined aluminum so now you've got
multiple things going on the factory is
willing to buy refined aluminum someone
has to transport that aluminum from
Crusader to Hurston so some of the
quanta are basically working you know
they're River they're basically working
as freighters to move that you know to
move that product from one location to
another some of them were working at the
factory on Hurst and some of them were
working at the refinery on crusader some
of them are heading back to Delamar to
actually do more mining so you've got an
entire little you know economic cycle
going here
however it's gonna wind up coming to a
dead end here let's go ahead and
accelerate it again just like what we
saw before because eventually the
factory fills up all of its warehouses
it can't take anymore therefore as no
more don't you know it has no more need
for refined aluminum that will
eventually shut down the refinery which
will in turn eventually kill off the
miners and you can see there that the
inventory is still building on the
aluminum which is why there's still some
activity but as soon as it's done it
starts flatlining so they see that idea
inventories capped out yeah and now
they're almost done
the factory is basically got but it's
it's got all it can handle the refinery
has all of its hand to handle therefore
the entire loop you know draws too close
again so let's add one more node a let's
add a shop that sells power plants to
our corp
slow down again and so now the loop is a
bit more complicated the shop is looking
it's a retail shop it's looking to sell
power plants in order to do that it
needs to be able to buy them for one
price sell them for another so it adds
its mark upon and it just like the
factory that requires transport of the
refined aluminum from Crusader to
Hurston it needs the power plants
transported from the factory to it and
so if you notice there if the individual
quanta they'll actually have a little
translucent circle around them if
they're carrying goods and so you can
easily differentiate whether or not the
ones that are moving for example from
Hurston back to the mine are empty
they're going to bloat up on ore and
then when they're heading from or back
to Delaware and then from Delaware back
to Crusader they've actually all got ore
and so this loop will actually continue
indefinitely and the reason is because
we've cheated something for tonight
which and it sounds very similar to what
I was basically saying was a bad idea
which is the shop right now is a simple
consumer it's burn it's burning off that
inventory the difference here is that
the solution to that is very simple in
the context of quantum and the reason is
these quanta the next step of what we'll
be working on is they'll actually
require chips chips require engines and
so all of a sudden there's a real demand
for how many power plants do you need
how many ships do you need it all
follows those same illogical equations
so let's go ahead and add a bit more
economic complexity
so that's far we've shown a very basic
economic clue one commodity one refinery
one factory in one retail shop the real
world of course is far more complicated
you'll have lots of different
commodities refining and production
those retail shops and horseplayers in
quanta competing against one another for
a limited supply of goods and services
it's this competition this economic
natural selection that ensures that
things remain in balance that a logical
equilibrium is reached so our current
architecture basically has players
connecting to a game server and the SIRT
and then we've got services behind the
scenes that can feed information to
these servers and receive information
back in return and so you can see here
you know we've got shop services and
probability volume services and all this
sort of thing the basic problem with
this arrangement is that services don't
have any knowledge of what NPCs are
doing or rather what they should be
doing so that shop service that controls
the prices it's got algorithms but it
has no real understand it doesn't
understand that there are 10,000 NPCs
that do or don't need this or what
pirates are doing or any of that
we don't simulate at that high level
anywhere within the game right now you
have servers that basically instantiate
the stuff near you and you have the
services that can run the you know these
formula and that's basically it
now they can implement these services
these algorithmic price calculations but
supply and demand only comes from
players and hard-coded formulate and
it's the same permissions in Peavey's
the data is completely static and can't
evolve the number of servers of course
as we've seen here it varies depending
upon how many players are in the game so
let's go ahead add quantum quantum
changes this in dramatic fashion it
gives us a place where we can
efficiently simulate NPC behavior and
then feeds that behavior to the game
server so that players can experience it
further it allows player actions to be
fed back into the simulation so that
there
no meaningful difference between the
real and simulated worlds quantum
creates a complete loop NPCs can be
simulated in efficient fashion and
actually meant to say that quantum feeds
the services which in turn feed the game
servers so let's go ahead and get back
to the simulation and what we're going
to do now is alter the powerplant
formula so let's add a bit of complexity
by changing the production formula for
power plants to require lera night add
some we need to change now we need to
change your production pours I hope
right yeah okay yeah we do when I have
the new mind first so we're gonna add a
lair night mind to wala and then we want
to go ahead and add a refinery for this
lair night and we'll add that to the
hearse tournelles three
and now let's go ahead and adjust that
powerplant formula and we're gonna
change the powerplant formula right now
it requires zero lair night we're gonna
change that to two and what we're gonna
very quickly see here is that we're
gonna start getting some glare night
flowing to the Hurston factory so that
the power plants can continue to be
created and that's that's that that says
aleut that's that loop of guys right
there that's what they're taking now one
of the important things here is that the
let's go ahead and look at the Hurston
aluminum aluminum
now what will end up happening there is
it was very low for a period of time and
that's because they were actually
burning off that aluminum inventory as
fast as they could get it and the reason
why you see that spike there in the
aluminum inventory is because as soon as
we alter the formula so that power
plants now require lera night they were
still receiving from all these Freight
freighter transports they still had
aluminum coming in but they could no
longer produce power plants so it's
stalled and all of a sudden they started
stockpiling stockpiling and then when
you see that the aluminum started
falling
that's because finally the they started
receiving supplies of lera night and
they were able to resume the production
process and so all of a sudden their
aluminium started getting burned off a
natural rate
[Applause]
yep so now we're gonna add a bit more
layer and I out in the asteroid fields
and Jake's gonna handle that be a macro
and now let's go ahead and increase the
supply of aluminum and see what happens
so we're gonna add a few new mines so
let's add an aluminum mine to sell in
first
let's add one to Aberdeen as well
and lastly we're gonna do Leiria and if
you remember we already have an aluminum
mine on Delamar they're telling us we
need to hurry up you guys want us to
hurry up or keep going all right so it's
like four hundred to one
let's add a couple more aluminum
refineries as well to the Crusader l4
and an arc or Bell one an arc or pull
one yeah so now let's go ahead we just
added all of this new aluminum so let's
head back to that Hurston Factory and
see what aluminum prices are doing there
what's that factory having to pay for
aluminum with all this new supply these
new mines these new refineries and there
you see that the price is starting to
fall off you speed it up speed it up a
little bit let's let you see what it
does and if you see it continues to
plummet
so those prices are pretty much falling
off a cliff now from all that extra
supply that's been brought on without us
having to go back and rebalance anything
so let's go ahead and head on over to
sellin and you can see that sellin is in
very close proximity to Crusader so
you've got to refine aluminum refinery
and aluminum mining yet there's very
little activity and the reason is
because the aluminum at that mine is
very difficult to extract so let's go
ahead and adjust the mining time on
Selin from 180 to 120 and with this
again reflects is how difficult is to
extract from that particular location
and so you see there now you see a few
guys are actually willing to put in the
amount of work necessary to extract it
not all of them it's still a lot of
effort and this comes back to every one
of these guys having their own
individual set of traits so some of them
were willing to injure yeah more risk
more repel but you know more effort that
sort of thing so let's go ahead now and
increase the light consumption let's
just go with normal pace all right
hey go so let's make the lira night more
difficult to work with and more rare and
see what happens there so we're gonna
adjust the global Lera night refining
time from 60 to 120 adjusting the time
on hawala we're gonna do both the global
refining time we want to take it to 60
to 120 and wall is the extraction of
time goes from 60 to 180 that's right
60 to 120 their night
so what we've just done is basically
make it more time-consuming more
difficult to refine it and we basically
made it more difficult to pull it out of
the ground so let's go ahead and apply a
macro also to Rafal to reduce the
default purity of layer night from fifty
to sixteen percent which means that
refineries are going to need more or to
produce the same amount of refined
product reactive and now let's go ahead
and take a look at the layer night
prices on the Hurston factory so we just
did three different things to make it
considerably you know more expensive for
lera night to be utilized and speeded up
and you can see that larry night prices
are going up up it looks like they're
starting to skyrocket this could be a
complete economic disaster if you notice
they're just going up up so what we're
gonna do now to bring that back in the
control is let's go adjust the power
plant formula to compensate a bit so
let's adjust it from instead of two
layer a night let's change it to point
one so we just reduced the amount of
lair night needed in the economy by
ninety five percent and let's head back
and check out the prices again
and what we should see here in a minute
is Lera night should start to drop off
pre significantly there you go
crisis averted
and this will continue to drop if we
wash it you always get it a little bit
of turbulence because you've already got
contracts you set up themselves right go
ahead and leave it in I just wanna see
it drop a little bit more I want to see
it Tony
so it's already down 40 50 percent and
it'll keep it'll keep falling okay so
now let's go ahead and add some
additional factories Delamar looks
pretty dead there isn't a lot of
economic activity happening over there
so let's add a bit of life by adding a
new power plant factory and yeah let's
add a Hearst nail for factory for power
plants as well to create a little bit of
competition for aluminum and then let's
head on over to Hurston Hurston Factory
and let's check out their workers you
notice that their workers are falling
off a cliff what is happening well we
just open up a new power plant factory
and they're getting offered better wages
for another place and
and what are the wages on on on Hurston
let's see what the wages that they were
offering I can't fit so they were up at
that point two-five yeah Delmar's
offering like almost three times the
weight is yep so there you see the
differential which is that factory is
more desperate for workers and so you
see let's go actually go let's look at
the yep the basically the workers
skyrocketed on Delamar and plummeted on
Hurston and eventually those wages of
course stabilized they find a point of
equilibrium which is a big you know
point of you know all of this so let's
go ahead now and make some major changes
we're gonna do this with a macro and you
can see where we currently stand on
slide there's like a bunch of stuff that
we were supposed to be showing here
absorb it quickly everyone there we go
so we've added lots of aluminum titanium
and degrees iam and the entries that you
see on the screen mark system all of the
moons now have deposits we've added a
bit more layer night but it's still
pretty rare we've also added a lot of
new refineries we've added cooler and
quantum drive recipes to most factories
and they require aluminum layer a night
titanium and degree CM the demand for
coolers in quantum drives has been
introduced and we've also increased the
demand for power plants and lastly we've
increased you could see there at the
bottom of the screen the number of
quanta from 1,000 to 2,000 so that we've
got enough workers to keep the economy
humming now previously we've seen pretty
obvious cause and effect at this point
though the economy is starting to get
pretty complicated and we can look at a
few graphs just see what's going on with
some of the prices to see this and this
is one of the most interesting things
about a really complicated economy which
is these changes in quantities and
prices the purposeful movement of quanta
this dynamism these are all
opportunities that you'll you're going
to be able to exploit within the game
and therein
logical motion so that's it the next one
be a shame if somebody came to steal
from these people huh yep bring up slide
okay
got a real slide
all right so now we've we've introduced
some some pirates let's go ahead and so
you can see that there are four pirate
crack and there's the nova rioters
lowriders ninetails and dusters pirates
have to return to one of their bases in
order to refuel rearm let's go ahead if
you notice they head to the areas of
highest value if you let's go ahead and
zoom in there and you can see that those
are missions being created by the NPC is
no different than players would in other
words you see a lot of deaths on a route
that's got a lot of value and go ahead
and hover over some of those contracts
these are contracts that are being
thrown out by the NPCs on that route
what's happening is the NPCs are
basically being you know some of the
freighters are being picked on by the
pirates the ship is being destroyed and
now that NPC is has ejected and needs
transport back to civilization and so
they're requesting that and these are
missions that would be fed back into the
game that you'd see and you could wind
up accepting these
let's go ahead and take a look at
Hurston the cooler is upon us out this
is where they're operating out of you
guys
what do you wanna hear to check out the
Hurston let's look at what happened to
the cooler and quantum drives yeah so
since we've now got a lot of pirate
activity on that route we want to see
what's happening to the cost of some of
those Goods for a cool half-a-million
UEC you can get yourself your own power
plants it's actually normal piracy is
really terrible for economics you guys
so yeah so let's go ahead now and really
see it over at the coolers or it started
it like a really reasonable thing yeah
that's that's peg it's just it's the
scale so basically they were down around
a thousand two thousand and now they
just absolutely skyrocketed in price
because so many of the freighters moving
whether it's supplies are moving you
know the finished product from one
location to another are now being
intercepted and these cuantas I
mentioned earlier it's like they have
various traits and some of them are very
risk-averse and they won't go down
routes where you know there's a
significant chance of death and so to
counteract some of this danger let's go
ahead and bring in someone to fight
pirates so here comes some security and
what you'll notice is that security is
drawn to areas of conflict where there
is a lot of deaths and such so they're
gonna wind up gravitating towards those
areas where there's a lot of piracy and
there you can see I'm going over to
speed it up a little bit not 200 it's
just 200 too fast difficult Oh what's
going on and if you notice by the way
the police will wind up patrol Ian's
area so they're in constant motion
whereas the pirates basically are
enabling quantum interdiction fields
that's why they're basically picking a
route on you know they're picking a
particular location on the route between
you know to between two locations and
they're basically you know lying in wait
and the security which doesn't know
exactly where they are is scanning the
area
looking for them and so what you notice
here is that the pirate situations
starting to look a lot better now that
Security's shown up and you would see
this reflected over in the prices and so
what you have here is a perpetual game
of cat-and-mouse to where the Pirates
look for the areas where they can reap
the largest rewards with the least
amount of risk and security is then
drawn to them and as soon as you get
enough pushback from the system in terms
of security then the Pirates look for
you know more opportunistic you know
pastures and again this is very much
like what you would expect to see you
know you know an illogical functioning
system
so let's go ahead and turn on the grid
and what you're looking at here is one
of the big problems I referred to
earlier is how we wind up getting
samplings of this you know of how we
generate probability volumes and so what
this is showing you is we can look at
one of these high conflict areas and
it's basically tabulating exactly what's
in that area so you can see that there
are ten total quantum Freyr eleven
pirates five security it also shows you
the total value being transported you
know exactly what's going down that
route let's take a look at a few other
locations here you see these security
and pirates are fairly even six pirates
seven security you know a decent amount
of value six freighters so it's a
there's actually an almost equivalent
number of freighters pirates and
security this is the information that
quantum and it's a small piece of the
whole this is what it would wind up
feeding periodically to the probability
volume services so that designers no
longer need to go in and say oh well
we're gonna hard code a certain amount
of security a certain amount of
freighters and it can never change we
ship it that's all that's ever going to
be in this case the simulation is
running it's constantly ebbing and
flowing and your actions over on the
game side get factored into this result
just like any of the quanta in this
simulation
so for years we've had just the backend
services and the game servers and the
fundamental problem was that we didn't
have a single area where the entire game
could be simulated where NPCs could
request goods and services because they
have a legitimate economic need and
could buy with players to provide those
things we didn't have a way for this
activity to determine what you see as
you wander around the universe thus
eliminating the need to spend enormous
sums of effort configuring vast
quantities of static data that could
never deliver the dynamic experience we
really wanted quantum solves all these
issues it also provides us with a lot
more context which means that concepts
not previously understood like how much
risk there is in taking an item from
point A to point B can now be easily
calculated information like this is
vitally important to the price discovery
machinery and as I spoke about earlier
in a properly functioning economy such
things can and will generate a lot of
ripples we also get the information
necessary to properly customize mission
content meaning we can deliver a lot
more environmental and mission diversity
without having to do any more work I've
covered a few of the large areas that
quantum will impact but the effects will
be felt far wider how many NPCs you see
at a landing zone for example and what
they're doing can now change over time
manufacturing towns might boom and bust
depending upon how much Commerce is
passing through them a didn't give in a
moment NPCs can grow and evolve
separately from their interactions with
players into powerful bosses potentially
and you'll be able to witness their
growth in lots of different ways
criminal criminal NPCs with a price on
their head can move around the universe
just like a player making time to catch
them that much more fun we've got a lot
more work to do before a quantum is
ready for integration with the rest of
the game but it's one of the last big
steps in setting us up for a completely
dynamic and systemic universe thanks for
listening
[Applause]

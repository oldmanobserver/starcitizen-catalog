# CitizenCon 2954: Brave New Worlds

**Video:** https://www.youtube.com/watch?v=wYvPpQ25XGc
**Date:** 2024-10-23
**Duration:** 1:23:49

## Transcript

[Music]
hello citizen
[Applause]
KH G citizen
con hola citizen con ni citizen KH and
hello Manchester I'm not going to need
this anymore cool I am Ben or as some of
you know me I am Bal on Spectrum today
we will talk about Brave New worlds this
is pyro 2 monox it's a Barren Planet not
really habitable now since the advance
of our planet Tech we've always allowed
players to circumnavigate planets and
move from orbit to ground seamlessly
explore complex areas in intricate
detail now with server meshing we're
going to need a lot more locations for
Missions and destinations for more
life but there's a major question that
has always followed this project since
the beginning of alpha
3.0 how are we going to make a large
number of planets and systems how are we
going to meet the Fidelity Benchmark
we've
established in this technology update we
bring life to lifelessness even to
monarchs we take the physical
representation of the terrain the
geology the atmosphere the climate and
the environment to create accurate
biomes that spring naturally from the
Collision of all these environments
coherent denser biomes that follow the
laws of nature that we encode into Data
data that we then leverage to place
flora and fauna yes but also settlements
buildings alien and human life in a
planetary context this creates worlds
that are scientifically plausible r in
gameplay
opportunities we want you to find
Adventure just by going around the
planets without a Quantum point we want
you to find actions along your path for
this we are changing how we made the
game we are scaling how we made the game
in all areas this is not just a planet
Tech update this is a collection of
systems that we
[Music]
call J
now to help me explain all this nice
work and this nice technology let us
kick us off and I wome welcome our very
own Ally Brown and will Hine for phase
one of Genesis
yeah hello Star Citizen yes hello
citizen KH
yeah so let's start with some
introductions this guy over here is Will
Hayne AKA water guy or river
guy and this lovely gentleman is Ali
Brown Pusher of pixels
extraordinaire and we're here to tell
you about phase one of Genesis which
we're entitling the laws of nature and
this involves revolves around the
fundamental approach we use to build our
planet and is the literal foundation for
everything else we're going to talk
about in this talk today now it centers
on datadriven physically based rules
that we aim to realistically emulate
nature and its incredible diversity
before we dive in a bit deeper let's
just recap on some of the things we
already have on our planets so here you
can see our lovely atmosphere and our
Cloud rendering which can provide some
spectacular views we have a on the-fly
terrain generation which is no loading
screen in our game which we're very
proud of then we have our scattering
system that can populate these planets
with many different diverse biomes and
we've been setting quality benchmarks
for each of these biomes as we come
across them one by
one but what we have isn't perfect this
scene on Microtech it looks great but
it's not getting the same density that
you'd expect from a real Pine Forest
that's one of the things we want to
solve the other if I take you to the
other side of micr tech you'd be excused
if you thought we just turned around and
looked at a different part of the forest
why is that well this is because
currently our artists create slices of
biomes in great number and then they
distribute them across the planet using
humidity and temperature properties each
size looks great in isolation as you've
seen as you've explored but this is not
the solution to give us varied and
natural biomes across an entire planet
additionally just using humidity
temperature limits to only two degrees
of variation and that's not enough for
the sorts of planets and worlds that we
want to create and for you to
explore so how are we going to scale up
our planet Generation Well as I said
before we're going to start with
physically based rules that drive
everything we want nothing to feel
random on these planets we want no
limitations on the number of biomes we
want infinite biomes that are
continuously changing across the planets
and we want extreme density and we want
to maintain or exceed all of the quality
levels we've set with our existing
biomes and most importantly we want it
to be scalable so that we can really
scale up to the level of content that
the designers are expecting and from
your perspective we want you to be able
to truly explore and find unique playing
opportunities everywhere on our planets
so to start this we're going to need
more data so if we see here some of our
existing data sets on our planets we
have temperature which we Define locally
and globally and humidity and that's it
for now with Genesis we add many other
data sets such as the geology type the
soil type and then we also go for things
like the soil de depth and the quality
and the nutrients and many other
properties all drive this complex data
set that we use to build rule sets on
that each individual asset can describe
how it should work with
them we're going to put something
together and show you some demos today
using some of the assets that you've
already know and love in the Pu although
you might see some new stuff later we'll
save that what you're going to see is a
vertical slice of development it's very
early stages very work in progress you
might see some bugs but that means it's
only going to get better so be excited
the number one challenge with planets in
our game is scale in no other context do
you need a planet to look great From
firstperson perspective when you're
stood among the trees you need it to
look great when you're in a spaceship at
a Quantum marker miles away and
everywhere in between there are no
loading screens you see everything we
cannot afford for it to look bad in any
of those scenarios so let's start from a
ground perspective demo number one let's
have a look
[Music]
[Applause]
[Music]
[Applause]
[Music]
so how do we make
that thank you thank you so let's talk
about first what's underneath it all the
ground
so so in our previous terrain Shader we
just switched between different ground
textures depending on climate and didn't
really consider the unique properties of
each type now the terrain Shader is
based around four layers we always first
consider bedrock at the bottom of it all
then we're approach we add layers of
soil of different types we then add
debris where appropriate whether it be
pine needles Dead Leaves Etc and then
when it gets cold we add snow each of
these layers has unique shading
properties and unique transitions
between them because we do this all in
one Shader we're able to achieve that as
well as being performant we can also use
things like water saturation to darken
and tint the soil and other properties
to make it look more realistic but
that's not what filled most of the
screen in that demo that's the
vegetation like what Ali said we want to
emulate the laws of of nature so in
Genesis we have rule sits for every
asset that tells it how to respond to
our Rich data whether it be soil type
water availability temperature geology
or whatever we assess the viability and
the Vitality of each asset and compare
them to decide what is likely to spawn
in a natural environment this
automatically creates the cohesive
environments that you saw in that clip
not handcrafted anymore no one has told
those Ferns and those Pines to be like
that they each want to be like that and
that's what we're doing multiple assets
coming together to create a unique
microbiome what about trees then same
thing they have a larger requirement for
Space they have a larger requirement for
nutrients that's how you see the
distribution and it's how it all works
let's meet the Flora that came together
to beat That Forest to beat That Forest
to make that forest and have a look at
some of their properties now just to
knowe they are all going to look quite
similar because we've already seen them
in the same place so they must be
similar so building BL like grass and
common grass medium amounts of sunlight
we had ferns see it's a much lower
requirement for sunlight we had seix
bushes forming our under Bruth and we
had Pines of course and multiple
variations of Pines diversity is driven
by competition everything has ideal
conditions which affects its
competitiveness we also have additional
control over this in the form of
dominance which allows us to make one
asset more competitive and more dominant
than another which is just what we see
in nature everything is constantly
fighting for resources and of course
light because we spawn these assets in a
hierarchy it's easy to propagate shade
data down over the distribution of the
assets so that we can control ones that
prefer or reject shade often like these
ferns they can spawn in light but they
are outcompeted in those scenarios most
of the time so you will see a rogue Fern
or a place where there's no seed for a
specific asset you might start to get
this coming
in let's take a look from a larger
perspective again
[Music]
[Applause]
[Music]
[Applause]
[Music]
[Applause]
[Music]
[Applause]
[Music]
[Music]
so to take a few some of the things we
saw in that clip let's talk about rocks
first so anyone that's done a lot of
ground driving and ground Vehicles might
have seen that our rocks sometimes feel
a little bit randomly scattered and be
quite an obstacle sometimes so in this
clip you saw that the the rocks are no
longer randomly scattered and they're
now BL placed based on physically based
rule sets and this logical grouping is
is achieved via erosion simulations
which we run offline to build localized
data maps and they describe the size of
the Aggregate and rocks and the it and
where they should naturally form and
that means we get things like these
natural clusters or Boulders at the
forest edge underneath the cliff side
and on that note you might have noticed
that the cliffs have been dramatically
improved in how they shade we also get
see things like the natural clumping of
vegetation caused by seed dispersal this
is controlled per species so we can get
better emulation of their unique growth
patterns and create much more realistic
environment and we also calculate the
slope aspect which is the exposure to
vegetation to solar radiation and other
environmental factors and this allows us
different species to flourish in
different conditions as we can see on
different sides of this
Valley then over a larger scale we
calculate the age and vitality of each
tree individually to drive exactly how
high they should be but also the color
of their
leaves now this isn't the only thing
that will drive the color of the leaves
we're going to introduce the concept of
seasons to the game and this will mean
our planets will evolve through the year
and we'll be able to shed leaves from
trees and have the grass River in winter
so as you're starting to see all these
rules all this data is all coming
together to create what we call truly
emergent biomes let's have one more look
at how this varies over a much larger
scale
[Music]
[Applause]
[Music]
[Applause]
[Music]
[Applause]
[Music]
[Applause]
[Music]
[Applause]
[Music]
[Music]
[Applause]
just like in real life oh thank
you just like in real life our areas
should vary even by traveling a few
kilometers if you get in a helicopter
and fly over the Alps it all looks a bit
snowy but when you look closer it's
constantly changing and we're now able
to accurately represent that with our
changing data another very important
factor to mention is the distant look in
this screenshot you don't see a single
tree and yet the tree the terrain is
still green we previously did that with
artist made lookup tables that told the
planet what color to be at what position
but that wasn't going to work with all
our new data and are far more comp
spawning now we have a systemic solution
the planet Shader is able to
intelligently evaluate what's going to
spawn there using the same rule sets
that cause the assets to spawn a when
you get there that means we can sample
the sort of color that that is going to
project onto the orbital View and use it
we get a far better accuracy from the
result together by creating rules and
authoring data that works we create a
continuously varying planet that sets
the scene for the incredible exploration
gameplay I know you guys are going to
have but how have we done this without
compromising on
performance so yeah with all the new
data sets and these physically based
spawning rules you're probably wondering
how is this going to handle in your CPU
we don't want to melt anyone's CPU so
we've redesigned all of this Tech to
work much more efficiently than before
and now it can run on many CES this
allows it to be run perfectly well on
both the CPU and the GPU so we've
redesigned our framework so that we can
run it at both and swap between them
freely now the benefit of this is we can
do things like first off move the
terrain system to the GPU and we've now
done that to get some incredible
performance improvements but we then
also cached the results in some we
called a virtual terrain texture I'll
give you a quick demo of this now this
is now vastly faster than the previous
system but it also allows us to generate
the terrain in much higher resolution
which means all the popping you can see
on the mountains as we're approaching
all of that should be completely
eliminated on the right hand side of the
screen
[Applause]
with the extra Headroom we've gained by
making our terrain system more efficient
we've been able to introduce some
improvements including high resolution
ground textures proper blending between
surface types and of course better
tiling if you're familiar with any of
our planets we've taken off all the
assets so you can see the issue and now
how it looks you don't see those lines
going at all
[Applause]
and one
more with the terrain data cast on the
GPU like Ali said we can perform the
scattering there too which is
significantly faster all those
algorithms that we've used to generate
those first bits could run there without
being more expensive on your CPU and it
also means results are directly there on
the GPU we can render straight from them
that allows us to have dramatically more
density in our new system we can render
objects directly without having to go
via the CPU every frame we also cull at
different levels of granularity with
bigger groups in the distance and
individual assets up close just as a
demonstration this is the sort of
density you can expect on Microtech
today and in a second we'll flip over to
what you can expect from the new
upcoming Tech
in a second we're going to turn on the
culling group Stog so you can see these
are the groups that we create of those
trees and of the terrain and as we get
closer we shrink them so we're more
intelligently rendering what we need
without having to assess each tree
individually all the way down to the
ground
so to recap some of the things you've
seen here in phase one we had datadriven
rules based on physically based data
generating emergent biomes that
continuously vary across our planets to
get infinite possibilities and we've
achieved this with much greater density
than before and much faster rendering
and we also achieved seamless
transitions from ground to space with
zero popping so now that we've got all
this Tech it's time to talk about how
art might make use of this so for that
I'll hand you to the next phase towards
Sebastian
sha thank you guys thank
you no thank
you wow thank God there's only 20 of you
otherwise it be
nervous right thanks for having me I'm
here on behalf of the planet content
team and we're very excited to finally
show you some of the things we've been
working on um as you've just seen from
and Ali the system keeps growing both
complexity and capability so our
libraries have to grow alongside
it wait should I click no
um no I should
[Applause]
click oh there we go so our goal of the
content is to provide our goal is to
provide the content that the system
needs to populate every corner of every
planet with realistic environments and
this content is what this phase of
Genesis is all about emergent
biomes for our first example of today
it's almost a shame will left because
like it's about moisture but let's look
at very high moisture and medium to high
temperature
[Music]
w
[Applause]
[Music]
[Music]
there
[Applause]
[Applause]
thanks that did look really good so for
swarms we obviously made vegetation that
feels at home in or near water but
before we dive in allow me to give you a
quick primer on our approach to
authoring plants most species can
survive in a fairly wide range of
climate conditions but will only Thrive
the conditions ideal to support this
concept we author our vegetation assets
to describe the full growth cycle of a
species if the conditions aren't ideal
they may not grow the full maturity or
look their best but the species can
still exist so let's have a closer
look for The Waters Edge we made plants
like this alterat Tera and the iris we
also need the Aquatic one to float on
the water surface like the water Lio
peled this Willow and the one after a
Chinese T tree while comfortable near
water we can also use to replace some of
the more aged SES used to seeing
elsewhere in the
game the last one it's it's taking a bit
longer now but um the last one I'm going
to
wait the last one you may not see used
much in other biomes but it's a very
iconic one for the swamp the Bal Cyprus
so another feature we need for make a
swamp experience a proper one is water
injection over the last year or two a
lot of work has gone into improving the
way our water reacts and renders so
naturally we wanted to make a biome that
highlights those advances let's have a
brief look at what it's like being
inside the
swamp as you walk through swim through
the water you may come across obstacles
like logs or debris floating on the
surface they will react to the player
character and can be pushed out of the
way we were also pleasantly surprised
when we first saw how the water
simulation systemically affects aets
floating on the water surface making for
some really immersive moments
now before I get to our Second Use case
of the day a quick disclaimer obviously
all the things you're seeing here today
we still actively working on but this
one in particular it's a bit early in
the process so let's have a look at
extreme option density next with the
data saying we should have high rainfall
and sunlight year round it's the perfect
condition for our next biome to appear
woo
[Music]
[Applause]
[Music]
oh
[Music]
[Music]
[Applause]
[Music]
considering everything you've just seen
is still very much working progress the
gameplay capture team really did a great
job showing our work in the best
possible light with jungles we want to
explore the concept of vertical
sertification as they are the prime
example for that what it means is that
you have horizontal layers of
microbiomes defined by the uh defined by
the species that thrives with the amount
of sunlight and rain that still reaches
there the floor herb and brush layer we
could almost do before obviously missing
the density but now we also have the
option to add variation to the tree
layer by dynamically spawning epif fites
like Lanas orchids or prats attached to
drunks and canopies of other
aets with this and improved density is
what will finally allow us to make
convincing jungles and the best part is
we don't even need a lot of different
species to create what we refer to as a
canvas of a biome the idea being that we
can vary what kind of forest you're in
by adding or replacing the plants that
visually stand out the
most now to get a start on our
certification we made EP fights like the
aprum and the Spate including a version
for your
have then obviously you need jungles for
uh leanas for a
jungle and we also made the careers
which add character to the herb and tree
layer
for tall trees we decide on a fairly
generic rubber tree as its different
growth stages serve as a nice foundation
for All Height levels and that's pretty
much it what we need to make a pretty
good base for
Jungle now for a third and last use case
let's pretend the data indicates regular
rainfall and motor temperatures this
climate would support a lot of different
forests but we also wanted to use this
opportunity to explore extreme scale and
that just really cool
[Music]
on
[Music]
[Applause]
[Music]
now for this one we first looked at the
different Redwood biomes on Earth and
try to analyze what the most defining
species of them are with this
understanding we then decided the
following plants to allow for a fairly
Universal Redwood forest they will allow
us they will easily support variation
across continents and
planets a fairly common family of
species for the ground levels of all
redwoods are ferns in our case a Sal
Fern we also made a huckleberry variant
to provide some visual density for the
sh layer to add some Jurassic Wipes we
made tree FMS as they can be found in
New Zealand's Redwood forests the most
important one though obviously the quers
and they ended up being one of our most
complex sets yet
as it turns out they can grow to be
fairly ridiculous in
size it keeps
[Applause]
going now one thing our games Fage s Sly
missing is the ability to properly react
to what's happening around it the goal
here is to unify all forces from all
sour sorry for the horrible rhyme um all
sources from all all forces from all
sources Wind characters and creatures
ships explosion and whatever else and
have the vegetation behave
accordingly now as part of our Tech
improvements we will be implementing a
GPU based simulation that's fit for our
game scale for now we set up the ferns
with our existing CPU based one to
better visualize what it would feel like
to walk amongst those giants also with
the biom our planets now being defined
by where an individual object wants to
appear you can expect a lot more happy
accidents by having species invade
different
biomes um making for some unique
locations hopefully
surely now before I get to this appear
of stage I just want to say a big thank
you to everybody involed D especially my
team in Frankfurt for doing such amazing
work and being all around great people
and also all of you guys I really hope
you have a fantastic citizen con this
concludes this phase of Genesis so
please welcome me into the stage so I
can tell you all about the next
one love you thank you hello citizen KH
woo
all
right those new planets and biomes were
pretty right but it's time from phase
three civilization to give you some
stuff to
do so let's talk about location density
we've emulated nature as well as we can
to make sure our planets are physically
based and realistic and our biomes are
emerging but it's time to start
populating the verse because where
there's people there there lives and the
structures they build so it makes sense
that whenever you go and explore these
planets that you find their lives and
what's even more important is that when
we make these structures that they use
and follow the same rules as our biomes
such as the jungles and the
swamps but before we continue let's
first take stock as to where we are now
at the moment in the verse we have these
custom beautifully made locations such
as ghost Hollow we've got our
distribution centers or even just some
outposts and they' have all been
handcrafted by our designers and artists
to hit that Benchmark and they've been
working directly on the
planet
however going forward this doesn't
really scale with how we want to go
forward with the game server meshing is
about to arrive and we're going to have
a way higher player count so those 73
bunkers across stampton just won't cut
it but in general it's also pretty
Barren there's not much for you to
explore in and find stuff out there so
just no exploration gameplay you haven't
really put your character to use for the
way that you
should so this means we need to go
bigger which means we need to change our
workflow and with any workflow means we
need to First establish a new
Benchmark so with our new Benchmark we
are ensuring quality and improve on our
previous work and make it even better
and any location that you'll find needs
to have its own unique personality and
no repetition we don't want you to find
the same location twice this also means
that this is your exploration and your
findings so when you go out there and
explore with your Carrick or with your
Corsair is that whatever you find you
can share with your Orcs or with your
friends as for it density if you fly
down to the planet you we want you to
find something let's say every 100
clicks but also improve the mission
experience so when you you stay more in
the planet you're more immersed and you
go from location to location just keep
going so going forward we are
modularizing all our existing locations
and assets we basically making a library
of buildings and layouts that we'll be
using to no longer work directly on the
planet the neat thing all these modules
and assets can be iterated upon and
tested right in the editor for all the
designers and artists to ensure fun
gameplay and interactive sandbox
activity and also make sure all the
mission stuff is there basically we're
building a
toolkit so let's look at some of the
things that we need to keep in mind as
we are making that toolkit first and
foremost we've got our art style and
branding we've got things like Frontier
for our settlements we've got high-tech
for the eer Emergency Shelters but also
utilitarian like our bunkers and
distribution centers the Richer the data
the Richer these locations will
be secondly they all have a function
we've got mining for our mining outposts
farming for the farm stats or just
places where people live the function of
the place will Define the way the place
looks as well and its
form and last but not least the people
as well the faction and their loadouts
we've got lawful people like the new
citizens for prosperity in pyro unlawful
such as Xeno Fred and sometimes not even
no no one the place needs to look a bit
you know derel and different places
you'll find different
people so now that we've made our
toolkit and we've defined all this new
stuff let's start building thousands of
locations yes I said
thousands So to avoid the same issue of
working on directly in the planet I'd
like to introduce to you
starchitect but star allows us to do is
directly on a planetary scale scatter
all these new libraries and modules and
assets and no longer work directly on
the planet and it uses the same logical
World set as our emerging biomes and we
it also gives us full control over the
data that we set on these locations so
expect locations in places where they
make sense let's kind of look at all
these this new genesis data and all
these new libraries and then Chuck it
into St architect and see what it gives
us
as you can see we're now able to make
full-size locations and they will look
completely different based on where
you'd find them the layouts are control
controlled by the rules and it will
reflect its place in the verse we've got
Farms mining outposts but even our older
locations such as the bunkers that you
find on Stanton
so let's look at an example and kind of
use the tool to really you know make a
location we can Define the rules as I've
mentioned a couple times by now so for
our mining Outpost it wants to be near a
resource we can specify what this
resource needs to be but we can also
give a suggestions where sometimes you'd
find it here and sometimes you wouldn't
if the location has refineries it might
want to be near water to refine the
resources then secondly we can Define
what buildings should be there so
obviously we need mining buildings
houses for people to live as well and
even power buildings that we can
leverage with the Resource Network the
architect will intelligently figure out
where the placees and what needs to be
at the
location next up Farms its rules well
temperature not every plant can live in
every temperature but the same with soil
type only certain plants can be in
certain grounds and then we can query
the seed map to determine what plants
you would find there what are the
harvestables As for the targets again
farm buildings obviously power buildings
houses but even animals such as our
beloved quasi
grazers and last but not least thec
chips we've got these all over the place
currently rules well they'd be close to
anti-air because I would be shut down
but even in harsh flight conditions such
as mountains or low visibility You'
probably most commonly find them targets
well crash ship parts of course
sometimes you'd find the full remains of
a javelin and the other time you might
just find the nose of starf laying
around
so let's talk about coherency sure we
could scatter all these locations
everywhere on the planet and you'll find
them in places they make sense but we
can do better you don't just want to
find an outpost completely on its own
right we want to make sure it really
feels like people have built their lives
here
so let's talk about some missing
bits we want to tell tighter stories
such as the people's lives but also
logical exploration if I find one thing
I expect to find something similar or
something else nearby we also need more
data control what defines one mining
Outpost being different from the from
the other ones aside from the
harvestables
and also give the narrative development
make sure you know people build near
rivers on mountains they build near town
halls they build near distribution
centers so to hit that bit of a
benchmark we make sure that locations
are near each other and group them
together the effect it gives is a fully
developed landscape with Vistas and
points of interest all over and we group
them together in what we like to call a
cluster like this one that has 13
locations
let's talk about clusters clustering
means generating locations near other
locations so for example if you find a
distribution center just like in the
verse currently I would find forward
operating bases next to them but if you
go even further out you'd find mining
outposts to funnel those resources to
the
fobs go out even further you'd find
caves around them cuz that's where they
might find some of the
gems and then we can even specify the
data at on a cluster level all of the
factions that live at this whole cluster
any mining Outpost that the same people
but also what Commodities they sell to
find on what resource you'd
find so let's look at an example of the
Clusters we have our mining cluster
again we can Define what rules we should
have rules well near resource just like
our mining Outpost but also it needs to
be on a lawful planet we can Target on a
planetary scale where they would need to
be they need protection as for the
targets well caves mining outposts but
even trade
posts let's go to the other side of the
spectrum before I do so I forgot data we
can on a cluster level specify again
what mineral Commodities but what also
what harvestable types you'd find are in
in that region now let's look at the
other side of the spectrum an unlawful
cluster
what rules well they need to be far away
from any other cluster because they want
to be isolated and do their evil Deeds
on their own and also on an unlawful
Planet such as somewhere in the pyus
system for the targets Outlaw outposts
crash ships because they would shoot
them down and also ruins from just
places they just completely
overrun the data on this one you'd find
specific loadouts and they'll be using
weapons that you wouldn't find any other
legal system and these weapons will be
sold at the shops in these
regions so now that we have a cluster
let's go even
bigger just like our locations we can
put clusters near other clusters and we
group them
together ranging between 10 to 15
locations each and we group this into
what we call a
sector like this one that has about 120
locations
however on a planetary scale we can
Define how many sectors we should
have with each their own data and
Persona and every single one of these
location is now ready for the mission
system to hook up and give you gameplay
and for you to
find a bunch of places on your
own and just on this side of the planet
can you guess the number we've got about
3,42
locations and again this means that
architect we're just able to on a
planetary scale just Define how many
locations we need what You' find there
and to just give that full
identity thank you for listening and I
want to see you in the verse but I'll
see you in a denser
verse however this was only the first
phase of civilization let me introduce
you to the stage the person who will
introduce life at these locations
Franchesco Ruchi
[Applause]
so hi
everybody
so where are we today so my name is Fran
franisco Ruchi and I'm the director in
cig Welcome To The Next Step of phase
three we will look into how life adapts
to the laws of nature and how all the
NPCs can interact pretty much with this
incredibly vast and dense worlds that we
just saw
so up to this point we have seen how we
are building the worlds we start from
the physical data set and this is to
make sure that what you see is not just
beautiful and realistic but also
physically accurate so the distribution
of the elements that we have seen and
the location and the pois are influenced
by geology Mission narrative and the
lore those locations cannot be lifeless
we want the planets to basically
leverage the space that emerg with
life so from an ey perspective I will
categorize the elements of those words
into four micro
groups emergent environment that is
everything we have just seen being built
out of the physical data set users made
locations so this includes everything
that our designers or you players will
create in the world so something that is
mankind made and not predefined in the
environment interior of those locations
now this is very connected to the
previous point the the difference is
that they represent usually a confined
space where there is much more tied
interaction and for NPCs is a lot about
interaction with objects that we are
usually used to in our everyday
lives and then the n d day and night
cycle so in essence the passage of time
that so far didn't have really a lot of
impact on the game play so to allow life
to respect this world and conform to the
rules that those environment defines
well we want to improve our tools and
work
workflow uh and we want to distance
ourself as much as possible from a
designer driven approach this is because
first it's labor intensive it can be PR
to bugs but also because the scale of
the words that we' have just seen are
very hard to be you know designer driven
in the markup so we want to improve to
improve this workflow and we will see
how manual markup is also not usually
the best option because with these words
that are heavily impacted by users and
changes and customization uh it's very
hard to know in advance where
interesting things are so today I want
to show you a couple of examples of what
the it te has been focusing on uh to
make these systems uh supported and
scale correctly to support this vastly
dense Dynamic words so we look at
perception in light and dark
environments and dynamic cover
generation so attacking an outpost now
must have a level of depth that goes
beyond what we had so the outside
environment can change change Vehicles
may or may not be present NPC can be
anywhere and if it's a bright day well
we will be more visible but our enemies
will also be more visible and if you
choose to attack at night time well
we'll attack in Shadows during Darkness
it's going to be a bit harder to see our
enemies but we will also be harder to be
spotted and it will give us more
opportunities to be stealthy and sneaky
how do we do that so as you see there is
also a lot of different light conditions
in these Outpost
so in this scenario we will start look
at our perception is impacted by the day
and night cycle on the planetary surface
as we seen in The Outpost Natural and
artificial lights are the two elements
that will impact vision and knowing that
you can use this to leverage your
gameplay Style to exploit basically all
the environment so what is perception on
NPC level is the combination of data
that we collect out of the senses and
vision is one of the sense and just
tries to um in a way simulates The Human
Side ability so designers can already
tweak the perception in different ways
and one way is defining how quickly NPCs
can understand what they are seeing and
the light condition have a direct impact
how how quickly an NPC will fully
understand for example if there is an
hostile in front of them and obviously
there is condition of light that
designers can control and some others
like the days night cycle that they
can't so in this video we will see two
main elements the graph on the top left
and the two color for cones the graph on
the left basically represent the current
light level the NPC is in and the
current multiplier this light level
generates to speed up or slow down the
NPC perception and understanding the two
instead represents the primary and
secondary fov the red color means that
if you stand in that location it will
result in NPC reacting the lowest to you
and the green color instead represents
the quickest response so during the
night NPC will have a hard time to
understand and and and forese and see
things but if they have flashlights on
their helmets they can turn it on and
this will impact their primary fob
making still the periferal vision a bit
more
uncertain and as you see here uh first
first of all the MPC is patrolling with
this domesticated friendly copion this
is because he wants to exploit the
vision the night vision capabilities of
the animal and it's kind of our tier
zero
pets so we will now look at the cover
system that is the next Dynamic things
that I want to show you uh so when we
introduced planetary navigation mesh the
first time our goal was really to create
a systems that would support and process
the environment in a very Dynamic way uh
our planets just way too big to
statically export them and process them
first of all and then they also their
regions only exist when somebody's there
and NPCs are there so essentially
environment has its purpose only when
life
exist Also let's keep in mind that even
if we could explore dynamically and
statically those planets so processing
dynamically all a static version of the
planet this would be first of all
wasteful and on the memory side and time
consuming uh and also because we have a
lot of runtime modification of the
terrain this would require us to still
reparse it the runtime and pretty much
that will be almost all the time so to
generate the cover data we want to
leverage the navigation mes system and
what we do is as you see here the blue
uh polygons are basically where NPCs can
work and the green ones are what we call
cover surfaces that are represent simple
representation of the environment what
NPC uses to the to understand if they
can hide behind something and if they
can shoot from some position
so up to now we have an approach where
designer would would be a designer
driven approach designer can Define in
the locations where cover was
interesting they could mark it up either
the location itself or prefabs and then
with a special entity that would just
sample dynamically the environment but
will still be designer
driven um this is obviously a good
approach for it's also standard approach
in gaming industry but what about all
those organic and inorganic elements
that get scattered with a new system
like if designers wants to iterate on
these ones for example and they want to
change the physical data sets those
scattering tool will just change
completely layout and what we want is
that designers can do this change
without being afraid of doing it because
the game play was you know predefined
and controlled and now they can just
make something beautiful but also
fun besides that yes we did have a
prefab approach where you can build
stuff out of small building blocks this
is obviously a good approach because
it's uh uh you know in a way you can
build stuff out of smaller version but
this creates a lot of unnecessary data
Imaging a crate and we can say that the
crate can generate cover now we stack
100 crates and what happens that we have
a lot of data to generate cover that we
have to process throw away this would
just waste CPU cycles for nothing this
is why until now you also couldn't fight
an NPC in a forest like this one and see
them hiding behind a a tree or a
rock so enabling the dynamic generation
of covers on the planet allows us to
exploit all the elements of the
environment whenever navigation mess
generates NPC can now have a chance to
fight with you hiding behind available
elements Boulders rock walls and all use
are all useful elements right now
however we don't have to limit ourself
to static geometries but also vles can
be used for cover and as you can see
this is dynamically generating while the
vagle moves so be careful where you bark
your Ursa because now can become a
source of danger for you as well last
but not least these systems can be just
used on all the different type of
navigation mesh we have so not on the
planet but also for example the
interiors and everything you guys
construct because obviously you guys
will build your own locations but you
don't really mark up stuff or you don't
want to decide that because that's going
to come automatically out of the
system so I want to show you
so what I want to show you now is just
like a little bit of insight of what
goes behind the scene when we generate
cover and navigation mesh these are some
of the steps that our system does so we
always start from the environment
voxelization what that means is we
process the geometry the physical
representation of the geometries that is
a little bit simpler than usually the
render mesh and we construct it in a box
Eliz approach this is also using
different types of agent definition why
so because obviously where a human can
move is not the same as where a vle can
move so we can Define different type of
precisions and then speeding up the
process where we when we have to or be
more precise where we cannot be to and
we can also create overrides based on
different things for example if you
crouch you can enter into smaller
locations that where you
stand um this process is basically
common between navigation mesh and
cover after that is generated then we
can evaluate the Vox in different ways
for example defining where we can walk
so can we make the step with our foot
over a specific Vox cell or is there
something in front of that hole in the N
mesh so that we can actually cover
behind and then we can basically decide
we generate cover surfaces and after the
cover surfaces are generated we can
process where the cover locations are
cover locations are good spot for NPC to
be behind the
cover so what we see here is the with
the introduction of melr last year
obviously we knew this would
revolutionize how you guys are playing
and we did have to find find a solution
to handle all the destruction you get so
you we destroy so much stuff in this
world that we had to find a solution
right so this is why we approach the
cover generation navigation mesh as it
is because there is just no way for us
to predict anything that you're doing
and we want just melstrom to be another
trigger for word evaluation so as you
see this is all damic
generating and destroying anything
just makes the war be
revaluated so as you see here we can
have also lots of rules so you you can
you can see a here but when F break
first they invalidate and then when they
rest for example we can decide when it's
a good moment to regenerate so that we
also don't waste too much CPU
Cycles uh the color that you see is
mostly uh cover quality so you see the
light green is High cover the dark green
is Low cover and then we have the red
that we introduced some time ago that is
basically not really good cover but if
there is nothing better well it's better
to be behind something that being you
know in open
space so let's just recap what we want
to do is finding a plan and having a
good plan to approach life in this vast
Universe what we want is the life to be
able to systemically evaluate all the
dynamic environments that is generated
we want to improve our workflow not only
to support designers and being faster
but also support all your guys creations
so we want the life to adapt and this is
all for making the game fun for you so
that everything comes
together so thank you all this was phase
three and now let's welcome Ben Parry
that will introduce you guys to phase
four of
Genesis thank
you hello Cen con
that's not
my sorry someone's changed my
lines welcome to phase four light and
sound now we've seen already um
automated systems for automatically
placing different biomes uh
different uh
vegetation settlements and people so now
we're going to take the same approach to
automatically handling light itself
first of all why is this important well
it's not always obvious especially when
they do their jobs as well as they do
but there's an incredible amount of
attention from the lighting artist that
goes into all of the locations that we
have in the game besides just marking up
the reflection probe areas they also
manage the visuals really carefully
adding fill lights um approximating
bounce lights off ground and up into
ceilings and dark Corners where there
aren't any direct lights pointing really
um and the problem is not only does this
take a lot of time and really constrain
the style that they're using it's simply
not possible if you've got a planet full
of forests and what was it 3,00 and
something Place locations you're going
to be exploring places that no artist
has ever visited no they've not looked
at and they've certainly not going to be
able to have tweaked it for you so we
need something that works completely
hands-off and natural outdoor scenes are
especially problematic for us indoors
you can put a lot of little lights
around pointing from different
directions and you can probably justify
it
Outdoors you've got the Sun and you've
got the sky and if you're behind a tree
you've got the sky and so you need that
Skylight to
vary
now so this is the forest as you'd see
it without the GI system as you can see
all the Shadows are receiving lighting
from the same environment probe so it's
basically just a flat color across we
replace that with around 40,000 mini Ray
Trace probes each of them has their own
view of the sky and so that gives you
way more contrast and variation As you
move in and out of the
canopy now there are a couple of other
pieces of the puzzle that we've been
working over on over the last year now
the first is well all the stuff that you
can't stick 40,000 mini probes onto
anything that doesn't have an opaque
surface we can't really know where it is
on the screen and track it from frame to
frame but if we don't do anything it's
going to stick out like a sore thumb
we've got fog we've got particles we've
got other little things I don't know
what they are um and so we need
something to do with those so to address
this we've added a kind of stable grid
of medium kind of probes that are
generated around the player As you move
around so that gives us approximately
like the approximately matching lighting
that we can apply to all of those things
now this is a little bit bit difficult
to illustrate in normal scenes so uh for
once I've been making my own
levels as you can see Pico's in trouble
again um but because the lighting team
hasn't helped you can't see anything in
most of the scene if you add the
transparency GI system suddenly the
whole scene comes alive and this is
something that we could never have done
um until we added this Tech
[Music]
now the other piece of the puzzle is
glossy Reflections now we've got a fair
few shiny objects in the game you may
have noticed and we've got the same
problem that if we fix the lighting on
one thing and then the reflections don't
match it's going to look terrible also
rate racing Reflections is really cool
and we wanted to do it um and the
challenge here though is that the rate
race Reflections you're going to do
they're not just mirrors like we've got
a whole range of objects in the game
from like a scuffed hole panel all the
way up to Chrome polished pipes and we
want the same system to apply globally
across that so I'm going to do an
uncomfortably short breakdown on what
this Tech looks like and how that comes
together so here's what sorry here's
what we need to be now obviously it
reads a shiny but there's this kind of
fakeness to it um it kind of looks a bit
like it's flying so let's see what the
rate tracing looks like yeah it's really
noisy and horrible we need to clean it
up so what we do is we let pixels share
their data in
space and then also in time to clear up
the final image and then we let the
game's normal anti-aliasing just kind of
clean up the last stuff and Carries over
the finish line and that's how you make
a chrome
[Music]
penguin now I'm going to derail for a
moment away from the topic of Genesis
cuz this isn't actually just about
automating the lighting for new
environments this this is also about
pushing quality in areas that have
already had all of that work done by the
lighting team we're freeing the artists
up to light more naturally allowing the
time of day shifts to be embraced rather
than fighting against them and as I'm
about to show players and NPCs are going
to reap the same benefits as
well so here we start adding natural
areas of light and shade and warm and
cool colors
these open areas benefit in the same way
as the forest scene did adding areas of
shade and areas of open
lighting like I mentioned the time of
day shifting leads to different ambients
as the sun
moves and this is a shot that I just
liked finally let's see how the the new
GI system can brighten up your
characters
day and also their day as
well whoever they
are well U I promise you light and sound
but I don't actually know anything about
sound so here's the man who does gram
philipsson
[Applause]
good afternoon citizen
con I've been at C nearly 10 years and
this is the first time I've done this
very exciting for me so
uh do you want to make some
noise so um sound isn't as fast as light
so it takes me a bit to catch up Jared
wrote that joke for me so you can blame
him says it right here blame
him so now we have a huge amount of
visual and interactable content
locations biomes populations planets and
systems and now they're all beautifully
lit too thanks Ben but how do we paint
this world with
sounds it's a challenge it's a challenge
of scale we need to support multiple
star systems and it's a challenge of
quality we want the highest quality
possible we also don't want implement M
mentation to hinder creativity and we
want a seamless experience so we're
asking a lot but with Star Audio we can
rapidly Implement audio for entity
classes brushes or audio sweeteners all
of which can be reused and reflected
immediately across the game including
all of those emergent locations we
talked about earlier so again this is
Genesis data deriving what happens in
Game and we can do all this without
breaking flow so here's a fairly dry
video it gets more exciting later I
promise uh showing you our rapid
workflow so over on the left I had to
think about that we have the wise editor
that's where all our sounds live in the
middle we have star audio editor and on
your right we have an entity that needs
some insect sounds on it so we can very
quickly drag from Wise to Star Audio we
can mark up very quickly a bit of logic
and we can re-trigger this entity's
spawn sound so that it immediately makes
a
sound I assure that is a group of
insects
um thank you you're too kind if you like
that one you like the ones that come
later but there's a little something
missing so to add some realism sounds
respond to how they move how you move in
the world and how they move relative to
you so we need to change the frequency
as the velocity relative to The Listener
change changes this is known as a
Doppler effect in simple terms the pitch
dropping as something whizzes by or in
even simpler
[Music]
terms now sound designers traditionally
needed to implement their own Doppler
sounds but given how fast we can travel
through these rich dense locations and
the sheer number of them we can't afford
to be doing that any longer so we've
created a systemic Doppler solution and
I'm going to show you that now the only
way I know how by putting a big Benny
noodle machine on top of a
mountain so you can hear the pitch and
Tempo changing as we move relative to
the Benny noodle machine and this is all
fully systemic no special treatment for
this sound
[Applause]
and I expect the noodle bar to be very
busy after that
commercial so how does it work well the
listener is surrounded by variable time
delay buffering not the horrible kind of
buffering you're on the internet this is
a really nice kind that helps the game
sound good uh each buffer represents a
section of the sphere around the audio
listener and um the audio is mixed into
these buffers at a position that is uh
appropriate to the object position in
the world changes in the position are
applied to the delay buffer by
interpolating the audio
data but that's not all we're doing here
now I know there was a bar citizen
yesterday so some of you may not be
thinking as fast as you might normally
but you may have realized that by
buffering the data in this way we're not
just creating a uh speed of sound we are
not just creating a doler effect we are
indeed and I just spoil with my own line
creating a speed of sound
effect so introducing systemic speed of
sound to the game I now have uh a couple
of minutes of video and we go through
Rapid Fire looking at some fantastic
examples of what this brings to the game
starting with a spaceship pass by that
is supported tonally by the uh systemic
speed of
sound okay sounds cool what about weapon
fire so let's bring in a sniper and
unfortunately for the uh sensitive of
heart AO um we're going to hear this
first from the perspective of for both
with no speed of sound
effect okay so that's if you at the Pico
perspective there that's how you'd hear
it in game right now let's hear it with
speed of sound enabled and this time
we're just going to listen from Pico's
perspective so Pico's down before he
even hears the shot but don't worry he's
not
dead okay let's finish him off
now he's
dead and uh as the voice of Pips power
up uh I need to get some proper equ in
so there's one more example for
you now finally oh not finally we have
ship weapons so listen to the fire rate
as the ship approaches the camera here
giving you a bit bit of a sense of
threat
it's not too easy to tell what's going
on there but you get an increase in fire
rate finally the really cool stuff
explosions so we can put a cinematic
element a uh Shockwave element and a
delayed speed of sound
effect and that's way too cool to do
just once so we're going to do it twice
more from further
distance so again cinematic effect first
when you see
it Shark
Wave and the explosion
itself this is all completely driven by
parameters in the game so we can do this
for
real whenever you drop a MOAB one more
[Applause]
that's pretty
cool so the speed of sound simulation
gives you a better sense of distance it
improves the sense of speed and it
supports those amazing cinematic
moments so in summary we're trying to
make the game more immersive and respond
to all this Genesis data and make it
feel more real and that's not all we can
do we can make sounds respond
differently to changes in atmospheric
pressure and resultant changes in
temperature so for example the sound
will travel faster in extremely hot high
pressure environments we really look
forward to getting this in game for you
and getting you enjoying it at
home now that's all from uh phase four
of the Genesis cycle light and sound so
I'm going to hand you back to the
amazing Ben and Ally to bring us home
with the Final
Phase thank you
sir so as grahe says this is going to be
the final phase of Genesis and it's
called Nature's W and and this is where
we're going to bring the very Planet
itself to life so first off let's start
talking clouds so clouds have got an
atmosphere have got to be one of my
favorite visual features of our game
they're truly awesome but they're also
completely static nothing has changed
with them so what we want to bring with
Genesis is the evolution of clouds over
time this isn't just some simple
scrolling animation we use the same
physical data sets that drive the biomes
we talked about earlier and St architect
and these are also now driving a
physical simulation of the clouds so
they can form and dissipate in realistic
conditions so this means things like the
oceans the prevailing winds mountain
ranges and the temperature will all
impact the
clouds but to complement these more
Dynamic clouds we've also improved our
lighting model so it now correctly
accounts for how light scatters multiple
times inside a cloud and this is
important creates much deeper lighting
and it can contrast against the sun's
Rays resulting in much more Vivid Cloud
Scapes like we see on the left here
something we're all too familiar with in
Manchester now it would be awesome to
bring this into context and show it on
an actual Locas let's take a look at a
quick scene to round this
up it's a nice day on the surface but
something's different the clouds are
moving but they're not just moving
they're forming naturally in changing
shape they dissipate as they glide on
the atmosphere based on wind data
Stratus and cumulus
alike now we start seeing the new Cloud
shading Model come into play we are
seeing enhanced occlusion beneath the
cover emphasizing the sunbeams how it
interact with the clouds and seeing the
light shafts peer through the
layers now as this is closing in we can
start to see the changes in visibility
of the
area light precipitation is starting
previously we authored static Cloud
shapes but no longer we didn't Manu
place a volume here its presence has
been informed by Genesis data oh and
it's not just a cloud
volume it's a weather
[Applause]
front now we're trying to see the wind
picking up terrain and rocks are getting
wet vegetation grass and the overall
environment are responding to the
weather the system is changing the world
around us we can see puddles being
formed dynamically in the dirt properly
responding to light Reflections and Rain
droplets making it getting it's getting
really ominous and loud in here I can
feel the danger I think we should let
this play out in the
[Applause]
game here what those F on this location
conditions are deteriorating the severe
we need to leave now get back here
I'm getting out of this suit now
powering up and flying out we'll need to
switch to IFR see you on the other side
oh
[Music]
sh
mon
[Music]
it's getting very Sparky up here
recommend deviation
Lo
wow
wow man that's what we call the Falon
maneuver to get out of there Ali please
break this down for us what did we just
see yeah so that was a combination of
lots of tech we just saw that all
combined together to make a really great
cohesive experience so we started with
the cloud simulation which wasn't really
a cloud simulation it's a weather
simulation the rain will appear not at
random but it's based on physically
plausible conditions so you have real
WEA evolving across your planet all the
time we have a host of visual effects
like the rain and then the have the
atmospheric scattering that you get
under the columns of rain we had the
puddles and the splashes and all of this
type of visual effects we saw the wind
developing over time and that introduced
turbulence to the flight model making
flight very challenging and then of
course we saw the lightning which plays
havoc with your instrumentation but of
direct strikes will damage your ship and
of course dur some storms will be
dangerous enough to be fatal as Ben's
unlucky Aurora just found out
and these storms will sometimes be
shortlived and localized but others will
be larger and potentially permanent on
some planets and this is going to
restrict access via flight I mean
players will be forced to resort to
ground vehicles or even foot and this is
all going to be dynamic meaning that you
might find yourself trapped in some
really unexpected situations so we
really can't wait to use all these
mechanics to open up many new gameplay
opportunities for all in the earth soon
a wise Yogi once said it's your job as a
pilot to compensate and stay on
course all right what have we learned
today guys we've shown you an approach
to of encoding The Rules of Nature into
planetary data we've seen biomes emerge
from geology temperature humidity
climate weather the physical terrain we
create denser more diverse living
planets without artists hand placing or
man manually creating biomes instead
leveraging asset mapping we've shown you
a new way to make the game that can
scale to create thousands of Coran plan
places for civilizations on planets that
can be used for Missions or immersion
gameplay without Art and Design hand
placing locations leveraging World
design rules instead we've seen how
populations of AI and NPCs inhabiting
locations dynamically adapt their
understanding of the environment
without custom markup by developers
allowing the creation of more playable
spaces rapidly we've shown you how light
and sound also benefit from Genesis data
to influence planetary environments and
we shown how these system these systems
come together when weather comes into an
area changing your gameplay experience
significantly our goal with Genesis and
all of its system is to create more
worlds better worlds Faster by applying
our Tech wizard and craftsmanship to
build systems that respond to data
that's our star engine presentation for
today guys for this year have a great
citizen con we'll see you on next one

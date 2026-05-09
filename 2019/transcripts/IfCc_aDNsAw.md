# Star Citizen: CitizenCon 2949 - Terra Firmer

**Video:** https://www.youtube.com/watch?v=IfCc_aDNsAw
**Date:** 2019-12-13
**Duration:** 44:07

## Transcript

everyone my name is Marco corbata
senior technical director my name is
Misha Colburn lead environment artists
on the organics team and I'm Allie Brown
director of graphics engineering we're
going to talk about the evolution of
planet tech today initially our goal was
to achieve a seamless transition between
space and planets so fly to a distant
planet land on e and explore its entire
surface with no loading screens so
looking up the planets in the sky and
fly up to them it's cool but what are
the planets supposed to look like and
how can we create them so initially I
just started doing some test mixing
procedural terrain with buildings here
is another early picture show in
procedural a terrain with no mountains
why we were getting so some very
interesting results during our early
test a key factor in star citizen is
that we have a specific universe with
pretty deep laws so we cannot just
generate you know random planets we
needed artist input to match the
reference and low so we had multiple
layers of noise some generic elevation
maps shading and colors were based on
procedural rules elevation and slope we
had an initial editor integration we
real-time editing of basic planning
properties and atmosphere so after a lot
of hard work we got our first version v1
working here you can see our first man
on the planet
here is the first spaceship on the
planet successful landing so after we
won we introduced procedural and
artistic improvement
during v2 we introduced the concept of
ecosystem so the ecosystems a
combination of terrain maps with vision
objects and gameplay properties each
ecosystem had a three channels code of
textures use for blending texture layers
and we use the same channels for object
scattering as well using ecosystems we
can make each planet unique matching the
law but still generating planet size
content for players to explore so we to
ship with Alpha 3.0
we had the new moons and landing zones
we had seamless transitions deters
visible from space all the way down to
the surface
we basically rewrote the entire 3d
engine terrain system to work at scale
and on a spherical planet
alpha 3.0 was multiplayer ready you
could already explore planets online
with your friends you go to fly
formations and planetside battles the
planet generation is synchronized
between client and server the physics
collision mesh is generated on demand we
will talk a bit more about this later
this picture is showing the sense of
scale we achieved with alpha 3.0 as you
can see here resuming him from a solar
system down to a planet through phase
you just plant a demon planet view from
space while zooming in with the seen
high-level formations and ecosystems
getting closer
objects are starting to appear next it
is the space the Granta space transition
for yella
a showing additional elements like icy
surface from space next slide please
okay and this the other way around
zooming down from ground to space
okay we version three we decided to
introduce more artistic control here we
can see the artistic improvements made
to yellow in version 3 version 3 shipped
with alpha 3 3 5 we are the new moons
and new planets including a city planet
cover with buildings we introduced rear
day/night cycles so planets are actually
rotating in real time we made a large
amount of tools improvements and built a
new vegetation system in v3 we increase
from 3 channels to 16 channels using
alpha values to encode the material IDs
but when it is 16 text layers for each
pixel would be way too expensive so we
found a very fast solution by blending
only the closest surface using temporal
differing so here we have several layers
combined which with each other but
without smooth blending and here we're
blending 60 layers at once using
temporal difference so it's basically at
the cost of blending only one day so
what would be the next steps of the
version free we had the design for
something quicker to generate with less
direct artistic control like we had
previously in v2 but still being able to
influence terrain shape and colors like
in v3 we wanted more ecosystem to get
more details improve blending and
transitions Bastien we need to take into
account special planets like our coal so
enter planets before our final version
we decided to go for a more physically
based approach we wanted to improve on
ecosystems blending and transitions and
now I'm handing over to Mission to give
us an overview of before Thank You Marco
I hope this clicker holds up because it
seems to be some interference so like I
said I'm the lead artist on the organics
team
our team works with the planet tech tool
day-in day-out all the planets you've
seen so far have been created by the
team in de so we had some thoughts and
demands when whenever we talk about
tools and what we want to improve so
wifey for let's go over some of this
stuff so wifey for up until now for a
long time our focus has been on moon
landscapes and although these are
visually distinct from each other
they're essentially a single biome
planetoid the one is desert one is icy
one is a lunar landscape but biggest
differences is actually like the type of
SS that you see the shapes in the
terrain last year when the team started
to work on Hurston we were actually
confronted with our biggest challenge
yet hjerson is a very diverse planet in
terms of what we've done so far so we
have dry wastelands we had our mining
pits
we have trash yards we have hot acidic
areas and even very lush green areas so
there's on a single planet we had to
cover a lot of variety and this clearly
proved a challenge based on on this
experience working on on Hurston we we
started to think about okay what can we
do to improve or where are our
bottlenecks and how can we proceed so we
wanted to make sure we future-proof the
technology because up until now it's
been Stanton but there's this we want to
go somewhere right we want to go to
other locations and the only way to do
it is to work faster and more efficient
so v4 is a fundamental change in how
fast we can build planets keeping what
worked well we work in the things that
slowed us down and building a tool
that's in engine and is a very intuitive
artist friendly tool to use and we'll
show some examples of that coming up
yes all right cool it seems to work so
here's an example of some of the stuff
that we wanted to achieve or at least
wanted to do but we felt we couldn't
really do so you see here a Google image
of the Africa
continent and what you can clearly see
is on a large scale the transition from
a desert landscape to a savanna
to a thick jungle and if I don't know if
any of you ever liked the joint like
enjoy to look around on Google Earth I
personally like to do that a lot
reference gathering etc and I always
enjoy seeing these these beautiful
transitions and they seem quite like
strong but if you go up close you can
actually tell that these transitions are
like incredibly complex so there's all
these features in the terrain that
inform why these transitions happen in
this case where the vegetation gets more
lush you see that the mountain escapes
starts to block the drier desert winds
the water paths are the first areas
where trees start to grow and when you
zoom into these areas you can actually
see how the terrain and how the terrain
features actually start to inform these
transitions another example I'm just
have a few examples to go through
another one where the terrain creates
these beautiful patterns of transitions
in between different biome types and
lastly there we go
European Alps where the transition in
height actually causes a transition from
like a regular green area to like the
snowy mountains and these transitions
happen over incredibly large area so
let's have a look and go back at Hearst
to Hurston and I have a bit of a chat
about the challenges we had so we were
not really unhappy with the results that
we were getting especially up close I
think that was pretty good
especially considering the scale of our
game but we needed a wider range of
biomes and we could only imagine like if
you think about Terra Prime or anything
that's that's very complex that we still
want to do we needed a system that
worked smarter and better so it became
clear that our tiled approach was making
it really hard to to scale and create
convincing transitions
now next slide alright so this is a very
unflattering look of hjerson I turned
off the atmosphere and some of the
effects that usually go on top of this
but what we usually do or attend did
before was paint a global texture it
sort of represents the different areas
on a planet so what we have here is on
the pole it's a bit d saturated but
that's where the Savannah area means the
wasteland
then although it's it's not super crisp
it kind of gets the point across
especially with the effects layered on
top of it when you start flying close to
the surface especially with all the
effects turned off you start to see
where the global texture starts to fill
and you get this blurry look the
textures that are loaded locally for
each patch of terrain or each tile is
not fully loaded in and you hit this
dead zone in between where it just looks
a bit blurry but muddy and it's not
really getting us the results that we
saw on Google Earth and then when you
get even closer you start the CD
individual patches coming in the texture
of the biome becomes visible and
although up close this this is a cool
result especially when you're walking
around it these transitions yeah they
can be quite hard so what you see here
is a few wasteland tiles met like
meeting savanna tiles and the artist and
the art team had a really hard time just
trying to alleviate these areas to get
them as good as possible by creating
additional tiles to sort of fit in
between and it became quite complex to
set up and maintain especially with more
biomes and a more variety coming in and
the drawback from the collar map up
close is also that it didn't quite have
the resolution that we wanted to so more
complex men planets meant more
individual files to maintain all of
these collective assets informed the
final look so if you wanted to change a
color on the planet you had to go
through all these individual files and
it's abused the later so we had all
these terrain files these terrain steps
they had color information as well
so if you wanted the red on the planet
to be a bit less red we had to tweak all
of those individual files could mentor
back over 20 or even more the overall
look and final look at the planet was
easily made up of 500 files that we all
needed to maintain keep track of and
made sure that they were all in sync so
this you can imagine that this makes
addressing feedback changes whenever I'm
talking with Ian about art direction
stuff it becomes quite tedious to get
all that stuff polished up and very
time-consuming so we had a to do a
fundamental rethinking of how we want to
approach planets and the first thing
that we wanted to do was separate the
process or the idea of a biome
temperature and when its lush or or dry
from the actual terrain shape and by
this we could keep our terrain library
clean and we don't have to create
additional color maps for every time we
want to have a different color or a
different type of terrain showing up so
that way you can get large changes on a
global scale this is not Google Earth
anymore this is v4 and what we see here
are natural transitions that globally
occur globally due to gradual change in
temperature humidity and weather
conditions and because these are
occurring over a large scale informed
locally by the shape of the terrain
every area where it transitions or where
a biome appears is informed by the shape
of the terrain and it's truly unique to
that area and we're no longer seeing a
patch of Dempster savanna trees and then
next to it is the wasteland you sort of
see that stuff repeat it's a large-scale
transition and everything flows into
each other so we're no longer fixing a
biome to a specific tile and that way
across the server's over the over the
entire globe every area truly becomes
unique and this is a example of how
extreme it could go with colorings just
as an example of some of the stuff you
might see in the future
just to reiterate this this another
thing that we wanted to change actually
it's the blending cross fading
[Music]
transitioning between areas and on the
one hand on the left side we see v3
zooming out on the other side we see fee
for and Burma free for is not this one
is not entirely done we would like to
paint a bit more but we had to come up
with an example and what you see here is
a seamless zoom out with no visual
artifacts with things changing or or
fading or popping whereas in v3 we still
had a lot of transitions between all
these layers of textures going on and
you can even see it at some point
the v3 planner if you zoom out far
enough this is a global texture kicks in
it's the only one that that remains and
it might actually have a completely
different color from where you actually
start it and I'm pretty sure people have
not like experiences as well you see a
spot on the planet you want to go there
because it looks cool you go there and
it's actually a very different color
experience that you expected whereas at
the v4 you can actually still make out
the pattern the exact terrain shape that
we started with and I think this is a
like a big big difference okay let's
move on
so those were the things that we really
wanted to improve and yeah this one is
another one that is especially important
for the team
like I said managing and keeping track
of 500 different files doing color
tweaks and less stuff it's become quite
tedious especially with complex planets
so a very clean file structure with
library items feeding into one file that
is edited authored and and maintained
inside the editor in a very artist
friendly tool so proof in the pudding
Chris already spoiled it
v4 meant that all all the planets that
we've done in the last I guess two and a
half years since we started shipping
planets had to be updated to fee for
which was a bit of a you can nervous
from it right that's a lot of work that
we put into that and it was the true
test of how efficient this new planet
tech would be and how efficient this
tool would be so I'm happy to confirm
that the team is updated every single
planet for 3.8 to v4 and it will be
there
so just to get a bit of a start into the
more technical areas I just want to
share a little bit what we do on the art
creation side that feeds into what v4
does now already for the earlier version
in v3 we use these little simulation
tools that one of our in-house artist
Sebastian Schroeder who had a big part
in the planet tech v4 he couldn't make
it but essential input he made all these
cool simulation tools that help us with
terrain simulation we see erosion which
is one a very common simulation that we
that you would do with building terrain
water flow simulation we see
displacement of sand and soil based on
wind input and we see terracing so these
are just a few examples of the small
little tools that we use in-house and
see it helps up until now these tools
stay we use them just as like a personal
thing like you would have a brush in
inside your your toolbox you just use it
and then you have an end result an
output that comes from it and then we
feed that into the engine so we were
able to get like if you're at the right
distance you get these beautiful terrain
colors and terrain maps so we're not
unhappy with that but every time we
wanted to change something or I wanted
to make a different combination of
colors of vegetation you would have to
redo it or make it new one so instead of
that making final outputs and specific
masks we decided to get those tools and
simulate stuff and use the simulated
data and feed that directly into the
engine so this was the old one we had
masks we had color maps specific
patterns where where certain assets
would show up and we started to rethink
about rethink this and okay how can we
simplify this and make this easier for
everything else to use so we decided to
go for humidity and temperature it's
there's the hundreds variations of
things that you can think of that they
will cause transitions of areas and
biomes but I think ten
sure whether it's something is hot or
cold whether it's dry or very humid or I
think those are the two most important
things and if you look at some of the
references that we looked at even up
close the transitions are always
happening because it gets colder because
there is water in the area and even in
desert areas where there's no water
those flow lines they still are visible
because if there is water it will
trickle down into into those pathways
stuff will sort of follow and get left
behind in those areas so I think with
those two maps we can capture a lot of
interesting details so this is the new
set height normals just due to shading
necessities flow maps and temperature so
you can see in this one point where the
flow maps where the water would flow
where water would accumulate in the
valleys and on the height it's a
relative simple one I think high the
temperature is more important on a
global scale but you see the differences
in temperature if you go all the way up
the hill or mountain to make sure that
every terrain set every height map
represents the exact same values with
those with those flow maps and
temperature maps we have to unify all of
our library height maps basically our
whole library of height maps and we made
them all exactly 4 by 4 kilometers with
a maximum height of 1 kilometre up and
in a maximum of one kilometer down and
the reason for doing this is that if we
run these simulations on each height map
the data that comes out of that
represents the exact same value for each
height map and this way in the engine we
can actually blend these perfectly
together and create this seamless canvas
of data that that we can paint on and
with that I'm gonna hand it over to my
colleague Allie who will go into how
that actually is handled inside the
engine
thanks a lot Michelle
right so yeah but talk about how we make
use of this climate data first want to
step take a step back and talk about the
different approaches to how you can
build a planet so I've got a line here
showing all the various scales we need
to accomplish and a typical
first-person-shooter
annual average small game I would
typically made of maybe two layers of
textures so you would have like your
your small ground textures and might be
representing millimeter accuracy details
and that what type of take you up to a
meter or a couple of meters and then
they'll have a next layer of texture
which would be their terrain and you
typically offer that something like a
one meter resolution and then that would
cover your entire play space so say a
kilometer for a small game and that
would typically account for about five
megabytes of memory depending on the
tech here using which is awfully nice
and cheap in this generation but moving
on to something a bit larger a large
open world game will typically stretch
ten kilometers by ten kilometers or that
type of scale so 100 kilometers squared
over something like this you're looking
for 100 megabytes if you use the same
per pod so that's still quite sensible
amount of memory something you can
easily achieve on a cone gen console and
definitely on a PC that's fine that's
not what we're doing though so what do
we take the same approach and push it up
to star system scale about five hundred
terabytes for a planet so unless
everyone's got some nice meaty SSDs you
might be struggling there so clearly
that's not the way that anyone builds a
planet so what about a marker talked
about procedural planets like v1 was
almost a fully procedural approach had
limited our input so if you build a
fully procedural planet generation what
do you tend to do is feed it of some
very high-level data it could be as
simple as just the distance from the Sun
and the size the composition of the of
that request or it could be more
detailed like a map of the continents
things like this and then what you
typically have is lots of layers of
complex noise and algorithms that would
procedurally determine all the details
you would actually get on the planet so
it'd all be driven by algorithms
basically there were
no artist has ever hand-painted a
mountain it would just come from the
system which sounds amazing photos sure
here's a very limited quick example to
happen to show what type of a small
twins am and how you start off something
lumpy and then it turns into something
bit again so that's a very small scale
example so this sounds good so if that
type of approach you can generate
infinite planets which is good yeah we
get the whole solar system or whole
universe filled but actually it's not as
good as it seems you the variety you get
is actually just limited by the
complexity of the algorithm so I could
write an algorithm to say where rivers
should spawn and how they should flow
and you might get a million different
rivers B will never see a waterfall and
not until I go and then adjust the
algorithm at a waterfall so you end up
adding more and more layers of
complexity which is fine but at some
point especially with a game like ours
and you're trying to simulate hundreds
of different planets that are very
unique you know we don't want 100 earths
or 100 you know lunar moons we want lava
planets we want you know all these
radically different planets so this
approach doesn't really work for us
and what we actually want is something
that's very art directed you know art
director Ian will tell us you know shows
exactly what he wants like a cliff to
look like it might be the slope of it
the shape of it the colors and we have
to match that as their as the tech team
so doing something fully proceed well
doesn't really allow us to do that and
it becomes a very technical non artistic
process which is quite limiting so what
a start isn't do well up till v3 we we
combined four layers of textures so
typically would use the first few layers
you would get in a normal first person
game but then we had this two extra
layers of textures that we were
stretches all the way up to the global
type of scale and we blended all these
together in the shader and it cost us
about 300 Meg's of memory which is
something that you know most GPUs can
easily handle so that that's fine but
like Michelle alluded to it can be
difficult to manage all these different
layers and to blend them to try and
achieve the art direction at the ground
level but then still to have a
a seamless transition to space and there
was always these hard decisions we had
to make where if we won the too much
color version on the surface then on the
from space we maybe couldn't achieve it
or there was this constant balancing out
so we need to do something here
so the fundamental approach for v4 is to
make use of climate data so we keep
everything we had but rather than like
Michelle said painting at all color maps
we now paint this climate data or
simulate the climate data and on top of
that we apply a global rule set for each
planet that says based on that climate
what would this planet do so this can
tell you FM form what the color of the
ground would be whether it's sand or
snow whether you might get a tree placed
there or walk it informs us everything
about the entire surface and by using
type of this top-down and bottom-up
approach at the same time we type of
overcome all of the limitations that we
have previously here's a 2d chart of
temperature versus humidity Michelle
mentioned we use these two these two
properties because they seem the most
relevant for most variations on a
planet's surface but we're quite loose
with the term they artists have a bit of
flexibility what they put into them and
obviously some planets or moons
especially maybe humidity isn't relevant
for them we can we could vertically just
use any other single measuring one for
climate there but the point is we've got
two axes two things we can control so
what we do is then for each individual
point on this 2d graph we get two we get
to pick exactly what we want to appear
so down here we might have like you know
obviously snow textures where we have
different types of trees appearing in
the temperate rainforest we get to
control the exact appearance at every
single location within this chart and we
have a hundred and twenty eight
graduations of temperature and humidity
which leaves us with 16,000 very
variations we have to fill of today what
would appear on the planet at that
specific condition which is quite a lot
filled with so here's a quick demo
showing a how a small terrain pass just
by adjusting the climate data we can
very quickly adjust the visuals
and you can see that we always get like
logical shapes and colors coming in so
yeah the problem with this now generates
as a new problem we've got 16000 sets of
conditions we need to set up somehow so
for the artists that were presented
quite a challenge our first approach was
for them to have like they would
manually create these rules where I want
this tree to appear at this temperature
range and at this altitude and it was it
was too unwieldy so instead we moved to
a system where we literally paint the
surface of the planet using like a
paintbrush
so this is a quick demo of this being
used here and because we don't wanna
paint the entire surface of the planet
when you paint on the surface you're
actually painting what you would like to
appear at them climate conditions so if
you paint somewhere there's a 20 degree
C and the humidity is 50% you're
actually painting every single point on
the planet that has exactly those
climate conditions so by doing it this
way we can very quickly build up very
interesting biomes and while it looks
like you're just painting the small
layer of land in front of you your
painting huge areas of the planet at
once and this was something that was
immediately appealing to the artists
because this is a very familiar workflow
for anonymous worked on a game engine
before like a smaller scale one but yeah
it scales up for us so here we've just
painted a few trees and bushes an
instant you can see the whole areas now
being I think everybody did a little
happy dance when that dent moment came
in the paint okay
so when we when they paint all this data
it goes into what we call a lookup table
which is just that 2d chart and we
generate a whole bunch of different ones
so here's a couple of them or three of
them so we have the ground color the
type of surface or wood maybe so snow
work that informs the physics engine of
what to do there and what textures we
should place but then we also have
things like tree coverage - how much how
much trees would spawn there so that
when we at space level we can still draw
the forests and - all the vegetation
where typically most games would have to
call that stuff out they just couldn't
afford to deal with it we can understand
what the you know say if we're looking
at the Amazon rainforest we can
understand what the color should be
because we don't really want the ground
color from space like there might be
brown in the rain forest but we want the
green of the lush trees above it so we
can generate all this data and we can
use any altitude and it gives us a lot
of power and also this rich information
we can use for various other gameplay
effects which you'll see a bit more
later today we saw a sneak peak of on a
first demo of how temperature can drive
things but there's a lot to come with
the these planet climate conditions so
here's here's a visualization of the
climate on cell in the red and green are
just visualizations of the temperature
and humidity and one of the look-up
tables are shown there which shows
everything us the ground color so once
we apply that to the surface it starts
to look a lot more reasonable and then
same for Microtech we've got all the
climate conditions there it's mostly
much snow and Microtech no surprise but
yeah and then to build it up from the
surface to see the other side of it so
this is purely just the terrain plus the
global lookup table so it looks pretty
boring at the moment once we apply some
temperature variations there's a little
bit more interest
the humidity variations gives us quite a
lot and then on top of that we have a
medium scale type of terrain textures
which are driven from the climate and
the slope and then finally we add the
the detailed textures now our climate
data is only stored at four meter
resolution so that doesn't give us
individual stones and walks we have to
add a layer detailed ground texture
but we need them textures to look
consistent with what the climate data
tells us so if the climate table tells
us we should be having yellow sand here
then we may need to make sure we have
yellow sand now we can't make a texture
for every single scenario so the
solution for that is we normalize all of
our ground textures so that they will
have an average of mid gray color which
you can see in top left and then we have
an average amount of bumpiness which is
the the middle one and right hand side
shows the roughness so they're all type
of normalized so you have this equal
amount of stuff whatever it is they're
storing in that texture and then when we
come to apply it to the surface we type
of use a physically based algorithm to
rescale them to achieve what the lookup
table told is it wanted or what the
artist wanted but we preserve all the
details there in the original texture so
in the color map that might be slight
hue variations and in the roughness map
there might be like you know pebbles and
stones and sand of different densities
and roughness so this allows us to keep
all of that detail but make sure it's
consistent and that consistency is
really important for us we actually
apply the same concept that's Michelle
mentioned at the four kilometer scale so
here's a very basic example of a bunch
of different terrain tiles next to each
other and after there's a very hard join
between them but because we've made the
climate data normalized and in the same
range when we try to combine them
together we get a nice seamless
transition and then we apply the climate
data will sit on top of that then it
feels completely natural and even in
this very primitive example it's very
hard to see the transitions and we get a
very natural and logical progression
from the terrain which is really nice
there is one slight flaw of the
technique which is a saying this little
highlight box I've got in the bottom
right if I want to have a mountain range
that's going to cover multiple biomes
multiple climate conditions if i zoom
out to space I don't want to just get
the average color of that region I want
to make sure to see all details that
would have been in there so in this I've
got a combination of shrub land and snow
and polar desert so depending on how
varied that terrain was I should be
seeing a mixture of them colors but just
using the average color which is what
you tend to get and the engine if you
without any extra tech you just get the
color
that polar region in the middle polar
desert so to solve this we came up with
cystic Allah model which we call
variants Maps which is shown on the
right hand side here which is where we
store the variation for inside a texture
so the left hand side it shows us the
humidity of a particular patch of
terrain and the right hand side is
showing us the brighter areas is where
the the climate is varying highly in
that area and then as we increase in
altitude the hardware the GPU hardware
naturally uses lower resolution textures
and to cover the small scale so then the
variation map then increases in
brightness to cover the amount of
variation that is within one pixel now
so as we go now it's a 32 by 32 texture
you can see that it's much brighter now
and it's still the areas that are white
now are the areas that had a lot of
variation previously and when it comes
down to actually applying the climate
will set rather than just applying the
rule for the particular location of the
particular climate data we have now we
actually use these variation maps to sum
up an area of the climate data which we
use the GPUs and a topic filtering for
that and that allows us to sample all of
the details that would have been within
one pixel and make sure it's faithful to
the original image the when you get down
to the surface and you may have like you
know 50 percent snow 50 percent grass
when you zoom out you will get the exact
blend you would expect on approximation
of the blend of snow and grass so yeah
that that really helps us make sure we
hit that consistent view from space and
my softness and it always the need to
have a blend to some other texture when
you're far away so that's that's the
real key thing we get from v4 in my eyes
so I'm gonna hand that to Marko now to
talk about how we put all this together
and how we turn this into a planet okay
cool Thank You Ari
okay cool let's have a quick look at the
planet generation so we are starting
from a cube it's cube face is projected
onto a sphere the inter planar surface
is generated and render at different
levels of details and the amount of
details increases as you get closer to
the surface here you can see a debug
screenshot showing the surface level
humidity as we discussed before in
before we are blending or nearby
ecosystems for altering vertices using a
bicubic interpolation approximation here
is the same view I was showing
temperature climate data so here is
another improvement as we mentioned that
we made in v4 is that object scattering
is driven by the same climate data that
we are using for terrain generation here
you can see the object presets IDs
driving object spawning on-demand this
is the same view while showing the
colors driven by climate data and
textures and here you can see the y
frame mesh geometry generated from
elevation data
the terrain geometry blending is done on
CPU this is the same view as before
we're showing the planetarium without
any objects yet and this is the final
view with objects generated on terrain
so we have a separation between
large-scale and ecosystems which are the
larger rocks trees and so on and then we
have the so-called ground cover objects
which are the smaller objects that are
generated at ground level only
additionally we have improved the
cliffside generation and yeah the
objects are placed based on climate data
and object preset settings and we are
using LOD clusters for large-scale
forest rendering which you will see
Microtech a ground level we have
additional parallax and ground texture
details so physics
collision geometry is generated
on-demand on client and servers when
players and spaceships are interacting
with the physics screen here in light
grey you can see the physics proxies are
generated for terrain rocks and objects
so generating on-demand physics
on-demand is tricky because the
spaceships are actually moving at crazy
speeds across the surface and obviously
we cannot store the entire planet
geometry in memories otherwise would be
terabytes of data so each terrain patch
is built in parallel on CPU the workload
is distributed by the job system to all
available course and basically the
server is building a physicalism mesh
for each client so we have many other
features on the planets for instance
Caves here isn't here you can see an
example of a cave assembled by the
procedure layout to after generation the
caves are turned into object containers
and they're placed on the planet surface
so using object containers we can take
advantage of object container streaming
in future and here you can see an
example of a cave with an exclusion
volumes which is used to avoid
generating rocks on top of the cave
entrance here is another example of
exclusion volumes you can see how the
trees are avoiding generating inside the
volumes additionally we have space
stations orbiting around planets all the
space station interiors are generated by
the procedure layout tool as well and
then are placed as object containers in
space yeah another new feature we added
in v4 is the frozen ocean which can be
seen here on Microtech the frozen ocean
is physicalized and players can walk
drive vehicles on it in these pictures
we're showing the frozen ocean collision
mesh generated on demand
so regarding mining the way it works is
with some of the procedural objects are
tuned into my novel entities and the
player can interact with them when
extracting minerals and with persistence
becoming online players are able to
deplete planet resources affecting the
universe economy so let's show some of
the rework which is coming with three
point eight I'm just gonna let this run
a little bit obviously we wanted to at
least close close this talk with showing
you guys the current state of all the
rework the team is like I said the team
has been working hard and is still
working at it we want to make sure that
we deliver the best possible planet
experience for a three point eight
coming up but we're already seeing a lot
of the features that came in would be
for making it everything every location
and we've known like it were built up so
up until now looking way better and if
there's there's a lot of subtle
differences that might not be apparent
in at first glance but we just wanted to
reassure you guys all the planets are
updated and they will be coming so I
guess we could already start thanking
everybody who's been involved with this
because it's been to summarize it's been
like a full year working on this with
some very high-level people and a lot of
people involved with this so this was
not a an easy easy undertaking it was a
team of four so thanks for all the
people on the organics team thanks to
Marco Ali
Sebastian Strider other people on the
graphics and engineer
and we hope you have a great time with
the new planets yeah I hope you guys
have enjoyed this presentation thank you
for listening and enjoy the rest of the
show thank you
thank you

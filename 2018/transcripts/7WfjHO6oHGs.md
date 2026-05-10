# CitizenCon 2948 - Panel: Crafting Space

**Video:** https://www.youtube.com/watch?v=7WfjHO6oHGs
**Date:** 2018-10-25
**Duration:** 41:07

## Transcript

we have alley Brown Mike Snowden been
carrying and McAfee attack everyone so
today we're gonna be talking about space
but before we do and then kick things
off with a quick trailer to show you
what's to come
[Music]
so I'm Ally brown director of graphics
engineering I'm responsible for all of
the graphics programs on the company and
all the visual technology we've got Ben
Perry senior graphics programmer who
does all the cool stuff that I wish I
had time to do Mike Snowden our director
of grad V FX so
and Michael McKay also the senior VFX
iist so today we're gonna talk about how
we go about developing the technology
and workflows to create the the space
environments and we've been working on
this for quite a while and we wanted to
improve our space so as you all know
it's a space game space in reality it
can be pretty boring that's an actual
massive photo of Earth with not a lot
between us on the moon so that's real
and all but that's not what we own in
our game clearly or not all the time so
here's our nebula actual photo from NASA
but you know this looks awesome
it looks great it's the type of thing
you might expect in a sci-fi film or
game but this isn't real this is being
brightened significantly from the NASA
photo and they've also used false colors
where red green and blue used to
represent different elements it doesn't
look like this for the naked eye it's
also 24 24 light-years across
and a billion times less dense than a
laboratory vacuum chamber so actually if
you were in this it would be impossible
to you and it just really wouldn't be
that fun to fly around but nonetheless
we still have this perception we want
something like this we want some visual
to fly around in space so that's what we
wanted to explore as part of this R&D
process so here's some very early
prototypes of a type of gas clouds
vaguely similar to that nebula and our
talented art team tried a bunch of
different type of looks and styles of
what type of shapes we could have in
space I've let these play out for a
little boy so these were developed in
prior to type of I saw some a type of
volumetric rendering technology called a
fume effects and Houdini and these using
our gas cloud rendering system which
we've been developing for some time and
then I'll talk about a bit later on and
they look great they were ly interesting
but again they have this type of
fundamental problem where of scale where
if you look at this you might imagine
that maybe a hundred miles or thousand
miles
simple about wide and if it's type of
that type of scale the scale of a moon
or a planet if you're flying through it
and then it's really not gonna be
anything there it's gonna be like just
in the middle of a cloud when you're in
a play and there's just nothing really
interesting to explore at the type of
conventional spaceship speed so to
demonstrate that here's a a cutie in a
into a gas cloud this gas cloud is about
300 kilometers wide and while the Qt it
looks great once you stop there's
nothing really moving other than these
nearby asteroids so again in type of
it's a good backdrop it's interesting
but it's it's not giving us that a
gameplay we quite wanted so we planned
the type of overcome this problem in two
different ways first is planetary wings
list which is similar to this which is
sans rings so these are huge obviously
however they're extremely thin in
reality so sans wings were only about 10
meters high on average or the widest
point it's a couple of kilometers so
that's nice that's top of the scale a
spaceship can fly around pods between
asteroids like it expect in a film yeah
they stretch for you know hundreds of
thousands of miles so Saturn is 120
thousand kilometers wide and obviously
the wings extend much further than that
so that's type of an interesting play
space for us and after we have some
simple afterword wings in the game
moment well that's some that we
definitely want to expand on and because
they're effectively 2d they're
relatively simple to offer and they just
they give us a very easy mechanism of
getting a good interesting play space
however that's not something we're going
to focus on for the moment oh one more
thing
yeah so this is an artistic concept
image for the type of thing that we
might do for planet oohing just to add a
little bit more interest so obviously it
looks pretty cool and you can imagine
flying through this who needs a little
so yeah this is something we're really
interested to develop but we're gonna be
looking at this next year this year what
we wanted to look at is something a bit
more volumetric
so
one of the problems with this is
although it looks great and it'll be fun
to traverse it's because of its
effectively 2d you could just fly
anywhere straight away there's nothing
that's hidden there's no type of journey
within this once you're in the asteroid
once you're outside of it you can just
fly 20 point and then just dive in so it
gives us something but the designers
were asking for something something more
something where you could have like a
journey like you know a 20-minute
adventure into some type of structure so
we started looking at more of a
volumetric approach and what we wanted
to do was build networks of tunnels and
chambers that contained in within a gas
cloud so like we had earlier we saw them
evident pretty nebulae looking things we
wanted to have something that look like
that from the outside so that but inside
we got something more like this some of
those like clouds and we can dodge
between things or like conventional
speeds so over about the last two or
three months we've had the graphics team
VFX team and our team all coordinated
together to make a prototype which is
going to showcase how we want to make
future space environments so I showed
you a brief clip at the start at the end
of the presentation will show you the
full prototype but first of all type of
break down the technology and the
workflows that go into it and then save
the good stuff for the end so yeah
building volumetric data turns out to be
really hard
luckily the film industry has solved
this for us pretty much there's lots of
really great software out there that are
using the film's I mentioned before
Houdini and fume effects this is Houdini
I think and they have really powerful
tools so you can combine fluid
simulations and multiple layers of noise
to get these really interesting shapes
and it's exactly what they were doing
film so we take that data and we export
it into a format called
open V DB which is something was
developed by the film industry by
DreamWorks Animation's
for films such as Puss in Boots and a
bunch of other ones and now once we
exported into that that's type of what
we take into the engine directly and
then start convert it into our own
former and then we we attempt to render
that too early which is something we
don't typically games don't typically
type of take on that type of volumetric
data so that was the challenge for us so
yes sir we I said mentioned we generate
it off offline similar up offline tools
use fluid summation layers of noise but
one of the main problems that is the
amount of memory it takes for this
volumetric data is pretty huge so we
have to put a lot of effort into
optimizing that and crushing the data as
small as we can get it but it's still
quite high so to try and combat that we
are making modular pieces so we're going
to make say 30 40 kilometer long
sections and we're going to piece them
together which is similar to what the
environment team do when they're
building a space station or any other
outpost or something like that and we're
gonna type of position a few of these
together to build longer more elaborate
missions and areas and we'll also have
bespoke you know chunks well spoke
pieces when we want to do a bit
something a bit more interesting
especially saying when it came to a
squadron 42 yeah and then to avoid you
ever recognizing these things were
actually sometimes we used we're putting
a lot of effort into how we light these
things and the visual effects now it's
surprising how much difference you can
really get by just relighting the same
area of volumetric data differently it's
almost unrecognizable and because there
is no horizon it's very easy to get
disorientated so it's not easy to
recognize it so we feel like we've had a
good balance between the memory cost how
quickly is to offer hopefully the more
we can reuse things the more content we
can make yeah so but we'll talk more
about the lighting and VFX later but for
now I'm going to hand you over to Ben to
tell you how the hell we get this thing
in game and actually rendered with a
sensible frame way
mother so I'm just gonna quickly run
through sort of what makes a volume like
this different from rendering normal
objects and some of the challenges that
we had to deal with and overcome I guess
hopefully right so this volume is a
single object it's about 30 kilometers
long so that's quite a lot bigger than
your average object in the game also
unlike most of the other objects in the
game you're inside it most of the time
so to explain going on these are the
voxels
so they're basically volumetric pixels
and as you can see there's millions of
them so yeah after 5,000 hours in ms
paint this is a diagram of what it looks
like roughly so so ignoring the cloud
for a minute and we've got three
asteroids on screen here and what the
what the engine can usually do for us is
we can we can pass object to the 3d
engine and it's got some very efficient
methods that it can sort of speed up
speed things up by reducing what we have
to deal with on the rendering side so if
you look at the asteroid on the left for
instance that's outside the players view
frustum so that just we never hear about
that for that frame also the one on the
right that's occluded by the bigger one
so again that just never has to be dealt
with and then the big one we know how
far away from the player it is so at
least we can pick a level of detail for
it and we can you know we could do stuff
like that I guess now the gas cloud has
a bit of a problem because that's it's
occluded its dis occluded it's zero
distance from the player it's 30
kilometers from the player if the
rendering code gets hold of this it's
going to have to make loads and loads of
work to try and process all of it
process half of it so the solution we
came up with is that we literally never
tell the rendering engine or the 3d
engine about this object what we talked
about instead is a huge number of
placeholder objects that we've
excitingly called chunks the volumetric
state has just chopped up stuck in a
vague memory bucket somewhere else and
the chunks just know where they are in
space and they know where the data is so
you can treat them basically as game
objects and you know actor another 5000
hours in ms paint
you can see the chunks in the middle in
the empty space we just didn't generate
any because there wasn't any gas there
so there's no point processing them the
chunks that are far away from the player
we've actually got a hierarchy of chunks
so the small ones are contained within
larger ones and if they're far away we
just use the large one instead of the
small one so that that sort of limits
how many of them we have to process and
then when the engine gets when the 3d
engine gets to it to cull it you can see
like quite a lot of them aren't needed
anymore so that lets the CPU do a lot of
work in advance and then the GPU can
just focus on receiving a list of chunks
that have already been vetted and then
just drawing them so how do we draw a
chunk so the whole thing
semi-transparent so it's unlike a normal
object that's like some polygons you
draw the polygon in place the job's done
you kind of need to accumulate all of
the stuff that you can see through so
we're going to use very marching for
that what that means is for every pixel
that we draw such as the middle one we
just draw a line from the start
through the chunk to wherever it has
exits or in the second chunk it would
just start at an entry point and then go
to an exit point we just chop that up
into a bunch of steps and then we just
process each step in turn and we find
out how much colors in one place we mask
it out by however much a paucity has
already been accumulated on the previous
steps and we just sort of build up a
final image so if we work through all of
these with the artists data that we've
been given and we get this screen shot
so the artists data doesn't actually
contain any lights so everything is in
fact the same color so moving on let's
talk about lights oh my god oh yeah so
just focusing on this one point that
we're dealing with for a moment we've
got we need to know a few things to be
able to work out how much light there is
for that section so the first thing we
need to know is how much gas is there at
that point that's easy enough to get the
next thing we need to know is how much
light gets to that gas so that's easy
enough to do we know how far away it is
we can make it fall off then finally
there's a phase function that just tells
us if that light reaches the gas how
much of it actually comes towards the
camera that's a fairly simple function
it just says if a light ray hits
something
than a lot of it tends to go through in
the direction it was going a very small
amount of it goes back the other way and
you get something in between in between
so here's an example of that face
function in action with this is this the
same test volume viewed from two
different angles and so as you can see
on them the one on the right the sort of
like bright halo that it has around the
edges that's the phase function letting
more of it through towards the player so
what was I going to say now yeah so
we've got we've got all that work that
we have to do for a point and then if
you multiply that by hundreds of samples
and multiple lights per frame what you
end up with is very very low frame rate
and what's annoying about that is the
two pixels next to each other the two
pixels next to each other are basically
getting the same result so it's kind of
pointless to be doing all that extra
work so the way we deal with that is we
just break that into two separate
calculations at the start of the frame
we know how many chunks there are and
we've got distances and all that kind of
useful knowledge so we can estimate how
much detail it's going to need in the
lighting and it just has to kind of
calculate at some resolution usually a
resolution lower than the actual gas
cloud density how much light it needs in
each chunk so we just do that work once
and then the Ray March can just pass
through it it just has to get the
density get the lighting multiply them
together move to the next step so that's
that just feeds the whole processor so
yeah that gives us this so you can see a
lot more than the previous screen shot
at least it's kind of flat though you
can't really see the shape that you're
looking at so the problem here is that
there's actually no shadows in that
calculation that we've done so we're
going to move on shadows so how do you
work out how much shadow there is
between the light and that point so the
problem with standard shadows that you
use in a game is they usually store just
a single depth value for an opaque
object that's usually enough anything in
front of that depth must be out of
shadow anything behind it's in shadow
and the problem we've got with light
with this is obviously you could be in
50% shadow you could be in late
pasang shadow or whatever so we need
something that we can calculate when the
lights created that just tells us how
much you can immediately just ask it for
any point how much shadow is there at
this point
so obviously the thing to do is we slice
the light up into a load of little
chunks we're a match all of those at the
start of the a creation and then yeah
the GPU crashes
[Applause]
yeah we decided not to do that now to be
honest yeah we could actually split that
work over 10 100 frames or something it
would still cost a lot of memory and it
would also give us issues that suppose
you want a lightning strike that hits
the ship as it's flying somewhere you'd
have to ask the gameplay code where is
that ship going to be in a hundred
frames time because I'd like to start
creating a light for it and even then
there's this huge piece of background
work that it's constantly having to work
on so we thought what if there was
something we could be doing in 2d can we
get away with something that just works
in 2d and what's nice about doing clouds
is that if you look at this is just a
graph of how much density there is along
that blue line it's quite a low
frequency kind of undulating shape and
so thinking about frequencies is
actually a really good answer so we
switched to a technique that's called
Fourier shadows so this is going to be
incomprehensible this diagram probably
but basically instead of storing a value
for every single step along along the
Ray it stores how much would you
multiply a whole bunch of sine and
cosine waves by if you wanted to just
sort of try and get that value and then
if you do that for every single step
along the Ray you end up with a curve
that kind of approximates the original
shape depending on how many you put in
you get closer to the original shape so
with one way what you basically get is
just the average value so that's not so
great if you add one sine and cosine you
end up with something that's still not
great but as you build them up you
slowly get something that is sort of
like the right shaped curve now we
actually did start out seven weights
because just in terms of the amount of
memory and the amount of processing that
we're trying to trade off we found that
was actually enough to get us from this
view to this view which we think is you
know this decent
blah
[Applause]
right so yeah that one actually now runs
fast enough and we are still optimizing
it a little but it does run fast enough
that you can now have a lightning strike
that just pops up on that frame you know
we have to spend like a I don't know
like a millisecond or something I don't
know how long it takes but yeah you can
create them on the fly as long as you
don't create like 50 of them in the same
frame the downside is there's still not
quite the screen shot we started with
it's kind of monochrome that's I think
that's only two lights but yeah they're
the same color so it's kind of
monochrome so we needed something that
doesn't introduce a whole load more
processing a whole load more data but we
wanted to sort of enrich it and give you
more of a sort of 3d sense of the scene
so a really inexpensive thing to do is
you just take this and you multiply all
of those values by just a completely
artist controlled sliders so you can
then just apply these color you get kind
of a color fringe on the edge of of a
dark area where like in this case the
red won't have actually been our shadow
does the green just because we
multiplied it down so yeah that is what
takes you from this to this yeah so this
is still not as good as that trailer
that we showed you but the thing is this
is actually as much as I can helpfully
do so I'm just going to hand the baton
over to the VFX team with Michael though
with Mike and be how they can carries
the rest of the way
[Applause]
okay so this is how the gas guy looked
fantastic stuff that Benji showed there
and we were obviously really happy with
the lighting the visual fidelity and the
technical achievement of this thing but
inevitably after showing it to art and
design and how he alluded to this
earlier there were several issues that
we're still going to need to solve so
the gas clouds are actually because
they're so big you know you're tiny
compared to this thing they actually can
be quite frustrating rather than fun
traverse because they feel so empty and
it's also really easy to lose your
bearings you don't really get any kind
of visual read of the speed that you're
going out and because it's so empty it
doesn't really feel dangerous and that's
a really important thing that designer
not really want to be able to kind of
achieve so typically in a more standard
environment this is the kind of thing
that would be able to solve with VFX so
in this slide I'm showing basically an
empty scene it's just a block out
there's nothing really in there and I'm
just layering it up with different types
of effects so we've got lightning and
then we're bringing in volumetric fog on
top of the fog there's going to be extra
particles I'll even bring some more in
GPU screen space collision get some cool
noise get some gravity etc etc and we'll
even throw in some screen effects as
well so these are all the kinds of
things like I say this is kind of a
typical thing that we do and if we can
make that look great it's you know a
simple block out then we surely should
be able to do that with a gas cloud as
well so that's our goal but how do we do
that and to explain a little bit about
how we do that for something that's not
quite as conventional me how it's going
to come and show us some stuff
[Applause]
hello okay so we've seen the level and
now comes time to actually add some of
the effects to the gas cloud but
conceptually gas cloud is kind of like a
level but doesn't have any walls doesn't
have any ceiling and there is also no
concept of up and down so it's kind of
mind-boggling how you kind of organize
this place it doesn't have any
geometries to start with so we cannot
really attach VFX to anything specific
and also there is nothing acting as a
visual guide so it's kind of like a
level but it's far less conventional so
let's take a look at the design feedback
that we've been given it's too easy to
lose your sense of direction speed and
distance ideally what we could do is
introduce a good flow of air at news for
the gas cloud and we would have some
particles moving through that flow of
air so if you stop you look around you
can observe the direction of motion and
find your wife through the tunnel and
that could also add the motion that was
missing in the example we've seen before
next step is making the gas cloud look
more dangerous and it's kind of easy but
naturally because the example we've seen
didn't have any distraction elements to
it so we can add them like the breeze
rocks smashing into other objects and
stuff like that but also design wanted
to define the energy levels so they
wanted some areas which are kind of calm
others should be more dangerous so we
kind of you know want to escape from
these areas faster so how we go about
doing that let's take a look at the
first problem first the new GPU particle
system if any one thing to the second
state before I mentioned that it allows
us to use so-called vector fields
essentially vector fields are snapshots
of wind
so a vector fuel is a texture a fede
texture and each pixel of that texture
is a vector in a specific direction then
at a particle flows flew through the
vector field we can sample that vector
and push the purple towards that
direction so essentially a vector field
is like a snapshot of a wind so here in
Houdini we can bring the actual gas
cloud data we can turn all the gas cloud
into a mesh use the Houdini's built-in
particle system flow all of them through
the tunnel then we can save all that
data and use in the engine to actually
achieve that sense of motion but vector
fields are only about motion and
direction and there's still the danger
problem that we have so for that we
figured we need lightning and so-called
electromagnetic interference oops
our point is not that easy okay
so here we have the electromagnetic
interference its minimum strength and
maximum strength basically it's a shader
of fact and the why it's made it allows
us to do that kind of distortion on any
type of screen in the game so the idea
here was to have more interference the
closer you are to more dense areas of
the gas cloud now applies okay so same
effect apply to mobile glass without
much effort really again the way that
the effect was made but the problem is
we've DISA fact that the first version
of it was driven by the density of gas
cloud so you get more dense areas and
less than serious and basically we
wanted to make denser areas more
dangerous so what we did is that we are
sampling density of the gas cloud at
players location the problem with that
was was showing you that you are in the
danger area and that's not quite useful
as I wanted to inform you that you are
about to enter the dense area and also
sampling the gas flow density is not
very efficient so we have to come up
with another solution and for that we
use so-called sine distance fields so
the problem is that the gas cloud on its
own doesn't have any walls it doesn't
have like you know distance to anything
ideally what we would do is we would
sample density of the gas cloud from all
around you then we you kind of figure
out if you're closing after dense area
and then we can send that value to the e
to the header and do the interference
but it's kind of slow so signed distance
fields they are 3d textures which are
storing distances to a near surface so
in a nutshell it allows us to figure out
if you are close enough
- or close to the dense area the danger
area and we know it for cheap and if we
have this value we can also drive
lightning but how we do distance and
something that's a volume so in Houdini
we can take the gas cloud data again we
can kind of mark these dense areas where
your safe density is point nine and
higher we turn these areas into a mesh
then we might a tool that is turning a
mesh into the signed distance field so
it's kind of iterating through each
pixel of of that volume and it's kind of
asking oh how far I am from the from the
mesh that we've made then all that is
stored in the retexture and we can reuse
it in the engine and drive the dub
interference that you've seen but we had
all these kind of dynamic types of
effects there was also a need for art
and designed to be able to control and
trigger and set-piece events so we still
needed controlled story-driven events
for example you're flying food the gas
cloud suddenly there's lightning
striking down and rock so for that we
again use Houdini here we can see how a
rock destruction is being made so first
we take the rock asset we are defining
areas in which rock will be split into
pieces then we can use physics forces to
animate that destruction if we are happy
with the result then it's just a matter
of human mapping and Houdini is really
good at it because we can quickly and
easily UV unwrap like 50 pieces or so
that we have in here then we can just
export the all of that back to the
engine and it just works so heading back
Mike
I'm back again okay so I'm gonna talk
about lightning which is one of my
favorite subjects
so yeah lightning it's a Kiva to a
requirement of gas clouds both for art
and design so yeah basically previously
we were able to create really nice
lightning effects but they were we
didn't really have a lot of control over
them we could basically place them and
that was pretty much it
leave them to it they were also really
expensive to use so from the point of
view of needing control we developed
several new options to allow us to do so
including the ability to have lightning
automatically position itself along the
cloud surface so that's using the same
distance field with me how talked about
just then but we also brought in a new
setting called conductivity and this is
something that we applied to surfaces so
all surface types can have a
conductivity setting now a high contact
conductivity setting means that there's
a great chance of it being struck by
lightning so if you have two surfaces
together one with the zero setting one
with maximum the one with zero if you
stand in there you're going to be safe
so with this in mind we think this is
going to be a really powerful - for
these a tool for design we think that
there's gonna be lots of cool tactical
implications for that and we're really
excited to see what they're going to be
able to do with it so the cost as I say
previously even though we could do
really nice-looking lightning it was
really really expensive and that's
really a problem for something such as
the gas cloud where we want everything
else to be as cheap as possible so with
the previous system if we were going to
draw something like this we're going to
be using a lot of control points now the
thing about control points is they're
very expensive
so you'd probably wherever this this
thing is going it's it's basically been
driven by the control points so to kind
of create that very detailed shape
you're looking at a lot of control
points and we need to get that number
right down
so this would be what we did to solve
that was basically pushed the rendering
of the bolt onto the GPU and we actually
used GPU particles for this
well that allowed to do was use much
smaller amount control points so this is
fairly crude screenshot apologies for
that but you can see the red dots are
basically the control points and we're
going to use the GPU particles to
actually draw that kind of detail in
between them yeah we're basically
joining the dots so to do that as I say
using GP particles we actually created a
new type of particle emitter emitter
which is displaying guided one so this
is an example of spline guided particle
emitter you can see on the bottom I've
got I've got some text showing what
we're actually doing this is just going
to loop so bear with me
but yeah rather than just have a single
single beam from two points we wanted it
to be a bit more interesting visually so
we got some various noise options we use
in simplex noise in this example but we
also had value noise as well the way I
think of it is it basically makes a
straight line we Billy well bully I'm
not the most technical out of this panel
so yeah and we've also got shuffle I was
on pulse which allows the the noise to
kind of reset itself based on the random
timer that we can add by the particle
system and then we've got a second
octave which just allows an extra level
of detail which is obviously really
important for something a little light
in in the gas cloud where we need it to
look really really nice for far away and
we also need to look super detailed when
we get up close to it as well so another
cool thing about actually doing this on
the GPU particle system is it's so easy
to dynamically edit the settings this is
just an example of me playing around
with a few attributes and the particle
effect itself so really quickly and
easily change the appearance of the
lightening room required so this is
gonna be really powerful - for the
artists and design as well that looks a
little bit weird that one but yeah this
is just showing that you can do lots of
cool things with it basically you know
you just limited by your imagination
okay so as well as lightning we also
enable contrails and turbulence inside
the gas cloud these are the same effects
that you'll have seen already when we
brought in the dynamic so when we
brought in atmospheric flight but
they're useful in gas clouds they're
being controlled by the density of the
gas cloud now and I think personally
it's a really useful thing for
multiplayer so you can see where you
your copilot so good so you your other
players are going useful seeing where
the enemy are and things like that so
yeah I think Ally's gonna now do a recap
of everything that we've got so far
so yeah bring it all together we've
talked about the volumetric data set
we're generating an offline tools you
normally use for films and how we crunch
that down into the smallest possible in
our data for the engine
Ben taught us through how we do the ray
tracing and the real-time lighting and a
fully a 2d shadow approach then we have
these field driven portal effects before
the driven by the SDF and the vector
fields the e/m interference a nice
gameplay feature and the contrails
lightning which is a really key
component to this destructible rocks in
assets and then set-piece events for the
more type of structured elements and
then bringing it all together I'll show
you now the flight of fly foo of our
prototype so just a three-minute fly foo
in engine just directly on screen so you
can see what you think hopefully you'll
enjoy it
[Music]
[Music]
[Music]
[Music]
[Music]
[Music]
[Music]
[Music]
[Music]
[Applause]
yeah hope you liked it it's a lot of
work that went into that a lot of
different people have been had their
hands on that and it's nice to finally
share it for you it's been a few months
in the making
like I said that was in-game we recorded
it last week for you there's a bit more
to do on it so I'll go through what we
need to finish off and what else we want
to add to this so everything we talked
about today like I said it's an engine
but we need Justin to polish a few
things so it's not quite ready for
Showtime but it's pretty close the
memory in performance is one of the main
things that was running live recorded
live but we need to do a bit more work
to get the performance down to the lower
spec machines to make sure everyone can
enjoy this we need a few more shadow
things to be done so the paid cop takes
the asteroids there weren't receiving
shadows from the gas cloud it up it
makes them look a bit stuck on so that's
something we're in the post of doing it
should be done soon
a lot of the VFX was placed manually in
that scene but now that I've got this
SDF tech in we're hoping to build a
procedural tool to help place all this
VFX
it took us a while to learn how to make
something like this look good and now
that we know now we can write a tool to
help us make it very quickly to the
designers don't have to Spade spend
quite so long coming back to the art
team to build these things few change to
the workflow as well it's all very new
you know nobody's made stuff like this
before in our company so it's we're
gonna have to just spend a little bit at
a time figuring out how to do this
quicker so we can turn them out a bit
faster and then the procedurally
generated volumes is something we also
want to explore so I meant it mentioned
planner two wings of the star the
presentation that's somewhat we
definitely want to do that will need to
be procedural because the scale of them
there's no possible way you could build
that uniquely over the size of a planet
and then we're thinking there might be
other uses like gas giants might be one
the surface of a gas giant could be made
using exactly the same tech and there's
obviously plenty of other uses we can
have like the the trail of a comet and
other things like this so yeah
so hope you liked it and lots of clever
[Applause]

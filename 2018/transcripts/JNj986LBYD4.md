# CitizenCon 2948 - Panel: Biome on the Range

**Video:** https://www.youtube.com/watch?v=JNj986LBYD4
**Date:** 2018-10-29
**Duration:** 31:29

## Transcript

please welcome senior environmental
artist Patrick GLaDOS so welcome to the
presentation called biome on the range
this is home marketing calls it is not
what I call its ecosystem creation for
star citizen right my name is Patrick
lettuce I'm seeing environment artists
at cloud Imperium games from the Germany
studio this is our team currently
consists of 11 people two lighting guy
guys on the Left many people on our team
are quite specialized in various fields
which really gives us a good balance and
expertise and the main responsibilities
this team has the German team is the
creation of the planets and moons for
star citizen a smaller portion of the
team is dedicated to creating the
landing zones besides creating content
we work with our engineers on tech and
tools it is not very common for a game
production team to do that all the time
you know we have to produce the game so
we have to balance the time between
actually building the content and
designing the tech that we need to
create that content but in the end that
allows us to be way more effective in
the long run as we can actually have a
huge impact on how the tools are
designed tailoring every-everything -
already eats right those are the two
main workflow steps we're going to look
at in this presentation before we start
off let's have a quick look at how an
ecosystem is composed like what elements
are there in an ecosystem from our point
of view or the things that we work with
are based textures distance textures
ground textures and object presets now
you don't have to memorize all of them
we're going to dive a bit deeper into
the base textures now and the creation
of these the distance and ground and
object presets we're going to cover
later in this presentation so don't
don't worry about too much
okay the ground textures sorry base
textures those five make up one
ecosystem the color is quite
self-explanatory right it's a color the
height handles how what the elevation of
our landscape is the normal gives us a
bit more surface different definition
and shading detail and such but they're
really the two interesting maps here are
the distribution and index map the
distribution map lets us define what
kind of object set gets scattered on
what color so we can really define where
cliffs are where the forests are and so
on and so on
well the index map also a very funky
colorful map that no is really for
letting us laying out allowing us to lay
out the grant materials which is up to
16 as a comparison to what you guys have
seen on the previous moons like the year
ago this was only three so we have
ramped up the definition that we can
have close up for the player by quite a
lot for now we're gonna as I said we're
going to focus on the base textures but
not all of them really just the color
and the height map before we start off
you guys know that star citizen is you
know all about building procedural
content and building procedural planets
and such and that kind of requires us to
build the content in a procedural way
and not just half the content being
procedurally handed in the editor so we
use a tool called substance designer for
that substance designer is a tool that
allows us to use nodes like the one you
see in the top left corner and chain
them up together to a bigger graph those
nodes can be anything from shapes
patterns modifiers of all sorts right
it doesn't might be too technical but
I'll give you a quick example so we
started off with this very simple I'm
gonna actually go back we start off with
a simple spherical shape up here and
what we do is we take another pattern a
second
pattern and we just blend them together
right so that's two notes we just
combined together to produce a new
result but it doesn't have to stop there
we can basically go on and on and on
until we create an extremely huge graph
it does something extremely
sophisticated and detailed and
complicated but again we're going to
keep it simple for the net for example
adding a blur right so it just takes the
result and blurs it right okay to do
something a little more funky we add a
little twist to to our result using a
swirl node to create this you know
blossom or vortex kind of shape what you
see here is all I have done is I swapped
that spherical shape that we have used
in the beginning I swapped it for a star
so all the other nodes that I've used
like the blending of that second pattern
the blurring this the twisting it gets
reapplied without me having to go in and
do all these steps again right and this
is where this is where the the power of
that tool comes from this this is what
really enables us to do really quick
iterations and variations of all sorts
but still this might be too abstract I'm
gonna follow up with another example
later on that let me talk about other
kinds of nodes not no noses but noises
which is called the Perlin noise it's
another node right I mentioned to you
earlier that this might be shapes or
patterns or all kinds of images really
noises are fundamental for building
procedurally generated contents for
example materials materials substance
design is in most game productions used
to create materials but in our case we
want to achieve landscapes so it's a bit
bit of a different use case here this
Perlin noise is not really a static
image that's saved somewhere on my drive
but a mathematically generated pattern
and because of that we can change all
kinds of properties of that noise at all
times which which is
super-powerful like adding an octave for
instance which is the noise added on top
of itself at a higher frequency but
lower intensity I know it sounds very
technical let's just say we add more
detail to this wobble shape
all right so if added more detail to
this wobble shape and but it doesn't
really you know get me anywhere I want
to use it as a base to you know create
my lamp landscape from so what I'll do
is repeat that process a couple of times
and then see where we where we end up
with all right this is a bit more
detailed and you know somehow resembles
noisy generic looking Hills of some sort
I bet this this can be useful in later
steps to to get closer to our result
before we start off I'd like to show you
another type of noise it's basically the
same like the same idea the same method
it is a pattern a generate a
mathematically generated pattern but
it's just a different kind there's all
kinds of kinds kinds of patterns or
types of these perla noises right so
this one is for example called billowy
and if we add details on top the octaves
that I was speaking of earlier then it
gives us something like this which looks
kind of like a bumpy hilly landscape
surface but it's really too generic so
we will have to work on that quite
heavily too to get a really nice and
sophisticated result the next one is a
rich noise and same thing we had the
details on top and get kind of spiky
like a spiky Mountain surface
next up is custom notes so Sebastian
Schroeder who's a part of our
environment team in Frankfurt he built
this custom note for us to actually
allow us to apply erosion on top of
these noises to really transform them
into mountains let's have a look at how
that works right so we're taking this
noise and we're plugging it into our
erosion node and we get this so with
added erosion you can see how we start
getting closer to a mountainous
landscape with visible erosion channels
everywhere what it also can do is apply
sedimentation so now you can see that if
I apply or if I put in put an input to
the sediment strength input I can
actually get the soil or yeah the soil
being basically trunk transported down
the slopes accumulating in the valleys
giving us a much smoother look of that
environment okay I think you guys get an
idea how this stuff works and how what
noises are and let's let's create
something very very quick and simple
with it that has a bit more intent so we
take this noise sorry let me go back we
take this noise and we apply it back
onto a spherical shape up there right
this is the same thing we did earlier
it's just another noise then we add more
contrast to that shape so it basically
tightens up and gives us a better
silhouette also introduces this plateau
because we introduce increased contrast
by so much that it basically clips out
of range so to produce something a
little more interesting we can put it in
a mask that describes all slopes that's
the slope information of that mountain
and apply erosion only there to
visualize where we might do this or
where we might go with this mountain in
general let's add in two colors to
visualize a
a bit more context see you really just
two colors very quick okay so do you
guys remember the previous example where
I basically swapped out the spherical
shape for the star right we can
basically do the same thing here and
suddenly we have a star-shaped snowy
mountain right what we can also do is
multiple stars or add any you know any
generic noise to it to see what kind of
results we get from this graph that we
have set up now and this is where where
it gets really playful because it's
always interesting to plug in random
things and see what we get out of it we
can of course go completely crazy with
this alright but it's time to actually
build an ecosystem together that we will
later on bring into the editor and maybe
get a chance to even run around in a
final result so we start off with a
noise you guys know that one already
we apply erosion to it but this time it
looks a bit different it looks way
smoother much more rough because I use
different settings on it the reason I do
this is as artists we always try to go
from rough and large shapes and really
you know define how these are supposed
to look like or how we want them to look
like and then work ourselves through to
the final tiny granular details on our
environments what I do next is I'm
adding a flat surface which has a little
bit of bumpiness
to it I am basically blending these two
in to improve the balance between hills
and flat land in the next step
I'm doing what we have already done in
previous examples I'm adding noise and
I'm eroding it down I'm adding noise
again and I'm eroding it down so I do
that twice you see up there the noise
blend erosion noise blend erosion in the
next step this is not very visible but
let's look at the top left
mmm Hill over there you see how we are
adding this sand layer at the bottom of
the slope like like wind has a blown
sand against the slope so this is that
one but I kind of like the idea and take
it to more extreme levels so I decided
to basically utilize a shadow node so
I'm just to explain quickly imagine
there's a Sun on the top left corner and
it would cast a shadow to the right of
every single hill right that kind of
makes sense and we can use this
information to create a mask and then
blur everything that's in that area
towards the certain direction that
basically gives us that desert dune like
dunes like effect this is again achieved
by using the shadow node in combination
with a blur overall I really like the
shapes of this it has a really nice
balance between noisy high-frequency
detail and flat shapes that provide for
a little bit more IRS the next detail
this isn't really super visible what you
kind you can kind of see it right again
we are simply utilizing a noise we're
adding it everywhere where there are
slopes and then we're blurring it down
the slopes I want to create the I want
to create details that look like the
wind that is blowing through that
environment has certain irregularities
to it and therefore adding adding tiny
bumps and crevasses to our sand slopes
the next step is another detailed step
as I'm overall quite happy with the
large shape so I won't won't try to
touch them or destroy them any further
this one is adding a little more bumps
like this little tiny bit of granular
detail and this is all height
information whatever I put into this
pass you guys will see in the game so
every single tiny bump I add in here you
will actually see as a bump on the
environment you see how this one is
getting really noisy and detailed this
is the very very last bit of fine
granular noise I'm adding here you see
that the nodes at the top left have
suddenly changed to another color this
is not the height information anymore
this is the normal map information this
is surface detail that will be visible
to you guys but will not be added to the
height map you know the map that defines
how how the elevation is looking like
the reason for that is we don't want you
to we don't we don't want it to be way
too noisy and bumpy whenever you guys
drive around with a cyclone and you know
beyond cobblestones all the time that
would kind of suck so we have other
methods of adding that detail without
breaking the fun for you okay now the
height map is done we can move on to
texturing it this is quite easy over
time whenever the graph is done it's
getting quite big and you have set up a
lot of masks that you can use later on
to actually do your texturing so what we
do is we define certain color palettes
and reusing this those masks we can
apply these colors to certain areas of
our ecosystem here to create a nice
looking texture so here I am basically
adding another hue of sand to create a
bit mist coloration to avoid having the
entire ecosystem look too
flat in the next one we're taking all
the rocky or yeah the rocky surface
that's still show details coming from
our erosion past back then and coloring
them in proper cliff like in a cliff
like color palette something more rocky
we're adding another layer of noise but
at this point I noticed well I'm adding
too much of noise it's getting too noisy
so it's not as readable anymore so I'm
knocking it a bit back without
destroying it completely so I'm
basically reducing it by 80% and to give
it a little bit of a detail something
otherworldly I'm adding this crazy blue
to it because I can alright so this is
our final ecosystem that we have Chris
just created in substance designer a
couple more views of it right but again
I told you guys that I can basically
take any single node and basically
change it up to create variations of my
ecosystem right so let's take the first
three colors that we that we chose or
basically the entire sense that we have
laid down to our ecosystem and and just
recolor that one and now we get
something like this simply by changing
one node we can change the entire look
and feel of that environment suddenly it
feels less more or less barren but much
more friendly almost like a jungle II
place or this one which could be a
volcanic you know place that where where
lava flows through it or something like
that okay do you guys remember our snowy
mountain from back then we can of course
apply the same thing here
time to jump in the editor cool so what
we'll do now is jump into the editor so
what I've prepared already right we have
created this ecosystem together I'm
gonna paint down that height map that we
have produced right so I can take this
brush and just paint down on my planet
this is actually a planet the camera is
set to some very very slow sea all right
and now we can jump down to the surface
see this is how our height information
looks like on the planet now but of
course we have created a color so we
will have to add it to our environment
we can do so by adding the textures that
we have created all right there's the
color the blue looks kind of cool I
really like the idea but if we look at
basically if we zoom down to the surface
you see we get the default materials
that come from our editor and if i zoom
out a little more it really isn't
holding up with all the detail because
our ecosystems are only a 1,024 pixels
wide by 1024 pixels big and an ecosystem
can be around 3 to 6 kilometers wide so
there is really not enough pixels for us
to to provide you guys with all the
details and and make it believable what
we can do is at the distance textures
begin that we talked about previously or
and at the beginning of the presentation
right
so these textures are really meant to
add in that detail that we're missing
let's jump to another spot and zoom out
okay that looks good right the distance
textures are taking over I'm zooming out
then the ecosystem textures are taking
over I'm gonna do the reverse this is
good good good good all good all right
but as I have created an index map for
this ecosystem as well which helps me to
lay out ground materials right I can
basically fill up these slots with the
ground materials which I'll do now
all right let's do the same cool cool
cool cool cool or good back to the
ground
all right awesome seems like all the
views so basically whenever you fly
towards the ecosystem you fly down to
the ecosystem you see some kind of
detail at all times without getting too
blurry until you reach the ground yeah
so what I want to show you here is a
little something that players usually
don't get to see which is a debug mode
for that map that I was talking about
which is the index map you see it says
eight seven six five four it's not a
countdown it's really just telling us
this is the fourth slot of your ground
materials the fifth slot of your ground
materials and such what I want to point
out here is the way they blend together
is really quite simple
right now it's splotches of ground
materials and I want to give that one a
bit more definition so what we can do is
we we have something in our editor I'm
not going to explain it in further
detail but it basically
and mixes all these channels up to
provide us with even more breakup cool
right so I'm I'm showing you guys this
in in this debug view because whenever
we use sent a sand texture next to a
sand texture this might not be very very
visible so this one makes it quite clear
next up is object so as you see texture
wise or entire ecosystem kind of works
but it's kind of empty right that's
boring so let's add a couple object
presets to it first we add the larger
shapes as I mentioned to your before
during the ecosystem presentation or a
creation process we're working on the
big stuff first on the big silhouettes
first and then we work ourselves through
through the details so we add these
larger piles then let's try to see
what's up with these blueish areas in
our ecosystem all right I'm gonna add a
couple weird-looking plants to it right
okay all right this is probably not
gonna do the cup mmm okay I can see them
working from a distance already but I'm
not too happy with these cliffs so I'm
gonna add a bit more definition to the
cliffs using assets of course as this is
what we're doing right now okay okay
this is starting to look better now that
we have to find all our main objects we
can really go in and detail things out
right so let's snap to a random location
and see what we can add in terms of
detailed meshes okay cool we added a
couple pebbles and grass it really adds
up to the ground materials some things
of course as it's a flat surface with a
texture on it it cannot give us the nice
silhouette and and and depth that we
would like to have whenever we build
these ecosystems but those meshes really
help us out
and they weld together all the other
objects that sit on top of the larger
structures together so whenever you have
a rock for example you expect tiny rocks
to be scattered around it transition
transitioning into some kind of gravel
and really creating this nice transition
from ground to to the object itself
all right let's see what we can add here
good so and as I say as I told you
before right so if we were just to leave
these alien plants cacti kind of looking
flora just by itself it would look kind
of weird it doesn't have a context it's
just sitting on a blue surface right but
this this grass here it's really giving
it the context that needs to really work
fine in the environment same with this
plating here it really bumps up the
bumps up the terrain detailed by a lot
and makes these guys sit much better in
the scene all right
cool so this is the very last object set
that we added right you see that the
detail has become quite detailed now if
i zoom out you never get the feeling of
or you never get to see a very blurred
out environment so this is working quite
fine but I was kind of jumping in
between places so let's have a look at
the entire process from this view again
we added our height map we added our
texture we added our distance textures
we added our grant materials we did
additional breakup we added all our big
objects and all our detail objects
let's get back to the textures and now
again back to everything else like the
final result so this this would be the
before and after right this is how we at
CI G go through and through our
environments and try to build them up
step by step whoa
all right
let's have a run through our environment
what do you guys want to see
it's I I seem to have forgotten to set
the gravity on the plan
let's see how that behaves
jump over it
okay cool I think this works quite fine
what do you guys think
[Music]
all right I would say we have produced
something really cool I'm not sure if we
we're going to put this in the game or
not but I hope you guys liked it I hope
it gave you a little bit more of an
understanding for how we create
ecosystems and ultimately planets right
yeah thanks a lot thank you guys
[Applause]

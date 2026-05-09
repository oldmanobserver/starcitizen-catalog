# CitizenCon 2953: Shaping the ‘Verse - The Future of StarEngine

**Video:** https://www.youtube.com/watch?v=xKWa4WoTkV4
**Date:** 2023-10-24
**Duration:** 1:34:53

## Transcript

[Music]
B bjo citizen KH we are so happy to be
here it's been so long to see you guys
physically and just being able to
interact has been fantastic so far and
we're super excited about all this the
video you just watched outline a lot of
features in the star engine it's a
reminder of what makes this game so
special it's a focus on Fidelity I said
it it's a focus on
immersion and it's a focus on
seamlessness being able to go everywhere
and you just you're just there the
accomplishments from the tech teams at
cig have been numerous in building all
the techn ology that allow you to run
the game and allow you to experience the
same things that we see in our de setups
and so what we're about to see today is
a deep dive into all these features but
first I wanted to touch really quickly
on this last year we have launched
persistence or added persistence it's
been a rocky road this year and I want
to thank you guys for keep on keeping on
playing giving us a hand giving us good
bug reports it's been fantastic for us
to improve the stability of the game so
thank you so much you guys deserve a
hand of Applause thank you so
much I just want to touch on one bit
which is that all the people you will
see in the next couple Tech panels are
really the best of their crafts in the
world they are
infused by a value that we tremendously
value at cig which is Relentless
optimism that this game can be
that this Vision can be achieved and so
without further
Ado but first I got one more thing to
say so in all of the different panels
that you'll see the all the updates um
everything that you'll see on screen
whether it's a HUD an MFD a ship UI uh
FPS weapons everything all of this is
new so as you watch the clips you're
going to see some differences that's
because this all comes from the freshest
implementation that we have we love open
development we love to show you guys the
work in progress and so that's exactly
what we're going to look at today and so
without further Ado I leave you with
Marco we will show you all the cool and
amazing features of our engine and the
challenges that we face thank you so
much
[Applause]
guys thanks B hello I am Mar Coretta VP
of technology and we are going to talk
about star engine today we have been
developing star engine for many years
with the goal of creating an online
living universe but creating a universe
is not an easy task and even more
difficult to do everything seamless
without any loading screens or invisible
walls and massive spaceships flying very
fast close to the terrain and objects
are pushing the limits of procedural
generation and
streaming this is not a single player
game so creating this Universe Online is
making everything more challenging we
stream and generate physics on server on
CPU and we already support more than 100
players on a single server more with
server mching to support all this the
engine must do a lot of work every frame
so in a typical star engine frame update
we got up to 64 Hardware threads about
200 soft ones over 700,000 streamed in
entities and millions of entities
overall in the solar system about
150,000 updates per frame we have over
200 Vehicles spaceships and round ones
over 2 million physical objects over
100,000 objects generated per frame when
flying over the terrain we have many
unique location streaming on demand in a
seamless gigantic space Also we are
supporting many new features that we are
going to Showcase today I'm going to
starting introducing the new and
improved clouds and fog worked on by
custom vener in the R&D
team the First new feature is the light
shafts where volumetric Shadows from
clouds cast into the atmosphere but
truly volumetric and 3D fully integrated
they're not just a PST effect as it is
usually done in
games with this the atmosphere from an
overcast Sky gets dark and this is
important for planets and locations with
bad weather
another component is the new ground fog
it follows the terrain up to a specified
elevation for different locations it is
also fully integrated into the
atmosphere it receives volumetric
Shadows from clouds and terrain it
reduces the light scatter into the
viewray and in this video we're showing
all the features combined together
in addition we made many improvements to
Cloud shaping to allow for more
variation and
details the shape noise blending a
vertical variation has been improved a
[Applause]
lot
also we made improvements to short and
long distance read and the tiling is
less
[Music]
visible
[Music]
[Music]
and
and and best of all best of all we're
going to include all these new features
and improvements in the next 3.22
release okay thank you thank
[Applause]
you hi everyone uh so I'm Mike Snowden
I'm the director of visual effects and
I'm Ali Brown the director of graphics
and procedural
Tech thank you very much really happy to
be here really excited to show you uh
we're going to be showing Dynamic Fire
in Star
engine so Dynamic Fire is a driver uh
for gameplay both FPS and multi
experiences it creates emergent sandbox
gameplay and it can be used by designers
to craft very dangerous scenarios for
players and as you can see from the
video it gets very
intense okay so how do fire start in
Star engine well there needs to be a
source of ignition and there are
multiple ways in which it can occur for
example weapon impacts or misfires
explosions or damaged items and the
player needs to be alert to their
surroundings with fire and every present
threat if a fire does break out you're
going to see it dynamically propagate
through the area uh causing damage to
environment and player and at this point
the play needs to limit the damage of
course by extinguishing the fire uh in
any way that they can so when doing so
they're going to need to wear protective
clothing to protect them from extreme
heat they're going to need to wear a
closed helmet to protect them from smoke
inhalation poor oxygen
levels and there's actually multiple
ways the fire can be extinguished
including the removal of heat uh for
example using the fire extinguisher
which is my personal favorite it's a lot
of fun doing
that the removal of oxygen for example
locking off the area vening the oxygen
creating a
vacuum or simply the fires burn so
fiercely that it's it's done everything
it needed to do it there's nothing left
for it to destroyed and if you let it
get this bad it's probably time to
consider repairing your
ship okay so how do we achieve this from
the technical perspective the first
thing the artists and designers do is
they mark up their scene to tell us what
physical properties that each surface is
made from whether it's wood or metal but
not only on the surface we have to
describe what is behind the surface you
might see a metal panel on your
spaceship but is it got cladding or
wiring behind it it's important we know
all this so we know how flammable it is
then after this we have to to find all
the physical properties that go with
these surfaces so for example what the
mass is the energy density combustion
temperature a fuel ratio and we use all
these physical properties and we sum up
in each voxal which is a 1 by 1 M Cube
and then once we have these voxal this
forms the basis of our
simulation uh so then as we first thing
we do is we look for sources of ignition
and then wor so here's our debug mode
that shows us what what was going on in
the simulation is what we used to track
it and you can see these squares
enlarging to show us where the fire is
spreading for each of these boxels we're
tracking the fire the temperature fuel
remaining the amount of smoke and the
fire is propagating via convection and
radiation which are both accurately
simulated and it's consuming the gases
and producing the knock on products as
well as it goes and because we're using
a proper simulation like Mike mentioned
when you vent a room not only you
removing the oxygen and putting the fire
out but if the temperature Remains the
Same if oxygen is reintroduced the fire
will reignite and it'll continue burning
just like it would in real life
so what's next for this so our Focus has
been on Interiors in particular
spaceships but all interior spaces
really and this box will grid really
helps us solve that problem our next
focus is going to be on planets
obviously they represent a slightly
different challenge the vastness of them
we have to transfer this over the
network and simulate it slightly
differently uh and we also have to
render it a scale but the the way we've
done it the the the core Tech we've used
we should be able to scale this up quite
easily so that's that's going to be our
next
Focus okay so how do we create realistic
Dynamic Fire visuals in Star engine well
we start with the simulation as just
described by Alli and this gives us the
data we need to drive the
visuals then we bring in the burn Shader
so this can be applied to static
environments and we have a lightweight
version of the Shader for entities which
is kind of based on the um the dirt
Shader and wear then we've got the glow
which is an animated surface decal
Shader for static environments this is
where we get start to bring in some nice
motion and then we bring in the GPU
particles which are spawning from voils
and in screen space obviously these are
doing a lot of the work
visually then we bring in the lights
these are spawned for clusters of voxal
as opposed to per voxal as an
optimization a cluster being a
representation of oxil close to each
other and then we bring in the fog so
this is height laid volumetric fog the
smoke fills the room and it goes up to
the ceiling before filling the rest and
we're simulating
that so to finish we're going to take a
look at all of that put together in the
game thank
you
thanks very much everyone thank you
thanks a
[Applause]
lot hello everyone I'm will Hae I'm here
to talk about water in Star engine
[Applause]
so water is a huge part of both of our
games Star Citizen Squadron for 2 and we
wanted to give it a major upgrade we
were going to set three ideas that we
wanted to impart on our water we want it
to look as good as possible obviously we
want it to look realistic we want it to
be beautiful we want it to be in motion
constantly it should always be moving
and always be reacting to everything
around it whether that be players or
objects or vehicles and we wanted this
to work on the whole scales of all of
Star Citizen all the way down from
Footprints in puddles to enormous ships
crashing into the ocean I'm going to
talk about our updates to the water
rendering first and then we'll move on
to the other stuff I discussed so first
of all the water shaders particularly
the ocean and the river once were in
dire need of a major upgrade they were
currently using a technique called
deferred shading which is really fast
and fantastic for Opa objects but does
not translate well for transparent ones
which of course water is so the first
step that we made was to transition to
forward shading that allowed us to
introduce more physically based
techniques such as proper lighting
reflection and refraction it in allowed
us to integrate the atmosphere properly
into our water lighting setup and it
also meant that we could get more fun
more fun techniques such as uh wave
Crest backlight scattering as adding
better foam rendering which includes
half tone blending surf surface a and
much more detailed bubbles on the
individual bits of foam I've got some
examples of that here in this particular
screenshot you can see the icebergs in
the near frame you can see we're
refracting the iceberg underneath it's
correctly refracted in the midf frame
you can see that the iceberg is
reflected back onto the water that is
now accurate we weren't doing that
properly before here you can see our
accurate water lighting from this really
beautiful screenshot of the Gladius over
the water I love this one so this is the
objects under the water have been
correctly lit which is new and then we
are applying the lighting changes from
the um the specular highlights on the
surface and also considering the
lighting from the suspended particles in
the water depending on how deep and
dense the water is which gives us this
really beautiful effect uh this
screenshot just looks good but what he's
going on is that is demonstrating that
the atmosphere and the water are sorting
properly this looks like everything is
normal but it's challenging to implement
with forward rendered water and uh
proper Ray March clouds like we have in
game props to Allan who worked on all of
this I I did the the next bit uh and
here we can see the wave crash light
scattering see how the sun is coming
across the back of those waves it's
lighting up the the suspended particles
in them it just looks gorgeous here we
have the multi-layered foam and from a
distance we have both surface foam and
subsurface foam rendering correctly
looking really really nice I've just got
a video here before and after first of
all uh this is our our Lakes on standing
4 uh next we have water volumes on
oron there you go and this last demo
this is a Cleo on the Stanton system
this is what it currently looks like in
game and I think you agree pretty
dramatic
difference so the next bit that I want
to talk to you that me and U the team of
Planet Tech and Graphics have been
working on is of course water surface
simulation this has been absolute
pleasure to work on so we had a few aims
for this we wanted it to be multi-input
we want physics to influence this we
want our mfx system to influence this we
want bullets we want everything we want
High concurrency you guys it's a Sandbox
game you're going to break it you're
going to stick a thousand P thousand
Picos in our puddles it's got to work
and it's got to be scalable it's got to
work from the tiny scales to the
footprints in the puddles all the way up
to as I said giant crashes giant ships
crashing into the ocean so the technique
that we chose for this is a form of
surface wave propagation it's GPU based
it's highly realistic at a low cost and
it can be scale for ways of different
amplitudes so we can have all of that
built right in just by adjusting a few
constants I've got a demonstration here
we're going to have the player walking
through the puddle as you can see as he
steps you get a bigger Ripple but even
as he's stepping the toe is being
dragged through the water and moving the
water accurately this is not a copout
we're doing this in 3D you see as I'm
jumping and then this next demo we're
going to fire some some bullets this is
a bit loud this
one right the one more thing that we had
to look at so it's all well and good
this working on a puddle but Star
Citizen is not made of Puddles it's made
of oceanic planets it's made of
everything we needed to make this
multisale so we yeah we wanted the water
near and far not just in a square around
the camera we wanted lots and lots at
once the solution we picked was a multi-
region water Sim now this was really
really tricky to get right but I really
think we have now which basically means
that we can dynamically allocate all of
the simulation regions depending on what
is colliding where and what resolution
we need at what parts of the screen we
can optimize this very heavily to make
sure that you get what you want to see
at the right time we still need to get
that information onto the water though
and that's a bit trickier so what we
devised is yet another of regions now
the regions are slightly different the
simulation regions need to happen
wherever something is contact in the
water and that needs to happen
regardless as to whether you can see it
because there's a collision going on
there I look away and then I look back
if it stops going and has to restart
that looks bad whereas the water we only
need to know the total result when it's
actually in view so we have these new
regions which cover all water in View
and the beauty of this is that we can
use this for multi-input and multi-
output systems anything can influence
our water whether it be the simulation
whether it be weather whether it be VFX
and and then anything can be affected by
water now so the water rendering reads
from this but then we can also spawn VFX
particles from wave crests we can add
screen space effects we can have a line
across your visor we don't have this yet
but it's accurate to the displaced water
in front of you we've got this
technology now so we can use it to
influence any of our work going forward
and here's a really good video of some
of it in action just I'll let that play
this is a debug mode essentially we're
moving a sphere of basically infinite
Mass through the water and as you see if
we pan out a bit we'll make our sphere a
bit bigger we get a much different
result from the Sim spawning the phone
properly it looks really nice really
happy with this
one so what I'm going to do in a second
is I'm going to turn on the the debug
mode so you can see where the regions
are you see we've got these gray boxes
they light up green when there is a hit
Inside the Box we've also got different
sizes going on if you look near the
shore there there's a big cluster of
text that is a whole bunch of other
regions because there's some stuff
floating there causing little ripples
that we can't actually see and as you
see these SC scale properly we can add
the results from multiple sizes of
simulation together and they influence
and interact with one another accurately
you see those big waves crashing over
the Little Sim
there yeah it it works pretty
nicely I've gone ahead of my subtitles
but I'll just let that video play
out so what does that look like when we
bring it all together what's it going to
look like in game now you did see a
little bit of this in the star engine
trailer but actually I think this video
does a little bit more Justice to it so
I'm just going to let that play out for
[Music]
you forward in a second you're going to
see the Wake start to happen behind us
there and from the cockpit
perspective water droplets on the glass
thrown up from the water Sim this is
what I'm talking about using multi
[Applause]
[Music]
output and that's us thank you so much
siton handing back over to
Ali
[Applause]
[Music]
hello
again so here here to talk to you today
about a few of the graphical things
we've got coming in I'm really proud of
the work we've done on the fire and the
water they both look amazing features
I'm going to talk to you about a few a
few smaller features and a few longer
term R&D features we're coming in on the
visual side this first one something we
wanted for cinematics and telling a
story but also to tie into our active
feature system but just to get their a
face to sell a little a little bit more
story on our characters so this Blood
Sweat and tear system is something we
implemented recently and it allows us to
use a GPU particle simulation which we
project onto the face and we integrate
it into the skin Shader so we can get
realistic reflection and refraction of
water on your face and we even uh make
the skin go a little bit redder to
simulate the extra blood flow when
you're tired or
upset so none of this is a pre-and
animation is completely Dynamic we have
complete control over everything we can
key frame every single tier if we want
to and we can even simulate blood like
here so next thing I want to talk about
is our scope Shader uh design came to me
telling me that they really wanted to up
up the game with the rifle scopes they
weren't quite good enough they didn't
really feel realistic for them and they
thought it was a real core part of the
uh first person shoo experience so to
give you an idea of what we used to do
we have these type of used to use these
type of fake scope meshes which you see
here which is where we type of slic the
scope in half so you can see through it
and sometimes you put these big black
planes around them to obscure your
vision and do we put a bit of Glass on
the front of it but there was nothing
really to tell you that it was a lens so
we've worked on a new scope Shader which
is now going to be on all of our Scopes
moving forwards and I'll give you a
quick show of what that looks like in
game so on the first scope here we're
going to see it's got a infite projected
Red Dot scope uh site we've got lens
distortions you can see this little
refraction and bending of light on
it I you see it works when you you don't
have to be actually holding the rifle
for it to
work we've got a correct emulation of
eye relief on the scope so we have the
blur distortions chromatic
aberation and then we also got sport for
digital displays like this one which has
light amplification and has a sport for
emps you know you know if you get an EMP
you're going to have the the the slay is
going to get started so we're quite
proud of this we think it's going to
have a much better more realistic uh
simulation of the Scopes in the game and
I think I've kind of mentioned before
but it's it's not a fake effect it it
applies to our Scopes no matter where
they are you don't have to be using the
scope you could look down somebody
else's scope and see the same thing it's
fully integrated into it so it's really
quite proud of
that next feature I want to talk about
hopefully if any of you have a HDR
Monitor and you've been playing 320
hopefully you've given a go of the HDR
feature we're really proud of this it
looks really good and we've got some
great feedback from you guys as well
there's been some uh strong feedback
about we want extra Black Level controls
so we're going be adding that for you so
make sure you can tweak the image
exactly how you want uh and there's a
great user guide on Spectrum as well if
you want to know how to get the best out
of it because it's not always a
straightforward Tech to get the best out
of um just to give you an Insight of how
this works um we've got something called
unified tone mapping curve and this is
the process where we map the real life
colors of uh real real life intensities
of light onto what your monitor can
display and rather than having an SDR
mode and HDR mode we have like a
smoothly uh smooth system where we can
blend between SDR and HDR depending on
the peak brightness of your monitor we
also pay a lot attention to make sure we
preserve the colors and the Hues to keep
an accurate image for the artist and
especially for skin tones we don't want
them turning red or white or doing
everything bizarre um just one thing to
mention we've got some content
adjustments that will be ongoing we've
got a lot of content in Star Citizen
takes a little bit of time to make sure
we balance everything so it doesn't look
too dim or look like a
supernova next we want to mention
temporal upscaling this has been
something's been asked for for a long
time we're proud to finally get it into
your hands we've got three different
techniques we're going to be
implementing uh we've got CS uh we've
got our own Temple super resolution
solution called TSR we've got AMD
Fidelity effect super resolution 2 and
we've got Nvidia DSS2 as well um the
each have different characteristics and
Hardware requirements and tradeoffs so
we put p is important to get you all
free so you could have a choice of what
you want to look on left here got a zoom
in from one of our outposts that's no
anti- aing for people that really love
to see Jagged edges uh the center one is
our TSA which is what you've got in the
current release today and on the right
hand side is TSR without doing upscaling
and this is going to be replaced in the
TSA solution and this gives us better
quality and more stable image and
hopefully much less ghting we can use
our TSR to do upscaling here's the
example of how it looks at each
resolution
and similar results from amd's
FSR and some numbers here which I'm sure
you can p over later but basically we
can get about two times GPU performance
if you're interested in using the
upscaling
technique obviously if your CPU limited
you man I get quite them numbers it
depends on your machine uh we also
intend to look at frame generation
techniques like FSR 3 and dss3 but these
are going to come a bit later we're
going to focus on GPU performance
getting that up first frame generation
isn't really applicable unless you got a
really good performance
first some other Qui quick updates we've
got the screen space Shadows is added to
Alpha 320 uh gives us some extra detail
in our shadows across characters and
it's particularly on planets it helps a
lot and we've also got a new texture and
mesh uh streaming engine that helps us
get as much possible detail as we can
onto your vran on your GPU and it type
of does something we call load balancing
it will scale dynamically for your GPU
to make sure we can get the absolute
best possible results uh We've also got
some more streaming improvements coming
in the next release just to give you a
quick show of what the screen space
Shadows mean here we've got a planet
with no Shadows I it's micr uh the
shadow Maps you see these the normal
Shadow maps that fill in half the scene
but then when we get the screen space
Shadows you look in the top of the
screen or in the uh the flowers they
have of fill in the detail for the rest
they really help type of bed the scene
in and stop these things looking and
floating next up just want to talk about
planets for a little bit uh something I
get asked about a lot of what's
Happening next with planets so we've got
quite a lot of R&D in progress first
thing we've got two new uh pie of tech
being started recently first is virtual
terrain texturing uh it's quite a
technical detail but what this means for
you is we're hopefully going to get much
less popping or no popping at all and
we're going to achieve this by moving
all the calculations to the GPU and
we'll be reusing the same type of patch
based system that we talked about in his
water presentation and it should give
you major CPU savings as well so we're
quite looking forward to getting this in
another benefit is that it's going to
give us the ability to add more
complicated Logic on so we can type of
do more diverse and interesting terrain
like things like you not we don't have
beaches at the moment we'll be able to
achieve that and there's other similar
things where based on the local
conditions we're able to do more
advanced decision making next thing we
want to look at which is probably the
thing we asked about the most is our
scattering system which is what
responsible for putting all the trees
and the Rocks down in the world um we're
going to again move this to 100% of the
GPU and that should let us have vastly
longer draw distances uh right up until
the Horizon and much better better
performance uh so finally get rid of the
dreaded pop of trees coming in for you
um we also have to integrate it with our
harvestable system the resource system
and the the awesome fire system you just
saw a minute ago um another point is
it's going to be a hierarchical based
system which what that means is we'll be
able to use nearby vegetational rocks to
influence what other vegetation rocks
can grow or will show up and this lets
us produce much more complicated rule
sets so we can do things like have a
tree that maybe underneath it it doesn't
have any grass or maybe certain trees
come together in clumps and we get much
more natural distribution of
vegetation and final thing we want for
planets is we want to be able to build
them much easier much faster and we want
to make sure they are truly unique at
the moment our planets are unique
however they are built from type of tile
sets like pre-built things that get
mixed and matched together and Blended
in complicated ways so you don't see the
repetition but it's not truly unique not
in the same way that the Grand Canyon
might be or the River Nile or Mount
Everest and that's that's what we want
so to get that we need to replicate the
complicated natural processes on earth
like geology climate erosion and these
things aren't trivial so we've got three
options we've got offline tools Houdini
teragen things like this we could
simulate all these appr proces in the
engine but we've started some R&D a few
months ago on uh whether we can use
machine learning to do some of this so
just to give you a quick idea of how
that would work or how it could work if
you just start with some random input
here it's just like some noise uh we run
it for a tempor simulation temporary
simulation so we can type of get a more
uh reasonable uh approximation of
simulation at different altitudes and
latitudes on Earth um and then we what
we do is we categorize all this into
different biomes so basic on the
temperature and moisture you'd find out
what is a desert what is a forest and
this this part is crucial so this is the
input for our machine learning algorithm
we could come up with this image any
other way you could hand paint it as an
artist or we could just randomize the
noise to get a different set of images
and then what we do is we take the large
data sets we already have from Earth
from Mars and from the Moon and we train
it on exactly the same uh distribution
uh so biomes so forests uh grasslands
and things like this and by training it
on exactly the type of data we get in
reality we can take this and then push
just that and then we can get these
lovely height Maps out of it that tell
us a really realistic distribution you
can see here this is a height map so the
black areas are low you can see all the
little rivers and valleys and this had
zero art input aside from this image
which is very nice result um it's early
days uh this is based on something
called a custom diffusion Neal Network
um it's like I said it's pre-trained on
Earth data and it's been built up in
patches so it just doesn't become too
expensive to build and the little
circular patches get like added together
and they to avoid all any seams in the
image and just to help you visualize it
I've just put some colorization on it to
show you where like snow and beaches
might be and just wrapped around a
planet to give you a better sense so it
doesn't look quite so abstract yeah but
this is very early days this stuff but
we're hopeful this will be helping the
future of how we build planets quickly
and
efficiently um thank
you so the last thing I wanted to talk
about today is our gen 12 renderer and
Vulcan um this has been ongoing for
quite some time taking a lot longer than
we would have liked but we're finally
getting to the end of this this long
journey um for those who don't know the
reason this was been implemented is
largely for performance we're going to
be getting at least two times better
performance on our CPU submission for
rendering which is often the bottleneck
for the game so that will directly
hopefully translate to performance
improvements we also get better control
of memory with Advanced GPU features
like resizable bar and it also opens a
door for some things like R tracing and
new mesh shaders uh so we've got a video
of Vulcan running to live captured so uh
that I can't is this which ship is this
but it's um yeah it's all working fine
now there's a couple of hitches and
performance so we can't quite release it
yet but we looking into them uh the last
few performance issues and stability
issues and hopefully we'll releasing it
soon so like I said the one thing or one
of the things we really were interested
in by implementing Vulcan was to get
support for new hardware features and
the one of the big ones was R Racing so
with that I want to hand you over to Ben
who's going to talk about some of our
lighting
[Applause]
research
[Applause]
hi I'm Ben Perry and this is global
illumination so as Ali just said um
using moving over to the Vulcan renderer
and now that that's fully online we've
got access to Hardware Ray tracing on
the gpus that have support for it and
the best thing to do with Hardware R
Racing would be to create a new updated
Global illumination system for us to
use now I'm here to give you a fairly
early preview of the work that we've
done so far uh but first off I'm just
going to simplify some things and ask
what is global
illumination um well you can break the
lighting in a game down to three
components U first off youve got direct
lighting that's not Global illumination
but that's uh the sun lights in the
level that kind of
thing next up you've got diffused Global
illumination now that's uh like a whole
hemisphere like a soft lighting that
affects the entire that takes from the
entire scene and lights up the pixel and
then finally you've got glossy GI and
Reflections um that's like your shiny
surface glints your mirror Reflections
that kind of thing and now all of those
combine together to form one glorious
penguin
now now for the rest of this
presentation we're specifically talking
about about this guy the diffus penguin
um glossy GI has actually been disabled
in all the videos even the old the old
System videos don't show the gloss of GI
here just to Aid the comparison uh first
off we've got a video from Chris
Campbell who's going to make us look
[Music]
[Music]
cool
[Music]
[Music]
[Applause]
so next up the boring or the interesting
bit um how are we doing it how does the
tech work um I'm just going to dig into
that just a little
bit so we're closely based on amd's
recent paper GI 1.0 we're probably going
to build on top of that but at the
moment we're quite close to it uh We R
Trace against a simplified world so that
we get um like smoother lighting for the
since it's a diffuse scene we want a
sort of diffuse smooth signal um this
also means that we get more Rays per
millisecond which is always
good and we do generate a lot of probes
so the new system is generating well for
comparison the old probe was about one
probe per room and the new system is
about 25,000 probes that are all on
screen at the same time and we're going
to see that
now so here's a scene that I've
dramatized a little bit just to give
trouble to the old lighting system and
this is what the ray tracing sees so
it's a simplified single color per
object kind of
thing but then we've also got this uh
kind of a 3D dictionary of average light
values so that the light is kind of
shared over things in a similar
area so going back to the scene uh this
is the old system so you'd render a
single image from the center of the room
blur it and then slap it onto the entire
scene now as you can see like the middle
of the scene is about the right lighting
but everything else has got the middle
of the scene's lighting like these red
lights at the sides the basically
drowned out by the table bounce that
somehow made it across the room to them
so we want to replace that system with
25,000 probes each one of them only
providing light to a small area around
themselves and then we interpolate that
to provide like a smooth bounce and you
can see already in the distance like the
red light is is really bouncing up there
and then we add a screen space occlusion
pass just to uh just to tidy up the
edges on things and there is the final
composite
[Applause]
so what else does it
do well because it's it's realtime
generation it means we can do a real
time bounce and we can do that with
quite small areas you can get like a
really vibrant bounce that picks up off
small objects in the
scene and that means that the art team
can really lean into like strong local
variation on
color as again we will
see so we'll do a side by side
comparison on this one as you can
already see like the spotlights really
like throwing stuff into the scene this
is just one light in the
room and we could actually we did have
live updating as you can see in the old
system but it's it was designed for like
time of day changes rather than this
continuous smooth
View and finally it means that we can do
things like glowing surfaces can just
illuminate the world without having to
add special lights to to fake
it
[Applause]
so yeah there's two really common cases
in sty cism particularly that this is
going to help with first off cockpit
brightness we capture at the moment
the at the moment we capture that
cockpit probe in a in a setup scene and
then we don't update it as you're flying
around so you're not going to get the
sky color in and you're not going to get
the ground color in and then we've got
the opposite problem that I don't have a
picture for this but cargo Bays
sometimes they're light you land
somewhere dark you open up the doors and
now you've just got this weird little
light room with uh with nothing spilling
out of it so again let's have a
video oh yeah so this is the old system
the sun's working but you can see
there's no Sky there's no ground
lighting by the way I've turned off a
lot of the cockpit lights so that you
can see
this and then in the new one you can
already see the Skylight is kind of
helping a little but then as you turn
over you get all the ground
lighting yeah there's
more see one of the concerns we had was
that we didn't want to create a two-tier
system if people have got Hardware R
tracing and it's working for them that's
great but you can't really have the art
team optimizing was for one type of
lighting and then having to optimize it
for another type of lighting and having
to trade off decisions about the two of
them so what we've been experimenting
with is trying to create a new low bar
that's higher than the old low bar as
well as creating a new high bar and the
idea for this is basically to take that
single room um environment probe system
that we have been using update it so
that we can do live relighting on that
and then to sort of slot that in where
the ray tracing would be while still
keeping all of the other stuff like you
know the the 25,000 probes and all that
kind of stuff can look at the old system
and we kind of Frankenstein them
together so I'll show you what we've got
so far for this
so this is just the old one and the new
one so that you can see the problems
like just it's it's overly lit let's be
honest and now this is what star cism
would have looked like if we released it
on the PS1 um the Sharpe among you may
have noticed also the ship is missing
but you know we can't do Dynamic objects
in
this you'll be surprised it doesn't seem
to
mind
and then we have software GI in the
middle which is yeah like I say it was
using the same 25,000 probe
system but not having to use any kind of
Hardware rate tracing as you can see
it's not a perfect match it's not
identical but it's a lot more Dynamic
than the old
system and
[Applause]
finally and finally I'm just going to
show you a to-do list here I don't have
pictures because it's stuff we've not
done glossy Reflections obviously we
want to complete the picture and for
that we need to handle glossy
Reflections
uh that self-explanatory really I don't
know what to say about
that secondly you've only seen it on on
opaque surfaces so far the next step is
to extend this so that it can support
glass and water and all the other
transparent things in the game and
beyond that we've obviously got fog
we've got other atmospherics we want to
expand GI to make sure that it affects
everything smoothly and
equally and the final thing is a star
cism thing we've got giant scenes we've
got a ridiculous scale on some things
and we've got plans to make sure that
this GI extends to handle that full
scale anyway that's all I've got to tell
you now I've been Ben Parry next up
we've got stara with Chris
[Applause]
Rain
hello
everyone
I
hi I am Chris rain and I would like to
show you not one not two but three new
physics of our physics engine and I
would like to start off by introducing
star cloth our new character cloth
simulation with the short
video so this is just regular player
movement that was actually me playing
you can see the cloth collides with the
ground you can see multiple layers of
cloth that do not
interpenetrate cloth gets influenced
from
wind and as accurate collisions with the
player's
body we now have support for collisions
from Dynamic
objects
you can play football in any
outfit star cloth supports the full
range of motion a human can make from
Fast
movement to extreme poses
[Applause]
starcloth is designed to be a first
class member of our physics engine it
interacts with everything we have to
offer from character movement over
forces like wind Thruster backwash
explosion to projectile impacts and
collisions it's efficient it always
updates at 120 FPS regardless of the
frame rate and is hand optimized it's
immersive and believable it's a
realistic simulation based on physical
properties it's High Fidelity high
quality we want to raise the bar with
this the visual geometry you see on the
right is complex and not suitable for
simulation the visual geometry is made
with visual quality in mind and that
does not translate well to simulation so
we decided to add the ability to use
bespoke meshes that are made to simulate
well and let their movement then deform
the visual
geometry this allows us to share the
same sim setup across multiple visual
mes which is a huge productivity boost
for Tech art we can seamlessly blend the
simulation on and off so we can disable
the simulation at a
distance back to the
football everything that is dynamically
simulated is able to interact with the
cloth from ships over crates boxes and
even
footballs we ensured that the collisions
are accurate and believable
as you can see in the image the football
Parts both layers of the Gown the cloth
itself supports self collisions which
means it will create folds and wrinkles
but not interpenetrate itself or other
layers of
cloth the same applies to the static
environment as well the cloth will drape
itself around the
environment so brushing up against
objects will will result in the behavior
you expect
we added tapered capsules to improve
Collision detection accuracy a tapered
capsule is a capsule which has two
different radi at the end
points human anatomy is complex and we
need to accurately represent it for
collisions the traditional capsules we
use on our acts lead to jumps in the
Collision surface now notice how there
is a jump between the elbow and the
lower arm and another jump where the
forearm connects to the hands these
jumps pose significant problems for our
cloth simulation if you look at the
upper torso you can see the Collision
proxies are actually completely hiding
the cloth and they're essentially
completely
useless so now notice the difference on
the same body represented with tapered
CL capsules we can now Faithfully
represent the hips legs and arms of the
character an additional benefit of
tapered capsules is that the Collis
detection is significantly faster than
with regular capsules currently we're
only using them for uh cloth Collision
detection but in the end we'd like to
use them for
everything we simulate the cloth always
at 120 FPS or 120 hertz regardless at
which update rate the game is running at
we do this to be Faithfully able to
detect collisions with a fast-moving
character as we're simulating at a
higher rate than the game updates we
have to interpolate the Joint positions
between updates we get from the
game at each simulation step we perform
Collision detection simulation and
update the Sim the cloth Sim cage now if
the game is running at 120 FPS we do one
update for the for the CLA simulation if
the game updates at 60 FPS like in the
image we simulate the cloth
twice now if the game runs slower like
at 30 FPS we need to update the cloth
four times you can see this in the image
it's it becomes apparent that we need to
make the cloth run as fast as possible
and we spent a great deal amount of time
optimizing this with various techniques
including handwritten vectorization and
using every trick in the optimization
handbook the effort pays off because we
can Faithfully capture very complex
movement and fast-moving characters even
at low frame rates without any clipping
or
[Applause]
tunneling thank
you one area that poses a significant
challenge for character cloth is when
multiple pieces of garments layer on top
of each other like a tight fitting
jacket that lies on top of the pants as
you can see in the image
above this is a very difficult region to
simulate properly because you don't have
much space and the simulation collisions
have to be absolutely accurate this what
I'm going to show you is a very subtle
effect but once you notice it you cannot
stop noticing
it I want to focus your attention to the
waste region of the character here we
tweak the simulation settings in real
time to see the
effect here you see a a rendering with a
high fidelity cloth
disabled
and here the same scene with it
[Applause]
enabled to be
continued
tomorrow uh much more can be seen about
star cloth in the character advancement
panel be sure not to miss out
[Applause]
so next up Star
Hair currently we have the ability to
simulate the effect of moving hair with
joints that are essentially simulated
pendulums the hair is skinned to these
joints and when the these joints move
due to the pendulum simulation the hair
moves with it this leads to a fast and
believable movement of hair however the
quality is directly correlated to the
quality of the skinning which is tedious
for Tech art to achieve for some complex
hairstyles further apart from Gravity
the pendulum joints do not react to
external forces like collisions or wind
or explosions so we asked ourselves can
we somehow improve upon this and I'd
like to show you some early prototype
results of our
research this is an image of the raw
geometry you saw in the previous image
you can see many strands of hair and we
thought to ourselves maybe we can
simulate all of these
strands this is a single strand isolated
from the rest as these are simple
triangle measures we initially thought
we could simply use our cloth
simulation and simulate such a strand
like a sheet of cloth that didn't work
out at all it turns out hair does not
behave like
clothing also the sheer number of
strands and their individual triangles
and vertices are simply too much to
simulate efficiently even for our highly
optimized cloth
engine we realized then that our artists
are actually using splines
to create these transs and a spline is a
smooth curve or line through space you
could see that in yellow um and we
thought maybe we can just simulate these
they they're much
simpler so and hair simulations need to
be able to maintain the original
hairstyle you cannot have the hair
simulation change the visual appearance
of a character one of the reasons we're
using the CL simulation for hair did not
work out as at all is that the cloth
only simulates vertices and they have no
concept of orientation so you do not
know how the next segment has bent in
relation to your current segment in
other words you cannot easily simulate
twist with vertices alone for splines
however that is very easy to
do
so all of this together allows us to
simulate the strands according to the
theory of kerat rods a cerat rod allows
you to model the behavior of Slender
onedimensional rods exactly what our
splines are and simulate Bend twist
stretch and Shear exactly what we
need hair also needs exact Collision
detection to not intersect with the head
the ears the cheeks the jaw
region the video I'm about to show you
is some very early prototype footage of
how such a simulation actually looks
like so this is a test of various head
movements to see how the hair reacts
hair simulation is one of the hardest
things to special uh to simulate
especially in a real-time context and
very tricky to get
right we're actually simulating all the
hair
[Applause]
strands so we will have characters being
able to to run their hands through their
hair and have the hair react
realistically a barber simulation
next actually being a bold man this
was very touching moment for me when I
made this
video thank you thank
[Applause]
you next I would like to introduce
melstrom our physically based
destruction
system and I would like to do that with
a video that I believe speaks for
[Applause]
[Applause]
itself
[Applause]
see the water
[Applause]
[Applause]
splashes we want players intuitive
prediction of the effect a weapon or a
collision has to actually happen in the
engine or in the
game so we decided to move away from hit
point pools or other abstract models to
simulate damage but rather have damage
be calculated from a physical model and
from the physical material properties of
each
entity if something breaks off due to
its structural Integrity decreasing be
below a certain threshold melstrom
allows it to break off in a realistic
fashion if you shoot off a wing the
missiles and weapons on that Wing should
still remain
attached if the broken off part still
has power electric items should still
function this means melstrom was needed
to be designed to work with a
hierarchical setup to begin with from
the hierarchical representation of the
geometry we want to break off to the
same hierarchy on a higher level item
for items like power plants lights
weapon systems and so
on Maelstrom is persistent and
networking ready we designed it from the
ground up to work with high latency
situations to persist and replicate
easily
[Applause]
to achieve all this we gave each
physical geometry instance and then
identifier to be able to uniquely
identify it within the
universe so your Gladius Wing is your
Gladius
Wing we added physical material and
damage properties that can now be
replicated across the the network one of
them and that's the most important one
we call
Integrity and this determines how much
structural or internal Integrity a
physical geometry has Integrity is
modified from dissipating or rather
absorbing energy from kinetic impacts or
energy weapons and also in the future
from absorbing energy from external
factors like extreme temperature or fire
as you've seen
before we also track which physical part
or geometry the uh belongs to which
visual geometry and which high level
entity so if the structural or inter
internal Integrity
collapses we know which visual geometry
is affected and which item might be
affected as well so a power plant will
seize to emit power or implode explode a
weapon will seize to Fire and so
on
to make things break apart we create
what we call breakable clusters a
breakable cluster is a set of physical
geometry the visual geometry and the
entities on top that can break
off between breakable clusters we create
abstract canti lever beams to be able to
model stress and strain I'll go into
more detail in that in a
bit breakable clusters are hierarchical
they mirror the hierarchy of all
attached entities involved they also
embed the hierarchy of all animated
joints and they also embed the hierarchy
of all physical geometries they
essentially represent a ground truth of
the entire hierarchy necessary to
perform all our goals for
mstom this
image is showing a breakable cluster
graph of the
Gladius
I'd like to show one more video of
melstrom before we
[Applause]
continue
we needed to find a good way to easily
and efficiently determine when a
breakable cluster breaks we chose a
wellestablished model from Material
Sciences and Structural Engineering
canver
beams in essence a canver beam a canver
is a structural member that has a fixed
support and a free end forces experience
on the free end can be used to calculate
the amount of stress the fixed support
is
enduring the basic be ideas behind that
are best explained from a very simple
example if a ship were to collide with
the horizontal part of the crane in the
image far from the vertical part the
fixed support would endure a higher
stress as if the ship were to collide
closer to the vertical part
but not only does the point of in Impact
determine how much stress the cter lever
beam experiences also how large the
surface area is but uh connecting the
Canter lever and the fixed support has a
large influence on when a Canter lever
beam will break in our case this
actually means we analyze the
crosssection of the intersection of the
set of geometry from two breakable
clusters to calculate the surface area a
wing attached to the body has a rather
large connecting surface area compared
to the surface area calculated for the
stabilizers connected to the
body we then project forces from impacts
and explosions onto these caner lever
beams and calculate the stress the beams
experience over time this stress turns
into strain and if we reach a certain
threshold the beam snaps the results
simple efficient and deterministic
breakability but this is not just about
ships and buildings that you saw in the
videos before we want melstrom to be a
systemic system that we can use on all
types of entities so here is some video
of some test footage of AI shooting each
other behind breakable CL cover and
mastr
barrels
[Applause]
physical material properties influence
damage and breaking and have a direct
influence to how things break and
Fracture to achieve this we added
various
properties
density yield strength resilience
thickness
toughness Young's modulus and this is
more or less what I wanted to talk about
Maelstrom but I don't want to leave
without showing one more video of what
Carnage melstrom can Co can
create
[Applause]
so so thank you very much and with that
I'd like to hand over to
[Applause]
benois Great thank
all
right I am not this person but I'm
filling him with him so so far I mean
you guys think this is going to change
your game up to now all these new
features hell
yeah Okay so we've seen updates from
fire water we've just seen Force we've
seen Sun and light so the next thing
that's left to build a ludicrous space
game is audio and so I'll leave you at
Graham who's going to show you some of
the new audio enhancements we bring to
Star engine to make it even more
realistic than it is
now hi citizen con gr I'm here good to
see you recently in the audio team we've
been looking at how we can create a
greater psychological connection and
emotional impact within our games
through the use of improved audio
technology audio can play a crucial role
in the immersion of the player and with
that in mind the audio code and
Technical sound design teams have been
looking at all of our Tech from the
ground up for example when you're under
threat you should feel a real sense of
danger when you're armed you should feel
the dangerous power that you hold within
your hands earlier this year we showed
you our resonance Tech which allows us
to bring the action much closer to the
player even when they're deep in the
bowels of a ship and far away from where
all the hits and the explosions are
happening but that's just one part of a
much larger push to create a better more
immersive audio experience
with that in mind let's take a look at
some of the tech we've been working on
first let's listen to some of our weapon
sounds in
action they're a great simulation but we
wanted to take them further and express
the sound pressure the forces being
exerted our new in-house audio effects
particularly the multiband compressor
tuned by our sound designers give us
this
result the compression serves to
illustrate the power of the weapons and
the effect that they have when going
beyond the limits of The
Listener let's show you the same audio
effects applied to the ship weapons
taking us from
this
to
this but it's not just about feeling
powerful changes in audio can create a
sense of danger of being out on your own
and under threat here's an example of
ship combat
[Music]
sounds good but what if we wanted a
little more
[Music]
realism
the audio propagation Tech that we've
been rolling out makes it easier to
change the soundscape in real time and a
nice use of that technology is to
provide a more realistic
option here your own weapons resonate
through the hull of the ship only what's
in the pressurized cockpit is heard
clearly and the Threat Level feels
higher due to the isolating lack of
enemy weapon and ship
audio
making these changes creates space in
the audio both spectrally and temporally
making impacts seem bigger more damaging
more of a problem for the
player this realistic mode isn't limited
to the flight experience it's applied
appropriately to the game as a whole
here's an FPS battle in a depressurized
[Music]
area
[Music]
with realistic mode we get that sense of
isolation again giving the location a
different color and adding variety to
the audio
[Music]
experience player breathing and folley
are exaggerated and other sounds are
transmitted through physical contact
[Music]
that's all from us for now we look
forward to getting these new audio
features into your
[Music]
hands
all
right hello
everyone
so persistent entity streaming
replication layer and beyond my name is
Paul reindel I'm director for online
technology and I'm going to show you a
little bit Insight in our technology for
pist entity streaming and the
replication layer
I thought about what's the best way to
show you something about that Tech and I
thought about putting some technical
drawings on this on the slides or maybe
show video like we did two years ago but
really the best way to show you how
persistent entity streaming works is to
give you a life demonstration and that's
what I'm going to
do all
[Applause]
right
so this will all be live so please bear
with me if there's any glitches
um so let's keep this rolling uh I think
I'm supposed to press the button no it's
already
switched um before we start a little bit
um I just give you a little bit an
overview what you see
here um let me set up
everything
uh one moment sorry so on this left side
you will see my client window and on the
bottom side uh you will see the server
render so for this
demonstration and I start a second
client I'm
just stopping that sorry about that
that this is live all right so again on
this s you see the
client and he just locked out because I
started a second client so let's do this
again one more
time on this side you see the server
rendra which is currently uh it has
nothing streamed in I'm showing a small
uh demonstration
level and on this side see the entity
graph which is our online database um
that's powering what you see in persist
entity streaming what you play in
3.18 and I also have some metrics on the
screen um which shows the entity graph
uh worker the requests per minutes uh
per seconds the mutations and you also
will see entities created and destroyed
once I do
that all right so
let's wait for my client to come up and
uh join this
level so the first thing that will
happen when I join this level you will
see on that server everything streams
in and my client get connected and also
streams in everything on the client view
um what would happened on this on the
behind the scenes is that my player just
got unstowed into that chart and we had
Real Time created everything for this
player so you will see his body is
attached to the player you will see his
Mobi glass his head with all his
customizations um his undersuit and then
all his uh customizations as well on the
UND
suit um what you also see is that this
player just got unstowed and attached to
an static Zone object container and this
is how our zone system
works basically on the server you will
see three different zones purple green
and red
that and they each Zone comes with its
own coordinate system and its own
physical grid and this is how we
actually on live do uh Zone transitions
between your ship empty space space
station um or a
planet and you will see as I walk
between those
zones I will at real time update it in
that entity graph and this all happen
seamless so for a client this is
completely transparent you don't notice
that but this is actually what's
happening when you step in or out into a
ship and this is very unique to our
engine um no other engine has this zone
system and this allows us to do all the
amazing stuff you saw in the videos
before transitioning in and out of uh
planets and go from the smallest scope
to the largest
scope um
so everything we do
in a shart so this is like a mini level
like the miniu level is also persisted
in this database um when we create new
entities in our engine in Star
engine those entities get pushed into
our entity graph into our online
database at real time and then from
there replicate it to our clients so if
I go ahead and spawn a couple of ples
here you will see they spawn uh they get
created immediately on my entity graph
and replicated on the server and on the
client um so spawn couple more
here and you see this the uh pangles I
spawn in the other Zone get attached to
the other Zone um and then if I go and
transition one of those they will also
transition between the different zones
um and this same works for ships or more
complex entities if I spawn uh this buy
here you will see this one gets created
with all its attachments and it's and
everything else attached to it and this
is just my small demo level here on live
we have up to 600,000 Dynamic entities
that get created for one single chart
and this is just the initial state after
2 weeks 3 weeks of game playay when you
guys go in and Destroy stuff spawn stuff
play around it's it goes in the millions
of
entities um so this in itself is pretty
pretty amazing
Tech um the next time I want to talk
about is our streaming
system um most engines do stream on
stream on uh texture or uh geometry we
actually stream entities and we do
stream persistent
entities so when I turn on the the
streaming system here and I walk into
this uh if if I walk over to the red
area you will see that the purple area
will stream out together with all the
entities on that server so it does not
only stream out on my client it actually
streams out on that server and when I
come back in the green zone that purple
Zone streams back in with all the
entities in there with their full
persistent
State um so now I have uh second player
joined benir is going to join
me so Ben if you want to join okay I
think you see him over
there hey
Ben
sorry nice all right I'm going to spawn
a couple more penos here and because the
next thing I want to talk about is new
technology we are right now developing
and we about to put on the tech preview
for you to play um and this is actually
the replication layer
split and that's the big next step in
our in our great vision obviously as you
might know so in this demo my client and
my servers they are no longer directly
connected actually I have a a new
service running
here and that is our replication
service so my client is connected to
this replication service and my server
connected to this replication service
and the replication service its own per
the sole purpose is to get all the
entities which are in The Entity graph
and stream them to clients and servers
which are connected
to and and what's really cool about this
is uh let's do a little experiment here
um I mean you all know our game has bugs
uh it's it's still Alpha and sometimes
things can happen so let's see what's
happening uh when I kill my server
here and so this is my server uh the
actual console so let's just shut it
down and yes this is where you would
usually see a 30k or something uh you
can see benoir kind of froze there for a
bit um and the buggy does a bit weird
stuff I can shoot those pingles but the
world is really in a frozen state right
now but I didn't disconnect because I'm
connected to the replication layer and
not to the server anymore uh in the
meantime I'm just starting a new server
let's be a bit patient for it should
come back online in a
second and as you can see now that the
server came back it restored the
state
it it restored the state and the
simulation just continues to work uh as
as as before um so this will be again
this is a very early Tech but this is
this is a a great benefit of what we
have with our replication layer
split but there's one more
thing um and let's try this thing again
I just killed myself and I'm I'm trying
to do that again but this time um we
doing something different so let's first
go in
here and this is my development tool I
can talk about it in a second so let's
stop that server
again and
restart
and this will take a little bit um I'm
running this tool you see here this is
our internal development tool um this
tool runs the entire stack of our game
on this PC um this is obviously for
development only and I can do that with
my small test level um but this really
helps online deaths and all people who
work on the incredible complicated Tech
we here to be able to develop uh our
game and because I run everything on
this PC it's a bit slow so let's let's
wait and see what's happening
here all right simulation continues I
can see Ben moving again hey
Ben
however what just
happened well as you can see on my
screen I no longer have one server
connected I have three servers connected
to this replication layer so what you
guys see
here this is the very first version of a
working server
[Applause]
mesh all right so now I'm going to
explain a little bit how this magic
works because it is truly
Magic
each server when it came up and the
replication there realized there are
three servers we assigned different
zones to those servers and we said okay
server one you are the authority over
the purple area server two you are the
authority over the green area and the
last server is authoritative over the
red
area um you can still see that those
servers have all those entities
replicated
but only this the entities within their
zone are actually authoritative on that
server so while I'm in this green zone
at the
moment my entity is simulated on that
green server and just replicated on the
other
server um and now as I transition
between those
zones you will see that on that green
server I just lost Authority and on that
purple server I just gained Authority um
and because it my entity was my player
was replicated on both servers this
completely uh Works seamless um and
again let's do that a couple of times
you see on my client here I don't notice
anything of that this is this all
happens behind the
scene and this uh doesn't work only on
me let's turn on the uh the Zone colors
and the object the uh Authority
assignment on the client as well um you
can see that even entities as they
transition into the other Zone
seamlessly transition to that
zone and not only that I can also
interact with entities that are on the
other side so if I go on the screen zone
for example and I shoot this I can still
shoot that purple uh
entity and I can also just go ahead and
destroy that buggy which sits on that
other
Zone there you
go always fun to blow stuff up
right all right um so there's more to
this um the first thing I will do let's
spawn a fresh bug here just destroy it
mold one um when I go into this
buggy I will become part of the
Aggregate and that that means that
now my buggy and myself will transition
Authority together and this is how we
make sure that my player while he's
driving this buggy is always
authoritative on the same server so you
can see as I drive around with this
buggy between the zones I will switch
between the different
servers all right um but there's more to
this so remember when I turned on the
streaming earlier the same streaming
mechanics work here as well like
obviously in this example right now you
can see all those servers they have all
those entities
replicated and it's a little bit
wasteful because you have three servers
all need to replicate all those entities
um and that's where streaming come into
play I can turn on streaming here and
you will see that suddenly my purple
server no longer has the red area
streamed in and the red server no longer
has the purple area streamed in um so
let's see what's happen when I drive my
my buggy backwards into that red uh into
the Red Zone what happens on that purple
server
um and I just disappear so right now on
this
server there's only benoir replicated
and benoir if you come come to me over
in the red
area you will see that now on this
server there's no client at all and in
theory we could now completely stream
out the entire area on that server or
stream in a new
[Applause]
area and you will also see as I drive
back into the green area I will
magically reappear on that purple server
and this obviously works on uh on on the
other side as well uh let's get a couple
more player join I have a couple more QA
in the back so you can just see the
whole thing uh running at life a running
in life with with a bit more uh things
going
on let me get out of this
buggy and you will see on each server
renderer which clients are currently
replicated on those servers and which
clients are actually authoritative on
those servers and you can see this the
green server because it's the middle one
has most entities replicated um and then
you can see this purple one at the
moment only has one one uh one client
replicated
yeah so yes this is pretty much
it
I hope I hope you guys guys enjoyed
this um it has been a long time to come
to this
point and I can't I just can't put in
words how much Tech and work we had to
put into this big shout outs to the
network team big shout outs to the
online services team big shout outs to
Chris to let us doing
this
[Applause]
it's been a really long journey to get
to this point uh and I've got to say the
team has done an amazing job they've
been working diligently for the last
four five years we've had a couple of
false starts we've finally have an
incredible I mean the way the
replication layer works and how we can
spin up servers and down and keep the
state constant even even if a server
goes down is I think a genius design and
the first time I saw
this about three weeks ago working fully
I
cried it's like giving birth we did
it and we wouldn't have been able to do
this and work on this kind of tech
without all your support that's right
you guys allowing us to take the time to
do it right to really build it so thank
you so much for everyone and thank you
everyone at cig that's really worked
hard to deliver all this amazing stuff
that will be either in your hands now or
in your hands very soon and this is just
the beginning of Citizen con we got a
lot more stuff to show you that's what
we need for this MMO guys that's what we
need great demo by the
way

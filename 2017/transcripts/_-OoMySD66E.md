# STAR CITIZEN: CitizenCon 2947 - Graphics and Tech Development for Star Engine

**Video:** https://www.youtube.com/watch?v=_-OoMySD66E
**Date:** 2017-10-27
**Duration:** 47:57

## Transcript

welcome to our tech and graphics panel
the visual bar as you guys know that
we've set for star citizen is incredibly
incredibly incredibly high takes a lot
of unique technology to actually get us
there next presentation is put together
in a cool way they're gonna take you
step-by-step through a frame and through
some of the techniques that we use to
actually achieve that visual quality and
they'll also give a small glimpse into
some of our future plans in regarding
the tech so let me introduce mr. Ali
Brown he's the director of graphics
engineering from the UK office thanks
man
hey guys so we've got a few things to go
through today the first thing I'm going
to do is do a bit of a deep dive and to
looking at all of the things we do and
to make it one frame of star citizen and
as you all know we use lumberyard as our
base engine but we have some different
requirements to lumberyard so I'm gonna
particularly point out the things that
we've had to extend and build on top of
lumberyard after that I'll go through
some of the recent updates we've put
into the free point not be in your hand
soon and then touch on some of the
graphics roadmap that's coming up dive
into some CPU parallelism which goes
back to what we Chris was talking about
with Intel earlier and then talk about
some of the mid to long term goals we
have in the graphics and the tech
department so just to start you off I'm
just going to give you a quick video to
show you all the breakdown of one frame
and then I'll go through and explain
what is you're seeing on screen now
[Music]
[Music]
[Music]
so then it's quite a lot to go through
there so I'll try and get through all of
it in time so the first thing we do is
not too exciting but we because we have
this these procedural planets now and
all this procedural content we can't
possibly bake the lighting for all of
these locations so our first job is to
bake an environment probe for that
location that you are currently stood at
on the planet or on a moon or even in
space we still have to do this so this
is a render of six different angles of
the local environment and then we have
to process this and blur this and
compress it all on the fly and this all
happens at the start of the frame now
this is quite complicated takes quite a
while so we split the work up so this
one texture you're seeing here actually
is spread over 20 frames to process this
wing and so every 20 or so frames we can
update the localized lighting to give
you a flexions formula ships or nearby
objects after we've done that next job
is to do the shadows now what you're
seeing here is what we call our shadow
pool which looks a bit weird but it's an
it's 8 K texture and it's where we pack
all of our shadows in so here there's
about six large shadows then there's a
whole bunch of little small ones Crandon
up there so this is something we've
extended from lumberyard we needed quite
a lot of variation in our quality for
our shadows sometimes we need 4k shadows
for cinematics especially for squadron
or something like that or any type of
close up conversation and then other
times we're looking at Levski or
something where there might be hundreds
of lights and we might need 30-40
shadows at once so this system we have
allows us to very to get the high
quality when we need it and the spread
of lots of lights when we need it okay
now we onto the actual frame so the
first thing we do just for a few
optimization is to render out everything
that we think is going to block
something else in the scene we want to
keep the cost down as much as possible
so we have to try and pick what we think
is a good occluder so we find the big
meshes the ones without too many
vertices one so close to the camera we
do a cheap shader and all of them get
rendered first so that's what you see in
here and then this
at the end of the frame we also read
this back onto the CPU and we actually
use that to do an extra set of culling
on the CPU spread across multiple cores
where we can avoid a mesh even getting
to the GPU of the next frame which is
awfully best optimizations not to do any
work in the first place so that's what
we aim for but this also is gets used on
the GPU to hide all the meshes of behind
after that we start about four material
rendering now this is just a tiny subset
of the textures we use on one material
but we can have like up to 15 or 20
textures on one material so this is Stan
from the left its albedo just that color
basically a normal Maps smoothness map a
blend map and a height map and you
typically have this set of textures
twice before on one material but some of
our materials have four more layers and
the planet can have up to 12 layers so
now we aren't actually rendering the
scene so we don't actually render color
we actually render into what we call a G
buffer in what we call the Z pass which
is where we write out material
information like in this case normals
which means the direction that the
surface is facing so as well looks a bit
abstract and then we actually also
render this in multiple stages so we
start off with the planet geometry which
is what you see in here put in all of
our instance objects which here is walks
and some asteroids in the distance then
it's all of our static objects and then
our dynamic objects in our characters
and then also our decals as well and the
orderings really important so we can
composite everything correctly for
example the decals might be like mud or
something you'd want them to apply to
your static geometry but not to apply to
a dynamic geometry they have a different
system boundary now okay after that we
this re at the same time we render into
about between 3 and 6 textures at once
so this is the next texture we're
writing out which is the albedo which is
fancy word for color
we've got smoothness which is how do
opposite of roughness does how rougher
surfaces the white areas of the
smoothest we've got reflectivity which
is
based on the index of refraction or our
harder surfaces so all of our metals
will appear bright white here and all of
our nonmetals will appear a dark shade
of gray here is the hue of the surface
it's not showing too much interesting
here but it's if you had like a gold or
brass something that has a particularly
colored reflection it would show up in
this one we mask out some special
materials so you can see the guy's face
it's got a mask on it and we've also got
the planet terrain we do some special
effects on the surface of the planet so
that needs a special mask and then a
bunch of extra material properties now
these can vary per material so on the
face it tells us how much subsurface
scattering to do to simulate the skin
and then we use that this buffer to sort
of a miscellaneous data we might need
for the whatever material we're
currently rendering okay now onto motion
vectors and this is what we use for our
motion blur and also our anti-aliasing
technique it's not too much going on
here it was a fairly static scene so the
guy is off he got some if there's any
variation in him he's pretty flat at the
moment and it's the planet in the
background which also is a dynamic
object obviously so that's got some
motion vectors but the rest of the
screen is just black which is because we
know that we're stood on the planet and
we know that the static geometry on the
planet must be moving just at the same
space let's paint paste so we don't
actually need to write anything out for
them and that's a bit of an optimization
and the last texture is just a missive
anything that glows or hesitant bright
surface so we've got a some headlights
on the on the helmet and we've got a few
things on the speeder bike and then
we've got the Sun okay after that pass
we start doing all of our first stage of
post effects we have two stages of post
face and for the first one the first
effect is to calculate the atmosphere
this looks a bit abstract because it's
not actually the colour of the
atmosphere but it's just a free
computation to work out how we will do
the atmosphere later and apply a later
stage this is something that's done by
the Frankfurt office the atmosphere and
the result seemed to gamer grade it's
it's great to be able to fly up the
atmosphere and see from every angle all
the different colors you get after this
we've got the shadows so we saw the
shadow map earlier
is a view from each light of what the
scene looks like from their perspective
now we have to apply them to the screen
so we actually render five different
shadow maps for the Sun this is the
first one and as we go further out into
the scene we lay up more and more
distant but low resolution shadows and
then next stage is we have two composite
all of the other point lights in the
scene so this is the Sun shadow and this
scenes got a couple of extra lights in
it but we can have up to twelve shadows
all layered on top of each pixel so
twelve shadows per pixel and as many
shadows on the scene as we want after
that we've got the occlusion so this is
something that the Frankfort team have
just upgraded so the way we calculate
our occlusion is if you imagine for
every pixel you had like a small cone
that was sticking out from the surface
we try and work out which direction it
would point if it was going to be
pointed in the direction of least
occlusion so in the sense of this table
if we point straight up but say in the
corner here if we point in diagonally
and this is a visualization of that
direction you'll notice it's bidding
noisy and patchy in places and have some
weird artifacts so we do a smoothing
pass to go get rid of all that but
that's basically there is an
optimization we can't afford to do two
full occlusion calculations at every
single pixel so we type of mix and match
each pixel there's a slightly different
calculation and once we blow them all
together we get the correct result this
is another part of that this is rather
than the direction of the cone I was
talking about its how wide the cone
would be so from this table we've got
180 degrees of included where I say in a
corner you have 90 degrees of occlusion
and then in a crevasse you would have
even less so it's the same thing here we
pass moving pass to get the quality
higher okay now onto some of our
lighting so this is the first stage of
our lighting this is our screen space
reflections most games do these effects
now so the fairly standard at this point
there's not a huge amount of reflective
surfaces on here because it's on the
planet there's actually just a mirror
just out of shot below the guys foot
which we'll see later a little bit on
the top of the spaceship as well we do
these by tracing little steps across in
screen space to try and find something
that looks like
it might have reflected from a surface
and we can't rely on it too much because
obviously it's based on what you have on
screen so anything that off-screen we
can't detect and we have to use other
techniques for them okay so now we're
starting to look like a bit more of a
game so this is our take surface
lighting pass and this is a hugely
complicated shader that we spend a lot
of our time on and it combines
everything you've seen up until this
point into this one image so that's our
environment probe shadow mask z-pass all
their material properties screen space
reflections the occlusion that's all
applied here in one giant shader so this
is something that has been extended
quite a bit from the lumberyards
implementation we have a bunch of new
things like area lights or rectangular
area lights and a bunch of other
features that lumberyard didn't come
with though we felt a really important
the area lights for example is something
our artists requiring for because in a
sci-fi environment it just is totally
typical to have like those long
stretched aerial hair lights everywhere
and one Fingal notice is the guy's face
is looking a little bit odd the reason
for that is we do something special with
the face for a subsurface scattering to
simulate how the light enters your pores
and then is scattered through the blood
and your veins
so at the moment we're only seeing the
reflections from the face we haven't
actually got the the main lighting and
this is the a separate path to do this
is the incoming light to the guy's face
and then we do this simulation a screen
space simulation of the subsurface
scattering so once we've done that
simulation which is hard to visualize
here but once we've done it we composite
it back now we get to the final lighting
result for the epic scene so we're
looking pretty good at the movement
you'll notice the colors are a little
bit odd and that's because this image is
still in HDR space so the white so
extremely bright and the darks are way
too crisp and dark so we need to turn
that into a low dynamic range color
space later on
so that's comes later though so first
we've got our star applying all of our
transparencies so the first transparency
we have is the fog system so this came
from lumberyard the base implementation
it was a really powerful effect our
artists were absolutely over the moon
when we got this thing in so this is a
bit of a weird visualization but it's
showing you top-down type of what the
fog looks like for one slice of the fog
so it's actually a voxel simulation that
one's in a certain distance a fixed
distance from the camera
and you can see lab of like the blocky
cubes in here you don't actually see
this cube be like problem from your
perspective because if you imagine where
at the bottom of this frame looking up
it's type of the blockiness is in the
depth so you don't really perceive it
from the camera so the next stage is to
light that so this is injecting the
light into that and you can start to see
some some shadows appearing in it and
some shape appearing over near that bike
and then we apply it onto the screen
it's a bit difficult to see at the
moment it's all quite dark but you can
see the haziness
and the glowing around that there should
be a slight glow here but we'll see this
a bit more later on okay
now we start layering on our
transparencies so we've got you know
I've got these rings around the planet
we've got particles bring them in one at
a time we've got the visor on the glass
okay and then once we've got all the
transparency don't now we need to enter
our second phase of doing the post
effects to try and bring the quality to
the final image quality and sort out
these weird colors we've got so the
first stage of this is our optic system
so we're quite proud of this this is it
looks really great it's something we
implemented early last year I believe
and we had it on one of the ATVs so you
might have always seen it but I'll go a
bit bit more into details here what's
going on
so optics were really important for us
because two reasons one we have well
it's a sci-fi game and everyone knows
that we have liked you know these JJ
Abrams likes Isles flares everywhere and
you know that the contrast in space when
you'll still say on a moon which might
be brightly lit but there's no
atmosphere and it's pitch-black above
you the contrast is just enormous
between the brightest and darkest area
and this is something we wanted to
simulate properly we didn't want to fake
it or you know try and crush the rains
like you might typically do in a game
order to keep the full dynamic range
almost as high as the eye actually
perceives which is a crazy large range
but when almost there
so the first state of that is we start
down sampling the image to try and build
these different we call them it Maps
smaller versions of the image and the
reason we do that is for performance we
want to be able to say blur or stretch
like say that the Sun might want to
produce a flare on the opposite side of
the screen and if we need to do such a
large effect we need to run it on a low
resolution so there doesn't your
GPU so here we start making blockier and
blockier versions and we really go down
to a a really tiny image the bottom ones
like 16 pixels wide or something
okay and now we've got many images we
start doing the fun stuff so the first
one is the JJ Abrams effect so we go
horizontal and then we you'll see the
last one this is what it looks like just
stretched but it looks a bit weird so
once we level that image and a darken it
a little bit then we get this nice
horizontal streak well subject to your
personal views on JJ Abrams and then
next stage is to do the type of lens
flares these are a bit of a whaler like
these are physically based we have four
different type of lens distortions we
approximate or simulate and the artist
can choose how many each type of lens
distortion they want so they can say
they want ten elements on the screen and
this one should have you know twenty
percent of this distortion etc and it's
quite sophisticated so they can really
build a different palette of lens flares
so this one is that you can see the
summers that go into a weird shape and
it's got this these coloured hues around
the edge of it which is a chromatic
aberration which happens on but the
cheaper the lens the more you get this
once we darken it down it starts to look
a little bit more interesting still a
bit weird at this point we do a slight
blur to soften it out and also to
approximate the artifacts in the lens
and then we repeat this for a bunch of
different shapes and sizes depending on
what the artist wants and then we just
start compositing this thing together
with all of the different elements going
into one nice giant flare so we're quite
proud of this we'll see what it looks
like
composite in a minute but the main
benefit of this system is because it's
fully procedural it's it's it's based on
whatever the image we've rendered prior
to this point so it's not like the
artist has to say exactly how this lens
they should look on this particular
light it just whatever image we get it
will generate lens flares as a real
camera would do which means things like
the shape of your light really make a
difference to how the lens fare will
appear and it also means you don't have
to have a natural light source just a
light bouncing off a table or something
or or a fire or explosion or laser ball
all these things can produce lens flares
so it's much more dynamic you get a lot
more interesting effects from it and it
also doesn't have to be these type of
crisp layers you just get a bit of a
glare as well so if you're not like a a
moon or something you'll get the glare
coming up from the moon which look quite
nice and final advantages because none
of it is based on the actual scene
content right the art no the artists
doesn't have to manually specify these
things it means that the art directors
can come in later and totally repurpose
and restyle the game by just changing
the lens flares so with the scope of our
game that's really important to be able
to quickly manage all this content
because it is a huge amount of content
in here okay and the final stage of the
the optics is to play bloom this is
fairly standard most games do this in
the same way now but it's also
physically based and also a placement
for Lumbee arts color correction was
next this is a bit of a odd image but
this is what we call a lot a lookup
table where every single color is
represented here and it's a remapping it
tells us how to transfer from the color
that we had in the first render into
what the artist actually wants so it
allows them to change the hue or
contrast saturation things like this now
the last bit of the optics that we're
proud of I didn't mention was this one
DM this is the exposure system which is
something is quite new to us and it's
still being refined a bit the planets
and the moons really push the exposure
system to its extremes
we're quite proud of this we generate a
histogram of the entire scene and we
have to analyze how bright the scene is
and not just most games we'll just look
at how Aborigine bright the scene is and
then they would adjust the image to
compensate so they try to approximate
what you'd get in your eye but we go a
little bit further because of the
extreme contrast we have in the game so
we actually simulate two different
mechanisms the first is your pupil
response so your pupils can open and
close from about four millimeters to
eight millimeters which gives you a
dynamic range of about two to two three
stops on a camera so we have that and
that that can bring you very quickly for
my bike to a dark scene but it's got
this limited range so it can't take you
from an extreme so if you walk outside
from a interior like dark interior like
this to bright Sun you'll get a bit of
an effect but it won't be enough and
that's where the second stage kicks in
which star wobbling cone simulation
which does the much longer type of
exposure and has a much wider range but
it takes longer to do it we don't go to
the extent of real life which can take
40 minutes to adapt to the darkest of
surroundings we crush that down to about
20 seconds so you guys don't get bored
okay so now we have to put all these
optics together so this is our high
dynamic range input we saw before and
then we apply all these bad boys and we
end up with this which is starting to
look a lot nicer now so we've got the
flares the colors look a bit better and
yeah generally the colors honours as the
dark signers dark and the bright Sun is
bright everything's a bit more
representable on a normal monitor okay
so once we've done this we now have to
clean up the image so SMA is an effect
that was already in lumpy art and in
kwangin before that it does a good job
it basically finds all of your jagged
edges it classifies them into different
types like a left-hand corner a diagonal
or whatever it might be there's quite a
few different classifications which
represented by the colors here and then
once it's worked out what type of jagged
edge is it applies as effectively a
smart blur it tries to fill in the gaps
and soften that edge to get the correct
result if you would have been rendering
a higher resolution so if we go from pre
until acing to having it turned
I think if you look say on the left of
the character's leg it does a really
good job at softening what you'll notice
is even though we've it looks great on
the character some of the areas like
this crate still have significant
banding and jagged lines on them and
finish a few of examples over on the
bike over there so we've recently just
introduced temporal anti-aliasing to
hugely improve the results of this which
is something we've been suffering from
for a long time there are tears in this
game so if you look between the two now
I'll say on the crate it completely
cleans up everything that's left on that
and we end up with a really nice smooth
image so this is something that's just
going into 3.0
and the good thing is it's no slower
than what we had before the performance
is almost identical and we've had to do
we're still iterating this we're going
to continue to iterate it but the the
engineer is doing it is really talented
and we've we've taken it one step
further than what we have here actually
now in just in the last few days and his
temple techniques basically work by
looking at the previous several frames
of motion in our case we look at four
frames before fire and we work out from
them previous four frames what the
results should have been there so we
type of we wobble the image ever so
slightly which is impossible to you and
then over the four frames we type a work
out what the details should have been
but in that one pixel and we can recover
that and get a nice soft result but the
problem of using the previous four
frames well there's all sorts of
problems to be honest it's causes a lot
of headaches so we have we also have we
have a lot of moving object softly we've
got you know spaceships that move we've
got planets that are moving we've got
all sorts of things going on that we
might not have an in normal game and we
also have a UI transparent UI
a transparent glass screen a transparent
visor all of these things make it quite
difficult to account for the previous
four frames motion because your visor
might be spinning this way the cockpit
might be going that way you know there's
all sorts going on so I've recently done
a change that hopefully will work around
them but yeah you'll be able to see this
in 4.0 once you get hands on it okay so
that's our final frame looking nice I
think you'll agree so I'll take you on
to the next bit so just dock go back
over some of the updates we've had so
some of this is not just the UK graphics
team but the Frankfurt Engine team which
have done a lot of good work here so the
first one is the P 4k system which is a
new date at delivery system it's
something we use internally and
externally and it means the time to get
a new build is vastly faster nor for
like undescribable faster so we're
really happy at that it basically the
way it works is by rather than having a
few giant data files we just have one
enormous data file but the delivery
system actually goes in and finds the
individual assets that need to change
and only transfers the smallest part
that actually needs to be sent so you
know we can get patches in seconds where
we would have been weighing
hours in the office or you know 20
maybe a typical bill download now it
could be 10 seconds so we've changed the
compression we use on this we've also
added a dedicated SSD streaming path
which allows us to read transfer
transfer multiple files at once
so yeah this p4k system has been a huge
benefit and I think the you guys will
appreciate as well when you get any
patches feeling from 3.0 onwards you'll
notice a significant difference in the
amount of time you set there what I'm
waiting for it to download next one is
the service performance improvements
server performance is something the
Frankfurt team of really been
concentrating on lately even in the last
week one we've been our an EVO party the
results they're getting is beginning
quite a lot of significant improvements
so we're really happy about that
which awfully translates to less type of
jittering or any type of network bugs
we've got a planetary rotation with
something we've really been put it in
which has been quite a challenge in
topic 2 - a lot of text will eyes on
things staying still and like I said
with the temporal anti-aliasing we
expect the floor not to be moving but
now everyone's moving at a thousand
miles an hour and the malware you are
but yeah it's cool you obviously get the
changing light conditions the Sun is
never still so that's really nice I
think the time is accelerated though so
you don't have to wait 24 hours to see a
sunset but when data texture is
something you might have seen on a TV
it's actually just an example of it here
this hologram on the right hand side
they the render to texture is useful
Holograms it's used for all of our UI
screens now it allows us to embed
content into the world from another
location or like a 2d set of graphics
onto like actual in-world things like
the glass or Holograms and yeah it's
been a great help to us next one is the
temporal anti-aliasing which you just
seen the improvements to the SSD Oh
which I'll show you a little bit more
than a minute we've improved the color
correction which is a tone mapping
curve and finally we're started work on
a new suite of shaders the
we're trying to go more physically based
on our shading but we're also trying to
bring in more gameplay driven shaders so
when you have things like damage on a
shade or dirt and if you've like being
on a planet or where if you've been
using the item or object for too long so
all these things we want to have a
visual representation on so our first
version of the shaders is the
physically-based glass we've introduced
which I've got a quick demo of but that
will continue after 3-0 when we go
through all the materials eventually
upgrade in them okay this is the
occlusion effect so this is our
occlusion turned off this is the
previous occlusion if I just go back for
fun see it adds quite a bit of detail a
bit of shadow but a new one so it's it's
different but it's a type of more
contrast you get like the you don't
necessary have more shadowing they get
shadowing in the right places and it's a
deeper shadow and if you look at light
Mark's chin or on his life the side of
his nose and next to his eye there's a
lot more detail in the new version so
quite happy with that but that's
something we're gonna continue improving
in the coming release so we've got our
tone mapping which is how we take the
HDR colors and convert them to low
dynamic range for your monitor so if you
look at this very boring sphere here in
the middle it's got a quite muted shade
on the on the right-hand side of it it's
it's the old tone mapping is crushing
the colors a little bit too much it's
not quite vivid enough for artists they
like to call it pop it doesn't pop so
new version it's a little bit more
vibrant a little bit nicer and it
follows an industry standard asus tone
mapping curve which is we've made a few
tiny modifications but we're happy if
the colors okay onto our shaders so if
we just play this video slice and this
is just this is just an example of the
canopy of the Gladius but we've done a
it's one of the first of many shaders
we're taking a pass on because some of
them are Stanley a little bit old in the
tooth need a bit of an upgrade this
class has things like physically-based
refraction on it it simulates light
they're the color shifts you get from
like a glass when it's type of greasy
there's all sorts of nice joys in this
thing which the artist can't wait to get
their hands on
just to give you an example this is the
old glass we had which just looks like
something that's clean and transparent
not much going on and the new one is
quickly more interesting now obviously
this is this is my program ah once it
gets into the artists hands which it was
only completed this week they're going
to start doing some much nicer stuff
with this and hopefully getting some of
the ship's glass looking better 43.0
just go through some of the effects
there so here's like the fin film effect
I said that it gives you a slight hue on
the reflections we've got a fraction
transmission if you want colored glass
dirt which is one of the things I said
we want some more gameplay interaction
and then as an example of a cracked
piece of glass this one's quite nice
when you get the side angle it shows you
that the the cracks actually have some
3d to them
this is summer Chris and the artists
have been asking for a long time a very
long time but they're they're super
happy that well to get it now and yeah
with the physical simulation going here
it's quite quite involved just to get
this but it looks really good and we're
really happy with this okay
so quick talk on what's to come then so
on the graphics side of things we've got
new hair coming along we were a lot of
work we want to do on the terrain and
then on the occlusion we've got these
gameplay driven material shader as I
just mentioned we've got glass clouds
also known as space fog so we can do
things like fog and asteroid fields and
stuff to make a bit more interesting
we've got a new shield effect on the way
which is going to use our new GPU
particles which works just started on
this last week we've got some depth
field improvements that are coming along
nicely color processing improvements
we've got a quite a lot planned there we
want to really improve the color
reproduction and get the result on
screen much more faithful to what the
artists originally produce in their
packages we've got motion blur
improvements and finally complex shading
models which allows you to do things
like a clear coat which is what you know
on a car to get like the car paint
effect and yeah something the ship guys
and particularly the armour and things
like this they would really enjoy having
a bit more complicated shading on them
okay I just wanted to briefly touch on
something else which was CPU parallelism
and so awfully modern gamers are putting
huge pressure on CPUs we're no exception
we're actually pushing the CPU pretty
hard but the gameplay code is got a hell
of a lot going on there
so in the rendering as well and all
these different systems we have like the
things that Evo was showing you earlier
if the animation we've got the facial
animation system all of these things are
just adding to the cost of the game so
multi-threading is a massive part of
getting our game to run well and we use
it quite a lot and we're using even more
lately to try and get the best possible
performance
so our Frankfurt team are leading the
charge on this our principal graphics
engine sorry principal engine programmer
Chris Polti is is pushing forward of
this and we've got two main systems we
use to get to performance grades so
we've got our batch up data and our
background workers
so yeah a batch of data is basically
it's where we have a lot of the same
work to do so we want to call a thousand
objects or we want to update 50 fosters
or something like that so the batch
worker gets one job with lots of
different elements to it and it gets all
of them done and it spreads on the cost
of all of your CPU cores at the same
time and that's been a huge benefit for
our gameplay like it's very easy to take
all of our like I said our us toes or
something like that and then we can just
match them all in one go and we get some
huge performance wins from this so a lot
of the game code as we made to make use
of this now and it's been the bits that
haven't been are being converted over so
this has been a huge improvement lately
and the other mechanism we have is our
background workers so these do stuff
that we don't need as immediately and so
say something like the streaming system
we need to stream in a new texture or a
new mesh or whatever it might be or some
audio and that doesn't need to happen
immediately but it needs to happen
gradually over time so these background
workers they kicking whenever the bat
worker isn't busy so they are being
programmed a very smart way using fibers
that means they can kick into action as
quickly as possible to try and fill all
the gaps between all the work that the
the background work so they're what's
called everyone's working mix so okay
and something else to mention which goes
back to what chris mentioned earlier is
the background workers are really
tightly coupled to our IO system now so
in the case you have an SSD or obtain we
can read multiple files at once and we
start decompressing them the second one
chunk of that file is loaded in so we
actually are posting up to say four
files at once and we can be decrypting
many files or decompressing many files
at once depend on how many CPUs you've
got so these two systems together mean
we can get data off the disk extremely
quickly which is really important for us
because them fast amount of data we have
in our game okay
and just before finish just one last
slide just to talk about some of the
things that are on the horizon and we're
hoping to get onto you soon so object
container streaming is something you
might have heard off on a TV
it's type of each chunk of our game well
than a level which makes no sense for
something other colors and each likes
inferior of a spaceship will be an
object a nur a spacestation might be on
object Ain a single shop in a in a space
station might be an object container
this is type of the unit we used to
build our soul systems and we're working
on the streaming support so that we can
very quickly load and unload these
things dynamically without affecting the
frame way and fellow hitch so that's in
progress the planet effects so we've got
all sorts of things we want to do on the
planet some have been started some are
not so soon but we've got things like
improved shadows like a bespoke system
for shadows clouds we've probably seen
some demos of the first version for
clouds there's something want to
continue working on and there's many
other things on the planets like roads
and other such things and then in spaced
equally we've got things like stars of
the Sun and rings around planets we need
to get all of these effects improved
we've got some of the basics in for them
but there's a lot further we want to go
on that and then dynamic global
illumination so we have this on the
planet with the environment probe you
saw at the start a presentation but we
need something equivalent for the
interiors so we can accurately update
the lighting and this is crucial because
we want to be able to shoot out
individual light bulbs in rooms and have
all the lighting correctly update and we
can't just tint the lighting or just it
fake it we need to have to do the we
calculate everything from scratch and
the reason it's more complicated
interior versus on a planet it's just
because the number of light sources that
are involved we might have like you know
in a room like this might be 50 light
sources in the room and to calculate all
that while somebody sat there shooting
all the lights out of a machine gun is
there's quite a lot of optimization
needs to go on there and then next few
things so we've got to use the batch
work as we talked about earlier we've
got two threads we want to processes
that compute the rendering and the
physics and they are still done without
the battle worker so we need to convert
them over so we get some extra
performance wins and then after we've
when we've done the render one when
we're finished that off that's what's
what's going to enable us to really take
full advantage of something like Vulcan
or these these new api's that really let
us on the graphic side likes but it the
work was as many calls as possible and
we're really going to get some real
performance winds okay and that sums up
so I'll hand over to Brian hope you
enjoyed
thanks Ali I don't know about you guys
but it's like a wall of information
right luckily these will you know
they'll be on online so we'll be able to
check them out and actually see it a
little bit slower if we want to so cool
now we have time to open up to QA you
cool with that yeah awesome would take
questions from you guys in the audience
I think we have some guys with mics
around if anybody's interested you can
just raise your hand and we'll run up to
you I'll start off with the first one
very generic as always as far as tech
goes and what you're involved in what
would you say would be some of the one
of the most unique challenges for star
citizen and the work that you need to do
unique it's probably the scale compared
to effin have worked on previously
yeah the scale in type of two aspects
you've got the physical scale obviously
you know solar systems and planets and
everything is ginormous and dealing with
all that and having a lot of effects
work on things like I said like rotating
planets and the loading of all this data
and managing all the data is like a huge
challenge which normally get these
little confined levels where you can
type of issue more well and rendering is
all about assumptions you make some
assumptions and that's how you get the
frame wave and it's very hard to make
assumptions on you've got a completely
sandbox open universe and the other part
of the scale is like the gameplay
obviously you know you can't assume
anything is fixed you can't assume
anything is gonna stay looking like it's
gonna look you know something might be
there a minute and then destroyed the
next minute everything's type of dynamic
there's so much then I make emergent
gameplay again it just like that
it stops has been able to assume
anything so then we have to be much more
creative and how we can make things fast
and look good while still supporting all
the great features there when obviously
once yeah I've heard that actually
across other disciplines as well and
it's true I mean with just the vast
scale there's so many of the things we
need to keep in mind when we're crafting
something as opposed to a small little
area and so on anyone have any questions
from the audience
whoever has a mic somebody up front no
no here you go right behind you
we'll start with the one blind okay it's
not really a question but I want to say
thank you for your hard work you do
that's awesome
I'm a prize to everyone at the team a
lot of work fighting about a lot of
people wait for the mic here comes I
just want to know if it's possible
thanks to render to texture to have
internal bridge of a starship like in
Star Trek though you might be say for
the polar ice for instance or a
secretary bridge for the interest is it
possible let the current tech depends on
you to find possible tectal yes it's
completely possible you could do right
now it would work it's fine weights the
issue if you want to vendors the exactly
the same thing or the same quality in
you on asteroids and fog and all of the
post past we just looked at then you're
gonna have your framework so it's very
easy to be smart about this stuff and
reduce the cost and for things like
Holograms will reduce the number of
lights we vote apply certain post
effects you don't need say like a
hologram doesn't need anti-aliasing
maybe because it's already quite soft
and blurry so there's a lot of scope for
doing things and I say something like a
depth camera or a heat vision these
types of things I will a much simpler
actually although they might look really
cool there would be much easier but
doing the full rendering pipeline on a
full screen would have to be quite
intensive on the framerate so probably
not type of that side but yeah it's not
a technical question is just purely
performance and how much we want to be
able to let the game scale back to a
lower spec system so that's all we have
to keep in mind for that but it gets
asked by design everyday so you know the
only one either
I'm from the graphics area myself and
I'm kind of like astonished how much PBR
is getting now into game engines so this
is a quite extensive resource drainage
like in terms how much your cars have to
calculate
do you communicate with AMD and NVIDIA
to further develop the PBR based
technology yeah I mean when it comes to
the physical base stuff a lot of its
just to be honest there's a lot of
research online that we tend to look at
for like the latest SIGGRAPH or GDC
presentations there's a lot of
information out there and how to do the
techniques but when it comes to the
performance that tends to be where we do
have contact with the independent
hardware vendors like AMD and NVIDIA
because things like the I mentioned the
opaque lighting shader is one giant
shader that is really really difficult
to get to run fast and that is really
difficult to balance across all the
different architectures and that's why
you type of need to work really closely
with them to make sure that you hit
certain the certain like performance
cliffs you have and you know if you have
one instruction over you get you dropped
like 30 percent performance so you need
to know where these boundaries are and
make sure you fit within them and it's
different for every single graphics card
so yeah there's quite a lot of
cooperation there a follow up on that do
you do research and development on
yourself or is that something where you
take it from the developers from AMD and
NVIDIA like say we type of we don't
necessarily take it directly from them
and they do they do papers at GDC and
SIGGRAPH like everyone else does and we
take it from whoever's got the best I
mean we do a lot of stuff internally
like say the the optics stuff we showed
that was all in-house one of our
graphics programmers just came up all
over himself he did a lot of research
and all this stuff but other stuff like
said our area our implementation we took
a lot of research on that that's been
done by other game studios and other
places like that but yeah it's there's
no one source it's wherever the
information is you know and it's quite
open in game development of people happy
to share just like we're showing the
guts of our game here it's it's quite
open so he's coming
a follow-up to the render to texture
question so you mentioned that like
doing some sort of VR cockpit would be
like too much of a strain on the system
but what's the extent of it like for
example we've seen on the RSI Explorer
armor it has like this camera looking
thing mounted on the shoulder so for
example like sending an away team and
having like their point of view
displayed in the cockpits would that be
possible at all so I mean so you said
it's possible but would it be reasonable
and I'd have to see the actual case to
say yes or no I'm not the designer and I
don't know we have to sometimes we just
run this stuff and just test what the
performance is you never know and you
got like a hundred different graphics
cards you need to test on but generally
we'd the advice we've been given to
design is if you we've got a page type
of show and what is likely to be
possible and what's not but generally if
it's a type of any type of constraint on
the scenario means we can probably do it
so you know if I'm in a in a certain
room and it doesn't have too many
windows or any windows I can probably
get a view of someone else fine because
that room can be made to budget you know
to take up a certain number of
milliseconds in the frame and then you
you're free to do the rest of the frame
but if you in an open environment with
windows and you can see asteroids
planets and everything and then you want
to look another view of another planet
and another set of asteroids that's what
we can't do so as long as there's a
constraint I've won the main senior
studying or the other scene that you're
looking at then that type of what
dictates so it's a bit of a balance a so
it depends where you are and what you're
looking at I hope Lance's we had someone
up front yes I you said there was a lot
of strain on the CPU I was thinking is
there CPU you would recommend one with
more threats 8:12 no not particularly I
can save one or the other I mean
multi-core is just the key though like
going wide is is the direction we go in
the way that everyone is going obviously
the higher end CPUs like I seven to nine
irons there's plenty of bandwidth there
and we're doing our best to fill that so
yeah I mean the single course they can't
you could never could be on a single
court me nobody has single course now
but you know there's there's physical
limitations that make it extremely
difficult so go and wide is the way
but in terms of a particular model not
particularly now we have time for one
more quick question
most games I played recently using fake
mirrors like Freya for example would it
be possible or maybe this one question
would it be doable without tanking the
framerate to use real minerals so I can
even beat that cutting quite hair today
most games using fake mirrors today
would it be possible to use a real
mirror image without tanking the frame
rate too much again it goes back to
Atlanta yeah after the last question yes
we can do a mirror it's not we actually
have to do a little bit of work because
a mirror isn't like a camera it's
actually the fact that it flips the
image is something you have to do that
and to inside the rendering you have to
invert and reverse all the geometry to
get it to flip correctly but it is
technically possible is something we'll
want to do but again is the constraint
question if you're stood on the bit of
an address or something and then you
want a mirror there you know next to the
captaincy that's going to reflect the
rest of the address and outside then
know if you're in a bathroom somewhere
maybe yeah that's completely achievable
cool will think you are Lee for your
time thanks for everybody thanks guys
we're gonna take a short break roughly
ten minutes next up will be the joy on
history physiology and language thank
says
[Applause]

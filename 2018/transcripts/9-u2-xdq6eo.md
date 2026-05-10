# CitizenCon 2948 - Panel: The Art of Digital Illusion

**Video:** https://www.youtube.com/watch?v=9-u2-xdq6eo
**Date:** 2018-11-01
**Duration:** 17:32

## Transcript

okay thank you all for coming thank you
all for watching today and in the future
online apparently my talk is called the
art of digital illusion although all
that means is about VFX so to begin my
story we have to go back in time to
March of 2017
or the first version of our brand new
GPU particle system was submitted and
you might be wondering what's so
important about GP particle system
well key difference here is a speed the
past we only have CPU port system and it
was kind of fine we still reuse it but
to understand why it's so important to
have a GPU port system we have to look
at costs involved in any Oracle system
out there so there are two types of
costs rendering costs an update cost and
rendering cost is basically what you pay
for displaying particles on your screen
so the more particles you have the
higher the cost is the more complex
lighting calculation is the higher the
cost is but truth being told it doesn't
really matter if your particle system is
running on their CPU or GPU the cost
here is roughly the same then we have
another cost which is more important the
abra cost and here you paying for
figuring out where particles should go
like how do they move when did they move
even if you're paying for figuring out
that particle does not move and the
point here is that CP is really good at
doing like gameplay code so every single
frame kind of can do different section
of the code that's why we do gameplay on
it then we we have GPU which is your
graphics card and that's really good at
doing the same code over and over again
and the particle system itself is like a
one huge block of code so basically what
you need to understand it's so much
faster and here we can take a look at
some numbers I've taken from old
CPU particle system effects
and your typical spark effect had
anything like 15 30 particles that find
but not too many then your typical
spaceship explosion had like 20 50
debris pieces that's well Wow then you
got smoke trails for free maybe one an
each small trail has you know particles
along so it's roughly about 30 parts per
smoke trail and if we take a look at the
numbers on the GPU particle system the
new one it's actually much higher like
these numbers actually taken from actual
effects in game so spark effect is now
anything between 100 to 300 your
spaceship explosion can have like 2000
degree pieces you can have like 40 smoke
trails and what's funny about these
numbers is that we can go higher on some
of the effects but it too much we don't
want to do it on the CP we just couldn't
get high enough you know so it's kind of
like the opposite we had too many and to
put sorry that's a different slide yes
so be the first effect that we ever made
with the new particle system was kind of
an exciting basically engine trails but
these are the most complex colorful
lines I ever worked on we had to try few
different actual you know tech
implementations to do just v's but it
wasn't quite fast enough like after a
few months of work we made this new
particle system and only then we do
engine trails though that's why it took
so long like we had them I think like
2012 when we had like one vehicle on
screen then we have to take them out it
was just too slow so a single trail can
have like 2,000 particles and the true
being told it cannot optimize anything
here if you go too low on the particle
count kind of looks like that that's
probably not what you want and we tried
doing so
on the CPU particle system the old one
and we killed the game with just two
engine trails on screen and probably I
don't have to remind you that this game
has more than one vehicle on screen so
that wasn't really a good option so
another type of effect that greatly
benefits from this new particle system
is your explosion and the thing about
explosions is that has so many elements
like you know fire debris Sparks and so
on and if you go to Long Count it just
doesn't feel right it's not chaotic
enough you need that kind of you know
additional stuff on screen yeah and you
may think that I'm just talking about
like quantity all the time
but in world of VFX quantity is a form
of quality so let's take a look at
reclaimers explosion first it's gonna be
an explosion without all the GPU power
system elements it's probably fine but
once we turn them on you'll see how more
elements you have on screen like it
suddenly feels more defined that feels
more complete and we compare both at the
same time you'll notice that for me just
looks better hopefully it looks better
for you too and the thing about GPU
particle system is that it's not only
about amount it's also about cool motion
so we implemented so-called Carroll
noise and in computer graphics noises
are types of algorithms that are
producing either images or data and
Carroll noise is a type of noise can you
hear me cool awesome so yeah I heard
some noises I'm talking about noise
heard noise
yeah and curlies is actually producing
data that we can apply to particles on
the GPU and push them along and it looks
like that
that's Carlos applied to particles I
also applied some color to make it more
you know readable and the Croy's is a
free denoise basically 40 but 40 means
is free d but it's changing over time
that's why we can have these worlds
because the noise is changing it's
adjustable so it gives us a lot of
flexibility to work on and it's just
cool so with one effect that would be
impossible to make without the kernel
noise SJ chantek quantum drive fact if
we take a look at that it's without all
the GPU elements it's fine lines and
such these kind of tentacles they are
entirely made on the GPU particle system
it's about like 30000 particles it's
just absurd the number just silly and
then we have krill noise on top and it's
giving that wavy motion which is pretty
cool I think so again without anything
with Carrell noise and GPU particles 16
secondary element of this effect but
doesn't feel right without it sink
complete so another element another
feature that we have our forces and
basically we have two types of forces
vector fields and signed distance fields
and vector field is kind of like
snapshot of wind you can bake it in your
fede up bring back to the engine and
that's head of pushing particles around
but there is another one signed distance
field it's kind of complex but the point
is with signed distance fields you can
produce artificial gravity so you can
kind of pull and repel particles that's
how texture or vector view looks like
and that's signed distance field it's
too long to explain today but it looks
different all you need to know today
so the actual effect that's using signed
distance field is reclaimers gravity
sphere here you can see all these sparks
they are actually attracted by gravity
that we have in this area so they kind
of are coming to the surface you know
it's selling that impression of gravity
without signed distance field it would
be so complicated to do it I don't even
know if it would be possible and then
because we can animate the whole thing
in time we can do like gravity repelling
so it's kind of bringing the sensation
of instability and it's actually good
because that comes from the emergency
State and I hope you notice because that
there has some fire okay so now comes
the second part of this talk which is me
layering up hammerheads cargo room and
there's also emergency stay the effects
so at the beginning we're gonna take a
look at the room itself it already has
some volumetric fog applied and some
animated lights
so for VFX artists it's kind of giving
the impression of like what we should do
next what we should do about this room
but there's not much happening here we
have these generators over there with
flashing lights so we probably want to
do something about it
some machinery here and there so there
is plenty of elements that we can play
around with so the first thing usually
we are adding obvious stuff so we're
gonna do some smoke and steam here you
can see all the steam added and it's
actually using the CPU particle system
it's not too bad still and it's it has
better lighting calculations than the
GPU one it's just because we didn't
implement it yet on the GPU so we
probably want to switch all the effects
to the GPU because so much faster and
yeah we can use the volumetric fog to
define word all the steam should go to
kind of you know and reach the overall
feeling of the room next step probably
want to add some fire
guess what why not and because we have
all the imaginary intact we can just
destroy it by adding that and to me it
just you know suddenly feel like there's
probably some oil inside or
the only thing that that's flammable
there is some steam coming out of it
there is some fire
so some we can kind of feel that it's an
actual piece that's doing something and
we are not putting fire everywhere this
doesn't make any sense can only putting
that on top of machinery that could
actually emit fire because something's
burning next step sparks because all the
effects do need sparks and that's
something I mentioned before we can do
like a hundred or 300 particles in your
spark effect we are actually doing so in
the past we had like I had no 10 look
fine but not not too awesome really so
that's actually better like with the GPU
we can really unpop the count and that
the fact of sparks falling down the
ceiling try that on CPU here is before
didn't work like kill the game entirely
but fine but you know you don't want to
play with 2 frames per second because I
wanted to do some sparks in the game but
we also have like tiny features that
actually I like it like collisions on
the CPU we can do collisions with the
environment but it's so expensive we are
literally turning it down so you can
have like 5 particles colliding with
anything on the GPU it's so cool that
you can sample the death buffer or the
game you have it already and it's super
cheap to do collisions like that without
collisions and that's without collisions
on so you can see that bouncing off the
surface and it comes literally for free
the drawback is it's only colliding with
stuff that is on screen but then again
if it's not on screen then you don't see
it so we don't have to collide so it's
not really a big deal so let's take a
look at what we have so far that was the
empty room we had when we added some
steam we added some fire
we added some sparks suddenly kind of
feels better but we want more that
that's not enough so these turbines they
definitely do need something and I've
seen a movie in 1999 I think and had
some like a space pod facing I think
they were kind of Turing to turn them on
and off that kind of resembles me of
that so definitely should use some kind
of spark coming out of these kind of
fans it looks better and then again is
bringing that fiction of machinery like
these turbines I want to
you imagine how it would look like how
does this machine work how it would look
like when it's destroyed that's kind of
bringing that sensation I think and next
thing vector fields I mentioned them
haven't shown them really it's a
snapshot of wind so that's without it
and that's with vector fields on so the
idea is that these energy cores are
generating heat because they were
damaged and if there's heat the air
moves around and if it moves around
probably should push all these parks all
this stuff around so what we can do is
that we can take the whole scenery back
to the PDF do like a fluid simulation
save all the movement into a texture
bring it back to the engine and it's
kind of pushing them it's like an
artificial artificial Windham next step
is drinking water and adding some energy
on top so once we have all the wind it's
kind of silly not to use it so to sell
the sensation of wind moving around we
should just add more particles and then
get all the swirls and what I mentioned
is that we are taking the whole scenery
back to the 3d app and we're kind of
simulating air movement around all the
objects so all that motion it's it's
actually these particles are avoiding
all the obstacles if there is like a
like a pillar over here the air would
wrap around and we actually simulate
that and free the app takes forever but
in the engine once we save it takes no
time to actually you know do that type
of stuff the thing it brings that
natural sense of motion and such a thing
is making more real and I think that's
that's all about it like this game
should be a little bit more real than
then without all the particles so
another thing I mentioned that these
generators they should be producing heat
but they don't look like they are so
we're gonna add some VFX on top and
suddenly kind of feels more connected so
you got these generators they do have
some VFX inside so it's kind of selling
this impression that there's heaters
kind of moving around like without this
effect
you would get particles a meeting from
nowhere that's not another step of of
kind of bringing fiction of of machinery
to life and the last step is quite new
actually lightning
so with GPU particles we can actually do
more we yeah in the past we had
lightning system but the problem is it
wasn't it wasn't like scaling we
couldn't do small lightning yeah now we
can write like you can see one thing to
mention
unfortunately lightning won't be in
hammerhead soon it's gonna be like
probably three point four just because I
we finished that system recently it's
ready to use but not gonna learn in the
game like put in I know
possibly two months or so but it is
there it's gonna be there so expect that
to happen soon okay so finally whole
scenery with some music on top yay
[Music]
[Music]
yep some all the destruction coming to
your hammerhead soon thank you
[Applause]

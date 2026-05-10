# CitizenCon 2948 - Panel: Breathing Life Into Content With Physics

**Video:** https://www.youtube.com/watch?v=HjHn0iUpBVE
**Date:** 2018-10-18
**Duration:** 26:17

## Transcript

please welcome technical director Shawn
Tracy and senior tools programmer Andres
roar well great uh thanks a lot for
coming guys
star citizen citizen Khan 2948 so I've
been doing these for a few years so it's
pretty fun and I'm super happy that you
guys came to our talk because who cares
about spaceships and his face game right
exactly
let's hear about content in physics and
cloth simulations and all those manners
of things so before we get too far I
just want to introduce myself and
Andreas for those that don't know me I'm
Shaun Tracy the technical director of
content at cloud Imperium games and with
me on stage today is Andreas roar he's
one of our senior tools programmers out
of Frankfurt so thanks a lot for flying
all the way out from Frankfurt he works
very close with our engine guys on a lot
of the stuff that we're gonna show you
today so really happy to have him here
with us today all right so let's dive
right in now there's a bit of an
introduction I want to talk about what
we're actually gonna do here so
environments and even characters in some
cases within start system have arguably
been a bit static and recently the
physics engine and game teams have been
making a really concerted effort into
helping bring some life into basically
all our scenes and with our content
using physics on our assets so this talk
is gonna cover some of the work that
they've been doing and some of the
features that aren't in design are now
able to start using within star citizen
and squadron 42 so before I get too far
I really want to give a big shout out to
the guys that have actually done this
work and allowed us to kind of represent
it in and show you guys today cuz this
is super early stuff we've only been
kind of having this online in the last
let's say month and a half two months or
so so I'm really happy for guys like
Chris rein and the physics gurus over in
Frankfurt to kind of let us show you
this in a very early state they were
quite nervous obviously about that I'm a
little crazy I want to show you guys all
the stuff all the time
but of course this is really important
that I give them a really nice shout out
and it's really we're really lucky to be
able to kind of stand up here in rep
those guys okay so let's actually talk
about what we're gonna talk about the
talk is split into two sections first
we're gonna talk about environments and
this is gonna include things like planet
wind we're gonna talk about the wind
entity which is something new for us
we're gonna talk about kind of an
animated asset or content versus a
simulated asset so doing physics to move
it around or basically having some sort
of pre-camp animation then we're gonna
talk about environment cloth itself so
this is our entity cloth we call it then
after that I'm gonna pass it over to
Andres and he's gonna talk about
character cloth now this is unified now
with our environment tech and this
wasn't the case up until now then we're
going to show you a bit of a
demonstration with the implementation
that we use right now because obviously
you do have cloth on characters and
stuff in the game already but it's a
pendulum simulation versus a vertex
simulation just show you guys the
differences between the two will show
you better the actual workflow that
we're using and that he's still
developing right now so that you know
the artist can work on this a little bit
faster and then we'll show you a little
demonstration of a multi-layered cloth
so this is the thing that we couldn't
really achieve before this kind of
content and then finally we'll talk
about some of the physics of the future
yes yeah that's a nice one
we can sell that one all right so why do
we want to simulate things physically
now using physics simulation at runtimes
and games is often preferable to using
sort of pre baked animations especially
when placed in dynamic environments so
what do I mean by a dynamic environment
dynamic weather and wind it needs to
kind of support things like weather
effects you need to be able to do player
collision you need to be able to react
to explosions that are nearby you need
to be able to react to AI collisions all
kinds of things that will change around
it so you can't just pre cannon
animation as I did do that
you'd rather simulate that physically
but there's problems with that obviously
comes performance implications and
things like this so we had to solve all
of these so generally when activity is
going on near the objects it should be
reacting appropriately the other thing
to why to use these physics is actually
content creation itself becomes way way
easier when we have to make an asset
that's just simply
it actually goes through a lot of teams
so it goes from design to art to rigging
to animation back to design and finally
in the game that's a lot of people to go
through and especially when you're in a
an international corporation that that's
got to go through time zones that takes
a while instead of just having a
designer take an asset and it's ready to
go so what has been the state of of
simulating such assets for us up until
now well it's been really expensive as I
mentioned in terms of performance and
generally relied on Lua now if you've
been keeping track of our object
containers streaming work you'll know
that we had to remove Lua completely
from the engine this was a huge deal to
do and what that meant was things that
were previously working before didn't
work at all anymore so you know it's not
that this isn't revolutionary by any
stretch but we did have access to
similar things but there were big
assumptions that those older entities
were making and the biggest assumptions
of the pre-existing entities were things
like assuming setup like dead is always
going to be up or Z I'm sorry it's done
Canadian and ultimately they hadn't
changed much since earlier versions the
entrance so they just weren't suitable
at our scale nor for the performance
implications that we have so we'd
already tried a few techniques
previously but they've even proved too
expensive that I'm sure you've seen them
within demos you know tarps floating the
wind flags and things like this they
were either too expensive to run on a
planet or the tools and entities just
didn't work anymore so generally we
didn't really have a planetside location
that needed a lot of this so it wasn't
as big of a deal but now with Hurston as
you've seen there's wind there's
atmosphere there's lots of stuff going
on near these objects so it's very
important that we brought this online so
and again thanks to our amazing work
biophysics crews back in Frankfurt that
new implementations are now usable by
art and design for things like
constraints soft bodies environment
cloth and last but not least character
cloth alright so as you saw already in
the demo we have wind on planets so even
tweakable to each of the planets and
even to each of the ecosystems which is
really cool so this was created by our
planet technology team this helps gives
tons more movement and life to otherwise
the static environment if you saw those
trees just sitting there not moving at
all it would take you back to the you
know early 2000 even early 90s of games
where the stuff just didn't move around
as mentioned previously this whole wind
system it did exist that we had wind
four levels but again this would only
this needed to be rewritten to work in a
non flat 2d world basically this is
actually you know involved around the
sphere so the the wind in the end has to
be relative to this a spherical position
on the planet so you can imagine how
that's actually a little bit difficult
so changes were mostly related to making
that whip work in 3d on a sphere so the
second type of win well I'm sorry let me
show you a quick video here so this is
the savanna biome that you saw a little
bit of I'm actually right behind I'm
sorry right in front of the crashed
crashed satellite in this particular
video and I just wanted to do a quick
pad because you see how much life
already that brings so you see leaves
moving in the wind you see it affecting
the particles you see it affecting the
grass and again this is the wind flowing
through this just happens so now again
this is set on a per biome level but
even at a per biome level that scale is
pretty gigantic so now on a much more
isolated level we have a new type of
wind um that that all mixes in with in
the planet wind it supported it's called
the wind area entity so this is what you
see an image of here and here so the
wind area itself physically simulates
the air with a given resistance
viscosity and it moves in a user-defined
direction at a user-defined speed and
users meaning the designers basically
they can select this entity and set all
of these things really really quickly
so generally if no direction is set the
wind source moves omnidirectional II and
that's what you see on this image here
it's actually a sphere of wind so this
is all emanating from a single point
outwards and then if you give it a
direction you can see that we have these
nice little debug arrows and that's
gonna actually give it a very specific
direction that it is so this gives the
designers the ability to actually
localize their wind a lot more
realistically the other thing we do with
these is we like to attach them to
things those things like the back of the
ship
for example if you got thrusters and
things like that so both of these
eventually need to work into the wet
weather system that Chris Roberts is
obviously very keen for us to start
working on but these are the stepping
stones into something like this okay so
let's talk a little bit about an
animated cloth versus this new extended
cloth entity so sometimes animation is
suitable to do especially if the players
not going to be near it or nobody's
gonna really affect it but again it kind
of has to go through a lot of people so
it's really it's not that great because
it's not affected by dynamics in the end
so let me show you a quick example of
that going on so on the left on the left
sorry
we have a pre-baked one now all these
little gizmos you see there are actually
joined so there's like there's 30 40
joints moving this around now these two
tarps are actually placed on boxes I
removed the boxes obviously so it takes
a certain amount of markup to still get
our entity cloth reacting to this I've
also got now a wind entity that we just
talked about and I'm gonna move it over
the dynamic one the video pause I'm
sorry I got excited and I clicked on it
so you see as it moves around that
actually reacts very realistically to it
and again it's it's marked up as if it's
on boxes and we do this just with vertex
colors so we can make an asset we can
mark it up and as you see when I move
the wind entity over the animated object
nothing happens right because this is
just a pre-canned animation doing the
same thing and this will collide with
players this will move into any-any the
wind direction changes and you as you
see I'm just pulling it all over it so
if any explosion happens is there any if
anything dynamic happens it's gonna
react appropriately so that sort of
gives you a good example of look there
we go sorry a good example of why
sometimes you want to make this dynamic
rather than rather than pre can sort of
animation and again it saves on our
joints saves on animation saves on a lot
of work so let's show a couple of the
features of this extended cloth entity
so this is kind of a fun thing now our
physics group Chris rain really really
wanted us to do this really nice sort of
ship reveal with a nice satin cloth and
everything but we had a lot work to do
for this demo and some other stuff later
on
so it's close its close to what he
wanted I hope I hope he's happy with it
so the physics team similar to the Rin
had to rewrite this cloth entity
implementation completely from scratch
it was really important because we had
some trouble with earlier versions and
it's not only that it didn't work on at
the scale of planets and assumed things
like set up but there was there was
other problems with the earlier
implementations within the engine
anyways and most of the most these
problems related to instabilities within
the simulation and what that would cause
is something called we kind of call it
poly soup it's like a big ball of
polygons that just can't recover from
the simulation so you can't ship a game
with that kind of stuff if we shipped it
out to and who had an interaction like
that I mean that that's not acceptable
to us so we had to change that so major
culprits of the poly soup are usually
the topology of the asset itself and
without going too deep into it the
geometry being simulated has to be
really regular faces or the the face
areas have to be the same otherwise
you'd end up with this sort of poly soup
ball ultimately the issue was that the
topology of the render mesh and the
simulation itself were were coupled so
basically whatever your render mesh
topology was that was how it was gonna
simulate we've decoupled that now lastly
we didn't have self collision before so
cloth couldn't collide with itself
that's an important component because it
means you can have freely flowing cloth
meaning not attached to anything you've
probably seen it in a million games they
have you know some tapestry up on the
wall or just something hanging from
something and very seldom do you ever
see free-flowing cloth just moving
around soft body in the world so let's
get this video going cuz I'm already
going over time sorry all right so I've
got a quick video I just threw an M 50
down on damar and I got a couple deck
crew taking care of it I was getting
lonely so you see I spawn up this cloth
and it keeps pausing sorry about that
I spun the cloth in and I just turned on
our AI physics and basically physics
starts simulating and that drapes over
the ship just as you would expect it to
so now I keep playing around with it a
little bit and there's so many different
properties actually exposed directly to
the designers for something like that so
I need to mention that this is of hyper
fish and simulation and there's a
certain amount of it's a user-defined
variable for friction right so we can
pull the ship out and I can change the
friction so that that thing will slide
right off or it will kind of hold on to
it but now I'm gonna do something a
little more extreme and this is where
you really need the self collision so
there you can see it fold up upon itself
and we're gonna run it again just to
show you again this is it never gets to
a state that it can't recover in terms
of the simulation and it's always going
it's a purely deterministic simulation
regardless of the frame rate and time
step size which is a big big deal for us
it's also unconditionally stable so it's
never gonna explode and will fully
recover so when I mentioned those wind
entities before and sort of attaching
them to the back of the ships and I was
just wiggling it around under it just to
show you how how dynamic that stuff
actually is so let's say you had I don't
know a little flag on the ship or you
know you might have a Superman ship with
the cape on it who knows so I dropped it
on the back and I've got a little wind
entity actually attached to the back so
let's turn on the ship and it blows off
onto these poor guys back there so we'll
do that one more time because I don't
know they need it so now you can see
their heads poking through that was my
fault actually on the topology of the
asset itself it just need to be a little
bit tighter for collision and you can
see that that wind is still going on in
to flutters down on to the point nicely
so I'm going a little bit over time so
I'm not gonna go over a too deep of the
other things but again this is early
times you guys are gonna see tons of
this now within the environments and
yeah I'll pass it over andreas who I
sucked up two minutes of your time I am
so sorry that's not gonna be a problem
thanks Ron
alright so I'm gonna talk about
character cloth as Shaun has told you of
the soul had been rewritten completely
from scratch and previously we've had
two different pipelines two different
solvers and that's always like a pain in
there it's a big pain to maintain these
two
it needs like separate teams to do that
and like yeah so the unification is
really a big deal for us and the let me
tell you a little bit more about how the
previous system worked that sean has
mentioned this so called pendulum
simulation so imagine like the
characters called our characters in the
game they have this internal skeleton
which is made up of joints or bones as
they're called and these pendulums are
essentially extensions of these
skeletons so there they were used
primarily to attach more kind of rigid
they're like simple orbit objects like
for instance grenades attach them to a
body or like a rocket launcher at you at
the back of your back and whenever you
moved this this stuff like wiggled
slightly around and it wasn't originally
not really supposed to be used for more
complex simulating more complex types of
objects such as cloth shirts capes
trench coats whatever so what they did
was like in earlier titles that used the
system they created ropes of these
basically joined chains and created
several of them and connected them
together so they would form something
like a sheet of cloth but the real
resolution of these things I was always
very very course so I've always liked in
terms of like fidelity and now with with
this vertex cloth approach you have the
ability to put a lot more detail into
these meshes and that results in much
better looking simulations so as you can
see here website is which shows vertex
closure the new stuff is is on the left
and you can see like you can see all
these wrinkles going on creases fold
folds forming dynamically reacting to
the animation of the player the thing is
like in general in terms of character
cloth
the problem with character cloth is that
the characters are much more dynamic
than environments so even though with a
new cloth our environment cloth can be
more dynamic and can move move about in
the environment theoretically
Merilee it will be curtains or tarps
flags this kind of stuff across on a
character needs to undergo much more
stress because who knows what the player
ends up doing with the character they
jump out of their ship and expect to
land somewhere and that cloth still
looking nice and neat so for for the
physic solver that's like very demanding
so we're quite happy that this new
solver is very stable it doesn't explode
sometimes like for more extreme cases
you need to help this over a little bit
and that's why we have these mark-up
tools for so I worked in the film
industry on cloth simulation and soft
body simulation for a couple of number
of years and in the film industry there
is this well the industry standard there
is digital content creation package and
called Maya and that inside has a solver
that's called ncloth and yeah so this
this particular solver is kind of the
industry standard it's quite robust it's
easy to author and so my idea was
instead of creating new authoring tools
within our sandbox editor which is a
significant amount of work to do that
lets just use Maya because for instance
all our character rigs are already
altered in Maya the character animations
are altered they're all the like
character assets are put together in
Maya and then export it and it paused
again so that's why it made all kinds of
sense to to also do the cloth setup
authoring there and what you can see
here is scrub through real quick by
painting these what we call vertex
attributes you can define for instance
how in how far like the cloth is
attached to the rigidly
deforming mesh and by doing that you can
kind of guide the simulation in places
where you know that it's gonna be like
there could be problems when it gets
pushed between collision objects for
instance and then
even the most stable simulation could
run into problems it paused it has its
own will for some reason so in this case
I altered it in a way so that it like
the attributes that you can use are
exactly like a mirror of this ncloth
tool that you can have in Maya and the
reason for that is that artists can
already use a tool that they're familiar
with they can order it in exactly the
same way the even they like the words
the descriptions of the attributes are
the same and that way I think they can
be much more productive so the previous
the main problem with the previous
system is the most know was that like
the authoring part was very cumbersome
and very limiting and through this
system we're gonna be able to create the
most complex of setups that I think you
have seen in games Shawn is already
shown or we've already seen a the
example of the trench coat on Bishop but
the real deal is like this what we call
layered cloth where were you have like
separate different layers of cloth
interacting with each other and so
that's what I'm going to show you next
so it's probably the worst case example
of what you can have so here that's
that's some that's not the final product
but yes I think when you're physic
programmer and you you've been working
on your code for so long the first
moment you see stuff like that it's like
there's super happy because that's
already a big breakthrough we've coded
these individual sheets so we can see
where they interpenetrate if they do but
it's already pretty clean and I was one
of the first tests we did so Chris Wayne
has clearly done this tremendous job
there
[Applause]
so that is one of the Hurston security
guards I think and yeah it's just
amazing how complex this stuff is and
it's still it still looks like
impeccable looks similar to like an
offline cloth simulation and ultimately
with the system what I'd like to do is
like simulate as many objects as we can
like currently most of these like more
like dangling free hanging cloth things
are simulated but there are other things
like even if you have like trousers that
are in super tight if even if those have
like a tiny amount of degree of freedom
to move and your entire animation will
look more dynamic and more more
believable and if we can end up doing
this on the entire body I think we'll
have really like amazing looking
characters in the future right so
talking about future
yeah sean is going to give you a bit of
an overview of what's what's coming up
next
sure I'll just let that one play out
here I was manually looping that last
bit there yeah and there was this was
some great work literally in the last
week from some super good tech artists
gage Holloman Marcy Lee Chris and
Forrest as well as the physics
programmers helping them out so of
course rain and the physics team they're
so big big props to them for doing this
that was the idea so the comment was no
clip indefinitely and that's the whole
idea of that there's self collision that
we can do that layered cloth and it's
not necessarily something that we could
do with pendulum cloth before so it's
gonna let us kind of do the Queen
Amidala cape dragon on the ground going
down the stairs and these kind of things
that's gonna be pretty awesome so some
of the future stuff that the physics
guys are okay with us kind of mentioning
a little bit is something called the for
mobiles this might be something we're
it's this is all Rd and kind of you know
hopefully we can do this but this was
something we tried out in one of the
early games on an earlier implementation
the engine deformable is something that
will react to an explosion force and the
easiest way that I've ever had to
explain it is like imagine it's
simulating like a cloth or a single
frame
so that once something deforms and it
holds ridges so we could deform things
like sides of the ships sides buildings
doors train containers whatever whatever
you can things out so drink containers
on sea containers yeah well no those
trades in Hurston we're good further
performance improvements it's already
orders of magnitude faster than what we
had before so this is gonna be very very
accomplishable within the game and you
guys will see it quite soon tessellation
so even getting further a basically
density on those on those assets that
you see something we mentioned a little
bit called signed distance fields that's
something I was hoping we could talk
about today not quite ready to talk
about it this something we're gonna do
to massively optimize collisions and to
do some work basically with effects like
shields and things to just make them
conform a little bit more into the
ship's it's gonna be quite nice tearing
so imagine that cloth being able to tear
maybe shoot some holes in it that'll be
quite cool and then even better and this
is something that's on line not quite
ready to show it but our soft bodies and
soft bodies not just a cloth soft bodies
something that has volume but is squishy
so like a pillow or like a duvet or
something like this so then on top of
that we want soft body - soft body
collisions of course so that'll be quite
cool and many more things that I'm sure
are sitting in their brain that will
that will come up yeah of course
so with that with that we want to give
some big special thanks in alphabetical
order so that - Ali Brown director of
graphics programming Chris rain as I
mentioned senior I I'm actually not sure
but it's ty Lee's physical that's fine
math wizard gage Hallman tech artists on
the cloth for Steph and help with the
captures Evo heard Sagan you know
implemented that pendulum simulation
that we are sitting there talking crap
about yen's Lind game play engineer
Milan paycheck helped us all with the
management of this presentation Marcy
Lee one of the tech artists doing the
work on the asset Rob diction and tech
artist in the UK also working on the
asset and then Thomas make Michalik
the help so big special thanks to those
guys for helping us do this talk
basically
under pressure definitely so thanks for
the time guys really appreciate you
coming

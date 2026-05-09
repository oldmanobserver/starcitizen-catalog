# Star Citizen Live Gamedev: Mood Lighting

**Video:** https://www.youtube.com/watch?v=Cqt1fl56BlE
**Date:** 2021-07-16
**Duration:** 1:00:58

## Transcript

hello everybody
welcome to another episode of star
citizen live game dev
what do we call it mood lighting mood
lighting
uh i'm your host jared huckabee and if
you've never seen star citizen live
before well it's where it's
well it's where we take about an hour at
the end of our week
we hang out with some of our developers
here at cloud imperium games
uh we answer questions we chat about the
best version of
of hello and uh sometimes we
dip into the workflow and we see a
little bit about how they work
uh that's what we're doing this week in
our game dev show let me bring our
guests in here
we have got chris and zach from
the cig lighting team how you guys doing
hello
doing well how about yourself it's i'm
back i had a week of vacation
last week and it was delightful i
actually forgot about work for
at least several hours over the course
of a week it was it was wonderful
it was like but i'm back and we're here
at work and
we are talking lighting today so uh
before we get into it because
every show is somebody's first show and
zach i know this is your first show
let's take a sick a minute or two
to introduce yourselves to the community
tell them who you are
what you do chris we'll start with you
who are you what do you do and what's
your favorite sandwich
oh i'm chris campbell i am the uh the
lead lighting artist
for the pu uh and my favorite sandwich
i mean i'm gonna be controversial and
say i don't really like sandwiches that
much
but i mean i don't know a blt
is pretty good how do you not like
sandwiches
oh well i guess it depends on how you
define a sandwich and we could get into
that but
i was going to say the same thing not a
sandwich fan so maybe it's thanksgiving
being a lighting artist and hating
sandwiches
but i'm zach and i'm a junior lighting
artist for star citizen
and i hate sandwiches
the correct answer is a monte cristo by
the way a monte cristo from club 33 at
disneyland is the correct answer
um all right there's a monte cristo
so we are you are lighting artists um
and what does a lighting artist do uh
not in game development at cig uh what
do we do
uh well i mean the lighting artists i
mean it's fairly self-explanatory it's
in the title
but it's um it's basically taking the
environment that's get that gets made by
you know the environment artists and
level designers and
adding lighting to it in a way that
represents the
art director's visual target for the
game
um while also keeping in mind things
like performance constraints
uh technical restraints and also some
gameplay considerations like
leading the player making sure that they
have good visibility where we
want them to have good visibility that
they know where they need to go if it's
uh something like a linear level design
or something
and today on the show we are doing a
game dev stream where we're going to
showcase uh some aspect of your process
what are we doing today
yeah uh so today um we're going to show
kind of the process of how we are
relighting some of the haves
around the pu um you may have noticed in
the in orizon
currently on the ptu we have added you
know we've got new habs there and we've
added a button
by the door which allows you to you can
push it and basically turn
down the lights i hesitate to say
turning off the lights because obviously
there is still lighting there
but you basically put the hab into a
state of like a you know a chill
nighttime uh either relaxation or sleep
kind of uh
state um and uh so yeah what we're gonna
do is
show how we do that process um and
kind of our thoughts behind what why
we're
picking certain moods or you know make
certain decisions
uh while doing that um and it's actually
it's something that we're doing
you know right now so uh this is this is
like real-time game dev sure yeah i said
this is actually tasks that you are
working on
at present in the game so we're not
creating any special work or anything
for today you're actually just
you have to do this and i'm like can we
watch it for an hour you're like
sure so yeah so yeah this is literally
what we're doing this week
all right so we've got the screen share
up uh zach
why don't you take us through it yeah
sure so this is orizon
and this is uh one of the switches that
we've used
to change the lighting
that's it all right so thanks everybody
remember that uh
we'll be back next week
all right so so explain to me your tasks
what what
what do you actually do because these
things are already lit obviously
so why are we going back why are we
revisiting
yeah so i mean uh yeah i mean as you say
we're not we're not reinventing the habs
we're not like changing them completely
um but we've always had a a kind of a
desire to add more
player interactivity um from a lighting
perspective i mean you've already got
some
things that you can interact with in
your habs uh and we wanted to add to
that
uh through lighting so um the obvious
way to do that is we've already got
these
uh these tools um called light groups
which allow us to basically change the
the state uh of a light based on
you know whatever kind of logic and
you know traditionally that's mostly
been in the
the ships like when you take damage or
when you're powering up the ship for the
first time there's like a low power
state and a full powered state and an
emergency state
um and we've been you know over the over
the course of the last year or so
introducing some of those elements into
locations where we feel it makes sense
and where we can get the most
uh bang for buck um and yeah the next
kind of obvious thing was to do it in
the habs
where we recently got some some new kind
of uh
gameplay entities that allow us to tie
the light group
into a switch which is player
interactable so the player
himself or herself can can manually
change the uh the light state all right
so
so we're going back through all of the
existing habs and adding
multiple lighting states and now you
mentioned the ships the ships
have like normal operation and then
emergency
or low power or whatever what what
lighting states are are we talking about
for habitations
uh i mean so for the time being for
habitations it's just going to be a
a low power state and a full powered
state
yeah we're not we're not adding too much
complexity to it at the moment we just
want to
get something in um kind of as a proof
of concept
and then see where we can expand it
where it makes sense to expand it
okay so no no red alerts no no no no
switch they have directions no not yet i
mean
maybe in the future you could be cooking
something and then the fire alarm goes
off and the whole hab
changes what about like a what about
like a
sexy time entertaining well i mean you
know
some some of these uh low-powered states
are very
very sensual
and we're already off track all right so
zach
uh we we've been bouncing through the
the hab now
uh for a few minutes um take it away
where do we start
yeah sure so um i guess
one of the first things we could show is
uh the lights themselves
and right here we have a kind of default
state auxiliary state emergency state
and so the first thing we'll do is go
through for our kind of default state
and set everything the way that we want
it
and then if you're really prepared
in that process you kind of set some
auxiliary values but normally we don't
so as soon as you switch to an auxiliary
state it looks horrible
and so you have to go back through and
tweak all the auxiliary kind of define
like what your low power state is going
to be
and there's also ways in which you
control how that transition happens
so if you notice
the lights don't just kind of
immediately switch
from the default state to the auxiliary
state there's a bit of a
transition and uh i did this one so it's
not the most interesting but there are
some others where
different lights kind of transition at
different times and you get a bit of
like a
different lights across the room
this is the new bab hab
and we can have a look at the loreville
one as well
a bit of a slower one with some stuff
that like flickers on towards the end
yeah this one's so dramatic like an air
purifier
in here yeah
crap floating in the air
now this transition uh you you're
continuously transitioning between two
modes
you're flying around in free fly and
then you're transitioning into
another mode to do this what is this
mode that you're transitioning into
um we have a little hotkey control g
that kind of
spawns you a character and just gives
you
the kind of interactions that you'd
expect to have as a character so it's
just a quick way to kind of verify
um how this interaction feels and how
these characters are kind of receiving
light
in these spaces there are other ways
that we can
look at that um we have a client that we
can run where you can actually have your
own kind of version of a server on your
pc
and do the whole process spawning a hab
move around you know visiting
the entire kind of pu but this is just a
quick way of doing it in the editor for
these smaller spaces
yeah and it looks a bit nauseating when
you go
yeah so as i we've seen it a couple of
times and i'm like we should probably
explain what that thing is that we're
seeing over and over and over again
yeah i'm not sure what that noise
nauseousness is when you jump into game
mode
uh i think it's some some bug which will
no doubt be fixed but
uh yeah i mean as zach was saying like
the
the the benefit of uh of being able to
jump in game like this is that
you know we we're trying to make the
environment look good
uh but you know in the actual game
itself there's a lot of characters
running around and so we also have to
verify that
the player character looks good and you
know by doing that we also make sure
that any other npcs
or ai can theoretically also you know
look their best under the same lighting
circumstances so that's something we
always
always keeping in mind when we light
environments
so we can take a look at a few more if
that's interesting or we can just kind
of like jump in and
and have a crack at one yeah well let's
jump in
and see what it is what your task is
what you're actually trying to do here
we we've we've seen these these habs
before
uh
this is area 18 and just this week i've
done
a kind of auxiliary setup for this hab
and we thought today we do kind of a
completely different alternate state
alternate universe what area 18 habs
could have looked like
just to show you kind of the impact that
the lighting can have
and then this is our neon kind of
downtown inspired area 18 um
let's see we're halfway to the sexy time
lighting i was talking about
exactly cool so we're going to do an
alternate state for this one that's the
plan
and show a little bit of that process
and it sounds like we're going to make
it
sexy time by the sounds of it
it's it's let's do a shag pad
yeah right you got it
so the first step is kind of defining
like what lights are we going to keep on
what lights are we going to turn off
and i can also show you the horrifying
thing that we're faced with before we've
set up any auxiliary lighting
where everything's just default values
so is this every light in the room just
turned a hundred
it's just one uh and white
every light turned to one and everything
white
and yeah that's kind of the the starting
point
by default interesting
you can see that here and chris i don't
know what you normally do but my lazy
method is to kind of select
most of them and turn them off in the
auxiliary state and then bring back the
ones that i
like yeah i think that's usually the the
easiest way
uh i think it's easier to start from
black than it is from
this horrible white nightmare that we
find ourselves in
so now we should
everything except these cute maps
which i think you went over last in your
last kind of lighting
stream but they're essentially uh the
kind of ambient lighting solution
they take a little snapshot on all six
sides of the lighting in the space and
reproject it out
so instead of just having complete
darkness in the areas that aren't being
hit by direct lighting
you get a bit of ambient lighting and
the correct kind of reflections that
should be there as well
yeah yeah yeah yeah exactly
i think we've lost a host that's all
right we'll
we'll just go through it so uh changing
i was changing my lighting to match your
sexy time lighting
oh hell yeah there you go see i i i got
i got the same look
it's like we're in the same place
so i think if we're going sexy time we
should probably keep all these pink ones
because that's what's giving us that
that vibe so we can either go for the
same values that we have
in the default state so the other lights
will kind of fade out around them and
these ones will stay consistent
so with the pink lighting and then add
on top of it
so what you just selected a bunch of
lights
so intel for these lights here we have
like a couple of different
uh light types because they're longer
strip lights i'm using these ones that
are in the engine they called planar
and they represent like kind of
rectangle of light and emits out from
there
and then i also have these little lights
here which are linked to these fixtures
that control the glow
so that controls the brightness of the
glow
and the color of the glow
so i'm just grabbing all of those and
copying over the values that they have
in the default state to the auxiliary
state so they're the same between both
is riveting we need the lighting team to
go over to jared's apartment
i'm not in my apartment i'm in the
studio
i'm in the studio this is the la studio
i'm back in the office
yeah it's kind of ironic like we spent
so much time lighting
these like 3d environments but the
lighting in my
apartment is very uninspiring by
comparison
forgot to make them pink classic
we need to decide what we're going to do
about these sexy origin bulbs as well
that i've brought in we can keep them
blue or make them pink
i want you to chip in jared and give a
bit of a
stand in for our art director sure we'll
put the question to the
chat what do you what are you wanting to
know
what uh what what should the um the
alternate color be so we are looks like
our primary
like key light color is going to be this
pink that's gonna define like the
overall mood for the uh
for the broom and then we've got these
um these accent lights
uh up in the ceiling and uh spotlights
and stuff and we need a
we need a color for that that's gonna
work
uh well it can't be pink the other ones
are already pink people you can't just
put pink and pink and pink and pink
uh let's go can you'll get a very pink
room but yeah let's go with purple
purple like a deeper a deeper kind of
purple
that could work
so now that you're you're working in the
alternate light state
uh zack you just uh mentioned how
how you do that like in game we can
obviously flick the switch
but then as soon as you jump out of game
it goes back to the default light state
yeah so oh god um
the way that that kind of switch works
is that it's hooked
up to one of these light groups uh which
is something that in theory should be in
every kind of
what we call object container or area
like a hab or a
hab floor and within this
you can set how you want so
for example like orison we have the day
night states where it switches from
uh we switch on all those kind of lights
in the garden on the trees
at night time so one of the things we
can do from this light group
is set to be affected by day night
and set which of those states auxiliary
default or emergency we want to switch
to
and then the engine uh when the kind of
sun reaches about the horizon level on a
planet it will switch between them
and so i'm just manually in here
switching between these states so i can
see
whilst i'm working what we're going to
have
and then once we've established those
two different states this one we'll
probably go back and do
the transition and how those lights are
going to kind of flick on or fade off
and that's the tricky bit
so jared hopefully you can answer my
question how long do we expect 314
to go live when it's ready the answer
that question is always
the same pedro when we think it's ready
oh crap we wanted purple not blue i'm
doing blue let's uh let's make
it a little bit more here we go
oof is that 2p i think
what is purple somewhere like 270 on the
hue spectrum i think yeah somewhere in
there maybe
that's quite a pinky purple
yeah i think it's because of the um the
glow
on the actual uh bulb itself
obviously as something gets brighter as
we put more light into it
the you know the brighter the glow is
and the more it turns towards like a
white
uh and sometimes that can be that can
make it difficult to like to pick an
exact color
like usually if you've got like a
concept art piece uh the concept artist
can always make it
you know exactly the color they want
just by picking you know a brush color
and that's what they paint
colors always translating that into 3d
takes a little
a little bit more finesse color is
always an
annoying conversation because in in
video you know we use rgb red blue green
uh uh zero a zero value is black then
you know the absence of color is black
and the addition of all colors is how
you get white
but in print they use you know cymk
where it's the exact opposite where the
absence of color is white
and the addition of all colors is black
and it's
it's always just it's one of those you
know weird
you know uh mark skelton deep thoughts
thing where you're like
like how is one the absence of color how
is white the absence of color in one
and black is the absence of color in
another and then how do you have these
two polar opposite
systems existing and then how do they
both
manage to be crayons yeah if if if
if if in either situation one is the
absence of color
how do they both manage to be crayons
and both be candidates of color
and then what's transparent
where does transparent fit into all that
and then you figure out they can make a
transparent crayon too they got those
little clear wax crayons that they use
for like easter egg coloring kits
so and that at that point you just need
to
sit down and take a break step back
shout out to mark skelton if you're out
there deep thoughts
no it wasn't called deep thoughts it was
called hazy thoughts wasn't it i don't
remember so somebody somebody in the
chat will remember
i'm throwing back like 2013 stuff here
uh one of the other things we always try
and think about is like these walkways
or kind of made
what what is it that we call them i
forget critical path
critical part yeah that's right so like
any kind of doorways or spaces that
you're supposed to interact with you
kind of need to see what you're doing
and where you're going
so i don't know
do i not have a doormat yeah so
even though it's like an mmo with like
so much space
that you can go around to there's always
you know especially in locations like
this
areas where we know that the player is
always going to be going through always
transitioning through
and that's where we we generally focus
either the highest quality of the
lighting so we we spend more
we we pay for shadows if that's what
needs to be there to make it look good
put more area lights there that kind of
stuff i i like that phrase pay for
shadows
talk to me about paying for shadows
everything has a cost
there's no no free lunch in the in
lighting
so um yeah i mean like the i mean i
i don't think i even can get too
technical into it because i don't really
know
but um like every light has the option
of being a shadow casting light and
you know in computer graphics like
shadows are
generally extremely expensive uh one of
the more expensive parts of rendering
a theme um and
and so whenever we use shadows we have
to keep in mind um
how many shadows we're using the more
that you have
on the scene at one given time it can
kind of exponentially get more expensive
and uh adds adds a cost both to the the
gpu
in terms of like actually rendering the
shadows themselves and then also a cost
on the cpu
for all the additional draw calls that
get uh introduced by
um by the cpu trying to calculate uh
you know how many extra shadows have to
be
computed right the the lighting budget
if you would
yeah exactly the overall lighting budget
every
every location doesn't have the same
budget though but
like how do you how do do you determine
that is that something the art director
determines how do you how do you
determine
like what your budget is for a
particular location
um i mean like we we generally get uh
kind of guidelines from the graphics
department uh again mostly because
lighting is is almost purely a
a graphics side of the the equation
um so the graphics department gives us
kind of a set of budgets
to stick within and that's you know like
the the number of overlapping shadows
that you can have
on screen at any given moment like two
shadow casting lights next to each other
um how many uh lights in general
make up the overall scene that you can
render on screen at one
one moment and stuff like that and so
we basically just have to stay within
those those boundaries
uh and then we also we have to allow for
a certain amount of overhead
for unknown light sources basically
right because
again this is like flashlights
flashlights ships uh all of these things
can
depending on the location can be
introduced to the location and then that
just
adds on top of that that budget and i
imagine the
size shape layout and everything of the
location
uh matters too because it's what you can
hide behind a wall
you know you know the the layout of the
place what you can see at any given time
well you would determine what can be
hidden and unloaded from the
you know from the from the computer so
yeah
it's like a something like an
underground facility with a lot of
twists and turns and hallways and
whatnot probably frees you up to do a
lot more
but something like origin where it's
sitting out
and open and you can see one end of the
city from the other
uh that's got to be a a hell of a
challenge
yeah exactly so i mean like these kind
of examples like we
we generally love working on habs and
and shops and stuff like that because
they're
not only they're very self-contained so
you can you can do a lot but as you say
because they're
they're very confined environments
within like a culling volume
we can spend a lot more lighting budget
uh
you know really making it look as good
as as good as we
envisage it um whereas something like
ours and
outdoor environments in general there's
a lot more
a lot more variables at play that that
always have to be rebalanced so
you know when it comes to lighting
somewhere like ours and there's just a
constant process of
iterating you know you make a bunch of
changes
those get populated because there's so
many different like platforms which are
duplicates of each other
so if you add one light you could end up
adding 500 lights
to the overall scene of ours and then we
have to balance
using our various optimization methods
to keep
keypad numbers within a certain range
yeah
uh bed slayer and a couple other folks
in chat have been asking about ray trace
lighting
that's actually a question for the
graphics team
uh bed slayer it's these are the
lighting artists are the ones that use
the tools that are provided to them
and stuff and actually like it it's like
to
you're asking a question about where
whether we'll get
better or different brushes these are
the guys that use the brushes to paint
the picture so
that's really a question for our
graphics team i don't have any answer
for you
yeah exactly
that wasn't my best analogy but i think
it worked
oh it works it works back to the
lighting budget uh
thing and the performance cost stuff
have there ever been have there been
moments where
you have something and it looks just the
way you want it
and you're like so happy with it like
this is perfect
and then somebody has to come back to
you and be like you're
you're you're 50 entities over your
budget it's like
you've got to bring it back and like how
how do you process that
well i mean it it can happen absolutely
and it's it's always pretty devastating
um because you know it's like
you gotta hack away at your baby take
off some limbs
and uh hope that it still is pretty
but uh yeah i mean sometimes that's just
the the cost of things like
it it all it all comes down to weighing
up like
where we want the budgets to go so i
mean like you know in a small
environment like this
where there's not so many much vfx for
example
if we wanted to or if there was a
decision made you could
push some more of the lighting budget
into the in towards the vfx budget
because they're not using it
i mean the ultimate goal is always to
get like a certain frame rate and
everyone
every department has their own little
budgets to fit within that
um but if some departments don't exist
in a location then
you know we can we can just kind of
creep in there a little bit
yeah well they say that adversity is the
mother of invention
uh many of you you see you know being
able to do
anything you want is not always a recipe
for success
uh you know you know famously when when
george lucas struggled to make the
movies he wanted
you got star wars empire the jedi and
when he had the power
and the wealth and the resources to do
anything he wanted we got phantom menace
attack of the clones and revenge says so
you know adversity can be a can be a
good thing
uh a lot of times but uh yeah
how many battles do you have with the
vfx team if i got mike snowden in here
for a while
in here would you would he have a bone
to pick with you guys
no i i don't think so i think i'm i'm on
good speaking terms with mike
as far as i know he may feel differently
but no we we work uh
like on our zone as well for example we
work quite closely with the vfx team
on some of the volumetric particles that
they were adding onto the industrial
platform
um there was uh i think there was some
improvements to
the way that particles are lit um and
how they receive light and cast shadows
that was added a little while ago
and so there was a bunch of vfx added to
the industrial platform
and so we had to work kind of together
to make sure that
their vfx looks really good and also
that we kind of show off
you know how nicely like the shadows
cast through and how that
we couldn't really do that before
so where are we at zach what's been
going on
we've got a kind of like our bulbs in
here our nice
sexy bulbs and i've done a little bit of
work
yeah i don't know very pink and purple
we've got uh of course
if this is some sort of love den then
the bed
is gonna be quite important small
it would be tricky wouldn't it it'd be a
bit tricky
if if you could quickly model out like a
heart-shaped bed with like a nice
leopard print
uh cover i think that would go a long
way absolutely
just a sec on like a rotating platform
these um teddy bears they're not in i
saw one in louisville as well are they
in some of the older hubs but not in the
new ones
that's a good question i thought we'd
come down
the teddy bear is a it's a much beloved
asset
by the environment understandably
yeah well the props to you at least the
props team sorry yes
well the props team is on the
environment team it's it's
but i i i i i'm pretty sure it's the
props team that's been
dropping those in there so we could
probably
i mean i don't know how much how far you
want to take this we could move on to
the stage of
there would be a lot further that we
would take this and a lot of the kind of
detail lightings in the
the shelves and cupboards i haven't done
but that stuff does take quite a lot of
time
so we could uh keep going or we could
jump into the kind of transition
phases with these lights yeah let's go
into the transitions
let's see that i've i've i i've redone
mine
and my mine took way less time than
yours did
so i mean i don't think it was just
right right i don't want it yeah mine's
got ray tracing
and i don't have a shadow budget so
i mean i don't want to tell you your job
here zach but i mean
it didn't take me much time to do this
at all
damn shots fired yeah i'm hurt
okay so the transitions is where it gets
a tiny bit more complicated um the way
that these light groups appear when you
first kind of drop them in
the things that i mentioned at the
beginning that kind of handle the
transitions for the lights
is that they just look like this and
then
you have to add within them these
different kind of transitions
and the way that you distinguish between
them is with these
uh styles um and we have some kind of
like setup levels that show all of these
there are some that flicker and there
are some that fade and there are some
that
take longer and some that happen much
quicker and we'll kind of jump back and
forth between
that setup level see what kind of
transitions are going on grab
the code for the one we want and put it
in here and then you also
establish how long you want the total
transition to take
and you give a couple of different
offsets so if you wanted a bunch of
different lights to have the same
transition but happen at slightly
different times
um you'd use these kind of offset values
to trigger them at different points
when it works that's how how it happens
yeah when it works
yeah yeah it's uh
it's it's a bit of a like it's a lot to
wrap your mind around when you're
when you're working on it but it's
actually quite a powerful tool which
gives us a lot of freedom to
kind of create these transitions in uh
in various different
styles or uh you know you can get a lot
of you can get quite creative with them
so within the each of the individual
lights has this section here
for each state that says preset tag
you define the the tag that you want for
any given transition
so like seek seek reverse sequence
reverse flipper one
flicker two and then you punch that into
the light
and you also punch in that id for the
offset you want and you do that for
every light basically and if you do it
for each
night you do have to do it
but it does mean that you have a very
like chris was kind of saying you have a
very fine control and it's quite
powerful in terms of if you have a
vision for exactly
what you want to do and you know how to
do it you can get some quite interesting
complex transitions
not that i can do that right now
yeah it takes a it's a lot of iteration
time you know
figuring out how what feels natural it's
like it's a
it's a balance between like what feels
natural for how lights would behave
what type of light it is if it's like a
you know a compact fluorescent which
like
slowly flickers before the the power
kind of comes on
something incandescent where it has to
burn for a little while before it
reaches its full
full brightness that kind of stuff um
yeah it's a it takes a bit of iteration
to go back and forth and you
test the animation that you test the
transition you see if it feels right
you find what elements don't feel quite
right and you go and you tweak them a
little bit
this hab looks so sterile after looking
at our
shack guys for so long
i'm just cheating there and grabbing the
values that i'd already used
so i don't choke in the moment and
completely mess up
yeah there's a little bit of a cooking
show here's one i prepared earlier
yeah kind of uh workflow yeah we always
have to
we always have to make this disclaimer
make this reminder that
there is almost nothing in game
development that can be
finished in an hour uh
every time we do one of these
demonstration streams we are we are
showing a very truncated version
of the process uh either you know
you are going through the process itself
very truncated or
there have been hours of prep and
setting things up before the
before the live stream so it's uh we
always we always appreciate the time
that you guys put into this but
uh i love these shows because
nobody else does these shows you'll
never see
you'll never see ea you know hanging out
with
lighting artists or props artists and
showing how they make a box and stuff
like that you'll never see
you know activision doing this stuff my
my first criteria
people often ask like how do you do how
do you determine what you're going to do
on the shows and whatever
like like most things you know multiple
reasons but one of them is always
would any other game studio do this and
if the answer is no
i'm instantly interested it's it's like
i i i'll
absolutely consider this if nobody else
will do it
um you know because i
i don't want to get off on a on a rant
here but it's
one of the one of the things that one of
the things that makes
my job worth doing is highlighting
as many aspects of game development as
possible is
is combating this notion that games are
made by
one person you know you know it's like
when you watch
what was that last game that uh kojima
made the
death stranding it's like kojima yeah
it's like that is an okiejima game and
his name is on everything and i'm sure
he did a lot but there were also
100 other people who who who spent years
making that game and i liked i like to
give everybody at least their one hour
yeah to shine people were like why did
you do a show with the i.t
people once i'm like because you think
we could do any of this without the i.t
people yeah
i think they're not absolutely essential
to the game development process
yeah you give them one hour the unsung
heroes
that's the point that's the point it's i
see this show if people are like
if people are ever wondering what the
purpose of this show is this one the one
on friday
it's about the unsung stuff it's it's my
chance to
just to show a light no pun intended
to to show a light on uh the aspects of
game development that never get
shown anywhere else yeah are we does
that mean we're not the glamorous
front cover devs we're the unsung ones
not the glossy print
that's devastating not not at 23. maybe
when you get older
but i i i i think that's one of the yeah
for me that's one of the nice things
about
this kind of open game development that
we're doing is
being able to show the process live and
you know showing stuff at
how we work and how we do it i think is
for me it's quite interesting obviously
as a game developer i'm interested in
game development so
um yeah i think it's quite it's quite
fun to
to show the community this stuff and uh
hopefully also interesting to people
oh yeah no it's it's uh people have uh
mean to me a little bit for uh for
ending
uh every isc with what did we learn this
week but it's
it's oh i do it for a couple like i said
most things you do it for a couple of
reasons one of the reasons i do
is because somebody who meant a lot for
me and got me my start in this industry
used to say that
so it's my tribute to them but second is
that i want to always remind people that
the purpose of this step is education
it's not it's you know sometimes
sometimes
sometimes this stuff you know dips into
marketing
and stuff like this you know i work for
a marketing department it's absolutely
true there's a marketing element to it
but uh i always try to come at it from
an education standpoint
that's where my that's where my passion
is i used to be a teacher
way back when so
what did you teach okay uh i taught
uh high school uh
drama well i i i i i
i taught at a performing arts high
school actually uh you ever seen that
high school musical
show i taught at the high school that
was the basis
of that show so it was a performing arts
high school
where kids actually did break out into
song and dance in the
hallways is there a character based on
you
no no no no uh high school musical had
already been like it had already been
out but it's been
i don't know i don't know if it had
already been out i don't know i've never
seen a high school musical i just know
it's based on that
school okay
i really like the pink and gold that you
started out with
though and so did the chat like when we
first started the uh
when we first started the screen share
like chat was like we need this
put this in the game oh that this one's
more gold than pink
right now but yeah pink lights are off
yeah what you had at the beginning that
was that nice mix of pink and gold
looked really cool i butchered it so i
could show the transitions
because all of the interesting lights i
already had on in the default
so we can bring them back but then we
don't get our
transitions so i i like that transition
how they they turn on
you know in the direction coming towards
the camera i think that feels really
cool
white skies i'm sorry no you go you go
uh i was going off topic
uh white skies major says like i'm so
bad at improv
in school but now i'm role playing in d
d uh
and they asked if we play d and d do you
guys play d d
i i have unfortunately never played dnd
i hear great things
i've heard from a lot of people that
it's a lot of fun but i've never had the
opportunity the the answer is yes i play
d d in fact i i host a uh
d d live stream on my personal twitch
channel every two weeks
there's a game tonight actually i'm not
here to promote it so i won't tell you
where the channel is or what time
but yes i've also never played it
in the club of sandwich haters and
religious
d not players coffee hating and t hating
[Laughter]
you're american i mean zack's british
he's he's genetically predisposed
to liking tea yeah i'll be torn to
shreds if that gets out but i don't like
to
but you don't like to you just don't
want it to get out i definitely like to
just to be clear he does not look very
convincing
look at look at his cam look at his
camera right here look at that does that
look very convincing
i like i love tea
and fish and chips i love fish and chips
i'm okay with fish and chips chips is
great
but tea is just hot garbage hot garbage
water
it's like it's like here here's hot
water and a little bag of dirt
but coffee's just a spot oh i don't like
off either so you won't get any argument
from
either so there you go zac you're among
like company
what was the other thing we brought up
earlier there are dozens of you
[Laughter]
oh beer don't like beer yeah
because a lot of uh the lighting team is
german
about half of us are german so that was
a controversial one as well
um i mean i've kind of i feel like we've
kind of showed
i can just keep going or we can do
something else
well we've got about what 15 minutes
left
we could try some like different color
schemes maybe like without uh
you know going too far into it but like
just pick the
swap around like the the primaries and
secondaries
we can do that other kind of moods we
can get we can do that or
we we no it's that i was going to say or
we could just add all the lights and
and just keep adding lights
until the engine crashes and then as
soon as that happens we're done
that that was me the uh if you were
wondering what that sound was that was
me
like having that one of those little
angel and devil arguments
you know on one on each shoulder it's
like how i really just want to crash the
engine
it's like i'm in a very subversive mood
today
it's uh it's been a little crash happy
with me
the last couple of days so we're doing
well that it hasn't cracked
yeah absolutely in the stream behaving
very well
so we don't want to anchor it too much
all right so uh we got we got 15 minutes
we'll ask the chat
uh chat if we were to create another
mood
what other what other mood let's look at
your sexy time put your sexy time on
there
let us see your sexy time did you just
mess up the sexy time
yeah we're going back here we go the
power of undo yeah
yeah that's a way to crash it yeah so so
we've got our sexy time here what other
mood should we get
[Music]
can we do a red alert yeah we can do
that
it's due red alert in the uh in the have
what what is an emergency
lighting state for a habit for for a hab
look like
yeah everything is right submarine red
absolutely red on red on red uh disco
mood you just you just saw disco moon
like it's
all there what is going on with my hair
today
this is this is i took a shower this
morning and then didn't do anything with
it
that's what that is
red wow
yes there's a new
a little a little more s m club rather
than uh
sensual sexy times it reminds me of um
the prison house oh i'm in the wrong
level
but the prison hubs have kind of a nice
alternate light state that leans on red
emergency sexy time
oh yeah there we go
ah and now yeah here we go there you go
i don't like the red and the blue though
yeah
red and blue is very uh it's very
um star wars 789
kind of vibes
i always go back to superman superman
too
the superman 2 was all right i prefer
superman though
superman 2 did have kneel before zod
though
it's pretty good yeah planet
houston
you see there were years where every
time someone would bring up houston it'd
be like
planet houston nobody knew what the heck
i was talking about
how long how many years did you feel
what was that
what did you just do there that was me
accidentally instead of clicking this
slider
perfectly to input a value clicking and
dragging
and then setting the light value at
twenty seven thousand
yeah several professional sun's worth of
intensity
so you're saying that just adding more
light is not the answer to these
situations
not always not always just sometimes
sometimes you have to go too far before
you realize
what how how good you had it before
oh yeah no it's it's actually it's
actually a very
a very common refrain in many aspects of
game development it's it's it's
it's you you bring it to the point of
excess and then you bring it back to the
point and then you start dialing it back
you start dialing it back down
because because if you just keep if you
just keep
building and building and building and
building you never know if you've gotten
where you need to be
you know you never got to know if you've
gotten accidentally go past the line
is that you have to go past the line you
you have to find the line
and then you come back to just before it
and that's how you know that you've
pushed something as far as it can go
yeah if you never find that line
that's definitely ian our art director's
approach to fog
get more fog more fog in there
i'm messaging ian right now
yep
[Music]
as promised everything is red
red almost almost there
once we get there uh zach could you do
me one favor and add like a really nice
strong bright either white or red key
light
that like kind of casts a shadow like
either blinks or like like flashes
or like spins around that would be cool
oh my god yes i don't know how to do it
spinning around off the top of my head
but you can talk me through it and do a
live
just rotate the tutorial just manually
rotate it
exactly that's the secret it's like a
it's like that simpsons joke where i
can't remember someone was talking about
animating live like if the the animated
show was a live broadcast and they said
no that would be a terrible strain on
the animator's wrists
didn't they do something though that
they did they did something where like
like three minutes of it was
was like voice acted live i thought they
i thought simpsons did an episode where
like one section of it was supposedly
like the voice record
was a voice acted live yeah that sounds
about right i think
simpsons has probably tried just about
everything at this point
yeah i don't know i haven't seen an
episode of the simpsons
since like the fifth season uh when
whenever whenever they shot mr burns
that's when you gave up he was that was
the line for you
yeah it was before the movie was out
i've never seen the movie
it's pretty good i enjoyed the movie i
think the movie was
better than it had any right to be shots
fired at simpsons
yeah spoiler alert they shot mr burns
wow what was that like 1994 1995. i
haven't had
somewhere around there
and you get to be my age it all just
blurs
we go from the back towards the door
absolutely
yeah so there should be i think down in
the options there's like a
angular speed uh setting
it's down onto the general options or
under the animation settings
uh it's trying to read like a
a list of values under pressure angular
speed
yeah somewhat something like five
hundred twisters
turn it back on and then you gotta find
the right
how do you what you just have to spin it
around yeah
so i think you want to spin it on y like
90 degrees
to get it to go horizontally
there you go oh is that it i went
straight past it
there we go
oh yes there you go it's panic inducing
as it should be now make it red
surely that's too much and
much brighter yeah there you go oh jesus
maybe too much red
that's not what you want to wake up to
is it no
i i love how the the white is though is
is washing out the red as it passes over
it's
it's always my absolute my absolute
favorite thing in all of game dev is
when something works exactly like you
would expect it to in real life
it's like when you when you do when you
do that like hey that's
that's that's just like it should be
it's just how i expect it to be
yeah just how you expect it to be which
is such a weird thing because it's like
i think so much of game dev is actually
striving for just that
it's it's like if we're doing it right
it shouldn't
seem weird or different to you
it shouldn't seem impressive it should
just seem like it's a beautiful moment
when it works
there you go
ah it's not as good when it doesn't cast
those nice long yeah you got
to get the
that's a lot of the like the general
pipeline that we do as well like we just
stick a big bright key light
in the scene and find what looks good
from what angle where you get the nicest
shadows
and then kind of build it out from there
and we always every time then add a
fixture
that that light should be emitted yeah
exactly and then we tell the environment
art people okay now make it actually fit
into the environment
it's one of those because that's where
the light is going to go cart before the
horse
things you guys come in you try to work
with what's there
and then you get to a point where it's
like i really want a light right
here it's like this looks so good if i
could have a light right here and you
have to go back to the environment guys
and be like
oh i didn't know you could do that
it does feel very star wars as well
uh uh try making it a gold
yeah yeah
now it's iron man's workshop
i give it like a flash give it like a
style of two is like the crazy flash i
think
yes
now what happens if you push the button
is it is it is it going to like
gracefully go back to the default state
or have we completely
passed it
[Laughter]
ah that's that's not too bad it's a
little not bad
it's a little weird yeah that that red
to pink transition doesn't feel so good
but
no and it's really slow
yeah yeah
we can finesse that later we'll show it
to ian see what he thinks flip it
just ship it yes yeah yeah well but
show it to ian to be like this zach made
this today and after the message i just
sent him
i'll have a really great opinion about
that zach
i'm gonna need to try to come
we can try and like hide a button
somewhere in the hab you know something
secret where if you push it then this is
what you get
hey absolutely you get you get is there
a limit to the number of light states
uh yeah unfortunately the uh the light
groups only handle
technically four states so like off
default auxiliary and emergency because
it was
it was the feature was initially
designed for ships specifically
so even though like the nomenclature of
auxiliary and emergency doesn't always
match up to what we're doing with the
light states we're
kind of bound by those four states for
now
cool well that's it gentlemen
we did it yeah right on time nice yeah
we did it
uh thank you so much for taking your
time and hanging out with us
uh zach is your first is your first any
kind of video for us
it is it's been a pleasure very good
thank you
still want to work here it well if i'm
allowed to
after this after you've called me out to
ian on several things oh wait
ian's responded uh is
are you kidding sort of
all right um thanks everybody
uh thanks for watching this has been
star citizen live uh we are still
on our isc uh hiatus uh
but uh we'll be back here with another
episode of star citizen live next week
uh for the lighting team that's it it's
chris
and that's zach and i'm
hair i just i'm realizing i don't look
at myself very often and i'm like i
gotta do something about this soon
i'll talk to you later everybody take
care bye bye guys
you

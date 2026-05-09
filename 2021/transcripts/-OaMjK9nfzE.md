# Star Citizen Live Gamedev: Building NPC Behaviors

**Video:** https://www.youtube.com/watch?v=-OaMjK9nfzE
**Date:** 2021-05-28
**Duration:** 1:09:45

## Transcript

hi
everybody welcome to another edition of
star citizen live
game dev building npc behaviors i'm your
host jared huckabee
and if you've never seen star citizen
live before it's where we take about an
hour out of the end of our week
uh hang out with some of our esteemed
cloud imperium games developers uh
either answer some questions do a little
back and forth sometimes we
take a look at what they're working on
today we are doing something that we've
never done in the seven years i've been
doing this
for for cig we are going to look at the
actual process
of creating npc behaviors and to do that
we are going to first uh introduce
ourselves to some of our
ai team folks uh fran uh because you've
been on the show before we'll start with
you
uh who are you and what do you do for
star citizen
sounds good so uh hi everybody my name
is francesco cucci
and i'm the eye director in cali
imperium games so
yeah well i try to supervise all the eye
development
and you know help everybody with the
with the proper planning
you know the proper development of
architecture
and yeah support everybody in the
behavior you know creation as well
let me see that shirt you're wearing
what's art let me see that shirt you're
wearing
so this is a very nice version of the
spacing better game
see with vincent so this is a tart how
do you pronounce it jared
targ in english target
tar tardigrade tardigrade exactly i can
never pronounce it correctly
in english italia would be though
all right uh we'll go we'll go clockwise
around uh dan who are you
and what do you do for star citizen hey
i'm dan baker i've
been working at cig for about four years
now i'm one of the game designers here
uh currently working on the npc
behaviors as
you know this this uh this whole stream
is about
and working on usables and i spent most
of my time writing design documents
and playing her out with data
exciting uh jacob
the man with the blurred background what
are you trying to hide
oh you don't want to know you know i
don't know who are you what are you
doing
i'm jacob i'm a junior ai programmer and
i joined here about
three months ago uh so it's my first uh
like full-time job
it's my first job in the games
development sort of sector
and i basically i work on behavior as
well like ai behavior but also like
sort of the you know the backbone of it
like the implementation and the code and
stuff like that so i'm excited to be
here what we
what you right now seeing already live
with the with the
pilot security behavior is what jacob
has worked on already
yeah exactly so if you have any
complaints you know
no finger pointing and last last but
certainly not least hayden who are you
and what do you do for star citizen
hello i'm hayden mcelroy i'm a junior
technical designer
and i basically do what dan does just
with a little less documentation
just a little bit the higher up you go
the more documentation you have to do
and uh let's go ahead and mention uh
idris cedrice was going to join us today
but he's having some trouble joining on
zoom uh so address you're with us in
spirit
uh all right so fran this is
uh this is your program uh we're all
here to peanut gallery and just tell you
where you're messing up
and what you're doing wrong while you
work no pressure i'm fresh
once you start us off what is an npc
behavior and what are we so
sure uh basically i think like all of us
here uh work
both on you know uh some of us again as
programmers work on some of the systems
uh we we we define we design and we
build implement
some others you know as the designers
are mostly working with these systems we
build
and they you know help us building so
the behaviors are mostly
it's mostly the brain of the npcs right
so the way we split the things
is we try to build first of all as much
as possible it needs to be data-driven
to scale up right in this game
it's so huge we need to just you know
allow the designers and content creators
to create content
that we use automatically right to patch
the game and expand the game
and one of the things we want to show
today something that me and dan have
been working on
uh you know since a while and i think we
also show some sneak peek during the
um mostly during the monthly reports but
is the
is the engineer behavior as an example
of how we build the behavior from
basically scratch right so how we define
mostly
what we want an activity to do because
we talk about behaviors in terms of
activities
usually an activity is kind of a generic
kind of representation of a job right it
could be the engineering job it could
be the pilot security that jacob has
worked on or the tourists that aiden has
been working on
uh something that the npc can do and
that you know eventually
i'm sure like a lot of people that are
watching here they saw the tony's uh
tony's video i know that was out this
week and you know all these things with
the
population manager oh address join us um
but they say all this uh really cool
population manager you know and the
visual npc and something else we can
basically spawn them
in the right context and their context
is the activity of what they are they're
trying to do
and the environment which they are in so
yeah basically that is what an uh
behavior is and to achieve that you know
let's say an engineer
you have a lot of pieces that you know
we have to take care of that is like
building the environment or making sure
that the npcs
understand the environment as well and
you know and then
there is the actual decision logic
decision flow
and what that means is that we try to
abstract
our like thought process flow it's like
oh i want to find something that is
broken i want to repair something is
broken
and then how that basically construct
the actual action
that they need to perform it tries to be
as generic as possible as modular as
possible and this is what we
see today all right well it sounds like
something relatively easy
straightforward and should have no
trouble doing it within an
hour yeah so i'll try i try my best to
be fast and not
you know because i'm i'm i as
a lot of people know i talk a lot so you
guys need to try to interrupt me
sometimes
i just speak too much
like months and months worth of work
into an hour so
yes so we are trying to focus on
specific stuff we'll see how much time
we have of course we can go more indeed
maybe jared you know you can book us for
another session after this you know we
can go more in detail later hey i got to
do this every friday so
all right so we've got your screen share
up on the uh
up on the stream now what what where do
we start
so we start with this is our engine
right so this is i think you know
you know been seen in the past but
basically this is an empty level just
like completely empty this is what we
use for testing for development and for
actually trying
and testing the proper environment so
what we do today of course is building a
test environment
first of all we need a platform where to
be because right now if we jump in game
we're just floating in space and there
is just pretty much nothing
uh you know we we can do so we will use
what we call designers tool that is like
a
kind of solid creation tool we can
create like a platform
uh and the way you know we move around
we can build like a
different type of uh surfaces now we
have an environment where we can place
npc now we are still in zerg so if i
still jumping game i would still float
around
so first thing i want to do is add some
gravity
i will go in the entity panel i will
search for
what we call the gravity box
we drag it in as you see here there are
like this little
you know this little square is where now
gravity is so if i
go next to here you know and i will jump
in the game i'm here cool so i'm
perfectly in the level i can walk around
let's take an npc
as the company you know is is very
complex in the process that we have to
create from the character
to the behavior so let's say usually
what we start is i say we want to then
engineer
in the in the parallel process we have
the character team that creates
you know the character like as a the
human body and then all the loadouts
that the engineer comes
uh comes with so in this case we can
just grab like one of the
engineering uh in uh new babbage i don't
know or something like this
there are female and male of course uh
we can start with
you know taking a female but i think i
will show you basically the we are in
the process of testing
uh always like basically we start with
some animation this male or female and
then we
transport that animations to the other
type of skeleton rig
so some might be you know uh depending
on the on the timing which we
we're working on that might be more or
less polished because of course we want
to polish one first and then
uh do the retarget we're targeting
so first of all now we have this this
character and that's what i wanted to
show you is basically in each
character or each entity in general it
depends on the entity type
we can configure some instance
properties and some are
are behavior related right so the
one that we can show you here is that
this is like is now a sign
up here that is called pu engineer or
better an activity that is called pure
engineering
this is the old activity that we have
sometimes in po where you see
that you're going around you know and
use like some work zone
and you know weld stuff and and
something like this but now we're
working on a more complex one
and we will definitely start with um
with
none with a new one we would just create
one from scratch so to create one from
scratch
we will go into a subsumption this is
our
tool for creating behavior missions uh
you know populate environment what we
call the object containers where we can
create platforms
we can define which type of actions the
designers have
exposed from the coders which type of
variable they can use and so on and so
on but let's start with one
i take my my folder i show i make a new
behavior we call it engineer
i show this is gonna be the name that we
can reference
to the inside the engine and we can
assign it to here
and in general like everything we do
here gets live uh
hot reloaded so if right now for example
we take a sub activity
we go we create a generic one that is
like
if nothing happens if he has nothing to
do it just goes into idle
we put priorities this is like the
number uh
in which we evaluate those the sub
activities so what are some activities
of course
some activities as a sort of the way we
split the activity into the different
things they can do
so let's say we have an engineer maybe
you have like again an idle sub activity
that represents
your fallbacks like okay there's nothing
to do you're just gonna be there
this pretty much should never happen so
we'll put it like in a very high
or very low uh priority that is a very
high number
and what we usually tend to do as a
first step we just put like
these are all the notes all the things
that we can put in the logic
let's we call one that is called halt
halt is pretty much doing nothing it
just stays there
the behavior runs and it's gonna be
there forever so what we're
gonna test if this is already working we
jump in the game we have this character
here
if we jump in the game what we can do we
can look at the character because it's
gonna be a very
easy thing to debug and we press on our
keyboards we have like the slash on the
numpad
and basically what we can see is like
they will be on screen some information
about the behavior
here you can see of course that is the
the the log but on top you can see the
name of the activity this engineering
action the one that we just created
and the primary subactivity name that is
uh staying in idle
there is no special variable there is
something on the bottom they can see
there are continues to run that is like
how many seconds the subactivities run
or the subactivity
start so now we have a really basic
things
that kind of works of course doesn't do
anything um
so what we want to do is right now we
want to verify if this character can
move
around because if you come off it's
definitely not going to be able to
interact with anything
what we usually do is that we have this
i physics button that allows us to move
in the environment but also to interact
with the object so right now the
behavior is running
and we have like a middle click button
but if we press around
the character should move but we see
he's saying it's not really moving
so what's going on we didn't put
navigation mesh
so what's the navigation mesh is the
representation of the environment
to for the ibc to be able to move around
how we do that is we we create a volume
pretty much around the environment we
can decide if you want to snap
to the ground to a grid just right now
just put it that
we want to keep it on the solid and we
just create like
uh a square around the character
we can move it a bit down we can sync it
a little bit more we save
so it's good practice save all the time
because you know never know if
crashes eventually and we get the back
like draw like this one
as you can see there's this blue like uh
square and we can see how it's always
implemented a bit more
uh sorry here's like a bit
out of my screen so if we see this is
our
console we can see like c bars uh
that are like a way for us to control
the environment
um the backdrop we can put like
tree it's usually showing us what how
this is represented internally that is
like
tiles and triangles so the eye usually
when it moves around
to the environment it creates like a
path that is just
transitioning through those triangles or
through those styles
if we middle click now if we run with
shift middle click we can make the
walk movement and we can test how the
locomotion works and with alt
we can just make it sprinting and we can
just like very easily test you know if
the movement is
is working as we expect cool so we have
like just the basics
what do you think jared are clear so far
i think we're halfway to our star
citizen rts
exactly exactly it's recording for new
starters we could like
it's actually i was thinking to say when
i was preparing it
oh you have no idea one of the how many
how often i get messaged
from new employees who are just starting
and like
hey jared i just want to say hi i'm like
i learned about the project from
watching your videos and i
like i decided you were the place i
wanted to work at because of the videos
so yeah
it is it is helpful to show these tools
right because i think sometimes we also
like so much deep into development that
you know we should just sometimes spend
a little bit more time to record those
things even internally that that would
help a lot
uh but it's good to use these things at
least it gets you know a bit more
broader view and it's always good so now
we want to have
something to do for this engineer and a
way to have something to do is of course
defining
you know what they should do that is the
designer in charge and maybe you can
tell us something about what you would
like
him to do or what usually an engineer
does for us
uh usually would i guess he would go to
something and
fix it yes exactly
so it is exactly what you know what we
what we do that then basically design it
in a way which basically the engineer is
supposed to
of course in our game to get tasks to do
and it's usually repair stuff right this
is what we want them to do
so one thing that yeah sorry i was just
going to say like that the key corners
we tend to try and find like a key
cornerstone of every single behavior
like what what is the purpose for having
this behavior because otherwise you know
there's there's nothing really unique
about them and they could just still be
running the same behaviors so
so with the engineer it's more about
well they they can do
everything like everybody else like
they're you know getting changed
into whatever the relevant clothes are
or you know finding someone to sit if
they need to rest or things like that
but
but for the engineer it's all about
maintaining things
you know they their their job is
literally to
um inspect things to see if they're
broken
repair things if it's it's an archetype
yeah is that the word yeah we basically
used like
yeah like um we call it activities but
yes it is it is a sort of an archetype
of you know a job to do
and in essence i think what is good is
that they actually i think compared to
lots of games where
i think with like yeah i usually tend to
do stuff but it's not really
having an impact on anything right what
we are trying to be at is something that
you know whatever action they do
actually has an impact on the game so
what we want to show today is i
you know imagine we have a wall panel
that is split between two different sub
elements that we call relay and this
relay can have sub components inside
that are probably like in our test our
fuses
these fuses can actually have gameplay
impact right and they can break for
different reasons
then you as a player can go there and
replace it
if the eye does it has the same exact
effect as you know what the player would
do
so for example if you hire this guy and
you want him to be your engineer you're
on board of your ship you can then give
in command and say like you know what
maintain all the wall panels in my ship
or you know what i see in my you know
map
that this wall panel is broken can you
repair exactly this one
and this is how we are building these
behaviors that they are sort of api of
interface where you can
control them in essence is like designer
writing and mission
are kind of doing the same as a player
would do when they you know give
commands to an
npc so right now what i prepared just to
speed up a little bit
uh of course everywhere else on
pre-configure in case we don't have some
time
but the idea is like i have some default
object let's say you know art
creates for us some objects that we can
use as a reference in our case we have
three objects that is the wall panel
the um actual sub component like that it
will be diffuse
and the relay so i will show you all of
those right now
um you know so just just um for anybody
else that's watching that relay could be
any kind of ship component it could be a
quantum drive
it could be a shield generator the idea
is that you know this
the wall panel is supposed to house any
of those type of components and it could
be in any environment
the engineer is is more of a
infrastructure
um maintenance person versus exact
mechanic that is more like you know
small ship
maintenance so this one basically yeah
yeah absolutely and this is like you
know one of the examples we used today
and
you know the the relay for example right
now is gonna be done
something like this uh sorry
entities
just prefer something which shows at
least i can find them very quickly
you know we have something like this and
as you see it's like it's a little box
you know
where with some uh movable parts and
inside
you can find some three component
attached how we do this one probably art
already
can deliver us like something without
the followed outs where
you know we can in our for example in
this case this is the word panel we
attach
we have to let me put the word panel as
well these people can have like a visual
reference to that
um
basically uh the wall panel template
you see you have like two relays
attached to a panel
and then inside each relay you have
three uh sub components and what we want
of course is i
we don't want to hard code any
information like about repairing a
specific word panel type was
three you know two relay and then three
specific um fuses we want this to come
from
the setup of the object and this is what
we will build today so what we'll create
right now is those are not usable yet
those are just pieces of art
we want to make sure these objects
become
usable spacing so the first thing we
will
start with is i would say
we start with diffuse because it's a bit
the simplest one
so as you can see we can select things
delete and now we will go in data forge
and we will open the the fuse we will
create a variant
that we will configure we call it
template show usable
we'll make a new version we add
right now the usable component what's
the usable component i think we speak
about this
a lot of the times you know about what
the usables are in essence a usable
is the knowledge that the is
about how to interact with that object
right so in our case right now
we have a fuse and we want to
this is an object you can carry so the
way right now simply in a simplified way
we want to just generalize this as an
archetype is that it's a carriable
object right
so we can take this one we can just
select this is a carriable object
then what we do is we want to create
what we call alignment slot the
alignment slot is the position
in which you need to be to interact with
that object now
right now we are not going to care about
interacting with this object
by itself we will interact with this
object through other objects that is the
wall panel so
in this case we would just create like a
generic
uh alignments that we call main and we
will
reference this one as the root
the root is really the entity position
basically and if we go in here
and we track this new object that we
just created
show usable
and now for example with the backdrop
usable
dot petrol
of course nothing goes there because we
need to also enable the debug draw for
carryable object because otherwise
there's just a lot of information here
and now
you will see there is no lms slot
because the image slot alone
doesn't doesn't it doesn't do basically
any information it's not you can if
there is nothing to interact with then
there is no point of even showing
information
so what we'll do right now is also
adding what we call u-slot
the u-slot to represent sort of a
virtual position in space
or you know again if it's virtuous
visual but it could be a physical
position
where the interaction actually works in
our case it's basically the center of
the object so you can
interact from a position in that object
but no more other like no other people
can interact with that at the same time
so there is no way to have two people
positioning at the same time around this
object to interact so you don't have
multiple npcs all right trying to fight
for everything same time
that as well exactly right so we will
make like a useless command and we will
instantiate which type of use channel we
can use on those objects and right now
what the
the things that we care i think we won't
even have time to show them both but
let's say we can take this object and
repair this object right
so if we search here for take we see
that we have different type of
archetypes of the usable
and different action what we want to use
is the carryable take
in this case and we assign the diamond
slot from which
you can take it and there we make
another one
now we basically do repair
and then we make this one
save go back to the to the level
delete we just put it back and now you
see you have the bike throw
happening right now one thing that we
want to extend of course that we don't
have it yet is that these type of
objects that
they are carryable they should have
their alignment slot depending on the
position of the object
but not on the orientation right because
the orientation is irrelevant if these
things fall
you might still need to pick it up from
whatever position and this is what we
will extend in the next
uh quarters but right now let's say we
are not planning to interact directly so
it's a bit irrelevant cool let's go now
to the relay
right so we take the relay
and we do a similar things create a new
variant
show usable
we make a usable component we assign it
so this is for was not super familiar
you know with components
mostly there is this dichotomy in
programming that is about
you know inheritance and and and
composition approach
right so usually most of the things you
know are inheriting
as a functionality from something else
like you might have like a vehicle
and then from if you go inherit and you
create a car or you know
but then what happens is that the things
are in a way simpler
but a bit more monolithic what we try to
do here is that we try to get this
responsibility on the component so you
can
build it out of the composition of this
extra functionality together
so in this case the relay this could be
multiple things as archetypes the way we
tend to do is
we try to use what we have if we do have
something that kind of fits
and then if things change we might need
to create a new
archetypes in this case very much like
we we can imagine that we can still
carry this relay it's going to be heavy
but you know some people might be able
to carry maybe with like you know
armor suit or whatever then attach it to
multiple you know things so it can still
be a carryable it might still just be
uh i don't know a container type but you
know right now we use a carryable
just for simplicity and we do something
similar uh
in this case we make the carryable we
create the alignment slot
since we are not planning right now to
interact with this
immediately it is a little bit
irrelevant about this one it's mostly
this information is required by the
system to be able to understand how
those things are attached
and how they flow into one one another
so this is why it's it's important and
uh yeah we will make the use slots as
well in this case
uh we will call it tank sorry this would
be still a main
u-slot and then we'll have
i think from the carryable we'll assign
it to the right
alignment slot these hierarchies are
i mean you can't understate how
important they are to
making all of this actually function you
know
how often is a hierarchy you know broken
because
you you have to create 20 different
links in order to make these things and
one of the 20 links is broken and the
whole thing doesn't work
yes and the problem is often i'm sure
like you know dan
or hayden uh at risk and can say more
it's like it's so easy to even like get
lost sometimes and why
things don't work and i think we are
basically constantly trying to say like
okay okay this is like this is the
problem so let's try to add some extra
the back throw to try to track it easier
next time
you know and we try to do that or like
oh this is like that the message is not
really clear right then it's like
we have the most simple thing ever it
could just be you're missing a left tug
you're missing a right tug and then
you'd spend half a day debugging it and
you're like
oh it was just that and you missed this
one little field
oh yeah there's a lot of information
going into these usables
so you can spend quite a bit of time
just breaking
a single entity down to its core parts
just saying okay well this is okay
so you take that out and then you put a
different thing in and it's a bit like
if you build in a pc and you just swap
out different components
just to see which one's the broken bit
yes absolutely that is usually a very
good um
like you know easy way uh for debugging
stuff like you start to remove and
say is this one that broke it you know
all right like just do a little step at
the time
this is what i try to add here is like
these eye parts the bike drawer just to
show you guys like that we have
like these objects are attached to some
item parts
right the way we we define those are
uh for example if we go in here
we do have this item part container for
the relay and we can see that we have
three
slots that we call slots of item ones
lobsa by the tool stops have a tree we
can attach
stuff in now we just need to explain to
the usable
code basically how this information
is is available to it you have this
usable item part so we can create like
one data here that says on the slot sub
item one
we basically can place specific
animation
when we interact with that right so what
we want to have is like eventually as a
final result is that the
engineer can go to the wall panel
understand this is interacting
with the fuse that is on the top or the
bottom
and then based on where that object is
it needs to play the right animation
to take the left the center or the right
so maybe we should just explain a little
bit more
what how we play these animations right
it's uh it's it goes like it's like a
russian doll thing like you start to
overwhelm you say oh but there is still
another piece that we need to explain
and he is like mannequin so
uh i think you could quite easily spend
half a day talking about mannequin
absolutely absolutely it's a minefield
it's it's it's crazy like i think
there's a lot of stuff but basically in
short what it is is a lot of
game engine have what's called an
animation graph
right the animation graph would
basically explain how animation
state transition from one to another and
which type of animation to play and then
maybe usually in this animation state
you can
maybe say like you know with specific
conditions which animation it gets
played or
how you can randomize through animation
something like this money in is a kind
of a piece of the puzzle so it's a sort
of database where you can
use what we call fragment id and
fragment tags
to immediately search for a specific
animation that match specific condition
the tags are sort of conditioned so you
can say like
are you an ai or a player or which type
of action are you trying to do and in
our case
let's say let's go straight like in
certain examples so it's like we have
like what we call fragment id that could
be usable usable action
usable phases but either the usable
action is the
action you can perform when you're in a
usable so we call it usable action it's
just very easy to search
and then for example you have all those
folders those folders are in essence the
fragment tags so the start when you're
going on a database and you search for
some keys this is what what you get
and this is the animation results in our
case
we want to understand which animation we
need
to pick up specific object in our cases
the wall panel
or the relay has three item ports so how
can we identify that
did the animator and tech animation team
give us already something that we can
use
so if we go here if we say oh this is
the action we want to do that is the
take so inside tech we have some version
for the word panel
oh yeah we do and then we have two
versions like high and low
and then we can create like we can we
can take a look at those and we have
like oh we have a version for center
part
left part and right part and it's the
same for the bottom right
so this is what it means is one once we
want to search for an action that is the
action
take for a wall panel on the high relay
for the fuse that is in the center part
zero one
this is the animation we will play right
and then in the animation
we can also specify a specific procedure
clip layer there is a sort of you know
premiere layers but just like that some
play
some animation and some play some code
and here it says when you hit this key
then that item attaches it from
the the relay now it passes in your hand
and it detaches from the other one
and as you see we have different
animations for you know the
the left you know and animators can make
multiple variation multiple type of you
know
urgency on doing actions as well so we
can basically pass this information from
the behavior and the be
it and then manage it takes care for us
to select the right animation
so those are the three that we want to
do it's like center part
uh center underscore portal scores you
want left and score port and score z1
right on the score port underscore zero
one so now we're going here
so just just in a nutshell just so that
it's super clear as well what's
happening
essentially what we're doing is we're
just putting these different a bunch of
different tags onto the the character
and then they just play whatever
animation is associated with all of
those tags so they say okay i've got all
these different things that's
to this animation so i'm going to play
that and then in that animation we can
also add like little scripts to say well
at this point of animation you want to
trigger this interaction so and then
that could be like oh i'm going to open
the door at this point
you know so just trying to simplify it a
bit more yep
and there's more here but we will not
see it today but it's basically a way
also to say
from the behavior here it would be like
oh if i have something attached to this
item part this is the money intact i get
but we can also use this data to say do
you have something attached
that respects specific tags and then
basically we can sort it out let's say
we say i want to repair these specific
fuse then we can say like okay where is
that attached and which animation i need
to play
but we could also say a usable do you
have something that is damaged
and is a sub component attached to you
and then it would be like yeah i have
three right and
say just get this one and this one is
the one attached to the
item part one and to use this one you
need to take the left parts your one
mannequin
attack this propagates automatically
into the behavior later
we'll see so you're giving it a
collection of choices not every single
choice that's available for every single
npc because that would be
horribly unperformative but you're
basically giving it uh
its own little buffet of actions and
it's based on the situation that it
uh determines uh based on all the tags
and what's happening whether something's
damaged whether something's not and
whatnot
it actually goes oh this thing is
damaged oh it's in the left port so i'm
going to use
left dead animation exactly and
basically the good thing is
that this comes automatically from what
you already have calculated from the eye
so you don't really have like you can
retrieve this data
but this data can be cached very easily
from our code because once you attach
that object there
then you can immediately say like oh
it's a touch okay cool is there some
data related to this item power attached
that one is like okay the moment you
attach it is when you calculate it
that means that you know attachment
don't happen so often
while you know search happens a lot if
you do it every time you search then it
can be very expensive but if you do it
when you know you do the
bare minimum operation this is where it
can be much more optimal
cool so we have this one right now seems
kind of good and we can now make the
wall panel
version i'll make a variant here
i will make the usable version
and uh we'll basically start to look at
the geometry first here because this is
the one
that we are actually interacting with so
it's it's definitely gonna be very
important to understand
if art and animation have defined
specific location for us to interact
with
right because in here we have this
center point that is also sometimes not
even reachable here but we don't really
care because what we care
is the description of the actions
with the wall panel we'll just
open the character tool
we just open it's his character but he
actually opens
pretty much anything and if we open like
this object we see that we can debug
throw for example the joints and the
joint name
and the front part of the wall panel is
something that we call anchor wall panel
and this is the
position in which we expect the mpc to
align
and this is the same position that we
provided to the animation team
to make sure that when they make the
animation these are perfectly aligned
you know and they can perfectly align
their hands
to the right uh object use the right
grip you know when we play the
procedural adjustment and so on and so
on
so what we need to do in this case
compared to the other ones is like first
of all
we will add the usable component of
course
second this object is not really a
carriable i'd already expect people to
just you know
take away like a wall panel from the
ship but we actually have a wall panel
set up
like um like archetypes and then we
basically say
as we've seen in manikin there is a
fragment tag for the word panel is
called wall panel so we can say
anytime we interact with this object we
carry
the wall panel fragment tag with us and
we propagate it through
the chain now we do the alignment slot
time slot in this case would still be
called like a main
element slot but the helper name would
be the one
that we have seen here that is anchor or
panel
just copy it
just don't want to misspell anything and
then
we do the use lots so use lots
in this case we need two versions right
i mean we could use also only one
but i think you know this is mostly for
readability purpose
there's not in like if you have to use
lots doesn't necessarily mean
that two people can use it at the same
time because when people can use it at
the same time when there is a
combination of stuff that is
the image.you are in is free they use
lot that you are associated with
is free and they use channel you you
know you want to use it's free in our
case we will have to use lots that the
reference to the same diamond slot so
you can't basically occupy the same slot
by two people and then it will not work
so in this case you have like a top one
that represents the top
relay and then a bottom one to represent
the bottom one
so the fragment tag for the top one
it's gonna be called high as we've seen
in mannequin
before now what we do is that we add the
use channel instances so what can we do
on the wall panel top we can
look at here if we search for wall panel
we can see we have a lot of actions
well we care today we will try to limit
to the things that we really care right
now
we can image that is open uh because we
want to open it that panels if it's
closed we
should not be able to take something and
what we will do it here
is we will put it to the right alignment
slot
and then we will add
something that is called tags to add on
enter
and text remove and exit what does this
mean is that when
i'm trying to use some object that is
high or low i want the player to know
that it's
interacting with the top or the bottom
one to branch in the logic
so what we'll do here we will add
a tag to the character automatically
when he uses the top one
it's worth mentioning these are gaming
tags as well not to be considered
that's a classic yes things that it's
really hard to follow sometimes
because we call it all tags but yeah
these are game tags maybe
then can give like a little bit while
i'm typing okay just kidding
so so game tags are generally used i
mean that they're used in
every game engine possible um they
they're a good way of just keeping track
of
of literally anything that you want in
any
um game element to uh to do something
essentially so if it's a chair you might
give it a tag for a chair
and then you could search for that chair
through that game tag
for example um there's there's no end of
ways you can use game tags whereas a
mannequin tag
is very specific to mannequin and the
animations that are being played
so a character you know that doesn't
have any mannequin tags on them will do
literally nothing they'll just stand
there
um but then as you start adding those
mannequin tags to the character
then they'll start collecting all of
those and go oh well that means i must
have to do this animation
and in here right now when we're adding
these fragment tags we're saying that if
you're in for example this alignment
slot in front of the wall panel
you're probably going to get a wall
panel fragment tag
say and then that will just be one of
those
many tags that are required to get the
wool panel specific animations um
whereas
a wall panel game tag would be used
elsewhere like like i say in npc
behavior you would
search for a wall panel tag to find that
entity you wouldn't
search for a wall panel mannequin tag
does that make sense yeah yeah it is
and also yeah we can do another thing
that is called
option game tag so what it means is for
this top used lot
we basically know that that one is
tagged with a specific game tag so we
say that every used channel for example
that we interact with in here
are related to the top you know
interaction basically state or block and
to achieve that
we go to
call it um
then we do the same with the bottom so
this is gonna be
a bit of repetitive work so you know you
guys can talk while i just really don't
repeat a bit of this uh
yeah so see what my friend's doing right
now adding all of these game tags
is so that he's able to reference those
in the subsumption logic
because you wouldn't reference like say
mannequin tags in the subsumption logic
so you can say if this um if even the
character has
a game tag of um top on it
then make sure that you only play logic
that is relevant to the top part of the
wall panel if he has a bottom game tag
then
you could do logic that's specific to
the bottom half of the gate the wool
panel instead
so basically the text always we kind of
use the game text to sort of
be able to differentiate in the behavior
inside subsumption so
basically what daniel said like um when
you look at these these graphs from
subsumption it's it's
literally just to like um be able to
like take like either
one path or another path based on the
the game tags on the uh the entity
we use a lot of um logic gates in
the subsumption logic with tags they're
so
fundamental in every game i don't think
you'll ever have played a game you know
at least
not mud game that doesn't use tags in
some way
yeah and tanks are also like very
important for us because they also
represent traits
skill and traits maybe we can explain a
little bit more of that
yeah absolutely like for example when
you look at like a a spaceship we use
the tech to be able to like
differentiate
is this like a like a combat ship or is
it like a security ship or
like is it a pirate ship or whatever
like so we also kind of use
text to be able to just to make like see
the difference in
like what type of you know enemy or what
type of ship whatever that
we're like using yeah or even with these
fuses as well we we have uh game tags
for
is this damaged even you know so that
would be the
the thing that the npc checks when they
inspect it they go
they they from a visual perspective it
just goes oh i'm looking at this fuse
but on in the logic what we're doing was
saying does this thing have the damaged
tag on it
because if it does then we want to make
sure we repair it or replace it
if it doesn't then it's it's okay and we
can just put it straight back in the
wall panel
exactly super broad the whole gamestack
system
one thing we will also do here right now
is like this is like you know based on
my
basic template so as you see in the
default loadout still loads
the relay that is not the usable we just
built so we basically just go through
those objects and we also replace the
entity our class name with the one that
we want to really play so it's like
in the template show usable we put the
relay template show usable
the relay template show usable we
basically go in the
default loadout and we now add
the sub component this similar
name so as you see it's like if you have
one type you just need you just need to
populate then it just propagates
you mentioned so
obviously hierarchy is crucial
it's all all of this is this is the
russian nesting doll you mentioned
it's uh do tags have a priority are
are some tags more important than other
tags
like if an npc recognizes a tag or like
a conflicting tag
or something does it does it prioritize
one or the other or does it just
jump up on the chair and not know what
to do i think that depends on the logic
more than anything i mean all tags are
created equal it's just how you use them
um whereas mannequin tags they do have a
priority so they will see
um something like um uh
say uh it was something
more important like um how to deal with
a file like i'm being shot that's
probably gonna be higher priority
animation tag than
you know just like a standard idol for
example
or do you also have hierarchy in in text
as far as i know like for instance for
instance you can have an entity with
like an outfit tag
you can have an entity with like a
specific like very specific sort of
outfit
as well so so you can sort of work with
the hierarchy of text as well
and i regard if you want to sort of make
anything like specific behavior based on
the the hierarchical
you know structure of the text
yeah it's just really it's so
fundamental you can use them in pretty
much any way you like
that's that's one of the the best things
about them
so here what we are finishing to set up
is mostly the same things we did like
the item parts to understand when things
are attached to what
and then i think i jumped i just skipped
this part to explain but basically we
have also
what we call the slotting setup right
but we can show it a little bit you know
in a little bit
so what we will do right now is we want
to make sure that the
you know that the engineer can actually
find something broken
right so we go back one second to the
behavior and we say like okay we usually
i don't but we want sometimes to search
let's say right now in our test
map that sometimes we want to search for
something else better to do right
so instead of halting we just say that
you know we will
just not do anything or idle for
something like between every
two and three like in five seconds right
so you can see like you know it starts
two days the basic duration then we can
arrive up to five
so and every two three two five seconds
we want to try to evaluate something
else
unless you know it immediately finds it
let's say we want to handle
broken like sub component
so what we want to do is i want to say
this subactivity first of all is i
priority compared to the idle so it
should always
be tried you know if possible and if
possible means it needs to find some
object that actually um
is broken basically so we might want to
call it a
broken uh sub component
so it means that we need to search for
any object in the word this or
not necessarily in the word but like
around us right now that is damaged
it would be like this global condition
damaged
this is an item so these are the game
tags
those are all the game tags yeah
and that is a sub component
see the trick with the tank database is
trying to find a tank
that already exists and trying to not
create a new tag
if everyone does already exist
let's try to make it like that right now
if this gets selected what we try to do
is we basically say something since we
don't have a line right now we
just create what we call bubbles that
are like kind of a cartoon
message on top of them and we say like i
have found
a broken sub component
two seconds and now we stay here now we
hold
for now
save you know we go back in game close
this
now what we will do is first we remove
the
carrier ball the bike draw on this we
got a bit less the backdrop
and then we reload just this one
usable we put the wall panel
we rotate that just to make it a bit
simpler for the character to go
then we try to see if right now he finds
something and he doesn't find anything
why because it's not improving pretty
much
so how do we simulate that we could
create like a little mission
that just randomly you know puts the the
sub components to
to be broken sure it's gonna take a
little bit more time we don't have so
much time so what we will do
we'll mostly just go in our version of
the object and we just say that those
are all broken we just you know
basically assigned
holly brown exactly right
so it's just the same thing
we just like actually this one but
it is this one so we save it now so
those objects are there
usually just delete we put it back
now we should be able to in theory find
this one but there is no bubble on top
this is because usually we use this as a
debug draw
so we need to enable this what we call
the prototype dialog
bubbles put it there we're going here oh
i found
the broken sub component but
unfortunately it doesn't do anything
with that so it's like okay what do we
want to do
so now we can ask the mpc to go there
and take it
right let's let's try to take it so how
do we do that so it's like okay
and so and by the way where are those
objects right now right so okay we found
them but
how do we know which one we found the
system automatically
reports these objects into this this
magic variable that got created when you
create a new sub activity that is called
required object search results
the only thing is we don't really know
and we
how or when we're going to use it right
let's say you find 10 objects and there
are 10 engineers then
i go to one you go to another one then i
still think that this broken because
somebody reported to me in the past so
we still need to try to validate if the
steel program right now for
simplification we don't do that
uh let's just see how we just first of
all use that
so let's say we want to use a carryable
so we say like you know what i know
those objects are carriable for now i
you know i trust
and i just call it sub component so we
can
cast similar to how we do we code uh and
eventually i
really hope to get this away you know me
and tony have lots of good plans to make
sure that this can automatically
inherit and be transformed but for now
we basically say
we have a lot of objects that we want to
cast into usable
the problem is you know this is a lot of
options i want to have a bit more
control
so what i will do is i will probably
just try to make a loop
and i will say i want to loop until
i feel what i'm doing next and what i'm
doing next
is mostly popping an object
so don't want to destroy this variable
basically without being very careful
so i want to remove from the variable
one object at the top at the time
and make sure that we know what we are
doing basically sub component
object so we say like we take an object
out of that
and we put it into this other variable
now
if this fails it means there is no more
object to do so we can just
you know do something else in our case
here it's like
we could cast it to a usable
this could also fail but this part you
know in a way we don't really care right
now so
let's say we are okay
handling this error with just
suppressing the failure and say like you
know what
this is fine for now and if we need to
do some logic because basically what is
important to think is in the behavior
flow logic is
you want to handle the failure at the
point in which you still have the
context because the failure means
something at that point
so in this case failing means that i
don't have any more object but in this
case it means this object is not the
type that i
was expecting so i could in theory
and also something here that is um
it's in a car i think that we call
bubble error that a sort of
this bubble that we use for prototype
but those are important narrow similar
to how we do code when we do a cert
and it's like you know what this logic
is wrong i think you wrote something
previously
that is wrong is reporting you some
object that is not correct
of course it could be data error this is
why we don't crash that can assert
my doing code but you know we still
report it a bit harsh and there is a
pop-up that comes out and says hey
you know are you sure you you know you
need to review your logic here
i need release of course this doesn't
doesn't do anything
but anyway we can remove this one now we
have an object that now we can do an
action that is we want to use
this object that is a usable and what we
can do here is we can take it
we walk to there you know and
we just use whatever we can like if
there are multiple use lot or whatever
but
right now this is not really important
so let's see if this now works because
there will be stuff that is missing and
you see this is this is failing right
now so why because right now this object
is not
just in the world is attached to other
objects and this is where
we need to explain the system how the
routing works
and routing means how a
function call gets transported into the
larger objects for example so it's like
well i know you want to use the fuse but
use the fuse you need to interact with
the relay you say
i know you want to interact with the
relay but to interact with the relay you
actually need to use the wall panel
right
so what we'll do now is we will set up
this information on the
object here so you guys can while i yeah
you're going into a little bit of
overtime here just yes i
i've we finished this one and then i
just show you the logic and i think
you know we need to shorten a little bit
what i expected or we can just drag
you know if it doesn't work we can just
drag like the one that everywhere and i
can show you
we haven't even started on the engineer
behavior yet i know right
very difficult to cover such a big
behavior in such a short amount of time
and it's one of the more complicated
complicated behaviors that we've worked
on so
as you know done this one and the
bartender are the really complicated one
oh we know how complicated bartender is
some of us did eight different segments
on the bartender before it was done
yeah and we're gonna call this part one
then part one of many
yeah we'll we'll do a part two engineer
in a few weeks
so basically what we are seeing here is
that to interact with the slabs
slots of item two we need to pass
through
the used lot main and then we already
i was already setting up before just to
speed up but i think it didn't
finish it so it's like there is team
in the wall panel instead as you can see
it's like we have satisfied stuff that
says
oh to interact from the top you can you
need to pass through
the top high or top
or bottom low uh you slot so we can now
see
delete this just for safety
see the guy now moves there he knows how
to interact with that
it's actually i i use the wrong
alignment slot here
seems like uh and this is why it's not
uh set up correctly let me try to look
at which one i i wrote
probably i copied the wrong one
oh friend while friends it's fine my
friend is working i'll post i'll pose a
question to everybody else
why do nbc's love standing on chairs so
much
i think franz answered that a few times
already haven't you it's it's one of
those things i mean i've
been i've answered it when i've been
doing star citizen streams as well it's
it's one of those those kind of bugs
that has the exact same visual output
but it has lots of things that can cause
yeah exactly so you fix it one way and
then
the next week you've you've got the
exact same visual output but it's a
completely different bug
it's it's just one of those
there's so many things going into like
the usable code that uh
you know it's it's really a jungle
sometimes too to sort of figure out what
exactly is causing this bug so
yeah definitely it could be like uh a
missing animation it could be the
animation names changed it could be
the setups change slightly by accident
in the parent above the
variant so could be absolutely anything
i remember one reason
it was caused by um people leaving the
area
then the npcs that were still sitting in
the seats um
they basically got you know turned off
and then when a player came back they
were turned back on but the game didn't
um put them sitting correctly in the
seat anymore so we're just standing on
it instead
there are like tons of problems
basically that are causing that and
they're
mostly coming from the streaming right
now
this is why like you know i i'm the
first one that hates that [ __ ] you know
it's just that i think
it's always like the problem is that the
eye is at the end of the chain so every
time something gets improved right and
you know we get this like this side
effect that they all look like the same
bag this is the wrong
one most likely or not so we had like
this
as you see right now it just took all
the objects and he just dropped them all
of course like you know but it's
it's kind of cool it just went with old
animations and he played
all all those objects um i never had
that one friend
so you've done something new there no
because i'm just looking i'm just
looking through the take only like
right so it's like take one then it
takes the next one it takes the next
genetics 10x and
that's the only thing it does right now
but it's uh yeah for the standing on the
chair basically this is what we are
trying
right now i would want to basically
dedicate some time
what did he get sometimes to make a
proper plan you know i i'm scheduling
sometimes because i'm
i'm a bit tired of seeing it of course
like
eventually what my i really want to have
like a proper animation of a guy
standing on the chair for
like just on purpose you know and it
would be like gotcha
you know like a one and one thousand
pieces
you know it will happen and you know
dude it doesn't [ __ ] spring fun
yes we need to do it uh but yeah it's
basically a lot
due to sometimes for example we don't
know when something streams
out that it will eventually come back
that we can't right now guaranteed
because we don't have yet
the proper persistence you know of that
stuff so it's like we
we either reserve that object for
somebody that might never come back
or it might come back with a different
idea right now and sometimes
sometimes and it's like this was yours
but now you can't use it because you
reserved for somebody then it's never
going to come back so we are not doing
it and then of course sometimes what
happens is
you know another pc actually sits there
before and this one you see
sometimes two mpc one next to each other
the streaming takes too long you know
and then the guy's already there but
they're also in place already lots of
uh fallbacks and whenever we find them
we basically had them and then we tried
to recover from some of the situations
right now
as well uh so there is a lot of little
pieces because with the population
manager of course this is meant to
be different right when when npcs goes
away
you know those will be repopulated by
the population manager so this is why
like in a way
this is not real a problem that will
exist in the future
all right you know because it's
basically with our plan that is already
a known problem in a way of the fact
that the guys just come back
for just because the stream is the
streaming kicks in right
but then there is like of course the
stuff that there might be some bugs
sometimes with the
with the lod update we try to be
efficient in updating stuff that's not
visible and maybe that one fails to
attach you know and
we are we are searching for some of this
stuff so there is like
yeah as dan said same visual problem
with
with several bugs that we are you know
constantly fixing and some new
optimization
things might still get back
anyway i think we are pretty much like
at the end but the only thing i wanted
to show you is basically these things
how
the actual logic works uh you know it's
going to be like just the last two
minutes
if we go on the wall panel when we do
take what we do
we basically still say like oh i want to
open the panel no matter what i want to
try to open it and then in the open
this is where all the game tags we have
set up uh
come into play because basically we what
we try to do is for example we try to
say
are we on the top are you tracking the
top or are we interacting the bottom i
mean this is really for safety because
in theory if you're not trying to top
you should be interacting but
but then we say like how is the object
actually having some tags like
easy open if it's not open right
then we want to open it but if it's open
that's fine so it's a sort of like
building on top of the logic we already
have without having to duplicate too
much logic right because at the end they
use channels
for our you know internal logic are just
functions we can just call function and
then just let them
execute if necessary right and of course
like
whenever we see like is this real a
problem or performance something then we
can have some rd out or other double
checks and we can optimize this
but this gives us like a very scalable
solution first of all for
the logic you know and and then the text
is like okay after open now i'm in a
state in which i know that it's been
open
the player could have opened before
right even if the eye is really precise
we'll always close all the
all the doors we can never guarantee
that you know because prayer could troll
around
or actually may have forgotten because
maybe i don't know the eye as well my
combat started while they were repairing
something right and now they are back up
it also means
yeah it also means that we're able to
have mpc behavior that just goes around
closing all the wall panels
absolutely open that actually could even
feel wrong like you know there could be
guys in a state in which they say
i expect everything to be closed if
something is open
maybe there's somebody here not
expecting right and this we could also
build on top of that it's going to be
and that's going to be like javelin just
walking around closing all the doors
it's like excess hot man this is
somebody always opening these wall
panels
and then we're just so cool here oh
sorry yeah that's why it's so cool
i was just saying it like substantially
it's like super generic like in
like how we sort of materialize it and
split up everything into tasks
and that's what makes it so cool because
we can sort of do whatever we basically
want you know we can we can
change the tasks in every way we want
and we can sort of
make like um like so many different
behaviors
like because of this modularity yeah and
this is the other magic
uh magic task that is taking all the
data we put it there
and says which object which manikin tags
i need to use
to interact with that object and then we
get that one from the item part and then
we merge it
from you know it's like there is like
some variable here that get populated by
the code
that says that oh you are reading a take
that means that you really need to use
take for your action
you're ready to use wall panel because
we propagate there and then we also can
guarantee that for example we can
say like you know what you're trying to
take the wall panel you just can't do it
but if you're thinking something inside
we can always
we have two variables that basically
tells us which usable we are in
in this case for example the usable
variable contains the wall panel
and it's like we want to open the wall
panel we don't want to take the wall
panel
but then we want to interact with a way
with the item to take you know that is
actually coming as well
from the routing you know and it's the
initial routing usable that is like i
started from
the fuse and i arrived to the wall panel
so we have all these little pieces
uh that has been you know implemented in
all those years basically you know and
especially with the
the bartender helped us a lot and the
engineer is helping us a lot uh you know
then basically started to do this
use channel inception you know and there
was and i'd be able to say oh
oh my god yeah this is scary and i was
saying
actually it's really cool you know we
can make it working very well
it's literally the only thing that you
know only a designer could think about
yeah yeah i don't know i was like and i
usually notice that if it's possible in
the tool
you guys will do it like
i i i i joked about how many segments
how many times we covered the bartender
but
really the value of all that work it
wasn't just the bartender it was
it was it was creating this
infrastructure that you've been showing
us for this last
hour uh that we can now apply to
everything from engineers to pilots to
to you name it i think we could probably
do um
a better job of simplifying this because
what we're going through right now is is
years worth of
you know research and tech development
and it's kind of coming out as probably
a bit of verbal diarrhea but it's
it's um we need to we need to make it
faster for the science this is our next
goal is of course like for example we
have a tool we are working on that is
the usable builder right i think some of
those features are not yet supported in
there this one
i didn't show you today but the goal is
to have these tools where
you know you have a bit a bit easier
like click approach
compared to like the data for structure
is mostly
you know it's this data content but you
know you don't necessarily have to
interact with that right
like you might have a tool that is much
more visual that allows you to know to
click here say oh i click on this
item part cool i want to add this data
directly and then it automatically
propagates right this is our goal right
you build the system and then you build
the tools to make the system absolutely
usable yeah sometimes we do it in
parallel but you know that means also
you're a bit slower and developing the
system and it depends but on the
priority of the company as well what you
want to deliver
i mean it was only a couple years ago
that the concept of news channels didn't
even exist
and yet we still had usables in the game
well we've got
a little over 1200 people watching live
who all are ready to create
npcs now thank you guys for
you know all the attention it is i hope
like again
it for me it feels always like that is
not enough what i'm showing right but i
think it could be nice to also get the
feedback from people like whatever they
want to see
we can show it next time you know uh
hayden before i let you go i have to
mention your your rgb
chair
it's the 100 million pewdiepie limited
edition chair
i have to represent oh no
no i'm one of them i'm sorry discreet
correct
went straight down the toilet after you
won come on
all right well that's where that's where
we'll end the show
uh thanks fran dan jacob
adrice and hayden uh thank you for
taking the time out of the end of your
week
uh to be here on the show uh
i understand you're the only studio that
doesn't have monday off right
no but but the third
is off in germany so yeah yeah
yeah yeah you guys have plenty of bank
holidays but you you enjoy the
the one day you guys have to work and
we'll all be honest on monday so right
uh thank you everybody uh guys this has
been star citizen live game dev
building npc behaviors i'm was your i
was your host uh jared huckabee
uh we'll see you next week everybody
take care bye
bye guys what's a pleasure see ya
pewdiepie chair really
you

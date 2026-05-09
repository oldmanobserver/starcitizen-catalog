# Inside Star Citizen: Project Mercury | Fall 2020

**Video:** https://www.youtube.com/watch?v=JnfdU2urcUw
**Date:** 2020-11-25
**Duration:** 11:15

## Transcript

what i think makes a fan favorite ship
is
it's that [ __ ] that people in their head
kind of see in a fantasy
sci-fi world it's that blockade runner
that carter runner that smuggling ship
that the company who makes it may not
think smuggling but that's the purpose
people start using it for
the mercury is a fan favorite because i
think a lot of people initially attach
to what it looks like
it has some cool features in it right so
it i think the deck is kind of stacked
in its favor you can haul cargo you have
multi-crew gameplay
you've got scanning you've got data
running it's
kind of a one size fits all that you'd
want if you were
only going to buy one ship so the
exterior on this ship the default
version will be white black and red
that white area on top is basically
where all of the tinting
gets applied for the ship
asymmetry is just something different
then so it's a little bit surprising
right when somebody looks at something
and they don't see the same thing on the
other side then there's always like a
little bit of wonder maybe
so it's kind of cool because it's kind
of like when you get a white suv but
it's like dual tone and you have the
bottom half of the suv it's kind of like
the black plastic
it's that's sort of the way we're
treating all of these crusader ships
when you first walk into a mercury
basically the feeling
should be of sort of open possibilities
right
so the cockpit has these cool retracting
seats they travel
all the way to the front and they kind
of give you this nice little ride
and then we also have all these
physicalized buttons where we actually
mapped out all of the buttons that we're
going to need for the ship and then
add the functionality to those buttons
as we implement the gameplay associated
with them
the visibility is really good it's got
this open canopy
that you can see pretty good in all
directions
and you also get a little bit of
downward direction so when you're
landing you can see the ground
the server room when data running comes
online this is going to be
one of the busiest hubs of this ship
you're going to see a split between the
server section
and also where you get into the turrets
so the server room is kind of a place
where you walk into
and then kind of decide what direction
you're going to go in and what exactly
you're going to do
it's going to have a lot of little busy
bee activity going around changing out
the server racks trying to get the data
that you're specifically looking for
to me what you really see in the server
room is many opportunities and options
for what to do next
rec room is one of my favorites this is
just due to a
we can play chess i worked on that for
quite a bit but we we got it there
and b it's that room where players can
get up kind of group up before a mission
talk about what they're going to do
how they're going to approach it and
then execute
they have room uh again you know we kind
of want to convey a little sense of like
relaxation
or a little bit more calmer you kind of
want to be able to relax and you know
and lay down and just kind of chill out
habitation you'll see sort of a long
hallway and then built into that hallway
you'll have several different stations
your toilets your sort of desk where you
can do your midnight reading
as well as some access to the sub-level
the maintenance sub-level is kind of
cool because it's
this just like these ventilation chefs
that you can walk around in
and you can kind of see the inner
workings of the ship
and you can kind of sneak around a
little bit but
we'll let you discover that on your own
engineering is very compact you have a
bunch of component housing surrounding
you the moment you walk in
this is where you'll most likely have to
run to make repairs when things start to
hit the fan
skating room is going to be really
really a really neat room
players when they go in there right now
they function as a support seat
so they need somebody else to run the
extra radar contacts or whatever you can
see it from that seat but in the future
the gameplay of that room it's really
going to come alive
cargo bay is very exciting in this uh in
the star runner in that we were able to
increase it
so the star runner is running a little
bit more cargo
it also went through probably some of
the largest amount of redesigns
of any ship that i've worked on so far
and that was to be able to fit the ursa
and cyclone inside of it and make all of
that kind of geometry work
making this ship was pretty rewarding at
the end
the thing i'm hoping players find a lot
of joy with is that element of
players kind of getting into that ship
and and having fun
doing what they really want to do as a
designer is
really what will make me really happy
kind of see it used for those purposes
the mercury star runner is the first
ship to arrive for manufacturer crusader
industries
and the success in bringing it to life
was the effort of artists designers
technicians and more
from almost every studio here at cig
now on this our special thanksgiving
edition of inside star citizen
i'd like to do something a little
different and give thanks not
only to the folks that you always see on
videos either today or in the past
but to those folks who work behind the
scenes that you rarely if
ever get to see folks who worked on the
mercury like
gin josh dan calyx arthur
graham daryl alberto lars daniel
jonas matt james patrick
brian colin francesco a second set of
james's and josh's
and some folks i'm probably leaving out
so
so let's go ahead give our thanks to
them and then let's jump into a sprint
report
before i remember who i left out and i
start to feel bad let's get to it
up first let's take a look at the
current progress for the lagrange point
gas clouds intended to come online in
the upcoming alpha 3.12
these particular clouds are designed to
add color
and texture to the various rest stops
found throughout the stanton system
now that the parent and child gas cloud
tech is ready for implementation
the lighting team is on deck currently
working to
dial in the specific palette so that
clouds closer to the sun appear warmer
and those that are on the outer reaches
present cooler
what you're seeing here is their first
pass through many of
the grange point stops in the system and
once they've hit all of them
artists will double back and fine-tune
each one ahead of their intended release
next month lighting artists are also
currently working to place the various
key lights
secondary lights and shadow casters for
the upcoming refinery decks
these tools are often used to add
additional texture and detail to any
location
or to make them pop as ian might say
the challenge here is always the same to
create a dynamic and visceral look that
makes a place feel vibrant and alive
while not going overboard so we remain
performative for players in the game
client
after this work they'll begin
fine-tuning things like
smoke and atmosphere from the giant
smelters as well as placing the various
fixtures in
to match the lighting they've set once
that's been locked down
work also continues on fleshing out the
docking area add-ons for existing space
stations throughout stanton
with this look at some of the work being
done on the interior areas players may
find themselves in when they arrive
now this sprint was all about adding in
details like
branding the docking services area
what's behind the docking services area
counter where you're
not supposed to go secondary details
along the floor like parallax occlusion
mapping
and an observation deck where players
can wait for their friends to arrive
or just watch the big giant spaceships
come in
switching gears for a bit it's been a
while since we've checked in on the
pyromaniacs in vfx
and they've just completed a sprint
focused on the addition
of convection propagation where the
calculations that determine how a fire
spreads throughout a room
or across a surface will now include the
influence of gravity
wind speed and wind direction the cone
you see here represents which affected
volumes within its path will be affected
by convection
where it heats up both voxels and
entities alike
and then the wind speed direction and
gravity are retrieved on a per
room basis this is important as it
allows the system to pre-calculate some
of the values involved
a necessary aspect in making a system
that can perform
not just for a single player but for
everyone
in a multiplayer environment and in
honor of iae going on this week
here's a look at some of the interior
progress going on for the crusader
industries hercules starlifter these
images are from the engineering section
on the top level
now that grey box phase is complete for
this section meaning they've
validated the location for all
components and subcomponents ensuring
everything fits as it should
the traversal needs for player
characters to get everywhere they need
to get
and that no surprises have crept up
along the way this section will begin to
transition to final art
where vehicle artists will begin the
detail work necessary to bring this area
of the ship
up to the high standards we expect of
crusader industries vehicles
finally to wrap things up this week we
can announce that the nova tank
the classic battlefield warrior
reimagined for the 30th century by
tumblr land systems
has begun its adventure from concept to
reality
with this look at its first steps into
white box phase
the nova is a massive beast that looks
to change the face of ground combat in
the persistent universe when it arrives
and we're very proud to announce that
it's just taken its first step
on its journey through the vehicle
pipeline so what we learned this week
well we learned that crusader industries
isn't playing around when it comes to
the ever-growing collection of ship
manufacturers in the star citizen
universe
that space is going to become just a bit
more colorful when
gas clouds come online and that we're
all just
one step closer to living that tonk life
for inside star citizen i'm jared
huckabee and for everyone at cig
happy thanksgiving everyone we'll see
you next week
you

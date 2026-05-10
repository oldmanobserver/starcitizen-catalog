# ATV Ship Shape: Drake Caterpillar II

**Video:** https://www.youtube.com/watch?v=DuQeAErhO4A
**Date:** 2016-06-07
**Duration:** 21:30

## Transcript

[Music]
hello everybody and welcome to another
Edition of ship shape I'm your host
Community manager Jared hucke and with
me in this episode is designer
extraordinaire what just designer
extraordinary it officially officially
is now technical designer extraordinaire
Mr KX Renault KX how you doing man doing
pretty good good now we are doing our
first ship shaped revisiting we're going
back and taking another look at the
caterpillar uh white box phase yeah now
we did a ship shape with a designer
Randy Vasquez uh quite a while back uh
when the catle Piller had its first uh
set of white boxing um as is often in
the case in game development uh things
change
requirements alter and stuff like that
and so uh KX has been tasked with rewh
boxing the caterpillar why don't you
tell us a little bit about that uh yeah
so uh the work that Randy did really
laid out the groundwork for deciding a
lot of the the broad Strokes design
decisions about about where the
caterpillar is going to fit in the the
broader universe and where it's going to
be like how how we're going to build out
our art for it uh this white box is more
about nailing down the specifics of uh
both this the space that you're moving
through the functionality of that uh how
we how we feel about um just just how it
feels to walk through this ship and I
mean that's that's the thing that I
think was most exciting about it is
walking through this ship and sort of
feeling it out yeah because I mean no M
no amount of effort time and time spent
can can can get you ready for that time
when you have to actually get inside and
you actually have to walk through and go
from from Station to Station stuff and
then you start you start realizing oh
okay our scale was a little off here uh
we we didn't quite we need a little bit
more in this area kind of stuff like
that yeah so we've had the opportunity
to go through and try some things uh
we've changed some of the things because
there's you run into these realities
that uh you know it's not it's not nice
to move through this space or this thing
is going to collide with that thing uh
so when you actually try it out it it
helps sort of illuminate these issues
and so we've had the opportunity to go
back and revisit it and I've also had
the opportunity to try out some new
things and sort of see where it's going
to fit into our future developments all
right so we're in cry engine now and the
caterpillars looking great here I mean
the Fidelity in this is is
just it's this is this is what PC gaming
allows really is the the opportunity
to I got there's engines back here
that's what those are supposed to be and
the freelancer is for scale yes and I
see I see bits of a hornet down at the B
The Hornet is here to explode okay it
will do that shortly all right so let's
take a look through the uh internal
white boxing of the caterpillar uh shall
we go into game now or sure like to uh
to start off here in the habitation
area switching to game feeling like a
person walking around you can come into
we so far we're only dealing with the
cargo module so uh all of these bits are
in various stages of white box mockup um
and so we've built it out like here
there's what it's look like when you've
got a pretty good haul and this is what
it looks like when you're empty and this
is how it is when you're completely full
and you'll be walking through and and
what size cargo units are these are
these one SCU yeah each each one of
these is
oneu um I do not offhand remember the
final number that the uh caterpillar
gets
it's I think with with all the uh
elements that are carved out for this
catwalk over here uh for each space
individually I think it comes out to
something
like uh
is it like is it 90 or is it 12
something it's not a final number we're
gonna we're gonna a final number we're
gonna deal with that um but the if if
you if you load it up completely you
have a fair amount of of cargo at your
disposal so so this is an empty cargo
module here and notice there's a catwalk
on one side yes okay and you have the uh
ability to come over here and open it up
oh nice feels kind of cool now the
original
white box in the r did had the cat the
cargo the catwalk rather through the
center yeah uh one of the reasons that
we wanted to switch it up um we felt
that you know in in the context of
eventually having firefights in this
thing it was nicer having split level
here rather than having a thing over you
uh you do lose a small amount of cargo
to get this space uh but it it feels a
lot better um having the bulkhead here M
uh
it's it's I we it just feels better
really I think it also plays into the
asymmetry of the ship though yeah you
know it it's just about everything I've
seen of the ship you know screams that
asymmetry so having the having the
raised catwalk on one side you know goes
along with that having some movement
issues every once a while I get stuck
that's fun
um we have I put it here yeah okay so
both sides do open I have a little rail
nice but I fell off
anyway all right so for these cargo
modules and uh the standard caterpillar
has four modules that can be swapped out
yeah right so you so you unload and load
from each individual model module off to
the side yeah uh and you'll probably be
doing it from that side your tractor
beam's over there but you have the
capacity to go through this way um
here's one short mockup of the uh we're
starting to to implement or think about
Terminals and some of the more ambient
interactions with your ship of you know
I walk through here and I want to know
what's in this space and this thing
should tell me and I should be able to
interact with this and find out what
those things are uh this would be
repeated throughout each of the each of
them but I only put it into this one
um and we have
uh you know double doors opening up for
between
everything okay and that's because the
modules can be separated yeah there's no
guarantee there's another thing on this
side
um and I'm getting stuck
again uh so we've put uh components in
every single one of these and in this
case we've placed them above where
you're going to be able to deploy them
out to bring them down for physical
repair you'll be able to reach into this
and uh swap out like do whatever uh
welding or what have you um if there's
something to swap out you'll be doing it
there I'm such a homer I was you see me
tilt my head like I'm trying to look
under it I have no 3D goggles
on and come up to the front and we have
as a that leads up to a turret which is
only mocked up here uh then we have uh
door
controls let's what's on the other side
of the the the clear is that is that a
window that was that was a window okay
um sort of leading you to the front of
the caterpillar the nose
here uh there this
space has various uses uh not all of
which I think are cleared for discussion
uh but generally we want a another
terminal here to tell you the state of
this room um there will be uh some cargo
plates so that you can uh you could
potenti use this for doing deals you
could potentially use this for egress uh
all manner of things um but if you know
we had the the cargo in there and that
was that was the frontmost space with
the door that opened so yeah so in in
front here is where that uh freelancer
was um and so we can open up the doors
uh that is not how these doors open uh
we've had well I mean this this white
box is an exploration right so
uh we put things in here to be like how
does this work how does this look uh
this is not like we have taken this
further now this is actually
uh has already received review we've
already have had notes on this this
isn't this isn't its final form um and
so
that's uh you know among the things that
will be changing is the way that this
opens but uh we have the atmosphere
Shield uh which is uh another thing that
we're playing around with you'll have
you know turned that off but nothing
happened because uh you know let the
atmosphere rebuild if I turn off the
cargo locks first
then oh it still doesn't happen because
it's broken because I'm faking it but uh
I I had it it was really cool you guys I
had it sucking the uh the cargo out into
space and now it's someone else's
problem that's right we'll see if we
can't get some video of that and put it
here as if it were happening live Then I
then I won't admit that it
failed um so you know we have these
sections will be will be uh sort of
explored individually uh as we build out
each of the the interactions that we
want for the various modules that can go
here um the cargo one it was chosen
because it's relatively simple so we've
basically seen all it has to offer um if
you take a look in our April monthly
report you'll see some concept work for
the uh habitat one of the habitat
modules yeah if I'm not mistaken and the
also the habitation this room um so
exploring things like uh having life
support here uh having an open out so
you can access this for
repair
um
having uh
Armory with this is where you're going
to store your replac me balls
uh most dangerous weapon in all of Star
Citizen that's right uh and I got I got
to have a lot of fun with the the
elevator
here um Drake Drake only uses the most
sensible of a deployment
methods yeah they're they're a very
pragmatic yeah
organization why wouldn't you have a
weird robot arm oh clipping
all right cut this fast forward to this
never show this part
again all right and we head back to the
engine room we have engines you can see
them
here clearly labeled as heavy engines
well you want to know where they are yep
really white boxing ain't sexy guys uh
you'll have all you know your Shield
generators uh ammo fuel um here's your
engineering terminal uh get to be
surrounded by all the the uh the
muuk um i' I've always been a fan of
this haunted uh turret here uh no
floor uh yeah so I also um this is where
I started uh mocking up the actual
interaction
for uh the the terminals um so one of
the features there a there's a better
example of this let's go to the better
example
just run right past that you'll see it
you'll see it that was cool looking so
uh I I took the one that was down there
brought it up here and flushes out a bit
um so one of the things that you'll
notice is that we have this neat
Parallax effect where the cursor does
not stay in the center of the screen uh
part of the reason for that is because
if it did if you just look at the center
of the screen and I moved that over
there now I can't see half the terminal
yeah uh which makes makes it really sort
of awkward but when I don't have to do
that when I can access the entire screen
this way and we have uh we we figured
out some some pretty cool stuff you know
it's it's a really an ambient
interaction you walk up to it and play
around you walk away it's done uh but
one of the things that is kind of cool
is that uh
the the system works in such a way that
uh it always Endeavors to keep the
uh the cursor on the screen and I've
found I've gone ahead and found one of
the the weak points because again this
isn't actually coded up this is us doing
a mockup uh but you'll be able to view a
terminal from any angle uh and it it
sort of naturally draws even if you
start off over here just through
interaction it'll end up looking at the
majority of the terminal having on
screen uh if you're interacting with it
but there's nothing stopping you from
looking away you can
always you you can have as much or as
little interaction with these as you
want um you'll be able to interact with
it and you know bring up
a a model of the ship having the map get
getting information there uh playing
around with um setting
messages yeah
but you know that that being able to set
things to to to leave ambiently in your
ship um really make it
yours uh we have no what is this say
that here that we're in right now uh
we're currently in the Command Module um
which is the detaching escape pod type
thing uh it's also the bridge of the
ship um you can kind of see it I don't
have it you in it right now but uh
standing next to it it's not given given
the layout of the ship it's actually not
that bad of a view like we don't we we
were able to raise it up
to have it uh prevent it from occluding
the majority of your view so it's it's
not not actually that bad uh you do have
to be careful because you're not at the
center of mass so when you rotate it'll
be uh a different experience but it's it
the view is should be just fine uh it
comes with the the turrets and um you'll
be able to have uh co-pilot and uh
tactics officer sensors all that stuff I
can't help but notice there's a ladder
down in the Command Module here
yeah is the Command Module two floors
now Command Module is two
floors yeah uh with its little habitat
area another life support uh the showers
um you have Foot Lockers you'll have uh
storage space you'll have the uh the
command module's own
engineering uh room with its own uh
engineering
station uh because this thing can just
leave so you're going to have to repair
it someday uh and come over and repair
the
engines yeah I'm going to start a uh
Drake caterpillar Command Module racing
leag I'm not here to stop you
um you know I'm trying out various
things like uh it's a little hard to see
let's see if I
my nope there we go uh that's that's me
I'm the gold
ball uh see if I
can so that's it's one of the one of the
cool things is that uh you'll be able to
uh register people and have them I
actually see people moving around your
ship and and and this looks like we have
control of the bulkheads too yeah uh
so yeah you can go over and you can
manipulate it from the
terminal uh you'll be able
to uh open and close the
doors which is all the way over there
but is definitely
happening we're we're too slow for it
though that's right yeah you have to you
have to explain to us what the the the
squiggly ball thing was that we're in
here deal that's all people are going to
be wondering about okay so uh this is
your tractor
beam uh and this is a mockup of
uh oh hey L some cargo it it did
work I told you it worked
I never
doubt that's the that's the cargo I
threw out earlier it's it's stuck in a
little gravity well a gravity well like
that might be how you manipulate the
tractor beam it might not we're still uh
you might pushing and pulling and and
doing things like that but this is the
control
reticle uh that I would be pushing
around and
um uh forget what keys I use to move
that around but uh basically set up a
little thing to tell you exactly where
it is in space and see it relative to
your ship uh I did not however make it
so you could turn that off so when you
leave it it's still
there
um that's this is a good chance to
remind folks that this was for an
internal you know proof of concept and
what not is not designed to be shown
externally this is one of those things
that we do that most of the companies
wouldn't but uh uh yeah we know you guys
like to see things in their earliest
State and their roughest state so we
take the opportunities when we can to
show you warts and all yeah we have the
uh avionics room the server room uh
Power Plant
room uh I have uh the the jump drive and
coolers and uh some more of the engines
here and you know so double decker uh
engineering Bay
uh pretty nice
stuff is there anything else that was
rad probably probably I love Drake
though yeah I'm I'm a pragmatic guy so I
like the the the pragmatic I also I'm
also a big fan of the used future you
know a much more a Blade Runner guy Than
A Min orary report guy so so Drake the
Drake aesthetic in general really speaks
to me yeah and I I like you you know
having having made this space walkable
and interactive I like the the degree to
which I feel like I can just Reach Out
And Touch the ship and how it feels even
with nothing in it to me this feels
lived in this feels like a a real
meaningful space so I like uh and the
the ladder here just leads back down to
engineering cool and the haunted
turret but I think that's pretty much it
for this uh KX thanks for taking the
time to
show us some work uh of course the
caterpillar has already iterated past
this like I said that the front doors
have changed what not and uh We've begun
not only concepting uh the different
modules in in our workings uh We've even
begun building some of the modules I've
seen Ln uh has already built out most of
one of the habitat modules y so um so
Drake caterpillar is in progress um it's
on its way uh we hope you enjoy you know
these early looks like this and uh yeah
that's been ship shaped for for Ship
Shape Drake caterpillar 2 thank you I'm
Jared
let finger
[Applause]

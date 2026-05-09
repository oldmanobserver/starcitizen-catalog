# CitizenCon 2953: Fix It And Fly It

**Video:** https://www.youtube.com/watch?v=OGFpYfcvYaQ
**Date:** 2023-10-31
**Duration:** 25:15

## Transcript

[Music]
hello I'm toon Lyman uh lead systems
designer for the EOP team and uh uh
welcome to this little presentation of
our most ambitious feature uh that we
are working on for quite a while already
we already talked about it several times
but this time it will be a little bit
different so before we start jumping
into the presentation here's a little
disclaimer everything that you are about
to see in this presentation was done by
the euu team so well mostly we got help
from the vehicle content team and the
vgpu team so what you will see here is
mainly placeholder art that was either
done by guo Bas or me so members of our
team and it's gameplay that we focus on
in this presentation so what you will
notice here is also that the UI is still
work in progress so uh visual changes
even throughout this uh entire
presentation so we are still
iterating but let's start with the
actual
presentation those that follow us for
quite some time probably know that about
the Resource Network already but let's
do a brief recap we will be talking here
about our technology that is Resource
Network and the engineering gameplay
that can be called a child of the
Resource Network the engineering task
will allow you to manage your ships
outposts and possibly other
things let's have G uh talk about the
technology first uh so welcome on stage
[Music]
[Applause]
[Music]
G thank
you hi everyone I'm Ge mobile B gameplay
programmer for this team and I'm going
to talk about the reson
network so what is the reson network uh
the main drive for the resour network
was replacing the previous p system you
might have heard about with a new system
that was uh more generalized easier to
expand and that will support all the
gameplay we actually want to
do and yeah so it is a network as you
can see on that picture uh so in the
connections between different items even
those inside of your
containers and it enables a specifically
the relay gameplay we're going to S
right after so it will have a global
impact you're going to see it in sips
you're going to see it in Outpost it's
bu a to work with the cargo system in
some
ways and as for interacting with it uh
the engineering gameplay where I show
today is going to be the biggest example
but you will also see it in other places
especially in
missions and let's have Thorston talk
about it a bit
more so hello
again so as a crew member of a ship or
as a person managing an outpost you have
several
responsibilities um where the
engineering topic can be split in three
activities and you can decide to share
those responsibilities or take them all
by yourself it's really up to you every
task requires their own skills and their
own tool sets there is tuning here you
are responsible for preparing your ship
your journey did not start yet so so you
adjust your ship items based on your
goals for the travels exchange sub items
adjust the default settings of your
power plant basically operations that
require you to turn off the items or
even remove them from it their
sockets the next activity is maintaining
and this is all about damage control and
keeping the items in pristine or
pristine enough
State you are the mechanic uh that makes
sure that everything is and stays
operatable maybe even go further in the
sense of caring for the items and what
carrying means is here reducing the wear
and tear rate by regularly removing dust
or oiling the items just as as some
quick
examples so let's actually show you some
of the maintenance you can already do
and will be able to
do so here we start with two gameplay
mechanics that are already in the game
so technically nothing new but the
entire engineering Loop ties them nicely
together uh here you saw me collecting
uh RC or still collecting and uh now I
will take the shield generator of the
recently destroyed Gladius uh to use
them as a spare part for
myself so all of this is of course
optional so you can p purchase those
items already and in the future even
assemble them for
yourself so
crafting
um while the fury approaches uh you
might get the glimpse of a debug UI so
the there is the fury now coming uh I
activated uh the debug UI to show you
the health state of each
item and uh what you should have seen is
that the shield generator is fully
destroyed and the power plant that I'm
about to take out now is uh in low
Health low Health means you can still
repair it so which you will will be
happening now with guo and Pete uh
repairing the power plant after I
removed it from the
fury so it's making it fully functional
again and here you see the Deb Qi the
health is now fully up again and that
means that it runs at at full uh yeah
full efficiency
again and here you also see that the
shield generator is at zero health so
the destroyed Shield generator cannot be
repaired because it's destroyed so I
have to exchange it with the spare one
that I collected from the
Gladius so with all those repairs being
done uh the fur is operatable again and
it can go its
way so getting back to the
responsibilities uh a big one is
managing your ship which includes
resources but also more General aspects
uh you have to manage the power
distribution and come up with informed
decisions like reacting to hazards like
malfunctions fire low energy but also
calling out items that need repair and
maintenance you will delegate the rest
of your crew to keep your ships intact
like giving clear priorities of what
needs to be done first let's take a look
at another video here so this is the
first glimpse of the engineering UI in
action it is still being worked on so
it's heavy work in
progress uh let's start with looking at
the item
[Music]
[Applause]
view so you can see the full setup of
the network with the relays the green
dots connecting to each other and the
relays connecting to the
items color and shape uh below the icons
should help you identify the different
item types like power PLS weapons also
helping differentiate between consumer
producer and
converters you can tell the current
state of the item that means the amount
of energy it produces consumes or has
stoed the health state it is in the
current wear and tear on the item and
the current state it runs in like
charging or being in an idle
State you can directly interact with
these items turn them on and off and in
the future even switch their
states
if you H hover over a relay that I will
be hopefully doing
soon you will also see that the amount
of fuses that are still active and uh
yeah because a relay consists of several
fuses basically they their own uh set of
lives and here you see all the the
details like you can click on the items
to see a 3D render of the the power
plant here uh the Quantum Drive sorry
and here's the the relay
overlay uh here Pete shoots a relay to
show the UI updates on the screen so
once this relay got shot at you will see
the update here on the UI that suddenly
the entire right hand side of your ship
lost a power
connection
and what you might have not picked up on
the screen is that actually the power
plant here that I'm now focusing on is
on low health so I'm commanding Simon to
repeal the power plant to get it fully
operational
[Music]
again so something to highlight here
take a closer look at the doors since we
also track the door States you see that
uh you can watch movement inside your
ships now nicely so you can track
players moving around in your ship and
even Clos doors for them or like
compartments in this case where Simon
just forgot to close the
[Music]
compartment um yeah so Pete destroyed
the relay we need the ship in fully
functional state so um yeah I'm running
now with a fuse and place it on the in
the relay so make the relay work again
um what you can also do with the doors
is that you can create safe Pathways
because you sitting at this engineering
screen have more information in regards
to your ship than the others so you open
doors to create a path that the players
on your ship has to have to
take um now to the room view that is
mainly the life support controls plus
controlling all doors uh again we show
the details of each room like the
temperature pressure atmosphere
composition so everything that is
relevant for like you living on a ship
we also show the door states where you
can now have precise control control
over each door in your ship as you see
here uh this will also allow you to have
a more control over which door or
compartments to open so here the again
showing the opening the power plant that
also helps very much in in already
telling players hey you should repair
this item so I open that door for you
and they directly know which item you
mean um it also allows us to control
like the outside facing doors much
better
[Music]
so you can directly open if you just
want to open the left side ramp or the
front side facing ramp or the back
facing
[Music]
[Music]
ramp
[Music]
so we did it last year already but uh
let's make our true suffocate again so
the moment that you basically pull off
their helmets and now me pressing the
cycle button you see that the entire
atmosphere in this room is vented and
yeah well uh the consequence is uh
[Music]
[Applause]
[Music]
[Applause]
death so as you can tell engineering
gameplay will bring a lot of changes uh
some of those changes are adding
batteries to ships that will allow you
to get a little bit of extra power for a
short amount of time allowing you to
control items directly where it's not
only their onoff state but also their
resource
consumption and where the biggest change
that will come in this update is to the
resource is basically to the resource
consumption and generation so let's talk
about energy balance currently ships are
balanced such that they consume less
energy than they produce what I mean
with that is that the sum of all items
or requires less energy than the power
plant will provide and this has to
change the energy rebalance that I will
explain to you now will affect mainly
bigger ships single cers will be will
still behave like they do now for Big
Ships we will focus on item groups those
require energy but your ships will not
provide enough energy to have all
components run at 100% all all the time
instead you have to decide what you want
to have permanently powered by your
power plant so managing decisions will
have an impact now you could decide as
in this example to shut down your
thrusters to turn on the weapons isn't
the best choice since you will not be
able to maneuver so might not help when
you are attacked you would be able to
shoot though and here comes in the
batteries in scenarios where you need to
react you can activate the batteries and
use the additional
power batteries won't last forever but
you at least can power additional
systems you will be able to recharge the
batteries again but you need to free up
energy from the power plant to direct
into the
batteries I think that was a little bit
more than just a recap but uh now GMO
will talk about
malfunctions
[Applause]
so I will talk about my functions real
quick and get you guys to the next video
since we're a bit behind schedle uh what
are more functions you've seen misfires
in the persistent Universe for seals and
for thrusters you've seen a very basic
version of it we're making them more
complex we're making them more lethal in
some ways and more fun to interact with
uh also some theal functions will
include fire spreading misfires that
represent electrical surges going
through the ship or signature burst
which increases your signature and makes
you show up on enemy sensors more
easily as for how you will counter them
you've SE you've seen suffocating people
with life support you will also be able
to suffocate the fire with life support
which is probably more useful you will
be repairing them not necessarily only
with a repair beam but also replacing
parts or some bespoke Behavior per
misfire and if all else fails yes turn
it off and
on and here's a video of the fire in
action uh you've seen in other videos
the fire this is a small fire you can
just put it out with a fire extinguisher
pretty simple it just
works uh here's a bit of a bigger fire
it might be that you Cann only put it
out on your
own so here we have one crew member
that's going to try to put it out with a
fire extinguisher
uh to mix
results and here we have the option of
using the Live support system th and S
up uh uh before and yes Bend in the
area
and now you can see that the fire once
we get to that compartment has been
successfully put
out okay so let's get thst and back on
stage and you see you saw a lot of the
systems in action but let's get a video
of one of our PlayStations which is
going to probably show it a bit
better so yeah um I have to excuse
myself already because I I was leading
this group of players being attacked by
by the Gladius and I did a poor job but
more to that uh in that
video
um yeah we wanted to talk about so for
this demo we have modifi the damage
system slightly to uh represent impact
penetration on a very basic level so you
are going to see that the the Quantum
Drive is going to be hit by the Gladius
attacking the
ship
so yeah being attack by Gladius for A2
isn't like a big challenge but in this
setup we were not like fully stared that
means we had our Engineers running
around and uh yeah no one being seated
in the in the in the turrets uh so yeah
our our goal was basically to flee the
Gladius and uh yeah with the Gladius
actually shooting the the the Quantum
Drive and damaging it I thought hey it's
a good idea to to tell uh Pete and Simon
to to repair the Quantum Drive as a
priority as you can see uh I somehow
missed that uh the habitation room
caught fire um I tried to yeah well um
prevent further damage to it but uh yeah
I I I failed
um yeah so uh that that was causing a
bit to the Panic so I even got
distracted in this moment so uh we we
managed to have the Quantum Drive
survive but here I notice oh actually
the the power plant also starts to take
damage and at this moment I'm also
telling uh Pete and and Simon to to
switch their attention to the power
plant because if we use lose the power
plant it's also like almost impossible
to flee so here I I realize oh my God we
are going down fast and I think at this
point now yeah I opened the uh
compartment to make it excess faster but
that was already too late so the power
plant died and yeah so uh the backup is
to activate the batteries which I did
here so the yeah um Simon Pete still
tried their very best to to fix it but
um yeah didn't manage to
um yeah uh the attack moved to the
forward side uh targeting the the
batteries because the player who was
attacking us actually knew the ship
layout and uh yeah here I I noticed that
the second power plant is also got
attacked so have to redirect the our our
mechanics to it
and at this point we wanted to flee and
then I realized why does why doesn't the
Quantum Drive work and uh as you saw
that there is a relay that also got
destroyed so here you see it very
clearly that yeah with a relay being
destroyed at the at the Quantum Drive
position that means that the Quantum
Drive cannot be accessed from the from
the pilot seat that means that uh yeah I
I also had to get that repaired so it
was uh A bit
chaotic um everything was also happening
a bit too fast here trying to save the
second power plant because we are we
already running out of a battery life uh
so yeah if we would have lost uh the the
second power plant that would have been
our certain death and I think at the in
the next part of the video um yeah we
yeah basically asked someone to to fix
the the relay at the back so that we
still be able to jump
away yeah so we at least managed to to
save one of the power
plants
[Music]
yeah that's that's now uh I think it was
Pete running there and fixing the fuse
and the next step was uh the pilot
trying to push uh the yeah
the the Quantum Drive but it was too
late uh we died
and the end of the show
yeah
[Applause]
thanks so what you just saw gives a good
idea of idea of how busy ships will be
and how what meaningful uh multic crew
gameplay will look like but what about
the future since we worked on technology
that will be used throughout the entire
game you will see more and more coming
utilizing this Tech it will introduce
system systemic gameplay uh with
allowing players to come up with
creative ways of uh manipulating their
environments sabotaging a power plant or
destroying a vital relay that connects
it all to shut down an entire enemy base
that can include its life support or
security systems it would also tie in
nicely with melstrom that you just saw
um and anything that will break off will
lose its connection the network to the
network and therefore have an impact on
its functionality so a real systemic
feature the technology allows us also to
take further steps into the crafting
profession as well as in the base
building where both are related to each
other bases built by player will also
form resource networks and come with a
unique challenges similar to
ships we are already we are all really
excited about the future of this Tech
and all the associated features so
there's a huge thanks for for all people
involved so thanks to the entire euu
team the vehicle teams Jared active
feature team and the arena Commander
team they all were super supportive to
get this uh Behemoth into a state that
you could see
here and it's something that has been a
long time coming and we are really proud
of it so thank you for sticking with us
on this
journey
wait there's one more
thing so we really want to get your
hands uh we really want you to get your
hands on this because we already had a
lot of fun with it uh I hope all of you
have heard of the experimental mode in
the arena
Commander so we want to bring you what
you saw here as an experimental mode
before we put everything into the Pu
and uh this will be soon
so thank
you

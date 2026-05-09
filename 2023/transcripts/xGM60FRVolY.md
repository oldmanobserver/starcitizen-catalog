# CitizenCon 2953: Taking Flight

**Video:** https://www.youtube.com/watch?v=xGM60FRVolY
**Date:** 2023-10-30
**Duration:** 48:56

## Transcript

okay hello everyone is my microphone
okay can you hear me
fine uh these are the wrong slides hang
on
well hello everyone my name is Yogi
clatt I'm a principal vehicle programmer
at Cloud Imperium games and the focus on
uh space flight and the um and space
combat I really love my job so this is
why I'm really excited to show you the
progress that we did on squading 42 in
the last two years so there's two things
I need to say here first thing is we're
doing a live demo and the build is
about 12 hours old so there is a good
chance
there is a good chance for for bucks
which um well if you see them just just
look away it will be
fine uh the second thing is um I'm not
flying myself today it will be brand
gunzinger
[Music]
he's using a setup of two vkb sticks so
left and right HOSA setup from vkb and
he's also using the Fantastic Toby
device so we'll swap during the
presentation between using hatw and not
using hat wracking um yes so but the
good thing is the relationship between
you and your Starship it doesn't start
when you take off it starts way before
that there's a lot of stuff we do now in
pre-flight um so please welcome back
Ines kalas who will walk us through that
[Applause]
process this working yeah okay hello
everyone it's a privilege to be here
back on stage to tell you all about what
do you can expect about the player
interaction experience inside your
cockpit if you like I've told you before
how we've been working towards improving
the player interaction experience all
across our game and we wanted to bring
this improvements to what happens inside
the cockpit so we wanted to give you a
greater immersion
and okay okay yeah the slide on sorry
about that yeah so you want to give you
a greater immersion and have and give
you a closer experience to what pilots
go through in real life not only when
you're flying around your ship but the
moment you take your seat at the
cockpit so to achieve this we've created
when you enter your ship you'll be put
in what do we call a new relax pose so
in this pose you'll have free look enabl
so you can easily look around the
cockpit and your
dashboard the promps will be showing
over the button so you can easily find
the ones you have to interract and you
the pilot have to press all the
different buttons to get your ship ready
for flying and the car hands will be
lowered away from the control stick so
all of this Blends neatly into our new
player animated interaction system
whereby as any button is now physically
pressed so this new system uses what we
call a CD ik approach this stands for
code driven ik or inverse kinematics and
gives full control of the ik setup to
the code so this among of things allows
us to record the path of the hand
relative to its Target so we can have
more detail animations than just simply
blending the hand into position so for
example we can open a flap and then
press the button but you know enough of
me talking let's go jump into the demo
and see all of this in action so
now so brand very kindly will get us
into the shape well you'll see the new
enter sequence and you'll see the new
animations we have been working
on so you can see now that you won't
directly grab the control stick you'll
be put on to this free on this relax
pose with free look enabled and you can
see the different prompts appear over
the buttons so let's get this show
started and let get your ship ready for
flying so Brent if you could close the
canopy so we don't go flying around with
that
open power our
systems look at
that and finally turn our
entrance yeah so we are you are now
ready for flying so we will be be
bringing all of this to all of our ships
in our Fleet and that's all for me so
please W join me in welcoming to the
stage Tony to tell you all about the MU
[Applause]
UI hi everyone my name is Tony I'm
senior UI programmer here at C and I'm
here to explain
some of the spoilers that you saw
yesterday about our new ship UI so are
you ready to see the ship UI in
action right bone play the demo the I
mean brand continue with the
demo so as you can see already this ship
has less intrusive UI with more space to
enjoy the standing Vistas that planets
can offer and less clut views so you can
focus during combat this also means than
the UI elements are now more relevant to
the situation linked to the operator
mode for example when we change to scan
mode the Crosshair has scanning
information about your Target and even
the mfds have changed some of these
elements can be customize but we'll see
more about that
later for this demo we're showing the UI
develop for this gladios basic
information related to navigation will
always be available on your view and
this Gladius displays all of that with
Holograms around the dashboard but other
ships may have different layers and
styles on brand with a
manufacturer for example the Drake that
makes more affordable ships rather than
fancy and probably expensive Holograms
may use physical screens dials and light
indicators this dashboard shows your
current speed the remaining afterburn
and some decoys available on both far
sides we have status indicators that
will show things like if your landing
gear is on or any any other flight
systems what mentioning that we have
prototyped these for the demo so right
now they're Holograms but on the final
design these are going to be physical
screens on the far left on the top of
the dashboard we have the indicator of
which Master mode and operator mode are
you on so let's change that to combat
and talk about this new
mfds so we have reworked all of these
mfds from scratch with brand new views
using our UI Technology Building Blocks
we can still navigate through these mfds
using the classic Mouse interaction
holding F and then moving the mouse on
the left here we can see the scanning
view which is going to show information
that you obtain when you scan a Target
it may show information about the ship
name the pilot name or even the current
operator mode of your target so you know
if they are just chilling around or they
are ready to fight
you cycling to the left one we have the
target status which will focus on
emissions damage and orientation of your
target we'll see that in action
later the next one continuing to the
left will be the self status which is
contextual so during navigation that
will show your current fuel but during
combat like right now we show
information about your guns you can
click on the gun and you can see basic
information about that you will see the
name and you can also see in which group
they are assigned which Yogi will
explain later
on the MFD on the right side we have the
power management where we can distribute
the power of different systems of the
ship you can click on the triangle and
move it around to change the
distribution and you can turn down the
total power of the ship that will
generate the classic key Bindings that
you all know already works so when you
change the power management you will see
now a triangle on top of the radar to
show you the
[Music]
changes now now instead of using Mouse
you can also use key bindings to select
mfds and cycle through the views which
might be faster when you are in certain
situations like during combat and for
those Pro players out there we have
added about a 100 key bindings and I
mean a 100 to navigate through all of
these systems so you can fully customize
how you want to navigate through
them and I really hope that's more than
enough to use on your keyboard on your
hotas or even on your game glass setup
but if you need more just let us
[Music]
know anyway I think you're not going to
need even th many shortcuts for each
operator mode we now persistently Save
which views are shown on each mfp so you
can customiz what's important to you for
every
[Applause]
situation so as an example during combat
you might want to have Target
information on your mfds but maybe when
you change to Quantum travel have your
current fuel spend some time on the
configuration screen for
example let's talk about this
configuration screen we're going to have
now here a variety of options from
customizing UI elements to enable
systems of the ship we maying some of
these later in action with
ji these settings are now available on
this screen not in the global settings
of the game for quick access so just as
a warning expect changes on the settings
that you already know but we'll tell you
all about it when we have it ready
and the important bit about this is that
they will persist to your ship so you
can keep different setup of which UI
elements and even ship systems enabl for
how you personally use each of your
[Applause]
ships now some of you might be thinking
that these gladio stes have enough
mfds can we enable the top
setting for those of you that you want
to see even more information you can now
cast versions of these mfds to your
[Music]
[Applause]
helmet for this you're going to need to
equip the appropriate helmet so it's
connected to your ship and get I can get
all this
information you can use the key bindings
as I mentioned before so you can select
which cast do you want to control and
how to cycle through them so you can pin
views that are important to you with
with your that will move with your
camera so as you have seen if you're AIT
at the Target or if you're moving with
your head trackers those views are going
to be always with
you with all this tools you can
customize your experience and have it
ready for every situation that you
encounter with your ship always
displaying the relevant information to
you so for example during combat you may
want to have all the U elements enabled
all all the peeps all the crosshairs so
the information of your ship on the
physical mfds and maybe focus on the
target information on your cast so
they're always on your view but maybe
when you go to Quantum travel you can
turn those cast off so you can enjoy the
vistas that's all from me now we have
mfds reies and let bring Yogi back to
tell you all about flying your ship
thank you very much
okay at this point our ship is fully
fully powered up ready to fly pre-flight
is complete so Brent please uh take off
put the landing gear in and bring us
out have you seen the interaction this
is great isn't it okay so um one of the
problems we always have in uh Space
Games is to produce a sense of speed
space is is big and the sense of speed
is always produced by you know small
things going around you so although it's
not very visible here the VFX team has
actually added space t so in the future
you can tell where your ship is going
even by uh even without looking at
instruments another thing we're focusing
on as well is uh GeForce reactions uh so
brand if you could jump come to a stop
for a
second when your ship is sitting like
that and you strave left and right you
have these small head
motions uh that basically
make your head and your body react to
the gForce they're currently enduring
we're actually increasing them now we
also added rotational g-forces into the
mix so if brand is now rotating the ship
to the left you also can see that your
head is swaying a little bit things get
a little bit more interesting um when
Brent is actually taking boost into the
mix so if we um now boost forwards we
now added camera Shake we added uh fov
changes um and this all then plays
together with the other things like you
know the other exhaustion effects that
we have so overall the ship should now
feel a little bit more reactive than
before the same thing
[Applause]
sorry at the same time we reduce the um
extensions that your uh that look ahead
code is does uh is doing so um we
basically narrowed it down a little bit
so it mixes better with GeForce reaction
so that even when you don't have a hat
tracker or something like that it will
still feel uh pretty good but this is
just a minor change
um we also improve the flight controls
themselves so take a look at the speed
gauge for example it's a little bit uh
trdy today what that speed gaug is
telling you the number that's currently
moving is what kind of speed goal brand
is actually putting in if he puts his
stick all the way forward the left one
you will now be able to see and read the
number that you're asking ifcs to speed
and forward momentum this also allows us
to bring back the sticky throttle we had
uh pre 3.5 where you now if you play
with mouse and keyboard you can press W
and S to increase and decrease your
speed and that go of the key and the
ship will not automatically come to a
stop of course this is all completely
configurable so you can enable that or
not if you
want okay Bren give me some hot flying
now like a blackout and all that okay so
um another thing we changed in the SL
model is that we actually looked at the
tri coding exploits these are really
important for PVP and racing uh players
among you because Tri coding gives us a
mathematical problem that we're trying
to resolve on some ships when you tri
cord you get actually up to 50% more
acceleration that huge difference uh
actually makes a lot of the ship
difference meaningless so we're cutting
back on those so um a first
implementation of that is already
available in the master mode testing
areas in 3.21 I think um but we're
improving the um algorithm right now so
that it actually is L uh is less
punishing um in future Master mode
builds uh this actually a current
version so as long as you go roughly
forward you get the full G's um from
your from your back from your back
engines okay so now the biggy in the
room we're talking Master
modes Master modes is by far the biggest
change we're doing on the ship gam
playay in general all of your ships will
be put into or will get a master mode
set up and the master mode is affecting
basically everything surrounding uh
everything on the ship the ship itself
the the the flight Model A little bit
but specifically the items and what they
do um and there are two Master modes
we're going to talk today about one is
semm which stands for space combat
maneuvering and the other one is
navigation so let's look into uh sem sem
is the mode that brand currently has um
has active so you see the um Bren can
you go into the uh indication please for
the master mode just point with a mouse
there if you
can yeah so this is your current Master
mode it says semm when you're you use
sem for basically all the gaml that is
not raval so combat mining salvaging
using it for that you have full access
to your combat system your Shields are
working your Thruster boes is fully
active your weapons are working it's the
high performance High alertness mode
that you're in however we will heavily
restrict how fast we can go um we we can
go with your ship okay Brent go to um
full Max Speed so this Gladius on max
speed and SC can reach about 225 m/s
that might seem slow compared what you
have in the Pew right now but it's still
pretty fast however you can extend that
speed um brand if you just go forward
and
boost so the Gladius can extend up to
500 550 m/ second on this slide here you
can see the speed gate uh the speed
spaces we're talking about so if you're
just walk U flying around in sem which
is like the max speed of your of your
ship you can reach the 225 m/s if you
boost you can reach up to 500 or 550
however that boost space is not spheric
that means if you boost forward you
reach higher speeds than if you boost
backwards that is really important for
space combat maneuvering because or for
dock fighting in general because it
discourages back strafing it actively
actually punishes back strafing and it
creates more interesting combat
maneuvers
um the PVP players among you they
basically call this uh encouragement to
closing the gap which is basically more
forward Centric combat which is much
much more exciting than back strafing
and just trying to get some shots on it
also forces you as combat players to uh
to commit to the decisions you did
earlier in the fight so it's going to be
uh we think it's much more
[Applause]
exciting so in short you pick semm when
you need to fight when you want to fight
or when you need to fight right um the
thing with the master mode switches is
that they do not happen instantly they
take a while to move over so um we're
now going to put our ship into uh the
second mode which is
navigation so navigation mode is
basically the opposite of SCM what uh
this does it gives you a high speed low
performance mode your Shields they will
collapse your weapons will not be able
to fire your defensive systems will will
not be functional um but you have higher
speeds so in NF mode you can still speed
uh reach the speeds of uh what you have
currently in the Pu something I mean
depending on the ship sometimes thousand
meters or 1400 m/ second um but all your
regenerative systems so regenerating the
weapon capacitor your Thruster boost
will be
inhibited so this means when you want to
go fast you need to be very very careful
when you want to swap over so imagine
you're in a fight and you want to escape
you should not do it right away because
if you just swap to navigation mode in
the hope to flee you're being left with
no Shields and the first thing that will
go offline when you're hitting with
Distortion guns is the Quantum Drive and
that is important because the Quantum
Drive will spool automatically up when
you enter Nerf mode and it will then
unlock the higher
speeds so this means when you're in N
mode and you're fighting you're very
vulnerable so you should get out as fast
as possible luckily navigation mode not
only allows you higher speed but also uh
gives you access to the new Quantum
travel experience which we're going to
show in in a
minute so that is enough point that you
see there on screen this is the point we
want to go to in Quantum travel
to before we do that I need to quickly
explain what this is about So currently
in the Pu when you Quantum travel from A
to B you're actually not not really
moving you're going on a spline and
you're teleported in every frame along
that spline so there's basically no no
meaningful gaml we can add there the new
Quantum travel experience is fully
physicalized physics is always on which
means when you Quantum travel from A to
B you are actually accelerating using
our awesome physics engine and because
it's physicalized it give us it gives us
a lot more meaningful gameplay we can we
can play with so Brent will start the
quantum travel in a second what will
happen then is your Quantum Drive will
initiate the jump you will see an effect
that distorts the space around you and
you will accelerate forward during the
acceleration process and this so this is
the time until you actually reached your
cruise
speed the ship will experience forces
and you as a player you're responsible
to counter these forces so there is an
element of failure okay Brent um let's
show
that ini and take your hands off
thank
you so what you just saw is is basically
the failed attempt to Quantum
travel Brad wasn't countering the forces
therefore he was thrown out the the
quantum bubble collapsed and threw you
out your ship doesn't like that ifcs
leads five six seconds to recover from
that during which time you uh you just
you're just tumbling right so um so and
this is not just uh like dependent on
your on your skills if you think
selecting a proper Quantum Drive doesn't
matter in the
future think again you want to take care
of your Quantum Drive you want to repair
it and keep it in good shape so if you
buy a cheap
one your travel will not necessarily be
faster but it might be harder okay so
Bren shouts how it's done properly
[Music]
the B is locked you can now go hands
[Applause]
off okay so there's a second variant of
quantum travel and this is for short
range jumps sometimes you jump somewhere
or you go somewhere and you and you see
the next point of interest is like 1200
kilm away we're not going to force you
anymore to travel that by hand you will
use a technique called Quantum boosting
it's a Quantum based short range jump
for like something between a couple of
hundred kilometers to like 30,000
kilomet or so when you use quantum
boosting the process is practically the
same but the quantum bubble will not
stabilize itself so you need to be
hands- on for for the whole time and the
speeds are naturally well slower but
it's not slow it's still Quantum
traveling right okay so Brent can you
boost to uh oh reinforcement needed yeah
let's go there let's boost oh actually
sorry thank
you okay so what brand is currently um
showing here is I think I forgot to
mention Quantum boosting Works in every
direction you don't need KN points
Brent is awesome thank you okay so now
please boost to reinforcements
needed so if there's knife point and you
boost your Quantum travel system will
pick that knife point to go
to welcome to pyro 3
[Music]
as you can see there's a lot of UI
happening right now there's a lots of
context there and this is not an online
demo it's a single player so that means
all these units
there they're friendly at hostiles
they're probably fighting with each
other which is a good seg way to talk
about AI improvements and there's one
man who can tell tell you all about AI
this is the man with the nicest legs at
cig well please welcome Diego Marty
Mason
[Applause]
so who's excited to see the new AI
changes hi everyone as Yi said my name
is Diego Marty Mason and I am the AI
programmer focusing on the fly combat
over the past year we've been working on
delivering a thrilling experience to the
AI
encounters let me first walk you through
our journey we first started looking at
the Kur behavior in the Pu we quickly
realized how uniform fighting was and
how we were not using all of the tech
available to us to make a more
interesting experience we had the
foundations and we wanted to learn more
about how you the players do your combat
Encounters in the verse so we did this
by getting combat recordings analyzing
videos and internal play testing where
we were hammering each other for hour
hours it was fun unless you went up
against experienced Fighters like
be anyway with all of these data we
started crafting the first prototype
with the focus of bringing that human
behavior into the AI brain when the
first version was ready to be tested I
handed it out to one of the best
internal pilots in the team
Yogi so Yogi what do you think about my
first
prototype it was an exercise of
humility it was an exercise of
humiliation I hated it and I blam
Theo so this was due to the AI being
able to keep a good range control and a
perfect orbit run their target while
maintaining a constant finding solution
come on it's a
computer we learned a lot from our
initial prototype and it really help us
to Define what we wanted to deliver a
combat experience where the AI get
challenging makes mistake just like us
humans we want players to leave every
combat encounter with a feel of
Satisfaction by encouraging you to keep
on the move and make use of the Vehicle
Systems available to you so you can at
least try to win the
fight let's see how we brought this new
iteration of combat to life we BR down
in multiple
stages the first one
interception then the main engage phase
which which we broken different tactics
strafer
jouster
Chaser and finally
disengage let's switch to the demo as
you can see Bren has encountered a scar
M let's talk more about the combat flow
[Music]
there okay we will start with
interception after acing the target the
prary aim is to close the gap with the
target if the AI is already the target
the inter interception phase is skipped
completely if it's too far it will tell
the AI to use the new Master modes to
swap into navigation mode and make use
of the fullest speit to chase swapping
back to STM mode when we are in a
Striking Distance that leads us to our
second phase
engage here the AA selects an adequate
tactic based on combat environment these
are choosing VI the traits and tactic
selector system you've heard more about
them in the previous to by Franchesco
so let's talk about the straford as this
is a six degrees of freedom game is the
natural combat shape adopted by pilots
we have to related the same behavior to
our AI ensuring also that orbits are
closed and adding variations to include
rolling sters will break combat if they
cannot keep an
orbit so now we see how the Hammerhead
is being attacked by Hornets this Hornet
are jousters jousters consist of
Performing stay in attacks while
outputting a lot of Fire power blowing
through smooth turning and repeating we
added variations for the M skill Pilots
like a skit roll attacks that provide a
spider-like fly path Jers are also good
at monitoring for back strifers so if
they cannot get into strike distance
they will just
break and finally the
Chaser now Bren is going to get there in
a second but the Chas it is going to be
the catus which is following one of the
Hornets and it's Alli with the uh hammer
head now we are really far far away 10
kilometers so the Chaser it will try to
always stay on the target six the idea
is to force the target into defensive
stance by making them turn into the
change this maneuver will be seen mainly
in squats and atmosphere
combat the Final Phase which can happen
at any time depending on the combat
situation is disengage this SP is
trigger based on constantly listen to
multiple events in parallel to name a
few critical Health damage to Shields or
weapons
depleted there is also a shorter version
of disengage that we call Pace breaks
which occurs during long periods of
combats due to fatigue nature of the
combat encounters these space breaks are
short and the main objective is to
perform a simple maneuver to gain a new
Advantage position in the strike again
this new flow is what encompasses the
code of our new AI fly combat experience
in combination with AI trades that will
give designers the tools to tailor each
combat encounter in the vers like for
example they can choose the a sta that
will allow AI Pilots to make use of all
of the ship's angular velocity so they
can keep a more precise orbit so for
some of you out there is going to be a
good
challenge while we've been while we've
we've been mainly focusing on fighter
Behavior we've also started to follow
the same process to other ship types
like gunships and capitals in the near
future we want to deliver experience
where going against a capital ship like
an Idis is a tough fight that unless you
bring the right combinations of tools
meaning ships that are equipped to take
down Capital ships you will get the mge
by their powerful
turrets now after all of the feedback in
our first internal play t we've receive
a lot of constructive and positive
feedback and Yogi is not longer been
destroyed by the AI so I think he likes
toar a bit more thank you everyone I
hope you enjoy the new Ai and back to
you
[Applause]
Yogi thank you Diego okay so now we're
going to talk about uh we heard about
how AI makes my life hard now let's talk
about how to return the favor we're
talking
weapons so the weapon and aiming systems
and squadrons they went through a lot of
changes I can only mention a couple of
them so I will go through them
relatively quickly first thing on our
to-do list is basically weapon tuning at
the moment almost all weapons in the Pu
are practically the same in scon that's
not the case almost all weapons have
different properties uh they're being
they have like different projector
velocities different DPS numbers but
they're not just um different in terms
of these numbers they also they also
feel different remember the Cinch
cannons from like a couple of years ago
there were they were very powerful
weapons but there were extremely easy to
use which which made the meta weapons so
we're going to bring the Cinch Canon
back but we make sure that the amount of
work you put into these cannons in order
to employ them is on par with the other
guns so there's a lot of stuff that
we're going to do um to make sure that
we like weapons have very a lot of pros
and cons um and avoid uh meta
specifically for this build Brent is
equipped with a nose uh I think a Clos
and run laser repeater can you fire it
once yeah and the other weapon he has is
a he has um two weapons on the wings
which are um gats ballistics U sorry
gats gats cannons uh size three with one
push they're actually firing two so we
also going to have uh burst weapons um
and so on Okay cool
so a problem we have in Space Games is
controlling the engagement ranges
because we want to bring the fights
close but the problem is
that well how do I put this
um weapons usually in order to bring
them close what the games game usually
do is they just restrict the ranges like
in the Pew a lot of the weapons have
exactly a range of 1,400 kilometers
which means often the fights occur at
1,399 M um this is not for this is not a
good um way for us to control the
weapons um and we we tried out things
like damage fall off so that uh bullets
get more damaging the closer you are but
the problem there is how do you
communicate that to the player so we're
going to do a couple of different things
with that in the
future let's see when the graph comes on
okay so show fans or show which of you
has an
Aries okay as an Aries pilot you might
uh know the following problem you have a
Target you're going to aim at
it um and then you
um this is what
the okay
I need to go back okay there's actually
some stuff not not there anymore I don't
know what happens when you aim with your
Crosshair on the over the PIP um is that
you actually not aiming at the PIP the
Legacy system gives you a pip which does
not show you where the PIP where the
weapon needs the PIP the new aiming
system actually produces the PIP space
them where the weapon sees them and
rejects them on the Target that means
the aiming information you're getting is
actually much much more precise and uh
this is a very interesting um sorry I
said the completely wrong
thing I'm sorry I'm nervous okay
controlling weapon ranges sorry I'll do
it now
sorry okay sorry okay controlling ranges
in the future all the weapons will get
much much longer ranges size one weapons
will fly to up to 5 or 6 kilomet before
the despawn the way how we do this wait
the way how we do this is we're adding
spread because spread is for us is a
very good indication on how to control
the ranges this is not a onetoone uh
relationship there so don't worry you
won't get like spread with like 20°
offset or something like that don't
worry right but if we compare the spread
of the uh spread of the weapon with the
target size we know when the weapon is
in range we know when the uh when you
actually are close enough so that the
majority of your hits can hit and we're
telling that we're telling you that via
the um by the aiming system now so Brent
let's go back to the demo if you get a
green pip and a green Crosshair it means
you have a high chance of your weapons
hitting hitting the target if Brent
takes a little bit of a step back and
waits until the Pips and the crossair
turn red this does not mean that the
ship is out of range you can still hit
it but you might waste bullets um this
also has the benefit that I'm not sure
if you saw that before but if you look
at how many how many bullets are in the
air you actually getting a lot of
bullets uh uh a lot more bullets and it
just looks a lot better okay Brent just
just kill these guys
now
[Applause]
bam oh
well okay
so um that was was the this one okay the
thing you might have seen is that um
brand has is loaded with size three guns
on size three gimbals that means we're
removing the M minus one system
that the reason for that is the original
intention of like controlling the
performance between joystick and mouse
players just didn't work out and the new
aiming system is flexible enough to deal
with these differences so we're just
removing it and keep going so next Point
pip
grouping if you have different weapons
of different with different projector
velocities you will get different Pips
because merging the Pips makes no sense
for us anymore because the weapons going
to have vastly different projectile
speeds so if brand for example enables
all the weapons now you get separate
Pips so let's talk a bit about pip
optimizations here and this is the thing
I messed up
before again who is an Aries
if you aim at your target you get a pip
right your a owners know that you aim at
the PIP you shoot you
miss and this is because the PIP is not
being shown where you need it in the
future we're actually offsetting the PIP
where the weapon sees it and then
reproject this onto the
Crosshair like that and when you then
hit you hit no when you then shoot you
hit um and this is of course also
communicated by the aiming system so
when the when the Pips turn green and
when the when the Crosser turns green
just
shoot okay so now to the actual best
part we cannot take down this Hammerhead
it's too big for us we need but we can
it the weak points on the
Hammerhead are the turrets the way are
we going to do this in the future is
with Precision targeting mode
[Music]
Brent enable phys targeting mode there
we go
what this does it does three things you
get this full zoom on the target um you
get a lower RPM of your weapons which
increases or decreases the spreads for
more prision and to get the painting
mechanic anywhere where you put your
Crosshair on that on that ship it will
tell the gimbal system where to aim at
so if friend now attacks the
turrets your aiming system will
automatically lead the
shots bam one through it
down Okay so this Hammer had now
understood that is not good that doesn't
stand a chance right now but this will
be the way how you in the future will
will uh fight um against sub targets and
so on
the good thing about this it also works
even without um painting the target
directly so you can do very very precise
warning shots um and and there's no aim
assist that kind of like destroys your
aiming processes okay so the fight is
now
over sorry I need to rush this a little
bit because I messed up stuff
before and you're going to look at pyro
3 okay Brent switch to na mode and bring
us down to that landing spot
so pyro 3 is also called
Bloom it's a very big planet with a nice
atmosphere and um oh something wrong
with
throttle oh well something's wrong with
a throttle we try to go down as fast as
possible
though I said gameplay demo might have
[Music]
bucks okay going to go there now okay
yeah steeper angle that
works okay so the um the thrusters on
your ship they do not like the they do
like the vacuum of space they're we're
talking spaceships here right and we
have thrust efficiency curves on these
thrusters so at some point especially
the me thrusters they will cease working
because they don't like atmosphere they
will overheat very very quickly so
there's the question what happens when
you go down to a planet and you want to
rotate your ship with your thrusters off
well we'll see can you go to external
view can you wagle your
tail okay back first
person okay so what you see here is the
new aerodynamics model because obviously
our uh left stick is somewhat damaged or
so we can't be as fast as we want um
actually Bren can you try W and S on the
keyboard
instead oh it doesn't work ah why would
you
add no doesn't yep okay no the stick is
uh is the stick is uh affecting us okay
anyways we're going to go down as much
as as far as possible so the new
aerodynamic system is a complete
replacement of the aerodynamic system
that you currently have and you need th
um you need to control surfaces to
actually uh turn the ship around it
simulates the airflow over your lift
surfaces and therefore the slower you
become the less effective those uh
control surfaces will be in order to
turn your ship so we can demonstrate
this so if brand just sits here and Ys
left and
right you will see he cannot go uh
further than that that is in line with
what real airplanes uh also experience
when they're trying to use the rudder to
your left uh left uh left and right so
what brand can do here is he can roll
and he can pull to actually change
um his Direction
[Applause]
okay so just for this demo we added a
button the button is called thrust a
disconnect because um at the moment in
the Pu when you go through a planet
you're using the thrusters to rotate
we're not doing that anymore so Brent
disconnect the thrusters please and put
the ship into a purposeful stall a stall
happens when the air flow over a wing
seizes um or over a lift surface ceases
and then at some point you will not have
any Authority anymore and your ship will
not turn and so on and you will
basically fall out of the sky that is
naturally a state that every plane wants
to avoid naturally right and this is
happening right here Brent is not able
to to use the control surfaces right now
because the ship is in a in in a process
of stalling however the airf flow will
pull the nose back into the wind and
once you have enough speed he can
actually well he gets Authority back
over the control surfaces
that means for you as players what what
you can actually do you can do Arrow
breaking you can do pure gliding if you
want to uh you can even do like
competitions like I don't know like Drop
ships out of orbit and then see how fast
far they Glide this is all possible with
a new system so let's talk about the
problem how do you come to a stop
now to come to a stop with a new system
you need to purposefully put the ship
into a stall
but don't worry when we don't have the
thrusters disconnected ifcs will help
you so you're going to bring down the
speed more and more until you're
reaching stall speed which is about now
and then the thrusters will kick in and
and catch
you that means however you are now in a
state that the thrusters don't don't
like right so at the moment we have
turned this up but in the future you
will not be able to hold this for long
so if brand for example now from a hover
strave his
left more left more left more left the
wind flow again pulls the ship over and
you go forward
[Applause]
again okay so now brand Now show us uh
how to come to a hover and uh do we have
some water here oh yeah there's our
Point okay
[Music]
W okay so there's our Landing
Point can become a little bit slower I
don't know 100 m/
second so we're trying to land somewhere
here
whoa look at
this yeah that water's great like
awesome okay so now we're coming to a uh
so now brand will try to land with a
broken throttle
and yeah he's aided a little bit here by
uh by the landing gear so he has landing
gear out I think because that
automatically enables Precision mode at
the moment so that you're a little bit
slower but you can of course like turn
this off as a player and then you come
smoothly down to a landing the best way
to land your ship is in decoupled
because you can
just like very smoothly landed on the
surface and clonk
and now you're going to power down the
ship using the new
interactions engines are first then
we're in the relaxed pose again as in
showed before power
off and the canopy off uh no open not
off don't don't put the canopy
off and get out of the ship
and probably go for a swim or
something okay that was a bit of a buggy
bumpy ride but um thank you for taking
um the time with
us and we'll see you in the verse thank
you

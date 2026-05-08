# Inside Star Citizen: Alpha 4.0 - Playing With Fire

**Video:** https://www.youtube.com/watch?v=vaKzp5ZP7Q4
**Date:** 2024-08-08
**Duration:** 15:35

## Transcript

last week we explored some of the new
adventures available to players in space
in the upcoming Alpha 4.0 but there are
even more dangers to be found within
your spacecraft and vehicles fire is
blazing a trail towards its awaited
debut in the persistent universe and
while we don't want to burn any Bridges
with the resource management team we'll
jump out of the fire and into their
frying pan in just a few weeks w i
really bet their ears are
burning we're fired up to give the VFX
arsonist a chance to set the world on
fire this week or at least just the
interior of spaceships because we don't
want them to burn themselves out playing
with
fire I'm out of idioms now I'm going to
go see if I can add more fuel to the
fire
[Music]
in 4.0 we'll have fire inside of ships
for our initial roll out we didn't
really want players to start fires
everywhere uh the poor service they
really wouldn't be able to handle it so
we decided to focus on the the interior
of ships uh they're smaller more
contained and more controlled fire is
tightly integrated with the Resource
Network system and a great fit for a
first release with in the spaceships
where Resource Network will be focusing
on as many ships as we
can starting a fire is based on damage
and like different kinds of
damage fires can be caused by ship items
when they hit zero Health there are also
ways for ship items to cause fires in
the normal running and operation of them
we're currently looking at making it so
that when they Mis fire and they have
the highest level of wear that there is
a chance that they can also cause
fires but other types of damage like
impacts from weapons or explosions they
could also ignite a
fire another way to start a fire is
getting the environment hot enough to
actually get your surfaces to autoc
combust for example if you open up your
door on a really really hot planet and
the hot air starts to flow into your
ship then uh if that air is hot enough
and some surfaces might start igniting
from that seriously I can open my door
and my ship might catch fire you would
need a room to reach think it's like
1,000 Kelvin for those materials to
start to smoke so it's something that's
technically possible but it's not likely
if the planet is warm enough yes is
there a Planet warm enough to do that
right now don't think so okay I just
want to be sure you're saying systemic
it's possible systemically it's possible
yeah it's technically possible but very
unlikely don't worry
everybody part of the fire hazard system
propagation is based on the fire
triangle which is oxygen Fuel and
temperature oxygen is tracked by the
room system the atmosphere that is most
rooms in Universe have their atmosphere
tracked uh including oxygen the fuels
they will be tracked on the surfaces so
every surface in the universe is marked
up with a surface type that surface type
has different properties for fire
propagation to work the heat that is
usually from a ignition source is the
damage that could happen but also if you
have an object already on fire that
could start a fire again based on the
heat that that fire is
emitting fire will start small if you
have a small ignition point so it will
not start blazing immediately so it will
start propagating quite slowly but if
you leave it untended then the fire will
starts growing and the more it grows the
faster the propagation will happen and
the larger the fire will gets it's quite
complicated to have a control over that
much energy heat it's a balance I think
that's the hardest thing to get having
the balance having the fire tech texture
that works well with the particle
Behavior with the heat the Sparks you
need to to have the whole feeling of
heat and danger and it's when you get
this spot where it really starts to make
you look Sly afraid of it that yeah it
starts to get gets good I would
say each of the materials that we have
marked up they have their properties and
we can set a material to be combustible
or not most surfaces will be combustible
a few exceptions such as glass will not
be but the ones that are especially in
ships we decided to go for a more Tech
approach so even if metal itself will
not easily combust we assume that behind
that metal there will be pipes and
cables that can catch fire based on the
properties that each surface type has
for example wood will burn different
from rubber or plastic or metal so the
propagation between those will interact
differently don't worry like not
everything will catch fire at the same
time we have these different properties
that will cause different surfaces to
catch fire at different
times you have to think of the other
things that can also catch fire things
like your cargo which you probably don't
want to catch fire because if it burns
out you will lose it other things might
be loose ship items that you have have
laying around just in case you want to
repair your ship the player itself will
not be able to catch fire but the player
will feel the influences of fire in
their environment so if you step into
the fire then you will take
damage if you are near to the fire you
will feel the heat so your uh actor
status will start showing up with like
higher temperatures if the fire is not
managed properly for example your life
ports uh can't feed in enough oxygen
then oxygen will be drained and your
player will start to asfixiate why can't
I set people on
fire
te will you commit here and now that
someday we'll set people on fire I will
commit to
nothing I tried
everybody people will have different
ways of setting fires to ships hopefully
other people's ships not your own it is
important to know for 4.0 that we will
not have fire outside of ships so if you
set fire to an item inside one ship you
can bring it to another ship given that
the medium that you're traveling through
has enough oxygen to sustain the fire
you can set fire by damaging items in
the ship so shooting them when an item
dies that has a chance to set
fire other ways to set fire are are
bringing in ignited items and placing
them in someone else's
ship one of the biggest challenges that
we recently had with fire was the
networking and Francesco has done a
really really amazing job with getting
that
ready the presence or absence of fire is
an very very important thing to convey
to players you don't want a player
stepping into a thing that doesn't look
like it's burning or avoiding a that
looks like it's burning synchronizing
fire was a very important part of making
sure that the F should function
correctly and we have a lot of data that
fire generates and a lot of data doesn't
work well over
networks there was a lot of work put
being put into relying as much as
possible on the fact that our fire
system is stable it's deterministic it
will always do the same thing given the
same initial
parameters there were a lot of cases
there were cases of players is joining
in late they obviously don't get where
the fire was 3 hours ago they just say
now they need to know what it is now
there's players who have really bad
internet connectivity or servers
struggling a lot situations that bring a
hold to The Continuous progress of fire
from one end or the other and we need to
reconcile that so we needed a way to
know when fire was no longer suitably
similar between what the player was
seeing and what the server thought was
there and refresh it at that point and
minimize how much data we needed to
refresh it at that point we are pretty
happy with the way it works now uh we
have it so that it sends as little data
as possible to sort of create these
summarized States for the CLI in server
and only when these differ enough do we
actually send a relatively big still
compressed but relatively big snapshot
to synchronize everything back
together a fire that is left unchecked
will spread throughout your ship and if
it does this and it reaches your ship
components system is offline then you'll
be having a very bad day and this could
lead to your ship being both crippled or
destroyed so this means you will be able
to put out fires using a fire
extinguisher where possible we have made
sure that fire extinguishers are readily
available throughout our ships the
extinguishers they're very simple to use
they are point and shoot you have to be
careful that you don't start flailing
wildly with your extinguisher if you
have to aim at the base of your fire and
then keep it there to cool down the
surface and take away enough of the Heat
and the oxygen so that the fire calms
down there will be temperature readout
where you can see how strong the fire is
still where you're aiming and you need
to keep your finger on the trigger until
it actually goes out fires can just be
smoking there and technically it's very
close to being on fire so you really do
want to make sure it's really out before
you move on because if you just leave
them smoking and then go wandering off
there's a good chance it will heat up
again and Catch Fire
again it's worth knowing that a fire
extinguisher has a limited amount of
ammo within it to your benefit you can
also take your fire extinguishers back
to where they are stored plug them in
and then they will recharge their ammo
however it is important to know that if
your ship doesn't have a functioning
life support at this moment the recharge
will not work if you leave the fire
completely untended then your ship can
completely burn out so it will be look
completely black if the life support can
keep up providing enough oxygen then it
will just keep going until all of the
fuel that is the surfaces has been burnt
out or if the life support is not
running then your fire will start to
diminish but if you don't do anything
the life support will keep feeding in
oxygen enough for the fire to be
sustained and start spreading everywhere
you don't want people to put fires out
no I I want them to die in a
[Music]
fire views and opinions of Leo do not
represent those of Cl here in games r
space Industries or subsidiaries
there are more ways to extinguish fire
with the life supports and Resource
Network you can cut uh Power to your
life support for a room and that means
that there will be no more oxygen
provided which means that the fire
itself will start using up all the
oxygen and it will extinguish Slowly by
itself another way is to open up your
doors to open space and that will mean
that all of the atmosphere is being
sucked out into open space and again no
more oxygen for your fire to
continue after a fire you can repair
your items or replace them fire can
damage your interior of your spaceship
we have some very beautiful burn decals
that Francesco and Gom have been working
on to show you where your ship has been
burnt the visual damage to the surfaces
is not something you can repair manually
but you can go to a repair station and
uh repair your ship there and that will
get rid of all of the visual burn but if
I want to leave it burned cuz it looks
cool I can do that you can do that it
persists I'm very happy with the current
progress It's been a very long route for
the team to get to this point it's
amazing to finally be able to roll this
out to the
players it's am amazing to work with
it's just so fun and the results are
very good and very quick so I'm looking
forward to to see what people will do
with it like what kind of weird Edge
case they'll find and we'll probably
have to fix up but it's as long as the
servers don't die because of fire and I
think we will be able to deal with
it so what did we learn this week well
we learned where and how fire will make
its first appearances in the persistent
universe in your spaceships how it'll
spread and the dangers of leaving it
unchecked your spaceships will burn and
maybe go boom and both how you'll put
them out or potentially spread the fire
to other vehicles and I'm banking you
all might find some ways that we missed
now don't forget the ship Showdown is
still underway it's your chance to vote
on which vehicles you like best as well
as send John crew messages on social
media that he legally has to respond to
during this
time hi all David here the only thing I
have to to say about this is no just no
our program will now conclude for inside
Star Citizen I'm Jared Huckabee thanks
for letting us share the people and
process of game development with you and
we'll see you all here next week it's
time to go pyop Planet
[Music]
Side how do you start a fire first you
contact the
ATC yeah yeah I could start with that
that would be good I could say that I
could say that you want me to do
that well first of all you start yeah
you you you call the ATC and they set
fire to your ship
[Music]

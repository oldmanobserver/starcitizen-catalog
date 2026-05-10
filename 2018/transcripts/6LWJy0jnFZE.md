# Star Citizen: Bugsmashers! - Will You Be My Crash?

**Video:** https://www.youtube.com/watch?v=6LWJy0jnFZE
**Date:** 2018-02-14
**Duration:** 9:02

## Transcript

[Music]
everyone welcome to bug smashers
I'm your host mark gaming let's get
smashing everyone we are here at my
fancy Dancy test level and we have a fun
item for crash when things get destroyed
it's kind of weird to replicate it
however we have a nice little user
example right here some designers we're
sending up the 600 eye and they
accidentally left and these animal
Jack's inside of the object container
they're not real people they're just
fake geometry the inside of the ship is
of course a object container which means
we load in the outer shell of the
vehicle and then we have this object
container which is like a mini level
that we load inside of it and that's all
this fancy stuff that you see in here
and what's cool is it allows you to have
a ship and work on it and do all sorts
of cool setups and then we stream it in
it's pretty nifty now when you were in
the editor from the letter that we're in
we have the option to go into this thing
called game mode which is a hit ctrl G
we go in game mode and we play the game
as if it were real and if I hit escape I
go back into editing mode and
unfortunately when I go into game mode I
am going to crash
and I'm crashing on one of those animal
Jack's just to do we could go right here
so we're deleting let's see what atom
object we're deleting we're deleting an
atom object that's class dude
somewhere he has a name there goes enema
object 0:03 so when this guy gets
deleted so we have the vehicle we're
going in game
removing the inside and bringing in a
new one because during gameplay and
editing things might change and we need
to refresh the state and we started
leaving all the stuff inside of it the
anima objective little guy is crashing
trying to delete its item ports that's
all the gear that you see on the top of
them what's weird about this is where
are you that that so the item poorer its
container here we are we're in the D
constructor of the item port container
so this means when this object is
removed can delete it this is the very
last thing that gets called before the
memory gets wiped and it has a list of
item ports as you can see it's kind of
destroying them right here and
unfortunately when it destroys them at
this point any listeners listening form
is going to start accessing those item
parts and I import containers however
it's in the D constructor so when you
access that stuff things go wonky and
you end up well crashing so what we have
installed earlier is to do somewhere in
the events I like scrolling so I'm gonna
scroll Scroll scroll where are you
events there we are we have this event
so when we mark the entity for delete we
can do some actual nice clean up then we
could delete the entity sometime later
so we're gonna try to find out why this
isn't working and instead it's cleaning
up the entities in the D constructor so
let me pause it and using that entity
name we're gonna add some code
everywhere to do some debug breaks to
track down what in the world is
happening let me write this guy down
[Music]
here this guy's name
and this is not production code this is
pure debug code to track down the order
of all the shenanigans so I'm gonna add
a debug break anytime to get an anima
brick three and we're removing the item
ports and then we're also going to do it
any time we add item ports and hopefully
we could track down the sequence of
events and we'll add one of the duh well
we can't have one there because the name
doesn't exist but we could add one right
before it gets deleted and done Sam
so it's cooed all things alright so I'm
back in a little edit er and put some
debug breaks everywhere let's hop back
in the game and see what's happening so
first thing we get is when we go into
game mode we are getting the right call
we're deleting this thing so the vehicle
is getting rid of the object container
deleting all the entities inside of it
so the interior is going away and our
animal object is getting rid of all of
its item ports in the correct sequence
which means if it deletes it here and it
gets it somewhere else
something must be adding them at another
time and of course there it is so we
deleted them all because our entities
getting deleted
however some fun editor code seems to be
messing with us let's see what's
happening now
oh nope not yet this is the new one
coming in alright continue on new one is
actually what is this guy did you do
ah we're sending events to everyone so
what's happening is we deleted our
entity getting rid of his item ports
switching in and out of game-mode causes
a system-wide event to reset and when
this entity gets told to reset
he basically fixes himself back up adds
all the item ports again because fun Lua
and then get deleted the next frame
because we're now gonna get now and done
we have item ports and then we end up
crashing because we have item ports and
deleting in the destructor so yeah
fun times bleed the entity get rid of
the item ports at the right event and
get a system-wide event saying hey reset
because we're in the editor going in and
out game mode and all the item ports
back only to get destroyed again and
cause of mayhem
so what we want to do is in our
system-wide event technically we only
care about re setting all the events
that are hand placed in the level not
dynamically spawned so we hand placed a
vehicle it needs is a reset but the
object container that it creates doesn't
need to get reset because the vehicle
handles that so easy fun little fix is
if we're removing this entity don't
broadcast this specific event system to
all the entities now let's code up again
and see how that works out
all right we're back in the scene
brought down my three are 600 I asked to
300 I'm gonna hop into the game and
we're deleting the old option container
getting rid of all the entities getting
into Barra and I'm object it's getting
rid of all its item ports and then this
is the new guy getting created due to do
hello new guy here's our old one
ah give me my mouse there's my mouse
let's double check the memory we have no
item ports sweet continued on and I'm in
the game and of course my 600 ID just
falls down because I had in a gravity
volume and yeah I think that sets the
mood until next time hope you guys
enjoyed Oh
so as you guys saw we had a fun little
crash where unfortunately we have some
back-end legacy code that was trying to
refresh the entity state that caused all
sorts of havoc so when you dropped in
and out of the editing mode it just
exploded and crashed everywhere
well we hooked up the code so it would
only make those modifications if it was
a entity that was placed down inside the
level and not one that was dynamically
spawned hope you guys enjoyed until next
time thank you for watching so if you
want to keep up with the latest and
greatest in star citizen and squadron 42
development please follow us on our
social media channels see you soon
you

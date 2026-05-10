# Star Citizen: Around the Verse - The Evolution of Quantum Travel

**Video:** https://www.youtube.com/watch?v=FNv8yyqmd-Y
**Date:** 2017-11-09
**Duration:** 32:58

## Transcript

hello and welcome to another episode of
around the verse our weekly look at star
citizen's ongoing development i'm sandi
gardiner and i'm chris roberts and i'm
just compaction europe yes he has
today's feature sets its sights on the
quantum travel system with so much
distance between celestial objects this
feature is an essential part of where
your journey starts it sure is but
before we get to that let's see what
progress the team is made on alpha 3.0
in this week's installment of burn down
burn down welcome back to burn down our
weekly show dedicated to reviewing
progress on the release of star citizen
alpha 3.0 we've been working through
each of our designated categories as
laid out in our previous episode as well
as on the production schedule which are
shopping missions ship in vehicles
traversal moby glass and overall
performance and stability let's go to
the team and see how each are
progressing
so commodities commodities shopping
polish so basically there is a first for
your Chris prioritize Simon White's
tasks there are some Simon white polish
that is needed however Chris one it's
the 2.0 stuff taking care of first
so the there's just a final tests that
are signed on seven white like basically
it feels like you've got stuff to get
like all the features in other content
in and then you've got polish stuff like
the shopping or the ships right right
so these the kiosks we've been looking
at these are the original ones they're
very kind of the feedback we got was
that they would feel very kind of like
tacked on a little bit screens a bit
small so it's a little you know the
experience isn't necessarily best for
the for the player so basically we've
been looking to take this generic kiosk
and try something a bit more bespoke for
the stores and so it's very close to
being completely so the tablets also
helps and we know that any work that
we're doing now can get plugged in and
will just work
this one here is finished for parles are
I'm currently working myself on the
counter for Levski which is the kiosk
for Levski which is almost on or the
members of the team are pushing hard to
get the counters for different Harrison
bazaar bargains no sorry not Bazaar
bargains and dumpers Depot and other
stores from around the game each will
have their own like unique and bespoke
kiosks and shopping counters and stuff
and yes it's very close to complete
just to move on to them to above the
shopping physical shop polish and
actually icon route Oh Todd's got a sync
with Jake and Ryuga and for the work
being done on that because he's doing
okay so Jake is very confident that
those people finish it in time so 43.0
we've got several several NPCs that were
working on a couple of which are the
mission givers we got Eckhart who's
obviously in Levski which he has know
about we got Rito who's also been coming
along as well these are both two very
important characters because they're
going to be responsible for doling out
some of the the content that you guys
are gonna have access to we've been
capturing a few few more animations for
a cart which is is it going to help fill
out his set of animations allow us to do
the the intro conversation and you know
the follow-up conversations after that
so really kind of separate those
experiences for the players we've been
handing this this work off to the
frankfurt office so we got Vitus of
kunais we got Chris speak who's also
helping out under the dance repens team
so that it's really been kind of a
global effort to kind of get these guys
together as we focus on closing out
shopping here
keyway literally like ten minutes ago
just gave me this issue
we're spawning a second ship blacks out
the entire environment and removes all
movement controls for everybody on the
server which is absolutely bizarre it's
such a weird yeah exactly so this like I
said this was present on the eighth
month for bill that we kicked off before
lunch which is you you disappear hmm
everybody this happens everybody and you
can't move the program you had was
working on the overheat field on the MFD
I am discovered I mean I noticed that we
aren't displaying the ship global heat
pool anywhere which is the thing by the
way so we should probably have that so
I'm going to be adding that in today
probably talking to max about where I
get that information from that wasn't
able to track it all down last time
but that's the current thing that I'm
working on
and at the minute in there close down
for three oh I'm looking after kind of
three main chunks of work that really is
six individual features these three
segments of work are ifcs and flight
balance and that's comprised of
atmospheric flight ii sage stage
afterburner and also grav live polish
and tuning all these with two tasks that
we checked we've Todd this morning which
we've gone to the epic which was the
modified atmospheric flight model which
was the first one we talked about the
second one was the atmosphere switchover
trick triggered by the level of ship
drag which was the second one and I
mentioned as I understand it and it's at
odds Todd said that proposal the we
thought took to Todd was the first one
the modified atmospheric flight model
was the one that we wanted the second
one which was the atmospheric switchover
hopefully will be easy to get however if
it runs into any problems we're also
happy to push that to three one so the
minute that that becomes a longer task
and anticipated we can shove that to
three one recently I've been like since
that meaning I've been as I said
smoothing of this transition and
modifying the accelerations of the
flight control system as you're flying
around so that you don't get these
sudden changes in acceleration which you
feel very strongly as your ship suddenly
feeling not maneuverable and before that
it was it was a case of finding some
sort of a system where we could
consistently control this in say like
for example we need to deal with
decoupled and that's that was quite a
challenge because currently decoupled
and and coupled fly quite differently
and the system needs to work
consistently on both sides so I put a
lot of time into making sure that you
can use it in the couple and it sort of
behaves that similarly so that you're
not like you know you don't want this
huge discrepancy between how it works in
two different modes and so we sort of
work
and I worked in like implemented the
system where it it will only go to the
higher speeds if you are in a straight
line and if you try and modify your
velocity it will it will kick you out or
it'll try and slow you down again
because of some of the issues we've had
with this afterburner velocity on the
straight line going up we found that you
you would easily switch but from SEM
you'd want to kick into afterburner and
you'd find yourself going really fast
into these higher velocities one of the
ways we also considered fixing that was
to to go back a little bit on some of
the stuff we've done before where you'd
have SEM and a much smaller scale you
want to give the combat maneuvering a
larger range so that you wouldn't need
to rely on afterburner quite so much so
I've been doing a large pass on all the
ships in the game right now on their SEM
velocities and all the accelerations
based around they're basically just
scaling them up so that you've got more
velocity to play with but I haven't
messed with the acceleration so that
should be carried over from the current
build
beyond the actual stoma basically Leo's
done most of his stuff on the code side
and Tufts said that was okay the main
thing is just because we rearranged some
of the same stuff we just want to see
where some of the same stuff comes in
now the ship is screened on Ricky it's a
later sprint that one victory jobs it's
it's just under ships and where that one
is right now is Oh like is finishing his
his his work for basically what a 2d one
would look like versus what a 3d one
would look like and then at that point
ship are Kentucky are in the sprint with
us right now
so then they can do their work needed
for the radar item and get those things
positions so then the past few months
I've been working on getting the radar
into the starmap system I've decided to
go kind of like in a component based
system so if you add star map then you
can interact with star map and if you
add on top of that radar component you
can zoom in to yourself and suddenly
this radar pops out kind of and if you
remove the star map again then you just
see just the radar on your display so
that's kind of the way and I'm trying to
go and we can always add different
components to that so to expand like the
functionality of this display I just
kind of wanted to go over with you I
think the switching of the galaxy and
local area because I think most most
times you see horizontal zoom sliders
usually the macro views to the left
rather than to the right so that's just
kind of why I had that on the galaxy on
the left side okay yeah I just
and then there's probably some stuff
that and you clean up in regards to the
nav map and radar scale button so that
it's clear that they're toggles
but in general I sort of think that it'd
be a good idea at least to get Chris's
eyes on on this if he hasn't seen it yet
yeah yeah yeah yeah so for what the case
is where you like press buttons and turn
you know dial turn knobs and things like
that I think it should be diegetic like
you actually have it labeled in the
universe and you can see it yeah and
then that's why you have that like thing
you know the finger press icon that use
it when it's there and then optionally
you can have translation which is like
the case here and then when something
becomes a bit more complicated and you
can have you have more than one thing
you can do with it then it would have a
multi option but the mission app manager
in the mobi glass when to review we got
some feedback and we are changing some
stuff that we got from the reviews we
have polished a couple of features that
we got so we now have the ability to
actually view the remaining time of that
admission has we have all the
information the description who was it
from
how much time what what's the payment
gonna be we can actually accept these
missions we can track them on our
accepted list we can also untracked them
now there's the ability to actually know
which which much missions were actually
tracking we also have the possibility
when abandoning a mission we can
actually go to the history and actually
know now which missions are abandoned
completed Midway basically so if we see
here like we now have information about
all of these missions it's a much
sleeker user experience that they have
now making it easier for the players to
actually keep track of all the
objectives that they need to do to
finish the missions actually having a
proper way to manage their missions
imagine if they're midway through a
mission and they see like oh I have a
really
nearby mission that I can do they can
actually easily manage these options
as for the performance topic its of
course that the closer you get to an
release
the more important it becomes and but on
the other on the other side you you have
to see that performance is nothing that
will be done at one point it's not like
a feature that we can complete and then
then it's done it's something that we
will always have to deal with
that's overarching the whole project and
as I said it's of course becoming more
and more important the closer you get to
an release because we of course want to
provide the best experience for the
players smooth and that's why we are now
looking into the into the performance
captures from the evocati players
basically always so it's it's not just
testing a specific feature but we're
always looking into those captures and
see where we can possibly shave off
another millisecond or another frame
where can we possibly save some
something or optimize so we we get the
smoothness to you
this week alone we've checked in 756
updates to our 3.0 branch in perforce in
every possible category you'll see from
category to category how unpredictable
progress can be as the evocati testers
and our internal QA work together to
uncover new issues while leadership
evaluates what's absolutely necessary to
address to release 3.0 to PT you as
quickly as possible so come back next
week to see the progress we're making
here on burndown if you would like more
info on our schedule as we work towards
the upcoming release of alpha 3.0 be
sure to check out the website for our
weekly production report definitely do
that but now it's time to spool up this
week's feature on quantum travel where
we look at the updates coming in alpha
3.0 that make the system more dynamic
with the old quantum travel system you
would select a destination spool up the
quantum drive and zip through space to
that location
it was the same experience regardless of
where you were going yeah it works but
considering how distance is going to be
much more of a fact than going forward
3.0 and beyond we knew it was something
that we wanted to improve that's why we
decided to vary your travel speed and
effects based on the distance traveled
that way a trip between Earth and the
moon would look and feel very different
than a trip between Earth and Jupiter or
in our initial case the stanton system
so between somewhere like Levski and I
don't know
I thought perhaps yes to learn more
let's check out our feature on the
updated quantum travel system
anywhere you want to go that's not like
a hundred feet from you you're probably
a quantum I'm going to be involved so
there was the old quantum system which I
believe is what's actually up on the
live server now because we're still
working on the new stuff you look in
some random direction and you fire off
and you go it was great
had visual effects and everything
problem is designers weren't happy and
see I wanted it to be a little bit
different because we were gonna have
bigger maps and he wanted it to function
differently the previous system
basically said I want to fire from here
to here and go set max velocity
everything and you just went there was
no concept of ramping or well there was
a slight concept of ramping but it was
very linear so if it was a short jump or
a long jump it it felt the same and cr1
of the experience of having something
completely different were if there was a
a moon and I'm going say it from Earth
to the Moon
it's far but it's considered a short
jump a long jump and means like from
Earth to Pluto
so from Earth to the Moon
he wanted it to us kind of feel like a
little bit slower because you don't read
that max top speed while is the one that
Pluto you reach that top speed but he
didn't want it like a linear increase to
it he wanted more of a dramatic build up
to get to there so we were experimenting
what a bunch of ways of getting to that
point and one of the ideas that came out
and the very earth of prototype staging
was the concept of a really nailed down
the concept of a short jump and a
concept of a long jump and the first
implementation was just a binary system
that mean oh if we're at the certain
distance where a short jump if we're at
this distance we're a long jump and what
that gave us is different speeds so when
you went from Earth to the Moon it took
a little bit longer to get there because
you weren't going as fast you could kind
of enjoy the scenery you just run and
then when he went to Pluto we gave you a
much bigger speed so you just assumed by
to get to there but you still have the
pro
of it being linear and it didn't have
that buildup
you just started increasing you got
there and you just stopped we're missing
that ramping up smoothness and it since
it was a binary system if you had the
distance just slightly off it would
change from short jump to a long jump so
if I'm going from Earth to Mars if that
distance was just enough and I flew a
little bit it would be considered long
if I flew back would be considered short
and since depending upon what jump
you're going to do it the effects the
sounds and all that was completely
different and didn't scale at all
because it's one or the other so I went
back to the drawing board going all
right he wants that ramping and design
really wants that like curved and what
we're doing was we use a motions we use
a constant acceleration so you start at
a velocity and you had an end velocity
and you literally did a linear curve as
you accelerate bit over time or your
velocity increased over time but that
gives you that straight line which is
not what we wanted and so what design
wanted was like a little curve up so you
can think of it like how was that moving
back to the future you're in the
DeLorean you put the pedal to the metal
and you get the 88 that gives you a nice
little curve but then as soon as you hit
that 88 you ramp up like crazy so you
want that initial speed up see it's kind
of go all right I'm accelerating
accelerating you hit that boom phase and
as you go swoosh so went back to the
drawing board took a look at it and what
could we do well all right acceleration
is giving us limit whereas if we go one
higher that famous movie well we'll go
to 11 well in this case we'll go one
higher into the thing called jerk what
jerk is we have a constant jerk and
we're having velocity and acceleration
change over time so what that gives you
is instead of your velocity being like
this it goes that little curve so if we
use jerk to figure
how fast we're going to go at any given
point we can get rid of that binary
system and we just choose a position and
we know the maximum speed of the drive
we know the maximum of the minimum speed
we could calculate the MINIX elevation
to max acceleration based off the jerk
and ramp us up so what that gave us is
no matter where we choose on the star
map whatever location we'd get that nice
little curve so if I was going to make
Mars
I would accelerate and hit this click
map the speed and then decelerate again
but if I was go into Pluto I go all the
way up even higher speed cruise a little
bit and then go down so it gives you
that more short-term long jump hybrid
sort of experience and because it's no
longer a binary or system we're either
short rather long it's based off of the
distance we could tweak all of our
effects to be based off speed so when
you're accelerating up if you don't hit
a certain speed you don't get the tunnel
effect you just get things like little
sparkles because you're not hitting that
like a sound barrier of the quantum
you're hidden you're not hitting the
quantum barrier you're going just right
before it you are going faster but
you're not hitting the barrier to break
the sound so you have the little effects
and then you dipped out a bit but if you
go a little bit further out you hit the
barrier so we trigger on the effects and
it makes a much more dramatic thing so
it gives you that alright I get to a
system hi there's a planet I select one
of the points I could get closer to it
but I don't see the tunneling effect but
if I click out something further out go
BAM go out and see the tunnel quite a
cool little interesting thing and while
doing this since the math was kind of
involved we actually prototyped it out
and completely different executable so
you have designer saying hey plug these
in and see the graph see the velocity
see the accelerations it's pretty cool I
came on Maya
my first role here was starting
tribal conversion 22.0 at the time yeah
I mean it did obviously fly it's um but
it just wasn't able to integrate well
and it would be very be a totally
different set of code basically from how
everything else works so bringing it
over brings all that together we get to
use all the connections and stuff we
natively get just being item 2.0 plus
the old drive while it worked had been
kind of built alongside the design so
there was a lot of code in there that
while it worked wasn't necessarily nice
needed to go a certain way it was really
more getting it hooked where we could
attach it to a 2.0 ship but also getting
it connecting to the pipe system for
power for heat for things of that nature
for the fuel system the old drive didn't
use any of that mechanics cuz it wasn't
compatible so with the new system as Max
was building out pipes for fuel and
power I was able to start attaching
those as well the effects for the
contrivance istead of this tunneling
effects originally so we've Chris has
asked for more on adaption to this so we
had he wants it more of a sort of
Hollywood feel of a Star Trek II sort of
effect where this residue appears from
the front of the ship and moves to the
back of the ship and then it just starts
from a spooling stage that hits this
acceleration rate which is as Chris puts
reaching the 88 miles per hour I came
back to the future so once you get
through the spooling stage it's a
mixture of residue just starting to
build it up from the front and it just
builds up more and more and then it just
flares up and then you hit a big bang
which is like the entry effect into the
quanta travel so the starfield effect
was just primarily this effect with
loads of stars appearing and whizzing
past with planets and some all the way
to your destination as you travel this
new effect we've added in is it adds
more of a residue from the front of the
ship that cones around the front of the
nose of the ship and then leaves up more
like whizzing flares kind of what can be
done with the original CPU system so we
had to use this new particle GPU systems
and in thousands of dots that just fur
off residue what we originally had was
this blue
sort of plasma effect but then Chris
wanted to add in more color so we've
grabbed in some of the colors from the
engine trails which we've recently added
so we've got like for the Mustang for
example or freelancer or stuff we've got
like this sort of teal a blue effect
that mixed in with the blue plasma and
the m50 has like a more of a yellowy
orange and blue effect mixed in so Game
Code provide us these these tags and
triggers which are like spooling the
entry the traveling effect and the flash
effect so these will trigger at certain
parts of the stages so the spooling
effect would trigger between the
acceleration phase and when you enter so
then the enter effect would trigger when
you enter to traveling so then the
traveling effects will loop as you're
traveling from your destination to your
to your destination so then once you hit
your destination it's a flash entry on
flash exit effect and then it would so
that the exit effect is this basically a
big flash lens flare with a big
explosion sort of wispy smoke trails and
traveling from where you exited
basically going back to what quantum
drive is we have two parts to that
specifically one design aspect what is
design one what is CR one and that was
the the slow ramping up and keeping that
little curve and coming out of that and
you know we played with excel we played
the little program to figure out the
math involved the second part is okay we
have this math it's jerk
there's formulas for it we have pages
and pages of how we could calculate it
which is cool but how do we translate
that into the game and that's always the
tricky part
unfortunately for us jerk constant jerk
with acceleration and velocity we know
certain parts of the formula so we can
adapt that into programming into
different parts and how we did that was
there's actually five phases of quantum
drive there's the initial ramp which
you're going from zero to that 88 miles
per hour we're actually gonna replace
that to going from your current speed to
afterburner
because we finally have afterburner so
you can think of that as going from zero
to your afterburner or whatever your
speed is that's just a linear velocity
so that's one block where we have to
calculate the distance and the speed so
once we calculate that we put it here
then we have the ramp up face which is
where we introduced the jerk of your
curve to figure out what your maximum
speed is and we calculate that stuff we
put it here then we have the middle part
which is D'Cruz so if you are actually
they hit the maximum speed of your drive
we have to stay in this top speed for a
while and then kick out so we put that
here and then we have the ramp down and
the speed down which are the same as the
speed up and ramp up but just inverted
to go from your top down so we have put
all those on the side we go okay what do
we need to get this functional we have
all the math that we have all the time
that's another fun thing is we need to
this system to be predictable so if I
knew the start time and the end time I
need to know where I am at every given
point so we need an analytical solution
and lucky for us those four waldman
derived off Newtonian physics for years
which is awesome so knowing those key
five parts we broke it down into
distance so we know if we know the
distance we could do a couple things we
could figure out the speed up phase we
know the the velocity and we know the
current velocity we could figure out the
distance will be daring in there we
could figure out the distance it would
take to hit max and then we do that on
both sides so we leave the crews out and
that gives us the ability to two things
one if we're able to hit top speed great
we'll hit top speed it makes the formula
so beautiful we could do the easy path
and then if we can't do the top speed
this is where it gets complex
because we have to solve a think it was
a fourth order polynomial and that math
is just bonkers so I'll spare you the
details but we had to solve that fun guy
using a very quick and dirty solution to
make sure that it's performance not just
performance heavy so we calculate all
the distances that you're going to be in
each one and then from there we can
calculate the time and then we split it
out and save the information it's called
a quantum snapshot so we figure out the
distance you'll be we'll figure out
where you're gonna be at any point and
time and then from there when we passed
in a time we could go alright well this
time we're gonna be at phase ramp down
so at ramp down phase and then we go oh
no we're gonna rewind back okay we're
actually here so we have this time which
allows us to go kind of backwards and
forwards if we wanted to one how this is
for networking two if we wanted to for
track view for cinematic sequences we
can wind back in time so it makes it
everything nice and easy and beautiful
but it took quite a long time to figure
out the math figure out how to break
down everything so it works the
networking works in multiplayer works in
track view works in cinematics
one solution that works in all the fun
details but because it's timeline based
we could rewind back and forward we
could play effects depending upon where
we are on the timeline and it just works
beautifully lots and lots of coffee to
get here so as you saw it took a lot of
tweaking and complex math to get the
constant travel system working the way
we wanted it but now we have a system
that provides a more dynamic and varied
gameplay experience for alpha 3.0 and
beyond and that's all for today's
episode thanks to all of our subscribers
for helping us make around the verse and
our other shows like bug smashers and
Susan of the stars
this month's subscriber flare will also
be released on Friday so be sure to keep
an eye out for it yep definitely do that
and a big thanks to all our backers for
your support this game is only possible
because of your dedication enthusiasm
allow us to make a first
universe unlike any other so thank you
very much and finally to be sure to tune
in to happy hour game dev tomorrow at
8:00 a.m. Pacific to watch level
designers andreas Johansson and Tobias
Johansson construct a surface outpost
like yes I'm not even realizing they are
not exactly yeah
until next week we'll see you around
[Music]
thank you for watching so if you want to
keep up with the latest and greatest in
star citizen a squadron 42 development
please follow us on our social media
channels see you soon
you
[Music]

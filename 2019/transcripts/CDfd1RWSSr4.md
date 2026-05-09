# Star Citizen: CitizenCon 2949 - Shipsounds

**Video:** https://www.youtube.com/watch?v=CDfd1RWSSr4
**Date:** 2019-12-04
**Duration:** 52:01

## Transcript

yeah hello and welcome to our talk the
evolution of ship audio our talk is
probably not as cool as the one in micro
tech but it's definitely gonna be louder
okay so hi everyone I'm Josh Bell I'm a
sound designer on CR G's audio team and
my name is Eric lat I'm on the audio
call team so we're just kind of you two
we're just going to show you a quick
video of like a quick video showcasing
some of star citizen's ship audio from
the past like three months
[Music]
thank you
Thanks so what we're going to talk about
is pure the sound of ships and how we
will use it to give you a better game
experience and as such we will just
focus on the ships we will not to talk
about UI sounds or cockpit sorry ship
computer voice so it's just about the
diegetic sounds of the ships as we hear
them in the game oh yeah right
so and the biggest step we did in terms
of ship audio development was started in
early 2018 because at that time the
updated flight model was scheduled for
development I'm talking about the flight
model that was released with 3.5 a
couple of months ago yeah and this point
was a really huge opportunity for the
audio team to change a lot of stuff
because we had a couple of problems with
the old technology that we had I mean
you're all played or some of you may be
played starts it's before 3.5 and you
know the ships had sounds at at the time
but we were not really happy with them
so they were working okay ish but they
had a had a couple of problems so so
because at that time what were good for
arena commander was not good and
scalable for a huge vast dynamic
universe I've been out talking to talk
about what kinds of problems we had back
then so we can separate our issues we
had back then between code issues and
design issues on the code side thank you
yes the audio technology was mostly
based on on the old lumberyard audio
tech for vehicles and we usually just
extended this
so we built more features on top of it
on top of it and this was working okay
for a while but at some point it became
quite apparent that we when we went into
a couple of like
that locks no we basically just it
wasn't you know like having ten ships
playing at the same time as expect was
ten times more expensive than playing
one and we had like no smart way to save
calculations so you can imagine if you
had twenty ships in the scene we had to
do all the necessary all the
calculations for every single of that
ship and every frame which means that
one ship was okay but fifty ships were
50 times more expensive than one ship
and this doesn't scale well when you
have a big scene also we could not help
a lot existing data which means like
poor sound designers like George had to
spawn a respawn a ship to actually see
the changes in the game next oh yeah and
then when you work on a code system and
you just add features on top of it like
we get something that because by Getty
code right at some point it becomes so
huge and so hard to deal with that it
becomes a maintenance problem I remember
a specific instance I had to add one
single feature to the old system and it
took me like three days because it was
just very hard to work with the old
system so but they also design issues
right yes one of the main ones was the
engine sounds were directly coupled to
the particle effect which means that if
the VFX stopped triggering for some
reason like some bug it would also stop
the audio and we get a lot of bugs you
know like just wasting our time we know
we'd look into it for quite a while and
just figure out oh it's not our problem
but affect us all you was missing a part
was actually missing and it also wasn't
great for surround sound support because
we could only play sounds from the
locations of the thrusters and you know
almost all ships than main thrusters and
the loudest Firsters are directly behind
you so you got this really weird thing
in there were five point one system
seven point one system where basically
the whole zone of the ship was going
from behind you which was you know
physically accurate but not you know not
cool you know you want to feel like
you're enveloped within the ship and
there's all this stuff around you it's
making it sound
yeah also there no conceptual
distinction between inside and outside
we have some very happy ways of you know
playing different sounds for the outside
versus the inside and we couldn't really
do any really nuanced stuff of the ships
it was very basic
you know accelerate forwards backwards
your left right we couldn't do the cool
stuff that we do now like changing the
sound of the ship of a time when you
hold a certain speed or you know all
that kind of stuff and the worst one was
just the fact that it was all done in
XML for other than dedicated tools so
you know you want to make a change to
one of the ships you've got to edit 30
different XML files yeah like like in
2003 right yeah so it looked like that
right and this is how we looked yeah
kind of unhappy with me with the old
tech so at this point we took a good
look what we had at the moment and we
what we wanted to do in the future and
essentially we set out some new high
level goals that the new audio tag for
the new flight model should should offer
us right so the first thing is obviously
we want more power for the sound
designers right we don't know XML
editing it was we instead want to use
what you see on the on the on the shot
there we wanted to use existing tools
that we had in the company which means
data Forge for data management and the
lumberyard editor for in-game editing
and we also wanted to massively reduce
the amount of time that it took to set
up a single or especially a new shape
right yeah so it all comes down to we
just wanted to work faster which button
which doesn't mean like oh god I have to
have to rush right it just means that we
wanted to have more efficient towards to
use the existing time that we have
better yeah it's we're all about you
know taking the time that we used to
spend you know fixing books and trying
to figure things out and spend that
actually making it sound good which is
what you know some designers were there
for really on the technology side we
also wanted to improve performance and
scalability I previously mentioned the
the problem that 15 ships are 15 times
more expensive on ship and so this is a
typical
big space little scene from from star
citizen it's we didn't not just like
spawn 150 ships in the scenes but we
wanted to the audio tech to support
these kinds of massive environments
right with like hundred fifty ships in
the scene if necessary and yeah so then
we only wanted to of course to only play
what is needed because what you don't
play doesn't cost any CPU time therefore
we wanted to avoid unnecessary arrests
unnecessary calculations what's next
night yeah the stuff you already said
yeah so but if we reworked the tech we
also wanted to rework a little bit or
take a good look at what we wanted to
achieve in the future for the
experiencial side of of working with
thee wasn't you check it on the ships so
this is we were we were really happy
with the the core sound design of the
ships like on an asset level you know
like each of the manufacturers kind of
had their own sound you know all the
ships within them were distinctive like
this on their size and stuff so we're
really really happy with that we just
kind of wanted to you know get you know
bring all of the potential out of the
sound design that was already there by
improving our implementation yeah and we
knew quite early that the new flight
model would offer a lot of cool new
things for us and we wanted to hook into
these things so we knew that something
like next like the flight dynamics would
be included right we would get direct
calculations we will get lift
calculations and and this would allow us
to add a lot of more like nuances in
detail to to the audio environments of
the ships oh yeah
okay yeah the ultimate goal was really
just to not just put audio in there but
to enable everybody who is on that ship
to actually listen to and know what the
ship is doing we wanted to the ship to
talk to the pilots and to the crew yeah
I mean the bottom line was to make it
believable which is not to be confused
with realistic it's not all about
simulating you know exactly where the
component is what sound that would make
my stuff's about making it feel like
you're in that ship which is not
necessarily making it realistic we
wanted every sound to be placed for a
purpose
and to actually come from a specific
place in the ship district you know
really enhanced this sense of being in a
big machine you know like a kind of a
kind of sense that you get when you're
in like a jet plane or something it's
not just you know you can't localize
where things are you just feel like
you're in a big a big heavy hole yeah
and the sound is not coming just from
the engine that's coming from everywhere
around you right because the whole hull
is shaking yeah okay so then we ask
ourselves how do we create a great
flight experience or how do we make
flying actually better so what did we do
we went into a research mode and check a
lot of research and reference materials
which means four meant for us we were
watching films good films to watch for
that kind of stuff is of course Top Gun
right who doesn't know Top Gun a lot of
the vibration stuff you'll see there it
was like inspired by the first month the
film about the scene at the beginning
where he's in that experimental test
plane and he leaves the atmosphere and
then comes back in also a nice film for
reference is Sulley because he's flying
an f4 phantom and in a flashback scene
and there's also a lot of like shaky
noises in the cockpit and which we sell
the flight experience right okay the
other thing is like of course we played
other games very stressful and we
started to talk to subject matter
experts and if you want to talk about
flight with people you talk to area
knocks technicians people who work with
airplanes and with pilots and luckily
our community has a lot of pilots we got
in contact with chopper pilots with
pilots from the Royal Air Force with
Royal Navy business jet pilots general
aviation pilots so essentially the whole
spectrum and we interviewed all of them
to tell us eh what do you think what how
does it feel in the cockpit what can you
hear what can you feel how can we make
this thing better yep so essentially we
learned about flying and then we OH
which we did not were cave and came up
with a for the game plan so we made our
planning did our work and then we
thought the best thing we could possibly
do is to rewrite the complete audios
code from scratch
this comes with pro and cons right on
the concepts of course it's really it's
a lot rather long task right
also it there's a high initial
investment cost in this and when you do
this and we work a whole a whole bunch
of systems that already in place you
break the game right and remember this
is a very very unsettling yeah had
people message me all the time like what
you know why is this ship so quiet this
one makes no sound this one makes way
too much you know I can't even have my
headphones on but hopefully in the game
of a-flat did you break it if I send an
email didn't I please don't book
anything for next four months yeah the
pearls are the good sides of this are
obviously we wanted to build a good
friend foundation for the future right
we didn't want to waste any more time on
Maintenon maintain old code and the good
side about this if you make your tools
nice right and really nice to work with
then you get less frustration on the
game designer on this sound designers
height and if you also excite the
workflows means they can spend so much
time of their workday
making cool things and not just fighting
the tools that we have yeah more time to
make it sound good
yeah so so what did we done we joined
the flat model team so Colson's and crew
etc and went to work and yeah and the
way how Josh and me work were like we
essentially had to full autonomy on this
right we said we gotta okay yeah just do
your stuff make it make it cool make it
nice and essentially the process was
like that yeah so yeah I can't play wind
sounds on the canopy class okay let's
talk about this huh I do have cooked
prototype hey is would that work for you
yes
answer wind door 12 yeah so essentially
I got him a broken prototype and while
he was already working with the data I
cleaned up the prototype made it nice
and shiny and then we went on and we we
worked like this for quite a long time
this is of course a little bit
oversimplified right but it was actually
the thing we went into like at some days
I sent you like five or six custom
builds from the game just with new stuff
to try out because we were getting so
much like autonomy and Trust to like
implement the things that we felt were
needed because we were the closest to
the process that was going on you know
we kind of came up with ideas that we
wouldn't have Ness
thank you audio leads thank you yes so
contrary to the way we did it in the
past we want to have a really layered
approach where everything was like
siloed each type of sound was like
siloed into its own system you know it's
to make it easy to debug easy to work on
you know easy to isolate something
that's wrong so these are trustus which
is what we're all the audio is triggered
from before the ship audio component
which we use to trigger things
everything that is like a bit of
machinery on the ship that is not a
thruster and then we also have things to
simulate external physical forces on the
ship like vibrations from collisions and
drag and then like wind sounds and
weather in the future and then obviously
past byes and then just to help sell
atmospheric flight that a bit more we
added bespoke things for being for
flying in a pressurized environment and
this this was like the the mock-up like
for the first for the first iteration of
the new flat model which was released in
3.5 so all that stuff was already in
there so the first and now we're going
to talk about each system individually
and we're gonna show you videos with
each of the systems so load in the mix
right so you only hear what sounds the
specific category of subsystem place in
the gamer so the first category is
sisters which play sounds on each
individual thruster differentiated by
type like mavmail retro VTOL and you
know the player sounds on that thruster
based on what that particular individual
thrusters doing and as we said this was
in the past the only way it shaker
sounds on a ship and now it's just part
of a larger system and these are
reactive to a heat health degradation
all that kind of stuff and to help solve
our like surround sound problem where we
only had stuff coming from mainly from
the rear we've kind of massively
emphasized these and you know we bring
in all these other systems to help fill
out the kind of to fill out the mix
around you such so just to say this
again when you see a ship flying far
we're like two miles in front of your so
you're not hearing the thrusters of the
ship you're hearing it like a simplified
variation thrusters now are just
detailed but when you get close to them
they have a lot of detail
way more than before yeah now so okay so
this is not an adequate no
representation them up first the
locations incorrect this is where you
typically find the sounds of twisters
unsurprisingly on the thrusters yeah and
this is a video of just the first as so
does in the mix on the Gladius so you're
not hearing anything else but the sound
coming from the maneuvering thrusters
the retro thrusters and the main
thrusters
[Music]
[Music]
[Music]
okay so the next component were going to
describe is the ship all your component
this is the component that is actually
interfacing with new flight model and it
gives us all like or it generates a lot
of noises which are not thrusters little
helper like little helper objects in the
in the cockpit that try to self
experience better next right so
essentially the ifcs gives us like a lot
of like numbers we can just query and
query really really fast which are
different rotation rates of the ship the
velocity the age of the ship so wear and
tear also brace plays a role in here the
acceleration the health itself because
we want to tell everything on the ship
like hey man
the ship is quite unhealthy and it's got
a die soon so we want every bear on the
ship to everything on the ship to sound
really readily and broken down yeah and
the cool thing is we can now we can use
all these parameters generated by the
ship audio component from the flight
model to change the sound of basically
anything on the ship so we use this
quite a lot to like change the sound of
the room sonar the or the ambience based
on like the ship health how how powered
on the ship is all this kind of stuff
then in the in the future you know we
can use age and all that kind of stuff
and part of this is vehicle audio points
which is the sound of everything else on
the ship that isn't a thruster so you
know we can place these really really
precisely in the editor for is in the
past so you know we couldn't do that so
you know you'd load up the ship level
you just kind of you know look around
the ship and think if you sat there
where would you expect to hear something
from and then you can just you know
plunk it right on there
and this also goes back to the other
thing when you and when you in an
airline alright when you're flying you
hear maybe the main engines are left or
right but the whole thing around you is
also doing something right like the
airplane banks and so on so you hear
something some some creeks maybe in the
in the hole somewhere but it's it's not
just the engines that make sound and
this this vehicle all dew points they
they sell the idea that there's more
these are essentially proxy points for
what the engines are doing without being
the engines
like what's doing to the frame and all
this kind of yeah fame of the ship and
this is the main thing that you know
allowed us to massively improve our
surround sound experience from three
point four to three point five yep and
on this is where you typically find
those on a ship you know so you've got
your vehicle audio points here you just
you know as I said you go around the
ship and place them where you would
expect to hear some things basically and
then you've got your ambience room tone
which is yeah well just in the rooms
around the ship the sound of that room
and the stuff within it how many would
you place like it depends on the size of
the ship
well like the Gladius has got like eight
and then the thought around the cockpit
in the constellation I don't know like
well vehicle all your points like 10 but
ambience things there's a lot more like
30 40 something - yeah so this is a
video with the same like flight pattern
just with the vehicle audio points so
load in the mix so you're not hearing
the first is a vibration or anything
like that
[Music]
[Music]
[Music]
yeah okay external forces so a big part
of flying is not what the pilot does
with a airplane for example but what
nature does they are plane then this is
really interesting and this was like a
thing that was really missing in the
past for us so we like based on that
like feedback from pilots that we
actually created two new systems for
fresh ships one is yeah oh yeah okay
yeah okay
one is the vibration component and one
is the oh yeah do you write me feedback
component so the vibration component and
is the thing that makes your ship sound
vulnerable right so you can imagine like
if you're getting like a collision or if
you getting some some a lot of lift or
drag from when you're flying through the
atmosphere then this will induce
vibrations in the ship and Josh is using
these these these vibrations to create
rattles and creaks and stress now noises
and so they make you really like feel oh
god this is too much for the ship this
is gonna like break apart soon right
yeah we've also got the environment
feedback which is you know used to
simulate like what and just to let the
pilot know what kind of environment is
outside of the ship so we've got like
more static things like you know when
you're in an atmosphere you're in you're
in an atmosphere zone so when you go
fast enough we play wind sounds on the
canopy and on the on the ship body but
also like more dynamically created ones
like when you destroy your ship it
creates a debris zone and that expands
if you find your ship within that then
you hear that on your canopy on your
ship yeah but basically used for other
things it could be used for like
submarine well if you if you crash your
ship in the in the ocean I know it
doesn't work at the moment that
theoretically this component would also
create those noises for that yeah so
it's set up to be really like divers
usually really extensible like
you know any any new kind of environment
that player could find themselves in
this we just have to add a zoom and then
you could have played the appropriate
sounds for that you put this on the
actor as well right
oh yeah one day I was just like what
would happen if I put the this
environment feedback component on on the
players head in town in the New York it
was like well just try it it might work
and there so yes and I just plunked it
on the player and then you know put an
emitter on each year so now when you
stand on a planet and there's wind you
can hear the wind hitting the players
head and the winds going from the right
it's more health on the right year and
same for the left this also works me to
jump out of the ship because we get more
wind this way yeah yeah so the way this
works we have we have set up a long list
of like different materials and the size
of that material so you know we'll go
around and place a vibration point on
like a big metal panel in the cockpit of
a constellation and we choose like metal
large and we want one on the on the
glass we know glass medium and then when
then when that sound needs to play it
will select the appropriate sound for
that size of material and that mitt and
that material and it's the same thing
for the environment feedback points you
know so we just go like you know when
them glass lodged and when you find
yourself in an atmosphere or just you
know play sounds appropriate to that
glass panel in the wind and you know we
play some all and the body of the ship
different sizes of different bits that
stick out and all that stuff okay let's
take a look at this this is just the
year the components or just the sounds
for external forces all this stuff is
you know crucial to like really kind of
grounding the ship and materializing the
ship into the game world so you know it
feels more real and more physical eyes
[Music]
if you could see the moment when the
canopy opens were then those are the
wind sounds on the players years rather
than the wind hitting the canopy in
front of them so obviously if you're
flying through the air like 200 metres
per second on even if you got a helmet
on and that's flying past your head it
would be incredibly low it's yeah oh
yeah they were depressed by component so
we also separated out this component
that was generating passed by noises I
mean there's a lot of videos on YouTube
or so we're like a little an avatar or
like a player stands on top of a planet
yeah on the mountain or so and the ship
whizzes by right these things were not
working properly in the past I don't
know if you remember but you would
trigger some of these flyby sounds this
do things right on high-speed formation
flying for example you fly with thousand
meters per second forward and have your
friend there and you'd constantly get
mm-hmm it was just it didn't work well
right in all situations so we reworked
the system as well it works now really
good and then and then we release it 3.5
and we forgot to activate a checkbox and
then we got a little shitstorm at our
hands because everybody was saying you
broke the flyby sounds yeah we broke
them but then we couldn't repair them in
a point that you broke again later again
yeah we also added additional sounds
that trigger just when you in atmosphere
that I just came from the ship as a
whole because all of you know the
vibrations environment feedback vehicle
olia points and thrusters all behave
differently in atmosphere because they
after you know fight through the medium
but we just found that that in itself
didn't really completely sell it so we
just really had a bunch of sounds for
the ship using stuff like
terrain height to kind of give the
feeling of the sound of the thrusters
reflecting off the ground as you get
lower and just special effects for low
altitude flying and these are just both
of these are just triggered from the
ship as a whole right there on this
video we're gonna show you is just with
all of these special atmospheric sounds
so loading the mix so you know this is
not the thrusters no vibrations no win
nothing like that just the kind of
special effects that we are based on
what kind of atmosphere
[Music]
[Music]
so another topic that we wanted to
approach with a new technology is
performance right yeah so you know to
solve the issue we had an the old system
where every ship there was no
distinction between what was in like we
use the term NLP see non-local player
character and there's no distinction
between what was your ship and what was
someone else's ship now we have that
distinction and to you know make it so
that whereas scalable as possible while
still sounding good we have a separate
set of sounds for NPC ships that are
outside of a certain range you know
these are completely different to the
player ship sounds but like still per
manufacturer per model but um have a
different set of sounds until you get
within 150 meters of the ship and then
you get basically the same experience as
if it was your ship so this allows us to
have to calculate less parameters cuz we
only need this small subset that we need
these we need to make these simplified
sounds work and the result is that you
know a typical ship that isn't yours
will use about 10% of the like
processing cost compared to your own
ship and this is kind of a philosophy
that we use is to like try and go and it
was much detail as possible on the ship
that you're in and uses little resources
as possible on other ships while still
making them sound good yeah and another
thing that we did a couple of more
tricks to improve the performance one
thing is like we have different kinds of
priority like one priorities
a typical priority that we use for
figuring out which ship and the
sweetness is important the most
important one is just into a comparison
between like how much space does it take
on the screen where those versus how far
is it away so we can make a good
estimation of what kind of sound we
actually need on the ship and what stuff
we we don't need and then when we made
these decisions what you're gonna need
need to keep we just hardly cut away
everything else what do you think just
just scream how many how many ships can
you hear at the same time in the game
just shout five yeah not all of them no
we're not going to go back it's like the
thing in the film when you hear you know
people running you can make out you can
make out one person's footsteps two
three four when it starts getting five
six you'll just hear a crowd and that's
yeah and also this hoops has helped the
mixing process a lot because just like
tons and tons of ships which are audible
they will just create noise in the
background that's it's not nice and easy
to map it makes you you would think here
and more would make it sound bigger or
like there was more but it often just
makes it sound like a mess and there's
less ships okay yeah we mentioned that
before we based on that we simply do not
update data that we don't need so if a
strip is like not audible we don't care
about it and suddenly we have all the
CPU budget available for something else
yes these simplified sounds like play
from the ship as a whole we're gonna
show you a video with just like just a
sort of dogfight scenario where you're
only hearing the movement sounds of the
NPC ships nothing else nothing else
[Music]
[Music]
I play a bit of a work in progress and
that's a very new thing but the idea was
just to and the idea was just to you
know kind of Nicolas sounds we have to
as few important from it as as possible
so you can quite easily tell it for
ships and I've coming towards you moving
away from you accelerating in any
direction just from you know kind of
modulating a very small set of sounds
yeah so yep this is everything we've
went through this is ship audio this is
uh yeah this is 3.5 like the audio tech
or 3.5 and this is everything you've
heard but with nothing sewed everything
together like in the normal game mix
[Music]
[Music]
[Music]
[Applause]
[Music]
okay so all this mixing sorry there's a
couple of other things that we do is
dynamic mixing so we what people would
often know is sidechain and where you
change the volume of one sound category
based on the volume of the sound
category so example like we decrease the
volume certainly of your own ship if an
npc ship is making a lot of noise
because then we'd assume that that's
something you want to know to look at or
you know would be important to you
also things like you know when you when
you fire your weapon will suddenly duck
your ship sounds for a split second for
you here you know that your weapons
fired basically just kind of drawing
attention to what's important and
there's more things like you know we
know which ships are the closest to you
and like a ranked order we know this
also combined with the size of the ship
like which ships are targeting youth so
we can give them a slight volume bump to
draw your attention to them whether
they're hitting you and even they are
whether they're friendly or friendly or
an enemy ship you know we kind of
assumed you'd want to know about the
enemy once more so we bring up their
volume slightly and these are all really
really subtle things that you kind of
wouldn't really notice in isolation but
if we were to take from the way the game
would sound quite a bit worse
yes adding new sounds to a ship is now
extremely simple like 90% of the self is
done automatically by all of the ships
just inheriting from one master
spaceship record with all of the data
every ship needs already so you can
place the points extremely accurately
and quickly in the editor we can
audition vibrations in the editor by
just saying play a vibration of this
force what does that sound like before
we've actually gone through the process
of exporting the ship
and basically from the moment we export
the sound from our digital audio
workstation where we create all of our
assets we can have it on the ship
playing in the actual game within two
minutes and I recorded a video of me
doing that that's just a random sound I
just grabbed I just want to stick on the
ship just for the purposes of this so I
export it and then I import it to wise
which is our you know which is all your
tool that we use at sea at AIG and then
I put it into the into the into the
event then I add a couple of our TPC
behaviors on it so what I'm doing is
making the Sun wobble a bit when you
accelerate quickly pick one from the big
list of ship parameters were you rushing
it a tiny bit
look it is possible to do this quickly
if you know if you know what you do
cool yep then I've done a lot I built
the bank going to the game refresh the
audio system and then I choose where I
want to place my sound so you know place
it there paste in my play triggers
choose which RT pcs are neat which
parameters from the flight model I need
to use on that point to get what I want
save it export the ship go into game
mode on the ship then I've solo that
sound so we only hear the new sound
[Music]
sounds a bit strange next mission
[Music]
and how long Chuck this previously 10
minutes maybe before yeah
all of our tools have generally I've
just start balanced in the time as well
yeah
so with that foundation done we have a
lot of things to look forward to so
essentially we're not done yet right so
we have now a good foundation we can do
more extensions of the existing existing
system and make them nicely intact with
us and one thing we want to do in the
future is a title link with the ship
power system so if you if you think
about like you're in a room and like
parts of the room like in a ship let's
say the back side of the ship is powered
off then we want the audio to reflect
that at the moment we cannot do this but
this will probably happen over the
course of the next year yeah then yeah
we want you know sound on each specific
ship components so you know you could go
to your shield generator and just by
listening to it then you would help give
you a hint about that something was
wrong with it
same with power plants flight support
any kind of component that can perform
well perform badly we turned off we want
to support it by having a sound placed
on the component inside the ship from
where it actually is and you you've seen
maybe on the ship's there are slots like
maintenance slots where later like few
generators and power generators can be
put in so we will hook into that as well
another thing that's coming online next
year is sound some implementation
because we all know there's no sound in
space and this might be boring and sound
some is the thing that makes makes
things audible in space this is like we
actually have like a lightweight
implementation of that already so if you
are in your ship and you turn off your
sensors or take a few helmet you will
not you will not be able to all of your
senses you'll get a slight change okay
so and and we will greatly expand the
system over there in the course of the
next year oh yeah now we've got all this
new technology we want to kind of go
back to the ships that were made really
really early on and other sounds and I'm
really really early on and make like a
hit list of ones to kind of extend given
all this new technology that we have and
that's just like a gradual ongoing
process yeah
okay also of course we want still to
improve the flight experience we think
we're on a good path but we're not done
with that yet
so one thing we do ritmo recently is to
do real audio recordings maybe it tell
the story about the vibration components
and then it was all working really
really well and we had no content to but
in it so I have to very very quickly
come up with like a whole suite of
different stress sounds and rattle
sounds to cover the whole range of ship
movement and the only thing I had was my
filing cabinet in my in my sound booth
at work and my saw buffa so I played a
synthesizer through just the subwoofer
and then kind of strap that to the side
of the filing cabinet and put different
kinds of things in it and annoyed
everyone for like half a day weekend of
all of all of the vibration sounds in
the game right now all my filing cabinet
but not alone we've planned to do some
actual recordings of we have a video and
the person with the mouse cursor can you
click on the lower left side of the
screen okay so every every messed up
your immersion now yeah no but we will
we will get nicer assets for that in
future as well yeah yeah then a nice
little private endeavour of - I'm went
into flight school and during the first
couple of flights already noticed a
couple of things right which could be
used for the game because you cannot
turn off your develop developer brain
can we have a click on the top left
video please so that's me I had a GoPro
strapped to my head and then I mean this
is this is like a silent video because I
cruise a lot during flying but you get a
good feeling about what's important for
a pilot right and you get a good feeling
about what can be done in the future to
make the flight experience better and I
also recorded a couple of sounds which
made inmate into keenya so
you probably go back and recording some
GLaDOS at some point because you get
very pure wind sounds but yeah so we're
going more out into reality to get some
nice source material also we were in an
ad show recently and we visited we saw a
display of a profile jet fighter right
and this one is just like droning out
everything around you in terms of audio
and I came back really really excited
was like Josh Josh to make fake please
please make sure flour and make them
more growly and all that and this is
most directly fed into that's when we
came up with the extra level of detail
atmospheric stuff so and this is like
why the ships in the atmosphere now
sound like they are so you just get a
lot of good reference materials right so
but the most important thing that we can
do and can get is your feedback so if
you are and unhappy with your sounds or
if you saw it with our sounds and if you
want to give us feedback make good or be
back please leave us a message at
spectrum what we cannot guarantee to
answer everything we read everything
that you that you write to us right
and please prefer spectrum because like
this is the this platform is not just
for for you it's also first developers
to read what you about the community of
thinking so we're almost at the end of
our talk so as you can imagine we're now
in a much nicer place and we have time
for questions I think we have time for
questions
see person with microphone appeared we
have time for questions
[Applause]
oh I I'm just wondering how are you
gonna sound alien ships what kind of
technique we'll use for that
okay so code sight it would be exactly
the same sound design wise Josh did the
bunny defender which was the first bunny
one their Spanish ship that we've had in
the game flyable is basically just like
you just come up with like a kind of
it's like I sort of sound Bible you know
it's like a few key words from the law
and all that sort of stuff to kind of
inform what kind of sounds you pick and
it was very useful to kind of restrict
what sounds we build the whole part from
so I was kind of struggling with the
binary defender in all honesty for a
little while and then I really dug down
at this sound Bible idea picking a few
key words picking sounds fit that and
then restricting myself to just those
sounds and then you know just like put
them all in a folder of fifty sounds I
can only use these for the whole ship
and by doing that you force yourself to
kind of you know do something unique for
that because you're not using stuff
that's already been designed or any of
that you know it's about noticing yeah
getting a good base for yeah that's
things like we use the law and you know
how and the art to inform a lot of
income of keywords that we follow yeah
so great job button on the sound so far
I love it
when it comes to Estonia plan to
implement a more even event based like
effect sort of like and when you're
breaking the sound barrier and make what
is it called like a sonic boom or for
example when you're landing with a a
spaceship that had wheels and you're
like almost gliding on the surface
you're kind of missing that whole
feedback from the ground it's trying to
plan to implement that
okay A to D to the sonic boom stuff what
you mentioned that it's a complex thing
that is on our to-do list but it's it's
not very easy to do because if you want
to do properly you need to take an
account like different speeds of sound
because speed of sound is depending on
the temperature on the only and the
density of the medium and we don't know
what we do when you for example well
think about you have a sound right and
then you you accelerate so fast that you
get going faster than the sound and then
you stop and the sound catches you again
is that that might be very confusing for
players right also if you if you imagine
if you have like a dogfight far ahead of
you and you have like this delay between
a sound happening or a visual explosion
and then you get a delayed feedback
there's player expectations so it's not
quite clear if the players will accept
that I mean we had a we had a chat at
some point I was like oh cool this is so
impressive right there it's like because
we tested that we tested like just like
basic sound speed of sound parameters
and we had a scene where a ship just
exploded and like a second later weird
like thing came it was like wow this is
powerful and he was like well this is
right so it's it's it's kind of
like it depends what you what you
experience and then when we're not quite
sure where we're gonna go in this
direction but it someone ought to do
this to to do something about this and
about the other stuff like the Eco
support so most laughs so far went into
into our ship audio system though we
have a dedicated audio coder is just
looking at vehicle eco support so
there's gonna be some some we're looking
to we're also going to improve the whole
landing experience like you know the
feeling of the like the power of the
ship but I mean we've really quite sold
that yet when you come into land that
we're always improving that and they're
as four-wheeled when you if ships can
ever land on a runway than we love did
you mean wheels on ships or wields on
like cars yeah yeah will some will some
ships like Ivan a Avenger or if you're
using a another type of landing gear
where you're like you're scraping
towards okay so obviously we want to
have better support for that but we're
not there yet but
it will happen you are there guys great
panel a day thing you've always been a
big fan of creating sounds in particular
always fought ever really good now on
though it's a filing cabinet wanna know
what you're gonna be using next what's
the plan we just want to be you know as
a start get more materials and more like
actual different office is there's only
so far you can go up in pitching up and
down one filing cabinet before it just
sounds like a bigger or smaller filing
cabinet we want to you know get more
materials involved because it's not just
metal inside of a ship it's you know all
these kind of composite plastics and
like the kind of you know if you had
like a glass pane that could resonate
with you know if it wouldn't be wrapped
me but it would kind of hum of kind of
stuff also when you land with a glider
in the field that's readily that's
really readily so we're probably gonna
yeah get involved just getting more more
more more sizes of materials more
materials in there okay stuff yeah
thanks okay that was sadly the last
question because we ran out of time
thank you so much for watching that dude
and you're on

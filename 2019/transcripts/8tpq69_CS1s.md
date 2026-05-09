# Star Citizen: CitizenCon 2949 - Me, Myself, And UI

**Video:** https://www.youtube.com/watch?v=8tpq69_CS1s
**Date:** 2019-12-03
**Duration:** 58:02

## Transcript

[Applause]
hello hello Manchester hello
so me myself and you I wear the UI guys
oh who are we so I'm David Gill I'm an
engineer I've been programming video
games for about 25 years maybe a bit
more and I've been specializing in the
UI part for about 15 years and I've been
at CI G for six of those years and with
me today is someone you might recognize
Zayn bien and he's been CI chief seems
well practically the beginning right so
what do we do
whether you part the UI tech team which
is a relatively new team and we're been
tasked by Chris to improve the UI
technology to improve the tools and tech
that the teams used to make UI now we
kind of understand that the UI is a bit
of a bugbear for a lot of people playing
the game so we need to sort of take a
step back make the tools better make it
easier for people to use to develop the
game for and hopefully long-term help
make good UI for you to use so what are
we going to talk about today so I'm
going to talk about some of the
challenges making UI for our game we are
are some of the new technology would
been developing and to meet those
challenges and then we're going to talk
about a design concept and how we get a
design concept to something working in
game with this new technology being Zane
and the team have been working on so
this is my cue to drink some water
self what is UI or more specifically
what is it in our game what does it
entail in our game so you'd be right in
thinking that the UI is like the front
end and the pause screen and those menus
things so and then that including arena
commander things like your ship
selection your loadout the star marine
the lobbies things like that but it also
includes the mobi glass and all that
entails kiosks that you can use in the
world this comes as UI so shopping
kiosks item kiosks commodity kiosks ship
selector kiosk to get your vehicle out
things like that they all counts as UI
so this image also shows quite a few you
eyes all at once we've got the visor
which is out here this is showing your
heart rate and the little dude with the
damage to your limbs and stuff so this
is all the visor UI with actually got
some a hint showing at the moment on
this screen and that's also cancels UI
and then where it says business district
because we're on a tram at the moment
that's also counselors UI sui we're
dealing with a lot here and of course
the vehicle MF knees or the
multifunctional displays that we see in
in the vehicles that includes these
panels that you see in front of you and
then the head-up display which is on the
transparent glass that all counts as UI
and this this is just some of the things
there's much many other things like door
locks and air locks and plenty of things
we do so what are the challenges in
making UI for star citizen well the
first one is the most obvious answer
it's it's the scale of this game and the
ambition of this amazing game that we're
working on there that just sheer number
of gameplay ideas that we have and
gameplay features and a lot of those
features all have UI to describe them so
when we're thinking about gameplay
features I mentioned some of the things
like the front end and the mobile glass
but let's say we just take the mobile
glass in isolation that's got the
personal modification out the vehicle
modification that
the starmap this is still that mud thing
and mission managers have this this is
just the mobi glass so if you talk about
chaos rock commodity code geass item
kiosks the ship selector chaos so just
lots and lots of different gameplay
features and stuff that all require
their own unique you eyes and your own
own ways of sort of describing that
feature to the game so even things like
some of the guns have a little screen on
the back that how or the is it still got
the poor that has the screen on the back
that says how many bullets or how much
energy it's got in it that's you I and
that's unique UI that we have to make
for the game now the next challenge is
what we call diegetic UI now in what
you'd call a traditional you a video
game and some games i've worked on in
the past were like racing games you'd
have what's called a hood which is all
these gameplay game elements like on a
racing game would be the lap counter and
your lap time and total number of laps
you do in the map maybe you status of
your vehicle and other things like that
that would be drawn to the screen but
overlaid over the top of the 3d game
world now star citizen is kind a bit
different
we have diegetic UI which means the UI
actually can live in the world you can
see it working in the world like we see
with this airlock here we've got two
screens and the actual panel that you
use and then the kiosks when you're
purchasing items these are all diegetic
you eyes now part this digest you either
Chris insists on is that you know it's a
real challenge to make is it been in a
multiplayer game or massively
multiplayer game in this case
when you're using these panels he wants
all the other players to see what's
going on with the UI it should shouldn't
be just you that's looking at it and
that presents us with quite a challenge
and the reason why this is like an
important thing is certainly for the
multi creep ships so if
you're the captain of a ship and you
want to see all your guys doing things
at their various stations and fiddling
with the shield's maybe managing the
weapons and stuff you need all these UIs
to be updating and working in the game
world so that's a real big challenge
that we're going to we need to overcome
one of the other challenges but it's
cool at the same time is the way this
game is funded and by you guys thanks a
lot for that is that it we always have
something live and out there all the
time so when we're developing a new UI
or even stronger than that if we're
trying to develop like a new technology
we can't just break the existing system
or throw away all the existing assets
because well you won't be able to fly a
ship or selector ship or buy an item so
whatever we do whatever new technology
technology we come up with we need that
to not break anything that's already
existing in the game world
so I'll get shouted out so another part
the scale issue is just the sheer size
of actual the universe so you can see
this image in port olisar here that
there's one two three four five six
seven eight I think
ship selector consoles there there's a
few door locks in this image but also
you've got all the shopping kiosks and
that's even before you talk about the
visor and the lens and they even if you
get outside and you got over the vehicle
you guys we have to manage all these
different UIs as we're going around the
universe like they they talk really
quickly and they can that should be tens
if not hundreds at a single location
finally we have lots of different
manufacturers in star citizen that make
items and weapons and vehicles and and
things like that and if those things
have you eyes you kind of want the style
of the UI to match the thing that you
in the URL so you just look weird in
janky right so also if you've got things
I had shops or subway systems or other
things like that then they would also
want to match the UI in their
circumstance of contacts that they're in
so we can see this this particular
manufacturer here so there's another
another level - this is the level of
Technology so some things a low
technology like this guy which is kind
of in this cool retro style but it's
meant to be a low technology level
that's like 2d panels and things like
that but you might have something that's
in a more advanced system and you'd
expect that UI to be appear more
advanced to sort of make it more
believable so you might have cool
hologram you eyes with or floating
models and stuff like that so that's
kind of a challenge that we need to
cover a lot of bases here with how the
UI is displayed so when we started it
with the UI tech team we are to work out
what a you know what are these goals
what do we need to cover here we need to
cover the scale the scale of star
citizen which is pretty difficult we
need to be flexible so we can display
all the different styles and all
different rendering mechanisms so
drawing it in different ways and really
really important that we don't break
anything on the way we can't just say a
43.8 none of the vehicles are going to
work or you can't but do any shopping
that's just not an option here so we
can't break anything on the way that's
really important so how we're going to
achieve this or how on a technology
level do we achieve this goal well the
answer is separation I drew this image
you might be able to tell I'm James the
artist right so what we do is we split
the code up into just two sections and
we closely and somewhat confusingly call
these the game and the UI
and the game is deals with the storage
of the information the synchronization
of that information across all the
clients or other players are connected
and all the logic that that gameplay
element would have so that's where the
game lives or what the game deals with
and then we have the UI on this side
side on this deals with the displaying
of all this information and this will
also deal with the interface and all the
interactions that you can perform with
the UI so that's like its physical
representation in the world and the game
deals with all the sort of logic and
information part of it and the reason
why it's called gaming UI actually is
it's kind of a blame thing where we when
we get books over and say hey lis we've
got like the ammo count on the back of
the gun and it always says zero but I
can shoot my gun say well is that UI
problem is it is it displaying the wrong
number or is that or does the gun think
it has zero bullets and we say hey
that's a UI problem or that's a game
team problem someone's got to go and fix
that thing as we go so we that's why we
sort of locally use these terms but it's
kind of confusing for anyone that
doesn't know it so let's talk about the
advantages of splitting up the game part
of the system from the UI part of the
system now they had the first major
advantage here is to do with streaming
now for the UI we have to be super
aggressive with the streaming like if
you leave a room with some UI in we need
to throw it away immediately because
it's super expensive on resources it's
super expensive on the CPU cost so we
can't just rely on LCS if anybody knows
about that we can't just wait till
you've really really far away and then
throw it all away we have to be very
aggressive you might actually see this
being overly aggressive sometimes and
you'll walk up to some I think the
delivery lockers are a bit too
aggressive in their streaming you walk
up to the
top end and that's because we've been a
bit too keen there so we need to balance
that so it helps us because if the game
holds all the information and the UI
holds all the assets and the display
then actually as we stream if we've
really aggressive assuming we can throw
away the UI and then if we've returned
to the room then and the game
information is still there then it can
pop back up with by using all the
information used by the game so that
that's really cool advantage for us now
it also helps us with the diet diabetic
multiplayer problem that I mentioned
earlier because if you can reconstruct
the UI really quickly from from just
this game data blob as you return to
room then as long as you can synchronize
or keep in sync that data blob for all
the clients that connected all the
players are playing the game then anyone
can convey construct that UI anytime so
I might be using the shopping kiosk for
instance and same comes in from miles
away lambda she comes into port OSR
and because the date has been
synchronized he would come over I need
you should be able to see exactly what
I'm up to at that moment in time so
that'd be really that's really cool
advantage that we sort of get for free
now the other thing is when we develop
when we work with this thing being split
up into two parts we've developed a
common interface a really simple
interface for them to talk to each other
now
this comes with like two advantages also
there the first advantage is that we can
use that interface to bring together all
these amazing game ideas and all these
different systems and all we make them
use one common language to talk to the
UI because we've got many different game
designs many different gameplay
programmers speaking many different
language working different studios
across the world we need a common way
that they can all talk to the UI so that
can be developed independently and
we're not really like coupled tightly
which means they would which means you
you have to either have the UI guys
develop in a bit of the game or have
some intimate knowledge of the game I
Hugo and O so if you can split them up
you can independently develop the game
and you can independently develop the UI
and have the right people doing the
right job now if we have this common
interface as well we get this other
super cool benefit which is we can
develop a new UI solution without
breaking anything that we already have
we don't have to throw away all the old
assets all the legacy assets and start
again we can say hey they're all cool as
long as they are talking to you so as
long as the game is talking to them in
this single fashion then we're free to
actually make them talk the new UI
system can talk to the game in the same
fashion they will use the same language
so if it opens us up to developing a new
UI system then what would we want to do
with that to deal with the challenges
the other challenges I mentioned earlier
well again the answer here is separating
these things out is to do with
separation if we can develop a UI system
with distinct areas and the right people
are going to be doing the right job on
there they're they're part of the UI so
we split it up into the interface now
this is the functional part this would
say hey this is what we're drawing these
are the things that you can interact
with don't tell you how that's going to
look it just sees the functional part of
it so that'd be a very sort of an
engineering job to do that then after
that we can apply a style to that and
that style would want to apply
independently from the interface itself
and then the third part would be how
would that like manifest itself in the
world like is it going to be some 2d
graphics to the screen like a regular
hood like
you see on the lens or is it gonna be
something drawn to a like a texture to
some in the world or could it even
manifest itself is like some 3d models
and it'd be a hologram or something cool
that was not even thought of yet so we
we keep that separate and we don't
directly couple it with the interface or
any of the other part of the UI we do it
we do it independently
so I'm gonna introduce you to the two
things have been writing about writing
which going to solve these problems and
they're called bindings and building
blocks so bindings is well it's not
really much to look at I couldn't even
give you a cool image of this because it
doesn't it's it's a it's a system of
communication it's about standardizing
the way the game talks the UI and the UI
talks of the game but it's super duper
useful and the benefits are gonna be
really broad but it's really hard to
show it as like a cool image because we
have this second system which is called
building blocks and this is the bit that
you you guys will see this is the thing
that defines the interface and it's the
things that you interact with and it's a
system which it uses a set of like a set
of what we call widgets and these
widgets can be things like text and
images and it could be vector graphics
and then it can be things are more
interactive so like a slider or a tick
box or drop-down menu and things like
that this is a very common way for you
eyes to be made
many technologies would use this
mechanism is using simple reusable
objects to make up the UI that you
interact with we don't have these big
custom objects that just do one job
because you end up writing a custom
objects and another custom objects and
another custom objects all we do is
write a simple object that we can reuse
in a flexible way this variant includes
our development times and long-term
increases our UI
the second part of the building blocks
is we have independent styling in in a
way that's not too dissimilar to how CSS
is applied to HTML where you would tag a
part of the UI to say let's say we talk
about text object a text subjects might
be described as title right so maybe the
anvil style would say it's going to use
this particular Fung and it's going to
be left-justified and it's going to be
bold or something like that and then
maybe an RSI we want it to be a bit more
subtle and it would not be bold and
maybe use a light of fun and maybe a
different color and things like that so
it's independent of defining the
interface but it's and it can be applied
for a different manufacturer or whatever
use case we have and at the end we have
this decoupled rendering so we have this
the first part the render that we've
made is the one that we use for all the
other things so it's kind of a
straightforward 2d renderer it renders
texts and vector graphics and bitmap
images and things like that's pretty
straightforward book we've been doing
some experiments one that experiments
actually we've actually got it working
for a particular new feature where the
UI is actually manifesting itself as a
series of light gateways that you fly
fly your ship through and it's odd
because it's as far as the interface is
concerned you'll join a list but
actually it's a list of gateways rather
than a list of text that you might see
in an inventory in a shop or something
like that so that's pretty cool it's
just a way of interpreting data so this
is my drinking break so
we're going to go through the steps we
go through actually making a UI which is
our pipeline which is broken down to
roughly four distinct areas as you can
see here and the first stage is the
design stage oh oh yes this anyone
familiar with this so a lot of a lot of
the UI we know we're not happy with and
I expect some of you guys might not be
happy with - so we when our first
targets was the elevator panels so I
want to use the elevator panel as an
example for this this part of the talk
because it's does a really good job of
telling us about the key features a UI
needs to demonstrate which is it it
shows it displays things to you it has
it could have a dynamic list like this
guy has here also it performs some
interactions so actually what we started
looking at was the new elevator panel
which is like a pool touchpad thing
right oh thank you you really hate the
earth that much we're not sure we don't
want to go to back to this okay right so
yeah it's demonstrating some great
features that we have - we have to solve
with UI here which is we're displaying
some text we display in a list a dynamic
list so when when the UI is constructed
it doesn't really know how many floors
or is or anything like that it's just a
list so maybe if this this one I don't
know does this one scroll if we add more
things to it then yes there does I'm
fantastic right so it's tough about this
I don't know about which is cool but
yeah this could have two items it could
have 20 items but the UI needs to deal
with these this so we start off when we
we were looking at the elevator panel we
got a paper design
the seats not on paper it's on your
intranet our local intranet and this is
a paper design that my friend and
colleague done trophy made for the
interior of the the elevator interior
panel now an elevator panel is something
we're all pretty familiar with uh
suspect most people have used an
elevator at some point and it seems a
bit like overkill to write a paper
design about it but this is really
important it's really important to get
down the exact functionality of what
we're expecting to see what you can do
in there you know and what what are
going to be displayed at any given time
so gonna is there going to be an
indicator to say whether the doors are
open or not or is it enough to just look
at the door are we going to have a
button that can open the doors things
like that so it's really important
because each one of those decisions that
are made at a design stage has a real
big impact when both the gameplay
designer is actually right in the system
to do the elevator but also when we come
to do the UI design as well so these
these become a bit of a Bible for us and
like something less familiar dunt
roofing also did the design for the ship
mining hood that you see in the
prospector and now that's obviously less
familiar I've never actually seen a
spaceship mining code before I'd seen
the design so it was really cool too so
it's right or works like this the
gameplay works like this and because the
gameplay works like this we need to tell
people about this and this and this give
them warnings when this happens and then
tell them how much this thing is
happening and then tell them when this
is full and flashlights on so it's it's
concise and it's really important to get
this because small decisions that change
along the way can really impact the
amount of time it takes to develop so
impacts of costs it takes to develop but
it also means we might not end up
releasing it at the right time or worse
we end up releasing something it's not
quite so design so
once we've got the paper design we do a
breakdown now this this doesn't mean a
programmer has a breakdown when they see
the design although I did do the mining
could and that made me cry a little but
what I mean by this is we break down
exactly what you need to know so what is
this UI panel gonna display so here
we've got like a list of floors and the
current floor and then we've also got
the status of the door and also we break
down what can you actually interact with
so we list out what can you do and on a
simple elevator panel is you can request
stops and you can open the door so as
far as far as like a game engineer would
be concerned this this is sort of like
how how they would list that out so
we've got a list of the current floor
which you get and when we have the date
that's zero here I want the total number
of floors the travel direction so we
could be going stationary or we could go
in a positive direction or negative
direction
that's programmer talk for up and down
we've got the door status which could be
open and closed but it could also be
opening and closing so this could have a
number of different states could it be
jammed you know so there's a bunch of
statuses at the door could be in and
then finally we have this like dynamic
list depending on the location that the
elevators up this particular example has
got three floors in the list so we've
got the floor each each element in this
in this list has got a name whether the
stocks been requested and then an
interaction point a way of calling back
the game to say please can you request
this stop so that's for each floor so
even with simple thing like an elevator
panel you can see how it sort of quickly
grows into something complicated but we
try and sort boil it down into something
simple so how do we get the game to
actually see this information that the
gameplay
system has very deep down in it
somewhere we want to expose it in a way
that the UI can see it so this is how it
looks to the bite when it's registered
with the binding system we've got the
same same day over I had on the previous
panel but this is how it looks -
essentially how it looks to the game and
this is this this is like it looks like
a series of web URLs anyone see those
and that's kind of not really a
coincidence these are the addresses of
where this information is held so we've
got on the left there we've got the type
of variable it is and then on the right
the value of that variable so this is
what the UI can see now this is still
we're still on the game side here right
this is what the game is exposing for
the UI to use but it doesn't know if the
UI is there and not this could be an
elevator that's on the other side of the
universe or well probably not because
object contain a stream we'll get rid of
that but it was it could be somewhere
quite far away that there's no actual UI
for so it's only when you walk up to
this elevator panel and the UI goes pop
into place that it can reconstruct all
the things it needs to know from this
information that the game has described
for it so that's that's how we get there
so this is actual image from in game
when we would develop in the elevator
panel now this shows the bindings we
have a little debug thing and it can
show all the bindings and then all the
others color coding these are all the
different variable types so we've got
like boolean types which can be true or
false or we've got integer types which
are like numbers and stuff and then you
can see on the right that this this is
an image of well it's not actually an
image this is actually the working panel
which is taken that information and
display in it so we have these the taxis
going into the text objects and where it
says I think it says current floor
somewhere current stock name sub deck
there you go so it says current floor on
the the panel but it's actually says
current stock name now the reason why it
says transit display and destinations
are not floor and elevate
is because we actually use the transit
system which is a more generic system
for for the elevators the transit system
is actually used for things like the
subway system and things like that so
it's it's a generic system which we
won't we use it to move move people
around right so that's the same for
subway car as it is for an elevator so
we're obviously wanting to you reuse
this these systems we don't want to
write an elevator system and then a
subway system we want to use a generic
system so with that in mind we've we've
got these more generic terms than floors
we've got destinations so you know
elevator having destination still makes
sense that's fine and things like it's
called gateway index it's the same thing
this is just a more generic term that we
can use now this is what we call the
white box stage of an implementation now
a white box the term is something we've
borrowed stolen from the level of design
guys because the level design guys will
block how a level in a series of white
boxes or grey boxes so they can
determine whether you know all the
scales are right and whether it's going
to be cool to play by judging distances
and like things look good in the world
first sort of like a game play level
before the graphics guys come in and
make it look like proper and cool
because that bits really expensive and
then some designer goes hmm
let's move the door like three foot to
the left and it's go crazy about so we
try and get those things so it at the
white box level and we we do the same
here with the UI that we we check that
all these things are kind of working in
the way that we want them to we check
that the buttons are going to take us to
the right floor and maybe we check that
we're getting all the information from
the game at the right time and these
variables are updating at the right time
so maybe the current floor or it says
current stock name actually switches to
the correct current stock name when you
reach your destination it doesn't change
to that when you start moving and things
you we have to work out exactly when
this is timed so we do a lot of testing
at this point try and just get it all
functionally working so the next stage
is about style so I'm this is more of a
an art thing and I'll gonna hand you
over to a friendly neighborhood artist
slash designer slash all-around good guy
sane right so now that we just kind of
seen the white box kind of wireframe
version of our UI I kind of want to
touch on a little bit about what we've
been doing in the tech to sort of
facilitate all the unique branding and
theming that we have throughout our UI
so in our game as you know we have
hundreds of uniquely branded
manufacturers themes that we need to
take into account so think of things
like ship manufacturers you know landing
zone locations hops right item shops
that you go in and buy stuff each of
those kind of have to have a you know
uniquely themed UI so it actually fits
in the world so in order to do this
previously what we had to do in flash
was we actually have to bacon the entire
interface into a single file for each
different brand we had to create so in
flash all the graphics all the
functionality we sort of had to have a
file for each different UI for each
different sort of brand we had to create
so for instance we wanted to if we're
building a new location and we needed to
add a themed UI to that and that
location has things like elevator panels
you know transaction information screens
you know elevator panels like we're
seeing
I've just seen previously then you know
it's a lot of work because we have to
copy the binary file and then create a
new one and then go into each one and if
we change each individual element to
match the style that whatever style out
that environments kind of brand or that
it has so what we've done in the tag is
we actually enabled the ability to have
a style sheet that apply
to a standard components so how we're
sort of changing up the the sort of the
way we go about actually doing the
visual design so that's kind of like the
branding of theming is we actually have
a standard set of components and what
you see here on the screen is four
different style sheets all have kind of
like the same type of components to them
so we have a standard set like you can
see buttons it's actually quite small
here but we'll go into actually a live
demo later that actually demonstrates
this and actually see a changing in real
time so what we what we see is a
standard set of components that a
designer can use go in and set up the
functionality of the UI and they don't
really need to necessarily worry about
what kind of brand it is so if they're
gonna set up an elevator screen you
really only need to do that once because
all you're concerned about is okay I
need a list I need you know a few
buttons some text fields and that's
gonna change this way in that way and
whatever at that point whatever context
is going to be applied to whether that's
gonna be in Microtech you know kind of a
high-tech environment or maybe somewhere
like Levski use just a little bit more
low-tech as long as we have a style
sheet defined for those different brands
it automatically applies and we only
need to create the UI once rather than
you know however many landing zone
locations there are ship manufacturers
or whatever so we'll have to see the
kind of white box version that we've
seen this kind of this is something that
the designer like any anyone in
internally can use to kind of you know
there's no fluff to it so there's kind
of no visual distractions mainly focus
on functionality to the right and that
is pretty much the same thing so just
kind of what a dark theme and then we
have the Microtech theme that we've
designed that you saw in the demo and
then in a theme for anvil aerospace so
they're all applying their themes to
things you know standard components so
we have like checkboxes
text input fields and by the way this is
like you know a small fraction of what
actually it would be but you know it's
just kind of for for this the purposes
of this presentation kind of kept it
simple so we could actually fit you know
fit it on the on the slide there so just
kind of break this down a little bit so
I'm just gonna demonstrate like the
application of one of the style sheets
to the elevator panel so you can see is
here's just simply the background white
right it's white so you apply that white
backgrounds of the elevator then we have
these kind of separators and borders
that we put in so you know it's pointing
to where it's used in the elevator UI
then we have the buttons so you know you
have hover States you have the selected
state for which floor you've selected
and finally just kind of like
miscellaneous icons and greebles and
things like that so once that's applied
we can start we can see the actual skins
you know that we've defined for the
style sheet to start applying to the UI
so that's all the same UI but totally
different themes based on you know the
style sheet so that allows us to source
scale our efforts on the UI side of
things and you know it's it's we can
start to you know quickly do UI and get
it get things into your hands much
faster so once we have that in place
then really it's kind of about testing
so I'll hand you back over to bone to
talk about that thank you saying it's
great so yeah
so the final stage of making the UI that
we get in game is the testing and
iteration stage so here we have what we
hope is our final in-game version with a
lovely micro textile design by Zayn I
said we switched out from our white box
level at this point and now we've got
something working and is correct so we
have to test this in all these different
ways so we got to test whether the
buttons are going to select the floors
correctly we've got to test whether
pressing the door open button opens the
door and also make sure it doesn't open
the door when the things move in so
people doesn't let people get out at the
wrong time we also test in tension
different locations we'll testing all
these different locations because the
day it would be different so there be
different floors so some as I said
earlier we might have some with two
floors and some ways like 20 floors and
in fact in the demo I was watching
earlier there was exactly this example
there was some with two floors and
there's some more flaws we also later
down the line we'll be testing with
different localization different
languages now this this means we'd have
to test in things like French and German
I don't know if it's any German people
here today but the German languages
brings out UI designers in cold sweats
because because the length of the words
can change quite drastically I don't
know if anyone will translate what we've
got there but you can imagine that some
times that these words just grow in a
way that maybe doesn't make the UI look
quite as neat as we've got here so
sometimes we are there at the
retranslate or we have to have a
flexible UI that can handle these long
words and maybe work out if they can get
split up and things like that so and
also at this stage we are at the
iteration stage this
this is where we can make changes and we
actually made changes to this particular
panel now I don't know if anyone can
spot what we thought was wrong with it
anyone know it's the numbers numbers
Thank You Zayn so the numbers the index
is on the left go zero one two three
which is really odd because if you get
in a lift that's not what happens you're
getting a lift you're on the ground
floor and because the way buildings mate
you get over the are well we've made a
first floor that made a second floor
made a third floor so that's the way no
it's natural that you make a numbering
system work that way but it's natural
for the designers when they were drawing
this out well drawing like where the
gateways are that they would go one two
three four cuz they you know that's kind
of how you write so you go top down so
we actually had an option to flip them
around like this so now we're looking
like a bit more comfortable with how
this looks now
the second part of this was a bit of an
argument between me and Zayn the I don't
know if any we probably non British
people here would notice that we don't
start the first floor with zero Zayn
insisted and because he's American you
might have guessed there they start
their numbering system on the first
floor so Zane won this argument and
shifted it down so I'm fine with that
he's a bit more buff than I don't pick
on him but interestingly sorry so rank
okay we'll go back they go saying you
lose however I was told by the ship guys
that they start their numbering from one
also because they don't have a ground
floor who knew right so I was told this
today so that's pretty that might save I
was arguing about this in the office
too much but yeah we have to put in
these options and these are the things
that you sort of find out they're not
necessarily natural straight away when
you making stuff there there are things
that come out when you know this wasn't
on Dan's original design in fact Dan's
original design didn't have floor
indexes it just said these are places
you can go so this was something that we
added and then it causes problems so
there you go probably shoulda listened
to Dan so how did we get here so we made
a binding system that helps the game
touch the UI in a standardized way this
really helps us with development and
anything that helps us with development
helps us prove these iteration times and
anyone that's used our UI probably as
notice that we're lacking a bit any
iteration times they bit can sometimes
feel a bit clunky so we want to speed up
our process and so we can make better
UI's and make better game for everyone
we've used building blocks for the
interface and if that also has this
independent styling and we've left
ourselves in a great position to expand
the renderer see we've decoupled the
renderer so we can have these cool
holographic displays instants and really
interesting and exciting images really
excites Chris book strikes the fear of
God into me for and from a technical
level
so now as Zane alluded to we're going to
attempt to do a bit of a live demo of
this we're actually going to stream the
game live people saying never work with
children and animals live TV might add a
live demos to this so if it's possible
could you oh if it's possible can you do
that that's brilliant thank you so but
to using so I'm not actually sure how
much time we have so we do this a little
faster than planned so what I have open
here is live feed of the editor and a
one of our style sheets so this applies
to anvil and hopefully no fires
so just to kind of give you an idea of
kind of how easy it is to sort of edit
some of the stuff so we have let's say
if we want to edit one of the properties
of the button so we have like this is
chamfered corner
and left border and we can edit that
through our style sheet quite easily so
you know we can change one of these
properties to be a different number and
we see the update and in real time and
generally we will have this editor open
on a different screen so we can see you
know we have a lot more real estate to
work with this is actually a bit of a
internal data editor that we're using
internally but what we're but it's
basically adding the raw data of the
system so what we're meant to do
eventually is actually have a layer on
top of the system that we built to make
it much easier for the people internally
to work with so you can notice it's a
little bit of crude interface where we
have these sections that we have to open
up and so forth but you know later down
the line probably be some kind of markup
language that you type in and update in
real time so for instance if we want to
add a button I'll just do that quickly
now I already kind of have it set up
like if we wanted to add like a closed
closed door button if you want to shut
people out and that's the feature of the
try adding you know we can add a button
there it doesn't have an icon because
yeah the troll button which I've
purposely made a little bit slightly
bigger but we add something like that
and we hook up all the bindings and if
the skin changes see if the context
changes to like for instance another
ship or a different environment it's
still there its branded differently so
it's kind of an example of you know
adding something to the UI but you know
if we have different you know
factures it's spread all throughout the
whole universe we only need to edit it
once so it makes our lives a lot easier
by using style sheets and actually
separating the structure from the
visuals and presentation so I'm getting
I think we're getting the key for
wrapping up yeah okay well if we can
just send that to the presentation
please maybe I just chatted a bit too
much about my stuff
cut your shot they're saying so the
future of the UI tech we are like we're
by no means done but thankfully you guys
should start seeing the benefit of this
and like the real benefit is we get
better tools and putting people in the
right place to do the right job so we've
got the game game engineers making the
game code ready for the UI we've got the
UI engineers hooking these things up
making the interface and we've got our
great and talented artists making these
styles that we can apply to the UI so
we're currently in a conversion process
a lot of this stuff we've there's plenty
of stuff using the UI this new UI system
in game but we're still using some
legacy assets some of the things using
building blocks in game are some of the
backs of the weapons obviously the
elevator panel that we talked about the
transit system that's that was the first
thing that was the first thing we tried
out I think that we showed that in a
citizencon
a while back that was like our first
test case hey let's do some scrolling
text and it's a very low-tech version of
what we're where we were going but it
was a good test because every one every
every client was seen the same thing at
this point so we're in the middle of a
converting so a lot of the systems have
been converted to use bindings so then
we can sort of choose when and when
where where and when we swap out these
things and I actually we're in situation
with the vehicles vehicles are all using
bindings now we're still using legacy
assets apart from one via
which is the Gladius and the Gladius
head-up display is actually using
building blocks so that's really cool
that we were with mixing a match in
these two different systems without
saying hey either the entire Gladius is
broken or hey all ships are broken you
know that's just not acceptable even I
wouldn't be in a job for much longer if
I said that so we're gonna gonna do a
lot more work on the resource management
so we don't have to much we can lower
the overhead and we can have more you
eyes in and we're going to develop the
tools a lot more like Zane was saying
away from what we saw on screen net or
something a lot more user friendly a lot
more well artis friendly artist who uses
as well but a lot more user friendly for
them to develop these Styles quickly and
for all these different manufactures
that we talked about and the future
really is we're going to do more these
renderers who've chris is really really
keen on seen three duis and really
Futuristics you Isaac so he's really
excited by that so he so yes this this
is the end how much time we got about
five minutes yeah five minutes okay well
if anyone's got any questions about the
new UI tech I might not be able to help
you about implementation things but
certainly hope we xenon myself can see
about the new new UI tech
[Applause]
thank you
do you have you set testing here sorry
oh hello hello hi so you spoke of
testing do you have some kind of
automatic testing for the implementation
in like different variations because you
said you have to test in different
locations and with different options and
that should be all covered through like
an algorithm ISO specifically for you I
know the graphics team do have a
ultimate we do have automated testing
first us assume we have manual testing
ie we have a lot of QA guys also doing
this stuff because there's no way of me
knowing when when or you know if a
gameplay engineer knows how it's going
to be used in future so you're right we
just don't know about all these
scenarios we don't actually have
automated testing per se about for the
UI but for the graphics team day they
have a thing so they run through it runs
through a series of checks and checks
that that the graphics of not
essentially broken when they make a
major change it takes a lot of images
and compares the images with previous
images so we could definitely set that
this same scripting thing got to to go
through all the locations wouldn't know
because we know where all these you eyes
are because because they are there so we
can actually set up a camera we could we
could run a script run the game move the
camera take a picture and and sort of go
through and see you know how's this look
we Microtech in german on this spaceship
or whatever with this data so I think we
could definitely set up yeah I'm a
visual display side of things we
actually have like a level at
development layer in the editor fau
where we actually have layouts all a
bunch of different elements configured
in pretty much every way we can imagine
and you have to make sure that all
that's looking right because if we're
working on the text sometimes that
breaks yeah hi hi are you responsible of
the design you applied to the assets or
is it as a team I'm in a design specific
team which give you instructions to
follow to design the Z assets
from from a gameplay perspective no well
me personally none I work on the
technology for people on the gameplay
team to implement a design so we have
dedicated these systems designers like
dan roofing who will design did the
paper design that we've seen the
presentation he he comes up with like
these gameplay ideas and write small
done in a very specific way then we have
a specific they get assigned out to the
gameplay engineering teams which why I
sort of call these guys on the game team
other than the UI team so they would
they would they would implement that and
also expose the bindings ready for the
UI guys who immediately use yeah and
then it's then there's a job of the
graphic designers who's so all this
separation I talked about is like
keeping people doing what they do best
in the past we were a bit coupled
together like we would have we would we
would try and hire people that could do
like five different jobs and apart from
Zayn it seems to be able to do
everything's kind of kind of irritating
and actually I can only program you so
my drawing but yeah yeah so if we can
keep them separate we keep the keep keep
these guys apart that capes keeps a
really good workflow we've talked a lot
about how the data interfaces with the
design team how much of that design is
influenced by how we interact with the
objects specifically I'm thinking about
ship MFDs
because I without something like game
glass or something there are quite
cumbersome right now to go and
point-and-click and yes into their
massively emphasis and we were sort of
acutely aware of seems like already a
lot where we listen to community a lot
what we didn't have is the ability to
iterate on these and these issues like I
could give you a huge list of things I
want to change but but my remit was more
from Chris like make this easy to do
so we can change it quicker and we can
get lots of people to change quicker we
use of it like a dedicated UI team and
they would just absolutely swamped with
stuff and they just can get through the
work quick enough and what we want to do
is spread the workload and so we I make
it eat much much much much easier for
everyone to do so I'm hoping now this is
I mean it it's really satisfying to see
this come actually coming off now and
it's all working and we're actually
seeing the results a lot better what we
haven't done right this moment is we
still got the vehicle UI to do but we've
listened a lot to the community and
we've done a like massive design changes
of exactly well how that's going to work
so and how it's going to be displayed
it's like a lot of the time people lose
frustration with the UI is sometimes a
UI is broken that's fair enough that's
kind of my fault and sometimes actually
the game doesn't kind of work the way it
should it doesn't talk to the UI
properly so we're trying to solve that
problem and sometimes the design just
isn't fun I won't get there and like if
we can't change that you know oh god
well it took us six months to get here
you're just gonna have to put up with it
that's that's no good is it we need to
be able to think quickly on our feet and
go right we tried it wasn't that much
fun but if we just move this and change
that then actually this is gonna make it
a lot better so I'm hoping that's we're
going to improve things okay and we seem
to be a bit pushed of time today and I
did ramble on a bit so thanks a lot for
listening and xixo coming I hope you
have a great day
[Applause]

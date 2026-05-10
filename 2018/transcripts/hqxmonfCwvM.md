# CitizenCon 2948 - Road to Release

**Video:** https://www.youtube.com/watch?v=hqxmonfCwvM
**Date:** 2018-10-15
**Duration:** 23:10

## Transcript

[Applause]
hey so I hope you've had a great day and
sad saw a bunch of the panels are some
very very cool stuff the various
developers were showing so hopefully and
the panel's you didn't get to see
they'll all be on youtube so check them
out afterwards okay yeah it's not
working
wait go back okay
yeah it's broken yeah what is life I
don't know what is release okay calm
down everybody chill out so we were
actually debating about the roadie
release discussing that for star citizen
and we were talking about whether we
were going to go up with a hundred
bullet points and talk about all these
features and myself and aaron and todd
papy and tony we're all having a sort of
discussion about what the core meaning
the core elements and the core
technology that we felt would create an
experience that sort of defined the game
and also was worthy of playing
irrelevant of whether the full feature
sets is finished or all the content in
terms of planets and locations is done
because for us when we think about
release I mean we're really releasing
every three months now so we you know
we've got three point three just about
ready to come we just had three - we had
three one and we're running a live game
and that's sort of the epiphany that
we've had internally which is okay we
need to focus on how the game plays now
we've got to improve the quality of life
we've got to improve the user experience
the UI how you get into it make it
accessible ensure that the gameplay
right now is polished we're not there
yet but we are definitely working
towards that every single release and
that is a priority for us but for us we
were looking okay what was going to
define the experience that's the big
vision of star citizen and that in
really for us when we hit these
milestones then for us we say okay I
think this will be the core experience
in tech that will deliver the vision of
star citizen so we go for look at that
can we go ballistic over oh it's working
now so here you go so the very first one
was the ability to be inside a ship
right so so it's not just a cockpit it's
an actual fully real tactile physicalize
ship that has engine room beds toilets
mess hall whatever you would imagine to
be in a ship of that
sighs and there we go
and we did that that was a very
beginning thing that we did the hanger
module which we did back in 13 the next
was space combat which was about okay
I'm gonna get in my ship I'm gonna fly
around I'm gonna Doug fight which I'm
pretty sure you guys remember is what we
did with arena commander the next key
technical milestone was the 64-bit flow
floating precision so moving from 32-bit
to 64-bit so we can move we can have
sort of millimeter resolution and going
all the way to billions of kilometres
route which is what we need for star
citizen because we model entire star
systems that have to be billions of
kilometres across
but we need millimeter visual precision
because you're right up there looking a
cockpit in first person it's only a foot
or two away and 32-bit precision just
doesn't cut it and that's why most games
FPS games most engines now are 32-bit
and if you see them they find it very
hard to have air play areas bigger than
16 kilometers on a life on a side right
and they you know they brag about oh we
got this really big play area and it's
you know a couple of kilometres across
so that in the physics spreads which
allow us to simulate separate physical
worlds you know when you're flying
around and ship walking around while
you're flying in space or if you're on a
planet and it's rotating around a star
or spinning on its axis for night and
day so that was a very critical piece of
tech and of course that was it's wrong
with this thing okay that was a speci
alpha 2.0 unless paul's trying to read
my mind over there then the next key
element to the gameplay we wanted was
having the ability to earn money and
have a level of persistence which was I
can go out and I can earn some money I
can buy some things I log off I come
back on I've still got those things and
that was quick Paul there you go
alpha 2.4 where we had our very first
basic persistence it was only very
limited didn't have persistence of
location and a bunch of other stuff then
the next big milestone that we needed to
solve which in a way we've gone go back
yeah yeah I'll say go for I'll say go
forward and then you go forward just
wait for me to say go forward
well it's 1st and 3rd unification of the
character and we've talked about it a
lot but it's you know most first-person
games
cheat and they have very different
animations and models for first person
to third person and then when they have
their multiplayer say battle mode they
have limited amount of actions that you
can see on a third-person play a
character that's doing because it's very
difficult to sync up the actions but for
us since it's going to be an you know an
MMO with thousands of people you can be
sitting right next to your friend and
he's interacting with the dashboard just
like you are so you're seeing him do the
same thing in third-person that you're
doing a first-person also where our guns
actually aim is where the gun is really
aiming it's not sort of cheating at
where the mouse cursor is so we needed
to unify it it was quite a difficult
task but we did it
let's go forward and that was really
kind of what star marine was we had
early parts of it before that the next
big thing was the planet tech so you can
see the planet or the moon and you can
go there and you can walk around it you
can explore every single inch so there's
no fake loading screens there's no
transition down to it there's no go down
you can only land on a certain area and
that was the procedural planet tech
which we debuted go forward with 3.0 and
the other big thing was location
persistence which is the ability that
you go to a location you log out you
come back you're at that location you're
not starting back at where you started
before and again that was the first
stage go forward poor with 3.0 and the
next big thing which is where we're at
right now is object containers streaming
and banking and this is actually a
massive thing I think we've talked about
it
you know we fought originally when we
scheduled it out it was going to take
about six months it's been about 18
months solid development on it and as
you all know ban culling has been
something that we've had on our roadmap
and it's been pushed back and push back
push back and that wasn't necessarily
because we wanted to push it back it was
mostly because it turned out both the
object container streaming and the bank
or Bank calling needs object container
streaming to really make sense and
object container streaming was
incredibly complicated because we had to
re-engineer most of the game engine
itself because for object container
streaming to work at our scale well
we're moving around we have to be able
to stream in the objects and textures
and models and all the data and
initialize them all completely
asynchronously so the games running here
meanwhile it's loading up the stuff that
will be over here or over here over here
and we don't know where the player is
going to go and it's complicated because
it's multiplayer so a multiplayer we
have all these different players that
been going in different directions so we
need to be able to have object
containers streaming that works both on
the clients and on the servers and
applying culling that's going to work on
the clients and ultimately on the
server's so with three-point-three this
is the first use of the object container
streaming and the bank lynktec it makes
a massive difference in terms of
performance because you you're only
worrying about having the part of the
world that's relevant to your character
streamed in which means you don't have
to simulate all the objects in the
entire solar system you don't have to
worry about them they don't take up
memory so it's better for memory it's
better for performance and you know as
we've said on a TV and I think in our
newsletters we've had some really great
results so far
I mean it's has stability issues right
now because again when something is
multi-threaded and asynchronous there's
a lot of unpredictability because when
two different threads are stepping on
each other it can have unpredictable
results but it's a massive step forward
because the biggest thing for us to be
able to scale the game and also have
performances this tech here so we're
really quite excited to get this out
because it also in ours allows us to
start building out in the stanton system
because before
as everyone knows even with 3:03 132 the
memory use of star students was way too
high for where we want to be and we just
couldn't fit anything more in memory at
the same time so object container
streaming allows us to do that and so
that's a that's a massive win for us so
let's move forward Paul and that's going
to come with three point three which
we're imminent doing the next big sort
of pillar it's the ability to either buy
or rent ships and that's because the
game loop is essentially going around
earning money so there's various ways to
earn money there will be more ways to
earn money as we flesh out the
professions but once we earn the money
we want to spend it on something so
there's a lot you know there's only so
many suits of armor or a guns you can
buy and the core sort of upgrade loop in
the game is really the ships the ships
allow you to do bigger and better things
different professions and so as a player
you want to earn money and then upgrade
and then that ship will allow you to
earn more money and upgrade to a bigger
better thing and do different things and
so that's that was very important for us
to get in it's going to be in three
point three but the purchasing or
renting obviously there's going to be
some time where you just to try to get
the economy to work properly because we
do have a problem that you can buy the
equivalent of a Cessna or an a you know
a nuclear carrier and you know there's
only like one nation on earth the one
we're in right now that can afford to
spend ten billion dollars on a nuclear
carrier but we in our game sort of allow
the player to have that huge range so
you got to figure out how we make that
work and I'm a economic basis on the low
end and progressing to the high end so
I'm sure they'll take a bit of time to
dial it in but it's a it's a major point
for us so let's move forward and that
shall be in three point three so then
the next big pillar and there's twelve
pillars that we don't know
dony Todd myself identified that we felt
were really important and or the
organization system so this we already
have a version of it online but this is
the organization system inside the game
so you can get your old mates together
you can do things like assign out roles
or missions or
cost share or revenue share you know
specify their tithes for the group or
you know however you would like to
organize it into different pods or
modules for communication reasons and we
want to move that in so the so build it
further out on the website for some of
that stuff and then bring it across into
the game and you have all that so you
and your friends can create your
organizations of groups as small or as
big as you want and then we move forward
full persistence is the next big thing
it's the eleventh thing of the pillars
we think so for persistence we talked a
little bit about it at the beginning of
the day but for persistence is the
ability for you to go anywhere in the
universe and you know me drop this
remote on the floor doesn't work so I
might as well drop it there you go right
so and then I'm then I'm gonna walk away
right and a walk out here let's get a
stream out it's gone and I just said are
you know what I really want my remote
again and then it's gonna remember that
I dropped it it's gonna stream it back
in even if it was on the surface of a
planet and I'll be there and I can pick
it up the first person and that's a big
step for us to be able to do that and
we'll
so the fall and the fall persistence
combined with the object container
streaming and killing uh I think things
that will make the world alive because
you know it's not just me dropping a
remote it's leaving a ship somewhere or
you got damaged in space with your ship
and so on rescue you went you went away
and you came back to get your ship and
repair it and then take it home and
we're gonna you know persistence in your
hab so you'll go there you can see that
you can move and interact the objects
you can you know find things on travels
in space take them home
bring them leave them at your hab or
leave them in your ship so the you know
physical inventories are gonna be very
important in the game going forward in
terms of you know being able to store
and manage stuff so the more you play
the more stuff you collect you know if
you're a hoarder then you'll probably
want to get a bigger big hairy humans
face and the other aspect of full
persistence is the aspect of age wear
and tear so you know a long time ago
talked about death of a spaceman that's
very much on our roadmap and plan and
this the ability for items as they get
used to get where things aged you as a
character will age and again that's what
full persistence is about it's getting
to this point that is you play the game
players in the game do things and it
persists
so this universe is not a theme park
that gets reset every day that you come
back and visit this universe is a living
breathing universe that changes as
players live in it and interact with it
and I think that's probably one of the
biggest things that's why we call it the
persistent universe is that it has a
life and a persistence and people's
actions will mean something in it and
that's a very very important part the
11th pillar and the last one if we go
forward Paul is server meshing so when
we get server meshing that is we think
the last piece of the puzzle that have
the full game experience and this is our
ability to go you know right now we have
about 50 players on a server we probably
will be able to increase that number
because of bang following and stuff but
it's still going to cap out at some
level with server mashing we'll be able
to get to thousands of players playing
concurrently in
same locations star systems they're not
all going to be able to have a thousand
people dogpiling together they won't be
able to render it all at the same time
but you certainly will be able to have
you know a thousand people on the planet
person for instance and so the server
meshing is the last key piece because
that will allow us to have a truly
massively populated universe of players
as well as AI and having servers that
dynamically scale up and down to take
care of the processing needs of that and
so from our standpoint in terms of what
we would think is the experience when
you guys can sit in and play the game
day after day and not worry about it
getting white not not worrying about oh
I'm going to do something for a day or
two and there's no point because they're
going to reset the system
when we get to full persistence of the
server meshing that is that's our marker
and sure after that we've got a we've
got planets to do and star systems and
we're going to have continual feature
development but this is an online live
game and so for us we don't have a
particular viewpoint in terms of oh
that's it this is where we finish it and
we don't do any more work it's like
literally are we kind of you as long as
you guys want to live in this universe
every three months we're giving you a
build and here you are and here's a bit
more and here's a bit more here's a bit
more and when we get to the full
persistence and server meshing I think
at that point that's when we're not
going to be resetting the servers it's
when it will be ongoing living breathing
game and that I'm not going to give you
a date but
but you can watch you can watch on a
road map as we develop it and I just
watch for that for because us internally
those are those are what we view is our
you know sort of cornerstones that we
need to get to and yes there's a lot of
other things that we've talked about
that we're also working on but when we
get that we feel like that that's gonna
it will be a game like no other so that
is kind of what we in terms of road to
release but speaking of near-term
release three point three I think we're
going to go wide to beat you as of today
so you guys get home everyone here will
get access I think we're gonna open up
to subscribers and concierge first and
then as long as things don't blow up too
badly then we're gonna go full wide and
then we're going to keep hammering on it
because we want to get three point three
in everyone's hands as soon as possible
because of object constraint streaming
and Bank culling makes a massive
difference to the experience and
performance and once we get that stable
and we need a lot of people playing a
test to get because that helps us with
chasing down all these sort of edge
cases are very hard to replicate then
we're gonna roll in the personal Orval
aspect which we showed earlier today and
I think it will be it should be a pretty
great patch when all that said and done
and there's a lot of stuff in three
point three I think we've talked about
it but it's quite a lot of new ships I
mean I think it's probably one of our
you know and it's kind of fun it's the
first one we have a straight to fly a
bull ship in the Valkyrie which is cool
the I think the hammerheads probably the
biggest ship that we've got in the game
at the moment and it certainly is
probably up in post firepower of a ship
in the game and they got you know the
Phoenix which is great fly around with
luxury and then the cool new mustangs
and all the tumbrel variants really cool
too so I think it's going to be cool I'm
looking forward to you guys playing it
so that's that if we just go forward one
extra thing we're going to do and I
don't think any other company that
operates
an online game does this or I'm not
aware of Swan it does this but we have
we collect telemetry on obviously all
the servers and all the clients that are
connected to us and so we get a good
idea of what the frame rates are what
the machine specs are what the latency
is what the load times are and we've
often had debates because we see a lot
of anecdotal you know framerate sucks
and everybody's very searched and we're
like we're watching the data and that's
not exactly what our data says so we
decided that we wanted to give all you
guys the ability to track the telemetry
yourselves so what we have is you can go
into the website this will release for
three point three and we will have live
telemetry on three three going forward
you'll be able to see your machine so
where you start in the CPU score will
use sitting the GPU it will tell you
what your steps are and we're going to
be tracking not all this stuff gets
tracked right away but we're planning on
tracking the latency and the loading
times you'll see the crashes and then
you can track yourself against a heat
map of everybody playing the game and
see where you land and see also kind of
what the specs are here
so that's you know in the spirit of open
development you guys are going to be
seeing what we see in our control
dashboards and you can also sort of see
because that it you know pcs are
challenging because everybody has a
slightly different configuration and you
don't know if someone's Bitcoin mining
on the side while trying to play star
citizen or doing nothing right but it's
quite interesting and I have to say that
there's we've had a few outliers on this
where some people have had like thread
rippers that are just crushing it on
three point three so it's a it'd be
pretty interesting in the new Intel
multi-core ones they're doing pretty
awesome too so you guys will be able to
track yourself against everyone else and
then longer term not right away but I
think the next stages will open this up
so you can sort of see our server
performance too so you'll be able to
track how the servers are doing what the
stability is what their frame rates are
so you know when I wants to betting I'll
suck so whatever you just go to this
page and see how it's going so I think
that should be really cool
Goemon okay I know you guys were trying
me
so obviously I know there's a few people
okay well squadron 42 well it's going
really well I'm really happy with it and
you've seen actually today if you've
been in some of the panels you've seen
some of the tech we'd be working on like
if you went into the character panels
you went to this space gaping Wan even
the cloth stuff that was happening
there's a lot of stuff we're developing
specifically that goes into squadron and
then goes across into the PU and we're
closing it down all the remaining
features were in content and the last
major technical hurdle that we were
worried about on squadron was object
containers streaming which as you know
we're almost ready to close out here on
three point three so we don't have any
major technical hurdles left on squadron
so for us you know it's it's a bit
easier to get squadron closed out than
obviously star citizen that needs to
serve a mashing in all the red stuff so
that's going we're going to publish the
public roadmap for you guys in December
all the way to completion of the project
and I'm just going to leave you with
something right now
you

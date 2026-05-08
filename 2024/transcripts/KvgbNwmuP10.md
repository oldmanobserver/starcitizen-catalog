# Star Citizen Live Gamedev: Making FOB

**Video:** https://www.youtube.com/watch?v=KvgbNwmuP10
**Date:** 2024-07-26
**Duration:** 1:11:46

## Transcript

hi everybody Welcome to cig reacts I'm
your host Jared Huckabee uh on today's
program we're just going to sit and
watch a bunch of videos made by you and
tell you what we didn't
like would be a pretty good episode you
should have cr in here reacting just go
to camera to I'm lying uh welcome to
Star Citizen live everybody uh I'm Jared
this is John uh this uh welcome to the
show uh I see a lot of firsttime
Chatters in the uh in the in the twitch
stream uh so you know people always say
why do you do the same intro every
single time and I'm like have you saw
the number of First Time chatter boxes
and the thing so we're going to do it uh
if you've never seen an episode of Star
Citizen live before it's where I come
really close to getting fired each and
every
week hi um no it's where about an hour
out of the end of our week sometimes
longer sometimes shorter and uh
we talk to you we we sometimes we answer
questions uh that come from the
community sometimes we answer questions
that come from me sometimes we we just
get to know people and sometimes which
is what we do on today's show which is a
Game Dev show uh we sit and watch
process we get to watch uh how the
developers actually build uh the items
and the places and the things of the
star say and universe joining us on
today's game Dev show uh is uh is is a
good a good good friend of mine who is
one of those one of those people I just
it's one of my gossip buddies just I I
come to his desk I'm like oh my gosh did
you hear about that oh yeah that's all
really all we talk about uh it is what
is your what's your title now I'm still
lead lead environment artist lead
environment office office lead
environment artist um first name John
John almost forgot then my own name John
Griffith John how you doing man yeah I'm
good thank you this not a great intro to
the show is it oh I think it's good it's
uh you know it's keeping it Loose it's
hard when when we take a week off like
it's just really hard to to get back
going uh so yeah so what are we doing
today John so we are going to create a
new variation of something that already
exists in the game but giving it a
different kind of lick of paint almost
and kind of reusing it and putting it
down as an independent thing but it's
not just a face lift something uh so
we'll go I'll go into a little more
detail here uh you and if you're playing
Alpha 323 now you might know you might
uh have found the new distribution
centers uh these big giant hulking
heaping uh areas of gameplay scattered
throughout the planets and just the
planets there's not any on any moon is
there just planets just the planets of
the Stanton system uh for the upcoming
pyro system uh considering that pyro is
far more
sometimes it's it certain aspects of it
I want not all of it but certain aspects
of it are more combat oriented combat
focused and uh we are evolving the
distribution centers in certain ways to
include more uh opportunities for better
combat uh the level design team working
with the level design team uh uh
implementing things like greater
elevation and and and just more complex
areas that that can are really conducive
to firefights and that's what we're
doing uh today um yeah right so we're
doing the art side of it yeah we're
doing the more so uh but I will be able
to show you you know what the art
impacts um because just by you know
moving a box from the left to the right
the you know the ledge grab stuff has to
go with that so we're just going to kind
of blanket ignore that for today and
just look at the picture and these are
the these are the little ancillary areas
that are kind of off to the side of
these of these distributions not a big
keeping building yeah so we've got the
um compounds or fobs as people call them
and we're just focusing on that and
we're created a new kind of location
archetype with these separate to the DCS
but we're using the content that we made
from the DCS okay to an extent uh it's
one of those things where you we build
modularly so that we can reuse these
things in multiple different
configurations and that's exactly what
what we'll be doing today so without
further Ado uh cuz there's way too much
ad do as it is uh let's let's switch
over to the to the screen share and I'm
going to turn it over to master
ceremonies John Griffith's what are we
looking at so this is for people who
play the distribution centers this sits
outside of them on the peripheral um as
kind of like after you've got through
the security defenses you'll probably
have to go here for the first part of
the mission before going into the
Distribution Center themselves so this
thing you've already seen and we're
going to take this as our base um but
yeah this is basically how we set them
up in levels so we
have the actual base unit ignore
whatever that is um and then we have
these overlays that sit on top so it
means that we keep the same base but the
overlay switches um so it's kind of yes
you can be modular in your kits but you
can also be modular on the next level up
which is quite nice so I've already done
a bit of setup and we're going to go
over here to number two so one of these
already exists and we're just going to
do another variant of them
so to answer the question in chat what
does FOB stand for in our term we use
forward operating base so th those who
were guessing forward operating base in
chat correct uh I saw another pretty
good field operation base absolutely
applicable name uh but yeah forward
operating base is what we refer to them
as so in this version the I've already
done we needed to make it look more
abandoned and before I was talking
talking about how things we change then
have an impact on other disciplines like
uh design like lighting sound that kind
of thing so for this version we were try
not to change too much um because time
time pressures and such and resource um
but in this case you know what we can
get away with doing is just changing the
tint you know so these were yellow they
were this color in the original and we
can increase the wear and the dirt so we
get kind of a different look straight
away without really doing a lot which is
really handy for us um I'll just go back
over to the one that we're going to be
working on just so I can demonstrate
that but if we grab this building here
let's just turn these helpers off so you
can actually see
Dink and then in here
where are you where so if we bring this
down and back up so you know you can see
quite easily how we can make things feel
or look different just by moving a
slider which is really handy for us um
obviously there's lots of other things
and I won't be able to get into
absolutely everything today but things
like you could if I turn the layers on
that would help things like we could
change what number it is so maybe this
is
number eight and there you go it's
changed to a number eight so things like
decals on the ground we could move these
around we have dirt in different places
than we have before um but you know what
we really want to do today is change
this substantially so I'm not going to
really be thinking about how level
design and where all the markup needs to
go um but let's just do something that's
a bit different using parts that we
already have that you've probably seen
before and then we can get it down on to
Planet you can see that process or at
least how we used to do it and um you
know how we go from A to B as it were
this is where uh I issue the same
disclaimer we issue every single time
because again every show is su's for
show uh nothing absolutely nothing in
game development is made in less than an
hour not well or good or enjoyable or
shippable anyway um so we're are sh
we're going to show a very abbreviated a
very condensed version uh that doesn't
have any of the peer review that doesn't
have any of the you know calling con and
uh Antoine from Level design team is
this right like they're just like no no
it's not uh so as you we can see now we
you already you pulled out the first
thing you started with is you pulled out
those big tanks yeah so I think for me
um so things to kind of keep in mind are
the building we want to keep and the
walkways around it because this is where
we have you know spawn closets so this
is where the AI would pop out of and it
makes sense that out of everything
that's on this platform that the um you
know the building stays you know that's
the purpose that's the reason why we're
going there now this doesn't have an
interior at the moment so we won't be
changing anything inside but that would
also be something that you could change
quite easily put in a new interior to
that is essentially a very big spawn
closet right there yes yeah and again it
it's always difficult to know you know
somebody somebody has watched everything
we've made for the last 11 years and so
they can audit a you know a 2-year
degree in game design and somebody has
just you know this is their first or
second show or whatever they've never
heard what a spawn closet is so a spawn
closet is basically a place to generate
AI from uh so you don't have to have uh
recurring bad guys just pop out of the
middle of nowhere which breaks immersion
so whenever you're building uh any FPS
level uh or even even a spaceship level
in certain certain uh situations you
build spawn closets and places for the
ships or people to come from that are
believable they're conceivable and you
know you don't question it yeah other
than saying wow a bunch of guys were on
lunch break inside that that room
weren't they yeah y yep yep yep um so
you might be saying well why John are
you not deleting everything um because
you might need it there yeah exactly I'm
just deleting it because this is how I
work you know and everyone works
differently I quite like having stuff to
one size that we could probably just
drag back on later if need be um or we
could group it and use it somewhere else
um right now I'm trying to just clear
out this area so that so in the other
ones we have some buildup but what else
could we put here that would kind of
change the silouette of the overlay it
itself zorp says I was born in a spawn
closet that's awkward first first time
chatter first time chatter that's the
first thing zor's ever offered to the
show wow good job zorp it's early up
from here isn't it hard to go much lower
uh trevoc says infinite spawn closets
break immersion that they do trevoc uh
and and our spawn closets don't spawn
iminent there there there are timers
that break that kind of thing up and
stuff and then per permission there's a
certain number of resources so that you
know you can effectively clear it and
stuff okay so we're getting somewhere
with this so we have things on as you've
noticed I've got the layer outliner open
so we have things on different layers
and that just means that multiple people
can work on the same you know
location um at one time which is really
handy so you're not overwriting each
other's work um and yes that does happen
from time to time and there's not a lot
we can do about it apart from telling
people to make sure that they get latest
layers and if they're not sure please
ask uh Crown 8 says this is Jared's
birds and the bees talk oh no you have
haven't heard my bird and the bees talk
it's it's pretty
serious game play and this is the other
fun thing we've got to do I'm find out
where these things live and the best
thing to do is just ah there you go turn
things off and on until you find
them let's just remove all this for the
moment
cool so now we have a huge gaping hole
and oh don't forget the lights so all
the lights are still there so we just
need to get rid of
them and I think I'm just going to blow
these away because we only have an hour
so she has got done saying he you don't
like to delete anything I know I know
but in this case lighting would have to
come back in and change it to or adapt
what they had to what we have or what we
are going to put in here so it's a bit
of column A a bit of column B at the end
of this we should just send the
monstrosity to Chris Campbell and be
like can you light this please yeah
waste an hour of his
life maybe a bit longer than an hour um
Okay so we've made well until he figured
out that this wasn't yeah yeah so we'
made a hole and that's great uh let's
turn some layers off so we
don't change them going forwards give
that a save it's only Carl asks does the
editor allow multi- select merging so
you can at least temporarily merge the
building and walkways into a single
entity for the purpose of movement
copying and placement yes it does yes it
does so what we can do is we can grab
this and save this thing and then we can
put them into a group call it whatever
and then we have this and you can move
the whole thing around uh so yeah we
will group things a lot yeah which is
very very handy I I would be surprised
and and I'm going to say this and
somebody's going to point out a software
that doesn't do it but I would be
surprised in any layer based software
that doesn't allow the ability to group
because these collection these any
subsequent work of significant depth and
time is going to get really crazy with
the layers and you've got to be able to
group layers yes yep yep yep I
surely that's just standard yeah
although again there's going to be some
software out there that doesn't and and
somebody's going to point it out in chat
in a few
minutes cool so you could go for
something like that that's changing it
quite significantly we now have you know
a point of interest on the horizon as
you comeing in you know it's quite tall
at the moment it's
yellow um so so something like that
could work and you know in terms of the
actual layout of the space sort of fits
we still have this sunken area maybe we
could tart it up a little
bit she just leaving lights floating
everywhere man yeah we'll deal with that
in a moment uh but I'm just reusing
parts that you know if we look over
here uh these are from the DCS um and so
it's kind of like well what what can I
reuse from other places I've also got
where is it uh so mapper asks does your
job also imply 3D modeling or is it only
using assets made by other teams or
build levels
uh interestingly this is not John's job
John's job is the 3D modeling is the 3D
modeling and the overseeing of the teams
who make the 3D modeling uh the
arrangement of these things is usually
done by a level designer um I wanted a
level designer and they weren't
interested so I had to sell for
John so I would say yes and no to to
that I would say oh did that oh
it
no um I would say the yes level design
they do the white box and then we follow
that as best we can obviously some
assets are bigger or smaller than you
originally think they're going to be and
so what can we do to massage them into
place um there we go I think that the
misnomer is
that it's you only do this or they only
do that in in in we make hybrid gameplay
teams where it's people of multiple
disciplines and the more each person
understands of the other disciplines
even if it's not technically your job
the more you understand of their
discipline the the the the easier the
Shand becomes the easier it is to
communicate the easier they can say oh
like that thing at there and goes yes I
I I understood why you did that so I can
replicate that here and stuff like this
so which is why John can do uh a show
like this for us uh when yes in all
likelihood it would be probably be more
appropriate for a level designer to be
here but I I I hadn't done a show with
John in a while forget the the joke I
had before the truth is I haven't done a
show with John in a while and I missed
him and I've been asking him to do this
for about six weeks yeah so the I don't
do uh 3D
modeling really as part of my day job
yeah I'm that's leave that to the
professionals um which you used to be
which I used to be became a lead yeah
and now
I I do the jobs that no one wants to
do no I I enjoy enjoy doing that work
no we we're joking about it here but
there is a very real thing in game
development it's not just game
development it's in any corporate
environment where you know as you're
working your way up eventually there's a
point where you become leadership you
become management and you get to do less
and less of the day-to-day stuff that
got you into the business got you into
the industry and it's always a it's
always a struggle we've had several
we've had several people who have been
promoted to lead and then they have to
do responsibility they have to do uh you
know HR stuff and reviews and management
and stuff and they're like well I was a
very good artist or I was a very good
programmer I was a very good but I'm not
a very good
supervisor and so they usually then move
out of the lead into a position that we
refer to a lot of times as principal uh
principal is is that's somebody that's
kind of at the at the height of the of
of the of the Workhorse uh field and
they they they get to work kind of on
their own a lot of times in silos
building stuff uh a great example of a
principal that you might be familiar
with is zann uh from the UI team uh he's
got so much experience and so much
talent and skill that you know he can
kind of he we can set him off on a thing
and he can he can build something like
building blocks for us while other Le
while other leads you know lead the team
and stuff like this um I'm probably
a I'm probably a an an exception to that
I I I try to delegate stuff I I I've
done much better the last year and a
half delegating stuff to to David say hi
David
I don't know if you could hear that I've
done much better uh uh in the last 18
months delegating stuff to David and the
result has
been isc's gotten a whole lot
better um uh you know I pulled myself
out of a lot a lot of those
responsibilities um so like that but
it's not an easy thing for for a lot of
for for a lot of people I'm just talking
this isn't a game to have convers this
is any management conversation some some
people are good leads and some people
are meant to be principles when they
reach the their certain level I'm
probably closer to a principal to be
honest cuz I like doing the work but I
am where I am CU it's where I need to be
you're generally a pretty good
lead oh that's so kind when I when I
talk when I talk to your guys and I talk
to I talk to Ian and stuff you're you're
you're a pretty good lead I not not the
best I try to do good good by the people
I work
with um do you miss getting to spend a
lot of time model cuz really uh not I
mean I
think uh not really I think I am quite
happy to let people you know I quite
like the high level the how do things
come together to become this Loc the
decision making the where's this going
to go how many do we want who's involved
what kind of resource do we have how are
we splitting up the work um I really
enjoy that aspect of it and you don't
really get to do that when you're a
midlevel doing the modeling so in a way
I kind of had to work up that and then
come here I've I've been the lead in
other places but here I feel like
I'm near the top of my game in being the
best you know lead I can be for the
people that I'm working with I was just
start the best being the best and just
St diplomatic you called yourself the
best very diplomatic the best I can be
diplomatically I'm the best um so this
is this is kind of annoying cuz it's
like this mesh here has got these um
what you call it like holders on it so
ideally we'd want something to go
between them but I don't really have a
thing um but I'm just going to I'm just
going to free wheel I'm just going to
leave it there might be something we
could use there might be something we
could
use if we go down here where's that
pipe is it in this layer yes it
is um but I mean having said that I do
get my hands dirty I don't do 3D
modeling in so much anymore but I do do
um this kind of stuff where we're
creating something new from something
what something that we already have
um uh we we got a message from Callum
dainty oh yeah he said he says tell JN
to turn the number to a three the number
to no
we've
I no uh
I so when we were working on the DCS
there is story behind this Concepts and
originally it started in concept art
they kept putting z3s on everything you
know bit of scale a bit of a number
somewhere um you know that's great I
think it gives a bit more kind of
reality to things um but the problem you
then encounter when you're actually in
development is that every artist then
puts a 03 on what they're doing so you
go to a place and all you can bloom and
see is z
F name is and everyone everyone thinks
they're being
original they're
not so yes so that's why I opted for
well in my first one 04 that's actually
my favorite number not zero four four um
why is four years I think it's just a
nice
even I don't know one
cable something about it it's like that
oh
love
it what are we doing again uh you're
watching our favorite numbers only on
twitch.tv/ starcitizen my favorite
number is 86 is what sorry 86
86 and why is that uh because I I grew
up loving a uh an old show on television
called get smart and it had it was a it
was a secret agent comedy show and
Maxwell Smart was agent
86 and he was about as competent as I
felt I was okay F which is not very much
growing up so I really
related seeing if there's anything else
we can just pinch fuzzy Eagle first time
chatter says what causes the invisible
walls that you can't shoot through in
assets oh so that would be some sort of
uh it could be down to a material or it
could be the it's a mesh that's set to
transparent and then therefore you can't
shoot through it we try not to use
invisible collision and it will I think
on some you know GR in it's kind of
like
you I think it's we try so on this for
example if the AI is below you they
can't shoot you and you can't shoot it
them because the holes are too small but
in say a chain link fence that's when
you might be able to have things pass
through because that's more likely to
have bullets you know passing through it
so
it's it's kind of finding the line
of do we want the people to fight each
other through this or is it just too
much of a bad gameplay experience so
therefore we make it so that you cannot
okay uh I don't know if you'll ask
answer this uh but do we have a status
on the arastra uh the status of every
ship is the always the same check the
public road map public road map is where
you're going to learn uh the of the
eminent uh release of any ships or
vehicles I believe in just this week's
road map update that the Zeus uh two of
the Zeus's were added to the road map
for Alpha 4.0 uh beyond that there won't
be any updates
okay so we could build something out
this as
well what time we uh Morgan Maleficent
says that is actually a Skyfire the
Transformers version of The Valkyrie
toys so we have star screen now yeah
this is this is
okay you're talking about this guy let's
go go to my
camera so this uh uh this was the best
Transformer ever uh it was it was stolen
from the from the macros line uh and
then there was a lot of whatevers and
they couldn't do it anymore this is this
is the original Skyfire Jetfire um now
this you can't make they can't really
make toys of it anymore this is actually
a Macross veritech that is painted in
the Skyfire Jetfire colors uh cuz
they're like we won't let you make it
anymore but we can make it which is why
you see the the Macross logo at the
bottom so when I saw saw Macross
veritech in the colors of my favorite
Jetfire I had to get it so that's what
that
is okay so
[Music]
let's now I want sideways operating
bases
so LOL
[Laughter]
okay you know this is for for a Fat's
job this is uh not too bad you know take
got time we got some silhouette breakup
from a distance which is
nice and then when you get into
it this is not my finest work but you
know you you've still got this
downstairs area um you could potentially
you know ledge glb over that and up
there this is a bit of a death trap
though so maybe I bring the stairs back
in and have them there which are
here uh now we just need to find the
layer which is this
one yes as others have pointed out uh if
you do have a question uh for uh John
and myself uh preface your question with
the word question in capital letters uh
it helps me pull it out from the rest of
the
chat I I will remind folks that John is
an artist and I'm uh dummy who makes
videos
so keep your questions appropriate I
guess for
our uh work experiences yes yeah
so that's a bit better now I think KH
would even though he probably hate this
design he would at least be like there's
a way out cuz that's what we don't want
to do as well you know we don't want to
send people to dead ends essentially
because then that's no fun for for the
people
playing uh so let's get a longer let's
call and see
if down here what we do it for me
is just call
Con does he even pick up I don't know
we're going to find
out I'd be I mean it is Friday at 5:30
there
[Music]
so and usually when a cig developer gets
a call from me it's they think they
think it's like the Grim Reaper like
he's asking be in a video he's asking me
to be in a video and like that so I
could see why he would not want to
answer all right so Khan's not going to
answer okay I'm going to that's
obviously not aligned I'm just going to
ignore that we don't need to worry about
that right now uh these pipes are wait
till QA J is it up yeah yeah uh
pipes
pipes yeah just a whole bunch of people
who suffer through teams just got
triggered
apologies uh for you folks who have
teams at work um are how are you dealing
with the new custom emojis did your work
enable them are you being absolutely
tormented by uh your QA with a bevy of
custom
[Music]
emojis
okay so
one of my pet hates
and I'm probably going to do do my own
pet hate now and not fix it correctly
but I don't like it when things don't
terminate correctly mhm so pipes and
they just kind of go to nothing and you
know when they just go into the wall and
you're like just cover it up surely just
takes 3 seconds uh here here here's a
question when are we going to see more
roads linking bases and garages and
stuff wellow more roads like like the my
favorite thing about the distribution
centers was was the very first any kind
of implementation of roads I mean yeah
it was within them and stuff like this
but it was just
like so that was interesting doing that
siton uh so not only did we make the you
know biggest sandbox locations got in
the game you know no cares about that
the roads thing roads
um yeah don't know I'm going to say it
to that one cuz I I actually don't know
um it wasn't a question for John he yeah
I set him
up roads people love
roads and in some locations we do have
roads yeah but you can't use
them they haven't been released
yet what are you talking about things on
fire the what things on fire
things on pyro what things like
locations on pyro have roads like what
location like the training post uh yeah
the outposts yeah some the train post
have roads some of them have roads going
through them oh oh that's right those
are like tracks they're dirt roads but
they're very clearly roads thorough
fares roads I get what you're saying
they're not exactly like gravel no no
they're all t oh yeah yeah you know no I
get I get what you're saying they're not
these yeah they're thorough faires
they're areas that are specifically it's
very you can you can tell immediately
the intention is to drive a vehicle
through
there
yeah but but the broader Roads Lincoln
places hard maybe we would love we would
love to but more concerns Yeah question
I I don't I don't know if if pyro is the
right uh the right system for a series
of complex interconnected highways and
stuff that's not really the vibe of of
of of of
pyro
but Jared did you watch the atmo graycat
social race that took place in the dist
uh not all of it I I caught I uh I was I
was I was tripping through twitch the
other day and I caught about 15 minutes
of it uh you know I follow ATM so
whenever uh whenever they pop whenever I
open Twitch I see them on my fellow
channels and whatever I always I always
check them out because um what they do
is always what they do without any kind
of internal tools and and and stuff is
is incredibly impressive it is it is the
work of incredibly dedicated incredibly
dedicated and uh uh uh uh trying there's
what's a word that means full of a lot
of
effort what's what's that word Ju Just
just people who who who don't get scared
by the amount of work that's involved uh
they have that in Spades whatever that
word is that I can't think
of no I don't Brave is is is is
overcoming fear and stuff like that it's
not that's but no yes I did get to watch
a little bit not as much as I ever like
to uh as always it was very cool and but
yeah they um you know after we did that
whole you know you're you're not going
to be able to get vehicles inside the
distribution centers yeah they were like
what up was basically a setup wasn't
it I I only ask the question when a
developer says the answer like that's
like you want to go on record I said is
you want to go on record saying you
can't get vehicles in there and they're
like yeah
Sam okay so fortitude's a good word
fortitude is a good word that was
probably the word I was looking for
uh Health CES health healthy CES like
her Hercules but with health I don't
know says when creating levels how does
how much does the narrative play into
the design of the
level I think it depends on the
location um I
think
we we think about who's going to occupy
the space and then how is it going to be
branded because of who's going to be
occupying it um I think in sikon there
was Adam did a presentation on Rough and
Ready we taken over the Pyro space
stations so in a way all The Branding
was done to represent you know Ruff and
Ready's their look so there's definitely
a which gang will be in here or who will
be in here and then the you know the
Brandon to reflect that Bey beyond
beyond just The Branding and stuff The
Narrative stuff um in
about three weeks uh no yeah in about
three weeks on ISC um you'll see uh
we're going to introduce you to a whole
bunch of the uh uh of the Planet Side
locations that you're going to uh
encounter in the Pyro system and uh
you'll see immediately that the uh that
the the Farms the scrapyards the the the
the training posts that are operated by
uh the citizens of prosperity
uh are pretty differently dressed than
the same same type of locations that are
owned by the head hunters gang for
instance uh one clearly uh is more
interested in putting forward a a good
first impression to people or the best
first impression that a harsh place like
pyro will allow them and the others are
just like nah nah we're not interested
at all and then uh and then two weeks
after that for five weeks after that
when we get to you see you start seeing
uh uh the Xeno threat locations the
places where they live uh and stuff um
they're just like like they're
definitely built to be a little more
intimidating I feel like that it it's
like they want just the sight of their
place to
be fearful it's like that so so yeah so
uh the answer uh to that question is yes
uh certain narrative elements do come
into play again it take it depends on it
depends on what's available there's not
always a narrative element available but
when it is available yeah
how long did he say to that ISC
uh it was it was it's it's it's three
weeks until
until the surf the first surface side
episode and then it's five weeks until
the second uh surface side epis soe
we're trying to you know space them out
but we're in our we're in our Alpha 4.0
phase last yesterday's show on uh 324
was the last our last show on 324 uh for
whenever it goes out uh there was there
were a lot of questions uh we saw a lot
of concerns and stuff about about the
hangers and the and the inventory system
and the Freight System we want we wanted
to revisit that topic one more time uh I
know I saw I
saw I saw more than one uh react uh was
just like oh my God talking about cargo
again and I'm like it got it got
14,000 hours of watch time in less than
the first 24 hours CU we it only hit 24
hour when we started the show so it had
14,000 hours of watch time before so so
yeah so I mean obviously some people had
questions and wanted to know about it so
but yeah things like the the search
system and the and the removal of the
Armistice zones for the hangers and
stuff like that so some important
information to get out there
so
so okay how about Apollo's question
suggestion I didn't see Apollo's
question suggestion sorry it must have
scrolled up
while I was talking about other stuff
question is ISC now fully dedicated 4.0
ISC is never fully dedicated to anything
uh we're going to take a break uh uh
there's there's an episode around this
the the top 16 or the top eight of ship
Showdown uh where where we we take a
week and we're gonna uh we're going to
talk to gav rothery uh concept artist
extraordinaire who's made who's designed
more uh who's visually designed more
vehicles for Star Citizen than any
others we're we're going to take a
little break that week and and and and
talk to him uh but yeah for the most
part for the most part yeah the the next
1 2 3 four 5 six seven episodes Eight
Episodes are all dedicated to 4.0
content so with that one little break in
between to support the ship
Showdown okay hopefully this doesn't
crash there we go so I looked I looked
away I looked back and there was a donut
so hopefully K would be proud of this
but now let's think about this as a
gameplay space so we've got the you know
what I'm coming in I'm seeing from a
distance um but how is it going to play
so we've already got the stairs in so
that's good it's more of a through route
through here but also we thought about
if you could clamber up and out here so
there's of three points of Entry but
then also it's the well still quite an
open space and actually they would
probably say you need something in the
middle level design but at least now if
you're coming into it you can duck down
behind cover you can still shoot out you
know you're not really protected from
there I guess but then you could run
over
here um likewise I mean if you're coming
in from here you're basically screwed
but we could put something like um a
fence panel here so that you could at
least duck out from it which might help
um you could also what does this look
like um well this is is currently empty
so I should probably delete these bits
but if you were say jump the railing
here run run run down and then get down
here you're you've just still got some
protection from over here and then
likewise I mean you're basically screwed
I thought I mean they probably wouldn't
allow this gap which is fair
because
ideally the AI would use the same cover
that you use and they would probably get
stuck there so we'd probably move that
um but interesting consideration I'm
glad we're talking about it it's like
not everything can go everywhere yeah
sometimes you know certain mechanics
both gameplay and technological require
the placement of certain things in
certain places definitely and I think as
well it's kind of what we were saying
before is that we all have our roles but
we have to be aware of other people's
roles as well and so there is a case of
you know that looks like a problem area
so instead of waiting for somebody to
call that out why don't I just make some
changes now and then take it from there
um oh paollo has reposted this question
uh would you ever consider releasing
tools to allow players to design a
location like an outpost space bace or
other locations to be submitted to the
team that could possibly be used in the
verse if it were good enough um I'm
going to do you one better Apollo meet
me at camera
one uh you should check out the uh one
of the last presentations at last year
citizen con where uh we we introduced
the upcoming player Base building uh
stuff there's a whole there's a whole
not the whole presentation there's a big
chunk of that presentation dedicated to
uh the start of letting players add
permanent locations to the verse uh so I
don't think we would do it in a thing
where we would create a thing and let
you submit to us and we would put it in
uh we're just going to give you the
tools to start building places of your
own and you should check out last year
citizen G I'm not telling you anything
new no no nobody's there's no leak or
information here I'm telling you
something that came out in October last
year check it out that's how we do it
that's how we're going to do
it we just do this so what I'm doing now
no doesn't want to do it fine be like
that
go this
way they're asking one questions like
like like like I'd answer a one question
I answer one question then Chris Roberts
would come busting through like the
Kool-Aid
Man actually that's not true Chris
Roberts would probably tell you
when there we go but no when it's ready
the answer to all when questions are
when it's ready anything else
is
unfair it's like it's like it's
like it's like last week last week we
had the 500th episode of
ISC and I said in the outro hosting that
we were targeting 4.0 for something
earlier than the end of the year we are
we want we are all working towards a
release that
is that is sooner than the last week of
December which is which is I think what
a lot of people are saying now is that
the same as me saying it's going to be
no it's not I don't know when it's going
to be the answer to when it's going to
come out is always the same when we
think it's ready but it's there's this
thing that happens
where people ask us people ask us when
people ask us when and then we we share
we're we're we're targeting we're
attempting we're we're all working
towards getting it out at this time and
then it doesn't happen at that time and
there are invariably somebody that's
like oh oh cig promised I'm like that's
that's not the definition of a promise
we told you what we were trying to do
and that's us being honest and that's
that's what we're honestly trying to do
uh sometimes we I mean we just don't
make it because that's how game
development is but it's so we do try to
be responsible with how many times and
how many places we share that
information because if you just keep
saying this we're trying for this this
we're trying for this we're this we're
trying for this this and then they don't
happen they keep happening and stuff
like this it's like
there's plenty of people there are
plenty of people who preferred that I
didn't say anything at all yeah and
because they they they get their hopes
up and then it doesn't make it so it's a
catch 22 it's if we never say what we're
trying to do then people say you're not
sharing anything you're not you're not
telling us what you're trying to do
you're not telling us what's going on
and then if I tell you what we're trying
to do and then we don't make it then
people go I wish he hadn't told us and
it's
like I'm on I'm on this I'm not I'm on
year 10 of this so I'm not super phased
by it anymore but it's I I I will I mean
I'm pretty responsible with it at the
end of last year I said you know I gave
a list of things we were targeting for
the first six months and those things
all came out in the first six months and
when I came back the first show of this
year I said the first six months of the
year again and there were those things
were out in the first six months so I I
am I try to be pretty responsible with
my estimates uh
but yeah it's we are targeting we are
trying everybody everybody everybody
here is working very hard to get 4.0 out
sooner rather than later uh the the work
for 324 does not block the work for 4.0
they're in different streams and whatnot
so we're trying real hard to get it out
we want it out I
mean just going to be real how badly do
you want 4.0 out oh really yeah I can't
wait it's going to be great it's like
it's like I I I I I comment I comment on
the show a lot that we have all the same
conversations the backers do we have all
the same feelings the backers do we just
have them 12 weeks earlier yeah uh we
all Des we we all want this stuff out
because we want to move to the next
thing and the next thing and the next
thing and the next thing so yeah what I
said last week still holds true we are
targeting a release earlier than the end
of this year and we're all working very
hard to make that
happen so
okay so in that interlude I did another
thing that we can do as well which is
use the tint system um so this means
that we keep all the same geometry and
stuff uh but we have loads of primary
secondary tertiary colors in in this
format and you change the colors to
whatever you want and then you apply
them but if you're not happy with that
kind of color Arrangement you can then
say I want to Swizzle it so then I'm
going to go Swizzle is that techn so
secondary secondary primary or you could
have you know whichever combination of
these three numbers you Swizzle it and
you apply it and it changes it so again
that's a really quick way of saying okay
this one's um Head Hunters this one's uh
Rough and Ready this one is micro this
one is um hen Dynamics um so I've
changed it to I wanted an orange if I'm
being perfectly honest cuz I think it
would look cool and it work quite well
with the yellow and the gray that we
already have but I couldn't find one um
so I've gone with the covalx red cuz I I
knew where that was and also it means
that you know again we're looking for a
red object on the horizon something that
stands out um isn't that great so now
we're just going to tidy things up a bit
cuz I made a bit of a mess um and then
we're going to get this exported and
send over to
Planet if I can remember what the
controls are uh so now we're deleting
everything that I didn't need because I
didn't need it or if I had more time
potentially I would do a slightly better
job uh Hassam Maus has a good question
how come cig don't take a little time to
update the design documents and let us
know if anything is conceptually changed
um well that's what we did last week
with intro to jump points we we
literally just went over the entire
design from start to finish of the
current design after years of saying it
might be this or it might be this and
stuff like this uh why we why we're not
constantly going back and updating the
old stuff we work on the
stuff
that goes out soon we work we work on
the stuff that's right in front of us
it's it's in order to get 324 out in
order to get 4.0 out in order to get 4.1
one after that and what those those are
where our focuses are those are where
our focuses are because they have to be
that those those are our immediate tasks
they take up all the brain space they
take up all the effort we work on that
stuff too much think if you remember the
folks who the folks who were here
watching uh the old days of wingman's
hanger and Stu like that you know
wingman's hanger was a great show but if
we're being completely honest a lot of
things were said in that show that don't
apply to Star Citizen today the problem
with projecting out to far is that
people change ideas change technology
changes you discover you can do
something new that you couldn't do when
you had that original design and so then
your design changes you discover that
you can't do something that you
originally wanted to do and so your
design changes uh new people come in
with brand new ideas you know no nobody
wants to H when you hire into a game
Studio or any game Studio rather uh and
you you're full of ideas you're full of
experiences you're full of knowledge and
you don't want to come into this
environment like oh well every decision
has been made every decision was made in
2013 and there's nothing for you to
contribute there's nothing for you to
add to the project you're like oh well
why am I going to be here I'm just going
to go somewhere else so every new person
who joins the project has not every new
people a lot of new people who join the
project have new ideas uh new thoughts
and stuff like this so we like to
synthesize all that information and use
it uh one of my favorite things about
about CAG and I've said this before is
that we're never afraid of the better
idea it's it's when the better idea
comes along it's the only thing that
matters is is it do we believe it to be
a better idea if we believe it to be a
better idea we go with that sometimes
it's not sometimes we try a thing and
it's not the better idea it's like we
all thought it was the better idea yeah
now we know it's not let's look for
another better idea uh you know that's
game development not game construction
but that's the reason why not there's
not a whole lot of time and you'll find
this at I I don't want to speak for
every single game studio in the world
but you'll find this at quite a lot um I
mean I've been in this industry since we
launched World of Warcraft at blizzard
back in 2004 uh you'll find this in a
lot of places that you tend to spend
your energy on the things that are right
in front of you this release next
release and the release after that
because there's too much that can change
in my world in your world and our world
in the techn technological world uh that
means that whatever plan you make for 3
years from now is likely not going to be
in place 3 years from now uh because
there's just too many other variables
that change it so it's that's the that's
the I was going to say short answer it's
short for me I'm not I'm I'm not a very
tur
person I tend to talk but that's the
that that's the Jared answer for why
there's not a lot of time spent
constantly updating old design docks of
stuff that we don't we're not going to
be working on in the next 3 to 6 to 9
months so that's when it comes time to
work on those things then we revisit the
design docs and we make the decisions
and the updates with the people that we
have with the technology that we have
with the process that we have and we
find that that's a much more effective
Manner and it reduces a whole lot of
wasted time and it reduces a whole lot
of wasted um and unfortunate
heartbreak uh because we haven't filled
your heads with a bunch of stuff that
we're not certain we can do which is
what we used to do way back in the day
uh we're just more responsible with it
now is the short
answer what are you doing now so what
we're doing now is we're just creating a
quick
layout of our new with our new uh
overlay so it's one thing having the
overlay you know we've changed the
silhouette of the place we've got some
new gameplay uh area in there but what
else can we do to kind of make this more
of an established place so you'll see
that we've already got a couple of these
already um those were the Trade
Federation ships from Attack of the
Clones left there you go no no they're
not okay never
mind um yeah so again so on the
landscape you're coming in on your ship
you've got to read on the location and
then as you get closer you're like yes I
remember this one it's the one with the
two red columns um that's great so what
we're doing now is is we're just using
again assets that we already have so
these derel um kind of
containers and we've got these Ingress
points um around the um the
location but if you just go on head on
um with no cover at all you're just
going to get murdered so it's kind of
like what can we give the player to give
them an advantage over the you know the
occupant of this space um so these
things will be you know act as cover but
also you can get on top of them so you
can get have more of a kind of like a
higher look over the um the location and
then we also place them in areas of
natural uh elevation as well so that you
can be on a hill looking in going okay
well I need I know I need to go here
maybe I can get in through here work
around and go through there so okay so
now I'm going to trundle down okay how's
it looking now um can I see any guard
pass or this fence is blocking the way
so maybe I can go over here I can climb
up onto these
boxes okay the guards are not there okay
now I'm going to go in and then you're
in you're in in it but you're you know
what you're getting into as opposed to
I'm just going to land and see how it
turns out so just a little bit of
population um so let's just grab all
this this is the this is the nickel
version of of of level design uh any any
accomplished uh long-term FPS player we
we'll tell you how important FPS design
is it's the the the length of a corridor
the amount of turns the the the the
number of dead ends and the number of
kill boxes and stuff that there's a
reason why you know the newest versions
of popular games like Halo and Call of
Duty and stuff are are still revisiting
maps from 2002 from 2004 and stuff
because when you get a good map when you
you get that map uh my favorite was
always uh Wake Island in uh in uh battle
the original Battlefield 1942 I love
whenever Wake Island came up I was just
like that's the one that was made for me
usually because I just put a satchel
charge on the bottom of the the zero and
just hid in the bush and waited for
somebody like oh the plane's there and
they got in they're like I'm so happy I
got to get get a plane get a plane and
then I'd let them start taking off i'
let they're going let them taxy and
right as they get like a foot off the
ground I'd blow up the Satchel charge
and take it away from them oh hello
export failed I wonder why that is um oh
really didn't want this to happen but
you're going to actually watch me try
and solve an error um if I can get the
window open oh no
um well that about desert for this
week's yeah yeah yeah last
hurdle um oh elamine was so good oh wait
it's down
here there it is oh it it popped up pop
screen so needs to have a pivot that
would help maybe it doesn't have no that
doesn't make sense though cuz it would
already have one surely it doesn't it's
oh all right it does I know I know the
error and we are just going to fix that
by moving this to the
route oh come on
eyes save export
it's not not my first rad yet no it's
not it's not it's
not that's why he gets paid the big buck
says zeer talk zeer zeer so what is the
Pivot Point um it's essentially so we
export things with called inside of
object containers which is essentially a
a group um that other things can then
interpret um so essentially the point is
where so you have a pivot on a mesh it's
the same principle so it's where you're
going to rotate on well transform from
jator says JN doesn't care for Jared's
stories and he's just British
I I mean if you I can't even remember
what you're talking about now actually
yes I will tonight 5 hours from now but
um it's more
I the the in in a polite way no no no
you know Z doing my work no there's
there there's a very real thing uh
streamers professional streamers who can
play the game and talk and be personable
at the same time that is an incredible
skill that is an incredible skill that
is usually built over lots of times lot
people watch streamers they think it's
this easy thing it is not it's it's not
actually a skill I particularly have
when I the few times I stream if I'm
when I talk I'm crap at the game and
when I'm good at the game I'm not saying
any word like I can't do both whatever
most people are not professional
streamers so what happens a lot of times
when we do these shows oh switch to the
cool a lot of times when we have these
shows we usually have me and somebody
else here because it lets the person
who's at the machine focus on their work
and doing their work and then we provide
the peanut gallery commentary uh we
didn't uh we didn't want to take another
person away from their work today so
it's just John and I so that left more
of the peanut gallery stuff on me so I I
I I would venture to say and John you're
welcome to tell me if you're wrong that
you were grateful for my stories because
they gave you a chance to focus on your
work yes I am yeah okay you can tell me
if it's not you can tell me you stories
I I know I mean I'm I'm look look at the
camera and tell jator he's wrong what
look at the camera and tell jator he's
wrong jinat you're wrong there you
go didn't want to screw your name up
live that's why it took so long for me
to say uh okay so let's do some location
scouting uh so this is dayar um sou this
is nice because it gives us natural
elevation it's just we can't put it on a
you know a cliff side um so that's where
one exists already so we don't want to
be too close to
that bit flat bit
flat uh you know what you know when you
think I'll put it here and you're like
no I can't put it in the first place I I
find and then here we are just going
over the same terrain going
I really wish I'd stuck to that first
one it's almost like I wish you could
put like little Flags down I'm I'm going
to keep looking but I want to put a flag
here
okay maybe it's all right in the middle
got nice half a valley going
here this doesn't look great though with
all these things in but I don't think
being very hard I am I am and I don't
think I can do anything about put the
damn sor let's just let's just do that
let's get this thing done um this is why
nothing comes out on
time you're the problem it's me you're
the
problem uh
cool oh God now I'm in my own head and
I'm like oh what about this place what
about this
place because it's also the footprint as
well what the goddamn be John okay we
we'll do it here we'll do it 2 minutes
past time yes you're right right so we
need a new l
and it's called new layer and we should
put it in the right place but we're not
going to and then we're going to use our
old tool because we've got another one
in development and we're going to
quickly hopefully it doesn't
crash hello okay it was doing it right
so let's just go beep it doesn't make
that noise that's just me doing it on
top when you've done this a thousand
times you got to keep it
interesting uh right here we go I never
make my own mouth noises for videos oh
oh and then we
click and hey
Presto and that's the rasar system
that's how we do it so I did put some
terrain modifiers in um and you can tell
that they're having little to no effect
but um I mean it doesn't look too bad if
it's meant to be abandoned
because that's uh that's like that
that's a thing and likewise on the other
side go back you show people what you
did but we can still adjust it
by wa where's where's the transform so
we do it like this and we just bump this
up a little
bit maybe me move it over here a little
bit yeah this was such a bad place to
put it right so let's go the other
side no other game studio in the world
would show you this part of the and go
down and you know this is a rush job on
my part so we're going to have some
issues for
sure but
actually this is looking a bit better so
all right so yes this could be a bit
tier but that's fine and this could be a
slightly tier but that's fine it could
be that we just need to move it up by a
meter um
but you know not too bad we extended the
bases already so that's fine and we have
some of that abandoned look and we have
the natural elevation I was talking
about so hello happy accident um no no
no you did that absolutely intentionally
and then you that was those those uh
parameters you put in in a way you can
can we force those probably not um we
still see the the towers from a distance
the color of
them you know there's plenty of yeah you
could put your ship down actually you
know bit bumpy but out here safe
protected make your way in and then
you've
got you know the containers still you
can make your
approach yes it's going to be harder
from this side but you would just surely
you would just go well it's a bit Barren
over here so I'll go around and then
it's kind of like well does it still
look good when it's you know the sun's
back here oh look at that let's turn the
uh the old pth helper off we're seeing
the L things right yes yeah we turn the
L stuff on uh I tried
it I might be able to do it in conso
console
where were you let's do this off camera
because I don't know it completely off
by this one it's it's l called debug I
think yeah yeah yeah see
deug there we go there you
go yeah hold on was good got to be
careful not to safely reveal I know how
this all this works that looks great
cool
and if if the sun's on the other
side maybe go back a
step yeah that that that will look good
for about an hour's work it's it's good
enough
foral where nothing good ever happens
never nothing good is ever created
that's not true that's uh we have
moments all right that's it we got to
wrap up lovely yeah wrap a screenshot
all
right do you want me to wrap this up
please uh thank you for watching see you
next time no too fast it's the Panic
being on the
spot don't you just love doing these
with me I do actually why why I fought
for this for for so long thank you for
watching everybody this has been stari
LIVE Game Dev making fobs I was Jared
Huckaby that John Griffith's uh this is
a production of cig Cloud prium games um
no uh uh no reasonable information was
discerned at any time uh be sure to tip
your waitress tell jator he's wrong
every time you can uh be sure you tune
in uh if you haven't check out this
week's episode on hangers and Freight in
Alpha 324 answers a bunch of questions
about the uh uh the new personal prision
hangers and stuff that are coming along
side also how loading manual loading and
automatic loading works the function uh
coming to all the kiosks and stuff like
that and the removal of armistice zones
well I guess you don't have to watch it
cuz I just told you
everything tune in next week uh tune in
next week where uh we're back to our
Alpha 4.0 stories with a look at pyro uh
uh uh space based activities uh uh once
you go through the jump Point uh some of
the cool things uh you get to do when
you're in space uh including uh remember
uh if you watch the the the the the
public road map uh this week we revealed
asteroid bases and contested zones
you're going to learn all about them uh
next week's show so be be sure to check
that out uh contested zones uh um I'm
not usually the hype guy but contested
zones for my money are probably the most
exciting aspect of 4.0 uh for me it's a
whole new kind of gameplay experience so
so be sure to check that out uh then the
next week after that is is fire uh we
haven't talked about fire for a while
we're going to we're going to go back
and talk about fire which is also coming
it's finally making its way to the
persist Universe in 4.0 uh I don't know
if that's on the public road map or not
but we're talking about that uh and then
we go and we go back to pyro down
service side uh with an episode entirely
dedicated to the social experience uh
you might say social experience in pyro
I'm like yes there are things to do in
pyro besides fight uh yes it's I know a
lot of people are thinking it's just
going to be this giant meat grinder of
stuff but there's actually a whole lot
of content being built uh for the not
Fighter for the lovers like John
Griffith's uh and then uh after that we
take our break for ship Showdown with
with with our Gavin Ro special and then
we're back uh back to pyro with an
episode entirely dedicated to fighting
because I mean there's a lot of fighting
and a lot of cool new uh uh stuff to to
fight with in that episode so so check
that out and then after that we're just
it's it's it's it's engineering and life
support and and and another Creature
Feature and stuff and it's just lots of
cool stuff the zoos and mfds we got a
lot of episodes as we uh between now and
citizen gone so uh uh I don't know why I
felt the need to tell you all that stuff
just now but I
did hope you're watching it
down I really do keep most of the stuff
in my head um thanks for watching uh uh
uh take care uh if if if if if I made a
joke and poor taste don't take it too
seriously we we like to have fun here
and remember remember that video games
are fun and making video games are fun
and this whole process is supposed to be
fun so if you find yourself skewering to
the side of angst and distress and stuff
like this it's okay to take a break it's
okay to take a break and find the fun
again uh this is important to remember
it's always supposed to be fun so thanks
for watching see you next week everybody
bye e

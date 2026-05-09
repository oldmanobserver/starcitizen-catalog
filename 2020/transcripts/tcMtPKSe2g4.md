# Star Citizen: Pillar Talk - Alpha 3.9

**Video:** https://www.youtube.com/watch?v=tcMtPKSe2g4
**Date:** 2020-04-06
**Duration:** 28:06

## Transcript

[Music]
gentlemen welcome back to pillar talk
[Music]
[Laughter]
that's it
[Laughter]
so pillar talk just a real quick recap
for what you know reminding people what
these are so during the week we
generally do inside star citizen star
citizen live those shows are a little
bit more about the what and the how
whereas this show supposed to be about
the why generally before or during a
release of a couple of a patch for star
citizen so we have 39 that's the one
that we're all talking about that's hot
on the lips these days so we've got a
lot of content as you guys probably know
nothing new that new missions new
babbage's three moons are come in
prisons actor status system is fear of
prowler and then 50 updates volatile
cargo and so much more
however those features are more we'll
get there
so obviously many of those features have
been talked about a lot lately and some
of our shows so we kind of want to talk
about other features 3:9 features and
other tech being put in I'm 39 so I
wanted to jump in first to unified
friends list every night John Tracy yeah
they're gonna take us through this so
why do a unified friends list well you
got to understand what unified
friendless really means because we had
separate friends databases there was a
couple different ones basically that
didn't necessarily talk to each other so
for example on spectrum I might have
added Paul as a friend on spectrum
I wouldn't necessarily vote and never
transitioning to hate never see that in
the game it's the same place first if I
added him in the game as a we called a
platform friend I wouldn't see him on
spectrum so that was kind of the first
thing to work out and that took some
back-end services to make sure that this
was all talking to each other and coming
from the same place now on top of that
we wanted to make that Hall real-time so
as somebody on spectrum is adding you we
wanted to see that in the game
immediately whether it's on your web
platform your game it's all the same you
can see it it's live and you know will
continue to finish it off which we're
being great when the VoIP and the toy
it's an occasion between the platform
and in game as well as the as a more
rich presence so um can I win oh yeah
look Shawn's on Hurston I can actually
be in spectrum exactly seeing Shaun and
I can see you can see these in it he's
in the PU right now he's in Stanton on
her
right so it's just it's just stuff that
you know honestly it's just needed to
get worked out and this is the evitable
you know starting mark for what is
really the social management tools so
it's not full rich presence yet we can't
tell you exactly where in the verse
there I can say you're online and you're
in the pew and there was one thing as
well that you know I really hope for
probably move into and it's something
that you had mentioned a long time ago
and I think it's a the orgs really want
this but it's being able to within some
sort of social panel social control be
able to work on you know the military
calls it radio etiquette where you know
the commander can talk to the captain
captain can talk to the pilot pilot can
talk to but let the orgs sort of
organize that stuff
so all those controls whether that's org
alliances and you know all these kind of
things that that's that's where this
will all go to it gives the players the
ability well if they had the ability but
an easier way to play together which
which really should just be a no-brainer
should just be that easy I wish we could
do it with our emails but yes we could
so that's so great so the unified
friends list obviously is quite a cool
feature coming plus the foundation we've
got here but persistence you know pause
are you obviously did some stuff for
three eight two yeah right and so now
what do we got four three nine and what
you know why that's maybe ever done the
question to ask what persistent does for
us what does this mean I guess you can
you can I mean we got a three nine the
stuff that you've it so far on three
eight to you will stay with me
personally I think it's a big step in
the right direction we can we can lose
some in-game persistence but we can't
really lose people like they're on UEC
or their items they're bought and the
ship they're bought in game and
hopefully we've cleaned up some of the
initial glitches of it I mean of course
I think well you know if there's an
exploit and someone's figured out a way
to get a couple billion credits we
reserve the right to either individually
edit those people's accounts so we can
just take the money or the items away
from all orders general kept or just do
a general cap as Paul says or even you
know occasionally we may decide well you
know we need to just reset the database
and do a general white we're going to
try not to do that if possible but you
you
you never know because we're constantly
adding in some of these structures so
you know we've got our next you know the
next stage on the persistence which
fourth of all I talked about is it's
sort of the I cash side of it which is
more like more fidelity in the
resistance so what we have right now is
so saying saying Luisi write-ins you
haven't we're storing those in a way
that can survive the patches but we're
not necessarily storing like every items
we need to I cash the foundational that
sort of micro persistence to do the
physical inventory and that's a big
thing and the other thing that opens up
which is sort of the next stage which is
sort of like bigger things but it would
be now because we can persist anything
you can be a player or an organization
you can go down onto a you know like all
those beautiful shots that people share
a banquet sack and go I'm gonna set my
homestead up here well we will with
technology there is then that is what we
need to be off to do that and that is
our plan so when that's online we're
working on the aspects that would
include sort of what you would call base
building so you would go there you have
to bring in the right resources and sort
of create your little homestead of your
base so organizations or players can
create their own areas and of interest
and essentially will help sort of build
out and populate the resistant universe
as much as we on the game design side so
as we get these things on as you get
closer to there okay we get closer to
this sort of completely sort of dynamic
universe that you can sort of go
anywhere leave things build things
destroy things pick things up it's it's
it's you know and I think when you get
to that it's going to be pretty amazing
exicting like I cache is obviously one
piece of the puzzle which is our
internal high-speed database to store
all that data because obviously that's a
lot of data right of every single bottle
can can be persisted and restored but
even I cache is just one piece where
servos yes is a big big part of their to
write so something needs to take the
data and stream it in and swim it out
and restore properly there's a lot of
tech on a road
developed right now which obviously
won't see like all the features you
talked about like they come eventually
when people won't see them in 390 the
foundation yet
yeah because we like the services on the
server for example when we wrote that
out in 3.8 which was a big win for us
I think people out there they they were
like oh we expected to be like better
performance or whatever while in reality
it is one giant building block to like
get to this full persistent universe
right now this all without other tech
which is not there yet you don't really
see the benefits yet but for us and Tony
it is it's a real big milestone to get
to exactly where vision where we can
where we can store every single object
and we can stream that area out and we
push all the changes player data to that
like we pushed that up into the data
base and then when someone else comes
back to that area we stream it all back
and it comes back in the exact same
stage if you have the eye cache and you
have the server streaming what do you
have they work together that's those two
are necessary for that of a measure oh
yes extend the server lashing because we
can have you know tens hundreds of
servers all communicating with each
other they just we just need to be able
to save out any arbitrary area with its
full state which means whatever items
were there or not there or whatever you
know to some back-end so that when we
come in we can stream it back in weather
we stream it out on this server or this
server this server the state is the same
between all of it and then you also
should get much more of the performance
impact so yes well like Paul says why
you don't see the front end feature yet
getting these things in they're actually
quite exciting exciting for us
technically because once they're in that
we know okay now that enables this next
stage and once we get these several
stages in then all of a sudden all this
great sort of dynamic tactile you know
universe with state that could go there
with many many players all together in
the same areas becomes possibly know
there's just so many layers of it um and
we talked about it in the last pillow
talk exactly and it was all theoretical
but I did mention one other benefit
during that last pillar talk that
absolutely was in place and Paul
mentioned it but the load
the thing was just generally now default
for developers your your it's about
seven gigs when it loads up it's it's
almost it's so light well comparison to
the 45 that it was before exactly
loading the entire universe and now is
it as a developer we have one server and
one client and I'm the only client and I
see like a lot of benefit is that oh
it's crazy yes a big big benefits behind
the scenes yeah exactly the call a life
not just in the front end which is this
long-term thing but all these benefits
even developers so it's really cool yes
some that you may not notice so with
three point nine we're focusing now on
quality of life with this release yeah
and quality life can mean a lot of
things as far as the player is concerned
so from my standpoint a big focus has
been and it's mandated from from Chris
and Aaron which is the deep player
experience that you know that probably
like for playing the game it so there's
no frustrations there's no annoyances
there you can do the things they can
play the way they want to play when they
want to do it basically in an intuitive
way but I think it also goes down to you
know a more technical level which is
sort of build stability we're definitely
trying to have a stable build and try to
at least be as stable as a previous
build or even more stable and we're
willing to hold the build before it goes
live for a little longer to get to that
stage so we'd rather not push it out and
say oh we've we've made exactly this day
but it's crashing all the time and so as
always there's always the balance
between like oh so you can't spend too
much time on it because it's very
development and you also but it also
needs to be enough time so people can
actually enjoy the game and like start
playing the game I tell you and and you
know sometimes it sort of goes up and
down a little bit because you know for
instance server OCS right that actually
was a massive fundamental change in the
backend because like parts of the
universe just would not exist in the
server anymore and they used to and so
we would see issues that would get with
that that we would never see before and
so you know I think when sober OCS came
in at the beginning you know we you know
we took a little hit the stability but
we've been fixing and moving those
things up in general we're doing lots of
little things I think also by the way
isn't in this 3:9 we've reduced the
lying time for
FPS stuff yes so star Marine will be
much better and so will the PU and the
PU but the Pugh benefits and I think
when did I talk about this last on that
I see I can't remember when but yet but
the P benefits are tiny bit less than
arena commander because it's really good
when the server performances once we get
30 frames a second on arena crowd of
gray everything's great once you get the
little crater II you know to the this is
the 5s or so but you know we don't we
don't I guess it does still happen
sometimes when the players get all
spread out but anyways yeah yes it's in
there and yes there is an improvement
especially for a fresh server or when
it's running really fast it's alright so
another thing we've been working on
player interaction system personal inner
thought improvements Sean you want to
tell us a little bit sure so you know
when the players are playing it very
commonly they'll have to go to the
button mappings and you've seen this on
live streams or anything it's escape
goes to the control okay how do I pull
it flashlight okay how do I do the Dancy
mode okay which by the way is my pet
peeve because it's also my mic tested
always changing it to what is DS and I'm
like wasn't hosta used to be on J and
they was like yeah and I think maybe
it's on now or we got ahold are in this
reload is the worst when you're standing
there is a director are I'm sure as the
CEO going how do I go through the person
again yeah or well that's an easy one
it's like a quality of life improvements
on this yeah and we used to joke that
the button bear in his truck you know
and like it just got changed but anyways
to do away with that completely not only
having good default mappings anyways is
to be able to give the players some
ability to not just remap that but to
have access to all their actions in game
contextually and quickly mm-hmm also
opens up like for instance like one of
my pet peeves is with all these great
emotes
yep but before to access them here to go
to the chair and it's like slash down so
whatever if you know they're there and
if you go there and then their whole
idea of the personal and thought system
was to sort of open up you know
different stances or action like whether
you could want to be dancing or sitting
down or whatever it would be yeah or you
know all the various emotes salute and
so it's just one place you can go select
it and
the concept is sort of it's a little bit
I mean because you know I've talked
about this for a while which is a the
starcraft method which is youtube there
and you can play Starcraft with just the
mouse but once you start to learn the
hotkeys and you sort of become the yeah
you yeah you're the pro player you can
do things much quicker to adapt but we
need to what we need is just someone all
they know is the simple you know FPS
WASD running around their interaction
key a mouse and with that you should be
able to do everything figure out how to
use a ship how to use weapons how do all
these things access all these actions
and that really was the idea of yeah
that was the intent that was the exact
intent that he that he gave to us which
was you know make make playing the game
a little bit easier that's really
whether that comes down to is is making
playing that easier out of the gate that
was the thing because yeah the controls
haven't really changed but your access
to those days so now you don't have to
go into our key mapping stuff which
actually isn't connected to our
illustrator you have to go into a big
list and figure out where your where
your keys gonna be yeah or where your
where your buttons gonna be yeah within
the inner thoughts within the radial you
can just assign the key right there and
it even tells you what it is so you can
get dapped your style of play in sit you
to different shortcut commands if you
want or jewel kind of remap it all right
there where you want it to be so that's
really nice but then further to that
we've got shortcuts to different
categories so the idea here is that your
interaction system or your inner thought
system is is is like a very very it's a
lighter version of the mobi Gus it's
what you're doing in stitches so you're
not in barracks preparing your weapon
and taking it all apart and cleaning it
and doing everything but you're
reloading it or you're changing out the
ammo really and I mean you kind of touch
on a bit but the other thing that I
think is really cool with it is the fact
that you can map any you can bind any
key to any of the action and you can re
bang dynamically right there and
personally I thought there's no going to
an option screw like you go to an option
screen you do it here you literally it's
like it's kind of like as you're going
car radio you just hold you know number
one for a second and then it's
programmed to the station you're on
right well this is the same thing which
is
like you're gonna hold the key down for
a period of time and then it binds to
that action that you're highlighting and
the personal thought and so you can sort
of rebound on the flavor face it you
commonly doings you go oh you know what
I'm playing with my group and I want to
be able to give them some hand singles
because we're playing fps and I want to
be able to go like this so you combine
that to whatever you want to whatever
Keys you want and you can move it around
so if you don't like for instance me
thing I hate holding our for to holster
I would rather have and I like H would
have probably in fine for Alistair right
so but I mean that that's I think that's
a big UX usability yeah positive for the
game and those those are all the kind of
little things that we need to get into
the game that's why you know we're kind
of taking some of the stuff into the to
the new role where they're kind of
pushing some design and some of the
feature teams same idea that we used to
do our developer tools with just for our
players because it's like you know push
the player experience make it easy for
the player to play our game a little bit
and and I'm really liking how that's
going and I think it's working
yeah all right all right
so attachment UI so that was something
we wanted to talk about a little bit
more
we're segue to that I think I have to
say wowzers
oh that's a good one I do owe me a while
sir okay give it to me
all right ready so speaking of boost to
our user experience right let's talk
about new attachments UI wowzers
there it is okay now that got my vows or
it will describe so the attachments UI
is pretty straightforward you go into a
mode through their personal inner
thought system you can go there or there
is also a shortcut to it where your
weapon comes up in here it's basically
like the inspect mode that we had when
you were going shopping for the weapons
so you could take a look at it and
you've got attachment points on it and
within those attachments points you got
barrel one you've got our underbarrel
one that you've got the scope one as you
mouse over each one of them you'll get a
list or actually not a list it's gonna
be a grid so within that grid view so
let's see actual options and then you
just go be a grid of the things you have
that that's right and yeah it was a you
know we went from list and now now it's
the grid looks great like that that
works a lot better because you can kind
of see what it is rather than seeing and
VTAC
18x whatever like like you know what I
mean so yeah you can see the scopes you
can add them right on there you can swap
them out as you go and you can also stow
your weapon which will keep those on it
with an option for later that if you
pulled out another weapon you can pull
that attachment off that weapon and put
it on the other one and also it like I
said it when we shift to physical
inventory and just be more tactile this
is necessary interface process because
you know pulling up your character is a
thing that's like a paper doll yeah like
an you know an RPG paper doll thing sure
and we want
star citizen to be much more sort of
Institute tactile I see things and rank
with them hey I need to put a scope on
it you know put a scope passionately and
so we want to shift towards that and so
these are you know like you've been
talking about in this session a lot of
the stuff our building blocks towards
cooler and bigger stuff that's coming
down the road it's already kind of got
benefit and it's cool but you know it
also enables some of the other stuff
without these these sort of
functionality and features and we won't
be able to do some of the other stuff
that we want to do and I think
ultimately will give you a pretty cool
experience absolutely and it's and it's
it's a it's a great point because all
the features that we just talked about
like all three of these things the
unified friends player interaction
system personal inner thought as well as
the attachments UI it's all done through
building blocks we couldn't have done it
without building blocks and actually
there was one little thing that came out
of the attachments and it when you're
holding the weapon like this it doesn't
do it as much justice as it should like
when you have inspect mode it was cool
enough but really the pose of it it oh
man the guns are cool I really I'm it's
just it gave me a new appreciation for
the way the weapons look because you get
so used to seeing them dude I mean the
Philadelphia and also to understand the
modularity of it they spend all the time
to like break them up properly to like
fit all the sniper scopes properly and
all the stuff and now you can actually
see that like I stopped stop seeing it
so much but then you know the tires
I'm just I'm really happy with are they
okay
maybe talk them about new Babbage and
the moons okay I want to cover that like
what's coming into this and and how they
were made and I really think an
environmental site you know like I think
some people just think oh yeah you know
like its new Babbage landing zone what's
special about that but I think there's a
lot of it's make starters and
specialists that our locations even
though we use procedural tools their
health sort of create at scale they're
very specifically authored there you
know we haven't long we have a universe
we have a history and you can feel it
and so when you visit the places you
feel that and I feel like that's kind of
one of the things that makes to us is
and special even though we don't have a
billion planets or anything yet you do
feel like when you go to Microtech it is
different than you're going to Hearst
and for instance when you go to the
moons and so I and as we build tools to
allow us to sort of create that stuff
quicker but still with that same level
of quality OB be great but I really love
that and I feel like the varmint team
did an amazing job on new Babbage and
it's gonna be fun to go around here and
yeah get your burger I'll get your
coffee or just hang out and then and you
know there's another nice thing which we
also shut off an IRC is that we have the
ability now to sort of change our like
states based on the time of day so you
know it's also the interior beverage one
of the really cool things about is it's
one of the first implementations of that
and also you know there's a whole area
there's a whole bar with a DJ and at
nighttime
there's laser lights and it's a party
scene and during the daytime it's a bit
more of a sort of a chill day drinking
scene and it's it's it's equally cool ya
know it's it's it's great the three
moons which I think we've also done some
IFC on you know that's you know they
actually created those in the room you
know I think it was like two weeks per
moon one person so you know it was three
moons each one took two weeks basically
and those look great I mean there's some
of our best looking one so and we're you
know now that teams off doing some stuff
in another star system which is looking
quite good but that's another story
after three night but I think there's
going to be a lot of fun definitely keep
people busy for a while so I think
that that's really cool and then you
know I think the other big thing in 3:9
got it let's see and the other big thing
entry nine is the prison switch and kind
of the top which i think is unique
consequence when you have something like
a law system and so you know end up in a
prison and you got to do your time and
so there's a consequence to it and we
got some fun stuff like you can
potentially find a way to escape from
the prison you can also go down and sort
of reduce your time spent by you know
mining down in the caves there and
basically getting what we call merits
there will sort of reduce your your time
earned and you know that's it's kind of
a fun incident and it's also it's a very
beginning building block of now fully
fleshing out sort of the law and law
enforcement which would include bounty
hunting side so we've got a lot more
stuff planned for the prison stuff going
beyond this v1 implementation we've got
we're you know we you know we'll have
the ability to have you know prison
fights and all sorts of kind of fun
stuff and you know on the other side the
bounty hunting side you know we've got
some stuff long-term we're you know we
want you to be able to track down other
players secure them you know put them in
your ship take them drop them off at the
most you know the local advocacy office
and then that person wakes up in the
prison you know and you'd be able to
have hopefully track them long term and
so we want you to sort of basically play
that Mandalorian style and I mean like
if I watch the Mandalorian which I'm not
sure everyone in England gets to watch
this yet but it's definitely over here
it says great but we watch them and
Laurie and it feels very much like what
I it's it's a sort of star citizen
experience which is you know it helps
they stole the Cutlass but they did
steal yeah well you know you know David
Hubbins if you did work on although he
did do that he didn't do the colors but
they is a great concept person burn but
anyway the big idea of like sort of
bounty hunting and tracking someone is
stuff that like we're working towards so
there's a lot so the prison is like one
of the elements that's again we talk
about putting bits of the gameplay there
and of course we're going to build on
top of it and
I think by the time we finished all this
stuff it will be really cool and that's
all the power of things like things like
the prison system is like one element
that would add towards making your
piracy and bounty-hunting and sort of
law enforcement cycles all work and
that's one of the elements but it still
needs other stuff and and we will we
will get there and that's kind of a sort
of plan but it's this iterative point
where we but another it's like putting
another brick in the wall another brick
in the wall and finally it's there it's
always the last 10% which like brings it
from takes 90% back to you but also it
brings it from from okay there's some
base system year to actually now it's a
polished feature and you can use it
intuitive and it's the challenge is like
normal and normal game development you
wouldn't wouldn't be doing this out
there publicly but we because of the
nature of the of the way the game is we
develop it with the community out there
who support us
it's a totally different way and I
actually quite enjoy it because you get
sort of the you get the feedback and the
early feedback and and you can also make
things better and more stable
longer-term this way but in the short
term it does present challenges because
we always have to make sure that for
instance we have a stable of build as
possible you do spend a fair amount of
time stabilizing a bill that we may not
necessarily do if we weren't having to
release something every quarter I think
long term ends up with a better product
because we're in a really testing it
we're in a little getting feedback yeah
but on a short-term basis it means that
you always have to spend some time
making sure your triaging your current
build and making sure it's working so
that's time that you couldn't be
spending on a feature of polishing it so
you know if you're if you're expecting
everything to be fully polished and
working brilliantly the very first time
you load it up then you know it's that's
the big advantage people can like play
right right away and they test out a
feature like the quality but really cool
not not just over on part of the last
10% where we polish everything where I'm
a beta tester yeah you you are you're
part of it like from day one almost
I mean I would say a project of this guy
I mean there's definitely some smaller
indie projects where it's very like that
yeah and that's very cool but like a
project of like this size and the scale
you know there's not many people doing
them and the people that are are the big
publishers and the big publishers would
never do what we're doing because they
just wouldn't want to have to be open to
that much feedback citizen is never
getting cancelled we're just gonna keep
working on this thing until it is the
best damn space sim or universe
simulator actually just say not really
space it's a complete universe sci-fi
simulation games possible and that's
kind of cool and it's it's fun to be
working on it cuz it's it's I don't know
it's like the feel like Willy Wonka and
it's imagination whatever you know
whatever you can dream as possible
alright right on I'm motivated yeah yeah
well you know let's go I know I don't
give you everything more to add I think
that's a great wrap up if you guys had
anything else you wanted to add my
things I think Kristen ate it yeah I
think that I'm you here to here first
stars is is never gonna be canceled do
you hear that
alright thank you guys very much for for
coming and for the pillar talk and
hopefully enjoyed it let's get back to
work alright alright thanks thanks
[Music]
[Music]

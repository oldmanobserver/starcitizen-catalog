# Inside Star Citizen: Alpha 4.0 - Meshing Forward

**Video:** https://www.youtube.com/watch?v=Mgbgp4pRSJ4
**Date:** 2024-11-14
**Duration:** 17:41

## Transcript

so it's been a while since we had you in
here what's happened since then hi
Steve uh well we all went back home and
we didn't do anything for about a year
and a half and then uh suddenly we made
Ser Mission happen no we've been busy uh
busy taking all of the feedback and all
of the data that we gathered during the
last series of tech preview tests we've
really been developing the technology
and making sure it's it covers all the
use cases that the system requires uh
and rolling that forward into new and
exciting stuff what new and exciting
[Music]
[Music]
stuff okay jumpo detected jump Point
detected
see don't
oh you probably noticed we are pushing
player counts higher and higher as the
weeks go by why did we do this with real
players why don't you guys just script
something or use Bots it it never
matches the actual real time environment
that players can actually represent
putting real players in the build is the
only way to really see the true uh depth
of the troubles that we're in we'll
always always start out with a kind of a
safe test at 100 players so we verify
here that we don't we haven't introduced
new crashes that would detriment The
Experience uh and that the performance
is on par with what we would expect for
a single server with 100 players we let
that run and soak for like 30 to an hour
30 minutes to an hour and then once that
we've confirmed that that's actually
functional then we go to higher numbers
initially when we were pushing up to 500
players that was putting a lot of burden
on an number of systems uh it's one of
the reasons why we needed to replace our
message key where now we needed more
parallelism into how we shuffled
messages across the hybrid because the
amount of data that it has to shuffle is
a lot higher than we expected from what
I understand same mesh so 250 four
servers right now we're at 231
players making our jump to pyro system
so we decided to take a couple of months
out and completely rewrite it we came
back then what you've heard is referring
to as the replication message Q or rmq
so rmq is a product of the UK networking
team so that's uh Cloud Johnson Dave
Kaplan Jordan wood Nathan Matias Santi
Ortiz those guys I mean they really put
their heads down and I think they really
delivered on something that is going to
scale to the Future the intention of rmq
was to provide us with a more stable
foundation and going into the first test
it being new code and it being written
like especially for large volumes of
messages we expected it to perform
better than an
mq it
didn't rmq is performing actually pretty
good the actual element that we
identified back at the beginning of the
year when we did our first server
maching test were actually solved and
we're now running at very fast speeds
but it revealed another layer of the
onion a lot of ships over here so yeah
probably not which is too bad and I have
no idea what's going on oh the FPS come
on come back to me load load we were
disappointed that we were still seeing
interaction delay we were still seeing
High latency on the back end we were
seeing high levels of packet loss you
are clear to launch oh no it's going to
lock me in I might have to grab a
smaller ship or something why am I
locked in here so this hanger might be
busted I just saw somebody else take off
so not all hangers are busted that's not
good interaction delay is caused by
messages taking a long time to go
through the hybrid so when you press F
to open a door or exit a ship a message
is sent from your client to the hybrid
then processes the message and then
sends it to a game server and back to
your client so this Loop when it's too
slow and takes time will manifest itself
as an interaction delay now what causes
interaction Delay from the hybrid's
perspective is when we basically have a
traffic jam on one thread so the
application is using multiple CPUs but
at some point in our code the way we're
processing it we will be all jammed on
one that will create a traffic jam which
will cause the messages to take a long
time to do that Loop and that
immediately creates interaction delay
when analyzing issues with interaction
delay we saw that everything that was
going wrong was kind of focused in on
where all of the code that runs nmq was
so when we went to try and optimize that
we discovered that we're kind of in this
dead end we can't really figure out how
to with the structure of nmq improve it
so um with rmq we kind of addressed
those problems kind of at their route
and really really thought about how we
can not end up in this dead end again
that is the jump point so we are going
to oh well that is not the jump point
that is where we're going uh within that
amazing visual uh there is a delightful
jump point for us to go through
hopefully um I'm not entirely sure if
it's working I know people were telling
me uh because it's in evocati which is a
very very very early build of 4.0
sometimes it's not working but we'll
find out together what we expected from
that is that we would be able to achieve
a much higher throughput um which it
does it can achieve that but by
optimizing that we see what was behind
nmq that was also causing issues that
wasn't getting the opportunity to really
like stretch its legs to the point where
it was able to become an issue nmq was
at a dead end right there wasn't so much
we could do there just to the nature of
how that had been written the game we
were building at the time when that was
written radically different it couldn't
grow it couldn't evolve exactly it was
limited in its nature our game is
massively complicated we produce so much
data from everything not just players
NPCs from ships from doors from ele to
elevators to you know just everything
kind of going on that the the nmq the
nmq at least and then then the rmq is
just like no so RM Q's Focus was yes to
immediately try and you know solve some
of the issues we had seen but also to
provide us some room to grow uh and
right away we noticed a distinct lack of
parallelization when we update dirty
messages so a dirty variable is a piece
of information or a variable attached to
an object that hasn't been communicated
to all other members of the mesh the
sink dirty stuff is just absolutely is
it's taking up most of the frames so
where we were originally seeing let's
say like we have this this amount of
space right we we were seeing like nmq
take up this much and then like the rest
of the network update taking this much
but now we're seeing sink dirty take
this much and the rest of the network
updates take this much and then rmq just
this tiny little sliver now so we've
addressed rmq but oh wow that underneath
all of this there was this other problem
that never really got the chance to
generate that load oh it's just
closed
huh oh
no okay lining up oh my God entry
requirements met oh my word this is
happening tuning
complete oh the music is actually giving
me shivers down my spine so we fixed
this by paralyzing the work or
optimizing the work that's happening in
that thread so that it goes faster and
so there's multiple approaches to this
but the number one thing that we've been
doing in the first series of tests have
really been optimizing and parallelizing
the work for synchronizing dirty
variables parallelizing this allows us
to add more Lanes it's it's just like
going from a single Lane Road onto a
highway we can just handle much more at
the same time so the server needs to
send out any change that happens to the
game you move you shoot and send it to
every other client that that can also
see that that entity what happens is
that that then needs to go through every
single client and go oh you can you see
this can you see this can you see this
can you see this and then synchronize
dirty state that then is what produces
the message that updates you what's a
really really easy optimization to make
there especially at higher player
accounts is we can just go oh every
every single client we can do at the
same time they're not modifying any data
they're just reading it because that's
what that's what sending it out is
you're just reading the data and reading
the data mean just just reading the data
not modifying it means that we can run
all of that information at the same time
so with not too much work we can get a
really really big
optimization
oh
okay opening jump Point guys what the
heck man this is next level entering
jump
tunnel after that first wave of
paralyzation we seen some immediate
benefits it's feeling really good server
is feeling good uh knock on wood no
server errors so far no crashes stuff
like that so I appreciate that greatly
we started to see reductions in those
those key metrics for interaction delay
and game responsiveness and and packet
loss that was quite a dramatic exit I
have to say I got very lucky I didn't
just get slammed into one of these
asids can you hear me jump jump if you
can hear me
a jump again if you can hear me oh nice
nice you can hear me let's go things
were showing signs of improvement so
you'll see we pushed the player count up
again this was our first test going past
1 th000 players and pretty rapidly we
ran into to the next bottleneck which
was the binds uh and a bind in very
simple terms is effectively the
connection between your client and your
view of the game world to the server's
view of the game world so if I see a
coffee cup on the table in front of me
it's because my client running on my
computer has bound over the network to
the server's View and knowledge of the
existence of that
entity all right so here we go with more
FPS
drops cuz uh it's it primarily the
medical area is terrible what is this
open ooh
fuses down with your colony our game we
have a lot of entities uh last time I
checked Stanton was at well over a
million in an average kind of game
session and and numbers just get bigger
and bigger as time goes on Ian said
there were a million entities that that
that's like starter numbers right so um
so that was just just with Stanton so
Stanton initially when we seed sentence
so seeding is like just us putting all
the initial State there um that is about
720,000 entities I am at Area
18 so now we're going to have another
experience oh my
God AI definitely feels a lot more
variety that's good looking good relax
pal just walk right through me jeez
after a little bit of soak time so say a
week we see that very very quickly grow
to around 3 million entities per shot so
yeah things things grow pretty quickly
and like from there we see things kind
of continuous continue to grow this kind
of why we need like this big focus on
like cleaning up entities and stuff like
that it doesn't just help the game it
also helps the network with the
replication and the interaction delay so
in order to optimize the binds what we
need to do is properly assess what part
of a big bind can be done in parallel
with another so that they don't interact
with each other that allows us to go
wide use more Lanes to go faster the
motorway is completely clear we just
can't get the things up the on-ramp fast
enough so so what we're trying to do is
basically add more
onramps um so so with binds what that
means is we might have the same number
of entities that we need to actually get
you that you that you want to see that
you want to see updated but what we can
try and do is try and do that faster so
with
parallelization with some clever
optimizations among other things
hopefully progress is looking positive
so we've been working on a lot of the
more like tedious little little details
which has been like kind of like
figuring out how we get information into
our message queue in the most in the
most optimal way possible um but that's
also setting us up for being able to
then very be very clever about how we
parallelize the binance there we go I
just click on the left click on the
mouse so I open the the tunnel here we
go here we go we are we are opening it
all right entering jump channel here we
go so smooth so smooth so smooth
okay I am really excited to see this
progress further already the jump Gates
feel really smooth and reliable to make
use of this is going to make a very
exciting addition to the game when it
comes to live and opens up so many
possibilities for the future everyone at
C is doing an incredible job of bringing
this to reality amazing work all around
all right so now that I kind of left the
FPS kind of catch up with me here and
you know I'm kind of trying to let the
all the shaders load so that's probably
hopefully a lot of what you're seeing
with and it's not just optimization
issues but it's starting to feel better
now that I'm kind of just standing here
for a moment we really think that
unlocking that will allow us to go to at
least 10x performance on the ver versus
the current game experience on live
which is at 100 players uh but this will
also allow us to uncover more layers of
the onion that we can optimize to go at
even higher numbers on one single hybrid
which will allow us to go bigger just
like we did with rmq from nmq just like
we did with the dir variables
optimizations binds will allow us to go
further but it's not the end of the
tunnel we still have more work to do to
get even more player counts on one
hybrid all right we're going to see
what's inside here oh my
God this is so crazy oh too much
light the visuals are crazy we want to
push further and you know the message
from Chris is go as big as we can as as
quickly as we can uh we want to do that
in a way that delivers a better feeling
more responsive game uh we're not just
going to jump to big numbers just
because we can uh there's nothing
stopping us going and putting a couple
more zeros at the end of the player cap
but that's not going to lead to a good
experience until we continue to address
the bottlenecks that we know we have uh
and more that will discover as we go
forward we have a lot that we can
improve on and a lot of that conf like
looks very very intimidating dating but
like I'm excited would probably be the
emotion to kind of um to kind of use for
it because we spent so long trying to
figure out how we can do server meshing
that we've not really had a chance to
like kind of slow down and look and now
we're kind of in that phase where we can
where we can kind of look at where like
every like things that have existed for
the past 10 years can be improved and
being able to then like tear out huge
systems and replace them like with nmq
and rmq and like really try and like
make the most the the best thing that we
possibly can is is really
exciting so what did we learn this week
that the progress of moving server
Mission forward is only made possible
with the help of testers like you that
each new win like rmq peels back another
layer of the performance onion to be
addressed next like binds which since
the time these interviews were recorded
have made tremendous progress and are
already revealing in the next layers
underneath and that this work doesn't
stop with the upcoming Alpha 4.0 because
as the game grows to the sight set in
Star Citizen 1.0 and Beyond so too must
the efforts to continuously optimize and
I want to give a special thanks to Star
citizens ater moth citizen Kate and will
doinga even lease hybrid V let regular I
tried morphologist all 43 speed Fragger
and toata as well as everyone else who's
been documenting this process from the
other side of the table for inside Star
Citizen I'm Jared hucke thanks for
letting us share the people and process
of game development with you and as next
week is iae instead of ISC there's going
to be something a little bit different
coming your way next Friday we'll see
you
[Music]
there for

# Inside Star Citizen:  Dev Diary - Server Meshing

**Video:** https://www.youtube.com/watch?v=pCPaSkcK3mM
**Date:** 2024-07-04
**Duration:** 23:11

## Transcript

the core Technology Group bunch of big
brains found in all five of our Studios
these are the folks that have been
working to expand Star Citizen beyond
the limitations of the traditional
client server model to distribute what
would have been the work of a single
server across many this work has many
parts but the collective name for all
the technologies that allow this to
happen we call Simply server
meshing beginning late last year the
newly created Tech preview channel was
used for a series of
tests and while the work of server
meshing is that of our entire
development staff toiling in concert
with the core Technology Group we asked
members of the small but dedicated UK
networking team to speak on their behalf
this is Dev diary server meshing
[Music]
[Music]
yeah there was a nerve-wracking one for
us because it was the first time you
know going out public with such a big
fundamental change for How We Run the
game replication layer Network code
split out from the dedicated game server
running in its own uh service we call
the hybrid service so these tests are
not just for uh for us in CCH these are
also for the game side as well so they
can actually see their systems
functioning along with serve meshing uh
it's kind of one cohesive hole so that
was the first time trying to deploy that
kind of environment which is radically
different from what we've had to do
before one of the major purposes of tech
preview uh is to expose the game to a
much wider audience so that the rest of
the development team can see more of
their work exposed really help us pick
up on all the little corner and educ pie
that we don't necessarily spot if we
only have a handful of people testing so
it's really good to you know have other
development teams look at the tech from
you know a development perspective and
on a live environment as well in Alpha
318 we introduced the replication layer
our first major Milestone towards server
meshing it offloaded the entire state of
the universe things like characters
ships weapons and more away from the
game server which we call the dgs
it wasn't the smoothest process but the
work of splitting the replication layer
to be shared between the client and EGS
into a new hybrid service still needed
to be done as was testing of a brand new
server crash recovery system that was
long
overdue these would be the focus of our
first two Tech preview tests and
everyone was excited to learn everything
we could with help from the community
basically we learned that it worked went
Sur surprisingly well for us yeah it was
great fun yeah good job it works we
learned that um yeah the technology was
working kind of as we expected it was
like surprising how well it actually
worked for the backers the major change
that they would have observed through
these tests was the Improvement for
server crash recovery so the first
outing with server crash recovery we
were talking 25 30 minute recovery times
uh frequent crashes all over the place
it's almost like we're pulling the
tablecloth out from underneath everybody
at once so it requires people to make
some interesting considerations and kind
of chimmy that tablecloth back
underneath with the with the new server
so if the server crashes the game State
still survives we can spin up another
server and when it connects again the
new server connects again it can get all
the game State back and clients can
continue on their merry way basically
server meshing for game codes all at
once in like one big giant transition
but I think by the time we were getting
to this yeah second and third test
we're starting to see things
dramatically quicker uh and dramatically
more reliable yeah I think I was
probably expecting it to
explode yeah pretty hard we were
surprised that the game code worked as
well as it did without needing changes
backers have a way of finding and
breaking uh breaking things so yeah
having a good few hours testing uh in
back of hands in a more or less real
world environment was incredibly
valuable of course this is still game
development and these were tests not
just for the core Technology Group but
for every other Dev team to see just how
much work they still had ahead of them
work that continues today adapting all
of Star citizens various game systems to
the realities of server meshing we found
that there were some gameplay systems uh
that weren't quite ready for server
crash recovery that cause some issues
when server crashes and a one takes its
place that kind of allowed us to kind of
create a bunch of bugs and send them out
to various gameplay teams what's
cyclical crashing basically when the St
then tries to recover start back up it
would then deserialize the state that we
had sted previously and the state itself
was corrupt so it would just crash and
it would just keep keep trying pretty
annoying um a lot of people were like ah
this you know let's turn off server
crash recovery that's the problem when
actually no it it wasn't the problem uh
it was just the state it was in um when
it is working it it works very well Star
Citizen is a large complex game every
little bit of it uh across ctech and the
actual game system has to function
perfectly for server meshing to work the
test allowed us to point to parts of the
code where things didn't function so we
could go back to the game teams and say
you need to go back and you need to
rework this particular system being able
to allow the replication layer to kind
of soak is kind of why how we were able
to get it from from basically having
things work for the first time to a
production ready product making sure
that we were in a good state so that we
could progress with the next set of uh
Tech preview test it had work twice now
yes yeah the the the the overconfidence
was starting to grow
yes with two successful trials in the
can the team broke for the holidays
returning in January with more tests
more fixes more bugs to discover and
even improvements to the very manner in
which we collected and analyzed data
itself at this point now it's not only
about just getting server crash recovery
working but we're really starting to see
changes come in from the game teams uh
for the various systems that interact
with it so from those early tests people
would have seen uh you know a loss of
State for certain systems or things that
just didn't recover well uh if you ended
up in you know a weird condition where
let's just say you're in the middle of
respawning during a server but this has
been we were noticing you know a lot of
you know major spikes and you know a
player tries to interact with a door or
a ship or tries to pick up something and
you know they could be waiting several
minutes for something to actually happen
but then it was also other game code as
well other teams you know send in sort
of like serialized variables and
messages across the network and some of
them were like being sent twice which
obviously it's not ideal because if
we're sending messages twice we we only
need to send it once then we've got two
messages being sent which is you know
the backlog or the queue is just going
to get busier a lot quicker so so
between now and then you know data
analytics metrics making sure that the
development team had the information
that they need when they request it as
well and having our backend dashboard
set up so information is correct and not
incorrect because we don't want to
provide incorrect results we're starting
to see fixes for those kind of strange
cases start to come in so the overall
experience at this point now would have
been much more
solid at this point after a series of
necessary wins and a reconfiguration of
our Analytics dashboard with clients and
servers now both connecting to the
hybrid service ready to put an end to
the dgs crashes causing players to get
disconnected it was time to move to the
next major
Milestone testing configurations of
multiple dgss connected to the same
hybrid service or put simply our first
true server mesh the next uh milestone
in our our Tech preview tesed was F 29th
which was the first time that we um
attempted uh to have two solar systems
running on two djss connected to the
same hybrid service and clients
basically able to connect through them
choose which solar system they wanted to
play in and go and play so this one was
the big surprise uh so we were really
excited to finally get multiple dgss and
multiple solar systems out there into
the hands of the backers for testing and
also this was a a huge milestone for for
the platform teams is it's their first
time having to deploy a full-on server
mesh with multiple dgss uh out to our
life environment that was a super
exciting test we were still had the
single hybrid which for us having a
single hybrid manage the state of
multiple servers was a huge huge
milestone um and with those there may
have been some bugs some in some
interestingness um being able to see
crash recovery actually occur and then
succeed on the pyro server um really
proved to us that we were that we're
kind of getting to that kind of
Milestone point we had tried it
internally first but yeah with the tech
previews it tends to be pretty hot what
you see is the build that we've um
created the day before it's kind of a
bit of a wing in a prior to to hope that
it is actually going to work we got a
lot of data about our performance and it
all seems to be holding up pretty well
you keep saying surprisingly well were
you expecting this to just fall in its
face yes I've I've been working games a
long time and it yeah for things to work
first time is very unusual so yeah I was
I was fully expecting something to
explode and for us to have to to yeah
patch something up a little bit of
anxiety I feel uh with the teams that U
this could we never tried anything quite
like this before on the tech might not
actually cope with it and then we might
have to cancel the test things
thankfully went really really really
well generally speaking when we test the
serve matching stuff out it's tender to
behave better than people expected the
time so yeah we've kind of gotten lucky
with some of this stuff however as
awesome as it was to finally see two
star systems running on the same
dgs there was still one last minute
disappointment for every member of the
team unfortunately we had a last minute
issue with the jump points that meant
they weren't quite going to make it for
that test originally we were trying to
make it so that the jump Gates were
functional uh and you could have done
solar system transitions via the jump
Gates we didn't manage to make that in
time I remember being very upset that
jump points decided not to work at the
last minute but there was an issue with
the jump points where if someone used it
the radius to pull in people from the
server to go to pyro was essentially the
size of the universe so if you if you
use the jump Point everyone in Stanton
was going to pyro whether they wanted to
or
not and so you had so so how did you
enforce people not using it I don't
actually remember I think it was just
said no don't and the people
behaved uh if I remember only one person
tried it and it broke so it didn't
nothing happened which very
lucky and then only a week later on
March 7th the first successful test of a
jump Point assisted server transition
occurred for us in the UK the tech
preview releases tend to go out like 11:
midnight kind of of time um and I I
stayed up and hopped on to kind of give
it a a look and the excitement that we
that we had from being able to like
actually see us like thousands of
players in a que um jump through the
jump points and for things to work with
minimal issues is a very exciting time
for us Sat by the Pyro jump gate uh
watching the first backers come through
from Stenton um myself a whole bunch of
the team were online watching that
happen
um amazing to see it kind of culmination
of you know years of work by dozens of
teams and hundreds of people I remember
being really happy because everyone was
thrilled all the backers were really
thrilled that they actually saw it
themselves I remember um the players
going through the gate and smashing into
each other on the other
side they would just come out of the the
gate and somebody would be parked there
from from having just come through they
would crash into each other they would
spin out it it was really funny yeah
it's pretty it was pretty great having
people be actually be able to do it
something they had been waiting for for
God knows how long seen people actually
use the jump gates for the first time
that was like really exciting that that
I think brought home to the community at
large that this was actually server
mching that we're actually doing the
real Tech here and it actually works and
yeah we knew it all along but yeah it it
told everybody else that yeah we we're
doing the real deal here yeah I knew it
would oh you knew it would
work in that runup we tested nothing but
the jump Gates cuz that that was our
Focus so UA is so cynical that if they
say it works it's going to work it's
going to work that
works and with these first successful
tests now having proven out the
Project's ability to simultaneously
operate two star systems across two dgss
on a A Single Shard the time was fast
approaching to test the other core
functionality of server meshing
technology the subdivision of an entire
star system across multiple servers
we've done the jump gate so we we
focused on just having the sunon system
again but this time we split the sunon
system between multiple djss super
exciting now to finally deliver on what
I think a lot of people's ver vision of
server meshing is which is a single
solar system being divided uh into you
know multiple areas that are all being
managed by multiple dgss we we once
again really really nervous about how
this is going to work the subdivision of
uh of Stanton up into multiple Services
is technically risky thing to do so the
way that we did that is we kind of
carved up the Stans and solar system
into what we call territories and we'd
assign those territories to different
numbers of djss and while we were doing
that we also tried increasing the player
cap we tried two djss 200 players three
djss 400 players four DJs 400 players
and then we just decided to go a bit
nuts and we tried six djss and 800
players and that was really to um stress
the system test uh server crash recovery
uh and kind of yeah get all the
performance information about how the
hybrid service is able to handle these
higher numbers of ps's and higher
numbers of um of players and seeing 800
players in A Shard and seeing the
screenshots on Reddit very very exciting
to see that what we had made was capable
of that though there's certainly
improvements to be made we actually
exposed a bug during that one where uh
you would drop out of quantum travel
right at the transition point when
someone would transition across that
border they would just vanish so yeah it
made it very obvious where the borders
are all the backers were like oh we know
where the server boundaries are that was
actually Dental but it provided us a
fantastic testing opportunity cuz people
could really Hammer uh all sorts of
crazy conditions at the boundary to see
you know shooting other ships across the
boundary and all throwing cargo boxes
across and watching it all largely work
shooting across it Eva in across it lots
of testing that we weren't really
expecting to get out of that actually
happened and for the most part it it
held up really
well this could configuration of star
systems broken up into multiple
territories each containing one or more
parts of the playable space like a
planet or Moon distributed between
whichever number of dgss are available
and spreading the simulation workload
across all the dgss in the mesh is what
will one day allow us to seamlessly move
or transition players throughout the
Galaxy without immersion braking loading
screens but with this first series of
tests now completed it would time to
step back and ready the replication
layer split and server crash recovery
for Alpha
323 you know I watch a lot of streamers
and videos and everyone was really
really happy and that makes me happy
that that makes me motivated to do my
job when the RL split went out in 323 we
didn't see too many too many problems um
and things seem to be working very very
well and I believe that's largely can be
attributed to the to the amount of
testing that we've done kind of leading
up with the with the backers and with
the public when General QA was testing
it when they first got their eyes in it
they basically you could hear pin drop
when they were testing it it was so
quiet people were so worried about and
then when the test was over they were
just they were flawed essentially they
didn't realize that that Tech had
already been put into the game and it
was actually pretty incredible that
worked so well the Ser recovery stuff
was always something we have to get into
star system to make the whole thing work
the crash recovery stuff required a lot
of work on the game team side of things
just to make sure that their systems is
compatible so that when we do have the
crash recovery their systems will
recover along with the actual server
it's a testament to our approach to all
of this with tech preview with getting
all of this out into the hands of the
backers super early it's given us an
environment and the place to mature this
Tech so at the time that we came around
to delivering it for real in the live
release with 323 we had really good
confidence that it was going to work
that it was going to be a good
experience and I think uh
for the large part that's been true with
Alpha 323 now out there's still work to
be done and a new series of Trials have
already begun by the time this episode
airs between now and 4.0 we've got a lot
of work to do both on the tech side of
things within c tech group with the
teams who actually working on server
Ming there's a lot of work to do uh on
the game side of things we've got to
work with the game teams very very
closely pretty much every system in the
whole game is affected by surf machion
to some extent more Tech previews and
the lead up to 4.0 that should help us
Harden like some subdivision multi
multi- system split and kind of see
where we can kind of push things every
time they bump up the test like more and
more people I'm just like ah oh now
we're going to find more stuff that we
don't know about oh no there's more work
coming my team's also improving uh
tooling as well making sure the health
of the content is uh and the the world
we're building is the best it can
be ultimately these steps between now
and Alpha 4.0 and the continuing work
Beyond are only made possible by the
support of fellow developer and Tech
preview tester alike and it's these
efforts that keep the teams moving
forward towards these difficult but
attainable Milestones has there ever
been a point in The Last 5 Years where
You' lost faith
no really no yeah no no I mean there
there have been
some uh it's it's been a bit Rocky at
times but I never lost faith cuz I
believe in the tech I don't think we
could have done this anywhere else no
nowhere else would have the patience to
really develop this kind of tech on the
promise of something that might happen I
don't think there is another game
company on the planet that can do what
we're doing uh we can take risk to
produce amazing technologies that other
game companies simply can't take I'm
pretty convinced that uh this couldn't
be doing anywhere else might sound like
we're really confident with how well
Tech preview has been going because we
are but we're honestly amazed
um how smoothly a lot of this has gone
always room for improvement of course
and there's always things that we wish
had gone better but bu and large uh
we're really impressed with the maturity
of the tech so early on uh how well it
performed under really heavy load in a
real environment this is an an
incredibly exciting time for me I I
personally been working on this for
almost 10 years all the little bits and
pieces that we've been doing have all
been leading up to this this year has
been fantastic and actually seeing a lot
of it all come together and you know the
jigsa puzzle virtually complete now
there's just the last few pieces to put
in it's just been amazing to actually
see all this all this work all this
effort that we've put in actually
actually come together and to be able to
put it in the hands of our backers and
you know get their feedback and you know
have them experience what this could
mean for the game it's amazing Star
Citizen Alpha 4.0 will be the first time
a server mesh consisting of multiple
dgss with many territories and even
multiple star systems makes its way to
the live game environment this
represents an enormous step forward
towards our goal of making Star Citizen
into a massive seamless persistent
Universe after 4.0 we'll continue to
push this first version of server
meshing gradually increasing the number
of dgss within the mesh and the number
of players this technology can
immediately support but to fully unlock
the potential of the work being done
beyond that will pursue Dynamic server
meshing where the distribution of
players and entities that get streamed
in on the dgss are managed according to
server
load all in all the journey to server
meshing started nearly 10 years ago and
will continue to evolve Beyond its debut
in this year's Alpha 4.0 and we invite
you to continue following along with
this progress in the tech preview
Channel where you can help to ensure the
best possible future for its development
as well as keep folks like the UK
Network team just one of the many groups
dedicated to bringing this technology to
life energized and empowered to make
this dream a reality for inside Star
Citizen I'm Jared hucke thanks for
letting us share the people and process
of game development with you and we'll
see you all here next
[Music]
week for

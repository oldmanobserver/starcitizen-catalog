# Star Citizen Live | Tech Talk with Benoit Beausejour

**Video:** https://www.youtube.com/watch?v=k1bXLQ5U-w8
**Date:** 2026-02-05
**Duration:** 2:04:09

## Transcript

Hi everybody. Welcome to Star Citizen
Live Tech Talk with Benois Bose. I'm
your host Jared Huckabe. And if you've
never seen Star Citizen Live before,
lucky you. No, it's where we take
usually about an hour out of our week
and we chat with developers on these
special shows that we do with our good
friend uh chief technology officer and
all around swell guy Benois Boseour. Uh
we usually take a bit longer. Last time
we took three hours. The first time uh
the time before that it was close to
three hours. It was maybe two and a half
hours. This time we're clocking in at
about two hours because we have meetings
that we have to go to, you know, but
about at about two hours. So, um, yeah,
I ran out of gas. What else do I do in
the intro?
>> Oh, I got to introduce the person. So,
uh, I've mentioned this person in Benoa
Bose a few times. Uh, so let's go ahead
and meet Benois Bose. Benois.
>> Hi.
>> Hi.
>> I have to say I'm impressed with your
pronunciation.
>> It's been like 12 years now.
>> No, but it keeps getting better every
time. It's better. I I I I I practice
privately.
>> There you go. I know. Thank you
everybody. Hi everybody.
>> Tell everybody who you are and what you
do for Star Citizen.
>> So I'm Beno.
>> You want me to say it again or no? Okay,
good. Uh I am the chief technology
officer at CI. So
>> I guess the best way to describe it is
if it has a computer chip in it, I'm
kind of involved in a way. So, I run the
engineering teams, uh, Star Engine
Group, uh, and I meddle with all areas
of the game, trying to get us forward to
our 1.0 release. Metal is a good word.
>> Yeah.
>> Uh, my blood sugar is weird or
something. I can't see with my glasses.
I've seen better without my glasses. So,
we're going to take off my glasses.
Although, I'm going to have to do the
show like this. [laughter]
Now, I can't see anything else, but I
can see this. It's important. All right.
So uh on these shows on these the these
special tech talk shows I think we are
going to cover a variety of topics. So
the these topics have all been discussed
uh ahead of time where you worked out uh
Ben W as involved as he is uh with so
many aspects of the of the game still
needs to be afforded the opportunity to
check in with other directors and get
updates on what they're doing and
everything so that we can pro provide
you the most up-to-date and accurate
information. So, this will be a this
will be a show that's less about taking
questions uh from the chat or from the
community and more about just a very
candid conversation about the current
state of the game, the development,
where we've been, where we are, where
we're going, that stuff like that. So,
I've divided the show up at this point
into sort of three things. I'd switch
teams for Benois. [laughter]
>> Oh, that wasn't in chat. I was just
talking myself. [laughter]
No, that wasn't Chad. Um, uh, send a DM
after the show. Uh, that's not
appropriate. Uh, so we're going to start
the show with updates to existing
endeavors. So, this is the third one of
these we've done. We've we've talked
about a couple of things. So, I want to
update on a few of these topics that
we've been covering through this before
the second section where we get into
some new things that we haven't
discussed.
>> So, let's start with the biggest one,
which is server mission.
>> Yeah,
>> we're now a year on. We talked about it
ad nauseium leading up to this thing. Uh
it's now been out a year. This is
probably the last time we're going to
talk about it for a while again until
dynamic comes and we're not going to put
any dates on that. So So let's just
let's put the story of server meshing.
Let's put a button on the story of
server meshing. Sure. And I'll break it
down into four sections.
>> How's this gone? H how's this last year
been? Well, so like if I recap like uh
almost same date this year, last year
>> almost, yeah,
>> was when we actually launched 4.0 and
server meshing actually went to the live
environment. And so yeah, it's it's kind
of the one-year anniversary of the of
the tech being available for all
players. Um it's been surprisingly
solid. Uh I I like to say that this way
because it's a very large system.
uh but it has been uh it has given us
just good foundation for what we had to
do last year in terms of the content
drive that we've pushed forward uh the
performance improvements that we wanted
to deploy. It was like we we were
expecting a lot more turbulence with the
release of server meshing than we've had
in a year. it's been a very very stable
system uh overall and so I would say
like you know if I look back at the year
obviously there's always problems you
know with new technologies but it server
meshing itself has been very very very
solid for us okay so in the quite
frankly years leading up to it talking
about it it began to get this
mythology that it was going to be this
silver bullet that it was going to be
this one one one stop uh fix that was
going to fix so many issues.
>> It didn't fix every issue in the world.
It was never going to fix every issue,
but I want to talk about what it has
enabled for us in this last year. So,
what are what are some of the benefits
that we can draw direct line from server
meshing that we've experienced in the
last year?
>> Well, like if you if you walk back to
the the start of an experience before
4.0, so before server meshing got
introduced,
um you know, a server crashing, that was
the end of your session, right? You
would lose your ship, you would lose
your cargo, everything would disappear.
You'd have to reconnect, restart the
client, start over, right? Uh I mean,
anybody who's lived through the first
years of development of the project know
how intense this was, right? And so the
first thing that uh that server meshing
brought us is is server recovery. And so
because of the fact that the replication
is separated from the simulation, when a
game server crashes, which is where most
of the crash risk exists,
>> uh well the sim the the state of the
replication is still good. So we just
tell you, hey, we're getting another
server. You stay there and when it comes
back, we can recover exactly where you
were. You don't lose your ship. You
don't lose your cargo. You don't lose
your materials. Um, and I think that's
been a very very big, it's a kind of the
unsung hero feature of server meshing.
Uh, it helps with, you know, engagement,
playing longer sessions, finishing
missions. Uh, and so for me, that's like
one of the big big big uh pluses that,
uh, was brought in with server meshing.
Um,
on top of that, and we we did have some
crash isolation to be clear in 324 and
before, right? But what what server
meshing really brings also on top of
that is crash isolation. So if a server
is in charge of the crusader area and
he's the one running into issues, then
only that area is affected. And so the
player who's, you know, bounty hunting
in pyro or something like that, he's
completely safe from from this crash. Uh
and that just the perceived stability
has increased a lot uh based on that on
top of all the work we've done to
prevent servers from crashing in the
first place. Uh but just this this whole
setup has made the game a lot more
stable in in that sense. Um so that's
just the kind of meat and potatoes of
what meshing has brought us. But the the
the key bit it brought us also is much
larger player counts. Uh and so we used
to be limited to 100 players uh per
server which had the whole universe to
simulate. Now we've got a series of
servers simulating the simulating the
universe. So we oscillate between caps
of 600, 700, 800. We're still
experimenting going higher uh with this
depending on multiple factors that cap
changes for the moment. But uh just the
fact of having more players in the same
shard means you can have an event where
200 people show up at one area.
Surprisingly enough, we've also
discovered things through this that
sometimes game servers actually perform
better with more players in one area
than one server simulating the whole
universe would because he has less
entities streamed in and now it's all
about updating the components in that
area. So, we've seen we've seen certain
uh events, you know, cuz players always
find a way to, you know,
organize something that's should be a
problem, but uh there was a 400 player
uh uh party uh in one of the bars on New
Babage and we looked at the server
performance through that and it was
actually very very decent. So, we
expected a full meltdown, but it was
actually good. And so, that enables that
experience, right? Obviously, there's a
million other problems to solve for this
to be a really good experience, but from
a server meshing point of view, that was
a big win.
>> Um,
>> you've got a 500 player meetup coming. I
just saw some
>> I know it's like that becomes a kind of
common thing and we love it because
that's exactly what the tech is meant to
enable.
>> Um, and then obviously the the two uh
other things that meshing has brought us
this year is two new uh solar systems.
And so for years we had been stuck in
Stanton expanding the Stansson system,
more POIs, more planets, more things.
And now suddenly we were able to branch
into Pyro which was everybody at CIG was
really looking forward to that. It was
like it was internal tension at when are
we going to launch this thing? I've been
working on this for a long time. And so
that was really a relief to be able to
get
>> you know players to cross the jump gate.
So the jump gate technology obviously
comes with meshing and so expanding into
two systems in one year
>> being able to add yeah pyro in January
you know tech preview was you know
December the year before but it went
live in January and then next goes live
in November same same year it's it's
>> it's this
most common question you you know we've
been doing this for a long time now here
forget other places we've been doing it
just here for a long time and one and
one of the most common persistent
questions is about the pace of
development and and you know you know
people have been waiting very long for
certain things justifiably so and and
and we always and we've always we've
always maintained that you know it's
development kind of works on a it it
builds it builds and it builds and you
get more efficient after you build the
tools after you build the foundations
you stuff like this it gets more
efficient you can do more later on this
year because of server meshing we were
able to kick out two star systems and
and we're still going we're still
expanding depending on nyx. Uh every
patch this year will expand nyx even
more. Uh it's the the one in the one in
March is looking to uh is looking to
expand a bunch of the service stations
and and and our first big content drop
uh which I'll go ahead and say right now
is supposed to be Rockcracker. If you
watched uh watched uh what was it
called? Citizon Direct,
>> me and Names. um you can learn more
about that, but we're we're currently
working towards that is our is our March
release and then and then on on on and
on just continuing to build out Nyx
until I think in the road to 1.0
presentation at Citizen two years ago
now uh well a year and a half ago uh uh
uh Rich Tyer acknowledged that Castra
would be our next system whenever that
comes online. So it's just this
technology
>> it's unlocked the capabilities to do
what they're doing. actually we can
actually you know start to deliver so
many of these things that we've been
talking about and working on behind the
scenes. Instancing has some role in
that.
>> Absolutely.
>> Absolutely.
>> Yeah. Yeah. Completely.
>> Um there's one more thing that server
meshing brought us that's not to be
that's not negligible is a very
substantial gain of performance on the
game servers in general. So like 324
game servers were running, you know, we
had a very low bar for acceptance on FPS
for game servers because we just had to
deal with so much.
>> Nowadays like server FPS is is, you
know, magnitudes higher. So that
actually allowed some of the content
we've already produced actually shine
because it was working properly. And so
that's because servers have less to
simulate. We can optimize their
workload. We've also reduced even I mean
we've talked about this before but we've
reduced the size of the game servers
because they just have to simulate one
area and so overall we're trying to
we've meshing has improved server
performance by big magnitudes.
Um
yes chat no my head is not smaller. My
hair is just bigger. It was very windy
and rainy today and it's just whatever.
Uh no I haven't had a dye job. It's
grayer than it's ever been. Uh, no we
are not taking questions from chat but I
I will comment on every one of you
commenting on my appearance.
Um, so that's static server meshing. We
know the next big uh stage of of server
meshing is dynamic. Uh, what can you
tell us if anything about that? Well, so
the the dynamic dynamism in
>> dynamism dynamism
>> dynamism I guess. So we've we've run
we're running out of words internally to
define what the next step of server
meshing is. Currently we're working on
quasi dynamic server mission server
meshing which is we're trying to iterate
on the static mesh right to bring it uh
uh so that if an area is empty right and
nobody's there we can spin down a server
and if people go to that area we can
spin up a server to achieve all this the
all of the mechanics required for a full
dynamic mesh need to be there. So like
mass authority transfer between between
servers because when a a server goes out
and it has x amount of entities that it
currently has authority over those
>> it needs to give that to another one and
that obviously you don't want that
process to lock up the m the the parent
server.
>> So that whole mechanism is is being uh
is what we're working on at the moment.
In fact, we've done over the break the
team has actually reached a milestone.
We were able to run with our internal
testers a test of quasi dynamic server
meshing internally. So that's good. I
mean it's the first test so you know a
bit rough but it it basically requested
I think 200 servers to run the mesh.
That was a little bit of [laughter] but
yeah [snorts]
our ops teams Ahmed specifically I got a
call from Ahmed immediately but anyway
so so so [laughter]
wait so I you've been calling it quasi
dynamic and I've been trying to workshop
a new name for you and I've just got
just a little bit of dynamism but so so
you did your first test of just of this
quasi
>> Adamic like hey server you try to
determine how much you need and the
first thing it did was ask for 200 more
servers.
>> Yeah, exactly.
>> Well,
>> yeah,
>> you know,
>> a little bug in the assignment system,
but
>> that sounds like human nature,
>> correct?
>> Uh, so that's what we're working on
right now. That's the next step for
towards the full dynamic mesh, right?
Obviously, the goal with the dynamic
mesh, just to recap it, is that instead
of having a a a subdivision that we
pre-make in advance, like currently
every patch, we look at the territory
assignment is what we call it of like
what's coming like, oh, we have an event
at this place and you know, most players
are going to go to this system and so we
adjust the mesh, right? And uh sometimes
we get it wrong and it's a very manually
intensive process and we don't want to
keep doing that. So the goal with the
dynamic mesh is to be able to just adapt
to where the players are, the cost of
the location they're in, to be able to
provision compute dynamically up and
down. So there's also the unfortunate
cost equation in this, right? The
current static mesh will always
provision a server for every to every
territory that's configured. And so
there's a little bit of savings we can
go and get there. But more importantly,
the dynamic aspect of it is to be able
to always make sure that the proper
compute is available for players when
they're in an area doing something,
right? So that's the goal.
>> Uh Chad's debating whether the servers
have actually achieved AGI and have
played the game and just like [laughter]
like we've played the game, give me 200.
U
so that's server meshing. Yeah. Last
year
uh uh
last year was coined as the year of
playability.
>> So uh uh we've just we've just
backdoored a whole bunch of play uh
playability improvements that server
mission which dropped last year enabled.
So we've had all of those improvements
last year that made the game far more
playable than it was in any previous
year.
>> But that that that phrase has has been
used. It's weaponized. It's it's thrown
back every once in a while every time
somebody encounters any kind of bug
whatsoever. So So I want to talk I want
to talk and that's not entirely unfairly
because everybody's
everybody's bug that they're
encountering is the most important bug
in the universe at that given moment and
and that one is not resolved because
they're encountering it.
>> I want to talk a little bit more about
what we did gain last year. So, it's whe
whether whether that's the the transit
system stuff, the the 30ks finally being
killed, the the creatures and boss
fights and stuff. Uh when you tell me,
how did our year of playability go in in
your head?
>> Well, so I think that you know,
obviously coming from the server meshing
improvements, uh there was also some
failings at the beginning of the year
where we saw I mean transit became a
very big problem. That's an example of a
system
>> only because we tried to use it.
>> Yeah. Well, yeah. Or tried to serve you
but badly. Uh but the uh you know that's
an example of a system that was built
years ago that wasn't properly scaled
over time. And so when you added dynamic
gateways for the transit system plus the
meshing situation that became a really
problematic system and so that was I
think the first order of business once
we launched 4.0 you know, was like we
need to really take action on transit.
And so we talked about this last year,
but we did create the transit heroes
group uh which was a a coalition of uh
volunteers.
Uh well, they got volunteered.
Volunt
>> volunttold. Yes, exactly. uh to come and
give a bit of oversight on this to look
at the system to see okay what do we
need to actually you know have stable
elevators and trains and you know make
sure that that's always available
because the traversal of the game if
that doesn't work then the game doesn't
work at all right if you can't take an
elevator to get out of the habs then you
know
>> you've got
>> good luck right
>> so uh the transit heroes team I think
has done a fantastic job they haven't
re-engineered the system in in that
strike team, but they really focused on
self-healing strategies, right? If a
manager loses a carriage for some
reason, for any reason, well, just
create another one and get this this
thing rolling, right? Uh now, they
couldn't fix in this effort. They
couldn't rebuild the system. There was
fundamental flaws in how it was
engineered uh for for server meshing
support and so but at least they got it
into working condition. So, I do think
like if you look at the game now,
>> transit is no longer the big problem.
used to be, right? Like it actually
functions when you need it. Uh now that
said,
>> most times
>> it fixes itself, right? So there it's
still getting in a weird state, but it
fixes itself. So
>> uh you know, we've done more about this
and we'll talk about that later.
>> We're building the transport system.
>> Correct.
>> Concurrently. Absolutely.
>> So while this team is while this team is
repairing the transit system, we're
building a new bespoke transport system.
>> Right. So, so transport is basically the
the fix for this, like the real fix.
>> Let's get to the let's get to transport
when we when we talk about what's so
what what what else did we get last
year?
>> Uh, well, I got a list here that I I
worked out a little bit with Yen's uh
just to gather up because the game is so
big. So,
>> so I'm going to I'm going to limit you a
little bit on this time. You you've got
you've got
>> Okay.
>> You've got I'm going to give you five
minutes.
>> Sounds good.
>> I'm going give you five minutes.
>> I'm being time
>> because we because we do want to get to
the new exciting hot. This is important.
>> Okay, so we talked about 30k protection.
>> My clock.
>> Okay,
>> go for it.
>> Go.
>> You should be a producer. Okay, 30k
protection. Uh transit improvements,
right? To make it stable, h a stable
tech base for the content teams. What
doesn't show is that to achieve the
content we shipped uh in 25, we actually
froze a lot of the technology to give
the content teams a stable base to work
off. before it was a bit more of a
mayhem. So, we did that. Um, we uh uh as
we built all of this content last year,
so a monthly patch was a very heavy
cadence.
>> 10 patches last year.
>> Yeah. Uh, you know, I think that what's
really cool is that we've built kind of
a library of locations and events that
if you start playing Star Citizen today,
there's that to do, right? It's like
that. We never had that before. like a
real set of locations that have like a
full-on, you know,
>> uh, storyline to follow. So, that's
really cool. Uh, in these locations,
we're able to ship some creature, some
new creatures. So, a lot of new
creatures and boss fights. So, we had
the first couple boss fights this year,
uh, you know, with your mandi,
Stormbreaker. Uh, so that's like a brand
new, you know, design discipline for us
to design boss fights for multiplayer
elements. So, that's that's new. Um,
spawn and hanger is something that we've
actually been able to enable this time.
So we tried to enable it in 20 end of 24
and that was a bit of a disaster. 25 now
spawn in your hanger is there. So if
your anger is available, you spawn
directly there. That's actually a very
large quality of life improvement. I
play the game a lot.
You know, not having to go to the Habs
is fantastic. Uh we've been able to put
weather in key locations, including some
of those big hero locations we talked
about. We're hoping to do more, but you
know, for now it actually is there. Um,
two new star systems. We talk about this
jump gates, which is a whole, you know,
a game on its own. Uh, the way it
functions is actually super interesting.
As you're going through, the zone is
moving and you're moving within the
zone. It's really a fun system to go
through. So, that's that's in. Um, we
fixed the goddamn bounty beacons,
[clears throat] which is one of the
coolest loop in the game. I love it.
And, uh, you know, that was obviously
not working. So now we've actually got
them to work again which is a big a big
win. Uh quantum interdiction was in the
same uh the same bag where now with a
server mash having proper interdiction
was kind of difficult. So restoring it
was an interesting one. We had to
actually build systems to allow that
because the not every server has a view
of the entire shard anymore. And so in
order to interdict cross server you
needed to have special tech to do that
that fix also quantum linking. Now
routing is still
>> there's still issues right it's getting
there but that at least there's been
some quality of life improvements on
that side uh that we've done this year
freight elevator
ongoing [laughter]
ongoing ongoing
>> we'll have we'll have a whole section on
freight elevator
>> but there's been a lot of I mean if
throughout the year freight elevators
have received tons of
>> compared to where the compared to where
they started when we attempted to
>> yes
>> push when we pushed them to the
forefront or an event in yeah compared
to where we started
>> but let's
>> we talked about server FPS and stability
from from the meshing uh and the cleanup
that we've put in place uh also we've
pushed a at the middle of the year at it
came for you guys at the end of the year
but actually we merged it at the middle
of the year but uh a whole new tech base
including at least a year of graphics
update including Vulcan uh coming into
the game now uh that's that was what
will allow us this year to do some some
pretty large changes as well. Um, the
first weaponized mech. Uh, so the Atlas
came in. So that's also a really big
boost. We still don't know if it's a
vehicle. John Crew and I have a this
ongoing feud. He says it's not. I say it
is.
>> You're dipping into content here. I'm
not going to let you count the I'm not
going to let you count the content.
>> Oh, that's fine.
>> I'm not although exists.
>> The the jump jets are were a feature. I
said the jump jets were feature. Um,
>> give you half credit for the
>> correct. Uh, [laughter]
thank you. Thank you. I will take that.
Uh, comm's notification got a big
facelift. Uh, that's something that we
want to use a lot more of and so we
needed the proper tech to be able to
render that properly. Uh, and not just
the quip lines, which you know, you
need, you know, you need more immersion
than that. So, that was actually a
pretty big thing with facial animations
and tracking. And so, that's that's in
there. and then cross shard progress for
events. So, uh, you know, what powered a
lot of the content this year was a new
service in the background of the game
called the scenario service, which, uh,
you know, uh, whether you're doing, you
know, clean air or, uh, the resource
drive last year, the cross shard
progress of these events is tracked by
the scenario system. And so that's how
we were able to show tables about, you
know, how many resources and resource
drives, stuff like that. Exactly.
>> Um, that that's a that's a pretty good
list. You you just got lit. It says 502.
>> Yes.
>> Look at that. Look at that.
>> On time.
>> Um and you didn't even mention like item
recovery.
>> No, I did not.
>> I didn't mention it item recovery. Um
>> and there was one other that I had until
I got distracted by my own clock. Blur.
>> I got distracted by my own clock.
Basically, you you know, it's it's
it it's it's hard.
Let me think about how I want to say
this. If you've been watching this show
long enough, you know that I'm not above
taking a few taking a section, in this
case, five minutes of of the section to
basically
go through some talking points that I
won that I that I think are important
that I I I think I think people want to
hear it is
we have had things like the year of
playability thrown back at us in comms
and we you see I tune into a Twitch
stream or YouTube stream and I you know
and some somebody gets a very a very
a very frustrating experience. I was
looking at an experience of of of of
somebody, you know, you know, just going
to town with their whole sea and they
they went through a jump point and it
took them trying to go to one system. It
kicked them back out to the next system.
Then the thing crashed, then they got
back in and the spindles were they tried
to open the spindles, but the spindles
were closed. Looked closed, but they
were actually open. So, they were they
were sing they were in the right they
were in the wrong state. tried to get
refuel, tried to go to refuel. The
refuel thing wasn't working and then
stowed the ship and spawned the ship and
it didn't come back on the docking port.
It came back in their hanger full of
cargo and it's like this. It's like
we acknowledge that.
>> I'm sitting here I'm sitting here saying
we acknowledge those things but there
was so many massive improvements last
year. There is this is you used a used
an analogy last time we did with this
about about I think it was the the the
big freight container the the the big
giant Suez canal shipping things that
you don't just turn the direction
around. You don't just spin the wheel
and suddenly you're facing a new
direction. It takes time to move these
things and
>> the efforts of your teams and the people
under you, these strike teams, these
hero teams as you call them, uh to turn
that ship, this ship that we call the
persistent universe around in the last
year, has been phenomenal. If I'm
allowed to have a personal opinion,
being the shill for the company that I
am, has been phenomenal. We haven't
gotten everything. [clears throat] We
haven't gotten everything. We still got
another year. We still got another year.
We still got another work continues.
Yeah,
>> but I want it's my show and I wanted to
take five minutes to acknowledge the
tremendous work of those teams and a
whole lot was accomplished last year in
addition to the amazing content work.
You know, I said 10 patches and I
realized we actually had 11 because we
kicked engineering out.
>> Yeah,
>> we kicked engineering out in December.
So, it was actually 11 patches. You
know, 11 patches in 12 months is pretty
crazy. So
you allow me to have a moment to have to
have some time to sit there and sing the
praises of those people because I've
I've seen where we were
>> and I know where we are and we're in a
much better place now.
>> Still
is just the beginning of the
>> still places to go.
>> Yes,
>> that that scenario I just described was
like last week and we have still places
to go.
>> Yes. But that doesn't mean we don't
acknowledge
>> I think it's a testament to kind of the
systematic approach we've taken to solve
some of these issues instead of uh
previously we used to just assign
tickets to people and they would you
know find the fastest way to solve it
and now we kind of work as a team with
the teams in quality assurance that are
basically the arbinger like no it's not
fixed I can still repro right and these
guys have been going through a
systematic approach for it I think that
That's that's paid off a bit. You know,
>> we get better.
>> Yeah.
>> Not always,
>> but we try and in this case in this
case, we've definitely gotten better.
There were there were some big changes
to to internal infrastructure and stuff
in the last year or two. And we're
seeing the results of that stuff. All
right. So, now let's go into some
specific updates here. So, let's talk
about the transport system. We don't
need to talk about trans transit so much
anymore. The transport system is what
will one day
>> replace this thing. Uh I I've heard talk
about there being a tech preview I
assume. Talk to me about the transport
system.
>> Well, so
Transit was a problematic wasn't
designed for server meshing. And so
transport is a rebuild a complete
rebuild of the transit system but using
uh more server native uh d uh sorry
server meshing native approaches for how
different pieces are going to manage
elements are streamed out and streamed
in.
>> We're also moving away from some
previous misconceptions that were put
into the transit system. Uh, for
example, one of them was was responsible
for trains going into space. We don't
want trains to go into space. So,
>> you might not.
>> Yeah. Well, I mean, as unless we do a
space elevator,
>> astro train.
>> Yeah. Astro train be great. Um, so the
state of transport, right? So, um, at
the end of last year,
>> so I'm going to pause.
>> Uhhuh.
>> What's included in transport? So, so
what?
>> Oh, so what are we what are we talking
about?
>> Transit. Transit and transport manage
elevators, in ship elevators, trains,
anything that has to move when you press
a button and you call it. So, okay, it's
a network of carriage, peripheral, and
gateway. Okay.
>> Right. So, you take an elevator to go to
your hanger,
>> that's transit,
>> you take a tram,
>> you take a tram,
>> anything that's automated. Anything that
moves you not under your control,
>> right? And he's the one moving the
carriages, right? So he needs to deal
with carriages being streamed out you
know like prediction for that stuff. So
uh so transport is a rebuild of the
original transit which has been as as we
talked about problematic. So the state
on transport is at this point we are you
know it's functional. So we've uh the
team at the end of last year actually
completed the first transport link which
was we we and we tested this internally
with our QA teams extensively at this
point. all of the new Babbage Habs
links. So, we took one link in the
universe, that one, and we tested the
crap out of it. Right now, that's a
static link. So, it's going this when I
say static, it means the two points that
the elevator goes to exist. They always
exist. Uh now, uh so we know that works.
Then the state at the moment is we also
support hangers. So these are dynamic
gateways because when you're if you're
online and you're at the location, your
g your hanger will spawn there. That's a
dynamic gateway. When if you leave that
gateway disappears so the system needs
to deal with dynamic gateways. The
previous system
>> did not
>> candidate and the candidate was the
piece that wasn't great. And so we've
got internally at the moment new Babage
uh we've got hangers and HAB. So the
state of transport now is the team is
working at converting all of area 18. So
we're talking habs, hangers, transit
trains, all of area 18 to the transport
system. Um so
we're going to go to tech preview with
that. That's our plan. And the reason
why we need to go to tech preview is
because we need players. Uh we've tested
this internally. We can't muster as much
players as we want. So, we're going to
try to see if you guys want to come and
help us out test the new Babage Transit
for real uh on a tech preview to
validate all the assumptions that are in
the system.
>> So, we're going we're going to we're
going to launch a tech preview and ask
people to just come and ride the
elevators.
>> Correct.
>> Come and ride the trams
>> and their hangers.
>> And their hangers and hope nobody dies.
>> No trains in space. No doors opening to
nothingness. Uh you know, that'd be
great. Uh, no passing through the floors
in the in the carriages.
>> The the the the single most exciting
tech preview we'll ever do, but
incredibly important because because
it's a tech preview that doesn't just
affect 18. It's one that can literally
affect quality of life in every single
landing zone on board every single
spaceship because that have elevators
and stuff within space stations. It just
it's it's going to be this little thing
for 18, but it ripples out to
everything. And so after a tech preview,
if everything is validated, there's one
thing too we want to try to avoid is the
train prediction taking like you and 32
seconds to come in where the train says
train arrives in 1 million60. You know,
obviously we hope that's
>> I just thought it was a metaphor for the
project. [laughter]
>> Am I allowed to say that?
>> At this point you are. Uh so the on the
after tech preview we're going to scale
this out to every landing zone and we're
going to see what which patch this will
load in. But at that point we hope to
bring transport in and completely
deprecate the transit system uh from the
game and and nuke it from orbit.
>> Cool. Yeah.
>> And that's next week. [laughter]
>> We don't give dates. Best effort, but
it's looking good. like this tech
preview is going to be where we're going
to evaluate really like where we're at
with scale because the issues of transit
typically come up with scale most most
of the time.
>> Fair enough. Um I told you we get back
to freight elevators.
>> Yeah.
>> So uh what what can you tell me about
about freight elevators and and what
what what still needs to happen?
>> Sure. So the
the Fred elevators are way more
complicated than we can imagine because
they get affected by other systems like
hangers, like planetary locations. Uh
there's also
multiple flavors of them, top loading,
side loading, and they all operate very
differently. So this year we've had
issues at the beginning of the year
clearly with the freight elevators like
losing items and uh obstruction blocking
them from functioning. Uh
>> you said the beginning of the year but
that really came to a head in July where
we had even an event that would rely on
them which was you know in retrospect.
>> Yeah.
>> I know. Well, it's it's we we knew there
we knew there was we knew there was a
collection of issues, but we also all of
our data said they were only
>> localized localized. It wasn't until we
went to scale.
>> That's right.
>> That that we realized, oh, this is
actually even worse than we thought.
>> Right.
>> It's also coupled to a couple of things
and for that event specifically, which
was, you know, we concentrated missions
in key locations. That's one thing that
has been in our discussions all year was
how we distribute missions, right? How
we, you know, if we if we launch a new
mission tomorrow morning and we send
everybody to the same spot, that is
problematic. Not just because it's not
fun because it's a traffic jam, but also
it causes other issues. And so that that
we learned a lot from that on the design
side, I think, overall. But the so Fred
elevators though the so we're pretty
happy with the some of the core
mechanics but there's still very
egregious issues that we're tracking. So
there's roughly 73 total issues that
we've we know about. Uh 51 of those have
been resolved. So I've asked our uh one
of our teams in uh our Nathaniel Fischer
resident expert freight elevators uh to
track that. So the the rest of these
issues are some of them are are really
problematic. One of them we actually
discussed you and I just before the show
was, you know, how uh if you're turning
in Wiccolo items, you need to put
>> you have to be put things in a box. You
have to be able to put things in a box.
>> Correct. And so
>> you have to be able to put things in a
box and have it suck up that box.
>> Yes, I agree 100%. And so that's one
that's going to be one of the first ones
I think we need to look at. The other
one is a bit more pro problematic
because we don't have a proper repro for
but sometimes there are lost items that
fail if there's like a a backend
slowdown when things get stowed. So we
have a couple reports for this not many
but the ones that we have are are
critical. And so you know this is a kind
of a rule we've set on the CGP team. So
Yensz and I are pushing this to
everybody. Like the golden rule for
everything related to freight elevators
or or anything that touches inventory is
a player should never lose an item
interacting with these systems, right?
We need we need trust in them 100%. And
so that's why we're tracing on those
issues. So there's still a lot more work
required on freight elevators for
different edge cases. Uh a new one that
we started seeing in 4.6 which seems
affected by another change, but is
sometimes like putting stuff on the
elevator, not on the grid, will cause it
to disappear,
>> right?
>> Which is kind of a physics cleanup
conflict. So, I know we're looking into
this right now because that's a that's a
big one, but uh and then uh everything
that has to do with stacking. So,
having a stack in your inventory that
you want to untow onto the freight
elevator, that mechanism from a backend
perspective, right,
>> is actually a creation. I know that
sounds weird, but you have a stack of
10. That's one item with a stack of 10.
You may bring it. It's a creation of
nine. So, that bit is not stable right
now. We're trying to improve that uh
that mechanism.
>> It it it's it's hard because there's
there's a lot of the chat right now is
is debating Wiccolo at the moment. And
and
>> why did I say his name? [laughter]
>> Well, if I say it three times, he shows
up on the screen. Uh but a a not
insignificant part of the dislike for
Wiccolo is directly related to that
freight elevator. It's it's just there's
no it's we have a section later on we
got we we asked around we'll get to but
I'll give you a preview but we we we we
started talking like what is what what
is the single greatest quality of
quality of life thing that that we that
we can do that we asked I went around
and I asked a couple head honchos here
around the company because I I was
curious. I I did an interview before
like like what is what what to you is
the single biggest uh uh quality of life
thing we could do the single biggest and
on more than one occasion shout out to
Yens I'm going to spoil it here
>> not losing items just
>> just not losing items just just that
seemingly simple
>> yes
>> benign
>> innocent little thing like if if if
everything else is important everything
else is super important everything else
is super necessary
It absolutely is. But God is my witness.
If we can just make it so people don't
lose their items like
so, so shout out to the heroes of the
freight elevator. Uh hero Hero Squad, I
thought it was strike squad, but you've
rebranded it during this call as Hero
Squad. And I like it,
>> right?
>> So, we'll do it. Uh, and everybody, the
people on item recovery, the people, the
people in the new inventory, people who
are working on the inventory system
right now, it's everybody working to fix
that because that's just the most the
single most demoralizing
thing in the world to me. Um, speaking
of item recovery,
>> yeah,
>> we launched V0 or V1 or whatever the
heck we we called it, T0. Um, I'm
hearing that there's a T1 on the
horizon,
>> correct?
>> Talk to me about it. [snorts] Well, so
the obviously tier zero was a fairly
large change to the game so that uh in
the case where you die in the verse,
instead of having to run a corpse run to
recover your items, you would actually
respawn with them. This was mainly done
to, you know, we're in an alpha game,
you know, we needed to do some
compromises. So, we looked at that. So,
item imprint, there's multiple names for
this at this point. item imprint
uh uh item recovery tier one uh
entitlements 2.0 those are all sort of
related. So the gist of it is and this
ties into you know some other subjects
but um is that currently when you play
the game right and you look at your ASOP
terminal I think I've said that last
time but I'll still go through it again.
When you look at your ASOP terminal, the
list that you see there is the list of
entitlements that you own. Which ship
that you own, you have a right to,
right? Then that's cross link with the
actual ship. Do you have a that you know
this entitlement? Let's say it's econ.
What is it in the game? Right? And where
is it? And that's how the ASOP terminal
shows you the list, right? So that's why
you're able to have a row when there's
no ship and it says retrieve or deliver,
right? That creates the ship. then
deliver brings you to ship on the
platform. Those entitlements currently
they don't live across patches. We
recreate them. The first time you log
in, there's a big process that
reconciles your account, grabs your web
purchases, grabs your LTP records, and
recreates those entitlements.
Um,
obviously long-term persistence has
always been kind of a diff it's a
difficult problem to solve. It sounds
simple but it is not I assure you. Uh
but
in order to facilitate all this and also
other item recovery needs we're we've
decided to basically persist those
entitlements across batch. So these
things will never get wiped anymore. And
so losing a ship is not going to be a
thing. That's not going to be pos
technically possible. We don't we never
really delete entitlements. And so you
have insurance on those records so you
can claim insurance. The only way to
lose a ship will be if you no longer
have insurance on it. You still have the
deed for it, but you can't claim it. So,
item recovery is a rework of the
entitlement system. Uh, it touches on
how you claim insurance on ships. Uh, it
allows snapshotting of ships, but also
FPS items so that these live with an
insurance loadout that we can we can
keep and recover. and then will give us
the ability to recover or claim your
your even FPS items. So, think of it as
an insurance system for FPS items,
right? So, this whole mechanic ties into
LTP as well. Uh we're also hoping
through the system to solve some of the
issues that exist with, you know, taking
components off of a ship, then claiming
the ship, losing the components, and or
in some cases being able to duplicate
some default components. This whole loop
is a you know insurance has always been
a problem designwise for how this
functions. So item imprint v1 allows you
to imprint items save that state and
then recover it on death or when you
claim insurance. All right. So, I have a
couple questions here based on Sure.
what I heard. You keep mentioning
insurance. Are we are we talking Are you
saying that insurance will be in
alongside V1 or just Yeah, exactly.
>> Correct. It's the I say insurance
because that's the same kind of loop in
terms of what the services are doing.
>> Yeah.
>> Uh to do this, but basically it's a
snapshot we recover from.
>> Gotcha.
>> Exactly. So when when item recovery v1
comes out, it'll still be much like it
is today as far as everybody will just
have global. Everybody has LTI on
everything at the moment right now until
until that very specific gameplay system
is implemented. So this is not that
>> you're using lowercase I insurance.
>> Lowerase I. Yes.
>> Sorry, I just needed to I'm like I
>> I didn't think ship insurance was
coming.
>> Yeah. So, just just to clarify that
before before folks go off. Um, you're
saying you're saying that because it's a
change to the entitlement system and
everything will just get snapshot and
moved over. When you say people will no
longer lose ships, you're talking about
that whenever whenever a patch comes
out, people come in and they're talking
about the ships that they've earned in
game, the ships they've either bought
with AEC or stolen or whatnot, those
will those should persist. If we have an
entitlement for something,
>> we no longer wipe that between patches
at all. We keep it completely.
>> Okay.
>> So that's should give us a lot more. In
fact, it is exactly the way you would
expect it to function right now except
the way the systems were built in the
past didn't account for that. And so
there was cases where you could lose
something that you own uh because it was
left unto stowed in a shard or you know
something like that. And so now with the
entitlement system we keep that cross
batch. So, the first question I have in
response to that is how will people get
rid of things? Because because quite
frankly, I I might go joy riding one day
or I I I might buy a I might buy a thing
for AEW and fly it and then decide I
don't want it. I don't like it and now
it's just sitting there staring at me in
the ASOP. If if these things don't go
away between patches now, every time I I
want to try to I try a ship or I just
move away for a ship or or John Crew
nerfs the hell out of the ship and I
don't want to fly it anymore.
>> God damn John Crew.
>> Uh I might want to get rid of it. Will
there be is is there going to be a
mechanism for getting rid of these
things?
>> Well, not with item imprint, right? As
part of this, no. But there are uh I
don't want to go too much into details
into this, but
>> I can give an example of like you have a
ship filled with cargo that you stow
into your location inventory in New
Babage
and you claim that ship, right? In the
current way the system works, that
cargo's lost, right? That ship will get
deleted and you're done, right? You get
a new one,
>> but it's the same entitlement, right?
With the new system, we have the ability
to also show you ships that you own that
had an entitlement on it. And so what
that means is you could claim that ship.
You'll get a new, let's say it's a
Caterpillar filled with cargo and you're
like, I need to claim it for some
reason. You can claim the ship. The
other ship will be bricked, right?
That's how the design is functioning. So
it's no longer usable, but you can still
retrieve it. You can still retrieve the
brricked ship and get it. And then if
you destroy the ship or tow it out, then
it'll go away from your entitlement. But
there's going to be more system of
course to remove that as from your ASOP
terminal longer term. But not in this
phase, but longer term. Yes.
>> Yeah. I'm just thinking about the I'm
thinking about the the the long-term
players, the the the people who have
been here for a while who have acquired
a rather massive fleet already. And
>> I'm a victim of this,
>> you know, and you you start you start
buying ships and it's I'm guilty, but
there's just sometimes I don't I don't
want this anymore. I don't I don't want
to I don't want to look at a I don't
want to look at a I don't know a rock DS
anymore. [laughter] Just want it out of
my ASOP. I I I I I I bought it
mistakenly from Astro Armada. I just had
a
momentary memord
staring at me in my ASAP for the end of
time because you've done a wonderful
thing with item recovery. you know,
Versist.
Yeah. Some things are saying we don't
want your ships anymore.
>> I'm just saying some things aren't meant
to be persisted. So, I I I just want to
take this opportunity to to to just
convers.
>> How much time do you got? [laughter]
>> Uh Jared hates the Rock DS confirmed.
Oh, you haven't been watching for a
while. if you're just getting that
confirmed now. Um,
Jared, you're not supposed to be going
on shows and telling people you you hate
certain ships. It's you're supposed to
be championing everything. I'm like,
>> "Yeah,
I hate the Rock DS. It's just It's just
>> It's comfy though. It's got to get
>> Hold on. Let's just do everything the
first rock does, but require two people.
Look,
I've never lied to you. I never will.
It's it's the it's the only promise I've
ever made, people.
>> Um,
you've been mentioning long-term
persistence. So, let's let's just wrap
up this
>> the the the story this storyline of of
of of losing of losing stuff, keeping
stuff. Uh, the last time last time we
had this conversation, uh, you talked
about utilizing this this this this
entitlement system to this. Is that what
we were just talking about or is there
more stuff?
>> There's more. So, we're I mean there's a
lot of work ongoing on this on the
long-term persistent side. So, just for
those who don't know what long-term
persistent is or LTP um
is a mechanism we put in place to allow
you to keep things between patches,
right? So um the
every patch we basically destroy like
when you come into four to seven when it
comes out uh that's a brand new database
right the whole thing is fresh and then
we recreate things. Now why do we
recreate things? It's because these
things are still changing. So the hornet
you had in 4.5 is probably different
than the hornet you have in 4.6. Item
port locations have changed, materials
have changed, serialized variables and
all the data that goes with it has
changed.
>> The gold standard Aurora that we just
launched is technically an entirely
different ship. The the whole entity is
different.
>> Exactly.
>> And what under the hood to the to the
backer it looks like, okay, you just
added some you added some fins and blah
blah blah, but under the hood, it's an
entirely new set of entities. And so,
um, in order to, uh, allow us to keep
stuff, we've built this system on the
side that kind of keeps records of what
you own. So, it says you own a hornet,
right? Um,
that system has always been kind of a
not I don't want to say a crutch because
it did function for a long time, but
we've outgrown it quite a bit. Uh, there
are also many cases where you would we
would remove records of things that you
own because they're in play in a shard.
that's been uh proven to be a bit of a
bad decision overall. And so that's why
we've had uh multiple issues over the
years of like players losing ship
entitlements in the new patch or having
more items than they were supposed to
get like you know some people have shown
some screenshots of demultiplication of
things uh between patches and so it's
been a big issue right so with with the
item imprint work we're tying into that
we're reducing the footprint of what LTP
manages by a lot because it will no
longer store your entitlements we just
keep those as is. So that's one big bit
removed from that system.
>> Um the other complexity on that side is
that it needs to manage nested
inventories
and that
>> back to the freight elevator thing.
>> That's just completely crazy. So, like,
you know, I have a handgun stored in the
glove box of my Merlin that's attached
to my Connie that's parked somehow
inside of my, you know, Idris and stowed
in my location inventory. Well, I need
to give you a record for that gun,
right? And so, that system needs to
reread data and store it. And it's it's
really complicated
>> which is why people have gotten into the
habit before a wipe or before not wipe
but before a patch
>> and slip. Huh?
>> Just already I just I know you people.
Uh but before a patch people stow things
in in certain inventories to have their
best chances.
>> Yeah. To kind of set it up, right? So um
on long-term persistence ultimately we
don't want this system, right?
Ultimately we want to get to a point
where we don't need it. Um so step one
is to reduce its footprint. So that's I
part of item imprint is is that so
that's a big deal. Um but the next steps
are very start from the very low level
uh and will require some comp.
We need to be able to migrate your old
hornet to the new one. Right? Uh or at
least be able to know it changed enough.
I need to give you a new one. Right? or
being able to just migrate the shape of
the hierarchy, the item port locations
and the serialized variable formats on
these things. Now, the thing that's you
got to think about the way the ships are
built, right? The entities have
components on them which enable them to
do something. I'll give an example just
for the layman. You have a health
component on an entity that says, "Hey,
I got a 100 hit points." when that
reaches zero then we destroy the entity
or something else happen it destroys
itself right that component is written
in code there's a game programmer that's
maintaining this we actually have a
health component and does way more
things than this but just to keep it
simple so a game programmer is
programming this and he needs to persist
the value of health so that when this
ship is now either put in an inventory
then brought back into the game that the
values of the health components on the
parts on the individual parts have
persisted and we reload it. Right? This
is true for everything in the game,
right? We have serialized variables and
components across the game. There's, you
know, I think your character at the
moment has like 800 serialized variables
on it or something like that, right? So,
those are all different component. Are
you crouched? Are you standing? Are you,
you know, uh health of all the the
limbs, you know, stuff like that, right?
So the programmers between patches they
just change that you know I removed this
one you know and I put a new one in and
then because you know some of those
variables it doesn't matter if it
changes. Yeah,
>> some of them matter, right? If you
change that like it's the it's a
different shape, it loads a different
CGA model, whatever, right? So that's
the big problem about how we need to
forward migrate is we need to do this at
the very low level. So currently our
network team and our online teams are
working at this mechanism to be able to
differentiate the important from the
important SVS, the serialized variables
on components. So that's all across all
components in the game. There's over
1500 2,000 components individual code
components in the game. Uh, so you know,
for example, I don't need to know if
you're crouched when I stow you in your
inventory, right? I don't need to know
that, right? But I need to know that
when we're running and you you're
crouch, right? So we differentiate the
two and then we have a mechanism to
migrate the data format from one to the
other. But when we get that
functionality in and reliable, what that
means is that we will just keep the
database. And that is huge because now
that means there's no longer a process
between patches that transfer stuff or
moves it around or recmputes things.
It's just it's the same database. We're
just moving its version forward on
demand.
Now, we've looked at multiple different
options for that. Some of them were
like, you know, just migrate people from
one to the other, but then we'd have to
keep five databases behind. It's just
impossible. And so right now we're
working at that option. And that's the
longer term vision that we have for
that. So first reduce the footprint of
the LTP system so it just manages some
things not all and then work on the real
fundamental issue which is we need
forward migration on all this data.
How many times in your life has a errant
random unexpected serialized variable
been the cause of
>> in your life?
>> I mean it's crazy. This is the single
most important thing because like in
case you guys don't know every time we
do either well full patch is easy
because we patch server client hybrid
everything goes in one at once. Uh but
when we uh perform hot fixes and god
knows we've done a lot of hot fixing
this year right? uh that's part of our
process now, but there's like specific
steps where we have our our our live QA
team need to do compatibility checks and
uh any change to any serialized variable
added, removed, change the format,
change the data, whatever incompatible
client. And so
getting our our our processes in place
to catch those before they get
introduced, right? Uh is really taxing
because you know there's always a oh
yeah also fix this bug and that make the
whole hot fix incompatible and we can't
launch it. So we have to backtrack,
change our approach, whatever. And so
that's the kind of thing we're dealing
with. This will also solve that if we we
can make it. And before somebody says,
"You should have just made a simpler
game." Benwa, [laughter]
>> have you considered just making a simple
>> simpler game? Yeah. Yeah.
>> Cool.
>> Um, all right. I want to move into our
quality of life section here.
>> Yeah.
>> Uh, we talked about it a little bit uh
before because I just
we've just we just talked a whole lot
about not losing things and all the
efforts being made to not losing things.
But there are other major quality of
life things for me
personally.
>> Yeah.
>> After the not losing the things, it's
social.
>> Yeah.
>> It it it's social. I
the ability to group with people, the
ability to communicate with people, the
ability
not to communicate with people, the
ability to just to just be like, "Oh,
hey, that's a bad person. That's a bad
person with bad thoughts and bad
intentions and boop boop and kick them
into the pit from 300."
>> Sure.
>> And whatnot. Never to see or hear from
that person again. Right. the the the
the all the tools for joining up.
Finally, people have been creating and
managing orgs on our website since 2013.
>> Yeah. Yeah. 13.
>> And this is 2026.
And those orgs still not in game.
>> Correct.
>> Um
>> what are we doing?
>> It's it's we're we're reenacting a
little play because Ben Juan and I have
had this conversation almost verbatim
for a little time. I I'm just doing the
conversation we had in private uh for
you guys right now. Um
so my question Benois
>> friend
person whom chat has dubbed brother my
brother
>> from another mother
>> when Benois when please dear God in
heaven above or down below who do I have
to talk to?
>> Sure
>> give me something good for social. Yeah.
Well, so what is it now? It's all a
blur. Uh a social universe, right? The
last panel that we did at Citizen Con
>> that outlines the vision of what we want
to do with social. Um now with the year
that we just had,
>> uh we had to take a little bit of a
detour on that initial plan, but right
now we we have we have completely formed
the social strike team. And so a bit
like the heroes team, right? The social
strike team its only mission is to
execute this plan. Right. And so um
>> sorry don't bury the lead. There is now
an official dedicated team on this
>> social strike team. Yes. Okay. Exactly.
And so this group uh is currently
looking at all of the components that
make up the social systems now. Right.
Uh fortunately for us the work didn't
stop on this side. Even though we
couldn't enact the changes in the game
the on the backend side of things
there's been a lot of progress on social
and so even though the systems look
primitive in game their capabilities
have have grown quite a bit even in 25
>> uh we do not using
>> so we do have a block list that we uh
leverage now it's simplistic but because
we didn't have the UI resources to do it
completely but uh moving into this this
strike team right covers all areas of
social so Um the plan is to go into four
different uh pillars for it. So the
first order of business is uh the comink
app. So the comink app is like one of
the oldest mobile glass application we
still have. Uh it's kind of an eyesore
because it's like from a dark you know
ghost of future futures past. It's like
from 200 I want to say 1918 at this
point style-wise. Um very old technology
still use the legacy even UI framework
that we had in the game. So we're
completely eliminating that tab. We're
bringing in forward the social uh
application that we've shown at Citizen
Con. So that design is moving forward.
Um so replacing that chat widget, right?
So the the entire chat experience in the
game, we're completely overhauling this
from the top at the moment. So we're
right in the process of changing that uh
and hooking it up to the new systems.
Uh revamping things like you know social
notifications. Currently in our mobile
we only have one kind of level of
notification which is like ultra
important. So to have a proper social
experience, you need to have these like,
you know, system updates, system
notifications, like someone joins,
someone leaves, whatever. Uh looking at
things like combat log and all this the
stuff that we've looked at in the in the
social universe panel. So we're actively
building this now. Uh and that's going
to be the first we don't know I'm not
I'm not going to say which patch is
going to land in. So our schedule is
twofold. There's a content patch
schedule and there's a feature schedule.
The features have to be have need to
have leeway because it depends on where
they're going to land. But that's going
to be the first update to social will be
come link app, right? So rich party
information friend tracking chat app. So
we're working on this right now actively
>> for a 2026
release.
>> Yes.
Yes. I mean it's like you mentioned it's
kind of urgent at this point that we do
something there. Um this will
automatically roll into the next
keep your dad here. Come on. [laughter]
>> On the the next uh milestone for the
social strike team is going to be
looking at the party finder mechanic,
right? which basically allows you to uh
advertise your party uh and then get
people to join in. Like let's say you're
looking for, you know, a gunner and some
FPS guys for your mission, then you can
advertise that. If you're looking for,
you know, friends to go do a specific
event, you can do that as well. So,
PartyFinder, we're hoping is going to be
a way for you to find friends on a given
shard really rapidly. Also, tie that in
with your friendship and your contacts.
Uh so that will be kind of we're
building on the first release which
we'll have now friend and info tracking
into that and so that's going to be
super interesting. That's the second
system we want to bring in. Uh and then
obviously the final not the final number
three of four right is the org system.
And so uh in that space we're taking the
horses on the website from 2013
and we're uh moving them completely.
Obviously, the technology we used to
build that in 2013 are obsolete.
They're, you know, it's it's a really
old system. So, we're bringing all of
this data back into a game service to
manage orgs uh to surface that obviously
game side. So, now have org management
screens uh have your organization chat
in the game uh and then actually be able
to create your organization from the
game as well as well as surface it
outside. So, that's like okay now orgs
are in the game. That's the first that
>> that's that's the whole name and then
the org you know.
>> Yeah. Yeah. Exactly. Like and this will
probably I mean we're still having
internal discussions about how that
surfaces you know in our game. Nothing
is you know always set in stones but you
know probably going to tie into uh FPS
scanning radar uh you know additions to
the when you fly your ship to identify
others with scanning and so the orgs
will be part of that. That's it.
Visibility in game chat in game for your
orgs. Actually having your organization
communications. Yeah, that's that's a
whole another series of conversations,
you know, weighing immersion versus
running around and seeing it burns when
I PVP.
>> Yeah.
>> Above people's heads. It's like
>> Sure.
>> So,
>> let me solo her.
>> Ju just [laughter]
um
>> fun fact, I got to write the original
guidance at Blizzard for that back back
in 2004 [laughter] for World of
Warcraft. Yeah. I I I got to make the
original list of
>> these are examples of really bad uh
guild names for to train game masters
way back when.
>> Cool.
>> Um
>> chat, you've been saying it. It's next
on the list.
>> Yeah,
>> VOIPE.
>> Yeah,
>> VOIPE. If you're doing all this all this
stuff, VOIPE,
>> we're looking at VOIPE. [snorts]
>> Such an important element.
>> Sure. It's all part of it.
>> Uh uh uh Graham tells me it's entirely
your fault.
>> Graham is
>> I don't want to say it. Graham did
[laughter]
Graham did not say that. He heavily
implied it though.
Uh no,
>> Gravis is Graham is more savvy than I
am. He didn't he knew not to say it
outright.
>> Yeah, that's right. We love him. But uh
but he's wrong. No, but uh Okay, so
VOIPE, we're doing improvements there on
the backend side of things. So VOIPE is
mainly, you know, right now heavily
affected by the shard size. So the
original design for this was really made
for the 100 servers and so we haven't
had a chance to go back there at all. As
part of this work, this team is also
going to look at uh the infrastructure
for voice voice transmission
um and we're going to try to you know
make it scale to the proper thing. So
one element that we're we're talking
about on chat and comms is is that um
we're probably going to be moving away
from the uh server chat. So what the the
the original you know global 600 player
chat and move into regional chats like a
true MMO so that you know it's tied to
the region that you are uh maybe
multiple channels for that and so VO
will also be affected by that because it
also powers proximity chat uh and so
proximity voice sorry so we're looking
at voice transmission from the top to
bottom we're changing the whole the
whole back end for this to make it scale
there.
>> What do you have against Baron's chat?
[laughter]
Baron's chat was dope.
>> Baron's chat was
[laughter]
I I mean I mean apparently Baron's chat
was so dope we implemented it here and
have had it for the last 10 years.
>> That's right. Correct.
>> So correct.
>> Sorry.
>> We're also like out of this there's also
some uh movement on uh player reporting
for bad behavior. So, not just blocking,
which is, you know, is is something that
we we have now, but that we want to
expand on, but also like player
reporting on for other players that are,
you know, either bad behavior, profanity
in chat, things like that. Uh,
obviously, we don't at CG don't have a a
large, you know, moderation team, uh, in
game. Uh, so we're going to need some
automated help there that will come and,
you know, clean up some of these
elements. So, we're we're trying to, you
know, really uh tackle communications,
you know, from the top there with that
strike team.
Um,
so there's social, there's not ever
losing an item. Shout out to gameplay
engineering director Yens. Uh, that was
that was his that was his major one. And
then that was that was his uh one. Uh,
didn't feel strongly enough to come on
the show though.
>> No. ends.
>> Yeah, next time. Next time we do a duo,
>> let's sign him up right now.
>> So, not losing things.
>> Yeah,
>> social tools. We'll throw VOIPE in with
social tools.
>> Chat, partyfinder orgs is what we're
going in order
>> as as far as far as major quality of
life. I want to ask you, you personally,
I I'm I'm allowed to say things
personally sometimes. Uh I do it often
on my live shows
>> and then get in trouble for it
afterwards. Ben, I want your personal
thing. If What is your big bugaboo? What
is your big quality of life bugaboo? The
thing
>> personal.
>> Yeah,
>> I've got two. I've added one. [laughter]
>> Scope crate.
>> Yeah. Okay. So, I would say for me in
terms of quality of life, I I love to
play the game in a kind of a larger
setup. Uh, so I have I have a kind of a
a flight seat that I like to operate to
play the game. And this thing has
roughly 13 devices connected to the
game. Managing bindings is literally the
worst.
And so that's my pet peeve. If there was
one thing that I could do for my own
game experience, like other than like
the in-game elements, it would be
completely control bindings. uh you know
currently we did we we rely on device
order for some things and so like
literally you need to have like a kind
of almost a common order for the devices
on the on your machine. Uh sharing these
profiles is very difficult. Uh being
able to bind onto multiple devices you
know to you know to really benefit from
that. Being able to bind on multiple
like the same action on multiple devices
for me is super key right.
That would be my absolute personal
thing. Quality of life to solve would be
device handling in general.
>> And you're announcing you've created a
Hero Strike team for this. [laughter]
>> No, I wish I could just do that, but it'
be cool, you know.
>> So, that's not something coming soon.
>> Well, there is work being done on the
control systems, right? But not not not
that I could say it's coming soon to
Star Citizen. [sighs]
Yeah, unfortunately there's a lot of
work there [laughter]
>> and while you're at you know while yeah
you know it'd be nice if it stored them
and saved them you know you know h
having a system for actually configuring
the made sense and whatever that's all
great and what but if I got to redo it
every patch
>> yeah I know
>> so
>> saving them cloud save across machines
would be great right
>> yeah yeah exactly [laughter] to me then
>> I mean it's the kind of thing where like
we we do I do maintain a couple of of
rigs at CI and people always changing
bindings, but the problem is I can't
reapply my bindings because it's not the
system anyway.
>> So, there are there are there are sits
in the office.
>> Uh there's sims in just about every
office at this point, aren't there? Yes.
>> Yeah.
>> And Benois is a as if he didn't have
enough to do. It's it's his little pet
project. He's he's he's he's intricately
involved in them. It's a it's every time
I come by and he's at a he's at a sim
pet, I'm like, "You have more important
things to do." He's like, and it's
always like, "SOMEBODY CHANGED MY
BINDINGS." [laughter]
SORRY, PETE. I I knew the the emphasis
on it. It's just the number of times
I've walked past this man who it just
like
>> So, yes.
>> I mean, it's because Yogi and I always
are fighting against what the best
binding is. You know, mine is clearly
better, but you know, [clears throat]
>> so we've decided at some point we'll
just fix the binding system so that we
don't have to argue. Just a little bit
when you want.
>> And you had a second one. Uh so my
second one for inside the game is that
we're [sighs and gasps] I've always
found in general like uh
you know like mission chains is a thing
that I like I feel we our gameplay is
always onedimensional right like you do
a thing you finish it missions so we're
I know because I know of things right I
know we're working in on an updated
mission system
>> you're talking about the limitations of
the existing missions you're not talking
about the quality of the work of people
that are working on these things. You're
talking about the tools that they have
to work
>> the system around that doesn't allow us
to do these massive quest chains, right?
And I think that that for me would be a
huge quality of life because you could
go onto a long adventure that takes you
across multiple things. And so
>> Elliot Malty was about to be on the
corner of the building
right now, [laughter]
you know, talking about the tools that
that that are missionable.
Exactly.
>> Exactly. So, I know we're working on we
are working on a on a an updated way to
make missions that is a lot more uh
scalable for that, right? And for me,
that's like like a big quality of life
because I feel you can go in a in a long
on a longer adventure and I think that's
a big quality of life overall.
Okay. I I think that's I know that
that's one that a lot of people would
would would would comment on. I mean,
what they're doing within the tool set
that that that they've had for so long.
Um, I think we should talk about a
little bit of why that Well, maybe not
why, but we can acknowledge
we can acknowledge that the tool set
that was originally developed was not
robust enough. It it was it was it was
not it was not in line with the
directions of a proper MMO. Right. Uh I
it's it's no
trying to decide how how candid I want
to be here [laughter]
and whatnot. It's a mission system.
It's a mission system that can't give
you a reward for doing something like
like we we we built the first version of
the mission system where you do a thing,
you achieve a goal and we can't hand you
a thing,
>> right,
>> in in your and that that it's I'll just
use that simple example as as as as a as
a coloring of the limitations of the
existing mission system for however that
was built and why that was built and who
that was built and everything. We've
made changes internally to fix it. We've
made changes internally to to to adjust
it, to replace it. It's currently
underway.
>> What they've managed to do with the
limitations has been stellar. I was just
I was just uh uh I was just seeing stats
about this. The event that's on right
now, the event that's on right now built
with the existing system, built with
limitations, has our highest concurrency
in the last two years outside of an
Invictus or an IAE. So it's like it's
like they're doing tremendous work.
They're doing tremendous work with the
work with the tools that they have.
>> Yes.
>> We've got to unlock those tools.
>> That's exactly right.
>> We've got to unlock tools for them.
>> Exly. That's for me. That's the quality
of life update
>> because if they can do this with that.
>> Imagine what they could do
>> if they could actually chain these
things together and and and and and
segment them off and and have one
continue after another and and stuff
like this. So
>> Exactly.
and tie into reputation, economy, you
know, so that it actually is one big
loop, right?
>> All right, cool.
>> Now that I've saved your life from LA,
mall be killing you. [laughter]
>> Um, let's talk about some features
currently in development.
>> Sure.
>> Crafting.
>> Yeah.
>> Uh, tech preview just happened recently.
>> How's that going?
>> Good, actually. Uh, I mean, I don't want
to say surprisingly good because the
team did amazing work on it, but it's
it's it's been going super well. I mean,
there's a lot of work left, right? But I
think that we got what we needed from
the tech preview. Um, and it wasn't a
complete meltdown, which is, you know,
always a good thing. Uh but um you know
the the team is working really hard to
try to hit potentially a patch soon with
crafting which uh you know I really
believe that crafting is such a big step
for Star Citizen as a whole. Uh you know
it it it's just uh it will be a
different game with the crafting system
in place. And so,
>> uh, the work that those teams are doing
right now to bring this to life is
incredible. I think that we're
leveraging the technology that we have
to, you know, be able to create runtime
items with different, you know,
properties and things like that. And so,
so far the the first tech preview has
been surprisingly uh, solid and and a
success, I would say. And so, now we're
writing the cotails of that tech preview
to, you know, try to see for a launch
window for crafting. And you can't have
crafting without the inventory rework.
>> Correct. That's right.
>> And and and that that we I actually I
rarely ask a question I don't know the
answer to already. The inventory rework
is in the same tech preview, right?
>> Uh I don't think it was I don't think it
was
>> because if you can't So So you can't
have crafting without the inventory
rework, but the the tech preview for
crafting doesn't have
>> technically you can. They can be.
>> It would just be really bad.
>> Exactly. It's it's just it's more from a
game design point of view. Uh but the
the inventory work is going really well.
Uh I mean some of the people have been
reposting screens recently on the
original concept, right? Uh that was
shown. I mean it's starting to look like
that. So that's pretty good. Uh
>> when does that go into tech preview?
>> We're hoping very soon because like at
this point the every version that I've
seen is fully functional and so we just
really want to solve one thing. This is
one and you say quality of life like if
I have a third one to add to my list.
Right.
The speed of rendering of icons in the
inventory. Right.
>> Right. And so like right now you open
your inventory and there's always a
moment where it's rendering RT like the
render to texture icons for each of
those. Now in case you don't know this
is a full 3D scene that gets rendered
flat right there. Like we have versions
of this in previous concepts where it's
full 3D. Mhm.
>> It's, you know, super nice, but
>> takes forever to load
>> and the the user experience is not
great, right? And no matter the amount
of work we're going to put on the UI and
the functionality of inventory,
the speed of the UI is is really a thing
that we need to improve. And so that's
the part that we're still iterating on
now. We've done massive improvements,
but there's still, you know, we need to
we need to dial that in perfectly
because that's the the part we really
want to solve.
>> But you feel good about it?
>> I feel good about it. Yeah. Yeah.
Absolutely. You feel good enough to
say 4.7 in March?
>> I think so. I think so.
>> Don't put the camera. When he says when
he says that, you got to put the camera
on him. No, you look at the camera. You
say inventory.
>> I think inventory is going to be in 47.
I think so.
>> Okay.
[snorts]
You're going to put the small text after
this, right?
>> No, this is live. [laughter]
This This is live, baby. No, no, no, no,
no small text. And so if inventory
rework is 47, I'm not going to push you
on crafting. It's a much it's a super
complicated thing or whatever. But but
>> and the teams are working really hard
for that launch window if they can make
it
>> for that launch window.
>> We're we're pushing really hard for that
launch window.
>> You're push you're pushing really hard
to get crafting in 47.
>> Yes.
>> In March.
>> Yes.
>> Okay.
>> No promises.
>> No. Pushing hard pushing pushing pushing
hard is fair. Pushing hard is fair. And
it's in line with what I' I've seen.
Yeah.
>> I've seen. So I won't correct you on
that or whatever. You're
>> Now, we don't know what surprises are
ahead. Yeah.
>> But yeah.
>> So keep keep tech pre keep tech
previewing.
>> Keep tech previewing. Exactly.
>> Yep. And for for for for your part,
>> keep logging in to the tech previews and
keep testing. It's it's I cannot stress
this enough. The the the more involved
folks are in those things, the more
likely we are to be able to deliver
them.
>> And the feedback is really key. Yeah,
most of the feedback's okay. Some of
it's [laughter]
some of it's trash to be completely
honest.
Small small amount of it. It's just it's
just what
>> Hey, it is what it is.
>> Hey, the candidate goes both ways. How's
instancing going?
>> Very good. Actually, the we actually had
a summit this week about instancing uh
about getting all of the levels set up
to support it um at this point. So maybe
I can do a quick recap on uh what we've
discussed on instancing before. So
talked about server meshing, right? So
instancing is basically a an additional
system on top of of of server meshing
which allows us to take an area of space
and give it to a a server in the mesh to
manage, right? Doesn't matter which one.
Uh the geographical if I want the
spatial position of this thing has
doesn't matter, right? Um so for example
when you go to your hanger right now
that is an instance right so what we're
we're doing is we're taking this system
that manages this and we're making a
true instance manager uh with it. So we
currently have the backend service
completed for this. Um and so uh what
that provides is the mechanism for
creating an instance that you uh that is
associated with you or your party and
having you know rules for how many this
instance is made for how many players
enforcing player caps and party caps for
that instance managing the life cycle of
the instance. So, hey, we want, you
know, go back to my wow days. I mean,
maybe that's dated now, but like your
molten core instance lives for 10 days,
right? So, the instance manager is in
charge of doing that. So, that systems
in place now. And so, the teams are
currently working at how the entrance to
the instance is going to work, right?
So, well, we know how it's going to
work, but like how it ties into level.
So, level designers put in, you know, an
entrance way. At what point is are you
crossing the boundary? What brings you
to the instance? What brings you out? Uh
transport is a requirement for
instancing. So just ties into all the
discussion we just had like transit
cannot bring you to an instance but
transport can.
>> Okay.
>> So basically we want to power that up
there. So you can imagine um an area of
space that you walk into through a SAS
or an elevator or a transit train and
when you come out you're in instance but
you don't even see
>> you never see that loading
>> demarcations exact exactly now you're
inside the instance you play inside the
instance you can gather items
inventories whatever boss fights etc and
then you can exit through another
transit link and that's it you're back
in the world
>> so if we do this right if we do this
right
you should never
be aware that you're doing it. We we
might have to put some kind of indicator
on there because of like like like raid
locks or whatever. We know we talked
about municipal works, you know, and
like this. So, we might there might have
to be some UI stuff that that to to tell
you to
>> Yeah. Some some screens will show you
like, oh, you can't enter this
>> cuz from an experience, we're it's it's
there's no load screen there there.
There's no hold on, please wait. We're
transferring you to, you know, whatever.
Like you say, it's just it's just you're
going to go and suddenly the world
around you is going to melt away and you
will be in a section of the universe
that is dedicated entirely to you and
your party.
>> Exactly. To play it, right? And then,
you know, we're also talking about at
the moment how the instance manager
responds to the mission system because
we might want to be able to change what
level you're going into when you pass
the the threshold or things like that.
And so, um or the access rights, right?
So if you think back, man, I keep going
back to wow. This sucks, but whatever.
>> In the good old WoW days, you know, you
need to do lower black rock spire and at
some point someone has a key. That's the
requirement that unlocks upper black
rock spire.
>> Well, we have we're thinking about
mechanics in that vein.
>> Yeah.
>> That allow the mission system to lock or
unlock or access rights to an instance.
And so all of this is currently being
managed, but it's going really well.
most of the networking uh capabilities
that we needed have been added already.
So, one of them is that currently when
you go to your instance, the way the
server actually tracks that is we we put
a flag on
>> on your character that enables you to
stream in your hanger and actually view
your hanger when you go there. And we
remove that flag when you leave it or
when you go elsewhere when the hanger uh
is removed. And so in uh in the code up
to now, we only had the ability for a
single one of those on your character.
So we could only give you access to one
instance, but we need to be able to give
you multiple access to multiple
instances because we might have areas of
transit that cross like one instance to
another instance, things like that.
We're going a bit deep with this, but at
the moment those mechanics are are
ready. So the networking bit is done. So
now we're really about crafting the
first experience that we want to do with
instancing
>> and the first instance content will be
Siege of Origin. We announced that
>> Redux Sri Redex says France.
>> Yeah.
>> Um some uh you know that's that's
scheduled to come online. Uh we talked
about it during Citiz Direct. Uh that's
that's that's one of the that's one of
the content drops that are scheduled for
this year.
>> Yeah. Um, basically everything you
should, you know, we've been talking a
little, we've been talking more about a
schedule than I probably intended at the
beginning of this thing, but everything
you saw talk about stuff.
>> Sorry. Everything that you saw at
Citizen Con Direct last year is
scheduled for 2026.
>> So, uh, and we announced at the
beginning of the the year with the first
ISC that we're now going we've now moved
to a bimonthly, that's once every two
months for those who like homonyms. I'm
not above recycling a joke. uh uh
content length. So if you know the the
first one was in January, we've already
stated the the second one's in in March.
The third one will be in in May like it
like there's like there's always a a
patch in May for very important reasons.
>> Um
>> so forth and so forth. So you so when
you when you it's one of those things
where when you look at the content for
Citizen on Direct, you can sort of start
to reverse engineer where where things
go. I'm not going to tell you. I'm
saying you've got the tools. You've got
the tools. You can pretty much kind of
>> Yeah.
>> gather where everything is going to be
and I'd like to see uh your schedules.
And that's just content. That's just the
content stuff because that's really what
we talked about at at
>> I can tell you like from being with the
team this week working on instancing.
Everybody's like super stoked. Like it's
it's like the energy is really high on
like oh man you know how you enter it,
how you exit it, what gameplay is going
to be in it. There's also a big piece of
this which is like some designers, you
know, in this case can design an exper
uh an experience that is repeatable.
Most of the content we've produced this
year was, you know, there's a PVE
experience for it, but it's
fundamentally in a PvP zone. So, that is
giving them those tools to make
something that's fun and repeatable as
an experience.
>> And uh I mean I I just the energy is
really good.
>> No, no, Chad's like Squadron 42,
whatever. I ain't talking about Squadron
42. I made one very plain spoken,
reasonable comment about Squadron 42 the
last time we got together and it got
press articles, so I ain't saying
nothing. [laughter]
I'm talking about Star Citizen.
Star Citizen.
Star Citizen. Um,
where we at?
I want to inject something.
>> Inject.
>> I want to inject something. Yeah, let's
go.
>> Something we haven't talked about. It
came It came from the chat. It came from
the chat.
>> Um, regional servers.
>> Yeah,
>> regional servers. We We have never had a
conversation
>> about reg, shape, or form about regional
servers. It was there in the chat and
whatnot. And I think I'm I'm put you on
the spot here.
>> What What are they asking? Uh it just
says regional servers when ju just what
what what can we do to help the people
who play in the various regions of the
world have a better experience? Is that
the answer? Is regional I guess what I'm
asking is is regional servers the answer
or is there some or are we going towards
something else different that I've
literally never asked you about?
>> Well, I don't know in this case if
they're asking for what I think they are
but let's talk about regions. So we are
we already have regions, right? So when
you play the game, you can pick one of
the global availability regions that we
deserve that we service. So obviously
the US, North America is one. Um the
Europe is one, we have uh East Asia,
Australia, um I forget the other ones,
but I think we have another one. So
typically we look at user data, right?
And if it if a an area reaches critical
mass right at some point then it's worth
it to deploy shards there. So and have
shards hosted in that region. So uh we
do it like between US and EU. Obviously
they share our common backend. So your
inventory system is is hosted in one
central area but then the actual game
servers you're playing on for latency
reasons is going to be closer to your
area. right now. Um,
you know, we we are revisiting our
region kind of distribution for a couple
reasons like we've done some pretty
large without naming any uh any details
here, but we're we've we're in the
process of doing some pretty large
migrations uh you know in in how we host
the game. So there's even if it's a bit
transparent, there is a lot of changes
happening there. And so we are
revisiting our our our region map uh
kind of at the moment. But typically the
way that we've done this is we look at
player data and if we reach critical
mass in an area then it's worth it to
start deploying some shards there. But
it needs to be more than one, right?
Because deploying one shard in one area
is problematic because um you know there
are cases where a shard goes into
trouble for some reason uh and before a
hot fix actually deploy that shard is no
longer usable. So we need to have you
know it needs a mass to be able to go
there. Yeah, exactly. A proper cluster
size
>> uh to be able to get there. And the
short version of that is you're
currently undergoing conversations about
where
>> Yeah, we're we're looking at that
because we we've done some changes. So,
we have access to more regions than we
used to. So, we're looking at that, but
I can't promise any changes. Again, it's
it's completely based on player uh
player using the service.
>> So, during the keybind news
conversation, you know, every once in a
while I'll check Teams just to see if I
still have a job during the shows.
[laughter]
Um, which is which is another which is
another joke I get I get accused of
making quite often and repeatedly, but
it isn't a joke. I really do scroll and
check. Um, Jeffrey P. I added an R
there. Bearded
>> bearded.
>> Didn't mean to add a
>> What did bearded CI say?
>> He sent me a Jira
>> for keybindings. Exporting custom
keybinds to XML doesn't export all
>> 2013 or what. [laughter]
>> He's just sending me Jiraas now. I don't
know what you think I'm going to do with
this, Bearded, but thank you. Thanks for
watching, Bearded.
>> Thanks, Bearded. I I haven't talked to
Jeff in a while.
>> That's actually a guy we should talk
about if we were going to reevaluate
regions. Maybe get him on the show next.
>> You want You want to talk about Jeff?
Let's talk about Jeff. He can't do
anything about it. We know he's working.
>> Yeah, that's right.
>> So, so what do you think he's hiding
behind that beard?
>> We're we're we're in the final stretch.
We're in the We're in the final stretch.
We only have a handful of topics.
>> He does have a big beard. That's not a
joke. He's not called bearded for
anything. Um,
VR
VR kind of came out of I mean, it's one
of those things we've been talking about
it. We we talk about it here and there.
I mean, let let's let's be real. We've
talked about a lot of things over the
years.
>> I mean, we've talked about a lot of
things over.
>> I mean, we used to have VR in 2014.
[groaning]
>> I say air quotes that air quotes. That's
that's like saying I'm a baseball player
because I've played I I played a couple
little league games. It's let's it's
>> a long time ago.
>> A long time ago.
>> I think it was Oculus Oculus Devkit one
>> is what [laughter] was supported at the
time. Anyway,
>> and I used it for 45 minutes and ended
up in the fetal position for the next
three hours.
>> Um
VR is not for me. I want to preface this
by saying VR is not for me,
>> but it's for a lot of people. It's for a
lot of people. And uh uh at the end of
last year, surprise, a a not a fully
blown or fully cooked, fully developed
feature like like we would normally
refer to them. Some what what how do we
refer to it? An experimental
experimental feature of VR.
>> Yeah.
>> Where did this come from? What's what's
going on? [laughter] And and do it
without saying the word Santa silven.
>> No. No. Sure. Yeah. Well, so the there
are a lot of developers at CI that
really like immersive experience and
work, right? And so, uh there's a
contingent of developers uh you know,
also one specific one that have been
really trying to get the star engine to
properly support VR. And so, you know,
as an experiment and to build that, uh,
you know, the the these guys and, you
know, I'm going to, you know, Sylvan in
specific has been really pushing hard to
try to get, uh, you know, Star Engine to
work in VR. Uh, experimented with
multiple different approaches, you know,
over the last couple months. uh settled
on the open XR approach and was actually
able through his own you know passion
and then support from his other
colleagues right to you know get stuff
fixed so that we could support you know
VR in specific cases and so um you know
that's that's how we decided at some
point hey you know what like this is
actually pretty cool let's let's release
it right like we have a a unique chance
at CI to be able to work on a custom
engine and and you know working on
custom technology and So encouraging
that effort, we decide to release an
experimental mode to see, hey, let's see
if people like it. And uh I mean the
response has been uh pretty impressive
overall. I think that it's a
the results that we're able to get in VR
are are a testament to some of the
decisions over the years that were taken
and how the game has been made. And so,
uh, there's there's a lot of little
things that just shine when you now put
the VR headset on that, you know, maybe
if you're playing just on the PC, you're
not going to appreciate as much. But,
you know, uh, and, you know, I'm going
to go Chris Roberts here, but Chris, you
know, always insisted on, you know,
taking the difficult approaches to build
certain features, right?
>> Mhm.
>> Uh, there's a lot of things like, oh, we
could have done simpler on this one. But
yeah, but we did the hard road and we
actually delivered it. And so now when
you put the VR headset on, well, you've
got reverse IK in the seat, right? And
it's like and it's the kind of thing
that now all these decisions have paid
off in this VR.
>> It's a pain in the ass in 2017.
>> Yeah.
>> When when when when poor Evo was sure
was was on it. And now so many years
later, it's like, oh
>> yeah,
>> that part was plugandplay because of it.
>> Yeah. And I mean the even internally the
arrival of VR even before the
experimental mode with ship was you know
tremendous. Like I spent you know a
couple of hours here around our our VR
rigs uh next to my sim rigs to with the
ship team going like oh I want to see my
ship in VR let's go let's go and then
you know cuz designing for VR is a bit
different like sense of space changes
and whatever. So that's really a truly
an experimental mode that we've been
pushing. Obviously, there's a lot more
people around Silan to help him out and
and get this there, but you know, the
the I think that this is a testament to
kind of the technical framework that we
have at CIG that allows that kind of of
effort to not go unnoticed and you kind
of show up in the game.
>> Chat's currently arguing about whether
VR is a low priority or high priority
and stuff like this. It's
>> and the priority at this point doesn't
matter because it's we're just it's an
experimental mode. Y
>> it's a bit like eyetracking. It's a bit
like, you know, all of these side
projects, right? Like head tracking, eye
tracking.
>> It's not an initiative on the same scale
as the inventory rework or as crafting.
It's not it's not it's not a full
initiative. It's it has not taken a
priority over absolutely something else.
>> Exactly.
>> Um
I've only got a couple more questions
for you and they're they're kind of the
big ones and yes people, it's about the
thing that you want you want us to talk
about. Saving it for the end. I've been
doing this for a while. Um, but I wanna
I want I want to take a few questions
from the chat right now before we get to
it because we're actually doing okay on
time here.
>> All right.
>> Um, is the inventory rework is it just
UI or will it actually
apply any additional functionality to
stacking and unstacking and stuff like
that?
>> There's additional functionality but
obviously the big of the groundwork was
the UI you know uh usability but if you
look at the mockups right you also see
equipment. So it's not just inventory,
it's actually equipment plus assignment
on your character. So the paper doll
approach u there's also uh some other
elements like proximity inventories that
are part of that which are pretty large
functionality wise and I think will have
an impact.
>> So it's not just UI there's there's a
lot more client architecture also the
way the
>> the way the UI pulls the data caches the
data and displays it.
Um,
uh, more Twitch drops. There will be
more Twitch drops this year, uh, already
in that. Uh, yes to medical. Why didn't
Levki mold situation have us rescuing
NPCs with medical ships? We'll talk
about that in two weeks when we've got
uh Elliot and Torsten on the on the show
here. We'll talk we'll talk about that
whole event and stuff. So, we'll save
that question for them so they can speak
about their own work. Um, [laughter]
when Nicks won this year.
>> Yeah.
Uh,
that's the thing that got me in trouble.
The thing I I I I did I I I I hope and I
it got articles. CR spokesperson says he
hopes this will be whatever. I'm like,
"Oh, yeah." [laughter]
>> Um,
let's see. There's the There was a gosh,
there was there's one more. I can't find
it. There was one more question I want
to sneak in before the questions that
are already on here. Um, all right. This
section is called
final hot seat stuff is
>> I just read final hot stuff.
>> You missed a [laughter] word. Um
things that are happening in the game
today. Economy exploits.
Economy exploits. And if if you're
watching the show and you're and you and
you're wondering why I'm talking about
economy exploits, it's because I'm going
to get to the next question that you've
got. The question you've had the whole
time. So
>> yeah. Let's talk about the economy
exploits.
>> Sure.
>> What's happening?
>> There are exploits. [laughter]
>> Be better.
[gasps]
>> Well, so uh you know in terms of the
economy in general, right? Uh there
there's a couple I think it's up we're
up to seven or eight right now. So we
first of all we have a strike team on
this at the moment, right? Looking at
all these different things. Uh there's a
couple of ways in which you know there's
been potentially duping
uh ways to earn rewards it's not
supposed to have.
>> I think we're beyond potentially.
>> No. No. Well, yeah. Yeah. Yeah. Yeah.
>> Okay. Fair.
>> And um and so we're looking at all these
exploit vectors, right? To fix them
obviously that needs to be prioritized.
Uh the big conversation that was spawned
from that is like you know we're a game
in development but we're also delivering
life service right and so
>> we don't have a framework for this in
that internally we don't when we get
exploit reports we don't necessarily
automatically prioritize them. Uh so the
conversation that was spawned was like
okay well there are going to be exploits
right it's it every game has a series of
exploits for its entirety of of its life
right no game has no exploits and so the
question is more how do you respond for
it right and so historically
exploits have always taken a lower
priority to ongoing development right
>> I'm going to jump in you're tense
switching between past and present here
I want to be clear you're talking about
the past right now
>> the past
He's he's he's tin switching a couple
times. It makes it sound like he's
talking about today. It's like we're
talking about the past guys.
>> So in the past, right, it's a exploits
would fall be bugs like any other,
right?
>> Depending on the severity sometimes they
got escalated, but we didn't have a
process for this. So now the
conversation is about when we do get an
exploit report, how do we deal with it?
Like how do we escalate it? How do we
respond to it? How do we deal with it?
Right? And so for the current ongoing
exploits that we know about that have a
damaging effect on the economy
currently, we're we're dealing with them
the same way we've dealt with the other
hero strike teams. And so we're looking
at each one of them and confirming the
fixes, right? Because sometimes, you
know,
>> you fix an exploit, there's a second
vector right away. So those are
complicated fixes sometimes. So we're
we're dealing with these things right
away. But the the big thing
that also this puts in light is that
even a a minor exploit at the moment has
a tre a very large effect on the economy
because
there are many limits that are not in
place. And so at the moment we're also
looking at
overall economy design and limits around
you know selling inventory capacity uh
exchange limits ongoing active tracking
of player trades and or large purchases
things like that. Now we want to make
clear that we want the economy to be fun
and you know movable but we also need
some protectionism behind it. And so
that's what we're looking at at the
moment. Now, I don't have all the
solutions. I didn't write them down or,
you know, show them out. But this is the
spirit that we're in at the moment on
these e economy exploits.
>> You're you're you're you're
>> you're being very diplomatic about
something. I I want to point out some of
the struggle with talking about this.
>> Yeah.
>> We can't tell you how we're doing.
>> We can't tell you what We can't tell
people what we're doing. Yes. Because
because every single every single
let's let's back this up a bit. So an
exploit exists. An exploit exists. We
whatever timeline you want. We we'll
just make it simple. We we'll make it
real simple and just and do days for the
point of conversation here. Exploit
exists on day zero. On day one it comes
to our attention. It comes to our
attention. By day two we figured out we
we we figured out what's causing it.
would cause it on day three. We could
fix it potentially potentially depending
on the severity like but we don't
automatically
do that because there's stuff to be
learned by leaving it in certain cases.
We we we f we find more information out
about who's doing it. We find we find
where it's coming from about other
vectors. We found like any bug.
>> Okay, we found this cause but sometimes
there's five other causes for every bug.
So you find this cause of an exploit,
but maybe there's four other causes for
that same exploit. And if we patch this
one up right now, we may hide the other
ones and we won't discover them for much
much later. And so go there's this
incredible dance that I get to I I get
to see I get to sit here and watch. You
know, I I get to sit here and watch you
guys you guys do occasionally. I I speak
up with a thing and you're you're you're
very kind to humor me here and there
from time to time, but I get to watch
you and and and the player experience
team and your programmers and everybody
involved do this amazing dance of of of
finding these things and researching
these things and and and working out how
they happen. And
>> we can't it's one of those things we
come here on a show and I want to talk
about it. We t we were talking about
this last night, but we can't go through
all the methodologies. We can't discuss
all we can't discuss all the solutions
because then knowledge is power and if
you know if if they know what we're
doing then they can around it. It's it's
this incredible incredible dance
>> that is frustrating and it can often
look like we're sitting on our hands
doing absolutely nothing.
>> That's right.
>> And that's an unfortunate frustrating
side effect of the proper way to do
this.
>> Yeah. Well, every everything time it
touches security, anti-che, economy,
exploits, it falls in that
>> it's going to fall into that area where
we can't be as as transparent as we'd
like to be.
>> And
they're saying in chat now and they're
not wrong like like like like like
cheats and exploits have sunk so many
games. It
>> it it's it's we we they have to get a
hold on them. We have to get a handle on
them. We have to we have to fix them and
whatnot. And again, but it's this it's
this dance. It it can't always be right
away.
>> Correct.
>> It can't at least that's one of the
things that alpha affords us. It it's we
have to we we we take the time to make
sure that we do it right. Take the time
to make sure we research. Take the time
that we're actually finding
>> all the bad actors and blah blah blah.
It's just at this and at the same time
it's
annoying because
you want to go to Reddit, you want to go
to Spectrum, you want to go to Twitter,
whatnot
>> and just scream we're on it, we're doing
it, whatever, but you can't tip your hat
anything. You can't you can't you it's
because every every
>> well I put my colon eyes colon emoji
sometimes on stuff on spectrum just oh
you know you can't say we're actively
chasing this one because then the people
are using it scatter and we don't find
them. It's like this
>> it's it's one of the hardest aspects of
game development communication
>> especially for a project like us that
prides itself on on being as open as we
are. You know, people will be like,
"Open development? I can't believe
you're not telling us. That doesn't mean
it's open." I'm like, "Open development
means we're more open than any other
person, any other company in the history
of the medium. It doesn't mean we share
every single thing, every single moment
the minute it comes out." I do sometimes
and I get in trouble.
>> But [laughter]
but it's it's really difficult. I I
>> It's a difficult balancing act for sure.
>> It's terrible because there's been so
many moments when I want to go out and
scream, "We got this. We're on it. We're
we we're we're doing this. It's fix."
But we just can't. You can't because it
makes it harder.
>> It makes it harder to do.
>> Well, yeah. And you're going to miss
things. That's the main thing.
[sighs]
>> But, you know, Hey, can I uh can we flip
seats for a second? Because you know,
you you just grilled me for what? How
long have we gone been going for now?
>> Almost two hours.
>> Yeah. I Well, I have one question that I
want to switch seats for. You ready for
it?
>> You want to ask me a question?
>> I want to ask you a question. really on
one at least one.
>> I can see you looking at your laptop
like you got notes. All right. What
>> I have my I have my note question right
here.
>> What do you have for me, man?
>> So, is the battle cruiser actually
happening? That thing [clears throat]
actually going
whiplash. [laughter]
Just whiplash. What does that have to do
[laughter] with anything?
>> You know, it's whiplash. Let's go.
>> Let me see if I'm being yelled at
already. Yeah, check this out.
[sighs]
[laughter]
>> All right. I am not doing
>> I am not actively being yelled at.
>> Good.
>> Um,
>> yes, the battle cruiser is coming.
>> Yes.
>> Um,
it's a triedand-true manufacturer. Uh,
not one of these new hotness
manufacturers. is one of the older uh
manufacturers of the verse and it sure
and I I I did say this last time so this
this is not new information. The
manufacturer thing is new information
but uh um our big giant military combat
themed event that we do every year
around May is probably a pretty good
time to expect it. and and and and and
and it will be the and and and as we
said before uh it will be the it is our
intention to make it the last concept uh
we do we made it through 2025 without a
concept uh with a single concept
promotion uh we do not have a single
concept promotion scheduled for 2026
other than this battle cruiser we don't
have a single concept promotion
scheduled for 2027
um that this will be the last one it's
it's an old uh Kickstarter thing
>> and so yeah so
>> it's happening
It's happening. It's happening. We're
going forward. Um I'm not going to tell
you anything more about it now. Uh but
yeah. So, okay. Um
>> is it big?
>> You got anything more? That that it get
your one out.
>> Is it big?
>> It's very big. [laughter]
It's very very very big. Um
>> that's all I got.
>> That's all I'm going to say. Okay. Okay.
So, [laughter] so, so
just sneak it right in there. Just piece
of [ __ ] [laughter]
That's my one for the show. Um, all
right then. Fine. Wipe.
>> Wipe.
>> We were doing so good.
>> Wipe. Wipe. I held them off. I held them
off. Wipe.
>> Right. So, okay. We're not planning a
wipe. We're planning
>> Good night, everybody. We're planning
[laughter]
so we're we're looking at targeted
actions, right? But we're not looking at
a wipe for the moment. And so we're we
want to keep on rolling. First of all,
there's a lot of some of the work we've
discussed. Obviously, I can't share the
details of what we're doing, but that
needs to be completed. Uh so for now,
we're not we're not uh intending a full
blanket web at all.
>> No, this goes back to what we were
saying before about the biggest quality
of life thing. all this all this work
going in to to long-term persistence and
to and and to item recovery v1 and
stuff. It's about the freight elevator.
It's about making sure you keep your
stuff.
>> Yeah.
>> Making making sure you keep your stuff.
Making sure you keep your stuff. Making
sure you keep your stuff.
>> So you we we've got tools. We've got
logs. We've got
>> a lot of logs.
>> We got a lot of logs. We got a lot of
information. A lot of information. So,
so, so it is our it is our intention to
do a targeted correction
>> to
those areas that
>> are problematic
>> and and and and preserve as much of the
>> gotten gains of the everyday
>> Star Citizen as possible.
>> Exactly.
>> So, so no blanket wipe.
>> That's right. Okay,
>> cool.
>> So, we've answered that. That's done.
>> [laughter]
>> What else you got? [snorts]
Just hit me with a battle cruiser.
[laughter]
Oh, I got a message. Hold on. Hold on.
Hold on. Where's I skipped out?
Was the battle cruiser mentioned?
Mentioned in seal just now planned. Lol.
[laughter]
Planned by somebody.
Whoa. Whoa. Whoa. Whoa. Whoa. [laughter]
[snorts]
All right. Uh, no no no no no comments.
No no no comments about the size other
than it's it's big. It's big. It's just
big and it's cool and it is so so damn
cool.
>> Um, all right. That's it. Oh
>> no.
>> Yeah. One last question.
>> Yeah.
>> Tell me something we don't know about.
Tell me something. Tell me something we
should be excited about that we're not
currently excited about.
>> Give it give give us something nobody's
expecting.
>> Um,
[snorts] that's hard. You're putting me
on the spot now.
>> I'm putting you on the spot, mister.
>> Is the bader coming? [laughter]
>> Uh, okay. Um well, one thing we didn't
talk about in detail
uh that I could give background info on
is um Genesis.
>> Okay.
>> And Nyx one, right?
>> So,
I mean, we we've we're obviously working
on this. [laughter]
That's no surprise to anyone. But the ma
the one thing that I'm excited about is
that we've um we've kind of conjoined
development on three separate things uh
in order to ship the best Nyx experience
that we could offer, right? And so
obviously Genesis is part of that and
the planet tech that's behind it. Um but
also uh the Staritect work. And so for
those who don't know, Staritect is a way
for us to
be smarter about building planets and
the human populations that are on them.
So settlements, buildings, dro centers,
LZ's, name it, right? So historically,
we've placed that by hand. And uh so
Staritect is a way for us to give
designers control over the planetary
scale of how these are distributed. And
it's a it's a fairly fundamental change
to how the game is made.
And the third one is what we call the
population control
manager. So
>> currently you have AIS in the game,
right, that are sometimes hand placed,
sometimes dynamically spawned. We've
talked about
>> spawn like a gazillion times the spawn
button.
>> Yeah, that's which is my biggest pet
peeve by the way. You want that's my
trigger point. If you want to trigger me
in a meeting, just tell me there's
another overspawn issue. But anyway, so
population management and control is a
third component of this. So we've I'm
excited about this because as we're
working towards next one, we're we're
aligning all those three things into one
strike team to deliver that together. So
uh I'm excited about that because those
are like three major development piece
that Star Citizen needs to scale that
we're bringing in together. So for POP
control, instead of having all these
handplaced, either handplaced or
dynamically spawn AIS uh in key areas,
that's a system that will basically
manage the server capacity of AI agents
to be able to distribute them at the
right place, but also spawn the right
AIS for the right jobs, manage the
priority of these spawn requests, all
that stuff. And so it's a it's a such a
much more scalable system that will
allow us to really like build up a dense
universe than we've had before. So I'm
excited about the fact that those three
projects are part of the same kind of
drive at the moment. That's the first
thing I would say that you guys don't
know about that we're going to bring
together.
Um the second one uh I mean there are
some hints of this in the game already.
So, if I know some some of the techies
look into the game client, try to find
some stuff. I'm not going to go into
more details about this, but uh you
know, we talked about sim rigs. We
talked about, you know, how the
experience in the sim rig is. So, VR is
a great thing if you have a SIM rig,
right? Obviously, having the headset on
is such a more dense experience. We're
also working at improving our peripheral
support. So being able to feed
information, non-damaging information to
peripheral manufacturers, so be able to
enable them to make custom star system
experience for the sim rigs. And also
we're looking at uh we're currently in
the process of looking at uh motion
motion platform support uh for the game.
And so I think that's something we
haven't talked about specifically, but
I'm mega excited about it because API
opening up that uh opening up basically
the motion systems to be able to
leverage that, you know, on the on the
key elements. So I think that's
something that I'm super excited about
because that's just another level.
>> There's that new Corsair keyboard that's
got the stream deck built into it and
stuff like that and like this. Um,
>> so thoughts about those would be my my
two
>> anything
for player facing for in-game
>> new some something I'm I'm going to I
know about something it it's treating
this like it's a big thing it's not. We
just did the big thing but um spawning.
>> Oh yeah
spawning.
>> Well so
we talked about spawn in the hanger.
>> Mhm.
>> Right. And so to build spawning hanger
we had to build a new workflow right to
be able to determine can we spawn you
there is there a requirement for you
spawning there right so the requirement
in the case of spawning hanger is is
your hanger spawned right uh that's also
extended to ships right but what we're
trying to achieve now I'm not promising
this anywhere but is spawn in place and
so we're trying to extend that workflow
for spawn in place so that you know you
just log in the game
you spawn where you were. And so that's
something that we're passionate about
and we're trying to get in there. So
>> yeah, log in, log out, spam on it,
>> anywhere.
>> Not not not a you know, you have a bed
in a ship, you have you have you don't
have a bed in a ship,
>> you just just wherever you are,
>> get out. Correct.
>> Get back in. Come back right there.
>> Yeah. Surface of a planet, you know,
spawn in place.
>> As long as you can still spawn there,
[laughter]
>> right? There's going to be rules and
limitations, but we're looking into
that.
>> That is also a big change for the game
to me. Yes, a huge, huge change.
>> Yeah,
>> just
>> Well, I'm happy you raised that up. I
was going to forget about it. [laughter]
>> I've got you, Barry.
>> All right. And at that,
we managed. It's 4:57. We're right there
at the end.
>> Hey, right on time.
>> Uh,
what do they say at the end of Hot Ones?
You, you know, tell everybody where they
give everybody your socials. Tell
everybody where they can find you when
you do next. I mean,
>> um I guess here in
many months [laughter]
>> uh we're here until the uh yeah, heat
death of the universe.
>> That's right.
>> Um Ben Wong,
>> thank you.
>> It's a pleasure.
>> Thank you as always for for for coming
back. We're doing these about every six
months. It's what we we we we agreed
when we did this run about a year ago,
right?
>> Yeah.
>> It's a good run.
>> And so so we'll see we'll see you again
sometime this summer.
>> Yeah, probably. Absolutely.
>> Um, I just want to say, you know, it's
it's it's
this is our first back. It's actually
our first SCCL since
IAE. We did the all ships Q&A and then
we we didn't get to do a whole lot of uh
last year because of a whole bunch of
other changes going mostly in my life.
Uh we're going to have a lot more uh
this year. Uh, we got a we got a group
of like four in a row coming in like
April, I think. Whatever.
>> Um, the chance to have somebody at your
level and your involvement, take the
time out to come be here, answer quite
literally any question I put you. You
didn't beg off of anything. You didn't
you didn't do this. So, I I spent the
part giving giving the tech teams their
props and the programmers their props
and the strike team their props.
something I want to be I want to say
here and give you your props. Thank you
so much for being here far more than I
will give yens
>> who won't [laughter]
>> come on the show.
>> It's a rendevous now. That's it.
>> I know. I appreciate it.
>> I love the anti.
>> I I love coming here and and chatting
about Star Citizen. And if you ever meet
me and a Bar Citizen, it's the same
thing. So, you know, just do it live.
>> Uh thanks so much, guys. Uh what is in
the orange box? So, that was at the
beginning of the show on the Twitch
version. and it won't be on the YouTube
version. Uh, but that's just toys. It
has nothing to do with work. We were we
were just nerding out a little bit at
the beginning of the show. Um, thanks
for watching everybody. Uh, we're back
next week with a behind the ships uh,
special on the on the next uh,
spacecraft making its way to the Star
Citizen persistent universe.
>> John Crew going to be there. Uh uh John
Cruz in there and Ben Curtis is in there
and Torstston Lyman is in there and and
some other people because I'm not really
good with names. Whatever. The second I
started calling out names, I knew it was
a mistake.
>> Chris Danks is in there. So
>> who
>> Batu? Batu's in this one.
>> Yeah,
>> I filmed with Batu.
>> Yeah, [laughter]
>> he's great.
>> Yeah.
>> Wow. These they really run together.
Sorry everybody. Uh but yeah, that
that's that's that's next week. Uh an
exciting new uh spaceship spaceship Mon
uh making its way to the persistent
universe next week in those little uh
middle things. We talked about it in
ISC, the big patches in January and and
March and May. It's like this and then
these these interesting little content
drops in the middle. Uh so we're we're
going to add a new ship in the middle of
a patch drop and for the first time in
the history of our project, we'll see
how that goes.
>> Let's do it. Just kidding. There's a
press article. It shouldn't work. Uh, so
thanks for watching. Uh, I'm Jared.
That's Ben Wah. You're the amazing Star
Citizen community. Where? What are you
doing with the cameras? [laughter]
Oh my god.
See
[laughter]
you. See you later, everybody. Bye.
Thanks everyone.

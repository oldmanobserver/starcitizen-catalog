# Star Citizen Live: Cargo & Hangars

**Video:** https://www.youtube.com/watch?v=3a6av7BoNTw
**Date:** 2024-09-13
**Duration:** 1:05:09

## Transcript

Yeah, take it in.
Hi everybody. It's enough of that.
Welcome to Star Citizen Live Cargo and
Hangers. I'm your I'm I'm your I'm your
host.
Almost forgot the word host, Jared
Huckaby. If you've never seen the Star
Citizen Live before, it's where we take
about an hour out of the end of our
week, uh invite one of our developers on
the show, and uh chat about all kinds of
stuff Star Citizen. Today's show is
focused entirely on cargo and hangers.
And any conversation related to cargo
and hangers must involve Cargo Chat
himself, Mr. Chad McKinney. Chad, how
you doing?
Doing good. Thanks for having me. Now, I
I thought we had agreed to both shave
our beards for this.
Uh we both agreed that you would shave
your beard. Is that what we agreed to?
That's what I remember.
I should I should read my messages more
closely.
Uh no, as as I can already see in the
chat, no, I did not lose a bet or
anything like this.
Uh the answer is I'm getting
a fight with a razor. That's it. Lost a
fight with a razor. Uh
uh
uh against my my better wishes and
against my protestations on this very
show for years and years and years, uh I
am getting scanned uh for inclusion in
one of the games next week. So,
that's what this is for. I've seen
people wondering if it was for
CitizenCon or for some big marketing
thing. Nope.
It's just because they're like, "Hey,
we're going to put you in the game.
Probably going to make you a janitor or
something on the on on on the Bengal or
something." I'm like, "Cool. I'll be a
janitor on the Bengal." So, that's what
this is for. So,
sorry, women and children, for the
fright.
This is what I actually look like.
All right. So, getting on with the show,
uh this is a Q&A show where we collect
questions from you, the Star Citizen
viewer, and uh pose them directly to
Chad. Uh we put up a thread up on
Spectrum, which is our bespoke
communication platform available on
robertsspaceindustries.com. If you
haven't checked that out, check that
out. Uh it's your chance to submit
questions and vote on which ones you
want to see answered most. Uh we
selected the questions that were
appropriate for Chad. Uh remember that
no Star Citizen developer works on every
single aspect of the game. So, while
there were many questions that I know
folks were
fervently wanting answered, uh we do
have to find questions that are
appropriate for our guests. That said,
we did pick four or five that were still
outside his mandate and went to uh Ian
Leyland and Rick Porter to get some
answers to those. So, we did try to
include some some of those questions
that we normally skip over for that. So,
we're trying to best of both worlds
here. So, Chad, are you ready?
No, but let's go. All right.
So, the first question is a real real
easy one.
Uh uh just just a softball over the home
plate.
Um
in the Hangers and Cargo SCL 4 months
ago, it was said that it just missed the
release and that you were really close.
Uh what the hell happened?
Uh time is relative. No.
Um
so, a few things on that. Uh first is
when I said that, first off, I I do
regret using that exact terminology.
But, you know, to to be more serious, um
when I said that,
that doesn't mean we're really close to
going live, right? So, I think that's
one first one thing to consider is that
there's still the whole evocati PTU live
flow that we have to go through, and
there's going to be a
a lead time to getting that out to
players like no matter what. So, it
wasn't like um
we were so close to just like pushing
the button and and being live. Um I
probably could have been clearer on that
point. But, on top of all that, there's
a lot of things that happen even still
like, you know, in between like what we
would normally go, you know, to live and
doing uh further development. And
in particular, some things that like
ended up being especially problematic uh
like going long was things in particular
like ATC and transit.
ATC and transit were two really critical
parts of the whole hanger loop, of
course.
Uh and the ship loading changes that we
did with the ship loading platform.
And unfortunately,
like if you could ask me to pick two
systems to not touch at all,
it would be ATC and transit. Because
they're two older systems in the game.
They're very complicated, and they have
lots of bugs historically. They're
they're problem children for us as as uh
systems. So, we knew coming into this
that it was going to be um a risk making
changes to those systems.
And what
turned out to be, I think, you know,
more of a problem than we anticipated is
that like once we started getting like
wider testing,
those systems really buckled underneath
load in a way that we weren't really
seeing internally. So, it we would, you
know, if anybody was on the PTU, for
example, um whenever we first started
going out,
um
it would it would be rocky. We'd put out
some fixes, bring in more players, and
then the just the thing would fall over.
And as a developer, to make it more
frustrating, fall over in a way where
not only could we not reproduce it, but
our own QA often times couldn't easily
reproduce it. Or if they could, there
wasn't like a coherent uh understanding
about like what the fundamental cause
was. So, for those kinds of issues, we
had to get creative as far as like
understanding what was uh happening and
like what to do to address it because
again, like we couldn't really
consistently or or fully understand it.
So, we
put in a lot of diagnostics, a lot of
telemetry, try things, and then
eventually work towards a conclusion of
what the actual fundamental problems
were.
Um
on top of that, like I think
there was kind of um
consideration with those systems about,
"Right, we're going to go in here. We're
going to make some big changes. We know
we have to in order to make all of this
hanger stuff work.
But, these are kind of older systems.
Do we rewrite them? Do we, you know,
largely refactor them? Or do we try to
keep them largely intact with the
smaller changes that we need, hopefully
smaller changes that we need to get us
out?
We wanted to hit the release date
sooner.
So, we made the call that we were not
going to largely refactor or rewrite
them for this release.
In retrospect, I'm not sure like if if I
could do it again, I would be interested
to know
would it be longer actually if we just
decided to just rewrite them or refactor
them first.
The good news is
that we already are planning on doing
just that. And in fact, um transit is
already in progress with the new
version, which needed to happen anyways
for server matching and all that stuff.
So, that's good. And then ATC as well,
we already have um
plans on how to rework it and to make it
just fundamentally some of the the
problems at play here because ATC as a
system is so like centralized, and it
keeps a lot of state internally in a in
in a very centralized place. But, these
systems are extremely complicated about
how they deal with persistence and
logging and streaming. And in
particular, tracking uh ship
uh allocations in the hangers. So, there
was we would get bugs, for example, with
like ships doubling up in hangers, etc.
Like those things were really
challenging the system,
as well as like the doors not opening.
So, like a lot of that stuff,
I think we have a lot better idea about
what to do about it as a as a system in
the future. But, this release, we made
the call to try to, you know, take the
system that we had, just kind of like,
you know, get it working with the new
direction, and then hopefully give us
some more time without so much time
pressure to to make the right
adjustments like more fundamentally.
You know, it's a risk we took. Uh didn't
turn out, I think, as we hoped, but
sometimes that's how it goes. But, there
was a lot more things than that. Um
another thing was the mission system.
It's a new mission system
uh with a new delivery hookup for the
delivery missions.
First outing, right? There's a lot of
new shaky things that we found with in
particular the hookup from the freight
elevators to the missions. There's just
like a lot of loose ends, a lot of
things threads would get lost. We have
this whole warehouse system that has to
interact with the
uh mission system. And
there's just, again, a lot of these like
rare low
repros um issues
that
in these very fundamental places,
actually this is another point for ATC
and transit. Like when you have a
moderate inconsistent bug in a system
that's not as critical,
it doesn't seem as bad. Not to say that,
you know, bugs aren't bad. Of course, we
want the game to be stable. But,
whenever you have something that's like,
let's say it happens 1% of the time
or zero 0.1% of the time,
um
unfortunately, if that
is in a part of the game flow that's
critical, it's critical.
Yeah. Yeah, it's it's awful. It's
unplayable, right?
So, we have to like take even more care
with those systems to get them into a
better place so the game is more player
playable because those bugs have an
outsized effect.
Um but beyond that,
there's also uh in particular
a lot of issues that we had with uh
networking and and serialization and the
replication layer changes that were
coming in in preparation for server
meshing.
And uh I can just speak for my own
personal experience debugging some of
these things. There were some very
complicated, hard to understand bugs
that we had to work back to eventually
being actually corruption in serialized
data that was coming from some bugs in
the replication layer which
we could not reproduce that again
internally and that was a wild one to
figure out. It was very very confusing
as you can imagine because it's rare and
it's random and like the data you get
doesn't make sense. You're trying to
make sense of like how these things come
together.
Uh but we we got there.
Uh
there were
design and iteration changes. You know,
some of them, you know, we were pretty
public about like the item bank uh but
also tweaks to the freight elevator
kiosk, changes to how the economy tuning
works for example auto loading times and
and stuff. So like
and to be fair, we were
wanting the patch to be a complete
package as much as we could. So given
that we were already going late, we we
didn't entirely shy away from taking
some of the time to like also like clean
things up on the design side while we're
also grappling with some of these harder
engineering problems.
And then like the final thing I'll say
on it is we didn't want the whole
schedule to shift.
So we still have a lot of other goals.
Uh one of them obviously was the Atlas
but there's, you know, things coming up
4.0. We're obviously still trying to
get, you know, squadron finished and out
the door.
And we didn't want to just
take everything and just like take
everyone, you know, focus entirely on
this release, get this release out the
door and have our whole schedule change
for for the whole company. So we had to
like, you know, keep there was a lot of
people who needed to move on to 4.0
goals or or whatever.
And so it meant that we needed to keep
like the core people that were working
on the main line features on the release
but we didn't have the full force of the
company to just close out one specific
patch out.
We could have but like I said it would
have you know, caused problems for our
other goals otherwise. So So you kind of
in total
there's a lot of a lot of things that uh
I I feel like I've learned from and I
hope
in the future uh
it gives us a better like framework for
how to deal with something this complex.
And then um you know, one last thing
I'll say is I think there's also just a
fundamental problem with the the whole
conceit of having this many fundamental
things in one patch where
I think if I would do it again, I would
slice it differently and try to do the
persistent and instance hangers in their
own patch first
and then layer on top all this other
stuff.
We wanted them to come together as an
experience
and I understand, you know, that might
have been actually kind of a weird thing
for the players to go through to have
like this one particular aspect of that
feature set come in without the things
that make that make sense.
But from a development perspective, it
would have allowed us to harden on the
the aspects of it that were in
particular thorny and and and more of an
engineering challenge
and then get that hardened and stable so
that we give that to the players and
then layer on top of that all this other
stuff around it. But doing it all
together, I think really challenged us
when some of the
um
you know, like I said some of the risks
didn't uh break in our favor. Yeah, you
you you you bring up several good points
and for those of you in the chat are
like, wow, this was an easy question. I
hate to see a hard one. I was being
facetious. This was the hard one.
Um
there lots of times when we talk about a
tier zero feature or whatever, it it
it's it's we do that thing that Chad was
talking about. You you can basically for
anything you can basically do one of two
courses of action. One, you can split
them up into several smaller things or
two, you can try to push out a suite of
stuff. And we attempted to do the suite
of stuff for
uh for all of this. It was originally
attached to an even bigger suite of
stuff and everything that was 323.
Um
when we've done the separation in the
past,
uh
it's a little more stable in certain
stuff certainly but you that's when you
tend to see things like, well, I don't
understand why this is like this and I
don't understand like this is like this
and we just have to go, well, that's
because we didn't give you the second
part and the third part and the fourth
part. And when you get the second part
and the third part and fourth part, that
first part will make more sense. And we
try to explain that but it
when you play the game and you see 1/4
of an experience, there's just there
there's you're right when you say this
doesn't make any sense. It doesn't
because it's 1/4 of this overall thing.
And when you see things like
the persistent hangers now and where
we're going with with with item
placement and the item banks and all
that stuff like that, this is still just
sections of the same thing that we'll
continue to build out later and later.
And you can expect to hear more about
that
at a big event that's coming up
in a few weeks. How many weeks? Don't
tell me.
Uh
but yeah, so we we tried to do this nice
package thing and
yeah, some you never know when you start
these things. You never know whether the
package approach is going to be the
right one or the slicing it up into a
bunch of different sections going to be
the right one. And hindsight's always
20/20.
But uh yeah, it's it was a it was
another learning experience and I really
appreciate and I want to
hammer home the part that you you and
your team basically there on an island
by yourself and then you know, it's
yeah, you had help from here and there
but for the most part, the full
resources of the company were not there
to to help you. They all had to stay on
other things. They all just
to keep the progress on 4.0 going and
the stuff that's, you know, beyond, you
know, going. So it's uh
I appreciate the work you you put in and
I think if I can speak for the
community, they all appreciate that you
guys we started talking about this. We
were we first talked about this in ISC
in October of last year.
That's how long
And I've been thinking about it a lot
longer than that.
Yeah, yeah, yeah, yeah, your your small
team out there in LA and Montreal has
been on this for more than a year and
stuff like this and
I just I hope we all appreciate the the
folks watching at home and myself that
that your dedication of staying with
this and sticking with this and and
getting it resolved or getting as as
resolved as you can before the 4.0 uh
the
324 release and subsequent hotfixes
after that.
Um all right.
What happened with the item draw change?
Let's just get the two big ones out of
the way, man.
It'll be easier after this.
What what happened with the item draw or
what To me, it's you know, it's uh
this one it's not
like a challenging question. Um it's
kind of on a bit of an arc
and I don't think that arc is completely
finished. Um what's what's funny about
that arc is I we've kind of ended up
where we started actually cuz like in my
um
in the original proposal for the item
bank,
it works like it does now actually which
is like it's the um personal inventory
UI and really like the item bank is more
like an interaction point to trigger
that UI.
And the reason to understand why that
makes sense is because uh to think about
like what you're doing at the item bank.
What what you're doing really is we're
trying to make it easier to get things
that make sense from like a FPS player
perspective, right? So if you want to
get meta pins, you want to get armor or
a weapon, these kinds of smaller items
uh which are often equipment,
uh we want to make that intuitive and
easy um and quick, frictionless.
Uh the
personal inventory UI makes sense for
that because it has the paper doll view
where you can
pull things over and like kind of very
more uh tangibly interact with the
player, more quickly equip and unequip,
swap things out, etc.
Um
However, the personal inventory UI, I
think, you know, everyone that's played
the game knows it's not perfect and
there's there's things that we have long
wanted to do about it. And um in fact,
for this release, it was one of the
things that we hoped that we could uh
get to but we didn't have the time to.
That's that's still we're still going to
um come back to making improvements to
that UI.
So for that reason, we had some internal
discussion on iterating on it and
looking at it. And after we had gotten
the freight elevator kiosk UI to a
pretty good place, um I think people saw
before that we originally had this more
3D based UI on the left hand side of the
freight elevator kiosk, um which we may
come back to at some point with some
rethinking but when we went to the more
like kind of straightforward like grid
view
um and then added, you know, certain
things like search and uh better
filtering, that experience started to
develop in a way that had some
functionality advantages over the
personal inventory UI.
So we had some discussions internally
and decided that we would try, you know,
moving it over to use just the freight
elevator kiosk UI rather than the
personal inventory UI.
And then there was trade-offs, of
course. So like some of the like faster,
tangible, easier um
kind of changes
are gone but you have
other things like search and filtering
that are better.
And after giving it to y'all
and collecting a lot of feedback and
stuff internally, we had to make a call.
There there was it was one of these
things where there was very strong
voices actually on like kind of both
ends of it. So I think no matter what,
some people, you know, it actually I
just went to a Bar Citizen in Seattle.
It was funny like I talked to people and
it was like some someone would say, man,
I'm so happy you made that change. And
then somebody else would be like, why
don't you bring back the the freight
elevator kiosk UI and item bank.
But I think the answer is going to be
we're we're going to probably keep it
like it is now but bring over some of
the things from the freight elevator
kiosk UI like the search functionality
to make that a better experience itself.
So both of them are you know they they
are better user interfaces and UX's
in general.
Um
and and and yes folks who are in the
chat watching who done the math it is
8:00 in the morning for for for cargo
Chad.
He he he he woke up extra early on a
Friday morning in order to do this so
uh
be kind.
Um
you can talk about how messed up my face
is all you want.
But let let Chad make up for a little
bit.
He's doing great. Um
All right. So we got a couple questions
here about the hangar itself.
So
these are the ones that we ended up
going to Ian and Rick these are the
design of the physical hangar and the
layout and stuff is not typically
questions that would be that would work
for Chad you know as as a as a
programmer and engineer and stuff but we
these were important they were highly
voted up we had access to Rick Porter
and Ian so we went and got the answers
for them.
So the first question here
is are we going to have more room to
park ships and vehicles on the sides of
our hangars. The pads are big enough but
the pavement is tiny compared to the
rest. There was that question. There was
are there any plans to add side rooms to
players persistent hangars for things
such as hubs firing range repair
modification facilities or even just a
large room with a cargo grid where
players can customize
as they see fit. And uh
can you get rid of the garage in our
hangars so we can just set up our
furniture better too many random cables
and boxes lying around. Uh can you clear
up all that garbage? That's a long the
sides.
Uh
I'm merging all these together because
the answers answer to all of these are
sort of the same thing.
These these are the very first
Okay I I need to rephrase that. From
a player perspective which is you and
then these are probably we're trying to
we're trying to figure out before the
show whether these are the fourth
version or the fifth versions of hangars
that you've seen. There were two
versions made by our partners of
behavior way back in the early days and
then we and then we attempted a first
version which is what you have before
and then there's this. So this is I
think this is the this is the second the
CIG has made this is the fourth version
of hangars and stuff that you guys have
seen.
Um
and not all of the features not all of
the intention that we wanted to get in
there is in there.
I'm going to read these notes from
directly from Ian and
Rick here so you these are just their
words. Um we plan to add garage modules.
Uh so we don't intend to expand the
pavement but there should be more room
for vehicles when you could basically
add on modules and expand the hangars to
the left and right and to the front and
back and to this different sections. Um
The plan is for personal hangars to be
able to be customized and expanded in
the future with with the addition of
these hangar modules. The exact list of
modules are still being defined at this
point which so I'm not going to be able
to give you a list of whether it's a
firing range or something like that. Um
but you will be able to modify your
hangars to certain extent and expand
them out in other directions and stuff
so that you can bring vehicles out and
kind of store them off the side you
don't have to use the ship elevator for
bringing all your ground vehicles and
stuff or just your smaller fighters and
stuff off to the side. Uh and as far as
cleaning up the garbage around the end
we've already done multiple passes for
the base hangar OCs so we're listening
to the community and moving in the right
direction that's Ian speaking there. We
want to split the data for instance
hangars and personal hangars separately
so that we can completely remove
everything in the personal hangars while
still leaving some form of dressing and
world building in the instance hangars.
So what this means is that as we've
talked about before you have your home
location and then you have the instance
hangars that you'll get at every other
location when you go there. For those
right now those are using the same OC.
So when you remove the dressing from one
you remove the dressing from all of
them. We want to split those into two
different object containers so that the
instance hangars that you get at every
other space station or whatever those
can stay dressed and look good and
everything but your personal hangars the
one the ones that get assigned to you at
your home location when you log in those
will be completely empty and you'll be
able to decorate those to your heart's
intent. That is our intention there. No
timeline on when that's going to come.
Uh
and then yeah as far as the
that was it. Oh and then I'm sorry one
more question on that. You're just going
to listen to me for a little bit these
are answers from Ian and Rick so I'm
going to give the chat a little break
since Chad did really good in these
first two questions. Uh the freight
elevators
are positioned a bit awkwardly in the
hangars for loading and unloading in
relation to the ship pad we land. A lot
of the hangar ramps are in the back in
the hangar in the freight elevator is
off to the side.
Um has the team considered moving the
elevator to accommodate these?
This goes back to the same hangar
modules. So all the hangar modules will
also be where you place the freight
elevator and stuff. So basically when
the customization comes in we anticipate
you being able to move the freight
elevator to wherever you need it for
your particular ship.
Uh and then the last one in this
lounge of questions here that were not
necessarily for Chad but were were
really important that we wanted to get
answers for to.
Um Are there plans for the station cargo
decks to play a role in cargo hauling
and logistics gameplay? Folks might
remember we added cargo decks to to
space stations
two years ago? Three years ago? No it's
about um
These need a significant rework.
They were built with an intention and a
design philosophy that existed back
then.
We've since
evolved our thinking on how these things
should work so they will need
to basically a rework to incorporate
them into the current version of cargo
gameplay that Chad and his team have
have created and gone out in 3.24 and
will continue to iterate in subsequent
patches.
So yes there are plans we can't tell you
what they are just yet because they're
still at a point where
it's they're too likely to change
between now and the time where they're
implemented but when we get closer to
a better understanding of how those are
going to be implemented we will share
that information with you.
And that's me
speaking for Ian and and Rick Porter
portion of our SCL. Chad did you enjoy
your break?
I enjoyed it thank you. Yeah.
Back to Chad.
Uh the Atlas
which is the new hotness that was that's
been revealed over the last week in PTU
um has a
magnificent tractor beam that is is
making out every other tractor beam look
like
turd sandwich
from a can.
Uh will you implement a mode switch for
tractor beams to give functionality like
the Atlas has to the multi-tool
or dedicated tractor beams so that
there's more parity between the three or
is this something that's exclusively to
the Atlas?
Uh for the moment it's exclusive to the
Atlas. There is some discussion
internally about like maybe doing that.
Uh nothing confirmed. I I feel like the
there is some benefit to having it you
know having there be some diversity in
the
the cinematic universe of tractor
beaming as far as like functionality to
differentiate the advantages and
disadvantages of certain things.
For the moment
we're leaving it as it is but that could
change.
Uh I think as we've as we've illustrated
that can change with feedback and as we
get more experience we do more analytics
we see how people are using. We do
always
there will always be some distinction
that we you know you want the handheld
for boxes this size and the larger
weapons for the medium boxes and the
Atlas for the larger box that is in the
ship tractor beams for the larger boxes
and stuff. Um but yeah when he says no
plans right now that's what just what
that means no plans right now.
But if you follow Star Citizen
week right? If you followed Star Citizen
for any period of time
Like at the item bank right? Like we we
we take feedback seriously so you know
we'll we'll figure out what makes sense
for the game and and but like my
understanding as far as like what we're
doing right now with all this is it's
just going to be the way that it is.
Yeah so that's cargo Chad and me saying
make your points
about
uh share your point of view
make your solid considered arguments not
just the pitchfork stuff.
There are our history is replete with
dozens and dozens of examples where
we've heard what you said and adjusted
these things so if you feel strongly
about it continue to feel strongly about
it continue to share that and we'll see
what the plan is later.
Um
Will we be so in the SitCon
goody pack by the way there's a SitCon
goody pack I think
it might be available now.
I don't know I'm not in that part of
marketing so I don't know. But I think
in the SitCon goody pack
there were beds.
We sold beds?
In the goody pack?
Uh this question is asking if we'll be
able to log in or out of our hangars
moving forward with these beds that are
in the SitCon pack.
Um
When you get it
uh
I don't think so but
I'll say this.
We plan on and as I've said before about
bed logging we're we're definitely going
to work more on bed logging and we're
going to work more on logging in and out
and one of the things in particular that
we're going to work on is logging in and
out of hangars specifically. We want to
support that. That's something that uh
we've already been working on to some
extent on the technical side, but
there's still more work to to go there.
Um
I don't want to say that when you get
this particular thing, a certain feature
is going to be supported in the next
release though. So, like as far as that
goes, like I I don't plan on that being
a supported thing by then, but logging
in and out of hangars and bad logging is
going to um be developed further, is
what I'll say. I I I You said a lot of
words. I want to I want to I want to get
this very concise. You're You're telling
us that at some point not not I'm not
saying the next release, but at some
point you will be able to log in and out
from your hangars.
Yes, 100%. That's the That's definitely
a uh a thing that we're going to
support. Cuz my least favorite thing in
the world is having to wake up in the
hab and go
to the hangar. So, that would be lovely.
Thank you, Chad.
That's not my least favorite thing in
the world. David's my least favorite
thing in the world.
He just did a yelp. It It It was like a
1950s like like a scream queen. Like,
Um
What work is being done to stop our
hangar deco from bouncing around so that
we can make our hangars the way they are
shown in ISC. Uh we actually answered
this last week uh with Benoit. That's
here because I want to refer people back
to Benoit. Uh basically it is not a
feature issue. It is a matter of
physics. Um it is the it it is physics
is one of the largest performance hits
to uh the server. Uh so, that is
basically it trying to negotiate uh the
physics of all those items placed on
other items. As server performance
improves, as server meshing uh provides
us the benefits to server performance
that we all hope it will and stuff like
this, uh that problem will become less
and less uh severe as it is. And then
we'll be able to find then we'll be able
to go in and find the individual edge
cases that cause it uh here and there
and there. But, basically it's one of
those things It's literally one of those
things where it works on my computer,
and then you put it up on a server with
100 people, and it starts
flopping around, which is why it looks
one way on ISC, and it looks another way
in live. We show the intention of the
feature and how it's supposed to work,
and it is basically a
performance-related
uh error uh that's causing it in the in
the servers right now. So, as we
continue to optimize, we continue to
improve performance, uh that will result
that will resolve most of those issues,
and then we can go in and do the edge
cases.
In the In the 3.24 PTU, you were
originally able to add one SEU cargo
mission boxes into larger eight SEU
boxes for transport. That was really
nice, by the way. This has since been
removed since launch. I hate you, Chad.
Uh any plans to bring this back?
Uh
That's a good question. Um
it's more that there were some issues on
the delivery side. We needed more
sophisticated logic to handle the
freight elevator delivering nested
contents for delivery. So, we
didn't We rolled that back because we
were having some issues having that work
like consistently, but it is a thing
that like we've talked about with the
the mission team, and I think at some
point we'll probably bring it back, but
for the moment um it's it's more of just
it's one of the things we had to like
give up on in order to get the release
out the door.
Okay.
Uh currently in live 3.24, when we call
our ships while we are in a party
member's hangar, our ships spawn in our
personal hangar instead of the party
member's hangar.
Will that change in the future?
For sure. Um this is another one of
those things where um
we had to, you know, make some calls as
far as like what we were going to try to
deliver on this release, and uh if
people saw like the very early
um actually, I'm not sure if this part
of it got to Evocati or not, but at one
point we we actually had a a drop-down
where you could pick on the freight
elevator kiosk a party member in in
actually choose their inventory there.
So, we were trying to like really
integrate party members into that hangar
experience.
Um but, on on both of these, where we
ended up is uh
needing to remove it just again, you
know, to get the release done. But, also
I think we realized that there's like
some some more design considerations
around the experience of security and
permissions, and party membership isn't
always the right fit to answer some of
those questions anyways. So, there's
definitely
um some design work to do there as far
as like the experience and how you you
attribute or or revoke certain kind of
rights in your hangar or to other
players.
But, we do want to allow that that
general kind of flow where you can have
your friends there that you're playing
with be in a party or or in a group or
an org or whatever, and then, you know,
have a way to spawn your ship in there.
Uh additionally, the ATC did not really
support this pattern very well,
and it's because the ATC
is an old system that was originally
written with Port Olisar in mind, and
and, you know, just a some landing pads
at Port Olisar. That was the original
implementation of ATC. So, this whole
idea of like even hangars is is kind of
alien to that system, let alone that
multiple people could be in a hangar.
And we've kind of had to, you know,
build that into it, but it has some
fundamental concepts like this thing
called a
permission token that don't really make
sense in that world, which is why we're
reworking some of the um implementations
to essentially Actually, this is kind of
getting at like one of the core things
that we're going to do is is separate
out from ATC hangar management as a
concept. And ATC is going to become a
simpler system that all it deals with is
requests to land and exit. And so, it's
really just governing the the entry ways
to the hangars, and that's it. And then
have a separate system for hangar
management for ships and all that. And
included in that can be the idea of like
how do you handle different situations
and corner cases around multiple ships,
including multiple ships from multiple
players.
How much
How much do you hate ATC now?
Uh uh uh uh
Can be real. It knows what it did.
I I I I'm pretty sure that I you know,
ATC has been a part of the PU since it
was first introduced in late November,
early December 2015. I mean, it is it is
one it is When you say, "Oh, it's an old
system," it is literally the oldest
system of the PU.
Um I'm not entirely certain even the
folks who you made it originally are are
even still with the the project at this
point.
They're not. Yeah, they're not. So, it
is it is it is a Yeah, it's
it was it was It's what we It's like
what we say with the old MFDs and and
you know, stuff. It was It was It was
good for its time, and it served its
thing for its time, but I think
everybody is in agreement, both player
and developer alike at this point, that
we need a new, more robust
uh a service to replace it. Yeah.
And to be fair to that system, like it
wasn't really designed with this in
mind, right? So, we've been pushing it,
but we just have to break it at this
point.
Better. We need to break What do you
mean? More ambitious for the breaking of
it. Yeah.
It's a
I'm realizing this is probably not the
kind of conversation you'd see it in the
in the uh
promotional material for any other game
development there. Like, are they like
like like talking about how much they
hate a game feature? I'm like, yeah.
It's It just It just It We We recognize
the same thing you do. It's the We're
all on the same boat. It needs It needs
an update. Uh right now. So, that is
being specked out, and that is being
that work is being assigned out as we
speak. There's no ETA on it cuz like I
said, it's still early days and that
stuff, but uh
it's
I'm not going to sit I I I can't sit
here and pretend like it's the greatest
thing ever. It's a
I hate it.
No, I mean, every time I see a report of
players saying or or QA finding like a
door not opening, I I feel it in my
bones.
Yeah.
Yeah, what was it?
Rhino Seperath 1972 says, "ATC has
stolen millions from me."
Yes.
Yeah. Yeah.
Uh
should push I honestly we we should we
should just I hope there's like a
permanent prisoner in Klaischner once we
replace it, and we just name him ATC,
and he's just like,
"I used to do that."
Um
we were talking about uh vehicle
spawning in different hangars. Uh is
spawning vehicles from the cargo
elevator still planned? I think we
mentioned it in one of those early ISEs
and whatever, and and nobody We haven't
heard much about it since it was
removed.
Absolutely. Um still a thing that we
want to do. Um
we Now that we've had a bit more time, I
think we're also considering
that experience a little bit more as far
as like how that works, and also
potentially supporting things like the
Atlas. Uh but, definitely it's it's a
thing that's that's going to come.
Yeah, it's definitely coming.
Okay.
Uh
Can we have an option
to remove or disable the alarm in the
hangar every time a ship is called?
Um
I I I don't know about that. Uh it's not
a thing that we've talked about or um I
I've heard even feedback on.
But, one thing I'll say is we are
looking at ways to make it faster, that
whole that whole loop, because we want
to make getting ships like a a quicker
experience. Like I think at this point
people have enjoyed the the pomp and
circumstance of getting these ships.
It's it's a really cool thing when you
do it, but of course with anything, you
know, you do it enough times and Yes.
you kind of just want to get your ship,
right?
So, we're looking at potentially some
ways where, you know, you're getting
let's say like a a Titan or something
like out of an XL hanger.
You know, it feels kind of absurd that
the
the giant experience that unfolds
for you over the period of time it
takes. Right. So, we're we're looking
at, for example, maybe we can like
preset the loading platform height
or but maybe adjust some timings to make
it faster. So, you don't have to wait
quite as long, but without changing some
of the fundamental elements of that
experience. We will we still want it to
feel um big and important and you know,
have that pomp and circumstance, have it
feel somewhat epic. Uh but where it
makes sense have the ability to like
have that time not as long for the
smaller requests. I don't know that
we'll
outright disable the the sound there.
Okay. Well, Again, if there's lots of
feedback on that point, maybe we can
change it. I'm going to make a
suggestion.
Some of the best things in Star Citizen
came from my ideas.
That's not true. Um eventually we get
you have to make some kind of you
mentioned it before, some kind of hanger
manager
a thing, you know, especially when they
start adding the customizable rooms and
stuff like this. In the hanger manager,
there should be like
a couple of default ringtones
listed in there just like when you get
with a a new Motorola phone or whatever
and you can just set it so that you can
change the alarm sound. It can give the
alarm sound can sound like a like like
like like a French police car or
whatever. You just just just different
sounds so that people can change it up
every once in a while.
Uh okay. I'll we'll take that into
consideration. Thank you.
I don't think he's really going to take
that into consideration, Chad. I think
Chad's shining me on.
Um all right. So, a lot of this is
focused on the hangers and stuff like
this. Uh there is a series of vehicles
that are kind of out there on the left
there, the Hull series. Uh
talk to us about what they what the end
goal for this what what is the
experience loading and unloading a a
Hull series ship supposed to be like?
Well, I mean, it's
obviously what we have now is a
I would say a you know, tier zero
implementation. We wanted to get
something in for the Hulls that was
unique because it's a unique ship
in the game. It, you know, can't land
with those spindles extended and it's
it's big. It's it's it's epic. And we
wanted the cargo loading for for this
ship and and the series
beyond that
to feel like it made sense for the cargo
trading at that scale and in particular
have that visual be like um
something that was like
compelling.
And so, we wanted to make that
cargo loading in and out like feel like
something that was like physically like
building up and and reducing on the
ship.
However, obviously
um
it's, you know, just doing this like
popping in thing and then also it
doesn't support any manual loading. So,
in the nearer term, we are looking at
adding support for manual loading for
the the Hull series and any other um
ship that might need to dock uh for
cargo support.
And um
now I'm not going to say like any
particular release or anything, but like
absolutely we're looking at bolstering
the
um
support for those ships as or not just
bolstering but creating the support for
those for for manual loading at those
loading areas on the exterior of the
stations and actually adding to them and
having potentially multiple we're we're
considering different ways to make the
throughput on that system make sense
both to allow for multiplayer and and
ships using tractor beams to help
optimize that loading time.
And I think that will be a really big
like meaningful change. Beyond that,
obviously we still plan on doing a
better implementation of the automatic
loading for the Hull series, be it NPCs
or drones. Um I think that probably is
going to be later because
it's more of like a visual experience
and less of like a gameplay experience
where it's like the manual loading would
be a really big meaningful change from
like the actual in-game experience for
the players. So, Uh but that's what we
have now. Uh Bluesman, you're asking a
question about the missions. That's
question for the mission team and not
for not for Chad. Uh
Where was that? H Lander 1337 says, "Is
this the SCL Live that announces Pyro is
coming out?" Yes, Pyro is coming out.
Eventually.
When it's ready.
You heard it here
and everywhere else.
Um
what's the current status of hover
trolleys? Are there still plans to give
players this or another method to move
multiple cargo boxes around locations at
once?
Yes. So, hover trolleys, another thing
that was sacrificed to the release gods.
Uh in particular, the hover trolleys
have some new physics around their their
behavior and they were being pretty
wonky. I'll put it like that as far as
the actual like attachment onto the
um onto the hover trolley not with the
attachment but how the hovering dealt
with it. So, like you would suddenly
have this attachment and like the thing
would kind of like sway around and
sometimes like violently like flip over
or something. So, there's some physics
issues with it that need to get sorted
and
also there's some questions about quite
how to integrate it into the game loop
as far as, you know, how you get them or
um you know, is that something that you
buy or can you find them in the world,
etc. etc. So, we took a step back from
that to focus on getting the release out
the door, but it's not forgotten. They
are going to come back um once we've
kind of
smoothed out the the
implementation and the like the physics
problems and then also pinned down
exactly like how we want players to to
use them and and where they are in the
game.
Um
so, yeah, still still coming.
I will say you know, to kind of I will
say there there
beyond the hover trolleys, there are
other things in addition that we're
always looking at as far as like
figuring out how to make the game loop
for moving cargo better and certainly I
think
in masses is certainly like a thing that
now that we have manual loading in the
game, we have more experience with it.
It's clearly like there's like this
interesting
point where if you're not dealing with
the largest boxes in the game, some like
combinations of medium to small boxes
can be cumbersome. So,
it's definitely like a thing that we're
aware of and there's I think going to be
continued design consideration on the
new things like the upcoming Alice
that's it's coming in 3 3.24.1
which is in in testing on the PTU.
Uh a bunch of people asking me
how much the pledge will cost. I don't
know. I'm not in those meetings.
Uh
we've been talking a lot about uh manual
loading.
Uh this is how will paying a fee to auto
load our cargo work?
Um Isn't that I'm I'm not sure I
understand because like you pay a fee to
auto load now. Yeah, I was going to say
that's a weird question. I thought that
was a that's pretty much a thing. We'll
skip ahead. Hey, we'll get to we get
auto load it. I mean, I can give a maybe
I can answer a question they didn't ask.
Sure.
Which is um
is auto loading always going to work
work the way that it does now? Sure.
to this is we're going to
build on that.
Right now, auto loading is built into
the commodity trading experience in part
because that was the quickest way that
we could do it.
Um I think we'll always want to have
that because it's convenient in order to
just make those decisions when you're
doing trading. However, there are times
when it would be convenient to auto load
things that aren't necessarily part of a
transaction or after a transaction.
Like mission cargo can't be auto loaded.
Mission cargo, but also items in general
that you have. Maybe you want to load
those into the ship.
And so, a
a full auto loading experience is a
feature that we're currently looking at
as far as making it to where you can
just have full sets of stuff. If you
don't want if you just don't want to
touch the freight elevator, right? You
just like don't like it and that's fine.
Um we're looking at having an experience
for you to where you can say like,
"Okay, I want this arrangement of
stuff." And you know, as long as it fits
into the cargo grids on the ship, then
it'll it'll move them around. And now
that we've uh made it to where the cargo
grids support so many different items,
that means that there's a lot more
opportunity to to make that work. Of
course, there'll be a small fee
associated with it, but um
it will I think support you know, it's
kind of a a bigger solution to instead
of just like solving it specifically for
mission items, um it's something that
you can do
more generally and then also, you know,
we talked about small vehicles, right?
Ground vehicles, getting those into your
ship. Well,
that would be a solution, right? To if
you You want to you know, drive it out
yourself. Not not just spawning a ground
vehicle in the cargo, but spawning a
ground vehicle in a cargo crate.
That can then Uh what I'm saying like
you could have the ship um stowed
and then request to have the vehicle
loaded into like the ground vehicle
loaded into your vehicle. Yeah. Okay.
Um
will the search bar accept actual item
names in the future and not just the
internal identifier?
Uh right now, I mean it's it's using the
locks what we call the lock string. Um
so I mean it does, but there's
the the problem is is there's various
kinds of data associated with these
items that are uh in different places
and what we haven't done is is really
built that out. Um but like it does use
the localized uh item name.
Um
but there are other kinds of fields and
stuff that I could uh be built out. In
fact, one of the bugs that we had
one of the bugs that we had when we
first added it is that the it was just
using the lock name and not the
localized name and it would make it
really confusing because some things are
really close to the actual end string
and some things just aren't at all and
you would search for certain stuff and
it wouldn't find them.
And the reason is because it was
searching the locked ID but not the
localized name, but that's not the case
anymore.
But there are other kinds of fields that
it's not searching on and sometimes I
think to make that a little bit
confusing, sometimes there's different
strings shown in different UIs. So like
for example, the the shop UI might use
like a different string for the
purchasable display
um from like the item ports editing and
stuff like that. So
more to be done. But it is using the
localized name.
There's a localized name and a lock
name.
Lock ID. Lock So like the localized name
is like if you're
playing, you know, in a certain
localization
Yeah.
on the client, right?
You you see the English version or the
Spanish version, whatever.
Is is lock ID and lock and lock ID short
for localization?
Uh yes. So that's Sorry, this is some So
there's a localization and a lock ID,
which is also short for localization?
Yes, but like the way to think of it is
like a lock ID is a single identifier
for something that will be localized,
right? So we have to have some hook,
some way to reference a string that has
a variation for all the different
languages. So that that hook, that
identifier, is what we call a lock ID. I
get So it might be like if I have like a
a mug, right? It might be
mug black one
jellyfish cuz there's a jellyfish on it,
right? Um but then the actual localized
string that the players would see would,
you know, some
Jellyfish mug. Yeah, jellyfish mug. But
then, you know, you'd have a different
one in German, in different in Spanish,
uh etc. etc. So that lock ID
is what in code
and and just like the systems normally
pass around because it's it's something
that's understood both by the server and
the client and if you change your
localization at runtime, it's it's
something that it's consistent. It's
also um
uh a more it's a reference, it's not
like a
uh unstructured data as a string.
Um
Yeah.
Yeah. I I could go on more, but yeah, so
that's basically it. Which is just more
of an identifier that then gets
localized. However, when you search, you
want to search on the localized version
and that means that on the client, the
client needs to say when we do a search,
here's the lock ID, but here's the
locale, here's the localization that
you're going to use and then on the back
end, it needs to use that for the string
parsing. And we actually have a
different database that it searches on
um that has a different um localization
on each because that's that's the only
way that we you can make it work. You
have to have to have
you search on different um partitions of
the database on the local localization.
I I I I I get it. Sometimes I ask
questions for the community, sometimes I
ask questions for me. That was a
question for me. And now I have to go
fight Yensland.
That's unfortunate.
Um
there are many items that do not work
particularly well on the freight
elevators. For example, mining bags.
Um
what's being done to resolve this?
Great question. Uh unfortunately,
another thing that got cut. This one in
particular it hurt me because I made the
the packing and the attachment behavior
and the system uh the packing and
arrangement works, but there was there's
one bug I'll get to in a second that
didn't um and unfortunately, because
most of the items work
another thing that was sacrificed to the
release gods. Uh
which hurts me cuz I like I I um
I want it to be good cuz I like to be
proud of my work, but um the the issue
in particular with those, I feel I'm
going to get a little bit technical for
a moment is uh the pivot. So for things
like cargo boxes, the pivot is on the
bottom in the center.
And whenever I originally wrote the
packing system way back for the the
whole C, the only thing that we were
putting into the cargo crates at that
time were the cargo boxes.
I knew that more things were coming, so
the packing system itself can expect any
kinds of uh dimensions and handles
multiple orientations, but the pivot was
something that I just didn't have time
to generalize. Um I had to just
essentially kind of like hard code it to
expect the pivot in a certain place on
the item.
Um
and the the technical challenge there is
you might say, well, I'm holding the
item, how do you not know where the
pivot is? The the problem is is when
you're doing things like calling stuff
up from a freight elevator, you don't
have the item. The entity isn't spawned,
you don't have the geometry for it, you
can't directly access the pivot. So you
have to have some way to know where it
would be
uh without loading like the skeleton and
and deriving it, which would be
incredibly slow. So what we have to do
is like essentially like kind of bake
that data out into a data set that could
be read from an asynchronous persistence
query or based on the class data.
So that's the work to be done here. It
won't take too long, but and it's
possible it comes in, you know, very
very soon.
But that's essentially it. It's like
that the reason is uh the mining bags
and these things, their pivots are in a
different place than most of the other
items in the game and the system isn't
yet expecting that the pivot might be
somewhere else than where most of the
other items' pivots are. And for that
reason, the way that it rotates around
and the way that it orients itself on on
the cargo grid is just wrong for that
particular thing, which is particularly
for the mining bags suck because they're
situated in a way that actually puts
them through the freight elevator and
sometimes when you get caught they
actually drop down, which is awful. So
like definitely aware of it. Um but
yeah, fix is going to be forthcoming.
If you can get technical.
Um okay, last two questions, Chad.
You're almost at the end and then you
can go and start your day proper.
Uh will we be able to spawn multiple
ships at once in the same hanger?
Yes.
Got any more? How how how
do we envision that working?
So yeah, I mean definitely it's it's a
thing that um we're looking at on the
design side and so I don't want to give
like complete answers cuz that's
something that might change a little
bit, but in in short we want it to be to
where you can spawn multiple ships,
especially in these XL hangers where you
have these huge
platforms and certainly you have the
room. There's just some thought that has
to go into um
all these different permutations. Uh
let's say you have a ship on the
platform and you want to get another
ship. Right now, the way the system
works is if you get a different ship,
we're going to stow the first one. We
don't always want to do that. How is How
as a player do you express that or how
do you understand that what's going to
happen? Do you have any control over the
arrangement of it, etc. etc. So those
are things that are getting like pinned
down on the on the design side.
Um but the goal itself that you we want
to be able to spawn multiple and and
give players more control over that is
something that we're going to do.
Okay.
Uh and last question is will we or have
you ever considered the ability to name
our cargo boxes so that we'll know what
was in them when we move stuff around?
Yes. Um another thing that is on the
design side we're still working on. Um I
remember talking about this like a year
and a half ago.
Uh about like how we could handle this
um because before this release, we we
added the inventory containers uh at the
end of last year, but we were working on
it, you know, before then, especially on
the design side. So this is something
that we've known about for some time and
those boxes all look the same. So if you
have lots of different boxes, how do you
know what's in them?
And we've had lots of ideas so far as
tinting and labeling and naming, etc.
etc. So and then also potentially
wanting that to be something that you
could maybe search on in the freight
elevator kiosk, right?
Um I'm not going to commit to one
particular solution there cuz as I said
um there's still some design work that
needs to be done to like make the final
call about like what that how that's
going to work and then we would do the
actual implementation. But it is a thing
that we want to address for sure.
Well, Chad
you did it.
How do you feel?
Feel great. Uh definitely feel great now
that the release is out.
Point one is coming soon. I think that
there's a lot of good things coming.
I also want to just thank all the
players for working with us on this
release. I know especially whenever it
originally came out it was like pretty
rocky. There was some real surprises
that happened when we went from PTU to
live.
We tried real hard to go from that state
to something that's more playable and I
think point one is going to be an even
bigger jump there. So I just want to
thank everyone for having so much fun
and and helping us
with this release. It's been a big push
and I'm happy that we're we we finally
got here.
Well, thank you Chad. That was Chad
McKinney.
I don't remember what is what is title.
What's your title Chad?
Senior lead gameplay
Senior lead gameplay engineer. He and
his team
been in the cargo trenches for more than
the last year.
So thank you for taking the time. This
will probably be the last show. We've
done six or seven shows on cargo and
hangers and this really just for this
release.
So this will probably be the last one.
We'll see if or whatever the next thing
is. Take care Chad.
You can leave. I got to do some
housekeeping I got to do some
housekeeping stuff. So folks,
that's it. That's the show.
This is probably going to be the last
SCL for a while. There won't be an SCL
next week.
That if you've noticed or if you joined
late in the show, you've seen this
absolute horror show right here. I'll be
I'll I'll be down getting my face scan
next Friday
to do that and stuff. So there's no show
next week. And then we're into the big
Citizen Con
hustle there. We've only got one episode
of ISC left. That'll be last week and
then ISC will go on hiatus until after
Citizen Con. So there might be an SCL or
one or two that we squeeze in there
every once in a while depending on
availability and stuff like this. But
for the most part we're we're we're here
at the at the threshold of a hiatus. So
thank you for watching. I do have a
couple announcements though. There are
multiple occasions coming up where you
can meet CIG folks in person. This is
always the biggest and most social
time of year here. So TwitchCon in San
Diego is next week. There is a Bar
Citizen on Friday, September 20th at
6:00 p.m. at the Garage Kitchen and Bar.
You can there's a common link on the
website the Bar Citizen World Tour you
can get the specific information, but
that is next Friday where you'll be able
to meet some some staff that are down
there visiting for TwitchCon.
There's also
in about a month's time there is Bar
Citizen Week here here and around
basically balls Bar Citizens all week
long in celebration of Citizen Con.
They're happening in cities and
locations all around the world. You can
check out the Bar Citizen
barcitizen.sc
website or barsit.io/2952.
You didn't think I was going to read
that, but I read that. I read a URL.
Because
I was born in the 70s and I still do
that.
So you so you you can find all kinds of
new Bar Citizens that are happening all
week the week of Citizen Con in areas
that that may or may not be close to
you. And then the last one
Atmo eSports our old friends there are
throwing a major event, the largest
event that they've ever thrown right
next door.
Literally on the other there's a wall
here and then there's a wall there and
then there's a building where this event
happens. The big biggest event it's a
huge venue with actual theater style
scenes, the largest eSports thing that
they've done there. That is called
Inter-Atmoshere.
You can check out the Atmo eSports
website for that thing it's atmo.sc
there's also going to be a sizable CIG
contingent that are visiting there. That
is that takes place the Sunday after
Citizen Con.
The Sunday the second day of Citizen
Con, but after Citizen Con ends. So it's
like the unofficial
post party there. Chris Roberts will be
there as well as a bunch of other
people. There's a big social area with
with a bar and stuff and they'll be
hanging out there to to to to meet
people and to converse with people and
stuff like that and to sign autographs,
take pictures, all that stuff like that.
So it's your chance to meet Chris
Roberts and whole bunch of folks.
That is not a Star Citizen event. It is
our friends at Atmo eSports, but we're
we're going to hang out with them
because we like them a lot.
So that's your chance if you're
interested and you haven't picked up
tickets for that, you can check that out
on their website
as far as how many or whatever. I I
don't know. I just I just get the
details for where it is.
And if I'm not entirely dead after two
solid days of running Citizen Con, I'll
probably be there too. I'll just
If anybody seen if anybody who remembers
me at the after party for Citizen Con
last year,
I will be on zombie mode. So just be
gentle with me. Approach me slowly.
Indirect eyesight. Don't come at me from
the sides or behind cuz I'll spook
easily.
Will not know where I am, but I will be
there as along with all kinds of other
CIG staff. So that's the housekeeping.
Thanks for watching.
Yeah, that's all I got. Um
Bye.
Sorry for this.

# Star Citizen Live Gamedev: AI Sprint Report

**Video:** https://www.youtube.com/watch?v=glWrbONBMwc
**Date:** 2023-03-31
**Duration:** 1:04:28

## Transcript

hi everybody Welcome to Star Citizen
live uh the AI spring report I'm your
host Jared Huckabee and if you've never
seen Star Citizen live before it's where
we take about an hour at the end of our
week hang out with some developers and
talk about this project that we're all
uh working on on this week's show
I'm doing something a little different
we're bringing back a an older format
that we haven't we haven't visited in a
while called The Game Dev format that's
where we're actually going to hang out
with the developer and see a little bit
of their actual work so whereas most of
sarson lives are generally talk and
discussion this will be a much more
visual Star Citizen live than normal uh
and it this one specifically is a
follow-up to yesterday's inside Star
Citizen now if you haven't seen
yesterday's inside Star Citizen you
should absolutely go and check that out
uh that's what we do where we did what
we call a Sprint report which was
another format that we hadn't brought
back in a while a Sprint is using when
we use Agile development for game
development Sprint is where developers
go off they work for about two weeks in
our case it's two weeks but the length
of a sprit can change depending on the
project they go off on their own for two
weeks they come back present some work
to everybody people give notes people
take notes and some sometimes they go
okay that's done I'm going to move on to
another thing or they say okay I'm going
to go back and continue on this for
another two two weeks and come back
later uh Insight star says yesterday is
where you saw the Sprint work of a bunch
of teams the interactables team the
environment team
um the ships the ships team stuff like
this what we did not include yesterday
was a bunch of stuff from the AI team
because the AI team has had uh quite a
few productive Sprints over the last
quarter so what we decided to do is
instead invite AI director Francesco
raguchi to the show Fran how you doing
hi guys you doing all good I have a
friend in our Frankfurt studio uh and
basically we get we're going to give him
control of a computer and let him play
some internal developer reviews uh
videos and basically give us uh sort of
director's commentary uh not sort of
directors commentary he is a director
that's absolutely director's commentary
now this is to mimic the type of review
that we actually do internally so on
this week's show you are going to see a
literal example of the exact same kind
of reviews that we do internally every
single week but instead of presenting to
the various directors of the Precision
Universe he is going to present to you
the Star Citizen Community so uh with
that uh Fran let's see if your see if
the computer is working is the computer
working
do we got that
trying to move my mouse all right
so I think I just like a small uh
additional information from my side
right a lot of those as you said a lot
of those videos are internal uh videos
recorded directly by the different
developers that worked on these features
right so some of these builds and you
know local builds with files that might
not be perfect so you would see some
glitch some glitch I know backs that
might we might have already fixed
feature you know and follow-up builds
yeah so of course like keep in mind that
one and I think it's it's it's cool
because you guys can see how we work on
stuff how we review the things and then
of course you will see some of the bags
that we also usually have while we work
on yeah still it stilettum O2 says oh my
God this isn't live because video is
recorded being shown but shown live
exactly
exactly so uh where do we start today
friend what are you going to show us uh
I would start with the perception of
vehicles so let's just move it this one
so you can see here still click right in
the middle there you go so basically
first of all again this is our uh like a
test map that we would build
what we had until now was a there was a
different perception not a different
perception but usually beagles could
perceive beagles and NPCs could perceive
NPCs then of course our perception
system is based on census so they could
add and use different senses for example
characters have a radar they could
receive radar
um information I would just lower a
little bit the volume because like it's
it's just my headsets otherwise and what
we tried to combine here was the
basically the work related to perceive
from audio stimuli related to vehicles
but also visual stimulus stimuli so what
happens here is like of course we have a
definition on for example of our
character can see for other NPCs when we
are talking about Vehicles the
information is slightly different right
so a large vehicle can be seen from
further away uh being put away and you
know ground beagles maybe a smaller they
can be seen at the middle distance so
while we expand it here
there's a lot of work that Andrea has
been doing uh so basically there is a
lot of information about the vehicle
propagating his presence to possible
observers uh based on the the size of
the vehicle but also what you see here
is these little spheres that are around
the vehicle our audio stimuli that gets
generated and those are dependent on for
example the strength of the Thruster so
you know the strong is the energy that
is put into the movement the Far Far
Away uh some of this information is
perceived of course these are being an
internal video what you need to imagine
is that also the de facto is made in a
way for us to test things so you see
this fear that you might think say oh
maybe it's just too small or it's too
big but this is just purely for testing
the system and some of the lines you see
here for example is uh visual uh
perception so you see that they perceive
right now the the being as well but it's
uh
abstracted
and they try to attack the target they
say now they can NPCs can actually query
uh also Vehicles as targets they can
select it through our selection system
of targets and attack it and also of
course based on their web and they will
be more or less effective in these Keys
uh you know it's more like a cinematic
moment when you try to attack it with a
rifle it's not that they can really
damage the the vehicle but they do react
and they try to you know perform their
best actions so so the the red lines are
they know it's there but they can't see
it the green lines are they know it's
there and they can see it what are the
blue lines yeah so there are different
ones like for also like there's some
information related for example if
they're friendly uh if they're not you
know of the enemies that different type
of information like the last position
um some comes basically some colors
comes if the last position comes from
visual information or you know from
audio information reader and stuff like
this but like the other thing that you
see here is that there is this uh this
information at the center it also tells
you when was the last update from vision
for example for division uh because we
try to be distributed uh to not in this
case there are four guys so it's not a
big deal but like when we have 2000
characters in pu we also try to
distribute a bit better uh the updates
but also still getting it because for
example with the one thing we changed
some time ago was about
when we would get perception update
based on the frame rate of the server
this one now is more with entity system
component we could expose how many kind
of ticks update we could get between the
different updates but now with this uh
what we call the high scheduler where
now we can specify better what is the
time framing which we try to get this
update and we still try to distributes
of course the frame rate is too late you
know it was small still takes a little
bit of time for them to get all updated
but not as much as it was before
priority based on you know the guys that
are close to you and the one that are in
a fight and something like this so so
obviously there's four guys here and you
know as soon as the vehicle comes by and
generates enough sound that's the big
bubble that you're seeing they're like
okay we're aware of the ship the ship
flies around and then they get visual on
it and they see it the ship comes back
around they lose visual three of the
guys or three of the people go and start
moving around the building to find it
but one of them doesn't what's the
difference in Behavior there is there's
some randomized element of this is there
um yes so there is there I see three are
going different one different things why
is that one first
that one specifically I can't tell you
right now but I suspect that this is
about the timing that we use for the TPS
queries so what is a TPS query TPS
queries are query in the environment
because I don't remember just to use
some concept I remember if in this video
they were running the exact combat
Behavior or if they were just running a
test behavior that Andrea has made for
this specific video that I can't
remember in the detail I also don't
remember when it is exactly this video
from because this is this is quite a an
old one let's say compared to the thing
so uh I just think that guy's done could
that be it could have been a suggested
back there for that guy but basically in
theory is like what we do is that we
distribute the query request for what
they should do and also not everybody
can actually try to move based on
different trades one thing that you see
here is like first of all the one that
you were describing when they perceive
it they have a bar on top right so the
perception of style still goes through
the new changes we're doing for squadron
where
based on the intensity of this stimulus
basically you know the bar goes up and
they only recognize the target when the
bar is fully you know into the different
states so they have different reactions
right you can have like what was that or
it's like oh let me go investigate or
let's go phone in combat when it's ready
to go full in combat right and then of
course it scales down but it's less
important once they're already in combat
the back throw so that guy at the end
you just decided that guy Isis I suspect
yeah I suspect that there was some
failure in his behavior it is my
suspicious and then he ends up going
into the tactics that is actually trying
to move and position himself in a way
where you can see it this is why it's
probably not moving but what's next it's
just by suspicious so what's next
let's go to weekend show
a bit of the trolley and elevator works
so these are another things that Daniel
has been working on on the tech side
um what we want is to allow the MPC to
basically navigate through the
environment exactly as a player would do
right so if
we have eliminators that connect
multiple floors and the MPC wants to go
from one floor to another now they
understand this connection so what we
use as a Transit manager that is boat
elevators or actual Transit you know the
the transit carriages
basically create a potential link that
means that even if there is no no match
connection the NPC knows that they can
they can basically move from one floor
to another how to navigate to that floor
comes from the movement plan
and in this case you see the difference
he understands there is a connection it
goes to close to the elevator it leaves
the trolley in this case you press the
button once you press the button the
elevator comes you understand the
delivery is coming because then there is
new navigation links that it will pop as
you see here because in here it leaves
the trolling
uh it goes to the console on the side of
the elevator that has like a little
button it's not super visible here but
recycle little console there then these
new links the green ones are basically
connected to different zones the
elevator to the external Zone then you
can find a path here understands that
needs to wait and press the new uh
button to go to the floor that it wants
and then basically the elevator tells us
when we reach the right floor because
multiple people could be there also the
player could be there and pressing some
other buttons so the elevators could
stop it from one mesh to the other the
mesh to that and then they move to their
next uh mesh yes so you see here there
are two things interesting here is the
usage of the trolley let's buy this
little uh jiggling that you see that you
know this is one of the back that we're
working on
um but NPC now can actually use the
trolley as the player would they are
really connect to that they really use
the state machine uh you know correctly
to to push it around and then they can
also inject
these are these are big change that
we've done in the in the past year so
basically any Dynamic path
can get additional information from the
environment when we pass through
environment we can actually understand
is that oh is the door closed should the
door be pushed to you know a button to
should be pushed for you know being open
is the door itself having this panel or
is the panel somewhere else
because we also have other situation for
example where you know you might turn
off the light and the NPC understands
that right then it needs to investigate
it's what we call uh you know the
destruction and and and
for the NPCs so they can resolve that so
they can understand that the light
they've seen going off can be turned on
from you know a consult somewhere in the
level so it is all like a systemic
basically so we have to we do have to
move on we're a quarter of the way
through the show already we're only on
our second video uh I do have to ask you
I do have to ask before we move on
though how do we know how afraid this AI
is before getting on the elevator
the elevator killing him
uh well it's uh it's not that afraid
this one now it's a very strong sword
not impressive it could be off right you
know he could have a trade that is a bit
more cowardly and then just want to say
something the air should hesitate just a
little bit before they started on board
they're funny parties we could actually
do it because with trades and those
navigation links have actually
information about which stabilizations
they are we can add even different costs
so maybe if somebody is afraid to visit
elevator and there is a stair or a ramp
in my prefer the ramp you know I'm not
using the elevator so we can actually
set up those things so what's next oh
next I would go to these other
improvements that Mars has been working
on that is the extension on the
navigation code to allow overrides so we
have two use case for this one one is
actual environment where a different
type of engine size can navigate but
with a specific stance in this case this
with Crouch stance so you are in some
events so normal player understands that
you can navigate through right but the
regular navigation mesh will not
generate
so what we have here is we can create
overrides for different agent types and
see what are the new sizes that should
be used for the vocalization and the
generation process then we have specific
navigation links as you see here both
the the ladder but also this Crouch to
stand at the end of the the vents that
allow the MPC to understand that they
need to transition from one state to
another and then enter into these
different environments another use case
that we have is there are some
situations especially for some of the
older Legacy ships right or Legacy
environment that is not perfectly on
metrics and now I can create some more
adult definition for this environment
and still allow the MPC basically to
correctly function without having to you
know
modify basically the the requirements
for all the environment but we can make
you know a dock for different
environment as you see here inside there
is a perfect transition you know he
understands that there is a transition
between standing and crouching you know
and crouching and standing back and also
as you see here there is also the
extension and variations for the ladders
as well so IPC can now use ladders as a
player does and you know again
for the folks who are watching on the
live stream right now the videos are all
pre-recorded because we would lose half
the show loading and unloading levels
yeah if we didn't pre-record the video
so it's
the show is live we're live you can see
my you can see me right now hi I'm Mike
well we can do it next time is we can
pick one of those options and shade live
as well
because this is cool like you can also
like select the character in the middle
click in the level and they can just
move around I mean you see here this is
the this is our our editor as well you
know it's just a bit cropped but yeah
yeah we opted we often do in these
internal reviews we often do the
pre-recorded videos because again you
would just keep every every director in
the company everybody is waiting while
you're loading up one level and
unloading another level and switching
between builds and stuff and it's just a
much more efficient use of time
I mean we need to respect uh you know a
time frame even in the internal project
update right otherwise it won't take too
long
these are a couple of improvements for
Locomotion as well that we did in the
past months so this is one thing that we
had uh before so we use Orca as
collision avoidance and the problem is
that we're seeing
was that we were adding a bit too many
constraint that would result basically
into a modification of the speed in
which a character should should move to
for The Locomotion to handle it in a bit
strange way right so in this case he was
trying to say like ah if that hit the
wall but I studied the character but
there's not enough space let's go super
slow eventually I will pass through and
it was not really looking good so we
decided to relax a little bit some of
those constraints and you know it looks
good it looks much better it looks much
smoother it was still avoid each other
we also have some additional work here
that we've done sometime in the past
where the capsule that defines the
characters especially if they get stuck
for different reasons because maybe also
players will will stand still there they
can shrink and enlarge based on you know
when we when we find uh this weird
situation you know we try to make it
look better as best as we can
and then these another things that we
had in the pasta where we had a lot of
our stops uh into Idol so the characters
would just immediately stop and then
play the idol that looks not the natural
so we work a lot on adding sharp turns
starting stops especially for characters
so I see as I looks much more natural I
didn't have like a proper sharp turn uh
video to show this time but they're
really similar so we can basically
process the path decide where some of
those animation can play at best and
then you know relax a little bit the
constraint of stopping exactly in the
spot especially when just they just need
to stop basically right for no
specific reason it's one of those things
that I don't think is always completely
understood how important animation is to
AI
it's the majority of the the eye part
because it just sells what the character
is doing right and I think as we see
right now as well it's like a lot of the
issues that we have right in Pew and we
are working on for square and it's
really to make sure that this situation
don't happen because
if you don't see anything obviously
wrong
then it's like you don't really know why
I took that path or not it might
actually absolutely make sense from a
human perspective but if it stops like
that it really doesn't doesn't make
sense
and you know this this will make it
really look good but also just the sharp
turns for example that we are we are
working on right now yeah we have it uh
working for lots of the stuff it does
mix
the flow is so much more natural for the
moment
I have this other one so it's really
cool that's what the Andrea has been
working on uh so we started with the
idea how we wanted to have uh hazards
for AI and then I you know being aware
of that but the way we implement it in
in these videos most of the time is
called navigation cost volumes in
reality those are
um something we want to rename a little
bit it's probably going to be a layout
modifier or topology modifier
and then they also have additional
functionality towards influence the path
so as you see here it's like completely
empty in a mesh across the environment
and once you you basically you can
Define some areas the basically enforce
a specific topology with specific
triangulation so this allows you to
modify and enforce specific triangles in
specific locations
on top of those triangles you can Define
what is the meaning of this area for
example it could be a danger it could be
something they would prefer to be in uh
it's something that they might just
avoid because I don't know based on the
behavior for example an area is less
likely to be traversed and I'm just
thinking if I'm uh I don't know if I'm
in a uh there is an area where people
are doing specific operation and when
they are doing it maybe it's very noisy
you know and then people will try to
avoid it in in that situation so those
areas can be either statically placed or
dynamically created and we will show
about today
so as you see here there is a
configuration that you can select and
basically the color that you see here it
just shows the different basically each
color as a different configuration it's
a center different configuration
dynamically you see the ID 0 is the
regular cost and id2 is more costly so
then we have some the back throw that
can show uh the path that gets generated
and as you see whenever we are trying to
go from one side to another it usually
based on the length of the pad it tries
to avoid it and when you cannot divide
because it's still cheaper from the
algorithm to pass through it tries to
cut it as straight as it can basically
try to minimize uh the timing which he
is in the more costly area the time it
would take the damage they would take
absolutely yes or for example one thing
that with with the damage
we are basically gonna and we are
working on right now this like that they
are
additional things into consideration for
example it's not just that that one is a
fire hazard but we also we consider this
like what are my properties I might be a
character that there's a special suit
right that doesn't get damaged with that
it's I don't know chemical in the area
normal people not go there but they have
a chemical you know uh Hazard suit and
then I can go through basically so
basically so we can yeah basically what
you're doing is you know it's after the
when the level has been designed by a
little designer you can go through and
you'll mark up the nav mesh and be like
and the cost is is like a risk
assessment it's it's a it's if I go
through here it's gonna cost me in Life
or in time or in discomfort or in
resource or oxygen or you know whatever
whatever the whatever the thing is it's
all it's all a matter of of when you say
cost it's the cost to that AI in yeah
not achieving their goals
exactly exactly the cost that is usually
with about finder that is a combination
of the actual distance they need to pass
through but then the distance gets you
know weighted also based on additional
value and this one but it's like for
example so in this case you can see some
more
um
you know the backdraw examples where you
know the eye really can pass through
Corridor Suite or where you know
simulating at the time to be another but
we have use cases for this one for
multiple things one can be for example
image you want to have
um pedestrian that goes on the sidewalk
and you know uh they don't they try to
not be on the road unless they really
have to and they might cross only the
crossroads so you can actually mark up
this environment we we also want to get
it you know completely
automatic you know so that they can
really uh try to do that
um extraction of features information
the environment you know in automatic
way
this is with the static one this always
allows designers to manually place this
information and Mark it up for example
there is a bonfire and you know on pu
whatever and that would never turn off
right it's always there we can just mark
it up and say this is a bit more costly
for example
but the interesting part is the second
part that this is really like from this
print is super new uh we actually didn't
even show it yet the new update so this
is like you know uh people will see it
even another directors
um but basically what it is here is like
this is the combination of dynamic
generation of uh cost modifiers you know
or topology modifiers plus the
additional cost coming
from the game code you know that is
associated with specific danger so in
this case the fire so through the UI
interface you can see that we can
simulate you know uh basically turning
on fire on things that can ignite
and as soon as something ignites
basically the system notifies us of the
area in which the fires affect
we can dynamically generate these cost
modifiers
regenerate in a mesh and then
the cost gets propagated basically so
you see when the fire turns off the the
RS basically disappears these are the
shapes of the fires that we get notified
of that we use for our calculation and
then at the end we will show how the
characters can I get through the
environment you know with fire with
Dynamic Fire and this like design space
you don't have to set up anything
because players can turn you know fire
everywhere or you know NPCs could do it
as well something can go wrong right and
explore them right and it could be more
fire so the idea here is that with the
different archetypes for the AI you can
have an arc AI That's incredibly
cautious and they would carefully avoid
all the different hazards you know you
keep a low cost uh existence and then
for the people the AI that were a little
more Cavalier a little more you know I
don't have anything to worry about they
might
even choose to go through uh some of the
fire because or or if they're very being
very urgent if they're emergency
responders they might choose to cut
through the fire to get to where they're
going as soon as possible exactly so
these are an example right if for
example you you tell the eye to actually
go inside the environment that is
dangerous they can still go you know in
this uh you can see it here like he's
still entering the environment because
that's its goal but he will try to avoid
it until he can basically and then it
then it goes in
um visit what we want to add as well
here now at the next the next Sprint is
um this kind of the same the same tags
cost modifiers that we use for
navigation links so we can tag them this
intention that you are describing but
also say that it's not just the cost
against him influenced but also some
costs are so high that basically costs
the blockage so that we because the
Broadway to making the cost too high so
that we saturate the cost eventually
right so then it has less impact so for
some situation it's like I'm really I
don't want to go through at all like I'm
a civilian I don't have you know I don't
know anything that can protect me I
really should never go inside the fire
and then we can also make that happening
right so that the part finally
understands that that is really a no-go
and he needs to find another path if he
can and then oh it completely fails and
because the behavior can handle it
because it's Dynamic if the player the
player sets fires or creates new areas
that cost more than the AI will avoid
and that the player puts extinguishes
the fire puts the fire out those the
costumes really goes back down for
example imagine like a mission where you
need to save somebody right from a fire
building on fire
and that you have the guy that tries to
pass through but the Pathfinder says
that you can't so he will always know
that he's trying to escape or follow you
right but he can't then we we can react
say like hey you need to save me you
need to you know put off the fire before
I can come with you and then you know
you can turn it off and then you will
dynamically find the pattern and and
follow you basically uh this is all
stuff that we'll be able to do with this
tank and and to be completely clear you
said you hadn't shown that to Chris yet
uh Chris have seen the previous one but
I don't think that they didn't see this
one yet well we publish it for Crystal
probably he saw it yesterday night but
not officially with my presentation so
it's all just uh you might have seen the
video
uh it doesn't happen occasionally
there's a moment where Chris sees
something on ISC or scl for the first
time before you see it internally I get
an email this is very this is going on
vacation next week Chris
I think this is this is basically a
really really interesting things one
thing that we were at Andre's experiment
we for example is also to say what if uh
you know our trolleys left around the
environment right you don't really want
to go so close to trolleys we can use it
with spaceships so that people you know
try to avoid we could use these things
for
um for example to increase the cost of
landing area when something is
approaching right right so the NPC
understands that oh now something is
approaching I can't navigate this area
but not that close to The Landing Zone
you know the landing Zone has a
legendary course but then when somebody
is landing is even higher for example
they do a lot of interesting mechanics
with this
cool also it's good because you can
allow us to modify the the topology and
I'm actually allows us to link making
navigation links there and forcing that
you know the exist and and just because
I can hear uh Max note in in my ear
metaphorically anyway the fire that you
were seeing in there is you know work in
progress stuff for the AI team it's not
the final and finished effective
I would think I wouldn't need to say
that but I'm sure there's going to be
something better it's better yeah I mean
these are all internal things right so
and how much time do we have still we
got we still got 30 minutes
so let's go on the official team right
so I split right now into two groups one
is Tech where we usually work and again
there's much more than you know these
are some of the things that we selected
um and then there's the featured team
that is more focused on some of the you
know behaviors and efficient that
directly impacting you know combat or
um different features
and that's how it accuracy right
um
one thing is like this what we call
emergency time so there is um designers
can basically control
how much the the eye basically is
forgiving for the player doing something
not correct so in this case for example
the play is really standing still in
open environment right and the eyes is
shooting at him
but just to avoid that he he kills him
and he doesn't have a chance like you
know his life is going down and his
health is going down and now next shot
is probably gonna kill him so when you
see that this blue the the back throw
the black in the is it there is a heat
chance value so right now for example
it's at 28 first of all our eight chance
now the new changes that are not yet in
po basically it builds up right so when
I see a character I'm initially not very
accurate and then I end up being with
the crazy designer set
and then I'm damaging you your health
goes down until a certain moment where I
give you a chance still to react and do
something and this is the mercy that I'm
basically yes you see it says Mercy dime
it chances zero so the you know the eye
becomes inaccurate in that moment
and then you have a chance to react if
you don't you'll still die
um
and this is one thing and then we also
added basically a better prediction uh
what we have right now is because we are
more accurately using aiming to actually
shoot at the character you know and then
use
um just the missing from the accuracy
now we can basically more correctly
estimate where the play is gonna be in
the future so that we can try to hit him
while he runs
oh and then the same accuracy yeah gets
applied basically from the regular
calculation that we have say for example
this distance you know impacting you or
the time that they're seeing the
character you know the last time in
which you know has been hiding uh and
all the stuff that we basically repeat
they they all contribute to calculate
the final accuracy that the character
should have for example yeah this
distance is much less accurate than when
it goes close
um and then you see when he's hitting
basically and damaging who recorded this
video
I'm Alex Alex just sending Alex a
message that says Serpentine
yeah yeah yeah oh yeah
you know improve your tactics Alex
yeah this is like you know these are
very these are an example where for
example you can immediately see like
these are really things that we do to
test it right so like in this case like
let's move let's stop right let's see if
the accuracy is the same I get damaged
the same amount you know then I can move
again in that direction but it's not
really trying to play you know it's
purely like trying to stress out the
system and see how it goes
uh let me show you like some work that
wild has done as well that is enabling
uh the usage of turret like mounted guns
let's go through it the video but it's
actually mounted guns
um so as you see the character can go in
a mounted guns right now so NPC can
actually use it as the player uh they
will always try to aim at you everything
uses the same accuracy that we you know
uh exposed we just spoke about you know
there is uh prediction on those weapons
you know and uh accuracy effect based on
you know the same values that designers
have so they can control the accuracy
for the specific web and how it you know
influences uh the the NPCs the again the
speed at which I think one thing that we
probably will you know we will
experiment with this also the speed at
which the character moves not too much
for FPS I think you know usually
characters move at this lower rate
anyway but like when we aim at the
spaceship right that could have more
impact and will give you more chance to
survive right
um reaction to grenade is a very again
another internal test where we can show
you know NPCs uh actually now perceiving
uh grenades correctly try to run away
from it based on you know where they
land so they will react to it and they
have a chance of running away or not
might still die out of it of course a
chance that's still no chance still it's
still yeah I mean we can control it you
know we can control our quick dish you
know they run how fast they react you
know again we can control some of these
things and designers will have to tweak
it so that it's not frustrating for the
player if they have a nice shot like in
this case right you want to have you
know kind of the power on the game
otherwise it's not that fun but some you
know there is also like a nice thing
that is like the NPC
pretty much not you know some might turn
a different direction so they might not
see the grenade so some will see the
grenade it will shout it will inform the
other ones and the other ones will react
because you know one person saw the
grenade
and of course someone does just to be
clear attached behaviors as well used
for you know uh evaluating it's not
their actual combat sometimes or like
they go back to a test behavior for
example just to uh be able to try it
again even when once they are in combat
and some of those videos when you see
that they are not reacting always to the
place also because we use a lot of C
bars that are internal controls that
they are meant to also you know not
react to the player for example right
they react only to the grenade but not
to your vision and stuff like this so we
can test it a bit better
answer a question in chat right now uh
from uh uh uh Creeks uh what is that 17
says why have they pinned the server
status page when it had no updates
because that's where the updates would
be and will be when there are updates
uh where is it
oh it's time for you friend I'm talking
to the chat okay okay that's fair enough
I thought it was aggressive for me
cool another thing that we are doing
this is a lot for uh you know characters
that they will eventually be also useful
to hire right uh so these are NPCs that
can actually systemically take boxes
crates and load them into your ship not
into you know trolley and then use the
trolley to to move it so as you see here
this really like some cool features we
worked on first all those things are
usables they actually pick up the boxes
they understand how to pick it up they
is loaded into the trolley so they
understand that now there are different
actions that they can do just because
the the crate is attached so there are
different metrics that we calculate for
where you can put the Box on sorry now
for example the RPC understands that you
need to put it on top of another box
that is put on the trolley
this is all our slotting functionality
basically it's like a usable is attached
under usable and gets slotted into that
base our based on our description and
then they can basically use that as you
see there is still the back that I just
recently fixed so you'll not see it
anymore uh eventually at least the time
they work on the spot but like the
character now understands that the
trolley is full and now it can unload
the trolley and place it into some
specific locations you know so these
eventually would be really useful for
you know allowing an NPC to load and a
lot your ship oh yeah cargo elevators
big time what's the what are the green
uh cylinders around the trolley so there
are uh two things they'll hide the the
the
um like the taller one that one is what
we call alignment slots so it's where
the NPC needs to be to perform a
specific operation on the object that is
on that location and the small one are
enter position so that is where the
actual animations start to arrive to the
location of the diamond slot
and when it becomes Red is because it's
reserved and it's in usage in that
moment basically
I feel like that's too tall to stack
those boxes
yeah you can do three uh you can stack
three boxes one on top of the other
basically right now with animations that
we also have that they you know look
very
very nice right you already see that you
know the weight of the box and how they
do it they also you know they're very
careful with their back try to stack it
in the proper ways to get hurt you can
say are we sure that form is proper
success yes it's it's training safety
training as well my lower back just
watching this
but it's uh yeah I think there is a lot
of tech in this one also enabling
disabling for example uh automatically
use slots that are allowed to be done
for example in this case when is pushing
the trolley you automatically disable
the ability of somebody else to go and
pick up the box for example right uh you
know one that somebody takes the box
from the trolley that you're just moving
around
um and then you know you're gonna have
some multiple people loading at the same
time another one you know pushing the
trolley so it's uh I see pushing to try
to disabled stability to take load boxes
into there and these are really some one
it is why they're gray for example these
are great because they are disabled in
that moment and in this case is taking
it right so he will disable while he's
taking it they push so somebody cannot
remove the trolley while you are taking
it already right I find myself thinking
about how this works with or will work
with volatile cargo like when they be
very gingerly moving you know doing at
half speed
I think that would be also be the
support that we need to do for you know
the tractor beam eventually there
all right because I think there will be
a lot of bigger crates that they will
not be really able to you know to grab
anything like that at least
yeah yeah exactly but these are very
physical interaction with the world you
know that you know our system allow and
it's it's really interesting from my
perspective yeah
so this is like good uh good job of
crease
and then we have let's go through yeah
some attack and defend area these are
other things that we call
um assignments
I think I explained in the past
sometimes but for people are not
familiar with it it's assignments are
busy I sort of commands that we can uh
give to NPCs right so we're gonna ask
them to defend an area attacking area
attack a Target defend myself move to
allegation you know loads a box into
somewhere else or you know clean up an
area of something that they need to
clean
what is good is these commands can
either be exposed to
um
for example designers in the mission but
they can also
used for example from wingman comments
right you can hire somebody and then
from the UI you can call the exact same
logic that the designer would ask the
eye for specific operations right
um
so it's purely like it's all systemic
it's just like our description how the
NPCs can perform specific operation
in this case for example there are just
a couple of example of attack and defend
areas so this is an attack area so what
it does he can move into an area that is
supposed to attack and then it will go
around and search for these areas for
example
the designer can specify the speed so
the urgency that the NPC needs to use to
move into the attack area
you know it can be far and rushing into
what they can say work slow eventually
we can also expose like a different
range
that can be used for different distances
but you know you see like in this case
it's like kind of it gives you know
sells the intention of you need to rush
into this area and attack
or defend you know for you know what it
means and the attack area basically also
means that the from the this is all
embedded into a peaceful section of the
behavior and a combat section right so
some of these comments can have a
version that happens when no target or
no enemy is present and in this case is
okay if I need to attack an area and I
don't see any enemy what do I need to do
first of all I need to try to arrive
into that area I need to defend it I
should just defend it stay there in a
defensive position
but then there is also the fact that you
can transition into combat somebody's
assignment can have their own version of
the combat but they can also just
influence the regular combat behavior in
this case an attack area what it does
especially is influencing the target
selection so he will always try to
prioritize the targets that are in that
area to perform that operation and
Designs can also switch
dynamically which area is going to be
used so that the target will change you
know and the NPC can actually uh select
the new the new targets and then once
there are no Targets in the area of
course other targets can also be
selected on outside the area as well
because it's still you know they still
make a threat
and The Defender as well for example
this is a bit of the transition I was
telling you like characters can be told
to move you know to a different area but
also it might already be in combat so
one story combat can be told oh you
should go into Defender area so what it
will do is that it will basically
modulate this combat Behavior so that he
can move into a nice location to defend
that area but without forgetting what he
was doing before right in this case was
I'm still attacking that enemy and I
should still remember that unless a new
enemy that is more important comes up
right but then you can switch it and
then for example this these areas a bit
uh overlapping right so he will try and
then after to find some nicer cover into
that area if the overlapped he could
also stay in the same cover and so on
and so on right so it's like you know
this I hate this person and I'm being
told they have to go to fitness area but
I must see if I can do both I'm still
I'm still trying to do both exactly
until I now
absolutely you know because again in
this case of course in this test case as
you see like this is always something uh
you know a nice a nice feature that
Chris has been working on and why we
test you know we also don't want to risk
that he dies so we have this guy even
like you know he's a civilian completely
you know he cannot react I think it
possibly was even outside the mesh you
know Saturdays but it might just be like
a dummy player what we call this
assimilation of a player that doesn't
really it's not another NPC it simulates
a uh you know a player that stands there
and then you know these are enemies uh
from the faction perspective so they
really considered
is it a lot that because you can also
you know take it and move it and see if
he reacts correctly
uh what did we show the healer is the
last one something that Jake has been
working on again this one uh is also an
internal things and missions are
definitely not final these are majority
of those animations are you know uh just
blockouts that we use to verify the flow
so you know just be aware of that uh
there is some net pen usage like so that
NPCs can actually react one thing that
you see is like you don't expect a guy
to go around this guy but these are test
behaviors so they don't respect any
distance right they are really meant for
us to make sure that we can test the
flow so the character busy is Reviving
him and then he goes back into gun but
obviously I would never expect an NPC to
go close to a Target like that to revive
his friend that just died right because
it will die nearly after uh my child
does you know might even be you know
like the player right now is in god mode
as well so he will not die himself
um this is another case where if you
don't have the trade that you don't have
you cannot revive him you can also send
a request for a medic and then the medic
again this case is coming really close
because we are testing it but in general
as the medic might try to revive people
that they require you know in the right
moment if there are respecting the the
rules like being far from the target for
example being you know a bit more hidden
positions but as you see here for test
purpose the guy comes in he has a mad
pen he goes because he he can revive the
other guy cannot so he comes in
I mean obviously we try to shoot me in
because it's forced as you see here we
are just forcing a little bit in this
situation the way it just blockouts
animation for that the characters
doesn't have a gun so you might find the
gun back he takes it and then it will
fight with uh with the new weapons that
he found so what happens in the Healer
flow is the
was revived you know or you know based
in being downstate you know you could he
could also be that he is just you know
not properly damaged but it's just you
know uh being put into an inconscious
state but you know when you when you go
down you lose your weapon so the first
thing you do is try to get back into a
state where
um you can you know get back another
weapon and this is another reason why
you don't expect this to happen very
close to Target because otherwise you
revive somebody comes back in it's next
to the Target they will die again it
doesn't even have a weapon right so this
will happen you know you might see it
happening on the background or a bit far
away
um you know and you have to make sure
that you know you you put pressure on
the eye so that they don't revive each
other as well
so we've only got a few minutes uh left
before we let you go Fran uh we'll go
ahead and open up open it up to some
questions from Chad if you have a
question uh that's AI related for our AI
director you can go ahead and put it in
the twitch chat uh preface it with the
word question uh it helps me make it out
from the other thing and again AI
related and I understand that many folks
are struggling to get in they're
struggling with the 40 or 14 error
whichever number it is unfortunately
that's not an AI related
it's like nor is it a video error so
unfort so you have the two of us uh this
week on the show we're not the ones who
can tell you about that which is why we
all are always linking people to the
status.robertspaceindustries.com website
that's where you're going to find those
sorts of informations and stuff
um the biggest question before I even
have to look at the the thing friend is
you've shown us a lot of examples of AI
behaviors
um that are that are growing that are
becoming more complex uh so some some
some Advanced tactics and stuff but we
don't often see those behaviors in the
live game
um is that uh I want you to talk about
well why why that is that's just
strictly bugs or is that uh server
performance stuff
we have a lot of streams right now right
I don't know a lot but we have few
streams and whenever we stabilize
something right not all the new changes
go in immediately into that stream so
for example in 318 you have some of this
stuff and this is where for example
people see a very uh high accuracy
because not all the accuracy work is yet
in there for example we don't have the
mercy time we don't have yet in trading
the build up of accuracy over time
um some of the balancing you know needs
to one thing I'm always saying is that
it's very hard to balance the eye for
the server that goes at 30 frames per
second or a really low frame rate so
sometimes some of those values are
trying to compensate for some of the low
frame rate but then you don't work very
well for 30 frames per second or 25 per
second that is where people see that
Chris is also very high there
to you know try to help in some
situations but of course the long run
that's not what we want
um some of these behaviors as well we
come with Integrations because we have
that many integration from you know the
streams we work on into what we call
came Dev and then from Game Dev goes
into the live stream
um whenever we can we try of course
integrate as quickly as possible but
some of those behaviors might have
dependency on other departments work as
well for example I don't know changes on
the accessing machine or I would you
know the specific State works or on
animations that are yet as you as I've
shown you there might be white box right
and those are not read ready to be on
the live uh release so we cannot enable
all those behaviors I think it has been
uh some videos that are seen from PO for
example of the reacting to that bodies
that were using mpu some of the white
box animation they were not playing
correctly it is one case where we
usually disable these behaviors and you
know if they're if they especially if
that wrongly enabled from our inclusion
and so on and so on but the idea is that
you know we want to enable them only
once
all the directors involved in the future
are happy with right because we don't
want to you know show necessarily this
is also a nice preview but you know
everybody involved into this one wants
to have
his work shown as best as possible and
then of course there are also sometimes
bugs that we need to fix
um some of the things I want to see is a
bit of the reaction how we can speed up
a bit of the reaction time what's on low
frame rate servers so that we can get a
bit better experience from you know our
players
because you know we see like this large
difference in experience from yeah
frame rate you see a dramatic you see a
dramatic difference in the capabilities
of the AI uh especially like during
Siege of wars and when you jump into a
fresh server you jump into a fresh
server and CJ Boris and is devastating
and then you're not getting winning yeah
we really want to have like a more
balanced experience right it's not that
we don't want but it's a you know it's a
little bit about priority Sometimes some
of the species needs to happen first in
regular development because you unblock
other people to
basically rather type their missions
productive levels right and it's not
that the other part is not important to
make sure that you know also the live
experience is important but you
sometimes you need to have a harsh
decision you say what you do you want to
unblock those guys do you want to block
set guys and you need to take some with
the resources you have you need to
decide how to allocate those resources
right for the greater good
but
we are working hard to make it sure that
everybody can experience those behaviors
because this is what you know we want
you guys to to play with and give us
feedback above from Amadeus in the chat
how do you assure that AI will not break
when their routine or behavior is
interrupted by the players players would
never mess with AI they would have never
kidnap Mission givers they would never
love them on the ship and take them to
the other side of the star system that
doesn't so we have different ways of
doing that of course so let's say you
have a routine behavior of uh you know a
janitor so a lot of our behaviors of
course make sure that you know you need
to have specific things to perform the
operation so you can check what you have
let's say
Combat 5 starts right and then the
general loses you know needs to react so
it drops out this this mob is broomstick
you know or you know it's bucket
whatever
then we always need to make sure that
the same way as if the gender starts
from scratch you pick up you know it
needs to be able to pick up those things
or it kind of perform specific operation
right so of course if the player steals
all the broomsticks from the environment
well yeah it won't be able to to get
that but we can always also allow some
specific
um other AI coming from Spawn closet and
bringing back those things or you know
having specific usable that can still
provide the NPCs with the required
objects
that they need to have or to perform
specific behaviors that they can restock
you know specific objects that they
require before they can do the other
behaviors and then the other part is of
course being assured they their state
for us there are different parts it's
not just the player influencing the
behavior but eventually it could be for
example an NPC transitioning from one
server to another because maybe it's
it's not necessarily enough but maybe
it's just performing his duty on your
ship
and in the case your ship can change in
our server and you know we also need to
make sure that that one that consistency
you know it's propagated for for Its
Behavior so a lot of these buildings
behavior in the right way
and allowing the transition between the
different states you know from what you
need
what you can perform basically
from fish 19 uh they ask could AI commit
crimes and get a crime stat
they could and they could also give
crime stats this is one thing that we
want to do as well right so if you
bother you know too much you know
civilians then they could call the
police and that one might trigger uh you
know a crime sets for you or you know so
maybe the guards or policemen can
actually you know have specific uh we
have that one already with uh with
spaceships control like I think we have
the the checks that sometimes some
spaceship can do on the cargo that you
carry around and they can give you cram
starts but then you can have we have for
example in um you know in the plan to
have the thief uh Behavior so maybe you
know you can actually make sure that it
gets triggered you know it's their crime
and then police reacts to them
performing the crime uh there's a couple
different versions of this question that
came in I'll read the one from K on by
the way uh that's her name uh what does
an AI do if it runs out of ammunition
so we have different things
when you run out of ammunition you first
try to switch to your sidearm right
because you might have a sidearm or
secondary arm weapon that you can use
and then
if you can't do anything basically they
try to survive right so they can try to
run stay in cover and continuously try
to search if they find a location where
they can loot ammos so this is always
going through the the slotting
information and slotting functionality
that we have so weapons can be found on
the ground and you can pick them up so
now we have this functionality where you
can pick up objects that are on the
ground as you've seen in the Healer the
animation was blocked out of course so
it's not like you know correctly
positioned but basically they can go
next are usable and pick up something
that is not perfectly aligned
they can take it from different location
means it is a weapon rack they can go to
the weapon rack and grab a weapon and
then they can loot bodies so they can
grab weapons or ammos from bodies or
from you know magazines that might be
contained into a crate or on the ground
so basically they have like a flow where
they find the search for something that
is you know in a good position it's not
too close to Target stuff like this and
then again grab it and use it and reload
and and you know use the new web on
basically and switch to the new weapon
oh that answers the question yeah
um in the folks who have been reading
the monthly report I lost you said this
I'm sorry uh folks have been reading the
monthly report have seen mention of
Apollo uh as a as a new uh term that's
got that you know they're used to
hearing about subsumption but now
they're hearing about Apollo can you
tell us real quick what Apollo is Yeah
so basically we have two it's always
subsumption but basically we have two
different tools one that is internal
Tool uh basically exactly embedded maybe
we can show it in one in one session but
this is the internal Tool uh in our
editor so what it means is
we want to be able to reference things
directly in the levels and with the
external tool we couldn't do it so we
always had like a bit of additional
information that where the platforms
that were supposed to expose information
the external tool
this one is basically meant to
streamline a little bit the the usage of
subsumption uh equation data basically
so you can create activities and
missions in the internal tool you can
create platforms and the idea is that
all the internal data gets automatically
propagated to the tool without us having
to necessarily expose it to the external
tool and then you know use an external
tool to do these operations Apollo also
include some more
[Music]
some other features that the example
didn't have for example the editing of
the master graph that Fadi has been
working on Michael saw Michael and
father our uh you know programmers that
are focused on a lot on tools and some
systems
and uh you will also have like for
example we have a different view for
Missions
where an external tool you have one
graph for each logic and now we have
kind of a large graph for the missions
where you can see the different blocks
you can collapse them you know and then
automatically understands what you're
linking to so you can still create
different files that people work on at
the same time but also it's a little bit
more streamlined here the full picture
of your mission in there
but basically yeah it's our internal
subsumption tool is what basically is
meant to grow into you know giving us
more power for editing missions for
example like one thing that we want to
do in the future is like uh or see that
can include automatically emissions so
we can actually reference data directly
from the level
so we'll do two quick uh two questions
and we'll let you go from sharks bite
says will an NPC ever be able to take my
Med gun off me and revive me so yes
so if you have friends and PC that are
meant to support you like what we call
Body eyes that's one of the things we're
working on and it's exactly the fact
that if he knows that you are his friend
and you are dead then you might either
use ismat pen or I might find I might
painting environment that might actually
be attached to you so it will loot you
take your med pen and then uh you know
use it on you to revive you
technically it just it's the Behavior
now that we want to work on and last
anything new you can tell us about
bartender
yes bartender no no I can speak for no
hours no
that's it thank you for taking the time
to be here with us this week friend
that's always a pleasure so it's nice
like we didn't get to chat a whole lot
when I was over in Frankfurt so I've
been looking we've been looking we've
been trying to find a time where we can
get together and do this I think we
originally planned this episode out like
eight or nine weeks ago and we finally
you know made calendars and everything
work
um
uh that's it for this week's episode of
Star season live
um if you haven't already be sure you
check out inside Star Citizen yesterday
uh that's our end of the quarter Sprint
report for q1 2023 inside Star Citizen
is going on its regularly scheduled
Hiatus that'll be offline for about the
next four weeks uh this show is going is
taking a week off uh next Friday is a
holiday I think it's Good Friday
yeah some that everybody's shaking their
head I have no idea is is it Fran is
that what it is it's good Friday okay so
next week is a holiday so I don't know
they told me I had a day off so I'm
going on vacation I'm I'm going to take
off and I'm gonna I'm gonna take some
time off uh if you're in Paris uh
Tomorrow there's a bar citizen in Paris
tomorrow uh you can join uh Mark Gibson
and Christian Schmidt and uh uh uh some
uh some other folks whose names are
escaping me right now and myself at the
bar citizen in Paris uh the details are
on the website I don't know it's in my
email I'm just going to go where they
tell me uh and then there's another bar
citizen next week in Manchester I think
there's one in Phoenix going on this
weekend that Tyler uh that the Xylo uh
Tyler Wicken director of community is at
so you check that out if you haven't
already uh yeah and then we'll be back
here in two weeks with another star says
life and then we'll be back with more
inside Star Citizen uh in a month be
sure you check out uh you keep an eye on
the the Star Citizen socials and the
robertspace industries.com website for
details on 318-1 319 potentially going
to PTU sometime you know all the bug
fixes uh
I don't know what else to say uh about
you know the
40 oh 14 and stuff like this it's it's
the right people are on the right job I
am not the right people so I you know
those folks are working on that stuff
they will give you the updates when they
have them uh they're always they're I'm
in this little chat right here look I'll
show you the chat
a chart there where they're constantly
like we've got this and then the
diffusion writer is doing that and then
the cash clearing is doing that and they
are tracking these things down and
getting them fixed one by one by one
until they get to the point where things
will hopefully return to where we all
want them to be
so for Star Citizen life I'm Jared that
was Fran
um I'm going on vacation can I see this
fits well listen take my glasses off
hold on I'm out of here
enjoy your time
be safe
be kind to one another
and uh I'll see you again in two weeks
everybody take care
hi everybody

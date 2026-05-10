# CitizenCon 2948 - Panel: The Principles of Flight

**Video:** https://www.youtube.com/watch?v=V056GFJrnKo
**Date:** 2018-10-17
**Duration:** 45:15

## Transcript

hello
so I heard you all care about flight so
we'll sort of get started this is me
David Coulson I'm a gameplay programmer
I've been working on this flight model
for quite a while and this is John Crewe
the vehicle pipeline director you sort
of you're in charge of vehicles because
the vehicle pipeline is obviously a huge
thing so I'm sat there trying to get all
the ships from concept to release and
all the post release support and all
those systems that work with vehicles
yep so I think we'll just dive straight
into it this is what matters to everyone
is you know what's next for flight and
star citizen and I think since say 2.6
we haven't really had what we wanted out
of this we could do a lot better and we
sort of have this this vision for how we
want it and so we've sort of gone back
to 2.6 and we've looked at what you know
we had in in 3.0 and we're like
reevaluating everything and and thinking
about what is the best way to bring the
experience that is the most interesting
for everyone and so if we look at what
that kind of means we want you to really
feel the ship you know currently flying
around that sort of the ships kind of
feel quite similar between a lot of them
and they have so much acceleration that
it's you can't really feel all the
workings of your ship and that's that's
really not what we want and to go into
that we really want we want this system
to be kind of reactive to what's going
on inside your ship so it's not so not
as simple as just you know flying and
then you feel your foot your ships
handling and then you do your combat and
whatever we wait we want you to feel
what's happening inside the ship systems
like the fuel and the power and
everything and that should really feed
into what's happening in the flight
model and currently we just don't really
have anything like that and hopefully
this will get us this more more deep
interesting experience that changes
between different ships so you know we
want it so that that you fly this one
ship and you have to fly in a certain
way and that's the way to win in that
ship and then going to a different ship
you might have to change your approach
and so hopefully what we got is going to
sort of get us toward that we want to
kind of make is going back to the
reactive thing I think that's really
important because we really want we want
the thrusters to to have like a thrust
strength and then that if we can change
that we can kind of work toward changing
the handling of the ship while you're
flying which is something that we've
never really had before so what we're
about to show you not final so you all
know I'm sure you probably do already
you can play this flight model in the
the Drake virtual training facility
downstairs in the AT&T room and we want
your feedback and we want to sort of get
to the to the correct flight model that
is you know best for everyone so this is
not final and I hope you I hope you
enjoy it anyways but you know we'll work
with us and we'll we'll get it to what
we want it to be
[Music]
[Applause]
[Music]
[Music]
yeah so video is obviously very hard to
get across that the feeling of flight so
we're gonna talk in depth about a lot of
stuff here so let's start at the bottom
and work our way up yeah we'll start
with controls I think right at the
bottom of the flight system one you want
to talk about the throttle you may have
noticed on those videos there we've
changed the way the throttle works you
have direct control over your ship now
and that works at a much wider range of
speeds it's is sort of the feedback
we've had from people today like they've
noticed that change so let's have a look
at it in action so if you look on the
left side of the screen there is now our
left side of the HUD you now have a
speed bar and you're moving your speed
up and down with by pressing W and si
for a mouse and keyboard I will get to
HOTAS in a second promise me
but yeah so as you can see like if you
press W and then you immediately let go
the ship stops accelerating that's
unlike what we had previously where you
had this kind of defined speed range and
you you press W and s to move the target
speed up and down that range but we
don't have that range anymore right so
the speed just moves up and down
depending on whether you're accelerating
your trusters or not and it seems kind
of subtle but but I promise you this is
a really significant change and it
changes how you're going to have to fly
but there's another important part to
this which I haven't quite got to the
dot on the speed bar there is the target
velocity that the coupled mode flight is
trying to get you to ward right so if
you turn your speed is gonna change you
know your forward speed is going to
change from that dot and what that dot
is supposed to be and coupled mode
essentially amounts to moving your speed
toward that dog it wants your ford
velocity to be
held at that dot so you turn in coupled
mode and you'll see that ifcs will
automatically bring your speed up to
that that dot this doesn't happen
decoupled mode and that's one of you
know the big differences between the two
modes is you get this like I guess more
newtonian pushing like asteroids kind of
fly it out of decoupled which is not
coupled so look at the other side this
allows you to finally control your
thrust power unless you manage your
accelerations so this sets how strong
your thrust is in all axes when high FSS
is trying to move your ship and it gives
you that that fine control see if you
don't want to go a full tilt you can
just bring it down and then you're gonna
move at much much slower rates you want
to get it faster just scroll it back up
again so let's have a go yes
yeah so the way this works in HOTAS is
you're if you're using a not
bi-directional throttle which you can do
thrusting forward will increase the
amount of acceleration that your
thrusters are giving so you can hear
that as you push your thrust forward
you're gonna get more acceleration of
your ship and that speed is moving
further up the bar right and then if you
want a retro thrust you have the retro
thrust on a button and this kind of acts
a bit like space brake so you would
press this button and you're gonna have
your retro thrusters fire and pull that
speed back again here's another shot of
this you can hear the the thrusters
increasing in strength as you move that
that HOTAS up the other option here is
to have a bi-directional thrust so you
can actually have zero thrust
effectively be the center setting on a
throttle if you have a throttle that has
like a an indent in the middle and then
you can pull back to go backwards or
fire retro thrust and you know push
forward to fire forward thrust this is
kind of significant because you know
previously if you were if you pulled
back on your your your throttle I would
move that target speed down which would
make you slow down but that's actually
not what's happening now if you pull
back on your on your Hotez you're
effectively killing thrust on the main
thrusters and you'll carry
traveling at that speed but you're not
gonna slow down unless you press that
retro button so I think let's talk let's
talk about after my go on specifically a
B to the this that second stage of
afterburner so why are we done with it
well it's gone it's gone
so though I make a few people happy no
longer do you just hold shift to get up
to cruise speeds there's that weird bit
in the middle way like is it going is it
not going old now it's going or I don't
want to go there yeah so no more scaling
your accelerations back no more kicking
you out when you move
that's afterburner what about boost well
boost is now correctly called
afterburner
so yeah now you're press shift and you
will essentially you're firing boost
right so you're gonna get more
acceleration out of the ship and this is
not related to going to cruise speeds
this is literally the same as boost was
right you're going to do this and you're
gonna you're going to feel a more
acceleration out of your ship now there
has been a previous issue with boost
where it's overused shall we say with
some people taping it down I've heard
this we know how guys taping boost down
just for ya so we want we wanted a
consequence to using boost so we're
actually gonna get back to that know
that because we need to go over
something else first
so go on so how do we cruise now now we
got rid of a b2 well you'd be literally
just freely accelerate up to cruise
speeds in any direction coupled or
decoupled
so let's have a look at it in action so
here in the Aurora I'm just holding W at
this point accelerating Paz you see I'm
gonna go past the the SCM speed and the
ship just keeps accelerating now
obviously in coupled this is happening
with just you know accelerating forward
but you can actually do this with any of
the strafe axes as well and you could do
this in decoupled you literally just
accelerate for as long as you need and
you go up to the top the top speed of
the ship which is pretty much the same
as the crew speeds we had previously
though there is another change that's
kind of important here when you go past
the safe maneuvering speed of the ship
couple will start limiting your angular
velocity and this is kind of something
we had a while ago in cruise and this is
kind of a feature of couple because
being you know if you're above those
speeds and your thrusters are just not
quite strong enough to move you around
you're just gonna drift for miles and
miles and miles so this is kind of like
you could think of it as a safety
feature of couple that's saying hey you
know you're not really gonna be able to
practically turn at these speeds because
you're gonna drift so much so I'm gonna
limit your turn speed to try and keep
you from drifting now if you turn on
decoupled this is not actually the case
decoupled you can just accelerate nearly
as much as you want in any direction if
you're in coupled and you swap two
decoupled mid-flight then you get to
freely rotate around so we're going is
sort of you can see the target velocity
dot there I'm in two coupled I'm going
all over the place if you were to go
back into coupled at this point you're
gonna have a huge amount of slide
obviously you're got that huge velocity
going there but yeah they're two
different flight modes they behave very
differently you don't have to use both
you can use one of the other I think
it's really cool as well that you know
previously getting into cruise speeds in
in decoupled was kind of a pain because
you'd have to be going in a perfectly
straight line but because we've removed
that restriction this is just no longer
problem decouple to work so much better
like this so you might wander if you're
just flying around what if you don't
want to go up to these feats what if you
you don't want to you don't want to be
at the
feeds where you're having your your
angular velocity-- limited and it's kind
of a pain to manage that especially if
you're a more inexperienced pilot so
what we have is a speed limiter and this
is a toggle right so you can press this
button and it will hold your ship into a
maneuvering speed that is going to keep
you from sliding too much and you can
think of this call most almost like a
safety we call it SCM safety so we'll
just have a look at how that works so
you're traveling at a cruise speed and
you press the SCM safety button and that
will bring up these two triangles on
your speed bar and this is going to hold
you inside a certain speed range where
we can pretty much make sure that you're
not going to drift too much and we'll
reevaluate those speeds for all the
ships to kind of keep keep you from
sliding too much and keep you from
getting into territory where the ships
just very difficult to control and so
this is on by default you can obviously
change that in the settings and we
expect that the more experienced pilots
will be able to fly with this off and
they can soar the edge up to the higher
speeds and not lose control too much yes
it's not like hard cat-like it's a range
of velocity and speed
you're still gonna slide yeah in those
ranges yeah you just slide less when
you're going slower so so we talked to
us at the start a few goals you want to
do so a big one of this is how do we
make this system reactive and systemic
what does that mean so we fully
integrated FCS and thrusters into all
the other ship systems they have items
here Oh like all the rest
that means they now behave with power
fuel heat they will interconnect with
all the other items in the ship
previously there were sort of two
separate systems in the ship and never
the two would meet that's not the case
now so another thing we want to talk
about is having a grounding for how
these thrusters work in reality which we
can go over yeah so what we wanted to do
with thrusters is base them on some
real-life fiction that we can sort of
take forward into the future and that
was these things called Vasa mere
engines which I can barely remember what
they stand for I think it's variable
specific impulse magneto plasma Rakesh
that's what it is so this is a real life
rocket technology that is sort of going
through a lot of testing as a potential
future interstellar or intercept so the
idea basically is that you're gonna
ionize a fuel like some gas like argon
arseling so you're gonna use lots of
power to create this ionized plasma and
this is going to generate loads and
loads of loads of heat and then you will
accelerate the plasma with really strong
magnets to generate thrust and so this
kind of gives us a really good basis to
make all the thrusters work off of this
so if we have a sort of defined thrust
capacity for thrusters and this is their
performance effectively right this is
the amount of Newton's they can give out
and then we draw power and generate heat
and generate thrust based on this
fiction we can kind of make this a
really systemic believable system that
sort of works under some future version
of a real thrust system so we'll take a
look at this so we're gonna look at this
in action we do a lot of this by looking
at the MFDs just cuz it's a really clear
way of showing it in a presentation
format so as you can see now every
thruster has a little item on the power
UI and they draw power dynamically as
the thrust is given to them to move the
ship fuel is the same as this to just
imagine the power but replace fuel it's
the same and as you're flowing around
here you can see your main thrusters
going up using more power
the heat goes up as well with them now
I'm stopping so the retros went up there
[Music]
let's let's have a look what happens
like some of the other systems we have
in the game you can move the power
around so let's have a look at that so
you can manually under power or over
power each cluster and your ships gonna
behave accordingly so here I've reduced
the power dynasty on the rear thrusters
and this also affects heat as well so if
you're under powering thrusters they're
going to generate less heat afterburner
is actually just a facet of this system
it's just a shortcut straight into over
power mode and overclocking is then
another level on top of this where you
get that extra performance you get more
heat more where and it's all systemic
they they all just work together and a
pair of thrusters burn less fuel every
powered ones generate more heat if
you're running low on fuel you can
throttle all yeah your thrusters down to
just eke out that wor that more
performance and this is this is all
power system to give us consequences to
your actions at the moment in game you
can just fly around to your heart's
content
oh I've run out of fuel I'll just go to
Chrysler and get a bit more fuel you
know most my ships hot don't care it's
not really as interesting as it could be
a thing yeah so this gives us those
consequences so let's have a look so
this is what I was saying earlier with
the consequence to taping down boosts so
if you do that what will happen is your
thrusters will start overheating and the
more and more you do that the thrusters
are going to wear out and they're going
to get damaged so immediately if you
start overheating we're not going to cut
out your thrust or anything I think
that's a bit mean but we will
immediately have the thrusters start
struggling to give the thrust that it
can and you'll feel those this is this
is simulated dynamically on all the
thrusters right so if you for example
are overheating specifically your front
left maneuver thruster you're actually
going to feel the ship is becoming
imbalanced and you're going to have
if you have a penchant for like strafing
left everywhere in the game yeah that
site is gonna suffer so you will
actually feel that the ship is not
thrusting to the left as strong as it is
to the right because you've been
overheating the the thrusters and right
too much so we'll take a look at this so
right now you're flying around perfectly
normally and then you press shift to
afterburn and you'll see you getting
overpowered here now for the sake of
showing this we've massively increased
the wear number so the wear number is
that middle number that's number 15 in
the middle of the thrusters so you
overheat your thrusters too much that
number is going to start going up again
Dori it's it's faster here than it will
be in the game and you can see that
thrusters are starting to not use as
much power as they were I think that the
ideal behavior here is that they
actually draw as much power as they
would have but you're just not getting
the same amount of thrust out of the
thruster so you continue after burning
like this your thrusters get weaker and
weaker and weaker and you'll immediately
start feeling the ship get more and more
sluggish because you're just you know
you're you're damaging the thrusters by
doing this
yeah
if you keep doing this bad things are
gonna happen the the main visual cue of
this is thruster misfires now misfires
are going to be things that happen on
all items when they're getting worn and
overheated and four thrusters
specifically they they're gonna
accidentally fire that backfire like a
car sometimes they're not going to
respond when you want them to respond
generally gonna make flight pretty
unstable we talked about changing
thrusters out different thruster sets
will have different grades so if you if
you want to invest the time to to get
some resources to get better thrusters
they they've got a higher capacity for
heat and a slower wear rate they're
gonna have less misfires if you cheap
out and go for the bottom shelf items
then you're gonna hit this more you're
gonna experience this in game your ships
gonna be shaking around feeling
unresponsive but generally this is not
something you want to happen second a
second this is you've worn your
thrusters out you've done lots of stuff
for a long time you know playing not
very well yep and this is the
consequence to that yep absolutely
so we've got all these bad things it'd
be a bit unfair if we didn't give you a
way to sort of manage this so how do you
control your thruster back so you don't
get them overheated and to warn the
acceleration troll that we talked about
afterburner in the strength thrust
strength system are your friend in these
scenarios so going back to this if you
look at the right side of the hood
we're after burning here lots and lots
of heat is being generated here so to
manage that I just bring the thrust
capacity down really low generates a lot
less heat as I bring it up so the power
and heat go up in turn again afterburner
is just a shortcut to overpowering and
this is where you're gonna be managing
stuff and the great thing about this
you've got your you've got your throttle
you've got your after burn you know you
throw all your thrust capacity you don't
need to go in your f DS like flying
around doing this trying to work out
what's going on you've got those two big
items sent if you heard after a while
you're not even gonna need to look at
them you're gonna worked out where to
where to move them it's just a shortcut
to spending your life looking at little
screens yeah absolutely even more we can
do here straightforward enough since we
simulate this we can actually do we can
just push this to limit we can say hey
if someone shoots your thruster we can
start reducing its power output and its
strength and this is kind of this level
of dynamic flight behavior we just never
had before so we take a look at this
inside the freelancer you're flying
around your thrusters are in perfect
health you got no problem and so here
Gladius is gonna shoot some thrust race
it's already shot the one on the right
there the more and more you do this you
can see the thruster is starting to get
damaged and you will immediately feel
this in the handling of the ship so the
idea here so you can see these two
thrusters have been damaged if you try
and move you're just not going to get
the strength out of them that you need
and the expectation here is that we want
more interesting combat so that you know
I think currently people just go
straight for the cockpit if they know
what they're doing but actually it could
actually be another strategy to go for
the main thrusters of a ship or even if
you can if you're good enough to hit the
manoeuvre thrusters you can a
ship so it can't even roll yes yes at
the moment it's very time to kill we've
always talked about time to disable you
want to be able to board ships that you
take it out at the moment you can't
really do that but this is a system that
allows you to that ship you've
got distortion weapons to do that you
could physically damage them so it's all
building up to that grabbing hold of
other ships you know because the
thrusters are drawing parasaur
dynamically as well if you for example
take out the power plant of a ship
they're not going to be able to power
any of their thrusters the ship's going
to be completely incapacitated you just
won't be able to move which is pretty
cool so there's a bit more I think this
is a really important thing that we've
done is we've gone over every single
ship in the game and rebalance them and
retuned how the ships fly this kind of
feel like this is kind of a subtle thing
for a lot of people but I think for the
people who really know the details of
flying this is a huge huge deal so what
the goals here were to try and get some
more variety between the ships and try
and feel more momentum in the ships and
feel more character between them so
we're going to go through and we're
going to create like a systemic system
for deciding what thrusters and what
size of thrusters are going to get
certain thrust capacities and so they
cross all of the ships we sort of have
this this unified balance of how how how
ships feel and how they they get thrust
assigned to each direction the momentum
part is key here like at the moment in
the game maneuvering thrusters have like
absurd amounts of power to them yep and
this changes that yeah in in three three
there are actually ships that have like
these tiny little maneuver thrusters and
these giant main thrusters and the
maneuver thruster has more thrust
than the mains so no more of that we're
gonna make this a lot better so we look
at the Gladius the Gladius has these two
really big thrusters straightaway if I
make a left here and you can see how
much more drift there is than there used
to be you really want to feel the
momentum when you're moving a ship
around so I think the the Gladius has
quite a few thrusters that can point
downward so you will actually feel
differences in trying to strafe in
certain directions and of course the
angular acceleration is also super
important here the layout of the the
gladiators' thrusters actually gives it
more pitch authorities than than y'all
and so in this ship that's going to be
the dominant way you're going to want to
try and use your role and pitch to get
on target and hold the target in front
of you and that may not be what we have
with other ships right variety and
character yeah this variety is super
super important to us so you can see in
the outside view here as you move around
it really I I can't stress how cool it
feels to have this momentum it really
makes flying it makes it arguably more
difficult but I think it's more
rewarding when you fly really well and
that's that's really cool so I think we
will we will move on a different ship
yeah
we'll move on to the Hornish Jeff Hornet
in comparison to the guys much beefier
much heavier and has weaker directions
in all other axes except for going
forward so it has that huge main engines
so far more acceleration going forwards
and it's shorter than the Gladius so it
actually has weaker pitch Authority but
it's your is much stronger so if you
only have those two ships you're going
to be flying them two completely
different ways to have it you can fly
them the same way one's gonna be worse
what you're doing than the other so you
need to learn and feel how those two
ships behave we'll fly them accordingly
again very hard to see in a video
recommend you go play this and see how
it feels I just want to do a tiny bit of
audience participation participation at
this point how many of you have a
Gladius mister kantor it's not that many
not that many how many of you have a
Hornet it's a lot more then let's look
at another ship how many people have an
Aurora that's a lot more yeah Aurora
we'll take a look at the Aurora so I
think we've been kind of guilty of
punishing the Aurora a bit too much
making it pretty much useless in combat
and you know it's still a starter ship
so it's still not going to be anywhere
near as good as the Gladius and the
Hornet but using this new system of
assigning thruster strengths we can
actually have it give some strengths
like one of the big strengths of the
ship is that it's really really light
it's much lighter than the the hornish
and so even though it has weaker
thrusters overall it actually has almost
I think it actually has slightly more
acceleration in some strafe directions
than the hornish but it obviously
sacrifices not even close to as powerful
main thruster and so you know in the
Hornet if you're going to be getting
you're getting your back out and using
the main thruster you you can't really
do that as much in the Aurora
it's just not quite gonna be as useful
we can also use the previous ship item
to zero systems to make the Aurora not
as useful say as a Hornet because you
know maybe you could just cat dish to be
thrust well enough or you just don't
have the items to match the Gladius this
is the most popular ship in the game yes
absolutely we definitely didn't
appreciate it enough in all the previous
tuning zone yeah we don't want to nerf
the ship for sure it should still be
useful even though it's not not as good
as the better ships so I think that is
that we also to do all of this we wanted
to make a ship design tool right so
we're gonna actually try something
slightly risky here and do a live demo
first said there may be some crashes
here so there probably won't be some
crashes but we made the ship design tool
and what we wanted here was super fast
iteration you know previously when
designing ship handling we had to hand
edit XML files and run console commands
and it was just kind of a pain it took
it took hours wait way back years ago we
as designers to tune the ship you had to
go in each individual thruster XML and
go put its force output in Newtons yep
to do all those then you had to reload
the game then you had to test it with no
feedback on that the times and the
accelerations rango yeah uh feels okay
all that feel terrible you know gimble
thrusters because we have gimbal
thrusters thrust controls can give
strength in lots of different directions
but not at the same time right and it
makes it basically impossible for a
designer to predict what the
acceleration of a ship is going to be in
each direction based on just setting the
thrust capacity so what we have now we
run back to the editor so here's the
editor so we have this new tool here
which is the ifcs editor tool and this
is going to allow us to do live editing
so we run in the game I'm gonna spawn a
Gladius here it's interesting
every studio has their own favorite ship
so yeah the u.s. Studios love to test
everything on the horn
the UK loves doing the Gladius okay so
we have these dev tools now if you've
never had before so as I move around we
can see the thrust output and the gimbal
direction and all of the thrusters while
you fly around and this level of
information we've just never really had
before now these big red and blue cross
in the middle of the screen here this is
the thrust strength for a linear thrust
for their ship so you can see you got
sixty five point eight meters a second
Ford minus twenty seven to the left and
twenty seven to the right as well so we
have all the thrusters in a list here
right so these are these are the
thrusters we can click on them and
they'll highlight we're on the ship that
is and then we can actually hand edit
the thrust capacities so these are the
main thrusters if I make these ten you
can immediately see that the ships
handling where the ships Ford
acceleration has changed if I try and
accelerate forward it's gonna be a lot
slower and there's no reloading of the
editor and this is immediate you
immediately feel the difference we have
a lot of ships in the game so if you
have to reload the editor every time I
do it it adds minutes times hundreds of
ships it gets very long so to go the
opposite why don't we take some of these
thrust areas of the front here and we're
just gonna make them really strong we're
gonna get like a great career in that'll
do so we now have fifty five hundred
thirty two thousand meters a second Ford
so it's you can feel the difference in
the role is just immediate difference we
get up to speed really fast so we have
this live editing now obviously we
mentioned earlier that hand editing
thrust capacities is just kind of a
no-no I mean you could do it but it's
basically impossible to guess what these
thrusts what these accelerations are
going to be so to solve that we have
this calculator here we can enter the
ship's desired handling so our actually
to put these back to a sensible number
for a second it's alright there we go so
if I say we got 15 meters a second in
the Ford y direction of the ship if we
just change this to a hundred this is
different from where we are at the
moment where it's all based off goal
times yes is a different way of doing
this so you enter in the desired
acceleration and you click tune ship and
it'll automatically
the thrust capacities of all the
thrusters and it will obviously now you
can see that the forward acceleration is
now 100 meters a second this obviously
not like you can sit and calculate that
number on paper but I'd you just be
insane to do that I don't know why you'd
want to do that so we have this now and
again you can see how live this is it's
really taken me like seconds to change
the handling of the ship we also have
all of this extra information here so we
can fly around the ship and monitor what
it's doing and this level of sort of
interactive ship design is something we
just we just never had before so this is
really cool we're gonna jump back to our
presentation here we go we'll skip past
our back up video we're gonna take a
look at atmospheric flight yeah
fly down to the planet pay close
attention to the audio here the audio is
fantastic here
so there we go
atmospheric flesh anybody notice
anything different about what was shown
there well so no God left so in the
current version of the game we do
simulate drag but we never got around to
implementing lifts so now we have lift
and drag and that is a huge it's hard to
massive state how much of an improvement
that is and a big change it's it's what
makes atmospheric flight different to
spaceflight rather than just being a
diluted version of spaceflight so the
atmospheric flight system as a whole is
that a huge amount of work done to it
lift drag turbulence they've all had
some changes so let's have a look sit in
the Gladius yeah so we fly around in the
Gladius and we try and you're
immediately you're gonna feel torque on
the ship trying to keep it into the wind
right obviously if you hard you're in a
plane and in real life it's just not
going to work right and then as you see
if we roll in pitch you can actually
turn so much faster in fact you can
actually almost completely arrest the
the dirt the drift that you would get in
space so you see how hard we can turn we
actually start to black out that's not
black out from the thrusters that is
black up from the aerodynamic forces on
the ship which is not something you get
in space
I think this is a this is this change
this has to fly it you can see this is
someone like well it's me me trying to
y'all really hard and you see how the
ship like torques back into the wind if
you for example try and hover your ship
and then accelerate to cruise speeds
sideways the ship will experience all
these aerodynamic forces that it'll
actually pivot the ship back into the
wind just to sort of get this this
difference right the ships are obviously
like planes in real life don't fly
sideways so the Gladius is probably one
of the closest ships we have yeah to a
modern-day plane so it has that huge
lift area so let's let's compare this to
another ship which is not not nearly so
aerodynamic everyone's favorite the
Aurora so the Aurora Flying Brick really
isn't it's not really got much of a lift
surface so it is a lot it flies a lot
slower because it it struggles to cut
through the air it's got a lot more
instability as you can see there it's
true we're trying to you're here but it
just just not do it it's just not doing
it because it's hitting that wings and
kicking back another downside to this
beyond that the thrusters have to do a
heck of a lot more work just to do this
so they're they're running hotter
they're consuming more fuel doesn't mean
they like this all the time you can get
around this to extent again bring the
thrust capacity down you're gonna be
flying slower I should add that you know
your thrusters are doing all this work
when you have a super not aerodynamic
ship like in the Gladius you can
actually fly along stable and turn your
thrusters off and the ship will glide
which obviously you can't do in the
aurora you're gonna have to have the
thrusters working an awful lot more yeah
if you're gonna go down pretty quickly
with this exactly exactly so let's have
a look at what's going on and yeah so
this is a little bit of debug stuff you
can see what's going on so the red line
is the drag and it's obviously moving
around because of some of the turbulence
in the air and you roll and pitch and
you get this sudden force of lift
pulling the ship up and this I just I
hope unfortunately we couldn't have
aerodynamic flight at the at the Drake
virtual training facility today but this
difference is massive right you if you
try and strafe around and like circle
straight people in space and you try and
do that and atmosphere it's going to go
quite badly wrong for you you need to
really adjust your flight your flight
strategies in atmosphere and the hope is
that you're gonna go into atmosphere an
atmospheric flight is gonna be a bit
more like planes and that difference is
going to be really really drastic and
having that difference in game players
is really really exciting yeah
so we're also going to take a quick look
at ship management yep so again how do
you manage all this stuff in atmosphere
you've got to keep your thrusters cool
use the correct amount of power it's
different to spaceflight again so the
the thrusters now this goes back to
massively impaired thrusters and current
game they now either have to fight the
atmosphere or if you've got a less or
more aerodynamic ship they'll fight it
yeah so let's have a look at how we
manage that in game freelancer not a
particularly aerodynamic ship it's in
atmosphere here going forwards
look at MFDs bits a second to to see
just how hot you look at the target
velocity as well you can see that the
ship is not actually able to reach the
target velocity and that's because the
drag so if you pump more power into your
thrusters you actually can increase your
top speed in the atmosphere because your
terminal velocity lotsa gonna be a bit
higher so what we've done here is we've
reduced thrust capacity down you see the
heat sort of reached an equilibrium down
those two mains there so 350 I've gone
to overclock them now and now we can't
hit that speed you probably could
yep keep ticking it up but you paying
the price of more heat so now the
thrusters are over heatsink so how do I
stop that turnoff
we eats going away now it's probably
best to turn off overclock as well
otherwise when you turn them back on
they're just gonna go back into that
cycle put it back in again
you know you've rented yourself
overeating
so yeah that's basically magic I think
we're a bit tight on time today we are
we don't have enough time to go over
they unfortunately but there has been so
many other changes to the flight system
in the past year and hopefully like we
obviously can't have a three-hour slot
to keep talking about them but we're
gonna go over a few of the other things
briefly I don't know if you've heard we
have completely new ship audio every
single ship in every single thruster
everything is completely new
you heard also the the atmospheric sound
is completely new and we're really
excited about this is actually like a
such a huge difference it sounds so much
better than it used to
yeah decouples had a lot of changes
those of you fly decoupled obviously
have much fun with all those bugs
swapping between the two modes stuff not
remembering itself we've worked on all
of those yep
going with that dual-stick flight I
think is something that hasn't really
had the attention that it needs so you
put a lot of effort into that to make
that experience better obviously the
control changes we talked about earlier
are hopefully trying to address some of
those issues and make couple of jewel
sticks in there yeah you can trap some
you'll stick flying in the in the land
area and aí flight now uses exactly the
same system so we get lots of cool
little little stuff wingmen can
especially for squadron I've got all the
wingman followers on it wing will just
be slightly offset and they move with
you a lot of the core AI flat systems
have been heavily updated and this is
going to slowly trickle down into the AI
of flight behaviors to make you know
significantly improved AI flight we've
also worked a lot on the core like
performance of the system so hopefully
having like 80 ships in a level is going
to not completely tank your frame rate
so we'll get some more frames per second
out of that and the whole system is a
little bit lighter on the CPU which is a
huge improvement as well mo ship design
tall so at the moment the the sort of
knowledge for tweaking and tuning ships
is very centralized something goes wrong
there's only a few people that can deal
with it you've got all these tools now
that enable anyone to go in there and
help out
you get that instant feedback like we
saw in the editor you know what you're
doing you don't have to sort of go into
five million spreadsheets and look at
some numbers and graphs to try and work
out yeah it's all live edit updates in
real time it's great so another thing
that we can do now is swapping out your
thrusters this is a super exciting thing
it goes back to what we were talking
about earlier in how the thrusters all
have their own individual thrust
capacity which dynamically changes the
ships handling so you can for example
either swap out a whole set of thrusters
or you can swap out specific thrusters
and the handling of the ship will
real-time change based on that yeah and
some more UI updates as well we
obviously we saw a new central hub there
that has those features on stuff we
didn't talk about in there there's a
little g-force meter shows you g-force
that's back lots more planned so this
will be coming out in 3.4 we weren't
ready for 3.3 unfortunately but there is
still a few months before this happens
and we actually have some more things
that we want to do so harbor bikes huge
deal I think right now they just don't
really feel great and so we want to go
over the handling of hover bikes and
really tune that experience and make
that a lot more interesting so it's you
know more like you're you're you're
close to the ground type control however
like betta failed everyone
yeah always once networking so I've seen
the network team have been super busy
with OCS buying curling Sierra's
variables everything we need to get
their support to finish off a few more
things on the on the ICS side obviously
it's all based around the current system
that will be out there in 33 there needs
to be a lot of tweaks for 34 to get it
all working nicely but it does work and
if you go play it you'll see that you're
all in a server there six on six
so really the thing that you all want us
to work on right is ESP we have already
done a lot of work on ESP but there's a
lot more time and the hope is that over
the next few months now that you're all
sort of got to play this we're going to
spend a lot more time on ESP and we're
going to dial that experience in for
three point four hopefully with your
feedback as well I think it's a it's a
feature that
is very reliant on what the actual
experience of a wide variety of players
are so we're gonna spend a lot more time
on that UI improvements obviously it's
not a great deal of goods if you can't
see or understand what's being presented
to you so we've got a lot of plans that
we want to do there to make that much
clearer yep on top of that the landing
and docking systems are also scheduled
to get a lot more work we want to make
landing is not really great and we want
to make that a lot better and the
systems to help us through like Auto
land and stuff are also going to work a
lot with the docking system so you can
actually dock ships together and stuff
and that's going to work an awful lot a
lot better we need that for bigger ships
like the whole sea who need to dock to
stations to be spawned and load
everything because obviously if they're
full of cargo they can't and you can't
lounge pants a cargo so yep it all ties
together so I think we're actually
running over time we're probably gonna
be asked to leave the stage at some
point so I think that about wraps it up
for us
[Applause]

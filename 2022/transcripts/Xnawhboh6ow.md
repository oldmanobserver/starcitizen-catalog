# The Need For (Multiple) Speeds | Journey to 4.0 (CitizenCon 2952)

**Video:** https://www.youtube.com/watch?v=Xnawhboh6ow
**Date:** 2022-10-08
**Duration:** 17:09

## Transcript

♪ [music] ♪
- [Yogi] Hi, my name is Yogi Klatt.
I am a gameplay programmer in the vehicle feature team.
I'm here with Richard Towler, David
Colson, Ged Talbot, and Jonny Young.
And today we're going to talk to you about the upcoming
changes to the flight systems and the combat systems
which are done specifically for "Squadron 42,"
but which will eventually find their way
to the "Persistent Universe."
♪ [music] ♪
We want to define ship roles for the game because every
role in itself and every ship can offer unique gameplay
opportunities for individual players.
- [David] We want to provide a lot more variety to the
gameplay in "Star Citizen," a lot more opportunity
for different careers, different responsibilities,
and different sort of perspectives
and views on gameplay where people contribute
different types of work and different
types of jobs.
- [Ged] "Star Citizen" is supposed to be a big
expansive game with giving the players lots of chances
to have a variety of different experiences.
It's not just about combat,
it's not just about an economy,
it's not just about piracy.
It's about all of those things
happening at the same time.
So we need ships that can act and function in
different ways to support all of those different goals.
- In trying to figure out these roles and define
what they are and make the gameplay for them,
we've started very heavily leaning toward combat.
Mostly because combat is a mechanic that is very widely
applicable throughout the game and the principles
behind it apply to various other roles in the game.
- [Richard] We've been working away in the S42 branch,
and this has really allowed us to isolate these ships.
So we've kind of broken it down into archetypes
and it's really allowed us just to kind of
break down what these ships do, you know.
And also it's to make sure that when we are defining
these roles and bouncing these roles that we're putting
the ships in the right place because we don't want
the ships to be like, you play this ship, it means you
dominate this part of the game.
There's always got to be plus and
minuses so the balance is right.
So there's still some crossover between the ships.
So just picking one type of ship
just, you know, isn't just to win.
- We have already defined several ship roles
and they're usually known as light, medium,
and heavy fighters.
Light fighters, for us, are fighters
which are very dominant in the area
of one-versus-one, PvP combat.
- But the common downside, because obviously,
they're light which means the materials chosen in the
ship are probably not the strongest.
So it's more about the attack, it's more
about trying to outposition and get in there
and attack and get out of the situation.
- Heavy fighters are kind of the opposite.
They're not supposed to be really good at one versus
one, but they excel at N versus N engagement,
so when we have group battles.
Medium fighters, for us, internally we
call multi-role fighters because they
have a lot of hardpoints, so they
have a lot of loadout flexibility.
So a player can tune them to the role, whatever
they want, but they will never reach the
performance of dedicated ships.
- A lot of medium fighters sometimes
come into the turret as well.
So they've got that additional gameplay
of the turret which is aimed to kind of
counter the lack of maneuverability
that their ships have.
- And then additionally to that, we have
racing ships which are basically just really
fast at changing the velocity vectors, and
interceptors, which we basically just want to go
very fast in the forward area but never reaching really
the performance envelope of dedicated dogfighters.
- Interceptors are designed to kind of
catch up to ships and disable them.
So they come with kind of advanced kind
of, you know, hardware on these ships.
- Bombers, on the other hand, are...well, they're
just lobbing heavy ordnance at larger targets.
So you use them to take out bigger ships.
But they're not really good at,
well, killing small fighters.
And then from smaller ships coming to
larger ships like Constellation Adapt [SP],
we want to change the gameplay to be less about
positional combat, but more going into the naval style
of combat where it's important to show the correct
shield and fire arcs and timing your shots
over long distances.
- So the purpose of ship roles is to really help
players understand what ship should be used
and when they should be used.
And it's really about delivering on those kind of
gameplay promises that we've been talking about,
you know, over the past, you
know, kind of several years.
- If every ship is the same, it's not fun.
But if we have dedicated ships with dedicated
pros and cons, then we can create very
exciting combat environments.
And the biggest challenge we see in order to get
that gameplay we want is the current speed that we
have in combat.
♪ [music] ♪
- It's a subject we've talked about
many, many times in the past.
And it's something we've tried many things with.
You know, we've tried limiting things at speed,
we've tried adjusting handling at speed.
We've tried so many things to kind of manage
the negative impact of speed on combat.
- [Jonny] When ships are going fast in combat,
they usually just end up very far apart,
which is not very interesting, and it just
devolves into jousting very quickly which
is also not very interesting.
- The second you create a longer distance between you
and the target, your angular requirements to maneuver
to that target are just extremely small.
And this is a very obvious math reason why high-speed
combat is kind of the opposite of what we want
to achieve, meaning meaningful and
effective positional maneuvering.
- We want the combat to be closer and to be more
turn-oriented, so rotation should matter more
than just flat speed.
- Having very high speeds that are pretty much the
same between all ship classes negates a lot of the
opportunity for smaller ships to
flex different types of gameplay.
- Another big issue with the speeds in combat is it's
very hard to keep players engaged in the combat because
players can move so far so quickly.
And so it's a short space of time, it's
quite hard to keep a track on your opponent.
- So you might think, "Oh, why don't we just
make the ship slower and call it a day?"
Well, we can't do that.
- The main reason we can't just make everything
slower is the size of the "Star Citizen" world.
We've got huge planets where we need to
go from the planet surface up into space.
We need to transverse between different systems.
So essentially, we can't have
just low speeds all of the time.
- There's a massive universe out there
to explore, there's planets to explore.
And the feelings we want to capture with the speed,
we still want element of danger that you can still go
too fast in lots of situations.
- We have tried an awful lot over the past few years
with what are called soft speed caps where there is no
speed cap on ships, but we encourage
gameplay to occur at a lower speed.
But it doesn't really work because the advantages
of flying fast in terms of defense is just better.
- So since the last year, the focus of
vehicle feature team shifted very heavily
towards "Squadron 42" and nailing down the
flight and space combat experience for it.
And I'm very proud to say that we finally found
a really good working solution that we're going
to show today.
♪ [music] ♪
So the main idea is to simply not have combat
and long-range travel at the same time.
So we're splitting these gameplay experiences.
This will be done by a thing
which is called master modes.
A master mode is a thing that
is globally applied to your ship.
And we have two of them, we have SCM, which
is now relabeled as standard control mode,
and QCM or QM for quantum mode.
- The idea is that between these two modes, we can
constrain the speeds in combat and also get all
of the maneuvering, like high-speed maneuvering
and traversal mechanics that we had before,
but in these distinct modes that are integrated with
lore and are integrated with the ship function such
that there's costs and payoffs for
being in each of the two modes.
- So let's start with standard
control mode and what this means.
So it's just a mode that we intend to be the functional
mode of the ship, whether it's combat, or mining,
or any of these kind of core
kind of things the ship does.
We want the player to do these things in this mode.
And what this does is it reduces the speed of the
ship, but it also enables the shield to be turned on.
And obviously, the intent behind this
is this is where you do your combat.
It's where the guns are on, the
missiles can be armed and fired.
And all the kind of operational things
a ship does operate within this mode.
- The speeds that you can reach in SCM are somewhat
limited, somewhere between 200 and 300 meters
per second tune-impending.
But this is basically the hard cap
which you cannot really exceed.
You can slightly exceed this by using boost, but
you cannot maintain any velocity beyond that SCM
limit for a longer period of time.
- So we're thinking of this as some
kind of energy management system.
So you can go a little bit faster with a little
bit more accelerations when you need to,
but you know that it is a limited
resource and you should use it carefully.
- Specifically, the boost space is interesting for
space combat because that boost space is not spheric
as it was before.
You can boost the fastest if you're
going forward on a straight line
and you have a lot of debuffs when
you're trying to boost backwards.
That alone gets us a lot of interesting
maneuvering space and variation in the day-to-day
dogfight maneuvering, so to speak.
- Importantly, you don't have your
quantum drive available in this mode.
The idea is that quantum is restrained
to the quantum traversal mode.
- The second mode is quantum
control mode, or QCM, or QM.
What this mode does is it unlocks your
maximum velocity that your ship can reach.
So when you were limited before to 200 to 300
meters per second, now you can go to 1200,
1400 meters per second, whatever your ship allows you.
- During the development of the quantum mode,
we realized we needed something that was a little
bit more kind of about traveling large distances
but not the distances that you need to, you know,
just purely be quantum driving,
traveling across the universe.
So we've created this feature called quantum
boost, which is available in the quantum mode
and you can access it at any point.
So at any point you want to kind of boost
towards your location that, you know,
you're kind of looking at but it's just too far away.
And this boost is available
for a limited amount of time.
And it's purely on a straight line.
- Just to give you like a ballpark, quantum
boost will allow you to go to a target fast if
it's within, let's say 50,000 kilometers,
whereas you will use quantum travel to do very
long-range jumps between planets.
So, quantum mode allows you to go
very, very fast, worth up to like 1200,
1400 meters per second when you want
to zip really fast over a planet.
It also allows you to quantum boost to quickly go
between points of interest which are rather close
to you, and it allows you to go to travel
long distances between planets and
large-scale stellar objects.
But it comes at a cost.
Your capacitor systems are nonfunctional because they
interfere with the quantum bubble that is allowing you
to go fast.
You won't have shields.
Your shields will collapse right away
when you swap into quantum mode.
Your weapons will stop working because anything
that's firing outwards of your ship will disintegrate
the quantum bubble.
Your countermeasures won't work, and you
will also not be able to use thruster boosts.
So basically all your capacitor and
combat-related systems are turned off instantly.
- When you switch between modes, there'll
be a little period of time where everything
has to spool up and change.
So you will lose your shields during this,
you won't have your weapons during this,
but you also won't be going fast.
So there's a risk-reward element
when you need to switch modes.
- So it's going to be very kind of
conscious choice of what mode you should be
in at any particular point.
So if you feel the threat of another...someone
that's close by, you're not quite sure what their
intention is, maybe switch to standard control
mode and be safe, or you can switch into quantum
mode and escape.
And this is going to kind of bring in an
element of danger, an element of risk.
- Because going into the two different modes is
like a systemic thing within the ship's items,
we actually have the opportunity now to define ship
roles that can block people from escaping either using
devices that suppress the quantum bubble or devices
that can effectively interfere with your ability
to transfer between the modes.
For example, specific ships like interceptors can be
tuned such that they have a higher standard control
mode speed, so they're able to catch up with people.
Or, for example, make the swap between the modes
faster and more efficiently so that they could catch
up with you going to standard control mode and attack
you more effectively as per the properties of their
ship versus another ship which might not
be as good at doing something like that.
- It's, in fact, fundamentally changed
the gameplay experience for us.
And this is working now, you know, and
we're playing it every day in the studio,
we're refining it, we're tweaking bits here and there.
But we're at that stage now where we're tweaking
and balancing and we've got the core features.
They're in the game playable.
And the difference it's made on the game
for us is, it's basically night and day.
- Because the speeds have been limited in standard
control mode, suddenly fights are a lot closer,
the accelerations of ships similarly have been retuned
a little bit and their afterburner strength has been
retuned a little bit to make it so that
you can orbit around ships and have a lot
more interesting maneuvering.
And because the ranges are closer, maneuvers
that would be performed by your ship have a
much more significant impact because you're closer.
So if I, like, thrust up or down,
you'll immediately see the difference.
So similarly, things like capital ships effectively get
a buff to their offensive capabilities with this change
because suddenly you can't orbit a capital
ship at high range and high speeds.
You have to get a lot closer which will make the
turrets much more effective at shooting you.
Turrets become more important, and working
as a group to attack capital ships is more
important than it has been before.
♪ [music] ♪
- This is a really exciting change because it allows us
to keep the combat speeds relatively low where we know
that the gameplay is better for that while also keeping
the point-to-point travel speeds as high as they should
be for PU.
- Playing with master modes in "Squadron 42" has
been a lot of fun simply because it's changed the
entire combat experience.
Before, you'd find that you were fighting at a huge
distance, now you find that you're in really tight,
close combat with the other players.
I think the biggest part of this is going to
be when we have the largest ships interacting
with the smaller ships.
Once we can have battles with big capital ships and
smaller ships, we'll have brought something to the
Star Citizen world that I don't think has been...has
come out before, and I think it will make a massive
improvement to the game.
- Having made these changes to implement master
modes and rebalancing all of the ship speeds,
we'll finally be able to define ship roles in the
way that we've always wanted and to bring a lot more
variety to the gameplay that we haven't had before.
- So it's been a really long journey here, obviously,
because you've been a part of this journey.
You know, we've tried many, many different
things over the time to try and really
create the experience we want.
But, you know, the reality is for us, it came down
to, you know, we'd always [inaudible] which is
creating choice for the players.
It's about giving players the option
and their choices have consequences.
You know, so with master modes, it really
helps define the player choice in the game.
So they're choosing to do combat, they're
choosing to travel from A to B in quantum,
they're choosing to QT boost somewhere.
Just giving players that freedom within the universe
we have is just...like it's a really magical thing.
And we try many times to control that, you know,
as designers we try and get a specific experience
at some point.
But we always end up coming back to the fact,
let's just give the players the choice and let them
make the key decisions and we'll
design the balance around that.
- We finally have it.
So we're now nailing down the space comet experience
for "Star Citizen," specifically for "Squadron 42."
We know from internal player test
that the master mode stuff works.
We know that it works with our flight
retunings and it's very exciting.
It will yet take a while to ship this to the PU because
the amount of ships you fly in "Squadron 42" is
rather limited, whereas in "Star
Citizen" we have to about, I don't know,
more than 100 ship records at the moment.
But the whole hard problem of designing
this thing in the first place is over,
we just need to get the numbers in now.
- And all footage you've seen today is from Squadron.
It's all currently playable in the game,
you know, internally that, you know,
we're playing this every day.
We're still making some tweaks,
but everything is there right now.
It's all about the foundational
kind of tweaks that we're making,
and we can't wait to get it in your hands.
- So, thanks a lot for listening to us today.
We're very, very excited to get the
changes to you as soon as possible.
And yeah, we hope to see you fighting in the verse.

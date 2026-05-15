# The Need For (Multiple) Speeds | Journey to 4.0 (CitizenCon 2952)

**Video:** https://www.youtube.com/watch?v=Xnawhboh6ow
**Date:** 2022-10-08
**Duration:** 17:09

## Transcript

[00:01] ♪ [music] ♪
[00:08] - [Yogi] Hi, my name is Yogi Klatt.
[00:09] I am a gameplay programmer in the vehicle feature team.
[00:13] I'm here with Richard Towler, David
Colson, Ged Talbot, and Jonny Young.
[00:20] And today we're going to talk to you about the upcoming
changes to the flight systems and the combat systems
[00:26] which are done specifically for "Squadron 42,"
but which will eventually find their way
[00:29] to the "Persistent Universe."
[00:31] ♪ [music] ♪
[00:39] We want to define ship roles for the game because every
role in itself and every ship can offer unique gameplay
[00:47] opportunities for individual players.
[00:49] - [David] We want to provide a lot more variety to the
gameplay in "Star Citizen," a lot more opportunity
[00:54] for different careers, different responsibilities,
and different sort of perspectives
[01:00] and views on gameplay where people contribute
different types of work and different
[01:04] types of jobs.
[01:05] - [Ged] "Star Citizen" is supposed to be a big
expansive game with giving the players lots of chances
[01:10] to have a variety of different experiences.
[01:13] It's not just about combat,
it's not just about an economy,
[01:15] it's not just about piracy.
[01:16] It's about all of those things
happening at the same time.
[01:19] So we need ships that can act and function in
different ways to support all of those different goals.
[01:23] - In trying to figure out these roles and define
what they are and make the gameplay for them,
[01:28] we've started very heavily leaning toward combat.
[01:31] Mostly because combat is a mechanic that is very widely
applicable throughout the game and the principles
[01:37] behind it apply to various other roles in the game.
[01:40] - [Richard] We've been working away in the S42 branch,
and this has really allowed us to isolate these ships.
[01:46] So we've kind of broken it down into archetypes
and it's really allowed us just to kind of
[01:49] break down what these ships do, you know.
[01:51] And also it's to make sure that when we are defining
these roles and bouncing these roles that we're putting
[01:57] the ships in the right place because we don't want
the ships to be like, you play this ship, it means you
[02:02] dominate this part of the game.
[02:04] There's always got to be plus and
minuses so the balance is right.
[02:06] So there's still some crossover between the ships.
[02:08] So just picking one type of ship
just, you know, isn't just to win.
[02:12] - We have already defined several ship roles
and they're usually known as light, medium,
[02:16] and heavy fighters.
[02:17] Light fighters, for us, are fighters
which are very dominant in the area
[02:21] of one-versus-one, PvP combat.
[02:24] - But the common downside, because obviously,
they're light which means the materials chosen in the
[02:29] ship are probably not the strongest.
[02:31] So it's more about the attack, it's more
about trying to outposition and get in there
[02:34] and attack and get out of the situation.
- Heavy fighters are kind of the opposite.
[02:38] They're not supposed to be really good at one versus
one, but they excel at N versus N engagement,
[02:44] so when we have group battles.
[02:46] Medium fighters, for us, internally we
call multi-role fighters because they
[02:50] have a lot of hardpoints, so they
have a lot of loadout flexibility.
[02:54] So a player can tune them to the role, whatever
they want, but they will never reach the
[02:57] performance of dedicated ships.
[03:00] - A lot of medium fighters sometimes
come into the turret as well.
[03:03] So they've got that additional gameplay
of the turret which is aimed to kind of
[03:07] counter the lack of maneuverability
that their ships have.
[03:09] - And then additionally to that, we have
racing ships which are basically just really
[03:13] fast at changing the velocity vectors, and
interceptors, which we basically just want to go
[03:22] very fast in the forward area but never reaching really
the performance envelope of dedicated dogfighters.
[03:27] - Interceptors are designed to kind of
catch up to ships and disable them.
[03:32] So they come with kind of advanced kind
of, you know, hardware on these ships.
[03:35] - Bombers, on the other hand, are...well, they're
just lobbing heavy ordnance at larger targets.
[03:41] So you use them to take out bigger ships.
[03:44] But they're not really good at,
well, killing small fighters.
[03:47] And then from smaller ships coming to
larger ships like Constellation Adapt [SP],
[03:52] we want to change the gameplay to be less about
positional combat, but more going into the naval style
[03:57] of combat where it's important to show the correct
shield and fire arcs and timing your shots
[04:02] over long distances.
[04:04] - So the purpose of ship roles is to really help
players understand what ship should be used
[04:09] and when they should be used.
[04:11] And it's really about delivering on those kind of
gameplay promises that we've been talking about,
[04:15] you know, over the past, you
know, kind of several years.
[04:18] - If every ship is the same, it's not fun.
[04:21] But if we have dedicated ships with dedicated
pros and cons, then we can create very
[04:26] exciting combat environments.
[04:28] And the biggest challenge we see in order to get
that gameplay we want is the current speed that we
[04:33] have in combat.
[04:35] ♪ [music] ♪
[04:38] - It's a subject we've talked about
many, many times in the past.
[04:41] And it's something we've tried many things with.
[04:43] You know, we've tried limiting things at speed,
we've tried adjusting handling at speed.
[04:47] We've tried so many things to kind of manage
the negative impact of speed on combat.
[04:52] - [Jonny] When ships are going fast in combat,
they usually just end up very far apart,
[04:58] which is not very interesting, and it just
devolves into jousting very quickly which
[05:02] is also not very interesting.
[05:03] - The second you create a longer distance between you
and the target, your angular requirements to maneuver
[05:09] to that target are just extremely small.
[05:13] And this is a very obvious math reason why high-speed
combat is kind of the opposite of what we want
[05:21] to achieve, meaning meaningful and
effective positional maneuvering.
[05:25] - We want the combat to be closer and to be more
turn-oriented, so rotation should matter more
[05:32] than just flat speed.
[05:33] - Having very high speeds that are pretty much the
same between all ship classes negates a lot of the
[05:41] opportunity for smaller ships to
flex different types of gameplay.
[05:45] - Another big issue with the speeds in combat is it's
very hard to keep players engaged in the combat because
[05:51] players can move so far so quickly.
[05:53] And so it's a short space of time, it's
quite hard to keep a track on your opponent.
[05:57] - So you might think, "Oh, why don't we just
make the ship slower and call it a day?"
[06:01] Well, we can't do that.
[06:02] - The main reason we can't just make everything
slower is the size of the "Star Citizen" world.
[06:08] We've got huge planets where we need to
go from the planet surface up into space.
[06:12] We need to transverse between different systems.
[06:15] So essentially, we can't have
just low speeds all of the time.
[06:18] - There's a massive universe out there
to explore, there's planets to explore.
[06:22] And the feelings we want to capture with the speed,
we still want element of danger that you can still go
[06:26] too fast in lots of situations.
[06:28] - We have tried an awful lot over the past few years
with what are called soft speed caps where there is no
[06:37] speed cap on ships, but we encourage
gameplay to occur at a lower speed.
[06:44] But it doesn't really work because the advantages
of flying fast in terms of defense is just better.
[06:53] - So since the last year, the focus of
vehicle feature team shifted very heavily
[06:57] towards "Squadron 42" and nailing down the
flight and space combat experience for it.
[07:02] And I'm very proud to say that we finally found
a really good working solution that we're going
[07:07] to show today.
[07:09] ♪ [music] ♪
[07:12] So the main idea is to simply not have combat
and long-range travel at the same time.
[07:19] So we're splitting these gameplay experiences.
[07:22] This will be done by a thing
which is called master modes.
[07:24] A master mode is a thing that
is globally applied to your ship.
[07:29] And we have two of them, we have SCM, which
is now relabeled as standard control mode,
[07:35] and QCM or QM for quantum mode.
[07:38] - The idea is that between these two modes, we can
constrain the speeds in combat and also get all
[07:44] of the maneuvering, like high-speed maneuvering
and traversal mechanics that we had before,
[07:48] but in these distinct modes that are integrated with
lore and are integrated with the ship function such
[07:54] that there's costs and payoffs for
being in each of the two modes.
[07:57] - So let's start with standard
control mode and what this means.
[08:00] So it's just a mode that we intend to be the functional
mode of the ship, whether it's combat, or mining,
[08:05] or any of these kind of core
kind of things the ship does.
[08:08] We want the player to do these things in this mode.
[08:12] And what this does is it reduces the speed of the
ship, but it also enables the shield to be turned on.
[08:18] And obviously, the intent behind this
is this is where you do your combat.
[08:21] It's where the guns are on, the
missiles can be armed and fired.
[08:26] And all the kind of operational things
a ship does operate within this mode.
[08:30] - The speeds that you can reach in SCM are somewhat
limited, somewhere between 200 and 300 meters
[08:35] per second tune-impending.
[08:38] But this is basically the hard cap
which you cannot really exceed.
[08:41] You can slightly exceed this by using boost, but
you cannot maintain any velocity beyond that SCM
[08:49] limit for a longer period of time.
[08:51] - So we're thinking of this as some
kind of energy management system.
[08:54] So you can go a little bit faster with a little
bit more accelerations when you need to,
[08:59] but you know that it is a limited
resource and you should use it carefully.
[09:04] - Specifically, the boost space is interesting for
space combat because that boost space is not spheric
[09:11] as it was before.
[09:12] You can boost the fastest if you're
going forward on a straight line
[09:17] and you have a lot of debuffs when
you're trying to boost backwards.
[09:20] That alone gets us a lot of interesting
maneuvering space and variation in the day-to-day
[09:25] dogfight maneuvering, so to speak.
[09:27] - Importantly, you don't have your
quantum drive available in this mode.
[09:30] The idea is that quantum is restrained
to the quantum traversal mode.
[09:35] - The second mode is quantum
control mode, or QCM, or QM.
[09:39] What this mode does is it unlocks your
maximum velocity that your ship can reach.
[09:44] So when you were limited before to 200 to 300
meters per second, now you can go to 1200,
[09:50] 1400 meters per second, whatever your ship allows you.
[09:52] - During the development of the quantum mode,
we realized we needed something that was a little
[09:56] bit more kind of about traveling large distances
but not the distances that you need to, you know,
[10:03] just purely be quantum driving,
traveling across the universe.
[10:05] So we've created this feature called quantum
boost, which is available in the quantum mode
[10:10] and you can access it at any point.
[10:11] So at any point you want to kind of boost
towards your location that, you know,
[10:16] you're kind of looking at but it's just too far away.
[10:17] And this boost is available
for a limited amount of time.
[10:20] And it's purely on a straight line.
[10:24] - Just to give you like a ballpark, quantum
boost will allow you to go to a target fast if
[10:30] it's within, let's say 50,000 kilometers,
whereas you will use quantum travel to do very
[10:35] long-range jumps between planets.
[10:37] So, quantum mode allows you to go
very, very fast, worth up to like 1200,
[10:43] 1400 meters per second when you want
to zip really fast over a planet.
[10:46] It also allows you to quantum boost to quickly go
between points of interest which are rather close
[10:51] to you, and it allows you to go to travel
long distances between planets and
[10:58] large-scale stellar objects.
[11:00] But it comes at a cost.
[11:02] Your capacitor systems are nonfunctional because they
interfere with the quantum bubble that is allowing you
[11:09] to go fast.
[11:10] You won't have shields.
[11:12] Your shields will collapse right away
when you swap into quantum mode.
[11:17] Your weapons will stop working because anything
that's firing outwards of your ship will disintegrate
[11:22] the quantum bubble.
[11:23] Your countermeasures won't work, and you
will also not be able to use thruster boosts.
[11:28] So basically all your capacitor and
combat-related systems are turned off instantly.
[11:32] - When you switch between modes, there'll
be a little period of time where everything
[11:36] has to spool up and change.
[11:37] So you will lose your shields during this,
you won't have your weapons during this,
[11:41] but you also won't be going fast.
[11:42] So there's a risk-reward element
when you need to switch modes.
[11:47] - So it's going to be very kind of
conscious choice of what mode you should be
[11:50] in at any particular point.
[11:52] So if you feel the threat of another...someone
that's close by, you're not quite sure what their
[11:56] intention is, maybe switch to standard control
mode and be safe, or you can switch into quantum
[12:02] mode and escape.
[12:03] And this is going to kind of bring in an
element of danger, an element of risk.
[12:07] - Because going into the two different modes is
like a systemic thing within the ship's items,
[12:14] we actually have the opportunity now to define ship
roles that can block people from escaping either using
[12:20] devices that suppress the quantum bubble or devices
that can effectively interfere with your ability
[12:27] to transfer between the modes.
[12:30] For example, specific ships like interceptors can be
tuned such that they have a higher standard control
[12:35] mode speed, so they're able to catch up with people.
[12:38] Or, for example, make the swap between the modes
faster and more efficiently so that they could catch
[12:43] up with you going to standard control mode and attack
you more effectively as per the properties of their
[12:51] ship versus another ship which might not
be as good at doing something like that.
[12:54] - It's, in fact, fundamentally changed
the gameplay experience for us.
[13:00] And this is working now, you know, and
we're playing it every day in the studio,
[13:03] we're refining it, we're tweaking bits here and there.
[13:06] But we're at that stage now where we're tweaking
and balancing and we've got the core features.
[13:10] They're in the game playable.
[13:12] And the difference it's made on the game
for us is, it's basically night and day.
[13:16] - Because the speeds have been limited in standard
control mode, suddenly fights are a lot closer,
[13:23] the accelerations of ships similarly have been retuned
a little bit and their afterburner strength has been
[13:28] retuned a little bit to make it so that
you can orbit around ships and have a lot
[13:32] more interesting maneuvering.
[13:34] And because the ranges are closer, maneuvers
that would be performed by your ship have a
[13:38] much more significant impact because you're closer.
[13:40] So if I, like, thrust up or down,
you'll immediately see the difference.
[13:43] So similarly, things like capital ships effectively get
a buff to their offensive capabilities with this change
[13:50] because suddenly you can't orbit a capital
ship at high range and high speeds.
[13:55] You have to get a lot closer which will make the
turrets much more effective at shooting you.
[14:00] Turrets become more important, and working
as a group to attack capital ships is more
[14:06] important than it has been before.
[14:08] ♪ [music] ♪
[14:12] - This is a really exciting change because it allows us
to keep the combat speeds relatively low where we know
[14:17] that the gameplay is better for that while also keeping
the point-to-point travel speeds as high as they should
[14:23] be for PU.
[14:25] - Playing with master modes in "Squadron 42" has
been a lot of fun simply because it's changed the
[14:30] entire combat experience.
[14:32] Before, you'd find that you were fighting at a huge
distance, now you find that you're in really tight,
[14:39] close combat with the other players.
[14:41] I think the biggest part of this is going to
be when we have the largest ships interacting
[14:47] with the smaller ships.
[14:48] Once we can have battles with big capital ships and
smaller ships, we'll have brought something to the
[14:53] Star Citizen world that I don't think has been...has
come out before, and I think it will make a massive
[14:59] improvement to the game.
[15:00] - Having made these changes to implement master
modes and rebalancing all of the ship speeds,
[15:05] we'll finally be able to define ship roles in the
way that we've always wanted and to bring a lot more
[15:10] variety to the gameplay that we haven't had before.
[15:13] - So it's been a really long journey here, obviously,
because you've been a part of this journey.
[15:16] You know, we've tried many, many different
things over the time to try and really
[15:20] create the experience we want.
[15:22] But, you know, the reality is for us, it came down
to, you know, we'd always [inaudible] which is
[15:27] creating choice for the players.
[15:28] It's about giving players the option
and their choices have consequences.
[15:33] You know, so with master modes, it really
helps define the player choice in the game.
[15:38] So they're choosing to do combat, they're
choosing to travel from A to B in quantum,
[15:42] they're choosing to QT boost somewhere.
[15:44] Just giving players that freedom within the universe
we have is just...like it's a really magical thing.
[15:49] And we try many times to control that, you know,
as designers we try and get a specific experience
[15:55] at some point.
[15:57] But we always end up coming back to the fact,
let's just give the players the choice and let them
[16:03] make the key decisions and we'll
design the balance around that.
[16:06] - We finally have it.
[16:08] So we're now nailing down the space comet experience
for "Star Citizen," specifically for "Squadron 42."
[16:13] We know from internal player test
that the master mode stuff works.
[16:17] We know that it works with our flight
retunings and it's very exciting.
[16:21] It will yet take a while to ship this to the PU because
the amount of ships you fly in "Squadron 42" is
[16:27] rather limited, whereas in "Star
Citizen" we have to about, I don't know,
[16:30] more than 100 ship records at the moment.
[16:31] But the whole hard problem of designing
this thing in the first place is over,
[16:37] we just need to get the numbers in now.
[16:39] - And all footage you've seen today is from Squadron.
[16:42] It's all currently playable in the game,
you know, internally that, you know,
[16:44] we're playing this every day.
[16:46] We're still making some tweaks,
but everything is there right now.
[16:49] It's all about the foundational
kind of tweaks that we're making,
[16:52] and we can't wait to get it in your hands.
[16:54] - So, thanks a lot for listening to us today.
[16:57] We're very, very excited to get the
changes to you as soon as possible.
[17:00] And yeah, we hope to see you fighting in the verse.

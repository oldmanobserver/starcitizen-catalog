# Star Citizen: Around the Verse 3.13 - LA

**Video:** https://www.youtube.com/watch?v=vY_NkFtAAPY
**Date:** 2016-11-10
**Duration:** 40:13

## Transcript

[00:16] Closed Captioning provided by the Imperial
News Network.
[00:17] Chris Roberts (CR): Hi, thanks for joining
us for this week’s Around the Verse. I’m
[00:18] your Host and Game Director, Chris Roberts
and with me is
[00:21] Sandi Gardiner (SG): Sandi Gardiner, hi Chris.
[00:23] CR: Hi Sandi.
[00:24] SG: On today’s episode we’ll dive into
the latest Star Citizen developments coming
[00:27] out of our Los Angeles studio and while ATV
mainly highlights content that’s coming
[00:32] in future game patches, there’s plenty of
gameplay that needs your help testing available
[00:36] right now.
[00:37] CR: Yes so backers can download the 2.5 Alpha
and explore around Crusader in the PU, visit
[00:41] Arc Corp, check out their ships in the hangars,
dogfight against Vanduul or fellow players
[00:46] in Arena Commander or try a hand at racing
on one of the Murray Cup tracks.
[00:50] SG: Yeah, lots to do and any bugs you find
or feedback you have please let us know on
[00:53] the forums and the issue council. All of your
input is such a critical part of the process.
[00:58] CR: Yes it absolutely is.It’s especially
critical as we get more and more new players
[01:02] joining us every week looking at it, getting
fresh new eyes so we have new opinions. So
[01:07] newer veterans, Star Citizen would not be
possible with out and we’d really like to
[01:11] thank you.
[01:12] SG: Yes we would, and the support of our generous
subscribers as well who help us to provide
[01:15] these behind the scenes shows and tons of
other weekly content.
[01:18] CR: Yeah definitely, a big thank you to everyone.
[01:21] Alright, so let's get onto the rest of the
show, so let's go to Eric to learn what’s
[01:26] happening with the L.A. studio.
[01:27] Studio Update
[01:28] Eric Kieron Davis (EKD): Hey everyone, I’m
Senior Producer Eric Kieron Davis with your
[01:31] studio update. Here in Los Angeles, we not
only get the chance to work on elements for
[01:35] the upcoming Persistent Universe releases
as well as Squadron 42, we also work on some
[01:40] larger foundational systems that affect both
games - let’s start with engineering lead
[01:44] Paul Reindell and team to talk about what
they are working on.
[01:47] Paul Reindell (PR): The major things we’re
working on right now, obviously is the Item
[01:53] System 2.0, finishing out, Mark is doing a
great job on finishing all the ships to get
[01:59] ported over to the new system.
[02:01] We currently working also on the room system
and the action system which is the whole system
[02:12] where we place different module rooms, put
them together and you can define atmosphere,
[02:17] and then something like “destroy or blow
off a door, the atmosphere goes out and the
[02:23] player will die” and at the same time we
also building the whole interaction linkage
[02:28] system which allows us to place different
objects in a level and a designer can just
[02:33] draw a interaction link for something then
make a button here, and they make a power
[02:36] plant here and now they can just draw an interaction
link, “press this button and a power plant
[02:41] goes on now” which is a huge prerequirement
for getting all those dynamic missions working
[02:47] in multiplayer since CryEngine flowgraph system
is just not working in multiplayer so we are
[02:54] replacing that all but Chad doing a great
job working on that.
[02:59] And that’s all the prerequirement for our
single player campaign but also for the whole
[03:04] PU mission system.
[03:05] Chad McKinney (CM): Hi, my name is Chad McKinney
and I’m a Gameplay Programmer here in the
[03:09] Los Angeles studio, I’m going to be talking
about interaction linking and the room system.
[03:15] So this level demonstrates the room system
and atmosphere containers - the room system
[03:20] and atmosphere containers are used to create
boundaries for our space stations and ships
[03:27] and places in the game where we want there
to be pressurization of different gas levels.
[03:33] It’s something that we’ve to date faked
in the game with the airlocks and you know,
[03:41] if you go into an airlock without a space
suit, you’ll die. The system in place that
[03:46] does that isn’t very general and it doesn’t
allow for emergent gameplay. What we’re
[03:51] working on now is a system that is a more
proper way to handle pressurization and depressurization
[03:57] in the game and it’s still pretty early
days for this - as you can see this test level
[04:04] just has some basic boxes and shapes that
define their room volumes and we have some
[04:13] test assets in here just to play around with
it.
[04:16] These spheres that are inside these volumes
represent the atmospheric composition so here
[04:21] the blue spheres are oxygen and the red spheres
indicate that that room has been filled with
[04:28] carbon dioxide.
[04:31] The room system uses three main types of entities
- one is the atmosphere container which is
[04:39] the thing that has the atmosphere composition
so for instance, if I come over here and look
[04:45] at this debug output, I can see that the composition
in a particular room is 0.8 percent oxygen
[04:52] and 0.12 carbon dioxide so if I walk into
space, I have nothing. There is no atmosphere
[05:01] in here.
[05:02] So the atmosphere container is a very important
part, the next is the room, the room indicates
[05:07] the volume and the boundaries for the atmosphere
that is connected to it - later on this will
[05:15] also be used to indicate security and power
connectivity but for now we’re just working
[05:21] with atmosphere. So that’s atmosphere containers
and rooms and the third important type is
[05:28] the room connectors - so here is the yellow
box around this door, this yellow box indicates
[05:33] that there is a connection between this room
here and outer space.
[05:39] Now, the room system uses these room connectors
to try to create pressure equalization between
[05:46] different areas - well, between the two spaces
that the room connector connects. In this
[05:51] instance, the room connector is connecting
a room to outer space so if I open this door,
[05:58] the oxygen levels in the room are going to
drop. And if I walk into the room, we get
[06:06] some debug output to see that the pressure
in the room is dropping rather quickly and
[06:12] the pressure in the adjacent room is also
dropping although less quickly because it
[06:16] has to traverse through the room connectors.
[06:21] Now, having a system like this is really nice
because it allows for more emerging gameplay,
[06:28] I could for instance close this door and close
this door off and keep the pressure- keep
[06:37] the depressurization localized to a specific
space or I could reopen the door and allow
[06:43] for the oxygen levels in the other room to
fill up this space so that the people on this
[06:48] side of the space station don’t die.
[06:51] As you can tell, the room system is still
pretty early days, we are- we just now hooked
[06:59] it up to audio and we plan on hooking it up
to the player behaviour and visuals soon but
[07:04] for now we’re still developing it and I
look forward to having this into Star Citizen
[07:11] which I think is going to allow for some interesting
gameplay.
[07:17] So by now, you guys have started to see the
new interaction system start to come into
[07:22] 2.5 as well as the new content that we’ve
been putting out for instance in the demos
[07:28] at Gamescom and Citizencon - the new inner
thought system gives contextual information
[07:33] for objects and items in the game that you’re
interacting with. One useful tool that we
[07:38] use with those interactions are something
called interaction links - interaction links
[07:43] allows the designers to create relationships
between items so that you can build up more
[07:49] interesting behaviour from smaller and more
modular pieces.
[07:53] As an example, here in this test level, I
have set up a door that is connected to a
[07:59] laptop and a power cons- or a power generator
and in any given level you can have a door
[08:06] that has certain interactions like open and
close but you probably don’t want the player
[08:10] to directly interact with the door - for gameplay
reasons you might decide that it’s useful
[08:15] to have the player actually interact with
something that’s next to it, in this instance
[08:19] I have this laptop here. Laptop has a interaction
for an open and close which is defined in
[08:26] DataForge. In DataForge we can assign certain
values, such as ‘Sendable’, ‘Linkable’
[08:32] and ‘Locked by Links’ and this just means
that we can actually link this interaction
[08:37] to something else - Linkable indicates that
it can be linked to by a different interaction;
[08:44] Locked by Links means we’re going to share
the locking, which is the semantic locking
[08:50] and unlocking interaction.
[08:55] So here we’ve set up this laptop and in
the interaction links panel, we’ve created
[09:01] a link which has its source output open connected
to the input door’s interaction of open
[09:09] and the same thing with close.
[09:12] This means that if I go into the game, instead
of going up to the door and enter, instead
[09:17] of that you come up to this terminal and use
the open interaction which will open the door.
[09:24] I can also use the close interaction and back
and forth and as I use these interactions,
[09:29] you can see that the text, the contextual
information given to the player, actually
[09:33] updates in real time and this happens because
of the semantic state sharing that is implicit
[09:39] in the interaction links.
[09:40] Now this doesn’t have to be with just something
that we just walked up to and interacted with
[09:44] but anything that supports interaction links
- I’ve also set up a proximity sensor here
[09:49] that will open the door and close the door
whenever I enter area here. When I walk in,
[09:55] the door opens and if I walk out, the door
closes again. What is nice about this is it
[10:03] allows us to have self contained behaviour
so in this case, proximity sensor which can
[10:09] then be hooked up to something else to build
up a more complex behaviour which is walking
[10:13] into an area with door opening but you hook
up the same proximity sensor to anything else
[10:19] - for instance I could hook the same proximity
sensor into a trap that maybe opens a door
[10:24] and sucks out somebody into space and they
would then die.
[10:29] So yeah, that’s the basics of interaction
linking - you set up interactions in DataForge
[10:34] and then create interaction links in the interaction
link panel and then just use them in the game.
[10:42] So, that’s interaction linking and the room
system, still a work in progress, there is
[10:48] a lot of work to be done with this stuff but
I look forward to working on it, continuing
[10:52] going forward.
[10:53] EKD: Interaction linking is some really exciting
tech because it will help us allow everything
[10:57] from simple button action behaviour and also
more emergent behaviour for networks of interaction
[11:02] links - so up next, here is an update on the
Drake Buccaneer being built here in Los Angeles.
[11:07] Elwin Bachiller (EB): So the Buccaneer is
meant to be Drake’s answer to dealing with
[11:13] fighters - so ships like the Hornet, and the
Gladius and the Sabre - it’s sort of in
[11:18] that class of ships that's purpose built just
for combat with a bit of a pirate flair to
[11:24] it. So it’s intention is to be super fast,
super maneuverable but very flimsy. So it
[11:32] can’t really take that many hits so you
can see this reflected in Jim Martin’s concepts
[11:38] - you’ll notice the ship has these gigantic
engines that emphasis speed.
[11:43] Some of the changes that we are going to be
making when we move into the actual full production
[11:46] of the ship is the wings - they have a very
particular shape that we’re going to make
[11:52] them a little bit smaller, little bit sleeker
to emphasis speed even more and we’re also
[11:57] going to be placing maneuvering thrusters
all around the main engines in order to give
[12:01] it the movability that it needs to basically
outmaneuver a lot of the other heavy hitting
[12:06] ships like the Hornet or the Super Hornet
which are essentially flying tanks but this
[12:11] will be a little bit more maneuverable - it
just won’t be able to take the hits.
[12:15] So, with the Buccaneer, you’re going to
want to get in, do your damage and avoid taking
[12:19] any damage. From a design standpoint, we also
wanted the main gimballed weapon on the belly
[12:26] of the ship to be usable at almost every stage
of flight. So this includes having the landing
[12:33] gear deployed and in it’s current stage
in the concept, the landing gear is blocking
[12:39] the firing arc of the gun on the bottom, so
we’re going to have to redesign the landing
[12:43] gears entirely for a couple of reasons - one,
to give the gun the firing arc it requires
[12:49] and two, for performance reasons, we actually
are trying really hard to make sure that all
[12:54] the landing gear tucks into the ship so we
can call that out in the game so it’s not
[12:59] eating up the resources the entire time in
flight.
[13:05] Some of the other changes that we’ll be
making have to do with the cockpit - so you’ll
[13:09] notice in the concept that we’ve got right
side entrance into the ship - we’re actually
[13:14] flipping that over to the other side so it’ll
be standard with all the other fighters where
[13:17] you enter on the left side and we’re also
going to be changing a little bit of the shape
[13:21] of the nose to accommodate a fold-out ladder
so that players can actually climb in and
[13:26] out without any problems.
[13:27] Matt Sherman(MS): To give you guys an idea
of what really goes into setting up these
[13:30] ships we’re also going to give you a quick
look at what’s going on with the Buccaneer
[13:35] in it’s very early whitebox stages. So,
really just starting the big, you know, production
[13:40] build out on this ship… artists are wrapping
up the Caterpillar, I’m being able to move
[13:45] onto this now. I’ve been wrapping up work
on the Herald and so now working onto the
[13:49] Buccaneer set up so a lot of this is still
going to be temp or placeholder stuff as we’re
[13:55] piecing this ship together because, you know,
we have to find out what are it’s custom
[13:59] animation needs or custom art needs or custom
tech design needs before all these pieces
[14:03] can come together.
[14:05] So what you’ll be seeing today has a few
oddities, the pilot it’s not using the actual
[14:12] animation template that the final ship will
be using. You’ll be seeing some fun oddities
[14:17] with the Herald animation, warping somebody
through glass...some of the maneuvering thrusters
[14:22] and main thrusters are going to look a little
bit awkward on the ship but those are really
[14:26] so we can take something that we have that
works and in this case the main engines on
[14:31] the Herald. We can just change some of the
data bolt those onto the ship, get something
[14:36] put together and get something flyable really
quick and start tuning and find out, ok is
[14:41] this delivering on the goal set we want? Is
this delivering on the gameplay we want to
[14:46] have.
[14:47] Here we have the current whitebox on the Drake
Buccaneer so just to a few of the quick highlights,
[14:53] we’ve got it size one and size three wing
mounts. We haven’t built out the missile
[14:59] launchers yet, that’s going to be a little
bit further into the greybox phase. Some wonderfully
[15:06] oversized temp engines on this thing at the
moment, you can see that really big back here.
[15:12] A lot of this is just to get the ship up flying
as fast as possible. If you notice any of
[15:18] these little dots littered around the ship,
these are its maneuvering thrusters, 24 total
[15:25] maneuvering and then main and retro for 28
total thrusters on the ship.
[15:30] So, let’s just go ahead and climb in. The
onboard animation for it right now is a bit
[15:39] off, you’ll also sort of see the control
panels are a bit broken but...so some of the
[15:48] other fun oddities of whitebox, the ladders
won’t retract just yet, giant mains so you
[15:55] can see the fire shoot out the front of the
ship. Then just basic gameplay is what we
[16:04] get in the whitebox so all the controls, you
can roll, you can pitch, speed up, slow down,
[16:11] anything basic. Then we just started getting
the tuning set up from here.
[16:18] So the whitebox is really just the basic functionality
check so we make sure it can start, it can
[16:23] stop, all its axial control… so roll, pitch,
yaw and then from here we can really start
[16:31] getting the actual game play balance. Make
sure that, you know, the thruster counts are
[16:36] just right, that the load balance on it is
just right.
[16:39] Daniel Kamentsky(DK): So one of the challenges
if you’re using a pre-existing animation
[16:44] template is if you have to alter the flight
controls to match the animation template.
[16:48] So the Buccaneer we’re going to be using
a centre joystick and a left throttle. So
[16:53] in this scene we have the rough concept model
we got from the concept artist and what I
[16:59] did is I kitbashed in some existing Drake
assets along with some other guiding rails,
[17:05] so I can line up the animation. So you can
see he’s getting in, it’s still really
[17:11] rough and there’s clipping and all the parts
aren’t animated yet but we’re really just
[17:15] trying to get an idea whether or not this
animation is going to work with the ship.
[17:20] EB: So the concept itself we’re working
really hard to make sure that we keep the
[17:26] spirit of the ship and it’s current iteration
concepted out so it’s actually really common
[17:31] that we make tweaks for our designs when we
move into production and the reason why that
[17:34] happens is because the concept artist is focusing
on communicating a specific feel to the player.
[17:39] So if it’s meant to be a quick maneuverable
ship, we want it to look quick and maneuverable.
[17:43] If it’s meant to be a big cargo ship, you
want it to look big and clunky like it can’t
[17:47] move.
[17:48] What happens when we move into production
we end up having to implement some standards
[17:53] for gameplay reasons, so this means, you know,
floors have to be a specific height, ladders
[17:57] have to be a specific height in terms of the
rungs, the seats have to be a very specific
[18:01] way to accommodate for our characters. That
means we have to make tweaks to the concept
[18:06] to basically nudge it in the right direction
to get it to fit properly. The changes that
[18:11] we make usually aren’t, you know, big sweeping
changes where we completely redesign the ship,
[18:17] it’s just to make sure that it works properly
with our game systems.
[18:21] So when this whole process is done you’ll
be able to get your hands on an awesome ship,
[18:26] the Buccaneer which is really meant to be
the pirate’s answer to the military ships.
[18:31] So we’re talking about going against the
Avengers, the Hornets, this is Drake’s answer
[18:35] to that problem. You know, the pesky law getting
in your way.
[18:40] EKD: I know I’m really looking forward to
adding the Drake fighter to my line up. Other
[18:45] portions of the studio are digging deeper
into 2.6 bugs. The art and tech design teams
[18:49] are delving into several different ships as
well as concepts, characters and animations
[18:54] that I can’t really spoil yet but all you
will be seeing in the not too distant future.
[18:58] In other news in LA we’re gearing up for
the next week’s livestream and we’ll have
[19:02] some more information out to you soon. Well,
that wraps us up this week, thanks for watching
[19:07] and we’ll see you again next time.
[19:08] Back to the Studio
[19:09] SG: Awesome update with item 2.0 being fleshed
out with the room system and interaction linking,
[19:13] it really gives us a sense of how the designers
will be able to create interesting gameplay
[19:17] and missions.
[19:18] CR: Yeah absolutely, so it’s opening up
a ton of possibilities. Players will be able
[19:22] to approach a scenario in multiple ways, they
can charge in guns blazing, turn off the power
[19:28] to fight passed security, maybe they want
to forget all that or force open the lock…
[19:32] the airlock and vent everyone inside. So I
really thinking the emerging game play that
[19:38] we’re working on will be a hallmark of Star
Citizen. That’s exciting to see it all sort
[19:42] of come together to create such a complex
system.
[19:44] SG: It is and it seems like scanning will
also be a pretty big deal with players gathering
[19:50] info on making tough decisions.
[19:51] CR: Yeah right, while making rushed decisions
with imperfect info which can be a lot of
[19:56] fun too. So imagine having a ship flying towards
a ship and not knowing if they’re friend
[19:59] or foe or maybe your scanner points out that
a ship in the area has an uncomfortable amount
[20:05] of guns so you decide to play it safe and
stay clear. Going to have a lot of nice complexity.
[20:09] SG: Speaking of, let’s go to CIG’s very
own scan operator, Tyler Witkin who’s been
[20:15] searching the web for the latest and greatest
from our amazing community.
[20:20] Community Update w/ Tyler Witkin
[20:27] Tyler Witkin (TW): Hey everyone. Tyler Witkin,
Community Manager in the Austin, Texas studios,
[20:28] here to bring you this week's Community Update.
Just as a reminder there's only one day left
[20:33] to enter the Esperia Prowler Art Competition,
so if you wanted to get your submission in
[20:36] I would do it now. We're going to be announcing
the winners to that competition November 18th
[20:40] at our anniversary live stream.
[20:43] In other news we've been nominated for Most
Anticipated Game of 2017 in this year's Global
[20:47] Game Awards. If you want to follow all the
progress on that you can head over to game-debate.com/awards
[20:52] , and the voting ends November 25th.
[20:55] And now it's time for this week's MVP. A huge
congratulations to RiceMaiden for his detailed
[21:00] efforts in creating a full sized 3-D printed
P4SC Rifle straight out of the Star Citizen
[21:06] Universe. Awesome stuff, and we're really
excited to see what you print next.
[21:11] Lastly the week would not be complete without
Reverse the Verse, so make sure you tune in
[21:14] live tomorrow at twitch.tv/CigCommunity where
we're going to talk about everything that
[21:18] you saw on today's episode. Thanks again for
all of your support, and we'll see you in
[21:22] the 'verse.
[21:23] Back to Studio
[21:24] Chris Roberts (CR): Every week it's great
to see what the community's been up to, so
[21:26] four years in and they keep on surprising
us. So, it's one of my favorite segments of
[21:30] our show every week.
[21:31] Sandi Gardner (SG): Yes they do, and up next
our character art team walks us through all
[21:35] the pipeline refinements and improvements
they've been working on to make sure that
[21:39] we can not only produce some of the most amazing
characters around, but that the system is
[21:44] flexible enough to populate whole solar systems.
[21:49] Character Pipeline Then & Now
[21:57] Forrest Stephan (FS): Hey I’m Forrest.
[22:09] Josh Herman (JH): And I’m Josh.
[22:10] FS: And we’re going to take you through
the Character Production Pipeline From Then
[22:13] …
[22:14] JH: … Until Now.
[22:15] So speaking of now we have a big character
material library of steels and leathers and
[22:18] fabrics and all that kind of stuff.
[22:19] FS: Yep.
[22:20] JH: And it’s really easy to swap stuff between
characters.
[22:23] FS: Exactly.
[22:24] JH: What was it like before on the old system?
[22:25] FS: So the old system was a manual process.
It was very labour intensive. You had to go
[22:28] into Photoshop, you had to go through each
of your layers, manually mask out where each
[22:32] material goes. But you have to do that for
every single character.
[22:35] JH: Right.
[22:36] FS: So if you have a hundred characters that
are using a specific leather for example,
[22:39] you have to update one hundred character Photoshop
files. Imagine updating one hundred character
[22:43] Photoshop files as opposed to now …
[22:46] JH: Right.
[22:47] FS: Where you only have to update one.
[22:48] JH: So that’s a lot of work to do a hundred,
obviously, a hundred …
[22:52] FS: Right.
[22:53] JH: … photoshop files for a hundred characters.
So now, since we’re able to swap all these
[22:57] different pieces …
[22:58] FS: Yeah.
[22:59] JH: … and it sounds as if we are using one
leather example for everybody, we spend a
[23:03] lot more time on that one …
[23:05] FS: Right
[23:06] JH: … leather because it’s going to be
seen everywhere.
[23:07] FS: Imagine dedicating resources just to do
a leather for one hundred different characters.
[23:11] Imagine trying to keep it consistent across
the board. It’s going to be very difficult.
[23:14] And from an Art Director’s …
[23:15] JH: Sure.
[23:16] FS: … standpoint it’s a nightmare to deal
with right? Because you’re all about consistency
[23:20] right?
[23:21] JH: Yeah. And maybe in different lighting
scenarios they were totally different. When
[23:23] in a dark … in the old system a dark environment
it would look bad but look great …
[23:27] FS: Totally.
[23:28] JH: … or vice versa. But now with this method
…
[23:31] FS: Yeah.
[23:32] JH: … it’s much more consistent.
[23:33] FS: Yeah, it is consistent. The old method
didn’t really work with all lighting conditions
[23:37] either. So a lot of times if you had an extreme
lighting condition you would not only have
[23:41] to go to your Photoshop file in order to make
sure everything was correct, you would have
[23:44] to do a variant of that texture to ensure
that it worked in that different lighting
[23:49] condition.
[23:50] JH: Right.
[23:51] FS: And now you are getting exponentially
more. With the new method that we’re currently
[23:53] using it’s flexible against all lighting
conditions, across all characters.
[23:57] JH: Which is great.
[23:58] FS: Fantastic.
[23:59] JH: And one of the things I really like about
the new method is that when we zoom in the
[24:02] fidelity of the textures is way higher than
the older one. You can zoom into the fabric
[24:06] detail …
[24:07] FS: Exactly.
[24:08] JH: … to the stitch detail and it’s way,
way higher.
[24:09] FS: Exactly. It allows us to do micro detail
now. So the previous method we were restricted
[24:13] to our resolution. You had a d 2048x2048 pixel
resolution but your character is a hundred
[24:18] thousand polys there’s not much space to
put that information.
[24:21] JH: Yeah and if you zoomed in on something
it would get pixelly and crunchy.
[24:23] FS: Starts getting blurry and all that stuff.
[24:24] JH: Yeah.
[24:25] FS: So we keep the old, traditional methods
which allows you to still have that unwrap
[24:28] and that’s where we bake all our normal
information and all that stuff which handles
[24:31] the way the light reacts and shadows on the
character without needing to have the geometry
[24:35] there.
[24:36] JH: The details from that are all picked up
the micro details.
[24:39] FS: The micro detail. Yeah. So we have these
middle ... little normal maps that when you
[24:43] get up close you can see them. So …
[24:44] JH: Like all the threads and the little stuff.
[24:45] FS: All the threads. So we’ve got a great
macro system and then a micro system so that
[24:49] no matter what your distance from the character
is, you’re never getting that break down
[24:52] of resolution.
[24:53] JH: Right. Which is great because now we can
get up … and get those really nice zoomed
[24:57] closed shots …
[24:58] FS: Right.
[24:59] JH: … and we can get those far shots …
[25:00] FS: Yeah.
[25:01] JH: … and they’re going to look equally
good in every possible lighting.
[25:02] FS: Because you don’t want to break the
immersion. You want it to look real. If I
[25:04] get like this …
[25:05] JH: Yeah, yeah. Right. It looks good.
[25:06] FS: Did that make you uncomfortable?
[25:07] JH: No we’re good.
[25:08] FS: [to camera] Did that make you uncomfortable?
[25:09] JH: So now that we have a really good “then
and now” of our character pipeline …
[25:14] FS: Right.
[25:15] JH: … what is PBR?
[25:16] FS: PBR stands for Physical Based Rendering.
Physical based rendering is the realistic
[25:23] approach to rendering game surfaces based
on real world measurements. A non-PBR model
[25:29] means you have no real world reference on
how the materials will actually react in the
[25:33] real world. A physical based rendering system
on the other hand has a very accurate shading
[25:37] model, to ensure that when the specular and
the light hits a surface it will react accordingly
[25:42] to how that surface would actually react in
the real world.
[25:45] The Nomad character for example had both metal
and fabric. In regards to PBR that’s two
[25:51] different ends of the spectrum. One is reflective
and one is matt, which means that we had to
[25:56] ensure that all of our specular settings were
correct so when the daylight hits the model
[26:01] every surface reacts accordingly.
[26:04] JH: So the character pipeline is all the different
types of phases that we are going to go through
[26:09] to create a character. It typically starts
in concept phase, then it moves to a high
[26:14] poly phase, followed by a low poly phase,
and then texturing and materials.
[26:20] Jeremiah Lee (JL): 2D concepting is the very
first step of character development where
[26:26] a concept artist will provide ideation sketches
provided by the design brief. 2D concepting
[26:34] is very important in our pipeline because
it’s fast, it produces a quantity of ideas,
[26:40] it’s loose - we can explore a lot of different
kinds of forms compared to working strictly
[26:46] in 3D.
[26:47] JH: the reason we chose 3D concepting for
the helmet with the Nomad is because it’s
[26:51] very quick. Because it’s already in 3D it’s
really easy to transition to the high poly
[26:56] phase. And for the Nomad it was a very tight
timeframe. Because we ended up choosing the
[27:03] 3D concept we were actually very, very close
to the end result and got to the high poly
[27:07] phase much quicker.
[27:08] Omar Aweidah (OA): High poly is usually the
first step in 3D visualisation of a character.
[27:13] And it’s the first time - as you start to
assemble it together - you can start to see
[27:18] it come to life. And that’s when we start
to figure out a lot of the problems and a
[27:23] lot of the movements and most of the details
that go into the character. And we flesh that
[27:27] out as far as we can to get the character
as realistic and to the quality level that
[27:33] we want. And from that point on it goes into
the low poly modelling and retopo phase.
[27:38] So for the high poly phase of the Sand Nomad
we used software called ZBrush. And ZBrush
[27:43] is like an amazing tool that allows you to
go through different levels of detail. So
[27:50] for example I worked on some of the arm for
the Nomad character and it’s really easy
[27:57] to sculpt because I can get a base topology
down and get the shape and the silhouette
[28:03] of the character. And then we’re able to
subdivide the polygons and continually go
[28:09] up in detail which allows us to do a few different
types of things and get to more of a clay-like
[28:18] substance. And as you can see the character
gets more and more detailed as we go up in
[28:30] subdivision.
[28:31] So this would essentially be like a base mesh
that we would start working with and we’d
[28:36] get some of the rough shapes and start filling
out where all the assets go on the character,
[28:41] and what essentially it’s going to look
like. Get a few different reads of the character.
[28:46] And then we could subdivide him up.
[28:51] And once he’s subdivided and we’ve done
all the passes - the sculpting passes - on
[28:57] the character, we start to see our first real
iteration of what the character could look
[29:03] like. And in this situation we can move around
different lighting: see how it reacts with
[29:09] some of the shapes. Not really trying to capture
any materials or anything like this. At this
[29:15] stage we’re essentially just looking at
character as a whole, from a first read, to
[29:21] a second read, to a third read. Getting all
the levels of detail in from some of the bolds,
[29:28] to the belt, to the way the fabric folds work.
Kind of how the character might actually look
[29:34] when he’s brought into game.
[29:37] And ZBrush is a critical component of our
pipeline and that allows us to subdivide the
[29:42] model into … and get really, really high
resolution so we can see the character at
[29:46] it’s most detailed phase.
[29:47] Corey Johnson (CJ): The process for the low
poly for the Character team is pretty straight
[29:52] forward. We use Maya and Topogun in terms
of software and our goal is to capture the
[30:03] silhouette as much as possible while keeping
within the limits that are required for the
[30:09] game.
[30:10] The process for doing low poly in the character
team. We use Topogun or Maya to create it,
[30:17] our focus is on capturing the silhouette and
making sure that the geometry isn’t too
[30:25] high and that it won’t kill the framerate
in the game.
[30:28] A low poly mesh is a simple mesh is built
up of quads and triangles to give us an approximation
[30:36] of what our high poly sculpt is. So it’ll
end up being little squares that build up
[30:41] the entire character.
[30:43] FS: Our character pipeline uses a specular
physical based lighting model. So what that
[30:49] means is when the light hits a surface, we
define on the surface, through the specular
[30:54] channel exactly what type of surface that
is.
[30:58] So here we are in a test map where we’re
doing some lookdev on some materials for the
[31:02] Nomad. Let's show you some physical based
rendering stuff.
[31:05] Right here we have a gold polished material.
[31:10] Right here we have a very basic generic metal
[31:14] And then right here we have a just very rough
microsurface pattern so it doesn’t have
[31:19] much reflection.
[31:21] So if I come over here in my gold and I’m
gonna go ahead and go to my glossiness which
[31:24] is essentially a roughness value and when
I drag it down, you can see that we start
[31:30] loosing the perfect reflection until it comes
all the way matte. That is because we’re
[31:38] essentially making the surface to simulate
more roughness. The more roughness you have,
[31:42] the more the specular is going to distribute
across a surface which is essentially a simulation
[31:48] for heat distribution. So over on our character
we have this really slick way of actually
[31:55] swapping out all the materials and doing all
this really awesome kind of thing.
[31:58] So let me go ahead and get up in here and,
get up in here, that sounds weird… So let
[32:07] me go ahead and select the best armour right
here and we’re going to try and play with
[32:11] these materials a little bit here and show
you the system we’re working with.
[32:14] So over here we have our diffuse tent, diffuse
wear, some gloss overrides. We have our blend
[32:22] maps right in here, that way we can mask out
the different areas that we want to materials
[32:26] to come through. Then we have our wear, dirt,
and ambient occlusion and our unique normal
[32:33] maps.
[32:34] So under here you have our colours so I want
to tint the different objects. So let me go
[32:42] ahead and just kind of make this armour piece
white. What’s cool about this system too
[32:48] is I can come over here to my armour piece
and can just quickly swap out exactly what
[32:54] materials being referenced.
[32:57] To make something like this gunmetal, I start
over in substance and create a series of unique
[33:02] materials and then I start compositing them
to basically create a type of composite metal.
[33:10] So multiple multiple different metals,start
combining them and we get this really cool
[33:14] looking composite which is a little more interesting
than a pure precious metal because it has
[33:19] some diffuse colour and detail in there.
[33:21] Then we export our maps and we bring it in
the engine.
[33:26] So let's come over here and let's say we wanted
metal pants. Why wouldn’t you want metal
[33:33] pants? I think I’m going to go with a bronze.
Look at that, isn’t that fabulous? In fact
[33:42] that is just so wonderful that I want to make
his undershirt the same.
[33:48] Let’s go ahead and make that undersuit bronze,
whoa, look at that…
[33:57] Up here we have a cloth attachment that kind
of moves around when you rotate the character
[34:03] and not only does it move around, but it has
a cloth shader applied to it. So you can see
[34:17] we get this really nice fernell highlight
on here. So let me jump over to it, and if
[34:21] I shift the colour you can really start seeing
that cloth shader in action. Let me go to
[34:27] red and you can see those highlights, and
that other colour is a secondary reflection
[34:33] so let me kind of match it a little closer.
Really nice red.
[34:42] So I’m going to go and take that red and
we have a couple settings here, we have a
[34:47] diffuse falloff so I can strengthen it or
lighten it. So we have these super cool colours
[34:55] going on, we got this bronze undersuit with
this super cool black and white armour piece,
[35:02] so we’re just really quickly swapping out
everything on these characters.
[35:05] Do some colour adjustment, make it look like
it matches the uniform more. Make it kind
[35:11] of dark. Jump over to the cloak, do the same.
Awesome, and there’s a very quickly modified
[35:23] character.
[35:24] JH: So as you can tell, we’ve got a whole
character pipeline that’s really coming
[35:29] along well. One of the big things that we’re
trying to focus on right now is modularity.
[35:34] What that means is creating and combining
all of our different assets so that they can
[35:39] work with each other. When you’re buying
clothes, that all the different pant options
[35:44] fit with all the shirt options. When you're
buying hats, when you’re buying jackets
[35:47] that they fit on all the shirts. Which doesn’t
sound like a big deal, but it’s actually
[35:52] really important. The reason it’s really
important is so that we can provide players
[35:56] the optimal experience for variety and what
they can buy, not just in clothes, but also
[36:03] armour. So we’re doing this with armour
as well so you can wear different types of
[36:07] armour on different types of suits that can
mix and match and you can create the best
[36:12] combination for what your playstyle is.
[36:15] The other thing that we're really focusing
on now which you’ve had a little bit of
[36:17] a sneak peek about is creatures.
[36:43] So in the future we’re going to be doing
all these awesome characters and creatures.
[36:47] Worms as you’ve seen, insects, alien lifeforms
that are going to fill out these awesome worlds.
[36:52] With the strong character pipeline in place,
any of this is possible.
[36:56] Outro
[36:57] SG: That was great. Really interesting to
see how they blend 2D and 3D concepting to
[37:02] create a character.
[37:03] CR: Yeah well PBR rendering really is a cool
piece of tech. It’s taken a lot of effort
[37:08] to bring our character pipeline to where it
currently is, but seeing the Sand Nomad’s
[37:12] come to life in the Homestead demo just shows
that all that hard work is really paying off.
[37:17] SG: And there you have it, that’s about
it for today’s show, but before we go do
[37:20] you want to share an update on what’s happening
with 2.6?
[37:23] CR: Sure.
[37:24] SG: Yes you do.
[37:25] CR: Alright so for Star Marine, design’s
finished for the latest round of adjustments
[37:29] on the Damian map which is our smaller space
station combat map, and it’s been handed
[37:33] back to Art for their pass while Design moves
onto Echo 11 which is this sort of bigger
[37:37] map that’s based on an asteroid base.
[37:39] We’ve been working on improving our hit
and death reactions to make them feel more
[37:43] satisfying. Animations also been doing some
further testing on combat signaling and the
[37:47] emote system to see if an override animation
solution or an additive solution will produce
[37:52] better results.
[37:53] Lets see… the new Arena Commander mode Pirate
Swarm is in testing along with new AI profiles
[37:59] that are currently being balanced. The fix
for the new pickups are in now so audio can
[38:05] begin their pass, just as a note, audio is
usually one of the last things to touch things
[38:10] because you don’t want to have everything
change and they have change the sounds afterwards.
[38:14] Lets see, a couple of interesting blockers
popped up as well. In Vanduul swarm, players
[38:20] and AI we’re getting placed on the wrong
team, seems Warlord and Vixen weren’t quite
[38:24] as trustworthy as they seem.
[38:25] Tech Design had a strange bug where a mysterious
force pushed players away when they had to
[38:29] enter ships with interior grids and if you
try it again it would kill you so that’s
[38:34] not very good.
[38:35] We also had a bug with the Herald where the
Cockpit windows turned opaque so you couldn’t
[38:38] see out of them and therefore pretty hard
to fly.
[38:42] So speaking of the Herald, both the Herald
and Vanguard Hoplite are receiving the last
[38:45] round of polish for their upcoming release
in the 2.6 Alpha.
[38:49] SG: There you have it everyone and to get
more insight on everything Star CItizen, make
[38:54] sure to tune in tomorrow at 11am PST, 7PM
GMT and 8PM In most of Europe for Reverse
[39:00] the Verse. The team here in L.A. will be answering
questions on what we just showed.
[39:04] CR: Yup and also wanted to let everyone know
that ATV will be on hiatus next week as everyone
[39:09] gears up for our anniversary livestream which
is on Friday, November 18th. We’ll have
[39:13] more details about what to expect on the website
so be sure to check it out.
[39:18] SG: And until then, we will see you.
[39:31] SG/CR: Around the Verse!

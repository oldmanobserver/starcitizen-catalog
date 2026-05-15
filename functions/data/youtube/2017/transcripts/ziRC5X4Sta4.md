# Star Citizen: Around the Verse - Ship Pipeline Pt. 1: Concept to Greybox

**Video:** https://www.youtube.com/watch?v=ziRC5X4Sta4
**Date:** 2017-02-09
**Duration:** 22:11

## Transcript

[00:16] Closed Captioning provided by Relay.sc
[00:17] Sandi Gardiner (SG): Hello and welcome to
Around the Verse, our behind the scenes look
[00:19] into the development of Star Citizen.
[00:21] Our special guest host today is CG Supervisor,
Forrest Stephan.
[00:24] Welcome back to the show Forrest.
[00:25] Forrest Stephan (FS): Thank you for having
me, it’s absolutely great to be back.
[00:28] SG: It’s great to have you back and the
big news this week is of course the Alpha
[00:33] 2.6.1 patch being released to the Evocati
along with a host of bug and crash fixes.
[00:37] The patch includes nice improvements and continued
tweaks of weapons and flight systems.
[00:42] FS: Yeah that’s absolutely fantastic.
[00:44] It also has the single player Mega Map which
makes hopping around between levels a heck
[00:48] of alot easier as well as multiple regional
servers which know people have been waiting
[00:53] for, can’t wait to get this in the hands
of the players.
[00:56] SG: Yeah we had Will, and Adam, and Dave,
they were playing around with it today having
[01:02] a blast.
[01:03] FS: Having a blast, totally.
[01:04] SG: Before we get to the show is there anything
interesting that you’ve been working on
[01:07] lately?
[01:08] FS: Always interesting things.
[01:09] So I’ve been helping develop the look and
the tech with art direction and cinematic
[01:14] design for the holograms for capital ships.
[01:17] You know the bridge holo globes in the briefing
rooms.
[01:22] With all this AR stuff happening, it’s great
to actually see some hologram stuff in our
[01:26] game and actually develop some custom tech
for it so it’s pretty exciting.
[01:30] SG: Very cool and is that for Squadron 42?
[01:32] FS: That is for Squadron 42.
[01:33] SG: Alright.
[01:34] FS: It’ll eventually show up in the PU,
but the focus right now is to establish a
[01:38] consistent look, interface, design, a way
to communicate the briefings to the player
[01:44] for the Squadron 42 campaign.
[01:45] SG: I also heard that you were working on
some dead body tech.
[01:48] FS: A big part of the build up for 3.0, corpses
are part of the set dressing.
[01:53] You know in the wrecks, the abandoned ships
and we wanted a way to use our loadouts, our
[01:56] current characters instead of placing these
temporary props so we developed a system to
[02:01] use a physics based approach to having designers
place these dead bodies everywhere.
[02:06] SG: I Don’t know why I find that exciting.
[02:09] I don’t know what that says about me, we
can move on from there.
[02:11] FS: Actually if we can show a video maybe
you’ll see how fun it actually is.
[02:59] So it shows how our system is able to generate
impulses to get some fun poses.
[03:03] We can create a nearly infinite amount of
variety of natural poses because it's all
[03:06] physics driven and it all kind of depends
on the simulation.
[03:09] SG: That’s very cool, and that will be a
great tool for our artist.
[03:13] Now let's go to Jake Ross for what the Austin
studio has been up to.
[03:18] [3:18] Studio Update
[03:20] Jake Ross (JR): Howdy folks, Jake Ross here,
Producer of CIG Austin with a look at what’s
[03:23] going on here this month here in the Austin
studio.
[03:26] Lead Designer Rob Reiniger has completed his
game design document for the shopping kiosk
[03:29] feature and we’re now discussing timeline
for implementation with UI team and the Game
[03:34] Code team, We’re very excited to have this
feature ready to implement.
[03:37] We’re excited to wrap this up because it
means pretty soon we’ll be able to use this
[03:41] interface for, not just shopping but things
like items and clothing, weapons, and ship
[03:45] parts in the game, but also for performing
landing pad services such as repairing and
[03:50] refueling your ship, loading and unloading
cargo, and that kind of thing.
[03:54] This is a huge step in the right direction
that will allow us to bring much of the shopping
[03:58] experience on our website to the in-game universe.
[04:01] On the animation front, the PU Animation team
has been trucking along nicely on the implementing
[04:05] and polishing the “usable” animations
that will be used in both Squadron 42 and
[04:09] the PU.
[04:10] Currently we’re polishing up these “table
leans” that we’re using for things like
[04:15] leaning on the table in the mess hall for
aboard the Idris in Squadron 42.
[04:18] We’ve also been getting female versions
of the already existing male animations like
[04:22] “work zones” and “wall leans” in the
game as well.
[04:25] The Ship Animation team has been wrapping
up polish tasks for combat speed “enters”
[04:30] and “exits” into the cockpits.
[04:31] We’re hoping to wrap all of these up by
the end of the month at which point we’ll
[04:34] be moving on to implementing new cockpit start
up sequences for the different cockpit types.
[04:39] Which is cool.
[04:40] We’re still determining who our code resource
will be … that we’ll be partnering with
[04:44] on that feature but once that is done we’ll
be ready to hit the ground running implementing
[04:48] awesome new interactive system for starting
up your ship before take off.
[04:52] On the art side of things, ship artists Chris
Smith and Josh Coons have been making good
[04:56] progress on the new and improved Super Hornet
and the Drake Cutlass Black respectively.
[05:01] The updates that Chris is doing on the Super
Hornet are to bring the ship in line with
[05:05] our current quality standards that we have
now.
[05:07] And these are almost complete and we’re
looking forward to getting these out to y’all
[05:12] in … 2 … release 2.6.1.
[05:14] Over in DevOps land we’re working hard to
start supporting multi-region server deployment.
[05:18] We’re very excited about this feature and
we’re hoping in the not too distant future
[05:21] we’ll be able to deploy servers in more
regions than we have previously to help improve
[05:24] latency among other things.
[05:26] We’re hoping to use data centers around
the world to spin up more game servers in
[05:29] regions like North America, Europe, and Australia.
[05:33] So, yeah, that’s all I have for you this
week guys.
[05:35] Thanks.
[05:36] See you around.
[05:37] [5.38] Back in the Studio
[05:38] SG: Thanks for that Jake.
[05:39] The Cutlass Black rework is really shaping
up.
[05:41] It’s actually one of my favourite ships.
[05:42] FS: Is it?
[05:43] SG: It is.
[05:44] FS: I absolutely love when we go back and
do these ship updates.
[05:46] It’s such a great way to see how far our
ship pipeline has come.
[05:50] Right?
[05:51] SG: Not only is the tech constantly improving
but our artists keep getting better with every
[05:54] ship they make.
[05:55] FS: It’s incredible.
[05:56] SG: Speaking of the ship pipeline, this week's
Feature Focus reveals the extensive process
[06:00] ever ship goes through.
[06:01] FS: Oh, it’s incredible: you have artists,
you have designers, you have directors, animators,
[06:05] programmers, and so many more people all involved
from all the studios and have their hand in
[06:10] creating these ships from the concept to be
flight ready for us to play with.
[06:16] SG: Let’s take a look.
[06:17] [6:18] Ship Pipeline Part 1: Concept to Greybox
[06:21] Luke Davis [LD]: Hi, my name is Luke Davis.
[06:25] I am the producer here at Foundry 42.
[06:27] I look after the ship environment and U.K.
tech design departments.
[06:31] Here at CIG the ship pipeline has seen a remarkable
evolution.
[06:35] Before I got here at Foundry 42 we were still
outsourcing ship assets to various companies
[06:45] to help finish the artwork that we didn't
have the capacity to do in house at the time,
[06:51] and it proved that we had … there were very
various issues that came along with outsourcing
[06:56] our assets.
[06:58] One of the biggest issues was the, the communication
breakdown between the various departments,
[07:05] so whereas now we have the absolute luxury
of being able to have various departments
[07:09] and disciplines within the same studio.
[07:11] Specifically the art director, the art team
and the tech design team are all in the same
[07:18] building whereas previously what we had was
a tech design department in Los Angeles, we
[07:25] had an art team here in the U.K. and we used
to outsource ships for concept and the 3D
[07:33] assets to another company.
[07:36] What we now have now is an official design
document that our tech design team both in
[07:40] L.A. and in the U.K. sign off on and sort
of go write this how many thrusters it should
[07:46] have, this is the exact animation template
it has to use, this is what weapons it should
[07:52] be using and sort of give an idea on what
roughly what the ship needs.
[07:56] It's minimum requirements not to define the
shape or you know how it should work.
[08:01] It's just what should be in it.
[08:03] Jim Martin [JM]: One thing I really like about
the process here at … at Star Citizen is
[08:08] that they kick you off with ... with a 3D
kind of cheat sheet of volumes saying we need
[08:17] engine size to be roughly this particular
cube, we need a gun to be this size.
[08:25] They, they want to make sure that as you start
thinking about it, you're kind of aware of
[08:30] what the, what the different shapes and what
the different proportions are.
[08:35] And that really helps me out, because when
I start a design after I've looked at reference
[08:41] and the past ships and thought about myself
on course design-wise I'm going to go in and
[08:47] begin with a sketch pass.
[08:50] And that's my thinking pass.
[08:52] You know when I have a pencil in my hand and
I have paper in front of me and I'm just noodling
[08:58] and drawing that's when I'm really getting
my head around what I want the design to be
[09:03] or how it should balance or, or what the proportions
could be.
[09:07] And so in my first physical pass with the
Buccaneer I did a kind of big cheat sheet
[09:16] that was basically kind of pared down to the
most simple components: engines, cockpit,
[09:23] guns, wings.
[09:26] You know let's move stuff around and let's
kind of see if we can get a feel for it.
[09:31] LD: So one of the challenges of the ship being
in the concept phase is not just to make a
[09:39] pretty ship, it's to make sure that it works
for what we want in the game.
[09:43] So you know you'll, you'll take what design
wants, what Chris originally envisioned for
[09:49] the ship, and try and turn it into some sort
of image.
[09:53] Elwin Bachiller [EB]: What tends to happen
when we get a concept into production is we're
[09:58] handed a series of images that have been finalized,
final paint overs and just beautiful illustrations.
[10:05] In addition to that we also tend to get a
concept model which is what the artist use
[10:11] to paint over and do his final renders.
[10:13] To actually make that usable we tend to have
to rebuild that model.
[10:19] We can't just … I mean we can technically
take that and put it directly into the game,
[10:23] but it would be very expensive, because the
cost of models tend to not worry about poly
[10:30] count anything like that, and also it wouldn't
conform with some of the technology we are
[10:37] using.
[10:38] So, we essentially have to just rebuild that
model, but in most cases we aren't just rebuilding
[10:43] the model we're also making some changes along
the way, especially as we discover changes
[10:48] that we have to make due to the white box
phase.
[10:51] JM: As the concept guy you're, you're used
to getting the ball rolling, but then once
[10:55] the ball is rolling you want that collaboration
with, with the physical design team that's
[11:02] going to be doing the, the actual 3D of the
ship.
[11:06] You know and you want … because they keep
you honest and then you also keep them honest
[11:14] and you know they'll … they may kick an
idea to you and go, “Well, you know, the
[11:19] engines are a little too close we need to
balance, balance”, then you’ll say, “Well
[11:23] I can do this”, so it’s sort of a really
great back and forth that I think is really
[11:29] important to the process.
[11:30] LD: One of the biggest issues that we have
in concept is the actual metrics because you
[11:34] have Chris on one side wanting the ship to
look a particular way as does the art director,
[11:42] the art director is constantly adjusting based
on the feedback Chris provides and the biggest
[11:47] difficulty is trying to keep the gameplay
metrics that we need to work in the game such
[11:52] as the animation template.
[11:54] So animation have four current ships it provides…
for each ship we have there’s a template
[12:00] attached to it and we have to make sure now
not to make anymore templates except when
[12:05] it’s absolutely needed and if we can use
an existing one that works.
[12:08] So we go, “Right you know what, we would
like same entry animation as we did on the
[12:14] Gladius, now try to use that entry animation
on that new ship.
[12:19] How would it work?
[12:20] What are the challenges that come with it?”
[12:21] and it’s just to make sure everyone’s
involved in communicating with everything
[12:26] what their new risks and issues are as part
of that pipeline.
[12:29] EB: So what we tend to do is we’ll get the
concept model if we have one and we will essentially
[12:34] build a rudimentary version of the ship.
[12:37] It doesn’t have anywhere near the detail
that the final model is going to have, but
[12:41] it serves as a representation for us to start
playing around with gameplay elements.
[12:46] So once we have this rudimentary model, we
can throw that into the game super fast and
[12:52] working with the tech design team we can start
actually adding weapons to it, we can start
[12:57] actually adding a rudimentary cockpit and
have positions for the animations to work
[13:02] properly.
[13:03] So we can actually go into the game, walk
up to this very blocky looking ship, press
[13:08] a button and then climb into it and start
flying the ship really early on within the
[13:12] first week and a half to two weeks of production
and this is what we call the white box phase.
[13:16] MS: For the design side of that, that’s
mainly just setting up some basic helpers
[13:20] and hardpoints.
[13:21] Get some thrusters on there, make sure it
flights, make sure it putters around and that’s
[13:26] also when we do a lot of the initial placement
for thrusters.
[13:29] So we need to make sure they’re distributed
evenly across the ship, they’ll be balanced,
[13:33] that’s going to handle right and get the
kind of performance that we want it to.
[13:37] LD: So once the disciplines have had a look
at it, and that’s the main part of the whitebox
[13:41] is that people look at it and go, “Right,
I’m ready now, I’m ready for when the
[13:45] ship goes into production so it is further
down the production”, the UI team have a
[13:50] look at it and gone, “Okay, they’ve done
the metrics right, the screen layout is completely
[13:55] correct, we don’t need anything new, we
are good to go”.
[13:58] The VFX department go, “Right, you know
what, the thrusters are in the right place,
[14:03] and the removeable thrusters are correct,
they know what type of ship items it’s using,
[14:09] we’re good to go as well”.
[14:11] Then that’s the main bit of the white box
phase.
[14:14] MS: Then it’s handed back to our ship artists
and they just build it out and make it look
[14:20] fantastic during the greybox stage.
[14:22] EB: On the Greybox phase, that’s where the
artists tend to do a lot of heavy lifting
[14:27] on the geometry so we’ll actually start
building very close to final geometry.
[14:32] We’ll start adding bevels, or as max usually
calls, “chamfers” all over the ship into
[14:39] order to use custom normals on our ships which
make it look as though its higher geometry
[14:46] than it actually is.
[14:47] Custom normals is a technique that we use,
essentially we call it custom normals, but
[14:52] the geometry that we have, each vertices on
the surface has a direction which determines
[15:00] how the light bounces off the surface.
[15:03] So typically there’s a technique called
subdivision modeling where you’ll take a
[15:08] surface and an edge and you will sort of reinforce
that edge by adding multiple loops to either
[15:14] side of where you want the light to bend and
that will give you a sort of nice flat surface
[15:18] on one side, and then a crisp little bend,
and then a flat surface on the other side
[15:23] so it looks really smooth.
[15:25] We really can’t afford to add that much
geometry because it makes everything a lot
[15:29] more expensive to do it with that technique
so what we do is we’ll take the vertices
[15:34] and instead of reinforcing the edges, we’ll
add a single chamfer, and we will then tell
[15:40] the vert to have the tangent pointing it exactly
where we want them to go and it will give
[15:46] us the illusion of having a reinforced edge
without having a reinforced edge.
[15:51] So it gives us a much cheaper asset in terms
of geometry, but the quality is just as good
[15:56] and it ends up making the ship look really
cool, but that’s essentially what we do
[15:59] in the greybox phase is build as close to
final geometry as we can using only two tones
[16:05] to break up the surface.
[16:07] So we’ll have a light grey and a dark grey
or maybe a high spec value, a low spec value,
[16:12] just to get a basic breakup of the colours
and how we’re going to break it up on the
[16:16] exterior walls.
[16:17] We’ll also do more finalized animations
in this stage.
[16:19] So we’ll go ahead and build full landing
gear and actually do the folding up and closing
[16:25] to make sure everything closes perfectly and
looks beautiful.
[16:28] And we’ll do this for landing gears, we’ll
do this for ladders, we’ll do this for the
[16:32] cockpit canopies: anything that moves on the
ship is something that we end up animating
[16:38] within the greybox phase mostly because we
can’t build the final geometry without knowing
[16:44] how it’s going to move.
[16:46] So it’s really important for us to work
on animation and building simultaneously.
[16:50] LD: Because when you go into greybox you start
needing to … Tech Design get much more involved.
[16:56] They have a working ship, or … in whitebox
form, and their job is then to go and make
[17:02] it flyable in the engine.
[17:04] And of course it’s only going to be a flyable
whitebox, but it’s flyable nevertheless.
[17:07] And it’s trying to make it work for all
the other disciplines.
[17:10] The goal is at the end of the Tech Design
greybox phase, is that other disciplines have
[17:15] something to work with.
[17:16] MS: Once I get it back from there it starts
getting into more of the nuanced set up.
[17:21] So really getting final thruster items hooked
up and not just placeholder items.
[17:28] Making sure all the guns are seated properly.
[17:31] Making sure everything is functioning - giving
the player the right line of sight.
[17:36] Making sure they have the right speed or convergence
angle.
[17:40] Just all that real core tuning that starts
to really build a ship out and give it its
[17:44] character.
[17:45] EB: So we try to produce a ship thinking about
the kind of experience and feeling that the
[17:52] player is meant to have.
[17:54] And you can really see this exposed in a lot
of our bigger ships that have large interior
[17:59] environments.
[18:00] So some ships are meant to feel very sleek
and clean, luxurious - so you’ll have a
[18:07] lot of clean walls, a lot of brightly lit
areas.
[18:10] And some ships are meant to feel really claustrophobic
and unsafe.
[18:16] The Caterpillar is a great example of that:
it’s dark, it’s dank; there are a lot
[18:21] of sharp edges sticking out.
[18:23] So we can also communicate that character
with our animations.
[18:28] So one really good example of that would be
the way … something as simple as the way
[18:32] a door opens.
[18:34] If you have a very smooth, quick movement
on the door it gives you the sense that everything’s
[18:39] working properly; there’s no mechanical
problems with it.
[18:43] Whereas opposed if you have a door that jerks
a little bit and looks like it’s scraping
[18:47] across the side as it moves out you get a
sense that the ship’s a little bit more
[18:50] dilapidated.
[18:51] That kind of thing.
[18:52] So when we build ships here we try to build
our proxy animations to have some of that
[18:58] feeling in them.
[18:59] So if a landing … if it’s a ship that’s
not meant to be perfectly smooth and perfectly
[19:03] refined - the Buccaneer's a great example
of this as well - we would like the landing
[19:08] gear to deploy and feel like it’s dropping
before it gets caught because it’s not a
[19:14] perfectly smooth transition.
[19:17] So that’s … those are just a few of the
ways that we try to add character and personality
[19:20] to the ships.
[19:21] MS: One of the things that we’ve done really
well with building out the Buccaneer is … even
[19:27] before the first whitebox was checked in Elwin
had been planning out a new … just a new
[19:32] way of laying out some of the files or ... updating
our current method of laying out the file
[19:37] inside 3D Studio Max that has really sped
up the process on doing hand-offs between
[19:44] art and design where an issue can be called
out.
[19:49] “Okay, cool”.
[19:50] The feedback goes back and forth.
[19:52] And I can still work, set everything up, without
ever having to worry about their work overwriting
[19:58] mine or mine overwriting theirs.
[20:00] So it just removes a lot of roadblocks and
that way it lets us - even with any uncertainty
[20:05] - it lets us be agile enough to jump onto
the Buccaneer or the Cutlass or whatever other
[20:13] ship or task is coming up when the time comes
for it.
[20:18] LD: The Drake Buccaneer is now considered
greybox complete in the production pipeline.
[20:23] There’s still many steps remaining before
it can be considered flight ready and we’ll
[20:27] be back later when it is.
[20:29] 20:30 Outro
[20:30] SG: A lot of really great info in there and
it’s fun to see how everything comes together.
[20:34] FS: Yeah it really is.
[20:35] And of course us developers can only do so
much, we rely a lot on the feedback that you,
[20:40] the backers, provide to us.
[20:42] All of your testing is vital to the project
so keep playing, contributing through the
[20:47] Issue Council and the forums.
[20:49] SG: And Star Citizen would not be what it
is without your support.
[20:52] FS: And the support of our Subscribers.
[20:54] SG: That is very correct.
[20:56] And it’s thanks to them that we’re able
to share the in-depth, behind-the-scenes shows
[21:00] we bring to you weekly.
[21:01] Thank you all so very much.
[21:02] FS: And that’s our show for the week.
[21:04] SG: That’s our show.
[21:06] Who knew?
[21:07] Make sure to tune in tomorrow 12pm Pacific
for the latest Happy Hour stream to what some
[21:10] live gameplay and discussion with Lead Writer
Dave Haddock.
[21:14] FS: Oh, awesome.
[21:15] And until then …
[21:16] Both: We’ll see
[21:50] you around the ‘verse.

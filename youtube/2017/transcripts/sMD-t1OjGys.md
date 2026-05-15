# Star Citizen: Around the Verse - Engineering Intelligence

**Video:** https://www.youtube.com/watch?v=sMD-t1OjGys
**Date:** 2017-01-26
**Duration:** 46:00

## Transcript

[00:09] Closed Captioning provided by Relay.sc
[00:13] Sandi Gardiner (SG): Hey everyone and welcome
to Around the Verse.
[00:18] I’m Sandi Gardiner and with me is Star Citizens’
Game Director, Chris Roberts.
[00:22] Chris Roberts (CR): Hey Sandi.
[00:25] So thrilled to be here of course.
[00:26] I’m actually going to be heading off to
Europe this Sunday, so I’ll be there for
[00:30] a few weeks so you’ll have other hosts here
with Sandi going forward for a few weeks until
[00:35] I come back.
[00:36] SG: Speaking of Europe.
[00:37] CR: Speaking of Europe look what we got from
a fan in Switzerland.
[00:41] He’s sent us lots of sugar obviously.
[00:43] Swiss Toblerones, Swiss Caramels, Swiss knife.
[00:45] SG: From Zurich, Switzerland, Martin Whip.
[00:47] CR: Yeah and sent us a t-shirt from his organisation,
thank you very much.
[00:52] SG: Check this out, bold.
[00:54] CR: Pretty, I’m not that brave to actually
get a real Star Citizen tatoo on my arm.
[00:59] SG: I’m not either, well done.
[01:00] CR: Well done, very impressive and thank you
very much Martin.
[01:03] Anyway back to the show.
[01:04] Today’s show is going to be about something
very dear and near to my heart, the game's
[01:10] AI.
[01:11] SG: That’s right we’ve got Tony Zurovec
and Francesco to sit down and answer a few
[01:13] questions about how players will be interacting
with NPCs in the game, but that will be coming
[01:18] up later in the show.
[01:19] CR: Yeah, first up we have our weekly studio
update from Nick Elms and our U.K. team.
[01:24] Studio Update
[01:25] Nick Elms (NE): Hi everyone, welcome to another
Studio Update from here in the U.K.
[01:28] My name’s Nick Elms, I’m the Creative
Director here at Foundry 42.
[01:32] As you might have imagined since the 2.6 release
we’ve been very busy trying to get 2.6.1
[01:36] out for you.
[01:38] There’s been a lot of bug fixing, a lot
of feedback that we’ve taken on board from
[01:42] you guys and John Crewe and Andy Nicholson
have been looking at incorporating a balance
[01:47] pass now with all the feedback we’ve been
gathering from you guys in the community from
[01:53] you playing 2.6.
[01:55] They’re making a comprehensive review that
hopefully we’re going to be getting into
[01:59] 2.6.1.
[02:00] We’re going to look at the Misc Razor next
which I think you saw in November for the
[02:07] concept sale.
[02:08] It’s now with the ship team and in particular
Joe Navel who’s working on it through its
[02:13] white box stage.
[02:14] As part of the ongoing VFX polish and optimization,
we’re going to take a look at the Drake
[02:18] Caterpillar.
[02:19] We’ve been working on the throttle up and
down engine effects and with the Herald we’ve
[02:25] been working on the explosion effects.
[02:28] This is the kind of stuff that we send around
the office on a daily basis and we thought
[02:33] we would share it would you guys so you can
get an idea of what we see.
[02:35] As you’ll see the VFX guys have shared there’s
a Vroll of all the ship weapons firing simultaneously.
[02:45] Surface outposts is what we’re going to
take a look at next which I think we’ve
[02:48] released a couple of snapshots of, but it’s
starting to come online a lot further now
[02:53] for us in the form of the building sets that
were starting to get through from the artists.
[02:58] The designers are particularly excited about
all the gameplay opportunities that these
[03:03] will afford as they can actually lay them
out on the planet surfaces now for you guys
[03:08] to investigate.
[03:47] That wraps up for another U.K. update.
[03:49] As I mentioned earlier there’s a lot of
work still going on behind the scenes with
[03:51] bug fixing and optimisations and feedback,
etc.
[03:54] All that remains for me to say is back to
L.A. and see you in the verse.
[03:58] Back to Studio
[03:59] CR: Appreciate the update Nick.
[04:01] Excited to see where the building sets are
headed, I mean that's fantastic, a lot of
[04:04] great stuff in there.
[04:05] SG: Definitely, no kidding, and the work the
effects team have been doing is really impressive.
[04:11] Especially the Herald explosion, that was
very cool for me, and as we’re seeing all
[04:15] the ship weapons lined up like that.
[04:16] CR: Yup definitely seeing things shoot and
blow up is always very cool.
[04:20] Nick also mentioned all the work going into
2.6.1.
[04:23] If you want to learn more about the up and
coming patch make sure to head to the website
[04:26] and look at our full production schedule to
get a full sense of what you can expect.
[04:30] We’ll be updating the schedule every Friday
until the release so you can track our progress
[04:34] via our website.
[04:36] SG: And of course a lot of the changes and
rebalancing that we’re doing right now are
[04:41] thanks to the fantastic testing that our backers
have been doing since 2.6 went live so thank
[04:45] you to all the backers out there.
[04:47] SG: Absolutely.
[04:48] Your feedback is invaluable to the project
so I want to encourage all backers to keep
[04:51] playing Star Marine, and Arena Commander,
and Crusader, and to keep letting us know
[04:55] on the forums, Issue Council, as well as on
the Spectrum.
[04:59] Please if you haven’t tried out Spectrum,
try Spectrum, It’s beta because we’ll
[05:04] be going live with that soon.
[05:06] It’ll help 2.6.1.
[05:07] and 2.6.2.
[05:08] and after that all the subsequent patches
to be as good as they can be.
[05:11] SG: And as many of you know from our newsletter
we recently had many of the directors and
[05:15] leads over at the L.A. office for several
weeks of discussions.
[05:18] While that was going on we took advantage
of everyone being here to record some deeper
[05:22] conversations about what we’re actively
working on.
[05:25] CR: Yup absolutely, and as the game's AI system
is one of the most complicated and ground
[05:30] breaking features that were currently in development
on Star Citizen, we figured it would be a
[05:35] great opportunity to have lead AI programmer,
Francesco Roccucci and Persistent Universe
[05:39] Director, Tony Zurovec gave an extended discussion
about the systems they’re building.
[05:46] [5:50] AI
[05:50] Tony Zurovec (TZ): I’m Tony Zurovec, I’m
the Director of the Persistent Universe for
[05:53] Star Citizen.
[05:54] Francesco Roccucci (FR): So I am Francesco
Roccucci and I am the Lead AI Programmer for
[05:58] Star Citizen, so yeah, we work a lot together.
[06:01] TZ: Yeah.
[06:02] [What do you oversee at CIG?]
[06:04] TZ: I’m predominantly focused on the architectural
side of the stuff - what the basic capabilities
[06:09] are, how we expose that functionality to the
designers so that we can get as much leverage
[06:15] from the development process as possible - this
includes working on the actual- developing
[06:20] the editor itself which was the designer’s
interface.
[06:24] FR: Well I think about all the architecture
from Tony and I make it real in the code,
[06:31] basically.
[06:32] We develop- I put the code- I architect the
code and we implement it and then I manage
[06:37] other three people so far on the AI team - so
we have Andrega Boni, Mario Sarini, Rich Walsh
[06:45] in the UK studio - so we are a bit in Germany
and a bit in UK.
[06:50] AI in Star Citizen: An Update
[06:52] TZ: The current state of AI in Star Citizen
is that we’re basically - I would say we’re
[06:58] cresting the hill with regard to the initial
tier of architectural functionality.
[07:03] Francesco has now got a lot of work to do
to basically take all of that, distribute
[07:09] it to his guys, get it working within the
game and what we’re aiming to do within
[07:14] the fairly near term is to be able to- for
the first, in significant fashion to be able
[07:21] to start exposing this functionality to the
designers and they should have enough of the
[07:28] base capability to start crafting actual missions
within the game.
[07:33] It’s going to look, to some degree, like
the missions you’ve seen before except that
[07:39] they should be able to create them much more
quickly which means we won’t be talking
[07:43] about 17 missions - they’ll be able to create-
you’ll be talking about much larger potential
[07:49] number of missions - you’ll be talking about
a lot larger of number of different things
[07:55] you’ll be trying- problems that you’ll
be able to present to the player - you’ll
[08:00] be talking about a lot more content that’s
going to have an algorithmic component to
[08:06] it.
[08:07] For example, right now, locations tend to
be fixed - and we’re going to be introducing
[08:10] in the not-too-distant future the ability
to go down to planets and stuff and we don’t
[08:14] want you to always encounter a derelict space
ship with a stranded pilot that needs to be
[08:19] transported to here always in the exact same
location.
[08:22] When you go to pick up that stranded pilot
- we don’t want him to always necessarily
[08:27] be friendly; when you go to pick him up, we
don’t always want him to be alone - sometimes
[08:31] it’s going to be an ambush, sometimes he’s
going to need medical attention.
[08:35] These are things, all just in the course of
that one basic scenario - which is “distress
[08:41] signal, crashed pilot, etcetera” - there
is a world of opportunity for us to create
[08:46] a range of potential experiences for the player
and this is what- as soon as basically- Francesco’s
[08:54] basically integrated the rest of this and
I’m sure there is-
[08:56] FR: No pressure on me.
[08:57] TZ: Little bits and pieces as we start to
mock-up the first tier of the subsumption
[09:03] missions, but as soon as we’ve got that
then we’ll finally start to get a sense
[09:08] as to what the designers can create with this.
[09:10] FR: I think it’s always like this first
step, right?
[09:13] Of getting the core-
[09:14] TZ: Yep.
[09:15] FR: -there in a state in which you’re not
only happy with the architect of the code
[09:20] as well - because for me it’s a lot, I know
I can rely on the vision of Tony for that
[09:25] for the architecture of the design and all
the other designers that we have - all very
[09:29] talented people and the code as well has to
be architected in a way you can scale as much
[09:35] as possible.
[09:36] So like, you know the big work we’ve done
so far is to make sure that subsumption runs
[09:41] and everything with acceptable amount of memory
usage and CPU usage.
[09:47] We have all these concepts of activities that
are actually templates that can be re-used
[09:53] between a lot of characters without creating
like instance everywhere or having the mission
[09:59] system as well, reuse as much as possible
from the subsumption architecture and so even
[10:03] after we create the same logic all over and
over again in different systems because it
[10:07] uses different systems and it’s also accessing
content from one actor to the mission and
[10:15] passing formation.
[10:16] It just becomes very much quicker, you don’t
have to go through different DLLs - each DLL
[10:21] can expose different functionality without
you- don’t have to add code to be doing
[10:27] different- complete different structure and
then how do I expose this part to this other
[10:31] system - it just becomes everything much more
fluid and much quicker to add stuff.
[10:36] So yeah, that sometimes it takes a bit of
time but then I think we are starting to arrive
[10:41] to the point where we are very happy of that.
[10:43] We’re discussing the last bits that you
added - for example, this concept of adding
[10:48] some reusable piece of logic that you can
recall and for us it’s very easy now to
[10:53] implement that and every new functionality
seems it’s always quicker to add and you
[11:01] can start of feel to say “We’re doing
a good job here” and I don’t like to say
[11:07] it, myself, but I think it’s good when you
are happy of the work you are doing.
[11:12] TZ: That’s something I referred to before,
which is- we’re very much focused and always
[11:18] have been with regards to the direction we’re
going with the concept of this “object-oriented
[11:23] content creation” which is to basically
distill all of the different pieces of functionality
[11:30] that we’re going to use to build up these
larger missions to break them down into all
[11:35] these component parts and then just like you
do in an object-oriented language like C++
[11:39] to basically allow us to pass inputs in, to
extract outputs out so that we can customize
[11:47] them dynamically in the scope of a much larger
problem.
[11:53] And so what this is going to wind up allowing
us to do is after we’ve got that initial
[11:56] library of functionality - designers are going
to be able to craft this stuff much, much
[12:02] more quickly than they’ve been able to do
in the past and what this effectively means
[12:09] to the player is a much larger amount of interesting
things to see and experience and challenges
[12:16] to face and solve within the game world.
[12:21] Subsumption
[12:22] TZ: The first part of subsumption - the easiest
part of subsumption to basically expose is
[12:28] actually going to be the mission side of it
- the mission side is basically built on top
[12:33] of the, what you want to call the lower level
AI layer, there’s a lot of commonality in
[12:39] terms of how we do message passing, the data
structures, the concept of functions, reasonable
[12:45] parameters and all this kind of stuff, task
archetypes with which we build up the solutions
[12:49] to these problems - the mission stuff in general
is a bit more straightforward to expose because
[12:57] it doesn’t directly control any of the animation
stuff.
[13:01] And the animation when you’re talking about
a modern 3D game - animation, even though
[13:08] it’s not technically part of what most people
would call the AI, it’s plays a massive
[13:15] role with regards to how people perceive it
- if you have a bartender and he’s going
[13:21] about doing his business but the path find
is-
[13:24] FR: It’s not smooth or-
[13:26] TZ: -the path finding doesn’t often very
well, he goes right up to other characters
[13:30] and then goes 90 degree angles around them
as opposed to doing nice splines - if he basically
[13:34] doesn’t align himself precisely, if things
don’t snap right to his hand - if he can’t
[13:40] actually operate things in believable fashion
then he doesn’t actually look intelligent,
[13:45] even though under the scenes he’s still
able to search for this - he can still basically
[13:49] go over to it, he can still utilize, he can
still create items, he can still send messages,
[13:53] received messages, query the environment - all
that type of stuff and so one of the big issues
[14:00] that we face before we really expose the AI
side of it is we want to make sure that a
[14:07] lot of these - you could call them cosmetic
issues because they really predominantly isolated
[14:14] from the AI itself although the solution to
them is occasionally quite complex because
[14:20] they are still so tightly integrated.
[14:22] By way of example, one we’ve talked about
before is you’ve got a path find and in
[14:26] combat you’ve got a character and he’s
running towards cover and he actually needs
[14:29] to know in the path find that he’s running
towards cover in a combat situation and then
[14:35] he’s basically going to modify the end part
of that path find he’s running to that destination
[14:41] by sliding into cover and if you’re talking
about a character that’s actually going
[14:45] to manipulate something or sit in a chair,
they need to know how they are going to need
[14:48] to be aligned so that while the path find
- the predecessor step an action, it can be
[14:54] taking that into account so that because-
what you don’t want is for them to get to
[14:57] the endpoint and then spin 80 degrees and
then basically to play the appropriate animation
[15:04] and so the mission stuff is the first and
easiest but given the release schedule and
[15:12] we can’t talk too much about that - we’ve
had some conversations about whether or not
[15:18] we might have a small iterative release that
might expose some of this for testing purposes
[15:26] but we’ll just have to talk about that as
we announce that later.
[15:30] FR: Subsumption is really global, general
name so I think we’re probably- when the
[15:35] mission system is out, well it’s part of
subsumption so there will be a part to experience
[15:40] what subsumption is in general, right?
[15:43] But, yes, as Tony says, most of the animation
issues are the one that.
[15:49] we are basically working on to … before
we can show something.
[15:54] Or not too much before we “can” show but
before we want to show ...
[15:57] TZ: That’s exactly it.
[15:58] FR: … because I think that’s the critical
part.
[15:59] It’s like for me - I think we are both very
critical to the work we do - so it’s like
[16:04] always say “ah, this doesn’t look very
good: I don’t want to show it”.
[16:06] TZ: And this was one of the big things with
the Squadron 42 Vertical Slice to where one
[16:10] of the largest issues was the animation integration
…
[16:14] FR: Yeah.
[16:15] TZ: … into the system.
[16:16] As opposed to whether or not you were, under
the hood, actually doing all of the appropriate
[16:20] AI logic.
[16:21] The AI logic, a lot of it was …
[16:24] FR: It’s … yeah, really a good point ...
[16:25] TZ: … actually operational.
[16:26] FR: … because the Subsumption logic … it’s
already … we have … in our game, our builds,
[16:32] we already use the activities.
[16:33] We already use sub-activities.
[16:34] We already have secondary sub-activities surrounding
people say “Hi” to you or greet you, seeing
[16:40] from far, having different activities ...
[16:41] TZ: Right but we were having problems with
the heads weren’t orientating correctly
[16:44] and ...
[16:45] FR: But … exactly … if you showed something
like that ...
[16:47] TZ: … to any user you show that …
[16:48] FR: … yeah.
[16:49] TZ: … it looks much more primitive than
that it really is.
[16:53] And so that was one of the reasons why, up
until the very end, we were like “Well how
[16:57] … how quickly can we tie up some of the
most egregious animations issues?”
[17:02] FR: Because you gonna make sure … you want
to make sure something that can be very impressive,
[17:08] it actually is.
[17:09] Because otherwise if you ruin the look of
something that is actually quite complex,
[17:14] quite advanced, with a bad look then it’s
hard to remove that type of first impression.
[17:21] And it’s not smart and it’s like … I
don’t think it gives the right credit to
[17:26] the system
[17:27] TZ: We … we … we
[17:28] FR: … and the developers that worked on
it.
[17:29] TZ: … we want the quality of the animation
to match the ambition …
[17:32] FR: The system.
[17:33] Yeah.
[17:34] TZ: … of the actual logic …
[17:35] FR: The game.
[17:36] TZ: … and that’s still going to require
… that’s still going to require some effort.
[17:40] [17:42] 3.0 NPC AI
[17:43] TZ: 3.0 I think we’re actually going to
aim for a pretty diverse set of things.
[17:49] Most obviously would just be starting to make
the landing zones actually start to feel alive,
[17:54] so that you encounter a variety of different
characters all pursuing their own particular
[18:00] set of interests.
[18:01] This will include everything from the prototypical
bartender and bar patrons, tourists, vandals,
[18:07] businessmen…
[18:08] FR: Shop.
[18:09] TZ … yeah, various shop … shop keepers
... muggers, criminal elements: things of
[18:16] that sort.
[18:18] And then some of the … some of the more
interesting stuff in terms of the gameplay
[18:23] potential, I would say, would be the combat
aspects.
[18:26] FR: Because the combat is, of course, is what
I really worked on and it’s something I’m
[18:31] really, really happy to work on and I want
to push it even further.
[18:34] That is going to be interesting because we
try to make this first iteration on it where
[18:40] there is already coordination between the
guys that fight.
[18:43] People that can advance while somebody else
covers the advancement from a cover spot or
[18:50] if no cover spot are allowed they will just
…
[18:53] I think the main thing with the combat that
I’m really trying to push is the fact that
[18:58] they understand the environment.
[19:00] And you are sure.
[19:01] And you understand that what they are doing
makes sense for the type of environment which
[19:05] they are in.
[19:06] And that is going to be what I think is cool
in this scenario because maybe you’ll find
[19:11] some pirates on the side you want to get a
good deal but then they turn on you.
[19:15] And then the fight makes interesting … the
situations …
[19:19] TZ: And this will play into a number of things
so that when you encounter … like right
[19:23] now the only ships, as you’re just generally
wandering around stuff, you tend to encounter
[19:30] is really other players.
[19:31] TFR: Yeah.
[19:32] TZ: And that should be dramatically different
in 3.0.
[19:36] Not only different in terms of you encountering
them but in terms of what you can do with
[19:40] them.
[19:41] If you disable … if you’re transporting
cargo and you basically get attacked by a
[19:47] pirate and he disables your engines then it’s
entirely possible that he’s actually going
[19:52] to try to board your ship.
[19:53] Or vice versa if you’re a mercenary … if
you’re a pirate and you’re trying to take
[20:00] out a freighter then part of what you’re
going to have to do is - after you disable
[20:06] the ship - is board it and those characters
will actually be able to fight …
[20:11] FR: Fight back.
[20:12] TZ: … fight back within the confines of
their ship.
[20:14] And this is, again, just going to open up
a world of possibilities in terms of making
[20:20] the world, space, etc. feel much more alive.
[20:23] FR: Kind of unique as well.
[20:25] Because I think it creates these kinds of
scenarios that are not very easy to find somewhere
[20:30] else.
[20:31] It’s going to be a very interesting to see
how the players will play.
[20:35] [20:36] Back In The Studio
[20:37] CR: Thanks guys.
[20:38] Hopefully that gives you a better sense of
the progress we’re making and gives you
[20:41] an idea of how awesome the final version can
be.
[20:44] As more and more of the features like the
AI and the mission system, locomotion for
[20:49] player and AI come online and are implemented
into the game we’re able to unlock even
[20:53] more opportunities to push the game even further
and create that first person universe that
[20:58] Star Citizen is going to be.
[21:00] SG: And we know that AI has been one of our
most asked about topics from the community
[21:04] so we decided to open up the conversation
to the community and let Tony and Francesco
[21:09] field some of your questions about how it
works.
[21:11] [21:14] AI - Fan Q&A with Tony Zurovec & Francesco
Roccucci
[21:13] Q: For NPC ships, are those under the control
of a single AI or will it be multiple AI working
[21:18] together?
[21:19] What are the challenges of this?
[21:20] TZ: Multi-crew ships will operate fairly similarly
to the hierarchy ... the chain of command
[21:25] that you’d see in a typical civilian or
military vessel in that you’ll have a captain
[21:31] and the captain will tell the navigator where
he wants to go.
[21:33] And the captain will basically tell the engineer
what to prioritise: whether he wants … needs
[21:37] the weapon systems back online first or the
shield generators or the engines.
[21:41] And he’ll dispatch the chief medical officer
to deal with medical problems in this area
[21:47] or that area.
[21:48] So it’s at a very high level.
[21:49] I’ve said before we don’t want to be “Sim
Citizen”.
[21:52] We don’t want to have too much micromanagement
in terms of control.
[21:55] That’s not the type of game we are.
[21:57] But the concept of being able to just generally
prioritise things and then to have your lieutenant
[22:03] characters address those.
[22:05] And this actually segues nicely into how players
are going to be integrated into the equation.
[22:11] If you’ve got a captain and you’ve got
a navigator and you’ve got a chief medical
[22:15] officer and you’ve got a chief engineer
and you’ve got a chief weapons officer,
[22:17] and all this other stuff and then all of a
sudden the player wants to … one of your
[22:21] player friends wants to deal with weapons
or deal with engineering then you’ll have
[22:26] a very easy means of factoring in how the
other characters are going to interface with
[22:34] them.
[22:36] And what you’re going to wind up getting
out of this is a nice concise system to where
[22:42] you can customise as much or as little as
you want.
[22:45] You can have … you can recruit NPC characters
to do as much of the work, that you and your
[22:55] friends don’t want to do, as is necessary
to accomplish the job.
[22:58] FR: Yeah, gets you really moving away from
one behaviour for one ship.
[23:04] So it’s really like each seat will be controlled
by the people - just one - to work on that
[23:11] seat.
[23:12] So I think there would be a really the crew
feeling working on the spaceship as Tony already
[23:17] said.
[23:18] I think that is the only way to give a bit
more realism in the sense like even if you
[23:23] board a ship and the pilot is tries to still
bring the ship somewhere and you kill him
[23:28] then you don’t want the spaceship has this
external behaviour still like drives automatically,
[23:35] controls the turrets anyway.
[23:36] You just want to really see that something
is there.
[23:39] Another thing we also try is to make these
type of AI modules that you can buy and assign
[23:45] to specific seats.
[23:46] So you don’t have an actual crew member
sometime but you want to have a small computer
[23:51] at that controls, turret for example.
[23:53] So some stuff, maybe the medical officer,
cannot be substituted by computer but the
[23:57] turret can have a controller … automatic
controller.
[24:00] And if you just sit down then you can immediately
take control over things turn on and off.
[24:05] And I think you as a player you are also able
to customise a bit how the ships automatically
[24:09] responds to things.
[24:11] Can be really cool because you can have just
like a combination of … that you can have
[24:16] that already makes a huge difference between
one ship and another.
[24:20] Q: What advantages/disadvantages would there
be in running an AI-crew versus an all-human
[24:25] crew?
[24:26] TZ: The advantages of AI crew versus human
crew?
[24:30] I wouldn’t really say that there’s definative
advantages.
[24:33] I would say the devil’s always in the details.
[24:36] What you will have as a player is the ability
to recruit NPC characters to fulfil specific
[24:42] jobs on your ship.
[24:44] But when you basically go to recruit them,
that’s where the details start to matter.
[24:50] How much are you willing to pay?
[24:51] And that’s going to determine the level
of quality, the level of professionalism,
[24:55] that you’re going to get from that particular
member.
[24:59] If you want, a turret gunner that’s really
effective then you’re going to have to pay
[25:03] a higher monthly salary.
[25:04] You’re going to have a higher running cost,
and so what you’ll see a lot of players...
[25:09] and the exact same scenario exists within
players: there’s some will be more adept
[25:12] at a given occupation - a given skill - others
will be less capable, and so what I think
[25:18] you’re going to wind up seeing in a lot
of cases is players - you may have a ship
[25:23] that’s ideally crewed by 6 or 8 or 10 people
- and the player’s party will take on those
[25:31] roles that they’re best at and then they’ll
recruit NPCs to whatever skill level they
[25:38] can actually afford to fill in the remainder.
[25:41] FR: Also about the interest right?
[25:43] Because maybe some players have interest on
piloting, some others have really good interest
[25:48] in shooting.
[25:49] And then you can just use the AI to fit the
roles you don’t like too much.
[25:53] But on the other hand the AI won’t rage
quit on you, right?
[25:55] You won’t have like a player disconnecting,
so.
[25:57] TZ: Yeah, but they
[25:59] FR: You have an an advantage with AI?
[26:03] ...
[26:04] TZ: Well and that's true.
[26:05] All of the whereas most of the things that
players will actually do will depend upon
[26:12] their actual capabilities, or their ship capabilities,
or their equipment's capabilities to expose
[26:16] things.
[26:17] But how, how well you basically can fire,
for example on another player, your accuracy,
[26:22] that's determined by your physical dexterity,
and it's influenced by the weapon which may
[26:28] have more or less kickback or a wider area
of effect in terms of it's damage, etc.
[26:35] And NPCs will have a variety of characteristics
that will model how well they deal with all
[26:43] of these different . . with all of these different
things that the player has to . . has to handle
[26:50] themselves.
[26:51] FR: Yeah the skills will be like definitely
be a huge part you know on deciding like this
[26:56] NPC is good at doing every job or jobs.
[26:59] But maybe you have two that are kind of good
at the same job, and you still need to fill
[27:03] another role and you put the one.
[27:04] They say, “Well, I still need the shield
management.”, and even if none of them is
[27:08] pretty good but maybe after a certain amount
of missions.
[27:11] Well he starts to get used to that, and he
starts to improve his skills as well.
[27:15] You know you can decide, “Will pay a bit
less, but I risk a bit more in the beginning
[27:19] at trying to make simple missions so they
get used to these things.
[27:23] I think that is also like interesting to see
how the player will use their strategy to
[27:28] put balance their hiring and the other NPC
they have with how they can improve and learn.
[27:34] TZ: Yeah, it becomes another resource to manage.
[27:36] Another way by which players can differentiate
their style of gameplay
[27:40] FR: Yeah.
[27:41] TZ: versus another.
[27:42] Well it's like do you go with three engineers
of lower quality or one really stellar performer.
[27:46] FR: Yeah.
[27:47] TZ: So there's going to be a multitude of
ways for you to customize the game-play experience
[27:51] via the choices you make in all of these different
areas.
[27:53] Q: What do you anticipate to be the largest
ship capable of operating effectively with
[27:58] an AI crew?
[27:59] TZ: There's no real limitation just given
the distribution of responsibilities.
[28:04] It would really just be more along the lines
of the larger ships will require larger crews
[28:10] to operate effectively and therefore their
running costs on average will tend to be higher
[28:15] than crew . . than ships that can be operated
with, with a much smaller crew.
[28:19] Obviously you can modulate that to some degree
with the quality of the crew you're hiring
[28:23] . .
[28:24] FR: Yeah.
[28:25] TZ: . . and things of that sort, but there's
no hard coded limit and there's surely no
[28:29] reason why there would be given how all of
these tasks and responsibilities that they're
[28:33] going to be executing are going to be ready.
[28:35] FR: I think that is really like coming from
you know to the, to the fact that basically
[28:39] within the individual behavior you know are
controlled by a captain or something like
[28:43] that, but then each of these NPCs which is
do it's job.
[28:47] So you know there is no real limit on the
amount of people that execute their job if
[28:51] you know you have like five, six to control
five different turrets.
[28:55] Well, you know, that would be just like five
different people.
[28:57] Their coordination of course depends on the
amount of targets they have.
[29:01] Who they can target, but then it doesn't matter
like if there are three or five or fifteen,
[29:06] because you know the code would just give
for that would try and distribute the targets,
[29:10] but so exact you know . .
[29:11] TZ: But it would like as you go, as you go
to upper echelon of ships you are going to
[29:15] probably need more experience . .
[29:16] FR: Yeah.
[29:17] TZ: . . better commanders, because they are
effectively going to be . . in control of
[29:22] more . . of a larger number of crew members
and we would probably . .
[29:26] FR: Yeah.
[29:27] TZ: . . just model it such that if you basically
get a lower end . . a lower . . a lower quality
[29:32] of chief engineer starts to basically buckle
under the pressure and he starts to make bad
[29:36] decisions, etc.
[29:37] .
[29:38] FR: Yeah . . assigns wrong people . .
[29:39] TZ: . . once he starts getting beyond three
or four or five guys that he is controlling.
[29:41] The exact same thing you'd see in the real
world.
[29:43] Q: What kind of relationships do you expect
us to develop with AI NPCs?
[29:47] Will an NPC react differently to me based
on prior actions?
[29:51] If I ruin a relationship with an NPC, will
there be ways to repair it afterward?
[29:55] TZ: It's always been our intention to allow
the player to form long lasting relationships
[30:03] with all of the characters in the game.
[30:05] What this means specifically is that you will
develop what we call reputation in a number
[30:11] of different fields.
[30:12] Are you known for your acts of piracy?
[30:14] Are you known for your humanitarian missions?
[30:18] You're basically very medically oriented and
you are rescuing people, healing people, solving
[30:23] medical crisis, you know etc.
[30:25] Do you . . are you really well known for how
effective a transporter you are in terms of
[30:33] commodity goods and things of that sort?
[30:34] You have a high very . . a very high success
rate in terms of getting it done.
[30:39] So there will be those reputational aspects
that characters will be able to . . you know
[30:44] of yourself . . that characters will be able
to query to determine how much they like you,
[30:48] dislike you, whether they want to offer you
the more advanced missions or just the starter
[30:54] missions, what they are willing to pay you
in order to do that, etc.
[30:57] There will also be these what I call these
many to one relationships to where it’s
[31:03] not based upon your, you know, piracy rating
or your transportation rating…
[31:07] it’s based on your specifically one to one
relationship.
[31:10] How do they feel about you?
[31:11] Did you take a specific mission from them?
[31:14] That’s probably going to be weighted much
more significantly than stuff that they heard
[31:19] that you did for other characters in the universe.
[31:22] They will also be able to take into account
your… the organizations to which you’re
[31:27] a part.
[31:28] Do they like that organization?
[31:29] Do they hate that organization?
[31:30] Are they neutral to that organization?
[31:32] So all of these things together are basically
variables that the characters within their
[31:36] conversation logic can factor into how they
respond to you.
[31:41] So… and then we’ll wind up having these
things gradually, you know, return to a baseline
[31:48] if you don’t keep doing it.
[31:49] Other words if you were an exceptional…
[31:53] exceptionally good at transporting merchandise,
very high success rate.
[31:56] If you haven’t done that in a day, in a
week, in a month…
[31:59] then people will no longer be talking about
that behind the scenes, therefore you expect
[32:04] that reputational aspect to gradually deteriorate
over time and you’re going to have to just…
[32:07] you’re going to have to... basically going
to have to keep doing that type of thing and
[32:11] keep doing it well if you want to maintain
your standing with the community in that regard.
[32:15] FR: Yeah, so like for us for me especially
now on the AI team what we try to do is I
[32:21] test all of these functionalities to make
sure that the AI can create as much content
[32:25] as they can.
[32:26] So like, you know, once we have these things,
the relationship variables or attributes it
[32:31] is really like better to give these to the
designers and then the designers can use any
[32:35] of these.
[32:36] Can be the reputation, can be this… you
know, what they feel about you and they can
[32:39] just create all the logic that they want.
[32:42] Plus we have… we’re kinda in a unique
position because like the game can constantly
[32:46] be updated so these characters can also get
new responses.
[32:50] You know, based on the state and, you know,
and all the result is new content that we
[32:55] can create with time that just makes, you
know, the relation always more smooth and
[33:00] you know, we can go deeper into details and
mentioned other stuff that you’ve done,
[33:05] mentioned events that have happened.
[33:06] If I have a good relation with you maybe I
gossip about something with you and you know,
[33:11] we can create this and always have more and
more and more.
[33:14] TZ: There’s the stuff that really matters
in terms of the missions they give you whether
[33:18] they’ll talk to you at all and that stuff.
[33:19] Then there’s also just the more cosmetic
stuff where they tell you jokes or they’re
[33:22] light hearted or they’re basically bantering
on about their history because they feel comfortable
[33:26] with you because you’ve done three missions
with them within the last week.
[33:29] Were they frowning at you as you go, were
they repulsed by you, were they disgusted
[33:33] by you, you know.
[33:34] All that type of stuff, so I would you say
you’ve got different elements coming together
[33:38] which is, you know, not just how they explicitly
react to you but more just, you know, they’re
[33:43] just… they’re more subtle behavioural
characteristics when, you know, when you’re
[33:48] in proximity.
[33:49] In conclusion, what are you most looking forward
to?
[33:53] TZ: For the future AI I think that clearly
going to head more towards the algorithmic,
[34:00] you know, generation of content that does
not mean by any stretch of the imagination…
[34:04] we’ve said from the very beginning, it’s
like we don’t want to be pure algorithmic.
[34:07] We have no interest in being purely algorithmic,
we don’t think that makes for a good gameplay
[34:10] experience.
[34:11] It just makes for good taglines in terms of,
‘ hey look, we’re giving you an arbitrarily
[34:15] large of this’ but it’s all, you know,
it’s all bland and uninteresting.
[34:20] There’s nothing really, you know, handcrafted
to draw you into it and so what we’ve been
[34:26] pursuing for years now is basically the ability
to create all these handcrafted pieces and
[34:32] then to allow the designers to build on top
of those to link those pieces together to
[34:36] create very quickly what, you know, what seems
like incredibly customized missions but they’re
[34:43] able to do it in much more rapid fashion than
what otherwise would be the case.
[34:48] So, I think what we’re going to wind up
having is, you know, as you go forward is
[34:52] just the ability to algorithmically create
more, you know, variations on those things.
[35:00] You’re not really going to notice it in
terms of quality of the content, it's just
[35:05] going to look like… it’s going to look
like you went from 12 designers dedicated
[35:09] to this to 24-36 as you basically refine all
those algorithms and you start to get your
[35:14] base library functions and stuff all entirely
operational.
[35:17] FR: Yeah, the thing I think we can talk about
as well is like the way… the thing I would
[35:22] always like to push forward is the kind of
realism is if you want to start to follow
[35:28] one guy, for example, and we start with something
like the guy will leave the planet but maybe,
[35:32] you know, eventually you have this guy like
change planets, you know and he’ll be able
[35:37] to understand that there are connections between...you
know, jumping into space ship, then take the
[35:41] spaceship to fly, quantum jump and then go
to this other planet and then go down and
[35:45] search for another part.
[35:47] You can just follow it and then you can be
always be more realistic like, you know, I
[35:51] think that is from a tech perspective, you
know we’ll have of course some optimisation,
[35:56] what you’re trading, stuff like this that
we want to have as quick as possible.
[35:59] So I think there are like these two parallel
you know, work that we are doing both on the
[36:05] content production tools to create always
more and give more feeling and all the technical
[36:12] problems that we are trying to solve like
using objects while you use another object,
[36:16] you know sitting on a spaceship and while
you are sitting you actually interact with
[36:21] all the objects and each these interactions
triggers something else.
[36:24] I think these of things that we are going
to eventually have... it’s the details,
[36:30] it’s an amount of details that you will
eventually have based off all the iteration.
[36:35] So first iteration will have, even on the
combat side, first iteration will have a sort
[36:40] of coordination, but then these other iteration
will always have more and more coordination
[36:46] using more type of weapons, being smart on
which type of weapon is best in this specific
[36:51] environment or in a specific scenario.
[36:54] I think this is just going to give always
more realistic feeling.
[36:58] TZ: Yeah because another long term objective
and this is not within the next 12 months
[37:03] it’s more of a 12-24 month window type of
thing is basically support for what we refer
[37:09] to as the Persistent Dynamic NPCs and what
we mean by that is, of course there will be
[37:16] specific characters at specific areas within
even the Persistent Universe, certainly within
[37:20] Squadron 42, but we’ll have those characters
even within the Persistent Universe, and then
[37:26] there will be another class of characters
that are just created as you want around the
[37:30] world.
[37:31] You encounter, you’re basically transporting
a load of commodities from one planet to a
[37:39] refinery and you encounter a pirate and that
pirate winds up inflicting significant damage
[37:45] and you wind up having to call for help and
once your help arrives you basically high
[37:50] tail it and get out of there.
[37:53] This is the kind of thing to where what we
want to eventually to be able to do is to
[37:58] keep the essence of what that character was,
that pirate, what was his name, what does
[38:03] he look like?
[38:04] Was he talking to you on the radio, what voice
were we using for him, what was his rank?
[38:09] What was the source of the interaction that
you had with him.
[38:14] What’s your history?
[38:15] He basically got the better of you in a battle
and then we want to be able to use that as
[38:20] an input into this library of mission content
such that next time we’re looking for a
[38:27] pirate to basically be utilized on one of
these mission archetypes, we have the possibility
[38:35] to insert him as the specific character and
he then has the ability to refer back to that
[38:41] prior history and so what you wind up having
is your own little custom version of the world
[38:47] to where these are characters we didn’t
specifically go out and hand create and give
[38:52] a history to, but you’re encountering them,
your interacting with them made them real,
[38:57] made them persistent for you.
[38:58] They’re also persistent for any party members
that you’ve got, it’s like everybody can
[39:02] see them, but those particular characters
that you’ve interacted with in a certain
[39:06] way become available for us to utilize when
we need an equivalent character as you encounter
[39:14] lots of different scenarios within the game
world.
[39:17] Final Thoughts
[39:19] FR: Well I think that other things I also
look forward is when the wildlife on the planets,
[39:29] that’s going to be really interesting because
it’s something I worked on a little bit
[39:33] before.
[39:34] In Crysis we had some little wildlife and
there’s always this big difference between
[39:38] the smart wildlife and the more simplistic
wildlife.
[39:42] If you have a frog, well you don’t expect
the frog to be super smart.
[39:47] You can create this kind of, you know the
CryEngine word: Boids, animals that can move
[39:52] around and they react to your presence or
your proximity much more.
[39:55] Then you have other things like pets or even
just bigger animals like a deer or something
[40:02] you know that they’re smarter and they need
to do something with you, they’re not as
[40:06] complex as a human, but they’re pretty complex
and to give the actual feeling of planet,
[40:11] we’ll have to tackle all of these things
and it's going to be very interesting.
[40:14] TZ: Well, but it’s just like with the cities
to where you want to make this world that
[40:19] you’re travelling through look as alive
and as interesting as possible because if…
[40:24] like right now, i’m sure bothers us all
is the just the fact that we’ve got a great
[40:30] big world, but we’re not yet able to effectively
populate it with a lot of interesting material
[40:36] for the player to see, and we’ve talked
in the past about how we’ve got 17 missions
[40:41] in the Persistent Universe that you can go
and accomplish, but those were implemented
[40:48] in a completely different fashion than what
we’ve been aiming to eventually be able
[40:53] to do, but these systems are such that you
need to have maybe not the entirely, but a
[41:01] significant majority of the base functionality
operational before you have anything and so
[41:06] what makes me most excited about 2017 is just
the fact that we should start get this stuff
[41:13] that we’ve been talking about on the content
generation side finally into the game and
[41:18] this is where all of a sudden the ability
for players to start do a variety of different
[41:24] occupations and for them to just fly around,
orbit around a moon, content we didn’t explicitly
[41:30] put there will be able to fill in, and then
there will be interesting stories and things
[41:38] to do all littered throughout the entire system.
[41:43] So I think that once we get 3.0, it’s supposed
to be the initial iteration of pushing this
[41:49] stuff out there and then all the successive
releases are just going to be refining, refining,
[41:54] basically taking advantage of this system
we’ve put in place.
[41:58] I think that Star Citizen in 3.0x iterations
is going to finally start to look like a real
[42:06] finished game to where you can just go in
and lose yourself for hours and hours at a
[42:11] time and that’s not because you’re marveling
at just the technological ambition of the
[42:16] project, it’s because there’s actually
enough gameplay content in there to keep you
[42:21] interested.
[42:22] FR: And for me it’s like, because after
where we have that, we can actually see how
[42:26] the player plays with the game.
[42:29] The most interesting thing for me working
on games is the fact that you produce something
[42:33] that people actually play with and they interact
with, it’s not that you know you just give
[42:36] it and it’s not that only, it’s really
how you use it, it’s how you play that,
[42:41] and the game plays with you so I think at
that point you can also start to tweak things
[42:45] say, “Ah this is how people like to do,
and the way they like to play”, and then
[42:51] you can adjust things and give more content
here and I think that is going to be very
[42:55] interesting.
[42:56] TZ: I can foresee us using spectator mode
quite a bit to actually see how players are
[43:01] interacting with all of this initial set of
mission concept.
[43:04] FR: “Stalking Mode”.
[43:07] Outro
[43:08] SG: Always great to hear more about how NPC
crews are going to work.
[43:12] It sounds like it's been a huge undertaking
to develop a system this complex.
[43:16] CR: Yeah, no it’s definitely a huge undertaking
and we’re still hard at work at it, especially
[43:21] Francesco and Tony.
[43:23] We really want our NPCs to have complex behaviors
you would expect.
[43:26] So the work Tony, Francesco, and the rest
of the AI team have been doing is vital to
[43:30] our plan moving forward in creating this immersive
Star Citizen, and Squadron 42 first person
[43:37] universe.
[43:38] So once we have the foundation in place we’ll
be able to tie it into the mission manager
[43:42] and the mission system itself and create some
really emergent and immersive scenarios either
[43:48] by scripted design on the designer's side
or through sort of, systemic or procedural
[43:53] generation that's in response to player or
AI behavior.
[43:57] So I think it’s going to provide some really
cool and unique gameplay.
[44:01] SG: Cool, with that brings us to this episode
of ATV, and as always we’d like to thank
[44:06] our subscribers for contributing to the creation
of all our in depth behind the scenes concept.
[44:11] CR: Yup, thank you guys very much.
[44:13] I thank you for having patience for us being
here and doing all of this and a huge thanks
[44:17] to all of our backers who are supporting Star
Citizen's development.
[44:20] You guys are a big part of what makes the
project unique and special and we definitely
[44:25] could not do it without you guys so thank
you very, very much.
[44:27] SG: We could not, and if you would like to
hang out with more of the team make sure to
[44:30] tune in tomorrow at 10am Pacific for the latest
Star Citizen Happy Hour stream to watch some
[44:36] live gameplay and discussion.
[44:37] CR: Yes.
[44:38] I’m not quite sure which one of our devs
will be there, but they’ll be there and
[44:41] it’s kind of a cool opportunity to have
an informal Q&A and discussion, but until
[44:46] then.
[44:47] SG: We will see you.
[44:48] Both: Around
[45:20] the Verse.

# 10 for the Chairman: Episode 79

**Video:** https://www.youtube.com/watch?v=7sCTnlihzEY
**Date:** 2016-03-14
**Duration:** 24:04

## Transcript

[00:06] Closed Captioning provided by the Imperial
News Network.
[00:14] Chris Roberts (CR): Hello everyone.
[00:19] Welcome to another episode of 10 for the Chairman.
[00:22] For those of you who haven’t seen this before,
this is where I answer 10 questions that have
[00:25] been put forward by the subscribers.
[00:27] The subscribers are a subset of our community
that contribute money every month to enable
[00:31] us to do all of our enhanced community content.
[00:33] So we thank you very much for that because
it really allows us to do a higher degree
[00:37] of content and pays for a lot of the community
staff and videographers and editors to allow
[00:43] us to put all the video shows we do every
week and also do the extra amount of updates
[00:49] on our website and we have also for subscribers
as part of a perk for subscribing there’s
[00:56] a Jump Point magazine which is usually somewhere
between 40 and 70 pages of behind the scenes
[01:01] material, how we build and design ships or
how we’re designing a game system or lore
[01:07] for the world or details about a system and
also some fictional stories that we’ve published.
[01:12] It’s really a pretty cool read and it has
sort of I guess information a little sooner
[01:17] than we release to the general overall community
so it’s kind of a perk for being a subscriber
[01:23] and then there’s also sort of flair that
we add to the hangar and some other areas
[01:28] in terms of well, thank you for being subscribers
and helping us do all this other stuff so
[01:34] because of that I also try to answer 10 questions
put forward by the subscribers as the best
[01:40] of my ability that hopefully gives you a little
insight into where we’re heading or some
[01:44] of the ideas we have or answer some of the
questions you guys would really like answered.
[01:49] So the first one comes from.
[01:51] [01:48] Furry Quandarys asks: It’s been
stated that Squadron 42 is set a few years
[01:56] before the PU.
[01:58] So will S42 be set at the current-game year
at the time of its release (ie 2946) and the
[02:05] PU ahead of the current year.
[02:07] Or S42 in the past and the PU in the current
year?
[02:11] Will episode 2 also be set before the PU?
[02:14] CR: I would think that in general we would
set the Squadron 42 Episode 1, 2 and 3 would
[02:21] all be set before we start the PU timeline,
I guess is the way to think of it.
[02:27] So, right now, we do this analogous, it used
to be 2942, now it’s 2946, so we would probably
[02:36] be setting Squadron 42 in 2942 and between
there and when the PU would start.
[02:45] Squadron 42, 2942, works pretty well.
[02:49] [2:58] Zankyri asks: My ship has been boarded
and I cut the gravity generator.
[02:53] Assuming I still have thrusters and potentially
partial main engines.
[02:57] I wait until the boarders are inside the ship,
my crew are strapped into crew seats and I
[03:01] use the thrusters/engines to generate G-force,
pitch, yaw, roll forward, speed, hard stop,
[03:07] rinse repeat.
[03:08] If I am able to generate even 25 m/sec potential
boarding parties will be hitting walls at
[03:13] 90 km/hour.Does the game have sufficient physics
to handle this kind of damage implementation,
[03:19] and how effective would mag boots be in this
scenario?
[03:23] CR: So that’s definitely, a pretty detailed
question and approach.
[03:32] So what I will say is that the longer term
plan for the interior grid physics is that
[03:38] we will simulate a certain amount of external
forces.
[03:42] So if a ship gets hit we’re planning to
have a bit of that force propagate inside
[03:50] to the non strapped down or attached entities,
one of which will be players.
[03:54] So you know that classic Star Wars shot where,
or Star Trek really where the ship gets hit
[04:00] and everyone sort of staggers and braces themselves
against walls.
[04:04] That’s all stuff that long term we are planning
on doing.
[04:09] Part of what we’re doing with the physicalised
EVA is some early stuff that will enable this
[04:15] combination of animation and procedural physical
reaction to an environment.
[04:20] So we’ll definitely do some of that and
the bigger ships also in terms of they have
[04:23] to do a hard turn then what would be probably
do even though they have their own gravity
[04:28] generators, is that maybe the gravity field
or whatever is slightly laggy for where the
[04:33] ship position is.
[04:34] So if you’re turning really fast so that
the gravity in stead of being straight down
[04:38] is there until it can move back there.
[04:41] You would have a little bit of this turning
effect.
[04:44] You see it in classic Star Wars where it’s
like, Empire Strikes Back “Take evasive
[04:50] action!”.
[04:51] The two, well actually three Star Destroyers
all do this [gestures with hands] you’ll
[04:54] see people tilt on one of their bridges.
[04:59] We’ll try to do a bit of that, I don’t
know if we’re going to do it to the point
[05:02] where you could generate that much force that
you would, that is being described in this
[05:09] question.
[05:10] The idea will be it’s damped it wouldn’t
necessarily be full on, it would be a little
[05:15] bit of it would bleed into the interior physics
stuff.
[05:18] Now if you turned all the gravity off inside
the ship, then yes you would be in zero G
[05:23] and then as things move around you’re not
attached to anything then we would have to
[05:29] probably, would have to see how to do that,
because generally you would still be in the
[05:35] interior grid physics.
[05:36] So we would have to iterate through non attached
entities and essentially keep them in their
[05:42] relative place within the overall ship.
[05:44] So basically they would stay in the world
frame reference while the ship itself would
[05:48] move around.
[05:50] We can definitely do that but that currently
would require a little extra code.
[05:54] So I would say longer term that potentially
will happen short term that’s not right
[06:01] on the immediate horizon for implementation.
[06:05] And if you had mag-boots that probably would
secure you to something then you wouldn’t
[06:09] move around.
[06:10] [6:17] Heavy Metal asks: A while ago, before
the baby PU, there was talk of a ‘Pirate
[06:15] Swarm’ much like Vanduul Swarm.
[06:17] I know in some way that is what we find at
the Com arrays in the PU but is there still
[06:23] a chance of getting that in Arena Commander?
[06:24] I would love to hone my skills and test weapons
on ships after other than Vanduul, and I would
[06:28] love to see the larger ships in solo play.
[06:31] So, Pirate Swarm essentially is what we got
in Crusader.
[06:35] So, we were sort of building . . at the time
when it was just Arena Commander, we want
[06:40] to change it around and have maybe some other
modes to fight some other enemies.
[06:44] In reality the Crusader map, which is the
mini PU map, which is really going to grow
[06:48] into the Stanton star system map, where we
sort of decided to put these different encounters
[06:53] whether it was with AI or you could find other
players to fight.
[06:57] And so that’s essentially where Pirate Swarm
went.
[07:00] So, in the short term we are not really planning
on doing a lot of work on Arena Commander,
[07:03] because we really want to get the base game
play and functionality into the proper large
[07:08] world map, the proper mini PU.
[07:11] Get the various rock, paper, scissors aspects,
the various different professions, the various
[07:17] different forces in opposition, and the various
mechanics that keep people aligned whether
[07:22] you’re good or bad or whatever.
[07:25] For us Arena Commander, now is a good place
to test some of your dogfighting skills.Longer
[07:31] term we will add to it.
[07:32] We will probably add some more challenge modes
and definitely do better matchmaking and make
[07:39] that more of a competitive practice area.
[07:43] Of course we’ll do the same thing with Star
Marine, but right now we really just sort
[07:46] of want to get everything into the mini PU
because that’s sort of our foundation for
[07:50] the overall game.
[07:52] Then things will trickle later on into features
for Arena Commander or Star Marine, which
[07:58] are really meant to be ultimately training
modes for you to train in certain aspects
[08:02] of the game.
[08:04] Potentially also to test your skills against
other players without having the same sort
[08:08] of risk you would have in the proper Persistent
Universe because it’s persistent.
[08:13] So if you lose things or die, you will lose
them, whereas in Arena Commander or Star Marine
[08:17] you won't.
[08:18] [8:24] Zilch asks: How will reconnaissance
work, aside from relaying information through
[08:22] chat?
[08:23] Will there be in-game methods for ships to
mark targets either physically or electronically?
[08:27] Will there be any value in sending ships or
players as operatives in advance of an attacking
[08:31] force?
[08:32] CR: So, absolutely, yes, there will be in-game
methods for marking ships.
[08:35] I think I talked a long time ago and mentioned
quite a few times about sort of the “person
[08:41] of interest”, and really “person of interest”,
“point of interest” kind of gameplay where
[08:48] you would sort of tag a ship or tag an individual
and you say “yes, I’m interested in them”.
[08:53] You could maybe say “Yes, I’m marking
this person for my friends to follow” or
[08:58] you are going to say “Yes, meet me at this
location” and tag this location and beam
[09:01] it to your friends.
[09:02] So, definitely having someone out there sort
of being sort of the eyes and relaying information
[09:07] to other players cooperatively would be a
big part of gameplay and I think, you know,
[09:13] it will fall very much in line of what I think
makes Star Citizen special, ‘cause I really
[09:17] sort of feel, and it’s kind of cool watching
you know, all the people streaming 2.1 and
[09:23] 2.2 and videos people have made where you
really, the –some of the coolest stuff is
[09:27] people working with each other to do things,
you know.
[09:30] Helping each other out, rescuing someone,
you know, working in unison to fly a bigger
[09:35] ship, and of course I mention this all the
time, but those are things that are very high
[09:39] on the list to make sure, you know, all the
full functionality is there for it ‘cause
[09:43] we’re still missing a bunch on the multi-crew
functionality and the seats, and all the rest
[09:46] of stuff, which is being worked on as I speak.
[09:48] But ,you know, the cooperative nature of the
gameplay is really important for us, and obviously
[09:54] reconnaissance, and calling out targets, and
all that would be part of it.
[09:57] [10:02] Darjanator asks: My question is about
scripted non-hostile NPC encounters.
[10:03] In most games these animations are done with
no regard to player position or actions, but
[10:07] you’ve said this will not be the case here.
[10:08] Can we expect NPCs to not just bump into us
if we get in their way during scripted animation?
[10:14] Will they use some other means to get around
us along their path or make us get our of
[10:18] their way (maybe based on their personality,
I.E try to squeeze past or ordering you to
[10:23] get the hell out of their way)?
[10:25] CR: That’s definitely something that is
big on the list, it’s actually kind of a
[10:29] core feature to Squadron 42 which will also
be used in the Persistent Universe, but in
[10:36] general what’s going to happen is the encounters,
characters moving around, it’s not really
[10:43] going to be just some canned animation that
plays.
[10:45] What will happen is, AI will have all the
different fragments and pieces of various
[10:50] things the characters can do and then it sorts
of systematically plays them based on situation,
[10:56] y’know, where you are with respect to the
character, it can also adjust it’s look
[11:01] procedurally or his or her look procedurally
on the NPC side.
[11:06] So if you get in the way then it’ll just
sort of shift into locomotion to avoid you
[11:12] there will also be co-operative animations
for people trying to squeeze past you, so
[11:16] we’re really going to try to bring it a
little more life-like.
[11:18] I think Uncharted, y’know the videos for
the new Uncharted 4 but, Uncharted does a
[11:24] really good job of this for some of the NPC
moving around with interactions.
[11:28] We definitely aiming to be there or better.
[11:32] [11:38] Corrin Avatan asks: In the recent
10 for the Chairman, there was mention of
[11:37] hacking a terminal to reduce wanted level.
[11:39] Given that in-universe, there is no FTL communication,
will there be instances where someone can
[11:43] commit a crime in one system, jump three systems
away, and the local police will scan them,
[11:48] but not realize they have a criminal, until
the next ‘Criminal Information’ update
[11:51] comes in via Herald or Reliant News Van?
[11:54] Yes.
[11:55] Absolutely, 100 percent.
[11:56] That is the design.
[11:57] So even though we recognise that players can
talk to each other on TeamSpeak or Discord
[12:02] or in channel chat, and that’s basically
instantaneous so it would be faster than light
[12:07] if you were talking to your buddy in another
system and we can’t block that because you
[12:11] can always just run an independent program,
we will make sure that all the game systems
[12:15] themselves propagate properly in the game.
[12:18] So in terms of your wanted status in the game
or when you are transferring funds or transferring
[12:22] goods they will all have to move via locations,
to different things, as you would inside the
[12:29] physical setup of our game.
[12:31] So yes you could commit a crime, jump out
of there and that may not have reached the
[12:35] system you’ve got to just yet.
[12:36] At some point it will, because the information
will travel through the UEE Advocacy network
[12:41] and you’ll become wanted in that system,
but you’ll maybe be able to “beat” the
[12:45] information.
[12:46] But that is also one of the reasons why an
info-runner has a job because on the less
[12:51] structured systems like … so a more regulated
police system has a lot of communication satellites
[12:58] and information relays that are used to broadcast
stuff around and then send the little drones
[13:04] through jump points to the other system which
then broadcasts stuff around but that’s
[13:08] in the structured infrastructure in the core
of the UEE system … the border ones you
[13:13] maybe won’t get that or it will only be
in certain areas or patchy and so things like
[13:18] info-runners will be the courier that comes
and passes information.
[13:25] So that’s a good reason: maybe you don’t
want the message to get somewhere.
[13:28] Maybe someone does.
[13:30] So there’s cool gameplay that comes from
that.
[13:32] And I think also I should mention that in
2.2 right now we already kind of have a little
[13:38] bit of this gameplay where you can adjust
your wanted level in Port Kareah and it adds
[13:45] a goal to be in Port Kareah.
[13:47] Also taking down or putting up the satellites
basically enables whether there is coverage
[13:52] in that area.
[13:53] So whether you commit a criminal act or not,
if the satellite’s down then you can do
[13:56] what you want, if it’s up and you shoot
someone that you shouldn’t shoot i.e. you
[14:00] shoot a lawful person, that isn’t wanted,
that doesn’t have a bounty on them, then
[14:07] you become wanted too.
[14:09] So that’s the very beginning fundamentals
of the mechanic that we’ll implement in
[14:14] the bigger system, that will have a lot more
details and nuance to it.
[14:18] So what we have right now in 2.2 is the first
iteration, which I think is cool because it
[14:22] provide some structure to the gameplay, but
obviously it’s a crude first implementation.
[14:27] So for instance we kick you when you are killed
at level five to be your big penalty from
[14:33] the server now that is not a long term plan
at all.
[14:36] Long term what will happen is when, depending
on side of the law you fall in, when you essentially
[14:44] get killed, say when you become an outlaw
you’ll probably respawn in an outlaw friendly
[14:49] area or planet or asteroid base or whatever.
[14:52] And at a certain wanted level when you get
killed you basically got captured and you’ll
[14:57] go to a prison.
[14:58] And then you’ll have to get out of the prison
by escaping or just serving your time or bribing
[15:04] someone to come out it.
[15:05] So we’ll make it more immersive and organic
to the world but short term we needed … because
[15:11] we don’t have any way to pay people for
money in 2.2 and we don’t really have any
[15:15] sort of … there’s no persistence so we
don’t really have penalties so we sort of
[15:19] use the penalty of either locking you in your
room for a little bit or kicking you from
[15:25] the server.
[15:26] But that is very short term.
[15:27] [15:33] PartyFruit asks: Will there be an
achievement feature in the near future (or
[15:33] at least in the final game)?
[15:34] If so, would they award the players with anything
(such as weapons, in-game money, decals)?
[15:38] CR: Alright well so, a couple of things.
[15:41] Yes long term it’s definitely going to be
in the game but my goal for achievements isn’t
[15:46] so much the standard like Xbox goals or the
Steam goals.
[15:50] It’s more the you get in-game mementos.
[15:53] So you know you visit a location and you got
the snow globe from there.
[15:57] All those kind of silly things when you fly
to different cities you bring back little
[16:02] mementos.
[16:03] That definitely would be an achievement feature
and you would unlock or get certain items
[16:07] for doing things.
[16:09] We have a simple thing right now, where you
kill a level five outlaw in the current 2.2
[16:19] build and you will get a laser rifle.
[16:21] Which is a short term kind of achievement
thing that you can get.
[16:25] Of course that’s going to become much more
sophisticated as things go on.
[16:28] But it will all be based on things that you
would get in the world and kind of holistic
[16:34] to the world if that makes sense, and not
be some thing on a scoreboard or not like
[16:38] a little trophy that you get.
[16:40] That’s the idea of the fish tank and all
those things you have in your hangar it’s
[16:44] to display your in-game achievements so to
speak.
[16:48] [16:53] Talinon asks: I really want to know
if there will be a place for people in Squadron
[16:53] 42 and who don’t want to be part of the
FPS but yet still want to be part of the game?
[16:59] Fortunate to tell you, Talinon, that Squadron
42 has ship combat and FPS and it’s all
[17:08] sort of blended, so you run around on foot,
you run around flying ships, you basically
[17:14] fly a Star Pilot so primarily you are going
to be flying missions.
[17:17] But there will be cases where you land or
you have to EVA to explore a ship, or you’ll
[17:22] get stuck on a base or an asteroid thing,
and you’ll have to fight your way out.
[17:26] So it’s really a full seamless blend or
running around on foot, flying ships, interacting
[17:31] with characters on the ship your based on
or on other locations.
[17:36] So I don't think there will be an option to
not participate in FPS but do the other things
[17:41] in SQ42, it’s kind of a holistic experience.
[17:43] I think it’s gonna be fun, it’s gonna
be good.
[17:45] We’re obviously not going to make it where
you need to to be the world’s best FPS player
[17:48] to get through, it’s just going to be a
fun adventure, and I think the fact that you
[17:53] go between, it’s all from your point of
view and you can do everything as you would
[17:58] almost in the real world, it’s going to
make it a much more immersive experience than
[18:02] any of the past Wing Commanders I’ve done.
[18:03] So, there you go, that’s my answer on that
one.
[18:08] [18:13] Conflict Viper asks: You’ve mentioned
before that veteran pilots may show their
[18:12] wear and tear with replacement limbs, has
there been any thought to allowing pilots
[18:16] to augment their bodies with replacement limbs
to allow for higher G endurance and less chance
[18:20] of a blackout during space combat?
[18:22] CR: Yes, we have discussed that.
[18:24] I mean, we are, you know, longer term going
to have replacement limbs and parts spare
[18:29] so you kind of have certain cyborg-y action
that’s going on.
[18:39] We have talked about potential to get a better
G suit that will let you have higher G tolerances.
[18:45] Potentially, if you have, you know, some augmented
body part.
[18:50] Perhaps that would help you too.
[18:51] So, long term, we have discussed that, and
probably will be something long term, but
[18:57] short term, No.
[18:58] That would definitely be part of character
customization in our overall long-term plan.
[19:04] [19:09] Apportioner asks: Will players be
able to participate in the UEE or any other
[19:11] faction’s elections?
[19:12] Can a player run for office in the UEE?
[19:15] CR: I guess we have that because we’re in
the process, in America anyway of nominating
[19:22] the various candidates for the next presidency
of the United States and hopefully our UEE
[19:29] elections will be less dramatic than the ones
happening here in the U.S.
[19:37] But this is early days for us on this.
[19:40] We definitely felt that being a citizen would
give you some rights, and one of the rights
[19:46] would be able to, vote or have some effect
on general things in the same way, I guess
[19:53] you do in the real world.
[19:55] Which is pretty not that much!
[19:58] So that is a longer term goal to have some
participation in that.
[20:03] Probably will be Game Mastered by us, because
we’re planning to besides just having the
[20:08] simulation of the universe we also hand push
it and guide it towards, ‘cause we have
[20:14] an overall story and timeline we have in our
minds for Star CItizen.
[20:18] So we’ll create events and elections and
seismic change events in the universe that
[20:24] will potentially affect players and AI.
[20:27] One of those could be elections.
[20:29] I don’t think we’ll in the short term
anyway, have a player run for the office in
[20:34] the United Empire of Earth but again long
term you never know.
[20:38] We’re pretty big on player agency and participation.
[20:43] A lot of the fun that I see happening in the
SC Alpha 2.1 and 2.2 is players doing stuff
[20:51] and creating content for other players and
we’re pretty big on that.
[20:55] That’s our whole sort of mission.
[20:56] Our world system is built up to react to what
players and AI is doing and based on that
[21:02] it generates other missions, so it’s sort
of a feedback loop.
[21:06] So getting players involved in other things
is good.
[21:10] So longer term potentially, you never know
I think they have a version of players involved
[21:17] in EvE in terms of running things as well.
[21:20] So I think as we said something we’re planning
long term but we are going to give you benefits
[21:27] for being a citizen to allow you to participate
or get certain things that you wouldn’t
[21:31] if you weren’t a citizen.
[21:32] And of potentially would be voting for this
person or that person and then depending on
[21:37] which one you voted for, as an AI character
it could have an impact on how the world unfolds
[21:43] in Star Citizen.
[21:44] So that’s kind of the fun element we’re
thinking that we really again player’s themselves
[21:50] doing things, changing, affecting the world
and the game or us as Game Masters reacting
[21:56] to that, keeping it fluid and dynamic should
be fun!
[22:00] Outro
[22:01] There’s the ten questions for this episode
of this 10 for the Chairman, this is the last
[22:04] episode I will be doing for a few weeks.
[22:06] I’m actually already in the UK now, this
is recorded in the past before I left but
[22:14] I am now in a much colder and rainier place
than Los Angeles.
[22:20] I will restart it as soon as I am back in
LA, back and forth with my schedule, hope
[22:25] the questions that I answered were informative
for you guys and my answers were good.
[22:32] Thank you to all the subscribers for backing,
first of all allowing us to do this enhanced
[22:37] community content, and all the backers in
general for backing the game and allowing
[22:41] us to make a game of the ambition and scope
that we’re doing.
[22:44] A lot of these questions are not normally
questions that most games would ever be able
[22:48] to say, “Yes, we’ll do” and one of the
reasons why we say, “Yes, we’re going
[22:52] to do it” maybe not always doing it tomorrow
but it’s on the plan is because of the support
[22:57] you guys have done.
[22:58] You’re enabling us to build a game of the
scope and scale no one would normally in their
[23:03] right mind take on but I think it’s going
to be awesome when it’s all said and done.
[23:08] Anyways, it’s been nice talking to you guys
and I will talk to you in a few weeks time.
[23:22] Take care, bye.

# Star Citizen: Around the Verse 3.15 - UK

**Video:** https://www.youtube.com/watch?v=bmv6iS5tFeA
**Date:** 2016-12-01
**Duration:** 35:23

## Transcript

[00:09] Closed Captioning provided by Relay.sc
[00:13] Sandi Gardiner (SG): Hey everyone and welcome
to Around the Verse, our regular in depth
[00:19] look behind the scenes of Star Citizen.
[00:21] I’m your host Sandi Gardiner and joining
me today is Technical Director, Sean Tracy.
[00:26] Thanks for joining me Sean.
[00:27] Sean Tracy (ST) Of course, happy to step in
while Chris is away visiting Foundry 42.
[00:30] SG: Yes he is and this past week saw the Intergalactic
Aerospace Expo draw to a close.
[00:36] It was great being able to show those clips
from Galactic Tour.
[00:40] What started off a just a fun idea really
grew into something special thanks to the
[00:43] team and their hard work.
[00:44] ST: Yeah it was a really tight schedule, but
it was impressive to see what they were able
[00:49] to keep tweaking as the week went on and on.
[00:51] Even though it was one of our really older
facial rigs, they were able to polish it up
[00:55] a bit more with each video that we released.
[00:57] SG: Very cool, and the other big announcement
this week is that the 2.6 Alpha build has
[01:03] officially gone out ot the Evocati, Yay!
[01:05] [Jazz hands]
[01:06] SG: Jazz hands.
[01:08] ST: Yeah, In addition to testing Star Marine
and new ships like the Herald, the 85X and
[01:12] the Caterpillar, they’re also going to be
helping test the web version of Spectrum.
[01:16] There’s a lot of kinks to work out still,
but so far they’ve already done a lot to
[01:20] help us find and tackle bugs.
[01:22] SG: And we will keep on patching to the Evocati
until it's stable enough to roll out to the
[01:27] PTU and then eventually live to you all.
[01:30] To keep track of the latest updates, make
sure to check out the 2.6 production schedule
[01:35] on the website.
[01:36] ST: To find out more about some of the tech
going into 2.6, lets go now to the U.K. for
[01:41] the Studio Update.
[01:42] Studio Update
Mici Oliver (MO): Welcome back to the UK,
[01:45] I’m Mici Oliver, QA Tester, here to give
you this week’s studio update.
[01:49] Now over to Ali and Luke to talk about asteroids.
[01:51] Alistair Brown (AB): Asteroids in our game
were previously all hand-placed, painstaking
[01:57] for the designers and artists who positioned
them and obviously had a practical limit of
[02:01] how many we could actually place by manual
process so with the new request from design
[02:07] was so they could place hundreds or even millions
of asteroids so the new system was designed
[02:12] and built to cope with any scale that we can
come up with.
[02:16] So, each asteroid field, will only have- the
clan has a few basic properties of how that
[02:22] asteroid field should look so what type of
asteroids it should be, what type of density,
[02:26] what colour - some fairly basic information
and from that it is able to seed where every
[02:31] single asteroid in the entire asteroid belt
will be from that small bit of information
[02:36] and the benefit of that is that every client
doesn’t really need to communicate with
[02:41] the server and they can on their own decide
what they need to render and what they need
[02:45] to simulate per frame.
[02:46] This is from our design document on how we
design the asteroids and how we want them
[02:50] to work for the designers so we produce a
texture that has four different channels to
[02:56] control the four different main properties
of the asteroid field - or the four properties
[03:00] that they want to change per asteroid field.
[03:04] So to achieve something like Saturn’s rings
like this we would have textures like this
[03:09] where we would define the height of it.
[03:11] The offset is a bit- the offset is like how-
if it was going to wiggle up and down - which
[03:17] for Saturn’s rings are perfectly flat so
it is a flat colour.
[03:21] Variation is to handle different colours,
different materials, made of different composites
[03:25] of metals, whatever we might find and there
is density control away.
[03:29] And if we go to another sample - this is from
Oblivion - and they have this destroyed moon
[03:33] which is a bit like our broken moon example
- we might have something like this where
[03:38] we have a lot more interesting variations
- we have a pattern in the height, it is going
[03:42] to have some verticality in it from this offset,
it is going to have some variation and the
[03:47] density has a nice feather off on it and it
should be really easy for the artists or the
[03:52] designers to quickly go through and make asteroid
fields or changes to them which they then
[03:57] have to spend an eternity coming up with.
[04:00] Luke Pressley (LP): What I want to show you
today is how we’re going to use the new
[04:04] asteroid tech in practice - first what I want
to do is show you how we used to have to create
[04:09] asteroid fields because you’ll see this
new tech just makes it so much easier and
[04:15] look so much better.
[04:16] So this here as you probably recognize is
Yela, it’s the moon with the asteroid ring
[04:23] about it that we put in our first iteration,
2.0.
[04:28] This here is the current density that you’ll
see in 2.5.
[04:33] That’s the old tech, turn that off, here
is the new.
[04:38] As you can see, generating- the way it generates
that is we have say, about nine or ten asteroids
[04:45] that are unique asteroid models in there and
it goes through and it makes them one at a
[04:50] time, layers them on top of each other, as
you can see there.
[04:54] The density, the depth, just the sheer amount
- as you can see these things are rotating
[05:01] very subtly - obviously the point is very
subtle, but I can show you this to the extreme
[05:09] just very quickly.
[05:10] There you go - what’s going to happen for
smaller ones will rotate much faster than
[05:17] the larger ones to the point where the largest
don’t rotate at all because we’ll be putting
[05:22] bases on them, these kind of things.
[05:26] For instance, in Yela there are these locations,
here, that are full of pirates - there is
[05:34] gameplay involved, we’ve actually hand crafted
those things - what we’ve put around here
[05:38] is an exclusion zone which prevents all the
other asteroids from spawning in there - the
[05:44] dynamic asteroids.
[05:45] So as you can see, all of this combined, we’re
going to end up with a really much more cinematic
[05:52] asteroid experience - you can imagine flying
through here - it’s going to be really exciting
[05:59] and we are finally getting the kind of density
and movement that we’ve been aiming for.
[06:04] AB: There’s literally no limit on the scale
- we can have them millions and millions of
[06:08] miles wide, the asteroid fields, and we can
have them moving as well and you’ll never
[06:12] find the same pattern twice - every single
asteroid is positioned uniquely.
[06:15] I think that’s quite exciting for the gameplay
that you literally - every single place you
[06:19] go in this asteroid field will be unique.
[06:20] MO: Thanks guys, this will give us richer,
more detailed environments and really help
[06:25] the development process when designing new
systems.
[06:28] Now over to Steve who will guide us through
the new camera options.
[06:31] Steve Turberfield (ST): Last time around,
we did a bit of a brief overview of the camera
[06:35] and what tools our community are going to
have to play with and today I’m just going
[06:38] to go a bit more in-depth with that - show
you what exactly it is you’re going to be
[06:42] able to play with and give you a bit of a
overview of how the spectator mode is going
[06:46] to work as well.
[06:47] Going forward in 2.6, all ships and vehicles
will have the default first person cameras
[06:53] which you’re familiar with - we have the
third person flight, which we commonly call
[06:59] a chase camera.
[07:00] We have our orbit cam, which as the name suggests
allows you to orbit around the ship from different
[07:05] angles, and then the passenger orbit so you
can basically focus in on your pilot and manipulate
[07:12] the camera around him.
[07:13] So just to give you a bit of a rundown of
how the controls work - we’ve decided to
[07:18] build more upon what our players already know
with the little camera control that they’ve
[07:23] had previously - so we’ve always keybound
everything to the F4 key so you just cycle
[07:28] through the views by pressing F4 and they
just go in order - so we’ve built in that
[07:32] by using F4 as what we call a modifier.
[07:35] So basically in order to operate the camera,
you just hold down F4 and plus and minus will
[07:41] change the lens size to a preset one - so
you can to an angle like that where it zooms
[07:46] in close and flattens out the view or you
can pull right back and like I say it’s
[07:51] changing your depth of field.
[07:53] With all the camera features I’m about to
show you, we have a nice reset key - simply
[07:57] because if you wanted to change things on
the fly or you’ve done something you’re
[07:59] not happy with and you want to go back to
the start - you simply hold F4, press the
[08:04] star key and that’ll reset exactly where
you were previously.
[08:07] So that’s your lens sizes.
[08:10] The other new control I want to show you is
the target offset and that basically just
[08:15] allows you to move the position the camera’s
pointing at.
[08:18] Rather than focusing bang on the centre of
the ship, if you want to look a bit to the
[08:21] side, a bit above, a bit below you can do
that as well.
[08:24] So just like before, hold F4 and to manipulate
the offset, use your arrow keys primarily.
[08:31] So left arrow will move you left in the x-axis,
right in the x-axis, forward and back in y
[08:38] is your up and down arrows and if I just reset
that I can just show you F4 page up, strafe
[08:45] up, page down, will strafe down in the z-axis
as well.
[08:49] So now if I change to the orbit camera which
I mentioned before, what we’ve basically
[08:55] done is very, very similar to what our players
have had before but by pressing Z as a toggle,
[09:00] it toggles on the orbit controls - this will
allow you to move around the ship - you can
[09:06] still, in this mode, change your offsets and
lens sizes and then you can reset them at
[09:11] the touch of a button.
[09:13] All of the controls that are described before,
such as lens sizes changes and target offset
[09:17] all that is included but we’ve also gone
the extra mile and added a few additional
[09:21] features in here which we think our community
will make a rich use of.
[09:25] So, just to give you a bit of an overview,
this is basically the screen that you see
[09:29] when you die - and if you are anything like
me, this is going to happen regularly - so
[09:34] when you are in a team deathmatch mode, when
you die, you’ll automatically start viewing
[09:40] your teammates, so the camera will lock onto
those and you can cycle through any teammates
[09:45] who are still alive during the game using
the mouse buttons.
[09:50] From here, by default, the orbit controls
are unlocked - because you are not controlling
[09:54] the player, we can get those ready straight
away so you can manipulate the orbit as they
[09:58] are running around the level and it will track
the player as they go.
[10:00] Probably what I think is the most exciting
thing for our community is we’ve also included
[10:04] a freecam function - because our orbit controls
are live all the time in spectator mode, you
[10:09] can use the Z key instead to detach the camera
from the player - this enables you to basically
[10:14] move the camera wherever you want in the level.
[10:17] In addition to this, you can make use of the
save/load system.
[10:20] So if you are making cinematics, you can cut
to different cameras on the fly that you’ve
[10:25] set up in advance.
[10:26] So I can just give you an example of that
now - I like that shot now, I can save that
[10:30] to slot one - so holding F4 and holding the
one key on the number pad.
[10:35] I like this one as well - just getting all
the different angles that you can’t normally
[10:38] reach while you are playing the game - so
a real high up angle there, save that.
[10:45] And then in addition to this, we’ll do a
nice close-up on the player and then let’s
[10:49] go ahead and change the lens size so we can
look quite close and see all that detail - I’ll
[10:54] save that to slot three.
[10:56] So, while the game is going on, you can literally
just change this on the fly - that camera
[11:01] one that I saved is there, back to camera
three, over to camera two for that high angle
[11:05] shot - the tools have been designed for not
just use in gameplay, so you will be able
[11:10] to create new views and bespoke camera angles
for while you are actually playing the game
[11:15] but we’ve also given this to people who
want to create their own content, their own
[11:19] cinematics, their own screenshots and all
that manner of thing that people are doing
[11:23] but we’re just giving them the tools to
make it easier and get better results at the
[11:27] end of the day as well.
[11:28] MO: That’s awesome Steve, that’s something
that really helped me in my character testing
[11:31] and I can’t wait to see all the screenshots
and the videos that you guys post to show
[11:36] off our beautiful game.
[11:37] I’m a big fan of these updates because they
are going to make my job a lot easier and
[11:41] that’s all for our studio update, so back
over to LA.
[11:44] Back to the Studio
ST: Thanks Mici, that asteroid tech is really
[11:48] going to help the designers a lot, when tech
like this comes online, it can drastically
[11:52] reduce how long it takes to implement things
which will allow for new content to be added
[11:56] faster in the future - I’m really excited
to see what the artists and designers will
[12:00] come up with for players to explore.
[12:02] SG: As cool as the asteroids were, I’m really
excited about the new camera system - our
[12:07] community was already creating some amazing
videos and I can’t wait on them to get their
[12:11] hands on these new tools.
[12:13] Speaking of community, let’s go now to Tyler
for the latest.
[12:17] Community Update w/Tyler Witkin
Hey everyone, Tyler Witkin, Community Manager
[12:24] in the Austin Texas studio, here to bring
you this week’s community update.
[12:28] The Intergalactic Aerospace Expo has concluded
and we hoped you enjoyed the Galactic Tour
[12:32] videos as much as we did making them.
[12:34] In other news, throughout the month of December
we’re going to be making the MISC Freelancer
[12:38] flyable to all subscribers.
[12:40] So if you’re a subscriber and you’ve been
wanting to fly the Freelancer, now is your
[12:43] chance.
[12:44] Now it’s time for this week’s MVP award.
[12:46] A huge congratulations to the Noobifer for
his detailed efforts in creating a video called
[12:51] “The Birth of a Starship”.
[12:53] Now this video outlines the ship development
pipeline here at CIG and has a lot of interesting
[12:57] tidbits and I encourage you to check it out
for yourself over at our community hub.
[13:02] Lastly, the week would not be complete without
Reverse the Verse, so make sure to tune in
[13:05] live tomorrow at 8 AM Pacific Standard Time
at twitch.tv/cigcommunity where we’re going
[13:10] to be talking about everything you saw on
today’s episode.
[13:13] Thanks for all the support everyone and we’ll
see you in the ‘verse.
[13:16] Back to studio
[13:17] SG: Noobifer that was a really great walkthrough.
[13:20] A really great explanation of all the massively
complex elements that go into building a ship.
[13:24] ST: Yeah it was really solid, although to
be honest this week’s a little light on
[13:28] weird gifs of me.
[13:30] SG: Yeah we can maybe fix that, sorry Sean,
maybe they need fresh some material.
[13:34] ST: Good call.
[13:35] Make some extreme expression as fodder.
[13:38] [Extreme facial expressions]
[13:39] SG: For our next Behind the Scenes feature,
the audio team walks us through all the work
[13:44] they’ve been doing to get Star Marine ready
to play.
[13:46] 13:50 Behind the Scenes: The Sound of Star
Marine
[13:49] Ross Tregenza (RT): Overall Sam Hall, the
coder, and I we spent a lot of time, first
[13:54] of all unifying the music across the game
because Star Citizen is so huge and there
[13:58] are so many different aspects of it that we
were working very hard in these different
[14:03] areas but it was all getting very compartmentalised.
[14:05] We’ve managed to bring it back into this
one whole, global system.
[14:10] And that’s given us a really nice foundation
for Star Marine now.
[14:13] We have this great clarity.
[14:14] We know how to build these systems and get
the best out of them.
[14:17] While we have the music logic system for the
PU and for Squadron 42, for Star Marine the
[14:26] conditions that you’re involved in and way
the game plays out is a little more set which
[14:32] is a luxury we don’t have when you have
the more open world situation where people
[14:36] could be doing anything anywhere.
[14:38] So we’re able to be a little bit more authored
and bespoke in the flow of it which is nice.
[14:44] So we … we obviously have the game rules
for the different Star Marine game modes and
[14:48] that gives us the foundation we work from.
[14:51] So we’ve got a nice cinematic flow that
we’ve built that picks up pace as the game
[14:58] progresses.
[14:59] Here we have six layers of music.
[15:02] This is the main, sort of, bed of the music
during the game mode.
[15:06] From the start of the match this is all actually
active but it will be completely quiet because
[15:11] the two parameters that feed into this at
this point are both on zero.
[15:15] The two parameters we have are control and
time limit.
[15:19] So the first one is a parameter that feeds
into the main body of the music and as that
[15:24] number rises up, as you get more and more
successful in the game, the music will slowly
[15:29] start fading in and we use a lot of low-pass
high-pass filters, volume effects, etc., etc.,
[15:35] so that these three stages of music are quite
subtle as they start edging in.
[15:39] So I’ll take it up to about 25% … and
here it comes.
[15:44] As you are playing game, you’re doing well,
you’ll start to hear this little gentle
[15:47] bubbling of electronic music.
[15:49] And if we take it up to just over 50% … you
can really hear it starting to pick up now.
[15:56] And you’re about 50% successful at this
point, you start to feel the energy - it’s
[16:01] getting exciting.
[16:02] We take it up again.
[16:04] See these three layers of music are starting
to build up now.
[16:06] Take it up to here.
[16:10] At this point it’s really starting to pick
up its pace.
[16:12] And we can take that all the way up to 100%.
[16:19] And now it’s big, full spectrum music.
[16:21] You get a real sense of excitement.
[16:40] What we really wanted to do was make sure
it wasn’t too … too jarring and too obviously
[16:44] tied into … events in the game.
[16:49] It is, but we want to make that a slow evolving
sound.
[16:54] As opposed to “oh, you’ve done X, so now
Y has happened”.
[16:59] That’s a really old, old style of game mechanic
that we avoiding.
[17:03] So while information is being fed into the
music system it’s rising very slowly and
[17:09] we have a lock on the speed it is allowed
to progress through its various stages.
[17:14] So you don’t get this bam, bam, bam, bam
of increased steps of intensity.
[17:17] You get this cinematic flow upwards that gets
more and more intense.
[17:22] And there are two different elements at play
as well.
[17:25] There’s the gameplay element that’s the
main factor of how the music progresses and
[17:31] gets more dramatic.
[17:32] But there’s also a time element that’s
independent from the other one.
[17:37] And although it works as one piece of music,
the time element controls the percussion and
[17:42] that will start coming in as time runs out
regardless of where we are in that overall
[17:48] intensity layer.
[17:49] Nicola Grelck (NG): So I’m Associate Producer
for the Audio team.
[17:51] My role is to communicate with all the other
studios and with all the other producers all
[17:55] over the world.
[17:56] So in Germany and LA and Austin.
[17:58] I have to make sure my team gets the right
information and right on time so we can actually
[18:02] work on the highest priority first to make
sure everything is just good in the game and
[18:06] has a proper sound and proper music and dialogue.
[18:08] I’m really looking forward to see sound
went into the game because it is … we have
[18:13] so many features that are coming in from the
audio side as well.
[18:15] We have the pressurising and depressurising
states and when you’re outside in a depressurised
[18:20] area everything sounds muffled and you know
actually that you are outside.
[18:25] And all sounds sound like this.
[18:26] The other way round, when you are inside and
pressurised everything is … it’s just
[18:30] normal but the people outside actually have
the muffled sound so you know there are some
[18:34] people outside and not that loud.
[18:36] We also have the Music Logic System which
is reacting to the state in the game where
[18:40] you are.
[18:41] So am I losing?
[18:42] Am I winning?
[18:43] Is it the beginning of the match?
[18:44] Is it the end of the match?
[18:45] So it’s well reactive and gives you a lot
of audio feedback of where you are.
[18:49] And on top of that we have the dialog edits.
[18:52] So we have the Announcer - which is a female
announcer I’m very proud of - because she’s
[18:57] giving the rules of the game.
[18:58] So she explains the game mode, she’s telling
you when the match started and when the match
[19:01] ends - so she’s actually rules the game.
[19:04] But additionally to that we have the Leaders
from the Marines side and the Outlaws side
[19:08] that is a bit like the music logic system
so it gives you feedback depending on where
[19:13] you are in the game so when you have to hack
more control points in the Control game mode
[19:18] for example, it gives you the advice and tells
you that you have to do that.
[19:21] I’m really looking forward to Star Marine.
[19:22] Barney Oram (BO): When I was thinking about
creating the atmospheric sounds, one thing
[19:27] that I thought about a lot was whether it
should be more subtle or more in your face
[19:33] and very intense and dense.
[19:38] Because obviously the focus is in on the first
person weaponry - the shooting and the action
[19:44] and that kind of thing and the other players
- but I decided not to be too subtle with
[19:51] the ambients and try to push more of a character
of the space into the mix of the audio.
[19:58] So this is part of the engineering area of
Echo Eleven.
[20:03] It’s quite an industrial, dark sounding
space.
[20:07] There’s a lot of steam and rattles and groans
of metal contracting and stuff like that.
[20:17] It’s quite ominous - it’s supposed to
be quite dense and quite heavy I think.
[20:25] All of these little spots are placed audio
that are emitting a … one specific sound.
[20:35] And … they all work together to build up
a sound of the level - a sound of the room
[20:44] - in one area.
[20:47] This is some pipey type things.
[20:51] And you can hear … hopefully you can hear
the water and stuff like that moving through
[20:57] the pipes and … there’s steam and things
that that emit from the floor and occasionally
[21:06] you’ll get bursts of steam and air and stuff
like that, both like that in the audio and
[21:12] visually.
[21:13] There’s a little bit here that I’m quite
proud of.
[21:18] It’s a vent that you can crawl through and
get into another area but I spent quite a
[21:24] lot of time trying to make it sound very encased
and isolated and small.
[21:32] So it’s got things like … it’s got the
same kind of metal rattles but with very tight
[21:40] reverb on them so it feels like you’re really
in this tiny little crawling space.
[21:44] Another thing we are looking at doing in this
first iteration of Star Marine is creating
[21:50] sounds that react in their environment to
weaponry.
[21:54] So if you’re in a particularly junky room
- and especially in some of the maps we’re
[21:59] putting out for Star Marine soon - it’s
got a lot of bits and bobs and junk and stuff
[22:06] like that.
[22:07] So when you shoot your gun in this room it
will rattle and resonate.
[22:12] And some of the big metal objects - like pipes
and stuff like that as well - if you get close
[22:16] to them and shoot you’ll hear that resonance
- which is really cool and really … I think
[22:23] it’s very engaging - it really immerses
you in the experience of being in that world.
[22:29] Firing your guns and everything reacting around
it.
[22:32] Back in the Studio
[22:33] ST: The Dynamic Music System is another example
of a new tool that really let our creative
[22:37] team shine.
[22:39] To be able to have the game adjust the music
on the fly depending on what’s going on
[22:42] is going to add a lot of dimension to the
game experience.
[22:45] SG: We go now from gunfights to dogfights
for all the work that has gone into balancing
[22:50] the ships for 2.6
[22:51] Behind the Scenes: Flight Balance
[22:54] John Crewe (JC): So, we're going to talk about
changes to the flight balance today.
[22:59] I try to avoid saying flight model, ‘cause
the flight model fundamentally is still the
[23:04] same as it was.
[23:05] It's still the same, simulated system that
John Pritchett and Chris really want in there.
[23:10] This is more iteration on how the values we
put in and get out have changed, that changed
[23:17] the way you fly not, the fundamentals of flying.
[23:20] We've had some feedback from the community
on what they've heard about the changes, what
[23:24] some of the Evocati have tested.
[23:26] We had some ideas that what we thought people
would like, what they wouldn't like, so we're
[23:30] looking to do some more changes and the community
feedback just sort of solidified that.
[23:35] So we're going to talk about what's changed
from a month ago when you were talking …
[23:39] Andy Nicholson (AN): Yeah …
[23:40] JC: ... last time on Around the Verse.
[23:41] AN: The first, the first thing we were doing,
obviously everyone will know about, is the
[23:45] SCM speed change.
[23:47] Where we kind of halved those speeds from
what they were and try and increase the closeness
[23:56] of combat.
[23:57] Make it feel a bit more engaging in that sense.
[24:00] And that was, that just had to be addressed
in some way.
[24:03] And that I guess leads us to demonstrate how
cruise is no more, and how we've adapted afterburner
[24:10] to, to fill that gap to reach those speeds.
[24:14] Here we go.
[24:15] [Shows in-game footage] This is me now using
afterburner.
[24:18] And as you can see, I'm hitting cruise speeds
here, and I'm just holding the shift key to
[24:25] get there.
[24:26] Then when I release, the current plan is to,
once you afterburner you will stay at the
[24:33] velocity you've hit once you release the key,
and you'll stay in what we're terming like
[24:39] an afterburner active or afterburner primed
mode.
[24:42] Where you will continue at this velocity your
afterburner or hydrogen fuel will start creeping
[24:49] down slowly, but you've used a lot of it to
burn up to this velocity in the first place
[24:54] and gone out of bounds.
[24:55] JC: Once we have reduced the SCM speeds the
afterburn speeds get ... push you back up
[25:01] there, but the fuel consumption has had a
complete overhaul, so you can maintain those
[25:06] faster speeds for longer.
[25:07] AN: You'll be able to maintain it at that,
at that velocity and use less fuel pretty
[25:13] much as we show here, but there will be a
higher burn cost for getting up to that velocity
[25:18] from a point after that will be the penalty
of using afterburner quickly.
[25:23] You have to wait a little bit, but if you're
using it to get over great distances you're
[25:27] burning it fast, but then truck on as you
are consuming very little.
[25:31] But it's, it's those moments where you have
to quickly engage it in a combat situation
[25:36] that might cost you in terms of fuel use.
[25:39] If people are familiar with how boost works,
it's essentially shortening acceleration times
[25:45] on all of your directional vectors, so that
you can maneuver a lot faster and that's what
[25:51] boost has been used to.
[25:53] If you're sliding off course you hit the boost
key, and you get back on course much quick
[25:57] than you would, but then at the cost of the
fuel, so you'll use a penalty to that.
[26:02] Once you trigger the afterburner you become
a lot less maneuverable much like you do in
[26:06] cruise as I'm demonstrating here.
[26:07] [Shows in-game footage] This is me at full
afterburn.
[26:09] I've got the restricted maneuvering.
[26:14] This is entirely based on where your throttle
is once you enter the mode.
[26:19] So, the lower the throttle is the more maneuverable
you are whilst afterburning.
[26:23] Suppose you try to change your course quickly.
[26:25] You decouple.
[26:26] You spin round.
[26:27] You hit afterburner to get those main engines
to change direction as quickly as possible,
[26:31] as you can see by that.
[26:32] If you want to afterburner into six you just
press shift and hold it, and that's … that's
[26:39] all you need to do.
[26:40] It's no tap and hold anymore.
[26:41] JC: It's the same key that it was …
[26:43] AN: Yeah …
[26:44] JC: … on other input devices like pad, HOTAS
…
[26:45] AN: … We've just, we've just moved boost
away ...
[26:47] JC: Yeah.
[26:48] AN: … from that key.
[26:49] Yeah so, so boost now being on X; it means
you can... afterburner and boost at the same
[26:55] time, which opens up another level of complexity
to the game-play.
[27:00] JC: Using the phrase turbo like we did before,
it overpowers, over-thrusts all your secondary
[27:07] thrusters.
[27:08] I think is the correct term for it.
[27:09] AN: Yeah.
[27:10] JC: So that's all your maneuvering thrusters,
your retro-thrusters, not your main thrusters.
[27:13] So, it gives you increased thrust output to
all of those ones.
[27:18] So, when you're boosting you can arrest your
slides quicker.
[27:21] You can stop quicker.
[27:23] So, you can combine that now with afterburner
to do a bit of both or use it independently.
[27:30] So, afterburn in.
[27:32] Let go of the afterburner.
[27:33] Hit boost.
[27:34] Do a tight turn.
[27:35] Something that's going to be really useful
for racing.
[27:38] So, racing.
[27:40] Everyone was super worried that SCM speeds
were cut in half.
[27:45] They thought it was going to be super slow,
and it's not, because you've got all these
[27:49] new ways of boosting.
[27:50] So for example as Andy tries to fly, whilst
I'm talking him through it, you can use the
[27:57] afterburn down the straighter sections, and
obviously you can modulate that with your
[28:02] throttle to sort of decide how much afterburn
speed you want.
[28:07] He can absolutely bomber down the straights
and then back off, hit boost, put all of the
[28:13] power into his maneuvering and retro-thrusters
to do tight turns.
[28:16] We’ve been doing a lot of testing in this
with QA and the designers here, and we're
[28:21] getting pretty, pretty good times with, by
no means fantastic races, but we're …
[28:29] AN: [laughs]
JC: We’re getting some pretty comparative
[28:31] times too, some of the fastest ever ones that
have been set on the leaderboards.
[28:36] I’m sure that in the hands of the backers
we’re going to have some pretty good new
[28:41] records.
[28:42] AN: This really creates this balance of afterburn
and boost at the same time.
[28:50] You’re switching between one, the other,
or both at the same time, try and get the
[28:55] fastest laps.
[28:57] When it comes to a straight line I’m afterburning,
I’m trying line my ship up as straight as
[29:03] possible, hit the afterburner for the main
engine boost, and speed increase.
[29:08] We’re gonna see it restricts your maneuverability
as well while your afterburning at full throttle,
[29:12] so you have to be careful of that.
[29:15] JC: That’s another thing that’s changed,
a lot of racing at the moment is simply throttle
[29:20] to 100% and away you go.
[29:24] With this, actually managing your throttle
can give some quite big improvements to it.
[29:32] The M50 handles quite differently to the 350R
and not just a case of linear acceleration
[29:40] or turning speed now.
[29:42] A lot of the ships have favorable axies so
they can turn better when they’re angled
[29:47] one way versus another.
[29:49] How you do really fast lap in the m50 is not
going to be how do that fast lap in a 350R.
[29:54] You’re going to have to learn how your ship
works, what’s the strongest axis of thrust
[29:58] on your ships, and customise that.
[30:01] AN: I think it’s a lot of fun now with these
changes, especially when you hit the afterburn,
[30:06] it locks you into a straight line in the wall.
[30:15] Good fun.
[30:16] JC: It also changes dogfighting as well.
[30:19] Those SCM speeds have brought in the combat
massively.
[30:24] Another thing we haven’t really talked about
is all the weapons have had a complete rebalance
[30:27] as well.
[30:28] We’ve gone and actually ground up, across
the board, all the ships have had their turning
[30:32] changed, all the weapons have had their tuning
changed, the shields have had their tuning
[30:35] changed, the health points, the ships have
had their values changed.
[30:40] It’s really not a clean slate because we’ve
had for a lot of the ships we knew where we
[30:47] want them to be and they were getting there,
but it was sort of piecemeal.
[30:51] Every now and then we’d tweak one and we’re
like “Oh, that’s fine”, but it was out
[30:55] of whack with the others.
[30:56] Now they’ve all had same parts together
so it’s more comparative of the game as
[31:02] a whole where everything’s gonna sit.
[31:04] We’ll talk a bit how these changes affect
combat.
[31:08] We’re in Dying Star in Vanduul Swarm now
in a Sabre Comet, so Andy’s using the new
[31:14] Afterburn to really close the distance quickly.
[31:17] Bit too quickly.
[31:18] Ah, he’s done it.
[31:20] Then you use presumably the boost there to
stop yourself.
[31:24] Get right on the tail of this Scythe.
[31:26] And then hopefully do some damage.
[31:29] As you can see everything sort of much closer,
in your face, looks much more dramatic than
[31:41] it was or is in 2.5 where everything always
stay far away, everyone’s flying really
[31:47] fast and that’s one of the things we really
wanted to tackle with this to get combat in
[31:52] close, in your face.
[31:54] AN: You still got the advanced skill of a
pilot can use afterburner to their advantage.
[32:00] They still have it, as much as fuel as they’ve
got.
[32:03] They use it to their advantage.
[32:05] It’s still combat at high speed, if they’re
good enough to do it around tight spaces and
[32:11] around these asteroid belts for example.
[32:14] JC: Those who want to push themselves, those
who want to push themselves with advanced
[32:17] tactics, skills, and mechanics can still do
that and they’ve got new challenges to learn.
[32:21] We’ve also got the missile camera as well
which is in there.
[32:24] AN: Oh yeah, let’s do that.
[32:28] Alright.
[32:29] We’ve got a victim.
[32:31] Goal.
[32:32] JC: Works-
[32:33] AN: Still going now.
[32:35] JC: Yes.
[32:36] Still going.
[32:37] Works really nicely with some of the bigger
torpedos.
[32:40] That we have in the game, like on the Retaliator.
[32:44] AN: Yeah.
[32:45] JC: Seeing these torpedos go for ten kilometers
into something.
[32:48] So, that’s the new flight model that we’re
working on.
[32:52] Still lots of iterations to go.
[32:55] Got a lot of some of the UI elements to help
improve there.
[32:59] Hopefully that clears up some concerns that
people had.
[33:03] Makes people happy.
[33:04] That’s all from us!
[33:06] AN: Thanks.
[33:07] JC: Bye.
[33:08] Outro
[33:09] SG: Missile cams are pretty cool.
[33:10] ST: Yeah
[33:11] SG: It’s a great way to see explosions up
close and who doesn’t like explosions.
[33:14] ST: I know there’s been some concern with
Cruise Mode going away, but I think once backers
[33:20] get a chance to test the new adjustments for
themselves, they’ll see that all of these
[33:24] changes, we’re giving them a lot more options.
[33:27] With the weapon and component balancing along
with afterburn and boost working in conjunction,
[33:31] it can provide players with a lot more flexibility
while flying and finding.
[33:35] SG: Very cool, and I wonder what the new race
lap time will be.
[33:38] ST: Yeah it’s probably going to be way better
than something I can do, but of course it’s
[33:42] not only about the new times, now that there’s
going to be all those new ships to try out
[33:46] too.
[33:47] SG: True, we will have to see how the Herald
and the 85X do against the old favourites,
[33:51] but speaking of crossing the finish line.
[33:53] ST: That’s all we have for todays show.
[33:56] We’d like to thank our subscribers who help
us produce extra content like this and Bugsmashers
[34:01] and Loremaker’s and all our Behind the Scenes
shows.
[34:03] SG: Yes we do and a special thanks to all
of our backers new and old who have made Star
[34:08] Citizen possible and we could not do this
without all of your support.
[34:12] ST: To find out more about some of the features
we highlighted, tune in tomorrow at 8:00am
[34:16] Pacific time, oh…
[34:18] SG: For Reverse the Verse with Nick Elms in
the U.K.
[34:21] ST: in the U.K.
[34:22] Thanks Sandi.
[34:23] SG: And until then, we will see you.
[34:24] ST/SG: Around the Verse.
[34:27] ST: Oh you do this?
[34:29] Around the Verse
[34:31] [Waves his hand]
[34:55] SG: The other way.
[35:05] ST: Around the Verse
[35:07] SG: It’s okay, we’re all good.

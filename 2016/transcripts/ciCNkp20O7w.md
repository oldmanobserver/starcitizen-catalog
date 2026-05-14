# 10 for the Chairman: Episode 78

**Video:** https://www.youtube.com/watch?v=ciCNkp20O7w
**Date:** 2016-03-07
**Duration:** 24:35

## Transcript

[00:07] Closed Captioning provided by the Imperial
News Network.
[00:14] Chris Roberts (CR): Hello, welcome to another
episode of 10 for the Chairman.
[00:21] For those of you who haven’t watched this
before this is where I take 10 questions from
[00:25] our subscribers.
[00:26] Our subscribers are the subset of our community
that contribute money every month to enable
[00:32] us to do all of our enhanced community content.
[00:34] This show, Around the ‘Verse, all the other
ones we do like, Bug Smashers, Jump Point
[00:39] which is this 40-70 page behind the scenes
magazine that we publish digitally, monthly
[00:46] that goes into the details on how we design
the ships, game design, plus lore and we have
[00:53] fiction in it so it’s really quite a cool
read.
[00:56] It has lots of sort of details of behind the
scenes and that’s all made possible by the
[01:01] subscribers that are contributing the money
that really keeps our community team and enhanced
[01:05] community stuff going which I think it makes
a difference to Star Citizen and it’s one
[01:10] of the reasons why we’re able to update
you guys and connect all the time and I think
[01:16] it makes for a really great development environment.
[01:19] Thank you very much to subscribers for that
and as part that deal I try to answer 10 questions
[01:24] from them every week when I’m able to shoot
this show, which isn’t always the case because
[01:29] this year I mentioned on a couple previous
shows that I’ll be back and forth between
[01:34] here and Europe quite a lot.
[01:36] Obviously we have teams around the world and
infact we have more people now in Europe now
[01:40] than we do in the US and we’ve got a lot
going on, Squadron 42 obviously and then of
[01:45] course what we’re doing with SC Alpha Live
which we just went to the 2.2 version and
[01:53] now everyone's sort of coming down off that.
[01:55] There will be a few little cleanup and fixes
on that, but everyone is focusing on 2.3 which
[01:59] is the next major patch that is also bringing
some pretty cool new functionality … It
[02:05] never stops in the world of Star Citizen,
anyways let's get to the 10 questions.
[02:09] First one comes from ...
[02:10] [2:12] Starripper asks: Are there any plans
to stream line the patch sizes?
[02:14] I am on the road a lot and use my cellular
data to update Star Citizen, the updates ear
[02:20] up a lot of gigs right now especially when
there are multiple patches.
[02:23] So yes absolutely.
[02:24] We have a plan, in fact I sat down earlier
this week which would be the previous week
[02:29] to you seeing this as we’re recording this
on a Friday and you’re going to watch this
[02:31] on a Monday.
[02:33] But yeah I think we have a really cool plan
that’s very configured to our new development
[02:41] paradigm.
[02:42] Not saying new for us, but the new paradigm
of what we’re doing which is constantly
[02:48] building, testing, deploying both internally
and then externally to, you guys in the community
[02:56] at first level the Public Test Universe the
PTU then of course to live and so we needed
[03:03] a solution that we can can be building rapidly
and iterating rapidly and getting it to you
[03:08] as efficiently as possible.
[03:09] And our current one is not the best because
it has these big monolithic PAK files and
[03:13] each PAK file is two gigs and there’s quite
a few of them and if one file changes in it,
[03:20] you have to rebuild the whole PAK file and
the way our build system works with all the
[03:24] data is we have to rebuild all the data into
the PAK files right now, which essentially
[03:29] means we spend about three hours if we do
a full build about an hour if we just do a
[03:33] code build.
[03:34] But that’s a huge amount, so it’s problematic
in terms of getting that done and then testing
[03:40] it instead of there’s an issue then you
have to go back.
[03:42] So we want a solution that’s much more flexible
and iterative and we also want one that means
[03:50] we’re not saturating everyone’s bandwidth.
[03:52] Cause it’s not just on you guys side but
it’s also on our side.
[03:57] Every byte we push costs us money ‘cause
it’s coming off the Amazon CDN that we’re
[04:03] using.
[04:04] So we have a plan that I think is much cooler,
smarter one that is all built all around incremental
[04:12] builds of both data and code as soon as it’s
assimilated into the code base and all the
[04:18] individual files are tagged and held in a
huge object store and the patch will know
[04:25] what to pull down and what changed.
[04:27] So even if you’ve changed a couple of files
no longer will we be pulling down a whole
[04:32] new two gig object PAK or something like that.
[04:35] It will just be pulling down the specific
files, it will also allow them to version
[04:39] back and forth between them.
[04:41] So there’s a really really cool plan it’s
going to be done by combination of DevOps
[04:47] team in Austin and the folks in the Frankfurt
office and Turbulent are all putting this
[04:55] together and building and it’s going to
be super cool!
[04:59] Not going to be deployed tomorrow.
[05:02] I just signed off on the whole design, we’ve
laid a lot of the groundwork but a lot of
[05:06] it is going to take some time and testing
but when it comes online it’s going to make
[05:09] a massive difference for our ability to turn
around builds for you guys quickly and also
[05:16] to reduce the amount of data that we saturate
both our CDN and you guys on your bandwidth
[05:21] limits.
[05:22] So i’m pretty excited by that it will just
allow us to be more flexible and more nimble
[05:26] which is good.
[05:29] So next question
[05:30] [5:30] Narcoman asks: Aside from shopkeepers,
quest-givers, and other NPCs considered essential
[05:36] in other games, are NPCs in a given area going
to be generated randomly based on the current
[05:41] environment and the parameters set in the
area?
[05:45] CR: So what’s going to happen is that we
have a universe simulation that runs on a
[05:50] separate server.
[05:51] That’s much more of a big picture simulation.
[05:54] Think of it kind of like a Civilization game
or something like that.
[05:58] Sort of a slower turn based game.
[06:00] That actually is simulating the universe,
what all the NPCs are doing, on a macro basis.
[06:04] Who’s trading with what?
[06:06] What’s producing what?
[06:07] What goods are needed where?
[06:09] Where pirates are attacking?
[06:10] The sort of general outcomes of those results
are all happening on the universe simulation
[06:15] and it’s own process.
[06:16] Then that is getting trickled down to the
local game servers that all the players (i.e.
[06:21] you guys), are attaching to and playing in.
[06:24] The snapshot of what’s happening on the
universe server is sort of carried across
[06:30] the game server.
[06:31] What would happen is, for instance, if you
were down on a planet it would say, “Okay,
[06:35] well this planet is a mining planet and, you
know, so I’ll generate and the population
[06:42] is this size; therefore, we’ll probably
populate the landing area with ‘X’ number
[06:49] of NPCs, 60% of them will be miners, and then
we’ll have some law enforcement, and you
[06:57] know we’ll have some service workers in
the bars and stuff like that.”
[07:00] It will all be generated by the data that’s
pulled down, or pushed down, from the universe
[07:07] server, so it will dynamically change.
[07:09] If a place becomes… turns on hard luck times
or whatever and there starts to be unemployment
[07:17] or people start moving off world to go somewhere
else to seek jobs, and the population is lowered,
[07:23] then you’ll see less people in the landing
area.
[07:27] Perhaps the mine shuts down so then you won’t
really see miners anymore.
[07:31] Maybe the criminal element will increase because
there’s nothing to be done in that area
[07:36] where you can be gainfully employed so people
are turning to crime.
[07:39] So what’s gonna happen is there’s going
to be a loose, fuzzy, connection to what’s
[07:42] happening on the universe simulation with
what you actually see when you’re moving
[07:46] around personally in the game.
[07:48] It will change with what happens in the universe.
[07:52] Of course what happens in the universe is
influenced by what players also do in the
[07:55] game as well.
[07:57] So the AI meta actions are all handled on
the server and then the player actions are
[08:04] simulated in those local game instances.
[08:07] Like for instance, you guys connect to Crusader
right now, and results from that will be pushed
[08:10] back up to the universe server and then that
will effect things like pirate count and some
[08:15] stuff like that.
[08:16] If there’s pirates preying on a cargo run
between two planets, say they’re AI pirates,
[08:24] then the company that’s not getting the
goods because the pirates keep attacking its
[08:27] shipments hires some bounty hunters (i.e.
you the players), to go after the pirates
[08:32] in the area or take them out.
[08:34] You do and you go and kill the pirates that
are there, the 20 pirates or whatever, then
[08:38] that gets pushed back up to the universe simulator
and the universe simulator says, “Okay,
[08:42] let me kill the 20 pirates.”
[08:45] If that kills all the pirates on the universe
simulator, when you go back and fly that area
[08:49] back on the local game server instance, no
longer will pirates be a potential spawning
[08:55] encounter because there’s no pirates in
that area anymore whereas before there were.
[09:00] So that’s kinda how the connection happens
between the game and the universe simulation
[09:06] and I think that it should be pretty cool
and be pretty dynamic.
[09:10] So you will definitely feel impact from overall...
[09:14] macro movements and player influence.
[09:18] You should sort of feel places change with
time depending on what’s happening in the
[09:23] universe, so it should be cool.
[09:24] [9:27] Krel asks: Within the context of fantasy
space flight (Star Wars, Battlestar Galactica,
[09:31] etc) and given how you're implementing the
flight model in Star Citizen, how do you see
[09:35] the importance of positioning relative to
an opponent playing out?
[09:39] Should there be an advantage to getting on
your target's 'six' and staying there, or
[09:42] is that pretty much negated by 6DOF flight?
[09:45] I will say that in all circumstances even
with 6DOF and the ability to do lateral, horizontal
[09:56] and vertical strafing as well as being able
to change your orientation and maybe now your
[10:02] velocity vector, which is sort of the decoupled
stuff.
[10:05] Always getting behind someone or in their
blind side is always a bit of an advantage.
[10:10] Now the difference in our system and flight
model.
[10:13] If you’re a good pilot you’ll be able
to be able to get out of that situation.
[10:16] You’ll have more options than you do in
regular atmospheric air combat maneuvering.
[10:21] But obviously you want to get behind someone
because they can’t bring their guns, most
[10:26] guns are forward facing, also visibility is
usually forward facing.
[10:29] So, outside of the bigger ships with turrets
then getting behind people or swarming in
[10:35] a dogfight usually will give you an edge or
an advantage even if they can recover from
[10:39] it quicker than they can in traditional current
day atmospheric air combat.
[10:45] [10:47] J. Stalker asks: We already have a
flyable Constellation and a flyable P-52 Merlin.
[10:51] How far are we from a workable tech for docking
and undocking?
[10:55] Is this something we can expect in the near
future -or is this a functionality planned
[10:58] further down the line
[10:59] CR: I really want to actually get the p-52
and the constellation to work together cause
[11:05] they are meant to work together.
[11:07] It’s probably something we’ll start to
work on with Craig Grounsell who’s done
[11:12] the sort of landing systems.
[11:13] Still got some landing system stuff that he’s
wrapping up for Squadron 42, and some enhancements
[11:18] for star citizen, and this will probably be
the next task to get this working.
[11:22] It’s not that difficult.
[11:23] Basically you just kind of want to get, it’s
just like the landing system really.
[11:26] You get in a certain area and you say “ok,
dock” and we just sort of bring you in and
[11:31] connect you, and the merlin would be attached
to the constellation, and then hopefully you
[11:36] get out and should just be able to enter into
the back of the Constellation.
[11:40] So I do want to get it moving ‘cause it’s
actually not that difficult, technically,
[11:44] to get working.
[11:45] It’s really just people have had a whole
bunch of other things they are working on
[11:48] first.
[11:49] For instance, you know, we, ah haven’t shown
it yet, but you know we have an Idris flying
[11:53] around and you can land inside it, and take
off inside it, and walk around it, and it’s
[11:59] pretty cool.
[12:00] So, that was sort of the higher priority,
and we’ve still got some to do on the bigger
[12:04] ships in terms of building it out, like we
have this object contain system which we detailed
[12:10] in our February monthly report that just came
out, and you know that’s kind of how, well,
[12:15] all the future sort of big stuff like big
space ships or space stations and, you know,
[12:21] even the landing areas will be taken care
of.
[12:24] It’s sort of like containers of geometry
and objects and stuff that can be nested inside
[12:30] each other, and sort of stream in and out
depending on the situation, and that’s how
[12:34] we’ll bring in the interiors of the bigger
ships and stuff like that.
[12:36] So we’re doing that but obviously trying
to have a dockable Merlin with a Constellation
[12:41] is, you know, on our list.
[12:46] [12:50] Mediocrates asks: Will there be a
realistic audio option e.g. No sound in a
[12:55] vacuum, so you just hear stuff hitting your
ship as the muffled sound travels through
[13:00] the structure, and lasers/photons are soundless?
[13:03] So short term absolutely no.
[13:06] Not because, we’ve sort of gone for the
sort of Star Wars, Battlestar Galactica route
[13:11] where we have sound because generally that’s
kind of cool even though it’s maybe not
[13:18] quite as realistic.
[13:19] Longer term I could see the sound department
getting to the end of all the features we
[13:26] want them to implement and do sort of a realistic
sound simulation option which I won't be against,
[13:33] I would just prefer to finish up a bunch of
other stuff like, the music system.
[13:38] We’ve now got our 2.0 Music System and this
sort of positional Voice Over IP that we want
[13:47] to do.
[13:48] So when you’re in a group on a ship I can
talk and you’ll hear me and if I’m in
[13:53] front of you you’ll hear my voice coming
from the front, if I’m behind you’ll hear
[13:56] me coming from behind, my voice will be filtered
if I’m speaking through a helmet, etc, etc,
[14:01] all those things.
[14:02] So all of that’s sort of ahead of the queue
than doing stuff of the realistic space sound
[14:08] option, but I wouldn’t rule it out longer
term because we have a pretty talented audio
[14:12] department and they’ve been doing some pretty
awesome stuff both on the sound creation,
[14:16] but also on the simulation, programming side.
[14:19] Okay next question comes from.
[14:20] [14:24] Nimryl asks: What is your intent in
regards to personally owned NPC'ed fleets?
[14:26] Is it your intent to add as many controllable
NPCs as possible per person if the technology
[14:31] allows?
[14:32] We definitely are going to allow you to hire
some NPCs to help you crew a bigger ship or
[14:37] perhaps fly as an escort for you when you're
running a mission or perhaps fly a transport
[14:42] for you, but we're probably going to cap that
to a certain number.
[14:46] We haven't decided yet, because we haven't
really gotten into that.
[14:48] We still got obviously a lot of performance
things to figure out.
[14:51] Like how many NPCs we can have running in
the same area or instance as well as how many
[14:55] players can run in the same area or instance.
[14:57] So, we wouldn't want to have an infinite amount
for people doing in there.
[15:01] There's a certain level you don’t want to
have that cause it can become incredibly unbalanced.
[15:05] So, I don’t have a great answer for that
right now, but I would say it not going to
[15:10] be as many as theoretically you could allow.
[15:12] There will be some level of cap on it, but
it will be what would make sense for you to
[15:18] have some help in the cases you need and,
perhaps different things would have different
[15:23] amounts.
[15:24] So, if you have an Idris then you and some
friends need to fly but you also need a bit
[15:28] of a crew and that could maybe have a few
more NPCs in that situation than you would
[15:32] if you were hiring individual NPCs to fly
escorts.
[15:36] So, you couldn’t have 10 NPCs flying 10
Hornets for instance.
[15:40] But we haven’t come up with the actual numbers
because obviously it needs balancing for both
[15:44] game play reasons and performance reasons.
[15:48] [15:50] Captain Awesome asks: So the Endeavor
has bio-domes.
[15:53] What will be the point of farming?
[15:55] And will there be bacon farming?
[15:56] CR: Well the point of farming will be the
biodomes will allow you to grow agriculture,
[16:03] crops and you’ll be able to sell those probably
for a premium.
[16:09] So the idea would be bio-domes on the Endeavour
are growing things you couldn’t necessarily
[16:14] grow on a planet.
[16:15] Then you can maybe sell for a premium, whatever
it will be.
[16:17] I’m sure lots of people will go “Space
weed!”.
[16:20] But there’ll be plenty of other things too.
[16:24] So it’s a sort of farming mechanic so you
would have that in space.
[16:29] You would maintain it like perhaps you would
have to take the, your ship would have to
[16:34] be a certain distance from the local system
star or you may have to fend for it make sure
[16:39] it’s grown in perhaps the lower gravity
setup, makes you able to grow a better strain
[16:45] of whatever it would be: wheat, etc.
[16:47] So there you go.
[16:48] I don’t know about bacon farming.
[16:50] Bacon farming I’m guessing is: ok we’re
going to have pigs or cows or something like
[16:55] that.
[16:56] I would think at some point we may do livestock
but I would definitely say in the first iteration
[17:00] or two we probably won’t do it just ‘cause
of the issues of: ok now i’ve got a bio-dome
[17:06] full of 20 cows or something.
[17:07] But longer term we may but short term it will
probably be much more vegetation or plant
[17:12] based, that you would have to farm.
[17:14] Farm, so a little Farmville so to speak.
[17:18] [17:19] Coryphaeus asks: I would like to know
more about the procedural tech.
[17:24] You've talked about consulting linguists for
alien languages, are you talking to exobiologists,
[17:29] exoplanetologists, and exo-climatologists
for direction and help in designing the ecosystems
[17:35] and climates of alien planets?
[17:36] CR: That’s a good question.
[17:39] I, we have done a certain amount of working
with a local school here in L.A. actually.
[17:47] So UCLA we’ve been dealing with some astrophysicists
and their ilk, in terms of laying out our
[17:54] star systems and what kind of planets would
be what distance from the stars.
[17:59] That dictates the type of planet.
[18:04] To a certain extent what we do is we say “Well
we want this kind of planet”.
[18:07] Then we talk to the folks that really know
and say “So what situation could we potentially
[18:12] get this planet in?”.
[18:13] And they’ll say “Well then maybe it needs
to be this distance, this many Au from the
[18:17] star and …”.
[18:18] And that’s so how we on a macro side have
been doing the star system map and some of
[18:23] that will filter into the procedural tech.
[18:26] But it’s still early days on the, kind of
figuring out the ecosystems of the planets
[18:33] and the weather patterns and all the rest
of the stuff.
[18:35] I would guess that we would tend to go a little
bit more towards a designed approach where
[18:40] it’s like taking a look at Hoth.
[18:43] It’s an ice planet and it’s cool, but
is the whole planet covered in snow or is
[18:48] it..I mean it certainly looks like when you
watch the movie.
[18:51] Would that be realistic?
[18:52] Would there ever be life on a planet like
that?
[18:54] Maybe, maybe not I don’t know.
[18:55] But you very much define the planets like,
using my Star Wars reference here: Hoth is
[19:01] the ice planet, Tatooine is like a desert
planet and so you got, you go to the Dagobah
[19:10] system and it’s all like this swampy jungle
thing.
[19:13] Very much in Star Wars they focus the planets
to feel like it’s a type, it’s a jungle,
[19:19] or it’s an ice planet, or it’s a desert
planet.
[19:21] So we’ll probably do a little bit of that,
maybe not quite as much of that.
[19:25] But we’ll definitely do some of that, ‘cause
I think it really helps in terms of identifying
[19:30] the planets and stuff.
[19:32] So there’ll be a combination of a little
bit of science and what we think fiction or
[19:39] lore wise, kind of gameplay wise would help.
[19:43] So there you go.
[19:44] A little bit of it, but not a massive amount.
[19:46] [19:47] Kyran asks: Now that Vulkan is officially
released, has the Frankfurt team had the chance
[19:53] to dive in to see about supporting this API
alongside DirectX 12?
[19:57] CR: We have looked at Vulkan, we’re pretty
excited by it.
[20:01] So we are considering our options between
Vulkan and DirectX 12 we haven’t made a
[20:07] full decision.
[20:09] But Vulkan has some advantages, the biggest
one being, as long as it works properly that
[20:18] it can work on a PC but also work on Linux
and work on other platforms, where as DirectX
[20:26] 12 is specifically just for Windows.
[20:27] They are both very similar architectures,
essentially Vulkan’s not that different
[20:32] from what Mantle was originally set up to
be.
[20:35] So we’re considering it.
[20:38] You never know whether we will do DirectX
12 or Vulkan first.
[20:43] Steve posted for that one!
[20:45] [20:50] Augustus Kron asks: What hobbies (outside
of Star Citizen) are you struggling to keep
[20:51] up with over the past couple of years?
[20:54] CR: Yeah there isn’t much life outside of
Star Citizen, unfortunately, it’s tough.
[21:01] I would say the few things I get to do, I
like playing tennis.
[21:06] That’s a sport I played when I was young
and I still do it, and it’s good for exercise.
[21:10] I don’t actually play football, or soccer
to everyone in America, anymore.
[21:14] I used to.
[21:15] That was, unfortunately, about 30-40 pounds
ago and there may be a correlation between
[21:20] not playing football and getting older.
[21:25] I still watch it a lot.
[21:26] I’m from Manchester, and I’ve always supported
Manchester United.
[21:30] I watch Premiership games over here in America,
and when I’m in the UK, I watch them there
[21:35] or actually go to some live games.
[21:37] That, play some games, or try to play some
games when I got a little bit of spare time.
[21:42] That’s really hard.
[21:43] See some movies, obviously a big movie fan.
[21:48] That’s pretty much it.
[21:50] I don’t really have much time to do many
other things than that.
[21:56] Maybe once Star Citizen is done, then I’ll
take a lot of time off and get back into some
[22:03] of my hobbies.
[22:04] For instance, I think I’ve shown off my
little miniature Napoleonic figures from when
[22:08] I used to war game.
[22:09] I haven’t…
[22:10] Ever since I started doing Wing Commander
onwards, I haven’t had a chance to do things,
[22:15] like gaming, the same way I used to do a long
time ago.
[22:18] It all takes time.
[22:20] I actually used to think when I went to school,
“I can’t wait till I’m not going to
[22:24] school, and have all this time to do these
other things.”
[22:26] I look back on it and realize that, when I
was actually going to school, I had lots of
[22:30] time for hobbies and now I don’t have that
much time, but c’est la vie.
[22:33] Outro
[22:34] So there you go.
[22:35] That’s the end of my answers for 10 For
the Chairman.
[22:38] Thank you, guys, for listening.
[22:39] Hopefully, some of the answers were informative
and useful for you guys.
[22:43] Thank you to all the subscribers that enable
us to put together content like this and all
[22:47] the other stuff that we do here for Star Citizen
at Roberts Space Industries.
[22:53] And thank you to all the backers, ‘cause
without all you guys contributing and supporting
[22:58] the project, we wouldn’t be where we are
now.
[23:01] It’s pretty monumental, but it’s enabling
us to building something that I don’t think
[23:05] anyone would have ever conceived you could
build, and certainly no publisher would have
[23:08] ever dreamed of doing.
[23:10] We aren’t there yet, but we’re getting
there.
[23:11] I think you can sort of see the progress.
[23:13] There’s more and more features and gameplay
coming online on Star Citizen Alpha, you know,
[23:19] 2.x live.
[23:21] As we go and this year, there’ll be a lot
of stuff that comes online that I think will
[23:24] really sort of add to the experience.
[23:26] But even right now, sort of in 2.1, now 2.2,
there’s just –there’s a lot of cool
[23:30] immersion gameplay that’s happening.
[23:31] There will be more of that happening and I
think we’re building something that, long
[23:36] term’s, gonna be….
[23:37] Well it’s the game I wanna play, and I think
it’s the game, hopefully, a lot of you guys
[23:56] wanna play.
[23:58] So, anyway, ‘til next time.
[24:02] Talk to 
you later.

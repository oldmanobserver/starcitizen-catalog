# Star Citizen: 10 for the Chairman - Professions in Alpha 3.0

**Video:** https://www.youtube.com/watch?v=Uhra2SETLNs
**Date:** 2017-03-14
**Duration:** 50:05

## Transcript

[00:22] Closed Captioning provided by Relay.sc
[00:23] Chris Roberts (CR): Hello and welcome another
edition of 10 for the Chairman.
[00:26] Not quite as frequent as we’ve done in the
past, but there’s a lot of other things
[00:30] going on so it’s not so easy for me to do
them and also we’re deep in development
[00:34] on a whole bunch of big features for this
year and today we have a special guest with
[00:40] me on 10 for the Chairman Tony Zurovec, the
Director of the Persistent Universe who will
[00:45] be here asking or answering the 10 questions
asked by you guys and we’ve done a bit of
[00:52] a departure now which I hope you guys will
like, but the key here is that we’re allowing
[00:57] everyone to vote on the questions.
[00:59] So as part of Spectrum which is the new platform
that we’re rolling out for our forums and
[01:04] communication like chat and ultimately do
VOIP, it has the ability to upvote questions
[01:12] or posts or threads and so I know it’s been
a common complaint that well you didn’t
[01:19] answer this question we wanted answered, that
was a silly question to pick or answer or
[01:25] why do people ask these basic questions.
[01:27] Well now everyone has an opportunity to vote
on the questions they want to have answered
[01:32] and may the best questions win.
[01:38] So it’s very important for all you subscribers
to, if you care about having questions answered
[01:45] that you’re interested in, go out and vote
when we run these because we'll be sort of
[01:50] running these on Spectrum, not just for 10
for the Chairman, but a bunch of other stuff.
[01:54] We’re building more and more features to
sort of support the ability to upvote and
[02:00] sort of, highlight content that you’re all
interested in.
[02:05] One of the next stages we’ll be rolling
out, a new Reddit/stackoverflow thread ordering
[02:14] which also works on the same idea which is
one of the reasons why I think a lot of people
[02:19] in our community use Reddit because it’s
easy to figure out what people are interested
[02:24] in or where most of the heat or most of the
conversation is at.
[02:29] So it’s very important for you guys to be
involved in this.
[02:31] It’s also good for us, certainly for Jared,
and Ben, and the rest of the community team
[02:37] because they get blamed for picking the wrong
questions.
[02:39] Now the people out there whose fault for the
top questions will be you guys!
[02:45] So make sure you vote well and the only thing
I’ll say is we’ve taken the top 10 questions,
[02:52] there were two that me and Tony went through
all the stuff in the order of the highest
[02:57] votes to the lowest votes and there were a
couple that we didn’t feel like we would
[03:01] be able to give a very good answer too at
this period so we haven’t answered those
[03:06] ones.
[03:07] So there’s two that would have been in the
top 10 that aren’t answered, but other than
[03:11] that we are answering it in the reverse order
of the most votes.
[03:16] So the last question we answer will be the
one you voted the most for and the first one
[03:21] will be the 10th most voted for of the ones
that we felt like we could answer.
[03:28] So having said that, hopefully you guys will
find it interesting and it’s kind of a fun
[03:35] process Tony and I because we get to discuss
things that we’ve have plans for or there’s
[03:42] been a lot of design and even some implementation
on, it’s good to always reconnect and make
[03:49] sure we’re all on the same page and go from
there.
[03:52] So the first question, number 10 comes from...
[03:56] [3:56] Klepto asks: Will Items and Cargo on
Planets be in a visible Storehouse or will
[04:02] they “disappear” somewhere?
[04:03] TZ: You want to take that?
[04:04] CR: You want me to take that one, cause I’m
Mr….
[04:07] I like the visual stuff.
[04:10] So, from the standpoint of the way we’re
going to run it is there’s going to be a
[04:14] visual indication in the appropriate sort
of commodities places, not all commodities
[04:20] places necessarily will have a warehouse window
you can see.
[04:24] A lot of them will and I really want that
sort of feeling that maybe you had a privateer
[04:29] when you went to the commodities exchange
and you can see crates or boxes of the things
[04:33] that you can buy.
[04:34] Now, of course, if we’re on a planet and
there’s ten thousand tons of something we
[04:38] obviously can’t fit it all in your view
of the storehouse.
[04:42] So what it really is is representation of
the general inventory that commodities warehouse,
[04:49] TDD, broker area would have and it actually
not dissimilar, in fact it is going to be
[04:56] exactly the same system that runs the shops.
[04:58] So, the shops themselves have an inventory,
obviously they’re probably going to have
[05:03] a lot more guns or armour or weapons in the
back room then they do on the showroom floor.
[05:09] What you see on the showroom floor even when
you go into a shop now is a representation
[05:13] of what the inventory that shop is holding
and the same code that runs that is essentially
[05:19] the code that would run the visual representation
of a storehouse.
[05:22] In fact the commodity exchange and brokerage
is underneath it all, there’s no difference
[05:29] between that really and a shop you might buy
weapons or armour or anything else.
[05:35] It’s a place that can buy or sell items,
it has X number items and in the case of commodities
[05:44] area the price of it can fluctuate based on
quantities.
[05:50] Price may or may not fluctuate so much in
shops cause they tend to have smaller amounts.
[05:54] You will be able to get a visible representation
in a lot of cases and that’s very much consistent
[06:02] with our feeling of a kind of visceral ‘what
you see is what you get’ world, which is…
[06:08] cause anything about Star Citizen we’re
very keen on that.
[06:11] TZ: I would just add in that there are a few
practical limitations once you start talking
[06:16] about ship shops and some of the larger weapons
and stuff.
[06:19] Actually putting them into that area and still
giving you a significant selection becomes
[06:27] problematic, so we may give you representative
samples of some of the smaller weapons and
[06:31] the bigger ones are basically, pick the size
you want via the automated kiosk.
[06:36] Insofar as having that visual element, that’s
actually something that you’ve always been
[06:42] very consistent on and that permeates a whole
lot of what we’re doing over on the design
[06:47] side.
[06:48] Like one of the more recent examples would
be the shopping where some of the initial
[06:51] design actually went more to a minimalistic
design where you basically selected…
[06:56] more like a Grand Theft Auto thing where you’re
selecting from a list and one of the things
[06:58] you specifically wanted was to actually be…
it’s that’s tangible aspect of being able
[07:03] to touch, see the white t-shirt, the red t-shirt,
the shoes that look like this and not just
[07:09] selecting it from a list of things.
[07:12] So, we’re basically trying to implement
that concept throughout the entire interface
[07:17] for the game.
[07:18] CR: Yep, that’ll be good.
[07:20] As much as I like Amazon, it’s still nice
to go into a store and look at things in person.
[07:25] [7:26] Steve Apollyon asks: Are there any
plans on cargo loading of the bigger ships
[07:34] such as the Hull series of ships and is the
loading at a space station or even planetary
[07:40] going to be automatic or will we have a specialized
small cargo loading ships similar to the Argo
[07:47] to load manually if we choose to.
[07:52] TZ: Yeah, so we have talked about the fact
that we don’t want the larger ships to just
[07:58] park it, click the button and it’s done.
[07:59] That these larger ships that have vast quantities
of materials would actually take a significant
[08:04] period of time to unload.
[08:05] And they result in missions for NPCs and/or
other players to undertake.
[08:11] We’ve got a pretty comprehensive design
right now but we’re still iterating through
[08:16] that because we want to unify some of the
functionality for loading and unloading so
[08:22] that it’s the same basic concept on the
smaller ships as on the larger ships.
[08:26] And right now what we’ve got in the design
stage is something that works, I think, remarkably
[08:31] well on the smaller stage it just doesn’t
scale so well when you start talking about
[08:35] several orders of magnitude more materials
and how you don’t bottleneck in terms of
[08:39] getting potentially dozens or hundreds of
other smaller ships to extract those resources.
[08:45] So we’re still refining exactly how that’s
going to work but that’s the general direction.
[08:52] So there is going to be commonality in terms
of you’ll have the ability to work at a
[08:57] very localised scale and then you’ll be
able to scale that very wide so that there’s
[09:02] content for a large number of players and/or
NPCs on these bigger ships.
[09:06] CR: So, yeah, but are you answering whether
it’s automatic or not?
[09:10] So like the way I was viewing it is that - and
I think that we maybe have this as a later
[09:16] question in the series - when you go ... like
on a big space station … like if I have
[09:25] a big container ship and a pull into the port
of LA here a Long Beach there’s a whole
[09:30] set up: there’s longshoremen, big cranes
and there’s services.
[09:34] And the crew of the container ship don’t
actually unload the containers themselves
[09:40] - there’s equipment that does it and there’s
people that are paid to do that.
[09:44] And I would say that in general in the bigger
space ports you would have that same kind
[09:51] of setup where you would have the ability
to unload the bigger ships, unload the containers.
[09:57] Potentially we’ve talked about having the
ability for players to play the part of a
[10:03] longshoreman …
[10:04] TZ: Right.
[10:05] CR … they’re running around in a little
Argo and taking off a container from a Hull
[10:06] E and dropping it to another place and doing
that.
[10:09] Or having AI do that.
[10:12] And then there obviously will be cases where
- which is probably a later question we have
[10:17] here - there’ll be manual loading and unloading
of cargo where you don’t have the big services.
[10:24] Like if I just had a ship and I was off the
coast somewhere and there wasn’t a port
[10:27] then obviously …
[10:28] TZ: Right.
[10:29] CR: … I would have to be doing that myself.
[10:30] And so I think we’ve been looking at way
that you have the automatic option that the
[10:37] services provide for you …
[10:38] TZ: The automatic option when appropriate
but the fidelity so that on these smaller
[10:41] ships you can actually … and this makes
for much more interesting gameplay a of times
[10:46] in a lot of different cases because you can
imagine scenarios to where you need to deliver
[10:51] a smaller quantity - a half dozen, a dozen
- specific crates of some sort of illegal
[10:56] liquor or something to somebody in a planet,
and part of the mission is not just finding
[11:01] where to procure this stuff and then get through
customs without being detected, but once you
[11:06] are actually on the planet now you’ve got
to take these crates physically to that guy
[11:11] before he’s going to give payment.
[11:14] And so all of a sudden you start to get into
a much more localised problem where you’re
[11:19] trying to avoid security guards or else you’re
going at night because you may be …
[11:22] CR: I think we have that … I think we have
a question that basically asks the same thing
[11:24] a little later on but …
[11:25] TZ: You threw everything off because you reversed
everything ...
[11:27] CR: … well … yeah … I kind of … I
went from the big and the services to break
[11:32] it down to the other one.
[11:34] Okay so I think … so the answer is there’ll
be services but we’ll also have some specialised
[11:41] ships and equipment for unloading cargo.
[11:44] Especially in the case of the big Hull series.
[11:49] [11:51] End-yo asks: Can you talk at all about
what is in store for the Salvage profession?
[11:58] Will it involve carving up ships for scrap
(or resources in the repair profession), specifically
[12:04] seeking out functioning or expensive parts
of derelict ships, or some combination of
[12:09] those?
[12:10] Will this be like mining and require good
scanning to effectively find salvageable ships
[12:15] and stations?
[12:16] TZ: Yeah mentally I break salvage into two
different concepts.
[12:21] One is what I call scavenging when you’re
actually extracting entire pieces of value
[12:26] from other ships, could be engines, could
be weapons, could be cargo whatever.
[12:30] Then there’s also what I’d call scrapping
which is basically the extraction of the raw
[12:34] materials.
[12:35] You’re actually pulling off the metal plating
from the wings and stuff like that.
[12:40] We’ve talked about having these elements
distributed in a logic fashion so that the
[12:50] players that are more knowledgeable about
where the most valuable elements and stuff
[12:55] are on a particular ship can strip the most
valuable pieces that much more quickly.
[13:00] So what you’re going to wind up having is
a tier of players: some of interested in one
[13:05] thing or the other, some of them are interested
in only the most valuable parts and then they
[13:08] quickly move on looking for other things to
scrap.
[13:13] Other players are basically looking at completely
reducing a ship down just a husk and leaving
[13:18] no value behind.
[13:19] CR: Yeah to be more specific to answer the
question.
[13:24] It is going to be a combination of both so
you’ll be able to just take general sort
[13:29] of debris and essentially scrap it into whatever
salvageable material that you will be able
[13:36] to use or resell.
[13:39] Then you can also look to salvage working
individual items.
[13:44] So if a wing blows off, but maybe it has a
functioning gun that hasn’t been damage
[13:49] or damaged very much, if you can find that
and detach that from the wing than you’ve
[13:54] got a second hand item you can sell.
[13:58] Both those are going to be part of the salvage
profession and Tony was talking about the
[14:06] next level which is scanning and knowing the
aspects of a ship that may be the best to
[14:11] salvage.
[14:12] So you don’t want to maybe salvage the entire
hull, but perhaps this part of the hull has
[14:18] whatever titanium armour and therefore is
more valuable than another part of the hull
[14:23] so that will be the part that you want to
salvage or dissolve into your big salvage
[14:28] tank.,
[14:29] TZ: And one of things I really like about
that particular concept is that it scales
[14:33] really well to any number of players.
[14:35] In other words when you think about a salvage
ship as having one laser or whatever it is
[14:41] that is basically going to pull the materials
off of there, you’ve only got a single player
[14:44] that can actually engage in that and if you
want more maybe we could add a second one
[14:49] of these devices, but you’re still going
to be fairly limited.
[14:52] If you start to turn this into something to
where players with their individual hand controlled
[14:57] stuff, it can basically extract things then
you have two things: one it becomes very time
[15:03] consuming at that level, at a personal level
to scrap an entire ship, but it’s actually
[15:12] still very cost effective if you have done
this enough as such that you know where all
[15:16] the most valuable areas are and that’s all
you’re going to bother so.
[15:19] So what I would say is when you're talking
about scrapping the entirety of a ship, that’s
[15:23] probably going to be you’re going to aim
the fire house at it, the big dedicated device,
[15:27] but when you’re talking about just extracting
bits of value you quickly get in get out maybe
[15:31] because there’s a lot of residual dangers
in that area, then it actually becomes very
[15:35] effective to have you and four, six guys who's
maybe other players, friends of y ours, other
[15:40] NPCs that you’ve hired to just attack it
in mass, just hit the valuable parts and then
[15:47] go on.
[15:48] CR: Yup, absolutely.
[15:49] So there you go.
[15:50] All those things will be there so I think
salvaging will be quite and graphically kind
[15:55] of already handle it with the damage shader
because you can sort of dissolve off the surface
[15:59] in a more regular pattern and you’re taking
off the top of the hull for salvage.
[16:06] TZ: This is a great example where we’re
reusing technology from one purpose to another
[16:11] and we’re actually going to do the same
thing, repair is actually going to be largely…
[16:13] CR: The other way.
[16:14] TZ: the inverse of this process to where you
take all the raw materials that you’ve stored
[16:17] in your ship and you can dispatch three, or
four, or six guys or the big dedicated device
[16:21] depending upon how quickly you want to move
across the entire ship and repair just select
[16:24] areas.
[16:25] CR: Yup, alright so the 7th most popular question
comes from...
[16:30] [16:28] Cyrocommander asks: In both cargo
running and mining, what types of hazards
[16:34] can we expect?
[16:35] Understandably, there will be the threat of
pirates, but what other dangers will we run
[16:40] into, i.e., hitting a combustible methane
vent will mining, or the consequences of a
[16:46] container malfunction during transport?
[16:47] TZ: This is actually one of my favourite ones
because I like the concept of exploration,
[16:52] discovery and just as I’m flying, going
about my business, doing one thing maybe mining
[16:57] or whatever.
[16:58] I’m encountered other stuff and so in terms
of the things other than pirates that might
[17:03] kick you out quantum travel for a period of
time, this would include everything from meteor
[17:10] showers, comets, derelict ships that cross
your path, debris fields, micro black holes,
[17:17] just a variety of things like that.
[17:19] The most interesting aspect about this I think
is that all these things that you encounter
[17:24] can not only have potential value to you even
though you’re currently engaged in something
[17:28] else because this represents information,
if you cross paths with a comet and that comet’s
[17:34] not known to anyone else you can actually
sell that information that may be very valuable
[17:40] to somebody who actually wants to mine it.
[17:43] You start thinking about debris fields and
derelict spaceships and those are very valuable
[17:47] to these guys that want engage in salvaging
operations and micro black holes are very
[17:51] interesting to scientists that actually want
to be able to study these things to extract
[17:55] value from them.
[17:56] So, you can see this whole circular ecosystem
to where as you’re going about your business
[18:02] you’re encountering both directly and indirectly
that can feed other parts of the economy.
[18:10] The other thing that I really, really like
about this particular aspect is just the variety
[18:17] that it’s going to bring when you start
getting all these players interacting in all
[18:21] these different ways.
[18:22] CR: Yeah, I had else to say that the other
things, well obviously we talked about mining
[18:27] potentially hitting a gas vent that can cause
an explosion and those sort of things.
[18:35] Cargo and in general just transit we…
[18:40] besides things you can encounter, we very
much have this high fidelity of simulation
[18:49] of various components of your ship and part
of the big pink unicorn of Item 2.0 is the
[18:59] fact that we have age and wear and things
will break down.
[19:04] So, that’s not currently in the game as
you guys are playing it but it’s very much
[19:10] part of the systems that will be part when
the full Item 2.0 comes online.
[19:15] Which means that under stress, being used
a lot say in a long quantum drive like when
[19:23] you’re on a trading cargo run or something,
the items… you’re powerplant, your engine,
[19:32] your thrusters, lights, whatever, they have
aged, they can fail, they can misfire.
[19:37] So, there will definitely be a certain amount
of maintenance keeping your ship running especially
[19:43] in the bigger ships.
[19:44] If you’ve watched any science fiction movie
and you’ve seen Chewie banging the Millenium
[19:51] Falcon or the crew of the Nostromo having
to keep their ship running and stuff like
[19:57] that.
[19:59] That is going to be a gameplay component besides
just things that… you know, pirates you
[20:04] can run across and everything like that.
[20:07] We mentioned that with the real vast scale
that we have in the game, we’re not sort
[20:13] of compressing the star systems the way a
lot of other space games have.
[20:17] I mean we are compressing it because if we
went full real scale then it would take way,
[20:24] way longer for people to travel across one
solar system than I think people would enjoy
[20:29] but we are still having a massive amount of
scale.
[20:33] Much more so than other games will have and
therefore when you’re in quantum drive at
[20:38] 0.2 speed of light, which is very fast you
theoretically could spend half an hour to
[20:44] go from one side of the star system to another
side of the star system.
[20:48] Now likelihood is you’ll never be in quantum
drive for that long because you’ll be pulled
[20:52] out for some reason or there’ll be something
in the way but you could quite easily be in
[20:58] quantum drive for a few minutes, 5 minutes
or whatever, 10 minutes and part of we don’t
[21:02] want you to be bored so you’re running around.
[21:04] There will be things for you to do to keep
your ship running while you’re doing that,
[21:09] so it’s sort of like travel gameplay and
that will be one of the parts of being a long
[21:16] distance explorer or cargo hauler where you’ll
actually have things to do like you would
[21:23] if you were a sea captain on a container ship
crossing the Atlantic ocean or the Pacific.
[21:28] TZ: You mentioned boredom and that kind of
goes back to that sense of discovery I was
[21:32] talking about.
[21:33] We don’t want these things that pull you
out of quantum travel to always be viewed,
[21:39] if you’re currently doing something else,
as an annoyance.
[21:42] We actually want make these things indirectly
entice players to occasionally break off what
[21:48] they’re doing and explore a little bit more.
[21:51] There’s a variety of ways by which we can
do that if you think about I’m currently
[21:54] mining and I’ve basically loaded up my ship
with ore and I’m heading over the refinery
[21:59] and all of the sudden you’re kicked out
of quantum travel, and you got a ping on your
[22:02] radar and all you know is at this distance
is that it’s a ship and at conventional
[22:07] cruise speeds it’s three minutes away.
[22:09] Do you now start spooling up your quantum
engines after you’ve course corrected to
[22:13] get around it and you’re going to go ahead
and jump out but the information that there’s
[22:18] a derelict ship there when you don’t know
anything about it, its current state, whether
[22:22] it’s already been salvaged, what type of
ship it is… that information is worth much
[22:25] less.
[22:26] Or do you go off the beaten path and now you’re
actually going to invest three minutes to
[22:29] go… you were mining but it seems safe, so
I’m going to head over and I’m going to
[22:33] get a little bit closer.
[22:34] Now I know what type of ship it is, I’m
going to go a little bit closer still, now
[22:38] I can actually see it hasn’t actually been
scrapped.
[22:41] There’s a lot of value here, this key that
I have is now very extraordinarily valuable
[22:45] when I go to sell that information to someone
else but I got a little bit too close and
[22:49] it turns out there’s already some other
people.
[22:51] You know pirates that have pulled up or scrappers
and they don’t want anyone else to have
[22:55] this information so they’re moving to basically
take you out so can’t alert other players
[23:01] and bring them there.
[23:03] All of the sudden you wanted to extract a
little bit value about something you incidentally
[23:07] ran into and you ventured a little bit too
closer and now you’ve basically walked into…
[23:12] not something that was intentionally meant
as a trap but it works out that way none the
[23:16] less.
[23:17] CR: Yup, when a lot of this stuff is working
we have a much bigger play field which is
[23:23] in the offing, that’s what we’re working
on right now.
[23:25] I think the gameplay possibilities and fun
going to be much better…
[23:30] well, I mean much better than it is now.
[23:32] I think it’ll be something really special
so that’s going to be cool, so let’s carry
[23:41] on.
[23:42] [23:41] Poison Taco asks: With 2.6 and 2.6.1
Star Marine has started to introduce destructible
[23:49] props in the game.
[23:51] Shattering glass, explosive barrels and etc.
[23:54] The most recent monthly report mentioned that
the team was looking to add more oprs and
[23:58] items that can be destroyed in the game.
[24:00] Presumably this work will carry into the Persistence
Universe.
[24:04] Have you put any thought into how destroyed
props will be restored in the Persistence
[24:08] Universe?
[24:09] Example being, if a player could shatter the
glass windows in Port Olisar, how would the
[24:12] game “reset” to a point where windows
are replaced?
[24:16] CR: So this is something that we’re focusing
on long term.
[24:21] So it’s part of what we’ve talked about,
persistence, we have a very basic version
[24:25] of persistence that we rolled out last year,
but we don’t have full persistence as in
[24:31] the full persistences persisting state of
you as a character, your ship, other items,
[24:37] other locations around the world and persisting
state is important for like whether things
[24:44] are damaged or whether there’s a window
broken or something like that.
[24:48] That is actually part of the roadmap that
we have this year that we’re working on
[24:52] is bringing in persistence more and more persistence
as we go so we’ll be able to persist state
[24:59] pretty much most things as well as where they
are, what their location.
[25:05] So if you go down on a moon and you drop an
item or leave a ship there and leave that
[25:12] area which means it’s going to out of memory
on your computer and then you come back to
[25:16] it, depending on the importance of the item,
we want persist it which means it will be
[25:22] persisted to the online database that we keep
all, you know it’s basically this online
[25:29] cloud save game for the entire universe and
your ship should be there.
[25:35] Now obviously if you drop a gum wrapper and
you leave the area, we don’t want to clog
[25:39] up the game with millions of gum wrapper items.
[25:43] So small items that don’t mean much like
bullet shells or whatever would just be discarded
[25:47] if you left the area, but certain items, especially
items that you would own like a spaceship
[25:52] or something will persist and stay around
and that’s what we call the entity owner
[25:57] manager.
[25:58] So there’s basically a manager that would
manage what’s in your ship, like in the
[26:04] cargo hold or what you’re owning or what’s
inside the space station or what’s on an
[26:09] area in a planet and then that’s what responsible
for managing the persistence of these items
[26:15] and whether they stay or not and then also
is serial and then the items themselves are
[26:20] saving off their stay and so what that means
is for something like Port Olisar if we wanted
[26:26] to allow you to break or destroy common areas
which is another discussion because you know,
[26:33] we don’t want someone blowing out a window
in an area where everyone else is and killing
[26:38] all the people hanging out in the space station.
[26:40] So there will definitely be some areas where
we will not allow you to have player generated
[26:45] mayhem, but there certainly could be the cases.
[26:47] You know you already see in the Comm-Satellite
missions where you’re asked to go and turn
[26:53] them back on or not, well we’re definitely
going to have stuff where there’ll be a
[26:57] space station or a satellite relay that's
been damaged or broken by an AI or maybe even
[27:03] by a player and that will automatically generate
a mission inside our system to say, “Hey
[27:08] come and repair me” and players or AI could
respond to it and they would go there and
[27:13] repair it and then its persistence state would
go from damaged to functional again.
[27:17] TZ: That’s how
[27:18] CR: If it’s broken then the cycle starts
again.
[27:20] TZ: That’s how I read the question which
is basically we’ll have two different tiers
[27:25] of repairs I would say and one of them is
significant enough as such that it warrants
[27:29] the creation of missions and this would be
damaged satellites and things of that sort
[27:34] and if a player doesn’t do it then a NPC
will.
[27:37] Then there’s also just the more stuff, I
would say it’s more cosmetic.
[27:40] Windows getting shot out in Area 18 and there’s
always going to be players there and so it
[27:47] won’t be so much an issue of well when the
players all go away then we can just go ahead
[27:51] and reset things.
[27:53] That will be handled more by just the NPC
community.
[27:54] There will be NPCs that actually do savage,
not salvage, that basically do maintenance.
[28:00] Maintaining of a given area and when you break
glass, when you basically shoot barrels of
[28:09] trash and garbage gets scattered about, some
of the NPCs would have the responsibility
[28:13] of fixing that up, cleaning things up, etc.
[28:14] CR: Cleaning up after the players.
[28:15] TZ: which makes for that much more an interesting
world because not only can you break things
[28:20] in interesting fashion, you can actually see
the NPC community put it back to together.
[28:25] CR: You’re going off to prison because you’re
a vandal.
[28:32] Not a Vanduul, a vandal.
[28:35] [28:34] Lethality asks: Regarding cargo hauling,
can you clarify how the loading and unload
[28:45] of ships will work at both the initial; launch
of cargo system, and what the long-term vision
[28:50] of the cargo system will be?
[28:51] There has been some confusion regarding manual
loading/unloading with all the cool logistics
[28:56] that presents (not to mention all of the maglev
containers and hand jacks!)
[29:01] CR: So I’m thinking Lethality wants to physically
load and unload and this is sort of an extension
[29:09] or along the lines of what we’re been talking
about with the bigger Hull C class a little
[29:14] earlier on in 10 for the Chairman here.
[29:16] So as we were saying, we are going to have
both.
[29:21] So there is going to be physically loading
and unloading and they’ll also be, whether
[29:27] you want to call it automated or AI unloading/loading
in sort of bigger space ports or bigger landing
[29:33] areas because that’s generally what would
happen in those cases, but there’s definitely
[29:37] going to be gameplay that would involve you
say flying out supplies to a remote outpost
[29:43] and there is no people there to help load
or unload and you have to unload it.
[29:47] Or you come across some stuff you want to
get that’s floating in space, you have to
[29:53] load that in manually and do all the rest.
[29:55] So there’s going to be both loading and
unloading physically which we already have
[29:59] shown a small amount of like you looked at
the Gamescom demo that we did of going to
[30:07] the moon after visiting Levski and Delmar
and there were some crates, little containers
[30:13] and we picked it up and were taking it to
the Freelancer we were flying at the time.
[30:19] That is an example of the more granular physical
loading and unloading.
[30:23] There will be equipment that will allow you
to move bigger containers around.
[30:27] So we have some standard size, larger cargo
containers and that will have sort of a grav
[30:34] lev jack stuff and potentially there will
be other, whether we create some vehicles
[30:40] or things like the Argo to move smaller stuff
around and then load it up onto bigger stuff.
[30:46] So I think we’re going to have both, I don’t
know if you want to elaborate on it because
[30:50] I know you already talked a bit about it.
[30:53] TZ: Yeah that’s basically it.
[30:55] To me personally, lik the most interesting
stuff is actually when you’re dealing with
[30:58] smaller quantities that you actually have
to hand load because it just makes for more
[31:02] interesting mission scenarios when you don’t
want to just deliver it to the shop.
[31:06] Now I actually have to basically travel through
space with this material that I procured,
[31:11] land and then I have to do that last leg and
now i’m on foot and it’s just a completely
[31:16] different type of experience, different types
of challenges we can throw at a player.
[31:18] CR: What I would say that like, smuggling
would be a case that you’re not going to
[31:23] have a…
[31:24] TZ: A supertanker full of fuel becomes hard
to justify smuggling.
[31:28] CR: Yeah, well… and there’s going to be
all sizes of you know, there can be items
[31:33] that you can hold in your hand that you would
potentially smuggle or carry it like diamonds
[31:38] or something, could be gems could be an example
of that to a really massive containers that
[31:44] are just full of ore or liquids or whatever.
[31:48] So there’s all kinds of it so there is,
besides big bulk cargo because you have bulk
[31:56] cargo stuff and more bespoke like if I was
collecting I don’t know, sort of rare space
[32:05] truffles.
[32:06] So space truffles don’t come in massive
ton container things, they would be small
[32:10] containers, but they would be worth a lot
of money so that would be something you would
[32:14] probably take personally around and of course
you have smaller things like I was mentioning
[32:19] gems or perhaps contraband or you’re smuggling
drugs or things that you shouldn’t smuggle
[32:25] and those particular ones you would have to
put away in a hidden compartment, that was
[32:30] shielded, hope you don’t get scanned or
boarded by the Advocacy and then when you
[32:34] get on the planet you’re going to have to
Han Solo style sneak it off your ship.
[32:42] That’s the beauty of having it all based
on essentially a kind of character level,
[32:48] first person level because it’s not just
about the ship, it’s about also there’s
[32:53] extra mechanics once you’ve landed and how
do I get past the guards with this stuff and
[32:57] so I think that’s going to add a whole bunch
of like, fun gameplay for people.
[33:02] TZ: Yeah to me, I’ve said before I tend
to get bored fairly easily if I’m not constantly
[33:07] presented with different types of challenges
and so I like the ability to take the high
[33:12] level concept of cargo transport and basically
extend it as such that it doesn’t just involve
[33:18] ships, but you’ve actually got, whether
you’re getting the stuff back to your ship
[33:23] and then do the space travel etc, or if you’ve
landed with your ship and you need to actually
[33:26] get it to the guy in the back alley without
security seeing you or whatever the case may
[33:30] be or you’re carrying something really valuable
and now since you’re actually holding it,
[33:35] you’re at a disadvantage because it takes
you a couple seconds longer to actually drop
[33:39] that, pull your weapon so you’re actually
more vulnerable when you’re running through
[33:43] the CD tunnels of Levski or something like
that.
[33:46] So all of a sudden you can see players starting
to do this mental calculus and thinking, “Well
[33:50] am I going to go on my own?
[33:52] Do I basically try to recruit a few friends,
do I hire an NPC body guard as I’m doing
[33:56] this?”
[33:57] It’s all that variety that to me, really
makes it interesting.
[34:01] CR: Yeah, well..
[34:02] TZ: Every player is going to go about it in
a little bit different fashion.
[34:04] CR: Yeah, I mean..
[34:06] Because obviously I read what people write
out on our forums and elsewhere, but there’s
[34:17] a lot, like people go, “I want to know more
about game mechanics”, but in reality there’s
[34:23] a huge amount of, essentially what people
would normally consider game mechanics or
[34:28] gameplay that comes out us building these
core systems and we’ve really been pushing
[34:36] and it’s been taking longer than obviously
we were thinking it was going to take and
[34:40] partly it’s because we’re building it
to work at a scale and across a huge universe
[34:46] and with millions of players, but our belief
is that if we build these systems that are
[34:54] super flexible.
[34:55] So like we talked about item 2.0 and I think
in the last studio update from L.A. we showed
[35:00] a little prototype of the interaction and
if you take a look at the interaction, that’s
[35:04] not an interaction system that you see in
any FPS game.
[35:08] It’s like you can pick things up and use
them and plug them into something else and
[35:12] put a battery into something to turn it on
or open up compartments and take.
[35:17] So you have this ability to manipulate items
and use them and they have the ability to
[35:22] do what you would normally expect like a battery
provides power and if this radio needed power,
[35:28] then you put it in and now suddenly the radio
can work and maybe that will help you achieve
[35:32] something else.
[35:33] So we’re basically building this system
and a good example of it is like when we’re
[35:38] talking about the smuggling because all the
stuff we’re talking about in general falls
[35:43] out of the system of being able to physically
own and manipulate, put stuff in areas and
[35:50] all the rest of the stuff so you know all
we really have to do on top of that is just
[35:53] determine that these items are illegal and
the AI logic for the law enforcement, the
[35:59] advocacy, whoever is that if they catch you
with it, you’re in trouble, but in general
[36:05] the manipulation, the hiding of it and all
the rest, that all falls out of the scanning
[36:09] stuff that we’ve been working on, the item
manipulation stuff that we’ve been working
[36:13] on.
[36:14] So a lot of our professions we’ve talked
at the base level of what we want to have
[36:17] for 3.0 kind of fall out of these core mechanics
that we worked really, really hard on, but
[36:27] I think once they’re done it’s just going
to provide a platform quite a ways beyond
[36:34] what you can currently do in 2.6.1.
[36:37] And that’s when I get excited.
[36:40] TZ: Yeah we’ve talked about this a number
of times before to where basically you build
[36:44] the system and you get it setup properly,
then it requires very little tweaking to affect
[36:50] a lot of gameplay, a lot of interesting gameplay
potential and this is basically the route
[36:54] we’ve gone since the very beginning.
[36:57] We didn’t want to go the route of having
to custom code each one of these things and
[37:01] then yes the addition of new content becomes
an enormously difficult task, and then you
[37:08] see this in a lot of other games to where
the amount of content, the amount of new content
[37:14] that you can release always lags behind what
the players can actually experience.
[37:18] They usually go out, they experience the new
content and then they run in circles for the
[37:21] next 12 months until the next big update happens
and in this case we wanted to eventually get
[37:28] to the point where we can put in place what
I’d call a functional world and then basically
[37:35] we just give you entry points into that and
everything else more or less falls out of
[37:40] that.
[37:41] CR: We’re getting close.
[37:42] I think people will appreciate it when it’s
there.
[37:48] [37:46] Cap asks: Will we be able to move
between professions fluidly, or will we have
[37:54] to re-qualify for a profession if we decide
to switch to something else?
[37:57] CR: So, that’s a pretty simple one to answer
is absolutely you can move between professions
[38:01] fluidly.
[38:03] We don’t want to gate you as a player, we
don’t have prerolled skills for you.
[38:08] This kinda comes down to the system versus
different mechanics like an RPG game you would
[38:15] design different mechanics or sets for like,
‘oh here’s my smuggling role set, here’s
[38:21] my cargo role set, here’s my mercenary role
set’ and it would have all these separate
[38:26] things.
[38:27] You would be sort of I’m either this or
I’m that whereas with us you’re not, we
[38:32] just basically figure we try to simulate an
open world.
[38:36] Obviously we’re not simulating it to a level
that real life is but we’re trying to approximate
[38:40] it and then we let you pick what you want
so really your ability to perform different
[38:47] professions whether you want to haul cargo
or whether you want to be a mercenary is more
[38:51] down to the equipment you have.
[38:53] Then also there will be some level of access
for missions like for instance, no one’s
[38:59] going to trust you to take a whole bunch of
valuable cargo until you’ve done enough
[39:04] missions that have proven yourself as a reliable
cargo hauler.
[39:07] TZ: That’s the key point to me, that’s
the key point to me which is there are no
[39:14] technical limitations in terms of you doing
this but we still want to have just like in
[39:17] the real world, we want to give players the
ability to progress.
[39:22] By that I mean that there will usually be
entryway points where you can kind of do the
[39:26] junior mining missions, you can do the junior
security missions, whatever it is.
[39:31] Then you will build up a personal reputation
that’s global, everybody knows how good
[39:35] you are in general at this particular profession
versus that one, etc.
[39:40] That opens the door to additional missions
and then there’s another layer beyond that
[39:43] which is you can be an incredibly well known
criminal but that doesn’t mean the mafia
[39:49] boss here personally trusts you.
[39:51] So you get into the personal relationships
to where, well I basically worked my way up
[39:55] and I’ve become…
[39:56] CR: I think we’re answering the second most
popular question.
[40:00] TZ: Ok then.
[40:01] CR: So, yes you’ll be able to move fluidly
between professions.
[40:05] [40:07] Kenzi Snow asks: With the recent progress
update on the Prospector, is it safe to assume
[40:13] that we will have ship based mining to some
degree with the launch of 3.0?
[40:17] CR: So the quick answer is yes it is something
that we’re absolutely trying to achieve.
[40:27] So we think we’ll be able to do some version
of basic mining by 3.0, may not be the final
[40:35] more sophisticated…
[40:36] TZ: Yeah, I would say we’re shuffling...
the full set we’re looking at what we can
[40:38] trade off, what would be more interesting
to the player community, what naturally falls
[40:42] out given the development trajectory.
[40:44] What we can pull in a bit more easily than
what we originally though and you know at
[40:51] the same time what’s basically a little
more difficult so we’re shuffling some of
[40:55] the 3.1, 3.0, 3.2 things around.
[40:56] CR: Maybe move some stuff around cause when
we first talked about 3.0 sort of last half
[41:04] of last year, we originally had in mind a
simpler set of functionality and features
[41:12] that we were going to do.
[41:14] Once we sat down and said, well if we’re
doing this we kind of need to do this, we
[41:17] kind of need to do this and it ended up being
a lot more stuff to really deliver.
[41:26] Basically it was like anyone else’s ship
in game, functionality and I think I said
[41:31] it before but we started with like… so what
we put up on the cards was this much and now
[41:39] we got confluence pages of like this much
at least four or five times as many of the
[41:45] systems and features than we were originally
thinking.
[41:47] So what’s happened is that obviously means
3.0 is taking a bit longer than we were thinking.
[41:52] It also means that certain things like when
ships are available and some of the professions
[41:57] we thought we could get to, we may move things
around because some of the stuff… mining’s
[42:02] an example of this, some of the stuff will
have equipment like ships, whether it be salvage
[42:09] or mining or whatever before.
[42:11] So, mining is definitely one that is on our
radar and would like do it because it’s
[42:18] kind of a basic…
[42:19] it’s a resource collection profession and
could really feed into the ecosystem.
[42:21] TZ: We’re looking to trade that one for
some other stuff, I think that there’s a
[42:28] lot of players that would very much appreciate
that type of game play versus some of the
[42:35] other stuff that we talked about being in
3.0.
[42:36] I think that it would actually give us a much
more well rounded set of professions…
[42:43] initial professions.
[42:45] I would also point out that you mentioned
how we’re thinking about it in a little
[42:49] bit more…
[42:50] little bit larger terms in terms of the sum
total of functionality that you’ll be able
[42:55] to engage in.
[42:58] The initial tier of stuff is actually…
[43:03] there’s an entire tier of functionality
that we think we can actually get to and like
[43:10] you said it’s not the entire mining experience
but it’s still going to give players a whole
[43:15] lot of interesting gameplay.
[43:18] CR: Yeah, definitely.
[43:21] [43:22] Dr_Murray asks: To effectively perform
a job, will we need to qualify for them beforehand,
[43:29] like earning a certain amount of rep, or will
it be as easy to get started as having the
[43:32] right kind of ship?
[43:34] CR: We were kinda discussing this on the previous
question about moving professional between
[43:40] professions fluidly.
[43:42] So, to do a job like if I just wanted to cargo
haul, if I’ve got a ship that can take cargo
[43:49] I’ll be able to get basic cargo missions.
[43:53] If you want to get more interesting or more
lucrative ones then you’ll have to build
[44:00] your rep up whether it’s going to be with
a merchant’s guild or someone that’s a
[44:06] cargo broker or something like that.
[44:08] Much like the mission giver that we sort of
showed at GamesCom last year, we’ll have
[44:14] characters out there that will be giving you
sort of higher grade missions that pay better,
[44:20] that are maybe a bit more interesting, a bit
more challenging.
[44:23] So you sort of have to kind of prove your
mettle and then you get a certain rep as you
[44:27] were saying and you can move onto the more
interesting missions.
[44:32] If you just want to haul cargo and you’ve
got a Freelancer, yeah you absolutely be able
[44:36] to start doing that and then it’s up to
you how far you want to go in that profession.
[44:41] TZ: So, there’s a lot of the smaller ships
to where you could potentially fit a small
[44:45] number of crates, 4,6,8, 20 crates.
[44:50] The amount of cargo you can haul is obviously
going to affect what type of thing you might
[44:56] be looking to transport, in other words…
[44:58] I mentioned earlier, illegal liquors and stuff
which you know a dozen crates of that could
[45:02] actually have a pretty hefty profit margins.
[45:05] When you’re talking about hauling commodities,
probably not so much.
[45:08] You’re usually talking about… unless you’re
talking about some of the more valuable ones,
[45:13] you’re usually talking about greater quantities,
you need a larger ships…
[45:16] those ships in general tend to move slower
therefore you may want a security escort and
[45:21] on and on and on.
[45:27] CR: Ok.
[45:29] [45:24] Daryell asks: Will there be an autopilot
in ships traveling from Point A to Z that
[45:37] will allow me to get up and move around?
[45:41] CR: The answer is yes, we’re already talking
if you’re in quantum drive you’ll eventually
[45:47] have to move around your ship to fix whatever,
a fuel rod that goes bad or there’s a leak
[45:54] somewhere or a fuse breaks.
[45:57] So, we were talking about this before, we
were discussing you pry should be able to
[46:02] set an autopilot like singular point distance.
[46:06] So not just for quantum drive but maybe even
just traveling in normal like SCM or cruise
[46:12] speeds and then you can sort of leave the
helm and walk around.
[46:16] Then of course if your ship is going to hit
something whether it's in quantum drive or
[46:22] regular space mode, it would pull you out,
it would basically stop sort of like one of
[46:28] those auto sensing brake systems.
[46:30] TZ: This kinda segues into the whole crew
functionalities where not only can you go
[46:34] off and do something but you actually have
a navigator, you can turn over control of
[46:37] the ship to him and basically give him some
basic high level commands.
[46:41] In other words, I’m in convention travel
I say go over there, it’s five minutes of
[46:44] flight, I’m going to check on my cargo or
I’m going to affect repairs in engineering
[46:48] because I just took some damage and I can
give him some basic instructions.
[46:52] What do you do if we come under fire?
[46:54] Do you stop, do you basically try to quickly
escape, do you take evasive maneuvers.
[47:01] This kind of goes back to what we were talking
about on one of the previous segments to where
[47:06] you'll be able to control your crew but at
a very high, very macro level.
[47:10] We’re not going to turn it into this micromanagement
game, but if you’ve actually made the investment,
[47:14] you’ve got another pilot, you’ve actually
paid for somebody who’s got a significant
[47:20] level of experience…
[47:21] then you’re all the way back in engineering,
it’s going to take you 60 seconds to get
[47:24] to the bridge, he needs to do something to
not make you a sitting duck for the pirates
[47:30] you just ran across.
[47:31] CR: So the bottom line is, if it’s just
you solo, you do the autopilot.
[47:34] It’s simple point A to point B, will stop
you so you don’t hit anything but if you
[47:43] have crew and you have some… tell him to
take the helm and you go to the back to fix
[47:47] the engine, that crew can operate at a higher
level like they can stop but evade fire or
[47:53] try to escape the area or do something while
you’re heading back to take the helm.
[47:58] TZ: Which is interesting too cause that doesn’t
really involve any new coding on our side
[48:02] because we already got NPCs that know how
to pilot spacecraft.
[48:04] So all we’re really doing is giving you
an interface to this technology that we’ve
[48:09] already set up for other things.
[48:11] Outro
[48:12] CR: Alright there you go.
[48:13] That is the 10 most voted questions on Spectrum
by subscribers for 10 for the Chairman here.
[48:21] So it’s been kind of fun answering the questions
here and haven’t been getting to do this
[48:27] that much recently because I’ve been doing
a lot of travel between all the different
[48:31] studios, but we’re going to try have 10
for the Chairman, it will definitely be happening,
[48:41] but maybe some of the other disciplines we
have and we’ll be using the features of
[48:46] Spectrum which are not only going to get better
to allow you guys to really ask the ones that
[48:50] you care about and not rely on us to pick
the best ones.
[48:55] It’s much better for you to tell us which
ones you really want.
[49:01] So I think on the 10 for the Chairman side
of it we’re going to try to do it at least
[49:04] once a quarter, maybe a bit more.
[49:06] We’ll see what happens on my travel scheduling
and everything, but we’d like to be providing
[49:11] this kind of feedback with you on questions
for the game, we’ve got the Subscriber Town
[49:16] Halls and things like that.
[49:18] So thank you all for supporting us to be able
to shoot this extra stuff and we’re thankful
[49:23] for you guys out there and girls that have
backed the game to allow us to make it and
[49:30] with that I would say, goodnight.
[49:32] What are you going to say Tony?
[49:35] TZ: Just thanks again for all your support.
[49:38] Without you guys none of this would be possible.
[49:43] CR: Alright, bye guys.

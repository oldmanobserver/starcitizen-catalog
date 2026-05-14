# 10 for the Developers: Episode 07

**Video:** https://www.youtube.com/watch?v=9otSsylG3OI
**Date:** 2016-03-21
**Duration:** 26:45

## Transcript

[00:10] Closed Captioning provided by the Imperial
News Network.
[00:24] Elwin Bachiller (EB): Greetings fellow citizens.
[00:27] Welcome to the next episode of 10 for the
Developers, I’m Elwin Bachiller Junior,
[00:31] Lead Vehicle Artist in LA and I’m here with...
[00:33] Patrick Salerno (PS): Associate Technical
Artist Patrick Salerno.
[00:36] EB: And we’d like to thank all of the subscribers
for making this show happen.
[00:40] Without you guys we wouldn’t be able to
put this operation together and you guys really
[00:43] help us develop the game.
[00:46] So patrick, I have a question for you.
[00:49] PS: Yes
[00:50] EB: It’s from EarthFyre.
[00:51] [0:54] EarthFyre asks: What aspects of the
development process do you enjoy, or perhaps
[00:55] find difficult but rewarding?
[00:57] PS: What aspects in particular?
[00:58] Well, I like the challenge mainly.
[01:00] You come in everyday, and it’s a different
type of puzzle to solve.
[01:03] You constantly learn new things, and there’s
new tasks.
[01:06] I need to be specific.
[01:07] Lately I’ve been learning how to put ships
together and then tear them apart again and
[01:11] that’s cool to me.
[01:12] You go in, you see the model, you see how
it’s put together; you yank out the pieces,
[01:16] put them in the xml and then you go in the
engine and you shoot it.
[01:18] Then it blows apart, and there’s explosions
everywhere.
[01:20] EB: Yeah your favorite part is breaking all
of the hard work that me and my team do.
[01:25] PS: Yeah, basically.
[01:27] EB: Yeah, that’s great.
[01:29] Well for me the most rewarding part for me
is just when the whole thing comes together
[01:33] and you finally get to climb into your ship,
turn everything on and take off and fly.
[01:38] Ultimately, I mean obviously I enjoy doing
all the artwork for it and the struggles you
[01:43] have to go through to make that happen, but
when you actually get to play the asset and
[01:47] everything works the way it’s supposed to,
that’s the most gratifying moment for me;
[01:51] cause ultimately I want an awesome game.
[01:55] [1:56] Coldgas asks: What have you been working
on the past few days?
[02:02] Any details you can tell us about?
[02:03] EB: Yeah very easily.
[02:05] The last couple of days I’ve been very specifically
been working on the beginning development
[02:09] stages of the Caterpillar.
[02:11] That means doing some whitebox work, that
means taking some concept work and bashing
[02:17] it in to make sure it all conforms with the
gameplay.
[02:20] It also means starting to do some work and
research on how materials work.
[02:24] So specifically we’re putting a lot of effort
into developing how the paint wears on the
[02:30] metal in the Drake ships because they have
a very different style than Aegis for example.
[02:35] So that’s what I’ve been up to.
[02:38] PS: Ok.
[02:39] For me in particular transitioning from optimisation
to helping create these, they’re called
[02:45] ship set up levels and it’s where you bring
all the pieces together.
[02:48] In terms of optimisation i’ve been finishing
up just the level of detail pass on all of
[02:54] the flyable ships in the game to get a little
bit more performance out of them.
[02:59] Did a segment recently on that, goes into
more detail.
[03:02] But, yeah!
[03:03] Putting all the pieces together, trying to
make the work flow and the pipeline a bit
[03:07] easier for other artists.
[03:10] Just go in, check out the ship, shoot it,
look at it in different lighting conditions,
[03:13] look at all the lights etc, etc.
[03:15] EB: Cool.
[03:17] [3:18] Belzoth asks: Can you define what a
successful ship is to you?
[03:21] PS: To me in particular, well, to me a successful
ship is one that has made it through the entire
[03:28] pipeline in an efficient manner.
[03:31] What that means, in particular, is going through
all of the different phases of development
[03:35] , from concept to actual modeling, texturing,
lighting, the whole destruction system, and
[03:43] just making it into the engine, and performing
optimally.
[03:46] To me, that’s a successful ship.
[03:48] That means that it went through, you know,
who knows how many hands and then ended up,
[03:53] you know, boom, in-game going, ready to go.
[03:55] You don’t have to go back and fix things
that you’ve broken.
[03:56] That’s a successful ship to me.
[03:58] EB: Right, I mean I can agree with that, to
some degree.
[04:01] I know you are really focused on the development
part of it, but I think to me, a successful
[04:05] ship really is a ship that when I first show
it to someone, they’re like holy -, I wanna
[04:12] fly that thing right now.
[04:13] That’s basically a successful ship.
[04:14] And I hope we can develop a lot of those.
[04:22] PS: Definitely.
[04:24] [4:20] Daz asks: When optimizing, are you
aiming for specific number of assets/triangles
[04:30] on screen at any given time?
[04:36] With backers keen in getting into some big
space battles how do you determine what is
[04:39] possible and what ship count to set?
[04:41] Given that it is possible for citizens to
pack a bunch of ships into a small area close
[04:45] to each other causing a huge amount of detail
to be visible at close range, how do you manage
[04:48] this?
[04:49] PS: It’s kind of large question.
[04:51] There’s a lot of variables that come into
it but really … really every ship is a bit
[04:59] different.
[05:00] Every ship is its own puzzle you need to solve.
[05:02] And your general goal is to get them down
to roughly the same level.
[05:05] So what I mean by that is at least just in
terms of level of detail, when the model slowly
[05:09] disappears we’ll focus on that.
[05:11] That’s really important.
[05:12] That saves a lot of performance.
[05:13] When you are up close to someone, you see
the ship: it has all of its internal stuff,
[05:16] all of its external stuff.
[05:17] All that full detail stuff, right?
[05:18] But when you are far away, you may not realise
by you are not rendering all that stuff.
[05:23] Like things get culled: the interior might
disappear, the model might degrade in quality
[05:26] a bit.
[05:27] Not noticeable.
[05:28] That’s where it comes down to.
[05:29] Things like that are where we come in and
we look at the statistics and we say “How
[05:34] is this performing?
[05:35] How many ships can we have in an area?
[05:37] How much detail can we get at various ranges?”
[05:40] And then we just optimise from there.
[05:41] I mean for a specific number?
[05:43] Really there’s not specific number of assets
or … it’s just like, you know, whatever
[05:49] people’s computers can really handle based
on what we use to work with.
[05:54] EB: Yeah.
[05:55] I mean the beauty of having this game run
on a PC is that the more power you have, the
[05:58] more of the beautiful visuals you can have
rendering at the same time.
[06:03] PS: Yes.
[06:04] EB: So part of it is hardware related, but
obviously we’re trying to optimise as much
[06:08] as possible to make the game run as smooth
as possible for as many people as possible.
[06:13] PS: Yes.
[06:15] Exactly.
[06:16] [6:16] Farasalt asks: Has there been a particular
time when you have had to make a decision
[06:23] to not implement the most 'realistic' version
of a part due to technical/design limitations
[06:29] and if yes, why?
[06:31] EB: Interesting, so I spent a lot of time
working on the Merlin and I made that thing
[06:37] so that you’d be able to open up every single
compartment to access, every single component,
[06:42] but for technical reasons I had to rip all
that stuff out at the last minute and cap
[06:48] the holes to get the ship to run because it
was pulling way too many draw calls.
[06:55] So that’s one example of many that we’ve
had in the game, but the process of developing
[07:00] a game often tends to be trying to go as far
as you can with a specific type of idea and
[07:07] developing it as far as you can and realizing,
“Oh man, this isn’t going to work, so
[07:12] how do we solve this problem with less resources?”.
[07:15] So that’s just kind of a theme for game
development in general and that’s what happened
[07:20] with the Merlin.
[07:21] It made me sad because it looked really awesome
when you pushed the play button and everything
[07:24] popped open.
[07:25] PS: I saw it, it was so cool.
[07:26] EB: Yeah it was very cool.
[07:28] Maybe we can get that back into the game at
some point in the future, but at the moment
[07:31] that was one example of what we had to tear
out.
[07:41] [7:37] Amontillado asks: How closely does
LOD work tie into manufacturer style guides?
[07:46] Does knowing what makes a MISC ship a MISC
ship help you create LODs for say the Freelancer
[07:47] and Starfarer more quickly or does it make
little difference?
[07:48] PS: Well actually not really much at all.
[07:49] The concept for the ship and the main base
ship and everything that makes it up is based
[07:53] on the Manufacturer Style Guides.
[07:55] LODs are based on the actual geometry for
the ship itself and the best way to optimise
[08:00] that down to a level where we can include
it with all the other ships and maintain high
[08:04] performance.
[08:05] So LODs aren’t really based on style guides.
[08:07] You might, you might try, you obviously want
to keep the silhouette of the ship and keep
[08:11] it looking like, you don’t want it to just
look blocky.
[08:13] So if this ship has these nice curves along
the edges you don’t want the LODs to just
[08:17] block them out or chop them up, you want them
to maintain that shape.
[08:21] EB: Right.
[08:23] I mean what that does mean though for LODs
there are some ship styles that are more difficult
[08:28] to deal with, because of that.
[08:31] So a very blocky ship, generally speaking
a very blocky ship, would be easier to LOD
[08:37] because you wouldn’t notice the changes
in the surfaces as much as you would as a
[08:40] ship that’s a little bit more rounded, so
yeah.
[08:45] Style Guides don’t affect it, but the Style
Guide does, indirectly affect, how hard it
[08:51] is to make the LOD for it.
[08:52] PS: Correct.
[08:54] [8:55] Wolf_Frakken asks: It was mentioned
on INN by Lando recently that the Caterpillar
[09:00] will be somewhat of a benchmark for Drake
ships as far as design and looks go.
[09:04] From your perspective, could you expand on
that more and how it will affect the Buccaneer,
[09:08] Dragonfly, Herald and Cutlass?
[09:10] How could you see the designs changing based
on what you've done with the Caterpillar?
[09:13] I know it is hard to live up to everyone's
expectations, but without teasing too much,
[09:17] how excited should we be about what is coming
to the rest of the Drake line?
[09:20] EB: You should be very excited for what’s
coming for the rest of the Drake line!
[09:26] And it is incredibly hard to live up to any
expectations for the quality bar for these
[09:32] ships!
[09:33] But it is true that the Caterpillar is going
to be sort of the first, I guess the flagship,
[09:41] ship for Drake.
[09:43] I know we have the Cutlass already out there,
and that was one was developed with techniques
[09:47] that we’ve improved on since they were created.
[09:51] So we will have to go back and sort of upgrade
those to the quality of the new ships.
[09:56] So we’re trying to hit the bar of essentially
what the Retaliator is.
[09:59] So the Retaliator has the latest and greatest
technology built into it and I think the Gladius
[10:04] does as well and the Gladiator might have
most of that in there.
[10:08] So we have a lot of ships that are already
starting to set an example for the kind of
[10:12] quality bar that we want to go for, and also
the techniques that we’re using for various
[10:17] reasons.
[10:19] Damage, variety.
[10:21] Making sure that we keep our texture resolution
high enough requires us to build our ships
[10:25] in a certain specific way.
[10:27] So ships like the Cutlass were not developed
that way.
[10:30] PS: Correct
[10:31] EB: And so it will have to get an upgrade.
[10:32] Now the Caterpillar is sort of the shp that
we are pushing for to define the look of what
[10:39] Drake is.
[10:40] So when we’re done with that one we will
end up having to reuse some of the textures
[10:46] that we developed for it, some of the shape
language, maybe even some assets.
[10:51] Whatever makes it easier for us to develop
the future ships.
[10:54] Then apply that to the Cutlass, do the same
thing with the Herald, do the same thing with
[11:00] the Dragonfly, and the Buccaneer.
[11:04] Ok I wasn’t sure those names were public!
[11:08] So you should expect that the lineup for Drake
will look a family of ships.
[11:13] So if I look at a Dragonfly I should immediately
say “Hey that’s a Drake ship!”
[11:18] For this and that and that reason.
[11:20] So we’re definitely trying to unify the
looks with something we’ve been working
[11:23] on.
[11:24] All of the manufacturers you should be able
to see this now between the Starfarer and
[11:30] the Freelancer.
[11:31] The UK team did a really great job unifying
those two ships.
[11:34] They look like they’re exactly from the
same family.
[11:36] The Reliant also because it used a lot of
assets that were involved in the UK.
[11:42] So we’re trying to do the same thing with
Drake and the Caterpillar is the first one
[11:45] online.
[11:46] PS: Yeah.
[11:47] And then as Elwin was saying as we build more
ships based on our Style Guides you’ll see
[11:52] a more cohesive look come together.
[11:53] ‘Cause the more pieces you have from things
you remade you end up getting a giant library
[11:57] based on these pieces and design aesthetics.
[11:59] So it’s easier for existing artists, new
artists to just come in pick up, go “Oh
[12:03] that’s what that manufacturer looks like”.
[12:05] Based on existing ships versus the hardest
part is coming up with it.
[12:08] You’ve got all these different manufacturers
and each one needs to have a unique aesthetic
[12:12] EB: Yeah, yeah, cool.
[12:17] Next question
[12:18] [12:18] Cavguy asks: One of the fascinating
things for me watching you guys build Star
[12:22] Citizen is how you pull it together.
[12:25] Can you talk through the changes to the ship
pipeline over the last year and how it's reduced
[12:29] the time it takes to get a ship from concept
to flight?
[12:32] Also, do you think there is room for improvement
(maybe we can get the Carrack sooner)?
[12:37] PS: Yeah.
[12:38] Definitely.
[12:39] I think you might actually be a bit better
answering this question per se but from what
[12:42] I’ve seen from the ship pipeline as a whole,
from Concept to Tech Design to Implementation,
[12:47] we’ve definitely made progress.
[12:49] Because we’re working more closely with
our other studios, we do a lot of the tech
[12:54] and the design and help with the engineering.
[12:56] And it’s all just coming together and you’re
seeing things, higher quality, more complicated
[13:02] assets, coming out quicker.
[13:04] Right?
[13:05] Versus concepting it, building the tech, putting
the tech into practice, experimenting on it,
[13:10] breaking it, fixing it, and rebuilding it.
[13:12] Right?
[13:13] The pipeline’s come together which means
assets are getting pushed out faster.
[13:16] EB: Yeah.
[13:18] Absolutely.
[13:19] To speak specifically about what some of the
changes … what some of the changes have
[13:24] been to the pipeline specifically in developing
the ships.
[13:28] We’ve moved slightly away from a paradigm
where we had concept fully developed for a
[13:37] ship before production started going in to
work for it.
[13:40] So now what we’re doing is we’re spending
a lot of time upfront working with Game Design
[13:45] to make sure that all of the mechanics that
the ship needs to comply with, or the space
[13:51] that’s required for the player to walk around
in if it has an interior area, is all blocked
[13:55] out ahead of time, and before we even give
that to the concept artist, to make sure that
[14:00] when a concept artist does his work it all
fits with the game rules and we don’t have
[14:04] to worry about having to too drastically changing
the concept that’s already been developed.
[14:11] Changes will always happen but doing it this
way allows us to catch any problems really
[14:15] early on before anybody spends weeks or months
of their lives developing an assets that then
[14:20] has to be reworked in the future.
[14:23] So for the Carrack specifically we have plans
to build that “soonish”.
[14:31] That’s the best I can say about that.
[14:34] But right now Anvil is one of the those manufacturers
that still needs to have its library filled
[14:41] out.
[14:42] So Aegis, for example, because of the Retaliator
and some of the other ships in their line,
[14:46] they have quite a bit of content to draw from
to develop the newer ships a bit faster.
[14:51] With Anvil we’re not quite at that point
yet and so when we get there we will be able
[14:57] to hit our stride and be able to develop ships
faster.
[15:00] What will most likely happen is the Carrack
will probably help develop that library for
[15:05] us because it will be the first large, multi-crew
Anvil ship that we probably work on.
[15:12] And so that’s how we’ll develop our assets
to then, in the future, be able to build ships
[15:17] even quicker.
[15:18] [15:21] Johan_26 asks: Two separate questions:
On the development side, are there many manufactured
[15:29] hull pieces that are shared across the ships
of a single company?
[15:32] Like hatch, thrusters, seats, doors, panels,
etc?
[15:38] On the game side, visually speaking, how customizable
are the ships in general?
[15:41] (like in a Need for Speed underground manner).
[15:43] I know about the possibility to change the
seats but could we expect some more customizations
[15:47] like an interior paint job, switching to fancier
escape pods/beds, changing the whole dashboard,
[15:51] more powerful headlights, better kitchen,
etc.
[15:53] EB: I think it’s a tentative yes to that
second part.
[15:59] Just to hit on the whole manufacturer sharing
assets.
[16:03] That absolutely a yes.
[16:05] It’s almost, it’s absolutely necessary
that we do something like that in order to
[16:10] develop the number of ships that we have to
make.
[16:13] So what that means is that we will have escape
pods that are common to Aegis for example
[16:19] and you should expect to see those escape
pods in other Aegis ships.
[16:23] Docking collars, same thing.
[16:27] You may even see chairs that are shared among
the same manufacturer.
[16:31] Right now, you will notice that on the Freelancer,
you’ve got a specific type of chair which
[16:35] also exists on the starfarer, which a very
close version of that also exists on the Reliant.
[16:41] And there's a couple of reasons for doing
that.
[16:43] One, it keeps the look and feel the same so
you can identify what manufacturer built your
[16:48] ship.
[16:49] Two, we can actually build a ship much faster.
[16:51] Right, sharing of assets within manufacturers
is absolutely something we have to do.
[16:57] In terms of customization, we are still working
on what the full range of customization is.
[17:04] The most obvious and sort of start of the
customization process that we really want
[17:09] to hit is allowing people to change the paint
jobs on their ships.
[17:13] We’re exploring a couple different ways
of doing this.
[17:17] We haven’t quite implemented a full working
version of it yet, but it’s something we
[17:21] are building our current ships to support.
[17:24] PS: Yup, no, definitely, just on Elwin’s
note, I mean part of the development process
[17:30] is making something, trying out different
techniques for it, and find out whether it
[17:35] works.
[17:36] So we do a lot of R&D into different ways
to do it.
[17:39] Some methods make the cut, some don’t.
[17:41] We used to have a paint system that was...
it was a little harder to work with.
[17:45] We had paints, we had it working, and it’s
just, it’s a juggle.
[17:49] You say “does this help the pipeline?”,
“is there another way we can do this faster?”.
[17:52] That constant iteration is kind of why we
like working here as well.
[17:57] You can make changes to things, and find a
better way to do it.
[18:00] You’re not just stuck somewhere, you know?
[18:02] You might have to go back and change old stuff
occasionally, but in the grand scheme of things,
[18:06] it’s gonna help the entire pipeline.
[18:07] So, we’re making everything basically as
modular as possible within sensical terms.
[18:13] So, should be able to go out and get other
parts.
[18:17] So definitely, modularity is something we
already have and can expand upon.
[18:20] We just have to make sure it’s a good use
of time management and et cetera, et cetera.
[18:24] EB: Right, right, and just to touch on what
you mentioned of us previously having a paint
[18:29] system.
[18:31] That system was harder to work with.
[18:33] But it also became…
[18:36] it created a conflict with the way we wanted
to do damage, just because of the specific
[18:40] implementation method and as a result of that,
we went in favor of the damage to find a different
[18:47] way of doing the customization of the paints.
[18:50] PS: ‘Cause the damage is so much cooler
[18:51] EB: Well, yes it is.
[18:53] PS: Bomb metal melting away and everything!
[18:55] So instead of saving...
[18:56] basically, the way it works is you have UV
maps, if anyone knows what those are, it’s
[19:00] where the textures get painted onto and the
way the tech works is the damage shader kind
[19:05] of, it works over the UV maps, but you also
needed the UV, the paints in the UV too.
[19:09] So they were kind of sharing the same space,
right?
[19:11] So we were like well, what do we pick?
[19:14] Then we’re like “Well, the paints can
probably be done a more another way, and more
[19:17] efficiently, and this is just the best way
for the damage system to work”.
[19:20] That’s how, kind of how where opportunity
calls for it.
[19:22] EB: That also, I mean, that also kind of touches
back in the “what features have we decided
[19:26] not to implement”.
[19:29] That is one of them.
[19:30] Yeah, so we’re working on a much better
way of allowing customization which… the
[19:36] goal is to let people not only change, you
know, at least several different colors on
[19:40] their ship, but also attempt to allow them
to pick, decals for their wings, or whatever,
[19:46] that way they have like a massive happy face
or whatever they want to put on it.
[19:50] So we have some prototypes of that working
and I think it’s going to be really cool,
[20:05] but more work has to go into it.
[20:09] [19:59] Eschatos asks:
A) When you're designing for this, is the
[20:14] final damage state of a ship intended to reflect
specific damage?
[20:17] (For example, is the tail/cargo section being
destroyed because that's where it was hit?)
[20:23] B)Is the intention that we'll be able to survive
something like that if we're not in the damaged
[20:24] section of the ship and have a spacesuit on?
[20:25] C) And thirdly, do you have to consider the
repair mechanic when designing damage states?
[20:26] PS: Yes.
[20:27] That is pretty much exactly how it works.
[20:28] What we’re doing on the tech design side
and this is going to get more in depth as
[20:31] we go too.
[20:32] You hit a specific location damage can transfer
from that location to another location.
[20:37] There’s probabilities.
[20:38] So if you hit like a wing and there’s components
under there, like shield generators or something.
[20:42] That can be damage and that creates a rippling
explosion that goes and blows up something
[20:46] else.
[20:47] So we’re trying to create a very dynamic
damage system.
[20:49] So at a base level things break off, wings
snap off, tails snap off, body snaps in half,
[20:55] three main parts well three or four is like
nose, neck, body, tail.
[20:59] So when your ship is finally 100 percent destroyed
if your neck is destroyed you’re just boom!
[21:04] You just kind of blow up.
[21:05] But if your tail broke off you might still
you know airlock, thunk, and try and coast
[21:11] back to base.
[21:12] It depends on how it’s going.
[21:13] If you have a critical series of events that
happen that might destroy your whole ship.
[21:17] EB: Yeah.
[21:18] I mean if you trigger catastrophic damage
it’s game over!
[21:20] PS: Yeah it’s game over your whole ship’s
going to blow up.
[21:23] So at the end yes there should be areas that
you can see, especially like in non 100 percent
[21:29] destroyed state.
[21:31] You should be able to see exactly where you
got hit during your fight.
[21:34] But at the end when your ship is blown up
you know you got shot in the wing but it’s
[21:38] listing, you didn’t get shot in the tail.
[21:40] And then 100 percent is a complete model swap
into the husk chunks at the moment with an
[21:45] overlay VFX that bursts out.
[21:46] It’s all blended together so you can’t
really tell.
[21:49] But unless you’re going back for repairs.
[21:52] You don’t really need to see that one area
where you got shot in the wing.
[21:55] It’s all about performance.
[21:56] How can we keep realistic yet persistent damage?
[22:00] EB: The next part of this question is: Is
the intention that we’ll be able to something
[22:10] like that if we’re not in the damaged section
of the ship if we have a space suit on?
[22:15] I think you kind of touched on that?
[22:16] PS: I did kind of touch on that.
[22:18] Yes it is in the design board.
[22:20] Right now you just blow up and die.
[22:21] Your spaceship’s blown up right?
[22:23] As the damage and how it transfers get more
in depth we can end up just probably saying
[22:29] “Airlock door closed you’re all safe”.
[22:31] I don’t know honestly I don’t really have
100 percent specifics on that.
[22:35] But I do know conceptually it’s possible
and it’s what we’re leaning towards ‘cause
[22:40] that’s realistic right?
[22:41] EB: Yeah.
[22:42] I think that’s ultimately the goal.
[22:44] Obviously game design is still working on
the specifics of how that functions.
[22:47] Because as per the example the back of your
ship gets blown off and that’s where all
[22:51] your power plants are, and you’re stuck
in the front but you’ve got no power does
[22:57] that mean you’re basically stuck on a floating
husk?
[23:00] So there’s more than just the realistic
aspect of the game, we have to worry about
[23:05] what the implications for the gameplay are
as well.
[23:10] Okay so the last part of Eschatos question
is and thirdly, do you have to consider the
[23:15] repair mechanic when designing Damage States.
[23:18] EB/PS: Yes
[23:20] PS: Yes you do because you have to think of
what’s going to need to be repaired, what’s
[23:24] going to be left behind even if the mechanic
isn’t full implemented, you should still
[23:29] think how is the player going to repair this,
which of the player will see, what tools are
[23:35] at his disposal.
[23:36] It’s a big difference, just think conceptually,
okay this isn’t how it is or anything, but
[23:42] if you have a spaceship and it just flies
into a hangar and a bunch of nanobots repair
[23:45] it or something that’s one way where you
don’t have to be too interactive, but if
[23:48] you’re a dude with a blowtorch and you’re
up there, the ship is a completely different
[23:52] spot; you’re getting completely different
visual, all sorts of stuff is going on.
[23:56] EB: Yeah.
[23:57] That repair mechanic is still being fleshed
out.
[23:59] PS: Right
[24:00] EB: I think it’s going to be really cool.
[24:01] It's a lot more dynamic than what we had before.
[24:03] It’s important to keep in mind our damage
system is not what we started with.
[24:08] So we use the term damage states, but it doesn’t
actually reflect what it is anymore
[24:14] PS: Right
[24:15] EB: Right, It’s a lot more organic than
that.
[24:16] So previously we did have something called
damage states where you’d shoot the wing
[24:20] and there would be four different version
of the wing and different states of damage.
[24:24] PS: 25/50/70 and 100
[24:25] EB: Exactly, that’s gone.
[24:28] So the way we’re doing it now is we're actually
building the internal supports for that wing
[24:34] and when we shoot the whole surface it will
blow a hole to through it to reveal the interior.
[24:38] There’s no damage state, it’s just how
much damage has that part taken.
[24:43] PS: Correct and the only damage state is the
really the 100 percent at this point.
[24:46] Are you destroyed or not?
[24:48] EB: Right
[24:49] PS: And that’s when you get the detach command
and then boom the wing or tail goes flying
[24:53] off, but until then, it’s mainly just the
shader doing the work and it’s hitting and
[24:57] it’s rippling out and it’s tearing apart
and then it’s transparent and you can see
[25:01] the metal ribbing of the inside of the ship
and then that shows a more visual version
[25:06] of the wear.
[25:07] So it’s less memory because you don’t
have four different models per separate part
[25:12] of the ship anymore that just has to do damage.
[25:14] EB: Right
[25:15] PS: And it creates a better visual due to
the way the shader works.
[25:18] EB: Yeah
[25:19] PS: So I mean we’re working on the pipeline
all the time, optimizing the tech, coming
[25:21] up with new tech, implementing that and so
far it’s looking really cool.
[25:25] EB: Yeah it’s very awesome and it's also
a lot more satisfying to see the damage happen
[25:29] where you shoot.
[25:30] PS: Yes
[25:31] EB: Whereas previously that wasn’t the case.
[25:32] You could shoot the tip and the base of the
piece would start to break off.
[25:36] Outro
[25:37] EB: So thanks for joining us on this episode
of 10 for the Developers.
[25:41] I’m Elwin Bachiller Junior, Lead Vehicle
Artist in La with
[25:44] PS: Patrick Salerno, Associate Technical Artist.
[25:47] EB: And thanks again to all the subscribers
for making this show happen, you guys rock.
[26:12] PS: Take care.

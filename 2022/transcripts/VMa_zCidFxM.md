# Design Brief - Investigations | Journey to 4.0 (CitizenCon 2952)

**Video:** https://www.youtube.com/watch?v=VMa_zCidFxM
**Date:** 2022-10-08
**Duration:** 10:51

## Transcript

♪ [music] ♪
- [Elliot] Hi, my name is Elliot Maltby.
I'm a principal systems designer.
I work with Luke Pressley on the mission feature team.
I'm here today to talk about one of the
new mission types we're prototyping.
- [Luke] So, this is an early look, a new mission type.
And usually, we don't give you a look this early.
It's because we don't have the nice shiny visuals.
- But people keep asking to see the design brief,
so we thought, "What the heck, we'll let you see."
♪ [music] ♪
- So, our mission is built out of objective types and
the mission type really is just the most critical or
challenging objective in that mission.
- Currently, we have a number
of mission types in the game.
Some of these are not built in that modular sense.
Some of these are very much bespokely
built to test out a feature at one time.
The original P.I. Wanted is one of those.
The current mission types that do exist is
we have deliveries which are essentially a
form of collect and drop off.
We have eliminate missions which is just kill someone
and eliminate ship missions which is go there and kill,
you know, destroy a ship that
has a person inside of it.
And there's many more.
The way we see missions is they're
comprised of little bits of gameplay.
So, for example, we have missions where you're sent
to kill a singular person or pick up a box or kill a
bunch of enemies.
So how we build our missions
is we combine these together.
So we'll have missions where you have to pick up a box,
but we'll have enemies there that you have to kill
as they're kind of like an
obstacle for you to get around.
- That isn't to say that you can't build
a mission out of a single objective.
The assassination mission, for instance,
has one objective, assassinate a target.
But even the most, like, simplistic mission,
like the delivery mission is actually built
out of two objectives.
There's the collection of the item
and the delivery of the item.
And if we made the collection of
that item, like, even more difficult,
we'd refer to it as a collect mission
rather than a deliver mission.
- So our objective types, for the time
being, have been pretty simple.
You know, kill this person, go here, do this until now.
We're now looking at doing one of the most complex type
of objective and gameplay things we've tackled in MFT.
With that said, we're working on a new
mission type, and that's investigation.
♪ [music] ♪
Currently, in the game, the player can
feel like a bounty hunter, a mercenary,
a person who does deliveries, you know, a cargo hauler.
We want to make them feel like
a detective as a new route.
We're expanding constantly.
We're building mining, salvage, and
detective is going to be our focus in MFT.
- The experience that we want to give players
with the Investigation Mission is that they feel
like a detective, that they feel like they're
collecting evidence that will ultimately answer the
question that has been posed to them, and
that they're able to kind of search through the
evidence and find the red herrings
and choose the right answer.
- So what we want is we want to build a
mission that requires you to have to think,
requires you to have to look around,
search your environment in detail,
look at each individual clue and make sure you fully
understand it before you make your decision
as the detective.
- And there'll also be red herrings thrown in there.
So, the evidence will really have to be poured through,
poured over to be able to determine whether it's
actually credible or not.
We also wanted to create narratives around our
locations that we haven't done before, like, really dig
into, like, why has this derelict become a derelict or
why have all the ships crew come to be dead or why
has this cargo gone missing?
At the core of this mission, we're really
asking the player to use their brain
rather than they're going over a ship.
- So for this mission type, I don't
want break room players along.
I want you to feel like a detective.
I will give you a story, I will give you
little bits of clues and you have
to make up this full sort of painting and
decide exactly what has happened here.
And then the rest of the decision is on yours.
I might not tell you if it's wrong or right.
You might find out.
The idea is that you feel like a detective and you're
so sure of your decision that you're going with that.
♪ [music] ♪
So the next stage in this
whole process is building a pitch.
We have to come up with our
ideas, how we want it to work,
and then we have to present it to CI, Tony, and Todd
and make sure they're all happy with it and all of our
visions are aligned.
So, when we're building the pitch, we start off
by going over the ideal experience we want
for the player.
We start off with the most advanced things, all the
gameplay mechanics we could dream of to bring
this sort of role to life as a detective.
And then we have to start looking at stripping
it back to see when we can release it,
what's the minimum viable product for this experience?
- And in the case of the investigation
mission, we came up with two.
So the first pitch is extremely simple and it revolves
around being able to find a definite answer,
like something that is undisputable.
For instance, we came up with a mission where there is
a repairman that's gone missing and you can go to his
office and you can find some correspondence that will
lead you to another place which will have his work
itinerary on there.
And they're all crossed off until one.
And if you're smart, you'll go to that location,
and should you go to that location and do a
little searching, you'll find his body there and he's
been electrocuted fixing the final thing on his list
and there's your definitive ending.
Whereas the second pitch, it's more about
allowing the player to choose when
they're done, like when they think
they have solved the mystery.
And the way we do this is we scatter evidence around
the location and clues that lead you to that evidence.
And obviously, there can be red herrings in there.
You can get your answer up to a credible
state which might still be the wrong answer,
but you can complete the mission then.
Whereas if you'd have carried on digging a little more,
maybe found a few more clues and followed them,
you would perhaps find an indisputable
piece of evidence, like, you know,
I did it kind of thing that would
get you the bonus for the mission.
And both pitches had their strengths and weaknesses.
For the simple pitch, we could see how easy it was
to scale and it involved less complex narrative work.
But we ultimately decided to go for the second because
we liked the idea of giving the player the agency
to decide when they were done.
♪ [music] ♪
So we're in the prototype phase with the Investigation
Mission which is more important than ever because it's
such a complex mission and we need to ensure that it's
scalable and that other designers can make their own
mysteries with it.
- With the pitches, we can now prototype and sort of
get that gameplay feel and see which one we want
to explore more for the player's experience.
Some of the hardest points of this
are going to be the scalability of it.
An investigation at its core is a story, so
the story should always be at the forefront
and the focus.
- So the first stage of prototyping was
to prove that we can make it, like,
a mystery happen in the most restricted
location we have, which was like a derelict.
So this kind of interplay between the crew of it.
From there, we're going to expand so that it takes into
account more locations and uses all of the evidence
retrieval interactions that we currently have.
For instance, you can kill a
guy and get information off him.
You can find a corpse, get information off it.
You can loot a box, get information off it.
And then we'll be prototyping the newer
ways of getting information off the things.
We're looking into using the met gun to find
the name and cause of death of people,
and we're looking into being able to find the
mobiGlas in inventory and download data from it.
- One of the hardest things that
we have to figure out is the story.
The investigation will live and die by its story.
So we work very closely with the writers to try
and figure out what kind of story we want to tell,
what kind of clues we want to give.
And then after that point, we look at sort of
what obstacles we want to put in your way.
Keypad locked doors, enemies like
traversal puzzles, things like that.
- The main challenge for creating this mission is
ensuring that the player has enough guidance
to complete it without putting
mission markers on everything.
Like it is supposed to be about them
searching, figuring clues out for themselves,
and finding the answer themselves.
- We want you to still feel like that detective.
But ensure that we're giving you enough
information in the ways that we can.
- And we're working with a UI designer on the new
mobiGlas, which should really help with this.
♪ [music] ♪
- So, this has been a video design
brief on our investigation missions.
We're really excited to bring these to you.
We wanted to give you an early look to let you know
what we're thinking and see what you're thinking
about these as well.
- And we're really excited about it because
it will allow us to inject a lot more story
into a persistent universe.
- So with everything we do, iteration
is a key part of how we build things.
So by the time you see this and maybe by the time
it comes out, it might have changed drastically.
We don't know yet.
We're still working on it and figuring out the fine
details, but player experience and player agency is
at the focus of what we're trying to achieve.
- We're really excited and hope you are too.
- And I'm sure we'll be talking
about this again in the future.

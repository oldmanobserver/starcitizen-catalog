# Design Brief - Investigations | Journey to 4.0 (CitizenCon 2952)

**Video:** https://www.youtube.com/watch?v=VMa_zCidFxM
**Date:** 2022-10-08
**Duration:** 10:51

## Transcript

[00:00] ♪ [music] ♪
[00:07] - [Elliot] Hi, my name is Elliot Maltby.
[00:09] I'm a principal systems designer.
[00:11] I work with Luke Pressley on the mission feature team.
[00:13] I'm here today to talk about one of the
new mission types we're prototyping.
[00:17] - [Luke] So, this is an early look, a new mission type.
[00:20] And usually, we don't give you a look this early.
[00:23] It's because we don't have the nice shiny visuals.
[00:25] - But people keep asking to see the design brief,
so we thought, "What the heck, we'll let you see."
[00:30] ♪ [music] ♪
[00:38] - So, our mission is built out of objective types and
the mission type really is just the most critical or
[00:47] challenging objective in that mission.
[00:50] - Currently, we have a number
of mission types in the game.
[00:53] Some of these are not built in that modular sense.
[00:56] Some of these are very much bespokely
built to test out a feature at one time.
[01:00] The original P.I. Wanted is one of those.
[01:03] The current mission types that do exist is
we have deliveries which are essentially a
[01:07] form of collect and drop off.
[01:10] We have eliminate missions which is just kill someone
and eliminate ship missions which is go there and kill,
[01:16] you know, destroy a ship that
has a person inside of it.
[01:19] And there's many more.
[01:20] The way we see missions is they're
comprised of little bits of gameplay.
[01:24] So, for example, we have missions where you're sent
to kill a singular person or pick up a box or kill a
[01:31] bunch of enemies.
[01:32] So how we build our missions
is we combine these together.
[01:35] So we'll have missions where you have to pick up a box,
but we'll have enemies there that you have to kill
[01:40] as they're kind of like an
obstacle for you to get around.
[01:43] - That isn't to say that you can't build
a mission out of a single objective.
[01:48] The assassination mission, for instance,
has one objective, assassinate a target.
[01:52] But even the most, like, simplistic mission,
like the delivery mission is actually built
[01:58] out of two objectives.
[02:00] There's the collection of the item
and the delivery of the item.
[02:04] And if we made the collection of
that item, like, even more difficult,
[02:10] we'd refer to it as a collect mission
rather than a deliver mission.
[02:15] - So our objective types, for the time
being, have been pretty simple.
[02:20] You know, kill this person, go here, do this until now.
[02:24] We're now looking at doing one of the most complex type
of objective and gameplay things we've tackled in MFT.
[02:31] With that said, we're working on a new
mission type, and that's investigation.
[02:35] ♪ [music] ♪
[02:40] Currently, in the game, the player can
feel like a bounty hunter, a mercenary,
[02:46] a person who does deliveries, you know, a cargo hauler.
[02:50] We want to make them feel like
a detective as a new route.
[02:54] We're expanding constantly.
[02:56] We're building mining, salvage, and
detective is going to be our focus in MFT.
[03:01] - The experience that we want to give players
with the Investigation Mission is that they feel
[03:06] like a detective, that they feel like they're
collecting evidence that will ultimately answer the
[03:12] question that has been posed to them, and
that they're able to kind of search through the
[03:16] evidence and find the red herrings
and choose the right answer.
[03:23] - So what we want is we want to build a
mission that requires you to have to think,
[03:29] requires you to have to look around,
search your environment in detail,
[03:33] look at each individual clue and make sure you fully
understand it before you make your decision
[03:39] as the detective.
[03:41] - And there'll also be red herrings thrown in there.
[03:44] So, the evidence will really have to be poured through,
poured over to be able to determine whether it's
[03:51] actually credible or not.
[03:53] We also wanted to create narratives around our
locations that we haven't done before, like, really dig
[03:59] into, like, why has this derelict become a derelict or
why have all the ships crew come to be dead or why
[04:07] has this cargo gone missing?
[04:08] At the core of this mission, we're really
asking the player to use their brain
[04:12] rather than they're going over a ship.
[04:14] - So for this mission type, I don't
want break room players along.
[04:17] I want you to feel like a detective.
[04:21] I will give you a story, I will give you
little bits of clues and you have
[04:26] to make up this full sort of painting and
decide exactly what has happened here.
[04:33] And then the rest of the decision is on yours.
[04:35] I might not tell you if it's wrong or right.
[04:37] You might find out.
[04:39] The idea is that you feel like a detective and you're
so sure of your decision that you're going with that.
[04:46] ♪ [music] ♪
[04:49] So the next stage in this
whole process is building a pitch.
[04:53] We have to come up with our
ideas, how we want it to work,
[04:56] and then we have to present it to CI, Tony, and Todd
and make sure they're all happy with it and all of our
[05:02] visions are aligned.
[05:03] So, when we're building the pitch, we start off
by going over the ideal experience we want
[05:08] for the player.
[05:09] We start off with the most advanced things, all the
gameplay mechanics we could dream of to bring
[05:14] this sort of role to life as a detective.
[05:17] And then we have to start looking at stripping
it back to see when we can release it,
[05:22] what's the minimum viable product for this experience?
[05:26] - And in the case of the investigation
mission, we came up with two.
[05:29] So the first pitch is extremely simple and it revolves
around being able to find a definite answer,
[05:36] like something that is undisputable.
[05:39] For instance, we came up with a mission where there is
a repairman that's gone missing and you can go to his
[05:46] office and you can find some correspondence that will
lead you to another place which will have his work
[05:55] itinerary on there.
[05:57] And they're all crossed off until one.
[06:00] And if you're smart, you'll go to that location,
and should you go to that location and do a
[06:04] little searching, you'll find his body there and he's
been electrocuted fixing the final thing on his list
[06:11] and there's your definitive ending.
[06:13] Whereas the second pitch, it's more about
allowing the player to choose when
[06:20] they're done, like when they think
they have solved the mystery.
[06:26] And the way we do this is we scatter evidence around
the location and clues that lead you to that evidence.
[06:37] And obviously, there can be red herrings in there.
[06:41] You can get your answer up to a credible
state which might still be the wrong answer,
[06:48] but you can complete the mission then.
[06:51] Whereas if you'd have carried on digging a little more,
maybe found a few more clues and followed them,
[06:56] you would perhaps find an indisputable
piece of evidence, like, you know,
[07:02] I did it kind of thing that would
get you the bonus for the mission.
[07:08] And both pitches had their strengths and weaknesses.
[07:11] For the simple pitch, we could see how easy it was
to scale and it involved less complex narrative work.
[07:22] But we ultimately decided to go for the second because
we liked the idea of giving the player the agency
[07:27] to decide when they were done.
[07:31] ♪ [music] ♪
[07:34] So we're in the prototype phase with the Investigation
Mission which is more important than ever because it's
[07:41] such a complex mission and we need to ensure that it's
scalable and that other designers can make their own
[07:46] mysteries with it.
[07:47] - With the pitches, we can now prototype and sort of
get that gameplay feel and see which one we want
[07:53] to explore more for the player's experience.
[07:57] Some of the hardest points of this
are going to be the scalability of it.
[08:01] An investigation at its core is a story, so
the story should always be at the forefront
[08:07] and the focus.
[08:08] - So the first stage of prototyping was
to prove that we can make it, like,
[08:13] a mystery happen in the most restricted
location we have, which was like a derelict.
[08:18] So this kind of interplay between the crew of it.
[08:23] From there, we're going to expand so that it takes into
account more locations and uses all of the evidence
[08:32] retrieval interactions that we currently have.
[08:35] For instance, you can kill a
guy and get information off him.
[08:38] You can find a corpse, get information off it.
[08:40] You can loot a box, get information off it.
[08:44] And then we'll be prototyping the newer
ways of getting information off the things.
[08:51] We're looking into using the met gun to find
the name and cause of death of people,
[08:56] and we're looking into being able to find the
mobiGlas in inventory and download data from it.
[09:02] - One of the hardest things that
we have to figure out is the story.
[09:06] The investigation will live and die by its story.
[09:09] So we work very closely with the writers to try
and figure out what kind of story we want to tell,
[09:14] what kind of clues we want to give.
[09:16] And then after that point, we look at sort of
what obstacles we want to put in your way.
[09:22] Keypad locked doors, enemies like
traversal puzzles, things like that.
[09:29] - The main challenge for creating this mission is
ensuring that the player has enough guidance
[09:35] to complete it without putting
mission markers on everything.
[09:39] Like it is supposed to be about them
searching, figuring clues out for themselves,
[09:45] and finding the answer themselves.
[09:47] - We want you to still feel like that detective.
[09:50] But ensure that we're giving you enough
information in the ways that we can.
[09:54] - And we're working with a UI designer on the new
mobiGlas, which should really help with this.
[09:59] ♪ [music] ♪
[10:03] - So, this has been a video design
brief on our investigation missions.
[10:07] We're really excited to bring these to you.
[10:09] We wanted to give you an early look to let you know
what we're thinking and see what you're thinking
[10:13] about these as well.
[10:14] - And we're really excited about it because
it will allow us to inject a lot more story
[10:18] into a persistent universe.
[10:20] - So with everything we do, iteration
is a key part of how we build things.
[10:26] So by the time you see this and maybe by the time
it comes out, it might have changed drastically.
[10:30] We don't know yet.
[10:31] We're still working on it and figuring out the fine
details, but player experience and player agency is
[10:38] at the focus of what we're trying to achieve.
[10:41] - We're really excited and hope you are too.
[10:44] - And I'm sure we'll be talking
about this again in the future.

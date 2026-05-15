# CitizenCon 2951: The Sounds of Space

**Video:** https://www.youtube.com/watch?v=URuzW0a8aY4
**Date:** 2021-10-09
**Duration:** 35:41

## Transcript

[00:02] CITIZENCON
[00:08] B-Roll
[00:09] - [Graham] We're opening up lots of possibilities.
[00:11] And if you wanted, you could change
the whole aesthetic of the game.
[00:15] - [Adi] I think it's going to bring
a lot more life to locations.
[00:18] TITLE CARD
[00:25] - Hi, my name is Graham Phillipson,
and I'm lead audio programmer here
[00:28] at Cloud Imperium Games.
[00:30] - Hello, I'm Adi Keltsh, and I am one of the sound
designers working at Cloud Imperium Games.
[00:35] - And we're here to talk about some of the big
developments we've got going on in audio tech,
[00:39] specifically CIG Audio and Claudius,
which is a new audio engine layer,
[00:42] an associated tool that we hope will greatly
improve the development experience of our
[00:47] Sound Design team.
[00:48] - Getting started on this project can be quite
challenging due to the amount of tools that we have
[00:52] involved in implementing
audio into the engine.
[00:54] - And with the Claudius Tool, we aim to
streamline that process as much as possible.
[00:58] This talk will be very much focused on workflow
and tech. And as such, there won't be too many sort
[01:03] of exciting explosion sounds going
off and things like that.
[01:05] But, you know, this is all about how we improve
the workflow for our Sound Design team,
[01:10] and we know these guys can
make amazing sounds anyway.
[01:13] - Thanks, Graham.
[01:17] INTRODUCTION: EXISTING TOOLS
[01:22] - So before we get into the new stuff,
let's take a little look at the history, and where we
[01:25] are now and what inspired us
to go down this development path.
[01:29] Up until this point, so much of the
data that we use has been owned and
[01:34] stored in the data of other tools that are not
owned by the Audio team or by the Audio Code team.
[01:39] Tools such as Mannequin, the Character Tool
Track View, UI code, Data Forage,
[01:45] all of these tools are designed
for other teams to work with.
[01:48] And audio can sometimes feel like a bit
of an afterthought within those tools.
[01:52] Additionally to this, because the
data is stored within the files
[01:55] for those tools, we end up with a lot of
data that's scattered around different areas.
[02:00] It can be difficult to dig in
and find what we want.
[02:03] Also, when we're loading these tools,
we have to load up all the data.
[02:06] So, for example, if it's an animation tool,
we have to load lots of animation data when really
[02:10] we're not actually working with that.
[02:12] There can be huge learning curves involved, and
lots of time spent switching between tools that
[02:17] impacts our development by swallowing up time.
[02:20] AN INTRODUCTION TO CIGAUDIO
[02:25] A lot of our ways of working
haven't changed in a very long time.
[02:28] And we thought it was time to take a step back,
look at all the challenges we face, and see if we can
[02:32] come up with solutions for all of them by coming up
with a completely new design that addresses all the
[02:38] issues that we face day to day and tries to overcome
them in an elegant way that makes the sound
[02:43] designer's lives much easier
and makes their jobs much more fun.
[02:47] And this is what we came up with.
[02:50] So with Claudius, what we did was we put
workflow at the very core of the design.
[02:54] From day one, when we started working on the
design of the CIG Audio and Claudius systems,
[02:58] we wanted to make sure the workflow was
always the focus of how things were working.
[03:02] We never wanted the tools to get in
the way any more than they need to.
[03:06] And we wanted to make sure that the tools
could be as smooth and as fun to use as they
[03:11] possibly could be.
[03:12] - I think that this designer comes first workflow is
quite important, and it's going to become an integral
[03:18] aspect on this project.
[03:22] Currently, we have quite a bit of focus shifting,
and that tends to break momentum.
[03:25] Not only that, audio seems to be treated a lot as a
production aspect of the game at the moment,
[03:32] and this tool is going to help shift that to
postproduction where it should be.
[03:36] - Yeah, absolutely.
[03:37] That's a really good point.
[03:38] One of the main things we wanted to do with the
tool was to make sure that it could be used as a
[03:41] postproduction tool so that you could
effectively take a finished feature of the game
[03:46] where no audio guy had seen it at all.
[03:49] The audio code could be implemented really quickly,
and then the sound design could be implemented
[03:53] on top of that really quickly.
[03:54] And this could all be done completely
downstream of all the stuff that happened before it.
[03:58] Obviously, in practice, we're working
on this game in parallel with lots
[04:01] of other teams, and we never work in the sort of
postproduction way that, like a, you know,
[04:06] an actual film post house would work.
[04:08] But by carrying over some of those principles,
we think we've made a really good tool.
[04:13] And part of how we've achieved that is by sort of
completely abstracting the audio data away from
[04:18] the code that calls it. The calling code knows
nothing of what the result of what it's
[04:22] saying it will do.
[04:23] So it will trigger some parameters and some
events, but it doesn't know what the audio
[04:27] system will do as a result of that.
[04:28] And there's a very clear decoupling between
the audio system and the game that calls it.
[04:33] And likewise, within the audio system, we don't
care where the events and parameters came
[04:39] from, all we care about is what we do with them
and how it makes things sound good.
[04:42] - And now, with all this data in one place,
it's going to make it extremely swift and also a lot
[04:48] more inclusive to fix bugs.
[04:50] By inclusive, what I mean is audio QA is going
to become even more integral part of the team.
[04:54] They're going to be able to quickly
fix these things on the fly.
[04:58] - Yeah, I think that's a really important point that
because we've got all this data in one place and
[05:03] we've also got the games
behaviors in one place.
[05:06] What we've done is we've integrated all the
debugging tools into the exact same tool that the
[05:10] sound designers are using.
[05:11] So an audio QA person is working in exactly
the same place, but they've got an interest in
[05:15] some different data.
[05:16] So what they care more about is like why is
something not sounding as it should, or is the
[05:20] system behaving as it should?
[05:22] We want to offer up all the information that they
need, and what that means is that then they can
[05:27] easily pinpoint where the problems are, and in
some cases, they can probably fix them because
[05:31] the fixes become so obvious.
[05:33] Coupled with that is that we want the sound
designer to be able to completely trust the tool so
[05:38] that when you implement something in
Claudius, you know it's going to work in game.
[05:42] And fundamentally, there should be no difference
between you implementing something and playing
[05:47] it out and actually running the game in a
real game scenario and doing the same thing.
[05:51] So what we want to do is make it so that
if anything doesn't work, that's a code book.
[05:56] That's on those guys, we need to fix it,
and you guys can completely trust the tool.
[06:00] And that means that you don't need
to spend lots of time testing.
[06:03] - I think trust is a good word.
[06:05] I think that trust is also going to be coupled
with the just a whole new improvement.
[06:11] And in our daily lives, when it comes to
implementing audio into the game.
[06:15] A LOOK AT THE CLAUDIUS TOOL
[06:20] - So let's take a little look at Claudius itself.
[06:22] What we've done is we've introduced a visual
scripting language that allows you guys to
[06:26] implement whatever you want, and we provide
tools that hopefully allow you to do all the creative
[06:31] things that you need to do with the audio.
[06:33] But the design of Claudius under the hood is
interesting because the tool itself doesn't hold any
[06:39] data of its own.
[06:40] All it does is exposess data
that exists within the game engine.
[06:43] And what this means for us is the live update, as in
when you make a change in the Claudius tool,
[06:50] it live updates in the game, and it immediately
responds and the change that you made is
[06:54] immediately apparent in the game.
[06:56] That means it comes a standard because we're
actually operating on the data that the game is
[07:00] running with, and actually because of the design,
it's not possible to implement an audio feature
[07:05] without implementing live update.
[07:07] And that was at the very core of this design because
again, we were completely thinking about workflow,
[07:13] of our ease of use, about limiting the
amount of time you guys spend, you know,
[07:17] rebooting the game or, you know, trying to
get your actions to be reflected in the game.
[07:23] - You already mentioned it, but I think that, you
know, little to no code support aspect of Claudius
[07:28] is really going to be groundbreaking for us.
[07:30] I think that life is going to become iteratively a lot
easier as we're able to just quickly, you know,
[07:35] just not again, focus shifting, right?
[07:38] That's not going to really be a thing anymore.
[07:40] And that's going to be great.
[07:42] Not only that, all these parameters that we
want to get access to based on the data,
[07:47] we're going to get access to that by just going into
the game playing with something like a weapon.
[07:52] And by picking up that weapon, now that's going
to, you know, be inherited by the character.
[07:57] So it means that we're going to be able to
attach all these different sounds to that gun
[08:02] based on what the player is doing. And I don't know,
it's going to make so many of these things possible,
[08:08] and it just wasn't before.
[08:10] - Yeah.
[08:11] What we're trying to do is make so much data
available to you where you need it and in
[08:15] an intuitive way.
[08:16] And what that means is that, you know, when you,
as you say, if you spawn a weapon in the game,
[08:20] it immediately becomes
visible in the Claudius Tool.
[08:22] And if you perform an action on that weapon,
such as firing it or reloading it,
[08:26] those actions immediately become available
and visible in the Claudius Tool and available
[08:30] for you to implement.
[08:31] And what that means is that we're putting the
implementation right alongside it
[08:35] happening in the game.
Claudius uses a reactive programming model,
[08:40] and what that means is that as the data comes in
the visual side of what you see updates live and
[08:46] it updates immediately.
[08:47] And it also has some sense of what's relevant
because if you're running an actor around,
[08:53] then the most recent events received by the game,
or sent by the game, would be the movements of
[08:58] his limbs, the footsteps, that kind of thing.
[09:00] And you get to see those things immediately in the
tool, and you can even filter by time, so you can
[09:05] look at things, you can, like, clear out the view,
perform an action, and now that's the only thing
[09:10] you can see.
[09:11] So you get really quick, easy access
to all the that data you need.
[09:14] And all of this tech, I think, just puts us
in a great position to continue to support
[09:19] the ever increasing demands of CIG's games.
[09:22] - I also think that the designers are going to be quite
empowered by the amount of time that they're going
[09:27] to have to focus on the
creative aspects because of this tool.
[09:30] - Yeah, that's the whole philosophy of this design is
to empower the sound designers to
[09:33] be sound designers.
[09:37] CIGAUDIO AND CLAUDIUS IN ACTION
[09:41] So let's take a look at a practical example,
marking up a weapon in Claudius.
[09:46] As we've mentioned, all the events and parameters
that arrive in the Claudius interface are things that
[09:52] have happened in the game.
[09:53] The game is just describing what's happened.
[09:55] It doesn't have any preconceptions
about what the audio system should do.
[09:58] It simply provides data.
[10:00] So, for example, the weapon fired,
it now has five rounds in the magazine.
[10:04] The weapon fired again.
[10:05] It now has four rounds in the magazine
and lots of other information as well.
[10:08] So she's, the weapon fired.
[10:10] And there was this much atmospheric pressure
around it, or it was out in space,
[10:15] and there was no pressure.
[10:16] You know, all these sort of contextual things become
available, and the decisions about what that data
[10:22] actually means to you guys all
completely come down to you.
[10:25] So all we do is, we as programmers,
is we provide as much data as we possibly can in a
[10:29] place where you can use it.
[10:35] - What amazes me about this tool is it's
going to just be as simple as, you know,
[10:39] hooking up a couple nodes and
seeing the results in the editor.
[10:42] Not only that, all this complex logic that we have,
we're going to have access to all these
[10:47] parameters super easily.
[10:49] So the idea of, let's say, having a
different reload sound based on the amount
[10:53] of ammunition in the mag, it's going
to be, you know, rather simple to implement.
[10:59] - Yeah, absolutely.
[11:01] What we what we've done here is we've gathered
all the data that may or may not be relevant to you
[11:05] and we don't mind whether it is or not, we deal
with all that code side to the efficiencies of that.
[11:10] And you guys get access to any data
that you may or may not be interested in.
[11:14] So you could do like crazy things if you wanted,
you know, you could make it so the reload
[11:18] sound sounds different.
[11:19] If there are, like you say, if there are
different number of rounds in the mag,
[11:22] but you might want to make the reload sound,
sound different if the the character's wearing
[11:27] armor or not.
[11:28] I mean, that makes no sense.
[11:28] But, you know, all this data becomes available to
you, it's totally up to you guys what you
[11:33] do with it.
[11:33] So we're opening up lots of possibilities.
[11:36] - And it comes back to
empowering the sound designers again.
[11:38] I think all this freedom creatively
is it's going to be great.
[11:43] - Yeah, absolutely.
[11:43] And I think that sort of giving you that creative
freedom, I think is going to be amazing to see what
[11:48] comes out of that because, you know, for example,
we can have something like a parameter that
[11:53] says whether it's nighttime or not.
[11:55] And if you wanted, you could change
the whole aesthetic of the game,
[11:58] change all the sounds based on it being nighttime.
[12:01] And that would require no input from the code
team because we've given you the data you need.
[12:05] - Yeah.
[12:11] - So let's dig down a little into some
specific features of Claudius and look at
[12:15] budgeting and aggregation.
[12:17] In this video, we have a set of audio trigger spots
that are all playing the same sound.
[12:22] We haven't applied any sort of budgeting to them,
so they all play, they're all taking resources, and we
[12:27] can hear them all.
[12:28] So, you know, the mix can be a little bit sort of
muddied by just how many of them are playing.
[12:34] I want to show here just how simple it is to deal
with that and to reduce the budget for the sounds
[12:39] that they're playing.
[12:40] So here we go to the audio source settings,
and we were going to add a new category
[12:46] which is how we budget, and we're going to reduce
the number of sounds in that category that can play
[12:51] at any one time.
[12:53] As I said before, this all update's live, so every
change we make now is going to be reflected
[12:58] in the game.
[12:59] And when we spin back to the game view now in
the editor, you'll see that because we set the budget
[13:04] to five, only five of those sounds are now
playing represented by a lighter green.
[13:09] We can go back and we can change the budget,
and again, that will drop a little bit more.
[13:14] You can see now only the closest
three to the camera are currently playing.
[13:17] And then we'll just whiz the budget back up so you
can see they'll come back again when you do that.
[13:23] Now that's the budgeting feature,
and that's one tool to sort of reduce the amount
[13:27] of resources we use.
[13:29] But what we also do is allow you to deal with what
happens when all the sounds that are not allowed to
[13:35] play because of the budget
are prevented from playing.
[13:38] So what we do is we have a system called an
aggregation system, and every single one of those
[13:43] sounds that hasn't been allowed to play can
contribute to a further sound that attempts to
[13:49] represent that crowd of
sounds that were not played.
[13:53] So here we're going to
do a really simple example.
[13:55] We're going to hook up a more
musical tone to this, to this aggregate.
[14:01] And what this aggregate will do is it will
represent all of those sounds that are playing.
[14:05] Now we offer lots of parameters to this aggregation
system, but the aggregate is aware of how many
[14:12] sounds it represents, it's aware of the
position, it's aware of the spread of them.
[14:16] So lots of information is made available to the sound
designers so that they can represent this massive
[14:22] sounds with just a single audio source.
[14:26] Okay, so now we can see that there's a further
green, light green blob in amongst all
[14:31] the dark green.
[14:32] And what that is, is that's the aggregated sound.
[14:35] So that will move to the center of
wherever the crowd of nonplaying sounds is.
[14:40] And as you can see, it kind of skips around in this
video, but we have smoothing options so that it
[14:45] doesn't sort of jump around and become jarring.
[14:47] It just moves around as quickly or slowly as
you want it to with the crowd of sounds that its
[14:53] attempting to represent.
[14:55] And what this means for us is that it makes
it a lot easier to sort of clean up the mix.
[14:59] If you've got a lot of things that have been added to
a level, they've been added by a nonaudio person
[15:04] and with maybe not so much
understanding of the consequence of that.
[15:09] It gives us really easy ways of dealing with that.
[15:11] You can see here if we increase the budget, the
aggregated sound moves further away.
[15:17] And then if we completely reduce the budget to
nothing, then you end up with just a fixed
[15:22] aggregated sound right in the middle of the,
all the sounds that are playing.
[15:26] Sorry, all the sounds are not playing.
[15:28] Now this is a really simple example.
[15:30] None of these sounds are moving,
but if they were moving,
[15:32] then that blob would move appropriately to
the position where all the sounds were moving.
[15:36] - I think what this tech has showed
us is for ambience work
[15:39] specifically, the designer is going to have quite a lot
of creative freedom to kind of go wild and rely on
[15:48] this technology to help us clean up not only
the mix, but, you know, the voice count and
[15:54] the channel counts.
[15:55] It's also a good way for us to create accurate
background dialogue or, as we call it,
[16:00] walla for bespoke locations.
[16:03] And I think it's going to bring a
lot more life to locations.
[16:06] - Absolutely.
[16:07] But also, aggregate logic doesn't have
to be used for those purposes.
[16:11] It can be used for more
abstract purposes as well.
[16:13] So we can use the logic system within the audio
system to understand how many of a certain thing
[16:19] exist in the game.
[16:20] So if, say, every tree tells the audio system that it
exists, we don't necessarily want to play a sound
[16:27] on all those trees, maybe unless it's windy,
which is a decision we can make if we want.
[16:30] But we can track count, so we can track, you know,
how many of a certain object type there are,
[16:35] and we can use that information
to inform something like the mix.
[16:38] So you can have a mix that's
maybe specific to forests.
[16:41] You want something to sound like a forest.
[16:42] You want to bring some ambiance
that makes it sound like a forest.
[16:45] And that can all be driven by this set of data that
we're not actually playing sounds directly on,
[16:49] but we're just using it to inform the mix.
[16:51] Another feature that we have in Claudius is logic
inheritance, and what that allows us to do is
[16:56] to implement a set of audio logic on a certain
audio node, and then inherit it on child nodes, at
[17:02] that node, so that we can override it, repurpose it
or make it just basically do the same thing as the
[17:07] parent node does.
[17:08] Now that's quite an abstract thing to say, I know.
But what it means is that we can use a single set
[17:13] of events and parameters to express
audio across multiple nodes in the game.
[17:18] - I think this comes back to the example that we
used before about, you know, a weapon reloading.
[17:23] And so by overriding that logic,
we're going to be able to place audio events
[17:28] on specific parts of the weapon, and make them
perform based on what the character is doing.
[17:34] Just seems like a really powerful tool to have.
[17:38] - Yeah, absolutely.
[17:38] And again, it's all about putting
all the power in your hands.
[17:41] You know, for example, you might
have something like a character who jumps
[17:45] and lands, and that jump event
can be expressed on any bone of his body.
[17:50] So if he's wearing a watch, you can make it jingle.
[17:52] You know, if he's got a cracking knee, you
can make it crack when he lands or something,
[17:57] and all these different things can be done.
[17:59] And they're all available to you by default.
[18:02] - And quite easy to implement
as well as we're seeing.
[18:06] - Another thing we have in Claudius
is a set of systemic parameters,
[18:09] and what they are is a set of parameters that are
available by default to any audio node in the game,
[18:15] things such as atmospheric
pressure, velocity, acceleration.
[18:19] So, for example, you can do something like take the
atmospheric pressure and the acceleration of an
[18:24] object, and you can use that
to express some wind noise.
[18:27] And that's something that previously
would have required code support.
[18:31] But you guys can just dive in and do it, literally
anything. You can add a single audio component
[18:36] to something that the audio system's never seen
before, and you can start expressing the audio on
[18:40] these things in this way.
[18:42] - Claudius, I think, rationalizes the
whole process of being a sound designer
[18:46] on this project.
[18:47] All that relevant information is going to be in one
place, and it's going to be quite digestible,
[18:51] especially for people just getting started.
[18:54] - Yeah, absolutely.
[18:54] We want the sound design process to be as organic
as possible, and we want you guys to have the
[18:58] freedom to just express yourselves.
[19:00] And that's the point of getting all
this data to you by default.
[19:04] So let's take a look at an example of something
you can do using CIG Audio and Claudius without
[19:08] any code support.
[19:09] Here we're adding a CIG Audio component,
to an entity type that's never had one on it before.
[19:16] It's a really simple thing to do,
we just drop the components in and data forage,
[19:19] and then we can jump over to the editor,
and we can spawn one of these things.
[19:25] I'm going to use the example of a plushie here.
And what we're going to do is we're going to use
[19:31] some of these systemic parameters
and events that come for free
[19:34] without any extra code support.
[19:36] And we're going to use them to express,
it's a bit of a silly example,
[19:40] we're going to use them to
express the contents of this plushie.
[19:42] So what looks like a cuddly toy right now is
going to turn into some sort of water container.
[19:48] So we're going to put a kind
of water sloshing loop on this thing.
[19:51] So we need to respond to it, spawn event.
[19:53] And also it's despawn events,
so the sound stops if it ever gets despawned.
[19:57] And we can add an audio
source that is the water sloshing sound.
[20:04] And then if we hooked up,
it's going to start playing that sound.
[20:07] But the way these sounds are set up is that they
don't play anything unless certain parameters are
[20:14] set on them, so they're muted.
[20:16] And so, for example,
they have some sort of rotational or directional
[20:21] movement on them because you don't want an
object to just sit there playing a sloshing sound
[20:26] when it's not moving.
[20:27] So we're going to hook up
some parameters as well.
[20:30] We're going to hook up the
systemic acceleration and velocity parameters,
[20:37] and we're going to just demonstrate
a little bit of, you know, we're
[20:40] not going to go into too complex logic here,
but we're just going to demonstrate a little bit
[20:43] of what you can do.
[20:44] So we're going to multiply them by each other.
[20:47] And then the result of that,
we're going to set it on a couple of parameters
[20:52] on the object.
[20:54] And then as I said before, you know,
everything is live updated.
[20:58] So we're going to see
the result of what we do here.
[21:00] We're going to hear the results of what we
do here immediately once we've done it.
[21:04] So just finish hooking this up, and we'll pass
over to the editor view once that's done.
[21:10] Oh, one last thing we need to do before we can
make that happen is because this entity's already
[21:14] spawned, we need to send a spawn event again.
[21:17] And in Claudius, you can send any events that are
set up for debugging reasons, which is really useful.
[21:23] So now we can see the green blob,
which saves the sounds playing.
[21:27] But we can't hear very much because there's no
velocity or acceleration. Now as the character runs
[21:33] around carrying it, we can hear the sloshing sounds,
we can hear them play when it's dropped and all
[21:38] this is coming from this set of parameters in
Claudius that are being multiplied together just for a
[21:44] bit of fun.
[21:44] So all that was done without any code support,
the code system had never seen that entity before,
[21:49] it could have been literally any entity in the game.
[21:52] And what we've done there is we've been able to
express the contents of the entity without any
[21:56] additional help from the Code team.
[21:58] So that's a really sort of freeing thing for
the sound designers to have available.
[22:03] - As we've seen with how easy it is
to implement something like this.
[22:06] We have a lot of control over the physics,
and it gives us no reason not to add sounds
[22:12] to literally everything in the game
that's interactable and that can move.
[22:16] It's going to bring a lot more life.
[22:18] The speed that we can get this done with,
it's going to make iteration a lot more plausible.
[22:23] And yeah, it's I think it's going
to be, have quite some interesting outcomes.
[22:28] So, yeah, it opens up a line of creativity,
it opens up a line of experimentation and that goes
[22:34] hand-in-hand with how quickly this was achieved.
[22:38] - Yeah, absolutely.
[22:39] And I think, you know, the example
there was quite a silly one.
[22:41] It was, you know, putting a water sloshing
sound where it doesn't really belong.
[22:45] But as I said, you know,
it doesn't matter what the entity is,
[22:48] it could be a little cuddly, plushie thing.
[22:51] Or it could be like a falling tower
that's falling and hitting the ground.
[22:55] And those same parameters can be
used to express the sounds of that thing,
[22:58] and to express the weight and the size of that thing.
[23:01] And, you know, this tech isn't so limited to props and
carry rules it can be used on literally anything,
[23:05] anything that can move.
[23:07] You can express its movement
using these parameters.
[23:17] - I think you touched on a really important
point there which is cause and effect.
[23:21] I think that's one thing that it's quite a tricky
phenomenon to implement into games.
[23:27] But with Claudius, it, I mean, it's going
to be, you know, almost a breeze.
[23:32] We're going to be able to hold values
based on a parameter, for example.
[23:37] So let's say if you shoot this plushie, it'll,
you know, trigger a very high value
[23:43] for that movement.
[23:45] And based on that, we'll be able to change
the sound that, you know, happens after.
[23:50] So let's say if you shoot the
plushie, pick it up again.
[23:52] Instead of a cute, cuddly noise,
it can make like a really angry like,
[23:55] "Why did you shoot me?" sort of grumble.
[23:58] And yeah, it's going to add a whole new level
of depth to these interactable objects and other
[24:05] things in the game as well.
[24:06] - Yeah.
[24:07] And those examples are just again,
it's all about unleashing creativity, it's about
[24:10] sort of offering all the data that you need to
be able to do whatever you want.
[24:14] And there may be things that we never even thought
of, but by abstracting these systems in such a way
[24:18] that, and by making all this data available to you,
it no longer becomes a code is problem, what
[24:23] you guys want.
[24:24] We just give you everything.
[24:25] The CIG Audio and Claudius systems are
designed with collaborative working in mind, too.
[24:30] So the way that communication and the way that
actions are performed in Claudius is that the
[24:36] Claudius app sends a request to the game engine
to make some sort of change to the audio logic.
[24:41] And only when that request is fulfilled does the
change actually reflect itself back in
[24:46] the Claudius UI.
[24:47] And this is tied into that whole concept of there's
only one set of data owned by the engine,
[24:52] and we change it live.
[24:54] So by having this design,
what we've been able to do is allow multiple
[24:58] connections of multiple Claudius clients.
[25:01] And because they're all connected via
web sockets, they could be on separate PCs.
[25:05] What this means is that if a sound designer needs
some assistance or just wants to collaborate with
[25:09] another sound designer on some sort of logic set up
in Claudius, they can do that incredibly easily.
[25:14] They can connect their Claudius clients to
somebody else's game client simultaneously while
[25:19] that person has their copy of Claudius connected.
[25:22] And then, as they make changes to the logic,
they're reflected on both user's
[25:26] Claudius screens simultaneously.
[25:29] - I think that's quite a cool feature to have
a lot of the time when we're working.
[25:34] You know, I'll need to call up either a technical
sound designer, or colleague and share my work,
[25:39] and that'll just be through a sharing screen.
[25:41] And there's a lot of, you know,
"No, go there, go there," and finger pointing.
[25:45] And, you know, it can be quite time consuming
and make it difficult to quickly get a point across.
[25:51] And with this tool, I'll be able to, like you said,
connect and just mark up, you know, a gun,
[25:57] for example, or one of these
physics prop on the go with them.
[26:02] And that can also spark quite a few ideas,
just that very easy back and forth.
[26:08] - Yeah, absolutely.
[26:09] And every connected Claudius client has full
control so you, anyone can make any changes.
[26:15] Even the undo system works across all clients,
so you could make a lot of changes to demonstrate
[26:20] something and then disconnect.
[26:23] And then the other person can just hit the Undo
button to get rid of all that stuff and then start,
[26:27] you know, doing something else that's maybe
inspired by what you showed them or
[26:31] something like that.
[26:31] And I think it all just really sort of lends itself to
having a lot of collaboration between sound
[26:37] designers which is always a good thing.
[26:38] - I think now with the whole working from home
situation a tool like this is really going
[26:42] to be invaluable.
[26:43] It's going to allow the sound designers to connect a
lot more QA to work with sound designers a lot
[26:48] easier, technical sound design, dialogue...
[26:50] It's really just going to, you know, bring us
all closer together and hopefully spark some
[26:57] very interesting ideas.
[26:58] - Cool.
[27:00] So let's take a little look at some of the code that
underpins these systems, because when we went
[27:06] away, wanted to start designing this thing,
we obviously had workflow in mind and we wanted
[27:10] that to create a situation that was as smooth
and as easy as possible for sound designers.
[27:18] But as a Code team, we serve two masters,
and what we don't want to do is to implement those
[27:24] things for sound designers at a cost
that's too great for the Engine team.
[27:29] So we need to avoid high CPU usage.
[27:32] We need to avoid blocking the main,
you know,  the critical paths of the game.
[27:37] And we do that by moving all of our audio
processing onto audio threads and onto audio jobs.
[27:43] And all the commands that cause that audio
processing to happen are all transmitted
[27:48] through lockless cues.
[27:49] And what that means is the game can tell us what
we need to know, and we get out of the way
[27:53] as quickly as possible.
[27:55] And that allows the game to run as freely as it can
without audio sort of contributing to frame rate
[28:00] drop or contributing to high CPU usage. Because
we've moved all that stuff into the audio system,
[28:06] what it means is that something like a feature that
we would have maybe in ship code like something
[28:12] that's very specific to thrusters would now
become a systemic feature in the audio system.
[28:18] And what that means is, again,
it frees up your creativity because we might have
[28:21] created something as an idea that
assists with making thrusters sound good,
[28:25] but instead of it being kind of hidden away in the
thruster code and only able to be used by those,
[28:30] it's now available to you wherever you want.
[28:33] And you can kind of use some of these tools in
whatever sort of, you know, creative ways you can
[28:38] think of whereas, you know,
before they were hidden away.
[28:40] Now they're completely available to you.
[28:42] And this also frees up audio code as time because
we spend a lot less time working to make features
[28:48] that exist in one place exist somewhere else.
[28:51] Literally, every feature exists
everywhere for every system.
[28:55] So that again sort of helps.
[28:57] The Audio Code team to spend
a lot more of their time being creative, too,
[29:03] which is a really good position to be in.
[29:05] We also have some features that even bring audio
code into the realm of postproduction which like the
[29:11] sound designers, so we can live rebuild
the code while the game is running.
[29:17] And that's something we've been
able to do for a long, long time.
[29:20] But what Claudius does because it uses
this reactive programming model in it,
[29:23] and it can react to the game's transmission of events
and parameters immediately and present them
[29:28] to you immediately.
[29:29] We can actually boot up the game and start up
a feature we've never seen before, and start playing
[29:35] around with it and find the bits
where the audio needs to be.
[29:37] And then we can live out the code,
rebuild it on the fly,
[29:40] and then it's already available to you guys.
[29:42] So we're making it so that collaboration between
sound designers and audio coders becomes
[29:47] something that is just, it's almost as good as
a collaboration between sound designers.
[29:51] It's like something we can go from nothing
to a fully working feature without stopping the game.
[29:57] And then because of all the design
that this is all built on and, you know,
[30:00] all the way that we want to make sure that
everything persists, it's like go back into the game
[30:05] and test it.
[30:06] What that means is that we can effectively
implement both the code and the audio
[30:11] setup, save it, and we're literally done.
[30:15] And that's just saving so much time compared
to sort of all the iteration time that they spend,
[30:21] like rebooting the game, rebooting the editor,
[30:22] reboot the tools, swapping tools,
and all that kind of thing.
[30:25] So yeah, this puts code, you know,
at least partially in this production or
[30:31] postproduction realm as well.
[30:34] FUTURE DEVELOPMENTS
[30:39] So we've looked at a lot of the features that
we've already developed for Claudius,
[30:42] but we have lots of plans for the future too.
The design of CIG Audio and Claudius aims to
[30:47] solve future problems before we know what they
are, and where it can't solve them completely, it's
[30:52] going to make it easier to solve
them as new game features come along.
[30:57] And we don't know what they're going to be yet
necessarily, we want to be able to support them
[31:01] as quickly as possible.
[31:02] But also we want to be
able to reuse everything we create.
[31:06] And the CIG Audio and
Claudius design is central to that.
[31:08] It's all about reuse, and it's all
about having systemic features that are
[31:12] available to sound designers.
[31:14] - I think what's so great about this technology is that
we're going to be able to take all this information
[31:19] from the game, bring the audio engine into the
game engine and just, you know, make it all so
[31:25] easy to access.
[31:26] I think one key aspect of Claudius,
the Audio team is really looking forward
[31:31] to is sympathetic audio.
[31:32] So this is the cause and effect
that we were talking about before.
[31:36] I think having this like one event trigger another,
for example, it's going to make the game a
[31:41] lot more cinematic.
[31:43] Everything is going to be real time.
[31:45] We're not going to have
to prerender all these events.
[31:47] And it's, yeah, it's basically going to become
procedural, which means that every, you know,
[31:52] a lot of these scenarios that you get into,
a lot of these different contexts that you can get
[31:58] into while you're playing the game, we're going
to accommodate them, and you're going
[32:02] to get, you know, really just vastly different
experiences every time you do something.
[32:10] And this is because we can infer so much from
the game data and create those links to create
[32:14] a beautiful experience.
[32:15] A lot of the time we think about, like,
how can we sonify this nonlinear spectacle
[32:21] of a game?
[32:22] And I truly believe that, that
is through cause and effect.
[32:27] It's having things done in real time and conveying
all this information to the player that, you know,
[32:33] can be critical.
[32:34] So, for example, you're flying and you start to enter
a debris field or an asteroid field, that all those
[32:40] things can start having an affect on the,
you know, environment around you.
[32:43] So your creaks, so if you're entering the
atmosphere, you can tell that your ship's going
[32:48] through some strain and instead of free
rendering it, it can happen in real time.
[32:51] It can take values from like atmospheric pressure,
temperature, and it's going to be, you know,
[32:58] quite a amazing experience for the players.
[33:01] - Yeah, obviously.
[33:02] I think the core of sympathetic
audio is this audio resonance.
[33:06] And with the sympathetic audio design that we have,
we'll be able to give objects resonant frequencies,
[33:11] and we'll be able to make it so that if something sort
of broadband in its frequency spectrum goes off like
[33:17] a huge explosion or something like that, then
you're going to expect a lot of metal panels and
[33:23] glass windows and things to
rattle and resonate in sympathy.
[33:28] That's got in sympathy with the explosion...
[33:31] - And all we really have to do is just set up
the logic for that to happen and it'll happen.
[33:36] And yeah, really eager and interested to see what
the players are going to have happen to them
[33:43] through their play throughs.
[33:45] - Yeah, absolutely.
[33:46] And I think, you know, all the other
features that we're looking to develop
[33:51] are all about bringing this game to life more and
making it more cinematic and making it just
[33:57] feel more immersive.
- Yeah, super high fidelity.
[33:59] - Yeah, absolutely.
[34:00] So we're looking at sort of improving the mixing
support, so we can gather some of this, you know,
[34:05] we got a huge amount of data coming in now that
can be used in lots of ways to decide which sounds
[34:10] play and what, you know, how those
parameters affect those sounds.
[34:13] But we can take a step back and look
at the bigger picture and say, you know,
[34:16] we've got all this data that's telling us what's going
on in the game, can we then use that to sort of
[34:21] decide how the game should be mixed?
[34:23] So for example, if you're exploring
the moon or something like that,
[34:27] you're going to want to hear a lot of the ambiances
and maybe some distant mining going off and
[34:32] things like this.
[34:33] But then if you sort of end up engaged in battle with
someone, that's something that the audio system is
[34:38] aware of through the data that's coming in.
[34:40] And maybe it can change the mix so that those
ambient things don't really get so much of a
[34:44] look in anymore.
[34:45] And it's all about the battle
focus and things like that.
[34:47] And then again, as the battle ends and
that kind of scenario falls away,
[34:51] we could automatically analyze the data and say,
okay, we're now back into an ambient situation.
[34:56] So, you know, let's raise the level of
some of these ambient sources again.
[35:00] - Yeah, I think that, you know,
importance to what the player needs to hear
[35:04] at that moment.
[35:05] I think that's for, especially on the FBS side,
that's going to really be valuable.
[35:10] - So that concludes our look at
some of the features and tech that we have
[35:13] in development in the CIG Audio team right now.
[35:15] And hopefully it's going to make the lives of the
Sound Design team much easier, and hopefully
[35:20] some improvements to the
way the game sounds, too.
[35:23] - Yeah, I think the sonic aesthetic of
this game is going to change for the better
[35:28] because of these tools and
because these workflow improvements.
[35:31] - Cool.
[35:32] - Yeah.
[35:34] - Okay.
[35:34] Well, that's it from us.
[35:36] Thank you very much for watching.
[35:38] I hope you enjoy the rest of your CitizenCon,
and I really hope next year we can all be back
[35:42] together in person, and we can
see each other in person then.
[35:46] Thanks for watching.
[35:46] Good bye.
[35:47] - Thank you.
[35:53] STAR CITIZEN
[35:56] ROBERTSSPACEINDUSTRIES.COM
[36:01] CITIZENCON

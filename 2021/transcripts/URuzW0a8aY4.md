# CitizenCon 2951: The Sounds of Space

**Video:** https://www.youtube.com/watch?v=URuzW0a8aY4
**Date:** 2021-10-09
**Duration:** 35:41

## Transcript

CITIZENCON
B-Roll
- [Graham] We're opening up lots of possibilities.
And if you wanted, you could change
the whole aesthetic of the game.
- [Adi] I think it's going to bring
a lot more life to locations.
TITLE CARD
- Hi, my name is Graham Phillipson,
and I'm lead audio programmer here
at Cloud Imperium Games.
- Hello, I'm Adi Keltsh, and I am one of the sound
designers working at Cloud Imperium Games.
- And we're here to talk about some of the big
developments we've got going on in audio tech,
specifically CIG Audio and Claudius,
which is a new audio engine layer,
an associated tool that we hope will greatly
improve the development experience of our
Sound Design team.
- Getting started on this project can be quite
challenging due to the amount of tools that we have
involved in implementing
audio into the engine.
- And with the Claudius Tool, we aim to
streamline that process as much as possible.
This talk will be very much focused on workflow
and tech. And as such, there won't be too many sort
of exciting explosion sounds going
off and things like that.
But, you know, this is all about how we improve
the workflow for our Sound Design team,
and we know these guys can
make amazing sounds anyway.
- Thanks, Graham.
INTRODUCTION: EXISTING TOOLS
- So before we get into the new stuff,
let's take a little look at the history, and where we
are now and what inspired us
to go down this development path.
Up until this point, so much of the
data that we use has been owned and
stored in the data of other tools that are not
owned by the Audio team or by the Audio Code team.
Tools such as Mannequin, the Character Tool
Track View, UI code, Data Forage,
all of these tools are designed
for other teams to work with.
And audio can sometimes feel like a bit
of an afterthought within those tools.
Additionally to this, because the
data is stored within the files
for those tools, we end up with a lot of
data that's scattered around different areas.
It can be difficult to dig in
and find what we want.
Also, when we're loading these tools,
we have to load up all the data.
So, for example, if it's an animation tool,
we have to load lots of animation data when really
we're not actually working with that.
There can be huge learning curves involved, and
lots of time spent switching between tools that
impacts our development by swallowing up time.
AN INTRODUCTION TO CIGAUDIO
A lot of our ways of working
haven't changed in a very long time.
And we thought it was time to take a step back,
look at all the challenges we face, and see if we can
come up with solutions for all of them by coming up
with a completely new design that addresses all the
issues that we face day to day and tries to overcome
them in an elegant way that makes the sound
designer's lives much easier
and makes their jobs much more fun.
And this is what we came up with.
So with Claudius, what we did was we put
workflow at the very core of the design.
From day one, when we started working on the
design of the CIG Audio and Claudius systems,
we wanted to make sure the workflow was
always the focus of how things were working.
We never wanted the tools to get in
the way any more than they need to.
And we wanted to make sure that the tools
could be as smooth and as fun to use as they
possibly could be.
- I think that this designer comes first workflow is
quite important, and it's going to become an integral
aspect on this project.
Currently, we have quite a bit of focus shifting,
and that tends to break momentum.
Not only that, audio seems to be treated a lot as a
production aspect of the game at the moment,
and this tool is going to help shift that to
postproduction where it should be.
- Yeah, absolutely.
That's a really good point.
One of the main things we wanted to do with the
tool was to make sure that it could be used as a
postproduction tool so that you could
effectively take a finished feature of the game
where no audio guy had seen it at all.
The audio code could be implemented really quickly,
and then the sound design could be implemented
on top of that really quickly.
And this could all be done completely
downstream of all the stuff that happened before it.
Obviously, in practice, we're working
on this game in parallel with lots
of other teams, and we never work in the sort of
postproduction way that, like a, you know,
an actual film post house would work.
But by carrying over some of those principles,
we think we've made a really good tool.
And part of how we've achieved that is by sort of
completely abstracting the audio data away from
the code that calls it. The calling code knows
nothing of what the result of what it's
saying it will do.
So it will trigger some parameters and some
events, but it doesn't know what the audio
system will do as a result of that.
And there's a very clear decoupling between
the audio system and the game that calls it.
And likewise, within the audio system, we don't
care where the events and parameters came
from, all we care about is what we do with them
and how it makes things sound good.
- And now, with all this data in one place,
it's going to make it extremely swift and also a lot
more inclusive to fix bugs.
By inclusive, what I mean is audio QA is going
to become even more integral part of the team.
They're going to be able to quickly
fix these things on the fly.
- Yeah, I think that's a really important point that
because we've got all this data in one place and
we've also got the games
behaviors in one place.
What we've done is we've integrated all the
debugging tools into the exact same tool that the
sound designers are using.
So an audio QA person is working in exactly
the same place, but they've got an interest in
some different data.
So what they care more about is like why is
something not sounding as it should, or is the
system behaving as it should?
We want to offer up all the information that they
need, and what that means is that then they can
easily pinpoint where the problems are, and in
some cases, they can probably fix them because
the fixes become so obvious.
Coupled with that is that we want the sound
designer to be able to completely trust the tool so
that when you implement something in
Claudius, you know it's going to work in game.
And fundamentally, there should be no difference
between you implementing something and playing
it out and actually running the game in a
real game scenario and doing the same thing.
So what we want to do is make it so that
if anything doesn't work, that's a code book.
That's on those guys, we need to fix it,
and you guys can completely trust the tool.
And that means that you don't need
to spend lots of time testing.
- I think trust is a good word.
I think that trust is also going to be coupled
with the just a whole new improvement.
And in our daily lives, when it comes to
implementing audio into the game.
A LOOK AT THE CLAUDIUS TOOL
- So let's take a little look at Claudius itself.
What we've done is we've introduced a visual
scripting language that allows you guys to
implement whatever you want, and we provide
tools that hopefully allow you to do all the creative
things that you need to do with the audio.
But the design of Claudius under the hood is
interesting because the tool itself doesn't hold any
data of its own.
All it does is exposess data
that exists within the game engine.
And what this means for us is the live update, as in
when you make a change in the Claudius tool,
it live updates in the game, and it immediately
responds and the change that you made is
immediately apparent in the game.
That means it comes a standard because we're
actually operating on the data that the game is
running with, and actually because of the design,
it's not possible to implement an audio feature
without implementing live update.
And that was at the very core of this design because
again, we were completely thinking about workflow,
of our ease of use, about limiting the
amount of time you guys spend, you know,
rebooting the game or, you know, trying to
get your actions to be reflected in the game.
- You already mentioned it, but I think that, you
know, little to no code support aspect of Claudius
is really going to be groundbreaking for us.
I think that life is going to become iteratively a lot
easier as we're able to just quickly, you know,
just not again, focus shifting, right?
That's not going to really be a thing anymore.
And that's going to be great.
Not only that, all these parameters that we
want to get access to based on the data,
we're going to get access to that by just going into
the game playing with something like a weapon.
And by picking up that weapon, now that's going
to, you know, be inherited by the character.
So it means that we're going to be able to
attach all these different sounds to that gun
based on what the player is doing. And I don't know,
it's going to make so many of these things possible,
and it just wasn't before.
- Yeah.
What we're trying to do is make so much data
available to you where you need it and in
an intuitive way.
And what that means is that, you know, when you,
as you say, if you spawn a weapon in the game,
it immediately becomes
visible in the Claudius Tool.
And if you perform an action on that weapon,
such as firing it or reloading it,
those actions immediately become available
and visible in the Claudius Tool and available
for you to implement.
And what that means is that we're putting the
implementation right alongside it
happening in the game.
Claudius uses a reactive programming model,
and what that means is that as the data comes in
the visual side of what you see updates live and
it updates immediately.
And it also has some sense of what's relevant
because if you're running an actor around,
then the most recent events received by the game,
or sent by the game, would be the movements of
his limbs, the footsteps, that kind of thing.
And you get to see those things immediately in the
tool, and you can even filter by time, so you can
look at things, you can, like, clear out the view,
perform an action, and now that's the only thing
you can see.
So you get really quick, easy access
to all the that data you need.
And all of this tech, I think, just puts us
in a great position to continue to support
the ever increasing demands of CIG's games.
- I also think that the designers are going to be quite
empowered by the amount of time that they're going
to have to focus on the
creative aspects because of this tool.
- Yeah, that's the whole philosophy of this design is
to empower the sound designers to
be sound designers.
CIGAUDIO AND CLAUDIUS IN ACTION
So let's take a look at a practical example,
marking up a weapon in Claudius.
As we've mentioned, all the events and parameters
that arrive in the Claudius interface are things that
have happened in the game.
The game is just describing what's happened.
It doesn't have any preconceptions
about what the audio system should do.
It simply provides data.
So, for example, the weapon fired,
it now has five rounds in the magazine.
The weapon fired again.
It now has four rounds in the magazine
and lots of other information as well.
So she's, the weapon fired.
And there was this much atmospheric pressure
around it, or it was out in space,
and there was no pressure.
You know, all these sort of contextual things become
available, and the decisions about what that data
actually means to you guys all
completely come down to you.
So all we do is, we as programmers,
is we provide as much data as we possibly can in a
place where you can use it.
- What amazes me about this tool is it's
going to just be as simple as, you know,
hooking up a couple nodes and
seeing the results in the editor.
Not only that, all this complex logic that we have,
we're going to have access to all these
parameters super easily.
So the idea of, let's say, having a
different reload sound based on the amount
of ammunition in the mag, it's going
to be, you know, rather simple to implement.
- Yeah, absolutely.
What we what we've done here is we've gathered
all the data that may or may not be relevant to you
and we don't mind whether it is or not, we deal
with all that code side to the efficiencies of that.
And you guys get access to any data
that you may or may not be interested in.
So you could do like crazy things if you wanted,
you know, you could make it so the reload
sound sounds different.
If there are, like you say, if there are
different number of rounds in the mag,
but you might want to make the reload sound,
sound different if the the character's wearing
armor or not.
I mean, that makes no sense.
But, you know, all this data becomes available to
you, it's totally up to you guys what you
do with it.
So we're opening up lots of possibilities.
- And it comes back to
empowering the sound designers again.
I think all this freedom creatively
is it's going to be great.
- Yeah, absolutely.
And I think that sort of giving you that creative
freedom, I think is going to be amazing to see what
comes out of that because, you know, for example,
we can have something like a parameter that
says whether it's nighttime or not.
And if you wanted, you could change
the whole aesthetic of the game,
change all the sounds based on it being nighttime.
And that would require no input from the code
team because we've given you the data you need.
- Yeah.
- So let's dig down a little into some
specific features of Claudius and look at
budgeting and aggregation.
In this video, we have a set of audio trigger spots
that are all playing the same sound.
We haven't applied any sort of budgeting to them,
so they all play, they're all taking resources, and we
can hear them all.
So, you know, the mix can be a little bit sort of
muddied by just how many of them are playing.
I want to show here just how simple it is to deal
with that and to reduce the budget for the sounds
that they're playing.
So here we go to the audio source settings,
and we were going to add a new category
which is how we budget, and we're going to reduce
the number of sounds in that category that can play
at any one time.
As I said before, this all update's live, so every
change we make now is going to be reflected
in the game.
And when we spin back to the game view now in
the editor, you'll see that because we set the budget
to five, only five of those sounds are now
playing represented by a lighter green.
We can go back and we can change the budget,
and again, that will drop a little bit more.
You can see now only the closest
three to the camera are currently playing.
And then we'll just whiz the budget back up so you
can see they'll come back again when you do that.
Now that's the budgeting feature,
and that's one tool to sort of reduce the amount
of resources we use.
But what we also do is allow you to deal with what
happens when all the sounds that are not allowed to
play because of the budget
are prevented from playing.
So what we do is we have a system called an
aggregation system, and every single one of those
sounds that hasn't been allowed to play can
contribute to a further sound that attempts to
represent that crowd of
sounds that were not played.
So here we're going to
do a really simple example.
We're going to hook up a more
musical tone to this, to this aggregate.
And what this aggregate will do is it will
represent all of those sounds that are playing.
Now we offer lots of parameters to this aggregation
system, but the aggregate is aware of how many
sounds it represents, it's aware of the
position, it's aware of the spread of them.
So lots of information is made available to the sound
designers so that they can represent this massive
sounds with just a single audio source.
Okay, so now we can see that there's a further
green, light green blob in amongst all
the dark green.
And what that is, is that's the aggregated sound.
So that will move to the center of
wherever the crowd of nonplaying sounds is.
And as you can see, it kind of skips around in this
video, but we have smoothing options so that it
doesn't sort of jump around and become jarring.
It just moves around as quickly or slowly as
you want it to with the crowd of sounds that its
attempting to represent.
And what this means for us is that it makes
it a lot easier to sort of clean up the mix.
If you've got a lot of things that have been added to
a level, they've been added by a nonaudio person
and with maybe not so much
understanding of the consequence of that.
It gives us really easy ways of dealing with that.
You can see here if we increase the budget, the
aggregated sound moves further away.
And then if we completely reduce the budget to
nothing, then you end up with just a fixed
aggregated sound right in the middle of the,
all the sounds that are playing.
Sorry, all the sounds are not playing.
Now this is a really simple example.
None of these sounds are moving,
but if they were moving,
then that blob would move appropriately to
the position where all the sounds were moving.
- I think what this tech has showed
us is for ambience work
specifically, the designer is going to have quite a lot
of creative freedom to kind of go wild and rely on
this technology to help us clean up not only
the mix, but, you know, the voice count and
the channel counts.
It's also a good way for us to create accurate
background dialogue or, as we call it,
walla for bespoke locations.
And I think it's going to bring a
lot more life to locations.
- Absolutely.
But also, aggregate logic doesn't have
to be used for those purposes.
It can be used for more
abstract purposes as well.
So we can use the logic system within the audio
system to understand how many of a certain thing
exist in the game.
So if, say, every tree tells the audio system that it
exists, we don't necessarily want to play a sound
on all those trees, maybe unless it's windy,
which is a decision we can make if we want.
But we can track count, so we can track, you know,
how many of a certain object type there are,
and we can use that information
to inform something like the mix.
So you can have a mix that's
maybe specific to forests.
You want something to sound like a forest.
You want to bring some ambiance
that makes it sound like a forest.
And that can all be driven by this set of data that
we're not actually playing sounds directly on,
but we're just using it to inform the mix.
Another feature that we have in Claudius is logic
inheritance, and what that allows us to do is
to implement a set of audio logic on a certain
audio node, and then inherit it on child nodes, at
that node, so that we can override it, repurpose it
or make it just basically do the same thing as the
parent node does.
Now that's quite an abstract thing to say, I know.
But what it means is that we can use a single set
of events and parameters to express
audio across multiple nodes in the game.
- I think this comes back to the example that we
used before about, you know, a weapon reloading.
And so by overriding that logic,
we're going to be able to place audio events
on specific parts of the weapon, and make them
perform based on what the character is doing.
Just seems like a really powerful tool to have.
- Yeah, absolutely.
And again, it's all about putting
all the power in your hands.
You know, for example, you might
have something like a character who jumps
and lands, and that jump event
can be expressed on any bone of his body.
So if he's wearing a watch, you can make it jingle.
You know, if he's got a cracking knee, you
can make it crack when he lands or something,
and all these different things can be done.
And they're all available to you by default.
- And quite easy to implement
as well as we're seeing.
- Another thing we have in Claudius
is a set of systemic parameters,
and what they are is a set of parameters that are
available by default to any audio node in the game,
things such as atmospheric
pressure, velocity, acceleration.
So, for example, you can do something like take the
atmospheric pressure and the acceleration of an
object, and you can use that
to express some wind noise.
And that's something that previously
would have required code support.
But you guys can just dive in and do it, literally
anything. You can add a single audio component
to something that the audio system's never seen
before, and you can start expressing the audio on
these things in this way.
- Claudius, I think, rationalizes the
whole process of being a sound designer
on this project.
All that relevant information is going to be in one
place, and it's going to be quite digestible,
especially for people just getting started.
- Yeah, absolutely.
We want the sound design process to be as organic
as possible, and we want you guys to have the
freedom to just express yourselves.
And that's the point of getting all
this data to you by default.
So let's take a look at an example of something
you can do using CIG Audio and Claudius without
any code support.
Here we're adding a CIG Audio component,
to an entity type that's never had one on it before.
It's a really simple thing to do,
we just drop the components in and data forage,
and then we can jump over to the editor,
and we can spawn one of these things.
I'm going to use the example of a plushie here.
And what we're going to do is we're going to use
some of these systemic parameters
and events that come for free
without any extra code support.
And we're going to use them to express,
it's a bit of a silly example,
we're going to use them to
express the contents of this plushie.
So what looks like a cuddly toy right now is
going to turn into some sort of water container.
So we're going to put a kind
of water sloshing loop on this thing.
So we need to respond to it, spawn event.
And also it's despawn events,
so the sound stops if it ever gets despawned.
And we can add an audio
source that is the water sloshing sound.
And then if we hooked up,
it's going to start playing that sound.
But the way these sounds are set up is that they
don't play anything unless certain parameters are
set on them, so they're muted.
And so, for example,
they have some sort of rotational or directional
movement on them because you don't want an
object to just sit there playing a sloshing sound
when it's not moving.
So we're going to hook up
some parameters as well.
We're going to hook up the
systemic acceleration and velocity parameters,
and we're going to just demonstrate
a little bit of, you know, we're
not going to go into too complex logic here,
but we're just going to demonstrate a little bit
of what you can do.
So we're going to multiply them by each other.
And then the result of that,
we're going to set it on a couple of parameters
on the object.
And then as I said before, you know,
everything is live updated.
So we're going to see
the result of what we do here.
We're going to hear the results of what we
do here immediately once we've done it.
So just finish hooking this up, and we'll pass
over to the editor view once that's done.
Oh, one last thing we need to do before we can
make that happen is because this entity's already
spawned, we need to send a spawn event again.
And in Claudius, you can send any events that are
set up for debugging reasons, which is really useful.
So now we can see the green blob,
which saves the sounds playing.
But we can't hear very much because there's no
velocity or acceleration. Now as the character runs
around carrying it, we can hear the sloshing sounds,
we can hear them play when it's dropped and all
this is coming from this set of parameters in
Claudius that are being multiplied together just for a
bit of fun.
So all that was done without any code support,
the code system had never seen that entity before,
it could have been literally any entity in the game.
And what we've done there is we've been able to
express the contents of the entity without any
additional help from the Code team.
So that's a really sort of freeing thing for
the sound designers to have available.
- As we've seen with how easy it is
to implement something like this.
We have a lot of control over the physics,
and it gives us no reason not to add sounds
to literally everything in the game
that's interactable and that can move.
It's going to bring a lot more life.
The speed that we can get this done with,
it's going to make iteration a lot more plausible.
And yeah, it's I think it's going
to be, have quite some interesting outcomes.
So, yeah, it opens up a line of creativity,
it opens up a line of experimentation and that goes
hand-in-hand with how quickly this was achieved.
- Yeah, absolutely.
And I think, you know, the example
there was quite a silly one.
It was, you know, putting a water sloshing
sound where it doesn't really belong.
But as I said, you know,
it doesn't matter what the entity is,
it could be a little cuddly, plushie thing.
Or it could be like a falling tower
that's falling and hitting the ground.
And those same parameters can be
used to express the sounds of that thing,
and to express the weight and the size of that thing.
And, you know, this tech isn't so limited to props and
carry rules it can be used on literally anything,
anything that can move.
You can express its movement
using these parameters.
- I think you touched on a really important
point there which is cause and effect.
I think that's one thing that it's quite a tricky
phenomenon to implement into games.
But with Claudius, it, I mean, it's going
to be, you know, almost a breeze.
We're going to be able to hold values
based on a parameter, for example.
So let's say if you shoot this plushie, it'll,
you know, trigger a very high value
for that movement.
And based on that, we'll be able to change
the sound that, you know, happens after.
So let's say if you shoot the
plushie, pick it up again.
Instead of a cute, cuddly noise,
it can make like a really angry like,
"Why did you shoot me?" sort of grumble.
And yeah, it's going to add a whole new level
of depth to these interactable objects and other
things in the game as well.
- Yeah.
And those examples are just again,
it's all about unleashing creativity, it's about
sort of offering all the data that you need to
be able to do whatever you want.
And there may be things that we never even thought
of, but by abstracting these systems in such a way
that, and by making all this data available to you,
it no longer becomes a code is problem, what
you guys want.
We just give you everything.
The CIG Audio and Claudius systems are
designed with collaborative working in mind, too.
So the way that communication and the way that
actions are performed in Claudius is that the
Claudius app sends a request to the game engine
to make some sort of change to the audio logic.
And only when that request is fulfilled does the
change actually reflect itself back in
the Claudius UI.
And this is tied into that whole concept of there's
only one set of data owned by the engine,
and we change it live.
So by having this design,
what we've been able to do is allow multiple
connections of multiple Claudius clients.
And because they're all connected via
web sockets, they could be on separate PCs.
What this means is that if a sound designer needs
some assistance or just wants to collaborate with
another sound designer on some sort of logic set up
in Claudius, they can do that incredibly easily.
They can connect their Claudius clients to
somebody else's game client simultaneously while
that person has their copy of Claudius connected.
And then, as they make changes to the logic,
they're reflected on both user's
Claudius screens simultaneously.
- I think that's quite a cool feature to have
a lot of the time when we're working.
You know, I'll need to call up either a technical
sound designer, or colleague and share my work,
and that'll just be through a sharing screen.
And there's a lot of, you know,
"No, go there, go there," and finger pointing.
And, you know, it can be quite time consuming
and make it difficult to quickly get a point across.
And with this tool, I'll be able to, like you said,
connect and just mark up, you know, a gun,
for example, or one of these
physics prop on the go with them.
And that can also spark quite a few ideas,
just that very easy back and forth.
- Yeah, absolutely.
And every connected Claudius client has full
control so you, anyone can make any changes.
Even the undo system works across all clients,
so you could make a lot of changes to demonstrate
something and then disconnect.
And then the other person can just hit the Undo
button to get rid of all that stuff and then start,
you know, doing something else that's maybe
inspired by what you showed them or
something like that.
And I think it all just really sort of lends itself to
having a lot of collaboration between sound
designers which is always a good thing.
- I think now with the whole working from home
situation a tool like this is really going
to be invaluable.
It's going to allow the sound designers to connect a
lot more QA to work with sound designers a lot
easier, technical sound design, dialogue...
It's really just going to, you know, bring us
all closer together and hopefully spark some
very interesting ideas.
- Cool.
So let's take a little look at some of the code that
underpins these systems, because when we went
away, wanted to start designing this thing,
we obviously had workflow in mind and we wanted
that to create a situation that was as smooth
and as easy as possible for sound designers.
But as a Code team, we serve two masters,
and what we don't want to do is to implement those
things for sound designers at a cost
that's too great for the Engine team.
So we need to avoid high CPU usage.
We need to avoid blocking the main,
you know,  the critical paths of the game.
And we do that by moving all of our audio
processing onto audio threads and onto audio jobs.
And all the commands that cause that audio
processing to happen are all transmitted
through lockless cues.
And what that means is the game can tell us what
we need to know, and we get out of the way
as quickly as possible.
And that allows the game to run as freely as it can
without audio sort of contributing to frame rate
drop or contributing to high CPU usage. Because
we've moved all that stuff into the audio system,
what it means is that something like a feature that
we would have maybe in ship code like something
that's very specific to thrusters would now
become a systemic feature in the audio system.
And what that means is, again,
it frees up your creativity because we might have
created something as an idea that
assists with making thrusters sound good,
but instead of it being kind of hidden away in the
thruster code and only able to be used by those,
it's now available to you wherever you want.
And you can kind of use some of these tools in
whatever sort of, you know, creative ways you can
think of whereas, you know,
before they were hidden away.
Now they're completely available to you.
And this also frees up audio code as time because
we spend a lot less time working to make features
that exist in one place exist somewhere else.
Literally, every feature exists
everywhere for every system.
So that again sort of helps.
The Audio Code team to spend
a lot more of their time being creative, too,
which is a really good position to be in.
We also have some features that even bring audio
code into the realm of postproduction which like the
sound designers, so we can live rebuild
the code while the game is running.
And that's something we've been
able to do for a long, long time.
But what Claudius does because it uses
this reactive programming model in it,
and it can react to the game's transmission of events
and parameters immediately and present them
to you immediately.
We can actually boot up the game and start up
a feature we've never seen before, and start playing
around with it and find the bits
where the audio needs to be.
And then we can live out the code,
rebuild it on the fly,
and then it's already available to you guys.
So we're making it so that collaboration between
sound designers and audio coders becomes
something that is just, it's almost as good as
a collaboration between sound designers.
It's like something we can go from nothing
to a fully working feature without stopping the game.
And then because of all the design
that this is all built on and, you know,
all the way that we want to make sure that
everything persists, it's like go back into the game
and test it.
What that means is that we can effectively
implement both the code and the audio
setup, save it, and we're literally done.
And that's just saving so much time compared
to sort of all the iteration time that they spend,
like rebooting the game, rebooting the editor,
reboot the tools, swapping tools,
and all that kind of thing.
So yeah, this puts code, you know,
at least partially in this production or
postproduction realm as well.
FUTURE DEVELOPMENTS
So we've looked at a lot of the features that
we've already developed for Claudius,
but we have lots of plans for the future too.
The design of CIG Audio and Claudius aims to
solve future problems before we know what they
are, and where it can't solve them completely, it's
going to make it easier to solve
them as new game features come along.
And we don't know what they're going to be yet
necessarily, we want to be able to support them
as quickly as possible.
But also we want to be
able to reuse everything we create.
And the CIG Audio and
Claudius design is central to that.
It's all about reuse, and it's all
about having systemic features that are
available to sound designers.
- I think what's so great about this technology is that
we're going to be able to take all this information
from the game, bring the audio engine into the
game engine and just, you know, make it all so
easy to access.
I think one key aspect of Claudius,
the Audio team is really looking forward
to is sympathetic audio.
So this is the cause and effect
that we were talking about before.
I think having this like one event trigger another,
for example, it's going to make the game a
lot more cinematic.
Everything is going to be real time.
We're not going to have
to prerender all these events.
And it's, yeah, it's basically going to become
procedural, which means that every, you know,
a lot of these scenarios that you get into,
a lot of these different contexts that you can get
into while you're playing the game, we're going
to accommodate them, and you're going
to get, you know, really just vastly different
experiences every time you do something.
And this is because we can infer so much from
the game data and create those links to create
a beautiful experience.
A lot of the time we think about, like,
how can we sonify this nonlinear spectacle
of a game?
And I truly believe that, that
is through cause and effect.
It's having things done in real time and conveying
all this information to the player that, you know,
can be critical.
So, for example, you're flying and you start to enter
a debris field or an asteroid field, that all those
things can start having an affect on the,
you know, environment around you.
So your creaks, so if you're entering the
atmosphere, you can tell that your ship's going
through some strain and instead of free
rendering it, it can happen in real time.
It can take values from like atmospheric pressure,
temperature, and it's going to be, you know,
quite a amazing experience for the players.
- Yeah, obviously.
I think the core of sympathetic
audio is this audio resonance.
And with the sympathetic audio design that we have,
we'll be able to give objects resonant frequencies,
and we'll be able to make it so that if something sort
of broadband in its frequency spectrum goes off like
a huge explosion or something like that, then
you're going to expect a lot of metal panels and
glass windows and things to
rattle and resonate in sympathy.
That's got in sympathy with the explosion...
- And all we really have to do is just set up
the logic for that to happen and it'll happen.
And yeah, really eager and interested to see what
the players are going to have happen to them
through their play throughs.
- Yeah, absolutely.
And I think, you know, all the other
features that we're looking to develop
are all about bringing this game to life more and
making it more cinematic and making it just
feel more immersive.
- Yeah, super high fidelity.
- Yeah, absolutely.
So we're looking at sort of improving the mixing
support, so we can gather some of this, you know,
we got a huge amount of data coming in now that
can be used in lots of ways to decide which sounds
play and what, you know, how those
parameters affect those sounds.
But we can take a step back and look
at the bigger picture and say, you know,
we've got all this data that's telling us what's going
on in the game, can we then use that to sort of
decide how the game should be mixed?
So for example, if you're exploring
the moon or something like that,
you're going to want to hear a lot of the ambiances
and maybe some distant mining going off and
things like this.
But then if you sort of end up engaged in battle with
someone, that's something that the audio system is
aware of through the data that's coming in.
And maybe it can change the mix so that those
ambient things don't really get so much of a
look in anymore.
And it's all about the battle
focus and things like that.
And then again, as the battle ends and
that kind of scenario falls away,
we could automatically analyze the data and say,
okay, we're now back into an ambient situation.
So, you know, let's raise the level of
some of these ambient sources again.
- Yeah, I think that, you know,
importance to what the player needs to hear
at that moment.
I think that's for, especially on the FBS side,
that's going to really be valuable.
- So that concludes our look at
some of the features and tech that we have
in development in the CIG Audio team right now.
And hopefully it's going to make the lives of the
Sound Design team much easier, and hopefully
some improvements to the
way the game sounds, too.
- Yeah, I think the sonic aesthetic of
this game is going to change for the better
because of these tools and
because these workflow improvements.
- Cool.
- Yeah.
- Okay.
Well, that's it from us.
Thank you very much for watching.
I hope you enjoy the rest of your CitizenCon,
and I really hope next year we can all be back
together in person, and we can
see each other in person then.
Thanks for watching.
Good bye.
- Thank you.
STAR CITIZEN
ROBERTSSPACEINDUSTRIES.COM
CITIZENCON

# Squadron 42: Behind the Scenes - Character Pipeline

**Video:** https://www.youtube.com/watch?v=y3-algllIKc
**Date:** 2015-11-19
**Duration:** 4:50

## Transcript

There's lots of pipelines in something
considered a character pipeline because
it spans across different disciplines.
And generally what a pipeline means,
it's how to get from one location to
another location. So in case of a
character, the overall character
pipeline is how to start from no
character to an idea to the final
character actually in the game. figuring
out exactly who we go to at what time,
what task has to be done by a certain
guy, what's going to block other things
from getting done, and in the end, do we
get all the content that we need to be
able to uh technically do what we want
to do. The first step is, you know, you
have the actors in the studios and
they're kind of capturing all their
movements, facial expressions,
everything, their acting performances to
get all the data that we need to provide
that information to the character and
the skeleton to kind of bring these
characters to life once we actually get
the game object. The UK's role within
this pipeline is really on the animation
front. Uh we've got a gentleman by the
name of John Jones who works out in the
UK. He corresponds directly with Cubic
as well as three lateral to receive all
that data in. For example, with Mark
Hamill's scan set, uh, we'd run through
the 87 poses, and it breaks down the
face into every minute muscle movement,
break down the smile into how it pulls
the muscles in every direction. And that
enables the guys in Serbia to recreate
that movement on the head rig, which
means we can pretty much get a onetoone
between the real Mark Campbell and the
face rig.
When there's an animation that comes in,
he will always review it. Um, and then
if there's any changes that he needs to
make, he'll make the change, then export
that into engine, and then, uh, it's up
to myself or Forest to review it.
Through that data, we kind of build the
3D mesh that's very high and very dense.
And then we basically have a basic
topology that we use for all of our
heads, which is our edge loops, our vert
counts, our face sizes. And then we have
that in a way morph to these high-end 3D
scans. And that automatically maps all
of your surface area for all your faces
to the 3D data.
But then once it's actually in, then
that's going to be up to Steven Bender,
uh, the animation director, to make sure
that it all looks as it should. And I
work with the animators in developing
those motion capture animations so that
they work well in the game. They're
fluid. They have a good aesthetic value
to it. And then I also work with the
designers in implementing that as well
as the programmers into the final
product.
And then all of a sudden you have this
head that perfectly matches, you know,
an actor. Once you have that, we can
start actually putting our skeleton on
there. So, one of the unique things we
do is we use a musclebased system
underneath the skin. So, we add a bunch
of joints and muscles that deform the
skin correctly as if it had real
muscles. So, game engines can't really
handle muscles, but we use some
proprietary tricks that make it work in
the engine. Start with the movements.
You go to the mesh and then you go back,
grab that movement data, add it to the
skeleton. And now as the skeleton moves,
you apply all that uh movement data that
we got or, you know, mocap so to speak,
and uh bring these this topology that's
now been morphed to the character's head
uh kind of to life. And now you can
start seeing them move cuz we got the
skeletons on there and so on. Once we
have that, you know, it's time to take
this kind of gray head and then actually
get it into the game to be able to start
applying our diffuse maps, our normal
maps, gloss speculars, subsurface
scatters, you know, kind of these maps
that are generated from these character
faces through a series of photographs
with each its own specific purpose.
We're not going for a pre-rendered
approach like lots of games actually
pre-render their scenes with very high
bit rate. So you don't see that they're
pre-rendered, but they are pre-rendered.
We want to try to get it in real time,
but our facial structure is so complex.
It's basically cutting edge that it
means like we need to really optimize in
a clever way. So we can actually have, I
don't know, four, five, six, seven
characters on the bridge in highest
fidelity talking to each other while the
player's present in real time.
As we build the pipeline, uh, the faster
it's getting. You have your animation
pipeline, you have your modeling
pipeline, you have your conceptual
pipeline, uh we have our facial scan
data pipeline, um we have our hair
pipeline. So there's all these different
pipes that kind of build the system that
we use to actually get from the very
beginning to the very end.
[Music]

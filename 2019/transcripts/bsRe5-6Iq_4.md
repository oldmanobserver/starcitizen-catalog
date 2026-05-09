# Inside Star Citizen: Weird Science | Summer 2019

**Video:** https://www.youtube.com/watch?v=bsRe5-6Iq_4
**Date:** 2019-08-15
**Duration:** 8:13

## Transcript

[Music]
visual effects if props are what make a
place seem lived in then VFX are what
can make them seem alive in the very
first place and recently team members
have been working with signed distance
fields to improve the way that particles
in any environment react to everything
from asteroids to many vacuum structures
like space stations and vehicles it's a
technology that can have far-reaching
applications in the way our player
characters interact with any environment
and it's just one more way we're working
to make star citizen into a living
breathing universe today we're going to
look at some improvements to the
particle system and that's some general
improvement that applies to particles to
all areas throughout the game I'm gonna
start off with showing off some
collisions and as you see here this is
the old particle collision functionality
we had as you can see the particles are
just going straight to reshape and it
doesn't look very convincing what we've
done now is that we can take Ted buffer
collision height map collision and SDF
and combine this also combining these
three can create very convincing looking
equations so now I combine this set
buffer collision with SDF collision and
as you immediately see it looks pretty
convincing from all angles in the
particle shaders we have a fairly
accurate physics computation we're
bringing a lot of aspects such as drag
and friction and particles can bounce a
couple of times and then they transform
into a sliding motion so we try to be as
physically accurate as we can within
still being good performance we can
increase the count of the particles if
we want if I disable their staff again
well we get back to this situation now
we're going to look at the different
scenario and in this this case we're
going to showcase how the different
elements of collision comes together and
what each element
contributes to the overall visual so I
will start off by enabling collision and
as you can see it's once is quite
convincingly at the movement but it's
not a very complex effect I will start
by adding some effects that will play
upon each collision event yes you see
now it will spawn these sparks this
gives a better sense of particles an
actual impact yet the main particle it
sort of comes just two straight stop so
I'm gonna add some slides to the
movement right
it reaches look still looks a little bit
odd at when it when it lands so I'm
gonna give it some effects that place
when it's yes add some slide as you can
see this is much more interesting
looking effect the main particle
collides with the environment it will
shoot out sparks from the collisions
position and when it hits the target it
will eventually after a couple of bounds
transition it to a sliding motion and
while it slide it will also emit a trail
afterwards in its wake and this
technology will apply to all areas of
the game and this is something we
continuously work on so we should be
able to showcase this some more in the
future so chemical reactions which are
the process in which two or more
substances act mutually on each other
and our change in is something different
like exothermic reactions which quite
frankly I studied before they were cool
you know what the worst thing about
doing chemistry jokes is no reaction
chemistry puns really in male in it you
can close it are recently members of our
audio team traveled to young chirping
Sweden to record the sounds of chemical
reactions that can be applied to a
multitude of uses within star citizen
in April of 2019 the cloud imperium
games audio team traveled to Sweden to a
small unassuming chemistry lab in
searches of really cool sounds
together with our friends from pole
position productions we spent a day
recording a bunch of crazy chemical
reaction sounds to use in star citizen
squadron 42
[Music]
[Music]
I
lastly before we let you go this week in
last week's sprint report we gave you a
brief look inside the current progress
of the value defender and promised we'd
follow up on it in the coming weeks and
because just suffered through my
chemistry jokes we're just going to go
ahead and let these exotic alien visuals
speak for themselves
[Music]
[Music]
[Music]
[Music]
[Music]
so what we learned this week we learned
that the VFX team is making space magic
that looks great and is less
resource-intensive that chemistry jokes
are a good way to get a over reaction
especially in the YouTube comments and
that the banner defender just looks rad
as all get-out to our subscribers be
sure you check out the six new life and
the verse t-shirts that were introduced
as part of this month's in game flair
reward the character team was super
excited to work on them for you and to
all the star citizens out there that
make all this possible
of course we'll see you next week
[Music]
[Music]
thanks for watching the latest and
greatest in star citizen squadron 42 you
can subscribe to our channel or you can
check out some of the other shows and
you can also head to our website at
www.uvu.edu/library

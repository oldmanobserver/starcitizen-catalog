# Star Citizen: Faceware Announcement

**Video:** https://www.youtube.com/watch?v=REUAt0OO-2A
**Date:** 2017-08-25
**Duration:** 11:29

## Transcript

hi there everyone I'm Sean Tracy and for
those that don't know me I'm the
technical director of content here at
cloud Imperium games and today I'm
really lucky to be able to show you a
feature that I'm personally really
excited about and this is a
collaboration between face where
technologies and cloud Imperium games
and what I'm going to show you is how
we've integrated facial tracking into
star citizen so to start showing this
technology the first thing I want to
enable is the live SDK technology so the
collaboration between cloud Imperium
games and face ware and Here I am you
can see that there's a bunch of
different dots on my face and these are
landmark points that we use for facial
tracking and the tracking is quite
intelligent so as I turn my head and a
face is lost we actually disable the
facial tracking and if I turn this way
this is handy for things like occlusion
so if your hand gets in the way maybe a
pen gets in the way we disable the
facial tracking at those instants now
you're not here to see my face let's go
ahead and take a look at how this
actually maps to a character so you may
recognize this gentleman this is Liam
Cunningham who plays Captain white in
squadron 42 one of the really important
things to notice or to note rather is
that this is still early days with this
technology we're doing a lot to map and
to improve the quality of the actual
tracking as well as adding new phonemes
in to the tracking so that the runtime
logic reacts exactly as we expect it to
so this is never meant to be a
replacement for facial animation but
rather something for the players to be
able to run and to drive an actor in
real time or a character rather in real
time this will be exciting for community
endeavors like machinima videos or maybe
even getting integrated to character
creators so that you can make your
character but then you can even see how
they would express themselves at given
different inputs of emotions so I just
wanted to pull his face around a little
bit so you can see the reactions of our
runtime rig logic so to explain how this
all kind of works is that we've got a
bunch of outputs that happen from the
live SDK technology and then through a
layer called motion logic we map all of
that to inputs of our runtime rig and
since every character with in star
citizen has
its own unique runtime rig created
dynamically they will always react
appropriately to whatever the inputs are
so it won't exactly be my blinks
it'll be Liam Cunningham's blinks
you can see even things like the years
moving when the scalp moves
[Music]
[Music]
and we even tracked the eyes
so let's go ahead and show how actually
different bits of rege logic might react
a little bit differently giving a
different character essentially so we've
gone from a tier 0 rig down to a tier 2
rig and the only real difference is that
this is more indicative of what a player
will have and when truly what changes is
just the blend shapes as well as the
wrinkle maps that play on the specific
player so this is Tiger you might
recognize him from pupil the planet
videos
[Music]
the mapping is changing very
dramatically
this is Haynes Haynes is a very
different face than really I have
obviously
and it works at all different distances
if we start pulling out you can see that
the mapping still holds up as bullosa he
has really quite nice wrinkle maps that
happen on the side of his face for my
face to the side
where this feature really comes into its
own is in the combination of it with our
VoIP technology alright so here we are
in multiplayer you should be seeing me
speak from Vincent's perspective and
this is all being sent over the network
and unwrapped on the client side so
Vincent was kind enough to get a couple
staff together so that we can show you
this feature thanks a lot to do that
Vincent no problem that's what we're
here for
awesome so I think one of the best ways
that we can do this is maybe just
everyone introduce themselves real
quickly okay I'll go ahead and start my
name is Vince Sinatra I'm the QA manager
here in Los Angeles my name is Julia
Wilson I'm a QA senior care in Los
Angeles and I'm Andrew Hernando I am a
QA tester here in Los Angeles awesome
so maybe to show how this can really
sort of be driven from the players side
Vincent you've really got some good
eyebrow tracking why don't you show me
those eyebrows right on that looks cool
Julia she'll be happy that's pretty
close all right and then Andrew why
don't you show me some angry that's
perfect
fantastic we've talked about how this
feature can work on a consumer level web
camera however here's Peter Busch from
face word to talk about a motion sensor
they've developed specifically for this
feature hi my name is Peter Busch I'm
one of the cofounders of face we're
technologies and face we're interactive
face wear is a facial motion capture
company we create hardware and software
products that can create animation
simply from video about a year ago cloud
Imperium asked us to do something we've
never done before
integrate our real-time technology into
engine and allow game characters to
interact in a moat in real time but by
being live driven by the players
themselves this is quite an engineering
challenge but I knew my team's in Austin
and Los Angeles could collaborate with
the incredibly talented cloud imperium
development team to make this happen the
new Foyt feature will work with nearly
any camera but we were asked what's
going to create the best possible
experience so we set out to engineer the
first gaming device designed
specifically for facial tracking here it
is the first prototype facial motion
sensor this is the first one off the
production line now there are many specs
about this device that are going to give
you the best possible experience for
facial tracking first the image sensor
runs at 60 frames per second now while
that's important is the way in which our
technology works from one video frame to
the next
we basically can create an animated
result meaning what we see in that first
video frame were going to analyze the
expression on your face and by the next
video frame we have that animated result
so the faster that that frame rate is
running the faster you're going to be
able to keep up and get that performance
and at 125th or one thirtieth of a
second which is common in most webcams
it might not keep up and your lip-sync
might not read but it one sixtieth of a
second now the words that you're saying
are going to be spoken by your character
running in-game now second we looked at
where most common you're going to be
using this device and more often than
not you're only going to be lit by the
light coming from your monitor so the
sensor had to work in a low-light
environment so we selected a 1/3 inch
three point four megapixel sensor that's
capable of 720 or 1080 at 60 frames per
second in a near dark environment
third-most webcams are wide-angle lens
which makes your face a little bit
smaller and frame and a lot less facial
details and facial pixels for our
technology to capture and track so we
selected a single user field of view now
this allows our technology to basically
get more pixels from your face from that
frame and get the best possible facial
details in the engine now fourth we put
on a high-resolution glass lens it's
going to resolve that data and give us
the best possible and sharpest focus for
facial tracking these specs are going to
allow you to have the best possible
experience with the new poit feature
well this is only a prototype we're
going to go into mass production and
we're going to bring this to you we've
been working on this technology first
nearly seven years but this is the first
game that's wanted to integrate this
into engine and allow character to
character communication like you've
never seen before we're excited to bring
this to star citizen and we can't wait
to see what you do with it alright so as
you've seen it's still early days and
we've got a little bit more work to do
on the facial mapping some of the
phoneme extraction to make sure that it
looks really accurate but even in this
really early implementation I think it
shows a lot of promise and I really hope
that you'd agree having integrated this
technology there's a lot of ideas and
things we wanted to try with it so one
of the ideas that we came up with was
that because we already know the
position of the face itself we actually
know where the head is so we can do
something pretty exciting I find it fun
is head tracking so as I move my head in
real life all the camera is moved just
as if you were driving a track I are a
sort of simulation but this is again all
from a consumer level web camera so this
actually adds quite a bit I find that
this gives me a ton of situational
awareness when I'm flying around I can
just move my head a little bit more I
can check on my power
check out my shields I can even inspect
things a little bit up close if I
combine this with zoom
we've got some towers over there up you
can even do crazy stuff like rolls hold
it the other way that's kind of fun if
we combined it with this so here I'll
try to keep my head on the horizon until
it's just too much and then we put it
back over and maybe look up let's see if
we could see anything from Levski there
oh yeah all right and then we'll roll it
back over
the other way and there we go
so as you can see it all it is very
natural and you can just look around
within it and again it's kind of coming
for free because we are already tracking
the facial position so we can
extrapolate from that what the head
position is so as you can see the
collaboration between face wear and
cloud imperium games even in this early
stage of development is already breaking
new ground and doing things that haven't
really been seen before so we're really
excited to develop these features and we
can't wait to get them to you so until
then this is Shawn Tracy from cloud
Imperium games Los Angeles saying
goodbye
[Music]
Eric's got a little song that he
sometimes kind of comes in sings and it
looks pretty awesome
so you want to take take it away oh I
once was a perfect

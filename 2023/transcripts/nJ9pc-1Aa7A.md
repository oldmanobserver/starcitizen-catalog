# CitizenCon 2953: Life In The First Person

**Video:** https://www.youtube.com/watch?v=nJ9pc-1Aa7A
**Date:** 2023-10-27
**Duration:** 52:30

## Transcript

[Music]
hello
everyone you know it's a am I too early
no it's a real pleasure to be here at
CIT Con in person I've had so much fun
thank you all uh but my name is Yan I'm
here from Manchester I'm going to talk
to you about some improvements to play
trisal so we're going to start in Ser G
where we've been rebuilding the Eva
experience from ground
[Applause]
up so the first thing you should see is
that we've made the uh exit from Gravity
less
disorientating
oh we got a faith
plant ah we made
it all right so we made the re-entry
much more
forgiving um so this uh Eva has that new
prone lateral pose and this is really
important to us because it allows us to
get close to surfaces and allows us to
walk across them so we can see that in
this video
here okay and as it go to the end we're
going to jump on okay here we go into
that and this smaller profile let get
into spaces we couldn't get into before
or not easily with the old Eva we're
going to Traverse through here frad the
needle and also the Collision is much
more forgiving we're going to slide off
as lower speed so we're not going to be
spinning away okay big
reveal love this station this is
amazing and we're also adding grips so
in Interiors you might be able to hold
on to grips to do
interactions and walk between the grips
to get better
control uh
now thank you very
much so now prone has long been a
problem Motion Set for us right but but
taking these Eva posing Solutions we
saw we can now rotate around the camera
without any trans Lal translation so
we're not rotating around the hips
anymore and it allows you to aim much
better
we're also not moving the bod we don't
need to worry about the external
collisions anymore right we're not going
to get pushed
around of course prone isn't all about
looking around we want to Traverse as
well so we're going to head down this
vent and here we put in a new Collision
style so this is all about letting you
have control in narrow small spaces
smaller than this uh we're going to be
able to push around the corners going to
go run tight bends and we're going to be
able to reliably go up and down
slopes uh and this is where prone led
the weight so we then took this and we
put it into the Eva so if I turn off
gravity here which I'm not going to do
but if I did the Eva would have been
able to Traverse the exact same place
and by having the same these Motion Set
so similar we can exchange success
between them and that could then be done
to other horizontal sets like prone
light sets for example like the water
will showed last um
yesterday we might be able to take you
swimming there one day
so okay we're going to move from the
horizontal to the vertical so with
ladders we put in some new subtle and
significant improvements so we got
midpoint markups but let you enter the
ladder is
anywhere we're going to let you look
around so you can do
360s we going to let you lean on the
ladders so that you can avoid obstacles
or peek around corners and this all got
a full new animation set it looks
amazing especially with all this
beautiful star cloth you know you got
both both the hood and the cape there uh
it looks
amazing um okay so with combat we wanted
to add more speed to the encounters so
what we've done is we've removed the
weapon penalty so you can move at the
same speed with and without the weapon
out we've reduced theer
so you're going to be able to push up to
your desired speed faster and this is
already in 320 and 321 and we got more
things like this to
come right so I didn't just want to talk
about improvements I've hinted the
swimming but I'm going to show you a
different feature right so sliding so
with the power slide you inject a burst
of
speed this doesn't take just take you
from a to b f you're going to have a
reduced profile you become a smaller
Target uh it doesn't come for free you
know you're sprinting that's going to
cost you stamina your sliding that's
going to add some stamina cost and when
I do it back to back like this my heart
rate is just pumping pumping pumping
right so you got to be a bit careful you
can't just slide your whole way from the
hubs to the uh
Spaceport okay so another thing that is
really important to us is that with this
slide it's a short duration but we want
interactivity as soon as possible and
that's true for all our motion we're
going to go through all of them and give
you
interactivity uh so with this slide we
want you to be able to aim around as
soon as possible the moment you hit the
ground you're going to be able to aim
around all right and the direction is
locked so if I was to slide from one end
of the stage to the other I would be
sliding this way but be looking this way
right look at you guys hey uh but while
I'm sliding I can hip fire and as I come
out in the exit I can ads I can lean I
could go back to Sprint right away so I
could do back to back slides uh like we
saw in the last
video okay so moving beyond uh traversal
just to finish this section I want to
talk about new Hazard now you saw saw
this uh yesterday in the UI
demo
um I lost my fault bone can you press
the
button that's it okay radiation right so
radiation for that it's a new addition
to this access data system and we look
we need to look at the bottom left here
so in the middle you got the amount of
radiation that being pushed on your body
if you have a directional Source it's
based on your body surface and your
distance to that source so by going
behind the cover here I can completely
cut off all the radiations I can use
that and then on the on the left we have
an icon that has a shield around it now
that Shield Works in two ways first of
all it comes from your outfit so
depending on what you're wearing you're
can have a better or or or less accurate
Shield right uh it has a threshold as
long as your radiation doesn't exceed
the threshold The Shield will hold
through it'll scrub all the radiation
off and you can stay there as long as
you like but as the uh Shield starts
peeling off the rad then when the
radiation get higher The Shield will
peel off and you know the radiation K
sickness kicks in right at the end of
the video here and my health just
deteriorates super super quick um so
yeah that's not great
okay so we're going to see some more
radiation in the in the next game uh
next section so I would like to welcome
Ines up on this stage thank you very
much
[Applause]
everyone why are we showing that okay
hello everyone my name is in and I'm a
gameplay programmer here at cig and I'm
here today to tell you all about thank
you so and I'm here today to tell you
all about the features we've been
working on to improve the player
interaction experience with the physical
objects in the
world so let me start by telling you
what we've made to make it easy for you
to identify and interact with these
objects in the world we have introducing
the new uh traction prompts which are AR
cards that appear over the objects as a
player gets near them the combining with
scanning will help the player to easily
identify the interactable objects in the
scene so we have improved the algorithm
that our interaction system uses to
determ the current item in Focus so
you'll have a smarter detection and
selection As you move around and look
around the
scene so the prompts will show you the
active interaction and the key bind that
you can use to quickly trigger it like
you see on the pictures so we are trying
to minimize the friction of the player
to interacting with his objects you no
longer have to go into interaction mode
to bring up the cursor then drag it over
and to select using the in so we're
removing
that so what happens if an object has
more than one interaction well for that
you can just simply old old half and
this will bring you the new interaction
wheel so this is our new interaction
wheel it will be focusing on the item
and you can see that up to two of the
interactions have a star icon so this is
related to another system you are
bringing to you that we call in the
default item actions so this is allows
us to have a primary interaction that's
the one that shows on the prompt and a
secondary interaction so these are
default actions that you can easily
trigger using shortcuts so this change
these actions will change based on the
combination of the item the player and
the environment state
and although designers do choose the
default actions that we bring to you you
are fully able to customize them to fit
your preferences and playing style so
let's take a look about this in
action here you can see the prompts that
changed depending on your focus that let
bring up the wheel and you know I really
like my plushes so I want to inspect
them when I find them around so I'm
changing that to my primary and you'll
see that does not affect only the item
they interacting with but any item that
falls into the same
category go next okay so I've shown you
some features that
improve thank
you so I've shown you features that
improve the readability and easiness of
interacting with the objects in the
world but the other part of our Focus
was to bridge the disconnection between
the player and the object you are
interacting with in a fully physicalized
world that we want to provide you a tal
experience is very important to selling
experience so we introduced a new system
that allows us to play animations on the
player of actually reaching out and
physically touch the objects in the
world
yeah so our main goal was to give you a
better immersion Min but at the same
time minimizing the friction and the
control we take away from you so this
really was an exercise between code
design and animation to give you the
best experience possible let's see some
of this in
action and you know pressing buttons has
never been so satisfying and
[Applause]
fun I don't know I just kind of like
like
go
[Applause]
[Applause]
okay so let's continue with this theme
of tactile experiences the next thing I
want to talk to you about are usable
interactiveness so usables are objects
that have existed in our game for a very
long time and you know designers have
had a variety of tools to build these
really interesting and complex sequences
for the AI but up until now what we
could do for the player was very limited
so this past year we've been building up
our tools that provided for designers
that designers could build this really
interactive experiences before the
player and the advantage of using the
usable system is that that anything that
the player will be able to do the AI
will also be able to do so let's have a
look of a simple demo that one of our
designers put together to see what we
can now
achieve so in this scenario the the
player has to go forward and can't go
forward because of the toxic water so he
has to go over to the valve to turn off
the water so before we could maybe play
a simple animation when you interacted
but now designers can give full manual
control to you so you by pressing
specific inputs you will be driving the
system so but this is not enough we
needed to be able to give designers a
way to translate what the player is
currently doing and affect other objects
in the world in specific ways so this is
what is happening here as the player is
turning the valve is controlling the
flow of the water that's coming from the
pipes and what should happen when the
player is no longer in control do we
want to keep the state revert back to
the initial one or maybe trigger
something else
all together well it's up to designers
to define the type of experience they
want to bring to you so
let's finally turn up to turn out the
valve rush over before that broken valve
starts turning off and then see another
small
example oh let's go so yeah you'll see
another small example where you won't be
able to open the door by a press of a
button but you have to manually interact
with that pump and manually open it so
you'll have to time your inputs to
slowly open the door so this is just a
small taste of the level of
interactivity that we can now have with
these objects we had really nice results
for squadron for the mesle line and you
know I can't wait to see what the Pu
designers will create and bring up to
your
hands
thank
thanks okay let's quickly talk about
kiosks and Terminals and let's be honest
it's really hard to interact and get a
good view of this ones so we have
created we made a small little changes
to make it easier for you we've created
a new Focus mode that will walk the
player to perfectly aligned with the
kiosks so we can better perfectly frame
the uh the screen on the viewport at
this point the interactive screen will
steal the input Focus until you actively
chooses to leave so let's take a look at
this in
action and look at that when you trigger
it and
like yeah so this is a very small
improve quality of life Improvement but
it will make it much easier for you to
interact with it
[Applause]
feel and you know F though finally let's
talk about looting this is our new
looting screen it's not replacing the
inventory but it will be used when
you're looting a body or any other
lootable in that you find in the world
was specifically designed to improve
this experience so since looting is a
common action during FPS combat we
especially if you haven't fully prepared
ahead we wanted to make it as easier and
quick as possible so you could spend the
minimal amount of time to grab any items
you need from your target so displays
the current load out and a simplified
version of the inventory looting space
favors speediness while the inventory is
there so you can fully manage your load
out so we're still actively working on
it and this especially on the UI and art
but I want to give you a little sneak
peek how this all
[Music]
works okay let's go over to I just so
you see the the play load is on uh items
on the bottom the target is on the top
you you can over if you hover the
different widgets you'll see a tool tip
that with the different quick actions
you can do you can just simple
press yeah it'll be so much
easier so yeah you can quickly press to
just equip or swap you can even use your
mass wheel if you want to change the
target you can yeah drop anything store
anything just really quick actions and
you'll see in a minute that we also can
trigger ammo reping so this will grab
all available Almo either from your
target or from your inventory and we'll
fill up the magazines in your load out
and drop and get rid of any empty
magazine so yeah looking really
good yeah so it's looking really good
and I can't wait to see the final art so
that's all from me so thank you so much
for listening and I hope you have a
great time
[Applause]
time right hello everyone for those who
cannot remember my name is yans and I'm
now going to talk to you about some
changes we made to our stealth gaml and
I'm going to give you an update on
weapon
Weare right so takedowns is an important
part of our uh stealth encounters so
this is where we're going to add some
player player skill progression it's
going to move you through different
action set you're going to start out by
struggling you might
fail of course this will this sort of
added time and the extra noise you're
making is really going to increase the
increase the risk of detection you're
going to get faster the more you do it
and then you're going to reach maximum
efficiency check this one out so he's so
fast you can barely see him do it and
then he guides the body to the floor so
he makes almost no noise
right um we're going to explore some
more variation beyond our unarmed and
our knife takedowns like sedative
injection pens and contextual takeown so
this guy on the railing here let's see
what we can do about
him so by using the environment we can
make a more we can do a more efficient
takedown than maybe our skill level
would have allowed and it certainly
looks a lot cooler and we're going to be
able to use this to get to enemies that
might be otherwise difficult to to get
to with our normal take Downs like a
pilot strapped into his Pilot seat you
know sneak up on him and take him
out okay so uh in that last video we
incapacitated that enemy a lot uh I'm
going to introduce you to a new weapon a
new item sorry and that's the restraints
so with the restraints okay let's take
him down
first one
more oh okay so with the restraints
we're GNA turn him over we're GNA cuff
his
hands we're gonna cuff his
[Music]
legs now if he wakes up he can't chase
us down right but he could call out for
help so what we're going to do as well
is we're going to add places in the
environment where you can stash a body
you can hide them either in unconscious
or dead and there that way to be easier
to remain undetected and keep you in
that stealth
bubble um now this is another thing we
talked about in the UI demo uh which is
the Ping and we saw it in in asha's
presentation how she did a short ping to
highlight a a door pump now of course we
we we allow you now to charge up that
ping and by doing so we can see further
and we can see through obstacles and we
can populate more information into our
data bank that then uh shows up in our
um box outs here so you get the name and
you maybe get the race and maybe the
faction uh and you can use this
information to figure out where where is
the weak link which enemies can I take
down without being discovered um there's
a risk here okay so there's a charge up
time means you can't do it all the time
it's going to recharge slowly you see
the bar at the top slowly going down
until that goes all the way down I can't
ping I can't even do a short ping and
it's going to spike my emissions of my
signature uh as so an enemy with the
right equipment or tech level might
discover me um okay
so let's move on to some talk about uh
weapon wear so here we're going to see
an simulation of a weapon getting more
and more worn over time um we're going
to expand this Beyond weapons to other
FPS item like your armor your clothing
your
helmets um in actual game this would be
triggered by weapon usage right so the
more you fire your gun the more one it's
going to get and this going to affect
its efficiency it's going to affect its
reliability and it's going to make
reduce its resale value
um each item is going to wear at its own
rate and prist at its own rate you could
have a A Worn rifle with a pristine
scope or a pristine rifle with a worn
scope check this one
out there you
go
so the geometry isn't the only thing
that going to change as your weapon
wears so here we're going to see a
pristine um Gemini pistol in the little
window and a worn one in the big window
and you can see the visual effects it's
beling out smoke here because it's very
worn right it's telling you you know
it's time to get this one changed and
you should be able to hear the audio as
well it's it's get
grower okay onto some consequences so
just it's not all visual so we're going
to startop with misfire so the first
thing is going to happen is you press
the trigger your gun doesn't fire the
second thing that happens in this
video you
got I hope I hope you you guys know
what's happening so he goes and then
goes click that's the bullet getting
lodged in the chamber right so we got to
fix it so it's telling us to fix it we
hitting the button be hitting the button
our enem firing on us so you got some
options you don't have to fix it you
could halter your gun you could pull out
a new gun H you could use that new
looting interface show to to grab a
better
gun
okay okay I'm going to finish this
section with a features that's tally
related to where and that's the dirt
accumulation so here again we're going
to see a simulation of dirt accumulating
over time on the on the same rifles we
saw before but in the actual game this
would be based on your activities and
the environment you're in so if you're
running around in a sandstorm you're
rolling in mud uh you leave your gun
outside Proper Storage that it's going
to accumulate dirt and that's going to
increase the rate that which is wears so
the the dirtier gun is the faster it
will wear out and this is true for other
biome accumulations like uh
Frost so let's take a look at this one
as
well oh or
not
okay so yeah so in the future it's going
to be really important that you keep
your guns clean and repaired uh I'm now
going to welcome Zach on stage and he's
going to talk to you more about the FPS
weapons thank you very
much hello I'm Zach PRI I'm a senior FPS
game designer I'm here to share some of
the new interesting FPS things we have
to bring you so if you play Modern
Shooters you'll have noticed that the
quality bar has gone through the roof in
recent years things from visual recoil
to VFX just overall General weapon feel
and as you know we recently did a pass
on our weapons to get them bit more up
speed but we just we couldn't hit that
quality bar that you know we really
wanted to cuz guns are viol in nature we
couldn't betray that as much as we
wanted to so we made a new tool and it
allows us to show the violent nature of
weapons well you know creating greater
weapon to weapon variety you know so and
they this new tool also integrates
better with other systems for example
you just saw like wear and dirt and
things like that and I'm extremely proud
to show you the new weapon
recoil so this is the old
P4 it kind of Falls a bit flat you're
not really getting that like um that you
want but you probably shot this a
million
times now the new
P4 it has these nice little Bop downs
and you feel it getting close to the
camera and the overall aggression of the
weapon is a lot more there it feels a
lot more visceral when you fire it this
new tool gives us granular control over
the movements of the weapon so
essentially what we have in one of our
tools now is almost an animation tool
where we can control the rotation and
the loc location of things so this is
the old PA
SMG this is a new
one and in general it's bringing the
house down
now so recoils are just in general
easier to tweak now and they're a lot
more impactful and we can create weapon
Variety in just far new more and
interesting
ways
cool okay thank you very much um
cheers we also have new procedural
animation over our ads so previous ly as
if you play right now you basically have
a linear posst to POS transition and
sure it's there but you know now we lay
some of this procedural stuff on top so
for example if an SMG it can come up a
lot quicker it can flick up you feel
really cool lmgs can be a lot more heavy
so before it basically just do you know
move from pose to pose but now we can
like keep it longer down here bring it
up slowly and overall it just feels like
you've got an lmg or it feels like
you've got an SMG we just using things
like you know ease in and ease outs and
just give more life to the
weapon there we go and we also have new
Iron Sites so sci-fi weapons are chunky
they're full of detail they look really
cool but a lot of that detail can
potentially get in the way sometimes so
you've seen this is a change to the Cara
where we have raised the weapon site and
given what we call the target
acquisition window more room to breathe
so if you're aiming at somebody you can
just generally see a lot more so Optics
aren't a crutch anymore so so you can
see this on the
ravager and you can see this on the
custodian now weapon functionality
changes so as you imagine with a new
Reco tool we're going to do a pass on
all the existing weapons they're going
to look and feel great but what you know
while we were looking at our weapons we
also realized that some things don't
necessarily you know align with their
manufacturer right you look at something
like a Gemini piston now Gemini overall
it's rule of cool like that's what
Gemini is supposed to be so the lh86
pistol should be fully automatic
realistically so we have a video to show
you of the
pistol and as you can see it goes
ballistic when you fire it the magazine
counters also increase to allow for that
just crazy feeling that the pistol
gets
cool cool thank you very much
right and moving on to our new Vault
weapons so oh it's the other
video that's the optic one there you go
than uh these are the Vault weapons so
vault is primarily based around
controlling a heat of a
weapon these weapons have the potential
to overheat and if they overheat you'll
be unable to
Fire and they will enact differently so
some weapons will just basically be
beams from the get-go some will go into
beams let say this one goes into a beam
once it reaches a certain level of heat
and it's really fun because you know
these are quite powerful weapons and you
basically want to manage the Heat and
you know keep it in that like ideal spot
okay
cool and scope improvements now this was
shown yesterday but I want to dig in a
little bit more with this one
so oh so to get our
if anyone plays a modern FPS they know
the Optics are just gorgeous now in all
modern Shooters they look
fantastic and as you can see we have
zoomed in Optics in the center so we
have and then we have other things like
Parallax like you see in real life and
they look gorgeous and um so in general
all our SES and Scopes have been
overhauled to be more realistic with
things like Parallax pin cushion
Distortion and things you'd expect from
having a scope in enal and it differs
manufacturer to manufacturer right so
some things are purely digital some
things are purely physical so if you get
hit by an EMP grenade for example or
using something like a television site
like something like um kuey might have
then your optic would turn
off right thank
you and weapons are ultimately as only
good as they sound I'll be quiet for
this next bit but as you know we've done
a lot of work on our audio propagation
systems and just in general how guns
sound we've also switched out some
noises and made them feel a lot more
beefy
[Applause]
fantastic I think all of California
heard us there um so backpack reloading
in real life combat scenarios you often
grab magazines from other Surplus areas
and we want to simulate that in our
game
so to show you this we have something
called backpack reloading if you run out
of ammo in Star Citizen you have to open
a menu put things on it's a little bit
clunky it's a little bit awkward so if
you have magazines in your backpack you
will now be able to grab them at the
price of a longer reload
animation you will also to tell when you
have a backpack reload coming up because
it will be displayed on the inventory
with the backpack symbol so there's no
surprises no catching of you of all the
information you
need and this has been shown and it's
been teed a little bit the dynamic
Crosshair now no more third party uh
Dynamic Crosshair well crosshairs now so
if you have a look at this this is our
new Crosshair it's a Crosshair that fits
the aesthetic of Star Citizen it's a
Crosshair that follows the barrel that
weapon so you'll see exactly where a
bullet is going to land and it's
projected from the visor using AR some
visors won't have access to this
Crosshair but some will use modified
combat lenses so if you don't want to
use the Crosshair you can just use a
different visor as you can see it works
with recoil and overall it just looks
gorgeous
cheers and onto more data things we're
going to provide an improved PVE
experience
the accuracy calculator for NPCs is
coming over from Squadron 42 some people
have been playing it in the venue and
here and I've been harassing them
whoever is doing the hanger mission to
get their feedback and it has been
overwhelmingly positive we also have new
NPC archetypes what we're temply calling
the jugut which is basically a very high
damage resistant enemy that has an lmg
or a shotgun as soon as they see you
they fire they walk up to you and
overall it's been playing amazingly and
I'm really happy for you guys well I'm
really excited for you guys to get your
hands on it at one point
PVP we want to increase the time to kill
this allows for more varied weapon
balancing you know we can lay into like
sort of a different aspects of the
elment more it leads to higher skill
cealing and less unfair deaths it will
no longer be a game of whoever shoots
whoever first speaking of which force
reactions we're reworking them we're
wear it's fustrating and we are going to
rework the system to work beautifully
and we're also work some other highly
requested PVP
changes I'm very happy to say a lot of
this work has been dialed in Squadron 42
is in a very good State and we're
bringing this to you
soon now over to the AI director Fran to
share some exciting updates on combat
[Applause]
AI hi
everybody so I'm franisco Uchi as you
said and I'm the director in cig it's
great pleasure to be here with all of
you guys it's
fantastic so what we're going to do
today is to explore how we all the work
we've done for squadron 42 is going to
flow into the star citiz and experience
so we wanted to make the ey presentation
about how you guys are going to
experience the tech and the features we
have been working on so from the player
perspective you've seen how many new
opportunities you have and now it's
interesting to see how the NPC are going
to react to
that so the goal of Star Citizen is to
build a breeding and living environment
where your actions matters and the NPC
you will find in the universe needs to
have the same opportunities and same
limitations that you have so when we
play a game we want you to spend a time
that feels memorable that feels special
right something you can remember and
talk about so we want you to give you a
challenge to overcome but also a
challenge a challenge that is fun and
doesn't feel repetitive and
boring so when we look at FPS encounter
we want to build variety we want to give
the designers like Zach the ability to
craft combat scenarios not just to put
NPC in the level and we need to make
sure that he can tweak something such
that it can experience the unique play
SP style and the play space that you
have so Star Citizen can benefit from
tons of unique environments so for those
environments we want you to have
different type of fund so what we look
at today is the some of the tools that
they have to achieve this goal and bring
the eye to the next
level so the first to we're going to
look at today is the MPC trade system so
we spoke about this in the past and we
have now available for designers the
initial set of traits they can use to
influence the behaviors so those are
some of the one that are available to
the designers today we're going to focus
on the combat traits because we have
traits that also apply to the peaceful
situation and the social environment but
those are the one that influence NPCs
during a combat scenario and traits you
can imagine them as characteristics NPCs
have or don't have so through the usage
we can make sure the combat feels
different from one encounter to another
traits in Tech tech-wise are just traits
and tags that we can apply to character
instance character classes but code
canot Supply them automatically based on
specific rules for example if you see
somebody you know with a rocket launcher
those will apply an example the the
Sentry tra automatically because those
weapons are weapons that work well
arranged so you want know them to not
push forwards to you so they allow to
block or actually you know they allow or
they block specific section the
behaviors to run but they also influence
the likelihood of some logic to happen
or the the modified outcome of specific
actions
so let's imagine we want to model a
pirate faction something that you can
actually experience in the Pyro
playground so we want them to feel
aggressive but also not very trained
they're not very military so how do we
do it with the
trades we can start adding to this
faction either the aggressive or
Reckless trade those are trades that
increase the risky behaviors so for
example fighting more in open space or
expose themselves longer when they are
in
cover we can then assign to some of
those pirates the ignore fire
obstruction trade as you've seen for
example in Chris Rain presentation
during the CT ctg demo like we have now
destructible environment so what NPC
will try to do is to keep shooting at
the position the enemy has been hiding
into so you will see destroying
environment but they you will also see
them being less careful and and managing
their armas
for others we could use the
undisciplined trigger finger trait so
this trait is for example meant to uh
convey the inability to control their
weapon when they are emotionally engaged
in the fight and what it will cause is
them to trigger the weapon much longer
compar or much or or you know Al just a
bit longer compared to what the behavior
is
asking so being better at preserving
their ammo means they will also run out
of bullets much quicker so this offers
interesting opportunities for players
because they can now shoot at them while
they reload or where to scavenge the
environment so trades are building
blocks we can use to define our
character faction encounter should feel
and designer can now create a a wide
variety of encounters for you guys to
enjoy the
game so we want I want to make a picture
for you guys so this is the bunker
mission in pyro right and we have a set
of enemies that are defending the
environment so this a imagine a
infiltrate and destroy mission those
guys are there defending the bunker and
you need to take it over you need to uh
basically uh kill them all you are now
fighting against enemies that they
defend the
environment so before we go to the next
slide imagine the same environment very
similar enemies
but different traits same behavior so
now you are defending an environment and
they are aggressive towards the
environment they want to take it so what
you will see here Zach created a mix of
enemies some I'm it with for example
shotgun and aggressive traits now they
will push towards you they will force
you to take actions and to react to
them they
reload some will cover up
obviously this is with with god mode on
so Zach was not dying so this is
possible to set up with a tick of a
box but this is not enemies because in
Star Citizen we want you to are your own
crew members and those those crew
members those characters will have
different personalities different traits
different training level that they can
build up but when you look at their
traits we want you to see their
strengths and their weaknesses so that
you can pick the one that either match
your play style or compensate your play
style so one good thing that we want to
show you today is the medic so there are
some NPCs that can carry obviously M
pants but not everybody is able to use
it well or wants to use it in a specific
encounter so we want to tweak this and
we have the medic trait here we combine
a lot of the teec that we have spoken in
the past usable Tech you know Behavior
tech and as yens showed you players now
can just not only kill enemies because
before our NPCs would just die but now
you can take them down you can restrain
them so the I perception is to carry all
these information about the different
actor States so he needs to know if he's
down but if he's still alive or if it's
just you know somebody that you need to
wake up so a medic in the regular combat
floww can and when it's safe to do so
and at the right time attempt to heal is
made that can be helped so now you can
imagine Guard Patrol in the environment
you take down a character the guard
finds this de this body on the ground he
doesn't know if he's alive or not so he
can go there he can check it check the
pulse see the state and if he can be
helped he can basically execute the
right healing process if he needs a med
pen he will use the med pen if he needs
to shake him to wake him up he will
shake him up and if he needs to
we ar straining your crew members can
also do the same with you so if you are
down in cre condition they can come and
help you
out we'll see now an example of this
where two factions are fighting and you
will see that at the right time when the
guy Retreats this guy can go there and
heal his
M and obviously he needs to pick up a
new weapon because he just dropped
it so as we mentioned before and as
you've seen here NPC can run out of
bullets but can also lose their weapons
so what we have to do right now is that
first of all we want NPCs to have a
concrete ammo pool to use we don't want
infinite Amos
anymore
so the ammo pool is actually constructed
by the amamos NPC carrying their weapons
the one that they carry the one that
might have and all the magazines they
carry they don't have any more bullets
out of that so NPC must properly use
those item to fight and the longer the
engagement the more likely it is they
will run out of bullets and they will
have to scavenge the
environment how do they do that is
through the MP the usable system as you
have seen with inish as well inish
presentation you see that anything the
player can interact with the NPCs
actually can the same exact way so the
dead bodies can be looted same as drop
White weapons ammo crates will have
physically inside some weapons magazines
they can provide you with items and NPC
can understand where you can find ammos
that are actually functioning with their
own weapons and they actually can decide
for example if they if it's better to
reach an ammo crate and get some new
amamos or if that is too far or towards
the enemy they can decide to pick up
another
weapon so you will see that uh also
already in the in in pyro you might see
it and once they decide to do so
obviously they don't have bullets so
they cannot fight you what they can do
they can also switch to their sidearms
and the sidearms is less effective
obviously from the compared to the
primary weapon but it is still better
than nothing for them to protect
themselves while they go around and they
loot the
environment so we'll see here an example
where some MPC R outs a
bullet obviously in this video we give
them a chance to to go and loot as well
and this is a proper ammo crate that
allows them to get back
magazines and another MPC
arrives and he will loot the dead body
this is the same the same dead body you
might be able to loot and you will not
find amamos after
that but you will probably find it in
the other one once you get
it
so last but not least another tool in
the FPS Arsenal is grenades grenades are
a great tool NPC can now fully react and
use grenades in the environment so
grenades are a great tool especially
when NPC needs to counter a player that
is camping or a player that is hiding or
saying a location that the play NPC
cannot reach so grenade Force the
movement that keep the action going but
they also very dangerous youve seen in
Ali presentation and Mike presentation
that a grenade can make elect ronics
explode ignite a fire and then the fire
can propagate in the environment so NPCs
needs to properly understand the
environment and not jump into the fire
and and know get damaged so how do we do
that is we have a new food system to
handle hazards basically Hazard on the
technical side can create a navigation
volume modifier the navigation modum
modifier gets registered navigation
system and our basically mesh can be
modified and it will carry seman think
about if that is a danger something
better and how much costly it is to go
through because maybe you have a suit
that allows you to go through the fire
so that is fine you will not you know
the NPC can understand that but if they
can't they would try to find positions
that are safe for them to position
themselves but also paths that will
avoid those dangerous areas and I will
see an example of
that you know this is a safe environment
still fighting but safe safer
what it will happen
now fire ignites and propagates this is
fully Dynamic so fully control it's
fully controlled by the fire system the
fire system modifies volumes in
navigation system and we really know
where we can and not pass at any given
moment so this is a sub set of the
things that we worked on and we wanted
to show you today thanks very much for
listening and now back to
[Applause]
yans right I want to thank inesh I want
to thank Zach and I want to thank
Francesco for joining me on stage today
h we want to extend a massive thank you
to everyone who contributed to supported
us and made it possible to show what we
showed today now with Relentless
optimism we're looking forward to
bringing you this all to the starve
Citizen and more okay we're going to
leave you with a a quick peek of a a
demo in hang of for of checkmate with
some of these new
features
[Applause]
[Music]
enjoy
[Music]
look
[Music]
[Music]
take
[Music]
[Music]
[Music]
[Music]
it
h
[Music]
right thank you very much I I urge you
all to come and join us in the Pyro
playground pit and have a go at Hanger
13 in check in Checkmate it's a really
great encounter
thank
you

# Star Citizen Live Gamedev: Making Ship Up IV-2

**Video:** https://www.youtube.com/watch?v=CCP8IW0zpnI
**Date:** 2024-06-14
**Duration:** 1:02:03

## Transcript

Rin 44 says I'm here for the nothing
stream thanks for watching Rin 44 hi
everybody welcome to another episode of
Star assist and live Game Dev making
ship up
4-2 that's a shout out for uh Jake o
capella and our final fantasy folks here
if you've never seen star s LIVE Game
Dev before it's where we take about an
hour out of the end of our week and we
hang out with some of our developers and
we watch them work we explore the
process we find out a little bit more
about how game development actually
happen of course nothing can actually be
made in an hour I mean not maybe a rivet
for that old freelancer model that was
as big as the Idis once upon a time but
other than that you know we do a
compressed shortened uh hyper fast super
anxious for Alberto here hour to show
you a little bit of the process and this
week we're doing something we got a
Twist on it that we've never ever done
before so before I get to what the twist
is let's introduce our developer
compatriots meet me over at camera to
hello hi camera to this is Alberto and
Dan say hi Alberto and Dan hi Alberto
and Dan hello Alberto and
Dan we rehearsed in
everything so Alberto Alberto is a
concept artist from our vehicle and
weapon teams uh Dan is the sole member
of the ship team uh we made that joke
last week we I can't just tell people
what you actually do Dan I'm a senior
vehicle artist on the ship team out of
how many loads loads over I made a song
about it over five over five Kings
Walker out a Parker law Curtis John crew
Alberto
Patron there's coffin or to I want to go
through the whole thing um last week we
attempted to create a vehicle Concept in
our fourth making ship up special let's
go ahead and show people what the ship
what the vehicle was in the
end this was this uh the brief was a
1970s chopper motorcycle inspired uh uh
hover cover bike in the style of uh an
alien manufacturer probably marai GAC
something around there um and yeah a lot
of folks liked it it was pretty cool um
and normally that's where we would have
ended but this
week we wanted to show something that
we've never ever ever showed in the 1386
videos that I've been responsible for
for cloud Imperium games and that's the
feedback process so the feedback
process but how would you describe the
feedback process
tears tears anything else frustration
frustration sometimes it's cool I mean
you get to speak to people I don't do
that a lot but okay but tears and
frustration were the first two words
that come to the feedback process is
where an artist or a designer or
whomever has spent all their time
creating something that they love that
they enjoy that other people might love
and enjoy and then they send it up the
chain uh to the various directors who
all have responsibility of different
aspects of the games and they uh destroy
it they they remind you of all the
things that you forgot they see what you
did and while other people might like it
it just doesn't fit their fancy uh you
find out that there are other
requirements involved oh for at this
time these people who are required to
make those kind of animations are going
to be busy so you can't get into it that
way you're going to need to change the
way to get all kind all manner of things
so what we did was we sent the episode
and the image that you just showed off
to several vehicle directors in the
company and uh collected some feedback
which Alberto is going to attempt to
process live uh for the second half of
this uh making ship up for special so uh
there are some um uh there are some uh
curve balls in there uh we did not let
Alberto see the feedback until this
morning he did have to prep you know his
work area so we had to give him a little
heads up but he saw it for the first
time this morning and let's go ahead and
show some of the feedback that we got so
up front the major first feedback was
switch the manufacturer to RSI justy
completely different manufacturer how
how often would you say that's happened
in the past uh that we switch a
manufacturer in the early process it
happens quite often and to be fair it's
not a tragedy no uh happens sometimes a
little later uh it depends maybe if we
do some rebalance to what the concept
was and it doesn't fit the manufacturer
anymore that's something we have
to it's something we know it can happen
right and then uh make it a two-seater a
pretty common request for those old
1970s Choppers when we did technically
make it a two-seater we just gave the
second seat to uh to your dog yeah so we
technically will'll make it a
three-seater here your your dog a brand
we have a little little 3D printed brand
there I put that there there he is hi
bran hi BR uh and then a bunch of minor
feedback uh add more framework
underlying structure we have no canopy
so we don't get struts but the idea of
Hardline running along the frame could
be interesting uh lose the curves and
add more sharper angles that's a very
RSI tra uh look at the scorpus for
inspiration the Scorpius is one of our
more recent RSI Vehicles not the most
recent but one of our more recent ones
uh integrate the piano key style
dashboard buttons from the Scorpius in
some form of Hud we we did not
incorporate of course you know you can't
make a full-blown Concept in an hour um
we need some RSI layering of shapes
what's that mean layering of shapes
means that the surface is not
constituted by a continuous layer like
for example the canopy of your computer
is but is actually made of literally
layers like a onion that are cut with
different shapes every shapes call on
each other and there is uh what we call
eing try to use a few established angles
use this one and overlap them to create
nice Dynamic shapes okay uh it would be
great to get the RSI Diamond clamshell
shape from the style guide could try it
behind the rear of the seat and or
integrate it into the Thruster design um
I think I maybe think about integrating
the RSI Uh crap claw Crab Claw engine
intakes into the sides of the main body
give it an air intake uh like the Mantis
n cells the Scorpio Wings all right was
this all or did we have a whole we had a
whole another page okay okay and then
some questions uh what enter exit
animation is it using do the wings
transition for landing could they cocoon
the player in a more streamlined flight
mode to give more aerodynamic shape for
faster straight line speed where are the
Mavs how do you access components does
it have a relay position does it have
personal storage the doggo needs a
bone so yeah we Alberto you have your
work cut out for you so without we've
eaten up six minutes of the show going
through the going through the thre this
was just the feedback of of two people
by the way uh in the in normal vehicle
reviews there is a whole host of of uh
chefs in that particular kitchen who all
have various needs and and and and
things that they own aspects of the game
that they own that they have to look out
for so we decided to try to make this as
manageable within an hour as possible
we're still not going to get everything
in an hour but um all right so we're
back in blender uh show is yours Alberto
where do we start yes so this is not
going to be done in an hour yeah like
this is not going to not going to be
done in a month
but uh there are a bunch of things that
we can start thinking about for example
the transition to a different
manufacturer and the change metric
having a second seat are probably the
most important things uh we have here A
bunch of boxes uh in uh green and
red um they are the face that have to
face the player when the components get
removed so we have for example the
cooler we have probably this is the
radar
we have the computer and the power plant
right so you have to cons you can't just
make a thing be any shape and form you
want you do have to consider the
internal components yes and components
are generally for small Vehicles one of
the things we crushed our heads in the
in the vehicle concept te the most uh
it's really one of the toughest
situations um single siter well double
sitter with a dog but single sitter kind
of this is an easy fix done
Aldo how do my character get in and out
of it uh Charlie in the chat says they
didn't mention get rid of The Capes so
that's nice that's absolutely we are
going to hide them temporary so that I
can look around but it's just hidden
yeah don't P it guys they still there so
where do you start so I start with the
metrix uh I think is the best way okay
this is a new pose for this character
and the old pose was this
one so I want to make it compatible with
the characters from the pulse
because um because they move so it's
worth noting these are um earlier ideas
for what the pulse concept could look
like as well what we were just looking
at then so you're going to you're going
to use the pulse as a guide for the
metrics but not not necessarily for the
style yeah I just we use this character
for um testing the entrance and exit
animation so let's hide temporary again
uh the wings and I have just to make
sure that the final position that the
starting position makes sense Let's uh
let's move bran maybe he's getting a
little too sry friendly with h there you
go I survived nine years I want to make
10
no I've been here 10 years I can't
remember make sure I take all the
pieces we don't care about the final
position because we tweaked the final
position in a chopper situation but I at
least need to understand that the
resting position works and it this one
doesn't so I have
to make sure it does yeah this is this
is an important element that we sort of
glossed over last week I think is that
is the importance of metrics in
determining your shape language for the
for the vehicle
it's it's not that we can't do anything
we want I mean it's our game we you can
make it but but the the more outside you
go from existing metrics and stuff the
more additional work is necessary new
metrics have to be created new
animations have to be created to match
those metrics and stuff like this it's
it's additional work for additional
teams and that can sometimes delay a
vehicle uh beyond the point where you
want it to be ready yeah one of the
worst things that can happen um and it's
something we do everything we possibly
can to avoid is being like halfway
through let's say like a gray box phase
so you've already signed off on white
box and then you realize that one of the
metrics was wrong yeah even something as
simple as like um so a really really
easy example is a chair needs to be 50
cm off the floor that's just something
that's pretty locked in across our game
and then like a bar stool is 75 C
if something like that's even off by 5
cm that can have knock on effects cuz if
you have like a desk that's then been
made to that height and that's
integrated into the floor or even the
wall that can get it can get quite
complicated really fast something as
simple as a 5 cm chair and metrics
themselves can change over the course of
a Project's development I think backers
will famously remember the uh the envil
Carrick the Carrick was originally
concepted at one set of metrics that we
understood in 2014 2015 uh when it was
first concepted uh but when it came time
to actually build it in 3D years later
uh the metrics for the entire project
had changed uh the persisent universe
had come online We Now understand how
much more room that we need for the
players to get around to to accommodate
for you know third person camera in C
certain situations and stuff and the
interior of the car had to be
dramatically uh altered and because our
vehicles are often well they're always
is one one internal and external that
necessitated changes to the ex to the
exterior yeah it's a so sorry for
interrupting bad news I have to transfer
the cape yeah that makes sense that
makes you can put another cape in that
guy's face yeah but and you can have
three um but yeah one you mentioned the
Carrick but yeah that's also like any
kind of backlog ship we've got um
depending on how old it is so obviously
you guys saw Fleet Week you saw the
Polaris flying around um that's
presented um challenges as well because
of those like Legacy metrics obviously
something that we are acutely aware of
when we go into the white box phase so
it's something we do everything we can
to to avoid but yeah it's difficult
sometimes I do want to mention this
early enough in the process last week
ELO you mentioned that you might want to
consider a side car yes so you do have
to make it a two-seater but nothing
about the instructions said it had to be
two in the same cockpit but bran I just
incredibly cute to have bran and on the
drive but nobody even said that we
cannot have two dogs two dogs but I
would like to focus more on the
transition to RI first because that's
our priority and we have these elements
that we stole from the polls last
week yeah they're very Mirai aren't they
they are Mirai but it's compatible in
some aspect with thei uh they are they
don't Clash too
much do you think but for example do you
think your art director would agree with
that statement we're about to find
out Ben messaged Dan um my okay perfect
but the first element that has to go if
we're doingi is the circular one yeah so
it I think this looks much much better
it still looks pretty cool yeah you
could put like some kind of like um
hover plate underneath in between the
arms right pointing down the whole front
section does uh I got a message on teams
from uh from Dustin uh Dustin warning us
that the mics we're we're actually live
during our audio test earlier dustink
thanks for looking
out nice one we were aware but I
appreciate you looking out all the
same uh we have these element that is
way too soft but I would like to try and
experiment not a lot of not a lot of
soft round shapes in RSI no at all I
mean it's not to say that there can't
one day be an RSI ship that has soft
shapes you know we have this this
argument I see this argument happen a
lot you know on on content creators
Pages YouTubes and TW and twitch and we
even have it internally RSI this there
you go in instant RSI um this idea that
a manufacturer can only have a
manufacturer can only have one style but
you look at company you look at Ford
just look at Ford in the 50s the 60s the
70s the 80s the '90s you know it's look
at just the Mustang Alone look at just
the Mustang over the years and our
manufact are supposed to have been
around for hundreds 200s some of them
for 300 years so even this exact same
you know make of car can go through
dramatic you know shape language and and
visual changes over the decades so I
understand the I've always understood
the idea that okay RSI should always be
angular and and whatnot and stuff like
this and we're we're continuing that
here today you know I'm not yeah but
there's no reason it can't evolve over
time there's no reason it there can't be
an era where a different Manu a
different CEO uh comes in charge of RSI
yes and they decide no in my era I want
to do something different I mean
remember when the like when the dod when
that new Dodge Charger and the
Challenger came out how you everybody
started making cars that look like that
Ford was making them Chevy was making
them it's it's it's you saw big changes
in the Camaro those were all inspired by
those original Challenger and chargers
from Dodge there's also examples where
like um like laws come into place around
safety that in like the real car world
like a lot of cars now are really
rounded because I think there's like a a
rule that you're not allowed to have
under a certain angle it's one of the
reasons the Cyber truck can't be sold in
certain countries because it's just like
a spear in like some of its panels but
then if you look at like the older cars
like the old Volvo it's like really boxy
I mean that's kind of its thing right
and then you look at the new one they're
super rounded now and partially because
of aerodynamic in fuel consumptions and
then also just the visual pet of
consumers has changed over time there's
something that's happened with electric
cars I'm not going to get too far off on
a car but but so many electric cars are
so ugly looking it's it's like there's
nothing inherent about the technology
that requires your car be a
weird you know rhombus shaped yeah you
know pseudo Cube but everything from the
Prius to to that's I think that's where
Tesla first started you know they
started making extra cars that actually
look like cars and not these weird shape
buxs and then they of course went back
as you said with the Cyber truck in a
lot of it's because of um their
production lines so like if you look at
Audi for example they just kind and
Mustang they just kind of like bolting
over their front grills cuz they don't
need to call a radiator anymore and they
can use the same body panels I mean I I
I don't claim I don't claim to be any
kind of expert in this um but it's it's
just I I always like you know when I
looked at Mitch mitubishi I have trouble
saying it but mitubishi makes giant 18
wheel you know tractor trailers they
make tanks and they make something like
the 3,000 GT and it's like it's all the
same man Lamborghini make tractors uh uh
Ben uh uh Ben Ben is saying RSI itself
has multiple art styles and already has
evolved a fair amount depending on its
age there you go and he's true he's true
yeah that's that's English thir
generation from RSI oh yeah you look at
you look at something like the Connie
and you look at some you you look at um
what's the the the mantis yeah is some
basic you know silhouette reads that are
the same but the but the down and the
details is drastic different I love the
Mantis yeah the the visual I I don't
like its use I want I want a fighter B I
want a two person fighter variant of the
Mantis Ben John remove the swirly thing
and put a turret in there like it's a
hurricane that's what I
want that's too cool looking it's too
cool
looking like you talk about the um you
know when you said that like RSI could
get a new CEO and like decide though we
want to change the the in-game law like
visual Direction but that happens almost
in the studio like Alberto I'm sure like
concept artists join the team and then
they have like new ideas for like
different stuff for the for the
manufacturer and that kind
of like in a way achieves the same
result right yeah well as a concept at
is we have the duty to continue the
vision of who can be for us yes and this
we cannot make something personal about
anything uh or everything we do but of
course our minds will
influence in the end everything it just
have to be consistent uh doesn't mean
that you cannot express personality
towards that so in the long term it will
change yeah I think it's a mistake you
have it's a mistake to think of any
company as a monolith as this unchanging
thing
we not the same place we were in 2012 in
2016 and 2024 and stuff you know each
new person that joins the team brings
something to the Alchemy and and you
know if they're if they're a highly
talented skilled educated experien
developer of course we're going to take
this new feedback these new processes
these new ideas about the very nature of
how to make games in and adjust our
processes that happens with anybody you
know we're not we're not unique in that
regard I I think as well there's um okay
like even earlier yeah Ben wanted a line
a dominating line so we are using this
because I mean we're on
a we on a Mike so Jacob L says Scorpius
is the two-seater mantis with the TR
yeah but I wanted to look like the
Mantis don't understand it looks cool
and I want I want to look cool and it
looks there he's enough space
for I want to zoom in mantis
I'm allowed to want want
things let's find a place with these
guys this is something I have a lot of
respect for concept artists in
particular because it's a very quick way
to get your concept ignored by a
production artist is to not pay
attention to the components so like
these are like really really corol
something Mark is very like it's first
thing you do in white box is like make
sure there's space for your components
it's really really important and if
there isn't room in the concept for them
you have to change the concept and that
obviously at that point you're in danger
of changing the visual direction that
the concept artist was was aiming for so
it's really important um for the concept
team you know to to accommodate for
these things because if they don't then
the designs at risk of changing oh yeah
I think I think we talked a little bit
about it last week the you know we've
had some legendary concept artists come
through this place you know the Ryan
church and George Paul and Jim Martin
and St like this but uh uh a lot of the
uh some of them have at times struggled
with the the one one nature you know you
can in a for a movie or a TV show you
can make pretty much whatever you don't
have to worry about metrics you don't
have to worry about everything fitting
different models for different shots
sometimes exactly the inside of the
million Falcon doesn't fit in the
outside that's you know famously that
one but uh here it's like we we require
a different uh standard for that stuff
because it does all have to fit and uh
some have adapted well I'm not calling
out any specific person some have some
have done really really well at adapting
um and then you know some struggled and
like no it's not not for us it's like
okay you know thank you for your work
you know some still great work uh where
where was it some somebody asked uh
vinator says is this going to end up
being an actual in-game ship uh chances
are no Vulcan Ator uh we've
done of these streams where we've had
somebody make something like a prop or
or costume or an alien race or ships and
whatever a few of them have made it into
game uh famously the the uh U the the
Vintage uee uniform from like 100 years
in the past ended up making it into the
game uh the the Pico ball ended up
making into the game the The Little
bobbleheads the little uh uh Marine
bobblehead uh which everybody absolutely
hated uh when we made that show boy the
comments on that show
were uh
uh yeah that was that's that that's a
that's a core memory there little bit of
trauma on that one but that ended up
making it into the game and end up
making it as a piece of physical
merchandise sold at last year citizen G
uh so there there's been a few things
that have started here and been created
here that have made it into the game but
if you're playing averages no I wouldn't
I wouldn't bet on it I might have done
something stupid actually oh I bet you
did y I deleted any m
let's how many control Z's do you get N
I got a good story that's similar to
this actually so Albert has just lost
his animation now so he's lost however a
much time can't be fixed can be fixed
today I was doing some feedback Alberto
gave me actually and 3ds Max decided to
crash in the middle of me integrating
said feedback and um let's just say that
feedback was very um I because I had to
do it twice became very clear in my mind
exactly what I needed to do so the
second time was better than the first
time it was yeah it genuinely was better
yeah it's not common you know if you
have to do something tce my feedback was
so mind shattering That Couldn't hand
handle it
no so now your animations now will be
even better than they were before
yes on the second time they always
are they better
be yeah cleaner
but we want to fly uh Ben Curtis writes
I've got to get home so I can't watch
anymore but ask Dan where the blast
Shields
are when are they going to let me do
it so I asked John about this actually
because I I really wanted to do it after
the sulin but the Polaris was higher
priority so Carrick fans and Polaris
fans will have to fight out
what what they would have preferred to
have
sooner so you ever changing priorities
of game day yeah yeah it's a real thing
I haven't forgot they won't let
me oo that's
clean see better there you go that's why
we do it twice sometimes
it's that
[Music]
why definitely
not uh no Mark n hop we're talking about
the blast shields for the
Carrick Jared is going to make it into
the game as Jared once Chris figures I
had to transport people into the game oh
we
we've this this this this comes up
semi-regularly over the years as I
approach I'm somewhere around a decade
having been here now there's I am just
fine being the unescapable force of
everything outside Star Citizen like
there's there's enough there's enough of
this like look go to camera
one nobody needs to see more of this
like we had a little fun little gag at
the end of uh ISC last last quarter but
nobody needs to see more of this it's
like the the game itself should be the
place where you can escape from that so
I've already been immortalized in a uh
in a couple ways a few little props here
and there and that's that's more than
enough for me but I appreciate the
sentiment let's see to find a way to
give access to the components when they
once they laid
out isn't Jared's name already in the
game as an NPC pil well the NPC Pilots
are actually come from an a generator
there's actually a list of first names
and a list of last names and when it
autog generates random NPCs it just
picks one from the one so yeah uh uh I
think just about just about every
employee that was at here at the time of
the list generation is in there as well
as a bunch of gener generic name lists
that you can download uh from the
Internet or in there but yeah my my dad
actually caught a Jared hucke in there
and sent me a picture once that was
around the time I found out he was a
player and a supporter of the game I was
like oh I don't understand what hi
Dad that was a good idea I like how
you're doing
that yeah there's something broken I
don't know what but my will to they will
fix
it yeah just leave on the list for 3D
art like if there's something that is's
too boring to do they can fix
it I'm joking no he's J it's got kind of
a a Flintstones car kind of here joking
Cory I'm
joking can hear Cory Bamford charging
from the other building right now Mark
to now Mark's already gone home
yeah back
from Mark has a little thing we like to
call work life
balance as well never heard about
it that's
interesting just to give a bit more then
damic shapes and getting out of the
Aesthetics of of
Mirai that is very performance- based or
compatible with um Winer SI but I'd like
to fill up this area a little
more why do your sounds have accents
when you don't I don't know what that
means lady space Patrol and chat asking
a question I don't understand
[Music]
they're like 3D artists that are
watching this or people who don't
appreciate it there's like um when you
see like a little detail see like that
cutting that Alberto removed CU it
doesn't fit the style those little extra
like
flourishes are so annoying to put into a
polygonal model but they like they add
so much and I I'll often like see people
like post work on you know on Reddit you
know like ship ideas and stuff like that
like their own ship Concepts and I think
um one one thing I'd say to those people
and some of them look really really
really cool but definitely like if some
just because something's awkward or
difficult to implement that adds
complexity to your shape and will
usually make it look better if if it was
you know done in a deliberate way so you
see there we got that shape transition
Alber is like fting down and then it's
creating this nice sharp angle back it
would be very easy to just not do that
but he has and now it makes this whole
thing look way
nicer the um do you ever when you when
you get to the 3D art phase yeah uh do
you ever take something that was Geo in
the concept and make it Palm in the
actual yeah yeah for sure so um for
those of you that aren't aware what pom
is it's basically like a decal so a
floating sticker
that gives the game engine information
which essentially fakes depth or height
into that sticker yeah it's basically
this yeah so you see there that looks
like it goes in but it's actually yeah
that's essentially what it is and you
can save so much memory there there are
ships where you as you're walking
through you look down there's a grate
and you can see a bunch of wires beneath
the grate the wires not the wires are
not there neither is the great for that
matter it's just a fancy you know
shifting uh
texture there yeah it's very very um
powerful tool but but it's a one of the
ways we can add a lot of detail but
maintain decent performance
yeah okay so in the
list I'm not doing the piano keys thing
okay uh sorry
Ben it's a great idea another
data you've got all four components yeah
I got the component components with the
relay got turned into the can so we can
put it somewhere else um personal
storage that we put it in the seats
because it just makes sense like a put
it where under the seat okay so when you
like on the PSE you click okay it pops
out so you can just say it's done I like
this helmet because imagine thinking
you'd finished and then someone just
hand you a piece of paper with all this
on like that you didn't have to imagine
that's the life that is my
life that's how's life today tens a
bunch of times what about weapons yeah
exactly good idea what about weapons put
missiles in the wings no why CU I don't
have
the what weapons do we want for this
kind of stuff say missiles chat sorry
tell them to put missiles on it all
right chat uh a for ballistics B for
laser C for
missiles d
for chat you don't want to see me having
a panic attack live that's right chat
kind of too press C to pay
respects good
work looks like you're putting some
missiles on it champ actually it looks
like all three all there's just a lot of
a BS and C's on there so I I I don't
actually have a tool with with which to
parse arti it was a mistake for me to
even ask the chat so I'm just going to
say there's saying all
three okay oh7 CH good work this this
will be the RSI
Overkill
[Music]
yeah they did want a MAV on it as well
that's he did ask where the maps
were one of the notes were asking where
the maps were okay Mavs are quite simple
to place for such small yeah I think
that's an easy
win in general in our first pass we do
just little ones barely placed not
confirm
them is this a rocket yeah is it I don't
know the size of what you should be but
I believe you shouldn't be too big but I
blame the designer for not giving us the
proper spec blame Mark
always how
many uh you could put them like under
the wing or the the winglet oh yeah yeah
under the front little
winglet
oh sounds horrible idea but sure what's
wrong with that idea you you want you
want rockets at the very very front
where you're likely to bump into
something
look at that oh come on it looks like a
like a fighter jet that that well yeah
okay this would absolutely be a GI Joe
or Cobra vehicle at this point just
random Rockets there it is that's one
too many only one
only if this was actually RSI it would
be like integrated on a non ploff face
integrated like here with some oh that's
right yeah very nice oh you got you got
to do it s i do I have to okay sure
you're right no you make a good point it
would be integrated now the the the
laser guns would be on little pivots yes
on little got to explain my therapist
why I cried all afternoon today that was
before
this that was for yesterday that's just
because I miss my dog yeah so the FR
should be two little size ones on on on
on on gimbals that's the word only took
me 90 seconds to remember the word
gimbal watch them think this says
something interesting it just says what
we put on the on the slides
earlier someone's in Photoshop right now
trying their
best unfortunately it's
boring feedback is
boring fortunately feedback is boring
it's
always Crab Claw engines I have no idea
what that means it's like the you could
call it a clam shell if you wanted to
maybe yeah it's the same kind of
principle you know how the scorpus has
like it's kind of like wide kind of
rectangular engines that like yes they
go like
that D ah liking Star Wars no I can St
set
okay uh is this a replay ask infused no
this is part two of last week's show
where we uh take the thing we made and
utterly change it because of
feedback a crew crucial Pro uh part in
the concept
process I've never gotten a showcase
before cuz nobody was willing to come
back the next
week I mean I
was on the
[Laughter]
edge one thing I wanted to mention
talking about the Mavs on this list one
thing that the players might not know
about Mavs which is actually something I
found really cool when I started working
on this ship team is where they are on
the ship genuinely makes some impact to
the design so I remember on the fury we
had very limited space to put Mavs and
it was like design with like can you
please get this MAV as far forward as
you can which if you look at the canopy
on the side Alex managed to make it so
actually actually comes out from the
body forward because we were asked to
get it as like as far forward as you can
and then when we did the racing variant
of the fury a MAV got put on the wing
where the gun was because they wanted
another one even further forward which
is probably the reason why it handles so
much better because it's got better
turning potential so that was really
cool when
um when I first started trying to
integrate it this a bit but not it's not
your best work it's not my best
work it will do
okay
please maybe we just delete the third
one
but no too late I did it next feedback
session so ASI is a bit
more space and
less performance I guess than Mir
so I don't want to have shapes like this
right I thought there something that
streams line streamlines from
beginning to
end oh and the and the that uh the RSI
style intake be good for the
front that was that was mentioned in the
feedback no the CL shell
thing I thought that was the engine C
CLW is that the engine or the
intake you've got the
paper checks
notes literally checks notes
it just says clam shell
shape he talking intakes intakes intakes
okay really don't know how to wait it
says Crab Claw for the intakes and then
clamshell just in general let's go look
at the Scorpi you out the Scorpius over
there so you see the front's like ah and
then if you look at the back it's quite
similar no no he's talking about this
those things there those things now if
you look at the back you see it's kind
of kind
of
square I'll
try oh there a good yeah this is a
production model so it's kind of heavy I
thought you were going to say something
else about
it it's made by
monkeys is this the
antar I can't
tell yeah I was trying to work out from
the back
I don't have that many bad things to say
about you why didn't you ask for a non-t
triangulated version because I did it 15
minutes before coming because I find
out I didn't give him time to prep so a
context this wireframe looks crazy he
actually has to spend his day doing his
actual job yeah before he gets to come
he's helping me with mine earlier which
is very nice of him and now I just I'm
just annoying him you always do
anyway
yep but yeah for people who don't know
this see the the scorpious mesh has like
got triangles literally everywhere
that's because game engines can only
read triangles so even though we
typically model with Eng gons and quads
and not many triangles
um when it goes into game under the hood
it gets triangulated as the term which
just means turn to triangles oh yeah
just trat that make that
the oh yeah
okay it is called lazy design
that's pretty
cool and it works this would be hell on
Earth to integrate on a production set
so definitely do
it that was pretty
[Applause]
cool the dollar live says Alberto is a
master of lazy design
is Le by the way wow whom I stopped
moving the mouse
of he sure deserves more I thought your
mom was watching the show was
say that hat is very comfortable it is
actually I see why you wore it so much J
through the pandemic should I say that
again this heart is really comfortable
mhm okay uh let's give it that with the
normals boy boy I'm so
blind feden says some say lazy I say
working effective efficiently
smarter n it's l
how do we make it look Morsi just Chuck
a bunch of RSI stuff on
it yeah after a while this
do does that affect the entry exit on
him no because they will
move okay oh that would be pretty cool
actually you want to give it the Mantis
qedd that's right
a QED H backe that'd be about as useful
as The Rock
DS probably more
useful with or
without that's
then with or
without which one the the winglets do
you J them or not I like them
what is happening
here Global
medium
what yeah today is giving me a lot
ofous it's the keyboard finally
rebelling trying to think what else we
got did you you haven't have you no do a
m don't let's do the
MS you know what you'll keep it like
this with mustaches you could also
cocoon the player in a more streamlined
flight mode to give a more aerodynamic
shape for faster straight line speed oh
that was that was the thing with the
with the wings collapse in we we did
that we and I already now maybe you
should add a windshield just so you can
get those RSI struts
in just like put a windshield up there
where it's only got a the tiniest
triangle of actual glass the rest is all
struts yeah just put a bar through the
center of the player view while they're
flying this yeah now that's
perfect just for the dog suddenly feels
much more familiar to the con
[Music]
owners Ben Curtis stopped watching right
good he did yeah thanks
God I want a job on
M this one
possibly no stop procrastinating let's
do the mobs yeah take the Str out could
you take the MAV off the off the
Scorpio where did he put it there it is
it's bit big shrink
it thank you I oh is that how you do it
that's the one I forgot is it is it r or
s in a blend of the
SP s
you yeah I know things oh do we
just don't worry this isn't Max it'll
come back when was the last time you
saved it saves automatically oh that's
a well since we're waiting tomorrow
there is the bar citizen in Manchester
and thank you to Chris low that printed
a lot of this we're going to give about
30 of them let me use my camera get we
can get closer to M to everyone who
comes me or and says BR is a good boy
it's got to be close to my face be and
he didn't crash as soon as I said BR you
see yeah so uh what he was saying is
that there is a bar citizen here in
Manchester tomorrow it's at cargo uh
just Google cargo Manchester that's the
name of the place uh Alberto will be
intance and he'll give little 3D printed
Brands uh to anybody who uh I don't know
pushes him or something now he has to
come up and say bran is a good boy oh
yeah have just cuz otherwise we're just
going going to get people like you
that's how we're going to find out who
watched the stream or not you have to
say is a good boy bran is a good boy or
any other bonus points to say Chow bran
if you say Chow BR that's that's
probably
easier there you go back to work that's
enough of a break What men's them do to
not go to a
psychologist not go to what psychologist
therapist to therapy thought you said
toxicologist I was like what no
not my stuff does it have a relay yes
very good I don't know where but it does
totally off topic but would Jared ever
grow his hair back get grow is it just
we me soble
Jared it's it's I don't know what to do
summer now so no yeah live caption for
blender no not live caption it was like
some Windows update with AI of
course okay what else we got let's go
through list shall we change
manufacturer to RSI I am not done with
that that's kind of still happen dollar
live got timed out by night
rer who got timed up dollar live who was
that LE the dollar Le got timed out by
night rer thank you Night Rider so see
uh make it if you've ever been timed out
by Night Rider that was a cig employee
that just got timed up by Night Rider
yeah there's no safe good job Night
Rider thank you night rer keeping us
safe
make it a two seater well it's a three
seater so there you go 50% extra seats
or 100% I don't even know the maths add
more framework on line structure you did
that didn't you it it's going to time
consuming you did that say you I'd say
you did enough when you extended the
front bit out to match the thing yeah
yeah we'll just say that's fine
integrate the piano key style dashboard
probably not do that don't have time for
that do we or aside
do you want to give at least one control
one HUD we we haven't done any any
interface what whoever do we put the
pillar in the way didn't
we we went the anti HUD there you go
that's a
hood yeah stick your texture there
really our Hood planes actually oh the
bone the bone the bone the bone theone
the bone nice oh wait modeling a boneing
blender it's dangerous oh yeah that is
dangerous I've SE I I have to do it this
high risk make sure you do it the other
way symmetrically not the way that you
normally
would yes
smart screen shared you don't have to be
just just be
careful yes this is the correct way to
do it if he' done it the other way we'd
have been in trouble I mean I did it the
other year
so okay so the B I'm still I don't see
the bone in the list although I think
it's further down no it was in the one
that
we okay oh that was the personal storage
yeah okay we did that done that exit en
man yeah I feel like we we we can take
that one stret away but I feel like we
should add at least one screen to to to
to satisfy the just extrude that bit
Yeah like like a little just like a
little TV or
something there you go got be some kind
of instrumentation place there you
go I'm trying Ben
your employees are
unruly get rid of the Str get rid of the
screen did
you get it in his mouth why is it
there there you
go make a bit smaller no took is right
there you go Brand's worth the bigger
butt there it
is okay ready th all
yours good luck Reddit
get not
playing right next Mavs
done Wing transition done components
done Rel this is easy this look at this
relay position we're calling that done
bone
done components are all
done um players's path to entry is
obscured by the mechanism that was done
though wasn't it yeah it was done I
broke again but it's fine upon going
into Landing State the volume for the
ship's silhouette changes in a way that
will not make it compatible with most
Mark why are you suggesting that no mfds
or Hood elements no no one's worried
about the silhouette of this ship it
looks too cool to just change
it I think Mark's worried that it can't
fit into the ugfs like if we wanted to
drive it around inside that then by a
pulse
yeah yeah Mark wants is to be able to
I've seen people getting like the the
fury into micro and stuff like that that
thing yeah they're literally flying it
around the space port although the guy's
doing it's like really passive like he's
not shooting anyone which is very I got
a lot of respect for that level of
restraint
yeah look at this look at this resolve
this bit I think on the front a little
bit you see this piece this one no like
shell the the kind of
bonnet you see the Bonnet here I don't
know what the Bonnet is the oh oh
someone Europe we didn't add the this
thing the shell Bev that we didn't add
the little laser repeaters under under
the front Wings the little size ones
underneath the front Wings there you
could probably just solidy
that there you go
and then the
guns and then we have to get we have to
get rid of the iridescent paint why oh
really was that was that in the feedback
oh I guess we put it in cuz it was we
put it in cuz it was alien
manufacturer
manufactur what's our size color deep
blue and mid gray isn't it um black and
orange or was black and
orange I don't know
you are doing the Polaris not I know I'm
just trying to think so maybe I've been
doing all my work you're side logo the
Lo the logo it does have the orange
color black orange and you're like a
gunmal kind of or like a no you are you
gun yo look at that yeah yeah under
slung so they can so I can gimble
gameing I'm just changing the materials
[Music]
we're done the the feedback done gon tck
says two weeks on this Jared's
officially completely run out of
ideas but you're still here
[Music]
watching like this yeah I can confirm
everything on this sheet is accounted
for so well done
have I guess we can render it now see
gunsman position oh you put them at the
ends yeah look at that oh you will get
more range of motion that
way let's get rid of the
color
yeah not for my
choice I
told for try oh that's yeah I know wait
was already here
do we have a decal like an RSI decal we
can put on the
wing no that's with me you have enough
time to
prepare that's fair
enough do we want more
mats just imagine there are
try yeah maybe High the component boxes
now as we know they fit cuz they never
look nice in the final render even in
game like when we're working on this we
have like these placeholder boxes but
usually we just hide the layer and
because the they get spawned on in game
later you know the font that RSI uses no
no
idea I have the f I just don't know what
it
is do it in like comic
SS yes
there's a new CEO in charge of RSI
that's right he's in and he's making a
statement I don't remember how to change
it so no uh maybe Le knows it oh but
he's banned in the chat we can't ask of
all people Le would know how to change
it to Comic Sons he's back in the chat
he's back in Le how do we do
it that's too late he's going to say
someone that gets him banned again
there's no way we can he won't be
serious oh wait you've done it there you
go this is not going to tell you cuz you
messed with his Mouse I mess with his
Mouse because I thinkir because it's
changed my
fun yeah he changed your fun this this
is his area of expertise he knows how to
do this
stuff do it the yellow maybe Jared was
mentioning I don't know if it look good
to be it doesn't look good yeah too much
light
whsh there we go oh do you know what we
could do I don't like how easy it is to
do in blender but can you put like
Blinky lights on it you know like um can
put lights not let them blink okay put
some lights on it then you got like you
got like a minute yeah
[Music]
[Music]
F nice
[Music]
get your
[Music]
render no render it we just show it in
like this and put cycle
on don't
crush the light is pointing directly on
that Wing surface okay oh there you go
that looks nice all right
well there we
[Music]
go not a bad way
to spend an hour and of
course this is all still from what is
essentially one silhouette from one
thumbnail how many thumbnails would you
actually create it depends by the shape
and situation I can say that we had 17
for the pulse we had 17 different
thumbnails 17 different Silhouettes
shapes for the pulse alone yes before
you even got into detail we had nine for
the St for example and three for the
storm so it depends yeah and in this
these two hours we've done one with
slight with with some slight CH you know
feedback changes but essentially one
silhouette one thing and is a very junk
when we present stuff especially to the
high direction of the
company we try to polish it a little
more suffice to say there's a lot of a
lot of work that goes into making these
yes unfortunately yes unfortunately yes
show the animation of it getting in no
it's broken yeah he accidentally deleted
all the
animations well that does it for this
week's show thanks for hanging out with
us everybody thank you again to Dan and
to Anton Alberto she after all we've
been
for this is my seventh time year it's
the end of the can you think of how much
better these shows would be if they were
like a Tuesday when I was still fresh
and not the end of Friday uh thanks for
joining us um
what's that other show we make ISC ISC
comes back next week ISB comes U what's
it called ISC comes back next week uh uh
with the first of three interesting and
unique uh episodes I hope you'll tune in
and check them out um and then of course
we'll be back here next week uh next
week's is another game dep special uh
we've got members of the environment
team on and we are going to create a
forward operating base uh as seen in the
upcoming pyro system so come on back to
check that out for Star Sison live I'm
Jared that's that's Alberto that's Don
Dan uh thanks for watching uh if you're
if check the bar citizen next this week
is international bar citizen weekend uh
if you're in Manchester Austin Los
Angeles Frankfurt or Montreal there's
probably a bar citizen near you
happening this week uh good chance of
many devs and and folks showing up so
check out the RSA website for details on
that and uh take care and show them Bri
one more time go ahead I know you want
it I oh there there you go there there
you go all right thanks for watching
Everybody Take Care

# Star Citizen: Around the Verse - Trouble at Drake

**Video:** https://www.youtube.com/watch?v=RQLRvB9LAlo
**Date:** 2017-04-06
**Duration:** 37:15

## Transcript

hello and welcome to around the verse
our weekly look at the development of
Star Citizen I'm Chris Roberts and I'm
Eric kin Davis Chris it's great to have
you back on round the verse how was your
trip to the UK and Frankfurt offices uh
very productive um as I mentioned in
last week's newsletter uh we held an
overall project review in Frankfurt I
was joined there by cig te members from
across the globe all from all our four
Studios actually uh we reviewed and
planned Sprints uh as well as work to
improve the overall cockpit experience
uh when you're flying around in Star sis
so you'll see that down the road not
quite yet but it'll be cool that sounds
great and one of the best parts of Star
Citizen is flying around the universe
which brings us to today's episode we'll
be sharing some of the technical
considerations that have gone into the
upcoming planetary outposts that will
populate future pu
environments yes but first let's check
in with the Austin and turbulent Studios
for their
updates hey guys Jak Ross here producer
here in Austin I wanted to take a quick
second to thank Clifford AKA Miku
Imperium and Doc tari for their generous
and delicious gifts to the Austin Studio
we always appreciate the show of love
and support from our community and these
tasty treats help keep us fueled and
encouraged so thanks guys now let's take
a look at what our Full Belly team here
in Austin uh has been up to this past
month this last month the Austin design
team has been focused on getting 262 out
the door among other things 262 work has
consisted mainly of adding new
subscriber flare items and fixing some
minor bugs as well we're also updating
additional shop related elements as we
continue to build upon the shopping
system while I can't go into major
detail right now I can say revisions of
the Stanton system app are in progress
also Landing Zone Ai and usables are
undergoing additional development for
this month we have a peek at our latest
subscriber flare and details on how
we're expanding the shopping Tech to
utilize some new tools that relate to
the item to0 system first let's take a
look at the new subscriber flare that
will be rolled out in the coming months
one of the new items is called the Vivid
display which can display game locations
holographically players can use the
Vivid display to find out more about
locations including their intended
visuals other flare items include a
series of ship schematics which will
showcase the level of detail that goes
into our ship design these lightboard
displays can be hung from any poster
style port in your hanger we hope you'll
enjoy these upcoming additions to
subscriber flare and look forward to
additional flare in the near coming
months now we'd like to share how we're
revamping the shopping system for our
next release as the item 20 system
advances the it Port structure changes
so it can fall in line with our end goal
these fluctuations have forced us to
readdress the setup for things like ship
uh shop mannequins and item bundles
while the end result will be pretty
obvious to the players the differences
for the designers will change
drastically uh for the better our goal
is to create a base mannequin object
that the shopping system can apply
loadouts to the items on a given
mannequin would be purchasable by
themselves or as a bundle for a
discounted price in the past every
outfit was only purchasable purchasable
as an entire set of items on top of that
a Spoke mannequin setup had to be
generated for each unique outfit display
fortunately our advancing Tech will soon
allow our Loadout Editor to quickly
create various item combinations within
a given shop that Loadout comprised of
items in the shop will then be assigned
to the Shop's inventory as a bundle the
shopping system will then spawn these
bundles directly onto an empty sh
mannequin with no additional effort by
the designers a process that took hours
before will soon only take minutes all
allowing us to quickly generate
different item combinations that can be
displayed on the mannequins what seems
like a minor change actually unlocks a
multitude of options for the design team
to create realistic shops hopefully
you'll be able to see the fruits of this
labor really soon uh in our upcoming
releases the Pu animation team just
finished a small map shoot using our
in-house opt track system this was a
pickup shoot to help us fill in all the
gaps from the performance capture shoots
done previously at Imaginarium Studios
we captured transition animations for
both male and female characters examples
of a transition animation includes some
sitting down at tables with trays going
through a chow line to get food eating
drinking rumaging or sitting in cockpits
and turrets the transition animations
are shot in such a way that they can
work with our metrics and are Universal
enough to be used all over the game with
many different usables in our
environments if you're not familiar with
the term usable as a reminder it's a a
usable is an object that a player or NPC
can interact with like a chair wall
table or other set piece usables also
include props like cups and plates and
bottles and anything else that can
physically be picked up by a person we
are currently implementing these
transition animations into our usable
system obviously animation can only get
these game assets so far our biggest
challenge right now is making all the
usable function in game properly it is
up to code Tech and designers to make
them work together which is why Austin
animation is working closely with our
Frankfurt and UK Studios on this metrics
are being created for door control
panels bathrooms toilet facilities and
Chow lines in the Idris mes Hall we're
putting Tech in place that will allow an
NPC to navigate a usable set piece and
perform a variety of actions like
grabbing a usable prop setting other
usable props onto it and walking away
with the prop going to and interacting
with another usable set piece um then
getting up and navigate into a third
usable set piece to dispose of the
usable prop with all the usable props on
it once we get this one test case fully
functional we'll be able to apply what
we've developed throughout the game the
ship animation team has finished the
major animation tasks for with Drake
cutless black characters can now enter
and exit the pilot and co-pilot seats
properly for the co-pilot we're
utilizing a brand new cockpit template
that we're calling the stick template
this template positions the player in a
pose like that of a helicopter pilot
this was required to fit the new
geometry of the cutless cockpit we're
also planning to support the cockpit
experience improvement pass but we'll
have more info on that next time on the
devop side we added additional logging
to better track issues that are
wonderful community experiences from
time to time the logging we added allows
to allows us to to dump the status of
the users's download session at the
moment they experienced the issue we
didn't work directly with the community
relations team here in Austin to debug
the issue or issues the user is
experiencing a great example of this is
the latest version of the Patcher
Patcher 249 as some of the Windows 10
users may have already noticed this
version of the Patcher brought back
music that had previously been missing
the exact cause of the issue was that
Windows 10 sound settings were set to
192 khz this was causing the Patcher to
crash if you had the music turned on you
can now enjoy all of Pedro Kat's music
once again the QA Department here in
Austin has been heavily focused on 262
testing with the addition of multiplayer
Mega map and serialized variables we
were required to perform multiple cross
Studio play tests between Austin and UK
we did this to check for any new and
unexpected behaviors due to major system
changes such as increased de
desynchronization lag between clients
massive performance changes good or bad
and crashes lots and lots of crashes the
new Drake Buccaneer came online sooner
than expected so the ship team performed
frequent testing to ensure the ship was
operating as expected when it makes its
way into backer's hands in our
development stream testing Squad 42
testing continues as well as a range of
tests with the ground vehicles on
planetary surfaces in a multiplayer
environment we've also been testing
various developmental tools such as the
pre procedural Planet editor or planed
and the subsumption editor finally we
expanded the QA team in Austin by
another four testers bringing the Austin
QA team to a total of 24 members we're
excited about this expansion and excited
to have new people on board thank thanks
for watching guys and for all your
support we'll see you in the
verse Oh hello fancy seeing you here
this is Ben from turbulent and this is
our turbulent update for this month last
week we were hosted by our friend Jared
Huckabee and the community team for a
subscriber town hall now this was our
first ever Town Hall we were super
excited to get it set up and a bit
nervous to participate but you guys sent
us awesome questions and we're hoping
that we're going to be able to do some
more Town Hall questions so that we can
address the questions and uh different
um things you want to know about
spectrum and uh the platform we're
building this month we launched Spectrum
version 032 which includes Major
Performance updates to how we render
messages and threads in the client so
hopefully this will allow you guys to
switch faster between lobbies and
channels and should take way less CPU
and render time than it used to do in
the 031 version so I'm sure hoping that
you guys can see the difference already
uh 032 also brings two new features uh
you can now reorder your communities at
the top left of the sidebar all you have
to do is you grab your community and and
drag it drop it to the location you want
to keep it and we persist that across
all your browser tabs and sessions and
so you can keep your favorite org at the
top if that's what you want to do second
feature is uh we worked on the channel
thread list now when you see the
subjects we added thumbnail images to
threads that contain media information
and videos and so this way we it's way
more entertaining to view the channel
list because you'll see uh the previews
media previews there so then you'll
you'll have uh more incentive to click
on those subjects and view the media
content embedded in it uh otherwise
we've also worked on mobile optimization
and keyboard fixes unfortunately we're
not quite done yet and we're not happy
with the fixes so we have to roll them
back from 032 we're hoping it's going to
be ready for 033 this should fix bugs on
mobile Android uh that people have been
um encountering when basically typing
into uh the CH on mobile Android so
we're hoping to fix that
soon the future holds good stuff for 033
which should come with a new feature
again for forums uh called nested
threads and so uh nested threads will
allow you to create a new thread and
change the discussion type from a
classic chronological timeline thread
into a nested discussion now this gives
us two benefits uh first uh we can now
sort by upvotes the replies at the first
level and get a the reply tree behind it
uh but the second thing is that we give
you guys more control into the type of
discussion that you want to start so the
op Creator will have the option of
choosing whether it's a nested thread uh
or not and so as we add all these
features into the next releases of
spectrum we're getting ready to be able
to shut down and archive the old fors
one of the first we cannot do that until
we've expanded our categories list to
bring all those discussions from the old
forums in we're not talking about an
import but at this point we're talking
about recreating the subcategories that
you guys enjoyed on the old Forum inside
uh the the new system so we're talking
about shipyards ship owner threads and
stuff like this uh so as soon as we're
able to do that we'll be able to
announce a date at which the old forums
will go into archive mode uh but we'll
give you guys plenty of notice before we
do that this month we also worked on the
uh new Delta Patcher as you guys have
called it and so we are responsible for
building the actual application that
hosts the patching libraries and so
we've done a bunch of progress this
month in getting this new application
set up it's using a whole new
application stack uh you guys might be
familiar with it's called electron uh
electron shell we're also using react
and Redux like we do for spectrum within
this new application and so we've worked
on our native bindings to get the
patching libraries that the Frankfurt
guys are working on and so we're
currently able to patch the game data uh
with this new uh launcher it's also used
internally so we're really excited about
this project this going to bring a lot
more dynamism in how we release patches
and so we're really excited to get this
moving and integrated into this new app
uh and hopefully we'll be able to
release that to you guys in the next
coming
months another major project we started
this month is a a redesign of some of
the elements of the RSI site we're
trying to this is a massive overhaul of
the website and uh how it caters to new
users and older users and so as we start
this design process we'll be starting to
give you guys some updates on what we're
doing on that front and how that shapes
up but we're only getting started right
now one important project that we're
also working on that has done a lot of
uh has been seen a lot of progress this
month is the ship stats updates and so
we know that the ship stats uh don't
currently reflect what's exactly in game
now I want to mention again that the
ship stats are supposed to reflect the
intent design of a ship and not
necessarily the exact stats that are
currently in game uh but at the same
time currently there are things that are
missing and so we're working on to put
that up to date we got all the
information to do so and so now we're
working on changing how the backend uh
man manages this and redesigning some of
the tech View and Tech specifications
View and Hollow view are changes to be
able to display that and so we're hoping
that we'll be able to go through all of
the current loadouts um in the next
coming weeks to be able to show you guys
an update there that's it for tribun
thank you guys for
watching thanks guys the ship animation
team did a fantastic job on the redesign
cutless black and with the buccaneer
flight ready we're proud to announce
that the entire Drake lineup is all in
engine which is a pretty big achievement
yeah and they're also all on sale now
you can get the buccaneer dragonfly
Harold caterpillar and cutless until
April 10th yeah so the sale includes all
three models of the cutless including
the updated cutless black people often
question the business ethics of Drake
interplanetary so we decided to dig in a
little deeper into what Drake's been up
to take a
look 70 years ago Drake interplanetary
built the cutless in a gamble to win a
military
bid but the military didn't bite Drake
interplanetary wasn't deterred however
the company retrofitted the cutless for
civilian use when we first rolled out a
flyable model of the cutless to the
public it kind of drifted from our own
expectations and from our own intent um
it lost some of the aggressive
characteristics that we had had sold it
on when we first unveiled it and that
was one of the biggest things we wanted
to rec capture in the rework we wanted
to make it feel like look and feel like
the the ship we had originally promised
to people um but to really pull that off
we did have to make some changes and
split off a few pieces of functionality
but then what that left us with was a
lot more room to really build on the uh
rating support potential
of the Drake cutless where now this can
be that backbone of a small militia unit
of a small just defense
group the first iteration of the cutless
uh wasn't very
ergonomical for the pilot or the
co-pilot um we had we had many
complaints from uh the customers saying
uh it's hard to get in and out and you
know people stepping on other people's
toes so uh we went with a with a better
design on this one uh we have the pilot
and co-pilot being able to enter an exit
from either side of their seat stations
with neither the pilot nor a co-pilot
getting in the way of each other on
enter or exit uh for much uh faster
mounting
dismounting uh the living quarters have
also been uh retrofitted to be a little
bit more spacious
the armaments have been upgraded we have
uh more space for uh armored equipment
uh as well as bunk racks the main living
quarters as well as access to the uh the
guns main weapon system uh located in
living quarters instead of uh the
rear it's it's going to be a very potent
threat to come across
for you know midsize ships and up
because it's going to carry a lot of
missile Firepower uh We've added more
guns to the ship uh just it's General
armor and durability can now really sell
through both in its appearance and its
performance we didn't skimp out on what
it can do uh we made sure you can you
can haul your cargo you can haul your
friends uh you can blow up a ship if
it's trying to take you down some people
uh decide to use our ship to take other
people down I guess the the travel
safety advisory system estimates that
15,000 people die annually in Outlaw
raids and the cutless black accounts for
2third of All Ships used by known piracy
groups people have often questioned
Drake interplanetary role in these raids
is the company intentionally marketing
their inexpensive but deadly cutless
black to criminals we decided to find
out posing as an applicant for their
sales department one of our reporters
traveled to the Magnus system and sat
down with Drake interplanetary
longstanding CEO Jan dredge she didn't
know she was being
recorded your resume is quite impressive
as you probably assumed this last
interview is really more of a formality
can I ask a question ask away unless
they're salary related that goes through
HR of course of course I I am curious
about the cutless black have you
considered including mandatory
background checks for buyers you know to
avoid selling to criminals listen what
happens after a cutless leaves the
showroom isn't my problem when there's a
murder do you blame the killer or the
person who manufactured the gun after
this audio was released family members
of piracy victims expressed their
outrage by calling for a ban on the
Drake cutless today Drake interplanetary
responded with a press
statement we apologize for the comments
made by Jan dredge after many years of
devoted service Miss dren has decided to
retire as CEO of Dr in a planetary and
spend more time with her family while
she would continue to remain on the
board Miss dredge will no longer be
involved in Daily Business operations
her son John dredge will fulfill her
duties as acting CEO until a replacement
can be found Drake interplanetary is
committed to the safety of all citizens
and civilians our cutless blue and
cutless red models are specifically
designed for use by police and First
Responders they continue to save count
lives across the
universe the terror Gazette has
confirmed that jant tre's so-called
retirement goes into effect today
however Drake interplanetary refuses to
comment on whether they will continue to
sell the cutless black to known piracy
groups it's really great when ships can
be as varied as our characters yeah
absolutely and people maybe know the
cutless as an outlaw ship but uh that's
just one way it can be used yeah totally
abs absolutely just one way I mean you
know the cutless can do many other
things from search and rescue to militia
cargo transport it's really up to how
the owner chooses to fly it yeah nothing
wrong with that no not at all of course
the only thing better than a great ship
is really having great places to fly it
to yeah that's right and as star and
grows and the procedural planets to
continue to develop we've started
looking at ways to populate the amazing
Vistas with various points of interest
you can travel to uh so one of the cases
is um the planetary Outpost that we been
giving you some sneak peeks up and we're
going to dive a little deeper into that
now so take a
look hello my name is Ian leand I'm the
environment art director at fandry
42 uh today it'd be really interesting
to talk a little bit about surface
outposts so I think people have seen a
few of these before we've shown some
little videos here and there and uh when
the communities come around the studio
they've had a little sneak peak but this
is the first real opportunity to really
show what it's about and more
importantly the team involved in making
it so my name is Eddie hilditch I am the
senior environment art lead my name is
Alex ratti and I'm a senior technical
artist working on the uh procedural
aspect of our system hi my name is Nick
e and I'm a lead artist on um for the Pu
team for environments so the initial
idea came from design design needed a
place to bring the player to the
smallest possible location so we have
cities bace stations but one thing we
never really had is these smallest
locations so that was the initial idea
from design of what a surface Outpost
would be so we went away and we started
looking at concepts for what they might
look like in our universe so we knew we
wanted to integrate them quite well with
the environment so we wanted a design
that felt durable robust and felt like
it could survive a few harsh Winters so
from there we started some moats just to
see and explore what might work
right and then once we had some nice
ideas we got it validated make sure it
worked for Chris and the design director
and then we started taking it into
production so from there you know one of
the things we knew we wanted to do like
these were going to be modular we didn't
want just one hero location so the
visual style uh and elements needed to
support a modular format so during the
idation process and concepting we needed
to make sure we had had elements that we
could you know break up the visual
language break up that fatigue and
enable designed to create some
interesting layouts which still felt
quite interesting to look at so we build
all our environments modularly um we
have to build them in that way to
incorporate the sort of vast number of
environments we need across our universe
um so once the concept has been signed
off from me in we will start breaking
that concept down into its con tient
Parts um in order to figure out how many
pieces we need to begin the process of
making the brand new building set which
is going to be a high-tech surface
Outpost we took the uh concept and we we
made The Outpost uh concept using the
template set which is a a set we use to
white box all of our our levels because
it's a basic set it's to metrics it's
got a simple material on it and it's
good for artists and designers and
engineers just to block out areas and
and test with so we took that we
modified it slightly and started
creating the uh Outpost layout that we
had from
concept uh then we added the uh we white
boxed add-on pieces like the roof pieces
antennas pipes to get that extra
silhouette read from a distance uh mid
and far distances the biggest challenge
is probably uh making sure that it's all
modular and fits together cuz the whole
point of it being modular is it gives
the artist the flexibility of of of many
different layouts of of of swapping
pieces round and adding a bit of
variation and detail so from its
foundation it had to be uh very modular
uh work together to metrics uh and have
approval from design too so the key
things at the uh gray box stage are
making sure that the assets are in line
with the art style that the material
breakups correct the forms are correct
and it's still modular from from what we
were doing with white box that design of
play tested it and it works for their
gameplay requirements and that any major
performance issues are looked at as well
often the gray box is modeled to a high
level of detail than the final the
actual final asset and this is because
the all the ideas and forms and details
get shaped out of this phase and these
will sometimes get baked later on down
to a texture so often the gray box is
actually
uh a lot more expensive than the final
form so when the assets go into final
production there at this point we we
flesh out the material Library so the
material Library will consist of simple
tilable uh materials uh with wear and
dirt such as simple Metals Plastics to
more complex panels to uh very detailed
gble sheets trim sheets and graphical
decals uh and illumination sheets for
lighting we need to make make sure the
materials work together that they're all
conforming to the correct PBR
workflow and at that point then we go
into the final production and apply
those materials and flesh out the final
assets once we started to test our
outposts on the actual surfaces of the
planet we soon realized that a perfectly
flat base was just not going to work it
was going to limit where we were able to
place them planets don't tend to be
perfectly even you know um everywhere we
place them we'd end up with a corner
clipping through the ground or a corner
floating above the ground so we had to
go back to the drawing board and kind of
incorporate a system of legs and feet um
which ultimately allowed us to place
them in much more varied places on the
surface of a planet um then we obviously
had to get the player from the surface
of the planet up to the door of the
Outpost um we thought a ramp would kind
of look really cool um visually so we
started implementing those but after
talking with design we realized our ramp
metrics from them was 15° which is
actually very shallow for a ramp and we
ended up with um Outpost that kind of
looked like a Miami beach house or
something because even if the Outpost
was only 3 m off the ground we had to
have an 11 M long ramp to sort of coope
with it um and they kind of look
ridiculous so we went back to the
drawing board we thought uh switch back
ramps maybe or some kind of complicated
elevator system with is but ultimately
simplest um Solutions are often the best
um and we ended up with stairs very
high-tech but stairs actually turned out
to just serve the purpose that we needed
them to once all the final assets were
made uh we basically grouped them
together into prefabs which are like
smart groups and
um brought them in so there's walls
there's rooms there's doorways and
airlocks and and uh the stair piece so
uh it's very easy now to make uh a whole
different layouts of The Outpost instead
of having to bring each individual asset
and each light in each Vis area they're
all preab up so you drop a room in then
you drop some walls in and it's it's
done uh and it and it allows for more um
more time working on the actual assets
than than well building um we have the
ability to recreate the concept pretty
much one to one which is great but what
we also have on top of of that thanks to
the modularity of it is the ability to
create a vast number of variety of
layouts um and we can basically make as
many kinds of layouts within the same
sort of theme and style as we want and
as we develop the building set more and
it matures and we add extra pieces that
variety and the number of potential
layouts we can create basically
exponentially increases what comes down
the line later is how to add more
variety like we can't have just white
outposts every time you see an outpost
it's not going to be the same Outpost
it's going to change layouts it's going
to change uh materials it's going to
change what add-ons get added to it that
all comes later what we have here is a
proof of concept and a final asset in
its simplest form but with the ability
to expand massively on it as we sort of
move along with it development yeah so
after the environment team has been
production for a certain period of time
that's when I'll start looking back into
it with it again we can visually see how
the ideas progressed and we getting some
good ideas but this is where I start
introducing visual targets for the guys
to work to
and from the process of going from the
initial idea to it going through inter
production you know obviously the team
has made additional design choices and
visual choices to improve the design but
then this is a good time to just take
another look at it and seeing how it's
working so initially when I was looking
at it this time I saw the real
importance of how we're going to
integrate these things so it's not only
good to have beautiful architecture you
need that believability of understanding
actually this thing has been here for
many years and how does that feel so
what I did and did some visual targets
for the team looking at things like
materials lighting particles just to
kind of describe that M frame so working
with what they'd already produced and
the visual targets that was perfect for
the team to kind of take it onto the
final art stage of production when when
I received these uh visual Target the
first thing I tried to understand is how
those uh uh elements have been built how
are the modules been uh divided and then
try to build uh less granular
of uh of those model pieces uh for
example a room uh or a wall to cap a
side of a room is uh what we call
prefabs so they are kind of Lego
pieces uh when uh when we have defined
these kind of rules within our small R&D
team we start building uh connection
points and tag points to help us stitch
together those pieces we Define uh
design rules and uh uh layout parts to
make sure that the generation of this
layout is uh
controlled is based on a clear aspect
visual aspect and on a clear design on a
clear cap of size and
uh when when we have all these rules we
start trying out and iterate on the
process of uh giving a feedback to
artists for having a different
variations or having a new rule set to
to stitch the things together in a
different way once the goal uh is
reached what we want to do with these uh
uh elements with these Outpost is to uh
uh create as more variations as we can
and then
create a lot of uh uh perceived
variation for the player so that when we
uh scatter them on on a planet the
player can play and can uh see a lot of
uh uh a lot of different location a lot
of different sizes a lot of different uh
uh Vistas at that moment comes a second
uh aspect of the
procedural uh variation which is placing
them on a planet also in this case what
we have is uh our principal artist and
our art Direction working on uh giving a
visual Target of how they want the uh
Outpost to look when they are placed on
planetary surfaces so we have a lot of
things like lightning the planetary
materials uh the weather system the the
Aging of the output coming in as
variables to set some def fults on The
Outpost we have the surface itself that
could be very even or uneven and we need
to make sure that the Outpost is
correctly placed this has been one of
the biggest challenge we still tackling
which is how we can find a correct
Place uh on the planetary surface to
guest our Outpost so sometimes we have a
fit system adapting which is one of the
first solution but we also have a better
shading system to integrate the feet on
it or we have a Terrain system trying to
adapt and trying to give more a more
clear and more uh uh even uh place for
the player also to be able to enter into
the Outpost we we Face problems with uh
with the the access to the these
Outpost and we have tried to find Visual
and Technical Solutions for this
uh the the planet editor is one of the
tools we're using for placing them is
trying to find the correct uh uh average
distance of this kind of uh Outpost
finding a correct spot on the planet and
then giving to the uh designers a way to
uh modify these settlements because
together with the Outpost we will get
some visual addons which are just very
nice elements that will give variation
to these uh groups with to these Outpost
and also some Design Elements uh for
example a Loot Crate could be a design
element that needs to go together with
the outputs to give the game play uh
these elements get also uh variated by
the planet editor by accessing some uh
defaults or some uh uh design changes
through time and through missions which
is is uh What uh uh we were mentioning
before like changing in runtime the
values of the wear and dirt system that
could give uh if the planet is Sandy
could give a a varying amount of sand on
the surface of of The Outpost we're
looking into uh more aspects uh for
interior and exteriors to be different
so the interior could have rust and dust
and the exteriors could have the planet
affecting it with the mud or or or the
sand as we said uh we're looking into
other variations as well uh interior
dressing with props uh there will be
probably a sneak peek on it it's
actually all the things you see from my
side they're still in R&D they're
clearly in a uh white box phase because
the visual Target we're trying to reach
is very very high I'm confident that
what we have reached is very good but
it's actually considered great box on
this title which is incredible so
hopefully you guys have enjoyed the
piece it gives you a good idea of where
we're up to right now with the surface
outposts and giving a little
introduction to some of the team members
that's going into making
them you know sometimes the simplest
solution is the best solution like the
stairs on The Outpost yep but like we
saw it takes a little trial and error to
find the uh the easy solution although a
little little Tri a little trial ER yeah
yeah well that's it for this week ATV
but before we go I want to thank all of
our backers you are the reason star
citizens development is possible yes and
a big thank you to all our subscribers
your contributions help us produce all
this great content and to show our
gratitude we're giving a big Benny's
vending machine to all active
subscribers if you've been wanting to
join our subscriber program sign up
before April 17th to get this great
piece of flare there's a link in the
description with more info and uh in
addition to the Big Bend bending machine
uh subscribers will will also receive
another piece of flare next week as part
of their rewards also next week we'll be
announcing our revamp the revamp to our
referral program yep all right lots of
stuff going on yeah and tomorrow check
out star citizens happy hour at noon
Pacific Community manager Jared Huckaby
will be interviewing members of the LA
ship Tech Team on everything that goes
into making spaceships for the
bdss and I think that's about it so
thank you so much for watching and we'll
see you around the ver
[Music]
thank you for watching so if you want to
keep it with the latest and greatest and
staff citizen of Squadron 42 of alment
please follow us on our social media
channels see you soon
[Music]

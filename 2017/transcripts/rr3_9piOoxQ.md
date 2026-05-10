# Star Citizen: Around the Verse - Legacy Armor Update (Part 2)

**Video:** https://www.youtube.com/watch?v=rr3_9piOoxQ
**Date:** 2017-10-27
**Duration:** 40:27

## Transcript

hello and welcome to another episode of
around the verse our weekly look at star
citizen's ongoing development I'm sandy
Gardner and I'm for Stefan
tomorrow is citizencon 2947 our annual
celebration of all things star citizen
where we shine the spotlight on a lot of
interesting content but we've also got
plenty of eye candy to show you today
this episode features part 2 of our look
at the changes and improvements coming
to the games
legacy armor but before that let's take
a look at what bugs and blockers the
development team conquered this week in
bring down welcome back to burn down our
weekly show dedicated to reviewing
progress on the release of star citizen
alpha 3.0 last week we are at 20
remaining must fix issues to close down
our next game loop of shopping cargo and
commodity trading let's jump right in
and see how the team is progressing
well the absolute priority for this week
is usually as keep the build stable be
able to add more feature work to it we
still have like a bunch of features you
want to closing out but the priority is
obviously get the shopping loop nice and
still keep things which is which which
are running well at the moment like
keeps optimization to keep the
performance good keep the stability and
half the things you already have in like
maze main mainly the quantum travel and
the traversal between the planets and
everything still work in a functional
state
bad news for this morning was that um QA
are flagged 100% server crash which
George is actually looking into so he's
doing that for the next hour in a bit
but hopefully looks to get a fix within
the next hour or so anyway George is
currently working on an optimization in
the network code a lot of this has
already gone in but had to be split up
because it's such a big change into a
lot of different change lists many of
these have gone in and have settled and
been fine but now that we get into the
later ones some of them causing some
issues so if one goes in and causes some
issues in a build it just means we yank
it back out fix it chuck it back in see
if that works
this is something that we've got to do
with network changes because they're
quite big changes to happen and it's all
happening in the background as well so
it's not something that's easily visual
to testers but what we'll do is keep
doing that until stuff settles and and
fits properly and then we can get the
rest of it in and once all of those
parts are in then we'll start seeing the
difference from an optimization point of
view there's also the other is being
that like very hard to reproduce
it's like random and people debate
basically how people work on it is right
now they look at the logic of the code
and they try to guess what's happening
and then they do fix all that then and
obviously it doesn't work and it's just
about reproduce so we might need QA to
help them somehow like connect to the
local service or whatever yeah it's just
it's just a hard hard issue to fix that
was the disk error disconnect 3007 so
that's the one of the more common ones
it was Chad
they put
final fixin but it was due to the
information that Clive's team was able
to get for him so right now I'm looking
at a disconnect that happens for clients
when joining a server and it's a
disconnect that happens because the zone
host for a spawning entity cannot be
found on the client the root of the
issue is because of something called the
ownership hierarchy for this entity
ownership is a way that we can establish
some parent and child relationship that
requires both the entities in question
to be present so the change that I put
in was to enforce on item port attaching
and detaching that the zone host was
always correctly established for the
entities in question unfortunately it
didn't quite fix the problem and so
right now I'm trying to figure out what
the situation is where this still is not
enough however I think we're close to
solving this for Advocaat II and I look
forward to killing this bug off because
it's being lying around on several
engineers for like three weeks now along
with the fixes network has been doing
we've had the code team over in Germany
have been and debugging a lot of the
court there that's been coming back with
me of K and Christopher Baltar's
actually got a list of all the worst
offenders put together now and they have
put them all into our booking system and
they're working through getting all
solid as well so the culling build
should have improved performance because
the feet that the information they got
back was really good for them they were
able to get a lot of a lot of useful
information there and then one major
focus was network networking sweat which
we were bound network across was part
multi sweaters part optimized really
soon and other large optimizations going
on to paralyze even more of the networks
but to possess performance that we
should we no longer network bound and 24
player plus situation which leaves us to
two other things where we which badly
bound our performance as most of the
riccati have seen we have our many
characters on the space stations we have
a cost to update
and the best given of the focus is to
optimize update for characters one thing
I will do this one of the components
which is related to or 3 optimizes one
other one was paralyzed besides us we
did some low-level optimizations to the
area systems because everything is per
se I caught but everything more general
system and before we kept an update to
do culling against the areas for each of
these areas which wasn't really
necessary because we don't use many of
these areas for actually Spade searches
this is no fixed will only keep this
actually updated for area 3 actually
going to search against on the really
full server I think the values for weeks
ago the worst server captures I could
see where one two hundred millisecond
frames and more which roughly is five of
peers now we are around 80 to 90
milliseconds which is 12 to 15 it's a
lot to poof another one side on the
other side it's not 30
so we are going to continue look into
this for the antibody we need to kind of
define which kind of fixes we we would
need to only test and of okati so off
the top of my head we have performance
improvements and then we have server
crash fixes I agree with Justin's point
that you know the whole purpose of their
counties to test performance and server
crash or performance issues and
stability right so do we feel like these
two server crashes are worth a bit well
it's also to test feedback as well and I
do want to just verify that point but
primarily I would say that the server
crashes of network and stability is the
key focus but it is to also get that
kind of feedback on the features yeah
but obviously if you don't have new
features yes no totally but I think at
the moment beyond someone
kind of push for the waffles right so
that needs to be tested as well I guess
when we looked at it with Paul and and
Todd them the guys today what we feel
like we need to do is actually just have
these major three categories and that is
the cargo system as a whole
commodity commodities and the shopping
actual of those commodities and
purchasing of those and then the
shopping of concentrating on physical
items and the actual shop polish if you
split them into those categories then at
least we've got the team is focused on
those specific Sprint's the idea though
is also with the gameplay review that we
have and this little stand-ups that
we're going to do 10 to 15 minutes per
day they talk about all three of those
Sprint's the ones that I've just pasted
in the chat and then on top of it what
we have is those Sprint's still being
active by the relevant members and
owners of that so what it will be is
we'll have those three sprints in this
schedule and it means that we have to
very quickly today retrofit the existing
ones that may not be appropriate to what
we've got currently and then get the
dates adjusted the wagon stick around
tonight Todd Paul to be able to have
that conversation with Jake straightaway
and then with Mark White and then we get
that adjusted and then I think that
that's the way that you know exactly
what you want for that cargo commodity
shopping for physical shops loop all the
way around
the next is a so this is an issue last
time so today we saw once again that
there are no items in the shops or in
the kiosks in our sipping build but this
is not it is a new bug but its same
symptoms you see this popping up a lot
and it's a different reason every time
or it's just oh no today in our shops
and it's a good example of how a change
it's totally unrelated to shops could
cause this issue so what happened was
there was an edit to our JSON parser in
diffusion which would change the
serialization from regular
floating-point numbers to double's
increase in the precision of our our
fractional numbers and what this did was
the message that we got from the
shopping service for all the inventory
for all the shops instead of sending us
integers that was expected it started
sending us doubles or floating-point
numbers and so those numbers were not
integers so the shop didn't know what to
do with them so said oh every item just
has a stock and a price and a buying
price of zero and if there's zero stock
the shop doesn't spawn any of these
items on the racks so even though every
shop knew about the correct inventory
none of them got spawned so totally
unrelated change in the JSON parser just
broke all shops one of the bugs I worked
on today
had to do with the image being oversized
in the list so as you can see as you
scroll down the list the image will
become oversized as new items come into
view and the issue was is that because
our list is pooled meaning that as you
scroll down the same number of items on
screen remains the same it doesn't
overflow so what it basically reuses the
display object from the top and shifts
that down to the bottom as you scroll so
what we needed to do was to just
basically reset the dimensions of the
image each time new data has been
injected to that display object and so
yeah and we fixed that it was pretty
easy pretty straightforward
yesterday I submitted the first part of
the commodity kiosk chip status that
field so that they could in the UI track
it to search destroyed or at the same
location or if it's compact if it
doesn't hold cargo at all oh if
insurance is currently being trained on
it such that it couldn't be used so sign
will take these and use them so they
could gray out things in the demonic ets
like ships that you can select at that
time the buck we're talking about is
that airlock suddenly didn't work
anymore
reason for that was so you could still
approach airlock go to the panel and see
in a direction the thing was the
localization string for that airlock was
missing because in the initial setup we
used an interaction string from squadron
42 but that gets not put into shipping
bills which means it works fine an
editor it works final internal testing
but once it gets to shipping bills for
three or two advocaat e it doesn't work
anymore
took us a moment to track that down but
it was basically an easy fix just adding
a new localization string but yeah and
the first moment everyone panicked about
likewise isn't working it should but
yeah in a thought essentially ignores
interactions which have no localization
string attached to them so we've been
focusing on closing out cargo
commodities in physical shopping last
night we did a review of the physical
shopping called out some new issues that
will need to get fixed then from there
we've we had done previous reviews of
cargo as well as the commodities the
guys have been working through that and
say it's almost ready for a director
review so I will be reviewing that
ideally either tomorrow or on Monday and
then those things should be good to go
obviously I'd try to play the game every
single day we're constantly looking at
the game loops so for us it's flying
doing missions going spending that money
that you've you've just hardly you've
just earned and then upgrading your ship
upgrading you're your own personal armor
weapons so and so forth so that's that's
really what we've been focusing on
the mission so you I think are in a very
good spot and then now it's getting
shopping and getting not to feel rights
and with missions we'll go through and
we'll do some final tweaks but the UI is
there and then it's making sure that
item 2.0 and the ships and the way that
those things feel is is right so
everything's starting to close down and
we're getting to a point where we are
seeing the light at than the tunnel
we've made solid forward momentum on
many areas this week including improved
load times and performance we fix
numerous disconnection issues and
completed several items for purchasing
and utilizing inventory at the time of
filming this we're at 16 issues which
has been identified as three blockers
seven criticals three highs and three
moderates now next week we'll have a
revised production report that
highlights the remaining features that
need completing before we push to a
wider PTU and then full live release so
come back and check that out here on
burn down our production schedule report
is updated every single week so head to
our website for a more detailed look at
all of our ongoing work and last week in
part one of our feature we shot off some
of the changes coming to the legacy
outlaw armor in part two we explore the
improvements to the marine armor set
this redesign was essential to make the
marine armor more modular and work with
the updated male based body these
changes also allowed the character team
to bring the marine armor in line with
our current standards let's take a look
at the second part of our feature on
legacy armor
hi my name is Jeremiah a senior concept
artists here of cloud Imperium games of
the Los Angeles studio last week we
briefly talked about the light medium
and heavy outlaw legacy armors we also
talked about designing around the
different zones of the character the
character pipeline and also the
different usage of materials this week
we put the spotlight on the light medium
and heavy marine legacy armors and much
much more so let's take a look so the
Marines are a kind of a different
challenge for us the outlaws are easy to
redesign because we're just basically
replacing them with something new
whereas the Marines are a different
challenge because we already have
Marines now currently you can play with
light medium and heavy c.d.s Marines and
that they look great and they're super
fun but now we have these old Marines
that we need to put into the game and
that's just kind of awkward so why we
why would we even do them at that point
if we've kind of already redone them it
would be a question that you might ask
with the old armor a lot of the legacy
assets are not made to be modular to be
able to fit to our new updated male base
body so with new legacy medium marine
you can now wear it
among other armor sets so the chest
piece will be able to fit with other leg
armor pieces the gauntlets and the
Greaves will be able to fit onto the new
male body and be able to also be modular
with other pieces from different armor
sets and the reason is we want to
redesign them for the things that's the
number one reason we want to do it but
also we found some fun lure reasons to
to redesign them and so I think one of
the my favorite things about redoing
them is that essentially we're using the
term legacy or history as being
historical so the light medium and heavy
legacy Marines are actually older models
of the current marine armor that you're
playing with now and I think that's a
fun way to build this into the lore for
the players as well it adds a lot of fun
elements for gameplay as well so maybe
they could be cheaper maybe they could
be to have different types of stats you
know it also lets us play with different
shape languages the new Marines are
super slick and they
ones are a bit more chunky a bit more
different and they start playing with
different types of materials so they're
playing you know the new Marines are a
lot about lots of metal lots of coverage
and that kind of stuff really high-tech
and the older Marines have lots of
different types of fabrics in them so
maybe there's more leathers or things
that it looked like padded leathers more
synthetics and fabrics and just as
they've advanced their technology
they've also enhanced their look one of
the big differences of working on the
Outlawz versus the marine stuff is that
the marine stuff is really all from one
group right there the Marines one of the
things that we've done differently with
the Marines as well is we haven't
necessarily started from a concept
painting a lot of the time concept art
you starts from a 2d painting or even a
3d sculpt a concept sculpt you might
call it and you kind of go from there
with the legacy Marines we already have
a look for the future and we already had
a look for what they looked like
the only guideline I had was something
that already existed that we couldn't
just reuse because they had to be
changed so the challenge with that was
kind of becoming a concept artist on the
fly as I was creating the assets so
working with Jeremiah a lot back and
forth we kind of slowly built up the
style of what the new legacy media
marine armor would be from what we had
to look at which was the in-game model
of the medium marine asset we had to
just concept it in 3d as we're building
the asset so that can take a lot more
time because when you're going off a
concept you have a one-to-one a
reference of what you need to build but
with having an old piece of art you have
to kind of reimagine what that piece is
gonna look like so the process was for
me is to first pull in what assets we
have for the old medium legacy armor
kind of referencing where they were
trying to go with it what I can kind of
retain in the new design and then from
taking that design I just kind of throw
in the new male base and start kind of
like shifting things around making sure
the shape language kind of reads from
head to toe with the new arm
the new legacy media marine armor we
kind of designed it so that the piece
kind of reads with your eye looking at
the top of the character and reading all
the way down a lot of designs with the
older medium marine hello horizontal and
vertical lines going through which kind
of dictates your eye if it's going down
vertically but once you hit a horizontal
design that kind of kind of stops the
flow of the design of the armor so with
a new asset it kind of reads better with
a whole flow the armor and the design
going through the whole body so the
designs more of a one look through a
rather van kind of looking different
areas so with modularity you have to
think about the zones and where armor
starts and where it begins there are
certain regions of the shoulder that
come up that we can't have the armor
come up too much because we get
penetration between assets like armor
plates around the bicep the gauntlets
around the arms coming up and especially
with modularity you have to keep your
armor sets in two different zones to
kind of be able to mix and match
different sets without having to worry
too much about spacing so as long as you
stick with these zones of the armor you
don't really have to worry about too
much about clipping and then other arm
sets being non modular with other pieces
well you can't get too carried away with
your designs when modularity comes into
play
it definitely restricts you to certain
design choices especially when all of
our own resets fit a suit of armor we
have to be able to mix and match any
piece of armor on to one male body so
our under suit is relatively tight
because that's to fit the form of the
male body and then all the armor on top
of that it has to also feel flush and
sequenced with what you're wearing
underneath which is the body suits a lot
of our armor is fairly form-fitting so
our jumpsuits kind of fit tightly so
that armor can go on top of it but with
our cooling system any major pieces of
armor that's for the chest will call out
objects underneath it so if it may
penetrate our system we'll call out that
piece of John underneath so that you
won't see it if it is clipping so it
takes away a lot of the
the work that has to go into maybe
adjusting volumes or positions of gear
so that they don't clip through and
penetrate so you see that in game so
again we didn't do any concept paintings
for this so I don't have anything of
that to show you but we're fortunate
enough now that this is already in game
we've shown you this in some sneak peeks
and I think some studio updates but this
is actually currently being rigged so
super excited to show you a basically in
game and almost ready to to get to you
guys as soon as possible
version of this one of the things that
we really liked about doing these just
in 3d and kind of experimenting with
those shapes as as they're in production
is that you know we were able to pull
open the old models and really reference
them a lot to say you know we want to
focus on some of the same design lines
or elements or shapes while also being
able to say what were the weaker points
what were the not as strong points in
this design and kind of try to up those
as much as possible
it does extend the production time for
high poly because you are exploring
shapes are not necessarily shooting for
a specific target but in the end you can
also find some stuff that's more fun
because you're able to see what works
and see what doesn't works and kind of
edit on the fly that way once we
finished high poly we moved into the
game asset phase as we've been doing
more armors and we're really
understanding really being able to
refine our rigging phases we've learned
that some of the armor needs additional
cuts to make it look good when it
animates something that we've started to
do on some of our recent armors like
some of the heavy slaver armors or the
heavy marine armors where we actually
separate out individual panels on the
armor itself typically what you would
see in a game mesh is something that
would be like one solid mesh and issue
is when that starts moving around and
these is animated it looks like it's
rubbery or it looks like it's stretching
and that's like a real quick call-out to
say like this is a game asset it doesn't
look super highly refined it's not very
filmic and so something that the rigging
team was able to help us out with was
saying if you guys cut you know if you
have a design and it's got a chest piece
and maybe shoulder pieces and but the
chest piece looks like it could break
apart from movement break those pieces
apart and then when they're reading it
they're actually able to move those
pieces independently than it is the
central piece and that makes it look
just like a knight's armor you know
other high-tech armor that those pieces
are actually moving and skinned and
weighted independently and that makes it
look more high-quality than it would if
it was a single contiguous mesh we've
seen a lot of improvements in our
techniques using the layer blend the
layer blend is a is a shader that allows
us to combine all of our draw calls on a
single material down to one drakul there
are times that it does go higher if
you're adding glows or different special
effects to that but the the impressive
part about using the layer blend is you
can try to get as much variation you
want in the asset itself and really the
savings are always going to be the same
for a very simple asset to a very very
complicated asset as long as it has one
layer blend material applied to it it's
very very cost effective because the
shader is so cost effective we found
that we can create a lot of different
sub materials and put a lot of different
sub materials on a single material and
what we're doing now we've shown this in
previous shader discussions one that we
enforce had but were you were able to
zoom in to like almost a micro level and
see the fabric or see the different that
you can really zoom in and get a full
read on the material at any any distance
one of the things that we're able to do
now with that is but by layering up sub
materials and actually putting on
several different layers of a single
sub-material in one area we're able to
get variation that sounds a little
complicated but basically what it means
is if you look at a picture you know any
Google Google any picture any JPEG
picture and zoom into it it gets really
pixelated that's a traditional diffuse
map if you zoom into a diffuse map it
just gets pixelated right with ours
we're using small diffuse maps the tile
across the whole a whole mesh and what
that does is it makes it really easy so
that when you zoom in there's no break
up in the material and it's it holds up
at a micro level the problem with that
is that you're only using a single
material with no color variation now
something if you look at anything that
you know if you look at your jeans right
now
people are probably wearing blue jeans
I'm wearing jeans there's a lot of
different colors in your jeans a lot of
different colors and your shirts there's
a lot of different colors and everything
and people don't really notice that so
when you're you know if I'm looking at
my jeans right now I have like a dark
blue there's even little elements of
yellows and greens and whites in that
and you know the way that we found for
the layer blend material to get that
variation is actually by layering the
same material on it with a slight break
up in the blend map which separates the
type of maps the type of materials that
we're using with a slightly different
color and so we're able to essentially
generate a new diffuse map it's not
really a diffuse map but we're getting
the variation that of the abuse map
would have just by layering lots of
different materials in the same color on
them and so right now the medium marine
is in rigging typically a mesh will go
to rigging and then you know they'll
spend some time skinning it up and then
we'll get feedback so one of the things
that we're working on now is actually
cutting up some of the plates that I
talked about to figure out where we
really want to get more of that motion
in the character typical problem areas
for us are in the shoulders there are a
lot of movement in the shoulders
especially for our game anytime when the
shoulders go all the way down all the
way up you have a lot of movement
they're both forward and back so
definitely in the shoulders is one area
the other area is always going to be the
hips the hips and waist so there's a lot
of torsion and rotation in the waist and
that's one area where you can typically
see a lot of stretching in a character
which is something that we try to avoid
so we're gonna try to do some changes
actually to what you're gonna see now to
make sure that some of these plates here
feel a little bit more layered on top to
vicho on top of each other a little more
stacked and just a little more mobile
the light green is also in high
polyphase right now we're focusing on
kind of updating the shapes as we go
through production just while working on
high poly we're not doing a concept
painting for this either the fun thing
about is we get to explore what kind of
works and just kind of play around with
it and just kind of really get to
experiment with it but I think it's
starting to come along pretty well it
has some pretty iconic elements that one
of my favorite thing about
the light marine is how asymmetrical it
is so you know a lot of our standard
suits are kind of split down the middle
right side looks like the left side
whereas the light had a lot of kind of
tubes and things coming across body
which is a fun element to to be able to
play in with so super excited to see how
this one goes for the rest of production
in in concept in costumes we would add
cloth and material different kinds of
materials together to make things look
more real in real life you don't see
well if you look at current armor today
you don't see someone wearing just metal
plates all over their body there's a
Kevlar there's also some sorts of metal
plastics sometimes leather cloth a bunch
of materials are put together so having
multiple materials in a balanced way in
a very and also placed strategically
will make the asset or make the outlook
make the costume look more realistic
that has kind of become the trend of
concept and also design in fashion and
also just armor in general and so a lot
of our previous assets didn't have a lot
of those material variants a lot of them
were just color variants so we might
have a stripe instead of an actual
material variants so what we've been
doing recently was introduced a lots of
different kinds of materials lots of
different shapes and fabric happen to be
one of them a great example is the sand
nomads when we introduced though the
wave ink it really gave a different type
of look and feel and more realistic
compared to the older characters we had
so we wanted to give the legacy armors
that treatment as well and not stick out
like a sore thumb
compared to our newer character assets
the heavy marine is also in high poly
but we actually did do a concept
painting for this one the heavy bringing
I think is probably one of my favorite
armors of the old one because it has
some really distinct shapes part of the
reason we wanted to do a painting on
this one is because the heavy armor is
just by being what they are heavy I mean
they have more stuff on them so to kind
of wing those on the fly is not as easy
as it is to do a light or a medium where
there's less actual elements on the
character
so when you get to something that's
really complicated and has a lot of
pieces on it having a painting to kind
of at least sort out some of those
simple lines for you is really easy to
follow I took a look at the the previous
asset that we've had and also the
current marine that we have and there
was a drastic difference in shapes also
the size and also our old legacy armor
looked really low-tech compared to our
current one and so we wanted to show
like oh there is growth and in time but
it almost felt too far away in time it
almost looked like something that would
have been created actually in the star
citizen or maybe 600 years ago possibly
so we wanted to kind of cut that down
also and introduce the multiple
materials that I spoke earlier about on
the heavy marine so I maintained the
original silhouette actually and the
shape of the original heavy marine so I
would keep the big shoulder pads and
also the big chest plate that that the
heavy marine had I just added a lot more
layering on top of the armor to make it
look more integrated with each other
then rather just blocks and so but the
overall shapes of the heavy marine the
previous heavy marine are actually very
similar to the the new one that we're
making also the helmet as well I didn't
change the helmet as much I tried to
keep a lot of the shapes but then some
of the shapes on the helmet were a
little too too simple it was literally
just I think just the plain here and a
plain in the back and I wanted to make a
little bit more interesting more
integrated with each other I think that
was I think that was the key word
actually when I was designing the heavy
marine integration so a lot of the
shapes go into each other and come out
and layer on top and there so there is
this flow to this design where the I can
go down and you see things kind of
interlocking with each other rather than
just box bugs and bigger bucks and a box
so I actually introduced a lot more
fabrics a lot more rubber along with the
hard pieces as well but I didn't take
into consideration of the original
aesthetic of the
from marine I added more lines that
would make it more streamlined rather
than those big squares that you have on
the shoulders and I think I had like
belts all around so I I took a lot of
the shapes from the heavy marine because
I didn't want to completely change the
design I want to update it bring up to
this the same standard and also the
biggest thing of today zones it didn't
respect any of the zones and so we had
to tweak it anyway so we're like why
don't we just upgrade the asset when
approaching the different sizes for our
characters especially from a light to a
heavy the silhouette is a big thing and
I have to be in a certain mindset to
design a certain size something that's
more on the light side we'll try to keep
it skin tight and so I would have to
play along out of that I would have to
play inside the pretty much the the base
male to a certain extent and maybe some
slight like a vest or maybe a torso and
some light pieces but when it comes to
the heavy I'll admit it compared to a
lot of games are heavy are heavy they're
huge and so I remember originally back
back in the day when we did the heavy
marine we couldn't find the right size
for the heavy marine and then we it went
through multiple iterations and we found
the size that we all liked and happen to
be this gargantuan thing and so we can't
just put random stuff on the heavy and
just call it a day we have to make sure
that it makes sense or aesthetically
look like it'll make sense so it's
there's a different mind so that I have
to go through the light honestly it's
easier for me because it's just
literally just paint on top of the base
male or an under suit and just add some
small bits here and there makes the line
the lines on the character follow and
flow but the heavy marine or the heavy
assets I'll take a little bit of time
because also we don't want the heavy
armors to look exactly the same to each
other and so a good example would be
the thus labor Armour the slaver heavy
armor very similar to the CBS armor
button yet they're different and so of
trying to find a trying to find an
aesthetic that differentiates different
manufacturers but maintain the same size
is a little rough so it takes some time
and thought to get to actually execute
because of modularity I know there will
be a player that will put on a heavy
marine chest a light outlaw arms and
maybe some Shubin boots and an RSI
helmet and it will look absolutely
ridiculous right and so I can if I stick
to if I try to cater towards that
direction I feel like all our designs
will look stale because I would have to
use the same lines for every single
asset and so there is a certain
limitation on the creativity side if I
were to just stick with that in mind so
there are times when I'm like you know
what we really want to get this asset in
and that asset will always look best
with a certain certain group and class
of that specific model and the other
parts that go with it so I I would
prioritize towards that set first and if
it looks good on that asset
I might rethink it a little bit for the
other assets but I don't let modularity
stop me actually think so as you can see
we're making really good progress on all
the lights the armors they aren't
planned 43.0 we are shooting for a
release soon after that we're hoping to
get them to as soon as possible all of
these upgrades to the outlaw and marine
armor mean that you'll soon be able to
mix and match modular pieces to create a
suit of armor that not only looks good
but matches your play style very cool
and that's all for today's show thanks
to our subscribers for helping us
produce all the video content that keeps
the community up to date on star citizen
and of course thanks to all of our
backers for your incredible support over
the years
the
scheme is only possible because of you
that is true finally remember to tune
into the star citizen twitch channel
tomorrow starting at 12:30 UTC to catch
everything happening at citizencon and
be sure to check out the event schedule
on the website so whether you'll be
joining us in Frankfort or streaming it
online you could plan your day
accordingly lots to do and until next
week we will see you around averse thank
you for watching so if you want to keep
up with the latest and greatest in the
star citizen the squadron 42 development
please follow us on our social media
channels see you soon
you
[Music]

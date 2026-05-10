# Star Citizen: The Power of Intel® Optane™

**Video:** https://www.youtube.com/watch?v=yk2nuJjmLyE
**Date:** 2018-05-24
**Duration:** 28:50

## Transcript

good afternoon everybody my name is
Alejandro Jose I'm a Solutions Architect
for Intel Corporation I'll be one of
your presenters today and I want to
thank you for coming here the other two
presenters will be here today with us is
gonna be Sean Tracy from con pyram
here's a technical director also from
until we have Nathan predict he's a
technical marketing engineer and well
three of us will be your presenters and
we're gonna be going over how by using
interrupting technology cloud Imperium
games was able to accelerate the game
development and also kind of enhance the
game experience so with that said let's
get started on today's agenda so first
of all we want to give you kind of a
quick background on an overview of the
findings from accounting periods also
we're going to also give you a quick
introduction to what Intel optic
technology is so you have a better idea
after that the second point we're going
to talk about is interrupted technology
talking about the benefits what actually
is and how has it helped other companies
after that will go into the into the
meat of the of the presentation of today
which is actually going over how this
technology helped improve all the
different developments from for gaming
and lastly we'll have it open for
questions and answers so that's how
Genda looks in here today so for now I'm
gonna pass it over to Shannon 8 to give
you the quick overview for the upcoming
presentation so I'll kind of go through
this a little quicker than I might
otherwise so octane
just a kind of level set everybody here
obtained is basically Intel's
implementation of new media new media
technology called 3d crosspoint the 3d
crosspoint media makes up the foundation
of the card then with an Intel
controller and for more on top of that
and then obtain is actually represents
multiple products right so we're going
to be talking mostly about the obtain
SSD here the 900p there's also obtained
memory there's some very strong
similarities between the different
products but they are intended for
different usages this is mostly around
the the 900p so you know what is 3d
crosspoint what is obtained
it's basically a new media technology a
new a new way of storing data it doesn't
work like NAND technologies work today
it works in a different way and that
brings some unique properties some
unique advantages to it that you
wouldn't get with the NAND device life
or one thing from a programmers
perspective it's a bit addressable now
this one actually works the 900p works a
lot like a normal SSD you read and write
to LBAs like you would with a normal is
d but under the hood the controller is
capable of actually addressing very
small chunks of data relative to an end
device which talks more in terms of
pages we also have what you know one of
the main properties here that will
benefit we think game developers in the
future the latency the access time to
get to the data is somewhere in south of
10 to 10 micro second so it's about an
order of magnitude below an end device
so I think you see as we move forward
with you know with the customized
software that kind of really takes
advantage that you'll see some real
strong benefits that take advantage of
that we'll see a little bit more on
these last two bullets here we've got
slides on performance consistency and
the endurance those are both very
different than NAND devices and we'll go
into that in more detail later I'm going
to turn this over here now to Shawn he's
going to talk about the the cloud
imperium bit yeah so I'll just speak
from here it will go into it a little
bit more and just tell you what I'm
gonna talk about anyways once we get to
our section here and it's some of the
things that we did to use
multi-threading to improve some of the
performance internal to the game engine
itself and how we could do that to
leveraging on NAND technology from Intel
obtain things like multiple concurrent
file reads at runtime
improved loading times and ultimately
just getting a smoother experience using
the Intel obtained technology and then
finally we'll go into how it's actually
improved our build process as well as
we're building you know up to 1.3
terabytes of source data at one time it
was real important that we had a real
powerful storage device to be able to
use it Thank You Sean so with that said
we'll go over I'll go over quickly to
more details on the in topic technology
so as Nathan have said there are
different types of products out there
for different type of usages so the
first one that
have heard before the first ones come
out with the Intel obtain memory which
is pretty much an accelerating device so
what it does accelerates your system
once you pair it with a hard drive so
you parrot that memory module with the
hard drive to get like an SSD
performance so that's kind of it does
the usage for the Intel obtain memory
the other two are storage devices so
like a regular SSD or or hard drive well
not like a regular because these guys
are a lot faster more and more durable
and lower latency the one the ones that
we have there is the 800 P which is more
like up for like a day to day getting
closer to the performance side and the
one that will actually talk today and
the one that cloud imperium to use is
the 900 p which is designed for
performance or endurance so that said
why performance of endurance
I think performance or endurance will
benefit most of the most of these groups
actually we're nerfing most of you guys
who have heavy workloads so I'm talking
to about the gaming developers media
creation engineering workloads
scientifical and medical research which
are very heavy workloads that once you
load them up on your system you run out
of RAM and then you start doing what is
called paging you start staring
accessing the drive the storage many
many times to get all that extra data so
with the lower latency and how fast it
is you're able to do this with all this
workflow so those are kind of the work
those that we're looking for and we
think that this drive is a really good
test solution once you're working with
demanding with them ending work looks
for example I've talked to someone
earlier today that they have this huge
picture of I think was 16 K and high PPI
so high a per pixel pixel per inches and
they had to actually chop that picture
in several stages in order to be able to
process it so the idea is by using this
drive you nationally have to do that you
can actually load that whole picture and
actually be able to work with it so
those are kind of the usages that we see
and also new possibilities why new
possibilities because this is a brand
new technology so there's so many things
that US and Intel can think but if we
actually you guys help us to develop new
technology see new possibilities we
don't know what's out there
so that's one of the reasons we actually
are working with a client peering games
because they have the know-how on the
game development and we have the
know-how in the hardware so they can
actually come up with with a better
ideas or more ideas or newer ideas that
we haven't thought about so that's where
we also look into new possibilities and
with that I will pass it over to my
friend Nate's there we'll talk you a
little bit more of the benefits and why
this also it's a good solution for you
guys okay so you know at the end of the
day I think you know what this is gonna
come down to is you know why should I
care right why do you guys care about
this this is all you know hardware and I
assume a lot of you guys are software
developers here right so in order to
explain why I think you should care I
have to kind of go into this concept of
what's called queue depth right and I
don't know how much this will be
familiar to you so apologize if this is
repeating something you already know but
all the i/os that go through a system go
through a storage queue and in the case
of SATA you've got a single queue and
that's generally not that big of a deal
because it drives relatively slow but
when you move into an nvme or PCIe
device with nvme now you've got a you've
got a queue for each one of the cores in
your system right so if you've got an
eight-core system you've now got eight
queues and if you think about that the
number of i/os that are in the system
are actually fixed right and so now
instead of putting all eight of those or
all you know all let's say 20 of those
IOT's into a single queue now you're
spreading those out over eight queues
and what happens is that lowers the
depth of the queue right the queue now
has only a couple entries each and it
each queue has a couple entries each
rather than one deeper queue and you
know why is that important if you
actually look at a datasheet for an SSD
those data sheets are gonna are gonna
list performance data right they're
gonna list sequential data and they're
gonna list random data the random bid is
very important because most of the
workstation workloads are actually
highly random and we'll see more about
that in just a minute but the other
important thing here is that the numbers
that they'll quote are usually in a ops
you know you might see a number like
300,000 I ops 400,000 I ops those
numbers are almost always quoted at
queued up 32 or above so if you actually
look at this profile that we've taken
with a number of common applications
right these are applications that you
you know you probably use before visual
studio maybe side effects for rendering
if you look at a profile in a
workstation
environment those key adepts actually
stay below 5 80% of the time more than
80% of the time right so these high
300,000 IAP numbers that you keep seeing
quoted on these data sheets you'll never
see that on a workstation you might see
it on a server where the Dacula are able
to get a little bit deeper but
workstations operate at very low cute
ups so one of the things that that makes
octane unique you know and we'll see
some more specific data in a few minutes
is the queue depth the load queued up
performance is actually you know very
close to a high queued up performance in
other words you'll get to the high
performance aspect of the drive quickly
and you'll stay there across the entire
range right and what that will translate
into for a user is it's usually going to
be something like responsiveness right
that millisecond delay that you get when
you're trying to open something it goes
away and you get used to that I mean
I've been using one of these drives
myself for quite a while and you get
used to it when you go back to another
device it actually it's hard to go back
so let me yeah let me show you a little
bit in terms of actual performance and
metrics at these key depths right we see
here the random read and random write
these are you know again in a
workstation environment most things are
random and you'll see if you look at the
actual random read which again most
workstation environments are mostly read
you'll see up to a 6x performance
differential right and that's over a
very high performance nvme NAND device
so a huge difference in terms of usable
performance right not high-end you know
it's it's not like you got a sports car
and you're driving around in a school
zone all day right
it's something that you can actually see
and feel and in your day to day
operation this because of the way rights
work you'll see the numbers not quite as
high of a differential they're at the
low key depth but you can see as you get
up to the higher key depths there it
starts to taper off so even when you do
start writing a lot the drive continues
to accelerate where an and device may
just taper off and stop okay so putting
it all together most people aren't just
reading or just writing all of the time
they're usually doing a combination
though too so what this graph represents
here is we've taken a queue depth of
four which is I think you know a
relatively decent number and we've held
that steady as we as we varied the read
from 100% to 0% right and if you look at
an end of
that number that that actual throughput
of data there even though you might see
these numbers like three thousand
megabytes a second you can see the
actual usable speed here is closer to
two hundred megabytes a second and it
stays relatively in that range until you
get very close to the full write
performance then it starts to ramp up
sharply again if you look at what obtain
can do here it starts out at a high
level and it just kind of stays there
right so it doesn't really matter you
can read you can write you can
interleave the tude
the performance will stay generally the
same and then the last bit I'm going to
talk about here too is endurance so when
again when you start talking about SSDs
you have to worry about right wearing
the cells out right you don't have that
problem with hard drives for the most
part but on an SSD the cells will
eventually go bad and a lot of drives
will have spare and like but if you look
at the actual data here this is this is
warranted performance right so these
SATA SSDs here nvme SSDs on the right
hand side this is what the vendor will
actually warranty the drive to allow you
to write to them before they're out of
warranty essentially right that number
of varies anywhere from 150 terabytes up
to about 400 terabytes
whereas the obtains you know again
orders of magnitude higher than that so
practically speaking you can write one
of these op tain drives up to 22 times
alright sorry you can write one of these
nvme or ananda devices up to 22 times
and replace them 22 times before you've
worn out a single one of these obtained
drives so you don't have to worry about
the drive disappearing you don't have to
worry about the cells going bad the
drive is is guaranteed to work out to
this up to this terabyte written data
that you see here okay
so in terms of what that means for
actual applications alejandra we'll talk
more about that now appreciate it so
staying in the on the theme of how did
these translate to you who have he who
here have spent a lot of time where you
kick off a render or a simulation
compilation and you just okay I just
kicked this off and I'm gonna go now and
you know spend go get some food good
coffee go play around no sore fight and
then your supervisor to ask you like
what are you doing why you're not
working or like well I'm just waiting
for compile so I'm sorry to tell you
that
with this obtained drive this sort plate
fight time haze we're gonna actually
reduce it and at the end of the day that
actually makes your life easier because
when you will go ahead and kick off the
compiled in a Friday you're worrying
throughout the whole weekend it did to
compile their work that it crash and you
have to wait for such a for such a long
time a period to see if it happens but
now with the with this type of storage
with this technology Intel obtained
technology you actually can do that a
lot quicker and we have seen that
through rendering through a loading
tumbler projects also now the ability to
to run a larger workloads and so that
actually helps you to get all these done
faster so how does it translate to you
you get things done faster you get more
time for you or more time for each
iterate on any changes that you have to
do to your project to show a couple
examples of that quickly is we have also
worked out with company called digital
dimensions which they implement in the
technology and they sell for the one
percent faster rendering time also by
using these drives they also incremented
the processor usage by seventeen percent
which means that you just spend this
this amount of money to buy a processor
there's actually sitting idle waiting
for more information just because the
current storage is not fast enough
defeated but now that we have the Intel
technology that is able to feed it
faster that you have improved the its
utilization by more because now he can
get more information and he can get
going and do the work faster also we
work with side effects and they have
seen by the scene under rendering
they've seen an improvement of the 2.7 X
so that has also helped them a lot when
it comes to particle rendering which is
the when you're doing all these
calculations over you doing for example
a maelstrom of water and try to see how
the physics and the interaction
whichever particle goes goes with it so
it went from actually 17 hours the seven
second clip of a maelstrom from 17 hours
to taking to render to actually 6.3
hours so that's a big improvement from
them so if you want to make any changes
you don't have to wait I guess two days
you can you just do it and you guys
should do to two rounds of that
rendering in one day and do any changes
they need to do but those are just some
examples that we have with the real
example that we want to share with you
guys in the important one and why we're
here is how has clone Imperium
seen any advances or on there
gaming development by using this
technology and for that I'll hand it up
with you Sean thanks a lot guys so us at
cloud Imperium games making star citizen
as well as squadron 42 it was really
nice to be early adopter it's partnered
up with Intel because we really got a
chance to be first boots on the ground
in terms of trying out some different
things seeing what we could actually do
to leverage the technology so the first
thing I want to talk about is kind of
the end user optimization what the
players are actually seeing for us and
and we found out very very quickly that
performance is the key to a good player
experience and to get that performance
we have to do some things internal the
game engine and one of the big ones of
course is multi-threading now this isn't
a multi-threading talk nor is that
really about CPUs but I do want to
explain some of the really core concepts
of it and really multi-threading is a
concept that we always have more than
one object to call you've got more than
one object to code more than one
particle emitter be updated you've got
multiple files streaming in at once
you've got multiple pieces of game code
going on at one time you've got entities
with different components on them that
you need to update per frame some that
you don't need to update to render an
actual frame so these concepts actually
resulted in two really key systems that
are internal to our engine one of them
is the batch updater and the second one
is the background workers so batch
updater what's a batch updater so a
batch updater is something that we have
actually put together and it's a system
composed of batch workers and this is
probably not a unique concept to b2b to
hear about really and batch workers we
found out a little bit like rabbits
especially for the game coders you get a
couple of these you learn how to use
them and all of a sudden you've got
dozens of them and you've got to try to
be wrangling them all across the all
across the code so these are used to
update batches of the same object that's
distributed over multiple CPU cores
what's really important to us being a PC
game is that we're developing for a
bunch of different platforms and
depending on the users they might have a
better CPU they might have a couple more
cores they might have a couple more
threads that they can actually throw at
the game engine versus another user so
we wanted to be
able to be as scalable as absolutely
possible so it's really it's really
useful in combination with an entity
component system and a lot of engines
have already moved this way and a good
example is unity has always kind of been
the set up in this kind of method on
Rails going that way as well as
lumberyard and really what it does it
allows you to relatively easily parallel
eyes of your game code without your game
coders necessarily understanding the the
underlying process that's going on there
so in terms of the batch updater we use
this for frame dependent work so
anything that we need computation to
show a frame in in in in that method now
on the other side of it we have our
background worker system so the system
this one is designed around single job
job objects and the idea is to run the
background worker systems whenever the
batch workers run out of work so when
you're going yo buddy and get back to
work we can actually do these batch
background workers so this is where we
actually begin to be able to leverage
the technology of NAND SSD or Intel
octane technology so these background
workers are really tightly coupled with
our low-level i/o system and it
specifically gives us some pretty big
benefits that are not only user facing
but also facing for the game developers
so how does that work we couple these
background workers to the i/o system for
Intel 3d NAND SSD and Intel obtain SSD
tech so we can read multiple files in
parallel brock's using asynchronous i/o
versus a more serial access pattern that
you would get in a platter drive sort of
this file by file by file and to give
you an example some of our we've got
spaceships in the game these are you
know it's 300 megabyte asset that's just
made up of a bunch of different files at
one time so anytime that we have a
player come into a system we've got to
load all these ships anytime we have a
player come close to the planet we've
got to load all the outposts on the
planet giving them a sort of stutter
free experience is a pretty important
thing for us
so basically when a file block finishes
a free background worker wakes up it
decrypts and decompresses said block
even if it's not fully in memory yet so
this is usually where you know the
theory of game load times being improved
by obtain SSE if you don't do something
like this you're actually still going to
run into a bottleneck so do the number
of parallel files we can work on
multiple file blocks in parallel it
gives us up to for 16 kill the bug bite
block blocks in flight at one time so in
the end we get four blocks in flight
across n number of cores a number of
processes in parallel so again that's a
lot of just you know quick explanation
of how we're using this but what does
that actually do for the gamer and
that's what this is more about well what
it does is it improves game loading
times now in star citizen we actually
only have one load you load the universe
and the universe is a pretty big place
there's a lot of stuff to load within
there so one of the examples that I've
got up here we had a 7200 rpm platter
drive and we loaded the universe on it
and then we tried the exact same thing
on an Intel obtain 900 P and the load
time was actually 130 seconds faster
which is significant improvement in that
one load and now against an SSD SATA the
improvement was a little smaller but
absolutely still there so four and a
half second improvement to load time so
again having the multiple concurrent
file reads during streaming or loading
made this a lot faster so moving on from
this just showing an example of that
actually happening now the two on the
left-hand side of this video are the
Intel obtain 900 piece so that's look
this is actually our load screen it's
not the most exciting of videos I
understand seeing a load screen and
you'll see this little pink placeholder
sort of load time graph that we had and
this is the SATA SSD on the top right
and the 7200 rpm platter drive on the
bottom right so after about thirty
some-odd seconds we get our nice load so
the Intel obtain 900 feet that's our one
load so that's how our players are
experiencing that immediately shortly
thereafter we've got the SSD inside a
configuration that's gotten loaded up
now and we're still waiting for the
platter drive now I'm not going to make
this whole video run I wonder how I can
speed this up here
it's right there I'm not gonna insult
everybody
telogen so take three minutes to load
but after about three minutes you see
the 7200 RPM come behind there's no
plate play blast I didn't want to have
you guys sit through the whole thing
point being is that you've got it in
about 180 seconds faster which is a huge
deal for the players especially so now
how did actually benefit game
development and actually working day to
day there was already some pretty big
improvements right out of the box so one
of the big ones was real word that Oh
copies are faster than ever
a lot of the version control systems now
like it or even perforce have these
parallel sync options and you can really
abuse those with this kind of technology
you can also use this with internal
tools so we have an internal tool that
we called copy build and it's basically
how the artists how the program was how
everybody pulls down 65 gigabytes of
packaged data after a build process has
run so one of the sort of graphs up here
is how much faster was that build copy
so again this is about sixty five
gigabytes being copied down onto a
developer's PC on a 7200 platter drive
mechanical drive rather it's faster by
288 seconds considering you do this four
five six times a day really depending on
the day that's a huge improvement and
again any downtime just reduces that
amount of swordplay like Alex was
talking about on and in on an SSD and in
SATA configuration it's a faster by
about 76 seconds this is again still a
big improvement that you're pulling down
these builds multiple times throughout
the course of the day so again there's a
very very real-world example the other
one and this wasn't something that it
was necessarily expecting but ended up
benefiting our artists especially the
facial animators quite a lot large
source file export was massively sped up
so one of the things that we do we have
some Triple A actors within our games so
the data that we use to represent these
guys within Maya is pretty massive we've
got really really high density meshes
and some super super high density
animations so one of these exports can
be up to seven gigabytes of uncompressed
Calado
data this is all being written to drive
sometimes it's going to take about four
and
minutes to export so we got that four
and a half minutes just using an Intel
900p down to just a couple seconds so
for artists to be able to iterate on
this kind of stuff it was it was
incredibly important to them and again
going from you know the the minutes down
to seconds for their sort of iteration
loop was super beneficial and one other
one that I wasn't necessarily expecting
was our frame by frame captures this is
something we do sometimes when we want
to really really consistent 60 frames a
second we're outputting per frame a JPEG
or a PNG onto disk and usually the
bottleneck when you're doing that as
you're playing the game is actually
writing to disk and we we slow down the
game to a state that it can actually
keep up so when we did this usually when
we play it on you know like a 7200 rpm
kind of drive you're playing it in slow
motion it's like 510 frames a second and
you're very slowly capturing this and
most of us have put these kind of things
together for demos or for marketing
content or something now being able to
do it on an Intel 900p this was almost
playing at real time so it was much more
24 30 frames a second so I could play
the game quite normally and still have a
lossless capture done written straight
to disk so this was a really nice thing
too lastly we benefited pretty massively
from changing our build configuration on
our build machines to use the Intel 900p
so one of the things that we have to do
just before we build all of our assets
is we actually have to synchronize all
those assets and I talked a little bit
about this earlier but the actual data
that the build process has to do is much
much more than an artist will have to
take a look at so right now in star
citizen we have 1.3 terabytes of data to
sync per branch this is crazy this is a
lot of data this has done multiple times
depending on content needs so sometimes
I'll change a preset in our resource
compiler and it requires of rebuild all
of our source assets so they'll have to
pull that down onto the build machine
and then all those assets will need to
get compiled we do this for every major
release and considering we've release
every three months that's kind of a big
deal and anytime we change data formats
so we got a speed improvement pretty
pretty dramatic actually and just before
I go into the speed our current
configuration was 24 SSDs in
out of raid six on on a super box that
we have in Austin and Nate had come out
worked with our build guys a little bit
and we got our data sank down quite a
lot more so right now in the current
configuration it was taking about six
hours and 13 minutes to bring down 1.3
terabytes of data once we change it out
to our opt-in configuration which
instead of 24 SSDs we actually hooked up
just for Intel obtain SSDs and vrock
raid configuration so for Data Sync this
only took three hours in 30 minutes so
we basically went twice as fast this
again is a huge deal because when the
build guys are coming in and they have
to do a full data sync of this they're
either going to have to do it on the
weekends they're gonna have to do it
late at night sometime when it's
actually not going to block development
or it's not going to block our fast code
builds from coming up so they get a lot
more sleep and we're able to actually
use a lot a lot less drive space in our
in our servers so so really to kind of
summarize everything we saw some
end-user optimizations faster load times
more smooth streaming during gameplay we
have some optimizations directly for
game development that's file sinks
source file exports as well as capturing
and then we were able to accelerate the
data build process and all of this we
pretty much did out-of-the-box there was
very very little special setups that we
needed to do to get this benefit right
away so really it opened new doors for
us for creating these novel experiences
for our players we can load bigger data
sets and we can load them faster and
smoother than we can on different drive
configurations so really allows us to
improve long-standing systems and tools
to take full advantage of the Intel
obtained technology
thanks for watching for the latest and
greatest in star citizen squadron 42 you
can subscribe to our Channel or you can
check out some of the other shows and
you can also head to our website at
www.uvu.edu/library

# Star Citizen: Around the Verse - A Show of Character

**Video:** https://www.youtube.com/watch?v=J0tTfSkhNZQ
**Date:** 2018-04-19
**Duration:** 26:09

## Transcript

hello and welcome to another episode of
around the verse i'm sandi gardiner
I'm Dave haddock good to have you back
again Dave in today's episode we'll see
the process that brought the character
customizer to fruition and we'll take a
look at the road map to get an update on
early progress toward alpha 3.2 yeah as
some of the devs continue to add polish
and improve stability to 3 1 through
smaller patches most of the teams have
shifted their focus to the next
quarterly release yes they have and
things do move quickly on this schedule
and work is already underway on various
features and content plan 4 3 2 as you
can see if you check out the road map
yeah you can always follow along for
yourself on the RSI website but for a
bit more insight into what the devs have
been working on let's go to Rikki gently
in the UK take it away Ricky thanks guys
let's kick things off at the top of the
roadmap with characters work continues
on revisions to several legacy armor
sets with the light medium and heavy
versions of the marine and outlaw sets
coming along and the port olisar costume
set also scheduled to be released in
three two is being worked on as well
gameplay is getting a lot of attention
this quarter as we are trying to focus
on quality of life improvements and
upgrades to current in game systems and
features were prioritizing development
goals based on the feedback we received
through last month's backer survey and
the need to make the current version of
that game as fun and fulfilling as
possible improvements to the shopping
experience currently being worked on
including balancing and augmenting the
in-game economy adding improved shopping
kiosks and an expanded variety of items
available to purchase we've also been
upgrading ships and their components so
that the way you configure weapons
shield generators and allocation of
power all factor into your ship
performance and affect gameplay in
significant ways you'll also see weapons
overheat misfire and suffer system
failures based on configuration as well
factors like wear and tear damage and
the quality of the component itself the
VMA in PMA moba Glossop's continue to
receive polish - visual presentation as
well as tweaks to functionality some of
which we saw on around the verse a
couple of weeks ago from our community
feedback some of the improvements who
are most excited about relate to forming
groups and interacting with fellow
players to that end we have teams
working on enhancements that will make
it much easier to play with friends
assist and communicate with other
players things like quantum linking new
and expanded service speak and contract
types like escort will go a long way
towards improving the cooperative star
sir is an experience all you prospective
prospects is out there will be glad to
hear that the mining mechanics are
coming along nicely with a full loop of
mining coded we can see the mining laser
breaking large rocks into smaller pieces
the extraction tools harvesting
resources from the fragments and storing
them in a ship storage containers we can
even sell the contents back in
Civilization for in-game currency work
is also being done on the mining HUD and
the audiovisual aspects of the mechanics
the idea is to make the gameplay
intuitive using sound and graphics cues
minimizing a player's need to refer to
the UI especially as they become more
familiar with the process
in the coming weeks
these visual prototypes and audio work
will be integrated with the code to
create a cohesive experience that will
continue to be tweaked and improved
before making it into alpha 3.2 moving
on to the AI combat behavior and wild
lines are being worked on in relation to
pu bounty-hunting missions interdiction
and dogfighting with pirates ship
designers have been working on aspects
of the origin 600 i and reworked aegis
avenger variants as seen in last week
shipshape installment and they continue
to work on other vessels like the Vandal
blade and their anvil hurricane
meanwhile new weapons and props are in
various stages of development and set to
be in leashed in the pu our location
teams are turning out some very
impressive visual prototyping for
Hurston its moons and its landing zone
level
those teams are also making exciting
progress
on the procedure layouts and visual
detail work like lighting for the rest
stop stations that's all for now we'll
see you next time with more on the PU
thanks Ricky
it's cool to see these the early stages
of the mining mechanic I mean even in a
pretty bra state you can see all the
components working together and it's
going to be pretty exciting to see the
audios and visuals coupled with the
system in the coming months yes it will
be and with a lot of improvements to
existing features alpha 3 2 is going to
open up gameplay in a lot of fun ways
but now we're going to take a closer
look at a feature that was just
introduced in 3 1 the character
customizer even though it's only the
first iteration of a system that will
eventually have many more options the
ability for players to tweak their
character's appearance has already added
a welcome bit of visual diversity to
star citizen in this week's feature
we're going to learn more about the
inspiration and process behind the
character customizer
so in three point one you'll be able to
customize your character this is the
first time we've really been able to
introduce this to the players so we're
super excited about bringing this to you
guys you'll be able to select from your
head shape your eye color your hair
style your hair color and your skin tone
it is a relatively simple character
customizer in it again is kind of just
the first iteration of that but we
wanted to get that in front of you guys
first least because we've heard
obviously and we've been talking about
this for a long time wanted to get
customization get it out for the players
let you guys play around with it second
off is we have to the experience and go
through a lot of tech setup issues so
how are we gonna deal with items how
we're gonna deal with persistency
because every time you customize your
character we want everybody else to be
able to see that in the same way we want
to see you want to see your friends just
like you've customized yourself you want
to see what they've made it - there's a
lot of things that came in with
persistency a lot of teams things that
came in with how we're creating and
generating and choosing our items but
this is the first time that players will
be able to customize anything our
characters are made up of items the same
way everything else in the game is made
up of items so those categories of your
head and your hair are items that have
that geometry that load in together and
make up the cobble together character
that you end up with they're a couple of
unique items in that set the color in
particular is not actually geometry the
way that we handle the color switching
on skin tone and hair color is that when
it attaches to an item it'll actually
alter the properties of the the thing
it's attached to swap out the materials
that it's using right and then like the
the character team though working on
each of the elements were able to
provide us with each of those parts that
we could piece together to form your
custom character but the the
modifications that case was talking
about we're a special case right yeah we
had to make those so that they could
inject tags back into the the parent
entity we needed to be able to control
which items would be allowed to go with
which other items and for this the first
round of assets that we've actually
created we've been able to accommodate
all combinations but the system we built
in such a way that if we made a
particular hairstyle that was going to
have some special color or wouldn't
support certain colors because we didn't
have the art ready or maybe if it didn't
fit the design of what was desired for
that art they would correctly populate
the list of here the the hair colors
that you can pick here are the styles
that you can pick so we had it so that
it would correctly identify which things
you had access to so that we wouldn't
have asset issues where they tried to
combine things that would conflict and
so you did that via the the tag system
right yeah we had tags to define which
things were allowed we had tags to
define which things were ready to be in
the customizer at all and we had tags to
alter things about which color would be
used and then also we had issues where
we hadn't foreseen skin tone was applied
to the head was a friendly new system
and slightly different than what the
character team was using in the past in
that we found that the body tone that
was made to match the skin tone they
applied to the head which again wasn't a
thing in the past was something that we
had to implement specifically for the
character customizing about that well
because there are all separate items
they actually had to be addressed
separately as well so when you put a
skin tone on your character it's
attaching to the head and also injecting
that tag into the body so it has to be
able to traverse the whole skeleton the
whole hierarchy right and then by
applying that that tag to each of the
body parts that were associated with the
one they specifically modified it
automatically allowed that particular
tone to be applied to that tag that now
cascaded down from that that
hierarchical implementation it made the
data propagate correctly right and
because of that it's great because it
now allows once we implement a system it
allows the character team themselves to
create new assets and it's this is all
data driven so they make a new head and
new skin tone because they applied their
their tags in the system that we've
implemented for them once they create
yeah that acid and put it into the build
it automatically populates into the menu
as a selectable item and all of the
different cascading properties that are
applied just like any other head can can
happen simply by creating the asset and
then once they get it set up we'll take
over the implementation and I'll work
with the art team to actually get their
work in the game properly it's
complicated and it never really works
the way it's expected so the the artist
will sometimes have something else in
mind
or there there isn't always like a
perfect communication going on there
which is pretty normal just because
things always develop in their own way
and also just the way the engine will
handle the art it doesn't always go as
expected so the artist will make you
know their piece and it'll it'll look
perfect when when they make it but then
the engine may interpret in a different
way so then a tech artists job can be
getting what they actually made into the
engine in the way they desired it to
this can go wrong with just texture maps
normals geometry all kinds of things
really one of the things for the
character creator is that you have to
have a UI it's a pretty obvious thing
but everything everything that interacts
together is going to have tack-on
effects and so for instance we when you
made the the scene of the of where
you're seeing your character standing
and we initially had problems because
our whole front end is unified so when
you move from screen to screen you're in
the same level and so we had issues
where the geometry would start it would
still be visible from other screens
you'd go to arena commander and you
wouldn't be able to see your ship and
because it was behind a wall now so we
had to had a couple of surprises there
and similarly for how we're handling the
actual layout of the UI to switch from
just the generic list of items to having
the preview icons
having the preview
of the character happening on rollover
so that you'd be able to have really
really fast and responsive previewing of
the thing that you're going to choose
obviously we want to make that
experience of being able to see what
you're going to do to your character has
Pleasant and as appealing as possible
and because of this even though calyx is
a designer he was tasked to learn
ActionScript specifically for our the
the flash side of things to make the
menus work so he quickly learned that
and was actually the the primary
implementer of all of the front-end that
you see in the character customizer
itself so getting all those the grids to
come in correctly and and to keep track
of which items are which and there's a
lot of moving parts and even something
as simple as the character creator so
for this first iteration we wanted to
make sure that it was reliable and
stable and that it performed as expected
and having the previews they're having
the icons although we're having an issue
now where the icons are suddenly not
working in clients only and so looking
into that now trying to find out what's
happening incorrectly about maybe it's a
pathing issue or inclusions but yeah
there's always there are very
interesting problems with the character
creator the character creator could be
described as basically the players
version of our loadout
editor our load of editor is the way
we've assembled all the characters in
the game so far so basically like all of
our you know a list actors - just our
random NPC we do those in this editor
called balota editor which works within
our lumberyard space engine and
essentially it's just picking from a
massive lists of assets that we have
that we've gotten from character art
implemented into the game and there's
some billing together as a whole
character and and really just the
character crater that we've created now
for the player is just a much much nicer
version of that of course the
implementation to simplify it that way
is where things can go wrong that's why
this process was a little more
complicated because of course you want
to make it you know more user friendly
whereas on the developer side things can
become very own user friendly just in
the process of you know moving forward
we have a texture we put on this skin
like you put a face on this care
model and then for the player to do it
it seems like it'd be the same thing but
there's a lot that changes in terms of
markup and limitations because on our
end we can do a lot wrong whereas for
the player you don't want them to be
able to do anything wrong
you want to remove any chance of error
for the player and that's essentially
what like the the peak of the character
customizer is give them as much
flexibility as possible in the most
stable environment just like a level or
any type of logical system calyx had to
set up the menu itself so that it had a
logic tree so selecting this particular
category but up the sub menu that showed
that populated that that item list by
the number of items that were exposed to
the the the character customizer itself
then laid out all the icons in a in a
nice easy format hovering over them did
preview those honest for you so that you
didn't have to commit to them before you
did that once you hit accept then all
the other windows disappear and then the
confirmation when it comes up and give
me a clear view of your character but
you can see making those all those
buttons do the correct things so that by
saving or cancelling it goes to the
right place and saves out that
particular loadout for your character
was all the hooks were that were done
through the front end of the menu once
we had the character up and ready to
preview it felt kind of lifeless just
sort of standing there and just he was
hopping things out was very clinical and
weird so we brought in the animations to
try to give it some life and we found
quickly that a lot of our animations
were not we're not suited for standing
around and being stared at for extremely
long periods of time so you've started
getting a lot of repetition a lot of
patterns that you wouldn't normally
notice just wandering around with our
animations as it would was very a pair
of parent when it's right on the screen
in front of you for five minutes so we
started putting in the fidgets that we
have to be able to randomly choose
between different expressions and just
just the idle state
so we actually had to make some new tech
for that because the way that we handle
manikin relies on code to to trigger
everything because we never want you to
be beholden to animation we always want
to be how to make sure that the game is
in charge of what you're doing right and
that's the way to make the the character
feel a little bit more alive and we want
to again represent what you'd see in the
game as someone that's you know moving
around and doing all your actions what's
in the game so once once we had that we
had to make manikin able to actually
loop which animation it would choose
because it's capable of choosing the the
from a variety of fidgets but all the
loop tech that we had would lock you
into a single animation and so you would
keep doing the same thing which just
puts it back at the same problem so we
had to make a modification to that
animation code in order to be able to
make it choose the mannequin fragment
each time it completes and so we have a
new kind of loop that's sort of a metal
loop since we're talking about technical
aspects of the character customizer um
some of the basis of the character
customizer came from the same method in
which you customize the likea armor on
your and your your clothing in the game
which is through the PMA and so we
definitely needed to disconnect some of
those ties that were directly accessing
those bits of code specifically because
the character customizer required a
little bit of different methodology as
far as handling the different bits of
the items that actually made up your
character and so that was one of the
first tasks that we embarked on was to
see which which parts of the PMA that we
needed to keep and see which ones we
needed to have a different path for to
make the character customizer work fully
that was a bit of a growing pain
situation but as we started integrating
and finding bugs in the system we were
quickly able to identify what needed to
be changed and what was perfectly good
even something as simple as the order
that items appear in the list the
character customizer has just has
different goals than the personal
manager does so when you're when you're
dealing with your inventory you
you're not expecting to see your hair
colors all on the roads move from a
lighter color to a darker color and
makes sense as opposed to kind of a
random order or based on just their name
even something as simple as just getting
the sequence of these items into a
familiar logical order would often run
into problems with the way that we
needed to handle it elsewhere in the
game using the same item methodology so
we had to add in a different like
sorting method all right so some of the
assumptions we made about the PMA
thinking that it had the infrastructure
in order to allow us to identify what
the order was found that that was in the
case so we as we wanted to present the
information or at least your choices in
a in a nice format we found that that's
something that we needed to inject into
the character customizer itself once you
hit accept and then go into the game you
are able to return to the main screen
and then we customize a character if you
find that you don't you don't
particularly like you choices you made
or just want to experiment with the
other possibilities believe in the
future we're going to make that a
function in which you need to go to say
a specialist shop or some kind of
cosmetic surgeon area yeah there would
actually be body modification vendors
that you would seek out in the universe
and maybe some would have a different
selection of the kinds of things that
you can change about your character so
it would be more of an immersive thing
that if you see somebody with particular
features that means they've done in
particular things to get that right so
there'll be physical locations in which
you actually go to and make these make
these changes occur rather than just
being a menu at the beginning of the
game so for the character team the
biggest challenge is for the character
customizer were getting all the assets
ready so making sure that the skin tones
were blending between the bodies and the
heads those are technically separate
assets so it's a little bit of work to
make sure that they all line up well
additionally just kind of creating
different assets we've shown some of
this before
or about different hairstyles different
hair colors different eye colors and
just making sure that they all really
work together the biggest challenge was
actually the hair so whenever you start
including hair especially in our game
where you're able to wear lots of
different outfits it creates problems
for example some bugs that we
experienced were let's say I'm put on a
hairstyle and it's a longer hairstyle so
maybe it's the mohawk or something like
that as soon as you put on a helmet now
that Mohawk sticks through the helmet
and that's a problem so we have to set
up a bunch of tags which basically say
am i wearing a helmet yes if so do
something so for longer hairstyles when
you're inside of a helmet it will
automatically swap your hair to be a
Snoopy cap or like a skull cap that you
wear if your hair's short enough to go
underneath the helmet and not go through
the glass you actually keep your hair
other things were hats so let's say you
customize your hairstyle there's nine
hairstyles available in the customizer
and you put on any hat now before
whenever you would put this on the hair
would just go away and you'd be bald
which is a problem so we had to create
hat hair for every hairstyle we have to
create a custom variant or a custom mesh
that fits all the hats so that when you
put on the Hat it coals out or deletes
the geometry above the hat line and just
the things that are below the Hat line
so your character is involved so there's
a lot of make just making sure that
whatever is being chosen is also being
maintained and kept up and keeps that
kind of visual look thanks everyone
I can't wait to see how this feature
grows over time you can already pull
together some pretty wild looks and the
options are only going to allow for more
and more diversity that's right and with
more armor and clothing choices being
added with each release which we saw
earlier in the update you'll also be
able to personalize your characters gear
and wardrobe Britta's and con is coming
up this weekend in Manchester and
tickets to that are still available at
Britton cons at UK and we'll have
details about our very own citizencon
event in an upcoming commlink so stay
tuned for that
remember those large scale replicas of
starters and props and furniture we saw
it last year at citizencon I do and you
can purchase some officially licensed
star citizen items designed by the same
team that produces very proper
check the video description for a link
and more details you're definitely gonna
want to check them out you can also
check out our latest concept ship the
innovative origin 100 series on the RSI
website now there's lots of information
about the ships themselves and their
cutting edge fuel system in the comlinks
section and for those of you who still
haven't had a chance to get into the
game we have discounted starter packages
available in the pledge store for a
limited time that's all for this week
remember to check out tomorrow's episode
of reverse the verse live at 9:00 a.m.
PDT tomorrow on Twitch where Jared chats
with Lee Bane iord and Phillip piers
Smallwood from the audio team it should
be quite the listen and make sure to
check out the new episode of calling all
devs that aired earlier this week for
answers to backer questions about
persistence nub craft and more a big
thanks to our subscribers for sponsoring
all of our shows and of course thank you
to all of our backers your support lets
us continue to make star citizen and
squadron 42 the best they can be until
next week we will see you around the
verse
[Music]
[Music]
thanks for watching for the latest and
greatest in star citizen squadron 42 you
can subscribe to our Channel or you can
check out some of the other shows and
you can also head to our website at
www.uvu.edu/library

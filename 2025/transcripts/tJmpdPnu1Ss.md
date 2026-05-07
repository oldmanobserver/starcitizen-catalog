# Star Citizen Live: Q&A - Earning in the 'verse

**Video:** https://www.youtube.com/watch?v=tJmpdPnu1Ss
**Date:** 2025-07-03
**Duration:** 1:03:08

## Transcript

Hi everybody. Welcome. I'm Who am I? I'm
Jared and I'm the host of Star Citizen
Live. Uh a show that we used to do every
week and have only done like four times
this year because uh a bunch of the
people who I work with uh changed the
very nature of our project
for the better. It's been a good year.
Uh if you've never seen Star Citizen
Live before and and and
so lucky if you haven't, um it's where
we take about an hour out of the end of
our week and I invite CI developers onto
the show and we talk about various work
things. Um usually, uh they come back,
sometimes they don't. Sometimes it's
like, Jared, what the heck did you get
me into? And I'm like, well, you know,
it's not easy. But uh on today's show,
it's going to be one of those it's going
to be one of those shows where we get
some we get we get deep and uh nope,
that's not where I wanted to go with
that. We're g we're gonna we're going to
go we're going to go heavy into one of
the most uh uh attractive and and
exciting topics of all. Uh economy,
loot, mission rewards, inventory
systems.
No, it's going to be a good one. So
joining us on the show this week, we
have members from several different CI
teams uh who all come together to work
on these various uh uh systems. So we'll
go around and introduce them. This is
one of those Zoom calls. So everybody's
at their desk and because we didn't have
enough chairs. So we're going to start
with who? Let's go to Zoom and see who's
on the screen. Who we start with? Jacob.
Congratulations. You won Zoom lottery.
Who are you and what do you do? Uh yeah.
Hi. Uh I'm Jacob. I'm a senior gameplay
programmer and I'm here uh this time
because I have been programming a lot of
these stuff for loot and harvestables uh
which is what all of these wonderful
designers uh will be talking about um
for the rest of the show. Yeah. Um
randomize here. Uh Declan, who are you
and what do you do for Star Citizen?
Hello. Hello. Uh yeah, my name is Deck,
system designer. uh work on crafting,
which we'll talk a little bit about, and
uh inventory reworks, which very
exciting. Uh immediately next to you,
Luke. Who are you and what do you do?
Hi, I'm Luke and I am here to talk to
you about loot. Loot, the musical
instrument, you mean? Yeah, I'm going to
play the loot. Okay. Wouldn't it be the
weirdest thing we've ever done on SEO?
Uh Andre, who are you and what do you do
for Star Citizen? Hi. Hi, I'm Andre. and
the economy designer. And what does an
economy designer do? We take care of
almost everything uh that has to do with
the shops, value of items, rewards. Um
yeah, so almost everything. And you're
the reason everybody's unhappy.
Yes.
And across from you, Nick. Who are you
and what do you do?
I am Nick. I'm also an economy designer
and also involved in everything but not
the reason that any of you are unhappy.
Okay. So, if we have Andre, why do we
need you?
We have four economy people. We have
three economy designers and uh an
incredible technical um person who I'm
not even sure what his job title is
because he knows so much stuff. So,
Andre is a lead and uh oversees uh
everything. I mostly focus on missions
and rewards and item prices and uh
events and working with the mission team
and the world famous Elliot Mby. And
Connor is um commodities and trade
routes and new systems and all the free
trading and the and all that kind of
stuff. He's the pretty face of economy.
Connor is. Yeah, Connor is. No, you come
on. Come on. Um and you mentioned Elliot
Maltby. It's a shame that he couldn't be
here on the show with us this week.
Yeah, it is. It's a real shame. But the
terrible accident meant that uh
complet accident completely his own
fault and brought upon himself.
Too right. Let me sleep. No, I've got
people messing with my desk and I'm
anal.
Hi. Should I introduce myself?
Um I'm Elliot Malti, uh the lead mission
designer. Um, and I spend all my time on
Twitch chat. Yeah, spend all my time on
Twitch chat or making you all shoot each
other. According to Reddit, I saw I saw
a post that said you were one of the
masterminds of the entire Persistent
Universe the other day because you
because you listen to Imagine Dragons.
Yeah, like I was just playing schedule
one chilling.
All right, so on today's show, we're
going to go through a couple different
topics. This is going to be a bit of a
different show than normal. Uh we are
going to have a section at the end for
uh for questions from our community. But
today I want to go through basically the
four key pillars of how items and stuff
are acquired in the verse. Uh and uh to
start we're going to start with uh
economy or money things you can buy with
money. So Andre and Nick obviously as
the economy designers we're going to
start with you here. How do you decide
what goes into a shop and where?
Well, as I mentioned, shops are part of
uh our uh our job. Uh so, first of all,
we want to make sure that everything in
the uh every uh game loop, every career
in the game is accessible. So, uh every
activity I want it to be accessible. So,
if you want to trade, for example,
you're always going to find uh FPS
trading tool or you're going to find uh
uh sorry, I'm a bit nervous, obviously.
Um you're always going to find um if you
want to trade, you're always going to
find a uh a tractor beam. You're going
to find a a ship that has a cargo grid.
If you want to mine, you're going to
find an attachment for that uh multi
tool. You're going to find a a
prospector. Uh more than that uh we try
to keep everything tied to narrative. So
you're going to find burritos in Stanton
and you're going to find uh parat on a
stick in Pyro. And sometimes we just
have fun with it. For example, Connor
suggested that every farm in Pyro should
have shotguns. He's from Texas, by the
way.
Okay. And I think I I think I sent a a
thread to um uh Nick the other day about
how um because Hursten was was was so
salvage focused and everything, maybe
Hurston should have salvage items in
their stores and whatnot. It's there's a
lot of thought that goes into
positioning what where something goes,
not just how much it it costs. Yeah,
exactly. Yeah. And I mean that's
actually the kind of thing that their
narrative team they could have they
could they would have a lot to talk
about in this one in this uh as well.
The narrative team has all of the
history of of the of of the verse to
date and also all the stuff coming. And
so they have a pretty good idea of um
the context of each location. So, uh,
when it comes to what goes in what shops
where, it's about bringing life to, um,
the stories that we already have by
letting players, like Andre said, access
to the game loops that are appropriate
in each of those contexts, but without
stopping people from playing things. So,
enabling game loops that fit the
narrative. And you uh Andre, you said
making things accessible from the start,
but at some point
you go beyond the start. You're you're
you're in Midgame, you get to end game
stuff. Is everything supposed to be
available in the store? What where where
do you draw the line for that's not
something that should be available in
the store? That's something that that
should go to one of the other ways that
you attain things. It's very hard to say
that there's a a clear line. This is
where a bit of the art comes in. And uh
at some point you say, "Okay, this is an
exclusive item or this is something that
you should only get into the end game or
maybe uh a lot of things, not not even a
maybe that's going to be a certainty. A
lot of things you're not going to be
able to just buy from from a shop
because I don't want to make you see the
end all of the of the game. uh you see
something that happens to you, helps
helps you play the game, helps you fuel
your ship or uh repair your ship, but
should not be the way that you get the
most important important items in the
game. And it makes sense from a from a
immersion standpoint that you wouldn't
be able to go to a Herz rena car and
pick up a Polaris or or an Idris. You
know, you can't you can't you can't go
to a rental shop and buy a battleship
today. Now, again, there are always
exceptions and stuff like that. is going
to say the 890 jumps available here and
whatnot. But it's obviously with the
game with the game system, you try you
make exceptions here and there in order
to make things available to players at
certain parts of your you know uh
development. But on the whole it's we
don't want to put everything in one
place because we want we have to
encourage players in traditional game
design to go throughout the universe and
and try different things in order to to
attain their stuff. Um how do you price
things? Is there is there some kind of
matrix or are you just also using art?
Uh we are always using art but there's a
bit of technique that we apply of this
but actually many many techniques. Of
course we first use an algorithmical
approach otherwise would be impossible
to put a a price or a value on all the
thousands and thousands of items we have
in the game. And again those items in
different shops at different uh uh price
points. Once we have that uh uh value
from from the algorithm then we start to
uh uh apply uh our own intuition. We
apply uh our expertise. We apply the the
experience we have by playing the game
and we do let's call it a sanity check
uh if uh if we think that the algorithm
is is giving us the right value or not
and then we adjust the price or we
adjust the algorithm depending on the on
on the situation. Nick use a lot of this
algorithm actually more than than myself
because with FPS you have a lot of
different uh items you have guns and you
have armors and maybe he can tell us a
bit about how he used the algorithm and
so it's like is it's like you say the
the number of items and the number of
shops and the number of locations and
then just even thinking about the future
of the game when that's obviously going
to be even broader. You can't price
everything individually and it wouldn't
be sensible to price everything
individually and in fact everything is
connected. All the prices of everything
are connected. I don't think that's
going to come to a as a surprise to
anyone. But I mean if you think of
something like ammo for example, you
take assault rifle ammo. Well, that's
going to be priced relative to the
stopping power or possibly the the
desiraability of the assault rifle
itself which has its own price. And then
that's related to say the price of
pistols or the price of rail guns. The
price of rail guns is an interesting
one. uh the decision to make rail guns
that you so you and and missile
launchers so you can't buy them in shops
is a deliberate um decision to encourage
not just NPC shop uh trading but it's
really really important to us to have a
vibrant player trading and we don't
currently have the full systems to
support that but you guys are really
resourceful and you're going to make it
happen and we want to encourage that. So
yeah, rail guns are not available in
shops, but they're absolutely available
around the verse and they have a value
and everyone knows that value. Then you
got me and Nickel talk about we'll look
at the black market. Um I the the org
that I'm in um we do gun running and we
sell um and uh not that I've infiltrated
but I we use those those data points
that like we do in our or and how we do
gun running to also influence because
obviously we put our worth on it based
on the effort that we put up front for
you to get it but then you put your own
worth on it for you guys to get profit
and we take that sort of stuff into
account as well. It's super important. I
mean, if you take something like the
anti-Amama set for example, like that
has a value. It fits in with the
algorithm. It makes sense. But the
anti-mama set has a completely separate
value to the people in the game because
of its rarity, because of its
availability in content, and and that's
why it's all related to it. So certain
certain items are only available through
content. Certain items are only
available um there's there's a whole
content waterfall of items coming from
the the dollar store all the way through
into the game. and there's an
appropriate level of when those things
are introduced to various parts of the
content in the game and etc etc um and
it's all related and then on the other
side of that is mission rewards and
sandbox gameplay and this is where EVR
comes in so that we can balance the risk
and the reward of those kinds of things
and essentially both of those come
together in the middle and like I say in
the future we want you to have um a
better view into how all of these things
are related to each other that's future
work with UI and backend data
So you can make meaningful choices about
how you want to spend your money on the
particular resources or crafting or
whatever it is in the future. Even
though it's quite simplistic right now,
that's not where we want it to end.
Okay. And we need the player economy.
Um, do you ever intentionally price
something high or or weird to to make it
rare in the verse? Yeah, we did the uh
xenofret helmet, the uh commander
xenofret helmet. But we we rocketed that
up and I'm pretty sure I'm sure we put
like 69420 in it as well because we
thought it'd be funny. Absolutely. Yeah,
sure. There are perks of working at C.
If you come to me and tell me I want
that to go be go a bit up or down, you
know what? I'm going to be your friend.
Um, folks paying attention right now
know that there's a there there's a
there's an exploit. I think I think it's
let you to duplicate things like
Janelite and sell and sell it for a
whole bunch of stuff. Folks are working
on that. We're not going to talk about
the the fix for that and the and the
adjustments for that right now. That's
not not being done by any of us. But I
did want to ask I mean the timing on
this. We've got the we've had the show
scheduled for about a month and a half
and then this happens.
How frustrating how frustrating is it to
you personally to when things like this
happen? Well, you can only imagine how
frustrated it is to have your work
affected by a bug that nobody could
foresee. Uh and uh you're right, we are
very grateful to our many colleagues
that are working uh to fix those uh
those bugs. Okay. Uh and last question
before we move into uh loot and stuff.
Um
sorry I took this one from from Reddit
here. Does Star Citizen even have an
economy?
Wow, that's that's a multi-layered
uh question. It's such a short and
simple question but yeah there are many
many there's not the comprehensive
economy you would like to uh have in the
in the future but uh I think we are step
by step getting there um I I can give
you the big picture how we laid the
foundation for so for example we started
in uh 2024 by by doing a full balance of
as many uh systems and items as uh uh as
you could so probably you saw a
different prices for ships for FPS
items, for armors, for components, for
fuel, for the rewards for the missions
change commodities, trade routes and
many many more that I cannot even uh
remember from the top of my head. Uh
this year we are focusing on big data,
we are focusing on uh uh tools, we are
focusing on the backend work that needs
to be done and those things that needs
to be built uh before we get to that.
And now here insert your adjective uh uh
dynamic, live, responsive, all those
things uh that we want to put into the
economy, the economy that we all dream
to have and the economy that I joined
the the company to to build. uh but we
need to do that background work first
and you're not going to see the those
results in the game for uh for some time
only after that we can focus on UI and
system that are going to system that is
going to expose all that work to to the
player. So until then we are we are
doing stuff like uh you you could see
still this year but uh uh uh trade
routes being adjusted. Uh you're going
to see commodities changing price
according to narrative and according to
the events that uh we put in the game.
Um we're going to offer more ways for
you to extract value from all the
content that we introduce to the game.
So yes, you're going to always see
changes. we have an economy but step by
step we are going to go to that economy
that we all dream to have in the future.
I hope that answers the question. Yeah.
No, I I I I I appreciate not just that
you answer the question, but that you
allowed me to ask such a pointed
question at um and yes, I think you
agreed to yourself very well. Thank you
so much for your answer. Um let's move
into things you find out in the
universe. Luke, um talking loot here,
what are the rules? How do we decide
what goes into loot and where?
Okay. Um well, I think anyone anyone who
plays games enough kind of knows what to
expect from loot and we're not going to
um reinvent the wheel there. Uh but for
a long time, Loot was it was owned by
individual content designers. Um so it
got a little bit inconsistent.
Um, and in an initiative at the start of
this year, um, I've taken it over as a
systems designer to try and get things
back to consistent again. Um, and
hopefully you'll notice that in, um, it
was a line. Was it mine to align and and
the most recent Stormbreaker location
line to mine? How could you forget?
Well, we called it Orbeageddon, right?
Like internal name. You're not supposed
to share internal names for this stuff.
We have some really terrible internal
names for things. Yep. Hex penetrator
like less said about that for the
better. Um okay. So um basically we just
uh take a few things like into account
um category of the item uh rarity and
size um because they all have to fit in
a box. Um so we have four main
categories which are weapons and ammo,
armor, medical and then miscellaneous.
and that those ones are um distinguished
visually by different boxes. Um
miscellaneous can then be broken down
into more specifics like food um mining
repair um so that if the level designers
have like a cafeteria or a garage, they
can place things that make more sense in
there. Um and then we have five
rarities. um common, uncommon,
uh rare, epic, and legendary. Um you'll
find the first four of those in loot
boxes. Uh we have three different
rarities of loot boxes. Common,
uncommon, rare. Um epic, we don't have a
box for that, but it it appears in all
those boxes in a very small amount. Um
with you, you know, more likelihood of
getting EP um rare if you are looking at
a rare box. We don't have those
distinguished visually yet, but that is
the plan. We will be getting new models
for those. So, you'll be able to just
glance at a box and see that, oh, that's
a rare box. It'll be a lot shinier than
the common one, I assume. Um, and
then we also have um size size of the
item. Uh we have three different sizes
of boxes and it obviously it makes sense
that you can't find a rail gun in a
small weapons box. Um, and it tends to
be that as things get more powerful,
they get larger. Um, so, you know, you
won't get um you'll only get the full
suit armors inside um the large largest
armor box. So, it's kind of turned out
that as far as gameplay goes, a large,
you know, a large box, the size of a box
is actually, I think, more important
than the rarity of a box because
what what is rare? like it's kind of
like a tint on an item or something like
that. Um, and then we have like
legendary items and those don't appear
in loot boxes. Those are saved for the
um location. So in all in a line to mine
or whatever it's called, um we had the
uh camo rifle uh vault rifle. Don't
shake your head. Um, and we had the camo
uh hunter outfit, hunter armor. And then
in Sageddon, we had um Stormbreaker.
We had the um bright yellow radiation
suits. And uh like those will never be
found anywhere else. They'll be found in
those locations. Whereas all the other
stuff that's kind of like it's kind of
unique to those locations, it's only
unique right now. As as they get older,
they'll kind of spill out into other
locations as well.
Um, and how we decide where they go. Um,
so those individual boxes or the loot,
um, we draw a map of the location and
then we, um, decide how difficult it is
to get into all those rooms and then
assign them a loot value and that
determines whether they can have like
uncommon or common, um, loot inside
them. Um, and then maybe good to
mention, we are also making like an
active effort to go back through some of
our old locations and and update them
sort of to to snuff. Obviously there's
there's no date on when that is or when
that's going to finish, but it's
something we are trying to do to make
sure we we we be consistent. Yeah. Yeah.
Um like and that will be done using um
the new kind of extension to the system
that Jacob's currently working on, which
makes it easier for us just generally um
to set up loot, to place loot, but um
also to define locations. So you'll
start seeing um like differences between
Stanton and Pyro through loot.
Yeah. So um a lot of what Luke has said
is uh things that we're already doing.
We're trying to make each location have
its own themed loot in some way. But it
currently takes quite a lot of manual
intervention to make that happen. Uh a
lot of you know inefficiencies in the
workflow. Uh so I've been working on
some uh extensions to the system to
improve our tools around that and make
it easier for designers to set up things
in such a way that it can scale to, you
know, all of our different locations,
all our different systems and grow for
the future as well. Yeah. When I first
started on this, I remember you saying
this system was made to place rocks and
trees.
Yeah. One one system was made to place
place rocks and trees. Yeah. And now
it's it's grown and it's even placing
Atlas geo suits, I think, in Didn't say
I couldn't, Jacob. If you don't tell me
I can't do something, I'm going to do
it. All right. Yeah. Yeah. God, that
that might be the truest words ever
spoken in.
I'm a designer. My my my my goal is to
get stuff done by any means necessarily.
And if it means I'm using something
called a harvestable to place down an
atlas, I'm going to godamn do it. Yeah.
Yeah. No, I understand that. I respect
that. But then uh I still Yeah. Do
so.
I I got what I do is uh I will try to
adapt to the to the changing needs uh
that the designers have as we're making
new content. uh and you know what might
not have been supported at one
particular time uh will be supported
later. So uh yeah we we keep growing our
technology as the needs of our content
and gameplay grow as well. Yeah, that's
actually where I want to take this. I
want to ask you now. So obviously we
we're now using the we we now taken the
harvestable system and adapted it to
better place loot and stuff. Um
there's there are technical limitations
that we just got done talking about.
Luke, at the beginning of this, you
mentioned that there was an
organizational limitation before this
year where all the individual content
designers were responsible for doing
this and there wasn't any kind of global
overarching theme or process to this
with the growing technical aspects of
the harvestable system or whatever.
we're going to end up renaming it now
that we when we start using it for other
things and with this new organizational
change Luke for you know trying to build
a a new kind of philosophy over
everything u with the efforts Elliot
made I mentioned to go back and revisit
old places folks in chat are mentioning
certain pyro locations that were built
with the old mentality and stuff and
going back and revisiting those like
this what is the what is the future of
this look like we're not giving any
dates or anything? Where do we go from
here? Does it just keep doing what we're
doing or are there more things we want
to push for? Uh, I can say some very far
future stuff, but uh, you know, we we
hope to have um consistently themed loot
throughout the whole location. And that
would encompass the stuff that the
people you find there are wearing, uh
what they'll be having in their
backpacks or or any other clothing items
they have, the stuff that you'll find
around the location. Uh and uh it'll end
up being themed towards what that
location is is for or related to. So if
you find a mining outpost, there'll be
more mining related stuff. It's it's all
about just being able to fine-tune the
experience to be what you would expect
to find there in the verse. Um, and we
have various initiatives on the go that
are building us piece by piece towards
that. And because everybody gets a a
question that I'm going to that it's
going to be a little harder to answer.
You know, Andre, still sorry for the
economy one. I'm not really. You did
great. Um, it's all right. One of the
things that separates us from other MMOs
is that one of one of the many things
anyway is we physicalize everything. All
of this loot has to be physicalized. You
can't just we don't have a system where
you you can just throw something into
somebody's bag and it's there and they
wear it and it's there. It's all got to
take up space. It's all got to it's all
got to be hand uh you know physically
manipulatable and stuff. Does this I'm
pretty sure I know the answer but I'm
going to ask. Does this make your job
easier or harder? [ __ ] ton.
Very nice. That's your second bomb. This
uh you know this cool. You got to be
careful there. I'm so
h but yes it makes it a lot harder for
sure. Um you know in there's like
different layers to the physicalization
as well. So you just saying it takes up
space. That means even within an
inventory, we are measuring the the
dimensions of the item and uh the volume
that it will take up. Uh so that you
can't fit a super long thing in a really
small box even if its volume would
technically fit. Um so that that gives
uh you know more work for me to do in
terms of the maths um you know
internally. But then there's more uh
level design and you know system design
kind of perspectives on this as well. Um
which uh Luke might be able to say more
about of how we choose between when
we're going to present the item to you
physically in the world or when we're
going to present you with a loot box
that you have to look inside.
Yeah, you asked does it make it harder?
Um I think it makes it harder for
everyone, even the players. Um but
especially the devs um because we have
been physicalizing um certain items.
It's always the items that are
particularly rare or useful like if we
want to draw your attention to this um
we'll put it in the world. Uh we do that
in like an eye-catching way within the
level. So um a line of mind we place for
vault weapons and gun racks. Recently
those got lit um consistently to really
show off what's inside there. Um, and
there was the again the the radiation
suit is now available on a mannequin.
Um, and we'll be using that quite often
I think from now on and going back
through and and placing it. Um, but the
reasons the other reasons other than
technical reasons we don't um want
physicalized loot everywhere is because
loot boxes solve all the downsides of
that. Um, so you can group items
together and e they're in an easily
recognizable package, you know, whereas
um, you know, a big red box, whatever, a
physicalized items, you can easily
mistake those for static props on tables
and and maybe miss them. Um, it
massively speeds up the jobs of level
designers and artists to kind of place
these things around. You imagine placing
individual pieces all over tables,
making sure you got room for them. Um,
and then it makes my job easier because
if anything changes in loot, we don't
have to go back through every level and
delete individual bits and pieces. I
just change what's going to spawn in the
box that's there. Um, and then finally,
like it just hides respawning, you know,
the respawning of bits and pieces.
Nothing pops in on tables. It just we
refresh inside the box. It's a difficult
thing to balance because you're going to
have like as as Luke says, it does make
our life harder and it can make
sometimes as Luke said the players life
harder, but it can also make the
experience better. Like when we're
designing things like Stormbreaker and a
line of mine, you know, you think back
to playing games when when I was a kid,
a loot room should feel like a loot
room, right? Instead of me just seeing a
bunch of red boxes and knowing it's a
chance of rare loot, I want to see like
the gold stacked up on a table. I want
to walk in and I want to see a vault
shotgun or a vault sniper rifle in in a
case in front of me because it gives two
things. It gives affordance to players
cuz when they look through the window,
they see the reward that they want and
they know the doors locked and aside
from you all clipping through
environments. The normal flow would be
then you have to go and figure out how
to get through that door without
breaking physics usually. Um so is it's
kind of a sort of a tossup between the
two. So what we try to do is we try to
choose what we think could be something
that we'd want the player to latch on to
visually and think I want to achieve
that. I want to get that. And that's
why, you know, in some places we have
the vault weaponry visible so people can
sort of see it and get into it. And we
have a few armor mannequins that are the
same. I I can see it. I want it. How do
I get to it? And physicalizing
physicalizing affords us the opportunity
to make a more immersive universe. It's
going to going to become a big part of
when uh player housing and stuff comes
online and being able to decorate your
homes and your habs and your hangers and
stuff with the with the things that
you've collected and stuff like this.
It's it's it is it makes the job harder,
but the rewards down the line are still
everything that we're shooting for and
stuff. So, it's like anything else. Like
a lot of things else with Star Citizen.
We don't we didn't take the easy path.
We take the harder path. But when it
works and we and when we can do it
right, it is much more rewarding. Um
let's move to rewards for specific
efforts. Uh uh and basically mission
rewards and stuff. Uh Elliot, uh the
first question actually comes from
somebody who just got banned in chat. Uh
Mulix the real asked, Elliot seems
incredibly immature. Is he right to be a
lead designer for important missions? He
doesn't even have situational awareness
right now. So, I guess that wasn't a
question. No, I but I can answer it
anyway. Are we sure that was from chat,
not just from you? Genuinely, it could
have been from anyone in this office.
Um, my my my personal philosophy is
games are meant to be fun. You got to
have fun to make fun. So, I might seem a
little childish, but that's because I'm
having fun at what I do, and it just
enables me to do a better job.
God help us if making video games for
people's enjoyment should not also be
enjoyable to do. God help us. Um to the
real questions here. This year has seen
a major explosion in mission rewards.
Was this a technical limitation that we
overcame, a philosophy change in
development, or was something else at
play?
Um
there was a few things that kind of came
into this. Um
we we firstly we needed freight
elevators. That was the big thing cuz
it's either we do a bunch of temporary
throwaway work to get your rewards or we
wait and we do it properly the first
time. And the big thing for this was we
needed the freight elevator system. And
then we got the freight elevator system.
And the next big thing was server
meshing. Uh so it was all about the
mission refactor. Um but once we got the
mission refactor done, it finally
enabled us to take the time to actually
make these mission rewards. So it was
kind of it was kind of like a it was a
technical limitation. we was waiting. We
always wanted to do mission rewards. You
know, way back when uh the mission
feature team was still around, it was
always something we talked about is we
want to try to get away from just giving
people UEC because UEC can just help you
buy things, but you know, you you want
to kind of see some other stuff. You
want to you want to have a gun. So, it
was sort of like a pushing forward and
an initiative to get that. but also
because we knew we was going to do a
year of content. What we wanted to try
and do as well was have a way of uh
incentivizing that content, not just in
the aspect of, hey, it's cool, I want to
play it, but hey, it's cool and while
I'm playing it, I can gather things for
Wiccolo that later benefit me or I'm
doing it, I found it, I've picked it up,
and then later on I found that Wiccolo
wants it. Um, so that that's where
mission rewards come from. It's not
going to stay with just Wiko. We're
going to keep pushing it out. we already
have with both Foxwell and
Head Hunters. Uh sorry, there's a lot of
missions. Uh they give out script
obviously and they give it directly to
your uh home location. You know, that's
something we'll see for other missions
uh going forward.
Um are there ever any considerations for
how weighty or meaningful the reward
should be? Like should a mission reward
inherently have more value than
something you find in a box or buy in a
store?
Uh yeah, we we it's it's a balancing
act, right? Um like most things, we we
always want to strive for a mix of
here's a mission thing. It's really cool
and you can only get it via missions
because obviously then it incentivizes
the mission and then we'll have some
items that you can get via a mission or
you could find as as potentially a rare
drop inside of loot boxes. Um or it's
something that you can't get via
mission, you can only get via loot. Uh
we we try to achieve a nice mix of it of
it all, but we always want to make sure
that some items are visually distinct
via the methods of getting them. Uh this
is so say I'm walking around in my uh
Stormbreaker uniform that I've got from
Wicolo, right? And um Nick um Wardle,
who obviously doesn't read very well and
hasn't read the contract, comes up to me
and goes, "Hey, I you know, I've put my
glasses on and I really like the uh the
armor that you're wearing. Where do I
get that from?" Um, and then I can
slowly, you know, walk walk walk Nick
through and be like, "Hey, you need to
go do the Stormbreaker event. I know
your reactions have degraded and have
slowed down, but I'll come and help you
a bit and we'll go through it together
and I'll help you get the items you
need." Honestly, and it's something to
do with experience and, you know, the
wisdom of years as opposed to youth and
impetuousness. Got a [ __ ] few years
there, aren't you, mate? That's your
third one. So
Elliot is absolutely right and I think
it's important to
discuss what we mean by value because
something can have value to someone and
it's nothing to do with UEC. So the
mission rewards have value to people not
because they're worth UEC.
Sorry, I was just I was just thinking
about how much better looking you are
than Elliot. So I listen I know it.
That's the main reason I'm salty. The
other thing which is crazy is like I'm
like 6'2 which means I'm like three foot
taller than Elliot which is crazy. Go
ahead. [ __ ] off. Go over there and stand
next to him right now. Nick, go stand
next to him right now. I swear to God
I'll break your knee.
See it.
I'm kneeling. I was kneeling. I was a
joke. You weren't kneeling that much.
Goblin confirmed live. Let's Let's go.
Listen, Goblin Gathering isn't named
after me.
I thought it was named after the Magic
the Gathering card, but I didn't find
out what it wasn't named after, and it's
a good story. Um, Wiccolo has been a
major new avenue for mission and event
rewards this year. Where'd that come
from, and how'd that come about?
Um, so, uh, previously as I mentioned,
you know, we we knew we wanted to do a
content year and we wanted to make some
really cool things for players, but we
also wanted to make sure that we gave
them more more reasons than this is just
new content to go and engage with it.
Um, we wanted to give specific rewards
that are tied to content um, or tied to
multiple pieces of content. Um, that
means that players if they want these
rewards, they kind of have to engage
with a bunch of different different ways
of gameplay. It's also nice because it
might show players into gameplay that
they're not really
you used to playing. You know, I watched
a really cool podcast with uh people
when we first released Siege of Boris
and they were saying how they was only
ever um ship combat flyers. They'd never
done FPS in in Star Citizen. And then
when um when when we did Siege of
Orison, they was like, "Well, let's
check it out." and now they do a mix
because they they had engaged with
content for a purpose that was different
to just I this is what I normally enjoy.
Uh and it encouraged them to to check
content out and play it more and more.
So, we kind of use it like that because
obviously not everyone's going to want
to play the goblin gathering, you know,
hauling missions because they're not
really interested in hauling, but they
might have a reward that they want to
achieve. And by that, they might go,
"Ah, I might try this out because I
could just do thousands of these to hit
this, but this one is more dangerous, so
it's going to give me more points
towards my overall goal. So, I'm going
to sort of engage with it like that."
Uh, as for where came from, uh, we're a
space game. we should have aliens and
ones that actually are sentient and talk
to you even if it is broken English. Um,
so, you know, when we was thinking about
it, we, you know, we was like, we want
some sort of like figure that's
collecting oddities and is very
mysterious and the original plan was
that you wasn't going to find out that
it was a Banu. We was going to have a
broken sort of camera and it was going
to take you time until you discovered
who they was. But then we was like,
we're hiding one of the coolest things.
So, we was like, let's get him in there.
Let's let's let's put some comms in
there eventually and have him speaking
to you and maybe even talking pure in
Banu. Um so the people who understand
Banu can understand it and the people
who don't don't have some subtitles to
read because yeah, it's another
language. I don't understand it. I
barely understand my language. I'm going
to have a migraine by the end of this
with everybody using the internal names
for things.
Wait, what did I say? You said goblin
gathering like four times. Oh, right.
Well, that's because It's all right. No,
no, no. In my new role, I'm
I don't really care. Let's just be real.
Um, should we should we give the
Stormbreaker name? We've already We've
already done it. We've given like the
last four names. You just haven't been
paying attention. I don't think I said
Apex again. No, no, that's somebody
else. Somebody else said Ormageddon.
Whatever. It's just you
What I was going to ask? I thought what
I thought you weren't going to do
another live one Jared with Elliot cuz
of all the I I thought we No, that was
Le that was that was Laith just just
never mind. Love you La but never again.
Okay. Um so what are the limitations of
this system? So, we know it's not
precisely how we'd wanted it and there
are some peculiarities with elevators
and and uh uh uh the Wiklo favors and
the RNG which is getting addressed in uh
421. Uh walk me through what's happening
now and uh how we're making Wiccolo
better in the future.
Uh I'll break that down into three
little bits because you mentioned a
bunch. Uh freight elevators obviously
have their issues. You know, we're not
blind to it. We know about it. It is an
incredibly complex system um because it
touches so much kinds of things is you
know it's got the whole thing that Jacob
was on about before with the volumes and
the fitting. You know you can have so
much stuff on that and they're all
different dimensions like it's a lot of
stuff to figure out. So they they're
actively working on it every single
patch to try and make it as as good of
an experience as can be. Um but we're
working on stuff as well for uh the Wiko
experience uh to make it better. So, one
of the big things that I know is going
to help a hell of a lot is um what we
call like nested item turnins. So,
essentially if you had a 1SU box and you
put everything in that one SCU box. So,
like I put in my 50 50 favors and I put
in like 20 uh medals and I put on 10
copion tooth and three pearls. I should
then just be able to put that box on the
freight elevator and send it down and it
accepts it and it kind of completes it
uh like that. Now, we don't currently
have that. there's a bug like it should
work but there's a bug that's stopping
it from being worked and it's something
we're actively looking to fix and
that'll that'll improve the experience
because instead of like like I say we're
not blind to it. I I have to stand on
that freight elevator as well and
manually drop each item for a stack of
50. The problem is that we want to fix
the bug and we don't just want to make
the recipes easier to account for that
problem because then it it completely
devalues the reward at the end. Um, so
working on that part of the experience.
And another thing is what we call uh
multilocation drop off. Um, this is
essentially instead of having to go to a
certain Wiccolo Emporium to do the
mission when it's generated, we're going
to be having it so that you can accept
it and turn it in at any Wikileo
location. So, say I need to get like 10
pearls, 10 10 uh irradiated apex pearls,
and I need to get, you know, four quasi
grazer eggs, and I need to turn them in.
And, you know, station thing is closer
to the pyro jump point. So, I want to
turn the pearls in there. And then the
quasi spawn over here, and that's close
to this station, so I want to turn it
there. We're going to enable it
eventually. So, you can do that. And
what will happen is if you've deposited
the pearls here and then you finish the
eggs off in this other location, it
doesn't matter where you put it,
wherever you complete the recipe is
where you'll be given the award, but you
can drop them off at any location. This
way you can choose exactly where you
want to go and and finish the mission.
Um, and when we get that tech, it won't
just obviously come to to Wick. we will
come to a bunch of our missions where we
notice this is kind of like a uh a pain
point of of right well I have to go all
the way over here now and I don't want
to um but that that should help that'll
be the freight stuff favors uh favors
are something we want to keep because
they're um in law they're a
representation of the Banu
because they don't have they don't write
stuff down they don't really have that
history thing if you do work for me as
and I'm a Banu I've got I won't remember
that. So a favor is like a token that
says, "Yeah, if I give you this, it
means that I've done substantial amount
of work for you." And then me as a banu,
I'll go, "Okay, right. Well, I can't
remember it, but because you have my
favor cube, I will honor the deal, honor
the agreement." Um, but favors also act
as a purpose, which is uh stopping your
items being deleted. Um, we have uh some
technical limitations obviously in the
game where certain amount of items in
one zone uh can cause
lag, frame drop, uh physics to freak
out, all of these kinds of things. Um,
and what we have is this density cleanup
system that eventually when it violates
a rule set, it starts starts cleaning
them up. Um but because obviously we
need the worth of the items but we have
the limitation of too many items in one
space causes problems. Uh favors are
also used as a conversion method. So
when we ask for you to trade in 50 karat
for one favor it like I say it's a
conversion instead of asking you to put
500 car down and 450 of them be deleted
and you're like all my hard work no uh
if you don't get a crash or whatever
else. That's that's why the favors exist
and they're going to continue existing
because they're a really interesting
piece of the law. Uh but the idea is
that we'd be able to have
more items in bulk when we can do that
sort of box thing. So favors will stay
but they'll kind of morph a little bit
for how we use them. And then RNG
RNG
uh this is something obviously we've
we've we've looked at for 4.2.1 and
we've put in some fixes that play people
have been playing. Um,
we, you know, RNG in grinding is very
typical for MMO. Um, and it's something
obviously we want as well. You know, we
want you to put effort because effort
means the valuation of the things you
get as a reward goes up. Uh, you've put
your time into it.
But the the point where um we've changed
it was that the RNG was done a lot more
on the reward side. So instead of going,
I want this item and this is all the
stuff I need to get for it, we would go,
here's a list of a bunch of items you
could possibly get if you give this
stuff, which you know, randomizing the
reward isn't as fun because then you've
got all this work done. You go for the
excitement of getting the reward and
then it's like, hey, you got this and
you're like, yeah, it's not what I
wanted. Um, so we we've we've we've kind
of changed where that where that is. Um,
so what we want to do is is have you
choose the rewards you want. Um, and
then on the getting of the items is
where we have the the the RNG. And it's
something that uh me uh to Leman on
systems design and the economy team uh
Andre and Nick have been working on
which is defining what that is. And
we've we've basically split it into like
three distinct categories. You have your
core content items. These are items that
you are guaranteed to kind of get while
playing a um a piece of content. So an
example of core content items would be
karanite, right? You get karanite from
doing the align and mine flow code name
obagedon. Um then you have your content
items. These are items that you that are
not core to the experience but you will
like you can find you can get. So an
example of these would be the Ace
Interceptor helmets and then the ones
that help us with the the sort of the
the RNG uh in a big way are the rare
content items. These are things that you
will find
less are less likely to find. They still
they still can be there but they they
increase the time and help to add that
sort of grind aspect to an MMO. So these
are new these are some new things or
things that already exist that we're
kind of like injecting. So, for example,
in 4.2.1 when you play and you do um I
was going to say all a line of mine, uh
you will find pure caronite now in the
uh cave. It's a new new type of
resource. Um but you're going to find a
hell of a lot less of them and you're
going to notice that some of the recipes
now require that. You know, if you're
doing the uh Stormbreaker, there's the
uh grade AAA uh Radiate Pearl. That's
going to be a rare content item. We've
got a bunch of war badges uh for ship
battles that you can find on the Ace
pilots, but they have a chance to spawn.
You can find them in Luke's Luke's loot
boxes. Uh but they have a rare chance to
spawn. Uh and this is kind of like how
we're looking to to keep a little bit of
the RNG and keep a little bit of the
grind, but you decide up front what is
your reward you want. Um, so you don't
have to end up with like 50 like
terrapins from Wiccolo all just because
you wanted a completely different ship.
Uh, yeah.
Listen, it was a long question. What do
you want me to do?
No, no, it was great. Great answer,
Elliot. Uh, you're playing with dolls.
What are you doing? I want to read two
comments from the chat. Uh, uh, first
was from St. Deacon. Uh, this was this
was caught by the automod, so I want to
make sure this gets out there. Uh, nine
unicorn horns, my virginity, my eldest
child, and 900 air 900 hairs from a
tick's butt.
What do you think, Nick? I'm I'm good
with that. You want to put that as a
recipe? How does he have his virginity?
I think that's reasonable. I'm not sure
which one of those is I'm not sure which
one is the rare content on that one. Is
it the Is it the the the butt ticks? I
can't I'm not sure. Definitely not the
virginity for sure. No, he's definitely
still got that one. But
uh and then another comment from
Bluesmx. I love Elliot Malpi. I could
listen to him for hours. Please continue
talking about what you're talking about,
Alec Malpi, and don't change the topic
at all. He's being very uh gracious and
uh good in the chat. Um all right, so
our last pillar here, uh Declan, you've
been waiting patiently and hanging out.
Uh it's your time, baby. It's your time
uh stuff you make and storing it. Now,
obviously, we're not going to go too far
into crafting as we get closer to the
actual imp implementation of crafting
the PU. There'll be there'll be ISC's
and there'll be and and stuff like that.
Um but because it is yet another way
that people know we're going to get some
stuff. I do want to touch on it here. Um
how does all these other avenues of item
acquisition affect what you're doing on
crafting?
Uh it's big with crafting. God knows how
many things we're going to uh inject as
rewards. There's thousands of
blueprints, hundreds of materials. So we
really need all of this available to us
so we can kind of dish it out into
various parts of the game. Some places
where it's more difficult, some places
where it's easier, unique resources,
different systems. So uh it's big
because the whole gathering aspect of
crafting is the the foundation layer. So
it's kind of like the biggest and then
the pyramid refining and then crafting
at the very top. So it's big big.
Yeah. So, all of the all of the pieces
that we've talked about so far, uh all
of the work that uh Luke, Nick, Andre,
Elliot is is doing, all of that content
is things that we'll be able to add
blueprints to, add crafting materials
to, and in uh loot boxes, potentially
even you might find some pre-crafted
loot, but we'll we'll see about that. I
know there's some conversation about
separating uh gear and cosmetics deck.
What what can you tell us? Uh yes. So I
suppose most people know right now the
way we have to do cosmetics and gear at
the moment like your armors and your
guns is a bit annoying because it's like
bound to the item rather than being like
a ship paint where you can swap it
around. So, we are working to separate
out the cosmetics from the gear. You
take it to a crafting terminal and be
like, I want my gun to be whatever skin
I have available for it. And it won't be
a physicalized item either. The paint
won't be physicalized. Ships eventually
transitioning to not be physicalized
either. The paint aspect of them. Uh
yeah, that'll be an item. Yeah. And
something we'll hear more about
obviously when we get closer to the
stuff. Um
because crafting is, you know, still a
ways in the future and whatnot. Um all
of this stuff, and this is really the
reason I've I've invited you here in
case I don't know if you were know this
or not. All this stuff, all this way of
getting stuff, all this way of acquiring
stuff. Um
I got to ask you about the inventory
system.
Yeah. Help,
help, help, Declan, help. There is a
stuff done in stack right stuff. It's I
gota just just help what can you what
can you what can you what can you tell
us? We we fix it. Well, I'm personally
not fixing it. However, the talented
folks in Montreal are working on a
rework at the moment. So, I will share
some concept UI of what being worked on
and we can talk through it. Hang on. I
don't need to zoom much. So, here we go.
So, we're looking at some uh concept UI
here. Uh, obviously you can see there's
a visual facelift, but um, kind of the
most interesting aspect to me isn't
super obvious straight away, and that is
that you will be able to access um,
other inventories that are nearby to you
within proximity. So, if we start
drawing, we imagine we've got our
storage box over here. And then we kill
the guy. Yeah, thank you. We we kill the
guy. Here he is. He's on the floor. So
he would be accessible as one of the
tabs up here. And then the inventory box
would be over here. Same on the other
side. And so when you press I to access
the inventory, you can then access the
dead body's inventory, access your
storage box. You can start moving stuff
around without having to directly go up
to the body, go to the box, press F. So
it's much much quicker to kind of get in
there and start looting.
Uh we'll just get rid of all this.
If we focus in on one of the panels,
you can see it's called personal all.
That's just kind of the the default
personal would be on the left and it's
all because it's showing everything that
is stored on your person at that moment.
If you wanted to see what is in your
backpack in particular, you have the
side tabs and then we have a search
function which has been added in. If you
were to click this, a search box would
come out over here and you can search
the item that you want. You have your
select all, your capacity, you have your
filters. Uh these filters kind of
similar to freight elevator where you
have the drop-own box with the
subcategories here. And we're working on
these filters being multi-purpose. What
I mean by that is at the moment filters,
you click them once and it means I want
to see these items. If you were to click
them twice, it would hide that category
of item. There's a lot of people with
freight elevators full of decorations
they don't really care about at the
time. So they can just hide all the
decorations if they want to. uh clear
filters, sorting options when crafting
comes in. This will be big because you
want to sort by um quality items here,
that kind of stuff. And then tucked away
in the corner is stack all. So that's a
nice quality of life addition as well.
Just just a nice little addition. Just a
nice little addition. Uh there he is. Uh
anything about anything about maybe
getting to name our boxes, label our
boxes? Yes. So this is your commodity
box and then this would be like a
backpack and one of the options will be
to right click and just rename them. So
you could say like oh this is my box
with high quality channel lighting
whatever as you you've given boring
gamer salty Mike and space tomato so
much content for the next week. Bro,
we're not done. We've got tool tips and
everything. Oh my god. Here he goes. So,
as you can see, looking at the
inventory, everything's a square now.
Instead of it being a mix of squares and
long rectangles, that'll also be applied
to the freight elevator. So, the ship
guns won't take up half the screen. You
get a lot more information uh available
to you. We have the equipment panel
where I know I just said they weren't
rex angles. These ones are, but regular
weapons aren't. So, I'm technically
true, but also li. Uh you can equip your
attachments super easy here. Uh the one,
two, three is basically like the slot
they're in. And then again, if you were
to look at your ammunition, you can see
which weapon it's viable with. If we go
over to the character, uh we have all
the slots. The slots would be shown by
default here, and they're contextual.
So, if you want to quickly see all the
backpacks you have available to you if
you were to click the backpack slots,
then the various inventory would filter
to only show the backpacks.
Um,
yep. We have the new tool tips, which
very nice. Rather than being text, we
have bars. Um, you've got a bit of info
here. When we have crafting, then the
crafting the the person who made it
would replace the manufacturer. So, it's
crafted by whoever it was crafted by.
Uh, we have taken into consideration
wear and tear with integrity and
durability. And I suppose you know
there's more than three stats on a
weapon. So, if you to right click and
details, you get the full view, the
scroll bar, the attachments,
description, which can be expanded. And
then if you
[Music]
if you hover onto a item of the same
type, you'll see the comparison stats as
well.
Um, you can make the icons bigger or
smaller. If you are uh if you got bad
eyes, you can make them a bit bigger. Uh
Elliot, don't make a joke about Nick.
Um the thumbnails as well, obviously
there's a problem where sometimes they
don't load or sometimes they appear as
far that's been worked on as well. We'll
get that fixed.
I think that's it. It's probably not
everything. Um there's a lot of stuff
that's going on. Yeah, it's not
everything. We haven't tal we haven't
talked about the the imprinting and the
and the and the stuff with item recovery
v2 and stuff like that. Uh but again, we
just wanted to share uh a bit about the
at least the concept for the upcoming
inventory uh revamp. Uh for folks in the
chats that are saying 2026, 2027, um
possibly I'm not going to not going to
BS you here. It's not it's not in active
development right now. It's just like
it's in the concept phase and being
specked out and and the work is being uh
figured out and then it will be
scheduled and stuff like this. So I
can't speak none of us can speak about
when it will be developed or been be
delivered rather but that is the
direction uh we want to go in this
moment and I thought it was super cool
and I thought it was super exciting and
at the end of a conversation about all
the things you can get in the verse and
how you get them it just made sense to
me to to cap it off with a look at at
least how the future of managing that
stuff uh will potentially look. Um so
yeah with that folks we made it. We're
at the end. Uh, Andre, Nick, uh, Declan,
uh, Elliot, uh, Luke, um, and, um, um,
Jacob. Thank you, everybody.
Thank you, Jud. Thank you. Thank you for
Thank you for hanging out. And, and
shout out to Connor who wanted to be
here, but because we changed the date on
him, he couldn't be here. Uh, he wanted
to be here, but he's there. Um, uh,
thank you so much. Uh, also, I got a I
got a shout out. So, there's a thing
before I let uh the viewers go. I got to
bring it up here because I didn't look
at it ahead of time. There is a
Oh, what chat was it in?
Is it in your chat or my chat? There's a
thing called Quantum Vegas. Uh it's
happening on on Saturday, July 12th. Uh
it's a big community organized Star
Citizen event like other ones like BCON
in Belgium or Con42 in in Germany. Um,
uh, it's, uh, we're in attendance on
July 12th is Sean Tracy, uh, Sandy
Roberts, uh, Tyler Wicken, uh, Galaska,
our social media person. Um, there's
going to be panels and contests and a
bunch of giveaways and a bunch of stuff
that you can get. So, if you're if
you're in the Vegas area or at least the
Pacific Southwest, and you can attend.
That's on July 2nd, and you can check
that out. Uh, just search for quantum
vegas.space.
They had a space thing. um and for
details on that and that's uh July 12th.
Um as for me, uh that's it for this
week's show. Uh come back next Thursday.
Uh it's a it's a behind the ships uh
episode dedicated to um
something I've been waiting for for a
long time. No, it's not the jalapy. Uh
it's it's it's something it's something
else. uh just because I know people are
gonna think that's but but I it's it's
it's been a ship that's near and dear to
my heart and and it's coming to the
verse uh uh real soon. So check that out
next week and then of course we'll be
back. A lot of folks had questions about
uh the the new event that's currently
testing on PTU. We have an ISC dedicated
entirely to that and how the rewards
work and how you can get all that stuff.
That's coming uh in two weeks after
that. So So go play it. Put some bugs in
for me, please. Oh yeah, I need them.
Yes, but if you're on PG now, play it.
Uh Elliot's work is terrible and he
needs as much knocking on the pipes as
possible to to all these other people by
model. So if it's terrible, it's not me.
It's it's it's it needs it needs some
play testing. Go to the PTU. Exactly. He
didn't have his glasses on when he was
doing the
I had it I had the screen really big.
Somebody somebody in the chat said, "Do
you remember when used to be
professional?" And I'm like, "No,
I've for every single remember the
summer show. Was it the summer show or
the Christmas one? Which one was it,
Jared?
I don't know what you're talking about."
We don't talk about the anniversary
show.
I hope you're playing Hello Darkness, my
old friend, right there. Do we not have
that queued up? No. All right, so that's
it, everybody. Uh, thanks for watching.
Thanks for hanging out. Uh, jump on to
Pichu and test if you can. Uh it helps
us uh release these things every single
month. And uh come back for uh BTS next
Thursday uh for a pretty pretty pretty
pretty pretty pretty pretty pretty
pretty pretty spaceship. All right. Uh
thanks. Bye.

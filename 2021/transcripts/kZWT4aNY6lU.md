# CitizenCon 2951: Life In The 'Verse

**Video:** https://www.youtube.com/watch?v=kZWT4aNY6lU
**Date:** 2021-10-09
**Duration:** 2:00:24

## Transcript

CITIZENCON
LIFE IN THE 'VERSE
STANTON
♪ [music] ♪
WE ASKED WHAT IS BEYOND THAT NEXT PLANET
WHAT IS BEYOND OUR CURRENT SYSTEM
♪ [music]  ♪
TO NEW BEGINNINGS
♪ [music] ♪
PYRO
Pyro System
A LAWLESS FRONTIER
- [Todd] Hi, I'm Todd Papy,
Star Citizen Live Game Director.
- [Ian] Hi, I'm Ian.
I'm the Art Director for Star Citizen.
- [Dave] Hi, I'm Dave.
I'm the Narrative Director at Star Citizen.
- So finally, we're saying goodbye to Stanton.
It's quite, quite precious to us.
We've been talking about it.
We've been looking at it.
We've been living there for quite a long time.
But now it's time to, you know,
move the conversation on,
start to look at something new.
Now, it's changed slightly, the Jump Point, slightly,
from what we saw a little while ago.
One of the things that was quite important for Chris is
he wanted that feeling of something that was
quite wondrous, something that was quite amazing.
You know, it's not dark, it's not mysterious,
it's not hostile, but it's more, like I said, wondrous.
- So, when we started looking at Pyro and we had to
start looking at how the Jump Points worked,
when we're traveling from Stanton to Pyro or Pyro to
Stanton, and thinking about border security,
with the infrastructure that's needed there.
What's the lore?
Just because, on one side, it's very lawless,
versus the other side is dealing with the UEE.
So we needed to go through and really think about how
this was working, and then also, with the Jump Points,
how smugglers would work,
with the secondary and tertiary routes that would lead
in to the main jump point, and then funnel out.
- Yeah, we kind of call it, internally,
we kind of call it the Swiss cheese approach of the,
you know, there's sort of the main entrance that you
would go through on Stanton,
which would be the sort of guarded,
have the infrastructure that you had mentioned,
the security and stuff like that,
but the possibility that there would be alternate ways
to kind of get in, to bypass that, so,
which would be beneficial knowledge for smugglers or
criminals who are trying to get in under the radar.
And also, it was, you know,
if there's a lot of infrastructure around it,
it sort of created this impression that that
infrastructure was responsible for the Jump Point.
And the reality is, it's a naturally-occurring thing.
An interesting balance of, like,
make it seem like this is a checkpoint,
but at the same time,
it's something that the ships are creating,
not the structures.
- So, before we go too much further into the
Pyro System, let's take a deep dive into the
art process, with Jake Dunlop.
And he's going to be taking us through the
authoring process for the Stanton and
Pyro Jump Points.
FROM STANTON TO PYRO JUMP POINTS
- [Jake] Bringing Jump Points to the
'verse has been an interesting journey,
as we've been designing a new element in our game.
We've put a lot of time into creating two solid
examples of different types of Jump Points you'll
eventually see all around the 'verse,
one in Stanton and one in Pyro.
We've been continuing to use Houdini as the tool to
create these gas clouds.
The setup we have for them is a parent gas cloud and a
child gas cloud.
The parent is mainly used as an establishing shot when
you arrive in your ship from quantum travel,
while the child is used as the main gameplay
environment, and is placed inside the parent.
The child also has a reasonable scale,
which keeps your average ship speed in mind.
These things aren't nearly the size of real nebulae,
if you're curious.
But by no means are the Jump Points small.
Here's an example of a
Pyro Jump Point next to microTech.
To explain the process a bit more,
we create the parent at a large scale,
then cut out a small box in the center of it.
Inside the small box,
we'll gather the volume data from the parent,
upres that, and then add details.
The details will be different depending on what type of
gas cloud you want, and if you want to easily fly
through it or not.
We usually spend time investigating different designs
for the gas clouds, but with the Stanton Jump Point,
the work had already been started and
used in the 2019 CitizenCon demo.
We just had to go through, clean up the Houdini file,
and get a game ready,
with a couple of extra tweaks along the way.
Some of the tweaks we made to the parent were making it
feel like more of a structurally sound rotating disc.
This was to make it feel
like a safe and well-used Jump Point.
The child gas cloud here was changed more dramatically.
It used to have a bunch of dark clouds around it.
We felt that it was feeling a little bit too closed-in,
so we spent time morphing the magnetic lines
in the center, to create a really interesting
horizontal, flowing, relaxing, composition,
to visually show you that Stanton itself is generally a
safe place, at first glance.
The parent gas cloud for Pyro was created with the same
process as the Stanton parent.
But we changed the shape of the cloud into something
more menacing and violent.
We wanted the reveal of Pyro to be a clear warning of
what you should be expecting
throughout the entire system.
So we made it very closed-in, dense, and very active.
We did make it a small challenge to traverse the child,
something that won't take too long,
but should be something to
consider when traveling through.
Something that helped really quickly create a fun
traversal route was creating a whitebox play area
in Engine, out of solid geometry,
and flying around it right away.
After we were happy with the route,
we exported the geometry to use in Houdini,
where we converted it to a volume,
and combined it with the upres'ed area of the parent,
to export that out as the child cloud.
We wanted to make sure that these systems feel very
different from each other.
Some ways in which we did this
was by the shape of the Jump Points.
As I had mentioned before, Stanton feels very clean,
put-together, and generally safe,
with the disk-like form that it has,
but Pyro feels like it's more violent, distressed,
and this shows in its form.
The comparison is shown well in
both of the child clouds.
In the Stanton child cloud,
we have nice long strands of the magnetic waves,
that encapsulate the Jump Point, that feel harmonious,
beautiful, and free.
Whereas in the Pyro cloud,
it shows almost the opposite.
The walls feel like they're closing in on you,
moving in unpredictable ways, completely unstable.
Your ship could enter into a
wall and disappear within a second.
Lighting also plays a big role in
how we feel about these spaces.
You can see these are dramatically different areas in
the moon and tone, and lighting is the key to that.
So, that's a brief look at Jump Points.
They've evolved quite a bit since
the last time you saw them.
Enjoy the rest of the show.
- Thanks, Jake.
So, one of the things that players would first probably
come across when they come into the Pyro System is
the space station.
You know, it was discovered a long time ago.
It was, sort of, deemed uninhabitable because it was
just too dangerous when that flare star going on.
So they, kind of, utilized the system for resources.
And then when they kind of tapped out, they just,
sort of, left and that's when all the, sort of,
squatters came in.
So there's, sort of,
older infrastructure built to sustain, kind of,
the mining activities, and gas harvesting,
and stuff like that.
But, you know, they just basically left,
and then other populations started to slowly move
into the system, criminals, squatters,
survivors and whatever,
and start to kind of take over what was left behind.
- Which gives us some unique gameplay comparatively to
stand against the space stations there.
So with Pyro, since they're in such disrepair,
some of them are inhabited,
some of them are completely abandoned,
and then so players can go and explore.
They can go and see what's happened there,
whether it'd been hit by asteroid or if there was some,
sort of, conflict there before.
But you'll be able to go and explore the different
decks and be able to go in and meet new people,
meet the Frontier lifestyle, enjoy it.
- Okay, so before we go to the inside of the stations,
we're going to jump now to Eric,
and he's going to go in a bit more detail,
the concept development process taken when looking
at the exteriors.
OUTLAW SPACE STATIONS EXTERIOR CONCEPT DEVELOPMENT.
- Hi, I'm Eric Gagnon,
principal concept artist on Star Citizen.
The goal of that initial step of sketch development is
to create something not inviting, dangerous,
damaged by asteroids,
and surrounded by floating debris.
Hiding place for outlaw, looks old, decrepit.
Lawless, no security force here.
Approach at your own risk.
Industrial look, messy but not abandoned.
Some parts are wrecked but
under repair and [inaudible].
I like to use the black and white sketches to start.
It allows us to go very quickly
and focus on the shape only.
We then try to play with a touch of color to define
more of the commercial port platform.
We try different schemes to remind us of the whole look
with a rustic vibe and brown tones.
Having a touch of light in some context around the
sketch allows you to see the scale of thing and
properly view the silhouette.
We expand on the idea to
play with the mechanism and functionality.
This is the color sketches of the asteroid
[inaudible] ArcCorp and
in different angles.
In this sketch, we can clearly feel the arrival of the
asteroids, and dismantling our restriction zone.
We also need some top angles to properly showcase the
size and scale of it.
With all those element in place,
we can now build a nice plate of the entire concept
for the asteroids, harpoon without the piece together.
The shantytown module habitation is a nice idea to
have, a kind of small city on the outskirts
of the space station.
So here I sketched those shapes
to create something very modular.
From the grayscale, it's pretty easy
to do a color pass.
I played with a color palette
that reflects the vibe of shantytown.
In this sketch, here we can easily see how cool the
area is going to be.
Another angle shot here is pretty nice, too.
Playing with warm and cold
color contrast is interesting.
All those different angles help define and expose the
different elements of the concept
to properly illustrate it.
Now, we have a nice board of the sketch phase.
We apply the same process here
for the commercial port platform.
The black and white sketches are a good way to go.
In this image, we see the silhouette shape sketches for
the front of the port platform structure.
A quick side view plan here is
necessary to well build this design.
We feel the form, and the ratio,
and the size of what we want to achieve.
And of course, we create a color
sketch to see what it could be.
We see the industrial look and some potential details
to better define and deep dive into it.
For those, we have a deeper design exploration of this
industrial area, pipes, tanks, angular shapes,
and the color touch.
Combining 2D and 3D sketches really help properly
communicate the design intent.
It's a common technique now,
but it's really efficient to highlight areas
of the concept.
Using 3D is also very useful for all level designers to
validate the size and shape of things when creating the
environment in the game.
Let's talk about the big repair machinery hiding.
This machine could be used to repair surfaces damaged
by asteroids, inspired from the EV machinery that we
see in mining.
Nice to see the overall add-on ideas brought together
on a single board.
It gives a great look and makes you want to see the
next design step.
The mood looks.
We also create a mood board from our different shots.
This shows how lighting is used to set the tone of the
environment by giving different options
and color palettes.
Finally, we provide some options for
paint of the exterior surfaces.
We work from a list of brands and faction,
that we need to incorporate to the design.
We started from the narrative things,
worked to build the visual identity of the
different brand, exploring different ways to represent
them and the environment, stickers, flat surfaces,
graffiti or official paint job.
This really brings the sketches alive and set in the
universe of Star Citizen.
The outlaw station are a symbol of the Pyro System,
and we hope this first exterior concept phase excites
you as much as we had fun to create it.
Thank you.
- Thank you, Eric.
Looks great.
- That's the exterior.
So right now, we're going to go from the outside,
and we're going to jump to the interior.
A LAWLESS FRONTIEROUTLAW SPACE STATION INTERIORS
Before we really started exploring anything,
one of the core concepts that we were discussing as a
group was the idea of power and the idea of heat.
Now, we've got, like,
this big interior layer of this old mining station.
How would they have adapted the space?
You know, they would have, "Okay, we need power here.
Okay, that will create heat."
So we started thinking about, "Okay,
where would the heat lamps be?
And then where would light come from?"
So just the principal concept of power creating heat,
creating light, that was pretty much the core of the
start of the visual development process.
- So when we started talking about it from a design
side, we needed to make sure that we were covering
certain shops, just basic needs for the player.
Everything is bare bones.
It could be that it used to be a clothing store,
now it's a food shop.
And so they've converted it.
The gangs moved in.
You know, it's not what it used to be,
but you see that old skeleton there.
- One of the things that definitely we've been talking
about with Pyro that we didn't really get to see
in Stanton is the idea of, sort of, the gang presence.
So, you know, that idea that they're the, sort of,
local law in the area.
So, you know, you might see gang members coming in and
shaking down some of these shopkeepers for protection
money or rent, you know, type thing.
- Or even shaking down the player.
- Yeah.
Yeah, which should be very fun.
Not for me, but yeah.
- So when we started to explore some of the side areas,
there were other things,
other factors that we had to cover, habitation clinics.
You know, players need a place to sleep, to log out,
as well as players need a way to get themselves healed.
And then we started taking the same treatment or
similar treatment that we were doing with the main
market area and started to take it into the Habs and
how they were possibly repurposed,
or the clinics and how those were possibly repurposed.
And just make sure that everything felt cohesive in its
raw, natural form.
And the way that we have the stations structured,
we haven't let players go into, like,
living quarters where the people that lived at the
station would be or even into the lower decks where
the power, where the gravity and generators are.
And this is where we're going
to start introducing these areas.
And it opens up new opportunities for the players to go
explore and do new things.
But it's also areas that the
gang might want to protect.
- Yeah, it offers a lot of possibilities for mission
content, you know, whether it's actually maybe working
for the gang itself or other, kind of,
those small things you could do inside there to really,
kind of, drive you deep into the bowels of this thing.
- Okay, so that's a little look at the insides of the
stations, but now we'll jump to Christian and Christian
is going to take us on a little bit of a deeper dive
into the concept development process of the
inside of the stations.
OUTLAW SPACE STATIONS INTERIOR CONCEPT DEVELOPMENT
- Hi, my name is Christian Doretz.
I'm a senior concept artist on the environment team,
and we're going to look at the concept development
for the space station a little bit.
So, first off, we looked at the heatmap.
So there is a lot of [inaudible]
electricity is gone, the heating is gone,
and the visible air, the oxygen is gone.
So there is pretty much all of those connected areas.
They are lifeless in a way, right?
So you wouldn't settle down somewhere
in between those empty corridors.
We're trying to sort our thoughts
and get them on paper, right?
So we're exploring different ideas that we on the
concept team had in mind.
So we're thinking about pathways that the player and
the NPC could take.
We're thinking what would happen if all of a sudden one
pathway is blocked off or another one will
open up, right?
So we're thinking about verticality and how the players
or the NPCs can traverse all of those interesting areas
that are, in the end, pretty ominous, right?
So think about there are some people just screwing off
side panels on the wall or they're screwing
off ceiling panels.
And you would see all of
the maintenance areas behind it.
So we'd see a lot of struts, a lot of working areas,
just cables hanging.
So those were the very first sketches where we could
see what those eventually could evolve into.
And we also started then slowly
with some loose 3D sketches.
So getting everything into 3D.
And it's pretty much evolved over time where we could
talk to the environment guys,
and we were asking for some of the current rest stops'
geo and some of the textures,
and then getting them into 3D.
And we were just changing up all of the props,
all of the side panels,
and all of the whole...the environment.
So we could, looking back at the references,
then convey this feeling.
We could introduce more dirt.
We could introduce some damaged panels, side panels,
and pretty much explore this side area, right?
And the big advantage of this is that we can make the
environment how we like.
So one thing that we did is, like,
kill all the lights because we don't need lighting.
We want to create our own lighting,
and this is what I said earlier.
The current rest stops are super bright.
They're family-friendly,
but now we want to make it ominous.
We want to make it dark mood.
We want to make it super dark where the player's, like,
always feeling, kind of,
in danger and especially with the
gang members in mind, right?
So this would allow us to create one of the very
earlier 3D explorations,
which then lead to one of the final concept arts or the
final implementation of this.
So when we were at a point where we were kind of okay
or we thought like, "Okay,
this is an environment that we want to see," then we
took care of the last 20%.
So the last 20%, in this case,
means having a final render and painting over.
So we were just painting over in Photoshop and doing
some more refinements for the mood and the lighting.
We were painting in some of the decaling and some of
the graffitis because it is ultimately easier to do all
these things in 2D than in
3D and caring about the materials.
So we were able to just refine
the final concept in this regard.
And this wasn't a straight process from A to B.
It was an iterating process.
So in between, if you're looking at some of the other
concepts, for example, the barriers,
we were at one point thinking about what would happen
if we introduced barriers that the gang members then
would set up on one point.
So what does it mean for you as a player?
What is a player doing at this point?
So will he encounter these gang members?
Will he try to find a way around?
Is he going to use some of the letters or the
underground events, for example?
So we were changing the concepts
here and there more or less.
And this leads to, in the end,
having a nice variety of concepts or different types
of concepts that we then could cherrypick the best
parts of it or the other teams, the environment team,
the design team could cherrypick the
best ideas from those concepts.
And this was pretty much a rundown of the concept
development for the Pyro Space Station's interior.
- Thanks, Christian.
That looked appropriately scummy.
- So we've been talking a lot
about the insides of the stations.
We've been looking at a lot of the concept art,
but now we can jump to Josh,
and Josh is going to talk about one of my favorite
parts of the process.
And it's when we take some concepts,
and we start to do some iterations,
some visual development in the engine.
OUTLAW SPACE STATIONS INTERIOR IN-GAME DEVELOPMENT
- Hi, my name is Josh Van Zuylen.
I'm the principal environment artist
here at Cloud Imperium Games.
Today, we're going to be going through the Pyro Space
Station's visual target and preproduction sort
of things that we're going to be doing for these
rundown/outlaw space stations.
So what I have here right in front of me now is
obviously the first call from our
Stanton space stations.
We've just dragged the where up on all of them.
So now we're getting all of this really nice grime on
all of these surfaces.
Right?
So if I turn off my working lights,
which hopefully are going to, you know,
produce that mood that we're after.
So we'll turn on that right now.
So a number of things have
happened right in front of us.
Right?
You can instantly see where we've got
lots of heavy fog coming in.
Don't pay too much attention to the particles now.
We'll go into them a little bit later.
We've got some light panels up here shooting through
the rafters and we've got another one
over here as well.
Right.
So we're going to do a quick little thing here.
It's adding in some cables.
Right.
And now this is really important not only to achieve
the art direction, but it gives us a really nice level
of parallax within the scene.
Right.
We have a couple of design constraints within this
space as well.
One of those being we have a
gang and then a general civilian population.
Right?
Now, one of the things that we wanted to do in terms of
that design in this particular space was separate it
out in like a kind of cloth type system.
Right.
So we're going to start to explore some of the
requirements of that.
One of that being that, like I mentioned before,
you can't get up here unless you're in favor
with the gang.
So we need to put in the instruments that are going to
help portray that.
And that is a checkpoint.
Right?
So and just a side note,
all of this stuff is super work in progress and nothing
is final, so don't read too much into it.
So from here, we're missing a few bits and pieces.
Right.
But one of the ways that we're
going to solve that is with graffiti.
All right.
So I'm going to turn on those details now.
And you can start to see that the walls here are
starting to disappear a little bit.
It's a very subtle effect in this particular area,
but you'll start to see how much more it comes
through in others.
Right.
So moving on from here,
we need to start putting the stuff in the environment.
So bear with me for a sec when I turn this on.
All right.
So we've got here is a lot of stalls, right?
We really want to get that cramped vibe in,
like it was kind of similar in the concept and start
seeing how far we can push the limitations of what we
can do in the engine,
but also what we can do
with our technical systems as well.
Right.
One of the things that was immediately apparent to us
is that AI is really tricky to deal with when in tight
and enclosed spaces.
Right.
So we need to look at areas like this here and this
here, to make sure that it's wide enough that if you
and I can pass each other or
a player and not look completely gross.
Right.
Now, I mentioned lighting before.
So I'm going to turn off the working lights that we've
got so far and you'll start to see what I mean.
So we've got a whole bunch
of stalls here at the moment.
The entire scene is being lit by the stalls itself.
Now, this is going to come a long way and the stalls
themselves have had a bit of a lighting pass.
So this is really starting to look quite nice,
but we're not getting of that thickness that we're
getting up on the top level.
Right.
We're not getting that little bit
of life to a certain extent.
And we're also getting these areas here where they just
fall completely into darkness, which is not fun.
So obviously, like I said before,
we'll be doing lighting as we go through this process.
But just to see how much of an impact that pass can do
on an environment like this,
I'll just turn it on for you.
So you start to instantly see we've now got a lot more
thickness within the environment.
And if I just double check just to make sure that our
lights are generating correctly.
Cool.
So we're getting a lot more voluminous lighting now.
We're getting all of these heat is coming in now.
The heat shimmering off them.
We've got these little portable
ones lighting up the place.
We've got some ones that are hanging from the roof,
ones that are over in the corners and stuff like this.
Right.
So we're starting to get a little more mood in this.
This is starting to feel really nice now.
Now, what I was mentioning in terms of the rain, right.
So, yes, we're talking about the rain now.
Why is there rain inside?
Right.
So this is generally a really cold station.
And when people are in this area that's in the center,
because there's so much stuff happening here,
it's starting to get warmer.
Right.
You've got the heaters  here.
You've got the gang that is kind of maintaining a lot
of their stuff and producing a lot
of the heat themselves.
This is prime real estate where
everyone wants to be, right?
So what happens when you have this many people cooking
food in this one small area, you know,
bringing in hot air, that sort of thing,
it all starts to rise in this environment.
And it starts to get...
That massive cabin, right,
that we've got up here all the way up to the
roof there, as it goes up, it starts to cool down.
Right?
And we start to get precipitation inside where it
starts to rain.
And even in many instances,
we start to get a little bit of ice coming
through as well.
So that means once it's all fallen down here,
it's actually quite wet and damp for...
It's still cold and a little bit warmer in heaters,
but it's generally quite damp because of that weird
kind of event.
Now, the rain as it currently sits,
is just a placeholder asset that we're
borrowing from squadron.
And that will have to obviously be remade to suit the
amount of rain that we want to have
within this environment, which won't
be, you know, crazy.
But it serves as a proof of concept for what we're
trying to achieve.
Right.
So that is pretty much Pyro Stations.
I hope you really enjoyed, like,
seeing the breakdown that we've done here today,
learning a little bit about the process of going in and
doing a visual target.
And, you know, just a little bit more of the earlier
process and problem-solving that we go through.
So, yeah, I hope you really enjoy the rest of
CitizenCon here today, and I'll catch you later.
- Cool.
Thanks, Josh.
That was looking really good.
All right.
So as we continue our process of exploring the
Pyro System, now I think it'd be good to look a little
bit at the planets and moons that populate the system.
Now, one of the things we thought would be interesting
to talk about is, how do we design a system
from the ground up?
As with all of this, we always start from narrative,
you know, before we put any pen to paper or we have any
discussions about player experience.
We always start from, you know,
the world that Dave and others have kind of built.
- Yeah.
I mean, you know, and again, it's also the thing of,
the Pyro, I think was first initially conceived very
early on in the process.
But once we finally are tackling it from a realistic,
practical, how we're going to build this,
what is each planet going to look like.
You know, it's important to ask more questions
about...to flesh it out more,
because we kept it intentionally kind of vague,
because we want the art team to...you guys,
to do what you do and the designers to do what they do.
- So when we started that exploration process,
we knew we had, like,
a ballpark that we needed to stay in.
So we literally thought, okay,
how do we design a system?
And fundamentally, it kind of comes
into maybe three key areas.
So because we're a space game,
the establishing shot of that planet is very,
very important because it describes everything from,
you know, continent breakup, fundamental palette.
So right from the get go,
we started to sketch in ideas of what the key
establishing shots were going to be like.
And then from there,
then we jump into key art.
So key art is basically
on the surface.
What is the mood?
What's the tone that we're expecting to see?
And as you say, like,
the first one we wanted to tackle was Pyro I, because,
you know, David described this wonderful picture.
And it was already clear in our minds about what it
wanted to look like.
So we hit that first.
And, you know, we wanted something hostile.
We wanted something hazardous.
Also, as part of this process, is,
we knew our current tech limitations,
but we also knew what we wanted to do in terms of our
future tech, you know, future planet tech weather.
You know, so we kind of went
crazy with ideas as we were exploring.
So, we went through the various planets,
did some key art.
And again, put them up on the board.
And just to validate,
we all keep them within that palette,
but we're getting that diversity.
We're getting that diversity of color, hue,
value structure, silhouettes, composition,
because even within something
like Stanton, there's variety.
You know, that was very important for me and the team,
where you want to feel like you're on a space rover.
You can travel around.
But now we're going to a complete system.
So we continued that idealization process there.
So we had the establishing shots.
We had some key art.
And then from there, as we create, like...what we call,
like, breakout packs.
This is where when we're talking through with design
that, you know, what are the interactables that the
player maybe will come across?
What are the minables, what are the harvestables?
And then from there,
we start to build out little breakouts for all those
acid packs that will go to the team.
Now, from there, like, we did a first pass exploration.
And what we did is we put it all together on a single
boarder for Chris.
So have almost like a commander's
view of the new system.
You know, we showed to yourself, Dave,
we showed it to Chris, we showed it to Todd.
And right, you know, on one sheet,
you've got the establishing shots,
you've got the key art and
you've got the breakout.
And for me personally, that's how I like to work.
I like to see that.
And like I said, a commander's view
of an entire system.
And then from there, you can kind of tweak, adjust,
and, you know, mold things into what player experience
we want to put forward.
So that was a snapshot of the visual exploration
process we use when designing a system
from the ground up.
Now, we can take a break from us talking and go to an
art video, a sizzle video created by the art team.
And what this will show is,
it will show a kaleidoscope of planets and moons
from Pyro, and it will also showcase some of the latest
and greatest art techniques, and processes,
and tools that the art team have.
♪ [music] ♪
Awesome.
I'm falling in love with Pyro.
And hopefully from seeing that video,
hopefully you guys are too.
So as a continuation now, we can jump to Sebastian.
And Sebastian will talk to you a little bit more about
the cloud authoring process and some of our
latest cloud tech.
Then we can jump to Maximilian.
Maximilian will talk a little bit about geology
creation, how we create that type of biome.
And then lastly, we can go to Ozlem.
And Ozlem will go into a lot more detail about how we
take some of the concept art that we've been showing
of the botanicals and how we
interpret that to in-game artwork.
PLANETARY CLOUDS IN-GAME DEVELOPMENT
- [Sebastian] Hi, my name is Sebastian,
and I'm a principal environment artist on the
Planet Content Team.
I'll be talking a bit about the data that defines the
visuals of the volumetric clouds and how we create it.
Crusader was our first astronomical object that made
use of the volumetric cloud tech,
that's being built by Carson, Benson, and others.
While working on Crusader,
we learned a lot on what kind of data gives us which
results and what it's better to be avoided.
With the tech being new,
we also needed all new workflows for it.
We are currently building more tools for producing the
data, so we expect to get better,
more complex results in less time in the future.
We are evaluating everything from a very manual process
that involves painting every pixel,
to a fully procedure one with
little to no artist input.
And we will probably end up somewhere between the two.
This essentially means that what you are about to see
is very likely subject to change.
Due to the way the shader works,
we can either throw random data at it and hope
for happy accidents,
or we can be very specific with the data and what kind
of cloud formations come out of it
in certain areas of the planet.
For most use cases, there are two types of textures
that need to be created.
The first of which is the global property map,
which determines what type of cloud is being used
at any point on the planet's surface.
It is also used for controlling
the color placement of non-water-based clouds.
But I'll get to that later.
The other map is for defining the types of clouds,
and it's named accordingly.
The cloud type map allows us to control the cloud
density and the impact of the two separately
[inaudible] noises,
which are detailed in definition to what would
otherwise be fairly low resolution shapes.
The way the two textures intact is may be best compared
to forming a vase out of clay on a pottery wheel,
and that's kind of what we're going to do now.
In this video, we are revolving half a cylinder vase
around a circular pattern which gives us a vase-like
shape and 3D space.
The big difference to a pottery wheel though is that we
cannot only fill data in the shape of a circle
but ultimately whatever shape we want.
With the density channel,
we can control how thick the clouds appear.
White pixels represent very dense clouds.
Black pixels produce no clouds at all.
And then we also have everything in between.
There's always a tiny bit of impact from the tiny
noises, which you can see to have an effect on the
lower density regions.
The shaping noise and its controller texture are the
most impactful in terms of turning
[inaudible] volume into something we can
clearly identify as clouds.
How much it gets to affect the shape of the clouds
depends on the brightness and the corresponding channel
of the cloud type map.
By combining density and shaping noise,
we can model everything from dense clouds to soft, more
[inaudible] shapes and everything in between.
The last of the cloud type
map channels controls the erosion noise.
It is lower resolution than the shaping noise,
since its main purpose is to add an extra layer
of small detail.
We usually just add it everywhere,
unless we specifically want soft clouds
with less definition.
Black values add details in the
way the tiny noise is offered.
While white values invert the noise and medium gray
values mean that the noise has no impact.
Maybe you can already get a feeling for the complexity
of the system and how every pixel in every channel can
have a dramatic effect on the end result.
Another thing we can change are
the tiny feeding noises themselves.
By default, a cauliflower like noise is used for the
shaping to model those fluffy
sheep-like cumulus clouds.
But by changing it to a different feeding noise,
we can produce some more abstract,
large shapes that wouldn't normally occur on Earth.
This is an area in combination with different global
data, we keep investigating to produce more adient
cloud formations in the future.
We've been advancing this approach in Pyro 5,
another gas giant, which brings me to the other use
of the global property method.
It has a second channel which in combination with
collaboratives, is used to control the flow color
of the clouds.
So not so physically correct
coloring of the gas giants.
We sometimes have to restrain ourselves to not make
brightly colored balls of cotton candy.
There are a lot more settings that allow us to tweak
everything from how the clouds are shaded and shadowed
over the global impact and frequency of the detail
noises to parameters that drastically change what
results the textures have shown
[inaudible] produce.
You'll have to be with us as we figure out if that is
the best combination of settings and how those might
change once all the features that are still planned
eventually get added.
By now, you've probably seen a fair amount of
volumetric clouds as part of this year's CitizenCon,
and are quite likely to see a bunch more.
Because of that, and since I'm still an artist at
heart, I'll leave you with this bad drawing of a cat
instead of murky cloudscapes.
Thank you for your time.
- [Max] Hi, my name is Max,
and I'm a senior environment artist at CIG.
I am part of the planet team where my focus is on
planet and asset creation.
I want to give you some insight into how we transform
simple terrain shapes to a final biome.
Plus, a little preview of what
you can expect in the future.
When creating a new biome,
we start by assigning ground textures
to the terrain geometry.
For this research and development desert biome,
we chose a selection of different types
of sand and soil.
For additional depth and detail,
we have the option to use displacement mapping.
The next step is adding our
first layer of ground cover assets.
In our game, ground cover is any low-cost asset up to
knee height, which does not require collision and
allows us to use a lot of these assets to create a nice
level of density.
Here, we use a mix of gravel, patches of moss,
and dry grass.
After that, we add slightly bigger assets in the form
of clusters of desert bushes to give context to the
smaller assets and add variety.
We finish the objects scattering past by adding
individual larger rocks and arrangements
of small rocks, which give the player a better
understanding of how far away something is
when walking, driving, or flying over a planet.
For performance reasons,
we use a range of settings like randomized rotation and
scale values to get as much variety as possible out of
the number of assets we created to mimic a level
of complexity that feels organic and comparable to what
you find on Earth.
Something that we have been missing on our current
planets and moons are massive rock formations due
to tech limitations.
Some of these limitations have since been solved.
For example, we are now able
to render assets much further.
Because of that, we recently kicked off the research
and development phase during the production of the Pyro
System to find workflows for the creation and
distribution of cliffs.
Full disclosure, though,
this is early in development and heavily work
in progress, but we still wanted to give you a little
glimpse of what to expect in the future.
The challenge for us will be to figure out how we can
make these assets look as good as possible
from all angles.
If a player walks up to them on foot,
they must look just as good as when a player decides
to land his ship on the highest point of a cliff.
But we are excited to add an even more epic level of
scale to our game.
That's it for me.
Thank you for watching and
enjoy the rest of CitizenCon.
- [Ozlem] Hello.
My name is Ozlem, and I'm part of the organics team.
Today, I want to talk a bit about how we build the
different biomes on Pyro III.
Pyro III is a planet with very distinct biomes.
For example, we got the yellow moss biome that is a
strong contrast to the dark volcanic regions.
We have some icy areas, polar fields, acidic fields,
different coastlines, and a lot more.
When working on a biome,
the first thing we do is to have a look
at the concept art.
We do an asset breakdown for all the elements we need
to recreate the scene.
By doing so, we get more information about what kinds
of rocks and vegetation assets we need.
The proportions of the assets in relation to the
character, the distribution and frequency of those
assets on the planet,
but also the amount of coverage per biome
on the planet.
And we can also get information about the color
palette, the terrain colors,
and what to scatter on the coastlines.
The last thing we can see from the concept is assets
and ground materials.
We also try to reduce the amount of the asset packs
because of performance and time constraints.
Instead of doing 50 unique rock,
we can achieve the same result by using just three
with our procedural scattering system,
since the assets will be scaled and rotated randomly.
After figuring out all the necessary elements,
we start with the whiteboxing phase.
This means doing a very quick mockup of the scene by
using very simple assets.
The white boxes should just represent the shape and
color of the final object.
We do that to see if the asset breakdown we did
beforehand is working in the 3D space as well.
At this stage of the process,
we can still change the whole look of the scene if we
don't like the outcome yet.
We can say, let's make the rocks five times bigger or
blue instead of red, and so on.
Or we realize we need to do some research on a specific
asset to solve it visually.
Which was the case for the moss, for example.
When doing R&D on the moss,
we were trying different shapes and sizes,
and we also had to figure out how to do the moss trends
that are covering the whole mesh.
To make the workflow for the moss trends a bit easier,
we used Houdini to procedurally scatter them.
Otherwise it would have been too time consuming to
place every single moss strand by hand since there are
several thousands of them.
After figuring out how to do the moss trend,
we still didn't like the overall shape of the moss
as it was a bit too blobby and yellow.
We wanted something that looked a bit more natural and
integrates better into the terrain.
So we created some rocks with
a moss plant on top instead.
We broke up the moss shape even further because it
looked a little bit too molten and we added different
kinds of moss trends to get a little bit more variety.
In the end, all these things got us to a result that we
were satisfied with.
The usual approach to setting up a biome is to start
with the largest elements first and work your way
to the smallest one.
If we take the moss preset as an example,
we would start by adding the largest elements first,
then adding some smaller moss patches around it to
create a nice fall off.
We continued with adding some flatter grass to make it
sit nicer on the terrain.
But then we realized we needed something bigger to
bring the elements closer together.
So we decided to add some high grass as well.
The final steps are adding some ground cover like small
rocks or tiny moss.
As you can see, while building a biome,
we need to do several iterations to get
the best visuals.
Thank you for watching.
- Thanks to Seb, Maxxy and Özlem for
showing us their work.
So when we started looking at outposts and started
really from a ground up on how to make it so that
there's more diverse gameplay in there.
The player can approach it
in multiple different routes.
There can be combat encounters.
There can be social encounters.
So we needed to kind of rebuild and rethink the way
that we were doing this.
We started honing in on what was working,
what wasn't working, and then did a lot of adjustments.
BLAZING THE TRAIL COLONIALISM OUTPOST EXTERIORS
We've had outposts in our game for some time.
You know, when we started to hear on the art side,
what the design requirements are going to be,
fundamentally thinking about these as modules,
thinking about them as thematic modules and,
you know, very specific.
Then, you know, already, like,
the mine was going to like, okay, we're going to need,
like, a paradigm shift in terms
of how we visually present these.
You know, what could these
settlements kind of feel like.
And, you know, as with everything with outposts,
it's a gameplay or it's a location archetype.
It's the smallest, probably one of the smallest
location archetypes that we have.
And then in time, that will lead to, like, you know,
villages and towns.
- Yeah.
Thinking about how we wanted to push this forward.
I mean, Chris has always talked about putting outposts
into players' hands.
And so we needed to think about how would this expand?
How would the players be able to make these homes
feel...you know, homes, or outposts,
or even businesses feel unique for the way that they
want to play.
And then there were even tools that we had to create in
order to actually be able to embed these into the
ground and make sure that it worked much better than
what we did in Stanton.
Because with those, we had to have them kind of on
stilts, and inns, you know,
just the points of contact were
very limited for the ground.
- Right.
If I connect these modules together,
how do we get something that doesn't
feel like [inaudible].
- Well, I know the design we came up with,
in particular, Andrius and Dan came up with a long
list of things.
You know, okay, here's what we'll need in habs.
Here's what we'll need for utilitarian.
Here's what we'll need for defenses.
Here's what we'll need for power, and oxygen,
life support, and so on and so forth.
So there was a very long list.
And then it's how we take those and make them feel
unified and visually unified together.
- Yeah.
And fundamentally, the thing that probably got us the
most excited is finally we started to think
about these as, like, unified
settlements, you know, base building.
So, as you can see on some of the concepts,
we deliberately presented early exploration shots
in this kind of, like, semi isometric view to see,
you know, how does it feel if I'm laying out my base,
how these modules kind of, you know, tie together.
And, you know, it kind of got the team excited.
And finally we were thinking, all right,
these settlements are going to be more than just,
you know, like a single outpost,
but more like a collection of modules.
So just to continue on with the module building and the
module creation, we can jump to Christian.
And Christian can talk in a bit more detail about the
visual development process we did for creating the
exteriors of these new outposts.
COLONIALISM OUTPOSTS EXTERIOR CONCEPT DEVELOPMENT
- Okay, so we have talked a little bit about the
colonialism, and now we're going to show you a little
bit more about the modules.
So the very first thing that we did was creating all
the primitives and all the primitive shapes into 3D.
So as you can see here, we
have a lot of variety, right?
There is the cubic coming in.
There's the cylinder coming in, the spheres coming in.
For example, if I take this building over here and I
duplicate it and move it around,
I could just simply grab some of the other ones and
combine them together.
And you will see later on that this is one of our
archetypes or one that we pretty much like.
Right.
So you can see here already,
there's a lot of variety of entrances,
maybe some garages, maybe some smaller entrances for
those NPCs, or for the players, right?
And if I zoom in, all of a sudden, you can already see,
like, how they react to the environment
on the overall scale.
Right.
So if I pan over here and you see these buildings in
the background, so you're always having a first person
standpoint or a first person view.
So we're not only creating those entrances,
but also smaller details and very briefly looking
into the modules.
So what you can see here is the very first concepts for
the solar panels, for example, or the top mounted,
the roof mounted solar panels.
In the background, you see some other nice details that
we can just pick and put on our buildings.
Right.
And some of the very last that we did,
pretty much those.
So those were one of the archetypes.
And you see there are small
buildings for housing or housing buildings.
There are some building types that are more communal.
We have some secondary and tertiary buildings like
those radio towers.
If you imagine, you're a colonist on a planet.
Right?
There are multiple settlements on a planet.
How would they communicate with each other?
So we have kind of a radio tower.
Or some of those cooling devices.
So if you imagine, maybe
there's something on the ground.
There's an even bigger facility on the ground because
you're on a very hostile planet environment.
So you want to store
your very sensitive data underground.
And we were looking at those hints of life.
Maybe you are kind of a farmer.
So you see already, this is the first archetype.
This is more cylindrical.
And there are some storage spaces
coming in here and there.
So where would you store your oxygen or your water?
Gases, for example?
All of this is just a consideration from our side.
Going over to the next one, this is more paramedical.
So we were looking at also, again,
the same materials or changing up the materials.
So now it is, again,
more concrete and the color palette is changing.
There are some of these storage coming in and going
then over to the next one.
It is, again, looking at different materials.
There is some storage buildings that are not in one big
storage facility, but it's divided into smaller parts.
So you have to walk around your settlement and see,
like, okay, I can put some stuff in here.
But if I need something else,
then I need to walk over there.
And there are some playing around with some more
entrances and windows.
How do they react to the environment?
Right.
So this was just one of the
very many files that we created.
So those are mostly buildings,
but with different different files for assets and props
and how they would fit inside these main architectural
style if we wanted to see more involved.
Right.
So just a very early version
of the refinery, for example.
But all of this in the end has given us the opportunity
to just cherry pick the best ideas that we felt
appropriate for this specific colonialism style.
And where other people were able then to just grab the
best parts and then use it in the actual game engine.
Yeah, this was pretty much the concept development for
the colonialism modules.
I hope you have a great time and wish you all the best
for the next panels that are coming up.
BLAZING THE TRAILS COLONIALISM OUTPOST INTERIORS
- Awesome.
Thanks, Christiano.
So that pretty much covers the work
we've been doing on the exteriors.
So now let's jump to the interiors.
So we pretty much had to follow that same idearation
process that we did for the exterior,
but for the interior now slightly more simple.
We knew there was a few key
areas that we needed to design.
First, it's the social space.
You know, this is basically
these kind of communal hubs.
We knew we wanted like that open kitchen,
seating areas, windows.
An area where people could kind of hang out and relax.
And then second to that was habitation.
You know, we knew these are going to need to be abodes.
We knew we needed bathrooms, hab units.
But again, nothing in here
would be, you know, pre-manufactured.
So we wanted actual beds, not racks of beds.
So everything about this process was about, you know,
creating good design,
which you would look at and relate to and think, oh,
I could see myself living there.
I could see someone living there for quite a long
period of time.
So inhabitation, you know, it's soft surfaces,
soft shapes, but again,
something which felt fairly integrated
into the core architecture.
In contrast to that,
we knew we needed technical spaces.
You know, these could be used in the future to be,
I don't know, soil processing rooms or anything really
within a technical bracket.
So this one was quite a tricky one, because, again,
we needed to describe a feeling of age and, you know,
a type of historical depth in this.
So we tried a few, you know, visual cues like,
you know, there's the physical tape deck,
the clicking buttons.
You know, again, to give you that feeling of like,
all right, this isn't necessarily like a modern
technology level, you know.
And then the last major
visual archetype was engineering.
So these are the type of spaces that could be a power
room, or an engine room,
or some areas if your armor got beat up,
you could repair your armor in there.
Basically, it's a language which will enable us to
create a variety of, like, engineering type spaces.
And then once we've established a spread of visual
archetypes, we knew that they were all
working well together.
We could take that as a format and then start to think
more about actual themes that we wanted
in these outposts.
- Yeah, kind of looking at who would be the people that
would be inhabiting it.
What are the circumstances that would
drive them to be there.
And so we sort of came up with, like, I call it,
the triangle of kind of the edge points of sort
of the independent, the outlaw, and the corporate.
And, you know, where the inhabitants would fall
somewhere in that spectrum of three points.
And it's also important to note too, you know, that this
stuff would be applicable for the stuff we did on Stanton.
Like, if we wanted to add these backwards instead as
well, but it wasn't just exclusively Pyro based.
- Basically, when we was doing the design process,
we pretty much focused on independent,
mainly because that was our baseline.
It was very easy to kind of design these and visually
design these spaces to...
Is that like an independent farmer,
is it an independent miner.
And then with that, we wanted to really create an
experience where you walked into one of these outposts
and it feels old, it feels relatable,
but it doesn't feel recognizable.
Kind of similar to if you went to, like, a historic ruin
or historic port that you'd never really been to before.
- Yeah.
Somebody's old farm.
- Exactly.
So we did a lot of exploration process of, like,
what type of artifacts would you find now?
You know, how did people used to decorate the house in
this time period?
You know, you could still see patterns, surfaces,
shapes in these independent outposts.
- You know, even early versions of modern technology.
So you could see that, you know, oh,
this is like the mobiGlas that I have,
but it's an older mobiGlas or something.
Just as an example.
- But also when we were...
Even just to back up a little bit,
and when we're talking about the planets,
we have a certain style or we have certain amounts of
points of interest that we want to go to and how we
pull the player around the universe.
And so, Dave, and I, and Will,
and others sit down and talk and say, all right,
what do we need here?
And all right, well, we need mining facilities.
And then that helps to inform Ian and the other design
teams and art teams of, all right,
is that an independent theme?
Is it a corporate theme?
Is it an outlaw theme.
So these are all kind of layers.
But the first and foremost, it's, oh,
this is farming or this is mining or this is,
you know, cargo.
- Because looking at something like Pyro II which,
you know, again, starting from that sort of original
pracy sentence of the planet was the idea,
was like that was a heavily mined, mined out planet,
that had been kind of stripped of a lot of resources.
So there would be remaining infrastructure that would
have been corporate back in the day,
but is now independent or now even an outlaw setting.
And then there would be the ones that would just be a
straight independent one and stuff like that.
But yeah, exactly.
Like you said, you know,
we'd start start with that sort of the base and then
apply the theming to it to kind of...
- When we were thinking about the theme,
we kind of wanted, like, a space catalog, like,
a furniture catalog.
So I know this is quite big for Chris, is,
we kind of went down that process of, okay,
let's design this one independent outpost in a few
different ways, like how could people have decorated it
in many different ways.
And is quite a fun process because you basically create
space furniture catalogs, which again,
are going to be ways for the developers to be able to
dress and will build.
But eventually, maybe it's a way for people to decorate
their own spaces, you know.
When we're thinking about the outlaw versions of these
outposts, again, the process is very similar.
You think about the visual rule sets,
which would turn this into an outlaw outpost, namely,
you know, has been taken over by hostile intent?
You know, is the signs of combat,
is the signs of destruction still so present?
The actual physical act of
occupying one of these outposts.
Have they defended it?
Have they boarded it up?
- Yeah.
Could be any number of situations.
Yeah, it could be outlaws are squatting here.
And they're operating at this base,
which makes it a potential combat space.
Or is it, you know, was it a potentially an independent
refinery that outlaws attacked and killed everybody
there and now...
- ...is a drug facility?
- Yeah, exactly.
- And then lastly, on the corporate, you know,
it's something that we really want to advance
out into in the future.
But that feeling that this location is owned by a
corporate umbrella, you know,
that would tie in to the branding.
You know, maybe it ties into the costumes that you'd
expect the NPCs to be in there.
You know, so there's a huge amount of visual world
building that we can do to, you know,
present these outposts in a few different ways.
- And even potentially reputation as well.
Like, we talked before about that idea that, you know,
if you do missions for corporate outposts,
that it reflects on your
general relationship with that corporation.
- I mean, that ties into the clan tags.
Like, maybe you've just come from one of the space
stations that, you know,
was occupied by a certain gang type,
and then they sent you to a settlement on one of the
services of Pyro.
And clearly, it's been, you know,
tagged by a different gang.
So you basically want that
read and that consistency throughout.
Now, one of the outpost themes that I was quite excited
about getting into was the idea of a trading outpost.
You know, we've been talking about, you know,
buying and selling for a while,
but thinking about it in a Frontier context,
it's almost like the money is kind of worthless,
but it's more about the ability to barter or trade.
So, fundamentally, I thought it'd be cool,
that if we kind of design a module which focuses
around one of these trading post.
So within a planet, you know,
it's where people would kind of trek to and barter or
trade components and then go back.
You know, I was talking about the idea of,
if I had a farm in the middle of nowhere, like,
would I want a load of credits or would I want that one
component that, you know, [crosstalk 01:07:15.538].
You know, we took that idea and we ran with it.
And we did some visual exploration into what would a
trading post be like on one of these Frontier outposts.
So as you can see on the images,
we wanted that feeling of,
the majority of the stuff around
this outpost is pretty much junk.
You know, spaces isn't at a premium.
So they just keep it outside.
You know, maybe it's rusting, maybe it's rotting,
maybe it's getting overgrown.
But I love that idea.
As you're approaching one of these settlements,
it's very easy to understand, all right,
this is a trading post because, you know,
just all of this stuff, like,
hodgepodge around the outside.
- Well, and it opens up another aspect to it,
which is the characters who inhabit it,
because the sort of general shop experience that you
have with the storekeeper is very conventional.
You know, what we've done so far has been a lot of
franchise stores, actual companies that are
selling wares, you know,
who have customer service and stuff like that.
And the idea being that out here,
the experience is going to be much more different.
It's not going to be that polished.
It's going to be much more
of a personal interaction with somebody.
So it's been really fun talking with the AI and
behavior guys to try and work out exactly like how is
that dynamic supposed to work,
and feel like for the player.
- All right, cool.
So that was a little bit
about the interiors of these outposts.
So let's throw it over to Eric now.
And he can go into a lot more detail into the visual
design process we did for the interiors.
- Hello.
I'm Eric Gagno, principal concept
artist on Star Citizen.
Today, I will present the interior colonialism outpost
concept and explain a bit how the
preproduction process works.
The goal is to create an interior design for the
homestead colonialism hotbox.
It was the first time we had
to create a timeless design launch.
We had the objective to create something warm and with
a cozy feeling interior.
At the beginning, we started from this concept art made
by Christian Doretz.
We have a lot of information in
there to inspire the interior design.
In those interior, we have the specific zones,
social area, place to eat together , play game.
There is the bedroom, place to relax,
have proper personal space, and of course, sleeping.
The engineering room,
the place for the building machine, will mend things.
The possibility to survive there.
The technical room, the appropriate space to analyze
minerals, some elements of the planet,
entrance used for storage material
and stuff to go outside.
At the beginning, we had an overview of the plan that's
helped to organize design.
To create all of those areas,
we need to do a lot of exploration in this social area.
For those sketches, we want the centerpiece on the
ceiling, could be a light, fan,
or whatever that could be called.
We feel the curvy shape of that space.
Here on this sketch,
I play with a very contrast values and the greenish
color about it.
That one is the best.
Long vertical windows from the side,
let the light inside the room.
After evaluation of the most relevant sketch,
we do a 3D blackout.
As you see, this 3D blackout follows very closely to
the last sketches.
From the screenshot of the 3D blackout,
I did a sketch over in the Greytown value that helps
to better organize the coloring things to make sure all
the elements fit and will live together.
After this, I like to do a 2D elevation concept.
It's a good way to make sure all elements fit together
and there are ratio proportions between each of them.
The final key shot of the
social area bringing its alive.
Nice lighting come from the windows.
Cozy mood lead a soul to this social area.
Now my concept art coworkers extract the elements from
this key shot and rig down the props
to define more accurately.
First, the homestead [inaudible] counter
done by Danny Chen from the UK.
That concept is the perfect
blueprint to start the production.
The color lighting people food is there on this one.
More cooperation on specific zones
of their original kitchen counter.
Some extension are had to properly
convey the intent of each part.
All the details are there to
design a fully functional stuff.
For the bedroom area,
the process is the same as the social area.
The sketch phase is essential.
As you see here is an example of the rescaled sketch.
From one of those shots,
we get a validation from art directors and CR.
And boom, this is the final one.
To detail the engineering room,
we again go back to the painting technique.
This process, again,
is key to send us in the right direction.
The detail of the missionary, cabling, metal, grates,
really helped convey the ambiance of the room.
And that also informs what players will have to do when
they go to this place.
For the technical room,
we wanted to make sure the technology came true.
Again, the same process where we start from manual
painting to set the tone and then deep dive
into color elevation, and then the final key piece.
To make the homestead a living space,
the bathroom props are important to define the
functionality of futuristic hygiene.
Finally, let's exit by the entrance.
This is the first exploration I did for Star Citizen.
The goal of the homestead entrance is to show what the
player has access to and set the overall ambiance
of the place.
A huge thanks to all for helping to make the final
result in the game match the amazing work that is
produced during preproduction.
I sincerely hope you will enjoy living in those
homestead in Star Citizen.
Thanks, everybody.
- Thanks, Eric.
Awesome stuff.
- Now that we've shown a lot of art and talked a lot of
theory, we want to get into the game and show off what
we've been working on.
We're going to be showing you kind of multiple play
throughs and how it changes based off of what you do
and how you have action with the certain game.
PYRO IN PLAY WE'RE ALL FRIENDS HERE
- So here we are waking up in 400i,
that will be released in 3.15.
This is the competitor to the constellation.
It doesn't compromise cargo for vehicle storage.
It's faster, more agile than the Connie,
and it can run with a smaller crew.
So this is the captain's quarters,
and then we'll go out and see a little bit more of the
habitation deck, and then make our way to the cockpit.
So this would be the social area that you can meet and
eat, and basically plan your next mission.
And then, from here, we'll go to the cockpit.
So, here, we're over Pyro III.
We've come here for a mission to acquire an artifact.
And you'll be making your way down to a trading post.
So I wanted to just give you a quick overview,
and then we can start talking about the planet.
- Yeah, Pyro III is, yeah, just a terrestrial planet.
It has a very thin, breathable atmosphere,
but it's still pretty inhospitable, very cold,
as you can see, some of
those lightning strikes in the clouds.
But, yeah, very pretty looking.
- So this is the first time we're actually seeing
clouds above a terrestrial planet.
You know, we went through quite
a few iterations of forms.
What we ultimately ended up on
was something that felt quite dramatic.
Still believable in terms of how
the wind would have shaped them.
But yeah, like, it's showcasing a lot of the more
recent tech that came online.
Also, what we're seeing here is kind of, like,
some distant thunder strikes.
What this, it's kind of, like, a prelude to, you know,
future weather features that will come on board,
you know, and how this will tie into storms,
and ship handling due to the turbulence.
And it's great seeing the rain hit the big glass here
you know, when you go through these cloud banks.
Also as part of the process of shaping,
one of the things we really wanted to do is create
these kind of like these pockets in between the clouds
so you're in these cavities.
Once you fly through,
you get a glimpse of the terrain beneath you.
But, you know, it feels
quite exhilarating to fly through.
Also as well, it's showcasing a lot of the more recent
tech coming on board as well.
So, you know, it's a lot
of optimization's been going on.
So it's way more performant than previously it was.
Also, like, the the level of artifacting that we're
seeing here is substantially reduced,
certainly on highest tech machines.
- It also gives you a great sense of parallax when you
fly through these cloud sandwiches.
- A cloud sandwich?
- Yes.
That's what it feels like.
It feels like you're the meat or
the cheese of a cloud sandwich.
- The cheese of a sandwich.
So as we get out of the cheese.
Another really big feature that was important for me
was, you know, terrain shadowing and terrain occlusion
from the cloud.
So you're actually seeing, you know,
these large areas of occlusion cast onto the terrain.
And it just adds that depth.
It just adds that believability to
what we're seeing in the frame.
And, you know, when you see, like,
dark overcast clouds,
and they're hovering above the mountains,
it finally completes the frame.
Especially when you see the distant rumbles of thunder
in a distance.
- So, James Cameron, who's doing the the run through...
Yes, that is his name.
He will be taking us down to the outposts.
The goal for us is to basically make 50 of these,
whether they're inhabited, or derelicts,
or even basically inhabited by a
farmer or inhabited by a gang.
So the goal is to have these act as different factions,
so that you can develop different rep
associated with them.
And you can start seeing how big these outposts stretch
too, with the comms tower that's behind us,
and then even some of the AA turrets that you'll
actually see up close and personal.
- That was a really good approach from James there,
a good landing.
That was a good solid 3 out of 10.
- Three out of 10?
Geez.
- Ian's a tough grader.
- Yeah, I'd go six, at least.
- No one's ever got a six.
- You got to watch me land then.
- So here we'll go down to the technical deck.
Show off the cargo area as well as the climate
controlled component areas.
And then onto the gravity generator
room and the stairway out.
So you'll be able to learn more about the ship in one
of the later panels that we have with Ben,
Paul, and John.
I think the team did a great job on this.
I think this is one of my favorite skins, yeah.
- Yeah, they did a new skin,
just something that felt a lot more, you know,
suitable for Pyro but you can see how it feels suitably
worn and weathered to fit into these these climates.
And, you know, what we're seeing here is first boots on
the ground on Pyro.
I think it looks great,
especially in contrast to what we're seeing here,
is like, actual AI on the terrain walking about,
going about their business.
And is that an AI terrain there?
- It is.
And radio comms towers and all these other elements
that we want to make sure that are interactive for the
player and allows them to go and
explore or use to their advantage.
We want them to be able
to interact with these different items.
- Here you can see, like, various outpost modules.
You know, to the right there,
we've got the garage unit.
You can see the infrastructure on the roof.
But this large beautiful, you know,
archway here kind of signifies the main entrance,
the primary entrance to the main social module.
I think the air looks great.
You know, fits in with the art style beautifully.
- The team did a great job on this.
- And then we've seen the concept art previously in the
day, and then, you know,
here you can see it translated in game,
and I think it absolutely looks fantastic.
You know, the radio forms is
quite special to this art style.
And you can see how that complements these archways
that lead into other areas of the outpost.
- So, with the AI, we want to make sure that it's
living, it's breathing.
If you look back a little bit,
there was a chef actually cooking.
There are security guards here to make sure that
they're actually protecting their investments,
and protecting their home from strangers.
But you have good rep with them.
And so they allow you to kind of enter into certain
areas that other players wouldn't be able
to enter into.
- We also got a quick shot at
the loadout that James is playing.
So it's a female loadout,
but it's also showing the backpack, which is new.
Also some of the new here as well,
which is rendering much nicer.
- So here, the player will make their
way out to the training post.
Go see the dealer and acquire the artifacts.
- And for the trading posts, you know,
we wanted to get all of the junk on the
outside as well, you know,
so the player can see it as they're approaching.
We wanted, you know, as many tops as we could,
and you can see it's using the new softech shader.
So these are reacting to the planetary wind, you know,
the same force that the tall grass and the moss in the
ground is reacting to as well.
- Other thing with the training post is,
like Ian spoke about before,
the inventory and what they'll be able to actually sell
here will vary depending on where they're
at in the solar system.
Are they close to a jump point where they might be
coming down and using this as a chop shop?
Or are they in a very rural area that's, you know,
they care more about the frontier lifestyle and being
able to survive versus money.
- We passed the kitchen as well on the way back.
That's the local diner for this outpost.
Tough crowd.
- Also, so in the inside as well, you know,
we wanted this kaleidoscope of colors and shapes.
You know, like, it's literally the dealers displaying
all the wares, everything they'll have
outside in the open here.
- [Man] Well, welcome.
Take a look.
I'm sure I have what you want.
And if not, I'll have something just as good.
Oh, yeah, very good choice.
Very good.
- So after 5 million credits of disposable income,
we get our first look at the Hadesian artifact which is
obviously going to be...is sort of a super rare thing
that you'll hopefully be able to start finding
in the galaxy.
Which is sort of if you're familiar with it,
the lord of Hades was the old civilization
that destroyed itself.
So somehow this trader's gotten
their hands on this artifact.
- So here we're showing one way of actually playing
through this area.
It really depends on your standings within the gang and
how they want to deal with you.
And then what's the dealer going to do,
what's the dealer going to charge you.
And from there, we have different ways of actually
showing this and we can look at option two now.
PYRO IN PLAY THE INEVITABLE BETRAYAL
- So here we're going to run it back a little bit and
show off a different way of entering
into the training posts.
This is a little bit more straightforward versus in
demo one, we we took a side route
through the social area.
- So yeah, this is just some additional warehouse space
that the trade inputs would have.
And you can see it will
lead directly on to this courtyard.
And for the keen eyed people,
you'd see that the barbecue still not being eaten yet.
- The grill master would be fired.
- Yeah.
Still full of wieners.
- So with this area again,
we just want to make sure that it's filled
out with items, filled out with different things that
you can interact with and possibly buy.
It's like Dave said in beginning,
we want the stores to feel different here.
But it's still making it feel believable.
- Quick reference to some additional traversal areas
there on the right when we came in,
- Well, welcome.
Take a look.
I'm sure I have what you want.
And if not, I'll have something just as good
- Yeah.
The guys had a lot of fun dressing these areas.
There's a lot of storytelling going into it.
- So here, we decided not to pay the price.
And we want to...
We don't mind losing reputation with with the faction
and decide that we're gonna take the
artifacts through betrayal.
- Just take it straight out of the backpack.
- So here we've got different routes for the players to
enjoy and to use to flank.
And also navigate around.
So each area will have different secondary and tertiary
routes of navigation.
James was really just trying to scare him there versus
to kill him.
- That was intentional.
Good.
- You can also...
If you notice real quick,
there was a...the civilians are actually cowering
as opposed to fighting which
is kind of similar.
Typical.
- So, again, here, the player have a choice.
You know, do they actually want to interact with the
civilians or does their conscience get better of them.
- I think James made the right choice there.
- He was nice.
Yeah.
- One of the things when we was playtesting this lot is
when you see the enemy AI kind of fanning
out across this terrain like that.
It's fantastic to see.
It feels really great to see in the base sort of wake
up to you and actually trying to exfiltrate.
Also I know it's under, you know, combat stress,
but that yellow grass just looks fantastic.
That's how I play.
- So here James just wants to get out real quick.
So as we slightly hinted to in the first walkthrough,
this is where the AA turrets will come alive.
And basically, if you're not fast enough as James
isn't, with your countermeasures,
then they'll take you down.
So what we saw there was the player went in,
and based off their actions,
the faction changed against them.
And then, basically became very aggressive.
So in this last playthrough, what we'll show you is,
if the faction is already against you from the
very beginning, and what are different ways that you
can go about it.
So here we are in our last walkthrough.
Since you're all by yourself,
we wanted to show the player take a stealthy route
versus if you were with friends,
you could go in guns blazing.
But this allows the player to come in,
access the outpost from a different side
than what we've shown.
It also allows them to clock all the AI and see how
they want to approach the problem and see what other
secondary or tertiary routes would be open to them,
either via the ladder or maybe a possible door.
- Good night.
That was a great shot.
Also, one thing we did as well, as Todd said, you know,
we changed the time of day,
the wind is slightly stronger.
So you'll see the gorgeous yellow grass blown just a
little bit more intense than before.
Also, what we're seeing here is like something to imply
the frontier living.
You know, maybe the growing crops or vegetables out
here, but it also gives a kind of like a soft cover
approach to the perimeter of the base.
Nice.
- Also, with it being a different time of day,
this allows us to show off the AI having their
24-hour schedule, so that they can be in different
areas when you approach it.
So if you approach it at night,
or you approach it during the morning, you know,
they'll be doing different things,
whatever is valid for their schedule.
- That door's locked,
so there's no going through that way.
But what James does actually see here as he's skirting
up the next AI is, you know,
just checking the roofline.
But as I said previously,
we wanted as many kind of like views in to the base
as possible to see if the player can continue to keep
context of what's inside.
- But also when you're inside,
it allows the player to have context of where they're
at within the actual outpost.
And that was a great shot.
- The AI fell beautifully on the already called out
beautiful yellow grass and moss.
So as James is looking back,
what he's doing is actually making a mental map of,
you know, possible routes,
possible advanced traversal routes on top
of the outpost.
And we saw the dealer there in the bedroom,
just end of the day.
- So with each outpost,
there'll be different routes that will be open to the
player or closed to the player.
So some of them might have ladders on the outside,
some of them might not.
Some of them might have basically ways to get in
through the floorboards, other ones won't.
But this is just one version
of, you know, many possibilities.
So here, the player will take a secondary route of
navigation all the way up to the roof.
And then from here, this allows them to be able to
check out any of the AI,
also be able to look at any
of the interactables in the future.
You know, if you got a good reputation,
maybe you need to go and fix different items
on the roof.
Or if you are therefore...
Nefarious means then maybe you want to take out the
power and which will then, you know,
kill the AA turrets or will turn
off the lights in the outpost.
So it allows the player to interact with different
items and then basically create a nice little sandbox
for them to play in.
So here you can see one of those interactables as well
as the AI.
- And just behind these interactables,
we've seen these kind of archways.
Like, right now, these are just kind of empty,
to just illustrate, like, you got a point.
In the future, you know,
these could be maybe customizable or could contain,
like, an age, or like we saw on demo one,
or it could contain like cargo storage.
Basically we tried to design something that was as
flexible as possible.
- So here we're showing off the looting system as well
as the inventory system.
So this will be shipping in 3.15.
This allows bodies to be able to be interacted with and
take off the items associated with it.
Also with this change,
you will no longer have global inventory so you can't
be pulling off weapons that you're going to take with
you to this location.
Everything will be regarding what you
carry is what you have.
And so it really makes the players think about how they
want to approach the problem and then also encourages
them to look around and see if the designers have
placed different things that they can interact with or
use to help get past a certain route or a certain way
that they maybe didn't bring with them.
- And we'll also be including, in 3.15,
the Knick-Knacks app for your mobiGlas.
So now that you aren't carrying everything on your body
and sort of universal inventory.
You'll be able to consult this app to see kind of where
stuff is being stored and get better organized.
- So here, this allows the player to have a quick
little puzzle but just gives them a little
bit more interaction.
And then allows them to go on to what I would consider
a tertiary route, versus climbing up the ladder and
possibly having to deal with AI
or them being spotted by them.
Also, I think the team did a great job on the planet as
well as the outpost.
These are really fun to play and sneak around in.
And, you know, allows for many possible ways of
attacking the same problem.
- What we're seeing here is, like,
James is actually getting up on to through one
of these, like, rooftop storage modules and it's given,
like, the highest point in the base.
And from here, you can actually, you know,
make probably the most informed decisions on how
to approach the next problem.
You know, we're seeing this guard routine here.
And then ultimately, you know,
throwing an item to distract the guard.
- Allows them to go and access new areas.
It's a behavior that we're still working out,
but at least here, we're seeing, like,
the first iterations,
to be able to continue to optimize it as well as make
sure that the behavior is working properly.
- So we just saw that for the first time.
It's like the first rooftop air lock hatch So
previously, you'd route in and out if the
outside wasn't pressurized, like,
we wouldn't have this option.
But now through that rooftop air lock,
you can cycle and then infiltrate through the roof.
And also what we're seeing here is, you know,
potentially scouting out an advanced traversal,
hop into the rafters,
getting on top of some infrastructure and get
in like this overview as we go into the garage module.
- So here, this is placeholder,
but it gives you an idea of, you know,
we want to have different interactables,
different loot boxes laid out around the location.
So if the players explore, they'll be rewarded.
You know, we want to encourage them looking in every
nook and cranny, and enjoying what the outpost
has for them.
- And one thing that's interesting is these garages
won't be vehicles form points.
So it's not like a big kind of, like,
pad in the middle, but it's more like, you know,
if you want to have your vehicle there,
you got to drive it in and park it.
So here, you can see a variety of vehicles just just
laid out how the player would have just parked them.
Just gives a much more believable and realistic design.
- So, again, we're just encouraging different
navigation, different routes for the player
to go and see.
Over to the left back there,
there was a possible way of going into the floorboards
or going underneath the outpost.
Again, those would be opened up or closed off,
based off of, you know,
just how we want to build the outpost.
Not every one will be built the same or philosophy for
the user to make sure that each one
of them feels unique.
And this is just one way of us customizing it and
making each one feel different.
And so, the player won't always
be used to the same route.
So here, again, we're using the inventory system.
We allow the players to go in.
And if you take out a certain AI,
they might have different tools, or different notes,
or different items that you'll need
in order to solve your mission.
- Interestingly, when we was designing these spaces,
we knew we wanted these internal air locks,
but we knew we needed some sort of, like, new, like,
pothole on them too.
So before you commit through, before you cycle,
you know, you can just double check to see if there's
any bad guys on the other side.
- So we got some rag doll bugs.
I guess it wouldn't be a CitizenCon without any sort of
issues or bugs.
- So here, like, previously, the player's been,
you know, on the roof.
They've come down through the
main section of the outpost.
Here what the player's doing is
they go into the underflow section.
So these are vents, but they're more like sub flows.
So they're meant to feel very dark, very minimal,
but you're actually seeing the foundations
of these outposts.
So inside here, the player will need to kind of work
out how to navigate through them.
It's very much, like, a
torch-based experience, you know.
And then within here,
what the player can actually do is work out roughly
where they are in relation to what's upstairs.
And what you're seeing here, like,
this light bleeding down through, you know,
you can kind of make informed decisions or, okay,
that's where that AI was.
Or, right now, the player is
just underneath that main social space.
If you think back, like,
there was a guard in the beginning just
next to the kitchen counter.
But, you know, we've intentionally made these spaces
not necessarily like very easy to navigate because
there wouldn't be a lot of light down here.
You know, the player would have to follow, for example,
like, James is following the blue wire here, you know,
making a decision to, like, hey,
if I follow that blue wire,
I'm probably going to get to something interesting or a
point where I can actually exit the supply space and
get back up above.
- And what I like about him is basically just the
claustrophobic feel of it.
And then obviously the addition of possible secondary
or more advanced navigation.
So either going into prone or just going full crouch.
- So here we come out in the bathroom space that's on
the other side of the garage or on the opposite side
of the outpost, from where we just were.
- It's good rag doll.
- Now the body drag in the shower.
- So here, this is just a
different wrapper on a loot box.
In this case, it's a hamper.
And so the player will be able to really change outfits
and adjust the way that they look so that they can walk
around the outpost and not be noticed.
There will be kind of a
certain time limit associated with it.
We still need to work out the
details on how all that will work.
But the goal is to give them a little bit of leeway.
And so if you look the part,
maybe you're not scrutinized as much and the AI won't
notice you as quickly.
- So here we can see back into the social space but
this time on the other side.
And then this door will lead directly into the
habitation room that we saw previously on the outside.
- Speaking of fun rag doll physics.
- That was a great one.
- So here, the player decided to take the dealer out
instead of actually figuring out how they could open
up the safe.
So they're gonna have to look around the room.
They're gonna have to interact with the body and
possibly see, you know,
is there a way for them to actually open it.
In other cases, maybe the safe
will be hackable in the future.
And in some cases it won't be,
and then you'll need to figure out a different way
of actually opening it.
- So here we spot a little clue, a little note.
And you'll notice the...
What's funny is, like, the name on here.
If you look back and see some of the AI we've been
taking out, you may notice some names.
So here's the clue for the player.
But one of the coolest things for me here is,
the player is holding an item with the clue.
And while holding the item,
they can seamlessly interact with another item
to solve a puzzle.
That's awesome.
- And then here, we get a little bug.
The player was able to acquire the artifact,
and then will be able to do whatever they want with it.
Either sell it or be able to use it somehow,
in a future mission.
One of the things that was really exciting about
watching this kind of back to back to back,
is finally getting to see that freedom of choice.
And it's like, it's really, really...
I mean, again, our locations
are always spectacular and beautiful.
But now, like, having that sort of...striking that
balance between, you know,
the sort of well thought out social space and
construction of these locations,
but also an equally effective stealth and combat thing.
It's super cool to see.
- So after seeing the demo playthrough, you know,
three different ways.
It was a huge team effort.
So everyone that worked on the project,
on this part of what we wanted to show,
we want to say a big thank you, you know,
big shout out because we're just presenting it.
It's the people that did a lot of the hard work that
should be represented.
And speaking of people doing hard work,
now's a good chance to throw it over to Eddie and Joel.
And they're going to tell you a little bit more about
how we built that outpost that we just saw.
COLONIALISM OUTPOSTS IN-GAME DEVELOPMENT
- [Eddie] I'm Eddie Hilditch.
I'm a senior lead.
And myself and my team have been
working on the new colonialism outposts.
- [Joel] My name is Joel Azzopardi.
And I'm the senior environment
artist II for the EEU sandbox team.
- So after the initial concept is done and rounds of
feedback have been iterated on,
we move into preproduction.
This phase allows us to spend some time testing the
concepts for in-game viability.
Translation from concept to game
isn't always one to one.
And during preproduction,
we'll get rough versions of the concept meshes
into game and spend time making
sure that they'll work practically.
The art direction can also change at this stage.
So we use this phase to kind of explore creativity as
well and conceptize [inaudible].
- One of the first steps when starting a new location
is to start with development.
A hyper focused small section of location where we can
hone in the tools and methods needed to execute
the concept in-game.
Some things translate well, some things don't.
It's important to figure all this out before going full
steam ahead with the entire team.
One of the great assets of the sandbox team is we have
a lot of people that are passionate
about concept and design.
Which means when translating from concept to production
environment, it's very easy to expand
on the concept art.
With the art styles of the colonial outpost,
we decided to change up the way we typically author
content more befitting to the style.
Our hard surface locations are
meant to feel pre-fabricated.
Like there's a manufacturing plant out there on ArcCorp
that churns out these flat packs base station kits,
so stations can be mass produced.
Colonial outposts are more personal,
more handcrafted by the people who live there,
based on their needs, not wants.
They're on the frontier world,
so they can't always choose luxury over practicality.
Materials were one of the first things we tackle and we
started off by developing the idea of how the
inhabitants would have built these structures and what
materials they would use.
We wanted to show not only the age of the outposts,
but also wanted to hint at all those different layers
of the structure and give you an idea how functionally,
they constructed them.
- One of the biggest challenges with the new outpost is
how we introduce variation between each location the
player will visit.
Building each as a bespoke set of buildings is
impossible as we want hundreds if not thousands
of outposts in the game eventually.
The modular approach that we've developed really
evolved out of our previous work on space
station interiors, but with a few key improvements.
This starts at the macro level.
Where on the planets outposts are placed,
how the local conditions affect your time there.
Then what kind of buildings an outpost has and how
they're laid out, all the way down to the ability
to independently swap out an under floor layout in a
single building of that outpost.
We will have various types of modules from large
standalone modules like warehouses or extractors which
have a singular function,
all the way down to smaller room modules that can be
connected together in different ways to
form a complete headquarters building.
After pre-production was finished,
we had a list of the room module types that we wanted
to tackle first.
For the headquarters building,
everything hinges around a hab module,
with different room modules that can be attached to
extend the structure.
The room modules will serve different functions in the
base, with various gameplay systems linking one
to another for an interconnected
web of sandbox gameplay opportunities.
As content creators for the outpost,
we needed a new system to build, edit,
and manage the library of modules we're creating.
Raster is a tool used to do this.
It allows us to intuitively create a location template
directly on the surface of the planet.
Not only this, but headquarter buildings can be snapped
together directly within the tool,
or with an intuitive user interface.
One of the other major innovations with the planet tech
has been the ability to modify the terrain mesh and
flatten areas of the terrain.
Previously, we were at the mercy of the terrain when it
came to designing our buildings,
which is why our outposts had to be built with stilts
and placed in naturally flat areas of the planet.
Now, we can build much more natural buildings with
walls and entrances connected directly
to the planet's surface.
And also we can place the buildings in a much wider
range of locations.
We believe our new outposts injected refreshing new
location experiences in Star Citizen.
They're organic, warm,
personal spaces that really convey the age and history
of humanity's expansion into the 'verse.
The new art style, the focus from design on gameplay,
and the flexible modular approach
to their construction, will allow us as developers,
and you as players to be part of creating a wider
variety of rich and satisfying experiences for every
outpost the player comes across.
- Okay, cool.
Thank you, Eddie Thank you, Joel.
That was awesome.
- And moving on, we're actually going to talk to Cory
now, who is going to give us kind of a deep dive
into the creation of the artifact which was actually
kind of our first little glimpse of the Hadesian
culture from Hades system.
- [Cory] Thanks, guys.
I'm Cory Bamford, lead props
artist at Cloud Imperium Games.
I'm here today specifically to talk about the Hadesian
artifact that you'll see in the walkthrough.
So we knew early on,
we wanted some sort of MacGuffin for the walkthrough.
We originally had a few ideas of what that could be.
Originally, it was either going to be a tablet
fragment, a sculpture, or a Hadesian artifact.
So initially, the concept team
explored a variety of ideas.
We used a lot of reference for existing alien artifacts
in the game, as well as reference from the real world.
You know, lots of tomes and ancient kind of Egyptian
stuff as well, just all sorts of really references just
to get a general idea.
We knew we wanted to integrate some form of ancient
power technology into the asset.
We also knew we wanted it to have some sort of
symbolism and text.
So once the concept team iterated further on these
ideas, they then presented those back to Chris,
and we narrowed down the selection of assets until we
had the candidate that everyone was happy with.
So once we had this asset in mind,
it then came down to turning that from a concept
into a production asset.
And that's where the props team comes in.
When a prop artist gets a concept like this,
immediately, the wheels in their head start turning,
and they're trying to figure out the best way to
implement it in our game engine.
They need to find solutions within the engine to
achieve the visual target of the concept.
Obviously, it's not as simple as just taking the
concept and replicating it,
we have to think about the shaders,
we have to think about performance.
Our job really is to find a solution within the game
engine to achieve the visual target of the concept.
Once you've figured out a strategy for achieving the
look, we begin to actually make the content.
So for the artifacts, for example,
we knew that it needed to be split into three segments
and it needed to fit together.
The first thing we do is get a placeholder into the
game for the design team to actually implement
as an entity.
We also then figure out how the scale actually works in
the player's hand, and when they inspect it.
For the artifact there was a bit of back and forth
between the size because we wanted to get a balance
between having prominence and
also being easily carriable.
After we've figured out the size of the asset,
we then need to actually break down how we're going
to make it.
So the first thing we really get into is the materials.
We know that this asset is
made of a few different materials.
Firstly, we have the stone with
the complicated color and pattern.
We also have these large copper structures and some
smaller, thinner metal structures as well.
For this asset, we knew we'd need to use unique
textures just because of the amount of detail we
wanted to achieve.
One of the biggest challenges we had was making sure
that the stone looked really good.
To create the stone,
we started with some scan data of rocks and concrete
as well as some mesh data like curvature.
We also used a lot of procedural noises from substances
on it just to add some variety.
Using the height map as a jumping off point for the
rest of the texture maps is quite a nice logical and
physicalized way of doing things.
It took quite a lot of iteration to get the final look.
It was definitely a group effort.
The glow was probably the trickiest part of this asset.
We ended up actually using a shader some of you might
remember from the Vanduul Driller trailer.
We created the iconography using
a bespoke texture mask.
And then the circles were derived from some cells
within Substance Designer.
We took these cells, quantized them,
and then got the edges of that quantization
to create rings.
And then we used the procedural mask as well as some
hand painted textures to mask out that glow.
Once we were happy with this texture,
we multiplied that onto the height map,
which is used to drive the glow threshold.
The glow effect has three texture
inputs that we need to create.
There's an animated glow map, which is sort of used
to drive the background effect of the glow.
There's also a gradient which colors that map.
Finally, we have the actual pulse itself,
which is the texture map that pulses across the asset.
Next up is the bronze.
This was actually pretty straightforward to achieve.
We didn't need any fancy shader effects for this one,
just a standard set of unique textures.
We wanted to get lots of nice
scratches and aging on the bronze.
And in the concept there was also this nice effect on
the edges where the metal got darker.
So we wanted to add that in as well just to give it a
more distinctive feel.
Once we were happy with the visual look of the asset
and engine, it then was just a case of wrapping it up.
We needed to create LED meshes for the object as well
as collision proxies.
As you can tell, quite a lot
of work goes into these hero assets.
So that was a little bit of exploration into how we
created the Hadesian artifact for the walkthrough.
I hope you guys enjoyed listening to me talk about it,
and enjoy the rest of the show.
- So we wanted to thank you for your time.
We wanted to introduce Pyro and show all the hard work
that all the teams have been working
on and working towards.
The team has put in a lot of hard work in building the
Pyro system, building the AI, building the planets,
the worlds that you'll go and explore.
So Pyro will be ready when server meshing is and it
will be coming out with Star Citizen Alpha 4.0.
So on behalf of myself, I want to thank Dave, and Ian,
and yourselves, for watching.
And I hope you enjoyed the panel.
And I hope you enjoy the rest of digital CitizenCon.
See you in the 'verse.
♪ [music] ♪

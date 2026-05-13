# CitizenCon 2951: Life In The 'Verse

**Video:** https://www.youtube.com/watch?v=kZWT4aNY6lU
**Date:** 2021-10-09
**Duration:** 2:00:24

## Transcript

[00:05] CITIZENCON
[00:11] LIFE IN THE 'VERSE
[00:20] STANTON
[00:26] ♪ [music] ♪
[00:32] WE ASKED WHAT IS BEYOND THAT NEXT PLANET
[00:38] WHAT IS BEYOND OUR CURRENT SYSTEM
[00:42] ♪ [music]  ♪
[01:21] TO NEW BEGINNINGS
[01:24] ♪ [music] ♪
[02:16] PYRO
[02:24] Pyro System
[02:25] A LAWLESS FRONTIER
[02:36] - [Todd] Hi, I'm Todd Papy,
Star Citizen Live Game Director.
[02:39] - [Ian] Hi, I'm Ian.
[02:40] I'm the Art Director for Star Citizen.
[02:42] - [Dave] Hi, I'm Dave.
[02:43] I'm the Narrative Director at Star Citizen.
[02:45] - So finally, we're saying goodbye to Stanton.
[02:48] It's quite, quite precious to us.
[02:51] We've been talking about it.
[02:52] We've been looking at it.
[02:53] We've been living there for quite a long time.
[02:57] But now it's time to, you know,
move the conversation on,
[03:00] start to look at something new.
[03:02] Now, it's changed slightly, the Jump Point, slightly,
from what we saw a little while ago.
[03:09] One of the things that was quite important for Chris is
he wanted that feeling of something that was
[03:14] quite wondrous, something that was quite amazing.
[03:18] You know, it's not dark, it's not mysterious,
it's not hostile, but it's more, like I said, wondrous.
[03:23] - So, when we started looking at Pyro and we had to
start looking at how the Jump Points worked,
[03:29] when we're traveling from Stanton to Pyro or Pyro to
Stanton, and thinking about border security,
[03:36] with the infrastructure that's needed there.
[03:38] What's the lore?
[03:39] Just because, on one side, it's very lawless,
versus the other side is dealing with the UEE.
[03:46] So we needed to go through and really think about how
this was working, and then also, with the Jump Points,
[03:53] how smugglers would work,
with the secondary and tertiary routes that would lead
[03:58] in to the main jump point, and then funnel out.
[04:01] - Yeah, we kind of call it, internally,
we kind of call it the Swiss cheese approach of the,
[04:06] you know, there's sort of the main entrance that you
would go through on Stanton,
[04:10] which would be the sort of guarded,
have the infrastructure that you had mentioned,
[04:13] the security and stuff like that,
but the possibility that there would be alternate ways
[04:16] to kind of get in, to bypass that, so,
which would be beneficial knowledge for smugglers or
[04:22] criminals who are trying to get in under the radar.
[04:25] And also, it was, you know,
if there's a lot of infrastructure around it,
[04:29] it sort of created this impression that that
infrastructure was responsible for the Jump Point.
[04:33] And the reality is, it's a naturally-occurring thing.
[04:36] An interesting balance of, like,
make it seem like this is a checkpoint,
[04:39] but at the same time,
it's something that the ships are creating,
[04:43] not the structures.
[04:45] - So, before we go too much further into the
Pyro System, let's take a deep dive into the
[04:51] art process, with Jake Dunlop.
[04:53] And he's going to be taking us through the
authoring process for the Stanton and
[04:57] Pyro Jump Points.
[05:00] FROM STANTON TO PYRO JUMP POINTS
[05:03] - [Jake] Bringing Jump Points to the
'verse has been an interesting journey,
[05:06] as we've been designing a new element in our game.
[05:09] We've put a lot of time into creating two solid
examples of different types of Jump Points you'll
[05:14] eventually see all around the 'verse,
one in Stanton and one in Pyro.
[05:18] We've been continuing to use Houdini as the tool to
create these gas clouds.
[05:23] The setup we have for them is a parent gas cloud and a
child gas cloud.
[05:28] The parent is mainly used as an establishing shot when
you arrive in your ship from quantum travel,
[05:34] while the child is used as the main gameplay
environment, and is placed inside the parent.
[05:39] The child also has a reasonable scale,
which keeps your average ship speed in mind.
[05:44] These things aren't nearly the size of real nebulae,
if you're curious.
[05:48] But by no means are the Jump Points small.
[05:51] Here's an example of a
Pyro Jump Point next to microTech.
[05:58] To explain the process a bit more,
we create the parent at a large scale,
[06:03] then cut out a small box in the center of it.
[06:06] Inside the small box,
we'll gather the volume data from the parent,
[06:10] upres that, and then add details.
[06:13] The details will be different depending on what type of
gas cloud you want, and if you want to easily fly
[06:18] through it or not.
[06:20] We usually spend time investigating different designs
for the gas clouds, but with the Stanton Jump Point,
[06:26] the work had already been started and
used in the 2019 CitizenCon demo.
[06:31] We just had to go through, clean up the Houdini file,
and get a game ready,
[06:35] with a couple of extra tweaks along the way.
[06:37] Some of the tweaks we made to the parent were making it
feel like more of a structurally sound rotating disc.
[06:44] This was to make it feel
like a safe and well-used Jump Point.
[06:48] The child gas cloud here was changed more dramatically.
[06:52] It used to have a bunch of dark clouds around it.
[06:56] We felt that it was feeling a little bit too closed-in,
so we spent time morphing the magnetic lines
[07:02] in the center, to create a really interesting
horizontal, flowing, relaxing, composition,
[07:08] to visually show you that Stanton itself is generally a
safe place, at first glance.
[07:14] The parent gas cloud for Pyro was created with the same
process as the Stanton parent.
[07:20] But we changed the shape of the cloud into something
more menacing and violent.
[07:26] We wanted the reveal of Pyro to be a clear warning of
what you should be expecting
[07:29] throughout the entire system.
[07:32] So we made it very closed-in, dense, and very active.
[07:36] We did make it a small challenge to traverse the child,
something that won't take too long,
[07:41] but should be something to
consider when traveling through.
[07:44] Something that helped really quickly create a fun
traversal route was creating a whitebox play area
[07:50] in Engine, out of solid geometry,
and flying around it right away.
[08:03] After we were happy with the route,
we exported the geometry to use in Houdini,
[08:08] where we converted it to a volume,
and combined it with the upres'ed area of the parent,
[08:13] to export that out as the child cloud.
[08:21] We wanted to make sure that these systems feel very
different from each other.
[08:24] Some ways in which we did this
was by the shape of the Jump Points.
[08:29] As I had mentioned before, Stanton feels very clean,
put-together, and generally safe,
[08:34] with the disk-like form that it has,
but Pyro feels like it's more violent, distressed,
[08:39] and this shows in its form.
[08:41] The comparison is shown well in
both of the child clouds.
[08:45] In the Stanton child cloud,
we have nice long strands of the magnetic waves,
[08:50] that encapsulate the Jump Point, that feel harmonious,
beautiful, and free.
[08:55] Whereas in the Pyro cloud,
it shows almost the opposite.
[08:59] The walls feel like they're closing in on you,
moving in unpredictable ways, completely unstable.
[09:04] Your ship could enter into a
wall and disappear within a second.
[09:08] Lighting also plays a big role in
how we feel about these spaces.
[09:12] You can see these are dramatically different areas in
the moon and tone, and lighting is the key to that.
[09:18] So, that's a brief look at Jump Points.
[09:20] They've evolved quite a bit since
the last time you saw them.
[09:24] Enjoy the rest of the show.
[09:25] - Thanks, Jake.
[09:27] So, one of the things that players would first probably
come across when they come into the Pyro System is
[09:32] the space station.
[09:33] You know, it was discovered a long time ago.
[09:35] It was, sort of, deemed uninhabitable because it was
just too dangerous when that flare star going on.
[09:41] So they, kind of, utilized the system for resources.
[09:45] And then when they kind of tapped out, they just,
sort of, left and that's when all the, sort of,
[09:49] squatters came in.
[09:49] So there's, sort of,
older infrastructure built to sustain, kind of,
[09:54] the mining activities, and gas harvesting,
and stuff like that.
[09:57] But, you know, they just basically left,
and then other populations started to slowly move
[10:02] into the system, criminals, squatters,
survivors and whatever,
[10:05] and start to kind of take over what was left behind.
[10:08] - Which gives us some unique gameplay comparatively to
stand against the space stations there.
[10:14] So with Pyro, since they're in such disrepair,
some of them are inhabited,
[10:18] some of them are completely abandoned,
and then so players can go and explore.
[10:24] They can go and see what's happened there,
whether it'd been hit by asteroid or if there was some,
[10:32] sort of, conflict there before.
[10:34] But you'll be able to go and explore the different
decks and be able to go in and meet new people,
[10:41] meet the Frontier lifestyle, enjoy it.
[10:44] - Okay, so before we go to the inside of the stations,
we're going to jump now to Eric,
[10:48] and he's going to go in a bit more detail,
the concept development process taken when looking
[10:53] at the exteriors.
[10:54] OUTLAW SPACE STATIONS EXTERIOR CONCEPT DEVELOPMENT.
[10:55] - Hi, I'm Eric Gagnon,
principal concept artist on Star Citizen.
[11:00] The goal of that initial step of sketch development is
to create something not inviting, dangerous,
[11:09] damaged by asteroids,
and surrounded by floating debris.
[11:15] Hiding place for outlaw, looks old, decrepit.
[11:19] Lawless, no security force here.
[11:24] Approach at your own risk.
[11:27] Industrial look, messy but not abandoned.
[11:32] Some parts are wrecked but
under repair and [inaudible].
[11:37] I like to use the black and white sketches to start.
[11:42] It allows us to go very quickly
and focus on the shape only.
[11:47] We then try to play with a touch of color to define
more of the commercial port platform.
[11:54] We try different schemes to remind us of the whole look
with a rustic vibe and brown tones.
[12:02] Having a touch of light in some context around the
sketch allows you to see the scale of thing and
[12:10] properly view the silhouette.
[12:14] We expand on the idea to
play with the mechanism and functionality.
[12:19] This is the color sketches of the asteroid
[inaudible] ArcCorp and
[12:24] in different angles.
[12:26] In this sketch, we can clearly feel the arrival of the
asteroids, and dismantling our restriction zone.
[12:35] We also need some top angles to properly showcase the
size and scale of it.
[12:41] With all those element in place,
we can now build a nice plate of the entire concept
[12:48] for the asteroids, harpoon without the piece together.
[12:53] The shantytown module habitation is a nice idea to
have, a kind of small city on the outskirts
[13:01] of the space station.
[13:04] So here I sketched those shapes
to create something very modular.
[13:09] From the grayscale, it's pretty easy
to do a color pass.
[13:13] I played with a color palette
that reflects the vibe of shantytown.
[13:19] In this sketch, here we can easily see how cool the
area is going to be.
[13:26] Another angle shot here is pretty nice, too.
[13:30] Playing with warm and cold
color contrast is interesting.
[13:35] All those different angles help define and expose the
different elements of the concept
[13:41] to properly illustrate it.
[13:45] Now, we have a nice board of the sketch phase.
[13:49] We apply the same process here
for the commercial port platform.
[13:55] The black and white sketches are a good way to go.
[13:58] In this image, we see the silhouette shape sketches for
the front of the port platform structure.
[14:05] A quick side view plan here is
necessary to well build this design.
[14:11] We feel the form, and the ratio,
and the size of what we want to achieve.
[14:17] And of course, we create a color
sketch to see what it could be.
[14:22] We see the industrial look and some potential details
to better define and deep dive into it.
[14:30] For those, we have a deeper design exploration of this
industrial area, pipes, tanks, angular shapes,
[14:37] and the color touch.
[14:39] Combining 2D and 3D sketches really help properly
communicate the design intent.
[14:45] It's a common technique now,
but it's really efficient to highlight areas
[14:51] of the concept.
[14:52] Using 3D is also very useful for all level designers to
validate the size and shape of things when creating the
[15:01] environment in the game.
[15:03] Let's talk about the big repair machinery hiding.
[15:08] This machine could be used to repair surfaces damaged
by asteroids, inspired from the EV machinery that we
[15:17] see in mining.
[15:20] Nice to see the overall add-on ideas brought together
on a single board.
[15:26] It gives a great look and makes you want to see the
next design step.
[15:32] The mood looks.
[15:34] We also create a mood board from our different shots.
[15:38] This shows how lighting is used to set the tone of the
environment by giving different options
[15:47] and color palettes.
[15:49] Finally, we provide some options for
paint of the exterior surfaces.
[15:55] We work from a list of brands and faction,
that we need to incorporate to the design.
[16:01] We started from the narrative things,
worked to build the visual identity of the
[16:07] different brand, exploring different ways to represent
them and the environment, stickers, flat surfaces,
[16:17] graffiti or official paint job.
[16:21] This really brings the sketches alive and set in the
universe of Star Citizen.
[16:27] The outlaw station are a symbol of the Pyro System,
and we hope this first exterior concept phase excites
[16:37] you as much as we had fun to create it.
[16:41] Thank you.
[16:42] - Thank you, Eric.
[16:43] Looks great.
[16:44] - That's the exterior.
[16:46] So right now, we're going to go from the outside,
and we're going to jump to the interior.
[16:51] A LAWLESS FRONTIEROUTLAW SPACE STATION INTERIORS
[16:55] Before we really started exploring anything,
one of the core concepts that we were discussing as a
[17:02] group was the idea of power and the idea of heat.
[17:06] Now, we've got, like,
this big interior layer of this old mining station.
[17:10] How would they have adapted the space?
[17:13] You know, they would have, "Okay, we need power here.
[17:15] Okay, that will create heat."
[17:18] So we started thinking about, "Okay,
where would the heat lamps be?
[17:20] And then where would light come from?"
[17:21] So just the principal concept of power creating heat,
creating light, that was pretty much the core of the
[17:31] start of the visual development process.
[17:33] - So when we started talking about it from a design
side, we needed to make sure that we were covering
[17:38] certain shops, just basic needs for the player.
[17:42] Everything is bare bones.
[17:44] It could be that it used to be a clothing store,
now it's a food shop.
[17:50] And so they've converted it.
[17:52] The gangs moved in.
[17:54] You know, it's not what it used to be,
but you see that old skeleton there.
[18:00] - One of the things that definitely we've been talking
about with Pyro that we didn't really get to see
[18:04] in Stanton is the idea of, sort of, the gang presence.
[18:08] So, you know, that idea that they're the, sort of,
local law in the area.
[18:14] So, you know, you might see gang members coming in and
shaking down some of these shopkeepers for protection
[18:20] money or rent, you know, type thing.
[18:22] - Or even shaking down the player.
[18:24] - Yeah.
[18:26] Yeah, which should be very fun.
[18:28] Not for me, but yeah.
[18:29] - So when we started to explore some of the side areas,
there were other things,
[18:34] other factors that we had to cover, habitation clinics.
[18:38] You know, players need a place to sleep, to log out,
as well as players need a way to get themselves healed.
[18:44] And then we started taking the same treatment or
similar treatment that we were doing with the main
[18:52] market area and started to take it into the Habs and
how they were possibly repurposed,
[18:58] or the clinics and how those were possibly repurposed.
[19:02] And just make sure that everything felt cohesive in its
raw, natural form.
[19:09] And the way that we have the stations structured,
we haven't let players go into, like,
[19:16] living quarters where the people that lived at the
station would be or even into the lower decks where
[19:23] the power, where the gravity and generators are.
[19:27] And this is where we're going
to start introducing these areas.
[19:31] And it opens up new opportunities for the players to go
explore and do new things.
[19:37] But it's also areas that the
gang might want to protect.
[19:41] - Yeah, it offers a lot of possibilities for mission
content, you know, whether it's actually maybe working
[19:46] for the gang itself or other, kind of,
those small things you could do inside there to really,
[19:50] kind of, drive you deep into the bowels of this thing.
[19:53] - Okay, so that's a little look at the insides of the
stations, but now we'll jump to Christian and Christian
[19:58] is going to take us on a little bit of a deeper dive
into the concept development process of the
[20:03] inside of the stations.
[20:05] OUTLAW SPACE STATIONS INTERIOR CONCEPT DEVELOPMENT
[20:10] - Hi, my name is Christian Doretz.
[20:12] I'm a senior concept artist on the environment team,
and we're going to look at the concept development
[20:18] for the space station a little bit.
[20:19] So, first off, we looked at the heatmap.
[20:23] So there is a lot of [inaudible]
electricity is gone, the heating is gone,
[20:29] and the visible air, the oxygen is gone.
[20:31] So there is pretty much all of those connected areas.
[20:37] They are lifeless in a way, right?
[20:38] So you wouldn't settle down somewhere
in between those empty corridors.
[20:44] We're trying to sort our thoughts
and get them on paper, right?
[20:48] So we're exploring different ideas that we on the
concept team had in mind.
[20:52] So we're thinking about pathways that the player and
the NPC could take.
[20:57] We're thinking what would happen if all of a sudden one
pathway is blocked off or another one will
[21:03] open up, right?
[21:03] So we're thinking about verticality and how the players
or the NPCs can traverse all of those interesting areas
[21:11] that are, in the end, pretty ominous, right?
[21:14] So think about there are some people just screwing off
side panels on the wall or they're screwing
[21:20] off ceiling panels.
[21:22] And you would see all of
the maintenance areas behind it.
[21:26] So we'd see a lot of struts, a lot of working areas,
just cables hanging.
[21:31] So those were the very first sketches where we could
see what those eventually could evolve into.
[21:39] And we also started then slowly
with some loose 3D sketches.
[21:43] So getting everything into 3D.
[21:45] And it's pretty much evolved over time where we could
talk to the environment guys,
[21:50] and we were asking for some of the current rest stops'
geo and some of the textures,
[21:56] and then getting them into 3D.
[21:58] And we were just changing up all of the props,
all of the side panels,
[22:02] and all of the whole...the environment.
[22:04] So we could, looking back at the references,
then convey this feeling.
[22:09] We could introduce more dirt.
[22:11] We could introduce some damaged panels, side panels,
and pretty much explore this side area, right?
[22:19] And the big advantage of this is that we can make the
environment how we like.
[22:27] So one thing that we did is, like,
kill all the lights because we don't need lighting.
[22:31] We want to create our own lighting,
and this is what I said earlier.
[22:35] The current rest stops are super bright.
[22:36] They're family-friendly,
but now we want to make it ominous.
[22:39] We want to make it dark mood.
[22:40] We want to make it super dark where the player's, like,
always feeling, kind of,
[22:44] in danger and especially with the
gang members in mind, right?
[22:48] So this would allow us to create one of the very
earlier 3D explorations,
[22:56] which then lead to one of the final concept arts or the
final implementation of this.
[23:02] So when we were at a point where we were kind of okay
or we thought like, "Okay,
[23:07] this is an environment that we want to see," then we
took care of the last 20%.
[23:11] So the last 20%, in this case,
means having a final render and painting over.
[23:17] So we were just painting over in Photoshop and doing
some more refinements for the mood and the lighting.
[23:24] We were painting in some of the decaling and some of
the graffitis because it is ultimately easier to do all
[23:30] these things in 2D than in
3D and caring about the materials.
[23:35] So we were able to just refine
the final concept in this regard.
[23:41] And this wasn't a straight process from A to B.
[23:47] It was an iterating process.
[23:49] So in between, if you're looking at some of the other
concepts, for example, the barriers,
[23:52] we were at one point thinking about what would happen
if we introduced barriers that the gang members then
[23:59] would set up on one point.
[24:00] So what does it mean for you as a player?
[24:04] What is a player doing at this point?
[24:06] So will he encounter these gang members?
[24:10] Will he try to find a way around?
[24:12] Is he going to use some of the letters or the
underground events, for example?
[24:16] So we were changing the concepts
here and there more or less.
[24:20] And this leads to, in the end,
having a nice variety of concepts or different types
[24:27] of concepts that we then could cherrypick the best
parts of it or the other teams, the environment team,
[24:33] the design team could cherrypick the
best ideas from those concepts.
[24:37] And this was pretty much a rundown of the concept
development for the Pyro Space Station's interior.
[24:43] - Thanks, Christian.
[24:45] That looked appropriately scummy.
[24:48] - So we've been talking a lot
about the insides of the stations.
[24:50] We've been looking at a lot of the concept art,
but now we can jump to Josh,
[24:54] and Josh is going to talk about one of my favorite
parts of the process.
[24:58] And it's when we take some concepts,
and we start to do some iterations,
[25:03] some visual development in the engine.
[25:05] OUTLAW SPACE STATIONS INTERIOR IN-GAME DEVELOPMENT
[25:06] - Hi, my name is Josh Van Zuylen.
[25:08] I'm the principal environment artist
here at Cloud Imperium Games.
[25:10] Today, we're going to be going through the Pyro Space
Station's visual target and preproduction sort
[25:16] of things that we're going to be doing for these
rundown/outlaw space stations.
[25:21] So what I have here right in front of me now is
obviously the first call from our
[25:26] Stanton space stations.
[25:27] We've just dragged the where up on all of them.
[25:30] So now we're getting all of this really nice grime on
all of these surfaces.
[25:35] Right?
[25:35] So if I turn off my working lights,
which hopefully are going to, you know,
[25:38] produce that mood that we're after.
[25:39] So we'll turn on that right now.
[25:41] So a number of things have
happened right in front of us.
[25:44] Right?
[25:45] You can instantly see where we've got
lots of heavy fog coming in.
[25:48] Don't pay too much attention to the particles now.
[25:50] We'll go into them a little bit later.
[25:52] We've got some light panels up here shooting through
the rafters and we've got another one
[25:59] over here as well.
[26:00] Right.
[26:00] So we're going to do a quick little thing here.
[26:03] It's adding in some cables.
[26:04] Right.
[26:05] And now this is really important not only to achieve
the art direction, but it gives us a really nice level
[26:10] of parallax within the scene.
[26:13] Right.
[26:13] We have a couple of design constraints within this
space as well.
[26:16] One of those being we have a
gang and then a general civilian population.
[26:21] Right?
[26:22] Now, one of the things that we wanted to do in terms of
that design in this particular space was separate it
[26:27] out in like a kind of cloth type system.
[26:29] Right.
[26:30] So we're going to start to explore some of the
requirements of that.
[26:33] One of that being that, like I mentioned before,
you can't get up here unless you're in favor
[26:38] with the gang.
[26:39] So we need to put in the instruments that are going to
help portray that.
[26:43] And that is a checkpoint.
[26:44] Right?
[26:45] So and just a side note,
all of this stuff is super work in progress and nothing
[26:49] is final, so don't read too much into it.
[26:52] So from here, we're missing a few bits and pieces.
[26:56] Right.
[26:56] But one of the ways that we're
going to solve that is with graffiti.
[26:59] All right.
[26:59] So I'm going to turn on those details now.
[27:01] And you can start to see that the walls here are
starting to disappear a little bit.
[27:07] It's a very subtle effect in this particular area,
but you'll start to see how much more it comes
[27:12] through in others.
[27:13] Right.
[27:14] So moving on from here,
we need to start putting the stuff in the environment.
[27:18] So bear with me for a sec when I turn this on.
[27:22] All right.
[27:23] So we've got here is a lot of stalls, right?
[27:27] We really want to get that cramped vibe in,
like it was kind of similar in the concept and start
[27:32] seeing how far we can push the limitations of what we
can do in the engine,
[27:36] but also what we can do
with our technical systems as well.
[27:39] Right.
[27:40] One of the things that was immediately apparent to us
is that AI is really tricky to deal with when in tight
[27:48] and enclosed spaces.
[27:49] Right.
[27:49] So we need to look at areas like this here and this
here, to make sure that it's wide enough that if you
[27:55] and I can pass each other or
a player and not look completely gross.
[28:01] Right.
[28:02] Now, I mentioned lighting before.
[28:04] So I'm going to turn off the working lights that we've
got so far and you'll start to see what I mean.
[28:14] So we've got a whole bunch
of stalls here at the moment.
[28:17] The entire scene is being lit by the stalls itself.
[28:20] Now, this is going to come a long way and the stalls
themselves have had a bit of a lighting pass.
[28:25] So this is really starting to look quite nice,
but we're not getting of that thickness that we're
[28:30] getting up on the top level.
[28:32] Right.
[28:33] We're not getting that little bit
of life to a certain extent.
[28:37] And we're also getting these areas here where they just
fall completely into darkness, which is not fun.
[28:43] So obviously, like I said before,
we'll be doing lighting as we go through this process.
[28:46] But just to see how much of an impact that pass can do
on an environment like this,
[28:52] I'll just turn it on for you.
[28:53] So you start to instantly see we've now got a lot more
thickness within the environment.
[28:58] And if I just double check just to make sure that our
lights are generating correctly.
[29:02] Cool.
[29:03] So we're getting a lot more voluminous lighting now.
[29:07] We're getting all of these heat is coming in now.
[29:10] The heat shimmering off them.
[29:11] We've got these little portable
ones lighting up the place.
[29:14] We've got some ones that are hanging from the roof,
ones that are over in the corners and stuff like this.
[29:18] Right.
[29:19] So we're starting to get a little more mood in this.
[29:21] This is starting to feel really nice now.
[29:25] Now, what I was mentioning in terms of the rain, right.
[29:28] So, yes, we're talking about the rain now.
[29:31] Why is there rain inside?
[29:33] Right.
[29:34] So this is generally a really cold station.
[29:36] And when people are in this area that's in the center,
because there's so much stuff happening here,
[29:43] it's starting to get warmer.
[29:44] Right.
[29:44] You've got the heaters  here.
[29:46] You've got the gang that is kind of maintaining a lot
of their stuff and producing a lot
[29:51] of the heat themselves.
[29:52] This is prime real estate where
everyone wants to be, right?
[29:57] So what happens when you have this many people cooking
food in this one small area, you know,
[30:04] bringing in hot air, that sort of thing,
it all starts to rise in this environment.
[30:09] And it starts to get...
[30:10] That massive cabin, right,
that we've got up here all the way up to the
[30:14] roof there, as it goes up, it starts to cool down.
[30:18] Right?
[30:18] And we start to get precipitation inside where it
starts to rain.
[30:21] And even in many instances,
we start to get a little bit of ice coming
[30:25] through as well.
[30:27] So that means once it's all fallen down here,
it's actually quite wet and damp for...
[30:33] It's still cold and a little bit warmer in heaters,
but it's generally quite damp because of that weird
[30:39] kind of event.
[30:40] Now, the rain as it currently sits,
is just a placeholder asset that we're
[30:44] borrowing from squadron.
[30:45] And that will have to obviously be remade to suit the
amount of rain that we want to have
[30:50] within this environment, which won't
be, you know, crazy.
[30:54] But it serves as a proof of concept for what we're
trying to achieve.
[30:58] Right.
[30:59] So that is pretty much Pyro Stations.
[31:02] I hope you really enjoyed, like,
seeing the breakdown that we've done here today,
[31:07] learning a little bit about the process of going in and
doing a visual target.
[31:12] And, you know, just a little bit more of the earlier
process and problem-solving that we go through.
[31:18] So, yeah, I hope you really enjoy the rest of
CitizenCon here today, and I'll catch you later.
[31:23] - Cool.
[31:24] Thanks, Josh.
[31:25] That was looking really good.
[31:27] All right.
[31:27] So as we continue our process of exploring the
Pyro System, now I think it'd be good to look a little
[31:33] bit at the planets and moons that populate the system.
[31:37] Now, one of the things we thought would be interesting
to talk about is, how do we design a system
[31:43] from the ground up?
[31:44] As with all of this, we always start from narrative,
you know, before we put any pen to paper or we have any
[31:50] discussions about player experience.
[31:54] We always start from, you know,
the world that Dave and others have kind of built.
[32:00] - Yeah.
[32:00] I mean, you know, and again, it's also the thing of,
the Pyro, I think was first initially conceived very
[32:06] early on in the process.
[32:07] But once we finally are tackling it from a realistic,
practical, how we're going to build this,
[32:13] what is each planet going to look like.
[32:16] You know, it's important to ask more questions
about...to flesh it out more,
[32:21] because we kept it intentionally kind of vague,
because we want the art team to...you guys,
[32:25] to do what you do and the designers to do what they do.
[32:27] - So when we started that exploration process,
we knew we had, like,
[32:31] a ballpark that we needed to stay in.
[32:34] So we literally thought, okay,
how do we design a system?
[32:39] And fundamentally, it kind of comes
into maybe three key areas.
[32:44] So because we're a space game,
the establishing shot of that planet is very,
[32:50] very important because it describes everything from,
you know, continent breakup, fundamental palette.
[32:59] So right from the get go,
we started to sketch in ideas of what the key
[33:04] establishing shots were going to be like.
[33:05] And then from there,
then we jump into key art.
[33:09] So key art is basically
on the surface.
[33:14] What is the mood?
[33:15] What's the tone that we're expecting to see?
[33:17] And as you say, like,
the first one we wanted to tackle was Pyro I, because,
[33:23] you know, David described this wonderful picture.
[33:26] And it was already clear in our minds about what it
wanted to look like.
[33:30] So we hit that first.
[33:32] And, you know, we wanted something hostile.
[33:34] We wanted something hazardous.
[33:36] Also, as part of this process, is,
we knew our current tech limitations,
[33:42] but we also knew what we wanted to do in terms of our
future tech, you know, future planet tech weather.
[33:49] You know, so we kind of went
crazy with ideas as we were exploring.
[33:54] So, we went through the various planets,
did some key art.
[33:58] And again, put them up on the board.
[34:00] And just to validate,
we all keep them within that palette,
[34:05] but we're getting that diversity.
[34:06] We're getting that diversity of color, hue,
value structure, silhouettes, composition,
[34:14] because even within something
like Stanton, there's variety.
[34:18] You know, that was very important for me and the team,
where you want to feel like you're on a space rover.
[34:25] You can travel around.
[34:26] But now we're going to a complete system.
[34:29] So we continued that idealization process there.
[34:32] So we had the establishing shots.
[34:33] We had some key art.
[34:35] And then from there, as we create, like...what we call,
like, breakout packs.
[34:40] This is where when we're talking through with design
that, you know, what are the interactables that the
[34:46] player maybe will come across?
[34:48] What are the minables, what are the harvestables?
[34:50] And then from there,
we start to build out little breakouts for all those
[34:56] acid packs that will go to the team.
[34:59] Now, from there, like, we did a first pass exploration.
[35:03] And what we did is we put it all together on a single
boarder for Chris.
[35:09] So have almost like a commander's
view of the new system.
[35:13] You know, we showed to yourself, Dave,
we showed it to Chris, we showed it to Todd.
[35:17] And right, you know, on one sheet,
you've got the establishing shots,
[35:22] you've got the key art and
you've got the breakout.
[35:24] And for me personally, that's how I like to work.
[35:26] I like to see that.
[35:27] And like I said, a commander's view
of an entire system.
[35:32] And then from there, you can kind of tweak, adjust,
and, you know, mold things into what player experience
[35:38] we want to put forward.
[35:41] So that was a snapshot of the visual exploration
process we use when designing a system
[35:47] from the ground up.
[35:49] Now, we can take a break from us talking and go to an
art video, a sizzle video created by the art team.
[35:55] And what this will show is,
it will show a kaleidoscope of planets and moons
[36:00] from Pyro, and it will also showcase some of the latest
and greatest art techniques, and processes,
[36:06] and tools that the art team have.
[36:12] ♪ [music] ♪
[38:19] Awesome.
[38:19] I'm falling in love with Pyro.
[38:21] And hopefully from seeing that video,
hopefully you guys are too.
[38:23] So as a continuation now, we can jump to Sebastian.
[38:26] And Sebastian will talk to you a little bit more about
the cloud authoring process and some of our
[38:31] latest cloud tech.
[38:32] Then we can jump to Maximilian.
[38:34] Maximilian will talk a little bit about geology
creation, how we create that type of biome.
[38:39] And then lastly, we can go to Ozlem.
[38:41] And Ozlem will go into a lot more detail about how we
take some of the concept art that we've been showing
[38:47] of the botanicals and how we
interpret that to in-game artwork.
[38:53] PLANETARY CLOUDS IN-GAME DEVELOPMENT
[38:58] - [Sebastian] Hi, my name is Sebastian,
and I'm a principal environment artist on the
[39:02] Planet Content Team.
[39:03] I'll be talking a bit about the data that defines the
visuals of the volumetric clouds and how we create it.
[39:10] Crusader was our first astronomical object that made
use of the volumetric cloud tech,
[39:14] that's being built by Carson, Benson, and others.
[39:17] While working on Crusader,
we learned a lot on what kind of data gives us which
[39:20] results and what it's better to be avoided.
[39:23] With the tech being new,
we also needed all new workflows for it.
[39:28] We are currently building more tools for producing the
data, so we expect to get better,
[39:32] more complex results in less time in the future.
[39:36] We are evaluating everything from a very manual process
that involves painting every pixel,
[39:41] to a fully procedure one with
little to no artist input.
[39:45] And we will probably end up somewhere between the two.
[39:48] This essentially means that what you are about to see
is very likely subject to change.
[39:54] Due to the way the shader works,
we can either throw random data at it and hope
[39:58] for happy accidents,
or we can be very specific with the data and what kind
[40:02] of cloud formations come out of it
in certain areas of the planet.
[40:05] For most use cases, there are two types of textures
that need to be created.
[40:10] The first of which is the global property map,
which determines what type of cloud is being used
[40:15] at any point on the planet's surface.
[40:17] It is also used for controlling
the color placement of non-water-based clouds.
[40:20] But I'll get to that later.
[40:22] The other map is for defining the types of clouds,
and it's named accordingly.
[40:27] The cloud type map allows us to control the cloud
density and the impact of the two separately
[40:31] [inaudible] noises,
which are detailed in definition to what would
[40:34] otherwise be fairly low resolution shapes.
[40:37] The way the two textures intact is may be best compared
to forming a vase out of clay on a pottery wheel,
[40:42] and that's kind of what we're going to do now.
[40:46] In this video, we are revolving half a cylinder vase
around a circular pattern which gives us a vase-like
[40:51] shape and 3D space.
[40:53] The big difference to a pottery wheel though is that we
cannot only fill data in the shape of a circle
[40:57] but ultimately whatever shape we want.
[41:02] With the density channel,
we can control how thick the clouds appear.
[41:05] White pixels represent very dense clouds.
[41:08] Black pixels produce no clouds at all.
[41:10] And then we also have everything in between.
[41:12] There's always a tiny bit of impact from the tiny
noises, which you can see to have an effect on the
[41:17] lower density regions.
[41:18] The shaping noise and its controller texture are the
most impactful in terms of turning
[41:23] [inaudible] volume into something we can
clearly identify as clouds.
[41:26] How much it gets to affect the shape of the clouds
depends on the brightness and the corresponding channel
[41:31] of the cloud type map.
[41:32] By combining density and shaping noise,
we can model everything from dense clouds to soft, more
[41:37] [inaudible] shapes and everything in between.
[41:39] The last of the cloud type
map channels controls the erosion noise.
[41:44] It is lower resolution than the shaping noise,
since its main purpose is to add an extra layer
[41:48] of small detail.
[41:50] We usually just add it everywhere,
unless we specifically want soft clouds
[41:53] with less definition.
[41:55] Black values add details in the
way the tiny noise is offered.
[41:59] While white values invert the noise and medium gray
values mean that the noise has no impact.
[42:05] Maybe you can already get a feeling for the complexity
of the system and how every pixel in every channel can
[42:11] have a dramatic effect on the end result.
[42:15] Another thing we can change are
the tiny feeding noises themselves.
[42:18] By default, a cauliflower like noise is used for the
shaping to model those fluffy
[42:23] sheep-like cumulus clouds.
[42:25] But by changing it to a different feeding noise,
we can produce some more abstract,
[42:29] large shapes that wouldn't normally occur on Earth.
[42:32] This is an area in combination with different global
data, we keep investigating to produce more adient
[42:37] cloud formations in the future.
[42:39] We've been advancing this approach in Pyro 5,
another gas giant, which brings me to the other use
[42:43] of the global property method.
[42:45] It has a second channel which in combination with
collaboratives, is used to control the flow color
[42:49] of the clouds.
[42:50] So not so physically correct
coloring of the gas giants.
[42:54] We sometimes have to restrain ourselves to not make
brightly colored balls of cotton candy.
[42:58] There are a lot more settings that allow us to tweak
everything from how the clouds are shaded and shadowed
[43:03] over the global impact and frequency of the detail
noises to parameters that drastically change what
[43:09] results the textures have shown
[inaudible] produce.
[43:13] You'll have to be with us as we figure out if that is
the best combination of settings and how those might
[43:17] change once all the features that are still planned
eventually get added.
[43:21] By now, you've probably seen a fair amount of
volumetric clouds as part of this year's CitizenCon,
[43:25] and are quite likely to see a bunch more.
[43:26] Because of that, and since I'm still an artist at
heart, I'll leave you with this bad drawing of a cat
[43:31] instead of murky cloudscapes.
[43:33] Thank you for your time.
[43:34] - [Max] Hi, my name is Max,
and I'm a senior environment artist at CIG.
[43:39] I am part of the planet team where my focus is on
planet and asset creation.
[43:43] I want to give you some insight into how we transform
simple terrain shapes to a final biome.
[43:49] Plus, a little preview of what
you can expect in the future.
[43:53] When creating a new biome,
we start by assigning ground textures
[43:56] to the terrain geometry.
[43:58] For this research and development desert biome,
we chose a selection of different types
[44:02] of sand and soil.
[44:03] For additional depth and detail,
we have the option to use displacement mapping.
[44:08] The next step is adding our
first layer of ground cover assets.
[44:12] In our game, ground cover is any low-cost asset up to
knee height, which does not require collision and
[44:17] allows us to use a lot of these assets to create a nice
level of density.
[44:22] Here, we use a mix of gravel, patches of moss,
and dry grass.
[44:26] After that, we add slightly bigger assets in the form
of clusters of desert bushes to give context to the
[44:31] smaller assets and add variety.
[44:34] We finish the objects scattering past by adding
individual larger rocks and arrangements
[44:39] of small rocks, which give the player a better
understanding of how far away something is
[44:44] when walking, driving, or flying over a planet.
[44:48] For performance reasons,
we use a range of settings like randomized rotation and
[44:52] scale values to get as much variety as possible out of
the number of assets we created to mimic a level
[44:59] of complexity that feels organic and comparable to what
you find on Earth.
[45:04] Something that we have been missing on our current
planets and moons are massive rock formations due
[45:09] to tech limitations.
[45:10] Some of these limitations have since been solved.
[45:13] For example, we are now able
to render assets much further.
[45:16] Because of that, we recently kicked off the research
and development phase during the production of the Pyro
[45:21] System to find workflows for the creation and
distribution of cliffs.
[45:26] Full disclosure, though,
this is early in development and heavily work
[45:29] in progress, but we still wanted to give you a little
glimpse of what to expect in the future.
[45:33] The challenge for us will be to figure out how we can
make these assets look as good as possible
[45:38] from all angles.
[45:39] If a player walks up to them on foot,
they must look just as good as when a player decides
[45:43] to land his ship on the highest point of a cliff.
[45:46] But we are excited to add an even more epic level of
scale to our game.
[45:50] That's it for me.
[45:51] Thank you for watching and
enjoy the rest of CitizenCon.
[45:55] - [Ozlem] Hello.
[45:55] My name is Ozlem, and I'm part of the organics team.
[46:00] Today, I want to talk a bit about how we build the
different biomes on Pyro III.
[46:04] Pyro III is a planet with very distinct biomes.
[46:08] For example, we got the yellow moss biome that is a
strong contrast to the dark volcanic regions.
[46:15] We have some icy areas, polar fields, acidic fields,
different coastlines, and a lot more.
[46:21] When working on a biome,
the first thing we do is to have a look
[46:24] at the concept art.
[46:26] We do an asset breakdown for all the elements we need
to recreate the scene.
[46:30] By doing so, we get more information about what kinds
of rocks and vegetation assets we need.
[46:37] The proportions of the assets in relation to the
character, the distribution and frequency of those
[46:44] assets on the planet,
but also the amount of coverage per biome
[46:49] on the planet.
[46:50] And we can also get information about the color
palette, the terrain colors,
[46:56] and what to scatter on the coastlines.
[46:57] The last thing we can see from the concept is assets
and ground materials.
[47:04] We also try to reduce the amount of the asset packs
because of performance and time constraints.
[47:11] Instead of doing 50 unique rock,
we can achieve the same result by using just three
[47:16] with our procedural scattering system,
since the assets will be scaled and rotated randomly.
[47:22] After figuring out all the necessary elements,
we start with the whiteboxing phase.
[47:27] This means doing a very quick mockup of the scene by
using very simple assets.
[47:32] The white boxes should just represent the shape and
color of the final object.
[47:37] We do that to see if the asset breakdown we did
beforehand is working in the 3D space as well.
[47:43] At this stage of the process,
we can still change the whole look of the scene if we
[47:47] don't like the outcome yet.
[47:49] We can say, let's make the rocks five times bigger or
blue instead of red, and so on.
[47:55] Or we realize we need to do some research on a specific
asset to solve it visually.
[48:00] Which was the case for the moss, for example.
[48:02] When doing R&D on the moss,
we were trying different shapes and sizes,
[48:06] and we also had to figure out how to do the moss trends
that are covering the whole mesh.
[48:11] To make the workflow for the moss trends a bit easier,
we used Houdini to procedurally scatter them.
[48:17] Otherwise it would have been too time consuming to
place every single moss strand by hand since there are
[48:23] several thousands of them.
[48:25] After figuring out how to do the moss trend,
we still didn't like the overall shape of the moss
[48:30] as it was a bit too blobby and yellow.
[48:33] We wanted something that looked a bit more natural and
integrates better into the terrain.
[48:38] So we created some rocks with
a moss plant on top instead.
[48:41] We broke up the moss shape even further because it
looked a little bit too molten and we added different
[48:47] kinds of moss trends to get a little bit more variety.
[48:51] In the end, all these things got us to a result that we
were satisfied with.
[48:54] The usual approach to setting up a biome is to start
with the largest elements first and work your way
[49:00] to the smallest one.
[49:02] If we take the moss preset as an example,
we would start by adding the largest elements first,
[49:08] then adding some smaller moss patches around it to
create a nice fall off.
[49:12] We continued with adding some flatter grass to make it
sit nicer on the terrain.
[49:17] But then we realized we needed something bigger to
bring the elements closer together.
[49:22] So we decided to add some high grass as well.
[49:25] The final steps are adding some ground cover like small
rocks or tiny moss.
[49:30] As you can see, while building a biome,
we need to do several iterations to get
[49:34] the best visuals.
[49:36] Thank you for watching.
[49:43] - Thanks to Seb, Maxxy and Özlem for
showing us their work.
[49:47] So when we started looking at outposts and started
really from a ground up on how to make it so that
[49:59] there's more diverse gameplay in there.
[50:01] The player can approach it
in multiple different routes.
[50:04] There can be combat encounters.
[50:06] There can be social encounters.
[50:09] So we needed to kind of rebuild and rethink the way
that we were doing this.
[50:15] We started honing in on what was working,
what wasn't working, and then did a lot of adjustments.
[50:22] BLAZING THE TRAIL COLONIALISM OUTPOST EXTERIORS
[50:27] We've had outposts in our game for some time.
[50:30] You know, when we started to hear on the art side,
what the design requirements are going to be,
[50:35] fundamentally thinking about these as modules,
thinking about them as thematic modules and,
[50:40] you know, very specific.
[50:43] Then, you know, already, like,
the mine was going to like, okay, we're going to need,
[50:48] like, a paradigm shift in terms
of how we visually present these.
[50:53] You know, what could these
settlements kind of feel like.
[50:56] And, you know, as with everything with outposts,
it's a gameplay or it's a location archetype.
[51:04] It's the smallest, probably one of the smallest
location archetypes that we have.
[51:08] And then in time, that will lead to, like, you know,
villages and towns.
[51:13] - Yeah.
[51:14] Thinking about how we wanted to push this forward.
[51:17] I mean, Chris has always talked about putting outposts
into players' hands.
[51:22] And so we needed to think about how would this expand?
[51:26] How would the players be able to make these homes
feel...you know, homes, or outposts,
[51:32] or even businesses feel unique for the way that they
want to play.
[51:37] And then there were even tools that we had to create in
order to actually be able to embed these into the
[51:43] ground and make sure that it worked much better than
what we did in Stanton.
[51:49] Because with those, we had to have them kind of on
stilts, and inns, you know,
[51:54] just the points of contact were
very limited for the ground.
[51:57] - Right.
[51:57] If I connect these modules together,
how do we get something that doesn't
[52:00] feel like [inaudible].
[52:03] - Well, I know the design we came up with,
in particular, Andrius and Dan came up with a long
[52:09] list of things.
[52:10] You know, okay, here's what we'll need in habs.
[52:12] Here's what we'll need for utilitarian.
[52:15] Here's what we'll need for defenses.
[52:17] Here's what we'll need for power, and oxygen,
life support, and so on and so forth.
[52:22] So there was a very long list.
[52:24] And then it's how we take those and make them feel
unified and visually unified together.
[52:31] - Yeah.
[52:32] And fundamentally, the thing that probably got us the
most excited is finally we started to think
[52:38] about these as, like, unified
settlements, you know, base building.
[52:44] So, as you can see on some of the concepts,
we deliberately presented early exploration shots
[52:52] in this kind of, like, semi isometric view to see,
you know, how does it feel if I'm laying out my base,
[52:57] how these modules kind of, you know, tie together.
[53:01] And, you know, it kind of got the team excited.
[53:05] And finally we were thinking, all right,
these settlements are going to be more than just,
[53:10] you know, like a single outpost,
but more like a collection of modules.
[53:14] So just to continue on with the module building and the
module creation, we can jump to Christian.
[53:22] And Christian can talk in a bit more detail about the
visual development process we did for creating the
[53:27] exteriors of these new outposts.
[53:31] COLONIALISM OUTPOSTS EXTERIOR CONCEPT DEVELOPMENT
[53:35] - Okay, so we have talked a little bit about the
colonialism, and now we're going to show you a little
[53:40] bit more about the modules.
[53:42] So the very first thing that we did was creating all
the primitives and all the primitive shapes into 3D.
[53:48] So as you can see here, we
have a lot of variety, right?
[53:51] There is the cubic coming in.
[53:53] There's the cylinder coming in, the spheres coming in.
[53:56] For example, if I take this building over here and I
duplicate it and move it around,
[54:00] I could just simply grab some of the other ones and
combine them together.
[54:04] And you will see later on that this is one of our
archetypes or one that we pretty much like.
[54:10] Right.
[54:10] So you can see here already,
there's a lot of variety of entrances,
[54:14] maybe some garages, maybe some smaller entrances for
those NPCs, or for the players, right?
[54:21] And if I zoom in, all of a sudden, you can already see,
like, how they react to the environment
[54:28] on the overall scale.
[54:29] Right.
[54:30] So if I pan over here and you see these buildings in
the background, so you're always having a first person
[54:37] standpoint or a first person view.
[54:39] So we're not only creating those entrances,
but also smaller details and very briefly looking
[54:45] into the modules.
[54:46] So what you can see here is the very first concepts for
the solar panels, for example, or the top mounted,
[54:54] the roof mounted solar panels.
[54:56] In the background, you see some other nice details that
we can just pick and put on our buildings.
[55:01] Right.
[55:02] And some of the very last that we did,
pretty much those.
[55:06] So those were one of the archetypes.
[55:08] And you see there are small
buildings for housing or housing buildings.
[55:14] There are some building types that are more communal.
[55:17] We have some secondary and tertiary buildings like
those radio towers.
[55:22] If you imagine, you're a colonist on a planet.
[55:26] Right?
[55:26] There are multiple settlements on a planet.
[55:30] How would they communicate with each other?
[55:33] So we have kind of a radio tower.
[55:35] Or some of those cooling devices.
[55:38] So if you imagine, maybe
there's something on the ground.
[55:40] There's an even bigger facility on the ground because
you're on a very hostile planet environment.
[55:46] So you want to store
your very sensitive data underground.
[55:50] And we were looking at those hints of life.
[55:53] Maybe you are kind of a farmer.
[55:54] So you see already, this is the first archetype.
[55:57] This is more cylindrical.
[55:59] And there are some storage spaces
coming in here and there.
[56:01] So where would you store your oxygen or your water?
[56:05] Gases, for example?
[56:05] All of this is just a consideration from our side.
[56:11] Going over to the next one, this is more paramedical.
[56:14] So we were looking at also, again,
the same materials or changing up the materials.
[56:20] So now it is, again,
more concrete and the color palette is changing.
[56:26] There are some of these storage coming in and going
then over to the next one.
[56:30] It is, again, looking at different materials.
[56:32] There is some storage buildings that are not in one big
storage facility, but it's divided into smaller parts.
[56:39] So you have to walk around your settlement and see,
like, okay, I can put some stuff in here.
[56:44] But if I need something else,
then I need to walk over there.
[56:48] And there are some playing around with some more
entrances and windows.
[56:52] How do they react to the environment?
[56:54] Right.
[56:55] So this was just one of the
very many files that we created.
[57:01] So those are mostly buildings,
but with different different files for assets and props
[57:08] and how they would fit inside these main architectural
style if we wanted to see more involved.
[57:15] Right.
[57:15] So just a very early version
of the refinery, for example.
[57:20] But all of this in the end has given us the opportunity
to just cherry pick the best ideas that we felt
[57:26] appropriate for this specific colonialism style.
[57:31] And where other people were able then to just grab the
best parts and then use it in the actual game engine.
[57:39] Yeah, this was pretty much the concept development for
the colonialism modules.
[57:43] I hope you have a great time and wish you all the best
for the next panels that are coming up.
[57:51] BLAZING THE TRAILS COLONIALISM OUTPOST INTERIORS
[57:56] - Awesome.
Thanks, Christiano.
[57:58] So that pretty much covers the work
we've been doing on the exteriors.
[58:01] So now let's jump to the interiors.
[58:04] So we pretty much had to follow that same idearation
process that we did for the exterior,
[58:10] but for the interior now slightly more simple.
[58:14] We knew there was a few key
areas that we needed to design.
[58:18] First, it's the social space.
[58:20] You know, this is basically
these kind of communal hubs.
[58:23] We knew we wanted like that open kitchen,
seating areas, windows.
[58:28] An area where people could kind of hang out and relax.
[58:32] And then second to that was habitation.
[58:35] You know, we knew these are going to need to be abodes.
[58:38] We knew we needed bathrooms, hab units.
[58:41] But again, nothing in here
would be, you know, pre-manufactured.
[58:47] So we wanted actual beds, not racks of beds.
[58:51] So everything about this process was about, you know,
creating good design,
[58:57] which you would look at and relate to and think, oh,
I could see myself living there.
[59:02] I could see someone living there for quite a long
period of time.
[59:06] So inhabitation, you know, it's soft surfaces,
soft shapes, but again,
[59:11] something which felt fairly integrated
into the core architecture.
[59:16] In contrast to that,
we knew we needed technical spaces.
[59:19] You know, these could be used in the future to be,
I don't know, soil processing rooms or anything really
[59:27] within a technical bracket.
[59:28] So this one was quite a tricky one, because, again,
we needed to describe a feeling of age and, you know,
[59:36] a type of historical depth in this.
[59:38] So we tried a few, you know, visual cues like,
you know, there's the physical tape deck,
[59:46] the clicking buttons.
[59:47] You know, again, to give you that feeling of like,
all right, this isn't necessarily like a modern
[59:53] technology level, you know.
[59:56] And then the last major
visual archetype was engineering.
[1:00:01] So these are the type of spaces that could be a power
room, or an engine room,
[1:00:05] or some areas if your armor got beat up,
you could repair your armor in there.
[1:00:11] Basically, it's a language which will enable us to
create a variety of, like, engineering type spaces.
[1:00:18] And then once we've established a spread of visual
archetypes, we knew that they were all
[1:00:26] working well together.
[1:00:27] We could take that as a format and then start to think
more about actual themes that we wanted
[1:00:33] in these outposts.
[1:00:34] - Yeah, kind of looking at who would be the people that
would be inhabiting it.
[1:00:38] What are the circumstances that would
drive them to be there.
[1:00:41] And so we sort of came up with, like, I call it,
the triangle of kind of the edge points of sort
[1:00:49] of the independent, the outlaw, and the corporate.
[1:00:54] And, you know, where the inhabitants would fall
somewhere in that spectrum of three points.
[1:00:59] And it's also important to note too, you know, that this
stuff would be applicable for the stuff we did on Stanton.
[1:01:05] Like, if we wanted to add these backwards instead as
well, but it wasn't just exclusively Pyro based.
[1:01:15] - Basically, when we was doing the design process,
we pretty much focused on independent,
[1:01:22] mainly because that was our baseline.
[1:01:24] It was very easy to kind of design these and visually
design these spaces to...
[1:01:29] Is that like an independent farmer,
is it an independent miner.
[1:01:33] And then with that, we wanted to really create an
experience where you walked into one of these outposts
[1:01:40] and it feels old, it feels relatable,
but it doesn't feel recognizable.
[1:01:46] Kind of similar to if you went to, like, a historic ruin
or historic port that you'd never really been to before.
[1:01:52] - Yeah.
Somebody's old farm.
[1:01:53] - Exactly.
[1:01:54] So we did a lot of exploration process of, like,
what type of artifacts would you find now?
[1:01:59] You know, how did people used to decorate the house in
this time period?
[1:02:03] You know, you could still see patterns, surfaces,
shapes in these independent outposts.
[1:02:12] - You know, even early versions of modern technology.
[1:02:15] So you could see that, you know, oh,
this is like the mobiGlas that I have,
[1:02:19] but it's an older mobiGlas or something.
[1:02:20] Just as an example.
[1:02:21] - But also when we were...
[1:02:24] Even just to back up a little bit,
and when we're talking about the planets,
[1:02:27] we have a certain style or we have certain amounts of
points of interest that we want to go to and how we
[1:02:34] pull the player around the universe.
[1:02:36] And so, Dave, and I, and Will,
and others sit down and talk and say, all right,
[1:02:43] what do we need here?
[1:02:44] And all right, well, we need mining facilities.
[1:02:47] And then that helps to inform Ian and the other design
teams and art teams of, all right,
[1:02:55] is that an independent theme?
[1:02:56] Is it a corporate theme?
[1:02:58] Is it an outlaw theme.
[1:03:00] So these are all kind of layers.
[1:03:02] But the first and foremost, it's, oh,
this is farming or this is mining or this is,
[1:03:08] you know, cargo.
[1:03:09] - Because looking at something like Pyro II which,
you know, again, starting from that sort of original
[1:03:14] pracy sentence of the planet was the idea,
was like that was a heavily mined, mined out planet,
[1:03:19] that had been kind of stripped of a lot of resources.
[1:03:21] So there would be remaining infrastructure that would
have been corporate back in the day,
[1:03:26] but is now independent or now even an outlaw setting.
[1:03:30] And then there would be the ones that would just be a
straight independent one and stuff like that.
[1:03:33] But yeah, exactly.
[1:03:34] Like you said, you know,
we'd start start with that sort of the base and then
[1:03:37] apply the theming to it to kind of...
[1:03:38] - When we were thinking about the theme,
we kind of wanted, like, a space catalog, like,
[1:03:48] a furniture catalog.
[1:03:49] So I know this is quite big for Chris, is,
we kind of went down that process of, okay,
[1:03:55] let's design this one independent outpost in a few
different ways, like how could people have decorated it
[1:04:01] in many different ways.
[1:04:02] And is quite a fun process because you basically create
space furniture catalogs, which again,
[1:04:10] are going to be ways for the developers to be able to
dress and will build.
[1:04:15] But eventually, maybe it's a way for people to decorate
their own spaces, you know.
[1:04:22] When we're thinking about the outlaw versions of these
outposts, again, the process is very similar.
[1:04:30] You think about the visual rule sets,
which would turn this into an outlaw outpost, namely,
[1:04:40] you know, has been taken over by hostile intent?
[1:04:43] You know, is the signs of combat,
is the signs of destruction still so present?
[1:04:49] The actual physical act of
occupying one of these outposts.
[1:04:53] Have they defended it?
[1:04:54] Have they boarded it up?
[1:04:55] - Yeah.
[1:04:56] Could be any number of situations.
[1:04:57] Yeah, it could be outlaws are squatting here.
[1:04:59] And they're operating at this base,
which makes it a potential combat space.
[1:05:03] Or is it, you know, was it a potentially an independent
refinery that outlaws attacked and killed everybody
[1:05:09] there and now...
[1:05:10] - ...is a drug facility?
[1:05:11] - Yeah, exactly.
[1:05:13] - And then lastly, on the corporate, you know,
it's something that we really want to advance
[1:05:20] out into in the future.
[1:05:21] But that feeling that this location is owned by a
corporate umbrella, you know,
[1:05:27] that would tie in to the branding.
[1:05:28] You know, maybe it ties into the costumes that you'd
expect the NPCs to be in there.
[1:05:33] You know, so there's a huge amount of visual world
building that we can do to, you know,
[1:05:39] present these outposts in a few different ways.
[1:05:42] - And even potentially reputation as well.
[1:05:44] Like, we talked before about that idea that, you know,
if you do missions for corporate outposts,
[1:05:49] that it reflects on your
general relationship with that corporation.
[1:05:54] - I mean, that ties into the clan tags.
[1:05:56] Like, maybe you've just come from one of the space
stations that, you know,
[1:06:01] was occupied by a certain gang type,
and then they sent you to a settlement on one of the
[1:06:07] services of Pyro.
[1:06:09] And clearly, it's been, you know,
tagged by a different gang.
[1:06:13] So you basically want that
read and that consistency throughout.
[1:06:19] Now, one of the outpost themes that I was quite excited
about getting into was the idea of a trading outpost.
[1:06:27] You know, we've been talking about, you know,
buying and selling for a while,
[1:06:32] but thinking about it in a Frontier context,
it's almost like the money is kind of worthless,
[1:06:42] but it's more about the ability to barter or trade.
[1:06:47] So, fundamentally, I thought it'd be cool,
that if we kind of design a module which focuses
[1:06:54] around one of these trading post.
[1:06:56] So within a planet, you know,
it's where people would kind of trek to and barter or
[1:07:04] trade components and then go back.
[1:07:07] You know, I was talking about the idea of,
if I had a farm in the middle of nowhere, like,
[1:07:11] would I want a load of credits or would I want that one
component that, you know, [crosstalk 01:07:15.538].
[1:07:18] You know, we took that idea and we ran with it.
[1:07:21] And we did some visual exploration into what would a
trading post be like on one of these Frontier outposts.
[1:07:30] So as you can see on the images,
we wanted that feeling of,
[1:07:34] the majority of the stuff around
this outpost is pretty much junk.
[1:07:41] You know, spaces isn't at a premium.
[1:07:44] So they just keep it outside.
[1:07:46] You know, maybe it's rusting, maybe it's rotting,
maybe it's getting overgrown.
[1:07:51] But I love that idea.
[1:07:52] As you're approaching one of these settlements,
it's very easy to understand, all right,
[1:07:57] this is a trading post because, you know,
just all of this stuff, like,
[1:08:02] hodgepodge around the outside.
[1:08:04] - Well, and it opens up another aspect to it,
which is the characters who inhabit it,
[1:08:08] because the sort of general shop experience that you
have with the storekeeper is very conventional.
[1:08:14] You know, what we've done so far has been a lot of
franchise stores, actual companies that are
[1:08:21] selling wares, you know,
who have customer service and stuff like that.
[1:08:25] And the idea being that out here,
the experience is going to be much more different.
[1:08:28] It's not going to be that polished.
[1:08:30] It's going to be much more
of a personal interaction with somebody.
[1:08:33] So it's been really fun talking with the AI and
behavior guys to try and work out exactly like how is
[1:08:39] that dynamic supposed to work,
and feel like for the player.
[1:08:43] - All right, cool.
[1:08:44] So that was a little bit
about the interiors of these outposts.
[1:08:46] So let's throw it over to Eric now.
[1:08:49] And he can go into a lot more detail into the visual
design process we did for the interiors.
[1:08:55] - Hello.
[1:08:56] I'm Eric Gagno, principal concept
artist on Star Citizen.
[1:09:00] Today, I will present the interior colonialism outpost
concept and explain a bit how the
[1:09:07] preproduction process works.
[1:09:09] The goal is to create an interior design for the
homestead colonialism hotbox.
[1:09:15] It was the first time we had
to create a timeless design launch.
[1:09:20] We had the objective to create something warm and with
a cozy feeling interior.
[1:09:26] At the beginning, we started from this concept art made
by Christian Doretz.
[1:09:31] We have a lot of information in
there to inspire the interior design.
[1:09:35] In those interior, we have the specific zones,
social area, place to eat together , play game.
[1:09:42] There is the bedroom, place to relax,
have proper personal space, and of course, sleeping.
[1:09:49] The engineering room,
the place for the building machine, will mend things.
[1:09:53] The possibility to survive there.
[1:09:56] The technical room, the appropriate space to analyze
minerals, some elements of the planet,
[1:10:04] entrance used for storage material
and stuff to go outside.
[1:10:09] At the beginning, we had an overview of the plan that's
helped to organize design.
[1:10:14] To create all of those areas,
we need to do a lot of exploration in this social area.
[1:10:22] For those sketches, we want the centerpiece on the
ceiling, could be a light, fan,
[1:10:27] or whatever that could be called.
[1:10:30] We feel the curvy shape of that space.
[1:10:33] Here on this sketch,
I play with a very contrast values and the greenish
[1:10:39] color about it.
[1:10:39] That one is the best.
[1:10:40] Long vertical windows from the side,
let the light inside the room.
[1:10:45] After evaluation of the most relevant sketch,
we do a 3D blackout.
[1:10:50] As you see, this 3D blackout follows very closely to
the last sketches.
[1:10:56] From the screenshot of the 3D blackout,
I did a sketch over in the Greytown value that helps
[1:11:01] to better organize the coloring things to make sure all
the elements fit and will live together.
[1:11:08] After this, I like to do a 2D elevation concept.
[1:11:12] It's a good way to make sure all elements fit together
and there are ratio proportions between each of them.
[1:11:21] The final key shot of the
social area bringing its alive.
[1:11:25] Nice lighting come from the windows.
[1:11:27] Cozy mood lead a soul to this social area.
[1:11:31] Now my concept art coworkers extract the elements from
this key shot and rig down the props
[1:11:37] to define more accurately.
[1:11:39] First, the homestead [inaudible] counter
done by Danny Chen from the UK.
[1:11:44] That concept is the perfect
blueprint to start the production.
[1:11:49] The color lighting people food is there on this one.
[1:11:53] More cooperation on specific zones
of their original kitchen counter.
[1:11:57] Some extension are had to properly
convey the intent of each part.
[1:12:04] All the details are there to
design a fully functional stuff.
[1:12:08] For the bedroom area,
the process is the same as the social area.
[1:12:13] The sketch phase is essential.
[1:12:15] As you see here is an example of the rescaled sketch.
[1:12:18] From one of those shots,
we get a validation from art directors and CR.
[1:12:24] And boom, this is the final one.
[1:12:27] To detail the engineering room,
we again go back to the painting technique.
[1:12:33] This process, again,
is key to send us in the right direction.
[1:12:39] The detail of the missionary, cabling, metal, grates,
really helped convey the ambiance of the room.
[1:12:45] And that also informs what players will have to do when
they go to this place.
[1:12:51] For the technical room,
we wanted to make sure the technology came true.
[1:12:57] Again, the same process where we start from manual
painting to set the tone and then deep dive
[1:13:05] into color elevation, and then the final key piece.
[1:13:10] To make the homestead a living space,
the bathroom props are important to define the
[1:13:15] functionality of futuristic hygiene.
[1:13:19] Finally, let's exit by the entrance.
[1:13:23] This is the first exploration I did for Star Citizen.
[1:13:27] The goal of the homestead entrance is to show what the
player has access to and set the overall ambiance
[1:13:35] of the place.
[1:13:36] A huge thanks to all for helping to make the final
result in the game match the amazing work that is
[1:13:42] produced during preproduction.
[1:13:44] I sincerely hope you will enjoy living in those
homestead in Star Citizen.
[1:13:51] Thanks, everybody.
[1:13:52] - Thanks, Eric.
[1:13:54] Awesome stuff.
[1:13:55] - Now that we've shown a lot of art and talked a lot of
theory, we want to get into the game and show off what
[1:14:01] we've been working on.
[1:14:02] We're going to be showing you kind of multiple play
throughs and how it changes based off of what you do
[1:14:09] and how you have action with the certain game.
[1:14:13] PYRO IN PLAY WE'RE ALL FRIENDS HERE
[1:14:18] - So here we are waking up in 400i,
that will be released in 3.15.
[1:14:23] This is the competitor to the constellation.
[1:14:25] It doesn't compromise cargo for vehicle storage.
[1:14:28] It's faster, more agile than the Connie,
and it can run with a smaller crew.
[1:14:32] So this is the captain's quarters,
and then we'll go out and see a little bit more of the
[1:14:39] habitation deck, and then make our way to the cockpit.
[1:14:45] So this would be the social area that you can meet and
eat, and basically plan your next mission.
[1:14:58] And then, from here, we'll go to the cockpit.
[1:15:07] So, here, we're over Pyro III.
[1:15:08] We've come here for a mission to acquire an artifact.
[1:15:16] And you'll be making your way down to a trading post.
[1:15:19] So I wanted to just give you a quick overview,
and then we can start talking about the planet.
[1:15:26] - Yeah, Pyro III is, yeah, just a terrestrial planet.
[1:15:30] It has a very thin, breathable atmosphere,
but it's still pretty inhospitable, very cold,
[1:15:37] as you can see, some of
those lightning strikes in the clouds.
[1:15:40] But, yeah, very pretty looking.
[1:15:43] - So this is the first time we're actually seeing
clouds above a terrestrial planet.
[1:15:50] You know, we went through quite
a few iterations of forms.
[1:15:53] What we ultimately ended up on
was something that felt quite dramatic.
[1:15:59] Still believable in terms of how
the wind would have shaped them.
[1:16:05] But yeah, like, it's showcasing a lot of the more
recent tech that came online.
[1:16:12] Also, what we're seeing here is kind of, like,
some distant thunder strikes.
[1:16:16] What this, it's kind of, like, a prelude to, you know,
future weather features that will come on board,
[1:16:22] you know, and how this will tie into storms,
and ship handling due to the turbulence.
[1:16:29] And it's great seeing the rain hit the big glass here
you know, when you go through these cloud banks.
[1:16:39] Also as part of the process of shaping,
one of the things we really wanted to do is create
[1:16:42] these kind of like these pockets in between the clouds
so you're in these cavities.
[1:16:48] Once you fly through,
you get a glimpse of the terrain beneath you.
[1:16:52] But, you know, it feels
quite exhilarating to fly through.
[1:16:58] Also as well, it's showcasing a lot of the more recent
tech coming on board as well.
[1:17:03] So, you know, it's a lot
of optimization's been going on.
[1:17:10] So it's way more performant than previously it was.
[1:17:14] Also, like, the the level of artifacting that we're
seeing here is substantially reduced,
[1:17:19] certainly on highest tech machines.
[1:17:20] - It also gives you a great sense of parallax when you
fly through these cloud sandwiches.
[1:17:28] - A cloud sandwich?
[1:17:30] - Yes.
[1:17:32] That's what it feels like.
[1:17:33] It feels like you're the meat or
the cheese of a cloud sandwich.
[1:17:37] - The cheese of a sandwich.
[1:17:39] So as we get out of the cheese.
[1:17:42] Another really big feature that was important for me
was, you know, terrain shadowing and terrain occlusion
[1:17:50] from the cloud.
[1:17:51] So you're actually seeing, you know,
these large areas of occlusion cast onto the terrain.
[1:17:59] And it just adds that depth.
[1:18:01] It just adds that believability to
what we're seeing in the frame.
[1:18:05] And, you know, when you see, like,
dark overcast clouds,
[1:18:09] and they're hovering above the mountains,
it finally completes the frame.
[1:18:15] Especially when you see the distant rumbles of thunder
in a distance.
[1:18:20] - So, James Cameron, who's doing the the run through...
[1:18:25] Yes, that is his name.
[1:18:27] He will be taking us down to the outposts.
[1:18:29] The goal for us is to basically make 50 of these,
whether they're inhabited, or derelicts,
[1:18:35] or even basically inhabited by a
farmer or inhabited by a gang.
[1:18:44] So the goal is to have these act as different factions,
so that you can develop different rep
[1:18:51] associated with them.
[1:18:53] And you can start seeing how big these outposts stretch
too, with the comms tower that's behind us,
[1:18:59] and then even some of the AA turrets that you'll
actually see up close and personal.
[1:19:24] - That was a really good approach from James there,
a good landing.
[1:19:28] That was a good solid 3 out of 10.
[1:19:31] - Three out of 10?
Geez.
[1:19:33] - Ian's a tough grader.
[1:19:36] - Yeah, I'd go six, at least.
[1:19:39] - No one's ever got a six.
[1:19:42] - You got to watch me land then.
[1:19:44] - So here we'll go down to the technical deck.
[1:19:52] Show off the cargo area as well as the climate
controlled component areas.
[1:20:01] And then onto the gravity generator
room and the stairway out.
[1:20:27] So you'll be able to learn more about the ship in one
of the later panels that we have with Ben,
[1:20:32] Paul, and John.
[1:20:33] I think the team did a great job on this.
[1:20:38] I think this is one of my favorite skins, yeah.
[1:20:40] - Yeah, they did a new skin,
just something that felt a lot more, you know,
[1:20:45] suitable for Pyro but you can see how it feels suitably
worn and weathered to fit into these these climates.
[1:20:54] And, you know, what we're seeing here is first boots on
the ground on Pyro.
[1:21:00] I think it looks great,
especially in contrast to what we're seeing here,
[1:21:04] is like, actual AI on the terrain walking about,
going about their business.
[1:21:10] And is that an AI terrain there?
[1:21:11] - It is.
[1:21:15] And radio comms towers and all these other elements
that we want to make sure that are interactive for the
[1:21:21] player and allows them to go and
explore or use to their advantage.
[1:21:27] We want them to be able
to interact with these different items.
[1:21:32] - Here you can see, like, various outpost modules.
[1:21:35] You know, to the right there,
we've got the garage unit.
[1:21:38] You can see the infrastructure on the roof.
[1:21:40] But this large beautiful, you know,
archway here kind of signifies the main entrance,
[1:21:46] the primary entrance to the main social module.
[1:21:52] I think the air looks great.
[1:21:53] You know, fits in with the art style beautifully.
[1:21:57] - The team did a great job on this.
[1:22:00] - And then we've seen the concept art previously in the
day, and then, you know,
[1:22:06] here you can see it translated in game,
and I think it absolutely looks fantastic.
[1:22:12] You know, the radio forms is
quite special to this art style.
[1:22:18] And you can see how that complements these archways
that lead into other areas of the outpost.
[1:22:24] - So, with the AI, we want to make sure that it's
living, it's breathing.
[1:22:31] If you look back a little bit,
there was a chef actually cooking.
[1:22:35] There are security guards here to make sure that
they're actually protecting their investments,
[1:22:40] and protecting their home from strangers.
[1:22:46] But you have good rep with them.
[1:22:47] And so they allow you to kind of enter into certain
areas that other players wouldn't be able
[1:22:54] to enter into.
[1:22:55] - We also got a quick shot at
the loadout that James is playing.
[1:22:59] So it's a female loadout,
but it's also showing the backpack, which is new.
[1:23:08] Also some of the new here as well,
which is rendering much nicer.
[1:23:11] - So here, the player will make their
way out to the training post.
[1:23:16] Go see the dealer and acquire the artifacts.
[1:23:21] - And for the trading posts, you know,
we wanted to get all of the junk on the
[1:23:25] outside as well, you know,
so the player can see it as they're approaching.
[1:23:31] We wanted, you know, as many tops as we could,
and you can see it's using the new softech shader.
[1:23:35] So these are reacting to the planetary wind, you know,
the same force that the tall grass and the moss in the
[1:23:43] ground is reacting to as well.
[1:23:46] - Other thing with the training post is,
like Ian spoke about before,
[1:23:51] the inventory and what they'll be able to actually sell
here will vary depending on where they're
[1:23:59] at in the solar system.
[1:24:00] Are they close to a jump point where they might be
coming down and using this as a chop shop?
[1:24:06] Or are they in a very rural area that's, you know,
they care more about the frontier lifestyle and being
[1:24:15] able to survive versus money.
[1:24:18] - We passed the kitchen as well on the way back.
[1:24:21] That's the local diner for this outpost.
[1:24:29] Tough crowd.
[1:24:30] - Also, so in the inside as well, you know,
we wanted this kaleidoscope of colors and shapes.
[1:24:39] You know, like, it's literally the dealers displaying
all the wares, everything they'll have
[1:24:45] outside in the open here.
[1:24:52] - [Man] Well, welcome.
[1:24:53] Take a look.
[1:24:55] I'm sure I have what you want.
[1:24:56] And if not, I'll have something just as good.
[1:25:06] Oh, yeah, very good choice.
[1:25:07] Very good.
[1:25:08] - So after 5 million credits of disposable income,
we get our first look at the Hadesian artifact which is
[1:25:16] obviously going to be...is sort of a super rare thing
that you'll hopefully be able to start finding
[1:25:24] in the galaxy.
[1:25:26] Which is sort of if you're familiar with it,
the lord of Hades was the old civilization
[1:25:30] that destroyed itself.
[1:25:32] So somehow this trader's gotten
their hands on this artifact.
[1:25:42] - So here we're showing one way of actually playing
through this area.
[1:25:46] It really depends on your standings within the gang and
how they want to deal with you.
[1:25:51] And then what's the dealer going to do,
what's the dealer going to charge you.
[1:25:56] And from there, we have different ways of actually
showing this and we can look at option two now.
[1:26:05] PYRO IN PLAY THE INEVITABLE BETRAYAL
[1:26:11] - So here we're going to run it back a little bit and
show off a different way of entering
[1:26:17] into the training posts.
[1:26:19] This is a little bit more straightforward versus in
demo one, we we took a side route
[1:26:24] through the social area.
[1:26:26] - So yeah, this is just some additional warehouse space
that the trade inputs would have.
[1:26:33] And you can see it will
lead directly on to this courtyard.
[1:26:37] And for the keen eyed people,
you'd see that the barbecue still not being eaten yet.
[1:26:43] - The grill master would be fired.
[1:26:47] - Yeah.
[1:26:49] Still full of wieners.
[1:27:00] - So with this area again,
we just want to make sure that it's filled
[1:27:04] out with items, filled out with different things that
you can interact with and possibly buy.
[1:27:12] It's like Dave said in beginning,
we want the stores to feel different here.
[1:27:17] But it's still making it feel believable.
[1:27:21] - Quick reference to some additional traversal areas
there on the right when we came in,
[1:27:27] - Well, welcome.
[1:27:29] Take a look.
[1:27:31] I'm sure I have what you want.
[1:27:32] And if not, I'll have something just as good
[1:27:34] - Yeah.
[1:27:40] The guys had a lot of fun dressing these areas.
[1:27:43] There's a lot of storytelling going into it.
[1:27:47] - So here, we decided not to pay the price.
[1:27:52] And we want to...
[1:27:56] We don't mind losing reputation with with the faction
and decide that we're gonna take the
[1:28:03] artifacts through betrayal.
[1:28:07] - Just take it straight out of the backpack.
[1:28:13] - So here we've got different routes for the players to
enjoy and to use to flank.
[1:28:22] And also navigate around.
[1:28:24] So each area will have different secondary and tertiary
routes of navigation.
[1:28:32] James was really just trying to scare him there versus
to kill him.
[1:28:36] - That was intentional.
[1:28:37] Good.
[1:28:38] - You can also...
[1:28:39] If you notice real quick,
there was a...the civilians are actually cowering
[1:28:44] as opposed to fighting which
is kind of similar.
[1:28:50] Typical.
[1:28:52] - So, again, here, the player have a choice.
[1:28:55] You know, do they actually want to interact with the
civilians or does their conscience get better of them.
[1:29:06] - I think James made the right choice there.
[1:29:08] - He was nice.
[1:29:12] Yeah.
[1:29:13] - One of the things when we was playtesting this lot is
when you see the enemy AI kind of fanning
[1:29:20] out across this terrain like that.
[1:29:21] It's fantastic to see.
[1:29:23] It feels really great to see in the base sort of wake
up to you and actually trying to exfiltrate.
[1:29:31] Also I know it's under, you know, combat stress,
but that yellow grass just looks fantastic.
[1:29:37] That's how I play.
[1:29:46] - So here James just wants to get out real quick.
[1:30:21] So as we slightly hinted to in the first walkthrough,
this is where the AA turrets will come alive.
[1:30:28] And basically, if you're not fast enough as James
isn't, with your countermeasures,
[1:30:36] then they'll take you down.
[1:30:44] So what we saw there was the player went in,
and based off their actions,
[1:30:49] the faction changed against them.
[1:30:51] And then, basically became very aggressive.
[1:30:55] So in this last playthrough, what we'll show you is,
if the faction is already against you from the
[1:31:00] very beginning, and what are different ways that you
can go about it.
[1:31:06] So here we are in our last walkthrough.
[1:31:08] Since you're all by yourself,
we wanted to show the player take a stealthy route
[1:31:14] versus if you were with friends,
you could go in guns blazing.
[1:31:19] But this allows the player to come in,
access the outpost from a different side
[1:31:25] than what we've shown.
[1:31:27] It also allows them to clock all the AI and see how
they want to approach the problem and see what other
[1:31:36] secondary or tertiary routes would be open to them,
either via the ladder or maybe a possible door.
[1:31:50] - Good night.
[1:31:51] That was a great shot.
[1:31:53] Also, one thing we did as well, as Todd said, you know,
we changed the time of day,
[1:31:58] the wind is slightly stronger.
[1:32:00] So you'll see the gorgeous yellow grass blown just a
little bit more intense than before.
[1:32:08] Also, what we're seeing here is like something to imply
the frontier living.
[1:32:14] You know, maybe the growing crops or vegetables out
here, but it also gives a kind of like a soft cover
[1:32:19] approach to the perimeter of the base.
[1:32:23] Nice.
[1:32:24] - Also, with it being a different time of day,
this allows us to show off the AI having their
[1:32:34] 24-hour schedule, so that they can be in different
areas when you approach it.
[1:32:41] So if you approach it at night,
or you approach it during the morning, you know,
[1:32:45] they'll be doing different things,
whatever is valid for their schedule.
[1:32:51] - That door's locked,
so there's no going through that way.
[1:33:03] But what James does actually see here as he's skirting
up the next AI is, you know,
[1:33:09] just checking the roofline.
[1:33:11] But as I said previously,
we wanted as many kind of like views in to the base
[1:33:20] as possible to see if the player can continue to keep
context of what's inside.
[1:33:26] - But also when you're inside,
it allows the player to have context of where they're
[1:33:32] at within the actual outpost.
[1:33:35] And that was a great shot.
[1:33:38] - The AI fell beautifully on the already called out
beautiful yellow grass and moss.
[1:33:47] So as James is looking back,
what he's doing is actually making a mental map of,
[1:33:54] you know, possible routes,
possible advanced traversal routes on top
[1:33:58] of the outpost.
[1:34:13] And we saw the dealer there in the bedroom,
just end of the day.
[1:34:17] - So with each outpost,
there'll be different routes that will be open to the
[1:34:24] player or closed to the player.
[1:34:25] So some of them might have ladders on the outside,
some of them might not.
[1:34:29] Some of them might have basically ways to get in
through the floorboards, other ones won't.
[1:34:34] But this is just one version
of, you know, many possibilities.
[1:34:42] So here, the player will take a secondary route of
navigation all the way up to the roof.
[1:34:48] And then from here, this allows them to be able to
check out any of the AI,
[1:34:55] also be able to look at any
of the interactables in the future.
[1:34:59] You know, if you got a good reputation,
maybe you need to go and fix different items
[1:35:05] on the roof.
[1:35:07] Or if you are therefore...
[1:35:11] Nefarious means then maybe you want to take out the
power and which will then, you know,
[1:35:17] kill the AA turrets or will turn
off the lights in the outpost.
[1:35:24] So it allows the player to interact with different
items and then basically create a nice little sandbox
[1:35:33] for them to play in.
[1:35:34] So here you can see one of those interactables as well
as the AI.
[1:35:40] - And just behind these interactables,
we've seen these kind of archways.
[1:35:48] Like, right now, these are just kind of empty,
to just illustrate, like, you got a point.
[1:35:55] In the future, you know,
these could be maybe customizable or could contain,
[1:36:00] like, an age, or like we saw on demo one,
or it could contain like cargo storage.
[1:36:07] Basically we tried to design something that was as
flexible as possible.
[1:36:11] - So here we're showing off the looting system as well
as the inventory system.
[1:36:19] So this will be shipping in 3.15.
[1:36:21] This allows bodies to be able to be interacted with and
take off the items associated with it.
[1:36:28] Also with this change,
you will no longer have global inventory so you can't
[1:36:33] be pulling off weapons that you're going to take with
you to this location.
[1:36:40] Everything will be regarding what you
carry is what you have.
[1:36:46] And so it really makes the players think about how they
want to approach the problem and then also encourages
[1:36:56] them to look around and see if the designers have
placed different things that they can interact with or
[1:37:04] use to help get past a certain route or a certain way
that they maybe didn't bring with them.
[1:37:17] - And we'll also be including, in 3.15,
the Knick-Knacks app for your mobiGlas.
[1:37:22] So now that you aren't carrying everything on your body
and sort of universal inventory.
[1:37:26] You'll be able to consult this app to see kind of where
stuff is being stored and get better organized.
[1:37:32] - So here, this allows the player to have a quick
little puzzle but just gives them a little
[1:37:41] bit more interaction.
[1:37:42] And then allows them to go on to what I would consider
a tertiary route, versus climbing up the ladder and
[1:37:51] possibly having to deal with AI
or them being spotted by them.
[1:38:11] Also, I think the team did a great job on the planet as
well as the outpost.
[1:38:16] These are really fun to play and sneak around in.
[1:38:19] And, you know, allows for many possible ways of
attacking the same problem.
[1:38:30] - What we're seeing here is, like,
James is actually getting up on to through one
[1:38:34] of these, like, rooftop storage modules and it's given,
like, the highest point in the base.
[1:38:41] And from here, you can actually, you know,
make probably the most informed decisions on how
[1:38:47] to approach the next problem.
[1:38:48] You know, we're seeing this guard routine here.
[1:38:52] And then ultimately, you know,
throwing an item to distract the guard.
[1:39:01] - Allows them to go and access new areas.
[1:39:10] It's a behavior that we're still working out,
but at least here, we're seeing, like,
[1:39:14] the first iterations,
to be able to continue to optimize it as well as make
[1:39:21] sure that the behavior is working properly.
[1:39:24] - So we just saw that for the first time.
[1:39:26] It's like the first rooftop air lock hatch So
previously, you'd route in and out if the
[1:39:33] outside wasn't pressurized, like,
we wouldn't have this option.
[1:39:36] But now through that rooftop air lock,
you can cycle and then infiltrate through the roof.
[1:39:44] And also what we're seeing here is, you know,
potentially scouting out an advanced traversal,
[1:39:52] hop into the rafters,
getting on top of some infrastructure and get
[1:39:56] in like this overview as we go into the garage module.
[1:40:05] - So here, this is placeholder,
but it gives you an idea of, you know,
[1:40:11] we want to have different interactables,
different loot boxes laid out around the location.
[1:40:18] So if the players explore, they'll be rewarded.
[1:40:22] You know, we want to encourage them looking in every
nook and cranny, and enjoying what the outpost
[1:40:31] has for them.
[1:40:36] - And one thing that's interesting is these garages
won't be vehicles form points.
[1:40:40] So it's not like a big kind of, like,
pad in the middle, but it's more like, you know,
[1:40:45] if you want to have your vehicle there,
you got to drive it in and park it.
[1:40:49] So here, you can see a variety of vehicles just just
laid out how the player would have just parked them.
[1:40:55] Just gives a much more believable and realistic design.
[1:41:08] - So, again, we're just encouraging different
navigation, different routes for the player
[1:41:15] to go and see.
[1:41:18] Over to the left back there,
there was a possible way of going into the floorboards
[1:41:26] or going underneath the outpost.
[1:41:32] Again, those would be opened up or closed off,
based off of, you know,
[1:41:37] just how we want to build the outpost.
[1:41:41] Not every one will be built the same or philosophy for
the user to make sure that each one
[1:41:49] of them feels unique.
[1:41:51] And this is just one way of us customizing it and
making each one feel different.
[1:41:59] And so, the player won't always
be used to the same route.
[1:42:03] So here, again, we're using the inventory system.
[1:42:07] We allow the players to go in.
[1:42:09] And if you take out a certain AI,
they might have different tools, or different notes,
[1:42:17] or different items that you'll need
in order to solve your mission.
[1:42:26] - Interestingly, when we was designing these spaces,
we knew we wanted these internal air locks,
[1:42:33] but we knew we needed some sort of, like, new, like,
pothole on them too.
[1:42:39] So before you commit through, before you cycle,
you know, you can just double check to see if there's
[1:42:44] any bad guys on the other side.
[1:42:46] - So we got some rag doll bugs.
[1:42:49] I guess it wouldn't be a CitizenCon without any sort of
issues or bugs.
[1:43:03] - So here, like, previously, the player's been,
you know, on the roof.
[1:43:08] They've come down through the
main section of the outpost.
[1:43:11] Here what the player's doing is
they go into the underflow section.
[1:43:15] So these are vents, but they're more like sub flows.
[1:43:20] So they're meant to feel very dark, very minimal,
but you're actually seeing the foundations
[1:43:25] of these outposts.
[1:43:26] So inside here, the player will need to kind of work
out how to navigate through them.
[1:43:32] It's very much, like, a
torch-based experience, you know.
[1:43:38] And then within here,
what the player can actually do is work out roughly
[1:43:44] where they are in relation to what's upstairs.
[1:43:48] And what you're seeing here, like,
this light bleeding down through, you know,
[1:43:53] you can kind of make informed decisions or, okay,
that's where that AI was.
[1:43:57] Or, right now, the player is
just underneath that main social space.
[1:44:01] If you think back, like,
there was a guard in the beginning just
[1:44:04] next to the kitchen counter.
[1:44:08] But, you know, we've intentionally made these spaces
not necessarily like very easy to navigate because
[1:44:15] there wouldn't be a lot of light down here.
[1:44:18] You know, the player would have to follow, for example,
like, James is following the blue wire here, you know,
[1:44:26] making a decision to, like, hey,
if I follow that blue wire,
[1:44:29] I'm probably going to get to something interesting or a
point where I can actually exit the supply space and
[1:44:36] get back up above.
[1:44:38] - And what I like about him is basically just the
claustrophobic feel of it.
[1:44:45] And then obviously the addition of possible secondary
or more advanced navigation.
[1:44:53] So either going into prone or just going full crouch.
[1:45:02] - So here we come out in the bathroom space that's on
the other side of the garage or on the opposite side
[1:45:08] of the outpost, from where we just were.
[1:45:10] - It's good rag doll.
[1:45:15] - Now the body drag in the shower.
[1:45:21] - So here, this is just a
different wrapper on a loot box.
[1:45:27] In this case, it's a hamper.
[1:45:30] And so the player will be able to really change outfits
and adjust the way that they look so that they can walk
[1:45:38] around the outpost and not be noticed.
[1:45:43] There will be kind of a
certain time limit associated with it.
[1:45:49] We still need to work out the
details on how all that will work.
[1:45:53] But the goal is to give them a little bit of leeway.
[1:45:59] And so if you look the part,
maybe you're not scrutinized as much and the AI won't
[1:46:08] notice you as quickly.
[1:46:16] - So here we can see back into the social space but
this time on the other side.
[1:46:19] And then this door will lead directly into the
habitation room that we saw previously on the outside.
[1:46:30] - Speaking of fun rag doll physics.
[1:46:32] - That was a great one.
[1:46:35] - So here, the player decided to take the dealer out
instead of actually figuring out how they could open
[1:46:44] up the safe.
[1:46:46] So they're gonna have to look around the room.
[1:46:49] They're gonna have to interact with the body and
possibly see, you know,
[1:46:54] is there a way for them to actually open it.
[1:46:59] In other cases, maybe the safe
will be hackable in the future.
[1:47:05] And in some cases it won't be,
and then you'll need to figure out a different way
[1:47:10] of actually opening it.
[1:47:21] - So here we spot a little clue, a little note.
[1:47:26] And you'll notice the...
[1:47:29] What's funny is, like, the name on here.
[1:47:30] If you look back and see some of the AI we've been
taking out, you may notice some names.
[1:47:39] So here's the clue for the player.
[1:47:42] But one of the coolest things for me here is,
the player is holding an item with the clue.
[1:47:50] And while holding the item,
they can seamlessly interact with another item
[1:47:55] to solve a puzzle.
[1:47:56] That's awesome.
[1:47:58] - And then here, we get a little bug.
[1:48:00] The player was able to acquire the artifact,
and then will be able to do whatever they want with it.
[1:48:06] Either sell it or be able to use it somehow,
in a future mission.
[1:48:17] One of the things that was really exciting about
watching this kind of back to back to back,
[1:48:20] is finally getting to see that freedom of choice.
[1:48:24] And it's like, it's really, really...
[1:48:25] I mean, again, our locations
are always spectacular and beautiful.
[1:48:30] But now, like, having that sort of...striking that
balance between, you know,
[1:48:34] the sort of well thought out social space and
construction of these locations,
[1:48:38] but also an equally effective stealth and combat thing.
[1:48:42] It's super cool to see.
[1:48:44] - So after seeing the demo playthrough, you know,
three different ways.
[1:48:48] It was a huge team effort.
[1:48:50] So everyone that worked on the project,
on this part of what we wanted to show,
[1:48:56] we want to say a big thank you, you know,
big shout out because we're just presenting it.
[1:49:01] It's the people that did a lot of the hard work that
should be represented.
[1:49:07] And speaking of people doing hard work,
now's a good chance to throw it over to Eddie and Joel.
[1:49:12] And they're going to tell you a little bit more about
how we built that outpost that we just saw.
[1:49:18] COLONIALISM OUTPOSTS IN-GAME DEVELOPMENT
[1:49:20] - [Eddie] I'm Eddie Hilditch.
[1:49:21] I'm a senior lead.
[1:49:22] And myself and my team have been
working on the new colonialism outposts.
[1:49:25] - [Joel] My name is Joel Azzopardi.
[1:49:26] And I'm the senior environment
artist II for the EEU sandbox team.
[1:49:30] - So after the initial concept is done and rounds of
feedback have been iterated on,
[1:49:34] we move into preproduction.
[1:49:36] This phase allows us to spend some time testing the
concepts for in-game viability.
[1:49:41] Translation from concept to game
isn't always one to one.
[1:49:44] And during preproduction,
we'll get rough versions of the concept meshes
[1:49:47] into game and spend time making
sure that they'll work practically.
[1:49:50] The art direction can also change at this stage.
[1:49:52] So we use this phase to kind of explore creativity as
well and conceptize [inaudible].
[1:49:59] - One of the first steps when starting a new location
is to start with development.
[1:50:03] A hyper focused small section of location where we can
hone in the tools and methods needed to execute
[1:50:09] the concept in-game.
[1:50:11] Some things translate well, some things don't.
[1:50:14] It's important to figure all this out before going full
steam ahead with the entire team.
[1:50:18] One of the great assets of the sandbox team is we have
a lot of people that are passionate
[1:50:22] about concept and design.
[1:50:24] Which means when translating from concept to production
environment, it's very easy to expand
[1:50:29] on the concept art.
[1:50:30] With the art styles of the colonial outpost,
we decided to change up the way we typically author
[1:50:35] content more befitting to the style.
[1:50:36] Our hard surface locations are
meant to feel pre-fabricated.
[1:50:40] Like there's a manufacturing plant out there on ArcCorp
that churns out these flat packs base station kits,
[1:50:46] so stations can be mass produced.
[1:50:48] Colonial outposts are more personal,
more handcrafted by the people who live there,
[1:50:52] based on their needs, not wants.
[1:50:54] They're on the frontier world,
so they can't always choose luxury over practicality.
[1:50:59] Materials were one of the first things we tackle and we
started off by developing the idea of how the
[1:51:04] inhabitants would have built these structures and what
materials they would use.
[1:51:08] We wanted to show not only the age of the outposts,
but also wanted to hint at all those different layers
[1:51:13] of the structure and give you an idea how functionally,
they constructed them.
[1:51:17] - One of the biggest challenges with the new outpost is
how we introduce variation between each location the
[1:51:22] player will visit.
[1:51:23] Building each as a bespoke set of buildings is
impossible as we want hundreds if not thousands
[1:51:28] of outposts in the game eventually.
[1:51:30] The modular approach that we've developed really
evolved out of our previous work on space
[1:51:34] station interiors, but with a few key improvements.
[1:51:37] This starts at the macro level.
[1:51:39] Where on the planets outposts are placed,
how the local conditions affect your time there.
[1:51:43] Then what kind of buildings an outpost has and how
they're laid out, all the way down to the ability
[1:51:48] to independently swap out an under floor layout in a
single building of that outpost.
[1:51:52] We will have various types of modules from large
standalone modules like warehouses or extractors which
[1:51:58] have a singular function,
all the way down to smaller room modules that can be
[1:52:02] connected together in different ways to
form a complete headquarters building.
[1:52:06] After pre-production was finished,
we had a list of the room module types that we wanted
[1:52:10] to tackle first.
[1:52:11] For the headquarters building,
everything hinges around a hab module,
[1:52:15] with different room modules that can be attached to
extend the structure.
[1:52:18] The room modules will serve different functions in the
base, with various gameplay systems linking one
[1:52:23] to another for an interconnected
web of sandbox gameplay opportunities.
[1:52:26] As content creators for the outpost,
we needed a new system to build, edit,
[1:52:30] and manage the library of modules we're creating.
[1:52:32] Raster is a tool used to do this.
[1:52:34] It allows us to intuitively create a location template
directly on the surface of the planet.
[1:52:40] Not only this, but headquarter buildings can be snapped
together directly within the tool,
[1:52:44] or with an intuitive user interface.
[1:52:46] One of the other major innovations with the planet tech
has been the ability to modify the terrain mesh and
[1:52:51] flatten areas of the terrain.
[1:52:53] Previously, we were at the mercy of the terrain when it
came to designing our buildings,
[1:52:57] which is why our outposts had to be built with stilts
and placed in naturally flat areas of the planet.
[1:53:03] Now, we can build much more natural buildings with
walls and entrances connected directly
[1:53:07] to the planet's surface.
[1:53:08] And also we can place the buildings in a much wider
range of locations.
[1:53:12] We believe our new outposts injected refreshing new
location experiences in Star Citizen.
[1:53:17] They're organic, warm,
personal spaces that really convey the age and history
[1:53:20] of humanity's expansion into the 'verse.
[1:53:23] The new art style, the focus from design on gameplay,
and the flexible modular approach
[1:53:27] to their construction, will allow us as developers,
and you as players to be part of creating a wider
[1:53:32] variety of rich and satisfying experiences for every
outpost the player comes across.
[1:53:38] - Okay, cool.
[1:53:39] Thank you, Eddie Thank you, Joel.
[1:53:41] That was awesome.
[1:53:41] - And moving on, we're actually going to talk to Cory
now, who is going to give us kind of a deep dive
[1:53:46] into the creation of the artifact which was actually
kind of our first little glimpse of the Hadesian
[1:53:53] culture from Hades system.
[1:53:54] - [Cory] Thanks, guys.
[1:53:56] I'm Cory Bamford, lead props
artist at Cloud Imperium Games.
[1:53:59] I'm here today specifically to talk about the Hadesian
artifact that you'll see in the walkthrough.
[1:54:04] So we knew early on,
we wanted some sort of MacGuffin for the walkthrough.
[1:54:08] We originally had a few ideas of what that could be.
[1:54:10] Originally, it was either going to be a tablet
fragment, a sculpture, or a Hadesian artifact.
[1:54:16] So initially, the concept team
explored a variety of ideas.
[1:54:19] We used a lot of reference for existing alien artifacts
in the game, as well as reference from the real world.
[1:54:24] You know, lots of tomes and ancient kind of Egyptian
stuff as well, just all sorts of really references just
[1:54:30] to get a general idea.
[1:54:32] We knew we wanted to integrate some form of ancient
power technology into the asset.
[1:54:38] We also knew we wanted it to have some sort of
symbolism and text.
[1:54:41] So once the concept team iterated further on these
ideas, they then presented those back to Chris,
[1:54:46] and we narrowed down the selection of assets until we
had the candidate that everyone was happy with.
[1:54:51] So once we had this asset in mind,
it then came down to turning that from a concept
[1:54:55] into a production asset.
[1:54:57] And that's where the props team comes in.
[1:54:58] When a prop artist gets a concept like this,
immediately, the wheels in their head start turning,
[1:55:03] and they're trying to figure out the best way to
implement it in our game engine.
[1:55:06] They need to find solutions within the engine to
achieve the visual target of the concept.
[1:55:11] Obviously, it's not as simple as just taking the
concept and replicating it,
[1:55:13] we have to think about the shaders,
we have to think about performance.
[1:55:19] Our job really is to find a solution within the game
engine to achieve the visual target of the concept.
[1:55:25] Once you've figured out a strategy for achieving the
look, we begin to actually make the content.
[1:55:30] So for the artifacts, for example,
we knew that it needed to be split into three segments
[1:55:34] and it needed to fit together.
[1:55:36] The first thing we do is get a placeholder into the
game for the design team to actually implement
[1:55:41] as an entity.
[1:55:42] We also then figure out how the scale actually works in
the player's hand, and when they inspect it.
[1:55:48] For the artifact there was a bit of back and forth
between the size because we wanted to get a balance
[1:55:51] between having prominence and
also being easily carriable.
[1:55:54] After we've figured out the size of the asset,
we then need to actually break down how we're going
[1:55:58] to make it.
[1:55:59] So the first thing we really get into is the materials.
[1:56:01] We know that this asset is
made of a few different materials.
[1:56:04] Firstly, we have the stone with
the complicated color and pattern.
[1:56:08] We also have these large copper structures and some
smaller, thinner metal structures as well.
[1:56:13] For this asset, we knew we'd need to use unique
textures just because of the amount of detail we
[1:56:17] wanted to achieve.
[1:56:18] One of the biggest challenges we had was making sure
that the stone looked really good.
[1:56:22] To create the stone,
we started with some scan data of rocks and concrete
[1:56:26] as well as some mesh data like curvature.
[1:56:29] We also used a lot of procedural noises from substances
on it just to add some variety.
[1:56:33] Using the height map as a jumping off point for the
rest of the texture maps is quite a nice logical and
[1:56:37] physicalized way of doing things.
[1:56:38] It took quite a lot of iteration to get the final look.
[1:56:41] It was definitely a group effort.
[1:56:42] The glow was probably the trickiest part of this asset.
[1:56:45] We ended up actually using a shader some of you might
remember from the Vanduul Driller trailer.
[1:56:49] We created the iconography using
a bespoke texture mask.
[1:56:51] And then the circles were derived from some cells
within Substance Designer.
[1:56:56] We took these cells, quantized them,
and then got the edges of that quantization
[1:57:01] to create rings.
[1:57:02] And then we used the procedural mask as well as some
hand painted textures to mask out that glow.
[1:57:07] Once we were happy with this texture,
we multiplied that onto the height map,
[1:57:11] which is used to drive the glow threshold.
[1:57:13] The glow effect has three texture
inputs that we need to create.
[1:57:16] There's an animated glow map, which is sort of used
to drive the background effect of the glow.
[1:57:21] There's also a gradient which colors that map.
[1:57:24] Finally, we have the actual pulse itself,
which is the texture map that pulses across the asset.
[1:57:29] Next up is the bronze.
[1:57:30] This was actually pretty straightforward to achieve.
[1:57:32] We didn't need any fancy shader effects for this one,
just a standard set of unique textures.
[1:57:36] We wanted to get lots of nice
scratches and aging on the bronze.
[1:57:40] And in the concept there was also this nice effect on
the edges where the metal got darker.
[1:57:44] So we wanted to add that in as well just to give it a
more distinctive feel.
[1:57:48] Once we were happy with the visual look of the asset
and engine, it then was just a case of wrapping it up.
[1:57:53] We needed to create LED meshes for the object as well
as collision proxies.
[1:57:57] As you can tell, quite a lot
of work goes into these hero assets.
[1:58:00] So that was a little bit of exploration into how we
created the Hadesian artifact for the walkthrough.
[1:58:05] I hope you guys enjoyed listening to me talk about it,
and enjoy the rest of the show.
[1:58:09] - So we wanted to thank you for your time.
[1:58:12] We wanted to introduce Pyro and show all the hard work
that all the teams have been working
[1:58:17] on and working towards.
[1:58:20] The team has put in a lot of hard work in building the
Pyro system, building the AI, building the planets,
[1:58:28] the worlds that you'll go and explore.
[1:58:31] So Pyro will be ready when server meshing is and it
will be coming out with Star Citizen Alpha 4.0.
[1:58:37] So on behalf of myself, I want to thank Dave, and Ian,
and yourselves, for watching.
[1:58:43] And I hope you enjoyed the panel.
[1:58:45] And I hope you enjoy the rest of digital CitizenCon.
[1:58:48] See you in the 'verse.
[1:58:49] ♪ [music] ♪

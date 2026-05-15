# 10 for the Developers: Episode 06

**Video:** https://www.youtube.com/watch?v=OsA8rglWoEU
**Date:** 2016-02-22
**Duration:** 52:23

## Transcript

[00:02] Closed Captioning provided by the Imperial
News Network.
[00:11] Darian Vorlick (DV): Hey everyone, welcome
to this next episode of 10 for the Developers.
[00:21] I’m Darian Vorlick, Production Coordinator
here in CIG Los Angeles.
[00:25] Kirk Tome (KT): And I’m Lead Technical Designer
Kirk Tome.
[00:27] DV: So first we wanted to thank the subscribers
for being able to make content like this possible.
[00:32] Without you we would not be able to put forward
such informational interviews and content
[00:38] as such as this, so from us thank you guys,
[00:41] KT: Thank you guys.
[00:42] DV: So let's get started with the first question,
Kirk, you got one.
[00:46] KT: Okay
[00:47] [0:49] Far-seeker asks: Since you are working
on the Xi’an Scout, which from its initial
[00:53] concept had a set of movable thrusters, can
you update us on the technology development
[00:58] to support this, as well as any effect it
might have on other ships with rotating or
[01:03] otherwise articulating main thrusters?
[01:05] Specifically any comments on the Cutlass,
the Freelancer, and the Reliant, would be
[01:10] deeply appreciated!
[01:11] KT: Yes.
[01:13] We can start to talk about that.
[01:14] just to start on a few of the comments about
the Xi’an Scout which i’m currently implementing
[01:21] for the hangar ready, in the hangar.
[01:28] The actual name of the vehicle is the Aopoa
Khartu Al.
[01:34] It is the manufacturer Aopoa’s conversion
of the Xi’an scout for human use.
[01:45] It currently has a single seat and no ejection
capabilities.
[01:49] I just want to put that out there.
[01:51] We decided that for a light fighter of this
size the current single seat arrangement worked
[01:58] best for it.
[01:59] In the future we may have a variant of perhaps
another Aopoa manufactured seat that has multiple
[02:05] seats but the current iteration of the Khartu
Al is single seater.
[02:12] The thruster questions on here.
[02:17] Yes, the Khartu Al will have four articulated
thrusters.
[02:22] The thrusters themselves will orient themselves
to actually be able to complete a turn a turn
[02:31] up to ninety degrees for the outer most axes.
[02:34] Each of the thrusters themselves will include
the retro thrusters in the front so they’ll
[02:42] be dual sided thrusters which will greatly
allow the Khartu Al to have a lot of maneuverability
[02:52] so that the main thrusters can actually contribute
to horizontal and vertical thrust as well.
[02:58] DV: Basically it’s vectored thrusting
[03:01] KT: Right.
[03:02] The way we’re going to do this, we’re
going to allow the main thrusters to contribute
[03:08] to sideways thrust without actually animating
them as quickly as they need to provide that
[03:14] thrust.
[03:15] One issue what we had with the Cutlass, that
we still currently have with the Cutlass.
[03:20] Is that having the large thrusters provide
thrust in the actual vector that are facing
[03:28] makes the thrusters so that they’re really
floppy and so from the rear, when the Cutlass
[03:33] is flying should we provide any type of vertical
thrust to provide stability for the ship.
[03:41] We found that, they’re simply too floppy
and it just looks awful.
[03:47] So the way to do this is to provide that thrust
and actually throttle the, speed at which
[03:55] they rotate so that will have a ship that
has this type of nice, floaty motion without
[04:03] having four long wings that simply flap in
the wind which will make it look awful.
[04:10] So we’re still developing that and we will
of course have that available for the engine
[04:16] and for future ships so that, that will become
available.
[04:21] In the near time, we’re considering making
the Cutlass thrusters only rotate for VTOL.
[04:30] The same is maybe true of the Freelancer that
way they still will have joint rotation without
[04:36] that weird floppy animation.
[04:41] Some other technology we will need to develop,
the Khartu Al is one of the first ships that
[04:46] will have a landing and flying mode, which
are vastly different.
[04:54] you’ll notice it is very folded up when
it’s landed and will expand out like a flower
[04:58] when it’s in flight mode.
[04:59] The same will be true for the Reliant.
[05:02] So what we’ll do is, we’ll create states
for the ship; landed or in freeflight that
[05:09] way the thrusters know how they’re going
to behave and will allow things like; turning
[05:17] them off when it’s in landed mode or for
the Reliant because of the vertical orientation
[05:23] of them.
[05:24] We will know how these thrusters are supposed
to affect the ship because of those two states
[05:30] that the ship is in
[05:31] DV: Yeah, how does something like… we have
our Flight Engineer: John Pritchett, who works
[05:37] on the ICFS and SCM how would does this change
what he needs to do as far as flight controls
[05:44] are concerned.
[05:45] KT: That’s a great question!
[05:46] We would need to discuss with him how we would
need to signal the ship, so that it knows
[05:52] which orientation its in.
[05:53] I think that’s a simple variable in the
ship will determine when it’s not in landed
[06:01] mode or when it’s in flight mode and then
John can then, recalculate what the actual
[06:08] thrust from each of the thrusters, needs to
generate in order to maintain proper flight
[06:13] based on that orientation of the ship.
[06:16] DV: That is a mouthful!
[06:19] KT: It’s a complicated ship!
[06:21] [6:22] Andy Goodstar asks: Are alien races
treated as ‘one’ manufacturer each, or
[06:27] are there different brans of Xi’an/Banu/Vanduul
ships?
[06:31] What is specific signature of Xi’an Scout
manufacturer?
[06:33] DV: I figure we would just tack this one on
since we were just discussing the Scout.
[06:39] So right now Xi’an, Banu and Vanduul are
kind of their own, I don’t want to say brand,
[06:45] but I guess species brand in themselves.
[06:47] KT: Sure.
[06:48] DV: We may in the future look to expand those
but at this moment we are looking at just
[06:52] a single manufacturer.
[06:53] That’s correct?
[06:54] KT: Correct.
[06:55] The Vanduul components were implemented as
Vanduul components.
[06:58] The Xi’an components will not, they’ll
actually be … as we’re doing a component
[07:06] refactor, the Xi’an components will be actual
manufacture components.
[07:12] So we’ll have “human” components that
are on the ships so that you can upgrade them,
[07:20] exchange them them out, etc.
[07:22] In the future I think we will work with the
writers and then come up with the alien manufacturers,
[07:33] each with their own components and capabilities.
[07:36] So that we can do things like have Xi’an
specific components or whatnot.
[07:42] For now we are currently going with the human
components.
[07:45] DV: One of the things, if you guys actually
watched the 10 for the Developers with Sean
[07:49] Tracy and Steve Bender, one of the things
they talked about was human-to-alien analog
[07:54] components.
[07:55] For example if a Vanduul is how X feet taller
than a human you don’t want a human wearing
[08:01] a Vanduul t-shirt because it’s going to
be a lot bigger.
[08:05] So we also have to take that into consideration
as far as when we create these alien manufacturers.
[08:09] We can’t just take an alien t-shirt and
throw it on a human and say “hey we’re
[08:14] done”.
[08:15] We have to take into consideration if the
humans’ size are; that their dimensions
[08:17] are; whether it is compatible with human ergonomics
at all.
[08:22] So rather than just creating a bunch of alien
manufacturers we want to make sure it is something
[08:27] that is realistic; that fits into the story;
and actually fits into the game mechanically
[08:32] as well.
[08:33] KT: Right and that’s a conversation for
the Khartu-Al: the control scheme are these
[08:38] two spherical control components that humans
will put their hands on.
[08:44] It’s just a prototype at the moment we’ll
refine how that actually works but the early
[08:50] example of that was on the … what are the
Vanduul ships … the Scythe …
[08:58] DV: And the Glaive.
[08:59] KT: … and the Glavie.
[09:00] They had their own custom UI that had an alien
flavour to it.
[09:06] DV: Right.
[09:07] KT: The same thing would be true for the Xi’an
type of ships.
[09:10] DV: That’s why Zane, our UI guy, he put
static across the UI as if trying to show
[09:16] that we are trying to translate alien technology
into human use.
[09:20] So it’s still a little buggy in game, so
it was a little flavour to that.
[09:23] KT: Yeah.
[09:24] DV: But in the future we may expand it.
[09:25] So you never know.
[09:28] Speaking of components you had a components
question that I think nice tail into that.
[09:34] KT: Yeah so there’s a three part question
here.
[09:41] These came from Daz, Halbard and Tommytrain
(great name).
[09:46] [9:40] Daz asks: In regards to the component
system can you discuss some of your recent
[09:51] accomplishments with this.
[09:53] Also do you expect we will be able to get
a component stats page similar to the ship
[09:59] stats page we have now.
[10:00] Have you considered adding a ship designer
page to the website so we can tune our builds
[10:05] before committing?
[10:06] Halbard asks: Will changing the components
of your ship have a noticeable effect on its
[10:09] performance and capabilities?
[10:11] Are there plans to have multiple viable upgrade
paths in order to prevent everyone gravitating
[10:17] to a single build?
[10:18] Are you considering a balancing mechanic for
upgrading so that improvements in one system
[10:22] come at the expense of another?
[10:23] Tommytrain asks: Aloha Devs, how are the gameplay
concepts of ‘modular components’ and ‘component
[10:29] tuning’ materializing themselves in design
of the components for the latest and future
[10:34] ships coming off the pipeline?
[10:36] Are they interacting as these components become
real things, with size, shape, mass as well
[10:42] as output forces/effects and corresponding
draws on the components which provide energy,
[10:48] cooling, compute cycles?
[10:50] KT: This is a big topic.
[10:53] We are currently tackling each of the components
one system at a time.
[10:59] I’m sure you’ve noticed that we’ve recently
just refactored the coolers that did involve
[11:08] resizing the components because there will
be real components in the game, on the ships.
[11:21] DV: Taking up volume.
[11:22] KT: Yup, they’ll be size appropriate for
their capabilities, placed on ships, with
[11:28] ships that have interiors such as the constellation
or the future Idiris or any of the larger
[11:34] ships we will have access to them from the
interior so that when we implement damaging
[11:40] gameplay, which were still designing at the
moment, you will be able to access them and
[11:46] have a crew member run down the hall, go down
to the powerplant that has been damaged and
[11:52] then actually repair that by access the component
from a panel say in the hall that contains
[11:59] that particular component.
[12:00] So there will be real physicalized items that
are in the game.
[12:03] DV: Treat it a lot like Scotty from Star Trek
kind of thing where someone has to go down
[12:07] a fix the shield generator or fix the warp
core or something like that.
[12:10] KT: Exactly.
[12:11] So if the engineer does notice that, “hey
we got the coolers damaged, now we don’t
[12:17] have cooling on the right side of the ship.”
[12:19] You can send the engineer down to physically
fix that component or perhaps even trade it
[12:24] out for a brand new component and get back
instant access to the cooling capabilities
[12:28] that you just lost.
[12:30] DV: So just hope you don’t have to run a
whole kilometer length ship.
[12:33] KT: Yes, So, that may be a possibility.
[12:38] What does that entail?
[12:40] Well we’re refactoring all of our component
so that we actually keep in mind the capabilities,
[12:47] the positive and negatives of each of the
functions of that particular component.
[12:51] Dave mentioned coolers so cooling capability,
power draw, signature, these are things that
[12:57] are going to be integral for how the coolers
will work.
[13:01] What we need to do then is get that system
in and then take a balance pass to figure
[13:09] out, ”Okay we have a size one,” let's
say, drake … I don’t know if they’ve
[13:15] actually created a cooler at the moment but,
Drake cooler well, where does that sit as
[13:22] far as its capabilities.
[13:24] Is it a C grade item?
[13:26] What does a C grade item mean?
[13:27] We define that and then we can place those
on ships that would be appropriate for that
[13:33] part.
[13:34] Size two or a medium sized cooler would go
on one of the larger ships.
[13:39] It has it’s own determinants and positives
which you can decide how you want to output
[13:46] your ship by the purchasing the component
or when we have future gameplay which you
[13:51] can salvage components, perhaps you can actually
pry one off a large shipment and say, “Hey
[13:56] this is way better than mine, I’m gonna
go and place it on the holotable and include
[14:02] that on one of my loadouts for one of my ships.”
[14:06] Also in the future we may allow the capability
of particular like craftsman to hone certain
[14:14] components so that they can actually improve
them.
[14:17] Maybe the get better at improving a certain
manufactures coolers and power plants.
[14:22] DV: Tuning and overclocking and stuff.
[14:24] KT: Yup and so that would be great, it would
be a great career for someone to be a specialist
[14:28] in.
[14:29] DV: you’re a ship mechanic.
[14:30] KT: Yup and then you can earn your credits
or do whatever you want to do and become that
[14:36] go to person in the Star Citizen Universe
to get better at that particular skill.
[14:44] What else did they … Oh, so the tuning,
So what does tuning and balancing mean?
[14:51] Well it means different things for each of
the components.
[14:55] What is ultimately does mean is that we figure
out what each of the components do, what their
[15:01] range of capabilities are for their particular
stats and then we make realistic ranges for
[15:09] those particular values.
[15:11] We’ve done a pass of coolers, we’re in
the middle of doing powerplants and we are
[15:17] in the middle of refactoring shields as a
system entirely so we will have shield emitters
[15:24] on the ship that are powered by shield generators.
[15:26] So when you upgrade shield generators by purchasing
a new one, you will increase the shield capabilities
[15:32] of your ship.
[15:35] Things like, well a number of faces will most
likely be tied to the ships but, the regeneration
[15:41] rate of the ships, the absorption of the shields
rather, how quickly it can shunt power from
[15:54] the primary face that you set onto the ship,
these will all be things you can upgrade by
[16:00] purchasing new shield generator components.
[16:03] DV: Speaking like someone in the middle of
combat, you want to redirect further energy
[16:06] to the front or to the aft or from the you
know forward starboard side.
[16:10] KT: So if you have a lesser performing shield
generator for example, it may take longer
[16:17] for a shield face with zero health to recover
and get back any shield capabilities.
[16:26] So you may consider purchasing or finding
a better shield generator to upgrade that
[16:31] particular capability.
[16:32] That may mean more power draw so you actually
have to purchase a powerplant that is capable
[16:38] of powering all the components that you decided
to fit onto the ship.
[16:42] So that’s what balance entails.
[16:45] We’re currently, most of our components
are outclassing their capabilities so powerplants
[16:56] generator more power than you’ll ever need,
coolers can cool more heat than you could
[17:01] ever generate.
[17:02] What we need to do is as we implement this
components, we need to step back and take
[17:07] a look at what the actual values for the components
that we’ve created, what are those ranges?
[17:16] What are those extremes?
[17:18] How do we figure out how these components
fit within those extreme ranges and then figure
[17:25] out, “Okay, this is the sweet spot for that
particular component, and this is where it
[17:29] sits.”
[17:31] As the player, you decide by mixing and matching
the components onto your ships, how they actually
[17:38] work and whether they provide the desired
functionality that you want to implement.
[17:43] DV: While still maintaining usability and
functionality.
[17:45] KT: Yup
[17:46] DV: I’m trying to remember correctly, I
think Matt Sherman explained it to me.
[17:50] For example the ship had two shield emitters,
it could be there’s one in the front, one
[17:56] in the back or one left or right, I mean you
pretty much have two halves of a shell correct?
[17:59] KT: Right and so.
[18:00] DV: One has four and you’ve got much more
control because now you’ve gotten quadrants.
[18:03] KT: So those are faces.
[18:08] I want to create six because to me four doesn’t
quite make a lot of sense.
[18:12] DV: Right.
[18:13] KT: Front back makes sense.
[18:14] DV: And you’ve top and bottom as well.
[18:15] KT: Right so bubble makes sense, front back
makes sense, I think six is the next logical
[18:20] step, but that is a function of smaller ships.
[18:26] Now when we get to capital ships, ultimately
what we want to do is, you’ll want to have
[18:31] say four shield emitters, one that controls
the front quarter, the second quarter, the
[18:39] third quarter and the rear quarter.
[18:40] Each of them controlling their own faces,
that way we’ll have gameplay in which you
[18:45] destroy the shield emitter or the generators
that are connected to the front port faces,
[18:48] you actually have a chance in now infiltrate
the ship from the front and give you an incentive
[18:52] to go after the sweet spot in the front that
you’ve dedicated so much time to destroy
[18:57] with a squadron of small fighters.
[18:59] DV: Well now let's say you have a long carrier
like a Bengal or Pegasus or even an Idris
[19:04] I mean you set up something that long, you
could even have mid bulk emitters so if one
[19:07] of those gets taken out you still have an
opportunity to have something sneak in while
[19:11] one of those shields are still on before it
pops back up.
[19:14] KT: Right, exactly.
[19:15] DV: We can create some really cool missions.
[19:16] KT: And I think it’ll allow players to figure
out strategies not only to attack shields,
[19:22] but defend themselves.
[19:23] If you find that you frequently outclass in
the front, well let's get some shield generators
[19:29] and upgrade them on the front side because
we know that’s our weakest point of entry.
[19:34] DV: A very spartan type of attack.
[19:37] Or you can lower one of them and try to lure
them into it knowing that’s where your main
[19:41] guns are.
[19:42] KT: Yeah, eventually we’ll get to actually
figuring out how the engineer can do things
[19:46] like shunt power or priority to those shields
and so, this is a big discussion on one of
[19:54] these systems and we’re doing this for each
of the components as we go down the line.
[19:58] DV: It’s pretty exciting stuff.
[19:59] This next question is kind of a much more
production related question from...
[20:03] [20:04] Perry Hope asks: Do the producers
specialize on a game aspect or do you need
[20:07] to know ‘everything’ about that game?
[20:09] DV: That’s an interesting question, one
of the goals of what production is is we basically
[20:14] try and make sure that designers like Kirk
have the resources they need to make the game
[20:19] possible.
[20:20] So, while the production coordinator for the
tech design and engineering team.
[20:25] It’s not my job to know how to do coding,
or how to do engineering or necessarily know
[20:29] how to do tech design, I just need to make
sure they have the resources they need, make
[20:33] sure the information is being correctly funneled
to them.
[20:36] Now, ultimately what can cause a bottleneck
is something like lack of communication or
[20:40] what else would you consider…
[20:42] KT: That is the priority number one, communication
is the most important thing that a producer
[20:49] can provide any employee...
[20:51] DV: Right.
[20:52] KT: In development, we need to keep those
channels open and ensure that everyone knows
[20:56] what they need to do and are expected to do.
[20:59] That way we don’t have issues where, ‘hey,
I didn’t know that Jimmy over here was supposed
[21:04] to be doing this.
[21:05] I’ve been waiting for him to finish this
other task, which prevents me from implementing
[21:11] thing I wanted to do…’
[21:12] DV: Right.
[21:13] KT: So, communication is absolutely number
one.
[21:16] DV: A good producer will be able to keep their
team in the loop at all times, an excellent
[21:20] producer will be able to preemptively predict
what obstacles are coming down the road.
[21:24] Be able to foresee what things down the road
are going to bottleneck, such as knowing what
[21:28] the other teams are working on.
[21:30] For example, we have Mark Hong, who is our
art and animation producer, so if I am working
[21:36] on a particular feature as a producer…
[21:39] my goal is I want to be able to talk to Mark
and find out what he’s working on.
[21:43] See how what he’s going to do is going to
effect what Kirk’s team is coming or is
[21:47] doing down the road.
[21:48] So if we see Kirk is working on a particular
component for a ship, if I find out from Mark
[21:54] early on that that ship is going to be delayed
or the art isn’t coming along as quickly
[21:58] as possible it’s my responsibility to provide
that information to Kirk say, “Hey, we have
[22:01] a little more cushion time as far as that
particular ship so if you have something else
[22:07] you need to work on, some low hanging fruit
that you want to complete in the meantime”.
[22:10] That’s where the producer comes and lets
these guys know, that’s what’s available.
[22:14] As far as specialization, it’s useful to
be able to talk to those developers at an
[22:20] educated level, like I said before you don’t
need to know how to program but at least know
[22:25] what those programmers are doing and what
they’re working towards.
[22:28] Same thing with tech design, we necessarily
don’t need to know everything about game
[22:33] balance but we need to know what their objective
is and how do producers help them to complete
[22:38] that objective.
[22:39] KT: From a developer’s standpoint, it is
my responsibility to inform producers as far
[22:46] as the things they do need to know about that
particular task so they can make an educated
[22:52] choices about scheduling and task party, etc.
[22:58] At the same time, when I do need to talk to
say one of the artists or animators directly,
[23:04] it should be part of my duties to inform the
producer in charge of that particular individual
[23:14] that that is happening that way they can ensure
that maybe a higher priority task should take
[23:21] precedence or they know to follow up on that
task in the near future and we can all figure
[23:28] out... hey, were you along that timeline,
are we getting close to being done because
[23:35] this person is waiting on that.
[23:37] So, juggling tasks and figuring what priorities
of things is the resource we use from the
[23:47] production team.
[23:48] DV: So, it’s kind of a nitty gritty behind
the scenes look at game development, it’s
[23:53] not the most romantic or glamorous type of
question but it is one that’s important.
[23:59] That’s why we wanted to address it, there
are things that go on behind the scenes that
[24:02] help streamline a lot of these things other
than just making pretty ships and cool levels.
[24:08] [24:08] SloanWarrior asks: How did you decide
how to size the components for the components
[24:14] system?
[24:15] We’ve heard that ammo bins might be able
to hold fuel when they’re not being used
[24:19] for ammo.
[24:20] Is this a uniquely interchangeable system
or might other components also grant storage
[24:24] space for one resource or another when removed?
[24:27] KT: Great questions!
[24:28] So…
[24:29] DV: I’m thinking behind hidden panels,things
like that.
[24:30] How about a fake fuel cap?
[24:31] KT: Yep!
[24:32] Smuggling is a topic that has come up for
piracy or just being able to stow equipment
[24:40] safely for you, on your ship.
[24:42] That is a topic we’re in the midst of discussion
for.
[24:46] There was a pass on components for each of
the component types, they were mostly done
[24:53] by, they were spearheaded by Elwin who took
the, metrics that we use for the ships and
[25:02] for any of the buildings in FPS, the…
[25:05] DV: We’re talking what metrics?
[25:07] Volume, length?
[25:08] KT: Right.
[25:09] These are the standard minimum doorway size
that we have on the ship.
[25:14] The standard minimum walkway path that we
need.
[25:19] Things like seats, turret sizes, weapons,
any of these components we took a look at
[25:25] them and decided “Ok”.
[25:27] A size one small component should be roughly
this size, and no bigger than that size.
[25:33] So we took the maximum allowable size for
the component and ensured that all those components
[25:40] fit that size, fit neatly in that box.
[25:44] So everythings boxed, box shape.
[25:46] That way we can ensure that when we build
a ship that has a physicalised component when
[25:52] we swap out a size one, say radar, then we
can actually implement another size one radar
[26:00] in the same space without having to have custom
geo just for that enclosure, and that ensures
[26:06] the swapability of components and allows us
to make components that are unique enough
[26:12] to, make you want to get a different type
of component to suit a different need.
[26:18] DV: So it’s actually something that we’ve
discussed in the past where we’re finally
[26:22] starting to see it come to fruition as the
standardised modularity.
[26:25] You might have heard some of us talking on
previous Ten for the Producers and Ten for
[26:29] the Designers that we’ve been look at trying
to create standardisation for these sizes
[26:33] for a long time.
[26:34] And that was something that was spearheaded
by Elwin.
[26:36] By creating standard bounty boxes you create
a template for every single size one, every
[26:41] single size two because now we have a range
measurements that we can utilise to put those
[26:46] on
[26:47] KT: Right, and that’s important for us as
Designers because when we’re implementing
[26:49] a ship in whitebox we can take these bounds
that we create for the ships and we know that
[26:57] this is going to require a size 2 component
of this type.
[27:00] We need to ensure that it is placed in the
ship roughly around here.
[27:05] Well we’ll need access to it, because the
ship does have an interior so we can communicate
[27:10] to the Artist that there needs to be a core
goal or some kind of wall in which there is
[27:14] a panel that we can access this so when we
go to actually repair it or swap it out or
[27:18] salvage it, if you’re a pirate!
[27:21] There is the capability to physically access
that object.
[27:25] What’s also interesting about that is when
we eventually have the ability to damage these
[27:32] components from the outside, so we’ll have
gameplay and you’re shooting up a ship from
[27:35] the outside you know you can target the shield
generator because you can take the shields
[27:39] down.
[27:40] Well you know where that is roughly in the
ship you can start shooting around it,and
[27:43] you will know that it does embody a physical
location on the ship, and you know where to
[27:48] target that particular component.
[27:50] On a converse when it is destroyed you will
also know on the ship.
[27:54] The engineering can tell you, “Hey get on
down to hallway A and repair the shield generator”.
[28:01] That crew member will know exactly where to
go, which panel to pop open and which component
[28:05] to repair.
[28:06] DV: Or in your cargo hold you could have a
whole crate full of different shield generators.
[28:11] Your engineer runs down, take one out, go
run back to the cargo, grabs the new one and
[28:14] throws it in there.
[28:16] So not actually fixing it but replacing it
as well
[28:18] KT: Right.
[28:19] So that’s just part one of the question,
part two was: what are the….
[28:22] Are we going to allow rechangeability of components?
[28:26] In general no.
[28:27] So most components will be in a specific spot,
slot put together for that component.
[28:33] Some of the component types though, such as
ammo, fuel, I think there was one more.
[28:39] I can’t remember off the top of my head
but there is a category of components in which
[28:44] you can choose to fit anyone of those types,
that fit in that particular range of components
[28:52] in that slot.
[28:53] So if we do have say a smuggling hold that
is placeable on our pirate themed ships.
[29:04] That is a component type you can choose to
fit onto that ship.
[29:08] If however if you really want to on the same
ship, fit it for longer quantum travel or
[29:16] further distance.
[29:17] Maybe you’ll choose a quantum fuel or a
regular fuel canister instead.
[29:21] If you really want to fit out a ship with
a lot of weaponry, well let’s put an ammo
[29:26] box in there instead.
[29:28] So there is a category of component types
that we are implementing in the near future.
[29:36] However for the most part components will
fit into their actual designed slot.
[29:41] DV: I just thought of it’s like a ship USB
system
[29:44] KT: Yeah.
[29:46] Not quite that modular!
[29:47] DV: But at the same time.
[29:48] Let’s say you have one labelled as a fuel
tank and technicality it’s actually a cargo
[29:54] hold.
[29:55] If let’s say a player’s a police officer
that’s trying to investigate this pirate
[30:02] ship and he see’s a fuel tank there, well
he knows pirates tend to use these as cargo
[30:08] holds.
[30:09] I remember hearing someone discussing about
being able to scam them and be able to trick
[30:13] scammers as well?
[30:15] KT: That is something that we’ll have to
design and implement but yeah, sure
[30:19] DV: Something way down the road!
[30:22] KT: Yeah.
[30:23] We can also design say a cargo hold that does
disguise itself as a…
[30:27] DV: Fuel tank or an ammo box
[30:29] KT: Fuel tank.
[30:30] And it actually has that, when we implement
that actual scanning gameplay, perhaps there’s
[30:34] a way in that it actually mimics the actual,
the component that it’s trying to pretend
[30:39] to be that way you can smuggle, or use it
as a smoke ring canister, because we’re
[30:47] only going to make a finite number of ships
and so there’s no way that we can say that
[30:54] “Hey we can randomly generate these smuggling
holds”.
[30:59] So each ship if you take a minute to study
you’ll know that “Hey it’s a capability
[31:03] of it having this smuggling hold”.
[31:04] So let’s figure out gameplay in which you
can make use of that item and still get away
[31:12] with that gameplay by giving us the capability
to whoever is trying to scan that particular
[31:19] item.
[31:20] DV: If you use a car analogue.
[31:21] No matter how many Ford Mustangs you look
at, you’re going to know where the engine
[31:25] is every single time.
[31:28] KT: Right.
[31:30] [31:29] Sultann asks: We just have a big step
in Star Citizen.
[31:36] Do you feel more pressure now than before
that the next big step will be more impressive
[31:42] than 2.0?
[31:43] DV: Essentially asking with every release
do we feel pressure to out do ourselves every
[31:50] time.
[31:51] And that’s a ubiquitous, unanimous yes.
[31:54] When we released 2.0 that was with much great
fanfare that we finally released multi-player,
[31:59] multi-crew technology but we already had our
sights on 2.1 and now we’ve got our sights
[32:05] on 2.2.
[32:06] And every time we release one of these patches,
yes the pressure is there to deliver, but
[32:10] we’re always confident that we can deliver
more and more.
[32:14] That’s kind of the … that’s kind of
what we do every single time.
[32:16] If we tried to release inferior content every
time … we want to make sure that we are
[32:23] wowing you guys with every new release.
[32:24] That’s why we are constantly showing you
guys new ships, new technology.
[32:27] That's why we have discussions like this to
keep you guys up to date on what we are working
[32:31] on.
[32:32] So is there pressure?
[32:33] Absolutely, but we are pretty confident that
we can out do it each time.
[32:36] KT: And just like any other company the more
and more we do this, the better and better
[32:41] we get.
[32:42] DV: Yes.
[32:43] KT: This includes things like planning for
the future.
[32:46] May not have been so great at that in the
past but as we overcome more and more hurdles
[32:53] and get to each goal, we get better and better
at planning for what we’ll need, ensuring
[33:02] that we can achieve these things without simply
having it as a line item in an email “hey
[33:09] we know what we’re going to do how do we
get there?”
[33:13] Figuring out the steps that we need to take
and incrementally improving on each of these
[33:19] processes is something we are getting better
and better at every day.
[33:22] DV: This is actually where a lot of production
work comes in: being able to pre-plan what
[33:26] those objectives are.
[33:28] We may, let’s look at 2.3 or 2.4 and beyond,
we may have a rough idea of what we want to
[33:35] be in those patches and ultimately Chris is
going to dictate we want in those patches,
[33:39] what content we want to deliver, so it is
up to Production to be able to pre-plan all
[33:42] these schedules out.
[33:43] And this is where a lot of our tools like
Jira, Microsoft Project … what we are starting
[33:48] to do is standardise a lot of … in fact
as Kirk mentioned, as we do this and fine
[33:53] tune this standardisation of our practices
is going to help us accomplish those goals
[33:56] and make them higher quality each time because
we are looking what tasks we have done in
[34:02] the past; what we’ve completed before; and
how can we apply those same practices in the
[34:05] future.
[34:06] So I guess just as long as we keep on trucking
it’s going to get better.
[34:13] Next question comes from Raven ...
[34:14] [34:16] Raven asks: What are your thoughts
on massively increasing the hull and shields
[34:17] on all ships equally across the board?
[34:19] Currently I feel ship battles are over quickly
and this gives little time to respond to system
[34:25] failures in larger ships.
[34:26] I would like to see this as battles would
be longer and more immersive, allowing you
[34:31] to repair systems and hull breaches for more
of the “decisions matter” effect.
[34:36] Right now by the time you take on damage the
fight is over before you can finish the chair
[34:39] animation.
[34:40] DV: That’s kind of the nature of the smaller
ships though right?
[34:41] KT: I mean yes and no.
[34:43] This is a very fair criticism of some of the,
especially the Arena Commander, battles.
[34:49] What we need to do when we are refactoring
each of these systems, shields is being refactored
[34:56] as we speak, we then need to take a balance
pass and figure out what we need to do to
[35:03] change the min and max ranges of each of the
values in the system.
[35:12] So for example, with the shields we are going
to introduce gameplay in which you can do
[35:17] things like give priority to a certain shield;
or change the way it can repair faces faster;
[35:23] or do shield face hardening; or the way in
which faces can absorb damage or deflect damage
[35:36] away.
[35:37] So once we implement these systems and get
that gameplay into the game then we need to
[35:44] go and sit with each of the ships and start
shooting at the ship, figuring out “okay,
[35:52] well ships of this size with this particular
shield can withstand this much damage for
[35:57] this amount of time” and put that all in
a big chart and then figure out where each
[36:02] of the ship lies and if we need to tweak any
changes.
[36:06] So to answer you question, we do need to better
balance passes for each of our systems.
[36:14] Making hulls and shields across the board
larger may not be the best way to do that.
[36:19] DV: We want to have more tactical combat rather
than just overall buffs.
[36:22] KT: Sure, and so what we can do is, we can
take a look at each of the systems individually,
[36:28] shields, hull, health, mass, damage per second,
by weapon type, etc. and figure out “okay,
[36:36] where in the realm of the things that we want
to look at, like DPS for weapons, where does
[36:43] that particular weapon sit?
[36:46] Where should it sit?”
[36:47] If it isn’t sitting in the right place we
figure out “okay, we need to tweak these
[36:50] particular values and make sure that they
do fit a role for that particular component
[36:58] type.
[36:59] So yes we want to make gameplay more interesting.
[37:03] We will do that with balance.
[37:05] I think this will definitely come into play
as we start making larger and larger ships
[37:10] because as we do implement ships, or ship
types, that we haven’t before we need to
[37:18] figure out “okay, how do we do this without
breaking what already exists?”
[37:21] So if we make, say, the Constellation, if
we made it impossible to destroy with a couple
[37:30] of Hornets it wouldn’t be very fun.
[37:33] So figuring out where, again, the ship lies;
where the capability of each of its systems
[37:40] types should lie and ensuring that those values
are correct is part of our jobs and we need
[37:47] to be better at that.
[37:48] DV: At the same time let’s look at real
world analogies or comparisons: if you have
[37:53] two people on motorcycles that crash into
each other at high speed chances are they’re
[37:57] both going to get wrecked.
[37:59] Pretty quickly.
[38:00] If you have a car hit a motorcycle the chances
are the car will be a little dented but the
[38:05] motorcycle will be pretty totalled.
[38:06] KT: It’s true.
[38:07] We still need to, as game designers, we still
need to figure out a way in which that is
[38:11] fun.
[38:12] DV: Yeah.
[38:13] Absolutely.
[38:14] So you don’t want it to be over quickly
but you still want to add an element of adrenalin
[38:17] pumping with tactical strategies.
[38:18] KT: Right.
[38:20] So that also comes into play when we’re
designing ships.
[38:25] We can’t make a ship that is just OP, in
which playing any other ship types is just
[38:32] no fun.
[38:33] DV: Right.
[38:34] KT: So we figure out how is it better than
other ships, yet consider if you have a fleet
[38:41] of smaller ships can they take it out?
[38:43] Let’s figure out a way we can do that.
[38:45] DV: Ultimately just establishing a really
good strong meta for the combat.
[38:49] KT: Yeah.
[38:50] DV: So this one comes from Minion Soldier
and this is kind of an interesting one …
[38:54] [38:54] MinionSoldier asks: How do you coordinate
efforts between game play feature implementation
[38:58] and relative ship completion?
[39:00] For instance, if mining was being brought
into the client would you automatically put
[39:03] the Orion into production?
[39:05] Or would you shelve mining until the Orion
or the other small mining vessel was done?
[39:09] DV: This is where a lot of the strategic planning
and communication between production design
[39:13] comes into play.
[39:14] This is also where good direction from management,
Chris or Ben, also comes into play.
[39:20] So when we release a feature or a ship thematically,
for example, if we wanted to do a salvage
[39:26] feature, ideally we want to have content for
players to take advantage of that.
[39:33] So, a salvage specific ship would be a good
example of releasing when we released the
[39:37] salvage mechanics, same thing if we wanted
to release a repair mechanic, you know having
[39:42] the what’s is it...
[39:43] Endeavor.
[39:44] Having that come out at the same time would
make good sense.
[39:46] If we created a mining mechanic using your
example here, if we created the mining feature
[39:52] but we don’t give players a ship to do mining
on.
[39:54] It’s a feature that’s basically sitting
there waiting until we have that feature completed
[39:58] or a ship to take advantage of that feature.
[40:01] Ultimately, this is where planning and preproduction
and communication comes into play.
[40:05] KT: Right, so none of these things are coincidental.
[40:07] When we do decide to create a ship and decide
a release date for it, we need to ensure that
[40:13] the systems that make that are unique to that
ship actually exist… are designed out and
[40:21] are implemented from code and tech design
so that those systems are in play by the time
[40:27] the ship is actually created.
[40:29] DV: A good example is quantum travel, if we
released quantum travel without any ship that
[40:33] can quantum travel…
[40:34] KT: Doesn’t make a lot of sense.
[40:38] So, there is a lot of design that goes into
that… quantum travel is a great example.
[40:43] We needed to decide what quantum travel was,
how it realized itself in the game, how the
[40:50] component interaction for quantum travel was,
standard things like the distance for quantum
[40:55] travel, time for quantum travel, quantum fuel
is a thing now so we implement quantum fuel
[41:00] as a part of quantum travel.
[41:01] That’s a system that needed to be designed
before we created a bunch of ships that were
[41:07] capable of doing quantum travel.
[41:09] DV: Excellent question but yes it is not coincidence
that we release these like that.
[41:16] [41:17] Ezreail asks: With regards to the
increase in ship sizes, I.E Idris, are some
[41:22] of the smaller capital ships still going to
be capable of landing planetside.
[41:26] If they can when will we be able to actually
walk in and around them.
[41:31] I’ve been jonesing to see what the Idris
has become since its transformation.
[41:34] DV: I’ve been waiting for this question
this is a cool one.
[41:36] KT: Great question.
[41:38] We are discussing that now.
[41:41] However for the most part, the, we are deciding
which ships are planetside landing capable
[41:48] or not when we design the ships.
[41:51] One interesting topic that came up was, for
some of the snub nose or smaller fighters,
[41:56] we are deciding to either make them Quantum
Travel capable or atmospheric landing capable.
[42:07] As a trade off between for having such a small
ship you need to pick one that suits the needs
[42:16] that you are looking for.
[42:17] This is especially important when we have
ships that are capable of carrying smaller
[42:22] ships.
[42:23] The Connie is an example of one, though the
Merlin doesn’t actually function on it yet,
[42:31] but when it does, you’ll get the capabilities
of what the Merlin is able to do when that
[42:37] comes online.
[42:39] For other ships that have snub nosed fighters
for example or a carrier ship you can decide
[42:45] Well you know what I really wanted to park
this carrier outside of a planet and then
[42:52] go down to the planet surface using all these
smaller atmospheric landing capable ships.
[42:58] Or what I really want are a bunch of say like
taxi style vehicles that allow you to shoot
[43:06] across the galaxy and then meet up with other
ships very quickly.
[43:10] You’ll need to make a decision.
[43:11] So as we design each ship we are deciding
whether or not they are Quantum Travel capable
[43:20] and atmospheric landing capable.
[43:23] So these are things we’re deciding and it’s
on a ship by ship basis.
[43:27] When will we get to see this?
[43:28] Well that’s a great question!
[43:29] We’re still, we’re working on these we’re
making these ships as fast as possible however
[43:35] all of the ships that are medium size or larger
are definitely going to have interiors that
[43:42] you can walk around in.
[43:45] I discussed earlier things like being able
to access the components from the inside.
[43:50] That’s going to be a big thing and so yes
there will be interiors that you can walk
[43:56] around with, walk around in.
[43:59] And then interact with other crew members,
components, systems.
[44:02] There will be standards things we have like
beds, bathrooms, etc
[44:07] DV: We want to give players a reason to walk
around these large ships.
[44:11] A reason why you want to walk down this hallway
and open this door and other than just, besides
[44:15] having the reason of just having a large ship.
[44:17] We want to give you guys a reason to walk
down that hall, open the door, access this
[44:22] panel.
[44:23] Apart from just being for that reason
[44:24] KT: And then we’ll need to make decisions
such as how do we make modular components
[44:30] for these ships so, at least on a ship level
for well when we create a ship like an Idris,
[44:39] it’s impossible to fill every square inch
of that thing with custom geos so we need
[44:46] to figure out what a standard hallway is,
what a standard room is like, what the engineering
[44:50] station is going to be like, what the, if
there’s an engine housing room, if there’s
[44:54] a cargo area that we can make modular and
place on several parts of the ship if there
[45:01] are landing areas for that ship how do we
figure.
[45:07] We make choices so that we can make a ship
that’s functional and is within reason schedule
[45:15] wise because we want to create the best as
quickly as possible these are things we consider
[45:25] when we are designing and ultimately building
the ship from nothingness to something that
[45:31] we can actually see in the game
[45:33] DV: Let me give two examples.
[45:35] For those who are anime fans look at the Cowboy
Bebop anime series.
[45:38] you’ve got the Bebop ship that carries:
spike’s, swordfish.
[45:42] And you’ve got also Faye and Jet’s smaller
ships.
[45:46] They use the Bebop through Warp Gates carrying
those ships even though the Bebop can land
[45:53] trans-atmospherically it still has smaller
ships that it can with it.
[45:57] But if you look at something like Battlestar
Galactica where they have giant fleets of
[46:00] ships and some of them are orbital space stations
that are jump capable but something that is
[46:05] shaped like a ring or like an orbital station
is not going to be able to land so you want
[46:09] to have shuttles and lighter ships, well they’re
called lighters, that can go inbetween ship
[46:15] to ship or trans-atmospherically up and down.
[46:17] We’ll even have orbital docking yards where
you get up from there and you take a taxi
[46:22] or a shuttle back down to the surface.
[46:24] It’s ultimately going to be decided by what
that gameplays need is, what the ships functionality
[46:29] is going to be is, what the role that ship
is going to fill.
[46:31] So ultimately there’s going to be an ultimate
large size of what ships can land something
[46:36] like…
[46:37] KT: I don’t think we’ve made that decision
yet.
[46:41] I think we’re going to decide on those capabilities
based on the role of the ships.
[46:46] “What is that ship made for?
[46:48] What is the reason to own that ship?”.
[46:50] Then we’ll make a decision about those particular
characteristics at that point
[46:55] DV: Right.
[46:56] I can figure something like a Bengal Carrier
trying to make a landing would cause major
[46:59] atmospheric problems.
[47:01] [47:03] AragornBH asks: What is the most useful
suggestion you have received from a Star Citizen
[47:11] backer?
[47:12] Did it change the way in which you value feedback?
[47:14] DV: This is a very subjective question and
we filled you with a lot of technical details
[47:19] today, especially as far as a lot of component
information.
[47:25] We get a lot of input from all around because
this is a crowdfunded game we get a lot of
[47:32] input from players on where they’d like
to see the game go; what ship we should create;
[47:37] and ultimately while we are following Chris’
visions we still like to solicit feedback
[47:41] from the backers and our from audience.
[47:44] The most interesting one that I got was a
possible cultural faux pas I did back in one
[47:50] of the original 10 for the Producers where
I made a joke, what I thought was a pretty
[47:56] safe joke, it did end up offending a couple
of backers from a particular geographic region.
[48:02] KT: Please do tell.
[48:04] KT: [to camera] I didn’t know about this!
[48:08] DV: Someone asked me how did I meet Travis
or what’s it like working with Travis.
[48:11] And I said I’d met Travis in a, I think
I said, Serbian prison camp: he took a knife
[48:18] for me once and I’ve been indebted to him
ever since.
[48:20] KT: Ah.
[48:21] DV: It was said, just, offhandedly there was
no intention … I could have said a Japanese
[48:25] prison camp or an Antarctic prison camp.
[48:28] It didn’t matter, the joke was regarding
the prison camp itself that he took a knife
[48:31] for me once and I’ve been indebted to him
ever since.
[48:33] That was the joke but because I used a certain
countries reference that does have a history
[48:41] of particular turmoil a lot of viewers from
that region were really upset.
[48:46] And I know it sounds very superficial but
it actually did change the way present information
[48:52] and the way I think about certain answers
and the way I actually approach certain individual
[48:56] within in the company as far as being more,
not necessarily being politically correct
[49:01] or culturally aware, but it did remind me
that we have a very wide audience.
[49:08] And while trying to walk the neutral line
is an impossible thing ultimately there is
[49:20] a way information can be presented in a very
humorous way and while still being able to
[49:24] maintain an objective conclusion.
[49:27] KT: Staying professional is pretty important.
[49:31] DV: Right.
[49:32] Anything from you?
[49:33] KT: I can’t think of anything specifically.
[49:38] What I will suggest though is that we do get
a lot of feedback from the community and it’s
[49:43] terrific.
[49:44] Keep it coming.
[49:46] We do read everything and we do consider everything.
[49:50] Some things are simply impossible to implement
or it’s not feasible within either the design
[49:58] or the scope of the systems or the …
[50:02] DV: Or technical capability!
[50:05] KT: … the world we’re creating.
[50:07] However we do enjoy all the ideas.
[50:11] Any idea that comes from the backers and the
community is welcome.
[50:16] So let us know your feedback because without
you voicing your opinion we don’t know what
[50:23] you guys are thinking.
[50:24] So continue that and we welcome it all.
[50:27] DV: Yeah.
[50:28] We could be working on a great idea from our
perspective, looks absolutely amazing and
[50:31] kick ass, but we put in game and realise a
lot of players aren’t using it because they
[50:35] might find it boring or it may not fit the
original vision we had for it.
[50:39] So this is where a lot of feedback from you
guys comes in.
[50:41] So I want to amend my answer a little bit:
while that one instance I gave is something
[50:47] that changed my perspective we do look at
everybody, as Kirk says, we do look at everybody’s
[50:53] suggestions and it is those suggestions that
help mold the game.
[50:55] KT: We got these questions from you guys!
[50:56] DV: Yeah, absolutely.
[50:57] [50:58] Outro
[50:58] DV: So again it’s been a very, very technically
oriented 10 for the Developers with Kirk giving
[51:03] us a lot of information as far as the Components
system and how a lot of that fits into the
[51:07] game system.
[51:08] So hopefully you guys enjoyed it.
[51:10] We try to keep it as entertaining as possible
but again we wanted thank the Subscribers
[51:14] for being able to make this kind of content
possible: without you guys none of this would
[51:18] be able.
[51:19] So from us it is a very humble thank you for
making this capable.
[51:22] Once again I’m Production Coordinator Darian
Vorlick.
[51:24] KT: And I’m Lead Technical Designer Kirk
Tome.
[51:26] DV: So thank you again.
[51:42] Thank you for watching this 10 for the Developers.
[51:52] See you guys next time.
[51:58] KT: Bye.
